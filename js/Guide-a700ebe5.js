import{d as e,r as t,u as a,o as l,w as s,a as n,b as u,c as o,e as i,f as c,g as r,_ as p,F as d,h as y,i as _,j as m,t as k,k as f,p as g,l as V,m as v,n as b,q as h,s as w,T as I,v as j}from"./index-3d4a6970.js";import{_ as C}from"./MenuItem.vue_vue_type_script_setup_true_lang-55842ea2.js";import{_ as x}from"./Drawer.vue_vue_type_script_setup_true_lang-bf054ff1.js";import"./bodyAddClass-fbec3676.js";const K=e=>(g("data-v-55c86462"),e=e(),V(),e),M={class:"components-Menu scroll-container"},U=K((()=>v("span",{style:{"font-weight":"600"}},"介绍",-1))),$=K((()=>v("span",{style:{"font-weight":"600"}},"快速上手",-1))),G=K((()=>v("span",{style:{"font-weight":"600"}},"版本",-1))),q=b(e({__name:"GuideMenu",emits:["change"],setup(e,{emit:g}){const V=t([]),v=a(),b=()=>{g("change")},h={sub1:{intro:!0},sub2:{install:!0,usage:!0},sub3:{changelog:!0}},w=()=>{const e=v.path.split("/"),t=e[e.length-1],a=Object.keys(h);for(let l=0;l<a.length;l++){const e=a[l];h[e][t]&&(V.value=[e,t])}};l((()=>{w()})),s((()=>v.path),(()=>{w()}));const I=n([{keyValue:"intro",title:"Hut UI"}]),j=n([{keyValue:"install",title:"安装"},{keyValue:"usage",title:"按需导入"}]),x=n([{keyValue:"changelog",title:"变更日志"}]);return(e,t)=>{const a=u("router-link");return o(),i("section",M,[c(f,{selectedKeys:V.value,"onUpdate:selectedKeys":t[0]||(t[0]=e=>V.value=e),mode:"column",onChange:b,style:{border:"none"}},{default:r((()=>[c(p,{keyValue:"sub1",collapsible:!1},{title:r((()=>[U])),default:r((()=>[(o(!0),i(d,null,y(I,(e=>(o(),_(C,{keyValue:e.keyValue,key:e.keyValue,class:"menuItem"},{default:r((()=>[c(a,{to:`/guide/${e.keyValue}`,class:"router-link"},{default:r((()=>[m(k(e.title),1)])),_:2},1032,["to"])])),_:2},1032,["keyValue"])))),128))])),_:1}),c(p,{keyValue:"sub2",collapsible:!1},{title:r((()=>[$])),default:r((()=>[(o(!0),i(d,null,y(j,(e=>(o(),_(C,{keyValue:e.keyValue,key:e.keyValue,class:"menuItem"},{default:r((()=>[c(a,{to:`/guide/${e.keyValue}`,class:"router-link"},{default:r((()=>[m(k(e.title),1)])),_:2},1032,["to"])])),_:2},1032,["keyValue"])))),128))])),_:1}),c(p,{keyValue:"sub3",collapsible:!1},{title:r((()=>[G])),default:r((()=>[(o(!0),i(d,null,y(x,(e=>(o(),_(C,{keyValue:e.keyValue,key:e.keyValue,class:"menuItem"},{default:r((()=>[c(a,{to:`/guide/${e.keyValue}`,class:"router-link"},{default:r((()=>[m(k(e.title),1)])),_:2},1032,["to"])])),_:2},1032,["keyValue"])))),128))])),_:1})])),_:1},8,["selectedKeys"])])}}}),[["__scopeId","data-v-55c86462"]]),A={class:"components--wrap"},B={class:"components-Body"},D={class:"display-menu scroll-container"},F={class:"display-content scroll-container"},H={class:"display-pop-menu scroll-container"},O=b(e({__name:"Guide",setup(e){const a=t(!1),l=()=>{a.value=!0},s=()=>{a.value=!1};return(e,t)=>{const n=u("router-view");return o(),i(d,null,[v("div",A,[v("section",B,[v("span",{class:"menu-pop-button",onClick:l},[c(h(w),{name:"menu_outline",width:"20px",height:"20px",fill:"#262626"})]),v("section",D,[c(q)]),v("section",F,[c(n,null,{default:r((({Component:e})=>[c(I,{name:"fade"},{default:r((()=>[(o(),_(j(e)))])),_:2},1024)])),_:1})])])]),c(h(x),{visible:a.value,"onUpdate:visible":t[0]||(t[0]=e=>a.value=e),placement:"left",classname:"custom"},{content:r((()=>[v("section",H,[c(q,{onChange:s})])])),_:1},8,["visible"])],64)}}}),[["__scopeId","data-v-c3985cb9"]]);export{O as default};
