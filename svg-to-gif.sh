#!/usr/bin/env bash
# svg-to-gif.sh — Convert an animated SVG to a GIF or WebP using Puppeteer + ffmpeg

set -euo pipefail

usage() {
  cat << 'EOF'
Usage: svg-to-gif.sh <input.svg> [output] [flags]

Examples:
  svg-to-gif.sh fomonad-animated.svg
  svg-to-gif.sh fomonad-animated.svg out.webp --fps 24 --workers 8
  svg-to-gif.sh fomonad-animated.svg out.gif  --fps 20 --size 800x450 --duration 30000
  svg-to-gif.sh fomonad-animated.svg          --fps 15 --colors 64 --dither none

Flags:
  --fps       N        frames per second (default: 15)
  --duration  N|auto   duration in ms, or auto-detect perfect loop point (default: auto)
  --size      N|WxH    longest side in px, or explicit WxH; aspect ratio from viewBox (default: 400)
  --colors    N        GIF: palette size 2-256 (default: 256)
                       WebP: quality 1-100    (default: 90)
  --dither    MODE     GIF only (default: bayer:bayer_scale=5)
                         none | bayer:bayer_scale=1..5 | floyd_steinberg | sierra2
  --workers   N        parallel Chromium instances for frame capture (default: 4)
  --help               show this message
EOF
}

# ── Argument parsing ──────────────────────────────────────────────────────────
SVG_INPUT=""
OUTPUT=""
FPS=15
DURATION_MS="auto"
SIZE=400
COLORS=""  # default applied per-format at encode time
DITHER="bayer:bayer_scale=5"
WORKERS=4

while [[ $# -gt 0 ]]; do
  case "$1" in
    --fps)      FPS="$2";         shift 2 ;;
    --duration) DURATION_MS="$2"; shift 2 ;;
    --size)     SIZE="$2";        shift 2 ;;
    --colors)   COLORS="$2";      shift 2 ;;
    --dither)   DITHER="$2";      shift 2 ;;
    --workers)  WORKERS="$2";     shift 2 ;;
    --help)     usage; exit 0 ;;
    --*)        echo "Unknown flag: $1" >&2; usage >&2; exit 1 ;;
    *)
      if   [[ -z "$SVG_INPUT" ]]; then SVG_INPUT="$1"
      elif [[ -z "$OUTPUT"    ]]; then OUTPUT="$1"
      else echo "Unexpected argument: $1" >&2; usage >&2; exit 1
      fi
      shift ;;
  esac
done

[[ -n "$SVG_INPUT" ]] || { usage >&2; exit 1; }
SVG_INPUT="$(realpath "$SVG_INPUT")"
OUTPUT="$(realpath "${OUTPUT:-${SVG_INPUT%.svg}.gif}")"

SCRIPT_DIR="$(dirname "$(realpath "$0")")"
CAPTURE_SCRIPT="$SCRIPT_DIR/.svg-capture.mjs"
FRAMES_DIR="$(mktemp -d /tmp/svg-frames-XXXXXX)"
DEPS_DIR="/tmp/svg-gif-deps"

cleanup() { rm -rf "$FRAMES_DIR"; }
trap cleanup EXIT

# ── Write the Node.js capture script ─────────────────────────────────────────
cat > "$CAPTURE_SCRIPT" << 'JSEOF'
import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync } from 'fs';

// ── LCM helpers (BigInt to avoid overflow with prime-ish durations) ───────────
function gcd(a, b) { while (b) { [a, b] = [b, a % b]; } return a; }
function lcm(a, b) { return b === 0n ? a : a / gcd(a, b) * b; }

