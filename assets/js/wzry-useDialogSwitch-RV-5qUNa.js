import{y as h,x as w,o as E,r as m}from"./wzry-wzry_vue-ZP7q88Pe.js";const R=s=>{const e=t=>{var o;(o=s.value)==null||o.forEach(a=>{const{clientX:l,clientY:v}=t,{top:p,left:y}=a.getBoundingClientRect(),u=l-y,x=v-p;a.style.setProperty("--x",`${u}px`),a.style.setProperty("--y",`${x}px`)})},n=()=>{var t;(t=s.value)==null||t.forEach(o=>{o.style.setProperty("--x",""),o.style.setProperty("--y","")})},r={enableRadialBorder(){n(),window.removeEventListener("mousemove",e),window.addEventListener("mousemove",e)},disableRadialBorder(){n(),window.removeEventListener("mousemove",e)}},{enableRadialBorder:i,disableRadialBorder:c}=r;return i(),h(i),w(c),E(c),{...r}},d={show_activity:m(!1)},{show_activity:f}=d,M=()=>({...d,...{setActivityShow(e){f.value=e}}});export{M as a,R as u};
