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
var _Web = (function (_super) {
    __extends(_Web, _super);
    function _Web(url, targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "web";
        if (url) {
            _this.targetInfo.url = url;
        }
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
var _SPConfig = (function () {
    function _SPConfig(cfg, webUrl) {
        var _this = this;
        this.installByType = function (cfgType, callback, targetName) { return _this.install(callback, cfgType, targetName); };
        this.uninstallByType = function (cfgType, callback, targetName) { return _this.uninstall(callback, cfgType, targetName); };
        this.createContentTypes = function (contentTypes, cfgContentTypes) {
            return new Promise(function (resolve, reject) {
                if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                    resolve();
                    return;
                }
                var _loop_1 = function (i) {
                    var cfgContentType = cfgContentTypes[i];
                    var ct = _this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                    if (ct) {
                        console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' already exists.");
                        cfgContentType.ContentType = ct;
                    }
                    else {
                        console.log("[gd-sprest][Content Type] Creating the '" + cfgContentType.Name + "' content type.");
                        if (cfgContentType.ParentName) {
                            (new lib_1.Web(cfgContentType.ParentWebUrl || _this._webUrl))
                                .ContentTypes()
                                .query({
                                Filter: "Name eq '" + cfgContentType.ParentName + "'"
                            })
                                .execute(function (parent) {
                                if (parent.results[0]) {
                                    contentTypes.addAvailableContentType(parent.results[0].Id.StringValue).execute(function (ct) {
                                        if (ct.existsFl) {
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");
                                            cfgContentType.ContentType = ct;
                                            cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                        }
                                        else {
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                            console.error("[gd-sprest][Field] Error: " + ct.response);
                                        }
                                    }, true);
                                }
                                else {
                                    console.log("[gd-sprest][Content Type] The parent content type '" + cfgContentType.Name + "' was not found.");
                                }
                            });
                        }
                        else {
                            contentTypes.add({
                                Description: cfgContentType.Description,
                                Group: cfgContentType.Group,
                                Name: cfgContentType.Name
                            }).execute(function (ct) {
                                if (ct.existsFl) {
                                    console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");
                                    cfgContentType.ContentType = ct;
                                    cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                }
                                else {
                                    console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                    console.error("[gd-sprest][Field] Error: " + ct.response);
                                }
                            });
                        }
                    }
                };
                for (var i = 0; i < cfgContentTypes.length; i++) {
                    _loop_1(i);
                }
                contentTypes.done(function () {
                    var _loop_2 = function (i) {
                        var cfgContentType = cfgContentTypes[i];
                        var cfgUpdate = {};
                        var updateFl = false;
                        if (cfgContentType.ContentType == null) {
                            return "continue";
                        }
                        if (cfgContentType.ContentType.Description != cfgContentType.Description) {
                            cfgUpdate.Description = cfgContentType.Description;
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Description requires update.");
                            updateFl = true;
                        }
                        if (cfgContentType.ContentType.Group != cfgContentType.Group) {
                            cfgUpdate.Group = cfgContentType.Group;
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Group requires update.");
                            updateFl = true;
                        }
                        if (cfgContentType.ContentType.JSlink != cfgContentType.JSLink) {
                            cfgUpdate.JSLink = cfgContentType.JSLink;
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] JSLink requires update.");
                            updateFl = true;
                        }
                        if (cfgContentType.ContentType.Name != cfgContentType.Name) {
                            cfgUpdate.Name = cfgContentType.Name;
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Name requires update.");
                            updateFl = true;
                        }
                        if (updateFl) {
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Updating the webpart.");
                            cfgContentType.ContentType.update({ JSLink: cfgContentType.JSLink }).execute(function () {
                                console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Update request completed.");
                                cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                            });
                        }
                        else {
                            cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                        }
                    };
                    for (var i = 0; i < cfgContentTypes.length; i++) {
                        _loop_2(i);
                    }
                    contentTypes.done(function () {
                        resolve();
                    });
                });
            });
        };
        this.createFields = function (fields, cfgFields) {
            return new Promise(function (resolve, reject) {
                if (cfgFields == null || cfgFields.length == 0) {
                    resolve();
                    return;
                }
                var _loop_3 = function (i) {
                    var cfgField = cfgFields[i];
                    var field = _this.isInCollection("InternalName", cfgField.name, fields.results);
                    if (field) {
                        console.log("[gd-sprest][Field] The field '" + cfgField.name + "' already exists.");
                        cfgField.onUpdated ? cfgField.onUpdated(field) : null;
                    }
                    else {
                        console.log("[gd-sprest][Field] Creating the '" + cfgField.name + "' field.");
                        var onFieldCreated_1 = function (field) {
                            if (field.existsFl) {
                                console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was created successfully.");
                                cfgField.onCreated ? cfgField.onCreated(field) : null;
                            }
                            else {
                                console.log("[gd-sprest][Field] The field '" + cfgField.name + "' failed to be created.");
                                console.error("[gd-sprest][Field] Error: " + field.response);
                            }
                        };
                        _1.FieldSchemaXML.generate(cfgField).then(function (response) {
                            var schemas = typeof (response) === "string" ? [response] : response;
                            for (var i_1 = 0; i_1 < schemas.length; i_1++) {
                                fields.createFieldAsXml(schemas[i_1]).execute(onFieldCreated_1, true);
                            }
                        });
                    }
                };
                for (var i = 0; i < cfgFields.length; i++) {
                    _loop_3(i);
                }
                fields.done(function () {
                    resolve();
                });
            });
        };
        this.createLists = function (lists, cfgLists) {
            return new Promise(function (resolve, reject) {
                if (_this._cfgType) {
                    if (_this._cfgType != _1.SPCfgType.Lists) {
                        resolve();
                        return;
                    }
                }
                if (cfgLists == null || cfgLists.length == 0) {
                    resolve();
                    return;
                }
                var _loop_4 = function (i) {
                    var cfgList = cfgLists[i];
                    if (_this._cfgType && _this._targetName) {
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    var list = _this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                    if (list) {
                        console.log("[gd-sprest][List] The list '" + cfgList.ListInformation.Title + "' already exists.");
                    }
                    else {
                        console.log("[gd-sprest][List] Creating the '" + cfgList.ListInformation.Title + "' list.");
                        var listInfo_1 = cfgList.ListInformation;
                        var listName_1 = listInfo_1.Title;
                        listInfo_1.Title = listName_1.replace(/ /g, "");
                        lists.add(listInfo_1)
                            .execute(function (list) {
                            listInfo_1.Title = listName_1;
                            if (list.existsFl) {
                                if (list.existsFl && list.Title != listName_1) {
                                    list.update({ Title: listName_1 }).execute(function () {
                                        console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                    });
                                }
                                else {
                                    console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                }
                                cfgList.onCreated ? cfgList.onCreated(list) : null;
                            }
                            else {
                                console.log("[gd-sprest][List] The list '" + listInfo_1.Title + "' failed to be created.");
                                console.log("[gd-sprest][List] Error: '" + list.response);
                            }
                        });
                    }
                };
                for (var i = 0; i < cfgLists.length; i++) {
                    _loop_4(i);
                }
                lists.done(function () {
                    _this.updateLists(cfgLists).then(function () {
                        resolve();
                    });
                });
            });
        };
        this.createUserCustomActions = function (customActions, cfgCustomActions) {
            return new Promise(function (resolve, reject) {
                if (_this._cfgType) {
                    if (_this._cfgType != _1.SPCfgType.SiteUserCustomActions || _this._cfgType != _1.SPCfgType.WebUserCustomActions) {
                        resolve();
                        return;
                    }
                }
                if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                    resolve();
                    return;
                }
                for (var i = 0; i < cfgCustomActions.length; i++) {
                    var cfgCustomAction = cfgCustomActions[i];
                    if (_this._cfgType && _this._targetName) {
                        if (cfgCustomAction.Name.toLowerCase() != _this._targetName ||
                            cfgCustomAction.Title.toLowerCase() != _this._targetName) {
                            continue;
                        }
                    }
                    if (_this.isInCollection("Name", cfgCustomAction.Name, customActions.results)) {
                        console.log("[gd-sprest][Custom Action] The custom action '" + cfgCustomAction.Name + "' already exists.");
                    }
                    else {
                        customActions.add(cfgCustomAction).execute(function (ca) {
                            if (ca.existsFl) {
                                console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was created successfully.");
                            }
                            else {
                                console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' failed to be created.");
                                console.log("[gd-sprest][Custom Action] Error: " + ca.response);
                            }
                        }, true);
                    }
                }
                customActions.done(function () {
                    resolve();
                });
            });
        };
        this.createViews = function (views, cfgViews) {
            return new Promise(function (resolve, reject) {
                if (cfgViews == null || cfgViews.length == 0) {
                    resolve();
                    return;
                }
                var _loop_5 = function (i) {
                    var cfgView = cfgViews[i];
                    var view = _this.isInCollection("Title", cfgView.ViewName, views.results);
                    if (view) {
                        console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' already exists.");
                    }
                    else {
                        views.add({
                            Title: cfgView.ViewName,
                            ViewQuery: cfgView.ViewQuery
                        }).execute(function (view) {
                            if (view.existsFl) {
                                console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' was created successfully.");
                                cfgView.onCreated ? cfgView.onCreated(view) : null;
                            }
                            else {
                                console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' failed to be created.");
                                console.log("[gd-sprest][View] Error: " + view.response);
                            }
                        }, true);
                    }
                };
                for (var i = 0; i < cfgViews.length; i++) {
                    _loop_5(i);
                }
                views.done(function () {
                    _this.updateViews(views, cfgViews).then(function () {
                        resolve();
                    });
                });
            });
        };
        this.createWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            if (_this._cfgType) {
                if (_this._cfgType != _1.SPCfgType.WebParts) {
                    return;
                }
            }
            if (cfgWebParts == null || cfgWebParts.length == 0) {
                return;
            }
            console.log("[gd-sprest][WebPart] Creating the web parts.");
            (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                .Lists("Web Part Gallery")
                .RootFolder()
                .query({
                Expand: ["Files"]
            })
                .execute(function (folder) {
                var _loop_6 = function (i) {
                    var cfgWebPart = cfgWebParts[i];
                    if (_this._cfgType && _this._targetName) {
                        if (cfgWebPart.FileName.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    var file = _this.isInCollection("Name", cfgWebPart.FileName, folder.Files.results);
                    if (file.existsFl) {
                        console.log("[gd-sprest][WebPart] The webpart '" + cfgWebPart.FileName + "' already exists.");
                        cfgWebPart.onUpdated ? cfgWebPart.onUpdated(file) : null;
                    }
                    else {
                        var xml = cfgWebPart.XML.trim();
                        var buffer = new ArrayBuffer(xml.length * 2);
                        var bufferView = new Uint16Array(buffer);
                        for (var j = 0; j < xml.length; j++) {
                            bufferView[j] = xml.charCodeAt(j);
                        }
                        folder.Files.add(true, cfgWebPart.FileName, buffer).execute(function (file) {
                            if (cfgWebPart.Group) {
                                (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                                    .Lists("Web Part Gallery")
                                    .Items()
                                    .query({
                                    Filter: "FileLeafRef eq '" + cfgWebPart.FileName + "'"
                                })
                                    .execute(function (items) {
                                    items.results[0].update({
                                        Group: cfgWebPart.Group
                                    }).execute();
                                });
                            }
                            console.log("[gd-sprest][WebPart] The '" + file.Name + "' webpart file was uploaded successfully.");
                            cfgWebPart.onCreated ? cfgWebPart.onCreated(file) : null;
                        });
                    }
                };
                for (var i = 0; i < cfgWebParts.length; i++) {
                    _loop_6(i);
                }
            });
        };
        this.installSite = function () {
            return new Promise(function (resolve, reject) {
                if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site == null) {
                    resolve();
                    return;
                }
                console.log("[gd-sprest] Loading the site information...");
                (new lib_1.Site(_this._webUrl))
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    .execute(function (site) {
                    _this.createUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).then(function () {
                        resolve(site);
                    });
                });
            });
        };
        this.installWeb = function () {
            return new Promise(function (resolve, reject) {
                console.log("[gd-sprest] Loading the web information...");
                (new lib_1.Web(_this._webUrl))
                    .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                    .execute(function (web) {
                    _this.createFields(web.Fields, _this._configuration.Fields).then(function () {
                        _this.createContentTypes(web.ContentTypes, _this._configuration.ContentTypes).then(function () {
                            _this.createLists(web.Lists, _this._configuration.ListCfg).then(function () {
                                _this.createUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).then(function () {
                                    resolve();
                                });
                            });
                        });
                    });
                });
            });
        };
        this.isInCollection = function (key, value, collection) {
            var valueLower = value.toLowerCase();
            for (var i = 0; i < collection.length; i++) {
                var keyValue = collection[i][key];
                keyValue = keyValue ? keyValue.toLowerCase() : "";
                if (valueLower == keyValue) {
                    return collection[i];
                }
            }
            return false;
        };
        this.removeContentTypes = function (contentTypes, cfgContentTypes) {
            return new Promise(function (resolve, reject) {
                if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                    resolve();
                    return;
                }
                var _loop_7 = function (i) {
                    var cfgContentType = cfgContentTypes[i];
                    var ct = _this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                    if (ct) {
                        ct.delete().execute(function () {
                            console.log("[gd-sprest][Field] The content type '" + ct.Name + "' was removed.");
                        }, true);
                    }
                };
                for (var i = 0; i < cfgContentTypes.length; i++) {
                    _loop_7(i);
                }
                contentTypes.done(function () {
                    resolve();
                });
            });
        };
        this.removeFields = function (fields, cfgFields) {
            return new Promise(function (resolve, reject) {
                if (cfgFields == null || cfgFields.length == 0) {
                    resolve();
                    return;
                }
                var _loop_8 = function (i) {
                    var cfgField = cfgFields[i];
                    var field = _this.isInCollection("InternalName", cfgField.name, fields.results);
                    if (field) {
                        field.delete().execute(function () {
                            console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was removed.");
                        }, true);
                    }
                };
                for (var i = 0; i < cfgFields.length; i++) {
                    _loop_8(i);
                }
                fields.done(function () {
                    resolve();
                });
            });
        };
        this.removeLists = function (lists, cfgLists) {
            return new Promise(function (resolve, reject) {
                if (_this._cfgType) {
                    if (_this._cfgType != _1.SPCfgType.Lists) {
                        resolve();
                        return;
                    }
                }
                if (cfgLists == null || cfgLists.length == 0) {
                    resolve();
                    return;
                }
                var _loop_9 = function (i) {
                    var cfgList = cfgLists[i];
                    if (_this._cfgType && _this._targetName) {
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    var list = _this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                    if (list) {
                        list.delete().execute(function () {
                            console.log("[gd-sprest][List] The list '" + list.Title + "' was removed.");
                        }, true);
                    }
                };
                for (var i = 0; i < cfgLists.length; i++) {
                    _loop_9(i);
                }
                lists.done(function () {
                    resolve();
                });
            });
        };
        this.removeUserCustomActions = function (customActions, cfgCustomActions) {
            return new Promise(function (resolve, reject) {
                if (_this._cfgType) {
                    if (_this._cfgType != _1.SPCfgType.SiteUserCustomActions || _this._cfgType != _1.SPCfgType.WebUserCustomActions) {
                        resolve();
                        return;
                    }
                }
                if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                    resolve();
                    return;
                }
                var _loop_10 = function (i) {
                    var cfgCustomAction = cfgCustomActions[i];
                    if (_this._cfgType && _this._targetName) {
                        if (cfgCustomAction.Name.toLowerCase() != _this._targetName ||
                            cfgCustomAction.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    var ca = _this.isInCollection("Name", cfgCustomAction.Name, customActions.results);
                    if (ca) {
                        ca.delete().execute(function () {
                            console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was removed.");
                        }, true);
                    }
                };
                for (var i = 0; i < cfgCustomActions.length; i++) {
                    _loop_10(i);
                }
                customActions.done(function () {
                    resolve();
                });
            });
        };
        this.removeWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            return new Promise(function (resolve, reject) {
                if (_this._cfgType) {
                    if (_this._cfgType != _1.SPCfgType.WebParts) {
                        resolve();
                        return;
                    }
                }
                if (cfgWebParts == null || cfgWebParts.length == 0) {
                    resolve();
                    return;
                }
                console.log("[gd-sprest][WebPart] Creating the web parts.");
                (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                    .Lists("Web Part Gallery")
                    .RootFolder()
                    .Files()
                    .execute(function (files) {
                    var _loop_11 = function (i) {
                        var cfgWebPart = cfgWebParts[i];
                        if (_this._cfgType && _this._targetName) {
                            if (cfgWebPart.FileName.toLowerCase() != _this._targetName) {
                                return "continue";
                            }
                        }
                        var file = _this.isInCollection("Name", cfgWebPart.FileName, files.results);
                        if (file) {
                            file.delete().execute(function () {
                                console.log("[gd-sprest][WebPart] The webpart '" + file.Name + "' file was removed.");
                            }, true);
                        }
                    };
                    for (var i = 0; i < cfgWebParts.length; i++) {
                        _loop_11(i);
                    }
                    resolve();
                });
            });
        };
        this.updateLists = function (cfgLists) {
            return new Promise(function (resolve, reject) {
                var request = function (idx, resolve) {
                    var cfgList = cfgLists[idx];
                    if (_this._targetName) {
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            request(idx + 1, resolve);
                            return;
                        }
                    }
                    if (cfgList) {
                        (new lib_1.Web(_this._webUrl))
                            .Lists(cfgList.ListInformation.Title)
                            .query({
                            Expand: ["ContentTypes", "Fields", "UserCustomActions", "Views"]
                        })
                            .execute(function (list) {
                            if (cfgList.TitleFieldDisplayName) {
                                for (var i = 0; i < list.Fields.results.length; i++) {
                                    var field = list.Fields.results[i];
                                    if (field.InternalName == "Title") {
                                        if (field.Title != cfgList.TitleFieldDisplayName) {
                                            field.update({ Title: cfgList.TitleFieldDisplayName }).execute(function () {
                                                console.log("[gd-sprest][List] The 'Title' field's display name was updated to '" + cfgList.TitleFieldDisplayName + "'.");
                                            });
                                        }
                                    }
                                }
                            }
                            _this.createFields(list.Fields, cfgList.CustomFields).then(function () {
                                _this.createContentTypes(list.ContentTypes, cfgList.ContentTypes).then(function () {
                                    _this.createViews(list.Views, cfgList.ViewInformation).then(function () {
                                        cfgList.onUpdated ? cfgList.onUpdated(list) : null;
                                        request(idx + 1, resolve);
                                    });
                                });
                            });
                            _this.createUserCustomActions(list.UserCustomActions, cfgList.UserCustomActions);
                        });
                    }
                    else {
                        resolve();
                    }
                };
                request(0, resolve);
            });
        };
        this.updateViews = function (views, cfgViews) {
            var counter = 0;
            return new Promise(function (resolve, reject) {
                var _loop_12 = function (i) {
                    var cfgView = cfgViews[i];
                    var view = views.getByTitle(cfgView.ViewName);
                    if (cfgView.ViewFields && cfgView.ViewFields.length > 0) {
                        console.log("[gd-sprest][View] Updating the view fields for the '" + cfgView.ViewName + "' view.");
                        view.ViewFields().removeAllViewFields().execute(true);
                        for (var i_2 = 0; i_2 < cfgView.ViewFields.length; i_2++) {
                            view.ViewFields().addViewField(cfgView.ViewFields[i_2]).execute(true);
                        }
                    }
                    if (cfgView.JSLink || cfgView.ViewQuery) {
                        var props = {};
                        console.log("[gd-sprest][View] Updating the view properties for the '" + cfgView.ViewName + "' view.");
                        cfgView.JSLink ? props["JSLink"] = cfgView.JSLink : null;
                        cfgView.ViewQuery ? props["ViewQuery"] = cfgView.ViewQuery : null;
                        view.update(props).execute(true);
                    }
                    view.done(function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        cfgView.onUpdated ? cfgView.onUpdated(view) : null;
                        if (++counter >= cfgViews.length) {
                            resolve();
                        }
                    });
                };
                for (var i = 0; i < cfgViews.length; i++) {
                    _loop_12(i);
                }
            });
        };
        this.uninstallSite = function () {
            return new Promise(function (resolve, reject) {
                console.log("[gd-sprest][uninstall] Loading the site information...");
                if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site == null) {
                    resolve();
                    return;
                }
                (new lib_1.Site(_this._webUrl))
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    .execute(function (site) {
                    _this.removeUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).then(function () {
                        resolve(site);
                    });
                });
            });
        };
        this.uninstallWeb = function () {
            return new Promise(function (resolve, reject) {
                console.log("[gd-sprest][uninstall] Loading the web information...");
                (new lib_1.Web(_this._webUrl))
                    .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                    .execute(function (web) {
                    _this.removeFields(web.Fields, _this._configuration.Fields).then(function () {
                        _this.removeContentTypes(web.ContentTypes, _this._configuration.ContentTypes).then(function () {
                            _this.removeLists(web.Lists, _this._configuration.ListCfg).then(function () {
                                _this.removeUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).then(function () {
                                    resolve();
                                });
                            });
                        });
                    });
                });
            });
        };
        this._configuration = cfg;
        this._webUrl = webUrl;
    }
    _SPConfig.prototype.install = function (callback, cfgType, targetName) {
        var _this = this;
        this._cfgType = cfgType;
        this._targetName = targetName ? targetName.toLowerCase() : null;
        this.installWeb().then(function () {
            _this.installSite().then(function () {
                _this.createWebParts();
                console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                if (callback && typeof (callback) === "function") {
                    callback();
                }
            });
        });
    };
    _SPConfig.prototype.uninstall = function (callback, cfgType, targetName) {
        var _this = this;
        this._cfgType = cfgType;
        this._targetName = targetName;
        this.uninstallWeb().then(function () {
            _this.uninstallSite().then(function () {
                _this.removeWebParts().then(function () {
                    console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                    if (callback && typeof (callback) === "function") {
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
exports.parse = function (jsonString) {
    try {
        var obj = JSON.parse(jsonString);
        var base = new utils_1.Base(obj.props);
        base.response = obj.response;
        base.status = obj.status;
        base.updateDataObject(false);
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
var _Taxonomy = (function () {
    function _Taxonomy() {
        var _this = this;
        this.findById = function (term, termId) {
            if (term.info && term.info.id == termId) {
                return term;
            }
            for (var prop in term) {
                if (prop == "info" || prop == "parent") {
                    continue;
                }
                var childTerm = _this.findById(term[prop], termId);
                if (childTerm) {
                    return childTerm;
                }
            }
        };
        this.findByName = function (term, termName) {
            if (term.info && term.info.name == termName) {
                return term;
            }
            for (var prop in term) {
                if (prop == "info" || prop == "parent") {
                    continue;
                }
                var childTerm = _this.findByName(term[prop], termName);
                if (childTerm) {
                    return childTerm;
                }
            }
        };
        this.getTermsById = function (termStoreId, termSetId) {
            return new Promise(function (resolve, reject) {
                _this.loadScripts().then(function () {
                    var context = SP.ClientContext.get_current();
                    var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                    var termStore = session.get_termStores().getById(termStoreId);
                    var termSet = termStore.getTermSet(termSetId);
                    var terms = termSet.getAllTerms();
                    context.load(termSet);
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    context.executeQueryAsync(function () {
                        resolve(_this.getTerms(termSet, terms));
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        console.error("[gd-sprest] Error getting the term group.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        reject(args);
                    });
                });
            });
        };
        this.getTermSetById = function (termStoreId, termSetId) {
            return new Promise(function (resolve, reject) {
                _this.getTermsById(termStoreId, termSetId).then(function (terms) {
                    resolve(_this.toObject(terms));
                });
            });
        };
        this.getTermsFromDefaultSC = function (termSetName) {
            return new Promise(function (resolve, reject) {
                _this.getTermGroup().then(function (_a) {
                    var context = _a.context, termGroup = _a.termGroup;
                    var termSet = termGroup.get_termSets().getByName(termSetName);
                    var terms = termSet.getAllTerms();
                    context.load(termSet);
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    context.executeQueryAsync(function () {
                        resolve(_this.getTerms(termSet, terms));
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        console.error("[gd-sprest] Error getting the terms from the default site collection.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        reject(args);
                    });
                });
            });
        };
        this.getTermSetFromDefaultSC = function (termSetName) {
            return new Promise(function (resolve, reject) {
                _this.getTermsFromDefaultSC(termSetName).then(function (terms) {
                    resolve(_this.toObject(terms));
                });
            });
        };
        this.getTermsByGroupName = function (termSetName, groupName) {
            return new Promise(function (resolve, reject) {
                _this.getTermGroup(groupName).then(function (_a) {
                    var context = _a.context, termGroup = _a.termGroup;
                    var termSet = termGroup.get_termSets().getByName(termSetName);
                    var terms = termSet.getAllTerms();
                    context.load(termSet);
                    context.load(terms, "Include(CustomProperties, Description, Id, Name, PathOfTerm)");
                    context.executeQueryAsync(function () {
                        resolve(_this.getTerms(termSet, terms));
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        console.error("[gd-sprest] Error getting the terms.");
                        console.error("[gd-sprest] Error: " + args[1].get_message());
                        reject(args);
                    });
                });
            });
        };
        this.getTermSetByGroupName = function (termSetName, groupName) {
            return new Promise(function (resolve, reject) {
                _this.getTermsByGroupName(termSetName, groupName).then(function (terms) {
                    resolve(_this.toObject(terms));
                });
            });
        };
        this.loadScripts = function () {
            return new Promise(function (resolve, reject) {
                SP.SOD.executeFunc("sp.js", "SP.Utilities.Utility", function () {
                    SP.SOD.registerSod("sp.taxonomy.js", SP.Utilities.Utility.getLayoutsPageUrl("sp.taxonomy.js"));
                    SP.SOD.executeFunc("sp.taxonomy.js", "SP.Taxonomy.TaxonomySession", function () {
                        resolve();
                    });
                }, "sp.js");
            });
        };
        this.toArray = function (term) {
            var terms = [];
            var getChildTerms = function (term, terms) {
                for (var prop in term) {
                    if (prop == "info" || prop == "parent") {
                        continue;
                    }
                    var childTerm = term[prop];
                    terms.push(childTerm.info);
                    getChildTerms(childTerm, terms);
                }
            };
            if (term) {
                if (term.info) {
                    terms.push(term.info);
                }
                getChildTerms(term, terms);
            }
            return terms;
        };
        this.toFieldValue = function (term) {
            var termInfo = term ? term["info"] || term : null;
            if (termInfo) {
                return {
                    __metadata: { "type": "SP.Taxonomy.TaxonomyFieldValue" },
                    Label: termInfo.name,
                    TermGuid: termInfo.id,
                    WssId: -1
                };
            }
            return null;
        };
        this.toFieldMultiValue = function (terms) {
            var results = [];
            if (terms && terms.length > 0) {
                for (var i = 0; i < terms.length; i++) {
                    var termInfo = terms[i]["info"] || terms[i];
                    results.push(";#" + termInfo.name + "|" + termInfo.id);
                }
            }
            return {
                __metadata: { type: "Collection(SP.Taxonomy.TaxonomyFieldValue)" },
                results: results
            };
        };
        this.toObject = function (terms) {
            var root = {};
            var addTerm = function (node, info, path) {
                var term = node;
                var termName = "";
                while (path.length > 0) {
                    termName = path[0];
                    if (term[termName] == null) {
                        term[termName] = {};
                    }
                    var parent_1 = term;
                    term = term[termName];
                    term.parent = parent_1;
                    path.splice(0, 1);
                }
                term.info = info;
            };
            if (terms) {
                for (var i = 0; i < terms.length; i++) {
                    var term = terms[i];
                    if (term.pathAsString == "") {
                        root.info = term;
                    }
                    else {
                        addTerm(root, term, term.pathAsString.split(";"));
                    }
                }
            }
            return root;
        };
        this.getTerms = function (termSet, termSetTerms) {
            var terms = [];
            terms.push({
                description: termSet.get_description(),
                id: termSet.get_id().toString(),
                name: termSet.get_name(),
                path: [],
                pathAsString: "",
                props: termSet.get_customProperties()
            });
            var enumerator = termSetTerms.getEnumerator();
            while (enumerator.moveNext()) {
                var term = enumerator.get_current();
                terms.push({
                    description: term.get_description(),
                    id: term.get_id().toString(),
                    name: term.get_name(),
                    path: term.get_pathOfTerm().split(";"),
                    pathAsString: term.get_pathOfTerm(),
                    props: term.get_customProperties()
                });
            }
            terms.sort(function (a, b) {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            });
            return terms;
        };
        this.getTermGroup = function (groupName) {
            return new Promise(function (resolve, reject) {
                _this.loadScripts().then(function () {
                    var context = SP.ClientContext.get_current();
                    var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                    if (groupName) {
                        var termStores_1 = session.get_termStores();
                        context.load(termStores_1, "Include(Groups)");
                        context.executeQueryAsync(function () {
                            var enumerator = termStores_1.getEnumerator();
                            var termStore = enumerator.moveNext() ? enumerator.get_current() : null;
                            if (termStore) {
                                var termGroup = termStore.get_groups().getByName(groupName);
                                context.load(termGroup);
                                resolve({ context: context, termGroup: termGroup });
                            }
                            else {
                                console.error("[gd-sprest] Unable to get the taxonomy store.");
                                reject();
                            }
                        }, function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            console.error("[gd-sprest] Error getting the term group.");
                            console.error("[gd-sprest] Error: " + args[1].get_message());
                            reject(args);
                        });
                    }
                    else {
                        var termStore = session.getDefaultSiteCollectionTermStore();
                        var termGroup = termStore.getSiteCollectionGroup(context.get_site());
                        context.load(termGroup);
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
var _App = (function () {
    function _App() {
    }
    _App.copyFileToHostWeb = function (fileUrl, dstFolder, overwriteFl, rootWebFl) {
        var srcFile = null;
        var origVal = lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl;
        return new Promise(function (resolve, reject) {
            if (!lib_1.ContextInfo.isAppWeb) {
                console.error("[gd-sprest] The current web is not an app web.");
                reject();
                return;
            }
            lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
            var web = (new lib_1.Web(rootWebFl ? lib_1.ContextInfo.siteServerRelativeUrl : null));
            if (typeof (dstFolder) === "string") {
                exports.App.getFolder(web, dstFolder, true)
                    .then(function (folder) {
                    exports.App.copyFileToHostWeb(fileUrl, folder, overwriteFl)
                        .then(function (_a) {
                        var file = _a.file, folder = _a.folder;
                        resolve({ file: file, folder: folder });
                    });
                });
            }
            else {
                var fileName = fileUrl.split("/");
                fileName = fileName[fileName.length - 1];
                var dstFileUrl = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
                var srcFileUrl_1 = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(lib_1.ContextInfo.webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));
                web.getFileByServerRelativeUrl(dstFileUrl)
                    .execute(function (file) {
                    return new Promise(function (resolve, reject) {
                        if (file.Exists) {
                            file.checkout().execute(resolve);
                        }
                        else {
                            resolve();
                        }
                    });
                });
                lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = false;
                (new lib_1.Web())
                    .getFileByServerRelativeUrl(srcFileUrl_1)
                    .content()
                    .execute(function (content) {
                    return new Promise(function (resolve, reject) {
                        var fileName = srcFileUrl_1.split("/");
                        fileName = fileName[fileName.length - 1];
                        lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
                        (dstFolder).Files().add(true, fileName, content)
                            .execute(function (file) {
                            srcFile = file;
                            file.checkin("", 1).execute();
                            file.publish("").execute(true);
                            file.done(function () {
                                resolve();
                            });
                        });
                    });
                }, true);
                web.done(function () { resolve({ file: srcFile, folder: dstFolder }); });
            }
        });
    };
    _App.copyFilesToHostWeb = function (fileUrls, folderUrls, overwriteFl, rootWebFl) {
        return new Promise(function (resolve, reject) {
            var request = function (files, folders, idx) {
                if (fileUrls.length == idx || folderUrls.length == idx) {
                    resolve({ files: files, folders: folders });
                    return;
                }
                exports.App.copyFileToHostWeb(fileUrls[idx], folderUrls[idx], overwriteFl, rootWebFl)
                    .then(function (_a) {
                    var file = _a.file, folder = _a.folder;
                    files.push(file);
                    folders.push(folder);
                    request(files, folders, ++idx);
                });
            };
            request([], [], 0);
        });
    };
    _App.createSubFolders = function (folder, subFolderUrl) {
        return new Promise(function (resolve, reject) {
            var request = function (resolve) {
                var subFolderName = subFolderUrl.split("/")[0];
                subFolderUrl = subFolderUrl.substr(subFolderName.length + 1);
                var subFolder = folder.Folders(subFolderName).execute(function (subFolder) {
                    var addSubFolders = function (subFolder) {
                        if (subFolderUrl.length == 0) {
                            resolve(subFolder);
                        }
                        else {
                            request(resolve);
                        }
                    };
                    if (subFolder.Exists) {
                        addSubFolders(subFolder);
                    }
                    else {
                        folder.Folders().add(subFolderName).execute(addSubFolders);
                    }
                });
            };
            request(resolve);
        });
    };
    _App.getFolder = function (web, folderUrl, createFl) {
        return new Promise(function (resolve, reject) {
            var dstFolder = null;
            if (!web.existsFl) {
                web.execute();
            }
            web.done(function () {
                var dstFolderUrl = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(web.ServerRelativeUrl, folderUrl.substr(folderUrl[0] == "/" ? 1 : 0));
                web.getFolderByServerRelativeUrl(folderUrl)
                    .execute(function (folder) {
                    return new Promise(function (resolve, reject) {
                        if (folder.Exists) {
                            dstFolder = folder;
                            resolve();
                        }
                        else {
                            exports.App.createSubFolders(web.RootFolder(), folderUrl).then(function (folder) {
                                dstFolder = folder;
                                resolve();
                            });
                        }
                    });
                }, true);
                web.done(function () {
                    resolve(dstFolder);
                });
            });
        });
    };
    _App.removeEmptyFolders = function (web, folderUrls) {
        return new Promise(function (resolve, reject) {
            if (folderUrls.length == 0) {
                resolve();
            }
            else {
                var prevFolderUrl = null;
                folderUrls.sort().sort(function (a, b) { return a.length > b.length ? -1 : 1; });
                for (var _i = 0, folderUrls_1 = folderUrls; _i < folderUrls_1.length; _i++) {
                    var folderUrl = folderUrls_1[_i];
                    var folder = null;
                    if (folderUrl == prevFolderUrl) {
                        continue;
                    }
                    else {
                        prevFolderUrl = folderUrl;
                    }
                    var folderNames = folderUrl.split('/');
                    for (var _a = 0, folderNames_1 = folderNames; _a < folderNames_1.length; _a++) {
                        var folderName = folderNames_1[_a];
                        folder = folder ? folder.Folders(folderName) : web.Folders(folderName);
                    }
                    folder.execute(function (folder) {
                        return new Promise(function (resolve, reject) {
                            if (folder.ItemCount == 0) {
                                folder.delete().execute(resolve);
                            }
                            else {
                                resolve();
                            }
                        });
                    }, true);
                }
                web.done(function () { resolve(); });
            }
        });
    };
    _App.removeFile = function (web, fileUrl) {
        return new Promise(function (resolve, reject) {
            var folder = null;
            var folders = fileUrl.split('/');
            for (var i = 0; i < folders.length - 1; i++) {
                folder = folder ? folder.Folders(folders[i]) : web.Folders(folders[i]);
            }
            folder.Files(folders[folders.length - 1]).execute(function (file) {
                if (file.Exists) {
                    file.delete().execute(resolve);
                }
                else {
                    resolve();
                }
            }, true);
        });
    };
    _App.removeFiles = function (web, fileUrls, idx) {
        return new Promise(function (resolve, reject) {
            var request = function (idx, resolve) {
                if (fileUrls.length == idx) {
                    resolve();
                }
                else {
                    exports.App.removeFile(web, fileUrls[idx]).then(function () {
                        request(++idx, resolve);
                    });
                }
            };
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
var _ContextInfo = (function () {
    function _ContextInfo() {
    }
    Object.defineProperty(_ContextInfo, "_contextInfo", {
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
    _ContextInfo.generateGUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    _ContextInfo.getWeb = function (url) {
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
exports.RequestType = {
    Custom: 0,
    Delete: 1,
    Merge: 2,
    OData: 3,
    Get: 10,
    GetBuffer: 11,
    GetWithArgs: 12,
    GetWithArgsInBody: 13,
    GetWithArgsInQS: 14,
    GetWithArgsValueOnly: 15,
    GetReplace: 16,
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
var BaseHelper = (function () {
    function BaseHelper() {
    }
    BaseHelper.prototype.addMethods = function (base, data) {
        var isCollection = data.results && data.results.length > 0;
        var metadata = isCollection ? data.results[0].__metadata : data.__metadata;
        var objType = metadata && metadata.type ? metadata.type : base.targetInfo.endpoint;
        objType = objType.split('/');
        objType = (objType[objType.length - 1]);
        objType = objType.split('.');
        objType = (objType[objType.length - 1]).toLowerCase();
        objType += isCollection ? "s" : "";
        if ((/^field/.test(objType) || /fields?$/.test(objType)) && objType != "fieldlinks" && objType != "fields") {
            objType = "field" + (isCollection ? "s" : "");
        }
        else if (/item$/.test(objType)) {
            objType = "listitem";
        }
        else if (/items$/.test(objType)) {
            objType = "items";
        }
        else if (/corporatecatalogappmetadata/.test(objType)) {
            objType = "tenantapp";
        }
        else if (/corporatecatalogappmetadatas/.test(objType)) {
            objType = "tenantapps";
        }
        var methods = mapper_1.Mapper[objType];
        if (methods) {
            for (var methodName in methods) {
                var methodInfo = methods[methodName] ? methods[methodName] : {};
                if (methodName == "properties") {
                    for (var _i = 0, methodInfo_1 = methodInfo; _i < methodInfo_1.length; _i++) {
                        var property = methodInfo_1[_i];
                        var propInfo = property.split("|");
                        var propName = propInfo[0];
                        var propType = propInfo.length > 1 ? propInfo[1] : null;
                        var subPropName = propInfo.length > 2 ? propInfo[2] : null;
                        var subPropType = propInfo.length > 3 ? propInfo[3] : null;
                        if (base[propName] == null || (base[propName].__deferred && base[propName].__deferred.uri)) {
                            if (propInfo.length == 4) {
                                subPropName = subPropName.replace(/'/g, "\\'");
                                base[propName] = new Function("name", "name = name ? '" + propName + subPropName + "'.replace(/\\[Name\\]/g, name) : null;" +
                                    "return this.getProperty(name ? name : '" + propName + "', name ? '" + subPropType + "' : '" + propType + "');");
                            }
                            else {
                                base[propName] = new Function("return this.getProperty('" + propName + "', '" + propType + "');");
                            }
                        }
                    }
                    continue;
                }
                if (typeof (methodInfo.metadataType) === "function") {
                    methodInfo = JSON.parse(JSON.stringify(methodInfo));
                    methodInfo.metadataType = methods[methodName].metadataType(base);
                }
                base[methodName] = new Function("return this.executeMethod('" + methodName + "', " + JSON.stringify(methodInfo) + ", arguments);");
            }
        }
    };
    BaseHelper.prototype.addProperties = function (base, data) {
        for (var key in data) {
            var value = data[key];
            if (key == "__metadata" || key == "results") {
                continue;
            }
            if (value && value.__deferred && value.__deferred.uri) {
                base["get_" + key] = base["get_" + key] ? base["get_" + key] : new Function("return this.getCollection('" + key + "', arguments);");
            }
            else {
                switch (key) {
                    case "ClientPeoplePickerResolveUser":
                    case "ClientPeoplePickerSearchUser":
                        base[key] = JSON.parse(value);
                        break;
                    default:
                        base[key] = value;
                        break;
                }
                if (base[key] && base[key].results) {
                    if (base[key].results.length == 0 || typeof (base[key].results[0]) === "object") {
                        var objCollection = new _1.Base(base.targetInfo);
                        objCollection["results"] = base[key].results;
                        if (objCollection["results"].length == 0) {
                            objCollection["__metadata"] = { type: key };
                        }
                        objCollection.targetInfo.endpoint = (objCollection.targetInfo.endpoint.split("?")[0] + "/" + key).replace(/\//g, "/");
                        base.addMethods(objCollection, objCollection);
                        base.updateDataCollection(base, objCollection["results"]);
                        base[key] = objCollection;
                    }
                }
            }
        }
    };
    BaseHelper.prototype.updateDataCollection = function (obj, results) {
        if (results) {
            obj["results"] = obj["results"] ? obj["results"].concat(results) : results;
            if (obj["results"].length > 0) {
                var results_1 = obj["results"];
                for (var _i = 0, results_2 = results_1; _i < results_2.length; _i++) {
                    var result = results_2[_i];
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
                    this.updateMetadata(obj, result);
                    this.addMethods(result, result);
                }
            }
        }
    };
    BaseHelper.prototype.updateDataObject = function (isBatchRequest) {
        if (this.status >= 200 && this.status < 300) {
            if (this.requestType == _1.RequestType.GetBuffer) {
                return;
            }
            var batchIdx = 0;
            var batchRequestIdx = 0;
            var responses = isBatchRequest ? this.response.split("\n") : [this.response];
            for (var i = 0; i < responses.length; i++) {
                var data = null;
                var response = responses[i];
                response = response === "" && !isBatchRequest ? "{}" : response;
                try {
                    data = isBatchRequest && response.indexOf("<?xml") == 0 ? response : JSON.parse(response);
                }
                catch (ex) {
                    continue;
                }
                var obj = isBatchRequest ? Object.create(this) : this;
                obj["existsFl"] = typeof (obj["Exists"]) === "boolean" ? obj["Exists"] : data.error == null;
                if (data.d) {
                    obj["d"] = data.d;
                    this.updateMetadata(obj, data.d);
                    this.addProperties(obj, data.d);
                    this.addMethods(obj, data.d);
                    this.updateDataCollection(obj, data.d.results);
                }
                if (isBatchRequest) {
                    var batchRequest = this.base.batchRequests[batchIdx][batchRequestIdx++];
                    if (batchRequest == null) {
                        batchIdx++;
                        batchRequestIdx = 0;
                        batchRequest = this.base.batchRequests[batchIdx][batchRequestIdx++];
                    }
                    if (batchRequest) {
                        batchRequest.response = typeof (data) === "string" ? data : obj;
                        batchRequest.callback ? batchRequest.callback(batchRequest.response) : null;
                    }
                }
            }
            if (isBatchRequest) {
                this.base.batchRequests = null;
            }
        }
    };
    BaseHelper.prototype.updateMetadata = function (base, data) {
        if (!lib_1.ContextInfo.isAppWeb) {
            return;
        }
        var hostUrl = lib_1.ContextInfo.webAbsoluteUrl.toLowerCase();
        var requestUrl = data && data.__metadata && data.__metadata.uri ? data.__metadata.uri.toLowerCase() : null;
        var targetUrl = base.targetInfo && base.targetInfo.url ? base.targetInfo.url.toLowerCase() : null;
        if (hostUrl == null || requestUrl == null || targetUrl == null) {
            return;
        }
        if (targetUrl.indexOf(hostUrl) == 0) {
            return;
        }
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
exports.audit = {
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
exports.eventreceiver = {
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    update: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.eventreceivers = {
    add: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "eventreceiver"
    },
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
exports.attachment = {};
exports.attachmentfiles = {
    add: {
        argNames: ["fileName"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.file = {
    properties: [
        "Author|user", "CheckedOutByUser|user", "EffectiveInformationRightsManagementSettings", "InformationRightsManagementSettings",
        "ListItemAllFields", "LockedByUser|user", "ModifiedBy|user", "Properties|propertyvalues", "VersionEvents", "Versions|fileversions"
    ],
    approve: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    cancelupload: {
        argNames: ["uploadId"],
        name: "cancelupload(guid'[[uploadId]]')",
        requestType: utils_1.RequestType.PostReplace
    },
    checkin: {
        argNames: ["comment", "checkInType"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    checkout: {
        requestType: utils_1.RequestType.Post
    },
    content: {
        name: "$value",
        requestType: utils_1.RequestType.GetBuffer
    },
    continueUpload: {
        argNames: ["uploadId", "fileOffset"],
        name: "continueUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
        requestType: utils_1.RequestType.PostReplace
    },
    copyTo: {
        argNames: ["strNewUrl", "bOverWrite"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    deny: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    finishUpload: {
        argNames: ["uploadId", "fileOffset"],
        name: "finishUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
        requestType: utils_1.RequestType.PostReplace
    },
    getlimitedwebpartmanager: {
        argNames: ["scope"],
        name: "getLimitedWebPartManager(scope=[[scope]])",
        requestType: utils_1.RequestType.GetReplace
    },
    moveTo: {
        argNames: ["newUrl", "flags"],
        name: "moveTo(newUrl='[[newUrl]]', flags=[[flags]])",
        requestType: utils_1.RequestType.PostReplace
    },
    openBinaryStream: {
        requestType: utils_1.RequestType.GetBuffer
    },
    publish: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    recycle: {
        requestType: utils_1.RequestType.Get
    },
    saveBinaryStream: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    startUpload: {
        argNames: ["uploadId"],
        name: "startupload(uploadId=guid'[[uploadId]]')",
        requestType: utils_1.RequestType.PostReplace
    },
    undoCheckOut: {
        requestType: utils_1.RequestType.Post
    },
    unpublish: {
        argNames: ["comment"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    update: {
        metadataType: "SP.File",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.files = {
    add: {
        argNames: ["overwrite", "url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    addTemplateFile: {
        argNames: ["urlOfFile", "templateFileType"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.fileversion = {
    properties: [],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.fileversions = {
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.folder = {
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder|folder", "Properties|propertyvalues", "StorageMetrics"
    ],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    update: {
        metadataType: "SP.Folder",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.folders = {
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder", "StorageMetrics"
    ],
    add: {
        argNames: ["url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getbyurl: {
        argNames: ["serverRelativeUrl"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.limitedwebpartmanager = {
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
exports.contenttype = {
    properties: [
        "FieldLinks|fieldlinks|('[Name]')|fieldlink", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "WorkflowAssociations"
    ],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    update: {
        metadataType: "SP.ContentType",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.contenttypes = {
    add: {
        metadataType: "SP.ContentType",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    addAvailableContentType: {
        argNames: ["contentTypeId"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "contenttype"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.field = {
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    setShowInDisplayForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    setShowInEditForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    setShowInNewForm: {
        argNames: ["showInForm"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.fieldlinks = {
    add: {
        argNames: ["data"],
        metadataType: "SP.FieldLink",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "fieldlink"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.fields = {
    add: {
        metadataType: "SP.Field",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    addField: {
        argNames: ["parameters"],
        metadataType: "SP.FieldCreationInformation",
        name: "addField",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    addDependentLookupField: {
        argNames: ["displayname", "primarylookupfieldid", "showfield"],
        requestType: utils_1.RequestType.PostWithArgs
    },
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
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    getByInternalNameOrTitle: {
        argNames: ["internalNameOrTitle"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.items = {
    add: {
        metadataType: function (obj) {
            return (obj.parent && obj.parent["ListItemEntityTypeFullName"]) || "SP.ListItem";
        },
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "listitem"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.list = {
    properties: [
        "BrowserFileHandling", "ContentTypes|contenttypes|('[Name]')|contenttype", "CreatablesInfo", "DefaultView|view",
        "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field",
        "FirstUniqueAncestorSecurableObject", "Forms|forms|('[Name]')|form", "InformationRightsManagementSettings",
        "Items|items|([Name])|item", "ParentWeb", "RoleAssignments|roleassignments|([Name])|roleassignment",
        "RootFolder|folder|/getByUrl('[Name]')|file", "Subscriptions", "TitleResource",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "Views|views|('[Name]')|view", "WorkflowAssociations"
    ],
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getItemById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "item"
    },
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
    getListItemChangesSinceToken: {
        argNames: ["query"],
        metadataType: "SP.ChangeLogItemQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getRelatedFields: {
        requestType: utils_1.RequestType.Get
    },
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    getViewById: {
        argNames: ["viewId"],
        name: "getView",
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    renderListData: {
        argNames: ["viewXml"],
        name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
        requestType: utils_1.RequestType.PostReplace
    },
    renderListFormData: {
        argNames: ["itemid", "formid", "mode"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    reserveListItemId: {
        requestType: utils_1.RequestType.Post
    },
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    update: {
        metadataType: "SP.List",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.listitem = {
    properties: [
        "AttachmentFiles|attachmentfiles|('[Name]')|attachment", "ContentType|contenttype", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit",
        "File|file", "FirstUniqueAncestorSecurableObject", "Folder|folder", "GetDlpPolicyTip", "ParentList|list",
        "Properties|propertyvalues", "RoleAssignments|roleassignments|roleassignments|([Name])|roleassignment"
    ],
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    recycle: {
        requestType: utils_1.RequestType.Post
    },
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    validateUpdateListItem: {
        argNames: ["formValues", "bNewDocumentUpdate"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.lists = {
    add: {
        metadataType: "SP.List",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    ensureSiteAssetsLibrary: {
        requestType: utils_1.RequestType.Post
    },
    ensureSitePagesLibrary: {
        requestType: utils_1.RequestType.Post
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.version = {
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "version"
    },
    deleteAll: {
        requestType: utils_1.RequestType.Post
    },
    deleteById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    deleteByLabel: {
        argNames: ["label"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    restoreByLabel: {
        argNames: ["label"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    }
};
exports.view = {
    properties: [
        "ViewFields|viewfieldcollection"
    ],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    renderAsHtml: {
        requestType: utils_1.RequestType.Get
    },
    update: {
        metadataType: "SP.View",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.viewfieldcollection = {
    addViewField: {
        argNames: ["fieldName"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    moveViewFieldTo: {
        argNames: ["field", "index"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    removeAllViewFields: {
        requestType: utils_1.RequestType.Post
    },
    removeViewField: {
        argNames: ["fieldName"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    }
};
exports.views = {
    add: {
        metadataType: "SP.View",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    getByTitle: {
        argNames: ["title"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
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
exports.navigationservicerest = {
    properties: [
        "MenuState|menustate|([Name])|menunode"
    ],
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
exports.propertyvalues = {
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
exports.roleassignment = {
    properties: [
        "Member", "RoleDefinitionBindings|roledefinitions"
    ],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.roleassignments = {
    addRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getByPrincipalId: {
        argNames: ["principalId"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roleassignment"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    removeRoleAssignment: {
        argNames: ["principalId", "roleDefId"],
        requestType: utils_1.RequestType.PostWithArgs
    }
};
exports.roledefinition = {
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.roledefinitions = {
    getById: {
        argNames: ["roleDefId"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },
    getByName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinition"
    },
    getByType: {
        argNames: ["roleType"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "roledefinitions"
    },
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
exports.site = {
    properties: [
        "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features", "Owner|user", "RootWeb|web",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction"
    ],
    createPreviewSPSite: {
        argNames: ["upgrade", "sendemail"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    extendUpgradeReminderDate: {
        requestType: utils_1.RequestType.Post
    },
    getCatalog: {
        argNames: ["typeCatalog"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getCustomListTemplates: {
        argNames: ["web"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getWebTemplates: {
        argNames: ["LCID", "overrideCompatLevel"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    invalidate: {
        requestType: utils_1.RequestType.Post
    },
    needsUpgradeByType: {
        argNames: ["versionUpgrade", "recursive"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    openWeb: {
        argNames: ["strUrl"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    openWebById: {
        argNames: ["gWebId"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    runHealthCheck: {
        argNames: ["ruleId", "bRepair", "bRunAlways"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    runUpgradeSiteSession: {
        argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    update: {
        metadataType: "SP.Site",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    updateClientObjectModelUseRemoteAPIsPermissionSetting: {
        argNames: ["requireUseRemoteAPIs"],
        requestType: utils_1.RequestType.PostWithArgs
    }
};
exports.tenantapp = {
    deploy: {
        requestType: utils_1.RequestType.Post
    },
    install: {
        requestType: utils_1.RequestType.Post
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    remove: {
        requestType: utils_1.RequestType.Post
    },
    retract: {
        requestType: utils_1.RequestType.Post
    },
    upgrade: {
        requestType: utils_1.RequestType.Post
    },
    uninstall: {
        requestType: utils_1.RequestType.Post
    }
};
exports.tenantapps = {
    getById: {
        argNames: ["guid"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "tenantapp"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.tenantappcatalog = {
    properties: [
        "AvailableApps|tenantapps|/getById('[Id]')|tenantapp"
    ],
    add: {
        argNames: ["overwrite", "url"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getById: {
        argNames: ["guid"],
        name: "AvailableApps/getById('[[guid]]')",
        requestType: utils_1.RequestType.GetReplace,
        returnType: "tenantapp"
    },
    SiteCollectionAppCatalogsSites: {
        requestType: utils_1.RequestType.Post
    }
};
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
exports.web = {
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
    applyTheme: {
        argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    applyWebTemplate: {
        argName: ["name"],
        requestType: utils_1.RequestType.PostWithArgsInQS
    },
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    doesPushNotificationSubscriberExist: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    doesUserHavePermissions: {
        argNames: ["High", "Low"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    ensureUser: {
        argNames: ["logonName"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    executeRemoteLOB: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getAppBdcCatalog: {
        requestType: utils_1.RequestType.Post
    },
    getAppBdcCatalogForAppInstance: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    getAppInstanceById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getAppInstancesByProductId: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getAvailableWebTemplates: {
        argNames: ["lcid", "doincludecrosslanguage"],
        requestType: utils_1.RequestType.GetWithArgs
    },
    getCatalog: {
        argNames: ["galleryType"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getContextWebInformation: {
        name: "contextInfo",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.Post
    },
    getCustomListTemplates: {
        requestType: utils_1.RequestType.Get
    },
    getDocumentLibraries: {
        argNames: ["url"],
        name: "sp.web.getDocumentLibraries",
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    getEntity: {
        argNames: ["namespace", "name"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    getFileByServerRelativeUrl: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "file"
    },
    getFolderByServerRelativeUrl: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    getList: {
        argNames: ["url"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    getPushNotificationSubscriber: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getPushNotificationSubscribersByArgs: {
        argNames: ["args"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly
    },
    getPushNotificationSubscribersByUser: {
        argNames: ["loginName"],
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    getSubwebsFilteredForCurrentUser: {
        argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
        requestType: utils_1.RequestType.GetWithArgs,
        returnType: "webinfos"
    },
    getUserById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace
    },
    getWebUrlFromPageUrl: {
        name: "sp.web.getWebUrlFromPageUrl",
        requestType: utils_1.RequestType.GetWithArgsInQS
    },
    loadAndInstallApp: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    loadAndInstallAppInSpecifiedLocale: {
        argNames: ["appPackageStream", "installationLocaleLCID"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    loadApp: {
        argNames: ["appPackageStream", "installationLocaleLCID"],
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    mapToIcon: {
        argNames: ["filename", "progid", "size"],
        requestType: utils_1.RequestType.GetWithArgs
    },
    processExternalNotification: {
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    registerPushNotificationSubscriber: {
        argNames: ["deviceappinstanceid", "servicetoken"],
        requestType: utils_1.RequestType.PostWithArgs
    },
    resetRoleInheritance: {
        requestType: utils_1.RequestType.Post
    },
    unregisterPushNotificationSubscriber: {
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    update: {
        metadataType: "SP.Web",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.webinfos = {
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.webs = {
    add: {
        argNames: ["parameters"],
        metadataType: "SP.WebCreationInformation",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
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
exports.userprofile = {
    properties: [
        "PersonalSite|site"
    ],
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
exports.group = {
    properties: [
        "Users|users|/getById([Name])|user"
    ],
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.sitegroups = {
    add: {
        metadataType: "SP.Group",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },
    getByName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    removeById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
    removeByLoginName: {
        argNames: ["name"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
};
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
exports.user = {
    properties: [
        "Groups|sitegroups|([Name])|group"
    ],
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.users = {
    add: {
        metadataType: "SP.User",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getByEmail: {
        argNames: ["email"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    getByLoginName: {
        argNames: ["loginName"],
        name: "getByLoginName(@v)?@v='[[loginName]]'",
        requestType: utils_1.RequestType.GetReplace,
        returnType: "user"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    },
    removeById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.PostWithArgsValueOnly
    },
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
exports.usercustomaction = {
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
exports.usercustomactions = {
    add: {
        metadataType: "SP.UserCustomAction",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    clear: {
        requestType: utils_1.RequestType.Post
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "usercustomaction"
    },
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
exports.CheckOutType = { Online: 0, Offline: 1, None: 2 };
exports.ChoiceFormatType = { Dropdown: 0, RadioButtons: 1 };
exports.ClientTemplatesUtility = {
    UserLookupDelimitString: ";#",
    UserMultiValueDelimitString: ",#"
};
exports.ControlMode = {
    Invalid: 0,
    Display: 1,
    Edit: 2,
    New: 3,
    View: 4
};
exports.DateFormat = { DateOnly: 0, DateTime: 1 };
exports.DraftVisibilityType = { Reader: 0, Author: 1, Approver: 2 };
exports.EventReceiverSynchronizationType = { Synchronization: 1, Asynchronous: 2 };
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
exports.FieldNoteType = {
    EnhancedRichText: 0,
    RichText: 1,
    TextOnly: 2
};
exports.FieldNumberType = {
    Decimal: 0,
    Integer: 1,
    Percentage: 2,
};
exports.FieldResultType = {
    Boolean: "Boolean",
    Currency: "Currency",
    DateOnly: "DateOnly",
    DateTime: "DateTime",
    Number: "Number",
    Text: "Text"
};
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
exports.FieldUserSelectionType = { PeopleOnly: 0, PeopleAndGroups: 1 };
exports.FileTemplateType = { StandardPage: 0, WikiPage: 1, FormPage: 2 };
exports.FriendlyDateFormat = {
    Unspecified: 0,
    Disabled: 1,
    Relative: 2
};
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
exports.PersonalSiteCapabilities = {
    Education: 16,
    Guest: 32,
    MyTasksDashboard: 8,
    None: 0,
    Profile: 1,
    Social: 2,
    Storage: 4
};
exports.PrincipalSources = {
    All: 15,
    MembershipProvider: 4,
    None: 0,
    RoleProvider: 8,
    UserInfoList: 1,
    Windows: 2
};
exports.PrincipalTypes = {
    All: 15,
    DistributionList: 2,
    None: 0,
    SecurityGroup: 4,
    SharePointGroup: 8,
    User: 1
};
exports.RelationshipDeleteBehaviorType = { None: 0, Cascade: 1, Restrict: 2 };
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
exports.RoleType = {
    Administrator: 5,
    Contributor: 3,
    Editor: 6,
    Guest: 1,
    None: 0,
    Reader: 2,
    WebDesigner: 4
};
exports.UrlFormatType = { Hyperlink: 0, Image: 1 };
exports.URLZones = { Default: 0, Intranet: 1, Internet: 2, Custom: 3, Extranet: 4 };
exports.UserCustomActionRegistrationType = { None: 0, List: 1, ContentType: 2, ProgId: 3, FileType: 4 };
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
var BaseRequest = (function (_super) {
    __extends(BaseRequest, _super);
    function BaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseRequest.prototype.executeMethod = function (methodName, methodConfig, args) {
        var targetInfo = null;
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            targetInfo = {
                url: metadata.uri
            };
            if (methodConfig.inheritMetadataType) {
                methodConfig.metadataType = metadata.type;
            }
            this.updateMetadataUri(metadata, targetInfo);
        }
        else {
            targetInfo = Object.create(this.targetInfo);
        }
        var methodInfo = new _1.MethodInfo(methodName, methodConfig, args);
        targetInfo.bufferFl = methodConfig.requestType == _1.RequestType.GetBuffer;
        targetInfo.data = methodInfo.body;
        targetInfo.defaultToWebFl = this.base.targetInfo.defaultToWebFl;
        targetInfo.method = methodInfo.requestMethod;
        if (methodInfo.replaceEndpointFl) {
            targetInfo.endpoint = methodInfo.url;
        }
        else if (methodInfo.url && methodInfo.url.length > 0) {
            targetInfo.endpoint = targetInfo.endpoint ? targetInfo.endpoint : "";
            if (targetInfo.endpoint && methodInfo.url && methodInfo.url.indexOf("?") != 0) {
                targetInfo.endpoint += "/";
            }
            targetInfo.endpoint += methodInfo.url;
        }
        var obj = new _1.Base(targetInfo);
        obj.base = this.base ? this.base : this;
        obj.getAllItemsFl = methodInfo.getAllItemsFl;
        obj.parent = this;
        obj.requestType = methodConfig.requestType;
        if (methodConfig.returnType) {
            this.addMethods(obj, { __metadata: { type: methodConfig.returnType } });
        }
        return obj;
    };
    BaseRequest.prototype.executeRequest = function (asyncFl, callback) {
        var _this = this;
        var isBatchRequest = this.base && this.base.batchRequests && this.base.batchRequests.length > 0;
        var targetInfo = isBatchRequest ? _1.Batch.getTargetInfo(this.base.batchRequests) : new _1.TargetInfo(this.targetInfo);
        if (asyncFl) {
            if (this.xhr && !isBatchRequest) {
                callback ? callback(this) : null;
            }
            else {
                this.xhr = new _1.XHRRequest(asyncFl, targetInfo, function () {
                    _this.response = _this.xhr.response;
                    _this.status = _this.xhr.status;
                    if (_this.requestType == _1.RequestType.GetBuffer) {
                        callback ? callback(_this.response) : null;
                    }
                    else {
                        _this.updateDataObject(isBatchRequest);
                        isBatchRequest ? null : _this.validateDataCollectionResults().then(function () {
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
            this.xhr = new _1.XHRRequest(asyncFl, targetInfo);
            this.response = this.xhr.response;
            this.status = this.xhr.status;
            if (this.requestType == _1.RequestType.GetBuffer) {
                return this.response;
            }
            this.updateDataObject(isBatchRequest);
            if (this["d"] && this["d"].__next) {
                this["next"] = new Function("return this.getNextSetOfResults();");
            }
            return this;
        }
    };
    BaseRequest.prototype.getCollection = function (method, args) {
        var targetInfo = Object.create(this.targetInfo);
        targetInfo.data = null;
        targetInfo.method = null;
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            targetInfo.url = metadata.uri;
            this.updateMetadataUri(metadata, targetInfo);
            targetInfo.endpoint = method;
        }
        else {
            targetInfo.endpoint += "/" + method;
        }
        targetInfo.callback = args && typeof (args[0]) === "function" ? args[0] : null;
        var obj = new _1.Base(targetInfo);
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        return obj;
    };
    BaseRequest.prototype.getNextSetOfResults = function () {
        var targetInfo = Object.create(this.targetInfo);
        targetInfo.endpoint = "";
        targetInfo.url = this["d"].__next;
        var obj = new _1.Base(targetInfo);
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        return obj;
    };
    BaseRequest.prototype.getProperty = function (propertyName, requestType) {
        var targetInfo = Object.create(this.targetInfo);
        targetInfo.data = null;
        targetInfo.method = null;
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            targetInfo.url = metadata.uri;
            this.updateMetadataUri(metadata, targetInfo);
            targetInfo.endpoint = propertyName;
        }
        else {
            targetInfo.endpoint += "/" + propertyName;
        }
        var obj = new _1.Base(targetInfo);
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        requestType ? this.addMethods(obj, { __metadata: { type: requestType } }) : null;
        return obj;
    };
    BaseRequest.prototype.updateMetadataUri = function (metadata, targetInfo) {
        if (/^SP.Field/.test(metadata.type) || /^SP\..*Field$/.test(metadata.type)) {
            targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
        }
        else if (/SP.EventReceiverDefinition/.test(metadata.type)) {
            targetInfo.url = targetInfo.url.replace(/\/EventReceiver\//, "/EventReceivers/");
        }
        else if (/Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata/.test(targetInfo.url)) {
            targetInfo.url = targetInfo.url.split("Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata")[0] + "web/tenantappcatalog/availableapps/getbyid('" + this["ID"] + "')";
        }
    };
    BaseRequest.prototype.validateDataCollectionResults = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = function (xhr, resolve) {
                if (xhr && xhr.status < 400 && typeof (xhr.response) === "string" && xhr.response.length > 0) {
                    var data = JSON.parse(xhr.response);
                    if (data.d && data.d.__next) {
                        if (_this.getAllItemsFl) {
                            var targetInfo = Object.create(_this.targetInfo);
                            targetInfo.endpoint = "";
                            targetInfo.url = data.d.__next;
                            new _1.XHRRequest(true, new _1.TargetInfo(targetInfo), function (xhr) {
                                var data = JSON.parse(xhr.response);
                                if (data.d) {
                                    _this.updateDataCollection(_this, data.d.results);
                                    _this["d"].results = _this["d"].results.concat(data.d.results);
                                    request(xhr, resolve);
                                }
                                resolve();
                            });
                        }
                        else {
                            _this["next"] = new Function("return this.getNextSetOfResults();");
                            resolve();
                        }
                    }
                    else {
                        resolve();
                    }
                }
                else {
                    resolve();
                }
            };
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
var BaseExecution = (function (_super) {
    __extends(BaseExecution, _super);
    function BaseExecution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseExecution.prototype.batch = function (arg) {
        var callback = null;
        var appendFl = false;
        if (typeof (arg) === "boolean") {
            appendFl = arg;
        }
        else {
            callback = arg;
        }
        this.base = this.base ? this.base : this;
        if (appendFl && this.base.batchRequests) {
            this.base.batchRequests[this.base.batchRequests.length - 1].push({
                targetInfo: new _1.TargetInfo(this.targetInfo)
            });
        }
        else {
            this.base.batchRequests = this.base.batchRequests || [];
            this.base.batchRequests.push([{
                    callback: callback,
                    targetInfo: new _1.TargetInfo(this.targetInfo)
                }]);
        }
        return this;
    };
    BaseExecution.prototype.execute = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callback = null;
        var waitFl = false;
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
        this.base = this.base ? this.base : this;
        this.responseIndex = this.base.responses.length;
        this.base.responses.push(this);
        if (waitFl) {
            this.waitForRequestsToComplete(function () {
                _this.executeRequest(true, function (response) {
                    if (callback) {
                        _this.base = _this;
                        _this.base.responses = [];
                        var returnVal = callback(response);
                        var waitFunc = returnVal ? returnVal.done || returnVal.then : null;
                        if (waitFunc && typeof (waitFunc) === "function") {
                            waitFunc(function () {
                                _this.base = _this.parent.base;
                                _this.base.waitFlags[_this.responseIndex] = true;
                            });
                            return;
                        }
                        _this.base = _this.parent.base;
                    }
                    _this.base.waitFlags[_this.responseIndex] = true;
                });
            }, this.responseIndex);
        }
        else {
            this.executeRequest(true, function (response) {
                var returnVal = callback ? callback(response) : null;
                if (returnVal && typeof (returnVal.done) === "function") {
                    returnVal.done(function () {
                        _this.base.waitFlags[_this.responseIndex] = true;
                    });
                }
                else {
                    _this.base.waitFlags[_this.responseIndex] = true;
                }
            });
        }
        return this;
    };
    BaseExecution.prototype.executeAndWait = function () { return this.executeRequest(false); };
    BaseExecution.prototype.waitForRequestsToComplete = function (callback, requestIdx) {
        var _this = this;
        var intervalId = lib_1.ContextInfo.window.setInterval(function () {
            var counter = 0;
            for (var i = 0; i < _this.base.responses.length; i++) {
                var response = _this.base.responses[i];
                if (requestIdx == counter++) {
                    break;
                }
                if (response.xhr == null || !response.xhr.completedFl) {
                    return;
                }
                if (counter > 0 && _this.base.waitFlags[counter - 1] != true) {
                    return;
                }
            }
            lib_1.ContextInfo.window.clearInterval(intervalId);
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
var Base = (function (_super) {
    __extends(Base, _super);
    function Base(targetInfo) {
        var _this = _super.call(this) || this;
        _this.targetInfo = Object.create(targetInfo || {});
        _this.responses = [];
        _this.requestType = 0;
        _this.waitFlags = [];
        return _this;
    }
    Base.prototype.done = function (resolve) {
        var _this = this;
        this.base = this.base ? this.base : this;
        this.responseIndex = this.responseIndex >= 0 ? this.responseIndex : 0;
        this.waitForRequestsToComplete(function () {
            var responses = _this.base.responses;
            _this.base.responses = [];
            _this.base.waitFlags = [];
            resolve ? resolve.apply(_this, responses) : null;
        });
    };
    Base.prototype.getInfo = function () { return (new _1.TargetInfo(this.targetInfo)).requestInfo; };
    Base.prototype.stringify = function () {
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
var Batch = (function () {
    function Batch() {
    }
    Batch.getTargetInfo = function (requests) {
        var batchId = "batch_" + lib_1.ContextInfo.generateGUID();
        var batchRequests = [];
        for (var i = 0; i < requests.length; i++) {
            batchRequests.push(this.createBatch(batchId, requests[i]));
        }
        batchRequests.push("--" + batchId + "--");
        return new _1.TargetInfo({
            endpoint: "$batch",
            method: "POST",
            data: batchRequests.join("\r\n"),
            requestHeader: {
                "Content-Type": 'multipart/mixed; boundary="' + batchId + '"'
            }
        });
    };
    Batch.createBatch = function (batchId, requests) {
        var batch = ["--" + batchId];
        var requiresChangeset = requests[0] && requests[0].targetInfo.requestMethod != "GET";
        if (requiresChangeset) {
            var changesets = [];
            var changesetId = "changeset_" + lib_1.ContextInfo.generateGUID();
            for (var i = 0; i < requests.length; i++) {
                var request = [];
                var targetInfo = requests[i].targetInfo;
                request.push("--" + changesetId);
                request.push("Content-Type: application/http");
                request.push("Content-Transfer-Encoding: binary");
                request.push("");
                request.push("POST " + targetInfo.requestUrl + " HTTP/1.1");
                request.push("Content-Type: application/json;odata=verbose");
                request.push("");
                targetInfo.requestData ? request.push(targetInfo.requestData) : null;
                request.push("");
                changesets.push(request.join("\r\n"));
            }
            changesets.push("--" + changesetId + "--");
            var changeset = changesets.join("\r\n");
            batch.push("Content-Type: multipart/mixed; boundary=" + changesetId);
            batch.push("Content-Length: " + changeset.length);
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push(changeset);
            batch.push("");
        }
        else if (requests[0]) {
            var targetInfo = requests[0].targetInfo;
            batch.push("Content-Type: application/http");
            batch.push("Content-Transfer-Encoding: binary");
            batch.push("");
            batch.push("GET " + targetInfo.requestUrl + " HTTP/1.1");
            batch.push("Accept: application/json;odata=verbose");
            batch.push("");
            targetInfo.requestData ? batch.push(targetInfo.requestData) : null;
            batch.push("");
        }
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
var MethodInfo = (function () {
    function MethodInfo(methodName, methodInfo, args) {
        this.methodInfo = methodInfo;
        this.methodInfo.argValues = args;
        this.methodInfo.name = typeof (this.methodInfo.name) === "string" ? this.methodInfo.name : methodName;
        this.generateParams();
        this.methodUrl = this.generateUrl();
    }
    Object.defineProperty(MethodInfo.prototype, "body", {
        get: function () { return this.methodData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "getAllItemsFl", {
        get: function () { return this.methodInfo.getAllItemsFl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "replaceEndpointFl", {
        get: function () { return this.methodInfo.replaceEndpointFl ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "requestMethod", {
        get: function () {
            if (typeof (this.methodInfo.requestMethod) === "string") {
                return this.methodInfo.requestMethod;
            }
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
        get: function () { return this.methodUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "passDataInBody", {
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
    MethodInfo.prototype.generateParams = function () {
        var params = {};
        if (this.methodInfo.argValues == null) {
            return;
        }
        if (this.methodInfo.argNames) {
            for (var i = 0; i < this.methodInfo.argNames.length && i < this.methodInfo.argValues.length; i++) {
                var name_1 = this.methodInfo.argNames[i];
                var value = this.methodInfo.argValues[i];
                switch (typeof (this.methodInfo.argValues[i])) {
                    case "boolean":
                        params[name_1] = this.methodInfo.argValues[i] ? "true" : "false";
                        break;
                    case "number":
                        params[name_1] = this.methodInfo.argValues[i];
                        break;
                    default:
                        params[name_1] = value;
                        break;
                }
            }
        }
        var isEmpty = true;
        for (var k in params) {
            isEmpty = false;
            break;
        }
        this.methodParams = isEmpty ? null : params;
        if (this.methodParams) {
            if (this.isTemplate) {
                if (typeof (this.methodInfo.data) !== "string") {
                    this.methodInfo.data = JSON.stringify(this.methodInfo.data);
                }
                for (var key in this.methodParams) {
                    this.methodInfo.data = this.methodInfo.data.replace("[[" + key + "]]", this.methodParams[key].replace(/"/g, '\\"').replace(/\n/g, ""));
                }
                this.methodData = JSON.parse(this.methodInfo.data);
            }
        }
        if (this.methodInfo.argValues && this.methodInfo.argValues.length > 0) {
            if (this.methodInfo.argNames == null) {
                this.methodData = this.methodInfo.argValues[0];
            }
            else if (this.methodInfo.argValues.length > this.methodInfo.argNames.length) {
                this.methodData = this.methodInfo.argValues[this.methodInfo.argNames.length];
            }
        }
        if (this.methodInfo.metadataType) {
            if (this.methodInfo.argNames) {
                (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] =
                    (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] || { "type": this.methodInfo.metadataType };
            }
            else {
                (this.methodData || this.methodParams)["__metadata"] =
                    (this.methodData || this.methodParams)["__metadata"] || { "type": this.methodInfo.metadataType };
            }
        }
    };
    MethodInfo.prototype.generateUrl = function () {
        var url = this.methodInfo.name;
        if (this.methodInfo.requestType == _1.RequestType.Delete) {
            url = "deleteObject";
        }
        if (this.passDataInBody) {
            var data = this.methodData || this.methodParams;
            this.methodData = JSON.stringify(data);
        }
        if (this.passDataInQS) {
            var data = this.methodParams || this.methodData;
            url += "(@v)?@v=" + (typeof (data) === "string" ? "'" + encodeURIComponent(data) + "'" : JSON.stringify(data));
        }
        if (this.replace) {
            for (var key in this.methodParams) {
                url = url.replace("[[" + key + "]]", encodeURIComponent(this.methodParams[key]));
            }
        }
        else if (this.methodInfo.requestType == _1.RequestType.OData) {
            var oData = new _1.OData(this.methodParams["oData"]);
            url = "?" + oData.QueryString;
            this.methodInfo.getAllItemsFl = oData.GetAllItems;
        }
        else if (!this.passDataInBody && !this.passDataInQS) {
            var params = "";
            var data = this.methodParams || this.methodData;
            if (data) {
                data = data && typeof (data) === "object" ? data : { value: data };
                for (var name_2 in data) {
                    var value = data[name_2];
                    value = typeof (value) === "string" ? "'" + value + "'" : value;
                    switch (this.methodInfo.requestType) {
                        case _1.RequestType.GetWithArgsValueOnly:
                        case _1.RequestType.PostWithArgsValueOnly:
                            params += value + ", ";
                            break;
                        default:
                            params += name_2 + "=" + value + ", ";
                            break;
                    }
                }
            }
            url += params.length > 0 ? "(" + params.replace(/, $/, "") + ")" : "";
        }
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
var OData = (function () {
    function OData(oData) {
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
        get: function () { return this._custom; },
        set: function (value) { this._custom = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Expand", {
        get: function () { return this._expand; },
        set: function (value) { this._expand = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Filter", {
        get: function () { return this._filter; },
        set: function (value) { this._filter = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "GetAllItems", {
        get: function () { return this._getAllItems; },
        set: function (value) { this._getAllItems = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "OrderBy", {
        get: function () { return this._orderBy; },
        set: function (value) { this._orderBy = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "QueryString", {
        get: function () {
            var qs = "";
            var values = [];
            values.push(this.getQSValue("$select", this._select));
            values.push(this.getQSValue("$orderby", this._orderBy));
            this._top ? values.push("$top=" + this._top) : null;
            this._skip ? values.push("$skip=" + this._skip) : null;
            this._filter ? values.push("$filter=" + this._filter) : null;
            values.push(this.getQSValue("$expand", this._expand));
            this._custom ? values.push(this._custom) : null;
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (value && value != "") {
                    qs += (qs == "" ? "" : "&") + value;
                }
            }
            return qs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Select", {
        get: function () { return this._select; },
        set: function (value) { this._select = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Skip", {
        get: function () { return this._skip; },
        set: function (value) { this._skip = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OData.prototype, "Top", {
        get: function () { return this._top; },
        set: function (value) { this._top = value; },
        enumerable: true,
        configurable: true
    });
    OData.prototype.getQSValue = function (qsKey, keys) {
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
var TargetInfo = (function () {
    function TargetInfo(targetInfo) {
        this.request = targetInfo || {};
        this.requestData = this.request.data;
        this.requestHeaders = this.request.requestHeader;
        this.requestMethod = this.request.method ? this.request.method : "GET";
        this.setRequestUrl();
    }
    Object.defineProperty(TargetInfo.prototype, "isBatchRequest", {
        get: function () { return this.request.endpoint == "$batch"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetInfo.prototype, "requestInfo", {
        get: function () {
            return {
                data: this.requestData,
                method: this.requestMethod,
                url: this.requestUrl
            };
        },
        enumerable: true,
        configurable: true
    });
    TargetInfo.prototype.getDomainUrl = function () {
        var url = lib_1.ContextInfo.document.location.href;
        if (lib_1.ContextInfo.isAppWeb) {
            url = TargetInfo.getQueryStringValue("SPHostUrl") + "";
        }
        url = url.split('/');
        if (url && url.length >= 2) {
            url = url[0] + "//" + url[2];
        }
        return url;
    };
    TargetInfo.getQueryStringValue = function (key) {
        var queryString = lib_1.ContextInfo.existsFl ? lib_1.ContextInfo.document.location.href.split('?') : [""];
        queryString = queryString.length > 1 ? queryString[1] : queryString[0];
        var values = queryString.split('&');
        for (var i = 0; i < values.length; i++) {
            var keyValue = values[i].split('=');
            if (keyValue.length == 1) {
                continue;
            }
            if (decodeURIComponent(keyValue[0]) == key) {
                return decodeURIComponent(keyValue[1]);
            }
        }
        return null;
    };
    TargetInfo.prototype.setRequestUrl = function () {
        var endpoint = this.request.endpoint ? "/" + this.request.endpoint : "";
        var hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        var qs = (endpoint.indexOf("?") === -1 ? "?" : "&") + "@target='{{Target}}'";
        var template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";
        if (lib_1.ContextInfo.existsFl && lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl && lib_1.ContextInfo.isAppWeb && !this.request.overrideDefaultRequestToHostFl && this.request.url == null) {
            this.request.url = hostUrl;
        }
        if (this.request.url == null) {
            this.request.url = this.request.defaultToWebFl == false ? lib_1.ContextInfo.siteAbsoluteUrl : lib_1.ContextInfo.webAbsoluteUrl;
        }
        else if (/\/_api\//.test(this.request.url)) {
            var url = this.request.url.toLowerCase().split("/_api/");
            if (lib_1.ContextInfo.isAppWeb && url[0] != lib_1.ContextInfo.webAbsoluteUrl.toLowerCase()) {
                this.requestUrl = lib_1.ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" +
                    url[1] + endpoint + qs.replace(/{{Target}}/g, url[0]);
            }
            else {
                this.requestUrl = this.request.url + (this.request.endpoint ? "/" + this.request.endpoint : "");
            }
            return;
        }
        if (this.request.url.indexOf("http") != 0) {
            this.request.url = this.getDomainUrl() + this.request.url;
        }
        if (lib_1.ContextInfo.isAppWeb && this.request.url != lib_1.ContextInfo.webAbsoluteUrl) {
            this.requestUrl = template
                .replace(/{{Url}}/g, lib_1.ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)" + endpoint)
                .replace(/{{TargetUrl}}/g, qs.replace(/{{Target}}/g, this.request.url));
        }
        else {
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
var XHRRequest = (function () {
    function XHRRequest(asyncFl, targetInfo, callback) {
        this.asyncFl = asyncFl;
        this.onRequestCompleted = callback || targetInfo.request.callback;
        this.targetInfo = targetInfo;
        this.xhr = this.createXHR();
        this.execute();
    }
    Object.defineProperty(XHRRequest.prototype, "completedFl", {
        get: function () { return this.xhr ? this.xhr.readyState == 4 : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "response", {
        get: function () { return this.xhr ? this.xhr.response : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "request", {
        get: function () { return this.xhr ? this.xhr : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "requestData", {
        get: function () { return this.targetInfo.requestData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "requestUrl", {
        get: function () { return this.xhr ? this.xhr.responseURL : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "status", {
        get: function () { return this.xhr ? this.xhr.status : null; },
        enumerable: true,
        configurable: true
    });
    XHRRequest.prototype.createXHR = function () {
        if (typeof (XMLHttpRequest) !== "undefined") {
            return new XMLHttpRequest();
        }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
        catch (e) { }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        }
        catch (e) { }
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) { }
        throw new Error("This browser does not support xml http requests.");
    };
    XHRRequest.prototype.defaultHeaders = function () {
        if (this.targetInfo.requestHeaders) {
            for (var header in this.targetInfo.requestHeaders) {
                this.xhr.setRequestHeader(header, this.targetInfo.requestHeaders[header]);
            }
        }
        else {
            this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
            this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
        }
        this.xhr.setRequestHeader("X-HTTP-Method", this.targetInfo.requestMethod);
        if (this.targetInfo.request.requestDigest) {
            this.xhr.setRequestHeader("X-RequestDigest", this.targetInfo.request.requestDigest);
        }
        else {
            var requestDigest = lib_1.ContextInfo.document.querySelector("#__REQUESTDIGEST");
            requestDigest = requestDigest ? requestDigest.value : "";
            this.xhr.setRequestHeader("X-RequestDigest", requestDigest);
        }
        if (this.targetInfo.requestMethod == "DELETE" || this.targetInfo.requestMethod == "MERGE") {
            this.xhr.setRequestHeader("IF-MATCH", "*");
        }
    };
    XHRRequest.prototype.execute = function () {
        var _this = this;
        if (this.xhr == null) {
            return null;
        }
        this.xhr.open(this.targetInfo.requestMethod == "GET" ? "GET" : "POST", this.targetInfo.requestUrl, this.asyncFl);
        if (this.asyncFl) {
            this.xhr.onreadystatechange = function () {
                if (_this.xhr.readyState == 4) {
                    _this.onRequestCompleted ? _this.onRequestCompleted(_this) : null;
                }
            };
        }
        if (this.targetInfo.request.bufferFl && this.asyncFl) {
            this.xhr.responseType = "arraybuffer";
        }
        else {
            this.defaultHeaders();
            if (this.targetInfo.requestData && typeof (this.targetInfo.requestData) !== "string") {
                this.targetInfo.requestData = this.targetInfo.requestData.byteLength ? this.targetInfo.requestData : JSON.stringify(this.targetInfo.requestData);
            }
        }
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
var _JSLink = (function () {
    function _JSLink(cfg) {
        if (cfg) {
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
    _JSLink.prototype.getTemplate = function () {
        var template = {};
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
        if (template.Templates && template.Templates.Fields) {
            var fields = {};
            for (var _i = 0, _a = template.Templates.Fields; _i < _a.length; _i++) {
                var field = _a[_i];
                fields[field.Name] = {};
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
            template.Templates.Fields = fields;
        }
        return template;
    };
    _JSLink.prototype.register = function () {
        var templateManager = lib_1.ContextInfo.window.SPClientTemplates;
        templateManager = templateManager ? templateManager.TemplateManager : null;
        if (templateManager) {
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
var _List = (function (_super) {
    __extends(_List, _super);
    function _List(listName, targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";
        _this.addMethods(_this, { __metadata: { type: "list" } });
        return _this;
    }
    _List.getByEntityName = function (entityTypeName, callback, targetInfo) {
        var query = (new web_1.Web(targetInfo))
            .Lists()
            .query({
            Filter: "EntityTypeName eq '" + entityTypeName + "'",
            Top: 1
        });
        if (typeof (callback) != "function") {
            var list = query.executeAndWait();
            return list.results ? list.results[0] : list;
        }
        query.execute(function (lists) {
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
var _Navigation = (function (_super) {
    __extends(_Navigation, _super);
    function _Navigation(url, targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "navigation";
        if (url) {
            _this.targetInfo.url = url;
        }
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
var _PeopleManager = (function (_super) {
    __extends(_PeopleManager, _super);
    function _PeopleManager(targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "sp.userprofiles.peoplemanager";
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
var _PeoplePicker = (function (_super) {
    __extends(_PeoplePicker, _super);
    function _PeoplePicker(targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
        _this.targetInfo.overrideDefaultRequestToHostFl = true;
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
var _ProfileLoader = (function (_super) {
    __extends(_ProfileLoader, _super);
    function _ProfileLoader(targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
        _this.targetInfo.method = "POST";
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
var _Search = (function (_super) {
    __extends(_Search, _super);
    function _Search(url, targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "search";
        if (url) {
            _this.targetInfo.url = url;
        }
        _this.addMethods(_this, { __metadata: { type: "search" } });
        return _this;
    }
    _Search.prototype.getQuery = function (parameters) {
        var query = "";
        for (var key in parameters) {
            query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
        }
        return [query];
    };
    _Search.prototype.searchquery = function (settings) {
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: utils_1.RequestType.GetReplace
        }, this.getQuery(settings));
    };
    _Search.prototype.suggest = function (settings) {
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
var _Site = (function (_super) {
    __extends(_Site, _super);
    function _Site(url, targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "site";
        if (url) {
            _this.targetInfo.url = url;
        }
        _this.addMethods(_this, { __metadata: { type: "site" } });
        return _this;
    }
    _Site.prototype.getRootWeb = function () { return new _1.Web(null, this.targetInfo); };
    _Site.prototype.hasAccess = function (permissions) {
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
var _SocialFeed = (function (_super) {
    __extends(_SocialFeed, _super);
    function _SocialFeed(targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "social.feed";
        _this.addMethods(_this, { __metadata: { type: "socialfeed" } });
        return _this;
    }
    _SocialFeed.prototype.postToFeed = function (accountName, creationData) {
        var postInfo = { ID: null, creationData: creationData };
        postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
        postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };
        return this.executeMethod("postToMyFeed", {
            argNames: ["restCreationData"],
            name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [postInfo]);
    };
    _SocialFeed.prototype.postToMyFeed = function (creationData) {
        var postInfo = { ID: null, creationData: creationData };
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
var _UserProfile = (function (_super) {
    __extends(_UserProfile, _super);
    function _UserProfile(targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
        _this.targetInfo.method = "POST";
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
var _Utility = (function (_super) {
    __extends(_Utility, _super);
    function _Utility(url, targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "SP.Utilities.Utility";
        if (url) {
            _this.targetInfo.url = url;
        }
        _this.addMethods(_this, { __metadata: { type: "utility" } });
        return _this;
    }
    _Utility.prototype.createWikiPage = function (listUrl, content) {
        if (content === void 0) { content = ""; }
        var parameters = {
            ServerRelativeUrl: listUrl,
            WikiHtmlContent: content
        };
        return this.executeMethod("createWikiPage", {
            argNames: ["parameters"],
            name: "SP.Utilities.Utility.CreateWikiPageInContextWeb",
            replaceEndpointFl: true,
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [parameters]);
    };
    _Utility.prototype.sendEmail = function (properties) {
        for (var _i = 0, _a = ["To", "CC", "BCC"]; _i < _a.length; _i++) {
            var propName = _a[_i];
            var propValue = properties[propName];
            if (propValue) {
                if (typeof (propValue) === "string") {
                    properties[propName] = { 'results': [propValue] };
                }
                else {
                    properties[propName] = { 'results': propValue };
                }
            }
        }
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
var _Dependencies = (function () {
    function _Dependencies(callback) {
        this._callback = null;
        this._callback = callback;
        this.MAX_WAIT = 5;
        this.SCRIPTS = [
            "MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"
        ];
        this.loadDependencies();
    }
    Object.defineProperty(_Dependencies.prototype, "pageContextExistsFl", {
        get: function () { return lib_1.ContextInfo.webAbsoluteUrl != ""; },
        enumerable: true,
        configurable: true
    });
    _Dependencies.prototype.loadDependencies = function () {
        if (this.pageContextExistsFl) {
            this._callback ? this._callback() : null;
        }
        else {
            for (var fileName in this.SCRIPTS) {
                var elScript = lib_1.ContextInfo.document.createElement("script");
                elScript.setAttribute("src", "/_layouts/15/" + fileName);
                elScript.setAttribute("type", "text/javascript");
                lib_1.ContextInfo.document.head.appendChild(elScript);
            }
            this.waitForPageContext();
        }
    };
    _Dependencies.prototype.waitForPageContext = function () {
        var counter = 0;
        var intervalId = lib_1.ContextInfo.window.setInterval(function () {
            if (this.pageContextExists || ++counter >= this.MAX_WAIT) {
                lib_1.ContextInfo.window.clearInterval(intervalId);
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
var _FieldSchemaXML = (function () {
    function _FieldSchemaXML() {
        var _this = this;
        this._resolve = null;
        this.generate = function (fieldInfo) {
            return new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                if (fieldInfo.schemaXml) {
                    resolve(fieldInfo.schemaXml);
                }
                else {
                    var props = {};
                    props["ID"] = "{" + lib_1.ContextInfo.generateGUID() + "}";
                    props["Name"] = fieldInfo.name;
                    props["Required"] = fieldInfo.required ? "TRUE" : "FALSE";
                    props["StaticName"] = fieldInfo.name;
                    props["DisplayName"] = fieldInfo.title;
                    switch (fieldInfo.type) {
                        case spCfg_1.SPCfgFieldType.Boolean:
                            _this.createBoolean(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Calculated:
                            _this.createCalculated(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Choice:
                            _this.createChoice(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Date:
                            _this.createDate(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Lookup:
                            _this.createLookup(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.MMS:
                            _this.createMMS(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Note:
                            _this.createNote(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Number:
                            _this.createNumber(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Text:
                            _this.createText(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.Url:
                            _this.createUrl(fieldInfo, props);
                            break;
                        case spCfg_1.SPCfgFieldType.User:
                            _this.createUser(fieldInfo, props);
                            break;
                        default:
                            resolve();
                            break;
                    }
                }
            });
        };
        this.createBoolean = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "Boolean";
            schemaXml = "<Field " + _this.toString(props) + ">";
            if (fieldInfo.defaultValue) {
                schemaXml += "<Default>" + fieldInfo.defaultValue + "</Default>";
            }
            schemaXml += "</Field>";
            _this._resolve(schemaXml);
        };
        this.createCalculated = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "Calculated";
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
            _this._resolve(schemaXml);
        };
        this.createChoice = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = fieldInfo.multi ? "MultiChoice" : "Choice";
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
            _this._resolve(schemaXml);
        };
        this.createDate = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "DateTime";
            props["Format"] = fieldInfo.format == __1.SPTypes.DateFormat.DateTime ? "DateTime" : "DateOnly";
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.createLookup = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = fieldInfo.multi ? "LookupMulti" : "Lookup";
            if (fieldInfo.fieldRef) {
                props["FieldRef"] = fieldInfo.fieldRef;
            }
            if (fieldInfo.multi) {
                props["Mult"] = "TRUE";
            }
            if (fieldInfo.showField) {
                props["ShowField"] = fieldInfo.showField;
            }
            if (fieldInfo.listName) {
                (new lib_1.Web(fieldInfo.webUrl))
                    .Lists(fieldInfo.listName)
                    .query({
                    Expand: ["ParentWeb"]
                })
                    .execute(function (list) {
                    props["List"] = list.Id;
                    if (fieldInfo.webUrl) {
                        props["WebId"] = list.ParentWeb.Id;
                    }
                    _this._resolve("<Field " + _this.toString(props) + " />");
                });
            }
            else {
                props["List"] = fieldInfo.listId;
                _this._resolve("<Field " + _this.toString(props) + " />");
            }
        };
        this.createMMS = function (fieldInfo, props) {
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
            var schemaXmlValue = "<Field " + _this.toString(valueProps) + " />";
            props["Type"] = "TaxonomyFieldType";
            props["ShowField"] = "Term" + (fieldInfo.locale ? fieldInfo.locale.toString() : "1033");
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
            _this._resolve([schemaXmlValue, schemaXml]);
        };
        this.createNote = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "Note";
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
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.createNumber = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "Number";
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
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.createText = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "Text";
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.createUrl = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "URL";
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.createUser = function (fieldInfo, props) {
            var schemaXml = null;
            props["Type"] = "User";
            if (fieldInfo.multi) {
                props["Mult"] = "TRUE";
            }
            if (fieldInfo.selectionMode != null) {
                props["UserSelectionMode"] = fieldInfo.selectionMode;
            }
            if (fieldInfo.selectionScope != null) {
                props["UserSelectionScope"] = fieldInfo.selectionScope;
            }
            schemaXml = "<Field " + _this.toString(props) + " />";
            _this._resolve(schemaXml);
        };
        this.toString = function (props) {
            var properties = "";
            for (var key in props) {
                var value = props[key];
                properties += (properties ? " " : "") + key + "=\"" + props[key] + "\"";
            }
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
exports.JSLink = {
    _hideEventFl: false,
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
    disableEdit: function (ctx, field, requireValueFl) {
        var fieldValue = ctx.CurrentFieldValue;
        if (fieldValue) {
            switch (ctx.CurrentFieldSchema.Type) {
                case "MultiChoice":
                    var regExp = new RegExp(mapper_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString, "g");
                    fieldValue = ctx.CurrentFieldValue
                        .replace(regExp, "; ")
                        .replace(/^; /g, "")
                        .replace(/; $/g, "");
                    break;
                case "Note":
                    fieldValue = "<div>" + ctx.CurrentFieldValue.replace(/\n/g, "<br />") + "</div>";
                    break;
                case "User":
                case "UserMulti":
                    for (var i = 0; i < ctx.CurrentFieldValue.length; i++) {
                        var userValue = ctx.CurrentFieldValue[i];
                        fieldValue +=
                            userValue.EntityData.SPUserID +
                                mapper_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString +
                                userValue.DisplayText +
                                ((i == ctx.CurrentFieldValue.length - 1 ? "" : mapper_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString));
                    }
                    break;
            }
            ;
            ctx.CurrentFieldValue = fieldValue;
        }
        var controlMode = mapper_1.SPTypes.ControlMode.Display;
        if (requireValueFl && (fieldValue == null || fieldValue == "")) {
            controlMode = ctx.ControlMode;
        }
        return exports.JSLink.renderField(ctx, field, controlMode);
    },
    disableQuickEdit: function (ctx, field) {
        if (ctx.inGridMode) {
            field.AllowGridEditing = false;
            return "";
        }
        return exports.JSLink.renderField(ctx, field);
    },
    getListView: function (ctx) {
        var wp = exports.JSLink.getWebPart(ctx);
        if (wp) {
            wp = wp.querySelector(".ms-formtable");
        }
        return wp;
    },
    getListViewItems: function (ctx) {
        return ctx.ListData ? ctx.ListData.Row : [];
    },
    getListViewSelectedItems: function () {
        return lib_1.ContextInfo.window["SP"].ListOperation.Selection.getSelectedItems();
    },
    getWebPart: function (ctx) {
        return lib_1.ContextInfo.document.querySelector("#WebPart" + (ctx.FormUniqueId || ctx.wpq));
    },
    hideField: function (ctx, field) {
        if (!exports.JSLink._hideEventFl) {
            exports.JSLink._hideEventFl = true;
            lib_1.ContextInfo.window.addEventListener("load", function () {
                var fieldElements = lib_1.ContextInfo.document.querySelectorAll(".hide-field");
                for (var _i = 0, fieldElements_1 = fieldElements; _i < fieldElements_1.length; _i++) {
                    var fieldElement = fieldElements_1[_i];
                    var parentRow = fieldElement.parentNode && fieldElement.parentNode.parentNode ? fieldElement.parentNode.parentNode : null;
                    if (parentRow) {
                        if (fieldElement.parentNode.getAttribute("data-field-name") != parentRow.getAttribute("data-field-name")) {
                            while (parentRow && parentRow.nodeName.toLowerCase() != "tr") {
                                parentRow = parentRow.parentNode;
                            }
                        }
                        if (parentRow) {
                            parentRow.style.display = "none";
                        }
                    }
                }
            });
        }
    },
    removeField: function (ctx, field) {
        exports.JSLink.hideField(ctx, field);
        return "<div class='hide-field'></div>";
    },
    renderField: function (ctx, field, formType) {
        var fieldType = field ? field.Type : (ctx.CurrentFieldSchema ? ctx.CurrentFieldSchema.Type : null);
        formType = formType ? formType : ctx.ControlMode;
        if (exports.JSLink._fieldToMethodMapper[fieldType] && exports.JSLink._fieldToMethodMapper[fieldType][formType]) {
            var defaultHtml = exports.JSLink._fieldToMethodMapper[fieldType][formType](ctx);
            if (defaultHtml) {
                return defaultHtml;
            }
        }
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
        var currentItem = ctx.CurrentItem || ctx.ListData.Items[0];
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
var _ListForm = (function () {
    function _ListForm(props) {
        var _this = this;
        this._cacheData = null;
        this._info = null;
        this._props = null;
        this._resolve = null;
        this.load = function () {
            _this._info = {
                item: _this._props.item,
                query: _this._props.query || {}
            };
            _this.loadFromCache();
            _this.loadListData().then(function () {
                if (_this._props.fields) {
                    _this.processFields();
                    _this.loadItem();
                }
                else {
                    _this.loadDefaultContentType();
                }
            });
        };
        this.loadDefaultContentType = function () {
            if (_this._cacheData && _this._cacheData.ct) {
                try {
                    var ct = parse_1.parse(_this._cacheData.ct);
                    _this.loadDefaultFields(ct.results[0]);
                    return;
                }
                catch (_a) {
                    sessionStorage.removeItem(_this._props.cacheKey);
                }
            }
            _this._info.list.ContentTypes()
                .query({
                Expand: ["FieldLinks"],
                Top: 1
            })
                .execute(function (ct) {
                if (_this._props.cacheKey) {
                    _this._cacheData = _this._cacheData || {};
                    _this._cacheData.ct = ct.stringify();
                    sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                }
                _this.loadDefaultFields(ct.results[0]);
            });
        };
        this.loadDefaultFields = function (ct) {
            var fields = ct ? ct.FieldLinks.results : [];
            var formFields = {};
            for (var i = 0; i < fields.length; i++) {
                var fieldLink = fields[i];
                var field = _this._info.fields[fieldLink.Name];
                if (field) {
                    if (field.InternalName == "ContentType") {
                        continue;
                    }
                    if (field.Hidden || fieldLink.Hidden) {
                        continue;
                    }
                    formFields[field.InternalName] = field;
                }
            }
            _this._info.fields = formFields;
            _this.loadItem();
        };
        this.loadFieldData = function (fields) {
            _this._info.fields = {};
            for (var i = 0; i < fields.results.length; i++) {
                var field = fields.results[i];
                _this._info.fields[field.InternalName] = field;
            }
        };
        this.loadFromCache = function () {
            if (_this._props.cacheKey) {
                var data = sessionStorage.getItem(_this._props.cacheKey);
                if (data) {
                    try {
                        _this._cacheData = JSON.parse(data);
                        _this._info = _this._info || {};
                        _this._info.list = parse_1.parse(_this._cacheData.list);
                        _this.loadFieldData(parse_1.parse(_this._cacheData.fields));
                    }
                    catch (_a) {
                        sessionStorage.removeItem(_this._props.cacheKey);
                    }
                }
            }
        };
        this.loadItem = function () {
            if (_this._info.item) {
                _this._resolve(_this._info);
            }
            else if (_this._props.itemId > 0) {
                _this._info.query = _this._props.query || {};
                _this._info.query.Select = _this._info.query.Select || ["*"];
                if (_this._props.loadAttachments) {
                    _this._info.query.Expand = _this._info.query.Expand || [];
                    _this._info.query.Expand.push("AttachmentFiles");
                    _this._info.query.Select.push("Attachments");
                    _this._info.query.Select.push("AttachmentFiles");
                }
                _this._info.list.Items(_this._props.itemId)
                    .query(_this._info.query)
                    .execute(function (item) {
                    _this._info.attachments = item.AttachmentFiles.results;
                    _this._info.item = item;
                    _this._resolve(_this._info);
                });
            }
            else {
                _this._resolve(_this._info);
            }
        };
        this.loadListData = function () {
            return new Promise(function (resolve, reject) {
                if (_this._info.list && _this._info.fields) {
                    resolve();
                    return;
                }
                var list = (new lib_1.Web(_this._props.webUrl))
                    .Lists(_this._props.listName)
                    .execute(function (list) {
                    _this._info.list = list;
                });
                list.Fields()
                    .execute(function (fields) {
                    if (_this._props.cacheKey) {
                        _this._cacheData = _this._cacheData || {};
                        _this._cacheData.fields = fields.stringify();
                        _this._cacheData.list = _this._info.list.stringify();
                        sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                    }
                    _this.loadFieldData(fields);
                    resolve();
                });
            });
        };
        this.processFields = function () {
            var formFields = {};
            for (var i = 0; i < _this._props.fields.length; i++) {
                var field = _this._info.fields[_this._props.fields[i]];
                if (field) {
                    formFields[field.InternalName] = field;
                }
            }
            _this._info.fields = formFields;
        };
        this._props = props || {};
        this._props.fields = this._props.fields;
        return new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this.load();
        });
    }
    _ListForm.loadAttachments = function (info) {
        return new Promise(function (resolve, reject) {
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Items(itemId)
                    .AttachmentFiles()
                    .execute(function (attachments) {
                    resolve(attachments.results || []);
                });
            }
            else {
                resolve([]);
            }
        });
    };
    _ListForm.refreshItem = function (info) {
        return new Promise(function (resolve, reject) {
            info.list.Items(info.item.Id).query(info.query).execute(function (item) {
                info.item = item;
                resolve(info);
            });
        });
    };
    _ListForm.prototype.removeAttachments = function (info, attachments) {
        return new Promise(function (resolve, reject) {
            var web = new lib_1.Web(info.webUrl);
            for (var i = 0; i < attachments.length; i++) {
                var attachment = attachments[i];
                web.getFileByServerRelativeUrl(attachment.ServerRelativeUrl)
                    .delete()
                    .execute(true);
            }
            web.done(function () {
                resolve();
            });
        });
    };
    _ListForm.saveAttachments = function (info, attachmentInfo) {
        return new Promise(function (resolve, reject) {
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                var attachments = (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Items(itemId)
                    .AttachmentFiles();
                for (var i = 0; i < attachmentInfo.length; i++) {
                    var attachment = attachmentInfo[i];
                    attachments.add(attachment.name, attachment.data).execute(true);
                }
                attachments.done(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    resolve(args);
                });
            }
            else {
                resolve();
            }
        });
    };
    _ListForm.saveItem = function (info, formValues) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (info.item && info.item.update) {
                info.item.update(formValues).execute(function (response) {
                    _this.refreshItem(info).then(function (info) {
                        resolve(info);
                    });
                });
            }
            else {
                formValues["__metadata"] = { type: info.list.ListItemEntityTypeFullName };
                info.list.Items().add(formValues)
                    .execute(function (item) {
                    info.item = item;
                    _this.refreshItem(info).then(function (info) {
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
var _ListFormField = (function () {
    function _ListFormField(props) {
        var _this = this;
        this._fieldInfo = null;
        this._resolve = null;
        this.load = function () {
            if (_this._fieldInfo.field) {
                _this.processField();
            }
            else {
                (new lib_1.Web(_this._fieldInfo.webUrl))
                    .Lists(_this._fieldInfo.listName)
                    .Fields()
                    .getByInternalNameOrTitle(_this._fieldInfo.name)
                    .execute(function (field) {
                    _this._fieldInfo.field = field;
                    _this.processField();
                });
            }
        };
        this.processField = function () {
            _this._fieldInfo.defaultValue = _this._fieldInfo.field.DefaultValue;
            _this._fieldInfo.readOnly = _this._fieldInfo.field.ReadOnlyField;
            _this._fieldInfo.required = _this._fieldInfo.field.Required ? true : false;
            _this._fieldInfo.title = _this._fieldInfo.field.Title;
            _this._fieldInfo.type = _this._fieldInfo.field.FieldTypeKind;
            _this._fieldInfo.typeAsString = _this._fieldInfo.field.TypeAsString;
            switch (_this._fieldInfo.type) {
                case __1.SPTypes.FieldType.Choice:
                case __1.SPTypes.FieldType.MultiChoice:
                    var choices = _this._fieldInfo.field.Choices;
                    _this._fieldInfo.choices = (choices ? choices.results : null) || [];
                    _this._fieldInfo.multi = _this._fieldInfo.type == __1.SPTypes.FieldType.MultiChoice;
                    break;
                case __1.SPTypes.FieldType.DateTime:
                    var fldDate = _this._fieldInfo.field;
                    _this._fieldInfo.showTime = fldDate.DisplayFormat == __1.SPTypes.DateFormat.DateTime;
                    break;
                case __1.SPTypes.FieldType.Lookup:
                    var fldLookup = _this._fieldInfo.field;
                    _this._fieldInfo.lookupField = fldLookup.LookupField;
                    _this._fieldInfo.lookupListId = fldLookup.LookupList;
                    _this._fieldInfo.lookupWebId = fldLookup.LookupWebId;
                    _this._fieldInfo.multi = fldLookup.AllowMultipleValues;
                    break;
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
                case __1.SPTypes.FieldType.Note:
                    var fldNote = _this._fieldInfo.field;
                    _this._fieldInfo.multiline = true;
                    _this._fieldInfo.richText = fldNote.RichText;
                    _this._fieldInfo.rows = fldNote.NumberOfLines;
                    break;
                case __1.SPTypes.FieldType.Text:
                    _this._fieldInfo.multiline = false;
                    _this._fieldInfo.richText = false;
                    _this._fieldInfo.rows = 1;
                    break;
                case __1.SPTypes.FieldType.User:
                    var fldUser = _this._fieldInfo.field;
                    _this._fieldInfo.allowGroups = fldUser.SelectionMode == __1.SPTypes.FieldUserSelectionType.PeopleAndGroups;
                    _this._fieldInfo.multi = fldUser.AllowMultipleValues;
                    break;
                default:
                    if (_this._fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                        var fldMMS = _this._fieldInfo.field;
                        _this._fieldInfo.multi = fldMMS.AllowMultipleValues;
                        _this._fieldInfo.termId = fldMMS.IsAnchorValid ? fldMMS.AnchorId : fldMMS.TermSetId;
                        _this._fieldInfo.termSetId = fldMMS.TermSetId;
                        _this._fieldInfo.termStoreId = fldMMS.SspId;
                    }
                    break;
            }
            _this._resolve(_this._fieldInfo);
        };
        this._fieldInfo = props || {};
        return new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            if (_this._fieldInfo.field) {
                _this.processField();
            }
            else {
                _this.load();
            }
        });
    }
    _ListFormField.loadLookupData = function (info, queryTop) {
        return new Promise(function (resolve, reject) {
            (new lib_1.Site())
                .openWebById(info.lookupWebId)
                .execute(function (web) {
                web.Lists()
                    .getById(info.lookupListId)
                    .Items()
                    .query({
                    GetAllItems: true,
                    Select: ["ID", info.lookupField],
                    Top: queryTop > 0 && queryTop <= 5000 ? queryTop : 500
                })
                    .execute(function (items) {
                    resolve(items.results);
                });
            });
        });
    };
    _ListFormField.loadMMSData = function (info) {
        return new Promise(function (resolve, reject) {
            taxonomy_1.Taxonomy.getTermSetById(info.termStoreId, info.termSetId).then(function (termSet) {
                var root = taxonomy_1.Taxonomy.findById(termSet, info.termId);
                if (root == null) {
                    root = taxonomy_1.Taxonomy.findById(termSet, info.termSetId);
                }
                resolve(taxonomy_1.Taxonomy.toArray(root));
            });
        });
    };
    _ListFormField.loadMMSValueField = function (info) {
        return new Promise(function (resolve, reject) {
            if (info.multi) {
                (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Fields()
                    .getByInternalNameOrTitle(info.name + "_0")
                    .execute(function (field) {
                    if (field.existsFl) {
                        resolve(field);
                    }
                    else {
                        console.log("[gd-sprest] Unable to find the hidden value field for '" + info.name + "'.");
                    }
                });
            }
            else {
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
exports.Loader = {
    loaded: false,
    waitForSPLibs: function (callback, timeout, loadLibraries) {
        var counter = 0;
        loadLibraries = typeof (loadLibraries) === "boolean" ? loadLibraries : false;
        timeout = typeof (timeout) === "number" ? timeout : 2500;
        var maxLoops = timeout / 25;
        if (_this.loaded) {
            callback();
            return;
        }
        if (loadLibraries) {
            ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"].every(function (fileName) {
                var el = lib_1.ContextInfo.document.createElement("script");
                el.setAttribute("src", "/_layouts/15/" + fileName);
                el.setAttribute("type", "text/javascript");
                lib_1.ContextInfo.document.head.appendChild(el);
                return true;
            });
        }
        var intervalId = setInterval(function () {
            var maxLoopFl = ++counter > maxLoops;
            if (lib_1.ContextInfo.existsFl || maxLoopFl) {
                clearInterval(intervalId);
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
var _WebPart = (function () {
    function _WebPart(props) {
        var _this = this;
        this._props = null;
        this._wp = null;
        this.addHelpLink = function () {
            if (_this._props.helpProps) {
                var link = document.querySelector("div[webpartid='" + _this._wp.wpId + "'] a[title='Edit Snippet']");
                if (link) {
                    var helpLink = document.createElement("a");
                    helpLink.href = _this._props.helpProps.url || "#";
                    helpLink.style.paddingLeft = "10px";
                    helpLink.setAttribute("role", "button");
                    helpLink.title = _this._props.helpProps.title || "Help";
                    helpLink.innerHTML = "<span class='ms-metadata'>" + helpLink.title + "</span>";
                    helpLink.target = "_blank";
                    link.parentElement.appendChild(helpLink);
                }
            }
        };
        this.getWebPart = function (wpId) {
            return new Promise(function (resolve, reject) {
                var context = SP.ClientContext.get_current();
                var page = context.get_web().getFileByServerRelativeUrl(lib_1.ContextInfo.serverRequestPath);
                var wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
                var wpDef = wpMgr.get_webParts().getById(wpId);
                var wp = wpDef.get_webPart();
                context.load(wp, "Properties");
                context.executeQueryAsync(function () {
                    resolve({
                        Context: context,
                        Properties: wp.get_properties(),
                        WebPart: wp,
                        WebPartDefinition: wpDef,
                        WebPartId: wp.get_id()
                    });
                }, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    reject(args[1] ? args[1].get_message() : "");
                });
            });
        };
        this.getWebPartId = function (el) {
            while (el) {
                var wpId = el.getAttribute("webpartid");
                if (wpId) {
                    return wpId;
                }
                el = el.parentElement;
            }
            return "";
        };
        this.getWebPartInfo = function () {
            var targetInfo = {
                cfg: null,
                el: null,
                wpId: null
            };
            if (_this._props.elementId) {
                var elements = document.querySelectorAll("#" + _this._props.elementId);
                for (var i = 0; i < elements.length; i++) {
                    var elWebPart = elements[i];
                    if (elWebPart.getAttribute("data-isConfigured")) {
                        continue;
                    }
                    var wpId = _this.getWebPartId(elWebPart);
                    if (wpId) {
                        var elCfg = _this._props.cfgElementId ? elWebPart.parentElement.querySelector("#" + _this._props.cfgElementId) : null;
                        if (elCfg) {
                            try {
                                var cfg = JSON.parse(elCfg.innerText.trim());
                                if (cfg.WebPartId) {
                                    if (cfg.WebPartId == wpId) {
                                        targetInfo = {
                                            cfg: cfg,
                                            el: elWebPart,
                                            wpId: wpId
                                        };
                                        break;
                                    }
                                }
                                else {
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
                                targetInfo = {
                                    cfg: {
                                        WebPartId: wpId
                                    },
                                    el: elWebPart,
                                    wpId: wpId
                                };
                                console.log("[sp-webpart] Error parsing the configuration for element '" + _this._props.cfgElementId + "'.");
                            }
                            break;
                        }
                        else {
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
                if (elements.length == 0) {
                    console.log("[sp-webpart] Error - Unable to find elements with id '" + _this._props.elementId + "'.");
                }
            }
            else {
                console.log("[sp-webpart] The target element id is not defined.");
            }
            if (targetInfo.el) {
                targetInfo.el.setAttribute("data-isConfigured", "true");
            }
            return targetInfo;
        };
        this.isEditMode = function () {
            var formName = MSOWebPartPageFormName ? MSOWebPartPageFormName : "";
            var form = document.forms[MSOWebPartPageFormName];
            if (form) {
                var wikiPageMode = form._wikiPageMode ? form._wikiPageMode.value : null;
                var wpPageMode = form.MSOLayout_InDesignMode ? form.MSOLayout_InDesignMode.value : null;
                return wikiPageMode == "Edit" || wpPageMode == "1";
            }
            return false;
        };
        this.render = function () {
            var element = null;
            _this._wp = _this.getWebPartInfo();
            if (_this._wp == null || _this._wp.el == null) {
                console.log("[sp-webpart] The target webpart element '" + _this._props.elementId + "' was not found.");
                return;
            }
            var returnVal = null;
            if (_this.isEditMode()) {
                _this.addHelpLink();
                if (_this._props.onRenderEdit) {
                    returnVal = _this._props.onRenderEdit(_this._wp);
                }
            }
            else {
                if (_this._wp.cfg || (_this._props.cfgElementId || "").length == 0) {
                    returnVal = _this._props.onRenderDisplay(_this._wp);
                }
                else {
                    _this._wp.el.innerHTML = '<h3>Please edit the page and configure the webpart.</h3>';
                }
            }
            if (returnVal && returnVal.then) {
                returnVal.then(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this._props.onPostRender ? _this._props.onPostRender(_this._wp) : null;
                });
            }
            else {
                _this._props.onPostRender ? _this._props.onPostRender(_this._wp) : null;
            }
        };
        this._props = props || {};
        window.addEventListener("load", function () {
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
var global = Lib.ContextInfo.window.$REST;
if (global == null || global.__ver == null || global.__ver < exports.$REST.__ver) {
    Lib.ContextInfo.window.$REST = exports.$REST;
}
//# sourceMappingURL=rest.js.map

/***/ })
/******/ ]);