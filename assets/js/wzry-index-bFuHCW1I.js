import{l as C,M as b,u as e,C as c,D as k,G as r,T as $,P as R,Q as N,X as z,r as f,O as n,y as q,x as Q,U as w,F as W,L as X,E as Y,n as j}from"./wzry-wzry_vue-DkPlx3I4.js";import{s as A,u as J}from"./wzry-wzry_vuePlugin-5RpDEseb.js";import{aK as Z,t as ee,H as te,I as se,aS as ae,z as ne,n as G,q as D,bz as O,ax as H,aN as B,o as oe,aO as ie,S as re,y as le,af as ce,l as ue,k as F,ak as M,ab as V,al as de}from"./wzry-index-pNmeyW9R.js";import{F as me,K as _e}from"./wzry-index-R0JQUjUB.js";import{F as pe}from"./wzry-index-fVUCMPYe.js";/* empty css                                                                   */import{L as ve}from"./wzry-index-QAhKsxQW.js";import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-yzdeeZVO.js";const fe={class:"skin-card"},ke=["src"],he=["src"],Se={class:"price"},be=["src"],Te={class:"bottom"},ge=["innerHTML"],ye=["innerHTML"],Ne={class:"tool"},xe=C({__name:"index",props:{data:{}},emits:["exchange"],setup(K,{emit:h}){const m=h,u=(s,o)=>{m("exchange",s,o)};return(s,o)=>b((c(),k("div",fe,[b(r("img",{class:"bg",src:s.data.posterBlur},null,8,ke),[[e(ee),{img:s.data.cover}]]),s.data.link?(c(),k("img",{key:0,class:"type",src:s.data.link},null,8,he)):$("",!0),r("div",Se,[r("img",{src:e(te)(e(se).ICON.SKIN_DEBRIS),alt:"",class:"icon"},null,8,be),b(r("span",null,null,512),[[e(ae),{num:s.data.debris,duration:2e3}]])]),r("div",Te,[r("div",{class:"name",innerHTML:s.data.name},null,8,ge),r("div",{class:"mark",innerHTML:`——${s.data.heroName}`},null,8,ye)]),r("div",Ne,[b((c(),R(e(ne),{type:"warning",class:"k-button",onClick:o[0]||(o[0]=v=>u(v,s.data))},{default:N(()=>[z(" 点击兑换 ")]),_:1})),[[e(G)]])])])),[[e(Z)]])}}),Ie=D(xe,[["__scopeId","data-v-db9234ab"]]),Ee={class:"skin-toolbar"},Le={class:"filter-select"},Be=C({__name:"index",emits:["change"],setup(K,{expose:h,emit:m}){const u=m,s=O(),{price_type:o,skin_type_list:v,skin_type:x,same_name:T,same_name_list:_}=A(s),p=["全部价格","由低到高","由高到低"],l=f(""),d=()=>{l.value="",u("change")},S=i=>{s.sortPrice(p[i]),d()},g=i=>{s.filterSkinType(v.value[i]),d()},y=i=>{s.filterSameName(_.value[i]),d()},I=i=>{s.filterGender(i),d()},E=H(()=>{s.searchSkin(l.value),u("change")},500);return h({_clearName:d}),(i,t)=>(c(),k("div",Ee,[r("div",Le,[n(B,{options:p,"sort-text":e(o),onSelect:S},null,8,["sort-text"]),n(B,{options:e(v),"sort-text":e(x),"list-height":"31.25rem","min-width":"8.5rem",onSelect:g},null,8,["options","sort-text"]),n(B,{options:e(_),"sort-text":e(T),onSelect:y},null,8,["options","sort-text"])]),n(me,{onChange:I}),b(n(e(ie),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a),required:!1,class:"k-input",placeholder:"英雄/皮肤","no-special":!1,onInput:e(E)},null,8,["modelValue","onInput"]),[[e(G),{text:e(oe).kb43,type:"INPUT"}]])]))}}),$e=D(Be,[["__scopeId","data-v-8d93f374"]]),Re={class:"skin"},Ce={class:"skin-main"},De=C({name:"SkinDebrisShop",__name:"index",setup(K){const h=J(),m=re(),u=O(),{scroll:s,filter_list:o}=A(u),{playAudio:v}=ue(),x=[[2400,5],[2e3,4],[1600,3],[1400,2],[720,1]],T=f(),_=f(),p=f(0),l=f(!1),d=f(!1);u.getSkin();const S=()=>{const t=document.documentElement.clientWidth;t>=2400&&(p.value=6);for(const[a,L]of x)t<a&&(p.value=L)},g=H(t=>{u.setScroll(t),d.value=t>250},250),y=()=>{g(0),l.value=!1,j(()=>{l.value=!0})},I=()=>{var t;y(),(t=T.value)==null||t._clearName()},E=()=>{var t;(t=_.value)==null||t._setPosition(0,!1)},i=(t,a)=>{m.articles.SKIN_DEBRIS>=Number(a.debris)?F({text:M("r36m",{name:a.name,prop:V.SKIN_DEBRIS,count:a.debris}),confirm(){m.setGamePropNum("SKIN_DEBRIS",Number(a.debris),"SUB").then(()=>{m.addSkin(a.id,t)})}}):F({text:M("p89n",{prop:V.SKIN_DEBRIS}),confirm(){h.push(de.SKIN_LOTTERY)}})};return q(async()=>{var t,a;S(),v("h3w0"),window.addEventListener("resize",S),(t=_.value)==null||t._setPosition(s.value),(a=_.value)==null||a._updateStatus(),await le(250),l.value=!0}),Q(()=>{window.removeEventListener("resize",S)}),(t,a)=>(c(),k("div",Re,[r("div",Ce,[n(w,{name:"to-bottom",appear:""},{default:N(()=>[n($e,{ref_key:"skinToolbarRef",ref:T,onChange:y},null,512)]),_:1}),n(e(_e),{active:d.value,onBackTop:E},null,8,["active"]),n(w,{name:"card-list"},{default:N(()=>[e(o).length&&l.value?(c(),R(e(ve),{key:0,ref_key:"libVirtualListRef",ref:_,data:e(o),"column-count":p.value,onScroll:e(g)},{default:N(({data:L})=>[(c(!0),k(W,null,Y(L,(P,U)=>(c(),k("div",{key:P.id,class:"skin-card",style:X({"transition-delay":U%(p.value*2)*.1+"s"})},[n(Ie,{data:P,onExchange:i},null,8,["data"])],4))),128))]),_:1},8,["data","column-count","onScroll"])):$("",!0)]),_:1}),e(o).length===0?(c(),R(e(ce),{key:0,tip:"暂无可兑换皮肤"})):$("",!0)]),n(e(pe),{type:"skinDebris",onChange:I})]))}}),ze=D(De,[["__scopeId","data-v-01b33397"]]);export{ze as default};