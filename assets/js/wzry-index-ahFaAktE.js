import{l as q,r as B,C as e,D as l,H as t,u as s,T as A,L as k,F as E,E as V,S as H,M as O,P as f,Q as n,I as ss,J as ts,y as es,O as c,U as P}from"./wzry-wzry_vue-ZP7q88Pe.js";import{u as as,L as os,S as ls}from"./wzry-useLotteryPlay-XQ834vog.js";import{s as F}from"./wzry-wzry_vuePlugin-8reJzXjy.js";import{bn as is,A as ns,h as G,I as h,J as d,bo as U,bp as cs,n as x,o as T,H as R,z as _,q as J,l as ds}from"./wzry-index-O-tmU9-f.js";import"./wzry-index-IyIFNvic.js";import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_lodash-4gQjN7DL.js";import"./wzry-wzry_i18n-x0daaVag.js";const a=r=>(ss("data-v-18c2d7d9"),r=r(),ts(),r),_s={class:"play-area"},rs={class:"double-status"},us={key:0,class:"status"},ps=["src"],vs=a(()=>t("span",{class:"text"},"×2倍",-1)),hs={key:1,class:"status"},ms=["src"],ys=a(()=>t("span",{class:"text"},"×2倍",-1)),bs={class:"fix-position"},ks={class:"award"},Es={key:0,class:"tag"},Os=["src"],fs={class:"text"},xs=a(()=>t("div",{class:"turntable-mask"},null,-1)),Ts={class:"spin"},Rs={class:"content"},gs={class:"luck"},Ls={class:"luck-value"},Cs=["data-text"],ws=a(()=>t("div",{class:"luck-label","data-text":"幸运值"},"幸运值",-1)),Is={class:"base"},Ns=["src"],Ss=a(()=>t("span",{class:"num"},"×1",-1)),As=a(()=>t("div",{class:"text"},"夺宝一次",-1)),Hs=["src"],Ps=a(()=>t("span",{class:"num"},"×5",-1)),$s=a(()=>t("div",{class:"text"},"夺宝五次",-1)),Ds=["src"],Ms=a(()=>t("span",{class:"num"},"×1",-1)),Ys=a(()=>t("div",{class:"text"},"夺宝一次",-1)),zs=["src"],Bs=a(()=>t("span",{class:"num"},"×5",-1)),Vs=a(()=>t("div",{class:"text"},"夺宝五次",-1)),Fs=q({__name:"index",setup(r){const m=is(),$=ns(),{setLuckValue:g,resetHeroLuck:K}=m,{hero_lucky:L}=F(m),{user_data:D}=F($),{gift_index:y,getLotteryIndex:M,last_reward_position:u,checkAloneNotCount:Q,setLastPosition:W,have_alone_free:b,have_multiple_free:C,have_alone_discount:w,have_multiple_discount:I,calcAloneReward:j,calcMultipleReward:X,checkMultipleNotCount:Z}=as("HERO"),p=B(),N=B(0),S=async()=>{Q()||(M(),await _(),N.value=2,await _(),p.value=u.value-u.value%360+y.value*36+360*2,await _(2e3),W(p.value),g("HERO"),j())},Y=z=>{if(Z(z,S))return;const i=[],o=async()=>{if(await _(),N.value=1,await _(),p.value=u.value-u.value%360+y.value*36+360*1,await _(1e3),g("HERO"),U.HERO[y.value].type==="KING_CRYSTAL"&&K(),u.value=p.value,i.push(y.value),M(),i.length<5){setTimeout(o,250);return}X(i)};o()};return(z,i)=>(e(),l("div",_s,[t("div",rs,[s(D).doubleGoldCardExpireTime!==0?(e(),l("div",us,[t("img",{src:s(G)("double_gold_status"),alt:"",class:"icon"},null,8,ps),vs])):A("",!0),s(D).doubleExpCardExpireTime!==0?(e(),l("div",hs,[t("img",{src:s(G)("double_exp_status"),alt:"",class:"icon"},null,8,ms),ys])):A("",!0)]),t("div",bs,[t("div",{class:"turntable",style:k({transform:`rotate(${-p.value}deg)`,transitionDuration:N.value+"s"})},[t("div",ks,[(e(!0),l(E,null,V(s(U).HERO,(o,v)=>(e(),l("div",{key:v,class:"award-item",style:k(`--i:${v}`)},[o.num?(e(),l("div",Es,H(o.num),1)):A("",!0),t("img",{src:s(h)(s(d).ICON[o.type]),alt:"",class:"icon"},null,8,Os),t("div",fs,H(s(d).NAME[o.type]),1)],4))),128))])],4),xs,t("div",Ts,[t("div",Rs,[t("div",gs,[t("div",Ls,[t("div",{class:"value","data-text":s(L)},H(s(L)),9,Cs)]),ws])]),t("div",{class:"waves",style:k(`--height:${s(L)/s(cs).hero[1]*100}%`)},[(e(),l(E,null,V(50,(o,v)=>t("div",{key:v,style:k({animationDelay:v*.05+"s"}),class:"wave"},null,4)),64))],4)])]),t("div",Is,[s(b)?(e(),l(E,{key:0},[O((e(),f(s(R),{disabled:!s(b),class:"k-button",type:"warning",onClick:S},{default:n(()=>[t("img",{src:s(h)(s(d).ICON.HERO_LOTTERY_COIN),alt:"",class:"icon"},null,8,Ns),Ss,As]),_:1},8,["disabled"])),[[s(x),{disabled:!s(b),text:s(b)?"":s(T).zk84}]]),O((e(),f(s(R),{disabled:!s(C),class:"k-button",type:"warning",onClick:i[0]||(i[0]=o=>Y("FREE"))},{default:n(()=>[t("img",{src:s(h)(s(d).ICON.HERO_LOTTERY_COIN),alt:"",class:"icon"},null,8,Hs),Ps,$s]),_:1},8,["disabled"])),[[s(x),{disabled:!s(C),text:s(C)?"":s(T).c2y9}]])],64)):(e(),l(E,{key:1},[O((e(),f(s(R),{disabled:!s(w),class:"k-button",type:"warning",onClick:S},{default:n(()=>[t("img",{src:s(h)(s(d).ICON.HERO_LOTTERY_STONE),alt:"",class:"icon"},null,8,Ds),Ms,Ys]),_:1},8,["disabled"])),[[s(x),{disabled:!s(w),text:s(w)?"":s(T).zk84}]]),O((e(),f(s(R),{disabled:!s(I),class:"k-button",type:"warning",onClick:i[1]||(i[1]=o=>Y("DEDUCTION"))},{default:n(()=>[t("img",{src:s(h)(s(d).ICON.HERO_LOTTERY_STONE),alt:"",class:"icon"},null,8,zs),Bs,Vs]),_:1},8,["disabled"])),[[s(x),{disabled:!s(I),text:s(I)?"":s(T).c2y9}]])],64))])]))}}),Gs=J(Fs,[["__scopeId","data-v-18c2d7d9"]]),Us={class:"seize-treasures"},qs={class:"main"},Js=q({name:"LotteryHero",__name:"index",setup(r){const{playAudio:m}=ds();return es(()=>{m("bq69")}),($,g)=>(e(),l("div",Us,[c(P,{name:"to-bottom",appear:""},{default:n(()=>[c(os,{type:"HERO"})]),_:1}),t("div",qs,[c(P,{name:"to-right-opacity",appear:""},{default:n(()=>[c(Gs)]),_:1}),c(P,{name:"to-left-opacity",appear:""},{default:n(()=>[c(ls,{type:"HERO"})]),_:1})])]))}}),at=J(Js,[["__scopeId","data-v-bc27d390"]]);export{at as default};
