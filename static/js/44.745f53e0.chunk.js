(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,a){"use strict";var n=a(115),r=a(112),l=a(0),i=a.n(l),s=a(117),c=a.n(s),o=a(120),d=a.n(o),u=a(119),m=a.n(u),p=a(37),f=function(e){return i.a.createElement("button",{className:"btn",onClick:function(){e.onExport()}},i.a.createElement("i",{className:"fa fa-download"})," \xa0 Export to CSV")};t.a=function(e){var t=Object(l.useState)(!0),a=Object(r.a)(t,2),o=a[0],u=a[1];Object(l.useEffect)(function(){setTimeout(function(){u(!1)},5e3)},[o]);var E=e.columns,b=e.data,h=void 0===b?[]:b,g=e.right,v=void 0===g?function(){}:g,y=e.left,_=void 0===y?function(){}:y,w=e.refPass,O=void 0===w?function(){}:w,x=e.loading,N=void 0!==x&&x,k=(e.loaded,e.keyField),j=void 0===k?"id":k,T=e.select,C=e.expandRow,R=void 0===C?{}:C,S=e.noDataIndication,F=(void 0===S&&p.a,e.section),A=e.searchClass,P=e.searchContainerClass,D=e.exportAll,I=e.headerClasses,B=Object(n.a)(e,["columns","data","right","left","refPass","loading","loaded","keyField","select","expandRow","noDataIndication","section","searchClass","searchContainerClass","exportAll","headerClasses"]);return i.a.createElement(c.a,{keyField:j,data:h,columns:E,search:!0,exportCSV:{onlyExportSelection:!D,exportAll:!0}},function(e){return i.a.createElement("div",null,i.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},_(e),i.a.createElement("div",{className:P,style:{float:"right",display:"inline-block"}},v(e),"\xa0\xa0\xa0\xa0\xa0",i.a.createElement(f,e.csvProps),"\xa0\xa0\xa0\xa0\xa0",i.a.createElement(s.Search.SearchBar,Object.assign({className:A},e.searchProps)))),F?i.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},F):null,i.a.createElement(d.a,Object.assign({},e.baseProps,{ref:function(e){return O(e)},hover:!0,condensed:!0,bordered:!1,pagination:m()(),selectRow:T,loading:N,expandRow:R,headerClasses:I,noDataIndication:o?p.a:i.a.createElement("div",{className:"w-100"},i.a.createElement("p",null,"No Data"))},B)))})}},115:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",function(){return n})},570:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),l=a(6),i=a(112),s=a(0),c=a.n(s),o=a(148),d=a(174),u=a(140),m=a(141),p=a(149),f=a(26),E=a(11),b=a(114);var h=[{dataField:"truck_type",text:"Truck Type",sort:!0,formatter:function(e,t){return 1===t.truck_type?"CONTAINER":2===t.truck_type?"TRAILER":3===t.truck_type?"OPEN":void 0}},{dataField:"origin",text:"Origin",sort:!0},{dataField:"destination",text:"Destination",sort:!0},{dataField:"total_trucks",text:"No. of trucks"},{dataField:"material_type",text:"Material Type",sort:!0},{dataField:"scheduled_date",text:"Date",sort:!0,formatter:function(e,t){return function(e){var t=e.getHours(),a=e.getMinutes(),n=e.getSeconds();return c.a.createElement("span",null,e.getDate(),"-",e.getMonth()+1,"-",e.getFullYear()," ",("0"+t).slice(-2),":",("0"+a).slice(-2),":",("0"+n).slice(-2))}(new Date(t.scheduled_date))}},{dataField:"offered_price",text:"Offered Price",sort:!0}],g=a(125),v=a(126);t.default=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],y=Object(s.useState)([{total_time:""},{total_trucks:""},{total_orders:""},{total_orders_planned:""},{total_rfq:""},{total_bids:""},{total_orders_hold:""},{total_orders_delayed:""},{total_orders_pending:""},{total_trucks_assigned:""},{total_trucks_in_transit:""},{total_weight:""},{total_distance:""}]),_=Object(i.a)(y,2),w=_[0],O=_[1];Object(s.useEffect)(function(){var e=function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(E.f)(),e.next=3,Object(f.l)();case 3:t=e.sent,n(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(E.f)(),e.next=3,Object(f.z)();case 3:t=e.sent,O(t),console.log(t,"kpiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"),console.log(w,"wfnwdiacoaoashoasdosjdoasjdo",O);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e(),t()},[]);var x=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],N=Object(v.getStyle)("--primary"),k=Object(v.getStyle)("--danger"),j={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},T=function(e,t){var a=x[e],n={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:a.data,label:a.label}]};return function(){return n}};return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(o.a,null,c.a.createElement(d.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," Assigned Trucks ",c.a.createElement("small",{className:"text-muted"}),c.a.createElement(u.a,null,c.a.createElement(m.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-danger"},c.a.createElement("small",{className:"text-muted"},"Total RFQ Raised"),c.a.createElement("br",null),w.map(function(e){return c.a.createElement("strong",{className:"h4"},e.total_rfq)}),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(g.b,{data:T(1,k),options:j,width:100,height:30})))),c.a.createElement(m.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-info"},c.a.createElement("small",{className:"text-muted"},"Total Bids received"),c.a.createElement("br",null),w.map(function(e){return c.a.createElement("strong",{className:"h4"},e.total_bids)}),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(g.b,{data:T(0,N),options:j,width:100,height:30})))),c.a.createElement(m.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-info"},c.a.createElement("small",{className:"text-muted"},"Total Trucks Assigned"),c.a.createElement("br",null),w.map(function(e){return c.a.createElement("strong",{className:"h4"},e.total_trucks_assigned)}),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(g.b,{data:T(0,N),options:j,width:100,height:30})))),c.a.createElement(m.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-danger"},c.a.createElement("small",{className:"text-muted"},"Total Trucks In Transit"),c.a.createElement("br",null),w.map(function(e){return c.a.createElement("strong",{className:"h4"},e.total_trucks)}),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(g.b,{data:T(1,k),options:j,width:100,height:30})))))),c.a.createElement(p.a,null,c.a.createElement(b.a,{columns:h,data:a}))))}}}]);
//# sourceMappingURL=44.745f53e0.chunk.js.map