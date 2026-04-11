import{$ as e,$t as t,A as n,An as r,At as i,B as a,Bn as o,Bt as s,C as c,Cn as l,Ct as u,D as d,Dn as f,Dt as p,E as m,En as h,Et as g,F as _,Fn as v,Ft as y,G as b,Gn as x,Gt as S,H as C,Hn as w,Ht as ee,I as te,In as T,It as ne,J as re,Jn as ie,Jt as ae,K as E,Kn as oe,Kt as se,L as ce,Ln as le,M as ue,Mn as de,Mt as fe,N as pe,Nn as me,Nt as he,O as ge,On as _e,Ot as ve,P as ye,Pn as be,Pt as xe,Q as Se,Qt as Ce,R as we,Rn as Te,Rt as Ee,S as De,Sn as Oe,St as ke,T as Ae,Tn as je,Tt as Me,U as Ne,Un as Pe,Ut as Fe,V as Ie,Vn as Le,Vt as Re,W as ze,Wn as Be,Wt as Ve,X as He,Xt as Ue,Y as We,Yt as Ge,Z as Ke,Zt as qe,_ as Je,_n as Ye,_t as Xe,a as Ze,an as Qe,at as $e,b as et,bn as D,bt as tt,c as nt,cn as rt,ct as it,d as at,dn as ot,dt as st,en as ct,et as lt,f as ut,fn as dt,ft,g as pt,gn as mt,gt as ht,h as gt,hn as _t,ht as vt,i as yt,in as bt,it as xt,j as St,jn as Ct,jt as wt,k as Tt,kn as Et,kt as Dt,l as Ot,ln as kt,lt as At,m as jt,mn as O,mt as Mt,nn as Nt,nt as Pt,o as Ft,on as It,ot as Lt,p as Rt,pn as zt,pt as Bt,q as Vt,qn as Ht,qt as k,r as Ut,rn as Wt,rt as Gt,s as Kt,sn as qt,st as Jt,tn as Yt,tt as Xt,u as Zt,un as Qt,ut as $t,v as en,vn as tn,vt as nn,w as rn,wn as an,wt as on,x as sn,xn as cn,xt as ln,y as un,yn as dn,yt as fn,z as pn,zn as mn,zt as hn}from"./localBatchGatewayRequest-BDnqlmbC.js";import{A as gn,C as _n,D as vn,E as yn,F as bn,M as xn,N as Sn,O as Cn,S as wn,T as Tn,V as En,_ as Dn,a as On,b as kn,c as An,d as jn,f as Mn,g as Nn,h as Pn,i as Fn,k as In,l as Ln,m as Rn,n as zn,o as Bn,p as Vn,r as Hn,s as Un,t as Wn,u as Gn,v as Kn,w as qn,x as Jn,y as Yn}from"./utils-B0Fw2xa_.js";var Xn=Object.defineProperty,Zn=(e,t)=>{let n={};for(var r in e)Xn(n,r,{get:e[r],enumerable:!0});return t||Xn(n,Symbol.toStringTag,{value:`Module`}),n};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function Qn(e){let t;if(typeof e==`string`)t=Le(e);else{let n=mn(e),r=e.length;for(let i=0;i<r;i++){let r=e[i];if(!x(r)){t=Le(r,n);break}}}if(!t)throw new Be({signature:e});return t}function $n(e){let t=[];if(typeof e==`string`){let n=w(e),r=n.length;for(let e=0;e<r;e++)t.push(o(n[e],{modifiers:oe}))}else{let n=mn(e),r=e.length;for(let i=0;i<r;i++){let r=e[i];if(x(r))continue;let a=w(r),s=a.length;for(let e=0;e<s;e++)t.push(o(a[e],{modifiers:oe,structs:n}))}}if(t.length===0)throw new Pe({params:e});return t}function A(e,t,n){let r=e[t.name];if(typeof r==`function`)return r;let i=e[n];return typeof i==`function`?i:n=>t(e,n)}var er=class extends v{constructor(e){super(`Filter type "${e}" is not supported.`,{name:`FilterTypeNotSupportedError`})}},tr=`/docs/contract/encodeEventTopics`;function nr(e){let{abi:t,eventName:n,args:r}=e,i=t[0];if(n){let e=ct({abi:t,name:n});if(!e)throw new Et(n,{docsPath:tr});i=e}if(i.type!==`event`)throw new Et(void 0,{docsPath:tr});let a=zt(Te(i)),o=[];if(r&&`inputs`in i){let e=i.inputs?.filter(e=>`indexed`in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(o=e?.map((e,n)=>Array.isArray(t[n])?t[n].map((r,i)=>rr({param:e,value:t[n][i]})):t[n]!==void 0&&t[n]!==null?rr({param:e,value:t[n]}):null)??[])}return[a,...o]}function rr({param:e,value:t}){if(e.type===`string`||e.type===`bytes`)return O(tn(t));if(e.type===`tuple`||e.type.match(/^(.*)\[(\d+)?\]$/))throw new er(e.type);return Yt([e],[t])}function ir(e,{method:t}){let n={};return e.transport.type===`fallback`&&e.transport.onResponse?.(({method:e,response:r,status:i,transport:a})=>{i===`success`&&t===e&&(n[r]=a.request)}),(t=>n[t]||e.request)}async function ar(e,t){let{address:n,abi:r,args:i,eventName:a,fromBlock:o,strict:s,toBlock:c}=t,l=ir(e,{method:`eth_newFilter`}),u=a?nr({abi:r,args:i,eventName:a}):void 0,d=await e.request({method:`eth_newFilter`,params:[{address:n,fromBlock:typeof o==`bigint`?D(o):o,toBlock:typeof c==`bigint`?D(c):c,topics:u}]});return{abi:r,args:i,eventName:a,id:d,request:l(d),strict:!!s,type:`event`}}var or=3;function sr(e,{abi:t,address:n,args:r,docsPath:a,functionName:o,sender:s}){let c=e instanceof ne?e:e instanceof v?e.walk(e=>`data`in e)||e.walk():{},{code:l,data:u,details:d,message:f,shortMessage:p}=c;return new he(e instanceof _e?new y({functionName:o}):[or,Jt.code].includes(l)&&(u||d||f||p)||l===it.code&&d===`execution reverted`&&u?new xe({abi:t,data:typeof u==`object`?u.data:u,functionName:o,message:c instanceof i?d:p??f}):e,{abi:t,args:r,contractAddress:n,docsPath:a,functionName:o,sender:s})}function cr(e){return kt(`0x${O(`0x${e.substring(4)}`).substring(26)}`)}async function lr({hash:e,signature:t}){let n=le(e)?e:Oe(e),{secp256k1:r}=await Xt(async()=>{let{secp256k1:e}=await Promise.resolve().then(()=>Mc);return{secp256k1:e}},void 0,import.meta.url);return`0x${(()=>{if(typeof t==`object`&&`r`in t&&`s`in t){let{r:e,s:n,v:i,yParity:a}=t,o=ur(Number(a??i));return new r.Signature(l(e),l(n)).addRecoveryBit(o)}let e=le(t)?t:Oe(t);if(T(e)!==65)throw Error(`invalid signature length`);let n=ur(je(`0x${e.slice(130)}`));return r.Signature.fromCompact(e.substring(2,130)).addRecoveryBit(n)})().recoverPublicKey(n.substring(2)).toHex(!1)}`}function ur(e){if(e===0||e===1)return e;if(e===27)return 0;if(e===28)return 1;throw Error(`Invalid yParityOrV value`)}async function dr({hash:e,signature:t}){return cr(await lr({hash:e,signature:t}))}function fr(e,t=`hex`){let n=pr(e),r=Ue(new Uint8Array(n.length));return n.encode(r),t===`hex`?dn(r.bytes):r.bytes}function pr(e){return Array.isArray(e)?mr(e.map(e=>pr(e))):hr(e)}function mr(e){let t=e.reduce((e,t)=>e+t.length,0),n=gr(t);return{length:t<=55?1+t:1+n+t,encode(r){t<=55?r.pushByte(192+t):(r.pushByte(247+n),n===1?r.pushUint8(t):n===2?r.pushUint16(t):n===3?r.pushUint24(t):r.pushUint32(t));for(let{encode:t}of e)t(r)}}}function hr(e){let t=typeof e==`string`?mt(e):e,n=gr(t.length);return{length:t.length===1&&t[0]<128?1:t.length<=55?1+t.length:1+n+t.length,encode(e){t.length===1&&t[0]<128?e.pushBytes(t):t.length<=55?(e.pushByte(128+t.length),e.pushBytes(t)):(e.pushByte(183+n),n===1?e.pushUint8(t.length):n===2?e.pushUint16(t.length):n===3?e.pushUint24(t.length):e.pushUint32(t.length),e.pushBytes(t))}}}function gr(e){if(e<2**8)return 1;if(e<2**16)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new v(`Length is too large.`)}function _r(e){let{chainId:t,nonce:n,to:r}=e,i=e.contractAddress??e.address,a=O(qt([`0x05`,fr([t?D(t):`0x`,i,n?D(n):`0x`])]));return r===`bytes`?mt(a):a}async function vr(e){let{authorization:t,signature:n}=e;return dr({hash:_r(t),signature:n??t})}var yr=class extends v{constructor(e,{account:t,docsPath:n,chain:r,data:i,gas:a,gasPrice:o,maxFeePerGas:s,maxPriorityFeePerGas:c,nonce:l,to:u,value:d}){let f=Ve({from:t?.address,to:u,value:d!==void 0&&`${se(d)} ${r?.nativeCurrency?.symbol||`ETH`}`,data:i,gas:a,gasPrice:o!==void 0&&`${S(o)} gwei`,maxFeePerGas:s!==void 0&&`${S(s)} gwei`,maxPriorityFeePerGas:c!==void 0&&`${S(c)} gwei`,nonce:l});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages,` `]:[],`Estimate Gas Arguments:`,f].filter(Boolean),name:`EstimateGasExecutionError`}),Object.defineProperty(this,`cause`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cause=e}};function br(t,{docsPath:n,...r}){return new yr((()=>{let n=e(t,r);return n instanceof lt?t:n})(),{docsPath:n,...r})}var xr=class extends v{constructor(){super("`baseFeeMultiplier` must be greater than 1.",{name:`BaseFeeScalarError`})}},Sr=class extends v{constructor(){super(`Chain does not support EIP-1559 fees.`,{name:`Eip1559FeesNotSupportedError`})}},Cr=class extends v{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${S(e)} gwei).`,{name:`MaxFeePerGasTooLowError`})}},wr=class extends v{constructor({blockHash:e,blockNumber:t}){let n=`Block`;e&&(n=`Block at hash "${e}"`),t&&(n=`Block at number "${t}"`),super(`${n} could not be found.`,{name:`BlockNotFoundError`})}},Tr={"0x0":`legacy`,"0x1":`eip2930`,"0x2":`eip1559`,"0x3":`eip4844`,"0x4":`eip7702`};function Er(e,t){let n={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?je(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?je(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?Tr[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return e.authorizationList&&(n.authorizationList=Dr(e.authorizationList)),n.yParity=(()=>{if(e.yParity)return Number(e.yParity);if(typeof n.v==`bigint`){if(n.v===0n||n.v===27n)return 0;if(n.v===1n||n.v===28n)return 1;if(n.v>=35n)return+(n.v%2n==0n)}})(),n.type===`legacy`&&(delete n.accessList,delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas,delete n.yParity),n.type===`eip2930`&&(delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas),n.type===`eip1559`&&delete n.maxFeePerBlobGas,n}function Dr(e){return e.map(e=>({address:e.address,chainId:Number(e.chainId),nonce:Number(e.nonce),r:e.r,s:e.s,yParity:Number(e.yParity)}))}function Or(e,t){let n=(e.transactions??[]).map(e=>typeof e==`string`?e:Er(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:n,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}async function kr(e,{blockHash:t,blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`,includeTransactions:i}={}){let a=i??!1,o=n===void 0?void 0:D(n),s=null;if(s=t?await e.request({method:`eth_getBlockByHash`,params:[t,a]},{dedupe:!0}):await e.request({method:`eth_getBlockByNumber`,params:[o||r,a]},{dedupe:!!o}),!s)throw new wr({blockHash:t,blockNumber:n});return(e.chain?.formatters?.block?.format||Or)(s,`getBlock`)}async function Ar(e){let t=await e.request({method:`eth_gasPrice`});return BigInt(t)}async function jr(e,t){return Mr(e,t)}async function Mr(e,t){let{block:n,chain:r=e.chain,request:i}=t||{};try{let t=r?.fees?.maxPriorityFeePerGas??r?.fees?.defaultPriorityFee;if(typeof t==`function`){let r=await t({block:n||await A(e,kr,`getBlock`)({}),client:e,request:i});if(r===null)throw Error();return r}return t===void 0?l(await e.request({method:`eth_maxPriorityFeePerGas`})):t}catch{let[t,r]=await Promise.all([n?Promise.resolve(n):A(e,kr,`getBlock`)({}),A(e,Ar,`getGasPrice`)({})]);if(typeof t.baseFeePerGas!=`bigint`)throw new Sr;let i=r-t.baseFeePerGas;return i<0n?0n:i}}async function Nr(e,t){return Pr(e,t)}async function Pr(e,t){let{block:n,chain:r=e.chain,request:i,type:a=`eip1559`}=t||{},o=await(async()=>typeof r?.fees?.baseFeeMultiplier==`function`?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):r?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new xr;let s=10**(o.toString().split(`.`)[1]?.length??0),c=e=>e*BigInt(Math.ceil(o*s))/BigInt(s),l=n||await A(e,kr,`getBlock`)({});if(typeof r?.fees?.estimateFeesPerGas==`function`){let t=await r.fees.estimateFeesPerGas({block:n,client:e,multiply:c,request:i,type:a});if(t!==null)return t}if(a===`eip1559`){if(typeof l.baseFeePerGas!=`bigint`)throw new Sr;let t=typeof i?.maxPriorityFeePerGas==`bigint`?i.maxPriorityFeePerGas:await Mr(e,{block:l,chain:r,request:i}),n=c(l.baseFeePerGas);return{maxFeePerGas:i?.maxFeePerGas??n+t,maxPriorityFeePerGas:t}}return{gasPrice:i?.gasPrice??c(await A(e,Ar,`getGasPrice`)({}))}}async function Fr(e,{address:t,blockTag:n=`latest`,blockNumber:r}){return je(await e.request({method:`eth_getTransactionCount`,params:[t,typeof r==`bigint`?D(r):n]},{dedupe:!!r}))}function Ir(e){let{kzg:t}=e,n=e.to??(typeof e.blobs[0]==`string`?`hex`:`bytes`),r=typeof e.blobs[0]==`string`?e.blobs.map(e=>mt(e)):e.blobs,i=[];for(let e of r)i.push(Uint8Array.from(t.blobToKzgCommitment(e)));return n===`bytes`?i:i.map(e=>dn(e))}function Lr(e){let{kzg:t}=e,n=e.to??(typeof e.blobs[0]==`string`?`hex`:`bytes`),r=typeof e.blobs[0]==`string`?e.blobs.map(e=>mt(e)):e.blobs,i=typeof e.commitments[0]==`string`?e.commitments.map(e=>mt(e)):e.commitments,a=[];for(let e=0;e<r.length;e++){let n=r[e],o=i[e];a.push(Uint8Array.from(t.computeBlobKzgProof(n,o)))}return n===`bytes`?a:a.map(e=>dn(e))}function Rr(e,t,n,r){if(typeof e.setBigUint64==`function`)return e.setBigUint64(t,n,r);let i=BigInt(32),a=BigInt(4294967295),o=Number(n>>i&a),s=Number(n&a),c=r?4:0,l=r?0:4;e.setUint32(t+c,o,r),e.setUint32(t+l,s,r)}function zr(e,t,n){return e&t^~e&n}function Br(e,t,n){return e&t^e&n^t&n}var Vr=class extends Jn{constructor(e,t,n,r){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=gn(this.buffer)}update(e){_n(this),e=bn(e),wn(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length;for(let a=0;a<i;){let o=Math.min(r-this.pos,i-a);if(o===r){let t=gn(e);for(;r<=i-a;a+=r)this.process(t,a);continue}n.set(e.subarray(a,a+o),this.pos),this.pos+=o,a+=o,this.pos===r&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){_n(this),yn(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,vn(this.buffer.subarray(a)),this.padOffset>r-a&&(this.process(n,0),a=0);for(let e=a;e<r;e++)t[e]=0;Rr(n,r-8,BigInt(this.length*8),i),this.process(n,0);let o=gn(e),s=this.outputLen;if(s%4)throw Error(`_sha2: outputLen should be aligned to 32bit`);let c=s/4,l=this.get();if(c>l.length)throw Error(`_sha2: outputLen bigger than state`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneInto(e){e||=new this.constructor,e.set(...this.get());let{blockLen:t,buffer:n,length:r,finished:i,destroyed:a,pos:o}=this;return e.destroyed=a,e.finished=i,e.length=r,e.pos=o,r%t&&e.buffer.set(n),e}clone(){return this._cloneInto()}},Hr=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Ur=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Wr=new Uint32Array(64),Gr=class extends Vr{constructor(e=32){super(64,e,8,!1),this.A=Hr[0]|0,this.B=Hr[1]|0,this.C=Hr[2]|0,this.D=Hr[3]|0,this.E=Hr[4]|0,this.F=Hr[5]|0,this.G=Hr[6]|0,this.H=Hr[7]|0}get(){let{A:e,B:t,C:n,D:r,E:i,F:a,G:o,H:s}=this;return[e,t,n,r,i,a,o,s]}set(e,t,n,r,i,a,o,s){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=s|0}process(e,t){for(let n=0;n<16;n++,t+=4)Wr[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=Wr[e-15],n=Wr[e-2],r=Sn(t,7)^Sn(t,18)^t>>>3;Wr[e]=(Sn(n,17)^Sn(n,19)^n>>>10)+Wr[e-7]+r+Wr[e-16]|0}let{A:n,B:r,C:i,D:a,E:o,F:s,G:c,H:l}=this;for(let e=0;e<64;e++){let t=Sn(o,6)^Sn(o,11)^Sn(o,25),u=l+t+zr(o,s,c)+Ur[e]+Wr[e]|0,d=(Sn(n,2)^Sn(n,13)^Sn(n,22))+Br(n,r,i)|0;l=c,c=s,s=o,o=a+u|0,a=i,i=r,r=n,n=u+d|0}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,s=s+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,a,o,s,c,l)}roundClean(){vn(Wr)}destroy(){this.set(0,0,0,0,0,0,0,0),vn(this.buffer)}},Kr=En(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e)));Kr[0],Kr[1];var qr=In(()=>new Gr),Jr=qr;function Yr(e,t){let n=t||`hex`,r=Jr(le(e,{strict:!1})?tn(e):e);return n===`bytes`?r:Oe(r)}function Xr(e){let{commitment:t,version:n=1}=e,r=e.to??(typeof t==`string`?`hex`:`bytes`),i=Yr(t,`bytes`);return i.set([n],0),r===`bytes`?i:dn(i)}function Zr(e){let{commitments:t,version:n}=e,r=e.to??(typeof t[0]==`string`?`hex`:`bytes`),i=[];for(let e of t)i.push(Xr({commitment:e,to:r,version:n}));return i}var Qr=6,$r=4096,ei=32*$r,ti=ei*Qr-1-1*$r*Qr,ni=class extends v{constructor({maxSize:e,size:t}){super(`Blob size is too large.`,{metaMessages:[`Max: ${e} bytes`,`Given: ${t} bytes`],name:`BlobSizeTooLargeError`})}},ri=class extends v{constructor(){super(`Blob data must not be empty.`,{name:`EmptyBlobError`})}};function ii(e){let t=e.to??(typeof e.data==`string`?`hex`:`bytes`),n=typeof e.data==`string`?mt(e.data):e.data,r=T(n);if(!r)throw new ri;if(r>761855)throw new ni({maxSize:ti,size:r});let i=[],a=!0,o=0;for(;a;){let e=Ue(new Uint8Array(ei)),t=0;for(;t<$r;){let r=n.slice(o,o+31);if(e.pushByte(0),e.pushBytes(r),r.length<31){e.pushByte(128),a=!1;break}t++,o+=31}i.push(e)}return t===`bytes`?i.map(e=>e.bytes):i.map(e=>dn(e.bytes))}function ai(e){let{data:t,kzg:n,to:r}=e,i=e.blobs??ii({data:t,to:r}),a=e.commitments??Ir({blobs:i,kzg:n,to:r}),o=e.proofs??Lr({blobs:i,commitments:a,kzg:n,to:r}),s=[];for(let e=0;e<i.length;e++)s.push({blob:i[e],commitment:a[e],proof:o[e]});return s}function oi(e){if(e.type)return e.type;if(e.authorizationList!==void 0)return`eip7702`;if(e.blobs!==void 0||e.blobVersionedHashes!==void 0||e.maxFeePerBlobGas!==void 0||e.sidecars!==void 0)return`eip4844`;if(e.maxFeePerGas!==void 0||e.maxPriorityFeePerGas!==void 0)return`eip1559`;if(e.gasPrice!==void 0)return e.accessList===void 0?`legacy`:`eip2930`;throw new Ee({transaction:e})}function si(t,{docsPath:n,...r}){return new hn((()=>{let n=e(t,r);return n instanceof lt?t:n})(),{docsPath:n,...r})}async function ci(e){return je(await e.request({method:`eth_chainId`},{dedupe:!0}))}async function li(e,n){let{account:r=e.account,accessList:i,authorizationList:a,chain:o=e.chain,blobVersionedHashes:s,blobs:c,data:l,gas:u,gasPrice:d,maxFeePerBlobGas:f,maxFeePerGas:p,maxPriorityFeePerGas:m,nonce:h,nonceManager:g,to:_,type:v,value:y,...b}=n,x=await(async()=>{if(!r||!g||h!==void 0)return h;let n=t(r),i=o?o.id:await A(e,ci,`getChainId`)({});return await g.consume({address:n.address,chainId:i,client:e})})();We(n);let S=o?.formatters?.transactionRequest?.format,C=(S||Ke)({...Se(b,{format:S}),account:r?t(r):void 0,accessList:i,authorizationList:a,blobs:c,blobVersionedHashes:s,data:l,gas:u,gasPrice:d,maxFeePerBlobGas:f,maxFeePerGas:p,maxPriorityFeePerGas:m,nonce:x,to:_,type:v,value:y},`fillTransaction`);try{let t=await e.request({method:`eth_fillTransaction`,params:[C]}),r=(o?.formatters?.transaction?.format||Er)(t.tx);delete r.blockHash,delete r.blockNumber,delete r.r,delete r.s,delete r.transactionIndex,delete r.v,delete r.yParity,r.data=r.input,r.gas&&=n.gas??r.gas,r.gasPrice&&=n.gasPrice??r.gasPrice,r.maxFeePerBlobGas&&=n.maxFeePerBlobGas??r.maxFeePerBlobGas,r.maxFeePerGas&&=n.maxFeePerGas??r.maxFeePerGas,r.maxPriorityFeePerGas&&=n.maxPriorityFeePerGas??r.maxPriorityFeePerGas,r.nonce&&=n.nonce??r.nonce;let i=await(async()=>{if(typeof o?.fees?.baseFeeMultiplier==`function`){let t=await A(e,kr,`getBlock`)({});return o.fees.baseFeeMultiplier({block:t,client:e,request:n})}return o?.fees?.baseFeeMultiplier??1.2})();if(i<1)throw new xr;let a=10**(i.toString().split(`.`)[1]?.length??0),s=e=>e*BigInt(Math.ceil(i*a))/BigInt(a);return r.maxFeePerGas&&!n.maxFeePerGas&&(r.maxFeePerGas=s(r.maxFeePerGas)),r.gasPrice&&!n.gasPrice&&(r.gasPrice=s(r.gasPrice)),{raw:t.raw,transaction:{from:C.from,...r}}}catch(t){throw si(t,{...n,chain:e.chain})}}var ui=[`blobVersionedHashes`,`chainId`,`fees`,`gas`,`nonce`,`type`],di=new Map,fi=new ot(128);async function pi(e,n){let r=n;r.account??=e.account,r.parameters??=ui;let{account:i,chain:a=e.chain,nonceManager:o,parameters:s}=r,c=(()=>{if(typeof a?.prepareTransactionRequest==`function`)return{fn:a.prepareTransactionRequest,runAt:[`beforeFillTransaction`]};if(Array.isArray(a?.prepareTransactionRequest))return{fn:a.prepareTransactionRequest[0],runAt:a.prepareTransactionRequest[1].runAt}})(),l;async function u(){return l||(r.chainId===void 0?a?a.id:(l=await A(e,ci,`getChainId`)({}),l):r.chainId)}let d=i&&t(i),f=r.nonce;if(s.includes(`nonce`)&&f===void 0&&d&&o){let t=await u();f=await o.consume({address:d.address,chainId:t,client:e})}c?.fn&&c.runAt?.includes(`beforeFillTransaction`)&&(r=await c.fn({...r,chain:a},{phase:`beforeFillTransaction`}),f??=r.nonce);let p=!((s.includes(`blobVersionedHashes`)||s.includes(`sidecars`))&&r.kzg&&r.blobs||fi.get(e.uid)===!1||![`fees`,`gas`].some(e=>s.includes(e)))&&(s.includes(`chainId`)&&typeof r.chainId!=`number`||s.includes(`nonce`)&&typeof f!=`number`||s.includes(`fees`)&&typeof r.gasPrice!=`bigint`&&(typeof r.maxFeePerGas!=`bigint`||typeof r.maxPriorityFeePerGas!=`bigint`)||s.includes(`gas`)&&typeof r.gas!=`bigint`)?await A(e,li,`fillTransaction`)({...r,nonce:f}).then(t=>{let{chainId:n,from:i,gas:a,gasPrice:o,nonce:s,maxFeePerBlobGas:c,maxFeePerGas:l,maxPriorityFeePerGas:u,type:d,...f}=t.transaction;return fi.set(e.uid,!0),{...r,...i?{from:i}:{},...d&&!r.type?{type:d}:{},...n===void 0?{}:{chainId:n},...a===void 0?{}:{gas:a},...o===void 0?{}:{gasPrice:o},...s===void 0?{}:{nonce:s},...c!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxFeePerBlobGas:c}:{},...l!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxFeePerGas:l}:{},...u!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxPriorityFeePerGas:u}:{},...`nonceKey`in f&&f.nonceKey!==void 0?{nonceKey:f.nonceKey}:{}}}).catch(t=>{let n=t;return n.name===`TransactionExecutionError`&&n.walk?.(e=>{let t=e;return t.name===`MethodNotFoundRpcError`||t.name===`MethodNotSupportedRpcError`})&&fi.set(e.uid,!1),r}):r;f??=p.nonce,r={...p,...d?{from:d?.address}:{},...f?{nonce:f}:{}};let{blobs:m,gas:h,kzg:g,type:_}=r;c?.fn&&c.runAt?.includes(`beforeFillParameters`)&&(r=await c.fn({...r,chain:a},{phase:`beforeFillParameters`}));let v;async function y(){return v||(v=await A(e,kr,`getBlock`)({blockTag:`latest`}),v)}if(s.includes(`nonce`)&&f===void 0&&d&&!o&&(r.nonce=await A(e,Fr,`getTransactionCount`)({address:d.address,blockTag:`pending`})),(s.includes(`blobVersionedHashes`)||s.includes(`sidecars`))&&m&&g){let e=Ir({blobs:m,kzg:g});if(s.includes(`blobVersionedHashes`)){let t=Zr({commitments:e,to:`hex`});r.blobVersionedHashes=t}if(s.includes(`sidecars`)){let t=ai({blobs:m,commitments:e,proofs:Lr({blobs:m,commitments:e,kzg:g}),to:`hex`});r.sidecars=t}}if(s.includes(`chainId`)&&(r.chainId=await u()),(s.includes(`fees`)||s.includes(`type`))&&_===void 0)try{r.type=oi(r)}catch{let t=di.get(e.uid);t===void 0&&(t=typeof(await y())?.baseFeePerGas==`bigint`,di.set(e.uid,t)),r.type=t?`eip1559`:`legacy`}if(s.includes(`fees`))if(r.type!==`legacy`&&r.type!==`eip2930`){if(r.maxFeePerGas===void 0||r.maxPriorityFeePerGas===void 0){let{maxFeePerGas:t,maxPriorityFeePerGas:n}=await Pr(e,{block:await y(),chain:a,request:r});if(r.maxPriorityFeePerGas===void 0&&r.maxFeePerGas&&r.maxFeePerGas<n)throw new Cr({maxPriorityFeePerGas:n});r.maxPriorityFeePerGas=n,r.maxFeePerGas=t}}else{if(r.maxFeePerGas!==void 0||r.maxPriorityFeePerGas!==void 0)throw new Sr;if(r.gasPrice===void 0){let{gasPrice:t}=await Pr(e,{block:await y(),chain:a,request:r,type:`legacy`});r.gasPrice=t}}return s.includes(`gas`)&&h===void 0&&(r.gas=await A(e,mi,`estimateGas`)({...r,account:d,prepare:d?.type===`local`?[]:[`blobVersionedHashes`]})),c?.fn&&c.runAt?.includes(`afterFillParameters`)&&(r=await c.fn({...r,chain:a},{phase:`afterFillParameters`})),We(r),delete r.parameters,r}async function mi(e,n){let{account:r=e.account,prepare:i=!0}=n,a=r?t(r):void 0,o=(()=>{if(Array.isArray(i))return i;if(a?.type!==`local`)return[`blobVersionedHashes`]})();try{let t=await(async()=>{if(n.to)return n.to;if(n.authorizationList&&n.authorizationList.length>0)return await vr({authorization:n.authorizationList[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`")})})(),{accessList:r,authorizationList:s,blobs:c,blobVersionedHashes:l,blockNumber:u,blockTag:d,data:f,gas:p,gasPrice:m,maxFeePerBlobGas:h,maxFeePerGas:g,maxPriorityFeePerGas:_,nonce:y,value:b,stateOverride:x,...S}=i?await pi(e,{...n,parameters:o,to:t}):n;if(p&&n.gas!==p)return p;let C=(typeof u==`bigint`?D(u):void 0)||d,w=He(x);We(n);let ee=e.chain?.formatters?.transactionRequest?.format,te=(ee||Ke)({...Se(S,{format:ee}),account:a,accessList:r,authorizationList:s,blobs:c,blobVersionedHashes:l,data:f,gasPrice:m,maxFeePerBlobGas:h,maxFeePerGas:g,maxPriorityFeePerGas:_,nonce:y,to:t,value:b},`estimateGas`);return BigInt(await e.request({method:`eth_estimateGas`,params:w?[te,C??e.experimental_blockTag??`latest`,w]:C?[te,C]:[te]}))}catch(t){throw br(t,{...n,account:a,chain:e.chain})}}async function hi(e,n){let{abi:r,address:i,args:a,functionName:o,dataSuffix:s=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,...c}=n,l=Ce({abi:r,args:a,functionName:o});try{return await A(e,mi,`estimateGas`)({data:`${l}${s?s.replace(`0x`,``):``}`,to:i,...c})}catch(e){throw sr(e,{abi:r,address:i,args:a,docsPath:`/docs/contract/estimateContractGas`,functionName:o,sender:(c.account?t(c.account):void 0)?.address})}}function gi(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,blockTimestamp:e.blockTimestamp?BigInt(e.blockTimestamp):e.blockTimestamp===null?null:void 0,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}var _i=`/docs/contract/decodeEventLog`;function vi(e){let{abi:t,data:n,strict:i,topics:a}=e,o=i??!0,[s,...c]=a;if(!s)throw new r({docsPath:_i});let l=t.find(e=>e.type===`event`&&s===zt(Te(e)));if(!(l&&`name`in l)||l.type!==`event`)throw new Ct(s,{docsPath:_i});let{name:u,inputs:d}=l,p=d?.some(e=>!(`name`in e&&e.name)),m=p?[]:{},h=d.map((e,t)=>[e,t]).filter(([e])=>`indexed`in e&&e.indexed),g=[];for(let e=0;e<h.length;e++){let[t,n]=h[e],r=c[e];if(!r){if(o)throw new be({abiItem:l,param:t});g.push([t,n]);continue}m[p?n:t.name||n]=yi({param:t,value:r})}let _=d.filter(e=>!(`indexed`in e&&e.indexed)),v=o?_:[...g.map(([e])=>e),..._];if(v.length>0){if(n&&n!==`0x`)try{let e=Ge(v,n);if(e){let t=0;if(!o)for(let[n,r]of g)m[p?r:n.name||r]=e[t++];if(p)for(let n=0;n<d.length;n++)m[n]===void 0&&t<e.length&&(m[n]=e[t++]);else for(let n=0;n<_.length;n++)m[_[n].name]=e[t++]}}catch(e){if(o)throw e instanceof f||e instanceof qe?new me({abiItem:l,data:n,params:v,size:T(n)}):e}else if(o)throw new me({abiItem:l,data:`0x`,params:v,size:0})}return{eventName:u,args:Object.values(m).length>0?m:void 0}}function yi({param:e,value:t}){return e.type===`string`||e.type===`bytes`||e.type===`tuple`||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(Ge([e],t)||[])[0]}function bi(e){let{abi:t,args:n,logs:r,strict:i=!0}=e,a=(()=>{if(e.eventName)return Array.isArray(e.eventName)?e.eventName:[e.eventName]})(),o=t.filter(e=>e.type===`event`).map(e=>({abi:e,selector:zt(e)}));return r.map(e=>{let t=typeof e.blockNumber==`string`?gi(e):e,r=o.filter(e=>t.topics[0]===e.selector);if(r.length===0)return null;let s,c;for(let e of r)try{s=vi({...t,abi:[e.abi],strict:!0}),c=e;break}catch{}if(!s&&!i){c=r[0];try{s=vi({data:t.data,topics:t.topics,abi:[c.abi],strict:!1})}catch{let e=c.abi.inputs?.some(e=>!(`name`in e&&e.name));return{...t,args:e?[]:{},eventName:c.abi.name}}}return!s||!c||a&&!a.includes(s.eventName)||!xi({args:s.args,inputs:c.abi.inputs,matchArgs:n})?null:{...s,...t}}).filter(Boolean)}function xi(e){let{args:t,inputs:n,matchArgs:r}=e;if(!r)return!0;if(!t)return!1;function i(e,t,n){try{return e.type===`address`?re(t,n):e.type===`string`||e.type===`bytes`?O(tn(t))===n:t===n}catch{return!1}}return Array.isArray(t)&&Array.isArray(r)?r.every((e,r)=>{if(e==null)return!0;let a=n[r];return a?(Array.isArray(e)?e:[e]).some(e=>i(a,e,t[r])):!1}):typeof t==`object`&&!Array.isArray(t)&&typeof r==`object`&&!Array.isArray(r)?Object.entries(r).every(([e,r])=>{if(r==null)return!0;let a=n.find(t=>t.name===e);return a?(Array.isArray(r)?r:[r]).some(n=>i(a,n,t[e])):!1}):!1}async function Si(e,{address:t,blockHash:n,fromBlock:r,toBlock:i,event:a,events:o,args:s,strict:c}={}){let l=c??!1,u=o??(a?[a]:void 0),d=[];u&&(d=[u.flatMap(e=>nr({abi:[e],eventName:e.name,args:o?void 0:s}))],a&&(d=d[0]));let f;f=n?await e.request({method:`eth_getLogs`,params:[{address:t,topics:d,blockHash:n}]}):await e.request({method:`eth_getLogs`,params:[{address:t,topics:d,fromBlock:typeof r==`bigint`?D(r):r,toBlock:typeof i==`bigint`?D(i):i}]});let p=f.map(e=>gi(e));return u?bi({abi:u,args:s,logs:p,strict:l}):p}async function Ci(e,t){let{abi:n,address:r,args:i,blockHash:a,eventName:o,fromBlock:s,toBlock:c,strict:l}=t,u=o?ct({abi:n,name:o}):void 0,d=u?void 0:n.filter(e=>e.type===`event`);return A(e,Si,`getLogs`)({address:r,args:i,blockHash:a,event:u,events:d,fromBlock:s,toBlock:c,strict:l})}async function wi(e,t){let{abi:n,address:r,args:i,functionName:a,...o}=t,s=Ce({abi:n,args:i,functionName:a});try{let{data:t}=await A(e,Ut,`call`)({...o,data:s,to:r});return Vt({abi:n,args:i,functionName:a,data:t||`0x`})}catch(e){throw sr(e,{abi:n,address:r,args:i,docsPath:`/docs/contract/readContract`,functionName:a})}}async function Ti(e,n){let{abi:r,address:i,args:a,functionName:o,dataSuffix:s=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,...c}=n,l=c.account?t(c.account):e.account,u=Ce({abi:r,args:a,functionName:o});try{let{data:t}=await A(e,Ut,`call`)({batch:!1,data:`${u}${s?s.replace(`0x`,``):``}`,to:i,...c,account:l});return{result:Vt({abi:r,args:a,functionName:o,data:t||`0x`}),request:{abi:r.filter(e=>`name`in e&&e.name===n.functionName),address:i,args:a,dataSuffix:s,functionName:o,...c,account:l}}}catch(e){throw sr(e,{abi:r,address:i,args:a,docsPath:`/docs/contract/simulateContract`,functionName:o,sender:l?.address})}}var Ei=new Map,Di=new Map,Oi=0;function ki(e,t,n){let r=++Oi,i=()=>Ei.get(e)||[],a=()=>{let t=i();Ei.set(e,t.filter(e=>e.id!==r))},o=()=>{let t=i();if(!t.some(e=>e.id===r))return;let n=Di.get(e);if(t.length===1&&n){let e=n();e instanceof Promise&&e.catch(()=>{})}a()},s=i();if(Ei.set(e,[...s,{id:r,fns:t}]),s&&s.length>0)return o;let c={};for(let e in t)c[e]=((...t)=>{let n=i();if(n.length!==0)for(let r of n)r.fns[e]?.(...t)});let l=n(c);return typeof l==`function`&&Di.set(e,l),o}async function Ai(e){return new Promise(t=>setTimeout(t,e))}function ji(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let i=!0,a=()=>i=!1;return(async()=>{let o;t&&(o=await e({unpoll:a})),await Ai(await n?.(o)??r);let s=async()=>{i&&(await e({unpoll:a}),await Ai(r),s())};s()})(),a}var Mi=new Map,Ni=new Map;function Pi(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),n=t(e,Mi),r=t(e,Ni);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function Fi(e,{cacheKey:t,cacheTime:n=1/0}){let r=Pi(t),i=r.response.get();if(i&&n>0&&Date.now()-i.created.getTime()<n)return i.data;let a=r.promise.get();a||(a=e(),r.promise.set(a));try{let e=await a;return r.response.set({created:new Date,data:e}),e}finally{r.promise.clear()}}var Ii=e=>`blockNumber.${e}`;async function Li(e,{cacheTime:t=e.cacheTime}={}){let n=await Fi(()=>e.request({method:`eth_blockNumber`}),{cacheKey:Ii(e.uid),cacheTime:t});return BigInt(n)}async function Ri(e,{filter:t}){let n=`strict`in t&&t.strict,r=await t.request({method:`eth_getFilterChanges`,params:[t.id]});if(typeof r[0]==`string`)return r;let i=r.map(e=>gi(e));return!(`abi`in t)||!t.abi?i:bi({abi:t.abi,logs:i,strict:n})}async function zi(e,{filter:t}){return t.request({method:`eth_uninstallFilter`,params:[t.id]})}function Bi(e,t){let{abi:n,address:r,args:i,batch:a=!0,eventName:o,fromBlock:s,onError:c,onLogs:l,poll:u,pollingInterval:d=e.pollingInterval,strict:f}=t;return(u===void 0?typeof s==`bigint`||!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):u)?(()=>{let t=f??!1;return ki(k([`watchContractEvent`,r,i,a,e.uid,o,d,t,s]),{onLogs:l,onError:c},c=>{let l;s!==void 0&&(l=s-1n);let u,f=!1,p=ji(async()=>{if(!f){try{u=await A(e,ar,`createContractEventFilter`)({abi:n,address:r,args:i,eventName:o,strict:t,fromBlock:s})}catch{}f=!0;return}try{let s;if(u)s=await A(e,Ri,`getFilterChanges`)({filter:u});else{let a=await A(e,Li,`getBlockNumber`)({});s=l&&l<a?await A(e,Ci,`getContractEvents`)({abi:n,address:r,args:i,eventName:o,fromBlock:l+1n,toBlock:a,strict:t}):[],l=a}if(s.length===0)return;if(a)c.onLogs(s);else for(let e of s)c.onLogs([e])}catch(e){u&&e instanceof it&&(f=!1),c.onError?.(e)}},{emitOnBegin:!0,interval:d});return async()=>{u&&await A(e,zi,`uninstallFilter`)({filter:u}),p()}})})():(()=>{let t=f??!1,s=k([`watchContractEvent`,r,i,a,e.uid,o,d,t]),u=!0,p=()=>u=!1;return ki(s,{onLogs:l,onError:c},t=>((async()=>{try{let a=(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})(),s=o?nr({abi:n,eventName:o,args:i}):[],{unsubscribe:c}=await a.subscribe({params:[`logs`,{address:r,topics:s}],onData(e){if(!u)return;let r=e.result;try{let{eventName:e,args:i}=vi({abi:n,data:r.data,topics:r.topics,strict:f}),a=gi(r,{args:i,eventName:e});t.onLogs([a])}catch(e){let n,i;if(e instanceof me||e instanceof be){if(f)return;n=e.abiItem.name,i=e.abiItem.inputs?.some(e=>!(`name`in e&&e.name))}let a=gi(r,{args:i?[]:{},eventName:n});t.onLogs([a])}},onError(e){t.onError?.(e)}});p=c,u||p()}catch(e){c?.(e)}})(),()=>p()))})()}var Vi=class extends v{constructor({docsPath:e}={}){super([`Could not find an Account to execute with this Action.`,"Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."].join(`
`),{docsPath:e,docsSlug:`account`,name:`AccountNotFoundError`})}},Hi=class extends v{constructor({docsPath:e,metaMessages:t,type:n}){super(`Account type "${n}" is not supported.`,{docsPath:e,metaMessages:t,name:`AccountTypeNotSupportedError`})}};function Ui({chain:e,currentChainId:t}){if(!e)throw new Zt;if(t!==e.id)throw new Ot({chain:e,currentChainId:t})}async function Wi(e,{serializedTransaction:t}){return e.request({method:`eth_sendRawTransaction`,params:[t]},{retryCount:0})}var Gi=new ot(128);async function Ki(e,n){let{account:r=e.account,assertChainId:i=!0,chain:a=e.chain,accessList:o,authorizationList:s,blobs:c,data:l,dataSuffix:u=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,type:_,value:y,...b}=n;if(r===void 0)throw new Vi({docsPath:`/docs/actions/wallet/sendTransaction`});let x=r?t(r):null;try{We(n);let t=await(async()=>{if(n.to)return n.to;if(n.to!==null&&s&&s.length>0)return await vr({authorization:s[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`.")})})();if(x?.type===`json-rpc`||x===null){let n;a!==null&&(n=await A(e,ci,`getChainId`)({}),i&&Ui({currentChainId:n,chain:a}));let r=e.chain?.formatters?.transactionRequest?.format,v=(r||Ke)({...Se(b,{format:r}),accessList:o,account:x,authorizationList:s,blobs:c,chainId:n,data:l&&It([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,to:t,type:_,value:y},`sendTransaction`),S=Gi.get(e.uid),C=S?`wallet_sendTransaction`:`eth_sendTransaction`;try{return await e.request({method:C,params:[v]},{retryCount:0})}catch(t){if(S===!1)throw t;let n=t;if(n.name===`InvalidInputRpcError`||n.name===`InvalidParamsRpcError`||n.name===`MethodNotFoundRpcError`||n.name===`MethodNotSupportedRpcError`)return await e.request({method:`wallet_sendTransaction`,params:[v]},{retryCount:0}).then(t=>(Gi.set(e.uid,!0),t)).catch(t=>{let r=t;throw r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`?(Gi.set(e.uid,!1),n):r});throw n}}if(x?.type===`local`){let n=await A(e,pi,`prepareTransactionRequest`)({account:x,accessList:o,authorizationList:s,blobs:c,chain:a,data:l&&It([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,nonceManager:x.nonceManager,parameters:[...ui,`sidecars`],type:_,value:y,...b,to:t}),r=a?.serializers?.transaction,i=await x.signTransaction(n,{serializer:r});return await A(e,Wi,`sendRawTransaction`)({serializedTransaction:i})}throw x?.type===`smart`?new Hi({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:`/docs/actions/bundler/sendUserOperation`,type:`smart`}):new Hi({docsPath:`/docs/actions/wallet/sendTransaction`,type:x?.type})}catch(e){throw e instanceof Hi?e:si(e,{...n,account:x,chain:n.chain||void 0})}}async function qi(e,t){return qi.internal(e,Ki,`sendTransaction`,t)}(function(e){async function n(e,n,r,i){let{abi:a,account:o=e.account,address:s,args:c,functionName:l,...u}=i;if(o===void 0)throw new Vi({docsPath:`/docs/contract/writeContract`});let d=o?t(o):null,f=Ce({abi:a,args:c,functionName:l});try{return await A(e,n,r)({data:f,to:s,account:d,...u})}catch(e){throw sr(e,{abi:a,address:s,args:c,docsPath:`/docs/contract/writeContract`,functionName:l,sender:d?.address})}}e.internal=n})(qi||={});var Ji=class extends v{constructor(e){super(`Call bundle failed with status: ${e.statusCode}`,{name:`BundleFailedError`}),Object.defineProperty(this,`result`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.result=e}};function Yi(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,a)=>{let o=async({count:s=0}={})=>{let c=async({error:e})=>{let n=typeof t==`function`?t({count:s,error:e}):t;n&&await Ai(n),o({count:s+1})};try{i(await e())}catch(e){if(s<n&&await r({count:s,error:e}))return c({error:e});a(e)}};o()})}var Xi={"0x0":`reverted`,"0x1":`success`};function Zi(e,t){let n={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>gi(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?je(e.transactionIndex):null,status:e.status?Xi[e.status]:null,type:e.type?Tr[e.type]||e.type:null};return e.blobGasPrice&&(n.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(n.blobGasUsed=BigInt(e.blobGasUsed)),n}var Qi=`0x5792579257925792579257925792579257925792579257925792579257925792`,$i=D(0,{size:32});async function ea(e,n){let{account:r=e.account,chain:i=e.chain,experimental_fallback:a,experimental_fallbackDelay:o=32,forceAtomic:s=!1,id:c,version:u=`2.0.0`}=n,d=r?t(r):null,f=n.capabilities;e.dataSuffix&&!n.capabilities?.dataSuffix&&(f=typeof e.dataSuffix==`string`?{...n.capabilities,dataSuffix:{value:e.dataSuffix,optional:!0}}:{...n.capabilities,dataSuffix:{value:e.dataSuffix.value,...e.dataSuffix.required?{}:{optional:!0}}});let p=n.calls.map(e=>{let t=e,n=t.abi?Ce({abi:t.abi,functionName:t.functionName,args:t.args}):t.data;return{data:t.dataSuffix&&n?It([n,t.dataSuffix]):n,to:t.to,value:t.value?D(t.value):void 0}});try{let t=await e.request({method:`wallet_sendCalls`,params:[{atomicRequired:s,calls:p,capabilities:f,chainId:D(i.id),from:d?.address,id:c,version:u}]},{retryCount:0});return typeof t==`string`?{id:t}:t}catch(t){let r=t;if(a&&(r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`||r.name===`UnknownRpcError`||r.details.toLowerCase().includes(`does not exist / is not available`)||r.details.toLowerCase().includes(`missing or invalid. request()`)||r.details.toLowerCase().includes(`did not match any variant of untagged enum`)||r.details.toLowerCase().includes(`account upgraded to unsupported contract`)||r.details.toLowerCase().includes(`eip-7702 not supported`)||r.details.toLowerCase().includes(`unsupported wc_ method`)||r.details.toLowerCase().includes(`feature toggled misconfigured`)||r.details.toLowerCase().includes(`jsonrpcengine: response has no error or result for request`))){if(f&&Object.values(f).some(e=>!e.optional)){let e="non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";throw new Me(new v(e,{details:e}))}if(s&&p.length>1){let e="`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";throw new Gt(new v(e,{details:e}))}let t=[];for(let n of p){let r=Ki(e,{account:d,chain:i,data:n.data,to:n.to,value:n.value?l(n.value):void 0});t.push(r),o>0&&await new Promise(e=>setTimeout(e,o))}let n=await Promise.allSettled(t);if(n.every(e=>e.status===`rejected`))throw n[0].reason;return{id:It([...n.map(e=>e.status===`fulfilled`?e.value:$i),D(i.id,{size:32}),Qi])}}throw si(t,{...n,account:d,chain:n.chain})}}async function ta(e,t){async function n(t){if(t.endsWith(`5792579257925792579257925792579257925792579257925792579257925792`)){let n=h(Qe(t,-64,-32)),r=Qe(t,0,-64).slice(2).match(/.{1,64}/g),i=await Promise.all(r.map(t=>$i.slice(2)===t?void 0:e.request({method:`eth_getTransactionReceipt`,params:[`0x${t}`]},{dedupe:!0}))),a=i.some(e=>e===null)?100:i.every(e=>e?.status===`0x1`)?200:i.every(e=>e?.status===`0x0`)?500:600;return{atomic:!1,chainId:je(n),receipts:i.filter(Boolean),status:a,version:`2.0.0`}}return e.request({method:`wallet_getCallsStatus`,params:[t]})}let{atomic:r=!1,chainId:i,receipts:a,version:o=`2.0.0`,...s}=await n(t.id),[c,u]=(()=>{let e=s.status;return e>=100&&e<200?[`pending`,e]:e>=200&&e<300?[`success`,e]:e>=300&&e<700?[`failure`,e]:e===`CONFIRMED`?[`success`,200]:e===`PENDING`?[`pending`,100]:[void 0,e]})();return{...s,atomic:r,chainId:i?je(i):void 0,receipts:a?.map(e=>({...e,blockNumber:l(e.blockNumber),gasUsed:l(e.gasUsed),status:Xi[e.status]}))??[],statusCode:u,status:c,version:o}}async function na(e,t){let{id:n,pollingInterval:r=e.pollingInterval,status:i=({statusCode:e})=>e===200||e>=300,retryCount:a=4,retryDelay:o=({count:e})=>~~(1<<e)*200,timeout:s=6e4,throwOnFailure:c=!1}=t,l=k([`waitForCallsStatus`,e.uid,n]),{promise:u,resolve:d,reject:f}=Ze(),p,m=ki(l,{resolve:d,reject:f},t=>{let s=ji(async()=>{let r=e=>{clearTimeout(p),s(),e(),m()};try{let s=await Yi(async()=>{let t=await A(e,ta,`getCallsStatus`)({id:n});if(c&&t.status===`failure`)throw new Ji(t);return t},{retryCount:a,delay:o});if(!i(s))return;r(()=>t.resolve(s))}catch(e){r(()=>t.reject(e))}},{interval:r,emitOnBegin:!0});return s});return p=s?setTimeout(()=>{m(),clearTimeout(p),f(new ra({id:n}))},s):void 0,await u}var ra=class extends v{constructor({id:e}){super(`Timed out while waiting for call bundle with id "${e}" to be confirmed.`,{name:`WaitForCallsStatusTimeoutError`})}},ia=256,aa=ia,oa;function sa(e=11){if(!oa||aa+e>ia*2){oa=``,aa=0;for(let e=0;e<ia;e++)oa+=(256+Math.random()*256|0).toString(16).substring(1)}return oa.substring(aa,aa+++e)}function ca(e){let{batch:n,chain:r,ccipRead:i,dataSuffix:a,key:o=`base`,name:s=`Base Client`,type:c=`base`}=e,l=e.experimental_blockTag??(typeof r?.experimental_preconfirmationTime==`number`?`pending`:void 0),u=r?.blockTime??12e3,d=Math.min(Math.max(Math.floor(u/2),500),4e3),f=e.pollingInterval??d,p=e.cacheTime??f,m=e.account?t(e.account):void 0,{config:h,request:g,value:_}=e.transport({account:m,chain:r,pollingInterval:f}),v={account:m,batch:n,cacheTime:p,ccipRead:i,chain:r,dataSuffix:a,key:o,name:s,pollingInterval:f,request:g,transport:{...h,..._},type:c,uid:sa(),...l?{experimental_blockTag:l}:{}};function y(e){return t=>{let n=t(e);for(let e in v)delete n[e];let r={...e,...n};return Object.assign(r,{extend:y(r)})}}return Object.assign(v,{extend:y(v)})}function la(e){if(!(e instanceof v))return!1;let t=e.walk(e=>e instanceof xe);return t instanceof xe?t.data?.errorName===`HttpError`||t.data?.errorName===`ResolverError`||t.data?.errorName===`ResolverNotContract`||t.data?.errorName===`ResolverNotFound`||t.data?.errorName===`ReverseAddressMismatch`||t.data?.errorName===`UnsupportedResolverProfile`:!1}function ua(e){if(e.length!==66||e.indexOf(`[`)!==0||e.indexOf(`]`)!==65)return null;let t=`0x${e.slice(1,65)}`;return le(t)?t:null}function da(e){let t=new Uint8Array(32).fill(0);if(!e)return dn(t);let n=e.split(`.`);for(let e=n.length-1;e>=0;--e){let r=ua(n[e]),i=r?tn(r):O(Ye(n[e]),`bytes`);t=O(It([t,i]),`bytes`)}return dn(t)}function fa(e){return`[${e.slice(2)}]`}function pa(e){let t=new Uint8Array(32).fill(0);return e?ua(e)||O(Ye(e)):dn(t)}function ma(e){let t=e.replace(/^\.|\.$/gm,``);if(t.length===0)return new Uint8Array(1);let n=new Uint8Array(Ye(t).byteLength+2),r=0,i=t.split(`.`);for(let e=0;e<i.length;e++){let t=Ye(i[e]);t.byteLength>255&&(t=Ye(fa(pa(i[e])))),n[r]=t.length,n.set(t,r+1),r+=t.length+1}return n.byteLength===r+1?n:n.slice(0,r+1)}async function ha(e,t){let{blockNumber:n,blockTag:r,coinType:i,name:a,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return Kt({blockNumber:n,chain:c,contract:`ensUniversalResolver`})})(),u=c?.ensTlds;if(u&&!u.some(e=>a.endsWith(e)))return null;let d=i==null?[da(a)]:[da(a),BigInt(i)];try{let t=Ce({abi:jt,functionName:`addr`,args:d}),i={address:l,abi:un,functionName:`resolveWithGateways`,args:[Oe(ma(a)),t,o??[`x-batch-gateway:true`]],blockNumber:n,blockTag:r},s=await A(e,wi,`readContract`)(i);if(s[0]===`0x`)return null;let c=Vt({abi:jt,args:d,functionName:`addr`,data:s[0]});return c===`0x`||h(c)===`0x00`?null:c}catch(e){if(s)throw e;if(la(e))return null;throw e}}var ga=class extends v{constructor({data:e}){super(`Unable to extract image from metadata. The metadata may be malformed or invalid.`,{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",``,`Provided data: ${JSON.stringify(e)}`],name:`EnsAvatarInvalidMetadataError`})}},_a=class extends v{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`,{name:`EnsAvatarInvalidNftUriError`})}},va=class extends v{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,{name:`EnsAvatarUriResolutionError`})}},ya=class extends v{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,{name:`EnsAvatarUnsupportedNamespaceError`})}},ba=/(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,xa=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Sa=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Ca=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function wa(e){try{let t=await fetch(e,{method:`HEAD`});return t.status===200?t.headers.get(`content-type`)?.startsWith(`image/`):!1}catch(t){return typeof t==`object`&&t.response!==void 0||!Object.hasOwn(globalThis,`Image`)?!1:new Promise(t=>{let n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e})}}function Ta(e,t){return e?e.endsWith(`/`)?e.slice(0,-1):e:t}function Ea({uri:e,gatewayUrls:t}){let n=Sa.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};let r=Ta(t?.ipfs,`https://ipfs.io`),i=Ta(t?.arweave,`https://arweave.net`),{protocol:a,subpath:o,target:s,subtarget:c=``}=e.match(ba)?.groups||{},l=a===`ipns:/`||o===`ipns/`,u=a===`ipfs:/`||o===`ipfs/`||xa.test(e);if(e.startsWith(`http`)&&!l&&!u){let n=e;return t?.arweave&&(n=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:n,isOnChain:!1,isEncoded:!1}}if((l||u)&&s)return{uri:`${r}/${l?`ipns`:`ipfs`}/${s}${c}`,isOnChain:!1,isEncoded:!1};if(a===`ar:/`&&s)return{uri:`${i}/${s}${c||``}`,isOnChain:!1,isEncoded:!1};let d=e.replace(Ca,``);if(d.startsWith(`<svg`)&&(d=`data:image/svg+xml;base64,${btoa(d)}`),d.startsWith(`data:`)||d.startsWith(`{`))return{uri:d,isOnChain:!0,isEncoded:!1};throw new va({uri:e})}function Da(e){if(typeof e!=`object`||!(`image`in e)&&!(`image_url`in e)&&!(`image_data`in e))throw new ga({data:e});return e.image||e.image_url||e.image_data}async function Oa({gatewayUrls:e,uri:t}){try{return await ka({gatewayUrls:e,uri:Da(await fetch(t).then(e=>e.json()))})}catch{throw new va({uri:t})}}async function ka({gatewayUrls:e,uri:t}){let{uri:n,isOnChain:r}=Ea({uri:t,gatewayUrls:e});if(r||await wa(n))return n;throw new va({uri:t})}function Aa(e){let t=e;t.startsWith(`did:nft:`)&&(t=t.replace(`did:nft:`,``).replace(/_/g,`/`));let[n,r,i]=t.split(`/`),[a,o]=n.split(`:`),[s,c]=r.split(`:`);if(!a||a.toLowerCase()!==`eip155`)throw new _a({reason:`Only EIP-155 supported`});if(!o)throw new _a({reason:`Chain ID not found`});if(!c)throw new _a({reason:`Contract address not found`});if(!i)throw new _a({reason:`Token ID not found`});if(!s)throw new _a({reason:`ERC namespace not found`});return{chainID:Number.parseInt(o,10),namespace:s.toLowerCase(),contractAddress:c,tokenID:i}}async function ja(e,{nft:t}){if(t.namespace===`erc721`)return wi(e,{address:t.contractAddress,abi:[{name:`tokenURI`,type:`function`,stateMutability:`view`,inputs:[{name:`tokenId`,type:`uint256`}],outputs:[{name:``,type:`string`}]}],functionName:`tokenURI`,args:[BigInt(t.tokenID)]});if(t.namespace===`erc1155`)return wi(e,{address:t.contractAddress,abi:[{name:`uri`,type:`function`,stateMutability:`view`,inputs:[{name:`_id`,type:`uint256`}],outputs:[{name:``,type:`string`}]}],functionName:`uri`,args:[BigInt(t.tokenID)]});throw new ya({namespace:t.namespace})}async function Ma(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?Na(e,{gatewayUrls:t,record:n}):ka({uri:n,gatewayUrls:t})}async function Na(e,{gatewayUrls:t,record:n}){let r=Aa(n),{uri:i,isOnChain:a,isEncoded:o}=Ea({uri:await ja(e,{nft:r}),gatewayUrls:t});if(a&&(i.includes(`data:application/json;base64,`)||i.startsWith(`{`))){let e=o?atob(i.replace(`data:application/json;base64,`,``)):i;return ka({uri:Da(JSON.parse(e)),gatewayUrls:t})}let s=r.tokenID;return r.namespace===`erc1155`&&(s=s.replace(`0x`,``).padStart(64,`0`)),Oa({gatewayUrls:t,uri:i.replace(/(?:0x)?{id}/,s)})}async function Pa(e,t){let{blockNumber:n,blockTag:r,key:i,name:a,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return Kt({blockNumber:n,chain:c,contract:`ensUniversalResolver`})})(),u=c?.ensTlds;if(u&&!u.some(e=>a.endsWith(e)))return null;try{let t={address:l,abi:un,args:[Oe(ma(a)),Ce({abi:en,functionName:`text`,args:[da(a),i]}),o??[`x-batch-gateway:true`]],functionName:`resolveWithGateways`,blockNumber:n,blockTag:r},s=await A(e,wi,`readContract`)(t);if(s[0]===`0x`)return null;let c=Vt({abi:en,functionName:`text`,data:s[0]});return c===``?null:c}catch(e){if(s)throw e;if(la(e))return null;throw e}}async function Fa(e,{blockNumber:t,blockTag:n,assetGatewayUrls:r,name:i,gatewayUrls:a,strict:o,universalResolverAddress:s}){let c=await A(e,Pa,`getEnsText`)({blockNumber:t,blockTag:n,key:`avatar`,name:i,universalResolverAddress:s,gatewayUrls:a,strict:o});if(!c)return null;try{return await Ma(e,{record:c,gatewayUrls:r})}catch{return null}}async function Ia(e,t){let{address:n,blockNumber:r,blockTag:i,coinType:a=60n,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return Kt({blockNumber:r,chain:c,contract:`ensUniversalResolver`})})();try{let t={address:l,abi:et,args:[n,a,o??[`x-batch-gateway:true`]],functionName:`reverseWithGateways`,blockNumber:r,blockTag:i},[s]=await A(e,wi,`readContract`)(t);return s||null}catch(e){if(s)throw e;if(la(e))return null;throw e}}async function La(e,t){let{blockNumber:n,blockTag:r,name:i}=t,{chain:a}=e,o=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!a)throw Error(`client chain not configured. universalResolverAddress is required.`);return Kt({blockNumber:n,chain:a,contract:`ensUniversalResolver`})})(),s=a?.ensTlds;if(s&&!s.some(e=>i.endsWith(e)))throw Error(`${i} is not a valid ENS TLD (${s?.join(`, `)}) for chain "${a.name}" (id: ${a.id}).`);let[c]=await A(e,wi,`readContract`)({address:o,abi:[{inputs:[{type:`bytes`}],name:`findResolver`,outputs:[{type:`address`},{type:`bytes32`},{type:`uint256`}],stateMutability:`view`,type:`function`}],functionName:`findResolver`,args:[Oe(ma(i))],blockNumber:n,blockTag:r});return c}async function Ra(e,n){let{account:r=e.account,blockNumber:i,blockTag:a=`latest`,blobs:o,data:s,gas:c,gasPrice:l,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:f,to:p,value:m,...h}=n,g=r?t(r):void 0;try{We(n);let t=(typeof i==`bigint`?D(i):void 0)||a,r=e.chain?.formatters?.transactionRequest?.format,_=(r||Ke)({...Se(h,{format:r}),account:g,blobs:o,data:s,gas:c,gasPrice:l,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:f,to:p,value:m},`createAccessList`),v=await e.request({method:`eth_createAccessList`,params:[_,t]});return{accessList:v.accessList,gasUsed:BigInt(v.gasUsed)}}catch(t){throw Ft(t,{...n,account:g,chain:e.chain})}}async function za(e){let t=ir(e,{method:`eth_newBlockFilter`}),n=await e.request({method:`eth_newBlockFilter`});return{id:n,request:t(n),type:`block`}}async function Ba(e,{address:t,args:n,event:r,events:i,fromBlock:a,strict:o,toBlock:s}={}){let c=i??(r?[r]:void 0),l=ir(e,{method:`eth_newFilter`}),u=[];c&&(u=[c.flatMap(e=>nr({abi:[e],eventName:e.name,args:n}))],r&&(u=u[0]));let d=await e.request({method:`eth_newFilter`,params:[{address:t,fromBlock:typeof a==`bigint`?D(a):a,toBlock:typeof s==`bigint`?D(s):s,...u.length?{topics:u}:{}}]});return{abi:c,args:n,eventName:r?r.name:void 0,fromBlock:a,id:d,request:l(d),strict:!!o,toBlock:s,type:`event`}}async function Va(e){let t=ir(e,{method:`eth_newPendingTransactionFilter`}),n=await e.request({method:`eth_newPendingTransactionFilter`});return{id:n,request:t(n),type:`transaction`}}async function Ha(e,{address:t,blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`}){if(e.batch?.multicall&&e.chain?.contracts?.multicall3){let i=e.chain.contracts.multicall3.address,a=Ce({abi:Je,functionName:`getEthBalance`,args:[t]}),{data:o}=await A(e,Ut,`call`)({to:i,data:a,blockNumber:n,blockTag:r});return Vt({abi:Je,functionName:`getEthBalance`,args:[t],data:o||`0x`})}let i=typeof n==`bigint`?D(n):void 0,a=await e.request({method:`eth_getBalance`,params:[t,i||r]});return BigInt(a)}async function Ua(e){let t=await e.request({method:`eth_blobBaseFee`});return BigInt(t)}async function Wa(e,{blockHash:t,blockNumber:n,blockTag:r=`latest`}={}){let i=n===void 0?void 0:D(n),a;return a=t?await e.request({method:`eth_getBlockTransactionCountByHash`,params:[t]},{dedupe:!0}):await e.request({method:`eth_getBlockTransactionCountByNumber`,params:[i||r]},{dedupe:!!i}),je(a)}async function Ga(e,{address:t,blockNumber:n,blockTag:r=`latest`}){let i=n===void 0?void 0:D(n),a=await e.request({method:`eth_getCode`,params:[t,i||r]},{dedupe:!!i});if(a!==`0x`)return a}async function Ka(e,{address:t,blockNumber:n,blockTag:r=`latest`}){let i=await Ga(e,{address:t,...n===void 0?{blockTag:r}:{blockNumber:n}});if(i&&T(i)===23&&i.startsWith(`0xef0100`))return Qt(bt(i,3,23))}var qa=class extends v{constructor({address:e}){super(`No EIP-712 domain found on contract "${e}".`,{metaMessages:[`Ensure that:`,`- The contract is deployed at the address "${e}".`,"- `eip712Domain()` function exists on the contract.","- `eip712Domain()` function matches signature to ERC-5267 specification."],name:`Eip712DomainNotFoundError`})}};async function Ja(e,t){let{address:n,factory:r,factoryData:i}=t;try{let[t,a,o,s,c,l,u]=await A(e,wi,`readContract`)({abi:Ya,address:n,functionName:`eip712Domain`,factory:r,factoryData:i});return{domain:{name:a,version:o,chainId:Number(s),verifyingContract:c,salt:l},extensions:u,fields:t}}catch(e){let t=e;throw t.name===`ContractFunctionExecutionError`&&t.cause.name===`ContractFunctionZeroDataError`?new qa({address:n}):t}}var Ya=[{inputs:[],name:`eip712Domain`,outputs:[{name:`fields`,type:`bytes1`},{name:`name`,type:`string`},{name:`version`,type:`string`},{name:`chainId`,type:`uint256`},{name:`verifyingContract`,type:`address`},{name:`salt`,type:`bytes32`},{name:`extensions`,type:`uint256[]`}],stateMutability:`view`,type:`function`}];function Xa(e){return{baseFeePerGas:e.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:e.reward?.map(e=>e.map(e=>BigInt(e)))}}async function Za(e,{blockCount:t,blockNumber:n,blockTag:r=`latest`,rewardPercentiles:i}){let a=typeof n==`bigint`?D(n):void 0;return Xa(await e.request({method:`eth_feeHistory`,params:[D(t),a||r,i]},{dedupe:!!a}))}async function Qa(e,{filter:t}){let n=t.strict??!1,r=(await t.request({method:`eth_getFilterLogs`,params:[t.id]})).map(e=>gi(e));return t.abi?bi({abi:t.abi,logs:r,strict:n}):r}async function $a({address:e,authorization:t,signature:n}){return re(Qt(e),await vr({authorization:t,signature:n}))}var eo=new ot(8192);function to(e,{enabled:t=!0,id:n}){if(!t||!n)return e();if(eo.get(n))return eo.get(n);let r=e().finally(()=>eo.delete(n));return eo.set(n,r),r}function no(e,t={}){return async(n,r={})=>{let{dedupe:i=!1,methods:a,retryDelay:o=150,retryCount:s=3,uid:c}={...t,...r},{method:l}=n;if(a?.exclude?.includes(l)||a?.include&&!a.include.includes(l))throw new Mt(Error(`method not supported`),{method:l});return to(()=>Yi(async()=>{try{return await e(n)}catch(e){let t=e;switch(t.code){case vt.code:throw new vt(t);case $t.code:throw new $t(t);case Bt.code:throw new Bt(t,{method:n.method});case At.code:throw new At(t);case Jt.code:throw new Jt(t);case it.code:throw new it(t);case Xe.code:throw new Xe(t);case nn.code:throw new nn(t);case tt.code:throw new tt(t);case Mt.code:throw new Mt(t,{method:n.method});case ft.code:throw new ft(t);case st.code:throw new st(t);case p.code:throw new p(t);case ln.code:throw new ln(t);case g.code:throw new g(t);case ht.code:throw new ht(t);case $e.code:throw new $e(t);case fn.code:throw new fn(t);case Me.code:throw new Me(t);case on.code:throw new on(t);case Lt.code:throw new Lt(t);case ke.code:throw new ke(t);case xt.code:throw new xt(t);case Pt.code:throw new Pt(t);case Gt.code:throw new Gt(t);case 5e3:throw new p(t);case ve.code:throw new ve(t);default:throw e instanceof v?e:new u(t)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof Dt){let e=t?.headers?.get(`Retry-After`);if(e?.match(/\d/))return Number.parseInt(e,10)*1e3}return~~(1<<e)*o},retryCount:s,shouldRetry:({error:e})=>ro(e)}),{enabled:i,id:i?cn(`${c}.${k(n)}`):void 0})}}function ro(e){return`code`in e&&typeof e.code==`number`?e.code===-1||e.code===ft.code||e.code===Jt.code:e instanceof Dt&&e.status?e.status===403||e.status===408||e.status===413||e.status===429||e.status===500||e.status===502||e.status===503||e.status===504:!0}function io(e,{errorInstance:t=Error(`timed out`),timeout:n,signal:r}){return new Promise((i,a)=>{(async()=>{let o;try{let s=new AbortController;n>0&&(o=setTimeout(()=>{r?s.abort():a(t)},n)),i(await e({signal:s?.signal||null}))}catch(e){e?.name===`AbortError`&&a(t),a(e)}finally{clearTimeout(o)}})()})}function ao(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var oo=ao();function so(e,t={}){let{url:n,headers:r}=co(e);return{async request(e){let{body:i,fetchFn:a=t.fetchFn??fetch,onRequest:o=t.onRequest,onResponse:s=t.onResponse,timeout:c=t.timeout??1e4}=e,l={...t.fetchOptions??{},...e.fetchOptions??{}},{headers:u,method:d,signal:f}=l;try{let e=await io(async({signal:e})=>{let t={...l,body:k(Array.isArray(i)?i.map(e=>({jsonrpc:`2.0`,id:e.id??oo.take(),...e})):{jsonrpc:`2.0`,id:i.id??oo.take(),...i}),headers:{...r,"Content-Type":`application/json`,...u},method:d||`POST`,signal:f||(c>0?e:null)},s=new Request(n,t),p=await o?.(s,t)??{...t,url:n};return await a(p.url??n,p)},{errorInstance:new wt({body:i,url:n}),timeout:c,signal:!0});s&&await s(e);let t;if(e.headers.get(`Content-Type`)?.startsWith(`application/json`))t=await e.json();else{t=await e.text();try{t=JSON.parse(t||`{}`)}catch(n){if(e.ok)throw n;t={error:t}}}if(!e.ok)throw new Dt({body:i,details:k(t.error)||e.statusText,headers:e.headers,status:e.status,url:n});return t}catch(e){throw e instanceof Dt||e instanceof wt?e:new Dt({body:i,cause:e,url:n})}}}}function co(e){try{let t=new URL(e),n=(()=>{if(t.username){let e=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username=``,t.password=``,{url:t.toString(),headers:{Authorization:`Basic ${btoa(e)}`}}}})();return{url:t.toString(),...n}}catch{return{url:e}}}var lo=`Ethereum Signed Message:
`;function uo(e){let t=typeof e==`string`?cn(e):typeof e.raw==`string`?e.raw:dn(e.raw);return It([cn(`${lo}${T(t)}`),t])}function fo(e,t){return O(uo(e),t)}var po=class extends v{constructor({domain:e}){super(`Invalid domain "${k(e)}".`,{metaMessages:[`Must be a valid EIP-712 domain.`]})}},mo=class extends v{constructor({primaryType:e,types:t}){super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`,{docsPath:`/api/glossary/Errors#typeddatainvalidprimarytypeerror`,metaMessages:["Check that the primary type is a key in `types`."]})}},ho=class extends v{constructor({type:e}){super(`Struct type "${e}" is invalid.`,{metaMessages:[`Struct type must not be a Solidity type.`],name:`InvalidStructTypeError`})}};function go(e){let{domain:t,message:n,primaryType:r,types:i}=e,a=(e,t)=>{let n={...t};for(let t of e){let{name:e,type:r}=t;r===`address`&&(n[e]=n[e].toLowerCase())}return n};return k({domain:!i.EIP712Domain||!t?{}:a(i.EIP712Domain,t),message:(()=>{if(r!==`EIP712Domain`)return a(i[r],n)})(),primaryType:r,types:i})}function _o(e){let{domain:t,message:n,primaryType:r,types:i}=e,a=(e,t)=>{for(let n of e){let{name:e,type:r}=n,o=t[e],s=r.match(Wt);if(s&&(typeof o==`number`||typeof o==`bigint`)){let[e,t,n]=s;D(o,{signed:t===`int`,size:Number.parseInt(n,10)/8})}if(r===`address`&&typeof o==`string`&&!rt(o))throw new dt({address:o});let c=r.match(Nt);if(c){let[e,t]=c;if(t&&T(o)!==Number.parseInt(t,10))throw new de({expectedSize:Number.parseInt(t,10),givenSize:T(o)})}let l=i[r];l&&(yo(r),a(l,o))}};if(i.EIP712Domain&&t){if(typeof t!=`object`)throw new po({domain:t});a(i.EIP712Domain,t)}if(r!==`EIP712Domain`)if(i[r])a(i[r],n);else throw new mo({primaryType:r,types:i})}function vo({domain:e}){return[typeof e?.name==`string`&&{name:`name`,type:`string`},e?.version&&{name:`version`,type:`string`},(typeof e?.chainId==`number`||typeof e?.chainId==`bigint`)&&{name:`chainId`,type:`uint256`},e?.verifyingContract&&{name:`verifyingContract`,type:`address`},e?.salt&&{name:`salt`,type:`bytes32`}].filter(Boolean)}function yo(e){if(e===`address`||e===`bool`||e===`string`||e.startsWith(`bytes`)||e.startsWith(`uint`)||e.startsWith(`int`))throw new ho({type:e})}function bo(e){let{domain:t={},message:n,primaryType:r}=e,i={EIP712Domain:vo({domain:t}),...e.types};_o({domain:t,message:n,primaryType:r,types:i});let a=[`0x1901`];return t&&a.push(xo({domain:t,types:i})),r!==`EIP712Domain`&&a.push(So({data:n,primaryType:r,types:i})),O(It(a))}function xo({domain:e,types:t}){return So({data:e,primaryType:`EIP712Domain`,types:t})}function So({data:e,primaryType:t,types:n}){return O(Co({data:e,primaryType:t,types:n}))}function Co({data:e,primaryType:t,types:n}){let r=[{type:`bytes32`}],i=[wo({primaryType:t,types:n})];for(let a of n[t]){let[t,o]=Do({types:n,name:a.name,type:a.type,value:e[a.name]});r.push(t),i.push(o)}return Yt(r,i)}function wo({primaryType:e,types:t}){return O(Oe(To({primaryType:e,types:t})))}function To({primaryType:e,types:t}){let n=``,r=Eo({primaryType:e,types:t});r.delete(e);let i=[e,...Array.from(r).sort()];for(let e of i)n+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(`,`)})`;return n}function Eo({primaryType:e,types:t},n=new Set){let r=e.match(/^\w*/u)?.[0];if(n.has(r)||t[r]===void 0)return n;n.add(r);for(let e of t[r])Eo({primaryType:e.type,types:t},n);return n}function Do({types:e,name:t,type:n,value:r}){if(e[n]!==void 0)return[{type:`bytes32`},O(Co({data:r,primaryType:n,types:e}))];if(n===`bytes`)return[{type:`bytes32`},O(r)];if(n===`string`)return[{type:`bytes32`},O(Oe(r))];if(n.lastIndexOf(`]`)===n.length-1){let i=n.slice(0,n.lastIndexOf(`[`)),a=r.map(n=>Do({name:t,type:i,types:e,value:n}));return[{type:`bytes32`},O(Yt(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:n},r]}var Oo={checksum:new class extends Map{constructor(e){super(),Object.defineProperty(this,`maxSize`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){let t=super.get(e);return super.has(e)&&t!==void 0&&(this.delete(e),super.set(e,t)),t}set(e,t){if(super.set(e,t),this.maxSize&&this.size>this.maxSize){let e=this.keys().next().value;e&&this.delete(e)}return this}}(8192)}.checksum,ko=class extends Jn{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,qn(e);let n=bn(t);if(this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`Expected instance of class which extends utils.Hash`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let r=this.blockLen,i=new Uint8Array(r);i.set(n.length>r?e.create().update(n).digest():n);for(let e=0;e<i.length;e++)i[e]^=54;this.iHash.update(i),this.oHash=e.create();for(let e=0;e<i.length;e++)i[e]^=106;this.oHash.update(i),vn(i)}update(e){return _n(this),this.iHash.update(e),this}digestInto(e){_n(this),wn(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Ao=(e,t,n)=>new ko(e,t).update(n).digest();Ao.create=(e,t)=>new ko(e,t);function jo(e,t={}){let{as:n=typeof e==`string`?`Hex`:`Bytes`}=t,r=_t(_(e));return n===`Bytes`?r:m(r)}var Mo=/^0x[a-fA-F0-9]{40}$/;function No(e,t={}){let{strict:n=!0}=t;if(!Mo.test(e))throw new Io({address:e,cause:new Lo});if(n){if(e.toLowerCase()===e)return;if(Po(e)!==e)throw new Io({address:e,cause:new Ro})}}function Po(e){if(Oo.has(e))return Oo.get(e);No(e,{strict:!1});let t=e.substring(2).toLowerCase(),n=jo(ce(t),{as:`Bytes`}),r=t.split(``);for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&r[e]&&(r[e]=r[e].toUpperCase()),(n[e>>1]&15)>=8&&r[e+1]&&(r[e+1]=r[e+1].toUpperCase());let i=`0x${r.join(``)}`;return Oo.set(e,i),i}function Fo(e,t={}){let{strict:n=!0}=t??{};try{return No(e,{strict:n}),!0}catch{return!1}}var Io=class extends E{constructor({address:e,cause:t}){super(`Address "${e}" is invalid.`,{cause:t}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidAddressError`})}},Lo=class extends E{constructor(){super(`Address is not a 20 byte (40 hexadecimal character) value.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidInputError`})}},Ro=class extends E{constructor(){super(`Address does not match its checksum counterpart.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidChecksumError`})}},zo=/^(.*)\[([0-9]*)\]$/,Bo=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Vo=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;2n**(8n-1n)-1n,2n**(16n-1n)-1n,2n**(24n-1n)-1n,2n**(32n-1n)-1n,2n**(40n-1n)-1n,2n**(48n-1n)-1n,2n**(56n-1n)-1n,2n**(64n-1n)-1n,2n**(72n-1n)-1n,2n**(80n-1n)-1n,2n**(88n-1n)-1n,2n**(96n-1n)-1n,2n**(104n-1n)-1n,2n**(112n-1n)-1n,2n**(120n-1n)-1n,2n**(128n-1n)-1n,2n**(136n-1n)-1n,2n**(144n-1n)-1n,2n**(152n-1n)-1n,2n**(160n-1n)-1n,2n**(168n-1n)-1n,2n**(176n-1n)-1n,2n**(184n-1n)-1n,2n**(192n-1n)-1n,2n**(200n-1n)-1n,2n**(208n-1n)-1n,2n**(216n-1n)-1n,2n**(224n-1n)-1n,2n**(232n-1n)-1n,2n**(240n-1n)-1n,2n**(248n-1n)-1n,2n**(256n-1n)-1n,-(2n**(8n-1n)),-(2n**(16n-1n)),-(2n**(24n-1n)),-(2n**(32n-1n)),-(2n**(40n-1n)),-(2n**(48n-1n)),-(2n**(56n-1n)),-(2n**(64n-1n)),-(2n**(72n-1n)),-(2n**(80n-1n)),-(2n**(88n-1n)),-(2n**(96n-1n)),-(2n**(104n-1n)),-(2n**(112n-1n)),-(2n**(120n-1n)),-(2n**(128n-1n)),-(2n**(136n-1n)),-(2n**(144n-1n)),-(2n**(152n-1n)),-(2n**(160n-1n)),-(2n**(168n-1n)),-(2n**(176n-1n)),-(2n**(184n-1n)),-(2n**(192n-1n)),-(2n**(200n-1n)),-(2n**(208n-1n)),-(2n**(216n-1n)),-(2n**(224n-1n)),-(2n**(232n-1n)),-(2n**(240n-1n)),-(2n**(248n-1n)),-(2n**(256n-1n));var Ho=2n**256n-1n;function Uo(e,t,n){let{checksumAddress:r,staticPosition:i}=n,a=ls(t.type);if(a){let[n,o]=a;return qo(e,{...t,type:o},{checksumAddress:r,length:n,staticPosition:i})}if(t.type===`tuple`)return Zo(e,t,{checksumAddress:r,staticPosition:i});if(t.type===`address`)return Ko(e,{checksum:r});if(t.type===`bool`)return Jo(e);if(t.type.startsWith(`bytes`))return Yo(e,t,{staticPosition:i});if(t.type.startsWith(`uint`)||t.type.startsWith(`int`))return Xo(e,t);if(t.type===`string`)return Qo(e,{staticPosition:i});throw new Es(t.type)}var Wo=32,Go=32;function Ko(e,t={}){let{checksum:n=!1}=t;return[(e=>n?Po(e):e)(m(pn(e.readBytes(32),-20))),32]}function qo(e,t,n){let{checksumAddress:r,length:i,staticPosition:a}=n;if(!i){let n=a+C(e.readBytes(Go)),i=n+Wo;e.setPosition(n);let o=C(e.readBytes(Wo)),s=us(t),c=0,l=[];for(let n=0;n<o;++n){e.setPosition(i+(s?n*32:c));let[a,o]=Uo(e,t,{checksumAddress:r,staticPosition:i});c+=o,l.push(a)}return e.setPosition(a+32),[l,32]}if(us(t)){let n=a+C(e.readBytes(Go)),o=[];for(let a=0;a<i;++a){e.setPosition(n+a*32);let[i]=Uo(e,t,{checksumAddress:r,staticPosition:n});o.push(i)}return e.setPosition(a+32),[o,32]}let o=0,s=[];for(let n=0;n<i;++n){let[n,i]=Uo(e,t,{checksumAddress:r,staticPosition:a+o});o+=i,s.push(n)}return[s,o]}function Jo(e){return[Ie(e.readBytes(32),{size:32}),32]}function Yo(e,t,{staticPosition:n}){let[r,i]=t.type.split(`bytes`);if(!i){let t=C(e.readBytes(32));e.setPosition(n+t);let r=C(e.readBytes(32));if(r===0)return e.setPosition(n+32),[`0x`,32];let i=e.readBytes(r);return e.setPosition(n+32),[m(i),32]}return[m(e.readBytes(Number.parseInt(i,10),32)),32]}function Xo(e,t){let n=t.type.startsWith(`int`),r=Number.parseInt(t.type.split(`int`)[1]||`256`,10),i=e.readBytes(32);return[r>48?a(i,{signed:n}):C(i,{signed:n}),32]}function Zo(e,t,n){let{checksumAddress:r,staticPosition:i}=n,a=t.components.length===0||t.components.some(({name:e})=>!e),o=a?[]:{},s=0;if(us(t)){let n=i+C(e.readBytes(Go));for(let i=0;i<t.components.length;++i){let c=t.components[i];e.setPosition(n+s);let[l,u]=Uo(e,c,{checksumAddress:r,staticPosition:n});s+=u,o[a?i:c?.name]=l}return e.setPosition(i+32),[o,32]}for(let n=0;n<t.components.length;++n){let c=t.components[n],[l,u]=Uo(e,c,{checksumAddress:r,staticPosition:i});o[a?n:c?.name]=l,s+=u}return[o,s]}function Qo(e,{staticPosition:t}){let n=t+C(e.readBytes(32));e.setPosition(n);let r=C(e.readBytes(32));if(r===0)return e.setPosition(t+32),[``,32];let i=Ne(ze(e.readBytes(r,32)));return e.setPosition(t+32),[i,32]}function $o({checksumAddress:e,parameters:t,values:n}){let r=[];for(let i=0;i<t.length;i++)r.push(es({checksumAddress:e,parameter:t[i],value:n[i]}));return r}function es({checksumAddress:e=!1,parameter:t,value:n}){let r=t,i=ls(r.type);if(i){let[t,a]=i;return rs(n,{checksumAddress:e,length:t,parameter:{...r,type:a}})}if(r.type===`tuple`)return cs(n,{checksumAddress:e,parameter:r});if(r.type===`address`)return ns(n,{checksum:e});if(r.type===`bool`)return as(n);if(r.type.startsWith(`uint`)||r.type.startsWith(`int`)){let e=r.type.startsWith(`int`),[,,t=`256`]=Vo.exec(r.type)??[];return os(n,{signed:e,size:Number(t)})}if(r.type.startsWith(`bytes`))return is(n,{type:r.type});if(r.type===`string`)return ss(n);throw new Es(r.type)}function ts(e){let t=0;for(let n=0;n<e.length;n++){let{dynamic:r,encoded:i}=e[n];r?t+=32:t+=St(i)}let n=[],r=[],i=0;for(let a=0;a<e.length;a++){let{dynamic:o,encoded:s}=e[a];o?(n.push(d(t+i,{size:32})),r.push(s),i+=St(s)):n.push(s)}return c(...n,...r)}function ns(e,t){let{checksum:n=!1}=t;return No(e,{strict:n}),{dynamic:!1,encoded:Tt(e.toLowerCase())}}function rs(e,t){let{checksumAddress:n,length:r,parameter:i}=t,a=r===null;if(!Array.isArray(e))throw new Ts(e);if(!a&&e.length!==r)throw new Ss({expectedLength:r,givenLength:e.length,type:`${i.type}[${r}]`});let o=!1,s=[];for(let t=0;t<e.length;t++){let r=es({checksumAddress:n,parameter:i,value:e[t]});r.dynamic&&(o=!0),s.push(r)}if(a||o){let e=ts(s);if(a){let t=d(s.length,{size:32});return{dynamic:!0,encoded:s.length>0?c(t,e):t}}if(o)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:c(...s.map(({encoded:e})=>e))}}function is(e,{type:t}){let[,r]=t.split(`bytes`),i=St(e);if(!r){let t=e;return i%32!=0&&(t=n(t,Math.ceil((e.length-2)/2/32)*32)),{dynamic:!0,encoded:c(Tt(d(i,{size:32})),t)}}if(i!==Number.parseInt(r,10))throw new Cs({expectedSize:Number.parseInt(r,10),value:e});return{dynamic:!1,encoded:n(e)}}function as(e){if(typeof e!=`boolean`)throw new E(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:Tt(Ae(e))}}function os(e,{signed:t,size:n}){if(typeof n==`number`){let r=2n**(BigInt(n)-(t?1n:0n))-1n,i=t?-r-1n:0n;if(e>r||e<i)throw new De({max:r.toString(),min:i.toString(),signed:t,size:n/8,value:e.toString()})}return{dynamic:!1,encoded:d(e,{size:32,signed:t})}}function ss(e){let t=ge(e),r=Math.ceil(St(t)/32),i=[];for(let e=0;e<r;e++)i.push(n(ue(t,e*32,(e+1)*32)));return{dynamic:!0,encoded:c(n(d(St(t),{size:32})),...i)}}function cs(e,t){let{checksumAddress:n,parameter:r}=t,i=!1,a=[];for(let t=0;t<r.components.length;t++){let o=r.components[t],s=es({checksumAddress:n,parameter:o,value:e[Array.isArray(e)?t:o.name]});a.push(s),s.dynamic&&(i=!0)}return{dynamic:i,encoded:i?ts(a):c(...a.map(({encoded:e})=>e))}}function ls(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}function us(e){let{type:t}=e;if(t===`string`||t===`bytes`||t.endsWith(`[]`))return!0;if(t===`tuple`)return e.components?.some(us);let n=ls(e.type);return!!(n&&us({...e,type:n[1]}))}var ds={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new hs({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new ms({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new ps({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new ps({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let n=t??this.position;return this.assertPosition(n+e-1),this.bytes.subarray(n,n+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,e&255),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();let n=this.inspectBytes(e);return this.position+=t??e,n},readUint8(){this.assertReadLimit(),this._touch();let e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();let e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();let e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();let e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){let t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function fs(e,{recursiveReadLimit:t=8192}={}){let n=Object.create(ds);return n.bytes=e,n.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=t,n}var ps=class extends E{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.NegativeOffsetError`})}},ms=class extends E{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.PositionOutOfBoundsError`})}},hs=class extends E{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.RecursiveReadLimitExceededError`})}};function gs(e,t,n={}){let{as:r=`Array`,checksumAddress:i=!1}=n,a=typeof t==`string`?te(t):t,o=fs(a);if(we(a)===0&&e.length>0)throw new xs;if(we(a)&&we(a)<32)throw new bs({data:typeof t==`string`?t:m(t),parameters:e,size:we(a)});let s=0,c=r===`Array`?[]:{};for(let t=0;t<e.length;++t){let n=e[t];o.setPosition(s);let[a,l]=Uo(o,n,{checksumAddress:i,staticPosition:0});s+=l,r===`Array`?c.push(a):c[n.name??t]=a}return c}function _s(e,t,n){let{checksumAddress:r=!1}=n??{};if(e.length!==t.length)throw new ws({expectedLength:e.length,givenLength:t.length});let i=ts($o({checksumAddress:r,parameters:e,values:t}));return i.length===0?`0x`:i}function vs(e,t){if(e.length!==t.length)throw new ws({expectedLength:e.length,givenLength:t.length});let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r];n.push(vs.encode(i,a))}return c(...n)}(function(e){function t(e,r,i=!1){if(e===`address`){let e=r;return No(e),Tt(e.toLowerCase(),i?32:0)}if(e===`string`)return ge(r);if(e===`bytes`)return r;if(e===`bool`)return Tt(Ae(r),i?32:1);let a=e.match(Vo);if(a){let[e,t,n=`256`]=a,o=Number.parseInt(n,10)/8;return d(r,{size:i?32:o,signed:t===`int`})}let o=e.match(Bo);if(o){let[e,t]=o;if(Number.parseInt(t,10)!==(r.length-2)/2)throw new Cs({expectedSize:Number.parseInt(t,10),value:r});return n(r,i?32:0)}let s=e.match(zo);if(s&&Array.isArray(r)){let[e,n]=s,i=[];for(let e=0;e<r.length;e++)i.push(t(n,r[e],!0));return i.length===0?`0x`:c(...i)}throw new Es(e)}e.encode=t})(vs||={});function ys(e){return Array.isArray(e)&&typeof e[0]==`string`||typeof e==`string`?$n(e):e}var bs=class extends E{constructor({data:e,parameters:t,size:n}){super(`Data size of ${n} bytes is too small for given parameters.`,{metaMessages:[`Params: (${ie(t)})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.DataSizeTooSmallError`})}},xs=class extends E{constructor(){super(`Cannot decode zero data ("0x") with ABI parameters.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.ZeroDataError`})}},Ss=class extends E{constructor({expectedLength:e,givenLength:t,type:n}){super(`Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.ArrayLengthMismatchError`})}},Cs=class extends E{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${St(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.BytesSizeMismatchError`})}},ws=class extends E{constructor({expectedLength:e,givenLength:t}){super([`ABI encoding parameters/values length mismatch.`,`Expected length (parameters): ${e}`,`Given length (values): ${t}`].join(`
`)),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.LengthMismatchError`})}},Ts=class extends E{constructor(e){super(`Value \`${e}\` is not a valid array.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.InvalidArrayError`})}},Es=class extends E{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.InvalidTypeError`})}},j=BigInt(0),M=BigInt(1),Ds=BigInt(2),Os=BigInt(3),ks=BigInt(4),As=BigInt(5),js=BigInt(8);function N(e,t){let n=e%t;return n>=j?n:t+n}function Ms(e,t,n){let r=e;for(;t-- >j;)r*=r,r%=n;return r}function Ns(e,t){if(e===j)throw Error(`invert: expected non-zero number`);if(t<=j)throw Error(`invert: expected positive modulus, got `+t);let n=N(e,t),r=t,i=j,a=M,o=M,s=j;for(;n!==j;){let e=r/n,t=r%n,c=i-o*e,l=a-s*e;r=n,n=t,i=o,a=s,o=c,s=l}if(r!==M)throw Error(`invert: does not exist`);return N(i,t)}function Ps(e,t){let n=(e.ORDER+M)/ks,r=e.pow(t,n);if(!e.eql(e.sqr(r),t))throw Error(`Cannot find square root`);return r}function Fs(e,t){let n=(e.ORDER-As)/js,r=e.mul(t,Ds),i=e.pow(r,n),a=e.mul(t,i),o=e.mul(e.mul(a,Ds),i),s=e.mul(a,e.sub(o,e.ONE));if(!e.eql(e.sqr(s),t))throw Error(`Cannot find square root`);return s}function Is(e){if(e<BigInt(3))throw Error(`sqrt is not defined for small field`);let t=e-M,n=0;for(;t%Ds===j;)t/=Ds,n++;let r=Ds,i=Ws(e);for(;Hs(i,r)===1;)if(r++>1e3)throw Error(`Cannot find square root: probably non-prime P`);if(n===1)return Ps;let a=i.pow(r,t),o=(t+M)/Ds;return function(e,r){if(e.is0(r))return r;if(Hs(e,r)!==1)throw Error(`Cannot find square root`);let i=n,s=e.mul(e.ONE,a),c=e.pow(r,t),l=e.pow(r,o);for(;!e.eql(c,e.ONE);){if(e.is0(c))return e.ZERO;let t=1,n=e.sqr(c);for(;!e.eql(n,e.ONE);)if(t++,n=e.sqr(n),t===i)throw Error(`Cannot find square root`);let r=M<<BigInt(i-t-1),a=e.pow(s,r);i=t,s=e.sqr(a),c=e.mul(c,s),l=e.mul(l,a)}return l}}function Ls(e){return e%ks===Os?Ps:e%js===As?Fs:Is(e)}var Rs=[`create`,`isValid`,`is0`,`neg`,`inv`,`sqrt`,`sqr`,`eql`,`add`,`sub`,`mul`,`pow`,`div`,`addN`,`subN`,`mulN`,`sqrN`];function zs(e){return kn(e,Rs.reduce((e,t)=>(e[t]=`function`,e),{ORDER:`bigint`,MASK:`bigint`,BYTES:`isSafeInteger`,BITS:`isSafeInteger`}))}function Bs(e,t,n){if(n<j)throw Error(`invalid exponent, negatives unsupported`);if(n===j)return e.ONE;if(n===M)return t;let r=e.ONE,i=t;for(;n>j;)n&M&&(r=e.mul(r,i)),i=e.sqr(i),n>>=M;return r}function Vs(e,t,n=!1){let r=Array(t.length).fill(n?e.ZERO:void 0),i=t.reduce((t,n,i)=>e.is0(n)?t:(r[i]=t,e.mul(t,n)),e.ONE),a=e.inv(i);return t.reduceRight((t,n,i)=>e.is0(n)?t:(r[i]=e.mul(t,r[i]),e.mul(t,n)),a),r}function Hs(e,t){let n=(e.ORDER-M)/Ds,r=e.pow(t,n),i=e.eql(r,e.ONE),a=e.eql(r,e.ZERO),o=e.eql(r,e.neg(e.ONE));if(!i&&!a&&!o)throw Error(`invalid Legendre symbol result`);return i?1:a?0:-1}function Us(e,t){t!==void 0&&Tn(t);let n=t===void 0?e.toString(2).length:t;return{nBitLength:n,nByteLength:Math.ceil(n/8)}}function Ws(e,t,n=!1,r={}){if(e<=j)throw Error(`invalid field: expected ORDER > 0, got `+e);let{nBitLength:i,nByteLength:a}=Us(e,t);if(a>2048)throw Error(`invalid field: expected ORDER of <= 2048 bytes`);let o,s=Object.freeze({ORDER:e,isLE:n,BITS:i,BYTES:a,MASK:On(i),ZERO:j,ONE:M,create:t=>N(t,e),isValid:t=>{if(typeof t!=`bigint`)throw Error(`invalid field element: expected bigint, got `+typeof t);return j<=t&&t<e},is0:e=>e===j,isOdd:e=>(e&M)===M,neg:t=>N(-t,e),eql:(e,t)=>e===t,sqr:t=>N(t*t,e),add:(t,n)=>N(t+n,e),sub:(t,n)=>N(t-n,e),mul:(t,n)=>N(t*n,e),pow:(e,t)=>Bs(s,e,t),div:(t,n)=>N(t*Ns(n,e),e),sqrN:e=>e*e,addN:(e,t)=>e+t,subN:(e,t)=>e-t,mulN:(e,t)=>e*t,inv:t=>Ns(t,e),sqrt:r.sqrt||(t=>(o||=Ls(e),o(s,t))),toBytes:e=>n?Dn(e,a):Nn(e,a),fromBytes:e=>{if(e.length!==a)throw Error(`Field.fromBytes: expected `+a+` bytes, got `+e.length);return n?An(e):Un(e)},invertBatch:e=>Vs(s,e),cmov:(e,t,n)=>n?t:e});return Object.freeze(s)}function Gs(e){if(typeof e!=`bigint`)throw Error(`field order must be bigint`);let t=e.toString(2).length;return Math.ceil(t/8)}function Ks(e){let t=Gs(e);return t+Math.ceil(t/2)}function qs(e,t,n=!1){let r=e.length,i=Gs(t),a=Ks(t);if(r<16||r<a||r>1024)throw Error(`expected `+a+`-1024 bytes of input, got `+r);let o=N(n?An(e):Un(e),t-M)+M;return n?Dn(o,i):Nn(o,i)}var Js=BigInt(0),Ys=BigInt(1);function Xs(e,t){let n=t.negate();return e?n:t}function Zs(e,t){if(!Number.isSafeInteger(e)||e<=0||e>t)throw Error(`invalid window size, expected [1..`+t+`], got W=`+e)}function Qs(e,t){Zs(e,t);let n=Math.ceil(t/e)+1,r=2**(e-1),i=2**e;return{windows:n,windowSize:r,mask:On(e),maxNumber:i,shiftBy:BigInt(e)}}function $s(e,t,n){let{windowSize:r,mask:i,maxNumber:a,shiftBy:o}=n,s=Number(e&i),c=e>>o;s>r&&(s-=a,c+=Ys);let l=t*r,u=l+Math.abs(s)-1,d=s===0,f=s<0,p=t%2!=0;return{nextN:c,offset:u,isZero:d,isNeg:f,isNegF:p,offsetF:l}}function ec(e,t){if(!Array.isArray(e))throw Error(`array expected`);e.forEach((e,n)=>{if(!(e instanceof t))throw Error(`invalid point at index `+n)})}function tc(e,t){if(!Array.isArray(e))throw Error(`array of scalars expected`);e.forEach((e,n)=>{if(!t.isValid(e))throw Error(`invalid scalar at index `+n)})}var nc=new WeakMap,rc=new WeakMap;function ic(e){return rc.get(e)||1}function ac(e,t){return{constTimeNegate:Xs,hasPrecomputes(e){return ic(e)!==1},unsafeLadder(t,n,r=e.ZERO){let i=t;for(;n>Js;)n&Ys&&(r=r.add(i)),i=i.double(),n>>=Ys;return r},precomputeWindow(e,n){let{windows:r,windowSize:i}=Qs(n,t),a=[],o=e,s=o;for(let e=0;e<r;e++){s=o,a.push(s);for(let e=1;e<i;e++)s=s.add(o),a.push(s);o=s.double()}return a},wNAF(n,r,i){let a=e.ZERO,o=e.BASE,s=Qs(n,t);for(let e=0;e<s.windows;e++){let{nextN:t,offset:n,isZero:c,isNeg:l,isNegF:u,offsetF:d}=$s(i,e,s);i=t,c?o=o.add(Xs(u,r[d])):a=a.add(Xs(l,r[n]))}return{p:a,f:o}},wNAFUnsafe(n,r,i,a=e.ZERO){let o=Qs(n,t);for(let e=0;e<o.windows&&i!==Js;e++){let{nextN:t,offset:n,isZero:s,isNeg:c}=$s(i,e,o);if(i=t,!s){let e=r[n];a=a.add(c?e.negate():e)}}return a},getPrecomputes(e,t,n){let r=nc.get(t);return r||(r=this.precomputeWindow(t,e),e!==1&&nc.set(t,n(r))),r},wNAFCached(e,t,n){let r=ic(e);return this.wNAF(r,this.getPrecomputes(r,e,n),t)},wNAFCachedUnsafe(e,t,n,r){let i=ic(e);return i===1?this.unsafeLadder(e,t,r):this.wNAFUnsafe(i,this.getPrecomputes(i,e,n),t,r)},setWindowSize(e,n){Zs(n,t),rc.set(e,n),nc.delete(e)}}}function oc(e,t,n,r){ec(n,e),tc(r,t);let i=n.length,a=r.length;if(i!==a)throw Error(`arrays of points and scalars must have equal length`);let o=e.ZERO,s=Fn(BigInt(i)),c=1;s>12?c=s-3:s>4?c=s-2:s>0&&(c=2);let l=On(c),u=Array(Number(l)+1).fill(o),d=Math.floor((t.BITS-1)/c)*c,f=o;for(let e=d;e>=0;e-=c){u.fill(o);for(let t=0;t<a;t++){let i=r[t],a=Number(i>>BigInt(e)&l);u[a]=u[a].add(n[t])}let t=o;for(let e=u.length-1,n=o;e>0;e--)n=n.add(u[e]),t=t.add(n);if(f=f.add(t),e!==0)for(let e=0;e<c;e++)f=f.double()}return f}function sc(e){return zs(e.Fp),kn(e,{n:`bigint`,h:`bigint`,Gx:`field`,Gy:`field`},{nBitLength:`isSafeInteger`,nByteLength:`isSafeInteger`}),Object.freeze({...Us(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}function cc(e){e.lowS!==void 0&&zn(`lowS`,e.lowS),e.prehash!==void 0&&zn(`prehash`,e.prehash)}function lc(e){let t=sc(e);kn(t,{a:`field`,b:`field`},{allowInfinityPoint:`boolean`,allowedPrivateKeyLengths:`array`,clearCofactor:`function`,fromBytes:`function`,isTorsionFree:`function`,toBytes:`function`,wrapPrivateKey:`boolean`});let{endo:n,Fp:r,a:i}=t;if(n){if(!r.eql(i,r.ZERO))throw Error(`invalid endo: CURVE.a must be 0`);if(typeof n!=`object`||typeof n.beta!=`bigint`||typeof n.splitScalar!=`function`)throw Error(`invalid endo: expected "beta": bigint and "splitScalar": function`)}return Object.freeze({...t})}var uc={Err:class extends Error{constructor(e=``){super(e)}},_tlv:{encode:(e,t)=>{let{Err:n}=uc;if(e<0||e>256)throw new n(`tlv.encode: wrong tag`);if(t.length&1)throw new n(`tlv.encode: unpadded data`);let r=t.length/2,i=Kn(r);if(i.length/2&128)throw new n(`tlv.encode: long form length too big`);let a=r>127?Kn(i.length/2|128):``;return Kn(e)+a+i+t},decode(e,t){let{Err:n}=uc,r=0;if(e<0||e>256)throw new n(`tlv.encode: wrong tag`);if(t.length<2||t[r++]!==e)throw new n(`tlv.decode: wrong tlv`);let i=t[r++],a=!!(i&128),o=0;if(!a)o=i;else{let e=i&127;if(!e)throw new n(`tlv.decode(long): indefinite length not supported`);if(e>4)throw new n(`tlv.decode(long): byte length is too big`);let a=t.subarray(r,r+e);if(a.length!==e)throw new n(`tlv.decode: length bytes not complete`);if(a[0]===0)throw new n(`tlv.decode(long): zero leftmost byte`);for(let e of a)o=o<<8|e;if(r+=e,o<128)throw new n(`tlv.decode(long): not minimal encoding`)}let s=t.subarray(r,r+o);if(s.length!==o)throw new n(`tlv.decode: wrong value length`);return{v:s,l:t.subarray(r+o)}}},_int:{encode(e){let{Err:t}=uc;if(e<fc)throw new t(`integer: negative integers are not allowed`);let n=Kn(e);if(Number.parseInt(n[0],16)&8&&(n=`00`+n),n.length&1)throw new t(`unexpected DER parsing assertion: unpadded hex`);return n},decode(e){let{Err:t}=uc;if(e[0]&128)throw new t(`invalid signature integer: negative`);if(e[0]===0&&!(e[1]&128))throw new t(`invalid signature integer: unnecessary leading zero`);return Un(e)}},toSig(e){let{Err:t,_int:n,_tlv:r}=uc,i=jn(`signature`,e),{v:a,l:o}=r.decode(48,i);if(o.length)throw new t(`invalid signature: left bytes after parsing`);let{v:s,l:c}=r.decode(2,a),{v:l,l:u}=r.decode(2,c);if(u.length)throw new t(`invalid signature: left bytes after parsing`);return{r:n.decode(s),s:n.decode(l)}},hexFromSig(e){let{_tlv:t,_int:n}=uc,r=t.encode(2,n.encode(e.r))+t.encode(2,n.encode(e.s));return t.encode(48,r)}};function dc(e,t){return Bn(Nn(e,t))}var fc=BigInt(0),P=BigInt(1),pc=BigInt(2),mc=BigInt(3),hc=BigInt(4);function gc(e){let t=lc(e),{Fp:n}=t,r=Ws(t.n,t.nBitLength),i=t.toBytes||((e,t,r)=>{let i=t.toAffine();return Ln(Uint8Array.from([4]),n.toBytes(i.x),n.toBytes(i.y))}),a=t.fromBytes||(e=>{let t=e.subarray(1);return{x:n.fromBytes(t.subarray(0,n.BYTES)),y:n.fromBytes(t.subarray(n.BYTES,2*n.BYTES))}});function o(e){let{a:r,b:i}=t,a=n.sqr(e),o=n.mul(a,e);return n.add(n.add(o,n.mul(e,r)),i)}function s(e,t){let r=n.sqr(t),i=o(e);return n.eql(r,i)}if(!s(t.Gx,t.Gy))throw Error(`bad curve params: generator point`);let c=n.mul(n.pow(t.a,mc),hc),l=n.mul(n.sqr(t.b),BigInt(27));if(n.is0(n.add(c,l)))throw Error(`bad curve params: a or b`);function u(e){return Vn(e,P,t.n)}function d(e){let{allowedPrivateKeyLengths:n,nByteLength:r,wrapPrivateKey:i,n:a}=t;if(n&&typeof e!=`bigint`){if(Rn(e)&&(e=Bn(e)),typeof e!=`string`||!n.includes(e.length))throw Error(`invalid private key`);e=e.padStart(r*2,`0`)}let o;try{o=typeof e==`bigint`?e:Un(jn(`private key`,e,r))}catch{throw Error(`invalid private key, expected hex or `+r+` bytes, got `+typeof e)}return i&&(o=N(o,a)),Wn(`private key`,o,P,a),o}function f(e){if(!(e instanceof h))throw Error(`ProjectivePoint expected`)}let p=Pn((e,t)=>{let{px:r,py:i,pz:a}=e;if(n.eql(a,n.ONE))return{x:r,y:i};let o=e.is0();t??=o?n.ONE:n.inv(a);let s=n.mul(r,t),c=n.mul(i,t),l=n.mul(a,t);if(o)return{x:n.ZERO,y:n.ZERO};if(!n.eql(l,n.ONE))throw Error(`invZ was invalid`);return{x:s,y:c}}),m=Pn(e=>{if(e.is0()){if(t.allowInfinityPoint&&!n.is0(e.py))return;throw Error(`bad point: ZERO`)}let{x:r,y:i}=e.toAffine();if(!n.isValid(r)||!n.isValid(i))throw Error(`bad point: x or y not FE`);if(!s(r,i))throw Error(`bad point: equation left != right`);if(!e.isTorsionFree())throw Error(`bad point: not in prime-order subgroup`);return!0});class h{constructor(e,t,r){if(e==null||!n.isValid(e))throw Error(`x required`);if(t==null||!n.isValid(t)||n.is0(t))throw Error(`y required`);if(r==null||!n.isValid(r))throw Error(`z required`);this.px=e,this.py=t,this.pz=r,Object.freeze(this)}static fromAffine(e){let{x:t,y:r}=e||{};if(!e||!n.isValid(t)||!n.isValid(r))throw Error(`invalid affine point`);if(e instanceof h)throw Error(`projective point not allowed`);let i=e=>n.eql(e,n.ZERO);return i(t)&&i(r)?h.ZERO:new h(t,r,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(e){let t=Vs(n,e.map(e=>e.pz));return e.map((e,n)=>e.toAffine(t[n])).map(h.fromAffine)}static fromHex(e){let t=h.fromAffine(a(jn(`pointHex`,e)));return t.assertValidity(),t}static fromPrivateKey(e){return h.BASE.multiply(d(e))}static msm(e,t){return oc(h,r,e,t)}_setWindowSize(e){v.setWindowSize(this,e)}assertValidity(){m(this)}hasEvenY(){let{y:e}=this.toAffine();if(n.isOdd)return!n.isOdd(e);throw Error(`Field doesn't support isOdd`)}equals(e){f(e);let{px:t,py:r,pz:i}=this,{px:a,py:o,pz:s}=e,c=n.eql(n.mul(t,s),n.mul(a,i)),l=n.eql(n.mul(r,s),n.mul(o,i));return c&&l}negate(){return new h(this.px,n.neg(this.py),this.pz)}double(){let{a:e,b:r}=t,i=n.mul(r,mc),{px:a,py:o,pz:s}=this,c=n.ZERO,l=n.ZERO,u=n.ZERO,d=n.mul(a,a),f=n.mul(o,o),p=n.mul(s,s),m=n.mul(a,o);return m=n.add(m,m),u=n.mul(a,s),u=n.add(u,u),c=n.mul(e,u),l=n.mul(i,p),l=n.add(c,l),c=n.sub(f,l),l=n.add(f,l),l=n.mul(c,l),c=n.mul(m,c),u=n.mul(i,u),p=n.mul(e,p),m=n.sub(d,p),m=n.mul(e,m),m=n.add(m,u),u=n.add(d,d),d=n.add(u,d),d=n.add(d,p),d=n.mul(d,m),l=n.add(l,d),p=n.mul(o,s),p=n.add(p,p),d=n.mul(p,m),c=n.sub(c,d),u=n.mul(p,f),u=n.add(u,u),u=n.add(u,u),new h(c,l,u)}add(e){f(e);let{px:r,py:i,pz:a}=this,{px:o,py:s,pz:c}=e,l=n.ZERO,u=n.ZERO,d=n.ZERO,p=t.a,m=n.mul(t.b,mc),g=n.mul(r,o),_=n.mul(i,s),v=n.mul(a,c),y=n.add(r,i),b=n.add(o,s);y=n.mul(y,b),b=n.add(g,_),y=n.sub(y,b),b=n.add(r,a);let x=n.add(o,c);return b=n.mul(b,x),x=n.add(g,v),b=n.sub(b,x),x=n.add(i,a),l=n.add(s,c),x=n.mul(x,l),l=n.add(_,v),x=n.sub(x,l),d=n.mul(p,b),l=n.mul(m,v),d=n.add(l,d),l=n.sub(_,d),d=n.add(_,d),u=n.mul(l,d),_=n.add(g,g),_=n.add(_,g),v=n.mul(p,v),b=n.mul(m,b),_=n.add(_,v),v=n.sub(g,v),v=n.mul(p,v),b=n.add(b,v),g=n.mul(_,b),u=n.add(u,g),g=n.mul(x,b),l=n.mul(y,l),l=n.sub(l,g),g=n.mul(y,_),d=n.mul(x,d),d=n.add(d,g),new h(l,u,d)}subtract(e){return this.add(e.negate())}is0(){return this.equals(h.ZERO)}wNAF(e){return v.wNAFCached(this,e,h.normalizeZ)}multiplyUnsafe(e){let{endo:r,n:i}=t;Wn(`scalar`,e,fc,i);let a=h.ZERO;if(e===fc)return a;if(this.is0()||e===P)return this;if(!r||v.hasPrecomputes(this))return v.wNAFCachedUnsafe(this,e,h.normalizeZ);let{k1neg:o,k1:s,k2neg:c,k2:l}=r.splitScalar(e),u=a,d=a,f=this;for(;s>fc||l>fc;)s&P&&(u=u.add(f)),l&P&&(d=d.add(f)),f=f.double(),s>>=P,l>>=P;return o&&(u=u.negate()),c&&(d=d.negate()),d=new h(n.mul(d.px,r.beta),d.py,d.pz),u.add(d)}multiply(e){let{endo:r,n:i}=t;Wn(`scalar`,e,P,i);let a,o;if(r){let{k1neg:t,k1:i,k2neg:s,k2:c}=r.splitScalar(e),{p:l,f:u}=this.wNAF(i),{p:d,f}=this.wNAF(c);l=v.constTimeNegate(t,l),d=v.constTimeNegate(s,d),d=new h(n.mul(d.px,r.beta),d.py,d.pz),a=l.add(d),o=u.add(f)}else{let{p:t,f:n}=this.wNAF(e);a=t,o=n}return h.normalizeZ([a,o])[0]}multiplyAndAddUnsafe(e,t,n){let r=h.BASE,i=(e,t)=>t===fc||t===P||!e.equals(r)?e.multiplyUnsafe(t):e.multiply(t),a=i(this,t).add(i(e,n));return a.is0()?void 0:a}toAffine(e){return p(this,e)}isTorsionFree(){let{h:e,isTorsionFree:n}=t;if(e===P)return!0;if(n)return n(h,this);throw Error(`isTorsionFree() has not been declared for the elliptic curve`)}clearCofactor(){let{h:e,clearCofactor:n}=t;return e===P?this:n?n(h,this):this.multiplyUnsafe(t.h)}toRawBytes(e=!0){return zn(`isCompressed`,e),this.assertValidity(),i(h,this,e)}toHex(e=!0){return zn(`isCompressed`,e),Bn(this.toRawBytes(e))}}h.BASE=new h(t.Gx,t.Gy,n.ONE),h.ZERO=new h(n.ZERO,n.ONE,n.ZERO);let{endo:g,nBitLength:_}=t,v=ac(h,g?Math.ceil(_/2):_);return{CURVE:t,ProjectivePoint:h,normPrivateKeyToScalar:d,weierstrassEquation:o,isWithinCurveOrder:u}}function _c(e){let t=sc(e);return kn(t,{hash:`hash`,hmac:`function`,randomBytes:`function`},{bits2int:`function`,bits2int_modN:`function`,lowS:`boolean`}),Object.freeze({lowS:!0,...t})}function vc(e){let t=_c(e),{Fp:n,n:r,nByteLength:i,nBitLength:a}=t,o=n.BYTES+1,s=2*n.BYTES+1;function c(e){return N(e,r)}function l(e){return Ns(e,r)}let{ProjectivePoint:u,normPrivateKeyToScalar:d,weierstrassEquation:f,isWithinCurveOrder:p}=gc({...t,toBytes(e,t,r){let i=t.toAffine(),a=n.toBytes(i.x),o=Ln;return zn(`isCompressed`,r),r?o(Uint8Array.from([t.hasEvenY()?2:3]),a):o(Uint8Array.from([4]),a,n.toBytes(i.y))},fromBytes(e){let t=e.length,r=e[0],i=e.subarray(1);if(t===o&&(r===2||r===3)){let e=Un(i);if(!Vn(e,P,n.ORDER))throw Error(`Point is not on curve`);let t=f(e),a;try{a=n.sqrt(t)}catch(e){let t=e instanceof Error?`: `+e.message:``;throw Error(`Point is not on curve`+t)}let o=(a&P)===P;return(r&1)==1!==o&&(a=n.neg(a)),{x:e,y:a}}else if(t===s&&r===4)return{x:n.fromBytes(i.subarray(0,n.BYTES)),y:n.fromBytes(i.subarray(n.BYTES,2*n.BYTES))};else{let e=o,n=s;throw Error(`invalid Point, expected length of `+e+`, or uncompressed `+n+`, got `+t)}}});function m(e){return e>r>>P}function h(e){return m(e)?c(-e):e}let g=(e,t,n)=>Un(e.slice(t,n));class _{constructor(e,t,n){Wn(`r`,e,P,r),Wn(`s`,t,P,r),this.r=e,this.s=t,n!=null&&(this.recovery=n),Object.freeze(this)}static fromCompact(e){let t=i;return e=jn(`compactSignature`,e,t*2),new _(g(e,0,t),g(e,t,2*t))}static fromDER(e){let{r:t,s:n}=uc.toSig(jn(`DER`,e));return new _(t,n)}assertValidity(){}addRecoveryBit(e){return new _(this.r,this.s,e)}recoverPublicKey(e){let{r,s:i,recovery:a}=this,o=C(jn(`msgHash`,e));if(a==null||![0,1,2,3].includes(a))throw Error(`recovery id invalid`);let s=a===2||a===3?r+t.n:r;if(s>=n.ORDER)throw Error(`recovery id 2 or 3 invalid`);let d=a&1?`03`:`02`,f=u.fromHex(d+dc(s,n.BYTES)),p=l(s),m=c(-o*p),h=c(i*p),g=u.BASE.multiplyAndAddUnsafe(f,m,h);if(!g)throw Error(`point at infinify`);return g.assertValidity(),g}hasHighS(){return m(this.s)}normalizeS(){return this.hasHighS()?new _(this.r,c(-this.s),this.recovery):this}toDERRawBytes(){return Mn(this.toDERHex())}toDERHex(){return uc.hexFromSig(this)}toCompactRawBytes(){return Mn(this.toCompactHex())}toCompactHex(){let e=i;return dc(this.r,e)+dc(this.s,e)}}let v={isValidPrivateKey(e){try{return d(e),!0}catch{return!1}},normPrivateKeyToScalar:d,randomPrivateKey:()=>{let e=Ks(t.n);return qs(t.randomBytes(e),t.n)},precompute(e=8,t=u.BASE){return t._setWindowSize(e),t.multiply(BigInt(3)),t}};function y(e,t=!0){return u.fromPrivateKey(e).toRawBytes(t)}function b(e){if(typeof e==`bigint`)return!1;if(e instanceof u)return!0;let r=jn(`key`,e).length,a=n.BYTES,o=a+1,s=2*a+1;if(!(t.allowedPrivateKeyLengths||i===o))return r===o||r===s}function x(e,t,n=!0){if(b(e)===!0)throw Error(`first arg must be private key`);if(b(t)===!1)throw Error(`second arg must be public key`);return u.fromHex(t).multiply(d(e)).toRawBytes(n)}let S=t.bits2int||function(e){if(e.length>8192)throw Error(`input is too large`);let t=Un(e),n=e.length*8-a;return n>0?t>>BigInt(n):t},C=t.bits2int_modN||function(e){return c(S(e))},w=On(a);function ee(e){return Wn(`num < 2^`+a,e,fc,w),Nn(e,i)}function te(e,r,i=T){if([`recovered`,`canonical`].some(e=>e in i))throw Error(`sign() legacy options not supported`);let{hash:a,randomBytes:o}=t,{lowS:s,prehash:f,extraEntropy:g}=i;s??=!0,e=jn(`msgHash`,e),cc(i),f&&(e=jn(`prehashed msgHash`,a(e)));let v=C(e),y=d(r),b=[ee(y),ee(v)];if(g!=null&&g!==!1){let e=g===!0?o(n.BYTES):g;b.push(jn(`extraEntropy`,e))}let x=Ln(...b),w=v;function te(e){let t=S(e);if(!p(t))return;let n=l(t),r=u.BASE.multiply(t).toAffine(),i=c(r.x);if(i===fc)return;let a=c(n*c(w+i*y));if(a===fc)return;let o=(r.x===i?0:2)|Number(r.y&P),d=a;return s&&m(a)&&(d=h(a),o^=1),new _(i,d,o)}return{seed:x,k2sig:te}}let T={lowS:t.lowS,prehash:!1},ne={lowS:t.lowS,prehash:!1};function re(e,n,r=T){let{seed:i,k2sig:a}=te(e,n,r),o=t;return Gn(o.hash.outputLen,o.nByteLength,o.hmac)(i,a)}u.BASE._setWindowSize(8);function ie(e,n,r,i=ne){let a=e;n=jn(`msgHash`,n),r=jn(`publicKey`,r);let{lowS:o,prehash:s,format:d}=i;if(cc(i),`strict`in i)throw Error(`options.strict was renamed to lowS`);if(d!==void 0&&d!==`compact`&&d!==`der`)throw Error(`format must be compact or der`);let f=typeof a==`string`||Rn(a),p=!f&&!d&&typeof a==`object`&&!!a&&typeof a.r==`bigint`&&typeof a.s==`bigint`;if(!f&&!p)throw Error(`invalid signature, expected Uint8Array, hex string or Signature instance`);let m,h;try{if(p&&(m=new _(a.r,a.s)),f){try{d!==`compact`&&(m=_.fromDER(a))}catch(e){if(!(e instanceof uc.Err))throw e}!m&&d!==`der`&&(m=_.fromCompact(a))}h=u.fromHex(r)}catch{return!1}if(!m||o&&m.hasHighS())return!1;s&&(n=t.hash(n));let{r:g,s:v}=m,y=C(n),b=l(v),x=c(y*b),S=c(g*b),w=u.BASE.multiplyAndAddUnsafe(h,x,S)?.toAffine();return w?c(w.x)===g:!1}return{CURVE:t,getPublicKey:y,getSharedSecret:x,sign:re,verify:ie,ProjectivePoint:u,Signature:_,utils:v}}function yc(e,t){let n=e.ORDER,r=fc;for(let e=n-P;e%pc===fc;e/=pc)r+=P;let i=r,a=pc<<i-P-P,o=a*pc,s=(n-P)/o,c=(s-P)/pc,l=o-P,u=a,d=e.pow(t,s),f=e.pow(t,(s+P)/pc),p=(t,n)=>{let r=d,a=e.pow(n,l),o=e.sqr(a);o=e.mul(o,n);let s=e.mul(t,o);s=e.pow(s,c),s=e.mul(s,a),a=e.mul(s,n),o=e.mul(s,t);let p=e.mul(o,a);s=e.pow(p,u);let m=e.eql(s,e.ONE);a=e.mul(o,f),s=e.mul(p,r),o=e.cmov(a,o,m),p=e.cmov(s,p,m);for(let t=i;t>P;t--){let n=t-pc;n=pc<<n-P;let i=e.pow(p,n),s=e.eql(i,e.ONE);a=e.mul(o,r),r=e.mul(r,r),i=e.mul(p,r),o=e.cmov(a,o,s),p=e.cmov(i,p,s)}return{isValid:m,value:o}};if(e.ORDER%hc===mc){let n=(e.ORDER-mc)/hc,r=e.sqrt(e.neg(t));p=(t,i)=>{let a=e.sqr(i),o=e.mul(t,i);a=e.mul(a,o);let s=e.pow(a,n);s=e.mul(s,o);let c=e.mul(s,r),l=e.mul(e.sqr(s),i),u=e.eql(l,t);return{isValid:u,value:e.cmov(c,s,u)}}}return p}function bc(e,t){if(zs(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw Error(`mapToCurveSimpleSWU: invalid opts`);let n=yc(e,t.Z);if(!e.isOdd)throw Error(`Fp.isOdd is not implemented!`);return r=>{let i,a,o,s,c,l,u,d;i=e.sqr(r),i=e.mul(i,t.Z),a=e.sqr(i),a=e.add(a,i),o=e.add(a,e.ONE),o=e.mul(o,t.B),s=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),s=e.mul(s,t.A),a=e.sqr(o),l=e.sqr(s),c=e.mul(l,t.A),a=e.add(a,c),a=e.mul(a,o),l=e.mul(l,s),c=e.mul(l,t.B),a=e.add(a,c),u=e.mul(i,o);let{isValid:f,value:p}=n(a,l);d=e.mul(i,r),d=e.mul(d,p),u=e.cmov(u,o,f),d=e.cmov(d,p,f);let m=e.isOdd(r)===e.isOdd(d);d=e.cmov(e.neg(d),d,m);let h=Vs(e,[s],!0)[0];return u=e.mul(u,h),{x:u,y:d}}}function xc(e){return{hash:e,hmac:(t,...n)=>Ao(e,t,Cn(...n)),randomBytes:xn}}function Sc(e,t){let n=t=>vc({...e,...xc(t)});return{...n(t),create:n}}var Cc=Un;function wc(e,t){if(Ec(e),Ec(t),e<0||e>=1<<8*t)throw Error(`invalid I2OSP input: `+e);let n=Array.from({length:t}).fill(0);for(let r=t-1;r>=0;r--)n[r]=e&255,e>>>=8;return new Uint8Array(n)}function Tc(e,t){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r]^t[r];return n}function Ec(e){if(!Number.isSafeInteger(e))throw Error(`number expected`)}function Dc(e,t,n,r){Hn(e),Hn(t),Ec(n),t.length>255&&(t=r(Ln(Yn(`H2C-OVERSIZE-DST-`),t)));let{outputLen:i,blockLen:a}=r,o=Math.ceil(n/i);if(n>65535||o>255)throw Error(`expand_message_xmd: invalid lenInBytes`);let s=Ln(t,wc(t.length,1)),c=wc(0,a),l=wc(n,2),u=Array(o),d=r(Ln(c,e,l,wc(0,1),s));u[0]=r(Ln(d,wc(1,1),s));for(let e=1;e<=o;e++)u[e]=r(Ln(Tc(d,u[e-1]),wc(e+1,1),s));return Ln(...u).slice(0,n)}function Oc(e,t,n,r,i){if(Hn(e),Hn(t),Ec(n),t.length>255){let e=Math.ceil(2*r/8);t=i.create({dkLen:e}).update(Yn(`H2C-OVERSIZE-DST-`)).update(t).digest()}if(n>65535||t.length>255)throw Error(`expand_message_xof: invalid lenInBytes`);return i.create({dkLen:n}).update(e).update(wc(n,2)).update(t).update(wc(t.length,1)).digest()}function kc(e,t,n){kn(n,{DST:`stringOrUint8Array`,p:`bigint`,m:`isSafeInteger`,k:`isSafeInteger`,hash:`hash`});let{p:r,k:i,m:a,hash:o,expand:s,DST:c}=n;Hn(e),Ec(t);let l=typeof c==`string`?Yn(c):c,u=r.toString(2).length,d=Math.ceil((u+i)/8),f=t*a*d,p;if(s===`xmd`)p=Dc(e,l,f,o);else if(s===`xof`)p=Oc(e,l,f,i,o);else if(s===`_internal_pass`)p=e;else throw Error(`expand must be "xmd" or "xof"`);let m=Array(t);for(let e=0;e<t;e++){let t=Array(a);for(let n=0;n<a;n++){let i=d*(n+e*a);t[n]=N(Cc(p.subarray(i,i+d)),r)}m[e]=t}return m}function Ac(e,t){let n=t.map(e=>Array.from(e).reverse());return(t,r)=>{let[i,a,o,s]=n.map(n=>n.reduce((n,r)=>e.add(e.mul(n,t),r))),[c,l]=Vs(e,[a,s],!0);return t=e.mul(i,c),r=e.mul(r,e.mul(o,l)),{x:t,y:r}}}function jc(e,t,n){if(typeof t!=`function`)throw Error(`mapToCurve() must be defined`);function r(n){return e.fromAffine(t(n))}function i(t){let n=t.clearCofactor();return n.equals(e.ZERO)?e.ZERO:(n.assertValidity(),n)}return{defaults:n,hashToCurve(e,t){let a=kc(e,2,{...n,DST:n.DST,...t}),o=r(a[0]),s=r(a[1]);return i(o.add(s))},encodeToCurve(e,t){return i(r(kc(e,1,{...n,DST:n.encodeDST,...t})[0]))},mapToCurve(e){if(!Array.isArray(e))throw Error(`expected array of bigints`);for(let t of e)if(typeof t!=`bigint`)throw Error(`expected array of bigints`);return i(r(e))}}}var Mc=Zn({secp256k1:()=>Vc,secp256k1_hasher:()=>Wc}),Nc=BigInt(`0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f`),Pc=BigInt(`0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141`),Fc=BigInt(0),Ic=BigInt(1),Lc=BigInt(2),Rc=(e,t)=>(e+t/Lc)/t;function zc(e){let t=Nc,n=BigInt(3),r=BigInt(6),i=BigInt(11),a=BigInt(22),o=BigInt(23),s=BigInt(44),c=BigInt(88),l=e*e*e%t,u=l*l*e%t,d=Ms(Ms(Ms(u,n,t)*u%t,n,t)*u%t,Lc,t)*l%t,f=Ms(d,i,t)*d%t,p=Ms(f,a,t)*f%t,m=Ms(p,s,t)*p%t,h=Ms(Ms(Ms(Ms(Ms(Ms(m,c,t)*m%t,s,t)*p%t,n,t)*u%t,o,t)*f%t,r,t)*l%t,Lc,t);if(!Bc.eql(Bc.sqr(h),e))throw Error(`Cannot find square root`);return h}var Bc=Ws(Nc,void 0,void 0,{sqrt:zc}),Vc=Sc({a:Fc,b:BigInt(7),Fp:Bc,n:Pc,Gx:BigInt(`55066263022277343669578718895168534326250603453777594175500187360389116729240`),Gy:BigInt(`32670510020758816978083085130507043184471273380659243275938904335757337482424`),h:BigInt(1),lowS:!0,endo:{beta:BigInt(`0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee`),splitScalar:e=>{let t=Pc,n=BigInt(`0x3086d221a7d46bcde86c90e49284eb15`),r=-Ic*BigInt(`0xe4437ed6010e88286f547fa90abfe4c3`),i=BigInt(`0x114ca50f7a8e2f3f657c1108d9d44cfd8`),a=n,o=BigInt(`0x100000000000000000000000000000000`),s=Rc(a*e,t),c=Rc(-r*e,t),l=N(e-s*n-c*i,t),u=N(-s*r-c*a,t),d=l>o,f=u>o;if(d&&(l=t-l),f&&(u=t-u),l>o||u>o)throw Error(`splitScalar: Endomorphism failed, k=`+e);return{k1neg:d,k1:l,k2neg:f,k2:u}}}},qr);Vc.ProjectivePoint,Vc.utils.randomPrivateKey;var Hc=Ac(Bc,[[`0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7`,`0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581`,`0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262`,`0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c`],[`0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b`,`0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14`,`0x0000000000000000000000000000000000000000000000000000000000000001`],[`0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c`,`0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3`,`0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931`,`0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84`],[`0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b`,`0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573`,`0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f`,`0x0000000000000000000000000000000000000000000000000000000000000001`]].map(e=>e.map(e=>BigInt(e)))),Uc=bc(Bc,{A:BigInt(`0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533`),B:BigInt(`1771`),Z:Bc.create(BigInt(`-11`))}),Wc=jc(Vc.ProjectivePoint,e=>{let{x:t,y:n}=Uc(Bc.create(e[0]));return Hc(t,n)},{DST:`secp256k1_XMD:SHA-256_SSWU_RO_`,encodeDST:`secp256k1_XMD:SHA-256_SSWU_NU_`,p:Bc.ORDER,m:1,k:128,expand:`xmd`,hash:qr});Wc.hashToCurve,Wc.encodeToCurve;function Gc(e,t={}){let{recovered:n}=t;if(e.r===void 0||e.s===void 0||n&&e.yParity===void 0)throw new el({signature:e});if(e.r<0n||e.r>Ho)throw new tl({value:e.r});if(e.s<0n||e.s>Ho)throw new nl({value:e.s});if(typeof e.yParity==`number`&&e.yParity!==0&&e.yParity!==1)throw new rl({value:e.yParity})}function Kc(e){return qc(m(e))}function qc(e){if(e.length!==130&&e.length!==132)throw new $c({signature:e});let t=BigInt(ue(e,0,32)),n=BigInt(ue(e,32,64)),r=(()=>{let t=Number(`0x${e.slice(130)}`);if(!Number.isNaN(t))try{return Qc(t)}catch{throw new rl({value:t})}})();return r===void 0?{r:t,s:n}:{r:t,s:n,yParity:r}}function Jc(e){if(e.r!==void 0&&e.s!==void 0)return Yc(e)}function Yc(e){let t=typeof e==`string`?qc(e):e instanceof Uint8Array?Kc(e):typeof e.r==`string`?Zc(e):e.v?Xc(e):{r:e.r,s:e.s,...e.yParity===void 0?{}:{yParity:e.yParity}};return Gc(t),t}function Xc(e){return{r:e.r,s:e.s,yParity:Qc(e.v)}}function Zc(e){let t=(()=>{let t=e.v?Number(e.v):void 0,n=e.yParity?Number(e.yParity):void 0;if(typeof t==`number`&&typeof n!=`number`&&(n=Qc(t)),typeof n!=`number`)throw new rl({value:e.yParity});return n})();return{r:BigInt(e.r),s:BigInt(e.s),yParity:t}}function Qc(e){if(e===0||e===27)return 0;if(e===1||e===28)return 1;if(e>=35)return+(e%2==0);throw new il({value:e})}var $c=class extends E{constructor({signature:e}){super(`Value \`${e}\` is an invalid signature size.`,{metaMessages:[`Expected: 64 bytes or 65 bytes.`,`Received ${St(rn(e))} bytes.`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidSerializedSizeError`})}},el=class extends E{constructor({signature:e}){super(`Signature \`${b(e)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.MissingPropertiesError`})}},tl=class extends E{constructor({value:e}){super(`Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidRError`})}},nl=class extends E{constructor({value:e}){super(`Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidSError`})}},rl=class extends E{constructor({value:e}){super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidYParityError`})}},il=class extends E{constructor({value:e}){super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidVError`})}};function al(e,t={}){return typeof e.chainId==`string`?ol(e):{...e,...t.signature}}function ol(e){let{address:t,chainId:n,nonce:r}=e,i=Jc(e);return{address:t,chainId:Number(n),nonce:BigInt(r),...i}}var sl=ys(`(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data`);function cl(e){if(typeof e==`string`){if(ue(e,-32)!==`0x8010801080108010801080108010801080108010801080108010801080108010`)throw new dl(e)}else Gc(e.authorization)}function ll(e){cl(e);let t=pe(ue(e,-64,-32)),n=ue(e,-t-64,-64),r=ue(e,0,-t-64),[i,a,o]=gs(sl,n);return{authorization:al({address:i.delegation,chainId:Number(i.chainId),nonce:i.nonce,yParity:i.yParity,r:i.r,s:i.s}),signature:r,...o&&o!==`0x`?{data:o,to:a}:{}}}function ul(e){try{return cl(e),!0}catch{return!1}}var dl=class extends E{constructor(e){super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`SignatureErc8010.InvalidWrappedSignatureError`})}};function fl(e){return e.map(e=>({...e,value:BigInt(e.value)}))}function pl(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?je(e.nonce):void 0,storageProof:e.storageProof?fl(e.storageProof):void 0}}async function ml(e,{address:t,blockNumber:n,blockTag:r,storageKeys:i}){let a=r??`latest`,o=n===void 0?void 0:D(n);return pl(await e.request({method:`eth_getProof`,params:[t,i,o||a]}))}async function hl(e,{address:t,blockNumber:n,blockTag:r=`latest`,slot:i}){let a=n===void 0?void 0:D(n);return await e.request({method:`eth_getStorageAt`,params:[t,i,a||r]})}async function gl(e,{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:a,sender:o,nonce:c}){let l=r||`latest`,u=n===void 0?void 0:D(n),d=null;if(i?d=await e.request({method:`eth_getTransactionByHash`,params:[i]},{dedupe:!0}):t?d=await e.request({method:`eth_getTransactionByBlockHashAndIndex`,params:[t,D(a)]},{dedupe:!0}):(u||l)&&typeof a==`number`?d=await e.request({method:`eth_getTransactionByBlockNumberAndIndex`,params:[u||l,D(a)]},{dedupe:!!u}):o&&typeof c==`number`&&(d=await e.request({method:`eth_getTransactionBySenderAndNonce`,params:[o,D(c)]},{dedupe:!0})),!d)throw new s({blockHash:t,blockNumber:n,blockTag:l,hash:i,index:a});return(e.chain?.formatters?.transaction?.format||Er)(d,`getTransaction`)}async function _l(e,{hash:t,transactionReceipt:n}){let[r,i]=await Promise.all([A(e,Li,`getBlockNumber`)({}),t?A(e,gl,`getTransaction`)({hash:t}):void 0]),a=n?.blockNumber||i?.blockNumber;return a?r-a+1n:0n}async function vl(e,{hash:t}){let n=await e.request({method:`eth_getTransactionReceipt`,params:[t]},{dedupe:!0});if(!n)throw new Re({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||Zi)(n,`getTransactionReceipt`)}async function yl(e,t){let{account:n,authorizationList:r,allowFailure:i=!0,blockNumber:a,blockOverrides:o,blockTag:s,stateOverride:c}=t,l=t.contracts,{batchSize:u=t.batchSize??1024,deployless:d=t.deployless??!1}=typeof e.batch?.multicall==`object`?e.batch.multicall:{},f=(()=>{if(t.multicallAddress)return t.multicallAddress;if(d)return null;if(e.chain)return Kt({blockNumber:a,chain:e.chain,contract:`multicall3`});throw Error(`client chain not configured. multicallAddress is required.`)})(),p=[[]],m=0,h=0;for(let e=0;e<l.length;e++){let{abi:t,address:r,args:a,functionName:o}=l[e];try{let e=Ce({abi:t,args:a,functionName:o});h+=(e.length-2)/2,u>0&&h>u&&p[m].length>0&&(m++,h=(e.length-2)/2,p[m]=[]),p[m]=[...p[m],{allowFailure:!0,callData:e,target:r}]}catch(e){let s=sr(e,{abi:t,address:r,args:a,docsPath:`/docs/contract/multicall`,functionName:o,sender:n});if(!i)throw s;p[m]=[...p[m],{allowFailure:!0,callData:`0x`,target:r}]}}let g=await Promise.allSettled(p.map(t=>A(e,wi,`readContract`)({...f===null?{code:Rt}:{address:f},abi:Je,account:n,args:[t],authorizationList:r,blockNumber:a,blockOverrides:o,blockTag:s,functionName:`aggregate3`,stateOverride:c}))),_=[];for(let e=0;e<g.length;e++){let t=g[e];if(t.status===`rejected`){if(!i)throw t.reason;for(let n=0;n<p[e].length;n++)_.push({status:`failure`,error:t.reason,result:void 0});continue}let n=t.value;for(let t=0;t<n.length;t++){let{returnData:r,success:a}=n[t],{callData:o}=p[e][t],{abi:s,address:c,functionName:u,args:d}=l[_.length];try{if(o===`0x`)throw new _e;if(!a)throw new ne({data:r});let e=Vt({abi:s,args:d,data:r,functionName:u});_.push(i?{result:e,status:`success`}:e)}catch(e){let t=sr(e,{abi:s,address:c,args:d,docsPath:`/docs/contract/multicall`,functionName:u});if(!i)throw t;_.push({error:t,result:void 0,status:`failure`})}}}if(_.length!==l.length)throw new v(`multicall results mismatch`);return _}async function bl(n,r){let{blockNumber:i,blockTag:a=n.experimental_blockTag??`latest`,blocks:o,returnFullTransactions:s,traceTransfers:c,validation:l}=r;try{let e=[];for(let n of o){let r=n.blockOverrides?sn(n.blockOverrides):void 0,i=n.calls.map(e=>{let n=e,r=n.account?t(n.account):void 0,i=n.abi?Ce(n):n.data,a={...n,account:r,data:n.dataSuffix?It([i||`0x`,n.dataSuffix]):i,from:n.from??r?.address};return We(a),Ke(a)}),a=n.stateOverrides?He(n.stateOverrides):void 0;e.push({blockOverrides:r,calls:i,stateOverrides:a})}let r=(typeof i==`bigint`?D(i):void 0)||a;return(await n.request({method:`eth_simulateV1`,params:[{blockStateCalls:e,returnFullTransactions:s,traceTransfers:c,validation:l},r]})).map((e,t)=>({...Or(e),calls:e.calls.map((e,n)=>{let{abi:r,args:i,functionName:a,to:s}=o[t].calls[n],c=e.error?.data??e.returnData,l=BigInt(e.gasUsed),u=e.logs?.map(e=>gi(e)),d=e.status===`0x1`?`success`:`failure`,f=r&&d===`success`&&c!==`0x`?Vt({abi:r,data:c,functionName:a}):null,p=(()=>{if(d===`success`)return;let e;if(c===`0x`?e=new _e:c&&(e=new ne({data:c})),e)return sr(e,{abi:r??[],address:s??`0x`,args:i,functionName:a??`<unknown>`})})();return{data:c,gasUsed:l,logs:u,status:d,...d===`success`?{result:f}:{error:p}}})}))}catch(t){let n=t,r=e(n,{});throw r instanceof lt?n:r}}function xl(e){let t=!0,n=``,r=0,i=``,a=!1;for(let o=0;o<e.length;o++){let s=e[o];if([`(`,`)`,`,`].includes(s)&&(t=!0),s===`(`&&r++,s===`)`&&r--,t){if(r===0){if(s===` `&&[`event`,`function`,`error`,``].includes(i))i=``;else if(i+=s,s===`)`){a=!0;break}continue}if(s===` `){e[o-1]!==`,`&&n!==`,`&&n!==`,(`&&(n=``,t=!1);continue}i+=s,n+=s}}if(!a)throw new E(`Unable to normalize signature.`);return i}function Sl(e,t){let n=typeof e,r=t.type;switch(r){case`address`:return Fo(e,{strict:!1});case`bool`:return n===`boolean`;case`function`:return n===`string`;case`string`:return n===`string`;default:return r===`tuple`&&`components`in t?Object.values(t.components).every((t,n)=>Sl(Object.values(e)[n],t)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n===`number`||n===`bigint`:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n===`string`||e instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(e)&&e.every(e=>Sl(e,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,``)})):!1}}function Cl(e,t,n){for(let r in e){let i=e[r],a=t[r];if(i.type===`tuple`&&a.type===`tuple`&&`components`in i&&`components`in a)return Cl(i.components,a.components,n[r]);let o=[i.type,a.type];if(o.includes(`address`)&&o.includes(`bytes20`)||(o.includes(`address`)&&o.includes(`string`)||o.includes(`address`)&&o.includes(`bytes`))&&Fo(n[r],{strict:!1}))return o}}function wl(e,t={}){let{prepare:n=!0}=t,r=Array.isArray(e)||typeof e==`string`?Qn(e):e;return{...r,...n?{hash:Ol(r)}:{}}}function Tl(e,t,n){let{args:r=[],prepare:i=!0}=n??{},a=ye(t,{strict:!1}),o=e.filter(e=>a?e.type===`function`||e.type===`error`?El(e)===ue(t,0,4):e.type===`event`?Ol(e)===t:!1:`name`in e&&e.name===t);if(o.length===0)throw new Al({name:t});if(o.length===1)return{...o[0],...i?{hash:Ol(o[0])}:{}};let s;for(let e of o)if(`inputs`in e){if(!r||r.length===0){if(!e.inputs||e.inputs.length===0)return{...e,...i?{hash:Ol(e)}:{}};continue}if(e.inputs&&e.inputs.length!==0&&e.inputs.length===r.length&&r.every((t,n)=>{let r=`inputs`in e&&e.inputs[n];return r?Sl(t,r):!1})){if(s&&`inputs`in s&&s.inputs){let t=Cl(e.inputs,s.inputs,r);if(t)throw new kl({abiItem:e,type:t[0]},{abiItem:s,type:t[1]})}s=e}}let c=(()=>{if(s)return s;let[e,...t]=o;return{...e,overloads:t}})();if(!c)throw new Al({name:t});return{...c,...i?{hash:Ol(c)}:{}}}function El(...e){return ue(Ol((()=>{if(Array.isArray(e[0])){let[t,n]=e;return Tl(t,n)}return e[0]})()),0,4)}function Dl(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return Tl(t,n)}return e[0]})();return xl(typeof t==`string`?t:Ht(t))}function Ol(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return Tl(t,n)}return e[0]})();return typeof t!=`string`&&`hash`in t&&t.hash?t.hash:jo(ge(Dl(t)))}var kl=class extends E{constructor(e,t){super(`Found ambiguous types in overloaded ABI Items.`,{metaMessages:[`\`${e.type}\` in \`${xl(Ht(e.abiItem))}\`, and`,`\`${t.type}\` in \`${xl(Ht(t.abiItem))}\``,``,`These types encode differently and cannot be distinguished at runtime.`,`Remove one of the ambiguous items in the ABI.`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiItem.AmbiguityError`})}},Al=class extends E{constructor({name:e,data:t,type:n=`item`}){let r=e?` with name "${e}"`:t?` with data "${t}"`:``;super(`ABI ${n}${r} not found.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiItem.NotFoundError`})}};function jl(...e){let[t,n]=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return[Nl(t),n]}return e})(),{bytecode:r,args:i}=n;return c(r,t.inputs?.length&&i?.length?_s(t.inputs,i):`0x`)}function Ml(e){return wl(e)}function Nl(e){let t=e.find(e=>e.type===`constructor`);if(!t)throw new Al({name:`constructor`});return t}function Pl(...e){let[t,n=[]]=(()=>{if(Array.isArray(e[0])){let[t,n,r]=e;return[Il(t,n,{args:r}),r]}let[t,n]=e;return[t,n]})(),{overloads:r}=t,i=r?Il([t,...r],t.name,{args:n}):t,a=Ll(i),o=n.length>0?_s(i.inputs,n):void 0;return o?c(a,o):a}function Fl(e,t={}){return wl(e,t)}function Il(e,t,n){let r=Tl(e,t,n);if(r.type!==`function`)throw new Al({name:t,type:`function`});return r}function Ll(e){return El(e)}var Rl=`0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,zl=`0x0000000000000000000000000000000000000000`,Bl=`0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033`;async function Vl(e,n){let{blockNumber:r,blockTag:i,calls:a,stateOverrides:o,traceAssetChanges:s,traceTransfers:c,validation:u}=n,d=n.account?t(n.account):void 0;if(s&&!d)throw new v("`account` is required when `traceAssetChanges` is true");let f=d?jl(Ml(`constructor(bytes, bytes)`),{bytecode:at,args:[Bl,Pl(Fl(`function getBalance(address)`),[d.address])]}):void 0,p=s?await Promise.all(n.calls.map(async t=>{if(!t.data&&!t.abi)return;let{accessList:n}=await Ra(e,{account:d.address,...t,data:t.abi?Ce(t):t.data});return n.map(({address:e,storageKeys:t})=>t.length>0?e:null)})).then(e=>e.flat().filter(Boolean)):[],m=await bl(e,{blockNumber:r,blockTag:i,blocks:[...s?[{calls:[{data:f}],stateOverrides:o},{calls:p.map((e,t)=>({abi:[Fl(`function balanceOf(address) returns (uint256)`)],functionName:`balanceOf`,args:[d.address],to:e,from:zl,nonce:t})),stateOverrides:[{address:zl,nonce:0}]}]:[],{calls:[...a,{to:zl}].map(e=>({...e,from:d?.address})),stateOverrides:o},...s?[{calls:[{data:f}]},{calls:p.map((e,t)=>({abi:[Fl(`function balanceOf(address) returns (uint256)`)],functionName:`balanceOf`,args:[d.address],to:e,from:zl,nonce:t})),stateOverrides:[{address:zl,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Fl(`function decimals() returns (uint256)`)],functionName:`decimals`,from:zl,nonce:t})),stateOverrides:[{address:zl,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Fl(`function tokenURI(uint256) returns (string)`)],functionName:`tokenURI`,args:[0n],from:zl,nonce:t})),stateOverrides:[{address:zl,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Fl(`function symbol() returns (string)`)],functionName:`symbol`,from:zl,nonce:t})),stateOverrides:[{address:zl,nonce:0}]}]:[]],traceTransfers:c,validation:u}),h=s?m[2]:m[0],[g,_,,y,b,x,S,C]=s?m:[],{calls:w,...ee}=h,te=w.slice(0,-1)??[],T=g?.calls??[],ne=_?.calls??[],re=[...T,...ne].map(e=>e.status===`success`?l(e.data):null),ie=y?.calls??[],ae=b?.calls??[],E=[...ie,...ae].map(e=>e.status===`success`?l(e.data):null),oe=(x?.calls??[]).map(e=>e.status===`success`?e.result:null),se=(C?.calls??[]).map(e=>e.status===`success`?e.result:null),ce=(S?.calls??[]).map(e=>e.status===`success`?e.result:null),le=[];for(let[e,t]of E.entries()){let n=re[e];if(typeof t!=`bigint`||typeof n!=`bigint`)continue;let r=oe[e-1],i=se[e-1],a=ce[e-1],o=e===0?{address:Rl,decimals:18,symbol:`ETH`}:{address:p[e-1],decimals:a||r?Number(r??1):void 0,symbol:i??void 0};le.some(e=>e.token.address===o.address)||le.push({token:o,value:{pre:n,post:t,diff:t-n}})}return{assetChanges:le,block:ee,results:te}}var Hl=`0x6492649264926492649264926492649264926492649264926492649264926492`;function Ul(e){if(ue(e,-32)!==`0x6492649264926492649264926492649264926492649264926492649264926492`)throw new Kl(e)}function Wl(e){let{data:t,signature:n,to:r}=e;return c(_s(ys(`address, bytes, bytes`),[r,t,n]),Hl)}function Gl(e){try{return Ul(e),!0}catch{return!1}}var Kl=class extends E{constructor(e){super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`SignatureErc6492.InvalidWrappedSignatureError`})}};function ql({r:e,s:t,to:n=`hex`,v:r,yParity:i}){let a=(()=>{if(i===0||i===1)return i;if(r&&(r===27n||r===28n||r>=35n))return+(r%2n==0n);throw Error("Invalid `v` or `yParity` value")})(),o=`0x${new Vc.Signature(l(e),l(t)).toCompactHex()}${a===0?`1b`:`1c`}`;return n===`hex`?o:mt(o)}async function Jl(e,t){let{address:n,chain:r=e.chain,hash:i,erc6492VerifierAddress:a=t.universalSignatureVerifierAddress??r?.contracts?.erc6492Verifier?.address,multicallAddress:o=t.multicallAddress??r?.contracts?.multicall3?.address}=t;if(r?.verifyHash)return await r.verifyHash(e,t);let s=(()=>{let e=t.signature;return le(e)?e:typeof e==`object`&&`r`in e&&`s`in e?ql(e):dn(e)})();try{return ul(s)?await Yl(e,{...t,multicallAddress:o,signature:s}):await Xl(e,{...t,verifierAddress:a,signature:s})}catch(e){try{if(re(Qt(n),await dr({hash:i,signature:s})))return!0}catch{}if(e instanceof Ql)return!1;throw e}}async function Yl(e,t){let{address:n,blockNumber:r,blockTag:i,hash:a,multicallAddress:o}=t,{authorization:s,data:c,signature:l,to:u}=ll(t.signature);if(await Ga(e,{address:n,blockNumber:r,blockTag:i})===qt([`0xef0100`,s.address]))return await Zl(e,{address:n,blockNumber:r,blockTag:i,hash:a,signature:l});let d={address:s.address,chainId:Number(s.chainId),nonce:Number(s.nonce),r:D(s.r,{size:32}),s:D(s.s,{size:32}),yParity:s.yParity};if(!await $a({address:n,authorization:d}))throw new Ql;let f=await A(e,wi,`readContract`)({...o?{address:o}:{code:Rt},authorizationList:[d],abi:Je,blockNumber:r,blockTag:`pending`,functionName:`aggregate3`,args:[[...c?[{allowFailure:!0,target:u??n,callData:c}]:[],{allowFailure:!0,target:n,callData:Ce({abi:gt,functionName:`isValidSignature`,args:[a,l]})}]]});if((f[f.length-1]?.returnData)?.startsWith(`0x1626ba7e`))return!0;throw new Ql}async function Xl(e,t){let{address:n,factory:r,factoryData:i,hash:a,signature:o,verifierAddress:s,...c}=t,l=await(async()=>!r&&!i||Gl(o)?o:Wl({data:i,signature:o,to:r}))(),u=s?{to:s,data:Ce({abi:pt,functionName:`isValidSig`,args:[n,a,l]}),...c}:{data:nt({abi:pt,args:[n,a,l],bytecode:ut}),...c},{data:d}=await A(e,Ut,`call`)(u).catch(e=>{throw e instanceof fe?new Ql:e});if(an(d??`0x0`))return!0;throw new Ql}async function Zl(e,t){let{address:n,blockNumber:r,blockTag:i,hash:a,signature:o}=t;if((await A(e,wi,`readContract`)({address:n,abi:gt,args:[a,o],blockNumber:r,blockTag:i,functionName:`isValidSignature`}).catch(e=>{throw e instanceof he?new Ql:e})).startsWith(`0x1626ba7e`))return!0;throw new Ql}var Ql=class extends Error{};async function $l(e,{address:t,message:n,factory:r,factoryData:i,signature:a,...o}){let s=fo(n);return A(e,Jl,`verifyHash`)({address:t,factory:r,factoryData:i,hash:s,signature:a,...o})}async function eu(e,t){let{address:n,factory:r,factoryData:i,signature:a,message:o,primaryType:s,types:c,domain:l,...u}=t,d=bo({message:o,primaryType:s,types:c,domain:l});return A(e,Jl,`verifyHash`)({address:n,factory:r,factoryData:i,hash:d,signature:a,...u})}function tu(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:a,pollingInterval:o=e.pollingInterval}){let s=a===void 0?!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):a,c;return s?ki(k([`watchBlockNumber`,e.uid,t,n,o]),{onBlockNumber:r,onError:i},r=>ji(async()=>{try{let t=await A(e,Li,`getBlockNumber`)({cacheTime:0});if(c!==void 0){if(t===c)return;if(t-c>1&&n)for(let e=c+1n;e<t;e++)r.onBlockNumber(e,c),c=e}(c===void 0||t>c)&&(r.onBlockNumber(t,c),c=t)}catch(e){r.onError?.(e)}},{emitOnBegin:t,interval:o})):ki(k([`watchBlockNumber`,e.uid,t,n]),{onBlockNumber:r,onError:i},t=>{let n=!0,r=()=>n=!1;return(async()=>{try{let{unsubscribe:i}=await(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})().subscribe({params:[`newHeads`],onData(e){if(!n)return;let r=l(e.result?.number);t.onBlockNumber(r,c),c=r},onError(e){t.onError?.(e)}});r=i,n||r()}catch(e){i?.(e)}})(),()=>r()})}async function nu(e,t){let{checkReplacement:n=!0,confirmations:r=1,hash:i,onReplaced:a,retryCount:o=6,retryDelay:c=({count:e})=>~~(1<<e)*200,timeout:l=18e4}=t,u=k([`waitForTransactionReceipt`,e.uid,i]),d=t.pollingInterval?t.pollingInterval:e.chain?.experimental_preconfirmationTime?e.chain.experimental_preconfirmationTime:e.pollingInterval,f,p,m,h=!1,g,_,{promise:v,resolve:y,reject:b}=Ze(),x=l?setTimeout(()=>{_?.(),g?.(),b(new Fe({hash:i}))},l):void 0;return g=ki(u,{onReplaced:a,resolve:y,reject:b},async t=>{if(m=await A(e,vl,`getTransactionReceipt`)({hash:i}).catch(()=>void 0),m&&r<=1){clearTimeout(x),t.resolve(m),g?.();return}_=A(e,tu,`watchBlockNumber`)({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:d,async onBlockNumber(a){let l=e=>{clearTimeout(x),_?.(),e(),g?.()},u=a;if(!h)try{if(m){if(r>1&&(!m.blockNumber||u-m.blockNumber+1n<r))return;l(()=>t.resolve(m));return}if(n&&!f&&(h=!0,await Yi(async()=>{f=await A(e,gl,`getTransaction`)({hash:i}),f.blockNumber&&(u=f.blockNumber)},{delay:c,retryCount:o}),h=!1),m=await A(e,vl,`getTransactionReceipt`)({hash:i}),r>1&&(!m.blockNumber||u-m.blockNumber+1n<r))return;l(()=>t.resolve(m))}catch(n){if(n instanceof s||n instanceof Re){if(!f){h=!1;return}try{p=f,h=!0;let n=await Yi(()=>A(e,kr,`getBlock`)({blockNumber:u,includeTransactions:!0}),{delay:c,retryCount:o,shouldRetry:({error:e})=>e instanceof wr});h=!1;let i=n.transactions.find(({from:e,nonce:t})=>e===p.from&&t===p.nonce);if(!i||(m=await A(e,vl,`getTransactionReceipt`)({hash:i.hash}),r>1&&(!m.blockNumber||u-m.blockNumber+1n<r)))return;let a=`replaced`;i.to===p.to&&i.value===p.value&&i.input===p.input?a=`repriced`:i.from===i.to&&i.value===0n&&(a=`cancelled`),l(()=>{t.onReplaced?.({reason:a,replacedTransaction:p,transaction:i,transactionReceipt:m}),t.resolve(m)})}catch(e){l(()=>t.reject(e))}}else l(()=>t.reject(n))}}})}),v}function ru(e,{blockTag:t=e.experimental_blockTag??`latest`,emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:a,includeTransactions:o,poll:s,pollingInterval:c=e.pollingInterval}){let l=s===void 0?!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):s,u=o??!1,d;return l?ki(k([`watchBlocks`,e.uid,t,n,r,u,c]),{onBlock:i,onError:a},i=>ji(async()=>{try{let r=await A(e,kr,`getBlock`)({blockTag:t,includeTransactions:u});if(r.number!==null&&d?.number!=null){if(r.number===d.number)return;if(r.number-d.number>1&&n)for(let t=d?.number+1n;t<r.number;t++){let n=await A(e,kr,`getBlock`)({blockNumber:t,includeTransactions:u});i.onBlock(n,d),d=n}}(d?.number==null||t===`pending`&&r?.number==null||r.number!==null&&r.number>d.number)&&(i.onBlock(r,d),d=r)}catch(e){i.onError?.(e)}},{emitOnBegin:r,interval:c})):(()=>{let n=!0,o=!0,s=()=>n=!1;return(async()=>{try{r&&A(e,kr,`getBlock`)({blockTag:t,includeTransactions:u}).then(e=>{n&&(o&&=(i(e,void 0),!1))}).catch(a);let{unsubscribe:c}=await(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})().subscribe({params:[`newHeads`],async onData(t){if(!n)return;let r=await A(e,kr,`getBlock`)({blockNumber:t.result?.number,includeTransactions:u}).catch(()=>{});n&&(i(r,d),o=!1,d=r)},onError(e){a?.(e)}});s=c,n||s()}catch(e){a?.(e)}})(),()=>s()})()}function iu(e,{address:t,args:n,batch:r=!0,event:i,events:a,fromBlock:o,onError:s,onLogs:c,poll:l,pollingInterval:u=e.pollingInterval,strict:d}){let f=l===void 0?typeof o==`bigint`?!0:!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):l,p=d??!1;return f?ki(k([`watchEvent`,t,n,r,e.uid,i,u,o]),{onLogs:c,onError:s},s=>{let c;o!==void 0&&(c=o-1n);let l,d=!1,f=ji(async()=>{if(!d){try{l=await A(e,Ba,`createEventFilter`)({address:t,args:n,event:i,events:a,strict:p,fromBlock:o})}catch{}d=!0;return}try{let o;if(l)o=await A(e,Ri,`getFilterChanges`)({filter:l});else{let r=await A(e,Li,`getBlockNumber`)({});o=c&&c!==r?await A(e,Si,`getLogs`)({address:t,args:n,event:i,events:a,fromBlock:c+1n,toBlock:r}):[],c=r}if(o.length===0)return;if(r)s.onLogs(o);else for(let e of o)s.onLogs([e])}catch(e){l&&e instanceof it&&(d=!1),s.onError?.(e)}},{emitOnBegin:!0,interval:u});return async()=>{l&&await A(e,zi,`uninstallFilter`)({filter:l}),f()}}):(()=>{let r=!0,o=()=>r=!1;return(async()=>{try{let l=(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})(),u=a??(i?[i]:void 0),f=[];u&&(f=[u.flatMap(e=>nr({abi:[e],eventName:e.name,args:n}))],i&&(f=f[0]));let{unsubscribe:m}=await l.subscribe({params:[`logs`,{address:t,topics:f}],onData(e){if(!r)return;let t=e.result;try{let{eventName:e,args:n}=vi({abi:u??[],data:t.data,topics:t.topics,strict:p});c([gi(t,{args:n,eventName:e})])}catch(e){let n,r;if(e instanceof me||e instanceof be){if(d)return;n=e.abiItem.name,r=e.abiItem.inputs?.some(e=>!(`name`in e&&e.name))}c([gi(t,{args:r?[]:{},eventName:n})])}},onError(e){s?.(e)}});o=m,r||o()}catch(e){s?.(e)}})(),()=>o()})()}function au(e,{batch:t=!0,onError:n,onTransactions:r,poll:i,pollingInterval:a=e.pollingInterval}){return(i===void 0?e.transport.type!==`webSocket`&&e.transport.type!==`ipc`:i)?ki(k([`watchPendingTransactions`,e.uid,t,a]),{onTransactions:r,onError:n},n=>{let r,i=ji(async()=>{try{if(!r)try{r=await A(e,Va,`createPendingTransactionFilter`)({});return}catch(e){throw i(),e}let a=await A(e,Ri,`getFilterChanges`)({filter:r});if(a.length===0)return;if(t)n.onTransactions(a);else for(let e of a)n.onTransactions([e])}catch(e){n.onError?.(e)}},{emitOnBegin:!0,interval:a});return async()=>{r&&await A(e,zi,`uninstallFilter`)({filter:r}),i()}}):(()=>{let t=!0,i=()=>t=!1;return(async()=>{try{let{unsubscribe:a}=await e.transport.subscribe({params:[`newPendingTransactions`],onData(e){if(!t)return;let n=e.result;r([n])},onError(e){n?.(e)}});i=a,t||i()}catch(e){n?.(e)}})(),()=>i()})()}function ou(e){let{scheme:t,statement:n,...r}=e.match(su)?.groups??{},{chainId:i,expirationTime:a,issuedAt:o,notBefore:s,requestId:c,...l}=e.match(cu)?.groups??{},u=e.split(`Resources:`)[1]?.split(`
- `).slice(1);return{...r,...l,...i?{chainId:Number(i)}:{},...a?{expirationTime:new Date(a)}:{},...o?{issuedAt:new Date(o)}:{},...s?{notBefore:new Date(s)}:{},...c?{requestId:c}:{},...u?{resources:u}:{},...t?{scheme:t}:{},...n?{statement:n}:{}}}var su=/^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,cu=/(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;function lu(e){let{address:t,domain:n,message:r,nonce:i,scheme:a,time:o=new Date}=e;if(n&&r.domain!==n||i&&r.nonce!==i||a&&r.scheme!==a||r.expirationTime&&o>=r.expirationTime||r.notBefore&&o<r.notBefore)return!1;try{if(!r.address||!rt(r.address,{strict:!1})||t&&!re(r.address,t))return!1}catch{return!1}return!0}async function uu(e,t){let{address:n,domain:r,message:i,nonce:a,scheme:o,signature:s,time:c=new Date,...l}=t,u=ou(i);if(!u.address||!lu({address:n,domain:r,message:u,nonce:a,scheme:o,time:c}))return!1;let d=fo(i);return Jl(e,{address:u.address,hash:d,signature:s,...l})}async function du(e,{serializedTransaction:t,throwOnReceiptRevert:n,timeout:r}){let i=await e.request({method:`eth_sendRawTransactionSync`,params:r?[t,r]:[t]},{retryCount:0}),a=(e.chain?.formatters?.transactionReceipt?.format||Zi)(i);if(a.status===`reverted`&&n)throw new ee({receipt:a});return a}function fu(e){return{call:t=>Ut(e,t),createAccessList:t=>Ra(e,t),createBlockFilter:()=>za(e),createContractEventFilter:t=>ar(e,t),createEventFilter:t=>Ba(e,t),createPendingTransactionFilter:()=>Va(e),estimateContractGas:t=>hi(e,t),estimateGas:t=>mi(e,t),getBalance:t=>Ha(e,t),getBlobBaseFee:()=>Ua(e),getBlock:t=>kr(e,t),getBlockNumber:t=>Li(e,t),getBlockTransactionCount:t=>Wa(e,t),getBytecode:t=>Ga(e,t),getChainId:()=>ci(e),getCode:t=>Ga(e,t),getContractEvents:t=>Ci(e,t),getDelegation:t=>Ka(e,t),getEip712Domain:t=>Ja(e,t),getEnsAddress:t=>ha(e,t),getEnsAvatar:t=>Fa(e,t),getEnsName:t=>Ia(e,t),getEnsResolver:t=>La(e,t),getEnsText:t=>Pa(e,t),getFeeHistory:t=>Za(e,t),estimateFeesPerGas:t=>Nr(e,t),getFilterChanges:t=>Ri(e,t),getFilterLogs:t=>Qa(e,t),getGasPrice:()=>Ar(e),getLogs:t=>Si(e,t),getProof:t=>ml(e,t),estimateMaxPriorityFeePerGas:t=>jr(e,t),fillTransaction:t=>li(e,t),getStorageAt:t=>hl(e,t),getTransaction:t=>gl(e,t),getTransactionConfirmations:t=>_l(e,t),getTransactionCount:t=>Fr(e,t),getTransactionReceipt:t=>vl(e,t),multicall:t=>yl(e,t),prepareTransactionRequest:t=>pi(e,t),readContract:t=>wi(e,t),sendRawTransaction:t=>Wi(e,t),sendRawTransactionSync:t=>du(e,t),simulate:t=>bl(e,t),simulateBlocks:t=>bl(e,t),simulateCalls:t=>Vl(e,t),simulateContract:t=>Ti(e,t),verifyHash:t=>Jl(e,t),verifyMessage:t=>$l(e,t),verifySiweMessage:t=>uu(e,t),verifyTypedData:t=>eu(e,t),uninstallFilter:t=>zi(e,t),waitForTransactionReceipt:t=>nu(e,t),watchBlocks:t=>ru(e,t),watchBlockNumber:t=>tu(e,t),watchContractEvent:t=>Bi(e,t),watchEvent:t=>iu(e,t),watchPendingTransactions:t=>au(e,t)}}function pu(e){let{key:t=`public`,name:n=`Public Client`}=e;return ca({...e,key:t,name:n,type:`publicClient`}).extend(fu)}async function mu(e,{chain:t}){let{id:n,name:r,nativeCurrency:i,rpcUrls:a,blockExplorers:o}=t;await e.request({method:`wallet_addEthereumChain`,params:[{chainId:D(n),chainName:r,nativeCurrency:i,rpcUrls:a.default.http,blockExplorerUrls:o?Object.values(o).map(({url:e})=>e):void 0}]},{dedupe:!0,retryCount:0})}function hu(e,t){let{abi:n,args:r,bytecode:i,...a}=t,o=nt({abi:n,args:r,bytecode:i});return Ki(e,{...a,...a.authorizationList?{to:null}:{},data:o})}async function gu(e){return e.account?.type===`local`?[e.account.address]:(await e.request({method:`eth_accounts`},{dedupe:!0})).map(e=>kt(e))}async function _u(e,n={}){let{account:r=e.account,chainId:i}=n,a=r?t(r):void 0,o=i?[a?.address,[D(i)]]:[a?.address],s=await e.request({method:`wallet_getCapabilities`,params:o}),c={};for(let[e,t]of Object.entries(s)){c[Number(e)]={};for(let[n,r]of Object.entries(t))n===`addSubAccount`&&(n=`unstable_addSubAccount`),c[Number(e)][n]=r}return typeof i==`number`?c[i]:c}async function vu(e){return await e.request({method:`wallet_getPermissions`},{dedupe:!0})}async function yu(e,n){let{account:r=e.account,chainId:i,nonce:a}=n;if(!r)throw new Vi({docsPath:`/docs/eip7702/prepareAuthorization`});let o=t(r),s=(()=>{if(n.executor)return n.executor===`self`?n.executor:t(n.executor)})(),c={address:n.contractAddress??n.address,chainId:i,nonce:a};return c.chainId===void 0&&(c.chainId=e.chain?.id??await A(e,ci,`getChainId`)({})),c.nonce===void 0&&(c.nonce=await A(e,Fr,`getTransactionCount`)({address:o.address,blockTag:`pending`}),(s===`self`||s?.address&&re(s.address,o.address))&&(c.nonce+=1)),c}async function bu(e){return(await e.request({method:`eth_requestAccounts`},{dedupe:!0,retryCount:0})).map(e=>Qt(e))}async function xu(e,t){return e.request({method:`wallet_requestPermissions`,params:[t]},{retryCount:0})}async function Su(e,t){let{chain:n=e.chain}=t,r=t.timeout??Math.max((n?.blockTime??0)*3,5e3),i=await A(e,ea,`sendCalls`)(t);return await A(e,na,`waitForCallsStatus`)({...t,id:i.id,timeout:r})}var Cu=new ot(128);async function wu(e,n){let{account:r=e.account,assertChainId:i=!0,chain:a=e.chain,accessList:o,authorizationList:s,blobs:c,data:l,dataSuffix:u=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,pollingInterval:_,throwOnReceiptRevert:y,type:b,value:x,...S}=n,C=n.timeout??Math.max((a?.blockTime??0)*3,5e3);if(r===void 0)throw new Vi({docsPath:`/docs/actions/wallet/sendTransactionSync`});let w=r?t(r):null;try{We(n);let t=await(async()=>{if(n.to)return n.to;if(n.to!==null&&s&&s.length>0)return await vr({authorization:s[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`.")})})();if(w?.type===`json-rpc`||w===null){let n;a!==null&&(n=await A(e,ci,`getChainId`)({}),i&&Ui({currentChainId:n,chain:a}));let r=e.chain?.formatters?.transactionRequest?.format,v=(r||Ke)({...Se(S,{format:r}),accessList:o,account:w,authorizationList:s,blobs:c,chainId:n,data:l&&It([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,to:t,type:b,value:x},`sendTransaction`),te=Cu.get(e.uid),T=te?`wallet_sendTransaction`:`eth_sendTransaction`,ne=await(async()=>{try{return await e.request({method:T,params:[v]},{retryCount:0})}catch(t){if(te===!1)throw t;let n=t;if(n.name===`InvalidInputRpcError`||n.name===`InvalidParamsRpcError`||n.name===`MethodNotFoundRpcError`||n.name===`MethodNotSupportedRpcError`)return await e.request({method:`wallet_sendTransaction`,params:[v]},{retryCount:0}).then(t=>(Cu.set(e.uid,!0),t)).catch(t=>{let r=t;throw r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`?(Cu.set(e.uid,!1),n):r});throw n}})(),re=await A(e,nu,`waitForTransactionReceipt`)({checkReplacement:!1,hash:ne,pollingInterval:_,timeout:C});if(y&&re.status===`reverted`)throw new ee({receipt:re});return re}if(w?.type===`local`){let r=await A(e,pi,`prepareTransactionRequest`)({account:w,accessList:o,authorizationList:s,blobs:c,chain:a,data:l&&It([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,nonceManager:w.nonceManager,parameters:[...ui,`sidecars`],type:b,value:x,...S,to:t}),i=a?.serializers?.transaction,_=await w.signTransaction(r,{serializer:i});return await A(e,du,`sendRawTransactionSync`)({serializedTransaction:_,throwOnReceiptRevert:y,timeout:n.timeout})}throw w?.type===`smart`?new Hi({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:`/docs/actions/bundler/sendUserOperation`,type:`smart`}):new Hi({docsPath:`/docs/actions/wallet/sendTransactionSync`,type:w?.type})}catch(e){throw e instanceof Hi?e:si(e,{...n,account:w,chain:n.chain||void 0})}}async function Tu(e,t){let{id:n}=t;await e.request({method:`wallet_showCallsStatus`,params:[n]})}async function Eu(e,n){let{account:r=e.account}=n;if(!r)throw new Vi({docsPath:`/docs/eip7702/signAuthorization`});let i=t(r);if(!i.signAuthorization)throw new Hi({docsPath:`/docs/eip7702/signAuthorization`,metaMessages:["The `signAuthorization` Action does not support JSON-RPC Accounts."],type:i.type});let a=await yu(e,n);return i.signAuthorization(a)}async function Du(e,{account:n=e.account,message:r}){if(!n)throw new Vi({docsPath:`/docs/actions/wallet/signMessage`});let i=t(n);if(i.signMessage)return i.signMessage({message:r});let a=typeof r==`string`?cn(r):r.raw instanceof Uint8Array?Oe(r.raw):r.raw;return e.request({method:`personal_sign`,params:[a,i.address]},{retryCount:0})}async function Ou(e,n){let{account:r=e.account,chain:i=e.chain,...a}=n;if(!r)throw new Vi({docsPath:`/docs/actions/wallet/signTransaction`});let o=t(r);We({account:o,...n});let s=await A(e,ci,`getChainId`)({});i!==null&&Ui({currentChainId:s,chain:i});let c=(i?.formatters||e.chain?.formatters)?.transactionRequest?.format||Ke;return o.signTransaction?o.signTransaction({...a,chainId:s},{serializer:e.chain?.serializers?.transaction}):await e.request({method:`eth_signTransaction`,params:[{...c({...a,account:o},`signTransaction`),chainId:D(s),from:o.address}]},{retryCount:0})}async function ku(e,n){let{account:r=e.account,domain:i,message:a,primaryType:o}=n;if(!r)throw new Vi({docsPath:`/docs/actions/wallet/signTypedData`});let s=t(r),c={EIP712Domain:vo({domain:i}),...n.types};if(_o({domain:i,message:a,primaryType:o,types:c}),s.signTypedData)return s.signTypedData({domain:i,message:a,primaryType:o,types:c});let l=go({domain:i,message:a,primaryType:o,types:c});return e.request({method:`eth_signTypedData_v4`,params:[s.address,l]},{retryCount:0})}async function Au(e,{id:t}){await e.request({method:`wallet_switchEthereumChain`,params:[{chainId:D(t)}]},{retryCount:0})}async function ju(e,t){return await e.request({method:`wallet_watchAsset`,params:t},{retryCount:0})}async function Mu(e,t){return qi.internal(e,wu,`sendTransactionSync`,t)}function Nu(e){return{addChain:t=>mu(e,t),deployContract:t=>hu(e,t),fillTransaction:t=>li(e,t),getAddresses:()=>gu(e),getCallsStatus:t=>ta(e,t),getCapabilities:t=>_u(e,t),getChainId:()=>ci(e),getPermissions:()=>vu(e),prepareAuthorization:t=>yu(e,t),prepareTransactionRequest:t=>pi(e,t),requestAddresses:()=>bu(e),requestPermissions:t=>xu(e,t),sendCalls:t=>ea(e,t),sendCallsSync:t=>Su(e,t),sendRawTransaction:t=>Wi(e,t),sendRawTransactionSync:t=>du(e,t),sendTransaction:t=>Ki(e,t),sendTransactionSync:t=>wu(e,t),showCallsStatus:t=>Tu(e,t),signAuthorization:t=>Eu(e,t),signMessage:t=>Du(e,t),signTransaction:t=>Ou(e,t),signTypedData:t=>ku(e,t),switchChain:t=>Au(e,t),waitForCallsStatus:t=>na(e,t),watchAsset:t=>ju(e,t),writeContract:t=>qi(e,t),writeContractSync:t=>Mu(e,t)}}function Pu(e){let{key:t=`wallet`,name:n=`Wallet Client`,transport:r}=e;return ca({...e,key:t,name:n,transport:r,type:`walletClient`}).extend(Nu)}function Fu({key:e,methods:t,name:n,request:r,retryCount:i=3,retryDelay:a=150,timeout:o,type:s},c){let l=sa();return{config:{key:e,methods:t,name:n,request:r,retryCount:i,retryDelay:a,timeout:o,type:s},request:no(r,{methods:t,retryCount:i,retryDelay:a,uid:l}),value:c}}function Iu(e,t={}){let{key:n=`custom`,methods:r,name:i=`Custom Provider`,retryDelay:a}=t;return({retryCount:o})=>Fu({key:n,methods:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:a,type:`custom`})}var Lu=class extends v{constructor(){super(`No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.`,{docsPath:`/docs/clients/intro`,name:`UrlRequiredError`})}};function Ru(e,t={}){let{batch:n,fetchFn:r,fetchOptions:a,key:o=`http`,methods:s,name:c=`HTTP JSON-RPC`,onFetchRequest:l,onFetchResponse:u,retryDelay:d,raw:f}=t;return({chain:p,retryCount:m,timeout:h})=>{let{batchSize:g=1e3,wait:_=0}=typeof n==`object`?n:{},v=t.retryCount??m,y=h??t.timeout??1e4,b=e||p?.rpcUrls.default.http[0];if(!b)throw new Lu;let x=so(b,{fetchFn:r,fetchOptions:a,onRequest:l,onResponse:u,timeout:y});return Fu({key:o,methods:s,name:c,async request({method:e,params:t}){let r={method:e,params:t},{schedule:a}=yt({id:b,wait:_,shouldSplitBatch(e){return e.length>g},fn:e=>x.request({body:e}),sort:(e,t)=>e.id-t.id}),[{error:o,result:s}]=await(async e=>n?a(e):[await x.request({body:e})])(r);if(f)return{error:o,result:s};if(o)throw new i({body:r,error:o,url:b});return s},retryCount:v,retryDelay:d,timeout:y,type:`http`},{fetchOptions:a,url:b})}}var F=10143,I={1337:{name:`FoMonad Local`,rpcUrl:`http://127.0.0.1:8545`,explorer:`https://monadvision.com`},10143:{name:`Monad Testnet`,rpcUrl:`https://testnet-rpc.monad.xyz`,explorer:`https://testnet.monadexplorer.com`,shmonUrl:`https://www.fomonad.wtf/shmon_testnet/`,vibecoinImpl:`0x33F4DD8153eA42c67Bb4dDEB5D0499ca2e96393D`,fomon:`0x0f3Ed63A647A71bd57657c105A4d171A535E9A68`,game:`0x24654BBcE7984E968a293671A404d79a7aDf2D57`,shmon:`0x282BdDFF5e58793AcAb65438b257Dbd15A8745C9`}},zu=Zn({clearLastWallet:()=>Ju,connectWallet:()=>Gu,connectedWallet:()=>L,disconnectWallet:()=>Ku,saveLastWallet:()=>qu,switchChain:()=>Yu,walletEvents:()=>Vu,walletProviders:()=>Hu}),Bu=`fomonad-last-wallet`,Vu=new EventTarget,Hu=[],L=null;function Uu(e){Hu=e,Vu.dispatchEvent(new CustomEvent(`wallet-changed`))}function Wu(e){L=e,Vu.dispatchEvent(new CustomEvent(`wallet-changed`))}window.addEventListener(`eip6963:announceProvider`,e=>{let t=e.detail;if(!Hu.find(e=>e.info.uuid===t.info.uuid)){Uu([...Hu,t]);let e=localStorage.getItem(Bu);e&&t.info.rdns===e&&!L&&Gu(t)}}),window.dispatchEvent(new Event(`eip6963:requestProvider`));async function Gu(e){try{let t=await e.provider.request({method:`eth_requestAccounts`});if(!t||t.length===0)return null;let n=await e.provider.request({method:`eth_chainId`}),r=parseInt(n,16),i=t[0];return Wu({address:i,provider:e.provider,chainId:r}),e.provider.on&&(e.provider.on(`accountsChanged`,e=>{let t=e;!t||t.length===0?Wu(null):Wu({...L,address:t[0]})}),e.provider.on(`chainChanged`,e=>{let t=parseInt(e,16);L&&Wu({...L,chainId:t})})),i}catch{return null}}function Ku(){Wu(null)}function qu(e){localStorage.setItem(Bu,e)}function Ju(){localStorage.removeItem(Bu)}async function Yu(e,t,n){if(!L)return!1;try{return await L.provider.request({method:`wallet_switchEthereumChain`,params:[{chainId:`0x${e.toString(16)}`}]}),!0}catch(r){if(r&&typeof r==`object`&&`code`in r&&r.code===4902)try{return await L.provider.request({method:`wallet_addEthereumChain`,params:[{chainId:`0x${e.toString(16)}`,chainName:n,rpcUrls:[t],nativeCurrency:{name:`MON`,symbol:`MON`,decimals:18}}]}),!0}catch{return!1}return!1}}function Xu(e){let t=I[e];return{id:e,name:t?.name??`Chain ${e}`,nativeCurrency:{name:`MON`,symbol:`MON`,decimals:18},rpcUrls:{default:{http:[t?.rpcUrl??`http://127.0.0.1:8545`]}}}}var Zu=new Map,Qu=null;Vu.addEventListener(`wallet-changed`,()=>{Qu=null});function $u(e=F){if(!Zu.has(e)){let t=I[e],n=pu({chain:Xu(e),transport:Ru(t?.rpcUrl??`http://127.0.0.1:8545`,{retryCount:5,retryDelay:250})});Zu.set(e,n)}return Zu.get(e)}function ed(e=F){return!L||L.chainId!==e?null:((!Qu||Qu.chainId!==e)&&(Qu={chainId:e,client:pu({chain:Xu(e),transport:Iu(L.provider)})}),Qu.client)}function td(e){return!e||typeof e!=`object`?!1:`code`in e&&e.code===-32011?!0:`cause`in e?td(e.cause):!!(e instanceof Error&&e.message.includes(`requests limited`))}async function R(e,t=F,n=3){let r=$u(t);for(let i=0;i<n;i++){let a=i===n-1,o=a?ed(t)??r:r;try{return await e(o)}catch(e){if(td(e)&&!a){await new Promise(e=>setTimeout(e,2**i*250));continue}throw e}}throw Error(`unreachable`)}function nd(){if(!L)return null;let e=Xu(L.chainId);return Pu({account:L.address,chain:e,transport:Iu(L.provider)})}async function rd(e){if(!L)return!1;if(L.chainId===e)return!0;let t=I[e];return t?Yu(e,t.rpcUrl,t.name):!1}var z=[{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`},{name:`fomon`,type:`address`,internalType:`address`},{name:`vibecoinImpl`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`FOMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract FoMonad`}],stateMutability:`view`},{type:`function`,name:`INITIAL_TIMER`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`K`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`K_HALF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`MAX_TIMER`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`MIN_REFERRAL_DEPOSIT`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`P0`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_DURATION`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_KICKOFF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_DURATION`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`VIBECOIN_IMPL`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`WINNER_PRIZE_BPS`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`buy`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`buyWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`claimSeriesATokens`,inputs:[{name:`cycleId`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`claimSeriesBTokens`,inputs:[{name:`cycleId`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`currentVibecoin`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract Vibecoin`}],stateMutability:`view`},{type:`function`,name:`cycle`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`depositSeriesA`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`depositSeriesAWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`depositSeriesB`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`depositSeriesBWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`isTimerExpired`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`lastBuyer`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`phase`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`enum FoMonadGame.Phase`}],stateMutability:`view`},{type:`function`,name:`prizePool`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`referralCodes`,inputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`referralCodeOf`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],stateMutability:`view`},{type:`function`,name:`referralEarned`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`registerReferral`,inputs:[{name:`code`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`rolloverPool`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesADeposits`,inputs:[{name:``,type:`uint256`,internalType:`uint256`},{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesAEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesBDeposits`,inputs:[{name:``,type:`uint256`,internalType:`uint256`},{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesBEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`settleSeriesB`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`settlementTimestamp`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilSeriesAEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilSeriesBEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilTimer`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timerExpiry`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`tokensSeriesAByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`tokensSeriesBByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalDeposited`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalPublicCurveDeposited`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesA`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesAByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesB`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesBByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesDeposit`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`triggerSettlement`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`vibecoinByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`vibecoinCycle`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`winnerByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`prizeByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`gameState`,inputs:[{name:`getVibecoinURI`,type:`bool`,internalType:`bool`}],outputs:[{name:`state`,type:`tuple`,internalType:`struct FoMonadGame.GameState`,components:[{name:`phase`,type:`uint8`,internalType:`enum FoMonadGame.Phase`},{name:`phaseEndTime`,type:`uint256`,internalType:`uint256`},{name:`vibecoin`,type:`address`,internalType:`address`},{name:`vibecoinPrice`,type:`uint256`,internalType:`uint256`},{name:`vibecoinURI`,type:`string`,internalType:`string`},{name:`prizePool`,type:`uint256`,internalType:`uint256`},{name:`totalDeposited`,type:`uint256`,internalType:`uint256`},{name:`cycle`,type:`uint256`,internalType:`uint256`},{name:`lastBuyer`,type:`address`,internalType:`address`}]}],stateMutability:`view`},{type:`event`,name:`Buy`,inputs:[{name:`buyer`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonIn`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`tokensOut`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`CycleSettled`,inputs:[{name:`winner`,type:`address`,indexed:!0,internalType:`address`},{name:`prizeAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`rollover`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`newVibecoin`,type:`address`,indexed:!1,internalType:`address`}],anonymous:!1},{type:`event`,name:`ReferralRegistered`,inputs:[{name:`code`,type:`bytes32`,indexed:!0,internalType:`bytes32`},{name:`referrer`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`SeriesADeposit`,inputs:[{name:`depositor`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`referralCode`,type:`bytes32`,indexed:!1,internalType:`bytes32`}],anonymous:!1},{type:`event`,name:`SeriesBDeposit`,inputs:[{name:`depositor`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`referralCode`,type:`bytes32`,indexed:!1,internalType:`bytes32`}],anonymous:!1},{type:`event`,name:`SeriesSettled`,inputs:[{name:`K`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`vibecoin`,type:`address`,indexed:!1,internalType:`address`},{name:`timerExpiry`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`TimerExtended`,inputs:[{name:`newExpiry`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`lastBuyer`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`error`,name:`AlreadySettled`,inputs:[]},{type:`error`,name:`FailedDeployment`,inputs:[]},{type:`error`,name:`InsufficientBalance`,inputs:[{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`InvalidReferral`,inputs:[]},{type:`error`,name:`NotAnInsider`,inputs:[]},{type:`error`,name:`NotEligibleReferrer`,inputs:[]},{type:`error`,name:`NothingToClaim`,inputs:[]},{type:`error`,name:`PublicPhaseNotOpen`,inputs:[]},{type:`error`,name:`Reentrant`,inputs:[]},{type:`error`,name:`ReferralCodeTaken`,inputs:[]},{type:`error`,name:`SeriesANotEnded`,inputs:[]},{type:`error`,name:`SeriesBNotEnded`,inputs:[]},{type:`error`,name:`TimerExpired`,inputs:[]},{type:`error`,name:`TimerNotExpired`,inputs:[]},{type:`error`,name:`WrongPhase`,inputs:[]},{type:`error`,name:`ZeroDeposit`,inputs:[]}],B=[{type:`function`,name:`athPostRug`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`athPrice`,inputs:[],outputs:[{name:``,type:`uint128`,internalType:`uint128`}],stateMutability:`view`},{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`K`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`P0`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`buy`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`autoOptIn`,type:`bool`,internalType:`bool`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`buyWithShMon`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`shMonIn`,type:`uint256`,internalType:`uint256`},{name:`autoOptIn`,type:`bool`,internalType:`bool`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`claimDividends`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}],outputs:[{name:`amount`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`drip`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`earned`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`game`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`initialize`,inputs:[{name:`seed_`,type:`bytes32`,internalType:`bytes32`},{name:`game_`,type:`address`,internalType:`address`},{name:`p0`,type:`uint256`,internalType:`uint256`},{name:`k`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`lastKnownBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`lastKnownSelfBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`marketCap`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`optIn`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optOut`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optedIn`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`optedInSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`pendingRewards`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`poolBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`price`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`rewardPerTokenStored`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seed`,inputs:[],outputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],stateMutability:`view`},{type:`function`,name:`sell`,inputs:[{name:`tokens`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`shMonForTokens`,inputs:[{name:`tokens`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`tokenURI`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`tokensForDeposit`,inputs:[{name:`deposit`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`unlock`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`totalVolume`,inputs:[],outputs:[{name:``,type:`uint128`,internalType:`uint128`}],stateMutability:`view`},{type:`function`,name:`unlocked`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`userRewardPerTokenPaid`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`volume24h`,inputs:[],outputs:[{name:`total`,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`AlreadyInitialized`,inputs:[]},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]},{type:`error`,name:`InsufficientTokens`,inputs:[]},{type:`error`,name:`MustBeGame`,inputs:[]},{type:`error`,name:`PreRugpull`,inputs:[]},{type:`error`,name:`ZeroAmount`,inputs:[]}],id=[{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`},{name:`game_`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`function`,name:`AIRDROP_RESERVE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`DEPLOYER_SHARE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`TOTAL_SUPPLY`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`T_HALF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`airdropNonce`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`claim`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`claimable`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`deployTimestamp`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`distributeProtocolFee`,inputs:[{name:`shMonAmount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`game`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`lastAirdropBlock`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`maxMintable`,inputs:[{name:`t`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`pure`},{type:`function`,name:`mintAirdrop`,inputs:[{name:`to`,type:`address`,internalType:`address`}],outputs:[{name:`amount`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`optIn`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optedIn`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`optedInSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`pendingRewards`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`remainingCeiling`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`rewardPerTokenStored`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`totalAirdropMinted`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`userRewardPerTokenPaid`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`event`,name:`AirdropMinted`,inputs:[{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`amount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Claimed`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`OptedIn`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`OptedOut`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`ProtocolFeeDistributed`,inputs:[{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`AirdropExhausted`,inputs:[]},{type:`error`,name:`AlreadyOptedIn`,inputs:[]},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]},{type:`error`,name:`NotGame`,inputs:[]},{type:`error`,name:`NothingToClaim`,inputs:[]}],ad=[{type:`constructor`,inputs:[],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`assetsPerShare`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`convertToAssets`,inputs:[{name:`shares`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`convertToShares`,inputs:[{name:`assets`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`setRate`,inputs:[{name:`rateWad`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`deposit`,inputs:[{name:`assets`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`}],outputs:[{name:`shares`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`redeem`,inputs:[{name:`shares`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`},{name:`owner`,type:`address`,internalType:`address`}],outputs:[{name:`assets`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`totalAssets`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]}],V=new Map([[`token:native:name`,`Monad`],[`token:native:symbol`,`MON`]]),od=new Map;function sd(e){od.set(e,(od.get(e)??0)+1)}function H(e){let t=od.get(e)??0;t<=1?od.delete(e):od.set(e,t-1)}function cd(e){return e.some(e=>(od.get(e)??0)>0)}function U(e,t){V.set(e,t),window.dispatchEvent(new CustomEvent(`live-values-updated`,{detail:new Map([[e,t]])}))}function ld(e){let t=new Map;for(let[n,r]of Object.entries(e))V.set(n,r),t.set(n,r);t.size>0&&window.dispatchEvent(new CustomEvent(`live-values-updated`,{detail:t}))}var ud=[[`#ff2d6b`,`#ff8c00`],[`#00e5ff`,`#0066ff`],[`#ffe600`,`#ff6600`],[`#00ff9d`,`#00aa66`],[`#ff00ff`,`#aa00ff`],[`#ff4444`,`#ff0000`],[`#ffffff`,`#aaaaaa`],[`#ff9900`,`#ffcc00`],[`#44ffff`,`#0099ff`],[`#ff44aa`,`#ff0066`]];function dd(e){return[...ud[parseInt(e.slice(12,14),16)%10]]}var fd=`fomonad-events`,pd=1,md=`vibecoin-cycles`,hd=`meta`,gd=null;async function _d(){return gd||new Promise((e,t)=>{let n=indexedDB.open(fd,pd);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(md)||e.createObjectStore(md,{keyPath:`cycle`}),e.objectStoreNames.contains(hd)||e.createObjectStore(hd,{keyPath:`key`})},n.onsuccess=()=>{gd=n.result,e(n.result)},n.onerror=()=>t(n.error)})}async function vd(e){let t=await _d();return new Promise((n,r)=>{let i=t.transaction(md,`readwrite`).objectStore(md),a={...e,K:e.K.toString(),prizeAmount:e.prizeAmount.toString(),blockNumber:e.blockNumber.toString()},o=i.put(a);o.onsuccess=()=>n(),o.onerror=()=>r(o.error)})}async function yd(){let e=await _d();return new Promise((t,n)=>{let r=e.transaction(md,`readwrite`);r.objectStore(md).clear().onsuccess=()=>t(),r.onerror=()=>n(r.error)})}async function bd(e){let t=await _d();(await new Promise((e,n)=>{let r=t.transaction(hd,`readonly`).objectStore(hd).get(`gameAddress`);r.onsuccess=()=>e(r.result?.value??null),r.onerror=()=>n(r.error)}))?.toLowerCase()!==e.toLowerCase()&&(await yd(),await new Promise((n,r)=>{let i=t.transaction(hd,`readwrite`).objectStore(hd).put({key:`gameAddress`,value:e});i.onsuccess=()=>n(),i.onerror=()=>r(i.error)}))}async function xd(){let e=await _d();return new Promise((t,n)=>{let r=e.transaction(md,`readonly`).objectStore(md).getAll();r.onsuccess=()=>{let e=r.result.map(e=>({...e,K:BigInt(e.K),prizeAmount:BigInt(e.prizeAmount),blockNumber:BigInt(e.blockNumber)}));e.sort((e,t)=>t.cycle-e.cycle),t(e)},r.onerror=()=>n(r.error)})}Qn(`event SeriesSettled(uint256 K, address vibecoin, uint256 timerExpiry)`),Qn(`event CycleSettled(address indexed winner, uint256 prizeAmount, uint256 rollover, address newVibecoin)`);var Sd=10n**18n,Cd=localStorage.getItem(`fomonad-denom`)??`mon`;function wd(){return Cd}function Td(e){Cd=e,localStorage.setItem(`fomonad-denom`,e),window.dispatchEvent(new CustomEvent(`denom-changed`))}var Ed=10n**18n;function Dd(e){Ed=e}function Od(){return Ed}function kd(e,t){return`${e/Sd}.${(e%Sd).toString().padStart(18,`0`).slice(0,t)}`}function Ad(e,t=4){return`${kd(e,t)} MON`}function jd(e,t=4){let n=e*Ed/10n**18n;switch(Cd){case`mon`:return`≈${Ad(n,t)}`;default:case`shmon`:return`${kd(e,t)}\u00A0shMON`}}function Md(e,t){let n=Cd===`mon`?`MON`:`shMON`,r=Number(e);return r<1e6?`${(r/1e6).toFixed(4)} p${n}/\$${t}`:r<1e9?`${(r/1e6).toFixed(4)} n${n}/\$${t}`:r<0xe8d4a51000?`${(r/1e9).toFixed(4)} n${n}/\$${t}`:r<0x38d7ea4c68000?`${(r/0xe8d4a51000).toFixed(4)} μ${n}/\$${t}`:r<0xde0b6b3a7640000?`${(r/0x38d7ea4c68000).toFixed(4)} m${n}/\$${t}`:`${(r/0xde0b6b3a7640000).toFixed(6)} ${n}/\$${t}`}function Nd(e,t){let n=Number(e)/0xde0b6b3a7640000;return n>=1e6?`${(n/1e6).toFixed(2)}M \$${t}`:n>=1e3?`${(n/1e3).toFixed(2)}k \$${t}`:`${n.toFixed(2)} \$${t}`}function Pd(e){let t=Number(e)/0xde0b6b3a7640000;return t>=1e6?`${(t/1e6).toFixed(2)}M`:t>=1e3?`${(t/1e3).toFixed(2)}k`:`${t.toFixed(2)}`}function Fd(e){return`${e.slice(0,6)}…${e.slice(-4)}`}function Id(e){if(e<=0)return`00:00:00`;let t=Math.floor(e/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`}function Ld(e){if(e<=0)return`00:00:00.000`;let t=Math.floor(e/1e3),n=Math.floor(e%1e3),r=Math.floor(t/3600),i=Math.floor(t%3600/60),a=t%60;return`${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}.${String(n).padStart(3,`0`)}`}function Rd(e,t){if(t==0n)return`--%`;let n=10000n*e/t,r=n/100n,i=n%100n;return r+(i==0n?``:`.`+(``+i).padStart(2,`0`))+`%`}var zd=`fomonad-active-ref`,Bd=`fomonad-url-ref`;function Vd(e){if(!e)return`0x${`00`.repeat(32)}`;let t=new TextEncoder().encode(e);return t.length>31?`0x${`00`.repeat(32)}`:`0x${Array.from(t).map(e=>e.toString(16).padStart(2,`0`)).join(``).padEnd(64,`0`)}`}function Hd(e){try{let t=e.startsWith(`0x`)?e.slice(2):e,n=[];for(let e=0;e<t.length;e+=2){let r=parseInt(t.slice(e,e+2),16);if(r===0)break;n.push(r)}return n.length===0?null:new TextDecoder(`utf-8`,{fatal:!0}).decode(new Uint8Array(n))}catch{return null}}function Ud(e){try{let t=new TextEncoder().encode(e);return t.length===0||t.length>31?null:(new TextDecoder(`utf-8`,{fatal:!0}).decode(t),e)}catch{return null}}function Wd(){try{let e=window.location.hash,t=e.indexOf(`?`);if(t===-1)return null;let n=new URLSearchParams(e.slice(t+1)).get(`ref`);return n?Ud(n):null}catch{return null}}function Gd(){return localStorage.getItem(zd)}function Kd(e){let t=Ud(e);t&&localStorage.setItem(zd,t)}function qd(){localStorage.removeItem(zd)}function Jd(){let e=Wd();e!==null&&e!==localStorage.getItem(Bd)&&(localStorage.setItem(Bd,e),localStorage.setItem(zd,e))}function Yd(e){return Vd(e)}var Xd=class{constructor(){this.tasks=[],this.running=!1,this._cancelledThisTick=new Set}upsert(e){let t=this.tasks.findIndex(t=>t.key===e.key);t>=0?this.tasks[t]=e:this.tasks.push(e),this.running||this._loop()}prepend(e){this.tasks=this.tasks.filter(t=>t.key!==e.key),this.tasks.unshift(e),this._cancelledThisTick.delete(e.key),this.running||this._loop()}remove(e){this.tasks=this.tasks.filter(t=>t.key!==e),this._cancelledThisTick.add(e)}has(e){return this.tasks.some(t=>t.key===e)}get size(){return this.tasks.length}async _loop(){for(this.running=!0;this.tasks.length>0;){let e=Date.now(),t=this.tasks.shift();this._cancelledThisTick.delete(t.key);let n=t.updates!==void 0&&!cd(t.updates);console.log(n?`skipping task:`:`executing task:`,t.key);try{n||await t.fn()}catch(e){console.error(`[queue:${t.key}]`,e)}if(t.continuous&&!this.tasks.some(e=>e.key===t.key)&&!this._cancelledThisTick.has(t.key)&&this.tasks.push(t),this._cancelledThisTick.delete(t.key),!n){let t=Math.max(0,100-(Date.now()-e));await new Promise(e=>setTimeout(e,t))}}this.running=!1}},Zd=`0x0000000000000000000000000000000000000000`,W=new class{constructor(){this.gameState=null,this.userState=null,this.vibecoins=[],this.gameConstants=null,this.chainTimeDelta=0,this._chainId=F,this._q=new Xd,this._started=!1,this._phase=-1,this._cycle=-1n,this._currentVcAddr=``,this._vcStatic=new Map,this._vcStaticPartial=new Map,this._vcStaticQueued=new Set,this._vcHistQueued=new Set,this._vcDynamic=new Map,this._onRequestReferralCode=e=>{let{address:t}=e.detail,n=t.toLowerCase(),r=`user:${n}:referralCode`;if(V.has(r))return;let i=`referralCode:${n}`;this._q.has(i)||this._q.upsert({key:i,continuous:!1,updates:[r],fn:()=>this._taskWinnerCode(t)})},this._onRequestVcCardData=e=>{if(!L)return;let{address:t}=e.detail,n=t.toLowerCase(),r=this._vcStatic.get(n);if(!r)return;let i=BigInt(r.cycle),a=i.toString(),o=L.address.toLowerCase();V.has(`game:seriesADeposit:${a}:${o}`)||(this._q.has(`user:cardBal:${n}`)||this._q.upsert({key:`user:cardBal:${n}`,continuous:!1,updates:[`token:${n}:balance:${o}`],fn:()=>this._taskCardBalance(t)}),this._q.has(`user:cardDepA:${a}`)||this._q.upsert({key:`user:cardDepA:${a}`,continuous:!1,updates:[`game:seriesADeposit:${a}:${o}`],fn:()=>this._taskCardSeriesA(i)}),this._q.has(`user:cardDepB:${a}`)||this._q.upsert({key:`user:cardDepB:${a}`,continuous:!1,updates:[`game:seriesBDeposit:${a}:${o}`],fn:()=>this._taskCardSeriesB(i)}))}}start(){if(this._started)return;this._started=!0;let e=I[this._chainId];e&&ld({[`token:${e.shmon.toLowerCase()}:symbol`]:`shMON`,[`token:${e.fomon.toLowerCase()}:symbol`]:`foMON`}),this._q.upsert({key:`game:state`,continuous:!0,fn:()=>this._taskGameState()}),this._q.upsert({key:`game:shmonRate`,continuous:!0,updates:[`meta:shmonRate`],fn:()=>this._taskShmonRate()}),window.addEventListener(`request-vc-card-data`,this._onRequestVcCardData),window.addEventListener(`request-referral-code`,this._onRequestReferralCode)}async _taskCardBalance(e){let t=L;if(t)try{let n=await R(n=>n.readContract({address:e,abi:B,functionName:`balanceOf`,args:[t.address]}),this._chainId);U(`token:${e.toLowerCase()}:balance:${t.address.toLowerCase()}`,n),this._dispatch()}catch{}}async _taskCardSeriesA(e){let t=L;if(!t)return;let n=this._gameAddr();if(n)try{let r=await R(r=>r.readContract({address:n,abi:z,functionName:`seriesADeposits`,args:[e,t.address]}),this._chainId);U(`game:seriesADeposit:${e}:${t.address.toLowerCase()}`,r),this._dispatch()}catch{}}async _taskCardSeriesB(e){let t=L;if(!t)return;let n=this._gameAddr();if(n)try{let r=await R(r=>r.readContract({address:n,abi:z,functionName:`seriesBDeposits`,args:[e,t.address]}),this._chainId);U(`game:seriesBDeposit:${e}:${t.address.toLowerCase()}`,r),this._dispatch()}catch{}}enqueue(e,t){this._q.upsert({key:e,continuous:!1,fn:t})}refresh(){this._q.prepend({key:`game:state:priority`,continuous:!1,fn:()=>this._taskGameState()}),this._queueUserTasks(!0)}refreshUser(){if(!L){this.userState=null,window.dispatchEvent(new CustomEvent(`store-updated`));return}this._queueUserTasks(!0)}_dispatch(){window.dispatchEvent(new CustomEvent(`store-updated`))}_gameAddr(){return I[this._chainId]?.game??null}async _taskGameState(){let e=this._gameAddr();if(!e)return;let t=await R(t=>t.readContract({address:e,abi:z,functionName:`gameState`,args:[!1]}),this._chainId);if(!this.gameState)try{let e=await $u(this._chainId).getBlock({blockTag:`latest`}),t=Number(e.timestamp)-Date.now()/1e3;this.chainTimeDelta=t>60?t:0,U(`meta:chainTimeDelta`,this.chainTimeDelta)}catch{}let n=t.vibecoin??Zd,r=t.phase===3;this.gameState?this.gameState&&Object.assign(this.gameState,{phase:t.phase,cycle:t.cycle,phaseEndTime:t.phaseEndTime,prizePool:t.prizePool,lastBuyer:t.lastBuyer,vibecoin:n,isTimerExpired:r}):(this.gameState={phase:t.phase,cycle:t.cycle,phaseEndTime:t.phaseEndTime,totalSeriesA:0n,totalSeriesB:0n,prizePool:t.prizePool,lastBuyer:t.lastBuyer,vibecoin:n,K:0n,P0:0n,settlementTimestamp:0n,totalPublicCurveDeposited:0n,isTimerExpired:r},L&&this._queueUserTasks(!1)),ld({"game:phase":t.phase,"game:cycle":t.cycle,"game:phaseEndTime":t.phaseEndTime,"game:prizePool":t.prizePool,"game:lastBuyer":t.lastBuyer,"game:vibecoin":n.toLowerCase(),"game:isSettled":r}),(t.phase!==this._phase||t.cycle!==this._cycle)&&this._onPhaseOrCycleChange(t.phase,t.cycle,n),this._dispatch()}_onPhaseOrCycleChange(e,t,n){let r=this._phase,i=t!==this._cycle;if(this._phase=e,this._cycle=t,r===0&&this._q.remove(`game:totalSeriesA`),r===1&&(this._q.remove(`game:totalSeriesB`),this._q.remove(`game:totalSeriesB:final`)),(r===2||r===3)&&(this._q.remove(`game:totalPublicCurveDeposited`),this._currentVcAddr)){for(let e of[`supply`,`pool`,`ath`,`totalvol`,`vol24h`,`unlocked`])this._q.remove(`vc:${e}:${this._currentVcAddr}`);this._queueVcHistorical(this._currentVcAddr)}if(i&&this.gameState&&Object.assign(this.gameState,{K:0n,P0:0n,settlementTimestamp:0n,totalSeriesA:0n,totalSeriesB:0n,totalPublicCurveDeposited:0n}),e===0&&(U(`game:totalSeriesB`,0n),this._q.upsert({key:`game:totalSeriesA`,continuous:!0,updates:[`game:totalSeriesA`],fn:()=>this._taskTotalSeriesA()}),this._queueVcDiscovery(t),t>0n)){let e=(t-1n).toString();this._q.has(`game:tokensSeriesA:${e}:hist`)||(this._q.upsert({key:`game:tokensSeriesA:${e}:hist`,continuous:!1,updates:[`game:tokensSeriesA:${e}`],fn:()=>this._taskTokensSeriesAHist(t-1n)}),this._q.upsert({key:`game:tokensSeriesB:${e}:hist`,continuous:!1,updates:[`game:tokensSeriesB:${e}`],fn:()=>this._taskTokensSeriesBHist(t-1n)}))}if(e===1&&(this._q.upsert({key:`game:totalSeriesA:final`,continuous:!1,updates:[`game:totalSeriesA`],fn:()=>this._taskTotalSeriesA()}),this._q.remove(`game:totalSeriesA`),this._q.upsert({key:`game:totalSeriesB`,continuous:!0,updates:[`game:totalSeriesB`],fn:()=>this._taskTotalSeriesB()})),e===2||e===3){(r===1||r===-1)&&(this._q.upsert({key:`game:totalSeriesB:final`,continuous:!1,fn:()=>this._taskTotalSeriesB()}),this._q.remove(`game:totalSeriesB`),r===-1&&!V.has(`game:totalSeriesA`)&&this._q.upsert({key:`game:totalSeriesA:final`,continuous:!1,fn:()=>this._taskTotalSeriesA()}));let i=t.toString();if(this._q.has(`game:K:${i}`)||(this._q.prepend({key:`game:K:${i}`,continuous:!1,updates:[`game:K`],fn:()=>this._taskGameK()}),this._q.prepend({key:`game:P0:${i}`,continuous:!1,updates:[`game:P0`],fn:()=>this._taskGameP0()}),this._q.prepend({key:`game:settlement:${i}`,continuous:!1,updates:[`game:settlementTimestamp`],fn:()=>this._taskSettlementTimestamp()}),this._q.prepend({key:`game:tokensSeriesA:${i}`,continuous:!1,updates:[`game:tokensSeriesA`,`game:tokensSeriesA:${i}`],fn:()=>this._taskTokensSeriesA(t)}),this._q.prepend({key:`game:tokensSeriesB:${i}`,continuous:!1,updates:[`game:tokensSeriesB`,`game:tokensSeriesB:${i}`],fn:()=>this._taskTokensSeriesB(t)})),e===2?this._q.upsert({key:`game:totalPublicCurveDeposited`,continuous:!0,updates:[`game:totalPublicCurveDeposited`],fn:()=>this._taskTotalPublicCurve()}):(this._q.has(`game:totalPublicCurve:${i}`)||this._q.upsert({key:`game:totalPublicCurve:${i}`,continuous:!1,updates:[`game:totalPublicCurveDeposited`],fn:()=>this._taskTotalPublicCurve()}),this._q.remove(`game:totalPublicCurveDeposited`)),n&&n!==Zd){let r=n.toLowerCase();this._currentVcAddr=r,this._vcStatic.has(r)||this._queueVcStatic(n,Number(t)),e===2?this._queueVcContinuous(n):this._queueVcHistorical(n)}this._queueVcDiscovery(t)}!this.gameConstants&&!this._q.has(`game:constants`)&&this._q.upsert({key:`game:constants`,continuous:!1,fn:()=>this._taskGameConstants()})}async _taskTotalSeriesA(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await R(t=>t.readContract({address:e,abi:z,functionName:`totalSeriesA`}),this._chainId);this.gameState.totalSeriesA=t,U(`game:totalSeriesA`,t),this._dispatch()}async _taskTotalSeriesB(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await R(t=>t.readContract({address:e,abi:z,functionName:`totalSeriesB`}),this._chainId);this.gameState.totalSeriesB=t,U(`game:totalSeriesB`,t),this._dispatch()}async _taskTotalPublicCurve(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await R(t=>t.readContract({address:e,abi:z,functionName:`totalPublicCurveDeposited`}),this._chainId);this.gameState.totalPublicCurveDeposited=t,U(`game:totalPublicCurveDeposited`,t),this._dispatch()}async _taskGameK(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await R(t=>t.readContract({address:e,abi:z,functionName:`K`}),this._chainId);this.gameState.K=t,U(`game:K`,t),this._dispatch()}async _taskGameP0(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await R(t=>t.readContract({address:e,abi:z,functionName:`P0`}),this._chainId);this.gameState.P0=t,U(`game:P0`,t),this._dispatch()}async _taskSettlementTimestamp(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await R(t=>t.readContract({address:e,abi:z,functionName:`settlementTimestamp`}),this._chainId);this.gameState.settlementTimestamp=t,U(`game:settlementTimestamp`,t),this._dispatch()}async _taskShmonRate(){let e=I[this._chainId];if(e)try{let t=await R(t=>t.readContract({address:e.shmon,abi:ad,functionName:`convertToAssets`,args:[10n**18n]}),this._chainId);Dd(t),U(`meta:shmonRate`,t)}catch{}}async _taskGameConstants(){let e=this._gameAddr();if(!e)return;let t=[`SERIES_A_DURATION`,`SERIES_A_PROTOCOL`,`SERIES_A_REFERRAL`,`SERIES_A_PRIZE`,`SERIES_B_PROTOCOL`,`SERIES_B_REFERRAL`,`SERIES_B_PRIZE`,`PUMP_PROTOCOL`,`PUMP_REFERRAL`,`PUMP_PRIZE`],n=[];for(let r of t)try{n.push(),await R(t=>t.readContract({address:e,abi:z,functionName:r}),this._chainId),await new Promise(e=>{setTimeout(e,80)})}catch{n.push(0n)}this.gameConstants={SERIES_A_DURATION:n[0],SERIES_A_PROTOCOL:n[1],SERIES_A_REFERRAL:n[2],SERIES_A_PRIZE:n[3],SERIES_B_PROTOCOL:n[4],SERIES_B_REFERRAL:n[5],SERIES_B_PRIZE:n[6],PUMP_PROTOCOL:n[7],PUMP_REFERRAL:n[8],PUMP_PRIZE:n[9]},this._dispatch()}_queueVcDiscovery(e){let t=this._gameAddr();t&&bd(t).then(async()=>{let n=await xd();for(let r=e-1n;r>=1n;r--){let e=Number(r),i=`vc:discover:${e}`;if(!this._q.has(`cycle:winner:${r}`)&&!V.has(`game:winner:${r}`)){let e=r;this._q.upsert({key:`cycle:winner:${e}`,continuous:!1,updates:[`game:winner:${e}`],fn:()=>this._taskCycleWinner(e)}),this._q.upsert({key:`cycle:prize:${e}`,continuous:!1,updates:[`game:prize:${e}`],fn:()=>this._taskCyclePrize(e)})}if(this._q.has(i))continue;let a=n.find(t=>t.cycle===e);if(a){let t=a.vibecoinAddress.toLowerCase();this._vcStatic.has(t)||this._queueVcStatic(a.vibecoinAddress,e),this._vcDynamic.has(t)||this._queueVcHistorical(a.vibecoinAddress);continue}let o=r;this._q.upsert({key:i,continuous:!1,fn:async()=>{try{let e=await R(e=>e.readContract({address:t,abi:z,functionName:`vibecoinByCycle`,args:[o]}),this._chainId);if(!e||e===Zd)return;await vd({cycle:Number(o),vibecoinAddress:e,K:0n,winner:null,prizeAmount:0n,blockNumber:0n}),this._vcStatic.has(e.toLowerCase())||this._queueVcStatic(e,Number(o)),this._vcDynamic.has(e.toLowerCase())||this._queueVcHistorical(e)}catch{}}})}}).catch(()=>{})}_queueVcStatic(e,t){let n=e.toLowerCase();this._vcStaticQueued.has(n)||(this._vcStaticQueued.add(n),U(`token:${n}:cycle`,t),U(`vibecoins:byCycle:${t}`,e),this._q.prepend({key:`vc:static:seed:${n}`,continuous:!1,fn:()=>this._taskVcSeed(e,t)}),this._q.prepend({key:`vc:static:name:${n}`,continuous:!1,fn:()=>this._taskVcName(e,t)}),this._q.prepend({key:`vc:static:sym:${n}`,continuous:!1,fn:()=>this._taskVcSymbol(e,t)}),this._q.prepend({key:`vc:static:K:${n}`,continuous:!1,fn:()=>this._taskVcStaticK(e,t)}),this._q.prepend({key:`vc:static:P0:${n}`,continuous:!1,fn:()=>this._taskVcStaticP0(e,t)}))}_mergeVcStatic(e,t){let n={...this._vcStaticPartial.get(e)??{},...t};this._vcStaticPartial.set(e,n),n.seed!==void 0&&n.name!==void 0&&n.symbol!==void 0&&n.K!==void 0&&n.P0!==void 0&&n.cycle!==void 0&&this._vcStatic.set(e,n)}async _taskVcSeed(e,t){try{let n=await R(t=>t.readContract({address:e,abi:B,functionName:`seed`}),this._chainId),r=e.toLowerCase();this._mergeVcStatic(r,{seed:n,cycle:t});let i=dd(n);U(`token:${r}:seed`,n),U(`token:${r}:palette`,i),this._rebuildVibecoins()}catch{}}async _taskVcName(e,t){try{let n=await R(t=>t.readContract({address:e,abi:B,functionName:`name`}),this._chainId),r=e.toLowerCase();this._mergeVcStatic(r,{name:n,cycle:t}),U(`token:${r}:name`,n),this._rebuildVibecoins()}catch{}}async _taskVcSymbol(e,t){try{let n=await R(t=>t.readContract({address:e,abi:B,functionName:`symbol`}),this._chainId),r=e.toLowerCase();this._mergeVcStatic(r,{symbol:n,cycle:t}),U(`token:${r}:symbol`,n),this._rebuildVibecoins()}catch{}}async _taskVcStaticK(e,t){try{let n=await R(t=>t.readContract({address:e,abi:B,functionName:`K`}),this._chainId),r=e.toLowerCase();this._mergeVcStatic(r,{K:n,cycle:t}),U(`token:${r}:K`,n),this._rebuildVibecoins()}catch{}}async _taskVcStaticP0(e,t){try{let n=await R(t=>t.readContract({address:e,abi:B,functionName:`P0`}),this._chainId),r=e.toLowerCase();this._mergeVcStatic(r,{P0:n,cycle:t}),U(`token:${r}:P0`,n),this._rebuildVibecoins()}catch{}}_queueVcHistorical(e){let t=e.toLowerCase();this._vcHistQueued.has(t)||(this._vcHistQueued.add(t),this._q.upsert({key:`vc:hist:unlocked:${t}`,continuous:!1,fn:()=>this._taskVcUnlocked(e)}),this._q.upsert({key:`vc:hist:supply:${t}`,continuous:!1,fn:()=>this._taskVcField(e,`totalSupply`)}),this._q.upsert({key:`vc:hist:pool:${t}`,continuous:!1,fn:()=>this._taskVcField(e,`poolBalance`)}),this._q.upsert({key:`vc:hist:ath:${t}`,continuous:!1,fn:()=>this._taskVcField(e,`athPrice`)}),this._q.upsert({key:`vc:hist:athPostRug:${t}`,continuous:!1,fn:()=>this._taskVcAthPostRug(e)}),this._q.upsert({key:`vc:hist:totalvol:${t}`,continuous:!1,fn:()=>this._taskVcField(e,`totalVolume`)}),this._q.upsert({key:`vc:hist:vol24h:${t}`,continuous:!1,fn:()=>this._taskVcField(e,`volume24h`)}))}_queueVcContinuous(e){let t=e.toLowerCase();this._q.upsert({key:`vc:supply:${t}`,continuous:!0,updates:[`token:${t}:totalSupply`],fn:()=>this._taskVcField(e,`totalSupply`)}),this._q.upsert({key:`vc:pool:${t}`,continuous:!0,updates:[`token:${t}:poolBalance`],fn:()=>this._taskVcField(e,`poolBalance`)}),this._q.upsert({key:`vc:ath:${t}`,continuous:!0,updates:[`token:${t}:athPrice`],fn:()=>this._taskVcField(e,`athPrice`)}),this._q.upsert({key:`vc:totalvol:${t}`,continuous:!0,updates:[`token:${t}:totalVolume`],fn:()=>this._taskVcField(e,`totalVolume`)}),this._q.upsert({key:`vc:vol24h:${t}`,continuous:!0,updates:[`token:${t}:volume24h`],fn:()=>this._taskVcField(e,`volume24h`)}),this._q.upsert({key:`vc:unlocked:${t}`,continuous:!0,updates:[`token:${t}:unlocked`],fn:()=>this._taskVcUnlocked(e)})}async _taskVcField(e,t){try{let n=await R(n=>n.readContract({address:e,abi:B,functionName:t}),this._chainId),r=e.toLowerCase(),i=this._vcDynamic.get(r)??{};this._vcDynamic.set(r,{...i,[t]:n}),U(`token:${r}:${t}`,n),this._rebuildVibecoins()}catch{}}async _taskVcUnlocked(e){try{let t=await R(t=>t.readContract({address:e,abi:B,functionName:`unlocked`}),this._chainId),n=e.toLowerCase(),r=this._vcDynamic.get(n)??{};this._vcDynamic.set(n,{...r,unlocked:t}),U(`token:${n}:unlocked`,t),this._rebuildVibecoins(),t&&this._q.remove(`vc:unlocked:${n}`)}catch{}}async _taskVcAthPostRug(e){try{let t=await R(t=>t.readContract({address:e,abi:B,functionName:`athPostRug`}),this._chainId),n=e.toLowerCase(),r=this._vcDynamic.get(n)??{};this._vcDynamic.set(n,{...r,athPostRug:t}),U(`token:${n}:athPostRug`,t),this._rebuildVibecoins()}catch{}}_rebuildVibecoins(){let e=[],t={};for(let[n,r]of this._vcStatic.entries()){let i=this._vcDynamic.get(n);if(!i)continue;let a=dd(r.seed);t[`token:${n}:palette`]=a,e.push({address:n,seed:r.seed,name:r.name,symbol:r.symbol,cycle:r.cycle,unlocked:i.unlocked??!1,totalSupply:i.totalSupply??0n,poolBalance:i.poolBalance??0n,K:r.K,P0:r.P0,athPrice:i.athPrice??0n,athPostRug:i.athPostRug??!1,totalVolume:i.totalVolume??0n,volume24h:i.volume24h??0n,palette:a})}if(this.vibecoins=e.sort((e,t)=>t.cycle-e.cycle),ld({...t,"vibecoins:addresses":this.vibecoins.map(e=>e.address)}),L&&this._phase===0&&this._cycle>0n){let t=Number(this._cycle)-1;e.some(e=>e.cycle===t)&&!this._q.has(`user:prevVcBal`)&&this._queueUserTasks(!1)}this._dispatch()}_queueUserTasks(e){if(!L)return;let t=e?e=>this._q.prepend(e):e=>this._q.upsert(e);t({key:`user:mon`,continuous:!1,fn:()=>this._taskUserMon()}),t({key:`user:shmon`,continuous:!1,fn:()=>this._taskUserShmon()}),t({key:`user:fomonBal`,continuous:!1,fn:()=>this._taskUserFomonBal()}),t({key:`user:fomonOptedIn`,continuous:!1,fn:()=>this._taskUserFomonOptedIn()}),t({key:`user:fomonClaimable`,continuous:!1,fn:()=>this._taskUserFomonClaimable()}),t({key:`user:referralEarned`,continuous:!1,fn:()=>this._taskUserReferralEarned()}),t({key:`user:seriesADep`,continuous:!1,fn:()=>this._taskUserSeriesADeposit()}),t({key:`user:seriesBDep`,continuous:!1,fn:()=>this._taskUserSeriesBDeposit()}),t({key:`user:referralCode`,continuous:!1,fn:()=>this._taskUserReferralCode()});let n=this.gameState?.vibecoin;n&&n!==Zd&&(t({key:`user:vcBal`,continuous:!1,fn:()=>this._taskUserVcBal(n)}),t({key:`user:vcEarned`,continuous:!1,fn:()=>this._taskUserVcEarned(n)}),t({key:`user:vcOptedIn`,continuous:!1,fn:()=>this._taskUserVcOptedIn(n)}));let r=this.gameState?.phase,i=this.gameState?.cycle??0n;if(r===0&&i>0n){let e=this.vibecoins.find(e=>e.cycle===Number(i)-1);if(e){let n=e.address;t({key:`user:prevVcBal`,continuous:!1,fn:()=>this._taskUserVcBal(n)}),t({key:`user:prevVcEarned`,continuous:!1,fn:()=>this._taskUserVcEarned(n)}),t({key:`user:prevVcOptedIn`,continuous:!1,fn:()=>this._taskUserVcOptedIn(n)})}}}async _taskUserMon(){let e=L;if(e)try{let t=await R(t=>t.getBalance({address:e.address}),this._chainId),n=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),monBalance:t},U(`token:native:balance:${n}`,t),this._dispatch()}catch{}}async _taskUserShmon(){let e=L;if(!e)return;let t=I[this._chainId];if(t)try{let n=await R(n=>n.readContract({address:t.shmon,abi:ad,functionName:`balanceOf`,args:[e.address]}),this._chainId),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),shmonBalance:n},U(`token:${t.shmon.toLowerCase()}:balance:${r}`,n),this._dispatch()}catch{}}async _taskUserFomonBal(){let e=L;if(!e)return;let t=I[this._chainId];if(t)try{let n=await R(n=>n.readContract({address:t.fomon,abi:id,functionName:`balanceOf`,args:[e.address]}),this._chainId),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),fomonBalance:n},U(`token:${t.fomon.toLowerCase()}:balance:${r}`,n),this._dispatch()}catch{}}async _taskUserFomonOptedIn(){let e=L;if(!e)return;let t=I[this._chainId];if(t)try{let n=await R(n=>n.readContract({address:t.fomon,abi:id,functionName:`optedIn`,args:[e.address]}),this._chainId),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),fomonOptedIn:n},U(`user:${r}:fomonOptedIn`,n),this._dispatch()}catch{}}async _taskUserFomonClaimable(){let e=L;if(!e)return;let t=I[this._chainId];if(t)try{let n=await R(n=>n.readContract({address:t.fomon,abi:id,functionName:`pendingRewards`,args:[e.address]}),this._chainId),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),fomonClaimable:n},U(`user:${r}:fomonClaimable`,n),this._dispatch()}catch{}}async _taskUserReferralEarned(){let e=L;if(!e)return;let t=this._gameAddr();if(t)try{let n=await R(n=>n.readContract({address:t,abi:z,functionName:`referralEarned`,args:[e.address]}),this._chainId),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),referralEarned:n},U(`user:${r}:referralEarned`,n),this._dispatch()}catch{}}async _taskUserSeriesADeposit(){let e=L;if(!e)return;let t=this._gameAddr();if(!t)return;let n=this.gameState;if(n)try{let r=await R(r=>r.readContract({address:t,abi:z,functionName:`seriesADeposits`,args:[n.cycle,e.address]}),this._chainId),i=e.address.toLowerCase(),a=n.cycle.toString();this.userState={...this.userState??this._emptyUser(),seriesADeposit:r},ld({[`user:${i}:seriesADeposit`]:r,[`game:seriesADeposit:${a}:${i}`]:r}),this._dispatch()}catch{}}async _taskUserSeriesBDeposit(){let e=L;if(!e)return;let t=this._gameAddr();if(!t)return;let n=this.gameState;if(n)try{let r=await R(r=>r.readContract({address:t,abi:z,functionName:`seriesBDeposits`,args:[n.cycle,e.address]}),this._chainId),i=e.address.toLowerCase(),a=n.cycle.toString();this.userState={...this.userState??this._emptyUser(),seriesBDeposit:r},ld({[`user:${i}:seriesBDeposit`]:r,[`game:seriesBDeposit:${a}:${i}`]:r}),this._dispatch()}catch{}}async _taskUserReferralCode(){let e=L;if(!e)return;let t=this._gameAddr();if(t)try{let n=Hd(await R(n=>n.readContract({address:t,abi:z,functionName:`referralCodeOf`,args:[e.address]}),this._chainId)),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),referralCode:n},U(`user:${r}:referralCode`,n),this._dispatch()}catch{}}async _taskUserVcBal(e){let t=L;if(t)try{let n=await R(n=>n.readContract({address:e,abi:B,functionName:`balanceOf`,args:[t.address]}),this._chainId),r=t.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),vcBalance:n},U(`token:${e.toLowerCase()}:balance:${r}`,n),this._dispatch()}catch{}}async _taskUserVcEarned(e){let t=L;if(t)try{let n=await R(n=>n.readContract({address:e,abi:B,functionName:`earned`,args:[t.address]}),this._chainId),r=t.address.toLowerCase();U(`token:${e.toLowerCase()}:dividendsClaimable:${r}`,n),this._dispatch()}catch{}}async _taskUserVcOptedIn(e){let t=L;if(t)try{let n=await R(n=>n.readContract({address:e,abi:B,functionName:`optedIn`,args:[t.address]}),this._chainId),r=t.address.toLowerCase();U(`token:${e.toLowerCase()}:optedIn:${r}`,n),this._dispatch()}catch{}}async _taskTokensSeriesA(e){let t=this._gameAddr();if(t)try{let n=await R(n=>n.readContract({address:t,abi:z,functionName:`tokensSeriesAByCycle`,args:[e]}),this._chainId);ld({"game:tokensSeriesA":n,[`game:tokensSeriesA:${e}`]:n}),this._dispatch()}catch{}}async _taskTokensSeriesB(e){let t=this._gameAddr();if(t)try{let n=await R(n=>n.readContract({address:t,abi:z,functionName:`tokensSeriesBByCycle`,args:[e]}),this._chainId);ld({"game:tokensSeriesB":n,[`game:tokensSeriesB:${e}`]:n}),this._dispatch()}catch{}}async _taskTokensSeriesAHist(e){let t=this._gameAddr();if(t)try{let n=await R(n=>n.readContract({address:t,abi:z,functionName:`tokensSeriesAByCycle`,args:[e]}),this._chainId);U(`game:tokensSeriesA:${e}`,n),this._dispatch()}catch{}}async _taskTokensSeriesBHist(e){let t=this._gameAddr();if(t)try{let n=await R(n=>n.readContract({address:t,abi:z,functionName:`tokensSeriesBByCycle`,args:[e]}),this._chainId);U(`game:tokensSeriesB:${e}`,n),this._dispatch()}catch{}}async _taskCycleWinner(e){let t=this._gameAddr();if(!t)return;let n=e.toString();try{let r=await R(n=>n.readContract({address:t,abi:z,functionName:`winnerByCycle`,args:[e]}),this._chainId),i=r===Zd?null:r;if(U(`game:winner:${n}`,i),i){let e=`cycle:winnercode:${n}`;this._q.has(e)||this._q.upsert({key:e,continuous:!1,updates:[`user:${i.toLowerCase()}:referralCode`],fn:()=>this._taskWinnerCode(i)})}this._dispatch()}catch{}}async _taskCyclePrize(e){let t=this._gameAddr();if(!t)return;let n=e.toString();try{let r=await R(n=>n.readContract({address:t,abi:z,functionName:`prizeByCycle`,args:[e]}),this._chainId);U(`game:prize:${n}`,r),this._dispatch()}catch{}}async _taskWinnerCode(e){let t=this._gameAddr();if(t)try{let n=await R(n=>n.readContract({address:t,abi:z,functionName:`referralCodeOf`,args:[e]}),this._chainId);U(`user:${e.toLowerCase()}:referralCode`,Hd(n)),this._dispatch()}catch{}}_emptyUser(){return{monBalance:0n,shmonBalance:0n,fomonBalance:0n,fomonOptedIn:!1,fomonClaimable:0n,vcBalance:0n,seriesADeposit:0n,seriesBDeposit:0n,referralEarned:0n,referralCode:null}}},Qd=25,$d=5,ef=1,tf=60,nf=90,rf=class extends HTMLElement{constructor(...e){super(...e),this._phosphor=null,this._rafId=0,this._subscribedKeys=[],this._subscribedVcAddrLow=``,this._marqueeX=0,this._marqueeText=`GENERATING VIBECOIN`,this._marqueeColor=`rgba(255,230,0,0.9)`,this._candles=[],this._loadingVcAddr=``,this._currentVcAddr=``,this._K=0n,this._P0=0n,this._onLiveUpdate=()=>{let e=`0x0000000000000000000000000000000000000000`,t=V.get(`game:phase`),n=V.get(`game:cycle`)??0n,r=V.get(`game:phaseEndTime`)??0n,i=V.get(`meta:chainTimeDelta`)??0,a=V.get(`game:vibecoin`)??e,o=V.get(`vibecoins:addresses`)??[],s=Date.now()/1e3+i,c=t===0&&r>0n?Number(r)-s:1/0,l=t===0&&n>1n&&(r===0n||c>3600),u=a.toLowerCase();l?(this._marqueeText=`GET RUGGED`,this._marqueeColor=`rgba(255,45,107,0.9)`):t===2&&s<Number(r)?(this._marqueeText=`PUMP ${V.get(`token:${u}:name`)??`???`}! \u2014 $${V.get(`token:${u}:symbol`)??`???`} TO THE MOON`,this._marqueeColor=`rgba(0,229,255,0.9)`):t===3||t===2&&s>=Number(r)?(this._marqueeText=`GET RUGGED`,this._marqueeColor=`rgba(255,45,107,0.9)`):(this._marqueeText=`GENERATING VIBECOIN`,this._marqueeColor=`rgba(255,230,0,0.9)`);let d=Number(n)-1,f=l?o.find(e=>V.get(`token:${e.toLowerCase()}:cycle`)===d)??o[o.length-1]??null:null,p=(l?f:a)??a,m=p.toLowerCase();if(p!==this._currentVcAddr&&m!==e){this._currentVcAddr=p,this._K=V.get(`token:${m}:K`)??0n,this._P0=V.get(`token:${m}:P0`)??0n,this._candles=[],this._resyncVcSubscriptions(m);let e=this._buf.width||Math.ceil(window.innerWidth/Qd);this._startCandleLoad(p,this._K,this._P0,Math.ceil(e/$d)+2)}let h=V.get(`token:${m}:totalSupply`);if(h!==void 0&&this._candles[0]){let e=Number(this._P0+this._K*h/10n**18n),t=this._candles[0];this._candles[0]={open:t.open,close:e,high:Math.max(t.high,e),low:Math.min(t.low,e)}}}}connectedCallback(){this.style.cssText=`position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden`,this._canvas=document.createElement(`canvas`),this._canvas.style.cssText=`display:block;width:100%;height:100%`,this.appendChild(this._canvas),this._ctx=this._canvas.getContext(`2d`),this._buf=document.createElement(`canvas`),this._bCtx=this._buf.getContext(`2d`),this._bloom=document.createElement(`canvas`),this._blCtx=this._bloom.getContext(`2d`),this._ro=new ResizeObserver(()=>this._onResize()),this._ro.observe(this),this._subscribedKeys=[`game:phase`,`game:cycle`,`game:phaseEndTime`,`game:vibecoin`,`meta:chainTimeDelta`,`vibecoins:addresses`];for(let e of this._subscribedKeys)sd(e);window.addEventListener(`live-values-updated`,this._onLiveUpdate),this._onLiveUpdate(),this._startAnimation()}disconnectedCallback(){cancelAnimationFrame(this._rafId),this._ro.disconnect(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate);for(let e of this._subscribedKeys)H(e);this._subscribedKeys=[]}_onResize(){let e=Math.round(this.offsetWidth),t=Math.round(this.offsetHeight);if(!e||!t)return;this._canvas.width=e,this._canvas.height=t,this._bloom.width=e,this._bloom.height=t;let n=Math.ceil(e/Qd),r=Math.ceil(t/Qd);this._buf.width=n,this._buf.height=r;let i=document.createElement(`canvas`);i.width=Qd,i.height=Qd;let a=i.getContext(`2d`),o=Qd-4,s=Math.floor(o/3);a.fillStyle=`#000`,a.fillRect(0,0,Qd,Qd),a.fillStyle=`rgb(255,0,0)`,a.fillRect(2,2,s,o),a.fillStyle=`rgb(0,255,0)`,a.fillRect(2+s,2,s,o),a.fillStyle=`rgb(0,0,255)`,a.fillRect(2+s*2,2,s,o),this._phosphor=this._ctx.createPattern(i,`repeat`);let c=Math.ceil(n/$d)+2;c>this._candles.length&&this._currentVcAddr&&this._startCandleLoad(this._currentVcAddr,this._K,this._P0,c)}_resyncVcSubscriptions(e){let t=[`name`,`symbol`,`K`,`P0`,`totalSupply`].map(e=>`token:${this._subscribedVcAddrLow}:${e}`);for(let e of t){let t=this._subscribedKeys.indexOf(e);t>=0&&(H(e),this._subscribedKeys.splice(t,1))}if(e){let t=[`name`,`symbol`,`K`,`P0`,`totalSupply`].map(t=>`token:${e}:${t}`);for(let e of t)sd(e),this._subscribedKeys.push(e)}this._subscribedVcAddrLow=e}_startCandleLoad(e,t,n,r){this._loadingVcAddr=e,setTimeout(()=>{this._loadingVcAddr===e&&this._loadCandles(e,t,n,r)},3e3)}_enqueueRpc(e,t){return new Promise((n,r)=>{W.enqueue(e,async()=>{try{n(await t())}catch(e){r(e)}})})}async _loadCandles(e,t,n,r){let i=$u(F),a=10n**18n,o,s;try{let t=await this._enqueueRpc(`candle:${e}:ref`,()=>i.getBlock());o=t.number,s=Number(t.timestamp)}catch{return}if(this._loadingVcAddr!==e)return;let c=150n;try{let t=await this._enqueueRpc(`candle:${e}:probe`,()=>i.getBlock({blockNumber:o-50n})),n=s-Number(t.timestamp);n>0&&(c=BigInt(Math.round(50*tf/n)))}catch{}if(this._loadingVcAddr!==e)return;let l=[];for(let s=0;s<=r;s++){if(this._loadingVcAddr!==e)return;let r=o-BigInt(s)*c;if(r<0n){l.push(null);continue}try{let o=await this._enqueueRpc(`candle:${e}:s${s}`,()=>i.readContract({address:e,abi:B,functionName:`totalSupply`,blockNumber:r}));l.push(Number(n+t*o/a))}catch{l.push(null)}}if(this._loadingVcAddr===e)for(let e=0;e<r;e++){let t=l[e],n=l[e+1];t!==null&&n!==null&&(this._candles[e]={close:t,open:n,high:Math.max(t,n),low:Math.min(t,n)})}}_startAnimation(){let e=performance.now(),t=n=>{let r=(n-e)/1e3;e=n,this._marqueeX-=nf*r,this._draw(),this._rafId=requestAnimationFrame(t)};this._rafId=requestAnimationFrame(t)}_draw(){let e=this._canvas.width,t=this._canvas.height,n=this._buf.width,r=this._buf.height;if(!e||!t||!n||!r)return;let i=this._bCtx;i.fillStyle=`rgb(6,6,8)`,i.fillRect(0,0,n,r),this._drawCandlesBuf(i,n,r),this._drawMarqueeBuf(i,n,r);let a=n*Qd,o=r*Qd,s=this._ctx;s.imageSmoothingEnabled=!1,s.drawImage(this._buf,0,0,a,o),this._phosphor&&(s.globalCompositeOperation=`multiply`,s.fillStyle=this._phosphor,s.fillRect(0,0,a,o),s.globalCompositeOperation=`source-over`);let c=this._blCtx;c.clearRect(0,0,e,t),c.filter=`blur(5px)`,c.drawImage(this._canvas,0,0),c.filter=`none`,s.globalCompositeOperation=`screen`,s.globalAlpha=.35,s.drawImage(this._bloom,0,0),s.globalAlpha=1,s.globalCompositeOperation=`source-over`}_drawCandlesBuf(e,t,n){let r=this._candles.filter(e=>e!==null);if(r.length<2)return;let i=1/0,a=-1/0;for(let e of r)e.low<i&&(i=e.low),e.high>a&&(a=e.high);if(a===i)return;let o=Math.round(n*.1),s=Math.round(n*.1),c=n-o-s,l=e=>n-s-Math.round((e-i)/(a-i)*c);for(let n=0;n<r.length;n++){let i=r[n],a=t-(n+1)*$d;if(a+$d<0)break;e.fillStyle=i.close>=i.open?`rgba(0,229,255,0.2)`:`rgba(255,45,107,0.2)`;let o=a+Math.floor(($d-ef)/2),s=l(i.high),c=l(i.low);e.fillRect(o,s,ef,Math.max(1,c-s));let u=l(Math.max(i.open,i.close)),d=l(Math.min(i.open,i.close));e.fillRect(a,u,$d,Math.max(1,d-u))}}_drawMarqueeBuf(e,t,n){let r=Math.round(n*.8);e.save(),e.font=`${r}px "Bebas Neue", sans-serif`,e.fillStyle=this._marqueeColor,e.textBaseline=`middle`;let i=this._marqueeText+` — `,a=e.measureText(i).width;if(a<1){e.restore();return}let o=(this._marqueeX/Qd%a-a)%a;for(;o<t+a;)e.fillText(i,o,n/2),o+=a;e.restore()}};customElements.get(`app-background`)||customElements.define(`app-background`,rf);var af=globalThis,of=af.ShadowRoot&&(af.ShadyCSS===void 0||af.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,sf=Symbol(),cf=new WeakMap,lf=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==sf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(of&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=cf.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&cf.set(t,e))}return e}toString(){return this.cssText}},uf=e=>new lf(typeof e==`string`?e:e+``,void 0,sf),G=(e,...t)=>new lf(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,sf),df=(e,t)=>{if(of)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=af.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ff=of?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return uf(t)})(e):e,{is:pf,defineProperty:mf,getOwnPropertyDescriptor:hf,getOwnPropertyNames:gf,getOwnPropertySymbols:_f,getPrototypeOf:vf}=Object,yf=globalThis,bf=yf.trustedTypes,xf=bf?bf.emptyScript:``,Sf=yf.reactiveElementPolyfillSupport,Cf=(e,t)=>e,wf={toAttribute(e,t){switch(t){case Boolean:e=e?xf:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Tf=(e,t)=>!pf(e,t),Ef={attribute:!0,type:String,converter:wf,reflect:!1,useDefault:!1,hasChanged:Tf};Symbol.metadata??=Symbol(`metadata`),yf.litPropertyMetadata??=new WeakMap;var Df=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ef){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&mf(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=hf(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ef}static _$Ei(){if(this.hasOwnProperty(Cf(`elementProperties`)))return;let e=vf(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Cf(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Cf(`properties`))){let e=this.properties,t=[...gf(e),..._f(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ff(e))}else e!==void 0&&t.push(ff(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return df(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?wf:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?wf:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Tf)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Df.elementStyles=[],Df.shadowRootOptions={mode:`open`},Df[Cf(`elementProperties`)]=new Map,Df[Cf(`finalized`)]=new Map,Sf?.({ReactiveElement:Df}),(yf.reactiveElementVersions??=[]).push(`2.1.2`);var Of=globalThis,kf=e=>e,Af=Of.trustedTypes,jf=Af?Af.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Mf=`$lit$`,Nf=`lit$${Math.random().toFixed(9).slice(2)}$`,Pf=`?`+Nf,Ff=`<${Pf}>`,If=document,Lf=()=>If.createComment(``),Rf=e=>e===null||typeof e!=`object`&&typeof e!=`function`,zf=Array.isArray,Bf=e=>zf(e)||typeof e?.[Symbol.iterator]==`function`,Vf=`[ 	
\f\r]`,Hf=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Uf=/-->/g,Wf=/>/g,Gf=RegExp(`>|${Vf}(?:([^\\s"'>=/]+)(${Vf}*=${Vf}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Kf=/'/g,qf=/"/g,Jf=/^(?:script|style|textarea|title)$/i,Yf=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),K=Yf(1),Xf=Yf(2),Zf=Symbol.for(`lit-noChange`),q=Symbol.for(`lit-nothing`),Qf=new WeakMap,$f=If.createTreeWalker(If,129);function ep(e,t){if(!zf(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return jf===void 0?t:jf.createHTML(t)}var tp=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Hf;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Hf?c[1]===`!--`?o=Uf:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Gf):(Jf.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Gf):o=Wf:o===Gf?c[0]===`>`?(o=i??Hf,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Gf:c[3]===`"`?qf:Kf):o===qf||o===Kf?o=Gf:o===Uf||o===Wf?o=Hf:(o=Gf,i=void 0);let d=o===Gf&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Hf?n+Ff:l>=0?(r.push(s),n.slice(0,l)+Mf+n.slice(l)+Nf+d):n+Nf+(l===-2?t:d)}return[ep(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},np=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=tp(t,n);if(this.el=e.createElement(l,r),$f.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=$f.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Mf)){let t=u[o++],n=i.getAttribute(e).split(Nf),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?sp:r[1]===`?`?cp:r[1]===`@`?lp:op}),i.removeAttribute(e)}else e.startsWith(Nf)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Jf.test(i.tagName)){let e=i.textContent.split(Nf),t=e.length-1;if(t>0){i.textContent=Af?Af.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Lf()),$f.nextNode(),c.push({type:2,index:++a});i.append(e[t],Lf())}}}else if(i.nodeType===8)if(i.data===Pf)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Nf,e+1))!==-1;)c.push({type:7,index:a}),e+=Nf.length-1}a++}}static createElement(e,t){let n=If.createElement(`template`);return n.innerHTML=e,n}};function rp(e,t,n=e,r){if(t===Zf)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Rf(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=rp(e,i._$AS(e,t.values),i,r)),t}var ip=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??If).importNode(t,!0);$f.currentNode=r;let i=$f.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ap(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new up(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=$f.nextNode(),a++)}return $f.currentNode=If,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ap=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=rp(this,e,t),Rf(e)?e===q||e==null||e===``?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==Zf&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Bf(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&Rf(this._$AH)?this._$AA.nextSibling.data=e:this.T(If.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=np.createElement(ep(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ip(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Qf.get(e.strings);return t===void 0&&Qf.set(e.strings,t=new np(e)),t}k(t){zf(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Lf()),this.O(Lf()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=kf(e).nextSibling;kf(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},op=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=q}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=rp(this,e,t,0),a=!Rf(e)||e!==this._$AH&&e!==Zf,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=rp(this,r[n+o],t,o),s===Zf&&(s=this._$AH[o]),a||=!Rf(s)||s!==this._$AH[o],s===q?e=q:e!==q&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},sp=class extends op{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}},cp=class extends op{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}},lp=class extends op{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=rp(this,e,t,0)??q)===Zf)return;let n=this._$AH,r=e===q&&n!==q||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==q&&(n===q||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},up=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){rp(this,e)}},dp=Of.litHtmlPolyfillSupport;dp?.(np,ap),(Of.litHtmlVersions??=[]).push(`3.3.2`);var fp=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ap(t.insertBefore(Lf(),e),e,void 0,n??{})}return i._$AI(e),i},pp=globalThis,J=class extends Df{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=fp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Zf}};J._$litElement$=!0,J.finalized=!0,pp.litElementHydrateSupport?.({LitElement:J});var mp=pp.litElementPolyfillSupport;mp?.({LitElement:J}),(pp.litElementVersions??=[]).push(`4.2.2`);var Y=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},hp={attribute:!0,type:String,converter:wf,reflect:!1,hasChanged:Tf},gp=(e=hp,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function X(e){return(t,n)=>typeof n==`object`?gp(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function Z(e){return X({...e,state:!0,attribute:!1})}function Q(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var _p=[...z.filter(e=>e.type===`error`),...B.filter(e=>e.type===`error`),...id.filter(e=>e.type===`error`)];function vp(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.data==`string`&&/^0x[0-9a-fA-F]{8,}/.test(t.data)?t.data:t.cause?vp(t.cause):null}var yp=`0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef`,bp=`0x0000000000000000000000000000000000000000`;function xp(e,t){window.dispatchEvent(new CustomEvent(`tx-confirm-show`,{detail:{hash:e,action:t}}))}function Sp(e){let t=e,n=null,r=vp(e);if(r)try{n=ae({abi:_p,data:r}).errorName}catch{}let i=typeof t?.shortMessage==`string`&&t.shortMessage||typeof t?.message==`string`&&t.message.split(`
`)[0]||String(e),a=typeof t?.message==`string`&&t.message||String(e),o=n||typeof t?.name==`string`&&t.name!==`Error`&&t.name||`ERROR`;window.dispatchEvent(new CustomEvent(`app-error-show`,{detail:{short:i,full:a,name:o}}))}var Cp=class extends J{constructor(...e){super(...e),this.open=!1,this.hash=null,this.action=``,this.transfers=null,this.errorMsg=``,this.errorFull=``,this.errorName=``,this._onError=e=>{this.errorMsg=e.detail.short,this.errorFull=e.detail.full,this.errorName=e.detail.name,this.hash=null,this.open=!0},this._onShow=e=>{this.hash=e.detail.hash,this.action=e.detail.action,this.transfers=null,this.open=!0,this._fetchTransfers(e.detail.hash)}}connectedCallback(){super.connectedCallback(),window.addEventListener(`tx-confirm-show`,this._onShow),window.addEventListener(`app-error-show`,this._onError)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`tx-confirm-show`,this._onShow),window.removeEventListener(`app-error-show`,this._onError)}async _fetchTransfers(e){let{connectedWallet:t}=await Xt(async()=>{let{connectedWallet:e}=await Promise.resolve().then(()=>zu);return{connectedWallet:e}},void 0,import.meta.url);if(!t){this.transfers=[];return}let n=I[F],r=$u(F),i=t.address.slice(2).toLowerCase(),a;for(let t=0;t<20;t++){try{if(a=await r.getTransactionReceipt({hash:e}),a)break}catch{}await new Promise(e=>setTimeout(e,800))}if(!a){this.transfers=[];return}W.refresh(),W.refreshUser(),setTimeout(()=>{W.refresh(),W.refreshUser()},1500);let o=a.logs.filter(e=>e.topics[0]?.toLowerCase()===yp&&e.topics[2]?.slice(-40).toLowerCase()===i);if(o.length===0){this.transfers=[];return}let s=[];for(let e of o){let t=e.address,i=`0x`+(e.topics[1]??`0x`).slice(-40),a=BigInt(e.data),o;if(t.toLowerCase()===n.fomon.toLowerCase())o=`foMON`;else if(t.toLowerCase()===n.shmon.toLowerCase())o=`shMON`;else{let e=W.vibecoins.find(e=>e.address.toLowerCase()===t.toLowerCase());if(e)o=e.symbol;else try{o=await r.readContract({address:t,abi:B,functionName:`symbol`})}catch{o=t.slice(0,6)+`...`}}let c=i.toLowerCase()===bp&&t.toLowerCase()===n.fomon.toLowerCase();s.push({symbol:o,amount:a,isAirdrop:c})}this.transfers=s}_close(){this.open=!1}_breakPascal(e){return e.replace(/([a-z])([A-Z])/g,`$1​$2`)}async _copy(){this.hash&&await navigator.clipboard.writeText(this.hash)}static{this.styles=G`
    .overlay {
      position: fixed; inset: 0; z-index: 1000;
      background: rgba(0,0,0,0.7);
      display: flex; align-items: center; justify-content: center;
    }
    .dialog {
      background: rgba(13, 13, 26, 0.97);
      border: 1px solid #ffe60044;
      padding: 28px 28px 24px;
      min-width: min(320px, 100vw - 32px); max-width: min(560px, 100vw - 32px); width: 90%;
      position: relative;
      font-family: 'Share Tech Mono', monospace;
      color: #ccc;
    }
    .close {
      position: absolute; top: 12px; right: 14px;
      background: none; border: none; color: #666; font-size: 20px;
      cursor: pointer; line-height: 1;
    }
    .close:hover { color: #ffe600; }
    .check { color: #ffe600; font-size: 13px; letter-spacing: 1px; margin-bottom: 6px; }
    .action { font-size: 17px; color: #fff; margin-bottom: 18px; line-height: 1.4; }
    .hash-row {
      display: flex; align-items: center; gap: 8px;
      background: #07070f; border: 1px solid #ffffff11;
      padding: 8px 10px; margin-bottom: 4px;
    }
    .hash { font-size: 12px; color: #888; flex: 1; word-break: break-all; }
    .explorer-link { color: #ffe60099; font-size: 11px; text-decoration: underline; white-space: nowrap; }
    .explorer-link:hover { color: #ffe600; }
    .copy-btn {
      background: none; border: 1px solid #ffffff22; color: #888;
      font-size: 10px; padding: 2px 7px; cursor: pointer;
      font-family: inherit; white-space: nowrap;
    }
    .copy-btn:hover { border-color: #ffe60066; color: #ffe600; }
    .divider { border: none; border-top: 1px solid #ffffff11; margin: 18px 0 14px; }
    .transfers-title { font-size: 10px; color: #555; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; }
    .loading { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #555; }
    .spinner {
      width: 14px; height: 14px; flex-shrink: 0;
      border: 2px solid #333; border-top-color: #ffe600;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .transfer {
      display: flex; align-items: center; gap: 8px;
      padding: 6px 0; border-bottom: 1px solid #ffffff08;
    }
    .transfer:last-child { border-bottom: none; }
    .plus { color: #3a3; font-size: 13px; }
    .t-amount { color: #fff; font-size: 14px; }
    .t-symbol { color: #888; font-size: 13px; }
    .airdrop-badge {
      margin-left: auto;
      font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase;
      color: #ffe600; border: 1px solid #ffe60044; padding: 1px 5px;
    }
    .err-icon { color: #ff2d6b; font-size: 24px; letter-spacing: 1px; margin-bottom: 6px; overflow-wrap: break-word; }
    @media (max-width: 500px) { .err-icon { font-size: 18px; } }
    .err-msg { font-size: 14px; color: #ff8899; line-height: 1.5; word-break: break-word; }
    .err-detail {
      margin-top: 16px;
      background: #07070f;
      border: 1px solid #ff2d6b22;
      padding: 10px 12px;
      max-height: 180px;
      overflow-y: auto;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #664455;
      white-space: pre-wrap;
      word-break: break-all;
      line-height: 1.6;
    }
    .dialog.error { border-color: #ff2d6b44; }
  `}render(){if(!this.open)return K``;if(!this.hash)return K`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog error">
          <button class="close" @click=${this._close}>×</button>
          <div class="err-icon">✕&nbsp;${this._breakPascal(this.errorName)}</div>
          <div class="err-msg">${this.errorMsg}</div>
          ${this.errorFull&&this.errorFull!==this.errorMsg?K`
            <div class="err-detail">${this.errorFull}</div>
          `:``}
        </div>
      </div>
    `;let e=I[F],t=this.hash.slice(0,10)+`…`+this.hash.slice(-6),n=e.explorer?`${e.explorer}/tx/${this.hash}`:null;return K`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog">
          <button class="close" @click=${this._close}>×</button>
          <div class="check">${this.transfers===null?K`<span class="spinner" style="display:inline-block;vertical-align:middle;margin-right:6px"></span>PENDING…`:`✓ CONFIRMED`}</div>
          <div class="action">${this.action}</div>

          <div class="hash-row">
            <span class="hash">${t}</span>
            <button class="copy-btn" @click=${this._copy}>copy</button>
            ${n?K`<a class="explorer-link" href=${n} target="_blank">view ↗</a>`:``}
          </div>

          ${this.transfers===null||this.transfers.length>0?K`
            <hr class="divider"/>
            <div class="transfers-title">token transfers</div>
            ${this.transfers===null?K`<div class="loading"><div class="spinner"></div>awaiting confirmation…</div>`:this.transfers.map(e=>K`
                <div class="transfer">
                  <span class="plus">+</span>
                  <span class="t-amount">${Pd(e.amount)}</span>
                  <span class="t-symbol">${e.symbol}</span>
                  ${e.isAirdrop?K`<span class="airdrop-badge">airdrop</span>`:``}
                </div>
              `)}
          `:``}
        </div>
      </div>
    `}};Q([Z()],Cp.prototype,`open`,void 0),Q([Z()],Cp.prototype,`hash`,void 0),Q([Z()],Cp.prototype,`action`,void 0),Q([Z()],Cp.prototype,`transfers`,void 0),Q([Z()],Cp.prototype,`errorMsg`,void 0),Q([Z()],Cp.prototype,`errorFull`,void 0),Q([Z()],Cp.prototype,`errorName`,void 0),Cp=Q([Y(`tx-confirm-dialog`)],Cp);var wp=10n**18n,Tp=class extends J{constructor(...e){super(...e),this._subscribedKeys=new Set,this._onLiveUpdate=e=>{[...this._subscribedKeys].some(t=>e.detail.has(t))&&this.requestUpdate()},this._onDenomChanged=()=>this.requestUpdate()}static{this.styles=G`
    :host { display: contents; }
    .spin {
      display: inline-block;
      width: 0.75em;
      height: 0.75em;
      border: 1.5px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      opacity: 0.4;
      animation: live-spin 0.7s linear infinite;
      vertical-align: middle;
    }
    @keyframes live-spin {
      to { transform: rotate(360deg); }
    }
  `}get spin(){return K`<span class="spin"></span>`}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),window.addEventListener(`denom-changed`,this._onDenomChanged),this._syncSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),window.removeEventListener(`denom-changed`,this._onDenomChanged);for(let e of this._subscribedKeys)H(e);this._subscribedKeys.clear()}updated(e){super.updated(e),this._syncSubscriptions()}_syncSubscriptions(){let e=new Set(this.liveKeys().filter(Boolean));for(let t of this._subscribedKeys)e.has(t)||(H(t),this._subscribedKeys.delete(t));for(let t of e)this._subscribedKeys.has(t)||(sd(t),this._subscribedKeys.add(t))}val(e){return V.get(e)}loaded(...e){return e.every(e=>V.has(e))}},Ep=class extends Tp{constructor(...e){super(...e),this.key=``,this.numerator=1,this.denominator=1}_tokenPrefix(){let e=this.key.match(/^token:(0x[a-fA-F0-9]+|native)/);return e?`token:${e[1]}`:null}liveKeys(){let e=this._tokenPrefix(),t=`token:${I[F].shmon.toLowerCase()}`,n=e??t,r=[this.key,`meta:shmonRate`];return e&&r.push(`${e}:symbol`),n!==t&&n!==`token:native`&&r.push(`${n}:K`,`${n}:P0`,`${n}:totalSupply`),r}render(){if(!this.key)return K`${this.spin}`;let e=`token:${I[F].shmon.toLowerCase()}`,t=this.key.endsWith(`:poolBalance`)?e:this._tokenPrefix()??e,n=wd(),r=n===`mon`?`token:native`:e,i=this.val(`${r}:symbol`)??(n===`mon`?`MON`:`shMON`);if(!this.loaded(this.key))return K`${this.spin} ${i}`;let a=e=>this.numerator!==1||this.denominator!==1?e*BigInt(this.numerator)/BigInt(this.denominator):e,o;if(t===`token:native`){let e=Od();o=e>0n?a(this.val(this.key)??0n)*wp/e:0n}else if(t===e)o=a(this.val(this.key)??0n);else{let e=this.val(`${t}:K`)??0n;o=((this.val(`${t}:P0`)??0n)+e*(this.val(`${t}:totalSupply`)??0n)/wp)*a(this.val(this.key)??0n)/wp}let s=t===r?``:`≈`;return n===`mon`?K`${s}${Nd(o*Od()/wp,i)}`:K`${s}${Nd(o,i)}`}};Q([X()],Ep.prototype,`key`,void 0),Q([X({type:Number})],Ep.prototype,`numerator`,void 0),Q([X({type:Number})],Ep.prototype,`denominator`,void 0),Ep=Q([Y(`live-valuation`)],Ep);var Dp=class extends Tp{constructor(...e){super(...e),this.valueKey=``}_symbolKey(){return this.valueKey.replace(/:(?!0x|native).*$/,`:symbol`)}liveKeys(){return[this.valueKey,this._symbolKey()]}render(){let e=this._symbolKey(),t=this.val(e);return!this.valueKey||!this.loaded(this.valueKey,e)?K`${this.spin}${t?K` $${t}`:``}`:K`${Nd(this.val(this.valueKey)??0n,t??`???`)}`}};Q([X({attribute:`value-key`})],Dp.prototype,`valueKey`,void 0),Dp=Q([Y(`live-token-amount`)],Dp);var Op=class extends Tp{constructor(...e){super(...e),this.valueKey=``}_symbolKey(){return this.valueKey.replace(/:(?!0x|native).*$/,`:symbol`)}liveKeys(){return[this.valueKey,this._symbolKey(),`meta:shmonRate`]}render(){let e=this._symbolKey(),t=this.val(e),n=wd()===`mon`?`MON`:`shMON`;return!this.valueKey||!this.loaded(this.valueKey,e)?K`${this.spin} ${n}${t?K`/$${t}`:``}`:K`${Md(this.val(this.valueKey)??0n,t??`???`)}`}};Q([X({attribute:`value-key`})],Op.prototype,`valueKey`,void 0),Op=Q([Y(`live-token-price`)],Op);var kp=class extends Tp{constructor(...e){super(...e),this.numKey=``,this.demKey=``}liveKeys(){return[this.numKey,this.demKey]}render(){return!this.numKey||!this.demKey||!this.loaded(this.numKey,this.demKey)?K`${this.spin}%`:K`${Rd(this.val(this.numKey)??0n,this.val(this.demKey)??0n)}`}};Q([X({attribute:`num-key`})],kp.prototype,`numKey`,void 0),Q([X({attribute:`dem-key`})],kp.prototype,`demKey`,void 0),kp=Q([Y(`live-percent`)],kp);var Ap=class extends Tp{constructor(...e){super(...e),this.key=``,this.full=!1}liveKeys(){return[this.key]}render(){if(!this.key||!this.loaded(this.key))return K`0x${this.spin}…${this.spin}`;let e=this.val(this.key)??``,t=this.full?e:Fd(e),n=I[F].explorer;return n?K`<a href="${n}/address/${e}" target="_blank" rel="noopener noreferrer">${t}</a>`:K`${t}`}};Q([X()],Ap.prototype,`key`,void 0),Q([X({type:Boolean})],Ap.prototype,`full`,void 0),Ap=Q([Y(`live-address`)],Ap);var jp=class extends Tp{constructor(...e){super(...e),this.key=``,this.fallback=`--`}liveKeys(){return[this.key]}render(){return!this.key||!this.loaded(this.key)?K`${this.spin}`:K`${this.val(this.key)??this.fallback}`}};Q([X()],jp.prototype,`key`,void 0),Q([X()],jp.prototype,`fallback`,void 0),jp=Q([Y(`live-string`)],jp);var Mp=class extends Tp{constructor(...e){super(...e),this.key=``,this.milliseconds=!1,this.warningMs=300*1e3,this._interval=null}static{this.styles=[Tp.styles,G`
      :host(.warning) {
        color: #ff2d6b;
        text-shadow: 0 0 20px #ff2d6b;
        animation: lc-pulse 0.8s ease-in-out infinite;
      }
      @keyframes lc-pulse {
        0%, 100% { opacity: 1; text-shadow: 0 0 24px #ff2d6b; }
        50% { opacity: 0.7; text-shadow: 0 0 8px #ff2d6b; }
      }
    `]}liveKeys(){return[this.key]}connectedCallback(){super.connectedCallback();let e=this.milliseconds?50:1e3;this._interval=setInterval(()=>this.requestUpdate(),e)}disconnectedCallback(){super.disconnectedCallback(),this._interval!==null&&(clearInterval(this._interval),this._interval=null)}render(){if(!this.key||!this.loaded(this.key)){this.classList.remove(`warning`);let e=this.spin;return this.milliseconds?K`${e}:${e}:${e}.${e}`:K`${e}:${e}:${e}`}let e=Number(this.val(this.key)??0n)*1e3-Date.now();return this.classList.toggle(`warning`,e>0&&e<=this.warningMs),K`${(this.milliseconds?Ld:Id)(e)}`}};Q([X()],Mp.prototype,`key`,void 0),Q([X({type:Boolean})],Mp.prototype,`milliseconds`,void 0),Q([X({type:Number,attribute:`warning-ms`})],Mp.prototype,`warningMs`,void 0),Mp=Q([Y(`live-countdown`)],Mp);var Np=class extends Tp{constructor(...e){super(...e),this.prefix=``}liveKeys(){return this.prefix?[`${this.prefix}:K`,`${this.prefix}:P0`,`${this.prefix}:totalSupply`,`meta:shmonRate`]:[]}render(){let e=wd(),t=e===`mon`?`MON`:`shMON`;if(!this.prefix||!this.loaded(`${this.prefix}:K`,`${this.prefix}:P0`,`${this.prefix}:totalSupply`))return K`${this.spin} ${t}`;let n=this.val(`${this.prefix}:K`)??0n,r=this.val(`${this.prefix}:P0`)??0n,i=this.val(`${this.prefix}:totalSupply`)??0n,a=(r+n*i/wp)*i/wp;if(e===`mon`){let e=Od();return K`≈${Nd(e>0n?a*e/wp:0n,`MON`)}`}return K`≈${Nd(a,`shMON`)}`}};Q([X()],Np.prototype,`prefix`,void 0),Np=Q([Y(`live-bonding-mcap`)],Np);var Pp=class extends Tp{constructor(...e){super(...e),this.prefix=``}liveKeys(){return this.prefix?[`${this.prefix}:K`,`${this.prefix}:P0`,`${this.prefix}:totalSupply`,`${this.prefix}:symbol`]:[]}render(){let e=this.val(`${this.prefix}:symbol`);if(!this.prefix||!this.loaded(`${this.prefix}:K`,`${this.prefix}:P0`,`${this.prefix}:totalSupply`))return K`${this.spin}${e?K` shMON/$${e}`:``}`;let t=this.val(`${this.prefix}:K`)??0n,n=(this.val(`${this.prefix}:P0`)??0n)+t*(this.val(`${this.prefix}:totalSupply`)??0n)/wp;return K`${(Number(n)/0xde0b6b3a7640000).toFixed(9)} shMON/$${e??`?`}`}};Q([X()],Pp.prototype,`prefix`,void 0),Pp=Q([Y(`live-bonding-price`)],Pp);var Fp=class extends Tp{constructor(...e){super(...e),this.allocKey=``,this.depositKey=``,this.totalKey=``,this.symbolKey=``}liveKeys(){return[this.allocKey,this.depositKey,this.totalKey,this.symbolKey]}render(){let e=this.val(this.symbolKey);if(!this.allocKey||!this.depositKey||!this.totalKey||!this.loaded(this.allocKey,this.depositKey,this.totalKey))return K`${this.spin}${e?K` $${e}`:``}`;let t=this.val(this.allocKey)??0n,n=this.val(this.depositKey)??0n,r=this.val(this.totalKey)??0n;return r===0n||t===0n?K`—`:K`${Nd(t*n/r,e??`?`)}`}};Q([X({attribute:`alloc-key`})],Fp.prototype,`allocKey`,void 0),Q([X({attribute:`deposit-key`})],Fp.prototype,`depositKey`,void 0),Q([X({attribute:`total-key`})],Fp.prototype,`totalKey`,void 0),Q([X({attribute:`symbol-key`})],Fp.prototype,`symbolKey`,void 0),Fp=Q([Y(`live-series-tokens`)],Fp);var Ip=`fomonad-fomon-visited`,Lp=class extends J{constructor(...e){super(...e),this.open=!1,this.providerOpen=!1,this.referralCode=``,this.activeRefInput=``,this.registerPending=!1,this.claimPending=!1,this.confirmReg=!1,this.regEligError=!1,this.copiedRef=!1,this.copied=!1,this.denomPref=wd(),this._subscribedKeys=[],this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&this.requestUpdate()},this._onDenomChanged=()=>{this.denomPref=wd(),this.requestUpdate()},this._onWalletChanged=()=>{this._resyncKeys(),this.requestUpdate()},this._onDocClick=e=>{e.composedPath().includes(this)||(this.open=!1,this.providerOpen=!1)}}static{this.styles=G`
    :host { display: block; position: relative; }

    /* ---- disconnected ---- */
    .connect-btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #00e5ff;
      background: none;
      border: 1px solid #00e5ff44;
      padding: 8px 16px;
      cursor: pointer;
      transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
    }
    .connect-btn:hover {
      background: rgba(0,229,255,0.08);
      border-color: #00e5ff88;
      box-shadow: 0 0 12px #00e5ff33;
    }

    /* ---- provider list (disconnected dropdown) ---- */
    .provider-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      letter-spacing: 1px;
      color: #d8d8e8;
      background: none;
      border: none;
      border-bottom: 1px solid #252540;
      padding: 10px 0;
      cursor: pointer;
      width: 100%;
      text-align: left;
      transition: color 0.15s;
    }
    .provider-item:last-child { border-bottom: none; }
    .provider-item:hover { color: #00e5ff; }
    .provider-item img { width: 20px; height: 20px; border-radius: 4px; }

    /* ---- address button (connected) ---- */
    .address-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      letter-spacing: 1px;
      color: #d8d8e8;
      background: none;
      border: 1px solid #252540;
      padding: 8px 14px;
      cursor: pointer;
      transition: border-color 0.15s, box-shadow 0.15s;
    }
    .address-btn:hover {
      border-color: #00e5ff44;
      box-shadow: 0 0 10px #00e5ff22;
    }
    .address-btn.active {
      border-color: #00e5ff66;
      box-shadow: var(--glow-cyan);
    }

    .notif-dot {
      width: 7px; height: 7px;
      background: #ff2d6b;
      border-radius: 50%;
      box-shadow: 0 0 6px #ff2d6b;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    .copied-flash {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #00ff9d;
      letter-spacing: 2px;
    }

    /* ---- shared dropdown shell ---- */
    .dropdown {
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      background: rgba(10, 10, 16, 0.97);
      border: 1px solid #252540;
      box-shadow: 0 8px 40px #000a, 0 0 0 1px #00e5ff11;
      min-width: min(300px, calc(100vw - 58px));
      z-index: 200;
      padding: 18px;
    }

    /* ---- account rows ---- */
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 7px 0;
      font-family: 'Share Tech Mono', monospace;
    }
    .row button {
      margin-left: 6px;
    }
    .row .lbl { color: #707088; font-size: 11px; letter-spacing: 1px; }
    .row .val { color: #d8d8e8; font-size: 12px; }
    .row .val.accent { color: #00e5ff; }
    .row .val.gold { color: #ffe600; }

    .divider { border: none; border-top: 1px solid #252540; margin: 10px 0; }

    /* ---- action buttons inside dropdown ---- */
    .action-btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #00e5ff;
      background: none;
      border: 1px solid #00e5ff44;
      padding: 5px 12px;
      cursor: pointer;
      transition: background 0.15s, box-shadow 0.15s;
    }
    .action-btn.red {
      color: #ff2d6b;
      border-color: #ff2d6b44
    }
    .action-btn:hover { background: rgba(0,229,255,0.08); box-shadow: 0 0 8px #00e5ff33; }
    .action-btn.red:hover { background: rgba(255,45,107,0.08); box-shadow: 0 0 8px #ff2d6b33; }
    .action-btn:disabled { opacity: 0.3; cursor: not-allowed; }

    /* ---- denom toggle ---- */
    .denom-toggle {
      display: flex;
      gap: 6px;
    }
    .denom-btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 1px;
      padding: 4px 10px;
      border: 1px solid #252540;
      background: none;
      cursor: pointer;
      color: #707088;
      transition: all 0.15s;
    }
    .denom-btn.active {
      color: #00e5ff;
      border-color: #00e5ff66;
      background: rgba(0,229,255,0.06);
    }

    .ref-input {
      background: #060608;
      border: 1px solid #252540;
      color: #d8d8e8;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      padding: 5px 10px;
      width: 140px;
    }
    .ref-input:focus { outline: none; border-color: #00e5ff66; }

    .status-opted-in  { color: #00ff9d; font-size: 12px; font-family: 'JetBrains Mono', monospace; }
    .status-opted-out { color: #707088; font-size: 12px; font-family: 'JetBrains Mono', monospace; }

    .hint { color: #707088; font-size: 11px; font-family: 'JetBrains Mono', monospace; margin-top: 4px; }
    .hint a { color: #505068; text-decoration: underline; }
    .hint a:hover { color: #00e5ff; }
    .lbl a { color: #505068; text-decoration: underline; font-size: 10px; }
    .lbl a:hover { color: #00e5ff; }
    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 2px;
      color: #505060;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
  `}connectedCallback(){super.connectedCallback(),Vu.addEventListener(`wallet-changed`,this._onWalletChanged),window.addEventListener(`live-values-updated`,this._onLiveUpdate),window.addEventListener(`denom-changed`,this._onDenomChanged),document.addEventListener(`click`,this._onDocClick),this._resyncKeys()}disconnectedCallback(){super.disconnectedCallback(),Vu.removeEventListener(`wallet-changed`,this._onWalletChanged),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),window.removeEventListener(`denom-changed`,this._onDenomChanged),document.removeEventListener(`click`,this._onDocClick);for(let e of this._subscribedKeys)H(e);this._subscribedKeys=[]}_resyncKeys(){for(let e of this._subscribedKeys)H(e);let e=L?.address.toLowerCase()??``,t=I[10143]?.fomon?.toLowerCase()??``;this._subscribedKeys=e?[`token:${t}:balance:${e}`,`user:${e}:fomonOptedIn`,`user:${e}:fomonClaimable`,`user:${e}:referralCode`,`user:${e}:referralEarned`]:[];for(let e of this._subscribedKeys)sd(e)}async _connect(e){await Gu(e),qu(e.info.rdns),await rd(F),this.providerOpen=!1,this.requestUpdate()}_disconnect(){Ku(),Ju(),this.open=!1}_showNotifDot(e,t){if((V.get(`user:${e}:fomonClaimable`)??0n)>0n)return!0;let n=V.get(`token:${t}:balance:${e}`)??0n,r=localStorage.getItem(Ip);return n>0n&&!r}async _copyAddress(){L&&(await navigator.clipboard.writeText(L.address),this.copied=!0,setTimeout(()=>{this.copied=!1},1500))}async _claimFoMon(){let e=I[F],t=nd();if(!(!t||!L)){this.claimPending=!0;try{let n=await t.writeContract({address:e.fomon,abi:id,functionName:`claim`,account:L.address,chain:t.chain});W.refreshUser(),xp(n,`Claimed foMON dividends`)}catch(e){Sp(e)}finally{this.claimPending=!1}}}async _optIn(){let e=I[F],t=nd();if(!(!t||!L))try{let n=await t.writeContract({address:e.fomon,abi:id,functionName:`optIn`,account:L.address,chain:t.chain});W.refreshUser(),xp(n,`Opted in to foMON dividends`)}catch(e){Sp(e)}}async _checkEligAndConfirm(){if(!this.referralCode||!L)return;let e=I[F],t=$u();try{await t.simulateContract({address:e.game,abi:z,functionName:`registerReferral`,args:[Vd(this.referralCode)],account:L.address}),this.regEligError=!1,this.confirmReg=!0}catch{this.regEligError=!0}}async _registerReferral(){if(!this.referralCode||!this.confirmReg)return;let e=I[F],t=nd();if(!(!t||!L)){this.registerPending=!0,this.confirmReg=!1;try{let n=Vd(this.referralCode),r=await t.writeContract({address:e.game,abi:z,functionName:`registerReferral`,args:[n],account:L.address,chain:t.chain}),i=this.referralCode;this.referralCode=``,xp(r,`Registered referral code "${i}"`)}catch(e){Sp(e)}finally{this.registerPending=!1}}}async _copyRefUrl(e){await navigator.clipboard.writeText(`https://fomon.rip/${e}`),this.copiedRef=!0,setTimeout(()=>{this.copiedRef=!1},1500)}_setDenom(e){Td(e),this.denomPref=e}render(){if(!L){let e=Hu;return e.length===0?K`<button class="connect-btn" style="cursor:default;opacity:0.4">NO WALLET</button>`:e.length===1?K`
          <button class="connect-btn" @click=${()=>this._connect(e[0])}>
            ${e[0].info.icon?K`<img src=${e[0].info.icon} alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:6px;border-radius:2px" />`:``}
            CONNECT ${e[0].info.name.toUpperCase()}
          </button>
        `:K`
        <div style="position:relative">
          <button class="connect-btn" @click=${()=>{this.providerOpen=!this.providerOpen}}>
            CONNECT WALLET&nbsp;▾
          </button>
          ${this.providerOpen?K`
            <div class="dropdown" style="min-width:220px;padding:12px 16px">
              <div class="section-label">SELECT WALLET</div>
              ${e.map(e=>K`
                <button class="provider-item" @click=${()=>this._connect(e)}>
                  ${e.info.icon?K`<img src=${e.info.icon} alt="" />`:``}
                  ${e.info.name}
                </button>
              `)}
            </div>
          `:``}
        </div>
      `}let e=L.address.toLowerCase(),t=I[F],n=t?.shmon?.toLowerCase()??``,r=t?.fomon?.toLowerCase()??``,i=V.get(`user:${e}:fomonOptedIn`)??!1,a=V.get(`user:${e}:fomonClaimable`)??0n,o=V.get(`user:${e}:referralCode`)??null,s=V.get(`user:${e}:referralEarned`)??0n,c=this._showNotifDot(e,r);return K`
      <div style="position:relative">
        <button
          class="address-btn ${this.open?`active`:``}"
          @click=${()=>{this.open=!this.open,this.open&&localStorage.setItem(Ip,`1`)}}
        >
          ${c?K`<span class="notif-dot"></span>`:``}
          ${this.copied?K`<span class="copied-flash">COPIED!</span>`:K`<span>${Fd(L.address)}</span>`}
          <span style="color:#505060;font-size:10px">▾</span>
        </button>

        ${this.open?K`
          <div class="dropdown">

            <!-- balances -->
            <div class="row">
              <span class="lbl">MON</span>
              <span class="val"><live-token-amount value-key="token:native:balance:${e}"></live-token-amount></span>
            </div>
            <div class="row">
              <span class="lbl">shMON${t.shmonUrl?K`&nbsp;<a href="${t.shmonUrl}" target="_blank" rel="noopener" title="redeem shMON for MON">Redeem ↗</a>`:``}</span>
              <span class="val"><live-token-amount value-key="token:${n}:balance:${e}"></live-token-amount></span>
            </div>
            <div class="row">
              <span class="lbl">foMON</span>
              <span class="val"><live-token-amount value-key="token:${r}:balance:${e}"></live-token-amount></span>
            </div>

            <hr class="divider" />

            <!-- denomination preference -->
            <div style="margin-bottom:10px">
              <div class="section-label">DISPLAY IN</div>
              <div class="denom-toggle">
                <button class="denom-btn ${this.denomPref===`mon`?`active`:``}" @click=${()=>this._setDenom(`mon`)}>MON</button>
                <button class="denom-btn ${this.denomPref===`shmon`?`active`:``}" @click=${()=>this._setDenom(`shmon`)}>shMON</button>
              </div>
            </div>

            <hr class="divider" />

            <!-- foMON dividend opt-in -->
            <div class="row">
              <span class="lbl">foMON DIVIDENDS</span>
              <span class=${i?`status-opted-in`:`status-opted-out`}>
                ${i?`● OPTED IN`:`○ OUT`}
              </span>
            </div>
            ${i?K`
              <div class="hint" style="text-align:right;margin-top:-2px">Earning shMON dividends</div>
            `:K`
              <div class="row" style="justify-content:flex-end">
                <button class="action-btn" @click=${this._optIn}>OPT IN</button>
              </div>
            `}

            ${a>0n?K`
              <div class="row" style="margin-top:6px">
                <span class="lbl">PENDING shMON</span>
                <span class="val accent"><live-valuation key="user:${e}:fomonClaimable"></live-valuation></span>
              </div>
              <div class="row" style="justify-content:flex-end">
                <button class="action-btn" @click=${this._claimFoMon} ?disabled=${this.claimPending}>${this.claimPending?`CLAIMING…`:`CLAIM`}</button>
              </div>
            `:``}

            <hr class="divider" />

            <!-- active referral code (used in transactions) -->
            <div>
              <div class="section-label">REFERRAL CODE</div>
              <div style="display:flex;gap:6px">
                <input
                  class="ref-input"
                  placeholder=${Gd()??`enter code to use`}
                  .value=${this.activeRefInput}
                  @input=${e=>{this.activeRefInput=e.target.value}}
                />
                <button
                  class="action-btn"
                  @click=${()=>{this.activeRefInput&&(Kd(this.activeRefInput),this.activeRefInput=``,this.requestUpdate())}}
                  ?disabled=${!this.activeRefInput}
                >SET</button>
                ${Gd()?K`
                  <button class="action-btn" style="color:#ff2d6b;border-color:#ff2d6b44"
                    @click=${()=>{qd(),this.requestUpdate()}}>✕</button>
                `:``}
              </div>
              <div class="hint">Credits the referrer on your next transaction</div>
            </div>

            <hr class="divider" />

            <!-- referral registration -->
            <div>
              <div class="section-label">${o?`YOUR REFERRAL CODE`:`REGISTER YOUR CODE`}</div>
              ${o?K`
                <div style="display:flex;gap:6px">
                  <input class="ref-input" readonly .value=${o} style="flex:1;color:#ffe600;cursor:default" />
                  <button class="action-btn" @click=${()=>this._copyRefUrl(o)}>
                    ${this.copiedRef?`COPIED ✓`:`COPY URL`}
                  </button>
                </div>
              `:K`
                <div style="display:flex;gap:6px">
                  <input
                    class="ref-input"
                    placeholder="your code"
                    .value=${this.referralCode}
                    @input=${e=>{this.referralCode=e.target.value,this.confirmReg=!1,this.regEligError=!1}}
                  />
                  <button class="action-btn" @click=${this._checkEligAndConfirm}
                    ?disabled=${!this.referralCode||this.registerPending}
                  >${this.registerPending?`…`:`REG`}</button>
                </div>
                ${this.confirmReg?K`
                  <div class="hint" style="color:#ff2d6b;margin-top:6px">
                    "${this.referralCode}" will be permanently linked to this wallet. Are you sure?
                  </div>
                  <div style="display:flex;gap:6px;margin-top:6px">
                    <button class="action-btn" @click=${this._registerReferral} ?disabled=${this.registerPending}>CONFIRM</button>
                    <button class="action-btn" style="color:#707088;border-color:#70708844" @click=${()=>{this.confirmReg=!1}}>CANCEL</button>
                  </div>
                `:K`
                  <div class="hint" style=${this.regEligError?`color:#ff2d6b`:``}>Eligible if you contributed ≥0.1% to one of the insider rounds of a pre-rugged vibecoin, or if you hold ≥0.1% of a pre-rugged vibecoin's supply.</div>
                `}
              `}
              ${s>0n?K`
                <div class="row">
                  <span class="lbl">REFERRAL EARNED</span>
                  <span class="val gold"><live-valuation key="user:${e}:referralEarned"></live-valuation></span>
                </div>
              `:``}
            </div>

            <hr class="divider" />

            <!-- disconnect -->
            <div class="row" style="justify-content:flex-end">
              <button class="action-btn" @click=${this._copyAddress}>
                ${this.copied?`COPIED ADDRESS ✓`:`COPY ADDRESS`}
              </button>
              <button class="action-btn red" @click=${this._disconnect}>DISCONNECT</button>
            </div>
          </div>
        `:``}
      </div>
    `}};Q([Z()],Lp.prototype,`open`,void 0),Q([Z()],Lp.prototype,`providerOpen`,void 0),Q([Z()],Lp.prototype,`referralCode`,void 0),Q([Z()],Lp.prototype,`activeRefInput`,void 0),Q([Z()],Lp.prototype,`registerPending`,void 0),Q([Z()],Lp.prototype,`claimPending`,void 0),Q([Z()],Lp.prototype,`confirmReg`,void 0),Q([Z()],Lp.prototype,`regEligError`,void 0),Q([Z()],Lp.prototype,`copiedRef`,void 0),Q([Z()],Lp.prototype,`copied`,void 0),Q([Z()],Lp.prototype,`denomPref`,void 0),Lp=Q([Y(`wallet-widget`)],Lp);var Rp=class extends J{constructor(...e){super(...e),this.currentHash=window.location.hash||`#pump`,this._onHash=()=>{this.currentHash=window.location.hash||`#pump`}}static{this.styles=G`
    :host {
      display: block;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 64px;
      background: #060608;
      border-bottom: 1px solid #1e1e38;
      box-shadow: 0 1px 32px rgba(0,229,255,0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      z-index: 100;
    }

    .logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 30px;
      letter-spacing: 3px;
      text-decoration: none;
    }

    .logo .fo  { color: #00e5ff; text-shadow: 0 0 14px #00e5ff88; }
    .logo .mo  { color: #ffe600; text-shadow: 0 0 14px #ffe60088; }
    .logo .nad { color: #ff2d6b; text-shadow: 0 0 14px #ff2d6b88; }

    nav {
      display: flex;
      gap: 32px;
    }

    nav a {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #606070;
      text-decoration: none;
      transition: color 0.15s;
    }

    nav a:hover {
      color: #d8d8e8;
    }

    nav a.active {
      color: #00e5ff;
      text-shadow: 0 0 10px #00e5ff66;
    }

    @media (max-width: 600px) {
      header {
        height: auto;
        padding: 10px 16px;
        flex-wrap: wrap;
      }

      .logo {
        font-size: 24px;
        letter-spacing: 2px;
      }

      nav {
        order: 3;
        width: 100%;
        gap: 24px;
        justify-content: center;
        padding: 8px 0;
        border-top: 1px solid #1e1e38;
        margin-top: 6px;
      }
    }
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`hashchange`,this._onHash)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,this._onHash)}render(){return K`
      <header>
        <a class="logo" href="#pump">
          <span class="fo">FO</span><span class="mo">MO</span><span class="nad">NAD</span>
        </a>
        <nav>
          <a href="#pump" class=${this.currentHash===`#pump`||this.currentHash===``?`active`:``}>PUMP</a>
          <a href="#vibecoins" class=${this.currentHash===`#vibecoins`?`active`:``}>VIBECOINS</a>
        </nav>
        <wallet-widget></wallet-widget>
      </header>
    `}};Q([Z()],Rp.prototype,`currentHash`,void 0),Rp=Q([Y(`header-bar`)],Rp);var zp=class extends J{constructor(...e){super(...e),this.claimPendingA=!1,this.claimPendingB=!1,this._subscribedKeys=[],this._tickInterval=0,this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&this.requestUpdate()},this._onWalletChanged=()=>{this._resyncKeys(),this.requestUpdate()}}static{this.styles=G`
    :host { display: block; }

    .cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    @media (max-width: 600px) {
      .cards { grid-template-columns: 1fr; }
    }

    .card {
      background: rgba(13, 13, 26, 0.97);
      border: 1px solid #252540;
      padding: 20px 22px;
    }

    .card.disabled { opacity: 0.9; }

    .card-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px;
      letter-spacing: 2px;
      color: #ffe600;
      text-shadow: 0 0 12px #ffe60066;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      padding: 6px 0;
      border-bottom: 1px solid #1e1e38;
    }
    .row:last-of-type { border-bottom: none; }
    .row .key { color: #707088; }
    .row .val { color: #d8d8e8; }
    .row .val.highlight { color: #00e5ff; text-shadow: 0 0 8px #00e5ff55; }

    .btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #ffe600;
      background: none;
      border: 1px solid #ffe60066;
      padding: 10px 16px;
      cursor: pointer;
      margin-top: 14px;
      width: 100%;
      transition: background 0.15s, box-shadow 0.15s, border-color 0.15s;
    }
    .btn:hover:not(:disabled) {
      background: rgba(255,230,0,0.08);
      border-color: #ffe600aa;
      box-shadow: 0 0 14px #ffe60033;
    }
    .btn:disabled { opacity: 0.25; cursor: not-allowed; }

    .btn.claim {
      color: #ffe600;
      border-color: #ffe60066;
    }
    .btn.claim:hover:not(:disabled) {
      background: rgba(255,230,0,0.08);
      border-color: #ffe600aa;
      box-shadow: 0 0 14px #ffe60033;
    }

    .meta {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #ffe600;
      margin-top: 8px;
      margin-bottom: 8px;
      letter-spacing: 0px;
    }
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),Vu.addEventListener(`wallet-changed`,this._onWalletChanged),this._resyncKeys(),this._tickInterval=window.setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),Vu.removeEventListener(`wallet-changed`,this._onWalletChanged);for(let e of this._subscribedKeys)H(e);this._subscribedKeys=[],clearInterval(this._tickInterval)}_resyncKeys(){for(let e of this._subscribedKeys)H(e);let e=L?.address.toLowerCase()??``;this._subscribedKeys=[`game:phase`,`game:phaseEndTime`,`game:vibecoin`,`game:cycle`,`meta:chainTimeDelta`],e&&this._subscribedKeys.push(`user:${e}:seriesADeposit`,`user:${e}:seriesBDeposit`);for(let e of this._subscribedKeys)sd(e)}_openBuy(e){window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:e}}))}async _claimA(){let e=V.get(`game:cycle`),t=nd();if(!(!t||!L||e===void 0)){this.claimPendingA=!0;try{let n=I[F],r=await t.writeContract({address:n.game,abi:z,functionName:`claimSeriesATokens`,args:[e],account:L.address,chain:t.chain});W.refresh(),W.refreshUser(),xp(r,`Claimed Insider Vibecoins`)}catch(e){console.error(`Claim A error:`,e)}finally{this.claimPendingA=!1}}}async _claimB(){let e=V.get(`game:cycle`),t=nd();if(!(!t||!L||e===void 0)){this.claimPendingB=!0;try{let n=I[F],r=await t.writeContract({address:n.game,abi:z,functionName:`claimSeriesBTokens`,args:[e],account:L.address,chain:t.chain});W.refresh(),W.refreshUser(),xp(r,`Claimed "Insider" Vibecoins`)}catch(e){console.error(`Claim B error:`,e)}finally{this.claimPendingB=!1}}}_phaseStatus(e){let t=V.get(`game:phase`);if(t!==e)return e<(t??0)?`ENDED`:`PENDING`;let n=V.get(`game:phaseEndTime`)??0n;if(n===0n)return e===0?`DEPOSIT TO KICK OFF (0.1 shMON needed)`:`PENDING`;let r=V.get(`meta:chainTimeDelta`)??0,i=Number(n)-(Date.now()/1e3+r);return i>0?`ENDS IN ${Math.floor(i/3600)}h ${Math.floor(i%3600/60)}m ${Math.floor(i%60)}s`:`ENDED`}render(){let e=L?.address.toLowerCase()??``,t=V.get(`game:phase`)??0,n=t,r=t===0,i=t===1,a=t===2||t===3,o=(V.get(`game:vibecoin`)??``).toLowerCase(),s=V.get(`user:${e}:seriesADeposit`)??0n,c=V.get(`user:${e}:seriesBDeposit`)??0n,l=e?s>0n:!1,u=e?c>0n:!1;return K`
      <div class="cards">
        <!-- Series A -->
        <div class="card ${t>0&&!a?`disabled`:``}">
          <div class="card-title">
            INSIDER PRE-SALE
            <span class="meta">(foMON hodlers only)</span>
          </div>
          <div class="meta">Every deposit gets a proportional slice of the bottom floor</div>

          <div class="row">
            <span class="key">TOTAL DEPOSITED</span>
            <span class="val"><live-valuation key="game:totalSeriesA"></live-valuation></span>
          </div>
          ${e?K`
            <div class="row">
              <span class="key">YOUR DEPOSIT</span>
              <span class="val ${l?`highlight`:``}">
                <live-valuation key="user:${e}:seriesADeposit"></live-valuation>
                (<live-percent num-key="user:${e}:seriesADeposit" dem-key="game:totalSeriesA"></live-percent>)
              </span>
            </div>
          `:``}
          <div class="row">
            <span class="key">STATUS</span>
            <span class="val">${this._phaseStatus(0)}</span>
          </div>

          ${a&&l?K`
            <div class="row">
              <span class="key">YOUR VIBECOINS</span>
              <span class="val highlight">
                <live-series-tokens
                  alloc-key="game:tokensSeriesA"
                  deposit-key="user:${e}:seriesADeposit"
                  total-key="game:totalSeriesA"
                  symbol-key="token:${o}:symbol">
                </live-series-tokens>
              </span>
            </div>
          `:``}

          ${r?K`
            <button class="btn" @click=${()=>this._openBuy(`seriesA`)}>DEPOSIT</button>
            ${n===0&&(V.get(`game:phaseEndTime`)??0n)===0n?K`
              <div class="meta">Your deposit starts the next round.</div>
            `:``}
          `:a&&l?K`
            <button class="btn claim" @click=${this._claimA} ?disabled=${this.claimPendingA}>
              ${this.claimPendingA?`CLAIMING…`:`CLAIM VIBECOINS`}
            </button>
          `:K`
            <button class="btn" disabled>CLOSED</button>
          `}
        </div>

        <!-- Series B -->
        <div class="card ${t<1?`disabled`:``}">
          <div class="card-title">
            "INSIDER" PRE-SALE
            <span class="meta">(Open to all)</span>
          </div>
          <div class="meta">Every deposit gets a proportional slice of the "bottom floor"</div>

          <div class="row">
            <span class="key">TOTAL DEPOSITED</span>
            <span class="val"><live-valuation key="game:totalSeriesB"></live-valuation></span>
          </div>
          ${e?K`
            <div class="row">
              <span class="key">YOUR DEPOSIT</span>
              <span class="val ${u?`highlight`:``}">
                <live-valuation key="user:${e}:seriesBDeposit"></live-valuation>
                (<live-percent num-key="user:${e}:seriesBDeposit" dem-key="game:totalSeriesB"></live-percent>)
              </span>
            </div>
          `:``}
          <div class="row">
            <span class="key">STATUS</span>
            <span class="val">${this._phaseStatus(1)}</span>
          </div>

          ${a&&u?K`
            <div class="row">
              <span class="key">YOUR VIBECOINS</span>
              <span class="val highlight">
                <live-series-tokens
                  alloc-key="game:tokensSeriesB"
                  deposit-key="user:${e}:seriesBDeposit"
                  total-key="game:totalSeriesB"
                  symbol-key="token:${o}:symbol">
                </live-series-tokens>
              </span>
            </div>
          `:``}

          ${i?K`
            <button class="btn" @click=${()=>this._openBuy(`seriesB`)}>DEPOSIT</button>
          `:a&&u?K`
            <button class="btn claim" @click=${this._claimB} ?disabled=${this.claimPendingB}>
              ${this.claimPendingB?`CLAIMING...`:`CLAIM VIBECOINS`}
            </button>
          `:K`
            <button class="btn" disabled>${t<1?`NOT OPEN YET`:`CLOSED`}</button>
          `}
        </div>
      </div>
    `}};Q([Z()],zp.prototype,`claimPendingA`,void 0),Q([Z()],zp.prototype,`claimPendingB`,void 0),zp=Q([Y(`seed-section`)],zp);var Bp=class extends J{constructor(...e){super(...e),this.vcAddress=`0x0000000000000000000000000000000000000000`,this._claimPending=!1,this._optPending=!1,this._subscribedKeys=[],this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&(e.detail.has(`token:${this.vcAddress.toLowerCase()}:cycle`)&&this._resyncKeys(),this.requestUpdate())},this._onWalletChanged=()=>{this._resyncKeys(),this.requestUpdate()}}static{this.styles=G`
    :host { display: block; }

    .panel {
      background: rgba(13, 13, 26, 0.97);
      border: 1px solid #00e5ff4d;
      padding: 20px;
      box-shadow: 0 0 24px #00e5ff1a;
    }

    .header {
      display: flex;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 16px;
    }

    .vc-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 24px;
      letter-spacing: 2px;
      color: #00e5ff;
      text-shadow: 0 0 14px #00e5ff99;
    }

    .vc-ticker {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #707088;
      letter-spacing: 2px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      padding: 6px 0;
      border-bottom: 1px solid #1e1e38;
    }
    .row:last-of-type { border-bottom: none; }
    .row .key { color: #707088; }
    .row .val { color: #d8d8e8; text-align: right; }

    .chart-area {
      margin: 16px 0;
      border: 1px solid #1e1e38;
      background: #060608;
      padding: 8px;
    }

    .chart-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 88px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 2px;
      color: #303040;
    }

    .btn-row {
      display: flex;
      gap: 10px;
      margin-top: 16px;
    }

    .btn {
      flex: 1;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      background: none;
      border: 1px solid;
      padding: 10px;
      cursor: pointer;
      transition: background 0.15s, box-shadow 0.15s;
    }
    .btn.buy { color: #00e5ff; border-color: #00e5ff66; }
    .btn.buy:hover:not(:disabled) { background: rgba(0,229,255,0.08); box-shadow: 0 0 14px #00e5ff33; }
    .btn.sell { color: #ff2d6b; border-color: #ff2d6b66; }
    .btn.sell:hover:not(:disabled) { background: rgba(255,45,107,0.08); box-shadow: 0 0 14px #ff2d6b33; }
    .btn:disabled { opacity: 0.25; cursor: not-allowed; }

    .dividends {
      margin-top: 12px;
      border-top: 1px solid #1e1e38;
      padding-top: 12px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 6px 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
    }
    .div-key { color: #707088; white-space: nowrap; }
    .div-val { color: #00e5ff; text-shadow: 0 0 8px #00e5ff55; text-align: center; }
    @media (max-width: 500px) {
      .dividends { grid-template-columns: 1fr auto; }
      .div-key { grid-column: 1 / -1; }
    }

    .opt-btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 1px;
      padding: 4px 10px;
      background: none;
      cursor: pointer;
      border: 1px solid;
      transition: background 0.15s, box-shadow 0.15s;
    }
    .opt-btn.in { color: #00ff9d; border-color: #00ff9d44; }
    .opt-btn.in:hover { background: rgba(0,255,157,0.08); box-shadow: 0 0 10px #00ff9d33; }
    .opt-btn.out { color: #606070; border-color: #3a3a4a; }
    .opt-btn.out:hover { background: rgba(255,255,255,0.05); }
    .opt-btn:disabled { opacity: 0.25; cursor: not-allowed; }

    .claim-btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 1px;
      padding: 4px 10px;
      color: #ffe600;
      background: none;
      border: 1px solid #ffe60066;
      cursor: pointer;
      transition: background 0.15s, box-shadow 0.15s;
    }
    .claim-btn:hover { background: rgba(255,230,0,0.08); box-shadow: 0 0 10px #ffe60033; }
    .claim-btn:disabled { opacity: 0.25; cursor: not-allowed; }
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),Vu.addEventListener(`wallet-changed`,this._onWalletChanged),this._resyncKeys()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),Vu.removeEventListener(`wallet-changed`,this._onWalletChanged);for(let e of this._subscribedKeys)H(e);this._subscribedKeys=[]}updated(e){e.has(`vcAddress`)&&this._resyncKeys()}_resyncKeys(){for(let e of this._subscribedKeys)H(e);let e=this.vcAddress.toLowerCase(),t=L?.address.toLowerCase()??``,n=V.get(`token:${e}:cycle`);this._subscribedKeys=[`token:${e}:K`,`token:${e}:P0`,`token:${e}:totalSupply`,`token:${e}:symbol`,`token:${e}:unlocked`,`token:${e}:athPrice`,`token:${e}:athPostRug`,`token:${e}:cycle`,`game:phase`],n!==void 0&&this._subscribedKeys.push(`game:tokensSeriesA:${n}`,`game:tokensSeriesB:${n}`),t&&this._subscribedKeys.push(`token:${e}:balance:${t}`,`token:${e}:dividendsClaimable:${t}`,`token:${e}:optedIn:${t}`);for(let e of this._subscribedKeys)sd(e)}async _optToggle(e){let t=nd();if(!(!t||!L)){this._optPending=!0,this.requestUpdate();try{let n=e?`optOut`:`optIn`;xp(await t.writeContract({address:this.vcAddress,abi:B,functionName:n,account:L.address,chain:t.chain}),e?`Opted out of vibes`:`Opted in to vibes`),W.refreshUser()}catch(e){Sp(e)}finally{this._optPending=!1,this.requestUpdate()}}}async _claimDividends(){let e=nd();if(!(!e||!L)){this._claimPending=!0,this.requestUpdate();try{xp(await e.writeContract({address:this.vcAddress,abi:B,functionName:`claimDividends`,args:[L.address],account:L.address,chain:e.chain}),`Claimed vibecoin dividends`),W.refreshUser()}catch(e){console.error(`Claim dividends error:`,e)}finally{this._claimPending=!1,this.requestUpdate()}}}_renderChart(e,t,n,r,i,a,o){let s=n*3n/2n||10n**18n,c=10n**18n,l=[],u=[];for(let n=0;n<=60;n++){let r=s*BigInt(n)/BigInt(60),i=e+t*r/c;l.push(Number(r)/0xde0b6b3a7640000),u.push(Number(i)/1e9)}let d=l[l.length-1]||1,f=Math.max(...u)||1,p=e=>38+e/d*262,m=e=>66-e/f*66,h=l.map((e,t)=>`${t===0?`M`:`L`}${p(e).toFixed(1)},${m(u[t]).toFixed(1)}`).join(` `),g=Math.round(p(Number(n)/0xde0b6b3a7640000)),_=Math.round(p(Number(a))),v=r>0n?p(Number(r)/0xde0b6b3a7640000):null,y=r>0n&&i>0n?p(Number(r+i)/0xde0b6b3a7640000):null,b=e=>String(e).split(``).map(e=>`₀₁₂₃₄₅₆₇₈₉`[+e]).join(``),x=e=>{let t=e/1e9;if(t>=.001)return t.toPrecision(3);let n=t.toFixed(30).split(`.`)[1]??``,r=0;for(let e of n)if(e===`0`)r++;else break;let i=n.slice(r,r+3);return`0.0${b(r-1)}${i}`};return K`
      <div class="chart-area">
        <svg viewBox="0 0 ${300} ${80}" style="width:100%;height:${84}px" font-family="'JetBrains Mono',monospace" font-size="10">
          <!-- Y axis -->
          <line x1="${38}" y1="0" x2="${38}" y2="${66}" stroke="#1e1e38" stroke-width="1" />
          <text x="${36}" y="10" fill="#505060" text-anchor="end">${x(f)}</text>
          <text x="${36}" y="${66}" fill="#505060" text-anchor="end">${x(u[0])}</text>
          <text x="2" y="${66/2}" fill="#404050" text-anchor="middle" transform="rotate(-90,6,${66/2})">shMON</text>

          <!-- X axis -->
          <line x1="${38}" y1="${66}" x2="${300}" y2="${66}" stroke="#1e1e38" stroke-width="1" />
          <text x="${38}" y="${80}" fill="#505060" text-anchor="start">0</text>
          <text x="${300}" y="${80}" fill="#505060" text-anchor="end">${(e=>e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:e.toFixed(0))(d)}</text>

          <!-- Bonding curve -->
          <path d="${h}" fill="none" stroke="#00e5ff" stroke-width="1.5" />

          <!-- Series A boundary -->
          ${v===null?``:Xf`
            <line x1="${v.toFixed(1)}" y1="0" x2="${v.toFixed(1)}" y2="${66}" stroke="#ffe600aa" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${v.toFixed(1)}" y="${78}" fill="#ffe600aa" font-size="9" text-anchor="middle">I</text>
          `}

          <!-- Series B boundary -->
          ${y===null?``:Xf`
            <line x1="${y.toFixed(1)}" y1="0" x2="${y.toFixed(1)}" y2="${66}" stroke="#ffe600aa" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${y.toFixed(1)}" y="${78}" fill="#ffe600aa" font-size="9" text-anchor="middle">"I"</text>
          `}

          <!-- ATH/rug supply -->
          ${a>0n&&Math.abs(_-g)>1?Xf`
            <line x1="${_}" y1="0" x2="${_}" y2="${66}" stroke="${o?`#ff9d00aa`:`#ff2d6baa`}" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${_}" y="${78}" fill="${o?`#ff9d00aa`:`#ff2d6baa`}" font-size="9" text-anchor="middle">${o?`ath`:`rug`}</text>
          `:``}

          <!-- Current supply -->
          <line x1="${g}" y1="0" x2="${g}" y2="${66}" stroke="#00e5ff88" stroke-width="1" stroke-dasharray="3,3" />
          <text x="${g}" y="${78}" fill="#00e5ff88" font-size="9" text-anchor="middle">now</text>
        </svg>
      </div>
    `}render(){let e=this.vcAddress;if(!e||e===`0x0000000000000000000000000000000000000000`)return K`<div style="color:#3a3a4a;font-family:monospace;font-size:11px">No vibecoin active</div>`;let t=e.toLowerCase(),n=L?.address.toLowerCase()??``,r=V.get(`token:${t}:K`)??0n,i=V.get(`token:${t}:P0`)??0n,a=V.get(`token:${t}:totalSupply`)??0n,o=V.get(`token:${t}:unlocked`)??!1,s=V.get(`token:${t}:athPrice`)??0n,c=V.get(`token:${t}:athPostRug`)??!1,l=V.get(`token:${t}:cycle`),u=V.get(`game:phase`)!==void 0,d=l===void 0?``:`game:tokensSeriesA:${l}`,f=l===void 0?``:`game:tokensSeriesB:${l}`,p=(d?V.get(d):void 0)??0n,m=(f?V.get(f):void 0)??0n,h=s>0n&&r>0n&&s>i?(s-i)*10n**18n/r:0n,g=n?V.get(`token:${t}:balance:${n}`)??0n:0n,_=n?V.get(`token:${t}:dividendsClaimable:${n}`)??0n:0n,v=n?V.get(`token:${t}:optedIn:${n}`)??!1:!1,y=o,b=V.has(`token:${t}:K`)&&V.has(`token:${t}:P0`)&&V.has(`token:${t}:totalSupply`);return K`
      <div class="panel">
        <div class="row">
          <span class="key">CURRENT PRICE</span>
          <span class="val"><live-bonding-price prefix="token:${t}"></live-bonding-price></span>
        </div>
        <div class="row">
          <span class="key">TOTAL SUPPLY</span>
          <span class="val"><live-token-amount value-key="token:${t}:totalSupply"></live-token-amount></span>
        </div>
        ${L?K`
          <div class="row">
            <span class="key">YOUR BALANCE</span>
            <span class="val">
              <live-token-amount value-key="token:${t}:balance:${n}"></live-token-amount>
              (<live-percent num-key="token:${t}:balance:${n}" dem-key="token:${t}:totalSupply"></live-percent>,
              <live-valuation key="token:${t}:balance:${n}"></live-valuation>)
            </span>
          </div>
        `:``}

        ${b?this._renderChart(i,r,a,p,m,h,c):K`<div class="chart-area chart-loading">LOADING CHART…</div>`}

        <div class="btn-row">
          <button class="btn buy" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:y?`vibecoin`:`publicBuy`,vibecoinAddress:e}}))}}>BUY</button>
          <button
            class="btn sell"
            @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:`vibecoinSell`,vibecoinAddress:e,tokenBalance:g}}))}}
            ?disabled=${!y||!L||g===0n}
            title=${y?``:`Selling unlocks at rugpull`}
          >SELL</button>
        </div>

        ${u&&!y?K`
          <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#3a3a4a;margin-top:8px;text-align:center">
            Selling unlocks at rugpull
          </div>
        `:``}

        <div class="dividends">
          <span class="div-key">VIBES</span>
          <span class="div-val"><live-token-amount value-key="token:${t}:dividendsClaimable:${n}"></live-token-amount></span>
          <button
            class="claim-btn"
            @click=${this._claimDividends}
            ?disabled=${_===0n||this._claimPending}
          >${this._claimPending?`...`:`CLAIM`}</button>

          <span class="div-key">OPT-IN STATUS</span>
          <span class="div-val" style="color:${v?`#00ff9d`:`#606070`}">
            ${v?`OPTED IN`:`OPTED OUT`}
          </span>
          <button
            class="opt-btn ${v?`out`:`in`}"
            @click=${()=>this._optToggle(v)}
            ?disabled=${this._optPending}
          >${this._optPending?`...`:v?`OPT OUT`:`OPT IN`}</button>
        </div>
      </div>
    `}};Q([X({type:String})],Bp.prototype,`vcAddress`,void 0),Bp=Q([Y(`launch-section`)],Bp);var Vp=class extends J{constructor(...e){super(...e),this.forceSettled=!1,this.triggerPending=!1,this._subscribedKeys=[],this._timerInterval=null,this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&((e.detail.has(`game:lastBuyer`)||e.detail.has(`game:cycle`))&&this._resyncKeys(),e.detail.has(`game:lastBuyer`)&&this._maybeRequestReferralCode(),this.requestUpdate())}}static{this.styles=G`
    :host { display: block; }

    .panel {
      background: rgba(13, 13, 26, 0.97);
      border: 1px solid #ff2d6b33;
      padding: 20px;
      box-shadow: 0 0 20px #ff2d6b12;
    }

    .timer-large {
      font-family: 'Share Tech Mono', monospace;
      font-size: clamp(22px, 8vw, 40px);
      letter-spacing: clamp(1px, 1.2vw, 5px);
      color: #d8d8e8;
      text-align: center;
      padding: 20px 0;
      text-shadow: 0 0 10px rgba(200,200,220,0.3);
    }

    .expired-label {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 40px;
      letter-spacing: 5px;
      color: #ff2d6b;
      text-align: center;
      padding: 20px 0;
      text-shadow: 0 0 24px #ff2d6b;
      animation: flash 1s ease-in-out infinite;
    }
    @keyframes flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    .rugpuller-block {
      text-align: center;
      padding: 16px 0 8px;
      border-bottom: 1px solid #1e1e38;
      margin-bottom: 8px;
    }

    .rugpuller-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 3px;
      color: #606070;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .rugpuller-addr {
      font-family: 'Share Tech Mono', monospace;
      color: #ff2d6b;
      text-shadow: 0 0 12px #ff2d6b66;
      font-size: 10px;
      word-break: break-all;
      text-decoration: none;
    }
    .rugpuller-addr:hover { text-decoration: underline; }

    /* Short (truncated) address — hidden on wide screens */
    .addr-short { font-size: 20px; letter-spacing: 2px; }
    .addr-full  { display: none; font-size: 20px; letter-spacing: 1px; }
    @media (min-width: 620px) {
      .addr-short { display: none; }
      .addr-full  { display: block; }
    }
    @media (min-width: 1000px) {
      .addr-full  { font-size: 24px; }
    }

    .no-buyer {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #3a3a4a;
      text-align: center;
      padding: 16px 0 8px;
      border-bottom: 1px solid #1e1e38;
      margin-bottom: 8px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      padding: 8px 0;
      border-bottom: 1px solid #1e1e38;
    }
    .row:last-of-type { border-bottom: none; }
    .row .key { color: #707088; }
    .row .val { color: #d8d8e8; }

    .cut-note {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #606070;
      text-align: right;
      margin-top: 4px;
    }

    .trigger-btn {
      width: 100%;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px;
      letter-spacing: 4px;
      color: #ff2d6b;
      background: none;
      border: 1px solid #ff2d6b88;
      padding: 16px;
      cursor: pointer;
      margin-top: 16px;
      transition: background 0.15s, box-shadow 0.15s;
      text-shadow: 0 0 10px #ff2d6b66;
    }
    .trigger-btn:hover:not(:disabled) {
      background: rgba(255,45,107,0.08);
      box-shadow: 0 0 24px #ff2d6b44;
      text-shadow: 0 0 20px #ff2d6b;
    }
    .trigger-btn:disabled { opacity: 0.25; cursor: not-allowed; }

    .settled-banner {
      text-align: center;
      padding: 20px;
    }
    .settled-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 32px;
      letter-spacing: 4px;
      color: #ff2d6b;
      text-shadow: 0 0 20px #ff2d6b88;
      margin-bottom: 8px;
    }
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),this._resyncKeys(),this._maybeRequestReferralCode(),this._timerInterval=setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate);for(let e of this._subscribedKeys)H(e);this._subscribedKeys=[],this._timerInterval&&clearInterval(this._timerInterval)}_resyncKeys(){for(let e of this._subscribedKeys)H(e);let e=V.get(`game:cycle`)??0n,t=(V.get(`game:lastBuyer`)??``).toLowerCase(),n=e>0n?e-1n:0n;this._subscribedKeys=[`game:phase`,`game:phaseEndTime`,`game:lastBuyer`,`game:cycle`,`meta:chainTimeDelta`],t&&this._subscribedKeys.push(`user:${t}:referralCode`),this.forceSettled&&e>0n&&this._subscribedKeys.push(`game:winner:${n}`,`game:prize:${n}`);for(let e of this._subscribedKeys)sd(e)}_maybeRequestReferralCode(){let e=V.get(`game:lastBuyer`)??``;e&&window.dispatchEvent(new CustomEvent(`request-referral-code`,{detail:{address:e}}))}async _triggerSettlement(){let e=nd();if(!(!e||!L)){this.triggerPending=!0;try{let t=I[F];xp(await e.writeContract({address:t.game,abi:z,functionName:`triggerSettlement`,account:L.address,chain:e.chain}),`Rugpull triggered — settlement in progress`)}catch(e){Sp(e)}finally{this.triggerPending=!1}}}render(){let e=V.get(`game:phase`);if(e===void 0)return K``;let t=V.get(`game:phaseEndTime`)??0n,n=V.get(`meta:chainTimeDelta`)??0,r=e===2&&t>0n?Math.max(0,Number(t)*1e3-(Date.now()+n*1e3)):0,i=e===3||e===2&&r===0,a=this.forceSettled,o=V.get(`game:cycle`)??0n,s=o>0n?o-1n:0n,c=`0x0000000000000000000000000000000000000000`,l=this.forceSettled?V.get(`game:winner:${s}`)??c:V.get(`game:lastBuyer`)??c,u=this.forceSettled?`game:prize:${s}`:`game:prizePool`,d=V.get(`user:${l.toLowerCase()}:referralCode`),f=I[F].explorer;return K`
      <div class="panel">
        ${a?K`
          <div class="settled-banner">
            <div class="settled-title">RUGPULLED</div>
          </div>
        `:i?K`
          <div class="expired-label">TIMER EXPIRED</div>
        `:K`
          <div class="timer-large">
            <live-countdown key="game:phaseEndTime" milliseconds warning-ms="300000"></live-countdown>
          </div>
        `}

        ${l===c?K`
          <div class="no-buyer">no rugpuller yet</div>
        `:K`
          <div class="rugpuller-block">
            <div class="rugpuller-label">Current Rugpuller${d?K` · <span style="color:#ffe600">${d}</span>`:``}</div>
            ${f?K`
              <a class="rugpuller-addr" href="${f}/address/${l}" target="_blank" rel="noopener noreferrer">
                <span class="addr-short">${Fd(l)}</span>
                <span class="addr-full">${l}</span>
              </a>
            `:K`
              <div class="rugpuller-addr">
                <span class="addr-short">${Fd(l)}</span>
                <span class="addr-full">${l}</span>
              </div>
            `}
          </div>
          <div class="row">
            <span class="key">THEIR CUT</span>
            <span class="val"><live-valuation key="${u}" numerator="90" denominator="100"></live-valuation></span>
          </div>
          <div class="cut-note"><live-valuation key="${u}" numerator="10" denominator="100"></live-valuation> rolls to next cycle</div>
        `}

        ${i&&!a?K`
          <button
            class="trigger-btn"
            @click=${this._triggerSettlement}
            ?disabled=${this.triggerPending||!L}
          >
            ${this.triggerPending?`SETTLING...`:`TRIGGER RUGPULL`}
          </button>
        `:``}
      </div>
    `}};Q([X({type:Boolean})],Vp.prototype,`forceSettled`,void 0),Q([Z()],Vp.prototype,`triggerPending`,void 0),Vp=Q([Y(`rugpull-section`)],Vp);var Hp=`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;function Up(){let e=3+Math.floor(Math.random()*4);return Array.from({length:e},()=>Hp[Math.floor(Math.random()*36)]).join(``)}var Wp=`GENERATING VIBECOIN….BOOTSTRAPPING CONSENSUS….ALIGNING INCENTIVES….MANIFESTING UTILITY….DEPLOYING HOPIUM….CONSULTING THE VIBE ORACLE….LAUNDERING DEGENERACY….DECENTRALIZING SOMETHING….LOADING FUTURE BAGS….SYNCING WITH BLOCKCHAIN™….SOURCING GREATER FOOLS….CALIBRATING RUG TENSION….INFLATING TOKEN METRICS….FABRICATING ROADMAP….ONBOARDING EXIT LIQUIDITY….COMPILING VIBES….TRAINING TOKENOMICS AI….SCHEDULING INFLUENCER POSTS….AUDITING THE UNAUDITABLE….PLAGIARIZING WHITEPAPER….SEEDING TELEGRAM GROUP….RANDOMIZING 'INSURANCE FUND'….GENERATING PLAUSIBLE DENIABILITY….STRESS-TESTING EXIT STRATEGY….TOKENIZING NOTHING….BOOTSTRAPPING ORGANIC COMMUNITY….ACTIVATING ANONYMOUS FOUNDERS….APPLYING GIRLMATH…`.split(`.`),Gp=[{label:`AI Tokens Consumed`,value:e=>e.tokensConsumed.toLocaleString()},{label:`Exit Liquidity Manifested`,value:e=>`${e.exitLiquidity.toLocaleString()} wallets`},{label:`Hopium Injected`,value:e=>`${e.hopium} cc`},{label:`Bag Holders Hallucinated`,value:e=>e.bagHolders.toLocaleString()},{label:`Rug Threads Woven`,value:e=>`${e.rugThreads.toFixed(1)}%`},{label:`Utility`,value:()=>`undefined`},{label:`Financial Advisors Ignored`,value:()=>`1`},{label:`Diamond Hands Detected`,value:()=>`0`},{label:`NFT Royalties Waived`,value:()=>`0`},{label:`Regulatory Gray Areas Exploited`,value:e=>String(e.grayAreas)},{label:`Market Makers Angered`,value:e=>String(e.marketMakers)},{label:`Decentralization Theater`,value:()=>`STAGING`},{label:`Plausible Deniability`,value:e=>`${e.plausibleDeniability}%`},{label:`Whitepaper Pages`,value:()=>`0`},{label:`Legal Opinions Sought`,value:()=>`0`},{label:`Liquidity Lock`,value:()=>`awaiting rugpull`},{label:`Net Cost After Girlmath`,value:()=>`$0 💖`}];function Kp(){return{tokensConsumed:Math.floor(Math.random()*45e5)+5e5,exitLiquidity:Math.floor(Math.random()*15e3)+5e3,hopium:Math.floor(Math.random()*700)+100,bagHolders:Math.floor(Math.random()*2e3)+500,rugThreads:60+Math.random()*25,grayAreas:Math.floor(Math.random()*3)+1,marketMakers:Math.floor(Math.random()*2)+1,plausibleDeniability:Math.floor(Math.random()*40)+60}}var qp=class extends J{constructor(...e){super(...e),this.tokenUri=``,this.lastVibecoin=`0x0000000000000000000000000000000000000000`,this._scrambledTicker=Up(),this._headingIdx=0,this._statIdx=0,this._genStats=Kp(),this.settlePending=!1,this._tickCount=0,this._genInterval=null,this._tickInterval=null,this._subscribedKeys=[],this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&(this._resyncByCycleSub(),this._maybeLoadTokenUri(),this.requestUpdate())}}static{this.styles=G`
    :host { display: block; }

    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 32px 24px;
    }

    .vibecoin-hero {
      text-align: center;
      padding: 40px 20px;
      margin-bottom: 32px;
      border: 1px solid #1a1a30;
      background: rgba(13, 13, 26, 0.97);
      position: relative;
    }

    .vc-svg-wrapper {
      width: 120px;
      height: 120px;
      margin: 0 auto 20px;
      border-radius: 50%;
      overflow: hidden;
      filter: drop-shadow(0 0 20px var(--vc-col1, #00e5ff));
    }

    .vc-svg-wrapper img, .vc-svg-wrapper svg {
      width: 100%;
      height: 100%;
    }

    .vc-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 48px;
      letter-spacing: 4px;
      color: var(--vc-col1, #00e5ff);
      text-shadow: 0 0 20px var(--vc-col1, #00e5ff), 0 0 60px var(--vc-col1, #00e5ff)44;
      margin-bottom: 4px;
      text-decoration: none;
    }
    a.vc-name:hover { text-decoration: underline; }

    .vc-ticker {
      font-family: 'Share Tech Mono', monospace;
      font-size: 15px;
      color: #707088;
      letter-spacing: 3px;
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0;
      margin-top: 8px;
    }

    .hero-stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 12px 28px;
      border-left: 1px solid #1a1a30;
      border-right: 1px solid #1a1a30;
    }

    .hero-stat-val {
      font-family: 'Share Tech Mono', monospace;
      font-size: 22px;
      letter-spacing: 2px;
      color: #d8d8e8;
    }

    .hero-stat-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 2px;
      color: #505060;
      text-transform: uppercase;
      margin-top: 4px;
    }

    .awaiting {
      font-family: 'Share Tech Mono', monospace;
      font-size: 14px;
      color: #606070;
      letter-spacing: 2px;
      padding: 40px;
    }

    /* ── generating placeholder ─────────────────────────────────────────── */

    .vc-pending {
      padding: 30px 20px;
    }

    .spin {
      display: inline-block;
      width: 0.75em; height: 0.75em;
      border: 1.5px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      opacity: 0.4;
      animation: spin 0.7s linear infinite;
      vertical-align: middle;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    @keyframes hue-spin {
      from { filter: drop-shadow(0 0 20px #00e5ff) hue-rotate(0deg); }
      to   { filter: drop-shadow(0 0 20px #00e5ff) hue-rotate(360deg); }
    }

    .vc-pending-coin {
      width: 120px;
      height: 120px;
      margin: 0 auto 12px;
      border-radius: 50%;
      overflow: hidden;
      animation: hue-spin 4s linear infinite;
    }

    .vc-pending-coin svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .vc-pending-phase {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 32px;
      letter-spacing: 4px;
      color: #ffe600;
      text-shadow: 0 0 20px #ffe60044;
      margin-bottom: 2px;
    }

    @keyframes ticker-hue {
      from { filter: hue-rotate(0deg); }
      to   { filter: hue-rotate(360deg); }
    }

    .vc-pending-ticker {
      font-family: 'Share Tech Mono', monospace;
      font-size: 15px;
      color: #00e5ff;
      letter-spacing: 3px;
      margin-bottom: 14px;
      animation: ticker-hue 4s linear infinite;
    }

    .vc-pending-tokens {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      letter-spacing: 1px;
      color: #8a8a8a;
    }

    .vc-pending-tokens .count {
      color: #adadec;
    }
    .settle-btn {
      margin-top: 16px;
      padding: 10px 28px;
      background: none;
      border: 1px solid #ffe600;
      color: #ffe600;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
    }
    .settle-btn:hover:not(:disabled) { background: #ffe60014; }
    .settle-btn:disabled { opacity: 0.4; cursor: default; }
    .settle-error { margin-top: 8px; font-size: 11px; color: #f66; max-width: 320px; }

    /* ─────────────────────────────────────────────────────────────────────── */

    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 3px;
      color: #606070;
      text-transform: uppercase;
      margin-bottom: 12px;
      filter: drop-shadow(0px 0px 1px #000) drop-shadow(0px 0px 1px #000) drop-shadow(0px 0px 2px #000) drop-shadow(0px 0px 4px #000) drop-shadow(0px 0px 8px #000);
    }

    .sections { display: flex; flex-direction: column; gap: 32px; }

    .vc-ticker-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 24px;
    }

    .round-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: #505060;
      background: #12121e;
      border: 1px solid #2a2a40;
      padding: 2px 8px;
      letter-spacing: 2px;
    }

  `}_resyncByCycleSub(){let e=V.get(`game:cycle`);if(!e||e<=1n)return;let t=`vibecoins:byCycle:${Number(e)-1}`;this._subscribedKeys.includes(t)||(sd(t),this._subscribedKeys.push(t));let n=V.get(t);if(n){let e=n.toLowerCase();for(let t of[`token:${e}:palette`,`token:${e}:name`,`token:${e}:symbol`])this._subscribedKeys.includes(t)||(sd(t),this._subscribedKeys.push(t))}}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),this._subscribedKeys=[`game:phase`,`game:phaseEndTime`,`game:vibecoin`,`game:cycle`,`meta:chainTimeDelta`,`vibecoins:addresses`];for(let e of this._subscribedKeys)sd(e);this._resyncByCycleSub(),this._maybeLoadTokenUri(),this._genInterval=setInterval(()=>this._tickGen(),150),this._tickInterval=setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate);for(let e of this._subscribedKeys)H(e);this._subscribedKeys=[],this._genInterval&&clearInterval(this._genInterval),this._tickInterval&&clearInterval(this._tickInterval)}_computeDisplayAddr(){let e=`0x0000000000000000000000000000000000000000`,t=V.get(`game:phase`),n=V.get(`game:cycle`)??0n,r=V.get(`game:phaseEndTime`)??0n,i=V.get(`meta:chainTimeDelta`)??0,a=(V.get(`game:vibecoin`)??e).toLowerCase(),o=t===0&&r>0n?Number(r)-(Date.now()/1e3+i):1/0;if(t===0&&n>1n&&(r===0n||o>3600)){let e=Number(n)-1;return V.get(`vibecoins:byCycle:${e}`)??null}return a&&a!==e?a:null}_maybeLoadTokenUri(){let e=this._computeDisplayAddr();e&&e!==this.lastVibecoin&&(this.lastVibecoin=e,this._loadTokenUri(e))}async _settle(){let e=nd();if(!(!e||!L)){this.settlePending=!0;try{let t=I[F],n=await e.writeContract({address:t.game,abi:z,functionName:`settleSeriesB`,account:L.address,chain:e.chain});W.refresh(),xp(n,`Vibecoin generated — insider rounds settled`)}catch(e){Sp(e)}finally{this.settlePending=!1}}}_tickGen(){this._scrambledTicker=Up(),this._tickCount++;let e=this._genStats;if(e.tokensConsumed+=Math.floor(Math.random()*14)+4,e.exitLiquidity+=Math.floor(Math.random()*8)+2,e.hopium+=+(Math.random()<.3),e.bagHolders+=Math.floor(Math.random()*6)+1,e.rugThreads=Math.min(99.7,e.rugThreads+Math.random()*.02),Math.random()<.02&&(e.grayAreas+=1),Math.random()<.01&&(e.marketMakers+=1),this._tickCount%20==0){let e=this._headingIdx;for(;e===this._headingIdx;)e=Math.floor(Math.random()*Wp.length);this._headingIdx=e}if(this._tickCount%27==0){let e=this._statIdx;for(;e===this._statIdx;)e=Math.floor(Math.random()*Gp.length);this._statIdx=e,(e===9||e===10)&&(this._genStats={...this._genStats,grayAreas:Math.floor(Math.random()*3)+1,marketMakers:Math.floor(Math.random()*2)+1})}}async _loadTokenUri(e){try{this.tokenUri=await $u(F).readContract({address:e,abi:B,functionName:`tokenURI`})}catch{this.tokenUri=``}}_getSvgFromUri(){if(!this.tokenUri)return``;if(this.tokenUri.startsWith(`data:application/json`))try{let e=atob(this.tokenUri.split(`,`)[1]);return JSON.parse(e).image??``}catch{return``}return``}render(){let e=I[F],t=`0x0000000000000000000000000000000000000000`,n=V.get(`game:phase`),r=V.get(`game:cycle`)??0n,i=V.get(`game:phaseEndTime`)??0n,a=V.get(`meta:chainTimeDelta`)??0,o=(V.get(`game:vibecoin`)??t).toLowerCase(),s=n===0&&i>0n?Number(i)-(Date.now()/1e3+a):1/0,c=n===0&&r>1n&&(i===0n||s>3600),l=Number(r)-1,u=c?V.get(`vibecoins:byCycle:${l}`)??null:null,d=c?u?.toLowerCase():o&&o!==t?o.toLowerCase():void 0,f=d?V.get(`token:${d}:palette`):void 0,p=f?.[0]??`#00e5ff`,m=f?.[1]??`#0066ff`,h=u?.toLowerCase()??``,g=h?V.get(`token:${h}:name`):void 0,_=h?V.get(`token:${h}:symbol`):void 0,v=h?V.get(`token:${h}:cycle`):void 0,y=!!(o&&o!==t),b=y?o.toLowerCase():``,x=b?V.get(`token:${b}:name`)??`--`:`--`,S=b?V.get(`token:${b}:symbol`)??`--`:`--`,C=b?V.get(`token:${b}:cycle`):void 0,w=n===2||n===3,ee=this._getSvgFromUri(),te=o&&o!==t,T=n===void 0||n===0&&i===0n,ne=!T&&!te,re=Date.now()/1e3+a,ie=ne&&n===1&&i>0n&&re>=Number(i);return K`
      <div class="container">
        <div
          class="vibecoin-hero"
          style="--vc-col1:${p};--vc-col2:${m};border-color:${c?`#ff2d6b33`:T?`#252540`:ne?`#1a1a30`:p+`22`}"
        >
          ${c?K`
            ${ee?K`
              <div class="vc-svg-wrapper" style="--vc-col1:${p};filter:drop-shadow(0 0 20px ${p})">
                <img src=${ee} alt="vibecoin" />
              </div>
            `:K`
              <div class="vc-svg-wrapper" style="background:linear-gradient(135deg,${p},${m});--vc-col1:${p}"></div>
            `}
            ${e.explorer&&u?K`
              <a class="vc-name" style="color:${p};text-shadow:0 0 20px ${p},0 0 60px ${p}44" href="${e.explorer}/address/${u}" target="_blank">${g??K`<span class="spin"></span>`}</a>
            `:K`
              <div class="vc-name" style="color:${p};text-shadow:0 0 20px ${p},0 0 60px ${p}44">${g??K`<span class="spin"></span>`}</div>
            `}
            <div class="vc-ticker-row">
              <span class="vc-ticker">${_===void 0?K`<span class="spin"></span>`:K`\$${_}`}</span>
              ${v===void 0?``:K`<span class="round-badge">#${v}</span>`}
            </div>
            ${u?K`
              <div class="hero-stats">
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-valuation key="token:${h}:poolBalance"></live-valuation></span>
                  <span class="hero-stat-label">Locked In</span>
                </div>
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-bonding-mcap prefix="token:${h}"></live-bonding-mcap></span>
                  <span class="hero-stat-label">Market Cap</span>
                </div>
              </div>
            `:``}
          `:T?K`
            <div class="awaiting">
              <div class="vc-pending-phase">Awaiting insiders</div>
              <div class="vc-pending-tokens">
                 Initial insider deposit needed to begin Vibecoin generation
              </div>
            </div>
          `:ne?K`
            <div class="vc-pending">
              <div class="vc-pending-coin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <defs>
                    <radialGradient id="ph-grad" cx="40%" cy="35%" r="65%">
                      <stop offset="0%" stop-color="#2a2a3e"/>
                      <stop offset="100%" stop-color="#0a0a14"/>
                    </radialGradient>
                    <path id="ph-arc" d="M 21,48 A 29,29 0 0 1 79,48"/>
                    <linearGradient id="sand-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stop-color="#00e5ff" stop-opacity="0.22"/>
                      <stop offset="100%" stop-color="#00e5ff" stop-opacity="0.02"/>
                    </linearGradient>
                  </defs>
                  <rect width="100" height="100" fill="#07070f"/>
                  <!-- glow rings -->
                  <circle cx="50" cy="48" r="48"   fill="none" stroke="#00e5ff" stroke-width="1"   opacity="0.06"/>
                  <circle cx="50" cy="48" r="45"   fill="none" stroke="#00e5ff" stroke-width="2"   opacity="0.12"/>
                  <circle cx="50" cy="48" r="42.5" fill="none" stroke="#00e5ff" stroke-width="3"   opacity="0.20"/>
                  <circle cx="50" cy="48" r="40.5" fill="none" stroke="#00e5ff" stroke-width="3"   opacity="0.35"/>
                  <circle cx="50" cy="48" r="40"   fill="url(#ph-grad)"/>
                  <circle cx="50" cy="48" r="40"   fill="none" stroke="#00e5ff" stroke-width="1.5" opacity="0.9"/>
                  <circle cx="50" cy="48" r="38"   fill="none" stroke="#00e5ff" stroke-width="0.4" opacity="0.3"/>
                  <!-- ghost (glitch offset) -->
                  <g opacity="0.18" transform="translate(2.5,-0.5)">
                    <path d="M 39,34 L 61,34 L 50,48 L 61,62 L 39,62 L 50,48 Z" fill="none" stroke="#00e5ff" stroke-width="0.9"/>
                  </g>
                  <!-- hourglass outline -->
                  <path d="M 39,34 L 61,34 L 50,48 L 61,62 L 39,62 L 50,48 Z" fill="none" stroke="#00e5ff" stroke-width="1.1" opacity="0.85"/>
                  <!-- cap lines: flush with outline width -->
                  <line x1="39" y1="34" x2="61" y2="34" stroke="#00e5ff" stroke-width="1.8" opacity="0.9"/>
                  <line x1="39" y1="62" x2="61" y2="62" stroke="#00e5ff" stroke-width="1.8" opacity="0.9"/>
                  <!-- corner brackets: small L-shapes anchored at cap ends -->
                  <path d="M 35,38 L 35,34 L 39,34" fill="none" stroke="#00e5ff" stroke-width="0.9" opacity="0.85"/>
                  <path d="M 65,38 L 65,34 L 61,34" fill="none" stroke="#00e5ff" stroke-width="0.9" opacity="0.85"/>
                  <path d="M 35,58 L 35,62 L 39,62" fill="none" stroke="#00e5ff" stroke-width="0.9" opacity="0.85"/>
                  <path d="M 65,58 L 65,62 L 61,62" fill="none" stroke="#00e5ff" stroke-width="0.9" opacity="0.85"/>
                  <!-- top half sand fill -->
                  <polygon points="39,34 61,34 50,48" fill="url(#sand-fill)"/>
                  <!-- scan lines top (sand draining, sparse near neck) -->
                  <line x1="41.4" y1="37" x2="58.6" y2="37" stroke="#00e5ff" stroke-width="0.55" opacity="0.55"/>
                  <line x1="43.7" y1="40" x2="56.3" y2="40" stroke="#00e5ff" stroke-width="0.55" opacity="0.5"/>
                  <!-- y=43: glitch-broken scan line — left half displaced -->
                  <line x1="49.0" y1="43" x2="53.9" y2="43" stroke="#00e5ff" stroke-width="0.55" opacity="0.45"/>
                  <line x1="44.5" y1="43" x2="47.8" y2="43" stroke="#00e5ff" stroke-width="0.55" opacity="0.45" transform="translate(2.5,1)"/>
                  <line x1="48.4" y1="46" x2="51.6" y2="46" stroke="#00e5ff" stroke-width="0.55" opacity="0.22"/>
                  <!-- scan lines bottom (sand accumulating, denser near base) -->
                  <line x1="48.4" y1="50" x2="51.6" y2="50" stroke="#00e5ff" stroke-width="0.55" opacity="0.22"/>
                  <line x1="46.1" y1="53" x2="53.9" y2="53" stroke="#00e5ff" stroke-width="0.55" opacity="0.4"/>
                  <line x1="43.7" y1="56" x2="56.3" y2="56" stroke="#00e5ff" stroke-width="0.55" opacity="0.5"/>
                  <line x1="41.4" y1="59" x2="58.6" y2="59" stroke="#00e5ff" stroke-width="0.55" opacity="0.55"/>
                  <!-- neck dot with pulse -->
                  <circle cx="50" cy="48" r="1.3" fill="#00e5ff" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.2;0.9;0.1;0.8" dur="2.3s" repeatCount="indefinite"/>
                    <animate attributeName="r"       values="1.3;1.0;1.7;0.7;1.3" dur="2.3s" repeatCount="indefinite"/>
                  </circle>
                  <!-- falling sand grains -->
                  <circle cx="50"   r="1.4" fill="#00e5ff">
                    <animate attributeName="cy"      values="49;59"    dur="0.85s" begin="0s"    repeatCount="indefinite" calcMode="easeIn"/>
                    <animate attributeName="opacity" values="0.9;0.05" dur="0.85s" begin="0s"    repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50.6" r="1.1" fill="#00e5ff">
                    <animate attributeName="cy"      values="49;57"    dur="0.85s" begin="0.28s" repeatCount="indefinite" calcMode="easeIn"/>
                    <animate attributeName="opacity" values="0.7;0.05" dur="0.85s" begin="0.28s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="49.4" r="1.1" fill="#00e5ff">
                    <animate attributeName="cy"      values="49;58"    dur="0.85s" begin="0.56s" repeatCount="indefinite" calcMode="easeIn"/>
                    <animate attributeName="opacity" values="0.7;0.05" dur="0.85s" begin="0.56s" repeatCount="indefinite"/>
                  </circle>
                  <!-- pixel noise artifacts -->
                  <rect x="62.5" y="41" width="1.2" height="1.2" fill="#00e5ff" opacity="0.35"/>
                  <rect x="37.0" y="55" width="0.8" height="2.2" fill="#00e5ff" opacity="0.25"/>
                  <!-- scrambled ticker on arc -->
                  <text font-family="monospace" font-size="7.5" fill="#00e5ff" opacity="0.7" letter-spacing="3">
                    <textPath href="#ph-arc" startOffset="50%" text-anchor="middle">${this._scrambledTicker}</textPath>
                  </text>
                </svg>
              </div>
              <div class="vc-pending-phase">${ie?`Vibecoin Ready`:Wp[this._headingIdx]}</div>
              <div class="vc-pending-ticker">\$${this._scrambledTicker}</div>
              <div class="vc-pending-tokens">
                ${ie?`Insider rounds have concluded. Vibecoin may now be generated.`:`Vibecoin will be generated after insider rounds conclude.`}<br>
                ${Gp[this._statIdx].label}: <span class="count">${Gp[this._statIdx].value(this._genStats)}</span>
              </div>
              ${ie?K`
                <button class="settle-btn" ?disabled=${this.settlePending} @click=${()=>this._settle()}>
                  ${this.settlePending?`Settling...`:`Generate Vibecoin`}
                </button>
              `:``}
            </div>
          `:K`
            ${ee?K`
              <div class="vc-svg-wrapper" style="--vc-col1:${p}">
                <img src=${ee} alt="vibecoin" />
              </div>
            `:K`
              <div class="vc-svg-wrapper" style="background:linear-gradient(135deg,${p},${m});--vc-col1:${p}"></div>
            `}

            ${e.explorer&&y?K`
              <a class="vc-name" href="${e.explorer}/address/${o}" target="_blank">${x}</a>
            `:K`<div class="vc-name">${x}</div>`}
            <div class="vc-ticker-row">
              <span class="vc-ticker">\$${S}</span>
              ${C===void 0?``:K`<span class="round-badge">#${C}</span>`}
            </div>

            ${y?K`
              <div class="hero-stats">
               <div class="hero-stat">
                  <span class="hero-stat-val"><live-valuation key="token:${o.toLowerCase()}:poolBalance"></live-valuation></span>
                  <span class="hero-stat-label">Locked In</span>
                </div>
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-bonding-mcap prefix="token:${o.toLowerCase()}"></live-bonding-mcap></span>
                  <span class="hero-stat-label">Market Cap</span>
                </div>
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-valuation key="game:prizePool"></live-valuation></span>
                  <span class="hero-stat-label">Rugpull Fund</span>
                </div>
              </div>
            `:``}
          `}
        </div>

        <div class="sections">
          ${c&&u?K`
            <div>
              <div class="section-label">— RUGPULL —</div>
              <rugpull-section .forceSettled=${!0}></rugpull-section>
            </div>
            <div>
              <div class="section-label">— SELL —</div>
              <launch-section .vcAddress=${u}></launch-section>
            </div>
          `:w&&te?K`
            <div>
              <div class="section-label">— RUGPULL —</div>
              <rugpull-section></rugpull-section>
            </div>
            <div>
              <div class="section-label">— PUMP —</div>
              <launch-section .vcAddress=${o}></launch-section>
            </div>
          `:``}
          <div>
            <div class="section-label">— INSIDER ROUNDS —</div>
            <seed-section></seed-section>
          </div>
        </div>
      </div>
    `}};Q([Z()],qp.prototype,`tokenUri`,void 0),Q([Z()],qp.prototype,`lastVibecoin`,void 0),Q([Z()],qp.prototype,`_scrambledTicker`,void 0),Q([Z()],qp.prototype,`_headingIdx`,void 0),Q([Z()],qp.prototype,`_statIdx`,void 0),Q([Z()],qp.prototype,`_genStats`,void 0),Q([Z()],qp.prototype,`settlePending`,void 0),qp=Q([Y(`pump-tab`)],qp);var Jp=class extends J{constructor(...e){super(...e),this.address=``,this.tokenUri=``,this.uriLoaded=!1,this.claimAPending=!1,this.claimBPending=!1,this.observer=null,this._subscribedKeys=[],this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&this.requestUpdate()},this._onWalletEvent=()=>this._resyncKeys()}static{this.styles=G`
    :host { display: block; }

    .card {
      background: #0a0a12;
      border: 1px solid var(--vc-border, #252540);
      padding: 18px;
      display: flex;
      gap: 16px;
      transition: border-color 0.25s, box-shadow 0.25s;
      box-shadow: 0 0 0 transparent;
    }
    .card:hover {
      border-color: var(--vc-col1-60, #00e5ff66);
      box-shadow: 0 0 28px var(--vc-col1-18, #00e5ff18);
    }

    .icon {
      width: 60px;
      height: 60px;
      flex-shrink: 0;
      border-radius: 50%;
      overflow: hidden;
      background: linear-gradient(135deg, var(--vc-col1, #00e5ff), var(--vc-col2, #0066ff));
      box-shadow: 0 0 18px var(--vc-col1-30, #00e5ff30);
    }
    .icon img { width: 100%; height: 100%; }

    .info { flex: 1; min-width: 0; }

    .name-row {
      display: flex;
      align-items: baseline;
      gap: 8px;
      margin-bottom: 8px;
    }

    .vc-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 20px;
      letter-spacing: 1px;
      color: var(--vc-col1, #c8c8d8);
      text-shadow: 0 0 12px var(--vc-col1-40, #00e5ff40);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;
    }
    a.vc-name:hover { text-decoration: underline; }

    .cycle-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      padding: 2px 6px;
      border: 1px solid #3a3a4a;
      color: #505060;
      margin-top: auto;
      margin-bottom: auto;
    }

    .stats {
      display: grid;
      grid-template-columns: auto 1fr auto 1fr;
      gap: 2px 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
    }

    .stat-key { color: #707088; white-space: nowrap; }
    .stat-val { color: #d8d8e8; }
    .stat-val.own { color: var(--vc-col1, #00e5ff); text-shadow: 0 0 8px var(--vc-col1-40, #00e5ff40); }

    .stat-divider {
      grid-column: 1 / -1;
      border: none;
      border-top: 1px solid #1e1e38;
      margin: 4px 0;
    }

    .btn-row {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 6px;
      justify-content: center;
    }

    @media (max-width: 680px) {
      .card { flex-wrap: wrap; }
      .btn-row {
        flex-basis: 100%;
        flex-direction: row;
        gap: 8px;
      }
      .btn-row .btn { flex: 1; }
      .stats { grid-template-columns: auto 1fr; }
    }
    @media (max-width: 370px) {
      .stats { grid-template-columns: auto; }
      .stat-key { margin-top: 4px; }
    }

    .btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 1px;
      text-transform: uppercase;
      background: none;
      border: 1px solid;
      padding: 7px 14px;
      cursor: pointer;
      white-space: nowrap;
      transition: background 0.15s, box-shadow 0.15s;
    }
    .btn.buy {
      color: var(--vc-col1, #00e5ff);
      border-color: var(--vc-col1-40, #00e5ff44);
    }
    .btn.buy:hover {
      background: var(--vc-col1-08, rgba(0,229,255,0.08));
      box-shadow: 0 0 14px var(--vc-col1-25, #00e5ff25);
    }
    .btn.sell { color: #ff2d6b; border-color: #ff2d6b44; }
    .btn.sell:hover:not(:disabled) { background: rgba(255,45,107,0.08); box-shadow: 0 0 10px #ff2d6b22; }
    .btn.claim { color: #ffe600; border-color: #ffe60044; }
    .btn.claim:hover:not(:disabled) { background: rgba(255,230,0,0.08); box-shadow: 0 0 10px #ffe60022; }
    .btn:disabled { opacity: 0.25; cursor: not-allowed; }
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),window.addEventListener(`wallet-connected`,this._onWalletEvent),window.addEventListener(`wallet-disconnected`,this._onWalletEvent),this._resyncKeys(),this.observer=new IntersectionObserver(e=>{e[0].isIntersecting&&(this._loadTokenUri(),this.address&&window.dispatchEvent(new CustomEvent(`request-vc-card-data`,{detail:{address:this.address}})),this.observer?.disconnect())},{threshold:.1}),this.observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),window.removeEventListener(`wallet-connected`,this._onWalletEvent),window.removeEventListener(`wallet-disconnected`,this._onWalletEvent),this._unsubscribeAll(),this.observer?.disconnect()}_unsubscribeAll(){for(let e of this._subscribedKeys)H(e);this._subscribedKeys=[]}_resyncKeys(){this._unsubscribeAll();let e=this.address.toLowerCase();if(!e)return;let t=V.get(`token:${e}:cycle`)?.toString()??``,n=t?V.get(`game:winner:${t}`):void 0,r=L?.address.toLowerCase(),i=[`token:${e}:name`,`token:${e}:cycle`,`token:${e}:unlocked`,`token:${e}:athPrice`,`token:${e}:athPostRug`,`token:${e}:palette`,...t?[`game:winner:${t}`]:[],...n?[`user:${n.toLowerCase()}:referralCode`]:[],...r?[`token:${e}:balance:${r}`]:[],...r&&t?[`game:seriesADeposit:${t}:${r}`,`game:seriesBDeposit:${t}:${r}`]:[]];for(let e of i)sd(e);this._subscribedKeys=i}updated(e){e.has(`address`)&&this._resyncKeys()}async _loadTokenUri(){if(!this.uriLoaded)try{this.tokenUri=await $u(F).readContract({address:this.address,abi:B,functionName:`tokenURI`}),this.uriLoaded=!0}catch{this.uriLoaded=!0}}_getSvgFromUri(){if(!this.tokenUri)return``;if(this.tokenUri.startsWith(`data:application/json`))try{let e=atob(this.tokenUri.split(`,`)[1]);return JSON.parse(e).image??``}catch{return``}return``}async _claimA(){let e=nd();if(!e||!L)return;let t=V.get(`token:${this.address.toLowerCase()}:cycle`);if(t!==void 0){this.claimAPending=!0,this.requestUpdate();try{let n=I[F];xp(await e.writeContract({address:n.game,abi:z,functionName:`claimSeriesATokens`,args:[BigInt(t)],account:L.address,chain:e.chain}),`Claimed Insider Vibecoins`)}catch(e){Sp(e)}finally{this.claimAPending=!1,this.requestUpdate()}}}async _claimB(){let e=nd();if(!e||!L)return;let t=V.get(`token:${this.address.toLowerCase()}:cycle`);if(t!==void 0){this.claimBPending=!0,this.requestUpdate();try{let n=I[F];xp(await e.writeContract({address:n.game,abi:z,functionName:`claimSeriesBTokens`,args:[BigInt(t)],account:L.address,chain:e.chain}),`Claimed "Insider" Vibecoins`)}catch(e){Sp(e)}finally{this.claimBPending=!1,this.requestUpdate()}}}render(){let e=this.address.toLowerCase(),t=V.get(`token:${e}:name`)??``,n=V.get(`token:${e}:cycle`),r=V.get(`token:${e}:unlocked`)??!1,i=V.get(`token:${e}:athPrice`)??0n,a=V.get(`token:${e}:athPostRug`)??!1,o=V.get(`token:${e}:palette`)??[`#00e5ff`,`#0066ff`],s=n?.toString()??``,c=s?V.get(`game:winner:${s}`):void 0,l=L?.address.toLowerCase(),u=l?V.get(`token:${e}:balance:${l}`)??0n:0n,d=l&&s?V.get(`game:seriesADeposit:${s}:${l}`)??0n:0n,f=l&&s?V.get(`game:seriesBDeposit:${s}:${l}`)??0n:0n,p=this._getSvgFromUri(),m=o[0],h=o[1],g=m+`14`,_=m+`2e`,v=m+`40`,y=m+`4d`,b=m+`66`,x=m+`99`,S=m+`2a`,C=I[F].explorer;return K`
      <div class="card" style="
        --vc-col1:${m};
        --vc-col2:${h};
        --vc-col1-08:${g};
        --vc-col1-18:${_};
        --vc-col1-25:${v};
        --vc-col1-30:${y};
        --vc-col1-40:${b};
        --vc-col1-60:${x};
        --vc-border:${S};
        border-color:${S};
        box-shadow: 0 0 18px ${_};
      ">
        <div class="icon">
          ${p?K`<img src=${p} alt="" />`:``}
        </div>

        <div class="info">
          <div class="name-row">
            ${C?K`
              <a class="vc-name" href="${C}/address/${this.address}" target="_blank">${t}</a>
            `:K`
              <span class="vc-name">${t}</span>
            `}
            ${n===void 0?``:K`<span class="cycle-badge">Round ${n}</span>`}
          </div>

          <div class="stats">
            <span class="stat-key">PRICE</span>
            <span class="stat-val"><live-bonding-price prefix="token:${e}"></live-bonding-price></span>
            <span class="stat-key">SUPPLY</span>
            <span class="stat-val"><live-token-amount value-key="token:${e}:totalSupply"></live-token-amount></span>
            <span class="stat-key">MCAP</span>
            <span class="stat-val"><live-bonding-mcap prefix="token:${e}"></live-bonding-mcap></span>
            <span class="stat-key">TVL</span>
            <span class="stat-val"><live-valuation key="token:${e}:poolBalance"></live-valuation></span>
            <span class="stat-key">VOL 24H</span>
            <span class="stat-val"><live-valuation key="token:${e}:volume24h"></live-valuation></span>
            <span class="stat-key">VOL ALL</span>
            <span class="stat-val"><live-valuation key="token:${e}:totalVolume"></live-valuation></span>
            ${i>0n?K`
              <span class="stat-key">${a?`ATH`:`RUG`} PRICE</span>
              <span class="stat-val"><live-token-price value-key="token:${e}:athPrice"></live-token-price></span>
            `:``}

            ${L&&(u>0n||c)?K`
              <hr class="stat-divider" />
            `:``}

            ${L&&u>0n?K`
              <span class="stat-key">YOUR BAL</span>
              <span class="stat-val own"><live-token-amount value-key="token:${e}:balance:${l}"></live-token-amount></span>
            `:``}
            ${c?K`
              <span class="stat-key">RUGGED</span>
              <span class="stat-val">
                <live-valuation key="game:prize:${s}"></live-valuation> to
                <live-string key="user:${c.toLowerCase()}:referralCode" fallback="" style="color:#ffe600"></live-string>
                ${C?K`
                  <a style="color:#ff2d6b;text-decoration:none" href="${C}/address/${c}" target="_blank">${Fd(c)}</a>
                `:K`<span style="color:#ff2d6b">${Fd(c)}</span>`}
              </span>
            `:``}
          </div>
        </div>

        <div class="btn-row">
          <button class="btn buy" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:r?`vibecoin`:`publicBuy`,vibecoinAddress:this.address}}))}}>BUY</button>

          ${r&&u>0n?K`
            <button class="btn sell" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:`vibecoinSell`,vibecoinAddress:this.address,tokenBalance:u}}))}}>SELL</button>
          `:``}

          ${d>0n?K`
            <button class="btn claim" @click=${this._claimA} ?disabled=${this.claimAPending}>
              ${this.claimAPending?`…`:`CLAIM INSIDER CUT`}
            </button>
          `:``}

          ${f>0n?K`
            <button class="btn claim" @click=${this._claimB} ?disabled=${this.claimBPending}>
              ${this.claimBPending?`…`:`CLAIM "INSIDER" CUT`}
            </button>
          `:``}
        </div>
      </div>
    `}};Q([X()],Jp.prototype,`address`,void 0),Q([Z()],Jp.prototype,`tokenUri`,void 0),Q([Z()],Jp.prototype,`uriLoaded`,void 0),Jp=Q([Y(`vibecoin-card`)],Jp);var Yp=20,Xp=class extends J{constructor(...e){super(...e),this.search=``,this.visibleCount=Yp,this.observer=null,this.sentinelEl=null,this._onLiveUpdate=e=>{e.detail.has(`vibecoins:addresses`)&&this.requestUpdate()},this._onHashChange=()=>this._applyHash()}static{this.styles=G`
    :host { display: block; }

    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 32px 24px;
    }

    .search-bar {
      margin-bottom: 24px;
    }

    .search-input {
      width: 100%;
      background: rgba(13, 13, 26, 0.97);
      border: 1px solid #252540;
      color: #d8d8e8;
      font-family: 'Share Tech Mono', monospace;
      font-size: 14px;
      padding: 12px 16px;
      letter-spacing: 1px;
      box-sizing: border-box;
      transition: border-color 0.15s, box-shadow 0.15s;
    }
    .search-input::placeholder { color: #404058; }
    .search-input:focus { outline: none; border-color: #00e5ff66; box-shadow: 0 0 14px #00e5ff18; }

    .list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .sentinel {
      height: 1px;
      pointer-events: none;
    }

    .loading {
      text-align: center;
      padding: 40px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #3a3a4a;
      letter-spacing: 2px;
    }

    .empty {
      text-align: center;
      padding: 60px 20px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #3a3a4a;
      letter-spacing: 2px;
    }

    .spinner {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid #3a3a4a;
      border-top-color: #00e5ff;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-right: 8px;
      vertical-align: middle;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),window.addEventListener(`hashchange`,this._onHashChange),sd(`vibecoins:addresses`),this._applyHash()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),window.removeEventListener(`hashchange`,this._onHashChange),H(`vibecoins:addresses`),this.observer?.disconnect()}_applyHash(){let e=window.location.hash.split(`?`)[0].match(/^#vibecoins\/(0x[0-9a-fA-F]{40})$/);e&&(this.search=e[1],this.visibleCount=Yp)}updated(){let e=this.renderRoot?.querySelector(`.sentinel`);e&&e!==this.sentinelEl&&(this.observer?.disconnect(),this.sentinelEl=e,this.observer=new IntersectionObserver(e=>{e[0].isIntersecting&&(this.visibleCount+=Yp)},{rootMargin:`200px`}),this.observer.observe(e))}_filtered(){let e=V.get(`vibecoins:addresses`)??[],t=this.search.toLowerCase().trim();return t?e.filter(e=>{let n=e.toLowerCase(),r=(V.get(`token:${n}:name`)??``).toLowerCase(),i=(V.get(`token:${n}:symbol`)??``).toLowerCase();return r.includes(t)||i.includes(t)||n.includes(t)}):e}render(){let e=this._filtered(),t=e.slice(0,this.visibleCount),n=!V.has(`vibecoins:addresses`);return K`
      <div class="container">
        <div class="search-bar">
          <input
            class="search-input"
            type="text"
            placeholder="SEARCH BY NAME, TICKER, OR ADDRESS..."
            .value=${this.search}
            @input=${e=>{this.search=e.target.value,this.visibleCount=Yp}}
          />
        </div>

        ${n&&e.length===0?K`
          <div class="loading">
            <span class="spinner"></span>
            INDEXING EVENTS...
          </div>
        `:e.length===0?K`
          <div class="empty">
            ${this.search?`NO MATCHES FOUND`:`NO VIBECOINS YET`}
          </div>
        `:K`
          <div class="list">
            ${t.map(e=>K`
              <vibecoin-card .address=${e.toLowerCase()}></vibecoin-card>
            `)}
            ${t.length<e.length?K`<div class="sentinel"></div>`:``}
          </div>
        `}
        <div class="loading">
          // FUTURE RUGGED VIBECOINS GO HERE
        </div>
      </div>
    `}};Q([Z()],Xp.prototype,`search`,void 0),Q([Z()],Xp.prototype,`visibleCount`,void 0),Xp=Q([Y(`vibecoins-tab`)],Xp);function Zp(e){if(e<0n)throw Error(`sqrt of negative`);if(e===0n)return 0n;let t=e,n=(t+1n)/2n;for(;n<t;)t=n,n=(t+e/t)/2n;return t}function Qp(e,t,n,r){let i=10n**18n,a=n*t/i+r*t*t/(2n*i*i)+e,o=Zp(n*n+2n*r*a);if(r===0n)return 0n;let s=(o-n)*i/r;return s>t?s-t:0n}var $=class extends J{constructor(...e){super(...e),this.visible=!1,this._loading=!1,this.target=`publicBuy`,this.amountStr=``,this.useShMon=!1,this.pending=!1,this.approvePending=!1,this.approved=!1,this.error=``,this._sellShMonPreview=0n,this._tokenBalance=0n,this._vcSymbol=`token`,this._vcName=`BUY`,this._waitingForAddr=``,this._refCode=null,this._gameConstants=W.gameConstants,this._onLiveValuesWhileLoading=e=>{let t=e.detail,n=this._waitingForAddr,r=`token:${n}:symbol`,i=`token:${n}:name`;if(!t.has(r)&&!t.has(i))return;let a=V.get(r),o=V.get(i);a&&(this._vcSymbol=a),o&&(this._vcName=o),a&&o&&(this._loading=!1,window.removeEventListener(`live-values-updated`,this._onLiveValuesWhileLoading))}}static{this.styles=G`
    :host { display: block; }

    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      z-index: 500;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal {
      background: rgba(10, 10, 20, 0.97);
      border: 1px solid #252548;
      box-shadow: 0 0 60px rgba(0,229,255,0.12), inset 0 0 60px rgba(0,0,0,0.5);
      padding: clamp(16px, 5vw, 28px);
      min-width: min(380px, 100vw - 32px);
      max-width: min(480px, 100vw - 32px);
      width: 100%;
      position: relative;
    }

    .title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px;
      letter-spacing: 3px;
      color: #d8d8e8;
      text-shadow: 0 0 20px rgba(0,229,255,0.4);
      margin-bottom: 20px;
    }

    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      background: none;
      border: none;
      color: #606070;
      font-size: 18px;
      cursor: pointer;
      transition: color 0.15s;
    }
    .close-btn:hover { color: #d8d8e8; }

    .field { margin-bottom: 16px; }
    .field label {
      display: block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 2px;
      color: #707088;
      margin-bottom: 6px;
    }

    .amount-input {
      width: 100%;
      background: #060608;
      border: 1px solid #252540;
      color: #d8d8e8;
      font-family: 'Share Tech Mono', monospace;
      font-size: 18px;
      padding: 10px 12px;
      transition: border-color 0.15s, box-shadow 0.15s;
      box-sizing: border-box;
    }
    .amount-input:focus { outline: none; border-color: #00e5ff88; box-shadow: 0 0 12px #00e5ff22; }

    .preview {
      background: #060608;
      border: 1px solid #1e1e38;
      padding: 12px;
      margin-bottom: 16px;
    }

    .preview-row {
      display: flex;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      padding: 4px 0;
    }
    .preview-row .key { color: #707088; }
    .preview-row .val { color: #d8d8e8; }
    .preview-row .val.accent { color: #00e5ff; text-shadow: 0 0 8px #00e5ff55; }

    .fee-section { margin-top: 8px; border-top: 1px solid #1e1e38; padding-top: 8px; }

    .referral-note {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #606070;
      margin-bottom: 12px;
    }
    .referral-note span { color: #ffe600; }

    .approval-note {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #ffe600;
      margin-bottom: 12px;
    }

    .cta-btn {
      width: 100%;
      font-family: 'Share Tech Mono', monospace;
      font-size: 14px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #00e5ff;
      background: none;
      border: 1px solid #00e5ff66;
      padding: 14px;
      cursor: pointer;
      transition: background 0.15s, box-shadow 0.15s, border-color 0.15s;
    }
    .cta-btn:hover { background: rgba(0,229,255,0.08); box-shadow: 0 0 20px #00e5ff33; border-color: #00e5ffaa; }
    .cta-btn:disabled { opacity: 0.25; cursor: not-allowed; }

    .approve-btn {
      width: 100%;
      font-family: 'Share Tech Mono', monospace;
      font-size: 14px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #ffe600;
      background: none;
      border: 1px solid #ffe60066;
      padding: 14px;
      cursor: pointer;
      transition: background 0.15s, box-shadow 0.15s, border-color 0.15s;
      margin-bottom: 8px;
    }
    .approve-btn:hover { background: rgba(255,230,0,0.08); box-shadow: 0 0 20px #ffe60033; border-color: #ffe600aa; }
    .approve-btn:disabled { opacity: 0.25; cursor: not-allowed; }

    .error {
      color: #ff2d6b;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      margin-top: 8px;
      text-shadow: 0 0 8px #ff2d6b55;
    }

    .loading-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 0;
      gap: 16px;
    }

    .spinner {
      width: 32px;
      height: 32px;
      border: 2px solid #252548;
      border-top-color: #00e5ff;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .loading-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 2px;
      color: #606070;
    }
  `}open(e){this.target=e.target,this.vibecoinAddress=e.vibecoinAddress,this._tokenBalance=e.tokenBalance??0n,this._resolveVcMeta(e.vibecoinAddress),this._refCode=Gd(),this._gameConstants=W.gameConstants,this.amountStr=``,this.useShMon=!1,this.pending=!1,this.approvePending=!1,this.approved=!1,this.error=``,this._sellShMonPreview=0n,this.visible=!0}_resolveVcMeta(e){let t=(e??V.get(`game:vibecoin`))?.toLowerCase()??``,n=t?V.get(`token:${t}:symbol`):void 0,r=t?V.get(`token:${t}:name`):void 0;this._vcSymbol=n??`token`,this._vcName=r??``,t&&(!n||!r)?(this._waitingForAddr=t,this._loading=!0,window.addEventListener(`live-values-updated`,this._onLiveValuesWhileLoading)):this._loading=!1}async _updateSellPreview(){let e=this._amountWei;if(e===0n||!this.vibecoinAddress){this._sellShMonPreview=0n;return}try{this._sellShMonPreview=await $u(F).readContract({address:this.vibecoinAddress,abi:B,functionName:`shMonForTokens`,args:[e]})}catch{this._sellShMonPreview=0n}}_close(){this.visible=!1,this._loading=!1,window.removeEventListener(`live-values-updated`,this._onLiveValuesWhileLoading)}get _amountWei(){try{let e=parseFloat(this.amountStr);return isNaN(e)||e<=0?0n:BigInt(Math.floor(e*0xde0b6b3a7640000))}catch{return 0n}}_getTitle(){switch(this.target){case`seriesA`:return`INSIDER ROUND`;case`seriesB`:return`"INSIDER" ROUND`;case`publicBuy`:return`BUY`;case`vibecoin`:return this._vcName?this._vcName.toUpperCase():`BUY`;case`vibecoinSell`:return this._vcSymbol?`SELL ${this._vcSymbol}`:`SELL`}}_vcBps(e,t){switch(t){case`seriesA`:return 10000n-e.SERIES_A_PROTOCOL-e.SERIES_A_REFERRAL-e.SERIES_A_PRIZE;case`seriesB`:return 10000n-e.SERIES_B_PROTOCOL-e.SERIES_B_REFERRAL-e.SERIES_B_PRIZE;default:return 10000n-e.PUMP_PROTOCOL-e.PUMP_REFERRAL-e.PUMP_PRIZE}}_getFeeBreakdown(){if(this.target===`vibecoin`)return[[`Dividend pool`,1000n],[`To buyer`,9000n]];let e=this._gameConstants;if(!e)switch(this.target){case`seriesA`:return[[`Protocol`,400n],[`Referral`,600n],[`Rugpull Fund`,2000n],[`Vibecoins minted`,7000n]];case`seriesB`:return[[`Protocol`,400n],[`Referral`,600n],[`Rugpull Fund`,1000n],[`Vibecoins minted`,8000n]];default:return[[`Protocol`,400n],[`Referral`,600n],[`Rugpull Fund`,2400n],[`Vibecoin mint`,6600n]]}switch(this.target){case`seriesA`:return[[`Protocol`,e.SERIES_A_PROTOCOL],[`Referral`,e.SERIES_A_REFERRAL],[`Rugpull Fund`,e.SERIES_A_PRIZE],[`Vibecoins minted`,this._vcBps(e,`seriesA`)]];case`seriesB`:return[[`Protocol`,e.SERIES_B_PROTOCOL],[`Referral`,e.SERIES_B_REFERRAL],[`Rugpull Fund`,e.SERIES_B_PRIZE],[`Vibecoins minted`,this._vcBps(e,`seriesB`)]];default:return[[`Protocol`,e.PUMP_PROTOCOL],[`Referral`,e.PUMP_REFERRAL],[`Rugpull Fund`,e.PUMP_PRIZE],[`Vibecoin mint`,this._vcBps(e,`publicBuy`)]]}}get _isClosed(){if(this.target!==`vibecoin`)return!1;let e=this.vibecoinAddress?.toLowerCase();return e?V.get(`token:${e}:unlocked`)??!1:!1}_computeTokenPreview(){let e=this._amountWei;if(e===0n)return 0n;let t=W.gameConstants;if(this.target===`publicBuy`){let n=(V.get(`game:vibecoin`)??``).toLowerCase();if(!n)return 0n;let r=V.get(`token:${n}:totalSupply`)??0n,i=V.get(`token:${n}:P0`)??0n,a=V.get(`token:${n}:K`)??0n;return Qp(e*(t?this._vcBps(t,`publicBuy`):6600n)/10000n,r,i,a)}if(this.target===`vibecoin`){let t=this.vibecoinAddress?.toLowerCase()??``;return t?Qp(e,V.get(`token:${t}:totalSupply`)??0n,V.get(`token:${t}:P0`)??0n,V.get(`token:${t}:K`)??0n):0n}return 0n}_computeTimerExtension(){let e=V.get(`game:settlementTimestamp`)??0n;if(e===0n)return`--`;let t=this._amountWei;if(t===0n)return`--`;let n=V.get(`game:totalSeriesA`)??0n,r=V.get(`game:totalSeriesB`)??0n,i=V.get(`game:totalPublicCurveDeposited`)??0n,a=V.get(`game:phaseEndTime`)??0n,o=Number(n+r)/0xde0b6b3a7640000;if(o===0)return`--`;let s=Number(i+t)/0xde0b6b3a7640000+1e4,c=o*2419200/(o+2e6)*s*s*1e3/(s*s+40*o*o),l=Number(e)*1e3+36e5+c,u=Math.max(0,l-Number(a)*1e3);if(u===0)return`at max`;let d=Math.floor(u/1e3),f=Math.floor(d/3600),p=Math.floor(d%3600/60);return f>0?`+${f}h ${p}m`:p>0?`+${p}m ${d}s`:`+${d}.${Math.floor(u)%1e3}s`}async _approve(){let e=I[F],t=nd();if(!t||!L)return;let n=this._amountWei;if(n!==0n){this.approvePending=!0,this.error=``;try{let r=this.target===`vibecoin`?this.vibecoinAddress:e.game;await t.writeContract({address:e.shmon,abi:ad,functionName:`approve`,args:[r,n],account:L.address,chain:t.chain}),this.approved=!0}catch(e){Sp(e)}finally{this.approvePending=!1}}}async _buy(){let e=I[F],t=nd();if(!t||!L)return;let n=this._amountWei;if(n!==0n){if(this.target===`seriesA`||this.target===`seriesB`){let e=this.target===`seriesA`?0:1,t=V.get(`game:phase`);if(t===void 0||t!==e){this.error=`${this.target===`seriesA`?`Insider`:`"Insider"`} round has already ended.`;return}let n=V.get(`game:phaseEndTime`)??0n,r=V.get(`meta:chainTimeDelta`)??0;if(n>0n&&Date.now()/1e3+r>=Number(n)){this.error=`${this.target===`seriesA`?`Insider`:`"Insider"`} round has already ended.`;return}}this.pending=!0,this.error=``;try{let r=Yd(Gd()??``),i;i=this.target===`vibecoinSell`?await t.writeContract({address:this.vibecoinAddress,abi:B,functionName:`sell`,args:[n,L.address],account:L.address,chain:t.chain}):this.useShMon?this.target===`seriesA`?await t.writeContract({address:e.game,abi:z,functionName:`depositSeriesAWithShMon`,args:[r,n],account:L.address,chain:t.chain}):this.target===`seriesB`?await t.writeContract({address:e.game,abi:z,functionName:`depositSeriesBWithShMon`,args:[r,n],account:L.address,chain:t.chain}):this.target===`publicBuy`?await t.writeContract({address:e.game,abi:z,functionName:`buyWithShMon`,args:[r,n],account:L.address,chain:t.chain}):await t.writeContract({address:this.vibecoinAddress,abi:B,functionName:`buyWithShMon`,args:[L.address,n,!0],account:L.address,chain:t.chain}):this.target===`seriesA`?await t.writeContract({address:e.game,abi:z,functionName:`depositSeriesA`,args:[r],value:n,account:L.address,chain:t.chain}):this.target===`seriesB`?await t.writeContract({address:e.game,abi:z,functionName:`depositSeriesB`,args:[r],value:n,account:L.address,chain:t.chain}):this.target===`publicBuy`?await t.writeContract({address:e.game,abi:z,functionName:`buy`,args:[r],value:n,account:L.address,chain:t.chain}):await t.writeContract({address:this.vibecoinAddress,abi:B,functionName:`buy`,args:[L.address,!0],value:n,account:L.address,chain:t.chain}),await Promise.all([W.refresh(),W.refreshUser()]),this._close(),xp(i,this._actionLabel())}catch(e){Sp(e)}finally{this.pending=!1}}}_actionLabel(){let e=jd(this._amountWei);switch(this.target){case`seriesA`:return`Insider deposit — ${e}`;case`seriesB`:return`"Insider" deposit — ${e}`;case`publicBuy`:return`Pump — ${e}`;case`vibecoin`:return`Bought ${this._vcSymbol} — ${e}`;case`vibecoinSell`:return`Sold ${this._vcSymbol} — ${Nd(this._amountWei,this._vcSymbol)}`}}_renderPreview(){let e=this._amountWei;if(this.target===`vibecoinSell`)return K`
        <div class="preview">
          <div class="preview-row">
            <span class="key">SHMON RECEIVED (EST)</span>
            <span class="val accent">${e>0n?jd(this._sellShMonPreview):`—`}</span>
          </div>
          <div class="fee-section">
            <div class="preview-row">
              <span class="key">DIVIDEND CUT</span>
              <span class="val">${e>0n&&this._sellShMonPreview>0n?`10% · ${jd(this._sellShMonPreview/9n)}`:`10%`}</span>
            </div>
          </div>
        </div>
      `;let t=this._getFeeBreakdown(),n=this._computeTokenPreview(),r=this.target===`vibecoin`?10000n:t.find(([e])=>e===`Vibecoin`)?.[1]??6600n,i=this.target===`vibecoin`?e:e*r/10000n,a=n>0n?i*10n**18n/n:0n,o=this.target===`seriesA`||this.target===`seriesB`,s=this._refCode,c=n*(this.target===`vibecoin`?t.find(([e])=>e===`To buyer`)?.[1]??9000n:10000n)/10000n,l=W.gameConstants,u=e*(this.target===`vibecoin`?10000n:l?this._vcBps(l,this.target):this.target===`seriesA`?7000n:this.target===`seriesB`?8000n:6600n)/10000n,d=(this.target===`seriesA`?V.get(`game:totalSeriesA`)??0n:V.get(`game:totalSeriesB`)??0n)+u,f=u>0n&&d>0n?(Number(u*10000n/d)/100).toFixed(2):null,p=this.target===`seriesA`?`insider buy-in`:`"insider" buy-in`;return K`
      <div class="preview">
        ${o?K`
          <div class="preview-row">
            <span class="key">TOKENS</span>
            <span class="val">Allocated on Vibecoin generation</span>
          </div>
          <div class="preview-row">
            <span class="key">YOUR POOL SHARE</span>
            <span class="val accent">${f===null?`—`:`${f}% of ${p}`}</span>
          </div>
        `:K`
          <div class="preview-row">
            <span class="key">YOU RECEIVE (EST)</span>
            <span class="val accent">${c>0n?Nd(c,this._vcSymbol):`—`}</span>
          </div>
          <div class="preview-row">
            <span class="key">EFFECTIVE PRICE</span>
            <span class="val">${a>0n?`${jd(a,6)} / \$${this._vcSymbol}`:`—`}</span>
          </div>
        `}

        ${this.target===`publicBuy`?K`
          <div class="preview-row">
            <span class="key">TIMER EXTENSION</span>
            <span class="val">${this._computeTimerExtension()}</span>
          </div>
        `:``}

        <div class="fee-section">
          ${t.map(([t,r])=>{let i=this.target===`vibecoin`&&n>0n?` · ${Nd(n*r/10000n,this._vcSymbol)}`:this.target!==`vibecoin`&&e>0n?` · ${this.useShMon?jd(e*r/10000n):Ad(e*r/10000n)}`:``;return K`
              <div class="preview-row">
                <span class="key">${t.toUpperCase()}</span>
                <span class="val">${Number(r)/100}%${i}</span>
              </div>
            `})}
        </div>
      </div>

      ${s?K`
        <div class="referral-note">
          REFERRAL: <span>${s}</span>
        </div>
      `:``}
    `}render(){if(!this.visible)return K``;let e=this.target===`vibecoinSell`,t=!e&&this.useShMon,n=!!L,r=this.target===`seriesA`||this.target===`seriesB`,i=e?this._tokenBalance:0n;return K`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="modal">
          <button class="close-btn" @click=${this._close}>✕</button>
          <div class="title">${this._getTitle()}</div>
          ${this._loading?K`
            <div class="loading-body">
              <div class="spinner"></div>
              <div class="loading-label">LOADING</div>
            </div>
          `:K`

          <div class="field">
            <label style="display:flex;justify-content:space-between">
              <span>${e?`TOKENS TO SELL`:`AMOUNT`}</span>
              ${e&&i>0n?K`<span style="color:#d8d8e8">BAL: ${Nd(i,this._vcSymbol)}</span>`:``}
            </label>
            <div style="display:flex;gap:8px;align-items:center">
              <input
                class="amount-input"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                style="flex:1"
                .value=${this.amountStr}
                @input=${e=>{this.amountStr=e.target.value,this.approved=!1,this.target===`vibecoinSell`&&this._updateSellPreview()}}
              />
              ${e?K`
                <button
                  style="
                    font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:1px;
                    padding:10px 10px;border:1px solid #1a1a30;background:#060608;
                    color:#ff2d6b;cursor:pointer;white-space:nowrap;
                  "
                  @click=${()=>{this.amountStr=(Number(i)/0xde0b6b3a7640000).toString(),this._updateSellPreview()}}
                >MAX</button>
              `:K`
                <button
                  style="
                    font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:1px;
                    padding:10px 10px;border:1px solid #1a1a30;background:#060608;
                    color:${this.useShMon?`#ffe600`:`#00e5ff`};cursor:pointer;white-space:nowrap;
                  "
                  @click=${()=>{this.useShMon=!this.useShMon,this.approved=!1}}
                >${this.useShMon?`shMON`:`MON`}</button>
              `}
            </div>
          </div>

          ${this._renderPreview()}

          ${t&&!this.approved?K`
            <div class="approval-note">
              Approve ${this.target===`vibecoin`?`vibecoin`:`game`} to spend your shMON.
            </div>
            <button
              class="approve-btn"
              @click=${this._approve}
              ?disabled=${this._amountWei===0n||this.approvePending||!n}
            >
              ${this.approvePending?`APPROVING...`:`APPROVE shMON`}
            </button>
          `:``}

          <button
            class="cta-btn"
            style=${e?`color:#ff2d6b;border-color:#ff2d6b66`:``}
            @click=${this._buy}
            ?disabled=${this._amountWei===0n||this.pending||!n||t&&!this.approved}
          >
            ${this.pending?`PENDING...`:e?`SELL`:r?`DEPOSIT`:`BUY`}
          </button>

          ${this.error?K`<div class="error">${this.error}</div>`:``}
          `}
        </div>
      </div>
    `}};Q([Z()],$.prototype,`visible`,void 0),Q([Z()],$.prototype,`_loading`,void 0),Q([Z()],$.prototype,`target`,void 0),Q([Z()],$.prototype,`vibecoinAddress`,void 0),Q([Z()],$.prototype,`amountStr`,void 0),Q([Z()],$.prototype,`useShMon`,void 0),Q([Z()],$.prototype,`pending`,void 0),Q([Z()],$.prototype,`approvePending`,void 0),Q([Z()],$.prototype,`approved`,void 0),Q([Z()],$.prototype,`error`,void 0),Q([Z()],$.prototype,`_sellShMonPreview`,void 0),Q([Z()],$.prototype,`_tokenBalance`,void 0),$=Q([Y(`buy-dialog`)],$);var $p=`disclaimer-accepted-v1`,em=class extends J{constructor(...e){super(...e),this.open=!localStorage.getItem($p)}_accept(){localStorage.setItem($p,`1`),this.open=!1}static{this.styles=G`
    .overlay {
      position: fixed; inset: 0; z-index: 2000;
      background: rgba(0, 0, 0, 0.88);
      display: flex; align-items: center; justify-content: center;
      padding: 16px;
    }

    .dialog {
      background: rgba(13, 13, 26, 0.99);
      border: 1px solid #ffe60033;
      padding: 36px 32px 28px;
      max-width: 480px; width: 100%;
      font-family: 'Share Tech Mono', monospace;
      color: #ccc;
    }

    .title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px;
      letter-spacing: 4px;
      color: #ffe600;
      text-shadow: 0 0 16px #ffe60066;
      margin-bottom: 20px;
    }

    .body {
      font-size: 13px;
      line-height: 1.7;
      color: #aaa;
    }

    .body p { margin: 0 0 14px; }
    .body p:last-child { margin-bottom: 0; }

    .body a {
      color: #ffe60099;
      text-decoration: underline;
    }
    .body a:hover { color: #ffe600; }

    .body .highlight {
      color: #ff2d6b;
    }

    .divider {
      border: none;
      border-top: 1px solid #ffffff0f;
      margin: 24px 0;
    }

    .accept-btn {
      width: 100%;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 20px;
      letter-spacing: 4px;
      color: #ffe600;
      background: none;
      border: 1px solid #ffe60066;
      padding: 14px;
      cursor: pointer;
      transition: background 0.15s, box-shadow 0.15s;
      text-shadow: 0 0 10px #ffe60044;
    }
    .accept-btn:hover {
      background: rgba(255, 230, 0, 0.07);
      box-shadow: 0 0 20px #ffe60022;
      text-shadow: 0 0 18px #ffe600;
    }
  `}_renderContent(){return K`
        <div class="body">
          <p>
            You're on <span class="highlight">Monad Testnet</span>.
            All funds here are testnet tokens — they have no real-world value and cannot be withdrawn or exchanged.
          </p>
          <p>
            FoMonad rounds run <span class="highlight">10× faster</span> on testnet than they will on mainnet,
            so the timer you see isn't representative of the real game pace.
          </p>
          <p>
            This is a test environment. Expect bugs, resets, and general chaos.
          </p>
        </div>
      `}render(){if(!this.open)return K``;let e={10143:`TESTNET — HEADS UP`,143:`DISCLAIMER`}[10143]??`YOU FOUND THE DEV BUILD`,t={10143:`GOT IT — LET ME PLAY`,143:`I ACCEPT — LET ME PLAY`}[10143]??`LETS GO`;return K`
      <div class="overlay">
        <div class="dialog">
          <div class="title">${e}</div>
          ${this._renderContent()}
          <hr class="divider"/>
          <button class="accept-btn" @click=${this._accept}>${t}</button>
        </div>
      </div>
    `}};Q([Z()],em.prototype,`open`,void 0),em=Q([Y(`disclaimer-modal`)],em);var tm=class extends J{constructor(...e){super(...e),this.tab=`pump`,this._handleHash=()=>{Jd();let e=window.location.hash.split(`?`)[0];e===`#vibecoins`||e.startsWith(`#vibecoins/`)?this.tab=`vibecoins`:this.tab=`pump`},this._onWalletChanged=()=>{W.refreshUser(),this.requestUpdate()},this._onOpenBuyDialog=e=>{let t=this.renderRoot?.querySelector(`buy-dialog`);t&&typeof t.open==`function`&&t.open(e.detail)}}static{this.styles=G`
    :host {
      display: block;
      min-height: 100vh;
    }

    main {
      padding-top: 64px;
      min-height: calc(100vh - 64px);
    }

    @media (max-width: 600px) {
      main {
        padding-top: 88px;
        min-height: calc(100vh - 88px);
      }
    }
  `}connectedCallback(){super.connectedCallback(),this._handleHash(),window.addEventListener(`hashchange`,this._handleHash),Vu.addEventListener(`wallet-changed`,this._onWalletChanged),window.addEventListener(`open-buy-dialog`,this._onOpenBuyDialog),W.start(),W.refreshUser()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,this._handleHash),Vu.removeEventListener(`wallet-changed`,this._onWalletChanged),window.removeEventListener(`open-buy-dialog`,this._onOpenBuyDialog)}render(){return K`
      <header-bar></header-bar>
      <main>
        ${this.tab===`pump`?K`<pump-tab></pump-tab>`:``}
        ${this.tab===`vibecoins`?K`<vibecoins-tab></vibecoins-tab>`:``}
      </main>
      <buy-dialog></buy-dialog>
      <tx-confirm-dialog></tx-confirm-dialog>
      <disclaimer-modal></disclaimer-modal>
    `}};Q([Z()],tm.prototype,`tab`,void 0),tm=Q([Y(`app-root`)],tm);function nm(e){let t=e instanceof Error?e.message:String(e),n=e instanceof Error?e.stack??e.message:String(e);window.dispatchEvent(new CustomEvent(`app-error-show`,{detail:{short:t,full:n,name:`UNCAUGHT ERROR`}}))}window.addEventListener(`error`,e=>nm(e.error??e.message)),window.addEventListener(`unhandledrejection`,e=>nm(e.reason));