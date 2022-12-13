import{D as e,C as t}from"./DemoDisplay-f307a3ea.js";import{d as n,s as a,r as l,I as o,c as u,e as s,n as r,z as i,q as p,t as c,B as m,j as v,g as d,f,k as _,W as h,S as g,G as x,_ as I}from"./index-85b89606.js";import{_ as b,P as z,T as w}from"./Paragraph-361ff5f9.js";import{_ as y}from"./ApiIntro-a264b77e.js";import{g as T,a as B}from"./helper-e3311bca.js";const C={class:"ui-textarea-label"},S=["placeholder","value","maxlength"],D={key:0,class:"ui-count"},A=n({inheritAttrs:!1,__name:"Textarea",props:{value:{default:""},placeholder:{default:""},autoSize:{type:[Boolean,Object],default:!1},resize:{type:Boolean,default:!1},maxlength:null,showCount:{type:Boolean,default:!1}},emits:["update:value"],setup(e,{emit:t}){const n=e,{value:v,autoSize:d,resize:f,maxlength:_}=a(n),h=l(null),g=()=>{const e=h.value;if(e){if(d.value&&"boolean"==typeof d.value){const t=e.scrollHeight;e.style.height=`${t+2}px`}else if(d.value){const{height:t}=e.getBoundingClientRect(),n=e.scrollHeight;n>t-2&&n<1.5*d.value.maxRows*14+10?e.style.height=`${n+2}px`:n>1.5*d.value.maxRows*14+10&&(e.style.height=1.5*d.value.maxRows*14+10+"px")}t("update:value",e.value)}},x=o((()=>d&&"boolean"!=typeof d.value?{minHeight:1.5*d.value.minRows*14+10+"px",resize:f.value?"both":"none"}:{resize:f.value?"both":"none"})),I=o((()=>`${v.value.length} / ${null==_?void 0:_.value}`));return(t,n)=>(u(),s("label",C,[r("textarea",i({class:"ui-textarea"},t.$attrs,{placeholder:e.placeholder,value:p(v),style:p(x),maxlength:p(_),ref_key:"textareaRef",ref:h,onInput:g}),null,16,S),e.showCount?(u(),s("span",D,c(p(I)),1)):m("",!0)]))}}),R=r("p",null,"通过鼠标或键盘输入内容，是最基础的表单域的包装。",-1),U=r("ul",null,[r("li",null,"Input: 主要组件"),r("li",null,"InputIcon:子组件。")],-1),j=r("ul",null,[r("li",null,"需要用户输入表单域内容时。"),r("li",null,"提供组合型输入框，带搜索的输入框，还可以进行大小选择。")],-1),k=n({__name:"Intro",setup:e=>(e,t)=>(u(),v(p(w),null,{default:d((()=>[f(p(b),null,{default:d((()=>[_("简介")])),_:1}),f(p(z),null,{default:d((()=>[R])),_:1}),f(p(b),null,{default:d((()=>[_("组件概览")])),_:1}),f(p(z),null,{default:d((()=>[U])),_:1}),f(p(b),null,{default:d((()=>[_("使用场景")])),_:1}),f(p(z),null,{default:d((()=>[j])),_:1})])),_:1}))}),$=n({__name:"Api",setup(e){const t=[],n=[{componentName:"Input",attrContent:[{rowIndex:1,"属性":"value","说明":"输入框内容","类型":"string","默认值":""},{rowIndex:2,"属性":"placeholder","说明":"输入框占位","类型":"string","默认值":""},{rowIndex:3,"属性":"type","说明":"输入框类型","类型":"'password' | 'text'","默认值":"text"}]},{componentName:"TeatArea",attrContent:[{rowIndex:1,"属性":"value","说明":"输入框内容","类型":"string","默认值":""},{rowIndex:2,"属性":"placeholder","说明":"输入框占位","类型":"string","默认值":""},{rowIndex:3,"属性":"autoSize","说明":"自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }","类型":"boolean|object","默认值":"false"},{rowIndex:4,"属性":"resize","说明":"文本框是否可拉伸","类型":"boolean","默认值":"false"},{rowIndex:5,"属性":"maxlength","说明":"文本框最多字数","类型":"boolean","默认值":"false"},{rowIndex:6,"属性":"showCount","说明":"展示字数","类型":"boolean","默认值":"false"}]}];return(e,a)=>(u(),v(y,{"attr-content-arr":n,"event-content":t}))}});var L=e=>{e.__sourceCode="<template>\n  <Input v-model:value=\"value\" placeholder=\"Basic usage\" />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Input } from '@/lib'\n\nconst value = ref<string>('')\n<\/script>",e.__sourceTitle="基本用法"};const H=n({__name:"DemoOne",setup(e){const t=l("");return(e,n)=>(u(),v(p(h),{value:t.value,"onUpdate:value":n[0]||(n[0]=e=>t.value=e),placeholder:"Basic usage"},null,8,["value"]))}});L(H);var N=e=>{e.__sourceCode='<template>\n  <Input v-model:value="value" placeholder="Basic usage">\n    <template #prefix>\n      <SvgIcon name="user" size="1em" />\n    </template>\n    <template #suffix>\n      <SvgIcon name="cha" size="1em" @click="clear" />\n    </template>\n  </Input>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Input, SvgIcon } from \'@/lib\'\n\nconst value = ref<string>(\'\')\n\nconst clear = () => {\n  value.value = \'\'\n}\n<\/script>',e.__sourceTitle="支持input前后添加icon"};const F=n({__name:"DemoTwo",setup(e){const t=l(""),n=()=>{t.value=""};return(e,a)=>(u(),v(p(h),{value:t.value,"onUpdate:value":a[0]||(a[0]=e=>t.value=e),placeholder:"Basic usage"},{prefix:d((()=>[f(p(g),{name:"user",size:"1em"})])),suffix:d((()=>[f(p(g),{name:"cha",size:"1em",onClick:n})])),_:1},8,["value"]))}});N(F);var O=e=>{e.__sourceCode="<template>\n  <Input v-model:value=\"value\" placeholder=\"Basic usage\">\n    <template #suffix_outer>\n      <Button :style=\"{ marginLeft: '4px' }\">search</Button>\n    </template>\n  </Input>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Input, Button } from '@/lib'\n\nconst value = ref<string>('')\n<\/script>",e.__sourceTitle="输入框外添加元素"};const P=n({__name:"DemoThree",setup(e){const t=l("");return(e,n)=>(u(),v(p(h),{value:t.value,"onUpdate:value":n[0]||(n[0]=e=>t.value=e),placeholder:"Basic usage"},{suffix_outer:d((()=>[f(p(x),{style:{marginLeft:"4px"}},{default:d((()=>[_("search")])),_:1})])),_:1},8,["value"]))}});O(P);var q=e=>{e.__sourceCode='<template>\n  <Input v-model:value="value" placeholder="Basic usage">\n    <template #prefix_outer>\n      <div class="prefix">\n        <SvgIcon name="search" size="1.5em" />\n      </div>\n    </template>\n    <template #suffix_outer>\n      <Button :style="{ marginLeft: \'4px\' }">search</Button>\n    </template>\n  </Input>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Input, Button, SvgIcon } from \'@/lib\'\n\nconst value = ref<string>(\'\')\n<\/script>\n\n<style scoped lang="scss">\n.prefix {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background: #67c23a;\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n</style>',e.__sourceTitle="输入框外前后添加元素"};const E={class:"prefix"},G=n({__name:"DemoFour",setup(e){const t=l("");return(e,n)=>(u(),v(p(h),{value:t.value,"onUpdate:value":n[0]||(n[0]=e=>t.value=e),placeholder:"Basic usage"},{prefix_outer:d((()=>[r("div",E,[f(p(g),{name:"search",size:"1.5em"})])])),suffix_outer:d((()=>[f(p(x),{style:{marginLeft:"4px"}},{default:d((()=>[_("search")])),_:1})])),_:1},8,["value"]))}});q(G);var W=I(G,[["__scopeId","data-v-65adc3da"]]),J=e=>{e.__sourceCode="<template>\n  <Textarea\n    v-model:value=\"value\"\n    placeholder=\"Autosize height based on content lines\"\n    autoSize\n  />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Textarea } from '@/lib'\n\nconst value = ref<string>('')\n<\/script>",e.__sourceTitle="适应文本高度的文本域"};const K=n({__name:"DemoFive",setup(e){const t=l("");return(e,n)=>(u(),v(p(A),{value:t.value,"onUpdate:value":n[0]||(n[0]=e=>t.value=e),placeholder:"Autosize height based on content lines",autoSize:""},null,8,["value"]))}});J(K);var M=e=>{e.__sourceCode='<template>\n  <Textarea\n    v-model:value="value"\n    placeholder="Autosize height based on content lines"\n    :autoSize="{ minRows: 3, maxRows: 5 }"\n  />\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Textarea } from \'@/lib\'\n\nconst value = ref<string>(\'\')\n<\/script>',e.__sourceTitle="设置文本最大高度和最小高度"};const Q=n({__name:"DemoSix",setup(e){const t=l("");return(e,n)=>(u(),v(p(A),{value:t.value,"onUpdate:value":n[0]||(n[0]=e=>t.value=e),placeholder:"Autosize height based on content lines",autoSize:{minRows:3,maxRows:5}},null,8,["value"]))}});M(Q);var V=e=>{e.__sourceCode="<template>\n  <Textarea\n    v-model:value=\"value\"\n    placeholder=\"Autosize height based on content lines\"\n    resize\n  />\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\nimport { Textarea } from '@/lib'\n\nconst value = ref<string>('')\n<\/script>",e.__sourceTitle="文本框设置可拖拉"};const X=n({__name:"DemoSeven",setup(e){const t=l("");return(e,n)=>(u(),v(p(A),{value:t.value,"onUpdate:value":n[0]||(n[0]=e=>t.value=e),placeholder:"Autosize height based on content lines",resize:""},null,8,["value"]))}});V(X);var Y=e=>{e.__sourceCode='<template>\n  <Textarea\n    v-model:value="value"\n    placeholder="Autosize height based on content lines"\n    :maxlength="20"\n    showCount\n  />\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Textarea } from \'@/lib\'\n\nconst value = ref<string>(\'\')\n<\/script>',e.__sourceTitle="带字数提示"};const Z=n({__name:"DemoEight",setup(e){const t=l("");return(e,n)=>(u(),v(p(A),{value:t.value,"onUpdate:value":n[0]||(n[0]=e=>t.value=e),placeholder:"Autosize height based on content lines",maxlength:20,showCount:""},null,8,["value"]))}});Y(Z);var ee=e=>{e.__sourceCode='<template>\n  <Input v-model:value="value" placeholder="Basic usage" type="password" />\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\nimport { Input } from \'@/lib\'\n\nconst value = ref<string>(\'\')\n<\/script>',e.__sourceTitle="密码输入框"};const te=n({__name:"DemoNine",setup(e){const t=l("");return(e,n)=>(u(),v(p(h),{value:t.value,"onUpdate:value":n[0]||(n[0]=e=>t.value=e),placeholder:"Basic usage",type:"password"},null,8,["value"]))}});ee(te);const ne=n({__name:"Demo",setup(t){const n=o((()=>[H,F,te,P,W,K,Q,X,Z].map(((e,t)=>T(e,"input",t)))));return(t,a)=>(u(),v(e,{"demo-arr":p(n)},null,8,["demo-arr"]))}}),ae=n({__name:"Index",setup(e){l(null);const n=["基本用法","支持input前后添加icon","密码输入框","输入框外添加元素","输入框外前后添加元素","适应文本高度的文本域","设置文本最大高度和最小高度","文本框设置可拖拉","带字数提示"],a=o((()=>B("input",n)));return(e,n)=>(u(),v(t,{"nav-arr":p(a),title:"Input 输入框","component-name":"input"},{intro:d((()=>[f(k)])),demo:d((()=>[f(ne)])),api:d((()=>[f($)])),_:1},8,["nav-arr"]))}});export{ae as default};
