(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{109:function(e,t,n){"use strict";n.d(t,"k",function(){return i}),n.d(t,"f",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"h",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"j",function(){return f}),n.d(t,"m",function(){return p}),n.d(t,"l",function(){return b}),n.d(t,"b",function(){return h}),n.d(t,"a",function(){return m}),n.d(t,"g",function(){return v}),n.d(t,"c",function(){return g}),n.d(t,"e",function(){return j});n(124);var r,o=n(1),a=n.n(o);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function s(e,t){var n={};return Object.keys(e).forEach(function(r){-1===t.indexOf(r)&&(n[r]=e[r])}),n}function f(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var d={};function p(e){d[e]||("undefined"!==typeof console&&console.error(e),d[e]=!0)}var y="object"===typeof window&&window.Element||function(){};a.a.oneOfType([a.a.string,a.a.func,function(e,t,n){if(!(e[t]instanceof y))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},a.a.shape({current:a.a.any})]);var b=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),h={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],v={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},g=!("undefined"===typeof window||!window.document||!window.document.createElement);var j=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},124:function(e,t,n){(function(t){var n="[object AsyncFunction]",r="[object Function]",o="[object GeneratorFunction]",a="[object Null]",i="[object Proxy]",c="[object Undefined]",u="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=u||l||Function("return this")(),f=Object.prototype,d=f.hasOwnProperty,p=f.toString,y=s.Symbol,b=y?y.toStringTag:void 0;function h(e){return null==e?void 0===e?c:a:b&&b in Object(e)?function(e){var t=d.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(a){}var o=p.call(e);r&&(t?e[b]=n:delete e[b]);return o}(e):function(e){return p.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=h(e);return t==r||t==o||t==n||t==i}}).call(this,n(64))},125:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},136:function(e,t,n){"use strict";var r=n(4),o=n(10),a=n(0),i=n.n(a),c=n(1),u=n.n(c),l=n(21),s=n.n(l),f=n(109),d={tag:f.l,noGutters:u.a.bool,className:u.a.string,cssModule:u.a.object,form:u.a.bool},p=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,c=e.tag,u=e.form,l=Object(o.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(f.h)(s()(t,a?"no-gutters":null,u?"form-row":"row"),n);return i.a.createElement(c,Object(r.a)({},l,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},137:function(e,t,n){"use strict";var r=n(4),o=n(10),a=n(125),i=n.n(a),c=n(0),u=n.n(c),l=n(1),s=n.n(l),f=n(21),d=n.n(f),p=n(109),y=s.a.oneOfType([s.a.number,s.a.string]),b=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:y,offset:y})]),h={tag:p.l,xs:b,sm:b,md:b,lg:b,xl:b,className:s.a.string,cssModule:s.a.object,widths:s.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,a=e.widths,c=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),s=[];a.forEach(function(t,r){var o=e[t];if(delete l[t],o||""===o){var a=!r;if(i()(o)){var c,u=a?"-":"-"+t+"-",f=v(a,t,o.size);s.push(Object(p.h)(d()(((c={})[f]=o.size||""===o.size,c["order"+u+o.order]=o.order||0===o.order,c["offset"+u+o.offset]=o.offset||0===o.offset,c)),n))}else{var y=v(a,t,o);s.push(y)}}}),s.length||s.push("col");var f=Object(p.h)(d()(t,s),n);return u.a.createElement(c,Object(r.a)({},l,{className:f}))};g.propTypes=h,g.defaultProps=m,t.a=g},461:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(0)),a=u(n(1)),i=u(n(7)),c=n(18);function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=l(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!s(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},l(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);(0,i.default)(this.context.router,"You should not use <Link> outside a <Router>"),(0,i.default)(void 0!==t,'You must specify the "to" property');var u=this.context.router.history,l="string"===typeof t?(0,c.createLocation)(t,null,null,u.location):t,s=u.createHref(l);return o.default.createElement("a",r({},a,{onClick:this.handleClick,href:s,ref:n}))},t}(o.default.Component);f.propTypes={onClick:a.default.func,target:a.default.string,replace:a.default.bool,to:a.default.oneOfType([a.default.string,a.default.object]).isRequired,innerRef:a.default.oneOfType([a.default.string,a.default.func])},f.defaultProps={replace:!1},f.contextTypes={router:a.default.shape({history:a.default.shape({push:a.default.func.isRequired,replace:a.default.func.isRequired,createHref:a.default.func.isRequired}).isRequired}).isRequired},t.default=f},550:function(e,t,n){"use strict";n.r(t);var r=n(33),o=n(34),a=n(36),i=n(35),c=n(37),u=n(0),l=n.n(u),s=n(136),f=n(137),d=n(461),p=n.n(d),y=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(f.a,{sm:12,xs:12,md:6,xl:3,lg:3},l.a.createElement("p",{style:{fontSize:24,fontWeight:"bold"}},"Analytics"),[{title:"Dispatcher Vs LR",link:"/report-dispatcher-vs-lr",type:"dispatcher-vs-lr"},{title:"Tracking Vs LR",link:"/report-tracking-vs-lr",type:"tracking-vs-lr"},{title:"Tracking Vs Invoice",link:"/report-tracking-vs-invoice",type:"tracking-vs-invoice"}].map(function(e,t){return l.a.createElement(p.a,{key:t,to:e.link,type:e.type},l.a.createElement("p",{style:{fontSize:18}},e.title))})),l.a.createElement(f.a,{sm:12,xs:12,md:6,xl:3,lg:3},l.a.createElement("p",{style:{fontSize:24,fontWeight:"bold"}},"Reports"),[{title:"LR",link:"/report-lr",type:"lr"},{title:"Tracking",link:"/report-tracking",type:"tracking"},{title:"Invoice",link:"/report-invoice",type:"invoice"},{title:"Dispatcher",link:"/report-dispatcher",type:"dispatcher"}].map(function(e,t){return l.a.createElement(p.a,{key:t,to:e.link,type:e.type},l.a.createElement("p",{style:{fontSize:18}},e.title))})))}}]),t}(u.Component);t.default=y}}]);
//# sourceMappingURL=30.fd418a4c.chunk.js.map