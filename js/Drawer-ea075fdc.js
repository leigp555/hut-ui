import{d as a,s,r as e,o as t,w as l,c as o,j as i,v as r,x as d,n,f as u,g as m,y as c,q as v,T as p,z as b,e as f,A as w,B as y,C as k}from"./index-85b89606.js";import{b as C}from"./bodyAddClass-9e6d0346.js";const $={class:"ui-drawer-wrap"},_={key:0,class:"ui-drawer-title"},j={key:1,class:"ui-drawer-content"},x=a({inheritAttrs:!1,__name:"Drawer",props:{visible:{type:Boolean,default:!1},placement:{default:"left"},classname:{default:"ui-custom"},maskClosable:{type:Boolean,default:!0}},emits:["update:visible","afterClose"],setup(a,{emit:x}){const A=a,{visible:B,maskClosable:T}=s(A),g=()=>{T.value&&(x("update:visible",!1),x("afterClose",!1))},h=e(!1);return t((()=>{l(B,(()=>{B.value?(C(B.value),h.value=!0):setTimeout((()=>{C(B.value),h.value=!1}),300)}))})),(s,e)=>(o(),i(k,{to:"body"},[r(n("div",$,[u(p,{name:"mask"},{default:m((()=>[r(n("div",{class:c(["ui-drawer-mask",{"mask-open":v(B)}]),onClick:g},null,2),[[d,v(B)]])])),_:1}),u(p,{name:`content-${a.placement}`},{default:m((()=>[r(n("div",b({class:"ui-drawer-body"},s.$attrs,{class:{[`drawer-body-${a.placement}`]:!0,[a.classname]:!0}}),[s.$slots.title?(o(),f("div",_,[w(s.$slots,"title")])):y("",!0),s.$slots.content?(o(),f("div",j,[w(s.$slots,"content")])):y("",!0)],16),[[d,v(B)]])])),_:3},8,["name"])],512),[[d,h.value]])]))}});export{x as _};
