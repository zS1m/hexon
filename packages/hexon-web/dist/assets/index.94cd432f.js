var w=Object.defineProperty;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var b=(o,e,r)=>e in o?w(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,f=(o,e)=>{for(var r in e||(e={}))x.call(e,r)&&b(o,r,e[r]);if(h)for(var r of h(e))k.call(e,r)&&b(o,r,e[r]);return o};import{o as E,d as A,u as L,c as u,i as O,r as P,a as $,b as j,e as C,n as S,f as d,g as R,h as T,l as V,j as i,k as m,m as M,p as N,q as I,s as q}from"./vendor.58209086.js";const z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};z();const D=()=>{window.onbeforeunload=()=>{},window.location.reload()};function Z(o,e){const r={};return o.forEach(n=>r[n[e]]=n),r}function ee(o,e){return Object.entries(o).map(([r,n])=>n)}function H(o){return!!o.filter(e=>Array.isArray(e)).length}function re(o){return JSON.stringify(o)===JSON.stringify([])?[]:H(o)?o.map(e=>Array.isArray(e)?e:[e]):[o]}var g=E({baseURL:"http://localhost:5777",onTokenExpire:()=>{console.log("token expired"),D()}});const W=A({setup(o){L(s=>({"717e1203":d(n),"4b41fe94":d(t)}));const e=u(()=>({width:"100vw",height:"100vh"})),r=O(),n=u(()=>r.value.color.foreground.main),t=u(()=>r.value.color.foreground.sub);return(s,a)=>{const l=P("router-view");return $(),j("div",{style:S(d(e))},[C(l)],4)}}}),B="modulepreload",_={},F="/",p=function(e,r){return!r||r.length===0?e():Promise.all(r.map(n=>{if(n=`${F}${n}`,n in _)return;_[n]=!0;const t=n.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":B,t||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),t)return new Promise((l,y)=>{a.addEventListener("load",l),a.addEventListener("error",y)})})).then(()=>e())},J=[{path:"/",component:()=>p(()=>import("./HomePage.ef3ff7b5.js"),["assets/HomePage.ef3ff7b5.js","assets/HomePage.709d2a89.css","assets/vendor.58209086.js","assets/HToolbar.c5ba8004.js","assets/HButton.057a631e.js","assets/HButton.95df1118.css","assets/HInput.c08e76e5.js","assets/HInput.c68c05b1.css"]),children:[{path:"view/:type/:source",component:()=>p(()=>import("./ViewerView.e420b17b.js"),["assets/ViewerView.e420b17b.js","assets/ViewerView.01f8a676.css","assets/vendor.58209086.js","assets/HToolbar.c5ba8004.js","assets/HButton.057a631e.js","assets/HButton.95df1118.css"]),name:"view"}]},{path:"/signin",component:()=>p(()=>import("./SignInPage.cb15bd8d.js"),["assets/SignInPage.cb15bd8d.js","assets/vendor.58209086.js","assets/HInput.c08e76e5.js","assets/HInput.c68c05b1.css","assets/HButton.057a631e.js","assets/HButton.95df1118.css"])},{path:"/:pathMatch(.*)*",redirect:"/"}],v=R({history:T(),routes:J});v.beforeEach(g.beforeEachGuard({home:"/",signin:"/signin"}));const G={l:(o,e)=>{const[r,n,t]=i.hex.rgb(o),s=a=>a+Math.abs(255-a)*e;return`#${i.rgb.hex([s(r),s(n),s(t)])}`},d:(o,e)=>{const[r,n,t]=i.hex.rgb(o),s=a=>a*(1-e);return`#${i.rgb.hex([s(r),s(n),s(t)])}`},a:(o,e)=>{const r=Math.round((1-e)*255).toString(16);return`${o}${r}`}};function c(o){const e=new Array(9).fill(0).map((n,t)=>(t+1)/10);function r(n){return e.map(t=>G[n](o,t)).reduce((t,s,a)=>(t[`${n}${a+1}`]=s,t),{})}return f(f(f({n:o},r("a")),r("d")),r("l"))}const K={color:{primary:c("#3498db"),success:c("#27ae60"),warning:c("#f39c12"),error:c("#e74c3c"),common:c("#888888"),folder:"#f3c04f",all:"#27ae60",post:"#3883c7",page:"#52bad1",draft:"#f1c40f",black:"#000000",white:"#ffffff",background:{transparent:"transparent",hover:"#00000015",active:"#00000020",selected:"#00000010",base1:"#ffffff",base2:"#f8f8f8",base3:"#eeeeee",badge:"#cccccc",max:"#ffffff",min:"#000000"},foreground:{main:"#484848",sub:"#757575",max:"#000000",min:"#ffffff"}}},U={color:{primary:c("#3498db"),success:c("#27ae60"),warning:c("#f39c12"),error:c("#e74c3c"),common:c("#888888"),folder:"#f3c04f",all:"#27ae60",post:"#3883c7",page:"#52bad1",draft:"#f1c40f",black:"#000000",white:"#ffffff",background:{transparent:"transparent",hover:"#ffffff15",active:"#ffffff20",selected:"#ffffff10",base1:"#323232",base2:"#282828",base3:"#1f1f1f",badge:"#222222",max:"#000000",min:"#ffffff"},foreground:{main:"#dddddd",sub:"#a9a9a9",max:"#ffffff",min:"#000000"}}};var Q=V({default:K,dark:U});m.extend(M);m.extend(N);m.locale("zh-cn");I(W).use(v).use(q()).use(Q).use(g).mount("#app");export{g as a,re as c,Z as l,ee as o};
