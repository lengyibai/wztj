import{l as f,E as r,F as o,I as d,a2 as v,Z as y,N as u,G as k,H as S,U as h,j as _,Q as c,J as g,V as n,R as l}from"./wzry-wzry_vue-BwKICDdp.js";import{p}from"./wzry-index-Fmr8mAxu.js";const C=f({__name:"index",props:{top:{default:"0"},marginLeft:{default:"0rem"},marginRight:{default:"0rem"},size:{default:"1.5rem"},textTop:{default:"0.15rem"},textLeft:{default:"0"}},setup(i){return(t,a)=>(r(),o("div",{class:"k-help",style:u({marginLeft:t.marginLeft,marginRight:t.marginRight,width:t.size,height:t.size,transform:`translateY(${t.top})`})},[d("div",{class:"text",style:u({fontSize:`calc(${t.size} * 0.83)`,transform:`translate(${t.textLeft},${t.textTop})`})},[v(t.$slots,"default",{},()=>[y("?")],!0)],4)],4))}}),L=p(C,[["__scopeId","data-v-9ccedc5e"]]),$={class:"num-scroll"},N=f({__name:"index",props:{transform:{}},setup(i){return(t,a)=>(r(),o("div",$,[d("div",{class:"num-list",style:u({transform:t.transform})},[(r(),o(k,null,S(10,(e,m)=>d("div",{key:m,class:"num"},h(m),1)),64))],4)]))}}),s=p(N,[["__scopeId","data-v-ae981a5a"]]),z=f({__name:"index",props:{nums:{},running:{type:Boolean,default:!0},unit:{default:"HOUR"},rate:{default:1}},setup(i){const t=i,a=_(()=>e=>`translateY(-${t.nums[e]}0%)`);return(e,m)=>(r(),o("div",{class:"k-scroll-countdown",style:u(`--font-size-rate:${e.rate}`)},[c(s,{transform:a.value(0)},null,8,["transform"]),c(s,{transform:a.value(1)},null,8,["transform"]),e.unit!=="SEC"?(r(),o("div",{key:0,class:g(["dot",{running:e.running}])}," : ",2)):n("",!0),e.unit!=="SEC"?(r(),l(s,{key:1,transform:a.value(2)},null,8,["transform"])):n("",!0),e.unit!=="SEC"?(r(),l(s,{key:2,transform:a.value(3)},null,8,["transform"])):n("",!0),e.unit!=="SEC"&&e.unit!=="MIN"?(r(),o("div",{key:3,class:g(["dot",{running:e.running}])}," : ",2)):n("",!0),e.unit!=="SEC"&&e.unit!=="MIN"?(r(),l(s,{key:4,transform:a.value(4)},null,8,["transform"])):n("",!0),e.unit!=="SEC"&&e.unit!=="MIN"?(r(),l(s,{key:5,transform:a.value(5)},null,8,["transform"])):n("",!0)],4))}}),B=p(z,[["__scopeId","data-v-1898d867"]]);export{L as K,B as a};