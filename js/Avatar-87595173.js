import{d as a,r as s,o as e,c as r,e as l,B as u,C as t,n as o,z as i,G as n}from"./index-8545e6ed.js";const v=["src"],c=a({__name:"Avatar",props:{size:{default:40},shape:{default:"round"},src:{default:null}},setup(a){const c=s(null),d=s(!1);return e((()=>{c.value&&(c.value.onload=()=>{d.value=!0},c.value.onerror=()=>{d.value=!1})})),(s,e)=>(r(),l("div",{class:i(["ui-avatar-wrap",{"ui-avatar-square":"square"===a.shape}]),style:n({width:`${a.size}px`,height:`${a.size}px`})},[d.value?t("",!0):u(s.$slots,"icon",{key:0}),o("img",{src:a.src,alt:"头像",ref_key:"imgRef",ref:c,class:i({"avatar-img-show":d.value})},null,10,v)],6))}});export{c as _};
