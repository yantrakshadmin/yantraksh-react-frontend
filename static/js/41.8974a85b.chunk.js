(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,a,t){"use strict";function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],r=!0,n=!1,c=void 0;try{for(var l,s=e[Symbol.iterator]();!(r=(l=s.next()).done)&&(t.push(l.value),!a||t.length!==a);r=!0);}catch(o){n=!0,c=o}finally{try{r||null==s.return||s.return()}finally{if(n)throw c}}return t}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",function(){return r})},166:function(e,a,t){"use strict";var r=t(4),n=t(10),c=t(0),l=t.n(c),s=t(1),o=t.n(s),i=t(21),m=t.n(i),u=t(109),p={tag:u.l,fluid:o.a.bool,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,c=e.fluid,s=e.tag,o=Object(n.a)(e,["className","cssModule","fluid","tag"]),i=Object(u.h)(m()(a,c?"container-fluid":"container"),t);return l.a.createElement(s,Object(r.a)({},o,{className:i}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},205:function(e,a,t){"use strict";var r=t(3),n=t.n(r),c=t(6),l=t(12),s=t(112),o=t(0),i=t.n(o),m=t(122),u=t(564),p=t(149),d=t(150),f=t(151),b=t(265),E=t(266),y=t(167),g=t(198),h=t(140),w=t(141),v=t(121),O=t(41),j=t(17);function N(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function x(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?N(t,!0).forEach(function(a){Object(l.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}a.a=Object(j.b)(function(e){return{}},function(e){return{signIn:function(a,t){return e(Object(O.b)(a,t))}}})(function(e){var a=Object(o.useState)({username:"",password:"",phase:0}),t=Object(s.a)(a,2),r=t[0],O=t[1],j=function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;O(x({},r,Object(l.a)({},n,t)))},N=function(){var a=Object(c.a)(n.a.mark(function a(t){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),O(x({},r,{phase:1})),a.next=4,e.signIn(r.username,r.password);case 4:O(x({},r,{phase:0}));case 5:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}();return i.a.createElement(u.a,null,i.a.createElement(p.a,{className:"p-4"},i.a.createElement(d.a,null,i.a.createElement(f.a,{onSubmit:function(e){return N(e)}},i.a.createElement("h1",null,"Login"),i.a.createElement("p",{className:"text-muted"},"Sign In to your account"),i.a.createElement(b.a,{className:"mb-3"},i.a.createElement(E.a,{addonType:"prepend"},i.a.createElement(y.a,null,i.a.createElement("i",{className:"icon-user"}))),i.a.createElement(g.a,{type:"text",placeholder:"Username",autoComplete:"username",name:"username",value:r.email,onChange:j})),i.a.createElement(b.a,{className:"mb-4"},i.a.createElement(E.a,{addonType:"prepend"},i.a.createElement(y.a,null,i.a.createElement("i",{className:"icon-lock"}))),i.a.createElement(g.a,{type:"password",placeholder:"Password",autoComplete:"current-password",name:"password",value:r.password,onChange:j})),i.a.createElement(h.a,null,i.a.createElement(w.a,{xs:"6"},1===r.phase?i.a.createElement(m.a,{color:"primary",className:"px-4",disabled:!0},i.a.createElement("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," Loading"):i.a.createElement(m.a,{color:"primary",className:"px-4"},"Login")),i.a.createElement(w.a,{xs:"6",className:"text-right",style:{marginTop:"0 !important"}},i.a.createElement(v.a,{to:"/forget-password/"},i.a.createElement(m.a,{color:"link",className:"mt-3 with-margin-top-null",active:!0,tabIndex:-1,style:{marginTop:"0 !important"}},"Forget Password"))))))),i.a.createElement(p.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},i.a.createElement(d.a,{className:"text-center"},i.a.createElement("div",null,i.a.createElement("h2",null,"Sign up"),i.a.createElement(v.a,{to:"/sign-up/supplier/"},i.a.createElement(m.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"\xa0",i.a.createElement("i",{className:"fa fa-truck"}),"\xa0\xa0 Register Supplier!")),i.a.createElement(v.a,{to:"/sign-up/shipper/"},i.a.createElement(m.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"\xa0",i.a.createElement("i",{className:"fa fa-shopping-cart"}),"\xa0\xa0 Register Shipper!")),i.a.createElement(v.a,{to:"/sign-up/company/"},i.a.createElement(m.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"\xa0",i.a.createElement("i",{className:"fa fa-sitemap"}),"\xa0\xa0 Register Company!"))))))})},511:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(205),l=t(166),s=t(140),o=t(141);a.default=function(){return n.a.createElement("div",{className:"app flex-row align-items-center"},n.a.createElement(l.a,null,n.a.createElement(s.a,{className:"justify-content-center"},n.a.createElement(o.a,{md:"8"},n.a.createElement(c.a,null)))))}}}]);
//# sourceMappingURL=41.8974a85b.chunk.js.map