import{l as K,M as g,u as e,C as c,D as f,H as r,T as R,P as D,Q as T,X as z,r as _,O as n,y as q,x as W,U as w,W as J,F as Q,L as X,E as Y}from"./wzry-wzry_vue-ZP7q88Pe.js";import{s as A,u as j}from"./wzry-wzry_vuePlugin-8reJzXjy.js";import{aK as Z,t as ee,I as te,J as se,aS as ne,H as oe,n as H,q as M,bz as O,ay as U,aN as B,o as ae,aO as ie,U as re,z as le,ag as ce,l as de,k as C,am as F,ac as G,an as ue}from"./wzry-index-ElDDcAYL.js";import{F as me,K as pe}from"./wzry-index-k51TisYV.js";import{F as _e}from"./wzry-index-0qdCK1_a.js";import{L as fe}from"./wzry-index-hhBLkNN2.js";/* empty css                                                                   */import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-x0daaVag.js";const ke={class:"skin-card"},ve=["src"],he=["src"],Se={class:"price"},be=["src"],ge={class:"bottom"},Te=["innerHTML"],ye=["innerHTML"],Ne={class:"tool"},Ie=K({__name:"index",props:{data:{}},emits:["exchange"],setup(P,{emit:k}){const p=k,l=(t,d)=>{p("exchange",t,d)};return(t,d)=>g((c(),f("div",ke,[g(r("img",{class:"bg",src:t.data.posterBlur},null,8,ve),[[e(ee),{img:t.data.cover}]]),t.data.link?(c(),f("img",{key:0,class:"type",src:t.data.link},null,8,he)):R("",!0),r("div",Se,[r("img",{src:e(te)(e(se).ICON.SKIN_DEBRIS),alt:"",class:"icon"},null,8,be),g(r("span",null,null,512),[[e(ne),{num:t.data.debris,duration:2e3}]])]),r("div",ge,[r("div",{class:"name",innerHTML:t.data.name},null,8,Te),r("div",{class:"mark",innerHTML:`——${t.data.heroName}`},null,8,ye)]),r("div",Ne,[g((c(),D(e(oe),{type:"warning",class:"k-button",onClick:d[0]||(d[0]=u=>l(u,t.data))},{default:T(()=>[z(" 点击兑换 ")]),_:1})),[[e(H)]])])])),[[e(Z)]])}}),xe=M(Ie,[["__scopeId","data-v-db9234ab"]]),Ee={class:"skin-toolbar"},Le={class:"filter-select"},$e=K({__name:"index",emits:["change"],setup(P,{expose:k,emit:p}){const l=p,t=O(),{price_type:d,skin_type_list:u,skin_type:E,same_name:L,same_name_list:y}=A(t),v=["全部价格","由低到高","由高到低"],m=_(""),o=()=>{m.value="",l("change")},N=a=>{t.sortPrice(v[a]),o()},I=a=>{t.filterSkinType(u.value[a]),o()},h=a=>{t.filterSameName(y.value[a]),o()},S=a=>{t.filterGender(a),o()},$=U(()=>{t.searchSkin(m.value),l("change")},500);return k({_clearName:o}),(a,x)=>(c(),f("div",Ee,[r("div",Le,[n(B,{options:v,"sort-text":e(d),onSelect:N},null,8,["sort-text"]),n(B,{options:e(u),"sort-text":e(E),"list-height":"31.25rem","min-width":"8.5rem",onSelect:I},null,8,["options","sort-text"]),n(B,{options:e(y),"sort-text":e(L),onSelect:h},null,8,["options","sort-text"])]),n(me,{onChange:S}),g(n(e(ie),{modelValue:m.value,"onUpdate:modelValue":x[0]||(x[0]=s=>m.value=s),required:!1,class:"k-input",placeholder:"英雄/皮肤","no-special":!1,onInput:e($)},null,8,["modelValue","onInput"]),[[e(H),{text:e(ae).kb43,type:"INPUT"}]])]))}}),Be=M($e,[["__scopeId","data-v-8d93f374"]]),Re={class:"skin"},De={class:"skin-main"},Ke=K({name:"SkinDebrisShop",__name:"index",setup(P){const k=j(),p=re(),l=O(),{scroll:t,finish:d,show_list:u,loading:E}=A(l),{playAudio:L}=de(),y=[[2400,5],[2e3,4],[1600,3],[1400,2],[720,1]],v=_(),m=_(),o=_(0),N=_(!1),I=_(!1);l.getSkin();const h=()=>{const s=document.documentElement.clientWidth;s>=2400&&(o.value=6);for(const[i,b]of y)s<i&&(o.value=b)},S=U(s=>{l.setScroll(s),I.value=s>250},250),$=()=>{var s;S(0),(s=v.value)==null||s._clearName()},a=()=>{var s;(s=m.value)==null||s._setPosition(0,!0)},x=(s,i)=>{p.articles.SKIN_DEBRIS>=Number(i.debris)?C({text:F("r36m",{name:i.name,prop:G.SKIN_DEBRIS,count:i.debris}),confirm(){p.setGamePropNum("SKIN_DEBRIS",Number(i.debris),"SUB").then(()=>{p.addSkin(i.id,s)})}}):C({text:F("p89n",{prop:G.SKIN_DEBRIS}),confirm(){k.push(ue.SKIN_LOTTERY)}})};return q(async()=>{var s;L("h3w0"),(s=m.value)==null||s._setPosition(t.value),h(),window.addEventListener("resize",h),await le(250),N.value=!0}),W(()=>{window.removeEventListener("resize",h)}),(s,i)=>(c(),f("div",Re,[r("div",De,[n(w,{name:"to-bottom",appear:""},{default:T(()=>[n(Be,{ref_key:"skinToolbarRef",ref:v,onChange:i[0]||(i[0]=b=>e(S)(0))},null,512)]),_:1}),n(e(pe),{active:I.value,onBackTop:a},null,8,["active"]),n(w,{name:"card-list"},{default:T(()=>[e(u).length&&N.value?(c(),D(e(fe),{key:0,ref_key:"skinListRef",ref:m,finish:e(d),gap:"1rem",loading:e(E),count:o.value,"scroll-top":e(t),onLoadMore:e(l).loadMore,onScroll:e(S)},{default:T(()=>[n(J,{name:"skin-card",appear:""},{default:T(()=>[(c(!0),f(Q,null,Y(e(u),(b,V)=>(c(),f("div",{key:b.id,class:"skin-card",style:X({"transition-delay":V%(o.value*2)*.1+"s"})},[n(xe,{data:b,onExchange:x},null,8,["data"])],4))),128))]),_:1})]),_:1},8,["finish","loading","count","scroll-top","onLoadMore","onScroll"])):R("",!0)]),_:1}),e(u).length===0?(c(),D(e(ce),{key:0,tip:"暂无可兑换皮肤"})):R("",!0)]),n(e(_e),{type:"skinDebris",onChange:$})]))}}),ze=M(Ke,[["__scopeId","data-v-e77a7f33"]]);export{ze as default};
