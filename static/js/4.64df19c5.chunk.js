(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{112:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",function(){return n})},116:function(e,t,a){"use strict";var n=a(112),r=a(0),l=a.n(r),c=a(117),s=a.n(c),i=a(120),o=a.n(i),d=a(119),u=a.n(d),p=a(35),m=(a(38),function(e){return l.a.createElement("button",{className:"btn",onClick:function(){e.onExport()}},l.a.createElement("i",{className:"fa fa-download"})," \xa0 Export to CSV")});t.a=function(e){var t=e.columns,a=e.data,r=void 0===a?[]:a,i=e.right,d=void 0===i?function(){}:i,f=e.left,h=void 0===f?function(){}:f,b=e.refPass,g=void 0===b?function(){}:b,v=e.loading,y=void 0!==v&&v,E=(e.loaded,e.keyField),O=void 0===E?"id":E,j=e.select,k=e.expandRow,N=void 0===k?{}:k,x=e.noDataIndication,w=(void 0===x&&p.a,e.section),C=Object(n.a)(e,["columns","data","right","left","refPass","loading","loaded","keyField","select","expandRow","noDataIndication","section"]);return l.a.createElement(s.a,{keyField:O,data:r,columns:t,search:!0,exportCSV:{onlyExportSelection:!0,exportAll:!0}},function(e){return l.a.createElement("div",null,l.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},h(e),l.a.createElement("div",{style:{float:"right",display:"inline-block"}},d(e),"\xa0\xa0\xa0\xa0\xa0",l.a.createElement(m,e.csvProps),"\xa0\xa0\xa0\xa0\xa0",l.a.createElement(c.Search.SearchBar,e.searchProps))),w?l.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},w):null,l.a.createElement(o.a,Object.assign({},e.baseProps,{ref:function(e){return g(e)},hover:!0,condensed:!0,bordered:!1,pagination:u()(),selectRow:j,loading:y,expandRow:N},C)))})}},127:function(e,t,a){"use strict";var n=a(32),r=a(33),l=a(36),c=a(34),s=a(39),i=a(37),o=a(5),d=a.n(o),u=a(9),p=a(0),m=a.n(p),f=a(113),h=a(482),b=a(140),g=(a(26),a(114));function v(e){var t=Object(b.a)(),a=t.acceptedFiles,n=t.getRootProps,r=t.getInputProps;return console.log(a),m.a.createElement("section",null,m.a.createElement("div",Object.assign({},n({className:"dropzone"}),{style:{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",padding:20,textAlign:"center"}}),m.a.createElement("div",null,a[0]?m.a.createElement("div",null,m.a.createElement("h5",null,a[0].path," (",a[0].size/1e3," Kbytes)"),m.a.createElement("br",null),m.a.createElement(f.a,{color:"primary",size:"lg",onClick:Object(u.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.upload(a[0]);case 3:alert("Done"),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),alert("Error in uploading. Please ensure file type is correct.");case 10:case"end":return t.stop()}},t,null,[[0,6]])}))},m.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"),m.a.createElement(g.a,{to:"/orders/all"}),m.a.createElement(f.a,{color:"error",onClick:function(t){return e.onClose(t)}},"Cancel")):m.a.createElement("div",null,m.a.createElement("i",{className:"icon-cloud-upload",style:{fontSize:"5rem"}}),m.a.createElement("br",null),m.a.createElement("input",r()),m.a.createElement("h3",null,"Drag & drop files here, or click to select files")))))}var y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={modal:!1,backdrop:!0},a.toggle=a.toggle.bind(Object(s.a)(a)),a.changeBackdrop=a.changeBackdrop.bind(Object(s.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"changeBackdrop",value:function(e){var t=e.target.value;"static"!==t&&(t=JSON.parse(t)),this.setState({backdrop:t})}},{key:"render",value:function(){return m.a.createElement("div",{style:{display:"inline-block"}},m.a.createElement(h.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,backdrop:!0,style:{padding:0,height:"50vh",width:"50vw",top:"25%"}},m.a.createElement(v,{upload:this.props.upload,onClose:this.toggle})),m.a.createElement(f.a,{color:"secondary",style:{backgroundColor:"white"},onClick:this.toggle},m.a.createElement("i",{className:"icon-cloud-upload"})," \xa0 Upload"))}}]),t}(m.a.Component);t.a=y},130:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"d",function(){return l}),a.d(t,"b",function(){return c});var n="All Orders",r="On Hold Orders",l="Ready to dispatched",c="Dispatched Orders"},137:function(e,t,a){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,c=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,d=o&&o(Object);e.exports=function e(t,a,u){if("string"!==typeof a){if(d){var p=o(a);p&&p!==d&&e(t,p,u)}var m=c(a);s&&(m=m.concat(s(a)));for(var f=0;f<m.length;++f){var h=m[f];if(!n[h]&&!r[h]&&(!u||!u[h])){var b=i(a,h);try{l(t,h,b)}catch(g){}}}return t}return t}},139:function(e,t,a){"use strict";var n=a(5),r=a.n(n),l=a(9),c=a(21),s=a(32),i=a(33),o=a(36),d=a(34),u=a(37),p=a(0),m=a.n(p),f=a(399),h=a(113),b=a(482),g=a(3),v=a(10),y=a(1),E=a.n(y),O=a(19),j=a.n(O),k=a(107),N={tag:k.l,wrapTag:k.l,toggle:E.a.func,className:E.a.string,cssModule:E.a.object,children:E.a.node,closeAriaLabel:E.a.string,charCode:E.a.oneOfType([E.a.string,E.a.number]),close:E.a.object},x=function(e){var t,a=e.className,n=e.cssModule,r=e.children,l=e.toggle,c=e.tag,s=e.wrapTag,i=e.closeAriaLabel,o=e.charCode,d=e.close,u=Object(v.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),p=Object(k.h)(j()(a,"modal-header"),n);if(!d&&l){var f="number"===typeof o?String.fromCharCode(o):o;t=m.a.createElement("button",{type:"button",onClick:l,className:Object(k.h)("close",n),"aria-label":i},m.a.createElement("span",{"aria-hidden":"true"},f))}return m.a.createElement(s,Object(g.a)({},u,{className:p}),m.a.createElement(c,{className:Object(k.h)("modal-title",n)},r),d||t)};x.propTypes=N,x.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215};var w=x,C={tag:k.l,className:E.a.string,cssModule:E.a.object},S=function(e){var t=e.className,a=e.cssModule,n=e.tag,r=Object(v.a)(e,["className","cssModule","tag"]),l=Object(k.h)(j()(t,"modal-body"),a);return m.a.createElement(n,Object(g.a)({},r,{className:l}))};S.propTypes=C,S.defaultProps={tag:"div"};var T=S,R=a(175),M={tag:k.l,className:E.a.string,cssModule:E.a.object},P=function(e){var t=e.className,a=e.cssModule,n=e.tag,r=Object(v.a)(e,["className","cssModule","tag"]),l=Object(k.h)(j()(t,"modal-footer"),a);return m.a.createElement(n,Object(g.a)({},r,{className:l}))};P.propTypes=M,P.defaultProps={tag:"div"};var D=P,_=a(154),z=a(151),F=a(152),A=a(149),V=a(150),B=a(153),U=a(405),I=a(406),H=a(407),L=a(26),W=a(4),J=a(12),K=function(){return function(){var e=Object(l.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(L.t)();case 3:n=e.sent,t({type:W.d,orders:n}),Object(J.d)(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(J.a)();case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,a){return e.apply(this,arguments)}}()},q=a(17),Q=a(130),G=a(158),X=a(127),Y=a(116),Z=a(174),$=[{dataField:"name",text:"Name",sort:!0},{dataField:"pid",text:"SKU ID",sort:!0},{dataField:"quantity",text:"Quantity",sort:!0},{dataField:"height",text:"Dimension",isDummyField:!0,formatter:function(e,t){return m.a.createElement("div",null,t.length," x ",t.width," x ",t.height)}},{dataField:"weight",text:"Weight",sort:!0},{dataField:"volume",text:"Volume",sort:!0},{dataField:"origin",text:"Origin",sort:!0},{dataField:"destination",text:"Destination",sort:!0},{dataField:"date",text:"Date",sort:!0},{dataField:"rtd",text:"Status",isDummyField:!0,formatExtraData:function(e){return e.is_dispatched?m.a.createElement(Z.a,{color:"success",style:{width:"100%"}},"Dispatched"):e.rtd?m.a.createElement(Z.a,{color:"primary",style:{width:"100%"}},"RTD"):m.a.createElement(Z.a,{color:"warning",style:{width:"100%"}},"On Hold")},formatter:function(e,t,a,n){return n(t)},align:"center"}],ee=a(38),te=a(122),ae=a(121),ne=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;console.log(r,l);var c=[];return e.map(function(e){if(r||l){var s=e.origin.toUpperCase()===r||"-"===r,i=e.destination.toUpperCase()===l||"-"===l;if(!s||!i)return null}return e.is_dispatched||e.rtd||!t||c.push(e),e.is_dispatched&&n&&c.push(e),e.rtd&&a&&c.push(e),null}),c},re=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).refPass=function(e){a.tableNode=e},a.getSelectedData=function(){return a.tableNode.selectionContext.selected},a.checkOriginDestinationMatch=function(){for(var e=a.getSelectedData().map(function(e){return function(e,t){for(var a=0;a<t.length;a++)if(t[a].id===e)return t[a]}(e,a.props.orders)}),t=!0,n=0;n<e.length-1;n++)if(e[n].origin!==e[n+1].origin||e[n].destination!==e[n+1].destination){t=!1;break}return t},a.handleOnSelect=function(e,t){t?a.setState(function(){return{selected:[].concat(Object(c.a)(a.state.selected),[e.id])}}):a.setState(function(){return{selected:a.state.selected.filter(function(t){return t!==e.id})}})},a.handleOnSelectAll=function(e,t){var n=t.map(function(e){return e.id});e?a.setState(function(){return{selected:n}}):a.setState(function(){return{selected:[]}})},a.state={kpi:[{total_time:""},{total_trucks:""},{total_orders:""},{total_orders_planned:""},{total_rfq:""},{total_bids:""},{total_orders_hold:""},{total_orders_delayed:""},{total_orders_pending:""},{total_trucks_assigned:""},{total_trucks_in_transit:""},{total_weight:""},{total_distance:""}],modal:!1,trucks:[],selectedTruck:[],truckType:"",originSelected:"-",destinationSelected:"-",selected:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"markHold",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getSelectedData(),e.next=3,this.props.markHold(t,this.props.history.push);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"markRTD",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getSelectedData(),e.next=3,this.props.markRTD(t,this.props.history.push);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"planVehicle",value:function(){this.props.planVehicle(this.props.history.push)}},{key:"planVehicleManually",value:function(){this.props.planVehicleManually(this.state.selectedTruck,this.getSelectedData(),this.props.history.push)}},{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(L.p)();case 3:return t=e.sent,e.next=6,Object(L.b)();case 6:a=e.sent,this.setState({kpi:t,trucks:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:this.props.loaded||this.props.getOrders();case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"modalToggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this,t=this.props,a=t.orders,n=void 0===a?[]:a,r=t.title,l=t.rtd,c=void 0!==l&&l,s=t.hold,i=void 0!==s&&s,o=t.dispatched,d=void 0!==o&&o,u=t.loading,p=t.loaded,g=t.getOrders,v=t.changing,y=t.props,E=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],O=Object(te.getStyle)("--primary"),j=Object(te.getStyle)("--danger"),k={tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},N=function(e,t){var a=E[e],n={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:t||"#c2cfd6",data:a.data,label:a.label}]};return function(){return n}},x=m.a.createElement(b.a,{isOpen:this.state.modal,toggle:this.modalToggle.bind(this),className:this.props.className},m.a.createElement(w,{toggle:this.toggle},"Select Truck"),m.a.createElement(T,null,this.tableNode?this.checkOriginDestinationMatch()?m.a.createElement("div",null,m.a.createElement("h1",null,"Select truck"),m.a.createElement(R.a,{type:"select",name:"truck-type",id:"truck-type",onChange:function(t){e.setState({truckType:t.target.value})}},m.a.createElement("option",{value:"open"},"Open"),m.a.createElement("option",{value:"container"},"Container"),m.a.createElement("option",{value:"trailer"},"Trailer")),m.a.createElement("br",null),",",m.a.createElement(R.a,{type:"select",name:"truck",id:"truck",onChange:function(t){e.setState({selectedTruck:t.target.value})}},m.a.createElement("option",{disabled:!0,selected:!0},"---- Select ---"),this.state.trucks.map(function(t){return t.Category.toUpperCase()===e.state.truckType.toUpperCase()?m.a.createElement("option",{value:t.id},t.display_name):null}))):m.a.createElement("div",null,m.a.createElement("h1",null,"Please reselect items."),"Origin destination of all items don't match"):"Data Not Loaded"),m.a.createElement(D,null,m.a.createElement(h.a,{color:"success",onClick:this.planVehicleManually.bind(this),disabled:null===this.state.selectedTruck&&this.tableNode&&this.checkOriginDestinationMatch()},"PACK ITEMS")," ",m.a.createElement(h.a,{color:"secondary",onClick:this.modalToggle.bind(this)},"Cancel"))),C=m.a.createElement("div",null,m.a.createElement(_.a,null,m.a.createElement(z.a,{form:!0},m.a.createElement(F.a,{md:2},m.a.createElement(R.a,{type:"select",onChange:function(t){return e.setState({originSelected:t.target.value})}},m.a.createElement("option",{selected:!0,value:"-"},"----- Origin -----"),n.map(function(e){return e.origin}).filter(function(e,t,a){return a.indexOf(e)===t}).map(function(e){return m.a.createElement("option",{value:e.toUpperCase()},e)}))),m.a.createElement(F.a,{md:1,style:{textAlign:"center"}},"to"),m.a.createElement(F.a,{md:2},m.a.createElement(R.a,{type:"select",onChange:function(t){return e.setState({destinationSelected:t.target.value})}},m.a.createElement("option",{selected:!0,value:"-"},"----- Destination -----"),n.map(function(e){return e.destination}).filter(function(e,t,a){return a.indexOf(e)===t}).map(function(e){return m.a.createElement("option",{value:e.toUpperCase()},e)}))))));return m.a.createElement("div",null,m.a.createElement(A.a,null,m.a.createElement(V.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),r,m.a.createElement(z.a,null,m.a.createElement(F.a,{sm:"3"},m.a.createElement("div",{className:"callout callout-info"},m.a.createElement("small",{className:"text-muted"},"Total Orders"),m.a.createElement("br",null),this.state.kpi.map(function(e){return m.a.createElement("strong",{className:"h4"},e.total_orders)}),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(ae.b,{data:N(0,O),options:k,width:100,height:30})))),m.a.createElement(F.a,{sm:"3"},m.a.createElement("div",{className:"callout callout-danger"},m.a.createElement("small",{className:"text-muted"},"Delayed Orders"),m.a.createElement("br",null),this.state.kpi.map(function(e){return m.a.createElement("strong",{className:"h4"},e.total_orders_delayed)}),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(ae.b,{data:N(1,j),options:k,width:100,height:30})))),m.a.createElement(F.a,{sm:"3"},m.a.createElement("div",{className:"callout callout-info"},m.a.createElement("small",{className:"text-muted"},"Pending Orders"),m.a.createElement("br",null),this.state.kpi.map(function(e){return m.a.createElement("strong",{className:"h4"},e.total_orders_pending)}),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(ae.b,{data:N(0,O),options:k,width:100,height:30})))),m.a.createElement(F.a,{sm:"3"},m.a.createElement("div",{className:"callout callout-danger"},m.a.createElement("small",{className:"text-muted"},"Planned Orders"),m.a.createElement("br",null),this.state.kpi.map(function(e){return m.a.createElement("strong",{className:"h4"},e.total_orders_planned)}),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(ae.b,{data:N(1,j),options:k,width:100,height:30}))))),m.a.createElement("small",{className:"text-muted"}),m.a.createElement("span",{style:{float:"right"}},v?m.a.createElement(ee.a,null):null)),m.a.createElement(B.a,null,m.a.createElement(U.a,{tabs:!0},m.a.createElement(I.a,null,m.a.createElement(H.a,{href:"/#/dashboard/orders",active:r===Q.a},Q.a)),m.a.createElement(I.a,null,m.a.createElement(H.a,{href:"/#/dashboard/orders/on-hold",active:r===Q.c},Q.c)),m.a.createElement(I.a,null,m.a.createElement(H.a,{href:"/#/dashboard/orders/ready-to-dispatch",active:r===Q.d},Q.d)),m.a.createElement(I.a,null,m.a.createElement(H.a,{href:"/#/dashboard/orders/dispatched",active:r===Q.b},Q.b))),m.a.createElement(Y.a,Object.assign({data:ne(n,i,c,d,this.state.originSelected,this.state.destinationSelected),loading:u,loaded:p,columns:$,right:function(e){return m.a.createElement("div",{style:{display:"inline-block"}},m.a.createElement(X.a,{upload:L.M}),"\xa0\xa0\xa0\xa0\xa0",m.a.createElement(h.a,{color:"link",onClick:function(){Object(J.e)(),g()}},m.a.createElement("i",{className:"fa fa-refresh"})," \xa0 Refresh"))},left:function(t){return m.a.createElement("div",{style:{display:"inline-block"}},m.a.createElement(f.a,null,m.a.createElement(h.a,{color:"warning",onClick:e.markHold.bind(e),disabled:r===Q.c},m.a.createElement("i",{className:"fa fa-pause-circle"})," \xa0 Mark Hold"),m.a.createElement(h.a,{color:"primary",onClick:e.markRTD.bind(e),disabled:r===Q.d},m.a.createElement("i",{className:"fa fa-share"})," \xa0 Ready to Dispatch")),"\xa0\xa0\xa0\xa0\xa0",m.a.createElement(f.a,null,m.a.createElement(h.a,{color:"success",onClick:e.planVehicle.bind(e),disabled:r===Q.b},m.a.createElement("i",{className:"fa fa-rocket"})," \xa0 Auto-dispatch"),"\xa0",m.a.createElement(h.a,{color:"success",onClick:function(){e.modalToggle()},disabled:r===Q.b},"Manual-dispatch")))},keyField:"id",select:{mode:"checkbox",selected:this.state.selected,onSelect:this.handleOnSelect,onSelectAll:this.handleOnSelectAll,clickToSelect:!0},refPass:this.refPass.bind(this),section:C},y)))),x)}}]),t}(p.Component);t.a=Object(G.a)(Object(q.b)(function(e){return{loading:e.data.orders.loading,loaded:e.data.orders.loaded,changing:e.data.orders.changing}},function(e){return{getOrders:function(){return e(K())},markHold:function(t,a){return e(function(e,t){return function(){var a=Object(l.a)(r.a.mark(function a(n,l){var c,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=l().data.orders.data,s=c.slice(),n({type:W.c}),a.next=5,Object(L.B)(e);case 5:c.map(function(t,a){return e.includes(t.id)&&(s[a].rtd=!1,s[a].is_dispatched=!1),null}),n({type:W.d,orders:s}),t("/orders/on-hold");case 8:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()}(t,a))},markRTD:function(t,a){return e(function(e,t){return function(){var a=Object(l.a)(r.a.mark(function a(n,l){var c,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=l().data.orders.data,s=c.slice(),n({type:W.c}),a.next=5,Object(L.C)(e);case 5:c.map(function(t,a){return e.includes(t.id)&&(s[a].rtd=!0,s[a].is_dispatched=!1),null}),n({type:W.d,orders:s}),t("/orders/ready-to-dispatch");case 8:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()}(t,a))},planVehicle:function(t){return e(function(e){return function(){var t=Object(l.a)(r.a.mark(function t(a,n){var l,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=n().data.orders.data,c=l.slice(),a({type:W.c}),t.next=5,Object(L.E)();case 5:l.map(function(e,t){return c[t.rtd]&&(c[t].rtd=!0,c[t].is_dispatched=!0),null}),a({type:W.d,orders:c}),e("/dispatcher");case 8:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}(t))},planVehicleManually:function(t,a,n){return e(function(e,t,a){return function(){var n=Object(l.a)(r.a.mark(function n(l,c){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c().data.orders.data.slice(),l({type:W.c}),n.next=5,Object(L.F)(e,t);case 5:K()(l,c),a("/dispatcher");case 7:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}()}(t,a,n))}}})(re))},154:function(e,t,a){"use strict";var n=a(3),r=a(10),l=a(110),c=a(27),s=a(0),i=a.n(s),o=a(1),d=a.n(o),u=a(19),p=a.n(u),m=a(107),f={children:d.a.node,inline:d.a.bool,tag:m.l,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,c=e.tag,s=e.innerRef,o=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(m.h)(p()(t,!!l&&"form-inline"),a);return i.a.createElement(c,Object(n.a)({},o,{ref:s,className:d}))},t}(s.Component);h.propTypes=f,h.defaultProps={tag:"form"},t.a=h},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),c=a.n(l),s=a(137),i=a.n(s),o=a(44),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};var u=function(e){var t=function(t){var a=t.wrappedComponentRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["wrappedComponentRef"]);return r.a.createElement(o.a,{children:function(t){return r.a.createElement(e,d({},n,t,{ref:a}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:c.a.func},i()(t,e)};t.a=u},174:function(e,t,a){"use strict";var n=a(3),r=a(10),l=a(0),c=a.n(l),s=a(1),i=a.n(s),o=a(19),d=a.n(o),u=a(107),p={color:i.a.string,pill:i.a.bool,tag:u.l,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),children:i.a.node,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,l=e.color,s=e.innerRef,i=e.pill,o=e.tag,p=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),m=Object(u.h)(d()(t,"badge","badge-"+l,!!i&&"badge-pill"),a);return p.href&&"span"===o&&(o="a"),c.a.createElement(o,Object(n.a)({},p,{className:m,ref:s}))};m.propTypes=p,m.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=m},175:function(e,t,a){"use strict";var n=a(3),r=a(10),l=a(110),c=a(27),s=a(0),i=a.n(s),o=a(1),d=a.n(o),u=a(19),p=a.n(u),m=a(107),f={children:d.a.node,type:d.a.string,size:d.a.string,bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.l,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,c=e.bsSize,s=e.valid,o=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,h=e.innerRef,b=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),y=d||("select"===l||"textarea"===l?l:"input"),E="form-control";f?(E+="-plaintext",y=d||"input"):"file"===l?E+="-file":g&&(E=u?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(m.m)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var O=Object(m.h)(p()(t,o&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,E),a);return("input"===y||d&&"function"===typeof d)&&(b.type=l),b.children&&!f&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(m.m)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(y,Object(n.a)({},b,{ref:h,className:O}))},t}(i.a.Component);h.propTypes=f,h.defaultProps={type:"text"},t.a=h},399:function(e,t,a){"use strict";var n=a(3),r=a(10),l=a(0),c=a.n(l),s=a(1),i=a.n(s),o=a(19),d=a.n(o),u=a(107),p={tag:u.l,"aria-label":i.a.string,className:i.a.string,cssModule:i.a.object,role:i.a.string,size:i.a.string,vertical:i.a.bool},m=function(e){var t=e.className,a=e.cssModule,l=e.size,s=e.vertical,i=e.tag,o=Object(r.a)(e,["className","cssModule","size","vertical","tag"]),p=Object(u.h)(d()(t,!!l&&"btn-group-"+l,s?"btn-group-vertical":"btn-group"),a);return c.a.createElement(i,Object(n.a)({},o,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div",role:"group"},t.a=m},405:function(e,t,a){"use strict";var n=a(3),r=a(10),l=a(0),c=a.n(l),s=a(1),i=a.n(s),o=a(19),d=a.n(o),u=a(107),p={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:u.l,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,l=e.tabs,s=e.pills,i=e.vertical,o=e.horizontal,p=e.justified,m=e.fill,f=e.navbar,h=e.card,b=e.tag,g=Object(r.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(u.h)(d()(t,f?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":l,"card-header-tabs":h&&l,"nav-pills":s,"card-header-pills":h&&s,"nav-justified":p,"nav-fill":m}),a);return c.a.createElement(b,Object(n.a)({},g,{className:v}))};m.propTypes=p,m.defaultProps={tag:"ul",vertical:!1},t.a=m},406:function(e,t,a){"use strict";var n=a(3),r=a(10),l=a(0),c=a.n(l),s=a(1),i=a.n(s),o=a(19),d=a.n(o),u=a(107),p={tag:u.l,active:i.a.bool,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,l=e.active,s=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),o=Object(u.h)(d()(t,"nav-item",!!l&&"active"),a);return c.a.createElement(s,Object(n.a)({},i,{className:o}))};m.propTypes=p,m.defaultProps={tag:"li"},t.a=m},407:function(e,t,a){"use strict";var n=a(3),r=a(10),l=a(110),c=a(27),s=a(0),i=a.n(s),o=a(1),d=a.n(o),u=a(19),p=a.n(u),m=a(107),f={tag:m.l,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),disabled:d.a.bool,active:d.a.bool,className:d.a.string,cssModule:d.a.object,onClick:d.a.func,href:d.a.any},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.active,c=e.tag,s=e.innerRef,o=Object(r.a)(e,["className","cssModule","active","tag","innerRef"]),d=Object(m.h)(p()(t,"nav-link",{disabled:o.disabled,active:l}),a);return i.a.createElement(c,Object(n.a)({},o,{ref:s,onClick:this.onClick,className:d}))},t}(i.a.Component);h.propTypes=f,h.defaultProps={tag:"a"},t.a=h}}]);
//# sourceMappingURL=4.64df19c5.chunk.js.map