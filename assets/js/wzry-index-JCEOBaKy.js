import{l as c,q as u}from"./wzry-index-pNmeyW9R.js";import{l as m,_ as p,$ as _,C as t,D as o,F as v,E as h,H as f,L as l,S as y,G as k}from"./wzry-wzry_vue-DkPlx3I4.js";const w={class:"k-select"},C=["onClick"],S=m({__name:"index",props:p({width:{default:"6.25rem"},option:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const a=_(n,"modelValue"),{playAudio:r}=c(),i=e=>{a.value=e,r("n4r4")};return(e,V)=>(t(),o("div",w,[(t(!0),o(v,null,h(e.option,(d,s)=>(t(),o("div",{key:s,class:f(["option",{active:a.value===s}]),style:l({width:e.width}),onClick:g=>i(s)},y(d),15,C))),128)),k("div",{class:"active-bg",style:l({width:e.width,transform:`translateX(calc(${a.value} * 100%))`})},null,4)]))}}),$=u(S,[["__scopeId","data-v-a2620223"]]);export{$ as K};
