import{aV as L,aW as M,I as w,m as h,n as A,aL as N,aX as E,J as H,k as U,p as C}from"./wzry-index-xxcMHwI4.js";import{l as D,a0 as _,a1 as F,r as y,C as O,E as i,F as r,O as k,u as c,Q as P,I as p,J as m,G as T,H as $,U as q}from"./wzry-wzry_vue-Lqzt6jH9.js";const x={ref:"selectBox",class:"select-box"},J=["onMousedown"],K={class:"item"},z=D({__name:"index",props:_({disabled:{type:Boolean,default:!1},type:{default:"ALL"},empty:{type:Boolean,default:!0},placeholder:{default:"皮肤/英雄"},black:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:_(["change"],["update:modelValue"]),setup(v,{emit:V}){const n=v,f=V,l=F(v,"modelValue"),{playAudio:S}=U();let t=[];const u=y(!1),d=y([]),g=()=>{u.value=!0,d.value=t,l.value&&b()},B=()=>{u.value=!1},b=()=>{d.value=E(H(t),l.value,"value")},I=e=>{e==="全部"?(l.value="",f("change","")):(l.value=e,f("change",e)),S()};return O(async()=>{const e=(await L()).map(s=>s.value),o=(await M()).map(s=>s.value);let a=[];n.type==="ALL"?a=[...e,...o]:n.type==="HERO"?a=e:n.type==="SKIN"&&(a=o),t=w([...new Set(a)].map(s=>({label:s,value:s}))),n.empty&&t.unshift({label:"全部",value:"全部"}),d.value=t}),(e,o)=>(i(),r("div",{class:m(["select-hero-and-skin",{black:e.black}])},[k((i(),r("div",x,[P(N,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),class:"k-input",placeholder:l.value||e.placeholder,required:!1,disabled:e.disabled,onInput:b,onFocus:g,onBlur:B},null,8,["modelValue","placeholder","disabled"]),p("div",{class:m(["arrow",{rotate:u.value}])},null,2)])),[[c(h),{text:e.disabled?"":c(A).kb43,type:"INPUT",disabled:e.disabled}]]),p("div",{class:m(["select-list",{retract:!u.value||e.disabled}])},[(i(!0),r(T,null,$(d.value,a=>k((i(),r("div",{key:a.label,class:"box",onMousedown:s=>I(a.value)},[p("div",K,q(a.value),1)],40,J)),[[c(h)]])),128))],2)],2))}}),R=C(z,[["__scopeId","data-v-132c9acc"]]);export{R as S};
