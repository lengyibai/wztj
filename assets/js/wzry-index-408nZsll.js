import{l as I,M as V,u as e,C as c,D as h,G as n,H as z,T as C,X as A,I as R,J as D,r as S,O as i,y as U,x as O,Q as F,U as B,F as q,E as J,P as E,n as Q}from"./wzry-wzry_vue-DkPlx3I4.js";import{s as K}from"./wzry-wzry_vuePlugin-5RpDEseb.js";import{S as W,aK as X,n as j,o as Y,aG as Z,t as ee,aS as te,aM as se,q as M,aT as P,aN as x,ax as ae,y as oe,af as ne,l as ie,w as re}from"./wzry-index-pNmeyW9R.js";import{F as le,K as ce}from"./wzry-index-R0JQUjUB.js";import{S as de}from"./wzry-index-GdPTuJkA.js";import{F as ue}from"./wzry-index-fVUCMPYe.js";/* empty css                                                                   */import{L as me}from"./wzry-index-QAhKsxQW.js";import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-yzdeeZVO.js";const pe=p=>(R("data-v-32c0b387"),p=p(),D(),p),_e={class:"skin-card"},ve=["src"],fe=["src"],he={class:"price"},ke={key:0,class:"coupon"},Se={class:"bottom"},ye=["innerHTML"],Te=["innerHTML"],ge=pe(()=>n("i",{class:"iconfont wzry-fangda"},null,-1)),be=I({__name:"index",props:{data:{}},emits:["view"],setup(p,{emit:_}){const y=p,d=_,a=W(),u=t=>t&&!isNaN(Number(t)),T=t=>{const r=y.data.id;se(r,"SKIN")&&d("view",t,r)};return(t,r)=>V((c(),h("div",_e,[n("div",{class:z(["bg-box",{have:e(a).skin_list.includes(t.data.id)}])},[V(n("img",{class:"bg",src:t.data.posterBlur},null,8,ve),[[e(ee),{img:t.data.cover}]])],2),t.data.link?(c(),h("img",{key:0,class:"type",src:t.data.link},null,8,fe)):C("",!0),n("div",he,[u(t.data.price)?(c(),h("div",ke)):C("",!0),V(n("span",null,null,512),[[e(te),{num:t.data.price,duration:2e3}]])]),n("div",Se,[n("div",{class:"name",innerHTML:t.data.name},null,8,ye),n("div",{class:"mark",innerHTML:`——${t.data.heroName}`},null,8,Te)]),n("div",{class:"tool"},[n("span",{onClick:T},[ge,A(" 查看详情 ")])])])),[[e(X)],[e(j),{disabled:!e(a).skin_list.includes(t.data.id),text:e(a).skin_list.includes(t.data.id)?e(Y).mv02:e(Z)("a20t",{v:"皮肤"})}]])}}),we=M(be,[["__scopeId","data-v-32c0b387"]]),Ne={class:"skin-toolbar"},xe={class:"filter-select"},Ce=I({__name:"index",emits:["change"],setup(p,{expose:_,emit:y}){const d=y,a=P(),{price_type:u,skin_type:T,skin_type_list:t,same_name:r,same_name_list:v,have_type:w}=K(a),k=["全部价格","免费","由低到高","由高到低"],g=["全部皮肤","未拥有","已拥有"],f=S(""),m=()=>{f.value="",d("change")},$=o=>{a.sortPrice(k[o]),m()},N=o=>{a.filterSkinType(t.value[o]),m()},L=o=>{a.filterSameName(v.value[o]),m()},s=o=>{a.haveType(g[o]),m()},l=o=>{a.filterGender(o),m()},b=()=>{a.searchSkin(f.value),d("change")};return _({_clearName:m}),(o,H)=>(c(),h("div",Ne,[n("div",xe,[i(x,{options:k,"sort-text":e(u),onSelect:$},null,8,["sort-text"]),i(x,{options:e(t),"sort-text":e(T),"list-height":"31.25rem","min-width":"8.5rem",onSelect:N},null,8,["options","sort-text"]),i(x,{options:e(v),"sort-text":e(r),onSelect:L},null,8,["options","sort-text"]),i(x,{"sort-text":e(w),options:g,onSelect:s},null,8,["sort-text"])]),i(le,{onChange:l}),i(de,{modelValue:f.value,"onUpdate:modelValue":H[0]||(H[0]=G=>f.value=G),onChange:b},null,8,["modelValue"])]))}}),$e=M(Ce,[["__scopeId","data-v-2979bea6"]]),Le={class:"skin"},Ve={class:"skin-main"},Fe=I({name:"Skin",__name:"index",setup(p){const _=P(),{scroll:y,filter_list:d}=K(_),{playAudio:a}=ie(),u=S(),T=[[2e3,4],[1600,3],[1400,2],[720,1]],t=S(),r=S(0),v=S(!1),w=S(!1);_.getSkin();const k=()=>{const s=document.documentElement.clientWidth;s>=2e3&&(r.value=4);for(const[l,b]of T)s<l&&(r.value=b)},g=ae(s=>{_.setScroll(s),w.value=s>250},250),f=()=>{g(0),v.value=!1,Q(()=>{v.value=!0})},m=()=>{var s;f(),(s=t.value)==null||s._clearName()},$=(s,l)=>{re({id:l,parent:s.target,type:"SKIN"}),a("u4c5")},N=()=>{a("n4r4")},L=()=>{var s;(s=u.value)==null||s._setPosition(0,!1)};return U(async()=>{var s,l;k(),a("gz43"),window.addEventListener("resize",k),(s=u.value)==null||s._setPosition(y.value),(l=u.value)==null||l._updateStatus(),await oe(250),v.value=!0}),O(()=>{window.removeEventListener("resize",k)}),(s,l)=>(c(),h("div",Le,[n("div",Ve,[i(B,{name:"to-bottom",appear:""},{default:F(()=>[i($e,{ref_key:"skinToolbarRef",ref:t,onChange:f},null,512)]),_:1}),i(e(ce),{active:w.value,onBackTop:L},null,8,["active"]),i(B,{name:"fade"},{default:F(()=>[e(d).length&&v.value?(c(),E(e(me),{key:0,ref_key:"virtualListRef",ref:u,data:e(d),"column-count":r.value,onScroll:e(g)},{default:F(({data:b})=>[(c(!0),h(q,null,J(b,o=>(c(),h("div",{key:o.id,onMouseenter:N,onTouchstart:N},[i(we,{data:o,onView:$},null,8,["data"])],32))),128))]),_:1},8,["data","column-count","onScroll"])):C("",!0)]),_:1}),e(d).length===0?(c(),E(e(ne),{key:0,tip:"你还没有拥有皮肤"})):C("",!0)]),i(e(ue),{type:"skin",onChange:m})]))}}),Ue=M(Fe,[["__scopeId","data-v-32574ff7"]]);export{Ue as default};