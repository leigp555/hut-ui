import{_ as e,P as n,T as a,r as t,g as l,D as o,C as s,a as r}from"./DemoDisplay-496f0bad.js";import"./Upload.vue_vue_type_style_index_0_lang-5a132e89.js";import{d as u,o as d,g as i,w as p,e as c,l as m,h as g,b as f,r as v,N as b,c as x,A as y,t as w,F as h,f as _,D as I,_ as C,z as T}from"./index-c5a7ce44.js";/* empty css                                                */import{_ as k,c as S}from"./ApiIntro-0d8754bc.js";import{_ as z}from"./Pagination-714fb1dd.js";import{_ as D}from"./Popconfirm-644671b2.js";import{_ as N}from"./Tag-f8a1c11b.js";import{a as j}from"./ajax-0a4d157d.js";const P=f("p",null,"展示行列数据。",-1),O=f("ul",null,[f("li",null,"Table: 主要组件")],-1),V=f("ul",null,[f("li",null,"当有大量结构化的数据需要展现时；"),f("li",null,"当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。")],-1),A=u({__name:"Intro",setup:t=>(t,l)=>(d(),i(m(a),null,{default:p((()=>[c(m(e),null,{default:p((()=>[g("简介")])),_:1}),c(m(n),null,{default:p((()=>[P])),_:1}),c(m(e),null,{default:p((()=>[g("组件概览")])),_:1}),c(m(n),null,{default:p((()=>[O])),_:1}),c(m(e),null,{default:p((()=>[g("使用场景")])),_:1}),c(m(n),null,{default:p((()=>[V])),_:1})])),_:1}))}),H=u({__name:"Api",setup(e){const n=[],a=[{componentName:"Text",attrContent:[{rowIndex:1,"属性":"headSource","说明":"头部数据","类型":"TableDataType[]","默认值":"[]"},{rowIndex:2,"属性":"bodySource","说明":"代码标记","类型":"表身数据数组","默认值":"[]"},{rowIndex:3,"属性":"loading","说明":"是否为加载中状态","类型":"boolean","默认值":"false"},{rowIndex:4,"属性":"styleMode","说明":"表格样式","类型":"'auto' | 'fixed'","默认值":"auto"},{rowIndex:5,"属性":"bordered","说明":"是否有边框","类型":"boolean","默认值":"true"},{rowIndex:6,"属性":"customClass","说明":"自定义class","类型":"string","默认值":"custom-class-table"}]}];return(e,t)=>(d(),i(k,{"attr-content-arr":a,"event-content":n}))}});var B=e=>{e.__sourceCode='<template>\n  <Table\n    :headSource="columns"\n    :bodySource="data"\n    :loading="loading"\n    style-mode="auto"\n    bordered\n  >\n    <template #head>Header</template>\n    <template #footer>Footer</template>\n    <template #tableHead="item">\n      <span v-if="item.keyValue === \'name\'" style="color: red">\n        <SvgIcon name="weixin" width="1em " height="1em" style="margin-right: 4px" />\n        {{ item.dataValue }}\n      </span>\n      <span v-else>{{ item.dataValue }}</span>\n    </template>\n    <template #tableBody="item">\n      <div v-if="item.keyValue === \'tags\'" class="tags">\n        <Tag :color="randomColor()" v-for="i in item.dataValue" :key="i">\n          {{ i.toUpperCase() }}\n        </Tag>\n      </div>\n      <div v-else-if="item.keyValue === \'actions\'" class="actions">\n        <div>\n          <Popconfirm\n            placement="topCenter"\n            okText="Yes"\n            cancelText="No"\n            @confirm="confirm(item.data)"\n          >\n            <template #title>\n              <p>{{ text }}</p>\n            </template>\n            <Button type="link" style="padding: 4px 8px">delete</Button>\n          </Popconfirm>\n        </div>\n      </div>\n      <span v-else style="color: #1890ff">{{ item.dataValue }}</span>\n    </template>\n    <template #pagination>\n      <div style="display: flex; justify-content: center; margin-top: 50px">\n        <Pagination\n          v-model:current="current"\n          :total="dataNum"\n          v-model:pageSize="pageSize"\n          @pageSizeChange="pageSize = $event"\n          :disabled="loading"\n          :pageSizeOptions="pageSizeOptions"\n          showQuickJumper\n          showSizeChanger\n          showTotal\n          @change="pageChange"\n        >\n          <template #buildOptionText="props">\n            <span>{{ props.value }}条/页</span>\n          </template>\n        </Pagination>\n      </div>\n    </template>\n  </Table>\n</template>\n\n<script setup lang="ts">\nimport { onMounted, ref } from \'vue\'\nimport {\n  Table,\n  Pagination,\n  Popconfirm,\n  Tag,\n  SvgIcon,\n  Button,\n  TableDataType\n} from \'@/lib\'\n\nimport { ajax } from \'@/eg/ajax\'\nimport { randomColor } from \'@/eg/helper\'\n\nconst current = ref<number>(1)\nconst pageSize = ref<number>(5)\nconst pageSizeOptions = ref<string[]>([\'5\', \'10\', \'20\', \'30\', \'40\'])\nconst dataNum = ref<number>(0)\nconst loading = ref<boolean>(false)\n\nconst sharedOnCell = (rowIndex: number): { colspan: number } => {\n  if (rowIndex === 5) {\n    return { colspan: 0 }\n  }\n  return { colspan: 1 }\n}\nconst columns = ref<TableDataType[]>([\n  {\n    rowIndex: 0,\n    label: \'Name\',\n    key: \'name\',\n    customCell: (rowIndex) => ({\n      colspan: rowIndex === 5 ? 6 : 1\n    })\n  },\n  {\n    rowIndex: 0,\n    label: \'Age\',\n    key: \'age\',\n    customCell: sharedOnCell\n  },\n  {\n    rowIndex: 0,\n    label: \'Home phone\',\n    colspan: 2,\n    key: \'tel\',\n    // eslint-disable-next-line consistent-return\n    customCell: (rowIndex) => {\n      if (rowIndex === 2) {\n        return { rowspan: 2 }\n      }\n      if (rowIndex === 3) {\n        return { rowspan: 0 }\n      }\n      if (rowIndex === 5) {\n        return { colspan: 0 }\n      }\n      return { colspan: 1 }\n    }\n  },\n  {\n    rowIndex: 0,\n    label: \'Phone\',\n    colspan: 0,\n    key: \'phone\',\n    customCell: sharedOnCell\n  },\n  {\n    rowIndex: 0,\n    label: \'Address\',\n    key: \'address\',\n    customCell: sharedOnCell\n  },\n  {\n    rowIndex: 0,\n    label: \'tags\',\n    key: \'tags\',\n    customCell: sharedOnCell\n  },\n  {\n    rowIndex: 0,\n    label: \'Actions\',\n    key: \'actions\',\n    customCell: () => ({ colspan: 1 })\n  }\n])\n\nconst data = ref<TableDataType[]>([])\n\nconst fetch = {\n  get(url: string) {\n    if (url === \'/table\') {\n      loading.value = true\n      ;(\n        ajax(url, 0, current.value, pageSize.value) as Promise<{\n          data: TableDataType[]\n          totalDateNum: number\n        }>\n      )\n        .then((res) => {\n          data.value = [...res.data]\n          dataNum.value = res.totalDateNum\n          loading.value = false\n        })\n        .catch((err) => {\n          console.log(err)\n          loading.value = false\n        })\n    }\n  },\n  delete(url: string, payload: string) {\n    if (url === \'/table\') {\n      loading.value = true\n      ;(\n        ajax(url, 0, current.value, pageSize.value, payload, \'delete\') as Promise<{\n          data: TableDataType[]\n          totalDateNum: number\n        }>\n      )\n        .then((res) => {\n          data.value = [...res.data]\n          dataNum.value = res.totalDateNum\n          loading.value = false\n        })\n        .catch((err) => {\n          console.log(err)\n          loading.value = false\n        })\n    }\n  }\n}\nonMounted(() => {\n  fetch.get(\'/table\')\n})\nconst pageChange = (newPage: number) => {\n  current.value = newPage\n  fetch.get(\'/table\')\n}\n\nconst text = \'Sure to delete?\'\n\nconst confirm = (item: TableDataType) => {\n  // 删除操作前应把原先的表格合并操作先复原，不然后续的表格格式会错乱\n  if (item.rowIndex === 2) {\n    columns.value[2].customCell = (rowIndex) => {\n      if (rowIndex === 3) {\n        return { colspan: 1, rowspan: 1 }\n      }\n      if (rowIndex === 5) {\n        return { colspan: 0 }\n      }\n      return { colspan: 1 }\n    }\n  } else if (item.rowIndex === 3) {\n    columns.value[2].customCell = (rowIndex) => {\n      if (rowIndex === 2) {\n        return { rowspan: 1 }\n      }\n\n      if (rowIndex === 5) {\n        return { colspan: 0 }\n      }\n      return { colspan: 1 }\n    }\n  }\n  // 发送删除请求\n  fetch.delete(\'/table\', JSON.stringify(item))\n}\n<\/script>\n\n<style scoped lang="scss">\n.actions,\n.tags {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n</style>',e.__sourceTitle="基本用法"};const U={key:0,style:{color:"red"}},J={key:1},M={key:0,class:"tags"},F={key:1,class:"actions"},Q={key:2,style:{color:"#1890ff"}},Y={style:{display:"flex","justify-content":"center","margin-top":"50px"}},$=u({__name:"DemoOne",setup(e){const n=v(1),a=v(5),l=v(["5","10","20","30","40"]),o=v(0),s=v(!1),r=e=>5===e?{colspan:0}:{colspan:1},u=v([{rowIndex:0,label:"Name",key:"name",customCell:e=>({colspan:5===e?6:1})},{rowIndex:0,label:"Age",key:"age",customCell:r},{rowIndex:0,label:"Home phone",colspan:2,key:"tel",customCell:e=>2===e?{rowspan:2}:3===e?{rowspan:0}:5===e?{colspan:0}:{colspan:1}},{rowIndex:0,label:"Phone",colspan:0,key:"phone",customCell:r},{rowIndex:0,label:"Address",key:"address",customCell:r},{rowIndex:0,label:"tags",key:"tags",customCell:r},{rowIndex:0,label:"Actions",key:"actions",customCell:()=>({colspan:1})}]),C=v([]),T={get(e){"/table"===e&&(s.value=!0,j(e,0,n.value,a.value).then((e=>{C.value=[...e.data],o.value=e.totalDateNum,s.value=!1})).catch((e=>{console.log(e),s.value=!1})))},delete(e,t){"/table"===e&&(s.value=!0,j(e,0,n.value,a.value,t,"delete").then((e=>{C.value=[...e.data],o.value=e.totalDateNum,s.value=!1})).catch((e=>{console.log(e),s.value=!1})))}};b((()=>{T.get("/table")}));const k=e=>{n.value=e,T.get("/table")};return(e,r)=>(d(),i(m(S),{headSource:u.value,bodySource:C.value,loading:s.value,"style-mode":"auto",bordered:""},{head:p((()=>[g("Header")])),footer:p((()=>[g("Footer")])),tableHead:p((e=>["name"===e.keyValue?(d(),x("span",U,[c(m(y),{name:"weixin",width:"1em ",height:"1em",style:{"margin-right":"4px"}}),g(" "+w(e.dataValue),1)])):(d(),x("span",J,w(e.dataValue),1))])),tableBody:p((e=>["tags"===e.keyValue?(d(),x("div",M,[(d(!0),x(h,null,_(e.dataValue,(e=>(d(),i(m(N),{color:m(t)(),key:e},{default:p((()=>[g(w(e.toUpperCase()),1)])),_:2},1032,["color"])))),128))])):"actions"===e.keyValue?(d(),x("div",F,[f("div",null,[c(m(D),{placement:"topCenter",okText:"Yes",cancelText:"No",onConfirm:n=>(e=>{2===e.rowIndex?u.value[2].customCell=e=>3===e?{colspan:1,rowspan:1}:5===e?{colspan:0}:{colspan:1}:3===e.rowIndex&&(u.value[2].customCell=e=>2===e?{rowspan:1}:5===e?{colspan:0}:{colspan:1}),T.delete("/table",JSON.stringify(e))})(e.data)},{title:p((()=>[f("p",null,w("Sure to delete?"))])),default:p((()=>[c(m(I),{type:"link",style:{padding:"4px 8px"}},{default:p((()=>[g("delete")])),_:1})])),_:2},1032,["onConfirm"])])])):(d(),x("span",Q,w(e.dataValue),1))])),pagination:p((()=>[f("div",Y,[c(m(z),{current:n.value,"onUpdate:current":r[0]||(r[0]=e=>n.value=e),total:o.value,pageSize:a.value,"onUpdate:pageSize":r[1]||(r[1]=e=>a.value=e),onPageSizeChange:r[2]||(r[2]=e=>a.value=e),disabled:s.value,pageSizeOptions:l.value,showQuickJumper:"",showSizeChanger:"",showTotal:"",onChange:k},{buildOptionText:p((e=>[f("span",null,w(e.value)+"条/页",1)])),_:1},8,["current","total","pageSize","disabled","pageSizeOptions"])])])),_:1},8,["headSource","bodySource","loading"]))}});B($);var q=C($,[["__scopeId","data-v-74bb5f27"]]);const E=u({__name:"Demo",setup(e){const n=T((()=>[q].map(((e,n)=>l(e,"table",n)))));return(e,a)=>(d(),i(o,{"demo-arr":m(n)},null,8,["demo-arr"]))}}),G=u({__name:"Index",setup(e){v(null);const n=["基本用法"],a=T((()=>r("table",n)));return(e,n)=>(d(),i(s,{"nav-arr":m(a),title:"Table 表格","component-name":"table"},{intro:p((()=>[c(A)])),demo:p((()=>[c(E)])),api:p((()=>[c(H)])),_:1},8,["nav-arr"]))}});export{G as default};
