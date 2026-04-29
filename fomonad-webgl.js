/**
 * fomonad-webgl.js — GPU-rendered logo for .hero-bg-logo
 *
 * Four-pass pipeline:
 *
 *   texStatic  ← rasterised fomonad-geometry-static.svg
 *   texSneks   ← rasterised fomonad-geometry-sneks.svg
 *   texPump    ← rasterised fomonad-geometry-pump.svg  (PUMP text, transparent bg)
 *   texRug     ← rasterised fomonad-geometry-rug.svg   (RUG text, transparent bg)
 *
 *   Pass 1 → fboComp  (SVG_SIZE²): composite static + rotate(sneks) + orbit text
 *   Pass 2 → fboGlowH (SVG_SIZE²): horizontal Gaussian blur of fboComp
 *   Pass 3 → fboFX    (screen):    vertical Gaussian → screen-blend glow
 *                                   + chromatic aberration
 *   Pass 4 → screen   (screen):    5×5 box blur (≈ CSS blur(2px))
 *
 * Gaussian σ = 1.8 SVG-units (matches SVG neonGlow stdDeviation=1.8).
 * In UV space this is σ_UV = 1.8/100 = 0.018 for all resolutions.
 * Using 25-tap kernel (radius 12) with step = σ_UV/3.
 */
