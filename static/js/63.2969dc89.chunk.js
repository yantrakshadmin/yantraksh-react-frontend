(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{178:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(1),r=t.n(c),l=t(29),o=t.n(l),m=t(44),u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};var v=function(e){var a=function(a){var t=a.wrappedComponentRef,n=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["wrappedComponentRef"]);return i.a.createElement(m.a,{children:function(a){return i.a.createElement(e,u({},n,a,{ref:t}))}})};return a.displayName="withRouter("+(e.displayName||e.name)+")",a.WrappedComponent=e,a.propTypes={wrappedComponentRef:r.a.func},o()(a,e)};a.a=v},558:function(e,a,t){"use strict";t.r(a);var n=t(12),i=t(3),c=t.n(i),r=t(6),l=t(112),o=t(0),m=t.n(o),u=t(148),v=t(174),s=t(149),_=t(150),p=t(140),d=t(141),E=t(525),f=t(526),h=t(195),b=t(122),y=t(26),g=t(178);function O(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}a.default=Object(g.a)(function(e){var a=Object(o.useState)({}),t=Object(l.a)(a,2),i=t[0],g=t[1];Object(o.useEffect)(function(){!function(){var a=Object(r.a)(c.a.mark(function a(){var t;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(y.y)(e.match.params.id);case 2:t=a.sent,g(t);case 4:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}()()},[g]);var C=function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,c=a.name;g(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?O(t,!0).forEach(function(a){Object(n.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},i,Object(n.a)({},c,t)))},x=function(){var a=Object(r.a)(c.a.mark(function a(t){return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,console.log(i,e.match.params.id,"IS DATA GOIND"),a.next=5,Object(y.p)(i,e.match.params.id);case 5:alert("done"),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0),alert(JSON.stringify(a.t0));case 12:case"end":return a.stop()}},a,null,[[1,8]])}));return function(e){return a.apply(this,arguments)}}();return m.a.createElement(u.a,null,m.a.createElement(v.a,null,m.a.createElement("strong",null,"Edit Invoice")),m.a.createElement(s.a,null,m.a.createElement(_.a,{method:"post",onSubmit:x},m.a.createElement(p.a,null,m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_number"},"Invoice number"),m.a.createElement(h.a,{type:"number",name:"invoice_number",id:"invoice_number",value:i.invoice_number,onChange:C}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_date"},"Invoice Date"),m.a.createElement(h.a,{type:"datetime-local",name:"invoice_date",id:"invoice_date",value:i.invoice_date,onChange:C})))),m.a.createElement(p.a,null,m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_due_date"},"Invoice Due Date"),m.a.createElement(h.a,{type:"datetime-local",name:"invoice_due_date",id:"invoice_due_date",onChange:C,valid:i.invoice_due_date}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_place_of_supply"},"Place of Supply"),m.a.createElement(h.a,{type:"text",name:"invoice_place_of_supply",id:"invoice_place_of_supply",value:i.invoice_place_of_supply,onChange:C}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_destination"},"Invoice Destination"),m.a.createElement(h.a,{type:"text",name:"invoice_destination",id:"invoice_destination",value:i.invoice_destination,onChange:C})))),m.a.createElement(p.a,null,m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_destination_address"},"Destination Address"),m.a.createElement(h.a,{type:"text",name:"invoice_destination_address",id:"invoice_destination_address",onChange:C,value:i.invoice_destination_address}))),m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_destination_pincode"},"Destination PINCODE"),m.a.createElement(h.a,{type:"text",name:"invoice_destination_pincode",id:"invoice_destination_pincode",value:i.invoice_destination_pincode,onChange:C}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_gst"},"Invoice GST"),m.a.createElement(h.a,{type:"text",name:"invoice_gst",id:"invoice_gst",value:i.invoice_gst,onChange:C})))),m.a.createElement(p.a,null,m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_salesperson"},"Sales Person"),m.a.createElement(h.a,{type:"text",name:"invoice_salesperson",id:"invoice_salesperson",onChange:C,value:i.invoice_salesperson}))),m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_lr_number"},"LR number"),m.a.createElement(h.a,{type:"number",name:"invoice_lr_number",id:"invoice_lr_number",value:i.invoice_lr_number,onChange:C}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_vehicle_placement_date"},"Vehicle Placement Date"),m.a.createElement(h.a,{type:"datetime-local",name:"invoice_vehicle_placement_date",id:"invoice_vehicle_placement_date",value:i.invoice_vehicle_placement_date,onChange:C})))),m.a.createElement(p.a,null,m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_vehicle_number"},"Vehicle Number"),m.a.createElement(h.a,{type:"text",name:"invoice_vehicle_number",id:"invoice_vehicle_number",onChange:C,value:i.invoice_vehicle_number}))),m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_service_month"},"Invoice service Month"),m.a.createElement(h.a,{type:"text",name:"invoice_service_month",id:"invoice_service_month",value:i.invoice_service_month,onChange:C}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_item_details"},"invoice Item Details"),m.a.createElement(h.a,{type:"text",name:"invoice_item_details",id:"invoice_item_details",value:i.invoice_item_details,onChange:C})))),m.a.createElement(p.a,null,m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_rate"},"Invoice Rate"),m.a.createElement(h.a,{type:"text",name:"invoice_rate",id:"invoice_rate",onChange:C,value:i.invoice_rate}))),m.a.createElement(d.a,{lg:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_tax"},"TAX"),m.a.createElement(h.a,{type:"text",name:"invoice_tax",id:"invoice_tax",value:i.invoice_tax,onChange:C}))),m.a.createElement(d.a,{md:4},m.a.createElement(E.a,null,m.a.createElement(f.a,{for:"invoice_amount"},"Total Amount"),m.a.createElement(h.a,{type:"text",name:"invoice_amount",id:"invoice_amount",value:i.invoice_amount,onChange:C})))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement(b.a,{color:"primary",size:"lg"},"Create")," \xa0\xa0\xa0",m.a.createElement(b.a,{color:"link",size:"lg",type:"button",onClick:function(){return e.history.push("/freight/financial")}},"Cancel"))))})}}]);
//# sourceMappingURL=63.2969dc89.chunk.js.map