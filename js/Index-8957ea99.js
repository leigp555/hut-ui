import{_ as e,P as a,T as n,g as t,D as l,C as o,a as s}from"./DemoDisplay-d14d3ff9.js";import{e as r,_ as u,h as m}from"./Paragraph.vue_vue_type_style_index_0_lang-1a82c502.js";import{d as p,u as i,k as d,r as c,s as f,o as v,c as F,e as _,w,g as I,n as y,b as S,v as b,m as g,l as C,T as h,B as x,t as P,C as A,x as D,h as U,a as j,z as B}from"./index-54c84176.js";/* empty css                                                */import{_ as R}from"./ApiIntro-50aaf7d6.js";import{_ as $,a as E}from"./Row-2f04a4c8.js";const N={class:"ui-formItem-wrap"},T={class:"ui-formItem-label"},O={class:"ui-formItem-content"},M={class:"ui-formItem-input"},k={class:"formItem-content-error-wrap"},W={class:"ui-formItem-content"},z={class:"ui-formItem-input"},q={key:0,class:"formItem-content-error-wrap"},G=p({__name:"FormItem",props:{label:{default:""},name:{default:""},rules:{default:()=>[]},layout:null,labelCol:null,wrapperCol:null,data:null},setup(e){const a=e,n=i().default(),{name:t,data:l,rules:o}=d(a),s=c(!1),r=c(""),u=f("ui_form_errorArr"),m=f("ui_form_changeErrorArr"),p=e=>{const a=o.value.map((a=>((e,a)=>new Promise(((n,t)=>{e.pattern.test(a)?n(!0):t(e.message)})))(a,e)));Promise.all(a).then((()=>{s.value=!1;const e=null==u?void 0:u.value.findIndex((e=>e.name===t.value));e>=0&&(null==u?void 0:u.value)&&m&&m([...u.value.slice(0,e),...u.value.slice(e+1)])})).catch((e=>{s.value=!0,r.value=e;(null==u?void 0:u.value.findIndex((e=>e.name===t.value)))<0&&(null==u?void 0:u.value)&&m&&m([...u.value,{name:t.value,reason:[e]}])}))};return(a,l)=>(v(),F("div",N,[_(E,{alignItems:"start",justify:"center",style:{margin:"0"}},{default:w((()=>[a.$slots.label?(v(),I($,{key:0,span:e.wrapperCol.span,offset:e.wrapperCol.offset,class:y(["formItem-content-wrap",{"formItem-content-vertical-wrap":"vertical"===e.layout}])},{default:w((()=>[_($,{span:e.labelCol.span,offset:e.labelCol.offset,class:y(["formItem-content-label-wrap",{"formItem-content-label-vertical-wrap":"vertical"===e.layout}])},{default:w((()=>[S("div",T,[b(a.$slots,"label")])])),_:3},8,["span","offset","class"]),S("div",O,[S("div",M,[(v(),I(g(C(n)[0]),{"onUpdate:value":p},null,32))]),S("div",k,[_(h,{name:"error-action"},{default:w((()=>[x(S("div",{class:"formItem-content-error"},P(r.value),513),[[A,s.value]])])),_:1})])])])),_:3},8,["span","offset","class"])):(v(),I($,{key:1,span:e.wrapperCol.span,class:y(["formItem-content-wrap",{"formItem-content-vertical-wrap":"vertical"===e.layout}])},{default:w((()=>[_($,{offset:e.wrapperCol.offset,span:100,class:y(["formItem-content-No-label-wrap",{"formItem-content-No-label-vertical-wrap":"vertical"===e.layout}])},{default:w((()=>[S("div",W,[S("div",z,[(v(),I(g(C(n)[0]),{"onUpdate:value":p},null,32))]),C(t)?(v(),F("div",q,[_(h,{name:"error-action"},{default:w((()=>[x(S("div",{class:"formItem-content-error"},P(r.value),513),[[A,s.value]])])),_:1})])):D("",!0)])])),_:1},8,["offset","class"])])),_:1},8,["span","class"]))])),_:3})]))}}),H=S("p",null,"高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。",-1),J=S("ul",null,[S("li",null,"Form: 主要组件"),S("li",null,"FormItem:子组件。"),S("li",null,"Input:子组件。"),S("li",null,"InputIcon:子组件。")],-1),K=S("ul",null,[S("li",null,"用于创建一个实体或收集信息。"),S("li",null,"需要对输入的数据类型进行校验时。")],-1),L=p({__name:"Intro",setup:t=>(t,l)=>(v(),I(C(n),null,{default:w((()=>[_(C(e),null,{default:w((()=>[U("简介")])),_:1}),_(C(a),null,{default:w((()=>[H])),_:1}),_(C(e),null,{default:w((()=>[U("组件概览")])),_:1}),_(C(a),null,{default:w((()=>[J])),_:1}),_(C(e),null,{default:w((()=>[U("使用场景")])),_:1}),_(C(a),null,{default:w((()=>[K])),_:1})])),_:1}))}),Q=p({__name:"Api",setup(e){const a=[{rowIndex:1,"事件名称":"finish","说明":"提交表单且数据验证成功后回调事件","回调参数":"function(values)"},{rowIndex:1,"事件名称":"finishFailed","说明":"提交表单且数据验证失败后回调事件","回调参数":"function({ values, errorFields, outOfDate })"}],n=[{componentName:"Form",attrContent:[{rowIndex:1,"属性":"data","说明":"表单数据对象","类型":"object","默认值":""},{rowIndex:2,"属性":"layout","说明":"表单布局","类型":"'horizontal' | 'vertical'","默认值":"vertical"},{rowIndex:3,"属性":"labelCol","说明":"label 标签布局，同 <Col> 组件，设置","类型":"object","默认值":"{ span: 10, offset: 0 }"},{rowIndex:4,"属性":"wrapperCol","说明":"label 标签布局，同 <Col> 组件，设置","类型":"object","默认值":"{ span: 100, offset: 0 }"},{rowIndex:5,"属性":"autocomplete","说明":"自动完成","类型":"'off' | 'on'","默认值":"off"}]},{componentName:"FormItem",attrContent:[{rowIndex:1,"属性":"label","说明":"标签名","类型":"string","默认值":""},{rowIndex:2,"属性":"name","说明":"表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的","类型":"string","默认值":""},{rowIndex:3,"属性":"rules","说明":"表单验证规则","类型":" Rule[]","默认值":"[]"}]}];return(e,t)=>(v(),I(R,{"attr-content-arr":n,"event-content":a}))}});var V=e=>{e.__sourceCode='<template>\n  <Form\n    :data="formState"\n    layout="vertical"\n    :labelCol="{ span: 10 }"\n    :wrapperCol="{ span: 50 }"\n    autocomplete="off"\n    @finish="onFinish"\n    @finishFailed="onFinishFailed"\n  >\n    <FormItem name="username">\n      <template #label><span>USERNAME :</span></template>\n      <Input v-model:value="formState.username" />\n    </FormItem>\n\n    <FormItem name="password">\n      <template #label><span>PASSWORD :</span></template>\n      <Input v-model:value="formState.password" type="password" />\n    </FormItem>\n    <FormItem :wrapperCol="{ span: 50 }">\n      <Button type="primary">Submit</Button>\n    </FormItem>\n  </Form>\n</template>\n\n<script setup lang="ts">\nimport { reactive } from \'vue\'\nimport { Form, FormItem, Button, Input } from \'@/lib\'\n\ninterface FormState {\n  username: string\n  password: string\n}\nconst formState = reactive<FormState>({\n  username: \'\',\n  password: \'\'\n})\n\nconst onFinish = (values: any) => {\n  console.log(\'Success:\', values)\n}\n\nconst onFinishFailed = (errorInfo: any) => {\n  console.log(\'Failed:\', errorInfo)\n}\n<\/script>',e.__sourceTitle="基本用法"};const X=S("span",null,"USERNAME :",-1),Y=S("span",null,"PASSWORD :",-1),Z=p({__name:"DemoOne",setup(e){const a=j({username:"",password:""}),n=e=>{console.log("Success:",e)},t=e=>{console.log("Failed:",e)};return(e,l)=>(v(),I(C(m),{data:a,layout:"vertical",labelCol:{span:10},wrapperCol:{span:50},autocomplete:"off",onFinish:n,onFinishFailed:t},{default:w((()=>[_(C(G),{name:"username"},{label:w((()=>[X])),default:w((()=>[_(C(r),{value:a.username,"onUpdate:value":l[0]||(l[0]=e=>a.username=e)},null,8,["value"])])),_:1}),_(C(G),{name:"password"},{label:w((()=>[Y])),default:w((()=>[_(C(r),{value:a.password,"onUpdate:value":l[1]||(l[1]=e=>a.password=e),type:"password"},null,8,["value"])])),_:1}),_(C(G),{wrapperCol:{span:50}},{default:w((()=>[_(C(u),{type:"primary"},{default:w((()=>[U("Submit")])),_:1})])),_:1})])),_:1},8,["data"]))}});V(Z);var ee=e=>{e.__sourceCode='<template>\n  <Form\n    :data="formState"\n    layout="line"\n    :wrapperCol="{ span: 50 }"\n    autocomplete="off"\n    @finish="onFinish"\n    @finishFailed="onFinishFailed"\n  >\n    <FormItem\n      name="username"\n      :rules="[{ pattern: /^\\d{0,5}\\d$/, message: \'Please input your username!\' }]"\n    >\n      <Input v-model:value="formState.username" />\n    </FormItem>\n\n    <FormItem\n      name="password"\n      :rules="[{ pattern: /^\\d{0,5}\\d$/, message: \'Please input your password!\' }]"\n    >\n      <Input v-model:value="formState.password" type="password" />\n    </FormItem>\n    <FormItem :wrapperCol="{ span: 50 }">\n      <Button type="primary">Submit</Button>\n    </FormItem>\n  </Form>\n</template>\n\n<script setup lang="ts">\nimport { reactive } from \'vue\'\nimport { Form, FormItem, Button, Input } from \'@/lib\'\n\ninterface FormState {\n  username: string\n  password: string\n}\nconst formState = reactive<FormState>({\n  username: \'\',\n  password: \'\'\n})\n\nconst onFinish = (values: any) => {\n  console.log(\'Success:\', values)\n}\n\nconst onFinishFailed = (errorInfo: any) => {\n  console.log(\'Failed:\', errorInfo)\n}\n<\/script>',e.__sourceTitle="没有title"};const ae=p({__name:"DemoTwo",setup(e){const a=j({username:"",password:""}),n=e=>{console.log("Success:",e)},t=e=>{console.log("Failed:",e)};return(e,l)=>(v(),I(C(m),{data:a,layout:"line",wrapperCol:{span:50},autocomplete:"off",onFinish:n,onFinishFailed:t},{default:w((()=>[_(C(G),{name:"username",rules:[{pattern:/^\d{0,5}\d$/,message:"Please input your username!"}]},{default:w((()=>[_(C(r),{value:a.username,"onUpdate:value":l[0]||(l[0]=e=>a.username=e)},null,8,["value"])])),_:1}),_(C(G),{name:"password",rules:[{pattern:/^\d{0,5}\d$/,message:"Please input your password!"}]},{default:w((()=>[_(C(r),{value:a.password,"onUpdate:value":l[1]||(l[1]=e=>a.password=e),type:"password"},null,8,["value"])])),_:1}),_(C(G),{wrapperCol:{span:50}},{default:w((()=>[_(C(u),{type:"primary"},{default:w((()=>[U("Submit")])),_:1})])),_:1})])),_:1},8,["data"]))}});ee(ae);var ne=e=>{e.__sourceCode='<template>\n  <Form\n    :data="formState"\n    layout="vertical"\n    :labelCol="{ span: 10 }"\n    :wrapperCol="{ span: 50 }"\n    autocomplete="off"\n    @finish="onFinish"\n    @finishFailed="onFinishFailed"\n  >\n    <FormItem\n      name="username"\n      :rules="[{ pattern: /^\\d{0,5}\\d$/, message: \'Please input your username!\' }]"\n    >\n      <template #label><span>USERNAME :</span></template>\n      <Input v-model:value="formState.username" />\n    </FormItem>\n\n    <FormItem\n      name="password"\n      :rules="[{ pattern: /^\\d{0,5}\\d$/, message: \'Please input your password!\' }]"\n    >\n      <template #label><span>PASSWORD :</span></template>\n      <Input v-model:value="formState.password" type="password" />\n    </FormItem>\n    <FormItem :wrapperCol="{ span: 50 }">\n      <Button type="primary">Submit</Button>\n    </FormItem>\n  </Form>\n</template>\n\n<script setup lang="ts">\nimport { reactive } from \'vue\'\nimport { Form, FormItem, Button, Input } from \'@/lib\'\n\ninterface FormState {\n  username: string\n  password: string\n}\nconst formState = reactive<FormState>({\n  username: \'\',\n  password: \'\'\n})\n\nconst onFinish = (values: any) => {\n  console.log(\'Success:\', values)\n}\n\nconst onFinishFailed = (errorInfo: any) => {\n  console.log(\'Failed:\', errorInfo)\n}\n<\/script>',e.__sourceTitle="表单验证"};const te=S("span",null,"USERNAME :",-1),le=S("span",null,"PASSWORD :",-1),oe=p({__name:"DemoThree",setup(e){const a=j({username:"",password:""}),n=e=>{console.log("Success:",e)},t=e=>{console.log("Failed:",e)};return(e,l)=>(v(),I(C(m),{data:a,layout:"vertical",labelCol:{span:10},wrapperCol:{span:50},autocomplete:"off",onFinish:n,onFinishFailed:t},{default:w((()=>[_(C(G),{name:"username",rules:[{pattern:/^\d{0,5}\d$/,message:"Please input your username!"}]},{label:w((()=>[te])),default:w((()=>[_(C(r),{value:a.username,"onUpdate:value":l[0]||(l[0]=e=>a.username=e)},null,8,["value"])])),_:1}),_(C(G),{name:"password",rules:[{pattern:/^\d{0,5}\d$/,message:"Please input your password!"}]},{label:w((()=>[le])),default:w((()=>[_(C(r),{value:a.password,"onUpdate:value":l[1]||(l[1]=e=>a.password=e),type:"password"},null,8,["value"])])),_:1}),_(C(G),{wrapperCol:{span:50}},{default:w((()=>[_(C(u),{type:"primary"},{default:w((()=>[U("Submit")])),_:1})])),_:1})])),_:1},8,["data"]))}});ne(oe);const se=p({__name:"Demo",setup(e){const a=B((()=>[Z,ae,oe].map(((e,a)=>t(e,"form",a)))));return(e,n)=>(v(),I(l,{"demo-arr":C(a)},null,8,["demo-arr"]))}}),re=p({__name:"Index",setup(e){c(null);const a=["基本用法","没有title","表单验证"],n=B((()=>s("form",a)));return(e,a)=>(v(),I(o,{"nav-arr":C(n),title:"Form 表单","component-name":"form"},{intro:w((()=>[_(L)])),demo:w((()=>[_(se)])),api:w((()=>[_(Q)])),_:1},8,["nav-arr"]))}});export{re as default};
