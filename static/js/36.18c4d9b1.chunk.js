(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{109:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},127:function(e,t,a){"use strict";var n=a(32),r=a(33),l=a(36),i=a(34),c=a(39),o=a(37),s=a(5),d=a.n(s),u=a(9),m=a(0),p=a.n(m),v=a(113),h=a(482),E=a(140),b=(a(26),a(114));function f(e){var t=Object(E.a)(),a=t.acceptedFiles,n=t.getRootProps,r=t.getInputProps;return console.log(a),p.a.createElement("section",null,p.a.createElement("div",Object.assign({},n({className:"dropzone"}),{style:{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",padding:20,textAlign:"center"}}),p.a.createElement("div",null,a[0]?p.a.createElement("div",null,p.a.createElement("h5",null,a[0].path," (",a[0].size/1e3," Kbytes)"),p.a.createElement("br",null),p.a.createElement(v.a,{color:"primary",size:"lg",onClick:Object(u.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.upload(a[0]);case 3:alert("Done"),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),alert("Error in uploading. Please ensure file type is correct.");case 10:case"end":return t.stop()}},t,null,[[0,6]])}))},p.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"),p.a.createElement(b.a,{to:"/orders/all"}),p.a.createElement(v.a,{color:"error",onClick:function(t){return e.onClose(t)}},"Cancel")):p.a.createElement("div",null,p.a.createElement("i",{className:"icon-cloud-upload",style:{fontSize:"5rem"}}),p.a.createElement("br",null),p.a.createElement("input",r()),p.a.createElement("h3",null,"Drag & drop files here, or click to select files")))))}var g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={modal:!1,backdrop:!0},a.toggle=a.toggle.bind(Object(c.a)(a)),a.changeBackdrop=a.changeBackdrop.bind(Object(c.a)(a)),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"changeBackdrop",value:function(e){var t=e.target.value;"static"!==t&&(t=JSON.parse(t)),this.setState({backdrop:t})}},{key:"render",value:function(){return p.a.createElement("div",{style:{display:"inline-block"}},p.a.createElement(h.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,backdrop:!0,style:{padding:0,height:"50vh",width:"50vw",top:"25%"}},p.a.createElement(f,{upload:this.props.upload,onClose:this.toggle})),p.a.createElement(v.a,{color:"secondary",style:{backgroundColor:"white"},onClick:this.toggle},p.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"))}}]),t}(p.a.Component);t.a=g},450:function(e,t,a){"use strict";a.r(t);var n=a(109),r=a(5),l=a.n(r),i=a(9),c=a(0),o=a.n(c),s=a(149),d=a(150),u=a(151),m=a(152),p=a(153),v=a(117),h=a.n(v),E=a(120),b=a.n(E),f=a(119),g=a.n(f),y=a(12),j=a(26),w=a(35),O=a(114),k=a(113),N=a(127),x=a(121),_=a(122),S=[{dataField:"invoice_number",text:"Invoice Number",sort:!0},{dataField:"invoice_date",text:"Invoice Date",sort:!0},{dataField:"invoice_salesperson",text:"Billing Party",sort:!0},{dataField:"invoice_amount",text:"Total Amount",sort:!0},{dataField:"invoice_gst",text:"GST Number",sort:!0},{dataField:"invoice_quiz",text:"Edit Invoice",sort:!0,formatter:function(e,t){return o.a.createElement("div",null,o.a.createElement(O.a,{to:"/supplier/invoice/".concat(t.invoice_quiz,"/")},o.a.createElement(k.a,{color:"primary"},"Edit Invoice")))}},{dataField:"Print Invoice",text:"Print Invoice",sort:!0,formatter:function(e,t){return o.a.createElement("div",null,o.a.createElement(O.a,{to:"/supplier/printinvoice/".concat(t.invoice_quiz)},o.a.createElement(k.a,{color:"primary"},"Print Invoice")))}},{dataField:"Upload POD",text:"Upload POD",sort:!0,isDummyField:!0,formatter:function(e,t){return o.a.createElement("div",null,o.a.createElement(N.a,{upload:function(){var e=Object(i.a)(l.a.mark(function e(a){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.N)(a,t.invoice_quiz);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),types:["*"]}))}}];t.default=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],r=t[1];Object(c.useEffect)(function(){var e=function(){var e=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(y.e)(),e.next=3,Object(j.x)();case 3:t=e.sent,r(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(y.e)(),e.next=3,Object(j.p)();case 3:t=e.sent,k(t),console.log(t,"kpiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"),console.log(O,"wfnwdiacoaoashoasdosjdoasjdo",k);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e(),t()},[]);var E=Object(c.useState)([{total_time:"0"},{total_trucks:"0"},{total_orders:"0"},{total_orders_planned:"0"},{total_rfq:"0"},{total_bids:"0"},{total_orders_hold:"0"},{total_orders_delayed:"0"},{total_orders_pending:"0"},{total_trucks_assigned:"0"},{total_trucks_in_transit:"0"},{total_weight:"0"},{total_distance:"0"}]),f=Object(n.a)(E,2),O=f[0],k=f[1],N=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],C=Object(_.getStyle)("--primary"),F=Object(_.getStyle)("--danger"),T={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},I=function(e,t){var a=N[e],n={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:a.data,label:a.label}]};return function(){return n}};return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(s.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),"Financials",o.a.createElement("small",{className:"text-muted"}),o.a.createElement(u.a,null,o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},"Total Bids received"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(x.b,{data:I(0,C),options:T,width:100,height:30})))),o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-danger"},o.a.createElement("small",{className:"text-muted"},"Total RFQ Raised"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(x.b,{data:I(1,F),options:T,width:100,height:30})))),o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},"Total Trucks Assigned"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(x.b,{data:I(0,C),options:T,width:100,height:30})))),o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-danger"},o.a.createElement("small",{className:"text-muted"},"Total Trucks In Transit"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(x.b,{data:I(1,F),options:T,width:100,height:30})))))),o.a.createElement(p.a,null,o.a.createElement(h.a,{keyField:"id",data:a,columns:S,search:!0},function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{paddingTop:10,paddingBottom:10,float:"right"}},"\xa0\xa0\xa0\xa0\xa0",o.a.createElement(v.Search.SearchBar,e.searchProps)),o.a.createElement(b.a,Object.assign({},e.baseProps,{hover:!0,condensed:!0,striped:!0,bordered:!1,pagination:g()(),noDataIndication:w.a})))}))))}}}]);
//# sourceMappingURL=36.18c4d9b1.chunk.js.map