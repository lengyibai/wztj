import{l as M,O as $,u as e,E as r,F as h,I as n,J as z,V as L,Z as D,K as J,L as O,r as b,Q as i,w as Q,n as K,y as U,S as H,W as P,G as W,N as Y,H as Z,R as A}from"./wzry-wzry_vue-Lqzt6jH9.js";import{s as R}from"./wzry-wzry_vuePlugin-oPsogQAT.js";import{Y as j,aH as q,m as X,n as ee,aD as te,s as se,aP as ae,aJ as oe,p as B,aQ as E,aK as C,aC as ne,x as ie,ad as le,k as re,t as ce}from"./wzry-index-nFnvAaS0.js";import{F as de,K as ue}from"./wzry-index-c26lRIVZ.js";import{S as pe}from"./wzry-index-bvio9iUa.js";import{u as me}from"./wzry-useChangeListLineNum-QOgqtKJa.js";import{L as _e,v as ve}from"./wzry-index-MJ_Nz_tf.js";import"./wzry-wzry_pinyin_pro-OgjkpRkC.js";import{F as he}from"./wzry-index-d_Va7-UC.js";/* empty css                                                                   */import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-7NB47TbP.js";import"./wzry-wzry_vueuse-x4ay2o2y.js";const ke=c=>(J("data-v-32c0b387"),c=c(),O(),c),fe={class:"skin-card"},Se=["src"],ye=["src"],ge={class:"price"},be={key:0,class:"coupon"},Te={class:"bottom"},Ne=["innerHTML"],we=["innerHTML"],Ce=ke(()=>n("i",{class:"iconfont wzry-fangda"},null,-1)),$e=M({__name:"index",props:{data:{}},emits:["view"],setup(c,{emit:k}){const d=c,m=k,o=j(),f=t=>t&&!isNaN(Number(t)),S=t=>{const u=d.data.id;oe(u,"SKIN")&&m("view",t,u)};return(t,u)=>$((r(),h("div",fe,[n("div",{class:z(["bg-box",{have:e(o).skin_list.includes(t.data.id)}])},[$(n("img",{class:"bg",src:t.data.posterBlur},null,8,Se),[[e(se),{img:t.data.cover}]])],2),t.data.link?(r(),h("img",{key:0,class:"type",src:t.data.link},null,8,ye)):L("",!0),n("div",ge,[f(t.data.price)?(r(),h("div",be)):L("",!0),$(n("span",null,null,512),[[e(ae),{num:t.data.price,duration:2e3}]])]),n("div",Te,[n("div",{class:"name",innerHTML:t.data.name},null,8,Ne),n("div",{class:"mark",innerHTML:`——${t.data.heroName}`},null,8,we)]),n("div",{class:"tool"},[n("span",{onClick:S},[Ce,D(" 查看详情 ")])])])),[[e(q)],[e(X),{disabled:!e(o).skin_list.includes(t.data.id),text:e(o).skin_list.includes(t.data.id)?e(ee).mv02:e(te)("a20t",{v:"皮肤"})}]])}}),Le=B($e,[["__scopeId","data-v-32c0b387"]]),Ve={class:"skin-toolbar"},xe={class:"filter-select"},Fe=M({__name:"index",emits:["change"],setup(c,{expose:k,emit:d}){const m=d,o=E(),{price_type:f,skin_type:S,skin_type_list:t,same_name:u,same_name_list:y,have_type:_}=R(o),p=["全部价格","免费","由低到高","由高到低"],g=["全部皮肤","未拥有","已拥有"],v=b(""),l=()=>{v.value="",m("change")},V=a=>{o.sortPrice(p[a]),l()},x=a=>{o.filterSkinType(t.value[a]),l()},F=a=>{o.filterSameName(y.value[a]),l()},T=a=>{o.haveType(g[a]),l()},I=a=>{o.filterGender(a),l()},s=()=>{o.searchSkin(v.value),m("change")};return k({_clearName:l}),(a,N)=>(r(),h("div",Ve,[n("div",xe,[i(C,{options:p,"sort-text":e(f),onSelect:V},null,8,["sort-text"]),i(C,{options:e(t),"sort-text":e(S),"list-height":"31.25rem","min-width":"8.5rem",onSelect:x},null,8,["options","sort-text"]),i(C,{options:e(y),"sort-text":e(u),onSelect:F},null,8,["options","sort-text"]),i(C,{"sort-text":e(_),options:g,onSelect:T},null,8,["sort-text"])]),i(de,{onChange:I}),i(pe,{modelValue:v.value,"onUpdate:modelValue":N[0]||(N[0]=w=>v.value=w),onChange:s},null,8,["modelValue"])]))}}),Ie=B(Fe,[["__scopeId","data-v-2979bea6"]]),He={class:"skin"},Me={class:"skin-main"},Be=M({name:"Skin",__name:"index",props:{visible:{type:Boolean}},setup(c){const k=c,d=E(),{scroll:m,show_list:o,finish:f,loading:S}=R(d),{playAudio:t}=re(),{line_num:u}=me(4,[[2e3,4],[1600,3],[1400,2],[720,1]]),y=b(),_=b(),p=b(!1),g=b(!1);d.getSkin();const v=ne(s=>{d.setScroll(s),g.value=s>250},250),l=()=>{v(0),p.value=!1,K(()=>{p.value=!0})},V=()=>{var s;l(),(s=y.value)==null||s._clearName()},x=()=>{d.loadMore().then(()=>{var s;(s=_.value)==null||s._updateStatus()})},F=(s,a)=>{ce({id:a,parent:s.target,type:"SKIN"}),t("u4c5")},T=()=>{t("n4r4")},I=()=>{var s;(s=_.value)==null||s._setPosition(0,!1)};return Q(()=>k.visible,s=>{p.value=s,K(()=>{var a;(a=_.value)==null||a._setPosition(m.value)})}),U(async()=>{var s;t("gz43"),(s=_.value)==null||s._setPosition(m.value),await ie(250),p.value=!0}),(s,a)=>(r(),h("div",He,[n("div",Me,[i(P,{name:"to-bottom",appear:""},{default:H(()=>[i(Ie,{ref_key:"skinToolbarRef",ref:y,onChange:l},null,512)]),_:1}),i(e(ue),{active:g.value,onBackTop:I},null,8,["active"]),i(P,{name:"fade"},{default:H(()=>[e(o).length&&p.value?(r(),A(e(_e),{key:0,ref_key:"libVirtualListRef",ref:_,data:e(o),"column-count":e(u),loading:e(S),finish:e(f),onScroll:e(v),onLoadMore:x},{default:H(({data:N})=>[(r(!0),h(W,null,Z(N,(w,G)=>$((r(),h("div",{key:w.id,style:Y({"transition-delay":G%(e(u)*2)*.1+"s"}),onMouseenter:T,onTouchstart:T},[i(Le,{data:w,onView:F},null,8,["data"])],36)),[[e(ve)]])),128))]),_:1},8,["data","column-count","loading","finish","onScroll"])):L("",!0)]),_:1}),e(o).length===0?(r(),A(e(le),{key:0,tip:"你还没有拥有皮肤"})):L("",!0)]),i(e(he),{type:"skin",onChange:V})]))}}),je=B(Be,[["__scopeId","data-v-62aa95cf"]]);export{je as default};
