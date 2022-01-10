import{d as C,u as A,b as e,f as V,$ as j,c as y,o as s,e as l,t as v,s as p,v as n,h as b,F as $,j as B,l as k,p as _,a5 as N,J as T,a9 as E,q as S}from"./vendor.1b5f1531.js";import{b as H,H as O,u as F}from"./HToolbar.bf2b6742.js";import{c as d,H as m,e as x,p as R,m as J}from"./index.c292ff2c.js";import{D}from"./constants.c45fac91.js";import{E as L}from"./ErroredView.2c50ec85.js";const M=["innerHTML"],U=C({props:{content:null},setup(c){const t=c;A(i=>({"59b04a80":e(a).mainColor,"4a95d0d8":e(a).primary,"5482d726":e(a).base3BgColor,"26bcab72":e(a).base2BgColor}));const o=V(),{content:u}=j(t),a=y(()=>({primary:o.value.color.primary.n,mainColor:o.value.color.foreground.main,base3BgColor:o.value.color.background.base3,base2BgColor:o.value.color.background.base2}));return(i,h)=>(s(),l("div",{class:"article-entry",innerHTML:e(u)||""},null,8,M))}}),G={class:"h-viewer-header text-base px-5 mx-auto",style:{"max-width":"768px"}},I={key:0,class:"text-4xl text-main my-5"},X={key:1,class:"updated text-sub"},q={key:2,class:"date text-sub"},P={key:3,class:"categories mt-1 text-sm text-sub"},z={class:"ml-0.5"},K={key:4,class:"tags text-sm text-sub mt-1"},Q={key:0},W={class:"ml-0.5"},Y={key:5,class:"rest text-sub text-xs"},Z=C({props:{article:null},setup(c){const t=c,o=y(()=>t.article.date?t.article.date.format(D):""),u=y(()=>t.article.updated?t.article.updated.format(D):""),a=y(()=>{const i=t.article.fm;return JSON.stringify(i)===JSON.stringify({})?"":Object.entries(i).map(([h,f])=>`${h}: ${f}`).join(`
`)});return(i,h)=>(s(),l("div",G,[c.article.title?(s(),l("h1",I,v(c.article.title),1)):p("",!0),e(u)?(s(),l("div",X,[n(e(m),{class:"mr-1",style:{transform:"translateX(-1px)"},name:e(d).DevUpdate},null,8,["name"]),b("span",null,v(e(u)),1)])):p("",!0),e(o)?(s(),l("div",q,[n(e(m),{class:"mr-1",style:{transform:"translateX(-1px)"},name:e(d).Globe},null,8,["name"]),b("span",null,v(e(o)),1)])):p("",!0),c.article.categories.length?(s(),l("div",P,[n(e(m),{class:"mr-1",name:e(d).Folder},null,8,["name"]),(s(!0),l($,null,B(c.article.categories,(f,r)=>(s(),l($,{key:r},[r?(s(),k(e(m),{key:0,class:"ml-0.5",name:e(d).ChevronRight},null,8,["name"])):p("",!0),b("span",z,v(f),1)],64))),128))])):p("",!0),c.article.tags.length?(s(),l("div",K,[n(e(m),{class:"mr-1",name:e(d).Tag},null,8,["name"]),(s(!0),l($,null,B(c.article.tags,(f,r)=>(s(),l($,{key:r},[r?(s(),l("span",Q,",")):p("",!0),b("span",W,v(f),1)],64))),128))])):p("",!0),e(a)?(s(),l("pre",Y,v(e(a)),1)):p("",!0)]))}}),ee=b("div",{class:"flex-1"},null,-1),te=C({emits:["on-action"],setup(c,{emit:t}){const o=H();return(u,a)=>(s(),k(O,null,{default:_(()=>[ee,n(e(x),{class:"mr-2",type:"primary",round:"",inverted:"",onClick:a[0]||(a[0]=i=>t("on-action",{type:"edit"}))},{default:_(()=>[n(e(m),{name:e(d).Edit},null,8,["name"])]),_:1}),n(e(x),{class:"mr-2",type:"error",round:"",inverted:"",onClick:a[1]||(a[1]=i=>t("on-action",{type:"delete"}))},{default:_(()=>[n(e(m),{name:e(d).Delete},null,8,["name"])]),_:1}),e(o).isDraft?(s(),k(e(x),{key:0,class:"mr-2",type:"success",round:"",inverted:"",onClick:a[2]||(a[2]=i=>t("on-action",{type:"publish"}))},{default:_(()=>[n(e(m),{name:e(d).Upload},null,8,["name"])]),_:1})):p("",!0),n(e(x),{class:"mr-2",type:"common",round:"",inverted:"",onClick:a[3]||(a[3]=i=>t("on-action",{type:"code"}))},{default:_(()=>[n(e(m),{name:e(d).Code},null,8,["name"])]),_:1}),n(e(x),{class:"mr-2",type:"common",round:"",inverted:""},{default:_(()=>[n(e(m),{name:e(d).GlobalNavButton},null,8,["name"])]),_:1})]),_:1}))}}),ae=S("\u91CD\u8BD5"),se={key:1,class:"w-full h-full flex flex-col"},ne={class:"overflow-auto flex-1"},ue=C({setup(c){const t=N(),o=F(),u=H();function a(){const r=t.params.type,g=t.params.source;r==="post"||r==="page"?o.getArticle({type:r,source:g}):o.goHome()}T(()=>t.fullPath,()=>{t.name==="view"&&a()},{immediate:!0}),E(()=>{o.clearArticle()});const i=y(()=>{var r;return((r=u.article)==null?void 0:r.content)||""}),h=y(()=>R(u.article)),f=r=>{const g=t.params.type,w=t.params.source;switch(r.type){case"code":break;case"edit":o.editArticle({type:g,source:w});break;case"delete":o.deleteArticle({type:g,source:w});break;case"publish":o.publishArticle(w);break}};return(r,g)=>(s(),k(e(J),{loading:e(u).loading},{default:_(()=>[e(u).error?(s(),k(L,{key:0},{default:_(()=>[n(e(x),{onClick:a},{default:_(()=>[ae]),_:1})]),_:1})):(s(),l("div",se,[n(te,{onOnAction:f}),b("div",ne,[n(Z,{article:e(h)},null,8,["article"]),n(U,{content:e(i)},null,8,["content"])])]))]),_:1},8,["loading"]))}});export{ue as default};