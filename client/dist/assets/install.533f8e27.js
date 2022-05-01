var Q=Object.defineProperty;var b=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var k=(o,l,e)=>l in o?Q(o,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[l]=e,E=(o,l)=>{for(var e in l||(l={}))T.call(l,e)&&k(o,e,l[e]);if(b)for(var e of b(l))$.call(l,e)&&k(o,e,l[e]);return o};var D=(o,l)=>{var e={};for(var r in o)T.call(o,r)&&l.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&b)for(var r of b(o))l.indexOf(r)<0&&$.call(o,r)&&(e[r]=o[r]);return e};var P=(o,l,e)=>(k(o,typeof l!="symbol"?l+"":l,e),e);import{_ as S,d as w,r as x,a7 as R,C as g,o as V,b as F,f as p,i as I,j as t,g as u,h as v,E as m,H as d,p as h,q as H,s as q,x as B,a8 as M,a9 as z,aa as L,D as A,c as j,m as G,t as C,S as U,ab as W}from"./index.610507f6.js";import{_ as O}from"./HSlideView.6c3ee226.js";var K="/assets/logo-invert.c5a6e5ca.svg";const Y=["onSubmit"],J={class:"flex mb-6"},X=["src"],Z={class:"inputs flex"},ee={class:"mr-6 w-64"},le={class:"w-64"},te={class:"flex"},se=B(" \u5F00\u59CB\u5B89\u88C5 "),ae=w({emits:["on-back","on-submit"],setup(o,{emit:l}){const e=x({username:"",password:"",password2:"",secret:R(),expiresIn:"1",refreshableIn:"7"}),r=()=>{l("on-submit",e.value)},s=g();return(i,a)=>(V(),F("form",{onSubmit:q(r,["prevent"]),class:"h-install-form flex flex-col select-none"},[p("div",J,[p("div",{class:"text-3xl font-light flex-1",style:I({color:t(s).textColorWhite})}," \u6B22\u8FCE\u4F7F\u7528 Hexon ",4),p("img",{src:t(K),alt:"logo",class:"h-12 inline-block"},null,8,X)]),p("div",Z,[p("div",ee,[u(t(h),{placeholder:"\u7528\u6237\u540D",modelValue:e.value.username,"onUpdate:modelValue":a[0]||(a[0]=n=>e.value.username=n),class:"my-3",clearable:""},{prefix:v(()=>[u(t(m),{name:t(d).Contact},null,8,["name"])]),_:1},8,["modelValue"]),u(t(h),{placeholder:"\u5BC6\u7801",modelValue:e.value.password,"onUpdate:modelValue":a[1]||(a[1]=n=>e.value.password=n),attrType:"password",class:"my-3",clearable:""},{prefix:v(()=>[u(t(m),{name:t(d).Lock},null,8,["name"])]),_:1},8,["modelValue"]),u(t(h),{placeholder:"\u91CD\u590D\u8F93\u5165\u5BC6\u7801",modelValue:e.value.password2,"onUpdate:modelValue":a[2]||(a[2]=n=>e.value.password2=n),attrType:"password",class:"my-3",clearable:""},{prefix:v(()=>[u(t(m),{name:t(d).Lock},null,8,["name"])]),_:1},8,["modelValue"])]),p("div",le,[u(t(h),{placeholder:"\u5BC6\u94A5",modelValue:e.value.secret,"onUpdate:modelValue":a[3]||(a[3]=n=>e.value.secret=n),class:"my-3",clearable:""},{prefix:v(()=>[u(t(m),{name:t(d).PasswordKeyHide},null,8,["name"])]),_:1},8,["modelValue"]),u(t(h),{placeholder:"\u8FC7\u671F\u65F6\u95F4",modelValue:e.value.expiresIn,"onUpdate:modelValue":a[4]||(a[4]=n=>e.value.expiresIn=n),class:"my-3",attrType:"number",clearable:""},{prefix:v(()=>[u(t(m),{name:t(d).SetHistoryStatus},null,8,["name"])]),_:1},8,["modelValue"]),u(t(h),{placeholder:"\u8FC7\u671F\u65F6\u95F4",modelValue:e.value.refreshableIn,"onUpdate:modelValue":a[5]||(a[5]=n=>e.value.refreshableIn=n),class:"my-3",attrType:"number",clearable:""},{prefix:v(()=>[u(t(m),{name:t(d).SetHistoryStatus2},null,8,["name"])]),_:1},8,["modelValue"])])]),p("div",te,[u(t(H),{class:"mt-4 mr-4",round:"",onClick:a[6]||(a[6]=n=>l("on-back")),attrType:"button"},{default:v(()=>[u(t(m),{name:t(d).ChevronLeft},null,8,["name"])]),_:1}),u(t(H),{class:"mt-4 flex-1",attrType:"submit"},{default:v(()=>[se,u(t(m),{name:t(d).ChevronRight},null,8,["name"])]),_:1}),u(t(H),{class:"mt-4 ml-4",round:"",attrType:"button"},{default:v(()=>[u(t(m),{name:t(d).Help},null,8,["name"])]),_:1})])],40,Y))}});var oe=S(ae,[["__scopeId","data-v-03019220"]]);const ne={class:"w-full h-full flex flex-col items-center justify-center"},ue=w({props:{idx:null,setCurrent:null},setup(o){const l=o,e=x(!1),r=M(),s=async n=>{const c=n,{password2:y}=c,f=D(c,["password2"]);e.value=!0;try{await z({username:f.username,password:f.password,secret:f.secret,expiresIn:f.expiresIn,refreshableIn:f.refreshableIn}),L()}catch{e.value=!1,r.create({type:"error",title:"\u5B89\u88C5\u5931\u8D25",content:"\u8BE6\u60C5\u8BF7\u67E5\u770B\u670D\u52A1\u7AEF\u5B89\u88C5\u65E5\u5FD7\uFF08PM2\uFF09\u3002\u6216\u8005\u4F60\u53EF\u4EE5\u5728 Github Issue \u6216 QQ \u7FA4\u6C42\u52A9\u3002",actions:[{type:"info",label:"Github",run:()=>{window.open("https://github.com/gethexon/hexon/issues","_blank")}},{type:"info",label:"QQ \u7FA4",run:()=>{window.open("https://jq.qq.com/?_wv=1027&k=WMYcPUiW","_blank")}}]})}},i=g(),a=()=>{l.setCurrent(l.idx-1)};return(n,y)=>(V(),F("div",ne,[u(oe,{onOnSubmit:s,onOnBack:a}),p("div",{class:"absolute top-0 left-0 bottom-0 right-0 transition-opacity z-10 flex items-center justify-center text-4xl",style:I(E({backgroundColor:t(i).colorPrimary,opacity:e.value?.9:0},!e.value&&{pointerEvents:"none"}))},[u(t(m),{class:"rotating",name:t(d).Refresh},null,8,["name"])],4)]))}});class re{constructor(){P(this,"fns",[])}sleep(l=0){return this.fns.push(()=>new Promise(e=>{setTimeout(e,l*1e3)})),this}exec(l){return this.fns.push(l),this}interval(l,e,r){this.exec(l);for(let s=0;s<r-1;s++)this.sleep(e),this.exec(l);return this}async start(){for(const l of this.fns)await l()}}const ie={class:"install-welcome w-full h-full flex flex-col items-center justify-center select-none"},ce={class:"text-6xl relative font-light"},pe=B(" "+C("\u200B")),me=B(" \u73B0\u5728\u5F00\u59CB "),de=w({props:{idx:null,setCurrent:null},setup(o){const l=o;A(c=>({"3ee2222c":t(r).bgColor,"5f23cb2f":t(r).color}));const e=g(),r=j(()=>({bgColor:e.value.colorPrimary,color:e.value.textColorWhite})),s=new re;s.sleep(2.25),"Hexo".split("").map((c,_)=>{_>0&&s.sleep(.075),s.exec(()=>{i.value+=c})}),s.sleep(1.5)," online".split("").map((c,_)=>{_>0&&s.sleep(.075),s.exec(()=>{a.value+=c})}),s.sleep(1.5),s.interval(()=>{a.value=a.value.slice(0,a.value.length-1)},.05,7),s.interval(()=>{i.value=i.value.slice(0,i.value.length-1)},.05,4),s.sleep(.075),"Hexon".split("").map((c,_)=>{_>0&&s.sleep(.075),s.exec(()=>{i.value+=c})}),"line".split("").map((c,_)=>{_>0&&s.sleep(.075),s.exec(()=>{n.value+=c})}),s.sleep(1.5),s.interval(()=>{n.value=n.value.slice(0,n.value.length-1)},.25,4),s.sleep(1.5),s.exec(()=>{i.value+="."}),s.sleep(1.5),s.exec(()=>{y.value=1});const i=x(""),a=x(""),n=x("");G(()=>{s.start()});const y=x(0),f=()=>{l.setCurrent(l.idx+1)};return(c,_)=>(V(),F("div",ie,[p("h1",ce,[B(C(i.value)+" ",1),p("span",null,C(a.value),1),p("span",null,C(n.value),1),pe]),p("button",{class:"mt-11 transition-opacity",style:I(`opacity: ${y.value}`),onClick:f},[me,u(t(m),{name:t(d).ChevronRight},null,8,["name"])],4)]))}});var _e=S(de,[["__scopeId","data-v-78c08678"]]);const N=w({setup(o){A(i=>({"3e2358f1":t(e).bgColor,bdedea14:t(e).color}));const l=g(),e=j(()=>({bgColor:l.value.colorPrimary,color:l.value.textColorWhite})),r=x(0),s=[{component:U(_e)},{component:U(ue)}];return(i,a)=>(V(),F("div",{class:"h-full w-full",style:I({backgroundColor:t(l).colorPrimary})},[u(O,{model:s,current:r.value,"onUpdate:current":a[0]||(a[0]=n=>r.value=n),horizontal:""},null,8,["current"])],4))}});typeof W=="function"&&W(N);var he=S(N,[["__scopeId","data-v-688cf708"]]);export{he as default};