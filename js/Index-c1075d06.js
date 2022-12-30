import{D as t,C as e}from"./DemoDisplay-6c845355.js";import{d as n,c as i,e as m,m as o,C as p,i as s,g as a,f as l,q as r,j as u,au as c,J as d,av as _,aw as y,Q as h,r as f}from"./index-3d4a6970.js";import{_ as g,P as v,T as E}from"./Paragraph-097073d3.js";import{_ as I}from"./ApiIntro.vue_vue_type_style_index_0_lang-ac37dd22.js";import{g as w,a as B}from"./helper-44ceac23.js";const A={class:"ui-empty-wrap"},b={class:"ui-empty-icon"},D={class:"ui-empty-description"},j={class:"ui-empty-actions"},k=n({__name:"Empty",setup:t=>(t,e)=>(i(),m("div",A,[o("div",b,[p(t.$slots,"icon")]),o("div",D,[p(t.$slots,"description")]),o("div",j,[p(t.$slots,"actions")]),p(t.$slots,"default")]))}),L=o("p",null,"空状态时的展示占位图。",-1),T=o("ul",null,[o("li",null,"Empty: 主要组件")],-1),C=o("ul",null,[o("li",null,"当目前没有数据时，用于显式的用户提示。"),o("li",null,"初始化场景时的引导创建流程。")],-1),x=n({__name:"Intro",setup:t=>(t,e)=>(i(),s(r(E),null,{default:a((()=>[l(r(g),null,{default:a((()=>[u("简介")])),_:1}),l(r(v),null,{default:a((()=>[L])),_:1}),l(r(g),null,{default:a((()=>[u("组件概览")])),_:1}),l(r(v),null,{default:a((()=>[T])),_:1}),l(r(g),null,{default:a((()=>[u("使用场景")])),_:1}),l(r(v),null,{default:a((()=>[C])),_:1})])),_:1}))}),$=n({__name:"Api",setup(t){const e=[],n=[];return(t,m)=>(i(),s(I,{"attr-content-arr":n,"event-content":e}))}}),P=o("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),S=n({__name:"DemoOne",setup:t=>(t,e)=>(i(),s(r(k),null,{icon:a((()=>[l(r(c),{name:"empty1",width:"3em",height:"3em"})])),description:a((()=>[P])),actions:a((()=>[l(r(d),{type:"primary"},{default:a((()=>[u("back")])),_:1})])),_:1}))}),q=t=>{t.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <Icon_empty1 name="empty1" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Icon_empty1 } from \'@hut-ui/icons-vue\'\nimport { Empty, Button } from \'hut-ui\'\n<\/script>',t.__sourceTitle=" 基本用法 "};q(S);const J=o("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),O=n({__name:"DemoTwo",setup:t=>(t,e)=>(i(),s(r(k),null,{icon:a((()=>[l(r(_),{name:"empty2",width:"3em",height:"3em"})])),description:a((()=>[J])),actions:a((()=>[l(r(d),{type:"primary"},{default:a((()=>[u("back")])),_:1})])),_:1}))}),Q=t=>{t.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <Icon_empty2 name="empty2" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Icon_empty2 } from \'@hut-ui/icons-vue\'\nimport { Empty, SvgIcon, Button } from \'hut-ui\'\n<\/script>',t.__sourceTitle=" 自定义图片 "};Q(O);const z=o("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti dolores dolorum ducimus, eos, impedit ",-1),F=n({__name:"DemoThree",setup:t=>(t,e)=>(i(),s(r(k),null,{icon:a((()=>[l(r(y),{name:"empty3",width:"3em",height:"3em"})])),description:a((()=>[z])),actions:a((()=>[l(r(d),{type:"primary"},{default:a((()=>[u("back")])),_:1})])),_:1}))}),G=t=>{t.__sourceCode='<template>\n  <Empty>\n    <template #icon>\n      <Icon_empty3 name="empty3" width="3em" height="3em" />\n    </template>\n    <template #description>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti\n        dolores dolorum ducimus, eos, impedit\n      </p>\n    </template>\n    <template #actions>\n      <Button type="primary">back</Button>\n    </template>\n  </Empty>\n</template>\n\n<script setup lang="ts">\nimport { Icon_empty3 } from \'@hut-ui/icons-vue\'\nimport { Empty, SvgIcon, Button } from \'hut-ui\'\n<\/script>',t.__sourceTitle=" 自定义描述 "};G(F);const H=n({__name:"Demo",setup(e){const n=h((()=>[S,O,F].map(((t,e)=>w(t,"empty",e)))));return(e,m)=>(i(),s(t,{"demo-arr":r(n)},null,8,["demo-arr"]))}}),K=n({__name:"Index",setup(t){f(null);const n=["基本用法","自定义图片","自定义描述"],m=h((()=>B("empty",n)));return(t,n)=>(i(),s(e,{"nav-arr":r(m),title:"Empty 空状态","component-name":"empty"},{intro:a((()=>[l(x)])),demo:a((()=>[l(H)])),api:a((()=>[l($)])),_:1},8,["nav-arr"]))}});export{K as default};