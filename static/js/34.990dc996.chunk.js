(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{606:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(3),l=t.n(r),c=t(6),m=t(111),i=t(0),o=t.n(i),u=t(119),s=t(120),_=t(137),E=t(138),p=t(135),d=t(117),h=t(124),x=t(134),g=t(125),v=t(133),b=t(116),y=t(18),f=t(28),S=t(24);function k(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}a.default=function(e){var a=["Taxable","Non-Taxable"],t=["box","cm","ft","g","in","kg","km","m","pcs","unit"],r=["GST0 [0%]","GST5 [5%]","GST12 [12%]","GST18 [18%]","GST28 [28%]"],C=["IGST0 [0%]","IGST5 [5%]","IGST12 [12%]","IGST18 [18%]","IGST28 [28%]"],O=["Fragile","Non Fragile"],F=["Raw Material","Inventory Stock"],T=Object(i.useState)({name:"",sku_id:"",unit:"",hsn_sac_code:"",tax_preference:"Taxable",exemption_reason:"",selling_price:0,si_description:"",cost_price:0,vendor:"",pi_description:"",intra_state_tax_rate:"",inter_state_tax_rate:"",length:0,breadth:0,height:0,volume:0,weight:0,material_type:"Fragile",vehicle_type:"",inventory_account:"Raw Material",opening_stack:0,remarks:""}),j=Object(m.a)(T,2),w=j[0],I=j[1];Object(i.useEffect)(function(){e.match.params.id&&function(){var a=Object(c.a)(l.a.mark(function a(){var t;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(f.kb)(e.match.params.id);case 2:t=a.sent,I(t);case 4:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}()()},[I]);var P=Object(i.useState)(0),G=Object(m.a)(P,2),R=G[0],V=G[1],D=Object(i.useCallback)(function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,r=a.name;I(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?k(t,!0).forEach(function(a){Object(n.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},w,Object(n.a)({},r,t)))},[w,I]),N=Object(i.useCallback)(function(e){return e.map(function(e){return o.a.createElement("option",{key:e,value:e},e)})},[]),U=Object(i.useCallback)(function(){return w.intra_state_tax_rate&&!w.inter_state_tax_rate?o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"intra_state_tax_rate"},"Intra State Tax Rate"),o.a.createElement(p.a,{type:"select",id:"intra_state_tax_rate",name:"intra_state_tax_rate",value:w.intra_state_tax_rate,onChange:D},o.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax"),N(r)))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"inter_state_tax_rate"},"Inter State Tax Rate"),o.a.createElement(p.a,{type:"select",id:"inter_state_tax_rate",name:"inter_state_tax_rate",value:w.inter_state_tax_rate,onChange:D,disabled:!0},o.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax"))))):!w.intra_state_tax_rate&&w.inter_state_tax_rate?o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"intra_state_tax_rate"},"Intra State Tax Rate"),o.a.createElement(p.a,{type:"select",id:"intra_state_tax_rate",name:"intra_state_tax_rate",value:w.intra_state_tax_rate,onChange:D,disabled:!0},o.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax")))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"inter_state_tax_rate"},"Inter State Tax Rate"),o.a.createElement(p.a,{type:"select",id:"inter_state_tax_rate",name:"inter_state_tax_rate",value:w.inter_state_tax_rate,onChange:D},o.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax"),N(C))))):o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"intra_state_tax_rate"},"Intra State Tax Rate"),o.a.createElement(p.a,{type:"select",id:"intra_state_tax_rate",name:"intra_state_tax_rate",value:w.intra_state_tax_rate,onChange:D},o.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax"),N(r)))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"inter_state_tax_rate"},"Inter State Tax Rate"),o.a.createElement(p.a,{type:"select",id:"inter_state_tax_rate",name:"inter_state_tax_rate",value:w.inter_state_tax_rate,onChange:D},o.a.createElement("option",{value:"",defaultValue:!0},"Select a Tax"),N(C)))))},[w]),z=Object(i.useCallback)(function(){return 1===R?o.a.createElement(d.a,{color:"primary",size:"lg",disabled:!0},o.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," Saving"):o.a.createElement(d.a,{type:"submit",color:"primary",size:"lg"},"Save")},[R]),A=Object(i.useCallback)(function(){var a=Object(c.a)(l.a.mark(function a(t){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),V(1),a.prev=2,!e.match.params.id){a.next=10;break}return a.next=6,Object(f.T)(e.match.params.id,w);case 6:V(0),y.b.success("Item Updated Successfully"),a.next=15;break;case 10:return a.next=12,Object(f.w)(w);case 12:V(0),y.b.success("Item Created Successfully"),S.a.push("/dashboard/masters/items");case 15:a.next=21;break;case 17:a.prev=17,a.t0=a.catch(2),y.b.error("Something went wrong!"),V(0);case 21:case"end":return a.stop()}},a,null,[[2,17]])}));return function(e){return a.apply(this,arguments)}}(),[w,V]);return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(h.a,null,o.a.createElement(x.a,null,e.match.params.id?o.a.createElement("b",null,"Edit Item"):o.a.createElement("b",null,"Add Item")),o.a.createElement(g.a,null,o.a.createElement(v.a,{method:"post",onSubmit:A},o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"name"},"Name*"),o.a.createElement(p.a,{type:"text",name:"name",id:"name",value:w.name,onChange:D,required:!0})))),o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"sku_id"},"SKU"),o.a.createElement(p.a,{type:"text",name:"sku_id",id:"sku_id",value:w.sku_id,onChange:D})))),o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"unit"},"Unit"),o.a.createElement(p.a,{type:"select",id:"unit",name:"unit",value:w.unit,onChange:D},o.a.createElement("option",{value:"",defaultValue:!0},"Select Unit"),N(t))))),o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"hsn_sac_code"},"HSN / SAC Code"),o.a.createElement(p.a,{type:"text",name:"hsn_sac_code",id:"hsn_sac_code",value:w.hsn_sac_code,onChange:D})))),o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"tax_preference"},"Tax Preference"),o.a.createElement(p.a,{type:"select",id:"tax_preference",name:"tax_preference",value:w.tax_preference,onChange:D},N(a)))),"Non-Taxable"===w.tax_preference?o.a.createElement(s.a,{md:8},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"exemption_reason"},"Exemption Reason*"),o.a.createElement(p.a,{type:"text",name:"exemption_reason",id:"exemption_reason",value:w.exemption_reason,onChange:D,required:!0}))):null),o.a.createElement("hr",null),o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"selling_price"},"Selling Price"),o.a.createElement(p.a,{type:"number",name:"selling_price",id:"selling_price",value:w.selling_price,onChange:D})),o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"si_description"},"Description"),o.a.createElement(p.a,{type:"text",name:"si_description",id:"si_description",value:w.si_description,onChange:D}))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"cost_price"},"Cost Price"),o.a.createElement(p.a,{type:"number",name:"cost_price",id:"cost_price",value:w.cost_price,onChange:D})),o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"vendor"},"Vendor"),o.a.createElement(p.a,{type:"text",name:"vendor",id:"vendor",value:w.vendor,onChange:D})),o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"pi_description"},"Description"),o.a.createElement(p.a,{type:"text",name:"pi_description",id:"pi_description",value:w.pi_description,onChange:D})))),o.a.createElement("hr",null),U(),o.a.createElement("hr",null),o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"length"},"Length (m)"),o.a.createElement(p.a,{type:"number",name:"length",id:"length",value:w.length,onChange:D}))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"breadth"},"Breadth (m)"),o.a.createElement(p.a,{type:"number",name:"breadth",id:"breadth",value:w.breadth,onChange:D}))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"height"},"Height (m)"),o.a.createElement(p.a,{type:"number",name:"height",id:"height",value:w.height,onChange:D}))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"volume"},"Volume"),o.a.createElement(p.a,{type:"number",name:"volume",id:"volume",value:w.volume,onChange:D}))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"weight"},"Weight (Kg)"),o.a.createElement(p.a,{type:"number",name:"weight",id:"weight",value:w.weight,onChange:D})))),o.a.createElement("hr",null),o.a.createElement(u.a,null,o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"material_type"},"Material Type"),o.a.createElement(p.a,{type:"select",id:"material_type",name:"material_type",value:w.material_type,onChange:D},N(O)))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"vehicle_type"},"Vehicle Type"),o.a.createElement(p.a,{type:"text",name:"vehicle_type",id:"vehicle_type",value:w.vehicle_type,onChange:D}))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"inventory_account"},"Inventory Account"),o.a.createElement(p.a,{type:"select",id:"inventory_account",name:"inventory_account",value:w.inventory_account,onChange:D},N(F)))),o.a.createElement(s.a,{md:4},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"opening_stack"},"Opening Stock"),o.a.createElement(p.a,{type:"number",name:"opening_stack",id:"opening_stack",value:w.opening_stack,onChange:D})))),o.a.createElement("hr",null),o.a.createElement(u.a,null,o.a.createElement(s.a,{md:8},o.a.createElement(_.a,null,o.a.createElement(E.a,{htmlFor:"remarks"},"Remarks"),o.a.createElement(p.a,{type:"text",name:"remarks",id:"remarks",value:w.remarks,onChange:D})))),o.a.createElement("hr",null),z()," ",o.a.createElement(b.a,{to:"/masters/items"},o.a.createElement(d.a,{type:"button",color:"link",size:"lg"},"Cancel"))))))}}}]);
//# sourceMappingURL=34.990dc996.chunk.js.map