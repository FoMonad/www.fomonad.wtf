import{$ as e,$t as t,A as n,An as r,At as i,B as a,Bn as o,Bt as s,C as c,Cn as l,Ct as u,D as d,Dn as f,Dt as p,E as m,En as h,Et as g,F as _,Fn as v,Ft as y,G as b,Gn as x,Gt as S,H as C,Hn as w,Ht as ee,I as te,In as ne,It as re,J as ie,Jn as ae,K as T,Kn as oe,Kt as se,L as ce,Ln as le,M as E,Mn as ue,Mt as de,N as fe,Nn as pe,Nt as me,O as he,On as ge,Ot as _e,P as ve,Pn as ye,Pt as be,Q as xe,Qt as D,R as Se,Rn as Ce,Rt as we,S as Te,Sn as Ee,St as De,T as Oe,Tn as ke,Tt as Ae,U as je,Un as Me,Ut as Ne,V as Pe,Vn as Fe,Vt as Ie,W as Le,Wn as Re,Wt as ze,X as Be,Xt as Ve,Y as He,Yt as Ue,Z as We,Zt as Ge,_ as Ke,_n as qe,_t as Je,a as Ye,an as Xe,at as Ze,b as Qe,bn as O,bt as $e,c as et,cn as tt,ct as nt,d as rt,dn as it,dt as at,en as ot,et as st,f as ct,fn as lt,ft as ut,g as dt,gn as ft,gt as pt,h as mt,hn as ht,ht as gt,i as _t,in as vt,it as yt,j as bt,jn as xt,jt as St,k as Ct,kn as wt,kt as Tt,l as Et,ln as Dt,lt as Ot,m as kt,mn as k,mt as At,nn as jt,nt as Mt,o as Nt,on as Pt,ot as Ft,p as It,pn as Lt,pt as Rt,q as zt,qn as Bt,qt as A,r as Vt,rn as Ht,rt as Ut,s as Wt,sn as Gt,st as Kt,tn as qt,tt as Jt,u as Yt,un as Xt,ut as Zt,v as Qt,vn as $t,vt as en,w as tn,wn as nn,wt as rn,x as an,xn as on,xt as sn,y as cn,yn as ln,yt as un,z as dn,zn as fn,zt as pn}from"./localBatchGatewayRequest-BDnqlmbC.js";import{A as mn,C as hn,D as gn,E as _n,F as vn,M as yn,N as bn,O as xn,S as Sn,T as Cn,V as wn,_ as Tn,a as En,b as Dn,c as On,d as kn,f as An,g as jn,h as Mn,i as Nn,k as Pn,l as Fn,m as In,n as Ln,o as Rn,p as zn,r as Bn,s as Vn,t as Hn,u as Un,v as Wn,w as Gn,x as Kn,y as qn}from"./utils-B0Fw2xa_.js";var Jn=Object.defineProperty,Yn=(e,t)=>{let n={};for(var r in e)Jn(n,r,{get:e[r],enumerable:!0});return t||Jn(n,Symbol.toStringTag,{value:`Module`}),n};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function Xn(e){let t;if(typeof e==`string`)t=Fe(e);else{let n=fn(e),r=e.length;for(let i=0;i<r;i++){let r=e[i];if(!x(r)){t=Fe(r,n);break}}}if(!t)throw new Re({signature:e});return t}function Zn(e){let t=[];if(typeof e==`string`){let n=w(e),r=n.length;for(let e=0;e<r;e++)t.push(o(n[e],{modifiers:oe}))}else{let n=fn(e),r=e.length;for(let i=0;i<r;i++){let r=e[i];if(x(r))continue;let a=w(r),s=a.length;for(let e=0;e<s;e++)t.push(o(a[e],{modifiers:oe,structs:n}))}}if(t.length===0)throw new Me({params:e});return t}function j(e,t,n){let r=e[t.name];if(typeof r==`function`)return r;let i=e[n];return typeof i==`function`?i:n=>t(e,n)}var Qn=class extends v{constructor(e){super(`Filter type "${e}" is not supported.`,{name:`FilterTypeNotSupportedError`})}},$n=`/docs/contract/encodeEventTopics`;function er(e){let{abi:t,eventName:n,args:r}=e,i=t[0];if(n){let e=ot({abi:t,name:n});if(!e)throw new wt(n,{docsPath:$n});i=e}if(i.type!==`event`)throw new wt(void 0,{docsPath:$n});let a=Lt(Ce(i)),o=[];if(r&&`inputs`in i){let e=i.inputs?.filter(e=>`indexed`in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(o=e?.map((e,n)=>Array.isArray(t[n])?t[n].map((r,i)=>tr({param:e,value:t[n][i]})):t[n]!==void 0&&t[n]!==null?tr({param:e,value:t[n]}):null)??[])}return[a,...o]}function tr({param:e,value:t}){if(e.type===`string`||e.type===`bytes`)return k($t(t));if(e.type===`tuple`||e.type.match(/^(.*)\[(\d+)?\]$/))throw new Qn(e.type);return qt([e],[t])}function nr(e,{method:t}){let n={};return e.transport.type===`fallback`&&e.transport.onResponse?.(({method:e,response:r,status:i,transport:a})=>{i===`success`&&t===e&&(n[r]=a.request)}),(t=>n[t]||e.request)}async function rr(e,t){let{address:n,abi:r,args:i,eventName:a,fromBlock:o,strict:s,toBlock:c}=t,l=nr(e,{method:`eth_newFilter`}),u=a?er({abi:r,args:i,eventName:a}):void 0,d=await e.request({method:`eth_newFilter`,params:[{address:n,fromBlock:typeof o==`bigint`?O(o):o,toBlock:typeof c==`bigint`?O(c):c,topics:u}]});return{abi:r,args:i,eventName:a,id:d,request:l(d),strict:!!s,type:`event`}}var ir=3;function ar(e,{abi:t,address:n,args:r,docsPath:a,functionName:o,sender:s}){let c=e instanceof re?e:e instanceof v?e.walk(e=>`data`in e)||e.walk():{},{code:l,data:u,details:d,message:f,shortMessage:p}=c;return new me(e instanceof ge?new y({functionName:o}):[ir,Kt.code].includes(l)&&(u||d||f||p)||l===nt.code&&d===`execution reverted`&&u?new be({abi:t,data:typeof u==`object`?u.data:u,functionName:o,message:c instanceof i?d:p??f}):e,{abi:t,args:r,contractAddress:n,docsPath:a,functionName:o,sender:s})}function or(e){return Dt(`0x${k(`0x${e.substring(4)}`).substring(26)}`)}async function sr({hash:e,signature:t}){let n=le(e)?e:Ee(e),{secp256k1:r}=await Jt(async()=>{let{secp256k1:e}=await Promise.resolve().then(()=>Ac);return{secp256k1:e}},void 0,import.meta.url);return`0x${(()=>{if(typeof t==`object`&&`r`in t&&`s`in t){let{r:e,s:n,v:i,yParity:a}=t,o=cr(Number(a??i));return new r.Signature(l(e),l(n)).addRecoveryBit(o)}let e=le(t)?t:Ee(t);if(ne(e)!==65)throw Error(`invalid signature length`);let n=cr(ke(`0x${e.slice(130)}`));return r.Signature.fromCompact(e.substring(2,130)).addRecoveryBit(n)})().recoverPublicKey(n.substring(2)).toHex(!1)}`}function cr(e){if(e===0||e===1)return e;if(e===27)return 0;if(e===28)return 1;throw Error(`Invalid yParityOrV value`)}async function lr({hash:e,signature:t}){return or(await sr({hash:e,signature:t}))}function ur(e,t=`hex`){let n=dr(e),r=Ve(new Uint8Array(n.length));return n.encode(r),t===`hex`?ln(r.bytes):r.bytes}function dr(e){return Array.isArray(e)?fr(e.map(e=>dr(e))):pr(e)}function fr(e){let t=e.reduce((e,t)=>e+t.length,0),n=mr(t);return{length:t<=55?1+t:1+n+t,encode(r){t<=55?r.pushByte(192+t):(r.pushByte(247+n),n===1?r.pushUint8(t):n===2?r.pushUint16(t):n===3?r.pushUint24(t):r.pushUint32(t));for(let{encode:t}of e)t(r)}}}function pr(e){let t=typeof e==`string`?ft(e):e,n=mr(t.length);return{length:t.length===1&&t[0]<128?1:t.length<=55?1+t.length:1+n+t.length,encode(e){t.length===1&&t[0]<128?e.pushBytes(t):t.length<=55?(e.pushByte(128+t.length),e.pushBytes(t)):(e.pushByte(183+n),n===1?e.pushUint8(t.length):n===2?e.pushUint16(t.length):n===3?e.pushUint24(t.length):e.pushUint32(t.length),e.pushBytes(t))}}}function mr(e){if(e<2**8)return 1;if(e<2**16)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new v(`Length is too large.`)}function hr(e){let{chainId:t,nonce:n,to:r}=e,i=e.contractAddress??e.address,a=k(Gt([`0x05`,ur([t?O(t):`0x`,i,n?O(n):`0x`])]));return r===`bytes`?ft(a):a}async function gr(e){let{authorization:t,signature:n}=e;return lr({hash:hr(t),signature:n??t})}var _r=class extends v{constructor(e,{account:t,docsPath:n,chain:r,data:i,gas:a,gasPrice:o,maxFeePerGas:s,maxPriorityFeePerGas:c,nonce:l,to:u,value:d}){let f=ze({from:t?.address,to:u,value:d!==void 0&&`${se(d)} ${r?.nativeCurrency?.symbol||`ETH`}`,data:i,gas:a,gasPrice:o!==void 0&&`${S(o)} gwei`,maxFeePerGas:s!==void 0&&`${S(s)} gwei`,maxPriorityFeePerGas:c!==void 0&&`${S(c)} gwei`,nonce:l});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages,` `]:[],`Estimate Gas Arguments:`,f].filter(Boolean),name:`EstimateGasExecutionError`}),Object.defineProperty(this,`cause`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cause=e}};function vr(t,{docsPath:n,...r}){return new _r((()=>{let n=e(t,r);return n instanceof st?t:n})(),{docsPath:n,...r})}var yr=class extends v{constructor(){super("`baseFeeMultiplier` must be greater than 1.",{name:`BaseFeeScalarError`})}},br=class extends v{constructor(){super(`Chain does not support EIP-1559 fees.`,{name:`Eip1559FeesNotSupportedError`})}},xr=class extends v{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${S(e)} gwei).`,{name:`MaxFeePerGasTooLowError`})}},Sr=class extends v{constructor({blockHash:e,blockNumber:t}){let n=`Block`;e&&(n=`Block at hash "${e}"`),t&&(n=`Block at number "${t}"`),super(`${n} could not be found.`,{name:`BlockNotFoundError`})}},Cr={"0x0":`legacy`,"0x1":`eip2930`,"0x2":`eip1559`,"0x3":`eip4844`,"0x4":`eip7702`};function wr(e,t){let n={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?ke(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?ke(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?Cr[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return e.authorizationList&&(n.authorizationList=Tr(e.authorizationList)),n.yParity=(()=>{if(e.yParity)return Number(e.yParity);if(typeof n.v==`bigint`){if(n.v===0n||n.v===27n)return 0;if(n.v===1n||n.v===28n)return 1;if(n.v>=35n)return+(n.v%2n==0n)}})(),n.type===`legacy`&&(delete n.accessList,delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas,delete n.yParity),n.type===`eip2930`&&(delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas),n.type===`eip1559`&&delete n.maxFeePerBlobGas,n}function Tr(e){return e.map(e=>({address:e.address,chainId:Number(e.chainId),nonce:Number(e.nonce),r:e.r,s:e.s,yParity:Number(e.yParity)}))}function Er(e,t){let n=(e.transactions??[]).map(e=>typeof e==`string`?e:wr(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:n,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}async function Dr(e,{blockHash:t,blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`,includeTransactions:i}={}){let a=i??!1,o=n===void 0?void 0:O(n),s=null;if(s=t?await e.request({method:`eth_getBlockByHash`,params:[t,a]},{dedupe:!0}):await e.request({method:`eth_getBlockByNumber`,params:[o||r,a]},{dedupe:!!o}),!s)throw new Sr({blockHash:t,blockNumber:n});return(e.chain?.formatters?.block?.format||Er)(s,`getBlock`)}async function Or(e){let t=await e.request({method:`eth_gasPrice`});return BigInt(t)}async function kr(e,t){return Ar(e,t)}async function Ar(e,t){let{block:n,chain:r=e.chain,request:i}=t||{};try{let t=r?.fees?.maxPriorityFeePerGas??r?.fees?.defaultPriorityFee;if(typeof t==`function`){let r=await t({block:n||await j(e,Dr,`getBlock`)({}),client:e,request:i});if(r===null)throw Error();return r}return t===void 0?l(await e.request({method:`eth_maxPriorityFeePerGas`})):t}catch{let[t,r]=await Promise.all([n?Promise.resolve(n):j(e,Dr,`getBlock`)({}),j(e,Or,`getGasPrice`)({})]);if(typeof t.baseFeePerGas!=`bigint`)throw new br;let i=r-t.baseFeePerGas;return i<0n?0n:i}}async function jr(e,t){return Mr(e,t)}async function Mr(e,t){let{block:n,chain:r=e.chain,request:i,type:a=`eip1559`}=t||{},o=await(async()=>typeof r?.fees?.baseFeeMultiplier==`function`?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):r?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new yr;let s=10**(o.toString().split(`.`)[1]?.length??0),c=e=>e*BigInt(Math.ceil(o*s))/BigInt(s),l=n||await j(e,Dr,`getBlock`)({});if(typeof r?.fees?.estimateFeesPerGas==`function`){let t=await r.fees.estimateFeesPerGas({block:n,client:e,multiply:c,request:i,type:a});if(t!==null)return t}if(a===`eip1559`){if(typeof l.baseFeePerGas!=`bigint`)throw new br;let t=typeof i?.maxPriorityFeePerGas==`bigint`?i.maxPriorityFeePerGas:await Ar(e,{block:l,chain:r,request:i}),n=c(l.baseFeePerGas);return{maxFeePerGas:i?.maxFeePerGas??n+t,maxPriorityFeePerGas:t}}return{gasPrice:i?.gasPrice??c(await j(e,Or,`getGasPrice`)({}))}}async function Nr(e,{address:t,blockTag:n=`latest`,blockNumber:r}){return ke(await e.request({method:`eth_getTransactionCount`,params:[t,typeof r==`bigint`?O(r):n]},{dedupe:!!r}))}function Pr(e){let{kzg:t}=e,n=e.to??(typeof e.blobs[0]==`string`?`hex`:`bytes`),r=typeof e.blobs[0]==`string`?e.blobs.map(e=>ft(e)):e.blobs,i=[];for(let e of r)i.push(Uint8Array.from(t.blobToKzgCommitment(e)));return n===`bytes`?i:i.map(e=>ln(e))}function Fr(e){let{kzg:t}=e,n=e.to??(typeof e.blobs[0]==`string`?`hex`:`bytes`),r=typeof e.blobs[0]==`string`?e.blobs.map(e=>ft(e)):e.blobs,i=typeof e.commitments[0]==`string`?e.commitments.map(e=>ft(e)):e.commitments,a=[];for(let e=0;e<r.length;e++){let n=r[e],o=i[e];a.push(Uint8Array.from(t.computeBlobKzgProof(n,o)))}return n===`bytes`?a:a.map(e=>ln(e))}function Ir(e,t,n,r){if(typeof e.setBigUint64==`function`)return e.setBigUint64(t,n,r);let i=BigInt(32),a=BigInt(4294967295),o=Number(n>>i&a),s=Number(n&a),c=r?4:0,l=r?0:4;e.setUint32(t+c,o,r),e.setUint32(t+l,s,r)}function Lr(e,t,n){return e&t^~e&n}function Rr(e,t,n){return e&t^e&n^t&n}var zr=class extends Kn{constructor(e,t,n,r){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=mn(this.buffer)}update(e){hn(this),e=vn(e),Sn(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length;for(let a=0;a<i;){let o=Math.min(r-this.pos,i-a);if(o===r){let t=mn(e);for(;r<=i-a;a+=r)this.process(t,a);continue}n.set(e.subarray(a,a+o),this.pos),this.pos+=o,a+=o,this.pos===r&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){hn(this),_n(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,gn(this.buffer.subarray(a)),this.padOffset>r-a&&(this.process(n,0),a=0);for(let e=a;e<r;e++)t[e]=0;Ir(n,r-8,BigInt(this.length*8),i),this.process(n,0);let o=mn(e),s=this.outputLen;if(s%4)throw Error(`_sha2: outputLen should be aligned to 32bit`);let c=s/4,l=this.get();if(c>l.length)throw Error(`_sha2: outputLen bigger than state`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneInto(e){e||=new this.constructor,e.set(...this.get());let{blockLen:t,buffer:n,length:r,finished:i,destroyed:a,pos:o}=this;return e.destroyed=a,e.finished=i,e.length=r,e.pos=o,r%t&&e.buffer.set(n),e}clone(){return this._cloneInto()}},Br=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Vr=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Hr=new Uint32Array(64),Ur=class extends zr{constructor(e=32){super(64,e,8,!1),this.A=Br[0]|0,this.B=Br[1]|0,this.C=Br[2]|0,this.D=Br[3]|0,this.E=Br[4]|0,this.F=Br[5]|0,this.G=Br[6]|0,this.H=Br[7]|0}get(){let{A:e,B:t,C:n,D:r,E:i,F:a,G:o,H:s}=this;return[e,t,n,r,i,a,o,s]}set(e,t,n,r,i,a,o,s){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=s|0}process(e,t){for(let n=0;n<16;n++,t+=4)Hr[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=Hr[e-15],n=Hr[e-2],r=bn(t,7)^bn(t,18)^t>>>3;Hr[e]=(bn(n,17)^bn(n,19)^n>>>10)+Hr[e-7]+r+Hr[e-16]|0}let{A:n,B:r,C:i,D:a,E:o,F:s,G:c,H:l}=this;for(let e=0;e<64;e++){let t=bn(o,6)^bn(o,11)^bn(o,25),u=l+t+Lr(o,s,c)+Vr[e]+Hr[e]|0,d=(bn(n,2)^bn(n,13)^bn(n,22))+Rr(n,r,i)|0;l=c,c=s,s=o,o=a+u|0,a=i,i=r,r=n,n=u+d|0}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,s=s+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,a,o,s,c,l)}roundClean(){gn(Hr)}destroy(){this.set(0,0,0,0,0,0,0,0),gn(this.buffer)}},Wr=wn(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e)));Wr[0],Wr[1];var Gr=Pn(()=>new Ur),Kr=Gr;function qr(e,t){let n=t||`hex`,r=Kr(le(e,{strict:!1})?$t(e):e);return n===`bytes`?r:Ee(r)}function Jr(e){let{commitment:t,version:n=1}=e,r=e.to??(typeof t==`string`?`hex`:`bytes`),i=qr(t,`bytes`);return i.set([n],0),r===`bytes`?i:ln(i)}function Yr(e){let{commitments:t,version:n}=e,r=e.to??(typeof t[0]==`string`?`hex`:`bytes`),i=[];for(let e of t)i.push(Jr({commitment:e,to:r,version:n}));return i}var Xr=6,Zr=4096,Qr=32*Zr,$r=Qr*Xr-1-1*Zr*Xr,ei=class extends v{constructor({maxSize:e,size:t}){super(`Blob size is too large.`,{metaMessages:[`Max: ${e} bytes`,`Given: ${t} bytes`],name:`BlobSizeTooLargeError`})}},ti=class extends v{constructor(){super(`Blob data must not be empty.`,{name:`EmptyBlobError`})}};function ni(e){let t=e.to??(typeof e.data==`string`?`hex`:`bytes`),n=typeof e.data==`string`?ft(e.data):e.data,r=ne(n);if(!r)throw new ti;if(r>761855)throw new ei({maxSize:$r,size:r});let i=[],a=!0,o=0;for(;a;){let e=Ve(new Uint8Array(Qr)),t=0;for(;t<Zr;){let r=n.slice(o,o+31);if(e.pushByte(0),e.pushBytes(r),r.length<31){e.pushByte(128),a=!1;break}t++,o+=31}i.push(e)}return t===`bytes`?i.map(e=>e.bytes):i.map(e=>ln(e.bytes))}function ri(e){let{data:t,kzg:n,to:r}=e,i=e.blobs??ni({data:t,to:r}),a=e.commitments??Pr({blobs:i,kzg:n,to:r}),o=e.proofs??Fr({blobs:i,commitments:a,kzg:n,to:r}),s=[];for(let e=0;e<i.length;e++)s.push({blob:i[e],commitment:a[e],proof:o[e]});return s}function ii(e){if(e.type)return e.type;if(e.authorizationList!==void 0)return`eip7702`;if(e.blobs!==void 0||e.blobVersionedHashes!==void 0||e.maxFeePerBlobGas!==void 0||e.sidecars!==void 0)return`eip4844`;if(e.maxFeePerGas!==void 0||e.maxPriorityFeePerGas!==void 0)return`eip1559`;if(e.gasPrice!==void 0)return e.accessList===void 0?`legacy`:`eip2930`;throw new we({transaction:e})}function ai(t,{docsPath:n,...r}){return new pn((()=>{let n=e(t,r);return n instanceof st?t:n})(),{docsPath:n,...r})}async function oi(e){return ke(await e.request({method:`eth_chainId`},{dedupe:!0}))}async function si(e,n){let{account:r=e.account,accessList:i,authorizationList:a,chain:o=e.chain,blobVersionedHashes:s,blobs:c,data:l,gas:u,gasPrice:d,maxFeePerBlobGas:f,maxFeePerGas:p,maxPriorityFeePerGas:m,nonce:h,nonceManager:g,to:_,type:v,value:y,...b}=n,x=await(async()=>{if(!r||!g||h!==void 0)return h;let n=t(r),i=o?o.id:await j(e,oi,`getChainId`)({});return await g.consume({address:n.address,chainId:i,client:e})})();He(n);let S=o?.formatters?.transactionRequest?.format,C=(S||We)({...xe(b,{format:S}),account:r?t(r):void 0,accessList:i,authorizationList:a,blobs:c,blobVersionedHashes:s,data:l,gas:u,gasPrice:d,maxFeePerBlobGas:f,maxFeePerGas:p,maxPriorityFeePerGas:m,nonce:x,to:_,type:v,value:y},`fillTransaction`);try{let t=await e.request({method:`eth_fillTransaction`,params:[C]}),r=(o?.formatters?.transaction?.format||wr)(t.tx);delete r.blockHash,delete r.blockNumber,delete r.r,delete r.s,delete r.transactionIndex,delete r.v,delete r.yParity,r.data=r.input,r.gas&&=n.gas??r.gas,r.gasPrice&&=n.gasPrice??r.gasPrice,r.maxFeePerBlobGas&&=n.maxFeePerBlobGas??r.maxFeePerBlobGas,r.maxFeePerGas&&=n.maxFeePerGas??r.maxFeePerGas,r.maxPriorityFeePerGas&&=n.maxPriorityFeePerGas??r.maxPriorityFeePerGas,r.nonce&&=n.nonce??r.nonce;let i=await(async()=>{if(typeof o?.fees?.baseFeeMultiplier==`function`){let t=await j(e,Dr,`getBlock`)({});return o.fees.baseFeeMultiplier({block:t,client:e,request:n})}return o?.fees?.baseFeeMultiplier??1.2})();if(i<1)throw new yr;let a=10**(i.toString().split(`.`)[1]?.length??0),s=e=>e*BigInt(Math.ceil(i*a))/BigInt(a);return r.maxFeePerGas&&!n.maxFeePerGas&&(r.maxFeePerGas=s(r.maxFeePerGas)),r.gasPrice&&!n.gasPrice&&(r.gasPrice=s(r.gasPrice)),{raw:t.raw,transaction:{from:C.from,...r}}}catch(t){throw ai(t,{...n,chain:e.chain})}}var ci=[`blobVersionedHashes`,`chainId`,`fees`,`gas`,`nonce`,`type`],li=new Map,ui=new it(128);async function di(e,n){let r=n;r.account??=e.account,r.parameters??=ci;let{account:i,chain:a=e.chain,nonceManager:o,parameters:s}=r,c=(()=>{if(typeof a?.prepareTransactionRequest==`function`)return{fn:a.prepareTransactionRequest,runAt:[`beforeFillTransaction`]};if(Array.isArray(a?.prepareTransactionRequest))return{fn:a.prepareTransactionRequest[0],runAt:a.prepareTransactionRequest[1].runAt}})(),l;async function u(){return l||(r.chainId===void 0?a?a.id:(l=await j(e,oi,`getChainId`)({}),l):r.chainId)}let d=i&&t(i),f=r.nonce;if(s.includes(`nonce`)&&f===void 0&&d&&o){let t=await u();f=await o.consume({address:d.address,chainId:t,client:e})}c?.fn&&c.runAt?.includes(`beforeFillTransaction`)&&(r=await c.fn({...r,chain:a},{phase:`beforeFillTransaction`}),f??=r.nonce);let p=!((s.includes(`blobVersionedHashes`)||s.includes(`sidecars`))&&r.kzg&&r.blobs||ui.get(e.uid)===!1||![`fees`,`gas`].some(e=>s.includes(e)))&&(s.includes(`chainId`)&&typeof r.chainId!=`number`||s.includes(`nonce`)&&typeof f!=`number`||s.includes(`fees`)&&typeof r.gasPrice!=`bigint`&&(typeof r.maxFeePerGas!=`bigint`||typeof r.maxPriorityFeePerGas!=`bigint`)||s.includes(`gas`)&&typeof r.gas!=`bigint`)?await j(e,si,`fillTransaction`)({...r,nonce:f}).then(t=>{let{chainId:n,from:i,gas:a,gasPrice:o,nonce:s,maxFeePerBlobGas:c,maxFeePerGas:l,maxPriorityFeePerGas:u,type:d,...f}=t.transaction;return ui.set(e.uid,!0),{...r,...i?{from:i}:{},...d&&!r.type?{type:d}:{},...n===void 0?{}:{chainId:n},...a===void 0?{}:{gas:a},...o===void 0?{}:{gasPrice:o},...s===void 0?{}:{nonce:s},...c!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxFeePerBlobGas:c}:{},...l!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxFeePerGas:l}:{},...u!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxPriorityFeePerGas:u}:{},...`nonceKey`in f&&f.nonceKey!==void 0?{nonceKey:f.nonceKey}:{}}}).catch(t=>{let n=t;return n.name===`TransactionExecutionError`&&n.walk?.(e=>{let t=e;return t.name===`MethodNotFoundRpcError`||t.name===`MethodNotSupportedRpcError`})&&ui.set(e.uid,!1),r}):r;f??=p.nonce,r={...p,...d?{from:d?.address}:{},...f?{nonce:f}:{}};let{blobs:m,gas:h,kzg:g,type:_}=r;c?.fn&&c.runAt?.includes(`beforeFillParameters`)&&(r=await c.fn({...r,chain:a},{phase:`beforeFillParameters`}));let v;async function y(){return v||(v=await j(e,Dr,`getBlock`)({blockTag:`latest`}),v)}if(s.includes(`nonce`)&&f===void 0&&d&&!o&&(r.nonce=await j(e,Nr,`getTransactionCount`)({address:d.address,blockTag:`pending`})),(s.includes(`blobVersionedHashes`)||s.includes(`sidecars`))&&m&&g){let e=Pr({blobs:m,kzg:g});if(s.includes(`blobVersionedHashes`)){let t=Yr({commitments:e,to:`hex`});r.blobVersionedHashes=t}if(s.includes(`sidecars`)){let t=ri({blobs:m,commitments:e,proofs:Fr({blobs:m,commitments:e,kzg:g}),to:`hex`});r.sidecars=t}}if(s.includes(`chainId`)&&(r.chainId=await u()),(s.includes(`fees`)||s.includes(`type`))&&_===void 0)try{r.type=ii(r)}catch{let t=li.get(e.uid);t===void 0&&(t=typeof(await y())?.baseFeePerGas==`bigint`,li.set(e.uid,t)),r.type=t?`eip1559`:`legacy`}if(s.includes(`fees`))if(r.type!==`legacy`&&r.type!==`eip2930`){if(r.maxFeePerGas===void 0||r.maxPriorityFeePerGas===void 0){let{maxFeePerGas:t,maxPriorityFeePerGas:n}=await Mr(e,{block:await y(),chain:a,request:r});if(r.maxPriorityFeePerGas===void 0&&r.maxFeePerGas&&r.maxFeePerGas<n)throw new xr({maxPriorityFeePerGas:n});r.maxPriorityFeePerGas=n,r.maxFeePerGas=t}}else{if(r.maxFeePerGas!==void 0||r.maxPriorityFeePerGas!==void 0)throw new br;if(r.gasPrice===void 0){let{gasPrice:t}=await Mr(e,{block:await y(),chain:a,request:r,type:`legacy`});r.gasPrice=t}}return s.includes(`gas`)&&h===void 0&&(r.gas=await j(e,fi,`estimateGas`)({...r,account:d,prepare:d?.type===`local`?[]:[`blobVersionedHashes`]})),c?.fn&&c.runAt?.includes(`afterFillParameters`)&&(r=await c.fn({...r,chain:a},{phase:`afterFillParameters`})),He(r),delete r.parameters,r}async function fi(e,n){let{account:r=e.account,prepare:i=!0}=n,a=r?t(r):void 0,o=(()=>{if(Array.isArray(i))return i;if(a?.type!==`local`)return[`blobVersionedHashes`]})();try{let t=await(async()=>{if(n.to)return n.to;if(n.authorizationList&&n.authorizationList.length>0)return await gr({authorization:n.authorizationList[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`")})})(),{accessList:r,authorizationList:s,blobs:c,blobVersionedHashes:l,blockNumber:u,blockTag:d,data:f,gas:p,gasPrice:m,maxFeePerBlobGas:h,maxFeePerGas:g,maxPriorityFeePerGas:_,nonce:y,value:b,stateOverride:x,...S}=i?await di(e,{...n,parameters:o,to:t}):n;if(p&&n.gas!==p)return p;let C=(typeof u==`bigint`?O(u):void 0)||d,w=Be(x);He(n);let ee=e.chain?.formatters?.transactionRequest?.format,te=(ee||We)({...xe(S,{format:ee}),account:a,accessList:r,authorizationList:s,blobs:c,blobVersionedHashes:l,data:f,gasPrice:m,maxFeePerBlobGas:h,maxFeePerGas:g,maxPriorityFeePerGas:_,nonce:y,to:t,value:b},`estimateGas`);return BigInt(await e.request({method:`eth_estimateGas`,params:w?[te,C??e.experimental_blockTag??`latest`,w]:C?[te,C]:[te]}))}catch(t){throw vr(t,{...n,account:a,chain:e.chain})}}async function pi(e,n){let{abi:r,address:i,args:a,functionName:o,dataSuffix:s=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,...c}=n,l=D({abi:r,args:a,functionName:o});try{return await j(e,fi,`estimateGas`)({data:`${l}${s?s.replace(`0x`,``):``}`,to:i,...c})}catch(e){throw ar(e,{abi:r,address:i,args:a,docsPath:`/docs/contract/estimateContractGas`,functionName:o,sender:(c.account?t(c.account):void 0)?.address})}}function mi(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,blockTimestamp:e.blockTimestamp?BigInt(e.blockTimestamp):e.blockTimestamp===null?null:void 0,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}var hi=`/docs/contract/decodeEventLog`;function gi(e){let{abi:t,data:n,strict:i,topics:a}=e,o=i??!0,[s,...c]=a;if(!s)throw new r({docsPath:hi});let l=t.find(e=>e.type===`event`&&s===Lt(Ce(e)));if(!(l&&`name`in l)||l.type!==`event`)throw new xt(s,{docsPath:hi});let{name:u,inputs:d}=l,p=d?.some(e=>!(`name`in e&&e.name)),m=p?[]:{},h=d.map((e,t)=>[e,t]).filter(([e])=>`indexed`in e&&e.indexed),g=[];for(let e=0;e<h.length;e++){let[t,n]=h[e],r=c[e];if(!r){if(o)throw new ye({abiItem:l,param:t});g.push([t,n]);continue}m[p?n:t.name||n]=_i({param:t,value:r})}let _=d.filter(e=>!(`indexed`in e&&e.indexed)),v=o?_:[...g.map(([e])=>e),..._];if(v.length>0){if(n&&n!==`0x`)try{let e=Ue(v,n);if(e){let t=0;if(!o)for(let[n,r]of g)m[p?r:n.name||r]=e[t++];if(p)for(let n=0;n<d.length;n++)m[n]===void 0&&t<e.length&&(m[n]=e[t++]);else for(let n=0;n<_.length;n++)m[_[n].name]=e[t++]}}catch(e){if(o)throw e instanceof f||e instanceof Ge?new pe({abiItem:l,data:n,params:v,size:ne(n)}):e}else if(o)throw new pe({abiItem:l,data:`0x`,params:v,size:0})}return{eventName:u,args:Object.values(m).length>0?m:void 0}}function _i({param:e,value:t}){return e.type===`string`||e.type===`bytes`||e.type===`tuple`||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(Ue([e],t)||[])[0]}function vi(e){let{abi:t,args:n,logs:r,strict:i=!0}=e,a=(()=>{if(e.eventName)return Array.isArray(e.eventName)?e.eventName:[e.eventName]})(),o=t.filter(e=>e.type===`event`).map(e=>({abi:e,selector:Lt(e)}));return r.map(e=>{let t=typeof e.blockNumber==`string`?mi(e):e,r=o.filter(e=>t.topics[0]===e.selector);if(r.length===0)return null;let s,c;for(let e of r)try{s=gi({...t,abi:[e.abi],strict:!0}),c=e;break}catch{}if(!s&&!i){c=r[0];try{s=gi({data:t.data,topics:t.topics,abi:[c.abi],strict:!1})}catch{let e=c.abi.inputs?.some(e=>!(`name`in e&&e.name));return{...t,args:e?[]:{},eventName:c.abi.name}}}return!s||!c||a&&!a.includes(s.eventName)||!yi({args:s.args,inputs:c.abi.inputs,matchArgs:n})?null:{...s,...t}}).filter(Boolean)}function yi(e){let{args:t,inputs:n,matchArgs:r}=e;if(!r)return!0;if(!t)return!1;function i(e,t,n){try{return e.type===`address`?ie(t,n):e.type===`string`||e.type===`bytes`?k($t(t))===n:t===n}catch{return!1}}return Array.isArray(t)&&Array.isArray(r)?r.every((e,r)=>{if(e==null)return!0;let a=n[r];return a?(Array.isArray(e)?e:[e]).some(e=>i(a,e,t[r])):!1}):typeof t==`object`&&!Array.isArray(t)&&typeof r==`object`&&!Array.isArray(r)?Object.entries(r).every(([e,r])=>{if(r==null)return!0;let a=n.find(t=>t.name===e);return a?(Array.isArray(r)?r:[r]).some(n=>i(a,n,t[e])):!1}):!1}async function bi(e,{address:t,blockHash:n,fromBlock:r,toBlock:i,event:a,events:o,args:s,strict:c}={}){let l=c??!1,u=o??(a?[a]:void 0),d=[];u&&(d=[u.flatMap(e=>er({abi:[e],eventName:e.name,args:o?void 0:s}))],a&&(d=d[0]));let f;f=n?await e.request({method:`eth_getLogs`,params:[{address:t,topics:d,blockHash:n}]}):await e.request({method:`eth_getLogs`,params:[{address:t,topics:d,fromBlock:typeof r==`bigint`?O(r):r,toBlock:typeof i==`bigint`?O(i):i}]});let p=f.map(e=>mi(e));return u?vi({abi:u,args:s,logs:p,strict:l}):p}async function xi(e,t){let{abi:n,address:r,args:i,blockHash:a,eventName:o,fromBlock:s,toBlock:c,strict:l}=t,u=o?ot({abi:n,name:o}):void 0,d=u?void 0:n.filter(e=>e.type===`event`);return j(e,bi,`getLogs`)({address:r,args:i,blockHash:a,event:u,events:d,fromBlock:s,toBlock:c,strict:l})}async function Si(e,t){let{abi:n,address:r,args:i,functionName:a,...o}=t,s=D({abi:n,args:i,functionName:a});try{let{data:t}=await j(e,Vt,`call`)({...o,data:s,to:r});return zt({abi:n,args:i,functionName:a,data:t||`0x`})}catch(e){throw ar(e,{abi:n,address:r,args:i,docsPath:`/docs/contract/readContract`,functionName:a})}}async function Ci(e,n){let{abi:r,address:i,args:a,functionName:o,dataSuffix:s=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,...c}=n,l=c.account?t(c.account):e.account,u=D({abi:r,args:a,functionName:o});try{let{data:t}=await j(e,Vt,`call`)({batch:!1,data:`${u}${s?s.replace(`0x`,``):``}`,to:i,...c,account:l});return{result:zt({abi:r,args:a,functionName:o,data:t||`0x`}),request:{abi:r.filter(e=>`name`in e&&e.name===n.functionName),address:i,args:a,dataSuffix:s,functionName:o,...c,account:l}}}catch(e){throw ar(e,{abi:r,address:i,args:a,docsPath:`/docs/contract/simulateContract`,functionName:o,sender:l?.address})}}var wi=new Map,Ti=new Map,Ei=0;function Di(e,t,n){let r=++Ei,i=()=>wi.get(e)||[],a=()=>{let t=i();wi.set(e,t.filter(e=>e.id!==r))},o=()=>{let t=i();if(!t.some(e=>e.id===r))return;let n=Ti.get(e);if(t.length===1&&n){let e=n();e instanceof Promise&&e.catch(()=>{})}a()},s=i();if(wi.set(e,[...s,{id:r,fns:t}]),s&&s.length>0)return o;let c={};for(let e in t)c[e]=((...t)=>{let n=i();if(n.length!==0)for(let r of n)r.fns[e]?.(...t)});let l=n(c);return typeof l==`function`&&Ti.set(e,l),o}async function Oi(e){return new Promise(t=>setTimeout(t,e))}function ki(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let i=!0,a=()=>i=!1;return(async()=>{let o;t&&(o=await e({unpoll:a})),await Oi(await n?.(o)??r);let s=async()=>{i&&(await e({unpoll:a}),await Oi(r),s())};s()})(),a}var Ai=new Map,ji=new Map;function Mi(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),n=t(e,Ai),r=t(e,ji);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function Ni(e,{cacheKey:t,cacheTime:n=1/0}){let r=Mi(t),i=r.response.get();if(i&&n>0&&Date.now()-i.created.getTime()<n)return i.data;let a=r.promise.get();a||(a=e(),r.promise.set(a));try{let e=await a;return r.response.set({created:new Date,data:e}),e}finally{r.promise.clear()}}var Pi=e=>`blockNumber.${e}`;async function Fi(e,{cacheTime:t=e.cacheTime}={}){let n=await Ni(()=>e.request({method:`eth_blockNumber`}),{cacheKey:Pi(e.uid),cacheTime:t});return BigInt(n)}async function Ii(e,{filter:t}){let n=`strict`in t&&t.strict,r=await t.request({method:`eth_getFilterChanges`,params:[t.id]});if(typeof r[0]==`string`)return r;let i=r.map(e=>mi(e));return!(`abi`in t)||!t.abi?i:vi({abi:t.abi,logs:i,strict:n})}async function Li(e,{filter:t}){return t.request({method:`eth_uninstallFilter`,params:[t.id]})}function Ri(e,t){let{abi:n,address:r,args:i,batch:a=!0,eventName:o,fromBlock:s,onError:c,onLogs:l,poll:u,pollingInterval:d=e.pollingInterval,strict:f}=t;return(u===void 0?typeof s==`bigint`||!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):u)?(()=>{let t=f??!1;return Di(A([`watchContractEvent`,r,i,a,e.uid,o,d,t,s]),{onLogs:l,onError:c},c=>{let l;s!==void 0&&(l=s-1n);let u,f=!1,p=ki(async()=>{if(!f){try{u=await j(e,rr,`createContractEventFilter`)({abi:n,address:r,args:i,eventName:o,strict:t,fromBlock:s})}catch{}f=!0;return}try{let s;if(u)s=await j(e,Ii,`getFilterChanges`)({filter:u});else{let a=await j(e,Fi,`getBlockNumber`)({});s=l&&l<a?await j(e,xi,`getContractEvents`)({abi:n,address:r,args:i,eventName:o,fromBlock:l+1n,toBlock:a,strict:t}):[],l=a}if(s.length===0)return;if(a)c.onLogs(s);else for(let e of s)c.onLogs([e])}catch(e){u&&e instanceof nt&&(f=!1),c.onError?.(e)}},{emitOnBegin:!0,interval:d});return async()=>{u&&await j(e,Li,`uninstallFilter`)({filter:u}),p()}})})():(()=>{let t=f??!1,s=A([`watchContractEvent`,r,i,a,e.uid,o,d,t]),u=!0,p=()=>u=!1;return Di(s,{onLogs:l,onError:c},t=>((async()=>{try{let a=(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})(),s=o?er({abi:n,eventName:o,args:i}):[],{unsubscribe:c}=await a.subscribe({params:[`logs`,{address:r,topics:s}],onData(e){if(!u)return;let r=e.result;try{let{eventName:e,args:i}=gi({abi:n,data:r.data,topics:r.topics,strict:f}),a=mi(r,{args:i,eventName:e});t.onLogs([a])}catch(e){let n,i;if(e instanceof pe||e instanceof ye){if(f)return;n=e.abiItem.name,i=e.abiItem.inputs?.some(e=>!(`name`in e&&e.name))}let a=mi(r,{args:i?[]:{},eventName:n});t.onLogs([a])}},onError(e){t.onError?.(e)}});p=c,u||p()}catch(e){c?.(e)}})(),()=>p()))})()}var zi=class extends v{constructor({docsPath:e}={}){super([`Could not find an Account to execute with this Action.`,"Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."].join(`
`),{docsPath:e,docsSlug:`account`,name:`AccountNotFoundError`})}},Bi=class extends v{constructor({docsPath:e,metaMessages:t,type:n}){super(`Account type "${n}" is not supported.`,{docsPath:e,metaMessages:t,name:`AccountTypeNotSupportedError`})}};function Vi({chain:e,currentChainId:t}){if(!e)throw new Yt;if(t!==e.id)throw new Et({chain:e,currentChainId:t})}async function Hi(e,{serializedTransaction:t}){return e.request({method:`eth_sendRawTransaction`,params:[t]},{retryCount:0})}var Ui=new it(128);async function Wi(e,n){let{account:r=e.account,assertChainId:i=!0,chain:a=e.chain,accessList:o,authorizationList:s,blobs:c,data:l,dataSuffix:u=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,type:_,value:y,...b}=n;if(r===void 0)throw new zi({docsPath:`/docs/actions/wallet/sendTransaction`});let x=r?t(r):null;try{He(n);let t=await(async()=>{if(n.to)return n.to;if(n.to!==null&&s&&s.length>0)return await gr({authorization:s[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`.")})})();if(x?.type===`json-rpc`||x===null){let n;a!==null&&(n=await j(e,oi,`getChainId`)({}),i&&Vi({currentChainId:n,chain:a}));let r=e.chain?.formatters?.transactionRequest?.format,v=(r||We)({...xe(b,{format:r}),accessList:o,account:x,authorizationList:s,blobs:c,chainId:n,data:l&&Pt([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,to:t,type:_,value:y},`sendTransaction`),S=Ui.get(e.uid),C=S?`wallet_sendTransaction`:`eth_sendTransaction`;try{return await e.request({method:C,params:[v]},{retryCount:0})}catch(t){if(S===!1)throw t;let n=t;if(n.name===`InvalidInputRpcError`||n.name===`InvalidParamsRpcError`||n.name===`MethodNotFoundRpcError`||n.name===`MethodNotSupportedRpcError`)return await e.request({method:`wallet_sendTransaction`,params:[v]},{retryCount:0}).then(t=>(Ui.set(e.uid,!0),t)).catch(t=>{let r=t;throw r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`?(Ui.set(e.uid,!1),n):r});throw n}}if(x?.type===`local`){let n=await j(e,di,`prepareTransactionRequest`)({account:x,accessList:o,authorizationList:s,blobs:c,chain:a,data:l&&Pt([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,nonceManager:x.nonceManager,parameters:[...ci,`sidecars`],type:_,value:y,...b,to:t}),r=a?.serializers?.transaction,i=await x.signTransaction(n,{serializer:r});return await j(e,Hi,`sendRawTransaction`)({serializedTransaction:i})}throw x?.type===`smart`?new Bi({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:`/docs/actions/bundler/sendUserOperation`,type:`smart`}):new Bi({docsPath:`/docs/actions/wallet/sendTransaction`,type:x?.type})}catch(e){throw e instanceof Bi?e:ai(e,{...n,account:x,chain:n.chain||void 0})}}async function Gi(e,t){return Gi.internal(e,Wi,`sendTransaction`,t)}(function(e){async function n(e,n,r,i){let{abi:a,account:o=e.account,address:s,args:c,functionName:l,...u}=i;if(o===void 0)throw new zi({docsPath:`/docs/contract/writeContract`});let d=o?t(o):null,f=D({abi:a,args:c,functionName:l});try{return await j(e,n,r)({data:f,to:s,account:d,...u})}catch(e){throw ar(e,{abi:a,address:s,args:c,docsPath:`/docs/contract/writeContract`,functionName:l,sender:d?.address})}}e.internal=n})(Gi||={});var Ki=class extends v{constructor(e){super(`Call bundle failed with status: ${e.statusCode}`,{name:`BundleFailedError`}),Object.defineProperty(this,`result`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.result=e}};function qi(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,a)=>{let o=async({count:s=0}={})=>{let c=async({error:e})=>{let n=typeof t==`function`?t({count:s,error:e}):t;n&&await Oi(n),o({count:s+1})};try{i(await e())}catch(e){if(s<n&&await r({count:s,error:e}))return c({error:e});a(e)}};o()})}var Ji={"0x0":`reverted`,"0x1":`success`};function Yi(e,t){let n={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>mi(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?ke(e.transactionIndex):null,status:e.status?Ji[e.status]:null,type:e.type?Cr[e.type]||e.type:null};return e.blobGasPrice&&(n.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(n.blobGasUsed=BigInt(e.blobGasUsed)),n}var Xi=`0x5792579257925792579257925792579257925792579257925792579257925792`,Zi=O(0,{size:32});async function Qi(e,n){let{account:r=e.account,chain:i=e.chain,experimental_fallback:a,experimental_fallbackDelay:o=32,forceAtomic:s=!1,id:c,version:u=`2.0.0`}=n,d=r?t(r):null,f=n.capabilities;e.dataSuffix&&!n.capabilities?.dataSuffix&&(f=typeof e.dataSuffix==`string`?{...n.capabilities,dataSuffix:{value:e.dataSuffix,optional:!0}}:{...n.capabilities,dataSuffix:{value:e.dataSuffix.value,...e.dataSuffix.required?{}:{optional:!0}}});let p=n.calls.map(e=>{let t=e,n=t.abi?D({abi:t.abi,functionName:t.functionName,args:t.args}):t.data;return{data:t.dataSuffix&&n?Pt([n,t.dataSuffix]):n,to:t.to,value:t.value?O(t.value):void 0}});try{let t=await e.request({method:`wallet_sendCalls`,params:[{atomicRequired:s,calls:p,capabilities:f,chainId:O(i.id),from:d?.address,id:c,version:u}]},{retryCount:0});return typeof t==`string`?{id:t}:t}catch(t){let r=t;if(a&&(r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`||r.name===`UnknownRpcError`||r.details.toLowerCase().includes(`does not exist / is not available`)||r.details.toLowerCase().includes(`missing or invalid. request()`)||r.details.toLowerCase().includes(`did not match any variant of untagged enum`)||r.details.toLowerCase().includes(`account upgraded to unsupported contract`)||r.details.toLowerCase().includes(`eip-7702 not supported`)||r.details.toLowerCase().includes(`unsupported wc_ method`)||r.details.toLowerCase().includes(`feature toggled misconfigured`)||r.details.toLowerCase().includes(`jsonrpcengine: response has no error or result for request`))){if(f&&Object.values(f).some(e=>!e.optional)){let e="non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";throw new Ae(new v(e,{details:e}))}if(s&&p.length>1){let e="`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";throw new Ut(new v(e,{details:e}))}let t=[];for(let n of p){let r=Wi(e,{account:d,chain:i,data:n.data,to:n.to,value:n.value?l(n.value):void 0});t.push(r),o>0&&await new Promise(e=>setTimeout(e,o))}let n=await Promise.allSettled(t);if(n.every(e=>e.status===`rejected`))throw n[0].reason;return{id:Pt([...n.map(e=>e.status===`fulfilled`?e.value:Zi),O(i.id,{size:32}),Xi])}}throw ai(t,{...n,account:d,chain:n.chain})}}async function $i(e,t){async function n(t){if(t.endsWith(`5792579257925792579257925792579257925792579257925792579257925792`)){let n=h(Xe(t,-64,-32)),r=Xe(t,0,-64).slice(2).match(/.{1,64}/g),i=await Promise.all(r.map(t=>Zi.slice(2)===t?void 0:e.request({method:`eth_getTransactionReceipt`,params:[`0x${t}`]},{dedupe:!0}))),a=i.some(e=>e===null)?100:i.every(e=>e?.status===`0x1`)?200:i.every(e=>e?.status===`0x0`)?500:600;return{atomic:!1,chainId:ke(n),receipts:i.filter(Boolean),status:a,version:`2.0.0`}}return e.request({method:`wallet_getCallsStatus`,params:[t]})}let{atomic:r=!1,chainId:i,receipts:a,version:o=`2.0.0`,...s}=await n(t.id),[c,u]=(()=>{let e=s.status;return e>=100&&e<200?[`pending`,e]:e>=200&&e<300?[`success`,e]:e>=300&&e<700?[`failure`,e]:e===`CONFIRMED`?[`success`,200]:e===`PENDING`?[`pending`,100]:[void 0,e]})();return{...s,atomic:r,chainId:i?ke(i):void 0,receipts:a?.map(e=>({...e,blockNumber:l(e.blockNumber),gasUsed:l(e.gasUsed),status:Ji[e.status]}))??[],statusCode:u,status:c,version:o}}async function ea(e,t){let{id:n,pollingInterval:r=e.pollingInterval,status:i=({statusCode:e})=>e===200||e>=300,retryCount:a=4,retryDelay:o=({count:e})=>~~(1<<e)*200,timeout:s=6e4,throwOnFailure:c=!1}=t,l=A([`waitForCallsStatus`,e.uid,n]),{promise:u,resolve:d,reject:f}=Ye(),p,m=Di(l,{resolve:d,reject:f},t=>{let s=ki(async()=>{let r=e=>{clearTimeout(p),s(),e(),m()};try{let s=await qi(async()=>{let t=await j(e,$i,`getCallsStatus`)({id:n});if(c&&t.status===`failure`)throw new Ki(t);return t},{retryCount:a,delay:o});if(!i(s))return;r(()=>t.resolve(s))}catch(e){r(()=>t.reject(e))}},{interval:r,emitOnBegin:!0});return s});return p=s?setTimeout(()=>{m(),clearTimeout(p),f(new ta({id:n}))},s):void 0,await u}var ta=class extends v{constructor({id:e}){super(`Timed out while waiting for call bundle with id "${e}" to be confirmed.`,{name:`WaitForCallsStatusTimeoutError`})}},na=256,ra=na,ia;function aa(e=11){if(!ia||ra+e>na*2){ia=``,ra=0;for(let e=0;e<na;e++)ia+=(256+Math.random()*256|0).toString(16).substring(1)}return ia.substring(ra,ra+++e)}function oa(e){let{batch:n,chain:r,ccipRead:i,dataSuffix:a,key:o=`base`,name:s=`Base Client`,type:c=`base`}=e,l=e.experimental_blockTag??(typeof r?.experimental_preconfirmationTime==`number`?`pending`:void 0),u=r?.blockTime??12e3,d=Math.min(Math.max(Math.floor(u/2),500),4e3),f=e.pollingInterval??d,p=e.cacheTime??f,m=e.account?t(e.account):void 0,{config:h,request:g,value:_}=e.transport({account:m,chain:r,pollingInterval:f}),v={account:m,batch:n,cacheTime:p,ccipRead:i,chain:r,dataSuffix:a,key:o,name:s,pollingInterval:f,request:g,transport:{...h,..._},type:c,uid:aa(),...l?{experimental_blockTag:l}:{}};function y(e){return t=>{let n=t(e);for(let e in v)delete n[e];let r={...e,...n};return Object.assign(r,{extend:y(r)})}}return Object.assign(v,{extend:y(v)})}function sa(e){if(!(e instanceof v))return!1;let t=e.walk(e=>e instanceof be);return t instanceof be?t.data?.errorName===`HttpError`||t.data?.errorName===`ResolverError`||t.data?.errorName===`ResolverNotContract`||t.data?.errorName===`ResolverNotFound`||t.data?.errorName===`ReverseAddressMismatch`||t.data?.errorName===`UnsupportedResolverProfile`:!1}function ca(e){if(e.length!==66||e.indexOf(`[`)!==0||e.indexOf(`]`)!==65)return null;let t=`0x${e.slice(1,65)}`;return le(t)?t:null}function la(e){let t=new Uint8Array(32).fill(0);if(!e)return ln(t);let n=e.split(`.`);for(let e=n.length-1;e>=0;--e){let r=ca(n[e]),i=r?$t(r):k(qe(n[e]),`bytes`);t=k(Pt([t,i]),`bytes`)}return ln(t)}function ua(e){return`[${e.slice(2)}]`}function da(e){let t=new Uint8Array(32).fill(0);return e?ca(e)||k(qe(e)):ln(t)}function fa(e){let t=e.replace(/^\.|\.$/gm,``);if(t.length===0)return new Uint8Array(1);let n=new Uint8Array(qe(t).byteLength+2),r=0,i=t.split(`.`);for(let e=0;e<i.length;e++){let t=qe(i[e]);t.byteLength>255&&(t=qe(ua(da(i[e])))),n[r]=t.length,n.set(t,r+1),r+=t.length+1}return n.byteLength===r+1?n:n.slice(0,r+1)}async function pa(e,t){let{blockNumber:n,blockTag:r,coinType:i,name:a,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return Wt({blockNumber:n,chain:c,contract:`ensUniversalResolver`})})(),u=c?.ensTlds;if(u&&!u.some(e=>a.endsWith(e)))return null;let d=i==null?[la(a)]:[la(a),BigInt(i)];try{let t=D({abi:kt,functionName:`addr`,args:d}),i={address:l,abi:cn,functionName:`resolveWithGateways`,args:[Ee(fa(a)),t,o??[`x-batch-gateway:true`]],blockNumber:n,blockTag:r},s=await j(e,Si,`readContract`)(i);if(s[0]===`0x`)return null;let c=zt({abi:kt,args:d,functionName:`addr`,data:s[0]});return c===`0x`||h(c)===`0x00`?null:c}catch(e){if(s)throw e;if(sa(e))return null;throw e}}var ma=class extends v{constructor({data:e}){super(`Unable to extract image from metadata. The metadata may be malformed or invalid.`,{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",``,`Provided data: ${JSON.stringify(e)}`],name:`EnsAvatarInvalidMetadataError`})}},ha=class extends v{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`,{name:`EnsAvatarInvalidNftUriError`})}},ga=class extends v{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,{name:`EnsAvatarUriResolutionError`})}},_a=class extends v{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,{name:`EnsAvatarUnsupportedNamespaceError`})}},va=/(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,ya=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,ba=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,xa=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function Sa(e){try{let t=await fetch(e,{method:`HEAD`});return t.status===200?t.headers.get(`content-type`)?.startsWith(`image/`):!1}catch(t){return typeof t==`object`&&t.response!==void 0||!Object.hasOwn(globalThis,`Image`)?!1:new Promise(t=>{let n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e})}}function Ca(e,t){return e?e.endsWith(`/`)?e.slice(0,-1):e:t}function wa({uri:e,gatewayUrls:t}){let n=ba.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};let r=Ca(t?.ipfs,`https://ipfs.io`),i=Ca(t?.arweave,`https://arweave.net`),{protocol:a,subpath:o,target:s,subtarget:c=``}=e.match(va)?.groups||{},l=a===`ipns:/`||o===`ipns/`,u=a===`ipfs:/`||o===`ipfs/`||ya.test(e);if(e.startsWith(`http`)&&!l&&!u){let n=e;return t?.arweave&&(n=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:n,isOnChain:!1,isEncoded:!1}}if((l||u)&&s)return{uri:`${r}/${l?`ipns`:`ipfs`}/${s}${c}`,isOnChain:!1,isEncoded:!1};if(a===`ar:/`&&s)return{uri:`${i}/${s}${c||``}`,isOnChain:!1,isEncoded:!1};let d=e.replace(xa,``);if(d.startsWith(`<svg`)&&(d=`data:image/svg+xml;base64,${btoa(d)}`),d.startsWith(`data:`)||d.startsWith(`{`))return{uri:d,isOnChain:!0,isEncoded:!1};throw new ga({uri:e})}function Ta(e){if(typeof e!=`object`||!(`image`in e)&&!(`image_url`in e)&&!(`image_data`in e))throw new ma({data:e});return e.image||e.image_url||e.image_data}async function Ea({gatewayUrls:e,uri:t}){try{return await Da({gatewayUrls:e,uri:Ta(await fetch(t).then(e=>e.json()))})}catch{throw new ga({uri:t})}}async function Da({gatewayUrls:e,uri:t}){let{uri:n,isOnChain:r}=wa({uri:t,gatewayUrls:e});if(r||await Sa(n))return n;throw new ga({uri:t})}function Oa(e){let t=e;t.startsWith(`did:nft:`)&&(t=t.replace(`did:nft:`,``).replace(/_/g,`/`));let[n,r,i]=t.split(`/`),[a,o]=n.split(`:`),[s,c]=r.split(`:`);if(!a||a.toLowerCase()!==`eip155`)throw new ha({reason:`Only EIP-155 supported`});if(!o)throw new ha({reason:`Chain ID not found`});if(!c)throw new ha({reason:`Contract address not found`});if(!i)throw new ha({reason:`Token ID not found`});if(!s)throw new ha({reason:`ERC namespace not found`});return{chainID:Number.parseInt(o,10),namespace:s.toLowerCase(),contractAddress:c,tokenID:i}}async function ka(e,{nft:t}){if(t.namespace===`erc721`)return Si(e,{address:t.contractAddress,abi:[{name:`tokenURI`,type:`function`,stateMutability:`view`,inputs:[{name:`tokenId`,type:`uint256`}],outputs:[{name:``,type:`string`}]}],functionName:`tokenURI`,args:[BigInt(t.tokenID)]});if(t.namespace===`erc1155`)return Si(e,{address:t.contractAddress,abi:[{name:`uri`,type:`function`,stateMutability:`view`,inputs:[{name:`_id`,type:`uint256`}],outputs:[{name:``,type:`string`}]}],functionName:`uri`,args:[BigInt(t.tokenID)]});throw new _a({namespace:t.namespace})}async function Aa(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?ja(e,{gatewayUrls:t,record:n}):Da({uri:n,gatewayUrls:t})}async function ja(e,{gatewayUrls:t,record:n}){let r=Oa(n),{uri:i,isOnChain:a,isEncoded:o}=wa({uri:await ka(e,{nft:r}),gatewayUrls:t});if(a&&(i.includes(`data:application/json;base64,`)||i.startsWith(`{`))){let e=o?atob(i.replace(`data:application/json;base64,`,``)):i;return Da({uri:Ta(JSON.parse(e)),gatewayUrls:t})}let s=r.tokenID;return r.namespace===`erc1155`&&(s=s.replace(`0x`,``).padStart(64,`0`)),Ea({gatewayUrls:t,uri:i.replace(/(?:0x)?{id}/,s)})}async function Ma(e,t){let{blockNumber:n,blockTag:r,key:i,name:a,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return Wt({blockNumber:n,chain:c,contract:`ensUniversalResolver`})})(),u=c?.ensTlds;if(u&&!u.some(e=>a.endsWith(e)))return null;try{let t={address:l,abi:cn,args:[Ee(fa(a)),D({abi:Qt,functionName:`text`,args:[la(a),i]}),o??[`x-batch-gateway:true`]],functionName:`resolveWithGateways`,blockNumber:n,blockTag:r},s=await j(e,Si,`readContract`)(t);if(s[0]===`0x`)return null;let c=zt({abi:Qt,functionName:`text`,data:s[0]});return c===``?null:c}catch(e){if(s)throw e;if(sa(e))return null;throw e}}async function Na(e,{blockNumber:t,blockTag:n,assetGatewayUrls:r,name:i,gatewayUrls:a,strict:o,universalResolverAddress:s}){let c=await j(e,Ma,`getEnsText`)({blockNumber:t,blockTag:n,key:`avatar`,name:i,universalResolverAddress:s,gatewayUrls:a,strict:o});if(!c)return null;try{return await Aa(e,{record:c,gatewayUrls:r})}catch{return null}}async function Pa(e,t){let{address:n,blockNumber:r,blockTag:i,coinType:a=60n,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return Wt({blockNumber:r,chain:c,contract:`ensUniversalResolver`})})();try{let t={address:l,abi:Qe,args:[n,a,o??[`x-batch-gateway:true`]],functionName:`reverseWithGateways`,blockNumber:r,blockTag:i},[s]=await j(e,Si,`readContract`)(t);return s||null}catch(e){if(s)throw e;if(sa(e))return null;throw e}}async function Fa(e,t){let{blockNumber:n,blockTag:r,name:i}=t,{chain:a}=e,o=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!a)throw Error(`client chain not configured. universalResolverAddress is required.`);return Wt({blockNumber:n,chain:a,contract:`ensUniversalResolver`})})(),s=a?.ensTlds;if(s&&!s.some(e=>i.endsWith(e)))throw Error(`${i} is not a valid ENS TLD (${s?.join(`, `)}) for chain "${a.name}" (id: ${a.id}).`);let[c]=await j(e,Si,`readContract`)({address:o,abi:[{inputs:[{type:`bytes`}],name:`findResolver`,outputs:[{type:`address`},{type:`bytes32`},{type:`uint256`}],stateMutability:`view`,type:`function`}],functionName:`findResolver`,args:[Ee(fa(i))],blockNumber:n,blockTag:r});return c}async function Ia(e,n){let{account:r=e.account,blockNumber:i,blockTag:a=`latest`,blobs:o,data:s,gas:c,gasPrice:l,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:f,to:p,value:m,...h}=n,g=r?t(r):void 0;try{He(n);let t=(typeof i==`bigint`?O(i):void 0)||a,r=e.chain?.formatters?.transactionRequest?.format,_=(r||We)({...xe(h,{format:r}),account:g,blobs:o,data:s,gas:c,gasPrice:l,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:f,to:p,value:m},`createAccessList`),v=await e.request({method:`eth_createAccessList`,params:[_,t]});return{accessList:v.accessList,gasUsed:BigInt(v.gasUsed)}}catch(t){throw Nt(t,{...n,account:g,chain:e.chain})}}async function La(e){let t=nr(e,{method:`eth_newBlockFilter`}),n=await e.request({method:`eth_newBlockFilter`});return{id:n,request:t(n),type:`block`}}async function Ra(e,{address:t,args:n,event:r,events:i,fromBlock:a,strict:o,toBlock:s}={}){let c=i??(r?[r]:void 0),l=nr(e,{method:`eth_newFilter`}),u=[];c&&(u=[c.flatMap(e=>er({abi:[e],eventName:e.name,args:n}))],r&&(u=u[0]));let d=await e.request({method:`eth_newFilter`,params:[{address:t,fromBlock:typeof a==`bigint`?O(a):a,toBlock:typeof s==`bigint`?O(s):s,...u.length?{topics:u}:{}}]});return{abi:c,args:n,eventName:r?r.name:void 0,fromBlock:a,id:d,request:l(d),strict:!!o,toBlock:s,type:`event`}}async function za(e){let t=nr(e,{method:`eth_newPendingTransactionFilter`}),n=await e.request({method:`eth_newPendingTransactionFilter`});return{id:n,request:t(n),type:`transaction`}}async function Ba(e,{address:t,blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`}){if(e.batch?.multicall&&e.chain?.contracts?.multicall3){let i=e.chain.contracts.multicall3.address,a=D({abi:Ke,functionName:`getEthBalance`,args:[t]}),{data:o}=await j(e,Vt,`call`)({to:i,data:a,blockNumber:n,blockTag:r});return zt({abi:Ke,functionName:`getEthBalance`,args:[t],data:o||`0x`})}let i=typeof n==`bigint`?O(n):void 0,a=await e.request({method:`eth_getBalance`,params:[t,i||r]});return BigInt(a)}async function Va(e){let t=await e.request({method:`eth_blobBaseFee`});return BigInt(t)}async function Ha(e,{blockHash:t,blockNumber:n,blockTag:r=`latest`}={}){let i=n===void 0?void 0:O(n),a;return a=t?await e.request({method:`eth_getBlockTransactionCountByHash`,params:[t]},{dedupe:!0}):await e.request({method:`eth_getBlockTransactionCountByNumber`,params:[i||r]},{dedupe:!!i}),ke(a)}async function Ua(e,{address:t,blockNumber:n,blockTag:r=`latest`}){let i=n===void 0?void 0:O(n),a=await e.request({method:`eth_getCode`,params:[t,i||r]},{dedupe:!!i});if(a!==`0x`)return a}async function Wa(e,{address:t,blockNumber:n,blockTag:r=`latest`}){let i=await Ua(e,{address:t,...n===void 0?{blockTag:r}:{blockNumber:n}});if(i&&ne(i)===23&&i.startsWith(`0xef0100`))return Xt(vt(i,3,23))}var Ga=class extends v{constructor({address:e}){super(`No EIP-712 domain found on contract "${e}".`,{metaMessages:[`Ensure that:`,`- The contract is deployed at the address "${e}".`,"- `eip712Domain()` function exists on the contract.","- `eip712Domain()` function matches signature to ERC-5267 specification."],name:`Eip712DomainNotFoundError`})}};async function Ka(e,t){let{address:n,factory:r,factoryData:i}=t;try{let[t,a,o,s,c,l,u]=await j(e,Si,`readContract`)({abi:qa,address:n,functionName:`eip712Domain`,factory:r,factoryData:i});return{domain:{name:a,version:o,chainId:Number(s),verifyingContract:c,salt:l},extensions:u,fields:t}}catch(e){let t=e;throw t.name===`ContractFunctionExecutionError`&&t.cause.name===`ContractFunctionZeroDataError`?new Ga({address:n}):t}}var qa=[{inputs:[],name:`eip712Domain`,outputs:[{name:`fields`,type:`bytes1`},{name:`name`,type:`string`},{name:`version`,type:`string`},{name:`chainId`,type:`uint256`},{name:`verifyingContract`,type:`address`},{name:`salt`,type:`bytes32`},{name:`extensions`,type:`uint256[]`}],stateMutability:`view`,type:`function`}];function Ja(e){return{baseFeePerGas:e.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:e.reward?.map(e=>e.map(e=>BigInt(e)))}}async function Ya(e,{blockCount:t,blockNumber:n,blockTag:r=`latest`,rewardPercentiles:i}){let a=typeof n==`bigint`?O(n):void 0;return Ja(await e.request({method:`eth_feeHistory`,params:[O(t),a||r,i]},{dedupe:!!a}))}async function Xa(e,{filter:t}){let n=t.strict??!1,r=(await t.request({method:`eth_getFilterLogs`,params:[t.id]})).map(e=>mi(e));return t.abi?vi({abi:t.abi,logs:r,strict:n}):r}async function Za({address:e,authorization:t,signature:n}){return ie(Xt(e),await gr({authorization:t,signature:n}))}var Qa=new it(8192);function $a(e,{enabled:t=!0,id:n}){if(!t||!n)return e();if(Qa.get(n))return Qa.get(n);let r=e().finally(()=>Qa.delete(n));return Qa.set(n,r),r}function eo(e,t={}){return async(n,r={})=>{let{dedupe:i=!1,methods:a,retryDelay:o=150,retryCount:s=3,uid:c}={...t,...r},{method:l}=n;if(a?.exclude?.includes(l)||a?.include&&!a.include.includes(l))throw new At(Error(`method not supported`),{method:l});return $a(()=>qi(async()=>{try{return await e(n)}catch(e){let t=e;switch(t.code){case gt.code:throw new gt(t);case Zt.code:throw new Zt(t);case Rt.code:throw new Rt(t,{method:n.method});case Ot.code:throw new Ot(t);case Kt.code:throw new Kt(t);case nt.code:throw new nt(t);case Je.code:throw new Je(t);case en.code:throw new en(t);case $e.code:throw new $e(t);case At.code:throw new At(t,{method:n.method});case ut.code:throw new ut(t);case at.code:throw new at(t);case p.code:throw new p(t);case sn.code:throw new sn(t);case g.code:throw new g(t);case pt.code:throw new pt(t);case Ze.code:throw new Ze(t);case un.code:throw new un(t);case Ae.code:throw new Ae(t);case rn.code:throw new rn(t);case Ft.code:throw new Ft(t);case De.code:throw new De(t);case yt.code:throw new yt(t);case Mt.code:throw new Mt(t);case Ut.code:throw new Ut(t);case 5e3:throw new p(t);case _e.code:throw new _e(t);default:throw e instanceof v?e:new u(t)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof Tt){let e=t?.headers?.get(`Retry-After`);if(e?.match(/\d/))return Number.parseInt(e,10)*1e3}return~~(1<<e)*o},retryCount:s,shouldRetry:({error:e})=>to(e)}),{enabled:i,id:i?on(`${c}.${A(n)}`):void 0})}}function to(e){return`code`in e&&typeof e.code==`number`?e.code===-1||e.code===ut.code||e.code===Kt.code:e instanceof Tt&&e.status?e.status===403||e.status===408||e.status===413||e.status===429||e.status===500||e.status===502||e.status===503||e.status===504:!0}function no(e,{errorInstance:t=Error(`timed out`),timeout:n,signal:r}){return new Promise((i,a)=>{(async()=>{let o;try{let s=new AbortController;n>0&&(o=setTimeout(()=>{r?s.abort():a(t)},n)),i(await e({signal:s?.signal||null}))}catch(e){e?.name===`AbortError`&&a(t),a(e)}finally{clearTimeout(o)}})()})}function ro(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var io=ro();function ao(e,t={}){let{url:n,headers:r}=oo(e);return{async request(e){let{body:i,fetchFn:a=t.fetchFn??fetch,onRequest:o=t.onRequest,onResponse:s=t.onResponse,timeout:c=t.timeout??1e4}=e,l={...t.fetchOptions??{},...e.fetchOptions??{}},{headers:u,method:d,signal:f}=l;try{let e=await no(async({signal:e})=>{let t={...l,body:A(Array.isArray(i)?i.map(e=>({jsonrpc:`2.0`,id:e.id??io.take(),...e})):{jsonrpc:`2.0`,id:i.id??io.take(),...i}),headers:{...r,"Content-Type":`application/json`,...u},method:d||`POST`,signal:f||(c>0?e:null)},s=new Request(n,t),p=await o?.(s,t)??{...t,url:n};return await a(p.url??n,p)},{errorInstance:new St({body:i,url:n}),timeout:c,signal:!0});s&&await s(e);let t;if(e.headers.get(`Content-Type`)?.startsWith(`application/json`))t=await e.json();else{t=await e.text();try{t=JSON.parse(t||`{}`)}catch(n){if(e.ok)throw n;t={error:t}}}if(!e.ok)throw new Tt({body:i,details:A(t.error)||e.statusText,headers:e.headers,status:e.status,url:n});return t}catch(e){throw e instanceof Tt||e instanceof St?e:new Tt({body:i,cause:e,url:n})}}}}function oo(e){try{let t=new URL(e),n=(()=>{if(t.username){let e=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username=``,t.password=``,{url:t.toString(),headers:{Authorization:`Basic ${btoa(e)}`}}}})();return{url:t.toString(),...n}}catch{return{url:e}}}var so=`Ethereum Signed Message:
`;function co(e){let t=typeof e==`string`?on(e):typeof e.raw==`string`?e.raw:ln(e.raw);return Pt([on(`${so}${ne(t)}`),t])}function lo(e,t){return k(co(e),t)}var uo=class extends v{constructor({domain:e}){super(`Invalid domain "${A(e)}".`,{metaMessages:[`Must be a valid EIP-712 domain.`]})}},fo=class extends v{constructor({primaryType:e,types:t}){super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`,{docsPath:`/api/glossary/Errors#typeddatainvalidprimarytypeerror`,metaMessages:["Check that the primary type is a key in `types`."]})}},po=class extends v{constructor({type:e}){super(`Struct type "${e}" is invalid.`,{metaMessages:[`Struct type must not be a Solidity type.`],name:`InvalidStructTypeError`})}};function mo(e){let{domain:t,message:n,primaryType:r,types:i}=e,a=(e,t)=>{let n={...t};for(let t of e){let{name:e,type:r}=t;r===`address`&&(n[e]=n[e].toLowerCase())}return n};return A({domain:!i.EIP712Domain||!t?{}:a(i.EIP712Domain,t),message:(()=>{if(r!==`EIP712Domain`)return a(i[r],n)})(),primaryType:r,types:i})}function ho(e){let{domain:t,message:n,primaryType:r,types:i}=e,a=(e,t)=>{for(let n of e){let{name:e,type:r}=n,o=t[e],s=r.match(Ht);if(s&&(typeof o==`number`||typeof o==`bigint`)){let[e,t,n]=s;O(o,{signed:t===`int`,size:Number.parseInt(n,10)/8})}if(r===`address`&&typeof o==`string`&&!tt(o))throw new lt({address:o});let c=r.match(jt);if(c){let[e,t]=c;if(t&&ne(o)!==Number.parseInt(t,10))throw new ue({expectedSize:Number.parseInt(t,10),givenSize:ne(o)})}let l=i[r];l&&(_o(r),a(l,o))}};if(i.EIP712Domain&&t){if(typeof t!=`object`)throw new uo({domain:t});a(i.EIP712Domain,t)}if(r!==`EIP712Domain`)if(i[r])a(i[r],n);else throw new fo({primaryType:r,types:i})}function go({domain:e}){return[typeof e?.name==`string`&&{name:`name`,type:`string`},e?.version&&{name:`version`,type:`string`},(typeof e?.chainId==`number`||typeof e?.chainId==`bigint`)&&{name:`chainId`,type:`uint256`},e?.verifyingContract&&{name:`verifyingContract`,type:`address`},e?.salt&&{name:`salt`,type:`bytes32`}].filter(Boolean)}function _o(e){if(e===`address`||e===`bool`||e===`string`||e.startsWith(`bytes`)||e.startsWith(`uint`)||e.startsWith(`int`))throw new po({type:e})}function vo(e){let{domain:t={},message:n,primaryType:r}=e,i={EIP712Domain:go({domain:t}),...e.types};ho({domain:t,message:n,primaryType:r,types:i});let a=[`0x1901`];return t&&a.push(yo({domain:t,types:i})),r!==`EIP712Domain`&&a.push(bo({data:n,primaryType:r,types:i})),k(Pt(a))}function yo({domain:e,types:t}){return bo({data:e,primaryType:`EIP712Domain`,types:t})}function bo({data:e,primaryType:t,types:n}){return k(xo({data:e,primaryType:t,types:n}))}function xo({data:e,primaryType:t,types:n}){let r=[{type:`bytes32`}],i=[So({primaryType:t,types:n})];for(let a of n[t]){let[t,o]=To({types:n,name:a.name,type:a.type,value:e[a.name]});r.push(t),i.push(o)}return qt(r,i)}function So({primaryType:e,types:t}){return k(Ee(Co({primaryType:e,types:t})))}function Co({primaryType:e,types:t}){let n=``,r=wo({primaryType:e,types:t});r.delete(e);let i=[e,...Array.from(r).sort()];for(let e of i)n+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(`,`)})`;return n}function wo({primaryType:e,types:t},n=new Set){let r=e.match(/^\w*/u)?.[0];if(n.has(r)||t[r]===void 0)return n;n.add(r);for(let e of t[r])wo({primaryType:e.type,types:t},n);return n}function To({types:e,name:t,type:n,value:r}){if(e[n]!==void 0)return[{type:`bytes32`},k(xo({data:r,primaryType:n,types:e}))];if(n===`bytes`)return[{type:`bytes32`},k(r)];if(n===`string`)return[{type:`bytes32`},k(Ee(r))];if(n.lastIndexOf(`]`)===n.length-1){let i=n.slice(0,n.lastIndexOf(`[`)),a=r.map(n=>To({name:t,type:i,types:e,value:n}));return[{type:`bytes32`},k(qt(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:n},r]}var Eo={checksum:new class extends Map{constructor(e){super(),Object.defineProperty(this,`maxSize`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){let t=super.get(e);return super.has(e)&&t!==void 0&&(this.delete(e),super.set(e,t)),t}set(e,t){if(super.set(e,t),this.maxSize&&this.size>this.maxSize){let e=this.keys().next().value;e&&this.delete(e)}return this}}(8192)}.checksum,Do=class extends Kn{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,Gn(e);let n=vn(t);if(this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`Expected instance of class which extends utils.Hash`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let r=this.blockLen,i=new Uint8Array(r);i.set(n.length>r?e.create().update(n).digest():n);for(let e=0;e<i.length;e++)i[e]^=54;this.iHash.update(i),this.oHash=e.create();for(let e=0;e<i.length;e++)i[e]^=106;this.oHash.update(i),gn(i)}update(e){return hn(this),this.iHash.update(e),this}digestInto(e){hn(this),Sn(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Oo=(e,t,n)=>new Do(e,t).update(n).digest();Oo.create=(e,t)=>new Do(e,t);function ko(e,t={}){let{as:n=typeof e==`string`?`Hex`:`Bytes`}=t,r=ht(_(e));return n===`Bytes`?r:m(r)}var Ao=/^0x[a-fA-F0-9]{40}$/;function jo(e,t={}){let{strict:n=!0}=t;if(!Ao.test(e))throw new Po({address:e,cause:new Fo});if(n){if(e.toLowerCase()===e)return;if(Mo(e)!==e)throw new Po({address:e,cause:new Io})}}function Mo(e){if(Eo.has(e))return Eo.get(e);jo(e,{strict:!1});let t=e.substring(2).toLowerCase(),n=ko(ce(t),{as:`Bytes`}),r=t.split(``);for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&r[e]&&(r[e]=r[e].toUpperCase()),(n[e>>1]&15)>=8&&r[e+1]&&(r[e+1]=r[e+1].toUpperCase());let i=`0x${r.join(``)}`;return Eo.set(e,i),i}function No(e,t={}){let{strict:n=!0}=t??{};try{return jo(e,{strict:n}),!0}catch{return!1}}var Po=class extends T{constructor({address:e,cause:t}){super(`Address "${e}" is invalid.`,{cause:t}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidAddressError`})}},Fo=class extends T{constructor(){super(`Address is not a 20 byte (40 hexadecimal character) value.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidInputError`})}},Io=class extends T{constructor(){super(`Address does not match its checksum counterpart.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidChecksumError`})}},Lo=/^(.*)\[([0-9]*)\]$/,Ro=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,zo=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;2n**(8n-1n)-1n,2n**(16n-1n)-1n,2n**(24n-1n)-1n,2n**(32n-1n)-1n,2n**(40n-1n)-1n,2n**(48n-1n)-1n,2n**(56n-1n)-1n,2n**(64n-1n)-1n,2n**(72n-1n)-1n,2n**(80n-1n)-1n,2n**(88n-1n)-1n,2n**(96n-1n)-1n,2n**(104n-1n)-1n,2n**(112n-1n)-1n,2n**(120n-1n)-1n,2n**(128n-1n)-1n,2n**(136n-1n)-1n,2n**(144n-1n)-1n,2n**(152n-1n)-1n,2n**(160n-1n)-1n,2n**(168n-1n)-1n,2n**(176n-1n)-1n,2n**(184n-1n)-1n,2n**(192n-1n)-1n,2n**(200n-1n)-1n,2n**(208n-1n)-1n,2n**(216n-1n)-1n,2n**(224n-1n)-1n,2n**(232n-1n)-1n,2n**(240n-1n)-1n,2n**(248n-1n)-1n,2n**(256n-1n)-1n,-(2n**(8n-1n)),-(2n**(16n-1n)),-(2n**(24n-1n)),-(2n**(32n-1n)),-(2n**(40n-1n)),-(2n**(48n-1n)),-(2n**(56n-1n)),-(2n**(64n-1n)),-(2n**(72n-1n)),-(2n**(80n-1n)),-(2n**(88n-1n)),-(2n**(96n-1n)),-(2n**(104n-1n)),-(2n**(112n-1n)),-(2n**(120n-1n)),-(2n**(128n-1n)),-(2n**(136n-1n)),-(2n**(144n-1n)),-(2n**(152n-1n)),-(2n**(160n-1n)),-(2n**(168n-1n)),-(2n**(176n-1n)),-(2n**(184n-1n)),-(2n**(192n-1n)),-(2n**(200n-1n)),-(2n**(208n-1n)),-(2n**(216n-1n)),-(2n**(224n-1n)),-(2n**(232n-1n)),-(2n**(240n-1n)),-(2n**(248n-1n)),-(2n**(256n-1n));var Bo=2n**256n-1n;function Vo(e,t,n){let{checksumAddress:r,staticPosition:i}=n,a=ss(t.type);if(a){let[n,o]=a;return Go(e,{...t,type:o},{checksumAddress:r,length:n,staticPosition:i})}if(t.type===`tuple`)return Yo(e,t,{checksumAddress:r,staticPosition:i});if(t.type===`address`)return Wo(e,{checksum:r});if(t.type===`bool`)return Ko(e);if(t.type.startsWith(`bytes`))return qo(e,t,{staticPosition:i});if(t.type.startsWith(`uint`)||t.type.startsWith(`int`))return Jo(e,t);if(t.type===`string`)return Xo(e,{staticPosition:i});throw new ws(t.type)}var Ho=32,Uo=32;function Wo(e,t={}){let{checksum:n=!1}=t;return[(e=>n?Mo(e):e)(m(dn(e.readBytes(32),-20))),32]}function Go(e,t,n){let{checksumAddress:r,length:i,staticPosition:a}=n;if(!i){let n=a+C(e.readBytes(Uo)),i=n+Ho;e.setPosition(n);let o=C(e.readBytes(Ho)),s=cs(t),c=0,l=[];for(let n=0;n<o;++n){e.setPosition(i+(s?n*32:c));let[a,o]=Vo(e,t,{checksumAddress:r,staticPosition:i});c+=o,l.push(a)}return e.setPosition(a+32),[l,32]}if(cs(t)){let n=a+C(e.readBytes(Uo)),o=[];for(let a=0;a<i;++a){e.setPosition(n+a*32);let[i]=Vo(e,t,{checksumAddress:r,staticPosition:n});o.push(i)}return e.setPosition(a+32),[o,32]}let o=0,s=[];for(let n=0;n<i;++n){let[n,i]=Vo(e,t,{checksumAddress:r,staticPosition:a+o});o+=i,s.push(n)}return[s,o]}function Ko(e){return[Pe(e.readBytes(32),{size:32}),32]}function qo(e,t,{staticPosition:n}){let[r,i]=t.type.split(`bytes`);if(!i){let t=C(e.readBytes(32));e.setPosition(n+t);let r=C(e.readBytes(32));if(r===0)return e.setPosition(n+32),[`0x`,32];let i=e.readBytes(r);return e.setPosition(n+32),[m(i),32]}return[m(e.readBytes(Number.parseInt(i,10),32)),32]}function Jo(e,t){let n=t.type.startsWith(`int`),r=Number.parseInt(t.type.split(`int`)[1]||`256`,10),i=e.readBytes(32);return[r>48?a(i,{signed:n}):C(i,{signed:n}),32]}function Yo(e,t,n){let{checksumAddress:r,staticPosition:i}=n,a=t.components.length===0||t.components.some(({name:e})=>!e),o=a?[]:{},s=0;if(cs(t)){let n=i+C(e.readBytes(Uo));for(let i=0;i<t.components.length;++i){let c=t.components[i];e.setPosition(n+s);let[l,u]=Vo(e,c,{checksumAddress:r,staticPosition:n});s+=u,o[a?i:c?.name]=l}return e.setPosition(i+32),[o,32]}for(let n=0;n<t.components.length;++n){let c=t.components[n],[l,u]=Vo(e,c,{checksumAddress:r,staticPosition:i});o[a?n:c?.name]=l,s+=u}return[o,s]}function Xo(e,{staticPosition:t}){let n=t+C(e.readBytes(32));e.setPosition(n);let r=C(e.readBytes(32));if(r===0)return e.setPosition(t+32),[``,32];let i=je(Le(e.readBytes(r,32)));return e.setPosition(t+32),[i,32]}function Zo({checksumAddress:e,parameters:t,values:n}){let r=[];for(let i=0;i<t.length;i++)r.push(Qo({checksumAddress:e,parameter:t[i],value:n[i]}));return r}function Qo({checksumAddress:e=!1,parameter:t,value:n}){let r=t,i=ss(r.type);if(i){let[t,a]=i;return ts(n,{checksumAddress:e,length:t,parameter:{...r,type:a}})}if(r.type===`tuple`)return os(n,{checksumAddress:e,parameter:r});if(r.type===`address`)return es(n,{checksum:e});if(r.type===`bool`)return rs(n);if(r.type.startsWith(`uint`)||r.type.startsWith(`int`)){let e=r.type.startsWith(`int`),[,,t=`256`]=zo.exec(r.type)??[];return is(n,{signed:e,size:Number(t)})}if(r.type.startsWith(`bytes`))return ns(n,{type:r.type});if(r.type===`string`)return as(n);throw new ws(r.type)}function $o(e){let t=0;for(let n=0;n<e.length;n++){let{dynamic:r,encoded:i}=e[n];r?t+=32:t+=bt(i)}let n=[],r=[],i=0;for(let a=0;a<e.length;a++){let{dynamic:o,encoded:s}=e[a];o?(n.push(d(t+i,{size:32})),r.push(s),i+=bt(s)):n.push(s)}return c(...n,...r)}function es(e,t){let{checksum:n=!1}=t;return jo(e,{strict:n}),{dynamic:!1,encoded:Ct(e.toLowerCase())}}function ts(e,t){let{checksumAddress:n,length:r,parameter:i}=t,a=r===null;if(!Array.isArray(e))throw new Cs(e);if(!a&&e.length!==r)throw new bs({expectedLength:r,givenLength:e.length,type:`${i.type}[${r}]`});let o=!1,s=[];for(let t=0;t<e.length;t++){let r=Qo({checksumAddress:n,parameter:i,value:e[t]});r.dynamic&&(o=!0),s.push(r)}if(a||o){let e=$o(s);if(a){let t=d(s.length,{size:32});return{dynamic:!0,encoded:s.length>0?c(t,e):t}}if(o)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:c(...s.map(({encoded:e})=>e))}}function ns(e,{type:t}){let[,r]=t.split(`bytes`),i=bt(e);if(!r){let t=e;return i%32!=0&&(t=n(t,Math.ceil((e.length-2)/2/32)*32)),{dynamic:!0,encoded:c(Ct(d(i,{size:32})),t)}}if(i!==Number.parseInt(r,10))throw new xs({expectedSize:Number.parseInt(r,10),value:e});return{dynamic:!1,encoded:n(e)}}function rs(e){if(typeof e!=`boolean`)throw new T(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:Ct(Oe(e))}}function is(e,{signed:t,size:n}){if(typeof n==`number`){let r=2n**(BigInt(n)-(t?1n:0n))-1n,i=t?-r-1n:0n;if(e>r||e<i)throw new Te({max:r.toString(),min:i.toString(),signed:t,size:n/8,value:e.toString()})}return{dynamic:!1,encoded:d(e,{size:32,signed:t})}}function as(e){let t=he(e),r=Math.ceil(bt(t)/32),i=[];for(let e=0;e<r;e++)i.push(n(E(t,e*32,(e+1)*32)));return{dynamic:!0,encoded:c(n(d(bt(t),{size:32})),...i)}}function os(e,t){let{checksumAddress:n,parameter:r}=t,i=!1,a=[];for(let t=0;t<r.components.length;t++){let o=r.components[t],s=Qo({checksumAddress:n,parameter:o,value:e[Array.isArray(e)?t:o.name]});a.push(s),s.dynamic&&(i=!0)}return{dynamic:i,encoded:i?$o(a):c(...a.map(({encoded:e})=>e))}}function ss(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}function cs(e){let{type:t}=e;if(t===`string`||t===`bytes`||t.endsWith(`[]`))return!0;if(t===`tuple`)return e.components?.some(cs);let n=ss(e.type);return!!(n&&cs({...e,type:n[1]}))}var ls={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new ps({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new fs({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new ds({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new ds({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let n=t??this.position;return this.assertPosition(n+e-1),this.bytes.subarray(n,n+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,e&255),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();let n=this.inspectBytes(e);return this.position+=t??e,n},readUint8(){this.assertReadLimit(),this._touch();let e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();let e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();let e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();let e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){let t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function us(e,{recursiveReadLimit:t=8192}={}){let n=Object.create(ls);return n.bytes=e,n.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=t,n}var ds=class extends T{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.NegativeOffsetError`})}},fs=class extends T{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.PositionOutOfBoundsError`})}},ps=class extends T{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.RecursiveReadLimitExceededError`})}};function ms(e,t,n={}){let{as:r=`Array`,checksumAddress:i=!1}=n,a=typeof t==`string`?te(t):t,o=us(a);if(Se(a)===0&&e.length>0)throw new ys;if(Se(a)&&Se(a)<32)throw new vs({data:typeof t==`string`?t:m(t),parameters:e,size:Se(a)});let s=0,c=r===`Array`?[]:{};for(let t=0;t<e.length;++t){let n=e[t];o.setPosition(s);let[a,l]=Vo(o,n,{checksumAddress:i,staticPosition:0});s+=l,r===`Array`?c.push(a):c[n.name??t]=a}return c}function hs(e,t,n){let{checksumAddress:r=!1}=n??{};if(e.length!==t.length)throw new Ss({expectedLength:e.length,givenLength:t.length});let i=$o(Zo({checksumAddress:r,parameters:e,values:t}));return i.length===0?`0x`:i}function gs(e,t){if(e.length!==t.length)throw new Ss({expectedLength:e.length,givenLength:t.length});let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r];n.push(gs.encode(i,a))}return c(...n)}(function(e){function t(e,r,i=!1){if(e===`address`){let e=r;return jo(e),Ct(e.toLowerCase(),i?32:0)}if(e===`string`)return he(r);if(e===`bytes`)return r;if(e===`bool`)return Ct(Oe(r),i?32:1);let a=e.match(zo);if(a){let[e,t,n=`256`]=a,o=Number.parseInt(n,10)/8;return d(r,{size:i?32:o,signed:t===`int`})}let o=e.match(Ro);if(o){let[e,t]=o;if(Number.parseInt(t,10)!==(r.length-2)/2)throw new xs({expectedSize:Number.parseInt(t,10),value:r});return n(r,i?32:0)}let s=e.match(Lo);if(s&&Array.isArray(r)){let[e,n]=s,i=[];for(let e=0;e<r.length;e++)i.push(t(n,r[e],!0));return i.length===0?`0x`:c(...i)}throw new ws(e)}e.encode=t})(gs||={});function _s(e){return Array.isArray(e)&&typeof e[0]==`string`||typeof e==`string`?Zn(e):e}var vs=class extends T{constructor({data:e,parameters:t,size:n}){super(`Data size of ${n} bytes is too small for given parameters.`,{metaMessages:[`Params: (${ae(t)})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.DataSizeTooSmallError`})}},ys=class extends T{constructor(){super(`Cannot decode zero data ("0x") with ABI parameters.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.ZeroDataError`})}},bs=class extends T{constructor({expectedLength:e,givenLength:t,type:n}){super(`Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.ArrayLengthMismatchError`})}},xs=class extends T{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${bt(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.BytesSizeMismatchError`})}},Ss=class extends T{constructor({expectedLength:e,givenLength:t}){super([`ABI encoding parameters/values length mismatch.`,`Expected length (parameters): ${e}`,`Given length (values): ${t}`].join(`
`)),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.LengthMismatchError`})}},Cs=class extends T{constructor(e){super(`Value \`${e}\` is not a valid array.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.InvalidArrayError`})}},ws=class extends T{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.InvalidTypeError`})}},M=BigInt(0),N=BigInt(1),Ts=BigInt(2),Es=BigInt(3),Ds=BigInt(4),Os=BigInt(5),ks=BigInt(8);function P(e,t){let n=e%t;return n>=M?n:t+n}function As(e,t,n){let r=e;for(;t-- >M;)r*=r,r%=n;return r}function js(e,t){if(e===M)throw Error(`invert: expected non-zero number`);if(t<=M)throw Error(`invert: expected positive modulus, got `+t);let n=P(e,t),r=t,i=M,a=N,o=N,s=M;for(;n!==M;){let e=r/n,t=r%n,c=i-o*e,l=a-s*e;r=n,n=t,i=o,a=s,o=c,s=l}if(r!==N)throw Error(`invert: does not exist`);return P(i,t)}function Ms(e,t){let n=(e.ORDER+N)/Ds,r=e.pow(t,n);if(!e.eql(e.sqr(r),t))throw Error(`Cannot find square root`);return r}function Ns(e,t){let n=(e.ORDER-Os)/ks,r=e.mul(t,Ts),i=e.pow(r,n),a=e.mul(t,i),o=e.mul(e.mul(a,Ts),i),s=e.mul(a,e.sub(o,e.ONE));if(!e.eql(e.sqr(s),t))throw Error(`Cannot find square root`);return s}function Ps(e){if(e<BigInt(3))throw Error(`sqrt is not defined for small field`);let t=e-N,n=0;for(;t%Ts===M;)t/=Ts,n++;let r=Ts,i=Hs(e);for(;Bs(i,r)===1;)if(r++>1e3)throw Error(`Cannot find square root: probably non-prime P`);if(n===1)return Ms;let a=i.pow(r,t),o=(t+N)/Ts;return function(e,r){if(e.is0(r))return r;if(Bs(e,r)!==1)throw Error(`Cannot find square root`);let i=n,s=e.mul(e.ONE,a),c=e.pow(r,t),l=e.pow(r,o);for(;!e.eql(c,e.ONE);){if(e.is0(c))return e.ZERO;let t=1,n=e.sqr(c);for(;!e.eql(n,e.ONE);)if(t++,n=e.sqr(n),t===i)throw Error(`Cannot find square root`);let r=N<<BigInt(i-t-1),a=e.pow(s,r);i=t,s=e.sqr(a),c=e.mul(c,s),l=e.mul(l,a)}return l}}function Fs(e){return e%Ds===Es?Ms:e%ks===Os?Ns:Ps(e)}var Is=[`create`,`isValid`,`is0`,`neg`,`inv`,`sqrt`,`sqr`,`eql`,`add`,`sub`,`mul`,`pow`,`div`,`addN`,`subN`,`mulN`,`sqrN`];function Ls(e){return Dn(e,Is.reduce((e,t)=>(e[t]=`function`,e),{ORDER:`bigint`,MASK:`bigint`,BYTES:`isSafeInteger`,BITS:`isSafeInteger`}))}function Rs(e,t,n){if(n<M)throw Error(`invalid exponent, negatives unsupported`);if(n===M)return e.ONE;if(n===N)return t;let r=e.ONE,i=t;for(;n>M;)n&N&&(r=e.mul(r,i)),i=e.sqr(i),n>>=N;return r}function zs(e,t,n=!1){let r=Array(t.length).fill(n?e.ZERO:void 0),i=t.reduce((t,n,i)=>e.is0(n)?t:(r[i]=t,e.mul(t,n)),e.ONE),a=e.inv(i);return t.reduceRight((t,n,i)=>e.is0(n)?t:(r[i]=e.mul(t,r[i]),e.mul(t,n)),a),r}function Bs(e,t){let n=(e.ORDER-N)/Ts,r=e.pow(t,n),i=e.eql(r,e.ONE),a=e.eql(r,e.ZERO),o=e.eql(r,e.neg(e.ONE));if(!i&&!a&&!o)throw Error(`invalid Legendre symbol result`);return i?1:a?0:-1}function Vs(e,t){t!==void 0&&Cn(t);let n=t===void 0?e.toString(2).length:t;return{nBitLength:n,nByteLength:Math.ceil(n/8)}}function Hs(e,t,n=!1,r={}){if(e<=M)throw Error(`invalid field: expected ORDER > 0, got `+e);let{nBitLength:i,nByteLength:a}=Vs(e,t);if(a>2048)throw Error(`invalid field: expected ORDER of <= 2048 bytes`);let o,s=Object.freeze({ORDER:e,isLE:n,BITS:i,BYTES:a,MASK:En(i),ZERO:M,ONE:N,create:t=>P(t,e),isValid:t=>{if(typeof t!=`bigint`)throw Error(`invalid field element: expected bigint, got `+typeof t);return M<=t&&t<e},is0:e=>e===M,isOdd:e=>(e&N)===N,neg:t=>P(-t,e),eql:(e,t)=>e===t,sqr:t=>P(t*t,e),add:(t,n)=>P(t+n,e),sub:(t,n)=>P(t-n,e),mul:(t,n)=>P(t*n,e),pow:(e,t)=>Rs(s,e,t),div:(t,n)=>P(t*js(n,e),e),sqrN:e=>e*e,addN:(e,t)=>e+t,subN:(e,t)=>e-t,mulN:(e,t)=>e*t,inv:t=>js(t,e),sqrt:r.sqrt||(t=>(o||=Fs(e),o(s,t))),toBytes:e=>n?Tn(e,a):jn(e,a),fromBytes:e=>{if(e.length!==a)throw Error(`Field.fromBytes: expected `+a+` bytes, got `+e.length);return n?On(e):Vn(e)},invertBatch:e=>zs(s,e),cmov:(e,t,n)=>n?t:e});return Object.freeze(s)}function Us(e){if(typeof e!=`bigint`)throw Error(`field order must be bigint`);let t=e.toString(2).length;return Math.ceil(t/8)}function Ws(e){let t=Us(e);return t+Math.ceil(t/2)}function Gs(e,t,n=!1){let r=e.length,i=Us(t),a=Ws(t);if(r<16||r<a||r>1024)throw Error(`expected `+a+`-1024 bytes of input, got `+r);let o=P(n?On(e):Vn(e),t-N)+N;return n?Tn(o,i):jn(o,i)}var Ks=BigInt(0),qs=BigInt(1);function Js(e,t){let n=t.negate();return e?n:t}function Ys(e,t){if(!Number.isSafeInteger(e)||e<=0||e>t)throw Error(`invalid window size, expected [1..`+t+`], got W=`+e)}function Xs(e,t){Ys(e,t);let n=Math.ceil(t/e)+1,r=2**(e-1),i=2**e;return{windows:n,windowSize:r,mask:En(e),maxNumber:i,shiftBy:BigInt(e)}}function Zs(e,t,n){let{windowSize:r,mask:i,maxNumber:a,shiftBy:o}=n,s=Number(e&i),c=e>>o;s>r&&(s-=a,c+=qs);let l=t*r,u=l+Math.abs(s)-1,d=s===0,f=s<0,p=t%2!=0;return{nextN:c,offset:u,isZero:d,isNeg:f,isNegF:p,offsetF:l}}function Qs(e,t){if(!Array.isArray(e))throw Error(`array expected`);e.forEach((e,n)=>{if(!(e instanceof t))throw Error(`invalid point at index `+n)})}function $s(e,t){if(!Array.isArray(e))throw Error(`array of scalars expected`);e.forEach((e,n)=>{if(!t.isValid(e))throw Error(`invalid scalar at index `+n)})}var ec=new WeakMap,tc=new WeakMap;function nc(e){return tc.get(e)||1}function rc(e,t){return{constTimeNegate:Js,hasPrecomputes(e){return nc(e)!==1},unsafeLadder(t,n,r=e.ZERO){let i=t;for(;n>Ks;)n&qs&&(r=r.add(i)),i=i.double(),n>>=qs;return r},precomputeWindow(e,n){let{windows:r,windowSize:i}=Xs(n,t),a=[],o=e,s=o;for(let e=0;e<r;e++){s=o,a.push(s);for(let e=1;e<i;e++)s=s.add(o),a.push(s);o=s.double()}return a},wNAF(n,r,i){let a=e.ZERO,o=e.BASE,s=Xs(n,t);for(let e=0;e<s.windows;e++){let{nextN:t,offset:n,isZero:c,isNeg:l,isNegF:u,offsetF:d}=Zs(i,e,s);i=t,c?o=o.add(Js(u,r[d])):a=a.add(Js(l,r[n]))}return{p:a,f:o}},wNAFUnsafe(n,r,i,a=e.ZERO){let o=Xs(n,t);for(let e=0;e<o.windows&&i!==Ks;e++){let{nextN:t,offset:n,isZero:s,isNeg:c}=Zs(i,e,o);if(i=t,!s){let e=r[n];a=a.add(c?e.negate():e)}}return a},getPrecomputes(e,t,n){let r=ec.get(t);return r||(r=this.precomputeWindow(t,e),e!==1&&ec.set(t,n(r))),r},wNAFCached(e,t,n){let r=nc(e);return this.wNAF(r,this.getPrecomputes(r,e,n),t)},wNAFCachedUnsafe(e,t,n,r){let i=nc(e);return i===1?this.unsafeLadder(e,t,r):this.wNAFUnsafe(i,this.getPrecomputes(i,e,n),t,r)},setWindowSize(e,n){Ys(n,t),tc.set(e,n),ec.delete(e)}}}function ic(e,t,n,r){Qs(n,e),$s(r,t);let i=n.length,a=r.length;if(i!==a)throw Error(`arrays of points and scalars must have equal length`);let o=e.ZERO,s=Nn(BigInt(i)),c=1;s>12?c=s-3:s>4?c=s-2:s>0&&(c=2);let l=En(c),u=Array(Number(l)+1).fill(o),d=Math.floor((t.BITS-1)/c)*c,f=o;for(let e=d;e>=0;e-=c){u.fill(o);for(let t=0;t<a;t++){let i=r[t],a=Number(i>>BigInt(e)&l);u[a]=u[a].add(n[t])}let t=o;for(let e=u.length-1,n=o;e>0;e--)n=n.add(u[e]),t=t.add(n);if(f=f.add(t),e!==0)for(let e=0;e<c;e++)f=f.double()}return f}function ac(e){return Ls(e.Fp),Dn(e,{n:`bigint`,h:`bigint`,Gx:`field`,Gy:`field`},{nBitLength:`isSafeInteger`,nByteLength:`isSafeInteger`}),Object.freeze({...Vs(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}function oc(e){e.lowS!==void 0&&Ln(`lowS`,e.lowS),e.prehash!==void 0&&Ln(`prehash`,e.prehash)}function sc(e){let t=ac(e);Dn(t,{a:`field`,b:`field`},{allowInfinityPoint:`boolean`,allowedPrivateKeyLengths:`array`,clearCofactor:`function`,fromBytes:`function`,isTorsionFree:`function`,toBytes:`function`,wrapPrivateKey:`boolean`});let{endo:n,Fp:r,a:i}=t;if(n){if(!r.eql(i,r.ZERO))throw Error(`invalid endo: CURVE.a must be 0`);if(typeof n!=`object`||typeof n.beta!=`bigint`||typeof n.splitScalar!=`function`)throw Error(`invalid endo: expected "beta": bigint and "splitScalar": function`)}return Object.freeze({...t})}var cc={Err:class extends Error{constructor(e=``){super(e)}},_tlv:{encode:(e,t)=>{let{Err:n}=cc;if(e<0||e>256)throw new n(`tlv.encode: wrong tag`);if(t.length&1)throw new n(`tlv.encode: unpadded data`);let r=t.length/2,i=Wn(r);if(i.length/2&128)throw new n(`tlv.encode: long form length too big`);let a=r>127?Wn(i.length/2|128):``;return Wn(e)+a+i+t},decode(e,t){let{Err:n}=cc,r=0;if(e<0||e>256)throw new n(`tlv.encode: wrong tag`);if(t.length<2||t[r++]!==e)throw new n(`tlv.decode: wrong tlv`);let i=t[r++],a=!!(i&128),o=0;if(!a)o=i;else{let e=i&127;if(!e)throw new n(`tlv.decode(long): indefinite length not supported`);if(e>4)throw new n(`tlv.decode(long): byte length is too big`);let a=t.subarray(r,r+e);if(a.length!==e)throw new n(`tlv.decode: length bytes not complete`);if(a[0]===0)throw new n(`tlv.decode(long): zero leftmost byte`);for(let e of a)o=o<<8|e;if(r+=e,o<128)throw new n(`tlv.decode(long): not minimal encoding`)}let s=t.subarray(r,r+o);if(s.length!==o)throw new n(`tlv.decode: wrong value length`);return{v:s,l:t.subarray(r+o)}}},_int:{encode(e){let{Err:t}=cc;if(e<uc)throw new t(`integer: negative integers are not allowed`);let n=Wn(e);if(Number.parseInt(n[0],16)&8&&(n=`00`+n),n.length&1)throw new t(`unexpected DER parsing assertion: unpadded hex`);return n},decode(e){let{Err:t}=cc;if(e[0]&128)throw new t(`invalid signature integer: negative`);if(e[0]===0&&!(e[1]&128))throw new t(`invalid signature integer: unnecessary leading zero`);return Vn(e)}},toSig(e){let{Err:t,_int:n,_tlv:r}=cc,i=kn(`signature`,e),{v:a,l:o}=r.decode(48,i);if(o.length)throw new t(`invalid signature: left bytes after parsing`);let{v:s,l:c}=r.decode(2,a),{v:l,l:u}=r.decode(2,c);if(u.length)throw new t(`invalid signature: left bytes after parsing`);return{r:n.decode(s),s:n.decode(l)}},hexFromSig(e){let{_tlv:t,_int:n}=cc,r=t.encode(2,n.encode(e.r))+t.encode(2,n.encode(e.s));return t.encode(48,r)}};function lc(e,t){return Rn(jn(e,t))}var uc=BigInt(0),F=BigInt(1),dc=BigInt(2),fc=BigInt(3),pc=BigInt(4);function mc(e){let t=sc(e),{Fp:n}=t,r=Hs(t.n,t.nBitLength),i=t.toBytes||((e,t,r)=>{let i=t.toAffine();return Fn(Uint8Array.from([4]),n.toBytes(i.x),n.toBytes(i.y))}),a=t.fromBytes||(e=>{let t=e.subarray(1);return{x:n.fromBytes(t.subarray(0,n.BYTES)),y:n.fromBytes(t.subarray(n.BYTES,2*n.BYTES))}});function o(e){let{a:r,b:i}=t,a=n.sqr(e),o=n.mul(a,e);return n.add(n.add(o,n.mul(e,r)),i)}function s(e,t){let r=n.sqr(t),i=o(e);return n.eql(r,i)}if(!s(t.Gx,t.Gy))throw Error(`bad curve params: generator point`);let c=n.mul(n.pow(t.a,fc),pc),l=n.mul(n.sqr(t.b),BigInt(27));if(n.is0(n.add(c,l)))throw Error(`bad curve params: a or b`);function u(e){return zn(e,F,t.n)}function d(e){let{allowedPrivateKeyLengths:n,nByteLength:r,wrapPrivateKey:i,n:a}=t;if(n&&typeof e!=`bigint`){if(In(e)&&(e=Rn(e)),typeof e!=`string`||!n.includes(e.length))throw Error(`invalid private key`);e=e.padStart(r*2,`0`)}let o;try{o=typeof e==`bigint`?e:Vn(kn(`private key`,e,r))}catch{throw Error(`invalid private key, expected hex or `+r+` bytes, got `+typeof e)}return i&&(o=P(o,a)),Hn(`private key`,o,F,a),o}function f(e){if(!(e instanceof h))throw Error(`ProjectivePoint expected`)}let p=Mn((e,t)=>{let{px:r,py:i,pz:a}=e;if(n.eql(a,n.ONE))return{x:r,y:i};let o=e.is0();t??=o?n.ONE:n.inv(a);let s=n.mul(r,t),c=n.mul(i,t),l=n.mul(a,t);if(o)return{x:n.ZERO,y:n.ZERO};if(!n.eql(l,n.ONE))throw Error(`invZ was invalid`);return{x:s,y:c}}),m=Mn(e=>{if(e.is0()){if(t.allowInfinityPoint&&!n.is0(e.py))return;throw Error(`bad point: ZERO`)}let{x:r,y:i}=e.toAffine();if(!n.isValid(r)||!n.isValid(i))throw Error(`bad point: x or y not FE`);if(!s(r,i))throw Error(`bad point: equation left != right`);if(!e.isTorsionFree())throw Error(`bad point: not in prime-order subgroup`);return!0});class h{constructor(e,t,r){if(e==null||!n.isValid(e))throw Error(`x required`);if(t==null||!n.isValid(t)||n.is0(t))throw Error(`y required`);if(r==null||!n.isValid(r))throw Error(`z required`);this.px=e,this.py=t,this.pz=r,Object.freeze(this)}static fromAffine(e){let{x:t,y:r}=e||{};if(!e||!n.isValid(t)||!n.isValid(r))throw Error(`invalid affine point`);if(e instanceof h)throw Error(`projective point not allowed`);let i=e=>n.eql(e,n.ZERO);return i(t)&&i(r)?h.ZERO:new h(t,r,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(e){let t=zs(n,e.map(e=>e.pz));return e.map((e,n)=>e.toAffine(t[n])).map(h.fromAffine)}static fromHex(e){let t=h.fromAffine(a(kn(`pointHex`,e)));return t.assertValidity(),t}static fromPrivateKey(e){return h.BASE.multiply(d(e))}static msm(e,t){return ic(h,r,e,t)}_setWindowSize(e){v.setWindowSize(this,e)}assertValidity(){m(this)}hasEvenY(){let{y:e}=this.toAffine();if(n.isOdd)return!n.isOdd(e);throw Error(`Field doesn't support isOdd`)}equals(e){f(e);let{px:t,py:r,pz:i}=this,{px:a,py:o,pz:s}=e,c=n.eql(n.mul(t,s),n.mul(a,i)),l=n.eql(n.mul(r,s),n.mul(o,i));return c&&l}negate(){return new h(this.px,n.neg(this.py),this.pz)}double(){let{a:e,b:r}=t,i=n.mul(r,fc),{px:a,py:o,pz:s}=this,c=n.ZERO,l=n.ZERO,u=n.ZERO,d=n.mul(a,a),f=n.mul(o,o),p=n.mul(s,s),m=n.mul(a,o);return m=n.add(m,m),u=n.mul(a,s),u=n.add(u,u),c=n.mul(e,u),l=n.mul(i,p),l=n.add(c,l),c=n.sub(f,l),l=n.add(f,l),l=n.mul(c,l),c=n.mul(m,c),u=n.mul(i,u),p=n.mul(e,p),m=n.sub(d,p),m=n.mul(e,m),m=n.add(m,u),u=n.add(d,d),d=n.add(u,d),d=n.add(d,p),d=n.mul(d,m),l=n.add(l,d),p=n.mul(o,s),p=n.add(p,p),d=n.mul(p,m),c=n.sub(c,d),u=n.mul(p,f),u=n.add(u,u),u=n.add(u,u),new h(c,l,u)}add(e){f(e);let{px:r,py:i,pz:a}=this,{px:o,py:s,pz:c}=e,l=n.ZERO,u=n.ZERO,d=n.ZERO,p=t.a,m=n.mul(t.b,fc),g=n.mul(r,o),_=n.mul(i,s),v=n.mul(a,c),y=n.add(r,i),b=n.add(o,s);y=n.mul(y,b),b=n.add(g,_),y=n.sub(y,b),b=n.add(r,a);let x=n.add(o,c);return b=n.mul(b,x),x=n.add(g,v),b=n.sub(b,x),x=n.add(i,a),l=n.add(s,c),x=n.mul(x,l),l=n.add(_,v),x=n.sub(x,l),d=n.mul(p,b),l=n.mul(m,v),d=n.add(l,d),l=n.sub(_,d),d=n.add(_,d),u=n.mul(l,d),_=n.add(g,g),_=n.add(_,g),v=n.mul(p,v),b=n.mul(m,b),_=n.add(_,v),v=n.sub(g,v),v=n.mul(p,v),b=n.add(b,v),g=n.mul(_,b),u=n.add(u,g),g=n.mul(x,b),l=n.mul(y,l),l=n.sub(l,g),g=n.mul(y,_),d=n.mul(x,d),d=n.add(d,g),new h(l,u,d)}subtract(e){return this.add(e.negate())}is0(){return this.equals(h.ZERO)}wNAF(e){return v.wNAFCached(this,e,h.normalizeZ)}multiplyUnsafe(e){let{endo:r,n:i}=t;Hn(`scalar`,e,uc,i);let a=h.ZERO;if(e===uc)return a;if(this.is0()||e===F)return this;if(!r||v.hasPrecomputes(this))return v.wNAFCachedUnsafe(this,e,h.normalizeZ);let{k1neg:o,k1:s,k2neg:c,k2:l}=r.splitScalar(e),u=a,d=a,f=this;for(;s>uc||l>uc;)s&F&&(u=u.add(f)),l&F&&(d=d.add(f)),f=f.double(),s>>=F,l>>=F;return o&&(u=u.negate()),c&&(d=d.negate()),d=new h(n.mul(d.px,r.beta),d.py,d.pz),u.add(d)}multiply(e){let{endo:r,n:i}=t;Hn(`scalar`,e,F,i);let a,o;if(r){let{k1neg:t,k1:i,k2neg:s,k2:c}=r.splitScalar(e),{p:l,f:u}=this.wNAF(i),{p:d,f}=this.wNAF(c);l=v.constTimeNegate(t,l),d=v.constTimeNegate(s,d),d=new h(n.mul(d.px,r.beta),d.py,d.pz),a=l.add(d),o=u.add(f)}else{let{p:t,f:n}=this.wNAF(e);a=t,o=n}return h.normalizeZ([a,o])[0]}multiplyAndAddUnsafe(e,t,n){let r=h.BASE,i=(e,t)=>t===uc||t===F||!e.equals(r)?e.multiplyUnsafe(t):e.multiply(t),a=i(this,t).add(i(e,n));return a.is0()?void 0:a}toAffine(e){return p(this,e)}isTorsionFree(){let{h:e,isTorsionFree:n}=t;if(e===F)return!0;if(n)return n(h,this);throw Error(`isTorsionFree() has not been declared for the elliptic curve`)}clearCofactor(){let{h:e,clearCofactor:n}=t;return e===F?this:n?n(h,this):this.multiplyUnsafe(t.h)}toRawBytes(e=!0){return Ln(`isCompressed`,e),this.assertValidity(),i(h,this,e)}toHex(e=!0){return Ln(`isCompressed`,e),Rn(this.toRawBytes(e))}}h.BASE=new h(t.Gx,t.Gy,n.ONE),h.ZERO=new h(n.ZERO,n.ONE,n.ZERO);let{endo:g,nBitLength:_}=t,v=rc(h,g?Math.ceil(_/2):_);return{CURVE:t,ProjectivePoint:h,normPrivateKeyToScalar:d,weierstrassEquation:o,isWithinCurveOrder:u}}function hc(e){let t=ac(e);return Dn(t,{hash:`hash`,hmac:`function`,randomBytes:`function`},{bits2int:`function`,bits2int_modN:`function`,lowS:`boolean`}),Object.freeze({lowS:!0,...t})}function gc(e){let t=hc(e),{Fp:n,n:r,nByteLength:i,nBitLength:a}=t,o=n.BYTES+1,s=2*n.BYTES+1;function c(e){return P(e,r)}function l(e){return js(e,r)}let{ProjectivePoint:u,normPrivateKeyToScalar:d,weierstrassEquation:f,isWithinCurveOrder:p}=mc({...t,toBytes(e,t,r){let i=t.toAffine(),a=n.toBytes(i.x),o=Fn;return Ln(`isCompressed`,r),r?o(Uint8Array.from([t.hasEvenY()?2:3]),a):o(Uint8Array.from([4]),a,n.toBytes(i.y))},fromBytes(e){let t=e.length,r=e[0],i=e.subarray(1);if(t===o&&(r===2||r===3)){let e=Vn(i);if(!zn(e,F,n.ORDER))throw Error(`Point is not on curve`);let t=f(e),a;try{a=n.sqrt(t)}catch(e){let t=e instanceof Error?`: `+e.message:``;throw Error(`Point is not on curve`+t)}let o=(a&F)===F;return(r&1)==1!==o&&(a=n.neg(a)),{x:e,y:a}}else if(t===s&&r===4)return{x:n.fromBytes(i.subarray(0,n.BYTES)),y:n.fromBytes(i.subarray(n.BYTES,2*n.BYTES))};else{let e=o,n=s;throw Error(`invalid Point, expected length of `+e+`, or uncompressed `+n+`, got `+t)}}});function m(e){return e>r>>F}function h(e){return m(e)?c(-e):e}let g=(e,t,n)=>Vn(e.slice(t,n));class _{constructor(e,t,n){Hn(`r`,e,F,r),Hn(`s`,t,F,r),this.r=e,this.s=t,n!=null&&(this.recovery=n),Object.freeze(this)}static fromCompact(e){let t=i;return e=kn(`compactSignature`,e,t*2),new _(g(e,0,t),g(e,t,2*t))}static fromDER(e){let{r:t,s:n}=cc.toSig(kn(`DER`,e));return new _(t,n)}assertValidity(){}addRecoveryBit(e){return new _(this.r,this.s,e)}recoverPublicKey(e){let{r,s:i,recovery:a}=this,o=C(kn(`msgHash`,e));if(a==null||![0,1,2,3].includes(a))throw Error(`recovery id invalid`);let s=a===2||a===3?r+t.n:r;if(s>=n.ORDER)throw Error(`recovery id 2 or 3 invalid`);let d=a&1?`03`:`02`,f=u.fromHex(d+lc(s,n.BYTES)),p=l(s),m=c(-o*p),h=c(i*p),g=u.BASE.multiplyAndAddUnsafe(f,m,h);if(!g)throw Error(`point at infinify`);return g.assertValidity(),g}hasHighS(){return m(this.s)}normalizeS(){return this.hasHighS()?new _(this.r,c(-this.s),this.recovery):this}toDERRawBytes(){return An(this.toDERHex())}toDERHex(){return cc.hexFromSig(this)}toCompactRawBytes(){return An(this.toCompactHex())}toCompactHex(){let e=i;return lc(this.r,e)+lc(this.s,e)}}let v={isValidPrivateKey(e){try{return d(e),!0}catch{return!1}},normPrivateKeyToScalar:d,randomPrivateKey:()=>{let e=Ws(t.n);return Gs(t.randomBytes(e),t.n)},precompute(e=8,t=u.BASE){return t._setWindowSize(e),t.multiply(BigInt(3)),t}};function y(e,t=!0){return u.fromPrivateKey(e).toRawBytes(t)}function b(e){if(typeof e==`bigint`)return!1;if(e instanceof u)return!0;let r=kn(`key`,e).length,a=n.BYTES,o=a+1,s=2*a+1;if(!(t.allowedPrivateKeyLengths||i===o))return r===o||r===s}function x(e,t,n=!0){if(b(e)===!0)throw Error(`first arg must be private key`);if(b(t)===!1)throw Error(`second arg must be public key`);return u.fromHex(t).multiply(d(e)).toRawBytes(n)}let S=t.bits2int||function(e){if(e.length>8192)throw Error(`input is too large`);let t=Vn(e),n=e.length*8-a;return n>0?t>>BigInt(n):t},C=t.bits2int_modN||function(e){return c(S(e))},w=En(a);function ee(e){return Hn(`num < 2^`+a,e,uc,w),jn(e,i)}function te(e,r,i=ne){if([`recovered`,`canonical`].some(e=>e in i))throw Error(`sign() legacy options not supported`);let{hash:a,randomBytes:o}=t,{lowS:s,prehash:f,extraEntropy:g}=i;s??=!0,e=kn(`msgHash`,e),oc(i),f&&(e=kn(`prehashed msgHash`,a(e)));let v=C(e),y=d(r),b=[ee(y),ee(v)];if(g!=null&&g!==!1){let e=g===!0?o(n.BYTES):g;b.push(kn(`extraEntropy`,e))}let x=Fn(...b),w=v;function te(e){let t=S(e);if(!p(t))return;let n=l(t),r=u.BASE.multiply(t).toAffine(),i=c(r.x);if(i===uc)return;let a=c(n*c(w+i*y));if(a===uc)return;let o=(r.x===i?0:2)|Number(r.y&F),d=a;return s&&m(a)&&(d=h(a),o^=1),new _(i,d,o)}return{seed:x,k2sig:te}}let ne={lowS:t.lowS,prehash:!1},re={lowS:t.lowS,prehash:!1};function ie(e,n,r=ne){let{seed:i,k2sig:a}=te(e,n,r),o=t;return Un(o.hash.outputLen,o.nByteLength,o.hmac)(i,a)}u.BASE._setWindowSize(8);function ae(e,n,r,i=re){let a=e;n=kn(`msgHash`,n),r=kn(`publicKey`,r);let{lowS:o,prehash:s,format:d}=i;if(oc(i),`strict`in i)throw Error(`options.strict was renamed to lowS`);if(d!==void 0&&d!==`compact`&&d!==`der`)throw Error(`format must be compact or der`);let f=typeof a==`string`||In(a),p=!f&&!d&&typeof a==`object`&&!!a&&typeof a.r==`bigint`&&typeof a.s==`bigint`;if(!f&&!p)throw Error(`invalid signature, expected Uint8Array, hex string or Signature instance`);let m,h;try{if(p&&(m=new _(a.r,a.s)),f){try{d!==`compact`&&(m=_.fromDER(a))}catch(e){if(!(e instanceof cc.Err))throw e}!m&&d!==`der`&&(m=_.fromCompact(a))}h=u.fromHex(r)}catch{return!1}if(!m||o&&m.hasHighS())return!1;s&&(n=t.hash(n));let{r:g,s:v}=m,y=C(n),b=l(v),x=c(y*b),S=c(g*b),w=u.BASE.multiplyAndAddUnsafe(h,x,S)?.toAffine();return w?c(w.x)===g:!1}return{CURVE:t,getPublicKey:y,getSharedSecret:x,sign:ie,verify:ae,ProjectivePoint:u,Signature:_,utils:v}}function _c(e,t){let n=e.ORDER,r=uc;for(let e=n-F;e%dc===uc;e/=dc)r+=F;let i=r,a=dc<<i-F-F,o=a*dc,s=(n-F)/o,c=(s-F)/dc,l=o-F,u=a,d=e.pow(t,s),f=e.pow(t,(s+F)/dc),p=(t,n)=>{let r=d,a=e.pow(n,l),o=e.sqr(a);o=e.mul(o,n);let s=e.mul(t,o);s=e.pow(s,c),s=e.mul(s,a),a=e.mul(s,n),o=e.mul(s,t);let p=e.mul(o,a);s=e.pow(p,u);let m=e.eql(s,e.ONE);a=e.mul(o,f),s=e.mul(p,r),o=e.cmov(a,o,m),p=e.cmov(s,p,m);for(let t=i;t>F;t--){let n=t-dc;n=dc<<n-F;let i=e.pow(p,n),s=e.eql(i,e.ONE);a=e.mul(o,r),r=e.mul(r,r),i=e.mul(p,r),o=e.cmov(a,o,s),p=e.cmov(i,p,s)}return{isValid:m,value:o}};if(e.ORDER%pc===fc){let n=(e.ORDER-fc)/pc,r=e.sqrt(e.neg(t));p=(t,i)=>{let a=e.sqr(i),o=e.mul(t,i);a=e.mul(a,o);let s=e.pow(a,n);s=e.mul(s,o);let c=e.mul(s,r),l=e.mul(e.sqr(s),i),u=e.eql(l,t);return{isValid:u,value:e.cmov(c,s,u)}}}return p}function vc(e,t){if(Ls(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw Error(`mapToCurveSimpleSWU: invalid opts`);let n=_c(e,t.Z);if(!e.isOdd)throw Error(`Fp.isOdd is not implemented!`);return r=>{let i,a,o,s,c,l,u,d;i=e.sqr(r),i=e.mul(i,t.Z),a=e.sqr(i),a=e.add(a,i),o=e.add(a,e.ONE),o=e.mul(o,t.B),s=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),s=e.mul(s,t.A),a=e.sqr(o),l=e.sqr(s),c=e.mul(l,t.A),a=e.add(a,c),a=e.mul(a,o),l=e.mul(l,s),c=e.mul(l,t.B),a=e.add(a,c),u=e.mul(i,o);let{isValid:f,value:p}=n(a,l);d=e.mul(i,r),d=e.mul(d,p),u=e.cmov(u,o,f),d=e.cmov(d,p,f);let m=e.isOdd(r)===e.isOdd(d);d=e.cmov(e.neg(d),d,m);let h=zs(e,[s],!0)[0];return u=e.mul(u,h),{x:u,y:d}}}function yc(e){return{hash:e,hmac:(t,...n)=>Oo(e,t,xn(...n)),randomBytes:yn}}function bc(e,t){let n=t=>gc({...e,...yc(t)});return{...n(t),create:n}}var xc=Vn;function Sc(e,t){if(wc(e),wc(t),e<0||e>=1<<8*t)throw Error(`invalid I2OSP input: `+e);let n=Array.from({length:t}).fill(0);for(let r=t-1;r>=0;r--)n[r]=e&255,e>>>=8;return new Uint8Array(n)}function Cc(e,t){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r]^t[r];return n}function wc(e){if(!Number.isSafeInteger(e))throw Error(`number expected`)}function Tc(e,t,n,r){Bn(e),Bn(t),wc(n),t.length>255&&(t=r(Fn(qn(`H2C-OVERSIZE-DST-`),t)));let{outputLen:i,blockLen:a}=r,o=Math.ceil(n/i);if(n>65535||o>255)throw Error(`expand_message_xmd: invalid lenInBytes`);let s=Fn(t,Sc(t.length,1)),c=Sc(0,a),l=Sc(n,2),u=Array(o),d=r(Fn(c,e,l,Sc(0,1),s));u[0]=r(Fn(d,Sc(1,1),s));for(let e=1;e<=o;e++)u[e]=r(Fn(Cc(d,u[e-1]),Sc(e+1,1),s));return Fn(...u).slice(0,n)}function Ec(e,t,n,r,i){if(Bn(e),Bn(t),wc(n),t.length>255){let e=Math.ceil(2*r/8);t=i.create({dkLen:e}).update(qn(`H2C-OVERSIZE-DST-`)).update(t).digest()}if(n>65535||t.length>255)throw Error(`expand_message_xof: invalid lenInBytes`);return i.create({dkLen:n}).update(e).update(Sc(n,2)).update(t).update(Sc(t.length,1)).digest()}function Dc(e,t,n){Dn(n,{DST:`stringOrUint8Array`,p:`bigint`,m:`isSafeInteger`,k:`isSafeInteger`,hash:`hash`});let{p:r,k:i,m:a,hash:o,expand:s,DST:c}=n;Bn(e),wc(t);let l=typeof c==`string`?qn(c):c,u=r.toString(2).length,d=Math.ceil((u+i)/8),f=t*a*d,p;if(s===`xmd`)p=Tc(e,l,f,o);else if(s===`xof`)p=Ec(e,l,f,i,o);else if(s===`_internal_pass`)p=e;else throw Error(`expand must be "xmd" or "xof"`);let m=Array(t);for(let e=0;e<t;e++){let t=Array(a);for(let n=0;n<a;n++){let i=d*(n+e*a);t[n]=P(xc(p.subarray(i,i+d)),r)}m[e]=t}return m}function Oc(e,t){let n=t.map(e=>Array.from(e).reverse());return(t,r)=>{let[i,a,o,s]=n.map(n=>n.reduce((n,r)=>e.add(e.mul(n,t),r))),[c,l]=zs(e,[a,s],!0);return t=e.mul(i,c),r=e.mul(r,e.mul(o,l)),{x:t,y:r}}}function kc(e,t,n){if(typeof t!=`function`)throw Error(`mapToCurve() must be defined`);function r(n){return e.fromAffine(t(n))}function i(t){let n=t.clearCofactor();return n.equals(e.ZERO)?e.ZERO:(n.assertValidity(),n)}return{defaults:n,hashToCurve(e,t){let a=Dc(e,2,{...n,DST:n.DST,...t}),o=r(a[0]),s=r(a[1]);return i(o.add(s))},encodeToCurve(e,t){return i(r(Dc(e,1,{...n,DST:n.encodeDST,...t})[0]))},mapToCurve(e){if(!Array.isArray(e))throw Error(`expected array of bigints`);for(let t of e)if(typeof t!=`bigint`)throw Error(`expected array of bigints`);return i(r(e))}}}var Ac=Yn({secp256k1:()=>zc,secp256k1_hasher:()=>Hc}),jc=BigInt(`0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f`),Mc=BigInt(`0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141`),Nc=BigInt(0),Pc=BigInt(1),Fc=BigInt(2),Ic=(e,t)=>(e+t/Fc)/t;function Lc(e){let t=jc,n=BigInt(3),r=BigInt(6),i=BigInt(11),a=BigInt(22),o=BigInt(23),s=BigInt(44),c=BigInt(88),l=e*e*e%t,u=l*l*e%t,d=As(As(As(u,n,t)*u%t,n,t)*u%t,Fc,t)*l%t,f=As(d,i,t)*d%t,p=As(f,a,t)*f%t,m=As(p,s,t)*p%t,h=As(As(As(As(As(As(m,c,t)*m%t,s,t)*p%t,n,t)*u%t,o,t)*f%t,r,t)*l%t,Fc,t);if(!Rc.eql(Rc.sqr(h),e))throw Error(`Cannot find square root`);return h}var Rc=Hs(jc,void 0,void 0,{sqrt:Lc}),zc=bc({a:Nc,b:BigInt(7),Fp:Rc,n:Mc,Gx:BigInt(`55066263022277343669578718895168534326250603453777594175500187360389116729240`),Gy:BigInt(`32670510020758816978083085130507043184471273380659243275938904335757337482424`),h:BigInt(1),lowS:!0,endo:{beta:BigInt(`0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee`),splitScalar:e=>{let t=Mc,n=BigInt(`0x3086d221a7d46bcde86c90e49284eb15`),r=-Pc*BigInt(`0xe4437ed6010e88286f547fa90abfe4c3`),i=BigInt(`0x114ca50f7a8e2f3f657c1108d9d44cfd8`),a=n,o=BigInt(`0x100000000000000000000000000000000`),s=Ic(a*e,t),c=Ic(-r*e,t),l=P(e-s*n-c*i,t),u=P(-s*r-c*a,t),d=l>o,f=u>o;if(d&&(l=t-l),f&&(u=t-u),l>o||u>o)throw Error(`splitScalar: Endomorphism failed, k=`+e);return{k1neg:d,k1:l,k2neg:f,k2:u}}}},Gr);zc.ProjectivePoint,zc.utils.randomPrivateKey;var Bc=Oc(Rc,[[`0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7`,`0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581`,`0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262`,`0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c`],[`0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b`,`0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14`,`0x0000000000000000000000000000000000000000000000000000000000000001`],[`0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c`,`0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3`,`0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931`,`0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84`],[`0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b`,`0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573`,`0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f`,`0x0000000000000000000000000000000000000000000000000000000000000001`]].map(e=>e.map(e=>BigInt(e)))),Vc=vc(Rc,{A:BigInt(`0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533`),B:BigInt(`1771`),Z:Rc.create(BigInt(`-11`))}),Hc=kc(zc.ProjectivePoint,e=>{let{x:t,y:n}=Vc(Rc.create(e[0]));return Bc(t,n)},{DST:`secp256k1_XMD:SHA-256_SSWU_RO_`,encodeDST:`secp256k1_XMD:SHA-256_SSWU_NU_`,p:Rc.ORDER,m:1,k:128,expand:`xmd`,hash:Gr});Hc.hashToCurve,Hc.encodeToCurve;function Uc(e,t={}){let{recovered:n}=t;if(e.r===void 0||e.s===void 0||n&&e.yParity===void 0)throw new Qc({signature:e});if(e.r<0n||e.r>Bo)throw new $c({value:e.r});if(e.s<0n||e.s>Bo)throw new el({value:e.s});if(typeof e.yParity==`number`&&e.yParity!==0&&e.yParity!==1)throw new tl({value:e.yParity})}function Wc(e){return Gc(m(e))}function Gc(e){if(e.length!==130&&e.length!==132)throw new Zc({signature:e});let t=BigInt(E(e,0,32)),n=BigInt(E(e,32,64)),r=(()=>{let t=Number(`0x${e.slice(130)}`);if(!Number.isNaN(t))try{return Xc(t)}catch{throw new tl({value:t})}})();return r===void 0?{r:t,s:n}:{r:t,s:n,yParity:r}}function Kc(e){if(e.r!==void 0&&e.s!==void 0)return qc(e)}function qc(e){let t=typeof e==`string`?Gc(e):e instanceof Uint8Array?Wc(e):typeof e.r==`string`?Yc(e):e.v?Jc(e):{r:e.r,s:e.s,...e.yParity===void 0?{}:{yParity:e.yParity}};return Uc(t),t}function Jc(e){return{r:e.r,s:e.s,yParity:Xc(e.v)}}function Yc(e){let t=(()=>{let t=e.v?Number(e.v):void 0,n=e.yParity?Number(e.yParity):void 0;if(typeof t==`number`&&typeof n!=`number`&&(n=Xc(t)),typeof n!=`number`)throw new tl({value:e.yParity});return n})();return{r:BigInt(e.r),s:BigInt(e.s),yParity:t}}function Xc(e){if(e===0||e===27)return 0;if(e===1||e===28)return 1;if(e>=35)return+(e%2==0);throw new nl({value:e})}var Zc=class extends T{constructor({signature:e}){super(`Value \`${e}\` is an invalid signature size.`,{metaMessages:[`Expected: 64 bytes or 65 bytes.`,`Received ${bt(tn(e))} bytes.`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidSerializedSizeError`})}},Qc=class extends T{constructor({signature:e}){super(`Signature \`${b(e)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.MissingPropertiesError`})}},$c=class extends T{constructor({value:e}){super(`Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidRError`})}},el=class extends T{constructor({value:e}){super(`Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidSError`})}},tl=class extends T{constructor({value:e}){super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidYParityError`})}},nl=class extends T{constructor({value:e}){super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidVError`})}};function rl(e,t={}){return typeof e.chainId==`string`?il(e):{...e,...t.signature}}function il(e){let{address:t,chainId:n,nonce:r}=e,i=Kc(e);return{address:t,chainId:Number(n),nonce:BigInt(r),...i}}var al=_s(`(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data`);function ol(e){if(typeof e==`string`){if(E(e,-32)!==`0x8010801080108010801080108010801080108010801080108010801080108010`)throw new ll(e)}else Uc(e.authorization)}function sl(e){ol(e);let t=fe(E(e,-64,-32)),n=E(e,-t-64,-64),r=E(e,0,-t-64),[i,a,o]=ms(al,n);return{authorization:rl({address:i.delegation,chainId:Number(i.chainId),nonce:i.nonce,yParity:i.yParity,r:i.r,s:i.s}),signature:r,...o&&o!==`0x`?{data:o,to:a}:{}}}function cl(e){try{return ol(e),!0}catch{return!1}}var ll=class extends T{constructor(e){super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`SignatureErc8010.InvalidWrappedSignatureError`})}};function ul(e){return e.map(e=>({...e,value:BigInt(e.value)}))}function dl(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?ke(e.nonce):void 0,storageProof:e.storageProof?ul(e.storageProof):void 0}}async function fl(e,{address:t,blockNumber:n,blockTag:r,storageKeys:i}){let a=r??`latest`,o=n===void 0?void 0:O(n);return dl(await e.request({method:`eth_getProof`,params:[t,i,o||a]}))}async function pl(e,{address:t,blockNumber:n,blockTag:r=`latest`,slot:i}){let a=n===void 0?void 0:O(n);return await e.request({method:`eth_getStorageAt`,params:[t,i,a||r]})}async function ml(e,{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:a,sender:o,nonce:c}){let l=r||`latest`,u=n===void 0?void 0:O(n),d=null;if(i?d=await e.request({method:`eth_getTransactionByHash`,params:[i]},{dedupe:!0}):t?d=await e.request({method:`eth_getTransactionByBlockHashAndIndex`,params:[t,O(a)]},{dedupe:!0}):(u||l)&&typeof a==`number`?d=await e.request({method:`eth_getTransactionByBlockNumberAndIndex`,params:[u||l,O(a)]},{dedupe:!!u}):o&&typeof c==`number`&&(d=await e.request({method:`eth_getTransactionBySenderAndNonce`,params:[o,O(c)]},{dedupe:!0})),!d)throw new s({blockHash:t,blockNumber:n,blockTag:l,hash:i,index:a});return(e.chain?.formatters?.transaction?.format||wr)(d,`getTransaction`)}async function hl(e,{hash:t,transactionReceipt:n}){let[r,i]=await Promise.all([j(e,Fi,`getBlockNumber`)({}),t?j(e,ml,`getTransaction`)({hash:t}):void 0]),a=n?.blockNumber||i?.blockNumber;return a?r-a+1n:0n}async function gl(e,{hash:t}){let n=await e.request({method:`eth_getTransactionReceipt`,params:[t]},{dedupe:!0});if(!n)throw new Ie({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||Yi)(n,`getTransactionReceipt`)}async function _l(e,t){let{account:n,authorizationList:r,allowFailure:i=!0,blockNumber:a,blockOverrides:o,blockTag:s,stateOverride:c}=t,l=t.contracts,{batchSize:u=t.batchSize??1024,deployless:d=t.deployless??!1}=typeof e.batch?.multicall==`object`?e.batch.multicall:{},f=(()=>{if(t.multicallAddress)return t.multicallAddress;if(d)return null;if(e.chain)return Wt({blockNumber:a,chain:e.chain,contract:`multicall3`});throw Error(`client chain not configured. multicallAddress is required.`)})(),p=[[]],m=0,h=0;for(let e=0;e<l.length;e++){let{abi:t,address:r,args:a,functionName:o}=l[e];try{let e=D({abi:t,args:a,functionName:o});h+=(e.length-2)/2,u>0&&h>u&&p[m].length>0&&(m++,h=(e.length-2)/2,p[m]=[]),p[m]=[...p[m],{allowFailure:!0,callData:e,target:r}]}catch(e){let s=ar(e,{abi:t,address:r,args:a,docsPath:`/docs/contract/multicall`,functionName:o,sender:n});if(!i)throw s;p[m]=[...p[m],{allowFailure:!0,callData:`0x`,target:r}]}}let g=await Promise.allSettled(p.map(t=>j(e,Si,`readContract`)({...f===null?{code:It}:{address:f},abi:Ke,account:n,args:[t],authorizationList:r,blockNumber:a,blockOverrides:o,blockTag:s,functionName:`aggregate3`,stateOverride:c}))),_=[];for(let e=0;e<g.length;e++){let t=g[e];if(t.status===`rejected`){if(!i)throw t.reason;for(let n=0;n<p[e].length;n++)_.push({status:`failure`,error:t.reason,result:void 0});continue}let n=t.value;for(let t=0;t<n.length;t++){let{returnData:r,success:a}=n[t],{callData:o}=p[e][t],{abi:s,address:c,functionName:u,args:d}=l[_.length];try{if(o===`0x`)throw new ge;if(!a)throw new re({data:r});let e=zt({abi:s,args:d,data:r,functionName:u});_.push(i?{result:e,status:`success`}:e)}catch(e){let t=ar(e,{abi:s,address:c,args:d,docsPath:`/docs/contract/multicall`,functionName:u});if(!i)throw t;_.push({error:t,result:void 0,status:`failure`})}}}if(_.length!==l.length)throw new v(`multicall results mismatch`);return _}async function vl(n,r){let{blockNumber:i,blockTag:a=n.experimental_blockTag??`latest`,blocks:o,returnFullTransactions:s,traceTransfers:c,validation:l}=r;try{let e=[];for(let n of o){let r=n.blockOverrides?an(n.blockOverrides):void 0,i=n.calls.map(e=>{let n=e,r=n.account?t(n.account):void 0,i=n.abi?D(n):n.data,a={...n,account:r,data:n.dataSuffix?Pt([i||`0x`,n.dataSuffix]):i,from:n.from??r?.address};return He(a),We(a)}),a=n.stateOverrides?Be(n.stateOverrides):void 0;e.push({blockOverrides:r,calls:i,stateOverrides:a})}let r=(typeof i==`bigint`?O(i):void 0)||a;return(await n.request({method:`eth_simulateV1`,params:[{blockStateCalls:e,returnFullTransactions:s,traceTransfers:c,validation:l},r]})).map((e,t)=>({...Er(e),calls:e.calls.map((e,n)=>{let{abi:r,args:i,functionName:a,to:s}=o[t].calls[n],c=e.error?.data??e.returnData,l=BigInt(e.gasUsed),u=e.logs?.map(e=>mi(e)),d=e.status===`0x1`?`success`:`failure`,f=r&&d===`success`&&c!==`0x`?zt({abi:r,data:c,functionName:a}):null,p=(()=>{if(d===`success`)return;let e;if(c===`0x`?e=new ge:c&&(e=new re({data:c})),e)return ar(e,{abi:r??[],address:s??`0x`,args:i,functionName:a??`<unknown>`})})();return{data:c,gasUsed:l,logs:u,status:d,...d===`success`?{result:f}:{error:p}}})}))}catch(t){let n=t,r=e(n,{});throw r instanceof st?n:r}}function yl(e){let t=!0,n=``,r=0,i=``,a=!1;for(let o=0;o<e.length;o++){let s=e[o];if([`(`,`)`,`,`].includes(s)&&(t=!0),s===`(`&&r++,s===`)`&&r--,t){if(r===0){if(s===` `&&[`event`,`function`,`error`,``].includes(i))i=``;else if(i+=s,s===`)`){a=!0;break}continue}if(s===` `){e[o-1]!==`,`&&n!==`,`&&n!==`,(`&&(n=``,t=!1);continue}i+=s,n+=s}}if(!a)throw new T(`Unable to normalize signature.`);return i}function bl(e,t){let n=typeof e,r=t.type;switch(r){case`address`:return No(e,{strict:!1});case`bool`:return n===`boolean`;case`function`:return n===`string`;case`string`:return n===`string`;default:return r===`tuple`&&`components`in t?Object.values(t.components).every((t,n)=>bl(Object.values(e)[n],t)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n===`number`||n===`bigint`:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n===`string`||e instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(e)&&e.every(e=>bl(e,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,``)})):!1}}function xl(e,t,n){for(let r in e){let i=e[r],a=t[r];if(i.type===`tuple`&&a.type===`tuple`&&`components`in i&&`components`in a)return xl(i.components,a.components,n[r]);let o=[i.type,a.type];if(o.includes(`address`)&&o.includes(`bytes20`)||(o.includes(`address`)&&o.includes(`string`)||o.includes(`address`)&&o.includes(`bytes`))&&No(n[r],{strict:!1}))return o}}function Sl(e,t={}){let{prepare:n=!0}=t,r=Array.isArray(e)||typeof e==`string`?Xn(e):e;return{...r,...n?{hash:El(r)}:{}}}function Cl(e,t,n){let{args:r=[],prepare:i=!0}=n??{},a=ve(t,{strict:!1}),o=e.filter(e=>a?e.type===`function`||e.type===`error`?wl(e)===E(t,0,4):e.type===`event`?El(e)===t:!1:`name`in e&&e.name===t);if(o.length===0)throw new Ol({name:t});if(o.length===1)return{...o[0],...i?{hash:El(o[0])}:{}};let s;for(let e of o)if(`inputs`in e){if(!r||r.length===0){if(!e.inputs||e.inputs.length===0)return{...e,...i?{hash:El(e)}:{}};continue}if(e.inputs&&e.inputs.length!==0&&e.inputs.length===r.length&&r.every((t,n)=>{let r=`inputs`in e&&e.inputs[n];return r?bl(t,r):!1})){if(s&&`inputs`in s&&s.inputs){let t=xl(e.inputs,s.inputs,r);if(t)throw new Dl({abiItem:e,type:t[0]},{abiItem:s,type:t[1]})}s=e}}let c=(()=>{if(s)return s;let[e,...t]=o;return{...e,overloads:t}})();if(!c)throw new Ol({name:t});return{...c,...i?{hash:El(c)}:{}}}function wl(...e){return E(El((()=>{if(Array.isArray(e[0])){let[t,n]=e;return Cl(t,n)}return e[0]})()),0,4)}function Tl(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return Cl(t,n)}return e[0]})();return yl(typeof t==`string`?t:Bt(t))}function El(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return Cl(t,n)}return e[0]})();return typeof t!=`string`&&`hash`in t&&t.hash?t.hash:ko(he(Tl(t)))}var Dl=class extends T{constructor(e,t){super(`Found ambiguous types in overloaded ABI Items.`,{metaMessages:[`\`${e.type}\` in \`${yl(Bt(e.abiItem))}\`, and`,`\`${t.type}\` in \`${yl(Bt(t.abiItem))}\``,``,`These types encode differently and cannot be distinguished at runtime.`,`Remove one of the ambiguous items in the ABI.`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiItem.AmbiguityError`})}},Ol=class extends T{constructor({name:e,data:t,type:n=`item`}){let r=e?` with name "${e}"`:t?` with data "${t}"`:``;super(`ABI ${n}${r} not found.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiItem.NotFoundError`})}};function kl(...e){let[t,n]=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return[jl(t),n]}return e})(),{bytecode:r,args:i}=n;return c(r,t.inputs?.length&&i?.length?hs(t.inputs,i):`0x`)}function Al(e){return Sl(e)}function jl(e){let t=e.find(e=>e.type===`constructor`);if(!t)throw new Ol({name:`constructor`});return t}function Ml(...e){let[t,n=[]]=(()=>{if(Array.isArray(e[0])){let[t,n,r]=e;return[Pl(t,n,{args:r}),r]}let[t,n]=e;return[t,n]})(),{overloads:r}=t,i=r?Pl([t,...r],t.name,{args:n}):t,a=Fl(i),o=n.length>0?hs(i.inputs,n):void 0;return o?c(a,o):a}function Nl(e,t={}){return Sl(e,t)}function Pl(e,t,n){let r=Cl(e,t,n);if(r.type!==`function`)throw new Ol({name:t,type:`function`});return r}function Fl(e){return wl(e)}var Il=`0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,Ll=`0x0000000000000000000000000000000000000000`,Rl=`0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033`;async function zl(e,n){let{blockNumber:r,blockTag:i,calls:a,stateOverrides:o,traceAssetChanges:s,traceTransfers:c,validation:u}=n,d=n.account?t(n.account):void 0;if(s&&!d)throw new v("`account` is required when `traceAssetChanges` is true");let f=d?kl(Al(`constructor(bytes, bytes)`),{bytecode:rt,args:[Rl,Ml(Nl(`function getBalance(address)`),[d.address])]}):void 0,p=s?await Promise.all(n.calls.map(async t=>{if(!t.data&&!t.abi)return;let{accessList:n}=await Ia(e,{account:d.address,...t,data:t.abi?D(t):t.data});return n.map(({address:e,storageKeys:t})=>t.length>0?e:null)})).then(e=>e.flat().filter(Boolean)):[],m=await vl(e,{blockNumber:r,blockTag:i,blocks:[...s?[{calls:[{data:f}],stateOverrides:o},{calls:p.map((e,t)=>({abi:[Nl(`function balanceOf(address) returns (uint256)`)],functionName:`balanceOf`,args:[d.address],to:e,from:Ll,nonce:t})),stateOverrides:[{address:Ll,nonce:0}]}]:[],{calls:[...a,{to:Ll}].map(e=>({...e,from:d?.address})),stateOverrides:o},...s?[{calls:[{data:f}]},{calls:p.map((e,t)=>({abi:[Nl(`function balanceOf(address) returns (uint256)`)],functionName:`balanceOf`,args:[d.address],to:e,from:Ll,nonce:t})),stateOverrides:[{address:Ll,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Nl(`function decimals() returns (uint256)`)],functionName:`decimals`,from:Ll,nonce:t})),stateOverrides:[{address:Ll,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Nl(`function tokenURI(uint256) returns (string)`)],functionName:`tokenURI`,args:[0n],from:Ll,nonce:t})),stateOverrides:[{address:Ll,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Nl(`function symbol() returns (string)`)],functionName:`symbol`,from:Ll,nonce:t})),stateOverrides:[{address:Ll,nonce:0}]}]:[]],traceTransfers:c,validation:u}),h=s?m[2]:m[0],[g,_,,y,b,x,S,C]=s?m:[],{calls:w,...ee}=h,te=w.slice(0,-1)??[],ne=g?.calls??[],re=_?.calls??[],ie=[...ne,...re].map(e=>e.status===`success`?l(e.data):null),ae=y?.calls??[],T=b?.calls??[],oe=[...ae,...T].map(e=>e.status===`success`?l(e.data):null),se=(x?.calls??[]).map(e=>e.status===`success`?e.result:null),ce=(C?.calls??[]).map(e=>e.status===`success`?e.result:null),le=(S?.calls??[]).map(e=>e.status===`success`?e.result:null),E=[];for(let[e,t]of oe.entries()){let n=ie[e];if(typeof t!=`bigint`||typeof n!=`bigint`)continue;let r=se[e-1],i=ce[e-1],a=le[e-1],o=e===0?{address:Il,decimals:18,symbol:`ETH`}:{address:p[e-1],decimals:a||r?Number(r??1):void 0,symbol:i??void 0};E.some(e=>e.token.address===o.address)||E.push({token:o,value:{pre:n,post:t,diff:t-n}})}return{assetChanges:E,block:ee,results:te}}var Bl=`0x6492649264926492649264926492649264926492649264926492649264926492`;function Vl(e){if(E(e,-32)!==`0x6492649264926492649264926492649264926492649264926492649264926492`)throw new Wl(e)}function Hl(e){let{data:t,signature:n,to:r}=e;return c(hs(_s(`address, bytes, bytes`),[r,t,n]),Bl)}function Ul(e){try{return Vl(e),!0}catch{return!1}}var Wl=class extends T{constructor(e){super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`SignatureErc6492.InvalidWrappedSignatureError`})}};function Gl({r:e,s:t,to:n=`hex`,v:r,yParity:i}){let a=(()=>{if(i===0||i===1)return i;if(r&&(r===27n||r===28n||r>=35n))return+(r%2n==0n);throw Error("Invalid `v` or `yParity` value")})(),o=`0x${new zc.Signature(l(e),l(t)).toCompactHex()}${a===0?`1b`:`1c`}`;return n===`hex`?o:ft(o)}async function Kl(e,t){let{address:n,chain:r=e.chain,hash:i,erc6492VerifierAddress:a=t.universalSignatureVerifierAddress??r?.contracts?.erc6492Verifier?.address,multicallAddress:o=t.multicallAddress??r?.contracts?.multicall3?.address}=t;if(r?.verifyHash)return await r.verifyHash(e,t);let s=(()=>{let e=t.signature;return le(e)?e:typeof e==`object`&&`r`in e&&`s`in e?Gl(e):ln(e)})();try{return cl(s)?await ql(e,{...t,multicallAddress:o,signature:s}):await Jl(e,{...t,verifierAddress:a,signature:s})}catch(e){try{if(ie(Xt(n),await lr({hash:i,signature:s})))return!0}catch{}if(e instanceof Xl)return!1;throw e}}async function ql(e,t){let{address:n,blockNumber:r,blockTag:i,hash:a,multicallAddress:o}=t,{authorization:s,data:c,signature:l,to:u}=sl(t.signature);if(await Ua(e,{address:n,blockNumber:r,blockTag:i})===Gt([`0xef0100`,s.address]))return await Yl(e,{address:n,blockNumber:r,blockTag:i,hash:a,signature:l});let d={address:s.address,chainId:Number(s.chainId),nonce:Number(s.nonce),r:O(s.r,{size:32}),s:O(s.s,{size:32}),yParity:s.yParity};if(!await Za({address:n,authorization:d}))throw new Xl;let f=await j(e,Si,`readContract`)({...o?{address:o}:{code:It},authorizationList:[d],abi:Ke,blockNumber:r,blockTag:`pending`,functionName:`aggregate3`,args:[[...c?[{allowFailure:!0,target:u??n,callData:c}]:[],{allowFailure:!0,target:n,callData:D({abi:mt,functionName:`isValidSignature`,args:[a,l]})}]]});if((f[f.length-1]?.returnData)?.startsWith(`0x1626ba7e`))return!0;throw new Xl}async function Jl(e,t){let{address:n,factory:r,factoryData:i,hash:a,signature:o,verifierAddress:s,...c}=t,l=await(async()=>!r&&!i||Ul(o)?o:Hl({data:i,signature:o,to:r}))(),u=s?{to:s,data:D({abi:dt,functionName:`isValidSig`,args:[n,a,l]}),...c}:{data:et({abi:dt,args:[n,a,l],bytecode:ct}),...c},{data:d}=await j(e,Vt,`call`)(u).catch(e=>{throw e instanceof de?new Xl:e});if(nn(d??`0x0`))return!0;throw new Xl}async function Yl(e,t){let{address:n,blockNumber:r,blockTag:i,hash:a,signature:o}=t;if((await j(e,Si,`readContract`)({address:n,abi:mt,args:[a,o],blockNumber:r,blockTag:i,functionName:`isValidSignature`}).catch(e=>{throw e instanceof me?new Xl:e})).startsWith(`0x1626ba7e`))return!0;throw new Xl}var Xl=class extends Error{};async function Zl(e,{address:t,message:n,factory:r,factoryData:i,signature:a,...o}){let s=lo(n);return j(e,Kl,`verifyHash`)({address:t,factory:r,factoryData:i,hash:s,signature:a,...o})}async function Ql(e,t){let{address:n,factory:r,factoryData:i,signature:a,message:o,primaryType:s,types:c,domain:l,...u}=t,d=vo({message:o,primaryType:s,types:c,domain:l});return j(e,Kl,`verifyHash`)({address:n,factory:r,factoryData:i,hash:d,signature:a,...u})}function $l(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:a,pollingInterval:o=e.pollingInterval}){let s=a===void 0?!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):a,c;return s?Di(A([`watchBlockNumber`,e.uid,t,n,o]),{onBlockNumber:r,onError:i},r=>ki(async()=>{try{let t=await j(e,Fi,`getBlockNumber`)({cacheTime:0});if(c!==void 0){if(t===c)return;if(t-c>1&&n)for(let e=c+1n;e<t;e++)r.onBlockNumber(e,c),c=e}(c===void 0||t>c)&&(r.onBlockNumber(t,c),c=t)}catch(e){r.onError?.(e)}},{emitOnBegin:t,interval:o})):Di(A([`watchBlockNumber`,e.uid,t,n]),{onBlockNumber:r,onError:i},t=>{let n=!0,r=()=>n=!1;return(async()=>{try{let{unsubscribe:i}=await(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})().subscribe({params:[`newHeads`],onData(e){if(!n)return;let r=l(e.result?.number);t.onBlockNumber(r,c),c=r},onError(e){t.onError?.(e)}});r=i,n||r()}catch(e){i?.(e)}})(),()=>r()})}async function eu(e,t){let{checkReplacement:n=!0,confirmations:r=1,hash:i,onReplaced:a,retryCount:o=6,retryDelay:c=({count:e})=>~~(1<<e)*200,timeout:l=18e4}=t,u=A([`waitForTransactionReceipt`,e.uid,i]),d=t.pollingInterval?t.pollingInterval:e.chain?.experimental_preconfirmationTime?e.chain.experimental_preconfirmationTime:e.pollingInterval,f,p,m,h=!1,g,_,{promise:v,resolve:y,reject:b}=Ye(),x=l?setTimeout(()=>{_?.(),g?.(),b(new Ne({hash:i}))},l):void 0;return g=Di(u,{onReplaced:a,resolve:y,reject:b},async t=>{if(m=await j(e,gl,`getTransactionReceipt`)({hash:i}).catch(()=>void 0),m&&r<=1){clearTimeout(x),t.resolve(m),g?.();return}_=j(e,$l,`watchBlockNumber`)({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:d,async onBlockNumber(a){let l=e=>{clearTimeout(x),_?.(),e(),g?.()},u=a;if(!h)try{if(m){if(r>1&&(!m.blockNumber||u-m.blockNumber+1n<r))return;l(()=>t.resolve(m));return}if(n&&!f&&(h=!0,await qi(async()=>{f=await j(e,ml,`getTransaction`)({hash:i}),f.blockNumber&&(u=f.blockNumber)},{delay:c,retryCount:o}),h=!1),m=await j(e,gl,`getTransactionReceipt`)({hash:i}),r>1&&(!m.blockNumber||u-m.blockNumber+1n<r))return;l(()=>t.resolve(m))}catch(n){if(n instanceof s||n instanceof Ie){if(!f){h=!1;return}try{p=f,h=!0;let n=await qi(()=>j(e,Dr,`getBlock`)({blockNumber:u,includeTransactions:!0}),{delay:c,retryCount:o,shouldRetry:({error:e})=>e instanceof Sr});h=!1;let i=n.transactions.find(({from:e,nonce:t})=>e===p.from&&t===p.nonce);if(!i||(m=await j(e,gl,`getTransactionReceipt`)({hash:i.hash}),r>1&&(!m.blockNumber||u-m.blockNumber+1n<r)))return;let a=`replaced`;i.to===p.to&&i.value===p.value&&i.input===p.input?a=`repriced`:i.from===i.to&&i.value===0n&&(a=`cancelled`),l(()=>{t.onReplaced?.({reason:a,replacedTransaction:p,transaction:i,transactionReceipt:m}),t.resolve(m)})}catch(e){l(()=>t.reject(e))}}else l(()=>t.reject(n))}}})}),v}function tu(e,{blockTag:t=e.experimental_blockTag??`latest`,emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:a,includeTransactions:o,poll:s,pollingInterval:c=e.pollingInterval}){let l=s===void 0?!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):s,u=o??!1,d;return l?Di(A([`watchBlocks`,e.uid,t,n,r,u,c]),{onBlock:i,onError:a},i=>ki(async()=>{try{let r=await j(e,Dr,`getBlock`)({blockTag:t,includeTransactions:u});if(r.number!==null&&d?.number!=null){if(r.number===d.number)return;if(r.number-d.number>1&&n)for(let t=d?.number+1n;t<r.number;t++){let n=await j(e,Dr,`getBlock`)({blockNumber:t,includeTransactions:u});i.onBlock(n,d),d=n}}(d?.number==null||t===`pending`&&r?.number==null||r.number!==null&&r.number>d.number)&&(i.onBlock(r,d),d=r)}catch(e){i.onError?.(e)}},{emitOnBegin:r,interval:c})):(()=>{let n=!0,o=!0,s=()=>n=!1;return(async()=>{try{r&&j(e,Dr,`getBlock`)({blockTag:t,includeTransactions:u}).then(e=>{n&&(o&&=(i(e,void 0),!1))}).catch(a);let{unsubscribe:c}=await(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})().subscribe({params:[`newHeads`],async onData(t){if(!n)return;let r=await j(e,Dr,`getBlock`)({blockNumber:t.result?.number,includeTransactions:u}).catch(()=>{});n&&(i(r,d),o=!1,d=r)},onError(e){a?.(e)}});s=c,n||s()}catch(e){a?.(e)}})(),()=>s()})()}function nu(e,{address:t,args:n,batch:r=!0,event:i,events:a,fromBlock:o,onError:s,onLogs:c,poll:l,pollingInterval:u=e.pollingInterval,strict:d}){let f=l===void 0?typeof o==`bigint`?!0:!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):l,p=d??!1;return f?Di(A([`watchEvent`,t,n,r,e.uid,i,u,o]),{onLogs:c,onError:s},s=>{let c;o!==void 0&&(c=o-1n);let l,d=!1,f=ki(async()=>{if(!d){try{l=await j(e,Ra,`createEventFilter`)({address:t,args:n,event:i,events:a,strict:p,fromBlock:o})}catch{}d=!0;return}try{let o;if(l)o=await j(e,Ii,`getFilterChanges`)({filter:l});else{let r=await j(e,Fi,`getBlockNumber`)({});o=c&&c!==r?await j(e,bi,`getLogs`)({address:t,args:n,event:i,events:a,fromBlock:c+1n,toBlock:r}):[],c=r}if(o.length===0)return;if(r)s.onLogs(o);else for(let e of o)s.onLogs([e])}catch(e){l&&e instanceof nt&&(d=!1),s.onError?.(e)}},{emitOnBegin:!0,interval:u});return async()=>{l&&await j(e,Li,`uninstallFilter`)({filter:l}),f()}}):(()=>{let r=!0,o=()=>r=!1;return(async()=>{try{let l=(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})(),u=a??(i?[i]:void 0),f=[];u&&(f=[u.flatMap(e=>er({abi:[e],eventName:e.name,args:n}))],i&&(f=f[0]));let{unsubscribe:m}=await l.subscribe({params:[`logs`,{address:t,topics:f}],onData(e){if(!r)return;let t=e.result;try{let{eventName:e,args:n}=gi({abi:u??[],data:t.data,topics:t.topics,strict:p});c([mi(t,{args:n,eventName:e})])}catch(e){let n,r;if(e instanceof pe||e instanceof ye){if(d)return;n=e.abiItem.name,r=e.abiItem.inputs?.some(e=>!(`name`in e&&e.name))}c([mi(t,{args:r?[]:{},eventName:n})])}},onError(e){s?.(e)}});o=m,r||o()}catch(e){s?.(e)}})(),()=>o()})()}function ru(e,{batch:t=!0,onError:n,onTransactions:r,poll:i,pollingInterval:a=e.pollingInterval}){return(i===void 0?e.transport.type!==`webSocket`&&e.transport.type!==`ipc`:i)?Di(A([`watchPendingTransactions`,e.uid,t,a]),{onTransactions:r,onError:n},n=>{let r,i=ki(async()=>{try{if(!r)try{r=await j(e,za,`createPendingTransactionFilter`)({});return}catch(e){throw i(),e}let a=await j(e,Ii,`getFilterChanges`)({filter:r});if(a.length===0)return;if(t)n.onTransactions(a);else for(let e of a)n.onTransactions([e])}catch(e){n.onError?.(e)}},{emitOnBegin:!0,interval:a});return async()=>{r&&await j(e,Li,`uninstallFilter`)({filter:r}),i()}}):(()=>{let t=!0,i=()=>t=!1;return(async()=>{try{let{unsubscribe:a}=await e.transport.subscribe({params:[`newPendingTransactions`],onData(e){if(!t)return;let n=e.result;r([n])},onError(e){n?.(e)}});i=a,t||i()}catch(e){n?.(e)}})(),()=>i()})()}function iu(e){let{scheme:t,statement:n,...r}=e.match(au)?.groups??{},{chainId:i,expirationTime:a,issuedAt:o,notBefore:s,requestId:c,...l}=e.match(ou)?.groups??{},u=e.split(`Resources:`)[1]?.split(`
- `).slice(1);return{...r,...l,...i?{chainId:Number(i)}:{},...a?{expirationTime:new Date(a)}:{},...o?{issuedAt:new Date(o)}:{},...s?{notBefore:new Date(s)}:{},...c?{requestId:c}:{},...u?{resources:u}:{},...t?{scheme:t}:{},...n?{statement:n}:{}}}var au=/^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,ou=/(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;function su(e){let{address:t,domain:n,message:r,nonce:i,scheme:a,time:o=new Date}=e;if(n&&r.domain!==n||i&&r.nonce!==i||a&&r.scheme!==a||r.expirationTime&&o>=r.expirationTime||r.notBefore&&o<r.notBefore)return!1;try{if(!r.address||!tt(r.address,{strict:!1})||t&&!ie(r.address,t))return!1}catch{return!1}return!0}async function cu(e,t){let{address:n,domain:r,message:i,nonce:a,scheme:o,signature:s,time:c=new Date,...l}=t,u=iu(i);if(!u.address||!su({address:n,domain:r,message:u,nonce:a,scheme:o,time:c}))return!1;let d=lo(i);return Kl(e,{address:u.address,hash:d,signature:s,...l})}async function lu(e,{serializedTransaction:t,throwOnReceiptRevert:n,timeout:r}){let i=await e.request({method:`eth_sendRawTransactionSync`,params:r?[t,r]:[t]},{retryCount:0}),a=(e.chain?.formatters?.transactionReceipt?.format||Yi)(i);if(a.status===`reverted`&&n)throw new ee({receipt:a});return a}function uu(e){return{call:t=>Vt(e,t),createAccessList:t=>Ia(e,t),createBlockFilter:()=>La(e),createContractEventFilter:t=>rr(e,t),createEventFilter:t=>Ra(e,t),createPendingTransactionFilter:()=>za(e),estimateContractGas:t=>pi(e,t),estimateGas:t=>fi(e,t),getBalance:t=>Ba(e,t),getBlobBaseFee:()=>Va(e),getBlock:t=>Dr(e,t),getBlockNumber:t=>Fi(e,t),getBlockTransactionCount:t=>Ha(e,t),getBytecode:t=>Ua(e,t),getChainId:()=>oi(e),getCode:t=>Ua(e,t),getContractEvents:t=>xi(e,t),getDelegation:t=>Wa(e,t),getEip712Domain:t=>Ka(e,t),getEnsAddress:t=>pa(e,t),getEnsAvatar:t=>Na(e,t),getEnsName:t=>Pa(e,t),getEnsResolver:t=>Fa(e,t),getEnsText:t=>Ma(e,t),getFeeHistory:t=>Ya(e,t),estimateFeesPerGas:t=>jr(e,t),getFilterChanges:t=>Ii(e,t),getFilterLogs:t=>Xa(e,t),getGasPrice:()=>Or(e),getLogs:t=>bi(e,t),getProof:t=>fl(e,t),estimateMaxPriorityFeePerGas:t=>kr(e,t),fillTransaction:t=>si(e,t),getStorageAt:t=>pl(e,t),getTransaction:t=>ml(e,t),getTransactionConfirmations:t=>hl(e,t),getTransactionCount:t=>Nr(e,t),getTransactionReceipt:t=>gl(e,t),multicall:t=>_l(e,t),prepareTransactionRequest:t=>di(e,t),readContract:t=>Si(e,t),sendRawTransaction:t=>Hi(e,t),sendRawTransactionSync:t=>lu(e,t),simulate:t=>vl(e,t),simulateBlocks:t=>vl(e,t),simulateCalls:t=>zl(e,t),simulateContract:t=>Ci(e,t),verifyHash:t=>Kl(e,t),verifyMessage:t=>Zl(e,t),verifySiweMessage:t=>cu(e,t),verifyTypedData:t=>Ql(e,t),uninstallFilter:t=>Li(e,t),waitForTransactionReceipt:t=>eu(e,t),watchBlocks:t=>tu(e,t),watchBlockNumber:t=>$l(e,t),watchContractEvent:t=>Ri(e,t),watchEvent:t=>nu(e,t),watchPendingTransactions:t=>ru(e,t)}}function du(e){let{key:t=`public`,name:n=`Public Client`}=e;return oa({...e,key:t,name:n,type:`publicClient`}).extend(uu)}async function fu(e,{chain:t}){let{id:n,name:r,nativeCurrency:i,rpcUrls:a,blockExplorers:o}=t;await e.request({method:`wallet_addEthereumChain`,params:[{chainId:O(n),chainName:r,nativeCurrency:i,rpcUrls:a.default.http,blockExplorerUrls:o?Object.values(o).map(({url:e})=>e):void 0}]},{dedupe:!0,retryCount:0})}function pu(e,t){let{abi:n,args:r,bytecode:i,...a}=t,o=et({abi:n,args:r,bytecode:i});return Wi(e,{...a,...a.authorizationList?{to:null}:{},data:o})}async function mu(e){return e.account?.type===`local`?[e.account.address]:(await e.request({method:`eth_accounts`},{dedupe:!0})).map(e=>Dt(e))}async function hu(e,n={}){let{account:r=e.account,chainId:i}=n,a=r?t(r):void 0,o=i?[a?.address,[O(i)]]:[a?.address],s=await e.request({method:`wallet_getCapabilities`,params:o}),c={};for(let[e,t]of Object.entries(s)){c[Number(e)]={};for(let[n,r]of Object.entries(t))n===`addSubAccount`&&(n=`unstable_addSubAccount`),c[Number(e)][n]=r}return typeof i==`number`?c[i]:c}async function gu(e){return await e.request({method:`wallet_getPermissions`},{dedupe:!0})}async function _u(e,n){let{account:r=e.account,chainId:i,nonce:a}=n;if(!r)throw new zi({docsPath:`/docs/eip7702/prepareAuthorization`});let o=t(r),s=(()=>{if(n.executor)return n.executor===`self`?n.executor:t(n.executor)})(),c={address:n.contractAddress??n.address,chainId:i,nonce:a};return c.chainId===void 0&&(c.chainId=e.chain?.id??await j(e,oi,`getChainId`)({})),c.nonce===void 0&&(c.nonce=await j(e,Nr,`getTransactionCount`)({address:o.address,blockTag:`pending`}),(s===`self`||s?.address&&ie(s.address,o.address))&&(c.nonce+=1)),c}async function vu(e){return(await e.request({method:`eth_requestAccounts`},{dedupe:!0,retryCount:0})).map(e=>Xt(e))}async function yu(e,t){return e.request({method:`wallet_requestPermissions`,params:[t]},{retryCount:0})}async function bu(e,t){let{chain:n=e.chain}=t,r=t.timeout??Math.max((n?.blockTime??0)*3,5e3),i=await j(e,Qi,`sendCalls`)(t);return await j(e,ea,`waitForCallsStatus`)({...t,id:i.id,timeout:r})}var xu=new it(128);async function Su(e,n){let{account:r=e.account,assertChainId:i=!0,chain:a=e.chain,accessList:o,authorizationList:s,blobs:c,data:l,dataSuffix:u=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,pollingInterval:_,throwOnReceiptRevert:y,type:b,value:x,...S}=n,C=n.timeout??Math.max((a?.blockTime??0)*3,5e3);if(r===void 0)throw new zi({docsPath:`/docs/actions/wallet/sendTransactionSync`});let w=r?t(r):null;try{He(n);let t=await(async()=>{if(n.to)return n.to;if(n.to!==null&&s&&s.length>0)return await gr({authorization:s[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`.")})})();if(w?.type===`json-rpc`||w===null){let n;a!==null&&(n=await j(e,oi,`getChainId`)({}),i&&Vi({currentChainId:n,chain:a}));let r=e.chain?.formatters?.transactionRequest?.format,v=(r||We)({...xe(S,{format:r}),accessList:o,account:w,authorizationList:s,blobs:c,chainId:n,data:l&&Pt([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,to:t,type:b,value:x},`sendTransaction`),te=xu.get(e.uid),ne=te?`wallet_sendTransaction`:`eth_sendTransaction`,re=await(async()=>{try{return await e.request({method:ne,params:[v]},{retryCount:0})}catch(t){if(te===!1)throw t;let n=t;if(n.name===`InvalidInputRpcError`||n.name===`InvalidParamsRpcError`||n.name===`MethodNotFoundRpcError`||n.name===`MethodNotSupportedRpcError`)return await e.request({method:`wallet_sendTransaction`,params:[v]},{retryCount:0}).then(t=>(xu.set(e.uid,!0),t)).catch(t=>{let r=t;throw r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`?(xu.set(e.uid,!1),n):r});throw n}})(),ie=await j(e,eu,`waitForTransactionReceipt`)({checkReplacement:!1,hash:re,pollingInterval:_,timeout:C});if(y&&ie.status===`reverted`)throw new ee({receipt:ie});return ie}if(w?.type===`local`){let r=await j(e,di,`prepareTransactionRequest`)({account:w,accessList:o,authorizationList:s,blobs:c,chain:a,data:l&&Pt([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,nonceManager:w.nonceManager,parameters:[...ci,`sidecars`],type:b,value:x,...S,to:t}),i=a?.serializers?.transaction,_=await w.signTransaction(r,{serializer:i});return await j(e,lu,`sendRawTransactionSync`)({serializedTransaction:_,throwOnReceiptRevert:y,timeout:n.timeout})}throw w?.type===`smart`?new Bi({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:`/docs/actions/bundler/sendUserOperation`,type:`smart`}):new Bi({docsPath:`/docs/actions/wallet/sendTransactionSync`,type:w?.type})}catch(e){throw e instanceof Bi?e:ai(e,{...n,account:w,chain:n.chain||void 0})}}async function Cu(e,t){let{id:n}=t;await e.request({method:`wallet_showCallsStatus`,params:[n]})}async function wu(e,n){let{account:r=e.account}=n;if(!r)throw new zi({docsPath:`/docs/eip7702/signAuthorization`});let i=t(r);if(!i.signAuthorization)throw new Bi({docsPath:`/docs/eip7702/signAuthorization`,metaMessages:["The `signAuthorization` Action does not support JSON-RPC Accounts."],type:i.type});let a=await _u(e,n);return i.signAuthorization(a)}async function Tu(e,{account:n=e.account,message:r}){if(!n)throw new zi({docsPath:`/docs/actions/wallet/signMessage`});let i=t(n);if(i.signMessage)return i.signMessage({message:r});let a=typeof r==`string`?on(r):r.raw instanceof Uint8Array?Ee(r.raw):r.raw;return e.request({method:`personal_sign`,params:[a,i.address]},{retryCount:0})}async function Eu(e,n){let{account:r=e.account,chain:i=e.chain,...a}=n;if(!r)throw new zi({docsPath:`/docs/actions/wallet/signTransaction`});let o=t(r);He({account:o,...n});let s=await j(e,oi,`getChainId`)({});i!==null&&Vi({currentChainId:s,chain:i});let c=(i?.formatters||e.chain?.formatters)?.transactionRequest?.format||We;return o.signTransaction?o.signTransaction({...a,chainId:s},{serializer:e.chain?.serializers?.transaction}):await e.request({method:`eth_signTransaction`,params:[{...c({...a,account:o},`signTransaction`),chainId:O(s),from:o.address}]},{retryCount:0})}async function Du(e,n){let{account:r=e.account,domain:i,message:a,primaryType:o}=n;if(!r)throw new zi({docsPath:`/docs/actions/wallet/signTypedData`});let s=t(r),c={EIP712Domain:go({domain:i}),...n.types};if(ho({domain:i,message:a,primaryType:o,types:c}),s.signTypedData)return s.signTypedData({domain:i,message:a,primaryType:o,types:c});let l=mo({domain:i,message:a,primaryType:o,types:c});return e.request({method:`eth_signTypedData_v4`,params:[s.address,l]},{retryCount:0})}async function Ou(e,{id:t}){await e.request({method:`wallet_switchEthereumChain`,params:[{chainId:O(t)}]},{retryCount:0})}async function ku(e,t){return await e.request({method:`wallet_watchAsset`,params:t},{retryCount:0})}async function Au(e,t){return Gi.internal(e,Su,`sendTransactionSync`,t)}function ju(e){return{addChain:t=>fu(e,t),deployContract:t=>pu(e,t),fillTransaction:t=>si(e,t),getAddresses:()=>mu(e),getCallsStatus:t=>$i(e,t),getCapabilities:t=>hu(e,t),getChainId:()=>oi(e),getPermissions:()=>gu(e),prepareAuthorization:t=>_u(e,t),prepareTransactionRequest:t=>di(e,t),requestAddresses:()=>vu(e),requestPermissions:t=>yu(e,t),sendCalls:t=>Qi(e,t),sendCallsSync:t=>bu(e,t),sendRawTransaction:t=>Hi(e,t),sendRawTransactionSync:t=>lu(e,t),sendTransaction:t=>Wi(e,t),sendTransactionSync:t=>Su(e,t),showCallsStatus:t=>Cu(e,t),signAuthorization:t=>wu(e,t),signMessage:t=>Tu(e,t),signTransaction:t=>Eu(e,t),signTypedData:t=>Du(e,t),switchChain:t=>Ou(e,t),waitForCallsStatus:t=>ea(e,t),watchAsset:t=>ku(e,t),writeContract:t=>Gi(e,t),writeContractSync:t=>Au(e,t)}}function Mu(e){let{key:t=`wallet`,name:n=`Wallet Client`,transport:r}=e;return oa({...e,key:t,name:n,transport:r,type:`walletClient`}).extend(ju)}function Nu({key:e,methods:t,name:n,request:r,retryCount:i=3,retryDelay:a=150,timeout:o,type:s},c){let l=aa();return{config:{key:e,methods:t,name:n,request:r,retryCount:i,retryDelay:a,timeout:o,type:s},request:eo(r,{methods:t,retryCount:i,retryDelay:a,uid:l}),value:c}}function Pu(e,t={}){let{key:n=`custom`,methods:r,name:i=`Custom Provider`,retryDelay:a}=t;return({retryCount:o})=>Nu({key:n,methods:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:a,type:`custom`})}var Fu=class extends v{constructor(){super(`No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.`,{docsPath:`/docs/clients/intro`,name:`UrlRequiredError`})}};function Iu(e,t={}){let{batch:n,fetchFn:r,fetchOptions:a,key:o=`http`,methods:s,name:c=`HTTP JSON-RPC`,onFetchRequest:l,onFetchResponse:u,retryDelay:d,raw:f}=t;return({chain:p,retryCount:m,timeout:h})=>{let{batchSize:g=1e3,wait:_=0}=typeof n==`object`?n:{},v=t.retryCount??m,y=h??t.timeout??1e4,b=e||p?.rpcUrls.default.http[0];if(!b)throw new Fu;let x=ao(b,{fetchFn:r,fetchOptions:a,onRequest:l,onResponse:u,timeout:y});return Nu({key:o,methods:s,name:c,async request({method:e,params:t}){let r={method:e,params:t},{schedule:a}=_t({id:b,wait:_,shouldSplitBatch(e){return e.length>g},fn:e=>x.request({body:e}),sort:(e,t)=>e.id-t.id}),[{error:o,result:s}]=await(async e=>n?a(e):[await x.request({body:e})])(r);if(f)return{error:o,result:s};if(o)throw new i({body:r,error:o,url:b});return s},retryCount:v,retryDelay:d,timeout:y,type:`http`},{fetchOptions:a,url:b})}}var I=10143,L={1337:{name:`FoMonad Local`,rpcUrl:`http://127.0.0.1:8545`,explorer:`https://monadvision.com`},10143:{name:`Monad Testnet`,rpcUrl:`https://testnet-rpc.monad.xyz`,explorer:`https://testnet.monadexplorer.com`,shmonUrl:`https://www.fomonad.wtf/shmon_testnet/`,vibecoinImpl:`0x33F4DD8153eA42c67Bb4dDEB5D0499ca2e96393D`,fomon:`0x0f3Ed63A647A71bd57657c105A4d171A535E9A68`,game:`0x24654BBcE7984E968a293671A404d79a7aDf2D57`,shmon:`0x282BdDFF5e58793AcAb65438b257Dbd15A8745C9`}},Lu=Yn({clearLastWallet:()=>Ku,connectWallet:()=>Uu,connectedWallet:()=>R,disconnectWallet:()=>Wu,saveLastWallet:()=>Gu,switchChain:()=>qu,walletEvents:()=>zu,walletProviders:()=>Bu}),Ru=`fomonad-last-wallet`,zu=new EventTarget,Bu=[],R=null;function Vu(e){Bu=e,zu.dispatchEvent(new CustomEvent(`wallet-changed`))}function Hu(e){R=e,zu.dispatchEvent(new CustomEvent(`wallet-changed`))}window.addEventListener(`eip6963:announceProvider`,e=>{let t=e.detail;if(!Bu.find(e=>e.info.uuid===t.info.uuid)){Vu([...Bu,t]);let e=localStorage.getItem(Ru);e&&t.info.rdns===e&&!R&&Uu(t)}}),window.dispatchEvent(new Event(`eip6963:requestProvider`));async function Uu(e){try{let t=await e.provider.request({method:`eth_requestAccounts`});if(!t||t.length===0)return null;let n=await e.provider.request({method:`eth_chainId`}),r=parseInt(n,16),i=t[0];return Hu({address:i,provider:e.provider,chainId:r}),e.provider.on&&(e.provider.on(`accountsChanged`,e=>{let t=e;!t||t.length===0?Hu(null):Hu({...R,address:t[0]})}),e.provider.on(`chainChanged`,e=>{let t=parseInt(e,16);R&&Hu({...R,chainId:t})})),i}catch{return null}}function Wu(){Hu(null)}function Gu(e){localStorage.setItem(Ru,e)}function Ku(){localStorage.removeItem(Ru)}async function qu(e,t,n){if(!R)return!1;try{return await R.provider.request({method:`wallet_switchEthereumChain`,params:[{chainId:`0x${e.toString(16)}`}]}),!0}catch(r){if(r&&typeof r==`object`&&`code`in r&&r.code===4902)try{return await R.provider.request({method:`wallet_addEthereumChain`,params:[{chainId:`0x${e.toString(16)}`,chainName:n,rpcUrls:[t],nativeCurrency:{name:`MON`,symbol:`MON`,decimals:18}}]}),!0}catch{return!1}return!1}}function Ju(e){let t=L[e];return{id:e,name:t?.name??`Chain ${e}`,nativeCurrency:{name:`MON`,symbol:`MON`,decimals:18},rpcUrls:{default:{http:[t?.rpcUrl??`http://127.0.0.1:8545`]}}}}var Yu=new Map,Xu=null;zu.addEventListener(`wallet-changed`,()=>{Xu=null});function z(e=I){if(!Yu.has(e)){let t=L[e],n=du({chain:Ju(e),transport:Iu(t?.rpcUrl??`http://127.0.0.1:8545`)});Yu.set(e,n)}return Yu.get(e)}function Zu(e=I){return!R||R.chainId!==e?null:((!Xu||Xu.chainId!==e)&&(Xu={chainId:e,client:du({chain:Ju(e),transport:Pu(R.provider)})}),Xu.client)}function Qu(e){return!e||typeof e!=`object`?!1:`code`in e&&e.code===-32011?!0:`cause`in e?Qu(e.cause):!!(e instanceof Error&&e.message.includes(`requests limited`))}async function B(e,t=I,n=3){let r=z(t);for(let i=0;i<n;i++){let a=i===n-1,o=a?Zu(t)??r:r;try{return await e(o)}catch(e){if(Qu(e)&&!a){await new Promise(e=>setTimeout(e,2**i*250));continue}throw e}}throw Error(`unreachable`)}function V(){if(!R)return null;let e=Ju(R.chainId);return Mu({account:R.address,chain:e,transport:Pu(R.provider)})}async function $u(e){if(!R)return!1;if(R.chainId===e)return!0;let t=L[e];return t?qu(e,t.rpcUrl,t.name):!1}var H=[{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`},{name:`fomon`,type:`address`,internalType:`address`},{name:`vibecoinImpl`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`FOMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract FoMonad`}],stateMutability:`view`},{type:`function`,name:`INITIAL_TIMER`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`K`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`K_HALF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`MAX_TIMER`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`MIN_REFERRAL_DEPOSIT`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`P0`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_DURATION`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_KICKOFF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_DURATION`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`VIBECOIN_IMPL`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`WINNER_PRIZE_BPS`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`buy`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`buyWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`claimSeriesATokens`,inputs:[{name:`cycleId`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`claimSeriesBTokens`,inputs:[{name:`cycleId`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`currentVibecoin`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract Vibecoin`}],stateMutability:`view`},{type:`function`,name:`cycle`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`depositSeriesA`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`depositSeriesAWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`depositSeriesB`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`depositSeriesBWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`isTimerExpired`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`lastBuyer`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`phase`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`enum FoMonadGame.Phase`}],stateMutability:`view`},{type:`function`,name:`prizePool`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`referralCodes`,inputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`referralCodeOf`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],stateMutability:`view`},{type:`function`,name:`referralEarned`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`registerReferral`,inputs:[{name:`code`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`rolloverPool`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesADeposits`,inputs:[{name:``,type:`uint256`,internalType:`uint256`},{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesAEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesBDeposits`,inputs:[{name:``,type:`uint256`,internalType:`uint256`},{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesBEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`settleSeriesB`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`settlementTimestamp`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilSeriesAEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilSeriesBEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilTimer`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timerExpiry`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`tokensSeriesAByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`tokensSeriesBByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalDeposited`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalPublicCurveDeposited`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesA`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesAByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesB`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesBByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesDeposit`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`triggerSettlement`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`vibecoinByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`vibecoinCycle`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`winnerByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`prizeByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`gameState`,inputs:[{name:`getVibecoinURI`,type:`bool`,internalType:`bool`}],outputs:[{name:`state`,type:`tuple`,internalType:`struct FoMonadGame.GameState`,components:[{name:`phase`,type:`uint8`,internalType:`enum FoMonadGame.Phase`},{name:`phaseEndTime`,type:`uint256`,internalType:`uint256`},{name:`vibecoin`,type:`address`,internalType:`address`},{name:`vibecoinPrice`,type:`uint256`,internalType:`uint256`},{name:`vibecoinURI`,type:`string`,internalType:`string`},{name:`prizePool`,type:`uint256`,internalType:`uint256`},{name:`totalDeposited`,type:`uint256`,internalType:`uint256`},{name:`cycle`,type:`uint256`,internalType:`uint256`},{name:`lastBuyer`,type:`address`,internalType:`address`}]}],stateMutability:`view`},{type:`event`,name:`Buy`,inputs:[{name:`buyer`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonIn`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`tokensOut`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`CycleSettled`,inputs:[{name:`winner`,type:`address`,indexed:!0,internalType:`address`},{name:`prizeAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`rollover`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`newVibecoin`,type:`address`,indexed:!1,internalType:`address`}],anonymous:!1},{type:`event`,name:`ReferralRegistered`,inputs:[{name:`code`,type:`bytes32`,indexed:!0,internalType:`bytes32`},{name:`referrer`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`SeriesADeposit`,inputs:[{name:`depositor`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`referralCode`,type:`bytes32`,indexed:!1,internalType:`bytes32`}],anonymous:!1},{type:`event`,name:`SeriesBDeposit`,inputs:[{name:`depositor`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`referralCode`,type:`bytes32`,indexed:!1,internalType:`bytes32`}],anonymous:!1},{type:`event`,name:`SeriesSettled`,inputs:[{name:`K`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`vibecoin`,type:`address`,indexed:!1,internalType:`address`},{name:`timerExpiry`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`TimerExtended`,inputs:[{name:`newExpiry`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`lastBuyer`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`error`,name:`AlreadySettled`,inputs:[]},{type:`error`,name:`FailedDeployment`,inputs:[]},{type:`error`,name:`InsufficientBalance`,inputs:[{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`InvalidReferral`,inputs:[]},{type:`error`,name:`NotAnInsider`,inputs:[]},{type:`error`,name:`NotEligibleReferrer`,inputs:[]},{type:`error`,name:`NothingToClaim`,inputs:[]},{type:`error`,name:`PublicPhaseNotOpen`,inputs:[]},{type:`error`,name:`Reentrant`,inputs:[]},{type:`error`,name:`ReferralCodeTaken`,inputs:[]},{type:`error`,name:`SeriesANotEnded`,inputs:[]},{type:`error`,name:`SeriesBNotEnded`,inputs:[]},{type:`error`,name:`TimerExpired`,inputs:[]},{type:`error`,name:`TimerNotExpired`,inputs:[]},{type:`error`,name:`WrongPhase`,inputs:[]},{type:`error`,name:`ZeroDeposit`,inputs:[]}],U=[{type:`function`,name:`athPostRug`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`athPrice`,inputs:[],outputs:[{name:``,type:`uint128`,internalType:`uint128`}],stateMutability:`view`},{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`K`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`P0`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`buy`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`autoOptIn`,type:`bool`,internalType:`bool`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`buyWithShMon`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`shMonIn`,type:`uint256`,internalType:`uint256`},{name:`autoOptIn`,type:`bool`,internalType:`bool`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`claimDividends`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}],outputs:[{name:`amount`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`drip`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`earned`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`game`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`initialize`,inputs:[{name:`seed_`,type:`bytes32`,internalType:`bytes32`},{name:`game_`,type:`address`,internalType:`address`},{name:`p0`,type:`uint256`,internalType:`uint256`},{name:`k`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`lastKnownBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`lastKnownSelfBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`marketCap`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`optIn`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optOut`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optedIn`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`optedInSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`pendingRewards`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`poolBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`price`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`rewardPerTokenStored`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seed`,inputs:[],outputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],stateMutability:`view`},{type:`function`,name:`sell`,inputs:[{name:`tokens`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`shMonForTokens`,inputs:[{name:`tokens`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`tokenURI`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`tokensForDeposit`,inputs:[{name:`deposit`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`unlock`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`totalVolume`,inputs:[],outputs:[{name:``,type:`uint128`,internalType:`uint128`}],stateMutability:`view`},{type:`function`,name:`unlocked`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`userRewardPerTokenPaid`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`volume24h`,inputs:[],outputs:[{name:`total`,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`AlreadyInitialized`,inputs:[]},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]},{type:`error`,name:`InsufficientTokens`,inputs:[]},{type:`error`,name:`MustBeGame`,inputs:[]},{type:`error`,name:`PreRugpull`,inputs:[]},{type:`error`,name:`ZeroAmount`,inputs:[]}],ed=[{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`},{name:`game_`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`function`,name:`AIRDROP_RESERVE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`DEPLOYER_SHARE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`TOTAL_SUPPLY`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`T_HALF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`airdropNonce`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`claim`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`claimable`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`deployTimestamp`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`distributeProtocolFee`,inputs:[{name:`shMonAmount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`game`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`lastAirdropBlock`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`maxMintable`,inputs:[{name:`t`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`pure`},{type:`function`,name:`mintAirdrop`,inputs:[{name:`to`,type:`address`,internalType:`address`}],outputs:[{name:`amount`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`optIn`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optedIn`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`optedInSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`pendingRewards`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`remainingCeiling`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`rewardPerTokenStored`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`totalAirdropMinted`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`userRewardPerTokenPaid`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`event`,name:`AirdropMinted`,inputs:[{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`amount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Claimed`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`OptedIn`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`OptedOut`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`ProtocolFeeDistributed`,inputs:[{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`AirdropExhausted`,inputs:[]},{type:`error`,name:`AlreadyOptedIn`,inputs:[]},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]},{type:`error`,name:`NotGame`,inputs:[]},{type:`error`,name:`NothingToClaim`,inputs:[]}],td=[{type:`constructor`,inputs:[],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`assetsPerShare`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`convertToAssets`,inputs:[{name:`shares`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`convertToShares`,inputs:[{name:`assets`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`setRate`,inputs:[{name:`rateWad`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`deposit`,inputs:[{name:`assets`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`}],outputs:[{name:`shares`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`redeem`,inputs:[{name:`shares`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`},{name:`owner`,type:`address`,internalType:`address`}],outputs:[{name:`assets`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`totalAssets`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]}],nd=[[`#ff2d6b`,`#ff8c00`],[`#00e5ff`,`#0066ff`],[`#ffe600`,`#ff6600`],[`#00ff9d`,`#00aa66`],[`#ff00ff`,`#aa00ff`],[`#ff4444`,`#ff0000`],[`#ffffff`,`#aaaaaa`],[`#ff9900`,`#ffcc00`],[`#44ffff`,`#0099ff`],[`#ff44aa`,`#ff0066`]];function rd(e){return[...nd[parseInt(e.slice(12,14),16)%10]]}var id=`fomonad-events`,ad=1,od=`vibecoin-cycles`,sd=`meta`,cd=null;async function ld(){return cd||new Promise((e,t)=>{let n=indexedDB.open(id,ad);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(od)||e.createObjectStore(od,{keyPath:`cycle`}),e.objectStoreNames.contains(sd)||e.createObjectStore(sd,{keyPath:`key`})},n.onsuccess=()=>{cd=n.result,e(n.result)},n.onerror=()=>t(n.error)})}async function ud(e){let t=await ld();return new Promise((n,r)=>{let i=t.transaction(od,`readwrite`).objectStore(od),a={...e,K:e.K.toString(),prizeAmount:e.prizeAmount.toString(),blockNumber:e.blockNumber.toString()},o=i.put(a);o.onsuccess=()=>n(),o.onerror=()=>r(o.error)})}async function dd(){let e=await ld();return new Promise((t,n)=>{let r=e.transaction(od,`readwrite`);r.objectStore(od).clear().onsuccess=()=>t(),r.onerror=()=>n(r.error)})}async function fd(e){let t=await ld();(await new Promise((e,n)=>{let r=t.transaction(sd,`readonly`).objectStore(sd).get(`gameAddress`);r.onsuccess=()=>e(r.result?.value??null),r.onerror=()=>n(r.error)}))?.toLowerCase()!==e.toLowerCase()&&(await dd(),await new Promise((n,r)=>{let i=t.transaction(sd,`readwrite`).objectStore(sd).put({key:`gameAddress`,value:e});i.onsuccess=()=>n(),i.onerror=()=>r(i.error)}))}async function pd(){let e=await ld();return new Promise((t,n)=>{let r=e.transaction(od,`readonly`).objectStore(od).getAll();r.onsuccess=()=>{let e=r.result.map(e=>({...e,K:BigInt(e.K),prizeAmount:BigInt(e.prizeAmount),blockNumber:BigInt(e.blockNumber)}));e.sort((e,t)=>t.cycle-e.cycle),t(e)},r.onerror=()=>n(r.error)})}Xn(`event SeriesSettled(uint256 K, address vibecoin, uint256 timerExpiry)`),Xn(`event CycleSettled(address indexed winner, uint256 prizeAmount, uint256 rollover, address newVibecoin)`);var md=10n**18n,hd=localStorage.getItem(`fomonad-denom`)??`mon`;function gd(){return hd}function _d(e){hd=e,localStorage.setItem(`fomonad-denom`,e)}var vd=10n**18n;function yd(e){vd=e}function bd(e,t){return`${e/md}.${(e%md).toString().padStart(18,`0`).slice(0,t)}`}function xd(e,t=4){return`${bd(e,t)} shMON`}function Sd(e,t=4){return`${bd(e,t)} MON`}function W(e,t=4){let n=e*vd/10n**18n;switch(hd){case`mon`:return`≈${Sd(n,t)}`;default:case`shmon`:return`${bd(e,t)}\u00A0shMON`}}function Cd(e,t){let n=hd===`mon`?`MON`:`shMON`,r=Number(e);return r<1e6?`${(r/1e6).toFixed(4)} p${n}/\$${t}`:r<1e9?`${(r/1e6).toFixed(4)} n${n}/\$${t}`:r<0xe8d4a51000?`${(r/1e9).toFixed(4)} n${n}/\$${t}`:r<0x38d7ea4c68000?`${(r/0xe8d4a51000).toFixed(4)} μ${n}/\$${t}`:r<0xde0b6b3a7640000?`${(r/0x38d7ea4c68000).toFixed(4)} m${n}/\$${t}`:`${(r/0xde0b6b3a7640000).toFixed(6)} ${n}/\$${t}`}function wd(e,t){let n=Number(e)/0xde0b6b3a7640000;return n>=1e6?`${(n/1e6).toFixed(2)}M \$${t}`:n>=1e3?`${(n/1e3).toFixed(2)}k \$${t}`:`${n.toFixed(2)} \$${t}`}function Td(e){let t=Number(e)/0xde0b6b3a7640000;return t>=1e6?`${(t/1e6).toFixed(2)}M`:t>=1e3?`${(t/1e3).toFixed(2)}k`:`${t.toFixed(2)}`}function Ed(e){return`${e.slice(0,6)}…${e.slice(-4)}`}function Dd(e){if(e<=0)return`00:00:00.000`;let t=Math.floor(e/1e3),n=Math.floor(e%1e3),r=Math.floor(t/3600),i=Math.floor(t%3600/60),a=t%60;return`${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}.${String(n).padStart(3,`0`)}`}function Od(e,t){if(t==0n)return`--%`;let n=10000n*e/t,r=n/100n,i=n%100n;return r+(i==0n?``:`.`+(``+i).padStart(2,`0`))+`%`}var kd=`fomonad-active-ref`,Ad=`fomonad-url-ref`;function jd(e){if(!e)return`0x${`00`.repeat(32)}`;let t=new TextEncoder().encode(e);return t.length>31?`0x${`00`.repeat(32)}`:`0x${Array.from(t).map(e=>e.toString(16).padStart(2,`0`)).join(``).padEnd(64,`0`)}`}function Md(e){try{let t=e.startsWith(`0x`)?e.slice(2):e,n=[];for(let e=0;e<t.length;e+=2){let r=parseInt(t.slice(e,e+2),16);if(r===0)break;n.push(r)}return n.length===0?null:new TextDecoder(`utf-8`,{fatal:!0}).decode(new Uint8Array(n))}catch{return null}}function Nd(e){try{let t=new TextEncoder().encode(e);return t.length===0||t.length>31?null:(new TextDecoder(`utf-8`,{fatal:!0}).decode(t),e)}catch{return null}}function Pd(){try{let e=window.location.hash,t=e.indexOf(`?`);if(t===-1)return null;let n=new URLSearchParams(e.slice(t+1)).get(`ref`);return n?Nd(n):null}catch{return null}}function Fd(){return localStorage.getItem(kd)}function Id(e){let t=Nd(e);t&&localStorage.setItem(kd,t)}function Ld(){localStorage.removeItem(kd)}function Rd(){let e=Pd();e!==null&&e!==localStorage.getItem(Ad)&&(localStorage.setItem(Ad,e),localStorage.setItem(kd,e))}function zd(e){return jd(e)}var Bd=class{constructor(){this.tasks=[],this.running=!1,this._cancelledThisTick=new Set}upsert(e){let t=this.tasks.findIndex(t=>t.key===e.key);t>=0?this.tasks[t]=e:this.tasks.push(e),this.running||this._loop()}prepend(e){this.tasks=this.tasks.filter(t=>t.key!==e.key),this.tasks.unshift(e),this._cancelledThisTick.delete(e.key),this.running||this._loop()}remove(e){this.tasks=this.tasks.filter(t=>t.key!==e),this._cancelledThisTick.add(e)}has(e){return this.tasks.some(t=>t.key===e)}get size(){return this.tasks.length}async _loop(){for(this.running=!0;this.tasks.length>0;){let e=Date.now(),t=this.tasks.shift();console.log(`executing task:`,t.key),this._cancelledThisTick.delete(t.key);try{await t.fn()}catch(e){console.error(`[queue:${t.key}]`,e)}t.continuous&&!this.tasks.some(e=>e.key===t.key)&&!this._cancelledThisTick.has(t.key)&&this.tasks.push(t),this._cancelledThisTick.delete(t.key);let n=Math.max(0,100-(Date.now()-e));this.tasks.length>0&&await new Promise(e=>setTimeout(e,n))}this.running=!1}},Vd=`0x0000000000000000000000000000000000000000`,G=new class{constructor(){this.gameState=null,this.userState=null,this.vibecoins=[],this.gameConstants=null,this.chainTimeDelta=0,this._chainId=I,this._q=new Bd,this._started=!1,this._phase=-1,this._cycle=-1n,this._currentVcAddr=``,this._vcStatic=new Map,this._vcDynamic=new Map}start(){this._started||(this._started=!0,this._q.upsert({key:`game:state`,continuous:!0,fn:()=>this._taskGameState()}),this._q.upsert({key:`game:shmonRate`,continuous:!0,fn:()=>this._taskShmonRate()}))}refresh(){this._q.prepend({key:`game:state:priority`,continuous:!1,fn:()=>this._taskGameState()}),this._queueUserTasks(!0)}refreshUser(){if(!R){this.userState=null,window.dispatchEvent(new CustomEvent(`store-updated`));return}this._queueUserTasks(!0)}_dispatch(){window.dispatchEvent(new CustomEvent(`store-updated`))}_gameAddr(){return L[this._chainId]?.game??null}async _taskGameState(){let e=this._gameAddr();if(!e)return;let t=await B(t=>t.readContract({address:e,abi:H,functionName:`gameState`,args:[!1]}),this._chainId);if(!this.gameState)try{let e=await z(this._chainId).getBlock({blockTag:`latest`}),t=Number(e.timestamp)-Date.now()/1e3;this.chainTimeDelta=t>60?t:0}catch{}let n=t.vibecoin??Vd,r=t.phase===3;this.gameState?Object.assign(this.gameState,{phase:t.phase,cycle:t.cycle,phaseEndTime:t.phaseEndTime,prizePool:t.prizePool,lastBuyer:t.lastBuyer,vibecoin:n,isTimerExpired:r}):this.gameState={phase:t.phase,cycle:t.cycle,phaseEndTime:t.phaseEndTime,totalSeriesA:0n,totalSeriesB:0n,prizePool:t.prizePool,lastBuyer:t.lastBuyer,vibecoin:n,K:0n,P0:0n,settlementTimestamp:0n,totalPublicCurveDeposited:0n,isTimerExpired:r},(t.phase!==this._phase||t.cycle!==this._cycle)&&this._onPhaseOrCycleChange(t.phase,t.cycle,n),this._dispatch()}_onPhaseOrCycleChange(e,t,n){let r=this._phase,i=t!==this._cycle;if(this._phase=e,this._cycle=t,r===0&&this._q.remove(`game:totalSeriesA`),r===1&&(this._q.remove(`game:totalSeriesB`),this._q.remove(`game:totalSeriesB:final`)),(r===2||r===3)&&(this._q.remove(`game:totalPublicCurveDeposited`),this._currentVcAddr)){for(let e of[`supply`,`pool`,`ath`,`totalvol`,`vol24h`,`unlocked`])this._q.remove(`vc:${e}:${this._currentVcAddr}`);this._queueVcHistorical(this._currentVcAddr)}if(i&&this.gameState&&Object.assign(this.gameState,{K:0n,P0:0n,settlementTimestamp:0n,totalSeriesA:0n,totalSeriesB:0n,totalPublicCurveDeposited:0n}),e===0&&(this._q.upsert({key:`game:totalSeriesA`,continuous:!0,fn:()=>this._taskTotalSeriesA()}),this._queueVcDiscovery(t)),e===1&&(this._q.upsert({key:`game:totalSeriesA:final`,continuous:!1,fn:()=>this._taskTotalSeriesA()}),this._q.remove(`game:totalSeriesA`),this._q.upsert({key:`game:totalSeriesB`,continuous:!0,fn:()=>this._taskTotalSeriesB()})),e===2){this._q.upsert({key:`game:totalSeriesB:final`,continuous:!1,fn:()=>this._taskTotalSeriesB()}),this._q.remove(`game:totalSeriesB`);let e=t.toString();if(this._q.has(`game:K:${e}`)||(this._q.upsert({key:`game:K:${e}`,continuous:!1,fn:()=>this._taskGameK()}),this._q.upsert({key:`game:P0:${e}`,continuous:!1,fn:()=>this._taskGameP0()}),this._q.upsert({key:`game:settlement:${e}`,continuous:!1,fn:()=>this._taskSettlementTimestamp()})),this._q.upsert({key:`game:totalPublicCurveDeposited`,continuous:!0,fn:()=>this._taskTotalPublicCurve()}),n&&n!==Vd){let e=n.toLowerCase();this._currentVcAddr=e,this._vcStatic.has(e)||this._queueVcStatic(n,Number(t)),this._queueVcContinuous(n)}}!this.gameConstants&&!this._q.has(`game:constants`)&&this._q.upsert({key:`game:constants`,continuous:!1,fn:()=>this._taskGameConstants()})}async _taskTotalSeriesA(){let e=this._gameAddr();!e||!this.gameState||(this.gameState.totalSeriesA=await B(t=>t.readContract({address:e,abi:H,functionName:`totalSeriesA`}),this._chainId),this._dispatch())}async _taskTotalSeriesB(){let e=this._gameAddr();!e||!this.gameState||(this.gameState.totalSeriesB=await B(t=>t.readContract({address:e,abi:H,functionName:`totalSeriesB`}),this._chainId),this._dispatch())}async _taskTotalPublicCurve(){let e=this._gameAddr();!e||!this.gameState||(this.gameState.totalPublicCurveDeposited=await B(t=>t.readContract({address:e,abi:H,functionName:`totalPublicCurveDeposited`}),this._chainId),this._dispatch())}async _taskGameK(){let e=this._gameAddr();!e||!this.gameState||(this.gameState.K=await B(t=>t.readContract({address:e,abi:H,functionName:`K`}),this._chainId),this._dispatch())}async _taskGameP0(){let e=this._gameAddr();!e||!this.gameState||(this.gameState.P0=await B(t=>t.readContract({address:e,abi:H,functionName:`P0`}),this._chainId),this._dispatch())}async _taskSettlementTimestamp(){let e=this._gameAddr();!e||!this.gameState||(this.gameState.settlementTimestamp=await B(t=>t.readContract({address:e,abi:H,functionName:`settlementTimestamp`}),this._chainId),this._dispatch())}async _taskShmonRate(){let e=L[this._chainId];if(e)try{yd(await B(t=>t.readContract({address:e.shmon,abi:td,functionName:`convertToAssets`,args:[10n**18n]}),this._chainId))}catch{}}async _taskGameConstants(){let e=this._gameAddr();if(!e)return;let t=[`SERIES_A_DURATION`,`SERIES_A_PROTOCOL`,`SERIES_A_REFERRAL`,`SERIES_A_PRIZE`,`SERIES_B_PROTOCOL`,`SERIES_B_REFERRAL`,`SERIES_B_PRIZE`,`PUMP_PROTOCOL`,`PUMP_REFERRAL`,`PUMP_PRIZE`],n=[];for(let r of t)try{n.push(await B(t=>t.readContract({address:e,abi:H,functionName:r}),this._chainId))}catch{n.push(0n)}this.gameConstants={SERIES_A_DURATION:n[0],SERIES_A_PROTOCOL:n[1],SERIES_A_REFERRAL:n[2],SERIES_A_PRIZE:n[3],SERIES_B_PROTOCOL:n[4],SERIES_B_REFERRAL:n[5],SERIES_B_PRIZE:n[6],PUMP_PROTOCOL:n[7],PUMP_REFERRAL:n[8],PUMP_PRIZE:n[9]},this._dispatch()}_queueVcDiscovery(e){let t=this._gameAddr();t&&fd(t).then(async()=>{let n=await pd();new Set(n.map(e=>e.cycle));for(let r=1n;r<e;r++){let e=Number(r),i=`vc:discover:${e}`;if(this._q.has(i))continue;let a=n.find(t=>t.cycle===e);if(a){let t=a.vibecoinAddress.toLowerCase();this._vcStatic.has(t)||this._queueVcStatic(a.vibecoinAddress,e),this._vcDynamic.has(t)||this._queueVcHistorical(a.vibecoinAddress);continue}let o=r;this._q.upsert({key:i,continuous:!1,fn:async()=>{try{let e=await B(e=>e.readContract({address:t,abi:H,functionName:`vibecoinByCycle`,args:[o]}),this._chainId);if(!e||e===Vd)return;await ud({cycle:Number(o),vibecoinAddress:e,K:0n,winner:null,prizeAmount:0n,blockNumber:0n}),this._vcStatic.has(e.toLowerCase())||this._queueVcStatic(e,Number(o)),this._vcDynamic.has(e.toLowerCase())||this._queueVcHistorical(e)}catch{}}})}}).catch(()=>{})}_queueVcStatic(e,t){let n=`vc:static:${e.toLowerCase()}`;this._q.has(n)||this._q.upsert({key:n,continuous:!1,fn:async()=>{try{let[n,r,i,a,o]=await Promise.all([B(t=>t.readContract({address:e,abi:U,functionName:`seed`}),this._chainId),B(t=>t.readContract({address:e,abi:U,functionName:`name`}),this._chainId),B(t=>t.readContract({address:e,abi:U,functionName:`symbol`}),this._chainId),B(t=>t.readContract({address:e,abi:U,functionName:`K`}),this._chainId),B(t=>t.readContract({address:e,abi:U,functionName:`P0`}),this._chainId)]);this._vcStatic.set(e.toLowerCase(),{seed:n,name:r,symbol:i,K:a,P0:o,cycle:t}),this._rebuildVibecoins()}catch{}}})}_queueVcHistorical(e){let t=`vc:hist:${e.toLowerCase()}`;this._q.has(t)||this._q.upsert({key:t,continuous:!1,fn:async()=>{try{let[t,n,r,i,a,o,s]=await Promise.all([B(t=>t.readContract({address:e,abi:U,functionName:`unlocked`}),this._chainId),B(t=>t.readContract({address:e,abi:U,functionName:`totalSupply`}),this._chainId),B(t=>t.readContract({address:e,abi:U,functionName:`poolBalance`}),this._chainId),B(t=>t.readContract({address:e,abi:U,functionName:`athPrice`}),this._chainId),B(t=>t.readContract({address:e,abi:U,functionName:`athPostRug`}),this._chainId),B(t=>t.readContract({address:e,abi:U,functionName:`totalVolume`}),this._chainId),B(t=>t.readContract({address:e,abi:U,functionName:`volume24h`}),this._chainId)]);this._vcDynamic.set(e.toLowerCase(),{unlocked:t,totalSupply:n,poolBalance:r,athPrice:i,athPostRug:a,totalVolume:o,volume24h:s}),this._rebuildVibecoins()}catch{}}})}_queueVcContinuous(e){let t=e.toLowerCase();this._q.upsert({key:`vc:supply:${t}`,continuous:!0,fn:()=>this._taskVcField(e,`totalSupply`)}),this._q.upsert({key:`vc:pool:${t}`,continuous:!0,fn:()=>this._taskVcField(e,`poolBalance`)}),this._q.upsert({key:`vc:ath:${t}`,continuous:!0,fn:()=>this._taskVcField(e,`athPrice`)}),this._q.upsert({key:`vc:totalvol:${t}`,continuous:!0,fn:()=>this._taskVcField(e,`totalVolume`)}),this._q.upsert({key:`vc:vol24h:${t}`,continuous:!0,fn:()=>this._taskVcField(e,`volume24h`)}),this._q.upsert({key:`vc:unlocked:${t}`,continuous:!0,fn:()=>this._taskVcUnlocked(e)})}async _taskVcField(e,t){try{let n=await B(n=>n.readContract({address:e,abi:U,functionName:t}),this._chainId),r=this._vcDynamic.get(e.toLowerCase())??{};this._vcDynamic.set(e.toLowerCase(),{...r,[t]:n}),this._rebuildVibecoins()}catch{}}async _taskVcUnlocked(e){try{let t=await B(t=>t.readContract({address:e,abi:U,functionName:`unlocked`}),this._chainId),n=this._vcDynamic.get(e.toLowerCase())??{};this._vcDynamic.set(e.toLowerCase(),{...n,unlocked:t}),this._rebuildVibecoins(),t&&this._q.remove(`vc:unlocked:${e.toLowerCase()}`)}catch{}}_rebuildVibecoins(){let e=[];for(let[t,n]of this._vcStatic.entries()){let r=this._vcDynamic.get(t);r&&e.push({address:t,seed:n.seed,name:n.name,symbol:n.symbol,cycle:n.cycle,unlocked:r.unlocked??!1,totalSupply:r.totalSupply??0n,poolBalance:r.poolBalance??0n,K:n.K,P0:n.P0,athPrice:r.athPrice??0n,athPostRug:r.athPostRug??!1,totalVolume:r.totalVolume??0n,volume24h:r.volume24h??0n,palette:rd(n.seed)})}this.vibecoins=e.sort((e,t)=>t.cycle-e.cycle),this._dispatch()}_queueUserTasks(e){if(!R)return;let t=e?e=>this._q.prepend(e):e=>this._q.upsert(e);t({key:`user:balances`,continuous:!1,fn:()=>this._taskUserBalances()}),t({key:`user:game`,continuous:!1,fn:()=>this._taskUserGame()}),this.gameState?.vibecoin&&this.gameState.vibecoin!==Vd&&t({key:`user:vcBalance`,continuous:!1,fn:()=>this._taskUserVcBalance()})}async _taskUserBalances(){let e=R;if(!e)return;let t=L[this._chainId];if(!t)return;let n=e.address;try{let[e,r,i,a,o]=await Promise.all([B(e=>e.getBalance({address:n}),this._chainId),B(e=>e.readContract({address:t.shmon,abi:[{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`}],outputs:[{name:``,type:`uint256`}],stateMutability:`view`}],functionName:`balanceOf`,args:[n]}),this._chainId),B(e=>e.readContract({address:t.fomon,abi:ed,functionName:`balanceOf`,args:[n]}),this._chainId),B(e=>e.readContract({address:t.fomon,abi:ed,functionName:`optedIn`,args:[n]}),this._chainId),B(e=>e.readContract({address:t.fomon,abi:ed,functionName:`pendingRewards`,args:[n]}),this._chainId)]);this.userState={...this.userState??this._emptyUser(),monBalance:e,shmonBalance:r,fomonBalance:i,fomonOptedIn:a,fomonClaimable:o},this._dispatch()}catch{}}async _taskUserGame(){let e=R;if(!e)return;let t=L[this._chainId];if(!t)return;let n=this.gameState;if(!n)return;let r=e.address,i=t.game;try{let[e,t,a,o]=await Promise.all([B(e=>e.readContract({address:i,abi:H,functionName:`referralEarned`,args:[r]}),this._chainId),B(e=>e.readContract({address:i,abi:H,functionName:`seriesADeposits`,args:[n.cycle,r]}),this._chainId),B(e=>e.readContract({address:i,abi:H,functionName:`seriesBDeposits`,args:[n.cycle,r]}),this._chainId),B(e=>e.readContract({address:i,abi:H,functionName:`referralCodeOf`,args:[r]}),this._chainId)]);this.userState={...this.userState??this._emptyUser(),referralEarned:e,seriesADeposit:t,seriesBDeposit:a,referralCode:Md(o)},this._dispatch()}catch{}}async _taskUserVcBalance(){let e=R;if(!e)return;let t=this.gameState?.vibecoin;if(!(!t||t===Vd))try{let n=await B(n=>n.readContract({address:t,abi:U,functionName:`balanceOf`,args:[e.address]}),this._chainId);this.userState={...this.userState??this._emptyUser(),vcBalance:n},this._dispatch()}catch{}}_emptyUser(){return{monBalance:0n,shmonBalance:0n,fomonBalance:0n,fomonOptedIn:!1,fomonClaimable:0n,vcBalance:0n,seriesADeposit:0n,seriesBDeposit:0n,referralEarned:0n,referralCode:null}}},Hd=()=>Date.now()/1e3+G.chainTimeDelta,Ud=()=>Date.now()+G.chainTimeDelta*1e3;function Wd(e){return e.phase===0&&e.phaseEndTime>0n&&Hd()>=Number(e.phaseEndTime)?1:e.phase}function Gd(e,t){return e.phase===t?e.phaseEndTime:0n}var Kd=25,qd=5,Jd=1,Yd=60,Xd=10,Zd=90,Qd=class extends HTMLElement{constructor(...e){super(...e),this._phosphor=null,this._rafId=0,this._liveRefreshTimer=0,this._marqueeX=0,this._marqueeText=`GENERATING VIBECOIN`,this._marqueeColor=`rgba(255,230,0,0.9)`,this._candles=[],this._loadingVcAddr=``,this._currentVcAddr=``,this._K=0n,this._P0=0n,this._onStoreUpdate=()=>{let e=G.gameState;if(!e)return;let t=Wd(e),n=G.vibecoins.find(t=>t.address.toLowerCase()===e.vibecoin.toLowerCase()),r=e.phase===0&&e.phaseEndTime?Number(e.phaseEndTime)-Ud()/1e3:1/0,i=e.phase===0&&e.cycle>1n&&(e.phaseEndTime===0n||r>Number(G.gameConstants?.SERIES_A_DURATION??7200n)/2);i?(this._marqueeText=`GET RUGGED`,this._marqueeColor=`rgba(255,45,107,0.9)`):t===2&&!e.isTimerExpired&&Ud()<Number(e.phaseEndTime)*1e3?(this._marqueeText=`PUMP ${n?.name??`???`}! \u2014 $${n?.symbol??`???`} TO THE MOON`,this._marqueeColor=`rgba(0,229,255,0.9)`):e.isTimerExpired||t===3||t===2&&Ud()>=Number(e.phaseEndTime)*1e3?(this._marqueeText=`GET RUGGED`,this._marqueeColor=`rgba(255,45,107,0.9)`):(this._marqueeText=`GENERATING VIBECOIN`,this._marqueeColor=`rgba(255,230,0,0.9)`);let a=i?G.vibecoins.find(t=>t.cycle===Number(e.cycle)-1)??G.vibecoins[0]??null:null,o=i?a:n,s=o?.address??e.vibecoin;if(s!==this._currentVcAddr&&s!==`0x0000000000000000000000000000000000000000`){this._currentVcAddr=s,this._K=o?.K??e.K,this._P0=o?.P0??e.P0,this._candles=[];let t=this._buf.width||Math.ceil(window.innerWidth/Kd);this._startCandleLoad(s,this._K,this._P0,Math.ceil(t/qd)+2)}}}connectedCallback(){this.style.cssText=`position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden`,this._canvas=document.createElement(`canvas`),this._canvas.style.cssText=`display:block;width:100%;height:100%`,this.appendChild(this._canvas),this._ctx=this._canvas.getContext(`2d`),this._buf=document.createElement(`canvas`),this._bCtx=this._buf.getContext(`2d`),this._bloom=document.createElement(`canvas`),this._blCtx=this._bloom.getContext(`2d`),this._ro=new ResizeObserver(()=>this._onResize()),this._ro.observe(this),window.addEventListener(`store-updated`,this._onStoreUpdate),this._onStoreUpdate(),this._startAnimation(),this._liveRefreshTimer=window.setInterval(()=>void this._refreshLiveCandle(),2e3)}disconnectedCallback(){cancelAnimationFrame(this._rafId),clearInterval(this._liveRefreshTimer),this._ro.disconnect(),window.removeEventListener(`store-updated`,this._onStoreUpdate)}_onResize(){let e=Math.round(this.offsetWidth),t=Math.round(this.offsetHeight);if(!e||!t)return;this._canvas.width=e,this._canvas.height=t,this._bloom.width=e,this._bloom.height=t;let n=Math.ceil(e/Kd),r=Math.ceil(t/Kd);this._buf.width=n,this._buf.height=r;let i=document.createElement(`canvas`);i.width=Kd,i.height=Kd;let a=i.getContext(`2d`),o=Kd-4,s=Math.floor(o/3);a.fillStyle=`#000`,a.fillRect(0,0,Kd,Kd),a.fillStyle=`rgb(255,0,0)`,a.fillRect(2,2,s,o),a.fillStyle=`rgb(0,255,0)`,a.fillRect(2+s,2,s,o),a.fillStyle=`rgb(0,0,255)`,a.fillRect(2+s*2,2,s,o),this._phosphor=this._ctx.createPattern(i,`repeat`);let c=Math.ceil(n/qd)+2;c>this._candles.length&&this._currentVcAddr&&this._startCandleLoad(this._currentVcAddr,this._K,this._P0,c)}_startCandleLoad(e,t,n,r){this._loadingVcAddr=e,setTimeout(()=>{this._loadingVcAddr===e&&this._loadCandles(e,t,n,r)},3e3)}async _loadCandles(e,t,n,r){let i=z(I),a=10n**18n,o,s;try{let e=await i.getBlock();o=e.number,s=Number(e.timestamp)}catch{return}let c=r=>Promise.all([i.getBlock({blockNumber:r}),i.readContract({address:e,abi:U,functionName:`totalSupply`,blockNumber:r})]).then(([e,r])=>({timestamp:Number(e.timestamp),price:Number(n+t*r/a)})).catch(()=>null),l=150n;try{let e=await i.getBlock({blockNumber:o-50n}),t=s-Number(e.timestamp);t>0&&(l=BigInt(Math.round(50*Yd/t)))}catch{}if(this._loadingVcAddr!==e)return;let u=await Promise.all(Array.from({length:r+1},(e,t)=>{let n=o-BigInt(t)*l;return n>=0n?c(n):Promise.resolve(null)}));if(this._loadingVcAddr!==e)return;for(let e=0;e<r;e++){let t=u[e],n=u[e+1];t&&n&&(this._candles[e]={close:t.price,open:n.price,high:Math.max(t.price,n.price),low:Math.min(t.price,n.price)})}let d=new Map;for(let e=0;e<r;e++){let t=this._candles[e];t&&d.set(e,{...t})}outer:for(let t=0n;;t+=BigInt(Xd)){if(this._loadingVcAddr!==e)return;if(o<t)break;let n=await Promise.all(Array.from({length:Xd},(e,n)=>{let r=o-t-BigInt(n);return r>=0n?c(r):Promise.resolve(null)}));for(let e of n){if(!e)continue;let t=Math.floor((s-e.timestamp)/Yd);if(t>=r)break outer;if(!d.has(t))d.set(t,{close:e.price,open:e.price,high:e.price,low:e.price});else{let n=d.get(t);n.open=e.price,e.price>n.high&&(n.high=e.price),e.price<n.low&&(n.low=e.price)}this._candles[t]={...d.get(t)}}}}async _refreshLiveCandle(){let e=this._currentVcAddr;if(!e)return;let t=this._K,n=this._P0,r=10n**18n,i=z(I),a;try{a=await i.readContract({address:e,abi:U,functionName:`totalSupply`})}catch{return}if(this._currentVcAddr!==e)return;let o=Number(n+t*a/r),s=this._candles[0];s&&(this._candles[0]={open:s.open,close:o,high:Math.max(s.high,o),low:Math.min(s.low,o)})}_startAnimation(){let e=performance.now(),t=n=>{let r=(n-e)/1e3;e=n,this._marqueeX-=Zd*r,this._draw(),this._rafId=requestAnimationFrame(t)};this._rafId=requestAnimationFrame(t)}_draw(){let e=this._canvas.width,t=this._canvas.height,n=this._buf.width,r=this._buf.height;if(!e||!t||!n||!r)return;let i=this._bCtx;i.fillStyle=`rgb(6,6,8)`,i.fillRect(0,0,n,r),this._drawCandlesBuf(i,n,r),this._drawMarqueeBuf(i,n,r);let a=n*Kd,o=r*Kd,s=this._ctx;s.imageSmoothingEnabled=!1,s.drawImage(this._buf,0,0,a,o),this._phosphor&&(s.globalCompositeOperation=`multiply`,s.fillStyle=this._phosphor,s.fillRect(0,0,a,o),s.globalCompositeOperation=`source-over`);let c=this._blCtx;c.clearRect(0,0,e,t),c.filter=`blur(5px)`,c.drawImage(this._canvas,0,0),c.filter=`none`,s.globalCompositeOperation=`screen`,s.globalAlpha=.35,s.drawImage(this._bloom,0,0),s.globalAlpha=1,s.globalCompositeOperation=`source-over`}_drawCandlesBuf(e,t,n){let r=this._candles.filter(e=>e!==null);if(r.length<2)return;let i=1/0,a=-1/0;for(let e of r)e.low<i&&(i=e.low),e.high>a&&(a=e.high);if(a===i)return;let o=Math.round(n*.1),s=Math.round(n*.1),c=n-o-s,l=e=>n-s-Math.round((e-i)/(a-i)*c);for(let n=0;n<r.length;n++){let i=r[n],a=t-(n+1)*qd;if(a+qd<0)break;e.fillStyle=i.close>=i.open?`rgba(0,229,255,0.2)`:`rgba(255,45,107,0.2)`;let o=a+Math.floor((qd-Jd)/2),s=l(i.high),c=l(i.low);e.fillRect(o,s,Jd,Math.max(1,c-s));let u=l(Math.max(i.open,i.close)),d=l(Math.min(i.open,i.close));e.fillRect(a,u,qd,Math.max(1,d-u))}}_drawMarqueeBuf(e,t,n){let r=Math.round(n*.8);e.save(),e.font=`${r}px "Bebas Neue", sans-serif`,e.fillStyle=this._marqueeColor,e.textBaseline=`middle`;let i=this._marqueeText+` — `,a=e.measureText(i).width;if(a<1){e.restore();return}let o=(this._marqueeX/Kd%a-a)%a;for(;o<t+a;)e.fillText(i,o,n/2),o+=a;e.restore()}};customElements.get(`app-background`)||customElements.define(`app-background`,Qd);var $d=globalThis,ef=$d.ShadowRoot&&($d.ShadyCSS===void 0||$d.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,tf=Symbol(),nf=new WeakMap,rf=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==tf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ef&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=nf.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&nf.set(t,e))}return e}toString(){return this.cssText}},af=e=>new rf(typeof e==`string`?e:e+``,void 0,tf),K=(e,...t)=>new rf(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,tf),of=(e,t)=>{if(ef)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=$d.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},sf=ef?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return af(t)})(e):e,{is:cf,defineProperty:lf,getOwnPropertyDescriptor:uf,getOwnPropertyNames:df,getOwnPropertySymbols:ff,getPrototypeOf:pf}=Object,mf=globalThis,hf=mf.trustedTypes,gf=hf?hf.emptyScript:``,_f=mf.reactiveElementPolyfillSupport,vf=(e,t)=>e,yf={toAttribute(e,t){switch(t){case Boolean:e=e?gf:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},bf=(e,t)=>!cf(e,t),xf={attribute:!0,type:String,converter:yf,reflect:!1,useDefault:!1,hasChanged:bf};Symbol.metadata??=Symbol(`metadata`),mf.litPropertyMetadata??=new WeakMap;var Sf=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=xf){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&lf(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=uf(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xf}static _$Ei(){if(this.hasOwnProperty(vf(`elementProperties`)))return;let e=pf(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(vf(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vf(`properties`))){let e=this.properties,t=[...df(e),...ff(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(sf(e))}else e!==void 0&&t.push(sf(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return of(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?yf:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?yf:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??bf)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Sf.elementStyles=[],Sf.shadowRootOptions={mode:`open`},Sf[vf(`elementProperties`)]=new Map,Sf[vf(`finalized`)]=new Map,_f?.({ReactiveElement:Sf}),(mf.reactiveElementVersions??=[]).push(`2.1.2`);var Cf=globalThis,wf=e=>e,Tf=Cf.trustedTypes,Ef=Tf?Tf.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Df=`$lit$`,Of=`lit$${Math.random().toFixed(9).slice(2)}$`,kf=`?`+Of,Af=`<${kf}>`,jf=document,Mf=()=>jf.createComment(``),Nf=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Pf=Array.isArray,Ff=e=>Pf(e)||typeof e?.[Symbol.iterator]==`function`,If=`[ 	
\f\r]`,Lf=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rf=/-->/g,zf=/>/g,Bf=RegExp(`>|${If}(?:([^\\s"'>=/]+)(${If}*=${If}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Vf=/'/g,Hf=/"/g,Uf=/^(?:script|style|textarea|title)$/i,Wf=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),q=Wf(1),Gf=Wf(2),Kf=Symbol.for(`lit-noChange`),J=Symbol.for(`lit-nothing`),qf=new WeakMap,Jf=jf.createTreeWalker(jf,129);function Yf(e,t){if(!Pf(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ef===void 0?t:Ef.createHTML(t)}var Xf=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Lf;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Lf?c[1]===`!--`?o=Rf:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Bf):(Uf.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Bf):o=zf:o===Bf?c[0]===`>`?(o=i??Lf,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Bf:c[3]===`"`?Hf:Vf):o===Hf||o===Vf?o=Bf:o===Rf||o===zf?o=Lf:(o=Bf,i=void 0);let d=o===Bf&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Lf?n+Af:l>=0?(r.push(s),n.slice(0,l)+Df+n.slice(l)+Of+d):n+Of+(l===-2?t:d)}return[Yf(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Zf=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Xf(t,n);if(this.el=e.createElement(l,r),Jf.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Jf.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Df)){let t=u[o++],n=i.getAttribute(e).split(Of),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?np:r[1]===`?`?rp:r[1]===`@`?ip:tp}),i.removeAttribute(e)}else e.startsWith(Of)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Uf.test(i.tagName)){let e=i.textContent.split(Of),t=e.length-1;if(t>0){i.textContent=Tf?Tf.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Mf()),Jf.nextNode(),c.push({type:2,index:++a});i.append(e[t],Mf())}}}else if(i.nodeType===8)if(i.data===kf)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Of,e+1))!==-1;)c.push({type:7,index:a}),e+=Of.length-1}a++}}static createElement(e,t){let n=jf.createElement(`template`);return n.innerHTML=e,n}};function Qf(e,t,n=e,r){if(t===Kf)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Nf(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Qf(e,i._$AS(e,t.values),i,r)),t}var $f=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??jf).importNode(t,!0);Jf.currentNode=r;let i=Jf.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ep(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ap(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Jf.nextNode(),a++)}return Jf.currentNode=jf,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ep=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Qf(this,e,t),Nf(e)?e===J||e==null||e===``?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==Kf&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ff(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==J&&Nf(this._$AH)?this._$AA.nextSibling.data=e:this.T(jf.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Zf.createElement(Yf(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new $f(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=qf.get(e.strings);return t===void 0&&qf.set(e.strings,t=new Zf(e)),t}k(t){Pf(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Mf()),this.O(Mf()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=wf(e).nextSibling;wf(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},tp=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=J}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Qf(this,e,t,0),a=!Nf(e)||e!==this._$AH&&e!==Kf,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Qf(this,r[n+o],t,o),s===Kf&&(s=this._$AH[o]),a||=!Nf(s)||s!==this._$AH[o],s===J?e=J:e!==J&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},np=class extends tp{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}},rp=class extends tp{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}},ip=class extends tp{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Qf(this,e,t,0)??J)===Kf)return;let n=this._$AH,r=e===J&&n!==J||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==J&&(n===J||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ap=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Qf(this,e)}},op=Cf.litHtmlPolyfillSupport;op?.(Zf,ep),(Cf.litHtmlVersions??=[]).push(`3.3.2`);var sp=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ep(t.insertBefore(Mf(),e),e,void 0,n??{})}return i._$AI(e),i},cp=globalThis,Y=class extends Sf{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=sp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Kf}};Y._$litElement$=!0,Y.finalized=!0,cp.litElementHydrateSupport?.({LitElement:Y});var lp=cp.litElementPolyfillSupport;lp?.({LitElement:Y}),(cp.litElementVersions??=[]).push(`4.2.2`);var X=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},up={attribute:!0,type:String,converter:yf,reflect:!1,hasChanged:bf},dp=(e=up,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function fp(e){return(t,n)=>typeof n==`object`?dp(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function Z(e){return fp({...e,state:!0,attribute:!1})}function Q(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var pp=`0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef`,mp=`0x0000000000000000000000000000000000000000`;function hp(e,t){window.dispatchEvent(new CustomEvent(`tx-confirm-show`,{detail:{hash:e,action:t}}))}function gp(e){let t=e,n=typeof t?.shortMessage==`string`&&t.shortMessage||typeof t?.message==`string`&&t.message.split(`
`)[0]||String(e),r=typeof t?.message==`string`&&t.message||String(e),i=typeof t?.name==`string`&&t.name!==`Error`&&t.name||`ERROR`;window.dispatchEvent(new CustomEvent(`app-error-show`,{detail:{short:n,full:r,name:i}}))}var _p=class extends Y{constructor(...e){super(...e),this.open=!1,this.hash=null,this.action=``,this.transfers=null,this.errorMsg=``,this.errorFull=``,this.errorName=``,this._onError=e=>{this.errorMsg=e.detail.short,this.errorFull=e.detail.full,this.errorName=e.detail.name,this.hash=null,this.open=!0},this._onShow=e=>{this.hash=e.detail.hash,this.action=e.detail.action,this.transfers=null,this.open=!0,this._fetchTransfers(e.detail.hash)}}connectedCallback(){super.connectedCallback(),window.addEventListener(`tx-confirm-show`,this._onShow),window.addEventListener(`app-error-show`,this._onError)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`tx-confirm-show`,this._onShow),window.removeEventListener(`app-error-show`,this._onError)}async _fetchTransfers(e){let{connectedWallet:t}=await Jt(async()=>{let{connectedWallet:e}=await Promise.resolve().then(()=>Lu);return{connectedWallet:e}},void 0,import.meta.url);if(!t){this.transfers=[];return}let n=L[I],r=z(I),i=t.address.slice(2).toLowerCase(),a;for(let t=0;t<20;t++){try{if(a=await r.getTransactionReceipt({hash:e}),a)break}catch{}await new Promise(e=>setTimeout(e,800))}if(!a){this.transfers=[];return}G.refresh(),G.refreshUser(),setTimeout(()=>{G.refresh(),G.refreshUser()},1500);let o=a.logs.filter(e=>e.topics[0]?.toLowerCase()===pp&&e.topics[2]?.slice(-40).toLowerCase()===i);if(o.length===0){this.transfers=[];return}let s=[];for(let e of o){let t=e.address,i=`0x`+(e.topics[1]??`0x`).slice(-40),a=BigInt(e.data),o;if(t.toLowerCase()===n.fomon.toLowerCase())o=`foMON`;else if(t.toLowerCase()===n.shmon.toLowerCase())o=`shMON`;else{let e=G.vibecoins.find(e=>e.address.toLowerCase()===t.toLowerCase());if(e)o=e.symbol;else try{o=await r.readContract({address:t,abi:U,functionName:`symbol`})}catch{o=t.slice(0,6)+`...`}}let c=i.toLowerCase()===mp&&t.toLowerCase()===n.fomon.toLowerCase();s.push({symbol:o,amount:a,isAirdrop:c})}this.transfers=s}_close(){this.open=!1}_breakPascal(e){return e.replace(/([a-z])([A-Z])/g,`$1​$2`)}async _copy(){this.hash&&await navigator.clipboard.writeText(this.hash)}static{this.styles=K`
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
  `}render(){if(!this.open)return q``;if(!this.hash)return q`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog error">
          <button class="close" @click=${this._close}>×</button>
          <div class="err-icon">✕&nbsp;${this._breakPascal(this.errorName)}</div>
          <div class="err-msg">${this.errorMsg}</div>
          ${this.errorFull&&this.errorFull!==this.errorMsg?q`
            <div class="err-detail">${this.errorFull}</div>
          `:``}
        </div>
      </div>
    `;let e=L[I],t=this.hash.slice(0,10)+`…`+this.hash.slice(-6),n=e.explorer?`${e.explorer}/tx/${this.hash}`:null;return q`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog">
          <button class="close" @click=${this._close}>×</button>
          <div class="check">${this.transfers===null?q`<span class="spinner" style="display:inline-block;vertical-align:middle;margin-right:6px"></span>PENDING…`:`✓ CONFIRMED`}</div>
          <div class="action">${this.action}</div>

          <div class="hash-row">
            <span class="hash">${t}</span>
            <button class="copy-btn" @click=${this._copy}>copy</button>
            ${n?q`<a class="explorer-link" href=${n} target="_blank">view ↗</a>`:``}
          </div>

          ${this.transfers===null||this.transfers.length>0?q`
            <hr class="divider"/>
            <div class="transfers-title">token transfers</div>
            ${this.transfers===null?q`<div class="loading"><div class="spinner"></div>awaiting confirmation…</div>`:this.transfers.map(e=>q`
                <div class="transfer">
                  <span class="plus">+</span>
                  <span class="t-amount">${Td(e.amount)}</span>
                  <span class="t-symbol">${e.symbol}</span>
                  ${e.isAirdrop?q`<span class="airdrop-badge">airdrop</span>`:``}
                </div>
              `)}
          `:``}
        </div>
      </div>
    `}};Q([Z()],_p.prototype,`open`,void 0),Q([Z()],_p.prototype,`hash`,void 0),Q([Z()],_p.prototype,`action`,void 0),Q([Z()],_p.prototype,`transfers`,void 0),Q([Z()],_p.prototype,`errorMsg`,void 0),Q([Z()],_p.prototype,`errorFull`,void 0),Q([Z()],_p.prototype,`errorName`,void 0),_p=Q([X(`tx-confirm-dialog`)],_p);var vp=`fomonad-fomon-visited`,yp=class extends Y{constructor(...e){super(...e),this.open=!1,this.providerOpen=!1,this.referralCode=``,this.activeRefInput=``,this.registerPending=!1,this.claimPending=!1,this.confirmReg=!1,this.regEligError=!1,this.copiedRef=!1,this.copied=!1,this.denomPref=gd(),this._onWalletChanged=()=>this.requestUpdate(),this._onStoreUpdated=()=>this.requestUpdate(),this._onDocClick=e=>{e.composedPath().includes(this)||(this.open=!1,this.providerOpen=!1)}}static{this.styles=K`
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
  `}connectedCallback(){super.connectedCallback(),zu.addEventListener(`wallet-changed`,this._onWalletChanged),window.addEventListener(`store-updated`,this._onStoreUpdated),document.addEventListener(`click`,this._onDocClick)}disconnectedCallback(){super.disconnectedCallback(),zu.removeEventListener(`wallet-changed`,this._onWalletChanged),window.removeEventListener(`store-updated`,this._onStoreUpdated),document.removeEventListener(`click`,this._onDocClick)}async _connect(e){await Uu(e),Gu(e.info.rdns),await $u(I),this.providerOpen=!1,this.requestUpdate()}_disconnect(){Wu(),Ku(),this.open=!1}_showNotifDot(){let e=G.userState;if(!e)return!1;if(e.fomonClaimable>0n)return!0;let t=localStorage.getItem(vp);return e.fomonBalance>0n&&!t}async _copyAddress(){R&&(await navigator.clipboard.writeText(R.address),this.copied=!0,setTimeout(()=>{this.copied=!1},1500))}async _claimFoMon(){let e=L[I],t=V();if(!(!t||!R)){this.claimPending=!0;try{let n=await t.writeContract({address:e.fomon,abi:ed,functionName:`claim`,account:R.address,chain:t.chain});await G.refreshUser(),hp(n,`Claimed foMON dividends`)}catch(e){gp(e)}finally{this.claimPending=!1}}}async _optIn(){let e=L[I],t=V();if(!(!t||!R))try{let n=await t.writeContract({address:e.fomon,abi:ed,functionName:`optIn`,account:R.address,chain:t.chain});await G.refreshUser(),hp(n,`Opted in to foMON dividends`)}catch(e){gp(e)}}async _checkEligAndConfirm(){if(!this.referralCode||!R)return;let e=L[I],t=z();try{await t.simulateContract({address:e.game,abi:H,functionName:`registerReferral`,args:[jd(this.referralCode)],account:R.address}),this.regEligError=!1,this.confirmReg=!0}catch{this.regEligError=!0}}async _registerReferral(){if(!this.referralCode||!this.confirmReg)return;let e=L[I],t=V();if(!(!t||!R)){this.registerPending=!0,this.confirmReg=!1;try{let n=jd(this.referralCode),r=await t.writeContract({address:e.game,abi:H,functionName:`registerReferral`,args:[n],account:R.address,chain:t.chain}),i=this.referralCode;this.referralCode=``,hp(r,`Registered referral code "${i}"`)}catch(e){gp(e)}finally{this.registerPending=!1}}}async _copyRefUrl(e){await navigator.clipboard.writeText(`https://fomon.rip/${e}`),this.copiedRef=!0,setTimeout(()=>{this.copiedRef=!1},1500)}_setDenom(e){_d(e),this.denomPref=e,window.dispatchEvent(new Event(`store-updated`))}render(){if(!R){let e=Bu;return e.length===0?q`<button class="connect-btn" style="cursor:default;opacity:0.4">NO WALLET</button>`:e.length===1?q`
          <button class="connect-btn" @click=${()=>this._connect(e[0])}>
            ${e[0].info.icon?q`<img src=${e[0].info.icon} alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:6px;border-radius:2px" />`:``}
            CONNECT ${e[0].info.name.toUpperCase()}
          </button>
        `:q`
        <div style="position:relative">
          <button class="connect-btn" @click=${()=>{this.providerOpen=!this.providerOpen}}>
            CONNECT WALLET&nbsp;▾
          </button>
          ${this.providerOpen?q`
            <div class="dropdown" style="min-width:220px;padding:12px 16px">
              <div class="section-label">SELECT WALLET</div>
              ${e.map(e=>q`
                <button class="provider-item" @click=${()=>this._connect(e)}>
                  ${e.info.icon?q`<img src=${e.info.icon} alt="" />`:``}
                  ${e.info.name}
                </button>
              `)}
            </div>
          `:``}
        </div>
      `}let e=G.userState,t=this._showNotifDot();return q`
      <div style="position:relative">
        <button
          class="address-btn ${this.open?`active`:``}"
          @click=${()=>{this.open=!this.open,this.open&&localStorage.setItem(vp,`1`)}}
        >
          ${t?q`<span class="notif-dot"></span>`:``}
          ${this.copied?q`<span class="copied-flash">COPIED!</span>`:q`<span>${Ed(R.address)}</span>`}
          <span style="color:#505060;font-size:10px">▾</span>
        </button>

        ${this.open?q`
          <div class="dropdown">

            <!-- balances -->
            <div class="row">
              <span class="lbl">MON</span>
              <span class="val">${e?Sd(e.monBalance):`…`}</span>
            </div>
            <div class="row">
              <span class="lbl">shMON${L[10143].shmonUrl?q`&nbsp;<a href="${L[I].shmonUrl}" target="_blank" rel="noopener" title="redeem shMON for MON">Redeem ↗</a>`:``}</span>
              <span class="val">${e?xd(e.shmonBalance):`…`}</span>
            </div>
            <div class="row">
              <span class="lbl">foMON</span>
              <span class="val">${e?(Number(e.fomonBalance)/0xde0b6b3a7640000).toFixed(2):`…`}</span>
            </div>

            <hr class="divider" />

            <!-- denomination preference -->
            <div style="margin-bottom:10px">
              <div class="section-label">DISPLAY IN</div>
              <div class="denom-toggle">
                <button
                  class="denom-btn ${this.denomPref===`mon`?`active`:``}"
                  @click=${()=>this._setDenom(`mon`)}
                >MON</button>
                <button
                  class="denom-btn ${this.denomPref===`shmon`?`active`:``}"
                  @click=${()=>this._setDenom(`shmon`)}
                >shMON</button>
              </div>
            </div>

            <hr class="divider" />

            <!-- foMON dividend opt-in -->
            <div class="row">
              <span class="lbl">foMON DIVIDENDS</span>
              <span class=${e?.fomonOptedIn?`status-opted-in`:`status-opted-out`}>
                ${e?.fomonOptedIn?`● OPTED IN`:`○ OUT`}
              </span>
            </div>
            ${e?.fomonOptedIn?q`
              <div class="hint" style="text-align:right;margin-top:-2px">Earning shMON dividends</div>
            `:q`
              <div class="row" style="justify-content:flex-end">
                <button class="action-btn" @click=${this._optIn}>OPT IN</button>
              </div>
            `}

            ${e&&e.fomonClaimable>0n?q`
              <div class="row" style="margin-top:6px">
                <span class="lbl">PENDING shMON</span>
                <span class="val accent">${W(e.fomonClaimable)}</span>
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
                  placeholder=${Fd()??`enter code to use`}
                  .value=${this.activeRefInput}
                  @input=${e=>{this.activeRefInput=e.target.value}}
                />
                <button
                  class="action-btn"
                  @click=${()=>{this.activeRefInput&&(Id(this.activeRefInput),this.activeRefInput=``,this.requestUpdate())}}
                  ?disabled=${!this.activeRefInput}
                >SET</button>
                ${Fd()?q`
                  <button
                    class="action-btn"
                    style="color:#ff2d6b;border-color:#ff2d6b44"
                    @click=${()=>{Ld(),this.requestUpdate()}}
                  >✕</button>
                `:``}
              </div>
              <div class="hint">Credits the referrer on your next transaction</div>
            </div>

            <hr class="divider" />

            <!-- referral registration -->
            <div>
              <div class="section-label">${e?.referralCode?`YOUR REFERRAL CODE`:`REGISTER YOUR CODE`}</div>
              ${e?.referralCode?q`
                <div style="display:flex;gap:6px">
                  <input class="ref-input" readonly .value=${e.referralCode} style="flex:1;color:#ffe600;cursor:default" />
                  <button
                    class="action-btn"
                    @click=${()=>this._copyRefUrl(e.referralCode)}
                  >${this.copiedRef?`COPIED ✓`:`COPY URL`}</button>
                </div>
              `:q`
                <div style="display:flex;gap:6px">
                  <input
                    class="ref-input"
                    placeholder="your code"
                    .value=${this.referralCode}
                    @input=${e=>{this.referralCode=e.target.value,this.confirmReg=!1,this.regEligError=!1}}
                  />
                  <button
                    class="action-btn"
                    @click=${this._checkEligAndConfirm}
                    ?disabled=${!this.referralCode||this.registerPending}
                  >${this.registerPending?`…`:`REG`}</button>
                </div>
                ${this.confirmReg?q`
                  <div class="hint" style="color:#ff2d6b;margin-top:6px">
                    "${this.referralCode}" will be permanently linked to this wallet. Are you sure?
                  </div>
                  <div style="display:flex;gap:6px;margin-top:6px">
                    <button class="action-btn" @click=${this._registerReferral} ?disabled=${this.registerPending}>CONFIRM</button>
                    <button class="action-btn" style="color:#707088;border-color:#70708844" @click=${()=>{this.confirmReg=!1}}>CANCEL</button>
                  </div>
                `:q`
                  <div class="hint" style=${this.regEligError?`color:#ff2d6b`:``}>Eligible if you contributed ≥0.1% to one of the insider rounds of a pre-rugged vibecoin, or if you hold ≥0.1% of a pre-rugged vibecoin's supply.</div>
                `}
              `}
              ${e&&e.referralEarned>0n?q`
              <div class="row">
                <span class="lbl">REFERRAL EARNED</span>
                <span class="val gold">${W(e.referralEarned)}</span>
              </div>
            `:``}
            </div>


            <hr class="divider" />

            <!-- disconnect -->
            <div class="row" style="justify-content:flex-end">
              <button class="action-btn" @click=${this._copyAddress}>
                ${this.copied?`COPIED ADDRESS ✓`:`COPY ADDRESS`}
              </button>
              <button
                class="action-btn red"
                @click=${this._disconnect}
              >DISCONNECT</button>
            </div>
          </div>
        `:``}
      </div>
    `}};Q([Z()],yp.prototype,`open`,void 0),Q([Z()],yp.prototype,`providerOpen`,void 0),Q([Z()],yp.prototype,`referralCode`,void 0),Q([Z()],yp.prototype,`activeRefInput`,void 0),Q([Z()],yp.prototype,`registerPending`,void 0),Q([Z()],yp.prototype,`claimPending`,void 0),Q([Z()],yp.prototype,`confirmReg`,void 0),Q([Z()],yp.prototype,`regEligError`,void 0),Q([Z()],yp.prototype,`copiedRef`,void 0),Q([Z()],yp.prototype,`copied`,void 0),Q([Z()],yp.prototype,`denomPref`,void 0),yp=Q([X(`wallet-widget`)],yp);var bp=class extends Y{constructor(...e){super(...e),this.currentHash=window.location.hash||`#pump`,this._onHash=()=>{this.currentHash=window.location.hash||`#pump`}}static{this.styles=K`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`hashchange`,this._onHash)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,this._onHash)}render(){return q`
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
    `}};Q([Z()],bp.prototype,`currentHash`,void 0),bp=Q([X(`header-bar`)],bp);var xp=class extends Y{constructor(...e){super(...e),this.claimPendingA=!1,this.claimPendingB=!1,this.tokensAllocA=0n,this.tokensAllocB=0n,this._lastSettledCycle=-1n,this._tickInterval=0,this._onUpdate=()=>{let e=G.gameState,t=e?Wd(e):0;(t===2||t===3)&&e&&e.cycle!==this._lastSettledCycle&&(this._lastSettledCycle=e.cycle,this._fetchAllocations(e.cycle)),this.requestUpdate()}}static{this.styles=K`
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

    .badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 1px;
      padding: 2px 6px;
      border: 1px solid currentColor;
      cursor: help;
    }
    .badge-a { color: #ffe600; border-color: #ffe60044; }
    .badge-b { color: #ffe60088; border-color: #ffe60033; }

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

    .status-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #606070;
      margin: 8px 0;
    }

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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`store-updated`,this._onUpdate),this._tickInterval=window.setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`store-updated`,this._onUpdate),clearInterval(this._tickInterval)}async _fetchAllocations(e){let t=L[I],n=z(I),r=t.game,[i,a]=await Promise.all([n.readContract({address:r,abi:H,functionName:`tokensSeriesAByCycle`,args:[e]}),n.readContract({address:r,abi:H,functionName:`tokensSeriesBByCycle`,args:[e]})]);this.tokensAllocA=i,this.tokensAllocB=a}_openBuy(e){window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:e}}))}async _claimA(){let e=G.gameState,t=V();if(!(!t||!R||!e)){this.claimPendingA=!0;try{let n=L[I],r=await t.writeContract({address:n.game,abi:H,functionName:`claimSeriesATokens`,args:[e.cycle],account:R.address,chain:t.chain});await Promise.all([G.refresh(),G.refreshUser()]),hp(r,`Claimed Insider Vibecoins`)}catch(e){console.error(`Claim A error:`,e)}finally{this.claimPendingA=!1}}}async _claimB(){let e=G.gameState,t=V();if(!(!t||!R||!e)){this.claimPendingB=!0;try{let n=L[I],r=await t.writeContract({address:n.game,abi:H,functionName:`claimSeriesBTokens`,args:[e.cycle],account:R.address,chain:t.chain});await Promise.all([G.refresh(),G.refreshUser()]),hp(r,`Claimed "Insider" Vibecoins`)}catch(e){console.error(`Claim B error:`,e)}finally{this.claimPendingB=!1}}}_phaseStatus(e,t){let n=Gd(e,t);if(n===0n)return t===0?`DEPOSIT TO KICK OFF (0.1 shMON needed)`:`PENDING`;let r=Number(n)-Hd();return r>0?`ENDS IN ${Math.floor(r/3600)}h ${Math.floor(r%3600/60)}m ${Math.floor(r%60)}s`:`ENDED`}render(){let e=G.gameState,t=G.userState,n=e?Wd(e):0,r=n===0,i=n===1,a=e?G.vibecoins.find(t=>t.address.toLowerCase()===e.vibecoin.toLowerCase())?.symbol??`?`:`?`,o=t?t.seriesADeposit>0n:!1,s=t?t.seriesBDeposit>0n:!1,c=n===2||n===3,l=e?.totalSeriesA??0n,u=e?.totalSeriesB??0n,d=c&&o&&this.tokensAllocA>0n&&l>0n?this.tokensAllocA*t.seriesADeposit/l:0n,f=c&&s&&this.tokensAllocB>0n&&u>0n?this.tokensAllocB*t.seriesBDeposit/u:0n;return q`
      <div class="cards">
        <!-- Series A -->
        <div class="card ${n>0&&!c?`disabled`:``}">
          <div class="card-title">
            INSIDER PRE-SALE
            <span class="meta">(foMON hodlers only)</span>
          </div>
          <div class="meta">Every deposit gets a proportional slice of the bottom floor</div>

          <div class="row">
            <span class="key">TOTAL DEPOSITED</span>
            <span class="val">${e?W(e.totalSeriesA):`--`}</span>
          </div>
          ${t?q`
            <div class="row">
              <span class="key">YOUR DEPOSIT</span>
              <span class="val ${o?`highlight`:``}">${W(t.seriesADeposit)} (${Od(t.seriesADeposit,e?.totalSeriesA||0n)})</span>
            </div>
          `:``}
          <div class="row">
            <span class="key">STATUS</span>
            <span class="val">${e?this._phaseStatus(e,0):`--`}</span>
          </div>

          ${c&&o?q`
            <div class="row">
              <span class="key">YOUR VIBECOINS</span>
              <span class="val highlight">${d>0n?wd(d,a):`…`}</span>
            </div>
          `:``}

          ${r?q`
            <button class="btn" @click=${()=>this._openBuy(`seriesA`)}>DEPOSIT</button>
            ${e?.phase===0&&e.phaseEndTime===0n?q`
              <div class="meta">Your deposit starts the next round.</div>
            `:``}
          `:c&&o?q`
            <button class="btn claim" @click=${this._claimA} ?disabled=${this.claimPendingA}>
              ${this.claimPendingA?`CLAIMING…`:`CLAIM VIBECOINS`}
            </button>
          `:q`
            <button class="btn" disabled>CLOSED</button>
          `}
        </div>

        <!-- Series B -->
        <div class="card ${n<1?`disabled`:``}">
          <div class="card-title">
            "INSIDER" PRE-SALE
            <span class="meta">(Open to all)</span>
          </div>
          <div class="meta">Every deposit gets a proportional slice of the "bottom floor"</div>

          <div class="row">
            <span class="key">TOTAL DEPOSITED</span>
            <span class="val">${e?W(e.totalSeriesB):`--`}</span>
          </div>
          ${t?q`
            <div class="row">
              <span class="key">YOUR DEPOSIT</span>
              <span class="val ${s?`highlight`:``}">${W(t.seriesBDeposit)} (${Od(t.seriesBDeposit,e?.totalSeriesB||0n)})</span>
            </div>
          `:``}
          <div class="row">
            <span class="key">STATUS</span>
            <span class="val">${e?this._phaseStatus(e,1):`--`}</span>
          </div>

          ${c&&s?q`
            <div class="row">
              <span class="key">YOUR VIBECOINS</span>
              <span class="val highlight">${f>0n?wd(f,a):`…`}</span>
            </div>
          `:``}

          ${i?q`
            <button class="btn" @click=${()=>this._openBuy(`seriesB`)}>DEPOSIT</button>
          `:c&&s?q`
            <button
              class="btn claim"
              @click=${this._claimB}
              ?disabled=${this.claimPendingB}
            >
              ${this.claimPendingB?`CLAIMING...`:`CLAIM VIBECOINS`}
            </button>
          `:q`
            <button class="btn" disabled>${n<1?`NOT OPEN YET`:`CLOSED`}</button>
          `}
        </div>
      </div>
    `}};Q([Z()],xp.prototype,`claimPendingA`,void 0),Q([Z()],xp.prototype,`claimPendingB`,void 0),Q([Z()],xp.prototype,`tokensAllocA`,void 0),Q([Z()],xp.prototype,`tokensAllocB`,void 0),xp=Q([X(`seed-section`)],xp);var Sp=class extends Y{constructor(...e){super(...e),this.vcAddress=`0x0000000000000000000000000000000000000000`,this.earned=0n,this.optedIn=!1,this.vcBalance=0n,this.claimPending=!1,this.optPending=!1,this.seriesASupply=0n,this.seriesBSupply=0n,this.athSupply=0n,this.athIsPostRug=!1,this._onUpdate=()=>{this.requestUpdate(),this._loadDividendState()}}static{this.styles=K`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`store-updated`,this._onUpdate),this._loadDividendState()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`store-updated`,this._onUpdate)}async _loadDividendState(){let e=R;if(!(!e||!this.vcAddress||this.vcAddress===`0x0000000000000000000000000000000000000000`))try{let t=z(I),n=L[I],r=G.vibecoins.find(e=>e.address.toLowerCase()===this.vcAddress.toLowerCase()),i=r?BigInt(r.cycle):G.gameState?.cycle,[a,o,s,c,l,u,d]=await Promise.all([t.readContract({address:this.vcAddress,abi:U,functionName:`earned`,args:[e.address]}),t.readContract({address:this.vcAddress,abi:U,functionName:`optedIn`,args:[e.address]}),t.readContract({address:this.vcAddress,abi:U,functionName:`balanceOf`,args:[e.address]}),i===void 0?Promise.resolve(0n):t.readContract({address:n.game,abi:H,functionName:`tokensSeriesAByCycle`,args:[i]}),i===void 0?Promise.resolve(0n):t.readContract({address:n.game,abi:H,functionName:`tokensSeriesBByCycle`,args:[i]}),t.readContract({address:this.vcAddress,abi:U,functionName:`athPrice`}),t.readContract({address:this.vcAddress,abi:U,functionName:`athPostRug`})]);this.earned=a,this.optedIn=o,this.vcBalance=s,this.seriesASupply=c,this.seriesBSupply=l,u>0n&&r&&r.K>0n?(this.athSupply=u>BigInt(r.P0)?(u-BigInt(r.P0))*10n**18n/BigInt(r.K):0n,this.athIsPostRug=d):(this.athSupply=0n,this.athIsPostRug=!1)}catch{}}async _optToggle(){let e=V();if(!(!e||!R)){this.optPending=!0;try{let t=this.optedIn,n=t?`optOut`:`optIn`;hp(await e.writeContract({address:this.vcAddress,abi:U,functionName:n,account:R.address,chain:e.chain}),t?`Opted out of vibes`:`Opted in to vibes`),await this._loadDividendState()}catch(e){gp(e)}finally{this.optPending=!1}}}async _claimDividends(){let e=V();if(!(!e||!R)){this.claimPending=!0;try{let t=await e.writeContract({address:this.vcAddress,abi:U,functionName:`claimDividends`,args:[R.address],account:R.address,chain:e.chain});await this._loadDividendState(),hp(t,`Claimed vibecoin dividends`)}catch(e){console.error(`Claim dividends error:`,e)}finally{this.claimPending=!1}}}_renderChart(e){let t=e.P0,n=e.K,r=e.totalSupply,i=r*3n/2n||10n**18n,a=10n**18n,o=[],s=[];for(let e=0;e<=60;e++){let r=i*BigInt(e)/BigInt(60),c=t+n*r/a;o.push(Number(r)/0xde0b6b3a7640000),s.push(Number(c)/1e9)}let c=o[o.length-1]||1,l=Math.max(...s)||1,u=e=>38+e/c*262,d=e=>66-e/l*66,f=o.map((e,t)=>`${t===0?`M`:`L`}${u(e).toFixed(1)},${d(s[t]).toFixed(1)}`).join(` `),p=Math.round(u(Number(r)/0xde0b6b3a7640000)),m=Math.round(u(Number(this.athSupply))),h=this.seriesASupply>0n?u(Number(this.seriesASupply)/0xde0b6b3a7640000):null,g=this.seriesASupply>0n&&this.seriesBSupply>0n?u(Number(this.seriesASupply+this.seriesBSupply)/0xde0b6b3a7640000):null,_=e=>String(e).split(``).map(e=>`₀₁₂₃₄₅₆₇₈₉`[+e]).join(``),v=e=>{let t=e/1e9;if(t>=.001)return t.toPrecision(3);let n=t.toFixed(30).split(`.`)[1]??``,r=0;for(let e of n)if(e===`0`)r++;else break;let i=n.slice(r,r+3);return`0.0${_(r-1)}${i}`};return console.log(`AAAAAAAAAAAA`,this.athSupply,r),q`
      <div class="chart-area">
        <svg viewBox="0 0 ${300} ${80}" style="width:100%;height:${84}px" font-family="'JetBrains Mono',monospace" font-size="10">
          <!-- Y axis -->
          <line x1="${38}" y1="0" x2="${38}" y2="${66}" stroke="#1e1e38" stroke-width="1" />
          <text x="${36}" y="10" fill="#505060" text-anchor="end">${v(l)}</text>
          <text x="${36}" y="${66}" fill="#505060" text-anchor="end">${v(s[0])}</text>
          <text x="2" y="${66/2}" fill="#404050" text-anchor="middle" transform="rotate(-90,6,${66/2})">shMON</text>

          <!-- X axis -->
          <line x1="${38}" y1="${66}" x2="${300}" y2="${66}" stroke="#1e1e38" stroke-width="1" />
          <text x="${38}" y="${80}" fill="#505060" text-anchor="start">0</text>
          <text x="${300}" y="${80}" fill="#505060" text-anchor="end">${(e=>e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:e.toFixed(0))(c)}</text>

          <!-- Bonding curve -->
          <path d="${f}" fill="none" stroke="#00e5ff" stroke-width="1.5" />

          <!-- Series A boundary -->
          ${h===null?``:Gf`
            <line x1="${h.toFixed(1)}" y1="0" x2="${h.toFixed(1)}" y2="${66}" stroke="#ffe600aa" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${h.toFixed(1)}" y="${78}" fill="#ffe600aa" font-size="9" text-anchor="middle">I</text>
          `}

          <!-- Series B boundary -->
          ${g===null?``:Gf`
            <line x1="${g.toFixed(1)}" y1="0" x2="${g.toFixed(1)}" y2="${66}" stroke="#ffe600aa" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${g.toFixed(1)}" y="${78}" fill="#ffe600aa" font-size="9" text-anchor="middle">"I"</text>
          `}

          <!-- ATH/rug supply -->
          ${this.athSupply>0n&&Math.abs(m-p)>1?Gf`
            <line x1="${m}" y1="0" x2="${m}" y2="${66}" stroke="${this.athIsPostRug?`#ff9d00aa`:`#ff2d6baa`}" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${m}" y="${78}" fill="${this.athIsPostRug?`#ff9d00aa`:`#ff2d6baa`}" font-size="9" text-anchor="middle">${this.athIsPostRug?`ath`:`rug`}</text>
          `:``}

          <!-- Current supply -->
          <line x1="${p}" y1="0" x2="${p}" y2="${66}" stroke="#00e5ff88" stroke-width="1" stroke-dasharray="3,3" />
          <text x="${p}" y="${78}" fill="#00e5ff88" font-size="9" text-anchor="middle">now</text>
        </svg>
      </div>
    `}render(){let e=G.gameState,t=G.userState,n=this.vcAddress;if(!n||n===`0x0000000000000000000000000000000000000000`)return q`<div style="color:#3a3a4a;font-family:monospace;font-size:11px">No vibecoin active</div>`;let r=G.vibecoins.find(e=>e.address.toLowerCase()===n.toLowerCase()),i=r?r.P0+r.K*r.totalSupply/10n**18n:0n,a=r&&t&&this.vcBalance>0n?i*this.vcBalance/10n**18n:0n,o=r?.unlocked??!1;return q`
      <div class="panel">
        <div class="row">
          <span class="key">CURRENT PRICE</span>
          <span class="val">${(Number(i)/0xde0b6b3a7640000).toFixed(9)} shMON/\$${r?.symbol??`???`}</span>
        </div>
        <div class="row">
          <span class="key">TOTAL SUPPLY</span>
          <span class="val">${r?wd(r.totalSupply,r.symbol):`--`}</span>
        </div>
        ${t?q`
          <div class="row">
            <span class="key">YOUR BALANCE</span>
            <span class="val">${wd(this.vcBalance,r?.symbol||`vibecoins`)} (${Od(this.vcBalance,r?.totalSupply||0n)}, ${W(a)})</span>
          </div>
        `:``}

        ${r?this._renderChart(r):``}

        <div class="btn-row">
          <button class="btn buy" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:o?`vibecoin`:`publicBuy`,vibecoinAddress:n}}))}}>BUY</button>
          <button
            class="btn sell"
            @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:`vibecoinSell`,vibecoinAddress:n,tokenBalance:this.vcBalance}}))}}
            ?disabled=${!o||!t||this.vcBalance===0n}
            title=${o?``:`Selling unlocks at rugpull`}
          >SELL</button>
        </div>

        ${e&&!o?q`
          <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#3a3a4a;margin-top:8px;text-align:center">
            Selling unlocks at rugpull
          </div>
        `:``}

        <div class="dividends">
          <span class="div-key">VIBES</span>
          <span class="div-val">${wd(this.earned,r?.symbol??``)}</span>
          <button
            class="claim-btn"
            @click=${this._claimDividends}
            ?disabled=${this.earned===0n||this.claimPending}
          >${this.claimPending?`...`:`CLAIM`}</button>

          <span class="div-key">OPT-IN STATUS</span>
          <span class="div-val" style="color:${this.optedIn?`#00ff9d`:`#606070`}">
            ${this.optedIn?`OPTED IN`:`OPTED OUT`}
          </span>
          <button
            class="opt-btn ${this.optedIn?`out`:`in`}"
            @click=${this._optToggle}
            ?disabled=${this.optPending}
          >${this.optPending?`...`:this.optedIn?`OPT OUT`:`OPT IN`}</button>
        </div>
      </div>
    `}};Q([fp({type:String})],Sp.prototype,`vcAddress`,void 0),Q([Z()],Sp.prototype,`earned`,void 0),Q([Z()],Sp.prototype,`optedIn`,void 0),Q([Z()],Sp.prototype,`vcBalance`,void 0),Q([Z()],Sp.prototype,`claimPending`,void 0),Q([Z()],Sp.prototype,`optPending`,void 0),Q([Z()],Sp.prototype,`seriesASupply`,void 0),Q([Z()],Sp.prototype,`seriesBSupply`,void 0),Q([Z()],Sp.prototype,`athSupply`,void 0),Q([Z()],Sp.prototype,`athIsPostRug`,void 0),Sp=Q([X(`launch-section`)],Sp);var Cp=class extends Y{constructor(...e){super(...e),this.forceSettled=!1,this.timerMs=0,this.triggerPending=!1,this.prevWinner=null,this.prevPrize=0n,this.rugpullerCode=null,this._rugpullerAddrFetched=``,this.timerInterval=null,this._onUpdate=()=>{this.forceSettled&&this._loadPrevWinner();let e=G.gameState?.lastBuyer??``;e&&e!==this._rugpullerAddrFetched&&this._fetchRugpullerCode(e),this.requestUpdate()}}static{this.styles=K`
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
      transition: color 0.3s;
    }
    .timer-large.warning {
      color: #ff2d6b;
      text-shadow: 0 0 20px #ff2d6b;
      animation: pulse 0.8s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; text-shadow: 0 0 24px #ff2d6b; }
      50% { opacity: 0.7; text-shadow: 0 0 8px #ff2d6b; }
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

    .winner-display {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #d8d8e8;
    }
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`store-updated`,this._onUpdate),this.timerInterval=setInterval(()=>this._tick(),50),this.forceSettled&&this._loadPrevWinner()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`store-updated`,this._onUpdate),this.timerInterval&&clearInterval(this.timerInterval)}async _fetchRugpullerCode(e){this._rugpullerAddrFetched=e;try{let t=z(I),n=L[I];this.rugpullerCode=Md(await t.readContract({address:n.game,abi:H,functionName:`referralCodeOf`,args:[e]}))}catch{this.rugpullerCode=null}}async _loadPrevWinner(){let e=G.gameState;if(!e||e.cycle<2n)return;let t=e.cycle-1n;try{let e=z(I),n=L[I],r=await e.readContract({address:n.game,abi:H,functionName:`winnerByCycle`,args:[t]}),i=await e.readContract({address:n.game,abi:H,functionName:`prizeByCycle`,args:[t]});this.prevWinner=r,this.prevPrize=i}catch{}}_tick(){let e=G.gameState;if(!e||e.phase!==2||e.phaseEndTime===0n){this.timerMs=0;return}this.timerMs=Math.max(0,Number(e.phaseEndTime)*1e3-Ud()),this.requestUpdate()}async _triggerSettlement(){let e=V();if(!(!e||!R)){this.triggerPending=!0;try{let t=L[I],n=await e.writeContract({address:t.game,abi:H,functionName:`triggerSettlement`,account:R.address,chain:e.chain});await G.refresh(),hp(n,`Rugpull triggered — settlement in progress`)}catch(e){gp(e)}finally{this.triggerPending=!1}}}render(){let e=G.gameState;if(!e)return q``;let t=e.phase,n=e.isTimerExpired||this.timerMs===0,r=!n&&this.timerMs<300*1e3,i=t===3||this.forceSettled,a=`0x0000000000000000000000000000000000000000`,o=this.forceSettled?this.prevWinner??a:e.lastBuyer,s=this.forceSettled?this.prevPrize:e.prizePool,c=s*90n/100n,l=s-c;return q`
      <div class="panel">
        ${i?q`
          <div class="settled-banner">
            <div class="settled-title">RUGPULLED</div>
          </div>
        `:n?q`
          <div class="expired-label">TIMER EXPIRED</div>
        `:q`
          <div class="timer-large ${r?`warning`:``}">
            ${Dd(this.timerMs)}
          </div>
        `}

        ${o===a?q`
          <div class="no-buyer">no rugpuller yet</div>
        `:q`
          <div class="rugpuller-block">
            <div class="rugpuller-label">Current Rugpuller${this.rugpullerCode?q` · <span style="color:#ffe600">${this.rugpullerCode}</span>`:``}</div>
            ${L[10143].explorer?q`
              <a class="rugpuller-addr" href="${L[I].explorer}/address/${o}" target="_blank">
                <span class="addr-short">${Ed(o)}</span>
                <span class="addr-full">${o}</span>
              </a>
            `:q`
              <div class="rugpuller-addr">
                <span class="addr-short">${Ed(o)}</span>
                <span class="addr-full">${o}</span>
              </div>
            `}
          </div>
          <div class="row">
            <span class="key">THEIR CUT</span>
            <span class="val">${W(c)}</span>
          </div>
          <div class="cut-note">${W(l)} rolls to next cycle</div>
        `}

        ${n&&!i?q`
          <button
            class="trigger-btn"
            @click=${this._triggerSettlement}
            ?disabled=${this.triggerPending||!R}
          >
            ${this.triggerPending?`SETTLING...`:`TRIGGER RUGPULL`}
          </button>
        `:``}
      </div>
    `}};Q([fp({type:Boolean})],Cp.prototype,`forceSettled`,void 0),Q([Z()],Cp.prototype,`timerMs`,void 0),Q([Z()],Cp.prototype,`triggerPending`,void 0),Q([Z()],Cp.prototype,`prevWinner`,void 0),Q([Z()],Cp.prototype,`prevPrize`,void 0),Q([Z()],Cp.prototype,`rugpullerCode`,void 0),Cp=Q([X(`rugpull-section`)],Cp);var wp=`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;function Tp(){let e=3+Math.floor(Math.random()*4);return Array.from({length:e},()=>wp[Math.floor(Math.random()*36)]).join(``)}var Ep=`GENERATING VIBECOIN….BOOTSTRAPPING CONSENSUS….ALIGNING INCENTIVES….MANIFESTING UTILITY….DEPLOYING HOPIUM….CONSULTING THE VIBE ORACLE….LAUNDERING DEGENERACY….DECENTRALIZING SOMETHING….LOADING FUTURE BAGS….SYNCING WITH BLOCKCHAIN™….SOURCING GREATER FOOLS….CALIBRATING RUG TENSION….INFLATING TOKEN METRICS….FABRICATING ROADMAP….ONBOARDING EXIT LIQUIDITY….COMPILING VIBES….TRAINING TOKENOMICS AI….SCHEDULING INFLUENCER POSTS….AUDITING THE UNAUDITABLE….PLAGIARIZING WHITEPAPER….SEEDING TELEGRAM GROUP….RANDOMIZING 'INSURANCE FUND'….GENERATING PLAUSIBLE DENIABILITY….STRESS-TESTING EXIT STRATEGY….TOKENIZING NOTHING….BOOTSTRAPPING ORGANIC COMMUNITY….ACTIVATING ANONYMOUS FOUNDERS….APPLYING GIRLMATH…`.split(`.`),Dp=[{label:`AI Tokens Consumed`,value:e=>e.tokensConsumed.toLocaleString()},{label:`Exit Liquidity Manifested`,value:e=>`${e.exitLiquidity.toLocaleString()} wallets`},{label:`Hopium Injected`,value:e=>`${e.hopium} cc`},{label:`Bag Holders Hallucinated`,value:e=>e.bagHolders.toLocaleString()},{label:`Rug Threads Woven`,value:e=>`${e.rugThreads.toFixed(1)}%`},{label:`Utility`,value:()=>`undefined`},{label:`Financial Advisors Ignored`,value:()=>`1`},{label:`Diamond Hands Detected`,value:()=>`0`},{label:`NFT Royalties Waived`,value:()=>`0`},{label:`Regulatory Gray Areas Exploited`,value:e=>String(e.grayAreas)},{label:`Market Makers Angered`,value:e=>String(e.marketMakers)},{label:`Decentralization Theater`,value:()=>`STAGING`},{label:`Plausible Deniability`,value:e=>`${e.plausibleDeniability}%`},{label:`Whitepaper Pages`,value:()=>`0`},{label:`Legal Opinions Sought`,value:()=>`0`},{label:`Liquidity Lock`,value:()=>`awaiting rugpull`},{label:`Net Cost After Girlmath`,value:()=>`$0 💖`}];function Op(){return{tokensConsumed:Math.floor(Math.random()*45e5)+5e5,exitLiquidity:Math.floor(Math.random()*15e3)+5e3,hopium:Math.floor(Math.random()*700)+100,bagHolders:Math.floor(Math.random()*2e3)+500,rugThreads:60+Math.random()*25,grayAreas:Math.floor(Math.random()*3)+1,marketMakers:Math.floor(Math.random()*2)+1,plausibleDeniability:Math.floor(Math.random()*40)+60}}var kp=class extends Y{constructor(...e){super(...e),this.tokenUri=``,this.lastVibecoin=`0x0000000000000000000000000000000000000000`,this._scrambledTicker=Tp(),this._headingIdx=0,this._statIdx=0,this._genStats=Op(),this.settlePending=!1,this._tickCount=0,this._genInterval=null,this._onStoreUpdated=()=>{let e=G.gameState,t=e?.cycle??0n,n=e?.phase===0&&e.phaseEndTime?Number(e.phaseEndTime)-Hd():1/0,r=e&&e.phase===0&&t>1n&&(e.phaseEndTime===0n||n>Number(G.gameConstants?.SERIES_A_DURATION??7200n)/2)?(G.vibecoins.find(e=>e.cycle===Number(t)-1)??G.vibecoins[0])?.address??null:e?.vibecoin&&e.vibecoin!==`0x0000000000000000000000000000000000000000`?e.vibecoin:null;r&&r!==this.lastVibecoin&&(this.lastVibecoin=r,this._loadTokenUri(r)),this.requestUpdate()}}static{this.styles=K`
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

  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`store-updated`,this._onStoreUpdated),this._genInterval=setInterval(()=>this._tickGen(),150)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`store-updated`,this._onStoreUpdated),this._genInterval&&clearInterval(this._genInterval)}async _settle(){let e=V();if(!(!e||!R)){this.settlePending=!0;try{let t=L[I],n=await e.writeContract({address:t.game,abi:H,functionName:`settleSeriesB`,account:R.address,chain:e.chain});await G.refresh(),hp(n,`Vibecoin generated — insider rounds settled`)}catch(e){gp(e)}finally{this.settlePending=!1}}}_tickGen(){this._scrambledTicker=Tp(),this._tickCount++;let e=this._genStats;if(e.tokensConsumed+=Math.floor(Math.random()*14)+4,e.exitLiquidity+=Math.floor(Math.random()*8)+2,e.hopium+=+(Math.random()<.3),e.bagHolders+=Math.floor(Math.random()*6)+1,e.rugThreads=Math.min(99.7,e.rugThreads+Math.random()*.02),Math.random()<.02&&(e.grayAreas+=1),Math.random()<.01&&(e.marketMakers+=1),this._tickCount%20==0){let e=this._headingIdx;for(;e===this._headingIdx;)e=Math.floor(Math.random()*Ep.length);this._headingIdx=e}if(this._tickCount%27==0){let e=this._statIdx;for(;e===this._statIdx;)e=Math.floor(Math.random()*Dp.length);this._statIdx=e,(e===9||e===10)&&(this._genStats={...this._genStats,grayAreas:Math.floor(Math.random()*3)+1,marketMakers:Math.floor(Math.random()*2)+1})}}async _loadTokenUri(e){try{this.tokenUri=await z(I).readContract({address:e,abi:U,functionName:`tokenURI`})}catch{this.tokenUri=``}}_getSvgFromUri(){if(!this.tokenUri)return``;if(this.tokenUri.startsWith(`data:application/json`))try{let e=atob(this.tokenUri.split(`,`)[1]);return JSON.parse(e).image??``}catch{return``}return``}render(){let e=G.gameState;L[I];let t=`0x0000000000000000000000000000000000000000`,n=e?.cycle??0n,r=e?.phase===0&&e.phaseEndTime?Number(e.phaseEndTime)-Hd():1/0,i=!!(e&&e.phase===0&&n>1n&&(e.phaseEndTime===0n||r>Number(G.gameConstants?.SERIES_A_DURATION??7200n)/2)),a=i?G.vibecoins.find(e=>e.cycle===Number(n)-1)??G.vibecoins[0]??null:null,o=e?.vibecoin?G.vibecoins.find(t=>t.address.toLowerCase()===e.vibecoin.toLowerCase()):null,s=i?a:o,c=s?.palette[0]??`#00e5ff`,l=s?.palette[1]??`#0066ff`,u=e?Wd(e):0,d=u===2||u===3,f=this._getSvgFromUri(),p=e?.vibecoin&&e.vibecoin!==t,m=!e||e.phase===0&&e.phaseEndTime===0n,h=!m&&!p,g=h&&!!e&&e.phase===1&&e.phaseEndTime>0n&&Hd()>=Number(e.phaseEndTime);return q`
      <div class="container">
        <div
          class="vibecoin-hero"
          style="--vc-col1:${c};--vc-col2:${l};border-color:${i?`#ff2d6b33`:m?`#252540`:h?`#1a1a30`:c+`22`}"
        >
          ${i?q`
            ${f?q`
              <div class="vc-svg-wrapper" style="--vc-col1:${c};filter:drop-shadow(0 0 20px ${c})">
                <img src=${f} alt="vibecoin" />
              </div>
            `:q`
              <div class="vc-svg-wrapper" style="background:linear-gradient(135deg,${c},${l});--vc-col1:${c}"></div>
            `}
            ${L[10143].explorer&&a?q`
              <a class="vc-name" style="color:${c};text-shadow:0 0 20px ${c},0 0 60px ${c}44" href="${L[I].explorer}/address/${a.address}" target="_blank">${a.name}</a>
            `:q`
              <div class="vc-name" style="color:${c};text-shadow:0 0 20px ${c},0 0 60px ${c}44">${a?.name??`--`}</div>
            `}
            <div class="vc-ticker-row">
              <span class="vc-ticker">\$${a?.symbol??`--`}</span>
              ${a?q`<span class="round-badge">#${a.cycle}</span>`:``}
            </div>
            ${a?q`
              <div class="hero-stats">
                <div class="hero-stat">
                  <span class="hero-stat-val">${W(a.poolBalance)}</span>
                  <span class="hero-stat-label">Locked In</span>
                </div>
                <div class="hero-stat">
                  <span class="hero-stat-val">${W((a.P0+a.K*a.totalSupply/10n**18n)*a.totalSupply/10n**18n)}</span>
                  <span class="hero-stat-label">Market Cap</span>
                </div>
              </div>
            `:``}
          `:m?q`
            <div class="awaiting">
              <div class="vc-pending-phase">Awaiting insiders</div>
              <div class="vc-pending-tokens">
                 Initial insider deposit needed to begin Vibecoin generation
              </div>
            </div>
          `:h?q`
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
              <div class="vc-pending-phase">${g?`Vibecoin Ready`:Ep[this._headingIdx]}</div>
              <div class="vc-pending-ticker">\$${this._scrambledTicker}</div>
              <div class="vc-pending-tokens">
                ${g?`Insider rounds have concluded. Vibecoin may now be generated.`:`Vibecoin will be generated after insider rounds conclude.`}<br>
                ${Dp[this._statIdx].label}: <span class="count">${Dp[this._statIdx].value(this._genStats)}</span>
              </div>
              ${g?q`
                <button class="settle-btn" ?disabled=${this.settlePending} @click=${()=>this._settle()}>
                  ${this.settlePending?`Settling...`:`Generate Vibecoin`}
                </button>
              `:``}
            </div>
          `:q`
            ${f?q`
              <div class="vc-svg-wrapper" style="--vc-col1:${c}">
                <img src=${f} alt="vibecoin" />
              </div>
            `:q`
              <div class="vc-svg-wrapper" style="background:linear-gradient(135deg,${c},${l});--vc-col1:${c}"></div>
            `}

            ${L[10143].explorer&&o?q`
              <a class="vc-name" href="${L[I].explorer}/address/${o.address}" target="_blank">${o.name}</a>
            `:q`<div class="vc-name">${o?.name??`--`}</div>`}
            <div class="vc-ticker-row">
              <span class="vc-ticker">\$${o?.symbol??`--`}</span>
              ${o?q`<span class="round-badge">#${o.cycle}</span>`:``}
            </div>

            ${e&&o?q`
              <div class="hero-stats">
               <div class="hero-stat">
                  <span class="hero-stat-val">${W(o.poolBalance)}</span>
                  <span class="hero-stat-label">Locked In</span>
                </div>
                <div class="hero-stat">
                  <span class="hero-stat-val">${W((o.P0+o.K*o.totalSupply/10n**18n)*o.totalSupply/10n**18n)}</span>
                  <span class="hero-stat-label">Market Cap</span>
                </div>
                <div class="hero-stat">
                  <span class="hero-stat-val">${W(e.prizePool)}</span>
                  <span class="hero-stat-label">Rugpull Fund</span>
                </div>

              </div>
            `:``}
          `}
        </div>

        <div class="sections">
          ${i&&a?q`
            <div>
              <div class="section-label">— RUGPULL —</div>
              <rugpull-section .forceSettled=${!0}></rugpull-section>
            </div>
            <div>
              <div class="section-label">— SELL —</div>
              <launch-section .vcAddress=${a.address}></launch-section>
            </div>
          `:d&&p?q`
            <div>
              <div class="section-label">— RUGPULL —</div>
              <rugpull-section></rugpull-section>
            </div>
            <div>
              <div class="section-label">— PUMP —</div>
              <launch-section .vcAddress=${e?.vibecoin??t}></launch-section>
            </div>
          `:``}
          <div>
            <div class="section-label">— INSIDER ROUNDS —</div>
            <seed-section></seed-section>
          </div>
        </div>
      </div>
    `}};Q([Z()],kp.prototype,`tokenUri`,void 0),Q([Z()],kp.prototype,`lastVibecoin`,void 0),Q([Z()],kp.prototype,`_scrambledTicker`,void 0),Q([Z()],kp.prototype,`_headingIdx`,void 0),Q([Z()],kp.prototype,`_statIdx`,void 0),Q([Z()],kp.prototype,`_genStats`,void 0),Q([Z()],kp.prototype,`settlePending`,void 0),kp=Q([X(`pump-tab`)],kp);var $=class extends Y{constructor(...e){super(...e),this.cycleId=0,this.tokenUri=``,this.uriLoaded=!1,this.userBalance=0n,this.seriesADeposit=0n,this.seriesBDeposit=0n,this.claimAPending=!1,this.claimBPending=!1,this.winner=null,this.prize=0n,this.winnerCode=null,this.observer=null,this._onUpdate=()=>{this.requestUpdate(),this._loadUserData()}}static{this.styles=K`
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

    .vc-ticker {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #707088;
      letter-spacing: 2px;
    }

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

    .stat-full { grid-column: 1 / -1; }
    .stat-full .stat-val { display: inline; }

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
      .stats {
        grid-template-columns: auto;
        
      }
      .stat-key {
        margin-top: 4px;
      }
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`store-updated`,this._onUpdate),this.observer=new IntersectionObserver(e=>{e[0].isIntersecting&&(this._loadTokenUri(),this._loadUserData(),this.observer?.disconnect())},{threshold:.1}),this.observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`store-updated`,this._onUpdate),this.observer?.disconnect()}async _loadTokenUri(){if(!this.uriLoaded)try{this.tokenUri=await z(I).readContract({address:this.vibecoin.address,abi:U,functionName:`tokenURI`}),this.uriLoaded=!0}catch{this.uriLoaded=!0}}async _loadUserData(){let e=R;if(e)try{let t=z(I),n=L[I],r=`0x0000000000000000000000000000000000000000`,i=BigInt(this.cycleId),[a,o,s,c,l]=await Promise.all([t.readContract({address:this.vibecoin.address,abi:U,functionName:`balanceOf`,args:[e.address]}),t.readContract({address:n.game,abi:H,functionName:`seriesADeposits`,args:[i,e.address]}),t.readContract({address:n.game,abi:H,functionName:`seriesBDeposits`,args:[i,e.address]}),t.readContract({address:n.game,abi:H,functionName:`winnerByCycle`,args:[i]}),t.readContract({address:n.game,abi:H,functionName:`prizeByCycle`,args:[i]})]);this.userBalance=a,this.seriesADeposit=o,this.seriesBDeposit=s,this.winner=c===r?null:c,this.prize=l,c&&c!==r&&(this.winnerCode=Md(await t.readContract({address:n.game,abi:H,functionName:`referralCodeOf`,args:[c]})))}catch{}}_getSvgFromUri(){if(!this.tokenUri)return``;if(this.tokenUri.startsWith(`data:application/json`))try{let e=atob(this.tokenUri.split(`,`)[1]);return JSON.parse(e).image??``}catch{return``}return``}async _claimA(){let e=V();if(!(!e||!R)){this.claimAPending=!0;try{let t=L[I];hp(await e.writeContract({address:t.game,abi:H,functionName:`claimSeriesATokens`,args:[BigInt(this.cycleId)],account:R.address,chain:e.chain}),`Claimed Insider Vibecoins`),await this._loadUserData()}catch(e){gp(e)}finally{this.claimAPending=!1}}}async _claimB(){let e=V();if(!(!e||!R)){this.claimBPending=!0;try{let t=L[I];hp(await e.writeContract({address:t.game,abi:H,functionName:`claimSeriesBTokens`,args:[BigInt(this.cycleId)],account:R.address,chain:e.chain}),`Claimed "Insider" Vibecoins`),await this._loadUserData()}catch(e){gp(e)}finally{this.claimBPending=!1}}}render(){let e=this.vibecoin,t=this._getSvgFromUri(),n=e.palette[0],r=e.palette[1],i=n+`14`,a=n+`2e`,o=n+`40`,s=n+`4d`,c=n+`66`,l=n+`99`,u=n+`2a`,d=e.P0+e.K*e.totalSupply/10n**18n,f=d*e.totalSupply/10n**18n,p=L[I].explorer;return q`
      <div class="card" style="
        --vc-col1:${n};
        --vc-col2:${r};
        --vc-col1-08:${i};
        --vc-col1-18:${a};
        --vc-col1-25:${o};
        --vc-col1-30:${s};
        --vc-col1-40:${c};
        --vc-col1-60:${l};
        --vc-border:${u};
        border-color:${u};
        box-shadow: 0 0 18px ${a};
      ">
        <div class="icon">
          ${t?q`<img src=${t} alt="" />`:``}
        </div>

        <div class="info">
          <div class="name-row">
            ${p?q`
              <a class="vc-name" href="${p}/address/${e.address}" target="_blank">${e.name}</a>
            `:q`
              <span class="vc-name">${e.name}</span>
            `}
            <span class="cycle-badge">Round ${e.cycle}</span>
          </div>

          <div class="stats">
            <span class="stat-key">PRICE</span>
            <span class="stat-val">${Cd(d,e.symbol)}</span>
            <span class="stat-key">SUPPLY</span>
            <span class="stat-val">${wd(e.totalSupply,e.symbol)}</span>
            <span class="stat-key">MCAP</span>
            <span class="stat-val">${W(f)}</span>
            <span class="stat-key">TVL</span>
            <span class="stat-val">${W(e.poolBalance)}</span>
            <span class="stat-key">VOL 24H</span>
            <span class="stat-val">${W(e.volume24h)}</span>
            <span class="stat-key">VOL ALL</span>
            <span class="stat-val">${W(e.totalVolume)}</span>
            ${e.athPrice>0n?q`
              <span class="stat-key">${e.athPostRug?`ATH`:`RUG`} PRICE</span>
              <span class="stat-val">${Cd(e.athPrice,e.symbol)}</span>
            `:``}

            ${R&&(this.userBalance>0n||this.winner)?q`
              <hr class="stat-divider" />
            `:``}

            ${R&&this.userBalance>0n?q`
              <span class="stat-key">YOUR BAL</span>
              <span class="stat-val own">${wd(this.userBalance,e.symbol)}</span>
            `:``}
            ${this.winner?q`
              <span class="stat-key">RUGGED</span>
              <span class="stat-val">
                ${W(this.prize)} to
                ${this.winnerCode?q`<span style="color:#ffe600">${this.winnerCode}</span>`:``}
                ${p?q`
                  <a style="color:#ff2d6b;text-decoration:none" href="${p}/address/${this.winner}" target="_blank">${Ed(this.winner)}</a>
                `:q`<span style="color:#ff2d6b">${Ed(this.winner)}</span>`}
              </span>
            `:``}
          </div>
        </div>

        <div class="btn-row">
          <button class="btn buy" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:e.unlocked?`vibecoin`:`publicBuy`,vibecoinAddress:e.address}}))}}>BUY</button>

          ${e.unlocked&&this.userBalance>0n?q`
            <button class="btn sell" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:`vibecoinSell`,vibecoinAddress:e.address,tokenBalance:this.userBalance}}))}}>SELL</button>
          `:``}

          ${this.seriesADeposit>0n?q`
            <button class="btn claim" @click=${this._claimA} ?disabled=${this.claimAPending}>
              ${this.claimAPending?`…`:`CLAIM INSIDER CUT`}
            </button>
          `:``}

          ${this.seriesBDeposit>0n?q`
            <button class="btn claim" @click=${this._claimB} ?disabled=${this.claimBPending}>
              ${this.claimBPending?`…`:`CLAIM "INSIDER" CUT`}
            </button>
          `:``}
        </div>
      </div>
    `}};Q([fp({attribute:!1})],$.prototype,`vibecoin`,void 0),Q([fp({type:Number})],$.prototype,`cycleId`,void 0),Q([Z()],$.prototype,`tokenUri`,void 0),Q([Z()],$.prototype,`uriLoaded`,void 0),Q([Z()],$.prototype,`userBalance`,void 0),Q([Z()],$.prototype,`seriesADeposit`,void 0),Q([Z()],$.prototype,`seriesBDeposit`,void 0),Q([Z()],$.prototype,`claimAPending`,void 0),Q([Z()],$.prototype,`claimBPending`,void 0),Q([Z()],$.prototype,`winner`,void 0),Q([Z()],$.prototype,`prize`,void 0),Q([Z()],$.prototype,`winnerCode`,void 0),$=Q([X(`vibecoin-card`)],$);var Ap=20,jp=class extends Y{constructor(...e){super(...e),this.search=``,this.visibleCount=Ap,this.observer=null,this.sentinelEl=null,this._onUpdate=()=>this.requestUpdate(),this._onHashChange=()=>this._applyHash()}static{this.styles=K`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`store-updated`,this._onUpdate),window.addEventListener(`hashchange`,this._onHashChange),this._applyHash()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`store-updated`,this._onUpdate),window.removeEventListener(`hashchange`,this._onHashChange),this.observer?.disconnect()}_applyHash(){let e=window.location.hash.split(`?`)[0].match(/^#vibecoins\/(0x[0-9a-fA-F]{40})$/);e&&(this.search=e[1],this.visibleCount=Ap)}updated(){let e=this.renderRoot?.querySelector(`.sentinel`);e&&e!==this.sentinelEl&&(this.observer?.disconnect(),this.sentinelEl=e,this.observer=new IntersectionObserver(e=>{e[0].isIntersecting&&(this.visibleCount+=Ap)},{rootMargin:`200px`}),this.observer.observe(e))}_filtered(){let e=this.search.toLowerCase().trim();return e?G.vibecoins.filter(t=>t.name.toLowerCase().includes(e)||t.symbol.toLowerCase().includes(e)||t.address.toLowerCase().includes(e)):G.vibecoins}render(){let e=this._filtered(),t=e.slice(0,this.visibleCount),n=G.gameState===null;return q`
      <div class="container">
        <div class="search-bar">
          <input
            class="search-input"
            type="text"
            placeholder="SEARCH BY NAME, TICKER, OR ADDRESS..."
            .value=${this.search}
            @input=${e=>{this.search=e.target.value,this.visibleCount=Ap}}
          />
        </div>

        ${n&&G.vibecoins.length===0?q`
          <div class="loading">
            <span class="spinner"></span>
            INDEXING EVENTS...
          </div>
        `:e.length===0?q`
          <div class="empty">
            ${this.search?`NO MATCHES FOUND`:`NO VIBECOINS YET`}
          </div>
        `:q`
          <div class="list">
            ${t.map(e=>q`
              <vibecoin-card
                .vibecoin=${e}
                .cycleId=${e.cycle}
              ></vibecoin-card>
            `)}
            ${t.length<e.length?q`<div class="sentinel"></div>`:``}
          </div>
        `}
        <div class="loading">
          // FUTURE RUGGED VIBECOINS GO HERE
        </div>
      </div>
    `}};Q([Z()],jp.prototype,`search`,void 0),Q([Z()],jp.prototype,`visibleCount`,void 0),jp=Q([X(`vibecoins-tab`)],jp);function Mp(e){if(e<0n)throw Error(`sqrt of negative`);if(e===0n)return 0n;let t=e,n=(t+1n)/2n;for(;n<t;)t=n,n=(t+e/t)/2n;return t}function Np(e,t,n,r){let i=10n**18n,a=n*t/i+r*t*t/(2n*i*i)+e,o=Mp(n*n+2n*r*a);if(r===0n)return 0n;let s=(o-n)*i/r;return s>t?s-t:0n}var Pp=class extends Y{constructor(...e){super(...e),this.visible=!1,this.target=`publicBuy`,this.amountStr=``,this.useShMon=!1,this.pending=!1,this.approvePending=!1,this.approved=!1,this.error=``,this._sellShMonPreview=0n,this._tokenBalance=0n,this._vcSymbol=`token`,this._vcName=`BUY`,this._refCode=null,this._gameConstants=G.gameConstants}static{this.styles=K`
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
  `}open(e){this.target=e.target,this.vibecoinAddress=e.vibecoinAddress,this._tokenBalance=e.tokenBalance??0n;let t=e.vibecoinAddress??G.gameState?.vibecoin,n=G.vibecoins.find(e=>e.address.toLowerCase()===t?.toLowerCase());this._vcSymbol=n?.symbol??`token`,this._vcName=n?.name??``,this._refCode=Fd(),this._gameConstants=G.gameConstants,this.amountStr=``,this.useShMon=!1,this.pending=!1,this.approvePending=!1,this.approved=!1,this.error=``,this._sellShMonPreview=0n,this.visible=!0}async _updateSellPreview(){let e=this._amountWei;if(e===0n||!this.vibecoinAddress){this._sellShMonPreview=0n;return}try{this._sellShMonPreview=await z(I).readContract({address:this.vibecoinAddress,abi:U,functionName:`shMonForTokens`,args:[e]})}catch{this._sellShMonPreview=0n}}_close(){this.visible=!1}get _amountWei(){try{let e=parseFloat(this.amountStr);return isNaN(e)||e<=0?0n:BigInt(Math.floor(e*0xde0b6b3a7640000))}catch{return 0n}}_getTitle(){switch(this.target){case`seriesA`:return`INSIDER ROUND`;case`seriesB`:return`"INSIDER" ROUND`;case`publicBuy`:return`BUY`;case`vibecoin`:return this._vcName?this._vcName.toUpperCase():`BUY`;case`vibecoinSell`:return this._vcSymbol?`SELL ${this._vcSymbol}`:`SELL`}}_vcBps(e,t){switch(t){case`seriesA`:return 10000n-e.SERIES_A_PROTOCOL-e.SERIES_A_REFERRAL-e.SERIES_A_PRIZE;case`seriesB`:return 10000n-e.SERIES_B_PROTOCOL-e.SERIES_B_REFERRAL-e.SERIES_B_PRIZE;default:return 10000n-e.PUMP_PROTOCOL-e.PUMP_REFERRAL-e.PUMP_PRIZE}}_getFeeBreakdown(){if(this.target===`vibecoin`)return[[`Dividend pool`,1000n],[`To buyer`,9000n]];let e=this._gameConstants;if(!e)switch(this.target){case`seriesA`:return[[`Protocol`,400n],[`Referral`,600n],[`Rugpull Fund`,2000n],[`Vibecoins minted`,7000n]];case`seriesB`:return[[`Protocol`,400n],[`Referral`,600n],[`Rugpull Fund`,1000n],[`Vibecoins minted`,8000n]];default:return[[`Protocol`,400n],[`Referral`,600n],[`Rugpull Fund`,2400n],[`Vibecoin mint`,6600n]]}switch(this.target){case`seriesA`:return[[`Protocol`,e.SERIES_A_PROTOCOL],[`Referral`,e.SERIES_A_REFERRAL],[`Rugpull Fund`,e.SERIES_A_PRIZE],[`Vibecoins minted`,this._vcBps(e,`seriesA`)]];case`seriesB`:return[[`Protocol`,e.SERIES_B_PROTOCOL],[`Referral`,e.SERIES_B_REFERRAL],[`Rugpull Fund`,e.SERIES_B_PRIZE],[`Vibecoins minted`,this._vcBps(e,`seriesB`)]];default:return[[`Protocol`,e.PUMP_PROTOCOL],[`Referral`,e.PUMP_REFERRAL],[`Rugpull Fund`,e.PUMP_PRIZE],[`Vibecoin mint`,this._vcBps(e,`publicBuy`)]]}}get _isClosed(){return this.target===`vibecoin`?G.vibecoins.find(e=>e.address.toLowerCase()===this.vibecoinAddress?.toLowerCase())?.unlocked??!1:!1}_computeTokenPreview(){let e=this._amountWei;if(e===0n)return 0n;let t=G.gameConstants;if(this.target===`publicBuy`){let n=G.gameState;if(!n)return 0n;let r=G.vibecoins.find(e=>e.address.toLowerCase()===n.vibecoin.toLowerCase());return r?Np(e*(t?this._vcBps(t,`publicBuy`):6600n)/10000n,r.totalSupply,r.P0,r.K):0n}if(this.target===`vibecoin`){let t=G.vibecoins.find(e=>e.address.toLowerCase()===this.vibecoinAddress?.toLowerCase());return t?Np(e,t.totalSupply,t.P0,t.K):0n}return 0n}_computeTimerExtension(){let e=G.gameState;if(!e||e.settlementTimestamp===0n)return`--`;let t=this._amountWei;if(t===0n)return`--`;let n=Number(e.totalSeriesA+e.totalSeriesB)/0xde0b6b3a7640000;if(n===0)return`--`;let r=Number(e.totalPublicCurveDeposited+t)/0xde0b6b3a7640000+1e4,i=n*2419200/(n+2e6)*r*r*1e3/(r*r+40*n*n),a=Number(e.settlementTimestamp)*1e3+36e5+i,o=Math.max(0,a-Number(e.phaseEndTime)*1e3);if(o===0)return`at max`;let s=Math.floor(o/1e3),c=Math.floor(s/3600),l=Math.floor(s%3600/60);return c>0?`+${c}h ${l}m`:l>0?`+${l}m ${s}s`:`+${s}.${Math.floor(o)%1e3}s`}async _approve(){let e=L[I],t=V();if(!t||!R)return;let n=this._amountWei;if(n!==0n){this.approvePending=!0,this.error=``;try{let r=this.target===`vibecoin`?this.vibecoinAddress:e.game;await t.writeContract({address:e.shmon,abi:td,functionName:`approve`,args:[r,n],account:R.address,chain:t.chain}),this.approved=!0}catch(e){gp(e)}finally{this.approvePending=!1}}}async _buy(){let e=L[I],t=V();if(!t||!R)return;let n=this._amountWei;if(n!==0n){if(this.target===`seriesA`||this.target===`seriesB`){let e=G.gameState,t=this.target===`seriesA`?0:1;if(!e||Wd(e)!==t){this.error=`${this.target===`seriesA`?`Insider`:`"Insider"`} round has already ended.`;return}let n=Gd(e,t);if(n>0n&&Hd()>=Number(n)){this.error=`${this.target===`seriesA`?`Insider`:`"Insider"`} round has already ended.`;return}}this.pending=!0,this.error=``;try{let r=zd(Fd()??``),i;i=this.target===`vibecoinSell`?await t.writeContract({address:this.vibecoinAddress,abi:U,functionName:`sell`,args:[n,R.address],account:R.address,chain:t.chain}):this.useShMon?this.target===`seriesA`?await t.writeContract({address:e.game,abi:H,functionName:`depositSeriesAWithShMon`,args:[r,n],account:R.address,chain:t.chain}):this.target===`seriesB`?await t.writeContract({address:e.game,abi:H,functionName:`depositSeriesBWithShMon`,args:[r,n],account:R.address,chain:t.chain}):this.target===`publicBuy`?await t.writeContract({address:e.game,abi:H,functionName:`buyWithShMon`,args:[r,n],account:R.address,chain:t.chain}):await t.writeContract({address:this.vibecoinAddress,abi:U,functionName:`buyWithShMon`,args:[R.address,n,!0],account:R.address,chain:t.chain}):this.target===`seriesA`?await t.writeContract({address:e.game,abi:H,functionName:`depositSeriesA`,args:[r],value:n,account:R.address,chain:t.chain}):this.target===`seriesB`?await t.writeContract({address:e.game,abi:H,functionName:`depositSeriesB`,args:[r],value:n,account:R.address,chain:t.chain}):this.target===`publicBuy`?await t.writeContract({address:e.game,abi:H,functionName:`buy`,args:[r],value:n,account:R.address,chain:t.chain}):await t.writeContract({address:this.vibecoinAddress,abi:U,functionName:`buy`,args:[R.address,!0],value:n,account:R.address,chain:t.chain}),await Promise.all([G.refresh(),G.refreshUser()]),this._close(),hp(i,this._actionLabel())}catch(e){gp(e)}finally{this.pending=!1}}}_actionLabel(){let e=W(this._amountWei);switch(this.target){case`seriesA`:return`Insider deposit — ${e}`;case`seriesB`:return`"Insider" deposit — ${e}`;case`publicBuy`:return`Pump — ${e}`;case`vibecoin`:return`Bought ${G.vibecoins.find(e=>e.address.toLowerCase()===this.vibecoinAddress?.toLowerCase())?.symbol??`Vibecoin`} — ${e}`;case`vibecoinSell`:{let e=G.vibecoins.find(e=>e.address.toLowerCase()===this.vibecoinAddress?.toLowerCase());return`Sold ${e?.symbol??`Vibecoin`} — ${wd(this._amountWei,e?.symbol??`vibecoins`)}`}}}_renderPreview(){let e=this._amountWei;if(this.target===`vibecoinSell`)return q`
        <div class="preview">
          <div class="preview-row">
            <span class="key">SHMON RECEIVED (EST)</span>
            <span class="val accent">${e>0n?W(this._sellShMonPreview):`—`}</span>
          </div>
          <div class="fee-section">
            <div class="preview-row">
              <span class="key">DIVIDEND CUT</span>
              <span class="val">${e>0n&&this._sellShMonPreview>0n?`10% · ${W(this._sellShMonPreview/9n)}`:`10%`}</span>
            </div>
          </div>
        </div>
      `;let t=this._getFeeBreakdown(),n=this._computeTokenPreview(),r=this.target===`vibecoin`?10000n:t.find(([e])=>e===`Vibecoin`)?.[1]??6600n,i=this.target===`vibecoin`?e:e*r/10000n,a=n>0n?i*10n**18n/n:0n,o=this.target===`seriesA`||this.target===`seriesB`,s=this._refCode,c=n*(this.target===`vibecoin`?t.find(([e])=>e===`To buyer`)?.[1]??9000n:10000n)/10000n,l=G.gameState,u=G.gameConstants,d=e*(u?this._vcBps(u,this.target):this.target===`seriesA`?7000n:this.target===`seriesB`?8000n:6600n)/10000n,f=(this.target===`seriesA`?l?.totalSeriesA??0n:l?.totalSeriesB??0n)+d,p=d>0n&&f>0n?(Number(d*10000n/f)/100).toFixed(2):null,m=this.target===`seriesA`?`insider buy-in`:`"insider" buy-in`;return q`
      <div class="preview">
        ${o?q`
          <div class="preview-row">
            <span class="key">TOKENS</span>
            <span class="val">Allocated on Vibecoin generation</span>
          </div>
          <div class="preview-row">
            <span class="key">YOUR POOL SHARE</span>
            <span class="val accent">${p===null?`—`:`${p}% of ${m}`}</span>
          </div>
        `:q`
          <div class="preview-row">
            <span class="key">YOU RECEIVE (EST)</span>
            <span class="val accent">${c>0n?wd(c,this._vcSymbol):`—`}</span>
          </div>
          <div class="preview-row">
            <span class="key">EFFECTIVE PRICE</span>
            <span class="val">${a>0n?`${W(a,6)} / \$${this._vcSymbol}`:`—`}</span>
          </div>
        `}

        ${this.target===`publicBuy`?q`
          <div class="preview-row">
            <span class="key">TIMER EXTENSION</span>
            <span class="val">${this._computeTimerExtension()}</span>
          </div>
        `:``}

        <div class="fee-section">
          ${t.map(([t,r])=>{let i=this.target===`vibecoin`&&n>0n?` · ${wd(n*r/10000n,this._vcSymbol)}`:this.target!==`vibecoin`&&e>0n?` · ${this.useShMon?W(e*r/10000n):Sd(e*r/10000n)}`:``;return q`
              <div class="preview-row">
                <span class="key">${t.toUpperCase()}</span>
                <span class="val">${Number(r)/100}%${i}</span>
              </div>
            `})}
        </div>
      </div>

      ${s?q`
        <div class="referral-note">
          REFERRAL: <span>${s}</span>
        </div>
      `:``}
    `}render(){if(!this.visible)return q``;let e=this.target===`vibecoinSell`,t=!e&&this.useShMon,n=!!R,r=this.target===`seriesA`||this.target===`seriesB`,i=e?this._tokenBalance:0n;return q`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="modal">
          <button class="close-btn" @click=${this._close}>✕</button>
          <div class="title">${this._getTitle()}</div>

          <div class="field">
            <label style="display:flex;justify-content:space-between">
              <span>${e?`TOKENS TO SELL`:`AMOUNT`}</span>
              ${e&&i>0n?q`<span style="color:#d8d8e8">BAL: ${wd(i,this._vcSymbol)}</span>`:``}
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
              ${e?q`
                <button
                  style="
                    font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:1px;
                    padding:10px 10px;border:1px solid #1a1a30;background:#060608;
                    color:#ff2d6b;cursor:pointer;white-space:nowrap;
                  "
                  @click=${()=>{this.amountStr=(Number(i)/0xde0b6b3a7640000).toString(),this._updateSellPreview()}}
                >MAX</button>
              `:q`
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

          ${t&&!this.approved?q`
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

          ${this.error?q`<div class="error">${this.error}</div>`:``}
        </div>
      </div>
    `}};Q([Z()],Pp.prototype,`visible`,void 0),Q([Z()],Pp.prototype,`target`,void 0),Q([Z()],Pp.prototype,`vibecoinAddress`,void 0),Q([Z()],Pp.prototype,`amountStr`,void 0),Q([Z()],Pp.prototype,`useShMon`,void 0),Q([Z()],Pp.prototype,`pending`,void 0),Q([Z()],Pp.prototype,`approvePending`,void 0),Q([Z()],Pp.prototype,`approved`,void 0),Q([Z()],Pp.prototype,`error`,void 0),Q([Z()],Pp.prototype,`_sellShMonPreview`,void 0),Q([Z()],Pp.prototype,`_tokenBalance`,void 0),Pp=Q([X(`buy-dialog`)],Pp);var Fp=`disclaimer-accepted-v1`,Ip=class extends Y{constructor(...e){super(...e),this.open=!localStorage.getItem(Fp)}_accept(){localStorage.setItem(Fp,`1`),this.open=!1}static{this.styles=K`
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
  `}_renderContent(){return q`
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
      `}render(){if(!this.open)return q``;let e={10143:`TESTNET — HEADS UP`,143:`DISCLAIMER`}[10143]??`YOU FOUND THE DEV BUILD`,t={10143:`GOT IT — LET ME PLAY`,143:`I ACCEPT — LET ME PLAY`}[10143]??`LETS GO`;return q`
      <div class="overlay">
        <div class="dialog">
          <div class="title">${e}</div>
          ${this._renderContent()}
          <hr class="divider"/>
          <button class="accept-btn" @click=${this._accept}>${t}</button>
        </div>
      </div>
    `}};Q([Z()],Ip.prototype,`open`,void 0),Ip=Q([X(`disclaimer-modal`)],Ip);var Lp=class extends Y{constructor(...e){super(...e),this.tab=`pump`,this._handleHash=()=>{Rd();let e=window.location.hash.split(`?`)[0];e===`#vibecoins`||e.startsWith(`#vibecoins/`)?this.tab=`vibecoins`:this.tab=`pump`},this._onStoreUpdated=()=>{this.requestUpdate()},this._onWalletChanged=()=>{G.refreshUser(),this.requestUpdate()},this._onOpenBuyDialog=e=>{let t=this.renderRoot?.querySelector(`buy-dialog`);t&&typeof t.open==`function`&&t.open(e.detail)}}static{this.styles=K`
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
  `}connectedCallback(){super.connectedCallback(),this._handleHash(),window.addEventListener(`hashchange`,this._handleHash),window.addEventListener(`store-updated`,this._onStoreUpdated),zu.addEventListener(`wallet-changed`,this._onWalletChanged),window.addEventListener(`open-buy-dialog`,this._onOpenBuyDialog),G.start(),G.refreshUser()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,this._handleHash),window.removeEventListener(`store-updated`,this._onStoreUpdated),zu.removeEventListener(`wallet-changed`,this._onWalletChanged),window.removeEventListener(`open-buy-dialog`,this._onOpenBuyDialog)}render(){return q`
      <header-bar></header-bar>
      <main>
        ${this.tab===`pump`?q`<pump-tab></pump-tab>`:``}
        ${this.tab===`vibecoins`?q`<vibecoins-tab></vibecoins-tab>`:``}
      </main>
      <buy-dialog></buy-dialog>
      <tx-confirm-dialog></tx-confirm-dialog>
      <disclaimer-modal></disclaimer-modal>
    `}};Q([Z()],Lp.prototype,`tab`,void 0),Lp=Q([X(`app-root`)],Lp);var Rp=class extends Y{constructor(...e){super(...e),this.airdropReserve=0n,this.totalAirdropMinted=0n,this.optPending=!1,this.claimPending=!1,this._onUpdate=()=>{this.requestUpdate(),this._loadAirdropData()}}static{this.styles=K`
    :host { display: block; }

    .panel { padding: 12px; }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      padding: 5px 0;
    }
    .key { color: #606070; }
    .val { color: #c8c8d8; }

    .status { font-family: 'JetBrains Mono', monospace; font-size: 11px; }
    .status.in { color: #00ff9d; }
    .status.out { color: #606070; }

    .btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 1px;
      padding: 4px 10px;
      background: none;
      cursor: pointer;
      border: 1px solid;
      transition: background 0.15s;
    }
    .btn.cyan { color: #00e5ff; border-color: #00e5ff44; }
    .btn.cyan:hover { background: rgba(0,229,255,0.1); }
    .btn.yellow { color: #ffe600; border-color: #ffe60044; }
    .btn.yellow:hover { background: rgba(255,230,0,0.1); }
    .btn:disabled { opacity: 0.3; cursor: not-allowed; }

    .divider { border: none; border-top: 1px solid #1a1a30; margin: 8px 0; }

    .progress-bar {
      width: 100%;
      height: 4px;
      background: #1a1a30;
      border-radius: 2px;
      margin: 6px 0;
    }
    .progress-fill {
      height: 100%;
      border-radius: 2px;
      background: linear-gradient(90deg, #ff2d6b, #ff8c00);
      transition: width 0.3s;
    }

    .blurb {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #3a3a4a;
      line-height: 1.5;
      margin-top: 8px;
    }
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`store-updated`,this._onUpdate),this._loadAirdropData()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`store-updated`,this._onUpdate)}async _loadAirdropData(){try{let e=L[I],t=z(I),[n,r]=await Promise.all([t.readContract({address:e.fomon,abi:ed,functionName:`AIRDROP_RESERVE`}),t.readContract({address:e.fomon,abi:ed,functionName:`totalAirdropMinted`})]);this.airdropReserve=n,this.totalAirdropMinted=r}catch{}}async _optIn(){let e=L[I],t=V();if(!(!t||!R)){this.optPending=!0;try{await t.writeContract({address:e.fomon,abi:ed,functionName:`optIn`,account:R.address,chain:t.chain}),await G.refreshUser()}catch(e){console.error(`OptIn error:`,e)}finally{this.optPending=!1}}}async _claim(){let e=L[I],t=V();if(!(!t||!R)){this.claimPending=!0;try{await t.writeContract({address:e.fomon,abi:ed,functionName:`claim`,account:R.address,chain:t.chain}),await G.refreshUser()}catch(e){console.error(`Claim error:`,e)}finally{this.claimPending=!1}}}render(){let e=G.userState;if(!e)return q`<div class="blurb">Connect wallet to view foMON details</div>`;let t=this.airdropReserve>0n?Number(this.totalAirdropMinted*100n/this.airdropReserve):0;return q`
      <div class="panel">
        <div class="row">
          <span class="key">BALANCE</span>
          <span class="val">${(Number(e.fomonBalance)/0xde0b6b3a7640000).toFixed(4)} foMON</span>
        </div>

        <div class="row">
          <span class="key">STATUS</span>
          <span class="status ${e.fomonOptedIn?`in`:`out`}">
            ${e.fomonOptedIn?`OPTED IN`:`OPTED OUT`}
          </span>
          ${e.fomonOptedIn?q`<span class="blurb">Earning shMON dividends</span>`:q`
            <button class="btn cyan" @click=${this._optIn} ?disabled=${this.optPending}>
              ${this.optPending?`...`:`OPT IN`}
            </button>
          `}
        </div>

        ${e.fomonClaimable>0n?q`
          <hr class="divider" />
          <div class="row">
            <span class="key">PENDING shMON</span>
            <span class="val" style="color:#00e5ff">${xd(e.fomonClaimable)}</span>
            <button class="btn yellow" @click=${this._claim} ?disabled=${this.claimPending}>
              ${this.claimPending?`...`:`CLAIM`}
            </button>
          </div>
        `:``}

        ${e.referralEarned>0n?q`
          <hr class="divider" />
          <div class="row">
            <span class="key">REFERRAL EARNED</span>
            <span class="val" style="color:#ffe600">${xd(e.referralEarned)}</span>
          </div>
        `:``}

        <hr class="divider" />

        <div class="blurb">
          foMON is airdropped to EOAs during the public phase. Each buy interaction may mint foMON to your wallet.
        </div>

        <div class="row" style="margin-top:8px">
          <span class="key">AIRDROP PROGRESS</span>
          <span class="val">${t.toFixed(1)}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${Math.min(t,100)}%"></div>
        </div>
      </div>
    `}};Q([Z()],Rp.prototype,`airdropReserve`,void 0),Q([Z()],Rp.prototype,`totalAirdropMinted`,void 0),Q([Z()],Rp.prototype,`optPending`,void 0),Q([Z()],Rp.prototype,`claimPending`,void 0),Rp=Q([X(`fomon-panel`)],Rp);