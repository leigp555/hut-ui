import{_ as e,P as t,T as n,g as u,D as l,C as a,a as i}from"./DemoDisplay-d14d3ff9.js";import"./Paragraph.vue_vue_type_style_index_0_lang-1a82c502.js";import{d as m,u as o,s as p,o as s,c as d,b as y,t as M,n as c,l as I,y as r,F as k,f as V,g,m as f,w as _,e as h,h as O,r as b,M as v,A as w,z as S}from"./index-54c84176.js";/* empty css                                                */import{_ as K}from"./ApiIntro-50aaf7d6.js";import{a as N,_ as G,b as T}from"./SubMenu-21f11660.js";const x={class:"ui-menuGroup-content"},C=["data-setKey"],D=m({__name:"MenuItemGroup",props:{title:null,paddingLeft:null,keyValue:null,totalTitle:null},setup(e){const t=o().default(),n=p("ui_menu_selectedArr"),u=p("ui_menu_mode"),l=e=>!!(null==n?void 0:n.value)&&(null==n?void 0:n.value.indexOf(e.props.keyValue))>=0;return(a,i)=>(s(),d("div",{class:c(["ui-menuGroup-wrap",{"ui-menuGroup-wrap-column":"column"===I(u)}])},[y("div",{class:c(["ui-menuGroup-title",{"ui-menuGroup-title-selected":I(n).indexOf(e.keyValue)>=0}]),style:r({paddingLeft:"column"===I(u)?e.paddingLeft-16+"px":"8px 16px"})},M(e.title),7),y("ul",x,[(s(!0),d(k,null,V(I(t),(t=>(s(),d("li",{key:t,class:c(["ui-menuGroup-item",{"ui-menuGroup-item-selected":l(t)}]),"data-setKey":t.props.keyValue},[(s(),g(f(t),{isNested:!0,paddingLeft:e.paddingLeft,totalTitle:[...e.totalTitle,e.keyValue]},null,8,["paddingLeft","totalTitle"]))],10,C)))),128))])],2))}}),E=y("p",null,"为页面和功能提供导航的菜单列表。",-1),j=y("ul",null,[y("li",null,"Menu"),y("li",null,"MenuItem"),y("li",null,"MenuItemGroup"),y("li",null,"SubMenu")],-1),L=y("ul",null,[y("li",null,"使用导航菜单可以快速在网站的页面间跳转。"),y("li",null,"导航同级之间在逻辑上需为并列且互斥的关系。")],-1),z=m({__name:"Intro",setup:u=>(u,l)=>(s(),g(I(n),null,{default:_((()=>[h(I(e),null,{default:_((()=>[O("简介")])),_:1}),h(I(t),null,{default:_((()=>[E])),_:1}),h(I(e),null,{default:_((()=>[O("组件概览")])),_:1}),h(I(t),null,{default:_((()=>[j])),_:1}),h(I(e),null,{default:_((()=>[O("使用场景")])),_:1}),h(I(t),null,{default:_((()=>[L])),_:1})])),_:1}))}),A=m({__name:"Api",setup(e){const t=[{rowIndex:1,"事件名称":"update:selectedKeys","说明":"点击标题时的回调","回调参数":"(string[]) => void"}],n=[{componentName:"Menu",attrContent:[{rowIndex:1,"属性":"selectedKeys","说明":"选中的标题","类型":"string[]","默认值":"[]"},{rowIndex:2,"属性":"mode","说明":"排布方式（水平|垂直）","类型":"'horizontal' | 'column'","默认值":"horizontal"}]},{componentName:"MenuItem",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"disabled","说明":"禁用","类型":"boolean","默认值":"false"}]},{componentName:"MenuItemGroup",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"title","说明":"标题","类型":"string","默认值":"null"}]},{componentName:"SubMenu",attrContent:[{rowIndex:1,"属性":"keyValue","说明":"应提供唯一值","类型":"string","默认值":"null"},{rowIndex:2,"属性":"collapsible","说明":"是否可折叠","类型":"boolean","默认值":"true"}]}];return(e,u)=>(s(),g(K,{"attr-content-arr":n,"event-content":t}))}});var U=e=>{e.__sourceCode='<template>\n  <Menu v-model:selectedKeys="selectedKeys" mode="horizontal">\n    <MenuItem keyValue="mail">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      Navigation One\n    </MenuItem>\n    <MenuItem keyValue="app" :disabled="true">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      Navigation Two\n    </MenuItem>\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three - Submenu</template>\n      <MenuItemGroup title="Item 1" keyValue="Item 1">\n        <MenuItem keyValue="setting:1">Option 1</MenuItem>\n        <MenuItem keyValue="setting:2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup title="Item 2" keyValue="Item 2">\n        <MenuItem keyValue="setting:3">Option 3</MenuItem>\n        <MenuItem keyValue="setting:4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref, watchEffect } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'mail\'])\n\nwatchEffect(() => {\n  console.log(selectedKeys.value)\n})\n<\/script>',e.__sourceTitle="横向菜单栏"};const F=m({__name:"DemoOne",setup(e){const t=b(["mail"]);return v((()=>{console.log(t.value)})),(e,n)=>(s(),g(I(T),{selectedKeys:t.value,"onUpdate:selectedKeys":n[0]||(n[0]=e=>t.value=e),mode:"horizontal"},{default:_((()=>[h(I(N),{keyValue:"mail"},{icon:_((()=>[h(I(w),{name:"email",width:"1em",height:"1em"})])),default:_((()=>[O(" Navigation One ")])),_:1}),h(I(N),{keyValue:"app",disabled:!0},{icon:_((()=>[h(I(w),{name:"apps",width:"1em",height:"1em"})])),default:_((()=>[O(" Navigation Two ")])),_:1}),h(I(G),{keyValue:"sub1"},{icon:_((()=>[h(I(w),{name:"setting",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation Three - Submenu")])),default:_((()=>[h(I(D),{title:"Item 1",keyValue:"Item 1"},{default:_((()=>[h(I(N),{keyValue:"setting:1"},{default:_((()=>[O("Option 1")])),_:1}),h(I(N),{keyValue:"setting:2"},{default:_((()=>[O("Option 2")])),_:1})])),_:1}),h(I(D),{title:"Item 2",keyValue:"Item 2"},{default:_((()=>[h(I(N),{keyValue:"setting:3"},{default:_((()=>[O("Option 3")])),_:1}),h(I(N),{keyValue:"setting:4"},{default:_((()=>[O("Option 4")])),_:1})])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});U(F);var P=e=>{e.__sourceCode='<template>\n  <Menu v-model:selectedKeys="selectedKeys" style="width: 256px" mode="column">\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n    <SubMenu keyValue="sub2">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub4">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three</template>\n      <MenuItem keyValue="9">Option 9</MenuItem>\n      <MenuItem keyValue="10">Option 10</MenuItem>\n      <MenuItem keyValue="11">Option 11</MenuItem>\n      <MenuItem keyValue="12">Option 12</MenuItem>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref, watchEffect } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nwatchEffect(() => {\n  console.log(selectedKeys.value)\n})\n<\/script>',e.__sourceTitle="垂直菜单栏"};const q=m({__name:"DemoTwo",setup(e){const t=b(["sub1","g1","1"]);return v((()=>{console.log(t.value)})),(e,n)=>(s(),g(I(T),{selectedKeys:t.value,"onUpdate:selectedKeys":n[0]||(n[0]=e=>t.value=e),style:{width:"256px"},mode:"column"},{default:_((()=>[h(I(G),{keyValue:"sub1"},{icon:_((()=>[h(I(w),{name:"email",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation One")])),default:_((()=>[h(I(D),{keyValue:"g1",title:"Item 1"},{default:_((()=>[h(I(N),{keyValue:"1"},{default:_((()=>[O("Option 1")])),_:1}),h(I(N),{keyValue:"2"},{default:_((()=>[O("Option 2")])),_:1})])),_:1}),h(I(D),{keyValue:"g2",title:"Item 2"},{default:_((()=>[h(I(N),{keyValue:"3"},{default:_((()=>[O("Option 3")])),_:1}),h(I(N),{keyValue:"4"},{default:_((()=>[O("Option 4")])),_:1})])),_:1})])),_:1}),h(I(G),{keyValue:"sub2"},{icon:_((()=>[h(I(w),{name:"apps",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation Two")])),default:_((()=>[h(I(N),{keyValue:"5"},{default:_((()=>[O("Option 5")])),_:1}),h(I(N),{keyValue:"6"},{default:_((()=>[O("Option 6")])),_:1}),h(I(G),{keyValue:"sub3"},{title:_((()=>[O("Submenu")])),default:_((()=>[h(I(N),{keyValue:"7"},{default:_((()=>[O("Option 7")])),_:1}),h(I(N),{keyValue:"8"},{default:_((()=>[O("Option 8")])),_:1})])),_:1})])),_:1}),h(I(G),{keyValue:"sub4"},{icon:_((()=>[h(I(w),{name:"setting",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation Three")])),default:_((()=>[h(I(N),{keyValue:"9"},{default:_((()=>[O("Option 9")])),_:1}),h(I(N),{keyValue:"10"},{default:_((()=>[O("Option 10")])),_:1}),h(I(N),{keyValue:"11"},{default:_((()=>[O("Option 11")])),_:1}),h(I(N),{keyValue:"12"},{default:_((()=>[O("Option 12")])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});P(q);var B=e=>{e.__sourceCode='<template>\n  <Menu v-model:selectedKeys="selectedKeys" style="width: 256px" mode="column">\n    <SubMenu keyValue="sub1" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n    </SubMenu>\n    <SubMenu keyValue="sub2" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3" :collapsible="false">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub4" :collapsible="false">\n      <template #icon>\n        <SvgIcon name="setting" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Three</template>\n      <MenuItem keyValue="9">Option 9</MenuItem>\n      <MenuItem keyValue="10">Option 10</MenuItem>\n      <MenuItem keyValue="11">Option 11</MenuItem>\n      <MenuItem keyValue="12">Option 12</MenuItem>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref, watchEffect } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nwatchEffect(() => {\n  console.log(selectedKeys.value)\n})\n<\/script>',e.__sourceTitle="菜单栏不折叠"};const H=m({__name:"DemoThree",setup(e){const t=b(["sub1","g1","1"]);return v((()=>{console.log(t.value)})),(e,n)=>(s(),g(I(T),{selectedKeys:t.value,"onUpdate:selectedKeys":n[0]||(n[0]=e=>t.value=e),style:{width:"256px"},mode:"column"},{default:_((()=>[h(I(G),{keyValue:"sub1",collapsible:!1},{icon:_((()=>[h(I(w),{name:"email",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation One")])),default:_((()=>[h(I(D),{keyValue:"g1",title:"Item 1"},{default:_((()=>[h(I(N),{keyValue:"1"},{default:_((()=>[O("Option 1")])),_:1}),h(I(N),{keyValue:"2"},{default:_((()=>[O("Option 2")])),_:1})])),_:1}),h(I(D),{keyValue:"g2",title:"Item 2"},{default:_((()=>[h(I(N),{keyValue:"3"},{default:_((()=>[O("Option 3")])),_:1}),h(I(N),{keyValue:"4"},{default:_((()=>[O("Option 4")])),_:1})])),_:1})])),_:1}),h(I(G),{keyValue:"sub2",collapsible:!1},{icon:_((()=>[h(I(w),{name:"apps",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation Two")])),default:_((()=>[h(I(N),{keyValue:"5"},{default:_((()=>[O("Option 5")])),_:1}),h(I(N),{keyValue:"6"},{default:_((()=>[O("Option 6")])),_:1}),h(I(G),{keyValue:"sub3",collapsible:!1},{title:_((()=>[O("Submenu")])),default:_((()=>[h(I(N),{keyValue:"7"},{default:_((()=>[O("Option 7")])),_:1}),h(I(N),{keyValue:"8"},{default:_((()=>[O("Option 8")])),_:1})])),_:1})])),_:1}),h(I(G),{keyValue:"sub4",collapsible:!1},{icon:_((()=>[h(I(w),{name:"setting",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation Three")])),default:_((()=>[h(I(N),{keyValue:"9"},{default:_((()=>[O("Option 9")])),_:1}),h(I(N),{keyValue:"10"},{default:_((()=>[O("Option 10")])),_:1}),h(I(N),{keyValue:"11"},{default:_((()=>[O("Option 11")])),_:1}),h(I(N),{keyValue:"12"},{default:_((()=>[O("Option 12")])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});B(H);var J=e=>{e.__sourceCode='<template>\n  <Menu v-model:selectedKeys="selectedKeys" style="width: 256px" mode="column">\n    <SubMenu keyValue="sub1">\n      <template #icon>\n        <SvgIcon name="email" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation One</template>\n      <MenuItemGroup keyValue="g1" title="Item 1">\n        <MenuItem keyValue="1">Option 1</MenuItem>\n        <MenuItem keyValue="2">Option 2</MenuItem>\n      </MenuItemGroup>\n      <MenuItemGroup keyValue="g2" title="Item 2">\n        <MenuItem keyValue="3">Option 3</MenuItem>\n        <MenuItem keyValue="4">Option 4</MenuItem>\n      </MenuItemGroup>\n      <SubMenu keyValue="sub5">\n        <template #icon>\n          <SvgIcon name="setting" width="1em" height="1em" />\n        </template>\n        <template #title>Navigation Three</template>\n        <MenuItem keyValue="13">Option 13</MenuItem>\n        <MenuItem keyValue="14">Option 14</MenuItem>\n        <MenuItem keyValue="15">Option 15</MenuItem>\n        <MenuItem keyValue="16">Option 16</MenuItem>\n      </SubMenu>\n    </SubMenu>\n    <SubMenu keyValue="sub2">\n      <template #icon>\n        <SvgIcon name="apps" width="1em" height="1em" />\n      </template>\n      <template #title>Navigation Two</template>\n      <MenuItem keyValue="5">Option 5</MenuItem>\n      <MenuItem keyValue="6">Option 6</MenuItem>\n      <SubMenu keyValue="sub3">\n        <template #title>Submenu</template>\n        <MenuItem keyValue="7">Option 7</MenuItem>\n        <MenuItem keyValue="8">Option 8</MenuItem>\n        <SubMenu keyValue="sub4">\n          <template #icon>\n            <SvgIcon name="setting" width="1em" height="1em" />\n          </template>\n          <template #title>Navigation Three</template>\n          <MenuItem keyValue="9">Option 9</MenuItem>\n          <MenuItem keyValue="10">Option 10</MenuItem>\n          <MenuItem keyValue="11">Option 11</MenuItem>\n          <MenuItem keyValue="12">Option 12</MenuItem>\n        </SubMenu>\n      </SubMenu>\n    </SubMenu>\n  </Menu>\n</template>\n\n<script setup lang="ts">\nimport { ref, watchEffect } from \'vue\'\nimport { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from \'@/lib\'\n\nconst selectedKeys = ref<string[]>([\'sub1\', \'g1\', \'1\'])\n\nwatchEffect(() => {\n  console.log(selectedKeys.value)\n})\n<\/script>',e.__sourceTitle="树形菜单栏(嵌套)"};const Q=m({__name:"DemoFour",setup(e){const t=b(["sub1","g1","1"]);return v((()=>{console.log(t.value)})),(e,n)=>(s(),g(I(T),{selectedKeys:t.value,"onUpdate:selectedKeys":n[0]||(n[0]=e=>t.value=e),style:{width:"256px"},mode:"column"},{default:_((()=>[h(I(G),{keyValue:"sub1"},{icon:_((()=>[h(I(w),{name:"email",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation One")])),default:_((()=>[h(I(D),{keyValue:"g1",title:"Item 1"},{default:_((()=>[h(I(N),{keyValue:"1"},{default:_((()=>[O("Option 1")])),_:1}),h(I(N),{keyValue:"2"},{default:_((()=>[O("Option 2")])),_:1})])),_:1}),h(I(D),{keyValue:"g2",title:"Item 2"},{default:_((()=>[h(I(N),{keyValue:"3"},{default:_((()=>[O("Option 3")])),_:1}),h(I(N),{keyValue:"4"},{default:_((()=>[O("Option 4")])),_:1})])),_:1}),h(I(G),{keyValue:"sub5"},{icon:_((()=>[h(I(w),{name:"setting",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation Three")])),default:_((()=>[h(I(N),{keyValue:"13"},{default:_((()=>[O("Option 13")])),_:1}),h(I(N),{keyValue:"14"},{default:_((()=>[O("Option 14")])),_:1}),h(I(N),{keyValue:"15"},{default:_((()=>[O("Option 15")])),_:1}),h(I(N),{keyValue:"16"},{default:_((()=>[O("Option 16")])),_:1})])),_:1})])),_:1}),h(I(G),{keyValue:"sub2"},{icon:_((()=>[h(I(w),{name:"apps",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation Two")])),default:_((()=>[h(I(N),{keyValue:"5"},{default:_((()=>[O("Option 5")])),_:1}),h(I(N),{keyValue:"6"},{default:_((()=>[O("Option 6")])),_:1}),h(I(G),{keyValue:"sub3"},{title:_((()=>[O("Submenu")])),default:_((()=>[h(I(N),{keyValue:"7"},{default:_((()=>[O("Option 7")])),_:1}),h(I(N),{keyValue:"8"},{default:_((()=>[O("Option 8")])),_:1}),h(I(G),{keyValue:"sub4"},{icon:_((()=>[h(I(w),{name:"setting",width:"1em",height:"1em"})])),title:_((()=>[O("Navigation Three")])),default:_((()=>[h(I(N),{keyValue:"9"},{default:_((()=>[O("Option 9")])),_:1}),h(I(N),{keyValue:"10"},{default:_((()=>[O("Option 10")])),_:1}),h(I(N),{keyValue:"11"},{default:_((()=>[O("Option 11")])),_:1}),h(I(N),{keyValue:"12"},{default:_((()=>[O("Option 12")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["selectedKeys"]))}});J(Q);const R=m({__name:"Demo",setup(e){const t=S((()=>[F,q,H,Q].map(((e,t)=>u(e,"menu",t)))));return(e,n)=>(s(),g(l,{"demo-arr":I(t)},null,8,["demo-arr"]))}}),W=m({__name:"Index",setup(e){b(null);const t=["横向菜单栏","垂直菜单栏","菜单栏不折叠","树形菜单栏(嵌套)"],n=S((()=>i("menu",t)));return(e,t)=>(s(),g(a,{"nav-arr":I(n),title:"Menu 导航菜单","component-name":"menu"},{intro:_((()=>[h(z)])),demo:_((()=>[h(R)])),api:_((()=>[h(A)])),_:1},8,["nav-arr"]))}});export{W as default};
