(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{116:function(e,t,a){"use strict";var n=a(117),r=a(112),l=a(0),o=a.n(l),s=a(124),c=a.n(s),i=a(125),d=a.n(i),m=a(126),u=a.n(m),p=a(39),h=function(e){return o.a.createElement("button",{className:"btn",onClick:function(){e.onExport()}},o.a.createElement("i",{className:"fa fa-download"})," \xa0 Export to CSV")};t.a=function(e){var t=Object(l.useState)(!0),a=Object(r.a)(t,2),i=a[0],m=a[1];Object(l.useEffect)(function(){setTimeout(function(){m(!1)},5e3)},[i]);var g=e.columns,f=e.data,y=void 0===f?[]:f,E=e.right,v=void 0===E?function(){}:E,x=e.left,b=void 0===x?function(){}:x,w=e.refPass,C=void 0===w?function(){}:w,F=e.loading,D=void 0!==F&&F,S=(e.loaded,e.keyField),O=void 0===S?"id":S,j=e.select,_=e.expandRow,k=void 0===_?{}:_,N=e.noDataIndication,T=(void 0===N&&p.a,e.section),R=e.searchClass,I=e.searchContainerClass,P=e.exportAll,A=e.headerClasses,M=Object(n.a)(e,["columns","data","right","left","refPass","loading","loaded","keyField","select","expandRow","noDataIndication","section","searchClass","searchContainerClass","exportAll","headerClasses"]);return o.a.createElement(c.a,{keyField:O,data:y,columns:g,search:!0,exportCSV:{onlyExportSelection:!P,exportAll:!0}},function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},b(e),o.a.createElement("div",{className:I,style:{float:"right",display:"inline-block"}},v(e),"\xa0\xa0\xa0\xa0\xa0",o.a.createElement(h,e.csvProps),"\xa0\xa0\xa0\xa0\xa0",o.a.createElement(s.Search.SearchBar,Object.assign({className:R},e.searchProps)))),T?o.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},T):null,o.a.createElement(d.a,Object.assign({},e.baseProps,{wrapperClasses:"table-responsive",ref:function(e){return C(e)},hover:!0,condensed:!0,bordered:!1,pagination:u()(),selectRow:j,loading:D,expandRow:k,headerClasses:A,noDataIndication:i?p.a:o.a.createElement("div",{className:"w-100"},o.a.createElement("p",null,"No Data"))},M)))})}},142:function(e,t,a){"use strict";var n=a(34),r=a(35),l=a(38),o=a(36),s=a(37),c=a(0),i=a.n(c),d=a(164),m=a.n(d),u=a(146),p=(a(163),a(27)),h=a(116),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={startDate:new Date,startDateString:"2019-11-05",endDate:new Date,endDateString:"2019-11-11",companiesList:[],company_name:1,data:[]},a.changeFormat=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[r,a,n].join("-")},a.handleStartChange=function(e){a.setState({startDate:e,startDateString:a.changeFormat(e)})},a.handleEndChange=function(e){a.setState({endDate:e,endDateString:a.changeFormat(e)})},a.getReport=function(){Object(p.Y)(a.props.url,{date_from:a.state.startDateString,date_to:a.state.endDateString,c_name:1}).then(function(e){a.setState({data:e.data})}).catch(function(e){return console.error(e)})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(p.P)(p.a).then(function(t){e.setState({companiesList:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.companiesList,n=t.data,r=this.props,l=r.columns_props,o=r.column_collapsed,s=function(e){var t=e.value,a=e.onClick;return i.a.createElement("button",{type:"button",className:"btn btn-sm btn-success",onClick:a},t)},c={renderer:function(e,t){return o?i.a.createElement("div",{className:"p-3 "},i.a.createElement(h.a,{exportAll:!0,columns:o,data:n[t].items})):null},showExpandColumn:r.showExpandColumn,expandByColumnOnly:!0,onlyOneExpanding:!0};return i.a.createElement("div",{className:"bg-white"},i.a.createElement(u.a,null,"Get Reports"),i.a.createElement("div",{style:{padding:10,flexDirection:"row",display:"flex",alignItems:"center"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},i.a.createElement("h5",{style:{margin:5}},"To:"),i.a.createElement("div",{style:{margin:10}},i.a.createElement(m.a,{selected:this.state.startDate,showTimeSelect:!1,dateFormat:"yyyy-MM-dd",customInput:i.a.createElement(s,null),onChange:this.handleStartChange}))),i.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},i.a.createElement("h5",{style:{margin:5}},"From:"),i.a.createElement("div",{style:{margin:10}},i.a.createElement(m.a,{selected:this.state.endDate,dateFormat:"yyyy-MM-dd",showTimeSelect:!1,customInput:i.a.createElement(s,null),onChange:this.handleEndChange}))),i.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},i.a.createElement("h5",{style:{margin:5}},"Company:"),i.a.createElement("select",{style:{margin:5},onChange:function(t){e.setState({company_name:t.target.value})},className:"custom-select",id:"inputGroupSelect01"},i.a.createElement("option",{selected:!0},"Choose..."),a.map(function(e){return i.a.createElement("option",{key:e.company_name},e.company_name)}))),i.a.createElement("button",{className:"btn btn-success btn-sm m-3",onClick:function(){return e.getReport()}},"Get Report")),i.a.createElement("div",{className:"m-3"},i.a.createElement("div",{className:"scrolling-wrapper-flexbox"},i.a.createElement(h.a,{headerClasses:"bg-light",expandRow:c,exportAll:!0,data:n,columns:l}))))}}]),t}(c.Component);t.a=g},555:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a(35),l=a(38),o=a(36),s=a(37),c=a(0),i=a.n(c),d=a(142),m=(a(116),a(27)),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={columns:[],data:[]},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,{columns_props:[{dataField:"truck_name",text:"Truck Name",sort:!0},{dataField:"truck_type",text:"Truck Type",sort:!0},{dataField:"origin",text:"Origin",sort:!0},{dataField:"destination",text:"Destination",sort:!0},{dataField:"material_type",text:"Material Type",sort:!0},{dataField:"scheduled_date",text:"Scheduled Date",sort:!0},{dataField:"offered_price",text:"Offered Price",sort:!0},{dataField:"weight",text:"Weight",sort:!0},{dataField:"status",text:"Status",sort:!0},{dataField:"created_on",text:"Created On",sort:!0},{dataField:"route_tat",text:"Route Tat",sort:!0},{dataField:"percent_filled",text:"Percent Filled",sort:!0}],column_collapsed:[{dataField:"name",text:"Name",sort:!0},{dataField:"length",text:"Length",sort:!0},{dataField:"width",text:"Width",sort:!0},{dataField:"height",text:"Height",sort:!0},{dataField:"weight",text:"Weight",sort:!0},{dataField:"volume",text:"volume",sort:!0}],showExpandColumn:!0,url:m.e}))}}]),t}(c.Component);t.default=u}}]);
//# sourceMappingURL=71.ffa0043a.chunk.js.map