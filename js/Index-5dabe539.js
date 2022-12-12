import{D as n,C as s}from"./DemoDisplay-53a9c10a.js";import{d as e,c as t,j as o,g as a,f as r,q as i,k as l,n as c,e as u,I as d,_ as f,O as m,J as p,r as g}from"./index-6bb449f3.js";import{_,P as I,T}from"./Paragraph-138135f0.js";import{_ as h}from"./ApiIntro-fdf4ccdf.js";import{g as w,a as B}from"./helper-7416cab9.js";const k=c("p",null,"全局展示操作反馈信息。",-1),y=c("ul",null,[c("li",null,"Message")],-1),v=c("ul",null,[c("li",null,"可提供成功、警告和错误等反馈信息。"),c("li",null,"顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。")],-1),C=e({__name:"Intro",setup:n=>(n,s)=>(t(),o(i(T),null,{default:a((()=>[r(i(_),{level:4},{default:a((()=>[l("简介")])),_:1}),r(i(I),null,{default:a((()=>[k])),_:1}),r(i(_),{level:4},{default:a((()=>[l("组件概述")])),_:1}),r(i(I),null,{default:a((()=>[y])),_:1}),r(i(_),{level:4},{default:a((()=>[l("使用场景")])),_:1}),r(i(I),null,{default:a((()=>[v])),_:1})])),_:1}))}),x=e({__name:"Api",setup(n){const s=[],e=[{componentName:"Message",attrContent:[{rowIndex:1,"属性":"type","说明":"string","类型":"'info'|'success'|'error'|'warning'|'loading'","默认值":""},{rowIndex:2,"属性":"options","说明":"如果是string则为提示内容，也可以是Options对象\n{\n  content?: string\n  style?: Partial<CSSStyleDeclaration>\n  duration?: number\n}","类型":"string|Options","默认值":"false"}]}];return(n,a)=>(t(),o(h,{"attr-content-arr":e,"event-content":s}))}});var D=n=>{n.__sourceCode='<template>\n  <div class="wrap">\n    <Button @click="onInfo1">info</Button>\n    <Button @click="onInfo2">success</Button>\n    <Button @click="onInfo3">warning</Button>\n    <Button @click="onInfo4">error</Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Button, alert } from \'hut-ui\'\n\nconst onInfo1 = () => {\n  alert.info(\'This is a info message\')\n}\nconst onInfo2 = () => {\n  alert.success(\'This is a success message\')\n}\nconst onInfo3 = () => {\n  alert.warning(\'This is a warning message\')\n}\nconst onInfo4 = () => {\n  alert.error(\'This is a error message\')\n}\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 20px;\n}\n</style>',n.__sourceTitle=" 基本用法 "};const j={class:"wrap"},b=e({__name:"DemoOne",setup(n){const s=()=>{m.info("This is a info message")},e=()=>{m.success("This is a success message")},o=()=>{m.warning("This is a warning message")},c=()=>{m.error("This is a error message")};return(n,f)=>(t(),u("div",j,[r(i(d),{onClick:s},{default:a((()=>[l("info")])),_:1}),r(i(d),{onClick:e},{default:a((()=>[l("success")])),_:1}),r(i(d),{onClick:o},{default:a((()=>[l("warning")])),_:1}),r(i(d),{onClick:c},{default:a((()=>[l("error")])),_:1})]))}});D(b);var O=f(b,[["__scopeId","data-v-5f65096a"]]),M=n=>{n.__sourceCode="<template>\n  <div class=\"wrap\">\n    <Button @click=\"onInfo5\">info</Button>\n    <Button @click=\"onInfo6\">success</Button>\n    <Button @click=\"onInfo7\">warning</Button>\n    <Button @click=\"onInfo8\">error</Button>\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { Button, alert } from 'hut-ui'\n\nconst onInfo5 = () => {\n  alert.info({\n    content: 'This is a info message',\n    style: { color: 'red' },\n    duration: 4000\n  })\n}\nconst onInfo6 = () => {\n  alert.success({\n    content: 'This is a success message',\n    style: { color: 'red' },\n    duration: 4000\n  })\n}\nconst onInfo7 = () => {\n  alert.warning({\n    content: 'This is a warning message',\n    style: { color: 'red' },\n    duration: 4000\n  })\n}\nconst onInfo8 = () => {\n  alert.error({\n    content: 'This is a error message',\n    style: { color: 'red' },\n    duration: 4000\n  })\n}\n<\/script>\n\n<style scoped lang=\"scss\">\n.wrap {\n  display: flex;\n  gap: 20px;\n}\n</style>",n.__sourceTitle=" 自定义样式 "};const P={class:"wrap"},S=e({__name:"DemoTwo",setup(n){const s=()=>{m.info({content:"This is a info message",style:{color:"red"},duration:4e3})},e=()=>{m.success({content:"This is a success message",style:{color:"red"},duration:4e3})},o=()=>{m.warning({content:"This is a warning message",style:{color:"red"},duration:4e3})},c=()=>{m.error({content:"This is a error message",style:{color:"red"},duration:4e3})};return(n,f)=>(t(),u("div",P,[r(i(d),{onClick:s},{default:a((()=>[l("info")])),_:1}),r(i(d),{onClick:e},{default:a((()=>[l("success")])),_:1}),r(i(d),{onClick:o},{default:a((()=>[l("warning")])),_:1}),r(i(d),{onClick:c},{default:a((()=>[l("error")])),_:1})]))}});M(S);var A=f(S,[["__scopeId","data-v-c029c97e"]]),q=n=>{n.__sourceCode="<template>\n  <Button @click=\"onInfo9\">loading</Button>\n</template>\n\n<script setup lang=\"ts\">\nimport { Button, alert } from 'hut-ui'\n\nconst onInfo9 = () => {\n  const xx = alert.loading({\n    content: 'This is a loading message',\n    duration: 4000\n  })\n  // 调用alert.loading返回的函数将隐藏提示\n  setTimeout(xx, 3000)\n}\n<\/script>",n.__sourceTitle=" 加载中提示 "};const J=e({__name:"DemoThree",setup(n){const s=()=>{const n=m.loading({content:"This is a loading message",duration:4e3});setTimeout(n,3e3)};return(n,e)=>(t(),o(i(d),{onClick:s},{default:a((()=>[l("loading")])),_:1}))}});q(J);const N=e({__name:"Demo",setup(s){const e=p((()=>[O,A,J].map(((n,s)=>w(n,"message",s)))));return(s,a)=>(t(),o(n,{"demo-arr":i(e)},null,8,["demo-arr"]))}}),z=e({__name:"Index",setup(n){g(null);const e=["基本用法","自定义样式","加载中提示"],l=p((()=>B("message",e)));return(n,e)=>(t(),o(s,{"nav-arr":i(l),title:"Message 全局提示","component-name":"message"},{intro:a((()=>[r(C)])),demo:a((()=>[r(N)])),api:a((()=>[r(x)])),_:1},8,["nav-arr"]))}});export{z as default};