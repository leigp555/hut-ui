import{_ as e,P as s,T as n,g as t,D as o,C as r,a}from"./DemoDisplay-496f0bad.js";import{l as i}from"./Upload.vue_vue_type_style_index_0_lang-5a132e89.js";import{d as c,o as l,g as m,w as p,e as u,l as d,h as g,b as x,c as _,F as w,A as I,z as f,r as h}from"./index-c5a7ce44.js";/* empty css                                                */import{_ as y}from"./ApiIntro-0d8754bc.js";const T=x("p",null,"警告提示，展现需要关注的信息。",-1),b=x("ul",null,[x("li",null,"Alert")],-1),A=x("ul",null,[x("li",null,"当某个页面需要向用户显示警告的信息时。"),x("li",null,"非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。")],-1),v=c({__name:"Intro",setup:t=>(t,o)=>(l(),m(d(n),null,{default:p((()=>[u(d(e),{level:4},{default:p((()=>[g("简介")])),_:1}),u(d(s),null,{default:p((()=>[T])),_:1}),u(d(e),{level:4},{default:p((()=>[g("组件概述")])),_:1}),u(d(s),null,{default:p((()=>[b])),_:1}),u(d(e),{level:4},{default:p((()=>[g("使用场景")])),_:1}),u(d(s),null,{default:p((()=>[A])),_:1})])),_:1}))}),D=c({__name:"Api",setup(e){const s=[{rowIndex:1,"事件名称":"close","说明":"关闭时触发的回调函数","回调参数":"(message:string) => void"}],n=[{componentName:"Alert",attrContent:[{rowIndex:1,"属性":"message","说明":"警告提示内容","类型":"string","默认值":""},{rowIndex:2,"属性":"type","说明":"指定警告提示的样式，有四种选择 success、info、warning、error","类型":"string","默认值":"success"},{rowIndex:3,"属性":"closable","说明":"可关闭的","类型":"boolean","默认值":"false"},{rowIndex:4,"属性":"description","说明":"警告提示的辅助性文字介绍","类型":"string","默认值":""},{rowIndex:5,"属性":"showIcon","说明":"是否显示辅助图标","类型":"boolean","默认值":"false"},{rowIndex:6,"属性":"banner","说明":"是否用作顶部公告","类型":"boolean","默认值":"false"}]}];return(e,t)=>(l(),m(y,{"attr-content-arr":n,"event-content":s}))}});var S=e=>{e.__sourceCode='<template>\n  <Alert message="Success Text" type="success" showIcon />\n  <Alert message="Info Text" type="info" showIcon />\n  <Alert message="Warning Text" type="warning" showIcon />\n  <Alert message="Error Text" type="error" showIcon />\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n<\/script>',e.__sourceTitle=" 基本用法 "};const q=c({__name:"DemoOne",setup:e=>(e,s)=>(l(),_(w,null,[u(d(i),{message:"Success Text",type:"success",showIcon:""}),u(d(i),{message:"Info Text",type:"info",showIcon:""}),u(d(i),{message:"Warning Text",type:"warning",showIcon:""}),u(d(i),{message:"Error Text",type:"error",showIcon:""})],64))});S(q);var E=e=>{e.__sourceCode='<template>\n  <Alert message="Success Text" type="success" showIcon closable @close="onClose" />\n  <Alert message="Info Text" type="info" showIcon closable />\n  <Alert message="Warning Text" type="warning" showIcon closable />\n  <Alert message="Error Text" type="error" showIcon closable />\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n\nconst onClose = (message: string) => {\n  console.log(message)\n}\n<\/script>',e.__sourceTitle=" 可关闭的 "};const C=c({__name:"DemoTwo",setup(e){const s=e=>{console.log(e)};return(e,n)=>(l(),_(w,null,[u(d(i),{message:"Success Text",type:"success",showIcon:"",closable:"",onClose:s}),u(d(i),{message:"Info Text",type:"info",showIcon:"",closable:""}),u(d(i),{message:"Warning Text",type:"warning",showIcon:"",closable:""}),u(d(i),{message:"Error Text",type:"error",showIcon:"",closable:""})],64))}});E(C);var W=e=>{e.__sourceCode='<template>\n  <Alert message="Success Text" type="success" :description="description" showIcon />\n  <Alert message="Info Text" type="info" :description="description" showIcon />\n  <Alert message="Warning Text" type="warning" :description="description" showIcon />\n  <Alert message="Error Text" type="error" :description="description" showIcon />\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n\nconst description =\n  \'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.\'\n<\/script>',e.__sourceTitle=" 可添加描述 "};const L=c({__name:"DemoThree",setup(e){const s="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.";return(e,n)=>(l(),_(w,null,[u(d(i),{message:"Success Text",type:"success",description:s,showIcon:""}),u(d(i),{message:"Info Text",type:"info",description:s,showIcon:""}),u(d(i),{message:"Warning Text",type:"warning",description:s,showIcon:""}),u(d(i),{message:"Error Text",type:"error",description:s,showIcon:""})],64))}});W(L);var j=e=>{e.__sourceCode='<template>\n  <Alert\n    message="Success Text"\n    type="success"\n    :description="description"\n    showIcon\n    closable\n  />\n  <Alert message="Info Text" type="info" :description="description" showIcon closable />\n  <Alert\n    message="Warning Text"\n    type="warning"\n    :description="description"\n    showIcon\n    closable\n  />\n  <Alert\n    message="Error Text"\n    type="error"\n    :description="description"\n    showIcon\n    closable\n  />\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n\nconst description =\n  \'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.\'\n<\/script>',e.__sourceTitle=" 可关闭 "};const F=c({__name:"DemoFour",setup(e){const s="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.";return(e,n)=>(l(),_(w,null,[u(d(i),{message:"Success Text",type:"success",description:s,showIcon:"",closable:""}),u(d(i),{message:"Info Text",type:"info",description:s,showIcon:"",closable:""}),u(d(i),{message:"Warning Text",type:"warning",description:s,showIcon:"",closable:""}),u(d(i),{message:"Error Text",type:"error",description:s,showIcon:"",closable:""})],64))}});j(F);var z=e=>{e.__sourceCode='<template>\n  <Alert message="Success Text" type="error" closable showIcon>\n    <template #description>\n      <p style="display: flex; align-items: center">\n        Success Description\n        <span style="color: red">Success</span>\n        Description Success Description\n      </p>\n    </template>\n  </Alert>\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n\nconst description =\n  \'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.\'\n<\/script>',e.__sourceTitle=" 自定义描述内容 "};const M=x("p",{style:{display:"flex","align-items":"center"}},[g(" Success Description "),x("span",{style:{color:"red"}},"Success"),g(" Description Success Description ")],-1),N=c({__name:"DemoFive",setup:e=>(e,s)=>(l(),m(d(i),{message:"Success Text",type:"error",closable:"",showIcon:""},{description:p((()=>[M])),_:1}))});z(N);var O=e=>{e.__sourceCode='<template>\n  <Alert message="Error Text" type="error" showIcon banner />\n  <Alert message="Error Text" type="error" showIcon banner :description="description" />\n  <Alert message="Error Text" type="error" showIcon banner>\n    <template #icon>\n      <SvgIcon name="weixin" width="1em" height="1em" fill="#52c41a" />\n    </template>\n  </Alert>\n  <Alert message="Error Text" type="success" showIcon banner :description="description">\n    <template #icon>\n      <SvgIcon name="weixin" width="1em" height="1em" fill="#52c41a" />\n    </template>\n  </Alert>\n</template>\n\n<script setup lang="ts">\nimport { Alert, SvgIcon } from \'ant\'\n\nconst description =\n  \'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.\'\n<\/script>',e.__sourceTitle=" 自定义icon "};const P=c({__name:"DemoSix",setup(e){const s="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.";return(e,n)=>(l(),_(w,null,[u(d(i),{message:"Error Text",type:"error",showIcon:"",banner:""}),u(d(i),{message:"Error Text",type:"error",showIcon:"",banner:"",description:s}),u(d(i),{message:"Error Text",type:"error",showIcon:"",banner:""},{icon:p((()=>[u(d(I),{name:"weixin",width:"1em",height:"1em",fill:"#52c41a"})])),_:1}),u(d(i),{message:"Error Text",type:"success",showIcon:"",banner:"",description:s},{icon:p((()=>[u(d(I),{name:"weixin",width:"1em",height:"1em",fill:"#52c41a"})])),_:1})],64))}});O(P);var U=e=>{e.__sourceCode='<template>\n  <Alert message="Success Text" type="success" />\n  <Alert message="Info Text" type="info" />\n  <Alert message="Warning Text" type="warning" />\n  <Alert message="Error Text" type="error" />\n</template>\n\n<script setup lang="ts">\nimport { Alert } from \'ant\'\n<\/script>',e.__sourceTitle=" 没有icon "};const k=c({__name:"DemoSeven",setup:e=>(e,s)=>(l(),_(w,null,[u(d(i),{message:"Success Text",type:"success"}),u(d(i),{message:"Info Text",type:"info"}),u(d(i),{message:"Warning Text",type:"warning"}),u(d(i),{message:"Error Text",type:"error"})],64))});U(k);const B=c({__name:"Demo",setup(e){const s=f((()=>[q,C,L,F,N,P,k].map(((e,s)=>t(e,"alert",s)))));return(e,n)=>(l(),m(o,{"demo-arr":d(s)},null,8,["demo-arr"]))}}),G=c({__name:"Index",setup(e){h(null);const s=["基本用法","可关闭的","可添加描述","可关闭","自定义描述内容","自定义icon","没有icon"],n=f((()=>a("alert",s)));return(e,s)=>(l(),m(r,{"nav-arr":d(n),title:"Alert 警告提示","component-name":"alert"},{intro:p((()=>[u(v)])),demo:p((()=>[u(B)])),api:p((()=>[u(D)])),_:1},8,["nav-arr"]))}});export{G as default};
