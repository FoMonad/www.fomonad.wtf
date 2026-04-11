import{$ as e,$t as t,A as n,An as r,At as i,B as a,Bn as o,Bt as s,C as c,Cn as l,Ct as u,D as d,Dn as f,Dt as p,E as m,En as h,Et as g,F as _,Fn as v,Ft as y,G as b,Gn as x,Gt as S,H as C,Hn as w,Ht as ee,I as te,In as ne,It as re,J as ie,Jn as ae,Jt as oe,K as T,Kn as se,Kt as ce,L as le,Ln as ue,M as de,Mn as fe,Mt as pe,N as me,Nn as he,Nt as ge,O as _e,On as ve,Ot as ye,P as be,Pn as xe,Pt as Se,Q as Ce,Qt as we,R as Te,Rn as Ee,Rt as De,S as Oe,Sn as ke,St as Ae,T as je,Tn as Me,Tt as Ne,U as Pe,Un as Fe,Ut as Ie,V as Le,Vn as Re,Vt as ze,W as Be,Wn as Ve,Wt as He,X as Ue,Xt as We,Y as Ge,Yt as Ke,Z as qe,Zt as Je,_ as Ye,_n as Xe,_t as Ze,a as Qe,an as $e,at as et,b as tt,bn as E,bt as nt,c as rt,cn as it,ct as at,d as ot,dn as st,dt as ct,en as lt,et as ut,f as dt,fn as ft,ft as pt,g as mt,gn as ht,gt,h as _t,hn as vt,ht as yt,i as bt,in as xt,it as St,j as Ct,jn as wt,jt as Tt,k as Et,kn as Dt,kt as Ot,l as kt,ln as At,lt as jt,m as Mt,mn as D,mt as Nt,nn as Pt,nt as Ft,o as It,on as Lt,ot as Rt,p as zt,pn as Bt,pt as Vt,q as Ht,qn as Ut,qt as O,r as Wt,rn as Gt,rt as Kt,s as qt,sn as Jt,st as Yt,tn as Xt,tt as Zt,u as Qt,un as $t,ut as en,v as tn,vn as nn,vt as rn,w as an,wn as on,wt as sn,x as cn,xn as ln,xt as un,y as dn,yn as fn,yt as pn,z as mn,zn as hn,zt as gn}from"./localBatchGatewayRequest-BDnqlmbC.js";import{A as _n,C as vn,D as yn,E as bn,F as xn,M as Sn,N as Cn,O as wn,S as Tn,T as En,V as Dn,_ as On,a as kn,b as An,c as jn,d as Mn,f as Nn,g as Pn,h as Fn,i as In,k as Ln,l as Rn,m as zn,n as Bn,o as Vn,p as Hn,r as Un,s as Wn,t as Gn,u as Kn,v as qn,w as Jn,x as Yn,y as Xn}from"./utils-B0Fw2xa_.js";var Zn=Object.defineProperty,Qn=(e,t)=>{let n={};for(var r in e)Zn(n,r,{get:e[r],enumerable:!0});return t||Zn(n,Symbol.toStringTag,{value:`Module`}),n};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function $n(e){let t;if(typeof e==`string`)t=Re(e);else{let n=hn(e),r=e.length;for(let i=0;i<r;i++){let r=e[i];if(!x(r)){t=Re(r,n);break}}}if(!t)throw new Ve({signature:e});return t}function er(e){let t=[];if(typeof e==`string`){let n=w(e),r=n.length;for(let e=0;e<r;e++)t.push(o(n[e],{modifiers:se}))}else{let n=hn(e),r=e.length;for(let i=0;i<r;i++){let r=e[i];if(x(r))continue;let a=w(r),s=a.length;for(let e=0;e<s;e++)t.push(o(a[e],{modifiers:se,structs:n}))}}if(t.length===0)throw new Fe({params:e});return t}function k(e,t,n){let r=e[t.name];if(typeof r==`function`)return r;let i=e[n];return typeof i==`function`?i:n=>t(e,n)}var tr=class extends v{constructor(e){super(`Filter type "${e}" is not supported.`,{name:`FilterTypeNotSupportedError`})}},nr=`/docs/contract/encodeEventTopics`;function rr(e){let{abi:t,eventName:n,args:r}=e,i=t[0];if(n){let e=lt({abi:t,name:n});if(!e)throw new Dt(n,{docsPath:nr});i=e}if(i.type!==`event`)throw new Dt(void 0,{docsPath:nr});let a=Bt(Ee(i)),o=[];if(r&&`inputs`in i){let e=i.inputs?.filter(e=>`indexed`in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(o=e?.map((e,n)=>Array.isArray(t[n])?t[n].map((r,i)=>ir({param:e,value:t[n][i]})):t[n]!==void 0&&t[n]!==null?ir({param:e,value:t[n]}):null)??[])}return[a,...o]}function ir({param:e,value:t}){if(e.type===`string`||e.type===`bytes`)return D(nn(t));if(e.type===`tuple`||e.type.match(/^(.*)\[(\d+)?\]$/))throw new tr(e.type);return Xt([e],[t])}function ar(e,{method:t}){let n={};return e.transport.type===`fallback`&&e.transport.onResponse?.(({method:e,response:r,status:i,transport:a})=>{i===`success`&&t===e&&(n[r]=a.request)}),(t=>n[t]||e.request)}async function or(e,t){let{address:n,abi:r,args:i,eventName:a,fromBlock:o,strict:s,toBlock:c}=t,l=ar(e,{method:`eth_newFilter`}),u=a?rr({abi:r,args:i,eventName:a}):void 0,d=await e.request({method:`eth_newFilter`,params:[{address:n,fromBlock:typeof o==`bigint`?E(o):o,toBlock:typeof c==`bigint`?E(c):c,topics:u}]});return{abi:r,args:i,eventName:a,id:d,request:l(d),strict:!!s,type:`event`}}var sr=3;function cr(e,{abi:t,address:n,args:r,docsPath:a,functionName:o,sender:s}){let c=e instanceof re?e:e instanceof v?e.walk(e=>`data`in e)||e.walk():{},{code:l,data:u,details:d,message:f,shortMessage:p}=c;return new ge(e instanceof ve?new y({functionName:o}):[sr,Yt.code].includes(l)&&(u||d||f||p)||l===at.code&&d===`execution reverted`&&u?new Se({abi:t,data:typeof u==`object`?u.data:u,functionName:o,message:c instanceof i?d:p??f}):e,{abi:t,args:r,contractAddress:n,docsPath:a,functionName:o,sender:s})}function lr(e){return At(`0x${D(`0x${e.substring(4)}`).substring(26)}`)}async function ur({hash:e,signature:t}){let n=ue(e)?e:ke(e),{secp256k1:r}=await Zt(async()=>{let{secp256k1:e}=await Promise.resolve().then(()=>Nc);return{secp256k1:e}},void 0,import.meta.url);return`0x${(()=>{if(typeof t==`object`&&`r`in t&&`s`in t){let{r:e,s:n,v:i,yParity:a}=t,o=dr(Number(a??i));return new r.Signature(l(e),l(n)).addRecoveryBit(o)}let e=ue(t)?t:ke(t);if(ne(e)!==65)throw Error(`invalid signature length`);let n=dr(Me(`0x${e.slice(130)}`));return r.Signature.fromCompact(e.substring(2,130)).addRecoveryBit(n)})().recoverPublicKey(n.substring(2)).toHex(!1)}`}function dr(e){if(e===0||e===1)return e;if(e===27)return 0;if(e===28)return 1;throw Error(`Invalid yParityOrV value`)}async function fr({hash:e,signature:t}){return lr(await ur({hash:e,signature:t}))}function pr(e,t=`hex`){let n=mr(e),r=We(new Uint8Array(n.length));return n.encode(r),t===`hex`?fn(r.bytes):r.bytes}function mr(e){return Array.isArray(e)?hr(e.map(e=>mr(e))):gr(e)}function hr(e){let t=e.reduce((e,t)=>e+t.length,0),n=_r(t);return{length:t<=55?1+t:1+n+t,encode(r){t<=55?r.pushByte(192+t):(r.pushByte(247+n),n===1?r.pushUint8(t):n===2?r.pushUint16(t):n===3?r.pushUint24(t):r.pushUint32(t));for(let{encode:t}of e)t(r)}}}function gr(e){let t=typeof e==`string`?ht(e):e,n=_r(t.length);return{length:t.length===1&&t[0]<128?1:t.length<=55?1+t.length:1+n+t.length,encode(e){t.length===1&&t[0]<128?e.pushBytes(t):t.length<=55?(e.pushByte(128+t.length),e.pushBytes(t)):(e.pushByte(183+n),n===1?e.pushUint8(t.length):n===2?e.pushUint16(t.length):n===3?e.pushUint24(t.length):e.pushUint32(t.length),e.pushBytes(t))}}}function _r(e){if(e<2**8)return 1;if(e<2**16)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new v(`Length is too large.`)}function vr(e){let{chainId:t,nonce:n,to:r}=e,i=e.contractAddress??e.address,a=D(Jt([`0x05`,pr([t?E(t):`0x`,i,n?E(n):`0x`])]));return r===`bytes`?ht(a):a}async function yr(e){let{authorization:t,signature:n}=e;return fr({hash:vr(t),signature:n??t})}var br=class extends v{constructor(e,{account:t,docsPath:n,chain:r,data:i,gas:a,gasPrice:o,maxFeePerGas:s,maxPriorityFeePerGas:c,nonce:l,to:u,value:d}){let f=He({from:t?.address,to:u,value:d!==void 0&&`${ce(d)} ${r?.nativeCurrency?.symbol||`ETH`}`,data:i,gas:a,gasPrice:o!==void 0&&`${S(o)} gwei`,maxFeePerGas:s!==void 0&&`${S(s)} gwei`,maxPriorityFeePerGas:c!==void 0&&`${S(c)} gwei`,nonce:l});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages,` `]:[],`Estimate Gas Arguments:`,f].filter(Boolean),name:`EstimateGasExecutionError`}),Object.defineProperty(this,`cause`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cause=e}};function xr(t,{docsPath:n,...r}){return new br((()=>{let n=e(t,r);return n instanceof ut?t:n})(),{docsPath:n,...r})}var Sr=class extends v{constructor(){super("`baseFeeMultiplier` must be greater than 1.",{name:`BaseFeeScalarError`})}},Cr=class extends v{constructor(){super(`Chain does not support EIP-1559 fees.`,{name:`Eip1559FeesNotSupportedError`})}},wr=class extends v{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${S(e)} gwei).`,{name:`MaxFeePerGasTooLowError`})}},Tr=class extends v{constructor({blockHash:e,blockNumber:t}){let n=`Block`;e&&(n=`Block at hash "${e}"`),t&&(n=`Block at number "${t}"`),super(`${n} could not be found.`,{name:`BlockNotFoundError`})}},Er={"0x0":`legacy`,"0x1":`eip2930`,"0x2":`eip1559`,"0x3":`eip4844`,"0x4":`eip7702`};function Dr(e,t){let n={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?Me(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?Me(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?Er[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return e.authorizationList&&(n.authorizationList=Or(e.authorizationList)),n.yParity=(()=>{if(e.yParity)return Number(e.yParity);if(typeof n.v==`bigint`){if(n.v===0n||n.v===27n)return 0;if(n.v===1n||n.v===28n)return 1;if(n.v>=35n)return+(n.v%2n==0n)}})(),n.type===`legacy`&&(delete n.accessList,delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas,delete n.yParity),n.type===`eip2930`&&(delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas),n.type===`eip1559`&&delete n.maxFeePerBlobGas,n}function Or(e){return e.map(e=>({address:e.address,chainId:Number(e.chainId),nonce:Number(e.nonce),r:e.r,s:e.s,yParity:Number(e.yParity)}))}function kr(e,t){let n=(e.transactions??[]).map(e=>typeof e==`string`?e:Dr(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:n,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}async function Ar(e,{blockHash:t,blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`,includeTransactions:i}={}){let a=i??!1,o=n===void 0?void 0:E(n),s=null;if(s=t?await e.request({method:`eth_getBlockByHash`,params:[t,a]},{dedupe:!0}):await e.request({method:`eth_getBlockByNumber`,params:[o||r,a]},{dedupe:!!o}),!s)throw new Tr({blockHash:t,blockNumber:n});return(e.chain?.formatters?.block?.format||kr)(s,`getBlock`)}async function jr(e){let t=await e.request({method:`eth_gasPrice`});return BigInt(t)}async function Mr(e,t){return Nr(e,t)}async function Nr(e,t){let{block:n,chain:r=e.chain,request:i}=t||{};try{let t=r?.fees?.maxPriorityFeePerGas??r?.fees?.defaultPriorityFee;if(typeof t==`function`){let r=await t({block:n||await k(e,Ar,`getBlock`)({}),client:e,request:i});if(r===null)throw Error();return r}return t===void 0?l(await e.request({method:`eth_maxPriorityFeePerGas`})):t}catch{let[t,r]=await Promise.all([n?Promise.resolve(n):k(e,Ar,`getBlock`)({}),k(e,jr,`getGasPrice`)({})]);if(typeof t.baseFeePerGas!=`bigint`)throw new Cr;let i=r-t.baseFeePerGas;return i<0n?0n:i}}async function Pr(e,t){return Fr(e,t)}async function Fr(e,t){let{block:n,chain:r=e.chain,request:i,type:a=`eip1559`}=t||{},o=await(async()=>typeof r?.fees?.baseFeeMultiplier==`function`?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):r?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new Sr;let s=10**(o.toString().split(`.`)[1]?.length??0),c=e=>e*BigInt(Math.ceil(o*s))/BigInt(s),l=n||await k(e,Ar,`getBlock`)({});if(typeof r?.fees?.estimateFeesPerGas==`function`){let t=await r.fees.estimateFeesPerGas({block:n,client:e,multiply:c,request:i,type:a});if(t!==null)return t}if(a===`eip1559`){if(typeof l.baseFeePerGas!=`bigint`)throw new Cr;let t=typeof i?.maxPriorityFeePerGas==`bigint`?i.maxPriorityFeePerGas:await Nr(e,{block:l,chain:r,request:i}),n=c(l.baseFeePerGas);return{maxFeePerGas:i?.maxFeePerGas??n+t,maxPriorityFeePerGas:t}}return{gasPrice:i?.gasPrice??c(await k(e,jr,`getGasPrice`)({}))}}async function Ir(e,{address:t,blockTag:n=`latest`,blockNumber:r}){return Me(await e.request({method:`eth_getTransactionCount`,params:[t,typeof r==`bigint`?E(r):n]},{dedupe:!!r}))}function Lr(e){let{kzg:t}=e,n=e.to??(typeof e.blobs[0]==`string`?`hex`:`bytes`),r=typeof e.blobs[0]==`string`?e.blobs.map(e=>ht(e)):e.blobs,i=[];for(let e of r)i.push(Uint8Array.from(t.blobToKzgCommitment(e)));return n===`bytes`?i:i.map(e=>fn(e))}function Rr(e){let{kzg:t}=e,n=e.to??(typeof e.blobs[0]==`string`?`hex`:`bytes`),r=typeof e.blobs[0]==`string`?e.blobs.map(e=>ht(e)):e.blobs,i=typeof e.commitments[0]==`string`?e.commitments.map(e=>ht(e)):e.commitments,a=[];for(let e=0;e<r.length;e++){let n=r[e],o=i[e];a.push(Uint8Array.from(t.computeBlobKzgProof(n,o)))}return n===`bytes`?a:a.map(e=>fn(e))}function zr(e,t,n,r){if(typeof e.setBigUint64==`function`)return e.setBigUint64(t,n,r);let i=BigInt(32),a=BigInt(4294967295),o=Number(n>>i&a),s=Number(n&a),c=r?4:0,l=r?0:4;e.setUint32(t+c,o,r),e.setUint32(t+l,s,r)}function Br(e,t,n){return e&t^~e&n}function Vr(e,t,n){return e&t^e&n^t&n}var Hr=class extends Yn{constructor(e,t,n,r){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=_n(this.buffer)}update(e){vn(this),e=xn(e),Tn(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length;for(let a=0;a<i;){let o=Math.min(r-this.pos,i-a);if(o===r){let t=_n(e);for(;r<=i-a;a+=r)this.process(t,a);continue}n.set(e.subarray(a,a+o),this.pos),this.pos+=o,a+=o,this.pos===r&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){vn(this),bn(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,yn(this.buffer.subarray(a)),this.padOffset>r-a&&(this.process(n,0),a=0);for(let e=a;e<r;e++)t[e]=0;zr(n,r-8,BigInt(this.length*8),i),this.process(n,0);let o=_n(e),s=this.outputLen;if(s%4)throw Error(`_sha2: outputLen should be aligned to 32bit`);let c=s/4,l=this.get();if(c>l.length)throw Error(`_sha2: outputLen bigger than state`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneInto(e){e||=new this.constructor,e.set(...this.get());let{blockLen:t,buffer:n,length:r,finished:i,destroyed:a,pos:o}=this;return e.destroyed=a,e.finished=i,e.length=r,e.pos=o,r%t&&e.buffer.set(n),e}clone(){return this._cloneInto()}},Ur=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Wr=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Gr=new Uint32Array(64),Kr=class extends Hr{constructor(e=32){super(64,e,8,!1),this.A=Ur[0]|0,this.B=Ur[1]|0,this.C=Ur[2]|0,this.D=Ur[3]|0,this.E=Ur[4]|0,this.F=Ur[5]|0,this.G=Ur[6]|0,this.H=Ur[7]|0}get(){let{A:e,B:t,C:n,D:r,E:i,F:a,G:o,H:s}=this;return[e,t,n,r,i,a,o,s]}set(e,t,n,r,i,a,o,s){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=s|0}process(e,t){for(let n=0;n<16;n++,t+=4)Gr[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=Gr[e-15],n=Gr[e-2],r=Cn(t,7)^Cn(t,18)^t>>>3;Gr[e]=(Cn(n,17)^Cn(n,19)^n>>>10)+Gr[e-7]+r+Gr[e-16]|0}let{A:n,B:r,C:i,D:a,E:o,F:s,G:c,H:l}=this;for(let e=0;e<64;e++){let t=Cn(o,6)^Cn(o,11)^Cn(o,25),u=l+t+Br(o,s,c)+Wr[e]+Gr[e]|0,d=(Cn(n,2)^Cn(n,13)^Cn(n,22))+Vr(n,r,i)|0;l=c,c=s,s=o,o=a+u|0,a=i,i=r,r=n,n=u+d|0}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,s=s+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,a,o,s,c,l)}roundClean(){yn(Gr)}destroy(){this.set(0,0,0,0,0,0,0,0),yn(this.buffer)}},qr=Dn(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e)));qr[0],qr[1];var Jr=Ln(()=>new Kr),Yr=Jr;function Xr(e,t){let n=t||`hex`,r=Yr(ue(e,{strict:!1})?nn(e):e);return n===`bytes`?r:ke(r)}function Zr(e){let{commitment:t,version:n=1}=e,r=e.to??(typeof t==`string`?`hex`:`bytes`),i=Xr(t,`bytes`);return i.set([n],0),r===`bytes`?i:fn(i)}function Qr(e){let{commitments:t,version:n}=e,r=e.to??(typeof t[0]==`string`?`hex`:`bytes`),i=[];for(let e of t)i.push(Zr({commitment:e,to:r,version:n}));return i}var $r=6,ei=4096,ti=32*ei,ni=ti*$r-1-1*ei*$r,ri=class extends v{constructor({maxSize:e,size:t}){super(`Blob size is too large.`,{metaMessages:[`Max: ${e} bytes`,`Given: ${t} bytes`],name:`BlobSizeTooLargeError`})}},ii=class extends v{constructor(){super(`Blob data must not be empty.`,{name:`EmptyBlobError`})}};function ai(e){let t=e.to??(typeof e.data==`string`?`hex`:`bytes`),n=typeof e.data==`string`?ht(e.data):e.data,r=ne(n);if(!r)throw new ii;if(r>761855)throw new ri({maxSize:ni,size:r});let i=[],a=!0,o=0;for(;a;){let e=We(new Uint8Array(ti)),t=0;for(;t<ei;){let r=n.slice(o,o+31);if(e.pushByte(0),e.pushBytes(r),r.length<31){e.pushByte(128),a=!1;break}t++,o+=31}i.push(e)}return t===`bytes`?i.map(e=>e.bytes):i.map(e=>fn(e.bytes))}function oi(e){let{data:t,kzg:n,to:r}=e,i=e.blobs??ai({data:t,to:r}),a=e.commitments??Lr({blobs:i,kzg:n,to:r}),o=e.proofs??Rr({blobs:i,commitments:a,kzg:n,to:r}),s=[];for(let e=0;e<i.length;e++)s.push({blob:i[e],commitment:a[e],proof:o[e]});return s}function si(e){if(e.type)return e.type;if(e.authorizationList!==void 0)return`eip7702`;if(e.blobs!==void 0||e.blobVersionedHashes!==void 0||e.maxFeePerBlobGas!==void 0||e.sidecars!==void 0)return`eip4844`;if(e.maxFeePerGas!==void 0||e.maxPriorityFeePerGas!==void 0)return`eip1559`;if(e.gasPrice!==void 0)return e.accessList===void 0?`legacy`:`eip2930`;throw new De({transaction:e})}function ci(t,{docsPath:n,...r}){return new gn((()=>{let n=e(t,r);return n instanceof ut?t:n})(),{docsPath:n,...r})}async function li(e){return Me(await e.request({method:`eth_chainId`},{dedupe:!0}))}async function ui(e,n){let{account:r=e.account,accessList:i,authorizationList:a,chain:o=e.chain,blobVersionedHashes:s,blobs:c,data:l,gas:u,gasPrice:d,maxFeePerBlobGas:f,maxFeePerGas:p,maxPriorityFeePerGas:m,nonce:h,nonceManager:g,to:_,type:v,value:y,...b}=n,x=await(async()=>{if(!r||!g||h!==void 0)return h;let n=t(r),i=o?o.id:await k(e,li,`getChainId`)({});return await g.consume({address:n.address,chainId:i,client:e})})();Ge(n);let S=o?.formatters?.transactionRequest?.format,C=(S||qe)({...Ce(b,{format:S}),account:r?t(r):void 0,accessList:i,authorizationList:a,blobs:c,blobVersionedHashes:s,data:l,gas:u,gasPrice:d,maxFeePerBlobGas:f,maxFeePerGas:p,maxPriorityFeePerGas:m,nonce:x,to:_,type:v,value:y},`fillTransaction`);try{let t=await e.request({method:`eth_fillTransaction`,params:[C]}),r=(o?.formatters?.transaction?.format||Dr)(t.tx);delete r.blockHash,delete r.blockNumber,delete r.r,delete r.s,delete r.transactionIndex,delete r.v,delete r.yParity,r.data=r.input,r.gas&&=n.gas??r.gas,r.gasPrice&&=n.gasPrice??r.gasPrice,r.maxFeePerBlobGas&&=n.maxFeePerBlobGas??r.maxFeePerBlobGas,r.maxFeePerGas&&=n.maxFeePerGas??r.maxFeePerGas,r.maxPriorityFeePerGas&&=n.maxPriorityFeePerGas??r.maxPriorityFeePerGas,r.nonce&&=n.nonce??r.nonce;let i=await(async()=>{if(typeof o?.fees?.baseFeeMultiplier==`function`){let t=await k(e,Ar,`getBlock`)({});return o.fees.baseFeeMultiplier({block:t,client:e,request:n})}return o?.fees?.baseFeeMultiplier??1.2})();if(i<1)throw new Sr;let a=10**(i.toString().split(`.`)[1]?.length??0),s=e=>e*BigInt(Math.ceil(i*a))/BigInt(a);return r.maxFeePerGas&&!n.maxFeePerGas&&(r.maxFeePerGas=s(r.maxFeePerGas)),r.gasPrice&&!n.gasPrice&&(r.gasPrice=s(r.gasPrice)),{raw:t.raw,transaction:{from:C.from,...r}}}catch(t){throw ci(t,{...n,chain:e.chain})}}var di=[`blobVersionedHashes`,`chainId`,`fees`,`gas`,`nonce`,`type`],fi=new Map,pi=new st(128);async function mi(e,n){let r=n;r.account??=e.account,r.parameters??=di;let{account:i,chain:a=e.chain,nonceManager:o,parameters:s}=r,c=(()=>{if(typeof a?.prepareTransactionRequest==`function`)return{fn:a.prepareTransactionRequest,runAt:[`beforeFillTransaction`]};if(Array.isArray(a?.prepareTransactionRequest))return{fn:a.prepareTransactionRequest[0],runAt:a.prepareTransactionRequest[1].runAt}})(),l;async function u(){return l||(r.chainId===void 0?a?a.id:(l=await k(e,li,`getChainId`)({}),l):r.chainId)}let d=i&&t(i),f=r.nonce;if(s.includes(`nonce`)&&f===void 0&&d&&o){let t=await u();f=await o.consume({address:d.address,chainId:t,client:e})}c?.fn&&c.runAt?.includes(`beforeFillTransaction`)&&(r=await c.fn({...r,chain:a},{phase:`beforeFillTransaction`}),f??=r.nonce);let p=!((s.includes(`blobVersionedHashes`)||s.includes(`sidecars`))&&r.kzg&&r.blobs||pi.get(e.uid)===!1||![`fees`,`gas`].some(e=>s.includes(e)))&&(s.includes(`chainId`)&&typeof r.chainId!=`number`||s.includes(`nonce`)&&typeof f!=`number`||s.includes(`fees`)&&typeof r.gasPrice!=`bigint`&&(typeof r.maxFeePerGas!=`bigint`||typeof r.maxPriorityFeePerGas!=`bigint`)||s.includes(`gas`)&&typeof r.gas!=`bigint`)?await k(e,ui,`fillTransaction`)({...r,nonce:f}).then(t=>{let{chainId:n,from:i,gas:a,gasPrice:o,nonce:s,maxFeePerBlobGas:c,maxFeePerGas:l,maxPriorityFeePerGas:u,type:d,...f}=t.transaction;return pi.set(e.uid,!0),{...r,...i?{from:i}:{},...d&&!r.type?{type:d}:{},...n===void 0?{}:{chainId:n},...a===void 0?{}:{gas:a},...o===void 0?{}:{gasPrice:o},...s===void 0?{}:{nonce:s},...c!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxFeePerBlobGas:c}:{},...l!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxFeePerGas:l}:{},...u!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxPriorityFeePerGas:u}:{},...`nonceKey`in f&&f.nonceKey!==void 0?{nonceKey:f.nonceKey}:{}}}).catch(t=>{let n=t;return n.name===`TransactionExecutionError`&&n.walk?.(e=>{let t=e;return t.name===`MethodNotFoundRpcError`||t.name===`MethodNotSupportedRpcError`})&&pi.set(e.uid,!1),r}):r;f??=p.nonce,r={...p,...d?{from:d?.address}:{},...f?{nonce:f}:{}};let{blobs:m,gas:h,kzg:g,type:_}=r;c?.fn&&c.runAt?.includes(`beforeFillParameters`)&&(r=await c.fn({...r,chain:a},{phase:`beforeFillParameters`}));let v;async function y(){return v||(v=await k(e,Ar,`getBlock`)({blockTag:`latest`}),v)}if(s.includes(`nonce`)&&f===void 0&&d&&!o&&(r.nonce=await k(e,Ir,`getTransactionCount`)({address:d.address,blockTag:`pending`})),(s.includes(`blobVersionedHashes`)||s.includes(`sidecars`))&&m&&g){let e=Lr({blobs:m,kzg:g});if(s.includes(`blobVersionedHashes`)){let t=Qr({commitments:e,to:`hex`});r.blobVersionedHashes=t}if(s.includes(`sidecars`)){let t=oi({blobs:m,commitments:e,proofs:Rr({blobs:m,commitments:e,kzg:g}),to:`hex`});r.sidecars=t}}if(s.includes(`chainId`)&&(r.chainId=await u()),(s.includes(`fees`)||s.includes(`type`))&&_===void 0)try{r.type=si(r)}catch{let t=fi.get(e.uid);t===void 0&&(t=typeof(await y())?.baseFeePerGas==`bigint`,fi.set(e.uid,t)),r.type=t?`eip1559`:`legacy`}if(s.includes(`fees`))if(r.type!==`legacy`&&r.type!==`eip2930`){if(r.maxFeePerGas===void 0||r.maxPriorityFeePerGas===void 0){let{maxFeePerGas:t,maxPriorityFeePerGas:n}=await Fr(e,{block:await y(),chain:a,request:r});if(r.maxPriorityFeePerGas===void 0&&r.maxFeePerGas&&r.maxFeePerGas<n)throw new wr({maxPriorityFeePerGas:n});r.maxPriorityFeePerGas=n,r.maxFeePerGas=t}}else{if(r.maxFeePerGas!==void 0||r.maxPriorityFeePerGas!==void 0)throw new Cr;if(r.gasPrice===void 0){let{gasPrice:t}=await Fr(e,{block:await y(),chain:a,request:r,type:`legacy`});r.gasPrice=t}}return s.includes(`gas`)&&h===void 0&&(r.gas=await k(e,hi,`estimateGas`)({...r,account:d,prepare:d?.type===`local`?[]:[`blobVersionedHashes`]})),c?.fn&&c.runAt?.includes(`afterFillParameters`)&&(r=await c.fn({...r,chain:a},{phase:`afterFillParameters`})),Ge(r),delete r.parameters,r}async function hi(e,n){let{account:r=e.account,prepare:i=!0}=n,a=r?t(r):void 0,o=(()=>{if(Array.isArray(i))return i;if(a?.type!==`local`)return[`blobVersionedHashes`]})();try{let t=await(async()=>{if(n.to)return n.to;if(n.authorizationList&&n.authorizationList.length>0)return await yr({authorization:n.authorizationList[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`")})})(),{accessList:r,authorizationList:s,blobs:c,blobVersionedHashes:l,blockNumber:u,blockTag:d,data:f,gas:p,gasPrice:m,maxFeePerBlobGas:h,maxFeePerGas:g,maxPriorityFeePerGas:_,nonce:y,value:b,stateOverride:x,...S}=i?await mi(e,{...n,parameters:o,to:t}):n;if(p&&n.gas!==p)return p;let C=(typeof u==`bigint`?E(u):void 0)||d,w=Ue(x);Ge(n);let ee=e.chain?.formatters?.transactionRequest?.format,te=(ee||qe)({...Ce(S,{format:ee}),account:a,accessList:r,authorizationList:s,blobs:c,blobVersionedHashes:l,data:f,gasPrice:m,maxFeePerBlobGas:h,maxFeePerGas:g,maxPriorityFeePerGas:_,nonce:y,to:t,value:b},`estimateGas`);return BigInt(await e.request({method:`eth_estimateGas`,params:w?[te,C??e.experimental_blockTag??`latest`,w]:C?[te,C]:[te]}))}catch(t){throw xr(t,{...n,account:a,chain:e.chain})}}async function gi(e,n){let{abi:r,address:i,args:a,functionName:o,dataSuffix:s=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,...c}=n,l=we({abi:r,args:a,functionName:o});try{return await k(e,hi,`estimateGas`)({data:`${l}${s?s.replace(`0x`,``):``}`,to:i,...c})}catch(e){throw cr(e,{abi:r,address:i,args:a,docsPath:`/docs/contract/estimateContractGas`,functionName:o,sender:(c.account?t(c.account):void 0)?.address})}}function _i(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,blockTimestamp:e.blockTimestamp?BigInt(e.blockTimestamp):e.blockTimestamp===null?null:void 0,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}var vi=`/docs/contract/decodeEventLog`;function yi(e){let{abi:t,data:n,strict:i,topics:a}=e,o=i??!0,[s,...c]=a;if(!s)throw new r({docsPath:vi});let l=t.find(e=>e.type===`event`&&s===Bt(Ee(e)));if(!(l&&`name`in l)||l.type!==`event`)throw new wt(s,{docsPath:vi});let{name:u,inputs:d}=l,p=d?.some(e=>!(`name`in e&&e.name)),m=p?[]:{},h=d.map((e,t)=>[e,t]).filter(([e])=>`indexed`in e&&e.indexed),g=[];for(let e=0;e<h.length;e++){let[t,n]=h[e],r=c[e];if(!r){if(o)throw new xe({abiItem:l,param:t});g.push([t,n]);continue}m[p?n:t.name||n]=bi({param:t,value:r})}let _=d.filter(e=>!(`indexed`in e&&e.indexed)),v=o?_:[...g.map(([e])=>e),..._];if(v.length>0){if(n&&n!==`0x`)try{let e=Ke(v,n);if(e){let t=0;if(!o)for(let[n,r]of g)m[p?r:n.name||r]=e[t++];if(p)for(let n=0;n<d.length;n++)m[n]===void 0&&t<e.length&&(m[n]=e[t++]);else for(let n=0;n<_.length;n++)m[_[n].name]=e[t++]}}catch(e){if(o)throw e instanceof f||e instanceof Je?new he({abiItem:l,data:n,params:v,size:ne(n)}):e}else if(o)throw new he({abiItem:l,data:`0x`,params:v,size:0})}return{eventName:u,args:Object.values(m).length>0?m:void 0}}function bi({param:e,value:t}){return e.type===`string`||e.type===`bytes`||e.type===`tuple`||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(Ke([e],t)||[])[0]}function xi(e){let{abi:t,args:n,logs:r,strict:i=!0}=e,a=(()=>{if(e.eventName)return Array.isArray(e.eventName)?e.eventName:[e.eventName]})(),o=t.filter(e=>e.type===`event`).map(e=>({abi:e,selector:Bt(e)}));return r.map(e=>{let t=typeof e.blockNumber==`string`?_i(e):e,r=o.filter(e=>t.topics[0]===e.selector);if(r.length===0)return null;let s,c;for(let e of r)try{s=yi({...t,abi:[e.abi],strict:!0}),c=e;break}catch{}if(!s&&!i){c=r[0];try{s=yi({data:t.data,topics:t.topics,abi:[c.abi],strict:!1})}catch{let e=c.abi.inputs?.some(e=>!(`name`in e&&e.name));return{...t,args:e?[]:{},eventName:c.abi.name}}}return!s||!c||a&&!a.includes(s.eventName)||!Si({args:s.args,inputs:c.abi.inputs,matchArgs:n})?null:{...s,...t}}).filter(Boolean)}function Si(e){let{args:t,inputs:n,matchArgs:r}=e;if(!r)return!0;if(!t)return!1;function i(e,t,n){try{return e.type===`address`?ie(t,n):e.type===`string`||e.type===`bytes`?D(nn(t))===n:t===n}catch{return!1}}return Array.isArray(t)&&Array.isArray(r)?r.every((e,r)=>{if(e==null)return!0;let a=n[r];return a?(Array.isArray(e)?e:[e]).some(e=>i(a,e,t[r])):!1}):typeof t==`object`&&!Array.isArray(t)&&typeof r==`object`&&!Array.isArray(r)?Object.entries(r).every(([e,r])=>{if(r==null)return!0;let a=n.find(t=>t.name===e);return a?(Array.isArray(r)?r:[r]).some(n=>i(a,n,t[e])):!1}):!1}async function Ci(e,{address:t,blockHash:n,fromBlock:r,toBlock:i,event:a,events:o,args:s,strict:c}={}){let l=c??!1,u=o??(a?[a]:void 0),d=[];u&&(d=[u.flatMap(e=>rr({abi:[e],eventName:e.name,args:o?void 0:s}))],a&&(d=d[0]));let f;f=n?await e.request({method:`eth_getLogs`,params:[{address:t,topics:d,blockHash:n}]}):await e.request({method:`eth_getLogs`,params:[{address:t,topics:d,fromBlock:typeof r==`bigint`?E(r):r,toBlock:typeof i==`bigint`?E(i):i}]});let p=f.map(e=>_i(e));return u?xi({abi:u,args:s,logs:p,strict:l}):p}async function wi(e,t){let{abi:n,address:r,args:i,blockHash:a,eventName:o,fromBlock:s,toBlock:c,strict:l}=t,u=o?lt({abi:n,name:o}):void 0,d=u?void 0:n.filter(e=>e.type===`event`);return k(e,Ci,`getLogs`)({address:r,args:i,blockHash:a,event:u,events:d,fromBlock:s,toBlock:c,strict:l})}async function Ti(e,t){let{abi:n,address:r,args:i,functionName:a,...o}=t,s=we({abi:n,args:i,functionName:a});try{let{data:t}=await k(e,Wt,`call`)({...o,data:s,to:r});return Ht({abi:n,args:i,functionName:a,data:t||`0x`})}catch(e){throw cr(e,{abi:n,address:r,args:i,docsPath:`/docs/contract/readContract`,functionName:a})}}async function Ei(e,n){let{abi:r,address:i,args:a,functionName:o,dataSuffix:s=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,...c}=n,l=c.account?t(c.account):e.account,u=we({abi:r,args:a,functionName:o});try{let{data:t}=await k(e,Wt,`call`)({batch:!1,data:`${u}${s?s.replace(`0x`,``):``}`,to:i,...c,account:l});return{result:Ht({abi:r,args:a,functionName:o,data:t||`0x`}),request:{abi:r.filter(e=>`name`in e&&e.name===n.functionName),address:i,args:a,dataSuffix:s,functionName:o,...c,account:l}}}catch(e){throw cr(e,{abi:r,address:i,args:a,docsPath:`/docs/contract/simulateContract`,functionName:o,sender:l?.address})}}var Di=new Map,Oi=new Map,ki=0;function Ai(e,t,n){let r=++ki,i=()=>Di.get(e)||[],a=()=>{let t=i();Di.set(e,t.filter(e=>e.id!==r))},o=()=>{let t=i();if(!t.some(e=>e.id===r))return;let n=Oi.get(e);if(t.length===1&&n){let e=n();e instanceof Promise&&e.catch(()=>{})}a()},s=i();if(Di.set(e,[...s,{id:r,fns:t}]),s&&s.length>0)return o;let c={};for(let e in t)c[e]=((...t)=>{let n=i();if(n.length!==0)for(let r of n)r.fns[e]?.(...t)});let l=n(c);return typeof l==`function`&&Oi.set(e,l),o}async function ji(e){return new Promise(t=>setTimeout(t,e))}function Mi(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let i=!0,a=()=>i=!1;return(async()=>{let o;t&&(o=await e({unpoll:a})),await ji(await n?.(o)??r);let s=async()=>{i&&(await e({unpoll:a}),await ji(r),s())};s()})(),a}var Ni=new Map,Pi=new Map;function Fi(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),n=t(e,Ni),r=t(e,Pi);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function Ii(e,{cacheKey:t,cacheTime:n=1/0}){let r=Fi(t),i=r.response.get();if(i&&n>0&&Date.now()-i.created.getTime()<n)return i.data;let a=r.promise.get();a||(a=e(),r.promise.set(a));try{let e=await a;return r.response.set({created:new Date,data:e}),e}finally{r.promise.clear()}}var Li=e=>`blockNumber.${e}`;async function Ri(e,{cacheTime:t=e.cacheTime}={}){let n=await Ii(()=>e.request({method:`eth_blockNumber`}),{cacheKey:Li(e.uid),cacheTime:t});return BigInt(n)}async function zi(e,{filter:t}){let n=`strict`in t&&t.strict,r=await t.request({method:`eth_getFilterChanges`,params:[t.id]});if(typeof r[0]==`string`)return r;let i=r.map(e=>_i(e));return!(`abi`in t)||!t.abi?i:xi({abi:t.abi,logs:i,strict:n})}async function Bi(e,{filter:t}){return t.request({method:`eth_uninstallFilter`,params:[t.id]})}function Vi(e,t){let{abi:n,address:r,args:i,batch:a=!0,eventName:o,fromBlock:s,onError:c,onLogs:l,poll:u,pollingInterval:d=e.pollingInterval,strict:f}=t;return(u===void 0?typeof s==`bigint`||!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):u)?(()=>{let t=f??!1;return Ai(O([`watchContractEvent`,r,i,a,e.uid,o,d,t,s]),{onLogs:l,onError:c},c=>{let l;s!==void 0&&(l=s-1n);let u,f=!1,p=Mi(async()=>{if(!f){try{u=await k(e,or,`createContractEventFilter`)({abi:n,address:r,args:i,eventName:o,strict:t,fromBlock:s})}catch{}f=!0;return}try{let s;if(u)s=await k(e,zi,`getFilterChanges`)({filter:u});else{let a=await k(e,Ri,`getBlockNumber`)({});s=l&&l<a?await k(e,wi,`getContractEvents`)({abi:n,address:r,args:i,eventName:o,fromBlock:l+1n,toBlock:a,strict:t}):[],l=a}if(s.length===0)return;if(a)c.onLogs(s);else for(let e of s)c.onLogs([e])}catch(e){u&&e instanceof at&&(f=!1),c.onError?.(e)}},{emitOnBegin:!0,interval:d});return async()=>{u&&await k(e,Bi,`uninstallFilter`)({filter:u}),p()}})})():(()=>{let t=f??!1,s=O([`watchContractEvent`,r,i,a,e.uid,o,d,t]),u=!0,p=()=>u=!1;return Ai(s,{onLogs:l,onError:c},t=>((async()=>{try{let a=(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})(),s=o?rr({abi:n,eventName:o,args:i}):[],{unsubscribe:c}=await a.subscribe({params:[`logs`,{address:r,topics:s}],onData(e){if(!u)return;let r=e.result;try{let{eventName:e,args:i}=yi({abi:n,data:r.data,topics:r.topics,strict:f}),a=_i(r,{args:i,eventName:e});t.onLogs([a])}catch(e){let n,i;if(e instanceof he||e instanceof xe){if(f)return;n=e.abiItem.name,i=e.abiItem.inputs?.some(e=>!(`name`in e&&e.name))}let a=_i(r,{args:i?[]:{},eventName:n});t.onLogs([a])}},onError(e){t.onError?.(e)}});p=c,u||p()}catch(e){c?.(e)}})(),()=>p()))})()}var Hi=class extends v{constructor({docsPath:e}={}){super([`Could not find an Account to execute with this Action.`,"Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."].join(`
`),{docsPath:e,docsSlug:`account`,name:`AccountNotFoundError`})}},Ui=class extends v{constructor({docsPath:e,metaMessages:t,type:n}){super(`Account type "${n}" is not supported.`,{docsPath:e,metaMessages:t,name:`AccountTypeNotSupportedError`})}};function Wi({chain:e,currentChainId:t}){if(!e)throw new Qt;if(t!==e.id)throw new kt({chain:e,currentChainId:t})}async function Gi(e,{serializedTransaction:t}){return e.request({method:`eth_sendRawTransaction`,params:[t]},{retryCount:0})}var Ki=new st(128);async function qi(e,n){let{account:r=e.account,assertChainId:i=!0,chain:a=e.chain,accessList:o,authorizationList:s,blobs:c,data:l,dataSuffix:u=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,type:_,value:y,...b}=n;if(r===void 0)throw new Hi({docsPath:`/docs/actions/wallet/sendTransaction`});let x=r?t(r):null;try{Ge(n);let t=await(async()=>{if(n.to)return n.to;if(n.to!==null&&s&&s.length>0)return await yr({authorization:s[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`.")})})();if(x?.type===`json-rpc`||x===null){let n;a!==null&&(n=await k(e,li,`getChainId`)({}),i&&Wi({currentChainId:n,chain:a}));let r=e.chain?.formatters?.transactionRequest?.format,v=(r||qe)({...Ce(b,{format:r}),accessList:o,account:x,authorizationList:s,blobs:c,chainId:n,data:l&&Lt([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,to:t,type:_,value:y},`sendTransaction`),S=Ki.get(e.uid),C=S?`wallet_sendTransaction`:`eth_sendTransaction`;try{return await e.request({method:C,params:[v]},{retryCount:0})}catch(t){if(S===!1)throw t;let n=t;if(n.name===`InvalidInputRpcError`||n.name===`InvalidParamsRpcError`||n.name===`MethodNotFoundRpcError`||n.name===`MethodNotSupportedRpcError`)return await e.request({method:`wallet_sendTransaction`,params:[v]},{retryCount:0}).then(t=>(Ki.set(e.uid,!0),t)).catch(t=>{let r=t;throw r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`?(Ki.set(e.uid,!1),n):r});throw n}}if(x?.type===`local`){let n=await k(e,mi,`prepareTransactionRequest`)({account:x,accessList:o,authorizationList:s,blobs:c,chain:a,data:l&&Lt([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,nonceManager:x.nonceManager,parameters:[...di,`sidecars`],type:_,value:y,...b,to:t}),r=a?.serializers?.transaction,i=await x.signTransaction(n,{serializer:r});return await k(e,Gi,`sendRawTransaction`)({serializedTransaction:i})}throw x?.type===`smart`?new Ui({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:`/docs/actions/bundler/sendUserOperation`,type:`smart`}):new Ui({docsPath:`/docs/actions/wallet/sendTransaction`,type:x?.type})}catch(e){throw e instanceof Ui?e:ci(e,{...n,account:x,chain:n.chain||void 0})}}async function Ji(e,t){return Ji.internal(e,qi,`sendTransaction`,t)}(function(e){async function n(e,n,r,i){let{abi:a,account:o=e.account,address:s,args:c,functionName:l,...u}=i;if(o===void 0)throw new Hi({docsPath:`/docs/contract/writeContract`});let d=o?t(o):null,f=we({abi:a,args:c,functionName:l});try{return await k(e,n,r)({data:f,to:s,account:d,...u})}catch(e){throw cr(e,{abi:a,address:s,args:c,docsPath:`/docs/contract/writeContract`,functionName:l,sender:d?.address})}}e.internal=n})(Ji||={});var Yi=class extends v{constructor(e){super(`Call bundle failed with status: ${e.statusCode}`,{name:`BundleFailedError`}),Object.defineProperty(this,`result`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.result=e}};function Xi(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,a)=>{let o=async({count:s=0}={})=>{let c=async({error:e})=>{let n=typeof t==`function`?t({count:s,error:e}):t;n&&await ji(n),o({count:s+1})};try{i(await e())}catch(e){if(s<n&&await r({count:s,error:e}))return c({error:e});a(e)}};o()})}var Zi={"0x0":`reverted`,"0x1":`success`};function Qi(e,t){let n={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>_i(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Me(e.transactionIndex):null,status:e.status?Zi[e.status]:null,type:e.type?Er[e.type]||e.type:null};return e.blobGasPrice&&(n.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(n.blobGasUsed=BigInt(e.blobGasUsed)),n}var $i=`0x5792579257925792579257925792579257925792579257925792579257925792`,ea=E(0,{size:32});async function ta(e,n){let{account:r=e.account,chain:i=e.chain,experimental_fallback:a,experimental_fallbackDelay:o=32,forceAtomic:s=!1,id:c,version:u=`2.0.0`}=n,d=r?t(r):null,f=n.capabilities;e.dataSuffix&&!n.capabilities?.dataSuffix&&(f=typeof e.dataSuffix==`string`?{...n.capabilities,dataSuffix:{value:e.dataSuffix,optional:!0}}:{...n.capabilities,dataSuffix:{value:e.dataSuffix.value,...e.dataSuffix.required?{}:{optional:!0}}});let p=n.calls.map(e=>{let t=e,n=t.abi?we({abi:t.abi,functionName:t.functionName,args:t.args}):t.data;return{data:t.dataSuffix&&n?Lt([n,t.dataSuffix]):n,to:t.to,value:t.value?E(t.value):void 0}});try{let t=await e.request({method:`wallet_sendCalls`,params:[{atomicRequired:s,calls:p,capabilities:f,chainId:E(i.id),from:d?.address,id:c,version:u}]},{retryCount:0});return typeof t==`string`?{id:t}:t}catch(t){let r=t;if(a&&(r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`||r.name===`UnknownRpcError`||r.details.toLowerCase().includes(`does not exist / is not available`)||r.details.toLowerCase().includes(`missing or invalid. request()`)||r.details.toLowerCase().includes(`did not match any variant of untagged enum`)||r.details.toLowerCase().includes(`account upgraded to unsupported contract`)||r.details.toLowerCase().includes(`eip-7702 not supported`)||r.details.toLowerCase().includes(`unsupported wc_ method`)||r.details.toLowerCase().includes(`feature toggled misconfigured`)||r.details.toLowerCase().includes(`jsonrpcengine: response has no error or result for request`))){if(f&&Object.values(f).some(e=>!e.optional)){let e="non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";throw new Ne(new v(e,{details:e}))}if(s&&p.length>1){let e="`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";throw new Kt(new v(e,{details:e}))}let t=[];for(let n of p){let r=qi(e,{account:d,chain:i,data:n.data,to:n.to,value:n.value?l(n.value):void 0});t.push(r),o>0&&await new Promise(e=>setTimeout(e,o))}let n=await Promise.allSettled(t);if(n.every(e=>e.status===`rejected`))throw n[0].reason;return{id:Lt([...n.map(e=>e.status===`fulfilled`?e.value:ea),E(i.id,{size:32}),$i])}}throw ci(t,{...n,account:d,chain:n.chain})}}async function na(e,t){async function n(t){if(t.endsWith(`5792579257925792579257925792579257925792579257925792579257925792`)){let n=h($e(t,-64,-32)),r=$e(t,0,-64).slice(2).match(/.{1,64}/g),i=await Promise.all(r.map(t=>ea.slice(2)===t?void 0:e.request({method:`eth_getTransactionReceipt`,params:[`0x${t}`]},{dedupe:!0}))),a=i.some(e=>e===null)?100:i.every(e=>e?.status===`0x1`)?200:i.every(e=>e?.status===`0x0`)?500:600;return{atomic:!1,chainId:Me(n),receipts:i.filter(Boolean),status:a,version:`2.0.0`}}return e.request({method:`wallet_getCallsStatus`,params:[t]})}let{atomic:r=!1,chainId:i,receipts:a,version:o=`2.0.0`,...s}=await n(t.id),[c,u]=(()=>{let e=s.status;return e>=100&&e<200?[`pending`,e]:e>=200&&e<300?[`success`,e]:e>=300&&e<700?[`failure`,e]:e===`CONFIRMED`?[`success`,200]:e===`PENDING`?[`pending`,100]:[void 0,e]})();return{...s,atomic:r,chainId:i?Me(i):void 0,receipts:a?.map(e=>({...e,blockNumber:l(e.blockNumber),gasUsed:l(e.gasUsed),status:Zi[e.status]}))??[],statusCode:u,status:c,version:o}}async function ra(e,t){let{id:n,pollingInterval:r=e.pollingInterval,status:i=({statusCode:e})=>e===200||e>=300,retryCount:a=4,retryDelay:o=({count:e})=>~~(1<<e)*200,timeout:s=6e4,throwOnFailure:c=!1}=t,l=O([`waitForCallsStatus`,e.uid,n]),{promise:u,resolve:d,reject:f}=Qe(),p,m=Ai(l,{resolve:d,reject:f},t=>{let s=Mi(async()=>{let r=e=>{clearTimeout(p),s(),e(),m()};try{let s=await Xi(async()=>{let t=await k(e,na,`getCallsStatus`)({id:n});if(c&&t.status===`failure`)throw new Yi(t);return t},{retryCount:a,delay:o});if(!i(s))return;r(()=>t.resolve(s))}catch(e){r(()=>t.reject(e))}},{interval:r,emitOnBegin:!0});return s});return p=s?setTimeout(()=>{m(),clearTimeout(p),f(new ia({id:n}))},s):void 0,await u}var ia=class extends v{constructor({id:e}){super(`Timed out while waiting for call bundle with id "${e}" to be confirmed.`,{name:`WaitForCallsStatusTimeoutError`})}},aa=256,oa=aa,sa;function ca(e=11){if(!sa||oa+e>aa*2){sa=``,oa=0;for(let e=0;e<aa;e++)sa+=(256+Math.random()*256|0).toString(16).substring(1)}return sa.substring(oa,oa+++e)}function la(e){let{batch:n,chain:r,ccipRead:i,dataSuffix:a,key:o=`base`,name:s=`Base Client`,type:c=`base`}=e,l=e.experimental_blockTag??(typeof r?.experimental_preconfirmationTime==`number`?`pending`:void 0),u=r?.blockTime??12e3,d=Math.min(Math.max(Math.floor(u/2),500),4e3),f=e.pollingInterval??d,p=e.cacheTime??f,m=e.account?t(e.account):void 0,{config:h,request:g,value:_}=e.transport({account:m,chain:r,pollingInterval:f}),v={account:m,batch:n,cacheTime:p,ccipRead:i,chain:r,dataSuffix:a,key:o,name:s,pollingInterval:f,request:g,transport:{...h,..._},type:c,uid:ca(),...l?{experimental_blockTag:l}:{}};function y(e){return t=>{let n=t(e);for(let e in v)delete n[e];let r={...e,...n};return Object.assign(r,{extend:y(r)})}}return Object.assign(v,{extend:y(v)})}function ua(e){if(!(e instanceof v))return!1;let t=e.walk(e=>e instanceof Se);return t instanceof Se?t.data?.errorName===`HttpError`||t.data?.errorName===`ResolverError`||t.data?.errorName===`ResolverNotContract`||t.data?.errorName===`ResolverNotFound`||t.data?.errorName===`ReverseAddressMismatch`||t.data?.errorName===`UnsupportedResolverProfile`:!1}function da(e){if(e.length!==66||e.indexOf(`[`)!==0||e.indexOf(`]`)!==65)return null;let t=`0x${e.slice(1,65)}`;return ue(t)?t:null}function fa(e){let t=new Uint8Array(32).fill(0);if(!e)return fn(t);let n=e.split(`.`);for(let e=n.length-1;e>=0;--e){let r=da(n[e]),i=r?nn(r):D(Xe(n[e]),`bytes`);t=D(Lt([t,i]),`bytes`)}return fn(t)}function pa(e){return`[${e.slice(2)}]`}function ma(e){let t=new Uint8Array(32).fill(0);return e?da(e)||D(Xe(e)):fn(t)}function ha(e){let t=e.replace(/^\.|\.$/gm,``);if(t.length===0)return new Uint8Array(1);let n=new Uint8Array(Xe(t).byteLength+2),r=0,i=t.split(`.`);for(let e=0;e<i.length;e++){let t=Xe(i[e]);t.byteLength>255&&(t=Xe(pa(ma(i[e])))),n[r]=t.length,n.set(t,r+1),r+=t.length+1}return n.byteLength===r+1?n:n.slice(0,r+1)}async function ga(e,t){let{blockNumber:n,blockTag:r,coinType:i,name:a,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return qt({blockNumber:n,chain:c,contract:`ensUniversalResolver`})})(),u=c?.ensTlds;if(u&&!u.some(e=>a.endsWith(e)))return null;let d=i==null?[fa(a)]:[fa(a),BigInt(i)];try{let t=we({abi:Mt,functionName:`addr`,args:d}),i={address:l,abi:dn,functionName:`resolveWithGateways`,args:[ke(ha(a)),t,o??[`x-batch-gateway:true`]],blockNumber:n,blockTag:r},s=await k(e,Ti,`readContract`)(i);if(s[0]===`0x`)return null;let c=Ht({abi:Mt,args:d,functionName:`addr`,data:s[0]});return c===`0x`||h(c)===`0x00`?null:c}catch(e){if(s)throw e;if(ua(e))return null;throw e}}var _a=class extends v{constructor({data:e}){super(`Unable to extract image from metadata. The metadata may be malformed or invalid.`,{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",``,`Provided data: ${JSON.stringify(e)}`],name:`EnsAvatarInvalidMetadataError`})}},va=class extends v{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`,{name:`EnsAvatarInvalidNftUriError`})}},ya=class extends v{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,{name:`EnsAvatarUriResolutionError`})}},ba=class extends v{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,{name:`EnsAvatarUnsupportedNamespaceError`})}},xa=/(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,Sa=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Ca=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,wa=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function Ta(e){try{let t=await fetch(e,{method:`HEAD`});return t.status===200?t.headers.get(`content-type`)?.startsWith(`image/`):!1}catch(t){return typeof t==`object`&&t.response!==void 0||!Object.hasOwn(globalThis,`Image`)?!1:new Promise(t=>{let n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e})}}function Ea(e,t){return e?e.endsWith(`/`)?e.slice(0,-1):e:t}function Da({uri:e,gatewayUrls:t}){let n=Ca.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};let r=Ea(t?.ipfs,`https://ipfs.io`),i=Ea(t?.arweave,`https://arweave.net`),{protocol:a,subpath:o,target:s,subtarget:c=``}=e.match(xa)?.groups||{},l=a===`ipns:/`||o===`ipns/`,u=a===`ipfs:/`||o===`ipfs/`||Sa.test(e);if(e.startsWith(`http`)&&!l&&!u){let n=e;return t?.arweave&&(n=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:n,isOnChain:!1,isEncoded:!1}}if((l||u)&&s)return{uri:`${r}/${l?`ipns`:`ipfs`}/${s}${c}`,isOnChain:!1,isEncoded:!1};if(a===`ar:/`&&s)return{uri:`${i}/${s}${c||``}`,isOnChain:!1,isEncoded:!1};let d=e.replace(wa,``);if(d.startsWith(`<svg`)&&(d=`data:image/svg+xml;base64,${btoa(d)}`),d.startsWith(`data:`)||d.startsWith(`{`))return{uri:d,isOnChain:!0,isEncoded:!1};throw new ya({uri:e})}function Oa(e){if(typeof e!=`object`||!(`image`in e)&&!(`image_url`in e)&&!(`image_data`in e))throw new _a({data:e});return e.image||e.image_url||e.image_data}async function ka({gatewayUrls:e,uri:t}){try{return await Aa({gatewayUrls:e,uri:Oa(await fetch(t).then(e=>e.json()))})}catch{throw new ya({uri:t})}}async function Aa({gatewayUrls:e,uri:t}){let{uri:n,isOnChain:r}=Da({uri:t,gatewayUrls:e});if(r||await Ta(n))return n;throw new ya({uri:t})}function ja(e){let t=e;t.startsWith(`did:nft:`)&&(t=t.replace(`did:nft:`,``).replace(/_/g,`/`));let[n,r,i]=t.split(`/`),[a,o]=n.split(`:`),[s,c]=r.split(`:`);if(!a||a.toLowerCase()!==`eip155`)throw new va({reason:`Only EIP-155 supported`});if(!o)throw new va({reason:`Chain ID not found`});if(!c)throw new va({reason:`Contract address not found`});if(!i)throw new va({reason:`Token ID not found`});if(!s)throw new va({reason:`ERC namespace not found`});return{chainID:Number.parseInt(o,10),namespace:s.toLowerCase(),contractAddress:c,tokenID:i}}async function Ma(e,{nft:t}){if(t.namespace===`erc721`)return Ti(e,{address:t.contractAddress,abi:[{name:`tokenURI`,type:`function`,stateMutability:`view`,inputs:[{name:`tokenId`,type:`uint256`}],outputs:[{name:``,type:`string`}]}],functionName:`tokenURI`,args:[BigInt(t.tokenID)]});if(t.namespace===`erc1155`)return Ti(e,{address:t.contractAddress,abi:[{name:`uri`,type:`function`,stateMutability:`view`,inputs:[{name:`_id`,type:`uint256`}],outputs:[{name:``,type:`string`}]}],functionName:`uri`,args:[BigInt(t.tokenID)]});throw new ba({namespace:t.namespace})}async function Na(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?Pa(e,{gatewayUrls:t,record:n}):Aa({uri:n,gatewayUrls:t})}async function Pa(e,{gatewayUrls:t,record:n}){let r=ja(n),{uri:i,isOnChain:a,isEncoded:o}=Da({uri:await Ma(e,{nft:r}),gatewayUrls:t});if(a&&(i.includes(`data:application/json;base64,`)||i.startsWith(`{`))){let e=o?atob(i.replace(`data:application/json;base64,`,``)):i;return Aa({uri:Oa(JSON.parse(e)),gatewayUrls:t})}let s=r.tokenID;return r.namespace===`erc1155`&&(s=s.replace(`0x`,``).padStart(64,`0`)),ka({gatewayUrls:t,uri:i.replace(/(?:0x)?{id}/,s)})}async function Fa(e,t){let{blockNumber:n,blockTag:r,key:i,name:a,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return qt({blockNumber:n,chain:c,contract:`ensUniversalResolver`})})(),u=c?.ensTlds;if(u&&!u.some(e=>a.endsWith(e)))return null;try{let t={address:l,abi:dn,args:[ke(ha(a)),we({abi:tn,functionName:`text`,args:[fa(a),i]}),o??[`x-batch-gateway:true`]],functionName:`resolveWithGateways`,blockNumber:n,blockTag:r},s=await k(e,Ti,`readContract`)(t);if(s[0]===`0x`)return null;let c=Ht({abi:tn,functionName:`text`,data:s[0]});return c===``?null:c}catch(e){if(s)throw e;if(ua(e))return null;throw e}}async function Ia(e,{blockNumber:t,blockTag:n,assetGatewayUrls:r,name:i,gatewayUrls:a,strict:o,universalResolverAddress:s}){let c=await k(e,Fa,`getEnsText`)({blockNumber:t,blockTag:n,key:`avatar`,name:i,universalResolverAddress:s,gatewayUrls:a,strict:o});if(!c)return null;try{return await Na(e,{record:c,gatewayUrls:r})}catch{return null}}async function La(e,t){let{address:n,blockNumber:r,blockTag:i,coinType:a=60n,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return qt({blockNumber:r,chain:c,contract:`ensUniversalResolver`})})();try{let t={address:l,abi:tt,args:[n,a,o??[`x-batch-gateway:true`]],functionName:`reverseWithGateways`,blockNumber:r,blockTag:i},[s]=await k(e,Ti,`readContract`)(t);return s||null}catch(e){if(s)throw e;if(ua(e))return null;throw e}}async function Ra(e,t){let{blockNumber:n,blockTag:r,name:i}=t,{chain:a}=e,o=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!a)throw Error(`client chain not configured. universalResolverAddress is required.`);return qt({blockNumber:n,chain:a,contract:`ensUniversalResolver`})})(),s=a?.ensTlds;if(s&&!s.some(e=>i.endsWith(e)))throw Error(`${i} is not a valid ENS TLD (${s?.join(`, `)}) for chain "${a.name}" (id: ${a.id}).`);let[c]=await k(e,Ti,`readContract`)({address:o,abi:[{inputs:[{type:`bytes`}],name:`findResolver`,outputs:[{type:`address`},{type:`bytes32`},{type:`uint256`}],stateMutability:`view`,type:`function`}],functionName:`findResolver`,args:[ke(ha(i))],blockNumber:n,blockTag:r});return c}async function za(e,n){let{account:r=e.account,blockNumber:i,blockTag:a=`latest`,blobs:o,data:s,gas:c,gasPrice:l,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:f,to:p,value:m,...h}=n,g=r?t(r):void 0;try{Ge(n);let t=(typeof i==`bigint`?E(i):void 0)||a,r=e.chain?.formatters?.transactionRequest?.format,_=(r||qe)({...Ce(h,{format:r}),account:g,blobs:o,data:s,gas:c,gasPrice:l,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:f,to:p,value:m},`createAccessList`),v=await e.request({method:`eth_createAccessList`,params:[_,t]});return{accessList:v.accessList,gasUsed:BigInt(v.gasUsed)}}catch(t){throw It(t,{...n,account:g,chain:e.chain})}}async function Ba(e){let t=ar(e,{method:`eth_newBlockFilter`}),n=await e.request({method:`eth_newBlockFilter`});return{id:n,request:t(n),type:`block`}}async function Va(e,{address:t,args:n,event:r,events:i,fromBlock:a,strict:o,toBlock:s}={}){let c=i??(r?[r]:void 0),l=ar(e,{method:`eth_newFilter`}),u=[];c&&(u=[c.flatMap(e=>rr({abi:[e],eventName:e.name,args:n}))],r&&(u=u[0]));let d=await e.request({method:`eth_newFilter`,params:[{address:t,fromBlock:typeof a==`bigint`?E(a):a,toBlock:typeof s==`bigint`?E(s):s,...u.length?{topics:u}:{}}]});return{abi:c,args:n,eventName:r?r.name:void 0,fromBlock:a,id:d,request:l(d),strict:!!o,toBlock:s,type:`event`}}async function Ha(e){let t=ar(e,{method:`eth_newPendingTransactionFilter`}),n=await e.request({method:`eth_newPendingTransactionFilter`});return{id:n,request:t(n),type:`transaction`}}async function Ua(e,{address:t,blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`}){if(e.batch?.multicall&&e.chain?.contracts?.multicall3){let i=e.chain.contracts.multicall3.address,a=we({abi:Ye,functionName:`getEthBalance`,args:[t]}),{data:o}=await k(e,Wt,`call`)({to:i,data:a,blockNumber:n,blockTag:r});return Ht({abi:Ye,functionName:`getEthBalance`,args:[t],data:o||`0x`})}let i=typeof n==`bigint`?E(n):void 0,a=await e.request({method:`eth_getBalance`,params:[t,i||r]});return BigInt(a)}async function Wa(e){let t=await e.request({method:`eth_blobBaseFee`});return BigInt(t)}async function Ga(e,{blockHash:t,blockNumber:n,blockTag:r=`latest`}={}){let i=n===void 0?void 0:E(n),a;return a=t?await e.request({method:`eth_getBlockTransactionCountByHash`,params:[t]},{dedupe:!0}):await e.request({method:`eth_getBlockTransactionCountByNumber`,params:[i||r]},{dedupe:!!i}),Me(a)}async function Ka(e,{address:t,blockNumber:n,blockTag:r=`latest`}){let i=n===void 0?void 0:E(n),a=await e.request({method:`eth_getCode`,params:[t,i||r]},{dedupe:!!i});if(a!==`0x`)return a}async function qa(e,{address:t,blockNumber:n,blockTag:r=`latest`}){let i=await Ka(e,{address:t,...n===void 0?{blockTag:r}:{blockNumber:n}});if(i&&ne(i)===23&&i.startsWith(`0xef0100`))return $t(xt(i,3,23))}var Ja=class extends v{constructor({address:e}){super(`No EIP-712 domain found on contract "${e}".`,{metaMessages:[`Ensure that:`,`- The contract is deployed at the address "${e}".`,"- `eip712Domain()` function exists on the contract.","- `eip712Domain()` function matches signature to ERC-5267 specification."],name:`Eip712DomainNotFoundError`})}};async function Ya(e,t){let{address:n,factory:r,factoryData:i}=t;try{let[t,a,o,s,c,l,u]=await k(e,Ti,`readContract`)({abi:Xa,address:n,functionName:`eip712Domain`,factory:r,factoryData:i});return{domain:{name:a,version:o,chainId:Number(s),verifyingContract:c,salt:l},extensions:u,fields:t}}catch(e){let t=e;throw t.name===`ContractFunctionExecutionError`&&t.cause.name===`ContractFunctionZeroDataError`?new Ja({address:n}):t}}var Xa=[{inputs:[],name:`eip712Domain`,outputs:[{name:`fields`,type:`bytes1`},{name:`name`,type:`string`},{name:`version`,type:`string`},{name:`chainId`,type:`uint256`},{name:`verifyingContract`,type:`address`},{name:`salt`,type:`bytes32`},{name:`extensions`,type:`uint256[]`}],stateMutability:`view`,type:`function`}];function Za(e){return{baseFeePerGas:e.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:e.reward?.map(e=>e.map(e=>BigInt(e)))}}async function Qa(e,{blockCount:t,blockNumber:n,blockTag:r=`latest`,rewardPercentiles:i}){let a=typeof n==`bigint`?E(n):void 0;return Za(await e.request({method:`eth_feeHistory`,params:[E(t),a||r,i]},{dedupe:!!a}))}async function $a(e,{filter:t}){let n=t.strict??!1,r=(await t.request({method:`eth_getFilterLogs`,params:[t.id]})).map(e=>_i(e));return t.abi?xi({abi:t.abi,logs:r,strict:n}):r}async function eo({address:e,authorization:t,signature:n}){return ie($t(e),await yr({authorization:t,signature:n}))}var to=new st(8192);function no(e,{enabled:t=!0,id:n}){if(!t||!n)return e();if(to.get(n))return to.get(n);let r=e().finally(()=>to.delete(n));return to.set(n,r),r}function ro(e,t={}){return async(n,r={})=>{let{dedupe:i=!1,methods:a,retryDelay:o=150,retryCount:s=3,uid:c}={...t,...r},{method:l}=n;if(a?.exclude?.includes(l)||a?.include&&!a.include.includes(l))throw new Nt(Error(`method not supported`),{method:l});return no(()=>Xi(async()=>{try{return await e(n)}catch(e){let t=e;switch(t.code){case yt.code:throw new yt(t);case en.code:throw new en(t);case Vt.code:throw new Vt(t,{method:n.method});case jt.code:throw new jt(t);case Yt.code:throw new Yt(t);case at.code:throw new at(t);case Ze.code:throw new Ze(t);case rn.code:throw new rn(t);case nt.code:throw new nt(t);case Nt.code:throw new Nt(t,{method:n.method});case pt.code:throw new pt(t);case ct.code:throw new ct(t);case p.code:throw new p(t);case un.code:throw new un(t);case g.code:throw new g(t);case gt.code:throw new gt(t);case et.code:throw new et(t);case pn.code:throw new pn(t);case Ne.code:throw new Ne(t);case sn.code:throw new sn(t);case Rt.code:throw new Rt(t);case Ae.code:throw new Ae(t);case St.code:throw new St(t);case Ft.code:throw new Ft(t);case Kt.code:throw new Kt(t);case 5e3:throw new p(t);case ye.code:throw new ye(t);default:throw e instanceof v?e:new u(t)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof Ot){let e=t?.headers?.get(`Retry-After`);if(e?.match(/\d/))return Number.parseInt(e,10)*1e3}return~~(1<<e)*o},retryCount:s,shouldRetry:({error:e})=>io(e)}),{enabled:i,id:i?ln(`${c}.${O(n)}`):void 0})}}function io(e){return`code`in e&&typeof e.code==`number`?e.code===-1||e.code===pt.code||e.code===Yt.code:e instanceof Ot&&e.status?e.status===403||e.status===408||e.status===413||e.status===429||e.status===500||e.status===502||e.status===503||e.status===504:!0}function ao(e,{errorInstance:t=Error(`timed out`),timeout:n,signal:r}){return new Promise((i,a)=>{(async()=>{let o;try{let s=new AbortController;n>0&&(o=setTimeout(()=>{r?s.abort():a(t)},n)),i(await e({signal:s?.signal||null}))}catch(e){e?.name===`AbortError`&&a(t),a(e)}finally{clearTimeout(o)}})()})}function oo(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var so=oo();function co(e,t={}){let{url:n,headers:r}=lo(e);return{async request(e){let{body:i,fetchFn:a=t.fetchFn??fetch,onRequest:o=t.onRequest,onResponse:s=t.onResponse,timeout:c=t.timeout??1e4}=e,l={...t.fetchOptions??{},...e.fetchOptions??{}},{headers:u,method:d,signal:f}=l;try{let e=await ao(async({signal:e})=>{let t={...l,body:O(Array.isArray(i)?i.map(e=>({jsonrpc:`2.0`,id:e.id??so.take(),...e})):{jsonrpc:`2.0`,id:i.id??so.take(),...i}),headers:{...r,"Content-Type":`application/json`,...u},method:d||`POST`,signal:f||(c>0?e:null)},s=new Request(n,t),p=await o?.(s,t)??{...t,url:n};return await a(p.url??n,p)},{errorInstance:new Tt({body:i,url:n}),timeout:c,signal:!0});s&&await s(e);let t;if(e.headers.get(`Content-Type`)?.startsWith(`application/json`))t=await e.json();else{t=await e.text();try{t=JSON.parse(t||`{}`)}catch(n){if(e.ok)throw n;t={error:t}}}if(!e.ok)throw new Ot({body:i,details:O(t.error)||e.statusText,headers:e.headers,status:e.status,url:n});return t}catch(e){throw e instanceof Ot||e instanceof Tt?e:new Ot({body:i,cause:e,url:n})}}}}function lo(e){try{let t=new URL(e),n=(()=>{if(t.username){let e=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username=``,t.password=``,{url:t.toString(),headers:{Authorization:`Basic ${btoa(e)}`}}}})();return{url:t.toString(),...n}}catch{return{url:e}}}var uo=`Ethereum Signed Message:
`;function fo(e){let t=typeof e==`string`?ln(e):typeof e.raw==`string`?e.raw:fn(e.raw);return Lt([ln(`${uo}${ne(t)}`),t])}function po(e,t){return D(fo(e),t)}var mo=class extends v{constructor({domain:e}){super(`Invalid domain "${O(e)}".`,{metaMessages:[`Must be a valid EIP-712 domain.`]})}},ho=class extends v{constructor({primaryType:e,types:t}){super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`,{docsPath:`/api/glossary/Errors#typeddatainvalidprimarytypeerror`,metaMessages:["Check that the primary type is a key in `types`."]})}},go=class extends v{constructor({type:e}){super(`Struct type "${e}" is invalid.`,{metaMessages:[`Struct type must not be a Solidity type.`],name:`InvalidStructTypeError`})}};function _o(e){let{domain:t,message:n,primaryType:r,types:i}=e,a=(e,t)=>{let n={...t};for(let t of e){let{name:e,type:r}=t;r===`address`&&(n[e]=n[e].toLowerCase())}return n};return O({domain:!i.EIP712Domain||!t?{}:a(i.EIP712Domain,t),message:(()=>{if(r!==`EIP712Domain`)return a(i[r],n)})(),primaryType:r,types:i})}function vo(e){let{domain:t,message:n,primaryType:r,types:i}=e,a=(e,t)=>{for(let n of e){let{name:e,type:r}=n,o=t[e],s=r.match(Gt);if(s&&(typeof o==`number`||typeof o==`bigint`)){let[e,t,n]=s;E(o,{signed:t===`int`,size:Number.parseInt(n,10)/8})}if(r===`address`&&typeof o==`string`&&!it(o))throw new ft({address:o});let c=r.match(Pt);if(c){let[e,t]=c;if(t&&ne(o)!==Number.parseInt(t,10))throw new fe({expectedSize:Number.parseInt(t,10),givenSize:ne(o)})}let l=i[r];l&&(bo(r),a(l,o))}};if(i.EIP712Domain&&t){if(typeof t!=`object`)throw new mo({domain:t});a(i.EIP712Domain,t)}if(r!==`EIP712Domain`)if(i[r])a(i[r],n);else throw new ho({primaryType:r,types:i})}function yo({domain:e}){return[typeof e?.name==`string`&&{name:`name`,type:`string`},e?.version&&{name:`version`,type:`string`},(typeof e?.chainId==`number`||typeof e?.chainId==`bigint`)&&{name:`chainId`,type:`uint256`},e?.verifyingContract&&{name:`verifyingContract`,type:`address`},e?.salt&&{name:`salt`,type:`bytes32`}].filter(Boolean)}function bo(e){if(e===`address`||e===`bool`||e===`string`||e.startsWith(`bytes`)||e.startsWith(`uint`)||e.startsWith(`int`))throw new go({type:e})}function xo(e){let{domain:t={},message:n,primaryType:r}=e,i={EIP712Domain:yo({domain:t}),...e.types};vo({domain:t,message:n,primaryType:r,types:i});let a=[`0x1901`];return t&&a.push(So({domain:t,types:i})),r!==`EIP712Domain`&&a.push(Co({data:n,primaryType:r,types:i})),D(Lt(a))}function So({domain:e,types:t}){return Co({data:e,primaryType:`EIP712Domain`,types:t})}function Co({data:e,primaryType:t,types:n}){return D(wo({data:e,primaryType:t,types:n}))}function wo({data:e,primaryType:t,types:n}){let r=[{type:`bytes32`}],i=[To({primaryType:t,types:n})];for(let a of n[t]){let[t,o]=Oo({types:n,name:a.name,type:a.type,value:e[a.name]});r.push(t),i.push(o)}return Xt(r,i)}function To({primaryType:e,types:t}){return D(ke(Eo({primaryType:e,types:t})))}function Eo({primaryType:e,types:t}){let n=``,r=Do({primaryType:e,types:t});r.delete(e);let i=[e,...Array.from(r).sort()];for(let e of i)n+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(`,`)})`;return n}function Do({primaryType:e,types:t},n=new Set){let r=e.match(/^\w*/u)?.[0];if(n.has(r)||t[r]===void 0)return n;n.add(r);for(let e of t[r])Do({primaryType:e.type,types:t},n);return n}function Oo({types:e,name:t,type:n,value:r}){if(e[n]!==void 0)return[{type:`bytes32`},D(wo({data:r,primaryType:n,types:e}))];if(n===`bytes`)return[{type:`bytes32`},D(r)];if(n===`string`)return[{type:`bytes32`},D(ke(r))];if(n.lastIndexOf(`]`)===n.length-1){let i=n.slice(0,n.lastIndexOf(`[`)),a=r.map(n=>Oo({name:t,type:i,types:e,value:n}));return[{type:`bytes32`},D(Xt(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:n},r]}var ko={checksum:new class extends Map{constructor(e){super(),Object.defineProperty(this,`maxSize`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){let t=super.get(e);return super.has(e)&&t!==void 0&&(this.delete(e),super.set(e,t)),t}set(e,t){if(super.set(e,t),this.maxSize&&this.size>this.maxSize){let e=this.keys().next().value;e&&this.delete(e)}return this}}(8192)}.checksum,Ao=class extends Yn{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,Jn(e);let n=xn(t);if(this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`Expected instance of class which extends utils.Hash`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let r=this.blockLen,i=new Uint8Array(r);i.set(n.length>r?e.create().update(n).digest():n);for(let e=0;e<i.length;e++)i[e]^=54;this.iHash.update(i),this.oHash=e.create();for(let e=0;e<i.length;e++)i[e]^=106;this.oHash.update(i),yn(i)}update(e){return vn(this),this.iHash.update(e),this}digestInto(e){vn(this),Tn(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},jo=(e,t,n)=>new Ao(e,t).update(n).digest();jo.create=(e,t)=>new Ao(e,t);function Mo(e,t={}){let{as:n=typeof e==`string`?`Hex`:`Bytes`}=t,r=vt(_(e));return n===`Bytes`?r:m(r)}var No=/^0x[a-fA-F0-9]{40}$/;function Po(e,t={}){let{strict:n=!0}=t;if(!No.test(e))throw new Lo({address:e,cause:new Ro});if(n){if(e.toLowerCase()===e)return;if(Fo(e)!==e)throw new Lo({address:e,cause:new zo})}}function Fo(e){if(ko.has(e))return ko.get(e);Po(e,{strict:!1});let t=e.substring(2).toLowerCase(),n=Mo(le(t),{as:`Bytes`}),r=t.split(``);for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&r[e]&&(r[e]=r[e].toUpperCase()),(n[e>>1]&15)>=8&&r[e+1]&&(r[e+1]=r[e+1].toUpperCase());let i=`0x${r.join(``)}`;return ko.set(e,i),i}function Io(e,t={}){let{strict:n=!0}=t??{};try{return Po(e,{strict:n}),!0}catch{return!1}}var Lo=class extends T{constructor({address:e,cause:t}){super(`Address "${e}" is invalid.`,{cause:t}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidAddressError`})}},Ro=class extends T{constructor(){super(`Address is not a 20 byte (40 hexadecimal character) value.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidInputError`})}},zo=class extends T{constructor(){super(`Address does not match its checksum counterpart.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidChecksumError`})}},Bo=/^(.*)\[([0-9]*)\]$/,Vo=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Ho=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;2n**(8n-1n)-1n,2n**(16n-1n)-1n,2n**(24n-1n)-1n,2n**(32n-1n)-1n,2n**(40n-1n)-1n,2n**(48n-1n)-1n,2n**(56n-1n)-1n,2n**(64n-1n)-1n,2n**(72n-1n)-1n,2n**(80n-1n)-1n,2n**(88n-1n)-1n,2n**(96n-1n)-1n,2n**(104n-1n)-1n,2n**(112n-1n)-1n,2n**(120n-1n)-1n,2n**(128n-1n)-1n,2n**(136n-1n)-1n,2n**(144n-1n)-1n,2n**(152n-1n)-1n,2n**(160n-1n)-1n,2n**(168n-1n)-1n,2n**(176n-1n)-1n,2n**(184n-1n)-1n,2n**(192n-1n)-1n,2n**(200n-1n)-1n,2n**(208n-1n)-1n,2n**(216n-1n)-1n,2n**(224n-1n)-1n,2n**(232n-1n)-1n,2n**(240n-1n)-1n,2n**(248n-1n)-1n,2n**(256n-1n)-1n,-(2n**(8n-1n)),-(2n**(16n-1n)),-(2n**(24n-1n)),-(2n**(32n-1n)),-(2n**(40n-1n)),-(2n**(48n-1n)),-(2n**(56n-1n)),-(2n**(64n-1n)),-(2n**(72n-1n)),-(2n**(80n-1n)),-(2n**(88n-1n)),-(2n**(96n-1n)),-(2n**(104n-1n)),-(2n**(112n-1n)),-(2n**(120n-1n)),-(2n**(128n-1n)),-(2n**(136n-1n)),-(2n**(144n-1n)),-(2n**(152n-1n)),-(2n**(160n-1n)),-(2n**(168n-1n)),-(2n**(176n-1n)),-(2n**(184n-1n)),-(2n**(192n-1n)),-(2n**(200n-1n)),-(2n**(208n-1n)),-(2n**(216n-1n)),-(2n**(224n-1n)),-(2n**(232n-1n)),-(2n**(240n-1n)),-(2n**(248n-1n)),-(2n**(256n-1n));var Uo=2n**256n-1n;function Wo(e,t,n){let{checksumAddress:r,staticPosition:i}=n,a=us(t.type);if(a){let[n,o]=a;return Jo(e,{...t,type:o},{checksumAddress:r,length:n,staticPosition:i})}if(t.type===`tuple`)return Qo(e,t,{checksumAddress:r,staticPosition:i});if(t.type===`address`)return qo(e,{checksum:r});if(t.type===`bool`)return Yo(e);if(t.type.startsWith(`bytes`))return Xo(e,t,{staticPosition:i});if(t.type.startsWith(`uint`)||t.type.startsWith(`int`))return Zo(e,t);if(t.type===`string`)return $o(e,{staticPosition:i});throw new Ds(t.type)}var Go=32,Ko=32;function qo(e,t={}){let{checksum:n=!1}=t;return[(e=>n?Fo(e):e)(m(mn(e.readBytes(32),-20))),32]}function Jo(e,t,n){let{checksumAddress:r,length:i,staticPosition:a}=n;if(!i){let n=a+C(e.readBytes(Ko)),i=n+Go;e.setPosition(n);let o=C(e.readBytes(Go)),s=ds(t),c=0,l=[];for(let n=0;n<o;++n){e.setPosition(i+(s?n*32:c));let[a,o]=Wo(e,t,{checksumAddress:r,staticPosition:i});c+=o,l.push(a)}return e.setPosition(a+32),[l,32]}if(ds(t)){let n=a+C(e.readBytes(Ko)),o=[];for(let a=0;a<i;++a){e.setPosition(n+a*32);let[i]=Wo(e,t,{checksumAddress:r,staticPosition:n});o.push(i)}return e.setPosition(a+32),[o,32]}let o=0,s=[];for(let n=0;n<i;++n){let[n,i]=Wo(e,t,{checksumAddress:r,staticPosition:a+o});o+=i,s.push(n)}return[s,o]}function Yo(e){return[Le(e.readBytes(32),{size:32}),32]}function Xo(e,t,{staticPosition:n}){let[r,i]=t.type.split(`bytes`);if(!i){let t=C(e.readBytes(32));e.setPosition(n+t);let r=C(e.readBytes(32));if(r===0)return e.setPosition(n+32),[`0x`,32];let i=e.readBytes(r);return e.setPosition(n+32),[m(i),32]}return[m(e.readBytes(Number.parseInt(i,10),32)),32]}function Zo(e,t){let n=t.type.startsWith(`int`),r=Number.parseInt(t.type.split(`int`)[1]||`256`,10),i=e.readBytes(32);return[r>48?a(i,{signed:n}):C(i,{signed:n}),32]}function Qo(e,t,n){let{checksumAddress:r,staticPosition:i}=n,a=t.components.length===0||t.components.some(({name:e})=>!e),o=a?[]:{},s=0;if(ds(t)){let n=i+C(e.readBytes(Ko));for(let i=0;i<t.components.length;++i){let c=t.components[i];e.setPosition(n+s);let[l,u]=Wo(e,c,{checksumAddress:r,staticPosition:n});s+=u,o[a?i:c?.name]=l}return e.setPosition(i+32),[o,32]}for(let n=0;n<t.components.length;++n){let c=t.components[n],[l,u]=Wo(e,c,{checksumAddress:r,staticPosition:i});o[a?n:c?.name]=l,s+=u}return[o,s]}function $o(e,{staticPosition:t}){let n=t+C(e.readBytes(32));e.setPosition(n);let r=C(e.readBytes(32));if(r===0)return e.setPosition(t+32),[``,32];let i=Pe(Be(e.readBytes(r,32)));return e.setPosition(t+32),[i,32]}function es({checksumAddress:e,parameters:t,values:n}){let r=[];for(let i=0;i<t.length;i++)r.push(ts({checksumAddress:e,parameter:t[i],value:n[i]}));return r}function ts({checksumAddress:e=!1,parameter:t,value:n}){let r=t,i=us(r.type);if(i){let[t,a]=i;return is(n,{checksumAddress:e,length:t,parameter:{...r,type:a}})}if(r.type===`tuple`)return ls(n,{checksumAddress:e,parameter:r});if(r.type===`address`)return rs(n,{checksum:e});if(r.type===`bool`)return os(n);if(r.type.startsWith(`uint`)||r.type.startsWith(`int`)){let e=r.type.startsWith(`int`),[,,t=`256`]=Ho.exec(r.type)??[];return ss(n,{signed:e,size:Number(t)})}if(r.type.startsWith(`bytes`))return as(n,{type:r.type});if(r.type===`string`)return cs(n);throw new Ds(r.type)}function ns(e){let t=0;for(let n=0;n<e.length;n++){let{dynamic:r,encoded:i}=e[n];r?t+=32:t+=Ct(i)}let n=[],r=[],i=0;for(let a=0;a<e.length;a++){let{dynamic:o,encoded:s}=e[a];o?(n.push(d(t+i,{size:32})),r.push(s),i+=Ct(s)):n.push(s)}return c(...n,...r)}function rs(e,t){let{checksum:n=!1}=t;return Po(e,{strict:n}),{dynamic:!1,encoded:Et(e.toLowerCase())}}function is(e,t){let{checksumAddress:n,length:r,parameter:i}=t,a=r===null;if(!Array.isArray(e))throw new Es(e);if(!a&&e.length!==r)throw new Cs({expectedLength:r,givenLength:e.length,type:`${i.type}[${r}]`});let o=!1,s=[];for(let t=0;t<e.length;t++){let r=ts({checksumAddress:n,parameter:i,value:e[t]});r.dynamic&&(o=!0),s.push(r)}if(a||o){let e=ns(s);if(a){let t=d(s.length,{size:32});return{dynamic:!0,encoded:s.length>0?c(t,e):t}}if(o)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:c(...s.map(({encoded:e})=>e))}}function as(e,{type:t}){let[,r]=t.split(`bytes`),i=Ct(e);if(!r){let t=e;return i%32!=0&&(t=n(t,Math.ceil((e.length-2)/2/32)*32)),{dynamic:!0,encoded:c(Et(d(i,{size:32})),t)}}if(i!==Number.parseInt(r,10))throw new ws({expectedSize:Number.parseInt(r,10),value:e});return{dynamic:!1,encoded:n(e)}}function os(e){if(typeof e!=`boolean`)throw new T(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:Et(je(e))}}function ss(e,{signed:t,size:n}){if(typeof n==`number`){let r=2n**(BigInt(n)-(t?1n:0n))-1n,i=t?-r-1n:0n;if(e>r||e<i)throw new Oe({max:r.toString(),min:i.toString(),signed:t,size:n/8,value:e.toString()})}return{dynamic:!1,encoded:d(e,{size:32,signed:t})}}function cs(e){let t=_e(e),r=Math.ceil(Ct(t)/32),i=[];for(let e=0;e<r;e++)i.push(n(de(t,e*32,(e+1)*32)));return{dynamic:!0,encoded:c(n(d(Ct(t),{size:32})),...i)}}function ls(e,t){let{checksumAddress:n,parameter:r}=t,i=!1,a=[];for(let t=0;t<r.components.length;t++){let o=r.components[t],s=ts({checksumAddress:n,parameter:o,value:e[Array.isArray(e)?t:o.name]});a.push(s),s.dynamic&&(i=!0)}return{dynamic:i,encoded:i?ns(a):c(...a.map(({encoded:e})=>e))}}function us(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}function ds(e){let{type:t}=e;if(t===`string`||t===`bytes`||t.endsWith(`[]`))return!0;if(t===`tuple`)return e.components?.some(ds);let n=us(e.type);return!!(n&&ds({...e,type:n[1]}))}var fs={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new gs({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new hs({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new ms({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new ms({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let n=t??this.position;return this.assertPosition(n+e-1),this.bytes.subarray(n,n+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,e&255),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();let n=this.inspectBytes(e);return this.position+=t??e,n},readUint8(){this.assertReadLimit(),this._touch();let e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();let e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();let e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();let e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){let t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function ps(e,{recursiveReadLimit:t=8192}={}){let n=Object.create(fs);return n.bytes=e,n.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=t,n}var ms=class extends T{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.NegativeOffsetError`})}},hs=class extends T{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.PositionOutOfBoundsError`})}},gs=class extends T{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.RecursiveReadLimitExceededError`})}};function _s(e,t,n={}){let{as:r=`Array`,checksumAddress:i=!1}=n,a=typeof t==`string`?te(t):t,o=ps(a);if(Te(a)===0&&e.length>0)throw new Ss;if(Te(a)&&Te(a)<32)throw new xs({data:typeof t==`string`?t:m(t),parameters:e,size:Te(a)});let s=0,c=r===`Array`?[]:{};for(let t=0;t<e.length;++t){let n=e[t];o.setPosition(s);let[a,l]=Wo(o,n,{checksumAddress:i,staticPosition:0});s+=l,r===`Array`?c.push(a):c[n.name??t]=a}return c}function vs(e,t,n){let{checksumAddress:r=!1}=n??{};if(e.length!==t.length)throw new Ts({expectedLength:e.length,givenLength:t.length});let i=ns(es({checksumAddress:r,parameters:e,values:t}));return i.length===0?`0x`:i}function ys(e,t){if(e.length!==t.length)throw new Ts({expectedLength:e.length,givenLength:t.length});let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r];n.push(ys.encode(i,a))}return c(...n)}(function(e){function t(e,r,i=!1){if(e===`address`){let e=r;return Po(e),Et(e.toLowerCase(),i?32:0)}if(e===`string`)return _e(r);if(e===`bytes`)return r;if(e===`bool`)return Et(je(r),i?32:1);let a=e.match(Ho);if(a){let[e,t,n=`256`]=a,o=Number.parseInt(n,10)/8;return d(r,{size:i?32:o,signed:t===`int`})}let o=e.match(Vo);if(o){let[e,t]=o;if(Number.parseInt(t,10)!==(r.length-2)/2)throw new ws({expectedSize:Number.parseInt(t,10),value:r});return n(r,i?32:0)}let s=e.match(Bo);if(s&&Array.isArray(r)){let[e,n]=s,i=[];for(let e=0;e<r.length;e++)i.push(t(n,r[e],!0));return i.length===0?`0x`:c(...i)}throw new Ds(e)}e.encode=t})(ys||={});function bs(e){return Array.isArray(e)&&typeof e[0]==`string`||typeof e==`string`?er(e):e}var xs=class extends T{constructor({data:e,parameters:t,size:n}){super(`Data size of ${n} bytes is too small for given parameters.`,{metaMessages:[`Params: (${ae(t)})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.DataSizeTooSmallError`})}},Ss=class extends T{constructor(){super(`Cannot decode zero data ("0x") with ABI parameters.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.ZeroDataError`})}},Cs=class extends T{constructor({expectedLength:e,givenLength:t,type:n}){super(`Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.ArrayLengthMismatchError`})}},ws=class extends T{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${Ct(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.BytesSizeMismatchError`})}},Ts=class extends T{constructor({expectedLength:e,givenLength:t}){super([`ABI encoding parameters/values length mismatch.`,`Expected length (parameters): ${e}`,`Given length (values): ${t}`].join(`
`)),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.LengthMismatchError`})}},Es=class extends T{constructor(e){super(`Value \`${e}\` is not a valid array.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.InvalidArrayError`})}},Ds=class extends T{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.InvalidTypeError`})}},A=BigInt(0),j=BigInt(1),Os=BigInt(2),ks=BigInt(3),As=BigInt(4),js=BigInt(5),Ms=BigInt(8);function M(e,t){let n=e%t;return n>=A?n:t+n}function Ns(e,t,n){let r=e;for(;t-- >A;)r*=r,r%=n;return r}function Ps(e,t){if(e===A)throw Error(`invert: expected non-zero number`);if(t<=A)throw Error(`invert: expected positive modulus, got `+t);let n=M(e,t),r=t,i=A,a=j,o=j,s=A;for(;n!==A;){let e=r/n,t=r%n,c=i-o*e,l=a-s*e;r=n,n=t,i=o,a=s,o=c,s=l}if(r!==j)throw Error(`invert: does not exist`);return M(i,t)}function Fs(e,t){let n=(e.ORDER+j)/As,r=e.pow(t,n);if(!e.eql(e.sqr(r),t))throw Error(`Cannot find square root`);return r}function Is(e,t){let n=(e.ORDER-js)/Ms,r=e.mul(t,Os),i=e.pow(r,n),a=e.mul(t,i),o=e.mul(e.mul(a,Os),i),s=e.mul(a,e.sub(o,e.ONE));if(!e.eql(e.sqr(s),t))throw Error(`Cannot find square root`);return s}function Ls(e){if(e<BigInt(3))throw Error(`sqrt is not defined for small field`);let t=e-j,n=0;for(;t%Os===A;)t/=Os,n++;let r=Os,i=Gs(e);for(;Us(i,r)===1;)if(r++>1e3)throw Error(`Cannot find square root: probably non-prime P`);if(n===1)return Fs;let a=i.pow(r,t),o=(t+j)/Os;return function(e,r){if(e.is0(r))return r;if(Us(e,r)!==1)throw Error(`Cannot find square root`);let i=n,s=e.mul(e.ONE,a),c=e.pow(r,t),l=e.pow(r,o);for(;!e.eql(c,e.ONE);){if(e.is0(c))return e.ZERO;let t=1,n=e.sqr(c);for(;!e.eql(n,e.ONE);)if(t++,n=e.sqr(n),t===i)throw Error(`Cannot find square root`);let r=j<<BigInt(i-t-1),a=e.pow(s,r);i=t,s=e.sqr(a),c=e.mul(c,s),l=e.mul(l,a)}return l}}function Rs(e){return e%As===ks?Fs:e%Ms===js?Is:Ls(e)}var zs=[`create`,`isValid`,`is0`,`neg`,`inv`,`sqrt`,`sqr`,`eql`,`add`,`sub`,`mul`,`pow`,`div`,`addN`,`subN`,`mulN`,`sqrN`];function Bs(e){return An(e,zs.reduce((e,t)=>(e[t]=`function`,e),{ORDER:`bigint`,MASK:`bigint`,BYTES:`isSafeInteger`,BITS:`isSafeInteger`}))}function Vs(e,t,n){if(n<A)throw Error(`invalid exponent, negatives unsupported`);if(n===A)return e.ONE;if(n===j)return t;let r=e.ONE,i=t;for(;n>A;)n&j&&(r=e.mul(r,i)),i=e.sqr(i),n>>=j;return r}function Hs(e,t,n=!1){let r=Array(t.length).fill(n?e.ZERO:void 0),i=t.reduce((t,n,i)=>e.is0(n)?t:(r[i]=t,e.mul(t,n)),e.ONE),a=e.inv(i);return t.reduceRight((t,n,i)=>e.is0(n)?t:(r[i]=e.mul(t,r[i]),e.mul(t,n)),a),r}function Us(e,t){let n=(e.ORDER-j)/Os,r=e.pow(t,n),i=e.eql(r,e.ONE),a=e.eql(r,e.ZERO),o=e.eql(r,e.neg(e.ONE));if(!i&&!a&&!o)throw Error(`invalid Legendre symbol result`);return i?1:a?0:-1}function Ws(e,t){t!==void 0&&En(t);let n=t===void 0?e.toString(2).length:t;return{nBitLength:n,nByteLength:Math.ceil(n/8)}}function Gs(e,t,n=!1,r={}){if(e<=A)throw Error(`invalid field: expected ORDER > 0, got `+e);let{nBitLength:i,nByteLength:a}=Ws(e,t);if(a>2048)throw Error(`invalid field: expected ORDER of <= 2048 bytes`);let o,s=Object.freeze({ORDER:e,isLE:n,BITS:i,BYTES:a,MASK:kn(i),ZERO:A,ONE:j,create:t=>M(t,e),isValid:t=>{if(typeof t!=`bigint`)throw Error(`invalid field element: expected bigint, got `+typeof t);return A<=t&&t<e},is0:e=>e===A,isOdd:e=>(e&j)===j,neg:t=>M(-t,e),eql:(e,t)=>e===t,sqr:t=>M(t*t,e),add:(t,n)=>M(t+n,e),sub:(t,n)=>M(t-n,e),mul:(t,n)=>M(t*n,e),pow:(e,t)=>Vs(s,e,t),div:(t,n)=>M(t*Ps(n,e),e),sqrN:e=>e*e,addN:(e,t)=>e+t,subN:(e,t)=>e-t,mulN:(e,t)=>e*t,inv:t=>Ps(t,e),sqrt:r.sqrt||(t=>(o||=Rs(e),o(s,t))),toBytes:e=>n?On(e,a):Pn(e,a),fromBytes:e=>{if(e.length!==a)throw Error(`Field.fromBytes: expected `+a+` bytes, got `+e.length);return n?jn(e):Wn(e)},invertBatch:e=>Hs(s,e),cmov:(e,t,n)=>n?t:e});return Object.freeze(s)}function Ks(e){if(typeof e!=`bigint`)throw Error(`field order must be bigint`);let t=e.toString(2).length;return Math.ceil(t/8)}function qs(e){let t=Ks(e);return t+Math.ceil(t/2)}function Js(e,t,n=!1){let r=e.length,i=Ks(t),a=qs(t);if(r<16||r<a||r>1024)throw Error(`expected `+a+`-1024 bytes of input, got `+r);let o=M(n?jn(e):Wn(e),t-j)+j;return n?On(o,i):Pn(o,i)}var Ys=BigInt(0),Xs=BigInt(1);function Zs(e,t){let n=t.negate();return e?n:t}function Qs(e,t){if(!Number.isSafeInteger(e)||e<=0||e>t)throw Error(`invalid window size, expected [1..`+t+`], got W=`+e)}function $s(e,t){Qs(e,t);let n=Math.ceil(t/e)+1,r=2**(e-1),i=2**e;return{windows:n,windowSize:r,mask:kn(e),maxNumber:i,shiftBy:BigInt(e)}}function ec(e,t,n){let{windowSize:r,mask:i,maxNumber:a,shiftBy:o}=n,s=Number(e&i),c=e>>o;s>r&&(s-=a,c+=Xs);let l=t*r,u=l+Math.abs(s)-1,d=s===0,f=s<0,p=t%2!=0;return{nextN:c,offset:u,isZero:d,isNeg:f,isNegF:p,offsetF:l}}function tc(e,t){if(!Array.isArray(e))throw Error(`array expected`);e.forEach((e,n)=>{if(!(e instanceof t))throw Error(`invalid point at index `+n)})}function nc(e,t){if(!Array.isArray(e))throw Error(`array of scalars expected`);e.forEach((e,n)=>{if(!t.isValid(e))throw Error(`invalid scalar at index `+n)})}var rc=new WeakMap,ic=new WeakMap;function ac(e){return ic.get(e)||1}function oc(e,t){return{constTimeNegate:Zs,hasPrecomputes(e){return ac(e)!==1},unsafeLadder(t,n,r=e.ZERO){let i=t;for(;n>Ys;)n&Xs&&(r=r.add(i)),i=i.double(),n>>=Xs;return r},precomputeWindow(e,n){let{windows:r,windowSize:i}=$s(n,t),a=[],o=e,s=o;for(let e=0;e<r;e++){s=o,a.push(s);for(let e=1;e<i;e++)s=s.add(o),a.push(s);o=s.double()}return a},wNAF(n,r,i){let a=e.ZERO,o=e.BASE,s=$s(n,t);for(let e=0;e<s.windows;e++){let{nextN:t,offset:n,isZero:c,isNeg:l,isNegF:u,offsetF:d}=ec(i,e,s);i=t,c?o=o.add(Zs(u,r[d])):a=a.add(Zs(l,r[n]))}return{p:a,f:o}},wNAFUnsafe(n,r,i,a=e.ZERO){let o=$s(n,t);for(let e=0;e<o.windows&&i!==Ys;e++){let{nextN:t,offset:n,isZero:s,isNeg:c}=ec(i,e,o);if(i=t,!s){let e=r[n];a=a.add(c?e.negate():e)}}return a},getPrecomputes(e,t,n){let r=rc.get(t);return r||(r=this.precomputeWindow(t,e),e!==1&&rc.set(t,n(r))),r},wNAFCached(e,t,n){let r=ac(e);return this.wNAF(r,this.getPrecomputes(r,e,n),t)},wNAFCachedUnsafe(e,t,n,r){let i=ac(e);return i===1?this.unsafeLadder(e,t,r):this.wNAFUnsafe(i,this.getPrecomputes(i,e,n),t,r)},setWindowSize(e,n){Qs(n,t),ic.set(e,n),rc.delete(e)}}}function sc(e,t,n,r){tc(n,e),nc(r,t);let i=n.length,a=r.length;if(i!==a)throw Error(`arrays of points and scalars must have equal length`);let o=e.ZERO,s=In(BigInt(i)),c=1;s>12?c=s-3:s>4?c=s-2:s>0&&(c=2);let l=kn(c),u=Array(Number(l)+1).fill(o),d=Math.floor((t.BITS-1)/c)*c,f=o;for(let e=d;e>=0;e-=c){u.fill(o);for(let t=0;t<a;t++){let i=r[t],a=Number(i>>BigInt(e)&l);u[a]=u[a].add(n[t])}let t=o;for(let e=u.length-1,n=o;e>0;e--)n=n.add(u[e]),t=t.add(n);if(f=f.add(t),e!==0)for(let e=0;e<c;e++)f=f.double()}return f}function cc(e){return Bs(e.Fp),An(e,{n:`bigint`,h:`bigint`,Gx:`field`,Gy:`field`},{nBitLength:`isSafeInteger`,nByteLength:`isSafeInteger`}),Object.freeze({...Ws(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}function lc(e){e.lowS!==void 0&&Bn(`lowS`,e.lowS),e.prehash!==void 0&&Bn(`prehash`,e.prehash)}function uc(e){let t=cc(e);An(t,{a:`field`,b:`field`},{allowInfinityPoint:`boolean`,allowedPrivateKeyLengths:`array`,clearCofactor:`function`,fromBytes:`function`,isTorsionFree:`function`,toBytes:`function`,wrapPrivateKey:`boolean`});let{endo:n,Fp:r,a:i}=t;if(n){if(!r.eql(i,r.ZERO))throw Error(`invalid endo: CURVE.a must be 0`);if(typeof n!=`object`||typeof n.beta!=`bigint`||typeof n.splitScalar!=`function`)throw Error(`invalid endo: expected "beta": bigint and "splitScalar": function`)}return Object.freeze({...t})}var dc={Err:class extends Error{constructor(e=``){super(e)}},_tlv:{encode:(e,t)=>{let{Err:n}=dc;if(e<0||e>256)throw new n(`tlv.encode: wrong tag`);if(t.length&1)throw new n(`tlv.encode: unpadded data`);let r=t.length/2,i=qn(r);if(i.length/2&128)throw new n(`tlv.encode: long form length too big`);let a=r>127?qn(i.length/2|128):``;return qn(e)+a+i+t},decode(e,t){let{Err:n}=dc,r=0;if(e<0||e>256)throw new n(`tlv.encode: wrong tag`);if(t.length<2||t[r++]!==e)throw new n(`tlv.decode: wrong tlv`);let i=t[r++],a=!!(i&128),o=0;if(!a)o=i;else{let e=i&127;if(!e)throw new n(`tlv.decode(long): indefinite length not supported`);if(e>4)throw new n(`tlv.decode(long): byte length is too big`);let a=t.subarray(r,r+e);if(a.length!==e)throw new n(`tlv.decode: length bytes not complete`);if(a[0]===0)throw new n(`tlv.decode(long): zero leftmost byte`);for(let e of a)o=o<<8|e;if(r+=e,o<128)throw new n(`tlv.decode(long): not minimal encoding`)}let s=t.subarray(r,r+o);if(s.length!==o)throw new n(`tlv.decode: wrong value length`);return{v:s,l:t.subarray(r+o)}}},_int:{encode(e){let{Err:t}=dc;if(e<pc)throw new t(`integer: negative integers are not allowed`);let n=qn(e);if(Number.parseInt(n[0],16)&8&&(n=`00`+n),n.length&1)throw new t(`unexpected DER parsing assertion: unpadded hex`);return n},decode(e){let{Err:t}=dc;if(e[0]&128)throw new t(`invalid signature integer: negative`);if(e[0]===0&&!(e[1]&128))throw new t(`invalid signature integer: unnecessary leading zero`);return Wn(e)}},toSig(e){let{Err:t,_int:n,_tlv:r}=dc,i=Mn(`signature`,e),{v:a,l:o}=r.decode(48,i);if(o.length)throw new t(`invalid signature: left bytes after parsing`);let{v:s,l:c}=r.decode(2,a),{v:l,l:u}=r.decode(2,c);if(u.length)throw new t(`invalid signature: left bytes after parsing`);return{r:n.decode(s),s:n.decode(l)}},hexFromSig(e){let{_tlv:t,_int:n}=dc,r=t.encode(2,n.encode(e.r))+t.encode(2,n.encode(e.s));return t.encode(48,r)}};function fc(e,t){return Vn(Pn(e,t))}var pc=BigInt(0),N=BigInt(1),mc=BigInt(2),hc=BigInt(3),gc=BigInt(4);function _c(e){let t=uc(e),{Fp:n}=t,r=Gs(t.n,t.nBitLength),i=t.toBytes||((e,t,r)=>{let i=t.toAffine();return Rn(Uint8Array.from([4]),n.toBytes(i.x),n.toBytes(i.y))}),a=t.fromBytes||(e=>{let t=e.subarray(1);return{x:n.fromBytes(t.subarray(0,n.BYTES)),y:n.fromBytes(t.subarray(n.BYTES,2*n.BYTES))}});function o(e){let{a:r,b:i}=t,a=n.sqr(e),o=n.mul(a,e);return n.add(n.add(o,n.mul(e,r)),i)}function s(e,t){let r=n.sqr(t),i=o(e);return n.eql(r,i)}if(!s(t.Gx,t.Gy))throw Error(`bad curve params: generator point`);let c=n.mul(n.pow(t.a,hc),gc),l=n.mul(n.sqr(t.b),BigInt(27));if(n.is0(n.add(c,l)))throw Error(`bad curve params: a or b`);function u(e){return Hn(e,N,t.n)}function d(e){let{allowedPrivateKeyLengths:n,nByteLength:r,wrapPrivateKey:i,n:a}=t;if(n&&typeof e!=`bigint`){if(zn(e)&&(e=Vn(e)),typeof e!=`string`||!n.includes(e.length))throw Error(`invalid private key`);e=e.padStart(r*2,`0`)}let o;try{o=typeof e==`bigint`?e:Wn(Mn(`private key`,e,r))}catch{throw Error(`invalid private key, expected hex or `+r+` bytes, got `+typeof e)}return i&&(o=M(o,a)),Gn(`private key`,o,N,a),o}function f(e){if(!(e instanceof h))throw Error(`ProjectivePoint expected`)}let p=Fn((e,t)=>{let{px:r,py:i,pz:a}=e;if(n.eql(a,n.ONE))return{x:r,y:i};let o=e.is0();t??=o?n.ONE:n.inv(a);let s=n.mul(r,t),c=n.mul(i,t),l=n.mul(a,t);if(o)return{x:n.ZERO,y:n.ZERO};if(!n.eql(l,n.ONE))throw Error(`invZ was invalid`);return{x:s,y:c}}),m=Fn(e=>{if(e.is0()){if(t.allowInfinityPoint&&!n.is0(e.py))return;throw Error(`bad point: ZERO`)}let{x:r,y:i}=e.toAffine();if(!n.isValid(r)||!n.isValid(i))throw Error(`bad point: x or y not FE`);if(!s(r,i))throw Error(`bad point: equation left != right`);if(!e.isTorsionFree())throw Error(`bad point: not in prime-order subgroup`);return!0});class h{constructor(e,t,r){if(e==null||!n.isValid(e))throw Error(`x required`);if(t==null||!n.isValid(t)||n.is0(t))throw Error(`y required`);if(r==null||!n.isValid(r))throw Error(`z required`);this.px=e,this.py=t,this.pz=r,Object.freeze(this)}static fromAffine(e){let{x:t,y:r}=e||{};if(!e||!n.isValid(t)||!n.isValid(r))throw Error(`invalid affine point`);if(e instanceof h)throw Error(`projective point not allowed`);let i=e=>n.eql(e,n.ZERO);return i(t)&&i(r)?h.ZERO:new h(t,r,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(e){let t=Hs(n,e.map(e=>e.pz));return e.map((e,n)=>e.toAffine(t[n])).map(h.fromAffine)}static fromHex(e){let t=h.fromAffine(a(Mn(`pointHex`,e)));return t.assertValidity(),t}static fromPrivateKey(e){return h.BASE.multiply(d(e))}static msm(e,t){return sc(h,r,e,t)}_setWindowSize(e){v.setWindowSize(this,e)}assertValidity(){m(this)}hasEvenY(){let{y:e}=this.toAffine();if(n.isOdd)return!n.isOdd(e);throw Error(`Field doesn't support isOdd`)}equals(e){f(e);let{px:t,py:r,pz:i}=this,{px:a,py:o,pz:s}=e,c=n.eql(n.mul(t,s),n.mul(a,i)),l=n.eql(n.mul(r,s),n.mul(o,i));return c&&l}negate(){return new h(this.px,n.neg(this.py),this.pz)}double(){let{a:e,b:r}=t,i=n.mul(r,hc),{px:a,py:o,pz:s}=this,c=n.ZERO,l=n.ZERO,u=n.ZERO,d=n.mul(a,a),f=n.mul(o,o),p=n.mul(s,s),m=n.mul(a,o);return m=n.add(m,m),u=n.mul(a,s),u=n.add(u,u),c=n.mul(e,u),l=n.mul(i,p),l=n.add(c,l),c=n.sub(f,l),l=n.add(f,l),l=n.mul(c,l),c=n.mul(m,c),u=n.mul(i,u),p=n.mul(e,p),m=n.sub(d,p),m=n.mul(e,m),m=n.add(m,u),u=n.add(d,d),d=n.add(u,d),d=n.add(d,p),d=n.mul(d,m),l=n.add(l,d),p=n.mul(o,s),p=n.add(p,p),d=n.mul(p,m),c=n.sub(c,d),u=n.mul(p,f),u=n.add(u,u),u=n.add(u,u),new h(c,l,u)}add(e){f(e);let{px:r,py:i,pz:a}=this,{px:o,py:s,pz:c}=e,l=n.ZERO,u=n.ZERO,d=n.ZERO,p=t.a,m=n.mul(t.b,hc),g=n.mul(r,o),_=n.mul(i,s),v=n.mul(a,c),y=n.add(r,i),b=n.add(o,s);y=n.mul(y,b),b=n.add(g,_),y=n.sub(y,b),b=n.add(r,a);let x=n.add(o,c);return b=n.mul(b,x),x=n.add(g,v),b=n.sub(b,x),x=n.add(i,a),l=n.add(s,c),x=n.mul(x,l),l=n.add(_,v),x=n.sub(x,l),d=n.mul(p,b),l=n.mul(m,v),d=n.add(l,d),l=n.sub(_,d),d=n.add(_,d),u=n.mul(l,d),_=n.add(g,g),_=n.add(_,g),v=n.mul(p,v),b=n.mul(m,b),_=n.add(_,v),v=n.sub(g,v),v=n.mul(p,v),b=n.add(b,v),g=n.mul(_,b),u=n.add(u,g),g=n.mul(x,b),l=n.mul(y,l),l=n.sub(l,g),g=n.mul(y,_),d=n.mul(x,d),d=n.add(d,g),new h(l,u,d)}subtract(e){return this.add(e.negate())}is0(){return this.equals(h.ZERO)}wNAF(e){return v.wNAFCached(this,e,h.normalizeZ)}multiplyUnsafe(e){let{endo:r,n:i}=t;Gn(`scalar`,e,pc,i);let a=h.ZERO;if(e===pc)return a;if(this.is0()||e===N)return this;if(!r||v.hasPrecomputes(this))return v.wNAFCachedUnsafe(this,e,h.normalizeZ);let{k1neg:o,k1:s,k2neg:c,k2:l}=r.splitScalar(e),u=a,d=a,f=this;for(;s>pc||l>pc;)s&N&&(u=u.add(f)),l&N&&(d=d.add(f)),f=f.double(),s>>=N,l>>=N;return o&&(u=u.negate()),c&&(d=d.negate()),d=new h(n.mul(d.px,r.beta),d.py,d.pz),u.add(d)}multiply(e){let{endo:r,n:i}=t;Gn(`scalar`,e,N,i);let a,o;if(r){let{k1neg:t,k1:i,k2neg:s,k2:c}=r.splitScalar(e),{p:l,f:u}=this.wNAF(i),{p:d,f}=this.wNAF(c);l=v.constTimeNegate(t,l),d=v.constTimeNegate(s,d),d=new h(n.mul(d.px,r.beta),d.py,d.pz),a=l.add(d),o=u.add(f)}else{let{p:t,f:n}=this.wNAF(e);a=t,o=n}return h.normalizeZ([a,o])[0]}multiplyAndAddUnsafe(e,t,n){let r=h.BASE,i=(e,t)=>t===pc||t===N||!e.equals(r)?e.multiplyUnsafe(t):e.multiply(t),a=i(this,t).add(i(e,n));return a.is0()?void 0:a}toAffine(e){return p(this,e)}isTorsionFree(){let{h:e,isTorsionFree:n}=t;if(e===N)return!0;if(n)return n(h,this);throw Error(`isTorsionFree() has not been declared for the elliptic curve`)}clearCofactor(){let{h:e,clearCofactor:n}=t;return e===N?this:n?n(h,this):this.multiplyUnsafe(t.h)}toRawBytes(e=!0){return Bn(`isCompressed`,e),this.assertValidity(),i(h,this,e)}toHex(e=!0){return Bn(`isCompressed`,e),Vn(this.toRawBytes(e))}}h.BASE=new h(t.Gx,t.Gy,n.ONE),h.ZERO=new h(n.ZERO,n.ONE,n.ZERO);let{endo:g,nBitLength:_}=t,v=oc(h,g?Math.ceil(_/2):_);return{CURVE:t,ProjectivePoint:h,normPrivateKeyToScalar:d,weierstrassEquation:o,isWithinCurveOrder:u}}function vc(e){let t=cc(e);return An(t,{hash:`hash`,hmac:`function`,randomBytes:`function`},{bits2int:`function`,bits2int_modN:`function`,lowS:`boolean`}),Object.freeze({lowS:!0,...t})}function yc(e){let t=vc(e),{Fp:n,n:r,nByteLength:i,nBitLength:a}=t,o=n.BYTES+1,s=2*n.BYTES+1;function c(e){return M(e,r)}function l(e){return Ps(e,r)}let{ProjectivePoint:u,normPrivateKeyToScalar:d,weierstrassEquation:f,isWithinCurveOrder:p}=_c({...t,toBytes(e,t,r){let i=t.toAffine(),a=n.toBytes(i.x),o=Rn;return Bn(`isCompressed`,r),r?o(Uint8Array.from([t.hasEvenY()?2:3]),a):o(Uint8Array.from([4]),a,n.toBytes(i.y))},fromBytes(e){let t=e.length,r=e[0],i=e.subarray(1);if(t===o&&(r===2||r===3)){let e=Wn(i);if(!Hn(e,N,n.ORDER))throw Error(`Point is not on curve`);let t=f(e),a;try{a=n.sqrt(t)}catch(e){let t=e instanceof Error?`: `+e.message:``;throw Error(`Point is not on curve`+t)}let o=(a&N)===N;return(r&1)==1!==o&&(a=n.neg(a)),{x:e,y:a}}else if(t===s&&r===4)return{x:n.fromBytes(i.subarray(0,n.BYTES)),y:n.fromBytes(i.subarray(n.BYTES,2*n.BYTES))};else{let e=o,n=s;throw Error(`invalid Point, expected length of `+e+`, or uncompressed `+n+`, got `+t)}}});function m(e){return e>r>>N}function h(e){return m(e)?c(-e):e}let g=(e,t,n)=>Wn(e.slice(t,n));class _{constructor(e,t,n){Gn(`r`,e,N,r),Gn(`s`,t,N,r),this.r=e,this.s=t,n!=null&&(this.recovery=n),Object.freeze(this)}static fromCompact(e){let t=i;return e=Mn(`compactSignature`,e,t*2),new _(g(e,0,t),g(e,t,2*t))}static fromDER(e){let{r:t,s:n}=dc.toSig(Mn(`DER`,e));return new _(t,n)}assertValidity(){}addRecoveryBit(e){return new _(this.r,this.s,e)}recoverPublicKey(e){let{r,s:i,recovery:a}=this,o=C(Mn(`msgHash`,e));if(a==null||![0,1,2,3].includes(a))throw Error(`recovery id invalid`);let s=a===2||a===3?r+t.n:r;if(s>=n.ORDER)throw Error(`recovery id 2 or 3 invalid`);let d=a&1?`03`:`02`,f=u.fromHex(d+fc(s,n.BYTES)),p=l(s),m=c(-o*p),h=c(i*p),g=u.BASE.multiplyAndAddUnsafe(f,m,h);if(!g)throw Error(`point at infinify`);return g.assertValidity(),g}hasHighS(){return m(this.s)}normalizeS(){return this.hasHighS()?new _(this.r,c(-this.s),this.recovery):this}toDERRawBytes(){return Nn(this.toDERHex())}toDERHex(){return dc.hexFromSig(this)}toCompactRawBytes(){return Nn(this.toCompactHex())}toCompactHex(){let e=i;return fc(this.r,e)+fc(this.s,e)}}let v={isValidPrivateKey(e){try{return d(e),!0}catch{return!1}},normPrivateKeyToScalar:d,randomPrivateKey:()=>{let e=qs(t.n);return Js(t.randomBytes(e),t.n)},precompute(e=8,t=u.BASE){return t._setWindowSize(e),t.multiply(BigInt(3)),t}};function y(e,t=!0){return u.fromPrivateKey(e).toRawBytes(t)}function b(e){if(typeof e==`bigint`)return!1;if(e instanceof u)return!0;let r=Mn(`key`,e).length,a=n.BYTES,o=a+1,s=2*a+1;if(!(t.allowedPrivateKeyLengths||i===o))return r===o||r===s}function x(e,t,n=!0){if(b(e)===!0)throw Error(`first arg must be private key`);if(b(t)===!1)throw Error(`second arg must be public key`);return u.fromHex(t).multiply(d(e)).toRawBytes(n)}let S=t.bits2int||function(e){if(e.length>8192)throw Error(`input is too large`);let t=Wn(e),n=e.length*8-a;return n>0?t>>BigInt(n):t},C=t.bits2int_modN||function(e){return c(S(e))},w=kn(a);function ee(e){return Gn(`num < 2^`+a,e,pc,w),Pn(e,i)}function te(e,r,i=ne){if([`recovered`,`canonical`].some(e=>e in i))throw Error(`sign() legacy options not supported`);let{hash:a,randomBytes:o}=t,{lowS:s,prehash:f,extraEntropy:g}=i;s??=!0,e=Mn(`msgHash`,e),lc(i),f&&(e=Mn(`prehashed msgHash`,a(e)));let v=C(e),y=d(r),b=[ee(y),ee(v)];if(g!=null&&g!==!1){let e=g===!0?o(n.BYTES):g;b.push(Mn(`extraEntropy`,e))}let x=Rn(...b),w=v;function te(e){let t=S(e);if(!p(t))return;let n=l(t),r=u.BASE.multiply(t).toAffine(),i=c(r.x);if(i===pc)return;let a=c(n*c(w+i*y));if(a===pc)return;let o=(r.x===i?0:2)|Number(r.y&N),d=a;return s&&m(a)&&(d=h(a),o^=1),new _(i,d,o)}return{seed:x,k2sig:te}}let ne={lowS:t.lowS,prehash:!1},re={lowS:t.lowS,prehash:!1};function ie(e,n,r=ne){let{seed:i,k2sig:a}=te(e,n,r),o=t;return Kn(o.hash.outputLen,o.nByteLength,o.hmac)(i,a)}u.BASE._setWindowSize(8);function ae(e,n,r,i=re){let a=e;n=Mn(`msgHash`,n),r=Mn(`publicKey`,r);let{lowS:o,prehash:s,format:d}=i;if(lc(i),`strict`in i)throw Error(`options.strict was renamed to lowS`);if(d!==void 0&&d!==`compact`&&d!==`der`)throw Error(`format must be compact or der`);let f=typeof a==`string`||zn(a),p=!f&&!d&&typeof a==`object`&&!!a&&typeof a.r==`bigint`&&typeof a.s==`bigint`;if(!f&&!p)throw Error(`invalid signature, expected Uint8Array, hex string or Signature instance`);let m,h;try{if(p&&(m=new _(a.r,a.s)),f){try{d!==`compact`&&(m=_.fromDER(a))}catch(e){if(!(e instanceof dc.Err))throw e}!m&&d!==`der`&&(m=_.fromCompact(a))}h=u.fromHex(r)}catch{return!1}if(!m||o&&m.hasHighS())return!1;s&&(n=t.hash(n));let{r:g,s:v}=m,y=C(n),b=l(v),x=c(y*b),S=c(g*b),w=u.BASE.multiplyAndAddUnsafe(h,x,S)?.toAffine();return w?c(w.x)===g:!1}return{CURVE:t,getPublicKey:y,getSharedSecret:x,sign:ie,verify:ae,ProjectivePoint:u,Signature:_,utils:v}}function bc(e,t){let n=e.ORDER,r=pc;for(let e=n-N;e%mc===pc;e/=mc)r+=N;let i=r,a=mc<<i-N-N,o=a*mc,s=(n-N)/o,c=(s-N)/mc,l=o-N,u=a,d=e.pow(t,s),f=e.pow(t,(s+N)/mc),p=(t,n)=>{let r=d,a=e.pow(n,l),o=e.sqr(a);o=e.mul(o,n);let s=e.mul(t,o);s=e.pow(s,c),s=e.mul(s,a),a=e.mul(s,n),o=e.mul(s,t);let p=e.mul(o,a);s=e.pow(p,u);let m=e.eql(s,e.ONE);a=e.mul(o,f),s=e.mul(p,r),o=e.cmov(a,o,m),p=e.cmov(s,p,m);for(let t=i;t>N;t--){let n=t-mc;n=mc<<n-N;let i=e.pow(p,n),s=e.eql(i,e.ONE);a=e.mul(o,r),r=e.mul(r,r),i=e.mul(p,r),o=e.cmov(a,o,s),p=e.cmov(i,p,s)}return{isValid:m,value:o}};if(e.ORDER%gc===hc){let n=(e.ORDER-hc)/gc,r=e.sqrt(e.neg(t));p=(t,i)=>{let a=e.sqr(i),o=e.mul(t,i);a=e.mul(a,o);let s=e.pow(a,n);s=e.mul(s,o);let c=e.mul(s,r),l=e.mul(e.sqr(s),i),u=e.eql(l,t);return{isValid:u,value:e.cmov(c,s,u)}}}return p}function xc(e,t){if(Bs(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw Error(`mapToCurveSimpleSWU: invalid opts`);let n=bc(e,t.Z);if(!e.isOdd)throw Error(`Fp.isOdd is not implemented!`);return r=>{let i,a,o,s,c,l,u,d;i=e.sqr(r),i=e.mul(i,t.Z),a=e.sqr(i),a=e.add(a,i),o=e.add(a,e.ONE),o=e.mul(o,t.B),s=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),s=e.mul(s,t.A),a=e.sqr(o),l=e.sqr(s),c=e.mul(l,t.A),a=e.add(a,c),a=e.mul(a,o),l=e.mul(l,s),c=e.mul(l,t.B),a=e.add(a,c),u=e.mul(i,o);let{isValid:f,value:p}=n(a,l);d=e.mul(i,r),d=e.mul(d,p),u=e.cmov(u,o,f),d=e.cmov(d,p,f);let m=e.isOdd(r)===e.isOdd(d);d=e.cmov(e.neg(d),d,m);let h=Hs(e,[s],!0)[0];return u=e.mul(u,h),{x:u,y:d}}}function Sc(e){return{hash:e,hmac:(t,...n)=>jo(e,t,wn(...n)),randomBytes:Sn}}function Cc(e,t){let n=t=>yc({...e,...Sc(t)});return{...n(t),create:n}}var wc=Wn;function Tc(e,t){if(Dc(e),Dc(t),e<0||e>=1<<8*t)throw Error(`invalid I2OSP input: `+e);let n=Array.from({length:t}).fill(0);for(let r=t-1;r>=0;r--)n[r]=e&255,e>>>=8;return new Uint8Array(n)}function Ec(e,t){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r]^t[r];return n}function Dc(e){if(!Number.isSafeInteger(e))throw Error(`number expected`)}function Oc(e,t,n,r){Un(e),Un(t),Dc(n),t.length>255&&(t=r(Rn(Xn(`H2C-OVERSIZE-DST-`),t)));let{outputLen:i,blockLen:a}=r,o=Math.ceil(n/i);if(n>65535||o>255)throw Error(`expand_message_xmd: invalid lenInBytes`);let s=Rn(t,Tc(t.length,1)),c=Tc(0,a),l=Tc(n,2),u=Array(o),d=r(Rn(c,e,l,Tc(0,1),s));u[0]=r(Rn(d,Tc(1,1),s));for(let e=1;e<=o;e++)u[e]=r(Rn(Ec(d,u[e-1]),Tc(e+1,1),s));return Rn(...u).slice(0,n)}function kc(e,t,n,r,i){if(Un(e),Un(t),Dc(n),t.length>255){let e=Math.ceil(2*r/8);t=i.create({dkLen:e}).update(Xn(`H2C-OVERSIZE-DST-`)).update(t).digest()}if(n>65535||t.length>255)throw Error(`expand_message_xof: invalid lenInBytes`);return i.create({dkLen:n}).update(e).update(Tc(n,2)).update(t).update(Tc(t.length,1)).digest()}function Ac(e,t,n){An(n,{DST:`stringOrUint8Array`,p:`bigint`,m:`isSafeInteger`,k:`isSafeInteger`,hash:`hash`});let{p:r,k:i,m:a,hash:o,expand:s,DST:c}=n;Un(e),Dc(t);let l=typeof c==`string`?Xn(c):c,u=r.toString(2).length,d=Math.ceil((u+i)/8),f=t*a*d,p;if(s===`xmd`)p=Oc(e,l,f,o);else if(s===`xof`)p=kc(e,l,f,i,o);else if(s===`_internal_pass`)p=e;else throw Error(`expand must be "xmd" or "xof"`);let m=Array(t);for(let e=0;e<t;e++){let t=Array(a);for(let n=0;n<a;n++){let i=d*(n+e*a);t[n]=M(wc(p.subarray(i,i+d)),r)}m[e]=t}return m}function jc(e,t){let n=t.map(e=>Array.from(e).reverse());return(t,r)=>{let[i,a,o,s]=n.map(n=>n.reduce((n,r)=>e.add(e.mul(n,t),r))),[c,l]=Hs(e,[a,s],!0);return t=e.mul(i,c),r=e.mul(r,e.mul(o,l)),{x:t,y:r}}}function Mc(e,t,n){if(typeof t!=`function`)throw Error(`mapToCurve() must be defined`);function r(n){return e.fromAffine(t(n))}function i(t){let n=t.clearCofactor();return n.equals(e.ZERO)?e.ZERO:(n.assertValidity(),n)}return{defaults:n,hashToCurve(e,t){let a=Ac(e,2,{...n,DST:n.DST,...t}),o=r(a[0]),s=r(a[1]);return i(o.add(s))},encodeToCurve(e,t){return i(r(Ac(e,1,{...n,DST:n.encodeDST,...t})[0]))},mapToCurve(e){if(!Array.isArray(e))throw Error(`expected array of bigints`);for(let t of e)if(typeof t!=`bigint`)throw Error(`expected array of bigints`);return i(r(e))}}}var Nc=Qn({secp256k1:()=>Hc,secp256k1_hasher:()=>Gc}),Pc=BigInt(`0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f`),Fc=BigInt(`0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141`),Ic=BigInt(0),Lc=BigInt(1),Rc=BigInt(2),zc=(e,t)=>(e+t/Rc)/t;function Bc(e){let t=Pc,n=BigInt(3),r=BigInt(6),i=BigInt(11),a=BigInt(22),o=BigInt(23),s=BigInt(44),c=BigInt(88),l=e*e*e%t,u=l*l*e%t,d=Ns(Ns(Ns(u,n,t)*u%t,n,t)*u%t,Rc,t)*l%t,f=Ns(d,i,t)*d%t,p=Ns(f,a,t)*f%t,m=Ns(p,s,t)*p%t,h=Ns(Ns(Ns(Ns(Ns(Ns(m,c,t)*m%t,s,t)*p%t,n,t)*u%t,o,t)*f%t,r,t)*l%t,Rc,t);if(!Vc.eql(Vc.sqr(h),e))throw Error(`Cannot find square root`);return h}var Vc=Gs(Pc,void 0,void 0,{sqrt:Bc}),Hc=Cc({a:Ic,b:BigInt(7),Fp:Vc,n:Fc,Gx:BigInt(`55066263022277343669578718895168534326250603453777594175500187360389116729240`),Gy:BigInt(`32670510020758816978083085130507043184471273380659243275938904335757337482424`),h:BigInt(1),lowS:!0,endo:{beta:BigInt(`0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee`),splitScalar:e=>{let t=Fc,n=BigInt(`0x3086d221a7d46bcde86c90e49284eb15`),r=-Lc*BigInt(`0xe4437ed6010e88286f547fa90abfe4c3`),i=BigInt(`0x114ca50f7a8e2f3f657c1108d9d44cfd8`),a=n,o=BigInt(`0x100000000000000000000000000000000`),s=zc(a*e,t),c=zc(-r*e,t),l=M(e-s*n-c*i,t),u=M(-s*r-c*a,t),d=l>o,f=u>o;if(d&&(l=t-l),f&&(u=t-u),l>o||u>o)throw Error(`splitScalar: Endomorphism failed, k=`+e);return{k1neg:d,k1:l,k2neg:f,k2:u}}}},Jr);Hc.ProjectivePoint,Hc.utils.randomPrivateKey;var Uc=jc(Vc,[[`0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7`,`0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581`,`0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262`,`0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c`],[`0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b`,`0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14`,`0x0000000000000000000000000000000000000000000000000000000000000001`],[`0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c`,`0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3`,`0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931`,`0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84`],[`0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b`,`0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573`,`0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f`,`0x0000000000000000000000000000000000000000000000000000000000000001`]].map(e=>e.map(e=>BigInt(e)))),Wc=xc(Vc,{A:BigInt(`0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533`),B:BigInt(`1771`),Z:Vc.create(BigInt(`-11`))}),Gc=Mc(Hc.ProjectivePoint,e=>{let{x:t,y:n}=Wc(Vc.create(e[0]));return Uc(t,n)},{DST:`secp256k1_XMD:SHA-256_SSWU_RO_`,encodeDST:`secp256k1_XMD:SHA-256_SSWU_NU_`,p:Vc.ORDER,m:1,k:128,expand:`xmd`,hash:Jr});Gc.hashToCurve,Gc.encodeToCurve;function Kc(e,t={}){let{recovered:n}=t;if(e.r===void 0||e.s===void 0||n&&e.yParity===void 0)throw new tl({signature:e});if(e.r<0n||e.r>Uo)throw new nl({value:e.r});if(e.s<0n||e.s>Uo)throw new rl({value:e.s});if(typeof e.yParity==`number`&&e.yParity!==0&&e.yParity!==1)throw new il({value:e.yParity})}function qc(e){return Jc(m(e))}function Jc(e){if(e.length!==130&&e.length!==132)throw new el({signature:e});let t=BigInt(de(e,0,32)),n=BigInt(de(e,32,64)),r=(()=>{let t=Number(`0x${e.slice(130)}`);if(!Number.isNaN(t))try{return $c(t)}catch{throw new il({value:t})}})();return r===void 0?{r:t,s:n}:{r:t,s:n,yParity:r}}function Yc(e){if(e.r!==void 0&&e.s!==void 0)return Xc(e)}function Xc(e){let t=typeof e==`string`?Jc(e):e instanceof Uint8Array?qc(e):typeof e.r==`string`?Qc(e):e.v?Zc(e):{r:e.r,s:e.s,...e.yParity===void 0?{}:{yParity:e.yParity}};return Kc(t),t}function Zc(e){return{r:e.r,s:e.s,yParity:$c(e.v)}}function Qc(e){let t=(()=>{let t=e.v?Number(e.v):void 0,n=e.yParity?Number(e.yParity):void 0;if(typeof t==`number`&&typeof n!=`number`&&(n=$c(t)),typeof n!=`number`)throw new il({value:e.yParity});return n})();return{r:BigInt(e.r),s:BigInt(e.s),yParity:t}}function $c(e){if(e===0||e===27)return 0;if(e===1||e===28)return 1;if(e>=35)return+(e%2==0);throw new al({value:e})}var el=class extends T{constructor({signature:e}){super(`Value \`${e}\` is an invalid signature size.`,{metaMessages:[`Expected: 64 bytes or 65 bytes.`,`Received ${Ct(an(e))} bytes.`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidSerializedSizeError`})}},tl=class extends T{constructor({signature:e}){super(`Signature \`${b(e)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.MissingPropertiesError`})}},nl=class extends T{constructor({value:e}){super(`Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidRError`})}},rl=class extends T{constructor({value:e}){super(`Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidSError`})}},il=class extends T{constructor({value:e}){super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidYParityError`})}},al=class extends T{constructor({value:e}){super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidVError`})}};function ol(e,t={}){return typeof e.chainId==`string`?sl(e):{...e,...t.signature}}function sl(e){let{address:t,chainId:n,nonce:r}=e,i=Yc(e);return{address:t,chainId:Number(n),nonce:BigInt(r),...i}}var cl=bs(`(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data`);function ll(e){if(typeof e==`string`){if(de(e,-32)!==`0x8010801080108010801080108010801080108010801080108010801080108010`)throw new fl(e)}else Kc(e.authorization)}function ul(e){ll(e);let t=me(de(e,-64,-32)),n=de(e,-t-64,-64),r=de(e,0,-t-64),[i,a,o]=_s(cl,n);return{authorization:ol({address:i.delegation,chainId:Number(i.chainId),nonce:i.nonce,yParity:i.yParity,r:i.r,s:i.s}),signature:r,...o&&o!==`0x`?{data:o,to:a}:{}}}function dl(e){try{return ll(e),!0}catch{return!1}}var fl=class extends T{constructor(e){super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`SignatureErc8010.InvalidWrappedSignatureError`})}};function pl(e){return e.map(e=>({...e,value:BigInt(e.value)}))}function ml(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?Me(e.nonce):void 0,storageProof:e.storageProof?pl(e.storageProof):void 0}}async function hl(e,{address:t,blockNumber:n,blockTag:r,storageKeys:i}){let a=r??`latest`,o=n===void 0?void 0:E(n);return ml(await e.request({method:`eth_getProof`,params:[t,i,o||a]}))}async function gl(e,{address:t,blockNumber:n,blockTag:r=`latest`,slot:i}){let a=n===void 0?void 0:E(n);return await e.request({method:`eth_getStorageAt`,params:[t,i,a||r]})}async function _l(e,{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:a,sender:o,nonce:c}){let l=r||`latest`,u=n===void 0?void 0:E(n),d=null;if(i?d=await e.request({method:`eth_getTransactionByHash`,params:[i]},{dedupe:!0}):t?d=await e.request({method:`eth_getTransactionByBlockHashAndIndex`,params:[t,E(a)]},{dedupe:!0}):(u||l)&&typeof a==`number`?d=await e.request({method:`eth_getTransactionByBlockNumberAndIndex`,params:[u||l,E(a)]},{dedupe:!!u}):o&&typeof c==`number`&&(d=await e.request({method:`eth_getTransactionBySenderAndNonce`,params:[o,E(c)]},{dedupe:!0})),!d)throw new s({blockHash:t,blockNumber:n,blockTag:l,hash:i,index:a});return(e.chain?.formatters?.transaction?.format||Dr)(d,`getTransaction`)}async function vl(e,{hash:t,transactionReceipt:n}){let[r,i]=await Promise.all([k(e,Ri,`getBlockNumber`)({}),t?k(e,_l,`getTransaction`)({hash:t}):void 0]),a=n?.blockNumber||i?.blockNumber;return a?r-a+1n:0n}async function yl(e,{hash:t}){let n=await e.request({method:`eth_getTransactionReceipt`,params:[t]},{dedupe:!0});if(!n)throw new ze({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||Qi)(n,`getTransactionReceipt`)}async function bl(e,t){let{account:n,authorizationList:r,allowFailure:i=!0,blockNumber:a,blockOverrides:o,blockTag:s,stateOverride:c}=t,l=t.contracts,{batchSize:u=t.batchSize??1024,deployless:d=t.deployless??!1}=typeof e.batch?.multicall==`object`?e.batch.multicall:{},f=(()=>{if(t.multicallAddress)return t.multicallAddress;if(d)return null;if(e.chain)return qt({blockNumber:a,chain:e.chain,contract:`multicall3`});throw Error(`client chain not configured. multicallAddress is required.`)})(),p=[[]],m=0,h=0;for(let e=0;e<l.length;e++){let{abi:t,address:r,args:a,functionName:o}=l[e];try{let e=we({abi:t,args:a,functionName:o});h+=(e.length-2)/2,u>0&&h>u&&p[m].length>0&&(m++,h=(e.length-2)/2,p[m]=[]),p[m]=[...p[m],{allowFailure:!0,callData:e,target:r}]}catch(e){let s=cr(e,{abi:t,address:r,args:a,docsPath:`/docs/contract/multicall`,functionName:o,sender:n});if(!i)throw s;p[m]=[...p[m],{allowFailure:!0,callData:`0x`,target:r}]}}let g=await Promise.allSettled(p.map(t=>k(e,Ti,`readContract`)({...f===null?{code:zt}:{address:f},abi:Ye,account:n,args:[t],authorizationList:r,blockNumber:a,blockOverrides:o,blockTag:s,functionName:`aggregate3`,stateOverride:c}))),_=[];for(let e=0;e<g.length;e++){let t=g[e];if(t.status===`rejected`){if(!i)throw t.reason;for(let n=0;n<p[e].length;n++)_.push({status:`failure`,error:t.reason,result:void 0});continue}let n=t.value;for(let t=0;t<n.length;t++){let{returnData:r,success:a}=n[t],{callData:o}=p[e][t],{abi:s,address:c,functionName:u,args:d}=l[_.length];try{if(o===`0x`)throw new ve;if(!a)throw new re({data:r});let e=Ht({abi:s,args:d,data:r,functionName:u});_.push(i?{result:e,status:`success`}:e)}catch(e){let t=cr(e,{abi:s,address:c,args:d,docsPath:`/docs/contract/multicall`,functionName:u});if(!i)throw t;_.push({error:t,result:void 0,status:`failure`})}}}if(_.length!==l.length)throw new v(`multicall results mismatch`);return _}async function xl(n,r){let{blockNumber:i,blockTag:a=n.experimental_blockTag??`latest`,blocks:o,returnFullTransactions:s,traceTransfers:c,validation:l}=r;try{let e=[];for(let n of o){let r=n.blockOverrides?cn(n.blockOverrides):void 0,i=n.calls.map(e=>{let n=e,r=n.account?t(n.account):void 0,i=n.abi?we(n):n.data,a={...n,account:r,data:n.dataSuffix?Lt([i||`0x`,n.dataSuffix]):i,from:n.from??r?.address};return Ge(a),qe(a)}),a=n.stateOverrides?Ue(n.stateOverrides):void 0;e.push({blockOverrides:r,calls:i,stateOverrides:a})}let r=(typeof i==`bigint`?E(i):void 0)||a;return(await n.request({method:`eth_simulateV1`,params:[{blockStateCalls:e,returnFullTransactions:s,traceTransfers:c,validation:l},r]})).map((e,t)=>({...kr(e),calls:e.calls.map((e,n)=>{let{abi:r,args:i,functionName:a,to:s}=o[t].calls[n],c=e.error?.data??e.returnData,l=BigInt(e.gasUsed),u=e.logs?.map(e=>_i(e)),d=e.status===`0x1`?`success`:`failure`,f=r&&d===`success`&&c!==`0x`?Ht({abi:r,data:c,functionName:a}):null,p=(()=>{if(d===`success`)return;let e;if(c===`0x`?e=new ve:c&&(e=new re({data:c})),e)return cr(e,{abi:r??[],address:s??`0x`,args:i,functionName:a??`<unknown>`})})();return{data:c,gasUsed:l,logs:u,status:d,...d===`success`?{result:f}:{error:p}}})}))}catch(t){let n=t,r=e(n,{});throw r instanceof ut?n:r}}function Sl(e){let t=!0,n=``,r=0,i=``,a=!1;for(let o=0;o<e.length;o++){let s=e[o];if([`(`,`)`,`,`].includes(s)&&(t=!0),s===`(`&&r++,s===`)`&&r--,t){if(r===0){if(s===` `&&[`event`,`function`,`error`,``].includes(i))i=``;else if(i+=s,s===`)`){a=!0;break}continue}if(s===` `){e[o-1]!==`,`&&n!==`,`&&n!==`,(`&&(n=``,t=!1);continue}i+=s,n+=s}}if(!a)throw new T(`Unable to normalize signature.`);return i}function Cl(e,t){let n=typeof e,r=t.type;switch(r){case`address`:return Io(e,{strict:!1});case`bool`:return n===`boolean`;case`function`:return n===`string`;case`string`:return n===`string`;default:return r===`tuple`&&`components`in t?Object.values(t.components).every((t,n)=>Cl(Object.values(e)[n],t)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n===`number`||n===`bigint`:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n===`string`||e instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(e)&&e.every(e=>Cl(e,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,``)})):!1}}function wl(e,t,n){for(let r in e){let i=e[r],a=t[r];if(i.type===`tuple`&&a.type===`tuple`&&`components`in i&&`components`in a)return wl(i.components,a.components,n[r]);let o=[i.type,a.type];if(o.includes(`address`)&&o.includes(`bytes20`)||(o.includes(`address`)&&o.includes(`string`)||o.includes(`address`)&&o.includes(`bytes`))&&Io(n[r],{strict:!1}))return o}}function Tl(e,t={}){let{prepare:n=!0}=t,r=Array.isArray(e)||typeof e==`string`?$n(e):e;return{...r,...n?{hash:kl(r)}:{}}}function El(e,t,n){let{args:r=[],prepare:i=!0}=n??{},a=be(t,{strict:!1}),o=e.filter(e=>a?e.type===`function`||e.type===`error`?Dl(e)===de(t,0,4):e.type===`event`?kl(e)===t:!1:`name`in e&&e.name===t);if(o.length===0)throw new jl({name:t});if(o.length===1)return{...o[0],...i?{hash:kl(o[0])}:{}};let s;for(let e of o)if(`inputs`in e){if(!r||r.length===0){if(!e.inputs||e.inputs.length===0)return{...e,...i?{hash:kl(e)}:{}};continue}if(e.inputs&&e.inputs.length!==0&&e.inputs.length===r.length&&r.every((t,n)=>{let r=`inputs`in e&&e.inputs[n];return r?Cl(t,r):!1})){if(s&&`inputs`in s&&s.inputs){let t=wl(e.inputs,s.inputs,r);if(t)throw new Al({abiItem:e,type:t[0]},{abiItem:s,type:t[1]})}s=e}}let c=(()=>{if(s)return s;let[e,...t]=o;return{...e,overloads:t}})();if(!c)throw new jl({name:t});return{...c,...i?{hash:kl(c)}:{}}}function Dl(...e){return de(kl((()=>{if(Array.isArray(e[0])){let[t,n]=e;return El(t,n)}return e[0]})()),0,4)}function Ol(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return El(t,n)}return e[0]})();return Sl(typeof t==`string`?t:Ut(t))}function kl(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return El(t,n)}return e[0]})();return typeof t!=`string`&&`hash`in t&&t.hash?t.hash:Mo(_e(Ol(t)))}var Al=class extends T{constructor(e,t){super(`Found ambiguous types in overloaded ABI Items.`,{metaMessages:[`\`${e.type}\` in \`${Sl(Ut(e.abiItem))}\`, and`,`\`${t.type}\` in \`${Sl(Ut(t.abiItem))}\``,``,`These types encode differently and cannot be distinguished at runtime.`,`Remove one of the ambiguous items in the ABI.`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiItem.AmbiguityError`})}},jl=class extends T{constructor({name:e,data:t,type:n=`item`}){let r=e?` with name "${e}"`:t?` with data "${t}"`:``;super(`ABI ${n}${r} not found.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiItem.NotFoundError`})}};function Ml(...e){let[t,n]=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return[Pl(t),n]}return e})(),{bytecode:r,args:i}=n;return c(r,t.inputs?.length&&i?.length?vs(t.inputs,i):`0x`)}function Nl(e){return Tl(e)}function Pl(e){let t=e.find(e=>e.type===`constructor`);if(!t)throw new jl({name:`constructor`});return t}function Fl(...e){let[t,n=[]]=(()=>{if(Array.isArray(e[0])){let[t,n,r]=e;return[Ll(t,n,{args:r}),r]}let[t,n]=e;return[t,n]})(),{overloads:r}=t,i=r?Ll([t,...r],t.name,{args:n}):t,a=Rl(i),o=n.length>0?vs(i.inputs,n):void 0;return o?c(a,o):a}function Il(e,t={}){return Tl(e,t)}function Ll(e,t,n){let r=El(e,t,n);if(r.type!==`function`)throw new jl({name:t,type:`function`});return r}function Rl(e){return Dl(e)}var zl=`0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,Bl=`0x0000000000000000000000000000000000000000`,Vl=`0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033`;async function Hl(e,n){let{blockNumber:r,blockTag:i,calls:a,stateOverrides:o,traceAssetChanges:s,traceTransfers:c,validation:u}=n,d=n.account?t(n.account):void 0;if(s&&!d)throw new v("`account` is required when `traceAssetChanges` is true");let f=d?Ml(Nl(`constructor(bytes, bytes)`),{bytecode:ot,args:[Vl,Fl(Il(`function getBalance(address)`),[d.address])]}):void 0,p=s?await Promise.all(n.calls.map(async t=>{if(!t.data&&!t.abi)return;let{accessList:n}=await za(e,{account:d.address,...t,data:t.abi?we(t):t.data});return n.map(({address:e,storageKeys:t})=>t.length>0?e:null)})).then(e=>e.flat().filter(Boolean)):[],m=await xl(e,{blockNumber:r,blockTag:i,blocks:[...s?[{calls:[{data:f}],stateOverrides:o},{calls:p.map((e,t)=>({abi:[Il(`function balanceOf(address) returns (uint256)`)],functionName:`balanceOf`,args:[d.address],to:e,from:Bl,nonce:t})),stateOverrides:[{address:Bl,nonce:0}]}]:[],{calls:[...a,{to:Bl}].map(e=>({...e,from:d?.address})),stateOverrides:o},...s?[{calls:[{data:f}]},{calls:p.map((e,t)=>({abi:[Il(`function balanceOf(address) returns (uint256)`)],functionName:`balanceOf`,args:[d.address],to:e,from:Bl,nonce:t})),stateOverrides:[{address:Bl,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Il(`function decimals() returns (uint256)`)],functionName:`decimals`,from:Bl,nonce:t})),stateOverrides:[{address:Bl,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Il(`function tokenURI(uint256) returns (string)`)],functionName:`tokenURI`,args:[0n],from:Bl,nonce:t})),stateOverrides:[{address:Bl,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Il(`function symbol() returns (string)`)],functionName:`symbol`,from:Bl,nonce:t})),stateOverrides:[{address:Bl,nonce:0}]}]:[]],traceTransfers:c,validation:u}),h=s?m[2]:m[0],[g,_,,y,b,x,S,C]=s?m:[],{calls:w,...ee}=h,te=w.slice(0,-1)??[],ne=g?.calls??[],re=_?.calls??[],ie=[...ne,...re].map(e=>e.status===`success`?l(e.data):null),ae=y?.calls??[],oe=b?.calls??[],T=[...ae,...oe].map(e=>e.status===`success`?l(e.data):null),se=(x?.calls??[]).map(e=>e.status===`success`?e.result:null),ce=(C?.calls??[]).map(e=>e.status===`success`?e.result:null),le=(S?.calls??[]).map(e=>e.status===`success`?e.result:null),ue=[];for(let[e,t]of T.entries()){let n=ie[e];if(typeof t!=`bigint`||typeof n!=`bigint`)continue;let r=se[e-1],i=ce[e-1],a=le[e-1],o=e===0?{address:zl,decimals:18,symbol:`ETH`}:{address:p[e-1],decimals:a||r?Number(r??1):void 0,symbol:i??void 0};ue.some(e=>e.token.address===o.address)||ue.push({token:o,value:{pre:n,post:t,diff:t-n}})}return{assetChanges:ue,block:ee,results:te}}var Ul=`0x6492649264926492649264926492649264926492649264926492649264926492`;function Wl(e){if(de(e,-32)!==`0x6492649264926492649264926492649264926492649264926492649264926492`)throw new ql(e)}function Gl(e){let{data:t,signature:n,to:r}=e;return c(vs(bs(`address, bytes, bytes`),[r,t,n]),Ul)}function Kl(e){try{return Wl(e),!0}catch{return!1}}var ql=class extends T{constructor(e){super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`SignatureErc6492.InvalidWrappedSignatureError`})}};function Jl({r:e,s:t,to:n=`hex`,v:r,yParity:i}){let a=(()=>{if(i===0||i===1)return i;if(r&&(r===27n||r===28n||r>=35n))return+(r%2n==0n);throw Error("Invalid `v` or `yParity` value")})(),o=`0x${new Hc.Signature(l(e),l(t)).toCompactHex()}${a===0?`1b`:`1c`}`;return n===`hex`?o:ht(o)}async function Yl(e,t){let{address:n,chain:r=e.chain,hash:i,erc6492VerifierAddress:a=t.universalSignatureVerifierAddress??r?.contracts?.erc6492Verifier?.address,multicallAddress:o=t.multicallAddress??r?.contracts?.multicall3?.address}=t;if(r?.verifyHash)return await r.verifyHash(e,t);let s=(()=>{let e=t.signature;return ue(e)?e:typeof e==`object`&&`r`in e&&`s`in e?Jl(e):fn(e)})();try{return dl(s)?await Xl(e,{...t,multicallAddress:o,signature:s}):await Zl(e,{...t,verifierAddress:a,signature:s})}catch(e){try{if(ie($t(n),await fr({hash:i,signature:s})))return!0}catch{}if(e instanceof $l)return!1;throw e}}async function Xl(e,t){let{address:n,blockNumber:r,blockTag:i,hash:a,multicallAddress:o}=t,{authorization:s,data:c,signature:l,to:u}=ul(t.signature);if(await Ka(e,{address:n,blockNumber:r,blockTag:i})===Jt([`0xef0100`,s.address]))return await Ql(e,{address:n,blockNumber:r,blockTag:i,hash:a,signature:l});let d={address:s.address,chainId:Number(s.chainId),nonce:Number(s.nonce),r:E(s.r,{size:32}),s:E(s.s,{size:32}),yParity:s.yParity};if(!await eo({address:n,authorization:d}))throw new $l;let f=await k(e,Ti,`readContract`)({...o?{address:o}:{code:zt},authorizationList:[d],abi:Ye,blockNumber:r,blockTag:`pending`,functionName:`aggregate3`,args:[[...c?[{allowFailure:!0,target:u??n,callData:c}]:[],{allowFailure:!0,target:n,callData:we({abi:_t,functionName:`isValidSignature`,args:[a,l]})}]]});if((f[f.length-1]?.returnData)?.startsWith(`0x1626ba7e`))return!0;throw new $l}async function Zl(e,t){let{address:n,factory:r,factoryData:i,hash:a,signature:o,verifierAddress:s,...c}=t,l=await(async()=>!r&&!i||Kl(o)?o:Gl({data:i,signature:o,to:r}))(),u=s?{to:s,data:we({abi:mt,functionName:`isValidSig`,args:[n,a,l]}),...c}:{data:rt({abi:mt,args:[n,a,l],bytecode:dt}),...c},{data:d}=await k(e,Wt,`call`)(u).catch(e=>{throw e instanceof pe?new $l:e});if(on(d??`0x0`))return!0;throw new $l}async function Ql(e,t){let{address:n,blockNumber:r,blockTag:i,hash:a,signature:o}=t;if((await k(e,Ti,`readContract`)({address:n,abi:_t,args:[a,o],blockNumber:r,blockTag:i,functionName:`isValidSignature`}).catch(e=>{throw e instanceof ge?new $l:e})).startsWith(`0x1626ba7e`))return!0;throw new $l}var $l=class extends Error{};async function eu(e,{address:t,message:n,factory:r,factoryData:i,signature:a,...o}){let s=po(n);return k(e,Yl,`verifyHash`)({address:t,factory:r,factoryData:i,hash:s,signature:a,...o})}async function tu(e,t){let{address:n,factory:r,factoryData:i,signature:a,message:o,primaryType:s,types:c,domain:l,...u}=t,d=xo({message:o,primaryType:s,types:c,domain:l});return k(e,Yl,`verifyHash`)({address:n,factory:r,factoryData:i,hash:d,signature:a,...u})}function nu(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:a,pollingInterval:o=e.pollingInterval}){let s=a===void 0?!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):a,c;return s?Ai(O([`watchBlockNumber`,e.uid,t,n,o]),{onBlockNumber:r,onError:i},r=>Mi(async()=>{try{let t=await k(e,Ri,`getBlockNumber`)({cacheTime:0});if(c!==void 0){if(t===c)return;if(t-c>1&&n)for(let e=c+1n;e<t;e++)r.onBlockNumber(e,c),c=e}(c===void 0||t>c)&&(r.onBlockNumber(t,c),c=t)}catch(e){r.onError?.(e)}},{emitOnBegin:t,interval:o})):Ai(O([`watchBlockNumber`,e.uid,t,n]),{onBlockNumber:r,onError:i},t=>{let n=!0,r=()=>n=!1;return(async()=>{try{let{unsubscribe:i}=await(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})().subscribe({params:[`newHeads`],onData(e){if(!n)return;let r=l(e.result?.number);t.onBlockNumber(r,c),c=r},onError(e){t.onError?.(e)}});r=i,n||r()}catch(e){i?.(e)}})(),()=>r()})}async function ru(e,t){let{checkReplacement:n=!0,confirmations:r=1,hash:i,onReplaced:a,retryCount:o=6,retryDelay:c=({count:e})=>~~(1<<e)*200,timeout:l=18e4}=t,u=O([`waitForTransactionReceipt`,e.uid,i]),d=t.pollingInterval?t.pollingInterval:e.chain?.experimental_preconfirmationTime?e.chain.experimental_preconfirmationTime:e.pollingInterval,f,p,m,h=!1,g,_,{promise:v,resolve:y,reject:b}=Qe(),x=l?setTimeout(()=>{_?.(),g?.(),b(new Ie({hash:i}))},l):void 0;return g=Ai(u,{onReplaced:a,resolve:y,reject:b},async t=>{if(m=await k(e,yl,`getTransactionReceipt`)({hash:i}).catch(()=>void 0),m&&r<=1){clearTimeout(x),t.resolve(m),g?.();return}_=k(e,nu,`watchBlockNumber`)({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:d,async onBlockNumber(a){let l=e=>{clearTimeout(x),_?.(),e(),g?.()},u=a;if(!h)try{if(m){if(r>1&&(!m.blockNumber||u-m.blockNumber+1n<r))return;l(()=>t.resolve(m));return}if(n&&!f&&(h=!0,await Xi(async()=>{f=await k(e,_l,`getTransaction`)({hash:i}),f.blockNumber&&(u=f.blockNumber)},{delay:c,retryCount:o}),h=!1),m=await k(e,yl,`getTransactionReceipt`)({hash:i}),r>1&&(!m.blockNumber||u-m.blockNumber+1n<r))return;l(()=>t.resolve(m))}catch(n){if(n instanceof s||n instanceof ze){if(!f){h=!1;return}try{p=f,h=!0;let n=await Xi(()=>k(e,Ar,`getBlock`)({blockNumber:u,includeTransactions:!0}),{delay:c,retryCount:o,shouldRetry:({error:e})=>e instanceof Tr});h=!1;let i=n.transactions.find(({from:e,nonce:t})=>e===p.from&&t===p.nonce);if(!i||(m=await k(e,yl,`getTransactionReceipt`)({hash:i.hash}),r>1&&(!m.blockNumber||u-m.blockNumber+1n<r)))return;let a=`replaced`;i.to===p.to&&i.value===p.value&&i.input===p.input?a=`repriced`:i.from===i.to&&i.value===0n&&(a=`cancelled`),l(()=>{t.onReplaced?.({reason:a,replacedTransaction:p,transaction:i,transactionReceipt:m}),t.resolve(m)})}catch(e){l(()=>t.reject(e))}}else l(()=>t.reject(n))}}})}),v}function iu(e,{blockTag:t=e.experimental_blockTag??`latest`,emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:a,includeTransactions:o,poll:s,pollingInterval:c=e.pollingInterval}){let l=s===void 0?!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):s,u=o??!1,d;return l?Ai(O([`watchBlocks`,e.uid,t,n,r,u,c]),{onBlock:i,onError:a},i=>Mi(async()=>{try{let r=await k(e,Ar,`getBlock`)({blockTag:t,includeTransactions:u});if(r.number!==null&&d?.number!=null){if(r.number===d.number)return;if(r.number-d.number>1&&n)for(let t=d?.number+1n;t<r.number;t++){let n=await k(e,Ar,`getBlock`)({blockNumber:t,includeTransactions:u});i.onBlock(n,d),d=n}}(d?.number==null||t===`pending`&&r?.number==null||r.number!==null&&r.number>d.number)&&(i.onBlock(r,d),d=r)}catch(e){i.onError?.(e)}},{emitOnBegin:r,interval:c})):(()=>{let n=!0,o=!0,s=()=>n=!1;return(async()=>{try{r&&k(e,Ar,`getBlock`)({blockTag:t,includeTransactions:u}).then(e=>{n&&(o&&=(i(e,void 0),!1))}).catch(a);let{unsubscribe:c}=await(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})().subscribe({params:[`newHeads`],async onData(t){if(!n)return;let r=await k(e,Ar,`getBlock`)({blockNumber:t.result?.number,includeTransactions:u}).catch(()=>{});n&&(i(r,d),o=!1,d=r)},onError(e){a?.(e)}});s=c,n||s()}catch(e){a?.(e)}})(),()=>s()})()}function au(e,{address:t,args:n,batch:r=!0,event:i,events:a,fromBlock:o,onError:s,onLogs:c,poll:l,pollingInterval:u=e.pollingInterval,strict:d}){let f=l===void 0?typeof o==`bigint`?!0:!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):l,p=d??!1;return f?Ai(O([`watchEvent`,t,n,r,e.uid,i,u,o]),{onLogs:c,onError:s},s=>{let c;o!==void 0&&(c=o-1n);let l,d=!1,f=Mi(async()=>{if(!d){try{l=await k(e,Va,`createEventFilter`)({address:t,args:n,event:i,events:a,strict:p,fromBlock:o})}catch{}d=!0;return}try{let o;if(l)o=await k(e,zi,`getFilterChanges`)({filter:l});else{let r=await k(e,Ri,`getBlockNumber`)({});o=c&&c!==r?await k(e,Ci,`getLogs`)({address:t,args:n,event:i,events:a,fromBlock:c+1n,toBlock:r}):[],c=r}if(o.length===0)return;if(r)s.onLogs(o);else for(let e of o)s.onLogs([e])}catch(e){l&&e instanceof at&&(d=!1),s.onError?.(e)}},{emitOnBegin:!0,interval:u});return async()=>{l&&await k(e,Bi,`uninstallFilter`)({filter:l}),f()}}):(()=>{let r=!0,o=()=>r=!1;return(async()=>{try{let l=(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})(),u=a??(i?[i]:void 0),f=[];u&&(f=[u.flatMap(e=>rr({abi:[e],eventName:e.name,args:n}))],i&&(f=f[0]));let{unsubscribe:m}=await l.subscribe({params:[`logs`,{address:t,topics:f}],onData(e){if(!r)return;let t=e.result;try{let{eventName:e,args:n}=yi({abi:u??[],data:t.data,topics:t.topics,strict:p});c([_i(t,{args:n,eventName:e})])}catch(e){let n,r;if(e instanceof he||e instanceof xe){if(d)return;n=e.abiItem.name,r=e.abiItem.inputs?.some(e=>!(`name`in e&&e.name))}c([_i(t,{args:r?[]:{},eventName:n})])}},onError(e){s?.(e)}});o=m,r||o()}catch(e){s?.(e)}})(),()=>o()})()}function ou(e,{batch:t=!0,onError:n,onTransactions:r,poll:i,pollingInterval:a=e.pollingInterval}){return(i===void 0?e.transport.type!==`webSocket`&&e.transport.type!==`ipc`:i)?Ai(O([`watchPendingTransactions`,e.uid,t,a]),{onTransactions:r,onError:n},n=>{let r,i=Mi(async()=>{try{if(!r)try{r=await k(e,Ha,`createPendingTransactionFilter`)({});return}catch(e){throw i(),e}let a=await k(e,zi,`getFilterChanges`)({filter:r});if(a.length===0)return;if(t)n.onTransactions(a);else for(let e of a)n.onTransactions([e])}catch(e){n.onError?.(e)}},{emitOnBegin:!0,interval:a});return async()=>{r&&await k(e,Bi,`uninstallFilter`)({filter:r}),i()}}):(()=>{let t=!0,i=()=>t=!1;return(async()=>{try{let{unsubscribe:a}=await e.transport.subscribe({params:[`newPendingTransactions`],onData(e){if(!t)return;let n=e.result;r([n])},onError(e){n?.(e)}});i=a,t||i()}catch(e){n?.(e)}})(),()=>i()})()}function su(e){let{scheme:t,statement:n,...r}=e.match(cu)?.groups??{},{chainId:i,expirationTime:a,issuedAt:o,notBefore:s,requestId:c,...l}=e.match(lu)?.groups??{},u=e.split(`Resources:`)[1]?.split(`
- `).slice(1);return{...r,...l,...i?{chainId:Number(i)}:{},...a?{expirationTime:new Date(a)}:{},...o?{issuedAt:new Date(o)}:{},...s?{notBefore:new Date(s)}:{},...c?{requestId:c}:{},...u?{resources:u}:{},...t?{scheme:t}:{},...n?{statement:n}:{}}}var cu=/^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,lu=/(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;function uu(e){let{address:t,domain:n,message:r,nonce:i,scheme:a,time:o=new Date}=e;if(n&&r.domain!==n||i&&r.nonce!==i||a&&r.scheme!==a||r.expirationTime&&o>=r.expirationTime||r.notBefore&&o<r.notBefore)return!1;try{if(!r.address||!it(r.address,{strict:!1})||t&&!ie(r.address,t))return!1}catch{return!1}return!0}async function du(e,t){let{address:n,domain:r,message:i,nonce:a,scheme:o,signature:s,time:c=new Date,...l}=t,u=su(i);if(!u.address||!uu({address:n,domain:r,message:u,nonce:a,scheme:o,time:c}))return!1;let d=po(i);return Yl(e,{address:u.address,hash:d,signature:s,...l})}async function fu(e,{serializedTransaction:t,throwOnReceiptRevert:n,timeout:r}){let i=await e.request({method:`eth_sendRawTransactionSync`,params:r?[t,r]:[t]},{retryCount:0}),a=(e.chain?.formatters?.transactionReceipt?.format||Qi)(i);if(a.status===`reverted`&&n)throw new ee({receipt:a});return a}function pu(e){return{call:t=>Wt(e,t),createAccessList:t=>za(e,t),createBlockFilter:()=>Ba(e),createContractEventFilter:t=>or(e,t),createEventFilter:t=>Va(e,t),createPendingTransactionFilter:()=>Ha(e),estimateContractGas:t=>gi(e,t),estimateGas:t=>hi(e,t),getBalance:t=>Ua(e,t),getBlobBaseFee:()=>Wa(e),getBlock:t=>Ar(e,t),getBlockNumber:t=>Ri(e,t),getBlockTransactionCount:t=>Ga(e,t),getBytecode:t=>Ka(e,t),getChainId:()=>li(e),getCode:t=>Ka(e,t),getContractEvents:t=>wi(e,t),getDelegation:t=>qa(e,t),getEip712Domain:t=>Ya(e,t),getEnsAddress:t=>ga(e,t),getEnsAvatar:t=>Ia(e,t),getEnsName:t=>La(e,t),getEnsResolver:t=>Ra(e,t),getEnsText:t=>Fa(e,t),getFeeHistory:t=>Qa(e,t),estimateFeesPerGas:t=>Pr(e,t),getFilterChanges:t=>zi(e,t),getFilterLogs:t=>$a(e,t),getGasPrice:()=>jr(e),getLogs:t=>Ci(e,t),getProof:t=>hl(e,t),estimateMaxPriorityFeePerGas:t=>Mr(e,t),fillTransaction:t=>ui(e,t),getStorageAt:t=>gl(e,t),getTransaction:t=>_l(e,t),getTransactionConfirmations:t=>vl(e,t),getTransactionCount:t=>Ir(e,t),getTransactionReceipt:t=>yl(e,t),multicall:t=>bl(e,t),prepareTransactionRequest:t=>mi(e,t),readContract:t=>Ti(e,t),sendRawTransaction:t=>Gi(e,t),sendRawTransactionSync:t=>fu(e,t),simulate:t=>xl(e,t),simulateBlocks:t=>xl(e,t),simulateCalls:t=>Hl(e,t),simulateContract:t=>Ei(e,t),verifyHash:t=>Yl(e,t),verifyMessage:t=>eu(e,t),verifySiweMessage:t=>du(e,t),verifyTypedData:t=>tu(e,t),uninstallFilter:t=>Bi(e,t),waitForTransactionReceipt:t=>ru(e,t),watchBlocks:t=>iu(e,t),watchBlockNumber:t=>nu(e,t),watchContractEvent:t=>Vi(e,t),watchEvent:t=>au(e,t),watchPendingTransactions:t=>ou(e,t)}}function mu(e){let{key:t=`public`,name:n=`Public Client`}=e;return la({...e,key:t,name:n,type:`publicClient`}).extend(pu)}async function hu(e,{chain:t}){let{id:n,name:r,nativeCurrency:i,rpcUrls:a,blockExplorers:o}=t;await e.request({method:`wallet_addEthereumChain`,params:[{chainId:E(n),chainName:r,nativeCurrency:i,rpcUrls:a.default.http,blockExplorerUrls:o?Object.values(o).map(({url:e})=>e):void 0}]},{dedupe:!0,retryCount:0})}function gu(e,t){let{abi:n,args:r,bytecode:i,...a}=t,o=rt({abi:n,args:r,bytecode:i});return qi(e,{...a,...a.authorizationList?{to:null}:{},data:o})}async function _u(e){return e.account?.type===`local`?[e.account.address]:(await e.request({method:`eth_accounts`},{dedupe:!0})).map(e=>At(e))}async function vu(e,n={}){let{account:r=e.account,chainId:i}=n,a=r?t(r):void 0,o=i?[a?.address,[E(i)]]:[a?.address],s=await e.request({method:`wallet_getCapabilities`,params:o}),c={};for(let[e,t]of Object.entries(s)){c[Number(e)]={};for(let[n,r]of Object.entries(t))n===`addSubAccount`&&(n=`unstable_addSubAccount`),c[Number(e)][n]=r}return typeof i==`number`?c[i]:c}async function yu(e){return await e.request({method:`wallet_getPermissions`},{dedupe:!0})}async function bu(e,n){let{account:r=e.account,chainId:i,nonce:a}=n;if(!r)throw new Hi({docsPath:`/docs/eip7702/prepareAuthorization`});let o=t(r),s=(()=>{if(n.executor)return n.executor===`self`?n.executor:t(n.executor)})(),c={address:n.contractAddress??n.address,chainId:i,nonce:a};return c.chainId===void 0&&(c.chainId=e.chain?.id??await k(e,li,`getChainId`)({})),c.nonce===void 0&&(c.nonce=await k(e,Ir,`getTransactionCount`)({address:o.address,blockTag:`pending`}),(s===`self`||s?.address&&ie(s.address,o.address))&&(c.nonce+=1)),c}async function xu(e){return(await e.request({method:`eth_requestAccounts`},{dedupe:!0,retryCount:0})).map(e=>$t(e))}async function Su(e,t){return e.request({method:`wallet_requestPermissions`,params:[t]},{retryCount:0})}async function Cu(e,t){let{chain:n=e.chain}=t,r=t.timeout??Math.max((n?.blockTime??0)*3,5e3),i=await k(e,ta,`sendCalls`)(t);return await k(e,ra,`waitForCallsStatus`)({...t,id:i.id,timeout:r})}var wu=new st(128);async function Tu(e,n){let{account:r=e.account,assertChainId:i=!0,chain:a=e.chain,accessList:o,authorizationList:s,blobs:c,data:l,dataSuffix:u=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,pollingInterval:_,throwOnReceiptRevert:y,type:b,value:x,...S}=n,C=n.timeout??Math.max((a?.blockTime??0)*3,5e3);if(r===void 0)throw new Hi({docsPath:`/docs/actions/wallet/sendTransactionSync`});let w=r?t(r):null;try{Ge(n);let t=await(async()=>{if(n.to)return n.to;if(n.to!==null&&s&&s.length>0)return await yr({authorization:s[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`.")})})();if(w?.type===`json-rpc`||w===null){let n;a!==null&&(n=await k(e,li,`getChainId`)({}),i&&Wi({currentChainId:n,chain:a}));let r=e.chain?.formatters?.transactionRequest?.format,v=(r||qe)({...Ce(S,{format:r}),accessList:o,account:w,authorizationList:s,blobs:c,chainId:n,data:l&&Lt([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,to:t,type:b,value:x},`sendTransaction`),te=wu.get(e.uid),ne=te?`wallet_sendTransaction`:`eth_sendTransaction`,re=await(async()=>{try{return await e.request({method:ne,params:[v]},{retryCount:0})}catch(t){if(te===!1)throw t;let n=t;if(n.name===`InvalidInputRpcError`||n.name===`InvalidParamsRpcError`||n.name===`MethodNotFoundRpcError`||n.name===`MethodNotSupportedRpcError`)return await e.request({method:`wallet_sendTransaction`,params:[v]},{retryCount:0}).then(t=>(wu.set(e.uid,!0),t)).catch(t=>{let r=t;throw r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`?(wu.set(e.uid,!1),n):r});throw n}})(),ie=await k(e,ru,`waitForTransactionReceipt`)({checkReplacement:!1,hash:re,pollingInterval:_,timeout:C});if(y&&ie.status===`reverted`)throw new ee({receipt:ie});return ie}if(w?.type===`local`){let r=await k(e,mi,`prepareTransactionRequest`)({account:w,accessList:o,authorizationList:s,blobs:c,chain:a,data:l&&Lt([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,nonceManager:w.nonceManager,parameters:[...di,`sidecars`],type:b,value:x,...S,to:t}),i=a?.serializers?.transaction,_=await w.signTransaction(r,{serializer:i});return await k(e,fu,`sendRawTransactionSync`)({serializedTransaction:_,throwOnReceiptRevert:y,timeout:n.timeout})}throw w?.type===`smart`?new Ui({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:`/docs/actions/bundler/sendUserOperation`,type:`smart`}):new Ui({docsPath:`/docs/actions/wallet/sendTransactionSync`,type:w?.type})}catch(e){throw e instanceof Ui?e:ci(e,{...n,account:w,chain:n.chain||void 0})}}async function Eu(e,t){let{id:n}=t;await e.request({method:`wallet_showCallsStatus`,params:[n]})}async function Du(e,n){let{account:r=e.account}=n;if(!r)throw new Hi({docsPath:`/docs/eip7702/signAuthorization`});let i=t(r);if(!i.signAuthorization)throw new Ui({docsPath:`/docs/eip7702/signAuthorization`,metaMessages:["The `signAuthorization` Action does not support JSON-RPC Accounts."],type:i.type});let a=await bu(e,n);return i.signAuthorization(a)}async function Ou(e,{account:n=e.account,message:r}){if(!n)throw new Hi({docsPath:`/docs/actions/wallet/signMessage`});let i=t(n);if(i.signMessage)return i.signMessage({message:r});let a=typeof r==`string`?ln(r):r.raw instanceof Uint8Array?ke(r.raw):r.raw;return e.request({method:`personal_sign`,params:[a,i.address]},{retryCount:0})}async function ku(e,n){let{account:r=e.account,chain:i=e.chain,...a}=n;if(!r)throw new Hi({docsPath:`/docs/actions/wallet/signTransaction`});let o=t(r);Ge({account:o,...n});let s=await k(e,li,`getChainId`)({});i!==null&&Wi({currentChainId:s,chain:i});let c=(i?.formatters||e.chain?.formatters)?.transactionRequest?.format||qe;return o.signTransaction?o.signTransaction({...a,chainId:s},{serializer:e.chain?.serializers?.transaction}):await e.request({method:`eth_signTransaction`,params:[{...c({...a,account:o},`signTransaction`),chainId:E(s),from:o.address}]},{retryCount:0})}async function Au(e,n){let{account:r=e.account,domain:i,message:a,primaryType:o}=n;if(!r)throw new Hi({docsPath:`/docs/actions/wallet/signTypedData`});let s=t(r),c={EIP712Domain:yo({domain:i}),...n.types};if(vo({domain:i,message:a,primaryType:o,types:c}),s.signTypedData)return s.signTypedData({domain:i,message:a,primaryType:o,types:c});let l=_o({domain:i,message:a,primaryType:o,types:c});return e.request({method:`eth_signTypedData_v4`,params:[s.address,l]},{retryCount:0})}async function ju(e,{id:t}){await e.request({method:`wallet_switchEthereumChain`,params:[{chainId:E(t)}]},{retryCount:0})}async function Mu(e,t){return await e.request({method:`wallet_watchAsset`,params:t},{retryCount:0})}async function Nu(e,t){return Ji.internal(e,Tu,`sendTransactionSync`,t)}function Pu(e){return{addChain:t=>hu(e,t),deployContract:t=>gu(e,t),fillTransaction:t=>ui(e,t),getAddresses:()=>_u(e),getCallsStatus:t=>na(e,t),getCapabilities:t=>vu(e,t),getChainId:()=>li(e),getPermissions:()=>yu(e),prepareAuthorization:t=>bu(e,t),prepareTransactionRequest:t=>mi(e,t),requestAddresses:()=>xu(e),requestPermissions:t=>Su(e,t),sendCalls:t=>ta(e,t),sendCallsSync:t=>Cu(e,t),sendRawTransaction:t=>Gi(e,t),sendRawTransactionSync:t=>fu(e,t),sendTransaction:t=>qi(e,t),sendTransactionSync:t=>Tu(e,t),showCallsStatus:t=>Eu(e,t),signAuthorization:t=>Du(e,t),signMessage:t=>Ou(e,t),signTransaction:t=>ku(e,t),signTypedData:t=>Au(e,t),switchChain:t=>ju(e,t),waitForCallsStatus:t=>ra(e,t),watchAsset:t=>Mu(e,t),writeContract:t=>Ji(e,t),writeContractSync:t=>Nu(e,t)}}function Fu(e){let{key:t=`wallet`,name:n=`Wallet Client`,transport:r}=e;return la({...e,key:t,name:n,transport:r,type:`walletClient`}).extend(Pu)}function Iu({key:e,methods:t,name:n,request:r,retryCount:i=3,retryDelay:a=150,timeout:o,type:s},c){let l=ca();return{config:{key:e,methods:t,name:n,request:r,retryCount:i,retryDelay:a,timeout:o,type:s},request:ro(r,{methods:t,retryCount:i,retryDelay:a,uid:l}),value:c}}function Lu(e,t={}){let{key:n=`custom`,methods:r,name:i=`Custom Provider`,retryDelay:a}=t;return({retryCount:o})=>Iu({key:n,methods:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:a,type:`custom`})}var Ru=class extends v{constructor(){super(`No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.`,{docsPath:`/docs/clients/intro`,name:`UrlRequiredError`})}};function zu(e,t={}){let{batch:n,fetchFn:r,fetchOptions:a,key:o=`http`,methods:s,name:c=`HTTP JSON-RPC`,onFetchRequest:l,onFetchResponse:u,retryDelay:d,raw:f}=t;return({chain:p,retryCount:m,timeout:h})=>{let{batchSize:g=1e3,wait:_=0}=typeof n==`object`?n:{},v=t.retryCount??m,y=h??t.timeout??1e4,b=e||p?.rpcUrls.default.http[0];if(!b)throw new Ru;let x=co(b,{fetchFn:r,fetchOptions:a,onRequest:l,onResponse:u,timeout:y});return Iu({key:o,methods:s,name:c,async request({method:e,params:t}){let r={method:e,params:t},{schedule:a}=bt({id:b,wait:_,shouldSplitBatch(e){return e.length>g},fn:e=>x.request({body:e}),sort:(e,t)=>e.id-t.id}),[{error:o,result:s}]=await(async e=>n?a(e):[await x.request({body:e})])(r);if(f)return{error:o,result:s};if(o)throw new i({body:r,error:o,url:b});return s},retryCount:v,retryDelay:d,timeout:y,type:`http`},{fetchOptions:a,url:b})}}var P=10143,F={1337:{name:`FoMonad Local`,rpcUrl:`http://127.0.0.1:8545`,explorer:`https://monadvision.com`},10143:{name:`Monad Testnet`,rpcUrl:`https://testnet-rpc.monad.xyz`,explorer:`https://testnet.monadexplorer.com`,shmonUrl:`https://www.fomonad.wtf/shmon_testnet/`,vibecoinImpl:`0x33F4DD8153eA42c67Bb4dDEB5D0499ca2e96393D`,fomon:`0x0f3Ed63A647A71bd57657c105A4d171A535E9A68`,game:`0x24654BBcE7984E968a293671A404d79a7aDf2D57`,shmon:`0x282BdDFF5e58793AcAb65438b257Dbd15A8745C9`}},Bu=Qn({clearLastWallet:()=>Yu,connectWallet:()=>Ku,connectedWallet:()=>I,disconnectWallet:()=>qu,saveLastWallet:()=>Ju,switchChain:()=>Xu,walletEvents:()=>Hu,walletProviders:()=>Uu}),Vu=`fomonad-last-wallet`,Hu=new EventTarget,Uu=[],I=null;function Wu(e){Uu=e,Hu.dispatchEvent(new CustomEvent(`wallet-changed`))}function Gu(e){I=e,Hu.dispatchEvent(new CustomEvent(`wallet-changed`))}window.addEventListener(`eip6963:announceProvider`,e=>{let t=e.detail;if(!Uu.find(e=>e.info.uuid===t.info.uuid)){Wu([...Uu,t]);let e=localStorage.getItem(Vu);e&&t.info.rdns===e&&!I&&Ku(t)}}),window.dispatchEvent(new Event(`eip6963:requestProvider`));async function Ku(e){try{let t=await e.provider.request({method:`eth_requestAccounts`});if(!t||t.length===0)return null;let n=await e.provider.request({method:`eth_chainId`}),r=parseInt(n,16),i=t[0];return Gu({address:i,provider:e.provider,chainId:r,rdns:e.info.rdns,icon:e.info.icon,walletName:e.info.name}),e.provider.on&&(e.provider.on(`accountsChanged`,e=>{let t=e;!t||t.length===0?Gu(null):Gu({...I,address:t[0]})}),e.provider.on(`chainChanged`,e=>{let t=parseInt(e,16);I&&Gu({...I,chainId:t})})),i}catch{return null}}function qu(){Gu(null)}function Ju(e){localStorage.setItem(Vu,e)}function Yu(){localStorage.removeItem(Vu)}async function Xu(e,t,n){if(!I)return!1;try{return await I.provider.request({method:`wallet_switchEthereumChain`,params:[{chainId:`0x${e.toString(16)}`}]}),!0}catch(r){if(r&&typeof r==`object`&&`code`in r&&r.code===4902)try{return await I.provider.request({method:`wallet_addEthereumChain`,params:[{chainId:`0x${e.toString(16)}`,chainName:n,rpcUrls:[t],nativeCurrency:{name:`MON`,symbol:`MON`,decimals:18}}]}),!0}catch{return!1}return!1}}function Zu(e){let t=F[e];return{id:e,name:t?.name??`Chain ${e}`,nativeCurrency:{name:`MON`,symbol:`MON`,decimals:18},rpcUrls:{default:{http:[t?.rpcUrl??`http://127.0.0.1:8545`]}}}}var Qu=new Map,$u=null;Hu.addEventListener(`wallet-changed`,()=>{$u=null});function ed(e=P){if(!Qu.has(e)){let t=F[e],n=mu({chain:Zu(e),transport:zu(t?.rpcUrl??`http://127.0.0.1:8545`,{retryCount:5,retryDelay:250})});Qu.set(e,n)}return Qu.get(e)}function td(e=P){return!I||I.chainId!==e?null:((!$u||$u.chainId!==e)&&($u={chainId:e,client:mu({chain:Zu(e),transport:Lu(I.provider)})}),$u.client)}function nd(e){return!e||typeof e!=`object`?!1:`code`in e&&e.code===-32011?!0:`cause`in e?nd(e.cause):!!(e instanceof Error&&e.message.includes(`requests limited`))}async function L(e,t=P,n=3){let r=ed(t);for(let i=0;i<n;i++){let a=i===n-1,o=a?td(t)??r:r;try{return await e(o)}catch(e){if(nd(e)&&!a){await new Promise(e=>setTimeout(e,2**i*250));continue}throw e}}throw Error(`unreachable`)}function rd(){if(!I)return null;let e=Zu(I.chainId);return Fu({account:I.address,chain:e,transport:Lu(I.provider)})}async function id(e){if(!I)return!1;if(I.chainId===e)return!0;let t=F[e];if(!t||!await Xu(e,t.rpcUrl,t.name))return!1;if(await new Promise(e=>setTimeout(e,500)),I?.chainId!==e){let{disconnectWallet:e}=await Zt(async()=>{let{disconnectWallet:e}=await Promise.resolve().then(()=>Bu);return{disconnectWallet:e}},void 0,import.meta.url);return e(),!1}return!0}var R=[{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`},{name:`fomon`,type:`address`,internalType:`address`},{name:`vibecoinImpl`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`FOMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract FoMonad`}],stateMutability:`view`},{type:`function`,name:`INITIAL_TIMER`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`K`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`K_HALF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`MAX_TIMER`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`MIN_REFERRAL_DEPOSIT`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`P0`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_DURATION`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_KICKOFF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_DURATION`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`VIBECOIN_IMPL`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`WINNER_PRIZE_BPS`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`buy`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`buyWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`claimSeriesATokens`,inputs:[{name:`cycleId`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`claimSeriesBTokens`,inputs:[{name:`cycleId`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`currentVibecoin`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract Vibecoin`}],stateMutability:`view`},{type:`function`,name:`cycle`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`depositSeriesA`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`depositSeriesAWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`depositSeriesB`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`depositSeriesBWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`isTimerExpired`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`lastBuyer`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`phase`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`enum FoMonadGame.Phase`}],stateMutability:`view`},{type:`function`,name:`prizePool`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`referralCodes`,inputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`referralCodeOf`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],stateMutability:`view`},{type:`function`,name:`referralEarned`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`registerReferral`,inputs:[{name:`code`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`rolloverPool`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesADeposits`,inputs:[{name:``,type:`uint256`,internalType:`uint256`},{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesAEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesBDeposits`,inputs:[{name:``,type:`uint256`,internalType:`uint256`},{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesBEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`settleSeriesB`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`settlementTimestamp`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilSeriesAEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilSeriesBEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilTimer`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timerExpiry`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`tokensSeriesAByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`tokensSeriesBByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalDeposited`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalPublicCurveDeposited`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesA`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesAByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesB`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesBByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesDeposit`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`triggerSettlement`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`vibecoinByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`vibecoinCycle`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`winnerByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`prizeByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`gameState`,inputs:[{name:`getVibecoinURI`,type:`bool`,internalType:`bool`}],outputs:[{name:`state`,type:`tuple`,internalType:`struct FoMonadGame.GameState`,components:[{name:`phase`,type:`uint8`,internalType:`enum FoMonadGame.Phase`},{name:`phaseEndTime`,type:`uint256`,internalType:`uint256`},{name:`vibecoin`,type:`address`,internalType:`address`},{name:`vibecoinPrice`,type:`uint256`,internalType:`uint256`},{name:`vibecoinURI`,type:`string`,internalType:`string`},{name:`prizePool`,type:`uint256`,internalType:`uint256`},{name:`totalDeposited`,type:`uint256`,internalType:`uint256`},{name:`cycle`,type:`uint256`,internalType:`uint256`},{name:`lastBuyer`,type:`address`,internalType:`address`}]}],stateMutability:`view`},{type:`event`,name:`Buy`,inputs:[{name:`buyer`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonIn`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`tokensOut`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`CycleSettled`,inputs:[{name:`winner`,type:`address`,indexed:!0,internalType:`address`},{name:`prizeAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`rollover`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`newVibecoin`,type:`address`,indexed:!1,internalType:`address`}],anonymous:!1},{type:`event`,name:`ReferralRegistered`,inputs:[{name:`code`,type:`bytes32`,indexed:!0,internalType:`bytes32`},{name:`referrer`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`SeriesADeposit`,inputs:[{name:`depositor`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`referralCode`,type:`bytes32`,indexed:!1,internalType:`bytes32`}],anonymous:!1},{type:`event`,name:`SeriesBDeposit`,inputs:[{name:`depositor`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`referralCode`,type:`bytes32`,indexed:!1,internalType:`bytes32`}],anonymous:!1},{type:`event`,name:`SeriesSettled`,inputs:[{name:`K`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`vibecoin`,type:`address`,indexed:!1,internalType:`address`},{name:`timerExpiry`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`TimerExtended`,inputs:[{name:`newExpiry`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`lastBuyer`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`error`,name:`AlreadySettled`,inputs:[]},{type:`error`,name:`FailedDeployment`,inputs:[]},{type:`error`,name:`InsufficientBalance`,inputs:[{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`InvalidReferral`,inputs:[]},{type:`error`,name:`NotAnInsider`,inputs:[]},{type:`error`,name:`NotEligibleReferrer`,inputs:[]},{type:`error`,name:`NothingToClaim`,inputs:[]},{type:`error`,name:`PublicPhaseNotOpen`,inputs:[]},{type:`error`,name:`Reentrant`,inputs:[]},{type:`error`,name:`ReferralCodeTaken`,inputs:[]},{type:`error`,name:`SeriesANotEnded`,inputs:[]},{type:`error`,name:`SeriesBNotEnded`,inputs:[]},{type:`error`,name:`TimerExpired`,inputs:[]},{type:`error`,name:`TimerNotExpired`,inputs:[]},{type:`error`,name:`WrongPhase`,inputs:[]},{type:`error`,name:`ZeroDeposit`,inputs:[]}],z=[{type:`function`,name:`athPostRug`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`athPrice`,inputs:[],outputs:[{name:``,type:`uint128`,internalType:`uint128`}],stateMutability:`view`},{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`K`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`P0`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`buy`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`autoOptIn`,type:`bool`,internalType:`bool`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`buyWithShMon`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`shMonIn`,type:`uint256`,internalType:`uint256`},{name:`autoOptIn`,type:`bool`,internalType:`bool`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`claimDividends`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}],outputs:[{name:`amount`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`drip`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`earned`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`game`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`initialize`,inputs:[{name:`seed_`,type:`bytes32`,internalType:`bytes32`},{name:`game_`,type:`address`,internalType:`address`},{name:`p0`,type:`uint256`,internalType:`uint256`},{name:`k`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`lastKnownBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`lastKnownSelfBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`marketCap`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`optIn`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optOut`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optedIn`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`optedInSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`pendingRewards`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`poolBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`price`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`rewardPerTokenStored`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seed`,inputs:[],outputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],stateMutability:`view`},{type:`function`,name:`sell`,inputs:[{name:`tokens`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`shMonForTokens`,inputs:[{name:`tokens`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`tokenURI`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`tokensForDeposit`,inputs:[{name:`deposit`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`unlock`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`totalVolume`,inputs:[],outputs:[{name:``,type:`uint128`,internalType:`uint128`}],stateMutability:`view`},{type:`function`,name:`unlocked`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`userRewardPerTokenPaid`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`volume24h`,inputs:[],outputs:[{name:`total`,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`AlreadyInitialized`,inputs:[]},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]},{type:`error`,name:`InsufficientTokens`,inputs:[]},{type:`error`,name:`MustBeGame`,inputs:[]},{type:`error`,name:`PreRugpull`,inputs:[]},{type:`error`,name:`ZeroAmount`,inputs:[]}],ad=[{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`},{name:`game_`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`function`,name:`AIRDROP_RESERVE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`DEPLOYER_SHARE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`TOTAL_SUPPLY`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`T_HALF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`airdropNonce`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`claim`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`claimable`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`deployTimestamp`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`distributeProtocolFee`,inputs:[{name:`shMonAmount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`game`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`lastAirdropBlock`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`maxMintable`,inputs:[{name:`t`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`pure`},{type:`function`,name:`mintAirdrop`,inputs:[{name:`to`,type:`address`,internalType:`address`}],outputs:[{name:`amount`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`optIn`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optedIn`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`optedInSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`pendingRewards`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`remainingCeiling`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`rewardPerTokenStored`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`totalAirdropMinted`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`userRewardPerTokenPaid`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`event`,name:`AirdropMinted`,inputs:[{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`amount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Claimed`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`OptedIn`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`OptedOut`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`ProtocolFeeDistributed`,inputs:[{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`AirdropExhausted`,inputs:[]},{type:`error`,name:`AlreadyOptedIn`,inputs:[]},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]},{type:`error`,name:`NotGame`,inputs:[]},{type:`error`,name:`NothingToClaim`,inputs:[]}],od=[{type:`constructor`,inputs:[],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`assetsPerShare`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`convertToAssets`,inputs:[{name:`shares`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`convertToShares`,inputs:[{name:`assets`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`setRate`,inputs:[{name:`rateWad`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`deposit`,inputs:[{name:`assets`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`}],outputs:[{name:`shares`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`redeem`,inputs:[{name:`shares`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`},{name:`owner`,type:`address`,internalType:`address`}],outputs:[{name:`assets`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`totalAssets`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]}],B=new Map([[`token:native:name`,`Monad`],[`token:native:symbol`,`MON`]]),sd=new Map;function cd(e){sd.set(e,(sd.get(e)??0)+1)}function V(e){let t=sd.get(e)??0;t<=1?sd.delete(e):sd.set(e,t-1)}function ld(e){return e.some(e=>(sd.get(e)??0)>0)}function H(e,t){B.set(e,t),window.dispatchEvent(new CustomEvent(`live-values-updated`,{detail:new Map([[e,t]])}))}function ud(e){let t=new Map;for(let[n,r]of Object.entries(e))B.set(n,r),t.set(n,r);t.size>0&&window.dispatchEvent(new CustomEvent(`live-values-updated`,{detail:t}))}var dd=[[`#ff2d6b`,`#ff8c00`],[`#00e5ff`,`#0066ff`],[`#ffe600`,`#ff6600`],[`#00ff9d`,`#00aa66`],[`#ff00ff`,`#aa00ff`],[`#ff4444`,`#ff0000`],[`#ffffff`,`#aaaaaa`],[`#ff9900`,`#ffcc00`],[`#44ffff`,`#0099ff`],[`#ff44aa`,`#ff0066`]];function fd(e){return[...dd[parseInt(e.slice(12,14),16)%10]]}var pd=`fomonad-events`,md=1,hd=`vibecoin-cycles`,gd=`meta`,_d=null;async function vd(){return _d||new Promise((e,t)=>{let n=indexedDB.open(pd,md);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(hd)||e.createObjectStore(hd,{keyPath:`cycle`}),e.objectStoreNames.contains(gd)||e.createObjectStore(gd,{keyPath:`key`})},n.onsuccess=()=>{_d=n.result,e(n.result)},n.onerror=()=>t(n.error)})}async function yd(e){let t=await vd();return new Promise((n,r)=>{let i=t.transaction(hd,`readwrite`).objectStore(hd),a={...e,K:e.K.toString(),prizeAmount:e.prizeAmount.toString(),blockNumber:e.blockNumber.toString()},o=i.put(a);o.onsuccess=()=>n(),o.onerror=()=>r(o.error)})}async function bd(){let e=await vd();return new Promise((t,n)=>{let r=e.transaction(hd,`readwrite`);r.objectStore(hd).clear().onsuccess=()=>t(),r.onerror=()=>n(r.error)})}async function xd(e){let t=await vd();(await new Promise((e,n)=>{let r=t.transaction(gd,`readonly`).objectStore(gd).get(`gameAddress`);r.onsuccess=()=>e(r.result?.value??null),r.onerror=()=>n(r.error)}))?.toLowerCase()!==e.toLowerCase()&&(await bd(),await new Promise((n,r)=>{let i=t.transaction(gd,`readwrite`).objectStore(gd).put({key:`gameAddress`,value:e});i.onsuccess=()=>n(),i.onerror=()=>r(i.error)}))}async function Sd(){let e=await vd();return new Promise((t,n)=>{let r=e.transaction(hd,`readonly`).objectStore(hd).getAll();r.onsuccess=()=>{let e=r.result.map(e=>({...e,K:BigInt(e.K),prizeAmount:BigInt(e.prizeAmount),blockNumber:BigInt(e.blockNumber)}));e.sort((e,t)=>t.cycle-e.cycle),t(e)},r.onerror=()=>n(r.error)})}$n(`event SeriesSettled(uint256 K, address vibecoin, uint256 timerExpiry)`),$n(`event CycleSettled(address indexed winner, uint256 prizeAmount, uint256 rollover, address newVibecoin)`);var Cd=10n**18n,wd=localStorage.getItem(`fomonad-denom`)??`mon`;function Td(){return wd}function Ed(e){wd=e,localStorage.setItem(`fomonad-denom`,e),window.dispatchEvent(new CustomEvent(`denom-changed`))}var Dd=10n**18n;function Od(e){Dd=e}function kd(){return Dd}function Ad(e,t){return`${e/Cd}.${(e%Cd).toString().padStart(18,`0`).slice(0,t)}`}function jd(e,t=4){return`${Ad(e,t)} MON`}function Md(e,t=4){let n=e*Dd/10n**18n;switch(wd){case`mon`:return`≈${jd(n,t)}`;default:case`shmon`:return`${Ad(e,t)}\u00A0shMON`}}function Nd(e,t){let n=wd===`mon`?`MON`:`shMON`,r=Number(e);return r<1e6?`${(r/1e6).toFixed(4)} p${n}/\$${t}`:r<1e9?`${(r/1e6).toFixed(4)} n${n}/\$${t}`:r<0xe8d4a51000?`${(r/1e9).toFixed(4)} n${n}/\$${t}`:r<0x38d7ea4c68000?`${(r/0xe8d4a51000).toFixed(4)} μ${n}/\$${t}`:r<0xde0b6b3a7640000?`${(r/0x38d7ea4c68000).toFixed(4)} m${n}/\$${t}`:`${(r/0xde0b6b3a7640000).toFixed(6)} ${n}/\$${t}`}function Pd(e,t){let n=Number(e)/0xde0b6b3a7640000;return n>=1e6?`${(n/1e6).toFixed(2)}M \$${t}`:n>=1e3?`${(n/1e3).toFixed(2)}k \$${t}`:`${n.toFixed(2)} \$${t}`}function Fd(e){let t=Number(e)/0xde0b6b3a7640000;return t>=1e6?`${(t/1e6).toFixed(2)}M`:t>=1e3?`${(t/1e3).toFixed(2)}k`:`${t.toFixed(2)}`}function Id(e){return`${e.slice(0,6)}…${e.slice(-4)}`}function Ld(e){if(e<=0)return`00:00:00`;let t=Math.floor(e/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`}function Rd(e){if(e<=0)return`00:00:00.000`;let t=Math.floor(e/1e3),n=Math.floor(e%1e3),r=Math.floor(t/3600),i=Math.floor(t%3600/60),a=t%60;return`${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}.${String(n).padStart(3,`0`)}`}function zd(e,t){if(t==0n)return`--%`;let n=10000n*e/t,r=n/100n,i=n%100n;return r+(i==0n?``:`.`+(``+i).padStart(2,`0`))+`%`}var Bd=`fomonad-active-ref`,Vd=`fomonad-url-ref`;function Hd(e){if(!e)return`0x${`00`.repeat(32)}`;let t=new TextEncoder().encode(e);return t.length>31?`0x${`00`.repeat(32)}`:`0x${Array.from(t).map(e=>e.toString(16).padStart(2,`0`)).join(``).padEnd(64,`0`)}`}function Ud(e){try{let t=e.startsWith(`0x`)?e.slice(2):e,n=[];for(let e=0;e<t.length;e+=2){let r=parseInt(t.slice(e,e+2),16);if(r===0)break;n.push(r)}return n.length===0?null:new TextDecoder(`utf-8`,{fatal:!0}).decode(new Uint8Array(n))}catch{return null}}function Wd(e){try{let t=new TextEncoder().encode(e);return t.length===0||t.length>31?null:(new TextDecoder(`utf-8`,{fatal:!0}).decode(t),e)}catch{return null}}function Gd(){try{let e=window.location.hash,t=e.indexOf(`?`);if(t===-1)return null;let n=new URLSearchParams(e.slice(t+1)).get(`ref`);return n?Wd(n):null}catch{return null}}function Kd(){return localStorage.getItem(Bd)}function qd(e){let t=Wd(e);t&&localStorage.setItem(Bd,t)}function Jd(){localStorage.removeItem(Bd)}function Yd(){let e=Gd();e!==null&&e!==localStorage.getItem(Vd)&&(localStorage.setItem(Vd,e),localStorage.setItem(Bd,e))}function Xd(e){return Hd(e)}var Zd=class{constructor(){this.tasks=[],this.running=!1,this._cancelledThisTick=new Set}upsert(e){let t=this.tasks.findIndex(t=>t.key===e.key);t>=0?this.tasks[t]=e:this.tasks.push(e),this.running||this._loop()}prepend(e){this.tasks=this.tasks.filter(t=>t.key!==e.key),this.tasks.unshift(e),this._cancelledThisTick.delete(e.key),this.running||this._loop()}remove(e){this.tasks=this.tasks.filter(t=>t.key!==e),this._cancelledThisTick.add(e)}has(e){return this.tasks.some(t=>t.key===e)}get size(){return this.tasks.length}async _loop(){for(this.running=!0;this.tasks.length>0;){let e=Date.now(),t=this.tasks.shift();this._cancelledThisTick.delete(t.key);let n=t.updates!==void 0&&!ld(t.updates);console.log(n?`skipping task:`:`executing task:`,t.key);try{n||await t.fn()}catch(e){console.error(`[queue:${t.key}]`,e)}if(t.continuous&&!this.tasks.some(e=>e.key===t.key)&&!this._cancelledThisTick.has(t.key)&&this.tasks.push(t),this._cancelledThisTick.delete(t.key),!n){let t=Math.max(0,100-(Date.now()-e));await new Promise(e=>setTimeout(e,t))}}this.running=!1}},Qd=`0x0000000000000000000000000000000000000000`,U=new class{constructor(){this.gameState=null,this.userState=null,this.vibecoins=[],this.gameConstants=null,this.chainTimeDelta=0,this._chainId=P,this._q=new Zd,this._started=!1,this._phase=-1,this._cycle=-1n,this._currentVcAddr=``,this._vcStatic=new Map,this._vcStaticPartial=new Map,this._vcStaticQueued=new Set,this._vcHistQueued=new Set,this._vcDynamic=new Map,this._onRequestReferralCode=e=>{let{address:t}=e.detail,n=t.toLowerCase(),r=`user:${n}:referralCode`;if(B.has(r))return;let i=`referralCode:${n}`;this._q.has(i)||this._q.upsert({key:i,continuous:!1,updates:[r],fn:()=>this._taskWinnerCode(t)})},this._onRequestVcCardData=e=>{if(!I)return;let{address:t}=e.detail,n=t.toLowerCase(),r=this._vcStatic.get(n);if(!r)return;let i=BigInt(r.cycle),a=i.toString(),o=I.address.toLowerCase();B.has(`game:seriesADeposit:${a}:${o}`)||(this._q.has(`user:cardBal:${n}`)||this._q.upsert({key:`user:cardBal:${n}`,continuous:!1,updates:[`token:${n}:balance:${o}`],fn:()=>this._taskCardBalance(t)}),this._q.has(`user:cardDepA:${a}`)||this._q.upsert({key:`user:cardDepA:${a}`,continuous:!1,updates:[`game:seriesADeposit:${a}:${o}`],fn:()=>this._taskCardSeriesA(i)}),this._q.has(`user:cardDepB:${a}`)||this._q.upsert({key:`user:cardDepB:${a}`,continuous:!1,updates:[`game:seriesBDeposit:${a}:${o}`],fn:()=>this._taskCardSeriesB(i)}))}}start(){if(this._started)return;this._started=!0;let e=F[this._chainId];e&&ud({[`token:${e.shmon.toLowerCase()}:symbol`]:`shMON`,[`token:${e.fomon.toLowerCase()}:symbol`]:`foMON`}),this._q.upsert({key:`game:state`,continuous:!0,fn:()=>this._taskGameState()}),this._q.upsert({key:`game:shmonRate`,continuous:!0,updates:[`meta:shmonRate`],fn:()=>this._taskShmonRate()}),setInterval(()=>{I&&this._queueUserTasks(!1)},1e4),window.addEventListener(`request-vc-card-data`,this._onRequestVcCardData),window.addEventListener(`request-referral-code`,this._onRequestReferralCode)}async _taskCardBalance(e){let t=I;if(t)try{let n=await L(n=>n.readContract({address:e,abi:z,functionName:`balanceOf`,args:[t.address]}),this._chainId);H(`token:${e.toLowerCase()}:balance:${t.address.toLowerCase()}`,n),this._dispatch()}catch{}}async _taskCardSeriesA(e){let t=I;if(!t)return;let n=this._gameAddr();if(n)try{let r=await L(r=>r.readContract({address:n,abi:R,functionName:`seriesADeposits`,args:[e,t.address]}),this._chainId);H(`game:seriesADeposit:${e}:${t.address.toLowerCase()}`,r),this._dispatch()}catch{}}async _taskCardSeriesB(e){let t=I;if(!t)return;let n=this._gameAddr();if(n)try{let r=await L(r=>r.readContract({address:n,abi:R,functionName:`seriesBDeposits`,args:[e,t.address]}),this._chainId);H(`game:seriesBDeposit:${e}:${t.address.toLowerCase()}`,r),this._dispatch()}catch{}}enqueue(e,t){this._q.upsert({key:e,continuous:!1,fn:t})}refresh(){this._q.prepend({key:`game:state:priority`,continuous:!1,fn:()=>this._taskGameState()}),this._queueUserTasks(!0)}refreshUser(){if(!I){this.userState=null,window.dispatchEvent(new CustomEvent(`store-updated`));return}this._queueUserTasks(!0)}_dispatch(){window.dispatchEvent(new CustomEvent(`store-updated`))}_gameAddr(){return F[this._chainId]?.game??null}async _taskGameState(){let e=this._gameAddr();if(!e)return;let t=await L(t=>t.readContract({address:e,abi:R,functionName:`gameState`,args:[!1]}),this._chainId);if(!this.gameState)try{let e=await ed(this._chainId).getBlock({blockTag:`latest`}),t=Number(e.timestamp)-Date.now()/1e3;this.chainTimeDelta=t>60?t:0,H(`meta:chainTimeDelta`,this.chainTimeDelta)}catch{}let n=t.vibecoin??Qd,r=t.phase===3;this.gameState?this.gameState&&Object.assign(this.gameState,{phase:t.phase,cycle:t.cycle,phaseEndTime:t.phaseEndTime,prizePool:t.prizePool,lastBuyer:t.lastBuyer,vibecoin:n,isTimerExpired:r}):(this.gameState={phase:t.phase,cycle:t.cycle,phaseEndTime:t.phaseEndTime,totalSeriesA:0n,totalSeriesB:0n,prizePool:t.prizePool,lastBuyer:t.lastBuyer,vibecoin:n,K:0n,P0:0n,settlementTimestamp:0n,totalPublicCurveDeposited:0n,isTimerExpired:r},I&&this._queueUserTasks(!1)),ud({"game:phase":t.phase,"game:cycle":t.cycle,"game:phaseEndTime":t.phaseEndTime,"game:prizePool":t.prizePool,"game:lastBuyer":t.lastBuyer,"game:vibecoin":n.toLowerCase(),"game:isSettled":r}),(t.phase!==this._phase||t.cycle!==this._cycle)&&this._onPhaseOrCycleChange(t.phase,t.cycle,n),this._dispatch()}_onPhaseOrCycleChange(e,t,n){let r=this._phase,i=t!==this._cycle;if(this._phase=e,this._cycle=t,r===0&&this._q.remove(`game:totalSeriesA`),r===1&&(this._q.remove(`game:totalSeriesB`),this._q.remove(`game:totalSeriesB:final`)),(r===2||r===3)&&(this._q.remove(`game:totalPublicCurveDeposited`),this._currentVcAddr)){for(let e of[`supply`,`pool`,`ath`,`totalvol`,`vol24h`,`unlocked`])this._q.remove(`vc:${e}:${this._currentVcAddr}`);this._queueVcHistorical(this._currentVcAddr)}if(i&&this.gameState&&Object.assign(this.gameState,{K:0n,P0:0n,settlementTimestamp:0n,totalSeriesA:0n,totalSeriesB:0n,totalPublicCurveDeposited:0n}),e===0&&(H(`game:totalSeriesB`,0n),this._q.upsert({key:`game:totalSeriesA`,continuous:!0,updates:[`game:totalSeriesA`],fn:()=>this._taskTotalSeriesA()}),this._queueVcDiscovery(t),t>0n)){let e=(t-1n).toString();this._q.has(`game:tokensSeriesA:${e}:hist`)||(this._q.upsert({key:`game:tokensSeriesA:${e}:hist`,continuous:!1,updates:[`game:tokensSeriesA:${e}`],fn:()=>this._taskTokensSeriesAHist(t-1n)}),this._q.upsert({key:`game:tokensSeriesB:${e}:hist`,continuous:!1,updates:[`game:tokensSeriesB:${e}`],fn:()=>this._taskTokensSeriesBHist(t-1n)}))}if(e===1&&(this._q.upsert({key:`game:totalSeriesA:final`,continuous:!1,updates:[`game:totalSeriesA`],fn:()=>this._taskTotalSeriesA()}),this._q.remove(`game:totalSeriesA`),this._q.upsert({key:`game:totalSeriesB`,continuous:!0,updates:[`game:totalSeriesB`],fn:()=>this._taskTotalSeriesB()}),this._queueVcDiscovery(t)),e===2||e===3){(r===1||r===-1)&&(this._q.upsert({key:`game:totalSeriesB:final`,continuous:!1,fn:()=>this._taskTotalSeriesB()}),this._q.remove(`game:totalSeriesB`),r===-1&&!B.has(`game:totalSeriesA`)&&this._q.upsert({key:`game:totalSeriesA:final`,continuous:!1,fn:()=>this._taskTotalSeriesA()}));let i=t.toString();if(this._q.has(`game:K:${i}`)||(this._q.prepend({key:`game:K:${i}`,continuous:!1,updates:[`game:K`],fn:()=>this._taskGameK()}),this._q.prepend({key:`game:P0:${i}`,continuous:!1,updates:[`game:P0`],fn:()=>this._taskGameP0()}),this._q.prepend({key:`game:settlement:${i}`,continuous:!1,updates:[`game:settlementTimestamp`],fn:()=>this._taskSettlementTimestamp()}),this._q.prepend({key:`game:tokensSeriesA:${i}`,continuous:!1,updates:[`game:tokensSeriesA`,`game:tokensSeriesA:${i}`],fn:()=>this._taskTokensSeriesA(t)}),this._q.prepend({key:`game:tokensSeriesB:${i}`,continuous:!1,updates:[`game:tokensSeriesB`,`game:tokensSeriesB:${i}`],fn:()=>this._taskTokensSeriesB(t)})),e===2?this._q.upsert({key:`game:totalPublicCurveDeposited`,continuous:!0,updates:[`game:totalPublicCurveDeposited`],fn:()=>this._taskTotalPublicCurve()}):(this._q.has(`game:totalPublicCurve:${i}`)||this._q.upsert({key:`game:totalPublicCurve:${i}`,continuous:!1,updates:[`game:totalPublicCurveDeposited`],fn:()=>this._taskTotalPublicCurve()}),this._q.remove(`game:totalPublicCurveDeposited`)),n&&n!==Qd){let r=n.toLowerCase();this._currentVcAddr=r,this._vcStatic.has(r)||this._queueVcStatic(n,Number(t)),e===2?this._queueVcContinuous(n):this._queueVcHistorical(n)}this._queueVcDiscovery(t)}!this.gameConstants&&!this._q.has(`game:constants`)&&this._q.upsert({key:`game:constants`,continuous:!1,fn:()=>this._taskGameConstants()})}async _taskTotalSeriesA(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await L(t=>t.readContract({address:e,abi:R,functionName:`totalSeriesA`}),this._chainId);this.gameState.totalSeriesA=t,H(`game:totalSeriesA`,t),this._dispatch()}async _taskTotalSeriesB(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await L(t=>t.readContract({address:e,abi:R,functionName:`totalSeriesB`}),this._chainId);this.gameState.totalSeriesB=t,H(`game:totalSeriesB`,t),this._dispatch()}async _taskTotalPublicCurve(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await L(t=>t.readContract({address:e,abi:R,functionName:`totalPublicCurveDeposited`}),this._chainId);this.gameState.totalPublicCurveDeposited=t,H(`game:totalPublicCurveDeposited`,t),this._dispatch()}async _taskGameK(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await L(t=>t.readContract({address:e,abi:R,functionName:`K`}),this._chainId);this.gameState.K=t,H(`game:K`,t),this._dispatch()}async _taskGameP0(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await L(t=>t.readContract({address:e,abi:R,functionName:`P0`}),this._chainId);this.gameState.P0=t,H(`game:P0`,t),this._dispatch()}async _taskSettlementTimestamp(){let e=this._gameAddr();if(!e||!this.gameState)return;let t=await L(t=>t.readContract({address:e,abi:R,functionName:`settlementTimestamp`}),this._chainId);this.gameState.settlementTimestamp=t,H(`game:settlementTimestamp`,t),this._dispatch()}async _taskShmonRate(){let e=F[this._chainId];if(e)try{let t=await L(t=>t.readContract({address:e.shmon,abi:od,functionName:`convertToAssets`,args:[10n**18n]}),this._chainId);Od(t),H(`meta:shmonRate`,t)}catch{}}async _taskGameConstants(){let e=this._gameAddr();if(!e)return;let t=[`SERIES_A_DURATION`,`SERIES_A_PROTOCOL`,`SERIES_A_REFERRAL`,`SERIES_A_PRIZE`,`SERIES_B_PROTOCOL`,`SERIES_B_REFERRAL`,`SERIES_B_PRIZE`,`PUMP_PROTOCOL`,`PUMP_REFERRAL`,`PUMP_PRIZE`],n=[];for(let r of t)try{n.push(await L(t=>t.readContract({address:e,abi:R,functionName:r}),this._chainId))}catch{n.push(0n)}this.gameConstants={SERIES_A_DURATION:n[0],SERIES_A_PROTOCOL:n[1],SERIES_A_REFERRAL:n[2],SERIES_A_PRIZE:n[3],SERIES_B_PROTOCOL:n[4],SERIES_B_REFERRAL:n[5],SERIES_B_PRIZE:n[6],PUMP_PROTOCOL:n[7],PUMP_REFERRAL:n[8],PUMP_PRIZE:n[9]},ud({"game:const:seriesADuration":n[0],"game:const:seriesAProtocol":n[1],"game:const:seriesAReferral":n[2],"game:const:seriesAPrize":n[3],"game:const:seriesBProtocol":n[4],"game:const:seriesBReferral":n[5],"game:const:seriesBPrize":n[6],"game:const:pumpProtocol":n[7],"game:const:pumpReferral":n[8],"game:const:pumpPrize":n[9]}),this._dispatch()}_queueVcDiscovery(e){let t=this._gameAddr();t&&xd(t).then(async()=>{let n=await Sd();for(let r=e-1n;r>=1n;r--){let e=Number(r),i=`vc:discover:${e}`;if(!this._q.has(`cycle:winner:${r}`)&&!B.has(`game:winner:${r}`)){let e=r;this._q.upsert({key:`cycle:winner:${e}`,continuous:!1,updates:[`game:winner:${e}`],fn:()=>this._taskCycleWinner(e)}),this._q.upsert({key:`cycle:prize:${e}`,continuous:!1,updates:[`game:prize:${e}`],fn:()=>this._taskCyclePrize(e)})}if(this._q.has(i))continue;let a=n.find(t=>t.cycle===e);if(a){let t=a.vibecoinAddress.toLowerCase();this._vcStatic.has(t)||this._queueVcStatic(a.vibecoinAddress,e),this._vcDynamic.has(t)||this._queueVcHistorical(a.vibecoinAddress);continue}let o=r;this._q.upsert({key:i,continuous:!1,fn:async()=>{try{let e=await L(e=>e.readContract({address:t,abi:R,functionName:`vibecoinByCycle`,args:[o]}),this._chainId);if(!e||e===Qd)return;await yd({cycle:Number(o),vibecoinAddress:e,K:0n,winner:null,prizeAmount:0n,blockNumber:0n}),this._vcStatic.has(e.toLowerCase())||this._queueVcStatic(e,Number(o)),this._vcDynamic.has(e.toLowerCase())||this._queueVcHistorical(e)}catch{}}})}}).catch(()=>{})}_queueVcStatic(e,t){let n=e.toLowerCase();this._vcStaticQueued.has(n)||(this._vcStaticQueued.add(n),H(`token:${n}:cycle`,t),H(`vibecoins:byCycle:${t}`,e),this._q.prepend({key:`vc:static:seed:${n}`,continuous:!1,fn:()=>this._taskVcSeed(e,t)}),this._q.prepend({key:`vc:static:name:${n}`,continuous:!1,fn:()=>this._taskVcName(e,t)}),this._q.prepend({key:`vc:static:sym:${n}`,continuous:!1,fn:()=>this._taskVcSymbol(e,t)}),this._q.prepend({key:`vc:static:K:${n}`,continuous:!1,fn:()=>this._taskVcStaticK(e,t)}),this._q.prepend({key:`vc:static:P0:${n}`,continuous:!1,fn:()=>this._taskVcStaticP0(e,t)}))}_mergeVcStatic(e,t){let n={...this._vcStaticPartial.get(e)??{},...t};this._vcStaticPartial.set(e,n),n.seed!==void 0&&n.name!==void 0&&n.symbol!==void 0&&n.K!==void 0&&n.P0!==void 0&&n.cycle!==void 0&&this._vcStatic.set(e,n)}async _taskVcSeed(e,t){try{let n=await L(t=>t.readContract({address:e,abi:z,functionName:`seed`}),this._chainId),r=e.toLowerCase();this._mergeVcStatic(r,{seed:n,cycle:t});let i=fd(n);H(`token:${r}:seed`,n),H(`token:${r}:palette`,i),this._rebuildVibecoins()}catch{}}async _taskVcName(e,t){try{let n=await L(t=>t.readContract({address:e,abi:z,functionName:`name`}),this._chainId),r=e.toLowerCase();this._mergeVcStatic(r,{name:n,cycle:t}),H(`token:${r}:name`,n),this._rebuildVibecoins()}catch{}}async _taskVcSymbol(e,t){try{let n=await L(t=>t.readContract({address:e,abi:z,functionName:`symbol`}),this._chainId),r=e.toLowerCase();this._mergeVcStatic(r,{symbol:n,cycle:t}),H(`token:${r}:symbol`,n),this._rebuildVibecoins()}catch{}}async _taskVcStaticK(e,t){try{let n=await L(t=>t.readContract({address:e,abi:z,functionName:`K`}),this._chainId),r=e.toLowerCase();this._mergeVcStatic(r,{K:n,cycle:t}),H(`token:${r}:K`,n),this._rebuildVibecoins()}catch{}}async _taskVcStaticP0(e,t){try{let n=await L(t=>t.readContract({address:e,abi:z,functionName:`P0`}),this._chainId),r=e.toLowerCase();this._mergeVcStatic(r,{P0:n,cycle:t}),H(`token:${r}:P0`,n),this._rebuildVibecoins()}catch{}}_queueVcHistorical(e){let t=e.toLowerCase();this._vcHistQueued.has(t)||(this._vcHistQueued.add(t),this._q.upsert({key:`vc:hist:unlocked:${t}`,continuous:!1,fn:()=>this._taskVcUnlocked(e)}),this._q.upsert({key:`vc:hist:supply:${t}`,continuous:!1,fn:()=>this._taskVcField(e,`totalSupply`)}),this._q.upsert({key:`vc:hist:pool:${t}`,continuous:!1,fn:()=>this._taskVcField(e,`poolBalance`)}),this._q.upsert({key:`vc:hist:ath:${t}`,continuous:!1,fn:()=>this._taskVcField(e,`athPrice`)}),this._q.upsert({key:`vc:hist:athPostRug:${t}`,continuous:!1,fn:()=>this._taskVcAthPostRug(e)}),this._q.upsert({key:`vc:hist:totalvol:${t}`,continuous:!1,fn:()=>this._taskVcField(e,`totalVolume`)}),this._q.upsert({key:`vc:hist:vol24h:${t}`,continuous:!1,fn:()=>this._taskVcField(e,`volume24h`)}))}_queueVcContinuous(e){let t=e.toLowerCase();this._q.upsert({key:`vc:supply:${t}`,continuous:!0,updates:[`token:${t}:totalSupply`],fn:()=>this._taskVcField(e,`totalSupply`)}),this._q.upsert({key:`vc:pool:${t}`,continuous:!0,updates:[`token:${t}:poolBalance`],fn:()=>this._taskVcField(e,`poolBalance`)}),this._q.upsert({key:`vc:ath:${t}`,continuous:!0,updates:[`token:${t}:athPrice`],fn:()=>this._taskVcField(e,`athPrice`)}),this._q.upsert({key:`vc:totalvol:${t}`,continuous:!0,updates:[`token:${t}:totalVolume`],fn:()=>this._taskVcField(e,`totalVolume`)}),this._q.upsert({key:`vc:vol24h:${t}`,continuous:!0,updates:[`token:${t}:volume24h`],fn:()=>this._taskVcField(e,`volume24h`)}),this._q.upsert({key:`vc:unlocked:${t}`,continuous:!0,updates:[`token:${t}:unlocked`],fn:()=>this._taskVcUnlocked(e)})}async _taskVcField(e,t){try{let n=await L(n=>n.readContract({address:e,abi:z,functionName:t}),this._chainId),r=e.toLowerCase(),i=this._vcDynamic.get(r)??{};this._vcDynamic.set(r,{...i,[t]:n}),H(`token:${r}:${t}`,n),this._rebuildVibecoins()}catch{}}async _taskVcUnlocked(e){try{let t=await L(t=>t.readContract({address:e,abi:z,functionName:`unlocked`}),this._chainId),n=e.toLowerCase(),r=this._vcDynamic.get(n)??{};this._vcDynamic.set(n,{...r,unlocked:t}),H(`token:${n}:unlocked`,t),this._rebuildVibecoins(),t&&this._q.remove(`vc:unlocked:${n}`)}catch{}}async _taskVcAthPostRug(e){try{let t=await L(t=>t.readContract({address:e,abi:z,functionName:`athPostRug`}),this._chainId),n=e.toLowerCase(),r=this._vcDynamic.get(n)??{};this._vcDynamic.set(n,{...r,athPostRug:t}),H(`token:${n}:athPostRug`,t),this._rebuildVibecoins()}catch{}}_rebuildVibecoins(){let e=[],t={};for(let[n,r]of this._vcStatic.entries()){let i=this._vcDynamic.get(n);if(!i)continue;let a=fd(r.seed);t[`token:${n}:palette`]=a,e.push({address:n,seed:r.seed,name:r.name,symbol:r.symbol,cycle:r.cycle,unlocked:i.unlocked??!1,totalSupply:i.totalSupply??0n,poolBalance:i.poolBalance??0n,K:r.K,P0:r.P0,athPrice:i.athPrice??0n,athPostRug:i.athPostRug??!1,totalVolume:i.totalVolume??0n,volume24h:i.volume24h??0n,palette:a})}if(this.vibecoins=e.sort((e,t)=>t.cycle-e.cycle),ud({...t,"vibecoins:addresses":this.vibecoins.map(e=>e.address)}),I&&this._phase===0&&this._cycle>0n){let t=Number(this._cycle)-1;e.some(e=>e.cycle===t)&&!this._q.has(`user:prevVcBal`)&&this._queueUserTasks(!1)}this._dispatch()}_queueUserTasks(e){if(!I)return;let t=e?e=>this._q.prepend(e):e=>this._q.upsert(e);t({key:`user:mon`,continuous:!1,fn:()=>this._taskUserMon()}),t({key:`user:shmon`,continuous:!1,fn:()=>this._taskUserShmon()}),t({key:`user:fomonBal`,continuous:!1,fn:()=>this._taskUserFomonBal()}),t({key:`user:fomonOptedIn`,continuous:!1,fn:()=>this._taskUserFomonOptedIn()}),t({key:`user:fomonClaimable`,continuous:!1,fn:()=>this._taskUserFomonClaimable()}),t({key:`user:referralEarned`,continuous:!1,fn:()=>this._taskUserReferralEarned()}),t({key:`user:seriesADep`,continuous:!1,fn:()=>this._taskUserSeriesADeposit()}),t({key:`user:seriesBDep`,continuous:!1,fn:()=>this._taskUserSeriesBDeposit()}),t({key:`user:referralCode`,continuous:!1,fn:()=>this._taskUserReferralCode()});let n=this.gameState?.vibecoin;n&&n!==Qd&&(t({key:`user:vcBal`,continuous:!1,fn:()=>this._taskUserVcBal(n)}),t({key:`user:vcEarned`,continuous:!1,fn:()=>this._taskUserVcEarned(n)}),t({key:`user:vcOptedIn`,continuous:!1,fn:()=>this._taskUserVcOptedIn(n)}));let r=this.gameState?.phase,i=this.gameState?.cycle??0n;if(r===0&&i>0n){let e=this.vibecoins.find(e=>e.cycle===Number(i)-1);if(e){let n=e.address;t({key:`user:prevVcBal`,continuous:!1,fn:()=>this._taskUserVcBal(n)}),t({key:`user:prevVcEarned`,continuous:!1,fn:()=>this._taskUserVcEarned(n)}),t({key:`user:prevVcOptedIn`,continuous:!1,fn:()=>this._taskUserVcOptedIn(n)})}}}async _taskUserMon(){let e=I;if(e)try{let t=await L(t=>t.getBalance({address:e.address}),this._chainId),n=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),monBalance:t},H(`token:native:balance:${n}`,t),this._dispatch()}catch{}}async _taskUserShmon(){let e=I;if(!e)return;let t=F[this._chainId];if(t)try{let n=await L(n=>n.readContract({address:t.shmon,abi:od,functionName:`balanceOf`,args:[e.address]}),this._chainId),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),shmonBalance:n},H(`token:${t.shmon.toLowerCase()}:balance:${r}`,n),this._dispatch()}catch{}}async _taskUserFomonBal(){let e=I;if(!e)return;let t=F[this._chainId];if(t)try{let n=await L(n=>n.readContract({address:t.fomon,abi:ad,functionName:`balanceOf`,args:[e.address]}),this._chainId),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),fomonBalance:n},H(`token:${t.fomon.toLowerCase()}:balance:${r}`,n),this._dispatch()}catch{}}async _taskUserFomonOptedIn(){let e=I;if(!e)return;let t=F[this._chainId];if(t)try{let n=await L(n=>n.readContract({address:t.fomon,abi:ad,functionName:`optedIn`,args:[e.address]}),this._chainId),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),fomonOptedIn:n},H(`user:${r}:fomonOptedIn`,n),this._dispatch()}catch{}}async _taskUserFomonClaimable(){let e=I;if(!e)return;let t=F[this._chainId];if(t)try{let n=await L(n=>n.readContract({address:t.fomon,abi:ad,functionName:`pendingRewards`,args:[e.address]}),this._chainId),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),fomonClaimable:n},H(`user:${r}:fomonClaimable`,n),this._dispatch()}catch{}}async _taskUserReferralEarned(){let e=I;if(!e)return;let t=this._gameAddr();if(t)try{let n=await L(n=>n.readContract({address:t,abi:R,functionName:`referralEarned`,args:[e.address]}),this._chainId),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),referralEarned:n},H(`user:${r}:referralEarned`,n),this._dispatch()}catch{}}async _taskUserSeriesADeposit(){let e=I;if(!e)return;let t=this._gameAddr();if(!t)return;let n=this.gameState;if(n)try{let r=await L(r=>r.readContract({address:t,abi:R,functionName:`seriesADeposits`,args:[n.cycle,e.address]}),this._chainId),i=e.address.toLowerCase(),a=n.cycle.toString();this.userState={...this.userState??this._emptyUser(),seriesADeposit:r},ud({[`user:${i}:seriesADeposit`]:r,[`game:seriesADeposit:${a}:${i}`]:r}),this._dispatch()}catch{}}async _taskUserSeriesBDeposit(){let e=I;if(!e)return;let t=this._gameAddr();if(!t)return;let n=this.gameState;if(n)try{let r=await L(r=>r.readContract({address:t,abi:R,functionName:`seriesBDeposits`,args:[n.cycle,e.address]}),this._chainId),i=e.address.toLowerCase(),a=n.cycle.toString();this.userState={...this.userState??this._emptyUser(),seriesBDeposit:r},ud({[`user:${i}:seriesBDeposit`]:r,[`game:seriesBDeposit:${a}:${i}`]:r}),this._dispatch()}catch{}}async _taskUserReferralCode(){let e=I;if(!e)return;let t=this._gameAddr();if(t)try{let n=Ud(await L(n=>n.readContract({address:t,abi:R,functionName:`referralCodeOf`,args:[e.address]}),this._chainId)),r=e.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),referralCode:n},H(`user:${r}:referralCode`,n),this._dispatch()}catch{}}async _taskUserVcBal(e){let t=I;if(t)try{let n=await L(n=>n.readContract({address:e,abi:z,functionName:`balanceOf`,args:[t.address]}),this._chainId),r=t.address.toLowerCase();this.userState={...this.userState??this._emptyUser(),vcBalance:n},H(`token:${e.toLowerCase()}:balance:${r}`,n),this._dispatch()}catch{}}async _taskUserVcEarned(e){let t=I;if(t)try{let n=await L(n=>n.readContract({address:e,abi:z,functionName:`earned`,args:[t.address]}),this._chainId),r=t.address.toLowerCase();H(`token:${e.toLowerCase()}:dividendsClaimable:${r}`,n),this._dispatch()}catch{}}async _taskUserVcOptedIn(e){let t=I;if(t)try{let n=await L(n=>n.readContract({address:e,abi:z,functionName:`optedIn`,args:[t.address]}),this._chainId),r=t.address.toLowerCase();H(`token:${e.toLowerCase()}:optedIn:${r}`,n),this._dispatch()}catch{}}async _taskTokensSeriesA(e){let t=this._gameAddr();if(t)try{let n=await L(n=>n.readContract({address:t,abi:R,functionName:`tokensSeriesAByCycle`,args:[e]}),this._chainId);ud({"game:tokensSeriesA":n,[`game:tokensSeriesA:${e}`]:n}),this._dispatch()}catch{}}async _taskTokensSeriesB(e){let t=this._gameAddr();if(t)try{let n=await L(n=>n.readContract({address:t,abi:R,functionName:`tokensSeriesBByCycle`,args:[e]}),this._chainId);ud({"game:tokensSeriesB":n,[`game:tokensSeriesB:${e}`]:n}),this._dispatch()}catch{}}async _taskTokensSeriesAHist(e){let t=this._gameAddr();if(t)try{let n=await L(n=>n.readContract({address:t,abi:R,functionName:`tokensSeriesAByCycle`,args:[e]}),this._chainId);H(`game:tokensSeriesA:${e}`,n),this._dispatch()}catch{}}async _taskTokensSeriesBHist(e){let t=this._gameAddr();if(t)try{let n=await L(n=>n.readContract({address:t,abi:R,functionName:`tokensSeriesBByCycle`,args:[e]}),this._chainId);H(`game:tokensSeriesB:${e}`,n),this._dispatch()}catch{}}async _taskCycleWinner(e){let t=this._gameAddr();if(!t)return;let n=e.toString();try{let r=await L(n=>n.readContract({address:t,abi:R,functionName:`winnerByCycle`,args:[e]}),this._chainId),i=r===Qd?null:r;if(H(`game:winner:${n}`,i),i){let e=`cycle:winnercode:${n}`;this._q.has(e)||this._q.upsert({key:e,continuous:!1,updates:[`user:${i.toLowerCase()}:referralCode`],fn:()=>this._taskWinnerCode(i)})}this._dispatch()}catch{}}async _taskCyclePrize(e){let t=this._gameAddr();if(!t)return;let n=e.toString();try{let r=await L(n=>n.readContract({address:t,abi:R,functionName:`prizeByCycle`,args:[e]}),this._chainId);H(`game:prize:${n}`,r),this._dispatch()}catch{}}async _taskWinnerCode(e){let t=this._gameAddr();if(t)try{let n=await L(n=>n.readContract({address:t,abi:R,functionName:`referralCodeOf`,args:[e]}),this._chainId);H(`user:${e.toLowerCase()}:referralCode`,Ud(n)),this._dispatch()}catch{}}_emptyUser(){return{monBalance:0n,shmonBalance:0n,fomonBalance:0n,fomonOptedIn:!1,fomonClaimable:0n,vcBalance:0n,seriesADeposit:0n,seriesBDeposit:0n,referralEarned:0n,referralCode:null}}},$d=25,ef=5,tf=1,nf=60,rf=90,af=class extends HTMLElement{constructor(...e){super(...e),this._phosphor=null,this._rafId=0,this._subscribedKeys=[],this._subscribedVcAddrLow=``,this._marqueeX=0,this._marqueeText=`GENERATING VIBECOIN`,this._marqueeColor=`rgba(255,230,0,0.9)`,this._candles=[],this._loadingVcAddr=``,this._currentVcAddr=``,this._K=0n,this._P0=0n,this._onLiveUpdate=()=>{let e=`0x0000000000000000000000000000000000000000`,t=B.get(`game:phase`),n=B.get(`game:cycle`)??0n,r=B.get(`game:phaseEndTime`)??0n,i=B.get(`meta:chainTimeDelta`)??0,a=B.get(`game:vibecoin`)??e,o=B.get(`vibecoins:addresses`)??[],s=Date.now()/1e3+i,c=t===0&&r>0n?Number(r)-s:1/0,l=Number(B.get(`game:const:seriesADuration`)??7200n),u=t===0&&n>1n&&(r===0n||c>l/2),d=a.toLowerCase();u?(this._marqueeText=`GET RUGGED`,this._marqueeColor=`rgba(255,45,107,0.9)`):t===2&&s<Number(r)?(this._marqueeText=`PUMP ${B.get(`token:${d}:name`)??`???`}! \u2014 $${B.get(`token:${d}:symbol`)??`???`} TO THE MOON`,this._marqueeColor=`rgba(0,229,255,0.9)`):t===3||t===2&&s>=Number(r)?(this._marqueeText=`GET RUGGED`,this._marqueeColor=`rgba(255,45,107,0.9)`):(this._marqueeText=`GENERATING VIBECOIN`,this._marqueeColor=`rgba(255,230,0,0.9)`);let f=Number(n)-1,p=u?o.find(e=>B.get(`token:${e.toLowerCase()}:cycle`)===f)??o[o.length-1]??null:null,m=(u?p:a)??a,h=m.toLowerCase();if(m!==this._currentVcAddr&&h!==e){this._currentVcAddr=m,this._K=B.get(`token:${h}:K`)??0n,this._P0=B.get(`token:${h}:P0`)??0n,this._candles=[],this._resyncVcSubscriptions(h);let e=this._buf.width||Math.ceil(window.innerWidth/$d);this._startCandleLoad(m,this._K,this._P0,Math.ceil(e/ef)+2)}let g=B.get(`token:${h}:totalSupply`);if(g!==void 0&&this._candles[0]){let e=Number(this._P0+this._K*g/10n**18n),t=this._candles[0];this._candles[0]={open:t.open,close:e,high:Math.max(t.high,e),low:Math.min(t.low,e)}}}}connectedCallback(){this.style.cssText=`position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden`,this._canvas=document.createElement(`canvas`),this._canvas.style.cssText=`display:block;width:100%;height:100%`,this.appendChild(this._canvas),this._ctx=this._canvas.getContext(`2d`),this._buf=document.createElement(`canvas`),this._bCtx=this._buf.getContext(`2d`),this._bloom=document.createElement(`canvas`),this._blCtx=this._bloom.getContext(`2d`),this._ro=new ResizeObserver(()=>this._onResize()),this._ro.observe(this),this._subscribedKeys=[`game:phase`,`game:cycle`,`game:phaseEndTime`,`game:vibecoin`,`meta:chainTimeDelta`,`vibecoins:addresses`,`game:const:seriesADuration`];for(let e of this._subscribedKeys)cd(e);window.addEventListener(`live-values-updated`,this._onLiveUpdate),this._onLiveUpdate(),this._startAnimation()}disconnectedCallback(){cancelAnimationFrame(this._rafId),this._ro.disconnect(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate);for(let e of this._subscribedKeys)V(e);this._subscribedKeys=[]}_onResize(){let e=Math.round(this.offsetWidth),t=Math.round(this.offsetHeight);if(!e||!t)return;this._canvas.width=e,this._canvas.height=t,this._bloom.width=e,this._bloom.height=t;let n=Math.ceil(e/$d),r=Math.ceil(t/$d);this._buf.width=n,this._buf.height=r;let i=document.createElement(`canvas`);i.width=$d,i.height=$d;let a=i.getContext(`2d`),o=$d-4,s=Math.floor(o/3);a.fillStyle=`#000`,a.fillRect(0,0,$d,$d),a.fillStyle=`rgb(255,0,0)`,a.fillRect(2,2,s,o),a.fillStyle=`rgb(0,255,0)`,a.fillRect(2+s,2,s,o),a.fillStyle=`rgb(0,0,255)`,a.fillRect(2+s*2,2,s,o),this._phosphor=this._ctx.createPattern(i,`repeat`);let c=Math.ceil(n/ef)+2;c>this._candles.length&&this._currentVcAddr&&this._startCandleLoad(this._currentVcAddr,this._K,this._P0,c)}_resyncVcSubscriptions(e){let t=[`name`,`symbol`,`K`,`P0`,`totalSupply`].map(e=>`token:${this._subscribedVcAddrLow}:${e}`);for(let e of t){let t=this._subscribedKeys.indexOf(e);t>=0&&(V(e),this._subscribedKeys.splice(t,1))}if(e){let t=[`name`,`symbol`,`K`,`P0`,`totalSupply`].map(t=>`token:${e}:${t}`);for(let e of t)cd(e),this._subscribedKeys.push(e)}this._subscribedVcAddrLow=e}_startCandleLoad(e,t,n,r){this._loadingVcAddr=e,setTimeout(()=>{this._loadingVcAddr===e&&this._loadCandles(e,t,n,r)},3e3)}_enqueueRpc(e,t){return new Promise((n,r)=>{U.enqueue(e,async()=>{try{n(await t())}catch(e){r(e)}})})}async _loadCandles(e,t,n,r){let i=ed(P),a=10n**18n,o,s;try{let t=await this._enqueueRpc(`candle:${e}:ref`,()=>i.getBlock());o=t.number,s=Number(t.timestamp)}catch{return}if(this._loadingVcAddr!==e)return;let c=150n;try{let t=await this._enqueueRpc(`candle:${e}:probe`,()=>i.getBlock({blockNumber:o-50n})),n=s-Number(t.timestamp);n>0&&(c=BigInt(Math.round(50*nf/n)))}catch{}if(this._loadingVcAddr!==e)return;let l=[];for(let s=0;s<=r;s++){if(this._loadingVcAddr!==e)return;let r=o-BigInt(s)*c;if(r<0n){l.push(null);continue}try{let o=await this._enqueueRpc(`candle:${e}:s${s}`,()=>i.readContract({address:e,abi:z,functionName:`totalSupply`,blockNumber:r}));l.push(Number(n+t*o/a))}catch{l.push(null)}}if(this._loadingVcAddr===e)for(let e=0;e<r;e++){let t=l[e],n=l[e+1];t!==null&&n!==null&&(this._candles[e]={close:t,open:n,high:Math.max(t,n),low:Math.min(t,n)})}}_startAnimation(){let e=performance.now(),t=n=>{let r=(n-e)/1e3;e=n,this._marqueeX-=rf*r,this._draw(),this._rafId=requestAnimationFrame(t)};this._rafId=requestAnimationFrame(t)}_draw(){let e=this._canvas.width,t=this._canvas.height,n=this._buf.width,r=this._buf.height;if(!e||!t||!n||!r)return;let i=this._bCtx;i.fillStyle=`rgb(6,6,8)`,i.fillRect(0,0,n,r),this._drawCandlesBuf(i,n,r),this._drawMarqueeBuf(i,n,r);let a=n*$d,o=r*$d,s=this._ctx;s.imageSmoothingEnabled=!1,s.drawImage(this._buf,0,0,a,o),this._phosphor&&(s.globalCompositeOperation=`multiply`,s.fillStyle=this._phosphor,s.fillRect(0,0,a,o),s.globalCompositeOperation=`source-over`);let c=this._blCtx;c.clearRect(0,0,e,t),c.filter=`blur(5px)`,c.drawImage(this._canvas,0,0),c.filter=`none`,s.globalCompositeOperation=`screen`,s.globalAlpha=.35,s.drawImage(this._bloom,0,0),s.globalAlpha=1,s.globalCompositeOperation=`source-over`}_drawCandlesBuf(e,t,n){let r=this._candles.filter(e=>e!==null);if(r.length<2)return;let i=1/0,a=-1/0;for(let e of r)e.low<i&&(i=e.low),e.high>a&&(a=e.high);if(a===i)return;let o=Math.round(n*.1),s=Math.round(n*.1),c=n-o-s,l=e=>n-s-Math.round((e-i)/(a-i)*c);for(let n=0;n<r.length;n++){let i=r[n],a=t-(n+1)*ef;if(a+ef<0)break;e.fillStyle=i.close>=i.open?`rgba(0,229,255,0.2)`:`rgba(255,45,107,0.2)`;let o=a+Math.floor((ef-tf)/2),s=l(i.high),c=l(i.low);e.fillRect(o,s,tf,Math.max(1,c-s));let u=l(Math.max(i.open,i.close)),d=l(Math.min(i.open,i.close));e.fillRect(a,u,ef,Math.max(1,d-u))}}_drawMarqueeBuf(e,t,n){let r=Math.round(n*.8);e.save(),e.font=`${r}px "Bebas Neue", sans-serif`,e.fillStyle=this._marqueeColor,e.textBaseline=`middle`;let i=this._marqueeText+` — `,a=e.measureText(i).width;if(a<1){e.restore();return}let o=(this._marqueeX/$d%a-a)%a;for(;o<t+a;)e.fillText(i,o,n/2),o+=a;e.restore()}};customElements.get(`app-background`)||customElements.define(`app-background`,af);var of=globalThis,sf=of.ShadowRoot&&(of.ShadyCSS===void 0||of.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,cf=Symbol(),lf=new WeakMap,uf=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==cf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(sf&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=lf.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&lf.set(t,e))}return e}toString(){return this.cssText}},df=e=>new uf(typeof e==`string`?e:e+``,void 0,cf),W=(e,...t)=>new uf(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,cf),ff=(e,t)=>{if(sf)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=of.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},pf=sf?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return df(t)})(e):e,{is:mf,defineProperty:hf,getOwnPropertyDescriptor:gf,getOwnPropertyNames:_f,getOwnPropertySymbols:vf,getPrototypeOf:yf}=Object,bf=globalThis,xf=bf.trustedTypes,Sf=xf?xf.emptyScript:``,Cf=bf.reactiveElementPolyfillSupport,wf=(e,t)=>e,Tf={toAttribute(e,t){switch(t){case Boolean:e=e?Sf:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ef=(e,t)=>!mf(e,t),Df={attribute:!0,type:String,converter:Tf,reflect:!1,useDefault:!1,hasChanged:Ef};Symbol.metadata??=Symbol(`metadata`),bf.litPropertyMetadata??=new WeakMap;var Of=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Df){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&hf(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=gf(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Df}static _$Ei(){if(this.hasOwnProperty(wf(`elementProperties`)))return;let e=yf(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(wf(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wf(`properties`))){let e=this.properties,t=[..._f(e),...vf(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(pf(e))}else e!==void 0&&t.push(pf(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ff(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Tf:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Tf:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Ef)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Of.elementStyles=[],Of.shadowRootOptions={mode:`open`},Of[wf(`elementProperties`)]=new Map,Of[wf(`finalized`)]=new Map,Cf?.({ReactiveElement:Of}),(bf.reactiveElementVersions??=[]).push(`2.1.2`);var kf=globalThis,Af=e=>e,jf=kf.trustedTypes,Mf=jf?jf.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Nf=`$lit$`,Pf=`lit$${Math.random().toFixed(9).slice(2)}$`,Ff=`?`+Pf,If=`<${Ff}>`,Lf=document,Rf=()=>Lf.createComment(``),zf=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Bf=Array.isArray,Vf=e=>Bf(e)||typeof e?.[Symbol.iterator]==`function`,Hf=`[ 	
\f\r]`,Uf=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wf=/-->/g,Gf=/>/g,Kf=RegExp(`>|${Hf}(?:([^\\s"'>=/]+)(${Hf}*=${Hf}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),qf=/'/g,Jf=/"/g,Yf=/^(?:script|style|textarea|title)$/i,Xf=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),G=Xf(1),Zf=Xf(2),Qf=Symbol.for(`lit-noChange`),K=Symbol.for(`lit-nothing`),$f=new WeakMap,ep=Lf.createTreeWalker(Lf,129);function tp(e,t){if(!Bf(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Mf===void 0?t:Mf.createHTML(t)}var np=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Uf;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Uf?c[1]===`!--`?o=Wf:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Kf):(Yf.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Kf):o=Gf:o===Kf?c[0]===`>`?(o=i??Uf,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Kf:c[3]===`"`?Jf:qf):o===Jf||o===qf?o=Kf:o===Wf||o===Gf?o=Uf:(o=Kf,i=void 0);let d=o===Kf&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Uf?n+If:l>=0?(r.push(s),n.slice(0,l)+Nf+n.slice(l)+Pf+d):n+Pf+(l===-2?t:d)}return[tp(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},rp=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=np(t,n);if(this.el=e.createElement(l,r),ep.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ep.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Nf)){let t=u[o++],n=i.getAttribute(e).split(Pf),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?cp:r[1]===`?`?lp:r[1]===`@`?up:sp}),i.removeAttribute(e)}else e.startsWith(Pf)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Yf.test(i.tagName)){let e=i.textContent.split(Pf),t=e.length-1;if(t>0){i.textContent=jf?jf.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Rf()),ep.nextNode(),c.push({type:2,index:++a});i.append(e[t],Rf())}}}else if(i.nodeType===8)if(i.data===Ff)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Pf,e+1))!==-1;)c.push({type:7,index:a}),e+=Pf.length-1}a++}}static createElement(e,t){let n=Lf.createElement(`template`);return n.innerHTML=e,n}};function ip(e,t,n=e,r){if(t===Qf)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=zf(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ip(e,i._$AS(e,t.values),i,r)),t}var ap=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Lf).importNode(t,!0);ep.currentNode=r;let i=ep.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new op(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new dp(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ep.nextNode(),a++)}return ep.currentNode=Lf,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},op=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ip(this,e,t),zf(e)?e===K||e==null||e===``?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==Qf&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Vf(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&zf(this._$AH)?this._$AA.nextSibling.data=e:this.T(Lf.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=rp.createElement(tp(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ap(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=$f.get(e.strings);return t===void 0&&$f.set(e.strings,t=new rp(e)),t}k(t){Bf(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Rf()),this.O(Rf()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Af(e).nextSibling;Af(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},sp=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=K}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ip(this,e,t,0),a=!zf(e)||e!==this._$AH&&e!==Qf,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ip(this,r[n+o],t,o),s===Qf&&(s=this._$AH[o]),a||=!zf(s)||s!==this._$AH[o],s===K?e=K:e!==K&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},cp=class extends sp{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}},lp=class extends sp{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}},up=class extends sp{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ip(this,e,t,0)??K)===Qf)return;let n=this._$AH,r=e===K&&n!==K||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==K&&(n===K||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},dp=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ip(this,e)}},fp=kf.litHtmlPolyfillSupport;fp?.(rp,op),(kf.litHtmlVersions??=[]).push(`3.3.2`);var pp=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new op(t.insertBefore(Rf(),e),e,void 0,n??{})}return i._$AI(e),i},mp=globalThis,q=class extends Of{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Qf}};q._$litElement$=!0,q.finalized=!0,mp.litElementHydrateSupport?.({LitElement:q});var hp=mp.litElementPolyfillSupport;hp?.({LitElement:q}),(mp.litElementVersions??=[]).push(`4.2.2`);var J=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},gp={attribute:!0,type:String,converter:Tf,reflect:!1,hasChanged:Ef},_p=(e=gp,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function Y(e){return(t,n)=>typeof n==`object`?_p(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function X(e){return Y({...e,state:!0,attribute:!1})}function Z(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var vp=[...R.filter(e=>e.type===`error`),...z.filter(e=>e.type===`error`),...ad.filter(e=>e.type===`error`)];function yp(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.data==`string`&&/^0x[0-9a-fA-F]{8,}/.test(t.data)?t.data:t.cause?yp(t.cause):null}var bp=`0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef`,xp=`0x0000000000000000000000000000000000000000`;function Sp(e,t){window.dispatchEvent(new CustomEvent(`tx-confirm-show`,{detail:{hash:e,action:t}}))}function Cp(e){let t=e,n=null,r=yp(e);if(r)try{n=oe({abi:vp,data:r}).errorName}catch{}let i=typeof t?.shortMessage==`string`&&t.shortMessage||typeof t?.message==`string`&&t.message.split(`
`)[0]||String(e),a=typeof t?.message==`string`&&t.message||String(e),o=n||typeof t?.name==`string`&&t.name!==`Error`&&t.name||`ERROR`;window.dispatchEvent(new CustomEvent(`app-error-show`,{detail:{short:i,full:a,name:o}}))}var wp=class extends q{constructor(...e){super(...e),this.open=!1,this.hash=null,this.action=``,this.transfers=null,this.errorMsg=``,this.errorFull=``,this.errorName=``,this._onError=e=>{this.errorMsg=e.detail.short,this.errorFull=e.detail.full,this.errorName=e.detail.name,this.hash=null,this.open=!0},this._onShow=e=>{this.hash=e.detail.hash,this.action=e.detail.action,this.transfers=null,this.open=!0,this._fetchTransfers(e.detail.hash)}}connectedCallback(){super.connectedCallback(),window.addEventListener(`tx-confirm-show`,this._onShow),window.addEventListener(`app-error-show`,this._onError)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`tx-confirm-show`,this._onShow),window.removeEventListener(`app-error-show`,this._onError)}async _fetchTransfers(e){let{connectedWallet:t}=await Zt(async()=>{let{connectedWallet:e}=await Promise.resolve().then(()=>Bu);return{connectedWallet:e}},void 0,import.meta.url);if(!t){this.transfers=[];return}let n=F[P],r=ed(P),i=t.address.slice(2).toLowerCase(),a;for(let t=0;t<20;t++){try{if(a=await r.getTransactionReceipt({hash:e}),a)break}catch{}await new Promise(e=>setTimeout(e,800))}if(!a){this.transfers=[];return}U.refresh(),U.refreshUser(),setTimeout(()=>{U.refresh(),U.refreshUser()},1500);let o=a.logs.filter(e=>e.topics[0]?.toLowerCase()===bp&&e.topics[2]?.slice(-40).toLowerCase()===i);if(o.length===0){this.transfers=[];return}let s=[];for(let e of o){let t=e.address,i=`0x`+(e.topics[1]??`0x`).slice(-40),a=BigInt(e.data),o;if(t.toLowerCase()===n.fomon.toLowerCase())o=`foMON`;else if(t.toLowerCase()===n.shmon.toLowerCase())o=`shMON`;else{let e=U.vibecoins.find(e=>e.address.toLowerCase()===t.toLowerCase());if(e)o=e.symbol;else try{o=await r.readContract({address:t,abi:z,functionName:`symbol`})}catch{o=t.slice(0,6)+`...`}}let c=i.toLowerCase()===xp&&t.toLowerCase()===n.fomon.toLowerCase();s.push({symbol:o,amount:a,isAirdrop:c})}this.transfers=s}_close(){this.open=!1}_breakPascal(e){return e.replace(/([a-z])([A-Z])/g,`$1​$2`)}async _copy(){this.hash&&await navigator.clipboard.writeText(this.hash)}static{this.styles=W`
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
  `}render(){if(!this.open)return G``;if(!this.hash)return G`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog error">
          <button class="close" @click=${this._close}>×</button>
          <div class="err-icon">✕&nbsp;${this._breakPascal(this.errorName)}</div>
          <div class="err-msg">${this.errorMsg}</div>
          ${this.errorFull&&this.errorFull!==this.errorMsg?G`
            <div class="err-detail">${this.errorFull}</div>
          `:``}
        </div>
      </div>
    `;let e=F[P],t=this.hash.slice(0,10)+`…`+this.hash.slice(-6),n=e.explorer?`${e.explorer}/tx/${this.hash}`:null;return G`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog">
          <button class="close" @click=${this._close}>×</button>
          <div class="check">${this.transfers===null?G`<span class="spinner" style="display:inline-block;vertical-align:middle;margin-right:6px"></span>PENDING…`:`✓ CONFIRMED`}</div>
          <div class="action">${this.action}</div>

          <div class="hash-row">
            <span class="hash">${t}</span>
            <button class="copy-btn" @click=${this._copy}>copy</button>
            ${n?G`<a class="explorer-link" href=${n} target="_blank">view ↗</a>`:``}
          </div>

          ${this.transfers===null||this.transfers.length>0?G`
            <hr class="divider"/>
            <div class="transfers-title">token transfers</div>
            ${this.transfers===null?G`<div class="loading"><div class="spinner"></div>awaiting confirmation…</div>`:this.transfers.map(e=>G`
                <div class="transfer">
                  <span class="plus">+</span>
                  <span class="t-amount">${Fd(e.amount)}</span>
                  <span class="t-symbol">${e.symbol}</span>
                  ${e.isAirdrop?G`<span class="airdrop-badge">airdrop</span>`:``}
                </div>
              `)}
          `:``}
        </div>
      </div>
    `}};Z([X()],wp.prototype,`open`,void 0),Z([X()],wp.prototype,`hash`,void 0),Z([X()],wp.prototype,`action`,void 0),Z([X()],wp.prototype,`transfers`,void 0),Z([X()],wp.prototype,`errorMsg`,void 0),Z([X()],wp.prototype,`errorFull`,void 0),Z([X()],wp.prototype,`errorName`,void 0),wp=Z([J(`tx-confirm-dialog`)],wp);var Tp=10n**18n,Ep=class extends q{constructor(...e){super(...e),this._subscribedKeys=new Set,this._onLiveUpdate=e=>{[...this._subscribedKeys].some(t=>e.detail.has(t))&&this.requestUpdate()},this._onDenomChanged=()=>this.requestUpdate()}static{this.styles=W`
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
  `}get spin(){return G`<span class="spin"></span>`}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),window.addEventListener(`denom-changed`,this._onDenomChanged),this._syncSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),window.removeEventListener(`denom-changed`,this._onDenomChanged);for(let e of this._subscribedKeys)V(e);this._subscribedKeys.clear()}updated(e){super.updated(e),this._syncSubscriptions()}_syncSubscriptions(){let e=new Set(this.liveKeys().filter(Boolean));for(let t of this._subscribedKeys)e.has(t)||(V(t),this._subscribedKeys.delete(t));for(let t of e)this._subscribedKeys.has(t)||(cd(t),this._subscribedKeys.add(t))}val(e){return B.get(e)}loaded(...e){return e.every(e=>B.has(e))}},Dp=class extends Ep{constructor(...e){super(...e),this.key=``,this.numerator=1,this.denominator=1}_tokenPrefix(){let e=this.key.match(/^token:(0x[a-fA-F0-9]+|native)/);return e?`token:${e[1]}`:null}liveKeys(){let e=this._tokenPrefix(),t=`token:${F[P].shmon.toLowerCase()}`,n=e??t,r=[this.key,`meta:shmonRate`];return e&&r.push(`${e}:symbol`),n!==t&&n!==`token:native`&&r.push(`${n}:K`,`${n}:P0`,`${n}:totalSupply`),r}render(){if(!this.key)return G`${this.spin}`;let e=`token:${F[P].shmon.toLowerCase()}`,t=this.key.endsWith(`:poolBalance`)?e:this._tokenPrefix()??e,n=Td(),r=n===`mon`?`token:native`:e,i=this.val(`${r}:symbol`)??(n===`mon`?`MON`:`shMON`);if(!this.loaded(this.key))return G`${this.spin} ${i}`;let a=e=>this.numerator!==1||this.denominator!==1?e*BigInt(this.numerator)/BigInt(this.denominator):e,o;if(t===`token:native`){let e=kd();o=e>0n?a(this.val(this.key)??0n)*Tp/e:0n}else if(t===e)o=a(this.val(this.key)??0n);else{let e=this.val(`${t}:K`)??0n;o=((this.val(`${t}:P0`)??0n)+e*(this.val(`${t}:totalSupply`)??0n)/Tp)*a(this.val(this.key)??0n)/Tp}let s=t===r?``:`≈`;return n===`mon`?G`${s}${Pd(o*kd()/Tp,i)}`:G`${s}${Pd(o,i)}`}};Z([Y()],Dp.prototype,`key`,void 0),Z([Y({type:Number})],Dp.prototype,`numerator`,void 0),Z([Y({type:Number})],Dp.prototype,`denominator`,void 0),Dp=Z([J(`live-valuation`)],Dp);var Op=class extends Ep{constructor(...e){super(...e),this.valueKey=``}_symbolKey(){return this.valueKey.replace(/:(?!0x|native).*$/,`:symbol`)}liveKeys(){return[this.valueKey,this._symbolKey()]}render(){let e=this._symbolKey(),t=this.val(e);return!this.valueKey||!this.loaded(this.valueKey,e)?G`${this.spin}${t?G` $${t}`:``}`:G`${Pd(this.val(this.valueKey)??0n,t??`???`)}`}};Z([Y({attribute:`value-key`})],Op.prototype,`valueKey`,void 0),Op=Z([J(`live-token-amount`)],Op);var kp=class extends Ep{constructor(...e){super(...e),this.valueKey=``}_symbolKey(){return this.valueKey.replace(/:(?!0x|native).*$/,`:symbol`)}liveKeys(){return[this.valueKey,this._symbolKey(),`meta:shmonRate`]}render(){let e=this._symbolKey(),t=this.val(e),n=Td()===`mon`?`MON`:`shMON`;return!this.valueKey||!this.loaded(this.valueKey,e)?G`${this.spin} ${n}${t?G`/$${t}`:``}`:G`${Nd(this.val(this.valueKey)??0n,t??`???`)}`}};Z([Y({attribute:`value-key`})],kp.prototype,`valueKey`,void 0),kp=Z([J(`live-token-price`)],kp);var Ap=class extends Ep{constructor(...e){super(...e),this.numKey=``,this.demKey=``}liveKeys(){return[this.numKey,this.demKey]}render(){return!this.numKey||!this.demKey||!this.loaded(this.numKey,this.demKey)?G`${this.spin}%`:G`${zd(this.val(this.numKey)??0n,this.val(this.demKey)??0n)}`}};Z([Y({attribute:`num-key`})],Ap.prototype,`numKey`,void 0),Z([Y({attribute:`dem-key`})],Ap.prototype,`demKey`,void 0),Ap=Z([J(`live-percent`)],Ap);var jp=class extends Ep{constructor(...e){super(...e),this.key=``,this.full=!1}liveKeys(){return[this.key]}render(){if(!this.key||!this.loaded(this.key))return G`0x${this.spin}…${this.spin}`;let e=this.val(this.key)??``,t=this.full?e:Id(e),n=F[P].explorer;return n?G`<a href="${n}/address/${e}" target="_blank" rel="noopener noreferrer">${t}</a>`:G`${t}`}};Z([Y()],jp.prototype,`key`,void 0),Z([Y({type:Boolean})],jp.prototype,`full`,void 0),jp=Z([J(`live-address`)],jp);var Mp=class extends Ep{constructor(...e){super(...e),this.key=``,this.fallback=`--`}liveKeys(){return[this.key]}render(){return!this.key||!this.loaded(this.key)?G`${this.spin}`:G`${this.val(this.key)??this.fallback}`}};Z([Y()],Mp.prototype,`key`,void 0),Z([Y()],Mp.prototype,`fallback`,void 0),Mp=Z([J(`live-string`)],Mp);var Np=class extends Ep{constructor(...e){super(...e),this.key=``,this.milliseconds=!1,this.warningMs=300*1e3,this._interval=null}static{this.styles=[Ep.styles,W`
      :host(.warning) {
        color: #ff2d6b;
        text-shadow: 0 0 20px #ff2d6b;
        animation: lc-pulse 0.8s ease-in-out infinite;
      }
      @keyframes lc-pulse {
        0%, 100% { opacity: 1; text-shadow: 0 0 24px #ff2d6b; }
        50% { opacity: 0.7; text-shadow: 0 0 8px #ff2d6b; }
      }
    `]}liveKeys(){return[this.key]}connectedCallback(){super.connectedCallback();let e=this.milliseconds?50:1e3;this._interval=setInterval(()=>this.requestUpdate(),e)}disconnectedCallback(){super.disconnectedCallback(),this._interval!==null&&(clearInterval(this._interval),this._interval=null)}render(){if(!this.key||!this.loaded(this.key)){this.classList.remove(`warning`);let e=this.spin;return this.milliseconds?G`${e}:${e}:${e}.${e}`:G`${e}:${e}:${e}`}let e=Number(this.val(this.key)??0n)*1e3-Date.now();return this.classList.toggle(`warning`,e>0&&e<=this.warningMs),G`${(this.milliseconds?Rd:Ld)(e)}`}};Z([Y()],Np.prototype,`key`,void 0),Z([Y({type:Boolean})],Np.prototype,`milliseconds`,void 0),Z([Y({type:Number,attribute:`warning-ms`})],Np.prototype,`warningMs`,void 0),Np=Z([J(`live-countdown`)],Np);var Pp=class extends Ep{constructor(...e){super(...e),this.prefix=``}liveKeys(){return this.prefix?[`${this.prefix}:K`,`${this.prefix}:P0`,`${this.prefix}:totalSupply`,`meta:shmonRate`]:[]}render(){let e=Td(),t=e===`mon`?`MON`:`shMON`;if(!this.prefix||!this.loaded(`${this.prefix}:K`,`${this.prefix}:P0`,`${this.prefix}:totalSupply`))return G`${this.spin} ${t}`;let n=this.val(`${this.prefix}:K`)??0n,r=this.val(`${this.prefix}:P0`)??0n,i=this.val(`${this.prefix}:totalSupply`)??0n,a=(r+n*i/Tp)*i/Tp;if(e===`mon`){let e=kd();return G`≈${Pd(e>0n?a*e/Tp:0n,`MON`)}`}return G`≈${Pd(a,`shMON`)}`}};Z([Y()],Pp.prototype,`prefix`,void 0),Pp=Z([J(`live-bonding-mcap`)],Pp);var Fp=class extends Ep{constructor(...e){super(...e),this.prefix=``}liveKeys(){return this.prefix?[`${this.prefix}:K`,`${this.prefix}:P0`,`${this.prefix}:totalSupply`,`${this.prefix}:symbol`]:[]}render(){let e=this.val(`${this.prefix}:symbol`);if(!this.prefix||!this.loaded(`${this.prefix}:K`,`${this.prefix}:P0`,`${this.prefix}:totalSupply`))return G`${this.spin}${e?G` shMON/$${e}`:``}`;let t=this.val(`${this.prefix}:K`)??0n,n=(this.val(`${this.prefix}:P0`)??0n)+t*(this.val(`${this.prefix}:totalSupply`)??0n)/Tp;return G`${(Number(n)/0xde0b6b3a7640000).toFixed(9)} shMON/$${e??`?`}`}};Z([Y()],Fp.prototype,`prefix`,void 0),Fp=Z([J(`live-bonding-price`)],Fp);var Ip=class extends Ep{constructor(...e){super(...e),this.allocKey=``,this.depositKey=``,this.totalKey=``,this.symbolKey=``}liveKeys(){return[this.allocKey,this.depositKey,this.totalKey,this.symbolKey]}render(){let e=this.val(this.symbolKey);if(!this.allocKey||!this.depositKey||!this.totalKey||!this.loaded(this.allocKey,this.depositKey,this.totalKey))return G`${this.spin}${e?G` $${e}`:``}`;let t=this.val(this.allocKey)??0n,n=this.val(this.depositKey)??0n,r=this.val(this.totalKey)??0n;return r===0n||t===0n?G`—`:G`${Pd(t*n/r,e??`?`)}`}};Z([Y({attribute:`alloc-key`})],Ip.prototype,`allocKey`,void 0),Z([Y({attribute:`deposit-key`})],Ip.prototype,`depositKey`,void 0),Z([Y({attribute:`total-key`})],Ip.prototype,`totalKey`,void 0),Z([Y({attribute:`symbol-key`})],Ip.prototype,`symbolKey`,void 0),Ip=Z([J(`live-series-tokens`)],Ip);var Lp=`fomonad-fomon-visited`,Q=class extends q{constructor(...e){super(...e),this.open=!1,this.providerOpen=!1,this.referralCode=``,this.activeRefInput=``,this.registerPending=!1,this.claimPending=!1,this.confirmReg=!1,this.regEligError=!1,this.copiedRef=!1,this.copied=!1,this.denomPref=Td(),this._wrongNetworkClicks=0,this._subscribedKeys=[],this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&this.requestUpdate()},this._onDenomChanged=()=>{this.denomPref=Td(),this.requestUpdate()},this._onWalletChanged=()=>{I?.chainId===10143&&(this._wrongNetworkClicks=0),this._resyncKeys(),this.requestUpdate()},this._onDocClick=e=>{e.composedPath().includes(this)||(this.open=!1,this.providerOpen=!1)}}static{this.styles=W`
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
  `}connectedCallback(){super.connectedCallback(),Hu.addEventListener(`wallet-changed`,this._onWalletChanged),window.addEventListener(`live-values-updated`,this._onLiveUpdate),window.addEventListener(`denom-changed`,this._onDenomChanged),document.addEventListener(`click`,this._onDocClick),this._resyncKeys()}disconnectedCallback(){super.disconnectedCallback(),Hu.removeEventListener(`wallet-changed`,this._onWalletChanged),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),window.removeEventListener(`denom-changed`,this._onDenomChanged),document.removeEventListener(`click`,this._onDocClick);for(let e of this._subscribedKeys)V(e);this._subscribedKeys=[]}_resyncKeys(){for(let e of this._subscribedKeys)V(e);let e=I?.address.toLowerCase()??``,t=F[10143]?.fomon?.toLowerCase()??``;this._subscribedKeys=e?[`token:${t}:balance:${e}`,`user:${e}:fomonOptedIn`,`user:${e}:fomonClaimable`,`user:${e}:referralCode`,`user:${e}:referralEarned`]:[];for(let e of this._subscribedKeys)cd(e)}async _connect(e){await Ku(e),Ju(e.info.rdns),await id(P),this.providerOpen=!1,this.requestUpdate()}_disconnect(){qu(),Yu(),this.open=!1}_showNotifDot(e,t){if((B.get(`user:${e}:fomonClaimable`)??0n)>0n)return!0;let n=B.get(`token:${t}:balance:${e}`)??0n,r=localStorage.getItem(Lp);return n>0n&&!r}async _copyAddress(){I&&(await navigator.clipboard.writeText(I.address),this.copied=!0,setTimeout(()=>{this.copied=!1},1500))}async _claimFoMon(){let e=F[P],t=rd();if(!(!t||!I)){this.claimPending=!0;try{let n=await t.writeContract({address:e.fomon,abi:ad,functionName:`claim`,account:I.address,chain:t.chain});U.refreshUser(),Sp(n,`Claimed foMON dividends`)}catch(e){Cp(e)}finally{this.claimPending=!1}}}async _optIn(){let e=F[P],t=rd();if(!(!t||!I))try{let n=await t.writeContract({address:e.fomon,abi:ad,functionName:`optIn`,account:I.address,chain:t.chain});U.refreshUser(),Sp(n,`Opted in to foMON dividends`)}catch(e){Cp(e)}}async _checkEligAndConfirm(){if(!this.referralCode||!I)return;let e=F[P],t=ed();try{await t.simulateContract({address:e.game,abi:R,functionName:`registerReferral`,args:[Hd(this.referralCode)],account:I.address}),this.regEligError=!1,this.confirmReg=!0}catch{this.regEligError=!0}}async _registerReferral(){if(!this.referralCode||!this.confirmReg)return;let e=F[P],t=rd();if(!(!t||!I)){this.registerPending=!0,this.confirmReg=!1;try{let n=Hd(this.referralCode),r=await t.writeContract({address:e.game,abi:R,functionName:`registerReferral`,args:[n],account:I.address,chain:t.chain}),i=this.referralCode;this.referralCode=``,Sp(r,`Registered referral code "${i}"`)}catch(e){Cp(e)}finally{this.registerPending=!1}}}async _copyRefUrl(e){await navigator.clipboard.writeText(`https://fomon.rip/${e}`),this.copiedRef=!0,setTimeout(()=>{this.copiedRef=!1},1500)}_setDenom(e){Ed(e),this.denomPref=e}render(){if(!I){let e=Uu;return e.length===0?G`<button class="connect-btn" style="cursor:default;opacity:0.4">NO WALLET</button>`:e.length===1?G`
          <button class="connect-btn" @click=${()=>this._connect(e[0])}>
            ${e[0].info.icon?G`<img src=${e[0].info.icon} alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:6px;border-radius:2px" />`:``}
            CONNECT ${e[0].info.name.toUpperCase()}
          </button>
        `:G`
        <div style="position:relative">
          <button class="connect-btn" @click=${()=>{this.providerOpen=!this.providerOpen}}>
            CONNECT WALLET&nbsp;▾
          </button>
          ${this.providerOpen?G`
            <div class="dropdown" style="min-width:220px;padding:12px 16px">
              <div class="section-label">SELECT WALLET</div>
              ${e.map(e=>G`
                <button class="provider-item" @click=${()=>this._connect(e)}>
                  ${e.info.icon?G`<img src=${e.info.icon} alt="" />`:``}
                  ${e.info.name}
                </button>
              `)}
            </div>
          `:``}
        </div>
      `}if(I.chainId!==10143)return G`
        <button class="connect-btn" style="background:#ff2d6b22;border-color:#ff2d6b;color:#ff2d6b" @click=${()=>{this._wrongNetworkClicks++,this._wrongNetworkClicks>=2?(qu(),Yu(),this._wrongNetworkClicks=0):id(P)}}>${`SWITCH TO ${F[10143]?.name?.toUpperCase()??`CORRECT NETWORK`}`}</button>
      `;let e=I.address.toLowerCase(),t=F[P],n=t?.shmon?.toLowerCase()??``,r=t?.fomon?.toLowerCase()??``,i=B.get(`user:${e}:fomonOptedIn`)??!1,a=B.get(`user:${e}:fomonClaimable`)??0n,o=B.get(`user:${e}:referralCode`)??null,s=B.get(`user:${e}:referralEarned`)??0n,c=this._showNotifDot(e,r);return G`
      <div style="position:relative">
        <button
          class="address-btn ${this.open?`active`:``}"
          @click=${()=>{this.open=!this.open,this.open&&localStorage.setItem(Lp,`1`)}}
        >
          ${c?G`<span class="notif-dot"></span>`:``}
          ${I.icon?G`<img src=${I.icon} alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:4px;border-radius:2px" />`:``}
          ${this.copied?G`<span class="copied-flash">COPIED!</span>`:G`<span>${Id(I.address)}</span>`}
          <span style="color:#505060;font-size:10px">▾</span>
        </button>

        ${this.open?G`
          <div class="dropdown">

            <!-- balances -->
            <div class="row">
              <span class="lbl">MON</span>
              <span class="val"><live-token-amount value-key="token:native:balance:${e}"></live-token-amount></span>
            </div>
            <div class="row">
              <span class="lbl">shMON${t.shmonUrl?G`&nbsp;<a href="${t.shmonUrl}" target="_blank" rel="noopener" title="redeem shMON for MON">Redeem ↗</a>`:``}</span>
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
            ${i?G`
              <div class="hint" style="text-align:right;margin-top:-2px">Earning shMON dividends</div>
            `:G`
              <div class="row" style="justify-content:flex-end">
                <button class="action-btn" @click=${this._optIn}>OPT IN</button>
              </div>
            `}

            ${a>0n?G`
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
                  placeholder=${Kd()??`enter code to use`}
                  .value=${this.activeRefInput}
                  @input=${e=>{this.activeRefInput=e.target.value}}
                />
                <button
                  class="action-btn"
                  @click=${()=>{this.activeRefInput&&(qd(this.activeRefInput),this.activeRefInput=``,this.requestUpdate())}}
                  ?disabled=${!this.activeRefInput}
                >SET</button>
                ${Kd()?G`
                  <button class="action-btn" style="color:#ff2d6b;border-color:#ff2d6b44"
                    @click=${()=>{Jd(),this.requestUpdate()}}>✕</button>
                `:``}
              </div>
              <div class="hint">Credits the referrer on your next transaction</div>
            </div>

            <hr class="divider" />

            <!-- referral registration -->
            <div>
              <div class="section-label">${o?`YOUR REFERRAL CODE`:`REGISTER YOUR CODE`}</div>
              ${o?G`
                <div style="display:flex;gap:6px">
                  <input class="ref-input" readonly .value=${o} style="flex:1;color:#ffe600;cursor:default" />
                  <button class="action-btn" @click=${()=>this._copyRefUrl(o)}>
                    ${this.copiedRef?`COPIED ✓`:`COPY URL`}
                  </button>
                </div>
              `:G`
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
                ${this.confirmReg?G`
                  <div class="hint" style="color:#ff2d6b;margin-top:6px">
                    "${this.referralCode}" will be permanently linked to this wallet. Are you sure?
                  </div>
                  <div style="display:flex;gap:6px;margin-top:6px">
                    <button class="action-btn" @click=${this._registerReferral} ?disabled=${this.registerPending}>CONFIRM</button>
                    <button class="action-btn" style="color:#707088;border-color:#70708844" @click=${()=>{this.confirmReg=!1}}>CANCEL</button>
                  </div>
                `:G`
                  <div class="hint" style=${this.regEligError?`color:#ff2d6b`:``}>Eligible if you contributed ≥0.1% to one of the insider rounds of a pre-rugged vibecoin, or if you hold ≥0.1% of a pre-rugged vibecoin's supply.</div>
                `}
              `}
              ${s>0n?G`
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
    `}};Z([X()],Q.prototype,`open`,void 0),Z([X()],Q.prototype,`providerOpen`,void 0),Z([X()],Q.prototype,`referralCode`,void 0),Z([X()],Q.prototype,`activeRefInput`,void 0),Z([X()],Q.prototype,`registerPending`,void 0),Z([X()],Q.prototype,`claimPending`,void 0),Z([X()],Q.prototype,`confirmReg`,void 0),Z([X()],Q.prototype,`regEligError`,void 0),Z([X()],Q.prototype,`copiedRef`,void 0),Z([X()],Q.prototype,`copied`,void 0),Z([X()],Q.prototype,`denomPref`,void 0),Z([X()],Q.prototype,`_wrongNetworkClicks`,void 0),Q=Z([J(`wallet-widget`)],Q);var Rp=class extends q{constructor(...e){super(...e),this.currentHash=window.location.hash||`#pump`,this._onHash=()=>{this.currentHash=window.location.hash||`#pump`}}static{this.styles=W`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`hashchange`,this._onHash)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,this._onHash)}render(){return G`
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
    `}};Z([X()],Rp.prototype,`currentHash`,void 0),Rp=Z([J(`header-bar`)],Rp);var zp=class extends q{constructor(...e){super(...e),this.claimPendingA=!1,this.claimPendingB=!1,this._subscribedKeys=[],this._tickInterval=0,this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&this.requestUpdate()},this._onWalletChanged=()=>{this._resyncKeys(),this.requestUpdate()}}static{this.styles=W`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),Hu.addEventListener(`wallet-changed`,this._onWalletChanged),this._resyncKeys(),this._tickInterval=window.setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),Hu.removeEventListener(`wallet-changed`,this._onWalletChanged);for(let e of this._subscribedKeys)V(e);this._subscribedKeys=[],clearInterval(this._tickInterval)}_resyncKeys(){for(let e of this._subscribedKeys)V(e);let e=I?.address.toLowerCase()??``;this._subscribedKeys=[`game:phase`,`game:phaseEndTime`,`game:vibecoin`,`game:cycle`,`meta:chainTimeDelta`],e&&this._subscribedKeys.push(`user:${e}:seriesADeposit`,`user:${e}:seriesBDeposit`);for(let e of this._subscribedKeys)cd(e)}_openBuy(e){window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:e}}))}async _claimA(){let e=B.get(`game:cycle`),t=rd();if(!(!t||!I||e===void 0)){this.claimPendingA=!0;try{let n=F[P],r=await t.writeContract({address:n.game,abi:R,functionName:`claimSeriesATokens`,args:[e],account:I.address,chain:t.chain});U.refresh(),U.refreshUser(),Sp(r,`Claimed Insider Vibecoins`)}catch(e){console.error(`Claim A error:`,e)}finally{this.claimPendingA=!1}}}async _claimB(){let e=B.get(`game:cycle`),t=rd();if(!(!t||!I||e===void 0)){this.claimPendingB=!0;try{let n=F[P],r=await t.writeContract({address:n.game,abi:R,functionName:`claimSeriesBTokens`,args:[e],account:I.address,chain:t.chain});U.refresh(),U.refreshUser(),Sp(r,`Claimed "Insider" Vibecoins`)}catch(e){console.error(`Claim B error:`,e)}finally{this.claimPendingB=!1}}}_phaseStatus(e){let t=B.get(`game:phase`);if(t!==e)return e<(t??0)?`ENDED`:`PENDING`;let n=B.get(`game:phaseEndTime`)??0n;if(n===0n)return e===0?`DEPOSIT TO KICK OFF (0.1 shMON needed)`:`PENDING`;let r=B.get(`meta:chainTimeDelta`)??0,i=Number(n)-(Date.now()/1e3+r);return i>0?`ENDS IN ${Math.floor(i/3600)}h ${Math.floor(i%3600/60)}m ${Math.floor(i%60)}s`:`ENDED`}render(){let e=I?.address.toLowerCase()??``,t=B.get(`game:phase`)??0,n=t,r=t===0,i=t===1,a=t===2||t===3,o=(B.get(`game:vibecoin`)??``).toLowerCase(),s=B.get(`user:${e}:seriesADeposit`)??0n,c=B.get(`user:${e}:seriesBDeposit`)??0n,l=e?s>0n:!1,u=e?c>0n:!1;return G`
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
          ${e?G`
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

          ${a&&l?G`
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

          ${r?G`
            <button class="btn" @click=${()=>this._openBuy(`seriesA`)}>DEPOSIT</button>
            ${n===0&&(B.get(`game:phaseEndTime`)??0n)===0n?G`
              <div class="meta">Your deposit starts the next round.</div>
            `:``}
          `:a&&l?G`
            <button class="btn claim" @click=${this._claimA} ?disabled=${this.claimPendingA}>
              ${this.claimPendingA?`CLAIMING…`:`CLAIM VIBECOINS`}
            </button>
          `:G`
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
          ${e?G`
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

          ${a&&u?G`
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

          ${i?G`
            <button class="btn" @click=${()=>this._openBuy(`seriesB`)}>DEPOSIT</button>
          `:a&&u?G`
            <button class="btn claim" @click=${this._claimB} ?disabled=${this.claimPendingB}>
              ${this.claimPendingB?`CLAIMING...`:`CLAIM VIBECOINS`}
            </button>
          `:G`
            <button class="btn" disabled>${t<1?`NOT OPEN YET`:`CLOSED`}</button>
          `}
        </div>
      </div>
    `}};Z([X()],zp.prototype,`claimPendingA`,void 0),Z([X()],zp.prototype,`claimPendingB`,void 0),zp=Z([J(`seed-section`)],zp);var Bp=class extends q{constructor(...e){super(...e),this.vcAddress=`0x0000000000000000000000000000000000000000`,this._claimPending=!1,this._optPending=!1,this._subscribedKeys=[],this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&(e.detail.has(`token:${this.vcAddress.toLowerCase()}:cycle`)&&this._resyncKeys(),this.requestUpdate())},this._onWalletChanged=()=>{this._resyncKeys(),this.requestUpdate()}}static{this.styles=W`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),Hu.addEventListener(`wallet-changed`,this._onWalletChanged),this._resyncKeys()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),Hu.removeEventListener(`wallet-changed`,this._onWalletChanged);for(let e of this._subscribedKeys)V(e);this._subscribedKeys=[]}updated(e){e.has(`vcAddress`)&&this._resyncKeys()}_resyncKeys(){for(let e of this._subscribedKeys)V(e);let e=this.vcAddress.toLowerCase(),t=I?.address.toLowerCase()??``,n=B.get(`token:${e}:cycle`);this._subscribedKeys=[`token:${e}:K`,`token:${e}:P0`,`token:${e}:totalSupply`,`token:${e}:symbol`,`token:${e}:unlocked`,`token:${e}:athPrice`,`token:${e}:athPostRug`,`token:${e}:cycle`,`game:phase`],n!==void 0&&this._subscribedKeys.push(`game:tokensSeriesA:${n}`,`game:tokensSeriesB:${n}`),t&&this._subscribedKeys.push(`token:${e}:balance:${t}`,`token:${e}:dividendsClaimable:${t}`,`token:${e}:optedIn:${t}`);for(let e of this._subscribedKeys)cd(e)}async _optToggle(e){let t=rd();if(!(!t||!I)){this._optPending=!0,this.requestUpdate();try{let n=e?`optOut`:`optIn`;Sp(await t.writeContract({address:this.vcAddress,abi:z,functionName:n,account:I.address,chain:t.chain}),e?`Opted out of vibes`:`Opted in to vibes`),U.refreshUser()}catch(e){Cp(e)}finally{this._optPending=!1,this.requestUpdate()}}}async _claimDividends(){let e=rd();if(!(!e||!I)){this._claimPending=!0,this.requestUpdate();try{Sp(await e.writeContract({address:this.vcAddress,abi:z,functionName:`claimDividends`,args:[I.address],account:I.address,chain:e.chain}),`Claimed vibecoin dividends`),U.refreshUser()}catch(e){console.error(`Claim dividends error:`,e)}finally{this._claimPending=!1,this.requestUpdate()}}}_renderChart(e,t,n,r,i,a,o){let s=n*3n/2n||10n**18n,c=10n**18n,l=[],u=[];for(let n=0;n<=60;n++){let r=s*BigInt(n)/BigInt(60),i=e+t*r/c;l.push(Number(r)/0xde0b6b3a7640000),u.push(Number(i)/1e9)}let d=l[l.length-1]||1,f=Math.max(...u)||1,p=e=>38+e/d*262,m=e=>66-e/f*66,h=l.map((e,t)=>`${t===0?`M`:`L`}${p(e).toFixed(1)},${m(u[t]).toFixed(1)}`).join(` `),g=Math.round(p(Number(n)/0xde0b6b3a7640000)),_=Math.round(p(Number(a))),v=r>0n?p(Number(r)/0xde0b6b3a7640000):null,y=r>0n&&i>0n?p(Number(r+i)/0xde0b6b3a7640000):null,b=e=>String(e).split(``).map(e=>`₀₁₂₃₄₅₆₇₈₉`[+e]).join(``),x=e=>{let t=e/1e9;if(t>=.001)return t.toPrecision(3);let n=t.toFixed(30).split(`.`)[1]??``,r=0;for(let e of n)if(e===`0`)r++;else break;let i=n.slice(r,r+3);return`0.0${b(r-1)}${i}`};return G`
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
          ${v===null?``:Zf`
            <line x1="${v.toFixed(1)}" y1="0" x2="${v.toFixed(1)}" y2="${66}" stroke="#ffe600aa" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${v.toFixed(1)}" y="${78}" fill="#ffe600aa" font-size="9" text-anchor="middle">I</text>
          `}

          <!-- Series B boundary -->
          ${y===null?``:Zf`
            <line x1="${y.toFixed(1)}" y1="0" x2="${y.toFixed(1)}" y2="${66}" stroke="#ffe600aa" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${y.toFixed(1)}" y="${78}" fill="#ffe600aa" font-size="9" text-anchor="middle">"I"</text>
          `}

          <!-- ATH/rug supply -->
          ${a>0n&&Math.abs(_-g)>1?Zf`
            <line x1="${_}" y1="0" x2="${_}" y2="${66}" stroke="${o?`#ff9d00aa`:`#ff2d6baa`}" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${_}" y="${78}" fill="${o?`#ff9d00aa`:`#ff2d6baa`}" font-size="9" text-anchor="middle">${o?`ath`:`rug`}</text>
          `:``}

          <!-- Current supply -->
          <line x1="${g}" y1="0" x2="${g}" y2="${66}" stroke="#00e5ff88" stroke-width="1" stroke-dasharray="3,3" />
          <text x="${g}" y="${78}" fill="#00e5ff88" font-size="9" text-anchor="middle">now</text>
        </svg>
      </div>
    `}render(){let e=this.vcAddress;if(!e||e===`0x0000000000000000000000000000000000000000`)return G`<div style="color:#3a3a4a;font-family:monospace;font-size:11px">No vibecoin active</div>`;let t=e.toLowerCase(),n=I?.address.toLowerCase()??``,r=B.get(`token:${t}:K`)??0n,i=B.get(`token:${t}:P0`)??0n,a=B.get(`token:${t}:totalSupply`)??0n,o=B.get(`token:${t}:unlocked`)??!1,s=B.get(`token:${t}:athPrice`)??0n,c=B.get(`token:${t}:athPostRug`)??!1,l=B.get(`token:${t}:cycle`),u=B.get(`game:phase`)!==void 0,d=l===void 0?``:`game:tokensSeriesA:${l}`,f=l===void 0?``:`game:tokensSeriesB:${l}`,p=(d?B.get(d):void 0)??0n,m=(f?B.get(f):void 0)??0n,h=s>0n&&r>0n&&s>i?(s-i)*10n**18n/r:0n,g=n?B.get(`token:${t}:balance:${n}`)??0n:0n,_=n?B.get(`token:${t}:dividendsClaimable:${n}`)??0n:0n,v=n?B.get(`token:${t}:optedIn:${n}`)??!1:!1,y=o,b=B.has(`token:${t}:K`)&&B.has(`token:${t}:P0`)&&B.has(`token:${t}:totalSupply`);return G`
      <div class="panel">
        <div class="row">
          <span class="key">CURRENT PRICE</span>
          <span class="val"><live-bonding-price prefix="token:${t}"></live-bonding-price></span>
        </div>
        <div class="row">
          <span class="key">TOTAL SUPPLY</span>
          <span class="val"><live-token-amount value-key="token:${t}:totalSupply"></live-token-amount></span>
        </div>
        ${I?G`
          <div class="row">
            <span class="key">YOUR BALANCE</span>
            <span class="val">
              <live-token-amount value-key="token:${t}:balance:${n}"></live-token-amount>
              (<live-percent num-key="token:${t}:balance:${n}" dem-key="token:${t}:totalSupply"></live-percent>,
              <live-valuation key="token:${t}:balance:${n}"></live-valuation>)
            </span>
          </div>
        `:``}

        ${b?this._renderChart(i,r,a,p,m,h,c):G`<div class="chart-area chart-loading">LOADING CHART…</div>`}

        <div class="btn-row">
          <button class="btn buy" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:y?`vibecoin`:`publicBuy`,vibecoinAddress:e}}))}}>BUY</button>
          <button
            class="btn sell"
            @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:`vibecoinSell`,vibecoinAddress:e,tokenBalance:g}}))}}
            ?disabled=${!y||!I||g===0n}
            title=${y?``:`Selling unlocks at rugpull`}
          >SELL</button>
        </div>

        ${u&&!y?G`
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
    `}};Z([Y({type:String})],Bp.prototype,`vcAddress`,void 0),Bp=Z([J(`launch-section`)],Bp);var Vp=class extends q{constructor(...e){super(...e),this.forceSettled=!1,this.triggerPending=!1,this._subscribedKeys=[],this._timerInterval=null,this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&((e.detail.has(`game:lastBuyer`)||e.detail.has(`game:cycle`))&&this._resyncKeys(),e.detail.has(`game:lastBuyer`)&&this._maybeRequestReferralCode(),this.requestUpdate())}}static{this.styles=W`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),this._resyncKeys(),this._maybeRequestReferralCode(),this._timerInterval=setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate);for(let e of this._subscribedKeys)V(e);this._subscribedKeys=[],this._timerInterval&&clearInterval(this._timerInterval)}_resyncKeys(){for(let e of this._subscribedKeys)V(e);let e=B.get(`game:cycle`)??0n,t=(B.get(`game:lastBuyer`)??``).toLowerCase(),n=e>0n?e-1n:0n;this._subscribedKeys=[`game:phase`,`game:phaseEndTime`,`game:lastBuyer`,`game:cycle`,`meta:chainTimeDelta`],t&&this._subscribedKeys.push(`user:${t}:referralCode`),this.forceSettled&&e>0n&&this._subscribedKeys.push(`game:winner:${n}`,`game:prize:${n}`);for(let e of this._subscribedKeys)cd(e)}_maybeRequestReferralCode(){let e=B.get(`game:lastBuyer`)??``;e&&window.dispatchEvent(new CustomEvent(`request-referral-code`,{detail:{address:e}}))}async _triggerSettlement(){let e=rd();if(!(!e||!I)){this.triggerPending=!0;try{let t=F[P];Sp(await e.writeContract({address:t.game,abi:R,functionName:`triggerSettlement`,account:I.address,chain:e.chain}),`Rugpull triggered — settlement in progress`)}catch(e){Cp(e)}finally{this.triggerPending=!1}}}render(){let e=B.get(`game:phase`);if(e===void 0)return G``;let t=B.get(`game:phaseEndTime`)??0n,n=B.get(`meta:chainTimeDelta`)??0,r=e===2&&t>0n?Math.max(0,Number(t)*1e3-(Date.now()+n*1e3)):0,i=e===3||e===2&&r===0,a=this.forceSettled,o=B.get(`game:cycle`)??0n,s=o>0n?o-1n:0n,c=`0x0000000000000000000000000000000000000000`,l=this.forceSettled?B.get(`game:winner:${s}`)??c:B.get(`game:lastBuyer`)??c,u=this.forceSettled?`game:prize:${s}`:`game:prizePool`,d=B.get(`user:${l.toLowerCase()}:referralCode`),f=F[P].explorer;return G`
      <div class="panel">
        ${a?G`
          <div class="settled-banner">
            <div class="settled-title">RUGPULLED</div>
          </div>
        `:i?G`
          <div class="expired-label">TIMER EXPIRED</div>
        `:G`
          <div class="timer-large">
            <live-countdown key="game:phaseEndTime" milliseconds warning-ms="300000"></live-countdown>
          </div>
        `}

        ${l===c?G`
          <div class="no-buyer">no rugpuller yet</div>
        `:G`
          <div class="rugpuller-block">
            <div class="rugpuller-label">Current Rugpuller${d?G` · <span style="color:#ffe600">${d}</span>`:``}</div>
            ${f?G`
              <a class="rugpuller-addr" href="${f}/address/${l}" target="_blank" rel="noopener noreferrer">
                <span class="addr-short">${Id(l)}</span>
                <span class="addr-full">${l}</span>
              </a>
            `:G`
              <div class="rugpuller-addr">
                <span class="addr-short">${Id(l)}</span>
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

        ${i&&!a?G`
          <button
            class="trigger-btn"
            @click=${this._triggerSettlement}
            ?disabled=${this.triggerPending||!I}
          >
            ${this.triggerPending?`SETTLING...`:`TRIGGER RUGPULL`}
          </button>
        `:``}
      </div>
    `}};Z([Y({type:Boolean})],Vp.prototype,`forceSettled`,void 0),Z([X()],Vp.prototype,`triggerPending`,void 0),Vp=Z([J(`rugpull-section`)],Vp);var Hp=`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;function Up(){let e=3+Math.floor(Math.random()*4);return Array.from({length:e},()=>Hp[Math.floor(Math.random()*36)]).join(``)}var Wp=`GENERATING VIBECOIN….BOOTSTRAPPING CONSENSUS….ALIGNING INCENTIVES….MANIFESTING UTILITY….DEPLOYING HOPIUM….CONSULTING THE VIBE ORACLE….LAUNDERING DEGENERACY….DECENTRALIZING SOMETHING….LOADING FUTURE BAGS….SYNCING WITH BLOCKCHAIN™….SOURCING GREATER FOOLS….CALIBRATING RUG TENSION….INFLATING TOKEN METRICS….FABRICATING ROADMAP….ONBOARDING EXIT LIQUIDITY….COMPILING VIBES….TRAINING TOKENOMICS AI….SCHEDULING INFLUENCER POSTS….AUDITING THE UNAUDITABLE….PLAGIARIZING WHITEPAPER….SEEDING TELEGRAM GROUP….RANDOMIZING 'INSURANCE FUND'….GENERATING PLAUSIBLE DENIABILITY….STRESS-TESTING EXIT STRATEGY….TOKENIZING NOTHING….BOOTSTRAPPING ORGANIC COMMUNITY….ACTIVATING ANONYMOUS FOUNDERS….APPLYING GIRLMATH…`.split(`.`),Gp=[{label:`AI Tokens Consumed`,value:e=>e.tokensConsumed.toLocaleString()},{label:`Exit Liquidity Manifested`,value:e=>`${e.exitLiquidity.toLocaleString()} wallets`},{label:`Hopium Injected`,value:e=>`${e.hopium} cc`},{label:`Bag Holders Hallucinated`,value:e=>e.bagHolders.toLocaleString()},{label:`Rug Threads Woven`,value:e=>`${e.rugThreads.toFixed(1)}%`},{label:`Utility`,value:()=>`undefined`},{label:`Financial Advisors Ignored`,value:()=>`1`},{label:`Diamond Hands Detected`,value:()=>`0`},{label:`NFT Royalties Waived`,value:()=>`0`},{label:`Regulatory Gray Areas Exploited`,value:e=>String(e.grayAreas)},{label:`Market Makers Angered`,value:e=>String(e.marketMakers)},{label:`Decentralization Theater`,value:()=>`STAGING`},{label:`Plausible Deniability`,value:e=>`${e.plausibleDeniability}%`},{label:`Whitepaper Pages`,value:()=>`0`},{label:`Legal Opinions Sought`,value:()=>`0`},{label:`Liquidity Lock`,value:()=>`awaiting rugpull`},{label:`Net Cost After Girlmath`,value:()=>`$0 💖`}];function Kp(){return{tokensConsumed:Math.floor(Math.random()*45e5)+5e5,exitLiquidity:Math.floor(Math.random()*15e3)+5e3,hopium:Math.floor(Math.random()*700)+100,bagHolders:Math.floor(Math.random()*2e3)+500,rugThreads:60+Math.random()*25,grayAreas:Math.floor(Math.random()*3)+1,marketMakers:Math.floor(Math.random()*2)+1,plausibleDeniability:Math.floor(Math.random()*40)+60}}var qp=class extends q{constructor(...e){super(...e),this.tokenUri=``,this.lastVibecoin=`0x0000000000000000000000000000000000000000`,this._scrambledTicker=Up(),this._headingIdx=0,this._statIdx=0,this._genStats=Kp(),this.settlePending=!1,this._tickCount=0,this._genInterval=null,this._tickInterval=null,this._subscribedKeys=[],this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&(this._resyncByCycleSub(),this._maybeLoadTokenUri(),this.requestUpdate())}}static{this.styles=W`
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

  `}_resyncByCycleSub(){let e=B.get(`game:cycle`);if(!e||e<=1n)return;let t=`vibecoins:byCycle:${Number(e)-1}`;this._subscribedKeys.includes(t)||(cd(t),this._subscribedKeys.push(t));let n=B.get(t);if(n){let e=n.toLowerCase();for(let t of[`token:${e}:palette`,`token:${e}:name`,`token:${e}:symbol`])this._subscribedKeys.includes(t)||(cd(t),this._subscribedKeys.push(t))}}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),this._subscribedKeys=[`game:phase`,`game:phaseEndTime`,`game:vibecoin`,`game:cycle`,`meta:chainTimeDelta`,`vibecoins:addresses`,`game:const:seriesADuration`];for(let e of this._subscribedKeys)cd(e);this._resyncByCycleSub(),this._maybeLoadTokenUri(),this._genInterval=setInterval(()=>this._tickGen(),150),this._tickInterval=setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate);for(let e of this._subscribedKeys)V(e);this._subscribedKeys=[],this._genInterval&&clearInterval(this._genInterval),this._tickInterval&&clearInterval(this._tickInterval)}_computeDisplayAddr(){let e=`0x0000000000000000000000000000000000000000`,t=B.get(`game:phase`),n=B.get(`game:cycle`)??0n,r=B.get(`game:phaseEndTime`)??0n,i=B.get(`meta:chainTimeDelta`)??0,a=(B.get(`game:vibecoin`)??e).toLowerCase(),o=t===0&&r>0n?Number(r)-(Date.now()/1e3+i):1/0,s=Number(B.get(`game:const:seriesADuration`)??7200n);if(t===0&&n>1n&&(r===0n||o>s/2)){let e=Number(n)-1;return B.get(`vibecoins:byCycle:${e}`)??null}return a&&a!==e?a:null}_maybeLoadTokenUri(){let e=this._computeDisplayAddr();e&&e!==this.lastVibecoin&&(this.lastVibecoin=e,this._loadTokenUri(e))}async _settle(){let e=rd();if(!(!e||!I)){this.settlePending=!0;try{let t=F[P],n=await e.writeContract({address:t.game,abi:R,functionName:`settleSeriesB`,account:I.address,chain:e.chain});U.refresh(),Sp(n,`Vibecoin generated — insider rounds settled`)}catch(e){Cp(e)}finally{this.settlePending=!1}}}_tickGen(){this._scrambledTicker=Up(),this._tickCount++;let e=this._genStats;if(e.tokensConsumed+=Math.floor(Math.random()*14)+4,e.exitLiquidity+=Math.floor(Math.random()*8)+2,e.hopium+=+(Math.random()<.3),e.bagHolders+=Math.floor(Math.random()*6)+1,e.rugThreads=Math.min(99.7,e.rugThreads+Math.random()*.02),Math.random()<.02&&(e.grayAreas+=1),Math.random()<.01&&(e.marketMakers+=1),this._tickCount%20==0){let e=this._headingIdx;for(;e===this._headingIdx;)e=Math.floor(Math.random()*Wp.length);this._headingIdx=e}if(this._tickCount%27==0){let e=this._statIdx;for(;e===this._statIdx;)e=Math.floor(Math.random()*Gp.length);this._statIdx=e,(e===9||e===10)&&(this._genStats={...this._genStats,grayAreas:Math.floor(Math.random()*3)+1,marketMakers:Math.floor(Math.random()*2)+1})}}async _loadTokenUri(e){try{this.tokenUri=await ed(P).readContract({address:e,abi:z,functionName:`tokenURI`})}catch{this.tokenUri=``}}_getSvgFromUri(){if(!this.tokenUri)return``;if(this.tokenUri.startsWith(`data:application/json`))try{let e=atob(this.tokenUri.split(`,`)[1]);return JSON.parse(e).image??``}catch{return``}return``}render(){let e=F[P],t=`0x0000000000000000000000000000000000000000`,n=B.get(`game:phase`),r=B.get(`game:cycle`)??0n,i=B.get(`game:phaseEndTime`)??0n,a=B.get(`meta:chainTimeDelta`)??0,o=(B.get(`game:vibecoin`)??t).toLowerCase(),s=n===0&&i>0n?Number(i)-(Date.now()/1e3+a):1/0,c=Number(B.get(`game:const:seriesADuration`)??7200n),l=n===0&&r>1n&&(i===0n||s>c/2),u=Number(r)-1,d=l?B.get(`vibecoins:byCycle:${u}`)??null:null,f=l?d?.toLowerCase():o&&o!==t?o.toLowerCase():void 0,p=f?B.get(`token:${f}:palette`):void 0,m=p?.[0]??`#00e5ff`,h=p?.[1]??`#0066ff`,g=d?.toLowerCase()??``,_=g?B.get(`token:${g}:name`):void 0,v=g?B.get(`token:${g}:symbol`):void 0,y=g?B.get(`token:${g}:cycle`):void 0,b=!!(o&&o!==t),x=b?o.toLowerCase():``,S=x?B.get(`token:${x}:name`)??`--`:`--`,C=x?B.get(`token:${x}:symbol`)??`--`:`--`,w=x?B.get(`token:${x}:cycle`):void 0,ee=n===2||n===3,te=this._getSvgFromUri(),ne=o&&o!==t,re=n===void 0||n===0&&i===0n,ie=!re&&!ne,ae=Date.now()/1e3+a,oe=ie&&n===1&&i>0n&&ae>=Number(i);return G`
      <div class="container">
        <div
          class="vibecoin-hero"
          style="--vc-col1:${m};--vc-col2:${h};border-color:${l?`#ff2d6b33`:re?`#252540`:ie?`#1a1a30`:m+`22`}"
        >
          ${l?G`
            ${te?G`
              <div class="vc-svg-wrapper" style="--vc-col1:${m};filter:drop-shadow(0 0 20px ${m})">
                <img src=${te} alt="vibecoin" />
              </div>
            `:G`
              <div class="vc-svg-wrapper" style="background:linear-gradient(135deg,${m},${h});--vc-col1:${m}"></div>
            `}
            ${e.explorer&&d?G`
              <a class="vc-name" style="color:${m};text-shadow:0 0 20px ${m},0 0 60px ${m}44" href="${e.explorer}/address/${d}" target="_blank">${_??G`<span class="spin"></span>`}</a>
            `:G`
              <div class="vc-name" style="color:${m};text-shadow:0 0 20px ${m},0 0 60px ${m}44">${_??G`<span class="spin"></span>`}</div>
            `}
            <div class="vc-ticker-row">
              <span class="vc-ticker">${v===void 0?G`<span class="spin"></span>`:G`\$${v}`}</span>
              ${y===void 0?``:G`<span class="round-badge">#${y}</span>`}
            </div>
            ${d?G`
              <div class="hero-stats">
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-valuation key="token:${g}:poolBalance"></live-valuation></span>
                  <span class="hero-stat-label">Locked In</span>
                </div>
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-bonding-mcap prefix="token:${g}"></live-bonding-mcap></span>
                  <span class="hero-stat-label">Market Cap</span>
                </div>
              </div>
            `:``}
          `:re?G`
            <div class="awaiting">
              <div class="vc-pending-phase">Awaiting insiders</div>
              <div class="vc-pending-tokens">
                 Initial insider deposit needed to begin Vibecoin generation
              </div>
            </div>
          `:ie?G`
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
              <div class="vc-pending-phase">${oe?`Vibecoin Ready`:Wp[this._headingIdx]}</div>
              <div class="vc-pending-ticker">\$${this._scrambledTicker}</div>
              <div class="vc-pending-tokens">
                ${oe?`Insider rounds have concluded. Vibecoin may now be generated.`:`Vibecoin will be generated after insider rounds conclude.`}<br>
                ${Gp[this._statIdx].label}: <span class="count">${Gp[this._statIdx].value(this._genStats)}</span>
              </div>
              ${oe?G`
                <button class="settle-btn" ?disabled=${this.settlePending} @click=${()=>this._settle()}>
                  ${this.settlePending?`Settling...`:`Generate Vibecoin`}
                </button>
              `:``}
            </div>
          `:G`
            ${te?G`
              <div class="vc-svg-wrapper" style="--vc-col1:${m}">
                <img src=${te} alt="vibecoin" />
              </div>
            `:G`
              <div class="vc-svg-wrapper" style="background:linear-gradient(135deg,${m},${h});--vc-col1:${m}"></div>
            `}

            ${e.explorer&&b?G`
              <a class="vc-name" href="${e.explorer}/address/${o}" target="_blank">${S}</a>
            `:G`<div class="vc-name">${S}</div>`}
            <div class="vc-ticker-row">
              <span class="vc-ticker">\$${C}</span>
              ${w===void 0?``:G`<span class="round-badge">#${w}</span>`}
            </div>

            ${b?G`
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
          ${l&&d?G`
            <div>
              <div class="section-label">— RUGPULL —</div>
              <rugpull-section .forceSettled=${!0}></rugpull-section>
            </div>
            <div>
              <div class="section-label">— SELL —</div>
              <launch-section .vcAddress=${d}></launch-section>
            </div>
          `:ee&&ne?G`
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
    `}};Z([X()],qp.prototype,`tokenUri`,void 0),Z([X()],qp.prototype,`lastVibecoin`,void 0),Z([X()],qp.prototype,`_scrambledTicker`,void 0),Z([X()],qp.prototype,`_headingIdx`,void 0),Z([X()],qp.prototype,`_statIdx`,void 0),Z([X()],qp.prototype,`_genStats`,void 0),Z([X()],qp.prototype,`settlePending`,void 0),qp=Z([J(`pump-tab`)],qp);var Jp=class extends q{constructor(...e){super(...e),this.address=``,this.tokenUri=``,this.uriLoaded=!1,this.claimAPending=!1,this.claimBPending=!1,this.observer=null,this._subscribedKeys=[],this._onLiveUpdate=e=>{this._subscribedKeys.some(t=>e.detail.has(t))&&this.requestUpdate()},this._onWalletEvent=()=>this._resyncKeys()}static{this.styles=W`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),window.addEventListener(`wallet-connected`,this._onWalletEvent),window.addEventListener(`wallet-disconnected`,this._onWalletEvent),this._resyncKeys(),this.observer=new IntersectionObserver(e=>{e[0].isIntersecting&&(this._loadTokenUri(),this.address&&window.dispatchEvent(new CustomEvent(`request-vc-card-data`,{detail:{address:this.address}})),this.observer?.disconnect())},{threshold:.1}),this.observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),window.removeEventListener(`wallet-connected`,this._onWalletEvent),window.removeEventListener(`wallet-disconnected`,this._onWalletEvent),this._unsubscribeAll(),this.observer?.disconnect()}_unsubscribeAll(){for(let e of this._subscribedKeys)V(e);this._subscribedKeys=[]}_resyncKeys(){this._unsubscribeAll();let e=this.address.toLowerCase();if(!e)return;let t=B.get(`token:${e}:cycle`)?.toString()??``,n=t?B.get(`game:winner:${t}`):void 0,r=I?.address.toLowerCase(),i=[`token:${e}:name`,`token:${e}:cycle`,`token:${e}:unlocked`,`token:${e}:athPrice`,`token:${e}:athPostRug`,`token:${e}:palette`,...t?[`game:winner:${t}`]:[],...n?[`user:${n.toLowerCase()}:referralCode`]:[],...r?[`token:${e}:balance:${r}`]:[],...r&&t?[`game:seriesADeposit:${t}:${r}`,`game:seriesBDeposit:${t}:${r}`]:[]];for(let e of i)cd(e);this._subscribedKeys=i}updated(e){e.has(`address`)&&this._resyncKeys()}async _loadTokenUri(){if(!this.uriLoaded)try{this.tokenUri=await ed(P).readContract({address:this.address,abi:z,functionName:`tokenURI`}),this.uriLoaded=!0}catch{this.uriLoaded=!0}}_getSvgFromUri(){if(!this.tokenUri)return``;if(this.tokenUri.startsWith(`data:application/json`))try{let e=atob(this.tokenUri.split(`,`)[1]);return JSON.parse(e).image??``}catch{return``}return``}async _claimA(){let e=rd();if(!e||!I)return;let t=B.get(`token:${this.address.toLowerCase()}:cycle`);if(t!==void 0){this.claimAPending=!0,this.requestUpdate();try{let n=F[P];Sp(await e.writeContract({address:n.game,abi:R,functionName:`claimSeriesATokens`,args:[BigInt(t)],account:I.address,chain:e.chain}),`Claimed Insider Vibecoins`)}catch(e){Cp(e)}finally{this.claimAPending=!1,this.requestUpdate()}}}async _claimB(){let e=rd();if(!e||!I)return;let t=B.get(`token:${this.address.toLowerCase()}:cycle`);if(t!==void 0){this.claimBPending=!0,this.requestUpdate();try{let n=F[P];Sp(await e.writeContract({address:n.game,abi:R,functionName:`claimSeriesBTokens`,args:[BigInt(t)],account:I.address,chain:e.chain}),`Claimed "Insider" Vibecoins`)}catch(e){Cp(e)}finally{this.claimBPending=!1,this.requestUpdate()}}}render(){let e=this.address.toLowerCase(),t=B.get(`token:${e}:name`)??``,n=B.get(`token:${e}:cycle`),r=B.get(`token:${e}:unlocked`)??!1,i=B.get(`token:${e}:athPrice`)??0n,a=B.get(`token:${e}:athPostRug`)??!1,o=B.get(`token:${e}:palette`)??[`#00e5ff`,`#0066ff`],s=n?.toString()??``,c=s?B.get(`game:winner:${s}`):void 0,l=I?.address.toLowerCase(),u=l?B.get(`token:${e}:balance:${l}`)??0n:0n,d=l&&s?B.get(`game:seriesADeposit:${s}:${l}`)??0n:0n,f=l&&s?B.get(`game:seriesBDeposit:${s}:${l}`)??0n:0n,p=this._getSvgFromUri(),m=o[0],h=o[1],g=m+`14`,_=m+`2e`,v=m+`40`,y=m+`4d`,b=m+`66`,x=m+`99`,S=m+`2a`,C=F[P].explorer;return G`
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
          ${p?G`<img src=${p} alt="" />`:``}
        </div>

        <div class="info">
          <div class="name-row">
            ${C?G`
              <a class="vc-name" href="${C}/address/${this.address}" target="_blank">${t}</a>
            `:G`
              <span class="vc-name">${t}</span>
            `}
            ${n===void 0?``:G`<span class="cycle-badge">Round ${n}</span>`}
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
            ${i>0n?G`
              <span class="stat-key">${a?`ATH`:`RUG`} PRICE</span>
              <span class="stat-val"><live-token-price value-key="token:${e}:athPrice"></live-token-price></span>
            `:``}

            ${I&&(u>0n||c)?G`
              <hr class="stat-divider" />
            `:``}

            ${I&&u>0n?G`
              <span class="stat-key">YOUR BAL</span>
              <span class="stat-val own"><live-token-amount value-key="token:${e}:balance:${l}"></live-token-amount></span>
            `:``}
            ${c?G`
              <span class="stat-key">RUGGED</span>
              <span class="stat-val">
                <live-valuation key="game:prize:${s}"></live-valuation> to
                <live-string key="user:${c.toLowerCase()}:referralCode" fallback="" style="color:#ffe600"></live-string>
                ${C?G`
                  <a style="color:#ff2d6b;text-decoration:none" href="${C}/address/${c}" target="_blank">${Id(c)}</a>
                `:G`<span style="color:#ff2d6b">${Id(c)}</span>`}
              </span>
            `:``}
          </div>
        </div>

        <div class="btn-row">
          <button class="btn buy" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:r?`vibecoin`:`publicBuy`,vibecoinAddress:this.address}}))}}>BUY</button>

          ${r&&u>0n?G`
            <button class="btn sell" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:`vibecoinSell`,vibecoinAddress:this.address,tokenBalance:u}}))}}>SELL</button>
          `:``}

          ${d>0n?G`
            <button class="btn claim" @click=${this._claimA} ?disabled=${this.claimAPending}>
              ${this.claimAPending?`…`:`CLAIM INSIDER CUT`}
            </button>
          `:``}

          ${f>0n?G`
            <button class="btn claim" @click=${this._claimB} ?disabled=${this.claimBPending}>
              ${this.claimBPending?`…`:`CLAIM "INSIDER" CUT`}
            </button>
          `:``}
        </div>
      </div>
    `}};Z([Y()],Jp.prototype,`address`,void 0),Z([X()],Jp.prototype,`tokenUri`,void 0),Z([X()],Jp.prototype,`uriLoaded`,void 0),Jp=Z([J(`vibecoin-card`)],Jp);var Yp=20,Xp=class extends q{constructor(...e){super(...e),this.search=``,this.visibleCount=Yp,this.observer=null,this.sentinelEl=null,this._onLiveUpdate=e=>{e.detail.has(`vibecoins:addresses`)&&this.requestUpdate()},this._onHashChange=()=>this._applyHash()}static{this.styles=W`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`live-values-updated`,this._onLiveUpdate),window.addEventListener(`hashchange`,this._onHashChange),cd(`vibecoins:addresses`),this._applyHash()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`live-values-updated`,this._onLiveUpdate),window.removeEventListener(`hashchange`,this._onHashChange),V(`vibecoins:addresses`),this.observer?.disconnect()}_applyHash(){let e=window.location.hash.split(`?`)[0].match(/^#vibecoins\/(0x[0-9a-fA-F]{40})$/);e&&(this.search=e[1],this.visibleCount=Yp)}updated(){let e=this.renderRoot?.querySelector(`.sentinel`);e&&e!==this.sentinelEl&&(this.observer?.disconnect(),this.sentinelEl=e,this.observer=new IntersectionObserver(e=>{e[0].isIntersecting&&(this.visibleCount+=Yp)},{rootMargin:`200px`}),this.observer.observe(e))}_filtered(){let e=B.get(`vibecoins:addresses`)??[],t=this.search.toLowerCase().trim();return t?e.filter(e=>{let n=e.toLowerCase(),r=(B.get(`token:${n}:name`)??``).toLowerCase(),i=(B.get(`token:${n}:symbol`)??``).toLowerCase();return r.includes(t)||i.includes(t)||n.includes(t)}):e}render(){let e=this._filtered(),t=e.slice(0,this.visibleCount),n=!B.has(`vibecoins:addresses`);return G`
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

        ${n&&e.length===0?G`
          <div class="loading">
            <span class="spinner"></span>
            INDEXING EVENTS...
          </div>
        `:e.length===0?G`
          <div class="empty">
            ${this.search?`NO MATCHES FOUND`:`NO VIBECOINS YET`}
          </div>
        `:G`
          <div class="list">
            ${t.map(e=>G`
              <vibecoin-card .address=${e.toLowerCase()}></vibecoin-card>
            `)}
            ${t.length<e.length?G`<div class="sentinel"></div>`:``}
          </div>
        `}
        <div class="loading">
          // FUTURE RUGGED VIBECOINS GO HERE
        </div>
      </div>
    `}};Z([X()],Xp.prototype,`search`,void 0),Z([X()],Xp.prototype,`visibleCount`,void 0),Xp=Z([J(`vibecoins-tab`)],Xp);function Zp(e){if(e<0n)throw Error(`sqrt of negative`);if(e===0n)return 0n;let t=e,n=(t+1n)/2n;for(;n<t;)t=n,n=(t+e/t)/2n;return t}function Qp(e,t,n,r){let i=10n**18n,a=n*t/i+r*t*t/(2n*i*i)+e,o=Zp(n*n+2n*r*a);if(r===0n)return 0n;let s=(o-n)*i/r;return s>t?s-t:0n}var $=class extends q{constructor(...e){super(...e),this.visible=!1,this._loading=!1,this.target=`publicBuy`,this.amountStr=``,this.useShMon=!1,this.pending=!1,this.approvePending=!1,this.approved=!1,this.error=``,this._sellShMonPreview=0n,this._tokenBalance=0n,this._vcSymbol=`token`,this._vcName=`BUY`,this._waitingForAddr=``,this._refCode=null,this._onLiveValuesWhileLoading=e=>{let t=e.detail,n=this._waitingForAddr,r=`token:${n}:symbol`,i=`token:${n}:name`;if(!t.has(r)&&!t.has(i))return;let a=B.get(r),o=B.get(i);a&&(this._vcSymbol=a),o&&(this._vcName=o),a&&o&&(this._loading=!1,window.removeEventListener(`live-values-updated`,this._onLiveValuesWhileLoading))}}static{this.styles=W`
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
  `}open(e){this.target=e.target,this.vibecoinAddress=e.vibecoinAddress,this._tokenBalance=e.tokenBalance??0n,this._resolveVcMeta(e.vibecoinAddress),this._refCode=Kd(),this.amountStr=``,this.useShMon=!1,this.pending=!1,this.approvePending=!1,this.approved=!1,this.error=``,this._sellShMonPreview=0n,this.visible=!0}_resolveVcMeta(e){if(this.target===`seriesA`||this.target===`seriesB`){this._loading=!1;return}let t=(e??B.get(`game:vibecoin`))?.toLowerCase()??``,n=t?B.get(`token:${t}:symbol`):void 0,r=t?B.get(`token:${t}:name`):void 0;this._vcSymbol=n??`token`,this._vcName=r??``,t&&(!n||!r)?(this._waitingForAddr=t,this._loading=!0,window.addEventListener(`live-values-updated`,this._onLiveValuesWhileLoading)):this._loading=!1}async _updateSellPreview(){let e=this._amountWei;if(e===0n||!this.vibecoinAddress){this._sellShMonPreview=0n;return}try{this._sellShMonPreview=await ed(P).readContract({address:this.vibecoinAddress,abi:z,functionName:`shMonForTokens`,args:[e]})}catch{this._sellShMonPreview=0n}}_close(){this.visible=!1,this._loading=!1,window.removeEventListener(`live-values-updated`,this._onLiveValuesWhileLoading)}get _amountWei(){try{let e=parseFloat(this.amountStr);return isNaN(e)||e<=0?0n:BigInt(Math.floor(e*0xde0b6b3a7640000))}catch{return 0n}}_getTitle(){switch(this.target){case`seriesA`:return`INSIDER ROUND`;case`seriesB`:return`"INSIDER" ROUND`;case`publicBuy`:return`BUY`;case`vibecoin`:return this._vcName?this._vcName.toUpperCase():`BUY`;case`vibecoinSell`:return this._vcSymbol?`SELL ${this._vcSymbol}`:`SELL`}}_lv(e){return B.get(e)}_constsLoaded(){return B.has(`game:const:seriesAProtocol`)}_getFeeBreakdown(){if(this.target===`vibecoin`)return[[`Dividend pool`,1000n],[`To buyer`,9000n]];if(!this._constsLoaded())switch(this.target){case`seriesA`:return[[`Protocol`,400n],[`Referral`,600n],[`Rugpull Fund`,2000n],[`Vibecoins minted`,7000n]];case`seriesB`:return[[`Protocol`,400n],[`Referral`,600n],[`Rugpull Fund`,1000n],[`Vibecoins minted`,8000n]];default:return[[`Protocol`,400n],[`Referral`,600n],[`Rugpull Fund`,2400n],[`Vibecoin mint`,6600n]]}switch(this.target){case`seriesA`:{let e=this._lv(`game:const:seriesAProtocol`)??400n,t=this._lv(`game:const:seriesAReferral`)??600n,n=this._lv(`game:const:seriesAPrize`)??2000n;return[[`Protocol`,e],[`Referral`,t],[`Rugpull Fund`,n],[`Vibecoins minted`,10000n-e-t-n]]}case`seriesB`:{let e=this._lv(`game:const:seriesBProtocol`)??400n,t=this._lv(`game:const:seriesBReferral`)??600n,n=this._lv(`game:const:seriesBPrize`)??1000n;return[[`Protocol`,e],[`Referral`,t],[`Rugpull Fund`,n],[`Vibecoins minted`,10000n-e-t-n]]}default:{let e=this._lv(`game:const:pumpProtocol`)??400n,t=this._lv(`game:const:pumpReferral`)??600n,n=this._lv(`game:const:pumpPrize`)??2400n;return[[`Protocol`,e],[`Referral`,t],[`Rugpull Fund`,n],[`Vibecoin mint`,10000n-e-t-n]]}}}get _isClosed(){if(this.target!==`vibecoin`)return!1;let e=this.vibecoinAddress?.toLowerCase();return e?B.get(`token:${e}:unlocked`)??!1:!1}_computeTokenPreview(){let e=this._amountWei;if(e===0n)return 0n;let t=this.useShMon?e:e*10n**18n/kd();if(this.target===`publicBuy`){let e=(B.get(`game:vibecoin`)??``).toLowerCase();if(!e)return 0n;let n=B.get(`token:${e}:totalSupply`)??0n,r=B.get(`token:${e}:P0`)??0n,i=B.get(`token:${e}:K`)??0n;return Qp(t*(this._getFeeBreakdown().find(([e])=>e===`Vibecoin mint`)?.[1]??6600n)/10000n,n,r,i)}if(this.target===`vibecoin`){let e=this.vibecoinAddress?.toLowerCase()??``;return e?Qp(t,B.get(`token:${e}:totalSupply`)??0n,B.get(`token:${e}:P0`)??0n,B.get(`token:${e}:K`)??0n):0n}return 0n}_computeTimerExtension(){let e=B.get(`game:settlementTimestamp`)??0n;if(e===0n)return`--`;let t=this._amountWei;if(t===0n)return`--`;let n=B.get(`game:totalSeriesA`)??0n,r=B.get(`game:totalSeriesB`)??0n,i=B.get(`game:totalPublicCurveDeposited`)??0n,a=B.get(`game:phaseEndTime`)??0n,o=Number(n+r)/0xde0b6b3a7640000;if(o===0)return`--`;let s=this.useShMon?t:t*10n**18n/kd(),c=Number(i+s)/0xde0b6b3a7640000+1e4,l=o*2419200/(o+2e6)*c*c*1e3/(c*c+40*o*o),u=Number(e)*1e3+36e5+l,d=Math.max(0,u-Number(a)*1e3);if(d===0)return`at max`;let f=Math.floor(d/1e3),p=Math.floor(f/3600),m=Math.floor(f%3600/60);return p>0?`+${p}h ${m}m`:m>0?`+${m}m ${f}s`:`+${f}.${Math.floor(d)%1e3}s`}async _approve(){let e=F[P],t=rd();if(!t||!I)return;let n=this._amountWei;if(n!==0n){this.approvePending=!0,this.error=``;try{let r=this.target===`vibecoin`?this.vibecoinAddress:e.game;await t.writeContract({address:e.shmon,abi:od,functionName:`approve`,args:[r,n],account:I.address,chain:t.chain}),this.approved=!0}catch(e){Cp(e)}finally{this.approvePending=!1}}}async _buy(){let e=F[P],t=rd();if(!t||!I)return;let n=this._amountWei;if(n!==0n){if(this.target===`seriesA`||this.target===`seriesB`){let e=this.target===`seriesA`?0:1,t=B.get(`game:phase`);if(t===void 0||t!==e){this.error=`${this.target===`seriesA`?`Insider`:`"Insider"`} round has already ended.`;return}let n=B.get(`game:phaseEndTime`)??0n,r=B.get(`meta:chainTimeDelta`)??0;if(n>0n&&Date.now()/1e3+r>=Number(n)){this.error=`${this.target===`seriesA`?`Insider`:`"Insider"`} round has already ended.`;return}}this.pending=!0,this.error=``;try{let r=Xd(Kd()??``),i;i=this.target===`vibecoinSell`?await t.writeContract({address:this.vibecoinAddress,abi:z,functionName:`sell`,args:[n,I.address],account:I.address,chain:t.chain}):this.useShMon?this.target===`seriesA`?await t.writeContract({address:e.game,abi:R,functionName:`depositSeriesAWithShMon`,args:[r,n],account:I.address,chain:t.chain}):this.target===`seriesB`?await t.writeContract({address:e.game,abi:R,functionName:`depositSeriesBWithShMon`,args:[r,n],account:I.address,chain:t.chain}):this.target===`publicBuy`?await t.writeContract({address:e.game,abi:R,functionName:`buyWithShMon`,args:[r,n],account:I.address,chain:t.chain}):await t.writeContract({address:this.vibecoinAddress,abi:z,functionName:`buyWithShMon`,args:[I.address,n,!0],account:I.address,chain:t.chain}):this.target===`seriesA`?await t.writeContract({address:e.game,abi:R,functionName:`depositSeriesA`,args:[r],value:n,account:I.address,chain:t.chain}):this.target===`seriesB`?await t.writeContract({address:e.game,abi:R,functionName:`depositSeriesB`,args:[r],value:n,account:I.address,chain:t.chain}):this.target===`publicBuy`?await t.writeContract({address:e.game,abi:R,functionName:`buy`,args:[r],value:n,account:I.address,chain:t.chain}):await t.writeContract({address:this.vibecoinAddress,abi:z,functionName:`buy`,args:[I.address,!0],value:n,account:I.address,chain:t.chain}),await Promise.all([U.refresh(),U.refreshUser()]),this._close(),Sp(i,this._actionLabel())}catch(e){Cp(e)}finally{this.pending=!1}}}_actionLabel(){let e=Md(this._amountWei);switch(this.target){case`seriesA`:return`Insider deposit — ${e}`;case`seriesB`:return`"Insider" deposit — ${e}`;case`publicBuy`:return`Pump — ${e}`;case`vibecoin`:return`Bought ${this._vcSymbol} — ${e}`;case`vibecoinSell`:return`Sold ${this._vcSymbol} — ${Pd(this._amountWei,this._vcSymbol)}`}}_renderPreview(){let e=this._amountWei;if(this.target===`vibecoinSell`)return G`
        <div class="preview">
          <div class="preview-row">
            <span class="key">SHMON RECEIVED (EST)</span>
            <span class="val accent">${e>0n?Md(this._sellShMonPreview):`—`}</span>
          </div>
          <div class="fee-section">
            <div class="preview-row">
              <span class="key">DIVIDEND CUT</span>
              <span class="val">${e>0n&&this._sellShMonPreview>0n?`10% · ${Md(this._sellShMonPreview/9n)}`:`10%`}</span>
            </div>
          </div>
        </div>
      `;let t=this._getFeeBreakdown(),n=this._computeTokenPreview(),r=this.target===`vibecoin`?10000n:t.find(([e])=>e===`Vibecoin`)?.[1]??6600n,i=this.target===`vibecoin`?e:e*r/10000n,a=n>0n?i*10n**18n/n:0n,o=this.target===`seriesA`||this.target===`seriesB`,s=this._refCode,c=n*(this.target===`vibecoin`?t.find(([e])=>e===`To buyer`)?.[1]??9000n:10000n)/10000n,l=e*(this.target===`vibecoin`?10000n:t.find(([e])=>e===`Vibecoins minted`||e===`Vibecoin mint`)?.[1]??6600n)/10000n,u=kd(),d=this.useShMon?l:l*10n**18n/u,f=(this.target===`seriesA`?B.get(`game:totalSeriesA`)??0n:B.get(`game:totalSeriesB`)??0n)+d,p=d>0n&&f>0n?(Number(d*10000n/f)/100).toFixed(2):null,m=this.target===`seriesA`?`insider buy-in`:`"insider" buy-in`;return G`
      <div class="preview">
        ${o?G`
          <div class="preview-row">
            <span class="key">TOKENS</span>
            <span class="val">Allocated on Vibecoin generation</span>
          </div>
          <div class="preview-row">
            <span class="key">YOUR POOL SHARE</span>
            <span class="val accent">${p===null?`—`:`${p}% of ${m}`}</span>
          </div>
        `:G`
          <div class="preview-row">
            <span class="key">YOU RECEIVE (EST)</span>
            <span class="val accent">${c>0n?Pd(c,this._vcSymbol):`—`}</span>
          </div>
          <div class="preview-row">
            <span class="key">EFFECTIVE PRICE</span>
            <span class="val">${a>0n?`${Md(a,6)} / \$${this._vcSymbol}`:`—`}</span>
          </div>
        `}

        ${this.target===`publicBuy`?G`
          <div class="preview-row">
            <span class="key">TIMER EXTENSION</span>
            <span class="val">${this._computeTimerExtension()}</span>
          </div>
        `:``}

        <div class="fee-section">
          ${t.map(([t,r])=>{let i=this.target===`vibecoin`&&n>0n?` · ${Pd(n*r/10000n,this._vcSymbol)}`:this.target!==`vibecoin`&&e>0n?` · ${this.useShMon?Md(e*r/10000n):jd(e*r/10000n)}`:``;return G`
              <div class="preview-row">
                <span class="key">${t.toUpperCase()}</span>
                <span class="val">${Number(r)/100}%${i}</span>
              </div>
            `})}
        </div>
      </div>

      ${s?G`
        <div class="referral-note">
          REFERRAL: <span>${s}</span>
        </div>
      `:``}
    `}render(){if(!this.visible)return G``;let e=this.target===`vibecoinSell`,t=!e&&this.useShMon,n=!!I,r=this.target===`seriesA`||this.target===`seriesB`,i=e?this._tokenBalance:0n;return G`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="modal">
          <button class="close-btn" @click=${this._close}>✕</button>
          <div class="title">${this._getTitle()}</div>
          ${this._loading?G`
            <div class="loading-body">
              <div class="spinner"></div>
              <div class="loading-label">LOADING</div>
            </div>
          `:G`

          <div class="field">
            <label style="display:flex;justify-content:space-between">
              <span>${e?`TOKENS TO SELL`:`AMOUNT`}</span>
              ${e&&i>0n?G`<span style="color:#d8d8e8">BAL: ${Pd(i,this._vcSymbol)}</span>`:``}
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
              ${e?G`
                <button
                  style="
                    font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:1px;
                    padding:10px 10px;border:1px solid #1a1a30;background:#060608;
                    color:#ff2d6b;cursor:pointer;white-space:nowrap;
                  "
                  @click=${()=>{this.amountStr=(Number(i)/0xde0b6b3a7640000).toString(),this._updateSellPreview()}}
                >MAX</button>
              `:G`
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

          ${t&&!this.approved?G`
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

          ${this.error?G`<div class="error">${this.error}</div>`:``}
          `}
        </div>
      </div>
    `}};Z([X()],$.prototype,`visible`,void 0),Z([X()],$.prototype,`_loading`,void 0),Z([X()],$.prototype,`target`,void 0),Z([X()],$.prototype,`vibecoinAddress`,void 0),Z([X()],$.prototype,`amountStr`,void 0),Z([X()],$.prototype,`useShMon`,void 0),Z([X()],$.prototype,`pending`,void 0),Z([X()],$.prototype,`approvePending`,void 0),Z([X()],$.prototype,`approved`,void 0),Z([X()],$.prototype,`error`,void 0),Z([X()],$.prototype,`_sellShMonPreview`,void 0),Z([X()],$.prototype,`_tokenBalance`,void 0),$=Z([J(`buy-dialog`)],$);var $p=`disclaimer-accepted-v1`,em=class extends q{constructor(...e){super(...e),this.open=!localStorage.getItem($p)}_accept(){localStorage.setItem($p,`1`),this.open=!1}static{this.styles=W`
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
  `}_renderContent(){return G`
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
      `}render(){if(!this.open)return G``;let e={10143:`TESTNET — HEADS UP`,143:`DISCLAIMER`}[10143]??`YOU FOUND THE DEV BUILD`,t={10143:`GOT IT — LET ME PLAY`,143:`I ACCEPT — LET ME PLAY`}[10143]??`LETS GO`;return G`
      <div class="overlay">
        <div class="dialog">
          <div class="title">${e}</div>
          ${this._renderContent()}
          <hr class="divider"/>
          <button class="accept-btn" @click=${this._accept}>${t}</button>
        </div>
      </div>
    `}};Z([X()],em.prototype,`open`,void 0),em=Z([J(`disclaimer-modal`)],em);var tm=class extends q{constructor(...e){super(...e),this.tab=`pump`,this._handleHash=()=>{Yd();let e=window.location.hash.split(`?`)[0];e===`#vibecoins`||e.startsWith(`#vibecoins/`)?this.tab=`vibecoins`:this.tab=`pump`},this._onWalletChanged=()=>{U.refreshUser(),this.requestUpdate()},this._onOpenBuyDialog=e=>{let t=this.renderRoot?.querySelector(`buy-dialog`);t&&typeof t.open==`function`&&t.open(e.detail)}}static{this.styles=W`
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
  `}connectedCallback(){super.connectedCallback(),this._handleHash(),window.addEventListener(`hashchange`,this._handleHash),Hu.addEventListener(`wallet-changed`,this._onWalletChanged),window.addEventListener(`open-buy-dialog`,this._onOpenBuyDialog),U.start(),U.refreshUser()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,this._handleHash),Hu.removeEventListener(`wallet-changed`,this._onWalletChanged),window.removeEventListener(`open-buy-dialog`,this._onOpenBuyDialog)}render(){return G`
      <header-bar></header-bar>
      <main>
        ${this.tab===`pump`?G`<pump-tab></pump-tab>`:``}
        ${this.tab===`vibecoins`?G`<vibecoins-tab></vibecoins-tab>`:``}
      </main>
      <buy-dialog></buy-dialog>
      <tx-confirm-dialog></tx-confirm-dialog>
      <disclaimer-modal></disclaimer-modal>
    `}};Z([X()],tm.prototype,`tab`,void 0),tm=Z([J(`app-root`)],tm);function nm(e){let t=e instanceof Error?e.message:String(e),n=e instanceof Error?e.stack??e.message:String(e);window.dispatchEvent(new CustomEvent(`app-error-show`,{detail:{short:t,full:n,name:`UNCAUGHT ERROR`}}))}window.addEventListener(`error`,e=>nm(e.error??e.message)),window.addEventListener(`unhandledrejection`,e=>nm(e.reason));