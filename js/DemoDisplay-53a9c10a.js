import{d as e,v as t,r as l,o as a,K as s,c as i,e as n,n as o,G as r,F as c,i as u,j as d,z as p,L as v,q as m,M as f,t as h,B as y,_ as w,f as g,g as _,C as k,k as x,N as C,s as N,I as T,J as A,T as D,O as $}from"./index-6bb449f3.js";import{_ as b}from"./Paragraph-138135f0.js";import{b as H}from"./helper-7416cab9.js";const L={class:"ui-anchor-indicator"},q=e({__name:"Anchor",props:{customClass:{default:"custom-class"},scrollContainer:{type:[Function,null],default:()=>window},affix:{type:Boolean,default:!0}},setup(e){const h=e,{scrollContainer:y,affix:w}=t(h);let g=[];(()=>{var e,t;let l=[];f().default&&(l=(null==(t=(e=f()).default)?void 0:t.call(e))||[]),g=1===l.length&&l[0].children?l[0].children:l})();const _=l(null),k=l([]),x=l(0),C=l(null);k.value=g.map(((e,t)=>({titleVNode:e,targetOffsetTop:0,targetClientHeight:0,active:0===t,order:t})));const N=()=>{k.value.forEach((e=>{let t;e.titleVNode&&e.titleVNode.props&&(t=document.querySelector(e.titleVNode.props.href),t?(e.targetOffsetTop=t.offsetTop-C.value.offsetTop,e.targetClientHeight=t.clientHeight):(e.targetOffsetTop=0,e.targetClientHeight=0))}))};const T=function(e,t){let l=(new Date).getTime();return()=>{const a=(new Date).getTime();a-l>=t&&(e(),l=a)}}((function(){N();let e=0;C.value&&(e=C.value.scrollTop),k.value.forEach((t=>{t.targetOffsetTop>=e-t.targetClientHeight&&t.targetOffsetTop<=e+80&&(_.value=t,x.value=t.order),t.active=!1})),_.value.active=!0}),20);return a((()=>{var e,t,l;(null==(e=y.value)?void 0:e.call(y))!==window&&(null==(t=y.value)?void 0:t.call(y))?C.value=y.value():C.value=document.documentElement,N(),_.value=k.value[0],C.value&&(null==(l=C.value)||l.addEventListener("scroll",T))})),s((()=>{var e;null==(e=C.value)||e.removeEventListener("scroll",T)})),(t,l)=>(i(),n("div",{class:p(["ui-anchor-wrap",{customClass:e.customClass,"ui-anchor-fix":m(w)}])},[o("div",L,[o("span",{class:"anchor-indicator-radius",style:r({top:4+23*x.value+"px"})},null,4)]),(i(!0),n(c,null,u(k.value,(e=>(i(),d(v(e.titleVNode),{key:e.titleVNode,class:p({active:e.active})},null,8,["class"])))),128))],2))}}),V=e({__name:"AnchorLink",props:{title:{default:""},href:null,nested:{type:Boolean,default:!1}},setup(e){const l=e,{href:a}=t(l),s=()=>{a.value&&document.querySelector(a.value)&&document.querySelector(a.value).scrollIntoView({behavior:"smooth"})};return(t,l)=>(i(),n("span",{onClick:s,class:p(["ui-anchorLink-title",{"ui-anchorLink-nested":e.nested}])},h(e.title),3))}}),F={class:"ui-divider-wrap"},O={class:"inner"},E=e({__name:"Divider",props:{position:null,leftDistance:{default:"100%"},rightDistance:{default:"100%"}},setup:e=>(t,l)=>(i(),n("div",F,[o("div",{class:p(["left",{positionLeft:"left"===e.position}]),style:r({width:e.position?"8%":e.leftDistance})},null,6),o("div",O,[y(t.$slots,"default")]),o("div",{class:p(["right",{positionRight:"right"===e.position}]),style:r({width:e.position?"8%":e.rightDistance})},null,6)]))});const I={key:0,class:"nav"},j={class:"title"},S={class:"title-description"},B={class:"example"},M={class:"example-wrap"},R={key:1,class:"api"},P={class:"apiIntro scroll-container"},z={class:"footer-wrap"};var G=w(e({__name:"ComponentContent",props:{navArr:{default:()=>[]},title:null,componentName:null},setup(e){const t=l(null);return(l,a)=>(i(),n("div",{class:"template-wrap scroll-container",ref_key:"wrap",ref:t,id:"display-container-wrap"},[e.navArr[0]?(i(),n("section",I,[g(m(q),{customClass:"customClass",style:{top:"80px",right:"16px"},"scroll-container":()=>t.value},{default:_((()=>[(i(!0),n(c,null,u(e.navArr,(e=>(i(),d(m(V),{key:e.id,href:e.id,title:e.title,nested:e.nested},null,8,["href","title","nested"])))),128))])),_:1},8,["scroll-container"])])):k("",!0),o("section",j,[g(m(b),{level:2,id:`ex-${e.componentName}-title`},{default:_((()=>[x(h(e.title),1)])),_:1},8,["id"]),o("div",S,[y(l.$slots,"intro",{},void 0,!0)])]),o("section",B,[g(m(b),{level:4,class:"demo",id:`ex-${e.componentName}-demo`},{default:_((()=>[x("案例")])),_:1},8,["id"]),o("div",M,[y(l.$slots,"demo",{},void 0,!0)])]),l.$slots.api?(i(),n("section",R,[g(m(b),{level:4,id:`ex-${e.componentName}-api`},{default:_((()=>[x("接口")])),_:1},8,["id"]),o("div",P,[y(l.$slots,"api",{},void 0,!0)])])):k("",!0),o("section",z,[g(C)])],512))}}),[["__scopeId","data-v-09a1dc81"]]);const J=e({__name:"HideCode",setup:e=>(e,t)=>(i(),d(m(T),{type:"link",style:{padding:"4px 10px"}},{default:_((()=>[g(m(N),{name:"code_hide",height:"1.2em",width:"1.2em",fill:"#00000073"})])),_:1}))}),K=e({__name:"ShowCode",setup:e=>(e,t)=>(i(),d(m(T),{type:"link",style:{padding:"4px 10px"}},{default:_((()=>[g(m(N),{name:"display",height:"1.2em",width:"1.2em",fill:"#00000073"})])),_:1}))});const W={class:"ui-preview-wrap"},Q={class:"actions"},U=["innerHTML"],X=e({__name:"Preview",props:{html:{default:""}},setup(e){const a=e,{html:s}=t(a),r=A((()=>s.value?H(s.value):"")),c=l(!1),u=l(null),p=l(null),f=A((()=>c.value?{vNode:J,key:"hide"}:{vNode:K,key:"show"})),h=l(0);function y(){h.value+=40,u.value.style.height=`${h.value}px`,h.value<p.value.clientHeight+14&&window.requestAnimationFrame(y)}function w(){h.value-=40,u.value.style.height=`${h.value}px`,h.value>=0&&window.requestAnimationFrame(w)}const x=()=>{c.value=!c.value,c.value&&p.value&&u.value?window.requestAnimationFrame(y):u.value&&window.requestAnimationFrame(w)},C=async()=>{try{await navigator.clipboard.writeText(s.value),$.success("复制成功")}catch(e){$.error("复制失败")}};return(e,t)=>(i(),n("div",W,[o("div",Q,[g(D,{name:"button",mode:"out-in"},{default:_((()=>[(i(),d(v(m(f).vNode),{key:m(f).key,onClick:x}))])),_:1}),g(m(T),{type:"link",onClick:C,style:{padding:"4px 10px"}},{default:_((()=>[g(m(N),{name:"copy",height:"1.2em",width:"1.2em",fill:"#00000073"})])),_:1})]),o("div",{class:"html-show",ref_key:"codeWrapRef",ref:u},[m(s)?(i(),n("pre",{key:0,class:"language-html scroll-container",innerHTML:m(r),ref_key:"codeRef",ref:p},null,8,U)):k("",!0)],512)]))}});const Y={class:"demo-wrap"},Z=["id"],ee={class:"item-display-wrap"},te={class:"item-display"},le={class:"sourceCode-display"};var ae=w(e({__name:"DemoDisplay",props:{demoArr:null},setup:e=>(t,l)=>(i(),n("div",Y,[(i(!0),n(c,null,u(e.demoArr,(e=>(i(),n("div",{key:e.id,class:"demo-wrap-item",id:e.id},[o("section",ee,[g(m(E),{leftDistance:"40px"},{default:_((()=>[x(h(e.title),1)])),_:2},1024),o("div",te,[(i(),d(v(e.demo)))]),o("div",le,[g(X,{html:e.html},null,8,["html"])])])],8,Z)))),128))]))}),[["__scopeId","data-v-e57c7bae"]]);export{G as C,ae as D,E as _,q as a,V as b};