(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{565:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(3),l=t.n(r),c=t(6),m=t(112),s=t(0),u=t.n(s),i=t(122),o=t(123),_=t(151),p=t(152),E=t(134),d=t(120),x=t(128),h=t(146),b=t(129),f=t(130),v=t(118),y=t(19),g=t(27),S=t(24);function k(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}a.default=function(e){var a=["Taxable","Non-Taxable"],t=["box","cm","ft","g","in","kg","km","m","pcs","unit"],r=["GST0 [0%]","GST5 [5%]","GST12 [12%]","GST18 [18%]","GST28 [28%]"],O=["IGST0 [0%]","IGST5 [5%]","IGST12 [12%]","IGST18 [18%]","IGST28 [28%]"],T=Object(s.useState)({type:"Goods",name:"",sku:"",unit:"",hsn_sac_code:"",tax_preference:"Taxable",exemption_reason:"",sales_selling_price:"",purchase_cost_price:"",intra_state_tax_rate:"",inter_state_tax_rate:"",remarks:""}),C=Object(m.a)(T,2),j=C[0],w=C[1];Object(s.useEffect)(function(){e.match.params.id&&function(){var a=Object(c.a)(l.a.mark(function a(){var t;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(g.H)(e.match.params.id);case 2:t=a.sent,w(t);case 4:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}()()},[w]);var I=Object(s.useState)(0),F=Object(m.a)(I,2),G=F[0],P=F[1],R=Object(s.useCallback)(function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,r=a.name;w(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?k(t,!0).forEach(function(a){Object(n.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},j,Object(n.a)({},r,t)))},[j,w]),V=Object(s.useCallback)(function(e){return e.map(function(e){return u.a.createElement("option",{key:e,value:e},e)})},[]),N=Object(s.useCallback)(function(){return j.intra_state_tax_rate&&!j.inter_state_tax_rate?u.a.createElement(i.a,null,u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"intra_state_tax_rate"},"Intra State Tax Rate"),u.a.createElement(E.a,{type:"select",id:"intra_state_tax_rate",name:"intra_state_tax_rate",value:j.intra_state_tax_rate,onChange:R},u.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax"),V(r)))),u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"inter_state_tax_rate"},"Inter State Tax Rate"),u.a.createElement(E.a,{type:"select",id:"inter_state_tax_rate",name:"inter_state_tax_rate",value:j.inter_state_tax_rate,onChange:R,disabled:!0},u.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax"))))):!j.intra_state_tax_rate&&j.inter_state_tax_rate?u.a.createElement(i.a,null,u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"intra_state_tax_rate"},"Intra State Tax Rate"),u.a.createElement(E.a,{type:"select",id:"intra_state_tax_rate",name:"intra_state_tax_rate",value:j.intra_state_tax_rate,onChange:R,disabled:!0},u.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax")))),u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"inter_state_tax_rate"},"Inter State Tax Rate"),u.a.createElement(E.a,{type:"select",id:"inter_state_tax_rate",name:"inter_state_tax_rate",value:j.inter_state_tax_rate,onChange:R},u.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax"),V(O))))):u.a.createElement(i.a,null,u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"intra_state_tax_rate"},"Intra State Tax Rate"),u.a.createElement(E.a,{type:"select",id:"intra_state_tax_rate",name:"intra_state_tax_rate",value:j.intra_state_tax_rate,onChange:R},u.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax"),V(r)))),u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"inter_state_tax_rate"},"Inter State Tax Rate"),u.a.createElement(E.a,{type:"select",id:"inter_state_tax_rate",name:"inter_state_tax_rate",value:j.inter_state_tax_rate,onChange:R},u.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax"),V(O)))))},[j]),D=Object(s.useCallback)(function(){return 1===G?u.a.createElement(d.a,{color:"primary",size:"lg",disabled:!0},u.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," Saving"):u.a.createElement(d.a,{type:"submit",color:"primary",size:"lg"},"Save")},[G]),U=Object(s.useCallback)(function(){var a=Object(c.a)(l.a.mark(function a(t){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),P(1),a.prev=2,!e.match.params.id){a.next=10;break}return a.next=6,Object(g.A)(e.match.params.id,j);case 6:P(0),y.b.success("Item Updated Successfully"),a.next=15;break;case 10:return a.next=12,Object(g.r)(j);case 12:P(0),y.b.success("Item Created Successfully"),S.a.push("/dashboard/masters/items");case 15:a.next=21;break;case 17:a.prev=17,a.t0=a.catch(2),y.b.error("Something went wrong!"),P(0);case 21:case"end":return a.stop()}},a,null,[[2,17]])}));return function(e){return a.apply(this,arguments)}}(),[j,P]);return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(x.a,null,u.a.createElement(h.a,null,e.match.params.id?u.a.createElement("b",null,"Edit Item"):u.a.createElement("b",null,"Add Item")),u.a.createElement(b.a,null,u.a.createElement(f.a,{method:"post",onSubmit:U},u.a.createElement(i.a,null,u.a.createElement(o.a,{md:4},u.a.createElement(_.a,{tag:"fieldset"},u.a.createElement(p.a,null,"Type"),u.a.createElement(_.a,{check:!0},u.a.createElement(p.a,{check:!0},u.a.createElement(E.a,{value:"Goods",checked:"Goods"===j.type,type:"radio",name:"type",onChange:R})," ","Goods")),u.a.createElement(_.a,{check:!0},u.a.createElement(p.a,{check:!0},u.a.createElement(E.a,{value:"Service",checked:"Service"===j.type,type:"radio",name:"type",onChange:R})," ","Service"))))),u.a.createElement(i.a,null,u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"name"},"Name*"),u.a.createElement(E.a,{type:"text",name:"name",id:"name",value:j.name,onChange:R,required:!0})))),u.a.createElement(i.a,null,u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"sku"},"SKU"),u.a.createElement(E.a,{type:"text",name:"sku",id:"sku",value:j.sku,onChange:R})))),u.a.createElement(i.a,null,u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"unit"},"Unit"),u.a.createElement(E.a,{type:"select",id:"unit",name:"unit",value:j.unit,onChange:R},u.a.createElement("option",{value:"",defaultValue:!0},"Select Unit"),V(t))))),u.a.createElement(i.a,null,u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"hsn_sac_code"},"HSN / SAC Code"),u.a.createElement(E.a,{type:"text",name:"hsn_sac_code",id:"hsn_sac_code",value:j.hsn_sac_code,onChange:R})))),u.a.createElement(i.a,null,u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"tax_preference"},"Tax Preference"),u.a.createElement(E.a,{type:"select",id:"tax_preference",name:"tax_preference",value:j.tax_preference,onChange:R},V(a)))),"Non-Taxable"===j.tax_preference?u.a.createElement(o.a,{md:8},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"exemption_reason"},"Exemption Reason*"),u.a.createElement(E.a,{type:"text",name:"exemption_reason",id:"exemption_reason",value:j.exemption_reason,onChange:R,required:!0}))):null),u.a.createElement("hr",null),u.a.createElement(i.a,null,u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"sales_selling_price"},"Selling Price"),u.a.createElement(E.a,{type:"text",name:"sales_selling_price",id:"sales_selling_price",value:j.sales_selling_price,onChange:R}))),u.a.createElement(o.a,{md:4},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"purchase_cost_price"},"Cost Price"),u.a.createElement(E.a,{type:"text",name:"purchase_cost_price",id:"purchase_cost_price",value:j.purchase_cost_price,onChange:R})))),u.a.createElement("hr",null),N(),u.a.createElement("hr",null),u.a.createElement(i.a,null,u.a.createElement(o.a,{md:8},u.a.createElement(_.a,null,u.a.createElement(p.a,{htmlFor:"remarks"},"Remarks"),u.a.createElement(E.a,{type:"text",name:"remarks",id:"remarks",value:j.remarks,onChange:R})))),u.a.createElement("hr",null),D()," ",u.a.createElement(v.a,{to:"/masters/items"},u.a.createElement(d.a,{type:"button",color:"link",size:"lg"},"Cancel"))))))}}}]);
//# sourceMappingURL=28.aacbdb66.chunk.js.map