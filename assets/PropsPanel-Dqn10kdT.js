import{_ as C}from"./FormProps.vue_vue_type_script_setup_true_name_FormProps_lang-BdnkgjIE.js";import{_ as b}from"./FormItemProps.vue_vue_type_script_setup_true_name_FormItemProps_lang-B75z_A_I.js";import y from"./ComponentProps-CnsNXVJS.js";import k from"./FormItemColumnProps-ChU_yMhE.js";import{u as v}from"./useFormDesignState-DaR4Tnkk.js";import{c}from"./formItemConfig-Db_w8m_N.js";import{a0 as F,bo as $}from"./antd-BmrhB3rb.js";import{d as T,c as g,a7 as t,Z as r,_ as I,k as s,a9 as e,a8 as m,ae as K}from"./vue-BjERyvPm.js";import{c as B}from"../index.js";import"./formItemPropsConfig-65iuiQof.js";import"./RuleProps-D-jHI4R_.js";import"./index-DrPvFpAA.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js";import"./useFormItem-B4KjxddK.js";import"./FormOptions-R_YZJrLq.js";import"./componentMap-B-0ioUzN.js";import"./index-DMIrpdHV.js";import"./index-RbNU_lzt.js";import"./useWindowSizeFn-B5LTQhvs.js";import"./uuid-D0SLUWHI.js";import"./useSortable-D6mV6aGQ.js";import"./download-D6oZU4AA.js";import"./base64Conver-bBv-IO2K.js";import"./index-vjZxMvXl.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-CziPtsqx.js";import"./index-IFKYG7IQ.js";const E=T({name:"PropsPanel",components:{FormProps:C,FormItemProps:b,ComponentProps:y,ComponentColumnProps:k,Tabs:F,TabPane:$},setup(){const{formConfig:o}=v(),n=g(()=>c.find(i=>{var a;return i.component===((a=o.value.currentItem)==null?void 0:a.component)}));return{formConfig:o,customComponents:c,slotProps:n}}});function S(o,n,i,a,w,A){const u=t("FormProps"),p=t("TabPane"),f=t("FormItemProps"),_=t("ComponentColumnProps"),l=t("ComponentProps"),P=t("Tabs");return r(),I("div",null,[s(P,{activeKey:o.formConfig.activeKey,"onUpdate:activeKey":n[0]||(n[0]=d=>o.formConfig.activeKey=d),tabBarStyle:{margin:0}},{default:e(()=>[(r(),m(p,{key:1,tab:"表单"},{default:e(()=>[s(u)]),_:1})),(r(),m(p,{key:2,tab:"控件"},{default:e(()=>[s(f)]),_:1})),(r(),m(p,{key:3,tab:"栅格"},{default:e(()=>[s(_)]),_:1})),(r(),m(p,{key:4,tab:"组件"},{default:e(()=>[o.slotProps?K(o.$slots,o.slotProps.component+"Props",{key:0},void 0,!0):(r(),m(l,{key:1}))]),_:3}))]),_:3},8,["activeKey"])])}const so=B(E,[["render",S],["__scopeId","data-v-687602a4"]]);export{so as default};
