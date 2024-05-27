import{s as B}from"./wzry-wzry_vuePlugin-5RpDEseb.js";import{l as g,r as v,j as T,M as L,u as n,C as i,D as s,O as r,Q as x,G as o,N as M,U as S,T as f,H as y,S as p,w as j,F as $,E,P as A,L as R,X as I,y as N}from"./wzry-wzry_vue-DkPlx3I4.js";import{a$ as w,n as z,b0 as F,aS as V,l as D,q as k,h as H,b1 as P,s as G}from"./wzry-index-pNmeyW9R.js";import{F as K}from"./wzry-index-fVUCMPYe.js";import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-yzdeeZVO.js";const O={class:"round"},Q={key:0,class:"left-line"},U={key:0,class:"right-line"},X={class:"box"},J={class:"info"},W=g({__name:"index",props:{equip:{},leftLine:{type:Boolean},rightLine:{type:Boolean}},setup(q){const a=q,t=w(),{playAudio:c}=D(),e=v(),d=T(()=>t.active_id),l=T(()=>a.leftLine||a.rightLine),m=()=>{t.setEquipActive(a.equip.id),c("n4r4")};return(u,h)=>L((i(),s("div",{class:"equip-card",onClick:m},[r(S,{name:"fade"},{default:x(()=>[L(o("div",O,null,512),[[M,d.value===u.equip.id]])]),_:1}),r(n(F),{class:"k-loading-radiate",link:u.equip.icon,width:"4.6875rem",height:"4.6875rem"},null,8,["link"]),r(S,{name:"left-line"},{default:x(()=>[u.leftLine?(i(),s("div",Q)):f("",!0)]),_:1}),r(S,{name:"right-line",mode:"in-out"},{default:x(()=>[u.rightLine?(i(),s("div",U)):f("",!0)]),_:1}),o("div",X,[o("div",{class:y(["name",{shine:l.value}])},p(u.equip.name),3),o("div",J,[u.equip.desc?(i(),s("div",{key:0,class:y(["desc",{shine:l.value}])},p(u.equip.desc),3)):f("",!0),L(o("div",{ref_key:"priceRef",ref:e,class:y(["price",{shine:l.value}])},null,2),[[n(V),{num:u.equip.price}]])])])])),[[n(z)]])}}),Y=k(W,[["__scopeId","data-v-2ef82847"]]),Z=g({__name:"index",props:{equipList:{},lineData:{},index:{}},setup(q){const a=q,t=w(),{category:c,vertical_line:e}=B(t),d=v(),l=v(!0),m=v([]),u=(h,b)=>a.lineData.some(_=>b==="left"?_.id===h&&a.index!==0:_.id===h&&a.index!==2&&_.to);return j(()=>c.value,()=>{l.value=!1,setTimeout(()=>{m.value=a.equipList,l.value=!0},300)}),(h,b)=>(i(),s("div",{ref_key:"equipListRef",ref:d,class:"equip-list-primary",style:R({opacity:l.value?1:0})},[(i(!0),s($,null,E(m.value,_=>(i(),A(Y,{key:_.id,"left-line":u(_.id,"left"),"right-line":u(_.id,"right"),equip:_},null,8,["left-line","right-line","equip"]))),128)),h.index!==0?(i(),s("div",{key:0,class:"vertical-line",style:R({top:n(e)[h.index].top,height:n(e)[h.index].height})},null,4)):f("",!0)],4))}}),C=k(Z,[["__scopeId","data-v-508dff95"]]),ee={ref:"equipList",class:"equip-list"},ie=g({__name:"index",setup(q){const a=w(),{synthetic_id:t,equip_list_column:c}=B(a);return(e,d)=>(i(),s("div",ee,[r(C,{"line-data":n(t)[0],"equip-list":n(c)[0],index:0},null,8,["line-data","equip-list"]),r(C,{"line-data":n(t)[1],"equip-list":n(c)[1],index:1},null,8,["line-data","equip-list"]),r(C,{"line-data":n(t)[2],"equip-list":n(c)[2],index:2},null,8,["line-data","equip-list"])],512))}}),se=k(ie,[["__scopeId","data-v-2e8ff281"]]),te={class:"name"},ne={class:"info"},ae={class:"num"},oe={class:"details"},le={class:"title"},ue={class:"desc"},re={key:0,class:"time lq"},ce=["innerHTML"],de={key:0,class:"note"},pe=g({__name:"index",props:{equip:{},show:{type:Boolean}},setup(q){const a={最大生命:"zdsm",每5秒回血:"hx",移速:"ys",攻击速度:"gjsd",冷却缩减:"lqsj",物理吸血:"wlxx",物理攻击:"wlgj",暴击率:"bjl",物理防御:"wlfy",法术吸血:"fsxx",最大法力:"zdfl",每5秒回蓝:"hl",法术防御:"fsfy",法术攻击:"fsgj"};return(t,c)=>(i(),s("div",{class:y(["equip-detail",{show:t.show}])},[t.equip?(i(),s($,{key:0},[o("div",te,p(t.equip.name),1),o("div",ne,[(i(!0),s($,null,E(t.equip.effect,(e,d)=>(i(),s("div",{key:d,class:"effect"},[o("div",{class:y(["icon",a[e.name]]),style:R({backgroundImage:`url(${n(H)("equip_effect")})`})},null,6),o("span",ae,[I("+"+p(e.num)+" ",1),r(n(P),{text:e.name},null,8,["text"])])]))),128))]),o("div",oe,[(i(!0),s($,null,E(t.equip.motivation,(e,d)=>(i(),s("div",{key:d,class:"motivation"},[o("div",le,p(e.type)+"-"+p(e.name),1),o("div",ue,p(e.desc),1),e.time?(i(),s("div",re,p(e.time)+"秒",1)):f("",!0),e.note?(i(),s("div",{key:1,class:"note",innerHTML:e.note},null,8,ce)):f("",!0)]))),128))]),t.equip.note?(i(),s("div",de,p(t.equip.note),1)):f("",!0)],64)):f("",!0)],2))}}),_e=k(pe,[["__scopeId","data-v-1545147e"]]),fe={class:"equip"},he=g({name:"Equip",__name:"index",setup(q){const a=w(),{playAudio:t}=D(),c=v(),e=v();a.getEquipList();const d=()=>{setTimeout(()=>{var l;(l=e.value)==null||l.scroll({top:0})},450)};return N(()=>{t("ph23")}),(l,m)=>(i(),s("div",fe,[L((i(),s("div",{ref_key:"equipMainRef",ref:e,class:"equip-main"},[r(_e,{show:n(a).show_details,equip:n(a).active_data},null,8,["show","equip"]),r(se,{ref_key:"equipListRef",ref:c},null,512)])),[[n(G)]]),r(n(K),{type:"equip",onChange:d})]))}}),we=k(he,[["__scopeId","data-v-a80102ce"]]);export{we as default};
