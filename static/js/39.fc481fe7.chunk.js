(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(s){n=!0,l=s}finally{try{r||null==c.return||c.return()}finally{if(n)throw l}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return r})},174:function(e,t,a){"use strict";var r=a(3),n=a(10),l=a(0),i=a.n(l),c=a(1),s=a.n(c),o=a(19),d=a.n(o),u=a(107),m={color:s.a.string,pill:s.a.bool,tag:u.l,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),children:s.a.node,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,a=e.cssModule,l=e.color,c=e.innerRef,s=e.pill,o=e.tag,m=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(u.h)(d()(t,"badge","badge-"+l,!!s&&"badge-pill"),a);return m.href&&"span"===o&&(o="a"),i.a.createElement(o,Object(r.a)({},m,{className:p,ref:c}))};p.propTypes=m,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},447:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a.n(r),l=a(9),i=a(109),c=a(0),s=a.n(c),o=a(174),d=a(149),u=a(150),m=a(151),p=a(152),f=a(153),b=a(117),h=a.n(b),g=a(120),E=a.n(g),y=a(119),v=a.n(y),w=a(12),_=a(26),j=a(35),N=a(121),O=a(122),x=[{dataField:"id",text:"RFQ ID",sort:!0},{dataField:"origin",text:"Origin",sort:!0},{dataField:"destination",text:"Destination",sort:!0},{dataField:"truck_type",text:"Truck Type",sort:!0,formatter:function(e,t){return 1===t.truck_type?s.a.createElement(o.a,{color:"success",style:{width:"100%"}},"Container"):2===t.truck_type?s.a.createElement(o.a,{color:"primary",style:{width:"100%"}},"Trailer"):3===t.truck_type?s.a.createElement(o.a,{color:"warning",style:{width:"100%"}},"Open"):void 0}},{dataField:"total_name",text:"Truck Name"},{dataField:"scheduled_date",text:"Date",sort:!0},{dataField:"status",text:"Status",sort:!0},{dataField:"offered_price",text:"Offered Price",sort:!0}];t.default=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)([{total_time:"0"},{total_trucks:"0"},{total_orders:"0"},{total_orders_planned:"0"},{total_rfq:"0"},{total_bids:"0"},{total_orders_hold:"0"},{total_orders_delayed:"0"},{total_orders_pending:"0"},{total_trucks_assigned:"0"},{total_trucks_in_transit:"0"},{total_weight:"0"},{total_distance:"0"}]),g=Object(i.a)(o,2),y=g[0],k=g[1];Object(c.useEffect)(function(){var e=function(){var e=Object(l.a)(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(w.e)(),e.next=3,Object(_.A)();case 3:t=e.sent,r(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(l.a)(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(w.e)(),e.next=3,Object(_.p)();case 3:t=e.sent,k(t),console.log(t,"kpiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"),console.log(y,"wfnwdiacoaoashoasdosjdoasjdo",k);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e(),t()},[]);var T=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],F=Object(O.getStyle)("--primary"),R=Object(O.getStyle)("--danger"),S={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},A=function(e,t){var a=T[e],r={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:a.data,label:a.label}]};return function(){return r}};return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(d.a,null,s.a.createElement(u.a,null,s.a.createElement("i",{className:"fa fa-align-justify"})," Active Trucks ",s.a.createElement("small",{className:"text-muted"}),s.a.createElement(m.a,null,s.a.createElement(p.a,{sm:"3"},s.a.createElement("div",{className:"callout callout-info"},s.a.createElement("small",{className:"text-muted"},"Total Bids received"),s.a.createElement("br",null),s.a.createElement("strong",{className:"h4"},"0"),s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(N.b,{data:A(0,F),options:S,width:100,height:30})))),s.a.createElement(p.a,{sm:"3"},s.a.createElement("div",{className:"callout callout-danger"},s.a.createElement("small",{className:"text-muted"},"Total RFQ Raised"),s.a.createElement("br",null),s.a.createElement("strong",{className:"h4"},"0"),s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(N.b,{data:A(1,R),options:S,width:100,height:30})))),s.a.createElement(p.a,{sm:"3"},s.a.createElement("div",{className:"callout callout-info"},s.a.createElement("small",{className:"text-muted"},"Total Trucks Assigned"),s.a.createElement("br",null),s.a.createElement("strong",{className:"h4"},"0"),s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(N.b,{data:A(0,F),options:S,width:100,height:30})))),s.a.createElement(p.a,{sm:"3"},s.a.createElement("div",{className:"callout callout-danger"},s.a.createElement("small",{className:"text-muted"},"Total Trucks In Transit"),s.a.createElement("br",null),s.a.createElement("strong",{className:"h4"},"0"),s.a.createElement("div",{className:"chart-wrapper"},s.a.createElement(N.b,{data:A(1,R),options:S,width:100,height:30})))))),s.a.createElement(f.a,null,s.a.createElement(h.a,{keyField:"id",data:a,columns:x,search:!0},function(e){return s.a.createElement("div",null,s.a.createElement("div",{style:{paddingTop:10,paddingBottom:10,float:"right"}},"\xa0\xa0\xa0\xa0\xa0",s.a.createElement(b.Search.SearchBar,e.searchProps)),s.a.createElement(E.a,Object.assign({},e.baseProps,{hover:!0,condensed:!0,striped:!0,bordered:!1,pagination:v()(),noDataIndication:j.a})))}))))}}}]);
//# sourceMappingURL=39.fc481fe7.chunk.js.map