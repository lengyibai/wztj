import{l as x,O as k,u as e,E as c,F as v,I as a,U as w,R as N,S as E,Z as Q,r as _,a as Y,Q as r,w as z,y as W,W as Z,Y as J,G as X,N as ee,H as oe,V as M}from"./wzry-wzry_vue-Lqzt6jH9.js";import{s as V,e as se,u as te}from"./wzry-wzry_vuePlugin-oPsogQAT.js";import{aH as ae,y as re,m as K,s as ne,G as ie,H as ce,p as B,bu as A,aM as le,aw as $,aK as ue,n as de,aL as pe,Q as me,aN as _e,x as he,ae as fe,k as ve,j as O,aj as G,aa as F,ak as ge}from"./wzry-index-G5nCmP-f.js";import{v as be}from"./wzry-sweep-light-5lryGx6M.js";import"./wzry-wzry_pinyin_pro-OgjkpRkC.js";import{F as Se,K as ke}from"./wzry-index-i-NitWOV.js";import{u as Ee}from"./wzry-useChangeListLineNum-tuOWmXyo.js";import{F as Te}from"./wzry-index-X3bJBRWw.js";import{L as Re}from"./wzry-index-ro5c8dgf.js";/* empty css                                                                   */import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-7NB47TbP.js";import"./wzry-wzry_vueuse-UANoZhwW.js";const ye={class:"hero-card"},He={class:"id"},Le={class:"select-mask"},Ne=["src"],$e={class:"bottom"},xe=["innerHTML"],Be={class:"price"},Ie=["src"],Ce={class:"count"},De=x({__name:"index",props:{data:{}},emits:["exchange"],setup(I,{emit:h}){const f=h,n=s=>{f("exchange",s)};return(s,u)=>k((c(),v("div",ye,[a("span",He,"No."+w(s.data.id),1),a("div",Le,[k((c(),N(e(re),{class:"k-button",type:"warning",onClick:u[0]||(u[0]=l=>n(s.data))},{default:E(()=>[Q(" 点击兑换 ")]),_:1})),[[e(K)]])]),k(a("img",{class:"bg",src:s.data.coverBlur},null,8,Ne),[[e(ne),{img:s.data.cover}]]),a("div",$e,[a("div",{class:"name",innerHTML:s.data.name},null,8,xe),a("div",Be,[a("img",{src:e(ie)(e(ce).ICON.HERO_DEBRIS),alt:"",class:"icon"},null,8,Ie),a("div",Ce,w(s.data.price),1)])])])),[[e(ae),{color:"#000"}],[e(be)]])}}),Pe=B(De,[["__scopeId","data-v-0308fb0c"]]),we={class:"hero-toolbar"},Me={class:"filter-select"},Oe=x({__name:"index",emits:["change"],setup(I,{expose:h,emit:f}){const n=f,s=A(),{price_type:u}=V(s),l=["全部价格","由低到高","由高到低"],d=_(""),T=Y([]);le().then(t=>{t.forEach(i=>{T.push({label:i.value,value:i.value})})});const p=()=>{d.value="",n("change")},R=t=>{s.sortPrice(l[t]),p()},y=t=>{s.filterGender(t),p()},g=$(()=>{s.searchHero(d.value),n("change")},500);return h({_clearName:p}),(t,i)=>(c(),v("div",we,[a("div",Me,[r(e(ue),{options:l,"sort-text":e(u),onSelect:R},null,8,["sort-text"])]),r(e(Se),{onChange:y}),k(r(e(pe),{modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=b=>d.value=b),required:!1,class:"k-input",placeholder:"英雄/字母","no-special":!1,onInput:e(g)},null,8,["modelValue","onInput"]),[[e(K),{text:e(de).kb43,type:"INPUT"}]])]))}}),Ge=B(Oe,[["__scopeId","data-v-0ea70d4e"]]),Fe={class:"hero"},Ve={class:"hero__main"},Ke=x({name:"HeroDebrisShop",__name:"index",setup(I){const h=se(),f=te(),n=me(),s=A(),{scroll:u,show_list:l,finish:d,loading:T}=V(s),{playAudio:p}=ve(),{page_count:R}=_e(),{line_num:y}=Ee(9,[[2200,8],[1800,7],[1600,6],[1400,5],[1024,4],[720,3],[480,2]]),g=_(),t=_(),i=_(!1),b=_(!1),C=_(!1);s.getHeroList();const S=$(()=>{p("n4r4")},100),H=$(o=>{s.setScroll(o),C.value=o>250},250),U=()=>{var o;(o=t.value)==null||o._setPosition(0,!0)},j=()=>{var o;H(0),(o=g.value)==null||o._clearName()},q=o=>{n.articles.HERO_DEBRIS>=Number(o.price)?O({text:G("r36m",{name:o.name,prop:F.HERO_DEBRIS,count:o.price}),confirm(){n.setGamePropNum("HERO_DEBRIS",Number(o.price),"SUB").then(()=>{n.addHero(o.id)})}}):O({text:G("p89n",{prop:F.HERO_DEBRIS}),confirm(){f.push(ge.HERO_LOTTERY)}})};return z(()=>h.query,o=>{o.id?setTimeout(()=>{i.value=!0},100):i.value=!1},{immediate:!0}),W(async()=>{var o;p("h3w0"),(o=t.value)==null||o._setPosition(u.value),await he(250),b.value=!0}),(o,m)=>(c(),v("div",Fe,[a("div",Ve,[r(Z,{name:"to-bottom",appear:""},{default:E(()=>[r(Ge,{ref_key:"heroToolbarRef",ref:g,onChange:m[0]||(m[0]=D=>e(H)(0))},null,512)]),_:1}),r(e(ke),{active:C.value,onBackTop:U},null,8,["active"]),e(l).length&&b.value?(c(),N(e(Re),{key:0,ref_key:"heroListRef",ref:t,finish:e(d),loading:e(T),gap:"1rem",count:e(y),onScroll:e(H),onLoadMore:e(s).loadMore},{default:E(()=>[r(J,{name:"card",appear:""},{default:E(()=>[(c(!0),v(X,null,oe(e(l),(D,P)=>(c(),v("div",{key:P,class:"hero-card",style:ee({"transition-delay":P%e(R)*.025+"s"}),onMouseenter:m[1]||(m[1]=(...L)=>e(S)&&e(S)(...L)),"on@touchstart":m[2]||(m[2]=(...L)=>e(S)&&e(S)(...L))},[r(Pe,{data:D,onExchange:q},null,8,["data"])],36))),128))]),_:1})]),_:1},8,["finish","loading","count","onScroll","onLoadMore"])):M("",!0),e(l).length===0?(c(),N(e(fe),{key:1,tip:"暂无可兑换英雄"})):M("",!0)]),r(e(Te),{type:"heroDebris",onChange:j})]))}}),ao=B(Ke,[["__scopeId","data-v-ced66639"]]);export{ao as default};
