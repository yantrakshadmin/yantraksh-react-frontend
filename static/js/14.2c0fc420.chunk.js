(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{114:function(e,t,a){"use strict";var n=a(115),r=a(112),l=a(0),c=a.n(l),o=a(117),i=a.n(o),s=a(120),d=a.n(s),u=a(119),p=a.n(u),m=a(37),h=function(e){return c.a.createElement("button",{className:"btn",onClick:function(){e.onExport()}},c.a.createElement("i",{className:"fa fa-download"})," \xa0 Export to CSV")};t.a=function(e){var t=Object(l.useState)(!0),a=Object(r.a)(t,2),s=a[0],u=a[1];Object(l.useEffect)(function(){setTimeout(function(){u(!1)},5e3)},[s]);var f=e.columns,g=e.data,b=void 0===g?[]:g,E=e.right,v=void 0===E?function(){}:E,k=e.left,y=void 0===k?function(){}:k,O=e.refPass,x=void 0===O?function(){}:O,j=e.loading,w=void 0!==j&&j,C=(e.loaded,e.keyField),S=void 0===C?"id":C,T=e.select,N=e.expandRow,_=void 0===N?{}:N,D=e.noDataIndication,F=(void 0===D&&m.a,e.section),R=e.searchClass,M=e.searchContainerClass,A=e.exportAll,P=e.headerClasses,I=Object(n.a)(e,["columns","data","right","left","refPass","loading","loaded","keyField","select","expandRow","noDataIndication","section","searchClass","searchContainerClass","exportAll","headerClasses"]);return c.a.createElement(i.a,{keyField:S,data:b,columns:f,search:!0,exportCSV:{onlyExportSelection:!A,exportAll:!0}},function(e){return c.a.createElement("div",null,c.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},y(e),c.a.createElement("div",{className:M,style:{float:"right",display:"inline-block"}},v(e),"\xa0\xa0\xa0\xa0\xa0",c.a.createElement(h,e.csvProps),"\xa0\xa0\xa0\xa0\xa0",c.a.createElement(o.Search.SearchBar,Object.assign({className:R},e.searchProps)))),F?c.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},F):null,c.a.createElement(d.a,Object.assign({},e.baseProps,{ref:function(e){return x(e)},hover:!0,condensed:!0,bordered:!1,pagination:p()(),selectRow:T,loading:w,expandRow:_,headerClasses:P,noDataIndication:s?m.a:c.a.createElement("div",{className:"w-100"},c.a.createElement("p",null,"No Data"))},I)))})}},123:function(e,t,a){"use strict";a.d(t,"a",function(){return d}),a.d(t,"b",function(){return u}),a.d(t,"c",function(){return p}),a.d(t,"d",function(){return m}),a.d(t,"e",function(){return h});var n=a(3),r=a.n(n),l=a(6),c=a(26),o=a(38),i=a(5),s=a(11),d=function(){return function(){var e=Object(l.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.F)();case 3:n=e.sent,t({type:i.d,orders:n}),Object(s.e)(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(s.b)();case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,a){return e.apply(this,arguments)}}()},u=function(e,t){return function(){var a=Object(l.a)(r.a.mark(function a(n,l){var o,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o=l().data.orders.data,s=o.slice(),n({type:i.c}),a.next=5,Object(c.N)(e);case 5:o.map(function(t,a){return e.includes(t.id)&&(s[a].rtd=!1,s[a].is_dispatched=!1),null}),n({type:i.d,orders:s}),t("/orders/on-hold");case 8:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},p=function(e,t){return function(){var a=Object(l.a)(r.a.mark(function a(n,l){var o,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o=l().data.orders.data,s=o.slice(),n({type:i.c}),a.next=5,Object(c.O)(e);case 5:o.map(function(t,a){return e.includes(t.id)&&(s[a].rtd=!0,s[a].is_dispatched=!1),null}),n({type:i.d,orders:s}),t("/orders/ready-to-dispatch");case 8:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(l.a)(r.a.mark(function t(a,n){var l,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=n().data.orders.data,o=l.slice(),a({type:i.c}),t.next=5,Object(c.Q)();case 5:l.map(function(e,t){return o[t.rtd]&&(o[t].rtd=!1,o[t].is_dispatched=!0),null}),a({type:i.d,orders:o}),e("/dispatcher");case 8:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},h=function(e,t,a,n){return function(){var n=Object(l.a)(r.a.mark(function n(l,s){var u;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=s().data.orders.data,u.slice(),n.next=4,l({type:i.c});case 4:return n.next=6,Object(c.R)(e,t,a);case 6:d()(l,s),o.a.push("/dashboard/dispatcher");case 8:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}()}},127:function(e,t,a){"use strict";var n=a(32),r=a(33),l=a(36),c=a(34),o=a(39),i=a(35),s=a(3),d=a.n(s),u=a(6),p=a(0),m=a.n(p),h=a(122),f=a(567),g=a(134),b=(a(26),a(121)),E=a(19),v=a(123),k=a(17);function y(e){var t=Object(g.a)(),a=t.acceptedFiles,n=t.getRootProps,r=t.getInputProps;return console.log(a),m.a.createElement("section",null,m.a.createElement("div",Object.assign({},n({className:"dropzone"}),{style:{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",padding:20,textAlign:"center"}}),m.a.createElement("div",null,a[0]?m.a.createElement("div",null,m.a.createElement("h5",null,a[0].path," (",a[0].size/1e3," Kbytes)"),m.a.createElement("br",null),m.a.createElement(h.a,{color:"primary",size:"lg",onClick:Object(u.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.upload(a[0]);case 3:return t.next=5,e.loadOrders();case 5:return t.next=7,e.onClose();case 7:E.b.success("Upload Successful!"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),E.b.error("Upload failed!");case 14:case"end":return t.stop()}},t,null,[[0,10]])}))},m.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"),m.a.createElement(b.a,{to:"/orders/all"}),m.a.createElement(h.a,{color:"error",onClick:function(t){return e.onClose(t)}},"Cancel")):m.a.createElement("div",null,m.a.createElement("i",{className:"icon-cloud-upload",style:{fontSize:"5rem"}}),m.a.createElement("br",null),m.a.createElement("input",r()),m.a.createElement("h3",null,"Drag & drop files here, or click to select files")))))}var O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={modal:!1,backdrop:!0},a.toggle=a.toggle.bind(Object(o.a)(a)),a.changeBackdrop=a.changeBackdrop.bind(Object(o.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"changeBackdrop",value:function(e){var t=e.target.value;"static"!==t&&(t=JSON.parse(t)),this.setState({backdrop:t})}},{key:"render",value:function(){return m.a.createElement("div",{style:{display:"inline-block"}},m.a.createElement(f.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,backdrop:!0,style:{padding:0,height:"50vh",width:"50vw",top:"25%"}},m.a.createElement(y,{loadOrders:this.props.loadOrders,upload:this.props.upload,onClose:this.toggle})),m.a.createElement(h.a,{color:"secondary",style:{backgroundColor:"white"},onClick:this.toggle},m.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"))}}]),t}(m.a.Component);t.a=Object(k.b)(null,{loadOrders:v.a})(O)},130:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"d",function(){return l}),a.d(t,"b",function(){return c});var n="All Items",r="Items On Hold",l="Ready to Dispatch",c="Dispatched Items"},135:function(e,t,a){"use strict";var n=a(3),r=a.n(n),l=a(6),c=a(20),o=a(32),i=a(33),s=a(36),d=a(34),u=a(35),p=a(0),m=a.n(p),h=a(151),f=a.n(h),g=a(427),b=a(122),E=a(567),v=a(530),k=a(531),y=a(195),O=a(532),x=a(150),j=a(140),w=a(141),C=a(148),S=a(174),T=a(149),N=a(436),_=a(437),D=a(438),F=a(152),R=a(153),M=a(123),A=a(17),P=a(130),I=a(11),V=a(178),H=a(127),U=a(114),B=a(194);var z=[{dataField:"Name",text:"Name",sort:!0},{dataField:"pid",text:"SKU ID",sort:!0},{dataField:"Quantity",text:"Quantity",sort:!0},{dataField:"Height",text:"Dimension",isDummyField:!0,formatter:function(e,t){return m.a.createElement("div",null,t.Length," x ",t.Breadth," x ",t.Height)}},{dataField:"Weight",text:"Weight",sort:!0},{dataField:"Volume",text:"Volume",sort:!0},{dataField:"origin",text:"Origin",sort:!0},{dataField:"destination",text:"Destination",sort:!0},{dataField:"date",text:"Date",sort:!0,formatter:function(e,t){return function(e){var t=e.getHours(),a=e.getMinutes(),n=e.getSeconds();return m.a.createElement("span",null,e.getDate(),"-",e.getMonth()+1,"-",e.getFullYear()," ",("0"+t).slice(-2),":",("0"+a).slice(-2),":",("0"+n).slice(-2))}(new Date(t.date))}},{dataField:"truck_type",text:"Truck Type",isDummyField:!0,formatExtraData:function(e){return"Open"===e.truck_type?m.a.createElement(B.a,{style:{width:"100%",color:"white",backgroundColor:"#eb6b56"}},e.truck_type):"Container"===e.truck_type?m.a.createElement(B.a,{style:{width:"100%",color:"white",backgroundColor:"#3e6787"}},e.truck_type):"Trailer"===e.truck_type?m.a.createElement(B.a,{style:{width:"100%",color:"white",backgroundColor:"#47b39d"}},e.truck_type):void 0},formatter:function(e,t,a,n){return n(t)},align:"center"},{dataField:"rtd",text:"Status",isDummyField:!0,formatExtraData:function(e){return e.is_dispatched?m.a.createElement(B.a,{color:"success",style:{width:"100%"}},"Dispatched"):e.rtd?m.a.createElement(B.a,{color:"primary",style:{width:"100%"}},"RTD"):m.a.createElement(B.a,{color:"warning",style:{width:"100%"}},"On Hold")},formatter:function(e,t,a,n){return n(t)},align:"center"}],W=a(41),J=a(126),K=a(125),Q=a(26),q=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;console.log(r,l);var c=[];return e.map(function(e){if(r||l){var o=e.origin.toUpperCase()===r||"-"===r,i=e.destination.toUpperCase()===l||"-"===l;if(!o||!i)return null}return e.is_dispatched||e.rtd||!t?e.rtd&&!e.is_dispatched&&a?(c.push(e),null):e.is_dispatched&&!e.rtd&&n?(c.push(e),null):void 0:(c.push(e),null)}),c},L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).refPass=function(e){a.tableNode=e},a.getSelectedData=function(){return a.tableNode.selectionContext.selected},a.checkOriginDestinationMatch=function(){for(var e=a.getSelectedData().map(function(e){return function(e,t){for(var a=0;a<t.length;a++)if(t[a].id===e)return t[a]}(e,a.props.orders)}),t=!0,n=0;n<e.length-1;n++)if(e[n].origin!==e[n+1].origin||e[n].destination!==e[n+1].destination){t=!1;break}return t},a.checkTruckTypeMatch=function(){for(var e=a.getSelectedData().map(function(e){return function(e,t){for(var a=0;a<t.length;a++)if(t[a].id===e)return t[a]}(e,a.props.orders)}),t=!0,n=0;n<e.length-1;n++)if(e[n].truck_type!==e[n+1].truck_type){t=!1;break}return t},a.handleOnSelect=function(e,t){t?a.setState(function(){return{selected:[].concat(Object(c.a)(a.state.selected),[e.id])}}):a.setState(function(){return{selected:a.state.selected.filter(function(t){return t!==e.id})}})},a.handleOnSelectAll=function(e,t){var n=t.map(function(e){return e.id});e?a.setState(function(){return{selected:n}}):a.setState(function(){return{selected:[]}})},a.state={kpi:[{total_time:""},{total_trucks:""},{total_orders:""},{total_orders_planned:""},{total_rfq:""},{total_bids:""},{total_orders_hold:""},{total_orders_delayed:""},{total_orders_pending:""},{total_trucks_assigned:""},{total_trucks_in_transit:""},{total_weight:""},{total_distance:""}],modal:!1,trucks:[],selectedTruck:[],truckType:"",noOfTrucks:1,originSelected:"-",destinationSelected:"-",selected:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"markHold",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getSelectedData(),e.next=3,this.props.markHold(t,this.props.history.push);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"markRTD",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getSelectedData(),e.next=3,this.props.markRTD(t,this.props.history.push);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"planVehicle",value:function(){this.props.planVehicle(this.props.history.push)}},{key:"planVehicleManually",value:function(){this.props.planVehicleManually(this.state.selectedTruck,this.getSelectedData(),this.state.noOfTrucks,this.props.history.push)}},{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Q.z)();case 3:return t=e.sent,e.next=6,Object(Q.j)();case 6:a=e.sent,this.setState({kpi:t,trucks:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:this.props.loaded||this.props.getOrders();case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"modalToggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this,t=this.props,a=t.orders,n=void 0===a?[]:a,r=t.title,l=t.rtd,c=void 0!==l&&l,o=t.hold,i=void 0!==o&&o,s=t.dispatched,d=void 0!==s&&s,u=t.loading,p=t.loaded,h=t.getOrders,M=t.changing,A=t.props;console.log("RTD: ",c),console.log("Hold: ",i),console.log("Dispatched: ",d);var V=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],B=Object(J.getStyle)("--primary"),L=Object(J.getStyle)("--danger"),Y={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},Z=function(e,t){var a=V[e],n={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:a.data,label:a.label}]};return function(){return n}},G=m.a.createElement(E.a,{isOpen:this.state.modal,toggle:this.modalToggle.bind(this),className:this.props.className},m.a.createElement(v.a,{toggle:this.toggle},"Select Truck"),m.a.createElement(k.a,null,this.tableNode?this.checkOriginDestinationMatch()&&this.checkTruckTypeMatch()?m.a.createElement("div",null,m.a.createElement("h1",null,"Select truck"),m.a.createElement("br",null),m.a.createElement("label",{htmlFor:"truck-type"},"Truck Type"),m.a.createElement(y.a,{type:"select",name:"truck-type",id:"truck-type",onChange:function(t){e.setState({truckType:t.target.value})}},m.a.createElement("option",{value:"open"},"Open"),m.a.createElement("option",{value:"container"},"Container"),m.a.createElement("option",{value:"trailer"},"Trailer")),m.a.createElement("br",null),m.a.createElement("label",{htmlFor:"truck"},"Truck"),m.a.createElement(y.a,{type:"select",name:"truck",id:"truck",onChange:function(t){e.setState({selectedTruck:t.target.value})}},m.a.createElement("option",{disabled:!0,selected:!0},"---- Select ---"),f.a.uniqBy(this.state.trucks,"display_name").map(function(t){if(t.Category.toUpperCase()===e.state.truckType.toUpperCase())return m.a.createElement("option",{value:t.id},t.display_name)})),m.a.createElement("br",null),m.a.createElement("label",null,"No of Trucks"),m.a.createElement("br",null),m.a.createElement(g.a,null,m.a.createElement(b.a,{color:"primary",onClick:function(){e.state.noOfTrucks>1&&e.setState(function(e){return{noOfTrucks:e.noOfTrucks-1}})}},m.a.createElement(F.a,{icon:R.a})),m.a.createElement(b.a,{color:"light"},this.state.noOfTrucks),m.a.createElement(b.a,{color:"primary",onClick:function(){e.setState(function(e){return{noOfTrucks:e.noOfTrucks+1}})}},m.a.createElement(F.a,{icon:R.b})))):m.a.createElement("div",null,m.a.createElement("h1",null,"Please Reselect Items."),"Origin-Destination of all Items doesn't match OR Truck types are not same!"):"Data Not Loaded"),m.a.createElement(O.a,null,m.a.createElement(b.a,{color:"success",onClick:this.planVehicleManually.bind(this),disabled:null===this.state.selectedTruck&&this.tableNode&&this.checkOriginDestinationMatch()},"PACKITEMS")," ",m.a.createElement(b.a,{color:"secondary",onClick:this.modalToggle.bind(this)},"Cancel"))),X=m.a.createElement("div",null,m.a.createElement(x.a,null,m.a.createElement(j.a,{form:!0},m.a.createElement(w.a,{md:2},m.a.createElement(y.a,{type:"select",onChange:function(t){return e.setState({originSelected:t.target.value})}},m.a.createElement("option",{selected:!0,value:"-"},"----- Origin -----"),n.map(function(e){return e.origin}).filter(function(e,t,a){return a.indexOf(e)===t}).map(function(e){return m.a.createElement("option",{value:e.toUpperCase()},e)}))),m.a.createElement(w.a,{md:1,style:{textAlign:"center"}},"to"),m.a.createElement(w.a,{md:2},m.a.createElement(y.a,{type:"select",onChange:function(t){return e.setState({destinationSelected:t.target.value})}},m.a.createElement("option",{selected:!0,value:"-"},"----- Destination -----"),n.map(function(e){return e.destination}).filter(function(e,t,a){return a.indexOf(e)===t}).map(function(e){return m.a.createElement("option",{value:e.toUpperCase()},e)}))))));return m.a.createElement("div",null,m.a.createElement(C.a,null,m.a.createElement(S.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),r,m.a.createElement(j.a,null,m.a.createElement(w.a,{sm:"3"},m.a.createElement("div",{className:"callout callout-info"},m.a.createElement("small",{className:"text-muted"},"Total Orders"),m.a.createElement("br",null),this.state.kpi.map(function(e){return m.a.createElement("strong",{className:"h4"},e.total_orders)}),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(K.b,{data:Z(0,B),options:Y,width:100,height:30})))),m.a.createElement(w.a,{sm:"3"},m.a.createElement("div",{className:"callout callout-danger"},m.a.createElement("small",{className:"text-muted"},"Planned Orders"),m.a.createElement("br",null),this.state.kpi.map(function(e){return m.a.createElement("strong",{className:"h4"},e.total_orders_planned)}),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(K.b,{data:Z(1,L),options:Y,width:100,height:30})))),m.a.createElement(w.a,{sm:"3"},m.a.createElement("div",{className:"callout callout-info"},m.a.createElement("small",{className:"text-muted"},"Pending Orders"),m.a.createElement("br",null),this.state.kpi.map(function(e){return m.a.createElement("strong",{className:"h4"},e.total_orders_pending)}),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(K.b,{data:Z(0,B),options:Y,width:100,height:30})))),m.a.createElement(w.a,{sm:"3"},m.a.createElement("div",{className:"callout callout-danger"},m.a.createElement("small",{className:"text-muted"},"Delayed Orders"),m.a.createElement("br",null),this.state.kpi.map(function(e){return m.a.createElement("strong",{className:"h4"},e.total_orders_delayed)}),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(K.b,{data:Z(1,L),options:Y,width:100,height:30}))))),m.a.createElement("small",{className:"text-muted"}),m.a.createElement("span",{style:{float:"right"}},M?m.a.createElement(W.a,null):null)),m.a.createElement(T.a,null,m.a.createElement(N.a,{tabs:!0},m.a.createElement(_.a,null,m.a.createElement(D.a,{href:"/#/dashboard/orders",active:r===P.a},P.a)),m.a.createElement(_.a,null,m.a.createElement(D.a,{href:"/#/dashboard/orders/on-hold",active:r===P.c},P.c)),m.a.createElement(_.a,null,m.a.createElement(D.a,{href:"/#/dashboard/orders/ready-to-dispatch",active:r===P.d},P.d)),m.a.createElement(_.a,null,m.a.createElement(D.a,{href:"/#/dashboard/orders/dispatched",active:r===P.b},P.b))),m.a.createElement(U.a,Object.assign({data:q(n,i,c,d,this.state.originSelected,this.state.destinationSelected),loading:u,loaded:p,columns:z,right:function(e){return m.a.createElement("div",{style:{display:"inline-block"}},r===P.a?m.a.createElement(H.a,{upload:Q.Z}):null,"\xa0\xa0\xa0\xa0\xa0",m.a.createElement(b.a,{color:"link",onClick:function(){Object(I.f)(),h()}},m.a.createElement("i",{className:"fa fa-refresh"})," \xa0 Refresh"))},left:function(t){return m.a.createElement("div",{style:{display:"inline-block"}},m.a.createElement(g.a,null,m.a.createElement(b.a,{color:"warning",onClick:e.markHold.bind(e),disabled:r===P.c},"\xa0 Mark Hold"),m.a.createElement(b.a,{color:"primary",onClick:e.markRTD.bind(e),disabled:r===P.d},m.a.createElement("i",{className:"fa fa-share"})," \xa0 Ready to Dispatch")),"\xa0\xa0\xa0\xa0\xa0",m.a.createElement(g.a,null,r===P.d?m.a.createElement(b.a,{color:"success",onClick:e.planVehicle.bind(e),disabled:r===P.b},m.a.createElement("i",{className:"fa fa-rocket"})," \xa0 Auto-dispatch"):null,"\xa0",r===P.d?m.a.createElement(b.a,{color:"success",onClick:function(){e.setState({truckType:"open"}),e.modalToggle()},disabled:r===P.b},"Manual-dispatch"):null))},keyField:"id",select:{mode:"checkbox",selected:this.state.selected,onSelect:this.handleOnSelect,onSelectAll:this.handleOnSelectAll,clickToSelect:!0},refPass:this.refPass.bind(this),section:X},A)))),G)}}]),t}(p.Component);t.a=Object(V.a)(Object(A.b)(function(e){return{loading:e.data.orders.loading,loaded:e.data.orders.loaded,changing:e.data.orders.changing}},function(e){return{getOrders:function(){return e(Object(M.a)())},markHold:function(t,a){return e(Object(M.b)(t,a))},markRTD:function(t,a){return e(Object(M.c)(t,a))},planVehicle:function(t){return e(Object(M.d)(t))},planVehicleManually:function(t,a,n){return e(Object(M.e)(t,a,n))}}})(L))},529:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(0),l=a.n(r),c=a(135),o=a(130),i=a(17);t.default=Object(i.b)(function(e){return{orders:e.data.orders.data}})(function(e){var t;return l.a.createElement(c.a,(t={title:o.a,orders:e.orders,rtd:!0,dispatched:!0,hold:!0},Object(n.a)(t,"dispatched",!0),Object(n.a)(t,"disableAutoDispatch",!0),Object(n.a)(t,"disableManualDispatch",!0),t))})}}]);
//# sourceMappingURL=14.2c0fc420.chunk.js.map