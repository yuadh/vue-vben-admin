var $=(h,d,t)=>new Promise((b,o)=>{var v=e=>{try{p(t.next(e))}catch(s){o(s)}},_=e=>{try{p(t.throw(e))}catch(s){o(s)}},p=e=>e.done?b(e.value):Promise.resolve(e.value).then(v,_);p((t=t.apply(h,d)).next())});import{_ as k}from"./BasicForm.vue_vue_type_script_setup_true_lang-DpwaKN3S.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js";import"./componentMap-B-0ioUzN.js";import{u as y}from"./useForm-b1qEKHt-.js";import{C as I,a as W}from"../index.js";import{P as w}from"./index-B24a6rfW.js";import{d as A,f as g,a7 as M,Z as m,a8 as f,a9 as a,k as l,u as n,G as u,ab as C}from"./vue-BjERyvPm.js";import"./FormItem.vue_vue_type_script_lang-r1OWV9jg.js";import"./helper-BjbsUAHT.js";import"./antd-BmrhB3rb.js";import"./index-RbNU_lzt.js";import"./useWindowSizeFn-B5LTQhvs.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js";import"./index-DMIrpdHV.js";import"./uuid-D0SLUWHI.js";import"./useSortable-D6mV6aGQ.js";import"./download-D6oZU4AA.js";import"./base64Conver-bBv-IO2K.js";import"./index-vjZxMvXl.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-CziPtsqx.js";import"./index-IFKYG7IQ.js";import"./useContentViewHeight-mbS0GS8E.js";import"./onMountedOrActivated-DcvTUt7V.js";const fe=A({__name:"AppendForm",setup(h){const{createMessage:d}=W(),t=g(0),[b,{appendSchemaByField:o,removeSchemaByField:v,validate:_}]=y({schemas:[{field:"field0a",component:"Input",label:"字段0",required:!0},{field:"field0b",component:"Input",label:"字段0",required:!0},{field:"0",label:" ",slot:"add"}],labelWidth:100,actionColOptions:{span:24},baseColProps:{span:8}});function p(){return $(this,null,function*(){try{const i=yield _();d.success("请前往控制台查看输出")}catch(i){}})}const e=g(1);function s(){o({field:`field${e.value}a`,component:"Input",label:"字段"+e.value,required:!0},""),o({field:`field${e.value}b`,component:"Input",label:"字段"+e.value,required:!0},""),o({field:`${e.value}`,component:"Input",label:" ",slot:"add"},""),e.value++}function F(){o([{field:`field${e.value}a`,component:"Input",label:"字段"+e.value,required:!0},{field:`field${e.value}b`,component:"Input",label:"字段"+e.value,required:!0},{field:`${e.value}`,component:"Input",label:" ",slot:"add"}],""),e.value++}function S(i){v([`field${i}a`,`field${i}b`,`${i}`]),e.value--}const[G,{appendSchemaByField:B,removeSchemaByField:P,getFieldsValue:O,setFieldsValue:q}]=y({schemas:[{field:`field[${t.value}].a`,component:"Input",label:"字段a",colProps:{span:9}},{field:`field[${t.value}].b`,colProps:{span:9},component:"Input",label:"字段b"}],labelWidth:100,actionColOptions:{span:24},baseColProps:{span:8}});function N(){t.value++,B([{field:`field[${t.value}].a`,component:"Input",colProps:{span:9},label:"字段a"},{field:`field[${t.value}].b`,component:"Input",colProps:{span:9},label:"字段b"}],"")}function V(){P([`field[${t.value}].a`,`field[${t.value}].b`]),t.value--}function x(){q({field:[{a:"默认a",b:"默认b"}]})}function R(){d.success("请前往控制台查看输出")}return(i,T)=>{const r=M("a-button");return m(),f(n(w),{title:"表单增删示例"},{default:a(()=>[l(n(I),{title:"表单项增删"},{default:a(()=>[l(n(k),{onRegister:n(b),onSubmit:p},{add:a(({field:c})=>[Number(c)===0?(m(),f(r,{key:0,onClick:s},{default:a(()=>[u("+")]),_:1})):C("",!0),Number(c)===0?(m(),f(r,{key:1,class:"ml-2",onClick:F},{default:a(()=>[u(" 批量添加表单配置 ")]),_:1})):C("",!0),Number(c)>0?(m(),f(r,{key:2,onClick:()=>S(c)},{default:a(()=>[u("-")]),_:2},1032,["onClick"])):C("",!0)]),_:1},8,["onRegister"])]),_:1}),l(n(I),{title:"表单组增删",class:"my-3"},{default:a(()=>[l(r,{onClick:x},{default:a(()=>[u("设置初始值")]),_:1}),l(r,{class:"m-2",onClick:N},{default:a(()=>[u(" 批量添加表单 ")]),_:1}),l(r,{onClick:V},{default:a(()=>[u("批量减少表单")]),_:1}),l(n(k),{onRegister:n(G),onSubmit:R},null,8,["onRegister"])]),_:1})]),_:1})}}});export{fe as default};
