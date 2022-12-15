import{D as e,C as o}from"./DemoDisplay-5c75c5c6.js";import{d as l,c as a,i as n,g as r,f as c,q as t,j as s,m as g,e as d,J as i,n as p,W as u,Z as m,L as _,r as f}from"./index-d036eac4.js";import{_ as T,P as b,T as h}from"./Paragraph-90b9bde5.js";import{_ as w}from"./ApiIntro.vue_vue_type_style_index_0_lang-cb80a9b7.js";import{r as C,g as v,a as y}from"./helper-0b2cce03.js";import{_ as x}from"./Tag.vue_vue_type_script_setup_true_lang-346dfe63.js";const I=g("p",null,"进行标记和分类的小标签。",-1),k=g("ul",null,[g("li",null,"Tag: 主要组件"),g("li",null,"TagGroup: 主要组件")],-1),D=g("ul",null,[g("li",null,"用于标记事物的属性和维度。"),g("li",null,"进行分类。")],-1),j=l({__name:"Intro",setup:e=>(e,o)=>(a(),n(t(h),null,{default:r((()=>[c(t(T),null,{default:r((()=>[s("简介")])),_:1}),c(t(b),null,{default:r((()=>[I])),_:1}),c(t(T),null,{default:r((()=>[s("组件概览")])),_:1}),c(t(b),null,{default:r((()=>[k])),_:1}),c(t(T),null,{default:r((()=>[s("使用场景")])),_:1}),c(t(b),null,{default:r((()=>[D])),_:1})])),_:1}))}),W=l({__name:"Api",setup(e){const o=[{rowIndex:1,"事件名称":"close","说明":"关闭时的回调","回调参数":"Function(el: HTMLSpanElement)"}],l=[{componentName:"Tag",attrContent:[{rowIndex:1,"属性":"color","说明":"标签色","类型":"string","默认值":"#ffffff"},{rowIndex:2,"属性":"closable","说明":"标签是否可以关闭","类型":"boolean","默认值":"false"}]}];return(e,r)=>(a(),n(w,{"attr-content-arr":l,"event-content":o}))}}),L={class:"wrap"},E=l({__name:"DemoOne",setup(e){const o=e=>{console.log(e)};return(e,l)=>(a(),d("div",L,[c(t(x),null,{default:r((()=>[s("pink")])),_:1}),c(t(x),{color:"pink"},{default:r((()=>[s("pink")])),_:1}),c(t(x),{color:"red"},{default:r((()=>[s("red")])),_:1}),c(t(x),{color:"orange"},{default:r((()=>[s("orange")])),_:1}),c(t(x),{color:"green"},{default:r((()=>[s("green")])),_:1}),c(t(x),{color:"cyan"},{default:r((()=>[s("cyan")])),_:1}),c(t(x),{color:"blue"},{default:r((()=>[s("blue")])),_:1}),c(t(x),{color:"purple"},{default:r((()=>[s("purple")])),_:1}),c(t(x),{color:"#f50"},{default:r((()=>[s("#f50")])),_:1}),c(t(x),{color:"#2db7f5"},{default:r((()=>[s("#2db7f5")])),_:1}),c(t(x),{color:"#87d068"},{default:r((()=>[s("#87d068")])),_:1}),c(t(x),{color:"#108ee9"},{default:r((()=>[s("#108ee9")])),_:1}),c(t(x),{color:"#108ee9"},{icon:r((()=>[c(t(i),{name:"weixin",width:"1em",height:"1em",fill:"#108ee9"})])),default:r((()=>[s(" Wechat ")])),_:1}),c(t(x),{color:"#108ee9",onClose:o,closable:""},{default:r((()=>[s("close")])),_:1})]))}}),H=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Tag>pink</Tag>\n    <Tag color="pink">pink</Tag>\n    <Tag color="red">red</Tag>\n    <Tag color="orange">orange</Tag>\n    <Tag color="green">green</Tag>\n    <Tag color="cyan">cyan</Tag>\n    <Tag color="blue">blue</Tag>\n    <Tag color="purple">purple</Tag>\n    <Tag color="#f50">#f50</Tag>\n    <Tag color="#2db7f5">#2db7f5</Tag>\n    <Tag color="#87d068">#87d068</Tag>\n    <Tag color="#108ee9">#108ee9</Tag>\n    <Tag color="#108ee9">\n      <template #icon>\n        <Icon_wechat name="weixin" width="1em" height="1em" fill="#108ee9" />\n      </template>\n      Wechat\n    </Tag>\n    <Tag color="#108ee9" @close="log" closable>close</Tag>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Icon_wechat } from \'@hut-ui/icons-vue\'\nimport { Tag } from \'hut-ui\'\n\nconst log = (el: HTMLSpanElement) => {\n  console.log(el)\n}\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n</style>',e.__sourceTitle=" 基本示例 "};H(E);const M=p(E,[["__scopeId","data-v-81f0abd6"]]),S={class:"wrap"},q=l({__name:"DemoTwo",setup:e=>(e,o)=>(a(),d("div",S,[c(t(x),{color:t(C)()},{default:r((()=>[s("pink")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("red")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("orange")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("green")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("cyan")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("blue")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("purple")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("#f50")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("#2db7f5")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("#87d068")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("#108ee9")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s(" Wechat ")])),_:1},8,["color"]),c(t(x),{color:t(C)()},{default:r((()=>[s("close")])),_:1},8,["color"])]))}),A=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Tag :color="randomColor()">pink</Tag>\n    <Tag :color="randomColor()">red</Tag>\n    <Tag :color="randomColor()">orange</Tag>\n    <Tag :color="randomColor()">green</Tag>\n    <Tag :color="randomColor()">cyan</Tag>\n    <Tag :color="randomColor()">blue</Tag>\n    <Tag :color="randomColor()">purple</Tag>\n    <Tag :color="randomColor()">#f50</Tag>\n    <Tag :color="randomColor()">#2db7f5</Tag>\n    <Tag :color="randomColor()">#87d068</Tag>\n    <Tag :color="randomColor()">#108ee9</Tag>\n    <Tag :color="randomColor()"> Wechat </Tag>\n    <Tag :color="randomColor()">close</Tag>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Tag } from \'hut-ui\'\nimport { randomColor } from \'@/eg/helper\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n</style>',e.__sourceTitle=" 自定义颜色 "};A(q);const F=p(q,[["__scopeId","data-v-d1b1eec3"]]),P={class:"wrap"},G=l({__name:"DemoThree",setup:e=>(e,o)=>(a(),d("div",P,[c(t(x),{color:"pink"},{icon:r((()=>[c(t(u),{name:"email",width:"1em",height:"1em",fill:"pink"})])),default:r((()=>[s(" email ")])),_:1}),c(t(x),{color:"red"},{icon:r((()=>[c(t(m),{name:"setting",width:"1em",height:"1em",fill:"red"})])),default:r((()=>[s(" setting ")])),_:1}),c(t(x),{color:"#108ee9"},{icon:r((()=>[c(t(i),{name:"weixin",width:"1em",height:"1em",fill:"#108ee9"})])),default:r((()=>[s(" wechat ")])),_:1})]))}),J=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Tag color="pink">\n      <template #icon>\n        <Icon_email name="email" width="1em" height="1em" fill="pink" />\n      </template>\n      email\n    </Tag>\n    <Tag color="red">\n      <template #icon>\n        <Icon_setting name="setting" width="1em" height="1em" fill="red" />\n      </template>\n      setting\n    </Tag>\n    <Tag color="#108ee9">\n      <template #icon>\n        <Icon_wechat name="weixin" width="1em" height="1em" fill="#108ee9" />\n      </template>\n      wechat\n    </Tag>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Icon_email, Icon_setting, Icon_wechat } from \'@hut-ui/icons-vue\'\nimport { Tag } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n</style>',e.__sourceTitle=" 自定义icon "};J(G);const N=p(G,[["__scopeId","data-v-99d10231"]]),O={class:"wrap"},Z=l({__name:"DemoFour",setup(e){const o=e=>{console.log(e)};return(e,l)=>(a(),d("div",O,[c(t(x),{onClose:o,closable:""},{default:r((()=>[s("pink")])),_:1}),c(t(x),{color:"pink",onClose:o,closable:""},{default:r((()=>[s("pink")])),_:1}),c(t(x),{color:"red",onClose:o,closable:""},{default:r((()=>[s("red")])),_:1}),c(t(x),{color:"orange",onClose:o,closable:""},{default:r((()=>[s("orange")])),_:1}),c(t(x),{color:"green",onClose:o,closable:""},{default:r((()=>[s("green")])),_:1}),c(t(x),{color:"cyan",onClose:o,closable:""},{default:r((()=>[s("cyan")])),_:1}),c(t(x),{color:"blue",onClose:o,closable:""},{default:r((()=>[s("blue")])),_:1}),c(t(x),{color:"purple",onClose:o,closable:""},{default:r((()=>[s("purple")])),_:1}),c(t(x),{color:"#f50",onClose:o,closable:""},{default:r((()=>[s("#f50")])),_:1}),c(t(x),{color:"#2db7f5",onClose:o,closable:""},{default:r((()=>[s("#2db7f5")])),_:1}),c(t(x),{color:"#87d068",onClose:o,closable:""},{default:r((()=>[s("#87d068")])),_:1}),c(t(x),{color:"#108ee9",onClose:o,closable:""},{default:r((()=>[s("#108ee9")])),_:1}),c(t(x),{color:"#108ee9",onClose:o,closable:""},{icon:r((()=>[c(t(i),{name:"weixin",width:"1em",height:"1em",fill:"#108ee9"})])),default:r((()=>[s(" Wechat ")])),_:1}),c(t(x),{color:"#108ee9",onClose:o,closable:""},{default:r((()=>[s("close")])),_:1})]))}}),z=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Tag @close="log" closable>pink</Tag>\n    <Tag color="pink" @close="log" closable>pink</Tag>\n    <Tag color="red" @close="log" closable>red</Tag>\n    <Tag color="orange" @close="log" closable>orange</Tag>\n    <Tag color="green" @close="log" closable>green</Tag>\n    <Tag color="cyan" @close="log" closable>cyan</Tag>\n    <Tag color="blue" @close="log" closable>blue</Tag>\n    <Tag color="purple" @close="log" closable>purple</Tag>\n    <Tag color="#f50" @close="log" closable>#f50</Tag>\n    <Tag color="#2db7f5" @close="log" closable>#2db7f5</Tag>\n    <Tag color="#87d068" @close="log" closable>#87d068</Tag>\n    <Tag color="#108ee9" @close="log" closable>#108ee9</Tag>\n    <Tag color="#108ee9" @close="log" closable>\n      <template #icon>\n        <Icon_wechat name="weixin" width="1em" height="1em" fill="#108ee9" />\n      </template>\n      Wechat\n    </Tag>\n    <Tag color="#108ee9" @close="log" closable>close</Tag>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Icon_wechat } from \'@hut-ui/icons-vue\'\nimport { Tag } from \'hut-ui\'\n\nconst log = (el: HTMLSpanElement) => {\n  console.log(el)\n}\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n</style>',e.__sourceTitle=" 可关闭的 "};z(Z);const B=p(Z,[["__scopeId","data-v-e27bd394"]]),K=l({__name:"Demo",setup(o){const l=_((()=>[M,F,N,B].map(((e,o)=>v(e,"tag",o)))));return(o,r)=>(a(),n(e,{"demo-arr":t(l)},null,8,["demo-arr"]))}}),Q=l({__name:"Index",setup(e){f(null);const l=["基本示例","自定义颜色","自定义icon","可关闭的"],s=_((()=>y("tag",l)));return(e,l)=>(a(),n(o,{"nav-arr":t(s),title:"Tag 标签","component-name":"tag"},{intro:r((()=>[c(j)])),demo:r((()=>[c(K)])),api:r((()=>[c(W)])),_:1},8,["nav-arr"]))}});export{Q as default};