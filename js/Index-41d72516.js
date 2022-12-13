import{D as t,C as e}from"./DemoDisplay-f307a3ea.js";import{d as a,c as n,j as r,g as l,f as o,q as d,k as s,n as p,I as c,r as u}from"./index-85b89606.js";import{_ as m,P as i,T as f}from"./Paragraph-361ff5f9.js";import{_}from"./ApiIntro-a264b77e.js";import{g as h,a as w}from"./helper-e3311bca.js";import{_ as x}from"./Card-a3060936.js";const C=p("p",null,"通用卡片容器。",-1),D=p("ul",null,[p("li",null,"Card: 主要组件")],-1),b=p("ul",null,[p("li",null,"最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。")],-1),v=a({__name:"Intro",setup:t=>(t,e)=>(n(),r(d(f),null,{default:l((()=>[o(d(m),null,{default:l((()=>[s("简介")])),_:1}),o(d(i),null,{default:l((()=>[C])),_:1}),o(d(m),null,{default:l((()=>[s("组件概览")])),_:1}),o(d(i),null,{default:l((()=>[D])),_:1}),o(d(m),null,{default:l((()=>[s("使用场景")])),_:1}),o(d(i),null,{default:l((()=>[b])),_:1})])),_:1}))}),g=a({__name:"Api",setup(t){const e=[],a=[{componentName:"Card",attrContent:[{rowIndex:1,"属性":"border","说明":"是否有border","类型":"boolean","默认值":"false"},{rowIndex:2,"属性":"shadow","说明":"是否有shadow","类型":"boolean","默认值":"false"},{rowIndex:3,"属性":"title","说明":"card标题","类型":"string","默认值":""}]}];return(t,l)=>(n(),r(_,{"attr-content-arr":a,"event-content":e}))}});var j=t=>{t.__sourceCode='<template>\n  <Card title="Default size card" style="width: 300px">\n    <template #extra>\n      <a href="#">more</a>\n    </template>\n    <p>card content</p>\n    <p>card content</p>\n    <p>card content</p>\n  </Card>\n</template>\n\n<script setup lang="ts">\nimport { Card } from \'hut-ui\'\n<\/script>',t.__sourceTitle=" 基本用法 "};const y=p("a",{href:"#"},"more",-1),I=p("p",null,"card content",-1),z=p("p",null,"card content",-1),T=p("p",null,"card content",-1),A=a({__name:"DemoOne",setup:t=>(t,e)=>(n(),r(d(x),{title:"Default size card",style:{width:"300px"}},{extra:l((()=>[y])),default:l((()=>[I,z,T])),_:1}))});j(A);var P=t=>{t.__sourceCode='<template>\n  <Card title="Default size card" style="width: 500px" shadow>\n    <template #extra>\n      <a href="#">more</a>\n    </template>\n    <p>card content</p>\n    <p>card content</p>\n    <p>card content</p>\n  </Card>\n</template>\n\n<script setup lang="ts">\nimport { Card } from \'hut-ui\'\n<\/script>',t.__sourceTitle=" hover添加shadow "};const k=p("a",{href:"#"},"more",-1),q=p("p",null,"card content",-1),N=p("p",null,"card content",-1),O=p("p",null,"card content",-1),B=a({__name:"DemoTwo",setup:t=>(t,e)=>(n(),r(d(x),{title:"Default size card",style:{width:"500px"},shadow:""},{extra:l((()=>[k])),default:l((()=>[q,N,O])),_:1}))});P(B);var E=t=>{t.__sourceCode='<template>\n  <Card title="Default size card" style="width: 500px" :border="false" shadow>\n    <template #extra>\n      <a href="#">more</a>\n    </template>\n    <p>card content</p>\n    <p>card content</p>\n    <p>card content</p>\n  </Card>\n</template>\n\n<script setup lang="ts">\nimport { Card } from \'hut-ui\'\n<\/script>',t.__sourceTitle=" 没有border "};const F=p("a",{href:"#"},"more",-1),G=p("p",null,"card content",-1),H=p("p",null,"card content",-1),J=p("p",null,"card content",-1),K=a({__name:"DemoThree",setup:t=>(t,e)=>(n(),r(d(x),{title:"Default size card",style:{width:"500px"},border:!1,shadow:""},{extra:l((()=>[F])),default:l((()=>[G,H,J])),_:1}))});E(K);const L=a({__name:"Demo",setup(e){const a=c((()=>[A,B,K].map(((t,e)=>h(t,"card",e)))));return(e,l)=>(n(),r(t,{"demo-arr":d(a)},null,8,["demo-arr"]))}}),M=a({__name:"Index",setup(t){u(null);const a=["基本用法","hover添加shadow","没有border"],s=c((()=>w("card",a)));return(t,a)=>(n(),r(e,{"nav-arr":d(s),title:"Card 卡片","component-name":"card"},{intro:l((()=>[o(v)])),demo:l((()=>[o(L)])),api:l((()=>[o(g)])),_:1},8,["nav-arr"]))}});export{M as default};
