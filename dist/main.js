!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.initConfig(e),this.initChildren(),this.init(),this.bindEvents()}var e,n,r;return e=t,(n=[{key:"init",value:function(){this.currentBreakPoint=this.getCurrentBreakPoint(),this.config.debug&&console.log("rain.js: breakpoint "+this.currentBreakPoint),this.config.debug&&(window.rain=this),this.applyBreakPoints(),this.cols=this.el.getAttribute("data-col")||2,this.children=this.extractChildren(),this.columns=[],this.build()}},{key:"initConfig",value:function(t){t=t||{};var e={prepend:!1,debug:!1,container:null,breakpointLG:1200,breakpointMD:1024,breakpointSM:768,breakpointXS:640,childInterval:100,cols:{lg:5,md:4,sm:2,xs:1}};this.el=t.container||t.element||t.el||t.holder||t.parent,this.config=Object.assign(e,t),this.config.cols=Object.assign(e.cols,t.cols)}},{key:"initChildren",value:function(){for(var t=0;t<this.el.children.length;t++){var e=this.el.children[t];e.classList.add("rain-element-"+t),e.classList.add("rain-element")}}},{key:"build",value:function(){this.el.classList.add("rain-container"),this.clearChildren();for(var t=0;t<this.cols;t++){var e=this.getColumn();this.columns.push(e),this.el.appendChild(e)}for(var n=0;n<this.children.length;n++){var i=this.children[n];this.add(i)}}},{key:"applyBreakPoints",value:function(){var t=window.innerWidth;this.el.setAttribute("data-col",this.getBreakpointCols("lg")),this.config.breakpointLG>=t&&this.el.setAttribute("data-col",this.getBreakpointCols("lg")),this.config.breakpointMD>=t&&this.el.setAttribute("data-col",this.getBreakpointCols("md")),this.config.breakpointSM>=t&&this.el.setAttribute("data-col",this.getBreakpointCols("sm")),this.config.breakpointXS>=t&&this.el.setAttribute("data-col",this.getBreakpointCols("xs"))}},{key:"getColumn",value:function(){var t=document.createElement("div");return t.classList.add("rain-column"),t}},{key:"getLowestColumn",value:function(){for(var t=this.columns[0],e=0;e<this.columns.length;e++){var n=this.columns[e];n.offsetHeight<t.offsetHeight&&(t=n)}return t}},{key:"extractChildren",value:function(){for(var t=0;t<this.el.getElementsByClassName("rain-element").length;t++){var e=this.el.getElementsByClassName("rain-element-"+t)[0];this.add(e.cloneNode("true"))}return[]}},{key:"clearChildren",value:function(){this.el.innerHTML=""}},{key:"add",value:function(t){var e=this,n=t,i=0;this.config.childInterval&&(this.lastAddedT||(this.lastAddedT=Date.now()),(i=this.lastAddedT-Date.now()+this.config.childInterval)<0&&(i=0),this.lastAddedT=Date.now()+i),setTimeout(function(){"string"==typeof t&&((n=document.createElement("div")).innerHTML=t);var i=e.getLowestColumn();e.config.prepend?i.insertBefore(n,i.firstChild):i.appendChild(n);var r=e.el.getElementsByClassName("rain-element").length;n.classList.contains("rain-element")||(n.classList.add("rain-element"),n.classList.add("rain-element-"+r),n.setAttribute("data-index",r)),e.onAdd(n,n.getAttribute("data-index"))},i)}},{key:"clear",value:function(){this.children=[],this.clearChildren(),this.init()}},{key:"bindEvents",value:function(){var t=this;window.addEventListener("resize",function(){var e=t.getCurrentBreakPoint();t.currentBreakPoint!=e&&t.getBreakpointCols(t.currentBreakPoint)!=t.getBreakpointCols(e)&&t.init()})}},{key:"getCurrentBreakPoint",value:function(){var t=window.innerWidth;return this.config.breakpointMD<=t?"lg":this.config.breakpointSM<=t?"md":this.config.breakpointXS<=t?"sm":"xs"}},{key:"getBreakpointCols",value:function(t){var e=this.el.getAttribute("data-"+t+"-col");return e||this.config.cols[t]}},{key:"onAdd",value:function(t,e){this.config.onAdd&&this.config.onAdd(t,e)}}])&&i(e.prototype,n),r&&i(e,r),t}();window.Rain=r}]);