var X=Object.defineProperty,Y=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var _=(n,e,t)=>e in n?X(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,d=(n,e)=>{for(var t in e||(e={}))C.call(e,t)&&_(n,t,e[t]);if(h)for(var t of h(e))z.call(e,t)&&_(n,t,e[t]);return n},b=(n,e)=>Y(n,k(e));import{d as E,o as i,z as g,h as x,l as y,T as S,W as p,c as v,r as w,w as $,b as m,g as F,F as I,X as L,j as O,U as T}from"./index.610507f6.js";const j=E({props:{direction:null,duration:{default:100}},setup(n){const e=n,t={up:{beforeEnter:{translateY:30},leave:{translateY:-30}},down:{beforeEnter:{translateY:-30},leave:{translateY:30}},left:{beforeEnter:{translateX:30},leave:{translateX:-30}},right:{beforeEnter:{translateX:-30},leave:{translateX:30}}};function f(a,l){p({targets:a,opacity:1,translateY:0,translateX:0,duration:e.duration,easing:"easeInOutSine",complete:l})}function s(a){p.set(a,d({opacity:0},t[e.direction].beforeEnter))}function c(a,l){p(d({targets:a,opacity:0,duration:e.duration,easing:"easeInOutSine",complete:l},t[e.direction].leave))}return(a,l)=>(i(),g(S,{onEnter:f,onBeforeEnter:s,onLeave:c},{default:x(()=>[y(a.$slots,"default")]),_:3}))}}),D={class:"relative w-full h-full overflow-hidden"},P=E({props:{current:null,model:null,horizontal:{type:Boolean,default:!1},reverted:{type:Boolean,default:!1}},emits:["update:current"],setup(n,{emit:e}){const t=n,f=v(()=>t.model.map((r,u)=>b(d({},r),{idx:u}))),s=w(!1),c=w([]);$(()=>t.current,(r,u)=>{const o=f.value[r];!o||(c.value=[o],u!==void 0&&(s.value=r>u))},{immediate:!0});const a=r=>{e("update:current",r)},l=v(()=>t.reverted?!s.value:s.value),B=v(()=>t.horizontal?l.value?"left":"right":l.value?"up":"down");return(r,u)=>(i(),m("div",D,[F(j,{direction:O(B),duration:200},{default:x(()=>[(i(!0),m(I,null,L(c.value,o=>(i(),m("div",{class:"absolute w-full h-full overflow-hidden",key:o.idx},[y(r.$slots,"default",{component:o.component,idx:o.idx,setCurrent:a},()=>[(i(),g(T(o.component),{idx:o.idx,setCurrent:a},null,8,["idx"]))])]))),128))]),_:3},8,["direction"])]))}});export{P as _};