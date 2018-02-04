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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(78));
__export(__webpack_require__(79));
__export(__webpack_require__(98));
__export(__webpack_require__(99));
__export(__webpack_require__(100));
__export(__webpack_require__(101));
__export(__webpack_require__(102));
__export(__webpack_require__(103));
__export(__webpack_require__(104));
__export(__webpack_require__(105));
var Types = __webpack_require__(106);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(77));
__export(__webpack_require__(107));
__export(__webpack_require__(108));
__export(__webpack_require__(109));
__export(__webpack_require__(110));
__export(__webpack_require__(111));
__export(__webpack_require__(112));
__export(__webpack_require__(113));
__export(__webpack_require__(114));
__export(__webpack_require__(115));
__export(__webpack_require__(116));
__export(__webpack_require__(117));
__export(__webpack_require__(39));
var Types = __webpack_require__(118);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(27)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var createDesc = __webpack_require__(29);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(5);
var has = __webpack_require__(9);
var SRC = __webpack_require__(20)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(10).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(28)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mapper = __webpack_require__(80);
exports.Mapper = Mapper;
var SPTypes = __webpack_require__(93);
exports.SPTypes = SPTypes;
var Types = __webpack_require__(94);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(45);
var toPrimitive = __webpack_require__(46);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(16);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(76));
__export(__webpack_require__(119));
__export(__webpack_require__(120));
__export(__webpack_require__(122));
__export(__webpack_require__(123));
__export(__webpack_require__(124));
__export(__webpack_require__(125));
__export(__webpack_require__(41));
__export(__webpack_require__(40));
__export(__webpack_require__(42));
__export(__webpack_require__(126));
var Types = __webpack_require__(127);
exports.Types = Types;
//# sourceMappingURL=index.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Type definitions for gd-sprest
// Project: https://gunjandatta.github.io/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>
/***************************************************************************************************
MIT License

Copyright (c) 2016 Dattabase, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************************************/
__webpack_require__(43);
var Helper = __webpack_require__(17);
exports.Helper = Helper;
var mapper_1 = __webpack_require__(12);
exports.SPTypes = mapper_1.SPTypes;
var Types = __webpack_require__(128);
exports.Types = Types;
__export(__webpack_require__(1));
__export(__webpack_require__(129));
//# sourceMappingURL=index.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(13);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(53);
var defined = __webpack_require__(23);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var $export = __webpack_require__(32);
var redefine = __webpack_require__(6);
var hide = __webpack_require__(5);
var has = __webpack_require__(9);
var Iterators = __webpack_require__(11);
var $iterCreate = __webpack_require__(49);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(56);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(10);
var hide = __webpack_require__(5);
var redefine = __webpack_require__(6);
var ctx = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(52);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);
var invoke = __webpack_require__(69);
var html = __webpack_require__(36);
var cel = __webpack_require__(21);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(13)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(16);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Web
/*********************************************************************************************************************************/
var _Web = /** @class */ (function (_super) {
    __extends(_Web, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Web(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "web";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "web" } });
        return _this;
    }
    return _Web;
}(utils_1.Base));
exports.Web = _Web;
//# sourceMappingURL=web.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(121));
var lib_1 = __webpack_require__(1);
var _1 = __webpack_require__(17);
/**
 * SharePoint Configuration
 */
var _SPConfig = /** @class */ (function () {
    /**
     * Constructor
     */
    function _SPConfig(cfg, webUrl) {
        var _this = this;
        // Method to install by configuration type
        this.installByType = function (cfgType, callback, targetName) { return _this.install(callback, cfgType, targetName); };
        // Method to uninstall by the configuration type
        this.uninstallByType = function (cfgType, callback, targetName) { return _this.uninstall(callback, cfgType, targetName); };
        /**
         * Methods
         */
        // Method to create the content types
        this.createContentTypes = function (contentTypes, cfgContentTypes) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the content types exist
                if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                var _loop_1 = function (i) {
                    var cfgContentType = cfgContentTypes[i];
                    // See if this content type already exists
                    var ct = _this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                    if (ct) {
                        // Log
                        console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' already exists.");
                        // Update the configuration
                        cfgContentType.ContentType = ct;
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][Content Type] Creating the '" + cfgContentType.Name + "' content type.");
                        // See if the parent name exists
                        if (cfgContentType.ParentName) {
                            // Get the web containing the parent content type
                            (new lib_1.Web(cfgContentType.ParentWebUrl || _this._webUrl))
                                .ContentTypes()
                                .query({
                                Filter: "Name eq '" + cfgContentType.ParentName + "'"
                            })
                                .execute(function (parent) {
                                // See if the parent exists
                                if (parent.results[0]) {
                                    // Add the available content type
                                    contentTypes.addAvailableContentType(parent.results[0].Id.StringValue).execute(function (ct) {
                                        // See if it was successful
                                        if (ct.existsFl) {
                                            // Log
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");
                                            // Update the configuration
                                            cfgContentType.ContentType = ct;
                                            // Trigger the event
                                            cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                        }
                                        else {
                                            // Log
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                            console.error("[gd-sprest][Field] Error: " + ct.response);
                                        }
                                    }, true);
                                }
                                else {
                                    // Log
                                    console.log("[gd-sprest][Content Type] The parent content type '" + cfgContentType.Name + "' was not found.");
                                }
                            });
                        }
                        else {
                            // Create the content type
                            contentTypes.add({
                                Description: cfgContentType.Description,
                                Group: cfgContentType.Group,
                                Name: cfgContentType.Name
                            }).execute(function (ct) {
                                // See if it was successful
                                if (ct.existsFl) {
                                    // Log
                                    console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");
                                    // Update the configuration
                                    cfgContentType.ContentType = ct;
                                    // Trigger the event
                                    cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                }
                                else {
                                    // Log
                                    console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                    console.error("[gd-sprest][Field] Error: " + ct.response);
                                }
                            });
                        }
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgContentTypes.length; i++) {
                    _loop_1(i);
                }
                // Wait for the requests to complete
                contentTypes.done(function () {
                    var _loop_2 = function (i) {
                        var cfgContentType = cfgContentTypes[i];
                        var cfgUpdate = {};
                        var updateFl = false;
                        // Ensure the content type exists
                        if (cfgContentType.ContentType == null) {
                            return "continue";
                        }
                        /**
                         * See if we need to update the properties
                         */
                        // Description
                        if (cfgContentType.ContentType.Description != cfgContentType.Description) {
                            // Update the configuration
                            cfgUpdate.Description = cfgContentType.Description;
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Description requires update.");
                            // Set the flag
                            updateFl = true;
                        }
                        // Group
                        if (cfgContentType.ContentType.Group != cfgContentType.Group) {
                            // Update the configuration
                            cfgUpdate.Group = cfgContentType.Group;
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Group requires update.");
                            // Set the flag
                            updateFl = true;
                        }
                        // JSLink
                        if (cfgContentType.ContentType.JSlink != cfgContentType.JSLink) {
                            // Update the configuration
                            cfgUpdate.JSLink = cfgContentType.JSLink;
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] JSLink requires update.");
                            // Set the flag
                            updateFl = true;
                        }
                        // Name
                        if (cfgContentType.ContentType.Name != cfgContentType.Name) {
                            // Update the configuration
                            cfgUpdate.Name = cfgContentType.Name;
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Name requires update.");
                            // Set the flag
                            updateFl = true;
                        }
                        // See if an update is needed
                        if (updateFl) {
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Updating the webpart.");
                            // Update the content type
                            cfgContentType.ContentType.update({ JSLink: cfgContentType.JSLink }).execute(function () {
                                // Log
                                console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Update request completed.");
                                // Trigger the event
                                cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                            });
                        }
                        else {
                            // Trigger the event
                            cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                        }
                    };
                    // Parse the configuration
                    for (var i = 0; i < cfgContentTypes.length; i++) {
                        _loop_2(i);
                    }
                    // Wait for the requests to complete
                    contentTypes.done(function () {
                        // Resolve the promise
                        resolve();
                    });
                });
            });
        };
        // Method to create the fields
        this.createFields = function (fields, cfgFields) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the fields exist
                if (cfgFields == null || cfgFields.length == 0) {
                    // Resolve the promise and return
                    resolve();
                    return;
                }
                var _loop_3 = function (i) {
                    var cfgField = cfgFields[i];
                    // See if this field already exists
                    var field = _this.isInCollection("InternalName", cfgField.name, fields.results);
                    if (field) {
                        // Log
                        console.log("[gd-sprest][Field] The field '" + cfgField.name + "' already exists.");
                        // Trigger the event
                        cfgField.onUpdated ? cfgField.onUpdated(field) : null;
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][Field] Creating the '" + cfgField.name + "' field.");
                        //
                        var onFieldCreated_1 = function (field) {
                            // See if it was successful
                            if (field.existsFl) {
                                // Log
                                console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was created successfully.");
                                // Trigger the event
                                cfgField.onCreated ? cfgField.onCreated(field) : null;
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][Field] The field '" + cfgField.name + "' failed to be created.");
                                console.error("[gd-sprest][Field] Error: " + field.response);
                            }
                        };
                        // Compute the schema xml
                        _1.FieldSchemaXML.generate(cfgField).then(function (response) {
                            var schemas = typeof (response) === "string" ? [response] : response;
                            // Parse the fields to add
                            for (var i_1 = 0; i_1 < schemas.length; i_1++) {
                                // Add the field
                                fields.createFieldAsXml(schemas[i_1]).execute(onFieldCreated_1, true);
                            }
                        });
                    }
                };
                // Parse the fields
                for (var i = 0; i < cfgFields.length; i++) {
                    _loop_3(i);
                }
                // Wait for the requests to complete
                fields.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to create the lists
        this.createLists = function (lists, cfgLists) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != _1.SPCfgType.Lists) {
                        // Resolve the promise and return
                        resolve();
                        return;
                    }
                }
                // Ensure the lists exist
                if (cfgLists == null || cfgLists.length == 0) {
                    // Resolve the promise and return
                    resolve();
                    return;
                }
                var _loop_4 = function (i) {
                    var cfgList = cfgLists[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this list
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // See if this content type already exists
                    var list = _this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                    if (list) {
                        // Log
                        console.log("[gd-sprest][List] The list '" + cfgList.ListInformation.Title + "' already exists.");
                    }
                    else {
                        // Log
                        console.log("[gd-sprest][List] Creating the '" + cfgList.ListInformation.Title + "' list.");
                        // Update the list name and remove spaces
                        var listInfo_1 = cfgList.ListInformation;
                        var listName_1 = listInfo_1.Title;
                        listInfo_1.Title = listName_1.replace(/ /g, "");
                        // Add the list
                        lists.add(listInfo_1)
                            .execute(function (list) {
                            // Restore the list name in the configuration
                            listInfo_1.Title = listName_1;
                            // See if the request was successful
                            if (list.existsFl) {
                                // See if we need to update the list
                                if (list.existsFl && list.Title != listName_1) {
                                    // Update the list
                                    list.update({ Title: listName_1 }).execute(function () {
                                        // Log
                                        console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                    });
                                }
                                else {
                                    // Log
                                    console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                }
                                // Trigger the event
                                cfgList.onCreated ? cfgList.onCreated(list) : null;
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][List] The list '" + listInfo_1.Title + "' failed to be created.");
                                console.log("[gd-sprest][List] Error: '" + list.response);
                            }
                        });
                    }
                };
                // Parse the content types
                for (var i = 0; i < cfgLists.length; i++) {
                    _loop_4(i);
                }
                // Wait for the requests to complete
                lists.done(function () {
                    // Update the lists
                    _this.updateLists(cfgLists).then(function () {
                        // Resolve the promise
                        resolve();
                    });
                });
            });
        };
        // Method to create the user custom actions
        this.createUserCustomActions = function (customActions, cfgCustomActions) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != _1.SPCfgType.SiteUserCustomActions || _this._cfgType != _1.SPCfgType.WebUserCustomActions) {
                        // Resolve the promise
                        resolve();
                        return;
                    }
                }
                // Ensure the lists exist
                if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                // Parse the custom actions
                for (var i = 0; i < cfgCustomActions.length; i++) {
                    var cfgCustomAction = cfgCustomActions[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this custom action
                        if (cfgCustomAction.Name.toLowerCase() != _this._targetName ||
                            cfgCustomAction.Title.toLowerCase() != _this._targetName) {
                            // Skip this custom action
                            continue;
                        }
                    }
                    // See if this custom action already exists
                    if (_this.isInCollection("Name", cfgCustomAction.Name, customActions.results)) {
                        // Log
                        console.log("[gd-sprest][Custom Action] The custom action '" + cfgCustomAction.Name + "' already exists.");
                    }
                    else {
                        // Add the custom action
                        customActions.add(cfgCustomAction).execute(function (ca) {
                            // Ensure it exists
                            if (ca.existsFl) {
                                // Log
                                console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was created successfully.");
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' failed to be created.");
                                console.log("[gd-sprest][Custom Action] Error: " + ca.response);
                            }
                        }, true);
                    }
                }
                // Wait for the requests to complete
                customActions.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to create the list views
        this.createViews = function (views, cfgViews) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the list views exist
                if (cfgViews == null || cfgViews.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                var _loop_5 = function (i) {
                    var cfgView = cfgViews[i];
                    // See if this view exists
                    var view = _this.isInCollection("Title", cfgView.ViewName, views.results);
                    if (view) {
                        // Log
                        console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' already exists.");
                    }
                    else {
                        // Add the view
                        views.add({
                            Title: cfgView.ViewName,
                            ViewQuery: cfgView.ViewQuery
                        }).execute(function (view) {
                            // Ensure it exists
                            if (view.existsFl) {
                                // Log
                                console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' was created successfully.");
                                // Trigger the event
                                cfgView.onCreated ? cfgView.onCreated(view) : null;
                            }
                            else {
                                // Log
                                console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' failed to be created.");
                                console.log("[gd-sprest][View] Error: " + view.response);
                            }
                        }, true);
                    }
                };
                // Parse the views
                for (var i = 0; i < cfgViews.length; i++) {
                    _loop_5(i);
                }
                // Wait for the requests to complete
                views.done(function () {
                    // Update the views
                    _this.updateViews(views, cfgViews).then(function () {
                        // Resolve the promise
                        resolve();
                    });
                });
            });
        };
        // Method to create the web parts
        this.createWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            // See if the configuration type exists
            if (_this._cfgType) {
                // Ensure it's for this type
                if (_this._cfgType != _1.SPCfgType.WebParts) {
                    return;
                }
            }
            // Ensure the configuration exists
            if (cfgWebParts == null || cfgWebParts.length == 0) {
                return;
            }
            // Log
            console.log("[gd-sprest][WebPart] Creating the web parts.");
            // Get the root web
            (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                .Lists("Web Part Gallery")
                .RootFolder()
                .query({
                Expand: ["Files"]
            })
                .execute(function (folder) {
                var _loop_6 = function (i) {
                    var cfgWebPart = cfgWebParts[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this list
                        if (cfgWebPart.FileName.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // See if this webpart exists
                    var file = _this.isInCollection("Name", cfgWebPart.FileName, folder.Files.results);
                    if (file.existsFl) {
                        // Log
                        console.log("[gd-sprest][WebPart] The webpart '" + cfgWebPart.FileName + "' already exists.");
                        // Trigger the event
                        cfgWebPart.onUpdated ? cfgWebPart.onUpdated(file) : null;
                    }
                    else {
                        // Trim the xml
                        var xml = cfgWebPart.XML.trim();
                        // Convert the string to an array buffer
                        var buffer = new ArrayBuffer(xml.length * 2);
                        var bufferView = new Uint16Array(buffer);
                        for (var j = 0; j < xml.length; j++) {
                            bufferView[j] = xml.charCodeAt(j);
                        }
                        // Create the webpart, but execute the requests one at a time
                        folder.Files.add(true, cfgWebPart.FileName, buffer).execute(function (file) {
                            // See if group exists
                            if (cfgWebPart.Group) {
                                // Set the target to the root web
                                (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                                    .Lists("Web Part Gallery")
                                    .Items()
                                    .query({
                                    Filter: "FileLeafRef eq '" + cfgWebPart.FileName + "'"
                                })
                                    .execute(function (items) {
                                    // Update the item
                                    items.results[0].update({
                                        Group: cfgWebPart.Group
                                    }).execute();
                                });
                            }
                            // Log
                            console.log("[gd-sprest][WebPart] The '" + file.Name + "' webpart file was uploaded successfully.");
                            // Trigger the event
                            cfgWebPart.onCreated ? cfgWebPart.onCreated(file) : null;
                        });
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgWebParts.length; i++) {
                    _loop_6(i);
                }
            });
        };
        // Method to install the site components
        this.installSite = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure site actions exist
                if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site == null) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Log
                console.log("[gd-sprest] Loading the site information...");
                // Get the site
                (new lib_1.Site(_this._webUrl))
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    .execute(function (site) {
                    // Install the user custom actions
                    _this.createUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).then(function () {
                        // Resolve the promise
                        resolve(site);
                    });
                });
            });
        };
        // Method to install the web components
        this.installWeb = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Log
                console.log("[gd-sprest] Loading the web information...");
                // Get the web
                (new lib_1.Web(_this._webUrl))
                    .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                    .execute(function (web) {
                    // Create the fields
                    _this.createFields(web.Fields, _this._configuration.Fields).then(function () {
                        // Create the content types
                        _this.createContentTypes(web.ContentTypes, _this._configuration.ContentTypes).then(function () {
                            // Create the lists
                            _this.createLists(web.Lists, _this._configuration.ListCfg).then(function () {
                                // Create the web custom actions
                                _this.createUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).then(function () {
                                    // Resolve the promise
                                    resolve();
                                });
                            });
                        });
                    });
                });
            });
        };
        // Method to see if an object exists in a collection
        this.isInCollection = function (key, value, collection) {
            var valueLower = value.toLowerCase();
            // Parse the collection
            for (var i = 0; i < collection.length; i++) {
                var keyValue = collection[i][key];
                keyValue = keyValue ? keyValue.toLowerCase() : "";
                // See if the item exists
                if (valueLower == keyValue) {
                    // Return true
                    return collection[i];
                }
            }
            // Not in the collection
            return false;
        };
        // Method to remove the content type
        this.removeContentTypes = function (contentTypes, cfgContentTypes) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the content types exist
                if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                var _loop_7 = function (i) {
                    var cfgContentType = cfgContentTypes[i];
                    // Get the field
                    var ct = _this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                    if (ct) {
                        // Remove the field
                        ct.delete().execute(function () {
                            // Log
                            console.log("[gd-sprest][Field] The content type '" + ct.Name + "' was removed.");
                        }, true);
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgContentTypes.length; i++) {
                    _loop_7(i);
                }
                // Wait for the requests to complete
                contentTypes.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to remove the fields
        this.removeFields = function (fields, cfgFields) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the fields exist
                if (cfgFields == null || cfgFields.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                var _loop_8 = function (i) {
                    var cfgField = cfgFields[i];
                    // Get the field
                    var field = _this.isInCollection("InternalName", cfgField.name, fields.results);
                    if (field) {
                        // Remove the field
                        field.delete().execute(function () {
                            // Log
                            console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was removed.");
                        }, true);
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgFields.length; i++) {
                    _loop_8(i);
                }
                // Wait for the requests to complete
                fields.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to remove the lists
        this.removeLists = function (lists, cfgLists) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != _1.SPCfgType.Lists) {
                        // Resolve the promise
                        resolve();
                        return;
                    }
                }
                // Ensure the lists exist
                if (cfgLists == null || cfgLists.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                var _loop_9 = function (i) {
                    var cfgList = cfgLists[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this list
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // Get the list
                    var list = _this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                    if (list) {
                        // Remove the list
                        list.delete().execute(function () {
                            // Log
                            console.log("[gd-sprest][List] The list '" + list.Title + "' was removed.");
                        }, true);
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgLists.length; i++) {
                    _loop_9(i);
                }
                // Wait for the requests to complete
                lists.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to remove the user custom actions
        this.removeUserCustomActions = function (customActions, cfgCustomActions) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != _1.SPCfgType.SiteUserCustomActions || _this._cfgType != _1.SPCfgType.WebUserCustomActions) {
                        // Resolve the promise
                        resolve();
                        return;
                    }
                }
                // Ensure the custom actions exist
                if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                var _loop_10 = function (i) {
                    var cfgCustomAction = cfgCustomActions[i];
                    // See if the target name exists
                    if (_this._cfgType && _this._targetName) {
                        // Ensure it's for this custom action
                        if (cfgCustomAction.Name.toLowerCase() != _this._targetName ||
                            cfgCustomAction.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    // Get the custom action
                    var ca = _this.isInCollection("Name", cfgCustomAction.Name, customActions.results);
                    if (ca) {
                        // Remove the custom action
                        ca.delete().execute(function () {
                            // Log
                            console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was removed.");
                        }, true);
                    }
                };
                // Parse the configuration
                for (var i = 0; i < cfgCustomActions.length; i++) {
                    _loop_10(i);
                }
                // Wait for the requests to complete
                customActions.done(function () {
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to remove the web parts
        this.removeWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the configuration type exists
                if (_this._cfgType) {
                    // Ensure it's for this type
                    if (_this._cfgType != _1.SPCfgType.WebParts) {
                        // Resolve the promise
                        resolve();
                        return;
                    }
                }
                // Ensure the configuration exists
                if (cfgWebParts == null || cfgWebParts.length == 0) {
                    // Resolve the promise and return it
                    resolve();
                    return;
                }
                // Log
                console.log("[gd-sprest][WebPart] Creating the web parts.");
                // Get the root web
                (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                    .Lists("Web Part Gallery")
                    .RootFolder()
                    .Files()
                    .execute(function (files) {
                    var _loop_11 = function (i) {
                        var cfgWebPart = cfgWebParts[i];
                        // See if the target name exists
                        if (_this._cfgType && _this._targetName) {
                            // Ensure it's for this list
                            if (cfgWebPart.FileName.toLowerCase() != _this._targetName) {
                                return "continue";
                            }
                        }
                        // Get the file
                        var file = _this.isInCollection("Name", cfgWebPart.FileName, files.results);
                        if (file) {
                            // Remove the file
                            file.delete().execute(function () {
                                // Log
                                console.log("[gd-sprest][WebPart] The webpart '" + file.Name + "' file was removed.");
                            }, true);
                        }
                    };
                    // Parse the configuration
                    for (var i = 0; i < cfgWebParts.length; i++) {
                        _loop_11(i);
                    }
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to update the lists
        this.updateLists = function (cfgLists) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                var request = function (idx, resolve) {
                    // Get the list configuration
                    var cfgList = cfgLists[idx];
                    // See if the target name exists
                    if (_this._targetName) {
                        // Ensure it's for this list
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            // Update the next list
                            request(idx + 1, resolve);
                            return;
                        }
                    }
                    // Ensure the configuration exists
                    if (cfgList) {
                        // Get the web
                        (new lib_1.Web(_this._webUrl))
                            .Lists(cfgList.ListInformation.Title)
                            .query({
                            Expand: ["ContentTypes", "Fields", "UserCustomActions", "Views"]
                        })
                            .execute(function (list) {
                            // See if the title field is being updated
                            if (cfgList.TitleFieldDisplayName) {
                                // Parse the fields
                                for (var i = 0; i < list.Fields.results.length; i++) {
                                    var field = list.Fields.results[i];
                                    // See if this is the title field
                                    if (field.InternalName == "Title") {
                                        // See if an update is required
                                        if (field.Title != cfgList.TitleFieldDisplayName) {
                                            // Update the field name
                                            field.update({ Title: cfgList.TitleFieldDisplayName }).execute(function () {
                                                // Log
                                                console.log("[gd-sprest][List] The 'Title' field's display name was updated to '" + cfgList.TitleFieldDisplayName + "'.");
                                            });
                                        }
                                    }
                                }
                            }
                            // Update the list fields
                            _this.createFields(list.Fields, cfgList.CustomFields).then(function () {
                                // Update the content types
                                _this.createContentTypes(list.ContentTypes, cfgList.ContentTypes).then(function () {
                                    // Update the views
                                    _this.createViews(list.Views, cfgList.ViewInformation).then(function () {
                                        // Trigger the event
                                        cfgList.onUpdated ? cfgList.onUpdated(list) : null;
                                        // Update the next list
                                        request(idx + 1, resolve);
                                    });
                                });
                            });
                            // Update the user custom actions
                            _this.createUserCustomActions(list.UserCustomActions, cfgList.UserCustomActions);
                        });
                    }
                    else {
                        // Resolve the promise
                        resolve();
                    }
                };
                // Execute the request
                request(0, resolve);
            });
        };
        // Method to update the views
        this.updateViews = function (views, cfgViews) {
            var counter = 0;
            // Return a promise
            return new Promise(function (resolve, reject) {
                var _loop_12 = function (i) {
                    var cfgView = cfgViews[i];
                    // Get the view
                    var view = views.getByTitle(cfgView.ViewName);
                    // See if the view fields are defined
                    if (cfgView.ViewFields && cfgView.ViewFields.length > 0) {
                        // Log
                        console.log("[gd-sprest][View] Updating the view fields for the '" + cfgView.ViewName + "' view.");
                        // Clear the view fields
                        view.ViewFields().removeAllViewFields().execute(true);
                        // Parse the view fields
                        for (var i_2 = 0; i_2 < cfgView.ViewFields.length; i_2++) {
                            // Add the view field
                            view.ViewFields().addViewField(cfgView.ViewFields[i_2]).execute(true);
                        }
                    }
                    // See if we are updating the view properties
                    if (cfgView.JSLink || cfgView.ViewQuery) {
                        var props = {};
                        // Log
                        console.log("[gd-sprest][View] Updating the view properties for the '" + cfgView.ViewName + "' view.");
                        // Set the properties
                        cfgView.JSLink ? props["JSLink"] = cfgView.JSLink : null;
                        cfgView.ViewQuery ? props["ViewQuery"] = cfgView.ViewQuery : null;
                        // Update the view
                        view.update(props).execute(true);
                    }
                    // Wait for the requests to complete
                    view.done(function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        // Trigger the event
                        cfgView.onUpdated ? cfgView.onUpdated(view) : null;
                        // See if we are done
                        if (++counter >= cfgViews.length) {
                            // Resolve the promise
                            resolve();
                        }
                    });
                };
                // Parse the views
                for (var i = 0; i < cfgViews.length; i++) {
                    _loop_12(i);
                }
            });
        };
        // Method to uninstall the site components
        this.uninstallSite = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Log
                console.log("[gd-sprest][uninstall] Loading the site information...");
                // Ensure site actions exist
                if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site == null) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Get the site
                (new lib_1.Site(_this._webUrl))
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    .execute(function (site) {
                    // Remove the user custom actions
                    _this.removeUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).then(function () {
                        // Resolve the promise
                        resolve(site);
                    });
                });
            });
        };
        // Method to uninstall the web components
        this.uninstallWeb = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Log
                console.log("[gd-sprest][uninstall] Loading the web information...");
                // Get the web
                (new lib_1.Web(_this._webUrl))
                    .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                    .execute(function (web) {
                    // Remove the fields
                    _this.removeFields(web.Fields, _this._configuration.Fields).then(function () {
                        // Remove the content types
                        _this.removeContentTypes(web.ContentTypes, _this._configuration.ContentTypes).then(function () {
                            // Remove the lists
                            _this.removeLists(web.Lists, _this._configuration.ListCfg).then(function () {
                                // Remove the web custom actions
                                _this.removeUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).then(function () {
                                    // Resolve the promise
                                    resolve();
                                });
                            });
                        });
                    });
                });
            });
        };
        // Save the configuration
        this._configuration = cfg;
        // Save the target web url
        this._webUrl = webUrl;
    }
    /**
     * Public Methods
     */
    // Method to install the configuration
    _SPConfig.prototype.install = function (callback, cfgType, targetName) {
        var _this = this;
        // Update the global variables
        this._cfgType = cfgType;
        this._targetName = targetName ? targetName.toLowerCase() : null;
        // Install the web components
        this.installWeb().then(function () {
            // Install the site components
            _this.installSite().then(function () {
                // Create the webparts
                _this.createWebParts();
                // Log
                console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                // See if the callback exists
                if (callback && typeof (callback) === "function") {
                    // Execute the callback
                    callback();
                }
            });
        });
    };
    // Method to uninstall the configuration
    _SPConfig.prototype.uninstall = function (callback, cfgType, targetName) {
        var _this = this;
        // Update the global variables
        this._cfgType = cfgType;
        this._targetName = targetName;
        // Uninstall the web components
        this.uninstallWeb().then(function () {
            // Uninstall the site components
            _this.uninstallSite().then(function () {
                // Remove the webparts
                _this.removeWebParts().then(function () {
                    // Log
                    console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                    // See if the callback exists
                    if (callback && typeof (callback) === "function") {
                        // Execute the callback
                        callback();
                    }
                });
            });
        });
    };
    return _SPConfig;
}());
;
exports.SPConfig = _SPConfig;
//# sourceMappingURL=spCfg.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Convert a JSON string to a base object
 */
