import{o as fe,l as V,r as $,j as F,O as x,u as o,E as e,F as s,I as t,U as w,G as C,P as ge,V as I,J as O,Z as j,N as W,K as P,L as G,R as E,S as N,a6 as Y,H as S,a1 as me,X as pe}from"./wzry-wzry_vue-Lqzt6jH9.js";import{d as he,i as $e,_ as le,u as ye,A as ne,a as we,$ as Z,b as D,c as ke,M,e as xe,f as be,g as U,h as Le,j as Ee,k as ie,l as Ce,C as Ie,v as ee,m as T,n as z,o as te,p as A,q as re,N as Te,r as ce,K as J,B as Se,T as De,s as ze,t as Re,w as Fe,x as Ve,L as Ae,V as de,y as se,z as Be,D as oe,E as Me,F as Ne}from"./wzry-index-G5nCmP-f.js";import{g as Oe}from"./wzry-wzry_lodash-4gQjN7DL.js";import{d as ae}from"./wzry-wzry_dayjs-p57Mk9r_.js";import"./wzry-wzry_pinyin_pro-OgjkpRkC.js";import{K as Ue}from"./wzry-index-DA1tXvRz.js";import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_vuePlugin-oPsogQAT.js";import"./wzry-wzry_i18n-7NB47TbP.js";import"./wzry-wzry_vueuse-UANoZhwW.js";var je=he,Pe=$e,Ge="Expected a function";function Ke(c,_,n){var i=!0,a=!0;if(typeof c!="function")throw new TypeError(Ge);return Pe(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),je(c,_,{leading:i,maxWait:_,trailing:a})}var He=Ke;const qe=Oe(He),Xe=c=>{const{browser_name:_}=ye();if(le||_==="safari")return;const i=qe(d=>{const{innerWidth:u,innerHeight:l}=window,m=Number(((d.pageX-u/2)/(u/2)).toFixed(2)),g=Number(((d.pageY-l/2)/(l/2)).toFixed(2));c(m,g)},50),a=d=>i(d);window.addEventListener("mousemove",a),window.addEventListener("touchmove",a),fe(()=>{window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a)})},We={mounted(c,_){c.addEventListener("dragover",n=>{var i,a;n.preventDefault(),(a=(i=_.value).enter)==null||a.call(i)}),c.addEventListener("dragleave",()=>{var n,i;(i=(n=_.value).leave)==null||i.call(n)}),c.addEventListener("drop",n=>{var a;n.preventDefault();const i=(a=n.dataTransfer)==null?void 0:a.items[0].getAsFile();_.value.getFile(i)})}},K=c=>(P("data-v-7d3e64cc"),c=c(),G(),c),Ye={class:"logo-box"},Ze=["src"],Je=["data-text"],Qe={for:"file",class:"label"},et=K(()=>t("i",{class:"iconfont wzry-chaka"},null,-1)),tt={class:"text"},st=K(()=>t("div",{class:"select"},"点击选择卡片文件",-1)),ot={key:0,class:"tip"},at=["src"],lt={class:"username"},nt={key:1,class:"text"},it={class:"demo"},rt=K(()=>t("span",{class:"text"},"登录",-1)),ct=K(()=>t("span",{class:"desc"},"LOGIN",-1)),dt=["src"],ut=V({__name:"index",setup(c){const{playAudio:_}=ie(),n=$(),i=ne(),a=$(!0),d=$(!1),u=$(!1),l=$();Xe((r,h)=>{n.value&&(n.value.style.transform=`translate(-50%, -50%) rotateX(${h*10}deg) rotateY(${-r*10}deg)`)});const m=F(()=>a.value?d.value?"松开解析卡片":"请放置召唤师卡":"欢迎登录"),g=()=>{d.value=!0},p=()=>{d.value=!1},L=r=>{R(r),p()},R=r=>{let h,b;if(r instanceof Event?(b=r.target,h=b.files[0]):h=r,h.name.endsWith(".wzry")){const B=new FileReader;B.onload=q=>{const ue=q.target.result.toString();try{if(l.value=we(ue),l.value.isDev){D(Z("mg14",{v:"开发"}),"error");return}const X=()=>{xe({title:"读取召唤师卡",placeholder:"请输入密码",confirm(_e,ve){var Q;_e===l.value.password?(a.value=!1,ve(),D(`${ke}，${(Q=l.value)==null?void 0:Q.username}`)):(D(M.rh43,"error"),X())}})};X()}catch{D(M.by88,"error")}b&&(b.value="")},B.readAsText(h)}else D(M.ai11,"error")},f=async()=>{const r=Ce();r.avatar=await be(U("head")),r.username="召唤师",r.password="123456",r.id=Le.encode(ae().valueOf().toString()),r.createTime=ae().valueOf(),r.isDev=!1,D(M.fh97),i.login(r),_("e84n")},k=()=>{Ee({text:Ie.wi59,confirm(){a.value=!0,l.value=void 0}})},v=()=>{if(l.value){if(l.value.isInvalid){D(M.uf04,"error");return}i.login(l.value),_("e84n")}};return(r,h)=>{var b,B;return x((e(),s("div",{ref_key:"RegLoginRef",ref:n,class:"reg-login"},[x((e(),s("div",Ye,[t("img",{class:"logo",src:o(U)("login_logo"),alt:"logo"},null,8,Ze)])),[[o(ee),{down:!0,colors:["#EFD68F","#E0B34E"]}]]),t("div",{class:"title","data-text":m.value},w(m.value),9,Je),a.value?(e(),s(C,{key:0},[x(t("input",{id:"file",type:"file",onChange:R},null,544),[[ge,!1]]),x((e(),s("label",Qe,[et,t("div",tt,[st,o(le)?I("",!0):(e(),s("div",ot,"支持拖拽文件到此处"))])])),[[o(T),{text:o(z).g9x6}]])],64)):(e(),s("div",{key:1,class:O(["card-info",{del:u.value}]),onClick:k,onMouseenter:h[0]||(h[0]=q=>u.value=!0),onMouseleave:h[1]||(h[1]=q=>u.value=!1)},[u.value?x((e(),s("div",nt,[j("换卡")])),[[o(T)]]):(e(),s(C,{key:0},[t("img",{src:(b=l.value)==null?void 0:b.avatar,alt:"",class:"avatar"},null,8,at),t("div",lt,w((B=l.value)==null?void 0:B.username),1)],64))],34)),x((e(),s("div",it,[j(" 没有卡片？点击此处生成 ")])),[[o(te),f],[o(T),{text:o(z).xj79}]]),a.value?I("",!0):x((e(),s("div",{key:2,class:"into-btn",style:W({backgroundImage:`url(${o(U)("login_btn")})`})},[rt,ct,t("img",{class:"bg",src:o(U)("login_btn"),alt:""},null,8,dt)],4)),[[o(ee),{colors:["#986B33","#CEA64E"]}],[o(te),v]])])),[[o(We),{getFile:L,enter:g,leave:p}]])}}}),_t=A(ut,[["__scopeId","data-v-7d3e64cc"]]),vt=["innerHTML"],ft=V({__name:"index",setup(c){const _=$(""),n=$(!0);return re({promiseFn:Te}).then(i=>{_.value=i.data}).catch(()=>{D(Z("rc53",{v:"系统公告"}),"error")}).finally(()=>{n.value=!1}),(i,a)=>(e(),E(o(J),Y({loading:n.value},i.$attrs,{width:"56.25rem",header:"系统公告",onClose:a[0]||(a[0]=d=>n.value=!0)}),{default:N(()=>[x(t("div",{class:"notice",innerHTML:_.value},null,8,vt),[[o(ce)]])]),_:1},16,["loading"]))}}),gt=A(ft,[["__scopeId","data-v-1ba77582"]]),mt=["src","onClick"],pt=V({__name:"index",setup(c){const _=$(),n=$(!0),i=$([]);re({promiseFn:De}).then(d=>{n.value=!1,i.value=d.data.map(u=>u.map(l=>Se.IMGBED+l))}).catch(()=>{D(Z("rc53",{v:"系统公告"}),"error")}).finally(()=>{n.value=!1});const a=(d,u)=>{Re({parent:d.target,type:"DEFAULT",bigImage:u[0],blurImage:u[1]})};return(d,u)=>(e(),E(o(J),Y({loading:n.value},d.$attrs,{width:"56.25rem",header:"本站开发者战绩"}),{default:N(()=>[t("div",{ref_key:"teamRef",ref:_,class:"team"},[(e(!0),s(C,null,S(i.value,(l,m)=>x((e(),s("img",{key:m,src:l[1],alt:"",onClick:g=>a(g,l)},null,8,mt)),[[o(ze),{img:l[0]}],[o(T),{text:o(z).zq77}]])),128))],512)]),_:1},16,["loading"]))}}),ht=A(pt,[["__scopeId","data-v-b3c6fdf8"]]),y=c=>(P("data-v-7bf7407c"),c=c(),G(),c),$t={class:"tool"},yt=y(()=>t("div",{class:"line"},null,-1)),wt=y(()=>t("span",{class:"text"},"静音",-1)),kt=y(()=>t("div",{class:"base"},null,-1)),xt={class:"tool"},bt=y(()=>t("div",{class:"line"},null,-1)),Lt=y(()=>t("i",{class:"iconfont wzry-readme"},null,-1)),Et=y(()=>t("span",{class:"text"},"介绍",-1)),Ct=[Lt,Et],It=y(()=>t("div",{class:"base"},null,-1)),Tt={class:"tool"},St=y(()=>t("div",{class:"line"},null,-1)),Dt=y(()=>t("i",{class:"iconfont wzry-gonggao"},null,-1)),zt=y(()=>t("span",{class:"text"},"公告",-1)),Rt=[Dt,zt],Ft=y(()=>t("div",{class:"base"},null,-1)),Vt={class:"tool"},At=y(()=>t("div",{class:"line"},null,-1)),Bt=y(()=>t("i",{class:"iconfont wzry-updateLog"},null,-1)),Mt=y(()=>t("span",{class:"text"},"更新",-1)),Nt=[Bt,Mt],Ot=y(()=>t("div",{class:"base"},null,-1)),Ut={class:"tool"},jt=y(()=>t("div",{class:"line"},null,-1)),Pt=y(()=>t("i",{class:"iconfont wzry-youxi"},null,-1)),Gt=y(()=>t("span",{class:"text"},"战绩",-1)),Kt=[Pt,Gt],Ht=y(()=>t("div",{class:"base"},null,-1)),qt=V({__name:"index",emits:["clicks"],setup(c,{expose:_,emit:n}){const i=n,{playAudio:a}=ie(),d=$(),u=$(!1),l=F(()=>u.value?"wzry-jingyin-mianxing":"wzry-laba-mianxing"),m=g=>{g==="sound"&&(a("n4r4"),u.value=!u.value),g==="readme"&&a("n4r4"),i("clicks",g)};return _({_el:d}),(g,p)=>(e(),s("div",{ref_key:"toolbarRef",ref:d,class:"tool-bar"},[t("div",$t,[yt,x((e(),s("div",{class:O(["box muted",{active:u.value}]),style:W({opacity:u.value?.75:1}),onClick:p[0]||(p[0]=L=>m("sound"))},[t("i",{class:O(["iconfont",l.value])},null,2),wt],6)),[[o(T),{text:o(z).ak79}]]),kt]),t("div",xt,[bt,x((e(),s("div",{class:"box elastic",onClick:p[1]||(p[1]=L=>m("readme"))},Ct)),[[o(T),{text:o(z).b6v2}]]),It]),t("div",Tt,[St,x((e(),s("div",{class:"box elastic",onClick:p[2]||(p[2]=L=>m("notice"))},Rt)),[[o(T),{text:o(z).br37}]]),Ft]),t("div",Vt,[At,x((e(),s("div",{class:"box elastic",onClick:p[3]||(p[3]=L=>m("update"))},Nt)),[[o(T),{text:o(z).fr70}]]),Ot]),t("div",Ut,[jt,x((e(),s("div",{class:"box elastic",onClick:p[4]||(p[4]=L=>m("team"))},Kt)),[[o(T),{text:o(z).c1g6}]]),Ht])],512))}}),Xt=A(qt,[["__scopeId","data-v-7bf7407c"]]),Wt=c=>(P("data-v-cdd38cef"),c=c(),G(),c),Yt={class:"down-load"},Zt={class:"download-list"},Jt=Wt(()=>t("div",{class:"title"},"下载列表",-1)),Qt={class:"down-load__bar"},es={class:"down-load__desc"},ts={class:"text"},ss={class:"num"},os=V({__name:"index",props:{finish:{type:Boolean,required:!0},finishModifiers:{}},emits:["update:finish"],setup(c){const _=me(c,"finish"),n=ne(),{zip_key_name:i,zip_name:a,downloaded_index:d,zip_size:u,zip_downloaded_size:l,zip_download_progress:m,zip_download_finish:g,zip_decompression_progress:p,zip_decompression_finish:L,getZipList:R}=Fe(),f=F(()=>v=>{let r="",h="",b="";if(!g.value){if(r=m.value,h=`正在下载${a.value}`,b=`${l.value}/${u.value}`,v==="进度条")return r;if(v==="下载内容")return h;if(v==="进度信息")return b}if(!L.value){if(r=p.value,h=`正在解压${a.value}`,b=p.value,v==="进度条")return r;if(v==="下载内容")return h;if(v==="进度信息")return b}if(v==="下载内容")return"加载完毕，祝你体验愉快。"});return(async()=>{await R(),await Ve(1e3),_.value=!0,!!localStorage.getItem(Ae.USER_DATA)&&n.autoLogin()})(),(v,r)=>(e(),s("div",Yt,[t("div",Zt,[Jt,(e(!0),s(C,null,S(Object.values(o(i)),(h,b)=>(e(),s("div",{key:b,class:O(["download-item",{downloaded:o(d)>b,downloading:o(a)===h}])},w(b+1)+"、"+w(h),3))),128))]),t("div",Qt,[t("div",{class:"progress",style:W({width:f.value("进度条")})},null,4)]),t("div",es,[t("div",ts,w(f.value("下载内容")),1),t("div",ss,w(f.value("进度信息")),1)])]))}}),as=A(os,[["__scopeId","data-v-cdd38cef"]]),H=c=>(P("data-v-f7f3feea"),c=c(),G(),c),ls={class:"update-log"},ns={class:"main"},is=H(()=>t("h1",null,"一、新增特性",-1)),rs={key:0,class:"log-list"},cs={class:"time"},ds={key:1,class:"empty"},us=H(()=>t("h1",null,"二、功能优化",-1)),_s={key:2,class:"log-list"},vs={class:"time"},fs={key:3,class:"empty"},gs=H(()=>t("h1",null,"三、样式优化",-1)),ms={key:4,class:"log-list"},ps={class:"time"},hs={key:5,class:"empty"},$s=H(()=>t("h1",null,"四、BUG修复",-1)),ys={key:6,class:"log-list"},ws={class:"time"},ks={key:7,class:"empty"},xs=V({__name:"index",emits:["close"],setup(c,{emit:_}){const n=_,i=de(),a=$(),d=F(()=>i.data_status),u=F(()=>i.dist_status),l=F(()=>i.update_log),m=()=>{i.updateAll(!0)},g=()=>{var L;i.updateAll(),(L=a.value)==null||L._close()},p=()=>{i.setShowLog(!1),n("close")};return(L,R)=>(e(),E(J,Y({ref_key:"kDialogRef",ref:a,"show-close":!d.value&&!u.value},L.$attrs,{width:"57.5rem",header:"更新日志",desc:l.value.time,onClose:p}),{default:N(()=>[t("div",ls,[x((e(),s("div",ns,[is,l.value.updateLog.new.length?(e(),s("div",rs,[(e(!0),s(C,null,S(l.value.updateLog.new,(f,k)=>(e(),s("div",{key:k,class:"log-item"},[t("div",cs,"·"+w(f.time),1),(e(!0),s(C,null,S(f.log,(v,r)=>(e(),s("p",{key:r,class:"text"},w(r+1)+"、"+w(v),1))),128))]))),128))])):(e(),s("p",ds,"暂无")),us,l.value.updateLog.function.length?(e(),s("div",_s,[(e(!0),s(C,null,S(l.value.updateLog.function,(f,k)=>(e(),s("div",{key:k,class:"log-item"},[t("div",vs,"·"+w(f.time),1),(e(!0),s(C,null,S(f.log,(v,r)=>(e(),s("p",{key:r,class:"text"},w(r+1)+"、"+w(v),1))),128))]))),128))])):(e(),s("p",fs,"暂无")),gs,l.value.updateLog.style.length?(e(),s("div",ms,[(e(!0),s(C,null,S(l.value.updateLog.style,(f,k)=>(e(),s("div",{key:k,class:"log-item"},[t("div",ps,"·"+w(f.time),1),(e(!0),s(C,null,S(f.log,(v,r)=>(e(),s("p",{key:r,class:"text"},w(r+1)+"、"+w(v),1))),128))]))),128))])):(e(),s("p",hs,"暂无")),$s,l.value.updateLog.bug.length?(e(),s("div",ys,[(e(!0),s(C,null,S(l.value.updateLog.bug,(f,k)=>(e(),s("div",{key:k,class:"log-item"},[t("div",ws,"·"+w(f.time),1),(e(!0),s(C,null,S(f.log,(v,r)=>(e(),s("p",{key:r,class:"text"},w(r+1)+"、"+w(v),1))),128))]))),128))])):(e(),s("p",ks,"暂无"))])),[[o(ce)]]),u.value?x((e(),E(se,{key:0,type:"warning",onClick:m},{default:N(()=>[j(" 更新并重启 ")]),_:1})),[[o(T)]]):d.value?x((e(),E(se,{key:1,onClick:g},{default:N(()=>[j("确定")]),_:1})),[[o(T)]]):I("",!0)])]),_:1},16,["show-close","desc"]))}}),bs=A(xs,[["__scopeId","data-v-f7f3feea"]]),Ls={class:"login"},Es={class:"login__logo"},Cs=["src"],Is=["src"],Ts=V({__name:"index",setup(c){const _=de(),{video_home_version:n,load:i}=Be(),a=$(!1),d=$(!1),u=$(!1),l=$(!1),m=$(!1),g=$(!1),p=F(()=>!g.value||d.value||l.value);_.getVersion().then(()=>{m.value=!0}).catch(i);const L=()=>{m.value=!0,u.value=!1},R=f=>{f==="readme"&&open(Ne("readme")),f==="sound"&&(a.value=!a.value),d.value=f==="notice",l.value=f==="team",u.value=f==="update"};return setTimeout(()=>{d.value=!0},1e3),(f,k)=>(e(),s("div",Ls,[t("div",Es,[t("img",{src:o(oe)("logo"),alt:""},null,8,Cs)]),g.value?(e(),E(_t,{key:0,class:O({"hide-reg-login":p.value})},null,8,["class"])):I("",!0),g.value?(e(),E(Xt,{key:1,onClicks:R})):I("",!0),d.value&&g.value?(e(),E(gt,{key:2,modelValue:d.value,"onUpdate:modelValue":k[0]||(k[0]=v=>d.value=v)},null,8,["modelValue"])):I("",!0),l.value?(e(),E(ht,{key:3,modelValue:l.value,"onUpdate:modelValue":k[1]||(k[1]=v=>l.value=v)},null,8,["modelValue"])):I("",!0),!g.value&&m.value?(e(),E(as,{key:4,finish:g.value,"onUpdate:finish":k[2]||(k[2]=v=>g.value=v)},null,8,["finish"])):I("",!0),(e(),E(pe,{to:"body"},[o(_).show_update||u.value?(e(),E(bs,{key:0,onClose:L})):I("",!0)])),o(n)?(e(),s("img",{key:5,class:"bg",src:o(oe)("login_bg",o(n),"jpg"),alt:""},null,8,Is)):I("",!0),g.value&&o(n)?(e(),E(o(Ue),{key:6,link:o(Me)("login_bg",o(n)),muted:a.value},null,8,["link","muted"])):I("",!0)]))}}),Os=A(Ts,[["__scopeId","data-v-d466a23b"]]);export{Os as default};