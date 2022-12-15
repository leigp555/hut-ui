import{D as o,C as e}from"./DemoDisplay-d9d5cf75.js";import{d as l,c as a,i as n,g as r,f as c,q as t,j as s,m as g,e as d,s as p,n as i,J as u,r as m}from"./index-be6a3e2f.js";import{_ as f,P as T,T as _}from"./Paragraph-710a31b9.js";import{_ as b}from"./ApiIntro.vue_vue_type_style_index_0_lang-25ff9f5b.js";import{r as h,g as w,a as C}from"./helper-84db427e.js";import{_ as v}from"./Tag.vue_vue_type_script_setup_true_lang-69a16e52.js";const y=g("p",null,"进行标记和分类的小标签。",-1),x=g("ul",null,[g("li",null,"Tag: 主要组件"),g("li",null,"TagGroup: 主要组件")],-1),I=g("ul",null,[g("li",null,"用于标记事物的属性和维度。"),g("li",null,"进行分类。")],-1),k=l({__name:"Intro",setup:o=>(o,e)=>(a(),n(t(_),null,{default:r((()=>[c(t(f),null,{default:r((()=>[s("简介")])),_:1}),c(t(T),null,{default:r((()=>[y])),_:1}),c(t(f),null,{default:r((()=>[s("组件概览")])),_:1}),c(t(T),null,{default:r((()=>[x])),_:1}),c(t(f),null,{default:r((()=>[s("使用场景")])),_:1}),c(t(T),null,{default:r((()=>[I])),_:1})])),_:1}))}),S=l({__name:"Api",setup(o){const e=[{rowIndex:1,"事件名称":"close","说明":"关闭时的回调","回调参数":"Function(el: HTMLSpanElement)"}],l=[{componentName:"Tag",attrContent:[{rowIndex:1,"属性":"color","说明":"标签色","类型":"string","默认值":"#ffffff"},{rowIndex:2,"属性":"closable","说明":"标签是否可以关闭","类型":"boolean","默认值":"false"}]}];return(o,r)=>(a(),n(b,{"attr-content-arr":l,"event-content":e}))}}),D={class:"wrap"},j=l({__name:"DemoOne",setup(o){const e=o=>{console.log(o)};return(o,l)=>(a(),d("div",D,[c(t(v),null,{default:r((()=>[s("pink")])),_:1}),c(t(v),{color:"pink"},{default:r((()=>[s("pink")])),_:1}),c(t(v),{color:"red"},{default:r((()=>[s("red")])),_:1}),c(t(v),{color:"orange"},{default:r((()=>[s("orange")])),_:1}),c(t(v),{color:"green"},{default:r((()=>[s("green")])),_:1}),c(t(v),{color:"cyan"},{default:r((()=>[s("cyan")])),_:1}),c(t(v),{color:"blue"},{default:r((()=>[s("blue")])),_:1}),c(t(v),{color:"purple"},{default:r((()=>[s("purple")])),_:1}),c(t(v),{color:"#f50"},{default:r((()=>[s("#f50")])),_:1}),c(t(v),{color:"#2db7f5"},{default:r((()=>[s("#2db7f5")])),_:1}),c(t(v),{color:"#87d068"},{default:r((()=>[s("#87d068")])),_:1}),c(t(v),{color:"#108ee9"},{default:r((()=>[s("#108ee9")])),_:1}),c(t(v),{color:"#108ee9"},{icon:r((()=>[c(t(p),{name:"weixin",width:"1em",height:"1em",fill:"#108ee9"})])),default:r((()=>[s(" Wechat ")])),_:1}),c(t(v),{color:"#108ee9",onClose:e,closable:""},{default:r((()=>[s("close")])),_:1})]))}}),W=o=>{o.__sourceCode='<template>\n  <div class="wrap">\n    <Tag>pink</Tag>\n    <Tag color="pink">pink</Tag>\n    <Tag color="red">red</Tag>\n    <Tag color="orange">orange</Tag>\n    <Tag color="green">green</Tag>\n    <Tag color="cyan">cyan</Tag>\n    <Tag color="blue">blue</Tag>\n    <Tag color="purple">purple</Tag>\n    <Tag color="#f50">#f50</Tag>\n    <Tag color="#2db7f5">#2db7f5</Tag>\n    <Tag color="#87d068">#87d068</Tag>\n    <Tag color="#108ee9">#108ee9</Tag>\n    <Tag color="#108ee9">\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="#108ee9" />\n      </template>\n      Wechat\n    </Tag>\n    <Tag color="#108ee9" @close="log" closable>close</Tag>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Tag, SvgIcon } from \'hut-ui\'\n\nconst log = (el: HTMLSpanElement) => {\n  console.log(el)\n}\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n</style>',o.__sourceTitle=" 基本示例 "};W(j);const E=i(j,[["__scopeId","data-v-65c4771f"]]),H={class:"wrap"},L=l({__name:"DemoTwo",setup:o=>(o,e)=>(a(),d("div",H,[c(t(v),{color:t(h)()},{default:r((()=>[s("pink")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("red")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("orange")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("green")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("cyan")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("blue")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("purple")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("#f50")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("#2db7f5")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("#87d068")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("#108ee9")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s(" Wechat ")])),_:1},8,["color"]),c(t(v),{color:t(h)()},{default:r((()=>[s("close")])),_:1},8,["color"])]))}),M=o=>{o.__sourceCode='<template>\n  <div class="wrap">\n    <Tag :color="randomColor()">pink</Tag>\n    <Tag :color="randomColor()">red</Tag>\n    <Tag :color="randomColor()">orange</Tag>\n    <Tag :color="randomColor()">green</Tag>\n    <Tag :color="randomColor()">cyan</Tag>\n    <Tag :color="randomColor()">blue</Tag>\n    <Tag :color="randomColor()">purple</Tag>\n    <Tag :color="randomColor()">#f50</Tag>\n    <Tag :color="randomColor()">#2db7f5</Tag>\n    <Tag :color="randomColor()">#87d068</Tag>\n    <Tag :color="randomColor()">#108ee9</Tag>\n    <Tag :color="randomColor()"> Wechat </Tag>\n    <Tag :color="randomColor()">close</Tag>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Tag, SvgIcon } from \'hut-ui\'\nimport { randomColor } from \'@/eg/helper\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n</style>',o.__sourceTitle=" 自定义颜色 "};M(L);const q=i(L,[["__scopeId","data-v-6ae33898"]]),A={class:"wrap"},F=l({__name:"DemoThree",setup:o=>(o,e)=>(a(),d("div",A,[c(t(v),{color:"pink"},{icon:r((()=>[c(t(p),{name:"email",width:"1em",height:"1em",fill:"pink"})])),default:r((()=>[s(" email ")])),_:1}),c(t(v),{color:"red"},{icon:r((()=>[c(t(p),{name:"setting",width:"1em",height:"1em",fill:"red"})])),default:r((()=>[s(" setting ")])),_:1}),c(t(v),{color:"#108ee9"},{icon:r((()=>[c(t(p),{name:"weixin",width:"1em",height:"1em",fill:"#108ee9"})])),default:r((()=>[s(" wechat ")])),_:1})]))}),P=o=>{o.__sourceCode='<template>\n  <div class="wrap">\n    <Tag color="pink">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" fill="pink" />\n      </template>\n      email\n    </Tag>\n    <Tag color="red">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" fill="red" />\n      </template>\n      setting\n    </Tag>\n    <Tag color="#108ee9">\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="#108ee9" />\n      </template>\n      wechat\n    </Tag>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Tag, SvgIcon } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n</style>',o.__sourceTitle=" 自定义icon "};P(F);const G=i(F,[["__scopeId","data-v-9880f068"]]),J={class:"wrap"},N=l({__name:"DemoFour",setup(o){const e=o=>{console.log(o)};return(o,l)=>(a(),d("div",J,[c(t(v),{onClose:e,closable:""},{default:r((()=>[s("pink")])),_:1}),c(t(v),{color:"pink",onClose:e,closable:""},{default:r((()=>[s("pink")])),_:1}),c(t(v),{color:"red",onClose:e,closable:""},{default:r((()=>[s("red")])),_:1}),c(t(v),{color:"orange",onClose:e,closable:""},{default:r((()=>[s("orange")])),_:1}),c(t(v),{color:"green",onClose:e,closable:""},{default:r((()=>[s("green")])),_:1}),c(t(v),{color:"cyan",onClose:e,closable:""},{default:r((()=>[s("cyan")])),_:1}),c(t(v),{color:"blue",onClose:e,closable:""},{default:r((()=>[s("blue")])),_:1}),c(t(v),{color:"purple",onClose:e,closable:""},{default:r((()=>[s("purple")])),_:1}),c(t(v),{color:"#f50",onClose:e,closable:""},{default:r((()=>[s("#f50")])),_:1}),c(t(v),{color:"#2db7f5",onClose:e,closable:""},{default:r((()=>[s("#2db7f5")])),_:1}),c(t(v),{color:"#87d068",onClose:e,closable:""},{default:r((()=>[s("#87d068")])),_:1}),c(t(v),{color:"#108ee9",onClose:e,closable:""},{default:r((()=>[s("#108ee9")])),_:1}),c(t(v),{color:"#108ee9",onClose:e,closable:""},{icon:r((()=>[c(t(p),{name:"weixin",width:"1em",height:"1em",fill:"#108ee9"})])),default:r((()=>[s(" Wechat ")])),_:1}),c(t(v),{color:"#108ee9",onClose:e,closable:""},{default:r((()=>[s("close")])),_:1})]))}}),O=o=>{o.__sourceCode='<template>\n  <div class="wrap">\n    <Tag @close="log" closable>pink</Tag>\n    <Tag color="pink" @close="log" closable>pink</Tag>\n    <Tag color="red" @close="log" closable>red</Tag>\n    <Tag color="orange" @close="log" closable>orange</Tag>\n    <Tag color="green" @close="log" closable>green</Tag>\n    <Tag color="cyan" @close="log" closable>cyan</Tag>\n    <Tag color="blue" @close="log" closable>blue</Tag>\n    <Tag color="purple" @close="log" closable>purple</Tag>\n    <Tag color="#f50" @close="log" closable>#f50</Tag>\n    <Tag color="#2db7f5" @close="log" closable>#2db7f5</Tag>\n    <Tag color="#87d068" @close="log" closable>#87d068</Tag>\n    <Tag color="#108ee9" @close="log" closable>#108ee9</Tag>\n    <Tag color="#108ee9" @close="log" closable>\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="#108ee9" />\n      </template>\n      Wechat\n    </Tag>\n    <Tag color="#108ee9" @close="log" closable>close</Tag>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Tag, SvgIcon } from \'hut-ui\'\n\nconst log = (el: HTMLSpanElement) => {\n  console.log(el)\n}\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n</style>',o.__sourceTitle=" 可关闭的 "};O(N);const z=i(N,[["__scopeId","data-v-16cca888"]]),B=l({__name:"Demo",setup(e){const l=u((()=>[E,q,G,z].map(((o,e)=>w(o,"tag",e)))));return(e,r)=>(a(),n(o,{"demo-arr":t(l)},null,8,["demo-arr"]))}}),K=l({__name:"Index",setup(o){m(null);const l=["基本示例","自定义颜色","自定义icon","可关闭的"],s=u((()=>C("tag",l)));return(o,l)=>(a(),n(e,{"nav-arr":t(s),title:"Tag 标签","component-name":"tag"},{intro:r((()=>[c(k)])),demo:r((()=>[c(B)])),api:r((()=>[c(S)])),_:1},8,["nav-arr"]))}});export{K as default};