// Returns { lcmMs: BigInt, practical: BigInt, animations: [...], excluded: [...] }
// "practical" LCM excludes animations whose addition would push the total beyond maxMs
function computeLoopDuration(durations, maxMs = 600_000n) {
  const animations = durations.map(({ label, durationMs }) => ({
    label,
    durationMs: BigInt(Math.round(durationMs)),
  }));

  // Sort longest-first so structurally significant animations are included before
  // short prime-ish glitch animations get a chance to blow up the practical LCM
  const sorted = [...animations].sort((a, b) => (b.durationMs > a.durationMs ? 1 : b.durationMs < a.durationMs ? -1 : 0));

  let full = 1n;
  let practical = 1n;
  const excluded = [];

  for (const anim of sorted) {
    const ms = anim.durationMs;
    if (ms <= 0n) continue;

    const nextFull = lcm(full, ms);
    full = nextFull;

    const nextPractical = lcm(practical, ms);
    if (nextPractical <= maxMs) {
      practical = nextPractical;
    } else {
      excluded.push(anim.label);
    }
  }

  return { lcmMs: full, practicalMs: practical, animations, excluded };
}

// ── Browser helpers ───────────────────────────────────────────────────────────
async function launchBrowser() {
  return puppeteer.launch({
    executablePath: process.env.CHROMIUM_EXECUTABLE,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    headless: true,
  });
}

