import{l as C,r as $,w as P,C as a,D as i,O as E,Q as I,F as x,G,a0 as pe,E as D,W as se,M as f,u as e,H as n,I as X,J as Y,B as j,P as N,X as U,S as L,n as Z,y as ae,v as _e,x as ve,L as A,T as oe,U as H,j as J,a5 as he,a2 as ee,R as K}from"./wzry-wzry_vue-ZP7q88Pe.js";import{ay as ne,q as S,n as y,o as b,l as te,b4 as q,a9 as le,aI as ce,aJ as W,H as O,aQ as fe,aM as ge,t as re,aU as $e,ah as me,s as Q,b5 as F,h as M,b6 as ye,k as ie,C as be,b7 as ke,f as Ce,c as Ee,M as Se,am as Ie,_ as xe}from"./wzry-index-O-tmU9-f.js";import{L as Re}from"./wzry-index-2j2SS27Y.js";/* empty css                                                                   */import{s as de}from"./wzry-wzry_vuePlugin-8reJzXjy.js";import{K as Le}from"./wzry-index-qtpfoFUJ.js";import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-x0daaVag.js";const we={mounted(_,{value:s="#ccc"}){_.style.cssText=`
      overflow: hidden;
    `;const c=`
      position: absolute;
      background-color: ${s};
      transform: translate(-50%, -50%);
      pointer-events: none;
      border-radius: 50%;
      width: 0;
      height: 0;
      transition: all 1s linear;
      opacity: 0.75;
    `;_.addEventListener("mousedown",function(d){const o=d.target,t=document.createElement("span");t.style.cssText=c;const u=d.clientX-o.getBoundingClientRect().left,p=d.clientY-o.getBoundingClientRect().top;t.style.left=u+"px",t.style.top=p+"px",this.appendChild(t);const l=o.offsetWidth,r=o.offsetHeight,h=l>r?l:r;t.style.width=`${h*5}px`,t.style.height=`${h*5}px`;function v(){t.style.transition="all 0.675s ease-out",t.style.opacity="0",setTimeout(()=>{t.remove()},675)}_.addEventListener("mouseup",v),_.addEventListener("mouseleave",v)})}},Te=["onDragstart","onDragenter"],Ne=C({__name:"index",props:{data:{}},emits:["sort-data"],setup(_,{emit:s}){const c=_,d=s,o=$(!1),t=$([...c.data]),u=$(null),p=$(null),l=(m,w,B)=>{w>B?(m.splice(B,0,m[w]),m.splice(w+1,1)):(m.splice(B+1,0,m[w]),m.splice(w,1))},r=m=>{u.value=m},h=ne(()=>{u.value!==p.value&&(l(t.value,u.value,p.value),u.value=p.value,o.value=!0)},100),v=m=>{u.value!==null&&(p.value=m,h())},R=()=>{o.value&&(d("sort-data",t.value),o.value=!1),u.value=null,p.value=null};return P(c.data,()=>{t.value=[...c.data]}),(m,w)=>(a(),i("div",null,[E(se,null,{default:I(()=>[(a(!0),i(x,null,D(t.value,(B,T)=>(a(),i("div",{key:B.id,draggable:"true",class:G(["box",{active:u.value===T}]),onDragstart:z=>r(T),onDragenter:z=>v(T),onDragend:R},[pe(m.$slots,"default",{item:B,index:T},void 0,!0)],42,Te))),128))]),_:3})]))}}),De=S(Ne,[["__scopeId","data-v-672c9888"]]),Be=_=>(X("data-v-c01c261b"),_=_(),Y(),_),Ue={class:"filter-gender"},Fe=Be(()=>n("span",{class:"label"},"只看：",-1)),Ge=["onClick"],Oe=C({__name:"index",emits:["change"],setup(_,{emit:s}){const c=s,{playAudio:d}=te(),o=["BLUE","GREEN","RED"],t=$(),u=p=>{t.value=p,c("change",p),d()};return(p,l)=>(a(),i("div",Ue,[Fe,(a(),i(x,null,D(o,(r,h)=>f(n("div",{key:h,class:G(["box",[r.toLocaleLowerCase(),{active:t.value===r}]]),onClick:v=>u(r)},null,10,Ge),[[e(y),{text:e(b).ns41}]])),64)),f(n("div",{class:G(["box all",{active:t.value===void 0}]),onClick:l[0]||(l[0]=r=>u())},null,2),[[e(y),{text:e(b).xv00}]])]))}}),ze=S(Oe,[["__scopeId","data-v-c01c261b"]]),Ae={class:"epigraph-toolbar"},Ve=C({__name:"index",setup(_,{expose:s}){const c=q(),{playAudio:d}=te(),o=$(),t=$(""),u=()=>{t.value=""},p=()=>{c.setStatus("COLLOCATION"),d("pj83")},l=h=>{c.filterColor(h),u()},r=ne(()=>{c.searchEpigraph(t.value)},500);return j(()=>{le({text:ce.f1y0,align:"left-bottom",color:!1,createFn(){W.show(o.value.$el)},btnFn:W.close})}),s({_clearName:u}),(h,v)=>(a(),i("div",Ae,[f((a(),N(e(O),{ref_key:"collocationBtnRef",ref:o,class:"k-button",onClick:p},{default:I(()=>[U(" 进入铭文搭配 ")]),_:1})),[[e(y)]]),E(ze,{onChange:l}),f(E(e(fe),{modelValue:t.value,"onUpdate:modelValue":v[0]||(v[0]=R=>t.value=R),class:"k-input",placeholder:"铭文名称",required:!1,onInput:e(r)},null,8,["modelValue","onInput"]),[[e(y),{text:e(b).kb43,type:"INPUT"}]])]))}}),Me=S(Ve,[["__scopeId","data-v-072eb0dd"]]),Pe={class:"epigraph-card"},qe=["src"],Ke={class:"box"},We={class:"name"},je={class:"attr"},He=C({__name:"index",props:{data:{}},setup(_){return(s,c)=>f((a(),i("div",Pe,[f(n("img",{src:s.data.imgBlur,alt:""},null,8,qe),[[e(re),{img:s.data.img}]]),n("div",Ke,[n("div",We,"5级铭文:"+L(s.data.name),1),n("div",je,[(a(!0),i(x,null,D(s.data.effect,(d,o)=>(a(),i("div",{key:o,class:"type"},[U(L(d.type)+"+",1),f(n("span",null,null,512),[[e($e),{num:d.num,decimalPlaces:1}]])]))),128))])])])),[[e(ge),{color:"rgb(62 123 194)",start:"-50%",end:"50%",rotate:"345deg"}]])}}),Je=S(He,[["__scopeId","data-v-22311a4f"]]),Qe=C({__name:"index",setup(_){const s=q(),c=[[2300,5],[2e3,4],[1600,3],[1110,2],[550,1]],d=$(),o=$(!1),t=$(4),u=$([]),p=()=>{const h=document.documentElement.clientWidth;h>2300&&(t.value=5);for(const[v,R]of c)h<v&&(t.value=R)};P(()=>s.filter_list,h=>{o.value=!1,Z(()=>{u.value=h,o.value=!0})},{deep:!0,immediate:!0});const l=()=>{p(),window.addEventListener("resize",p)},r=()=>{window.removeEventListener("resize",p)};return j(l),ae(l),_e(r),ve(r),(h,v)=>(a(),i("div",null,[E(H,{name:"card-list"},{default:I(()=>[o.value&&u.value.length?(a(),N(e(Re),{key:0,ref_key:"epigraphListRef",ref:d,"load-more":!1,gap:"0.9375rem",count:t.value},{default:I(()=>[E(se,{name:"card",appear:""},{default:I(()=>[(a(!0),i(x,null,D(u.value,(R,m)=>(a(),N(Je,{key:R.id,data:R,class:"epigraph-card",style:A({"transition-delay":.025*m+"s"})},null,8,["data","style"]))),128))]),_:1})]),_:1},8,["count"])):oe("",!0)]),_:1})]))}}),Xe={class:"tool"},Ye={class:"epigraph-main"},Ze=C({__name:"index",setup(_){const s=q(),c=["全部","攻击","生命","防御","功能","吸血","攻速","暴击","穿透"],d=o=>{s.setFilter(c[o])};return(o,t)=>(a(),i(x,null,[E(H,{name:"to-bottom",appear:""},{default:I(()=>[n("div",Xe,[E(Me),E(e(me),{options:c,onTab:d})])]),_:1}),f((a(),i("div",Ye,[E(Qe)])),[[e(Q)]])],64))}}),et=S(Ze,[["__scopeId","data-v-0d3ebaa7"]]),tt={class:"blue-epigraph"},st=["onClick"],at=["src"],ot={class:"green-epigraph"},nt=["onClick"],lt=["src"],ct={class:"red-epigraph"},rt=["onClick"],it=["src"],dt=C({__name:"index",setup(_){const s=F(),{epigraph_colors:c,fill_color:d,fill_index:o,is_all_empty:t}=de(s),u={BLUE:[],GREEN:[],RED:[]},p=$(),l=$(),r=$(),h=$(),v=$(),R=$({left:0,top:0}),m=J(()=>T=>T?s.color_id_selected===T?b.qr58:b.vz42:b.qu12),w=(T,z,g)=>{s.setFillEpigraph(T,z,g),l.value.style.transform="scale(2)",l.value.style.opacity="0.5",setTimeout(()=>{l.value.style.transform="scale(1)",l.value.style.opacity="1"},250)},B=()=>{Z(()=>{var V;const T=o.value;if(T===-1){l.value.style.opacity="0";return}const z=u[d.value][T],g=ye(z,"epigraph"),k=((V=p.value)==null?void 0:V.offsetWidth)||0;l.value.style.opacity="1",R.value={left:g.offsetLeft-k*.013,top:g.offsetTop-k*.014}})};return P([o,d],B,{immediate:!0}),j(()=>{u.BLUE=r.value,u.GREEN=h.value,u.RED=v.value,t.value&&s.setFillEpigraph(void 0,"BLUE",0)}),window.addEventListener("resize",B),he(()=>{window.removeEventListener("resize",B)}),(T,z)=>(a(),N(H,{name:"move",appear:""},{default:I(()=>[n("div",{ref_key:"epigraphSuitRef",ref:p,class:"epigraph-suit",style:A({backgroundImage:`url(${e(M)("epigraph_bg")})`})},[n("div",{ref_key:"shineRoundRef",ref:l,class:"shine-round",style:A({left:R.value.left+"px",top:R.value.top+"px",backgroundImage:`url(${e(M)("epigraph_slot_shine")})`})},null,4),n("div",tt,[(a(!0),i(x,null,D(e(c).BLUE,(g,k)=>f((a(),i("div",{key:k,ref_for:!0,ref_key:"blueRef",ref:r,class:G([[`epigraph-${k+1}`,{active:e(o)===k&&e(d)==="BLUE"}],"epigraph"]),style:A({backgroundImage:`url(${e(M)("epigraph_blue_slot")})`}),onClick:V=>w(g,"BLUE",k)},[n("img",{src:g==null?void 0:g.img,alt:""},null,8,at)],14,st)),[[e(y),{text:m.value(g==null?void 0:g.id)}]])),128))]),n("div",ot,[(a(!0),i(x,null,D(e(c).GREEN,(g,k)=>f((a(),i("div",{key:k,ref_for:!0,ref_key:"greenRef",ref:h,class:G([[`epigraph-${k+1}`,{active:e(o)===k&&e(d)==="GREEN"}],"epigraph"]),style:A({backgroundImage:`url(${e(M)("epigraph_green_slot")})`}),onClick:V=>w(g,"GREEN",k)},[n("img",{src:g==null?void 0:g.img,alt:""},null,8,lt)],14,nt)),[[e(y),{text:m.value(g==null?void 0:g.id)}]])),128))]),n("div",ct,[(a(!0),i(x,null,D(e(c).RED,(g,k)=>f((a(),i("div",{key:k,ref_for:!0,ref_key:"redRef",ref:v,class:G([[`epigraph-${k+1}`,{active:e(o)===k&&e(d)==="RED"}],"epigraph"]),style:A({backgroundImage:`url(${e(M)("epigraph_red_slot")})`}),onClick:V=>w(g,"RED",k)},[n("img",{src:g==null?void 0:g.img,alt:""},null,8,it)],14,rt)),[[e(y),{text:m.value(g==null?void 0:g.id)}]])),128))])],4)]),_:1}))}}),ut=S(dt,[["__scopeId","data-v-5a9cbd5c"]]),pt={class:"label"},_t={class:"value"},vt=C({__name:"index",setup(_){const s=F();return(c,d)=>(a(!0),i(x,null,D(e(s).epigraph_attr,(o,t)=>(a(),i("div",{key:t,class:"effect-box"},[n("div",pt,L(o.label),1),n("div",_t,"+"+L(o.value),1)]))),128))}}),ht=S(vt,[["__scopeId","data-v-97c8dbc5"]]),ft={class:"epigraph-info"},gt=["src"],$t={class:"count"},mt=C({__name:"index",setup(_){const s=F();return(c,d)=>(a(),i("div",ft,[(a(!0),i(x,null,D(e(s).epigraph_info,(o,t)=>{var u,p;return a(),i("div",{key:t,class:"epigraph-box"},[n("img",{class:"icon",src:(u=o.epigraph)==null?void 0:u.img,alt:""},null,8,gt),n("div",$t,L((p=o.epigraph)==null?void 0:p.name)+"x"+L(o.count),1)])}),128))]))}}),yt=S(mt,[["__scopeId","data-v-3afd205b"]]),bt={class:"epigraph-effect"},kt={class:"title"},Ct={class:"label"},Et={class:"effect-list"},St={class:"btn"},It=C({__name:"index",setup(_){const s={GAIN:ht,INFO:yt},c=$(0),d=["GAIN","INFO"],o=$("GAIN"),t=F(),u=l=>{o.value=d[l]},p=()=>{t.setSidebarStatus("SUIT")};return(l,r)=>{var h;return a(),i("div",bt,[n("div",kt,[n("span",Ct,L((h=e(t).current_suit)==null?void 0:h.label),1),f(E(e(Le),{modelValue:c.value,"onUpdate:modelValue":[r[0]||(r[0]=v=>c.value=v),u],width:"7rem",option:["属性","数量"]},null,8,["modelValue"]),[[e(y),{text:e(b).mc72}]])]),f((a(),i("div",Et,[(a(),N(ee(s[o.value])))])),[[e(Q)]]),n("div",St,[f((a(),N(e(O),{class:"k-button",onClick:p},{default:I(()=>[U("套装方案")]),_:1})),[[e(y)]])])])}}}),xt=S(It,[["__scopeId","data-v-5831ee1a"]]),Rt={class:"left"},Lt=["src"],wt={class:"count"},Tt={class:"right"},Nt={class:"name"},Dt={class:"attr"},Bt={class:"label"},Ut={class:"value"},Ft={class:"value"},Gt=C({__name:"index",props:{data:{},count:{}},setup(_){const s=_,c=F(),d=$();P(()=>c.color_id_selected,t=>{t===s.data.id&&d.value.scrollIntoView({behavior:"smooth",block:"center"})});const o=t=>{c.fillSlot(t)};return(t,u)=>f((a(),i("div",{ref_key:"epigraphCardRef",ref:d,class:G(["epigraph-card",{active:e(c).color_id_selected===t.data.id,disabled:t.count===0}]),onClick:u[0]||(u[0]=p=>o(t.data))},[n("div",Rt,[f(n("img",{src:t.data.imgBlur,alt:""},null,8,Lt),[[e(re),{img:t.data.img}]]),n("div",wt,"x"+L(t.count),1)]),n("div",Tt,[n("div",Nt,"5级铭文:"+L(t.data.name),1),n("div",Dt,[(a(!0),i(x,null,D(t.data.effect,(p,l)=>(a(),i("div",{key:l,class:"type"},[n("div",Bt,L(p.type),1),n("div",Ut,[U(" +"),n("span",Ft,L(p.num),1)])]))),128))])])],2)),[[e(we)]])}}),Ot=S(Gt,[["__scopeId","data-v-5de93aa7"]]),zt=_=>(X("data-v-e23b0e08"),_=_(),Y(),_),At={class:"epigraph-inventory"},Vt={class:"inventory"},Mt={class:"title"},Pt=zt(()=>n("div",{class:"label"},"铭文库存",-1)),qt={class:"btn"},Kt=C({__name:"index",setup(_){const s=F(),{fill_color:c,is_all_empty:d}=de(s),o=$(),t=J(()=>{const r=s.color_id_selected;return h=>r===0?b.fe59:h===r?b.w0h6:b.sb17});P(c,()=>{o.value.scrollTop=0});const u=()=>{s.closeInventory()},p=()=>{ie({text:be.q7h5,confirm:s.clearColors})},l=()=>{s.closeInventory(),Z(()=>{s.setSidebarStatus("SUIT")})};return(r,h)=>(a(),i("div",At,[n("div",Vt,[n("div",Mt,[Pt,e(d)?oe("",!0):f((a(),i("i",{key:0,class:"iconfont wzry-close",onClick:u},null,512)),[[e(y),{text:e(b).ir00}]])]),f((a(),i("div",{ref_key:"epigraphListRef",ref:o,class:"epigraph-list"},[(a(!0),i(x,null,D(e(s).current_inventory,v=>f((a(),N(Ot,{key:v.epigraph.id,data:v.epigraph,count:v.count},null,8,["data","count"])),[[e(y),{text:t.value(v.epigraph.id)}]])),128))])),[[e(Q)]])]),n("div",qt,[f((a(),N(e(O),{class:"k-button",onClick:l},{default:I(()=>[U("套装方案")]),_:1})),[[e(y)]]),f((a(),N(e(O),{class:"k-button",type:"error",disabled:e(s).is_all_empty,onClick:p},{default:I(()=>[U(" 一键拆卸 ")]),_:1},8,["disabled"])),[[e(y),{text:e(s).is_all_empty?e(b).g5l7:"",disabled:e(s).is_all_empty}]])])]))}}),Wt=S(Kt,[["__scopeId","data-v-e23b0e08"]]),jt={class:"name"},Ht={class:"epigraph-list"},Jt=["src"],Qt={class:"epigraph-name"},Xt={class:"tool"},Yt=C({__name:"index",props:{data:{}},setup(_){const s=_,c=F(),{under_1200:d}=ke(),o=J(()=>{const l=Object.values(s.data.colors).flat(1),r={};return l.forEach(h=>{h&&(r[h.id]?r[h.id].count+=1:r[h.id]={epigraph:h,count:1})}),Object.values(r)}),t=l=>{c.useSuit(l)},u=l=>{Ce({value:s.data.label,title:"修改方案名称",placeholder:"请输入新的方案名称",confirm(r,h){c.renameSuit(l,r),Ee(Se.kc58),h()}})},p=(l,r)=>{ie({text:Ie("va64",{name:r}),confirm(){c.deleteSuit(l)}})};return(l,r)=>{var h;return a(),i("div",{class:G(["suit-card",{active:((h=e(c).current_suit)==null?void 0:h.id)===l.data.id}]),onClick:r[4]||(r[4]=v=>t(l.data.id))},[n("div",jt,L(l.data.label),1),n("div",Ht,[(a(!0),i(x,null,D(o.value,(v,R)=>{var m,w;return a(),i("div",{key:R,class:"epigraph"},[n("img",{src:(m=v==null?void 0:v.epigraph)==null?void 0:m.img,alt:"",class:"icon"},null,8,Jt),n("div",Qt,L((w=v==null?void 0:v.epigraph)==null?void 0:w.name)+"x"+L(v==null?void 0:v.count),1)])}),128))]),n("div",Xt,[e(d)?(a(),i(x,{key:0},[f(n("i",{class:"iconfont wzry-rename",onClick:r[0]||(r[0]=K(v=>u(l.data.id),["stop"]))},null,512),[[e(y),{text:e(b).wi76}]]),f(n("i",{class:"iconfont wzry-delbig",onClick:r[1]||(r[1]=K(v=>p(l.data.id,l.data.label),["stop"]))},null,512),[[e(y),{text:e(b).ak96}]])],64)):(a(),i(x,{key:1},[f((a(),N(e(O),{class:"k-button",type:"info",onClick:r[2]||(r[2]=K(v=>u(l.data.id),["stop"]))},{default:I(()=>[U(" 改名 ")]),_:1})),[[e(y),{text:e(b).wi76}]]),f((a(),N(e(O),{class:"k-button",type:"error",onClick:r[3]||(r[3]=K(v=>p(l.data.id,l.data.label),["stop"]))},{default:I(()=>[U(" 删除 ")]),_:1})),[[e(y),{text:e(b).ak96}]])],64))])],2)}}}),Zt=S(Yt,[["__scopeId","data-v-be387e27"]]),ue=_=>(X("data-v-811f7962"),_=_(),Y(),_),es={class:"epigraph-suit"},ts={class:"title"},ss=ue(()=>n("span",{class:"label"},"选择铭文",-1)),as={class:"add-suit"},os=ue(()=>n("div",{class:"name"},"铭文方案",-1)),ns=C({__name:"index",setup(_){const s=F(),c=$(),d=J(()=>u=>{var p;return((p=s.current_suit)==null?void 0:p.id)===u?b.ph66:b.wt86}),o=()=>{s.setSidebarStatus("EFFECT")},t=()=>{s.unlockSuit()};return j(()=>{s.suit_list.length<2||xe||le({text:ce.cl60,align:"left-top",color:!1,createFn(){W.show(c.value)},btnFn:W.close})}),(u,p)=>(a(),i("div",es,[n("div",ts,[ss,f(n("i",{class:"iconfont wzry-close",onClick:o},null,512),[[e(y)]])]),f((a(),i("div",{ref_key:"suitListRef",ref:c,class:"suit-list"},[E(e(De),{data:e(s).suit_list,onSortData:e(s).updateSuitList},{default:I(({item:l})=>[f(E(Zt,{data:l},null,8,["data"]),[[e(y),{text:d.value(l.id)}]])]),_:1},8,["data","onSortData"]),n("div",as,[os,E(e(O),{class:"k-button",onClick:t},{default:I(()=>[U("解锁")]),_:1})])])),[[e(Q)]])]))}}),ls=S(ns,[["__scopeId","data-v-811f7962"]]),cs={class:"epigraph-sidebar"},rs=C({__name:"index",setup(_){const s=F(),c={EFFECT:xt,INVENTORY:Wt,SUIT:ls};return(d,o)=>(a(),i("div",cs,[E(H,{name:"move",appear:""},{default:I(()=>[(a(),N(ee(c[e(s).sidebar_status])))]),_:1})]))}}),is=S(rs,[["__scopeId","data-v-4dea0e41"]]),ds={class:"epigraph-collocation"},us=C({__name:"index",setup(_){const s=q(),c=()=>{s.setStatus("LIST")};return(d,o)=>(a(),i("div",ds,[f(n("div",{class:"back",onClick:c},null,512),[[e(y),{text:e(b).wc91}]]),E(ut),E(is)]))}}),ps=S(us,[["__scopeId","data-v-eaef88a8"]]),_s={class:"epigraph"},vs=C({name:"Epigraph",__name:"index",setup(_){const{playAudio:s}=te(),c={LIST:et,COLLOCATION:ps},d=q();return d.getEpigraph(),ae(()=>{s("h7t9")}),(o,t)=>(a(),i("div",_s,[(a(),N(ee(c[e(d).status])))]))}}),Ss=S(vs,[["__scopeId","data-v-9ff15268"]]);export{Ss as default};
