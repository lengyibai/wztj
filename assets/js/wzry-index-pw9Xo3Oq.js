import{l as D,r as U,E as o,F as n,G as k,H as K,J as W,U as E,V as j,I as s,u as t,O as N,R as I,S as d,N as P,K as q,L as J,y as Q,Q as _,W as w}from"./wzry-wzry_vue-Lqzt6jH9.js";import{u as X,L as Z,S as tt}from"./wzry-useLotteryPlay-80-vtiea.js";import{s as st}from"./wzry-wzry_vuePlugin-oPsogQAT.js";import{bj as et,G as y,H as u,bk as $,m as S,n as b,y as x,x as at,k as M,p as V}from"./wzry-index-G5nCmP-f.js";import"./wzry-wzry_pinyin_pro-OgjkpRkC.js";import"./wzry-index-dELrV4vu.js";import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-7NB47TbP.js";import"./wzry-wzry_vueuse-UANoZhwW.js";const i=p=>(q("data-v-58216f69"),p=p(),J(),p),ot={class:"lottery-area"},lt={key:0,class:"tag"},it=["src"],nt={class:"text"},ct={class:"tool"},dt={class:"content"},rt={class:"luck"},_t={class:"luck-value"},ut=["data-text"],pt=i(()=>s("div",{class:"luck-label","data-text":"幸运值"},"幸运值",-1)),vt={class:"btns"},mt=["src"],yt=i(()=>s("span",{class:"num"},"×1",-1)),ht=i(()=>s("div",{class:"text"},"夺宝一次",-1)),ft=["src"],kt=i(()=>s("span",{class:"num"},"×5",-1)),Nt=i(()=>s("div",{class:"text"},"夺宝五次",-1)),It=["src"],St=i(()=>s("span",{class:"num"},"×1",-1)),bt=i(()=>s("div",{class:"text"},"夺宝一次",-1)),xt=["src"],Tt=i(()=>s("span",{class:"num"},"×5",-1)),Lt=i(()=>s("div",{class:"text"},"夺宝五次",-1)),Ot=D({__name:"index",setup(p){const r=et(),{skin_lucky:h}=st(r),{playAudio:T}=M(),{getLotteryIndex:R,gift_index:v,last_reward_position:Y,checkAloneNotCount:z,setLastPosition:B,have_alone_free:f,have_multiple_free:L,have_alone_discount:O,have_multiple_discount:g,calcAloneReward:F,calcMultipleReward:G,checkMultipleNotCount:H}=X("SKIN"),l=U(-1),C=()=>{if(z())return;R();let c=0,a=0;const e=()=>{setTimeout(()=>{if(T("o7r6"),l.value++,l.value===12&&(l.value=0),l.value===Y.value&&c++,c===2&&(a+=35),c===2&&v.value===l.value){setTimeout(()=>{B(v.value),r.setLuckValue("SKIN"),F()},250);return}e()},50+[0,25,50,75][c]+a)};e()},A=c=>{if(H(c,C))return;const a=[],e=()=>{setTimeout(async()=>{if(l.value++,T("o7r6"),l.value===12&&(l.value=0),v.value===l.value&&a.length<5&&(r.setLuckValue("SKIN"),$.SKIN[v.value].type==="HONOR_CRYSTAL"&&r.resetSkinLuck(),a.push(v.value),await at(500,R),a.length>=5)){G(a);return}e()},50)};e()};return(c,a)=>(o(),n("div",ot,[(o(!0),n(k,null,K(t($).SKIN,(e,m)=>(o(),n("div",{key:m,class:W([{active:l.value===m},"area-box"])},[e.num?(o(),n("div",lt,E(e.num),1)):j("",!0),s("img",{src:t(y)(t(u).ICON[e.type]),alt:"",class:"icon"},null,8,it),s("div",nt,E(t(u).NAME[e.type]),1)],2))),128)),s("div",ct,[s("div",dt,[s("div",rt,[s("div",_t,[s("div",{class:"value","data-text":t(h)},E(t(h)),9,ut)]),pt]),s("div",vt,[t(f)?(o(),n(k,{key:0},[N((o(),I(t(x),{disabled:!t(f),class:"k-button",type:"warning",onClick:C},{default:d(()=>[s("img",{src:t(y)(t(u).ICON.SKIN_LOTTERY_COIN),alt:"",class:"icon"},null,8,mt),yt,ht]),_:1},8,["disabled"])),[[t(S),{disabled:!t(f),text:t(f)?"":t(b).zk84}]]),N((o(),I(t(x),{disabled:!t(L),class:"k-button",type:"warning",onClick:a[0]||(a[0]=e=>A("FREE"))},{default:d(()=>[s("img",{src:t(y)(t(u).ICON.SKIN_LOTTERY_COIN),alt:"",class:"icon"},null,8,ft),kt,Nt]),_:1},8,["disabled"])),[[t(S),{disabled:!t(L),text:t(L)?"":t(b).c2y9}]])],64)):(o(),n(k,{key:1},[N((o(),I(t(x),{class:"k-button",type:"warning",disabled:!t(O),onClick:C},{default:d(()=>[s("img",{src:t(y)(t(u).ICON.SKIN_LOTTERY_STONE),alt:"",class:"icon"},null,8,It),St,bt]),_:1},8,["disabled"])),[[t(S),{disabled:!t(O),text:t(O)?"":t(b).zk84}]]),N((o(),I(t(x),{disabled:!t(g),class:"k-button",type:"warning",onClick:a[1]||(a[1]=e=>A("DEDUCTION"))},{default:d(()=>[s("img",{src:t(y)(t(u).ICON.SKIN_LOTTERY_STONE),alt:"",class:"icon"},null,8,xt),Tt,Lt]),_:1},8,["disabled"])),[[t(S),{disabled:!t(g),text:t(g)?"":t(b).c2y9}]])],64))])]),s("div",{class:"waves",style:P(`--height:${t(h)/2}%`)},[(o(),n(k,null,K(50,(e,m)=>s("div",{key:m,style:P({animationDelay:m*.05+"s"}),class:"wave"},null,4)),64))],4)])]))}}),gt=V(Ot,[["__scopeId","data-v-58216f69"]]),Ct={class:"seize-treasures"},Et={class:"main"},wt=D({name:"LotterySkin",__name:"index",setup(p){const{playAudio:r}=M();return Q(()=>{r("bq69")}),(h,T)=>(o(),n("div",Ct,[_(w,{name:"to-bottom",appear:""},{default:d(()=>[_(Z,{type:"SKIN"})]),_:1}),s("div",Et,[_(w,{name:"to-right-opacity",appear:""},{default:d(()=>[_(gt)]),_:1}),_(w,{name:"to-left-opacity",appear:""},{default:d(()=>[_(tt,{type:"SKIN"})]),_:1})])]))}}),Ft=V(wt,[["__scopeId","data-v-38f63f7f"]]);export{Ft as default};