// Resolve a size spec ("400", "800x600") + SVG viewBox into { width, height }.
// When only one dimension is given it's treated as the longer side; the other
// is derived from the viewBox aspect ratio.
function resolveDimensions(sizeSpec, svgContent) {
  // Parse viewBox (fall back to width/height attrs, then 1:1)
  const vbMatch = svgContent.match(/viewBox=["']\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/);
  const wAttr   = svgContent.match(/\bwidth=["']([\d.]+)/);
  const hAttr   = svgContent.match(/\bheight=["']([\d.]+)/);
  const natW = vbMatch ? parseFloat(vbMatch[3]) : wAttr ? parseFloat(wAttr[1]) : 1;
  const natH = vbMatch ? parseFloat(vbMatch[4]) : hAttr ? parseFloat(hAttr[1]) : 1;
  const ratio = natW / natH;

  if (String(sizeSpec).includes('x')) {
    const [w, h] = String(sizeSpec).split('x').map(Number);
    return { width: w, height: h };
  }

  const s = Number(sizeSpec);
  if (ratio >= 1) return { width: s, height: Math.round(s / ratio) };
  else            return { width: Math.round(s * ratio), height: s };
}

async function loadSVG(page, svgPath, width, height) {
  const svgContent = readFileSync(svgPath, 'utf8');
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html, body { width:${width}px; height:${height}px; overflow:hidden; background:transparent; }
svg { width:${width}px; height:${height}px; display:block; }
</style>
</head>
<body>${svgContent}</body>
</html>`;
  const htmlFile = '/tmp/svg-preview.html';
  writeFileSync(htmlFile, html);
  await page.goto('file://' + htmlFile, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 300));
}

// ── Mode: --detect ────────────────────────────────────────────────────────────
async function detectMode(svgPath) {
  const browser = await launchBrowser();
  const page = await browser.newPage();
  await page.setViewport({ width: 100, height: 100 });
  await loadSVG(page, svgPath, 100, 100);

  const durations = await page.evaluate(() => {
    const results = [];

    // CSS / Web Animations API
    for (const anim of document.getAnimations()) {
      const timing = anim.effect?.getTiming();
      if (!timing) continue;
      const dur = timing.duration;        // ms (number or 'auto')
      const iters = timing.iterations;   // Infinity = loops
      if (typeof dur !== 'number' || dur <= 0 || iters !== Infinity) continue;

      const target = anim.effect.target;
      const label = `CSS "${anim.animationName}" on <${target?.tagName?.toLowerCase() ?? '?'}#${target?.id ?? ''}>`;
      results.push({ label, durationMs: dur, type: 'css' });
    }

    // SMIL <animate> elements
    for (const el of document.querySelectorAll('animate, animateTransform, animateMotion')) {
      const repeat = el.getAttribute('repeatCount');
      if (repeat !== 'indefinite') continue;
      // dur is in seconds as a string like "4s" or "1.5"
      const durAttr = el.getAttribute('dur') ?? '';
      const secs = parseFloat(durAttr);
      if (isNaN(secs) || secs <= 0) continue;
      const parent = el.parentElement;
      const label = `SMIL <${el.tagName}> dur=${durAttr} on <${parent?.tagName?.toLowerCase()}#${parent?.id ?? ''}>`;
      results.push({ label, durationMs: secs * 1000, type: 'smil' });
    }

    return results;
  });

  await browser.close();

  const result = computeLoopDuration(durations);
  console.log(JSON.stringify({
    animations: result.animations.map(a => ({ label: a.label, durationMs: String(a.durationMs) })),
    excluded: result.excluded,
    lcmMs: String(result.lcmMs),
    practicalMs: String(result.practicalMs),
  }));
}

// ── Mode: capture ─────────────────────────────────────────────────────────────
async function captureMode(svgPath, framesDir, fps, durationMs, sizeSpec, workers) {
  const svgContent = readFileSync(svgPath, 'utf8');
  const { width, height } = resolveDimensions(sizeSpec, svgContent);

  const totalFrames = Math.ceil((durationMs / 1000) * fps);
  const frameStepMs = durationMs / totalFrames;
  const digits      = String(totalFrames).length;

  // Write the HTML once so all workers load from the same file
  const htmlFile = framesDir + '/index.html';
  await (async () => {
    const browser = await launchBrowser();
    const page = await browser.newPage();
    await page.setViewport({ width, height });
    await loadSVG(page, svgPath, width, height);
    writeFileSync(htmlFile, readFileSync('/tmp/svg-preview.html'));
    await browser.close();
  })();

  let captured = 0;

  async function runWorker(workerId) {
    const browser = await launchBrowser();
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.goto('file://' + htmlFile, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 300));

    await page.evaluate(() => {
      document.getAnimations().forEach(a => a.pause());
      document.querySelector('svg').pauseAnimations();
    });

    for (let i = workerId; i < totalFrames; i += workers) {
      const timeMs = i * frameStepMs;

      await page.evaluate(t => {
        document.getAnimations().forEach(a => { a.currentTime = t; });
        document.querySelector('svg').setCurrentTime(t / 1000);
      }, timeMs);

      await page.evaluate(() => new Promise(r => setTimeout(r, 0)));

      const framePath = framesDir + '/frame' + String(i).padStart(digits, '0') + '.png';
      await page.screenshot({ path: framePath, omitBackground: true });

      captured++;
      if (captured % 30 === 0 || captured === totalFrames)
        process.stdout.write(`\r  Captured ${captured}/${totalFrames} frames`);
    }

    await browser.close();
  }

  await Promise.all(Array.from({ length: workers }, (_, i) => runWorker(i)));
  process.stdout.write('\n');
}

// ── Dispatch ──────────────────────────────────────────────────────────────────
const [,, mode, ...rest] = process.argv;

if (mode === '--detect') {
  await detectMode(rest[0]);
} else {
  const args = [mode, ...rest];
  const [svgPath, framesDir] = args;
  const [fps, durationMs, sizeSpec, workers] = [Number(args[2]), Number(args[3]), args[4], Number(args[5])];
  await captureMode(svgPath, framesDir, fps, durationMs, sizeSpec, workers);
}
JSEOF

EXT="${OUTPUT##*.}"
if [[ "$EXT" == "webp" ]]; then
  COLORS="${COLORS:-90}"
else
  COLORS="${COLORS:-256}"
fi

# ── Run inside nix-shell ──────────────────────────────────────────────────────
nix-shell -p nodejs_24 ffmpeg chromium --run "
set -euo pipefail

# Install puppeteer once into a persistent cache dir
if [ ! -d '$DEPS_DIR/node_modules/puppeteer' ]; then
  echo 'Installing puppeteer (first run only)...'
  mkdir -p '$DEPS_DIR'
  cd '$DEPS_DIR'
  PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install puppeteer --save-exact --no-package-lock 2>&1 | tail -3
fi

cp '$CAPTURE_SCRIPT' '$DEPS_DIR/.svg-capture.mjs'
export CHROMIUM_EXECUTABLE=\"\$(which chromium)\"

# ── Auto-detect loop duration if requested ────────────────────────────────────
DURATION_MS='$DURATION_MS'
if [ \"\$DURATION_MS\" = 'auto' ]; then
  echo 'Detecting animation loop duration...'
  DETECT_JSON=\"\$(node '$DEPS_DIR/.svg-capture.mjs' --detect '$SVG_INPUT')\"

  # Print each animation found
  echo \"\$DETECT_JSON\" | node -e \"
    const d = JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'));
    console.log('');
    console.log('Animations found:');
    for (const a of d.animations)
      console.log('  ' + a.durationMs.padStart(8) + 'ms  ' + a.label);
    console.log('');
    const lcmSec  = (BigInt(d.lcmMs)       / 1000n).toString();
    const pratSec = (BigInt(d.practicalMs) / 1000n).toString();
    if (d.excluded.length) {
      console.log('Perfect loop (all animations): ' + lcmSec + 's');
      console.log('Practical loop (≤10min):       ' + pratSec + 's');
      console.log('Excluded (blow up LCM):');
      for (const e of d.excluded) console.log('  ' + e);
    } else {
      console.log('Perfect loop: ' + lcmSec + 's');
    }
    console.log('');
  \"

  DURATION_MS=\"\$(echo \"\$DETECT_JSON\" | node -e \"
    const d = JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'));
    process.stdout.write(d.practicalMs);
  \")\"
  echo \"Using duration: \${DURATION_MS}ms\"
  echo ''
fi

echo \"SVG:      $SVG_INPUT\"
echo \"Output:   $OUTPUT\"
echo \"FPS:      $FPS  |  Duration: \${DURATION_MS}ms  |  Size: ${SIZE}\"
echo ''

echo 'Capturing frames...'
node '$DEPS_DIR/.svg-capture.mjs' '$SVG_INPUT' '$FRAMES_DIR' '$FPS' \"\$DURATION_MS\" '$SIZE' '$WORKERS'

echo ''

# Detect zero-padding length from actual frame filenames (avoid ls|head SIGPIPE)
SAMPLE=\"\$(set +f; files=('$FRAMES_DIR'/frame*.png); printf '%s' \"\${files[0]}\")\"
NUMSTR=\"\${SAMPLE##*/frame}\"
NUMSTR=\"\${NUMSTR%.png}\"
DIGITS=\"\${#NUMSTR}\"

EXT='$EXT'

if [ \"\$EXT\" = 'webp' ]; then
  echo 'Encoding WebP...'
  ffmpeg -y -framerate '$FPS' \
    -i '$FRAMES_DIR/frame%0'\"\${DIGITS}\"'d.png' \
    -vcodec libwebp \
    -lossless 0 -quality '$COLORS' \
    -loop 0 \
    '$OUTPUT' -loglevel warning
else
  echo 'Building GIF palette...'
  PALETTE=\"\$(mktemp /tmp/palette-XXXXXX.png)\"

  ffmpeg -y -framerate '$FPS' \
    -i '$FRAMES_DIR/frame%0'\"\${DIGITS}\"'d.png' \
    -vf 'palettegen=max_colors=$COLORS:stats_mode=full' \
    -update 1 \"\$PALETTE\" -loglevel warning

  echo 'Encoding GIF...'
  ffmpeg -y -framerate '$FPS' \
    -i '$FRAMES_DIR/frame%0'\"\${DIGITS}\"'d.png' \
    -i \"\$PALETTE\" \
    -lavfi 'paletteuse=dither=$DITHER:diff_mode=rectangle' \
    -loop 0 \
    '$OUTPUT' -loglevel warning

  rm -f \"\$PALETTE\"
fi
echo 'Done!'
du -sh '$OUTPUT'
"
