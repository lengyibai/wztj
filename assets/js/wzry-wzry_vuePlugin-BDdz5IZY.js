import{e as Ze,r as Oe,m as Je,h as Pt,i as D,w as et,a as tt,b as ie,c as xe,t as nt,d as wt,g as Ct,o as kt,n as rt,f as _t,j as B,s as At,u as re,k as Ot,l as st,p as ot,q as Ee,v as xt,x as jt,y as It}from"./wzry-wzry_vue-DCUTD-ms.js";function Dn(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(s){s(n)}),(r=e.get("*"))&&r.slice().map(function(s){s(t,n)})}}}var Lt=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ct;const he=e=>ct=e,it=Symbol();function we(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var se;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(se||(se={}));function Kn(){const e=Ze(!0),t=e.run(()=>Oe({}));let n=[],r=[];const s=Je({install(i){he(s),s._a=i,i.provide(it,s),i.config.globalProperties.$pinia=s,r.forEach(h=>n.push(h)),r=[]},use(i){return!this._a&&!Lt?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const at=()=>{};function Ne(e,t,n,r=at){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Ct()&&kt(s),s}function X(e,...t){e.slice().forEach(n=>{n(...t)})}const Mt=e=>e();function Ce(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];we(s)&&we(r)&&e.hasOwnProperty(n)&&!ie(r)&&!xe(r)?e[n]=Ce(s,r):e[n]=r}return e}const Nt=Symbol();function $t(e){return!we(e)||!e.hasOwnProperty(Nt)}const{assign:W}=Object;function Ht(e){return!!(ie(e)&&e.effect)}function Bt(e,t,n,r){const{state:s,actions:i,getters:h}=t,p=n.state.value[e];let a;function f(){p||(n.state.value[e]=s?s():{});const d=_t(n.state.value[e]);return W(d,i,Object.keys(h||{}).reduce((c,u)=>(c[u]=Je(B(()=>{he(n);const l=n._s.get(e);return h[u].call(l,l)})),c),{}))}return a=ut(e,f,t,n,r,!0),a}function ut(e,t,n={},r,s,i){let h;const p=W({actions:{}},n),a={deep:!0};let f,d,c=[],u=[],l;const R=r.state.value[e];!i&&!R&&(r.state.value[e]={}),Oe({});let b;function k(O){let P;f=d=!1,typeof O=="function"?(O(r.state.value[e]),P={type:se.patchFunction,storeId:e,events:l}):(Ce(r.state.value[e],O),P={type:se.patchObject,payload:O,storeId:e,events:l});const H=b=Symbol();rt().then(()=>{b===H&&(f=!0)}),d=!0,X(c,P,r.state.value[e])}const A=i?function(){const{state:P}=n,H=P?P():{};this.$patch(q=>{W(q,H)})}:at;function S(){h.stop(),c=[],u=[],r._s.delete(e)}function w(O,P){return function(){he(r);const H=Array.from(arguments),q=[],K=[];function Q(M){q.push(M)}function me(M){K.push(M)}X(u,{args:H,name:O,store:I,after:Q,onError:me});let z;try{z=P.apply(this&&this.$id===e?this:I,H)}catch(M){throw X(K,M),M}return z instanceof Promise?z.then(M=>(X(q,M),M)).catch(M=>(X(K,M),Promise.reject(M))):(X(q,z),z)}}const $={_p:r,$id:e,$onAction:Ne.bind(null,u),$patch:k,$reset:A,$subscribe(O,P={}){const H=Ne(c,O,P.detached,()=>q()),q=h.run(()=>et(()=>r.state.value[e],K=>{(P.flush==="sync"?d:f)&&O({storeId:e,type:se.direct,events:l},K)},W({},a,P)));return H},$dispose:S},I=tt($);r._s.set(e,I);const L=(r._a&&r._a.runWithContext||Mt)(()=>r._e.run(()=>(h=Ze()).run(t)));for(const O in L){const P=L[O];if(ie(P)&&!Ht(P)||xe(P))i||(R&&$t(P)&&(ie(P)?P.value=R[O]:Ce(P,R[O])),r.state.value[e][O]=P);else if(typeof P=="function"){const H=w(O,P);L[O]=H,p.actions[O]=P}}return W(I,L),W(nt(I),L),Object.defineProperty(I,"$state",{get:()=>r.state.value[e],set:O=>{k(P=>{W(P,O)})}}),r._p.forEach(O=>{W(I,h.run(()=>O({store:I,app:r._a,pinia:r,options:p})))}),R&&i&&n.hydrate&&n.hydrate(I.$state,R),f=!0,d=!0,I}function Un(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function h(p,a){const f=Pt();return p=p||(f?D(it,null):null),p&&he(p),p=ct,p._s.has(r)||(i?ut(r,t,s,p):Bt(r,s,p)),p._s.get(r)}return h.$id=r,h}function Wn(e){{e=nt(e);const t={};for(const n in e){const r=e[n];(ie(r)||xe(r))&&(t[n]=wt(e,n))}return t}}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Z=typeof document<"u";function Tt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const C=Object.assign;function Se(e,t){const n={};for(const r in t){const s=t[r];n[r]=T(s)?s.map(e):e(s)}return n}const oe=()=>{},T=Array.isArray,lt=/#/g,qt=/&/g,Vt=/\//g,zt=/=/g,Gt=/\?/g,ft=/\+/g,Dt=/%5B/g,Kt=/%5D/g,ht=/%5E/g,Ut=/%60/g,dt=/%7B/g,Wt=/%7C/g,pt=/%7D/g,Ft=/%20/g;function je(e){return encodeURI(""+e).replace(Wt,"|").replace(Dt,"[").replace(Kt,"]")}function Qt(e){return je(e).replace(dt,"{").replace(pt,"}").replace(ht,"^")}function ke(e){return je(e).replace(ft,"%2B").replace(Ft,"+").replace(lt,"%23").replace(qt,"%26").replace(Ut,"`").replace(dt,"{").replace(pt,"}").replace(ht,"^")}function Yt(e){return ke(e).replace(zt,"%3D")}function Xt(e){return je(e).replace(lt,"%23").replace(Gt,"%3F")}function Zt(e){return e==null?"":Xt(e).replace(Vt,"%2F")}function ae(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Jt=/\/$/,en=e=>e.replace(Jt,"");function be(e,t,n="/"){let r,s={},i="",h="";const p=t.indexOf("#");let a=t.indexOf("?");return p<a&&p>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,p>-1?p:t.length),s=e(i)),p>-1&&(r=r||t.slice(0,p),h=t.slice(p,t.length)),r=sn(r??t,n),{fullPath:r+(i&&"?")+i+h,path:r,query:s,hash:ae(h)}}function tn(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $e(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function nn(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&J(t.matched[r],n.matched[s])&&mt(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function J(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function mt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!rn(e[n],t[n]))return!1;return!0}function rn(e,t){return T(e)?He(e,t):T(t)?He(t,e):e===t}function He(e,t){return T(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function sn(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,h,p;for(h=0;h<r.length;h++)if(p=r[h],p!==".")if(p==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(h).join("/")}const U={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ue;(function(e){e.pop="pop",e.push="push"})(ue||(ue={}));var ce;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ce||(ce={}));function on(e){if(!e)if(Z){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),en(e)}const cn=/^[^#]+#/;function an(e,t){return e.replace(cn,"#")+t}function un(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const de=()=>({left:window.scrollX,top:window.scrollY});function ln(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=un(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Be(e,t){return(history.state?history.state.position-t:-1)+e}const _e=new Map;function fn(e,t){_e.set(e,t)}function hn(e){const t=_e.get(e);return _e.delete(e),t}let dn=()=>location.protocol+"//"+location.host;function gt(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let p=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(p);return a[0]!=="/"&&(a="/"+a),$e(a,"")}return $e(n,e)+r+s}function pn(e,t,n,r){let s=[],i=[],h=null;const p=({state:u})=>{const l=gt(e,location),R=n.value,b=t.value;let k=0;if(u){if(n.value=l,t.value=u,h&&h===R){h=null;return}k=b?u.position-b.position:0}else r(l);s.forEach(A=>{A(n.value,R,{delta:k,type:ue.pop,direction:k?k>0?ce.forward:ce.back:ce.unknown})})};function a(){h=n.value}function f(u){s.push(u);const l=()=>{const R=s.indexOf(u);R>-1&&s.splice(R,1)};return i.push(l),l}function d(){const{history:u}=window;u.state&&u.replaceState(C({},u.state,{scroll:de()}),"")}function c(){for(const u of i)u();i=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:a,listen:f,destroy:c}}function Te(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?de():null}}function mn(e){const{history:t,location:n}=window,r={value:gt(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,f,d){const c=e.indexOf("#"),u=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+a:dn()+e+a;try{t[d?"replaceState":"pushState"](f,"",u),s.value=f}catch(l){console.error(l),n[d?"replace":"assign"](u)}}function h(a,f){const d=C({},t.state,Te(s.value.back,a,s.value.forward,!0),f,{position:s.value.position});i(a,d,!0),r.value=a}function p(a,f){const d=C({},s.value,t.state,{forward:a,scroll:de()});i(d.current,d,!0);const c=C({},Te(r.value,a,null),{position:d.position+1},f);i(a,c,!1),r.value=a}return{location:r,state:s,push:p,replace:h}}function gn(e){e=on(e);const t=mn(e),n=pn(e,t.state,t.location,t.replace);function r(i,h=!0){h||n.pauseListeners(),history.go(i)}const s=C({location:"",base:e,go:r,createHref:an.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Fn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),gn(e)}function vn(e){return typeof e=="string"||e&&typeof e=="object"}function vt(e){return typeof e=="string"||typeof e=="symbol"}const yt=Symbol("");var qe;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(qe||(qe={}));function ee(e,t){return C(new Error,{type:e,[yt]:!0},t)}function G(e,t){return e instanceof Error&&yt in e&&(t==null||!!(e.type&t))}const Ve="[^/]+?",yn={sensitive:!1,strict:!1,start:!0,end:!0},Rn=/[.+*?^${}()[\]/\\]/g;function En(e,t){const n=C({},yn,t),r=[];let s=n.start?"^":"";const i=[];for(const f of e){const d=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let c=0;c<f.length;c++){const u=f[c];let l=40+(n.sensitive?.25:0);if(u.type===0)c||(s+="/"),s+=u.value.replace(Rn,"\\$&"),l+=40;else if(u.type===1){const{value:R,repeatable:b,optional:k,regexp:A}=u;i.push({name:R,repeatable:b,optional:k});const S=A||Ve;if(S!==Ve){l+=10;try{new RegExp(`(${S})`)}catch($){throw new Error(`Invalid custom RegExp for param "${R}" (${S}): `+$.message)}}let w=b?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;c||(w=k&&f.length<2?`(?:/${w})`:"/"+w),k&&(w+="?"),s+=w,l+=20,k&&(l+=-8),b&&(l+=-20),S===".*"&&(l+=-50)}d.push(l)}r.push(d)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const h=new RegExp(s,n.sensitive?"":"i");function p(f){const d=f.match(h),c={};if(!d)return null;for(let u=1;u<d.length;u++){const l=d[u]||"",R=i[u-1];c[R.name]=l&&R.repeatable?l.split("/"):l}return c}function a(f){let d="",c=!1;for(const u of e){(!c||!d.endsWith("/"))&&(d+="/"),c=!1;for(const l of u)if(l.type===0)d+=l.value;else if(l.type===1){const{value:R,repeatable:b,optional:k}=l,A=R in f?f[R]:"";if(T(A)&&!b)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const S=T(A)?A.join("/"):A;if(!S)if(k)u.length<2&&(d.endsWith("/")?d=d.slice(0,-1):c=!0);else throw new Error(`Missing required param "${R}"`);d+=S}}return d||"/"}return{re:h,score:r,keys:i,parse:p,stringify:a}}function Sn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Rt(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Sn(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ze(r))return 1;if(ze(s))return-1}return s.length-r.length}function ze(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const bn={type:0,value:""},Pn=/[a-zA-Z0-9_]/;function wn(e){if(!e)return[[]];if(e==="/")return[[bn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(l){throw new Error(`ERR (${n})/"${f}": ${l}`)}let n=0,r=n;const s=[];let i;function h(){i&&s.push(i),i=[]}let p=0,a,f="",d="";function c(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=a}for(;p<e.length;){if(a=e[p++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&c(),h()):a===":"?(c(),n=1):u();break;case 4:u(),n=r;break;case 1:a==="("?n=2:Pn.test(a)?u():(c(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&p--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:c(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&p--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),c(),h(),s}function Cn(e,t,n){const r=En(wn(e.path),n),s=C(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function kn(e,t){const n=[],r=new Map;t=Ke({strict:!1,end:!0,sensitive:!1},t);function s(c){return r.get(c)}function i(c,u,l){const R=!l,b=_n(c);b.aliasOf=l&&l.record;const k=Ke(t,c),A=[b];if("alias"in c){const $=typeof c.alias=="string"?[c.alias]:c.alias;for(const I of $)A.push(C({},b,{components:l?l.record.components:b.components,path:I,aliasOf:l?l.record:b}))}let S,w;for(const $ of A){const{path:I}=$;if(u&&I[0]!=="/"){const V=u.record.path,L=V[V.length-1]==="/"?"":"/";$.path=u.record.path+(I&&L+I)}if(S=Cn($,u,k),l?l.alias.push(S):(w=w||S,w!==S&&w.alias.push(S),R&&c.name&&!De(S)&&h(c.name)),Et(S)&&a(S),b.children){const V=b.children;for(let L=0;L<V.length;L++)i(V[L],S,l&&l.children[L])}l=l||S}return w?()=>{h(w)}:oe}function h(c){if(vt(c)){const u=r.get(c);u&&(r.delete(c),n.splice(n.indexOf(u),1),u.children.forEach(h),u.alias.forEach(h))}else{const u=n.indexOf(c);u>-1&&(n.splice(u,1),c.record.name&&r.delete(c.record.name),c.children.forEach(h),c.alias.forEach(h))}}function p(){return n}function a(c){const u=xn(c,n);n.splice(u,0,c),c.record.name&&!De(c)&&r.set(c.record.name,c)}function f(c,u){let l,R={},b,k;if("name"in c&&c.name){if(l=r.get(c.name),!l)throw ee(1,{location:c});k=l.record.name,R=C(Ge(u.params,l.keys.filter(w=>!w.optional).concat(l.parent?l.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),c.params&&Ge(c.params,l.keys.map(w=>w.name))),b=l.stringify(R)}else if(c.path!=null)b=c.path,l=n.find(w=>w.re.test(b)),l&&(R=l.parse(b),k=l.record.name);else{if(l=u.name?r.get(u.name):n.find(w=>w.re.test(u.path)),!l)throw ee(1,{location:c,currentLocation:u});k=l.record.name,R=C({},u.params,c.params),b=l.stringify(R)}const A=[];let S=l;for(;S;)A.unshift(S.record),S=S.parent;return{name:k,path:b,params:R,matched:A,meta:On(A)}}e.forEach(c=>i(c));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:f,removeRoute:h,clearRoutes:d,getRoutes:p,getRecordMatcher:s}}function Ge(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function _n(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:An(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function An(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function De(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function On(e){return e.reduce((t,n)=>C(t,n.meta),{})}function Ke(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function xn(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Rt(e,t[i])<0?r=i:n=i+1}const s=jn(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function jn(e){let t=e;for(;t=t.parent;)if(Et(t)&&Rt(e,t)===0)return t}function Et({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function In(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ft," "),h=i.indexOf("="),p=ae(h<0?i:i.slice(0,h)),a=h<0?null:ae(i.slice(h+1));if(p in t){let f=t[p];T(f)||(f=t[p]=[f]),f.push(a)}else t[p]=a}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=Yt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(T(r)?r.map(i=>i&&ke(i)):[r&&ke(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Ln(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=T(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const St=Symbol(""),We=Symbol(""),pe=Symbol(""),Ie=Symbol(""),Ae=Symbol("");function ne(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Mn(e,t,n){const r=()=>{e[t].delete(n)};xt(r),jt(r),It(()=>{e[t].add(n)}),e[t].add(n)}function Qn(e){const t=D(St,{}).value;t&&Mn(t,"leaveGuards",e)}function F(e,t,n,r,s,i=h=>h()){const h=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((p,a)=>{const f=u=>{u===!1?a(ee(4,{from:n,to:t})):u instanceof Error?a(u):vn(u)?a(ee(2,{from:t,to:u})):(h&&r.enterCallbacks[s]===h&&typeof u=="function"&&h.push(u),p())},d=i(()=>e.call(r&&r.instances[s],t,n,f));let c=Promise.resolve(d);e.length<3&&(c=c.then(f)),c.catch(u=>a(u))})}function Pe(e,t,n,r,s=i=>i()){const i=[];for(const h of e)for(const p in h.components){let a=h.components[p];if(!(t!=="beforeRouteEnter"&&!h.instances[p]))if(Nn(a)){const d=(a.__vccOpts||a)[t];d&&i.push(F(d,n,r,h,p,s))}else{let f=a();i.push(()=>f.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${h.path}"`));const c=Tt(d)?d.default:d;h.components[p]=c;const l=(c.__vccOpts||c)[t];return l&&F(l,n,r,h,p,s)()}))}}return i}function Nn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fe(e){const t=D(pe),n=D(Ie),r=B(()=>{const a=re(e.to);return t.resolve(a)}),s=B(()=>{const{matched:a}=r.value,{length:f}=a,d=a[f-1],c=n.matched;if(!d||!c.length)return-1;const u=c.findIndex(J.bind(null,d));if(u>-1)return u;const l=Qe(a[f-2]);return f>1&&Qe(d)===l&&c[c.length-1].path!==l?c.findIndex(J.bind(null,a[f-2])):u}),i=B(()=>s.value>-1&&Tn(n.params,r.value.params)),h=B(()=>s.value>-1&&s.value===n.matched.length-1&&mt(n.params,r.value.params));function p(a={}){return Bn(a)?t[re(e.replace)?"replace":"push"](re(e.to)).catch(oe):Promise.resolve()}return{route:r,href:B(()=>r.value.href),isActive:i,isExactActive:h,navigate:p}}const $n=st({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fe,setup(e,{slots:t}){const n=tt(Fe(e)),{options:r}=D(pe),s=B(()=>({[Ye(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:ot("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Hn=$n;function Bn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Tn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!T(s)||s.length!==r.length||r.some((i,h)=>i!==s[h]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>e??t??n,qn=st({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=D(Ae),s=B(()=>e.route||r.value),i=D(We,0),h=B(()=>{let f=re(i);const{matched:d}=s.value;let c;for(;(c=d[f])&&!c.components;)f++;return f}),p=B(()=>s.value.matched[h.value]);Ee(We,B(()=>h.value+1)),Ee(St,p),Ee(Ae,s);const a=Oe();return et(()=>[a.value,p.value,e.name],([f,d,c],[u,l,R])=>{d&&(d.instances[c]=f,l&&l!==d&&f&&f===u&&(d.leaveGuards.size||(d.leaveGuards=l.leaveGuards),d.updateGuards.size||(d.updateGuards=l.updateGuards))),f&&d&&(!l||!J(d,l)||!u)&&(d.enterCallbacks[c]||[]).forEach(b=>b(f))},{flush:"post"}),()=>{const f=s.value,d=e.name,c=p.value,u=c&&c.components[d];if(!u)return Xe(n.default,{Component:u,route:f});const l=c.props[d],R=l?l===!0?f.params:typeof l=="function"?l(f):l:null,k=ot(u,C({},R,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Xe(n.default,{Component:k,route:f})||k}}});function Xe(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Vn=qn;function Yn(e){const t=kn(e.routes,e),n=e.parseQuery||In,r=e.stringifyQuery||Ue,s=e.history,i=ne(),h=ne(),p=ne(),a=At(U);let f=U;Z&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Se.bind(null,o=>""+o),c=Se.bind(null,Zt),u=Se.bind(null,ae);function l(o,g){let m,v;return vt(o)?(m=t.getRecordMatcher(o),v=g):v=o,t.addRoute(v,m)}function R(o){const g=t.getRecordMatcher(o);g&&t.removeRoute(g)}function b(){return t.getRoutes().map(o=>o.record)}function k(o){return!!t.getRecordMatcher(o)}function A(o,g){if(g=C({},g||a.value),typeof o=="string"){const y=be(n,o,g.path),j=t.resolve({path:y.path},g),te=s.createHref(y.fullPath);return C(y,j,{params:u(j.params),hash:ae(y.hash),redirectedFrom:void 0,href:te})}let m;if(o.path!=null)m=C({},o,{path:be(n,o.path,g.path).path});else{const y=C({},o.params);for(const j in y)y[j]==null&&delete y[j];m=C({},o,{params:c(y)}),g.params=c(g.params)}const v=t.resolve(m,g),_=o.hash||"";v.params=d(u(v.params));const x=tn(r,C({},o,{hash:Qt(_),path:v.path})),E=s.createHref(x);return C({fullPath:x,hash:_,query:r===Ue?Ln(o.query):o.query||{}},v,{redirectedFrom:void 0,href:E})}function S(o){return typeof o=="string"?be(n,o,a.value.path):C({},o)}function w(o,g){if(f!==o)return ee(8,{from:g,to:o})}function $(o){return L(o)}function I(o){return $(C(S(o),{replace:!0}))}function V(o){const g=o.matched[o.matched.length-1];if(g&&g.redirect){const{redirect:m}=g;let v=typeof m=="function"?m(o):m;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=S(v):{path:v},v.params={}),C({query:o.query,hash:o.hash,params:v.path!=null?{}:o.params},v)}}function L(o,g){const m=f=A(o),v=a.value,_=o.state,x=o.force,E=o.replace===!0,y=V(m);if(y)return L(C(S(y),{state:typeof y=="object"?C({},_,y.state):_,force:x,replace:E}),g||m);const j=m;j.redirectedFrom=g;let te;return!x&&nn(r,v,m)&&(te=ee(16,{to:j,from:v}),Le(v,v,!0,!1)),(te?Promise.resolve(te):H(j,v)).catch(N=>G(N)?G(N,2)?N:ve(N):ge(N,j,v)).then(N=>{if(N){if(G(N,2))return L(C({replace:E},S(N.to),{state:typeof N.to=="object"?C({},_,N.to.state):_,force:x}),g||j)}else N=K(j,v,!0,E,_);return q(j,v,N),N})}function O(o,g){const m=w(o,g);return m?Promise.reject(m):Promise.resolve()}function P(o){const g=fe.values().next().value;return g&&typeof g.runWithContext=="function"?g.runWithContext(o):o()}function H(o,g){let m;const[v,_,x]=zn(o,g);m=Pe(v.reverse(),"beforeRouteLeave",o,g);for(const y of v)y.leaveGuards.forEach(j=>{m.push(F(j,o,g))});const E=O.bind(null,o,g);return m.push(E),Y(m).then(()=>{m=[];for(const y of i.list())m.push(F(y,o,g));return m.push(E),Y(m)}).then(()=>{m=Pe(_,"beforeRouteUpdate",o,g);for(const y of _)y.updateGuards.forEach(j=>{m.push(F(j,o,g))});return m.push(E),Y(m)}).then(()=>{m=[];for(const y of x)if(y.beforeEnter)if(T(y.beforeEnter))for(const j of y.beforeEnter)m.push(F(j,o,g));else m.push(F(y.beforeEnter,o,g));return m.push(E),Y(m)}).then(()=>(o.matched.forEach(y=>y.enterCallbacks={}),m=Pe(x,"beforeRouteEnter",o,g,P),m.push(E),Y(m))).then(()=>{m=[];for(const y of h.list())m.push(F(y,o,g));return m.push(E),Y(m)}).catch(y=>G(y,8)?y:Promise.reject(y))}function q(o,g,m){p.list().forEach(v=>P(()=>v(o,g,m)))}function K(o,g,m,v,_){const x=w(o,g);if(x)return x;const E=g===U,y=Z?history.state:{};m&&(v||E?s.replace(o.fullPath,C({scroll:E&&y&&y.scroll},_)):s.push(o.fullPath,_)),a.value=o,Le(o,g,m,E),ve()}let Q;function me(){Q||(Q=s.listen((o,g,m)=>{if(!Me.listening)return;const v=A(o),_=V(v);if(_){L(C(_,{replace:!0}),v).catch(oe);return}f=v;const x=a.value;Z&&fn(Be(x.fullPath,m.delta),de()),H(v,x).catch(E=>G(E,12)?E:G(E,2)?(L(E.to,v).then(y=>{G(y,20)&&!m.delta&&m.type===ue.pop&&s.go(-1,!1)}).catch(oe),Promise.reject()):(m.delta&&s.go(-m.delta,!1),ge(E,v,x))).then(E=>{E=E||K(v,x,!1),E&&(m.delta&&!G(E,8)?s.go(-m.delta,!1):m.type===ue.pop&&G(E,20)&&s.go(-1,!1)),q(v,x,E)}).catch(oe)}))}let z=ne(),M=ne(),le;function ge(o,g,m){ve(o);const v=M.list();return v.length?v.forEach(_=>_(o,g,m)):console.error(o),Promise.reject(o)}function bt(){return le&&a.value!==U?Promise.resolve():new Promise((o,g)=>{z.add([o,g])})}function ve(o){return le||(le=!o,me(),z.list().forEach(([g,m])=>o?m(o):g()),z.reset()),o}function Le(o,g,m,v){const{scrollBehavior:_}=e;if(!Z||!_)return Promise.resolve();const x=!m&&hn(Be(o.fullPath,0))||(v||!m)&&history.state&&history.state.scroll||null;return rt().then(()=>_(o,g,x)).then(E=>E&&ln(E)).catch(E=>ge(E,o,g))}const ye=o=>s.go(o);let Re;const fe=new Set,Me={currentRoute:a,listening:!0,addRoute:l,removeRoute:R,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:b,resolve:A,options:e,push:$,replace:I,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:h.add,afterEach:p.add,onError:M.add,isReady:bt,install(o){const g=this;o.component("RouterLink",Hn),o.component("RouterView",Vn),o.config.globalProperties.$router=g,Object.defineProperty(o.config.globalProperties,"$route",{enumerable:!0,get:()=>re(a)}),Z&&!Re&&a.value===U&&(Re=!0,$(s.location).catch(_=>{}));const m={};for(const _ in U)Object.defineProperty(m,_,{get:()=>a.value[_],enumerable:!0});o.provide(pe,g),o.provide(Ie,Ot(m)),o.provide(Ae,a);const v=o.unmount;fe.add(o),o.unmount=function(){fe.delete(o),fe.size<1&&(f=U,Q&&Q(),Q=null,a.value=U,Re=!1,le=!1),v()}}};function Y(o){return o.reduce((g,m)=>g.then(()=>P(m)),Promise.resolve())}return Me}function zn(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let h=0;h<i;h++){const p=t.matched[h];p&&(e.matched.find(f=>J(f,p))?r.push(p):n.push(p));const a=e.matched[h];a&&(t.matched.find(f=>J(f,a))||s.push(a))}return[n,r,s]}function Xn(){return D(pe)}function Zn(e){return D(Ie)}export{Fn as a,Kn as b,Yn as c,Un as d,Zn as e,Dn as m,Qn as o,Wn as s,Xn as u};
