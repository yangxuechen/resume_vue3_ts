import{d as o,n as e,h as a,N as n,o as l,c,i as t,k as r,T as m,F as s,j as p,w as u,p as d,l as i,a as g,K as v}from"./vendor.21a5739d.js";import{V as b,_ as f,a as k,b as h}from"./RemoveDrag.729ff241.js";import"./TitleB.39ceaa3b.js";import"./index.8d228259.js";import"./EducationA.5250b0bc.js";import"./TitleA.54f1b315.js";import"./AutoTextArea.45af4cba.js";import"./WorkExperience2.cc583b3d.js";import"./AvatarTop2.942e21d4.js";import"./Skill1.a4b0fb7d.js";import"./BaseInfoRight.66afc812.js";const C=u();d("data-v-a730971e");const x={class:"temp01-box"},j={class:"left-box"},N={class:"right-box"};i();var A=o({expose:[],emits:{colorChange:o=>Boolean},setup(o,{emit:u}){const d=e([{color:"#062743",background:"background-color:#062743"},{color:"#68412C",background:"background-color:#68412C"},{color:"#13442A",background:"background-color:#13442A"},{color:"#1D6357",background:"background-color:#1D6357"},{color:"#9E552E",background:"background-color:#9E552E"}]),i=a([{componentName:"Avatar"},{componentName:"PersonInfo"},{componentName:"Skill1"}]),A=a([{componentName:"JobIntension"},{componentName:"Education"},{componentName:"WorkExperience"},{componentName:"OpenSourcePro"}]),E=o=>{console.log("color change",o),u("colorChange","ii"),T.commit("app/setThemeColor",o)},T=g();n((()=>{document.body.style.setProperty("--rs-bgcolor-1",d[0].color)}));const V=o=>{const e=A.value;A.value=e.filter((e=>o!=e.componentName));const a=i.value;i.value=a.filter((e=>o!=e.componentName)),v.success(`删除${o}模块成功!`)},_=o=>{window.console.log(o)},y=o=>{console.log("checkMove",o.draggedContext),console.log("Future index: "+o.draggedContext.futureIndex)},I=o=>{console.log("checkMove",o)};return T.commit("app/setThemeColor",d[0].color),(o,e)=>(l(),c("div",x,[t("div",j,[t(r(b),{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=o=>i.value=o),group:{name:"people",pull:"clone",put:!0},sort:!0,onChange:_,move:y},{default:C((()=>[t(m,null,{default:C((()=>[(l(!0),c(s,null,p(i.value,(o=>(l(),c("div",{key:o},[t(f,{"component-name":o.componentName,onRemoveComps:V},null,8,["component-name"])])))),128))])),_:1})])),_:1},8,["modelValue"])]),t("div",N,[t(r(b),{modelValue:A.value,"onUpdate:modelValue":e[2]||(e[2]=o=>A.value=o),group:{name:"people",pull:"clone",put:!0},onChange:_,onChoose:I,move:y},{default:C((()=>[t(m,null,{default:C((()=>[(l(!0),c(s,null,p(A.value,(o=>(l(),c("div",{key:o},[t(f,{"component-name":o.componentName,onRemoveComps:V},null,8,["component-name"])])))),128))])),_:1})])),_:1},8,["modelValue"])]),t(k,{onRemoveComponent:V}),t(h,{onChangeTheme:E,colors:r(d)},null,8,["colors"])]))}});A.__scopeId="data-v-a730971e";export default A;