webpackJsonp([1],{13:function(t,e,n){"use strict";function o(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return l});var u=n(0),i=(n.n(u),n(15)),c=n(21),p=n.n(c),s=n.i(u.h)("h1",null,"Home"),f=n.i(u.h)(i.a,null),a=n.i(u.h)("p",null,"This is the Home component."),l=function(t){function e(){return o(this,t.apply(this,arguments))}return r(e,t),e.prototype.render=function(){return n.i(u.h)("div",{class:p.a.home},s,f,a)},e}(u.Component)},15:function(t,e,n){"use strict";function o(t,e){if(t)return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){"function"!=typeof e&&null!==e||(t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e))}n.d(e,"a",function(){return f});var u=n(0),i=(n.n(u),n(20)),c=n.n(i),p={showing:!0},s=n.i(u.h)("h1",null,"Preact PWA"),f=function(t){function e(){var e=o(this,t.call(this));return e.state=p,e}return r(e,t),e.prototype.componentDidMount=function(){var t=this;this.timer=setTimeout(function(){t.setState({showing:!1})},2500)},e.prototype.render=function(){return this.state.showing?n.i(u.h)("div",{class:c.a.splash},s):null},e}(u.Component)},20:function(t){t.exports={splash:"splash__1twYO","fade-out":"fade-out__1Aqni"}},21:function(t){t.exports={home:"home__MseGd"}}});