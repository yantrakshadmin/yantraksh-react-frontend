(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{116:function(e,t,a){"use strict";var n=a(117),r=a(112),o=a(0),l=a.n(o),s=a(124),i=a.n(s),c=a(125),d=a.n(c),m=a(126),u=a.n(m),p=a(39),g=function(e){return l.a.createElement("button",{className:"btn",onClick:function(){e.onExport()}},l.a.createElement("i",{className:"fa fa-download"})," \xa0 Export to CSV")};t.a=function(e){var t=Object(o.useState)(!0),a=Object(r.a)(t,2),c=a[0],m=a[1];Object(o.useEffect)(function(){setTimeout(function(){m(!1)},5e3)},[c]);var h=e.columns,f=e.data,y=void 0===f?[]:f,v=e.right,x=void 0===v?function(){}:v,E=e.left,_=void 0===E?function(){}:E,C=e.refPass,b=void 0===C?function(){}:C,F=e.loading,w=void 0!==F&&F,D=(e.loaded,e.keyField),N=void 0===D?"id":D,S=e.select,O=e.expandRow,j=void 0===O?{}:O,k=e.noDataIndication,I=(void 0===k&&p.a,e.section),R=e.searchClass,P=e.searchContainerClass,A=e.exportAll,T=e.headerClasses,B=Object(n.a)(e,["columns","data","right","left","refPass","loading","loaded","keyField","select","expandRow","noDataIndication","section","searchClass","searchContainerClass","exportAll","headerClasses"]);return l.a.createElement(i.a,{keyField:N,data:y,columns:h,search:!0,exportCSV:{onlyExportSelection:!A,exportAll:!0}},function(e){return l.a.createElement("div",null,l.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},_(e),l.a.createElement("div",{className:P,style:{float:"right",display:"inline-block"}},x(e),"\xa0\xa0\xa0\xa0\xa0",l.a.createElement(g,e.csvProps),"\xa0\xa0\xa0\xa0\xa0",l.a.createElement(s.Search.SearchBar,Object.assign({className:R},e.searchProps)))),I?l.a.createElement("div",{style:{paddingTop:10,paddingBottom:10}},I):null,l.a.createElement(d.a,Object.assign({},e.baseProps,{wrapperClasses:"table-responsive",ref:function(e){return b(e)},hover:!0,condensed:!0,bordered:!1,pagination:u()(),selectRow:S,loading:w,expandRow:j,headerClasses:T,noDataIndication:c?p.a:l.a.createElement("div",{className:"w-100"},l.a.createElement("p",null,"No Data"))},B)))})}},142:function(e,t,a){"use strict";var n=a(34),r=a(35),o=a(38),l=a(36),s=a(37),i=a(0),c=a.n(i),d=a(164),m=a.n(d),u=a(146),p=(a(163),a(27)),g=a(116),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={startDate:new Date,startDateString:"2019-11-05",endDate:new Date,endDateString:"2019-11-11",companiesList:[],company_name:1,data:[]},a.changeFormat=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[r,a,n].join("-")},a.handleStartChange=function(e){a.setState({startDate:e,startDateString:a.changeFormat(e)})},a.handleEndChange=function(e){a.setState({endDate:e,endDateString:a.changeFormat(e)})},a.getReport=function(){Object(p.Y)(a.props.url,{date_from:a.state.startDateString,date_to:a.state.endDateString,c_name:1}).then(function(e){a.setState({data:e.data})}).catch(function(e){return console.error(e)})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(p.P)(p.a).then(function(t){e.setState({companiesList:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.companiesList,n=t.data,r=this.props,o=r.columns_props,l=r.column_collapsed,s=function(e){var t=e.value,a=e.onClick;return c.a.createElement("button",{type:"button",className:"btn btn-sm btn-success",onClick:a},t)},i={renderer:function(e,t){return l?c.a.createElement("div",{className:"p-3 "},c.a.createElement(g.a,{exportAll:!0,columns:l,data:n[t].items})):null},showExpandColumn:r.showExpandColumn,expandByColumnOnly:!0,onlyOneExpanding:!0};return c.a.createElement("div",{className:"bg-white"},c.a.createElement(u.a,null,"Get Reports"),c.a.createElement("div",{style:{padding:10,flexDirection:"row",display:"flex",alignItems:"center"}},c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},c.a.createElement("h5",{style:{margin:5}},"To:"),c.a.createElement("div",{style:{margin:10}},c.a.createElement(m.a,{selected:this.state.startDate,showTimeSelect:!1,dateFormat:"yyyy-MM-dd",customInput:c.a.createElement(s,null),onChange:this.handleStartChange}))),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},c.a.createElement("h5",{style:{margin:5}},"From:"),c.a.createElement("div",{style:{margin:10}},c.a.createElement(m.a,{selected:this.state.endDate,dateFormat:"yyyy-MM-dd",showTimeSelect:!1,customInput:c.a.createElement(s,null),onChange:this.handleEndChange}))),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},c.a.createElement("h5",{style:{margin:5}},"Company:"),c.a.createElement("select",{style:{margin:5},onChange:function(t){e.setState({company_name:t.target.value})},className:"custom-select",id:"inputGroupSelect01"},c.a.createElement("option",{selected:!0},"Choose..."),a.map(function(e){return c.a.createElement("option",{key:e.company_name},e.company_name)}))),c.a.createElement("button",{className:"btn btn-success btn-sm m-3",onClick:function(){return e.getReport()}},"Get Report")),c.a.createElement("div",{className:"m-3"},c.a.createElement("div",{className:"scrolling-wrapper-flexbox"},c.a.createElement(g.a,{headerClasses:"bg-light",expandRow:i,exportAll:!0,data:n,columns:o}))))}}]),t}(i.Component);t.a=h},552:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a(35),o=a(38),l=a(36),s=a(37),i=a(0),c=a.n(i),d=a(142),m=a(27),u=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,{columns_props:[{dataField:"lr_no",text:"LR No.",sort:!0},{dataField:"lr_date",text:"Date",sort:!0},{dataField:"lr_billingparty",text:"Billing Party",sort:!0},{dataField:"invoice_no",text:"Invoice Number",sort:!0},{dataField:"lr_declared",text:"Declared",sort:!0},{dataField:"ewaybill_no",text:"E-WayBill No.",sort:!0},{dataField:"lr_item_name",text:"Item Name",sort:!0},{dataField:"lr_quantity",text:"Quantity",sort:!0},{dataField:"lr_weight",text:"Weight",sort:!0},{dataField:"lr_invoice_date",text:"LR Invoice Date",sort:!0},{dataField:"lr_consignor_name",text:"Consignor Name",sort:!0},{dataField:"lr_consignor_address",text:"Consignor Address",sort:!0},{dataField:"lr_consignor_contact_name",text:"Consignor Contact Name",sort:!0},{dataField:"lr_consignor_contact_phone",text:"Consignor Contact Phone",sort:!0},{dataField:"lr_consignee_name",text:"Consignee Name",sort:!0},{dataField:"lr_consignee_address",text:"Consignee Address",sort:!0},{dataField:"lr_consignee_contact_name",text:"Consignee Contact Name",sort:!0},{dataField:"lr_consignee_contact_phone",text:"Consignee Contact Phone",sort:!0},{dataField:"vehicle_no",text:"Vehicle No.",sort:!0},{dataField:"lr_vehicle_type",text:"Vehicle Type",sort:!0},{dataField:"driver_name",text:"Driver Name",sort:!0},{dataField:"driver_no",text:"Driver Number",sort:!0}],url:m.h}))}}]),t}(i.Component);t.default=u}}]);
//# sourceMappingURL=73.5510ea36.chunk.js.map