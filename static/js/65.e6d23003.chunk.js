(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{578:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(3),r=t.n(l),o=t(6),s=t(12),m=t(33),p=t(34),i=t(37),u=t(35),h=t(36),d=t(166),E=t(140),y=t(141),b=t(149),f=t(150),g=t(151),v=t(265),N=t(266),C=t(167),j=t(122),x=t(264),k=t(26),w=t(39),O=t(11),_=t(41),S=t(17),T=t(45),A=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,c=a.name;console.log(e,a,c,n),t.setState(Object(s.a)({},c,n))},t.onSubmit=function(){var e=Object(o.a)(r.a.mark(function e(a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),console.log(t.state),0===(n=[]).length){e.next=7;break}alert(n.join("\n")),e.next=20;break;case 7:if("Company"!==t.props.type){e.next=20;break}return e.prev=8,console.log(t.state,"gatate"),e.next=12,Object(k.V)(t.state);case 12:w.a.push("/"),Object(O.i)("Company"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(8),Object(O.h)(),console.log(e.t0);case 20:case"end":return e.stop()}},e,null,[[8,16]])}));return function(a){return e.apply(this,arguments)}}(),t.state={company_name:"",company_email:"",company_phone:"",company_type:""},t}return Object(h.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this;return this.props.isAuthenticated?c.a.createElement(T.a,{to:"".concat(this.props.redirectTo.split("#")[1])}):c.a.createElement("div",{className:"app flex-row align-items-center"},c.a.createElement(d.a,null,c.a.createElement(E.a,{className:"justify-content-center"},c.a.createElement(y.a,{md:"9",lg:"7",xl:"6"},c.a.createElement(b.a,{className:"mx-4"},c.a.createElement(f.a,{className:"p-4"},c.a.createElement(g.a,{onSubmit:this.onSubmit},c.a.createElement("input",{type:"hidden",className:"form-control",name:"user-type",value:this.props.type}),c.a.createElement("h1",null,"Register ",this.props.type),c.a.createElement("p",{className:"text-muted"},"Create your account"),c.a.createElement(v.a,{className:"mb-3"},c.a.createElement(N.a,{addonType:"prepend"},c.a.createElement(C.a,null,c.a.createElement("i",{className:"icon-user"}))),c.a.createElement("input",{placeholder:"Name",type:"text",className:"form-control",name:"company_name",onChange:this.handleChange,value:this.state.company_name})),c.a.createElement(v.a,{className:"mb-3"},c.a.createElement(N.a,{addonType:"prepend"},c.a.createElement(C.a,null,"@")),c.a.createElement("input",{type:"email",placeholder:"Email",name:"company_email",className:"form-control",onChange:this.handleChange,value:this.state.company_email})),c.a.createElement(v.a,{className:"mb-3"},c.a.createElement(N.a,{addonType:"prepend"},c.a.createElement(C.a,null,c.a.createElement("i",{className:"icon-lock"}))),c.a.createElement("input",{type:"phone",placeholder:"Phone",name:"company_phone",className:"form-control",onChange:this.handleChange,value:this.state.company_phone})),c.a.createElement(v.a,{className:"mb-4"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect01"},"Company")),c.a.createElement("select",{onChange:function(a){e.setState({company_type:a.target.value})},className:"custom-select",id:"inputGroupSelect01"},c.a.createElement("option",{value:"",selected:!0},"Choose..."),c.a.createElement("option",{value:"supplier",selected:!0},"Supplier"),c.a.createElement("option",{value:"shipper"},"Shipper"))),this.state.password!==this.state.confPass?"Password and confirm password should be same":"",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(j.a,{color:"success",block:!0},"Create Account"))),c.a.createElement(x.a,{className:"p-4"}))))))}}]),a}(n.Component),P=Object(S.b)(function(e){return{isAuthenticated:e.auth.authenticated,redirectTo:e.navigation.redirectTo}},function(e){return{signInAction:function(a,t){return e(Object(_.b)(a,t))}}})(A);a.default=function(){return c.a.createElement(P,{type:"Company"})}}}]);
//# sourceMappingURL=65.e6d23003.chunk.js.map