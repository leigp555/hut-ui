import{_ as e,P as t,T as r,g as a,D as n,C as m,a as l}from"./DemoDisplay-496f0bad.js";import"./Upload.vue_vue_type_style_index_0_lang-5a132e89.js";import{d as u,u as c,o as d,c as i,F as o,f as s,b as p,t as b,g as _,m as f,l as B,v as I,w as h,e as g,h as w,A as v,z as x,r as C}from"./index-c5a7ce44.js";/* empty css                                                */import{_ as A}from"./ApiIntro-0d8754bc.js";const S={class:"ui-Breadcrumb-wrap"},y={class:"ui-Breadcrumb-separator"},j=u({__name:"Breadcrumb",props:{separator:{default:"/"}},setup(e){const t=c().default();return(r,a)=>(d(),i("div",S,[(d(!0),i(o,null,s(B(t),((t,r)=>(d(),i("div",{class:"breadcrumb-item",key:r},[p("span",y,b(0!==r?e.separator:""),1),(d(),_(f(t)))])))),128))]))}}),T=["href"],D={class:"ui-BreadcrumbItem-name"},k=u({__name:"BreadcrumbItem",props:{href:{default:"javascript:;"}},setup:e=>(t,r)=>(d(),i("a",{class:"ui-BreadcrumbItem-wrap",href:e.href},[p("span",null,[I(t.$slots,"icon")]),p("span",D,[I(t.$slots,"default")])],8,T))}),W=p("p",null,"显示当前页面在系统层级结构中的位置，并能向上返回。",-1),F=p("ul",null,[p("li",null,"Breadcrumb: 主要组件"),p("li",null,"BreadcrumbItem:子组件。")],-1),H=p("ul",null,[p("li",null,"当系统拥有超过两级以上的层级结构时；"),p("li",null,"当需要告知用户『你在哪里』时；"),p("li",null,"当需要向上导航的功能时。")],-1),L=u({__name:"Intro",setup:a=>(a,n)=>(d(),_(B(r),null,{default:h((()=>[g(B(e),null,{default:h((()=>[w("简介")])),_:1}),g(B(t),null,{default:h((()=>[W])),_:1}),g(B(e),null,{default:h((()=>[w("组件概览")])),_:1}),g(B(t),null,{default:h((()=>[F])),_:1}),g(B(e),null,{default:h((()=>[w("使用场景")])),_:1}),g(B(t),null,{default:h((()=>[H])),_:1})])),_:1}))}),N=u({__name:"Api",setup(e){const t=[],r=[{componentName:"Text",attrContent:[{rowIndex:1,"属性":"separator","说明":"分隔符","类型":"string","默认值":"/"}]},{componentName:"Title",attrContent:[{rowIndex:1,"属性":"href","说明":"跳转链接","类型":"string","默认值":"javascript:;"}]}];return(e,a)=>(d(),_(A,{"attr-content-arr":r,"event-content":t}))}});var $=e=>{e.__sourceCode="<template>\n  <Breadcrumb>\n    <BreadcrumbItem>C:</BreadcrumbItem>\n    <BreadcrumbItem>Windows</BreadcrumbItem>\n    <BreadcrumbItem>System32</BreadcrumbItem>\n    <BreadcrumbItem>drivers</BreadcrumbItem>\n    <BreadcrumbItem>etc</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n<script setup lang=\"ts\">\nimport { Breadcrumb, BreadcrumbItem } from 'ant'\n<\/script>",e.__sourceTitle=" 常规用法 "};const z=u({__name:"DemoOne",setup:e=>(e,t)=>(d(),_(B(j),null,{default:h((()=>[g(B(k),null,{default:h((()=>[w("C:")])),_:1}),g(B(k),null,{default:h((()=>[w("Windows")])),_:1}),g(B(k),null,{default:h((()=>[w("System32")])),_:1}),g(B(k),null,{default:h((()=>[w("drivers")])),_:1}),g(B(k),null,{default:h((()=>[w("etc")])),_:1})])),_:1}))});$(z);var M=e=>{e.__sourceCode='<template>\n  <Breadcrumb separator="~">\n    <BreadcrumbItem>C:</BreadcrumbItem>\n    <BreadcrumbItem>Windows</BreadcrumbItem>\n    <BreadcrumbItem>System32</BreadcrumbItem>\n    <BreadcrumbItem>drivers</BreadcrumbItem>\n    <BreadcrumbItem>etc</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n<script setup lang="ts">\nimport { Breadcrumb, BreadcrumbItem } from \'ant\'\n<\/script>',e.__sourceTitle=" 自定义分隔符 "};const O=u({__name:"DemoTwo",setup:e=>(e,t)=>(d(),_(B(j),{separator:"~"},{default:h((()=>[g(B(k),null,{default:h((()=>[w("C:")])),_:1}),g(B(k),null,{default:h((()=>[w("Windows")])),_:1}),g(B(k),null,{default:h((()=>[w("System32")])),_:1}),g(B(k),null,{default:h((()=>[w("drivers")])),_:1}),g(B(k),null,{default:h((()=>[w("etc")])),_:1})])),_:1}))});M(O);var P=e=>{e.__sourceCode='<template>\n  <Breadcrumb separator="~">\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" />\n      </template>\n      black\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="pink" />\n      </template>\n      pink\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="blue" />\n      </template>\n      blue\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="green" />\n      </template>\n      green\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="red" />\n      </template>\n      red\n    </BreadcrumbItem>\n  </Breadcrumb>\n</template>\n\n<script setup lang="ts">\nimport { Breadcrumb, BreadcrumbItem, SvgIcon } from \'ant\'\n<\/script>',e.__sourceTitle=" 嵌入icon "};const U=u({__name:"DemoThree",setup:e=>(e,t)=>(d(),_(B(j),{separator:"~"},{default:h((()=>[g(B(k),null,{icon:h((()=>[g(B(v),{name:"weixin",width:"1em",height:"1em"})])),default:h((()=>[w(" black ")])),_:1}),g(B(k),null,{icon:h((()=>[g(B(v),{name:"weixin",width:"1em",height:"1em",fill:"pink"})])),default:h((()=>[w(" pink ")])),_:1}),g(B(k),null,{icon:h((()=>[g(B(v),{name:"weixin",width:"1em",height:"1em",fill:"blue"})])),default:h((()=>[w(" blue ")])),_:1}),g(B(k),null,{icon:h((()=>[g(B(v),{name:"weixin",width:"1em",height:"1em",fill:"green"})])),default:h((()=>[w(" green ")])),_:1}),g(B(k),null,{icon:h((()=>[g(B(v),{name:"weixin",width:"1em",height:"1em",fill:"red"})])),default:h((()=>[w(" red ")])),_:1})])),_:1}))});P(U);var q=e=>{e.__sourceCode='<template>\n  <Breadcrumb separator=">>">\n    <BreadcrumbItem>Home</BreadcrumbItem>\n    <BreadcrumbItem href="//google.com">Application Center</BreadcrumbItem>\n    <BreadcrumbItem href="//taobao.com">Application List</BreadcrumbItem>\n    <BreadcrumbItem href="//jingdong.com">An Application</BreadcrumbItem>\n  </Breadcrumb>\n</template>\n\n<script setup lang="ts">\nimport { Breadcrumb, BreadcrumbItem } from \'ant\'\n<\/script>',e.__sourceTitle=" 支持链接 "};const E=u({__name:"DemoFour",setup:e=>(e,t)=>(d(),_(B(j),{separator:">>"},{default:h((()=>[g(B(k),null,{default:h((()=>[w("Home")])),_:1}),g(B(k),{href:"//google.com"},{default:h((()=>[w("Application Center")])),_:1}),g(B(k),{href:"//taobao.com"},{default:h((()=>[w("Application List")])),_:1}),g(B(k),{href:"//jingdong.com"},{default:h((()=>[w("An Application")])),_:1})])),_:1}))});q(E);const G=u({__name:"Demo",setup(e){const t=x((()=>[z,O,U,E].map(((e,t)=>a(e,"breadcrumb",t)))));return(e,r)=>(d(),_(n,{"demo-arr":B(t)},null,8,["demo-arr"]))}}),J=u({__name:"Index",setup(e){C(null);const t=["常规用法","自定义分隔符","嵌入icon","支持链接"],r=x((()=>l("breadcrumb",t)));return(e,t)=>(d(),_(m,{"nav-arr":B(r),title:"Breadcrumb 面包屑","component-name":"breadcrumb"},{intro:h((()=>[g(L)])),demo:h((()=>[g(G)])),api:h((()=>[g(N)])),_:1},8,["nav-arr"]))}});export{J as default};
