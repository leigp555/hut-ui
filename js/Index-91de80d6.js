import{D as e,C as l}from"./DemoDisplay-5c75c5c6.js";import{d as a,E as n,r as u,L as o,b as t,c as i,i as r,e as s,F as c,h as v,m as d,t as b,q as p,a0 as h,C as g,z as m,D as f,f as _,v as C,o as x,g as k,a3 as y,V as w,a4 as T,x as j,y as z,T as P,a1 as D,j as S}from"./index-d036eac4.js";import{_ as I,P as N,T as B}from"./Paragraph-90b9bde5.js";import{_ as O}from"./ApiIntro.vue_vue_type_style_index_0_lang-cb80a9b7.js";import{g as V,a as E}from"./helper-0b2cce03.js";const L={key:0,class:"ui-cascader-pop ui-scroll-container",ref:"popRef"},M=["onClick"],X={class:"item-label-value"},F=a({__name:"CascaderPop",props:{options:{default:null},toEl:null},setup(e){const l=n("popVisibility"),a=n("changeValue"),C=u(""),x=n("initValue"),k=o((()=>null==x?void 0:x.value.split("/")));return(n,u)=>{const o=t("CascaderPop",!0);return i(),r(f,{to:e.toEl},[e.options?(i(),s("div",L,[(i(!0),s(c,null,v(e.options,(n=>(i(),s("div",{key:n.label,class:"cascader-list-item"},[d("div",{class:m(["cascader-label",{selected:p(k).indexOf(n.value)>=0}]),onClick:e=>(e=>{e.children&&(C.value=e.children[0].value),!e.children&&l&&(l.value=!1),e.parent&&a&&a(e.parent)})(n)},[d("span",X,b(n.label),1),n.children?(i(),r(p(h),{key:0,name:"back",width:"1em",height:"1em",class:"item-label-icon"})):g("",!0)],10,M),(i(),r(f,{to:e.toEl},[n.children&&C.value===n.children[0].value?(i(),s("div",{key:0,class:m(["cascader-loop",{open:C.value===n.children[0].value}])},[_(o,{options:n.children,"to-el":e.toEl},null,8,["options","to-el"])],2)):g("",!0)],8,["to"]))])))),128))],512)):g("",!0)],8,["to"])}}}),A={class:"ui-cascader-wrap"},Z=["title"],R={class:"cascader-pop-content"},H=a({__name:"Cascader",props:{value:{default:""},options:{default:()=>[]},placeholder:{default:""}},emits:["update:value","change"],setup(e,{emit:l}){var a;const n=e,t=u(!1),r=u(!1),{value:c,options:v}=C(n),b=()=>{t.value=!0},h=()=>{const e=setTimeout((()=>{r.value||(t.value=!1,window.clearTimeout(e))}),100)},g=()=>{r.value=!0,t.value=!0},m=()=>{r.value=!1,t.value=!1},f=e=>{for(let l=0;l<e.length;l++)if(e[l].show=!1,e[l].parent||(e[l].parent=e[l].value),e[l].children){for(let a=0;a<e[l].children.length;a++)e[l].children[a].show=!1,e[l].parent?e[l].children[a].parent=`${e[l].parent}/${e[l].children[a].value}`:e[l].children[a].parent=`${e[l].value}/${e[l].children[a].value}`;f(e[l].children)}return e},S=o((()=>f(v.value))),I=u(),N=u();N.value=document.createElement("div"),null==(a=N.value)||a.classList.add("ui-cascader-pop-item"),x((()=>{var e;null==(e=I.value)||e.appendChild(N.value)})),D("popVisibility",t),D("changeValue",(e=>{l("update:value",e),l("change",e)})),D("initValue",c);const B=()=>{l("update:value",""),l("change","")};return(l,a)=>(i(),s("div",A,[d("div",{title:p(c)},[_(p(T),{class:"ui-cascader-input",type:"text",placeholder:e.placeholder,onFocus:b,onBlur:h,value:p(c),autofocus:!1,readonly:""},{suffix:k((()=>[_(p(y),{name:"error_radius",size:"1em",color:"#d9d9d9",onClick:w(B,["stop","prevent"])},null,8,["onClick"])])),_:1},8,["placeholder","value"])],8,Z),d("div",{class:"ui-cascader-pop-wrap",onFocus:g,onBlur:m,tabindex:"-1"},[_(P,{name:"cascader"},{default:k((()=>[j(d("div",{class:"ui-cascader-pop-list",ref_key:"cascaderWrap",ref:I},null,512),[[z,t.value]])])),_:1})],32),d("div",R,[_(F,{options:p(S),toEl:N.value},null,8,["options","toEl"])])]))}}),U=d("p",null,"级联选择框。",-1),$=d("ul",null,[d("li",null,"Cascader")],-1),W=d("ul",null,[d("li",null,"需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。"),d("li",null,"从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。"),d("li",null,"比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。")],-1),J=a({__name:"Intro",setup:e=>(e,l)=>(i(),r(p(B),null,{default:k((()=>[_(p(I),{level:4},{default:k((()=>[S("简介")])),_:1}),_(p(N),null,{default:k((()=>[U])),_:1}),_(p(I),{level:4},{default:k((()=>[S("组件概述")])),_:1}),_(p(N),null,{default:k((()=>[$])),_:1}),_(p(I),{level:4},{default:k((()=>[S("使用场景")])),_:1}),_(p(N),null,{default:k((()=>[W])),_:1})])),_:1}))}),q=a({__name:"Api",setup(e){const l=[{rowIndex:1,"事件名称":"change","说明":"选中内容改变时的回调","回调参数":"(value:string) => void"}],a=[{componentName:"Cascader",attrContent:[{rowIndex:1,"属性":"value","说明":"指定选中项","类型":"string","默认值":""},{rowIndex:2,"属性":"options","说明":"数据源","类型":"CascaderOptions[]","默认值":"[]"},{rowIndex:3,"属性":"placeholder","说明":"输入框占位文本","类型":"string","默认值":""}]}];return(e,n)=>(i(),r(O,{"attr-content-arr":a,"event-content":l}))}}),G={class:"wrap"},K=a({__name:"DemoOne",setup(e){const l=u(""),a=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]},{value:"suzhou",label:"SuZhou",children:[{value:"xishan",label:"XiShan",children:[{value:"xxx",label:"XXX"}]}]}]}];return(e,n)=>(i(),s("div",G,[_(p(H),{value:l.value,"onUpdate:value":n[0]||(n[0]=e=>l.value=e),options:a,placeholder:"Please select"},null,8,["value"])]))}}),Q=e=>{e.__sourceCode="<template>\n  <div class=\"wrap\">\n    <Cascader v-model:value=\"value\" :options=\"options\" placeholder=\"Please select\" />\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\n\nimport { Cascader, CascaderOptions } from 'hut-ui'\n\nconst value = ref<string>('')\n\nconst options: CascaderOptions[] = [\n  {\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [\n      {\n        value: 'hangzhou',\n        label: 'Hangzhou',\n        children: [\n          {\n            value: 'xihu',\n            label: 'West Lake'\n          }\n        ]\n      }\n    ]\n  },\n  {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [\n      {\n        value: 'nanjing',\n        label: 'Nanjing',\n        children: [\n          {\n            value: 'zhonghuamen',\n            label: 'Zhong Hua Men'\n          }\n        ]\n      },\n      {\n        value: 'suzhou',\n        label: 'SuZhou',\n        children: [\n          {\n            value: 'xishan',\n            label: 'XiShan',\n            children: [{ value: 'xxx', label: 'XXX' }]\n          }\n        ]\n      }\n    ]\n  }\n]\n<\/script>\n\n<style lang=\"scss\">\n.wrap {\n}\n</style>",e.__sourceTitle="基本用法"};Q(K);const Y={class:"wrap"},ee=a({__name:"DemoTwo",setup(e){const l=u(""),a=e=>{console.log(e)},n=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}];return(e,u)=>(i(),s("div",Y,[_(p(H),{value:l.value,"onUpdate:value":u[0]||(u[0]=e=>l.value=e),options:n,placeholder:"Please select",onChange:a},null,8,["value"])]))}}),le=e=>{e.__sourceCode="<template>\n  <div class=\"wrap\">\n    <Cascader\n      v-model:value=\"value\"\n      :options=\"options\"\n      placeholder=\"Please select\"\n      @change=\"onChange\"\n    />\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue'\n\nimport { Cascader, CascaderOptions } from 'hut-ui'\n\nconst value = ref<string>('')\n\nconst onChange = (newValue: string) => {\n  console.log(newValue)\n}\nconst options: CascaderOptions[] = [\n  {\n    value: 'zhinan',\n    label: '指南',\n    children: [\n      {\n        value: 'shejiyuanze',\n        label: '设计原则',\n        children: [\n          {\n            value: 'yizhi',\n            label: '一致'\n          },\n          {\n            value: 'fankui',\n            label: '反馈'\n          },\n          {\n            value: 'xiaolv',\n            label: '效率'\n          },\n          {\n            value: 'kekong',\n            label: '可控'\n          }\n        ]\n      },\n      {\n        value: 'daohang',\n        label: '导航',\n        children: [\n          {\n            value: 'cexiangdaohang',\n            label: '侧向导航'\n          },\n          {\n            value: 'dingbudaohang',\n            label: '顶部导航'\n          }\n        ]\n      }\n    ]\n  },\n  {\n    value: 'zujian',\n    label: '组件',\n    children: [\n      {\n        value: 'basic',\n        label: 'Basic',\n        children: [\n          {\n            value: 'layout',\n            label: 'Layout 布局'\n          },\n          {\n            value: 'color',\n            label: 'Color 色彩'\n          },\n          {\n            value: 'typography',\n            label: 'Typography 字体'\n          },\n          {\n            value: 'icon',\n            label: 'Icon 图标'\n          },\n          {\n            value: 'button',\n            label: 'Button 按钮'\n          }\n        ]\n      },\n      {\n        value: 'form',\n        label: 'Form',\n        children: [\n          {\n            value: 'radio',\n            label: 'Radio 单选框'\n          },\n          {\n            value: 'checkbox',\n            label: 'Checkbox 多选框'\n          },\n          {\n            value: 'input',\n            label: 'Input 输入框'\n          },\n          {\n            value: 'input-number',\n            label: 'InputNumber 计数器'\n          },\n          {\n            value: 'select',\n            label: 'Select 选择器'\n          },\n          {\n            value: 'cascader',\n            label: 'Cascader 级联选择器'\n          },\n          {\n            value: 'switch',\n            label: 'Switch 开关'\n          },\n          {\n            value: 'slider',\n            label: 'Slider 滑块'\n          },\n          {\n            value: 'time-picker',\n            label: 'TimePicker 时间选择器'\n          },\n          {\n            value: 'date-picker',\n            label: 'DatePicker 日期选择器'\n          },\n          {\n            value: 'datetime-picker',\n            label: 'DateTimePicker 日期时间选择器'\n          },\n          {\n            value: 'upload',\n            label: 'Upload 上传'\n          },\n          {\n            value: 'rate',\n            label: 'Rate 评分'\n          },\n          {\n            value: 'form',\n            label: 'Form 表单'\n          }\n        ]\n      },\n      {\n        value: 'data',\n        label: 'Data',\n        children: [\n          {\n            value: 'table',\n            label: 'Table 表格'\n          },\n          {\n            value: 'tag',\n            label: 'Tag 标签'\n          },\n          {\n            value: 'progress',\n            label: 'Progress 进度条'\n          },\n          {\n            value: 'tree',\n            label: 'Tree 树形控件'\n          },\n          {\n            value: 'pagination',\n            label: 'Pagination 分页'\n          },\n          {\n            value: 'badge',\n            label: 'Badge 标记'\n          }\n        ]\n      },\n      {\n        value: 'notice',\n        label: 'Notice',\n        children: [\n          {\n            value: 'alert',\n            label: 'Alert 警告'\n          },\n          {\n            value: 'loading',\n            label: 'Loading 加载'\n          },\n          {\n            value: 'message',\n            label: 'Message 消息提示'\n          },\n          {\n            value: 'message-box',\n            label: 'MessageBox 弹框'\n          },\n          {\n            value: 'notification',\n            label: 'Notification 通知'\n          }\n        ]\n      },\n      {\n        value: 'navigation',\n        label: 'Navigation',\n        children: [\n          {\n            value: 'menu',\n            label: 'NavMenu 导航菜单'\n          },\n          {\n            value: 'tabs',\n            label: 'Tabs 标签页'\n          },\n          {\n            value: 'breadcrumb',\n            label: 'Breadcrumb 面包屑'\n          },\n          {\n            value: 'dropdown',\n            label: 'Dropdown 下拉菜单'\n          },\n          {\n            value: 'steps',\n            label: 'Steps 步骤条'\n          }\n        ]\n      },\n      {\n        value: 'others',\n        label: 'Others',\n        children: [\n          {\n            value: 'dialog',\n            label: 'Dialog 对话框'\n          },\n          {\n            value: 'tooltip',\n            label: 'Tooltip 文字提示'\n          },\n          {\n            value: 'popover',\n            label: 'Popover 弹出框'\n          },\n          {\n            value: 'card',\n            label: 'Card 卡片'\n          },\n          {\n            value: 'carousel',\n            label: 'Carousel 走马灯'\n          },\n          {\n            value: 'collapse',\n            label: 'Collapse 折叠面板'\n          }\n        ]\n      }\n    ]\n  },\n  {\n    value: 'ziyuan',\n    label: '资源',\n    children: [\n      {\n        value: 'axure',\n        label: 'Axure Components'\n      },\n      {\n        value: 'sketch',\n        label: 'Sketch Templates'\n      },\n      {\n        value: 'jiaohu',\n        label: '组件交互文档'\n      }\n    ]\n  }\n]\n<\/script>\n\n<style lang=\"scss\">\n.wrap {\n}\n</style>",e.__sourceTitle="更复杂的数据"};le(ee);const ae=a({__name:"Demo",setup(l){const a=o((()=>[K,ee].map(((e,l)=>V(e,"cascader",l)))));return(l,n)=>(i(),r(e,{"demo-arr":p(a)},null,8,["demo-arr"]))}}),ne=a({__name:"Index",setup(e){u(null);const a=["基本用法","更复杂的数据"],n=o((()=>E("cascader",a)));return(e,a)=>(i(),r(l,{"nav-arr":p(n),title:"Cascader 级联选择","component-name":"cascader"},{intro:k((()=>[_(J)])),demo:k((()=>[_(ae)])),api:k((()=>[_(q)])),_:1},8,["nav-arr"]))}});export{ne as default};