import{s as tt}from"./wzry-wzry_vuePlugin-5RpDEseb.js";import{bq as kt,S as pt,n as A,H as C,I as J,aS as ut,br as Nt,bp as b,bs as ot,bo as Q,ab as G,bt as nt,q as U,bu as B,bv as it,aD as It,z as at,l as dt,ac as V,ah as Lt,a0 as Ct,ad as ct,k as X,C as W,bn as Et,Y as st,O as $t,A as Ht,c as xt,M as Yt}from"./wzry-index-pNmeyW9R.js";import{K as bt,a as gt}from"./wzry-index-u6cqSPNQ.js";import{l as j,C as O,D as S,G as c,S as I,u as e,M as k,O as x,j as R,F as At,E as wt,H as lt,X as Z,T as g,P as w,Q as L,I as mt,J as Ot,r as M,w as Mt,y as Pt,x as Dt,N as yt,L as vt,U as K}from"./wzry-wzry_vue-DkPlx3I4.js";const Kt={dq76:`1、优先使用{crystal}夺宝石进行夺宝。
2、{crystal}水晶在幸运值为[{luckValue1}-{luckValue2}]时获得，获取后将[重置]幸运值。
3、{type}夺宝石补给倒计时结束后，不会自动叠加，需要领取补给后再次设置模式，重新倒计时。
4、{type}夺宝石补给每日领取上限为[${kt}]个夺宝石，额外的{type}夺宝次数前往[商城-道具商店]购买。
5、{type}夺宝石补给如果在倒计时没有结束时[终止]，会根据当前已过去的时间，匹配对应的模式奖励。
6、{type}夺宝石补给倒计时是根据[当前时间-开始时间]来计算[剩余时间]，不受关闭浏览器影响。
※、{type}夺宝概率设计：{chance}放入奖池，从奖池随机选择，没有保底机制。`,g5k2:"",j5s5:"",ak79:"",yn25:"",tw50:"",fr16:"",pg06:"",op14:"",sg33:"",kc45:"",mx01:"",dy76:"",xw01:"",en46:"",ku28:"",vf96:"",ib49:"",hv47:""},_t=(t,s)=>{let o=Kt[t];return Object.entries(s).forEach(([n,r])=>{o=o.replaceAll(`{${n}}`,r.toString())}),o},Gt={class:"lottery-toolbar"},Vt=["data-text"],Ut={class:"prop-num"},Bt={class:"coin"},jt=["src"],zt={class:"num"},qt={class:"rock"},Ft=["src"],Xt={class:"num"},Wt=j({__name:"index",props:{type:{}},setup(t){const s=t,o=pt(),{articles:n}=tt(o),r=s.type==="HERO"?"英雄":"皮肤",l={HERO:"HERO_LOTTERY_COIN",SKIN:"SKIN_LOTTERY_COIN"},p={HERO:"HERO_LOTTERY_STONE",SKIN:"SKIN_LOTTERY_STONE"},u=()=>{let a="";for(const i in ot){const _=Number(i),v=ot[_],T=Q.HERO.find(h=>h.id===_);a+=`[${v}个${G[T.type]}*${T.num||1}]、`}return a.slice(0,-1)},y=()=>{let a="";for(const i in nt){const _=Number(i),v=nt[_],T=Q.SKIN.find(h=>h.id===_);a+=`[${v}个${G[T.type]}*${T.num||1}]、`}return a.slice(0,-1)},m=()=>{Nt({title:`${s.type==="HERO"?"英雄":"皮肤"}夺宝说明`,content:s.type==="HERO"?_t("dq76",{crystal:"王者",type:"英雄",luckValue1:b.hero[0],luckValue2:b.hero[1],chance:u()}):_t("dq76",{crystal:"荣耀",type:"皮肤",luckValue1:b.skin[0],luckValue2:b.skin[1],chance:y()})})};return(a,i)=>(O(),S("div",Gt,[c("div",{class:"title","data-text":e(r)+"夺宝"},I(e(r))+"夺宝",9,Vt),k(x(e(bt),{"margin-left":"1rem",onClick:m},null,512),[[e(A)]]),c("div",Ut,[c("div",Bt,[c("img",{src:e(C)(e(J).ICON[l[a.type]]),alt:"",class:"icon"},null,8,jt),k(c("div",zt,null,512),[[e(ut),{num:e(n)[l[a.type]],duration:2e3,once:!1}]])]),c("div",qt,[c("img",{src:e(C)(e(J).ICON[p[a.type]]),alt:"",class:"icon"},null,8,Ft),k(c("div",Xt,null,512),[[e(ut),{num:e(n)[p[a.type]],duration:2e3,once:!1}]])])])]))}}),ge=U(Wt,[["__scopeId","data-v-161c1970"]]),Tt=t=>(mt("data-v-eace1f56"),t=t(),Ot(),t),Jt={class:"supply-mode"},Qt={class:"title"},Zt={key:0,class:"mode-list"},te=["data-text","onClick"],ee={key:1,class:"ready-start"},se={class:"tip"},oe=Tt(()=>c("div",{class:"text"},"倒计时结束后可领取",-1)),ne={class:"prop"},ae=["src"],ce={class:"btns"},le={class:"supply-remain-num"},re=Tt(()=>c("div",{class:"label"},"今日补给剩余额度：",-1)),ue={class:"value"},ie=j({__name:"index",props:{type:{}},setup(t){const s=t,o=B(),{setTimeMode:n,startCountdown:r}=o,{hero_mode:l,skin_mode:p,skin_supply_status:u,hero_supply_status:y,hero_supply_remain_num:m,skin_supply_remain_num:a}=tt(o),{playAudio:i}=dt(),_=s.type==="HERO"?l:p,v=s.type==="HERO"?y:u,T=s.type==="HERO"?"HERO_LOTTERY_STONE":"SKIN_LOTTERY_STONE",h=s.type==="HERO"?m:a,z=R(()=>({SELECT:"请选择补给模式",READY:"准备开始"})[v.value]),Y=$=>{n(s.type,$),i("v6p0")},N=()=>{i("pj83")};return($,q)=>(O(),S("div",Jt,[c("div",Qt,I(z.value),1),e(v)==="SELECT"?(O(),S("div",Zt,[(O(!0),S(At,null,wt(e(It).LOTTERY_SUPPLY_MODE,(H,P)=>k((O(),S("div",{key:P,class:lt([e(it)(H.seconds),"mode"]),"data-text":H.label,onClick:et=>Y(P)},[Z(I(H.label),1)],10,te)),[[e(A)]])),128))])):g("",!0),e(v)==="READY"&&e(_)?(O(),S("div",ee,[c("div",{class:lt(["desc",e(it)(e(_).seconds)])},I(e(_).label),3),c("div",se,[oe,c("div",ne,[c("img",{src:e(C)(e(J).ICON[e(T)]),alt:"",class:"icon"},null,8,ae),c("span",null,"×"+I(e(_).count),1)])]),c("div",ce,[k((O(),w(e(at),{class:"k-button",type:"warning",onClick:q[0]||(q[0]=H=>(e(r)($.type),N()))},{default:L(()=>[Z(" 开始 ")]),_:1})),[[e(A)]])])])):g("",!0),c("div",le,[re,c("div",ue,I(e(h)),1)])]))}}),_e=U(ie,[["__scopeId","data-v-eace1f56"]]),pe=t=>{const s=[],o=M(0),n={left:[0,0],top:[0,0]},r=R(()=>s[o.value]);for(const i in V)s.push(C(V[i]));const l=()=>{o.value++,o.value>=s.length&&(o.value=0)},p=(i,_)=>{t.value&&(l(),t.value.style[i]=`calc(100% - ${t.value.offsetWidth/16}rem)`,n[i][0]=setTimeout(()=>{t.value&&(l(),t.value.style[i]="0%",n[i][1]=setTimeout(()=>{p(i,_)},_))},_))},u=()=>p("left",7200),y=()=>p("top",4600);return{img:r,startAnimate:()=>{t.value.style.left="0%",t.value.style.top="0%",setTimeout(()=>{u(),y()},10)},clearAnimate:()=>{[...n.left,...n.top].forEach(i=>{clearTimeout(i)})}}},de={class:"animate-move"},Ee=["src"],me=j({__name:"index",props:{type:{}},setup(t,{expose:s}){const o=t,n=B(),r=M(),{img:l,startAnimate:p,clearAnimate:u}=pe(r),y=R(()=>o.type==="HERO"?n.hero_countdown:n.skin_countdown),m=R(()=>(o.type==="HERO"?n.hero_supply_status:n.skin_supply_status)==="RUNNING");return Mt(m,a=>{a?p():u()}),Pt(()=>{m.value&&p()}),Dt(u),s({_clearAnimate:u}),(a,i)=>(O(),S("div",de,[c("img",{src:e(l),class:"bg",alt:""},null,8,Ee),k(c("div",{ref_key:"circularRef",ref:r,class:"circular",style:vt({backgroundImage:`url(${e(l)})`})},null,4),[[yt,m.value]]),x(K,{name:"fade"},{default:L(()=>[m.value?(O(),w(e(gt),{key:0,class:"k-scroll-countdown",nums:y.value},null,8,["nums"])):g("",!0)]),_:1})]))}}),Oe=U(me,[["__scopeId","data-v-d42f88d2"]]),ye={class:"receive-prop"},ve={class:"title"},Te={class:"prop"},fe={class:"count"},Re={class:"btns"},he=j({__name:"index",props:{type:{}},setup(t){const s=t,o=B(),n=Lt(),{hero_mode:r,skin_mode:l}=tt(o),p=s.type==="HERO"?r:l,u=s.type==="HERO"?"HERO_LOTTERY_STONE":"SKIN_LOTTERY_STONE",y=()=>{const a=p.value.count;ct({icon:C(V[u]),name:G[u],num:a,key:u}),u==="HERO_LOTTERY_STONE"?n.setTaskStatus("today_hero_supply",a):n.setTaskStatus("today_skin_supply",a),o.setSupplyRemainNum(s.type,a),o.setSupplyStatus(s.type,"IDLE")},m=()=>{y(),o.startCountdown(s.type)};return(a,i)=>{var _;return O(),S("div",ye,[c("div",ve,"本次时长："+I(e(Ct)(e(p).seconds)),1),c("div",Te,[c("div",{class:"icon",style:vt({backgroundImage:`url(${e(C)(e(J).ICON[e(u)])})`})},null,4),c("div",fe,"×"+I((_=e(p))==null?void 0:_.count),1)]),c("div",Re,[k((O(),w(e(at),{class:"k-button",type:"warning",onClick:y},{default:L(()=>[Z("领取")]),_:1})),[[e(A)]]),k((O(),w(e(at),{class:"k-button",type:"warning",onClick:m},{default:L(()=>[Z(" 领取并继续 ")]),_:1})),[[e(A)]])])])}}}),Se=U(he,[["__scopeId","data-v-af147bb0"]]),ke=t=>(mt("data-v-06b85493"),t=t(),Ot(),t),Ne={class:"supply-area"},Ie=ke(()=>c("div",{class:"text"},"夺宝石补给站",-1)),Le=j({__name:"index",props:{type:{}},setup(t){const s=t,o=B(),{playAudio:n}=dt(),r=M(),l=R(()=>s.type==="HERO"?o.hero_supply_status:o.skin_supply_status),p=()=>{if(l.value==="RUNNING"){X({text:W.jn63,confirm(){r.value._clearAnimate(),o.stopCountdown(s.type),n("pk92")}});return}if(l.value!=="IDLE"){o.setSupplyStatus(s.type,"IDLE"),n("pk92");return}n(),o.setSupplyStatus(s.type,"SELECT")};return(u,y)=>(O(),S("div",Ne,[x(K,{name:"fade"},{default:L(()=>[l.value!=="RECEIVE"?k((O(),S("i",{key:0,class:lt(["iconfont",[{active:l.value!=="IDLE"},l.value==="RUNNING"?"wzry-tingzhi":"wzry-kaiguan"]]),onClick:p},null,2)),[[e(A)]]):g("",!0)]),_:1}),Ie,x(K,{name:"fade"},{default:L(()=>[["SELECT","READY"].includes(l.value)?(O(),w(_e,{key:0,type:u.type},null,8,["type"])):g("",!0)]),_:1}),x(K,{name:"fade"},{default:L(()=>[k(x(Oe,{ref_key:"animateMoveRef",ref:r,type:u.type},null,8,["type"]),[[yt,l.value!=="IDLE"]])]),_:1}),x(K,{name:"fade"},{default:L(()=>[l.value==="RECEIVE"?(O(),w(Se,{key:0,type:u.type},null,8,["type"])):g("",!0)]),_:1})]))}}),Ae=U(Le,[["__scopeId","data-v-06b85493"]]);function Ce(t){const s=Et(),o=t==="HERO"?ot:nt,n=t==="HERO"?"hero_lucky":"skin_lucky",r=t==="HERO"?b.hero:b.skin,l={gift_index:M(0),crystal_index:M(st(r[0],r[1]))},{gift_index:p,crystal_index:u}=l;return{...l,...{getLotteryIndex(){if(s[n]===u.value){p.value=0,u.value=st(r[0],r[1]);return}const m=[];for(const[v,T]of Object.entries(o))for(let h=0;h<T;h++)m.push(Number(v));const a=$t(m),i=st(0,m.length-1),_=a[i];p.value=Q[t].findIndex(v=>v.id===_)}}}}const we=t=>{const s=pt(),o=Et(),n=B(),r=Ht(),{hero_supply_status:l,skin_supply_status:p}=tt(n),{resetHeroLuck:u,resetSkinLuck:y,saveGameData:m}=o,{gift_index:a,getLotteryIndex:i}=Ce(t),_=Q[t],v=t==="HERO"?u:y,T=t==="HERO"?l:p,h=t==="HERO"?"KING_CRYSTAL":"HONOR_CRYSTAL",z=t==="HERO"?"HERO_LOTTERY_STONE":"SKIN_LOTTERY_STONE",Y=t==="HERO"?"HERO_LOTTERY_COIN":"SKIN_LOTTERY_COIN";let N=!1;const $={gift_index:a,last_reward_position:M(0)},{last_reward_position:q}=$,H=R(()=>r.user_data.doubleGoldCardExpireTime!==0),P=R(()=>r.user_data.doubleExpCardExpireTime!==0),et={have_alone_free:R(()=>{const d=s.articles;return(t==="HERO"?d.HERO_LOTTERY_COIN:d.SKIN_LOTTERY_COIN)>=1}),have_multiple_free:R(()=>{const d=s.articles;return(t==="HERO"?d.HERO_LOTTERY_COIN:d.SKIN_LOTTERY_COIN)>=5}),have_alone_discount:R(()=>{const d=s.articles;return(t==="HERO"?d.HERO_LOTTERY_STONE:d.SKIN_LOTTERY_STONE)>0}),have_multiple_discount:R(()=>{const d=s.articles;return(t==="HERO"?d.HERO_LOTTERY_STONE:d.SKIN_LOTTERY_STONE)>=5})},{have_alone_free:ft,have_multiple_free:Rt,have_alone_discount:ht,have_multiple_discount:St}=et;return{...$,...et,...{getLotteryIndex:i,checkAloneNotCount(){return N?!0:!ft.value&&!ht.value?(X({text:W.yb85,confirm(){if(T.value==="IDLE"){n.setTimeMode(t,0),n.startCountdown(t);return}T.value==="RUNNING"&&xt(Yt.yz00,"warning")}}),!0):(N=!0,!1)},checkMultipleNotCount(d,E){return N?!0:(i(),!St.value&&d==="DEDUCTION"?(X({text:W.qv90,confirm(){setTimeout(()=>{E()},1250)}}),!0):!Rt.value&&d==="FREE"?(X({text:W.wr91,confirm(){setTimeout(()=>{E()},1250)}}),!0):(N=!0,!1))},setLastPosition(d){q.value=d},calcAloneReward(){N=!1,s.articles[Y]>0?s.setGamePropNum(Y,1,"SUB"):s.setGamePropNum(z,1,"SUB");let d=_[a.value].num;const E=_[a.value].type;E===h&&v(),E==="GOLD"&&H.value&&(d*=2),["HERO_EXP_ONE","HERO_EXP_TWO"].includes(E)&&P.value&&(d*=2),ct({name:G[E],num:d,icon:C(V[E])}),m()},calcMultipleReward(d){N=!1,s.articles[Y]>0?s.setGamePropNum(Y,5,"SUB"):s.setGamePropNum(z,5,"SUB");const E={};d.forEach(F=>{const f=_[F].type,D=_[F].num;E[f]??(E[f]=0),E[f]+=D||1});const rt=[];for(const F in E){const f=F;let D=E[f];f==="GOLD"&&H.value&&(D*=2),["HERO_EXP_ONE","HERO_EXP_TWO"].includes(f)&&P.value&&(D*=2),rt.push({num:D,name:G[f],key:f,icon:C(V[f])})}ct(rt),m()}}}};export{ge as L,Ae as S,we as u};