(function () {
  "use strict";

  const SVG_SIZE = 512;
  const SPIN_PERIOD = 30; // seconds

  // 25-tap Gaussian kernel (radius 12, step = σ/3 in tap units → 4 taps per σ)
  // Weights: w(k) = exp(−k²/(2·σ_t²)), σ_t = 3, normalised.
  const GLOW_WEIGHTS = (() => {
    const sigma = 3.0;
    const w = [];
    for (let k = 0; k <= 12; k++) w.push(Math.exp(-(k * k) / (2 * sigma * sigma)));
    const sum = w[0] + 2 * w.slice(1).reduce((a, b) => a + b, 0);
    return w.map(x => x / sum);
  })();

  // Text orbit radii in UV: distance from SVG centre (50,50) to text centre.
  // PUMP centre ≈ (50, 30.55) → r = 19.45/100 = 0.1945
  // RUG  centre ≈ (50, 71.55) → r = 21.55/100 = 0.2155
  const PUMP_R = 0.1945;
  const RUG_R = 0.2155;

  // textGlitch: 15s step-end cycle, first burst in first 3% (0.45s).
  // Translate values from original SVG CSS animation converted to UV.
  // 1 CSS px ≈ 1/400 of the element ≈ 0.0025 UV (element ~400px, viewBox 100 units).
  // Plus an additional multipluier to make it more dramatic
  const PX = 0.0025 * 10;
  const GLITCH_KF = [
    // [phase_end, dx, dy, opacity]
    [0.005, 0, 0, 0.75],
    [0.010, -0.75 * PX, 0, 0.50],
    [0.015, 1.50 * PX, -0.75 * PX, 1.00],
    [0.020, -1.25 * PX, 0.50 * PX, 0.15],
    [0.025, 1.00 * PX, -0.25 * PX, 0.85],
    [0.030, -0.50 * PX, 0, 0.60],
    [1.000, 0, 0, 0.75],
  ];
  const GLITCH_PERIOD = 15;
  const GLITCH_DELAY = 7.75;

  function getGlitch(t) {
    const phase = ((t + GLITCH_DELAY) % GLITCH_PERIOD) / GLITCH_PERIOD;
    for (const [end, dx, dy, opacity] of GLITCH_KF) {
      if (phase < end) return { dx, dy, opacity };
    }
    return { dx: 0, dy: 0, opacity: 0.75 };
  }

  // Glitch bar step-end keyframes — translate(Xpx,Ypx) → UV (X/100, −Y/100) after Y-flip.
  function evalBarKF(kf, period, delay, t) {
    const phase = ((t + delay) % period) / period;
    for (const [end, dx, dy] of kf) {
      if (phase < end) return [dx, dy];
    }
    return [0, 0];
  }
  const KF_gA = [[0.874,0,0],[0.881,-0.04, 0.01],[0.885, 0.03,-0.01],[1,0,0]];
  const KF_gB = [[0.913,0,0],[0.920, 0.05, 0.02],[0.924,-0.03, 0.00],[1,0,0]];
  const KF_gC = [[0.845,0,0],[0.853,-0.06,-0.01],[0.858, 0.04, 0.01],[1,0,0]];
  const KF_gD = [[0.943,0,0],[0.951, 0.03,-0.02],[0.955,-0.05, 0.01],[1,0,0]];

  function getBarOffsets(t) {
    // #glitch1: gA(3.71s,0) + gB(7.13s,−1.30s)
    const [a1x,a1y] = evalBarKF(KF_gA, 3.71, 0.00, t);
    const [b1x,b1y] = evalBarKF(KF_gB, 7.13, 1.30, t);
    // #glitch2: gC(5.17s,−0.70s) + gD(4.37s,−2.90s)
    const [c2x,c2y] = evalBarKF(KF_gC, 5.17, 0.70, t);
    const [d2x,d2y] = evalBarKF(KF_gD, 4.37, 2.90, t);
    // #glitch3: gB(6.29s,−1.10s) + gA(3.11s,−0.40s)
    const [b3x,b3y] = evalBarKF(KF_gB, 6.29, 1.10, t);
    const [a3x,a3y] = evalBarKF(KF_gA, 3.11, 0.40, t);
    return [
      [a1x+b1x, a1y+b1y],
      [c2x+d2x, c2y+d2y],
      [b3x+a3x, b3y+a3y],
    ];
  }

  // Ghost arc glitch offsets — step-end keyframes matching gOff1/gOff2 from animated SVG.
  // Values in UV space. SVG translate(x,y) → UV (x/100, -y/100) after Y-flip.
  // Cyan: gOff1, 4.79s period, −0.80s delay. Base offset: translate(3,−2) → (0.03, 0.02).
  function getGhostCyanOff(t) {
    const phase = ((t + 0.80) % 4.79) / 4.79;
    if (phase < 0.904) return [0.03,  0.02];
    if (phase < 0.911) return [0.07,  0.05]; // translate(7,−5)
    if (phase < 0.915) return [0.01,  0.00]; // translate(1,0)
    return                     [0.03,  0.02];
  }
  // Pink: gOff2, 5.83s period, −1.70s delay. Base offset: translate(−3,2) → (−0.03,−0.02).
  function getGhostPinkOff(t) {
    const phase = ((t + 1.70) % 5.83) / 5.83;
    if (phase < 0.884) return [-0.03, -0.02];
    if (phase < 0.893) return [-0.07, -0.05]; // translate(−7,5)
    if (phase < 0.898) return [-0.01, -0.01]; // translate(−1,1)
    return                     [-0.03, -0.02];
  }

  // ── Shared vertex shader ───────────────────────────────────────────────────
  const VS = `
    attribute vec2 a_pos;
    varying   vec2 v_uv;
    void main() {
      v_uv        = a_pos * 0.5 + 0.5;
      gl_Position = vec4(a_pos, 0.0, 1.0);
    }
  `;

  // ── Pass 1: composite static bg + rotated sneks + orbiting text ────────────
  const FS_COMPOSITE = `
    precision mediump float;
    varying   vec2      v_uv;
    uniform   sampler2D u_static;
    uniform   sampler2D u_sneks;
    uniform   sampler2D u_ghostCyan;
    uniform   sampler2D u_ghostPink;
    uniform   sampler2D u_pump;
    uniform   sampler2D u_rug;
    uniform   float     u_angle;
    uniform   vec2      u_ghostCyanOff;
    uniform   vec2      u_ghostPinkOff;
    uniform   vec2      u_pumpOff;
    uniform   vec2      u_rugOff;
    uniform   float     u_pumpOpacity;
    uniform   float     u_rugOpacity;
    uniform   vec2      u_bar1Off;
    uniform   vec2      u_bar2Off;
    uniform   vec2      u_bar3Off;

    vec2 rotateUV(vec2 uv, float a) {
      float c = cos(a), s = sin(a);
      vec2 d = uv - 0.5;
      return vec2(d.x*c - d.y*s, d.x*s + d.y*c) + 0.5;
    }

    vec3 blend(vec3 base, vec4 tex) {
      return tex.rgb * tex.a + base * (1.0 - tex.a);
    }

    vec3 overlay(vec3 base, vec4 tex, float opacity) {
      float a = tex.a * opacity;
      return tex.rgb * a + base * (1.0 - a);
    }

    // Branchless rect fill with UV offset.
    vec3 drawBar(vec3 col, vec2 uv, vec2 off,
                 float x0, float x1, float y0, float y1,
                 vec3 barColor, float opacity) {
      vec2 p = uv - off;
      float inside = step(x0, p.x) * step(p.x, x1) * step(y0, p.y) * step(p.y, y1);
      return mix(col, barColor, inside * opacity);
    }

    void main() {
      // Hardcoded background — static SVG is now transparent.
      vec3 col = vec3(0.0235, 0.0235, 0.0314); // #060608

      // Glitch bars behind everything — shader rects, offset driven by JS per frame.
      // UV coords: SVG (x,y) → UV (x/100, 1−y/100) after Y-flip.
      // Bar1: #ffe600 op=0.80, SVG x∈[0,44]   y∈[47,49]   → UV x∈[0.00,0.44] y∈[0.51,0.53]
      col = drawBar(col, v_uv, u_bar1Off, 0.00, 0.44, 0.51, 0.53, vec3(1.000,0.902,0.000), 0.80);
      // Bar2: #ffe600 op=0.55, SVG x∈[58,100]  y∈[51,52.5] → UV x∈[0.58,1.00] y∈[0.475,0.49]
      col = drawBar(col, v_uv, u_bar2Off, 0.58, 1.00, 0.475, 0.49, vec3(1.000,0.902,0.000), 0.55);
      // Bar3: #00e5ff op=0.40, SVG x∈[40,62]   y∈[49,50]   → UV x∈[0.40,0.62] y∈[0.50,0.51]
      col = drawBar(col, v_uv, u_bar3Off, 0.40, 0.62, 0.50,  0.51, vec3(0.000,0.898,1.000), 0.40);

      vec2 rUV = rotateUV(v_uv, u_angle);

      // Ghosts below main sneks.
      col = blend(col, texture2D(u_ghostCyan, rUV - u_ghostCyanOff));
      col = blend(col, texture2D(u_ghostPink, rUV - u_ghostPinkOff));

      // Main sneks.
      if (rUV.x >= 0.0 && rUV.x <= 1.0 && rUV.y >= 0.0 && rUV.y <= 1.0)
        col = blend(col, texture2D(u_sneks, rUV));

      // Centre dots on top.
      col = blend(col, texture2D(u_static, v_uv));

      col = overlay(col, texture2D(u_pump, v_uv - u_pumpOff), u_pumpOpacity);
      col = overlay(col, texture2D(u_rug,  v_uv - u_rugOff),  u_rugOpacity);

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  // ── Pass 2: horizontal/vertical Gaussian blur (25 taps) ───────────────────
  function makeGaussFS(direction) {
    return `
      precision mediump float;
      varying   vec2      v_uv;
      uniform   sampler2D u_src;
      uniform   float     u_step;
      uniform   float     u_w[13]; // weights k=0..12

      void main() {
        vec2 d = ${direction === "H" ? "vec2(u_step, 0.0)" : "vec2(0.0, u_step)"};
        vec3 acc = texture2D(u_src, v_uv).rgb * u_w[0];
        acc += texture2D(u_src, v_uv + 1.0*d).rgb * u_w[1]
             + texture2D(u_src, v_uv - 1.0*d).rgb * u_w[1];
        acc += texture2D(u_src, v_uv + 2.0*d).rgb * u_w[2]
             + texture2D(u_src, v_uv - 2.0*d).rgb * u_w[2];
        acc += texture2D(u_src, v_uv + 3.0*d).rgb * u_w[3]
             + texture2D(u_src, v_uv - 3.0*d).rgb * u_w[3];
        acc += texture2D(u_src, v_uv + 4.0*d).rgb * u_w[4]
             + texture2D(u_src, v_uv - 4.0*d).rgb * u_w[4];
        acc += texture2D(u_src, v_uv + 5.0*d).rgb * u_w[5]
             + texture2D(u_src, v_uv - 5.0*d).rgb * u_w[5];
        acc += texture2D(u_src, v_uv + 6.0*d).rgb * u_w[6]
             + texture2D(u_src, v_uv - 6.0*d).rgb * u_w[6];
        acc += texture2D(u_src, v_uv + 7.0*d).rgb * u_w[7]
             + texture2D(u_src, v_uv - 7.0*d).rgb * u_w[7];
        acc += texture2D(u_src, v_uv + 8.0*d).rgb * u_w[8]
             + texture2D(u_src, v_uv - 8.0*d).rgb * u_w[8];
        acc += texture2D(u_src, v_uv + 9.0*d).rgb * u_w[9]
             + texture2D(u_src, v_uv - 9.0*d).rgb * u_w[9];
        acc += texture2D(u_src, v_uv +10.0*d).rgb * u_w[10]
             + texture2D(u_src, v_uv -10.0*d).rgb * u_w[10];
        acc += texture2D(u_src, v_uv +11.0*d).rgb * u_w[11]
             + texture2D(u_src, v_uv -11.0*d).rgb * u_w[11];
        acc += texture2D(u_src, v_uv +12.0*d).rgb * u_w[12]
             + texture2D(u_src, v_uv -12.0*d).rgb * u_w[12];
        gl_FragColor = vec4(acc, 1.0);
      }
    `;
  }

  // ── Pass 3: screen-blend glow + chromatic aberration + scanlines ──────────
  const FS_COMPOSE_FX = `
    precision mediump float;
    varying   vec2      v_uv;
    uniform   sampler2D u_src;
    uniform   sampler2D u_glow;
    uniform   float     u_glowStr;
    uniform   vec2      u_aber;
    uniform   float     u_aspect; // W/H — used to letterbox/pillarbox to a square

    void main() {
      // Remap v_uv so the square source always fits centred in the canvas.
      vec2 sqUV = v_uv;
      if (u_aspect > 1.0) {
        sqUV.x = (v_uv.x - 0.5) * u_aspect + 0.5;
      } else {
        sqUV.y = (v_uv.y - 0.5) / u_aspect + 0.5;
      }

      vec2 clamped = clamp(sqUV, 0.0, 1.0);
      float inside = step(0.0, sqUV.x) * step(sqUV.x, 1.0)
                   * step(0.0, sqUV.y) * step(sqUV.y, 1.0);

      // Main content — masked to square, background colour outside.
      float r = texture2D(u_src, clamped + u_aber).r;
      float g = texture2D(u_src, clamped         ).g;
      float b = texture2D(u_src, clamped - u_aber).b;
      vec3 col = mix(vec3(0.0235, 0.0235, 0.0314), vec3(r, g, b), inside);

      // Glow bleeds outside the square — CLAMP_TO_EDGE carries edge glow outward.
      vec3 glw = texture2D(u_glow, clamped).rgb * u_glowStr;
      col = 1.0 - (1.0 - col) * (1.0 - glw);

      // Scanlines repeat across the full canvas.
      float row = mod(floor(gl_FragCoord.y), 12.0);
      col *= (row < 4.0) ? 0.75 : 1.0;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  // ── Pass 4: 5×5 box blur → screen (≈ CSS blur(2px)) ──────────────────────
  const FS_BLUR = `
    precision mediump float;
    varying   vec2      v_uv;
    uniform   sampler2D u_src;
    uniform   vec2      u_px;

    void main() {
      vec3 acc = vec3(0.0);
      for (float dx = -2.0; dx <= 2.0; dx += 1.0)
        for (float dy = -2.0; dy <= 2.0; dy += 1.0)
          acc += texture2D(u_src, v_uv + vec2(dx, dy) * u_px).rgb;
      gl_FragColor = vec4(acc / 25.0, 1.0);
    }
  `;

  // ── WebGL boilerplate ──────────────────────────────────────────────────────
  function mkShader(gl, type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
      throw new Error(gl.getShaderInfoLog(s) + "\n\nSource:\n" + src);
    return s;
  }

  function mkProg(gl, fsSrc) {
    const p = gl.createProgram();
    gl.attachShader(p, mkShader(gl, gl.VERTEX_SHADER, VS));
    gl.attachShader(p, mkShader(gl, gl.FRAGMENT_SHADER, fsSrc));
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS))
      throw new Error(gl.getProgramInfoLog(p));
    return p;
  }

  function mkQuadBuf(gl) {
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    return b;
  }

  function mkTex(gl, source) {
    const t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    if (source) {
      // Canvas has Y=0 at top; WebGL textures have Y=0 at bottom. Flip on upload.
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    }
    return t;
  }

  function mkEmptyTex(gl, w, h) {
    const t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    return t;
  }

  function mkFBO(gl, tex) {
    const f = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, f);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return f;
  }

  function bindPos(gl, prog, buf) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  }

  async function rasteriseSVG(url, size) {
    const text = await (await fetch(url)).text();
    const objURL = URL.createObjectURL(new Blob([text], { type: "image/svg+xml" }));
    const img = new Image(size, size);
    img.src = objURL;
    await new Promise((ok, err) => { img.onload = ok; img.onerror = err; });
    URL.revokeObjectURL(objURL);
    const c = document.createElement("canvas");
    c.width = c.height = size;
    c.getContext("2d").drawImage(img, 0, 0, size, size);
    return c;
  }

  // ── Main ───────────────────────────────────────────────────────────────────
  async function init() {
    const container = document.querySelector(".hero-bg-logo");
    if (!container) return;

    const [staticCanvas, sneksCanvas, pumpCanvas, rugCanvas, ghostCyanCanvas, ghostPinkCanvas] = await Promise.all([
      rasteriseSVG("fomonad-webgl/static.svg",     SVG_SIZE),
      rasteriseSVG("fomonad-webgl/sneks.svg",      SVG_SIZE),
      rasteriseSVG("fomonad-webgl/pump.svg",       SVG_SIZE),
      rasteriseSVG("fomonad-webgl/rug.svg",        SVG_SIZE),
      rasteriseSVG("fomonad-webgl/ghost-cyan.svg", SVG_SIZE),
      rasteriseSVG("fomonad-webgl/ghost-pink.svg", SVG_SIZE),
    ]);

    container.innerHTML = "";
    container.style.filter = "none"; // shader handles the blur

    const canvas = document.createElement("canvas");
    canvas.style.cssText = "width:100%;height:100%;display:block;";
    container.appendChild(canvas);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 1, H = 1;

    const gl = canvas.getContext("webgl", {
      antialias: false, alpha: false,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    });
    if (!gl) {
      container.innerHTML =
        '<img src="fomonad-animated-optimized.svg" width="100%" height="100%" alt="">';
      container.style.filter = "blur(2px)";
      return;
    }

    // Source textures (never change after upload)
    const texStatic    = mkTex(gl, staticCanvas);
    const texSneks     = mkTex(gl, sneksCanvas);
    const texPump      = mkTex(gl, pumpCanvas);
    const texRug       = mkTex(gl, rugCanvas);
    const texGhostCyan = mkTex(gl, ghostCyanCanvas);
    const texGhostPink = mkTex(gl, ghostPinkCanvas);

    // Fixed-size FBOs (match SVG raster resolution)
    const texComp = mkEmptyTex(gl, SVG_SIZE, SVG_SIZE);
    const fboComp = mkFBO(gl, texComp);
    const texGlowH = mkEmptyTex(gl, SVG_SIZE, SVG_SIZE);
    const fboGlowH = mkFBO(gl, texGlowH);
    const texGlowV = mkEmptyTex(gl, SVG_SIZE, SVG_SIZE);
    const fboGlowV = mkFBO(gl, texGlowV);

    // Screen-res FBOs (recreated on resize)
    let texFX, fboFX;
    function resizeFBOs() {
      if (texFX) gl.deleteTexture(texFX);
      if (fboFX) gl.deleteFramebuffer(fboFX);
      texFX = mkEmptyTex(gl, W, H);
      fboFX = mkFBO(gl, texFX);
    }

    function resize() {
      W = Math.round(container.clientWidth * dpr);
      H = Math.round(container.clientHeight * dpr);
      canvas.width = W;
      canvas.height = H;
      resizeFBOs();
    }
    resize();
    new ResizeObserver(resize).observe(container);

    // Shader programs
    const progComp = mkProg(gl, FS_COMPOSITE);
    const progGlowH = mkProg(gl, makeGaussFS("H"));
    const progGlowV = mkProg(gl, makeGaussFS("V"));
    const progComposeFX = mkProg(gl, FS_COMPOSE_FX);
    const progBlur = mkProg(gl, FS_BLUR);

    const quad = mkQuadBuf(gl);

    // Uniform locations
    const uComp = {
      static:       gl.getUniformLocation(progComp, "u_static"),
      sneks:        gl.getUniformLocation(progComp, "u_sneks"),
      ghostCyan:    gl.getUniformLocation(progComp, "u_ghostCyan"),
      ghostPink:    gl.getUniformLocation(progComp, "u_ghostPink"),
      pump:         gl.getUniformLocation(progComp, "u_pump"),
      rug:          gl.getUniformLocation(progComp, "u_rug"),
      angle:        gl.getUniformLocation(progComp, "u_angle"),
      ghostCyanOff: gl.getUniformLocation(progComp, "u_ghostCyanOff"),
      ghostPinkOff: gl.getUniformLocation(progComp, "u_ghostPinkOff"),
      pumpOff:      gl.getUniformLocation(progComp, "u_pumpOff"),
      rugOff:       gl.getUniformLocation(progComp, "u_rugOff"),
      pumpOpacity:  gl.getUniformLocation(progComp, "u_pumpOpacity"),
      rugOpacity:   gl.getUniformLocation(progComp, "u_rugOpacity"),
      bar1Off:      gl.getUniformLocation(progComp, "u_bar1Off"),
      bar2Off:      gl.getUniformLocation(progComp, "u_bar2Off"),
      bar3Off:      gl.getUniformLocation(progComp, "u_bar3Off"),
    };
    function gaussUniforms(prog) {
      return {
        src: gl.getUniformLocation(prog, "u_src"),
        step: gl.getUniformLocation(prog, "u_step"),
        w: [...Array(13)].map((_, i) => gl.getUniformLocation(prog, `u_w[${i}]`)),
      };
    }
    const uGlowH = gaussUniforms(progGlowH);
    const uGlowV = gaussUniforms(progGlowV);
    const uFX = {
      src:     gl.getUniformLocation(progComposeFX, "u_src"),
      glow:    gl.getUniformLocation(progComposeFX, "u_glow"),
      glowStr: gl.getUniformLocation(progComposeFX, "u_glowStr"),
      aber:    gl.getUniformLocation(progComposeFX, "u_aber"),
      aspect:  gl.getUniformLocation(progComposeFX, "u_aspect"),
    };
    const uBlur = {
      src: gl.getUniformLocation(progBlur, "u_src"),
      px: gl.getUniformLocation(progBlur, "u_px"),
    };

    // Upload Gaussian weights (constant, do once)
    function uploadGaussWeights(prog, u) {
      gl.useProgram(prog);
      GLOW_WEIGHTS.forEach((w, i) => gl.uniform1f(u.w[i], w));
    }
    uploadGaussWeights(progGlowH, uGlowH);
    uploadGaussWeights(progGlowV, uGlowV);

    let t0 = null;
    let rafId = null;
    // tanh function where the midpoint is 0.5
    function tanhHalfMidpoint(x, s) {
      return (Math.tanh(x * s - (s / 2)) + 1) / 2;
    }
    function frame(ts) {
      rafId = requestAnimationFrame(frame);
      if (t0 === null) t0 = ts;
      const t = (ts - t0) / 1000;

      const fullSpinProgress = ((t % SPIN_PERIOD) / SPIN_PERIOD);

      const textAngle = (
        fullSpinProgress <= 0.5 ?
          tanhHalfMidpoint(fullSpinProgress * 2, 20) / 2 :
          tanhHalfMidpoint((fullSpinProgress - 0.5) * 2, 20) / 2 + 0.5
      ) * Math.PI * 2;


      const snekAngle = fullSpinProgress * Math.PI * 2;
      // Pulse blur σ between 1.5 and 3.0 on a 4s cycle, matching SVG stdDeviation animate
      const glowStep = (2.25 + 0.75 * Math.sin(t * Math.PI / 2)) / 300;
      const glowStr = 0.55 + 0.30 * (0.5 + 0.5 * Math.sin(t * Math.PI / 2));
      const glitch = getGlitch(t);

      // Orbit offsets: shift = orbitPos(θ) − restPos, clockwise to match sneks.
      // UV y=1 is visual top (UNPACK_FLIP_Y), so clockwise = (sin θ, cos θ) offset.
      // PUMP starts at top: orbitPos = centre + (PUMP_R·sinθ, PUMP_R·cosθ)
      const pumpDx = PUMP_R * Math.sin(textAngle) + glitch.dx;
      const pumpDy = PUMP_R * (Math.cos(textAngle) - 1) + glitch.dy;
      // RUG starts at bottom: orbitPos = centre + (−RUG_R·sinθ, −RUG_R·cosθ)
      const rugDx = RUG_R * -Math.sin(textAngle) + glitch.dx;
      const rugDy = RUG_R * (1 - Math.cos(textAngle)) + glitch.dy;

      const [gcx, gcy] = getGhostCyanOff(t);
      const [gpx, gpy] = getGhostPinkOff(t);
      const [[bar1x,bar1y],[bar2x,bar2y],[bar3x,bar3y]] = getBarOffsets(t);

      // ── Pass 1: composite → fboComp (SVG_SIZE²) ──────────────────────────
      gl.bindFramebuffer(gl.FRAMEBUFFER, fboComp);
      gl.viewport(0, 0, SVG_SIZE, SVG_SIZE);
      gl.useProgram(progComp);
      bindPos(gl, progComp, quad);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texStatic);
      gl.uniform1i(uComp.static, 0);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, texSneks);
      gl.uniform1i(uComp.sneks, 1);
      gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, texGhostCyan);
      gl.uniform1i(uComp.ghostCyan, 2);
      gl.activeTexture(gl.TEXTURE3); gl.bindTexture(gl.TEXTURE_2D, texGhostPink);
      gl.uniform1i(uComp.ghostPink, 3);
      gl.activeTexture(gl.TEXTURE4); gl.bindTexture(gl.TEXTURE_2D, texPump);
      gl.uniform1i(uComp.pump, 4);
      gl.activeTexture(gl.TEXTURE5); gl.bindTexture(gl.TEXTURE_2D, texRug);
      gl.uniform1i(uComp.rug, 5);
      gl.uniform1f(uComp.angle, snekAngle);
      gl.uniform2f(uComp.ghostCyanOff, gcx, gcy);
      gl.uniform2f(uComp.ghostPinkOff, gpx, gpy);
      gl.uniform2f(uComp.pumpOff, pumpDx, pumpDy);
      gl.uniform2f(uComp.rugOff, rugDx, rugDy);
      gl.uniform1f(uComp.pumpOpacity, glitch.opacity);
      gl.uniform1f(uComp.rugOpacity, glitch.opacity);
      gl.uniform2f(uComp.bar1Off, bar1x, bar1y);
      gl.uniform2f(uComp.bar2Off, bar2x, bar2y);
      gl.uniform2f(uComp.bar3Off, bar3x, bar3y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      // ── Pass 2H: horizontal Gaussian → fboGlowH (SVG_SIZE²) ─────────────
      gl.bindFramebuffer(gl.FRAMEBUFFER, fboGlowH);
      gl.viewport(0, 0, SVG_SIZE, SVG_SIZE);
      gl.useProgram(progGlowH);
      bindPos(gl, progGlowH, quad);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texComp);
      gl.uniform1i(uGlowH.src, 0);
      gl.uniform1f(uGlowH.step, glowStep);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      // ── Pass 2V: vertical Gaussian → fboGlowV (SVG_SIZE²) ───────────────
      gl.bindFramebuffer(gl.FRAMEBUFFER, fboGlowV);
      gl.viewport(0, 0, SVG_SIZE, SVG_SIZE);
      gl.useProgram(progGlowV);
      bindPos(gl, progGlowV, quad);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texGlowH);
      gl.uniform1i(uGlowV.src, 0);
      gl.uniform1f(uGlowV.step, glowStep);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      // ── Pass 3: glow screen-blend + chroma → fboFX (screen res) ──────────
      gl.bindFramebuffer(gl.FRAMEBUFFER, fboFX);
      gl.viewport(0, 0, W, H);
      gl.useProgram(progComposeFX);
      bindPos(gl, progComposeFX, quad);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texComp);
      gl.uniform1i(uFX.src, 0);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, texGlowV);
      gl.uniform1i(uFX.glow, 1);
      gl.uniform1f(uFX.glowStr, glowStr);
      gl.uniform2f(uFX.aber, 1.2 / 100, 0.3 / 100);
      gl.uniform1f(uFX.aspect, W / H);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      // ── Pass 4: box blur → screen ─────────────────────────────────────────
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, W, H);
      gl.useProgram(progBlur);
      bindPos(gl, progBlur, quad);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texFX);
      gl.uniform1i(uBlur.src, 0);
      gl.uniform2f(uBlur.px, 1 / W, 1 / H);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    rafId = requestAnimationFrame(frame);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        rafId = null;
        t0 = null;
      } else {
        rafId = requestAnimationFrame(frame);
      }
    });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else
    init();
})();
