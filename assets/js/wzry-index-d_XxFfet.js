import{l as ce,r as m,j as K,w as z,B as le,y as ue,x as de,C as u,D as v,O as B,Q as L,L as X,H as _,F as Ee,u as a,G as pe,S as P,M as y,E as Oe,T as b,U as G,N as Te,X as Re,P as J,n as F,I as me,J as ve}from"./wzry-wzry_vue-ZP7q88Pe.js";import{u as Se,s as Ie}from"./wzry-wzry_vuePlugin-8reJzXjy.js";import{U as Ne,A as fe,ab as Le,ay as ye,J as S,I as q,n as Q,aU as Ae,H as Ce,ag as he,l as ke,b8 as He,b9 as xe,ba as De,k as A,am as C,bb as Z,c as h,M as k,bc as ee,b6 as Ke,an as n,q as Be}from"./wzry-index-O-tmU9-f.js";import{u as Pe,a as be}from"./wzry-useDialogSwitch-RV-5qUNa.js";import{d as te}from"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-x0daaVag.js";const Ge=I=>(me("data-v-7883912b"),I=I(),ve(),I),Ue={key:0,class:"article-list"},Ye=["onClick"],we=["src"],ge=["data-text"],Me={key:0,class:"article-detail"},$e={class:"name"},Ve={class:"have"},We=Ge(()=>_("div",{class:"text"},"拥有",-1)),je={class:"num"},ze={class:"desc"},Xe=ce({name:"Knapsack",__name:"index",setup(I){var W,j;const ae=Se(),d=Ne(),i=fe(),se=Le(),{knapsack:c}=Ie(d),{playAudio:E}=ke(),l=m(),N=m(),r=m((W=c.value[0])==null?void 0:W[0]),H=m((j=c.value[0])==null?void 0:j[0]),x=m({left:0,top:0}),{enableRadialBorder:U,disableRadialBorder:Y}=Pe(N),w=K(()=>c.value.findIndex(e=>e[0]===r.value)),g=K(()=>{var e;return(e=c.value[w.value])==null?void 0:e[1]}),M=K(()=>c.value.length===0),$=e=>{r.value=e,V(),l.value.style.transform="scale(0.75)",l.value.style.opacity="0.5",setTimeout(()=>{l.value.style.transform="scale(1)",l.value.style.opacity="1"},250),F(()=>{H.value=e,E("n4r4")})},oe=e=>{const s={HERO_DEBRIS:n.HERO_DEBRIS,SKIN_DEBRIS:n.SKIN_DEBRIS,KING_CRYSTAL:n.KING_CRYSTAL,HONOR_CRYSTAL:n.HONOR_CRYSTAL,HERO_LOTTERY_STONE:n.HERO_LOTTERY,SKIN_LOTTERY_STONE:n.SKIN_LOTTERY,HERO_LOTTERY_COIN:n.HERO_LOTTERY,SKIN_LOTTERY_COIN:n.SKIN_LOTTERY,GUESS_COIN:n.YI_BAO,JUMP_COIN:n.YI_BAO};if(Object.keys(s).includes(e)){ae.push(s[e]);return}const t={HERO_CHEST_OPTIONAL:"HERO",SKIN_CARD_INITIAL:"INITIAL",SKIN_CHEST_BRAVE_OPTIONAL:"BRAVE",SKIN_CHEST_EPIC_OPTIONAL:"EPIC",SKIN_CHEST_LEGEND_OPTIONAL:"LEGEND",SKIN_CHEST_LIMIT_OPTIONAL:"LIMIT"};if(Object.keys(t).includes(e)){He(t[e]);return}if(["HERO_EXP_ONE","HERO_EXP_TWO"].includes(e)){xe(e);return}if(["BLESSING_BAG","HERO_CHEST_RANDOM","HERO_TREASURE","SKIN_BRAVE_TREASURE","SKIN_EPIC_TREASURE","SKIN_LEGEND_TREASURE","SKIN_LIMIT_TREASURE"].includes(e)){De(e);return}if(["HERO_LOTTERY_WEEK","SKIN_LOTTERY_WEEK"].includes(e)){const o=e==="HERO_LOTTERY_WEEK"?"HERO":"SKIN",R=o==="HERO"?"英雄夺宝石周卡":"皮肤夺宝石周卡",p=o==="HERO"?"HERO_LOTTERY_STONE":"SKIN_LOTTERY_STONE",D=o==="HERO"?"HERO_LOTTERY_COIN":"SKIN_LOTTERY_COIN",f=o==="HERO"?"heroLotteryStoneWeekCardExpireTime":"skinLotteryStoneWeekCardExpireTime",_e=o==="HERO"?"英雄夺宝石周卡发放":"皮肤夺宝石周卡发放";if(i.user_data[f]!==0){A({text:C("jt83",{v:R}),confirm(){const ie=i.user_data[f];i.updateUserData({[f]:Z(ie+6048e5)}),d.setGamePropNum(e,1,"SUB"),E("wm14"),h(k.ep96)}});return}A({text:C("m2x2",{v:R}),confirm(){i.updateUserData({[f]:Z(te().valueOf()+6048e5)}),d.setGamePropNum(e,1,"SUB"),E("wm14"),h(k.fo08),se.sendGiftMail({title:_e,desc:"别忘了明天0点之前也来领取哦！",props:[{key:p,num:ee[o].STONE},{key:D,num:ee[o].COIN}]})}});return}if(["DOUBLE_GOLD","DOUBLE_EXP"].includes(e)){const o=e==="DOUBLE_GOLD"?"GOLD":"EXP",R=o==="GOLD"?"双倍金币卡":"双倍经验卡",p=o==="GOLD"?"doubleGoldCardExpireTime":"doubleExpCardExpireTime";if(i.user_data[p]!==0){A({text:C("jt83",{v:R}),confirm(){const D=i.user_data[p];i.updateUserData({[p]:D+864e5}),d.setGamePropNum(e,1,"SUB"),E("wm14"),h(k.fo08)}});return}A({text:C("m2x2",{v:R}),confirm(){i.updateUserData({[p]:te().valueOf()+864e5}),d.setGamePropNum(e,1,"SUB"),E("wm14")}});return}e==="GUESS_CARD"&&(be().setActivityShow(!0),setTimeout(()=>{h(k.yk98,"warning")},2e3))},V=()=>{F(()=>{var T;const e=w.value;if(e===-1||!((T=N.value)!=null&&T.length)){l.value&&(l.value.style.opacity="0");return}const s=N.value[e],t=Ke(s,"article");l.value.style.opacity="1",x.value={left:t.offsetLeft,top:t.offsetTop}})},O=ye(V,500);return z(g,()=>{d.articles[r.value]===0&&$(c.value[0][0])}),z(()=>c.value.length,O),le(()=>{O()}),ue(()=>{window.addEventListener("resize",O),O(),E("fz02")}),de(()=>{window.removeEventListener("resize",O)}),(e,s)=>(u(),v("div",{class:"knapsack",onMouseenter:s[1]||(s[1]=(...t)=>a(U)&&a(U)(...t)),onMouseleave:s[2]||(s[2]=(...t)=>a(Y)&&a(Y)(...t))},[B(G,{name:"to-right-opacity",appear:""},{default:L(()=>[M.value?b("",!0):(u(),v("div",Ue,[_("div",{ref_key:"shineRoundRef",ref:l,class:"shine-round",style:X({left:x.value.left+"px",top:x.value.top+"px"})},null,4),(u(!0),v(Ee,null,Oe(a(c),(t,T)=>y((u(),v("div",{key:T,ref_for:!0,ref_key:"articleRefs",ref:N,class:pe(["article",{active:r.value===t[0]}]),onClick:ne=>$(t[0])},[_("img",{src:a(q)(a(S).ICON[t[0]]),alt:""},null,8,we),_("div",{class:"num","data-text":t[1]},P(t[1]),9,ge)],10,Ye)),[[a(Q),{text:a(S).NAME[t[0]]}]])),128))]))]),_:1}),B(G,{name:"to-top-opacity",appear:""},{default:L(()=>[r.value?(u(),v("div",Me,[B(G,{name:"fade"},{default:L(()=>[y(_("div",{class:"icon",style:X({backgroundImage:`url(${a(q)(a(S).ICON[H.value])})`})},null,4),[[Te,H.value===r.value]])]),_:1}),_("div",$e,P(a(S).NAME[r.value]),1),_("div",Ve,[We,y(_("div",je,null,512),[[a(Ae),{num:g.value,once:!1}]])]),_("div",ze,P(a(S).DESC[r.value]),1),y((u(),J(a(Ce),{type:"warning",class:"k-button",onClick:s[0]||(s[0]=t=>oe(r.value))},{default:L(()=>[Re(" 使用 ")]),_:1})),[[a(Q)]])])):b("",!0)]),_:1}),M.value?(u(),J(a(he),{key:0,tip:"背包居然是空的！"})):b("",!0)],32))}}),nt=Be(Xe,[["__scopeId","data-v-7883912b"]]);export{nt as default};
