import{aY as w,aZ as L,P as A,n as b,o as I,aO as N,a_ as D,Q as E,l as H,q as O}from"./wzry-index-ElDDcAYL.js";import{l as P,_ as h,$,r as y,B as q,C as i,D as r,M as k,u as c,O as C,H as p,G as v,F,E as T,S as U}from"./wzry-wzry_vue-ZP7q88Pe.js";const x={ref:"selectBox",class:"select-box"},K=["onMousedown"],z={class:"item"},G=P({__name:"index",props:h({disabled:{type:Boolean,default:!1},type:{default:"ALL"},empty:{type:Boolean,default:!0},placeholder:{default:"皮肤/英雄"},black:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:h(["change"],["update:modelValue"]),setup(m,{emit:S}){const n=m,f=S,l=$(m,"modelValue"),{playAudio:B}=H();let t=[];const u=y(!1),d=y([]),M=()=>{u.value=!0,d.value=t,l.value&&_()},V=()=>{u.value=!1},_=()=>{d.value=D(E(t),l.value,"value")},g=e=>{e==="全部"?(l.value="",f("change","")):(l.value=e,f("change",e)),B()};return q(async()=>{const e=(await w()).map(s=>s.value),o=(await L()).map(s=>s.value);let a=[];n.type==="ALL"?a=[...e,...o]:n.type==="HERO"?a=e:n.type==="SKIN"&&(a=o),t=A([...new Set(a)].map(s=>({label:s,value:s}))),n.empty&&t.unshift({label:"全部",value:"全部"}),d.value=t}),(e,o)=>(i(),r("div",{class:v(["select-hero-and-skin",{black:e.black}])},[k((i(),r("div",x,[C(N,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),class:"k-input",placeholder:l.value||e.placeholder,required:!1,disabled:e.disabled,onInput:_,onFocus:M,onBlur:V},null,8,["modelValue","placeholder","disabled"]),p("div",{class:v(["arrow",{rotate:u.value}])},null,2)])),[[c(b),{text:e.disabled?"":c(I).kb43,type:"INPUT",disabled:e.disabled}]]),p("div",{class:v(["select-list",{retract:!u.value||e.disabled}])},[(i(!0),r(F,null,T(d.value,a=>k((i(),r("div",{key:a.label,class:"box",onMousedown:s=>g(a.value)},[p("div",z,U(a.value),1)],40,K)),[[c(b)]])),128))],2)],2))}}),Y=O(G,[["__scopeId","data-v-132c9acc"]]);export{Y as S};
