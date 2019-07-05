/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rain.js */ \"./src/rain.js\");\n\nwindow.Rain = _rain_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/rain.js":
/*!*********************!*\
  !*** ./src/rain.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RainContainer; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RainContainer =\n/*#__PURE__*/\nfunction () {\n  function RainContainer(config) {\n    _classCallCheck(this, RainContainer);\n\n    this.initConfig(config);\n    this.initChildren();\n    this.init();\n    this.bindEvents();\n  }\n\n  _createClass(RainContainer, [{\n    key: \"init\",\n    value: function init() {\n      this.currentBreakPoint = this.getCurrentBreakPoint();\n      if (this.config.debug) console.log('rain.js: breakpoint ' + this.currentBreakPoint);\n      if (this.config.debug) window.rain = this;\n      this.applyBreakPoints();\n      this.cols = this.el.getAttribute('data-col') || 2;\n      this.children = this.extractChildren();\n      this.columns = [];\n      this.build();\n    }\n  }, {\n    key: \"initConfig\",\n    value: function initConfig(config) {\n      config = config || {};\n      var dconf = {\n        prepend: false,\n        // insert element at top of the list\n        debug: false,\n        // activate logs\n        container: null,\n        breakpointLG: 1200,\n        breakpointMD: 1024,\n        breakpointSM: 768,\n        breakpointXS: 640,\n        childInterval: 100,\n        // defer children apparition by given ms, dont if no value\n        cols: {\n          lg: 5,\n          md: 4,\n          sm: 2,\n          xs: 1\n        },\n        //callbacks\n        onChange: null\n      };\n      this.el = config.container || config.element || config.el || config.holder || config.parent;\n      this.config = Object.assign(dconf, config);\n      this.config.cols = Object.assign(dconf.cols, config.cols);\n    }\n  }, {\n    key: \"initChildren\",\n    value: function initChildren() {\n      var _this = this;\n\n      var children = [].slice.call(this.el.children); // let rainChildren = []\n\n      children.map(function (child, i) {\n        var rainEl = document.createElement('div');\n\n        _this.el.appendChild(rainEl);\n\n        rainEl.appendChild(child);\n        rainEl.classList.add('rain-element');\n        rainEl.classList.add('rain-element-' + i);\n        console.log(rainEl.innerHTML);\n      });\n    }\n  }, {\n    key: \"build\",\n    value: function build() {\n      var _this2 = this;\n\n      this.el.classList.add('rain-container');\n      this.clearChildren();\n\n      for (var i = 0; i < this.cols; i++) {\n        var col = this.getColumn();\n        this.columns.push(col);\n        this.el.appendChild(col);\n      }\n\n      this.children.map(function (child) {\n        _this2.add(child);\n      });\n    }\n  }, {\n    key: \"applyBreakPoints\",\n    value: function applyBreakPoints() {\n      var w = window.innerWidth;\n      this.el.setAttribute('data-col', this.getBreakpointCols('lg'));\n      if (this.config.breakpointLG >= w) this.el.setAttribute('data-col', this.getBreakpointCols('lg'));\n      if (this.config.breakpointMD >= w) this.el.setAttribute('data-col', this.getBreakpointCols('md'));\n      if (this.config.breakpointSM >= w) this.el.setAttribute('data-col', this.getBreakpointCols('sm'));\n      if (this.config.breakpointXS >= w) this.el.setAttribute('data-col', this.getBreakpointCols('xs'));\n    }\n  }, {\n    key: \"getColumn\",\n    value: function getColumn() {\n      var col = document.createElement('div');\n      col.classList.add('rain-column');\n      return col;\n    }\n  }, {\n    key: \"getLowestColumn\",\n    value: function getLowestColumn() {\n      var min = this.columns[0];\n\n      for (var i = 0; i < this.columns.length; i++) {\n        var col = this.columns[i];\n        if (col.offsetHeight < min.offsetHeight) min = col;\n      }\n\n      return min;\n    }\n  }, {\n    key: \"extractChildren\",\n    value: function extractChildren() {\n      // get method\n      var children = [];\n\n      for (var i = 0; i < this.el.getElementsByClassName('rain-element').length; i++) {\n        var child = this.el.getElementsByClassName('rain-element-' + i)[0];\n        children.push(child.cloneNode('true'));\n      }\n\n      return children;\n    }\n  }, {\n    key: \"clearChildren\",\n    value: function clearChildren() {\n      this.el.innerHTML = '';\n    }\n  }, {\n    key: \"add\",\n    value: function add(addedElement) {\n      var _this3 = this;\n\n      var element = addedElement;\n      var timeout = 0;\n\n      if (this.config.childInterval) {\n        if (!this.lastAddedT) this.lastAddedT = Date.now();\n        timeout = this.lastAddedT - Date.now() + this.config.childInterval;\n        if (timeout < 0) timeout = 0;\n        this.lastAddedT = Date.now() + timeout;\n      }\n\n      setTimeout(function () {\n        if (typeof addedElement == 'string') {\n          element = document.createElement('div');\n          element.innerHTML = addedElement;\n        }\n\n        var lowest = _this3.getLowestColumn();\n\n        if (_this3.config.prepend) lowest.insertBefore(element, lowest.firstChild);else lowest.appendChild(element);\n\n        var index = _this3.el.getElementsByClassName('rain-element').length;\n\n        if (!element.classList.contains('rain-element')) {\n          element.classList.add('rain-element');\n          element.classList.add('rain-element-' + index);\n          element.setAttribute('data-index', index);\n        }\n\n        _this3.onAdd(element, element.getAttribute('data-index'));\n      }, timeout);\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.children = [];\n      this.clearChildren();\n      this.init();\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      var _this4 = this;\n\n      var self = this;\n      window.addEventListener('resize', function () {\n        var newBreakpoint = _this4.getCurrentBreakPoint();\n\n        if (_this4.currentBreakPoint != newBreakpoint && _this4.getBreakpointCols(_this4.currentBreakPoint) != _this4.getBreakpointCols(newBreakpoint)) self.init();\n      });\n    }\n  }, {\n    key: \"getCurrentBreakPoint\",\n    value: function getCurrentBreakPoint() {\n      var w = window.innerWidth;\n      if (this.config.breakpointMD <= w) return 'lg';\n      if (this.config.breakpointSM <= w) return 'md';\n      if (this.config.breakpointXS <= w) return 'sm';\n      return 'xs';\n    }\n  }, {\n    key: \"getBreakpointCols\",\n    value: function getBreakpointCols(bp) {\n      var attrCol = this.el.getAttribute('data-' + bp + '-col');\n      if (attrCol) return attrCol;\n      return this.config.cols[bp];\n    }\n  }, {\n    key: \"onAdd\",\n    value: function onAdd(element, index) {\n      if (this.config.onAdd) this.config.onAdd(element, index);\n    }\n  }]);\n\n  return RainContainer;\n}(); //RainContainer\n\n\n\n\n//# sourceURL=webpack:///./src/rain.js?");

/***/ })

/******/ });