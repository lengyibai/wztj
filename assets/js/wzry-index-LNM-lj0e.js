import{l as B,r as F,j as S,w as A,C as r,P as E,Q as H,u as i,H as c,F as T,G as o,S as I,D as b,M as w,E as L,L as M,N,U as Q}from"./wzry-wzry_vue-DkPlx3I4.js";import{aI as V,aS as G,aV as R,a_ as U,by as W,bx as J,n as K,Q as O,l as X,q as Y}from"./wzry-index-5kctYfwx.js";const Z=["onClick"],ee={class:"name"},se=B({__name:"index",props:{type:{default:"hero"}},emits:["change"],setup(k,{emit:z}){const n=k,_=z,l=V(),p=G(),u=R(),y=U(),f=W(),h=J(),{playAudio:v}=X(),{collapse:d,setCollapse:D}=O(),g=[{name:"全部",icon:"wzry-quanbu"},{name:"坦克",icon:"wzry-tanke"},{name:"战士",icon:"wzry-zhanshi"},{name:"刺客",icon:"wzry-cike"},{name:"法师",icon:"wzry-fashi"},{name:"射手",icon:"wzry-sheshou"},{name:"辅助",icon:"wzry-fuzhu"}],C=[{name:"攻击",icon:"wzry-gongji"},{name:"法术",icon:"wzry-fashu"},{name:"防御",icon:"wzry-fangyu"},{name:"移动",icon:"wzry-yidong"},{name:"打野",icon:"wzry-daye"},{name:"游走",icon:"wzry-youzou"}],a=F(0),$=S(()=>["hero","heroDebris","skin","skinDebris","atlas"].includes(n.type)?g:C),m=S(()=>({hero:l.profession,heroDebris:h.profession,skin:p.profession,skinDebris:f.profession,atlas:u.profession,equip:y.category})[n.type]),q=e=>{({hero:()=>l.setProfessional(e),heroDebris:()=>h.setProfessional(e),skin:()=>p.setProfessional(e),skinDebris:()=>f.setProfessional(e),atlas:()=>u.setProfessional(e),equip:()=>y.setType(e)})[n.type](),window.innerWidth<960&&D(!0),_("change"),v()},x=e=>{const t=e.target;a.value=t.getBoundingClientRect().top-75};return A(m,e=>{e==="全部"&&(a.value=0)}),(e,t)=>(r(),E(Q,{name:"to-left",appear:""},{default:H(()=>[o("div",{class:c(["filter-sidebar",{collapse:i(d)}])},[(r(!0),b(T,null,L($.value,(s,P)=>w((r(),b("div",{key:P,class:c(["filter-type",{active:s.name===m.value}]),onClick:j=>(q(s.name),x(j))},[o("i",{class:c(["iconfont",s.icon])},null,2),o("span",ee,I(e.$t(s.name)),1)],10,Z)),[[i(K),{text:"分类："+s.name}]])),128)),w(o("div",{class:"slider",style:M({top:a.value+"px"})},null,4),[[N,!i(d)]])],2)]),_:1}))}}),ae=Y(se,[["__scopeId","data-v-89342ab0"]]);export{ae as F};
