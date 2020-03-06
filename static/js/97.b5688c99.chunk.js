(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{116:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1),c=a.n(o),l=a(7),i=a.n(l),u=a(17),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=Array(n),c=0;c<n;c++)o[c]=arguments[c];return a=r=s(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!f(e)){e.preventDefault();var t=r.context.router.history,a=r.props,n=a.replace,o=a.to;n?t.replace(o):t.push(o)}},s(r,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(u.createLocation)(t,null,null,o.location):t,l=o.createHref(c);return n.a.createElement("a",p({},r,{onClick:this.handleClick,href:l,ref:a}))},t}(n.a.Component);m.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=m},624:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),o=a(6),c=a(11),l=a(111),i=a(0),u=a.n(i),p=a(124),s=a(134),f=a(125),m=a(133),d=a(119),h=a(120),y=a(137),b=a(138),E=a(135),v=a(117),g=(a(344),a(28)),O=a(116),k=a(24);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}t.default=function(){var e=Object(i.useState)({name:"",truck_type:"",origin:"",destination:"",total_trucks:"",scheduled_date:"",offered_price:""}),t=Object(l.a)(e,2),a=t[0],r=t[1],w=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,o=t.name;r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a,Object(c.a)({},o,n)))},_=function(){var e=Object(o.a)(n.a.mark(function e(t){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log(a),e.next=5,Object(g.Tb)(a);case 5:k.a.push("/dashboard/freight/active-trucks"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(p.a,null,u.a.createElement(s.a,null,u.a.createElement("strong",null,"Post Truck")),u.a.createElement(f.a,null,u.a.createElement(m.a,{method:"post",onSubmit:_},u.a.createElement(d.a,null,u.a.createElement(h.a,{md:4},u.a.createElement(y.a,null,u.a.createElement(b.a,{for:"name"},"Truck Name"),u.a.createElement(E.a,{type:"text",name:"name",id:"name",onChange:w,value:a.name}))),u.a.createElement(h.a,{md:4},u.a.createElement(y.a,null,u.a.createElement(b.a,{for:"origin"},"Origin"),u.a.createElement(E.a,{type:"text",name:"origin",id:"origin",onChange:w,value:a.origin,placeholder:"ex: Delhi"}))),u.a.createElement(h.a,{md:4},u.a.createElement(y.a,null,u.a.createElement(b.a,{for:"destination"},"Destination"),u.a.createElement(E.a,{type:"text",name:"destination",id:"destination",onChange:w,value:a.destination,placeholder:"ex: Mumbai"}))),u.a.createElement(h.a,{md:4},u.a.createElement(y.a,null,u.a.createElement(b.a,{for:"scheduled_date"},"Departure Date and Time"),u.a.createElement(E.a,{type:"datetime-local",name:"scheduled_date",id:"scheduled_date",value:a.scheduled_date,onChange:w})))),u.a.createElement(d.a,null,u.a.createElement(h.a,{lg:4},u.a.createElement(y.a,null,u.a.createElement(b.a,{for:"truck_type"},"Truck Type"),u.a.createElement(E.a,{type:"select",name:"truck_type",id:"truck_type",onChange:w},u.a.createElement("option",{selected:!0,disabled:!0},"---- Select ----"),u.a.createElement("option",{value:"1"},"Open"),u.a.createElement("option",{value:"2"},"Container"),u.a.createElement("option",{value:"3"},"Trailer")))),u.a.createElement(h.a,{lg:4},u.a.createElement(y.a,null,u.a.createElement(b.a,{for:"total_trucks"},"Number of Trucks"),u.a.createElement(E.a,{type:"number",name:"total_trucks",id:"total_trucks",value:a.total_trucks,onChange:w}))),u.a.createElement(h.a,{md:4},u.a.createElement(y.a,null,u.a.createElement(b.a,{for:"offered_price"},"Offered Price"),u.a.createElement(E.a,{type:"number",name:"offered_price",id:"offered_price",value:a.offered_price,onChange:w})))),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(v.a,{color:"primary",size:"lg"},"Create")," \xa0\xa0\xa0",u.a.createElement(O.a,{to:"/freight/available-loads"},u.a.createElement(v.a,{color:"link",size:"lg"},"Cancel")))))}}}]);
//# sourceMappingURL=97.b5688c99.chunk.js.map