(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{113:function(e,a,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(a,"a",function(){return n})},114:function(e,a,t){"use strict";var n=t(115),l=t(112),r=t(0),c=t.n(r),s=t(117),o=t.n(s),i=t(120),d=t.n(i),u=t(119),m=t.n(u),p=t(38),b=function(e){return c.a.createElement("button",{className:"btn",onClick:function(){e.onExport()}},c.a.createElement("i",{className:"fa fa-download"})," \xa0 Export to CSV")};a.a=function(e){var a=Object(r.useState)(!0),t=Object(l.a)(a,2),i=t[0],u=t[1];Object(r.useEffect)(function(){setTimeout(function(){u(!1)},5e3)},[i]);var f=e.columns,h=e.data,E=void 0===h?[]:h,v=e.right,g=void 0===v?function(){}:v,y=e.left,w=void 0===y?function(){}:y,k=e.refPass,N=void 0===k?function(){}:k,O=e.loading,x=void 0!==O&&O,C=(e.loaded,e.keyField),j=void 0===C?"id":C,R=e.select,S=e.expandRow,T=void 0===S?{}:S,A=e.noDataIndication,F=(void 0===A&&p.a,e.section),P=e.searchClass,z=e.searchContainerClass,B=e.exportAll,I=e.headerClasses,D=Object(n.a)(e,["columns","data","right","left","refPass","loading","loaded","keyField","select","expandRow","noDataIndication","section","searchClass","searchContainerClass","exportAll","headerClasses"]);return c.a.createElement(o.a,{keyField:j,data:E,columns:f,search:!0,exportCSV:{onlyExportSelection:!B,exportAll:!0}},function(e){return c.a.createElement("div",null,c.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},w(e),c.a.createElement("div",{className:z,style:{float:"right",display:"inline-block"}},g(e),"\xa0\xa0\xa0\xa0\xa0",c.a.createElement(b,e.csvProps),"\xa0\xa0\xa0\xa0\xa0",c.a.createElement(s.Search.SearchBar,Object.assign({className:P},e.searchProps)))),F?c.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},F):null,c.a.createElement(d.a,Object.assign({},e.baseProps,{ref:function(e){return N(e)},hover:!0,condensed:!0,bordered:!1,pagination:m()(),selectRow:R,loading:x,expandRow:T,headerClasses:I,noDataIndication:i?p.a:c.a.createElement("div",{className:"w-100"},c.a.createElement("p",null,"No Data"))},D)))})}},115:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(a,"a",function(){return n})},121:function(e,a,t){"use strict";var n=t(4),l=t(10),r=t(113),c=t(27),s=t(0),o=t.n(s),i=t(1),d=t.n(i),u=t(21),m=t.n(u),p=t(109),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.l,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,c=e.className,s=e.close,i=e.cssModule,d=e.color,u=e.outline,b=e.size,f=e.tag,h=e.innerRef,E=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof E.children&&(E.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(u?"-outline":"")+"-"+d,g=Object(p.h)(m()(c,{close:s},s||"btn",s||v,!!b&&"btn-"+b,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),i);E.href&&"button"===f&&(f="a");var y=s?"Close":null;return o.a.createElement(f,Object(n.a)({type:"button"===f&&E.onClick?"button":void 0},E,{className:g,ref:h,onClick:this.onClick,"aria-label":t||y}))},a}(o.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},a.a=f},558:function(e,a,t){"use strict";t.r(a);var n=t(112),l=t(3),r=t.n(l),c=t(6),s=t(0),o=t.n(s),i=t(150),d=t(175),u=t(136),m=t(137),p=t(151),b=t(114),f=t(11),h=t(26),E=t(126),v=t(121),g=t(127),y=t(39),w=[{dataField:"supplier",text:"Supplier Name",sort:!0},{dataField:"least_bid",text:"Bid Amount",sort:!0},{dataField:"confirmed",text:"Status",sort:!0},{dataField:"taken_quizzes",text:"Action",sort:!0,formatter:function(e,a){return o.a.createElement("div",null,o.a.createElement(v.a,{color:"primary",onClick:Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.l)(a.quiz,a.id);case 3:y.a.push("/dashboard/freight/assigned-trucks"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Something went wrong!");case 9:case"end":return e.stop()}},e,null,[[0,6]])}))},"Assign Now!"))}}];a.default=function(e){var a=Object(s.useState)([]),t=Object(n.a)(a,2),l=t[0],v=t[1],y=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],k=Object(g.getStyle)("--primary"),N=Object(g.getStyle)("--danger"),O={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},x=function(e,a){var t=y[e],n={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:a||"#c2cfd6",data:t.data,label:t.label}]};return function(){return n}};return Object(s.useEffect)(function(){(function(){var a=Object(c.a)(r.a.mark(function a(){var t;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return Object(f.f)(),a.next=3,Object(h.V)(e.match.params.id);case 3:t=a.sent,console.log(t,"here are the trucks!!"),v(t);case 6:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}})()()},[]),o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(i.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),"Bids ",o.a.createElement("small",{className:"text-muted"}),o.a.createElement(u.a,null,o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-danger"},o.a.createElement("small",{className:"text-muted"},"Total RFQ Raised"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(E.b,{data:x(1,N),options:O,width:100,height:30})))),o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},"Total Bids received"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(E.b,{data:x(0,k),options:O,width:100,height:30})))),o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},"Total Trucks Assigned"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(E.b,{data:x(0,k),options:O,width:100,height:30})))),o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-danger"},o.a.createElement("small",{className:"text-muted"},"Total Trucks In Transit"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(E.b,{data:x(1,N),options:O,width:100,height:30})))))),o.a.createElement(p.a,null,o.a.createElement(b.a,{data:l.taken_quizzes,columns:w}))))}}}]);
//# sourceMappingURL=16.20b699f8.chunk.js.map