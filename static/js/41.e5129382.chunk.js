(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{124:function(t,e,o){"use strict";var r=o(40),n=o.n(r),i={},a=0;e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,o=i[e]||(i[e]={});if(o[t])return o[t];var r=n.a.compile(t);return a<1e4&&(o[t]=r,a++),r}(t)(e,{pretty:!0})}},128:function(t,e,o){"use strict";var r=o(0),n=o.n(r),i=o(1),a=o.n(i),c=o(7),u=o.n(c),p=o(6),s=o.n(p),f=o(22),h=o(124),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t};var d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){s()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(f.c)(t.to),o=Object(f.c)(this.props.to);Object(f.f)(e,o)?u()(!1,"You tried to redirect to the same route you're currently on: \""+o.pathname+o.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,o=t.to;return e?"string"===typeof o?Object(h.a)(o,e.params):l({},o,{pathname:Object(h.a)(o.pathname,e.params)}):o},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,o=this.computeTo(this.props);e?t.push(o):t.replace(o)},e.prototype.render=function(){return null},e}(n.a.Component);d.propTypes={computedMatch:a.a.object,push:a.a.bool,from:a.a.string,to:a.a.oneOfType([a.a.string,a.a.object]).isRequired},d.defaultProps={push:!1},d.contextTypes={router:a.a.shape({history:a.a.shape({push:a.a.func.isRequired,replace:a.a.func.isRequired}).isRequired,staticContext:a.a.object}).isRequired},e.a=d},431:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o.n(r),i=o(128);e.default=function(){return n.a.createElement("div",null,n.a.createElement(i.a,{to:"/dashboard/dashboard"}))}}}]);
//# sourceMappingURL=41.e5129382.chunk.js.map