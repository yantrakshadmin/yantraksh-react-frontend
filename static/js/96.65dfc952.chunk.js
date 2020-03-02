(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{139:function(e,a,t){"use strict";var n=t(4),l=t(10),r=t(0),c=t.n(r),m=t(1),o=t.n(m),u=t(21),s=t.n(u),d=t(109),i={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.l,responsiveTag:d.l,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},E=function(e){var a=e.className,t=e.cssModule,r=e.size,m=e.bordered,o=e.borderless,u=e.striped,i=e.dark,E=e.hover,p=e.responsive,h=e.tag,b=e.responsiveTag,y=e.innerRef,g=Object(l.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(d.h)(s()(a,"table",!!r&&"table-"+r,!!m&&"table-bordered",!!o&&"table-borderless",!!u&&"table-striped",!!i&&"table-dark",!!E&&"table-hover"),t),C=c.a.createElement(h,Object(n.a)({},g,{ref:y,className:v}));if(p){var f=Object(d.h)(!0===p?"table-responsive":"table-responsive-"+p,t);return c.a.createElement(b,{className:f},C)}return C};E.propTypes=i,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E},585:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t.n(n),r=t(20),c=t(6),m=t(11),o=t(111),u=t(0),s=t.n(u),d=t(117),i=t(124),E=t(134),p=t(125),h=t(133),b=t(119),y=t(120),g=t(137),v=t(138),C=t(135),f=t(586),T=t(139),S=t(116),N=t(127),D=t(128);function F(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function O(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?F(t,!0).forEach(function(a){Object(m.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}a.default=function(e){var a=Object(u.useState)({supplyType:"",subSupplyType:"",docType:"",docNo:"",docDate:"",fromGstin:"",fromTrdName:"",fromAddr1:"",fromAddr2:"",fromPlace:"",fromPincode:"",actFromStateCode:"",fromStateCode:"",toGstin:"",toTrdName:"",toAddr1:"",toAddr2:"",toPlace:"",toPincode:"",actToStateCode:"",toStateCode:"",totalValue:"",cgstValue:"",sgstValue:"",igstValue:"",cessValue:"",totInvValue:"",transporterId:"",transporterName:"",transDocNo:"",transMode:"",transDistance:"",transDocDate:"",vehicleNo:"",vehicleType:"",TransactionType:"",itemList:[]}),t=Object(o.a)(a,2),n=t[0],F=t[1],A=Object(u.useState)({productName:"",productDesc:"",hsnCode:"",quantity:"",qtyUnit:"",cgstRate:"",sgstRate:"",igstRate:"",cessRate:"",cessAdvol:"",taxableAmount:""}),V=Object(o.a)(A,2),j=V[0],P=V[1],x=Object(u.useState)(0),q=Object(o.a)(x,2),R=q[0],k=q[1],I=Object(u.useCallback)(function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,l=a.name;F(O({},n,Object(m.a)({},l,t)))},[n,F]),z=Object(u.useCallback)(function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;P(O({},j,Object(m.a)({},n,t)))},[j,P]),G=Object(u.useCallback)(Object(c.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:F(O({},n,{itemList:[].concat(Object(r.a)(n.itemList),[j])})),P({productName:"",productDesc:"",hsnCode:"",quantity:"",qtyUnit:"",cgstRate:"",sgstRate:"",igstRate:"",cessRate:"",cessAdvol:"",taxableAmount:""});case 2:case"end":return e.stop()}},e)})),[n,F,j,P]),w=Object(u.useCallback)(function(){var e=Object(c.a)(l.a.mark(function e(a){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:F(O({},n,{itemList:n.itemList.filter(function(e){return e!==a})}));case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),[n,F]),M=Object(u.useCallback)(function(){if(n.itemList)return n.itemList.map(function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,e.productName),s.a.createElement("td",null,e.productDesc),s.a.createElement("td",null,e.hsnCode),s.a.createElement("td",null,e.quantity),s.a.createElement("td",null,e.qtyUnit),s.a.createElement("td",null,e.cgstRate),s.a.createElement("td",null,e.sgstRate),s.a.createElement("td",null,e.igstRate),s.a.createElement("td",null,e.cessRate),s.a.createElement("td",null,e.cessAdvol),s.a.createElement("td",null,e.taxableAmount),s.a.createElement("td",null,s.a.createElement(d.a,{type:"button",title:"Delete Item",onClick:function(){return w(e)},color:"danger",size:"sm"},s.a.createElement(N.a,{icon:D.b}))))})},[n]),L=Object(u.useCallback)(function(){return 1===R?s.a.createElement(d.a,{color:"primary",size:"lg",disabled:!0},s.a.createElement("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," Saving"):s.a.createElement(d.a,{type:"submit",color:"primary",size:"lg"},"Save")},[R]),U=Object(u.useCallback)(function(e){e.preventDefault(),k(1),console.log(n),k(0)},[n,R,k]);return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(i.a,null,s.a.createElement(E.a,null,"E-Way Bill Form"),s.a.createElement(p.a,null,s.a.createElement(h.a,{method:"post",onSubmit:U},s.a.createElement(b.a,null,s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"supplyType"},"Supply Type"),s.a.createElement(C.a,{type:"text",name:"supplyType",id:"supplyType",value:n.supplyType,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"subSupplyType"},"Sub Supply Type"),s.a.createElement(C.a,{type:"text",name:"subSupplyType",id:"subSupplyType",value:n.subSupplyType,onChange:I,required:!0})))),s.a.createElement("hr",null),s.a.createElement(b.a,null,s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"docType"},"Doc Type"),s.a.createElement(C.a,{type:"text",name:"docType",id:"docType",value:n.docType,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"docNo"},"Doc No."),s.a.createElement(C.a,{type:"text",name:"docNo",id:"docNo",value:n.docNo,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"docDate"},"Doc Date"),s.a.createElement(C.a,{type:"date",name:"docDate",id:"docDate",value:n.docDate,onChange:I,required:!0})))),s.a.createElement("hr",null),s.a.createElement(b.a,null,s.a.createElement(y.a,{md:6},s.a.createElement(f.a,{color:"light"},"FROM"),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"fromGstin"},"GSTIN"),s.a.createElement(C.a,{type:"text",name:"fromGstin",id:"fromGstin",value:n.fromGstin,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"fromTrdName"},"TRD Name"),s.a.createElement(C.a,{type:"text",name:"fromTrdName",id:"fromTrdName",value:n.fromTrdName,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"fromAddr1"},"Address 1"),s.a.createElement(C.a,{type:"text",name:"fromAddr1",id:"fromAddr1",value:n.fromAddr1,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"fromAddr2"},"Address 2"),s.a.createElement(C.a,{type:"text",name:"fromAddr2",id:"fromAddr2",value:n.fromAddr2,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"fromPlace"},"Place"),s.a.createElement(C.a,{type:"text",name:"fromPlace",id:"fromPlace",value:n.fromPlace,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"fromPincode"},"PIN Code"),s.a.createElement(C.a,{type:"number",name:"fromPincode",id:"fromPincode",value:n.fromPincode,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"actFromStateCode"},"Act State Code"),s.a.createElement(C.a,{type:"number",name:"actFromStateCode",id:"actFromStateCode",value:n.actFromStateCode,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"fromStateCode"},"State Code"),s.a.createElement(C.a,{type:"number",name:"fromStateCode",id:"fromStateCode",value:n.fromStateCode,onChange:I}))),s.a.createElement(y.a,{md:6},s.a.createElement(f.a,{color:"light"},"TO"),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"toGstin"},"GSTIN"),s.a.createElement(C.a,{type:"text",name:"toGstin",id:"toGstin",value:n.toGstin,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"toTrdName"},"TRD Name"),s.a.createElement(C.a,{type:"text",name:"toTrdName",id:"toTrdName",value:n.toTrdName,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"toAddr1"},"Address 1"),s.a.createElement(C.a,{type:"text",name:"toAddr1",id:"toAddr1",value:n.toAddr1,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"toAddr2"},"Address 2"),s.a.createElement(C.a,{type:"text",name:"toAddr2",id:"toAddr2",value:n.toAddr2,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"toPlace"},"Place"),s.a.createElement(C.a,{type:"text",name:"toPlace",id:"toPlace",value:n.toPlace,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"toPincode"},"PIN Code"),s.a.createElement(C.a,{type:"number",name:"toPincode",id:"toPincode",value:n.toPincode,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"actToStateCode"},"Act State Code"),s.a.createElement(C.a,{type:"number",name:"actToStateCode",id:"actToStateCode",value:n.actToStateCode,onChange:I})),s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"toStateCode"},"State Code"),s.a.createElement(C.a,{type:"number",name:"toStateCode",id:"toStateCode",value:n.toStateCode,onChange:I})))),s.a.createElement("hr",null),s.a.createElement(b.a,null,s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"totalValue"},"Total Value"),s.a.createElement(C.a,{type:"number",name:"totalValue",id:"totalValue",value:n.totalValue,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"cgstValue"},"CGST Value"),s.a.createElement(C.a,{type:"number",name:"cgstValue",id:"cgstValue",value:n.cgstValue,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"sgstValue"},"SGST Value"),s.a.createElement(C.a,{type:"number",name:"sgstValue",id:"sgstValue",value:n.sgstValue,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"igstValue"},"IGST Value"),s.a.createElement(C.a,{type:"number",name:"igstValue",id:"igstValue",value:n.igstValue,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"cessValue"},"CESS Value"),s.a.createElement(C.a,{type:"number",name:"cessValue",id:"cessValue",value:n.cessValue,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"totInvValue"},"TOT INV Value"),s.a.createElement(C.a,{type:"number",name:"totInvValue",id:"totInvValue",value:n.totInvValue,onChange:I,required:!0})))),s.a.createElement("hr",null),s.a.createElement(b.a,null,s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"transporterId"},"Transporter ID"),s.a.createElement(C.a,{type:"text",name:"transporterId",id:"transporterId",value:n.transporterId,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"transporterName"},"Transporter Name"),s.a.createElement(C.a,{type:"text",name:"transporterName",id:"transporterName",value:n.transporterName,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"transDocNo"},"Trans Doc No."),s.a.createElement(C.a,{type:"text",name:"transDocNo",id:"transDocNo",value:n.transDocNo,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"transMode"},"Trans Mode"),s.a.createElement(C.a,{type:"text",name:"transMode",id:"transMode",value:n.transMode,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"transDistance"},"Trans Distance"),s.a.createElement(C.a,{type:"text",name:"transDistance",id:"transDistance",value:n.transDistance,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"transDocDate"},"Trans Doc Date"),s.a.createElement(C.a,{type:"date",name:"transDocDate",id:"transDocDate",value:n.transDocDate,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"vehicleNo"},"Vehicle No"),s.a.createElement(C.a,{type:"date",name:"vehicleNo",id:"vehicleNo",value:n.vehicleNo,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"vehicleType"},"Vehicle Type"),s.a.createElement(C.a,{type:"date",name:"vehicleType",id:"vehicleType",value:n.vehicleType,onChange:I,required:!0}))),s.a.createElement(y.a,{md:4},s.a.createElement(g.a,null,s.a.createElement(v.a,{htmlFor:"TransactionType"},"Transaction Type"),s.a.createElement(C.a,{type:"date",name:"TransactionType",id:"TransactionType",value:n.TransactionType,onChange:I,required:!0})))),s.a.createElement("hr",null),s.a.createElement(T.a,{className:"mt-3",striped:!0,responsive:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Description"),s.a.createElement("th",null,"HSN"),s.a.createElement("th",null,"QTY"),s.a.createElement("th",null,"QTY Unit"),s.a.createElement("th",null,"CGST Rate"),s.a.createElement("th",null,"SGST Rate"),s.a.createElement("th",null,"IGST Rate"),s.a.createElement("th",null,"CESS Rate"),s.a.createElement("th",null,"CESS AdVol"),s.a.createElement("th",null,"Taxable Amount"),s.a.createElement("th",null,"Action"))),s.a.createElement("tbody",null,M(),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(C.a,{type:"text",name:"productName",value:j.productName,onChange:z,bsSize:"sm"})),s.a.createElement("td",null,s.a.createElement(C.a,{type:"text",name:"productDesc",value:j.productDesc,onChange:z,bsSize:"sm"})),s.a.createElement("td",null,s.a.createElement(C.a,{type:"number",name:"hsnCode",value:j.hsnCode,onChange:z,bsSize:"sm"})),s.a.createElement("td",null,s.a.createElement(C.a,{type:"number",name:"quantity",value:j.quantity,onChange:z,bsSize:"sm"})),s.a.createElement("td",null,s.a.createElement(C.a,{type:"text",name:"qtyUnit",value:j.qtyUnit,bsSize:"sm",onChange:z})),s.a.createElement("td",null,s.a.createElement(C.a,{type:"number",name:"cgstRate",value:j.cgstRate,onChange:z,bsSize:"sm"})),s.a.createElement("td",null,s.a.createElement(C.a,{type:"number",name:"sgstRate",value:j.sgstRate,onChange:z,bsSize:"sm"})),s.a.createElement("td",null,s.a.createElement(C.a,{type:"number",name:"igstRate",value:j.igstRate,onChange:z,bsSize:"sm"})),s.a.createElement("td",null,s.a.createElement(C.a,{type:"number",name:"cessRate",value:j.cessRate,onChange:z,bsSize:"sm"})),s.a.createElement("td",null,s.a.createElement(C.a,{type:"number",name:"cessAdvol",value:j.cessAdvol,onChange:z,bsSize:"sm"})),s.a.createElement("td",null,s.a.createElement(C.a,{type:"number",name:"taxableAmount",value:j.taxableAmount,onChange:z,bsSize:"sm"})),s.a.createElement("td",null,s.a.createElement(d.a,{type:"button",title:"Add",onClick:G,color:"success",size:"sm"},s.a.createElement(N.a,{icon:D.d})))))),s.a.createElement("hr",null),L()," ",s.a.createElement(S.a,{to:"/freight/financial"},s.a.createElement(d.a,{type:"button",color:"link",size:"lg"},"Cancel"))))))}}}]);
//# sourceMappingURL=96.65dfc952.chunk.js.map