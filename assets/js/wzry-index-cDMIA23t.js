import{n as c,o as f,q as m,aG as u,l as b}from"./wzry-index-KJzFk80C.js";import{l as k,r as x,C as y,D as $,M as l,u as t,G as n,H as r,I,J as T}from"./wzry-wzry_vue-DkPlx3I4.js";const g=e=>(I("data-v-387e6044"),e=e(),T(),e),h=g(()=>n("div",{class:"line"},null,-1)),w=k({__name:"index",props:{active:{type:Boolean}},emits:["back-top"],setup(e,{emit:p}){const d=p,v=x(),s=()=>{d("back-top")};return(o,i)=>(y(),$("div",{ref_key:"backTopRef",ref:v,class:r(["k-back-top",{active:o.active}])},[h,l(n("i",{class:"iconfont wzry-spider",onClick:s},null,512),[[t(c),{text:t(f).yf23}]])],2))}}),A=m(w,[["__scopeId","data-v-387e6044"]]),C=e=>(I("data-v-1af97e24"),e=e(),T(),e),B={class:"filter-gender"},S=C(()=>n("span",{class:"label"},"只看：",-1)),z=k({__name:"index",emits:["change"],setup(e,{emit:p}){const d=p,{playAudio:v}=b(),s=x(0),o=i=>{s.value=i,d("change",i),v()};return(i,a)=>(y(),$("div",B,[S,l(n("i",{class:r(["iconfont wzry-nan",{"nan-active":s.value===1}]),onClick:a[0]||(a[0]=_=>o(1))},null,2),[[t(c),{text:t(u)("iv65",{gender:"男"})}]]),l(n("i",{class:r(["iconfont wzry-nv",{"nv-active":s.value===2}]),onClick:a[1]||(a[1]=_=>o(2))},null,2),[[t(c),{text:t(u)("iv65",{gender:"女"})}]]),l(n("i",{class:r(["iconfont wzry-xingbie",{"all-active":s.value===0}]),onClick:a[2]||(a[2]=_=>o(0))},null,2),[[t(c),{text:t(f).jx58}]])]))}}),D=m(z,[["__scopeId","data-v-1af97e24"]]);export{D as F,A as K};