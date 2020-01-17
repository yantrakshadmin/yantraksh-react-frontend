(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{221:function(e,a,t){"use strict";var n=t(3),s=t.n(n),r=t(6),c=t(12),o=t(34),l=t(35),p=t(38),i=t(36),m=t(37),u=t(0),h=t.n(u),d=t(120),b=t(148),f=t(122),E=t(123),y=t(128),g=t(129),v=t(130),w=t(217),S=t(218),j=t(165),N=t(216),x=t(27),k=t(11),O=t(19),C=t(42),_=t(17),L=t(48),P="^[\\w.@+-]+$",T=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(p.a)(this,Object(i.a)(a).call(this,e))).signUpLoadingButton=function(){return 1===t.state.phase?h.a.createElement(d.a,{color:"success",block:!0,disabled:!0},h.a.createElement("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," Loading"):h.a.createElement(d.a,{color:"success",block:!0},"Create Account")},t.handleChange=function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,s=a.name;t.setState(Object(c.a)({},s,n))},t.onSubmit=function(){var e=Object(r.a)(s.a.mark(function e(a){var n,r,c,o,l,p,i,m;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.setState({phase:1}),n=[],t.state.username.match(P)){e.next=8;break}O.b.error("Username not valid"),t.setState({phase:0}),e.next=12;break;case 8:return e.next=10,Object(x.db)(t.state.username);case 10:(r=e.sent).available||(n.push("Username '".concat(r.username,"' not available")),t.setState({phase:0}));case 12:if(t.state.confirmpass!==t.state.password&&(n.push("Password and confirm password is not same"),t.setState({phase:0})),0===n.length){e.next=18;break}O.b.error(n.join("\n")),t.setState({phase:0}),e.next=48;break;case 18:if("Supplier"!==t.props.type){e.next=32;break}return e.prev=19,e.next=22,Object(x.rb)(t.state);case 22:return Object(k.j)("Supplier"),e.next=25,t.setState({phase:0});case 25:t.props.signInAction(t.state.username,t.state.password),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(19),Object(k.i)(),console.log(e.t0);case 32:if("Shipper"!==t.props.type){e.next=47;break}return e.prev=33,c=t.state,o=c.username,l=c.email,p=c.password,i=c.company_code,m=c.company_name,e.next=37,Object(x.qb)({username:o,email:l,password:p,company_name:m,company_code:i});case 37:return Object(k.j)("Shipper"),e.next=40,t.setState({phase:0});case 40:t.props.signInAction(t.state.username,t.state.password),e.next=47;break;case 43:e.prev=43,e.t1=e.catch(33),Object(k.i)(),console.log(e.t1);case 47:t.setState({phase:0});case 48:case"end":return e.stop()}},e,null,[[19,28],[33,43]])}));return function(a){return e.apply(this,arguments)}}(),t.state={username:"",email:"",password:"",confirmpass:"",company_code:"",company_name:"",companiesList:[],phase:0},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;"Shipper"===this.props.type?Object(x.P)(x.a).then(function(a){e.setState({companiesList:a})}).catch(function(e){return console.log(e)}):"Supplier"===this.props.type&&Object(x.P)(x.b).then(function(a){e.setState({companiesList:a})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,a=this.state.companiesList;return this.props.isAuthenticated?h.a.createElement(L.a,{to:"".concat(this.props.redirectTo.split("#")[1])}):h.a.createElement("div",{className:"app flex-row align-items-center"},h.a.createElement(b.a,null,h.a.createElement(f.a,{className:"justify-content-center"},h.a.createElement(E.a,{md:"9",lg:"7",xl:"6"},h.a.createElement(y.a,{className:"mx-4"},h.a.createElement(g.a,{className:"p-4"},h.a.createElement(v.a,{onSubmit:this.onSubmit},h.a.createElement("input",{type:"hidden",className:"form-control",name:"user-type",value:this.props.type}),h.a.createElement("h1",null,"Register for ",this.props.type),h.a.createElement("p",{className:"text-muted"},"Create your account"),h.a.createElement(w.a,{className:"mb-3"},h.a.createElement(S.a,{addonType:"prepend"},h.a.createElement(j.a,null,h.a.createElement("i",{className:"icon-user"}))),h.a.createElement("input",{type:"text",placeholder:"Username",className:"form-control",name:"username",onChange:this.handleChange,value:this.state.username})),h.a.createElement(w.a,{className:"mb-3"},h.a.createElement(S.a,{addonType:"prepend"},h.a.createElement(j.a,null,"@")),h.a.createElement("input",{type:"email",name:"email",className:"form-control",placeholder:"Email",onChange:this.handleChange,value:this.state.email})),h.a.createElement(w.a,{className:"mb-3"},h.a.createElement(S.a,{addonType:"prepend"},h.a.createElement(j.a,null,h.a.createElement("i",{className:"icon-lock"}))),h.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"form-control",onChange:this.handleChange,value:this.state.password})),h.a.createElement(w.a,{className:"mb-4"},h.a.createElement(S.a,{addonType:"prepend"},h.a.createElement(j.a,null,h.a.createElement("i",{className:"icon-lock"}))),h.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"confirmpass",className:"form-control",onChange:this.handleChange,value:this.state.confirmpass})),h.a.createElement(w.a,{className:"mb-4"},h.a.createElement("div",{className:"input-group-prepend"},h.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect01"},"Company")),h.a.createElement("select",{onChange:function(a){e.setState({company_name:a.target.value})},className:"custom-select",id:"inputGroupSelect01"},h.a.createElement("option",{selected:!0},"Choose..."),a.map(function(e){return h.a.createElement("option",{key:e.company_name},e.company_name)}))),this.state.password!==this.state.confPass?"Password and confirm password should be same":"",h.a.createElement("br",null),h.a.createElement("br",null),this.signUpLoadingButton())),h.a.createElement(N.a,{className:"p-4"}))))))}}]),a}(u.Component);a.a=Object(_.b)(function(e){return{isAuthenticated:e.auth.authenticated,redirectTo:e.navigation.redirectTo}},function(e){return{signInAction:function(a,t){return e(Object(C.b)(a,t))}}})(T)},578:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(221);a.default=function(){return s.a.createElement(r.a,{type:"Shipper"})}}}]);
//# sourceMappingURL=80.780ce52a.chunk.js.map