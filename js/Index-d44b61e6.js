import{_ as e,P as t,T as n,g as i,D as m,C as o,a}from"./DemoDisplay-496f0bad.js";import"./Upload.vue_vue_type_style_index_0_lang-5a132e89.js";import{d as p,o as s,c as l,b as r,v as u,g as c,w as d,e as _,l as y,h as g,A as v,D as h,z as f,r as E}from"./index-c5a7ce44.js";/* empty css                                                */import{_ as b}from"./ApiIntro-0d8754bc.js";const w={class:"ui-empty-wrap"},A={class:"ui-empty-icon"},B={class:"ui-empty-description"},I={class:"ui-empty-actions"},D=p({__name:"Empty",setup:e=>(e,t)=>(s(),l("div",w,[r("div",A,[u(e.$slots,"icon")]),r("div",B,[u(e.$slots,"description")]),r("div",I,[u(e.$slots,"actions")]),u(e.$slots,"default")]))}),S=r("p",null,"空状态时的展示占位图。",-1),k=r("ul",null,[r("li",null,"Empty: 主要组件")],-1),L=r("ul",null,[r("li",null,"当目前没有数据时，用于显式的用户提示。"),r("li",null,"初始化场景时的引导创建流程。")],-1),T=p({__name:"Intro",setup:i=>(i,m)=>(s(),c(y(n),null,{default:d((()=>[_(y(e),null,{default:d((()=>[g("简介")])),_:1}),_(y(t),null,{default:d((()=>[S])),_:1}),_(y(e),null,{default:d((()=>[g("组件概览")])),_:1}),_(y(t),null,{default:d((()=>[k])),_:1}),_(y(e),null,{default:d((()=>[g("使用场景")])),_:1}),_(y(t),null,{default:d((()=>[L])),_:1})])),_:1}))}),j=p({__name:"Api",setup(e){const t=[],n=[];return(e,i)=>(s(),c(b,{"attr-content-arr":n,"event-content":t}))}});var x=e=>{e.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <SvgIcon name="empty1" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Empty, SvgIcon, Button } from \'ant\'\n<\/script>',e.__sourceTitle=" 基本用法 "};const C=r("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),$=p({__name:"DemoOne",setup:e=>(e,t)=>(s(),c(y(D),null,{icon:d((()=>[_(y(v),{name:"empty1",width:"3em",height:"3em"})])),description:d((()=>[C])),actions:d((()=>[_(y(h),{type:"primary"},{default:d((()=>[g("back")])),_:1})])),_:1}))});x($);var z=e=>{e.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <SvgIcon name="empty2" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Empty, SvgIcon, Button } from \'ant\'\n<\/script>',e.__sourceTitle=" 自定义图片 "};const M=r("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),O=p({__name:"DemoTwo",setup:e=>(e,t)=>(s(),c(y(D),null,{icon:d((()=>[_(y(v),{name:"empty2",width:"3em",height:"3em"})])),description:d((()=>[M])),actions:d((()=>[_(y(h),{type:"primary"},{default:d((()=>[g("back")])),_:1})])),_:1}))});z(O);var P=e=>{e.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <SvgIcon name="empty3" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Empty, SvgIcon, Button } from \'ant\'\n<\/script>',e.__sourceTitle=" 自定义描述 "};const U=r("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),q=p({__name:"DemoThree",setup:e=>(e,t)=>(s(),c(y(D),null,{icon:d((()=>[_(y(v),{name:"empty3",width:"3em",height:"3em"})])),description:d((()=>[U])),actions:d((()=>[_(y(h),{type:"primary"},{default:d((()=>[g("back")])),_:1})])),_:1}))});P(q);const F=p({__name:"Demo",setup(e){const t=f((()=>[$,O,q].map(((e,t)=>i(e,"empty",t)))));return(e,n)=>(s(),c(m,{"demo-arr":y(t)},null,8,["demo-arr"]))}}),G=p({__name:"Index",setup(e){E(null);const t=["基本用法","自定义图片","自定义描述"],n=f((()=>a("empty",t)));return(e,t)=>(s(),c(o,{"nav-arr":y(n),title:"Empty 空状态","component-name":"empty"},{intro:d((()=>[_(T)])),demo:d((()=>[_(F)])),api:d((()=>[_(j)])),_:1},8,["nav-arr"]))}});export{G as default};
