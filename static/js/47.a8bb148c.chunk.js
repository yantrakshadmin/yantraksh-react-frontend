(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{123:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return u}),a.d(t,"c",function(){return d}),a.d(t,"d",function(){return m}),a.d(t,"e",function(){return p});var n=a(3),r=a.n(n),i=a(6),c=a(26),l=(a(39),a(5)),o=a(11),s=function(){return function(){var e=Object(i.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.G)();case 3:n=e.sent,t({type:l.d,orders:n}),Object(o.e)(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(o.b)();case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,a){return e.apply(this,arguments)}}()},u=function(e,t){return function(){var a=Object(i.a)(r.a.mark(function a(n,i){var o,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o=i().data.orders.data,s=o.slice(),n({type:l.c}),a.next=5,Object(c.O)(e);case 5:o.map(function(t,a){return e.includes(t.id)&&(s[a].rtd=!1,s[a].is_dispatched=!1),null}),n({type:l.d,orders:s}),t("/orders/on-hold");case 8:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},d=function(e,t){return function(){var a=Object(i.a)(r.a.mark(function a(n,i){var o,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o=i().data.orders.data,s=o.slice(),n({type:l.c}),a.next=5,Object(c.P)(e);case 5:o.map(function(t,a){return e.includes(t.id)&&(s[a].rtd=!0,s[a].is_dispatched=!1),null}),n({type:l.d,orders:s}),t("/orders/ready-to-dispatch");case 8:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(r.a.mark(function t(a,n){var i,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=n().data.orders.data,o=i.slice(),a({type:l.c}),t.next=5,Object(c.R)();case 5:i.map(function(e,t){return o[t.rtd]&&(o[t].rtd=!1,o[t].is_dispatched=!0),null}),a({type:l.d,orders:o}),e("/dispatcher");case 8:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},p=function(e,t,a,n){return function(){var n=Object(i.a)(r.a.mark(function n(i,o){var u;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=o().data.orders.data,u.slice(),n.next=4,i({type:l.c});case 4:return n.next=6,Object(c.S)(e,t,a);case 6:s()(i,o);case 7:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}()}},128:function(e,t,a){"use strict";var n=a(33),r=a(34),i=a(36),c=a(35),l=a(40),o=a(37),s=a(3),u=a.n(s),d=a(6),m=a(0),p=a.n(m),f=a(121),v=a(578),h=a(134),b=(a(26),a(122)),g=a(19),E=a(123),y=a(17);function O(e){var t=Object(h.a)(),a=t.acceptedFiles,n=t.getRootProps,r=t.getInputProps;return console.log(a),p.a.createElement("section",null,p.a.createElement("div",Object.assign({},n({className:"dropzone"}),{style:{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",padding:20,textAlign:"center"}}),p.a.createElement("div",null,a[0]?p.a.createElement("div",null,p.a.createElement("h5",null,a[0].path," (",a[0].size/1e3," Kbytes)"),p.a.createElement("br",null),p.a.createElement(f.a,{color:"primary",size:"lg",onClick:Object(d.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.upload(a[0]);case 3:return t.next=5,e.loadOrders();case 5:return t.next=7,e.onClose();case 7:g.b.success("Upload Successful!"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),g.b.error("Upload failed!");case 14:case"end":return t.stop()}},t,null,[[0,10]])}))},p.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"),p.a.createElement(b.a,{to:"/orders/all"}),p.a.createElement(f.a,{color:"error",onClick:function(t){return e.onClose(t)}},"Cancel")):p.a.createElement("div",null,p.a.createElement("i",{className:"icon-cloud-upload",style:{fontSize:"5rem"}}),p.a.createElement("br",null),p.a.createElement("input",r()),p.a.createElement("h3",null,"Drag & drop files here, or click to select files")))))}var x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={modal:!1,backdrop:!0},a.toggle=a.toggle.bind(Object(l.a)(a)),a.changeBackdrop=a.changeBackdrop.bind(Object(l.a)(a)),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"changeBackdrop",value:function(e){var t=e.target.value;"static"!==t&&(t=JSON.parse(t)),this.setState({backdrop:t})}},{key:"render",value:function(){return p.a.createElement("div",{style:{display:"inline-block"}},p.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,backdrop:!0,style:{padding:0,height:"50vh",width:"50vw",top:"25%"}},p.a.createElement(O,{loadOrders:this.props.loadOrders,upload:this.props.upload,onClose:this.toggle})),p.a.createElement(f.a,{color:"secondary",style:{backgroundColor:"white"},onClick:this.toggle},p.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"))}}]),t}(p.a.Component);t.a=Object(y.b)(null,{loadOrders:E.a})(x)},533:function(e,t,a){"use strict";a.r(t);var n=a(112),r=a(3),i=a.n(r),c=a(6),l=a(0),o=a.n(l),s=a(150),u=a(175),d=a(136),m=a(137),p=a(151),f=a(117),v=a.n(f),h=a(120),b=a.n(h),g=a(119),E=a.n(g),y=a(11),O=a(26),x=a(38),j=a(122),w=a(121),_=a(128),k=a(126),N=a(127);function F(e){var t=e.getHours(),a=e.getMinutes(),n=e.getSeconds();return o.a.createElement("span",null,e.getDate(),"-",e.getMonth()+1,"-",e.getFullYear()," ",("0"+t).slice(-2),":",("0"+a).slice(-2),":",("0"+n).slice(-2))}var S=[{dataField:"invoice_quiz",text:"Origin",sort:!0,formatter:function(e,t){return t.invoice_quiz.origin}},{dataField:"invoice_quiz",text:"Destination",sort:!0,formatter:function(e,t){return t.invoice_quiz.destination}},{dataField:"invoice_quiz",text:"Weight",sort:!0,formatter:function(e,t){return t.invoice_quiz.weight}},{dataField:"invoice_quiz",text:"Scheduled Date",sort:!0,formatter:function(e,t){return F(new Date(t.invoice_quiz.scheduled_date))}},{dataField:"invoice_number",text:"Invoice Number",sort:!0},{dataField:"invoice_date",text:"Invoice Date",sort:!0,formatter:function(e,t){return F(new Date(t.invoice_date))}},{dataField:"invoice_salesperson",text:"Billing Party",sort:!0},{dataField:"invoice_amount",text:"Total Amount",sort:!0},{dataField:"invoice_gst",text:"GST Number",sort:!0},{dataField:"invoice_quiz",text:"Edit Invoice",sort:!0,formatter:function(e,t){return o.a.createElement("div",null,o.a.createElement(j.a,{to:"/supplier/invoice/".concat(t.id,"/")},o.a.createElement(w.a,{color:"primary"},"Edit Invoice")))}},{dataField:"Print Invoice",text:"Print Invoice",sort:!0,formatter:function(e,t){return o.a.createElement("div",null,o.a.createElement(j.a,{to:"/supplier/printinvoice/".concat(t.id)},o.a.createElement(w.a,{color:"primary"},"Print Invoice")))}},{dataField:"Upload POD",text:"Upload POD",sort:!0,isDummyField:!0,formatter:function(e,t){return o.a.createElement("div",null,o.a.createElement(_.a,{upload:function(){var e=Object(c.a)(i.a.mark(function e(a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.bb)(a,t.invoice_quiz);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),types:["*"]}))}}];t.default=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),a=t[0],r=t[1];Object(l.useEffect)(function(){var e=function(){var e=Object(c.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(y.f)(),e.next=3,Object(O.K)();case 3:t=e.sent,console.log(t),r(t);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(c.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(y.f)(),e.next=3,Object(O.A)();case 3:t=e.sent,w(t),console.log(t,"kpiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"),console.log(j,"wfnwdiacoaoashoasdosjdoasjdo",w);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e(),t()},[]);var h=Object(l.useState)([{total_time:"0"},{total_trucks:"0"},{total_orders:"0"},{total_orders_planned:"0"},{total_rfq:"0"},{total_bids:"0"},{total_orders_hold:"0"},{total_orders_delayed:"0"},{total_orders_pending:"0"},{total_trucks_assigned:"0"},{total_trucks_in_transit:"0"},{total_weight:"0"},{total_distance:"0"}]),g=Object(n.a)(h,2),j=g[0],w=g[1],_=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],F=Object(N.getStyle)("--primary"),C=Object(N.getStyle)("--danger"),z={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},T=function(e,t){var a=_[e],n={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:a.data,label:a.label}]};return function(){return n}};return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),"Financials",o.a.createElement("small",{className:"text-muted"}),o.a.createElement(d.a,null,o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},"Total Bids received"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(k.b,{data:T(0,F),options:z,width:100,height:30})))),o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-danger"},o.a.createElement("small",{className:"text-muted"},"Total RFQ Raised"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(k.b,{data:T(1,C),options:z,width:100,height:30})))),o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-info"},o.a.createElement("small",{className:"text-muted"},"Total Trucks Assigned"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(k.b,{data:T(0,F),options:z,width:100,height:30})))),o.a.createElement(m.a,{sm:"3"},o.a.createElement("div",{className:"callout callout-danger"},o.a.createElement("small",{className:"text-muted"},"Total Trucks In Transit"),o.a.createElement("br",null),o.a.createElement("strong",{className:"h4"},"0"),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(k.b,{data:T(1,C),options:z,width:100,height:30})))))),o.a.createElement(p.a,null,o.a.createElement(v.a,{keyField:"id",data:a,columns:S,search:!0},function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{paddingTop:10,paddingBottom:10,float:"right"}},"\xa0\xa0\xa0\xa0\xa0",o.a.createElement(f.Search.SearchBar,e.searchProps)),o.a.createElement(b.a,Object.assign({},e.baseProps,{hover:!0,condensed:!0,striped:!0,bordered:!1,pagination:E()(),noDataIndication:x.a})))}))))}}}]);
//# sourceMappingURL=47.a8bb148c.chunk.js.map