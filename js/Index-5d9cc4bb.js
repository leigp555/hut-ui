import{D as e,C as n}from"./DemoDisplay-f307a3ea.js";import{d as a,c as i,j as t,g as s,f as o,q as l,k as p,n as r,e as u,S as d,_ as m,r as c,G as _,I as v}from"./index-85b89606.js";import{_ as g,P as f,T as S}from"./Paragraph-361ff5f9.js";import{_ as x,b as w}from"./ApiIntro-a264b77e.js";import{g as b,a as z}from"./helper-e3311bca.js";const q=r("p",null,"用于页面和区块的加载中状态。",-1),y=r("ul",null,[r("li",null,"Spin")],-1),I=r("p",null," 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。 ",-1),T=a({__name:"Intro",setup:e=>(e,n)=>(i(),t(l(S),null,{default:s((()=>[o(l(g),{level:4},{default:s((()=>[p("简介")])),_:1}),o(l(f),null,{default:s((()=>[q])),_:1}),o(l(g),{level:4},{default:s((()=>[p("组件概述")])),_:1}),o(l(f),null,{default:s((()=>[y])),_:1}),o(l(g),{level:4},{default:s((()=>[p("使用场景")])),_:1}),o(l(f),null,{default:s((()=>[I])),_:1})])),_:1}))}),C=a({__name:"Api",setup(e){const n=[],a=[{componentName:"Spin",attrContent:[{rowIndex:1,"属性":"size","说明":"组件大小","类型":"number","默认值":"20"},{rowIndex:2,"属性":"loading","说明":"是否处于加载状态","类型":"boolean","默认值":"true"},{rowIndex:3,"属性":"tip","说明":"当作为包裹元素时，可以自定义描述文案","类型":"string","默认值":""},{rowIndex:4,"属性":"delay","说明":"延迟显示加载效果的时间（防止闪烁)","类型":"number (毫秒)","默认值":"0"}]}];return(e,s)=>(i(),t(x,{"attr-content-arr":a,"event-content":n}))}});var D=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Spin />\n    <Spin :size="32" />\n    <Spin :size="42" />\n    <Spin tip="loading" />\n    <Spin :size="42">\n      <template #icon>\n        <SvgIcon name="loading" size="20px" color="#1890ff" />\n      </template>\n    </Spin>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Spin, SvgIcon } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 100px;\n}\n</style>',e.__sourceTitle=" 基本用法 "};const L={class:"wrap"},h=a({__name:"DemoOne",setup:e=>(e,n)=>(i(),u("div",L,[o(l(w)),o(l(w),{size:32}),o(l(w),{size:42}),o(l(w),{tip:"loading"}),o(l(w),{size:42},{icon:s((()=>[o(l(d),{name:"loading",size:"20px",color:"#1890ff"})])),_:1})]))});D(h);var j=m(h,[["__scopeId","data-v-24ae4359"]]),A=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Spin />\n    <Spin :size="32" />\n    <Spin :size="42" />\n    <Spin :size="56" />\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { Spin } from \'hut-ui\'\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 100px;\n}\n</style>',e.__sourceTitle=" 不同大小 "};const B={class:"wrap"},k=a({__name:"DemoTwo",setup:e=>(e,n)=>(i(),u("div",B,[o(l(w)),o(l(w),{size:32}),o(l(w),{size:42}),o(l(w),{size:56})]))});A(k);var V=m(k,[["__scopeId","data-v-1859157a"]]),F=e=>{e.__sourceCode='<template>\n  <Spin tip="loading" />\n</template>\n\n<script setup lang="ts">\nimport { Spin } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" 自定义描述文案。 "};const P=a({__name:"DemoThree",setup:e=>(e,n)=>(i(),t(l(w),{tip:"loading"}))});F(P);var G=e=>{e.__sourceCode='<template>\n  <Spin :size="42" tip="loading">\n    <template #icon>\n      <SvgIcon name="loading" size="20px" color="#1890ff" />\n    </template>\n  </Spin>\n</template>\n\n<script setup lang="ts">\nimport { Spin, SvgIcon } from \'hut-ui\'\n<\/script>',e.__sourceTitle=" 自定义icon "};const N=a({__name:"DemoFour",setup:e=>(e,n)=>(i(),t(l(w),{size:42,tip:"loading"},{icon:s((()=>[o(l(d),{name:"loading",size:"20px",color:"#1890ff"})])),_:1}))});G(N);var O=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Spin :loading="loading">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores\n      aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis\n      perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit?\n    </Spin>\n    <div>\n      <Button @click="onLoading">loading</Button>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Spin, Button } from \'@/lib\'\n\nconst loading = ref<boolean>(false)\nconst onLoading = () => {\n  loading.value = true\n  const id = setTimeout(() => {\n    loading.value = false\n    window.clearTimeout(id)\n  }, 4000)\n}\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n}\n</style>',e.__sourceTitle="占位"};const E={class:"wrap"},H=a({__name:"DemoFive",setup(e){const n=c(!1),a=()=>{n.value=!0;const e=setTimeout((()=>{n.value=!1,window.clearTimeout(e)}),4e3)};return(e,t)=>(i(),u("div",E,[o(l(w),{loading:n.value},{default:s((()=>[p(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit? ")])),_:1},8,["loading"]),r("div",null,[o(l(_),{onClick:a},{default:s((()=>[p("loading")])),_:1})])]))}});O(H);var J=m(H,[["__scopeId","data-v-de736b12"]]),K=e=>{e.__sourceCode='<template>\n  <div class="wrap">\n    <Spin :loading="loading" :delay="500">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores\n      aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis\n      perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit?\n    </Spin>\n    <div>\n      <Button @click="onLoading">loading</Button>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Spin, Button } from \'@/lib\'\n\nconst loading = ref<boolean>(false)\nconst onLoading = () => {\n  loading.value = !loading.value\n}\n<\/script>\n\n<style scoped lang="scss">\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n</style>',e.__sourceTitle="延迟加载"};const M={class:"wrap"},Q=a({__name:"DemoSix",setup(e){const n=c(!1),a=()=>{n.value=!n.value};return(e,t)=>(i(),u("div",M,[o(l(w),{loading:n.value,delay:500},{default:s((()=>[p(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores aspernatur, beatae deserunt doloremque eaque earum ipsa ipsam molestias omnis perspiciatis provident quam quia rerum temporibus, voluptatem voluptatum? Velit? ")])),_:1},8,["loading"]),r("div",null,[o(l(_),{onClick:a},{default:s((()=>[p("loading")])),_:1})])]))}});K(Q);var R=m(Q,[["__scopeId","data-v-74007055"]]);const U=a({__name:"Demo",setup(n){const a=v((()=>[j,V,P,N,J,R].map(((e,n)=>b(e,"spin",n)))));return(n,s)=>(i(),t(e,{"demo-arr":l(a)},null,8,["demo-arr"]))}}),W=a({__name:"Index",setup(e){c(null);const a=["基本用法","不同大小","自定义描述文案","自定义icon","占位","延迟加载"],p=v((()=>z("spin",a)));return(e,a)=>(i(),t(n,{"nav-arr":l(p),title:"Spin 加载中","component-name":"spin"},{intro:s((()=>[o(T)])),demo:s((()=>[o(U)])),api:s((()=>[o(C)])),_:1},8,["nav-arr"]))}});export{W as default};
