var xe=Object.defineProperty,he=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var ve=(o,s,l)=>s in o?xe(o,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[s]=l,fe=(o,s)=>{for(var l in s||(s={}))ke.call(s,l)&&ve(o,l,s[l]);if(pe)for(var l of pe(s))we.call(s,l)&&ve(o,l,s[l]);return o},ge=(o,s)=>he(o,Ce(s));import{J as _e,d as H,t as I,r as j,K as $e,c as p,o as f,f as C,l as y,g as z,x as S,b as t,e as A,k as N,w as F,u as X,F as J,s as Q,p as g,j as M,m as ne,h as q,L as me,n as Se,D as Be,M as Le,N as He,O as Fe,P as Ve,Q as De,R as Ee}from"./vendor.937a4e60.js";import{H as ae}from"./HToolbar.1a5260c9.js";import{_ as O,H as Y,a as B,g as Ie,l as Z,n as Ae,o as G,b as Ne,c as Me}from"./index.1cf5a2d8.js";import{H as Te}from"./HInput.630daf65.js";const je=(o,s)=>{_e(l=>{const e=new ResizeObserver(n=>{for(let c of n)s(c)});o.value&&e.observe(o.value),l(()=>{e.disconnect()})})},Pe=(o,s,l)=>{_e(e=>{o.addEventListener(s,l),e(()=>{o.removeEventListener(s,l)})})};const Re=H({props:{sep1:null,sep2:null,sep1at:null,sep2at:null,sepHalfWidth:{default:5}},emits:["update:sep1at","update:sep2at"],setup(o,{emit:s}){const l=o,e=x=>`${x}px`,n=x=>Math.max(x,0),c=x=>{const w=j("");return{setCursor:()=>{w.value=document.body.style.cursor,document.body.style.cursor=x},resetCursor:()=>{document.body.style.cursor=w.value}}},_=x=>{s("update:sep1at",x)},i=x=>{s("update:sep2at",x)},{sep1:a,sep2:u,sep1at:k,sep2at:m,sepHalfWidth:v}=I(l),h=j(),d=j(0),r=$e({x:0,y:0}),L=j(""),{setCursor:T,resetCursor:U}=c("col-resize"),ee=()=>{L.value="1",window.addEventListener("mousemove",P),T()},te=()=>{L.value="2",window.addEventListener("mousemove",P),T()},oe=()=>{L.value="",window.removeEventListener("mousemove",P),U()},P=x=>{if(L.value==="1"){const w=x.clientX-r.x;w<=a.value.min?_(a.value.min):w>=a.value.max?_(a.value.max):_(w)}else if(L.value==="2"){const w=x.clientX-r.x-V.value;w<=u.value.min?i(u.value.min):w>=u.value.max?i(u.value.max):i(w)}};Pe(window,"mouseup",oe),je(h,x=>{var w,K,W,ue,ie,de;d.value=(K=(w=h.value)==null?void 0:w.clientWidth)!=null?K:0,r.x=(ue=(W=h.value)==null?void 0:W.offsetLeft)!=null?ue:0,r.y=(de=(ie=h.value)==null?void 0:ie.offsetTop)!=null?de:0});const V=p(()=>k.value),se=p(()=>({left:0,width:e(V.value)})),R=p(()=>m.value),le=p(()=>({left:e(V.value),width:e(R.value)})),b=p(()=>n(d.value-V.value-R.value)),$=p(()=>({left:e(V.value+R.value),width:e(b.value)})),E=p(()=>({left:e(V.value-v.value),width:e(v.value*2)})),be=p(()=>({left:e(V.value+R.value-v.value),width:e(v.value*2)}));return(x,w)=>(f(),C("div",{ref:(K,W)=>{W.container=K,h.value=K},class:"split-view-container"},[y("div",{class:"split-view-view",style:S(t(se))},[z(x.$slots,"first")],4),y("div",{class:"split-view-view",style:S(t(le))},[z(x.$slots,"second")],4),y("div",{class:"split-view-view",style:S(t($))},[z(x.$slots,"third")],4),y("div",{class:"split-view-view split-view-seprator",style:S(t(E)),onMousedown:ee},null,36),y("div",{class:"split-view-view split-view-seprator",style:S(t(be)),onMousedown:te},null,36)],512))}}),Ke=H({setup(o){const s=A();return(l,e)=>(f(),N(ae,null,{default:F(()=>[y("span",{class:"text-xl pl-8",style:S({color:t(s).color.foreground.main})}," Hexon ",4)]),_:1}))}});const ze={class:"h-nav-title text-sm select-none font-bold leading-11 px-4"},Ue=H({setup(o){X(e=>({"2ae016ff":t(l)}));const s=A(),l=p(()=>s.value.color.foreground.main);return(e,n)=>(f(),C("div",ze,[z(e.$slots,"default",{},void 0,!0)]))}});var re=O(Ue,[["__scopeId","data-v-28517d65"]]);const We={class:"h-nav-item px-4 py-0.5 mx-0 my-0.5 h-7 rounded-md select-none cursor-pointer flex items-center"},Oe={class:"w-4 inline-block"},Ge={class:"text text-sm"},Xe={key:0,class:"sub text-xs ml-2"},Je=H({props:{icon:null,text:null,indent:{default:0},selected:{default:!1},color:null,sub:{default:""}},setup(o){const s=o;X(k=>({"48a19b62":t(u).color,"61d97e5d":t(u).bgColor,"5345eeb8":t(u).subColor,"484a3063":t(u).hoverBgColor,bdf14d92:t(u).activeBgColor}));const{icon:l,text:e,indent:n,selected:c,color:_}=I(s),i=p(()=>n.value===0?[]:new Array(n.value).fill(0).map((k,m)=>m)),a=A(),u=p(()=>{const k=a.value.color.foreground.main,m=c.value?a.value.color.background.selected:a.value.color.background.transparent,v=a.value.color.foreground.sub,h=a.value.color.background.hover,d=a.value.color.background.active;return{color:k,bgColor:m,subColor:v,hoverBgColor:h,activeBgColor:d}});return(k,m)=>{var v;return f(),C("div",We,[(f(!0),C(J,null,Q(t(i),h=>(f(),C("span",Oe))),256)),g(Y,{class:"mr-3 text-lg",style:S({color:t(_)}),name:t(l)},null,8,["style","name"]),y("span",Ge,M(t(e)),1),((v=o.sub)==null?void 0:v.toString())?(f(),C("span",Xe,M(o.sub),1)):ne("",!0)])}}});var D=O(Je,[["__scopeId","data-v-35a75612"]]);const Qe={class:"py-0 pl-4 pr-2"},qe=q("\u64CD\u4F5C"),Ye=q("\u7B5B\u9009"),Ze=q("\u5206\u7C7B"),et=H({props:{categories:null,post:null,page:null,draft:null,type:null},emits:["on-action","on-click"],setup(o,{emit:s}){const l=o,e=A(),{categories:n,post:c,page:_,draft:i,type:a}=I(l),u=p(()=>c.value+_.value+i.value),k=p(()=>{const h=[];function d(r,L=0){var T;h.push({text:r.name,icon:B.Folder,color:e==null?void 0:e.value.color.folder,indent:L,sub:r.posts.length,key:r.slug,slug:r.slug}),(T=r.children)==null||T.forEach(U=>d(U,L+1))}return n.value.forEach(r=>d(r)),h}),m=p(()=>({deploy:e==null?void 0:e.value.color.primary.n,generate:e==null?void 0:e.value.color.primary.n,clean:e==null?void 0:e.value.color.error.n,gitsave:e==null?void 0:e.value.color.primary.n,gitsync:e==null?void 0:e.value.color.error.n,all:e==null?void 0:e.value.color.all,post:e==null?void 0:e.value.color.post,page:e==null?void 0:e.value.color.page,draft:e==null?void 0:e.value.color.draft})),v=h=>{s("on-action",h)};return(h,d)=>(f(),C("div",Qe,[g(re,null,{default:F(()=>[qe]),_:1}),g(D,{text:"\u90E8\u7F72",icon:t(B).Airplane,color:t(m).deploy,onClick:d[0]||(d[0]=r=>v({type:"deploy"}))},null,8,["icon","color"]),g(D,{text:"\u751F\u6210",icon:t(B).Library,color:t(m).generate,onClick:d[1]||(d[1]=r=>v({type:"generate"}))},null,8,["icon","color"]),g(D,{text:"\u6E05\u7406",icon:t(B).EraseTool,color:t(m).clean,onClick:d[2]||(d[2]=r=>v({type:"clean"}))},null,8,["icon","color"]),g(D,{text:"\u540C\u6B65\u5230 Git",icon:t(B).Upload,color:t(m).gitsave,onClick:d[3]||(d[3]=r=>v({type:"gitsave"}))},null,8,["icon","color"]),g(D,{text:"\u4ECE Git \u540C\u6B65",icon:t(B).Download,color:t(m).gitsync,onClick:d[4]||(d[4]=r=>v({type:"gitsync"}))},null,8,["icon","color"]),g(re,null,{default:F(()=>[Ye]),_:1}),g(D,{text:"\u5168\u90E8",icon:t(B).Home,sub:t(u),color:t(m).all,selected:t(a)==="all",onClick:d[5]||(d[5]=r=>v({type:"all"}))},null,8,["icon","sub","color","selected"]),g(D,{text:"\u6587\u7AE0",icon:t(B).Edit,sub:t(c),color:t(m).post,onClick:d[6]||(d[6]=r=>v({type:"post"})),selected:t(a)==="post"},null,8,["icon","sub","color","selected"]),g(D,{text:"\u9875\u9762",icon:t(B).Page,sub:t(_),color:t(m).page,onClick:d[7]||(d[7]=r=>v({type:"page"})),selected:t(a)==="page"},null,8,["icon","sub","color","selected"]),g(D,{text:"\u8349\u7A3F",icon:t(B).Read,sub:t(i),color:t(m).draft,onClick:d[8]||(d[8]=r=>v({type:"draft"})),selected:t(a)==="draft"},null,8,["icon","sub","color","selected"]),g(re,null,{default:F(()=>[Ze]),_:1}),(f(!0),C(J,null,Q(t(k),r=>(f(),N(D,{text:r.text,icon:r.icon,indent:r.indent,color:r.color,sub:r.sub,onClick:L=>v({type:"category",slug:r.slug})},null,8,["text","icon","indent","color","sub","onClick"]))),256))]))}});function tt(o,s,l){const{idKey:e,parentKey:n,childrenKey:c}=l,_=ot(o,n);function i(u){const k=(_[u[e]]||[]).map(i);return k.length?ge(fe({},u),{[c]:k}):u}return o.filter(s).map(i)}function ot(o,s){const l={};return o.map(e=>{const n=e[s];l[n]?l[n].push(e):l[n]=[e]}),l}const st=me("main",{state:()=>({posts:{},pages:{},categories:{},tags:{}}),actions:{async getBlogData(){try{const[o,s,l,e]=await Ie();this.posts=Z(o,"source"),this.pages=Z(s,"source"),this.tags=Z(l,"slug"),this.categories=Z(e,"slug")}catch(o){throw Ae.notify({title:"\u535A\u5BA2\u6570\u636E\u8F7D\u5165\u5931\u8D25",desc:o.message,type:"error",duration:5e3}),o}}},getters:{articles(o){return G(o.pages).concat(G(o.posts))},allPostsList(o){return G(o.posts)},publishedPostsList(o){return this.allPostsList.filter(s=>s.published)},draftsList(o){return this.allPostsList.filter(s=>!s.published)},pagesList(o){return G(o.pages)},categoriesTree(){return tt(this.categoriesList,o=>!o.parent,{idKey:"_id",parentKey:"parent",childrenKey:"children"})},categoriesList(){return G(this.categories)}}}),ye=me("article-list",{state:()=>({filter:{type:"all"}}),actions:{setFilter(o){this.filter=o}},getters:{articleFilter(o){const s=o.filter;return l=>{switch(s.type){case"all":return l;case"page":return l.filter(e=>e.__page);case"post":return l.filter(e=>e.__post);case"draft":return l.filter(e=>e.__post&&!e.published);case"category":return l.filter(e=>e.__post).filter(e=>{var n;return(n=e.categories)==null?void 0:n.includes(s.slug)});case"tag":return l.filter(e=>e.__post).filter(e=>{var n;return(n=e.tags)==null?void 0:n.includes(s.slug)});default:return[]}}}}}),lt=y("div",{class:"flex-1"},null,-1),nt=H({props:{modelValue:null},emits:["update:modelValue","on-add"],setup(o,{emit:s}){const l=o,{modelValue:e}=I(l),n=c=>s("update:modelValue",c);return(c,_)=>(f(),N(ae,{class:"px-6"},{default:F(()=>[lt,g(Te,{modelValue:t(e),"onUpdate:modelValue":n,type:"secondary",placeholder:"\u641C\u7D22",clearable:""},null,8,["modelValue"]),g(Ne,{class:"ml-2",round:"",onClick:_[0]||(_[0]=i=>s("on-add"))},{default:F(()=>[g(Y,{name:t(B).Add},null,8,["name"])]),_:1})]),_:1}))}});const at=H({props:{color:null,bgColor:null,clickable:{default:!1}},setup(o){const s=o,{color:l,bgColor:e,clickable:n}=I(s),c=A(),_=p(()=>({clickable:n.value})),i=p(()=>{var a,u;return{color:(a=l==null?void 0:l.value)!=null?a:c.value.color.foreground.min,backgroundColor:(u=e==null?void 0:e.value)!=null?u:c.value.color.primary.n}});return(a,u)=>(f(),C("span",{class:Se(["h-badge px-1.5 py-0.5 rounded text-xs select-none mr-1 mb-0.5 inline-block",t(_)]),style:S(t(i))},[z(a.$slots,"default",{},void 0,!0)],6))}});var rt=O(at,[["__scopeId","data-v-c4e4feaa"]]);const ct={class:"h-article-item px-4 py-2 select-none text-sm rounded-md mb-1"},ut={class:"title font-bold"},it={key:0,class:"brief text-xs mt-1"},dt={key:1,class:"mt-0.5"},pt=H({props:{title:null,brief:null,tags:null,date:null,selected:{default:!1}},setup(o){const s=o;X(k=>({"2596f05c":t(u).bgColor,"4d21b478":t(u).hoverBgColor,"34810ff6":t(u).activeBgColor,"3aae2e26":t(u).titleColor,"04a3280b":t(u).briefColor}));const{title:l,brief:e,tags:n,date:c,selected:_}=I(s),i=p(()=>Be(c.value).fromNow()),a=A(),u=p(()=>({bgColor:_.value?a.value.color.background.selected:a.value.color.background.transparent,hoverBgColor:a.value.color.background.hover,activeBgColor:a.value.color.background.active,titleColor:a.value.color.foreground.main,briefColor:a.value.color.foreground.sub}));return(k,m)=>(f(),C("div",ct,[y("div",ut,M(t(l)),1),t(e)?(f(),C("div",it,M(t(e)),1)):ne("",!0),t(n)&&t(n).length?(f(),C("div",dt,[(f(!0),C(J,null,Q(t(n),v=>(f(),N(rt,{color:t(a).color.foreground.main,"bg-color":t(a).color.background.badge,key:v},{default:F(()=>[q(M(v),1)]),_:2},1032,["color","bg-color"]))),128))])):ne("",!0),y("div",{class:"date mt-1 text-xs",style:S({color:t(a).color.primary.n})},M(t(i)),5)]))}});var vt=O(pt,[["__scopeId","data-v-3686081c"]]);const ft={class:"h-article-list px-3 py-2"},gt=H({props:{articles:null,selected:null},emits:["on-click"],setup(o,{emit:s}){const l=o,{articles:e,selected:n}=I(l);return(c,_)=>(f(),C("div",ft,[(f(!0),C(J,null,Q(t(e),i=>(f(),N(vt,{title:i.title,brief:i.brief,tags:i.tags,date:i.date,key:i.source,selected:t(n)===i.source,onClick:a=>s("on-click",{source:i.source,type:i.type})},null,8,["title","brief","tags","date","selected","onClick"]))),128))]))}});const _t=o=>(Le("data-v-66e72356"),o=o(),He(),o),mt={key:0},yt={class:"flex-1 flex flex-col ml-2"},bt={class:"text-sm font-bold"},xt=_t(()=>y("div",{class:"text-xs text-sub"},"\u5DF2\u767B\u5F55",-1)),ht=H({props:{name:{default:""},icon:{default:!1}},setup(o){const s=o;X(c=>({"1b511736":t(n).color.background.hover,"4235f04c":t(n).color.background.active}));const{name:l}=I(s),e=p(()=>{var c;return(c=l.value)==null?void 0:c[0]}),n=A();return(c,_)=>(f(),N(ae,{class:"h-nav-setting text-main px-4 cursor-pointer"},{default:F(()=>[y("div",{class:"avatar w-8 h-8 rounded-full text-xl flex items-center justify-center",style:S({background:t(n).color.primary.n,color:t(n).color.foreground.min})},[!o.icon&&t(e)?(f(),C("span",mt,M(t(e)),1)):(f(),N(Y,{key:1,name:t(B).Contact},null,8,["name"]))],4),y("div",yt,[y("div",bt,M(t(l)||"\u672A\u547D\u540D\u7528\u6237"),1),xt]),g(Y,{name:t(B).Settings},null,8,["name"]),z(c.$slots,"default",{},void 0,!0)]),_:3}))}});var Ct=O(ht,[["__scopeId","data-v-66e72356"]]);const kt={style:{flex:"1 0 0","overflow-y":"auto"}},wt={class:"overflow-auto flex-1"},Ft=H({setup(o){const s=st(),l=Fe(),e=Ve(),n=ye(),c=A(),_=async()=>{await s.getBlogData().catch(Me)};De(async()=>{_()});const i=j(200),a=j(320),u={sep1:{min:150,max:300},sep2:{min:200,max:500}},k=p(()=>s.categoriesTree),m=p(()=>n.articleFilter),v=p(()=>m.value(s.articles)),h=()=>n.setFilter({type:"all"}),d=()=>n.setFilter({type:"post"}),r=()=>n.setFilter({type:"page"}),L=()=>n.setFilter({type:"draft"}),T=b=>n.setFilter({type:"category",slug:b}),U=b=>{switch(b.type){case"all":h();break;case"post":d();break;case"page":r();break;case"draft":L();break;case"category":T(b.slug);break}},ee=p(()=>s.draftsList.length),te=p(()=>s.publishedPostsList.length),oe=p(()=>s.pagesList.length),P=j(""),ce=p(()=>v.value.map(b=>{const $={title:b.title,brief:b.brief,date:b.date,source:b.source,type:b.__post?"post":"page"};return b.__post&&($.tags=b.tags.map(E=>s.tags[E].name)),$})),V=p(()=>decodeURIComponent(e.params.source)),se=({source:b,type:$})=>{b===V.value?l.push("/"):l.push({name:"view",params:{source:b,type:$}})},R=ye(),le=p(()=>R.filter.type);return(b,$)=>(f(),N(t(Re),{sep1at:i.value,"onUpdate:sep1at":$[1]||($[1]=E=>i.value=E),sep2at:a.value,"onUpdate:sep2at":$[2]||($[2]=E=>a.value=E),sep1:u.sep1,sep2:u.sep2,class:"h-full w-full"},{first:F(()=>[y("div",{class:"w-full h-full flex flex-col",style:S({backgroundColor:t(c).color.background.base3})},[g(Ke),y("div",kt,[g(et,{categories:t(k),page:t(oe),post:t(te),draft:t(ee),type:t(le),onOnAction:U},null,8,["categories","page","post","draft","type"])]),g(Ct)],4)]),second:F(()=>[y("div",{class:"flex flex-col w-full h-full",style:S({backgroundColor:t(c).color.background.base2})},[g(nt,{modelValue:P.value,"onUpdate:modelValue":$[0]||($[0]=E=>P.value=E),class:"flex-shrink-0"},null,8,["modelValue"]),y("div",wt,[g(gt,{articles:t(ce),selected:t(V),onOnClick:se},null,8,["articles","selected"])])],4)]),third:F(()=>[y("div",{class:"w-full h-full",style:S({backgroundColor:t(c).color.background.base1})},[g(t(Ee))],4)]),_:1},8,["sep1at","sep2at","sep1","sep2"]))}});export{Ft as default};
