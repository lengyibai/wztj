import{aw as y,p as $}from"./wzry-index-G5nCmP-f.js";import{l as k,r as u,j as B,w as I,n as g,C as R,a7 as E,E as P,F as z,I as H,a2 as D,N}from"./wzry-wzry_vue-Lqzt6jH9.js";/* empty css                                                                   */const U=k({__name:"index",props:{data:{},columnCount:{},gap:{default:"1rem"},bufferLineCount:{default:1}},emits:["scroll"],setup(_,{expose:L,emit:b}){const l=_,C=b;let f=0;const a=u(),n=u(),s=u(1e3),p=u([]),w=B(()=>a.value?Math.ceil(a.value.offsetHeight/s.value*l.columnCount):1),x=(e,t=!1)=>{var o;(o=a.value)==null||o.scroll({top:e,behavior:t?"smooth":"auto"})},r=()=>{if(!a.value||!n.value)return;const e=l.data,t=l.columnCount,o=l.bufferLineCount*2,m=a.value.scrollTop,d=Math.max(0,Math.floor(m/s.value)*t-o*t),v=Math.min(e.length,d+w.value+o*t*2),h=[];for(let c=d;c<v;c+=t)h.push(...e.slice(c,c+t));p.value=h;const T=Math.floor(d/t)*s.value,S=Math.floor((e.length-v)/t)*s.value;n.value.style.paddingTop=`${T}px`,n.value.style.paddingBottom=`${S}px`,f=m},M=e=>{const o=e.target.scrollTop;C("scroll",o),Math.abs(o-f)>=s.value&&r()},i=y(()=>{const e=n.value.children[0];e&&(s.value=e.offsetHeight,r())},500);return I(()=>l.data,()=>{g(r)}),R(()=>{window.addEventListener("resize",i),r(),g(i)}),E(()=>{window.removeEventListener("resize",i)}),L({_setPosition:x,_updateStatus:i}),(e,t)=>(P(),z("div",{ref_key:"virtualListRef",ref:a,class:"lib-virtual-list",onScroll:M},[H("div",{ref_key:"fillListRef",ref:n,class:"fill-list",style:N({gridTemplateColumns:`repeat(${e.columnCount}, 1fr)`,gap:e.gap})},[D(e.$slots,"default",{data:p.value},void 0,!0)],4)],544))}}),q=$(U,[["__scopeId","data-v-1c635dcf"]]);export{q as L};