import{o as fe,l as F,r as $,j as V,O as x,u as o,E as e,F as s,I as t,U as w,G as C,P as ge,V as T,J as N,Z as U,N as W,K as P,L as G,R as E,S as M,a6 as Y,H as S,a1 as pe,X as me}from"./wzry-wzry_vue-Lqzt6jH9.js";import{d as he,i as $e,_ as le,u as ye,A as ne,a as we,$ as Z,b as D,c as ke,M as j,e as xe,f as be,g as O,h as Le,j as Ee,k as ie,l as Ce,C as Te,v as ee,m as I,n as z,o as te,p as A,q as ce,N as Ie,r as re,K as J,B as Se,T as De,s as ze,t as Re,w as Ve,x as Fe,L as Ae,V as de,y as se,z as Be,D as oe,E as Me}from"./wzry-index-nFnvAaS0.js";import{g as Ne}from"./wzry-wzry_lodash-4gQjN7DL.js";import{d as ae}from"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_pinyin_pro-OgjkpRkC.js";import{K as je}from"./wzry-index-cSyZnMQz.js";import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_vuePlugin-oPsogQAT.js";import"./wzry-wzry_i18n-7NB47TbP.js";import"./wzry-wzry_vueuse-x4ay2o2y.js";var Oe=he,Ue=$e,Pe="Expected a function";function Ge(r,_,n){var i=!0,a=!0;if(typeof r!="function")throw new TypeError(Pe);return Ue(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),Oe(r,_,{leading:i,maxWait:_,trailing:a})}var Ke=Ge;const qe=Ne(Ke),He=r=>{const{browser_name:_}=ye();if(le||_==="safari")return;const i=qe(d=>{const{innerWidth:u,innerHeight:l}=window,p=Number(((d.pageX-u/2)/(u/2)).toFixed(2)),g=Number(((d.pageY-l/2)/(l/2)).toFixed(2));r(p,g)},50),a=d=>i(d);window.addEventListener("mousemove",a),window.addEventListener("touchmove",a),fe(()=>{window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a)})},Xe={mounted(r,_){r.addEventListener("dragover",n=>{var i,a;n.preventDefault(),(a=(i=_.value).enter)==null||a.call(i)}),r.addEventListener("dragleave",()=>{var n,i;(i=(n=_.value).leave)==null||i.call(n)}),r.addEventListener("drop",n=>{var a;n.preventDefault();const i=(a=n.dataTransfer)==null?void 0:a.items[0].getAsFile();_.value.getFile(i)})}},K=r=>(P("data-v-084bbfe5"),r=r(),G(),r),We={class:"logo-box"},Ye=["src"],Ze=["data-text"],Je={for:"file",class:"label"},Qe=K(()=>t("i",{class:"iconfont wzry-chaka"},null,-1)),et={class:"text"},tt=K(()=>t("div",{class:"select"},"点击选择卡片文件",-1)),st={key:0,class:"tip"},ot=["src"],at={class:"username"},lt={key:1,class:"text"},nt={class:"demo"},it=K(()=>t("span",{class:"text"},"登录",-1)),ct=K(()=>t("span",{class:"desc"},"LOGIN",-1)),rt=["src"],dt=F({__name:"index",setup(r){const{playAudio:_}=ie(),n=$(),i=ne(),a=$(!0),d=$(!1),u=$(!1),l=$();He((c,h)=>{n.value&&(n.value.style.transform=`translate(-50%, -50%) rotateX(${h*10}deg) rotateY(${-c*10}deg)`)});const p=V(()=>a.value?d.value?"松开解析卡片":"请放置召唤师卡":"欢迎登录"),g=()=>{d.value=!0},m=()=>{d.value=!1},L=c=>{R(c),m()},R=c=>{let h,b;if(c instanceof Event?(b=c.target,h=b.files[0]):h=c,h.name.endsWith(".wzry")){const B=new FileReader;B.onload=H=>{const ue=H.target.result.toString();try{if(l.value=we(ue),l.value.isDev){D(Z("mg14",{v:"开发"}),"error");return}const X=()=>{xe({title:"读取召唤师卡",placeholder:"请输入密码",confirm(_e,ve){var Q;_e===l.value.password?(a.value=!1,ve(),D(`${ke}，${(Q=l.value)==null?void 0:Q.username}`)):(D(j.rh43,"error"),X())}})};X()}catch{D(j.by88,"error")}b&&(b.value="")},B.readAsText(h)}else D(j.ai11,"error")},f=async()=>{const c=Ce();c.avatar=await be(O("head")),c.username="召唤师",c.password="123456",c.id=Le.encode(ae().valueOf().toString()),c.createTime=ae().valueOf(),c.isDev=!1,D(j.fh97),i.login(c),_("e84n")},k=()=>{Ee({text:Te.wi59,confirm(){a.value=!0,l.value=void 0}})},v=()=>{l.value&&(i.login(l.value),_("e84n"))};return(c,h)=>{var b,B;return x((e(),s("div",{ref_key:"RegLoginRef",ref:n,class:"reg-login"},[x((e(),s("div",We,[t("img",{class:"logo",src:o(O)("login_logo"),alt:"logo"},null,8,Ye)])),[[o(ee),{down:!0,colors:["#EFD68F","#E0B34E"]}]]),t("div",{class:"title","data-text":p.value},w(p.value),9,Ze),a.value?(e(),s(C,{key:0},[x(t("input",{id:"file",type:"file",onChange:R},null,544),[[ge,!1]]),x((e(),s("label",Je,[Qe,t("div",et,[tt,o(le)?T("",!0):(e(),s("div",st,"支持拖拽文件到此处"))])])),[[o(I),{text:o(z).g9x6}]])],64)):(e(),s("div",{key:1,class:N(["card-info",{del:u.value}]),onClick:k,onMouseenter:h[0]||(h[0]=H=>u.value=!0),onMouseleave:h[1]||(h[1]=H=>u.value=!1)},[u.value?x((e(),s("div",lt,[U("换卡")])),[[o(I)]]):(e(),s(C,{key:0},[t("img",{src:(b=l.value)==null?void 0:b.avatar,alt:"",class:"avatar"},null,8,ot),t("div",at,w((B=l.value)==null?void 0:B.username),1)],64))],34)),x((e(),s("div",nt,[U(" 没有卡片？点击此处生成 ")])),[[o(te),f],[o(I),{text:o(z).xj79}]]),a.value?T("",!0):x((e(),s("div",{key:2,class:"into-btn",style:W({backgroundImage:`url(${o(O)("login_btn")})`})},[it,ct,t("img",{class:"bg",src:o(O)("login_btn"),alt:""},null,8,rt)],4)),[[o(ee),{colors:["#986B33","#CEA64E"]}],[o(te),v]])])),[[o(Xe),{getFile:L,enter:g,leave:m}]])}}}),ut=A(dt,[["__scopeId","data-v-084bbfe5"]]),_t=["innerHTML"],vt=F({__name:"index",setup(r){const _=$(""),n=$(!0);return ce({promiseFn:Ie}).then(i=>{_.value=i.data}).catch(()=>{D(Z("rc53",{v:"系统公告"}),"error")}).finally(()=>{n.value=!1}),(i,a)=>(e(),E(o(J),Y({loading:n.value},i.$attrs,{width:"56.25rem",header:"系统公告",onClose:a[0]||(a[0]=d=>n.value=!0)}),{default:M(()=>[x(t("div",{class:"notice",innerHTML:_.value},null,8,_t),[[o(re)]])]),_:1},16,["loading"]))}}),ft=A(vt,[["__scopeId","data-v-1ba77582"]]),gt=["src","onClick"],pt=F({__name:"index",setup(r){const _=$(),n=$(!0),i=$([]);ce({promiseFn:De}).then(d=>{n.value=!1,i.value=d.data.map(u=>u.map(l=>Se.IMGBED+l))}).catch(()=>{D(Z("rc53",{v:"系统公告"}),"error")}).finally(()=>{n.value=!1});const a=(d,u)=>{Re({parent:d.target,type:"DEFAULT",bigImage:u[0],blurImage:u[1]})};return(d,u)=>(e(),E(o(J),Y({loading:n.value},d.$attrs,{width:"56.25rem",header:"本站开发者战绩"}),{default:M(()=>[t("div",{ref_key:"teamRef",ref:_,class:"team"},[(e(!0),s(C,null,S(i.value,(l,p)=>x((e(),s("img",{key:p,src:l[1],alt:"",onClick:g=>a(g,l)},null,8,gt)),[[o(ze),{img:l[0]}],[o(I),{text:o(z).zq77}]])),128))],512)]),_:1},16,["loading"]))}}),mt=A(pt,[["__scopeId","data-v-b3c6fdf8"]]),y=r=>(P("data-v-7bf7407c"),r=r(),G(),r),ht={class:"tool"},$t=y(()=>t("div",{class:"line"},null,-1)),yt=y(()=>t("span",{class:"text"},"静音",-1)),wt=y(()=>t("div",{class:"base"},null,-1)),kt={class:"tool"},xt=y(()=>t("div",{class:"line"},null,-1)),bt=y(()=>t("i",{class:"iconfont wzry-readme"},null,-1)),Lt=y(()=>t("span",{class:"text"},"介绍",-1)),Et=[bt,Lt],Ct=y(()=>t("div",{class:"base"},null,-1)),Tt={class:"tool"},It=y(()=>t("div",{class:"line"},null,-1)),St=y(()=>t("i",{class:"iconfont wzry-gonggao"},null,-1)),Dt=y(()=>t("span",{class:"text"},"公告",-1)),zt=[St,Dt],Rt=y(()=>t("div",{class:"base"},null,-1)),Vt={class:"tool"},Ft=y(()=>t("div",{class:"line"},null,-1)),At=y(()=>t("i",{class:"iconfont wzry-updateLog"},null,-1)),Bt=y(()=>t("span",{class:"text"},"更新",-1)),Mt=[At,Bt],Nt=y(()=>t("div",{class:"base"},null,-1)),jt={class:"tool"},Ot=y(()=>t("div",{class:"line"},null,-1)),Ut=y(()=>t("i",{class:"iconfont wzry-youxi"},null,-1)),Pt=y(()=>t("span",{class:"text"},"战绩",-1)),Gt=[Ut,Pt],Kt=y(()=>t("div",{class:"base"},null,-1)),qt=F({__name:"index",emits:["clicks"],setup(r,{expose:_,emit:n}){const i=n,{playAudio:a}=ie(),d=$(),u=$(!1),l=V(()=>u.value?"wzry-jingyin-mianxing":"wzry-laba-mianxing"),p=g=>{g==="sound"&&(a("n4r4"),u.value=!u.value),g==="readme"&&a("n4r4"),i("clicks",g)};return _({_el:d}),(g,m)=>(e(),s("div",{ref_key:"toolbarRef",ref:d,class:"tool-bar"},[t("div",ht,[$t,x((e(),s("div",{class:N(["box muted",{active:u.value}]),style:W({opacity:u.value?.75:1}),onClick:m[0]||(m[0]=L=>p("sound"))},[t("i",{class:N(["iconfont",l.value])},null,2),yt],6)),[[o(I),{text:o(z).ak79}]]),wt]),t("div",kt,[xt,x((e(),s("div",{class:"box elastic",onClick:m[1]||(m[1]=L=>p("readme"))},Et)),[[o(I),{text:o(z).b6v2}]]),Ct]),t("div",Tt,[It,x((e(),s("div",{class:"box elastic",onClick:m[2]||(m[2]=L=>p("notice"))},zt)),[[o(I),{text:o(z).br37}]]),Rt]),t("div",Vt,[Ft,x((e(),s("div",{class:"box elastic",onClick:m[3]||(m[3]=L=>p("update"))},Mt)),[[o(I),{text:o(z).fr70}]]),Nt]),t("div",jt,[Ot,x((e(),s("div",{class:"box elastic",onClick:m[4]||(m[4]=L=>p("team"))},Gt)),[[o(I),{text:o(z).c1g6}]]),Kt])],512))}}),Ht=A(qt,[["__scopeId","data-v-7bf7407c"]]),Xt=r=>(P("data-v-cdd38cef"),r=r(),G(),r),Wt={class:"down-load"},Yt={class:"download-list"},Zt=Xt(()=>t("div",{class:"title"},"下载列表",-1)),Jt={class:"down-load__bar"},Qt={class:"down-load__desc"},es={class:"text"},ts={class:"num"},ss=F({__name:"index",props:{finish:{type:Boolean,required:!0},finishModifiers:{}},emits:["update:finish"],setup(r){const _=pe(r,"finish"),n=ne(),{zip_key_name:i,zip_name:a,downloaded_index:d,zip_size:u,zip_downloaded_size:l,zip_download_progress:p,zip_download_finish:g,zip_decompression_progress:m,zip_decompression_finish:L,getZipList:R}=Ve(),f=V(()=>v=>{let c="",h="",b="";if(!g.value){if(c=p.value,h=`正在下载${a.value}`,b=`${l.value}/${u.value}`,v==="进度条")return c;if(v==="下载内容")return h;if(v==="进度信息")return b}if(!L.value){if(c=m.value,h=`正在解压${a.value}`,b=m.value,v==="进度条")return c;if(v==="下载内容")return h;if(v==="进度信息")return b}if(v==="下载内容")return"加载完毕，祝你体验愉快。"});return(async()=>{await R(),await Fe(1e3),_.value=!0,!!localStorage.getItem(Ae.USER_DATA)&&n.autoLogin()})(),(v,c)=>(e(),s("div",Wt,[t("div",Yt,[Zt,(e(!0),s(C,null,S(Object.values(o(i)),(h,b)=>(e(),s("div",{key:b,class:N(["download-item",{downloaded:o(d)>b,downloading:o(a)===h}])},w(b+1)+"、"+w(h),3))),128))]),t("div",Jt,[t("div",{class:"progress",style:W({width:f.value("进度条")})},null,4)]),t("div",Qt,[t("div",es,w(f.value("下载内容")),1),t("div",ts,w(f.value("进度信息")),1)])]))}}),os=A(ss,[["__scopeId","data-v-cdd38cef"]]),q=r=>(P("data-v-f7f3feea"),r=r(),G(),r),as={class:"update-log"},ls={class:"main"},ns=q(()=>t("h1",null,"一、新增特性",-1)),is={key:0,class:"log-list"},cs={class:"time"},rs={key:1,class:"empty"},ds=q(()=>t("h1",null,"二、功能优化",-1)),us={key:2,class:"log-list"},_s={class:"time"},vs={key:3,class:"empty"},fs=q(()=>t("h1",null,"三、样式优化",-1)),gs={key:4,class:"log-list"},ps={class:"time"},ms={key:5,class:"empty"},hs=q(()=>t("h1",null,"四、BUG修复",-1)),$s={key:6,class:"log-list"},ys={class:"time"},ws={key:7,class:"empty"},ks=F({__name:"index",emits:["close"],setup(r,{emit:_}){const n=_,i=de(),a=$(),d=V(()=>i.data_status),u=V(()=>i.dist_status),l=V(()=>i.update_log),p=()=>{i.updateAll(!0)},g=()=>{var L;i.updateAll(),(L=a.value)==null||L._close()},m=()=>{i.setShowLog(!1),n("close")};return(L,R)=>(e(),E(J,Y({ref_key:"kDialogRef",ref:a,"show-close":!d.value&&!u.value},L.$attrs,{width:"57.5rem",header:"更新日志",desc:l.value.time,onClose:m}),{default:M(()=>[t("div",as,[x((e(),s("div",ls,[ns,l.value.updateLog.new.length?(e(),s("div",is,[(e(!0),s(C,null,S(l.value.updateLog.new,(f,k)=>(e(),s("div",{key:k,class:"log-item"},[t("div",cs,"·"+w(f.time),1),(e(!0),s(C,null,S(f.log,(v,c)=>(e(),s("p",{key:c,class:"text"},w(c+1)+"、"+w(v),1))),128))]))),128))])):(e(),s("p",rs,"暂无")),ds,l.value.updateLog.function.length?(e(),s("div",us,[(e(!0),s(C,null,S(l.value.updateLog.function,(f,k)=>(e(),s("div",{key:k,class:"log-item"},[t("div",_s,"·"+w(f.time),1),(e(!0),s(C,null,S(f.log,(v,c)=>(e(),s("p",{key:c,class:"text"},w(c+1)+"、"+w(v),1))),128))]))),128))])):(e(),s("p",vs,"暂无")),fs,l.value.updateLog.style.length?(e(),s("div",gs,[(e(!0),s(C,null,S(l.value.updateLog.style,(f,k)=>(e(),s("div",{key:k,class:"log-item"},[t("div",ps,"·"+w(f.time),1),(e(!0),s(C,null,S(f.log,(v,c)=>(e(),s("p",{key:c,class:"text"},w(c+1)+"、"+w(v),1))),128))]))),128))])):(e(),s("p",ms,"暂无")),hs,l.value.updateLog.bug.length?(e(),s("div",$s,[(e(!0),s(C,null,S(l.value.updateLog.bug,(f,k)=>(e(),s("div",{key:k,class:"log-item"},[t("div",ys,"·"+w(f.time),1),(e(!0),s(C,null,S(f.log,(v,c)=>(e(),s("p",{key:c,class:"text"},w(c+1)+"、"+w(v),1))),128))]))),128))])):(e(),s("p",ws,"暂无"))])),[[o(re)]]),u.value?x((e(),E(se,{key:0,type:"warning",onClick:p},{default:M(()=>[U(" 更新并重启 ")]),_:1})),[[o(I)]]):d.value?x((e(),E(se,{key:1,onClick:g},{default:M(()=>[U("确定")]),_:1})),[[o(I)]]):T("",!0)])]),_:1},16,["show-close","desc"]))}}),xs=A(ks,[["__scopeId","data-v-f7f3feea"]]),bs={class:"login"},Ls={class:"login__logo"},Es=["src"],Cs=["src"],Ts=F({__name:"index",setup(r){const _=de(),{video_home_version:n,load:i}=Be(),a=$(!1),d=$(!1),u=$(!1),l=$(!1),p=$(!1),g=$(!1),m=V(()=>!g.value||d.value||l.value);_.getVersion().then(()=>{p.value=!0}).catch(i);const L=()=>{p.value=!0,u.value=!1},R=f=>{f==="readme"&&open("https://juejin.cn/post/7373937820177940518"),f==="sound"&&(a.value=!a.value),d.value=f==="notice",l.value=f==="team",u.value=f==="update"};return setTimeout(()=>{d.value=!0},1e3),(f,k)=>(e(),s("div",bs,[t("div",Ls,[t("img",{src:o(oe)("logo"),alt:""},null,8,Es)]),g.value?(e(),E(ut,{key:0,class:N({"hide-reg-login":m.value})},null,8,["class"])):T("",!0),g.value?(e(),E(Ht,{key:1,onClicks:R})):T("",!0),d.value&&g.value?(e(),E(ft,{key:2,modelValue:d.value,"onUpdate:modelValue":k[0]||(k[0]=v=>d.value=v)},null,8,["modelValue"])):T("",!0),l.value?(e(),E(mt,{key:3,modelValue:l.value,"onUpdate:modelValue":k[1]||(k[1]=v=>l.value=v)},null,8,["modelValue"])):T("",!0),!g.value&&p.value?(e(),E(os,{key:4,finish:g.value,"onUpdate:finish":k[2]||(k[2]=v=>g.value=v)},null,8,["finish"])):T("",!0),(e(),E(me,{to:"body"},[o(_).show_update||u.value?(e(),E(xs,{key:0,onClose:L})):T("",!0)])),o(n)?(e(),s("img",{key:5,class:"bg",src:o(oe)("login_bg",o(n),"jpg"),alt:""},null,8,Cs)):T("",!0),g.value&&o(n)?(e(),E(o(je),{key:6,link:o(Me)("login_bg",o(n)),muted:a.value},null,8,["link","muted"])):T("",!0)]))}}),Ns=A(Ts,[["__scopeId","data-v-96df2c9d"]]);export{Ns as default};
