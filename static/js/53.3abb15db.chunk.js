(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{114:function(e,t,a){"use strict";var n=a(115),r=a(112),l=a(0),o=a.n(l),s=a(117),i=a.n(s),c=a(120),d=a.n(c),m=a(119),u=a.n(m),p=a(37),h=function(e){return o.a.createElement("button",{className:"btn",onClick:function(){e.onExport()}},o.a.createElement("i",{className:"fa fa-download"})," \xa0 Export to CSV")};t.a=function(e){var t=Object(l.useState)(!0),a=Object(r.a)(t,2),c=a[0],m=a[1];Object(l.useEffect)(function(){setTimeout(function(){m(!1)},5e3)},[c]);var g=e.columns,f=e.data,E=void 0===f?[]:f,y=e.right,v=void 0===y?function(){}:y,x=e.left,b=void 0===x?function(){}:x,C=e.refPass,w=void 0===C?function(){}:C,F=e.loading,D=void 0!==F&&F,S=(e.loaded,e.keyField),O=void 0===S?"id":S,j=e.select,_=e.expandRow,k=void 0===_?{}:_,N=e.noDataIndication,I=(void 0===N&&p.a,e.section),R=e.searchClass,T=e.searchContainerClass,A=e.exportAll,P=e.headerClasses,M=Object(n.a)(e,["columns","data","right","left","refPass","loading","loaded","keyField","select","expandRow","noDataIndication","section","searchClass","searchContainerClass","exportAll","headerClasses"]);return o.a.createElement(i.a,{keyField:O,data:E,columns:g,search:!0,exportCSV:{onlyExportSelection:!A,exportAll:!0}},function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},b(e),o.a.createElement("div",{className:T,style:{float:"right",display:"inline-block"}},v(e),"\xa0\xa0\xa0\xa0\xa0",o.a.createElement(h,e.csvProps),"\xa0\xa0\xa0\xa0\xa0",o.a.createElement(s.Search.SearchBar,Object.assign({className:R},e.searchProps)))),I?o.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},I):null,o.a.createElement(d.a,Object.assign({},e.baseProps,{ref:function(e){return w(e)},hover:!0,condensed:!0,bordered:!1,pagination:u()(),selectRow:j,loading:D,expandRow:k,headerClasses:P,noDataIndication:c?p.a:o.a.createElement("div",{className:"w-100"},o.a.createElement("p",null,"No Data"))},M)))})}},131:function(e,t,a){"use strict";var n=a(32),r=a(33),l=a(36),o=a(34),s=a(35),i=a(0),c=a.n(i),d=a(138),m=a.n(d),u=a(174),p=(a(137),a(26)),h=a(114),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={startDate:new Date,startDateString:"2019-11-05",endDate:new Date,endDateString:"2019-11-11",companiesList:[],company_name:1,data:[]},a.changeFormat=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[r,a,n].join("-")},a.handleStartChange=function(e){a.setState({startDate:e,startDateString:a.changeFormat(e)})},a.handleEndChange=function(e){a.setState({endDate:e,endDateString:a.changeFormat(e)})},a.getReport=function(){Object(p.E)(a.props.url,{date_from:a.state.startDateString,date_to:a.state.endDateString,c_name:1}).then(function(e){a.setState({data:e.data})}).catch(function(e){return console.error(e)})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(p.v)(p.a).then(function(t){e.setState({companiesList:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.companiesList,n=t.data,r=this.props,l=r.columns_props,o=r.column_collapsed,s=function(e){var t=e.value,a=e.onClick;return c.a.createElement("button",{type:"button",className:"btn btn-sm btn-success",onClick:a},t)},i={renderer:function(e,t){return o?c.a.createElement("div",{className:"p-3 "},c.a.createElement(h.a,{exportAll:!0,columns:o,data:n[t].items})):null},showExpandColumn:r.showExpandColumn,expandByColumnOnly:!0,onlyOneExpanding:!0};return c.a.createElement("div",{className:"bg-white"},c.a.createElement(u.a,null,"Get Reports"),c.a.createElement("div",{style:{padding:10,flexDirection:"row",display:"flex",alignItems:"center"}},c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},c.a.createElement("h5",{style:{margin:5}},"To:"),c.a.createElement("div",{style:{margin:10}},c.a.createElement(m.a,{selected:this.state.startDate,showTimeSelect:!1,dateFormat:"yyyy-MM-dd",customInput:c.a.createElement(s,null),onChange:this.handleStartChange}))),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},c.a.createElement("h5",{style:{margin:5}},"From:"),c.a.createElement("div",{style:{margin:10}},c.a.createElement(m.a,{selected:this.state.endDate,dateFormat:"yyyy-MM-dd",showTimeSelect:!1,customInput:c.a.createElement(s,null),onChange:this.handleEndChange}))),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},c.a.createElement("h5",{style:{margin:5}},"Company:"),c.a.createElement("select",{style:{margin:5},onChange:function(t){e.setState({company_name:t.target.value})},className:"custom-select",id:"inputGroupSelect01"},c.a.createElement("option",{selected:!0},"Choose..."),a.map(function(e){return c.a.createElement("option",{key:e.company_name},e.company_name)}))),c.a.createElement("button",{className:"btn btn-success btn-sm m-3",onClick:function(){return e.getReport()}},"Get Report")),c.a.createElement("div",{className:"m-3"},c.a.createElement("div",{className:"scrolling-wrapper-flexbox"},c.a.createElement(h.a,{headerClasses:"bg-light",expandRow:i,exportAll:!0,data:n,columns:l}))))}}]),t}(i.Component);t.a=g},545:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(33),l=a(36),o=a(34),s=a(35),i=a(0),c=a.n(i),d=a(131),m=a(26),u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,{columns_props:[{dataField:"tracking_id",text:"Tracking ID",sort:!0},{dataField:"trip_id",text:"Trip ID",sort:!0},{dataField:"telephone",text:"Phone Number",sort:!0},{dataField:"address",text:"Address",sort:!0},{dataField:"city",text:"City",sort:!0},{dataField:"created_at",text:"Created At",sort:!0},{dataField:"offered_price",text:"Offered Price",sort:!0},{dataField:"weight",text:"Weight",sort:!0},{dataField:"status",text:"Status",sort:!0},{dataField:"created_on",text:"Created On",sort:!0},{dataField:"route_tat",text:"Route Tat",sort:!0},{dataField:"percent_filled",text:"Percent Filled",sort:!0}],column_collapsed:[{dataField:"name",text:"Name",sort:!0},{dataField:"length",text:"Length",sort:!0},{dataField:"width",text:"Width",sort:!0},{dataField:"height",text:"Height",sort:!0},{dataField:"weight",text:"Weight",sort:!0},{dataField:"volume",text:"volume",sort:!0}],url:m.h}))}}]),t}(i.Component);t.default=u}}]);
//# sourceMappingURL=53.3abb15db.chunk.js.map