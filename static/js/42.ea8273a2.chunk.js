(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{112:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(o){r=!0,c=o}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},166:function(e,t,a){"use strict";var n=a(4),r=a(10),c=a(0),l=a.n(c),s=a(1),o=a.n(s),i=a(21),u=a.n(i),m=a(109),p={tag:m.l,fluid:o.a.bool,className:o.a.string,cssModule:o.a.object},d=function(e){var t=e.className,a=e.cssModule,c=e.fluid,s=e.tag,o=Object(r.a)(e,["className","cssModule","fluid","tag"]),i=Object(m.h)(u()(t,c?"container-fluid":"container"),a);return l.a.createElement(s,Object(n.a)({},o,{className:i}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},205:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(6),l=a(12),s=a(112),o=a(0),i=a.n(o),u=a(122),m=a(564),p=a(149),d=a(150),f=a(151),b=a(265),E=a(266),y=a(167),g=a(198),h=a(140),w=a(141),v=a(121),O=a(41),j=a(17);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}t.a=Object(j.b)(function(e){return{}},function(e){return{signIn:function(t,a){return e(Object(O.b)(t,a))}}})(function(e){var t=Object(o.useState)({username:"",password:"",phase:0}),a=Object(s.a)(t,2),n=a[0],O=a[1],j=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,r=t.name;O(x({},n,Object(l.a)({},r,a)))},N=function(){var t=Object(c.a)(r.a.mark(function t(a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),O(x({},n,{phase:1})),t.next=4,e.signIn(n.username,n.password);case 4:O(x({},n,{phase:0}));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return i.a.createElement(m.a,null,i.a.createElement(p.a,{className:"p-4"},i.a.createElement(d.a,null,i.a.createElement(f.a,{onSubmit:function(e){return N(e)}},i.a.createElement("h1",null,"Login"),i.a.createElement("p",{className:"text-muted"},"Sign In to your account"),i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(E.a,{addonType:"prepend"},i.a.createElement(y.a,null,i.a.createElement("i",{className:"icon-user"}))),i.a.createElement(g.a,{type:"text",placeholder:"Username",autoComplete:"username",name:"username",value:n.email,onChange:j})),i.a.createElement(b.a,{className:"mb-4"},i.a.createElement(E.a,{addonType:"prepend"},i.a.createElement(y.a,null,i.a.createElement("i",{className:"icon-lock"}))),i.a.createElement(g.a,{type:"password",placeholder:"Password",autoComplete:"current-password",name:"password",value:n.password,onChange:j})),i.a.createElement(h.a,null,i.a.createElement(w.a,{xs:"6"},1===n.phase?i.a.createElement(u.a,{color:"primary",className:"px-4",disabled:!0},i.a.createElement("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," Loading"):i.a.createElement(u.a,{color:"primary",className:"px-4"},"Login")),i.a.createElement(w.a,{xs:"6",className:"text-right",style:{marginTop:"0 !important"}},i.a.createElement(v.a,{to:"/forget-password/"},i.a.createElement(u.a,{color:"link",className:"mt-3 with-margin-top-null",active:!0,tabIndex:-1,style:{marginTop:"0 !important"}},"Forget Password"))))))),i.a.createElement(p.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},i.a.createElement(d.a,{className:"text-center"},i.a.createElement("div",null,i.a.createElement("h2",null,"Sign up"),i.a.createElement(v.a,{to:"/sign-up/supplier/"},i.a.createElement(u.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"\xa0",i.a.createElement("i",{className:"fa fa-truck"}),"\xa0\xa0 Register Supplier!")),i.a.createElement(v.a,{to:"/sign-up/shipper/"},i.a.createElement(u.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"\xa0",i.a.createElement("i",{className:"fa fa-shopping-cart"}),"\xa0\xa0 Register Shipper!")),i.a.createElement(v.a,{to:"/sign-up/company/"},i.a.createElement(u.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"\xa0",i.a.createElement("i",{className:"fa fa-sitemap"}),"\xa0\xa0 Register Company!"))))))})},570:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(205),l=a(17),s=a(106),o=a(166),i=a(140),u=a(141);t.default=Object(l.b)(function(e){return{isAuthenticated:e.auth.authenticated,redirectTo:e.navigation.redirectTo}})(function(e){return e.isAuthenticated?r.a.createElement(s.a,{to:"".concat(e.redirectTo.split("#")[1])}):r.a.createElement("div",{className:"app flex-row align-items-center"},r.a.createElement(o.a,null,r.a.createElement(i.a,{className:"justify-content-center"},r.a.createElement(u.a,{md:"8"},r.a.createElement(c.a,null)))))})}}]);
//# sourceMappingURL=42.ea8273a2.chunk.js.map