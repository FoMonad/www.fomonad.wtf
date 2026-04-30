import{$ as e,$t as t,A as n,An as r,At as i,B as a,Bn as o,Bt as s,C as c,Cn as l,Ct as u,D as d,Dn as f,Dt as p,E as m,En as h,Et as g,F as _,Fn as v,Ft as y,G as b,Gn as x,Gt as S,H as C,Hn as w,Ht as ee,I as T,In as E,It as te,J as ne,Jn as re,Jt as ie,K as D,Kn as ae,Kt as oe,L as se,Ln as ce,M as le,Mn as ue,Mt as de,N as fe,Nn as pe,Nt as me,O as he,On as ge,Ot as _e,P as ve,Pn as ye,Pt as be,Q as xe,Qt as Se,R as Ce,Rn as we,Rt as Te,S as Ee,Sn as De,St as Oe,T as ke,Tn as Ae,Tt as je,U as Me,Un as Ne,Ut as Pe,V as Fe,Vn as Ie,Vt as Le,W as Re,Wn as ze,Wt as Be,X as Ve,Xt as He,Y as Ue,Yt as We,Z as Ge,Zt as Ke,_ as qe,_n as Je,_t as Ye,a as Xe,an as Ze,at as Qe,b as $e,bn as O,bt as et,c as tt,cn as nt,ct as rt,d as it,dn as at,dt as ot,en as st,et as ct,f as lt,fn as ut,ft as dt,g as ft,gn as pt,gt as mt,h as ht,hn as gt,ht as _t,i as vt,in as yt,it as bt,j as xt,jn as St,jt as Ct,k as wt,kn as Tt,kt as Et,l as Dt,ln as Ot,lt as kt,m as At,mn as k,mt as jt,nn as Mt,nt as Nt,o as Pt,on as Ft,ot as It,p as Lt,pn as Rt,pt as zt,q as Bt,qn as Vt,qt as A,r as Ht,rn as Ut,rt as Wt,s as Gt,sn as Kt,st as qt,tn as Jt,tt as Yt,u as Xt,un as Zt,ut as Qt,v as $t,vn as en,vt as tn,w as nn,wn as rn,wt as an,x as on,xn as sn,xt as cn,y as ln,yn as un,yt as dn,z as fn,zn as pn,zt as mn}from"./localBatchGatewayRequest-BDnqlmbC.js";import{A as hn,C as gn,D as _n,E as vn,F as yn,M as bn,N as xn,O as Sn,S as Cn,T as wn,V as Tn,_ as En,a as Dn,b as On,c as kn,d as An,f as jn,g as Mn,h as Nn,i as Pn,k as Fn,l as In,m as Ln,n as Rn,o as zn,p as Bn,r as Vn,s as Hn,t as Un,u as Wn,v as Gn,w as Kn,x as qn,y as Jn}from"./utils-B0Fw2xa_.js";var Yn=Object.defineProperty,Xn=(e,t)=>{let n={};for(var r in e)Yn(n,r,{get:e[r],enumerable:!0});return t||Yn(n,Symbol.toStringTag,{value:`Module`}),n};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Zn=10143,j={1337:{name:`FoMonad Local`,rpcUrl:`http://127.0.0.1:8545`,explorer:`https://monadvision.com`},10143:{name:`Monad Testnet`,rpcUrl:`https://testnet-rpc.monad.xyz`,explorer:`https://testnet.monadexplorer.com`,shmonUrl:`https://www.fomonad.wtf/shmon_testnet/`,vibecoinImpl:`0x33F4DD8153eA42c67Bb4dDEB5D0499ca2e96393D`,fomon:`0x0f3Ed63A647A71bd57657c105A4d171A535E9A68`,game:`0x24654BBcE7984E968a293671A404d79a7aDf2D57`,shmon:`0x282BdDFF5e58793AcAb65438b257Dbd15A8745C9`}}[Zn];function Qn(e){let t=localStorage.getItem(e);if(t!=null){if(t.match(/^[0-9]+n$/))return BigInt(t.substring(0,t.length-1));try{return JSON.parse(t)}catch(t){console.warn(`local storage contained invalid item:`,e,t);return}}}function $n(e,t){switch(typeof t){case`bigint`:localStorage.setItem(e,t+`n`);return;case`undefined`:localStorage.removeItem(e);return;default:localStorage.setItem(e,JSON.stringify(t));return}}function er(e){var t=e.getBoundingClientRect();let n=t.bottom>=0&&t.top<=window.innerHeight,r=t.right>=0&&t.left<=window.innerWidth;return n&&r}function tr(e){for(let t of e)if(er(t))return!0;return!1}function nr(e,t,n=`anon`){return new Promise(r=>{let i={name:n+`:`+Date.now()+Math.random().toString().substring(1),fn:async()=>{r(await(typeof e==`function`?e():e))}};t?ir.prepend(i):ir.upsert(i)})}var rr=new Set,ir=new class{constructor(){this.tasks=[],this.taskRequestedBy=new Map,this.running=!1,this._cancelledTasks=new Set}upsert(e){let t=this.tasks.findIndex(t=>t.name===e.name);t>=0?this.tasks[t]=e:this.tasks.push(e),this.running||this._loop()}prepend(e){let t=this.tasks.findIndex(t=>t.name===e.name);t>=0&&this.tasks.splice(t,1),this.tasks.unshift(e),this._cancelledTasks.delete(e.name),this.running||this._loop()}remove(e){(this.has(e)||e==this.runningTask)&&this._cancelledTasks.add(e),this.taskRequestedBy.delete(e)}getTask(e){let t=this.tasks.findIndex(t=>t.name===e);return t>=0?this.tasks[t]:void 0}elementRequestedTask(e,...t){if(!t[0])return;let n=this.taskRequestedBy.get(e);n??(n=new Set,this.taskRequestedBy.set(e,n));for(let e of t)n.add(e)}has(e){return this.tasks.some(t=>t.name===e)}get size(){return this.tasks.length}async _loop(){this.running=!0;let e=0;for(;;){let t=Date.now(),n=this.tasks.shift();if(n==null)break;let r=!1;if(this._cancelledTasks.has(n.name))this._cancelledTasks.delete(n.name),console.log(`deleted task:`,n.name),r=!0;else{let e=this.taskRequestedBy.get(n.name)||rr;for(let t of e)t.isConnected||e.delete(t);let t=Date.now();(n.nextExecutionTimestamp||0)>t?(this.tasks.push(n),console.log(`skip delayed task:`,n.name),r=!0):n.updatePrecondition&&!n.updatePrecondition()?(this.tasks.push(n),console.log(`skip task with unmet precondition:`,n.name),r=!0):n.repeatMs!=null&&!tr(e)&&(this.tasks.push(n),console.log(`skip`,e.size?`non-visible`:`irrelevant`,`task`,n.name),r=!0)}if(r){e++,e>=this.tasks.length&&(e=0,await new Promise(e=>setTimeout(e,100)));continue}console.log(`execute task:`,n.name),e=0,n.repeatMs!=null&&(n.nextExecutionTimestamp=Date.now()+n.repeatMs);try{this.runningTask=n.name,n.fnVal=await n.fn(n.fnVal)}catch(e){console.error(`[queue:${n.name}]`,e)}this.runningTask=void 0,n.repeatMs!=null&&!this.tasks.some(e=>e.name===n.name)&&!this._cancelledTasks.has(n.name)&&this.tasks.push(n),this._cancelledTasks.delete(n.name);let i=Math.max(0,100-(Date.now()-t));await new Promise(e=>setTimeout(e,i))}this.running=!1}};function ar(e){let t;if(typeof e==`string`)t=Ie(e);else{let n=pn(e),r=e.length;for(let i=0;i<r;i++){let r=e[i];if(!x(r)){t=Ie(r,n);break}}}if(!t)throw new ze({signature:e});return t}function or(e){let t=[];if(typeof e==`string`){let n=w(e),r=n.length;for(let e=0;e<r;e++)t.push(o(n[e],{modifiers:ae}))}else{let n=pn(e),r=e.length;for(let i=0;i<r;i++){let r=e[i];if(x(r))continue;let a=w(r),s=a.length;for(let e=0;e<s;e++)t.push(o(a[e],{modifiers:ae,structs:n}))}}if(t.length===0)throw new Ne({params:e});return t}function M(e,t,n){let r=e[t.name];if(typeof r==`function`)return r;let i=e[n];return typeof i==`function`?i:n=>t(e,n)}var sr=class extends v{constructor(e){super(`Filter type "${e}" is not supported.`,{name:`FilterTypeNotSupportedError`})}},cr=`/docs/contract/encodeEventTopics`;function lr(e){let{abi:t,eventName:n,args:r}=e,i=t[0];if(n){let e=st({abi:t,name:n});if(!e)throw new Tt(n,{docsPath:cr});i=e}if(i.type!==`event`)throw new Tt(void 0,{docsPath:cr});let a=Rt(we(i)),o=[];if(r&&`inputs`in i){let e=i.inputs?.filter(e=>`indexed`in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(o=e?.map((e,n)=>Array.isArray(t[n])?t[n].map((r,i)=>ur({param:e,value:t[n][i]})):t[n]!==void 0&&t[n]!==null?ur({param:e,value:t[n]}):null)??[])}return[a,...o]}function ur({param:e,value:t}){if(e.type===`string`||e.type===`bytes`)return k(en(t));if(e.type===`tuple`||e.type.match(/^(.*)\[(\d+)?\]$/))throw new sr(e.type);return Jt([e],[t])}function dr(e,{method:t}){let n={};return e.transport.type===`fallback`&&e.transport.onResponse?.(({method:e,response:r,status:i,transport:a})=>{i===`success`&&t===e&&(n[r]=a.request)}),(t=>n[t]||e.request)}async function fr(e,t){let{address:n,abi:r,args:i,eventName:a,fromBlock:o,strict:s,toBlock:c}=t,l=dr(e,{method:`eth_newFilter`}),u=a?lr({abi:r,args:i,eventName:a}):void 0,d=await e.request({method:`eth_newFilter`,params:[{address:n,fromBlock:typeof o==`bigint`?O(o):o,toBlock:typeof c==`bigint`?O(c):c,topics:u}]});return{abi:r,args:i,eventName:a,id:d,request:l(d),strict:!!s,type:`event`}}var pr=3;function mr(e,{abi:t,address:n,args:r,docsPath:a,functionName:o,sender:s}){let c=e instanceof te?e:e instanceof v?e.walk(e=>`data`in e)||e.walk():{},{code:l,data:u,details:d,message:f,shortMessage:p}=c;return new me(e instanceof ge?new y({functionName:o}):[pr,qt.code].includes(l)&&(u||d||f||p)||l===rt.code&&d===`execution reverted`&&u?new be({abi:t,data:typeof u==`object`?u.data:u,functionName:o,message:c instanceof i?d:p??f}):e,{abi:t,args:r,contractAddress:n,docsPath:a,functionName:o,sender:s})}function hr(e){return Ot(`0x${k(`0x${e.substring(4)}`).substring(26)}`)}async function gr({hash:e,signature:t}){let n=ce(e)?e:De(e),{secp256k1:r}=await Yt(async()=>{let{secp256k1:e}=await Promise.resolve().then(()=>zc);return{secp256k1:e}},void 0,import.meta.url);return`0x${(()=>{if(typeof t==`object`&&`r`in t&&`s`in t){let{r:e,s:n,v:i,yParity:a}=t,o=_r(Number(a??i));return new r.Signature(l(e),l(n)).addRecoveryBit(o)}let e=ce(t)?t:De(t);if(E(e)!==65)throw Error(`invalid signature length`);let n=_r(Ae(`0x${e.slice(130)}`));return r.Signature.fromCompact(e.substring(2,130)).addRecoveryBit(n)})().recoverPublicKey(n.substring(2)).toHex(!1)}`}function _r(e){if(e===0||e===1)return e;if(e===27)return 0;if(e===28)return 1;throw Error(`Invalid yParityOrV value`)}async function vr({hash:e,signature:t}){return hr(await gr({hash:e,signature:t}))}function yr(e,t=`hex`){let n=br(e),r=He(new Uint8Array(n.length));return n.encode(r),t===`hex`?un(r.bytes):r.bytes}function br(e){return Array.isArray(e)?xr(e.map(e=>br(e))):Sr(e)}function xr(e){let t=e.reduce((e,t)=>e+t.length,0),n=Cr(t);return{length:t<=55?1+t:1+n+t,encode(r){t<=55?r.pushByte(192+t):(r.pushByte(247+n),n===1?r.pushUint8(t):n===2?r.pushUint16(t):n===3?r.pushUint24(t):r.pushUint32(t));for(let{encode:t}of e)t(r)}}}function Sr(e){let t=typeof e==`string`?pt(e):e,n=Cr(t.length);return{length:t.length===1&&t[0]<128?1:t.length<=55?1+t.length:1+n+t.length,encode(e){t.length===1&&t[0]<128?e.pushBytes(t):t.length<=55?(e.pushByte(128+t.length),e.pushBytes(t)):(e.pushByte(183+n),n===1?e.pushUint8(t.length):n===2?e.pushUint16(t.length):n===3?e.pushUint24(t.length):e.pushUint32(t.length),e.pushBytes(t))}}}function Cr(e){if(e<2**8)return 1;if(e<2**16)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new v(`Length is too large.`)}function wr(e){let{chainId:t,nonce:n,to:r}=e,i=e.contractAddress??e.address,a=k(Kt([`0x05`,yr([t?O(t):`0x`,i,n?O(n):`0x`])]));return r===`bytes`?pt(a):a}async function Tr(e){let{authorization:t,signature:n}=e;return vr({hash:wr(t),signature:n??t})}var Er=class extends v{constructor(e,{account:t,docsPath:n,chain:r,data:i,gas:a,gasPrice:o,maxFeePerGas:s,maxPriorityFeePerGas:c,nonce:l,to:u,value:d}){let f=Be({from:t?.address,to:u,value:d!==void 0&&`${oe(d)} ${r?.nativeCurrency?.symbol||`ETH`}`,data:i,gas:a,gasPrice:o!==void 0&&`${S(o)} gwei`,maxFeePerGas:s!==void 0&&`${S(s)} gwei`,maxPriorityFeePerGas:c!==void 0&&`${S(c)} gwei`,nonce:l});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages,` `]:[],`Estimate Gas Arguments:`,f].filter(Boolean),name:`EstimateGasExecutionError`}),Object.defineProperty(this,`cause`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cause=e}};function Dr(t,{docsPath:n,...r}){return new Er((()=>{let n=e(t,r);return n instanceof ct?t:n})(),{docsPath:n,...r})}var Or=class extends v{constructor(){super("`baseFeeMultiplier` must be greater than 1.",{name:`BaseFeeScalarError`})}},kr=class extends v{constructor(){super(`Chain does not support EIP-1559 fees.`,{name:`Eip1559FeesNotSupportedError`})}},Ar=class extends v{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${S(e)} gwei).`,{name:`MaxFeePerGasTooLowError`})}},jr=class extends v{constructor({blockHash:e,blockNumber:t}){let n=`Block`;e&&(n=`Block at hash "${e}"`),t&&(n=`Block at number "${t}"`),super(`${n} could not be found.`,{name:`BlockNotFoundError`})}},Mr={"0x0":`legacy`,"0x1":`eip2930`,"0x2":`eip1559`,"0x3":`eip4844`,"0x4":`eip7702`};function Nr(e,t){let n={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?Ae(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?Ae(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?Mr[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return e.authorizationList&&(n.authorizationList=Pr(e.authorizationList)),n.yParity=(()=>{if(e.yParity)return Number(e.yParity);if(typeof n.v==`bigint`){if(n.v===0n||n.v===27n)return 0;if(n.v===1n||n.v===28n)return 1;if(n.v>=35n)return+(n.v%2n==0n)}})(),n.type===`legacy`&&(delete n.accessList,delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas,delete n.yParity),n.type===`eip2930`&&(delete n.maxFeePerBlobGas,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas),n.type===`eip1559`&&delete n.maxFeePerBlobGas,n}function Pr(e){return e.map(e=>({address:e.address,chainId:Number(e.chainId),nonce:Number(e.nonce),r:e.r,s:e.s,yParity:Number(e.yParity)}))}function Fr(e,t){let n=(e.transactions??[]).map(e=>typeof e==`string`?e:Nr(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:n,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}async function Ir(e,{blockHash:t,blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`,includeTransactions:i}={}){let a=i??!1,o=n===void 0?void 0:O(n),s=null;if(s=t?await e.request({method:`eth_getBlockByHash`,params:[t,a]},{dedupe:!0}):await e.request({method:`eth_getBlockByNumber`,params:[o||r,a]},{dedupe:!!o}),!s)throw new jr({blockHash:t,blockNumber:n});return(e.chain?.formatters?.block?.format||Fr)(s,`getBlock`)}async function Lr(e){let t=await e.request({method:`eth_gasPrice`});return BigInt(t)}async function Rr(e,t){return zr(e,t)}async function zr(e,t){let{block:n,chain:r=e.chain,request:i}=t||{};try{let t=r?.fees?.maxPriorityFeePerGas??r?.fees?.defaultPriorityFee;if(typeof t==`function`){let r=await t({block:n||await M(e,Ir,`getBlock`)({}),client:e,request:i});if(r===null)throw Error();return r}return t===void 0?l(await e.request({method:`eth_maxPriorityFeePerGas`})):t}catch{let[t,r]=await Promise.all([n?Promise.resolve(n):M(e,Ir,`getBlock`)({}),M(e,Lr,`getGasPrice`)({})]);if(typeof t.baseFeePerGas!=`bigint`)throw new kr;let i=r-t.baseFeePerGas;return i<0n?0n:i}}async function Br(e,t){return Vr(e,t)}async function Vr(e,t){let{block:n,chain:r=e.chain,request:i,type:a=`eip1559`}=t||{},o=await(async()=>typeof r?.fees?.baseFeeMultiplier==`function`?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):r?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new Or;let s=10**(o.toString().split(`.`)[1]?.length??0),c=e=>e*BigInt(Math.ceil(o*s))/BigInt(s),l=n||await M(e,Ir,`getBlock`)({});if(typeof r?.fees?.estimateFeesPerGas==`function`){let t=await r.fees.estimateFeesPerGas({block:n,client:e,multiply:c,request:i,type:a});if(t!==null)return t}if(a===`eip1559`){if(typeof l.baseFeePerGas!=`bigint`)throw new kr;let t=typeof i?.maxPriorityFeePerGas==`bigint`?i.maxPriorityFeePerGas:await zr(e,{block:l,chain:r,request:i}),n=c(l.baseFeePerGas);return{maxFeePerGas:i?.maxFeePerGas??n+t,maxPriorityFeePerGas:t}}return{gasPrice:i?.gasPrice??c(await M(e,Lr,`getGasPrice`)({}))}}async function Hr(e,{address:t,blockTag:n=`latest`,blockNumber:r}){return Ae(await e.request({method:`eth_getTransactionCount`,params:[t,typeof r==`bigint`?O(r):n]},{dedupe:!!r}))}function Ur(e){let{kzg:t}=e,n=e.to??(typeof e.blobs[0]==`string`?`hex`:`bytes`),r=typeof e.blobs[0]==`string`?e.blobs.map(e=>pt(e)):e.blobs,i=[];for(let e of r)i.push(Uint8Array.from(t.blobToKzgCommitment(e)));return n===`bytes`?i:i.map(e=>un(e))}function Wr(e){let{kzg:t}=e,n=e.to??(typeof e.blobs[0]==`string`?`hex`:`bytes`),r=typeof e.blobs[0]==`string`?e.blobs.map(e=>pt(e)):e.blobs,i=typeof e.commitments[0]==`string`?e.commitments.map(e=>pt(e)):e.commitments,a=[];for(let e=0;e<r.length;e++){let n=r[e],o=i[e];a.push(Uint8Array.from(t.computeBlobKzgProof(n,o)))}return n===`bytes`?a:a.map(e=>un(e))}function Gr(e,t,n,r){if(typeof e.setBigUint64==`function`)return e.setBigUint64(t,n,r);let i=BigInt(32),a=BigInt(4294967295),o=Number(n>>i&a),s=Number(n&a),c=r?4:0,l=r?0:4;e.setUint32(t+c,o,r),e.setUint32(t+l,s,r)}function Kr(e,t,n){return e&t^~e&n}function qr(e,t,n){return e&t^e&n^t&n}var Jr=class extends qn{constructor(e,t,n,r){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=hn(this.buffer)}update(e){gn(this),e=yn(e),Cn(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length;for(let a=0;a<i;){let o=Math.min(r-this.pos,i-a);if(o===r){let t=hn(e);for(;r<=i-a;a+=r)this.process(t,a);continue}n.set(e.subarray(a,a+o),this.pos),this.pos+=o,a+=o,this.pos===r&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){gn(this),vn(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,_n(this.buffer.subarray(a)),this.padOffset>r-a&&(this.process(n,0),a=0);for(let e=a;e<r;e++)t[e]=0;Gr(n,r-8,BigInt(this.length*8),i),this.process(n,0);let o=hn(e),s=this.outputLen;if(s%4)throw Error(`_sha2: outputLen should be aligned to 32bit`);let c=s/4,l=this.get();if(c>l.length)throw Error(`_sha2: outputLen bigger than state`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneInto(e){e||=new this.constructor,e.set(...this.get());let{blockLen:t,buffer:n,length:r,finished:i,destroyed:a,pos:o}=this;return e.destroyed=a,e.finished=i,e.length=r,e.pos=o,r%t&&e.buffer.set(n),e}clone(){return this._cloneInto()}},Yr=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Xr=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Zr=new Uint32Array(64),Qr=class extends Jr{constructor(e=32){super(64,e,8,!1),this.A=Yr[0]|0,this.B=Yr[1]|0,this.C=Yr[2]|0,this.D=Yr[3]|0,this.E=Yr[4]|0,this.F=Yr[5]|0,this.G=Yr[6]|0,this.H=Yr[7]|0}get(){let{A:e,B:t,C:n,D:r,E:i,F:a,G:o,H:s}=this;return[e,t,n,r,i,a,o,s]}set(e,t,n,r,i,a,o,s){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=s|0}process(e,t){for(let n=0;n<16;n++,t+=4)Zr[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=Zr[e-15],n=Zr[e-2],r=xn(t,7)^xn(t,18)^t>>>3;Zr[e]=(xn(n,17)^xn(n,19)^n>>>10)+Zr[e-7]+r+Zr[e-16]|0}let{A:n,B:r,C:i,D:a,E:o,F:s,G:c,H:l}=this;for(let e=0;e<64;e++){let t=xn(o,6)^xn(o,11)^xn(o,25),u=l+t+Kr(o,s,c)+Xr[e]+Zr[e]|0,d=(xn(n,2)^xn(n,13)^xn(n,22))+qr(n,r,i)|0;l=c,c=s,s=o,o=a+u|0,a=i,i=r,r=n,n=u+d|0}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,s=s+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,a,o,s,c,l)}roundClean(){_n(Zr)}destroy(){this.set(0,0,0,0,0,0,0,0),_n(this.buffer)}},$r=Tn(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e)));$r[0],$r[1];var ei=Fn(()=>new Qr),ti=ei;function ni(e,t){let n=t||`hex`,r=ti(ce(e,{strict:!1})?en(e):e);return n===`bytes`?r:De(r)}function ri(e){let{commitment:t,version:n=1}=e,r=e.to??(typeof t==`string`?`hex`:`bytes`),i=ni(t,`bytes`);return i.set([n],0),r===`bytes`?i:un(i)}function ii(e){let{commitments:t,version:n}=e,r=e.to??(typeof t[0]==`string`?`hex`:`bytes`),i=[];for(let e of t)i.push(ri({commitment:e,to:r,version:n}));return i}var ai=6,oi=4096,si=32*oi,ci=si*ai-1-1*oi*ai,li=class extends v{constructor({maxSize:e,size:t}){super(`Blob size is too large.`,{metaMessages:[`Max: ${e} bytes`,`Given: ${t} bytes`],name:`BlobSizeTooLargeError`})}},ui=class extends v{constructor(){super(`Blob data must not be empty.`,{name:`EmptyBlobError`})}};function di(e){let t=e.to??(typeof e.data==`string`?`hex`:`bytes`),n=typeof e.data==`string`?pt(e.data):e.data,r=E(n);if(!r)throw new ui;if(r>761855)throw new li({maxSize:ci,size:r});let i=[],a=!0,o=0;for(;a;){let e=He(new Uint8Array(si)),t=0;for(;t<oi;){let r=n.slice(o,o+31);if(e.pushByte(0),e.pushBytes(r),r.length<31){e.pushByte(128),a=!1;break}t++,o+=31}i.push(e)}return t===`bytes`?i.map(e=>e.bytes):i.map(e=>un(e.bytes))}function fi(e){let{data:t,kzg:n,to:r}=e,i=e.blobs??di({data:t,to:r}),a=e.commitments??Ur({blobs:i,kzg:n,to:r}),o=e.proofs??Wr({blobs:i,commitments:a,kzg:n,to:r}),s=[];for(let e=0;e<i.length;e++)s.push({blob:i[e],commitment:a[e],proof:o[e]});return s}function pi(e){if(e.type)return e.type;if(e.authorizationList!==void 0)return`eip7702`;if(e.blobs!==void 0||e.blobVersionedHashes!==void 0||e.maxFeePerBlobGas!==void 0||e.sidecars!==void 0)return`eip4844`;if(e.maxFeePerGas!==void 0||e.maxPriorityFeePerGas!==void 0)return`eip1559`;if(e.gasPrice!==void 0)return e.accessList===void 0?`legacy`:`eip2930`;throw new Te({transaction:e})}function mi(t,{docsPath:n,...r}){return new mn((()=>{let n=e(t,r);return n instanceof ct?t:n})(),{docsPath:n,...r})}async function hi(e){return Ae(await e.request({method:`eth_chainId`},{dedupe:!0}))}async function gi(e,n){let{account:r=e.account,accessList:i,authorizationList:a,chain:o=e.chain,blobVersionedHashes:s,blobs:c,data:l,gas:u,gasPrice:d,maxFeePerBlobGas:f,maxFeePerGas:p,maxPriorityFeePerGas:m,nonce:h,nonceManager:g,to:_,type:v,value:y,...b}=n,x=await(async()=>{if(!r||!g||h!==void 0)return h;let n=t(r),i=o?o.id:await M(e,hi,`getChainId`)({});return await g.consume({address:n.address,chainId:i,client:e})})();Ue(n);let S=o?.formatters?.transactionRequest?.format,C=(S||Ge)({...xe(b,{format:S}),account:r?t(r):void 0,accessList:i,authorizationList:a,blobs:c,blobVersionedHashes:s,data:l,gas:u,gasPrice:d,maxFeePerBlobGas:f,maxFeePerGas:p,maxPriorityFeePerGas:m,nonce:x,to:_,type:v,value:y},`fillTransaction`);try{let t=await e.request({method:`eth_fillTransaction`,params:[C]}),r=(o?.formatters?.transaction?.format||Nr)(t.tx);delete r.blockHash,delete r.blockNumber,delete r.r,delete r.s,delete r.transactionIndex,delete r.v,delete r.yParity,r.data=r.input,r.gas&&=n.gas??r.gas,r.gasPrice&&=n.gasPrice??r.gasPrice,r.maxFeePerBlobGas&&=n.maxFeePerBlobGas??r.maxFeePerBlobGas,r.maxFeePerGas&&=n.maxFeePerGas??r.maxFeePerGas,r.maxPriorityFeePerGas&&=n.maxPriorityFeePerGas??r.maxPriorityFeePerGas,r.nonce&&=n.nonce??r.nonce;let i=await(async()=>{if(typeof o?.fees?.baseFeeMultiplier==`function`){let t=await M(e,Ir,`getBlock`)({});return o.fees.baseFeeMultiplier({block:t,client:e,request:n})}return o?.fees?.baseFeeMultiplier??1.2})();if(i<1)throw new Or;let a=10**(i.toString().split(`.`)[1]?.length??0),s=e=>e*BigInt(Math.ceil(i*a))/BigInt(a);return r.maxFeePerGas&&!n.maxFeePerGas&&(r.maxFeePerGas=s(r.maxFeePerGas)),r.gasPrice&&!n.gasPrice&&(r.gasPrice=s(r.gasPrice)),{raw:t.raw,transaction:{from:C.from,...r}}}catch(t){throw mi(t,{...n,chain:e.chain})}}var _i=[`blobVersionedHashes`,`chainId`,`fees`,`gas`,`nonce`,`type`],vi=new Map,yi=new at(128);async function bi(e,n){let r=n;r.account??=e.account,r.parameters??=_i;let{account:i,chain:a=e.chain,nonceManager:o,parameters:s}=r,c=(()=>{if(typeof a?.prepareTransactionRequest==`function`)return{fn:a.prepareTransactionRequest,runAt:[`beforeFillTransaction`]};if(Array.isArray(a?.prepareTransactionRequest))return{fn:a.prepareTransactionRequest[0],runAt:a.prepareTransactionRequest[1].runAt}})(),l;async function u(){return l||(r.chainId===void 0?a?a.id:(l=await M(e,hi,`getChainId`)({}),l):r.chainId)}let d=i&&t(i),f=r.nonce;if(s.includes(`nonce`)&&f===void 0&&d&&o){let t=await u();f=await o.consume({address:d.address,chainId:t,client:e})}c?.fn&&c.runAt?.includes(`beforeFillTransaction`)&&(r=await c.fn({...r,chain:a},{phase:`beforeFillTransaction`}),f??=r.nonce);let p=!((s.includes(`blobVersionedHashes`)||s.includes(`sidecars`))&&r.kzg&&r.blobs||yi.get(e.uid)===!1||![`fees`,`gas`].some(e=>s.includes(e)))&&(s.includes(`chainId`)&&typeof r.chainId!=`number`||s.includes(`nonce`)&&typeof f!=`number`||s.includes(`fees`)&&typeof r.gasPrice!=`bigint`&&(typeof r.maxFeePerGas!=`bigint`||typeof r.maxPriorityFeePerGas!=`bigint`)||s.includes(`gas`)&&typeof r.gas!=`bigint`)?await M(e,gi,`fillTransaction`)({...r,nonce:f}).then(t=>{let{chainId:n,from:i,gas:a,gasPrice:o,nonce:s,maxFeePerBlobGas:c,maxFeePerGas:l,maxPriorityFeePerGas:u,type:d,...f}=t.transaction;return yi.set(e.uid,!0),{...r,...i?{from:i}:{},...d&&!r.type?{type:d}:{},...n===void 0?{}:{chainId:n},...a===void 0?{}:{gas:a},...o===void 0?{}:{gasPrice:o},...s===void 0?{}:{nonce:s},...c!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxFeePerBlobGas:c}:{},...l!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxFeePerGas:l}:{},...u!==void 0&&r.type!==`legacy`&&r.type!==`eip2930`?{maxPriorityFeePerGas:u}:{},...`nonceKey`in f&&f.nonceKey!==void 0?{nonceKey:f.nonceKey}:{}}}).catch(t=>{let n=t;return n.name===`TransactionExecutionError`&&n.walk?.(e=>{let t=e;return t.name===`MethodNotFoundRpcError`||t.name===`MethodNotSupportedRpcError`})&&yi.set(e.uid,!1),r}):r;f??=p.nonce,r={...p,...d?{from:d?.address}:{},...f?{nonce:f}:{}};let{blobs:m,gas:h,kzg:g,type:_}=r;c?.fn&&c.runAt?.includes(`beforeFillParameters`)&&(r=await c.fn({...r,chain:a},{phase:`beforeFillParameters`}));let v;async function y(){return v||(v=await M(e,Ir,`getBlock`)({blockTag:`latest`}),v)}if(s.includes(`nonce`)&&f===void 0&&d&&!o&&(r.nonce=await M(e,Hr,`getTransactionCount`)({address:d.address,blockTag:`pending`})),(s.includes(`blobVersionedHashes`)||s.includes(`sidecars`))&&m&&g){let e=Ur({blobs:m,kzg:g});if(s.includes(`blobVersionedHashes`)){let t=ii({commitments:e,to:`hex`});r.blobVersionedHashes=t}if(s.includes(`sidecars`)){let t=fi({blobs:m,commitments:e,proofs:Wr({blobs:m,commitments:e,kzg:g}),to:`hex`});r.sidecars=t}}if(s.includes(`chainId`)&&(r.chainId=await u()),(s.includes(`fees`)||s.includes(`type`))&&_===void 0)try{r.type=pi(r)}catch{let t=vi.get(e.uid);t===void 0&&(t=typeof(await y())?.baseFeePerGas==`bigint`,vi.set(e.uid,t)),r.type=t?`eip1559`:`legacy`}if(s.includes(`fees`))if(r.type!==`legacy`&&r.type!==`eip2930`){if(r.maxFeePerGas===void 0||r.maxPriorityFeePerGas===void 0){let{maxFeePerGas:t,maxPriorityFeePerGas:n}=await Vr(e,{block:await y(),chain:a,request:r});if(r.maxPriorityFeePerGas===void 0&&r.maxFeePerGas&&r.maxFeePerGas<n)throw new Ar({maxPriorityFeePerGas:n});r.maxPriorityFeePerGas=n,r.maxFeePerGas=t}}else{if(r.maxFeePerGas!==void 0||r.maxPriorityFeePerGas!==void 0)throw new kr;if(r.gasPrice===void 0){let{gasPrice:t}=await Vr(e,{block:await y(),chain:a,request:r,type:`legacy`});r.gasPrice=t}}return s.includes(`gas`)&&h===void 0&&(r.gas=await M(e,xi,`estimateGas`)({...r,account:d,prepare:d?.type===`local`?[]:[`blobVersionedHashes`]})),c?.fn&&c.runAt?.includes(`afterFillParameters`)&&(r=await c.fn({...r,chain:a},{phase:`afterFillParameters`})),Ue(r),delete r.parameters,r}async function xi(e,n){let{account:r=e.account,prepare:i=!0}=n,a=r?t(r):void 0,o=(()=>{if(Array.isArray(i))return i;if(a?.type!==`local`)return[`blobVersionedHashes`]})();try{let t=await(async()=>{if(n.to)return n.to;if(n.authorizationList&&n.authorizationList.length>0)return await Tr({authorization:n.authorizationList[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`")})})(),{accessList:r,authorizationList:s,blobs:c,blobVersionedHashes:l,blockNumber:u,blockTag:d,data:f,gas:p,gasPrice:m,maxFeePerBlobGas:h,maxFeePerGas:g,maxPriorityFeePerGas:_,nonce:y,value:b,stateOverride:x,...S}=i?await bi(e,{...n,parameters:o,to:t}):n;if(p&&n.gas!==p)return p;let C=(typeof u==`bigint`?O(u):void 0)||d,w=Ve(x);Ue(n);let ee=e.chain?.formatters?.transactionRequest?.format,T=(ee||Ge)({...xe(S,{format:ee}),account:a,accessList:r,authorizationList:s,blobs:c,blobVersionedHashes:l,data:f,gasPrice:m,maxFeePerBlobGas:h,maxFeePerGas:g,maxPriorityFeePerGas:_,nonce:y,to:t,value:b},`estimateGas`);return BigInt(await e.request({method:`eth_estimateGas`,params:w?[T,C??e.experimental_blockTag??`latest`,w]:C?[T,C]:[T]}))}catch(t){throw Dr(t,{...n,account:a,chain:e.chain})}}async function Si(e,n){let{abi:r,address:i,args:a,functionName:o,dataSuffix:s=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,...c}=n,l=Se({abi:r,args:a,functionName:o});try{return await M(e,xi,`estimateGas`)({data:`${l}${s?s.replace(`0x`,``):``}`,to:i,...c})}catch(e){throw mr(e,{abi:r,address:i,args:a,docsPath:`/docs/contract/estimateContractGas`,functionName:o,sender:(c.account?t(c.account):void 0)?.address})}}function Ci(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,blockTimestamp:e.blockTimestamp?BigInt(e.blockTimestamp):e.blockTimestamp===null?null:void 0,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}var wi=`/docs/contract/decodeEventLog`;function Ti(e){let{abi:t,data:n,strict:i,topics:a}=e,o=i??!0,[s,...c]=a;if(!s)throw new r({docsPath:wi});let l=t.find(e=>e.type===`event`&&s===Rt(we(e)));if(!(l&&`name`in l)||l.type!==`event`)throw new St(s,{docsPath:wi});let{name:u,inputs:d}=l,p=d?.some(e=>!(`name`in e&&e.name)),m=p?[]:{},h=d.map((e,t)=>[e,t]).filter(([e])=>`indexed`in e&&e.indexed),g=[];for(let e=0;e<h.length;e++){let[t,n]=h[e],r=c[e];if(!r){if(o)throw new ye({abiItem:l,param:t});g.push([t,n]);continue}m[p?n:t.name||n]=Ei({param:t,value:r})}let _=d.filter(e=>!(`indexed`in e&&e.indexed)),v=o?_:[...g.map(([e])=>e),..._];if(v.length>0){if(n&&n!==`0x`)try{let e=We(v,n);if(e){let t=0;if(!o)for(let[n,r]of g)m[p?r:n.name||r]=e[t++];if(p)for(let n=0;n<d.length;n++)m[n]===void 0&&t<e.length&&(m[n]=e[t++]);else for(let n=0;n<_.length;n++)m[_[n].name]=e[t++]}}catch(e){if(o)throw e instanceof f||e instanceof Ke?new pe({abiItem:l,data:n,params:v,size:E(n)}):e}else if(o)throw new pe({abiItem:l,data:`0x`,params:v,size:0})}return{eventName:u,args:Object.values(m).length>0?m:void 0}}function Ei({param:e,value:t}){return e.type===`string`||e.type===`bytes`||e.type===`tuple`||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(We([e],t)||[])[0]}function Di(e){let{abi:t,args:n,logs:r,strict:i=!0}=e,a=(()=>{if(e.eventName)return Array.isArray(e.eventName)?e.eventName:[e.eventName]})(),o=t.filter(e=>e.type===`event`).map(e=>({abi:e,selector:Rt(e)}));return r.map(e=>{let t=typeof e.blockNumber==`string`?Ci(e):e,r=o.filter(e=>t.topics[0]===e.selector);if(r.length===0)return null;let s,c;for(let e of r)try{s=Ti({...t,abi:[e.abi],strict:!0}),c=e;break}catch{}if(!s&&!i){c=r[0];try{s=Ti({data:t.data,topics:t.topics,abi:[c.abi],strict:!1})}catch{let e=c.abi.inputs?.some(e=>!(`name`in e&&e.name));return{...t,args:e?[]:{},eventName:c.abi.name}}}return!s||!c||a&&!a.includes(s.eventName)||!Oi({args:s.args,inputs:c.abi.inputs,matchArgs:n})?null:{...s,...t}}).filter(Boolean)}function Oi(e){let{args:t,inputs:n,matchArgs:r}=e;if(!r)return!0;if(!t)return!1;function i(e,t,n){try{return e.type===`address`?ne(t,n):e.type===`string`||e.type===`bytes`?k(en(t))===n:t===n}catch{return!1}}return Array.isArray(t)&&Array.isArray(r)?r.every((e,r)=>{if(e==null)return!0;let a=n[r];return a?(Array.isArray(e)?e:[e]).some(e=>i(a,e,t[r])):!1}):typeof t==`object`&&!Array.isArray(t)&&typeof r==`object`&&!Array.isArray(r)?Object.entries(r).every(([e,r])=>{if(r==null)return!0;let a=n.find(t=>t.name===e);return a?(Array.isArray(r)?r:[r]).some(n=>i(a,n,t[e])):!1}):!1}async function ki(e,{address:t,blockHash:n,fromBlock:r,toBlock:i,event:a,events:o,args:s,strict:c}={}){let l=c??!1,u=o??(a?[a]:void 0),d=[];u&&(d=[u.flatMap(e=>lr({abi:[e],eventName:e.name,args:o?void 0:s}))],a&&(d=d[0]));let f;f=n?await e.request({method:`eth_getLogs`,params:[{address:t,topics:d,blockHash:n}]}):await e.request({method:`eth_getLogs`,params:[{address:t,topics:d,fromBlock:typeof r==`bigint`?O(r):r,toBlock:typeof i==`bigint`?O(i):i}]});let p=f.map(e=>Ci(e));return u?Di({abi:u,args:s,logs:p,strict:l}):p}async function Ai(e,t){let{abi:n,address:r,args:i,blockHash:a,eventName:o,fromBlock:s,toBlock:c,strict:l}=t,u=o?st({abi:n,name:o}):void 0,d=u?void 0:n.filter(e=>e.type===`event`);return M(e,ki,`getLogs`)({address:r,args:i,blockHash:a,event:u,events:d,fromBlock:s,toBlock:c,strict:l})}async function ji(e,t){let{abi:n,address:r,args:i,functionName:a,...o}=t,s=Se({abi:n,args:i,functionName:a});try{let{data:t}=await M(e,Ht,`call`)({...o,data:s,to:r});return Bt({abi:n,args:i,functionName:a,data:t||`0x`})}catch(e){throw mr(e,{abi:n,address:r,args:i,docsPath:`/docs/contract/readContract`,functionName:a})}}async function Mi(e,n){let{abi:r,address:i,args:a,functionName:o,dataSuffix:s=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,...c}=n,l=c.account?t(c.account):e.account,u=Se({abi:r,args:a,functionName:o});try{let{data:t}=await M(e,Ht,`call`)({batch:!1,data:`${u}${s?s.replace(`0x`,``):``}`,to:i,...c,account:l});return{result:Bt({abi:r,args:a,functionName:o,data:t||`0x`}),request:{abi:r.filter(e=>`name`in e&&e.name===n.functionName),address:i,args:a,dataSuffix:s,functionName:o,...c,account:l}}}catch(e){throw mr(e,{abi:r,address:i,args:a,docsPath:`/docs/contract/simulateContract`,functionName:o,sender:l?.address})}}var Ni=new Map,Pi=new Map,Fi=0;function Ii(e,t,n){let r=++Fi,i=()=>Ni.get(e)||[],a=()=>{let t=i();Ni.set(e,t.filter(e=>e.id!==r))},o=()=>{let t=i();if(!t.some(e=>e.id===r))return;let n=Pi.get(e);if(t.length===1&&n){let e=n();e instanceof Promise&&e.catch(()=>{})}a()},s=i();if(Ni.set(e,[...s,{id:r,fns:t}]),s&&s.length>0)return o;let c={};for(let e in t)c[e]=((...t)=>{let n=i();if(n.length!==0)for(let r of n)r.fns[e]?.(...t)});let l=n(c);return typeof l==`function`&&Pi.set(e,l),o}async function Li(e){return new Promise(t=>setTimeout(t,e))}function Ri(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let i=!0,a=()=>i=!1;return(async()=>{let o;t&&(o=await e({unpoll:a})),await Li(await n?.(o)??r);let s=async()=>{i&&(await e({unpoll:a}),await Li(r),s())};s()})(),a}var zi=new Map,Bi=new Map;function Vi(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),n=t(e,zi),r=t(e,Bi);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function Hi(e,{cacheKey:t,cacheTime:n=1/0}){let r=Vi(t),i=r.response.get();if(i&&n>0&&Date.now()-i.created.getTime()<n)return i.data;let a=r.promise.get();a||(a=e(),r.promise.set(a));try{let e=await a;return r.response.set({created:new Date,data:e}),e}finally{r.promise.clear()}}var Ui=e=>`blockNumber.${e}`;async function Wi(e,{cacheTime:t=e.cacheTime}={}){let n=await Hi(()=>e.request({method:`eth_blockNumber`}),{cacheKey:Ui(e.uid),cacheTime:t});return BigInt(n)}async function Gi(e,{filter:t}){let n=`strict`in t&&t.strict,r=await t.request({method:`eth_getFilterChanges`,params:[t.id]});if(typeof r[0]==`string`)return r;let i=r.map(e=>Ci(e));return!(`abi`in t)||!t.abi?i:Di({abi:t.abi,logs:i,strict:n})}async function Ki(e,{filter:t}){return t.request({method:`eth_uninstallFilter`,params:[t.id]})}function qi(e,t){let{abi:n,address:r,args:i,batch:a=!0,eventName:o,fromBlock:s,onError:c,onLogs:l,poll:u,pollingInterval:d=e.pollingInterval,strict:f}=t;return(u===void 0?typeof s==`bigint`||!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):u)?(()=>{let t=f??!1;return Ii(A([`watchContractEvent`,r,i,a,e.uid,o,d,t,s]),{onLogs:l,onError:c},c=>{let l;s!==void 0&&(l=s-1n);let u,f=!1,p=Ri(async()=>{if(!f){try{u=await M(e,fr,`createContractEventFilter`)({abi:n,address:r,args:i,eventName:o,strict:t,fromBlock:s})}catch{}f=!0;return}try{let s;if(u)s=await M(e,Gi,`getFilterChanges`)({filter:u});else{let a=await M(e,Wi,`getBlockNumber`)({});s=l&&l<a?await M(e,Ai,`getContractEvents`)({abi:n,address:r,args:i,eventName:o,fromBlock:l+1n,toBlock:a,strict:t}):[],l=a}if(s.length===0)return;if(a)c.onLogs(s);else for(let e of s)c.onLogs([e])}catch(e){u&&e instanceof rt&&(f=!1),c.onError?.(e)}},{emitOnBegin:!0,interval:d});return async()=>{u&&await M(e,Ki,`uninstallFilter`)({filter:u}),p()}})})():(()=>{let t=f??!1,s=A([`watchContractEvent`,r,i,a,e.uid,o,d,t]),u=!0,p=()=>u=!1;return Ii(s,{onLogs:l,onError:c},t=>((async()=>{try{let a=(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})(),s=o?lr({abi:n,eventName:o,args:i}):[],{unsubscribe:c}=await a.subscribe({params:[`logs`,{address:r,topics:s}],onData(e){if(!u)return;let r=e.result;try{let{eventName:e,args:i}=Ti({abi:n,data:r.data,topics:r.topics,strict:f}),a=Ci(r,{args:i,eventName:e});t.onLogs([a])}catch(e){let n,i;if(e instanceof pe||e instanceof ye){if(f)return;n=e.abiItem.name,i=e.abiItem.inputs?.some(e=>!(`name`in e&&e.name))}let a=Ci(r,{args:i?[]:{},eventName:n});t.onLogs([a])}},onError(e){t.onError?.(e)}});p=c,u||p()}catch(e){c?.(e)}})(),()=>p()))})()}var Ji=class extends v{constructor({docsPath:e}={}){super([`Could not find an Account to execute with this Action.`,"Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."].join(`
`),{docsPath:e,docsSlug:`account`,name:`AccountNotFoundError`})}},Yi=class extends v{constructor({docsPath:e,metaMessages:t,type:n}){super(`Account type "${n}" is not supported.`,{docsPath:e,metaMessages:t,name:`AccountTypeNotSupportedError`})}};function Xi({chain:e,currentChainId:t}){if(!e)throw new Xt;if(t!==e.id)throw new Dt({chain:e,currentChainId:t})}async function Zi(e,{serializedTransaction:t}){return e.request({method:`eth_sendRawTransaction`,params:[t]},{retryCount:0})}var Qi=new at(128);async function $i(e,n){let{account:r=e.account,assertChainId:i=!0,chain:a=e.chain,accessList:o,authorizationList:s,blobs:c,data:l,dataSuffix:u=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,type:_,value:y,...b}=n;if(r===void 0)throw new Ji({docsPath:`/docs/actions/wallet/sendTransaction`});let x=r?t(r):null;try{Ue(n);let t=await(async()=>{if(n.to)return n.to;if(n.to!==null&&s&&s.length>0)return await Tr({authorization:s[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`.")})})();if(x?.type===`json-rpc`||x===null){let n;a!==null&&(n=await M(e,hi,`getChainId`)({}),i&&Xi({currentChainId:n,chain:a}));let r=e.chain?.formatters?.transactionRequest?.format,v=(r||Ge)({...xe(b,{format:r}),accessList:o,account:x,authorizationList:s,blobs:c,chainId:n,data:l&&Ft([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,to:t,type:_,value:y},`sendTransaction`),S=Qi.get(e.uid),C=S?`wallet_sendTransaction`:`eth_sendTransaction`;try{return await e.request({method:C,params:[v]},{retryCount:0})}catch(t){if(S===!1)throw t;let n=t;if(n.name===`InvalidInputRpcError`||n.name===`InvalidParamsRpcError`||n.name===`MethodNotFoundRpcError`||n.name===`MethodNotSupportedRpcError`)return await e.request({method:`wallet_sendTransaction`,params:[v]},{retryCount:0}).then(t=>(Qi.set(e.uid,!0),t)).catch(t=>{let r=t;throw r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`?(Qi.set(e.uid,!1),n):r});throw n}}if(x?.type===`local`){let n=await M(e,bi,`prepareTransactionRequest`)({account:x,accessList:o,authorizationList:s,blobs:c,chain:a,data:l&&Ft([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,nonceManager:x.nonceManager,parameters:[..._i,`sidecars`],type:_,value:y,...b,to:t}),r=a?.serializers?.transaction,i=await x.signTransaction(n,{serializer:r});return await M(e,Zi,`sendRawTransaction`)({serializedTransaction:i})}throw x?.type===`smart`?new Yi({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:`/docs/actions/bundler/sendUserOperation`,type:`smart`}):new Yi({docsPath:`/docs/actions/wallet/sendTransaction`,type:x?.type})}catch(e){throw e instanceof Yi?e:mi(e,{...n,account:x,chain:n.chain||void 0})}}async function ea(e,t){return ea.internal(e,$i,`sendTransaction`,t)}(function(e){async function n(e,n,r,i){let{abi:a,account:o=e.account,address:s,args:c,functionName:l,...u}=i;if(o===void 0)throw new Ji({docsPath:`/docs/contract/writeContract`});let d=o?t(o):null,f=Se({abi:a,args:c,functionName:l});try{return await M(e,n,r)({data:f,to:s,account:d,...u})}catch(e){throw mr(e,{abi:a,address:s,args:c,docsPath:`/docs/contract/writeContract`,functionName:l,sender:d?.address})}}e.internal=n})(ea||={});var ta=class extends v{constructor(e){super(`Call bundle failed with status: ${e.statusCode}`,{name:`BundleFailedError`}),Object.defineProperty(this,`result`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.result=e}};function na(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,a)=>{let o=async({count:s=0}={})=>{let c=async({error:e})=>{let n=typeof t==`function`?t({count:s,error:e}):t;n&&await Li(n),o({count:s+1})};try{i(await e())}catch(e){if(s<n&&await r({count:s,error:e}))return c({error:e});a(e)}};o()})}var ra={"0x0":`reverted`,"0x1":`success`};function ia(e,t){let n={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>Ci(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Ae(e.transactionIndex):null,status:e.status?ra[e.status]:null,type:e.type?Mr[e.type]||e.type:null};return e.blobGasPrice&&(n.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(n.blobGasUsed=BigInt(e.blobGasUsed)),n}var aa=`0x5792579257925792579257925792579257925792579257925792579257925792`,oa=O(0,{size:32});async function sa(e,n){let{account:r=e.account,chain:i=e.chain,experimental_fallback:a,experimental_fallbackDelay:o=32,forceAtomic:s=!1,id:c,version:u=`2.0.0`}=n,d=r?t(r):null,f=n.capabilities;e.dataSuffix&&!n.capabilities?.dataSuffix&&(f=typeof e.dataSuffix==`string`?{...n.capabilities,dataSuffix:{value:e.dataSuffix,optional:!0}}:{...n.capabilities,dataSuffix:{value:e.dataSuffix.value,...e.dataSuffix.required?{}:{optional:!0}}});let p=n.calls.map(e=>{let t=e,n=t.abi?Se({abi:t.abi,functionName:t.functionName,args:t.args}):t.data;return{data:t.dataSuffix&&n?Ft([n,t.dataSuffix]):n,to:t.to,value:t.value?O(t.value):void 0}});try{let t=await e.request({method:`wallet_sendCalls`,params:[{atomicRequired:s,calls:p,capabilities:f,chainId:O(i.id),from:d?.address,id:c,version:u}]},{retryCount:0});return typeof t==`string`?{id:t}:t}catch(t){let r=t;if(a&&(r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`||r.name===`UnknownRpcError`||r.details.toLowerCase().includes(`does not exist / is not available`)||r.details.toLowerCase().includes(`missing or invalid. request()`)||r.details.toLowerCase().includes(`did not match any variant of untagged enum`)||r.details.toLowerCase().includes(`account upgraded to unsupported contract`)||r.details.toLowerCase().includes(`eip-7702 not supported`)||r.details.toLowerCase().includes(`unsupported wc_ method`)||r.details.toLowerCase().includes(`feature toggled misconfigured`)||r.details.toLowerCase().includes(`jsonrpcengine: response has no error or result for request`))){if(f&&Object.values(f).some(e=>!e.optional)){let e="non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";throw new je(new v(e,{details:e}))}if(s&&p.length>1){let e="`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";throw new Wt(new v(e,{details:e}))}let t=[];for(let n of p){let r=$i(e,{account:d,chain:i,data:n.data,to:n.to,value:n.value?l(n.value):void 0});t.push(r),o>0&&await new Promise(e=>setTimeout(e,o))}let n=await Promise.allSettled(t);if(n.every(e=>e.status===`rejected`))throw n[0].reason;return{id:Ft([...n.map(e=>e.status===`fulfilled`?e.value:oa),O(i.id,{size:32}),aa])}}throw mi(t,{...n,account:d,chain:n.chain})}}async function ca(e,t){async function n(t){if(t.endsWith(`5792579257925792579257925792579257925792579257925792579257925792`)){let n=h(Ze(t,-64,-32)),r=Ze(t,0,-64).slice(2).match(/.{1,64}/g),i=await Promise.all(r.map(t=>oa.slice(2)===t?void 0:e.request({method:`eth_getTransactionReceipt`,params:[`0x${t}`]},{dedupe:!0}))),a=i.some(e=>e===null)?100:i.every(e=>e?.status===`0x1`)?200:i.every(e=>e?.status===`0x0`)?500:600;return{atomic:!1,chainId:Ae(n),receipts:i.filter(Boolean),status:a,version:`2.0.0`}}return e.request({method:`wallet_getCallsStatus`,params:[t]})}let{atomic:r=!1,chainId:i,receipts:a,version:o=`2.0.0`,...s}=await n(t.id),[c,u]=(()=>{let e=s.status;return e>=100&&e<200?[`pending`,e]:e>=200&&e<300?[`success`,e]:e>=300&&e<700?[`failure`,e]:e===`CONFIRMED`?[`success`,200]:e===`PENDING`?[`pending`,100]:[void 0,e]})();return{...s,atomic:r,chainId:i?Ae(i):void 0,receipts:a?.map(e=>({...e,blockNumber:l(e.blockNumber),gasUsed:l(e.gasUsed),status:ra[e.status]}))??[],statusCode:u,status:c,version:o}}async function la(e,t){let{id:n,pollingInterval:r=e.pollingInterval,status:i=({statusCode:e})=>e===200||e>=300,retryCount:a=4,retryDelay:o=({count:e})=>~~(1<<e)*200,timeout:s=6e4,throwOnFailure:c=!1}=t,l=A([`waitForCallsStatus`,e.uid,n]),{promise:u,resolve:d,reject:f}=Xe(),p,m=Ii(l,{resolve:d,reject:f},t=>{let s=Ri(async()=>{let r=e=>{clearTimeout(p),s(),e(),m()};try{let s=await na(async()=>{let t=await M(e,ca,`getCallsStatus`)({id:n});if(c&&t.status===`failure`)throw new ta(t);return t},{retryCount:a,delay:o});if(!i(s))return;r(()=>t.resolve(s))}catch(e){r(()=>t.reject(e))}},{interval:r,emitOnBegin:!0});return s});return p=s?setTimeout(()=>{m(),clearTimeout(p),f(new ua({id:n}))},s):void 0,await u}var ua=class extends v{constructor({id:e}){super(`Timed out while waiting for call bundle with id "${e}" to be confirmed.`,{name:`WaitForCallsStatusTimeoutError`})}},da=256,fa=da,pa;function ma(e=11){if(!pa||fa+e>da*2){pa=``,fa=0;for(let e=0;e<da;e++)pa+=(256+Math.random()*256|0).toString(16).substring(1)}return pa.substring(fa,fa+++e)}function ha(e){let{batch:n,chain:r,ccipRead:i,dataSuffix:a,key:o=`base`,name:s=`Base Client`,type:c=`base`}=e,l=e.experimental_blockTag??(typeof r?.experimental_preconfirmationTime==`number`?`pending`:void 0),u=r?.blockTime??12e3,d=Math.min(Math.max(Math.floor(u/2),500),4e3),f=e.pollingInterval??d,p=e.cacheTime??f,m=e.account?t(e.account):void 0,{config:h,request:g,value:_}=e.transport({account:m,chain:r,pollingInterval:f}),v={account:m,batch:n,cacheTime:p,ccipRead:i,chain:r,dataSuffix:a,key:o,name:s,pollingInterval:f,request:g,transport:{...h,..._},type:c,uid:ma(),...l?{experimental_blockTag:l}:{}};function y(e){return t=>{let n=t(e);for(let e in v)delete n[e];let r={...e,...n};return Object.assign(r,{extend:y(r)})}}return Object.assign(v,{extend:y(v)})}function ga(e){if(!(e instanceof v))return!1;let t=e.walk(e=>e instanceof be);return t instanceof be?t.data?.errorName===`HttpError`||t.data?.errorName===`ResolverError`||t.data?.errorName===`ResolverNotContract`||t.data?.errorName===`ResolverNotFound`||t.data?.errorName===`ReverseAddressMismatch`||t.data?.errorName===`UnsupportedResolverProfile`:!1}function _a(e){if(e.length!==66||e.indexOf(`[`)!==0||e.indexOf(`]`)!==65)return null;let t=`0x${e.slice(1,65)}`;return ce(t)?t:null}function va(e){let t=new Uint8Array(32).fill(0);if(!e)return un(t);let n=e.split(`.`);for(let e=n.length-1;e>=0;--e){let r=_a(n[e]),i=r?en(r):k(Je(n[e]),`bytes`);t=k(Ft([t,i]),`bytes`)}return un(t)}function ya(e){return`[${e.slice(2)}]`}function ba(e){let t=new Uint8Array(32).fill(0);return e?_a(e)||k(Je(e)):un(t)}function xa(e){let t=e.replace(/^\.|\.$/gm,``);if(t.length===0)return new Uint8Array(1);let n=new Uint8Array(Je(t).byteLength+2),r=0,i=t.split(`.`);for(let e=0;e<i.length;e++){let t=Je(i[e]);t.byteLength>255&&(t=Je(ya(ba(i[e])))),n[r]=t.length,n.set(t,r+1),r+=t.length+1}return n.byteLength===r+1?n:n.slice(0,r+1)}async function Sa(e,t){let{blockNumber:n,blockTag:r,coinType:i,name:a,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return Gt({blockNumber:n,chain:c,contract:`ensUniversalResolver`})})(),u=c?.ensTlds;if(u&&!u.some(e=>a.endsWith(e)))return null;let d=i==null?[va(a)]:[va(a),BigInt(i)];try{let t=Se({abi:At,functionName:`addr`,args:d}),i={address:l,abi:ln,functionName:`resolveWithGateways`,args:[De(xa(a)),t,o??[`x-batch-gateway:true`]],blockNumber:n,blockTag:r},s=await M(e,ji,`readContract`)(i);if(s[0]===`0x`)return null;let c=Bt({abi:At,args:d,functionName:`addr`,data:s[0]});return c===`0x`||h(c)===`0x00`?null:c}catch(e){if(s)throw e;if(ga(e))return null;throw e}}var Ca=class extends v{constructor({data:e}){super(`Unable to extract image from metadata. The metadata may be malformed or invalid.`,{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",``,`Provided data: ${JSON.stringify(e)}`],name:`EnsAvatarInvalidMetadataError`})}},wa=class extends v{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`,{name:`EnsAvatarInvalidNftUriError`})}},Ta=class extends v{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,{name:`EnsAvatarUriResolutionError`})}},Ea=class extends v{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,{name:`EnsAvatarUnsupportedNamespaceError`})}},Da=/(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,Oa=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,ka=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Aa=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function ja(e){try{let t=await fetch(e,{method:`HEAD`});return t.status===200?t.headers.get(`content-type`)?.startsWith(`image/`):!1}catch(t){return typeof t==`object`&&t.response!==void 0||!Object.hasOwn(globalThis,`Image`)?!1:new Promise(t=>{let n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e})}}function Ma(e,t){return e?e.endsWith(`/`)?e.slice(0,-1):e:t}function Na({uri:e,gatewayUrls:t}){let n=ka.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};let r=Ma(t?.ipfs,`https://ipfs.io`),i=Ma(t?.arweave,`https://arweave.net`),{protocol:a,subpath:o,target:s,subtarget:c=``}=e.match(Da)?.groups||{},l=a===`ipns:/`||o===`ipns/`,u=a===`ipfs:/`||o===`ipfs/`||Oa.test(e);if(e.startsWith(`http`)&&!l&&!u){let n=e;return t?.arweave&&(n=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:n,isOnChain:!1,isEncoded:!1}}if((l||u)&&s)return{uri:`${r}/${l?`ipns`:`ipfs`}/${s}${c}`,isOnChain:!1,isEncoded:!1};if(a===`ar:/`&&s)return{uri:`${i}/${s}${c||``}`,isOnChain:!1,isEncoded:!1};let d=e.replace(Aa,``);if(d.startsWith(`<svg`)&&(d=`data:image/svg+xml;base64,${btoa(d)}`),d.startsWith(`data:`)||d.startsWith(`{`))return{uri:d,isOnChain:!0,isEncoded:!1};throw new Ta({uri:e})}function Pa(e){if(typeof e!=`object`||!(`image`in e)&&!(`image_url`in e)&&!(`image_data`in e))throw new Ca({data:e});return e.image||e.image_url||e.image_data}async function Fa({gatewayUrls:e,uri:t}){try{return await Ia({gatewayUrls:e,uri:Pa(await fetch(t).then(e=>e.json()))})}catch{throw new Ta({uri:t})}}async function Ia({gatewayUrls:e,uri:t}){let{uri:n,isOnChain:r}=Na({uri:t,gatewayUrls:e});if(r||await ja(n))return n;throw new Ta({uri:t})}function La(e){let t=e;t.startsWith(`did:nft:`)&&(t=t.replace(`did:nft:`,``).replace(/_/g,`/`));let[n,r,i]=t.split(`/`),[a,o]=n.split(`:`),[s,c]=r.split(`:`);if(!a||a.toLowerCase()!==`eip155`)throw new wa({reason:`Only EIP-155 supported`});if(!o)throw new wa({reason:`Chain ID not found`});if(!c)throw new wa({reason:`Contract address not found`});if(!i)throw new wa({reason:`Token ID not found`});if(!s)throw new wa({reason:`ERC namespace not found`});return{chainID:Number.parseInt(o,10),namespace:s.toLowerCase(),contractAddress:c,tokenID:i}}async function Ra(e,{nft:t}){if(t.namespace===`erc721`)return ji(e,{address:t.contractAddress,abi:[{name:`tokenURI`,type:`function`,stateMutability:`view`,inputs:[{name:`tokenId`,type:`uint256`}],outputs:[{name:``,type:`string`}]}],functionName:`tokenURI`,args:[BigInt(t.tokenID)]});if(t.namespace===`erc1155`)return ji(e,{address:t.contractAddress,abi:[{name:`uri`,type:`function`,stateMutability:`view`,inputs:[{name:`_id`,type:`uint256`}],outputs:[{name:``,type:`string`}]}],functionName:`uri`,args:[BigInt(t.tokenID)]});throw new Ea({namespace:t.namespace})}async function za(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?Ba(e,{gatewayUrls:t,record:n}):Ia({uri:n,gatewayUrls:t})}async function Ba(e,{gatewayUrls:t,record:n}){let r=La(n),{uri:i,isOnChain:a,isEncoded:o}=Na({uri:await Ra(e,{nft:r}),gatewayUrls:t});if(a&&(i.includes(`data:application/json;base64,`)||i.startsWith(`{`))){let e=o?atob(i.replace(`data:application/json;base64,`,``)):i;return Ia({uri:Pa(JSON.parse(e)),gatewayUrls:t})}let s=r.tokenID;return r.namespace===`erc1155`&&(s=s.replace(`0x`,``).padStart(64,`0`)),Fa({gatewayUrls:t,uri:i.replace(/(?:0x)?{id}/,s)})}async function Va(e,t){let{blockNumber:n,blockTag:r,key:i,name:a,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return Gt({blockNumber:n,chain:c,contract:`ensUniversalResolver`})})(),u=c?.ensTlds;if(u&&!u.some(e=>a.endsWith(e)))return null;try{let t={address:l,abi:ln,args:[De(xa(a)),Se({abi:$t,functionName:`text`,args:[va(a),i]}),o??[`x-batch-gateway:true`]],functionName:`resolveWithGateways`,blockNumber:n,blockTag:r},s=await M(e,ji,`readContract`)(t);if(s[0]===`0x`)return null;let c=Bt({abi:$t,functionName:`text`,data:s[0]});return c===``?null:c}catch(e){if(s)throw e;if(ga(e))return null;throw e}}async function Ha(e,{blockNumber:t,blockTag:n,assetGatewayUrls:r,name:i,gatewayUrls:a,strict:o,universalResolverAddress:s}){let c=await M(e,Va,`getEnsText`)({blockNumber:t,blockTag:n,key:`avatar`,name:i,universalResolverAddress:s,gatewayUrls:a,strict:o});if(!c)return null;try{return await za(e,{record:c,gatewayUrls:r})}catch{return null}}async function Ua(e,t){let{address:n,blockNumber:r,blockTag:i,coinType:a=60n,gatewayUrls:o,strict:s}=t,{chain:c}=e,l=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!c)throw Error(`client chain not configured. universalResolverAddress is required.`);return Gt({blockNumber:r,chain:c,contract:`ensUniversalResolver`})})();try{let t={address:l,abi:$e,args:[n,a,o??[`x-batch-gateway:true`]],functionName:`reverseWithGateways`,blockNumber:r,blockTag:i},[s]=await M(e,ji,`readContract`)(t);return s||null}catch(e){if(s)throw e;if(ga(e))return null;throw e}}async function Wa(e,t){let{blockNumber:n,blockTag:r,name:i}=t,{chain:a}=e,o=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!a)throw Error(`client chain not configured. universalResolverAddress is required.`);return Gt({blockNumber:n,chain:a,contract:`ensUniversalResolver`})})(),s=a?.ensTlds;if(s&&!s.some(e=>i.endsWith(e)))throw Error(`${i} is not a valid ENS TLD (${s?.join(`, `)}) for chain "${a.name}" (id: ${a.id}).`);let[c]=await M(e,ji,`readContract`)({address:o,abi:[{inputs:[{type:`bytes`}],name:`findResolver`,outputs:[{type:`address`},{type:`bytes32`},{type:`uint256`}],stateMutability:`view`,type:`function`}],functionName:`findResolver`,args:[De(xa(i))],blockNumber:n,blockTag:r});return c}async function Ga(e,n){let{account:r=e.account,blockNumber:i,blockTag:a=`latest`,blobs:o,data:s,gas:c,gasPrice:l,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:f,to:p,value:m,...h}=n,g=r?t(r):void 0;try{Ue(n);let t=(typeof i==`bigint`?O(i):void 0)||a,r=e.chain?.formatters?.transactionRequest?.format,_=(r||Ge)({...xe(h,{format:r}),account:g,blobs:o,data:s,gas:c,gasPrice:l,maxFeePerBlobGas:u,maxFeePerGas:d,maxPriorityFeePerGas:f,to:p,value:m},`createAccessList`),v=await e.request({method:`eth_createAccessList`,params:[_,t]});return{accessList:v.accessList,gasUsed:BigInt(v.gasUsed)}}catch(t){throw Pt(t,{...n,account:g,chain:e.chain})}}async function Ka(e){let t=dr(e,{method:`eth_newBlockFilter`}),n=await e.request({method:`eth_newBlockFilter`});return{id:n,request:t(n),type:`block`}}async function qa(e,{address:t,args:n,event:r,events:i,fromBlock:a,strict:o,toBlock:s}={}){let c=i??(r?[r]:void 0),l=dr(e,{method:`eth_newFilter`}),u=[];c&&(u=[c.flatMap(e=>lr({abi:[e],eventName:e.name,args:n}))],r&&(u=u[0]));let d=await e.request({method:`eth_newFilter`,params:[{address:t,fromBlock:typeof a==`bigint`?O(a):a,toBlock:typeof s==`bigint`?O(s):s,...u.length?{topics:u}:{}}]});return{abi:c,args:n,eventName:r?r.name:void 0,fromBlock:a,id:d,request:l(d),strict:!!o,toBlock:s,type:`event`}}async function Ja(e){let t=dr(e,{method:`eth_newPendingTransactionFilter`}),n=await e.request({method:`eth_newPendingTransactionFilter`});return{id:n,request:t(n),type:`transaction`}}async function Ya(e,{address:t,blockNumber:n,blockTag:r=e.experimental_blockTag??`latest`}){if(e.batch?.multicall&&e.chain?.contracts?.multicall3){let i=e.chain.contracts.multicall3.address,a=Se({abi:qe,functionName:`getEthBalance`,args:[t]}),{data:o}=await M(e,Ht,`call`)({to:i,data:a,blockNumber:n,blockTag:r});return Bt({abi:qe,functionName:`getEthBalance`,args:[t],data:o||`0x`})}let i=typeof n==`bigint`?O(n):void 0,a=await e.request({method:`eth_getBalance`,params:[t,i||r]});return BigInt(a)}async function Xa(e){let t=await e.request({method:`eth_blobBaseFee`});return BigInt(t)}async function Za(e,{blockHash:t,blockNumber:n,blockTag:r=`latest`}={}){let i=n===void 0?void 0:O(n),a;return a=t?await e.request({method:`eth_getBlockTransactionCountByHash`,params:[t]},{dedupe:!0}):await e.request({method:`eth_getBlockTransactionCountByNumber`,params:[i||r]},{dedupe:!!i}),Ae(a)}async function Qa(e,{address:t,blockNumber:n,blockTag:r=`latest`}){let i=n===void 0?void 0:O(n),a=await e.request({method:`eth_getCode`,params:[t,i||r]},{dedupe:!!i});if(a!==`0x`)return a}async function $a(e,{address:t,blockNumber:n,blockTag:r=`latest`}){let i=await Qa(e,{address:t,...n===void 0?{blockTag:r}:{blockNumber:n}});if(i&&E(i)===23&&i.startsWith(`0xef0100`))return Zt(yt(i,3,23))}var eo=class extends v{constructor({address:e}){super(`No EIP-712 domain found on contract "${e}".`,{metaMessages:[`Ensure that:`,`- The contract is deployed at the address "${e}".`,"- `eip712Domain()` function exists on the contract.","- `eip712Domain()` function matches signature to ERC-5267 specification."],name:`Eip712DomainNotFoundError`})}};async function to(e,t){let{address:n,factory:r,factoryData:i}=t;try{let[t,a,o,s,c,l,u]=await M(e,ji,`readContract`)({abi:no,address:n,functionName:`eip712Domain`,factory:r,factoryData:i});return{domain:{name:a,version:o,chainId:Number(s),verifyingContract:c,salt:l},extensions:u,fields:t}}catch(e){let t=e;throw t.name===`ContractFunctionExecutionError`&&t.cause.name===`ContractFunctionZeroDataError`?new eo({address:n}):t}}var no=[{inputs:[],name:`eip712Domain`,outputs:[{name:`fields`,type:`bytes1`},{name:`name`,type:`string`},{name:`version`,type:`string`},{name:`chainId`,type:`uint256`},{name:`verifyingContract`,type:`address`},{name:`salt`,type:`bytes32`},{name:`extensions`,type:`uint256[]`}],stateMutability:`view`,type:`function`}];function ro(e){return{baseFeePerGas:e.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:e.reward?.map(e=>e.map(e=>BigInt(e)))}}async function io(e,{blockCount:t,blockNumber:n,blockTag:r=`latest`,rewardPercentiles:i}){let a=typeof n==`bigint`?O(n):void 0;return ro(await e.request({method:`eth_feeHistory`,params:[O(t),a||r,i]},{dedupe:!!a}))}async function ao(e,{filter:t}){let n=t.strict??!1,r=(await t.request({method:`eth_getFilterLogs`,params:[t.id]})).map(e=>Ci(e));return t.abi?Di({abi:t.abi,logs:r,strict:n}):r}async function oo({address:e,authorization:t,signature:n}){return ne(Zt(e),await Tr({authorization:t,signature:n}))}var so=new at(8192);function co(e,{enabled:t=!0,id:n}){if(!t||!n)return e();if(so.get(n))return so.get(n);let r=e().finally(()=>so.delete(n));return so.set(n,r),r}function lo(e,t={}){return async(n,r={})=>{let{dedupe:i=!1,methods:a,retryDelay:o=150,retryCount:s=3,uid:c}={...t,...r},{method:l}=n;if(a?.exclude?.includes(l)||a?.include&&!a.include.includes(l))throw new jt(Error(`method not supported`),{method:l});return co(()=>na(async()=>{try{return await e(n)}catch(e){let t=e;switch(t.code){case _t.code:throw new _t(t);case Qt.code:throw new Qt(t);case zt.code:throw new zt(t,{method:n.method});case kt.code:throw new kt(t);case qt.code:throw new qt(t);case rt.code:throw new rt(t);case Ye.code:throw new Ye(t);case tn.code:throw new tn(t);case et.code:throw new et(t);case jt.code:throw new jt(t,{method:n.method});case dt.code:throw new dt(t);case ot.code:throw new ot(t);case p.code:throw new p(t);case cn.code:throw new cn(t);case g.code:throw new g(t);case mt.code:throw new mt(t);case Qe.code:throw new Qe(t);case dn.code:throw new dn(t);case je.code:throw new je(t);case an.code:throw new an(t);case It.code:throw new It(t);case Oe.code:throw new Oe(t);case bt.code:throw new bt(t);case Nt.code:throw new Nt(t);case Wt.code:throw new Wt(t);case 5e3:throw new p(t);case _e.code:throw new _e(t);default:throw e instanceof v?e:new u(t)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof Et){let e=t?.headers?.get(`Retry-After`);if(e?.match(/\d/))return Number.parseInt(e,10)*1e3}return~~(1<<e)*o},retryCount:s,shouldRetry:({error:e})=>uo(e)}),{enabled:i,id:i?sn(`${c}.${A(n)}`):void 0})}}function uo(e){return`code`in e&&typeof e.code==`number`?e.code===-1||e.code===dt.code||e.code===qt.code:e instanceof Et&&e.status?e.status===403||e.status===408||e.status===413||e.status===429||e.status===500||e.status===502||e.status===503||e.status===504:!0}function fo(e,{errorInstance:t=Error(`timed out`),timeout:n,signal:r}){return new Promise((i,a)=>{(async()=>{let o;try{let s=new AbortController;n>0&&(o=setTimeout(()=>{r?s.abort():a(t)},n)),i(await e({signal:s?.signal||null}))}catch(e){e?.name===`AbortError`&&a(t),a(e)}finally{clearTimeout(o)}})()})}function po(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var mo=po();function ho(e,t={}){let{url:n,headers:r}=go(e);return{async request(e){let{body:i,fetchFn:a=t.fetchFn??fetch,onRequest:o=t.onRequest,onResponse:s=t.onResponse,timeout:c=t.timeout??1e4}=e,l={...t.fetchOptions??{},...e.fetchOptions??{}},{headers:u,method:d,signal:f}=l;try{let e=await fo(async({signal:e})=>{let t={...l,body:A(Array.isArray(i)?i.map(e=>({jsonrpc:`2.0`,id:e.id??mo.take(),...e})):{jsonrpc:`2.0`,id:i.id??mo.take(),...i}),headers:{...r,"Content-Type":`application/json`,...u},method:d||`POST`,signal:f||(c>0?e:null)},s=new Request(n,t),p=await o?.(s,t)??{...t,url:n};return await a(p.url??n,p)},{errorInstance:new Ct({body:i,url:n}),timeout:c,signal:!0});s&&await s(e);let t;if(e.headers.get(`Content-Type`)?.startsWith(`application/json`))t=await e.json();else{t=await e.text();try{t=JSON.parse(t||`{}`)}catch(n){if(e.ok)throw n;t={error:t}}}if(!e.ok)throw new Et({body:i,details:A(t.error)||e.statusText,headers:e.headers,status:e.status,url:n});return t}catch(e){throw e instanceof Et||e instanceof Ct?e:new Et({body:i,cause:e,url:n})}}}}function go(e){try{let t=new URL(e),n=(()=>{if(t.username){let e=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username=``,t.password=``,{url:t.toString(),headers:{Authorization:`Basic ${btoa(e)}`}}}})();return{url:t.toString(),...n}}catch{return{url:e}}}var _o=`Ethereum Signed Message:
`;function vo(e){let t=typeof e==`string`?sn(e):typeof e.raw==`string`?e.raw:un(e.raw);return Ft([sn(`${_o}${E(t)}`),t])}function yo(e,t){return k(vo(e),t)}var bo=class extends v{constructor({domain:e}){super(`Invalid domain "${A(e)}".`,{metaMessages:[`Must be a valid EIP-712 domain.`]})}},xo=class extends v{constructor({primaryType:e,types:t}){super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`,{docsPath:`/api/glossary/Errors#typeddatainvalidprimarytypeerror`,metaMessages:["Check that the primary type is a key in `types`."]})}},So=class extends v{constructor({type:e}){super(`Struct type "${e}" is invalid.`,{metaMessages:[`Struct type must not be a Solidity type.`],name:`InvalidStructTypeError`})}};function Co(e){let{domain:t,message:n,primaryType:r,types:i}=e,a=(e,t)=>{let n={...t};for(let t of e){let{name:e,type:r}=t;r===`address`&&(n[e]=n[e].toLowerCase())}return n};return A({domain:!i.EIP712Domain||!t?{}:a(i.EIP712Domain,t),message:(()=>{if(r!==`EIP712Domain`)return a(i[r],n)})(),primaryType:r,types:i})}function wo(e){let{domain:t,message:n,primaryType:r,types:i}=e,a=(e,t)=>{for(let n of e){let{name:e,type:r}=n,o=t[e],s=r.match(Ut);if(s&&(typeof o==`number`||typeof o==`bigint`)){let[e,t,n]=s;O(o,{signed:t===`int`,size:Number.parseInt(n,10)/8})}if(r===`address`&&typeof o==`string`&&!nt(o))throw new ut({address:o});let c=r.match(Mt);if(c){let[e,t]=c;if(t&&E(o)!==Number.parseInt(t,10))throw new ue({expectedSize:Number.parseInt(t,10),givenSize:E(o)})}let l=i[r];l&&(Eo(r),a(l,o))}};if(i.EIP712Domain&&t){if(typeof t!=`object`)throw new bo({domain:t});a(i.EIP712Domain,t)}if(r!==`EIP712Domain`)if(i[r])a(i[r],n);else throw new xo({primaryType:r,types:i})}function To({domain:e}){return[typeof e?.name==`string`&&{name:`name`,type:`string`},e?.version&&{name:`version`,type:`string`},(typeof e?.chainId==`number`||typeof e?.chainId==`bigint`)&&{name:`chainId`,type:`uint256`},e?.verifyingContract&&{name:`verifyingContract`,type:`address`},e?.salt&&{name:`salt`,type:`bytes32`}].filter(Boolean)}function Eo(e){if(e===`address`||e===`bool`||e===`string`||e.startsWith(`bytes`)||e.startsWith(`uint`)||e.startsWith(`int`))throw new So({type:e})}function Do(e){let{domain:t={},message:n,primaryType:r}=e,i={EIP712Domain:To({domain:t}),...e.types};wo({domain:t,message:n,primaryType:r,types:i});let a=[`0x1901`];return t&&a.push(Oo({domain:t,types:i})),r!==`EIP712Domain`&&a.push(ko({data:n,primaryType:r,types:i})),k(Ft(a))}function Oo({domain:e,types:t}){return ko({data:e,primaryType:`EIP712Domain`,types:t})}function ko({data:e,primaryType:t,types:n}){return k(Ao({data:e,primaryType:t,types:n}))}function Ao({data:e,primaryType:t,types:n}){let r=[{type:`bytes32`}],i=[jo({primaryType:t,types:n})];for(let a of n[t]){let[t,o]=Po({types:n,name:a.name,type:a.type,value:e[a.name]});r.push(t),i.push(o)}return Jt(r,i)}function jo({primaryType:e,types:t}){return k(De(Mo({primaryType:e,types:t})))}function Mo({primaryType:e,types:t}){let n=``,r=No({primaryType:e,types:t});r.delete(e);let i=[e,...Array.from(r).sort()];for(let e of i)n+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(`,`)})`;return n}function No({primaryType:e,types:t},n=new Set){let r=e.match(/^\w*/u)?.[0];if(n.has(r)||t[r]===void 0)return n;n.add(r);for(let e of t[r])No({primaryType:e.type,types:t},n);return n}function Po({types:e,name:t,type:n,value:r}){if(e[n]!==void 0)return[{type:`bytes32`},k(Ao({data:r,primaryType:n,types:e}))];if(n===`bytes`)return[{type:`bytes32`},k(r)];if(n===`string`)return[{type:`bytes32`},k(De(r))];if(n.lastIndexOf(`]`)===n.length-1){let i=n.slice(0,n.lastIndexOf(`[`)),a=r.map(n=>Po({name:t,type:i,types:e,value:n}));return[{type:`bytes32`},k(Jt(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:n},r]}var Fo={checksum:new class extends Map{constructor(e){super(),Object.defineProperty(this,`maxSize`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){let t=super.get(e);return super.has(e)&&t!==void 0&&(this.delete(e),super.set(e,t)),t}set(e,t){if(super.set(e,t),this.maxSize&&this.size>this.maxSize){let e=this.keys().next().value;e&&this.delete(e)}return this}}(8192)}.checksum,Io=class extends qn{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,Kn(e);let n=yn(t);if(this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`Expected instance of class which extends utils.Hash`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let r=this.blockLen,i=new Uint8Array(r);i.set(n.length>r?e.create().update(n).digest():n);for(let e=0;e<i.length;e++)i[e]^=54;this.iHash.update(i),this.oHash=e.create();for(let e=0;e<i.length;e++)i[e]^=106;this.oHash.update(i),_n(i)}update(e){return gn(this),this.iHash.update(e),this}digestInto(e){gn(this),Cn(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Lo=(e,t,n)=>new Io(e,t).update(n).digest();Lo.create=(e,t)=>new Io(e,t);function Ro(e,t={}){let{as:n=typeof e==`string`?`Hex`:`Bytes`}=t,r=gt(_(e));return n===`Bytes`?r:m(r)}var zo=/^0x[a-fA-F0-9]{40}$/;function Bo(e,t={}){let{strict:n=!0}=t;if(!zo.test(e))throw new Uo({address:e,cause:new Wo});if(n){if(e.toLowerCase()===e)return;if(Vo(e)!==e)throw new Uo({address:e,cause:new Go})}}function Vo(e){if(Fo.has(e))return Fo.get(e);Bo(e,{strict:!1});let t=e.substring(2).toLowerCase(),n=Ro(se(t),{as:`Bytes`}),r=t.split(``);for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&r[e]&&(r[e]=r[e].toUpperCase()),(n[e>>1]&15)>=8&&r[e+1]&&(r[e+1]=r[e+1].toUpperCase());let i=`0x${r.join(``)}`;return Fo.set(e,i),i}function Ho(e,t={}){let{strict:n=!0}=t??{};try{return Bo(e,{strict:n}),!0}catch{return!1}}var Uo=class extends D{constructor({address:e,cause:t}){super(`Address "${e}" is invalid.`,{cause:t}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidAddressError`})}},Wo=class extends D{constructor(){super(`Address is not a 20 byte (40 hexadecimal character) value.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidInputError`})}},Go=class extends D{constructor(){super(`Address does not match its checksum counterpart.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Address.InvalidChecksumError`})}},Ko=/^(.*)\[([0-9]*)\]$/,qo=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Jo=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;2n**(8n-1n)-1n,2n**(16n-1n)-1n,2n**(24n-1n)-1n,2n**(32n-1n)-1n,2n**(40n-1n)-1n,2n**(48n-1n)-1n,2n**(56n-1n)-1n,2n**(64n-1n)-1n,2n**(72n-1n)-1n,2n**(80n-1n)-1n,2n**(88n-1n)-1n,2n**(96n-1n)-1n,2n**(104n-1n)-1n,2n**(112n-1n)-1n,2n**(120n-1n)-1n,2n**(128n-1n)-1n,2n**(136n-1n)-1n,2n**(144n-1n)-1n,2n**(152n-1n)-1n,2n**(160n-1n)-1n,2n**(168n-1n)-1n,2n**(176n-1n)-1n,2n**(184n-1n)-1n,2n**(192n-1n)-1n,2n**(200n-1n)-1n,2n**(208n-1n)-1n,2n**(216n-1n)-1n,2n**(224n-1n)-1n,2n**(232n-1n)-1n,2n**(240n-1n)-1n,2n**(248n-1n)-1n,2n**(256n-1n)-1n,-(2n**(8n-1n)),-(2n**(16n-1n)),-(2n**(24n-1n)),-(2n**(32n-1n)),-(2n**(40n-1n)),-(2n**(48n-1n)),-(2n**(56n-1n)),-(2n**(64n-1n)),-(2n**(72n-1n)),-(2n**(80n-1n)),-(2n**(88n-1n)),-(2n**(96n-1n)),-(2n**(104n-1n)),-(2n**(112n-1n)),-(2n**(120n-1n)),-(2n**(128n-1n)),-(2n**(136n-1n)),-(2n**(144n-1n)),-(2n**(152n-1n)),-(2n**(160n-1n)),-(2n**(168n-1n)),-(2n**(176n-1n)),-(2n**(184n-1n)),-(2n**(192n-1n)),-(2n**(200n-1n)),-(2n**(208n-1n)),-(2n**(216n-1n)),-(2n**(224n-1n)),-(2n**(232n-1n)),-(2n**(240n-1n)),-(2n**(248n-1n)),-(2n**(256n-1n));var Yo=2n**256n-1n;function Xo(e,t,n){let{checksumAddress:r,staticPosition:i}=n,a=gs(t.type);if(a){let[n,o]=a;return es(e,{...t,type:o},{checksumAddress:r,length:n,staticPosition:i})}if(t.type===`tuple`)return is(e,t,{checksumAddress:r,staticPosition:i});if(t.type===`address`)return $o(e,{checksum:r});if(t.type===`bool`)return ts(e);if(t.type.startsWith(`bytes`))return ns(e,t,{staticPosition:i});if(t.type.startsWith(`uint`)||t.type.startsWith(`int`))return rs(e,t);if(t.type===`string`)return as(e,{staticPosition:i});throw new Ns(t.type)}var Zo=32,Qo=32;function $o(e,t={}){let{checksum:n=!1}=t;return[(e=>n?Vo(e):e)(m(fn(e.readBytes(32),-20))),32]}function es(e,t,n){let{checksumAddress:r,length:i,staticPosition:a}=n;if(!i){let n=a+C(e.readBytes(Qo)),i=n+Zo;e.setPosition(n);let o=C(e.readBytes(Zo)),s=_s(t),c=0,l=[];for(let n=0;n<o;++n){e.setPosition(i+(s?n*32:c));let[a,o]=Xo(e,t,{checksumAddress:r,staticPosition:i});c+=o,l.push(a)}return e.setPosition(a+32),[l,32]}if(_s(t)){let n=a+C(e.readBytes(Qo)),o=[];for(let a=0;a<i;++a){e.setPosition(n+a*32);let[i]=Xo(e,t,{checksumAddress:r,staticPosition:n});o.push(i)}return e.setPosition(a+32),[o,32]}let o=0,s=[];for(let n=0;n<i;++n){let[n,i]=Xo(e,t,{checksumAddress:r,staticPosition:a+o});o+=i,s.push(n)}return[s,o]}function ts(e){return[Fe(e.readBytes(32),{size:32}),32]}function ns(e,t,{staticPosition:n}){let[r,i]=t.type.split(`bytes`);if(!i){let t=C(e.readBytes(32));e.setPosition(n+t);let r=C(e.readBytes(32));if(r===0)return e.setPosition(n+32),[`0x`,32];let i=e.readBytes(r);return e.setPosition(n+32),[m(i),32]}return[m(e.readBytes(Number.parseInt(i,10),32)),32]}function rs(e,t){let n=t.type.startsWith(`int`),r=Number.parseInt(t.type.split(`int`)[1]||`256`,10),i=e.readBytes(32);return[r>48?a(i,{signed:n}):C(i,{signed:n}),32]}function is(e,t,n){let{checksumAddress:r,staticPosition:i}=n,a=t.components.length===0||t.components.some(({name:e})=>!e),o=a?[]:{},s=0;if(_s(t)){let n=i+C(e.readBytes(Qo));for(let i=0;i<t.components.length;++i){let c=t.components[i];e.setPosition(n+s);let[l,u]=Xo(e,c,{checksumAddress:r,staticPosition:n});s+=u,o[a?i:c?.name]=l}return e.setPosition(i+32),[o,32]}for(let n=0;n<t.components.length;++n){let c=t.components[n],[l,u]=Xo(e,c,{checksumAddress:r,staticPosition:i});o[a?n:c?.name]=l,s+=u}return[o,s]}function as(e,{staticPosition:t}){let n=t+C(e.readBytes(32));e.setPosition(n);let r=C(e.readBytes(32));if(r===0)return e.setPosition(t+32),[``,32];let i=Me(Re(e.readBytes(r,32)));return e.setPosition(t+32),[i,32]}function os({checksumAddress:e,parameters:t,values:n}){let r=[];for(let i=0;i<t.length;i++)r.push(ss({checksumAddress:e,parameter:t[i],value:n[i]}));return r}function ss({checksumAddress:e=!1,parameter:t,value:n}){let r=t,i=gs(r.type);if(i){let[t,a]=i;return us(n,{checksumAddress:e,length:t,parameter:{...r,type:a}})}if(r.type===`tuple`)return hs(n,{checksumAddress:e,parameter:r});if(r.type===`address`)return ls(n,{checksum:e});if(r.type===`bool`)return fs(n);if(r.type.startsWith(`uint`)||r.type.startsWith(`int`)){let e=r.type.startsWith(`int`),[,,t=`256`]=Jo.exec(r.type)??[];return ps(n,{signed:e,size:Number(t)})}if(r.type.startsWith(`bytes`))return ds(n,{type:r.type});if(r.type===`string`)return ms(n);throw new Ns(r.type)}function cs(e){let t=0;for(let n=0;n<e.length;n++){let{dynamic:r,encoded:i}=e[n];r?t+=32:t+=xt(i)}let n=[],r=[],i=0;for(let a=0;a<e.length;a++){let{dynamic:o,encoded:s}=e[a];o?(n.push(d(t+i,{size:32})),r.push(s),i+=xt(s)):n.push(s)}return c(...n,...r)}function ls(e,t){let{checksum:n=!1}=t;return Bo(e,{strict:n}),{dynamic:!1,encoded:wt(e.toLowerCase())}}function us(e,t){let{checksumAddress:n,length:r,parameter:i}=t,a=r===null;if(!Array.isArray(e))throw new Ms(e);if(!a&&e.length!==r)throw new ks({expectedLength:r,givenLength:e.length,type:`${i.type}[${r}]`});let o=!1,s=[];for(let t=0;t<e.length;t++){let r=ss({checksumAddress:n,parameter:i,value:e[t]});r.dynamic&&(o=!0),s.push(r)}if(a||o){let e=cs(s);if(a){let t=d(s.length,{size:32});return{dynamic:!0,encoded:s.length>0?c(t,e):t}}if(o)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:c(...s.map(({encoded:e})=>e))}}function ds(e,{type:t}){let[,r]=t.split(`bytes`),i=xt(e);if(!r){let t=e;return i%32!=0&&(t=n(t,Math.ceil((e.length-2)/2/32)*32)),{dynamic:!0,encoded:c(wt(d(i,{size:32})),t)}}if(i!==Number.parseInt(r,10))throw new As({expectedSize:Number.parseInt(r,10),value:e});return{dynamic:!1,encoded:n(e)}}function fs(e){if(typeof e!=`boolean`)throw new D(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:wt(ke(e))}}function ps(e,{signed:t,size:n}){if(typeof n==`number`){let r=2n**(BigInt(n)-(t?1n:0n))-1n,i=t?-r-1n:0n;if(e>r||e<i)throw new Ee({max:r.toString(),min:i.toString(),signed:t,size:n/8,value:e.toString()})}return{dynamic:!1,encoded:d(e,{size:32,signed:t})}}function ms(e){let t=he(e),r=Math.ceil(xt(t)/32),i=[];for(let e=0;e<r;e++)i.push(n(le(t,e*32,(e+1)*32)));return{dynamic:!0,encoded:c(n(d(xt(t),{size:32})),...i)}}function hs(e,t){let{checksumAddress:n,parameter:r}=t,i=!1,a=[];for(let t=0;t<r.components.length;t++){let o=r.components[t],s=ss({checksumAddress:n,parameter:o,value:e[Array.isArray(e)?t:o.name]});a.push(s),s.dynamic&&(i=!0)}return{dynamic:i,encoded:i?cs(a):c(...a.map(({encoded:e})=>e))}}function gs(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}function _s(e){let{type:t}=e;if(t===`string`||t===`bytes`||t.endsWith(`[]`))return!0;if(t===`tuple`)return e.components?.some(_s);let n=gs(e.type);return!!(n&&_s({...e,type:n[1]}))}var vs={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Ss({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new xs({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new bs({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new bs({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let n=t??this.position;return this.assertPosition(n+e-1),this.bytes.subarray(n,n+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,e&255),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();let n=this.inspectBytes(e);return this.position+=t??e,n},readUint8(){this.assertReadLimit(),this._touch();let e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();let e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();let e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();let e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){let t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function ys(e,{recursiveReadLimit:t=8192}={}){let n=Object.create(vs);return n.bytes=e,n.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=t,n}var bs=class extends D{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.NegativeOffsetError`})}},xs=class extends D{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.PositionOutOfBoundsError`})}},Ss=class extends D{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Cursor.RecursiveReadLimitExceededError`})}};function Cs(e,t,n={}){let{as:r=`Array`,checksumAddress:i=!1}=n,a=typeof t==`string`?T(t):t,o=ys(a);if(Ce(a)===0&&e.length>0)throw new Os;if(Ce(a)&&Ce(a)<32)throw new Ds({data:typeof t==`string`?t:m(t),parameters:e,size:Ce(a)});let s=0,c=r===`Array`?[]:{};for(let t=0;t<e.length;++t){let n=e[t];o.setPosition(s);let[a,l]=Xo(o,n,{checksumAddress:i,staticPosition:0});s+=l,r===`Array`?c.push(a):c[n.name??t]=a}return c}function ws(e,t,n){let{checksumAddress:r=!1}=n??{};if(e.length!==t.length)throw new js({expectedLength:e.length,givenLength:t.length});let i=cs(os({checksumAddress:r,parameters:e,values:t}));return i.length===0?`0x`:i}function Ts(e,t){if(e.length!==t.length)throw new js({expectedLength:e.length,givenLength:t.length});let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r];n.push(Ts.encode(i,a))}return c(...n)}(function(e){function t(e,r,i=!1){if(e===`address`){let e=r;return Bo(e),wt(e.toLowerCase(),i?32:0)}if(e===`string`)return he(r);if(e===`bytes`)return r;if(e===`bool`)return wt(ke(r),i?32:1);let a=e.match(Jo);if(a){let[e,t,n=`256`]=a,o=Number.parseInt(n,10)/8;return d(r,{size:i?32:o,signed:t===`int`})}let o=e.match(qo);if(o){let[e,t]=o;if(Number.parseInt(t,10)!==(r.length-2)/2)throw new As({expectedSize:Number.parseInt(t,10),value:r});return n(r,i?32:0)}let s=e.match(Ko);if(s&&Array.isArray(r)){let[e,n]=s,i=[];for(let e=0;e<r.length;e++)i.push(t(n,r[e],!0));return i.length===0?`0x`:c(...i)}throw new Ns(e)}e.encode=t})(Ts||={});function Es(e){return Array.isArray(e)&&typeof e[0]==`string`||typeof e==`string`?or(e):e}var Ds=class extends D{constructor({data:e,parameters:t,size:n}){super(`Data size of ${n} bytes is too small for given parameters.`,{metaMessages:[`Params: (${re(t)})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.DataSizeTooSmallError`})}},Os=class extends D{constructor(){super(`Cannot decode zero data ("0x") with ABI parameters.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.ZeroDataError`})}},ks=class extends D{constructor({expectedLength:e,givenLength:t,type:n}){super(`Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.ArrayLengthMismatchError`})}},As=class extends D{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${xt(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.BytesSizeMismatchError`})}},js=class extends D{constructor({expectedLength:e,givenLength:t}){super([`ABI encoding parameters/values length mismatch.`,`Expected length (parameters): ${e}`,`Given length (values): ${t}`].join(`
`)),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.LengthMismatchError`})}},Ms=class extends D{constructor(e){super(`Value \`${e}\` is not a valid array.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.InvalidArrayError`})}},Ns=class extends D{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiParameters.InvalidTypeError`})}},N=BigInt(0),P=BigInt(1),Ps=BigInt(2),Fs=BigInt(3),Is=BigInt(4),Ls=BigInt(5),Rs=BigInt(8);function F(e,t){let n=e%t;return n>=N?n:t+n}function zs(e,t,n){let r=e;for(;t-- >N;)r*=r,r%=n;return r}function Bs(e,t){if(e===N)throw Error(`invert: expected non-zero number`);if(t<=N)throw Error(`invert: expected positive modulus, got `+t);let n=F(e,t),r=t,i=N,a=P,o=P,s=N;for(;n!==N;){let e=r/n,t=r%n,c=i-o*e,l=a-s*e;r=n,n=t,i=o,a=s,o=c,s=l}if(r!==P)throw Error(`invert: does not exist`);return F(i,t)}function Vs(e,t){let n=(e.ORDER+P)/Is,r=e.pow(t,n);if(!e.eql(e.sqr(r),t))throw Error(`Cannot find square root`);return r}function Hs(e,t){let n=(e.ORDER-Ls)/Rs,r=e.mul(t,Ps),i=e.pow(r,n),a=e.mul(t,i),o=e.mul(e.mul(a,Ps),i),s=e.mul(a,e.sub(o,e.ONE));if(!e.eql(e.sqr(s),t))throw Error(`Cannot find square root`);return s}function Us(e){if(e<BigInt(3))throw Error(`sqrt is not defined for small field`);let t=e-P,n=0;for(;t%Ps===N;)t/=Ps,n++;let r=Ps,i=Zs(e);for(;Ys(i,r)===1;)if(r++>1e3)throw Error(`Cannot find square root: probably non-prime P`);if(n===1)return Vs;let a=i.pow(r,t),o=(t+P)/Ps;return function(e,r){if(e.is0(r))return r;if(Ys(e,r)!==1)throw Error(`Cannot find square root`);let i=n,s=e.mul(e.ONE,a),c=e.pow(r,t),l=e.pow(r,o);for(;!e.eql(c,e.ONE);){if(e.is0(c))return e.ZERO;let t=1,n=e.sqr(c);for(;!e.eql(n,e.ONE);)if(t++,n=e.sqr(n),t===i)throw Error(`Cannot find square root`);let r=P<<BigInt(i-t-1),a=e.pow(s,r);i=t,s=e.sqr(a),c=e.mul(c,s),l=e.mul(l,a)}return l}}function Ws(e){return e%Is===Fs?Vs:e%Rs===Ls?Hs:Us(e)}var Gs=[`create`,`isValid`,`is0`,`neg`,`inv`,`sqrt`,`sqr`,`eql`,`add`,`sub`,`mul`,`pow`,`div`,`addN`,`subN`,`mulN`,`sqrN`];function Ks(e){return On(e,Gs.reduce((e,t)=>(e[t]=`function`,e),{ORDER:`bigint`,MASK:`bigint`,BYTES:`isSafeInteger`,BITS:`isSafeInteger`}))}function qs(e,t,n){if(n<N)throw Error(`invalid exponent, negatives unsupported`);if(n===N)return e.ONE;if(n===P)return t;let r=e.ONE,i=t;for(;n>N;)n&P&&(r=e.mul(r,i)),i=e.sqr(i),n>>=P;return r}function Js(e,t,n=!1){let r=Array(t.length).fill(n?e.ZERO:void 0),i=t.reduce((t,n,i)=>e.is0(n)?t:(r[i]=t,e.mul(t,n)),e.ONE),a=e.inv(i);return t.reduceRight((t,n,i)=>e.is0(n)?t:(r[i]=e.mul(t,r[i]),e.mul(t,n)),a),r}function Ys(e,t){let n=(e.ORDER-P)/Ps,r=e.pow(t,n),i=e.eql(r,e.ONE),a=e.eql(r,e.ZERO),o=e.eql(r,e.neg(e.ONE));if(!i&&!a&&!o)throw Error(`invalid Legendre symbol result`);return i?1:a?0:-1}function Xs(e,t){t!==void 0&&wn(t);let n=t===void 0?e.toString(2).length:t;return{nBitLength:n,nByteLength:Math.ceil(n/8)}}function Zs(e,t,n=!1,r={}){if(e<=N)throw Error(`invalid field: expected ORDER > 0, got `+e);let{nBitLength:i,nByteLength:a}=Xs(e,t);if(a>2048)throw Error(`invalid field: expected ORDER of <= 2048 bytes`);let o,s=Object.freeze({ORDER:e,isLE:n,BITS:i,BYTES:a,MASK:Dn(i),ZERO:N,ONE:P,create:t=>F(t,e),isValid:t=>{if(typeof t!=`bigint`)throw Error(`invalid field element: expected bigint, got `+typeof t);return N<=t&&t<e},is0:e=>e===N,isOdd:e=>(e&P)===P,neg:t=>F(-t,e),eql:(e,t)=>e===t,sqr:t=>F(t*t,e),add:(t,n)=>F(t+n,e),sub:(t,n)=>F(t-n,e),mul:(t,n)=>F(t*n,e),pow:(e,t)=>qs(s,e,t),div:(t,n)=>F(t*Bs(n,e),e),sqrN:e=>e*e,addN:(e,t)=>e+t,subN:(e,t)=>e-t,mulN:(e,t)=>e*t,inv:t=>Bs(t,e),sqrt:r.sqrt||(t=>(o||=Ws(e),o(s,t))),toBytes:e=>n?En(e,a):Mn(e,a),fromBytes:e=>{if(e.length!==a)throw Error(`Field.fromBytes: expected `+a+` bytes, got `+e.length);return n?kn(e):Hn(e)},invertBatch:e=>Js(s,e),cmov:(e,t,n)=>n?t:e});return Object.freeze(s)}function Qs(e){if(typeof e!=`bigint`)throw Error(`field order must be bigint`);let t=e.toString(2).length;return Math.ceil(t/8)}function $s(e){let t=Qs(e);return t+Math.ceil(t/2)}function ec(e,t,n=!1){let r=e.length,i=Qs(t),a=$s(t);if(r<16||r<a||r>1024)throw Error(`expected `+a+`-1024 bytes of input, got `+r);let o=F(n?kn(e):Hn(e),t-P)+P;return n?En(o,i):Mn(o,i)}var tc=BigInt(0),nc=BigInt(1);function rc(e,t){let n=t.negate();return e?n:t}function ic(e,t){if(!Number.isSafeInteger(e)||e<=0||e>t)throw Error(`invalid window size, expected [1..`+t+`], got W=`+e)}function ac(e,t){ic(e,t);let n=Math.ceil(t/e)+1,r=2**(e-1),i=2**e;return{windows:n,windowSize:r,mask:Dn(e),maxNumber:i,shiftBy:BigInt(e)}}function oc(e,t,n){let{windowSize:r,mask:i,maxNumber:a,shiftBy:o}=n,s=Number(e&i),c=e>>o;s>r&&(s-=a,c+=nc);let l=t*r,u=l+Math.abs(s)-1,d=s===0,f=s<0,p=t%2!=0;return{nextN:c,offset:u,isZero:d,isNeg:f,isNegF:p,offsetF:l}}function sc(e,t){if(!Array.isArray(e))throw Error(`array expected`);e.forEach((e,n)=>{if(!(e instanceof t))throw Error(`invalid point at index `+n)})}function cc(e,t){if(!Array.isArray(e))throw Error(`array of scalars expected`);e.forEach((e,n)=>{if(!t.isValid(e))throw Error(`invalid scalar at index `+n)})}var lc=new WeakMap,uc=new WeakMap;function dc(e){return uc.get(e)||1}function fc(e,t){return{constTimeNegate:rc,hasPrecomputes(e){return dc(e)!==1},unsafeLadder(t,n,r=e.ZERO){let i=t;for(;n>tc;)n&nc&&(r=r.add(i)),i=i.double(),n>>=nc;return r},precomputeWindow(e,n){let{windows:r,windowSize:i}=ac(n,t),a=[],o=e,s=o;for(let e=0;e<r;e++){s=o,a.push(s);for(let e=1;e<i;e++)s=s.add(o),a.push(s);o=s.double()}return a},wNAF(n,r,i){let a=e.ZERO,o=e.BASE,s=ac(n,t);for(let e=0;e<s.windows;e++){let{nextN:t,offset:n,isZero:c,isNeg:l,isNegF:u,offsetF:d}=oc(i,e,s);i=t,c?o=o.add(rc(u,r[d])):a=a.add(rc(l,r[n]))}return{p:a,f:o}},wNAFUnsafe(n,r,i,a=e.ZERO){let o=ac(n,t);for(let e=0;e<o.windows&&i!==tc;e++){let{nextN:t,offset:n,isZero:s,isNeg:c}=oc(i,e,o);if(i=t,!s){let e=r[n];a=a.add(c?e.negate():e)}}return a},getPrecomputes(e,t,n){let r=lc.get(t);return r||(r=this.precomputeWindow(t,e),e!==1&&lc.set(t,n(r))),r},wNAFCached(e,t,n){let r=dc(e);return this.wNAF(r,this.getPrecomputes(r,e,n),t)},wNAFCachedUnsafe(e,t,n,r){let i=dc(e);return i===1?this.unsafeLadder(e,t,r):this.wNAFUnsafe(i,this.getPrecomputes(i,e,n),t,r)},setWindowSize(e,n){ic(n,t),uc.set(e,n),lc.delete(e)}}}function pc(e,t,n,r){sc(n,e),cc(r,t);let i=n.length,a=r.length;if(i!==a)throw Error(`arrays of points and scalars must have equal length`);let o=e.ZERO,s=Pn(BigInt(i)),c=1;s>12?c=s-3:s>4?c=s-2:s>0&&(c=2);let l=Dn(c),u=Array(Number(l)+1).fill(o),d=Math.floor((t.BITS-1)/c)*c,f=o;for(let e=d;e>=0;e-=c){u.fill(o);for(let t=0;t<a;t++){let i=r[t],a=Number(i>>BigInt(e)&l);u[a]=u[a].add(n[t])}let t=o;for(let e=u.length-1,n=o;e>0;e--)n=n.add(u[e]),t=t.add(n);if(f=f.add(t),e!==0)for(let e=0;e<c;e++)f=f.double()}return f}function mc(e){return Ks(e.Fp),On(e,{n:`bigint`,h:`bigint`,Gx:`field`,Gy:`field`},{nBitLength:`isSafeInteger`,nByteLength:`isSafeInteger`}),Object.freeze({...Xs(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}function hc(e){e.lowS!==void 0&&Rn(`lowS`,e.lowS),e.prehash!==void 0&&Rn(`prehash`,e.prehash)}function gc(e){let t=mc(e);On(t,{a:`field`,b:`field`},{allowInfinityPoint:`boolean`,allowedPrivateKeyLengths:`array`,clearCofactor:`function`,fromBytes:`function`,isTorsionFree:`function`,toBytes:`function`,wrapPrivateKey:`boolean`});let{endo:n,Fp:r,a:i}=t;if(n){if(!r.eql(i,r.ZERO))throw Error(`invalid endo: CURVE.a must be 0`);if(typeof n!=`object`||typeof n.beta!=`bigint`||typeof n.splitScalar!=`function`)throw Error(`invalid endo: expected "beta": bigint and "splitScalar": function`)}return Object.freeze({...t})}var _c={Err:class extends Error{constructor(e=``){super(e)}},_tlv:{encode:(e,t)=>{let{Err:n}=_c;if(e<0||e>256)throw new n(`tlv.encode: wrong tag`);if(t.length&1)throw new n(`tlv.encode: unpadded data`);let r=t.length/2,i=Gn(r);if(i.length/2&128)throw new n(`tlv.encode: long form length too big`);let a=r>127?Gn(i.length/2|128):``;return Gn(e)+a+i+t},decode(e,t){let{Err:n}=_c,r=0;if(e<0||e>256)throw new n(`tlv.encode: wrong tag`);if(t.length<2||t[r++]!==e)throw new n(`tlv.decode: wrong tlv`);let i=t[r++],a=!!(i&128),o=0;if(!a)o=i;else{let e=i&127;if(!e)throw new n(`tlv.decode(long): indefinite length not supported`);if(e>4)throw new n(`tlv.decode(long): byte length is too big`);let a=t.subarray(r,r+e);if(a.length!==e)throw new n(`tlv.decode: length bytes not complete`);if(a[0]===0)throw new n(`tlv.decode(long): zero leftmost byte`);for(let e of a)o=o<<8|e;if(r+=e,o<128)throw new n(`tlv.decode(long): not minimal encoding`)}let s=t.subarray(r,r+o);if(s.length!==o)throw new n(`tlv.decode: wrong value length`);return{v:s,l:t.subarray(r+o)}}},_int:{encode(e){let{Err:t}=_c;if(e<yc)throw new t(`integer: negative integers are not allowed`);let n=Gn(e);if(Number.parseInt(n[0],16)&8&&(n=`00`+n),n.length&1)throw new t(`unexpected DER parsing assertion: unpadded hex`);return n},decode(e){let{Err:t}=_c;if(e[0]&128)throw new t(`invalid signature integer: negative`);if(e[0]===0&&!(e[1]&128))throw new t(`invalid signature integer: unnecessary leading zero`);return Hn(e)}},toSig(e){let{Err:t,_int:n,_tlv:r}=_c,i=An(`signature`,e),{v:a,l:o}=r.decode(48,i);if(o.length)throw new t(`invalid signature: left bytes after parsing`);let{v:s,l:c}=r.decode(2,a),{v:l,l:u}=r.decode(2,c);if(u.length)throw new t(`invalid signature: left bytes after parsing`);return{r:n.decode(s),s:n.decode(l)}},hexFromSig(e){let{_tlv:t,_int:n}=_c,r=t.encode(2,n.encode(e.r))+t.encode(2,n.encode(e.s));return t.encode(48,r)}};function vc(e,t){return zn(Mn(e,t))}var yc=BigInt(0),I=BigInt(1),bc=BigInt(2),xc=BigInt(3),Sc=BigInt(4);function Cc(e){let t=gc(e),{Fp:n}=t,r=Zs(t.n,t.nBitLength),i=t.toBytes||((e,t,r)=>{let i=t.toAffine();return In(Uint8Array.from([4]),n.toBytes(i.x),n.toBytes(i.y))}),a=t.fromBytes||(e=>{let t=e.subarray(1);return{x:n.fromBytes(t.subarray(0,n.BYTES)),y:n.fromBytes(t.subarray(n.BYTES,2*n.BYTES))}});function o(e){let{a:r,b:i}=t,a=n.sqr(e),o=n.mul(a,e);return n.add(n.add(o,n.mul(e,r)),i)}function s(e,t){let r=n.sqr(t),i=o(e);return n.eql(r,i)}if(!s(t.Gx,t.Gy))throw Error(`bad curve params: generator point`);let c=n.mul(n.pow(t.a,xc),Sc),l=n.mul(n.sqr(t.b),BigInt(27));if(n.is0(n.add(c,l)))throw Error(`bad curve params: a or b`);function u(e){return Bn(e,I,t.n)}function d(e){let{allowedPrivateKeyLengths:n,nByteLength:r,wrapPrivateKey:i,n:a}=t;if(n&&typeof e!=`bigint`){if(Ln(e)&&(e=zn(e)),typeof e!=`string`||!n.includes(e.length))throw Error(`invalid private key`);e=e.padStart(r*2,`0`)}let o;try{o=typeof e==`bigint`?e:Hn(An(`private key`,e,r))}catch{throw Error(`invalid private key, expected hex or `+r+` bytes, got `+typeof e)}return i&&(o=F(o,a)),Un(`private key`,o,I,a),o}function f(e){if(!(e instanceof h))throw Error(`ProjectivePoint expected`)}let p=Nn((e,t)=>{let{px:r,py:i,pz:a}=e;if(n.eql(a,n.ONE))return{x:r,y:i};let o=e.is0();t??=o?n.ONE:n.inv(a);let s=n.mul(r,t),c=n.mul(i,t),l=n.mul(a,t);if(o)return{x:n.ZERO,y:n.ZERO};if(!n.eql(l,n.ONE))throw Error(`invZ was invalid`);return{x:s,y:c}}),m=Nn(e=>{if(e.is0()){if(t.allowInfinityPoint&&!n.is0(e.py))return;throw Error(`bad point: ZERO`)}let{x:r,y:i}=e.toAffine();if(!n.isValid(r)||!n.isValid(i))throw Error(`bad point: x or y not FE`);if(!s(r,i))throw Error(`bad point: equation left != right`);if(!e.isTorsionFree())throw Error(`bad point: not in prime-order subgroup`);return!0});class h{constructor(e,t,r){if(e==null||!n.isValid(e))throw Error(`x required`);if(t==null||!n.isValid(t)||n.is0(t))throw Error(`y required`);if(r==null||!n.isValid(r))throw Error(`z required`);this.px=e,this.py=t,this.pz=r,Object.freeze(this)}static fromAffine(e){let{x:t,y:r}=e||{};if(!e||!n.isValid(t)||!n.isValid(r))throw Error(`invalid affine point`);if(e instanceof h)throw Error(`projective point not allowed`);let i=e=>n.eql(e,n.ZERO);return i(t)&&i(r)?h.ZERO:new h(t,r,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(e){let t=Js(n,e.map(e=>e.pz));return e.map((e,n)=>e.toAffine(t[n])).map(h.fromAffine)}static fromHex(e){let t=h.fromAffine(a(An(`pointHex`,e)));return t.assertValidity(),t}static fromPrivateKey(e){return h.BASE.multiply(d(e))}static msm(e,t){return pc(h,r,e,t)}_setWindowSize(e){v.setWindowSize(this,e)}assertValidity(){m(this)}hasEvenY(){let{y:e}=this.toAffine();if(n.isOdd)return!n.isOdd(e);throw Error(`Field doesn't support isOdd`)}equals(e){f(e);let{px:t,py:r,pz:i}=this,{px:a,py:o,pz:s}=e,c=n.eql(n.mul(t,s),n.mul(a,i)),l=n.eql(n.mul(r,s),n.mul(o,i));return c&&l}negate(){return new h(this.px,n.neg(this.py),this.pz)}double(){let{a:e,b:r}=t,i=n.mul(r,xc),{px:a,py:o,pz:s}=this,c=n.ZERO,l=n.ZERO,u=n.ZERO,d=n.mul(a,a),f=n.mul(o,o),p=n.mul(s,s),m=n.mul(a,o);return m=n.add(m,m),u=n.mul(a,s),u=n.add(u,u),c=n.mul(e,u),l=n.mul(i,p),l=n.add(c,l),c=n.sub(f,l),l=n.add(f,l),l=n.mul(c,l),c=n.mul(m,c),u=n.mul(i,u),p=n.mul(e,p),m=n.sub(d,p),m=n.mul(e,m),m=n.add(m,u),u=n.add(d,d),d=n.add(u,d),d=n.add(d,p),d=n.mul(d,m),l=n.add(l,d),p=n.mul(o,s),p=n.add(p,p),d=n.mul(p,m),c=n.sub(c,d),u=n.mul(p,f),u=n.add(u,u),u=n.add(u,u),new h(c,l,u)}add(e){f(e);let{px:r,py:i,pz:a}=this,{px:o,py:s,pz:c}=e,l=n.ZERO,u=n.ZERO,d=n.ZERO,p=t.a,m=n.mul(t.b,xc),g=n.mul(r,o),_=n.mul(i,s),v=n.mul(a,c),y=n.add(r,i),b=n.add(o,s);y=n.mul(y,b),b=n.add(g,_),y=n.sub(y,b),b=n.add(r,a);let x=n.add(o,c);return b=n.mul(b,x),x=n.add(g,v),b=n.sub(b,x),x=n.add(i,a),l=n.add(s,c),x=n.mul(x,l),l=n.add(_,v),x=n.sub(x,l),d=n.mul(p,b),l=n.mul(m,v),d=n.add(l,d),l=n.sub(_,d),d=n.add(_,d),u=n.mul(l,d),_=n.add(g,g),_=n.add(_,g),v=n.mul(p,v),b=n.mul(m,b),_=n.add(_,v),v=n.sub(g,v),v=n.mul(p,v),b=n.add(b,v),g=n.mul(_,b),u=n.add(u,g),g=n.mul(x,b),l=n.mul(y,l),l=n.sub(l,g),g=n.mul(y,_),d=n.mul(x,d),d=n.add(d,g),new h(l,u,d)}subtract(e){return this.add(e.negate())}is0(){return this.equals(h.ZERO)}wNAF(e){return v.wNAFCached(this,e,h.normalizeZ)}multiplyUnsafe(e){let{endo:r,n:i}=t;Un(`scalar`,e,yc,i);let a=h.ZERO;if(e===yc)return a;if(this.is0()||e===I)return this;if(!r||v.hasPrecomputes(this))return v.wNAFCachedUnsafe(this,e,h.normalizeZ);let{k1neg:o,k1:s,k2neg:c,k2:l}=r.splitScalar(e),u=a,d=a,f=this;for(;s>yc||l>yc;)s&I&&(u=u.add(f)),l&I&&(d=d.add(f)),f=f.double(),s>>=I,l>>=I;return o&&(u=u.negate()),c&&(d=d.negate()),d=new h(n.mul(d.px,r.beta),d.py,d.pz),u.add(d)}multiply(e){let{endo:r,n:i}=t;Un(`scalar`,e,I,i);let a,o;if(r){let{k1neg:t,k1:i,k2neg:s,k2:c}=r.splitScalar(e),{p:l,f:u}=this.wNAF(i),{p:d,f}=this.wNAF(c);l=v.constTimeNegate(t,l),d=v.constTimeNegate(s,d),d=new h(n.mul(d.px,r.beta),d.py,d.pz),a=l.add(d),o=u.add(f)}else{let{p:t,f:n}=this.wNAF(e);a=t,o=n}return h.normalizeZ([a,o])[0]}multiplyAndAddUnsafe(e,t,n){let r=h.BASE,i=(e,t)=>t===yc||t===I||!e.equals(r)?e.multiplyUnsafe(t):e.multiply(t),a=i(this,t).add(i(e,n));return a.is0()?void 0:a}toAffine(e){return p(this,e)}isTorsionFree(){let{h:e,isTorsionFree:n}=t;if(e===I)return!0;if(n)return n(h,this);throw Error(`isTorsionFree() has not been declared for the elliptic curve`)}clearCofactor(){let{h:e,clearCofactor:n}=t;return e===I?this:n?n(h,this):this.multiplyUnsafe(t.h)}toRawBytes(e=!0){return Rn(`isCompressed`,e),this.assertValidity(),i(h,this,e)}toHex(e=!0){return Rn(`isCompressed`,e),zn(this.toRawBytes(e))}}h.BASE=new h(t.Gx,t.Gy,n.ONE),h.ZERO=new h(n.ZERO,n.ONE,n.ZERO);let{endo:g,nBitLength:_}=t,v=fc(h,g?Math.ceil(_/2):_);return{CURVE:t,ProjectivePoint:h,normPrivateKeyToScalar:d,weierstrassEquation:o,isWithinCurveOrder:u}}function wc(e){let t=mc(e);return On(t,{hash:`hash`,hmac:`function`,randomBytes:`function`},{bits2int:`function`,bits2int_modN:`function`,lowS:`boolean`}),Object.freeze({lowS:!0,...t})}function Tc(e){let t=wc(e),{Fp:n,n:r,nByteLength:i,nBitLength:a}=t,o=n.BYTES+1,s=2*n.BYTES+1;function c(e){return F(e,r)}function l(e){return Bs(e,r)}let{ProjectivePoint:u,normPrivateKeyToScalar:d,weierstrassEquation:f,isWithinCurveOrder:p}=Cc({...t,toBytes(e,t,r){let i=t.toAffine(),a=n.toBytes(i.x),o=In;return Rn(`isCompressed`,r),r?o(Uint8Array.from([t.hasEvenY()?2:3]),a):o(Uint8Array.from([4]),a,n.toBytes(i.y))},fromBytes(e){let t=e.length,r=e[0],i=e.subarray(1);if(t===o&&(r===2||r===3)){let e=Hn(i);if(!Bn(e,I,n.ORDER))throw Error(`Point is not on curve`);let t=f(e),a;try{a=n.sqrt(t)}catch(e){let t=e instanceof Error?`: `+e.message:``;throw Error(`Point is not on curve`+t)}let o=(a&I)===I;return(r&1)==1!==o&&(a=n.neg(a)),{x:e,y:a}}else if(t===s&&r===4)return{x:n.fromBytes(i.subarray(0,n.BYTES)),y:n.fromBytes(i.subarray(n.BYTES,2*n.BYTES))};else{let e=o,n=s;throw Error(`invalid Point, expected length of `+e+`, or uncompressed `+n+`, got `+t)}}});function m(e){return e>r>>I}function h(e){return m(e)?c(-e):e}let g=(e,t,n)=>Hn(e.slice(t,n));class _{constructor(e,t,n){Un(`r`,e,I,r),Un(`s`,t,I,r),this.r=e,this.s=t,n!=null&&(this.recovery=n),Object.freeze(this)}static fromCompact(e){let t=i;return e=An(`compactSignature`,e,t*2),new _(g(e,0,t),g(e,t,2*t))}static fromDER(e){let{r:t,s:n}=_c.toSig(An(`DER`,e));return new _(t,n)}assertValidity(){}addRecoveryBit(e){return new _(this.r,this.s,e)}recoverPublicKey(e){let{r,s:i,recovery:a}=this,o=C(An(`msgHash`,e));if(a==null||![0,1,2,3].includes(a))throw Error(`recovery id invalid`);let s=a===2||a===3?r+t.n:r;if(s>=n.ORDER)throw Error(`recovery id 2 or 3 invalid`);let d=a&1?`03`:`02`,f=u.fromHex(d+vc(s,n.BYTES)),p=l(s),m=c(-o*p),h=c(i*p),g=u.BASE.multiplyAndAddUnsafe(f,m,h);if(!g)throw Error(`point at infinify`);return g.assertValidity(),g}hasHighS(){return m(this.s)}normalizeS(){return this.hasHighS()?new _(this.r,c(-this.s),this.recovery):this}toDERRawBytes(){return jn(this.toDERHex())}toDERHex(){return _c.hexFromSig(this)}toCompactRawBytes(){return jn(this.toCompactHex())}toCompactHex(){let e=i;return vc(this.r,e)+vc(this.s,e)}}let v={isValidPrivateKey(e){try{return d(e),!0}catch{return!1}},normPrivateKeyToScalar:d,randomPrivateKey:()=>{let e=$s(t.n);return ec(t.randomBytes(e),t.n)},precompute(e=8,t=u.BASE){return t._setWindowSize(e),t.multiply(BigInt(3)),t}};function y(e,t=!0){return u.fromPrivateKey(e).toRawBytes(t)}function b(e){if(typeof e==`bigint`)return!1;if(e instanceof u)return!0;let r=An(`key`,e).length,a=n.BYTES,o=a+1,s=2*a+1;if(!(t.allowedPrivateKeyLengths||i===o))return r===o||r===s}function x(e,t,n=!0){if(b(e)===!0)throw Error(`first arg must be private key`);if(b(t)===!1)throw Error(`second arg must be public key`);return u.fromHex(t).multiply(d(e)).toRawBytes(n)}let S=t.bits2int||function(e){if(e.length>8192)throw Error(`input is too large`);let t=Hn(e),n=e.length*8-a;return n>0?t>>BigInt(n):t},C=t.bits2int_modN||function(e){return c(S(e))},w=Dn(a);function ee(e){return Un(`num < 2^`+a,e,yc,w),Mn(e,i)}function T(e,r,i=E){if([`recovered`,`canonical`].some(e=>e in i))throw Error(`sign() legacy options not supported`);let{hash:a,randomBytes:o}=t,{lowS:s,prehash:f,extraEntropy:g}=i;s??=!0,e=An(`msgHash`,e),hc(i),f&&(e=An(`prehashed msgHash`,a(e)));let v=C(e),y=d(r),b=[ee(y),ee(v)];if(g!=null&&g!==!1){let e=g===!0?o(n.BYTES):g;b.push(An(`extraEntropy`,e))}let x=In(...b),w=v;function T(e){let t=S(e);if(!p(t))return;let n=l(t),r=u.BASE.multiply(t).toAffine(),i=c(r.x);if(i===yc)return;let a=c(n*c(w+i*y));if(a===yc)return;let o=(r.x===i?0:2)|Number(r.y&I),d=a;return s&&m(a)&&(d=h(a),o^=1),new _(i,d,o)}return{seed:x,k2sig:T}}let E={lowS:t.lowS,prehash:!1},te={lowS:t.lowS,prehash:!1};function ne(e,n,r=E){let{seed:i,k2sig:a}=T(e,n,r),o=t;return Wn(o.hash.outputLen,o.nByteLength,o.hmac)(i,a)}u.BASE._setWindowSize(8);function re(e,n,r,i=te){let a=e;n=An(`msgHash`,n),r=An(`publicKey`,r);let{lowS:o,prehash:s,format:d}=i;if(hc(i),`strict`in i)throw Error(`options.strict was renamed to lowS`);if(d!==void 0&&d!==`compact`&&d!==`der`)throw Error(`format must be compact or der`);let f=typeof a==`string`||Ln(a),p=!f&&!d&&typeof a==`object`&&!!a&&typeof a.r==`bigint`&&typeof a.s==`bigint`;if(!f&&!p)throw Error(`invalid signature, expected Uint8Array, hex string or Signature instance`);let m,h;try{if(p&&(m=new _(a.r,a.s)),f){try{d!==`compact`&&(m=_.fromDER(a))}catch(e){if(!(e instanceof _c.Err))throw e}!m&&d!==`der`&&(m=_.fromCompact(a))}h=u.fromHex(r)}catch{return!1}if(!m||o&&m.hasHighS())return!1;s&&(n=t.hash(n));let{r:g,s:v}=m,y=C(n),b=l(v),x=c(y*b),S=c(g*b),w=u.BASE.multiplyAndAddUnsafe(h,x,S)?.toAffine();return w?c(w.x)===g:!1}return{CURVE:t,getPublicKey:y,getSharedSecret:x,sign:ne,verify:re,ProjectivePoint:u,Signature:_,utils:v}}function Ec(e,t){let n=e.ORDER,r=yc;for(let e=n-I;e%bc===yc;e/=bc)r+=I;let i=r,a=bc<<i-I-I,o=a*bc,s=(n-I)/o,c=(s-I)/bc,l=o-I,u=a,d=e.pow(t,s),f=e.pow(t,(s+I)/bc),p=(t,n)=>{let r=d,a=e.pow(n,l),o=e.sqr(a);o=e.mul(o,n);let s=e.mul(t,o);s=e.pow(s,c),s=e.mul(s,a),a=e.mul(s,n),o=e.mul(s,t);let p=e.mul(o,a);s=e.pow(p,u);let m=e.eql(s,e.ONE);a=e.mul(o,f),s=e.mul(p,r),o=e.cmov(a,o,m),p=e.cmov(s,p,m);for(let t=i;t>I;t--){let n=t-bc;n=bc<<n-I;let i=e.pow(p,n),s=e.eql(i,e.ONE);a=e.mul(o,r),r=e.mul(r,r),i=e.mul(p,r),o=e.cmov(a,o,s),p=e.cmov(i,p,s)}return{isValid:m,value:o}};if(e.ORDER%Sc===xc){let n=(e.ORDER-xc)/Sc,r=e.sqrt(e.neg(t));p=(t,i)=>{let a=e.sqr(i),o=e.mul(t,i);a=e.mul(a,o);let s=e.pow(a,n);s=e.mul(s,o);let c=e.mul(s,r),l=e.mul(e.sqr(s),i),u=e.eql(l,t);return{isValid:u,value:e.cmov(c,s,u)}}}return p}function Dc(e,t){if(Ks(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw Error(`mapToCurveSimpleSWU: invalid opts`);let n=Ec(e,t.Z);if(!e.isOdd)throw Error(`Fp.isOdd is not implemented!`);return r=>{let i,a,o,s,c,l,u,d;i=e.sqr(r),i=e.mul(i,t.Z),a=e.sqr(i),a=e.add(a,i),o=e.add(a,e.ONE),o=e.mul(o,t.B),s=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),s=e.mul(s,t.A),a=e.sqr(o),l=e.sqr(s),c=e.mul(l,t.A),a=e.add(a,c),a=e.mul(a,o),l=e.mul(l,s),c=e.mul(l,t.B),a=e.add(a,c),u=e.mul(i,o);let{isValid:f,value:p}=n(a,l);d=e.mul(i,r),d=e.mul(d,p),u=e.cmov(u,o,f),d=e.cmov(d,p,f);let m=e.isOdd(r)===e.isOdd(d);d=e.cmov(e.neg(d),d,m);let h=Js(e,[s],!0)[0];return u=e.mul(u,h),{x:u,y:d}}}function Oc(e){return{hash:e,hmac:(t,...n)=>Lo(e,t,Sn(...n)),randomBytes:bn}}function kc(e,t){let n=t=>Tc({...e,...Oc(t)});return{...n(t),create:n}}var Ac=Hn;function jc(e,t){if(Nc(e),Nc(t),e<0||e>=1<<8*t)throw Error(`invalid I2OSP input: `+e);let n=Array.from({length:t}).fill(0);for(let r=t-1;r>=0;r--)n[r]=e&255,e>>>=8;return new Uint8Array(n)}function Mc(e,t){let n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r]^t[r];return n}function Nc(e){if(!Number.isSafeInteger(e))throw Error(`number expected`)}function Pc(e,t,n,r){Vn(e),Vn(t),Nc(n),t.length>255&&(t=r(In(Jn(`H2C-OVERSIZE-DST-`),t)));let{outputLen:i,blockLen:a}=r,o=Math.ceil(n/i);if(n>65535||o>255)throw Error(`expand_message_xmd: invalid lenInBytes`);let s=In(t,jc(t.length,1)),c=jc(0,a),l=jc(n,2),u=Array(o),d=r(In(c,e,l,jc(0,1),s));u[0]=r(In(d,jc(1,1),s));for(let e=1;e<=o;e++)u[e]=r(In(Mc(d,u[e-1]),jc(e+1,1),s));return In(...u).slice(0,n)}function Fc(e,t,n,r,i){if(Vn(e),Vn(t),Nc(n),t.length>255){let e=Math.ceil(2*r/8);t=i.create({dkLen:e}).update(Jn(`H2C-OVERSIZE-DST-`)).update(t).digest()}if(n>65535||t.length>255)throw Error(`expand_message_xof: invalid lenInBytes`);return i.create({dkLen:n}).update(e).update(jc(n,2)).update(t).update(jc(t.length,1)).digest()}function Ic(e,t,n){On(n,{DST:`stringOrUint8Array`,p:`bigint`,m:`isSafeInteger`,k:`isSafeInteger`,hash:`hash`});let{p:r,k:i,m:a,hash:o,expand:s,DST:c}=n;Vn(e),Nc(t);let l=typeof c==`string`?Jn(c):c,u=r.toString(2).length,d=Math.ceil((u+i)/8),f=t*a*d,p;if(s===`xmd`)p=Pc(e,l,f,o);else if(s===`xof`)p=Fc(e,l,f,i,o);else if(s===`_internal_pass`)p=e;else throw Error(`expand must be "xmd" or "xof"`);let m=Array(t);for(let e=0;e<t;e++){let t=Array(a);for(let n=0;n<a;n++){let i=d*(n+e*a);t[n]=F(Ac(p.subarray(i,i+d)),r)}m[e]=t}return m}function Lc(e,t){let n=t.map(e=>Array.from(e).reverse());return(t,r)=>{let[i,a,o,s]=n.map(n=>n.reduce((n,r)=>e.add(e.mul(n,t),r))),[c,l]=Js(e,[a,s],!0);return t=e.mul(i,c),r=e.mul(r,e.mul(o,l)),{x:t,y:r}}}function Rc(e,t,n){if(typeof t!=`function`)throw Error(`mapToCurve() must be defined`);function r(n){return e.fromAffine(t(n))}function i(t){let n=t.clearCofactor();return n.equals(e.ZERO)?e.ZERO:(n.assertValidity(),n)}return{defaults:n,hashToCurve(e,t){let a=Ic(e,2,{...n,DST:n.DST,...t}),o=r(a[0]),s=r(a[1]);return i(o.add(s))},encodeToCurve(e,t){return i(r(Ic(e,1,{...n,DST:n.encodeDST,...t})[0]))},mapToCurve(e){if(!Array.isArray(e))throw Error(`expected array of bigints`);for(let t of e)if(typeof t!=`bigint`)throw Error(`expected array of bigints`);return i(r(e))}}}var zc=Xn({secp256k1:()=>Jc,secp256k1_hasher:()=>Zc}),Bc=BigInt(`0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f`),Vc=BigInt(`0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141`),Hc=BigInt(0),Uc=BigInt(1),Wc=BigInt(2),Gc=(e,t)=>(e+t/Wc)/t;function Kc(e){let t=Bc,n=BigInt(3),r=BigInt(6),i=BigInt(11),a=BigInt(22),o=BigInt(23),s=BigInt(44),c=BigInt(88),l=e*e*e%t,u=l*l*e%t,d=zs(zs(zs(u,n,t)*u%t,n,t)*u%t,Wc,t)*l%t,f=zs(d,i,t)*d%t,p=zs(f,a,t)*f%t,m=zs(p,s,t)*p%t,h=zs(zs(zs(zs(zs(zs(m,c,t)*m%t,s,t)*p%t,n,t)*u%t,o,t)*f%t,r,t)*l%t,Wc,t);if(!qc.eql(qc.sqr(h),e))throw Error(`Cannot find square root`);return h}var qc=Zs(Bc,void 0,void 0,{sqrt:Kc}),Jc=kc({a:Hc,b:BigInt(7),Fp:qc,n:Vc,Gx:BigInt(`55066263022277343669578718895168534326250603453777594175500187360389116729240`),Gy:BigInt(`32670510020758816978083085130507043184471273380659243275938904335757337482424`),h:BigInt(1),lowS:!0,endo:{beta:BigInt(`0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee`),splitScalar:e=>{let t=Vc,n=BigInt(`0x3086d221a7d46bcde86c90e49284eb15`),r=-Uc*BigInt(`0xe4437ed6010e88286f547fa90abfe4c3`),i=BigInt(`0x114ca50f7a8e2f3f657c1108d9d44cfd8`),a=n,o=BigInt(`0x100000000000000000000000000000000`),s=Gc(a*e,t),c=Gc(-r*e,t),l=F(e-s*n-c*i,t),u=F(-s*r-c*a,t),d=l>o,f=u>o;if(d&&(l=t-l),f&&(u=t-u),l>o||u>o)throw Error(`splitScalar: Endomorphism failed, k=`+e);return{k1neg:d,k1:l,k2neg:f,k2:u}}}},ei);Jc.ProjectivePoint,Jc.utils.randomPrivateKey;var Yc=Lc(qc,[[`0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7`,`0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581`,`0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262`,`0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c`],[`0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b`,`0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14`,`0x0000000000000000000000000000000000000000000000000000000000000001`],[`0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c`,`0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3`,`0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931`,`0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84`],[`0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b`,`0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573`,`0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f`,`0x0000000000000000000000000000000000000000000000000000000000000001`]].map(e=>e.map(e=>BigInt(e)))),Xc=Dc(qc,{A:BigInt(`0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533`),B:BigInt(`1771`),Z:qc.create(BigInt(`-11`))}),Zc=Rc(Jc.ProjectivePoint,e=>{let{x:t,y:n}=Xc(qc.create(e[0]));return Yc(t,n)},{DST:`secp256k1_XMD:SHA-256_SSWU_RO_`,encodeDST:`secp256k1_XMD:SHA-256_SSWU_NU_`,p:qc.ORDER,m:1,k:128,expand:`xmd`,hash:ei});Zc.hashToCurve,Zc.encodeToCurve;function Qc(e,t={}){let{recovered:n}=t;if(e.r===void 0||e.s===void 0||n&&e.yParity===void 0)throw new sl({signature:e});if(e.r<0n||e.r>Yo)throw new cl({value:e.r});if(e.s<0n||e.s>Yo)throw new ll({value:e.s});if(typeof e.yParity==`number`&&e.yParity!==0&&e.yParity!==1)throw new ul({value:e.yParity})}function $c(e){return el(m(e))}function el(e){if(e.length!==130&&e.length!==132)throw new ol({signature:e});let t=BigInt(le(e,0,32)),n=BigInt(le(e,32,64)),r=(()=>{let t=Number(`0x${e.slice(130)}`);if(!Number.isNaN(t))try{return al(t)}catch{throw new ul({value:t})}})();return r===void 0?{r:t,s:n}:{r:t,s:n,yParity:r}}function tl(e){if(e.r!==void 0&&e.s!==void 0)return nl(e)}function nl(e){let t=typeof e==`string`?el(e):e instanceof Uint8Array?$c(e):typeof e.r==`string`?il(e):e.v?rl(e):{r:e.r,s:e.s,...e.yParity===void 0?{}:{yParity:e.yParity}};return Qc(t),t}function rl(e){return{r:e.r,s:e.s,yParity:al(e.v)}}function il(e){let t=(()=>{let t=e.v?Number(e.v):void 0,n=e.yParity?Number(e.yParity):void 0;if(typeof t==`number`&&typeof n!=`number`&&(n=al(t)),typeof n!=`number`)throw new ul({value:e.yParity});return n})();return{r:BigInt(e.r),s:BigInt(e.s),yParity:t}}function al(e){if(e===0||e===27)return 0;if(e===1||e===28)return 1;if(e>=35)return+(e%2==0);throw new dl({value:e})}var ol=class extends D{constructor({signature:e}){super(`Value \`${e}\` is an invalid signature size.`,{metaMessages:[`Expected: 64 bytes or 65 bytes.`,`Received ${xt(nn(e))} bytes.`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidSerializedSizeError`})}},sl=class extends D{constructor({signature:e}){super(`Signature \`${b(e)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.MissingPropertiesError`})}},cl=class extends D{constructor({value:e}){super(`Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidRError`})}},ll=class extends D{constructor({value:e}){super(`Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidSError`})}},ul=class extends D{constructor({value:e}){super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidYParityError`})}},dl=class extends D{constructor({value:e}){super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`Signature.InvalidVError`})}};function fl(e,t={}){return typeof e.chainId==`string`?pl(e):{...e,...t.signature}}function pl(e){let{address:t,chainId:n,nonce:r}=e,i=tl(e);return{address:t,chainId:Number(n),nonce:BigInt(r),...i}}var ml=Es(`(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data`);function hl(e){if(typeof e==`string`){if(le(e,-32)!==`0x8010801080108010801080108010801080108010801080108010801080108010`)throw new vl(e)}else Qc(e.authorization)}function gl(e){hl(e);let t=fe(le(e,-64,-32)),n=le(e,-t-64,-64),r=le(e,0,-t-64),[i,a,o]=Cs(ml,n);return{authorization:fl({address:i.delegation,chainId:Number(i.chainId),nonce:i.nonce,yParity:i.yParity,r:i.r,s:i.s}),signature:r,...o&&o!==`0x`?{data:o,to:a}:{}}}function _l(e){try{return hl(e),!0}catch{return!1}}var vl=class extends D{constructor(e){super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`SignatureErc8010.InvalidWrappedSignatureError`})}};function yl(e){return e.map(e=>({...e,value:BigInt(e.value)}))}function bl(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?Ae(e.nonce):void 0,storageProof:e.storageProof?yl(e.storageProof):void 0}}async function xl(e,{address:t,blockNumber:n,blockTag:r,storageKeys:i}){let a=r??`latest`,o=n===void 0?void 0:O(n);return bl(await e.request({method:`eth_getProof`,params:[t,i,o||a]}))}async function Sl(e,{address:t,blockNumber:n,blockTag:r=`latest`,slot:i}){let a=n===void 0?void 0:O(n);return await e.request({method:`eth_getStorageAt`,params:[t,i,a||r]})}async function Cl(e,{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:a,sender:o,nonce:c}){let l=r||`latest`,u=n===void 0?void 0:O(n),d=null;if(i?d=await e.request({method:`eth_getTransactionByHash`,params:[i]},{dedupe:!0}):t?d=await e.request({method:`eth_getTransactionByBlockHashAndIndex`,params:[t,O(a)]},{dedupe:!0}):(u||l)&&typeof a==`number`?d=await e.request({method:`eth_getTransactionByBlockNumberAndIndex`,params:[u||l,O(a)]},{dedupe:!!u}):o&&typeof c==`number`&&(d=await e.request({method:`eth_getTransactionBySenderAndNonce`,params:[o,O(c)]},{dedupe:!0})),!d)throw new s({blockHash:t,blockNumber:n,blockTag:l,hash:i,index:a});return(e.chain?.formatters?.transaction?.format||Nr)(d,`getTransaction`)}async function wl(e,{hash:t,transactionReceipt:n}){let[r,i]=await Promise.all([M(e,Wi,`getBlockNumber`)({}),t?M(e,Cl,`getTransaction`)({hash:t}):void 0]),a=n?.blockNumber||i?.blockNumber;return a?r-a+1n:0n}async function Tl(e,{hash:t}){let n=await e.request({method:`eth_getTransactionReceipt`,params:[t]},{dedupe:!0});if(!n)throw new Le({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||ia)(n,`getTransactionReceipt`)}async function El(e,t){let{account:n,authorizationList:r,allowFailure:i=!0,blockNumber:a,blockOverrides:o,blockTag:s,stateOverride:c}=t,l=t.contracts,{batchSize:u=t.batchSize??1024,deployless:d=t.deployless??!1}=typeof e.batch?.multicall==`object`?e.batch.multicall:{},f=(()=>{if(t.multicallAddress)return t.multicallAddress;if(d)return null;if(e.chain)return Gt({blockNumber:a,chain:e.chain,contract:`multicall3`});throw Error(`client chain not configured. multicallAddress is required.`)})(),p=[[]],m=0,h=0;for(let e=0;e<l.length;e++){let{abi:t,address:r,args:a,functionName:o}=l[e];try{let e=Se({abi:t,args:a,functionName:o});h+=(e.length-2)/2,u>0&&h>u&&p[m].length>0&&(m++,h=(e.length-2)/2,p[m]=[]),p[m]=[...p[m],{allowFailure:!0,callData:e,target:r}]}catch(e){let s=mr(e,{abi:t,address:r,args:a,docsPath:`/docs/contract/multicall`,functionName:o,sender:n});if(!i)throw s;p[m]=[...p[m],{allowFailure:!0,callData:`0x`,target:r}]}}let g=await Promise.allSettled(p.map(t=>M(e,ji,`readContract`)({...f===null?{code:Lt}:{address:f},abi:qe,account:n,args:[t],authorizationList:r,blockNumber:a,blockOverrides:o,blockTag:s,functionName:`aggregate3`,stateOverride:c}))),_=[];for(let e=0;e<g.length;e++){let t=g[e];if(t.status===`rejected`){if(!i)throw t.reason;for(let n=0;n<p[e].length;n++)_.push({status:`failure`,error:t.reason,result:void 0});continue}let n=t.value;for(let t=0;t<n.length;t++){let{returnData:r,success:a}=n[t],{callData:o}=p[e][t],{abi:s,address:c,functionName:u,args:d}=l[_.length];try{if(o===`0x`)throw new ge;if(!a)throw new te({data:r});let e=Bt({abi:s,args:d,data:r,functionName:u});_.push(i?{result:e,status:`success`}:e)}catch(e){let t=mr(e,{abi:s,address:c,args:d,docsPath:`/docs/contract/multicall`,functionName:u});if(!i)throw t;_.push({error:t,result:void 0,status:`failure`})}}}if(_.length!==l.length)throw new v(`multicall results mismatch`);return _}async function Dl(n,r){let{blockNumber:i,blockTag:a=n.experimental_blockTag??`latest`,blocks:o,returnFullTransactions:s,traceTransfers:c,validation:l}=r;try{let e=[];for(let n of o){let r=n.blockOverrides?on(n.blockOverrides):void 0,i=n.calls.map(e=>{let n=e,r=n.account?t(n.account):void 0,i=n.abi?Se(n):n.data,a={...n,account:r,data:n.dataSuffix?Ft([i||`0x`,n.dataSuffix]):i,from:n.from??r?.address};return Ue(a),Ge(a)}),a=n.stateOverrides?Ve(n.stateOverrides):void 0;e.push({blockOverrides:r,calls:i,stateOverrides:a})}let r=(typeof i==`bigint`?O(i):void 0)||a;return(await n.request({method:`eth_simulateV1`,params:[{blockStateCalls:e,returnFullTransactions:s,traceTransfers:c,validation:l},r]})).map((e,t)=>({...Fr(e),calls:e.calls.map((e,n)=>{let{abi:r,args:i,functionName:a,to:s}=o[t].calls[n],c=e.error?.data??e.returnData,l=BigInt(e.gasUsed),u=e.logs?.map(e=>Ci(e)),d=e.status===`0x1`?`success`:`failure`,f=r&&d===`success`&&c!==`0x`?Bt({abi:r,data:c,functionName:a}):null,p=(()=>{if(d===`success`)return;let e;if(c===`0x`?e=new ge:c&&(e=new te({data:c})),e)return mr(e,{abi:r??[],address:s??`0x`,args:i,functionName:a??`<unknown>`})})();return{data:c,gasUsed:l,logs:u,status:d,...d===`success`?{result:f}:{error:p}}})}))}catch(t){let n=t,r=e(n,{});throw r instanceof ct?n:r}}function Ol(e){let t=!0,n=``,r=0,i=``,a=!1;for(let o=0;o<e.length;o++){let s=e[o];if([`(`,`)`,`,`].includes(s)&&(t=!0),s===`(`&&r++,s===`)`&&r--,t){if(r===0){if(s===` `&&[`event`,`function`,`error`,``].includes(i))i=``;else if(i+=s,s===`)`){a=!0;break}continue}if(s===` `){e[o-1]!==`,`&&n!==`,`&&n!==`,(`&&(n=``,t=!1);continue}i+=s,n+=s}}if(!a)throw new D(`Unable to normalize signature.`);return i}function kl(e,t){let n=typeof e,r=t.type;switch(r){case`address`:return Ho(e,{strict:!1});case`bool`:return n===`boolean`;case`function`:return n===`string`;case`string`:return n===`string`;default:return r===`tuple`&&`components`in t?Object.values(t.components).every((t,n)=>kl(Object.values(e)[n],t)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n===`number`||n===`bigint`:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n===`string`||e instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(e)&&e.every(e=>kl(e,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,``)})):!1}}function Al(e,t,n){for(let r in e){let i=e[r],a=t[r];if(i.type===`tuple`&&a.type===`tuple`&&`components`in i&&`components`in a)return Al(i.components,a.components,n[r]);let o=[i.type,a.type];if(o.includes(`address`)&&o.includes(`bytes20`)||(o.includes(`address`)&&o.includes(`string`)||o.includes(`address`)&&o.includes(`bytes`))&&Ho(n[r],{strict:!1}))return o}}function jl(e,t={}){let{prepare:n=!0}=t,r=Array.isArray(e)||typeof e==`string`?ar(e):e;return{...r,...n?{hash:Fl(r)}:{}}}function Ml(e,t,n){let{args:r=[],prepare:i=!0}=n??{},a=ve(t,{strict:!1}),o=e.filter(e=>a?e.type===`function`||e.type===`error`?Nl(e)===le(t,0,4):e.type===`event`?Fl(e)===t:!1:`name`in e&&e.name===t);if(o.length===0)throw new Ll({name:t});if(o.length===1)return{...o[0],...i?{hash:Fl(o[0])}:{}};let s;for(let e of o)if(`inputs`in e){if(!r||r.length===0){if(!e.inputs||e.inputs.length===0)return{...e,...i?{hash:Fl(e)}:{}};continue}if(e.inputs&&e.inputs.length!==0&&e.inputs.length===r.length&&r.every((t,n)=>{let r=`inputs`in e&&e.inputs[n];return r?kl(t,r):!1})){if(s&&`inputs`in s&&s.inputs){let t=Al(e.inputs,s.inputs,r);if(t)throw new Il({abiItem:e,type:t[0]},{abiItem:s,type:t[1]})}s=e}}let c=(()=>{if(s)return s;let[e,...t]=o;return{...e,overloads:t}})();if(!c)throw new Ll({name:t});return{...c,...i?{hash:Fl(c)}:{}}}function Nl(...e){return le(Fl((()=>{if(Array.isArray(e[0])){let[t,n]=e;return Ml(t,n)}return e[0]})()),0,4)}function Pl(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return Ml(t,n)}return e[0]})();return Ol(typeof t==`string`?t:Vt(t))}function Fl(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return Ml(t,n)}return e[0]})();return typeof t!=`string`&&`hash`in t&&t.hash?t.hash:Ro(he(Pl(t)))}var Il=class extends D{constructor(e,t){super(`Found ambiguous types in overloaded ABI Items.`,{metaMessages:[`\`${e.type}\` in \`${Ol(Vt(e.abiItem))}\`, and`,`\`${t.type}\` in \`${Ol(Vt(t.abiItem))}\``,``,`These types encode differently and cannot be distinguished at runtime.`,`Remove one of the ambiguous items in the ABI.`]}),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiItem.AmbiguityError`})}},Ll=class extends D{constructor({name:e,data:t,type:n=`item`}){let r=e?` with name "${e}"`:t?` with data "${t}"`:``;super(`ABI ${n}${r} not found.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`AbiItem.NotFoundError`})}};function Rl(...e){let[t,n]=(()=>{if(Array.isArray(e[0])){let[t,n]=e;return[Bl(t),n]}return e})(),{bytecode:r,args:i}=n;return c(r,t.inputs?.length&&i?.length?ws(t.inputs,i):`0x`)}function zl(e){return jl(e)}function Bl(e){let t=e.find(e=>e.type===`constructor`);if(!t)throw new Ll({name:`constructor`});return t}function Vl(...e){let[t,n=[]]=(()=>{if(Array.isArray(e[0])){let[t,n,r]=e;return[Ul(t,n,{args:r}),r]}let[t,n]=e;return[t,n]})(),{overloads:r}=t,i=r?Ul([t,...r],t.name,{args:n}):t,a=Wl(i),o=n.length>0?ws(i.inputs,n):void 0;return o?c(a,o):a}function Hl(e,t={}){return jl(e,t)}function Ul(e,t,n){let r=Ml(e,t,n);if(r.type!==`function`)throw new Ll({name:t,type:`function`});return r}function Wl(e){return Nl(e)}var Gl=`0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,Kl=`0x0000000000000000000000000000000000000000`,ql=`0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033`;async function Jl(e,n){let{blockNumber:r,blockTag:i,calls:a,stateOverrides:o,traceAssetChanges:s,traceTransfers:c,validation:u}=n,d=n.account?t(n.account):void 0;if(s&&!d)throw new v("`account` is required when `traceAssetChanges` is true");let f=d?Rl(zl(`constructor(bytes, bytes)`),{bytecode:it,args:[ql,Vl(Hl(`function getBalance(address)`),[d.address])]}):void 0,p=s?await Promise.all(n.calls.map(async t=>{if(!t.data&&!t.abi)return;let{accessList:n}=await Ga(e,{account:d.address,...t,data:t.abi?Se(t):t.data});return n.map(({address:e,storageKeys:t})=>t.length>0?e:null)})).then(e=>e.flat().filter(Boolean)):[],m=await Dl(e,{blockNumber:r,blockTag:i,blocks:[...s?[{calls:[{data:f}],stateOverrides:o},{calls:p.map((e,t)=>({abi:[Hl(`function balanceOf(address) returns (uint256)`)],functionName:`balanceOf`,args:[d.address],to:e,from:Kl,nonce:t})),stateOverrides:[{address:Kl,nonce:0}]}]:[],{calls:[...a,{to:Kl}].map(e=>({...e,from:d?.address})),stateOverrides:o},...s?[{calls:[{data:f}]},{calls:p.map((e,t)=>({abi:[Hl(`function balanceOf(address) returns (uint256)`)],functionName:`balanceOf`,args:[d.address],to:e,from:Kl,nonce:t})),stateOverrides:[{address:Kl,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Hl(`function decimals() returns (uint256)`)],functionName:`decimals`,from:Kl,nonce:t})),stateOverrides:[{address:Kl,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Hl(`function tokenURI(uint256) returns (string)`)],functionName:`tokenURI`,args:[0n],from:Kl,nonce:t})),stateOverrides:[{address:Kl,nonce:0}]},{calls:p.map((e,t)=>({to:e,abi:[Hl(`function symbol() returns (string)`)],functionName:`symbol`,from:Kl,nonce:t})),stateOverrides:[{address:Kl,nonce:0}]}]:[]],traceTransfers:c,validation:u}),h=s?m[2]:m[0],[g,_,,y,b,x,S,C]=s?m:[],{calls:w,...ee}=h,T=w.slice(0,-1)??[],E=g?.calls??[],te=_?.calls??[],ne=[...E,...te].map(e=>e.status===`success`?l(e.data):null),re=y?.calls??[],ie=b?.calls??[],D=[...re,...ie].map(e=>e.status===`success`?l(e.data):null),ae=(x?.calls??[]).map(e=>e.status===`success`?e.result:null),oe=(C?.calls??[]).map(e=>e.status===`success`?e.result:null),se=(S?.calls??[]).map(e=>e.status===`success`?e.result:null),ce=[];for(let[e,t]of D.entries()){let n=ne[e];if(typeof t!=`bigint`||typeof n!=`bigint`)continue;let r=ae[e-1],i=oe[e-1],a=se[e-1],o=e===0?{address:Gl,decimals:18,symbol:`ETH`}:{address:p[e-1],decimals:a||r?Number(r??1):void 0,symbol:i??void 0};ce.some(e=>e.token.address===o.address)||ce.push({token:o,value:{pre:n,post:t,diff:t-n}})}return{assetChanges:ce,block:ee,results:T}}var Yl=`0x6492649264926492649264926492649264926492649264926492649264926492`;function Xl(e){if(le(e,-32)!==`0x6492649264926492649264926492649264926492649264926492649264926492`)throw new $l(e)}function Zl(e){let{data:t,signature:n,to:r}=e;return c(ws(Es(`address, bytes, bytes`),[r,t,n]),Yl)}function Ql(e){try{return Xl(e),!0}catch{return!1}}var $l=class extends D{constructor(e){super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),Object.defineProperty(this,`name`,{enumerable:!0,configurable:!0,writable:!0,value:`SignatureErc6492.InvalidWrappedSignatureError`})}};function eu({r:e,s:t,to:n=`hex`,v:r,yParity:i}){let a=(()=>{if(i===0||i===1)return i;if(r&&(r===27n||r===28n||r>=35n))return+(r%2n==0n);throw Error("Invalid `v` or `yParity` value")})(),o=`0x${new Jc.Signature(l(e),l(t)).toCompactHex()}${a===0?`1b`:`1c`}`;return n===`hex`?o:pt(o)}async function tu(e,t){let{address:n,chain:r=e.chain,hash:i,erc6492VerifierAddress:a=t.universalSignatureVerifierAddress??r?.contracts?.erc6492Verifier?.address,multicallAddress:o=t.multicallAddress??r?.contracts?.multicall3?.address}=t;if(r?.verifyHash)return await r.verifyHash(e,t);let s=(()=>{let e=t.signature;return ce(e)?e:typeof e==`object`&&`r`in e&&`s`in e?eu(e):un(e)})();try{return _l(s)?await nu(e,{...t,multicallAddress:o,signature:s}):await ru(e,{...t,verifierAddress:a,signature:s})}catch(e){try{if(ne(Zt(n),await vr({hash:i,signature:s})))return!0}catch{}if(e instanceof au)return!1;throw e}}async function nu(e,t){let{address:n,blockNumber:r,blockTag:i,hash:a,multicallAddress:o}=t,{authorization:s,data:c,signature:l,to:u}=gl(t.signature);if(await Qa(e,{address:n,blockNumber:r,blockTag:i})===Kt([`0xef0100`,s.address]))return await iu(e,{address:n,blockNumber:r,blockTag:i,hash:a,signature:l});let d={address:s.address,chainId:Number(s.chainId),nonce:Number(s.nonce),r:O(s.r,{size:32}),s:O(s.s,{size:32}),yParity:s.yParity};if(!await oo({address:n,authorization:d}))throw new au;let f=await M(e,ji,`readContract`)({...o?{address:o}:{code:Lt},authorizationList:[d],abi:qe,blockNumber:r,blockTag:`pending`,functionName:`aggregate3`,args:[[...c?[{allowFailure:!0,target:u??n,callData:c}]:[],{allowFailure:!0,target:n,callData:Se({abi:ht,functionName:`isValidSignature`,args:[a,l]})}]]});if((f[f.length-1]?.returnData)?.startsWith(`0x1626ba7e`))return!0;throw new au}async function ru(e,t){let{address:n,factory:r,factoryData:i,hash:a,signature:o,verifierAddress:s,...c}=t,l=await(async()=>!r&&!i||Ql(o)?o:Zl({data:i,signature:o,to:r}))(),u=s?{to:s,data:Se({abi:ft,functionName:`isValidSig`,args:[n,a,l]}),...c}:{data:tt({abi:ft,args:[n,a,l],bytecode:lt}),...c},{data:d}=await M(e,Ht,`call`)(u).catch(e=>{throw e instanceof de?new au:e});if(rn(d??`0x0`))return!0;throw new au}async function iu(e,t){let{address:n,blockNumber:r,blockTag:i,hash:a,signature:o}=t;if((await M(e,ji,`readContract`)({address:n,abi:ht,args:[a,o],blockNumber:r,blockTag:i,functionName:`isValidSignature`}).catch(e=>{throw e instanceof me?new au:e})).startsWith(`0x1626ba7e`))return!0;throw new au}var au=class extends Error{};async function ou(e,{address:t,message:n,factory:r,factoryData:i,signature:a,...o}){let s=yo(n);return M(e,tu,`verifyHash`)({address:t,factory:r,factoryData:i,hash:s,signature:a,...o})}async function su(e,t){let{address:n,factory:r,factoryData:i,signature:a,message:o,primaryType:s,types:c,domain:l,...u}=t,d=Do({message:o,primaryType:s,types:c,domain:l});return M(e,tu,`verifyHash`)({address:n,factory:r,factoryData:i,hash:d,signature:a,...u})}function cu(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:a,pollingInterval:o=e.pollingInterval}){let s=a===void 0?!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):a,c;return s?Ii(A([`watchBlockNumber`,e.uid,t,n,o]),{onBlockNumber:r,onError:i},r=>Ri(async()=>{try{let t=await M(e,Wi,`getBlockNumber`)({cacheTime:0});if(c!==void 0){if(t===c)return;if(t-c>1&&n)for(let e=c+1n;e<t;e++)r.onBlockNumber(e,c),c=e}(c===void 0||t>c)&&(r.onBlockNumber(t,c),c=t)}catch(e){r.onError?.(e)}},{emitOnBegin:t,interval:o})):Ii(A([`watchBlockNumber`,e.uid,t,n]),{onBlockNumber:r,onError:i},t=>{let n=!0,r=()=>n=!1;return(async()=>{try{let{unsubscribe:i}=await(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})().subscribe({params:[`newHeads`],onData(e){if(!n)return;let r=l(e.result?.number);t.onBlockNumber(r,c),c=r},onError(e){t.onError?.(e)}});r=i,n||r()}catch(e){i?.(e)}})(),()=>r()})}async function lu(e,t){let{checkReplacement:n=!0,confirmations:r=1,hash:i,onReplaced:a,retryCount:o=6,retryDelay:c=({count:e})=>~~(1<<e)*200,timeout:l=18e4}=t,u=A([`waitForTransactionReceipt`,e.uid,i]),d=t.pollingInterval?t.pollingInterval:e.chain?.experimental_preconfirmationTime?e.chain.experimental_preconfirmationTime:e.pollingInterval,f,p,m,h=!1,g,_,{promise:v,resolve:y,reject:b}=Xe(),x=l?setTimeout(()=>{_?.(),g?.(),b(new Pe({hash:i}))},l):void 0;return g=Ii(u,{onReplaced:a,resolve:y,reject:b},async t=>{if(m=await M(e,Tl,`getTransactionReceipt`)({hash:i}).catch(()=>void 0),m&&r<=1){clearTimeout(x),t.resolve(m),g?.();return}_=M(e,cu,`watchBlockNumber`)({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:d,async onBlockNumber(a){let l=e=>{clearTimeout(x),_?.(),e(),g?.()},u=a;if(!h)try{if(m){if(r>1&&(!m.blockNumber||u-m.blockNumber+1n<r))return;l(()=>t.resolve(m));return}if(n&&!f&&(h=!0,await na(async()=>{f=await M(e,Cl,`getTransaction`)({hash:i}),f.blockNumber&&(u=f.blockNumber)},{delay:c,retryCount:o}),h=!1),m=await M(e,Tl,`getTransactionReceipt`)({hash:i}),r>1&&(!m.blockNumber||u-m.blockNumber+1n<r))return;l(()=>t.resolve(m))}catch(n){if(n instanceof s||n instanceof Le){if(!f){h=!1;return}try{p=f,h=!0;let n=await na(()=>M(e,Ir,`getBlock`)({blockNumber:u,includeTransactions:!0}),{delay:c,retryCount:o,shouldRetry:({error:e})=>e instanceof jr});h=!1;let i=n.transactions.find(({from:e,nonce:t})=>e===p.from&&t===p.nonce);if(!i||(m=await M(e,Tl,`getTransactionReceipt`)({hash:i.hash}),r>1&&(!m.blockNumber||u-m.blockNumber+1n<r)))return;let a=`replaced`;i.to===p.to&&i.value===p.value&&i.input===p.input?a=`repriced`:i.from===i.to&&i.value===0n&&(a=`cancelled`),l(()=>{t.onReplaced?.({reason:a,replacedTransaction:p,transaction:i,transactionReceipt:m}),t.resolve(m)})}catch(e){l(()=>t.reject(e))}}else l(()=>t.reject(n))}}})}),v}function uu(e,{blockTag:t=e.experimental_blockTag??`latest`,emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:a,includeTransactions:o,poll:s,pollingInterval:c=e.pollingInterval}){let l=s===void 0?!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):s,u=o??!1,d;return l?Ii(A([`watchBlocks`,e.uid,t,n,r,u,c]),{onBlock:i,onError:a},i=>Ri(async()=>{try{let r=await M(e,Ir,`getBlock`)({blockTag:t,includeTransactions:u});if(r.number!==null&&d?.number!=null){if(r.number===d.number)return;if(r.number-d.number>1&&n)for(let t=d?.number+1n;t<r.number;t++){let n=await M(e,Ir,`getBlock`)({blockNumber:t,includeTransactions:u});i.onBlock(n,d),d=n}}(d?.number==null||t===`pending`&&r?.number==null||r.number!==null&&r.number>d.number)&&(i.onBlock(r,d),d=r)}catch(e){i.onError?.(e)}},{emitOnBegin:r,interval:c})):(()=>{let n=!0,o=!0,s=()=>n=!1;return(async()=>{try{r&&M(e,Ir,`getBlock`)({blockTag:t,includeTransactions:u}).then(e=>{n&&(o&&=(i(e,void 0),!1))}).catch(a);let{unsubscribe:c}=await(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})().subscribe({params:[`newHeads`],async onData(t){if(!n)return;let r=await M(e,Ir,`getBlock`)({blockNumber:t.result?.number,includeTransactions:u}).catch(()=>{});n&&(i(r,d),o=!1,d=r)},onError(e){a?.(e)}});s=c,n||s()}catch(e){a?.(e)}})(),()=>s()})()}function du(e,{address:t,args:n,batch:r=!0,event:i,events:a,fromBlock:o,onError:s,onLogs:c,poll:l,pollingInterval:u=e.pollingInterval,strict:d}){let f=l===void 0?typeof o==`bigint`?!0:!(e.transport.type===`webSocket`||e.transport.type===`ipc`||e.transport.type===`fallback`&&(e.transport.transports[0].config.type===`webSocket`||e.transport.transports[0].config.type===`ipc`)):l,p=d??!1;return f?Ii(A([`watchEvent`,t,n,r,e.uid,i,u,o]),{onLogs:c,onError:s},s=>{let c;o!==void 0&&(c=o-1n);let l,d=!1,f=Ri(async()=>{if(!d){try{l=await M(e,qa,`createEventFilter`)({address:t,args:n,event:i,events:a,strict:p,fromBlock:o})}catch{}d=!0;return}try{let o;if(l)o=await M(e,Gi,`getFilterChanges`)({filter:l});else{let r=await M(e,Wi,`getBlockNumber`)({});o=c&&c!==r?await M(e,ki,`getLogs`)({address:t,args:n,event:i,events:a,fromBlock:c+1n,toBlock:r}):[],c=r}if(o.length===0)return;if(r)s.onLogs(o);else for(let e of o)s.onLogs([e])}catch(e){l&&e instanceof rt&&(d=!1),s.onError?.(e)}},{emitOnBegin:!0,interval:u});return async()=>{l&&await M(e,Ki,`uninstallFilter`)({filter:l}),f()}}):(()=>{let r=!0,o=()=>r=!1;return(async()=>{try{let l=(()=>{if(e.transport.type===`fallback`){let t=e.transport.transports.find(e=>e.config.type===`webSocket`||e.config.type===`ipc`);return t?t.value:e.transport}return e.transport})(),u=a??(i?[i]:void 0),f=[];u&&(f=[u.flatMap(e=>lr({abi:[e],eventName:e.name,args:n}))],i&&(f=f[0]));let{unsubscribe:m}=await l.subscribe({params:[`logs`,{address:t,topics:f}],onData(e){if(!r)return;let t=e.result;try{let{eventName:e,args:n}=Ti({abi:u??[],data:t.data,topics:t.topics,strict:p});c([Ci(t,{args:n,eventName:e})])}catch(e){let n,r;if(e instanceof pe||e instanceof ye){if(d)return;n=e.abiItem.name,r=e.abiItem.inputs?.some(e=>!(`name`in e&&e.name))}c([Ci(t,{args:r?[]:{},eventName:n})])}},onError(e){s?.(e)}});o=m,r||o()}catch(e){s?.(e)}})(),()=>o()})()}function fu(e,{batch:t=!0,onError:n,onTransactions:r,poll:i,pollingInterval:a=e.pollingInterval}){return(i===void 0?e.transport.type!==`webSocket`&&e.transport.type!==`ipc`:i)?Ii(A([`watchPendingTransactions`,e.uid,t,a]),{onTransactions:r,onError:n},n=>{let r,i=Ri(async()=>{try{if(!r)try{r=await M(e,Ja,`createPendingTransactionFilter`)({});return}catch(e){throw i(),e}let a=await M(e,Gi,`getFilterChanges`)({filter:r});if(a.length===0)return;if(t)n.onTransactions(a);else for(let e of a)n.onTransactions([e])}catch(e){n.onError?.(e)}},{emitOnBegin:!0,interval:a});return async()=>{r&&await M(e,Ki,`uninstallFilter`)({filter:r}),i()}}):(()=>{let t=!0,i=()=>t=!1;return(async()=>{try{let{unsubscribe:a}=await e.transport.subscribe({params:[`newPendingTransactions`],onData(e){if(!t)return;let n=e.result;r([n])},onError(e){n?.(e)}});i=a,t||i()}catch(e){n?.(e)}})(),()=>i()})()}function pu(e){let{scheme:t,statement:n,...r}=e.match(mu)?.groups??{},{chainId:i,expirationTime:a,issuedAt:o,notBefore:s,requestId:c,...l}=e.match(hu)?.groups??{},u=e.split(`Resources:`)[1]?.split(`
- `).slice(1);return{...r,...l,...i?{chainId:Number(i)}:{},...a?{expirationTime:new Date(a)}:{},...o?{issuedAt:new Date(o)}:{},...s?{notBefore:new Date(s)}:{},...c?{requestId:c}:{},...u?{resources:u}:{},...t?{scheme:t}:{},...n?{statement:n}:{}}}var mu=/^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,hu=/(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;function gu(e){let{address:t,domain:n,message:r,nonce:i,scheme:a,time:o=new Date}=e;if(n&&r.domain!==n||i&&r.nonce!==i||a&&r.scheme!==a||r.expirationTime&&o>=r.expirationTime||r.notBefore&&o<r.notBefore)return!1;try{if(!r.address||!nt(r.address,{strict:!1})||t&&!ne(r.address,t))return!1}catch{return!1}return!0}async function _u(e,t){let{address:n,domain:r,message:i,nonce:a,scheme:o,signature:s,time:c=new Date,...l}=t,u=pu(i);if(!u.address||!gu({address:n,domain:r,message:u,nonce:a,scheme:o,time:c}))return!1;let d=yo(i);return tu(e,{address:u.address,hash:d,signature:s,...l})}async function vu(e,{serializedTransaction:t,throwOnReceiptRevert:n,timeout:r}){let i=await e.request({method:`eth_sendRawTransactionSync`,params:r?[t,r]:[t]},{retryCount:0}),a=(e.chain?.formatters?.transactionReceipt?.format||ia)(i);if(a.status===`reverted`&&n)throw new ee({receipt:a});return a}function yu(e){return{call:t=>Ht(e,t),createAccessList:t=>Ga(e,t),createBlockFilter:()=>Ka(e),createContractEventFilter:t=>fr(e,t),createEventFilter:t=>qa(e,t),createPendingTransactionFilter:()=>Ja(e),estimateContractGas:t=>Si(e,t),estimateGas:t=>xi(e,t),getBalance:t=>Ya(e,t),getBlobBaseFee:()=>Xa(e),getBlock:t=>Ir(e,t),getBlockNumber:t=>Wi(e,t),getBlockTransactionCount:t=>Za(e,t),getBytecode:t=>Qa(e,t),getChainId:()=>hi(e),getCode:t=>Qa(e,t),getContractEvents:t=>Ai(e,t),getDelegation:t=>$a(e,t),getEip712Domain:t=>to(e,t),getEnsAddress:t=>Sa(e,t),getEnsAvatar:t=>Ha(e,t),getEnsName:t=>Ua(e,t),getEnsResolver:t=>Wa(e,t),getEnsText:t=>Va(e,t),getFeeHistory:t=>io(e,t),estimateFeesPerGas:t=>Br(e,t),getFilterChanges:t=>Gi(e,t),getFilterLogs:t=>ao(e,t),getGasPrice:()=>Lr(e),getLogs:t=>ki(e,t),getProof:t=>xl(e,t),estimateMaxPriorityFeePerGas:t=>Rr(e,t),fillTransaction:t=>gi(e,t),getStorageAt:t=>Sl(e,t),getTransaction:t=>Cl(e,t),getTransactionConfirmations:t=>wl(e,t),getTransactionCount:t=>Hr(e,t),getTransactionReceipt:t=>Tl(e,t),multicall:t=>El(e,t),prepareTransactionRequest:t=>bi(e,t),readContract:t=>ji(e,t),sendRawTransaction:t=>Zi(e,t),sendRawTransactionSync:t=>vu(e,t),simulate:t=>Dl(e,t),simulateBlocks:t=>Dl(e,t),simulateCalls:t=>Jl(e,t),simulateContract:t=>Mi(e,t),verifyHash:t=>tu(e,t),verifyMessage:t=>ou(e,t),verifySiweMessage:t=>_u(e,t),verifyTypedData:t=>su(e,t),uninstallFilter:t=>Ki(e,t),waitForTransactionReceipt:t=>lu(e,t),watchBlocks:t=>uu(e,t),watchBlockNumber:t=>cu(e,t),watchContractEvent:t=>qi(e,t),watchEvent:t=>du(e,t),watchPendingTransactions:t=>fu(e,t)}}function bu(e){let{key:t=`public`,name:n=`Public Client`}=e;return ha({...e,key:t,name:n,type:`publicClient`}).extend(yu)}async function xu(e,{chain:t}){let{id:n,name:r,nativeCurrency:i,rpcUrls:a,blockExplorers:o}=t;await e.request({method:`wallet_addEthereumChain`,params:[{chainId:O(n),chainName:r,nativeCurrency:i,rpcUrls:a.default.http,blockExplorerUrls:o?Object.values(o).map(({url:e})=>e):void 0}]},{dedupe:!0,retryCount:0})}function Su(e,t){let{abi:n,args:r,bytecode:i,...a}=t,o=tt({abi:n,args:r,bytecode:i});return $i(e,{...a,...a.authorizationList?{to:null}:{},data:o})}async function Cu(e){return e.account?.type===`local`?[e.account.address]:(await e.request({method:`eth_accounts`},{dedupe:!0})).map(e=>Ot(e))}async function wu(e,n={}){let{account:r=e.account,chainId:i}=n,a=r?t(r):void 0,o=i?[a?.address,[O(i)]]:[a?.address],s=await e.request({method:`wallet_getCapabilities`,params:o}),c={};for(let[e,t]of Object.entries(s)){c[Number(e)]={};for(let[n,r]of Object.entries(t))n===`addSubAccount`&&(n=`unstable_addSubAccount`),c[Number(e)][n]=r}return typeof i==`number`?c[i]:c}async function Tu(e){return await e.request({method:`wallet_getPermissions`},{dedupe:!0})}async function Eu(e,n){let{account:r=e.account,chainId:i,nonce:a}=n;if(!r)throw new Ji({docsPath:`/docs/eip7702/prepareAuthorization`});let o=t(r),s=(()=>{if(n.executor)return n.executor===`self`?n.executor:t(n.executor)})(),c={address:n.contractAddress??n.address,chainId:i,nonce:a};return c.chainId===void 0&&(c.chainId=e.chain?.id??await M(e,hi,`getChainId`)({})),c.nonce===void 0&&(c.nonce=await M(e,Hr,`getTransactionCount`)({address:o.address,blockTag:`pending`}),(s===`self`||s?.address&&ne(s.address,o.address))&&(c.nonce+=1)),c}async function Du(e){return(await e.request({method:`eth_requestAccounts`},{dedupe:!0,retryCount:0})).map(e=>Zt(e))}async function Ou(e,t){return e.request({method:`wallet_requestPermissions`,params:[t]},{retryCount:0})}async function ku(e,t){let{chain:n=e.chain}=t,r=t.timeout??Math.max((n?.blockTime??0)*3,5e3),i=await M(e,sa,`sendCalls`)(t);return await M(e,la,`waitForCallsStatus`)({...t,id:i.id,timeout:r})}var Au=new at(128);async function ju(e,n){let{account:r=e.account,assertChainId:i=!0,chain:a=e.chain,accessList:o,authorizationList:s,blobs:c,data:l,dataSuffix:u=typeof e.dataSuffix==`string`?e.dataSuffix:e.dataSuffix?.value,gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,pollingInterval:_,throwOnReceiptRevert:y,type:b,value:x,...S}=n,C=n.timeout??Math.max((a?.blockTime??0)*3,5e3);if(r===void 0)throw new Ji({docsPath:`/docs/actions/wallet/sendTransactionSync`});let w=r?t(r):null;try{Ue(n);let t=await(async()=>{if(n.to)return n.to;if(n.to!==null&&s&&s.length>0)return await Tr({authorization:s[0]}).catch(()=>{throw new v("`to` is required. Could not infer from `authorizationList`.")})})();if(w?.type===`json-rpc`||w===null){let n;a!==null&&(n=await M(e,hi,`getChainId`)({}),i&&Xi({currentChainId:n,chain:a}));let r=e.chain?.formatters?.transactionRequest?.format,v=(r||Ge)({...xe(S,{format:r}),accessList:o,account:w,authorizationList:s,blobs:c,chainId:n,data:l&&Ft([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,to:t,type:b,value:x},`sendTransaction`),T=Au.get(e.uid),E=T?`wallet_sendTransaction`:`eth_sendTransaction`,te=await(async()=>{try{return await e.request({method:E,params:[v]},{retryCount:0})}catch(t){if(T===!1)throw t;let n=t;if(n.name===`InvalidInputRpcError`||n.name===`InvalidParamsRpcError`||n.name===`MethodNotFoundRpcError`||n.name===`MethodNotSupportedRpcError`)return await e.request({method:`wallet_sendTransaction`,params:[v]},{retryCount:0}).then(t=>(Au.set(e.uid,!0),t)).catch(t=>{let r=t;throw r.name===`MethodNotFoundRpcError`||r.name===`MethodNotSupportedRpcError`?(Au.set(e.uid,!1),n):r});throw n}})(),ne=await M(e,lu,`waitForTransactionReceipt`)({checkReplacement:!1,hash:te,pollingInterval:_,timeout:C});if(y&&ne.status===`reverted`)throw new ee({receipt:ne});return ne}if(w?.type===`local`){let r=await M(e,bi,`prepareTransactionRequest`)({account:w,accessList:o,authorizationList:s,blobs:c,chain:a,data:l&&Ft([l,u??`0x`]),gas:d,gasPrice:f,maxFeePerBlobGas:p,maxFeePerGas:m,maxPriorityFeePerGas:h,nonce:g,nonceManager:w.nonceManager,parameters:[..._i,`sidecars`],type:b,value:x,...S,to:t}),i=a?.serializers?.transaction,_=await w.signTransaction(r,{serializer:i});return await M(e,vu,`sendRawTransactionSync`)({serializedTransaction:_,throwOnReceiptRevert:y,timeout:n.timeout})}throw w?.type===`smart`?new Yi({metaMessages:["Consider using the `sendUserOperation` Action instead."],docsPath:`/docs/actions/bundler/sendUserOperation`,type:`smart`}):new Yi({docsPath:`/docs/actions/wallet/sendTransactionSync`,type:w?.type})}catch(e){throw e instanceof Yi?e:mi(e,{...n,account:w,chain:n.chain||void 0})}}async function Mu(e,t){let{id:n}=t;await e.request({method:`wallet_showCallsStatus`,params:[n]})}async function Nu(e,n){let{account:r=e.account}=n;if(!r)throw new Ji({docsPath:`/docs/eip7702/signAuthorization`});let i=t(r);if(!i.signAuthorization)throw new Yi({docsPath:`/docs/eip7702/signAuthorization`,metaMessages:["The `signAuthorization` Action does not support JSON-RPC Accounts."],type:i.type});let a=await Eu(e,n);return i.signAuthorization(a)}async function Pu(e,{account:n=e.account,message:r}){if(!n)throw new Ji({docsPath:`/docs/actions/wallet/signMessage`});let i=t(n);if(i.signMessage)return i.signMessage({message:r});let a=typeof r==`string`?sn(r):r.raw instanceof Uint8Array?De(r.raw):r.raw;return e.request({method:`personal_sign`,params:[a,i.address]},{retryCount:0})}async function Fu(e,n){let{account:r=e.account,chain:i=e.chain,...a}=n;if(!r)throw new Ji({docsPath:`/docs/actions/wallet/signTransaction`});let o=t(r);Ue({account:o,...n});let s=await M(e,hi,`getChainId`)({});i!==null&&Xi({currentChainId:s,chain:i});let c=(i?.formatters||e.chain?.formatters)?.transactionRequest?.format||Ge;return o.signTransaction?o.signTransaction({...a,chainId:s},{serializer:e.chain?.serializers?.transaction}):await e.request({method:`eth_signTransaction`,params:[{...c({...a,account:o},`signTransaction`),chainId:O(s),from:o.address}]},{retryCount:0})}async function Iu(e,n){let{account:r=e.account,domain:i,message:a,primaryType:o}=n;if(!r)throw new Ji({docsPath:`/docs/actions/wallet/signTypedData`});let s=t(r),c={EIP712Domain:To({domain:i}),...n.types};if(wo({domain:i,message:a,primaryType:o,types:c}),s.signTypedData)return s.signTypedData({domain:i,message:a,primaryType:o,types:c});let l=Co({domain:i,message:a,primaryType:o,types:c});return e.request({method:`eth_signTypedData_v4`,params:[s.address,l]},{retryCount:0})}async function Lu(e,{id:t}){await e.request({method:`wallet_switchEthereumChain`,params:[{chainId:O(t)}]},{retryCount:0})}async function Ru(e,t){return await e.request({method:`wallet_watchAsset`,params:t},{retryCount:0})}async function zu(e,t){return ea.internal(e,ju,`sendTransactionSync`,t)}function Bu(e){return{addChain:t=>xu(e,t),deployContract:t=>Su(e,t),fillTransaction:t=>gi(e,t),getAddresses:()=>Cu(e),getCallsStatus:t=>ca(e,t),getCapabilities:t=>wu(e,t),getChainId:()=>hi(e),getPermissions:()=>Tu(e),prepareAuthorization:t=>Eu(e,t),prepareTransactionRequest:t=>bi(e,t),requestAddresses:()=>Du(e),requestPermissions:t=>Ou(e,t),sendCalls:t=>sa(e,t),sendCallsSync:t=>ku(e,t),sendRawTransaction:t=>Zi(e,t),sendRawTransactionSync:t=>vu(e,t),sendTransaction:t=>$i(e,t),sendTransactionSync:t=>ju(e,t),showCallsStatus:t=>Mu(e,t),signAuthorization:t=>Nu(e,t),signMessage:t=>Pu(e,t),signTransaction:t=>Fu(e,t),signTypedData:t=>Iu(e,t),switchChain:t=>Lu(e,t),waitForCallsStatus:t=>la(e,t),watchAsset:t=>Ru(e,t),writeContract:t=>ea(e,t),writeContractSync:t=>zu(e,t)}}function Vu(e){let{key:t=`wallet`,name:n=`Wallet Client`,transport:r}=e;return ha({...e,key:t,name:n,transport:r,type:`walletClient`}).extend(Bu)}function Hu({key:e,methods:t,name:n,request:r,retryCount:i=3,retryDelay:a=150,timeout:o,type:s},c){let l=ma();return{config:{key:e,methods:t,name:n,request:r,retryCount:i,retryDelay:a,timeout:o,type:s},request:lo(r,{methods:t,retryCount:i,retryDelay:a,uid:l}),value:c}}function Uu(e,t={}){let{key:n=`custom`,methods:r,name:i=`Custom Provider`,retryDelay:a}=t;return({retryCount:o})=>Hu({key:n,methods:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:a,type:`custom`})}var Wu=class extends v{constructor(){super(`No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.`,{docsPath:`/docs/clients/intro`,name:`UrlRequiredError`})}};function Gu(e,t={}){let{batch:n,fetchFn:r,fetchOptions:a,key:o=`http`,methods:s,name:c=`HTTP JSON-RPC`,onFetchRequest:l,onFetchResponse:u,retryDelay:d,raw:f}=t;return({chain:p,retryCount:m,timeout:h})=>{let{batchSize:g=1e3,wait:_=0}=typeof n==`object`?n:{},v=t.retryCount??m,y=h??t.timeout??1e4,b=e||p?.rpcUrls.default.http[0];if(!b)throw new Wu;let x=ho(b,{fetchFn:r,fetchOptions:a,onRequest:l,onResponse:u,timeout:y});return Hu({key:o,methods:s,name:c,async request({method:e,params:t}){let r={method:e,params:t},{schedule:a}=vt({id:b,wait:_,shouldSplitBatch(e){return e.length>g},fn:e=>x.request({body:e}),sort:(e,t)=>e.id-t.id}),[{error:o,result:s}]=await(async e=>n?a(e):[await x.request({body:e})])(r);if(f)return{error:o,result:s};if(o)throw new i({body:r,error:o,url:b});return s},retryCount:v,retryDelay:d,timeout:y,type:`http`},{fetchOptions:a,url:b})}}var Ku=Xn({clearLastWallet:()=>td,connectWallet:()=>Qu,connectedWallet:()=>L,disconnectWallet:()=>$u,saveLastWallet:()=>ed,switchChain:()=>nd,walletEvents:()=>Ju,walletProviders:()=>Yu}),qu=`fomonad-last-wallet`,Ju=new EventTarget,Yu=[],L=null;function Xu(e){Yu=e,Ju.dispatchEvent(new CustomEvent(`wallet-changed`))}function Zu(e){L=e,Ju.dispatchEvent(new CustomEvent(`wallet-changed`))}window.addEventListener(`eip6963:announceProvider`,e=>{let t=e.detail;if(!Yu.find(e=>e.info.uuid===t.info.uuid)){Xu([...Yu,t]);let e=localStorage.getItem(qu);e&&t.info.rdns===e&&!L&&Qu(t)}}),window.dispatchEvent(new Event(`eip6963:requestProvider`));async function Qu(e){try{let t=await e.provider.request({method:`eth_requestAccounts`});if(!t||t.length===0)return null;let n=await e.provider.request({method:`eth_chainId`}),r=parseInt(n,16),i=t[0];return Zu({address:i,provider:e.provider,chainId:r,rdns:e.info.rdns,icon:e.info.icon,walletName:e.info.name}),e.provider.on&&(e.provider.on(`accountsChanged`,e=>{let t=e;!t||t.length===0?Zu(null):Zu({...L,address:t[0]})}),e.provider.on(`chainChanged`,e=>{let t=parseInt(e,16);L&&Zu({...L,chainId:t})})),i}catch{return null}}function $u(){Zu(null)}function ed(e){localStorage.setItem(qu,e)}function td(){localStorage.removeItem(qu)}async function nd(e,t,n){if(!L)return!1;try{return await L.provider.request({method:`wallet_switchEthereumChain`,params:[{chainId:`0x${e.toString(16)}`}]}),!0}catch(r){if(r&&typeof r==`object`&&`code`in r&&r.code===4902)try{return await L.provider.request({method:`wallet_addEthereumChain`,params:[{chainId:`0x${e.toString(16)}`,chainName:n,rpcUrls:[t],nativeCurrency:{name:`MON`,symbol:`MON`,decimals:18}}]}),!0}catch{return!1}return!1}}function rd(e){let t=j;return{id:e,name:t?.name??`Chain ${e}`,nativeCurrency:{name:`MON`,symbol:`MON`,decimals:18},rpcUrls:{default:{http:[t?.rpcUrl??`http://127.0.0.1:8545`]}}}}var id=new Map,ad=null;Ju.addEventListener(`wallet-changed`,()=>{ad=null});function od(e=Zn){if(!id.has(e)){let t=j,n=bu({chain:rd(e),transport:Gu(t?.rpcUrl??`http://127.0.0.1:8545`,{retryCount:5,retryDelay:250})});id.set(e,n)}return id.get(e)}function sd(e=Zn){return!L||L.chainId!==e?null:((!ad||ad.chainId!==e)&&(ad={chainId:e,client:bu({chain:rd(e),transport:Uu(L.provider)})}),ad.client)}function cd(e){return!e||typeof e!=`object`?!1:`code`in e&&e.code===-32011?!0:`cause`in e?cd(e.cause):!!(e instanceof Error&&e.message.includes(`requests limited`))}async function R(e,t=Zn,n=3){let r=od(t);for(let i=0;i<n;i++){let a=i===n-1,o=a?sd(t)??r:r;try{return await e(o)}catch(e){if(cd(e)&&!a){await new Promise(e=>setTimeout(e,2**i*250));continue}throw e}}throw Error(`unreachable`)}function z(){if(!L)return null;let e=rd(L.chainId);return Vu({account:L.address,chain:e,transport:Uu(L.provider)})}async function ld(e){if(!L)return!1;if(L.chainId===e)return!0;let t=j;if(!t||!await nd(e,t.rpcUrl,t.name))return!1;if(await new Promise(e=>setTimeout(e,500)),L?.chainId!==e){let{disconnectWallet:e}=await Yt(async()=>{let{disconnectWallet:e}=await Promise.resolve().then(()=>Ku);return{disconnectWallet:e}},void 0,import.meta.url);return e(),!1}return!0}var B=[{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`},{name:`fomon`,type:`address`,internalType:`address`},{name:`vibecoinImpl`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`FOMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract FoMonad`}],stateMutability:`view`},{type:`function`,name:`INITIAL_TIMER`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`K`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`K_HALF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`MAX_TIMER`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`MIN_REFERRAL_DEPOSIT`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`P0`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`PUMP_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_DURATION`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_KICKOFF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_A_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_DURATION`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_PRIZE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_PROTOCOL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SERIES_B_REFERRAL`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`VIBECOIN_IMPL`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`WINNER_PRIZE_BPS`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`buy`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`buyWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`claimSeriesATokens`,inputs:[{name:`cycleId`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`claimSeriesBTokens`,inputs:[{name:`cycleId`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`currentVibecoin`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract Vibecoin`}],stateMutability:`view`},{type:`function`,name:`cycle`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`depositSeriesA`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`depositSeriesAWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`depositSeriesB`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`depositSeriesBWithShMon`,inputs:[{name:`referralCode`,type:`bytes32`,internalType:`bytes32`},{name:`amount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`isTimerExpired`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`lastBuyer`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`phase`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`enum FoMonadGame.Phase`}],stateMutability:`view`},{type:`function`,name:`prizePool`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`referralCodes`,inputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`referralCodeOf`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],stateMutability:`view`},{type:`function`,name:`referralEarned`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`registerReferral`,inputs:[{name:`code`,type:`bytes32`,internalType:`bytes32`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`rolloverPool`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesADeposits`,inputs:[{name:``,type:`uint256`,internalType:`uint256`},{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesAEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesBDeposits`,inputs:[{name:``,type:`uint256`,internalType:`uint256`},{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seriesBEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`settleSeriesB`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`settlementTimestamp`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilSeriesAEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilSeriesBEnd`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timeUntilTimer`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`timerExpiry`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`tokensSeriesAByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`tokensSeriesBByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalDeposited`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalPublicCurveDeposited`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesA`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesAByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesB`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesBByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSeriesDeposit`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`triggerSettlement`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`vibecoinByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`vibecoinCycle`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`winnerByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`prizeByCycle`,inputs:[{name:``,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`gameState`,inputs:[{name:`getVibecoinURI`,type:`bool`,internalType:`bool`}],outputs:[{name:`state`,type:`tuple`,internalType:`struct FoMonadGame.GameState`,components:[{name:`phase`,type:`uint8`,internalType:`enum FoMonadGame.Phase`},{name:`phaseEndTime`,type:`uint256`,internalType:`uint256`},{name:`vibecoin`,type:`address`,internalType:`address`},{name:`vibecoinPrice`,type:`uint256`,internalType:`uint256`},{name:`vibecoinURI`,type:`string`,internalType:`string`},{name:`prizePool`,type:`uint256`,internalType:`uint256`},{name:`totalDeposited`,type:`uint256`,internalType:`uint256`},{name:`cycle`,type:`uint256`,internalType:`uint256`},{name:`lastBuyer`,type:`address`,internalType:`address`}]}],stateMutability:`view`},{type:`event`,name:`Buy`,inputs:[{name:`buyer`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonIn`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`tokensOut`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`CycleSettled`,inputs:[{name:`winner`,type:`address`,indexed:!0,internalType:`address`},{name:`prizeAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`rollover`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`newVibecoin`,type:`address`,indexed:!1,internalType:`address`}],anonymous:!1},{type:`event`,name:`ReferralRegistered`,inputs:[{name:`code`,type:`bytes32`,indexed:!0,internalType:`bytes32`},{name:`referrer`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`SeriesADeposit`,inputs:[{name:`depositor`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`referralCode`,type:`bytes32`,indexed:!1,internalType:`bytes32`}],anonymous:!1},{type:`event`,name:`SeriesBDeposit`,inputs:[{name:`depositor`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`referralCode`,type:`bytes32`,indexed:!1,internalType:`bytes32`}],anonymous:!1},{type:`event`,name:`SeriesSettled`,inputs:[{name:`K`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`vibecoin`,type:`address`,indexed:!1,internalType:`address`},{name:`timerExpiry`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`TimerExtended`,inputs:[{name:`newExpiry`,type:`uint256`,indexed:!1,internalType:`uint256`},{name:`lastBuyer`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`error`,name:`AlreadySettled`,inputs:[]},{type:`error`,name:`FailedDeployment`,inputs:[]},{type:`error`,name:`InsufficientBalance`,inputs:[{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`InvalidReferral`,inputs:[]},{type:`error`,name:`NotAnInsider`,inputs:[]},{type:`error`,name:`NotEligibleReferrer`,inputs:[]},{type:`error`,name:`NothingToClaim`,inputs:[]},{type:`error`,name:`PublicPhaseNotOpen`,inputs:[]},{type:`error`,name:`Reentrant`,inputs:[]},{type:`error`,name:`ReferralCodeTaken`,inputs:[]},{type:`error`,name:`SeriesANotEnded`,inputs:[]},{type:`error`,name:`SeriesBNotEnded`,inputs:[]},{type:`error`,name:`TimerExpired`,inputs:[]},{type:`error`,name:`TimerNotExpired`,inputs:[]},{type:`error`,name:`WrongPhase`,inputs:[]},{type:`error`,name:`ZeroDeposit`,inputs:[]}],V=[{type:`function`,name:`athPostRug`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`athPrice`,inputs:[],outputs:[{name:``,type:`uint128`,internalType:`uint128`}],stateMutability:`view`},{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`K`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`P0`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`buy`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`autoOptIn`,type:`bool`,internalType:`bool`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`buyWithShMon`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`shMonIn`,type:`uint256`,internalType:`uint256`},{name:`autoOptIn`,type:`bool`,internalType:`bool`}],outputs:[{name:`tokensOut`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`claimDividends`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}],outputs:[{name:`amount`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`drip`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`earned`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`game`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`initialize`,inputs:[{name:`seed_`,type:`bytes32`,internalType:`bytes32`},{name:`game_`,type:`address`,internalType:`address`},{name:`p0`,type:`uint256`,internalType:`uint256`},{name:`k`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`lastKnownBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`lastKnownSelfBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`marketCap`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`optIn`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optOut`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optedIn`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`optedInSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`pendingRewards`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`poolBalance`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`price`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`rewardPerTokenStored`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`seed`,inputs:[],outputs:[{name:``,type:`bytes32`,internalType:`bytes32`}],stateMutability:`view`},{type:`function`,name:`sell`,inputs:[{name:`tokens`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`shMonForTokens`,inputs:[{name:`tokens`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`tokenURI`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`tokensForDeposit`,inputs:[{name:`deposit`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`unlock`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`totalVolume`,inputs:[],outputs:[{name:``,type:`uint128`,internalType:`uint128`}],stateMutability:`view`},{type:`function`,name:`unlocked`,inputs:[],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`userRewardPerTokenPaid`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`volume24h`,inputs:[],outputs:[{name:`total`,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`AlreadyInitialized`,inputs:[]},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]},{type:`error`,name:`InsufficientTokens`,inputs:[]},{type:`error`,name:`MustBeGame`,inputs:[]},{type:`error`,name:`PreRugpull`,inputs:[]},{type:`error`,name:`ZeroAmount`,inputs:[]}],ud=[{type:`constructor`,inputs:[{name:`shmon`,type:`address`,internalType:`address`},{name:`game_`,type:`address`,internalType:`address`}],stateMutability:`nonpayable`},{type:`function`,name:`AIRDROP_RESERVE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`DEPLOYER_SHARE`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`SHMON`,inputs:[],outputs:[{name:``,type:`address`,internalType:`contract IShMonad`}],stateMutability:`view`},{type:`function`,name:`TOTAL_SUPPLY`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`T_HALF`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`airdropNonce`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`claim`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`claimable`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`deployTimestamp`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`distributeProtocolFee`,inputs:[{name:`shMonAmount`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`game`,inputs:[],outputs:[{name:``,type:`address`,internalType:`address`}],stateMutability:`view`},{type:`function`,name:`lastAirdropBlock`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`maxMintable`,inputs:[{name:`t`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`pure`},{type:`function`,name:`mintAirdrop`,inputs:[{name:`to`,type:`address`,internalType:`address`}],outputs:[{name:`amount`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`optIn`,inputs:[],outputs:[],stateMutability:`nonpayable`},{type:`function`,name:`optedIn`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`view`},{type:`function`,name:`optedInSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`pendingRewards`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`remainingCeiling`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`rewardPerTokenStored`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`totalAirdropMinted`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`userRewardPerTokenPaid`,inputs:[{name:``,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`event`,name:`AirdropMinted`,inputs:[{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`amount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Claimed`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`},{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`OptedIn`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`OptedOut`,inputs:[{name:`account`,type:`address`,indexed:!0,internalType:`address`}],anonymous:!1},{type:`event`,name:`ProtocolFeeDistributed`,inputs:[{name:`shMonAmount`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`AirdropExhausted`,inputs:[]},{type:`error`,name:`AlreadyOptedIn`,inputs:[]},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]},{type:`error`,name:`NotGame`,inputs:[]},{type:`error`,name:`NothingToClaim`,inputs:[]}],dd=[{type:`constructor`,inputs:[],stateMutability:`nonpayable`},{type:`receive`,stateMutability:`payable`},{type:`function`,name:`allowance`,inputs:[{name:`owner`,type:`address`,internalType:`address`},{name:`spender`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`approve`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`balanceOf`,inputs:[{name:`account`,type:`address`,internalType:`address`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`assetsPerShare`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`convertToAssets`,inputs:[{name:`shares`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`convertToShares`,inputs:[{name:`assets`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`setRate`,inputs:[{name:`rateWad`,type:`uint256`,internalType:`uint256`}],outputs:[],stateMutability:`payable`},{type:`function`,name:`decimals`,inputs:[],outputs:[{name:``,type:`uint8`,internalType:`uint8`}],stateMutability:`view`},{type:`function`,name:`deposit`,inputs:[{name:`assets`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`}],outputs:[{name:`shares`,type:`uint256`,internalType:`uint256`}],stateMutability:`payable`},{type:`function`,name:`name`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`redeem`,inputs:[{name:`shares`,type:`uint256`,internalType:`uint256`},{name:`receiver`,type:`address`,internalType:`address`},{name:`owner`,type:`address`,internalType:`address`}],outputs:[{name:`assets`,type:`uint256`,internalType:`uint256`}],stateMutability:`nonpayable`},{type:`function`,name:`symbol`,inputs:[],outputs:[{name:``,type:`string`,internalType:`string`}],stateMutability:`view`},{type:`function`,name:`totalAssets`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`totalSupply`,inputs:[],outputs:[{name:``,type:`uint256`,internalType:`uint256`}],stateMutability:`view`},{type:`function`,name:`transfer`,inputs:[{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`function`,name:`transferFrom`,inputs:[{name:`from`,type:`address`,internalType:`address`},{name:`to`,type:`address`,internalType:`address`},{name:`value`,type:`uint256`,internalType:`uint256`}],outputs:[{name:``,type:`bool`,internalType:`bool`}],stateMutability:`nonpayable`},{type:`event`,name:`Approval`,inputs:[{name:`owner`,type:`address`,indexed:!0,internalType:`address`},{name:`spender`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`event`,name:`Transfer`,inputs:[{name:`from`,type:`address`,indexed:!0,internalType:`address`},{name:`to`,type:`address`,indexed:!0,internalType:`address`},{name:`value`,type:`uint256`,indexed:!1,internalType:`uint256`}],anonymous:!1},{type:`error`,name:`ERC20InsufficientAllowance`,inputs:[{name:`spender`,type:`address`,internalType:`address`},{name:`allowance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InsufficientBalance`,inputs:[{name:`sender`,type:`address`,internalType:`address`},{name:`balance`,type:`uint256`,internalType:`uint256`},{name:`needed`,type:`uint256`,internalType:`uint256`}]},{type:`error`,name:`ERC20InvalidApprover`,inputs:[{name:`approver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidReceiver`,inputs:[{name:`receiver`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSender`,inputs:[{name:`sender`,type:`address`,internalType:`address`}]},{type:`error`,name:`ERC20InvalidSpender`,inputs:[{name:`spender`,type:`address`,internalType:`address`}]}],fd=[[`#ff2d6b`,`#ff8c00`],[`#00e5ff`,`#0066ff`],[`#ffe600`,`#ff6600`],[`#00ff9d`,`#00aa66`],[`#ff00ff`,`#aa00ff`],[`#ff4444`,`#ff0000`],[`#ffffff`,`#aaaaaa`],[`#ff9900`,`#ffcc00`],[`#44ffff`,`#0099ff`],[`#ff44aa`,`#ff0066`]];function pd(e){return[...fd[parseInt(e.slice(12,14),16)%10]]}var md=`fomonad-active-ref`,hd=`fomonad-url-ref`;function gd(e){if(!e)return`0x${`00`.repeat(32)}`;let t=new TextEncoder().encode(e);return t.length>31?`0x${`00`.repeat(32)}`:`0x${Array.from(t).map(e=>e.toString(16).padStart(2,`0`)).join(``).padEnd(64,`0`)}`}function _d(e){try{let t=e.startsWith(`0x`)?e.slice(2):e,n=[];for(let e=0;e<t.length;e+=2){let r=parseInt(t.slice(e,e+2),16);if(r===0)break;n.push(r)}return n.length===0?null:new TextDecoder(`utf-8`,{fatal:!0}).decode(new Uint8Array(n))}catch{return null}}function vd(e){try{let t=new TextEncoder().encode(e);return t.length===0||t.length>31?null:(new TextDecoder(`utf-8`,{fatal:!0}).decode(t),e)}catch{return null}}function yd(){try{let e=window.location.hash,t=e.indexOf(`?`);if(t===-1)return null;let n=new URLSearchParams(e.slice(t+1)).get(`ref`);return n?vd(n):null}catch{return null}}function bd(){return localStorage.getItem(md)}function xd(e){let t=vd(e);t&&localStorage.setItem(md,t)}function Sd(){localStorage.removeItem(md)}function Cd(){let e=yd();e!==null&&e!==localStorage.getItem(hd)&&(localStorage.setItem(hd,e),localStorage.setItem(md,e))}function wd(e){return gd(e)}var Td=(e,t)=>t.some(t=>e instanceof t),Ed,Dd;function Od(){return Ed||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function kd(){return Dd||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var Ad=new WeakMap,jd=new WeakMap,Md=new WeakMap;function Nd(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(zd(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return Md.set(t,e),t}function Pd(e){if(Ad.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});Ad.set(e,t)}var Fd={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return Ad.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zd(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function Id(e){Fd=e(Fd)}function Ld(e){return kd().includes(e)?function(...t){return e.apply(Bd(this),t),zd(this.request)}:function(...t){return zd(e.apply(Bd(this),t))}}function Rd(e){return typeof e==`function`?Ld(e):(e instanceof IDBTransaction&&Pd(e),Td(e,Od())?new Proxy(e,Fd):e)}function zd(e){if(e instanceof IDBRequest)return Nd(e);if(jd.has(e))return jd.get(e);let t=Rd(e);return t!==e&&(jd.set(e,t),Md.set(t,e)),t}var Bd=e=>Md.get(e);function Vd(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=zd(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(zd(o.result),e.oldVersion,e.newVersion,zd(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var Hd=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],Ud=[`put`,`add`,`delete`,`clear`],Wd=new Map;function Gd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(Wd.get(t))return Wd.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=Ud.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hd.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Wd.set(t,a),a}Id(e=>({...e,get:(t,n,r)=>Gd(t,n)||e.get(t,n,r),has:(t,n)=>!!Gd(t,n)||e.has(t,n)}));var Kd=[`continue`,`continuePrimaryKey`,`advance`],qd={},Jd=new WeakMap,Yd=new WeakMap,Xd={get(e,t){if(!Kd.includes(t))return e[t];let n=qd[t];return n||=qd[t]=function(...e){Jd.set(this,Yd.get(this)[t](...e))},n}};async function*Zd(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let n=new Proxy(t,Xd);for(Yd.set(n,t),Md.set(n,Bd(t));t;)yield n,t=await(Jd.get(n)||t.continue()),Jd.delete(n)}function Qd(e,t){return t===Symbol.asyncIterator&&Td(e,[IDBIndex,IDBObjectStore,IDBCursor])||t===`iterate`&&Td(e,[IDBIndex,IDBObjectStore])}Id(e=>({...e,get(t,n,r){return Qd(t,n)?Zd:e.get(t,n,r)},has(t,n){return Qd(t,n)||e.has(t,n)}}));var $d=globalThis,ef=$d.ShadowRoot&&($d.ShadyCSS===void 0||$d.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,tf=Symbol(),nf=new WeakMap,rf=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==tf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ef&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=nf.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&nf.set(t,e))}return e}toString(){return this.cssText}},af=e=>new rf(typeof e==`string`?e:e+``,void 0,tf),of=(e,...t)=>new rf(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,tf),sf=(e,t)=>{if(ef)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=$d.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},cf=ef?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return af(t)})(e):e,{is:lf,defineProperty:uf,getOwnPropertyDescriptor:df,getOwnPropertyNames:ff,getOwnPropertySymbols:pf,getPrototypeOf:mf}=Object,hf=globalThis,gf=hf.trustedTypes,_f=gf?gf.emptyScript:``,vf=hf.reactiveElementPolyfillSupport,yf=(e,t)=>e,bf={toAttribute(e,t){switch(t){case Boolean:e=e?_f:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},xf=(e,t)=>!lf(e,t),Sf={attribute:!0,type:String,converter:bf,reflect:!1,useDefault:!1,hasChanged:xf};Symbol.metadata??=Symbol(`metadata`),hf.litPropertyMetadata??=new WeakMap;var Cf=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Sf){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&uf(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=df(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Sf}static _$Ei(){if(this.hasOwnProperty(yf(`elementProperties`)))return;let e=mf(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(yf(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yf(`properties`))){let e=this.properties,t=[...ff(e),...pf(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(cf(e))}else e!==void 0&&t.push(cf(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sf(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?bf:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?bf:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??xf)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Cf.elementStyles=[],Cf.shadowRootOptions={mode:`open`},Cf[yf(`elementProperties`)]=new Map,Cf[yf(`finalized`)]=new Map,vf?.({ReactiveElement:Cf}),(hf.reactiveElementVersions??=[]).push(`2.1.2`);var wf=globalThis,Tf=e=>e,Ef=wf.trustedTypes,Df=Ef?Ef.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Of=`$lit$`,kf=`lit$${Math.random().toFixed(9).slice(2)}$`,Af=`?`+kf,jf=`<${Af}>`,Mf=document,Nf=()=>Mf.createComment(``),Pf=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ff=Array.isArray,If=e=>Ff(e)||typeof e?.[Symbol.iterator]==`function`,Lf=`[ 	
\f\r]`,Rf=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zf=/-->/g,Bf=/>/g,Vf=RegExp(`>|${Lf}(?:([^\\s"'>=/]+)(${Lf}*=${Lf}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Hf=/'/g,Uf=/"/g,Wf=/^(?:script|style|textarea|title)$/i,Gf=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),H=Gf(1),Kf=Gf(2),qf=Symbol.for(`lit-noChange`),U=Symbol.for(`lit-nothing`),Jf=new WeakMap,Yf=Mf.createTreeWalker(Mf,129);function Xf(e,t){if(!Ff(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Df===void 0?t:Df.createHTML(t)}var Zf=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Rf;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Rf?c[1]===`!--`?o=zf:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Vf):(Wf.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Vf):o=Bf:o===Vf?c[0]===`>`?(o=i??Rf,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Vf:c[3]===`"`?Uf:Hf):o===Uf||o===Hf?o=Vf:o===zf||o===Bf?o=Rf:(o=Vf,i=void 0);let d=o===Vf&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Rf?n+jf:l>=0?(r.push(s),n.slice(0,l)+Of+n.slice(l)+kf+d):n+kf+(l===-2?t:d)}return[Xf(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Qf=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Zf(t,n);if(this.el=e.createElement(l,r),Yf.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Yf.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Of)){let t=u[o++],n=i.getAttribute(e).split(kf),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?rp:r[1]===`?`?ip:r[1]===`@`?ap:np}),i.removeAttribute(e)}else e.startsWith(kf)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Wf.test(i.tagName)){let e=i.textContent.split(kf),t=e.length-1;if(t>0){i.textContent=Ef?Ef.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Nf()),Yf.nextNode(),c.push({type:2,index:++a});i.append(e[t],Nf())}}}else if(i.nodeType===8)if(i.data===Af)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(kf,e+1))!==-1;)c.push({type:7,index:a}),e+=kf.length-1}a++}}static createElement(e,t){let n=Mf.createElement(`template`);return n.innerHTML=e,n}};function $f(e,t,n=e,r){if(t===qf)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Pf(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=$f(e,i._$AS(e,t.values),i,r)),t}var ep=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Mf).importNode(t,!0);Yf.currentNode=r;let i=Yf.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new tp(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new op(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Yf.nextNode(),a++)}return Yf.currentNode=Mf,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},tp=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$f(this,e,t),Pf(e)?e===U||e==null||e===``?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==qf&&this._(e):e._$litType$===void 0?e.nodeType===void 0?If(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==U&&Pf(this._$AH)?this._$AA.nextSibling.data=e:this.T(Mf.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Qf.createElement(Xf(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ep(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Jf.get(e.strings);return t===void 0&&Jf.set(e.strings,t=new Qf(e)),t}k(t){Ff(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Nf()),this.O(Nf()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Tf(e).nextSibling;Tf(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},np=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=$f(this,e,t,0),a=!Pf(e)||e!==this._$AH&&e!==qf,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=$f(this,r[n+o],t,o),s===qf&&(s=this._$AH[o]),a||=!Pf(s)||s!==this._$AH[o],s===U?e=U:e!==U&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},rp=class extends np{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}},ip=class extends np{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}},ap=class extends np{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=$f(this,e,t,0)??U)===qf)return;let n=this._$AH,r=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==U&&(n===U||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},op=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){$f(this,e)}},sp=wf.litHtmlPolyfillSupport;sp?.(Qf,tp),(wf.litHtmlVersions??=[]).push(`3.3.2`);var cp=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new tp(t.insertBefore(Nf(),e),e,void 0,n??{})}return i._$AI(e),i},lp=globalThis,up=class extends Cf{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=cp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qf}};up._$litElement$=!0,up.finalized=!0,lp.litElementHydrateSupport?.({LitElement:up});var dp=lp.litElementPolyfillSupport;dp?.({LitElement:up}),(lp.litElementVersions??=[]).push(`4.2.2`);var W=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},fp={attribute:!0,type:String,converter:bf,reflect:!1,hasChanged:xf},pp=(e=fp,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function G(e){return(t,n)=>typeof n==`object`?pp(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function K(e){return G({...e,state:!0,attribute:!1})}var mp=10n**18n,hp=localStorage.getItem(`fomonad-denom`)??`mon`;function gp(){return hp}function _p(e){hp=e,localStorage.setItem(`fomonad-denom`,e),window.dispatchEvent(new CustomEvent(`denom-changed`))}function vp(){return Y(`meta.shmonRate`)??10n**18n}function yp(e,t){return`${e/mp}.${(e%mp).toString().padStart(18,`0`).slice(0,t)}`}function bp(e,t=4){return`${yp(e,t)} shMON`}function xp(e,t=4){return`${yp(e,t)} MON`}function Sp(e,t=4){let n=e*vp()/10n**18n;switch(hp){case`mon`:return`≈${xp(n,t)}`;default:case`shmon`:return`${yp(e,t)}\u00A0shMON`}}function Cp(e,t){let n=hp===`mon`?`MON`:`shMON`,r=Number(e);return r<1e6?`${(r/1e6).toFixed(4)} p${n}/\$${t}`:r<1e9?`${(r/1e6).toFixed(4)} n${n}/\$${t}`:r<0xe8d4a51000?`${(r/1e9).toFixed(4)} n${n}/\$${t}`:r<0x38d7ea4c68000?`${(r/0xe8d4a51000).toFixed(4)} μ${n}/\$${t}`:r<0xde0b6b3a7640000?`${(r/0x38d7ea4c68000).toFixed(4)} m${n}/\$${t}`:`${(r/0xde0b6b3a7640000).toFixed(6)} ${n}/\$${t}`}function wp(e,t){let n=Number(e)/0xde0b6b3a7640000;return n>=1e6?`${(n/1e6).toFixed(2)}M \$${t}`:n>=1e3?`${(n/1e3).toFixed(2)}k \$${t}`:`${n.toFixed(2)} \$${t}`}function Tp(e){let t=Number(e)/0xde0b6b3a7640000;return t>=1e6?`${(t/1e6).toFixed(2)}M`:t>=1e3?`${(t/1e3).toFixed(2)}k`:`${t.toFixed(2)}`}function Ep(e){return`${e.slice(0,6)}…${e.slice(-4)}`}function Dp(e){if(e<=0)return`00:00:00`;let t=Math.floor(e/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`}function Op(e){if(e<=0)return`00:00:00.000`;let t=Math.floor(e/1e3),n=Math.floor(e%1e3),r=Math.floor(t/3600),i=Math.floor(t%3600/60),a=t%60;return`${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}.${String(n).padStart(3,`0`)}`}function kp(e,t){if(t==0n)return`--%`;let n=10000n*e/t,r=n/100n,i=n%100n;return r+(i==0n?``:`.`+(``+i).padStart(2,`0`))+`%`}function q(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Ap=[...B.filter(e=>e.type===`error`),...V.filter(e=>e.type===`error`),...ud.filter(e=>e.type===`error`)];function jp(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.data==`string`&&/^0x[0-9a-fA-F]{8,}/.test(t.data)?t.data:t.cause?jp(t.cause):null}var Mp=`0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef`,Np=`0x0000000000000000000000000000000000000000`;function Pp(e,t){window.dispatchEvent(new CustomEvent(`tx-confirm-show`,{detail:{hash:e,action:t}}))}function J(e){let t=e,n=null,r=jp(e);if(r)try{n=ie({abi:Ap,data:r}).errorName}catch{}let i=typeof t?.shortMessage==`string`&&t.shortMessage||typeof t?.message==`string`&&t.message.split(`
`)[0]||String(e),a=typeof t?.message==`string`&&t.message||String(e),o=n||typeof t?.name==`string`&&t.name!==`Error`&&t.name||`ERROR`;window.dispatchEvent(new CustomEvent(`app-error-show`,{detail:{short:i,full:a,name:o}}))}var Fp=class extends up{constructor(...e){super(...e),this.open=!1,this.hash=null,this.action=``,this.transfers=null,this.errorMsg=``,this.errorFull=``,this.errorName=``,this._onError=e=>{this.errorMsg=e.detail.short,this.errorFull=e.detail.full,this.errorName=e.detail.name,this.hash=null,this.open=!0},this._onShow=e=>{this.hash=e.detail.hash,this.action=e.detail.action,this.transfers=null,this.open=!0,this._fetchTransfers(e.detail.hash)}}connectedCallback(){super.connectedCallback(),window.addEventListener(`tx-confirm-show`,this._onShow),window.addEventListener(`app-error-show`,this._onError)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`tx-confirm-show`,this._onShow),window.removeEventListener(`app-error-show`,this._onError)}async _fetchTransfers(e){let{connectedWallet:t}=await Yt(async()=>{let{connectedWallet:e}=await Promise.resolve().then(()=>Ku);return{connectedWallet:e}},void 0,import.meta.url);if(!t){this.transfers=[];return}let n=j,r=od(Zn),i=t.address.slice(2).toLowerCase(),a;for(let t=0;t<20;t++){try{if(a=await r.getTransactionReceipt({hash:e}),a)break}catch{}await new Promise(e=>setTimeout(e,800))}if(!a){this.transfers=[];return}let o=a.logs.filter(e=>e.topics[0]?.toLowerCase()===Mp&&e.topics[2]?.slice(-40).toLowerCase()===i);if(o.length===0){this.transfers=[];return}let s=[];for(let e of o){let t=e.address,i=`0x`+(e.topics[1]??`0x`).slice(-40),a=BigInt(e.data),o;if(t.toLowerCase()===n.fomon.toLowerCase())o=`foMON`;else if(t.toLowerCase()===n.shmon.toLowerCase())o=`shMON`;else{let e=Y(`token:${t.toLowerCase()}:symbol`);if(e)o=e;else try{o=await r.readContract({address:t,abi:V,functionName:`symbol`})}catch{o=t.slice(0,6)+`...`}}let c=i.toLowerCase()===Np&&t.toLowerCase()===n.fomon.toLowerCase();s.push({symbol:o,amount:a,isAirdrop:c})}this.transfers=s}_close(){this.open=!1}_breakPascal(e){return e.replace(/([a-z])([A-Z])/g,`$1​$2`)}async _copy(){this.hash&&await navigator.clipboard.writeText(this.hash)}static{this.styles=of`
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
  `}render(){if(!this.open)return H``;if(!this.hash)return H`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog error">
          <button class="close" @click=${this._close}>×</button>
          <div class="err-icon">✕&nbsp;${this._breakPascal(this.errorName)}</div>
          <div class="err-msg">${this.errorMsg}</div>
          ${this.errorFull&&this.errorFull!==this.errorMsg?H`
            <div class="err-detail">${this.errorFull}</div>
          `:``}
        </div>
      </div>
    `;let e=j,t=this.hash.slice(0,10)+`…`+this.hash.slice(-6),n=e.explorer?`${e.explorer}/tx/${this.hash}`:null;return H`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="dialog">
          <button class="close" @click=${this._close}>×</button>
          <div class="check">${this.transfers===null?H`<span class="spinner" style="display:inline-block;vertical-align:middle;margin-right:6px"></span>PENDING…`:`✓ CONFIRMED`}</div>
          <div class="action">${this.action}</div>

          <div class="hash-row">
            <span class="hash">${t}</span>
            <button class="copy-btn" @click=${this._copy}>copy</button>
            ${n?H`<a class="explorer-link" href=${n} target="_blank">view ↗</a>`:``}
          </div>

          ${this.transfers===null||this.transfers.length>0?H`
            <hr class="divider"/>
            <div class="transfers-title">token transfers</div>
            ${this.transfers===null?H`<div class="loading"><div class="spinner"></div>awaiting confirmation…</div>`:this.transfers.map(e=>H`
                <div class="transfer">
                  <span class="plus">+</span>
                  <span class="t-amount">${Tp(e.amount)}</span>
                  <span class="t-symbol">${e.symbol}</span>
                  ${e.isAirdrop?H`<span class="airdrop-badge">airdrop</span>`:``}
                </div>
              `)}
          `:``}
        </div>
      </div>
    `}};q([K()],Fp.prototype,`open`,void 0),q([K()],Fp.prototype,`hash`,void 0),q([K()],Fp.prototype,`action`,void 0),q([K()],Fp.prototype,`transfers`,void 0),q([K()],Fp.prototype,`errorMsg`,void 0),q([K()],Fp.prototype,`errorFull`,void 0),q([K()],Fp.prototype,`errorName`,void 0),Fp=q([W(`tx-confirm-dialog`)],Fp);var Ip=null,Lp=!1;async function Rp(){if(!Ip||Lp)return;Lp=!0;let e=await nr(()=>R(e=>e.readContract({address:j.game,abi:B,functionName:`cycle`})),!1,`vibecoin_db_cycle`);for(;e>0n;){if(await Ip.getFromIndex(`vibecoins`,`by-cycle`,Number(e))!=null){e--;continue}let t=await nr(()=>R(t=>t.readContract({address:j.game,abi:B,functionName:`vibecoinByCycle`,args:[e]})),!1,`vibecoin_db_cycle_`+e);if(!t||t==`0x0000000000000000000000000000000000000000`){e--;continue}let[n,r]=await Promise.all([nr(()=>R(e=>e.readContract({address:t,abi:V,functionName:`name`})),!0,`vibecoin_db_cycle_`+e),nr(()=>R(e=>e.readContract({address:t,abi:V,functionName:`symbol`})),!0,`vibecoin_db_cycle_`+e)]);await Ip.put(`vibecoins`,{address:t.toLowerCase(),cycle:Number(e),name:n.toLowerCase(),symbol:r.toLowerCase()}),e--}Lp=!1}window.addEventListener(`lls-updated`,({detail:e})=>{for(let[t,n]of e)t==`game.phase`&&n==2&&Rp().catch(e=>{J(e)})}),(async()=>{Ip=await Vd(`rugpad`,1,{upgrade(e){let t=e.createObjectStore(`vibecoins`,{keyPath:`address`});t.createIndex(`by-cycle`,`cycle`),t.createIndex(`by-symbol`,`symbol`),t.createIndex(`by-name`,`name`)}}),await Rp()})().catch(e=>{J(e)});function zp(e){if(!e)return IDBKeyRange.lowerBound(``);let t=e.length-1,n=e.substring(0,t)+String.fromCharCode(e.charCodeAt(t)+1);return IDBKeyRange.bound(e,n,!1,!0)}async function Bp(e){let t=zp(e);if(!Ip)return null;if(e.startsWith(`0x`))return(await Ip.getAll(`vibecoins`,t,10)).map(e=>e.cycle);let n=(await Ip.getAllFromIndex(`vibecoins`,`by-symbol`,t,10)).map(e=>e.cycle);return n.length<10&&n.push(...(await Ip.getAllFromIndex(`vibecoins`,`by-name`,t,10-n.length)).map(e=>e.cycle)),n}async function Vp(e){if(e=Number(e),Ip)return(await Ip.getFromIndex(`vibecoins`,`by-cycle`,e))?.address}var Hp=300*1e3,Up=30*1e3,Wp=3333;function Gp(){Z(`meta.chainTimeDelta`,[`meta.chainTimeDelta`],async()=>{let e=await R(e=>e.getBlock({blockTag:`latest`})),t=Number(e.timestamp)-Date.now()/1e3;return t<60&&(t=0),[t]},X.Static),Z(`meta.shmonRate`,[`meta.shmonRate`],async()=>[await R(e=>e.readContract({address:j.shmon,abi:dd,functionName:`convertToAssets`,args:[10n**18n]}))],X.Live,Hp),Z(`game.state`,[`game.phase`,`game.cycle`,`game.phaseEndTime`,`game.prizePool`,`game.lastBuyer`,`game.vibecoin`,`game.isSettled`],async()=>{let e=await R(e=>e.readContract({address:j.game,abi:B,functionName:`gameState`,args:[!1]})),t=e.phase===3;return[e.phase,e.cycle,e.phaseEndTime,e.prizePool,e.lastBuyer,e.vibecoin.toLowerCase(),t]},X.Live),Z(`game.vibecoinByCycle$`,[`game.vibecoinByCycle$`],async e=>[await Vp(Number(e))],X.StaticWhenKnown),Z(`game.seriesADeposit$from$`,[`game.seriesADeposit$from$`],async(e,t)=>[await R(n=>n.readContract({address:j.game,abi:B,functionName:`seriesADeposits`,args:[BigInt(e),t]}))],X.Live,Wp),Z(`game.seriesBDeposit$from$`,[`game.seriesBDeposit$from$`],async(e,t)=>[await R(n=>n.readContract({address:j.game,abi:B,functionName:`seriesBDeposits`,args:[BigInt(e),t]}))],X.Live,Wp),Z(`game.seriesADeposit$`,[`game.seriesADeposit$`],async e=>{let t=BigInt(e),n=Y(`game.cycle`),r=Y(`game.phase`);return n==null||r==null?[void 0]:t==n&&r<2?[await R(e=>e.readContract({address:j.game,abi:B,functionName:`totalSeriesA`,args:[]}))]:[await R(e=>e.readContract({address:j.game,abi:B,functionName:`totalSeriesAByCycle`,args:[t]}))]},X.Live,Up,[`game.cycle`,`game.phase`]),Z(`game.seriesBDeposit$`,[`game.seriesBDeposit$`],async e=>{let t=BigInt(e),n=Y(`game.cycle`),r=Y(`game.phase`);return n==null||r==null?[void 0]:t==n&&r<2?[await R(e=>e.readContract({address:j.game,abi:B,functionName:`totalSeriesB`,args:[]}))]:[await R(e=>e.readContract({address:j.game,abi:B,functionName:`totalSeriesBByCycle`,args:[t]}))]},X.Live,Up,[`game.cycle`,`game.phase`]);for(let e of[`tokensSeriesAByCycle`,`tokensSeriesBByCycle`,`winnerByCycle`,`prizeByCycle`])Z(`game.`+e+`$`,[`game.`+e+`$`],async t=>{let n=BigInt(t);return[await R(t=>t.readContract({address:j.game,abi:B,functionName:e,args:[n]}))]},X.Live,Up);Z(`game.referralEarned$`,[`game.referralEarned$`],async e=>[await R(t=>t.readContract({address:j.game,abi:B,functionName:`referralEarned`,args:[e]}))],X.Live,Up),Z(`game.referralCodeOf$`,[`game.referralCodeOf$`],async e=>[_d(await R(t=>t.readContract({address:j.game,abi:B,functionName:`referralCodeOf`,args:[e]})))||``],X.Live,Up),Z(`game.settlementTimestamp`,[`game.settlementTimestamp`],async()=>[await R(e=>e.readContract({address:j.game,abi:B,functionName:`settlementTimestamp`,args:[]}))],X.Live,Up),Z(`game.consts`,[`game.const.seriesADuration`,`game.const.seriesAProtocol`,`game.const.seriesAReferral`,`game.const.seriesAPrize`,`game.const.seriesBProtocol`,`game.const.seriesBReferral`,`game.const.seriesBPrize`,`game.const.pumpProtocol`,`game.const.pumpReferral`,`game.const.pumpPrize`],async()=>{let e=[`SERIES_A_DURATION`,`SERIES_A_PROTOCOL`,`SERIES_A_REFERRAL`,`SERIES_A_PRIZE`,`SERIES_B_PROTOCOL`,`SERIES_B_REFERRAL`,`SERIES_B_PRIZE`,`PUMP_PROTOCOL`,`PUMP_REFERRAL`,`PUMP_PRIZE`],t=[];for(let n of e)try{t.push(await R(e=>e.readContract({address:j.game,abi:B,functionName:n}))),await new Promise(e=>setTimeout(e,95))}catch{t.push(void 0)}return t},X.StaticWhenKnown),Z(`token$balance$`,[`token$balance$`],async(e,t)=>e==`native`?[await R(e=>e.getBalance({address:t}))]:[await R(n=>n.readContract({address:e,abi:V,functionName:`balanceOf`,args:[t]}))],X.Live,Wp),Z(`token$earned$`,[`token$earned$`],async(e,t)=>[await R(n=>n.readContract({address:e,abi:V,functionName:`earned`,args:[t]}))],X.Live,Wp),Z(`token$pendingRewards$`,[`token$pendingRewards$`],async(e,t)=>[await R(n=>n.readContract({address:e,abi:ud,functionName:`pendingRewards`,args:[t]}))],X.Live,Wp),Z(`token$optedIn$`,[`token$optedIn$`],async(e,t)=>[await R(n=>n.readContract({address:e,abi:ud,functionName:`optedIn`,args:[t]}))],X.Live,Wp),Z(`token$seed`,[`token$seed`,`token$palette`],async e=>{let t=await R(t=>t.readContract({address:e,abi:V,functionName:`seed`,args:[]}));return[t,pd(t)]},X.StaticWhenKnown);for(let e of[`name`,`symbol`,`K`,`P0`])Z(`token$`+e,[`token$`+e],async t=>[await R(n=>n.readContract({address:t,abi:V,functionName:e,args:[]}))],X.StaticWhenKnown);Z(`token$logoUri`,[`token$logoUri`],async e=>{let t=await R(t=>t.readContract({address:e,abi:V,functionName:`tokenURI`,args:[]}));return t.startsWith(`data:application/json`)?[JSON.parse(atob(t.split(`,`)[1])).image]:[void 0]},X.StaticWhenKnown);for(let e of[`totalSupply`,`poolBalance`,`athPrice`,`totalVolume`,`volume24h`])Z(`token$`+e,[`token$`+e],async t=>[await R(n=>n.readContract({address:t,abi:V,functionName:e,args:[]}))],X.Live,Up);for(let e of[`unlocked`,`athPostRug`])Z(`token$`+e,[`token$`+e],async t=>{let n=await R(n=>n.readContract({address:t,abi:V,functionName:e,args:[]}));return n&&ir.remove(`token:`+t+`:`+e),[n]},X.Live,Up);Z(`fomon.consts`,[`fomon.const.airdropReserve`,`fomon.const.totalSupply`],async()=>{let e=[`AIRDROP_RESERVE`,`TOTAL_SUPPLY`],t=[];for(let n of e)try{t.push(await R(e=>e.readContract({address:j.game,abi:ud,functionName:n}))),await new Promise(e=>setTimeout(e,95))}catch{t.push(void 0)}return t},X.StaticWhenKnown),Z(`fomon.minted`,[`fomon.airdropMinted`,`fomon.airdropRemaining`],async()=>{let e=await R(e=>e.readContract({address:j.fomon,abi:ud,functionName:`totalAirdropMinted`})),t=Y(`fomon.const.airdropReserve`);return[e,t==null?void 0:t-e]},X.Live,0,[`fomon.const.airdropReserve`]),Z(`fomon.mintable`,[`fomon.mintable`],async()=>[await R(e=>e.readContract({address:j.fomon,abi:ud,functionName:`remainingCeiling`}))],X.Live)}var Kp=new Map([[`token:native:name`,`Monad`],[`token:native:symbol`,`MON`],[`token:${j.shmon.toLowerCase()}:symbol`,`shMON`],[`token:${j.fomon.toLowerCase()}:symbol`,`foMON`]]),qp=new Map,Jp=new Set,Yp=new Map,Xp=new Map,Zp=new Map,Qp=0;Qn(`rugpad_storage_revision`)!==Qp&&(localStorage.clear(),$n(`rugpad_storage_revision`,Qp));function $p(e){let t=[],n=``,r=0,i=e.indexOf(`:`);for(;i!=-1;)n+=e.substring(r,i)+`$`,r=i+1,i=e.indexOf(`:`,r),i==-1&&(i=e.length),t.push(e.substring(r,i)),r=i+1,i=e.indexOf(`:`,r);return n+=e.substring(r),[n,t]}function em(e,t){t=[...t].reverse();let n=e.replaceAll(`$`,()=>`:`+(t.pop()??console.warn(e,`fed too little arguments`)??``)+`:`);return n.endsWith(`:`)?n.substring(0,n.length-1):n}function Y(e,t,...n){let r=Jp.has(e);if(r){let[t,r]=$p(e);tm(em(qp.get(t),r),n)}let i=Kp.get(e);if(i!==void 0)return i;if(i=Qn(`lls:`+Zn+`:`+e),i!==void 0)return Kp.set(e,i),i;if(!r){let[r,i]=$p(e),a=qp.get(r);if(!a){console.error(e,`has no associated task! This may result in an infinite loading circle.`);return}let o=Yp.get(a);if(!o){console.error(a,`was not defined! This may result in an infinite loading circle.`);return}Jp.add(e);let s=em(a,i);for(let e of Xp.get(a)||[]){Y(em(e,i),t,...n);let a=qp.get(r);if(!a)continue;let o=em(a,i),c=Zp.get(s);c||(c=new Set,Zp.set(s,c)),c.add(o)}let c=o.fn,l={name:s,fn:()=>c(...i),repeatMs:o.repeatMs};t?ir.prepend(l):ir.upsert(l),ir.elementRequestedTask(s,...n)}}function tm(e,t,n=new Set){if(!n.has(e)){n.add(e),ir.elementRequestedTask(e,...t);for(let r of Zp.get(e)||[])tm(r,t,n)}}var X=function(e){return e[e.Static=0]=`Static`,e[e.StaticWhenKnown=1]=`StaticWhenKnown`,e[e.Live=2]=`Live`,e}({});function Z(e,t,n,r,i=0,a=[]){Xp.set(e,a),Yp.set(e,{template:e,fn:async(...i)=>{let a=await n(...i),o=!1,s=new Map;for(let e=0;e<t.length;e+=1){let n=t[e],c=em(n,i),l=Kp.get(c),u=a[e];l!==u&&s.set(c,u),u===void 0?o=!0:(Kp.set(c,u),r<=X.StaticWhenKnown&&$n(`lls:`+Zn+`:`+c,u))}if(r==X.StaticWhenKnown&&!o){let t=em(e,i);ir.remove(t)}s.size&&window.dispatchEvent(new CustomEvent(`lls-updated`,{detail:s}))},repeatMs:r==X.Static?void 0:i});for(let n of t)qp.set(n,e)}function nm(){Gp()}var rm=25,im=5,am=1,om=60,sm=90,cm=class extends HTMLElement{constructor(...e){super(...e),this._phosphor=null,this._rafId=0,this._marqueeX=0,this._marqueeText=`VIBE CHECKING...`,this._marqueeColor=`rgba(255,230,0,0.9)`,this._candles=[],this._loadingVcAddr=``,this._currentVcAddr=``,this._K=0n,this._P0=0n,this._onLiveUpdate=()=>{let e=Y(`game.phase`,!1,this),t=Y(`game.cycle`,!1,this),n=Y(`game.phaseEndTime`,!1,this),r=Y(`meta.chainTimeDelta`,!1,this)??0,i=Number(Y(`game.const.seriesADuration`,!1,this));if(e===void 0||t===void 0||n==null||isNaN(i)){this._marqueeText=`VIBE CHECKING...`,this._marqueeColor=`rgba(255,230,0,0.9)`;return}let a=Date.now()/1e3+r,o=e===0&&n>0n?Number(n)-a:1/0,s=e===0&&t>1n&&(n===0n||o>i/2),c=s?t-1n:t,l=s?3:e,u=Y(`game.vibecoinByCycle:${c}`,!1,this);if(u===void 0){this._marqueeText=`VIBE CHECKING...`,this._marqueeColor=`rgba(255,230,0,0.9)`;return}let d=u.toLowerCase();if(l===2&&a<Number(n)){let e=Y(`token:${d}:name`,!1,this),t=Y(`token:${d}:symbol`,!1,this);e===void 0||t===void 0?(this._marqueeText=`VIBE CHECKING...`,this._marqueeColor=`rgba(255,230,0,0.9)`):(this._marqueeText=`PUMP ${e}! — $${t} TO THE MOON`,this._marqueeColor=`rgba(0,229,255,0.9)`)}else l===3||l===2&&a>=Number(n)?(this._marqueeText=`GET RUGGED`,this._marqueeColor=`rgba(255,45,107,0.9)`):(this._marqueeText=`GENERATING VIBECOIN`,this._marqueeColor=`rgba(255,230,0,0.9)`);let f=Y(`token:${d}:K`,!1,this),p=Y(`token:${d}:P0`,!1,this);if(u!==this._currentVcAddr&&d!==`0x0000000000000000000000000000000000000000`&&p!=null&&f!=null){this._K=f,this._P0=p,this._currentVcAddr=u,this._candles=[];let e=this._buf.width||Math.ceil(window.innerWidth/rm);this._startCandleLoad(u,this._K,this._P0,Math.ceil(e/im)+2)}let m=Y(`token:${d}:totalSupply`,!1,this);if(m!==void 0&&this._candles[0]&&p!=null&&f!=null){let e=Number(this._P0+this._K*m/10n**18n),t=this._candles[0];this._candles[0]={open:t.open,close:e,high:Math.max(t.high,e),low:Math.min(t.low,e)}}}}connectedCallback(){this.style.cssText=`position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden`,this._canvas=document.createElement(`canvas`),this._canvas.style.cssText=`display:block;width:100%;height:100%`,this.appendChild(this._canvas),this._ctx=this._canvas.getContext(`2d`),this._buf=document.createElement(`canvas`),this._bCtx=this._buf.getContext(`2d`),this._bloom=document.createElement(`canvas`),this._blCtx=this._bloom.getContext(`2d`),this._ro=new ResizeObserver(()=>this._onResize()),this._ro.observe(this),window.addEventListener(`lls-updated`,this._onLiveUpdate),this._onLiveUpdate(),this._startAnimation()}disconnectedCallback(){cancelAnimationFrame(this._rafId),this._ro.disconnect(),window.removeEventListener(`lls-updated`,this._onLiveUpdate)}_onResize(){let e=Math.round(this.offsetWidth),t=Math.round(this.offsetHeight);if(!e||!t)return;this._canvas.width=e,this._canvas.height=t,this._bloom.width=e,this._bloom.height=t;let n=Math.ceil(e/rm),r=Math.ceil(t/rm);this._buf.width=n,this._buf.height=r;let i=document.createElement(`canvas`);i.width=rm,i.height=rm;let a=i.getContext(`2d`),o=rm-4,s=Math.floor(o/3);a.fillStyle=`#000`,a.fillRect(0,0,rm,rm),a.fillStyle=`rgb(255,0,0)`,a.fillRect(2,2,s,o),a.fillStyle=`rgb(0,255,0)`,a.fillRect(2+s,2,s,o),a.fillStyle=`rgb(0,0,255)`,a.fillRect(2+s*2,2,s,o),this._phosphor=this._ctx.createPattern(i,`repeat`);let c=Math.ceil(n/im)+2;c>this._candles.length&&this._currentVcAddr&&this._startCandleLoad(this._currentVcAddr,this._K,this._P0,c)}_startCandleLoad(e,t,n,r){this._loadingVcAddr=e,setTimeout(()=>{this._loadingVcAddr===e&&this._loadCandles(e,t,n,r)},3e3)}async _loadCandles(e,t,n,r){let i=od(),a=10n**18n,o,s;try{let t=await nr(()=>i.getBlock(),!1,`candle:${e}:ref`);o=t.number,s=Number(t.timestamp)}catch{return}if(this._loadingVcAddr!==e)return;let c=150n;try{let t=await nr(()=>i.getBlock({blockNumber:o-50n}),!1,`candle:${e}:probe`),n=s-Number(t.timestamp);n>0&&(c=BigInt(Math.round(50*om/n)))}catch{}if(this._loadingVcAddr!==e)return;let l=[];for(let s=0;s<=r;s++){if(this._loadingVcAddr!==e)return;let r=o-BigInt(s)*c;if(r<0n){l.push(null);continue}try{let o=await nr(()=>i.readContract({address:e,abi:V,functionName:`totalSupply`,blockNumber:r}),!1,`candle:${e}:s${s}`);l.push(Number(n+t*o/a))}catch{l.push(null)}}if(this._loadingVcAddr===e)for(let e=0;e<r;e++){let t=l[e],n=l[e+1];t!==null&&n!==null&&(this._candles[e]={close:t,open:n,high:Math.max(t,n),low:Math.min(t,n)})}}_startAnimation(){let e=performance.now(),t=n=>{let r=(n-e)/1e3;e=n,this._marqueeX-=sm*r,this._draw(),this._rafId=requestAnimationFrame(t)};this._rafId=requestAnimationFrame(t)}_draw(){let e=this._canvas.width,t=this._canvas.height,n=this._buf.width,r=this._buf.height;if(!e||!t||!n||!r)return;let i=this._bCtx;i.fillStyle=`rgb(6,6,8)`,i.fillRect(0,0,n,r),this._drawCandlesBuf(i,n,r),this._drawMarqueeBuf(i,n,r);let a=n*rm,o=r*rm,s=this._ctx;s.imageSmoothingEnabled=!1,s.drawImage(this._buf,0,0,a,o),this._phosphor&&(s.globalCompositeOperation=`multiply`,s.fillStyle=this._phosphor,s.fillRect(0,0,a,o),s.globalCompositeOperation=`source-over`);let c=this._blCtx;c.clearRect(0,0,e,t),c.filter=`blur(5px)`,c.drawImage(this._canvas,0,0),c.filter=`none`,s.globalCompositeOperation=`screen`,s.globalAlpha=.35,s.drawImage(this._bloom,0,0),s.globalAlpha=1,s.globalCompositeOperation=`source-over`}_drawCandlesBuf(e,t,n){let r=this._candles.filter(e=>e!==null);if(r.length<2)return;let i=1/0,a=-1/0;for(let e of r)e.low<i&&(i=e.low),e.high>a&&(a=e.high);if(a===i)return;let o=Math.round(n*.1),s=Math.round(n*.1),c=n-o-s,l=e=>n-s-Math.round((e-i)/(a-i)*c);for(let n=0;n<r.length;n++){let i=r[n],a=t-(n+1)*im;if(a+im<0)break;e.fillStyle=i.close>=i.open?`rgba(0,229,255,0.2)`:`rgba(255,45,107,0.2)`;let o=a+Math.floor((im-am)/2),s=l(i.high),c=l(i.low);e.fillRect(o,s,am,Math.max(1,c-s));let u=l(Math.max(i.open,i.close)),d=l(Math.min(i.open,i.close));e.fillRect(a,u,im,Math.max(1,d-u))}}_drawMarqueeBuf(e,t,n){let r=Math.round(n*.8);e.save(),e.font=`${r}px "Bebas Neue", sans-serif`,e.fillStyle=this._marqueeColor,e.textBaseline=`middle`;let i=this._marqueeText+` — `,a=e.measureText(i).width;if(a<1){e.restore();return}let o=(this._marqueeX/rm%a-a)%a;for(;o<t+a;)e.fillText(i,o,n/2),o+=a;e.restore()}};customElements.get(`app-background`)||customElements.define(`app-background`,cm);var lm=10n**18n,Q=class extends up{constructor(...e){super(...e),this.liveKeys=new Set,this._onLiveUpdate=e=>{for(let t of this.liveKeys)if(e.detail.has(t)){this.requestUpdate();break}},this._onDenomChanged=()=>this.requestUpdate()}static{this.styles=of`
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
  `}get spin(){return H`<span class="spin"></span>`}connectedCallback(){super.connectedCallback(),window.addEventListener(`lls-updated`,this._onLiveUpdate),window.addEventListener(`denom-changed`,this._onDenomChanged),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`lls-updated`,this._onLiveUpdate),window.removeEventListener(`denom-changed`,this._onDenomChanged)}willUpdate(e){this.liveKeys.clear()}liveValue(e,t){return this.liveKeys.add(e),Y(e,t,this)}},um=class extends Q{constructor(...e){super(...e),this.key=``,this.numerator=1,this.denominator=1}_tokenPrefix(){if(this.key.startsWith(`fomon.`))return`token:`+j.fomon.toLocaleLowerCase();let e=this.key.match(/^token:(0x[a-fA-F0-9]+|native)/);return e?`token:${e[1]}`:null}render(){if(!this.key)return H`${this.spin}`;let e=`token:${j.shmon.toLowerCase()}`,t=[`:poolBalance`,`:totalVolume`,`:volume24h`].some(e=>this.key.endsWith(e))||this.key.includes(`:pendingRewards`)?e:this._tokenPrefix()??e,n=gp(),r=n===`mon`?`token:native`:e,i=this.liveValue(`${r}:symbol`);if(i==null)return H`${this.spin}`;let a=this.liveValue(this.key);if(this.liveValue(`meta.shmonRate`)==null||a==null)return H`${this.spin} ${i}`;let o=e=>this.numerator!==1||this.denominator!==1?e*BigInt(this.numerator)/BigInt(this.denominator):e,s;if(t===`token:native`){let e=vp();s=e>0n?o(a)*lm/e:0n}else if(t===e)s=o(a);else{let e=this.liveValue(`${t}:K`),n=this.liveValue(`${t}:P0`),r=this.liveValue(`${t}:totalSupply`);if(e==null||n==null||r==null)return H`${this.spin} ${i}`;s=(n+e*r/lm)*o(a)/lm}let c=t===r?``:`≈`;return n===`mon`?H`${c}${wp(s*vp()/lm,i)}`:H`${c}${wp(s,i)}`}};q([G()],um.prototype,`key`,void 0),q([G({type:Number})],um.prototype,`numerator`,void 0),q([G({type:Number})],um.prototype,`denominator`,void 0),um=q([W(`live-valuation`)],um);var dm=class extends Q{constructor(...e){super(...e),this.valueKey=``,this.long=!1}_symbolKey(){return this.valueKey.startsWith(`fomon.`)?`token:`+j.fomon.toLocaleLowerCase()+`:symbol`:this.valueKey.replace(/:(?!0x|native).*$/,`:symbol`)}render(){let e=this._symbolKey(),t=this.liveValue(e),n=this.liveValue(this.valueKey);if(!this.valueKey||n===void 0||t===void 0)return H`${this.spin}${t?H` $${t}`:``}`;if(this.long){let e=Number(n/10n**15n)/1e3;return H`${Intl.NumberFormat().format(e)} \$${t}`}return H`${wp(n,t)}`}};q([G({attribute:`value-key`})],dm.prototype,`valueKey`,void 0),q([G({type:Boolean})],dm.prototype,`long`,void 0),dm=q([W(`live-token-amount`)],dm);var fm=class extends Q{constructor(...e){super(...e),this.valueKey=``}_symbolKey(){return this.valueKey.startsWith(`fomon.`)?`token:`+j.fomon.toLocaleLowerCase()+`:symbol`:this.valueKey.replace(/:(?!0x|native).*$/,`:symbol`)}render(){let e=this._symbolKey(),t=this.liveValue(e),n=this.liveValue(this.valueKey);this.liveValue(`meta.shmonRate`);let r=gp()===`mon`?`MON`:`shMON`;return!this.valueKey||n===void 0||t===void 0?H`${this.spin} ${r}${t?H`/$${t}`:``}`:H`${Cp(n,t)}`}};q([G({attribute:`value-key`})],fm.prototype,`valueKey`,void 0),fm=q([W(`live-token-price`)],fm);var pm=class extends Q{constructor(...e){super(...e),this.numKey=``,this.demKey=``}render(){let e=this.liveValue(this.numKey),t=this.liveValue(this.demKey);return!this.numKey||!this.demKey||e===void 0||t===void 0?H`${this.spin}%`:H`${kp(e,t)}`}};q([G({attribute:`num-key`})],pm.prototype,`numKey`,void 0),q([G({attribute:`dem-key`})],pm.prototype,`demKey`,void 0),pm=q([W(`live-percent`)],pm);var mm=class extends Q{constructor(...e){super(...e),this.key=``,this.full=!1}render(){let e=this.liveValue(this.key);if(!this.key||e===void 0)return H`0x${this.spin}…${this.spin}`;let t=this.full?e:Ep(e),n=j.explorer;return n?H`<a href="${n}/address/${e}" target="_blank" rel="noopener noreferrer">${t}</a>`:H`${t}`}};q([G()],mm.prototype,`key`,void 0),q([G({type:Boolean})],mm.prototype,`full`,void 0),mm=q([W(`live-address`)],mm);var hm=class extends Q{constructor(...e){super(...e),this.key=``,this.fallback=`--`}render(){let e=this.liveValue(this.key);return!this.key||e===void 0?H`${this.spin}`:H`${e??this.fallback}`}};q([G()],hm.prototype,`key`,void 0),q([G()],hm.prototype,`fallback`,void 0),hm=q([W(`live-string`)],hm);var gm=class extends Q{constructor(...e){super(...e),this.key=``,this.milliseconds=!1,this.warningMs=300*1e3,this._interval=null}static{this.styles=[Q.styles,of`
      :host(.warning) {
        color: #ff2d6b;
        text-shadow: 0 0 20px #ff2d6b;
        animation: lc-pulse 0.8s ease-in-out infinite;
      }
      @keyframes lc-pulse {
        0%, 100% { opacity: 1; text-shadow: 0 0 24px #ff2d6b; }
        50% { opacity: 0.7; text-shadow: 0 0 8px #ff2d6b; }
      }
    `]}connectedCallback(){super.connectedCallback();let e=this.milliseconds?50:1e3;this._interval=setInterval(()=>this.requestUpdate(),e)}disconnectedCallback(){super.disconnectedCallback(),this._interval!==null&&(clearInterval(this._interval),this._interval=null)}render(){let e=this.liveValue(this.key);if(!this.key||e===void 0){this.classList.remove(`warning`);let e=this.spin;return this.milliseconds?H`${e}:${e}:${e}.${e}`:H`${e}:${e}:${e}`}let t=Number(e)*1e3-Date.now();return this.classList.toggle(`warning`,t>0&&t<=this.warningMs),H`${(this.milliseconds?Op:Dp)(t)}`}};q([G()],gm.prototype,`key`,void 0),q([G({type:Boolean})],gm.prototype,`milliseconds`,void 0),q([G({type:Number,attribute:`warning-ms`})],gm.prototype,`warningMs`,void 0),gm=q([W(`live-countdown`)],gm);var _m=class extends Q{constructor(...e){super(...e),this.prefix=``}render(){let e=gp(),t=e===`mon`?`MON`:`shMON`,n=this.liveValue(`${this.prefix}:K`),r=this.liveValue(`${this.prefix}:P0`),i=this.liveValue(`${this.prefix}:totalSupply`);if(this.liveValue(`meta.shmonRate`),!this.prefix||n===void 0||r===void 0||i===void 0)return H`${this.spin} ${t}`;let a=(r+n*i/lm)*i/lm;if(e===`mon`){let e=vp();return H`≈${wp(e>0n?a*e/lm:0n,`MON`)}`}return H`≈${wp(a,`shMON`)}`}};q([G()],_m.prototype,`prefix`,void 0),_m=q([W(`live-bonding-mcap`)],_m);var vm=class extends Q{constructor(...e){super(...e),this.prefix=``}render(){let e=this.liveValue(`${this.prefix}:symbol`),t=this.liveValue(`${this.prefix}:K`),n=this.liveValue(`${this.prefix}:P0`),r=this.liveValue(`${this.prefix}:totalSupply`);if(!this.prefix||t===void 0||n===void 0||r===void 0)return H`${this.spin}${e?H` shMON/$${e}`:``}`;let i=n+t*r/lm;return H`${(Number(i)/0xde0b6b3a7640000).toFixed(9)} shMON/$${e??`?`}`}};q([G()],vm.prototype,`prefix`,void 0),vm=q([W(`live-bonding-price`)],vm);var ym=class extends Q{constructor(...e){super(...e),this.allocKey=``,this.depositKey=``,this.totalKey=``,this.symbolKey=``}render(){let e=this.liveValue(this.symbolKey),t=this.liveValue(this.allocKey),n=this.liveValue(this.depositKey),r=this.liveValue(this.totalKey);return!this.allocKey||!this.depositKey||!this.totalKey||t===void 0||n===void 0||r===void 0?H`${this.spin}${e?H` $${e}`:``}`:r===0n||t===0n?H`—`:H`${wp(t*n/r,e??`?`)}`}};q([G({attribute:`alloc-key`})],ym.prototype,`allocKey`,void 0),q([G({attribute:`deposit-key`})],ym.prototype,`depositKey`,void 0),q([G({attribute:`total-key`})],ym.prototype,`totalKey`,void 0),q([G({attribute:`symbol-key`})],ym.prototype,`symbolKey`,void 0),ym=q([W(`live-series-tokens`)],ym);var bm=`fomonad-fomon-visited`,$=class extends Q{constructor(...e){super(...e),this.open=!1,this.providerOpen=!1,this.referralCode=``,this.activeRefInput=``,this.registerPending=!1,this.claimPending=!1,this.confirmReg=!1,this.regEligError=!1,this.copiedRef=!1,this.copied=!1,this.denomPref=gp(),this._wrongNetworkClicks=0,this._onWalletChanged=()=>{L?.chainId===10143&&(this._wrongNetworkClicks=0),this.requestUpdate()},this._onDocClick=e=>{e.composedPath().includes(this)||(this.open=!1,this.providerOpen=!1)}}static{this.styles=[Q.styles,of`
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
  `]}connectedCallback(){super.connectedCallback(),Ju.addEventListener(`wallet-changed`,this._onWalletChanged),document.addEventListener(`click`,this._onDocClick)}disconnectedCallback(){super.disconnectedCallback(),Ju.removeEventListener(`wallet-changed`,this._onWalletChanged),document.removeEventListener(`click`,this._onDocClick)}async _connect(e){await Qu(e),ed(e.info.rdns),await ld(Zn),this.providerOpen=!1,this.requestUpdate()}_disconnect(){$u(),td(),this.open=!1}async _copyAddress(){L&&(await navigator.clipboard.writeText(L.address),this.copied=!0,setTimeout(()=>{this.copied=!1},1500))}async _claimFoMon(){let e=z();if(!(!e||!L)){this.claimPending=!0;try{Pp(await e.writeContract({address:j.fomon,abi:ud,functionName:`claim`,account:L.address,chain:e.chain}),`Claimed foMON dividends`)}catch(e){J(e)}finally{this.claimPending=!1}}}async _optIn(){let e=z();if(!(!e||!L))try{Pp(await e.writeContract({address:j.fomon,abi:ud,functionName:`optIn`,account:L.address,chain:e.chain}),`Opted in to foMON dividends`)}catch(e){J(e)}}async _checkEligAndConfirm(){if(!this.referralCode||!L)return;let e=od();try{await e.simulateContract({address:j.game,abi:B,functionName:`registerReferral`,args:[gd(this.referralCode)],account:L.address}),this.regEligError=!1,this.confirmReg=!0}catch{this.regEligError=!0}}async _registerReferral(){if(!this.referralCode||!this.confirmReg)return;let e=z();if(!(!e||!L)){this.registerPending=!0,this.confirmReg=!1;try{let t=gd(this.referralCode),n=await e.writeContract({address:j.game,abi:B,functionName:`registerReferral`,args:[t],account:L.address,chain:e.chain}),r=this.referralCode;this.referralCode=``,Pp(n,`Registered referral code "${r}"`)}catch(e){J(e)}finally{this.registerPending=!1}}}async _copyRefUrl(e){await navigator.clipboard.writeText(`https://fomon.rip/testnet/${e}`),this.copiedRef=!0,setTimeout(()=>{this.copiedRef=!1},1500)}_setDenom(e){_p(e),this.denomPref=e}render(){if(!L){let e=Yu;return e.length===0?H`<button class="connect-btn" style="cursor:default;opacity:0.4">NO WALLET</button>`:e.length===1?H`
          <button class="connect-btn" @click=${()=>this._connect(e[0])}>
            ${e[0].info.icon?H`<img src=${e[0].info.icon} alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:6px;border-radius:2px" />`:``}
            CONNECT ${e[0].info.name.toUpperCase()}
          </button>
        `:H`
        <div style="position:relative">
          <button class="connect-btn" @click=${()=>{this.providerOpen=!this.providerOpen}}>
            CONNECT WALLET&nbsp;▾
          </button>
          ${this.providerOpen?H`
            <div class="dropdown" style="min-width:220px;padding:12px 16px">
              <div class="section-label">SELECT WALLET</div>
              ${e.map(e=>H`
                <button class="provider-item" @click=${()=>this._connect(e)}>
                  ${e.info.icon?H`<img src=${e.info.icon} alt="" />`:``}
                  ${e.info.name}
                </button>
              `)}
            </div>
          `:``}
        </div>
      `}if(L.chainId!==10143)return H`
        <button class="connect-btn" style="background:#ff2d6b22;border-color:#ff2d6b;color:#ff2d6b" @click=${()=>{this._wrongNetworkClicks++,this._wrongNetworkClicks>=2?($u(),td(),this._wrongNetworkClicks=0):ld(Zn)}}>${`SWITCH TO ${j?.name?.toUpperCase()??`CORRECT NETWORK`}`}</button>
      `;let e=L.address.toLowerCase(),t=j,n=t?.shmon?.toLowerCase()??``,r=t?.fomon?.toLowerCase()??``,i=this.liveValue(`token:${r}:optedIn:${e}`),a=this.liveValue(`token:${r}:pendingRewards:${e}`),o=this.liveValue(`token:${r}:balance:${e}`),s=this.liveValue(`game.referralCodeOf:${e}`),c=this.liveValue(`game.referralEarned:${e}`),l=a!==void 0&&a>0n||o!==void 0&&o>0n&&!localStorage.getItem(bm);return H`
      <div style="position:relative">
        <button
          class="address-btn ${this.open?`active`:``}"
          @click=${()=>{this.open=!this.open,this.open&&localStorage.setItem(bm,`1`)}}
        >
          ${l?H`<span class="notif-dot"></span>`:``}
          ${L.icon?H`<img src=${L.icon} alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:4px;border-radius:2px" />`:``}
          ${this.copied?H`<span class="copied-flash">COPIED!</span>`:H`<span>${Ep(L.address)}</span>`}
          <span style="color:#505060;font-size:10px">▾</span>
        </button>

        ${this.open?H`
          <div class="dropdown">

            <!-- balances -->
            <div class="row">
              <span class="lbl">MON</span>
              <span class="val"><live-token-amount value-key="token:native:balance:${e}"></live-token-amount></span>
            </div>
            <div class="row">
              <span class="lbl">shMON${t.shmonUrl?H`&nbsp;<a href="${t.shmonUrl}" target="_blank" rel="noopener" title="redeem shMON for MON">Redeem ↗</a>`:``}</span>
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
            ${i===void 0?H`
              <div class="row">
                <span class="lbl">foMON DIVIDENDS</span>
                <span>${this.spin}</span>
              </div>
            `:H`
              <div class="row">
                <span class="lbl">foMON DIVIDENDS</span>
                <span class=${i?`status-opted-in`:`status-opted-out`}>
                  ${i?`● OPTED IN`:`○ OUT`}
                </span>
              </div>
              ${i?H`
                <div class="hint" style="text-align:right;margin-top:-2px">Earning shMON dividends</div>
              `:H`
                <div class="row" style="justify-content:flex-end">
                  <button class="action-btn" @click=${this._optIn}>OPT IN</button>
                </div>
              `}
            `}

            ${a!==void 0&&a>0n?H`
              <div class="row" style="margin-top:6px">
                <span class="lbl">PENDING shMON</span>
                <span class="val accent"><live-valuation key="token:${r}:pendingRewards:${e}"></live-valuation></span>
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
                  placeholder=${bd()??`enter code to use`}
                  .value=${this.activeRefInput}
                  @input=${e=>{this.activeRefInput=e.target.value}}
                />
                <button
                  class="action-btn"
                  @click=${()=>{this.activeRefInput&&(xd(this.activeRefInput),this.activeRefInput=``,this.requestUpdate())}}
                  ?disabled=${!this.activeRefInput}
                >SET</button>
                ${bd()?H`
                  <button class="action-btn" style="color:#ff2d6b;border-color:#ff2d6b44"
                    @click=${()=>{Sd(),this.requestUpdate()}}>✕</button>
                `:``}
              </div>
              <div class="hint">Credits the referrer on your next transaction</div>
            </div>

            <hr class="divider" />

            <!-- referral registration -->
            <div>
              ${s===void 0?H`
                <div class="section-label">${this.spin}</div>
              `:H`
                <div class="section-label">${s?`YOUR REFERRAL CODE`:`REGISTER YOUR CODE`}</div>
                ${s?H`
                  <div style="display:flex;gap:6px">
                    <input class="ref-input" readonly .value=${s} style="flex:1;color:#ffe600;cursor:default" />
                    <button class="action-btn" @click=${()=>this._copyRefUrl(s)}>
                      ${this.copiedRef?`COPIED ✓`:`COPY URL`}
                    </button>
                  </div>
                `:H`
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
                  ${this.confirmReg?H`
                    <div class="hint" style="color:#ff2d6b;margin-top:6px">
                      "${this.referralCode}" will be permanently linked to this wallet. Are you sure?
                    </div>
                    <div style="display:flex;gap:6px;margin-top:6px">
                      <button class="action-btn" @click=${this._registerReferral} ?disabled=${this.registerPending}>CONFIRM</button>
                      <button class="action-btn" style="color:#707088;border-color:#70708844" @click=${()=>{this.confirmReg=!1}}>CANCEL</button>
                    </div>
                  `:H`
                    <div class="hint" style=${this.regEligError?`color:#ff2d6b`:``}>Eligible if you contributed ≥0.1% to one of the insider rounds of a pre-rugged vibecoin, or if you hold ≥0.1% of a pre-rugged vibecoin's supply.</div>
                  `}
                `}
                ${c!==void 0&&c>0n?H`
                  <div class="row">
                    <span class="lbl">REFERRAL EARNED</span>
                    <span class="val gold"><live-valuation key="game.referralEarned:${e}"></live-valuation></span>
                  </div>
                `:``}
              `}
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
    `}};q([K()],$.prototype,`open`,void 0),q([K()],$.prototype,`providerOpen`,void 0),q([K()],$.prototype,`referralCode`,void 0),q([K()],$.prototype,`activeRefInput`,void 0),q([K()],$.prototype,`registerPending`,void 0),q([K()],$.prototype,`claimPending`,void 0),q([K()],$.prototype,`confirmReg`,void 0),q([K()],$.prototype,`regEligError`,void 0),q([K()],$.prototype,`copiedRef`,void 0),q([K()],$.prototype,`copied`,void 0),q([K()],$.prototype,`denomPref`,void 0),q([K()],$.prototype,`_wrongNetworkClicks`,void 0),$=q([W(`wallet-widget`)],$);var xm=class extends up{constructor(...e){super(...e),this.currentHash=window.location.hash||`#pump`,this._onHash=()=>{this.currentHash=window.location.hash||`#pump`}}static{this.styles=of`
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
  `}connectedCallback(){super.connectedCallback(),window.addEventListener(`hashchange`,this._onHash)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,this._onHash)}render(){return H`
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
    `}};q([K()],xm.prototype,`currentHash`,void 0),xm=q([W(`header-bar`)],xm);var Sm=class extends Q{constructor(...e){super(...e),this.claimPendingA=!1,this.claimPendingB=!1,this._timerInterval=null,this._onWalletChanged=()=>{this.requestUpdate()}}static{this.styles=[Q.styles,of`
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
  `]}connectedCallback(){super.connectedCallback(),Ju.addEventListener(`wallet-changed`,this._onWalletChanged),this._timerInterval=setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),Ju.removeEventListener(`wallet-changed`,this._onWalletChanged),this._timerInterval&&=(clearInterval(this._timerInterval),null)}async _claimA(){let e=Y(`game.cycle`),t=z();if(!(!t||!L||e===void 0)){this.claimPendingA=!0;try{Pp(await t.writeContract({address:j.game,abi:B,functionName:`claimSeriesATokens`,args:[e],account:L.address,chain:t.chain}),`Claimed Insider Vibecoins`)}catch(e){console.error(`Claim A error:`,e)}finally{this.claimPendingA=!1}}}async _claimB(){let e=Y(`game.cycle`),t=z();if(!(!t||!L||e===void 0)){this.claimPendingB=!0;try{Pp(await t.writeContract({address:j.game,abi:B,functionName:`claimSeriesBTokens`,args:[e],account:L.address,chain:t.chain}),`Claimed "Insider" Vibecoins`)}catch(e){console.error(`Claim B error:`,e)}finally{this.claimPendingB=!1}}}_phaseStatus(e,t,n,r){if(t!==e)return e<t?`ENDED`:`PENDING`;if(n===0n)return e===0?`DEPOSIT TO KICK OFF (0.1 shMON needed)`:`PENDING`;let i=Number(n)-(Date.now()/1e3+r);return i>0?`ENDS IN ${Math.floor(i/3600)}h ${Math.floor(i%3600/60)}m ${Math.floor(i%60)}s`:`ENDED`}render(){let e=L?.address.toLowerCase()??``,t=this.liveValue(`game.cycle`),n=this.liveValue(`game.phase`),r=this.liveValue(`game.phaseEndTime`),i=this.liveValue(`meta.chainTimeDelta`)??0;if(t===void 0||n===void 0)return H`<div class="cards">${this.spin}</div>`;let a=n===0,o=n===1,s=n===2||n===3,c=s?(this.liveValue(`game.vibecoinByCycle:${t}`)??``).toLowerCase():``,l=e?this.liveValue(`game.seriesADeposit:${t}:from:${e}`):void 0,u=e?this.liveValue(`game.seriesBDeposit:${t}:from:${e}`):void 0,d=e?l===void 0?void 0:l>0n:!1,f=e?u===void 0?void 0:u>0n:!1,p=r===void 0?void 0:this._phaseStatus(0,n,r,i),m=r===void 0?void 0:this._phaseStatus(1,n,r,i);return H`
      <div class="cards">
        <!-- Series A -->
        <div class="card ${n>0&&!s?`disabled`:``}">
          <div class="card-title">
            INSIDER PRE-SALE
            <span class="meta">(foMON hodlers only)</span>
          </div>
          <div class="meta">Every deposit gets a proportional slice of the bottom floor</div>

          <div class="row">
            <span class="key">TOTAL DEPOSITED</span>
            <span class="val"><live-valuation key="game.seriesADeposit:${t}"></live-valuation></span>
          </div>
          ${e?H`
            <div class="row">
              <span class="key">YOUR DEPOSIT</span>
              <span class="val ${d?`highlight`:``}">
                <live-valuation key="game.seriesADeposit:${t}:from:${e}"></live-valuation>
                (<live-percent num-key="game.seriesADeposit:${t}:from:${e}" dem-key="game.seriesADeposit:${t}"></live-percent>)
              </span>
            </div>
          `:``}
          <div class="row">
            <span class="key">STATUS</span>
            <span class="val">${p??this.spin}</span>
          </div>

          ${s&&d?H`
            <div class="row">
              <span class="key">YOUR VIBECOINS</span>
              <span class="val highlight">
                <live-series-tokens
                  alloc-key="game.tokensSeriesAByCycle:${t}"
                  deposit-key="game.seriesADeposit:${t}:from:${e}"
                  total-key="game.seriesADeposit:${t}"
                  symbol-key="token:${c}:symbol">
                </live-series-tokens>
              </span>
            </div>
          `:``}

          ${a?H`
            <button class="btn" @click=${()=>this._openBuy(`seriesA`)}>DEPOSIT</button>
            ${r===0n?H`
              <div class="meta">Your deposit starts the next round.</div>
            `:``}
          `:s&&d===void 0?H`
            <button class="btn" disabled>${this.spin}</button>
          `:s&&d?H`
            <button class="btn claim" @click=${this._claimA} ?disabled=${this.claimPendingA}>
              ${this.claimPendingA?`CLAIMING…`:`CLAIM VIBECOINS`}
            </button>
          `:H`
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
            <span class="val"><live-valuation key="game.seriesBDeposit:${t}"></live-valuation></span>
          </div>
          ${e?H`
            <div class="row">
              <span class="key">YOUR DEPOSIT</span>
              <span class="val ${f?`highlight`:``}">
                <live-valuation key="game.seriesBDeposit:${t}:from:${e}"></live-valuation>
                (<live-percent num-key="game.seriesBDeposit:${t}:from:${e}" dem-key="game.seriesBDeposit:${t}"></live-percent>)
              </span>
            </div>
          `:``}
          <div class="row">
            <span class="key">STATUS</span>
            <span class="val">${m??this.spin}</span>
          </div>

          ${s&&f?H`
            <div class="row">
              <span class="key">YOUR VIBECOINS</span>
              <span class="val highlight">
                <live-series-tokens
                  alloc-key="game.tokensSeriesBByCycle:${t}"
                  deposit-key="game.seriesBDeposit:${t}:from:${e}"
                  total-key="game.seriesBDeposit:${t}"
                  symbol-key="token:${c}:symbol">
                </live-series-tokens>
              </span>
            </div>
          `:``}

          ${o?H`
            <button class="btn" @click=${()=>this._openBuy(`seriesB`)}>DEPOSIT</button>
          `:s&&f===void 0?H`
            <button class="btn" disabled>${this.spin}</button>
          `:s&&f?H`
            <button class="btn claim" @click=${this._claimB} ?disabled=${this.claimPendingB}>
              ${this.claimPendingB?`CLAIMING...`:`CLAIM VIBECOINS`}
            </button>
          `:H`
            <button class="btn" disabled>${n<1?`NOT OPEN YET`:`CLOSED`}</button>
          `}
        </div>
      </div>
    `}_openBuy(e){window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:e}}))}};q([K()],Sm.prototype,`claimPendingA`,void 0),q([K()],Sm.prototype,`claimPendingB`,void 0),Sm=q([W(`seed-section`)],Sm);var Cm=class extends Q{constructor(...e){super(...e),this.cycle=0,this._claimPending=!1,this._optPending=!1,this._onWalletChanged=()=>{this.requestUpdate()}}static{this.styles=[Q.styles,of`
    :host { display: block; }

    .panel {
      background: rgba(13, 13, 26, 0.97);
      border: 1px solid #00e5ff4d;
      padding: 20px;
      box-shadow: 0 0 24px #00e5ff1a;
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

    .cut-note {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #606070;
      text-align: center;
      margin-top: 4px;
    }
  `]}connectedCallback(){super.connectedCallback(),Ju.addEventListener(`wallet-changed`,this._onWalletChanged)}disconnectedCallback(){super.disconnectedCallback(),Ju.removeEventListener(`wallet-changed`,this._onWalletChanged)}async _optToggle(e,t){let n=z();if(!(!n||!L)){this._optPending=!0,this.requestUpdate();try{let r=t?`optOut`:`optIn`;Pp(await n.writeContract({address:e,abi:V,functionName:r,account:L.address,chain:n.chain}),t?`Vibes undesired`:`Vibes desired`)}catch(e){J(e)}finally{this._optPending=!1,this.requestUpdate()}}}async _claimDividends(e){let t=z();if(!(!t||!L)){this._claimPending=!0,this.requestUpdate();try{Pp(await t.writeContract({address:e,abi:V,functionName:`claimDividends`,args:[L.address],account:L.address,chain:t.chain}),`Claim Vibes`)}catch(e){console.error(`Claim dividends error:`,e)}finally{this._claimPending=!1,this.requestUpdate()}}}_renderChart(e,t,n,r,i,a,o){let s=n*3n/2n||10n**18n,c=10n**18n,l=[],u=[];for(let n=0;n<=60;n++){let r=s*BigInt(n)/BigInt(60),i=e+t*r/c;l.push(Number(r)/0xde0b6b3a7640000),u.push(Number(i)/1e9)}let d=l[l.length-1]||1,f=Math.max(...u)||1,p=e=>38+e/d*262,m=e=>66-e/f*66,h=l.map((e,t)=>`${t===0?`M`:`L`}${p(e).toFixed(1)},${m(u[t]).toFixed(1)}`).join(` `),g=Math.round(p(Number(n)/0xde0b6b3a7640000)),_=a===void 0?null:Math.round(p(Number(a))),v=r!==void 0&&r>0n?p(Number(r)/0xde0b6b3a7640000):null,y=r!==void 0&&i!==void 0&&r>0n&&i>0n?p(Number(r+i)/0xde0b6b3a7640000):null,b=e=>String(e).split(``).map(e=>`₀₁₂₃₄₅₆₇₈₉`[+e]).join(``),x=e=>{let t=e/1e9;if(t>=.001)return t.toPrecision(3);let n=t.toFixed(30).split(`.`)[1]??``,r=0;for(let e of n)if(e===`0`)r++;else break;let i=n.slice(r,r+3);return`0.0${b(r-1)}${i}`};return H`
      <div class="chart-area">
        <svg viewBox="0 0 ${300} ${80}" style="width:100%;height:${84}px" font-family="'JetBrains Mono',monospace" font-size="10">
          <line x1="${38}" y1="0" x2="${38}" y2="${66}" stroke="#1e1e38" stroke-width="1" />
          <text x="${36}" y="10" fill="#505060" text-anchor="end">${x(f)}</text>
          <text x="${36}" y="${66}" fill="#505060" text-anchor="end">${x(u[0])}</text>
          <text x="2" y="${66/2}" fill="#404050" text-anchor="middle" transform="rotate(-90,6,${66/2})">shMON</text>

          <line x1="${38}" y1="${66}" x2="${300}" y2="${66}" stroke="#1e1e38" stroke-width="1" />
          <text x="${38}" y="${80}" fill="#505060" text-anchor="start">0</text>
          <text x="${300}" y="${80}" fill="#505060" text-anchor="end">${(e=>e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:e.toFixed(0))(d)}</text>

          <path d="${h}" fill="none" stroke="#00e5ff" stroke-width="1.5" />

          ${v===null?``:Kf`
            <line x1="${v.toFixed(1)}" y1="0" x2="${v.toFixed(1)}" y2="${66}" stroke="#ffe600aa" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${v.toFixed(1)}" y="${78}" fill="#ffe600aa" font-size="9" text-anchor="middle">I</text>
          `}

          ${y===null?``:Kf`
            <line x1="${y.toFixed(1)}" y1="0" x2="${y.toFixed(1)}" y2="${66}" stroke="#ffe600aa" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${y.toFixed(1)}" y="${78}" fill="#ffe600aa" font-size="9" text-anchor="middle">"I"</text>
          `}

          ${_!==null&&a!==void 0&&a>0n&&o!==void 0&&Math.abs(_-g)>1?Kf`
            <line x1="${_}" y1="0" x2="${_}" y2="${66}" stroke="${o?`#ff9d00aa`:`#ff2d6baa`}" stroke-width="1" stroke-dasharray="3,2" />
            <text x="${_}" y="${78}" fill="${o?`#ff9d00aa`:`#ff2d6baa`}" font-size="9" text-anchor="middle">${o?`ath`:`rug`}</text>
          `:``}

          <line x1="${g}" y1="0" x2="${g}" y2="${66}" stroke="#00e5ff88" stroke-width="1" stroke-dasharray="3,3" />
          <text x="${g}" y="${78}" fill="#00e5ff88" font-size="9" text-anchor="middle">now</text>
        </svg>
      </div>
    `}render(){let e=this.liveValue(`game.vibecoinByCycle:${this.cycle}`),t=this.liveValue(`game.phase`);if(e===void 0)return H`<div class="panel"><div class="chart-area chart-loading">${this.spin}</div></div>`;let n=e.toLowerCase(),r=L?.address.toLowerCase()??``,i=this.liveValue(`token:${n}:K`),a=this.liveValue(`token:${n}:P0`),o=this.liveValue(`token:${n}:totalSupply`),s=this.liveValue(`token:${n}:unlocked`),c=this.liveValue(`token:${n}:athPrice`),l=this.liveValue(`token:${n}:athPostRug`),u=this.liveValue(`game.tokensSeriesAByCycle:${this.cycle}`),d=this.liveValue(`game.tokensSeriesBByCycle:${this.cycle}`),f=r?this.liveValue(`token:${n}:balance:${r}`):void 0,p=r?this.liveValue(`token:${n}:earned:${r}`):void 0,m=r?this.liveValue(`token:${n}:optedIn:${r}`):void 0,h=10n**18n,g=(()=>{if(!(c===void 0||i===void 0||a===void 0))return c===0n||i===0n||c<=a?0n:(c-a)*h/i})(),_=i!==void 0&&a!==void 0&&o!==void 0;return H`
      <div class="panel">
        <div class="row">
          <span class="key">CURRENT PRICE</span>
          <span class="val"><live-bonding-price prefix="token:${n}"></live-bonding-price></span>
        </div>
        <div class="row">
          <span class="key">TOTAL SUPPLY</span>
          <span class="val"><live-token-amount long value-key="token:${n}:totalSupply"></live-token-amount></span>
        </div>
        ${L?H`
          <div class="row">
            <span class="key">YOUR BALANCE</span>
            <span class="val">
              <live-token-amount long value-key="token:${n}:balance:${r}"></live-token-amount>
              (<live-percent num-key="token:${n}:balance:${r}" dem-key="token:${n}:totalSupply"></live-percent>,
              <live-valuation key="token:${n}:balance:${r}"></live-valuation>)
            </span>
          </div>
        `:``}

        ${_?this._renderChart(a,i,o,u,d,g,l):H`<div class="chart-area chart-loading">LOADING CHART…</div>`}

        <div class="btn-row">
          <button class="btn buy" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:s?`vibecoin`:`publicBuy`,vibecoinAddress:e}}))}}>BUY</button>
          <button
            class="btn sell"
            @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:`vibecoinSell`,vibecoinAddress:e,tokenBalance:f}}))}}
            ?disabled=${s!==!0||!L||!f||f===0n}
            title=${s===!0?``:`Selling unlocks at rugpull`}
          >SELL</button>
        </div>

        ${t!==void 0&&s===!1?H`
          <div class="cut-note">
            Selling unlocks at rugpull. 20% of the total foMON supply will be airdropped to those who pump vibecoins before the rugpull.
          </div>
          <div class="row">
            <span class="key">AVAILABLE AIRDROP</span>
            <span class="val"><live-token-amount long style="color: #ffe600" value-key="fomon.mintable"></live-token-amount></span>
          </div>
          <div class="row">
            <span class="key">AIRDROP REMAINING</span>
            <span class="val">
              <live-token-amount long value-key="fomon.airdropRemaining"></live-token-amount>
              (<live-percent num-key="fomon.airdropRemaining" dem-key="fomon.const.totalSupply"></live-percent>)
            </span>
          </div>
        `:``}

        <div class="dividends">
          <span class="div-key">VIBES</span>
          <span class="div-val">
            ${r?H`<live-token-amount long value-key="token:${n}:earned:${r}"></live-token-amount>`:`—`}
          </span>
          <button
            class="claim-btn"
            @click=${()=>this._claimDividends(e)}
            ?disabled=${!r||p===void 0||p===0n||this._claimPending}
          >${this._claimPending?`...`:`CLAIM`}</button>

          <span class="div-key">OPT-IN STATUS</span>
          <span class="div-val" style="color:${m?`#00ff9d`:`#606070`}">
            ${m===void 0?this.spin:m?`OPTED IN`:`OPTED OUT`}
          </span>
          <button
            class="opt-btn ${m?`out`:`in`}"
            @click=${()=>m!==void 0&&this._optToggle(e,m)}
            ?disabled=${m===void 0||!r||this._optPending}
          >${this._optPending?`...`:m?`OPT OUT`:`OPT IN`}</button>
        </div>
      </div>
    `}};q([G({type:Number})],Cm.prototype,`cycle`,void 0),Cm=q([W(`pump-section`)],Cm);var wm=class extends Q{constructor(...e){super(...e),this.cycle=0,this.triggerPending=!1,this._timerInterval=null}static{this.styles=[Q.styles,of`
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
  `]}connectedCallback(){super.connectedCallback(),this._timerInterval=setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._timerInterval&&=(clearInterval(this._timerInterval),null)}async _triggerSettlement(){let e=z();if(!(!e||!L)){this.triggerPending=!0;try{Pp(await e.writeContract({address:j.game,abi:B,functionName:`triggerSettlement`,account:L.address,chain:e.chain}),`Rugpull triggered — settlement in progress`)}catch(e){J(e)}finally{this.triggerPending=!1}}}_renderBuyerBlock(e,t,n){if(e===void 0)return H`<div class="no-buyer">${this.spin}</div>`;let r=e===`0x0000000000000000000000000000000000000000`?void 0:this.liveValue(`game.referralCodeOf:${e.toLowerCase()}`),i=j.explorer;return e===`0x0000000000000000000000000000000000000000`?H`
      <div class="no-buyer">no rugpuller yet</div>
    `:H`
      <div class="rugpuller-block">
        <div class="rugpuller-label">${n?`Rugpuller`:`Current Rugpuller`}${r?H` · <span style="color:#ffe600">${r}</span>`:``}</div>
        ${i?H`
          <a class="rugpuller-addr" href="${i}/address/${e}" target="_blank" rel="noopener noreferrer">
            <span class="addr-short">${Ep(e)}</span>
            <span class="addr-full">${e}</span>
          </a>
        `:H`
          <div class="rugpuller-addr">
            <span class="addr-short">${Ep(e)}</span>
            <span class="addr-full">${e}</span>
          </div>
        `}
      </div>
      <div class="row">
        <span class="key">THEIR CUT</span>
        <span class="val"><live-valuation key="${t}" numerator="90" denominator="100"></live-valuation></span>
      </div>
      <div class="cut-note"><live-valuation key="${t}" numerator="10" denominator="100"></live-valuation> rolls to next cycle</div>
    `}render(){let e=this.liveValue(`game.cycle`);if(e===void 0)return H`<div class="panel">${this.spin}</div>`;if(this.cycle!==Number(e)){let e=this.liveValue(`game.winnerByCycle:${this.cycle}`),t=`game.prizeByCycle:${this.cycle}`;return H`
        <div class="panel">
          <div class="settled-banner">
            <div class="settled-title">RUGPULLED</div>
          </div>
          ${this._renderBuyerBlock(e,t,!0)}
        </div>
      `}let t=this.liveValue(`game.phase`),n=this.liveValue(`game.phaseEndTime`),r=this.liveValue(`meta.chainTimeDelta`)??0,i=this.liveValue(`game.lastBuyer`);if(t===void 0||n===void 0)return H`<div class="panel">${this.spin}</div>`;let a=t===2&&n>0n?Math.max(0,Number(n)*1e3-(Date.now()+r*1e3)):0,o=t===3||t===2&&a===0;return H`
      <div class="panel">
        ${o?H`
          <div class="expired-label">TIMER EXPIRED</div>
        `:H`
          <div class="timer-large">
            <live-countdown key="game.phaseEndTime" milliseconds warning-ms="300000"></live-countdown>
          </div>
        `}

        ${this._renderBuyerBlock(i,`game.prizePool`,!1)}

        ${o?H`
          <button
            class="trigger-btn"
            @click=${this._triggerSettlement}
            ?disabled=${this.triggerPending||!L}
          >
            ${this.triggerPending?`SETTLING...`:`TRIGGER RUGPULL`}
          </button>
        `:``}
      </div>
    `}};q([G({type:Number})],wm.prototype,`cycle`,void 0),q([K()],wm.prototype,`triggerPending`,void 0),wm=q([W(`rugpull-section`)],wm);var Tm=`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;function Em(){let e=3+Math.floor(Math.random()*4);return Array.from({length:e},()=>Tm[Math.floor(Math.random()*36)]).join(``)}var Dm=`GENERATING VIBECOIN….BOOTSTRAPPING CONSENSUS….ALIGNING INCENTIVES….MANIFESTING UTILITY….DEPLOYING HOPIUM….CONSULTING THE VIBE ORACLE….LAUNDERING DEGENERACY….DECENTRALIZING SOMETHING….LOADING FUTURE BAGS….SYNCING WITH BLOCKCHAIN™….SOURCING GREATER FOOLS….CALIBRATING RUG TENSION….INFLATING TOKEN METRICS….FABRICATING ROADMAP….ONBOARDING EXIT LIQUIDITY….COMPILING VIBES….TRAINING TOKENOMICS AI….SCHEDULING INFLUENCER POSTS….AUDITING THE UNAUDITABLE….PLAGIARIZING WHITEPAPER….SEEDING TELEGRAM GROUP….RANDOMIZING 'INSURANCE FUND'….GENERATING PLAUSIBLE DENIABILITY….STRESS-TESTING EXIT STRATEGY….TOKENIZING NOTHING….BOOTSTRAPPING ORGANIC COMMUNITY….ACTIVATING ANONYMOUS FOUNDERS….APPLYING GIRLMATH…`.split(`.`),Om=[{label:`AI Tokens Consumed`,value:e=>e.tokensConsumed.toLocaleString()},{label:`Exit Liquidity Manifested`,value:e=>`${e.exitLiquidity.toLocaleString()} wallets`},{label:`Hopium Injected`,value:e=>`${e.hopium} cc`},{label:`Bag Holders Hallucinated`,value:e=>e.bagHolders.toLocaleString()},{label:`Rug Threads Woven`,value:e=>`${e.rugThreads.toFixed(1)}%`},{label:`Utility`,value:()=>`undefined`},{label:`Financial Advisors Ignored`,value:()=>`1`},{label:`Diamond Hands Detected`,value:()=>`0`},{label:`NFT Royalties Waived`,value:()=>`0`},{label:`Regulatory Gray Areas Exploited`,value:e=>String(e.grayAreas)},{label:`Market Makers Angered`,value:e=>String(e.marketMakers)},{label:`Decentralization Theater`,value:()=>`STAGING`},{label:`Plausible Deniability`,value:e=>`${e.plausibleDeniability}%`},{label:`Whitepaper Pages`,value:()=>`0`},{label:`Legal Opinions Sought`,value:()=>`0`},{label:`Liquidity Lock`,value:()=>`awaiting rugpull`},{label:`Net Cost After Girlmath`,value:()=>`$0 💖`}];function km(){return{tokensConsumed:Math.floor(Math.random()*45e5)+5e5,exitLiquidity:Math.floor(Math.random()*15e3)+5e3,hopium:Math.floor(Math.random()*700)+100,bagHolders:Math.floor(Math.random()*2e3)+500,rugThreads:60+Math.random()*25,grayAreas:Math.floor(Math.random()*3)+1,marketMakers:Math.floor(Math.random()*2)+1,plausibleDeniability:Math.floor(Math.random()*40)+60}}var Am=class extends Q{constructor(...e){super(...e),this._scrambledTicker=Em(),this._headingIdx=0,this._statIdx=0,this._genStats=km(),this.settlePending=!1,this._tickCount=0,this._genInterval=null,this._tickInterval=null}static{this.styles=[Q.styles,of`
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

  `]}connectedCallback(){super.connectedCallback(),this._genInterval=setInterval(()=>this._tickGen(),150),this._tickInterval=setInterval(()=>this.requestUpdate(),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._genInterval&&=(clearInterval(this._genInterval),null),this._tickInterval&&=(clearInterval(this._tickInterval),null)}async _settle(){let e=z();if(!(!e||!L)){this.settlePending=!0;try{Pp(await e.writeContract({address:j.game,abi:B,functionName:`settleSeriesB`,account:L.address,chain:e.chain}),`Vibecoin generated — insider rounds settled`)}catch(e){J(e)}finally{this.settlePending=!1}}}_tickGen(){this._scrambledTicker=Em(),this._tickCount++;let e=this._genStats;if(e.tokensConsumed+=Math.floor(Math.random()*14)+4,e.exitLiquidity+=Math.floor(Math.random()*8)+2,e.hopium+=+(Math.random()<.3),e.bagHolders+=Math.floor(Math.random()*6)+1,e.rugThreads=Math.min(99.7,e.rugThreads+Math.random()*.02),Math.random()<.02&&(e.grayAreas+=1),Math.random()<.01&&(e.marketMakers+=1),this._tickCount%20==0){let e=this._headingIdx;for(;e===this._headingIdx;)e=Math.floor(Math.random()*Dm.length);this._headingIdx=e}if(this._tickCount%27==0){let e=this._statIdx;for(;e===this._statIdx;)e=Math.floor(Math.random()*Om.length);this._statIdx=e,(e===9||e===10)&&(this._genStats={...this._genStats,grayAreas:Math.floor(Math.random()*3)+1,marketMakers:Math.floor(Math.random()*2)+1})}}render(){let e=j,t=this.liveValue(`game.phase`),n=this.liveValue(`game.cycle`),r=this.liveValue(`game.phaseEndTime`),i=this.liveValue(`meta.chainTimeDelta`)??0,a=this.liveValue(`game.const.seriesADuration`);if(t===void 0||n===void 0||r===void 0)return H`
        <div class="container">
          <div class="vibecoin-hero" style="border-color:#1a1a30">
            <div class="awaiting"><div class="vc-pending-phase">${this.spin}</div></div>
          </div>
        </div>
      `;let o=Number(a??7200n),s=Date.now()/1e3+i,c=t===0&&r>0n?Number(r)-s:1/0,l=t===0&&n>1n&&(r===0n||c>o/2),u=Number(n)-1,d=l?this.liveValue(`game.vibecoinByCycle:${u}`):void 0,f=t===2||t===3,p=f?this.liveValue(`game.vibecoinByCycle:${n}`):void 0,m=(l?d:p)?.toLowerCase(),h=m?this.liveValue(`token:${m}:palette`):void 0;if(h===void 0)return H`
        <div class="container">
          <div class="vibecoin-hero" style="border-color:#1a1a30">
            <div class="awaiting"><div class="vc-pending-phase">${this.spin}</div></div>
          </div>
        </div>
      `;let g=h[0],_=h[1],v=m?this.liveValue(`token:${m}:logoUri`):void 0,y=d?.toLowerCase(),b=y?this.liveValue(`token:${y}:name`):void 0,x=y?this.liveValue(`token:${y}:symbol`):void 0,S=!!p,C=p?.toLowerCase(),w=C?this.liveValue(`token:${C}:name`):void 0,ee=C?this.liveValue(`token:${C}:symbol`):void 0,T=t===0&&r===0n,E=!l&&!S&&!T,te=E&&t===1&&r>0n&&s>=Number(r);return H`
      <div class="container">
        <div
          class="vibecoin-hero"
          style="--vc-col1:${g};--vc-col2:${_};border-color:${l?`#ff2d6b33`:T?`#252540`:E?`#1a1a30`:g+`22`}"
        >
          ${l?H`
            ${v?H`
              <div class="vc-svg-wrapper">
                <img src=${v} alt="vibecoin" />
              </div>
            `:H`
              <div class="vc-svg-wrapper" style="background:linear-gradient(135deg,${g},${_})"></div>
            `}
            ${e.explorer&&d?H`
              <a class="vc-name" style="color:${g};text-shadow:0 0 20px ${g},0 0 60px ${g}44" href="${e.explorer}/address/${d}" target="_blank">${b??this.spin}</a>
            `:H`
              <div class="vc-name" style="color:${g};text-shadow:0 0 20px ${g},0 0 60px ${g}44">${b??this.spin}</div>
            `}
            <div class="vc-ticker-row">
              <span class="vc-ticker">${x===void 0?this.spin:H`\$${x}`}</span>
              <span class="round-badge">#${u}</span>
            </div>
            ${y?H`
              <div class="hero-stats">
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-valuation key="token:${y}:poolBalance"></live-valuation></span>
                  <span class="hero-stat-label">Locked In</span>
                </div>
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-bonding-mcap prefix="token:${y}"></live-bonding-mcap></span>
                  <span class="hero-stat-label">Market Cap</span>
                </div>
              </div>
            `:``}
          `:T?H`
            <div class="awaiting">
              <div class="vc-pending-phase">Awaiting insiders</div>
              <div class="vc-pending-tokens">
                Initial insider deposit needed to begin Vibecoin generation
              </div>
            </div>
          `:E?H`
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
                  <circle cx="50"   cy="49" r="1.4" fill="#00e5ff">
                    <animate attributeName="cy"      values="49;59"    dur="0.85s" begin="0s"    repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 1 1"/>
                    <animate attributeName="opacity" values="0.9;0.05" dur="0.85s" begin="0s"    repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 1 1"/>
                  </circle>
                  <circle cx="50.6" cy="49" r="1.1" fill="#00e5ff">
                    <animate attributeName="cy"      values="49;57"    dur="0.85s" begin="0.28s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 1 1"/>
                    <animate attributeName="opacity" values="0.7;0.05" dur="0.85s" begin="0.28s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 1 1"/>
                  </circle>
                  <circle cx="49.4" cy="49" r="1.1" fill="#00e5ff">
                    <animate attributeName="cy"      values="49;58"    dur="0.85s" begin="0.56s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 1 1"/>
                    <animate attributeName="opacity" values="0.7;0.05" dur="0.85s" begin="0.56s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 1 1"/>
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
              <div class="vc-pending-phase">${te?`Vibecoin Ready`:Dm[this._headingIdx]}</div>
              <div class="vc-pending-ticker">\$${this._scrambledTicker}</div>
              <div class="vc-pending-tokens">
                ${te?`Insider rounds have concluded. Vibecoin may now be generated.`:`Vibecoin will be generated after insider rounds conclude.`}<br>
                ${Om[this._statIdx].label}: <span class="count">${Om[this._statIdx].value(this._genStats)}</span>
              </div>
              ${te?H`
                <button class="settle-btn" ?disabled=${this.settlePending} @click=${()=>this._settle()}>
                  ${this.settlePending?`Settling...`:`Generate Vibecoin`}
                </button>
              `:``}
            </div>
          `:H`
            ${v?H`
              <div class="vc-svg-wrapper">
                <img src=${v} alt="vibecoin" />
              </div>
            `:H`
              <div class="vc-svg-wrapper" style="background:linear-gradient(135deg,${g},${_})"></div>
            `}
            ${e.explorer&&S?H`
              <a class="vc-name" href="${e.explorer}/address/${p}" target="_blank">${w??this.spin}</a>
            `:H`<div class="vc-name">${w??this.spin}</div>`}
            <div class="vc-ticker-row">
              <span class="vc-ticker">${ee===void 0?this.spin:H`\$${ee}`}</span>
              <span class="round-badge">#${Number(n)}</span>
            </div>
            ${S?H`
              <div class="hero-stats">
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-valuation key="token:${C}:poolBalance"></live-valuation></span>
                  <span class="hero-stat-label">Locked In</span>
                </div>
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-bonding-mcap prefix="token:${C}"></live-bonding-mcap></span>
                  <span class="hero-stat-label">Market Cap</span>
                </div>
                <div class="hero-stat">
                  <span class="hero-stat-val"><live-valuation key="game.prizePool"></live-valuation></span>
                  <span class="hero-stat-label">Rugpull Fund</span>
                </div>
              </div>
            `:``}
          `}
        </div>

        <div class="sections">
          ${l&&d?H`
            <div>
              <div class="section-label">— RUGPULL —</div>
              <rugpull-section .cycle=${u}></rugpull-section>
            </div>
            <div>
              <div class="section-label">— SELL —</div>
              <pump-section .cycle=${u}></pump-section>
            </div>
          `:f?H`
            <div>
              <div class="section-label">— RUGPULL —</div>
              <rugpull-section .cycle=${Number(n)}></rugpull-section>
            </div>
            <div>
              <div class="section-label">— PUMP —</div>
              <pump-section .cycle=${Number(n)}></pump-section>
            </div>
          `:``}
          <div>
            <div class="section-label">— INSIDER ROUNDS —</div>
            <seed-section></seed-section>
          </div>
        </div>
      </div>
    `}};q([K()],Am.prototype,`_scrambledTicker`,void 0),q([K()],Am.prototype,`_headingIdx`,void 0),q([K()],Am.prototype,`_statIdx`,void 0),q([K()],Am.prototype,`_genStats`,void 0),q([K()],Am.prototype,`settlePending`,void 0),Am=q([W(`pump-tab`)],Am);var jm=class extends Q{constructor(...e){super(...e),this.cycle=0,this.claimAPending=!1,this.claimBPending=!1,this.claimDivPending=!1,this.optInPending=!1,this._onWalletChanged=()=>{this.requestUpdate()}}static{this.styles=[Q.styles,of`
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
  `]}connectedCallback(){super.connectedCallback(),Ju.addEventListener(`wallet-changed`,this._onWalletChanged)}disconnectedCallback(){super.disconnectedCallback(),Ju.removeEventListener(`wallet-changed`,this._onWalletChanged)}async _claimDividends(){let e=z();if(!e||!L)return;let t=Y(`game.vibecoinByCycle:${this.cycle}`);if(t){this.claimDivPending=!0;try{Pp(await e.writeContract({address:t,abi:V,functionName:`claimDividends`,args:[L.address],account:L.address,chain:e.chain}),`Claim Vibes`)}catch(e){J(e)}finally{this.claimDivPending=!1}}}async _claimA(){let e=z();if(!(!e||!L)){this.claimAPending=!0;try{Pp(await e.writeContract({address:j.game,abi:B,functionName:`claimSeriesATokens`,args:[BigInt(this.cycle)],account:L.address,chain:e.chain}),`Claimed Insider Vibecoins`)}catch(e){J(e)}finally{this.claimAPending=!1}}}async _claimB(){let e=z();if(!(!e||!L)){this.claimBPending=!0;try{Pp(await e.writeContract({address:j.game,abi:B,functionName:`claimSeriesBTokens`,args:[BigInt(this.cycle)],account:L.address,chain:e.chain}),`Claimed "Insider" Vibecoins`)}catch(e){J(e)}finally{this.claimBPending=!1}}}async _optIn(){let e=z();if(!e||!L)return;let t=Y(`game.vibecoinByCycle:${this.cycle}`);if(t){this.optInPending=!0;try{Pp(await e.writeContract({address:t,abi:V,functionName:`optIn`,account:L.address,chain:e.chain}),`Vibes desired`)}catch(e){J(e)}finally{this.optInPending=!1}}}render(){if(this.cycle<=0)return H`
        <div class="card" style="border-color:#1a1a30">
          <div class="icon"></div>
          <div class="info"><div class="name-row">${this.spin}</div></div>
        </div>
      `;let e=this.liveValue(`game.vibecoinByCycle:${this.cycle}`);if(e===void 0)return H`
        <div class="card" style="border-color:#1a1a30">
          <div class="icon"></div>
          <div class="info"><div class="name-row">${this.spin}</div></div>
        </div>
      `;let t=e.toLowerCase(),n=this.liveValue(`token:${t}:name`),r=this.liveValue(`token:${t}:unlocked`),i=this.liveValue(`token:${t}:athPrice`),a=this.liveValue(`token:${t}:athPostRug`),o=this.liveValue(`token:${t}:palette`),s=this.liveValue(`token:${t}:logoUri`),c=this.liveValue(`game.winnerByCycle:${this.cycle}`),l=c?this.liveValue(`game.referralCodeOf:${c.toLowerCase()}`):void 0,u=L?.address.toLowerCase(),d=u?this.liveValue(`token:${t}:balance:${u}`):void 0,f=u?this.liveValue(`token:${t}:earned:${u}`):void 0,p=u?this.liveValue(`token:${t}:optedIn:${u}`):void 0,m=u?this.liveValue(`game.seriesADeposit:${this.cycle}:from:${u}`):void 0,h=u?this.liveValue(`game.seriesBDeposit:${this.cycle}:from:${u}`):void 0,g=o?.[0]??`#00e5ff`,_=o?.[1]??`#0066ff`,v=g+`14`,y=g+`2e`,b=g+`40`,x=g+`4d`,S=g+`66`,C=g+`99`,w=g+`2a`,ee=j.explorer,T=c!==void 0&&c!==`0x0000000000000000000000000000000000000000`,E=L&&(d!==void 0&&d>0n||T);return H`
      <div class="card" style="
        --vc-col1:${g};
        --vc-col2:${_};
        --vc-col1-08:${v};
        --vc-col1-18:${y};
        --vc-col1-25:${b};
        --vc-col1-30:${x};
        --vc-col1-40:${S};
        --vc-col1-60:${C};
        --vc-border:${w};
        border-color:${w};
        box-shadow: 0 0 18px ${y};
      ">
        <div class="icon">
          ${s?H`<img src=${s} alt="" />`:``}
        </div>

        <div class="info">
          <div class="name-row">
            ${ee?H`
              <a class="vc-name" href="${ee}/address/${e}" target="_blank">${n??this.spin}</a>
            `:H`
              <span class="vc-name">${n??this.spin}</span>
            `}
            <span class="cycle-badge">Round ${this.cycle}</span>
          </div>

          <div class="stats">
            <span class="stat-key">PRICE</span>
            <span class="stat-val"><live-bonding-price prefix="token:${t}"></live-bonding-price></span>
            <span class="stat-key">SUPPLY</span>
            <span class="stat-val"><live-token-amount value-key="token:${t}:totalSupply"></live-token-amount></span>
            <span class="stat-key">MCAP</span>
            <span class="stat-val"><live-bonding-mcap prefix="token:${t}"></live-bonding-mcap></span>
            <span class="stat-key">TVL</span>
            <span class="stat-val"><live-valuation key="token:${t}:poolBalance"></live-valuation></span>
            <span class="stat-key">VOL 24H</span>
            <span class="stat-val"><live-valuation key="token:${t}:volume24h"></live-valuation></span>
            <span class="stat-key">VOL ALL</span>
            <span class="stat-val"><live-valuation key="token:${t}:totalVolume"></live-valuation></span>
            ${i!==void 0&&i>0n?H`
              <span class="stat-key">${a?`ATH`:`RUG`} PRICE</span>
              <span class="stat-val"><live-token-price value-key="token:${t}:athPrice"></live-token-price></span>
            `:``}

            ${E?H`<hr class="stat-divider" />`:``}

            ${d!==void 0&&d>0n?H`
              <span class="stat-key">YOUR BAL</span>
              <span class="stat-val own"><live-token-amount value-key="token:${t}:balance:${u}"></live-token-amount></span>
            `:``}
            ${f!==void 0&&f>0n?H`
              <span class="stat-key">VIBES</span>
              <span class="stat-val own"><live-token-amount value-key="token:${t}:earned:${u}"></live-token-amount></span>
            `:``}
            ${T?H`
              <span class="stat-key">RUGGED</span>
              <span class="stat-val">
                <live-valuation key="game.prizeByCycle:${this.cycle}"></live-valuation> to
                ${l?H`<span style="color:#ffe600">${l}</span> `:``}
                ${ee?H`
                  <a style="color:#ff2d6b;text-decoration:none" href="${ee}/address/${c}" target="_blank">${Ep(c)}</a>
                `:H`<span style="color:#ff2d6b">${Ep(c)}</span>`}
              </span>
            `:``}
          </div>
        </div>

        <div class="btn-row">
          <button class="btn buy" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:r?`vibecoin`:`publicBuy`,vibecoinAddress:e}}))}}>BUY</button>

          ${r&&d!==void 0&&d>0n?H`
            <button class="btn sell" @click=${()=>{window.dispatchEvent(new CustomEvent(`open-buy-dialog`,{detail:{target:`vibecoinSell`,vibecoinAddress:e,tokenBalance:d}}))}}>SELL</button>
          `:``}

          ${m!==void 0&&m>0n?H`
            <button class="btn claim" @click=${this._claimA} ?disabled=${this.claimAPending}>
              ${this.claimAPending?`…`:`CLAIM INSIDER CUT`}
            </button>
          `:``}

          ${h!==void 0&&h>0n?H`
            <button class="btn claim" @click=${this._claimB} ?disabled=${this.claimBPending}>
              ${this.claimBPending?`…`:`CLAIM "INSIDER" CUT`}
            </button>
          `:``}

          ${f!==void 0&&f>0n?H`
            <button class="btn claim" @click=${this._claimDividends} ?disabled=${this.claimDivPending}>
              ${this.claimDivPending?`…`:`CLAIM VIBES`}
            </button>
          `:``}

          ${d!==void 0&&d>0n&&p===!1?H`
            <button class="btn" style="color:#888;border-color:#88888844" @click=${this._optIn} ?disabled=${this.optInPending}>
              ${this.optInPending?`…`:`OPT IN`}
            </button>
          `:``}
        </div>
      </div>
    `}};q([G({type:Number})],jm.prototype,`cycle`,void 0),q([K()],jm.prototype,`claimAPending`,void 0),q([K()],jm.prototype,`claimBPending`,void 0),q([K()],jm.prototype,`claimDivPending`,void 0),q([K()],jm.prototype,`optInPending`,void 0),jm=q([W(`vibecoin-card`)],jm);var Mm=20,Nm=class extends Q{constructor(...e){super(...e),this.search=``,this.searchResults=null,this.visibleCount=Mm,this.observer=null,this.sentinelEl=null,this._searchDebounce=null,this._onHashChange=()=>this._applyHash()}static{this.styles=[Q.styles,of`
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
  `]}connectedCallback(){super.connectedCallback(),window.addEventListener(`hashchange`,this._onHashChange),this._applyHash()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,this._onHashChange),this.observer?.disconnect(),this._searchDebounce&&clearTimeout(this._searchDebounce)}_applyHash(){let e=window.location.hash.split(`?`)[0].match(/^#vibecoins\/(0x[0-9a-fA-F]{40})$/);e&&this._setSearch(e[1])}_setSearch(e){if(this.search=e,this.visibleCount=Mm,this._searchDebounce&&clearTimeout(this._searchDebounce),!e.trim()){this.searchResults=null;return}this.searchResults=null,this._searchDebounce=setTimeout(()=>void this._doSearch(e.trim().toLowerCase()),200)}async _doSearch(e){let t=await Bp(e);this.search.trim().toLowerCase()===e&&(this.searchResults=t??[])}updated(){let e=this.renderRoot?.querySelector(`.sentinel`);e&&e!==this.sentinelEl&&(this.observer?.disconnect(),this.sentinelEl=e,this.observer=new IntersectionObserver(e=>{e[0].isIntersecting&&(this.visibleCount+=Mm)},{rootMargin:`200px`}),this.observer.observe(e))}render(){let e=this.liveValue(`game.cycle`),t=this.liveValue(`game.phase`),n=this.search.trim()!==``,r,i;if(n)r=this.searchResults??[],i=this.searchResults===null;else if(e===void 0||t===void 0)r=[],i=!0;else{let n=t>=2?Number(e):Number(e)-1;r=[];for(let e=n;e>=1;e--)r.push(e);i=!1}let a=r.slice(0,this.visibleCount);return H`
      <div class="container">
        <div class="search-bar">
          <input
            class="search-input"
            type="text"
            placeholder="SEARCH BY NAME, TICKER, OR ADDRESS..."
            .value=${this.search}
            @input=${e=>this._setSearch(e.target.value)}
          />
        </div>

        ${i?H`
          <div class="loading">
            ${this.spin}
            ${n?`SEARCHING...`:`INDEXING EVENTS...`}
          </div>
        `:r.length===0?H`
          <div class="empty">
            ${n?`NO MATCHES FOUND`:`NO VIBECOINS YET`}
          </div>
        `:H`
          <div class="list">
            ${a.map(e=>H`<vibecoin-card .cycle=${e}></vibecoin-card>`)}
            ${a.length<r.length?H`<div class="sentinel"></div>`:``}
          </div>
        `}
      </div>
    `}};q([K()],Nm.prototype,`search`,void 0),q([K()],Nm.prototype,`searchResults`,void 0),q([K()],Nm.prototype,`visibleCount`,void 0),Nm=q([W(`vibecoins-tab`)],Nm);function Pm(e){if(e<0n)throw Error(`sqrt of negative`);if(e===0n)return 0n;let t=e,n=(t+1n)/2n;for(;n<t;)t=n,n=(t+e/t)/2n;return t}function Fm(e,t,n,r){let i=10n**18n,a=n*t/i+r*t*t/(2n*i*i)+e,o=Pm(n*n+2n*r*a);if(r===0n)return 0n;let s=(o-n)*i/r;return s>t?s-t:0n}var Im=class extends Q{constructor(...e){super(...e),this.visible=!1,this.target=`publicBuy`,this.amountStr=``,this.useShMon=!1,this.pending=!1,this.approvePending=!1,this.approved=!1,this.error=``,this._sellShMonPreview=0n,this._tokenBalance=0n,this._refCode=null}static{this.styles=[Q.styles,of`
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
  `]}open(e){this.target=e.target,this.vibecoinAddress=e.vibecoinAddress,this._tokenBalance=e.tokenBalance??0n,this._refCode=bd(),this.amountStr=``,this.useShMon=!1,this.pending=!1,this.approvePending=!1,this.approved=!1,this.error=``,this._sellShMonPreview=0n,this.visible=!0}async _updateSellPreview(){let e=this._amountWei;if(e===0n||!this.vibecoinAddress){this._sellShMonPreview=0n;return}try{this._sellShMonPreview=await od().readContract({address:this.vibecoinAddress,abi:V,functionName:`shMonForTokens`,args:[e]})}catch{this._sellShMonPreview=0n}}_close(){this.visible=!1}get _amountWei(){try{let e=parseFloat(this.amountStr);return isNaN(e)||e<=0?0n:BigInt(Math.floor(e*0xde0b6b3a7640000))}catch{return 0n}}_effectiveVcAddrLow(){return this.vibecoinAddress?this.vibecoinAddress.toLowerCase():(this.liveValue(`game.vibecoin`)??``).toLowerCase()}_getTitle(){let e=this._effectiveVcAddrLow(),t=e?this.liveValue(`token:${e}:name`):void 0;switch(this.target){case`seriesA`:return`INSIDER ROUND`;case`seriesB`:return`"INSIDER" ROUND`;case`publicBuy`:return t?`PUMP ${t.toUpperCase()}`:`PUMP`;case`vibecoin`:return t?`BUY ${t.toUpperCase()}`:`BUY`;case`vibecoinSell`:return t?`SELL ${t.toUpperCase()}`:`SELL`}}_getFeeBreakdown(){if(this.target===`vibecoin`)return[[`Dividend pool`,1000n],[`To buyer`,9000n]];switch(this.target){case`seriesA`:{let e=this.liveValue(`game.const.seriesAProtocol`)??400n,t=this.liveValue(`game.const.seriesAReferral`)??600n,n=this.liveValue(`game.const.seriesAPrize`)??2000n;return[[`Protocol`,e],[`Referral`,t],[`Rugpull Fund`,n],[`Vibecoins minted`,10000n-e-t-n]]}case`seriesB`:{let e=this.liveValue(`game.const.seriesBProtocol`)??400n,t=this.liveValue(`game.const.seriesBReferral`)??600n,n=this.liveValue(`game.const.seriesBPrize`)??1000n;return[[`Protocol`,e],[`Referral`,t],[`Rugpull Fund`,n],[`Vibecoins minted`,10000n-e-t-n]]}default:{let e=this.liveValue(`game.const.pumpProtocol`)??400n,t=this.liveValue(`game.const.pumpReferral`)??600n,n=this.liveValue(`game.const.pumpPrize`)??2400n;return[[`Protocol`,e],[`Referral`,t],[`Rugpull Fund`,n],[`Vibecoin mint`,10000n-e-t-n]]}}}_computeTokenPreview(){let e=this._amountWei;if(e===0n)return 0n;let t=vp();if(!this.useShMon&&t===0n)return;let n=this.useShMon?e:e*10n**18n/t;if(this.target===`publicBuy`){let e=this.liveValue(`game.vibecoin`);if(!e)return;let t=e.toLowerCase(),r=this.liveValue(`token:${t}:totalSupply`),i=this.liveValue(`token:${t}:P0`),a=this.liveValue(`token:${t}:K`);return r===void 0||i===void 0||a===void 0?void 0:Fm(n*(this._getFeeBreakdown().find(([e])=>e===`Vibecoin mint`)?.[1]??6600n)/10000n,r,i,a)}if(this.target===`vibecoin`){let e=this.vibecoinAddress?.toLowerCase();if(!e)return;let t=this.liveValue(`token:${e}:totalSupply`),r=this.liveValue(`token:${e}:P0`),i=this.liveValue(`token:${e}:K`);return t===void 0||r===void 0||i===void 0?void 0:Fm(n,t,r,i)}return 0n}_computeTimerExtension(){let e=this.liveValue(`game.settlementTimestamp`);if(e===void 0)return;if(e===0n)return`--`;let t=this._amountWei;if(t===0n)return`--`;let n=this.liveValue(`game.cycle`);if(n===void 0)return;let r=this.liveValue(`game.vibecoin`)?.toLowerCase(),i=this.liveValue(`game.seriesADeposit:${n}`),a=this.liveValue(`game.seriesBDeposit:${n}`),o=r?this.liveValue(`token:${r}:poolBalance`):void 0,s=this.liveValue(`game.phaseEndTime`);if(i===void 0||a===void 0||o===void 0||s===void 0)return;let c=Number(i+a)/0xde0b6b3a7640000;if(c===0)return`--`;let l=vp();if(!this.useShMon&&l===0n)return;let u=this.useShMon?t:t*10n**18n/l,d=Number(o+u)/0xde0b6b3a7640000+1e4,f=c*2419200/(c+2e6)*d*d*1e3/(d*d+40*c*c),p=Number(e)*1e3+36e5+f,m=Math.max(0,p-Number(s)*1e3);if(m===0)return`at max`;let h=Math.floor(m/1e3),g=Math.floor(h/3600),_=Math.floor(h%3600/60);return g>0?`+${g}h ${_}m`:_>0?`+${_}m ${h}s`:`+${h}.${Math.floor(m)%1e3}s`}async _approve(){let e=j,t=z();if(!t||!L)return;let n=this._amountWei;if(n!==0n){this.approvePending=!0,this.error=``;try{let r=this.target===`vibecoin`?this.vibecoinAddress:e.game;await t.writeContract({address:e.shmon,abi:dd,functionName:`approve`,args:[r,n],account:L.address,chain:t.chain}),this.approved=!0}catch(e){J(e)}finally{this.approvePending=!1}}}async _buy(){let e=j,t=z();if(!t||!L)return;let n=this._amountWei;if(n!==0n){if(this.target===`seriesA`||this.target===`seriesB`){let e=this.target===`seriesA`?0:1,t=Y(`game.phase`);if(t===void 0||t!==e){this.error=`${this.target===`seriesA`?`Insider`:`"Insider"`} round has already ended.`;return}let n=Y(`game.phaseEndTime`)??0n,r=Y(`meta.chainTimeDelta`)??0;if(n>0n&&Date.now()/1e3+r>=Number(n)){this.error=`${this.target===`seriesA`?`Insider`:`"Insider"`} round has already ended.`;return}}this.pending=!0,this.error=``;try{let r=wd(bd()??``),i;i=this.target===`vibecoinSell`?await t.writeContract({address:this.vibecoinAddress,abi:V,functionName:`sell`,args:[n,L.address],account:L.address,chain:t.chain}):this.useShMon?this.target===`seriesA`?await t.writeContract({address:e.game,abi:B,functionName:`depositSeriesAWithShMon`,args:[r,n],account:L.address,chain:t.chain}):this.target===`seriesB`?await t.writeContract({address:e.game,abi:B,functionName:`depositSeriesBWithShMon`,args:[r,n],account:L.address,chain:t.chain}):this.target===`publicBuy`?await t.writeContract({address:e.game,abi:B,functionName:`buyWithShMon`,args:[r,n],account:L.address,chain:t.chain}):await t.writeContract({address:this.vibecoinAddress,abi:V,functionName:`buyWithShMon`,args:[L.address,n,!0],account:L.address,chain:t.chain}):this.target===`seriesA`?await t.writeContract({address:e.game,abi:B,functionName:`depositSeriesA`,args:[r],value:n,account:L.address,chain:t.chain}):this.target===`seriesB`?await t.writeContract({address:e.game,abi:B,functionName:`depositSeriesB`,args:[r],value:n,account:L.address,chain:t.chain}):this.target===`publicBuy`?await t.writeContract({address:e.game,abi:B,functionName:`buy`,args:[r],value:n,account:L.address,chain:t.chain}):await t.writeContract({address:this.vibecoinAddress,abi:V,functionName:`buy`,args:[L.address,!0],value:n,account:L.address,chain:t.chain}),this._close(),Pp(i,this._actionLabel())}catch(e){J(e)}finally{this.pending=!1}}}_actionLabel(){let e=this._effectiveVcAddrLowCached(),t=e?Y(`token:${e}:symbol`)??`token`:`token`,n=e?Y(`token:${e}:name`)??``:``,r=this.useShMon?bp(this._amountWei):xp(this._amountWei);switch(this.target){case`seriesA`:return`${r} insider deposit`;case`seriesB`:return`${r} "insider" deposit`;case`publicBuy`:return`Spend ${r} pumping ${n}`;case`vibecoin`:return`Spend ${r} on ${t}`;case`vibecoinSell`:return`Sell ${wp(this._amountWei,t)} for shMON`}}_effectiveVcAddrLowCached(){return this.vibecoinAddress?this.vibecoinAddress.toLowerCase():(Y(`game.vibecoin`)??``).toLowerCase()}_renderPreview(){let e=this._amountWei,t=this._effectiveVcAddrLow(),n=t?this.liveValue(`token:${t}:symbol`)??`???`:`???`;if(this.target===`vibecoinSell`)return H`
        <div class="preview">
          <div class="preview-row">
            <span class="key">SHMON RECEIVED (EST)</span>
            <span class="val accent">${e>0n?Sp(this._sellShMonPreview):`—`}</span>
          </div>
          <div class="fee-section">
            <div class="preview-row">
              <span class="key">DIVIDEND CUT</span>
              <span class="val">${e>0n&&this._sellShMonPreview>0n?`10% · ${Sp(this._sellShMonPreview/9n)}`:`10%`}</span>
            </div>
          </div>
        </div>
      `;let r=this._getFeeBreakdown(),i=this._computeTokenPreview(),a=this.target===`vibecoin`?10000n:r.find(([e])=>e===`Vibecoin`)?.[1]??6600n,o=this.target===`vibecoin`?e:e*a/10000n,s=i===void 0?void 0:i>0n?o*10n**18n/i:0n,c=this.target===`seriesA`||this.target===`seriesB`,l=this._refCode,u=this.target===`vibecoin`?r.find(([e])=>e===`To buyer`)?.[1]??9000n:10000n,d=i===void 0?void 0:i*u/10000n,f=e*(this.target===`vibecoin`?10000n:r.find(([e])=>e===`Vibecoins minted`||e===`Vibecoin mint`)?.[1]??6600n)/10000n;this.liveValue(`meta.shmonRate`);let p=vp(),m=p>0n?this.useShMon?f:f*10n**18n/p:void 0,h=this.liveValue(`game.cycle`),g=h===void 0?void 0:this.target===`seriesA`?this.liveValue(`game.seriesADeposit:${h}`):this.liveValue(`game.seriesBDeposit:${h}`),_=g===void 0||m===void 0?void 0:m>0n&&g+m>0n?(Number(m*10000n/(g+m))/100).toFixed(2):null,v=this.target===`seriesA`?`insider buy-in`:`"insider" buy-in`;return H`
      <div class="preview">
        ${c?H`
          <div class="preview-row">
            <span class="key">TOKENS</span>
            <span class="val">Allocated on Vibecoin generation</span>
          </div>
          <div class="preview-row">
            <span class="key">YOUR POOL SHARE</span>
            <span class="val accent">${_===void 0?this.spin:_===null?`—`:`${_}% of ${v}`}</span>
          </div>
        `:H`
          <div class="preview-row">
            <span class="key">YOU RECEIVE (EST)</span>
            <span class="val accent">${d===void 0?this.spin:d>0n?wp(d,n):`—`}</span>
          </div>
          <div class="preview-row">
            <span class="key">EFFECTIVE PRICE</span>
            <span class="val">${s===void 0?this.spin:s>0n?`${Sp(s,6)} / \$${n}`:`—`}</span>
          </div>
        `}

        ${this.target===`publicBuy`?H`
          <div class="preview-row">
            <span class="key">TIMER EXTENSION</span>
            <span class="val">${this._computeTimerExtension()??this.spin}</span>
          </div>
        `:``}

        <div class="fee-section">
          ${r.map(([t,r])=>{let a=this.target===`vibecoin`&&i!==void 0&&i>0n?` · ${wp(i*r/10000n,n)}`:this.target!==`vibecoin`&&e>0n?` · ${this.useShMon?Sp(e*r/10000n):xp(e*r/10000n)}`:``;return H`
              <div class="preview-row">
                <span class="key">${t.toUpperCase()}</span>
                <span class="val">${Number(r)/100}%${a}</span>
              </div>
            `})}
        </div>
      </div>

      ${l?H`
        <div class="referral-note">
          REFERRAL: <span>${l}</span>
        </div>
      `:``}
    `}render(){if(!this.visible)return H``;let e=this.target===`vibecoinSell`,t=!e&&this.useShMon,n=!!L,r=this.target===`seriesA`||this.target===`seriesB`,i=e?this._tokenBalance:0n,a=this._effectiveVcAddrLow(),o=a?this.liveValue(`token:${a}:symbol`)??`???`:`???`;return H`
      <div class="overlay" @click=${e=>{e.target===e.currentTarget&&this._close()}}>
        <div class="modal">
          <button class="close-btn" @click=${this._close}>✕</button>
          <div class="title">${this._getTitle()}</div>

          <div class="field">
            <label style="display:flex;justify-content:space-between">
              <span>${e?`TOKENS TO SELL`:`AMOUNT`}</span>
              ${e&&i>0n?H`<span style="color:#d8d8e8">BAL: ${wp(i,o)}</span>`:``}
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
              ${e?H`
                <button
                  style="
                    font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:1px;
                    padding:10px 10px;border:1px solid #1a1a30;background:#060608;
                    color:#ff2d6b;cursor:pointer;white-space:nowrap;
                  "
                  @click=${()=>{this.amountStr=(Number(i)/0xde0b6b3a7640000).toString(),this._updateSellPreview()}}
                >MAX</button>
              `:H`
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

          ${t&&!this.approved?H`
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

          ${this.error?H`<div class="error">${this.error}</div>`:``}
        </div>
      </div>
    `}};q([K()],Im.prototype,`visible`,void 0),q([K()],Im.prototype,`target`,void 0),q([K()],Im.prototype,`vibecoinAddress`,void 0),q([K()],Im.prototype,`amountStr`,void 0),q([K()],Im.prototype,`useShMon`,void 0),q([K()],Im.prototype,`pending`,void 0),q([K()],Im.prototype,`approvePending`,void 0),q([K()],Im.prototype,`approved`,void 0),q([K()],Im.prototype,`error`,void 0),q([K()],Im.prototype,`_sellShMonPreview`,void 0),q([K()],Im.prototype,`_tokenBalance`,void 0),Im=q([W(`buy-dialog`)],Im);var Lm=`disclaimer-accepted-v1`,Rm=class extends up{constructor(...e){super(...e),this.open=!localStorage.getItem(Lm)}_accept(){localStorage.setItem(Lm,`1`),this.open=!1}static{this.styles=of`
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
  `}_renderContent(){return H`
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
      `}render(){if(!this.open)return H``;let e={10143:`TESTNET — HEADS UP`,143:`DISCLAIMER`}[10143]??`YOU FOUND THE DEV BUILD`,t={10143:`GOT IT — LET ME PLAY`,143:`I ACCEPT — LET ME PLAY`}[10143]??`LETS GO`;return H`
      <div class="overlay">
        <div class="dialog">
          <div class="title">${e}</div>
          ${this._renderContent()}
          <hr class="divider"/>
          <button class="accept-btn" @click=${this._accept}>${t}</button>
        </div>
      </div>
    `}};q([K()],Rm.prototype,`open`,void 0),Rm=q([W(`disclaimer-modal`)],Rm);var zm=class extends up{constructor(...e){super(...e),this.tab=`pump`,this._handleHash=()=>{Cd();let e=window.location.hash.split(`?`)[0];e===`#vibecoins`||e.startsWith(`#vibecoins/`)?this.tab=`vibecoins`:this.tab=`pump`},this._onWalletChanged=()=>{this.requestUpdate()},this._onOpenBuyDialog=e=>{let t=this.renderRoot?.querySelector(`buy-dialog`);t&&typeof t.open==`function`&&t.open(e.detail)}}static{this.styles=of`
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
  `}connectedCallback(){super.connectedCallback(),this._handleHash(),window.addEventListener(`hashchange`,this._handleHash),Ju.addEventListener(`wallet-changed`,this._onWalletChanged),window.addEventListener(`open-buy-dialog`,this._onOpenBuyDialog)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,this._handleHash),Ju.removeEventListener(`wallet-changed`,this._onWalletChanged),window.removeEventListener(`open-buy-dialog`,this._onOpenBuyDialog)}render(){return H`
      <header-bar></header-bar>
      <main>
        ${this.tab===`pump`?H`<pump-tab></pump-tab>`:``}
        ${this.tab===`vibecoins`?H`<vibecoins-tab></vibecoins-tab>`:``}
      </main>
      <buy-dialog></buy-dialog>
      <tx-confirm-dialog></tx-confirm-dialog>
      <disclaimer-modal></disclaimer-modal>
    `}};q([K()],zm.prototype,`tab`,void 0),zm=q([W(`app-root`)],zm);function Bm(e){let t=e instanceof Error?e.message:String(e),n=e instanceof Error?e.stack??e.message:String(e);window.dispatchEvent(new CustomEvent(`app-error-show`,{detail:{short:t,full:n,name:`UNCAUGHT ERROR`}}))}window.addEventListener(`error`,e=>Bm(e.error??e.message)),window.addEventListener(`unhandledrejection`,e=>Bm(e.reason)),nm(),Y(`meta.shmonRate`,!0,document.documentElement);