exports.parse = function (jsonString) {
    // Try to parse the string
    try {
        var obj = JSON.parse(jsonString);
        // Create a base object
        var base = new utils_1.Base(obj.props);
        // Set the properties
        base.response = obj.response;
        base.status = obj.status;
        // Update the object
        base.updateDataObject(false);
        // Return the base object
        return base;
    }
    catch (_a) { }
    return null;
};
//# sourceMappingURL=parse.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Taxonomy Helper Class
 */
var _Taxonomy = /** @class */ (function () {
    function _Taxonomy() {
        var _this = this;
        /**
         * Method to find a term by id
         */
        this.findById = function (term, termId) {
            // See if this is the root node
            if (term.info && term.info.id == termId) {
                // Return the root node
                return term;
            }
            // Parse the child nodes
            for (var prop in term) {
                // Skip the info and parent
                if (prop == "info" || prop == "parent") {
                    continue;
                }
                // Find the term by id
                var childTerm = _this.findById(term[prop], termId);
                if (childTerm) {
                    return childTerm;
                }
            }
        };
        /**
         * Method to find a term by name
         */
        this.findByName = function (term, termName) {
            // See if this is the root node
            if (term.info && term.info.name == termName) {
                // Return the root node
                return term;
            }
            // Parse the child nodes
            for (var prop in term) {
                // Skip the info and parent
                if (prop == "info" || prop == "parent") {
                    continue;
                }
                // Find the term by id
                var childTerm = _this.findByName(term[prop], termName);
                if (childTerm) {
                    return childTerm;
                }
            }
        };
        /**
         * Method to get the terms by id
         */
        this.getTermsById = function (termStoreId, termSetId) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Load the scripts
                _this.loadScripts().then(function () {
                    // Get the taxonomy session
                    var context = SP.ClientContext.get_current();
                    var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                    // Get the term set terms
                    var termStore = session.get_termStores().getById(termStoreId);
                    var termSet = termStore.getTermSet(termSetId);
                    var terms = termSet.getAllTerms();
                    context.load(termSet);
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    // Execute the request
                    context.executeQueryAsync(function () {
                        // Resolve the promise
                        resolve(_this.getTerms(termSet, terms));
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        // Log
                        console.error("[gd-sprest] Error getting the term group.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        // Reject the promise
                        reject(args);
                    });
                });
            });
        };
        /**
         * Method to get the term set by id
         */
        this.getTermSetById = function (termStoreId, termSetId) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the terms
                _this.getTermsById(termStoreId, termSetId).then(function (terms) {
                    // Resolve the promise
                    resolve(_this.toObject(terms));
                });
            });
        };
        /**
         * Method to get the terms from the default site collection
         */
        this.getTermsFromDefaultSC = function (termSetName) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the term group
                _this.getTermGroup().then(function (_a) {
                    var context = _a.context, termGroup = _a.termGroup;
                    // Get the term set terms
                    var termSet = termGroup.get_termSets().getByName(termSetName);
                    var terms = termSet.getAllTerms();
                    context.load(termSet);
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    // Execute the request
                    context.executeQueryAsync(function () {
                        // Resolve the promise
                        resolve(_this.getTerms(termSet, terms));
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        // Log
                        console.error("[gd-sprest] Error getting the terms from the default site collection.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        // Reject the promise
                        reject(args);
                    });
                });
            });
        };
        /**
         * Method to get the term set from the default site collection
         */
        this.getTermSetFromDefaultSC = function (termSetName) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the terms
                _this.getTermsFromDefaultSC(termSetName).then(function (terms) {
                    // Resolve the object
                    resolve(_this.toObject(terms));
                });
            });
        };
        /**
         * Method to get a terms from a specified group
         */
        this.getTermsByGroupName = function (termSetName, groupName) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the term group
                _this.getTermGroup(groupName).then(function (_a) {
                    var context = _a.context, termGroup = _a.termGroup;
                    // Get the term set terms
                    var termSet = termGroup.get_termSets().getByName(termSetName);
                    var terms = termSet.getAllTerms();
                    context.load(termSet);
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    // Execute the request
                    context.executeQueryAsync(function () {
                        // Resolve the promise
                        resolve(_this.getTerms(termSet, terms));
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        // Log
                        console.error("[gd-sprest] Error getting the terms.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        // Reject the promise
                        reject(args);
                    });
                });
            });
        };
        /**
         * Method to get the term set from the default site collection
         */
        this.getTermSetByGroupName = function (termSetName, groupName) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the terms
                _this.getTermsByGroupName(termSetName, groupName).then(function (terms) {
                    // Resolve the object
                    resolve(_this.toObject(terms));
                });
            });
        };
        /**
         * Method to ensure the taxonomy script references are loaded.
         */
        this.loadScripts = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Ensure the core script is loaded
                SP.SOD.executeFunc("sp.js", "SP.Utilities.Utility", function () {
                    // Ensure the taxonomy script is loaded
                    SP.SOD.registerSod("sp.taxonomy.js", SP.Utilities.Utility.getLayoutsPageUrl("sp.taxonomy.js"));
                    SP.SOD.executeFunc("sp.taxonomy.js", "SP.Taxonomy.TaxonomySession", function () {
                        // Resolve the promise
                        resolve();
                    });
                }, "sp.js");
            });
        };
        /**
         * Method to convert a term to an array of term information
         */
        this.toArray = function (term) {
            var terms = [];
            // Recursive method to extract the child terms
            var getChildTerms = function (term, terms) {
                // Parse the properties
                for (var prop in term) {
                    // Skip the info and parent properties
                    if (prop == "info" || prop == "parent") {
                        continue;
                    }
                    // Add the child term
                    var childTerm = term[prop];
                    terms.push(childTerm.info);
                    // Add the child terms
                    getChildTerms(childTerm, terms);
                }
            };
            // Ensure the term exists
            if (term) {
                // See if the root node contains term information
                if (term.info) {
                    // Add the root term
                    terms.push(term.info);
                }
                // Get the child terms
                getChildTerms(term, terms);
            }
            // Return the child terms
            return terms;
        };
        /**
         * Method to convert a term to a field value
         */
        this.toFieldValue = function (term) {
            var termInfo = term ? term["info"] || term : null;
            // Ensure the term exists
            if (termInfo) {
                return {
                    __metadata: { "type": "SP.Taxonomy.TaxonomyFieldValue" },
                    Label: termInfo.name,
                    TermGuid: termInfo.id,
                    WssId: -1
                };
            }
            // Return nothing
            return null;
        };
        /**
         * Method to convert a collection of terms to a field value
         */
        this.toFieldMultiValue = function (terms) {
            var results = [];
            // Ensure terms exist
            if (terms && terms.length > 0) {
                // Parse the terms
                for (var i = 0; i < terms.length; i++) {
                    var termInfo = terms[i]["info"] || terms[i];
                    // Add the term
                    results.push(";#" + termInfo.name + "|" + termInfo.id);
                }
            }
            // Return a blank array
            return {
                __metadata: { type: "Collection(SP.Taxonomy.TaxonomyFieldValue)" },
                results: results
            };
        };
        /**
         * Method to convert the terms to an object
         */
        this.toObject = function (terms) {
            var root = {};
            // Recursive method to add terms
            var addTerm = function (node, info, path) {
                var term = node;
                var termName = "";
                // Loop for each term
                while (path.length > 0) {
                    // Ensure the term exists
                    termName = path[0];
                    if (term[termName] == null) {
                        // Create the term
                        term[termName] = {};
                    }
                    // Set the term
                    var parent_1 = term;
                    term = term[termName];
                    // Set the parent
                    term.parent = parent_1;
                    // Remove the term from the path
                    path.splice(0, 1);
                }
                // Set the info
                term.info = info;
            };
            // Ensure the terms exist
            if (terms) {
                // Parse the terms
                for (var i = 0; i < terms.length; i++) {
                    var term = terms[i];
                    // See if this is the root term
                    if (term.pathAsString == "") {
                        // Set the root information
                        root.info = term;
                    }
                    else {
                        // Add the term
                        addTerm(root, term, term.pathAsString.split(";"));
                    }
                }
            }
            // Return the root term
            return root;
        };
        /**
         * Private Methods
         */
        /**
         * Method to get the terms
         */
        this.getTerms = function (termSet, termSetTerms) {
            var terms = [];
            // Add the root term
            terms.push({
                description: termSet.get_description(),
                id: termSet.get_id().toString(),
                name: termSet.get_name(),
                path: [],
                pathAsString: "",
                props: termSet.get_customProperties()
            });
            // Parse the term sets terms
            var enumerator = termSetTerms.getEnumerator();
            while (enumerator.moveNext()) {
                var term = enumerator.get_current();
                // Create the terms
                terms.push({
                    description: term.get_description(),
                    id: term.get_id().toString(),
                    name: term.get_name(),
                    path: term.get_pathOfTerm().split(";"),
                    pathAsString: term.get_pathOfTerm(),
                    props: term.get_customProperties()
                });
            }
            // Sort the terms
            terms.sort(function (a, b) {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            });
            // Return the terms
            return terms;
        };
        /**
         * Method to get the term group
         */
        this.getTermGroup = function (groupName) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Load the scripts
                _this.loadScripts().then(function () {
                    // Get the taxonomy session
                    var context = SP.ClientContext.get_current();
                    var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                    // See if we are getting a specific group name
                    if (groupName) {
                        // Resolve the promise
                        var termStores_1 = session.get_termStores();
                        context.load(termStores_1, "Include(Groups)");
                        context.executeQueryAsync(function () {
                            // Get the default store
                            var enumerator = termStores_1.getEnumerator();
                            var termStore = enumerator.moveNext() ? enumerator.get_current() : null;
                            if (termStore) {
                                // Get the term group
                                var termGroup = termStore.get_groups().getByName(groupName);
                                context.load(termGroup);
                                // Resolve the promise
                                resolve({ context: context, termGroup: termGroup });
                            }
                            else {
                                // Log
                                console.error("[gd-sprest] Unable to get the taxonomy store.");
                                // Reject the promise
                                reject();
                            }
                        }, function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            // Log
                            console.error("[gd-sprest] Error getting the term group.");
                            console.error("[gd-sprest] Error: " + args[1].get_message());
                            // Reject the promise
                            reject(args);
                        });
                    }
                    else {
                        // Get the default site collection group
                        var termStore = session.getDefaultSiteCollectionTermStore();
                        var termGroup = termStore.getSiteCollectionGroup(context.get_site());
                        context.load(termGroup);
                        // Resolve the promise
                        resolve({ context: context, termGroup: termGroup });
                    }
                });
            });
        };
    }
    return _Taxonomy;
}());
exports.Taxonomy = new _Taxonomy();
//# sourceMappingURL=taxonomy.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(47);
__webpack_require__(58);
__webpack_require__(62);
module.exports = __webpack_require__(10).Promise;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(19);
var test = {};
test[__webpack_require__(2)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(6)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(28)(function () {
  return Object.defineProperty(__webpack_require__(21)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(48)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(30)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(23);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(50);
var descriptor = __webpack_require__(29);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(51);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(21)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(36).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(33);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(24);
var arrayIndexOf = __webpack_require__(54)(false);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(24);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(55);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(57);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(23);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(59);
var getKeys = __webpack_require__(33);
var redefine = __webpack_require__(6);
var global = __webpack_require__(3);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(11);
var wks = __webpack_require__(2);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(60);
var step = __webpack_require__(61);
var Iterators = __webpack_require__(11);
var toIObject = __webpack_require__(24);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(30)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(2)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(5)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var global = __webpack_require__(3);
var ctx = __webpack_require__(15);
var classof = __webpack_require__(19);
var $export = __webpack_require__(32);
var isObject = __webpack_require__(7);
var aFunction = __webpack_require__(16);
var anInstance = __webpack_require__(63);
var forOf = __webpack_require__(64);
var speciesConstructor = __webpack_require__(68);
var task = __webpack_require__(37).set;
var microtask = __webpack_require__(70)();
var newPromiseCapabilityModule = __webpack_require__(38);
var perform = __webpack_require__(71);
var promiseResolve = __webpack_require__(72);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(73)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(26)($Promise, PROMISE);
__webpack_require__(74)(PROMISE);
Wrapper = __webpack_require__(10)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(75)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);
var call = __webpack_require__(65);
var isArrayIter = __webpack_require__(66);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(34);
var getIterFn = __webpack_require__(67);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(11);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(19);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(11);
module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(16);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(37).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(13)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(38);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(6);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var dP = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
/**
 * App Helper Methods
 * Helper methods designed to be run from the app web.
 */
var _App = /** @class */ (function () {
    function _App() {
    }
    // Method to copy a file in this app web to the host web
    _App.copyFileToHostWeb = function (fileUrl, dstFolder, overwriteFl, rootWebFl) {
        var srcFile = null;
        var origVal = lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the current web is an app web
            if (!lib_1.ContextInfo.isAppWeb) {
                // Error
                console.error("[gd-sprest] The current web is not an app web.");
                reject();
                return;
            }
            // Get the host web
            lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
            var web = (new lib_1.Web(rootWebFl ? lib_1.ContextInfo.siteServerRelativeUrl : null));
            // See if the folder url was given
            if (typeof (dstFolder) === "string") {
                // Get the folder
                exports.App.getFolder(web, dstFolder, true)
                    .then(function (folder) {
                    // Copy the file to the host web
                    exports.App.copyFileToHostWeb(fileUrl, folder, overwriteFl)
                        .then(function (_a) {
                        var file = _a.file, folder = _a.folder;
                        resolve({ file: file, folder: folder });
                    });
                });
            }
            else {
                // Get the file name
                var fileName = fileUrl.split("/");
                fileName = fileName[fileName.length - 1];
                // Set the file urls
                var dstFileUrl = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
                var srcFileUrl_1 = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(lib_1.ContextInfo.webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));
                // Get the destination file
                web.getFileByServerRelativeUrl(dstFileUrl)
                    .execute(function (file) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // See if the file exists
                        if (file.Exists) {
                            // Check out the file, and resolve the promise
                            file.checkout().execute(resolve);
                        }
                        else {
                            // Resolve the promise
                            resolve();
                        }
                    });
                });
                // Target the current web
                lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = false;
                // Get the current web
                (new lib_1.Web())
                    .getFileByServerRelativeUrl(srcFileUrl_1)
                    .content()
                    .execute(function (content) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // Get the file name
                        var fileName = srcFileUrl_1.split("/");
                        fileName = fileName[fileName.length - 1];
                        // Target the host web
                        lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
                        // Add the file to the folder
                        (dstFolder).Files().add(true, fileName, content)
                            .execute(function (file) {
                            // Save a reference to this file
                            srcFile = file;
                            // Check in the file
                            file.checkin("", 1).execute();
                            // Publish the file
                            file.publish("").execute(true);
                            // Wait for the requests to complete
                            file.done(function () {
                                // Resolve the promise
                                resolve();
                            });
                        });
                    });
                }, true);
                // Wait for the requests to complete, and resolve the promise
                web.done(function () { resolve({ file: srcFile, folder: dstFolder }); });
            }
        });
    };
    // Method to copy a file in this app web to the host web
    _App.copyFilesToHostWeb = function (fileUrls, folderUrls, overwriteFl, rootWebFl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (files, folders, idx) {
                // Ensure the array is not empty
                if (fileUrls.length == idx || folderUrls.length == idx) {
                    // Resolve the promise and return it
                    resolve({ files: files, folders: folders });
                    return;
                }
                // Copy the file
                exports.App.copyFileToHostWeb(fileUrls[idx], folderUrls[idx], overwriteFl, rootWebFl)
                    .then(function (_a) {
                    var file = _a.file, folder = _a.folder;
                    // Save a reference to the file and folder
                    files.push(file);
                    folders.push(folder);
                    // Copy the files
                    request(files, folders, ++idx);
                });
            };
            // Execute the request
            request([], [], 0);
        });
    };
    // Method to create sub-folders
    _App.createSubFolders = function (folder, subFolderUrl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (resolve) {
                // Get the sub-folder name
                var subFolderName = subFolderUrl.split("/")[0];
                // Update the sub folder url
                subFolderUrl = subFolderUrl.substr(subFolderName.length + 1);
                // Get the sub-folder
                var subFolder = folder.Folders(subFolderName).execute(function (subFolder) {
                    // Method to add additional sub folders
                    var addSubFolders = function (subFolder) {
                        // See if we are done
                        if (subFolderUrl.length == 0) {
                            // Resolve the promise
                            resolve(subFolder);
                        }
                        else {
                            // Create the sub folder
                            request(resolve);
                        }
                    };
                    // Ensure the sub-folder exists
                    if (subFolder.Exists) {
                        // Add the rest of the sub folders
                        addSubFolders(subFolder);
                    }
                    else {
                        // Create the sub folder
                        folder.Folders().add(subFolderName).execute(addSubFolders);
                    }
                });
            };
            // Execute the request
            request(resolve);
        });
    };
    // Method to get a folder
    _App.getFolder = function (web, folderUrl, createFl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var dstFolder = null;
            // Ensure the web exists
            if (!web.existsFl) {
                // Get the web
                web.execute();
            }
            // Wait for the requests to complete
            web.done(function () {
                // Set the destination folder url
                var dstFolderUrl = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(web.ServerRelativeUrl, folderUrl.substr(folderUrl[0] == "/" ? 1 : 0));
                // Get the folder
                web.getFolderByServerRelativeUrl(folderUrl)
                    .execute(function (folder) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // Ensure the folder exists
                        if (folder.Exists) {
                            // Save a reference to the folder
                            dstFolder = folder;
                            // Resolve the promise
                            resolve();
                        }
                        else {
                            // Create the folder
                            exports.App.createSubFolders(web.RootFolder(), folderUrl).then(function (folder) {
                                // Save a reference to the folder
                                dstFolder = folder;
                                // Resolve the promise
                                resolve();
                            });
                        }
                    });
                }, true);
                // Wait for the request to complete
                web.done(function () {
                    // Resolve the promise
                    resolve(dstFolder);
                });
            });
        });
    };
    // Method to remove empty folders
    _App.removeEmptyFolders = function (web, folderUrls) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure folder urls exist
            if (folderUrls.length == 0) {
                // Resolve the promise and return it
                resolve();
            }
            else {
                var prevFolderUrl = null;
                // Sort the urls alphabetically, then from longest to shortest
                folderUrls.sort().sort(function (a, b) { return a.length > b.length ? -1 : 1; });
                // Parse the folders
                for (var _i = 0, folderUrls_1 = folderUrls; _i < folderUrls_1.length; _i++) {
                    var folderUrl = folderUrls_1[_i];
                    var folder = null;
                    // See if we already removed this folder
                    if (folderUrl == prevFolderUrl) {
                        continue;
                    }
                    else {
                        prevFolderUrl = folderUrl;
                    }
                    // Parse the folder names
                    var folderNames = folderUrl.split('/');
                    for (var _a = 0, folderNames_1 = folderNames; _a < folderNames_1.length; _a++) {
                        var folderName = folderNames_1[_a];
                        // Get the sub-folder
                        folder = folder ? folder.Folders(folderName) : web.Folders(folderName);
                    }
                    // Execute the request
                    folder.execute(function (folder) {
                        // Return a promise
                        return new Promise(function (resolve, reject) {
                            // See if the folder is empty
                            if (folder.ItemCount == 0) {
                                // Delete the folder, and resolve the promise
                                folder.delete().execute(resolve);
                            }
                            else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    }, true);
                }
                // Wait for the requests to complete, and resolve the promise
                web.done(function () { resolve(); });
            }
        });
    };
    // Method to remove a file
    _App.removeFile = function (web, fileUrl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var folder = null;
            var folders = fileUrl.split('/');
            // Parse the folders
            for (var i = 0; i < folders.length - 1; i++) {
                // Get the folder
                folder = folder ? folder.Folders(folders[i]) : web.Folders(folders[i]);
            }
            // Get the file
            folder.Files(folders[folders.length - 1]).execute(function (file) {
                // See if it exists
                if (file.Exists) {
                    // Delete it and resolve the promise
                    file.delete().execute(resolve);
                }
                else {
                    // Resolve the promise
                    resolve();
                }
            }, true);
        });
    };
    // Method to remove files
    _App.removeFiles = function (web, fileUrls, idx) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (idx, resolve) {
                // See if we have removed all files
                if (fileUrls.length == idx) {
                    // Resolve the promise and return it
                    resolve();
                }
                else {
                    // Remove the file
                    exports.App.removeFile(web, fileUrls[idx]).then(function () {
                        // Remove the files
                        request(++idx, resolve);
                    });
                }
            };
            // Execute the request
            request(0, resolve);
        });
    };
    return _App;
}());
exports.App = new _App();
//# sourceMappingURL=app.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Context Information
 */
