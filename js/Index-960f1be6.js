import{D as t,C as e}from"./DemoDisplay-53a9c10a.js";import{d as n,c as a,j as l,g as o,f as i,q as s,k as r,n as d,e as p,I as u,s as c,_ as m,J as f,r as g}from"./index-6bb449f3.js";import{_,P as y,T as h}from"./Paragraph-138135f0.js";import{_ as w}from"./ApiIntro-fdf4ccdf.js";import{g as B,a as v}from"./helper-7416cab9.js";import{B as x}from"./DemoOne-94df02c2.js";const b=d("p",null," 主要用于即时操作，表示交互时发生的动作，响应用户点击行为触发相应的业务逻辑，比如添加、保存、删除和注册等。 ",-1),I=d("p",null,"我们提供了五种按钮。",-1),k=d("ul",null,[d("li",null,"主按钮：用于主行动点，一个操作区域只能有一个主按钮。"),d("li",null,"默认按钮：用于没有主次之分的一组行动点。"),d("li",null,"虚线按钮：常用于添加操作。"),d("li",null,"文本按钮：用于最次级的行动点。"),d("li",null,"链接按钮：一般用于链接，即导航至某位置。")],-1),S=d("ul",null,[d("li",null,"Button: 主要组件")],-1),D=d("p",null,"用于启动即时操作，如提交表单。",-1),T=n({__name:"Intro",setup:t=>(t,e)=>(a(),l(s(h),null,{default:o((()=>[i(s(_),{level:4},{default:o((()=>[r("简介")])),_:1}),i(s(y),null,{default:o((()=>[b,I,k])),_:1}),i(s(_),{level:4},{default:o((()=>[r("组件概览")])),_:1}),i(s(y),null,{default:o((()=>[S])),_:1}),i(s(_),{level:4},{default:o((()=>[r("使用场景")])),_:1}),i(s(y),null,{default:o((()=>[D])),_:1})])),_:1}))}),C=n({__name:"Api",setup(t){const e=[{rowIndex:1,"事件名称":"click","说明":"点击按钮时的回调","回调参数":"(event) => void"}],n=[{componentName:"Button",attrContent:[{rowIndex:1,"属性":"radius","说明":"圆形按钮","类型":"boolean","默认值":"false"},{rowIndex:2,"属性":"disabled","说明":"禁用按钮","类型":"boolean","默认值":"false"},{rowIndex:3,"属性":"size","说明":"按钮大小","类型":"'big' | 'normal' | 'small'","默认值":"normal"},{rowIndex:4,"属性":"type","说明":"按钮类型","类型":"'primary' | 'text' | 'link' | 'dashed' | 'default'","默认值":"primary"},{rowIndex:5,"属性":"loading","说明":"加载中状态","类型":"boolean","默认值":"false"},{rowIndex:6,"属性":"danger","说明":"危险按钮","类型":"boolean","默认值":"false"}]}];return(t,o)=>(a(),l(w,{"attr-content-arr":n,"event-content":e}))}});var j=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Button radius loading></Button>\n    <Button radius>A</Button>\n    <Button radius type="dashed">A</Button>\n    <Button type="text" radius style="background-color: #67c23a">\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="#fff" />\n      </template>\n    </Button>\n    <Button type="text" radius style="background-color: #e6a23c">\n      <template #icon>\n        <SvgIcon name="search" width="1em" height="1em" fill="#fff" />\n      </template>\n    </Button>\n    <Button type="primary" radius>\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" fill="#fff" />\n      </template>\n    </Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Button, SvgIcon } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n</style>',t.__sourceTitle=" 圆形按钮 "};const z={class:"wrap"},A=n({__name:"DemoTwo",setup:t=>(t,e)=>(a(),p("div",z,[i(s(u),{radius:"",loading:""}),i(s(u),{radius:""},{default:o((()=>[r("A")])),_:1}),i(s(u),{radius:"",type:"dashed"},{default:o((()=>[r("A")])),_:1}),i(s(u),{type:"text",radius:"",style:{"background-color":"#67c23a"}},{icon:o((()=>[i(s(c),{name:"weixin",width:"1em",height:"1em",fill:"#fff"})])),_:1}),i(s(u),{type:"text",radius:"",style:{"background-color":"#e6a23c"}},{icon:o((()=>[i(s(c),{name:"search",width:"1em",height:"1em",fill:"#fff"})])),_:1}),i(s(u),{type:"primary",radius:""},{icon:o((()=>[i(s(c),{name:"email",width:"1em",height:"1em",fill:"#fff"})])),_:1})]))});j(A);var F=m(A,[["__scopeId","data-v-0d3c9db5"]]),P=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Button loading>toggle</Button>\n    <Button loading radius></Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Button } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n</style>',t.__sourceTitle=" 加载中状态 "};const q={class:"wrap"},J=n({__name:"DemoThree",setup:t=>(t,e)=>(a(),p("div",q,[i(s(u),{loading:""},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{loading:"",radius:""})]))});P(J);var N=m(J,[["__scopeId","data-v-72a8c870"]]),O=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Button size="big">toggle</Button>\n    <Button size="normal">toggle</Button>\n    <Button size="small">toggle</Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Button } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  align-items: center;\n}\n</style>',t.__sourceTitle=" 大小可选 "};const E={class:"wrap"},G=n({__name:"DemoFour",setup:t=>(t,e)=>(a(),p("div",E,[i(s(u),{size:"big"},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{size:"normal"},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{size:"small"},{default:o((()=>[r("toggle")])),_:1})]))});O(G);var H=m(G,[["__scopeId","data-v-5cccbc60"]]),K=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Button type="primary" disabled>toggle</Button>\n    <Button type="text" disabled>toggle</Button>\n    <Button type="link" disabled>toggle</Button>\n    <Button type="dashed" disabled>toggle</Button>\n    <Button type="default" disabled>toggle</Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Button } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n</style>',t.__sourceTitle=" 禁用按钮 "};const L={class:"wrap"},M=n({__name:"DemoFive",setup:t=>(t,e)=>(a(),p("div",L,[i(s(u),{type:"primary",disabled:""},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{type:"text",disabled:""},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{type:"link",disabled:""},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{type:"dashed",disabled:""},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{type:"default",disabled:""},{default:o((()=>[r("toggle")])),_:1})]))});K(M);var Q=m(M,[["__scopeId","data-v-c25aaf04"]]),R=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Button type="text" radius style="background-color: #67c23a">\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="#fff" />\n      </template>\n    </Button>\n    <Button type="text" radius style="background-color: #e6a23c">\n      <template #icon>\n        <SvgIcon name="search" width="1em" height="1em" fill="#fff" />\n      </template>\n    </Button>\n    <Button type="primary" radius>\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" fill="#fff" />\n      </template>\n    </Button>\n\n    <Button type="text" style="background-color: #67c23a">\n      <template #icon>\n        <SvgIcon name="weixin" width="1em" height="1em" fill="#fff" />\n      </template>\n      wechat\n    </Button>\n    <Button type="text" style="background-color: #e6a23c">\n      <template #icon>\n        <SvgIcon name="search" width="1em" height="1em" fill="#fff" />\n      </template>\n      search\n    </Button>\n    <Button type="primary">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" fill="#fff" />\n      </template>\n      email\n    </Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Button, SvgIcon } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n</style>',t.__sourceTitle=" 支持自定义icon "};const U={class:"wrap"},V=n({__name:"DemoSix",setup:t=>(t,e)=>(a(),p("div",U,[i(s(u),{type:"text",radius:"",style:{"background-color":"#67c23a"}},{icon:o((()=>[i(s(c),{name:"weixin",width:"1em",height:"1em",fill:"#fff"})])),_:1}),i(s(u),{type:"text",radius:"",style:{"background-color":"#e6a23c"}},{icon:o((()=>[i(s(c),{name:"search",width:"1em",height:"1em",fill:"#fff"})])),_:1}),i(s(u),{type:"primary",radius:""},{icon:o((()=>[i(s(c),{name:"email",width:"1em",height:"1em",fill:"#fff"})])),_:1}),i(s(u),{type:"text",style:{"background-color":"#67c23a"}},{icon:o((()=>[i(s(c),{name:"weixin",width:"1em",height:"1em",fill:"#fff"})])),default:o((()=>[r(" wechat ")])),_:1}),i(s(u),{type:"text",style:{"background-color":"#e6a23c"}},{icon:o((()=>[i(s(c),{name:"search",width:"1em",height:"1em",fill:"#fff"})])),default:o((()=>[r(" search ")])),_:1}),i(s(u),{type:"primary"},{icon:o((()=>[i(s(c),{name:"email",width:"1em",height:"1em",fill:"#fff"})])),default:o((()=>[r(" email ")])),_:1})]))});R(V);var W=m(V,[["__scopeId","data-v-33410fdc"]]),X=t=>{t.__sourceCode='<template>\n  <div class="wrap">\n    <Button type="primary" danger>toggle</Button>\n    <Button type="text" danger>toggle</Button>\n    <Button type="link" danger>toggle</Button>\n    <Button type="dashed" danger>toggle</Button>\n    <Button type="default" danger>toggle</Button>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Button } from \'hut-ui\'\n<\/script>\n\n<style lang="scss" scoped>\n.wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n</style>',t.__sourceTitle=" 危险按钮 "};const Y={class:"wrap"},Z=n({__name:"DemoSeven",setup:t=>(t,e)=>(a(),p("div",Y,[i(s(u),{type:"primary",danger:""},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{type:"text",danger:""},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{type:"link",danger:""},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{type:"dashed",danger:""},{default:o((()=>[r("toggle")])),_:1}),i(s(u),{type:"default",danger:""},{default:o((()=>[r("toggle")])),_:1})]))});X(Z);var $=m(Z,[["__scopeId","data-v-0c5dd635"]]);const tt=n({__name:"Demo",setup(e){const n=f((()=>[x,F,N,H,Q,W,$].map(((t,e)=>B(t,"button",e)))));return(e,o)=>(a(),l(t,{"demo-arr":s(n)},null,8,["demo-arr"]))}}),et=n({__name:"Index",setup(t){g(null);const n=["按钮类型","圆形按钮","加载中状态","大小可选","禁用按钮","支持icon","危险按钮"],r=f((()=>v("button",n)));return(t,n)=>(a(),l(e,{"nav-arr":s(r),title:"Button 按钮","component-name":"button"},{intro:o((()=>[i(T)])),demo:o((()=>[i(tt)])),api:o((()=>[i(C)])),_:1},8,["nav-arr"]))}});export{et as default};