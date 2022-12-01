import{_ as e,P as t,T as r,g as a,D as n,a as m,b as l}from"./DemoDisplay-326921c5.js";import"./Upload.vue_vue_type_style_index_0_lang-ed87ac64.js";import{_ as u}from"./SubMenu.vue_vue_type_style_index_0_lang-e1534eb9.js";import{d as c,u as d,o as i,c as o,F as s,g as p,b,t as _,h as f,m as B,l as I,v as h,w as g,e as w,i as v,z as x,r as C}from"./index-5f8f9faf.js";import{_ as S}from"./ApiIntro-249450a9.js";const y={class:"ui-Breadcrumb-wrap"},A={class:"ui-Breadcrumb-separator"},j=c({__name:"Breadcrumb",props:{separator:{default:"/"}},setup(e){const t=d().default();return(r,a)=>(i(),o("div",y,[(i(!0),o(s,null,p(I(t),((t,r)=>(i(),o("div",{class:"breadcrumb-item",key:r},[b("span",A,_(0!==r?e.separator:""),1),(i(),f(B(t)))])))),128))]))}}),T=["href"],D={class:"ui-BreadcrumbItem-name"},k=c({__name:"BreadcrumbItem",props:{href:{default:"javascript:;"}},setup:e=>(t,r)=>(i(),o("a",{class:"ui-BreadcrumbItem-wrap",href:e.href},[b("span",null,[h(t.$slots,"icon")]),b("span",D,[h(t.$slots,"default")])],8,T))}),W=b("p",null,"显示当前页面在系统层级结构中的位置，并能向上返回。",-1),F=b("ul",null,[b("li",null,"Breadcrumb: 主要组件"),b("li",null,"BreadcrumbItem:子组件。")],-1),H=b("ul",null,[b("li",null,"当系统拥有超过两级以上的层级结构时；"),b("li",null,"当需要告知用户『你在哪里』时；"),b("li",null,"当需要向上导航的功能时。")],-1),L=c({__name:"Intro",setup:a=>(a,n)=>(i(),f(I(r),null,{default:g((()=>[w(I(e),null,{default:g((()=>[v("简介")])),_:1}),w(I(t),null,{default:g((()=>[W])),_:1}),w(I(e),null,{default:g((()=>[v("组件概览")])),_:1}),w(I(t),null,{default:g((()=>[F])),_:1}),w(I(e),null,{default:g((()=>[v("使用场景")])),_:1}),w(I(t),null,{default:g((()=>[H])),_:1})])),_:1}))}),N=c({__name:"Api",setup(e){const t=[],r=[{componentName:"Text",attrContent:[{rowIndex:1,"属性":"separator","说明":"分隔符","类型":"string","默认值":"/"}]},{componentName:"Title",attrContent:[{rowIndex:1,"属性":"href","说明":"跳转链接","类型":"string","默认值":"javascript:;"}]}];return(e,a)=>(i(),f(S,{"attr-content-arr":r,"event-content":t}))}});var $=e=>{e.__sourceCode="<template>\n  <Breadcrumb>\n    <BreadcrumbItem>C:</BreadcrumbItem>\n    <BreadcrumbItem>Windows</BreadcrumbItem>\n    <BreadcrumbItem>System32</BreadcrumbItem>\n    <BreadcrumbItem>drivers</BreadcrumbItem>\n    <BreadcrumbItem>etc</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n<script setup lang=\"ts\">\nimport { Breadcrumb, BreadcrumbItem } from 'ant'\n<\/script>",e.__sourceTitle=" 常规用法 "};const z=c({__name:"DemoOne",setup:e=>(e,t)=>(i(),f(I(j),null,{default:g((()=>[w(I(k),null,{default:g((()=>[v("C:")])),_:1}),w(I(k),null,{default:g((()=>[v("Windows")])),_:1}),w(I(k),null,{default:g((()=>[v("System32")])),_:1}),w(I(k),null,{default:g((()=>[v("drivers")])),_:1}),w(I(k),null,{default:g((()=>[v("etc")])),_:1})])),_:1}))});$(z);var M=e=>{e.__sourceCode='<template>\n  <Breadcrumb separator="~">\n    <BreadcrumbItem>C:</BreadcrumbItem>\n    <BreadcrumbItem>Windows</BreadcrumbItem>\n    <BreadcrumbItem>System32</BreadcrumbItem>\n    <BreadcrumbItem>drivers</BreadcrumbItem>\n    <BreadcrumbItem>etc</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n<script setup lang="ts">\nimport { Breadcrumb, BreadcrumbItem } from \'ant\'\n<\/script>',e.__sourceTitle=" 自定义分隔符 "};const O=c({__name:"DemoTwo",setup:e=>(e,t)=>(i(),f(I(j),{separator:"~"},{default:g((()=>[w(I(k),null,{default:g((()=>[v("C:")])),_:1}),w(I(k),null,{default:g((()=>[v("Windows")])),_:1}),w(I(k),null,{default:g((()=>[v("System32")])),_:1}),w(I(k),null,{default:g((()=>[v("drivers")])),_:1}),w(I(k),null,{default:g((()=>[v("etc")])),_:1})])),_:1}))});M(O);var P=e=>{e.__sourceCode='<template>\n  <Breadcrumb separator="~">\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" />\n      </template>\n      black\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="pink" />\n      </template>\n      pink\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="blue" />\n      </template>\n      blue\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="green" />\n      </template>\n      green\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="red" />\n      </template>\n      red\n    </BreadcrumbItem>\n  </Breadcrumb>\n</template>\n\n<script setup lang="ts">\nimport { Breadcrumb, BreadcrumbItem, SvgIcon } from \'ant\'\n<\/script>',e.__sourceTitle=" 嵌入icon "};const U=c({__name:"DemoThree",setup:e=>(e,t)=>(i(),f(I(j),{separator:"~"},{default:g((()=>[w(I(k),null,{icon:g((()=>[w(I(u),{name:"weixin",width:"1em",height:"1em"})])),default:g((()=>[v(" black ")])),_:1}),w(I(k),null,{icon:g((()=>[w(I(u),{name:"weixin",width:"1em",height:"1em",fill:"pink"})])),default:g((()=>[v(" pink ")])),_:1}),w(I(k),null,{icon:g((()=>[w(I(u),{name:"weixin",width:"1em",height:"1em",fill:"blue"})])),default:g((()=>[v(" blue ")])),_:1}),w(I(k),null,{icon:g((()=>[w(I(u),{name:"weixin",width:"1em",height:"1em",fill:"green"})])),default:g((()=>[v(" green ")])),_:1}),w(I(k),null,{icon:g((()=>[w(I(u),{name:"weixin",width:"1em",height:"1em",fill:"red"})])),default:g((()=>[v(" red ")])),_:1})])),_:1}))});P(U);var q=e=>{e.__sourceCode='<template>\n  <Breadcrumb separator=">>">\n    <BreadcrumbItem>Home</BreadcrumbItem>\n    <BreadcrumbItem href="//google.com">Application Center</BreadcrumbItem>\n    <BreadcrumbItem href="//taobao.com">Application List</BreadcrumbItem>\n    <BreadcrumbItem href="//jingdong.com">An Application</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n\n<script setup lang="ts">\nimport { Breadcrumb, BreadcrumbItem } from \'ant\'\n<\/script>',e.__sourceTitle=" 支持链接 "};const E=c({__name:"DemoFour",setup:e=>(e,t)=>(i(),f(I(j),{separator:">>"},{default:g((()=>[w(I(k),null,{default:g((()=>[v("Home")])),_:1}),w(I(k),{href:"//google.com"},{default:g((()=>[v("Application Center")])),_:1}),w(I(k),{href:"//taobao.com"},{default:g((()=>[v("Application List")])),_:1}),w(I(k),{href:"//jingdong.com"},{default:g((()=>[v("An Application")])),_:1})])),_:1}))});q(E);const G=c({__name:"Demo",setup(e){const t=x((()=>[z,O,U,E].map(((e,t)=>a(e,"breadcrumb",t)))));return(e,r)=>(i(),f(n,{"demo-arr":I(t)},null,8,["demo-arr"]))}}),J=c({__name:"Index",setup(e){C(null);const t=["常规用法","自定义分隔符","嵌入icon","支持链接"],r=x((()=>l("breadcrumb",t)));return(e,t)=>(i(),f(m,{"nav-arr":I(r),title:"Breadcrumb 面包屑","component-name":"breadcrumb"},{intro:g((()=>[w(L)])),demo:g((()=>[w(G)])),api:g((()=>[w(N)])),_:1},8,["nav-arr"]))}});export{J as default};