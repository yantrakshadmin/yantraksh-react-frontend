(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{110:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",function(){return n})},113:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},116:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),s=a.n(o),l=a(7),c=a.n(l),i=a(17),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},p=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return a=n=d(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!f(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,o=a.to;r?t.replace(o):t.push(o)}},d(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,s="string"===typeof t?Object(i.createLocation)(t,null,null,o.location):t,l=o.createHref(s);return r.a.createElement("a",u({},n,{onClick:this.handleClick,href:l,ref:a}))},t}(r.a.Component);p.propTypes={onClick:s.a.func,target:s.a.string,replace:s.a.bool,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired,innerRef:s.a.oneOfType([s.a.string,s.a.func])},p.defaultProps={replace:!1},p.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired,createHref:s.a.func.isRequired}).isRequired}).isRequired},t.a=p},117:function(e,t,a){"use strict";var n=a(4),r=a(10),o=a(110),s=a(27),l=a(0),c=a.n(l),i=a(1),u=a.n(i),d=a(21),f=a.n(d),p=a(109),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.l,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,s=e.className,l=e.close,i=e.cssModule,u=e.color,d=e.outline,m=e.size,b=e.tag,h=e.innerRef,g=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,y=Object(p.h)(f()(s,{close:l},l||"btn",l||v,!!m&&"btn-"+m,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),i);g.href&&"button"===b&&(b="a");var E=l?"Close":null;return c.a.createElement(b,Object(n.a)({type:"button"===b&&g.onClick?"button":void 0},g,{className:y,ref:h,onClick:this.onClick,"aria-label":a||E}))},t}(c.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},119:function(e,t,a){"use strict";var n=a(4),r=a(10),o=a(0),s=a.n(o),l=a(1),c=a.n(l),i=a(21),u=a.n(i),d=a(109),f={tag:d.l,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},p=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,l=e.tag,c=e.form,i=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(d.h)(u()(t,o?"no-gutters":null,c?"form-row":"row"),a);return s.a.createElement(l,Object(n.a)({},i,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},120:function(e,t,a){"use strict";var n=a(4),r=a(10),o=a(113),s=a.n(o),l=a(0),c=a.n(l),i=a(1),u=a.n(i),d=a(21),f=a.n(d),p=a(109),m=u.a.oneOfType([u.a.number,u.a.string]),b=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:m,offset:m})]),h={tag:p.l,xs:b,sm:b,md:b,lg:b,xl:b,className:u.a.string,cssModule:u.a.object,widths:u.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,o=e.widths,l=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach(function(t,n){var r=e[t];if(delete i[t],r||""===r){var o=!n;if(s()(r)){var l,c=o?"-":"-"+t+"-",d=v(o,t,r.size);u.push(Object(p.h)(f()(((l={})[d]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l)),a))}else{var m=v(o,t,r);u.push(m)}}}),u.length||u.push("col");var d=Object(p.h)(f()(t,u),a);return c.a.createElement(l,Object(n.a)({},i,{className:d}))};y.propTypes=h,y.defaultProps=g,t.a=y},121:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",function(){return n})},122:function(e,t,a){"use strict";var n=a(121),r=a(111),o=a(0),s=a.n(o),l=a(131),c=a.n(l),i=a(123),u=a.n(i),d=a(132),f=a.n(d),p=a(39),m=function(e){return s.a.createElement("button",{className:"btn",onClick:function(){e.onExport()}},s.a.createElement("i",{className:"fa fa-download"})," \xa0 Export to CSV")};t.a=function(e){var t=Object(o.useState)(!0),a=Object(r.a)(t,2),i=a[0],d=a[1];Object(o.useEffect)(function(){setTimeout(function(){d(!1)},5e3)},[i]);var b=e.columns,h=e.data,g=void 0===h?[]:h,v=e.right,y=void 0===v?function(){}:v,E=e.left,O=void 0===E?function(){}:E,j=e.refPass,w=void 0===j?function(){}:j,N=e.loading,x=void 0!==N&&N,k=(e.loaded,e.keyField),C=void 0===k?"id":k,R=e.select,_=e.expandRow,T=void 0===_?{}:_,P=e.noDataIndication,M=(void 0===P&&p.a,e.section),S=e.searchClass,F=e.searchContainerClass,q=e.exportAll,D=e.headerClasses,A=Object(n.a)(e,["columns","data","right","left","refPass","loading","loaded","keyField","select","expandRow","noDataIndication","section","searchClass","searchContainerClass","exportAll","headerClasses"]);return s.a.createElement(c.a,{keyField:C,data:g,columns:b,search:!0,exportCSV:{onlyExportSelection:!q,exportAll:!0}},function(e){return s.a.createElement("div",null,s.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},O(e),s.a.createElement("div",{className:F,style:{float:"right",display:"inline-block"}},y(e),"\xa0\xa0\xa0\xa0\xa0",s.a.createElement(m,e.csvProps),"\xa0\xa0\xa0\xa0\xa0",s.a.createElement(l.Search.SearchBar,Object.assign({className:S},e.searchProps)))),M?s.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},M):null,s.a.createElement(u.a,Object.assign({},e.baseProps,{wrapperClasses:"table-responsive",ref:function(e){return w(e)},hover:!0,condensed:!0,bordered:!1,pagination:f()(),selectRow:R,loading:x,expandRow:T,headerClasses:D,noDataIndication:i?p.a:s.a.createElement("div",{className:"w-100"},s.a.createElement("p",null,"No Data"))},A)))})}},124:function(e,t,a){"use strict";var n=a(4),r=a(10),o=a(0),s=a.n(o),l=a(1),c=a.n(l),i=a(21),u=a.n(i),d=a(109),f={tag:d.l,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.color,l=e.body,c=e.inverse,i=e.outline,f=e.tag,p=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.h)(u()(t,"card",!!c&&"text-white",!!l&&"card-body",!!o&&(i?"border":"bg")+"-"+o),a);return s.a.createElement(f,Object(n.a)({},m,{className:b,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},125:function(e,t,a){"use strict";var n=a(4),r=a(10),o=a(0),s=a.n(o),l=a(1),c=a.n(l),i=a(21),u=a.n(i),d=a(109),f={tag:d.l,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,l=e.tag,c=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.h)(u()(t,"card-body"),a);return s.a.createElement(l,Object(n.a)({},c,{className:i,ref:o}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},646:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),o=a(6),s=a(111),l=a(0),c=a.n(l),i=a(124),u=a(134),d=a(119),f=a(120),p=a(125),m=a(28),b=a(122),h=a(116),g=a(117);var v=[{dataField:"id",text:"RFQ ID",sort:!0},{dataField:"truck_name",text:"Truck Name",sort:!0},{dataField:"origin",text:"Origin",sort:!0},{dataField:"destination",text:"Destination",sort:!0},{dataField:"total_trucks",text:"Trucks"},{dataField:"weight",text:"Weight",sort:!0},{dataField:"bid_count",text:"Total Bids",sort:!0},{dataField:"posted_on",text:"Date",sort:!0,formatter:function(e,t){return function(e){var t=e.getHours(),a=e.getMinutes(),n=e.getSeconds();return c.a.createElement("span",null,e.getDate(),"-",e.getMonth()+1,"-",e.getFullYear()," ",("0"+t).slice(-2),":",("0"+a).slice(-2),":",("0"+n).slice(-2))}(new Date(t.posted_on))}},{dataField:"status",text:"Status",sort:!0},{dataField:"action",text:"Action",sort:!0,formatter:function(e,t){return c.a.createElement("div",null,c.a.createElement(h.a,{to:{pathname:"/freight/request-for-quotation/bids/".concat(t.id)}},c.a.createElement(g.a,{color:"primary"},"View Bids")))}}],y=a(143),E=a(144);t.default=function(e){Object(l.useState)([{total_time:""},{total_trucks:""},{total_orders:""},{total_orders_planned:""},{total_rfq:""},{total_bids:""},{total_orders_hold:""},{total_orders_delayed:""},{total_orders_pending:""},{total_trucks_assigned:""},{total_trucks_in_transit:""},{total_weight:""},{total_distance:""}]);var t=Object(l.useState)([]),a=Object(s.a)(t,2),n=a[0],O=a[1],j=Object(l.useState)([]),w=Object(s.a)(j,2),N=w[0],x=w[1];Object(l.useEffect)(function(){var e=function(){var e=Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.Vb)();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();(function(){var e=Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.Ab)();case 2:t=e.sent,console.log("kpi data h ye",t),x(t),console.log(x,"<--KPI data");case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()(),e()},[]);var k=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],C=Object(E.getStyle)("--primary"),R=Object(E.getStyle)("--danger"),_={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},T=function(e,t){var a=k[e],n={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:a.data,label:a.label}]};return function(){return n}};return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(i.a,null,c.a.createElement(u.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," Bids ",c.a.createElement("small",{className:"text-muted"}),c.a.createElement(d.a,null,c.a.createElement(f.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-danger"},c.a.createElement("small",{className:"text-muted"},"Total RFQ Raised"),c.a.createElement("br",null),N.map(function(e){return c.a.createElement("strong",{className:"h4"},e.total_rfq)}),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(y.b,{data:T(1,R),options:_,width:100,height:30})))),c.a.createElement(f.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-info"},c.a.createElement("small",{className:"text-muted"},"Total Bids Received"),c.a.createElement("br",null),N.map(function(e){return c.a.createElement("strong",{className:"h4"},e.total_bids)}),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(y.b,{data:T(0,C),options:_,width:100,height:30})))),c.a.createElement(f.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-info"},c.a.createElement("small",{className:"text-muted"},"Total Trucks Assigned"),c.a.createElement("br",null),N.map(function(e){return c.a.createElement("strong",{className:"h4"},e.total_trucks_assigned)}),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(y.b,{data:T(0,C),options:_,width:100,height:30})))),c.a.createElement(f.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-danger"},c.a.createElement("small",{className:"text-muted"},"Total Trucks In Transit"),c.a.createElement("br",null),N.map(function(e){return c.a.createElement("strong",{className:"h4"},e.total_trucks)}),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(y.b,{data:T(1,R),options:_,width:100,height:30})))))),c.a.createElement(p.a,null,c.a.createElement(b.a,{columns:v,data:n,left:function(){return c.a.createElement(h.a,{to:"/freight/request-for-quotation/new"},c.a.createElement(g.a,{color:"primary"},c.a.createElement("i",{className:"fa fa-plus"}),"\xa0\xa0\xa0 New Request for Quotation"))}}))))}}}]);
//# sourceMappingURL=56.5c81b09c.chunk.js.map