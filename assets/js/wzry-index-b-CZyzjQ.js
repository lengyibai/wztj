import{k as m,p}from"./wzry-index-Fmr8mAxu.js";import{l as f,a0 as _,a1 as k,r as v,E as t,F as l,G as h,H as y,J as S,N as r,U as w,I as V}from"./wzry-wzry_vue-BwKICDdp.js";const g=["onClick"],C=f({__name:"index",props:_({width:{default:"6.25rem"},option:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n,{expose:i}){const a=k(n,"modelValue"),{playAudio:c}=m(),o=v(),d=e=>{a.value=e,c("n4r4")};return i({_el:o}),(e,B)=>(t(),l("div",{ref_key:"kSelectRef",ref:o,class:"k-select"},[(t(!0),l(h,null,y(e.option,(u,s)=>(t(),l("div",{key:s,class:S(["option",{active:a.value===s}]),style:r({width:e.width}),onClick:M=>d(s)},w(u),15,g))),128)),V("div",{class:"active-bg",style:r({width:e.width,transform:`translateX(calc(${a.value} * 100%))`})},null,4)],512))}}),A=p(C,[["__scopeId","data-v-7fbf93ee"]]);export{A as K};