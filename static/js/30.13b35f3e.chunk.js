(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{109:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(c){r=!0,l=c}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},112:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",function(){return n})},116:function(e,t,a){"use strict";var n=a(112),r=a(0),l=a.n(r),i=a(117),o=a.n(i),c=a(120),s=a.n(c),d=a(119),u=a.n(d),m=a(35),p=(a(38),function(e){return l.a.createElement("button",{className:"btn",onClick:function(){e.onExport()}},l.a.createElement("i",{className:"fa fa-download"})," \xa0 Export to CSV")});t.a=function(e){var t=e.columns,a=e.data,r=void 0===a?[]:a,c=e.right,d=void 0===c?function(){}:c,f=e.left,v=void 0===f?function(){}:f,b=e.refPass,g=void 0===b?function(){}:b,h=e.loading,E=void 0!==h&&h,y=(e.loaded,e.keyField),w=void 0===y?"id":y,O=e.select,j=e.expandRow,k=void 0===j?{}:j,x=e.noDataIndication,N=(void 0===x&&m.a,e.section),_=Object(n.a)(e,["columns","data","right","left","refPass","loading","loaded","keyField","select","expandRow","noDataIndication","section"]);return l.a.createElement(o.a,{keyField:w,data:r,columns:t,search:!0,exportCSV:{onlyExportSelection:!0,exportAll:!0}},function(e){return l.a.createElement("div",null,l.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},v(e),l.a.createElement("div",{style:{float:"right",display:"inline-block"}},d(e),"\xa0\xa0\xa0\xa0\xa0",l.a.createElement(p,e.csvProps),"\xa0\xa0\xa0\xa0\xa0",l.a.createElement(i.Search.SearchBar,e.searchProps))),N?l.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},N):null,l.a.createElement(s.a,Object.assign({},e.baseProps,{ref:function(e){return g(e)},hover:!0,condensed:!0,bordered:!1,pagination:u()(),selectRow:O,loading:E,expandRow:k},_)))})}},127:function(e,t,a){"use strict";var n=a(32),r=a(33),l=a(36),i=a(34),o=a(39),c=a(37),s=a(5),d=a.n(s),u=a(9),m=a(0),p=a.n(m),f=a(113),v=a(482),b=a(140),g=(a(26),a(114));function h(e){var t=Object(b.a)(),a=t.acceptedFiles,n=t.getRootProps,r=t.getInputProps;return console.log(a),p.a.createElement("section",null,p.a.createElement("div",Object.assign({},n({className:"dropzone"}),{style:{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",padding:20,textAlign:"center"}}),p.a.createElement("div",null,a[0]?p.a.createElement("div",null,p.a.createElement("h5",null,a[0].path," (",a[0].size/1e3," Kbytes)"),p.a.createElement("br",null),p.a.createElement(f.a,{color:"primary",size:"lg",onClick:Object(u.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.upload(a[0]);case 3:alert("Done"),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),alert("Error in uploading. Please ensure file type is correct.");case 10:case"end":return t.stop()}},t,null,[[0,6]])}))},p.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"),p.a.createElement(g.a,{to:"/orders/all"}),p.a.createElement(f.a,{color:"error",onClick:function(t){return e.onClose(t)}},"Cancel")):p.a.createElement("div",null,p.a.createElement("i",{className:"icon-cloud-upload",style:{fontSize:"5rem"}}),p.a.createElement("br",null),p.a.createElement("input",r()),p.a.createElement("h3",null,"Drag & drop files here, or click to select files")))))}var E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={modal:!1,backdrop:!0},a.toggle=a.toggle.bind(Object(o.a)(a)),a.changeBackdrop=a.changeBackdrop.bind(Object(o.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"changeBackdrop",value:function(e){var t=e.target.value;"static"!==t&&(t=JSON.parse(t)),this.setState({backdrop:t})}},{key:"render",value:function(){return p.a.createElement("div",{style:{display:"inline-block"}},p.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,backdrop:!0,style:{padding:0,height:"50vh",width:"50vw",top:"25%"}},p.a.createElement(h,{upload:this.props.upload,onClose:this.toggle})),p.a.createElement(f.a,{color:"secondary",style:{backgroundColor:"white"},onClick:this.toggle},p.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"))}}]),t}(p.a.Component);t.a=E},463:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),l=a(9),i=a(109),o=a(0),c=a.n(o),s=a(149),d=a(150),u=a(151),m=a(152),p=a(153),f=a(117),v=a.n(f),b=a(119),g=a.n(b),h=a(12),E=a(26),y=(a(35),a(114)),w=a(113),O=(a(127),a(121)),j=a(122),k=a(116),x=[{dataField:"invoice_number",text:"Invoice Number",sort:!0},{dataField:"invoice_date",text:"Invoice Date",sort:!0},{dataField:"invoice_salesperson",text:"Billing Party",sort:!0},{dataField:"invoice_amount",text:"Total Amount",sort:!0},{dataField:"invoice_gst",text:"GST Number",sort:!0},{dataField:"Print Invoice",text:"Print Invoice",sort:!0,formatter:function(e,t){return c.a.createElement("div",null,c.a.createElement(y.a,{to:"/supplier/printinvoice/".concat(t.invoice_quiz)},c.a.createElement(w.a,{color:"primary"},"Print Invoice")))}}];t.default=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];Object(o.useEffect)(function(){var e=function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(h.e)(),e.next=3,Object(E.w)();case 3:t=e.sent,n(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(h.e)(),e.next=3,Object(E.p)();case 3:t=e.sent,N(t),console.log(t,"kpiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"),console.log(w,"wfnwdiacoaoashoasdosjdoasjdo",N);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e(),t()},[]);var b=Object(o.useState)([{total_time:"0"},{total_trucks:"0"},{total_orders:"0"},{total_orders_planned:"0"},{total_rfq:"0"},{total_bids:"0"},{total_orders_hold:"0"},{total_orders_delayed:"0"},{total_orders_pending:"0"},{total_trucks_assigned:"0"},{total_trucks_in_transit:"0"},{total_weight:"0"},{total_distance:"0"}]),y=Object(i.a)(b,2),w=y[0],N=y[1],_=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],S=Object(j.getStyle)("--primary"),C=Object(j.getStyle)("--danger"),P={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},T=function(e,t){var a=_[e],n={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:a.data,label:a.label}]};return function(){return n}};return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(s.a,null,c.a.createElement(d.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),"Financials",c.a.createElement("small",{className:"text-muted"}),c.a.createElement(u.a,null,c.a.createElement(m.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-info"},c.a.createElement("small",{className:"text-muted"},"Total Bids received"),c.a.createElement("br",null),c.a.createElement("strong",{className:"h4"},"0"),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(O.b,{data:T(0,S),options:P,width:100,height:30})))),c.a.createElement(m.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-danger"},c.a.createElement("small",{className:"text-muted"},"Total RFQ Raised"),c.a.createElement("br",null),c.a.createElement("strong",{className:"h4"},"0"),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(O.b,{data:T(1,C),options:P,width:100,height:30})))),c.a.createElement(m.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-info"},c.a.createElement("small",{className:"text-muted"},"Total Trucks Assigned"),c.a.createElement("br",null),c.a.createElement("strong",{className:"h4"},"0"),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(O.b,{data:T(0,S),options:P,width:100,height:30})))),c.a.createElement(m.a,{sm:"3"},c.a.createElement("div",{className:"callout callout-danger"},c.a.createElement("small",{className:"text-muted"},"Total Trucks In Transit"),c.a.createElement("br",null),c.a.createElement("strong",{className:"h4"},"0"),c.a.createElement("div",{className:"chart-wrapper"},c.a.createElement(O.b,{data:T(1,C),options:P,width:100,height:30})))))),c.a.createElement(p.a,null,c.a.createElement(v.a,{keyField:"id",data:a,columns:x},function(e){return c.a.createElement("div",null,c.a.createElement("div",{style:{paddingTop:10,paddingBottom:10,float:"right"}},"\xa0\xa0\xa0\xa0\xa0",c.a.createElement(f.Search.SearchBar,e.searchProps)),c.a.createElement(k.a,Object.assign({},e.baseProps,{hover:!0,condensed:!0,striped:!0,bordered:!1,pagination:g()()})))}))))}}}]);
//# sourceMappingURL=30.13b35f3e.chunk.js.map