var _ContextInfo = /** @class */ (function () {
    function _ContextInfo() {
    }
    Object.defineProperty(_ContextInfo, "_contextInfo", {
        // The current context information
        get: function () {
            return this.window["_spPageContextInfo"] ||
                {
                    existsFl: false,
                    isAppWeb: false,
                    isHubSite: false,
                    isSPO: false,
                    siteAbsoluteUrl: "",
                    siteServerRelativeUrl: "",
                    userId: 0,
                    webAbsoluteUrl: "",
                    webServerRelativeUrl: ""
                };
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(_ContextInfo, "aadInstanceUrl", {
        /**
         * Properties
         */
        get: function () { return this._contextInfo.aadInstanceUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "aadTenantId", {
        get: function () { return this._contextInfo.aadTenantId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "alertsEnabled", {
        get: function () { return this._contextInfo.alertsEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "allowSilverlightPrompt", {
        get: function () { return this._contextInfo.allowSilverlightPrompt == "True" ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "canUserCreateMicrosoftForm", {
        get: function () { return this._contextInfo.canUserCreateMicrosoftForm; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "canUserCreateVisioDrawing", {
        get: function () { return this._contextInfo.canUserCreateVisioDrawing; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "cdnPrefix", {
        get: function () { return this._contextInfo.cdnPrefix; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "clientServerTimeDelta", {
        get: function () { return this._contextInfo.clientServerTimeDelta; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "CorrelationId", {
        get: function () { return this._contextInfo.CorrelationId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "crossDomainPhotosEnabled", {
        get: function () { return this._contextInfo.crossDomainPhotosEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "currentCultureName", {
        get: function () { return this._contextInfo.currentCultureName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "currentLanguage", {
        get: function () { return this._contextInfo.currentLanguage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "currentUICultureName", {
        get: function () { return this._contextInfo.currentUICultureName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "departmentId", {
        get: function () { return this._contextInfo.departmentId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "DesignPackageId", {
        get: function () { return this._contextInfo.DesignPackageId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "disableAppViews", {
        get: function () { return this._contextInfo.disableAppViews; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "disableFlows", {
        get: function () { return this._contextInfo.disableFlows; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "document", {
        get: function () { return this.window.document; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "env", {
        get: function () { return this._contextInfo.env; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "existsFl", {
        get: function () { return this._contextInfo.existsFl == null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "farmLabel", {
        get: function () { return this._contextInfo.farmLabel; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "fid", {
        get: function () { return this._contextInfo.fid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "formDigestTimeoutSeconds", {
        get: function () { return this._contextInfo.formDigestTimeoutSeconds; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "formDigestValue", {
        get: function () { return this._contextInfo.formDigestValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "groupColor", {
        get: function () { return this._contextInfo.groupColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "groupHasHomepage", {
        get: function () { return this._contextInfo.groupHasHomepage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "groupId", {
        get: function () { return this._contextInfo.groupId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "groupType", {
        get: function () { return this._contextInfo.groupType; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "guestsEnabled", {
        get: function () { return this._contextInfo.guestsEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "hasManageWebPermissions", {
        get: function () { return this._contextInfo.hasManageWebPermissions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "hasPendingWebTemplateExtension", {
        get: function () { return this._contextInfo.hasPendingWebTemplateExtension; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "hideSyncButtonOnODB", {
        get: function () { return this._contextInfo.hideSyncButtonOnODB; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "hubSiteId", {
        get: function () { return this._contextInfo.hubSiteId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "idleSessionSignOutEnabled", {
        get: function () { return this._contextInfo.idleSessionSignOutEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isAnonymousGuestUser", {
        get: function () { return this._contextInfo.isAnonymousGuestUser; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isAppWeb", {
        get: function () { return this._contextInfo.isAppWeb; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isEmailAuthenticatinoGuesUser", {
        get: function () { return this._contextInfo.isEmailAuthenticatinoGuesUser; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isExternalGuestUser", {
        get: function () { return this._contextInfo.isExternalGuestUser; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isHubSite", {
        get: function () { return this._contextInfo.isHubSite; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isMultiGeoTenant", {
        get: function () { return this._contextInfo.isMultiGeoTenant; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isNoScriptEnabled", {
        get: function () { return this._contextInfo.isNoScriptEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isSiteAdmin", {
        get: function () { return this._contextInfo.isSiteAdmin; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isSPO", {
        get: function () { return this._contextInfo.isSPO; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isTenantDevSite", {
        get: function () { return this._contextInfo.isTenantDevSite; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "isWebWelcomePage", {
        get: function () { return this._contextInfo.isWebWelcomePage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "layoutsUrl", {
        get: function () { return this._contextInfo.layoutsUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "listBaseTemplate", {
        get: function () { return this._contextInfo.listBaseTemplate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "listId", {
        get: function () { return this._contextInfo.listId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "listTitle", {
        get: function () { return this._contextInfo.listTitle; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "listPermMask", {
        get: function () { return this._contextInfo.listPermMask; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "listUrl", {
        get: function () { return this._contextInfo.listUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "maximumFileSize", {
        get: function () { return this._contextInfo.maximumFileSize; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "nid", {
        get: function () { return this._contextInfo.nid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "openInClient", {
        get: function () { return this._contextInfo.openInClient; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pageItemId", {
        get: function () { return this._contextInfo.pageItemId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pageListId", {
        get: function () { return this._contextInfo.pageListId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pagePermMask", {
        get: function () { return this._contextInfo.pagePermMask; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "pagePersonalizationScope", {
        get: function () { return this._contextInfo.pagePersonalizationScope; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "preferUserTimeZone", {
        get: function () { return this._contextInfo.preferUserTimeZone; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "PreviewFeaturesEnabled", {
        get: function () { return this._contextInfo.PreviewFeaturesEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "profileUrl", {
        get: function () { return this._contextInfo.profileUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "PublishingFeatureOn", {
        get: function () { return this._contextInfo.PublishingFeatureOn; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "RecycleBinItemCount", {
        get: function () { return this._contextInfo.RecycleBinItemCount; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "serverRedirectedUrl", {
        get: function () { return this._contextInfo.serverRedirectedUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "serverRequestPath", {
        get: function () { return this._contextInfo.serverRequestPath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "serverTime", {
        get: function () { return this._contextInfo.serverTime; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "showNGSCDialogForSyncOnODB", {
        get: function () { return this._contextInfo.showNGSCDialogForSyncOnODB; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "showNGSCDialogForSyncOnTS", {
        get: function () { return this._contextInfo.showNGSCDialogForSyncOnTS; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteAbsoluteUrl", {
        get: function () { return this._contextInfo.siteAbsoluteUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteClassification", {
        get: function () { return this._contextInfo.siteClassification; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteClientTag", {
        get: function () { return this._contextInfo.siteClientTag; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteColor", {
        get: function () { return this._contextInfo.siteColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteId", {
        get: function () { return this._contextInfo.siteId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "sitePagesEnabled", {
        get: function () { return this._contextInfo.sitePagesEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteServerRelativeUrl", {
        get: function () { return this._contextInfo.siteServerRelativeUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "siteSubscriptionId", {
        get: function () { return this._contextInfo.siteSubscriptionId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "supportPercentStorePage", {
        get: function () { return this._contextInfo.supportPercentStorePage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "supportPoundStorePath", {
        get: function () { return this._contextInfo.supportPoundStorePath; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "systemUserKey", {
        get: function () { return this._contextInfo.systemUserKey; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "tenantAppVersion", {
        get: function () { return this._contextInfo.tenantAppVersion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "themeCacheToken", {
        get: function () { return this._contextInfo.themeCacheToken; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "themeCssFolderUrl", {
        get: function () { return this._contextInfo.themeCssFolderUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "themeImageFileNames", {
        get: function () { return this._contextInfo.themeImageFileNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "updateFromDigestPageLoaded", {
        get: function () { return this._contextInfo.updateFromDigestPageLoaded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userDisplayName", {
        get: function () { return this._contextInfo.userDisplayName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userEmail", {
        get: function () { return this._contextInfo.userEmail; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userFirstDayOfWeek", {
        get: function () { return this._contextInfo.userFirstDayOfWeek; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userId", {
        get: function () { return this._contextInfo.userId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userLoginName", {
        get: function () { return this._contextInfo.userLoginName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userTime24", {
        get: function () { return this._contextInfo.userTime24; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "userTimeZoneData", {
        get: function () { return this._contextInfo.userTimeZoneData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "viewId", {
        get: function () { return this._contextInfo.viewId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "viewOnlyExperienceEnabled", {
        get: function () { return this._contextInfo.viewOnlyExperienceEnabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webAbsoluteUrl", {
        get: function () { return this._contextInfo.webAbsoluteUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webDescription", {
        get: function () { return this._contextInfo.webDescription; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webFirstDayOfWeek", {
        get: function () { return this._contextInfo.webFirstDayOfWeek; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webId", {
        get: function () { return this._contextInfo.webId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webLanguage", {
        get: function () { return this._contextInfo.webLanguage; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webLogoUrl", {
        get: function () { return this._contextInfo.webLogoUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webPermMask", {
        get: function () { return this._contextInfo.webPermMask; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webServerRelativeUrl", {
        get: function () { return this._contextInfo.webServerRelativeUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webTemplate", {
        get: function () { return this._contextInfo.webTemplate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webTime24", {
        get: function () { return this._contextInfo.webTime24; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webTitle", {
        get: function () { return this._contextInfo.webTitle; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "webUIVersion", {
        get: function () { return this._contextInfo.webUIVersion; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_ContextInfo, "window", {
        get: function () { return typeof (window) == "undefined" ? {} : window; },
        enumerable: true,
        configurable: true
    });
    /**
     * Methods
     */
    // Method to generate a guid
    _ContextInfo.generateGUID = function () {
        // Set the batch id
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    // Method to get the context information for a web
    _ContextInfo.getWeb = function (url) {
        // Create a new base object
        return new utils_1.Base({
            endpoint: "contextinfo",
            method: "POST",
            url: url
        });
    };
    return _ContextInfo;
}());
exports.ContextInfo = _ContextInfo;
//# sourceMappingURL=contextInfo.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Request Type
 */
exports.RequestType = {
    // Requests
    Custom: 0,
    Delete: 1,
    Merge: 2,
    OData: 3,
    // Get Requests
    Get: 10,
    GetBuffer: 11,
    GetWithArgs: 12,
    GetWithArgsInBody: 13,
    GetWithArgsInQS: 14,
    GetWithArgsValueOnly: 15,
    GetReplace: 16,
    // Post Requests
    Post: 20,
    PostWithArgs: 21,
    PostWithArgsInBody: 22,
    PostWithArgsInQS: 23,
    PostWithArgsValueOnly: 24,
    PostReplace: 25
};
//# sourceMappingURL=requestType.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var mapper_1 = __webpack_require__(12);
var _1 = __webpack_require__(0);
/**
 * Request Helper
 */
var BaseHelper = /** @class */ (function () {
    function BaseHelper() {
    }
    // Method to add the methods to base object
    BaseHelper.prototype.addMethods = function (base, data) {
        var isCollection = data.results && data.results.length > 0;
        // Determine the metadata
        var metadata = isCollection ? data.results[0].__metadata : data.__metadata;
        // Determine the object type
        var objType = metadata && metadata.type ? metadata.type : base.targetInfo.endpoint;
        objType = objType.split('/');
        objType = (objType[objType.length - 1]);
        objType = objType.split('.');
        objType = (objType[objType.length - 1]).toLowerCase();
        objType += isCollection ? "s" : "";
        // See if the base is a field
        if ((/^field/.test(objType) || /fields?$/.test(objType)) && objType != "fieldlinks" && objType != "fields") {
            // Update the type
            objType = "field" + (isCollection ? "s" : "");
        }
        else if (/item$/.test(objType)) {
            // Update the type
            objType = "listitem";
        }
        else if (/items$/.test(objType)) {
            // Update the type
            objType = "items";
        }
        else if (/corporatecatalogappmetadata/.test(objType)) {
            // Update the type
            objType = "tenantapp";
        }
        else if (/corporatecatalogappmetadatas/.test(objType)) {
            // Update the type
            objType = "tenantapps";
        }
        // Get the methods for the base object
        var methods = mapper_1.Mapper[objType];
        if (methods) {
            // Parse the methods
            for (var methodName in methods) {
                // Get the method information
                var methodInfo = methods[methodName] ? methods[methodName] : {};
                // See if the base is the "Properties" definition for the object
                if (methodName == "properties") {
                    // Parse the properties
                    for (var _i = 0, methodInfo_1 = methodInfo; _i < methodInfo_1.length; _i++) {
                        var property = methodInfo_1[_i];
                        var propInfo = property.split("|");
                        // Get the metadata type
                        var propName = propInfo[0];
                        var propType = propInfo.length > 1 ? propInfo[1] : null;
                        var subPropName = propInfo.length > 2 ? propInfo[2] : null;
                        var subPropType = propInfo.length > 3 ? propInfo[3] : null;
                        // See if the property is null or is a collection
                        if (base[propName] == null || (base[propName].__deferred && base[propName].__deferred.uri)) {
                            // See if the base property has a sub-property defined for it
                            if (propInfo.length == 4) {
                                // Update the ' char in the property name
                                subPropName = subPropName.replace(/'/g, "\\'");
                                // Add the property
                                base[propName] = new Function("name", "name = name ? '" + propName + subPropName + "'.replace(/\\[Name\\]/g, name) : null;" +
                                    "return this.getProperty(name ? name : '" + propName + "', name ? '" + subPropType + "' : '" + propType + "');");
                            }
                            else {
                                // Add the property
                                base[propName] = new Function("return this.getProperty('" + propName + "', '" + propType + "');");
                            }
                        }
                    }
                    // Continue the loop
                    continue;
                }
                // See if the base object has a dynamic metadata type
                if (typeof (methodInfo.metadataType) === "function") {
                    // Clone the object properties
                    methodInfo = JSON.parse(JSON.stringify(methodInfo));
                    // Set the metadata type
                    methodInfo.metadataType = methods[methodName].metadataType(base);
                }
                // Add the method to the object
                base[methodName] = new Function("return this.executeMethod('" + methodName + "', " + JSON.stringify(methodInfo) + ", arguments);");
            }
        }
    };
    // Method to add properties to the base object
    BaseHelper.prototype.addProperties = function (base, data) {
        // Parse the data properties
        for (var key in data) {
            var value = data[key];
            // Skip properties
            if (key == "__metadata" || key == "results") {
                continue;
            }
            // See if the base is a collection property
            if (value && value.__deferred && value.__deferred.uri) {
                // Generate a method for the base property
                base["get_" + key] = base["get_" + key] ? base["get_" + key] : new Function("return this.getCollection('" + key + "', arguments);");
            }
            else {
                // Set the property, based on the property name
                switch (key) {
                    case "ClientPeoplePickerResolveUser":
                    case "ClientPeoplePickerSearchUser":
                        base[key] = JSON.parse(value);
                        break;
                    default:
                        // Append the property to the base object
                        base[key] = value;
                        break;
                }
                // See if the base is a collection
                if (base[key] && base[key].results) {
                    // Ensure the collection is an object
                    if (base[key].results.length == 0 || typeof (base[key].results[0]) === "object") {
                        // Create the base property as a new request
                        var objCollection = new _1.Base(base.targetInfo);
                        objCollection["results"] = base[key].results;
                        // See no results exist
                        if (objCollection["results"].length == 0) {
                            // Set the metadata type to the key
                            objCollection["__metadata"] = { type: key };
                        }
                        // Update the endpoint for the base request to point to the base property
                        objCollection.targetInfo.endpoint = (objCollection.targetInfo.endpoint.split("?")[0] + "/" + key).replace(/\//g, "/");
                        // Add the methods
                        base.addMethods(objCollection, objCollection);
                        // Update the data collection
                        base.updateDataCollection(base, objCollection["results"]);
                        // Update the property
                        base[key] = objCollection;
                    }
                }
            }
        }
    };
    // Method to update a collection object
    BaseHelper.prototype.updateDataCollection = function (obj, results) {
        // Ensure the base is a collection
        if (results) {
            // Save the results
            obj["results"] = obj["results"] ? obj["results"].concat(results) : results;
            // See if only one object exists
            if (obj["results"].length > 0) {
                var results_1 = obj["results"];
                // Parse the results
                for (var _i = 0, results_2 = results_1; _i < results_2.length; _i++) {
                    var result = results_2[_i];
                    // Add the base references
                    result["addMethods"] = obj.addMethods;
                    result["base"] = obj.base;
                    result["done"] = obj.done;
                    result["execute"] = obj.execute;
                    result["executeAndWait"] = obj.executeAndWait;
                    result["executeMethod"] = obj.executeMethod;
                    result["existsFl"] = true;
                    result["getProperty"] = obj.getProperty;
                    result["parent"] = obj;
                    result["targetInfo"] = obj.targetInfo;
                    result["updateMetadataUri"] = obj.updateMetadataUri;
                    result["waitForRequestsToComplete"] = obj.waitForRequestsToComplete;
                    // Update the metadata
                    this.updateMetadata(obj, result);
                    // Add the methods
                    this.addMethods(result, result);
                }
            }
        }
    };
    // Method to convert the input arguments into an object
    BaseHelper.prototype.updateDataObject = function (isBatchRequest) {
        // Ensure the request was successful
        if (this.status >= 200 && this.status < 300) {
            // Return if we are expecting a buffer
            if (this.requestType == _1.RequestType.GetBuffer) {
                return;
            }
            // Parse the responses
            var batchIdx = 0;
            var batchRequestIdx = 0;
            var responses = isBatchRequest ? this.response.split("\n") : [this.response];
            for (var i = 0; i < responses.length; i++) {
                var data = null;
                // Try to convert the response
                var response = responses[i];
                response = response === "" && !isBatchRequest ? "{}" : response;
                try {
                    data = isBatchRequest && response.indexOf("<?xml") == 0 ? response : JSON.parse(response);
                }
                catch (ex) {
                    continue;
                }
                // Set the object based on the request type
                var obj = isBatchRequest ? Object.create(this) : this;
                // Set the exists flag
                obj["existsFl"] = typeof (obj["Exists"]) === "boolean" ? obj["Exists"] : data.error == null;
                // See if the data properties exists
                if (data.d) {
                    // Save a reference to it
                    obj["d"] = data.d;
                    // Update the metadata
                    this.updateMetadata(obj, data.d);
                    // Update the base object's properties
                    this.addProperties(obj, data.d);
                    // Add the methods
                    this.addMethods(obj, data.d);
                    // Update the data collection
                    this.updateDataCollection(obj, data.d.results);
                }
                // See if the batch request exists
                if (isBatchRequest) {
                    // Get the batch request
                    var batchRequest = this.base.batchRequests[batchIdx][batchRequestIdx++];
                    if (batchRequest == null) {
                        // Update the batch indexes
                        batchIdx++;
                        batchRequestIdx = 0;
                        // Update the batch request
                        batchRequest = this.base.batchRequests[batchIdx][batchRequestIdx++];
                    }
                    // Ensure the batch request exists
                    if (batchRequest) {
                        // Set the response object
                        batchRequest.response = typeof (data) === "string" ? data : obj;
                        // Execute the callback if it exists
                        batchRequest.callback ? batchRequest.callback(batchRequest.response) : null;
                    }
                }
            }
            // Clear the batch requests
            if (isBatchRequest) {
                this.base.batchRequests = null;
            }
        }
    };
    // Method to update the metadata
    BaseHelper.prototype.updateMetadata = function (base, data) {
        // Ensure the base is the app web
        if (!lib_1.ContextInfo.isAppWeb) {
            return;
        }
        // Get the url information
        var hostUrl = lib_1.ContextInfo.webAbsoluteUrl.toLowerCase();
        var requestUrl = data && data.__metadata && data.__metadata.uri ? data.__metadata.uri.toLowerCase() : null;
        var targetUrl = base.targetInfo && base.targetInfo.url ? base.targetInfo.url.toLowerCase() : null;
        // Ensure the urls exist
        if (hostUrl == null || requestUrl == null || targetUrl == null) {
            return;
        }
        // See if we need to make an update
        if (targetUrl.indexOf(hostUrl) == 0) {
            return;
        }
        // Update the metadata uri
        data.__metadata.uri = requestUrl.replace(hostUrl, targetUrl);
    };
    return BaseHelper;
}());
exports.BaseHelper = BaseHelper;
//# sourceMappingURL=baseHelper.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(81));
__export(__webpack_require__(82));
__export(__webpack_require__(83));
__export(__webpack_require__(84));
__export(__webpack_require__(85));
__export(__webpack_require__(86));
__export(__webpack_require__(87));
__export(__webpack_require__(88));
__export(__webpack_require__(89));
__export(__webpack_require__(90));
__export(__webpack_require__(91));
__export(__webpack_require__(92));
//# sourceMappingURL=mapper.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Audit
 */
exports.audit = {
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=audit.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Event Receiver
 */
exports.eventreceiver = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Event Receivers
 */
exports.eventreceivers = {
    // Adds an event receiver to the collection.
    add: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets an event receiver by it's id.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "eventreceiver"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=eventReceiver.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Attachment
 */
exports.attachment = {};
/**
 * Attachment Files
 */
exports.attachmentfiles = {
    /**
     * Adds the attachment that is represented by the specified file name and byte array to the list item.
     * @param name - The name of the file to add.
     * @param contents - The file contents as an array buffer.
    **/
    add: {
        argNames: ["fileName"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * File
 */
exports.file = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Author|user", "CheckedOutByUser|user", "EffectiveInformationRightsManagementSettings", "InformationRightsManagementSettings",
        "ListItemAllFields", "LockedByUser|user", "ModifiedBy|user", "Properties|propertyvalues", "VersionEvents", "Versions|fileversions"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Approves the file submitted for content approval with the specified comment.
    approve: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
    // This method is currently available only on Office 365.
    cancelupload: {
        argNames: ["uploadId"],
        name: "cancelupload(guid'[[uploadId]]')",
        requestType: utils_1.RequestType.PostReplace
    },
    // Checks the file in to a document library based on the check-in type.
    // Check-In Types: MinorCheckIn = 0; MajorCheckIn = 1; OverwriteCheckIn = 2
    checkin: {
        argNames: ["comment", "checkInType"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Checks out the file from a document library based on the check-out type.
    checkout: {
        requestType: utils_1.RequestType.Post
    },
    // Returns the file content.
    content: {
        name: "$value",
        requestType: utils_1.RequestType.GetBuffer
    },
    // Continues the chunk upload session with an additional fragment. The current file content is not changed.
    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
    // This method is currently available only on Office 365.
    continueUpload: {
        argNames: ["uploadId", "fileOffset"],
        name: "continueUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
        requestType: utils_1.RequestType.PostReplace
    },
    // Copies the file to the destination URL.
    copyTo: {
        argNames: ["strNewUrl", "bOverWrite"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Denies approval for a file that was submitted for content approval.
    // Only documents in lists that are enabled for content approval can be denied.
    deny: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
    // This method is currently available only on Office 365.
    finishUpload: {
        argNames: ["uploadId", "fileOffset"],
        name: "finishUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
        requestType: utils_1.RequestType.PostReplace
    },
    // Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
    // An exception is thrown if the file is not an ASPX page.
    // Type of scopes: 
    getlimitedwebpartmanager: {
        argNames: ["scope"],
        name: "getLimitedWebPartManager(scope=[[scope]])",
        requestType: utils_1.RequestType.GetReplace
    },
    // Moves the file to the specified destination URL.
    // Types of move operations: Overwrite = 1; AllowBrokenThickets (move even if supporting files are separated from the file) = 8.
    moveTo: {
        argNames: ["newUrl", "flags"],
        name: "moveTo(newUrl='[[newUrl]]', flags=[[flags]])",
        requestType: utils_1.RequestType.PostReplace
    },
    // Opens the file as a stream.
    openBinaryStream: {
        requestType: utils_1.RequestType.GetBuffer
    },
    // Submits the file for content approval with the specified comment.
    publish: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: utils_1.RequestType.Get
    },
    // Saves the file as a stream.
    saveBinaryStream: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
    // The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
    // The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
    startUpload: {
        argNames: ["uploadId"],
        name: "startupload(uploadId=guid'[[uploadId]]')",
        requestType: utils_1.RequestType.PostReplace
    },
    // Reverts an existing checkout for the file.
    undoCheckOut: {
        requestType: utils_1.RequestType.Post
    },
    // Removes the file from content approval or unpublish a major version.
    unpublish: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.File",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Files
 */
exports.files = {
    // Adds a file to this collection.
    add: {
        argNames: ["overwrite", "url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Adds a ghosted file to an existing list or document library.
    // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
    addTemplateFile: {
        argNames: ["urlOfFile", "templateFileType"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Get the file at the specified URL.
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * File Version
 */
exports.fileversion = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * File Versions
 */
exports.fileversions = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Folder
 */
exports.folder = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder|folder", "Properties|propertyvalues", "StorageMetrics"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Get the file at the specified URL.
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.Folder",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Folders
 */
exports.folders = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder", "StorageMetrics"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Adds the folder that is located at the specified URL to the collection.
    add: {
        argNames: ["url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Get the file at the specified URL.
    getbyurl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Limited Web Part Manager
 */
exports.limitedwebpartmanager = {
    // Gets a webpart by its id.
    get_WebParts: {
        argNames: ["id"],
        name: "webparts?expand=WebPart",
        requestType: utils_1.RequestType.GetReplace
    }
};
//# sourceMappingURL=file.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Content Type
 */
exports.contenttype = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "FieldLinks|fieldlinks|('[Name]')|fieldlink", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "WorkflowAssociations"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the content type.
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.ContentType",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Content Types
 */
exports.contenttypes = {
    // Adds a content type to the collection.
    add: {
        metadataType: "SP.ContentType",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Adds an existing content type to this collection.
    addAvailableContentType: {
        argNames: ["contentTypeId"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets a content type by id.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "contenttype"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Field
 */
exports.field = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Sets the value of the ShowInDisplayForm property for this field.
    setShowInDisplayForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Sets the value of the ShowInEditForm property for this field.
    setShowInEditForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Sets the value of the ShowInNewForm property for this field.
    setShowInNewForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Updates it's properties.
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Field Links
 */
exports.fieldlinks = {
    // Adds a field link to the collection.
    add: {
        argNames: ["data"],
        metadataType: "SP.FieldLink",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets a field link by it's id.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "fieldlink"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Fields
 */
exports.fields = {
    // Adds a field to the field collection.
    add: {
        metadataType: "SP.Field",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Adds a field to the field collection.
    addField: {
        argNames: ["parameters"],
        metadataType: "SP.FieldCreationInformation",
        name: "addField",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
    addDependentLookupField: {
        argNames: ["displayname", "primarylookupfieldid", "showfield"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Creates a field based on the specified schema, Boolean value, and field options.
    // Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
    createFieldAsXml: {
        argNames: ["schemaXml"],
        requestType: utils_1.RequestType.PostWithArgsInBody,
        data: {
            parameters: {
                __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                Options: 8,
                SchemaXml: "[[schemaXml]]"
            }
        }
    },
    // Gets the field with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    // Returns the first Field object with the specified internal name or title from the collection.
    getByInternalNameOrTitle: {
        argNames: ["internalNameOrTitle"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    // Returns the first field object in the collection based on the title of the specified field.
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Items
 */
exports.items = {
    // Adds an item to the list item collection.
    add: {
        metadataType: function (obj) {
            return (obj.parent && obj.parent["ListItemEntityTypeFullName"]) || "SP.ListItem";
        },
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets an item by its id.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "listitem"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * List
 */
exports.list = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "BrowserFileHandling", "ContentTypes|contenttypes|('[Name]')|contenttype", "CreatablesInfo", "DefaultView|view",
        "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field",
        "FirstUniqueAncestorSecurableObject", "Forms|forms|('[Name]')|form", "InformationRightsManagementSettings",
        "Items|items|([Name])|item", "ParentWeb", "RoleAssignments|roleassignments|([Name])|roleassignment",
        "RootFolder|folder|/getByUrl('[Name]')|file", "Subscriptions", "TitleResource",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "Views|views|('[Name]')|view", "WorkflowAssociations"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Creates unique role assignments for the securable object.
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Returns an item based on the id.
    getItemById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "item"
    },
    // Returns a collection of items from the list based on the view xml.
    getItems: {
        argNames: ["viewXml"],
        requestType: utils_1.RequestType.PostWithArgsInBody,
        data: {
            query: {
                __metadata: { type: "SP.CamlQuery" },
                ViewXml: "[[viewXml]]"
            }
        }
    },
    // Returns a collection of items from the list based on the specified query.
    getItemsByQuery: {
        argNames: ["camlQuery"],
        name: "getItems",
        requestType: utils_1.RequestType.PostWithArgsInBody,
        data: {
            query: {
                __metadata: { type: "SP.CamlQuery" },
                ViewXml: "<View>[[camlQuery]]</View>"
            }
        }
    },
    // Returns a collection of items from the list based on the specified query.
    getListItemChangesSinceToken: {
        argNames: ["query"],
        metadataType: "SP.ChangeLogItemQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
    getRelatedFields: {
        requestType: utils_1.RequestType.Get
    },
    // Gets the effective user permissions for the current user.
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    // Returns the list view with the specified view identifier.
    getViewById: {
        argNames: ["viewId"],
        name: "getView",
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    // Renders the list data.
    renderListData: {
        argNames: ["viewXml"],
        name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
        requestType: utils_1.RequestType.PostReplace
    },
    // Renders the list form data.
    // Types of modes: 1 - Display, 2 - Edit, 3 - New
    renderListFormData: {
        argNames: ["itemid", "formid", "mode"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Reserves a list item ID for idempotent list item creation.
    reserveListItemId: {
        requestType: utils_1.RequestType.Post
    },
    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.List",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * List Item
 */
exports.listitem = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "AttachmentFiles|attachmentfiles|('[Name]')|attachment", "ContentType|contenttype", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit",
        "File|file", "FirstUniqueAncestorSecurableObject", "Folder|folder", "GetDlpPolicyTip", "ParentList|list",
        "Properties|propertyvalues", "RoleAssignments|roleassignments|roleassignments|([Name])|roleassignment"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Creates unique role assignments for the securable object.
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Gets the effective permissions that a specified user has on the list item.
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    // Updates it's properties.
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Validates and sets the values of the specified collection of fields for the list item.
    validateUpdateListItem: {
        argNames: ["formValues", "bNewDocumentUpdate"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Lists
 */
exports.lists = {
    // Adds a list to the list collection.
    add: {
        metadataType: "SP.List",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
    ensureSiteAssetsLibrary: {
        requestType: utils_1.RequestType.Post
    },
    // Gets a list that is the default location for wiki pages.
    ensureSitePagesLibrary: {
        requestType: utils_1.RequestType.Post
    },
    // Returns the list with the specified list identifier.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    // Returns the list with the specified title from the collection.
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Version
 */
exports.version = {
    // Gets the version with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "version"
    },
    // Deletes all versions in the collection.
    deleteAll: {
        requestType: utils_1.RequestType.Post
    },
    // Deletes a version, by the specified id.
    deleteById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Deletes a version, by the specified label.
    deleteByLabel: {
        argNames: ["label"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Restores a version, by the specified label.
    restoreByLabel: {
        argNames: ["label"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    }
};
/**
 * View
 */
exports.view = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "ViewFields|viewfieldcollection"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Returns the list view as HTML.
    renderAsHtml: {
        requestType: utils_1.RequestType.Get
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.View",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * View Field Collection
 */
exports.viewfieldcollection = {
    // Adds the field with the specified field internal name or display name to the collection.
    addViewField: {
        argNames: ["fieldName"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Moves the field with the specified field internal name to the specified position in the collection.
    moveViewFieldTo: {
        argNames: ["field", "index"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Removes all the fields from the collection.
    removeAllViewFields: {
        requestType: utils_1.RequestType.Post
    },
    // Removes the field with the specified field internal name from the collection.
    removeViewField: {
        argNames: ["fieldName"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    }
};
/**
 * Views
 */
exports.views = {
    // Adds a view to the view collection.
    add: {
        metadataType: "SP.View",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets the list view with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Gets the list view with the specified title.
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=list.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Navigation
 */
exports.navigationservicerest = {
    /**
     * Properties
     */
    properties: [
        "MenuState|menustate|([Name])|menunode"
    ],
    /**
     * Methods
     */
    // Method to get the menu state.
    getMenuState: {
        argNames: ["menuNodeKey", "depth", "customProperties", "mapProviderName"],
        name: "MenuState",
        RequestType: utils_1.RequestType.GetWithArgsInQS
    }
};
//# sourceMappingURL=navigation.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Property Values
 */
exports.propertyvalues = {
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=propertyValues.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Search
 */
exports.search = {
    postquery: {
        argNames: ["request"],
        metadataType: "Microsoft.Office.Server.Search.REST.SearchRequest",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
//# sourceMappingURL=search.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Role Assignment
 */
exports.roleassignment = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Member", "RoleDefinitionBindings|roledefinitions"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Role Assignments
 */
exports.roleassignments = {
    // Adds a new role assignment with the specified principal and role definitions to the collection.
    addRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Gets the role assignment associated with the specified principal ID from the collection.
    getByPrincipalId: {
        argNames: ["principalId"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roleassignment"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Gets the role definition with the specified role type.
    removeRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: utils_1.RequestType.PostWithArgs
    }
};
/**
 * Role Definition
 */
exports.roledefinition = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Role Definitions
 */
exports.roledefinitions = {
    // Gets the role definition with the specified ID from the collection.
    getById: {
        argNames: ["roleDefId"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },
    // Gets the role definition with the specified name.
    getByName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },
    // Gets the role definitions with the specified role type.
    getByType: {
        argNames: ["roleType"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinitions"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=security.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Site
 */
exports.site = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features", "Owner|user", "RootWeb|web",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
    createPreviewSPSite: {
        argNames: ["upgrade", "sendemail"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
    extendUpgradeReminderDate: {
        requestType: utils_1.RequestType.Post
    },
    // Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
    getCatalog: {
        argNames: ["typeCatalog"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Specifies the collection of custom list templates for a given site.
    getCustomListTemplates: {
        argNames: ["web"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Returns the collection of site definitions that are available for creating Web sites within the site collection.
    getWebTemplates: {
        argNames: ["LCID", "overrideCompatLevel"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
    invalidate: {
        requestType: utils_1.RequestType.Post
    },
    // Returns true if the object needs to be upgraded; otherwise, false.
    needsUpgradeByType: {
        argNames: ["versionUpgrade", "recursive"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Returns the site at the specified URL.
    openWeb: {
        argNames: ["strUrl"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Returns the site with the specified GUID.
    openWebById: {
        argNames: ["gWebId"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
    runHealthCheck: {
        argNames: ["ruleId", "bRepair", "bRunAlways"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
    runUpgradeSiteSession: {
        argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.Site",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
    updateClientObjectModelUseRemoteAPIsPermissionSetting: {
        argNames: ["requireUseRemoteAPIs"],
        requestType: utils_1.RequestType.PostWithArgs
    }
};
/**
 * Tenant App
 */
exports.tenantapp = {
    // Deploy solution package in tenant app catalog
    deploy: {
        requestType: utils_1.RequestType.Post
    },
    // Install solution package from tenant app catalog to SharePoint site
    install: {
        requestType: utils_1.RequestType.Post
    },
    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Remove solution package from tenant app catalog
    remove: {
        requestType: utils_1.RequestType.Post
    },
    // Retract solution package in the tenant app catalog
    retract: {
        requestType: utils_1.RequestType.Post
    },
    // Upgrade solution package in SharePoint site
    upgrade: {
        requestType: utils_1.RequestType.Post
    },
    // Uninstall solution package from SharePoint site
    uninstall: {
        requestType: utils_1.RequestType.Post
    }
};
/**
 * Tenant Apps
 */
exports.tenantapps = {
    // Get an app by id
    getById: {
        argNames: ["guid"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "tenantapp"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Tenant App Catalog
 */
exports.tenantappcatalog = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "AvailableApps|tenantapps|/getById('[Id]')|tenantapp"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Adds the folder that is located at the specified URL to the collection.
    add: {
        argNames: ["overwrite", "url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Get an app by id.
    getById: {
        argNames: ["guid"],
        name: "AvailableApps/getById('[[guid]]')",
        requestType: utils_1.RequestType.GetReplace,
        returnType: "tenantapp"
    },
    // Gets the site collection app catalog sites
    SiteCollectionAppCatalogsSites: {
        requestType: utils_1.RequestType.Post
    }
};
/**
 * Utility
 */
exports.utility = {
    createEmailBodyForInvitation: {
        argNames: ["pageAddress"],
        name: "SP.Utilities.Utility.CreateEmailBodyForInvitation",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getAppLicenseDeploymentId: {
        name: "SP.Utilities.Utility.GetAppLicenseDeploymentId",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getAppLicenseInformation: {
        name: "SP.Utilities.Utility.GetAppLicenseInformation",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getCurrentUserEmailAddresses: {
        name: "SP.Utilities.Utility.GetCurrentUserEmailAddresses",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getLocalizedString: {
        argNames: ["sourceValue"],
        name: "SP.Utilities.Utility.GetLocalizedString",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getLowerCaseString: {
        argNames: ["sourceValue", "lcid"],
        name: "SP.Utilities.Utility.GetLowerCaseString",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    importAppLicense: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.ImportAppLicense",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    isUserLicensedForEntityInContext: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.IsUserLicensedForEntityInContext",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    localizeWebPartGallery: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.LocalizeWebPartGallery",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    markDiscussionAsFeatured: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.MarkDiscussionAsFeatured",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgs
    },
    resolvePrincipal: {
        name: "SP.Utilities.Utility.ResolvePrincipalInCurrentContext",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    searchPrincipals: {
        name: "SP.Utilities.Utility.SearchPrincipalsUsingContextWeb",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    unmarkDiscussionAsFeatured: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.UnmarkDiscussionAsFeatured",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Web
 */
exports.web = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "AllProperties|propertyvalues", "AppTiles", "AssociatedMemberGroup|group", "AssociatedOwnerGroup|group",
        "AssociatedVisitorGroup|group", "Author|user", "AvailableContentTypes|contenttypes", "AvailableFields|fields",
        "ClientWebParts", "ContentTypes|contenttypes|('[Name]')|contenttype", "CurrentUser|user", "DataLeakagePreventionStatusInfo",
        "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features",
        "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "FirstUniqueAncestorSecurableObject",
        "Folders|folders|/getByUrl('[Name]')|folder", "Lists|lists|/getByTitle('[Name]')|list",
        "ListTemplates|listtemplates|('[Name]')|listtemplate", "Navigation", "ParentWeb",
        "PushNotificationSubscribers", "RecycleBin", "RegionalSettings", "RoleAssignments|roleassignments|([Name])|roleassignment",
        "RoleDefinitions|roledefinitions|/getByName('[Name]')|roledefinition", "RootFolder|folder|/getByUrl('[Name]')|file",
        "SiteGroups|sitegroups|/getByName('[Name]')|group", "SiteUserInfoList", "SiteUsers|users|/getById([Name])|user",
        "TenantAppCatalog|tenantappcatalog", "ThemeInfo", "TitleResource",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "WebInfos|webinfos", "Webs|webs", "WorkflowAssociations", "WorkflowTemplates"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
    applyTheme: {
        argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Applies the specified site definition or site template to the Web site that has no template applied to it.
    applyWebTemplate: {
        argName: ["name"],
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    // Creates unique role assignments for the securable object.
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
    doesPushNotificationSubscriberExist: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Returns whether the current user has the given set of permissions.
    doesUserHavePermissions: {
        argNames: ["High", "Low"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
    ensureUser: {
        argNames: ["logonName"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Sends data to an OData service.
    executeRemoteLOB: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets the app BDC catalog.
    getAppBdcCatalog: {
        requestType: utils_1.RequestType.Post
    },
    // Gets the app BDC catalog for the specified app instance.
    getAppBdcCatalogForAppInstance: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Retrieves an AppInstance installed on this Site.
    getAppInstanceById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Retrieves all AppInstances installed on this site that are instances of the specified App.
    getAppInstancesByProductId: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Returns a collection of site templates available for the site.
    getAvailableWebTemplates: {
        argNames: ["lcid", "doincludecrosslanguage"],
        requestType: utils_1.RequestType.GetWithArgs
    },
    // Returns the list gallery on the site.
    getCatalog: {
        argNames: ["galleryType"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets the context information for the site. Static method.
    getContextWebInformation: {
        name: "contextInfo",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    // Gets the custom list templates for the site.
    getCustomListTemplates: {
        requestType: utils_1.RequestType.Get
    },
    // Gets the document libraries on a site. Static method. (SharePoint Online only)
    getDocumentLibraries: {
        argNames: ["url"],
        name: "sp.web.getDocumentLibraries",
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    // Gets the specified external content type in a line-of-business (LOB) system application.
    getEntity: {
        argNames: ["namespace", "name"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Returns the file object located at the specified server-relative URL.
    getFileByServerRelativeUrl: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },
    // Returns the folder object located at the specified server-relative URL.
    getFolderByServerRelativeUrl: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    // Gets the list at the specified site-relative URL. (SharePoint Online only)
    getList: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    // Gets the push notification subscriber over the site for the specified device application instance ID.
    getPushNotificationSubscriber: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
    getPushNotificationSubscribersByArgs: {
        argNames: ["args"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    // Queries for the push notification subscribers over the site for the specified user.
    getPushNotificationSubscribersByUser: {
        argNames: ["loginName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
    getSubwebsFilteredForCurrentUser: {
        argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
        requestType: utils_1.RequestType.GetWithArgs,
        returnType: "webinfos"
    },
    // Returns the user corresponding to the specified member identifier for the current site.
    getUserById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    // Gets the effective permissions that the specified user has within the current application scope.
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    // Gets the site URL from a page URL. Static method.
    getWebUrlFromPageUrl: {
        name: "sp.web.getWebUrlFromPageUrl",
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    // Uploads and installs an app package to this site.
    loadAndInstallApp: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Uploads and installs an App package on the site in a specified locale.
    loadAndInstallAppInSpecifiedLocale: {
        argNames: ["appPackageStream", "installationLocaleLCID"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Uploads an App package and creates an instance from it.
    loadApp: {
        argNames: ["appPackageStream", "installationLocaleLCID"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Returns the name of the image file for the icon that is used to represent the specified file.
    mapToIcon: {
        argNames: ["filename", "progid", "size"],
        requestType: utils_1.RequestType.GetWithArgs
    },
    // Processes a notification from an external system.
    processExternalNotification: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Queries the object
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
    registerPushNotificationSubscriber: {
        argNames: ["deviceappinstanceid", "servicetoken"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    // Unregisters the subscriber for push notifications from the site.
    unregisterPushNotificationSubscriber: {
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.Web",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Web Information Collection
 */
exports.webinfos = {
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Webs
 */
exports.webs = {
    add: {
        argNames: ["parameters"],
        metadataType: "SP.WebCreationInformation",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=site.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * People Manager
 */
exports.peoplemanager = {
    amIFollowedBy: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    amIFollowing: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    follow: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    followTag: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    getFollowedTags: {
        argNames: ["maxCount"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getFollowersFor: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    getMyFollowers: {
        requestType: utils_1.RequestType.Get
    },
    getMyProperties: {
        requestType: utils_1.RequestType.Get
    },
    getMySuggestions: {
        requestType: utils_1.RequestType.Get
    },
    getPeopleFollowedBy: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    getPeopleFollowedByMe: {
        requestType: utils_1.RequestType.Get
    },
    getPropertiesFor: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    getTrendingTags: {
        name: "sp.userprofiles.peoplemanager.gettrendingtags",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Get
    },
    getUserProfilePropertyFor: {
        argNames: ["accountName", "propertyName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    hideSuggestion: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    isFollowing: {
        argNames: ["possibleFollowerAccountName", "possibleFolloweeAccountName"],
        name: "sp.userprofiles.peoplemanager.isfollowing",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    setMyProfilePicture: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    stopFollowing: {
        argNames: ["accountName"],
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    stopFollowingTag: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
};
/**
 * Profile Loader
 */
exports.profileloader = {
    createPersonalSiteEnqueueBulk: {
        argNames: ["emailIDs"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getOwnerUserProfile: {
        name: "sp.userprofiles.profileloader.getowneruserprofile",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post,
        returnType: "userprofile"
    },
    getUserProfile: {
        requestType: utils_1.RequestType.Post,
        returnType: "userprofile"
    },
};
/**
 * Social Feed
 */
exports.socialfeed = {
    actor: {
        argNames: ["accountName"],
        name: "actor(item=@v)?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    actorFeed: {
        argNames: ["accountName"],
        name: "actor(item=@v)/feed?@v='[[accountName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    clearMyUnreadMentionCount: {
        name: "my/mentionfeed/clearMyUnreadMentionCount",
        requestType: utils_1.RequestType.Post
    },
    my: {
        name: "my",
        requestType: utils_1.RequestType.Get
    },
    myFeed: {
        name: "my/feed",
        requestType: utils_1.RequestType.Get
    },
    myLikes: {
        name: "my/likes",
        requestType: utils_1.RequestType.Get
    },
    myMentionFeed: {
        name: "my/mentionfeed",
        requestType: utils_1.RequestType.Get
    },
    myNews: {
        name: "my/news",
        requestType: utils_1.RequestType.Get
    },
    myTimelineFeed: {
        name: "my/timelinefeed",
        requestType: utils_1.RequestType.Get
    },
    myUnreadMentionCount: {
        name: "my/unreadmentioncount",
        requestType: utils_1.RequestType.Get
    }
};
/**
 * User Profile
 */
exports.userprofile = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "PersonalSite|site"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    createPersonalSiteEnque: {
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    shareAllSocialData: {
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    }
};
//# sourceMappingURL=social.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Group
 */
exports.group = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Users|users|/getById([Name])|user"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Site Groups
 */
exports.sitegroups = {
    // Adds a group to the group collection.
    add: {
        metadataType: "SP.Group",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Returns a group from the collection based on the member ID of the group.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },
    // Returns a cross-site group from the collection based on the name of the group.
    getByName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Removes the group with the specified member ID from the collection.
    removeById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Removes the cross-site group with the specified name from the collection.
    removeByLoginName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
};
/**
 * People Picker
 */
exports.peoplepicker = {
    clientPeoplePickerResolveUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    clientPeoplePickerSearchUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * User
 */
exports.user = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Groups|sitegroups|([Name])|group"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * Users
 */
exports.users = {
    // Adds a user to the user collection.
    add: {
        metadataType: "SP.User",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets the user with the specified email address.
    getByEmail: {
        argNames: ["email"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    // Gets the user with the specified member identifier (ID).
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    // Gets the user with the specified login name.
    getByLoginName: {
        argNames: ["loginName"],
        name: "getByLoginName(@v)?@v='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace,
        returnType: "user"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    // Removes the user with the specified ID.
    removeById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    // Removes the user with the specified login name.
    removeByLoginName: {
        argNames: ["loginName"],
        name: "removeByLoginName(@v)?@v='[[loginName]]'",
        requestType: utils_1.RequestType.PostReplace
    }
};
//# sourceMappingURL=user.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * User Custom Action
 */
exports.usercustomaction = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
/**
 * User Custom Actions
 */
exports.usercustomactions = {
    // Adds a user custom action to the collection.
    add: {
        metadataType: "SP.UserCustomAction",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Deletes all custom actions in the collection.
    clear: {
        requestType: utils_1.RequestType.Post
    },
    // Returns the custom action with the specified identifier.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "usercustomaction"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=userCustomAction.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calendar Types
 */
exports.CalendarTypes = {
    Gregorian: 1,
    JapaneseEmperorEra: 3,
    TaiwanCalendar: 4,
    KoreanTangunEra: 5,
    Hijri: 6,
    Thai: 7,
    HebrewLunar: 8,
    GregorianMiddleEastFrench: 9,
    GregorianArabic: 10,
    GregorianTransliteratedEnglish: 11,
    GregorianTransliteratedFrench: 12,
    KoreanandJapaneseLunar: 14,
    ChineseLunar: 15,
    SakaEra: 16
};
/**
 * Check Out Types
 */
exports.CheckOutType = { Online: 0, Offline: 1, None: 2 };
/**
 * Choice Format Types
 */
exports.ChoiceFormatType = { Dropdown: 0, RadioButtons: 1 };
/**
 * Client Template Utility
 */
exports.ClientTemplatesUtility = {
    UserLookupDelimitString: ";#",
    UserMultiValueDelimitString: ",#"
};
/**
 * Control Modes
 */
exports.ControlMode = {
    Invalid: 0,
    Display: 1,
    Edit: 2,
    New: 3,
    View: 4
};
/**
 * Date Format
 */
exports.DateFormat = { DateOnly: 0, DateTime: 1 };
/**
 * Draft Visibility Types
 */
exports.DraftVisibilityType = { Reader: 0, Author: 1, Approver: 2 };
/**
 * Event Receiver Synchronization Types
 */
exports.EventReceiverSynchronizationType = { Synchronization: 1, Asynchronous: 2 };
/**
 * Event Receiver Types
 */
exports.EventReceiverType = {
    ItemAdding: 1,
    ItemUpdating: 2,
    ItemDeleting: 3,
    ItemCheckingIn: 4,
    ItemCheckingOut: 5,
    ItemUncheckingOut: 6,
    ItemAttachmentAdding: 7,
    ItemAttachmentDeleting: 8,
    ItemFileMoving: 9,
    ItemVersionDeleting: 11,
    FieldAdding: 101,
    FieldUpdating: 102,
    FieldDeleting: 103,
    ListAdding: 104,
    ListDeleting: 105,
    SiteDeleting: 201,
    WebDeleting: 202,
    WebMoving: 203,
    WebAdding: 204,
    GroupAdding: 301,
    GroupUpdating: 302,
    GroupDeleting: 303,
    GroupUserAdding: 304,
    GroupUserDeleting: 305,
    RoleDefinitionAdding: 306,
    RoleDefinitionUpdating: 307,
    RoleDefinitionDeleting: 308,
    RoleAssignmentAdding: 309,
    RoleAssignmentDeleting: 310,
    InheritanceBreaking: 311,
    InheritanceResetting: 312,
    WorkflowStarting: 501,
    ItemAdded: 10001,
    ItemUpdated: 10002,
    ItemDeleted: 10003,
    ItemCheckedIn: 10004,
    ItemCheckedOut: 10005,
    ItemUncheckedOut: 10006,
    ItemAttachmentAdded: 10007,
    ItemAttachmentDeleted: 10008,
    ItemFileMoved: 10009,
    ItemFileConverted: 10010,
    ItemVersionDeleted: 10011,
    FieldAdded: 10101,
    FieldUpdated: 10102,
    FieldDeleted: 10103,
    ListAdded: 10104,
    ListDeleted: 10105,
    SiteDeleted: 10201,
    WebDeleted: 10202,
    WebMoved: 10203,
    WebProvisioned: 10204,
    GroupAdded: 10301,
    GroupUpdated: 10302,
    GroupDeleted: 10303,
    GroupUserAdded: 10304,
    GroupUserDeleted: 10305,
    RoleDefinitionAdded: 10306,
    RoleDefinitionUpdated: 10307,
    RoleDefinitionDeleted: 10308,
    RoleAssignmentAdded: 10309,
    RoleAssignmentDeleted: 10310,
    InheritanceBroken: 10311,
    InheritanceReset: 10312,
    WorkflowStarted: 10501,
    WorkflowPostponed: 10502,
    WorkflowCompleted: 10503,
    EntityInstanceAdded: 10601,
    EntityInstanceUpdated: 10602,
    EntityInstanceDeleted: 10603,
    AppInstalled: 10701,
    AppUpgraded: 10702,
    AppUninstalling: 10703,
    EmailReceived: 20000,
    ContextEvent: 32766
};
/**
 * Field Note Types
 */
exports.FieldNoteType = {
    /** Enhance Rich Text */
    EnhancedRichText: 0,
    /** Rich Text */
    RichText: 1,
    /** Text Only */
    TextOnly: 2
};
/**
 * Field Number Type
 */
exports.FieldNumberType = {
    /** Decimal */
    Decimal: 0,
    /** Integer */
    Integer: 1,
    /** Percentage */
    Percentage: 2,
};
/**
 * Field Result Types
 */
exports.FieldResultType = {
    /** Boolean */
    Boolean: "Boolean",
    /** Currency */
    Currency: "Currency",
    /** Date Only */
    DateOnly: "DateOnly",
    /** Date & Time */
    DateTime: "DateTime",
    /** Number */
    Number: "Number",
    /** Text */
    Text: "Text"
};
/**
 * Field Types
 */
exports.FieldType = {
    AllDayEvent: 29,
    Attachments: 19,
    Boolean: 8,
    Calculated: 17,
    Choice: 6,
    Computed: 12,
    ContentTypeId: 25,
    Counter: 5,
    CrossProjectLink: 22,
    Currency: 10,
    DateTime: 4,
    Error: 24,
    File: 18,
    Geolocation: 31,
    GridChoice: 16,
    Guid: 14,
    Integer: 1,
    Invalid: 0,
    Lookup: 7,
    MaxItems: 31,
    ModStat: 23,
    MultiChoice: 15,
    Note: 3,
    Number: 9,
    PageSeparator: 26,
    Recurrence: 21,
    Text: 2,
    ThreadIndex: 27,
    Threading: 13,
    URL: 11,
    User: 20,
    WorkflowEventType: 30,
    WorkflowStatus: 28
};
/**
 * Field User Selection Types
 */
exports.FieldUserSelectionType = { PeopleOnly: 0, PeopleAndGroups: 1 };
/**
 * File Template Types
*/
exports.FileTemplateType = { StandardPage: 0, WikiPage: 1, FormPage: 2 };
/**
 * Friendly Date Format
 */
exports.FriendlyDateFormat = {
    Unspecified: 0,
    Disabled: 1,
    Relative: 2
};
/**
 * List Template Types
*/
exports.ListTemplateType = {
    AccessRequest: 160,
    AdminTasks: 1200,
    Agenda: 201,
    AppDataCatalog: 125,
    Announcements: 104,
    CallTrack: 404,
    Categories: 303,
    Circulation: 405,
    Comments: 302,
    Contacts: 105,
    CustomGrid: 120,
    DataConnectionLibrary: 130,
    DataSources: 110,
    Decision: 204,
    DesignCatalog: 124,
    DeveloperSiteDraftApps: 1230,
    DiscussionBoard: 108,
    DocumentLibrary: 101,
    Events: 106,
    ExternalList: 600,
    Facility: 402,
    GanttTasks: 150,
    GenericList: 100,
    HealthReports: 1221,
    HealthRules: 1220,
    HelpLibrary: 151,
    Holidays: 421,
    HomePageLibrary: 212,
    IMEDic: 499,
    IssueTracking: 1100,
    Links: 103,
    ListTemplateCatalog: 114,
    MasterPageCatalog: 116,
    MaintenanceLogs: 175,
    MeetingObjective: 207,
    Meetings: 200,
    MeetingUser: 202,
    MySiteDocumentLibrary: 700,
    Posts: 301,
    NoCodePublic: 122,
    NoCodeWorkflows: 117,
    PictureLibrary: 109,
    SolutionCatalog: 121,
    Survey: 102,
    Tasks: 107,
    TasksWithTimelineAndHierarchy: 171,
    TextBox: 210,
    ThemeCatalog: 123,
    ThingsToBring: 211,
    Timecard: 420,
    UserInformation: 112,
    WebPageLibrary: 119,
    WebPartCatalog: 113,
    WebTemplateCatalog: 111,
    Whereabouts: 403,
    WorkflowHistory: 140,
    WorkflowProcess: 118,
    XMLForm: 115
};
/**
 * Locale LCID Types
 */
exports.LocaleLCIDType = {
    Afrikaans: 1078,
    Albanian: 1052,
    ArabicAlgeria: 5121,
    ArabicBahrain: 15361,
    ArabicEgypt: 3073,
    ArabicIraq: 2049,
    ArabicJordan: 11265,
    ArabicLebanon: 12289,
    ArabicLibya: 4097,
    ArabicMorocco: 6145,
    ArabicOman: 8193,
    ArabicQatar: 16385,
    ArabicSaudiArabia: 1025,
    ArabicSyria: 10241,
    ArabicTunisia: 7169,
    ArabicUAE: 14337,
    ArabicYemen: 9217,
    Armenian: 1067,
    AzeriCyrillic: 2092,
    AzeriLatin: 1068,
    Basque: 1069,
    Belarusian: 1059,
    Bulgarian: 1026,
    Catalan: 1027,
    ChineseHongKongSAR: 3076,
    ChineseMacaoSAR: 5124,
    ChinesePRC: 2052,
    ChineseSingapore: 4100,
    ChineseTaiwan: 1028,
    CroatianCroatia: 1050,
    Czech: 1029,
    Danish: 1030,
    Divehi: 1125,
    DutchBelgium: 2067,
    DutchNetherlands: 1043,
    EnglishAustralia: 3081,
    EnglishBelize: 10249,
    EnglishCanada: 4105,
    EnglishCaribbean: 9225,
    EnglishIreland: 6153,
    EnglishJamaica: 8201,
    EnglishNewZealand: 5129,
    EnglishPhilippines: 13321,
    EnglishSouthAfrica: 7177,
    EnglishTrinidad: 11273,
    EnglishUnitedKingdom: 2057,
    EnglishUnitedStates: 1033,
    EnglishZimbabwe: 12297,
    Estonian: 1061,
    Faeroese: 1080,
    Finnish: 1035,
    FrenchBelgium: 2060,
    FrenchCanada: 3084,
    FrenchFrance: 1036,
    FrenchLuxembourg: 5132,
    FrenchMonaco: 6156,
    FrenchSwitzerland: 4108,
    Galician: 1110,
    Georgian: 1079,
    GermanAustria: 3079,
    GermanGermany: 1031,
    GermanLiechtenstein: 5127,
    GermanLuxembourg: 4103,
    GermanSwitzerland: 2055,
    Greek: 1032,
    Gujarati: 1095,
    HebrewIsrael: 1037,
    HindiIndia: 1081,
    Hungarian: 1038,
    Icelandic: 1039,
    Indonesian: 1057,
    ItalianItaly: 1040,
    ItalianSwitzerland: 2064,
    Japanese: 1041,
    Kannada: 1099,
    Kazakh: 1087,
    Konkani: 1111,
    Korean: 1042,
    KyrgyzCyrillic: 1088,
    Latvian: 1062,
    Lithuanian: 1063,
    MacedonianFYROM: 1071,
    Malay: 1086,
    MalayBruneiDarussalam: 2110,
    Marathi: 1102,
    MongolianCyrillic: 1104,
    NorwegianBokmal: 1044,
    NorwegianNynorsk: 2068,
    PersianIran: 1065,
    Polish: 1045,
    PortugueseBrazil: 1046,
    PortuguesePortugal: 2070,
    Punjabi: 1094,
    Romanian: 1048,
    Russian: 1049,
    Sanskrit: 1103,
    SerbianCyrillic: 3098,
    SerbianLatin: 2074,
    Slovak: 1051,
    Slovenian: 1060,
    SpanishArgentina: 11274,
    SpanishBolivia: 16394,
    SpanishChile: 13322,
    SpanishColombia: 9226,
    SpanishCostaRica: 5130,
    SpanishDominicanRepublic: 7178,
    SpanishEcuador: 12298,
    SpanishElSalvador: 17418,
    SpanishGuatemala: 4106,
    SpanishHonduras: 18442,
    SpanishMexico: 2058,
    SpanishNicaragua: 19466,
    SpanishPanama: 6154,
    SpanishParaguay: 15370,
    SpanishPeru: 10250,
    SpanishPuertoRico: 20490,
    SpanishSpain: 3082,
    SpanishUruguay: 14346,
    SpanishVenezuela: 8202,
    Swahili: 1089,
    Swedish: 1053,
    SwedishFinland: 2077,
    Syriac: 1114,
    Tamil: 1097,
    Tatar: 1092,
    Telugu: 1098,
    ThaiThailand: 1054,
    Turkish: 1055,
    Ukrainian: 1058,
    UrduPakistan: 1056,
    UzbekCyrillic: 2115,
    UzbekLatin: 1091,
    Vietnamese: 1066,
};
/**
 * Page Types
 */
exports.PageType = {
    DefaultView: 0,
    DialogView: 2,
    DisplayForm: 4,
    DisplayFormDialog: 5,
    EditForm: 6,
    EditFormDialog: 7,
    Invalid: -1,
    NewForm: 8,
    NewFormDialog: 9,
    NormalView: 1,
    Page_MAXITEMS: 11,
    SolutionForm: 10,
    View: 3
};
/**
 * Personal Site Capabilities
 */
exports.PersonalSiteCapabilities = {
    Education: 16,
    Guest: 32,
    MyTasksDashboard: 8,
    None: 0,
    Profile: 1,
    Social: 2,
    Storage: 4
};
/**
 * Principal Sources
 */
exports.PrincipalSources = {
    All: 15,
    MembershipProvider: 4,
    None: 0,
    RoleProvider: 8,
    UserInfoList: 1,
    Windows: 2
};
/**
 * Principal Types
 */
exports.PrincipalTypes = {
    All: 15,
    DistributionList: 2,
    None: 0,
    SecurityGroup: 4,
    SharePointGroup: 8,
    User: 1
};
/**
 * Relationship Delete Behavior Types
 */
exports.RelationshipDeleteBehaviorType = { None: 0, Cascade: 1, Restrict: 2 };
/**
 * Reordering Rule Match Types
 */
exports.ReorderingRuleMatchType = {
    ContentTypeIs: 5,
    FileExtensionMatches: 6,
    ManualCondition: 8,
    ResultContainsKeyword: 0,
    ResultHasTag: 7,
    TitleContainsKeyword: 1,
    TitleMatchesKeyword: 2,
    UrlExactlyMatches: 4,
    UrlStartsWith: 3
};
/**
 * Role Types
 */
exports.RoleType = {
    Administrator: 5,
    Contributor: 3,
    Editor: 6,
    Guest: 1,
    None: 0,
    Reader: 2,
    WebDesigner: 4
};
/**
 * URL Format Types
 */
exports.UrlFormatType = { Hyperlink: 0, Image: 1 };
/**
 * URL Zones
 */
exports.URLZones = { Default: 0, Intranet: 1, Internet: 2, Custom: 3, Extranet: 4 };
/**
 * User Custom Action Registration Types
 */
exports.UserCustomActionRegistrationType = { None: 0, List: 1, ContentType: 2, ProgId: 3, FileType: 4 };
/**
 * View Types
 */
exports.ViewType = {
    Calendar: 524288,
    Chart: 131072,
    Gantt: 67108864,
    Grid: 2048,
    Html: 1,
    Recurrence: 8193
};
//# sourceMappingURL=sptypes.js.map

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComplexTypes = __webpack_require__(95);
exports.ComplexTypes = ComplexTypes;
var Results = __webpack_require__(96);
exports.Results = Results;
var SPTypes = __webpack_require__(97);
exports.SPTypes = SPTypes;
//# sourceMappingURL=index.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=complexTypes.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=results.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=sptypes.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
/**
 * Base Request
 */
var BaseRequest = /** @class */ (function (_super) {
    __extends(BaseRequest, _super);
    function BaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method to execute a method
    BaseRequest.prototype.executeMethod = function (methodName, methodConfig, args) {
        var targetInfo = null;
        // See if the metadata is defined for the base object
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            // Create the target information and use the url defined for the base object
            targetInfo = {
                url: metadata.uri
            };
            // See if we are inheriting the metadata type
            if (methodConfig.inheritMetadataType) {
                // Copy the metadata type
                methodConfig.metadataType = metadata.type;
            }
            // Update the metadata uri
            this.updateMetadataUri(metadata, targetInfo);
        }
        else {
            // Copy the target information
            targetInfo = Object.create(this.targetInfo);
        }
        // Get the method information
        var methodInfo = new _1.MethodInfo(methodName, methodConfig, args);
        // Update the target information
        targetInfo.bufferFl = methodConfig.requestType == _1.RequestType.GetBuffer;
        targetInfo.data = methodInfo.body;
        targetInfo.defaultToWebFl = this.base.targetInfo.defaultToWebFl;
        targetInfo.method = methodInfo.requestMethod;
        // See if we are replacing the endpoint
        if (methodInfo.replaceEndpointFl) {
            // Replace the endpoint
            targetInfo.endpoint = methodInfo.url;
        }
        else if (methodInfo.url && methodInfo.url.length > 0) {
            // Ensure the end point exists
            targetInfo.endpoint = targetInfo.endpoint ? targetInfo.endpoint : "";
            // See if the endpoint exists, and the method is not a query string
            if (targetInfo.endpoint && methodInfo.url && methodInfo.url.indexOf("?") != 0) {
                // Add a "/" separator to the url
                targetInfo.endpoint += "/";
            }
            // Append the url
            targetInfo.endpoint += methodInfo.url;
        }
        // Create a new object
        var obj = new _1.Base(targetInfo);
        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.getAllItemsFl = methodInfo.getAllItemsFl;
        obj.parent = this;
        obj.requestType = methodConfig.requestType;
        // Ensure the return type exists
        if (methodConfig.returnType) {
            // Add the methods
            this.addMethods(obj, { __metadata: { type: methodConfig.returnType } });
        }
        // Return the object
        return obj;
    };
    // Method to execute the request
    BaseRequest.prototype.executeRequest = function (asyncFl, callback) {
        var _this = this;
        var isBatchRequest = this.base && this.base.batchRequests && this.base.batchRequests.length > 0;
        var targetInfo = isBatchRequest ? _1.Batch.getTargetInfo(this.base.batchRequests) : new _1.TargetInfo(this.targetInfo);
        // See if this is an asynchronous request
        if (asyncFl) {
            // See if the not a batch request, and it already exists
            if (this.xhr && !isBatchRequest) {
                // Execute the callback
                callback ? callback(this) : null;
            }
            else {
                // Create the request
                this.xhr = new _1.XHRRequest(asyncFl, targetInfo, function () {
                    // Update the response and status
                    _this.response = _this.xhr.response;
                    _this.status = _this.xhr.status;
                    // See if we are returning a file buffer
                    if (_this.requestType == _1.RequestType.GetBuffer) {
                        // Execute the callback
                        callback ? callback(_this.response) : null;
                    }
                    else {
                        // Update the data object
                        _this.updateDataObject(isBatchRequest);
                        // Validate the data collection
                        isBatchRequest ? null : _this.validateDataCollectionResults().then(function () {
                            // Execute the callback
                            callback ? callback(_this) : null;
                        });
                    }
                });
            }
        }
        else if (this.xhr) {
            return this;
        }
        else {
            // Create the request
            this.xhr = new _1.XHRRequest(asyncFl, targetInfo);
            // Update the response and status
            this.response = this.xhr.response;
            this.status = this.xhr.status;
            // See if we are returning a file buffer
            if (this.requestType == _1.RequestType.GetBuffer) {
                // Return the response
                return this.response;
            }
            // Update the base object
            this.updateDataObject(isBatchRequest);
            // See if the base is a collection and has more results
            if (this["d"] && this["d"].__next) {
                // Add the "next" method to get the next set of results
                this["next"] = new Function("return this.getNextSetOfResults();");
            }
            // Return the base object
            return this;
        }
    };
    // Method to return a collection
    BaseRequest.prototype.getCollection = function (method, args) {
        // Copy the target information
        var targetInfo = Object.create(this.targetInfo);
        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;
        // See if the metadata is defined for the base object
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            // Update the url of the target information
            targetInfo.url = metadata.uri;
            // Update the metadata uri
            this.updateMetadataUri(metadata, targetInfo);
            // Set the endpoint
            targetInfo.endpoint = method;
        }
        else {
            // Append the method to the endpoint
            targetInfo.endpoint += "/" + method;
        }
        // Update the callback
        targetInfo.callback = args && typeof (args[0]) === "function" ? args[0] : null;
        // Create a new object
        var obj = new _1.Base(targetInfo);
        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        // Return the object
        return obj;
    };
    // Method to get the next set of results
    BaseRequest.prototype.getNextSetOfResults = function () {
        // Create the target information to query the next set of results
        var targetInfo = Object.create(this.targetInfo);
        targetInfo.endpoint = "";
        targetInfo.url = this["d"].__next;
        // Create a new object
        var obj = new _1.Base(targetInfo);
        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        // Return the object
        return obj;
    };
    // Method to return a property of the base object
    BaseRequest.prototype.getProperty = function (propertyName, requestType) {
        // Copy the target information
        var targetInfo = Object.create(this.targetInfo);
        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;
        // See if the metadata is defined for the base object
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            // Update the url of the target information
            targetInfo.url = metadata.uri;
            // Update the metadata uri
            this.updateMetadataUri(metadata, targetInfo);
            // Set the endpoint
            targetInfo.endpoint = propertyName;
        }
        else {
            // Append the property name to the endpoint
            targetInfo.endpoint += "/" + propertyName;
        }
        // Create a new object
        var obj = new _1.Base(targetInfo);
        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        // Add the methods
        requestType ? this.addMethods(obj, { __metadata: { type: requestType } }) : null;
        // Return the object
        return obj;
    };
    // Method to update the metadata uri
    BaseRequest.prototype.updateMetadataUri = function (metadata, targetInfo) {
        // See if this is a field
        if (/^SP.Field/.test(metadata.type) || /^SP\..*Field$/.test(metadata.type)) {
            // Fix the url reference
            targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
        }
        else if (/SP.EventReceiverDefinition/.test(metadata.type)) {
            // Fix the url reference
            targetInfo.url = targetInfo.url.replace(/\/EventReceiver\//, "/EventReceivers/");
        }
        else if (/Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata/.test(targetInfo.url)) {
            // Fix the url reference
            targetInfo.url = targetInfo.url.split("Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata")[0] + "web/tenantappcatalog/availableapps/getbyid('" + this["ID"] + "')";
        }
    };
    // Method to validate the data collection results
    BaseRequest.prototype.validateDataCollectionResults = function () {
        var _this = this;
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (xhr, resolve) {
                // Validate the response
                if (xhr && xhr.status < 400 && typeof (xhr.response) === "string" && xhr.response.length > 0) {
                    // Convert the response and ensure the data property exists
                    var data = JSON.parse(xhr.response);
                    // See if there are more items to get
                    if (data.d && data.d.__next) {
                        // See if we are getting all items in the base request
                        if (_this.getAllItemsFl) {
                            // Create the target information to query the next set of results
                            var targetInfo = Object.create(_this.targetInfo);
                            targetInfo.endpoint = "";
                            targetInfo.url = data.d.__next;
                            // Create a new object
                            new _1.XHRRequest(true, new _1.TargetInfo(targetInfo), function (xhr) {
                                // Convert the response and ensure the data property exists
                                var data = JSON.parse(xhr.response);
                                if (data.d) {
                                    // Update the data collection
                                    _this.updateDataCollection(_this, data.d.results);
                                    // Append the raw data results
                                    _this["d"].results = _this["d"].results.concat(data.d.results);
                                    // Validate the data collection
                                    request(xhr, resolve);
                                }
                                // Resolve the promise
                                resolve();
                            });
                        }
                        else {
                            // Add a method to get the next set of results
                            _this["next"] = new Function("return this.getNextSetOfResults();");
                            // Resolve the promise
                            resolve();
                        }
                    }
                    else {
                        // Resolve the promise
                        resolve();
                    }
                }
                else {
                    // Resolve the promise
                    resolve();
                }
            };
            // Execute the request
            request(_this.xhr, resolve);
        });
    };
    return BaseRequest;
}(_1.BaseHelper));
exports.BaseRequest = BaseRequest;
//# sourceMappingURL=baseRequest.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var _1 = __webpack_require__(0);
/**
 * Base Execution
 */
var BaseExecution = /** @class */ (function (_super) {
    __extends(BaseExecution, _super);
    function BaseExecution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method to execute this request as a batch request
    BaseExecution.prototype.batch = function (arg) {
        var callback = null;
        var appendFl = false;
        // See if the input is a boolean
        if (typeof (arg) === "boolean") {
            // Set the flag
            appendFl = arg;
        }
        else {
            // Set the callback
            callback = arg;
        }
        // Set the base
        this.base = this.base ? this.base : this;
        // See if we are appending this request
        if (appendFl && this.base.batchRequests) {
            // Append the request
            this.base.batchRequests[this.base.batchRequests.length - 1].push({
                targetInfo: new _1.TargetInfo(this.targetInfo)
            });
        }
        else {
            // Ensure the batch requests exist
            this.base.batchRequests = this.base.batchRequests || [];
            // Create the request
            this.base.batchRequests.push([{
                    callback: callback,
                    targetInfo: new _1.TargetInfo(this.targetInfo)
                }]);
        }
        // Return this object
        return this;
    };
    // Method to execute the request
    BaseExecution.prototype.execute = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callback = null;
        var waitFl = false;
        // Set the callback and wait flag
        switch (args.length) {
            case 1:
                callback = typeof (args[0]) === "boolean" ? callback : args[0];
                waitFl = typeof (args[0]) === "boolean" ? args[0] : waitFl;
                break;
            case 2:
                callback = args[0];
                waitFl = args[1];
                break;
        }
        // Set the base
        this.base = this.base ? this.base : this;
        // Set the response index
        this.responseIndex = this.base.responses.length;
        // Add this object to the responses
        this.base.responses.push(this);
        // See if we are waiting for the responses to complete
        if (waitFl) {
            // Wait for the responses to execute
            this.waitForRequestsToComplete(function () {
                // Execute this request
                _this.executeRequest(true, function (response) {
                    // See if there is a callback
                    if (callback) {
                        // Set the base to this object, and clear requests
                        // This will ensure requests from this object do not conflict w/ this request
                        _this.base = _this;
                        _this.base.responses = [];
                        // Execute the callback and see if it returns a promise
                        var returnVal = callback(response);
                        var waitFunc = returnVal ? returnVal.done || returnVal.then : null;
                        if (waitFunc && typeof (waitFunc) === "function") {
                            // Wait for the promise to complete
                            waitFunc(function () {
                                // Reset the base
                                _this.base = _this.parent.base;
                                // Set the wait flag
                                _this.base.waitFlags[_this.responseIndex] = true;
                            });
                            // Wait for the promise to complete
                            return;
                        }
                        // Reset the base
                        _this.base = _this.parent.base;
                    }
                    // Set the wait flag
                    _this.base.waitFlags[_this.responseIndex] = true;
                });
            }, this.responseIndex);
        }
        else {
            // Execute this request
            this.executeRequest(true, function (response) {
                // Execute the callback and see if it returns a promise
                var returnVal = callback ? callback(response) : null;
                if (returnVal && typeof (returnVal.done) === "function") {
                    // Wait for the promise to complete
                    returnVal.done(function () {
                        // Set the wait flag
                        _this.base.waitFlags[_this.responseIndex] = true;
                    });
                }
                else {
                    // Set the wait flag
                    _this.base.waitFlags[_this.responseIndex] = true;
                }
            });
        }
        // Return this object
        return this;
    };
    // Method to execute the request synchronously
    BaseExecution.prototype.executeAndWait = function () { return this.executeRequest(false); };
    // Method to wait for the parent requests to complete
    BaseExecution.prototype.waitForRequestsToComplete = function (callback, requestIdx) {
        var _this = this;
        // Loop until the requests have completed
        var intervalId = lib_1.ContextInfo.window.setInterval(function () {
            var counter = 0;
            // Parse the responses to the requests
            for (var i = 0; i < _this.base.responses.length; i++) {
                var response = _this.base.responses[i];
                // See if we are waiting until a specified index
                if (requestIdx == counter++) {
                    break;
                }
                // Return if the request hasn't completed
                if (response.xhr == null || !response.xhr.completedFl) {
                    return;
                }
                // Ensure the wait flag is set for the previous request
                if (counter > 0 && _this.base.waitFlags[counter - 1] != true) {
                    return;
                }
            }
            // Clear the interval
            lib_1.ContextInfo.window.clearInterval(intervalId);
            // Execute the callback
            callback();
        }, 10);
    };
    return BaseExecution;
}(_1.BaseRequest));
exports.BaseExecution = BaseExecution;
//# sourceMappingURL=baseExecution.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Base
// This is the base class for all objects.
/*********************************************************************************************************************************/
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    /**
     * Constructor
     * @param targetInfo - The target information.
     */
    function Base(targetInfo) {
        var _this = _super.call(this) || this;
        // Default the properties
        _this.targetInfo = Object.create(targetInfo || {});
        _this.responses = [];
        _this.requestType = 0;
        _this.waitFlags = [];
        return _this;
    }
    // Method to wait for the requests to complete
    Base.prototype.done = function (resolve) {
        var _this = this;
        // Ensure the base is set
        this.base = this.base ? this.base : this;
        // Ensure the response index is set
        this.responseIndex = this.responseIndex >= 0 ? this.responseIndex : 0;
        // Wait for the responses to execute
        this.waitForRequestsToComplete(function () {
            var responses = _this.base.responses;
            // Clear the responses
            _this.base.responses = [];
            // Clear the wait flags
            _this.base.waitFlags = [];
            // Resolve the request
            resolve ? resolve.apply(_this, responses) : null;
        });
    };
    // Method to get the request information
    Base.prototype.getInfo = function () { return (new _1.TargetInfo(this.targetInfo)).requestInfo; };
    // Method to stringify the object
    Base.prototype.stringify = function () {
        // Stringify the object
        return JSON.stringify({
            response: this.response,
            status: this.status,
            targetInfo: this.targetInfo
        });
    };
    return Base;
}(_1.BaseExecution));
exports.Base = Base;
//# sourceMappingURL=base.js.map

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var _1 = __webpack_require__(0);
/**
 * Batch Requests
 */
var Batch = /** @class */ (function () {
    function Batch() {
    }
    /**
     * Methods
     */
    // Method to generate a batch request
    Batch.getTargetInfo = function (requests) {
        var batchId = "batch_" + lib_1.ContextInfo.generateGUID();
        var batchRequests = [];
        // Parse the requests
        for (var i = 0; i < requests.length; i++) {
            // Create the batch request
            batchRequests.push(this.createBatch(batchId, requests[i]));
        }
        // End the batch request
        batchRequests.push("--" + batchId + "--");
        // Return the target info
        return new _1.TargetInfo({
            endpoint: "$batch",
            method: "POST",
            data: batchRequests.join("\r\n"),
            requestHeader: {
                "Content-Type": 'multipart/mixed; boundary="' + batchId + '"'
            }
        });
    };
    // Method to generate a batch request
    Batch.createBatch = function (batchId, requests) {
        // Create the batch request
        var batch = ["--" + batchId];
        // Determine if the batch requires a change set
        var requiresChangeset = requests[0] && requests[0].targetInfo.requestMethod != "GET";
        if (requiresChangeset) {
            var changesets = [];
            var changesetId = "changeset_" + lib_1.ContextInfo.generateGUID();
            // Parse the requests
            for (var i = 0; i < requests.length; i++) {
                var request = [];
                var targetInfo = requests[i].targetInfo;
                // Create a change set
                request.push("--" + changesetId);
                request.push("Content-Type: application/http");
                request.push("Content-Transfer-Encoding: binary");
                request.push("");
                request.push("POST " + targetInfo.requestUrl + " HTTP/1.1");
                request.push("Content-Type: application/json;odata=verbose");
                request.push("");
                targetInfo.requestData ? request.push(targetInfo.requestData) : null;
                request.push("");
                // Add the request to the change set
                changesets.push(request.join("\r\n"));
            }
            // End the change set
            changesets.push("--" + changesetId + "--");
            // Generate the change set
            var changeset = changesets.join("\r\n");
            // Add the change set information to the batch
            batch.push("Content-Type: multipart/mixed; boundary=" + changesetId);
            batch.push("Content-Length: " + changeset.length);
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push(changeset);
            batch.push("");
        }
        else if (requests[0]) {
            var targetInfo = requests[0].targetInfo;
            // Add the request to the batch
            batch.push("Content-Type: application/http");
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push("GET " + targetInfo.requestUrl + " HTTP/1.1");
            batch.push("Accept: application/json;odata=verbose");
            batch.push("");
            targetInfo.requestData ? batch.push(targetInfo.requestData) : null;
            batch.push("");
        }
        // Return the batch request
        return batch.join("\r\n");
    };
    return Batch;
}());
exports.Batch = Batch;
//# sourceMappingURL=batch.js.map

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Method Information
// This class will create the method information for the request.
/*********************************************************************************************************************************/
var MethodInfo = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function MethodInfo(methodName, methodInfo, args) {
        // Default the properties
        this.methodInfo = methodInfo;
        this.methodInfo.argValues = args;
        this.methodInfo.name = typeof (this.methodInfo.name) === "string" ? this.methodInfo.name : methodName;
        // Generate the parameters
        this.generateParams();
        // Generate the url
        this.methodUrl = this.generateUrl();
    }
    Object.defineProperty(MethodInfo.prototype, "body", {
        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/
        // The data passed through the body of the request
        get: function () { return this.methodData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "getAllItemsFl", {
        // Flag to determine if we are getting all items
        get: function () { return this.methodInfo.getAllItemsFl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "replaceEndpointFl", {
        // Flag to determine if this method replaces the endpoint
        get: function () { return this.methodInfo.replaceEndpointFl ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "requestMethod", {
        // The request method
        get: function () {
            // Return the request method if it exists
            if (typeof (this.methodInfo.requestMethod) === "string") {
                return this.methodInfo.requestMethod;
            }
            // Determine the request method, based on the request type
            switch (this.methodInfo.requestType) {
                case _1.RequestType.Delete:
                case _1.RequestType.Post:
                case _1.RequestType.PostWithArgs:
                case _1.RequestType.PostWithArgsInBody:
                case _1.RequestType.PostWithArgsInQS:
                case _1.RequestType.PostWithArgsValueOnly:
                case _1.RequestType.PostReplace:
                    return "POST";
                default:
                    return "GET";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "url", {
        // The url of the method and parameters
        get: function () { return this.methodUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "passDataInBody", {
        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/
        get: function () { return this.methodInfo.requestType == _1.RequestType.GetWithArgsInBody || this.methodInfo.requestType == _1.RequestType.PostWithArgsInBody; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "passDataInQS", {
        get: function () { return this.methodInfo.requestType == _1.RequestType.GetWithArgsInQS || this.methodInfo.requestType == _1.RequestType.PostWithArgsInQS; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "isTemplate", {
        get: function () { return this.methodInfo.data ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "replace", {
        get: function () { return this.methodInfo.requestType == _1.RequestType.GetReplace || this.methodInfo.requestType == _1.RequestType.PostReplace; },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/
    // Method to generate the method input parameters
    MethodInfo.prototype.generateParams = function () {
        var params = {};
        // Ensure values exist
        if (this.methodInfo.argValues == null) {
            return;
        }
        // See if the argument names exist
        if (this.methodInfo.argNames) {
            // Parse the argument names
            for (var i = 0; i < this.methodInfo.argNames.length && i < this.methodInfo.argValues.length; i++) {
                var name_1 = this.methodInfo.argNames[i];
                var value = this.methodInfo.argValues[i];
                // Copy the parameter value
                switch (typeof (this.methodInfo.argValues[i])) {
                    case "boolean":
                        params[name_1] = this.methodInfo.argValues[i] ? "true" : "false";
                        break;
                    case "number":
                        params[name_1] = this.methodInfo.argValues[i];
                        break;
                    //case "string":
                    //params[name] = this.isTemplate || this.replace ? value : "'" + value + "'";
                    //break;
                    default:
                        params[name_1] = value;
                        break;
                }
            }
        }
        // See if the method has parameters
        var isEmpty = true;
        for (var k in params) {
            isEmpty = false;
            break;
        }
        this.methodParams = isEmpty ? null : params;
        // See if method parameters exist
        if (this.methodParams) {
            // See if a template is defined for the method data
            if (this.isTemplate) {
                // Ensure the object is a string
                if (typeof (this.methodInfo.data) !== "string") {
                    // Stringify the object
                    this.methodInfo.data = JSON.stringify(this.methodInfo.data);
                }
                // Parse the arguments
                for (var key in this.methodParams) {
                    // Replace the argument in the template
                    this.methodInfo.data = this.methodInfo.data.replace("[[" + key + "]]", this.methodParams[key].replace(/"/g, '\\"').replace(/\n/g, ""));
                }
                // Set the method data
                this.methodData = JSON.parse(this.methodInfo.data);
            }
        }
        // See if argument values exist
        if (this.methodInfo.argValues && this.methodInfo.argValues.length > 0) {
            // See if argument names exist
            if (this.methodInfo.argNames == null) {
                // Set the method data to first argument value
                this.methodData = this.methodInfo.argValues[0];
            }
            else if (this.methodInfo.argValues.length > this.methodInfo.argNames.length) {
                // Set the method data to the next available argument value
                this.methodData = this.methodInfo.argValues[this.methodInfo.argNames.length];
            }
        }
        // See if the metadata type exists
        if (this.methodInfo.metadataType) {
            // See if parameters exist
            if (this.methodInfo.argNames) {
                // Append the metadata to the first parameter, if it doesn't exist
                (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] =
                    (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] || { "type": this.methodInfo.metadataType };
            }
            else {
                // Append the metadata to the parameters, if it doesn't exist
                (this.methodData || this.methodParams)["__metadata"] =
                    (this.methodData || this.methodParams)["__metadata"] || { "type": this.methodInfo.metadataType };
            }
        }
    };
    // Method to generate the method and parameters as a url
    MethodInfo.prototype.generateUrl = function () {
        var url = this.methodInfo.name;
        // See if we are deleting the object
        if (this.methodInfo.requestType == _1.RequestType.Delete) {
            // Update the url
            url = "deleteObject";
        }
        // See if we are passing the data in the body
        if (this.passDataInBody) {
            var data = this.methodData || this.methodParams;
            // Stringify the data to be passed in the body
            this.methodData = JSON.stringify(data);
        }
        // See if we are passing the data in the query string
        if (this.passDataInQS) {
            var data = this.methodParams || this.methodData;
            // Append the parameters in the query string
            url += "(@v)?@v=" + (typeof (data) === "string" ? "'" + encodeURIComponent(data) + "'" : JSON.stringify(data));
        }
        // See if we are replacing the arguments
        if (this.replace) {
            // Parse the arguments
            for (var key in this.methodParams) {
                // Replace the argument in the url
                url = url.replace("[[" + key + "]]", encodeURIComponent(this.methodParams[key]));
            }
        }
        else if (this.methodInfo.requestType == _1.RequestType.OData) {
            var oData = new _1.OData(this.methodParams["oData"]);
            // Update the url
            url = "?" + oData.QueryString;
            // Set the get all items Flag
            this.methodInfo.getAllItemsFl = oData.GetAllItems;
        }
        else if (!this.passDataInBody && !this.passDataInQS) {
            var params = "";
            // Ensure data exists
            var data = this.methodParams || this.methodData;
            if (data) {
                // Ensure the data is an object
                data = data && typeof (data) === "object" ? data : { value: data };
                // Parse the parameters
                for (var name_2 in data) {
                    var value = data[name_2];
                    value = typeof (value) === "string" ? "'" + value + "'" : value;
                    switch (this.methodInfo.requestType) {
                        // Append the value only
                        case _1.RequestType.GetWithArgsValueOnly:
                        case _1.RequestType.PostWithArgsValueOnly:
                            params += value + ", ";
                            break;
                        // Append the parameter and value
                        default:
                            params += name_2 + "=" + value + ", ";
                            break;
                    }
                }
            }
            // Set the url
            url += params.length > 0 ? "(" + params.replace(/, $/, "") + ")" : "";
        }
        // Return the url
        return url;
    };
    return MethodInfo;
}());
exports.MethodInfo = MethodInfo;
//# sourceMappingURL=methodInfo.js.map

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * OData
 */
var OData = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    // The class constructor
    function OData(oData) {
        // Default the Variables
        this._custom = oData && oData.Custom ? oData.Custom : null;
        this._expand = oData && oData.Expand ? oData.Expand : [];
        this._filter = oData && oData.Filter ? oData.Filter : null;
        this._getAllItems = oData && oData.GetAllItems ? oData.GetAllItems : false;
        this._orderBy = oData && oData.OrderBy ? oData.OrderBy : [];
        this._select = oData && oData.Select ? oData.Select : [];
        this._skip = oData && oData.Skip ? oData.Skip : null;
        this._top = oData && oData.Top ? oData.Top : null;
    }
    Object.defineProperty(OData.prototype, "Custom", {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        // Custom
        get: function () { return this._custom; },
        set: function (value) { this._custom = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Expand", {
        // Expand
        get: function () { return this._expand; },
        set: function (value) { this._expand = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Filter", {
        // Filter
        get: function () { return this._filter; },
        set: function (value) { this._filter = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "GetAllItems", {
        // Flag to get all items
        get: function () { return this._getAllItems; },
        set: function (value) { this._getAllItems = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "OrderBy", {
        // Order By
        get: function () { return this._orderBy; },
        set: function (value) { this._orderBy = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "QueryString", {
        // Query String
        get: function () {
            var qs = "";
            var values = [];
            // Get the query string values for the properties
            values.push(this.getQSValue("$select", this._select));
            values.push(this.getQSValue("$orderby", this._orderBy));
            this._top ? values.push("$top=" + this._top) : null;
            this._skip ? values.push("$skip=" + this._skip) : null;
            this._filter ? values.push("$filter=" + this._filter) : null;
            values.push(this.getQSValue("$expand", this._expand));
            this._custom ? values.push(this._custom) : null;
            // Parse the values
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                // Ensure a value exists
                if (value && value != "") {
                    // Append the query string value
                    qs += (qs == "" ? "" : "&") + value;
                }
            }
            // Return the query string
            return qs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Select", {
        // Select
        get: function () { return this._select; },
        set: function (value) { this._select = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Skip", {
        // Skip
        get: function () { return this._skip; },
        set: function (value) { this._skip = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Top", {
        // Top
        get: function () { return this._top; },
        set: function (value) { this._top = value; },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to convert the array of strings to a query string value.
    OData.prototype.getQSValue = function (qsKey, keys) {
        // Return the query string
        return keys.length > 0 ? qsKey + "=" + keys.join(",") : "";
    };
    return OData;
}());
exports.OData = OData;
//# sourceMappingURL=oData.js.map

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
/**
 * Target Information
 */
var TargetInfo = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function TargetInfo(targetInfo) {
        // Default the properties
        this.request = targetInfo || {};
        this.requestData = this.request.data;
        this.requestHeaders = this.request.requestHeader;
        this.requestMethod = this.request.method ? this.request.method : "GET";
        // Set the request url
        this.setRequestUrl();
    }
    Object.defineProperty(TargetInfo.prototype, "isBatchRequest", {
        // Flag to determine if this is a batch request
        get: function () { return this.request.endpoint == "$batch"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetInfo.prototype, "requestInfo", {
        // The request information
        get: function () {
            // Return the request information
            return {
                data: this.requestData,
                method: this.requestMethod,
                url: this.requestUrl
            };
        },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to get the domain url
    TargetInfo.prototype.getDomainUrl = function () {
        var url = lib_1.ContextInfo.document.location.href;
        // See if this is an app web
        if (lib_1.ContextInfo.isAppWeb) {
            // Set the url to the host url
            url = TargetInfo.getQueryStringValue("SPHostUrl") + "";
        }
        // Split the url and validate it
        url = url.split('/');
        if (url && url.length >= 2) {
            // Set the url
            url = url[0] + "//" + url[2];
        }
        // Return the url
        return url;
    };
    // Method to get a query string value
    TargetInfo.getQueryStringValue = function (key) {
        // Get the query string
        var queryString = lib_1.ContextInfo.existsFl ? lib_1.ContextInfo.document.location.href.split('?') : [""];
        queryString = queryString.length > 1 ? queryString[1] : queryString[0];
        // Parse the values
        var values = queryString.split('&');
        for (var i = 0; i < values.length; i++) {
            var keyValue = values[i].split('=');
            // Ensure a value exists
            if (keyValue.length == 1) {
                continue;
            }
            // See if this is the key we are looking for
            if (decodeURIComponent(keyValue[0]) == key) {
                return decodeURIComponent(keyValue[1]);
            }
        }
        // Key was not found
        return null;
    };
    // Method to set the request url
    TargetInfo.prototype.setRequestUrl = function () {
        var endpoint = this.request.endpoint ? "/" + this.request.endpoint : "";
        var hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        var qs = (endpoint.indexOf("?") === -1 ? "?" : "&") + "@target='{{Target}}'";
        var template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";
        // See if we are defaulting the url for the app web
        if (lib_1.ContextInfo.existsFl && lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl && lib_1.ContextInfo.isAppWeb && !this.request.overrideDefaultRequestToHostFl && this.request.url == null) {
            // Default the url to the host web
            this.request.url = hostUrl;
        }
        // Ensure the url exists
        if (this.request.url == null) {
            // Default the url to the current site/web url
            this.request.url = this.request.defaultToWebFl == false ? lib_1.ContextInfo.siteAbsoluteUrl : lib_1.ContextInfo.webAbsoluteUrl;
        }
        else if (/\/_api\//.test(this.request.url)) {
            // Get the url
            var url = this.request.url.toLowerCase().split("/_api/");
            // See if this is the app web and we are executing against a different web
            if (lib_1.ContextInfo.isAppWeb && url[0] != lib_1.ContextInfo.webAbsoluteUrl.toLowerCase()) {
                // Set the request url
                this.requestUrl = lib_1.ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" +
                    url[1] + endpoint + qs.replace(/{{Target}}/g, url[0]);
            }
            else {
                // Set the request url
                this.requestUrl = this.request.url + (this.request.endpoint ? "/" + this.request.endpoint : "");
            }
            return;
        }
        // See if this is a relative url
        if (this.request.url.indexOf("http") != 0) {
            // Add the domain
            this.request.url = this.getDomainUrl() + this.request.url;
        }
        // See if this is the app web, and we are executing against a different web
        if (lib_1.ContextInfo.isAppWeb && this.request.url != lib_1.ContextInfo.webAbsoluteUrl) {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, lib_1.ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)" + endpoint)
                .replace(/{{TargetUrl}}/g, qs.replace(/{{Target}}/g, this.request.url));
        }
        else {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, this.request.url)
                .replace(/{{EndPoint}}/g, this.request.endpoint)
                .replace(/{{TargetUrl}}/g, "");
        }
    };
    return TargetInfo;
}());
exports.TargetInfo = TargetInfo;
//# sourceMappingURL=targetInfo.js.map

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
/**
 * XML HTTP Request Class
 */
var XHRRequest = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function XHRRequest(asyncFl, targetInfo, callback) {
        // Default the properties
        this.asyncFl = asyncFl;
        this.onRequestCompleted = callback || targetInfo.request.callback;
        this.targetInfo = targetInfo;
        this.xhr = this.createXHR();
        // Execute the request
        this.execute();
    }
    Object.defineProperty(XHRRequest.prototype, "completedFl", {
        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/
        // Flag indicating the request has completed
        get: function () { return this.xhr ? this.xhr.readyState == 4 : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "response", {
        // The response
        get: function () { return this.xhr ? this.xhr.response : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "request", {
        // The xml http request
        get: function () { return this.xhr ? this.xhr : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "requestData", {
        // The data send in the body of the request
        get: function () { return this.targetInfo.requestData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "requestUrl", {
        // The reqest url
        get: function () { return this.xhr ? this.xhr.responseURL : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "status", {
        // The request status
        get: function () { return this.xhr ? this.xhr.status : null; },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/
    // Method to create the xml http request
    XHRRequest.prototype.createXHR = function () {
        // See if the generic object doesn't exist
        if (typeof (XMLHttpRequest) !== "undefined") {
            // Create an instance of the xml http request object
            return new XMLHttpRequest();
        }
        // Try to create the request
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
        catch (e) { }
        // Try to create the request
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        }
        catch (e) { }
        // Try to create the request
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) { }
        // Throw an error
        throw new Error("This browser does not support xml http requests.");
    };
    // Method to default the request headers
    XHRRequest.prototype.defaultHeaders = function () {
        // See if the custom headers exist
        if (this.targetInfo.requestHeaders) {
            // Parse the custom headers
            for (var header in this.targetInfo.requestHeaders) {
                // Add the header
                this.xhr.setRequestHeader(header, this.targetInfo.requestHeaders[header]);
            }
        }
        else {
            // Set the default headers
            this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
            this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
        }
        // Set the method
        this.xhr.setRequestHeader("X-HTTP-Method", this.targetInfo.requestMethod);
        // See if the request digest has been defined
        if (this.targetInfo.request.requestDigest) {
            // Set the request digest
            this.xhr.setRequestHeader("X-RequestDigest", this.targetInfo.request.requestDigest);
        }
        else {
            // Get the request digest
            var requestDigest = lib_1.ContextInfo.document.querySelector("#__REQUESTDIGEST");
            requestDigest = requestDigest ? requestDigest.value : "";
            // Set the request digest
            this.xhr.setRequestHeader("X-RequestDigest", requestDigest);
        }
        // See if we are deleting or updating the data
        if (this.targetInfo.requestMethod == "DELETE" || this.targetInfo.requestMethod == "MERGE") {
            // Append the header for deleting/updating
            this.xhr.setRequestHeader("IF-MATCH", "*");
        }
    };
    // Method to execute the xml http request
    XHRRequest.prototype.execute = function () {
        var _this = this;
        // Ensure the xml http request exists
        if (this.xhr == null) {
            return null;
        }
        // Open the request
        this.xhr.open(this.targetInfo.requestMethod == "GET" ? "GET" : "POST", this.targetInfo.requestUrl, this.asyncFl);
        // See if we are making an asynchronous request
        if (this.asyncFl) {
            // Set the state change event
            this.xhr.onreadystatechange = function () {
                // See if the request has finished
                if (_this.xhr.readyState == 4) {
                    // Execute the request completed event
                    _this.onRequestCompleted ? _this.onRequestCompleted(_this) : null;
                }
            };
        }
        // See if we the response type is an array buffer
        // Note - Updating the response type is only allow for asynchronous requests. Any error will be thrown otherwise.
        if (this.targetInfo.request.bufferFl && this.asyncFl) {
            // Set the response type
            this.xhr.responseType = "arraybuffer";
        }
        else {
            // Default the headers
            this.defaultHeaders();
            // Ensure the arguments passed is defaulted as a string, unless it's an array buffer
            if (this.targetInfo.requestData && typeof (this.targetInfo.requestData) !== "string") {
                // Stringify the data object, if it's not an array buffer
                this.targetInfo.requestData = this.targetInfo.requestData.byteLength ? this.targetInfo.requestData : JSON.stringify(this.targetInfo.requestData);
            }
        }
        // Execute the request
        this.targetInfo.request.bufferFl || this.targetInfo.requestData == null ? this.xhr.send() : this.xhr.send(this.targetInfo.requestData);
    };
    return XHRRequest;
}());
exports.XHRRequest = XHRRequest;
//# sourceMappingURL=xhrRequest.js.map

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
/**
 * JS Link
 */
var _JSLink = /** @class */ (function () {
    /**
     * Constructor
     */
    function _JSLink(cfg) {
        // See if the configuration exists
        if (cfg) {
            // Set the properties
            this._baseViewID = cfg.BaseViewID;
            this._listTemplateType = cfg.ListTemplateType;
            this._onPostRender = cfg.OnPostRender;
            this._onPreRender = cfg.OnPreRender;
            this._templates = cfg.Templates;
        }
    }
    Object.defineProperty(_JSLink.prototype, "BaseViewID", {
        set: function (value) { this._baseViewID = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "ListTemplateType", {
        set: function (value) { this._listTemplateType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "OnPostRender", {
        set: function (value) { this._onPostRender = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "OnPreRender", {
        set: function (value) { this._onPreRender = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "Templates", {
        set: function (value) { this._templates = value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Methods
     */
    /**
     * Returns the CSR template.
     */
    _JSLink.prototype.getTemplate = function () {
        var template = {};
        // Add the properties
        if (this._baseViewID) {
            template.BaseViewID = this._baseViewID;
        }
        if (this._listTemplateType) {
            template.ListTemplateType = this._listTemplateType;
        }
        if (this._onPostRender) {
            template.OnPostRender = this._onPostRender;
        }
        if (this._onPreRender) {
            template.OnPreRender = this._onPreRender;
        }
        if (this._templates) {
            template.Templates = this._templates;
        }
        // See if there are fields
        if (template.Templates && template.Templates.Fields) {
            var fields = {};
            // Parse the fields
            for (var _i = 0, _a = template.Templates.Fields; _i < _a.length; _i++) {
                var field = _a[_i];
                // Add the field
                fields[field.Name] = {};
                // Add the field properties
                if (field.DisplayForm) {
                    fields[field.Name].DisplayForm = field.DisplayForm;
                }
                if (field.EditForm) {
                    fields[field.Name].EditForm = field.EditForm;
                }
                if (field.NewForm) {
                    fields[field.Name].NewForm = field.NewForm;
                }
                if (field.View) {
                    fields[field.Name].View = field.View;
                }
            }
            // Update the fields
            template.Templates.Fields = fields;
        }
        // Return the template
        return template;
    };
    /**
     * Method to register the CSR override.
     */
    _JSLink.prototype.register = function () {
        // Get the template manager
        var templateManager = lib_1.ContextInfo.window.SPClientTemplates;
        templateManager = templateManager ? templateManager.TemplateManager : null;
        // Ensure it exists
        if (templateManager) {
            // Apply the customization
            templateManager.RegisterTemplateOverrides(this.getTemplate());
        }
    };
    return _JSLink;
}());
exports.JSLink = _JSLink;
//# sourceMappingURL=jslink.js.map

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
var web_1 = __webpack_require__(39);
/**
 * List
 */
var _List = /** @class */ (function (_super) {
    __extends(_List, _super);
    /**
     * Constructor
     */
    function _List(listName, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "list" } });
        return _this;
    }
    // Method to get the list by the entity name.
    _List.getByEntityName = function (entityTypeName, callback, targetInfo) {
        // Query for the list
        var query = (new web_1.Web(targetInfo))
            .Lists()
            .query({
            Filter: "EntityTypeName eq '" + entityTypeName + "'",
            Top: 1
        });
        // See if the callback exists
        if (typeof (callback) != "function") {
            // Execute the request synchronously and return it
            var list = query.executeAndWait();
            return list.results ? list.results[0] : list;
        }
        // Execute the request asynchronously
        query.execute(function (lists) {
            // Execute the callback method
            callback(lists.results ? lists.results[0] : lists);
        });
    };
    return _List;
}(utils_1.Base));
exports.List = _List;
//# sourceMappingURL=list.js.map

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Navigation
 */
var _Navigation = /** @class */ (function (_super) {
    __extends(_Navigation, _super);
    /**
     * Constructor
     */
    function _Navigation(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "navigation";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "navigationservicerest" } });
        return _this;
    }
    return _Navigation;
}(utils_1.Base));
exports.Navigation = _Navigation;
//# sourceMappingURL=navigation.js.map

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// People Manager
/*********************************************************************************************************************************/
var _PeopleManager = /** @class */ (function (_super) {
    __extends(_PeopleManager, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _PeopleManager(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "sp.userprofiles.peoplemanager";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "peoplemanager" } });
        return _this;
    }
    return _PeopleManager;
}(utils_1.Base));
exports.PeopleManager = _PeopleManager;
//# sourceMappingURL=peopleManager.js.map

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// People Picker
/*********************************************************************************************************************************/
var _PeoplePicker = /** @class */ (function (_super) {
    __extends(_PeoplePicker, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _PeoplePicker(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
        _this.targetInfo.overrideDefaultRequestToHostFl = true;
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "peoplepicker" } });
        return _this;
    }
    return _PeoplePicker;
}(utils_1.Base));
exports.PeoplePicker = _PeoplePicker;
//# sourceMappingURL=peoplePicker.js.map

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Profile Loader
/*********************************************************************************************************************************/
var _ProfileLoader = /** @class */ (function (_super) {
    __extends(_ProfileLoader, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _ProfileLoader(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
        _this.targetInfo.method = "POST";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "profileloader" } });
        return _this;
    }
    return _ProfileLoader;
}(utils_1.Base));
exports.ProfileLoader = _ProfileLoader;
//# sourceMappingURL=profileLoader.js.map

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Search
/*********************************************************************************************************************************/
var _Search = /** @class */ (function (_super) {
    __extends(_Search, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Search(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "search";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "search" } });
        return _this;
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to compute the query
    _Search.prototype.getQuery = function (parameters) {
        var query = "";
        // Parse the parameters
        for (var key in parameters) {
            // Append the parameter to the query
            query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
        }
        // Return the query
        return [query];
    };
    /** The search query method */
    _Search.prototype.searchquery = function (settings) {
        // Execute the request
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: utils_1.RequestType.GetReplace
        }, this.getQuery(settings));
    };
    /** The suggest method */
    _Search.prototype.suggest = function (settings) {
        // Execute the request
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "suggest?[[query]]",
            requestType: utils_1.RequestType.GetReplace
        }, this.getQuery(settings));
    };
    return _Search;
}(utils_1.Base));
exports.Search = _Search;
//# sourceMappingURL=search.js.map

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
var _1 = __webpack_require__(1);
/*********************************************************************************************************************************/
// Site
// The SPSite object.
/*********************************************************************************************************************************/
var _Site = /** @class */ (function (_super) {
    __extends(_Site, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Site(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "site";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "site" } });
        return _this;
    }
    // Method to get the root web
    _Site.prototype.getRootWeb = function () { return new _1.Web(null, this.targetInfo); };
    // Method to determine if the current user has access, based on the permissions.
    _Site.prototype.hasAccess = function (permissions) {
        // TO DO
        return true;
    };
    ;
    return _Site;
}(utils_1.Base));
exports.Site = _Site;
//# sourceMappingURL=site.js.map

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// Social Feed
/*********************************************************************************************************************************/
var _SocialFeed = /** @class */ (function (_super) {
    __extends(_SocialFeed, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _SocialFeed(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "social.feed";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "socialfeed" } });
        return _this;
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to post to another user's feed
    _SocialFeed.prototype.postToFeed = function (accountName, creationData) {
        var postInfo = { ID: null, creationData: creationData };
        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    // Method to post to the current user's feed
    _SocialFeed.prototype.postToMyFeed = function (creationData) {
        var postInfo = { ID: null, creationData: creationData };
        // Set the post metadata
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "my/feed/post",
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    return _SocialFeed;
}(utils_1.Base));
exports.SocialFeed = (new _SocialFeed());
//# sourceMappingURL=socialFeed.js.map

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/*********************************************************************************************************************************/
// User Profile
/*********************************************************************************************************************************/
var _UserProfile = /** @class */ (function (_super) {
    __extends(_UserProfile, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _UserProfile(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
        _this.targetInfo.method = "POST";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "userprofile" } });
        return _this;
    }
    return _UserProfile;
}(utils_1.Base));
exports.UserProfile = _UserProfile;
//# sourceMappingURL=userProfile.js.map

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(0);
/**
 * Utility
 */
var _Utility = /** @class */ (function (_super) {
    __extends(_Utility, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Utility(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "SP.Utilities.Utility";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "utility" } });
        return _this;
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to create a wiki page
    _Utility.prototype.createWikiPage = function (listUrl, content) {
        if (content === void 0) { content = ""; }
        var parameters = {
            ServerRelativeUrl: listUrl,
            WikiHtmlContent: content
        };
        // Execute the method
        return this.executeMethod("createWikiPage", {
            argNames: ["parameters"],
            name: "SP.Utilities.Utility.CreateWikiPageInContextWeb",
            replaceEndpointFl: true,
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [parameters]);
    };
    // Method to send an email
    _Utility.prototype.sendEmail = function (properties) {
        // Parse the email properties
        for (var _i = 0, _a = ["To", "CC", "BCC"]; _i < _a.length; _i++) {
            var propName = _a[_i];
            var propValue = properties[propName];
            // Ensure the value exists
            if (propValue) {
                // See if it's a string
                if (typeof (propValue) === "string") {
                    // Add the results property
                    properties[propName] = { 'results': [propValue] };
                }
                else {
                    // Add the results property
                    properties[propName] = { 'results': propValue };
                }
            }
        }
        // Execute the method
        return this.executeMethod("sendEmail", {
            argNames: ["properties"],
            metadataType: "SP.Utilities.EmailProperties",
            name: "SP.Utilities.Utility.sendEmail",
            replaceEndpointFl: true,
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [properties]);
    };
    return _Utility;
}(utils_1.Base));
exports.Utility = _Utility;
//# sourceMappingURL=utility.js.map

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
/**
 * Dependencies
 * This class will ensure the core SP scripts are loaded on the page.
 */
var _Dependencies = /** @class */ (function () {
    /**
     * Constructor
     * @param callback - The method to execute after the scripts have been loaded.
     */
    function _Dependencies(callback) {
        this._callback = null;
        // Default the properties
        this._callback = callback;
        this.MAX_WAIT = 5;
        this.SCRIPTS = [
            "MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"
        ];
        // Load the dependencies
        this.loadDependencies();
    }
    Object.defineProperty(_Dependencies.prototype, "pageContextExistsFl", {
        get: function () { return lib_1.ContextInfo.webAbsoluteUrl != ""; },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to ensure the SP classes are loaded
     */
    _Dependencies.prototype.loadDependencies = function () {
        // See if the page context exists
        if (this.pageContextExistsFl) {
            // Call the callback event
            this._callback ? this._callback() : null;
        }
        else {
            // Load the required scripts
            for (var fileName in this.SCRIPTS) {
                // Create the script element
                var elScript = lib_1.ContextInfo.document.createElement("script");
                // Set the properties
                elScript.setAttribute("src", "/_layouts/15/" + fileName);
                elScript.setAttribute("type", "text/javascript");
                // Add the script element to the head
                lib_1.ContextInfo.document.head.appendChild(elScript);
            }
            // Wait for the page context to exist
            this.waitForPageContext();
        }
    };
    /**
     * Method to wait for the page context to be loaded
     */
    _Dependencies.prototype.waitForPageContext = function () {
        var counter = 0;
        // Check every 10ms
        var intervalId = lib_1.ContextInfo.window.setInterval(function () {
            // See if the page context exists, and ensure we haven't hit the max attempts
            if (this.pageContextExists || ++counter >= this.MAX_WAIT) {
                // Clear the interval
                lib_1.ContextInfo.window.clearInterval(intervalId);
                // Call the callback event
                this._callback ? this._callback() : null;
            }
        }, 10);
    };
    return _Dependencies;
}());
exports.Dependencies = _Dependencies;
//# sourceMappingURL=dependencies.js.map

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var __1 = __webpack_require__(18);
var spCfg_1 = __webpack_require__(40);
/**
 * Field Schema XML
 * Helper class for generating the field schema xml
 */
var _FieldSchemaXML = /** @class */ (function () {
    function _FieldSchemaXML() {
        var _this = this;
        // Method to resolve this request
        this._resolve = null;
        // Generates the schema xml, based on the field information provided.
        this.generate = function (fieldInfo) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Set the resolve method
                _this._resolve = resolve;
                // See if the schema xml has been defined
                if (fieldInfo.schemaXml) {
                    // Resolve the promise
                    resolve(fieldInfo.schemaXml);
                }
                else {
                    // Set the base properties
                    var props = {};
                    props["ID"] = "{" + lib_1.ContextInfo.generateGUID() + "}";
                    props["Name"] = fieldInfo.name;
                    props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
                    props["StaticName"] = fieldInfo.name;
                    props["DisplayName"] = fieldInfo.title;
                    // Set the type
                    switch (fieldInfo.type) {
                        // Boolean
                        case spCfg_1.SPCfgFieldType.Boolean:
                            _this.createBoolean(fieldInfo, props);
                            break;
                        // Calculated
                        case spCfg_1.SPCfgFieldType.Calculated:
                            _this.createCalculated(fieldInfo, props);
                            break;
                        // Choice
                        case spCfg_1.SPCfgFieldType.Choice:
                            _this.createChoice(fieldInfo, props);
                            break;
                        // Date/Time
                        case spCfg_1.SPCfgFieldType.Date:
                            _this.createDate(fieldInfo, props);
                            break;
                        // Lookup
                        case spCfg_1.SPCfgFieldType.Lookup:
                            _this.createLookup(fieldInfo, props);
                            break;
                        // MMS
                        case spCfg_1.SPCfgFieldType.MMS:
                            _this.createMMS(fieldInfo, props);
                            break;
                        // Note
                        case spCfg_1.SPCfgFieldType.Note:
                            _this.createNote(fieldInfo, props);
                            break;
                        // Number
                        case spCfg_1.SPCfgFieldType.Number:
                            _this.createNumber(fieldInfo, props);
                            break;
                        // Text
                        case spCfg_1.SPCfgFieldType.Text:
                            _this.createText(fieldInfo, props);
                            break;
                        // URL
                        case spCfg_1.SPCfgFieldType.Url:
                            _this.createUrl(fieldInfo, props);
                            break;
                        // User
                        case spCfg_1.SPCfgFieldType.User:
                            _this.createUser(fieldInfo, props);
                            break;
                        // Field type not supported
                        default:
                            // Resolve the promise
                            resolve();
                            break;
                    }
                }
            });
        };
        /**
         * Methods
         */
        /** Returns the schema xml for a boolean field. */
        this.createBoolean = function (fieldInfo, props) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Boolean";
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + ">";
            if (fieldInfo.defaultValue) {
                schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
            }
            schemaXml += "</Field>";
            // Resolve the request
            _this._resolve(schemaXml);
        };
        /** Returns the schema xml for a calculated field. */
        this.createCalculated = function (fieldInfo, props) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Calculated";
            // Set the result type
            switch (fieldInfo.resultType) {
                case __1.SPTypes.FieldResultType.Boolean:
                    props["ResultType"] = "Boolean";
                    break;
                case __1.SPTypes.FieldResultType.Currency:
                    props["ResultType"] = "Currency";
                    break;
                case __1.SPTypes.FieldResultType.DateOnly:
                    props["Format"] = "DateOnly";
                    props["ResultType"] = "DateTime";
                    break;
                case __1.SPTypes.FieldResultType.DateTime:
                    props["Format"] = "DateTime";
                    props["ResultType"] = "DateTime";
                    break;
                case __1.SPTypes.FieldResultType.Number:
                    props["ResultType"] = "Number";
                    break;
                default:
                    props["ResultType"] = "Text";
                    break;
            }
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + ">";
            if (fieldInfo.formula) {
                schemaXml += "<Formula>" + fieldInfo.formula + "</Formula>";
            }
            if (fieldInfo.fieldRefs) {
                schemaXml += "<FieldRefs>";
                for (var i = 0; i < fieldInfo.fieldRefs.length; i++) {
                    schemaXml += "<FieldRef Name=\"" + fieldInfo.fieldRefs[i] + "\" />";
                }
                schemaXml += "</FieldRefs>";
            }
            schemaXml += "</Field>";
            // Resolve the request
            _this._resolve(schemaXml);
        };
        /** Returns the schema xml for a choice field. */
        this.createChoice = function (fieldInfo, props) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = fieldInfo.multi ? "MultiChoice" : "Choice";
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + ">";
            if (fieldInfo.defaultValue) {
                schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
            }
            if (fieldInfo.choices) {
                schemaXml += "<CHOICES>";
                for (var i = 0; i < fieldInfo.choices.length; i++) {
                    schemaXml += "<CHOICE>" + fieldInfo.choices[i] + "</CHOICE>";
                }
                schemaXml += "</CHOICES>";
            }
            schemaXml += "</Field>";
            // Resolve the request
            _this._resolve(schemaXml);
        };
        /** Returns the schema xml for a date field. */
        this.createDate = function (fieldInfo, props) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "DateTime";
            // Set the date/time properties
            props["Format"] = fieldInfo.format == __1.SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the request
            _this._resolve(schemaXml);
        };
        /** Returns the schema xml for a lookup field. */
        this.createLookup = function (fieldInfo, props) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = fieldInfo.multi ? "LookupMulti" : "Lookup";
            // Set the lookup properties
            if (fieldInfo.fieldRef) {
                props["FieldRef"] = fieldInfo.fieldRef;
            }
            if (fieldInfo.multi) {
                props["Mult"] = "TRUE";
            }
            if (fieldInfo.showField) {
                props["ShowField"] = fieldInfo.showField;
            }
            // See if the lookup name exists
            if (fieldInfo.listName) {
                // Get the web containing the list
                (new lib_1.Web(fieldInfo.webUrl))
                    .Lists(fieldInfo.listName)
                    .query({
                    Expand: ["ParentWeb"]
                })
                    .execute(function (list) {
                    // Set the list and web ids
                    props["List"] = list.Id;
                    if (fieldInfo.webUrl) {
                        props["WebId"] = list.ParentWeb.Id;
                    }
                    // Resolve the request
                    _this._resolve("<Field " + _this.toString(props) + " />");
                });
            }
            else {
                // Set the list id
                props["List"] = fieldInfo.listId;
                // Resolve the request
                _this._resolve("<Field " + _this.toString(props) + " />");
            }
        };
        /** Returns the schema xml for a managed metadata field. */
        this.createMMS = function (fieldInfo, props) {
            // Create the value field
            var valueProps = {
                ID: "{" + lib_1.ContextInfo.generateGUID() + "}",
                Name: fieldInfo.name + "_0",
                StaticName: fieldInfo.name + "_0",
                DisplayName: fieldInfo.title + " Value",
                Type: "Note",
                Hidden: "TRUE",
                Required: "FALSE",
                ShowInViewForms: "FALSE",
                CanToggleHidden: "TRUE"
            };
            // Generate the value field schema xml
            var schemaXmlValue = "<Field " + _this.toString(valueProps) + " />";
            // Set the mms properties
            props["Type"] = "TaxonomyFieldType";
            props["ShowField"] = "Term" + (fieldInfo.locale ? fieldInfo.locale.toString() : "1033");
            // Generate the mms field schema xml
            var schemaXml = [
                "<Field " + _this.toString(props) + ">",
                "<Customization>",
                "<ArrayOfProperty>",
                "<Property>",
                "<Name>TextField</Name>",
                "<Value xmlns:q6=\"http://www.w3.org/2001/XMLSchema\" p4:type=\"q6:string\" xmlns:p4=\"http://www.w3.org/2001/XMLSchema-instance\">" + valueProps.ID + "</Value>",
                "</Property>",
                "</ArrayOfProperty>",
                "</Customization>",
                "</Field>"
            ].join("");
            // Resolve the request
            _this._resolve([schemaXmlValue, schemaXml]);
        };
        /** Returns the schema xml for a note field. */
        this.createNote = function (fieldInfo, props) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Note";
            // Set the note properties
            if (fieldInfo.appendFl) {
                props["AppendOnly"] = "TRUE";
            }
            if (fieldInfo.noteType == __1.SPTypes.FieldNoteType.EnhancedRichText || fieldInfo.noteType == __1.SPTypes.FieldNoteType.RichText) {
                props["RichText"] = "TRUE";
            }
            if (fieldInfo.noteType == __1.SPTypes.FieldNoteType.EnhancedRichText) {
                props["RichTextMode"] = "FullHtml";
            }
            if (fieldInfo.numberOfLines > 0) {
                props["NumLines"] = fieldInfo.numberOfLines;
            }
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the request
            _this._resolve(schemaXml);
        };
        /** Returns the schema xml for a number field. */
        this.createNumber = function (fieldInfo, props) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Number";
            // Set the number properties
            if (fieldInfo.decimals >= 0) {
                props["Decimals"] = fieldInfo.decimals;
            }
            if (fieldInfo.max != null) {
                props["Max"] = fieldInfo.max;
            }
            if (fieldInfo.min != null) {
                props["Min"] = fieldInfo.min;
            }
            if (fieldInfo.numberType == __1.SPTypes.FieldNumberType.Integer) {
                props["Decimals"] = 0;
            }
            if (fieldInfo.numberType == __1.SPTypes.FieldNumberType.Percentage) {
                props["ShowPercentage"] = "TRUE";
            }
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the request
            _this._resolve(schemaXml);
        };
        /** Returns the schema xml for a text field. */
        this.createText = function (fieldInfo, props) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "Text";
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the request
            _this._resolve(schemaXml);
        };
        /** Returns the schema xml for a url field. */
        this.createUrl = function (fieldInfo, props) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "URL";
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the request
            _this._resolve(schemaXml);
        };
        /** Returns the schema xml for a user field. */
        this.createUser = function (fieldInfo, props) {
            var schemaXml = null;
            // Set the field type
            props["Type"] = "User";
            // Set the user properties
            if (fieldInfo.multi) {
                props["Mult"] = "TRUE";
            }
            if (fieldInfo.selectionMode != null) {
                props["UserSelectionMode"] = fieldInfo.selectionMode;
            }
            if (fieldInfo.selectionScope != null) {
                props["UserSelectionScope"] = fieldInfo.selectionScope;
            }
            // Generate the schema
            schemaXml = "<Field " + _this.toString(props) + " />";
            // Resolve the request
            _this._resolve(schemaXml);
        };
        // Method to convert the properties to a string
        this.toString = function (props) {
            var properties = "";
            // Parse the properties
            for (var key in props) {
                var value = props[key];
                // Add the property
                properties += (properties ? " " : "") + key + "=\"" + props[key] + "\"";
            }
            // Return the string value
            return properties;
        };
    }
    return _FieldSchemaXML;
}());
exports.FieldSchemaXML = new _FieldSchemaXML();
//# sourceMappingURL=fieldSchemaXML.js.map

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SharePoint Configuration Field Types
 */
exports.SPCfgFieldType = {
    Boolean: 0,
    Calculated: 1,
    Choice: 2,
    Date: 3,
    Lookup: 4,
    MMS: 5,
    Note: 6,
    Number: 7,
    Text: 8,
    Url: 9,
    User: 10
};
/**
 * SharePoint Configuration Types
 * The value determines the order to install the object type.
 */
exports.SPCfgType = {
    Fields: 0,
    ContentTypes: 1,
    Lists: 2,
    SiteUserCustomActions: 3,
    WebParts: 5,
    WebUserCustomActions: 4
};
//# sourceMappingURL=spCfgTypes.js.map

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var mapper_1 = __webpack_require__(12);
/**
 * JSLink Helper Methods
 */
exports.JSLink = {
    // Hide event flag
    _hideEventFl: false,
    /**
     * Field to Method Mapper
     * 1 - Display Form
     * 2 - Edit Form
     * 3 - New Form
     * 4 - View
     */
    _fieldToMethodMapper: {
        'Attachments': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldAttachments_Default"],
            2: lib_1.ContextInfo.window["SPFieldAttachments_Default"],
            3: lib_1.ContextInfo.window["SPFieldAttachments_Default"]
        },
        'Boolean': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_DefaultNoEncode"],
            2: lib_1.ContextInfo.window["SPFieldBoolean_Edit"],
            3: lib_1.ContextInfo.window["SPFieldBoolean_Edit"]
        },
        'Currency': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldNumber_Edit"],
            3: lib_1.ContextInfo.window["SPFieldNumber_Edit"]
        },
        'Calculated': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPField_FormDisplay_Empty"],
            3: lib_1.ContextInfo.window["SPField_FormDisplay_Empty"]
        },
        'Choice': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldChoice_Edit"],
            3: lib_1.ContextInfo.window["SPFieldChoice_Edit"]
        },
        'Computed': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            3: lib_1.ContextInfo.window["SPField_FormDisplay_Default"]
        },
        'DateTime': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldDateTime_Display"],
            2: lib_1.ContextInfo.window["SPFieldDateTime_Edit"],
            3: lib_1.ContextInfo.window["SPFieldDateTime_Edit"]
        },
        'File': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldFile_Display"],
            2: lib_1.ContextInfo.window["SPFieldFile_Edit"],
            3: lib_1.ContextInfo.window["SPFieldFile_Edit"]
        },
        'Integer': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldNumber_Edit"],
            3: lib_1.ContextInfo.window["SPFieldNumber_Edit"]
        },
        'Lookup': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldLookup_Display"],
            2: lib_1.ContextInfo.window["SPFieldLookup_Edit"],
            3: lib_1.ContextInfo.window["SPFieldLookup_Edit"]
        },
        'LookupMulti': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldLookup_Display"],
            2: lib_1.ContextInfo.window["SPFieldLookup_Edit"],
            3: lib_1.ContextInfo.window["SPFieldLookup_Edit"]
        },
        'MultiChoice': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldMultiChoice_Edit"],
            3: lib_1.ContextInfo.window["SPFieldMultiChoice_Edit"]
        },
        'Note': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldNote_Display"],
            2: lib_1.ContextInfo.window["SPFieldNote_Edit"],
            3: lib_1.ContextInfo.window["SPFieldNote_Edit"]
        },
        'Number': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldNumber_Edit"],
            3: lib_1.ContextInfo.window["SPFieldNumber_Edit"]
        },
        'Text': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: lib_1.ContextInfo.window["SPFieldText_Edit"],
            3: lib_1.ContextInfo.window["SPFieldText_Edit"]
        },
        'URL': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldUrl_Display"],
            2: lib_1.ContextInfo.window["SPFieldUrl_Edit"],
            3: lib_1.ContextInfo.window["SPFieldUrl_Edit"]
        },
        'User': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldUser_Display"],
            2: lib_1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"],
            3: lib_1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"]
        },
        'UserMulti': {
            4: lib_1.ContextInfo.window["RenderFieldValueDefault"],
            1: lib_1.ContextInfo.window["SPFieldUserMulti_Display"],
            2: lib_1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"],
            3: lib_1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"]
        }
    },
    /**
     * Methods
     */
    /**
     * Disables edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     * @param requireValueFl - Flag to only disable the field, if a value exists.
     */
    disableEdit: function (ctx, field, requireValueFl) {
        var fieldValue = ctx.CurrentFieldValue;
        // Ensure a value exists
        if (fieldValue) {
            // Update the context, based on the field type
            switch (ctx.CurrentFieldSchema.Type) {
                case "MultiChoice":
                    var regExp = new RegExp(mapper_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString, "g");
                    // Update the field value
                    fieldValue = ctx.CurrentFieldValue
                        .replace(regExp, "; ")
                        .replace(/^; /g, "")
                        .replace(/; $/g, "");
                    break;
                case "Note":
                    // Replace the return characters
                    fieldValue = "<div>" + ctx.CurrentFieldValue.replace(/\n/g, "<br />") + "</div>";
                    break;
                case "User":
                case "UserMulti":
                    for (var i = 0; i < ctx.CurrentFieldValue.length; i++) {
                        var userValue = ctx.CurrentFieldValue[i];
                        // Add the user value
                        fieldValue +=
                            // User Lookup ID
                            userValue.EntityData.SPUserID +
                                // Delimiter
                                mapper_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString +
                                // User Lookup Value
                                userValue.DisplayText +
                                // Optional Delimiter
                                ((i == ctx.CurrentFieldValue.length - 1 ? "" : mapper_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString));
                    }
                    break;
            }
            ;
            // Update the current field value
            ctx.CurrentFieldValue = fieldValue;
        }
        // Determine the control mode
        var controlMode = mapper_1.SPTypes.ControlMode.Display;
        if (requireValueFl && (fieldValue == null || fieldValue == "")) {
            // Inherit the control mode
            controlMode = ctx.ControlMode;
        }
        // Return the display value of the field
        return exports.JSLink.renderField(ctx, field, controlMode);
    },
    /**
     * Disable quick edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     */
    disableQuickEdit: function (ctx, field) {
        // Ensure we are in grid edit mode
        if (ctx.inGridMode) {
            // Disable editing for this field
            field.AllowGridEditing = false;
            return "";
        }
        // Return the default field value html
        return exports.JSLink.renderField(ctx, field);
    },
    /**
     * Returns the list view.
     * @param ctx - The client context.
     */
    getListView: function (ctx) {
        // Get the webpart
        var wp = exports.JSLink.getWebPart(ctx);
        if (wp) {
            // Find the list form table
            wp = wp.querySelector(".ms-formtable");
        }
        // Return the list view
        return wp;
    },
    /**
     * Returns the list view items.
     * @param ctx - The client context.
     */
    getListViewItems: function (ctx) {
        // Return the list view items
        return ctx.ListData ? ctx.ListData.Row : [];
    },
    /**
     * Returns the selected list view items
     */
    getListViewSelectedItems: function () {
        // Return the selected items
        return lib_1.ContextInfo.window["SP"].ListOperation.Selection.getSelectedItems();
    },
    /**
     * Returns the webpart containing the JSLink field/form/view.
     * @param ctx - The client context.
     */
    getWebPart: function (ctx) {
        // Return the webpart
        return lib_1.ContextInfo.document.querySelector("#WebPart" + (ctx.FormUniqueId || ctx.wpq));
    },
    /**
     * Hides the specified field.
     * @param ctx - The client context.
     * @param field - The field to hide.
     */
    hideField: function (ctx, field) {
        // Ensure the hide event has been created
        if (!exports.JSLink._hideEventFl) {
            // Set the flag
            exports.JSLink._hideEventFl = true;
            // Create the event
            lib_1.ContextInfo.window.addEventListener("load", function () {
                // Query for the elements to hide
                var fieldElements = lib_1.ContextInfo.document.querySelectorAll(".hide-field");
                for (var _i = 0, fieldElements_1 = fieldElements; _i < fieldElements_1.length; _i++) {
                    var fieldElement = fieldElements_1[_i];
                    // Get the parent row
                    var parentRow = fieldElement.parentNode && fieldElement.parentNode.parentNode ? fieldElement.parentNode.parentNode : null;
                    if (parentRow) {
                        // Ensure the parent row exists
                        if (fieldElement.parentNode.getAttribute("data-field-name") != parentRow.getAttribute("data-field-name")) {
                            // Find the parent row
                            while (parentRow && parentRow.nodeName.toLowerCase() != "tr") {
                                // Update the parent node
                                parentRow = parentRow.parentNode;
                            }
                        }
                        // Hide the parent row
                        if (parentRow) {
                            parentRow.style.display = "none";
                        }
                    }
                }
            });
        }
    },
    /**
     * Removes the field and html from the page.
     * @param ctx - The client context.
     * @param field - The field to remove.
     */
    removeField: function (ctx, field) {
        // Hide the field
        exports.JSLink.hideField(ctx, field);
        // Return an empty element
        return "<div class='hide-field'></div>";
    },
    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    renderField: function (ctx, field, formType) {
        // Determine the field type
        var fieldType = field ? field.Type : (ctx.CurrentFieldSchema ? ctx.CurrentFieldSchema.Type : null);
        // Ensure the form type is set
        formType = formType ? formType : ctx.ControlMode;
        // Ensure a field to method mapper exists
        if (exports.JSLink._fieldToMethodMapper[fieldType] && exports.JSLink._fieldToMethodMapper[fieldType][formType]) {
            // Return the default html for this field
            var defaultHtml = exports.JSLink._fieldToMethodMapper[fieldType][formType](ctx);
            if (defaultHtml) {
                return defaultHtml;
            }
        }
        // Set the field renderer based on the field type
        var field = ctx.CurrentFieldSchema;
        var fieldRenderer = null;
        switch (field.Type) {
            case "AllDayEvent":
                fieldRenderer = new lib_1.ContextInfo.window["AllDayEventFieldRenderer"](field.Name);
                break;
            case "Attachments":
                fieldRenderer = new lib_1.ContextInfo.window["AttachmentFieldRenderer"](field.Name);
                break;
            case "BusinessData":
                fieldRenderer = new lib_1.ContextInfo.window["BusinessDataFieldRenderer"](field.Name);
                break;
            case "Computed":
                fieldRenderer = new lib_1.ContextInfo.window["ComputedFieldRenderer"](field.Name);
                break;
            case "CrossProjectLink":
                fieldRenderer = new lib_1.ContextInfo.window["ProjectLinkFieldRenderer"](field.Name);
                break;
            case "Currency":
                fieldRenderer = new lib_1.ContextInfo.window["NumberFieldRenderer"](field.Name);
                break;
            case "DateTime":
                fieldRenderer = new lib_1.ContextInfo.window["DateTimeFieldRenderer"](field.Name);
                break;
            case "Lookup":
                fieldRenderer = new lib_1.ContextInfo.window["LookupFieldRenderer"](field.Name);
                break;
            case "LookupMulti":
                fieldRenderer = new lib_1.ContextInfo.window["LookupFieldRenderer"](field.Name);
                break;
            case "Note":
                fieldRenderer = new lib_1.ContextInfo.window["NoteFieldRenderer"](field.Name);
                break;
            case "Number":
                fieldRenderer = new lib_1.ContextInfo.window["NumberFieldRenderer"](field.Name);
                break;
            case "Recurrence":
                fieldRenderer = new lib_1.ContextInfo.window["RecurrenceFieldRenderer"](field.Name);
                break;
            case "Text":
                fieldRenderer = new lib_1.ContextInfo.window["TextFieldRenderer"](field.Name);
                break;
            case "URL":
                fieldRenderer = new lib_1.ContextInfo.window["UrlFieldRenderer"](field.Name);
                break;
            case "User":
                fieldRenderer = new lib_1.ContextInfo.window["UserFieldRenderer"](field.Name);
                break;
            case "UserMulti":
                fieldRenderer = new lib_1.ContextInfo.window["UserFieldRenderer"](field.Name);
                break;
            case "WorkflowStatus":
                fieldRenderer = new lib_1.ContextInfo.window["RawFieldRenderer"](field.Name);
                break;
        }
        ;
        // Get the current item
        var currentItem = ctx.CurrentItem || ctx.ListData.Items[0];
        // Return the item's field value html
        return fieldRenderer ? fieldRenderer.RenderField(ctx, field, currentItem, ctx.ListSchema) : currentItem[field.Name];
    }
};
//# sourceMappingURL=jslink.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var parse_1 = __webpack_require__(41);
/**
 * List Form
 */
var _ListForm = /** @class */ (function () {
    /**
     * Constructor
    */
    function _ListForm(props) {
        var _this = this;
        this._cacheData = null;
        this._info = null;
        this._props = null;
        this._resolve = null;
        /**
         * Methods
         */
        // Method to load the list data
        this.load = function () {
            // Clear the information
            _this._info = {
                item: _this._props.item,
                query: _this._props.query || {}
            };
            // Load the data from cache
            _this.loadFromCache();
            // Load the list data
            _this.loadListData().then(function () {
                // See if the fields have been defined
                if (_this._props.fields) {
                    // Process the fields
                    _this.processFields();
                    // Load the item data
                    _this.loadItem();
                }
                else {
                    // Load the content type
                    _this.loadDefaultContentType();
                }
            });
        };
        // Method to load the default content type
        this.loadDefaultContentType = function () {
            // See if the content type info exists
            if (_this._cacheData && _this._cacheData.ct) {
                // Try to parse the data
                try {
                    // Parse the content type
                    var ct = parse_1.parse(_this._cacheData.ct);
                    // Load the default fields
                    _this.loadDefaultFields(ct.results[0]);
                    return;
                }
                catch (_a) {
                    // Clear the cache data
                    sessionStorage.removeItem(_this._props.cacheKey);
                }
            }
            // Load the content types
            _this._info.list.ContentTypes()
                .query({
                Expand: ["FieldLinks"],
                Top: 1
            })
                .execute(function (ct) {
                // See if we are storing data in cache
                if (_this._props.cacheKey) {
                    // Update the cache data
                    _this._cacheData = _this._cacheData || {};
                    _this._cacheData.ct = ct.stringify();
                    // Update the cache
                    sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                }
                // Resolve the promise
                _this.loadDefaultFields(ct.results[0]);
            });
        };
        // Method to load the default fields
        this.loadDefaultFields = function (ct) {
            var fields = ct ? ct.FieldLinks.results : [];
            var formFields = {};
            // Parse the field links
            for (var i = 0; i < fields.length; i++) {
                var fieldLink = fields[i];
                // Get the field
                var field = _this._info.fields[fieldLink.Name];
                if (field) {
                    // Skip the content type field
                    if (field.InternalName == "ContentType") {
                        continue;
                    }
                    // Skip hidden fields
                    if (field.Hidden || fieldLink.Hidden) {
                        continue;
                    }
                    // Save the form field
                    formFields[field.InternalName] = field;
                }
            }
            // Update the fields
            _this._info.fields = formFields;
            // Load the item data
            _this.loadItem();
        };
        // Method to load the field data
        this.loadFieldData = function (fields) {
            // Clear the fields
            _this._info.fields = {};
            // Parse the fields
            for (var i = 0; i < fields.results.length; i++) {
                var field = fields.results[i];
                // Save the field
                _this._info.fields[field.InternalName] = field;
            }
        };
        // Method to load the data from cache
        this.loadFromCache = function () {
            // See if we are loading from cache
            if (_this._props.cacheKey) {
                // Get the data
                var data = sessionStorage.getItem(_this._props.cacheKey);
                if (data) {
                    // Try to parse the data
                    try {
                        // Set the cache data
                        _this._cacheData = JSON.parse(data);
                        // Update the list information
                        _this._info = _this._info || {};
                        _this._info.list = parse_1.parse(_this._cacheData.list);
                        // Load the field data
                        _this.loadFieldData(parse_1.parse(_this._cacheData.fields));
                    }
                    catch (_a) {
                        // Clear the cache data
                        sessionStorage.removeItem(_this._props.cacheKey);
                    }
                }
            }
        };
        // Method to load the item
        this.loadItem = function () {
            // See if the item already exist
            if (_this._info.item) {
                // Resolve the promise
                _this._resolve(_this._info);
            }
            else if (_this._props.itemId > 0) {
                // Default the select query to get all the fields by default
                _this._info.query = _this._props.query || {};
                _this._info.query.Select = _this._info.query.Select || ["*"];
                // See if we are loading the attachments
                if (_this._props.loadAttachments) {
                    // Expand the attachment files collection
                    _this._info.query.Expand = _this._info.query.Expand || [];
                    _this._info.query.Expand.push("AttachmentFiles");
                    // Select the attachment files
                    _this._info.query.Select.push("Attachments");
                    _this._info.query.Select.push("AttachmentFiles");
                }
                // Get the list item
                _this._info.list.Items(_this._props.itemId)
                    .query(_this._info.query)
                    .execute(function (item) {
                    // Save the attachments
                    _this._info.attachments = item.AttachmentFiles.results;
                    // Save the item
                    _this._info.item = item;
                    // Resolve the promise
                    _this._resolve(_this._info);
                });
            }
            else {
                // Resolve the promise
                _this._resolve(_this._info);
            }
        };
        // Method to load the list data
        this.loadListData = function () {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // See if the list & fields already exist
                if (_this._info.list && _this._info.fields) {
                    // Resolve the promise
                    resolve();
                    return;
                }
                // Get the web
                var list = (new lib_1.Web(_this._props.webUrl))
                    .Lists(_this._props.listName)
                    .execute(function (list) {
                    // Save the list
                    _this._info.list = list;
                });
                // Load the fields
                list.Fields()
                    .execute(function (fields) {
                    // See if we are caching the data
                    if (_this._props.cacheKey) {
                        // Update the cache
                        _this._cacheData = _this._cacheData || {};
                        _this._cacheData.fields = fields.stringify();
                        _this._cacheData.list = _this._info.list.stringify();
                        // Cache the data
                        sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                    }
                    // Load the field data
                    _this.loadFieldData(fields);
                    // Resolve the promise
                    resolve();
                });
            });
        };
        // Method to process the fields
        this.processFields = function () {
            var formFields = {};
            // Parse the fields provided
            for (var i = 0; i < _this._props.fields.length; i++) {
                var field = _this._info.fields[_this._props.fields[i]];
                // Ensure the field exists
                if (field) {
                    // Save the field
                    formFields[field.InternalName] = field;
                }
            }
            // Update the fields
            _this._info.fields = formFields;
        };
        // Save the properties
        this._props = props || {};
        this._props.fields = this._props.fields;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _this._resolve = resolve;
            // Load the list data
            _this.load();
        });
    }
    // Method to load the item attachments
    _ListForm.loadAttachments = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the item id exists
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Items(itemId)
                    .AttachmentFiles()
                    .execute(function (attachments) {
                    // Resolve the promise
                    resolve(attachments.results || []);
                });
            }
            else {
                // Resolve the promise
                resolve([]);
            }
        });
    };
    // Method to refresh an item
    _ListForm.refreshItem = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the item
            info.list.Items(info.item.Id).query(info.query).execute(function (item) {
                // Update the item
                info.item = item;
                // Resolve the promise
                resolve(info);
            });
        });
    };
    // Method to remove attachments from an item
    _ListForm.prototype.removeAttachments = function (info, attachments) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var web = new lib_1.Web(info.webUrl);
            // Parse the attachments
            for (var i = 0; i < attachments.length; i++) {
                var attachment = attachments[i];
                // Get the file
                web.getFileByServerRelativeUrl(attachment.ServerRelativeUrl)
                    .delete()
                    .execute(true);
            }
            // Wait for the requests to complete
            web.done(function () {
                // Resolve the request
                resolve();
            });
        });
    };
    // Method to save attachments to an existing item
    _ListForm.saveAttachments = function (info, attachmentInfo) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                // Get the web
                var attachments = (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Items(itemId)
                    .AttachmentFiles();
                // Parse the attachment information
                for (var i = 0; i < attachmentInfo.length; i++) {
                    var attachment = attachmentInfo[i];
                    // Add the attachment
                    attachments.add(attachment.name, attachment.data).execute(true);
                }
                // Wait for the requests to complete
                attachments.done(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Resolve the promise
                    resolve(args);
                });
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    // Method to save a new or existing item
    _ListForm.saveItem = function (info, formValues) {
        var _this = this;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if this is an existing item
            if (info.item && info.item.update) {
                // Update the item
                info.item.update(formValues).execute(function (response) {
                    // Refresh the item
                    _this.refreshItem(info).then(function (info) {
                        // Resolve the promise
                        resolve(info);
                    });
                });
            }
            else {
                // Set the metadata type
                formValues["__metadata"] = { type: info.list.ListItemEntityTypeFullName };
                // Add the item
                info.list.Items().add(formValues)
                    .execute(function (item) {
                    // Update the info
                    info.item = item;
                    // Refresh the item
                    _this.refreshItem(info).then(function (info) {
                        // Resolve the promise
                        resolve(info);
                    });
                });
            }
        });
    };
    return _ListForm;
}());
exports.ListForm = _ListForm;
//# sourceMappingURL=listForm.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
var __1 = __webpack_require__(18);
var taxonomy_1 = __webpack_require__(42);
/**
 * List Form Field
 */
var _ListFormField = /** @class */ (function () {
    /**
     * Constructor
     */
    function _ListFormField(props) {
        var _this = this;
        this._fieldInfo = null;
        this._resolve = null;
        /**
         * Methods
         */
        // Load the field
        this.load = function () {
            // See if the field exists
            if (_this._fieldInfo.field) {
                // Process the field
                _this.processField();
            }
            else {
                // Get the web
                (new lib_1.Web(_this._fieldInfo.webUrl))
                    .Lists(_this._fieldInfo.listName)
                    .Fields()
                    .getByInternalNameOrTitle(_this._fieldInfo.name)
                    .execute(function (field) {
                    // Save the field
                    _this._fieldInfo.field = field;
                    // Process the field
                    _this.processField();
                });
            }
        };
        // Method to proces the field and save its information
        this.processField = function () {
            // Update the field information
            _this._fieldInfo.defaultValue = _this._fieldInfo.field.DefaultValue;
            _this._fieldInfo.readOnly = _this._fieldInfo.field.ReadOnlyField;
            _this._fieldInfo.required = _this._fieldInfo.field.Required ? true : false;
            _this._fieldInfo.title = _this._fieldInfo.field.Title;
            _this._fieldInfo.type = _this._fieldInfo.field.FieldTypeKind;
            _this._fieldInfo.typeAsString = _this._fieldInfo.field.TypeAsString;
            // Update the field info, based on the type
            switch (_this._fieldInfo.type) {
                // Choice
                case __1.SPTypes.FieldType.Choice:
                case __1.SPTypes.FieldType.MultiChoice:
                    var choices = _this._fieldInfo.field.Choices;
                    _this._fieldInfo.choices = (choices ? choices.results : null) || [];
                    _this._fieldInfo.multi = _this._fieldInfo.type == __1.SPTypes.FieldType.MultiChoice;
                    break;
                // Date/Time
                case __1.SPTypes.FieldType.DateTime:
                    var fldDate = _this._fieldInfo.field;
                    _this._fieldInfo.showTime = fldDate.DisplayFormat == __1.SPTypes.DateFormat.DateTime;
                    break;
                // Lookup
                case __1.SPTypes.FieldType.Lookup:
                    var fldLookup = _this._fieldInfo.field;
                    _this._fieldInfo.lookupField = fldLookup.LookupField;
                    _this._fieldInfo.lookupListId = fldLookup.LookupList;
                    _this._fieldInfo.lookupWebId = fldLookup.LookupWebId;
                    _this._fieldInfo.multi = fldLookup.AllowMultipleValues;
                    break;
                // Number
                case __1.SPTypes.FieldType.Number:
                    var fldNumber = _this._fieldInfo.field;
                    _this._fieldInfo.maxValue = fldNumber.MaximumValue;
                    _this._fieldInfo.minValue = fldNumber.MinimumValue;
                    if (fldNumber.ShowAsPercentage != undefined) {
                        _this._fieldInfo.showAsPercentage = fldNumber.ShowAsPercentage;
                    }
                    else {
                        _this._fieldInfo.showAsPercentage = fldNumber.SchemaXml.indexOf('Percentage="TRUE"') > 0;
                    }
                    break;
                // Note
                case __1.SPTypes.FieldType.Note:
                    var fldNote = _this._fieldInfo.field;
                    _this._fieldInfo.multiline = true;
                    _this._fieldInfo.richText = fldNote.RichText;
                    _this._fieldInfo.rows = fldNote.NumberOfLines;
                    break;
                // Text
                case __1.SPTypes.FieldType.Text:
                    _this._fieldInfo.multiline = false;
                    _this._fieldInfo.richText = false;
                    _this._fieldInfo.rows = 1;
                    break;
                // User
                case __1.SPTypes.FieldType.User:
                    var fldUser = _this._fieldInfo.field;
                    _this._fieldInfo.allowGroups = fldUser.SelectionMode == __1.SPTypes.FieldUserSelectionType.PeopleAndGroups;
                    _this._fieldInfo.multi = fldUser.AllowMultipleValues;
                    break;
                // Default
                default:
                    // See if this is an MMS field
                    if (_this._fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                        var fldMMS = _this._fieldInfo.field;
                        _this._fieldInfo.multi = fldMMS.AllowMultipleValues;
                        _this._fieldInfo.termId = fldMMS.IsAnchorValid ? fldMMS.AnchorId : fldMMS.TermSetId;
                        _this._fieldInfo.termSetId = fldMMS.TermSetId;
                        _this._fieldInfo.termStoreId = fldMMS.SspId;
                    }
                    break;
            }
            // Resolve the promise
            _this._resolve(_this._fieldInfo);
        };
        // Save the properties and field information
        this._fieldInfo = props || {};
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Save the resolve method
            _this._resolve = resolve;
            // See if the field exists
            if (_this._fieldInfo.field) {
                // Process the field
                _this.processField();
            }
            else {
                // Load the field
                _this.load();
            }
        });
    }
    // Method to load the lookup data
    _ListFormField.loadLookupData = function (info, queryTop) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the current site collection
            (new lib_1.Site())
                .openWebById(info.lookupWebId)
                .execute(function (web) {
                // Get the list
                web.Lists()
                    .getById(info.lookupListId)
                    .Items()
                    .query({
                    GetAllItems: true,
                    Select: ["ID", info.lookupField],
                    Top: queryTop > 0 && queryTop <= 5000 ? queryTop : 500
                })
                    .execute(function (items) {
                    // Resolve the promise
                    resolve(items.results);
                });
            });
        });
    };
    // Method to load the mms data
    _ListFormField.loadMMSData = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the term set
            taxonomy_1.Taxonomy.getTermSetById(info.termStoreId, info.termSetId).then(function (termSet) {
                // Get the target root term
                var root = taxonomy_1.Taxonomy.findById(termSet, info.termId);
                // See if the root node doesn't exist
                if (root == null) {
                    // Set the root to the term set
                    root = taxonomy_1.Taxonomy.findById(termSet, info.termSetId);
                }
                // Resolve the request
                resolve(taxonomy_1.Taxonomy.toArray(root));
            });
        });
    };
    // Method to load the mms value field
    _ListFormField.loadMMSValueField = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if we are allowing multiple values
            if (info.multi) {
                // Get the web
                (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Fields()
                    .getByInternalNameOrTitle(info.name + "_0")
                    .execute(function (field) {
                    // See if the field exists
                    if (field.existsFl) {
                        // Resolve the promise
                        resolve(field);
                    }
                    else {
                        // Log
                        console.log("[gd-sprest] Unable to find the hidden value field for '" + info.name + "'.");
                    }
                });
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    return _ListFormField;
}());
exports.ListFormField = _ListFormField;
//# sourceMappingURL=listFormField.js.map

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
/**
 * Loader
 */
exports.Loader = {
    // Flag to determine if the SharePoint core libraries have been loaded
    loaded: false,
    // Method to wait for the SharePoint core libraries to be loaded
    waitForSPLibs: function (callback, timeout, loadLibraries) {
        var counter = 0;
        // Default the flag to load the libraries
        loadLibraries = typeof (loadLibraries) === "boolean" ? loadLibraries : false;
        // Default the timeout (5 seconds)
        timeout = typeof (timeout) === "number" ? timeout : 2500;
        // Determine the number of iterations
        var maxLoops = timeout / 25;
        // See if the flag has already been set
        if (_this.loaded) {
            // Execute the callback
            callback();
            return;
        }
        // See if we are loading the libraries
        if (loadLibraries) {
            // Parse the files to load
            ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"].every(function (fileName) {
                // Create the script element
                var el = lib_1.ContextInfo.document.createElement("script");
                // Set the properties
                el.setAttribute("src", "/_layouts/15/" + fileName);
                el.setAttribute("type", "text/javascript");
                // Add the element to the head
                lib_1.ContextInfo.document.head.appendChild(el);
                // Continue the loop
                return true;
            });
        }
        // Loop until the libraries are loaded
        var intervalId = setInterval(function () {
            var maxLoopFl = ++counter > maxLoops;
            // See if the page context exists or if we have hit the max attempts
            if (lib_1.ContextInfo.existsFl || maxLoopFl) {
                // Stop the loop
                clearInterval(intervalId);
                // Execute the callback
                callback();
            }
        }, 25);
    }
};
//# sourceMappingURL=loader.js.map

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(1);
/**
 * Web Part
 */
var _WebPart = /** @class */ (function () {
    /**
     * Constructor
     * @param props - The webpart properties.
     */
    function _WebPart(props) {
        var _this = this;
        this._props = null;
        this._wp = null;
        /**
         * Method to add the help link to a script part editor.
         * @wpId - The webpart id.
         */
        this.addHelpLink = function () {
            // Ensure the help properties exist
            if (_this._props.helpProps) {
                // Get the webpart's "Snippet"
                var link = document.querySelector("div[webpartid='" + _this._wp.wpId + "'] a[title='Edit Snippet']");
                if (link) {
                    // Create the help link
                    var helpLink = document.createElement("a");
                    helpLink.href = _this._props.helpProps.url || "#";
                    helpLink.style.paddingLeft = "10px";
                    helpLink.setAttribute("role", "button");
                    helpLink.title = _this._props.helpProps.title || "Help";
                    helpLink.innerHTML = "<span class='ms-metadata'>" + helpLink.title + "</span>";
                    helpLink.target = "_blank";
                    // Append the link
                    link.parentElement.appendChild(helpLink);
                }
            }
        };
        /**
         * Method to get the webpart
         */
        this.getWebPart = function (wpId) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Get the current context
                var context = SP.ClientContext.get_current();
                // Get the webpart from the current page
                var page = context.get_web().getFileByServerRelativeUrl(lib_1.ContextInfo.serverRequestPath);
                var wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
                var wpDef = wpMgr.get_webParts().getById(wpId);
                var wp = wpDef.get_webPart();
                context.load(wp, "Properties");
                // Execute the request
                context.executeQueryAsync(
                // Success
                function () {
                    // Resolve the promise
                    resolve({
                        Context: context,
                        Properties: wp.get_properties(),
                        WebPart: wp,
                        WebPartDefinition: wpDef,
                        WebPartId: wp.get_id()
                    });
                }, 
                // Error
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Reject the promise
                    reject(args[1] ? args[1].get_message() : "");
                });
            });
        };
        /**
         * Method to get the webpart id for a specified element
         * @param el - The target element.
         */
        this.getWebPartId = function (el) {
            // Loop until we find the webpart id
            while (el) {
                // See if this element contains the webpart id
                var wpId = el.getAttribute("webpartid");
                if (wpId) {
                    // Return the webpart id
                    return wpId;
                }
                // Check the parent
                el = el.parentElement;
            }
            // Unable to detect
            return "";
        };
        /**
         * Method to get the webpart information
         */
        this.getWebPartInfo = function () {
            var targetInfo = {
                cfg: null,
                el: null,
                wpId: null
            };
            // Ensure the element id exists
            if (_this._props.elementId) {
                // Get the webpart elements
                var elements = document.querySelectorAll("#" + _this._props.elementId);
                for (var i = 0; i < elements.length; i++) {
                    var elWebPart = elements[i];
                    // See if we have already configured this element
                    if (elWebPart.getAttribute("data-isConfigured")) {
                        continue;
                    }
                    // Get the webpart id
                    var wpId = _this.getWebPartId(elWebPart);
                    if (wpId) {
                        // See if the configuration element exists
                        var elCfg = _this._props.cfgElementId ? elWebPart.parentElement.querySelector("#" + _this._props.cfgElementId) : null;
                        if (elCfg) {
                            try {
                                // Parse the configuration
                                var cfg = JSON.parse(elCfg.innerText.trim());
                                // See if the webaprt id exists
                                if (cfg.WebPartId) {
                                    // See if it's for this webpart
                                    if (cfg.WebPartId == wpId) {
                                        // Set the target information
                                        targetInfo = {
                                            cfg: cfg,
                                            el: elWebPart,
                                            wpId: wpId
                                        };
                                        break;
                                    }
                                }
                                else {
                                    // Set the target information
                                    targetInfo = {
                                        cfg: {
                                            WebPartId: wpId
                                        },
                                        el: elWebPart,
                                        wpId: wpId
                                    };
                                    break;
                                }
                            }
                            catch (ex) {
                                // Set the target information
                                targetInfo = {
                                    cfg: {
                                        WebPartId: wpId
                                    },
                                    el: elWebPart,
                                    wpId: wpId
                                };
                                // Log
                                console.log("[sp-webpart] Error parsing the configuration for element '" + _this._props.cfgElementId + "'.");
                            }
                            // Break from the loop
                            break;
                        }
                        else {
                            // Set the target information
                            targetInfo = {
                                cfg: {
                                    WebPartId: wpId
                                },
                                el: elWebPart,
                                wpId: wpId
                            };
                            break;
                        }
                    }
                }
                // Ensure elements were found
                if (elements.length == 0) {
                    // Log
                    console.log("[sp-webpart] Error - Unable to find elements with id '" + _this._props.elementId + "'.");
                }
            }
            else {
                // Log
                console.log("[sp-webpart] The target element id is not defined.");
            }
            // Ensure the target element exists
            if (targetInfo.el) {
                // Set the configuration flag
                targetInfo.el.setAttribute("data-isConfigured", "true");
            }
            // Return the target information
            return targetInfo;
        };
        /**
         * Method to detect if a page is being edited
         */
        this.isEditMode = function () {
            var formName = MSOWebPartPageFormName ? MSOWebPartPageFormName : "";
            // Get the form
            var form = document.forms[MSOWebPartPageFormName];
            if (form) {
                // Get the wiki page mode
                var wikiPageMode = form._wikiPageMode ? form._wikiPageMode.value : null;
                // Get the webpart page mode
                var wpPageMode = form.MSOLayout_InDesignMode ? form.MSOLayout_InDesignMode.value : null;
                // Determine if the page is being edited
                return wikiPageMode == "Edit" || wpPageMode == "1";
            }
            // Unable to determine
            return false;
        };
        /**
         * Method to render the webpart
         */
        this.render = function () {
            var element = null;
            // Get the webpart information
            _this._wp = _this.getWebPartInfo();
            if (_this._wp == null || _this._wp.el == null) {
                // Log
                console.log("[sp-webpart] The target webpart element '" + _this._props.elementId + "' was not found.");
                return;
            }
            // See if the page is being edited
            var returnVal = null;
            if (_this.isEditMode()) {
                // Add the help link
                _this.addHelpLink();
                // Call the render event
                if (_this._props.onRenderEdit) {
                    // Execute the render edit event
                    returnVal = _this._props.onRenderEdit(_this._wp);
                }
            }
            else {
                // See if the configuration is defined, but has no value
                if (_this._wp.cfg || (_this._props.cfgElementId || "").length == 0) {
                    // Execute the render edit event
                    returnVal = _this._props.onRenderDisplay(_this._wp);
                }
                else {
                    // Render a message
                    _this._wp.el.innerHTML = '<h3>Please edit the page and configure the webpart.</h3>';
                }
            }
            // See if a promise was returned
            if (returnVal && returnVal.then) {
                // Wait for the request to complete
                returnVal.then(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // Execute the post render event
                    _this._props.onPostRender ? _this._props.onPostRender(_this._wp) : null;
                });
            }
            else {
                // Execute the post render event
                _this._props.onPostRender ? _this._props.onPostRender(_this._wp) : null;
            }
        };
        // Set the properties
        this._props = props || {};
        // Add a load event
        window.addEventListener("load", function () {
            // Render the component
            _this.render();
        });
    }
    return _WebPart;
}());
exports.WebPart = _WebPart;
//# sourceMappingURL=webpart.js.map

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=index.js.map

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = __webpack_require__(17);
exports.Helper = helper_1.Types;
var mapper_1 = __webpack_require__(12);
exports.SP = mapper_1.Types;
var utils_1 = __webpack_require__(0);
exports.Util = utils_1.Types;
//# sourceMappingURL=types.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Helper = __webpack_require__(17);
var Lib = __webpack_require__(1);
var Mapper = __webpack_require__(12);
/**
 * SharePoint REST Library
 */
exports.$REST = {
    __ver: 3.33,
    ContextInfo: Lib.ContextInfo,
    DefaultRequestToHostFl: false,
    Helper: {
        App: Helper.App,
        Dependencies: Helper.Dependencies,
        FieldSchemaXML: Helper.FieldSchemaXML,
        JSLink: Helper.JSLink,
        ListForm: Helper.ListForm,
        ListFormField: Helper.ListFormField,
        Loader: Helper.Loader,
        parse: Helper.parse,
        SPConfig: Helper.SPConfig,
        Taxonomy: Helper.Taxonomy,
        WebPart: Helper.WebPart
    },
    List: function (listName, targetInfo) { return new Lib.List(listName, targetInfo); },
    Navigation: function (url, targetInfo) { return new Lib.Navigation(url, targetInfo); },
    PeopleManager: function (targetInfo) { return new Lib.PeopleManager(targetInfo); },
    PeoplePicker: function (targetInfo) { return new Lib.PeoplePicker(targetInfo); },
    ProfileLoader: function (targetInfo) { return new Lib.ProfileLoader(targetInfo); },
    Search: function (url, targetInfo) { return new Lib.Search(url, targetInfo); },
    Site: function (url, targetInfo) { return new Lib.Site(url, targetInfo); },
    SPTypes: Mapper.SPTypes,
    SocialFeed: Lib.SocialFeed,
    UserProfile: function (targetInfo) { return new Lib.UserProfile(targetInfo); },
    Utility: function (url, targetInfo) { return new Lib.Utility(url, targetInfo); },
    Web: function (url, targetInfo) { return new Lib.Web(url, targetInfo); }
};
// See if the library doesn't exist, or is an older version
var global = Lib.ContextInfo.window.$REST;
if (global == null || global.__ver == null || global.__ver < exports.$REST.__ver) {
    // Set the global variable
    Lib.ContextInfo.window.$REST = exports.$REST;
}
//# sourceMappingURL=rest.js.map

/***/ })
/******/ ]);