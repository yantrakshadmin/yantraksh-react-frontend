(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{114:function(e,t,a){"use strict";var n=a(115),r=a(112),c=a(0),i=a.n(c),l=a(117),o=a.n(l),s=a(120),d=a.n(s),u=a(119),p=a.n(u),m=a(38),f=function(e){return i.a.createElement("button",{className:"btn",onClick:function(){e.onExport()}},i.a.createElement("i",{className:"fa fa-download"})," \xa0 Export to CSV")};t.a=function(e){var t=Object(c.useState)(!0),a=Object(r.a)(t,2),s=a[0],u=a[1];Object(c.useEffect)(function(){setTimeout(function(){u(!1)},5e3)},[s]);var h=e.columns,v=e.data,b=void 0===v?[]:v,g=e.right,E=void 0===g?function(){}:g,y=e.left,O=void 0===y?function(){}:y,x=e.refPass,j=void 0===x?function(){}:x,w=e.loading,k=void 0!==w&&w,_=(e.loaded,e.keyField),N=void 0===_?"id":_,C=e.select,S=e.expandRow,F=void 0===S?{}:S,P=e.noDataIndication,T=(void 0===P&&m.a,e.section),I=e.searchClass,R=e.searchContainerClass,z=e.exportAll,B=e.headerClasses,D=Object(n.a)(e,["columns","data","right","left","refPass","loading","loaded","keyField","select","expandRow","noDataIndication","section","searchClass","searchContainerClass","exportAll","headerClasses"]);return i.a.createElement(o.a,{keyField:N,data:b,columns:h,search:!0,exportCSV:{onlyExportSelection:!z,exportAll:!0}},function(e){return i.a.createElement("div",null,i.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},O(e),i.a.createElement("div",{className:R,style:{float:"right",display:"inline-block"}},E(e),"\xa0\xa0\xa0\xa0\xa0",i.a.createElement(f,e.csvProps),"\xa0\xa0\xa0\xa0\xa0",i.a.createElement(l.Search.SearchBar,Object.assign({className:I},e.searchProps)))),T?i.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},T):null,i.a.createElement(d.a,Object.assign({},e.baseProps,{ref:function(e){return j(e)},hover:!0,condensed:!0,bordered:!1,pagination:p()(),selectRow:C,loading:k,expandRow:F,headerClasses:B,noDataIndication:s?m.a:i.a.createElement("div",{className:"w-100"},i.a.createElement("p",null,"No Data"))},D)))})}},115:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",function(){return n})},123:function(e,t,a){"use strict";a.d(t,"a",function(){return d}),a.d(t,"b",function(){return u}),a.d(t,"c",function(){return p}),a.d(t,"d",function(){return m}),a.d(t,"e",function(){return f});var n=a(3),r=a.n(n),c=a(6),i=a(26),l=a(39),o=a(5),s=a(11),d=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i.F)();case 3:n=e.sent,t({type:o.d,orders:n}),Object(s.e)(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(s.b)();case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,a){return e.apply(this,arguments)}}()},u=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n,c){var l,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=c().data.orders.data,s=l.slice(),n({type:o.c}),a.next=5,Object(i.N)(e);case 5:l.map(function(t,a){return e.includes(t.id)&&(s[a].rtd=!1,s[a].is_dispatched=!1),null}),n({type:o.d,orders:s}),t("/orders/on-hold");case 8:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},p=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n,c){var l,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=c().data.orders.data,s=l.slice(),n({type:o.c}),a.next=5,Object(i.O)(e);case 5:l.map(function(t,a){return e.includes(t.id)&&(s[a].rtd=!0,s[a].is_dispatched=!1),null}),n({type:o.d,orders:s}),t("/orders/ready-to-dispatch");case 8:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,l;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().data.orders.data,l=c.slice(),a({type:o.c}),t.next=5,Object(i.Q)();case 5:c.map(function(e,t){return l[t.rtd]&&(l[t].rtd=!1,l[t].is_dispatched=!0),null}),a({type:o.d,orders:l}),e("/dispatcher");case 8:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},f=function(e,t,a,n){return function(){var n=Object(c.a)(r.a.mark(function n(c,s){var u;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=s().data.orders.data,u.slice(),n.next=4,c({type:o.c});case 4:return n.next=6,Object(i.R)(e,t,a);case 6:d()(c,s),l.a.push("/dashboard/dispatcher");case 8:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}()}},127:function(e,t,a){"use strict";var n=a(33),r=a(34),c=a(36),i=a(35),l=a(40),o=a(37),s=a(3),d=a.n(s),u=a(6),p=a(0),m=a.n(p),f=a(122),h=a(577),v=a(134),b=(a(26),a(121)),g=a(19),E=a(123),y=a(17);function O(e){var t=Object(v.a)(),a=t.acceptedFiles,n=t.getRootProps,r=t.getInputProps;return console.log(a),m.a.createElement("section",null,m.a.createElement("div",Object.assign({},n({className:"dropzone"}),{style:{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",padding:20,textAlign:"center"}}),m.a.createElement("div",null,a[0]?m.a.createElement("div",null,m.a.createElement("h5",null,a[0].path," (",a[0].size/1e3," Kbytes)"),m.a.createElement("br",null),m.a.createElement(f.a,{color:"primary",size:"lg",onClick:Object(u.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.upload(a[0]);case 3:return t.next=5,e.loadOrders();case 5:return t.next=7,e.onClose();case 7:g.b.success("Upload Successful!"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),g.b.error("Upload failed!");case 14:case"end":return t.stop()}},t,null,[[0,10]])}))},m.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"),m.a.createElement(b.a,{to:"/orders/all"}),m.a.createElement(f.a,{color:"error",onClick:function(t){return e.onClose(t)}},"Cancel")):m.a.createElement("div",null,m.a.createElement("i",{className:"icon-cloud-upload",style:{fontSize:"5rem"}}),m.a.createElement("br",null),m.a.createElement("input",r()),m.a.createElement("h3",null,"Drag & drop files here, or click to select files")))))}var x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={modal:!1,backdrop:!0},a.toggle=a.toggle.bind(Object(l.a)(a)),a.changeBackdrop=a.changeBackdrop.bind(Object(l.a)(a)),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"changeBackdrop",value:function(e){var t=e.target.value;"static"!==t&&(t=JSON.parse(t)),this.setState({backdrop:t})}},{key:"render",value:function(){return m.a.createElement("div",{style:{display:"inline-block"}},m.a.createElement(h.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,backdrop:!0,style:{padding:0,height:"50vh",width:"50vw",top:"25%"}},m.a.createElement(O,{loadOrders:this.props.loadOrders,upload:this.props.upload,onClose:this.toggle})),m.a.createElement(f.a,{color:"secondary",style:{backgroundColor:"white"},onClick:this.toggle},m.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"))}}]),t}(m.a.Component);t.a=Object(y.b)(null,{loadOrders:E.a})(x)},548:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(6),i=a(112),l=a(0),o=a.n(l),s=a(150),d=a(175),u=a(140),p=a(141),m=a(151),f=a(117),h=a.n(f),v=a(119),b=a.n(v),g=a(11),E=a(26),y=(a(38),a(121)),O=a(122),x=(a(127),a(125)),j=a(126),w=a(114);function k(e){var t=e.getHours(),a=e.getMinutes(),n=e.getSeconds();return o.a.createElement("span",null,e.getDate(),"-",e.getMonth()+1,"-",e.getFullYear()," ",("0"+t).slice(-2),":",("0"+a).slice(-2),":",("0"+n).slice(-2))}var _=[{dataField:"invoice_quiz",text:"Origin",sort:!0,formatter:function(e,t){return t.invoice_quiz.origin}},{dataField:"invoice_quiz",text:"Destination",sort:!0,formatter:function(e,t){return t.invoice_quiz.destination}},{dataField:"invoice_quiz",text:"Weight",sort:!0,formatter:function(e,t){return t.invoice_quiz.weight}},{dataField:"invoice_quiz",text:"Scheduled Date",sort:!0,formatter:function(e,t){return k(new Date(t.invoice_quiz.scheduled_date))}},{dataField:"invoice_number",text:"Invoice Number",sort:!0},{dataField:"invoice_date",text:"Invoice Date",sort:!0,formatter:function(e,t){return k(new Date(t.invoice_date))}},{dataField:"invoice_salesperson",text:"Billing Party",sort:!0},{dataField:"invoice_amount",text:"Total Amount",sort:!0},{dataField:"invoice_gst",text:"GST Number",sort:!0},{dataField:"Print Invoice",text:"Print Invoice",sort:!0,formatter:function(e,t){return o.a.createElement("div",null,o.a.createElement(y.a,{to:"/supplier/printinvoice/".concat(t.id)},o.a.createElement(O.a,{color:"primary"},console.log(t),"Print Invoice")))}}];t.default=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];Object(l.useEffect)(function(){var e=function(){var e=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(g.f)(),e.next=3,Object(E.I)();case 3:t=e.sent,n(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(g.f)(),e.next=3,Object(E.z)();case 3:t=e.sent,k(t),console.log(t,"kpiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"),console.log(O,"wfnwdiacoaoashoasdosjdoasjdo",k);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e(),t()},[]);var v=Object(l.useState)([{total_time:"0"},{total_trucks:"0"},{total_orders:"0"},{total_orders_planned:"0"},{total_rfq:"0"},{total_bids:"0"},{total_orders_hold:"0"},{total_orders_delayed:"0"},{total_orders_pending:"0"},{total_trucks_assigned:"0"},{total_trucks_in_transit:"0"},{total_weight:"0"},{total_distance:"0"}]),y=Object(i.a)(v,2),O=y[0],k=y[1],N=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],C=Object(j.getStyle)("--primary"),S=Object(j.getStyle)("--danger"),F={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},P=function(e,t){var a=N[e],n={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:a.data,label:a.label}]};return function(){return n}};return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(s.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),"Financials",o.a.createElement("small",{className:"text-muted"}),o.a.createElement(u.a,null,o.a.createElement(p.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-danger"},o.a.createElement("small",{className:"text-muted"},"Total RFQ Raised"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(x.b,{data:P(1,S),options:F,width:100,height:30})))),o.a.createElement(p.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},"Total Bids received"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(x.b,{data:P(0,C),options:F,width:100,height:30})))),o.a.createElement(p.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},"Total Trucks Assigned"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(x.b,{data:P(0,C),options:F,width:100,height:30})))),o.a.createElement(p.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-danger"},o.a.createElement("small",{className:"text-muted"},"Total Trucks In Transit"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(x.b,{data:P(1,S),options:F,width:100,height:30})))))),o.a.createElement(m.a,null,o.a.createElement(h.a,{keyField:"id",data:a,columns:_},function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{paddingTop:10,paddingBottom:10,float:"right"}},"\xa0\xa0\xa0\xa0\xa0",o.a.createElement(f.Search.SearchBar,e.searchProps)),o.a.createElement(w.a,Object.assign({},e.baseProps,{hover:!0,condensed:!0,striped:!0,bordered:!1,pagination:b()()})))}))))}}}]);
//# sourceMappingURL=38.659144f2.chunk.js.map