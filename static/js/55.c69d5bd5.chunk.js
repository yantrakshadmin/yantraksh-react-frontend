(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{156:function(e,t,a){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,u=m&&m(Object);e.exports=function e(t,a,v){if("string"!==typeof a){if(u){var p=m(a);p&&p!==u&&e(t,p,v)}var s=c(a);l&&(s=s.concat(l(a)));for(var _=0;_<s.length;++_){var d=s[_];if(!n[d]&&!r[d]&&(!v||!v[d])){var E=o(a,d);try{i(t,d,E)}catch(f){}}}return t}return t}},181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),c=a.n(i),l=a(156),o=a.n(l),m=a(46),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};var v=function(e){var t=function(t){var a=t.wrappedComponentRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["wrappedComponentRef"]);return r.a.createElement(m.a,{children:function(t){return r.a.createElement(e,u({},n,t,{ref:a}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:c.a.func},o()(t,e)};t.a=v},567:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(3),i=a.n(r),c=a(6),l=a(112),o=a(0),m=a.n(o),u=a(149),v=a(176),p=a(150),s=a(151),_=a(140),d=a(141),E=a(534),f=a(535),y=a(198),h=a(122),b=a(26),g=a(181);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}t.default=Object(g.a)(function(e){var t=Object(o.useState)({}),a=Object(l.a)(t,2),r=a[0],g=a[1];Object(o.useEffect)(function(){!function(){var t=Object(c.a)(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.y)(e.match.params.id);case 2:a=t.sent,g(a);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[g]);var j=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,i=t.name;g(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},r,Object(n.a)({},i,a)))},x=function(){var t=Object(c.a)(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,console.log(r,e.match.params.id,"IS DATA GOIND"),t.next=5,Object(b.p)(r,e.match.params.id);case 5:alert("done"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),alert(JSON.stringify(t.t0));case 12:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e){return t.apply(this,arguments)}}();return m.a.createElement(u.a,null,m.a.createElement(v.a,null,m.a.createElement("strong",null,"Edit Invoice")),m.a.createElement(p.a,null,m.a.createElement(s.a,{method:"post",onSubmit:x},m.a.createElement(_.a,null,m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_number"},"Invoice number"),m.a.createElement(y.a,{type:"number",name:"invoice_number",id:"invoice_number",value:r.invoice_number,onChange:j}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_date"},"Invoice Date"),m.a.createElement(y.a,{type:"datetime-local",name:"invoice_date",id:"invoice_date",value:r.invoice_date,onChange:j})))),m.a.createElement(_.a,null,m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_due_date"},"Invoice Due Date"),m.a.createElement(y.a,{type:"datetime-local",name:"invoice_due_date",id:"invoice_due_date",onChange:j,valid:r.invoice_due_date}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_place_of_supply"},"Place of Supply"),m.a.createElement(y.a,{type:"text",name:"invoice_place_of_supply",id:"invoice_place_of_supply",value:r.invoice_place_of_supply,onChange:j}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_destination"},"Invoice Destination"),m.a.createElement(y.a,{type:"text",name:"invoice_destination",id:"invoice_destination",value:r.invoice_destination,onChange:j})))),m.a.createElement(_.a,null,m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_destination_address"},"Destination Address"),m.a.createElement(y.a,{type:"text",name:"invoice_destination_address",id:"invoice_destination_address",onChange:j,value:r.invoice_destination_address}))),m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_destination_pincode"},"Destination PINCODE"),m.a.createElement(y.a,{type:"text",name:"invoice_destination_pincode",id:"invoice_destination_pincode",value:r.invoice_destination_pincode,onChange:j}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_gst"},"Invoice GST"),m.a.createElement(y.a,{type:"text",name:"invoice_gst",id:"invoice_gst",value:r.invoice_gst,onChange:j})))),m.a.createElement(_.a,null,m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_salesperson"},"Sales Person"),m.a.createElement(y.a,{type:"text",name:"invoice_salesperson",id:"invoice_salesperson",onChange:j,value:r.invoice_salesperson}))),m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_lr_number"},"LR number"),m.a.createElement(y.a,{type:"number",name:"invoice_lr_number",id:"invoice_lr_number",value:r.invoice_lr_number,onChange:j}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_vehicle_placement_date"},"Vehicle Placement Date"),m.a.createElement(y.a,{type:"datetime-local",name:"invoice_vehicle_placement_date",id:"invoice_vehicle_placement_date",value:r.invoice_vehicle_placement_date,onChange:j})))),m.a.createElement(_.a,null,m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_vehicle_number"},"Vehicle Number"),m.a.createElement(y.a,{type:"text",name:"invoice_vehicle_number",id:"invoice_vehicle_number",onChange:j,value:r.invoice_vehicle_number}))),m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_service_month"},"Invoice service Month"),m.a.createElement(y.a,{type:"text",name:"invoice_service_month",id:"invoice_service_month",value:r.invoice_service_month,onChange:j}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_item_details"},"invoice Item Details"),m.a.createElement(y.a,{type:"text",name:"invoice_item_details",id:"invoice_item_details",value:r.invoice_item_details,onChange:j})))),m.a.createElement(_.a,null,m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_rate"},"Invoice Rate"),m.a.createElement(y.a,{type:"text",name:"invoice_rate",id:"invoice_rate",onChange:j,value:r.invoice_rate}))),m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_tax"},"TAX"),m.a.createElement(y.a,{type:"text",name:"invoice_tax",id:"invoice_tax",value:r.invoice_tax,onChange:j}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_amount"},"Total Amount"),m.a.createElement(y.a,{type:"text",name:"invoice_amount",id:"invoice_amount",value:r.invoice_amount,onChange:j})))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement(h.a,{color:"primary",size:"lg"},"Create")," \xa0\xa0\xa0",m.a.createElement(h.a,{color:"link",size:"lg",type:"button",onClick:function(){return e.history.push("/freight/financial")}},"Cancel"))))})}}]);
//# sourceMappingURL=55.c69d5bd5.chunk.js.map