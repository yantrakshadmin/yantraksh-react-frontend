(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(o){n=!0,l=o}finally{try{r||null==s.return||s.return()}finally{if(n)throw l}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return r})},174:function(e,t,a){"use strict";var r=a(3),n=a(10),l=a(0),c=a.n(l),s=a(1),o=a.n(s),i=a(19),d=a.n(i),u=a(107),m={color:o.a.string,pill:o.a.bool,tag:u.l,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),children:o.a.node,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,l=e.color,s=e.innerRef,o=e.pill,i=e.tag,m=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(u.h)(d()(t,"badge","badge-"+l,!!o&&"badge-pill"),a);return m.href&&"span"===i&&(i="a"),c.a.createElement(i,Object(r.a)({},m,{className:p,ref:s}))};p.propTypes=m,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},461:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a.n(r),l=a(9),c=a(109),s=a(0),o=a.n(s),i=a(174),d=a(149),u=a(150),m=a(151),p=a(152),f=a(153),b=a(117),h=a.n(b),g=a(120),E=a.n(g),y=a(119),v=a.n(y),_=a(12),w=a(26),N=a(35),j=a(121),O=a(122),k=[{dataField:"name",text:"Name",sort:!0},{dataField:"truck_type",text:"Truck Type",sort:!0,formatter:function(e,t){return 1===t.truck_type?o.a.createElement(i.a,{color:"success",style:{width:"100%"}},"Container"):2===t.truck_type?o.a.createElement(i.a,{color:"primary",style:{width:"100%"}},"Trailer"):3===t.truck_type?o.a.createElement(i.a,{color:"warning",style:{width:"100%"}},"Open"):void 0}},{dataField:"origin",text:"Origin",sort:!0},{dataField:"destination",text:"Destination",sort:!0},{dataField:"total_trucks",text:"NO. of trucks"},{dataField:"scheduled_date",text:"Date",sort:!0},{dataField:"offered_price",text:"Offered Price",sort:!0}];t.default=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(s.useState)([{total_time:""},{total_trucks:""},{total_orders:""},{total_orders_planned:""},{total_rfq:""},{total_bids:""},{total_orders_hold:""},{total_orders_delayed:""},{total_orders_pending:""},{total_trucks_assigned:""},{total_trucks_in_transit:""},{total_weight:""},{total_distance:""}]),g=Object(c.a)(i,2),y=g[0],x=g[1],T=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],R=Object(O.getStyle)("--primary"),S=Object(O.getStyle)("--danger"),F={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},A=function(e,t){var a=T[e],r={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:a.data,label:a.label}]};return function(){return r}};return Object(s.useEffect)(function(){var e=function(){var e=Object(l.a)(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(_.e)(),e.next=3,Object(w.A)();case 3:t=e.sent,r(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(l.a)(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(_.e)(),e.next=3,Object(w.p)();case 3:t=e.sent,x(t),console.log(t,"kp"),console.log(y,"wfnwdiacoaoashoasdosjdoasjdo",x);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e(),t()},[]),o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(d.a,null,o.a.createElement(u.a,null,o.a.createElement("i",{className:"fa fa-align-justify"})," Live available trucks ",o.a.createElement("small",{className:"text-muted"}),o.a.createElement(m.a,null,o.a.createElement(p.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},"Total Bids received"),o.a.createElement("br",null),y.map(function(e){return o.a.createElement("strong",{className:"h4"},e.total_bids)}),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(j.b,{data:A(0,R),options:F,width:100,height:30})))),o.a.createElement(p.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-danger"},o.a.createElement("small",{className:"text-muted"},"Total RFQ Raised"),o.a.createElement("br",null),y.map(function(e){return o.a.createElement("strong",{className:"h4"},e.total_rfq)}),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(j.b,{data:A(1,S),options:F,width:100,height:30})))),o.a.createElement(p.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},"Total Trucks Assigned"),o.a.createElement("br",null),y.map(function(e){return o.a.createElement("strong",{className:"h4"},e.total_trucks_assigned)}),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(j.b,{data:A(0,R),options:F,width:100,height:30})))),o.a.createElement(p.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-danger"},o.a.createElement("small",{className:"text-muted"},"Total Trucks In Transit"),o.a.createElement("br",null),y.map(function(e){return o.a.createElement("strong",{className:"h4"},e.total_trucks)}),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(j.b,{data:A(1,S),options:F,width:100,height:30})))))),o.a.createElement(f.a,null,o.a.createElement(h.a,{keyField:"id",data:a,columns:k,search:!0},function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{paddingTop:10,paddingBottom:10,float:"right"}},"\xa0\xa0\xa0\xa0\xa0",o.a.createElement(b.Search.SearchBar,e.searchProps)),o.a.createElement(E.a,Object.assign({},e.baseProps,{hover:!0,condensed:!0,striped:!0,bordered:!1,pagination:v()(),noDataIndication:N.a})))}))))}}}]);
//# sourceMappingURL=38.e5c2021a.chunk.js.map