import{d as e,r as a,c as t,e as s,f as i,g as l,A as n,l as o,H as c,z as u,i as r,j as d,t as p,B as f,T as m}from"./index-4bdb761c.js";import{_ as v,a as _}from"./Upload.vue_vue_type_style_index_0_lang-dcc18adf.js";const x={class:"ui-popconfirm-wrap"},k={class:"ui-popconfirm-content"},y={class:"ui-popconfirm-icon"},T={class:"ui-popconfirm-title"},$={class:"ui-popconfirm-actions"},b={style:{"pointer-events":"none"}},g=e({inheritAttrs:!1,__name:"Popconfirm",props:{placement:{default:"topCenter"},okText:{default:"confirm"},cancelText:{default:"cancel"}},emits:["confirm","cancel"],setup(e,{emit:g}){const h=a(!1),w=a(!1),C=()=>{h.value=!0},j=()=>{w.value||(h.value=!1)},B=()=>{w.value=!0},A=()=>{w.value=!1,h.value=!1},z=()=>{h.value=!1,w.value=!1,g("confirm")},H=()=>{h.value=!1,w.value=!1,g("cancel")};return(a,g)=>(t(),s("div",x,[i(m,{name:"fade"},{default:l((()=>[n(o("div",c({class:["ui-popconfirm-tip",{[e.placement]:!0}]},a.$attrs,{tabindex:"-1",onMousedown:B,onBlur:A}),[o("div",k,[o("div",y,[a.$slots.icon?u(a.$slots,"icon",{key:0}):(t(),r(v,{key:1,name:"warning",width:"1em",height:"1em",fill:"#faad14"}))]),o("div",T,[u(a.$slots,"title")])]),o("div",$,[i(_,{onClick:z},{default:l((()=>[d(p(e.okText),1)])),_:1}),i(_,{type:"default",onClick:H},{default:l((()=>[d(p(e.cancelText),1)])),_:1})])],16),[[f,h.value]])])),_:3}),o("div",{tabindex:"-1",onClick:C,onBlur:j,style:{cursor:"pointer"}},[o("div",b,[u(a.$slots,"default")])],32)]))}});export{g as _};