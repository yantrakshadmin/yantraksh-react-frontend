(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{578:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),s=t.n(r),l=t(6),o=t(12),p=t(33),m=t(34),i=t(36),u=t(35),h=t(37),d=t(122),E=t(144),b=t(140),y=t(141),f=t(150),g=t(151),v=t(176),N=t(265),C=t(266),j=t(166),k=t(264),x=t(26),w=t(39),O=t(11),S=t(41),_=t(17),T=t(45),A=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).signUpLoadingButton=function(){return 1===t.state.phase?c.a.createElement(d.a,{color:"success",block:!0,disabled:!0},c.a.createElement("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," Loading"):c.a.createElement(d.a,{color:"success",block:!0},"Create Account")},t.handleChange=function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,c=a.name;console.log(e,a,c,n),t.setState(Object(o.a)({},c,n))},t.onSubmit=function(){var e=Object(l.a)(s.a.mark(function e(a){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.setState({phase:1}),console.log(t.state),0===(n=[]).length){e.next=8;break}alert(n.join("\n")),e.next=22;break;case 8:if("Company"!==t.props.type){e.next=22;break}return e.prev=9,console.log(t.state,"gatate"),e.next=13,Object(x.V)(t.state);case 13:t.setState({phase:0}),w.a.push("/"),Object(O.i)("Company"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(9),Object(O.h)(),console.log(e.t0);case 22:t.setState({phase:0});case 23:case"end":return e.stop()}},e,null,[[9,18]])}));return function(a){return e.apply(this,arguments)}}(),t.state={company_name:"",company_email:"",company_phone:"",company_type:"",phase:0},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return this.props.isAuthenticated?c.a.createElement(T.a,{to:"".concat(this.props.redirectTo.split("#")[1])}):c.a.createElement("div",{className:"app flex-row align-items-center"},c.a.createElement(E.a,null,c.a.createElement(b.a,{className:"justify-content-center"},c.a.createElement(y.a,{md:"9",lg:"7",xl:"6"},c.a.createElement(f.a,{className:"mx-4"},c.a.createElement(g.a,{className:"p-4"},c.a.createElement(v.a,{onSubmit:this.onSubmit},c.a.createElement("input",{type:"hidden",className:"form-control",name:"user-type",value:this.props.type}),c.a.createElement("h1",null,"Register ",this.props.type),c.a.createElement("p",{className:"text-muted"},"Create your account"),c.a.createElement(N.a,{className:"mb-3"},c.a.createElement(C.a,{addonType:"prepend"},c.a.createElement(j.a,null,c.a.createElement("i",{className:"icon-user"}))),c.a.createElement("input",{placeholder:"Name",type:"text",className:"form-control",name:"company_name",onChange:this.handleChange,value:this.state.company_name,required:!0})),c.a.createElement(N.a,{className:"mb-3"},c.a.createElement(C.a,{addonType:"prepend"},c.a.createElement(j.a,null,"@")),c.a.createElement("input",{type:"email",placeholder:"Email",name:"company_email",className:"form-control",onChange:this.handleChange,value:this.state.company_email,required:!0})),c.a.createElement(N.a,{className:"mb-3"},c.a.createElement(C.a,{addonType:"prepend"},c.a.createElement(j.a,null,c.a.createElement("i",{className:"icon-lock"}))),c.a.createElement("input",{type:"phone",placeholder:"Phone",name:"company_phone",className:"form-control",onChange:this.handleChange,value:this.state.company_phone,required:!0})),c.a.createElement(N.a,{className:"mb-4"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect01"},"Company")),c.a.createElement("select",{onChange:function(a){e.setState({company_type:a.target.value})},className:"custom-select",id:"inputGroupSelect01"},c.a.createElement("option",{value:"",selected:!0},"Choose..."),c.a.createElement("option",{value:"supplier",selected:!0},"Supplier"),c.a.createElement("option",{value:"shipper"},"Shipper"))),this.state.password!==this.state.confPass?"Password and confirm password should be same":"",c.a.createElement("br",null),c.a.createElement("br",null),this.signUpLoadingButton())),c.a.createElement(k.a,{className:"p-4"}))))))}}]),a}(n.Component),q=Object(_.b)(function(e){return{isAuthenticated:e.auth.authenticated,redirectTo:e.navigation.redirectTo}},function(e){return{signInAction:function(a,t){return e(Object(S.b)(a,t))}}})(A);a.default=function(){return c.a.createElement(q,{type:"Company"})}}}]);
//# sourceMappingURL=65.a0a5ad70.chunk.js.map