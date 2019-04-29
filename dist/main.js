!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);window.Rain=class{constructor(t){this.initConfig(t),this.initChildren(),this.init(),this.bindEvents()}init(){this.currentBreakPoint=this.getCurrentBreakPoint(),this.config.debug&&console.log("rain.js: breakpoint "+this.currentBreakPoint),this.config.debug&&(window.rain=this),this.applyBreakPoints(),this.cols=this.el.getAttribute("data-col")||2,this.children=this.extractChildren(),this.columns=[],this.build()}initConfig(t){t=t||{};let e={prepend:!1,debug:!1,container:null,breakpointLG:1200,breakpointMD:1024,breakpointSM:768,breakpointXS:640,cols:{lg:5,md:4,sm:2,xs:1},childInterval:100};this.el=t.container||t.element||t.el||t.holder||t.parent,this.config=Object.assign(e,t),this.config.cols=Object.assign(e.cols,t.cols)}initChildren(){for(let t=0;t<this.el.children.length;t++){let e=this.el.children[t];e.classList.add("rain-element-"+t),e.classList.add("rain-element")}}build(){this.el.classList.add("rain-container"),this.clearChildren();for(let t=0;t<this.cols;t++){let t=this.getColumn();this.columns.push(t),this.el.appendChild(t)}for(let t=0;t<this.children.length;t++){let e=this.children[t];this.add(e)}}applyBreakPoints(){let t=window.innerWidth;this.el.setAttribute("data-col",this.getBreakpointCols("lg")),this.config.breakpointLG>=t&&this.el.setAttribute("data-col",this.getBreakpointCols("lg")),this.config.breakpointMD>=t&&this.el.setAttribute("data-col",this.getBreakpointCols("md")),this.config.breakpointSM>=t&&this.el.setAttribute("data-col",this.getBreakpointCols("sm")),this.config.breakpointXS>=t&&this.el.setAttribute("data-col",this.getBreakpointCols("xs"))}getColumn(){var t=document.createElement("div");return t.classList.add("rain-column"),t}getLowestColumn(){for(var t=this.columns[0],e=0;e<this.columns.length;e++){var i=this.columns[e];i.offsetHeight<t.offsetHeight&&(t=i)}return t}extractChildren(){for(var t=[],e=0;e<this.el.getElementsByClassName("rain-element").length;e++){var i=this.el.getElementsByClassName("rain-element-"+e)[0];t.push(i.cloneNode("true"))}return t}clearChildren(){this.el.innerHTML=""}add(t){let e=t,i=0;console.log(this.lastAddedT),this.config.childInterval&&(this.lastAddedT||(this.lastAddedT=Date.now()),(i=this.lastAddedT-Date.now()+this.config.childInterval)<0&&(i=0),this.lastAddedT=Date.now()+i),setTimeout(()=>{"string"==typeof t&&((e=document.createElement("div")).innerHTML=t);let i=this.getLowestColumn();this.config.prepend?i.insertBefore(e,i.firstChild):i.appendChild(e);let n=this.el.getElementsByClassName("rain-element").length;e.classList.contains("rain-element")||(e.classList.add("rain-element"),e.classList.add("rain-element-"+n),e.setAttribute("data-index",n)),this.onAdd(e,e.getAttribute("data-index"))},i)}clear(){this.children=[],this.clearChildren(),this.init()}bindEvents(){var t=this;window.addEventListener("resize",()=>{let e=this.getCurrentBreakPoint();this.currentBreakPoint!=e&&this.getBreakpointCols(this.currentBreakPoint)!=this.getBreakpointCols(e)&&t.init()})}getCurrentBreakPoint(){let t=window.innerWidth;return this.config.breakpointMD<=t?"lg":this.config.breakpointSM<=t?"md":this.config.breakpointXS<=t?"sm":"xs"}getBreakpointCols(t){let e=this.el.getAttribute("data-"+t+"-col");return e||this.config.cols[t]}onAdd(t,e){this.config.onAdd&&this.config.onAdd(t,e)}}}]);