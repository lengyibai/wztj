import{l as B,r as F,j as S,w as A,E as r,R as E,S as H,u as i,J as c,G as T,I as o,U as I,F as w,O as b,H as N,N as O,P as R,W}from"./wzry-wzry_vue-Lqzt6jH9.js";import{aF as G,aP as J,aS as L,aX as M,bu as U,bt as V,O as X,m as K,k as Q,p as Y}from"./wzry-index-64YjFE-a.js";const Z=["onClick"],ee={class:"name"},se=B({__name:"index",props:{type:{default:"hero"}},emits:["change"],setup(k,{emit:z}){const n=k,_=z,l=G(),p=J(),u=L(),y=M(),f=U(),d=V(),{playAudio:v}=Q(),{collapse:h,setCollapse:g}=X(),D=[{name:"全部",icon:"wzry-quanbu"},{name:"坦克",icon:"wzry-tanke"},{name:"战士",icon:"wzry-zhanshi"},{name:"刺客",icon:"wzry-cike"},{name:"法师",icon:"wzry-fashi"},{name:"射手",icon:"wzry-sheshou"},{name:"辅助",icon:"wzry-fuzhu"}],C=[{name:"攻击",icon:"wzry-gongji"},{name:"法术",icon:"wzry-fashu"},{name:"防御",icon:"wzry-fangyu"},{name:"移动",icon:"wzry-yidong"},{name:"打野",icon:"wzry-daye"},{name:"游走",icon:"wzry-youzou"}],a=F(0),$=S(()=>["hero","heroDebris","skin","skinDebris","atlas"].includes(n.type)?D:C),m=S(()=>({hero:l.profession,heroDebris:d.profession,skin:p.profession,skinDebris:f.profession,atlas:u.profession,equip:y.category})[n.type]),P=e=>{({hero:()=>l.setProfessional(e),heroDebris:()=>d.setProfessional(e),skin:()=>p.setProfessional(e),skinDebris:()=>f.setProfessional(e),atlas:()=>u.setProfessional(e),equip:()=>y.setType(e)})[n.type](),window.innerWidth<960&&g(!0),_("change"),v()},j=e=>{const t=e.target;a.value=t.getBoundingClientRect().top-75};return A(m,e=>{e==="全部"&&(a.value=0)}),(e,t)=>(r(),E(W,{name:"to-left",appear:""},{default:H(()=>[o("div",{class:c(["filter-sidebar",{collapse:i(h)}])},[(r(!0),w(T,null,N($.value,(s,q)=>b((r(),w("div",{key:q,class:c(["filter-type",{active:s.name===m.value}]),onClick:x=>(P(s.name),j(x))},[o("i",{class:c(["iconfont",s.icon])},null,2),o("span",ee,I(e.$t(s.name)),1)],10,Z)),[[i(K),{text:"分类："+s.name}]])),128)),b(o("div",{class:"slider",style:O({top:a.value+"px"})},null,4),[[R,!i(h)]])],2)]),_:1}))}}),ae=Y(se,[["__scopeId","data-v-ddcaf104"]]);export{ae as F};
