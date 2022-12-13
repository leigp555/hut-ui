import{d as e,c as a,e as l,A as t,B as s,y as o,E as n,F as i,f as d,n as u,i as r,s as p,r as c,o as y,P as k,z as f,q as b,S as v,t as h,I as g,j as m,g as w,v as $,x as _,k as V}from"./index-85b89606.js";import{_ as x}from"./Paragraph-361ff5f9.js";const S={key:0},B=e({__name:"SkeletonAvatar",props:{size:{default:32},active:{type:Boolean,default:!1},loading:{type:Boolean,default:!0}},setup:e=>(d,u)=>(a(),l(i,null,[e.loading?s("",!0):(a(),l("div",S,[t(d.$slots,"default")])),e.loading?(a(),l("div",{key:1,class:o(["ui-skeletonAvatar-wrap",{"ui-skeletonAvatar-active":e.active}]),style:n({width:`${e.size}px`,height:`${e.size}px`,lineHeight:`${e.size}px`})},null,6)):s("",!0)],64))}),z={key:0},A={key:1,class:"ui-skeleton-wrap"},C={key:0,class:"ui-skeleton-header"},I={class:"ui-skeleton-content"},T=e({__name:"Skeleton",props:{paragraph:{default:()=>({rows:3})},avatar:{type:Boolean,default:!1},active:{type:Boolean,default:!1},loading:{type:Boolean,default:!0},titleAppear:{type:Boolean,default:!0}},setup:e=>(n,p)=>e.loading?e.loading?(a(),l("div",A,[e.avatar?(a(),l("div",C,[d(B,{size:40,active:e.active},null,8,["active"])])):s("",!0),u("div",I,[e.titleAppear?(a(),l("h3",{key:0,class:o(["ui-skeleton-title",{"skeleton-title-active":e.active}])},null,2)):s("",!0),u("ol",null,[(a(!0),l(i,null,r(e.paragraph.rows,(t=>(a(),l("li",{key:t,class:o(["ui-skeleton-item",{"skeleton-item-active":e.active}])},null,2)))),128))])])])):s("",!0):(a(),l("div",z,[t(n.$slots,"default")]))}),H={class:"ui-spin-wrap"},j={class:"ui-spin-icon"},M={key:0},N={key:1},P={key:0,class:"ui-spin-tip"},q=e({inheritAttrs:!1,__name:"Spin",props:{size:{default:20},loading:{type:Boolean,default:!0},tip:null,delay:{default:0}},setup(e){const n=e,{loading:i,delay:r}=p(n),g=c(!0);return y((()=>{k((()=>{if(i.value){const e=setTimeout((()=>{g.value=!0,window.clearTimeout(e)}),r.value)}else{const e=setTimeout((()=>{g.value=!1,window.clearTimeout(e)}),r.value)}}))})),(n,i)=>(a(),l("div",H,[n.$slots.default?(a(),l("div",{key:0,class:o({"ui-spin-slot":g.value})},[t(n.$slots,"default")],2)):s("",!0),g.value?(a(),l("div",f({key:1,class:"ui-spin-icon-wrap"},n.$attrs),[u("div",j,[n.$slots.icon?s("",!0):(a(),l("span",M,[d(b(v),{name:"icon_radius_loading",size:`${e.size}px`,height:`${e.size}px`,width:`${e.size}px`,color:"#1890ff"},null,8,["size","height","width"])])),n.$slots.icon?(a(),l("span",N,[t(n.$slots,"icon")])):s("",!0)]),e.tip?(a(),l("span",P,h(e.tip),1)):s("",!0)],16)):s("",!0)]))}}),E={class:"ui-table-wrap"},F={key:0,class:"ui-table-head"},D={class:"ui-table-thead"},G=["title","colspan","rowspan"],J={class:"ui-table-tbody"},K=["title","colspan","rowspan"],L={class:"ui-list-skeleton"},O={key:1,class:"ui-table-footer"},Q={key:2,class:"ui-table-pagination"},R=e({inheritAttrs:!1,__name:"Table",props:{headSource:{default:()=>[]},bodySource:{default:()=>[]},loading:{type:Boolean,default:!1},styleMode:{default:"auto"},bordered:{type:Boolean,default:!1},customClass:{default:"custom-class-table"}},setup(e){const o=e,{bodySource:n}=p(o),c=g((()=>!n.value[0])),y=(e,a)=>e?e(a):{};return(o,p)=>(a(),m(q,{loading:e.loading&&!b(c),style:{top:"40%"}},{default:w((()=>[u("div",E,[o.$slots.head?(a(),l("div",F,[t(o.$slots,"head")])):s("",!0),u("table",f(o.$attrs,{class:["ui-table-content",{"ui-table-fixed":"fixed"===e.styleMode,"ui-table-bordered":e.bordered,[e.customClass]:!0}]}),[u("thead",D,[u("tr",null,[(a(!0),l(i,null,r(e.headSource,(e=>(a(),l("th",{key:e.key,title:e.label,class:"ui-table-thead-cell",colspan:e.colspan,rowspan:e.rowspan},[t(o.$slots,"tableHead",{data:e,dataValue:e.label,keyValue:e.key})],8,G)))),128))])]),u("tbody",J,[(a(!0),l(i,null,r(b(n),(s=>(a(),l("tr",{key:s.rowIndex},[(a(!0),l(i,null,r(e.headSource,(e=>(a(),l("td",{key:e,title:s[e.key],class:"ui-table-tbody-cell",colspan:y(e.customCell,s.rowIndex).colspan,rowspan:y(e.customCell,s.rowIndex).rowspan},[t(o.$slots,"tableBody",{dataValue:s[e.key],keyValue:e.key,data:s})],8,K)))),128))])))),128))])],16),$(u("div",L,[d(T,{active:"",paragraph:{rows:8},loading:e.loading,"title-appear":!1},null,8,["loading"])],512),[[_,b(c)]]),o.$slots.footer?(a(),l("div",O,[t(o.$slots,"footer")])):s("",!0),o.$slots.pagination?(a(),l("div",Q,[t(o.$slots,"pagination")])):s("",!0)])])),_:3},8,["loading"]))}});const U={class:"api-intro-wrap"},W={key:0,style:{color:"#c41d7f"}},X={key:1,style:{color:"#595959","font-weight":"600","white-space":"nowrap"}},Y={key:2,style:{padding:"0.2em 0.4em","background-color":"#f2f4f5","border-radius":"3px",border:"1px solid #f0f0f0"}},Z={key:3},ee={key:0},ae={key:0,style:{color:"#c41d7f"}},le={key:1,style:{color:"#595959","font-weight":"600","white-space":"nowrap"}},te={key:2},se=e({__name:"ApiIntro",props:{attrContentArr:{default:()=>[]},eventContent:{default:()=>[]}},setup(e){const t=[{label:"属性",key:"属性"},{label:"说明",key:"说明"},{label:"类型",key:"类型"},{label:"默认值",key:"默认值"}],o=[{label:"事件名称",key:"事件名称"},{label:"说明",key:"说明"},{label:"回调参数",key:"回调参数"}];return(n,p)=>(a(),l("div",U,[(a(!0),l(i,null,r(e.attrContentArr,(e=>(a(),l("section",{key:e.componentName},[d(b(x),{level:5},{default:w((()=>[V(h(e.componentName),1)])),_:2},1024),d(b(R),{headSource:t,bodySource:e.attrContent,"style-mode":"auto","custom-class":"table-display"},{tableHead:w((e=>[u("span",null,h(e.dataValue),1)])),tableBody:w((e=>["类型"===e.keyValue?(a(),l("span",W,h(e.dataValue),1)):"属性"===e.keyValue?(a(),l("span",X,h(e.dataValue),1)):"默认值"===e.keyValue?(a(),l("span",Y,h(e.dataValue),1)):(a(),l("span",Z,h(e.dataValue),1))])),_:2},1032,["bodySource"])])))),128)),e.eventContent[0]?(a(),l("section",ee,[d(b(x),{level:5},{default:w((()=>[V("事件")])),_:1}),d(b(R),{headSource:o,bodySource:e.eventContent,"style-mode":"auto","custom-class":"table-display"},{tableHead:w((e=>[u("span",null,h(e.dataValue),1)])),tableBody:w((e=>["回调参数"===e.keyValue?(a(),l("span",ae,h(e.dataValue),1)):"事件名称"===e.keyValue?(a(),l("span",le,h(e.dataValue),1)):(a(),l("span",te,h(e.dataValue),1))])),_:1},8,["bodySource"])])):s("",!0)]))}});export{se as _,T as a,q as b,R as c,B as d};
