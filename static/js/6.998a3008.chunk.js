(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{425:function(e,a,t){"use strict";var r=t(3),n=t(10),c=t(0),l=t.n(c),m=t(1),s=t.n(m),o=t(19),p=t.n(o),i=t(107),u={tag:i.l,className:s.a.string,cssModule:s.a.object},h=function(e){var a=e.className,t=e.cssModule,c=e.tag,m=Object(n.a)(e,["className","cssModule","tag"]),s=Object(i.h)(p()(a,"card-footer"),t);return l.a.createElement(c,Object(r.a)({},m,{className:s}))};h.propTypes=u,h.defaultProps={tag:"div"},a.a=h},469:function(e,a,t){"use strict";t.r(a);var r=t(11),n=t(5),c=t.n(n),l=t(9),m=t(109),s=t(0),o=t.n(s),p=t(151),i=t(152),u=t(149),h=t(150),E=t(153),d=t(154),y=t(452),f=t(453),b=t(175),v=t(425),_=t(113),g=t(26);function O(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}a.default=function(){var e=Object(s.useState)({shipper_fname:"",shipper_lname:"",shipper_email:"",shipper_company_name:"",shipper_gst:"",shipper_number:"",shipper_address:""}),a=Object(m.a)(e,2),t=a[0],n=a[1];Object(s.useEffect)(function(){(function(){var e=Object(l.a)(c.a.mark(function e(){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.u)();case 2:a=e.sent,n(a),console.log(a.shipper_address);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[n]);var j=function(e){var a=e.target,c="checkbox"===a.type?a.checked:a.value,l=a.name;n(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?O(t,!0).forEach(function(a){Object(r.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},t,Object(r.a)({},l,c)))},x=function(){var e=Object(l.a)(c.a.mark(function e(a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,Object(g.i)(t);case 4:alert("done"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(JSON.stringify(e.t0));case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(a){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"animated fadeIn user-profile-form"},o.a.createElement(p.a,null,o.a.createElement(i.a,{xs:"9",sm:"12"},o.a.createElement(u.a,null,o.a.createElement(h.a,{className:"profile-card-header"},o.a.createElement("strong",null,"Personal Details")),o.a.createElement(E.a,null,o.a.createElement(d.a,{method:"patch",onSubmit:x},o.a.createElement(y.a,{row:!0,className:"my-0"},o.a.createElement(i.a,{xs:"6",form:!0},o.a.createElement(y.a,null,o.a.createElement(f.a,{htmlFor:"company"},"First Name"),o.a.createElement(b.a,{type:"text",id:"first_name",placeholder:"Enter your company name",name:"shipper_fname",value:t.shipper_fname,onChange:j}))),o.a.createElement(i.a,{xs:"6"},o.a.createElement(y.a,null,o.a.createElement(f.a,{htmlFor:"vat"},"Last Name")),o.a.createElement(b.a,{type:"text",placeholder:"Last Name",id:"last_name",name:"shipper_lname",value:t.shipper_lname,onChange:j}))),o.a.createElement(y.a,{row:!0,className:"my-0"},o.a.createElement(i.a,{xs:"6"},o.a.createElement(y.a,null,o.a.createElement(f.a,{htmlFor:"company"},"Email"),o.a.createElement(b.a,{type:"text",placeholder:"Enter your company name",name:"shipper_email",value:t.shipper_email,onChange:j}))),o.a.createElement(i.a,{xs:"6"},o.a.createElement(y.a,null,o.a.createElement(f.a,{htmlFor:"vat"},"Company Name"),o.a.createElement(b.a,{type:"text",placeholder:"Company Name",id:"company_name",name:"shipper_company_name",value:t.shipper_company_name,onChange:j})))),o.a.createElement(y.a,{row:!0,className:"my-0"},o.a.createElement(i.a,{xs:"6"},o.a.createElement(y.a,null,o.a.createElement(f.a,{htmlFor:"company"},"GST"),o.a.createElement(b.a,{type:"text",placeholder:"Enter your company name",name:"shipper_gst",id:"GST_number",value:t.shipper_gst,onChange:j}))),o.a.createElement(i.a,{xs:"6"},o.a.createElement(y.a,null,o.a.createElement(f.a,{htmlFor:"vat"},"Phone Number"),o.a.createElement(b.a,{type:"text",placeholder:"Phone Number",id:"phone_number",name:"shipper_number",value:t.shipper_number,onChange:j})))),o.a.createElement(h.a,{className:"profile-card-header"},o.a.createElement("strong",null,"Address")),o.a.createElement(y.a,{row:!0,className:"my-0"},o.a.createElement(i.a,{xs:"6"},o.a.createElement(y.a,null,o.a.createElement(f.a,{htmlFor:"company"},"Address"),o.a.createElement(b.a,{type:"text",placeholder:"Enter your company Address",name:"shipper_address",id:"address",value:t.shipper_address,onChange:j})))))),o.a.createElement(v.a,null,o.a.createElement(_.a,{color:"primary",size:"lg",onClick:x},"Create")," \xa0\xa0\xa0",o.a.createElement(_.a,{color:"link",size:"lg"},"Cancel"))))))}}}]);
//# sourceMappingURL=6.998a3008.chunk.js.map