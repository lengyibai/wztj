import{l as I,M as F,u as e,C as l,D as v,G as n,H as z,T as $,X as K,I as R,J as A,r as y,O as i,B as D,y as U,x as J,Q as V,U as O,P as H,W,F as q,L as Q,E as X}from"./wzry-wzry_vue-DkPlx3I4.js";import{s as E}from"./wzry-wzry_vuePlugin-5RpDEseb.js";import{S as j,aJ as Y,n as Z,o as ee,aF as te,t as se,aR as oe,aL as ae,q as B,aS as G,aM as N,aw as ne,y as ie,af as re,l as le,w as ce}from"./wzry-index-5kctYfwx.js";import{F as de,K as ue}from"./wzry-index-MHpLPLEG.js";import{S as pe}from"./wzry-index-y7OwuBvZ.js";import{F as me}from"./wzry-index-LNM-lj0e.js";import{L as _e}from"./wzry-index-wSjEMVGl.js";/* empty css                                                                   */import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-yzdeeZVO.js";const ve=m=>(R("data-v-32c0b387"),m=m(),A(),m),he={class:"skin-card"},ke=["src"],fe=["src"],Se={class:"price"},ye={key:0,class:"coupon"},ge={class:"bottom"},Te=["innerHTML"],be=["innerHTML"],we=ve(()=>n("i",{class:"iconfont wzry-fangda"},null,-1)),Le=I({__name:"index",props:{data:{}},emits:["view"],setup(m,{emit:c}){const h=m,k=c,a=j(),g=t=>t&&!isNaN(Number(t)),_=t=>{const d=h.data.id;ae(d,"SKIN")&&k("view",t,d)};return(t,d)=>F((l(),v("div",he,[n("div",{class:z(["bg-box",{have:e(a).skin_list.includes(t.data.id)}])},[F(n("img",{class:"bg",src:t.data.posterBlur},null,8,ke),[[e(se),{img:t.data.cover}]])],2),t.data.link?(l(),v("img",{key:0,class:"type",src:t.data.link},null,8,fe)):$("",!0),n("div",Se,[g(t.data.price)?(l(),v("div",ye)):$("",!0),F(n("span",null,null,512),[[e(oe),{num:t.data.price,duration:2e3}]])]),n("div",ge,[n("div",{class:"name",innerHTML:t.data.name},null,8,Te),n("div",{class:"mark",innerHTML:`——${t.data.heroName}`},null,8,be)]),n("div",{class:"tool"},[n("span",{onClick:_},[we,K(" 查看详情 ")])])])),[[e(Y)],[e(Z),{disabled:!e(a).skin_list.includes(t.data.id),text:e(a).skin_list.includes(t.data.id)?e(ee).mv02:e(te)("a20t",{v:"皮肤"})}]])}}),Ne=B(Le,[["__scopeId","data-v-32c0b387"]]),$e={class:"skin-toolbar"},Ce={class:"filter-select"},Me=I({__name:"index",emits:["change"],setup(m,{expose:c,emit:h}){const k=h,a=G(),{price_type:g,skin_type:_,skin_type_list:t,same_name:d,same_name_list:f,have_type:S}=E(a),T=["全部价格","免费","由低到高","由高到低"],b=["全部英雄","未拥有","已拥有"],u=y(""),r=()=>{u.value="",k("change")},C=o=>{a.sortPrice(T[o]),r()},M=o=>{a.filterSkinType(t.value[o]),r()},w=o=>{a.filterSameName(f.value[o]),r()},x=o=>{a.haveType(b[o]),r()},s=o=>{a.filterGender(o),r()},p=()=>{a.searchSkin(u.value),k("change")};return c({_clearName:r}),(o,L)=>(l(),v("div",$e,[n("div",Ce,[i(N,{options:T,"sort-text":e(g),onSelect:C},null,8,["sort-text"]),i(N,{options:e(t),"sort-text":e(_),"list-height":"31.25rem","min-width":"8.5rem",onSelect:M},null,8,["options","sort-text"]),i(N,{options:e(f),"sort-text":e(d),onSelect:w},null,8,["options","sort-text"]),i(N,{"sort-text":e(S),options:b,onSelect:x},null,8,["sort-text"])]),i(de,{onChange:s}),i(pe,{modelValue:u.value,"onUpdate:modelValue":L[0]||(L[0]=P=>u.value=P),onChange:p},null,8,["modelValue"])]))}}),xe=B(Me,[["__scopeId","data-v-0845d513"]]),Fe={class:"skin"},Ve={class:"skin-main"},Ie=I({name:"Skin",__name:"index",setup(m){const c=G(),{scroll:h,finish:k,show_list:a,loading:g}=E(c),{playAudio:_}=le(),t=[[2e3,4],[1600,3],[1400,2],[720,1]],d=y(),f=y(),S=y(0),T=y(!1),b=y(!1);c.getSkin();const u=()=>{const s=document.documentElement.clientWidth;s>=2e3&&(S.value=4);for(const[p,o]of t)s<p&&(S.value=o)},r=ne(s=>{c.setScroll(s),b.value=s>250},250),C=()=>{var s;r(0),(s=d.value)==null||s._clearName()},M=(s,p)=>{ce({id:p,parent:s.target,type:"SKIN"}),_("u4c5")},w=()=>{_("n4r4")},x=()=>{var s;(s=f.value)==null||s._setPosition(0,!0)};return D(async()=>{await ie(250),T.value=!0}),U(()=>{var s;u(),window.addEventListener("resize",u),_("gz43"),(s=f.value)==null||s._setPosition(h.value)}),J(()=>{window.removeEventListener("resize",u)}),(s,p)=>(l(),v("div",Fe,[n("div",Ve,[i(O,{name:"to-bottom",appear:""},{default:V(()=>[i(xe,{ref_key:"skinToolbarRef",ref:d,onChange:p[0]||(p[0]=o=>e(r)(0))},null,512)]),_:1}),i(e(ue),{active:b.value,onBackTop:x},null,8,["active"]),e(a).length&&T.value?(l(),H(e(_e),{key:0,ref_key:"skinListRef",ref:f,finish:e(k),gap:"1rem",loading:e(g),count:S.value,"scroll-top":e(h),onLoadMore:e(c).loadMore,onScroll:e(r)},{default:V(()=>[i(W,{name:"skin-card",appear:""},{default:V(()=>[(l(!0),v(q,null,X(e(a),(o,L)=>(l(),v("div",{key:o.id,style:Q({"transition-delay":L%(S.value*2)*.1+"s"}),onMouseenter:w,onTouchstart:w},[i(Ne,{data:o,onView:M},null,8,["data"])],36))),128))]),_:1})]),_:1},8,["finish","loading","count","scroll-top","onLoadMore","onScroll"])):$("",!0),e(a).length===0?(l(),H(e(re),{key:1,tip:"你还没有拥有皮肤"})):$("",!0)]),i(e(me),{type:"skin",onChange:C})]))}}),Oe=B(Ie,[["__scopeId","data-v-8f27ea2a"]]);export{Oe as default};
