(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/pc/pages/2048/index.vue":
/*!**************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/pc/pages/2048/index.vue ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"../node_modules/babel-runtime/helpers/classCallCheck.js\");\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"../node_modules/babel-runtime/helpers/createClass.js\");\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// import $ from '@pengliheng/jquery'\nwindow.by = function (name) {\n  return function (o, p) {\n    var a = o[name];\n    var b = p[name];\n    return a < b ? -1 : 1;\n  };\n};\n\nvar Stack = function () {\n  function Stack() {\n    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Stack);\n\n    this.item = [{ x: 2, y: 2, num: 2, id: 6558, color: \"#eee4da\" }, { x: 3, y: 2, num: 2, id: 8643, color: \"#eee4da\" }, { x: 2, y: 3, num: 2, id: 3558, color: \"#eee4da\" }, { x: 3, y: 3, num: 2, id: 4678, color: \"#eee4da\" }];\n    this.color = {\n      2: \"#eee4da\",\n      4: \"#ede0c8\",\n      8: \"#f2b179\",\n      16: \"#f59563\",\n      32: \"#f67c5f\",\n      64: \"#f65e3b\",\n      128: \"#edcf72\",\n      256: \"#edcc61\",\n      512: \"#0444BF\",\n      1024: \"#A79674\",\n      2048: \"#282726\"\n    };\n  }\n\n  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Stack, [{\n    key: \"random24\",\n    value: function random24() {\n      return ~~(Math.random() * 2) * 2 + 2;\n    }\n  }, {\n    key: \"random0123\",\n    value: function random0123() {\n      // 随机0/1/2/3\n      return ~~(Math.random() * 4);\n    }\n    // 生成随机数，如果重复了，就返回false\n\n  }, {\n    key: \"num\",\n    value: function num() {\n      var num = this.random24();\n      var result = {\n        x: this.random0123(),\n        y: this.random0123(),\n        num: num,\n        id: ~~(Math.random() * 10000),\n        color: this.color[num]\n      };\n      var _isExist = this.isExist({\n        x: result.x,\n        y: result.y\n      });\n      if (_isExist) return;\n      return result;\n    }\n    // 是否满了\n\n  }, {\n    key: \"isFull\",\n    value: function isFull() {\n      return this.item.filter(function (e) {\n        return e;\n      }).length > 15;\n    }\n    // 随机生成1个点\n\n  }, {\n    key: \"add\",\n    value: function add(callback) {\n      if (this.isFull()) {\n        console.log(\"get out foolish,gameover!~\");\n        return false;\n      }\n      var a = this.num();\n      if (a) {\n        console.log(\"add\");\n        // this.item[this.getNull()]=a\n        this.item.push(a);\n        if (this.isFull()) {\n          alert(\"游戏结束\");\n        }\n      } else {\n        this.add();\n      }\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(_ref) {\n      var x = _ref.x,\n          y = _ref.y;\n\n      var _isExist2 = this.isExist({ x: x, y: y }),\n          id = _isExist2.id;\n\n      var i = this.item.indexOf(e.id === id);\n      this.item[i] = null;\n    }\n  }, {\n    key: \"getNull\",\n    value: function getNull() {\n      return this.item.indexOf(null);\n    }\n  }, {\n    key: \"isExist\",\n    value: function isExist(_ref2) {\n      var x = _ref2.x,\n          y = _ref2.y;\n\n      return this.item.filter(function (e) {\n        return e;\n      }).find(function (e) {\n        return e.x === x && e.y === y;\n      });\n    }\n  }]);\n\n  return Stack;\n}();\n\nvar stack = new Stack();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      // 存储数字\n      rocks: stack.item\n    };\n  },\n  created: function created() {\n    window.app = this;\n    window.stack = stack;\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    // stack.add();\n    // stack.add();\n    document.addEventListener(\"keydown\", function (e) {\n      if (e.key === \"ArrowRight\") {\n        _this.turnRight();\n      }\n    });\n  },\n\n  methods: {\n    // 向右滑动，给keydown添加的绑定事件\n    turnRight: function turnRight() {\n      var _this2 = this;\n\n      stack.item.filter(function (e) {\n        return e;\n      }).sort(by(\"x\")).reverse().filter(function (e) {\n        // 将第四排排过滤\n        if (e.x === 3) return false;\n        return e;\n      })\n      // 将他们移到最右\n      .forEach(function (e) {\n        // 向右移动, 应该作为单独一个函数，用于穷举自身，直到移动到x >2 return;\n        _this2.calcAxis({ e: e });\n        console.log(e.id, e.num);\n      });\n      // 最后才生成2个新♦\n      // stack.add();\n      // stack.add();\n    },\n\n    // 处理移动距离的函数\n    calcAxis: function calcAxis(_ref3) {\n      var _this3 = this;\n\n      var e = _ref3.e;\n\n      var next = stack.isExist({ x: e.x + 1, y: e.y });\n      // console.log(next);\n      if (next && next.num !== e.num) {\n        return false;\n      } else if (next && next.num === e.num) {\n        e.x++;\n        e.num *= 2;\n        e.color = stack.color[e.num];\n        stack.item.filter(function (e) {\n          return e;\n        }).forEach(function (e, i) {\n          if (e.id === next.id) {\n            _this3.rocks[i] = null;\n          }\n        });\n      } else if (next === undefined) {\n        if (e.x < 3) {\n          e.x++;\n          this.calcAxis({ e: e });\n        }\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///../src/pc/pages/2048/index.vue?../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0");

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

/***/ "../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9023cbfa\",\"scoped\":true,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-9023cbfa","scoped":true,"sourceMap":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.show[data-v-9023cbfa] {\\n  position: fixed;\\n  bottom: 50vh;\\n  left: 20px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  margin-bottom: -27%;\\n}\\ndiv[data-v-9023cbfa] {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n}\\ndiv .background[data-v-9023cbfa],\\n  div .container[data-v-9023cbfa] {\\n    -webkit-box-sizing: content-box;\\n            box-sizing: content-box;\\n    -webkit-box-flex: 0;\\n        -ms-flex: 0 0 600px;\\n            flex: 0 0 600px;\\n    background-color: #bbada0;\\n    display: -webkit-inline-box;\\n    display: -ms-inline-flexbox;\\n    display: inline-flex;\\n    -ms-flex-wrap: wrap;\\n        flex-wrap: wrap;\\n    padding: 10px;\\n    -webkit-box-pack: justify;\\n        -ms-flex-pack: justify;\\n            justify-content: space-between;\\n    border-radius: 10px;\\n    width: 600px;\\n    position: absolute;\\n    z-index: -1;\\n}\\ndiv .background > span[data-v-9023cbfa],\\n    div .container > span[data-v-9023cbfa] {\\n      background-color: #eee4da59;\\n      margin: 10px;\\n      width: 130px;\\n      height: 130px;\\n      border-radius: 10px;\\n}\\ndiv .container[data-v-9023cbfa] {\\n    z-index: 0;\\n    position: relative;\\n}\\ndiv .container .list[data-v-9023cbfa] {\\n      position: absolute;\\n      font-size: 55px;\\n      font-weight: bold;\\n      -webkit-transition-property: -webkit-transform;\\n      transition-property: -webkit-transform;\\n      transition-property: transform;\\n      transition-property: transform, -webkit-transform;\\n      border-radius: 10px;\\n      overflow: hidden;\\n      -webkit-transition: 100ms ease-in-out;\\n      transition: 100ms ease-in-out;\\n}\\ndiv .container .list .inner[data-v-9023cbfa] {\\n        width: 100%;\\n        height: 100%;\\n        color: #fff;\\n        display: -webkit-inline-box;\\n        display: -ms-inline-flexbox;\\n        display: inline-flex;\\n        -webkit-box-pack: center;\\n            -ms-flex-pack: center;\\n                justify-content: center;\\n        -webkit-box-align: center;\\n            -ms-flex-align: center;\\n                align-items: center;\\n        -webkit-animation-fill-mode: backwards;\\n                animation-fill-mode: backwards;\\n        -webkit-animation: appear-data-v-9023cbfa 200ms ease-in-out;\\n                animation: appear-data-v-9023cbfa 200ms ease-in-out;\\n}\\n@-webkit-keyframes appear-data-v-9023cbfa {\\nfrom {\\n    opacity: 0;\\n    -webkit-transform: scale(0);\\n            transform: scale(0);\\n}\\nto {\\n    opacity: 1;\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n}\\n}\\n@keyframes appear-data-v-9023cbfa {\\nfrom {\\n    opacity: 0;\\n    -webkit-transform: scale(0);\\n            transform: scale(0);\\n}\\nto {\\n    opacity: 1;\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n}\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///../src/pc/pages/2048/index.vue?../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-9023cbfa%22,%22scoped%22:true,%22sourceMap%22:false%7D!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9023cbfa\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/pc/pages/2048/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9023cbfa","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/pc/pages/2048/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"container\" },\n      _vm._l(_vm.rocks, function(e, i) {\n        return e !== null\n          ? _c(\n              \"span\",\n              {\n                key: i,\n                staticClass: \"list\",\n                style:\n                  \"\\n        transform: translate(\" +\n                  e.x * 150 +\n                  \"px, \" +\n                  e.y * 150 +\n                  \"px);\\n      \",\n                attrs: { \"data-item\": JSON.stringify(e) }\n              },\n              [\n                _c(\n                  \"span\",\n                  {\n                    staticClass: \"inner\",\n                    style: \"backgroundColor: \" + e.color\n                  },\n                  [_vm._v(\"\\n        \" + _vm._s(e.num) + \"\\n      \")]\n                )\n              ]\n            )\n          : _vm._e()\n      })\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"show\" },\n      _vm._l(_vm.rocks, function(e, i) {\n        return _c(\"p\", { key: i }, [\n          _vm._v(\"\\n      \" + _vm._s(JSON.stringify(e)) + \"\\n    \")\n        ])\n      })\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"background\" }, [\n      _c(\"span\", { staticClass: \"list-0-0\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-0-1\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-0-2\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-0-3\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-1-0\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-1-1\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-1-2\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-1-3\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-2-0\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-2-1\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-2-2\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-2-3\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-3-0\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-3-1\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-3-2\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-3-3\" })\n    ])\n  }\n]\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///../src/pc/pages/2048/index.vue?../node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-9023cbfa%22,%22hasScoped%22:true,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!../node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/node_modules/vue-style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9023cbfa\",\"scoped\":true,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-9023cbfa","scoped":true,"sourceMap":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/style-compiler?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9023cbfa\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue */ \"../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-9023cbfa\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js */ \"../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"5d09306e\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///../src/pc/pages/2048/index.vue?../node_modules/vue-loader/node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-9023cbfa%22,%22scoped%22:true,%22sourceMap%22:false%7D!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addStylesClient; });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"../node_modules/vue-loader/node_modules/vue-style-loader/lib/listToStyles.js\");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack:///../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "../node_modules/vue-loader/node_modules/vue-style-loader/lib/listToStyles.js":
/*!************************************************************************************!*\
  !*** ../node_modules/vue-loader/node_modules/vue-style-loader/lib/listToStyles.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listToStyles; });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles (parentId, list) {\n  var styles = []\n  var newStyles = {}\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i]\n    var id = item[0]\n    var css = item[1]\n    var media = item[2]\n    var sourceMap = item[3]\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    }\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = { id: id, parts: [part] })\n    } else {\n      newStyles[id].parts.push(part)\n    }\n  }\n  return styles\n}\n\n\n//# sourceURL=webpack:///../node_modules/vue-loader/node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "../src/pc/pages/2048/index.vue":
/*!**************************************!*\
  !*** ../src/pc/pages/2048/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ \"../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/pc/pages/2048/index.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9023cbfa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-9023cbfa\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ \"../node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-9023cbfa\\\",\\\"hasScoped\\\":true,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/pc/pages/2048/index.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"../node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !vue-loader/node_modules/vue-style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9023cbfa\",\"scoped\":true,\"sourceMap\":false}!sass-loader!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue */ \"../node_modules/vue-loader/node_modules/vue-style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-9023cbfa\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-9023cbfa\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9023cbfa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9023cbfa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\pc\\\\pages\\\\2048\\\\index.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///../src/pc/pages/2048/index.vue?");

/***/ })

}]);