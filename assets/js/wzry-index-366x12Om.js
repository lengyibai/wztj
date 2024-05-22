import{l as B,r as g,j as z,M as N,u as e,C as h,D as T,H as m,S as D,T as V,X as ee,G as te,O as a,a as oe,B as se,y as ae,x as ne,Q as P,U as re,P as K,W as ie,F as le,L as ce,E as de}from"./wzry-wzry_vue-ZP7q88Pe.js";import{s as R}from"./wzry-wzry_vuePlugin-8reJzXjy.js";import{U as pe,aL as F,aM as ue,n as A,o as U,aG as me,h as he,t as ve,aN as _e,aO as fe,q as G,ay as j,aP as y,aQ as ye,aR as ge,aS as Te,z as xe,ag as be,l as Se,aT as ke}from"./wzry-index-O-tmU9-f.js";import{v as we}from"./wzry-sweep-light-5lryGx6M.js";import{F as Le,K as Ce}from"./wzry-index-JMl6VVSm.js";import{F as $e}from"./wzry-index-jh5mX5FK.js";import{L as Me}from"./wzry-index-2j2SS27Y.js";/* empty css                                                                   */import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-x0daaVag.js";const He={mounted(p){const n=document.createElement("div"),r=document.createElement("div");n.innerHTML=p.innerHTML,n.style.cssText=`
      z-index: 9;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      background-color: #000;
      transition: all 0.35s;
      text-shadow: initial;
      -webkit-background-clip: text;
      clip-path: circle(75% at 50% 50%);
    `;const d=p.offsetHeight/8;r.style.cssText=`
      z-index: 9;
      position: absolute;
      width: 0%;
      height: ${d/16}rem;
      bottom: 0;
      color: transparent;
      background-color: #2980b9;
      transition: all 0.35s;
      left: 50%;
      transform: translate(-50%,5px);
      border-radius: ${d/16}rem;
    `,p.appendChild(n),p.appendChild(r),p.addEventListener("mouseenter",()=>{n.style.clipPath="circle(0% at 50% 50%)",r.style.width="100%"}),p.addEventListener("mouseleave",()=>{n.style.clipPath="circle(75% at 50% 50%)",r.style.width="0%"})}},Ee={class:"hero-card"},Ne={class:"id"},Pe={key:0,class:"num"},Ve={class:"select-mask"},Be=["src"],Fe=["src"],Ge={class:"bottom"},Ie=["innerHTML"],ze=B({__name:"index",props:{data:{}},emits:["view"],setup(p,{emit:n}){const r=pe(),d=n,i=F(),x=g(!1),_=z(()=>i.misc_sort),L=z(()=>["身高","皮肤数量","关系数量"].includes(_.value)),C=t=>{const l=_.value;return{身高:t.height+"cm",皮肤数量:(t.skinCount||0)+"款",关系数量:(t.relationCount||0)+"位"}[l]||""},f=t=>{fe(t)&&d("view",t)};return(t,l)=>{var u;return N((h(),T("div",Ee,[m("span",Ne,"No."+D(t.data.id),1),L.value?(h(),T("span",Pe,D(C(t.data)),1)):V("",!0),m("div",Ve,[m("img",{src:x.value?t.data.avatar:e(he)("unknown"),class:"head",onClick:l[0]||(l[0]=v=>f(t.data.id)),onLoad:l[1]||(l[1]=v=>x.value=!0)},null,40,Be),N((h(),T("button",{class:"view",onClick:l[2]||(l[2]=v=>f(t.data.id))},[ee("点击此处")])),[[e(He)]])]),m("div",{class:te(["bg-box",{have:e(r).hero_list[t.data.id]}])},[N(m("img",{class:"bg",src:t.data.coverBlur},null,8,Fe),[[e(ve),{img:t.data.cover}]])],2),m("div",Ge,[m("div",{class:"name",innerHTML:t.data.name},null,8,Ie),a(e(_e),{class:"hero-exp",exp:(u=e(r).hero_list[t.data.id])==null?void 0:u.exp},null,8,["exp"])])])),[[e(ue),{color:"#000"}],[e(we),{enable:!!e(r).hero_list[t.data.id]}],[e(A),{disabled:!e(r).hero_list[t.data.id],text:e(r).hero_list[t.data.id]?e(U).kr17:e(me)("a20t",{v:"英雄"})}]])}}}),De=G(ze,[["__scopeId","data-v-b49074ae"]]),Ke={class:"hero-toolbar"},Re={class:"filter-select"},Ae=B({__name:"index",emits:["change"],setup(p,{expose:n,emit:r}){const d=r,i=F(),{sort_type:x,attr_type:_,camp_type:L,misc_type:C,misc_sort:f,have_type:t,exp_type:l}=R(i),u=["全部属性","非硬控","免控","回血","真伤"],v=["全部筛选","团控","无蓝条","非人类","多套技能"],b=["全部排序","身高","上手难度","皮肤数量","关系数量"],S=["全部英雄","未拥有","已拥有"],$=["全部熟练度","由低到高","由高到低"],H=["正序","倒序"],k=g(""),M=oe([]);(async()=>{(await ge()).forEach(s=>{M.push(s.value)})})();const c=()=>{k.value="",d("change")},w=s=>{i.filterCamp(M[s]),c()},E=s=>{i.filterAttr(u[s]),c()},O=s=>{i.filterMisc(v[s]),c()},q=s=>{i.sortMisc(b[s]),c()},Q=s=>{i.haveType(S[s]),c()},W=s=>{i.expType($[s]),c()},X=s=>{i.sortType(H[s]),c()},J=s=>{i.filterGender(s),c()},Y=j(()=>{i.searchHero(k.value),d("change")},500);return n({_clearName:c}),(s,I)=>(h(),T("div",Ke,[m("div",Re,[a(e(y),{"min-width":"9.6106rem","sort-text":e(L),options:M,"list-height":"26.5625rem",onSelect:w},null,8,["sort-text","options"]),a(e(y),{"sort-text":e(_),options:u,onSelect:E},null,8,["sort-text"]),a(e(y),{"sort-text":e(C),options:v,onSelect:O},null,8,["sort-text"]),a(e(y),{"sort-text":e(f),options:b,onSelect:q},null,8,["sort-text"]),a(e(y),{"sort-text":e(l),options:$,onSelect:W},null,8,["sort-text"]),a(e(y),{"sort-text":e(t),options:S,onSelect:Q},null,8,["sort-text"]),a(e(y),{"sort-text":e(x),options:H,onSelect:X},null,8,["sort-text"])]),a(e(Le),{onChange:J}),N(a(e(ye),{modelValue:k.value,"onUpdate:modelValue":I[0]||(I[0]=Z=>k.value=Z),required:!1,class:"k-input",placeholder:"英雄/字母","no-special":!1,onInput:e(Y)},null,8,["modelValue","onInput"]),[[e(A),{text:e(U).kb43,type:"INPUT"}]])]))}}),Ue=G(Ae,[["__scopeId","data-v-32fccdc4"]]),je={class:"hero"},Oe={class:"hero-main"},qe=B({name:"Hero",__name:"index",setup(p){const n=F(),{scroll:r,show_list:d,finish:i,loading:x}=R(n),{playAudio:_}=Se(),{page_count:L}=Te(),C=[[2200,8],[1800,7],[1600,6],[1400,5],[1024,4],[720,3],[480,2]],f=g(),t=g(),l=g(0),u=g(!1),v=g(!1);n.getHeroList();const b=()=>{const o=window.innerWidth;o>=2200&&(l.value=9);for(const[c,w]of C)o<c&&(l.value=w)},S=j(o=>{n.setScroll(o),v.value=o>250},250),$=()=>{_("n4r4")},H=o=>{ke(o)},k=()=>{var o;(o=t.value)==null||o._setPosition(0,!0)},M=()=>{var o;S(0),(o=f.value)==null||o._clearName()};return se(async()=>{await xe(250),u.value=!0}),ae(()=>{var o;b(),window.addEventListener("resize",b),_("iv51"),(o=t.value)==null||o._setPosition(r.value)}),ne(()=>{window.removeEventListener("resize",b)}),(o,c)=>(h(),T("div",je,[m("div",Oe,[a(re,{name:"to-bottom",appear:""},{default:P(()=>[a(Ue,{ref_key:"heroToolbarRef",ref:f,onChange:c[0]||(c[0]=w=>e(S)(0))},null,512)]),_:1}),a(e(Ce),{active:v.value,onBackTop:k},null,8,["active"]),e(d).length&&u.value?(h(),K(e(Me),{key:0,ref_key:"heroListRef",ref:t,finish:e(i),loading:e(x),gap:"1rem",count:l.value,onScroll:e(S),onLoadMore:e(n).loadMore},{default:P(()=>[a(ie,{name:"card",appear:""},{default:P(()=>[(h(!0),T(le,null,de(e(d),(w,E)=>(h(),T("div",{key:E,style:ce({"transition-delay":E%e(L)*.025+"s"}),onMouseenter:$,onTouchstart:$},[a(De,{data:w,onView:H},null,8,["data"])],36))),128))]),_:1})]),_:1},8,["finish","loading","count","onScroll","onLoadMore"])):V("",!0),e(d).length===0?(h(),K(e(be),{key:1,tip:"你还没有拥有英雄"})):V("",!0)]),a(e($e),{type:"hero",onChange:M})]))}}),rt=G(qe,[["__scopeId","data-v-71ca9d50"]]);export{rt as default};
