import{D as t,C as e}from"./DemoDisplay-53a9c10a.js";import{d as n,c as i,e as m,n as o,B as a,j as p,g as s,f as l,q as r,k as u,s as c,I as d,J as _,r as y}from"./index-6bb449f3.js";import{_ as f,P as g,T as h}from"./Paragraph-138135f0.js";import{_ as v}from"./ApiIntro-fdf4ccdf.js";import{g as E,a as B}from"./helper-7416cab9.js";const I={class:"ui-empty-wrap"},b={class:"ui-empty-icon"},w={class:"ui-empty-description"},A={class:"ui-empty-actions"},k=n({__name:"Empty",setup:t=>(t,e)=>(i(),m("div",I,[o("div",b,[a(t.$slots,"icon")]),o("div",w,[a(t.$slots,"description")]),o("div",A,[a(t.$slots,"actions")]),a(t.$slots,"default")]))}),D=o("p",null,"空状态时的展示占位图。",-1),j=o("ul",null,[o("li",null,"Empty: 主要组件")],-1),L=o("ul",null,[o("li",null,"当目前没有数据时，用于显式的用户提示。"),o("li",null,"初始化场景时的引导创建流程。")],-1),S=n({__name:"Intro",setup:t=>(t,e)=>(i(),p(r(h),null,{default:s((()=>[l(r(f),null,{default:s((()=>[u("简介")])),_:1}),l(r(g),null,{default:s((()=>[D])),_:1}),l(r(f),null,{default:s((()=>[u("组件概览")])),_:1}),l(r(g),null,{default:s((()=>[j])),_:1}),l(r(f),null,{default:s((()=>[u("使用场景")])),_:1}),l(r(g),null,{default:s((()=>[L])),_:1})])),_:1}))}),T=n({__name:"Api",setup(t){const e=[],n=[];return(t,m)=>(i(),p(v,{"attr-content-arr":n,"event-content":e}))}});var C=t=>{t.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <SvgIcon name="empty1" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Empty, SvgIcon, Button } from \'hut-ui\'\n<\/script>',t.__sourceTitle=" 基本用法 "};const $=o("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),x=n({__name:"DemoOne",setup:t=>(t,e)=>(i(),p(r(k),null,{icon:s((()=>[l(r(c),{name:"empty1",width:"3em",height:"3em"})])),description:s((()=>[$])),actions:s((()=>[l(r(d),{type:"primary"},{default:s((()=>[u("back")])),_:1})])),_:1}))});C(x);var P=t=>{t.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <SvgIcon name="empty2" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Empty, SvgIcon, Button } from \'hut-ui\'\n<\/script>',t.__sourceTitle=" 自定义图片 "};const q=o("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),J=n({__name:"DemoTwo",setup:t=>(t,e)=>(i(),p(r(k),null,{icon:s((()=>[l(r(c),{name:"empty2",width:"3em",height:"3em"})])),description:s((()=>[q])),actions:s((()=>[l(r(d),{type:"primary"},{default:s((()=>[u("back")])),_:1})])),_:1}))});P(J);var O=t=>{t.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <SvgIcon name="empty3" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Empty, SvgIcon, Button } from \'hut-ui\'\n<\/script>',t.__sourceTitle=" 自定义描述 "};const z=o("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),F=n({__name:"DemoThree",setup:t=>(t,e)=>(i(),p(r(k),null,{icon:s((()=>[l(r(c),{name:"empty3",width:"3em",height:"3em"})])),description:s((()=>[z])),actions:s((()=>[l(r(d),{type:"primary"},{default:s((()=>[u("back")])),_:1})])),_:1}))});O(F);const G=n({__name:"Demo",setup(e){const n=_((()=>[x,J,F].map(((t,e)=>E(t,"empty",e)))));return(e,m)=>(i(),p(t,{"demo-arr":r(n)},null,8,["demo-arr"]))}}),H=n({__name:"Index",setup(t){y(null);const n=["基本用法","自定义图片","自定义描述"],m=_((()=>B("empty",n)));return(t,n)=>(i(),p(e,{"nav-arr":r(m),title:"Empty 空状态","component-name":"empty"},{intro:s((()=>[l(S)])),demo:s((()=>[l(G)])),api:s((()=>[l(T)])),_:1},8,["nav-arr"]))}});export{H as default};