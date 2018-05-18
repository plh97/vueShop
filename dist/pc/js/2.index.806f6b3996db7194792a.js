(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../node_modules/@pengliheng/jquery/index.js":
/*!***************************************************!*\
  !*** ../node_modules/@pengliheng/jquery/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n(function (window,document,undefined) {\r\n  // 获取数据类型\r\n  const typeOf = (arg) =>{\r\n    const _result = Object.prototype.toString.call(arg)\r\n    return _result.match(/(?<=\\s)\\w*/g)[0];\r\n  }\r\n  class Query {\r\n    constructor(args) {\r\n      const type = typeOf(args)\r\n      console.log('type',type);\r\n      if(type==='String') {\r\n        this.elements = Array.prototype.slice.call(document.querySelectorAll(args));\r\n      }else if(type === 'HTMLLIElement'||type === 'HTMLDocument'||type === 'Window'){\r\n        // 初始化dom\r\n        this.elements = [args];\r\n      }\r\n      \r\n      this.author = 'pengliheng';\r\n      this.version = '0.0.1';\r\n    }\r\n    // 写方法\r\n    css(key, val) {\r\n      this.elements.forEach((dom) => { dom.style[key] = val; });\r\n      return this;\r\n    }\r\n    // 选择第i个元素\r\n    eq(i) {\r\n      this.elements = [this.elements[i]];\r\n      return this;\r\n    }\r\n    // find,查找\r\n    find(selector) {\r\n      let newNode = [];\r\n      this.elements.forEach((dom) => {\r\n        newNode = [\r\n          ...newNode,\r\n          ...dom.querySelectorAll(selector),\r\n        ];\r\n      });\r\n      this.elements = newNode;\r\n      return this;\r\n    }\r\n    attr(attr, val) {\r\n      this.elements.forEach((dom) => {\r\n        if (attr.match(/data-/)) {\r\n          dom.dataset[attr.match(/(?<=-)\\w*/g)] = val;\r\n        } else {\r\n          dom[attr] = val;\r\n        }\r\n      });\r\n      return this;\r\n    }\r\n    click(func) {\r\n      this.elements.forEach(dom=>{\r\n        dom.addEventListener('click',e=>func(e))\r\n      })\r\n      return this\r\n    }\r\n    each(func){\r\n      this.elements.forEach((dom,i)=>{\r\n        func(dom,i)\r\n      })\r\n      return this;\r\n    }\r\n    ready(func){\r\n      document.addEventListener('DOMContentLoaded', ()=>{\r\n        (func.bind(this.elements[0]))()\r\n      })\r\n      return this;\r\n    }\r\n    on(event, func){\r\n      if(event==='hover'){\r\n        this.elements.forEach(dom=>{\r\n          dom.addEventListener('mouseover',()=>{\r\n            const beforeStyle = dom.style;\r\n            (func.bind(dom))();\r\n            dom.addEventListener('mouseout',()=>{\r\n              dom.style = beforeStyle;\r\n            })\r\n          })\r\n        })\r\n      } else {\r\n        this.elements.forEach(dom=>{\r\n          dom.addEventListener(event,(e)=>(func.bind(dom))(e) )\r\n        })\r\n      }\r\n      return this\r\n    }\r\n    append(html){\r\n      this.elements.forEach(dom=>dom.innerHTML += html)\r\n      return this\r\n    }\r\n    html(html){\r\n      this.elements.forEach(dom=>dom.innerHTML = html)\r\n      return this\r\n    }\r\n\r\n    typeof(){\r\n      return this.elements.map(dom=>{\r\n        return Object.prototype.toString.call(dom)\r\n          .replace(/(\\[object HTML)|(Element\\])/g,'')\r\n          .toLocaleLowerCase();\r\n      })\r\n    }\r\n    \r\n    is(name){\r\n      return this.elements.map(dom=>{\r\n        return Object.prototype.toString.call(dom)\r\n          .replace(/(\\[object HTML)|(Element\\])/g,'')\r\n          .toLocaleLowerCase() === name;\r\n      })\r\n    }\r\n  }\r\n  const $ = selector => new Query(selector);\r\n  // 用于写属性\r\n  $.typeOf = typeOf;\r\n  $.ajax = ({\r\n    type, url, dataType, success, error, data,\r\n  }) => {\r\n    fetch(url, {\r\n      headers: {\r\n        Accept: 'application/json',\r\n        'Content-Type': 'application/json',\r\n      },\r\n      method: type,\r\n      body: JSON.stringify(data),\r\n      // credentials: 'include'\r\n    })\r\n      .then(res => res[dataType]())\r\n      .then(suc => success(suc))\r\n      .catch(err => error(err));\r\n  };\r\n  $.sleep = ms => new Promise(resolve => setTimeout(resolve, ms));\r\n\r\n  window.$ = $;\r\n  return $;\r\n}(window,document,undefined));\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ($);\r\n\n\n//# sourceURL=webpack:///../node_modules/@pengliheng/jquery/index.js?");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/pc/pages/snake/index.vue":
/*!***************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/pc/pages/snake/index.vue ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"../node_modules/babel-runtime/helpers/classCallCheck.js\");\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"../node_modules/babel-runtime/helpers/createClass.js\");\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ \"../src/pc/store/index.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.js */ \"../src/pc/pages/snake/map.js\");\n/* harmony import */ var _pengliheng_jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pengliheng/jquery */ \"../node_modules/@pengliheng/jquery/index.js\");\n\n\n//\n//\n//\n//\n//\n\n\n\n\n\nvar Trash = function () {\n  function Trash(_ref) {\n    var container = _ref.container;\n\n    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Trash);\n\n    this.container = container;\n    this.direct = 'ArrowRight';\n    this.border = {\n      width: _map_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"][0].length - 1,\n      height: _map_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length - 1\n    };\n    this.snake = [{ x: 1, y: 5 }, { x: 2, y: 5 }];\n    this.food = {\n      x: Math.floor(Math.random() * this.border.width),\n      y: Math.floor(Math.random() * this.border.height)\n    };\n  }\n\n  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Trash, [{\n    key: 'draw',\n    value: function draw() {\n      // 清空画板\n      var activeDom = document.querySelectorAll('.active');\n      if (activeDom) {\n        activeDom.forEach(function (dom) {\n          return dom.classList.remove('active');\n        });\n      }\n      this.snake.forEach(function (_ref2) {\n        var x = _ref2.x,\n            y = _ref2.y;\n\n        document.querySelector('.list-' + y + '-' + x).classList.add('active');\n      });\n      document.querySelector('.list-' + this.food.y + '-' + this.food.x).classList.add('food');\n    }\n  }, {\n    key: 'isEat',\n    value: function isEat() {\n      var top = this.snake[this.snake.length - 1];\n      if (top.x === this.food.x && top.y === this.food.y) {\n        document.querySelector('.list-' + this.food.y + '-' + this.food.x).classList.remove('food');\n        this.food = {\n          x: Math.floor(Math.random() * this.border.width),\n          y: Math.floor(Math.random() * this.border.height)\n        };\n        return true;\n      }\n      return false;\n    }\n  }, {\n    key: 'move',\n    value: function move(_ref3) {\n      var _this = this;\n\n      var time = _ref3.time;\n\n      if (this.direct === 'ArrowRight') {\n        if (this.snake[this.snake.length - 1].x === this.border.width) {\n          this.snake.push({\n            x: 0,\n            y: this.snake[this.snake.length - 1].y\n          });\n        } else {\n          this.snake.push({\n            x: this.snake[this.snake.length - 1].x + 1,\n            y: this.snake[this.snake.length - 1].y\n          });\n        }\n      } else if (this.direct === 'ArrowLeft') {\n        if (this.snake[this.snake.length - 1].x === 0) {\n          this.snake.push({\n            x: this.border.width,\n            y: this.snake[this.snake.length - 1].y\n          });\n        } else {\n          this.snake.push({\n            x: this.snake[this.snake.length - 1].x - 1,\n            y: this.snake[this.snake.length - 1].y\n          });\n        }\n      } else if (this.direct === 'ArrowDown') {\n        if (this.snake[this.snake.length - 1].y === this.border.height) {\n          this.snake.push({\n            x: this.snake[this.snake.length - 1].x,\n            y: 0\n          });\n        } else {\n          this.snake.push({\n            x: this.snake[this.snake.length - 1].x,\n            y: this.snake[this.snake.length - 1].y + 1\n          });\n        }\n      } else if (this.direct === 'ArrowUp') {\n        if (this.snake[this.snake.length - 1].y === 0) {\n          this.snake.push({\n            x: this.snake[this.snake.length - 1].x,\n            y: this.border.height\n          });\n        } else {\n          this.snake.push({\n            x: this.snake[this.snake.length - 1].x,\n            y: this.snake[this.snake.length - 1].y - 1\n          });\n        }\n      }\n      if (!this.isEat()) {\n        this.snake.shift();\n      }\n      this.draw();\n      setTimeout(function () {\n        _this.move({ time: time });\n      }, time);\n    }\n  }, {\n    key: 'turn',\n    value: function turn(_ref4) {\n      var direct = _ref4.direct;\n\n      if (this.direct === 'ArrowUp' && direct === 'ArrowDown') {\n        return;\n      } else if (this.direct === 'ArrowDown' && direct === 'ArrowUp') {\n        return;\n      } else if (this.direct === 'ArrowLeft' && direct === 'ArrowRight') {\n        return;\n      } else if (this.direct === 'ArrowRight' && direct === 'ArrowLeft') {\n        return;\n      }\n      if (direct === 'ArrowUp' || direct === 'ArrowDown' || direct === 'ArrowRight' || direct === 'ArrowLeft') {\n        this.direct = direct;\n      }\n    }\n  }, {\n    key: 'init',\n    value: function init(_ref5) {\n      var time = _ref5.time;\n\n      this.draw();\n      this.move({ time: time });\n    }\n  }]);\n\n  return Trash;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  data: function data() {\n    return {\n      ball: [],\n      cache: [],\n      numArray: [1, 2, 3],\n      colorArray: [\"#3BE\", \"#09C\", \"#A6C\", \"#93C\", \"#9C0\", \"#690\", \"#FB3\", \"#F80\", \"#F44\", \"#C00\"],\n      R: 4,\n      W: 700,\n      H: 1000\n    };\n  },\n  created: function created() {\n    window.app = this;\n  },\n  mounted: function mounted(e) {\n\n    var container = document.querySelector('.container');\n\n    container.innerHTML = _map_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (arr1, i) {\n      return arr1.map(function (arr2, j) {\n        return '<span class=\"list-' + i + '-' + j + '\"></span>';\n      });\n    }).map(function (arr1) {\n      return arr1.join('');\n    }).join('');\n\n    var trash = new Trash({ container: container });\n    trash.init({ time: 100 });\n    Object(_pengliheng_jquery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(window).on('keydown', function (e) {\n      trash.turn({ direct: e.key });\n    });\n  },\n\n  methods: {}\n});\n\n//# sourceURL=webpack:///../src/pc/pages/snake/index.vue?../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "../node_modules/babel-runtime/core-js/object/define-property.js":
/*!***********************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"../node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack:///../node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack:///../node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../node_modules/babel-runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"../node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack:///../node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "../node_modules/core-js/library/fn/object/define-property.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"../node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"../node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_a-function.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_a-function.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_an-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_an-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_core.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_core.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.5' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_ctx.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ctx.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"../node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_descriptors.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_descriptors.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"../node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_dom-create.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_dom-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"../node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"../node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_export.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_export.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"../node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"../node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"../node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"../node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"../node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_fails.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_fails.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_global.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_global.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_has.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_has.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_hide.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_hide.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"../node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"../node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"../node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"../node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"../node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"../node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-dp.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dp.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"../node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"../node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"../node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"../node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_property-desc.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_property-desc.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-primitive.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-primitive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"../node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.define-property.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"../node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"../node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"../node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///../node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/snake/index.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/snake/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.container {\\n  width: 672px;\\n  background-color: #ccc;\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n}\\n.container span {\\n    background-color: #fff;\\n    width: 30px;\\n    height: 30px;\\n    margin: 1px;\\n}\\n.container span.active {\\n      background-color: blue;\\n}\\n.container span.food {\\n      background-color: red;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///../src/pc/pages/snake/index.vue?../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22scoped%22:false,%22sourceMap%22:false%7D!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-27da190a\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/pc/pages/snake/index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-27da190a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/pc/pages/snake/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"container\" })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///../src/pc/pages/snake/index.vue?../node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-27da190a%22,%22hasScoped%22:false,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!../node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/node_modules/vue-style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/snake/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/snake/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/style-compiler?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue */ \"../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"scoped\\\":false,\\\"sourceMap\\\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/snake/index.vue\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js */ \"../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"077a9409\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///../src/pc/pages/snake/index.vue?../node_modules/vue-loader/node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22scoped%22:false,%22sourceMap%22:false%7D!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "../src/pc/pages/snake/index.vue":
/*!***************************************!*\
  !*** ../src/pc/pages/snake/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ \"../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/pc/pages/snake/index.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_27da190a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-27da190a\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ \"../node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-27da190a\\\",\\\"hasScoped\\\":false,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/pc/pages/snake/index.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"../node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !vue-loader/node_modules/vue-style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!sass-loader!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue */ \"../node_modules/vue-loader/node_modules/vue-style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"scoped\\\":false,\\\"sourceMap\\\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/snake/index.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_27da190a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_27da190a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\pc\\\\pages\\\\snake\\\\index.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///../src/pc/pages/snake/index.vue?");

/***/ }),

/***/ "../src/pc/pages/snake/map.js":
/*!************************************!*\
  !*** ../src/pc/pages/snake/map.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);\n\n//# sourceURL=webpack:///../src/pc/pages/snake/map.js?");

/***/ })

}]);