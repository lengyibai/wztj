import{l as R,O as k,u as s,E as t,F as l,I as a,V as h,R as v,S as c,Z as x,r as f,j as A,y as b,Q as r,W as y,Y as B,G as E,N as Y,H as w}from"./wzry-wzry_vue-Lqzt6jH9.js";import{u as K}from"./wzry-wzry_vuePlugin-oPsogQAT.js";import{aH as M,s as G,y as I,m as V,p as $,Y as P,x as j,ad as F,k as U,bt as z,j as T,ai as N,a9 as S,aj as D}from"./wzry-index-xxcMHwI4.js";import"./wzry-wzry_pinyin_pro-OgjkpRkC.js";import{L as Q}from"./wzry-index-nNH7qz17.js";import{u as W}from"./wzry-useChangeListLineNum-uS-uifqB.js";import{K as Z}from"./wzry-index-nYWPDXli.js";/* empty css                                                                   */import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-7NB47TbP.js";import"./wzry-wzry_vueuse-2_kuf88O.js";import"./wzry-index-85zJ5irc.js";const q={class:"skin-card"},J=["src"],X=["src"],ee={class:"bottom"},se=["innerHTML"],te=["innerHTML"],ae={class:"tool"},ne=R({__name:"index",props:{data:{}},emits:["exchange"],setup(C,{emit:u}){const n=u,p=(e,o)=>{n("exchange",e,o)};return(e,o)=>k((t(),l("div",q,[k(a("img",{class:"bg",src:e.data.posterBlur},null,8,J),[[s(G),{img:e.data.cover}]]),e.data.link?(t(),l("img",{key:0,class:"type",src:e.data.link},null,8,X)):h("",!0),a("div",ee,[a("div",{class:"name",innerHTML:e.data.name},null,8,se),a("div",{class:"mark",innerHTML:`——${e.data.heroName}`},null,8,te)]),a("div",ae,[k((t(),v(s(I),{type:"warning",class:"k-button",onClick:o[0]||(o[0]=d=>p(d,e.data))},{default:c(()=>[x(" 点击兑换 ")]),_:1})),[[s(V)]])])])),[[s(M)]])}}),oe=$(ne,[["__scopeId","data-v-dfe4457b"]]),ie={class:"skin"},re={class:"skin-main"},ce={class:"tool-bar"},le=R({name:"HonorCrystal",__name:"index",setup(C){const u=K(),n=P(),{playAudio:p}=U(),{line_num:e}=W(5,[[2400,5],[2e3,4],[1600,3],[1400,2],[720,1]]),o=f(),d=f(!1),L=f([]),_=A(()=>L.value.filter(i=>i.type===26&&!n.skin_list.includes(i.id)));(async()=>{L.value=await z()})();const H=(i,m)=>{n.articles.HONOR_CRYSTAL>0?T({text:N("r36m",{name:`${m.heroName}-${m.name}`,prop:S.KING_CRYSTAL,count:1}),confirm(){n.setGamePropNum("HONOR_CRYSTAL",1,"SUB").then(()=>{n.addSkin(m.id,i)})}}):T({text:N("p89n",{prop:S.HONOR_CRYSTAL}),confirm(){u.push(D.SKIN_LOTTERY)}})};return b(async()=>{p("h3w0"),await j(250),d.value=!0}),(i,m)=>(t(),l("div",ie,[a("div",re,[r(y,{name:"to-bottom",appear:""},{default:c(()=>[a("div",ce,[r(s(Z),{"prop-key":"HONOR_CRYSTAL",height:"3rem","margin-right":"1rem"})])]),_:1}),r(y,{name:"card-list"},{default:c(()=>[_.value.length&&d.value?(t(),v(s(Q),{key:0,ref_key:"skinListRef",ref:o,gap:"1rem",count:s(e),"load-more":!1},{default:c(()=>[r(B,{name:"skin-card",appear:""},{default:c(()=>[(t(!0),l(E,null,w(_.value,(g,O)=>(t(),l("div",{key:g.id,class:"skin-card",style:Y({"transition-delay":O%(s(e)*2)*.1+"s"})},[r(oe,{data:g,onExchange:H},null,8,["data"])],4))),128))]),_:1})]),_:1},8,["count"])):h("",!0)]),_:1}),_.value.length===0?(t(),v(s(F),{key:0,tip:"暂无可兑换皮肤"})):h("",!0)])]))}}),Re=$(le,[["__scopeId","data-v-628d4d03"]]);export{Re as default};
