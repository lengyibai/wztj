import{l as F,r as y,v as ge,j as A,M as b,u as o,C as e,D as t,G as s,S as w,F as C,N as pe,T as I,H as U,X as G,L as Y,I as P,J as K,P as E,Q as O,a4 as Z,E as D,$ as me,V as he}from"./wzry-wzry_vue-DkPlx3I4.js";import{g as $e}from"./wzry-wzry_lodash-4gQjN7DL.js";import{d as ye,i as ke,A as ie,_ as se,u as we,a as xe,b as be,$ as J,c as z,e as Le,M as N,f as Ee,g as Ce,h as j,j as Te,k as Ie,l as re,m as Se,C as De,v as te,n as S,o as R,p as oe,q as B,r as ce,N as ze,s as de,K as Q,B as Re,T as Ve,t as Ae,w as Fe,x as Be,y as Me,L as Ne,V as ue,z as ae,D as Oe,E as le,F as Ue,G as je}from"./wzry-index-pNmeyW9R.js";import{d as ne}from"./wzry-wzry_dayjs-p57Mk9r_.js";import{K as Ge}from"./wzry-index-_CEAYTOG.js";import"./wzry-wzry_axios-wVsZAsRs.js";import"./wzry-wzry_vuePlugin-5RpDEseb.js";import"./wzry-wzry_i18n-yzdeeZVO.js";const Pe={mounted(i,g){i.addEventListener("dragover",a=>{var l,n;a.preventDefault(),(n=(l=g.value).enter)==null||n.call(l)}),i.addEventListener("dragleave",()=>{var a,l;(l=(a=g.value).leave)==null||l.call(a)}),i.addEventListener("drop",a=>{var n;a.preventDefault();const l=(n=a.dataTransfer)==null?void 0:n.items[0].getAsFile();g.value.getFile(l)})}};var Ke=ye,qe=ke,He="Expected a function";function Xe(i,g,a){var l=!0,n=!0;if(typeof i!="function")throw new TypeError(He);return qe(a)&&(l="leading"in a?!!a.leading:l,n="trailing"in a?!!a.trailing:n),Ke(i,g,{leading:l,maxWait:g,trailing:n})}var We=Xe;const Ye=$e(We),q=i=>(P("data-v-9e0eade2"),i=i(),K(),i),Ze={class:"logo-box"},Je=["src"],Qe=["data-text"],es={for:"file",class:"label"},ss=q(()=>s("i",{class:"iconfont wzry-chaka"},null,-1)),ts={class:"text"},os=q(()=>s("div",{class:"select"},"点击选择卡片文件",-1)),as={key:0,class:"tip"},ls=["src"],ns={class:"username"},is={key:1,class:"text"},rs={class:"demo"},cs=q(()=>s("span",{class:"text"},"登录",-1)),ds=q(()=>s("span",{class:"desc"},"LOGIN",-1)),us=["src"],_s=F({__name:"index",setup(i){const{browser_name:g}=we(),{playAudio:a}=re(),l=y(),n=ie(),c=y(!0),v=y(!1),r=y(!1),d=y();if(!se||g==="safari"){const f=new xe((T,V)=>{l.value&&(l.value.style.transform=`translate(-50%, -50%) rotateX(${V*10}deg) rotateY(${-T*10}deg)`)}),m=Ye(T=>{f.move(T)},50);window.addEventListener("mousemove",m),ge(()=>{window.removeEventListener("mousemove",m)})}const p=A(()=>c.value?v.value?"松开解析卡片":"请放置召唤师卡":"欢迎登录"),h=()=>{v.value=!0},L=()=>{v.value=!1},M=f=>{u(f),L()},u=f=>{let m,T;if(f instanceof Event?(T=f.target,m=T.files[0]):m=f,m.name.endsWith(".wzry")){const V=new FileReader;V.onload=X=>{const _e=X.target.result.toString();try{if(d.value=be(_e),d.value.isDev){z(J("mg14",{v:"开发"}),"error");return}const W=()=>{Ee({title:"读取召唤师卡",placeholder:"请输入密码",confirm(ve,fe){var ee;ve===d.value.password?(c.value=!1,fe(),z(`${Le}，${(ee=d.value)==null?void 0:ee.username}`)):(z(N.rh43,"error"),W())}})};W()}catch{z(N.by88,"error")}T&&(T.value="")},V.readAsText(m)}else z(N.ai11,"error")},x=async()=>{const f=Se();f.avatar=await Ce(j("head")),f.username="召唤师",f.password="123456",f.id=Te.encode(ne().valueOf().toString()),f.createTime=ne().valueOf(),f.isDev=!1,z(N.fh97),n.login(f),a("e84n")},_=()=>{Ie({text:De.wi59,confirm(){c.value=!0,d.value=void 0}})},$=()=>{if(d.value){if(d.value.isInvalid){z(N.uf04,"error");return}n.login(d.value),a("e84n")}};return(f,m)=>{var T,V;return b((e(),t("div",{ref_key:"RegLoginRef",ref:l,class:"reg-login"},[b((e(),t("div",Ze,[s("img",{class:"logo",src:o(j)("login_logo"),alt:"logo"},null,8,Je)])),[[o(te),{down:!0,colors:["#EFD68F","#E0B34E"]}]]),s("div",{class:"title","data-text":p.value},w(p.value),9,Qe),c.value?(e(),t(C,{key:0},[b(s("input",{id:"file",type:"file",onChange:u},null,544),[[pe,!1]]),b((e(),t("label",es,[ss,s("div",ts,[os,o(se)?I("",!0):(e(),t("div",as,"支持拖拽文件到此处"))])])),[[o(S),{text:o(R).g9x6}]])],64)):(e(),t("div",{key:1,class:U(["card-info",{del:r.value}]),onClick:_,onMouseenter:m[0]||(m[0]=X=>r.value=!0),onMouseleave:m[1]||(m[1]=X=>r.value=!1)},[r.value?b((e(),t("div",is,[G("换卡")])),[[o(S)]]):(e(),t(C,{key:0},[s("img",{src:(T=d.value)==null?void 0:T.avatar,alt:"",class:"avatar"},null,8,ls),s("div",ns,w((V=d.value)==null?void 0:V.username),1)],64))],34)),b((e(),t("div",rs,[G(" 没有卡片？点击此处生成 ")])),[[o(oe),x],[o(S),{text:o(R).xj79}]]),c.value?I("",!0):b((e(),t("div",{key:2,class:"into-btn",style:Y({backgroundImage:`url(${o(j)("login_btn")})`})},[cs,ds,s("img",{class:"bg",src:o(j)("login_btn"),alt:""},null,8,us)],4)),[[o(te),{colors:["#986B33","#CEA64E"]}],[o(oe),$]])])),[[o(Pe),{getFile:M,enter:h,leave:L}]])}}}),vs=B(_s,[["__scopeId","data-v-9e0eade2"]]),fs=["innerHTML"],gs=F({__name:"index",setup(i){const g=y(""),a=y(!0);return ce({promiseFn:ze}).then(l=>{g.value=l.data}).catch(()=>{z(J("rc53",{v:"系统公告"}),"error")}).finally(()=>{a.value=!1}),(l,n)=>(e(),E(o(Q),Z({loading:a.value},l.$attrs,{width:"56.25rem",header:"系统公告",onClose:n[0]||(n[0]=c=>a.value=!0)}),{default:O(()=>[b(s("div",{class:"notice",innerHTML:g.value},null,8,fs),[[o(de)]])]),_:1},16,["loading"]))}}),ps=B(gs,[["__scopeId","data-v-1ba77582"]]),ms=["src","onClick"],hs=F({__name:"index",setup(i){const g=y(),a=y(!0),l=y([]);ce({promiseFn:Ve}).then(c=>{a.value=!1,l.value=c.data.map(v=>v.map(r=>Re.IMGBED+r))}).catch(()=>{z(J("rc53",{v:"系统公告"}),"error")}).finally(()=>{a.value=!1});const n=(c,v)=>{Fe({parent:c.target,type:"DEFAULT",bigImage:v[0],blurImage:v[1]})};return(c,v)=>(e(),E(o(Q),Z({loading:a.value},c.$attrs,{width:"56.25rem",header:"本站开发者战绩"}),{default:O(()=>[s("div",{ref_key:"teamRef",ref:g,class:"team"},[(e(!0),t(C,null,D(l.value,(r,d)=>b((e(),t("img",{key:d,src:r[1],alt:"",onClick:p=>n(p,r)},null,8,ms)),[[o(Ae),{img:r[0]}],[o(S),{text:o(R).zq77}]])),128))],512)]),_:1},16,["loading"]))}}),$s=B(hs,[["__scopeId","data-v-b3c6fdf8"]]),k=i=>(P("data-v-7bf7407c"),i=i(),K(),i),ys={class:"tool"},ks=k(()=>s("div",{class:"line"},null,-1)),ws=k(()=>s("span",{class:"text"},"静音",-1)),xs=k(()=>s("div",{class:"base"},null,-1)),bs={class:"tool"},Ls=k(()=>s("div",{class:"line"},null,-1)),Es=k(()=>s("i",{class:"iconfont wzry-readme"},null,-1)),Cs=k(()=>s("span",{class:"text"},"介绍",-1)),Ts=[Es,Cs],Is=k(()=>s("div",{class:"base"},null,-1)),Ss={class:"tool"},Ds=k(()=>s("div",{class:"line"},null,-1)),zs=k(()=>s("i",{class:"iconfont wzry-gonggao"},null,-1)),Rs=k(()=>s("span",{class:"text"},"公告",-1)),Vs=[zs,Rs],As=k(()=>s("div",{class:"base"},null,-1)),Fs={class:"tool"},Bs=k(()=>s("div",{class:"line"},null,-1)),Ms=k(()=>s("i",{class:"iconfont wzry-updateLog"},null,-1)),Ns=k(()=>s("span",{class:"text"},"更新",-1)),Os=[Ms,Ns],Us=k(()=>s("div",{class:"base"},null,-1)),js={class:"tool"},Gs=k(()=>s("div",{class:"line"},null,-1)),Ps=k(()=>s("i",{class:"iconfont wzry-youxi"},null,-1)),Ks=k(()=>s("span",{class:"text"},"战绩",-1)),qs=[Ps,Ks],Hs=k(()=>s("div",{class:"base"},null,-1)),Xs=F({__name:"index",emits:["clicks"],setup(i,{expose:g,emit:a}){const l=a,{playAudio:n}=re(),c=y(),v=y(!1),r=A(()=>v.value?"wzry-jingyin-mianxing":"wzry-laba-mianxing"),d=p=>{p==="sound"&&(n("n4r4"),v.value=!v.value),p==="readme"&&n("n4r4"),l("clicks",p)};return g({_el:c}),(p,h)=>(e(),t("div",{ref_key:"toolbarRef",ref:c,class:"tool-bar"},[s("div",ys,[ks,b((e(),t("div",{class:U(["box muted",{active:v.value}]),style:Y({opacity:v.value?.75:1}),onClick:h[0]||(h[0]=L=>d("sound"))},[s("i",{class:U(["iconfont",r.value])},null,2),ws],6)),[[o(S),{text:o(R).ak79}]]),xs]),s("div",bs,[Ls,b((e(),t("div",{class:"box elastic",onClick:h[1]||(h[1]=L=>d("readme"))},Ts)),[[o(S),{text:o(R).b6v2}]]),Is]),s("div",Ss,[Ds,b((e(),t("div",{class:"box elastic",onClick:h[2]||(h[2]=L=>d("notice"))},Vs)),[[o(S),{text:o(R).br37}]]),As]),s("div",Fs,[Bs,b((e(),t("div",{class:"box elastic",onClick:h[3]||(h[3]=L=>d("update"))},Os)),[[o(S),{text:o(R).fr70}]]),Us]),s("div",js,[Gs,b((e(),t("div",{class:"box elastic",onClick:h[4]||(h[4]=L=>d("team"))},qs)),[[o(S),{text:o(R).c1g6}]]),Hs])],512))}}),Ws=B(Xs,[["__scopeId","data-v-7bf7407c"]]),Ys=i=>(P("data-v-cdd38cef"),i=i(),K(),i),Zs={class:"down-load"},Js={class:"download-list"},Qs=Ys(()=>s("div",{class:"title"},"下载列表",-1)),et={class:"down-load__bar"},st={class:"down-load__desc"},tt={class:"text"},ot={class:"num"},at=F({__name:"index",props:{finish:{type:Boolean,required:!0},finishModifiers:{}},emits:["update:finish"],setup(i){const g=me(i,"finish"),a=ie(),{zip_key_name:l,zip_name:n,downloaded_index:c,zip_size:v,zip_downloaded_size:r,zip_download_progress:d,zip_download_finish:p,zip_decompression_progress:h,zip_decompression_finish:L,getZipList:M}=Be(),u=A(()=>_=>{let $="",f="",m="";if(!p.value){if($=d.value,f=`正在下载${n.value}`,m=`${r.value}/${v.value}`,_==="进度条")return $;if(_==="下载内容")return f;if(_==="进度信息")return m}if(!L.value){if($=h.value,f=`正在解压${n.value}`,m=h.value,_==="进度条")return $;if(_==="下载内容")return f;if(_==="进度信息")return m}if(_==="下载内容")return"加载完毕，祝你体验愉快。"});return(async()=>{await M(),await Me(1e3),g.value=!0,!!localStorage.getItem(Ne.USER_DATA)&&a.autoLogin()})(),(_,$)=>(e(),t("div",Zs,[s("div",Js,[Qs,(e(!0),t(C,null,D(Object.values(o(l)),(f,m)=>(e(),t("div",{key:m,class:U(["download-item",{downloaded:o(c)>m,downloading:o(n)===f}])},w(m+1)+"、"+w(f),3))),128))]),s("div",et,[s("div",{class:"progress",style:Y({width:u.value("进度条")})},null,4)]),s("div",st,[s("div",tt,w(u.value("下载内容")),1),s("div",ot,w(u.value("进度信息")),1)])]))}}),lt=B(at,[["__scopeId","data-v-cdd38cef"]]),H=i=>(P("data-v-f7f3feea"),i=i(),K(),i),nt={class:"update-log"},it={class:"main"},rt=H(()=>s("h1",null,"一、新增特性",-1)),ct={key:0,class:"log-list"},dt={class:"time"},ut={key:1,class:"empty"},_t=H(()=>s("h1",null,"二、功能优化",-1)),vt={key:2,class:"log-list"},ft={class:"time"},gt={key:3,class:"empty"},pt=H(()=>s("h1",null,"三、样式优化",-1)),mt={key:4,class:"log-list"},ht={class:"time"},$t={key:5,class:"empty"},yt=H(()=>s("h1",null,"四、BUG修复",-1)),kt={key:6,class:"log-list"},wt={class:"time"},xt={key:7,class:"empty"},bt=F({__name:"index",emits:["close"],setup(i,{emit:g}){const a=g,l=ue(),n=y(),c=A(()=>l.data_status),v=A(()=>l.dist_status),r=A(()=>l.update_log),d=()=>{l.updateAll(!0)},p=()=>{var L;l.updateAll(),(L=n.value)==null||L._close()},h=()=>{l.setShowLog(!1),a("close")};return(L,M)=>(e(),E(Q,Z({ref_key:"kDialogRef",ref:n,"show-close":!c.value&&!v.value},L.$attrs,{width:"57.5rem",header:"更新日志",desc:r.value.time,onClose:h}),{default:O(()=>[s("div",nt,[b((e(),t("div",it,[rt,r.value.updateLog.new.length?(e(),t("div",ct,[(e(!0),t(C,null,D(r.value.updateLog.new,(u,x)=>(e(),t("div",{key:x,class:"log-item"},[s("div",dt,"·"+w(u.time),1),(e(!0),t(C,null,D(u.log,(_,$)=>(e(),t("p",{key:$,class:"text"},w($+1)+"、"+w(_),1))),128))]))),128))])):(e(),t("p",ut,"暂无")),_t,r.value.updateLog.function.length?(e(),t("div",vt,[(e(!0),t(C,null,D(r.value.updateLog.function,(u,x)=>(e(),t("div",{key:x,class:"log-item"},[s("div",ft,"·"+w(u.time),1),(e(!0),t(C,null,D(u.log,(_,$)=>(e(),t("p",{key:$,class:"text"},w($+1)+"、"+w(_),1))),128))]))),128))])):(e(),t("p",gt,"暂无")),pt,r.value.updateLog.style.length?(e(),t("div",mt,[(e(!0),t(C,null,D(r.value.updateLog.style,(u,x)=>(e(),t("div",{key:x,class:"log-item"},[s("div",ht,"·"+w(u.time),1),(e(!0),t(C,null,D(u.log,(_,$)=>(e(),t("p",{key:$,class:"text"},w($+1)+"、"+w(_),1))),128))]))),128))])):(e(),t("p",$t,"暂无")),yt,r.value.updateLog.bug.length?(e(),t("div",kt,[(e(!0),t(C,null,D(r.value.updateLog.bug,(u,x)=>(e(),t("div",{key:x,class:"log-item"},[s("div",wt,"·"+w(u.time),1),(e(!0),t(C,null,D(u.log,(_,$)=>(e(),t("p",{key:$,class:"text"},w($+1)+"、"+w(_),1))),128))]))),128))])):(e(),t("p",xt,"暂无"))])),[[o(de)]]),v.value?b((e(),E(ae,{key:0,type:"warning",onClick:d},{default:O(()=>[G(" 更新并重启 ")]),_:1})),[[o(S)]]):c.value?b((e(),E(ae,{key:1,onClick:p},{default:O(()=>[G("确定")]),_:1})),[[o(S)]]):I("",!0)])]),_:1},16,["show-close","desc"]))}}),Lt=B(bt,[["__scopeId","data-v-f7f3feea"]]),Et={class:"login"},Ct={class:"login__logo"},Tt=["src"],It=["src"],St=F({__name:"index",setup(i){const g=ue(),{video_home_version:a,load:l}=Oe(),n=y(!1),c=y(!1),v=y(!1),r=y(!1),d=y(!1),p=y(!1),h=A(()=>!p.value||c.value||r.value);g.getVersion().then(()=>{d.value=!0}).catch(l);const L=()=>{d.value=!0,v.value=!1},M=u=>{u==="readme"&&open(je("readme")),u==="sound"&&(n.value=!n.value),c.value=u==="notice",r.value=u==="team",v.value=u==="update"};return setTimeout(()=>{c.value=!0},1e3),(u,x)=>(e(),t("div",Et,[s("div",Ct,[s("img",{src:o(le)("logo"),alt:""},null,8,Tt)]),p.value?(e(),E(vs,{key:0,class:U({"hide-reg-login":h.value})},null,8,["class"])):I("",!0),p.value?(e(),E(Ws,{key:1,onClicks:M})):I("",!0),c.value&&p.value?(e(),E(ps,{key:2,modelValue:c.value,"onUpdate:modelValue":x[0]||(x[0]=_=>c.value=_)},null,8,["modelValue"])):I("",!0),r.value?(e(),E($s,{key:3,modelValue:r.value,"onUpdate:modelValue":x[1]||(x[1]=_=>r.value=_)},null,8,["modelValue"])):I("",!0),!p.value&&d.value?(e(),E(lt,{key:4,finish:p.value,"onUpdate:finish":x[2]||(x[2]=_=>p.value=_)},null,8,["finish"])):I("",!0),(e(),E(he,{to:"body"},[o(g).show_update||v.value?(e(),E(Lt,{key:0,onClose:L})):I("",!0)])),o(a)?(e(),t("img",{key:5,class:"bg",src:o(le)("login_bg",o(a),"jpg"),alt:""},null,8,It)):I("",!0),p.value&&o(a)?(e(),E(o(Ge),{key:6,link:o(Ue)("login_bg",o(a)),muted:n.value},null,8,["link","muted"])):I("",!0)]))}}),Nt=B(St,[["__scopeId","data-v-d466a23b"]]);export{Nt as default};
