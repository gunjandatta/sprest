/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.$REST = undefined;

	var _lib = __webpack_require__(1);

	/**
	 * SharePoint REST Library
	 */
	var $REST = exports.$REST = {
	    ContextInfo: _lib.ContextInfo,
	    DefaultRequestToHostFl: false,
	    Email: _lib.Email,
	    Helper: _lib.Helper,
	    List: _lib.List,
	    PeopleManager: _lib.PeopleManager,
	    PeoplePicker: _lib.PeoplePicker,
	    ProfileLoader: _lib.ProfileLoader,
	    Search: _lib.Search,
	    Site: _lib.Site,
	    SocialFeed: _lib.SocialFeed,
	    UserProfile: _lib.UserProfile,
	    Web: _lib.Web
	};

	// Make the library globally available
	window["$REST"] = $REST;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _contextInfo = __webpack_require__(2);

	Object.keys(_contextInfo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _contextInfo[key];
	    }
	  });
	});

	var _email = __webpack_require__(3);

	Object.keys(_email).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _email[key];
	    }
	  });
	});

	var _helper = __webpack_require__(15);

	Object.keys(_helper).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _helper[key];
	    }
	  });
	});

	var _list = __webpack_require__(16);

	Object.keys(_list).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _list[key];
	    }
	  });
	});

	var _peopleManager = __webpack_require__(17);

	Object.keys(_peopleManager).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _peopleManager[key];
	    }
	  });
	});

	var _peoplePicker = __webpack_require__(18);

	Object.keys(_peoplePicker).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _peoplePicker[key];
	    }
	  });
	});

	var _profileLoader = __webpack_require__(19);

	Object.keys(_profileLoader).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _profileLoader[key];
	    }
	  });
	});

	var _search = __webpack_require__(20);

	Object.keys(_search).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _search[key];
	    }
	  });
	});

	var _site = __webpack_require__(21);

	Object.keys(_site).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _site[key];
	    }
	  });
	});

	var _socialFeed = __webpack_require__(22);

	Object.keys(_socialFeed).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _socialFeed[key];
	    }
	  });
	});

	var _userProfile = __webpack_require__(23);

	Object.keys(_userProfile).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _userProfile[key];
	    }
	  });
	});

	var _web = __webpack_require__(24);

	Object.keys(_web).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _web[key];
	    }
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*********************************************************************************************************************************/
	// Context Information
	// This class will return the _spPageContextInfo.
	/*********************************************************************************************************************************/
	var ContextInfo = exports.ContextInfo = {
	    // The current context information
	    _contextInfo: window["_spPageContextInfo"] || {
	        existsFl: false,
	        isAppWeb: false,
	        siteAbsoluteUrl: "",
	        siteServerRelativeUrl: "",
	        userId: 0,
	        webAbsoluteUrl: "",
	        webServerRelativeUrl: ""
	    },

	    // Alerts Enabled
	    alertsEnabled: undefined._contextInfo.alertsEnabled,

	    // Allow Silverlight Prompt
	    allowSilverlightPrompt: undefined._contextInfo.allowSilverlightPrompt == "True" ? true : false,

	    // Client Server Time Delta
	    clientServerTimeDelta: undefined._contextInfo.clientServerTimeDelta,

	    // Cross Domain Photos Enabled
	    crossDomainPhotosEnabled: undefined._contextInfo.crossDomainPhotosEnabled,

	    // Current Culture Name
	    currentCultureName: undefined._contextInfo.currentCultureName,

	    // Current Language
	    currentLanguage: undefined._contextInfo.currentLanguage,

	    // Current UI Culture Name
	    currentUICultureName: undefined._contextInfo.currentUICultureName,

	    // Environment
	    env: undefined._contextInfo.env,

	    // Exists Flag
	    existsFl: undefined._contextInfo.existsFl == null,

	    // Has Manage Web Permissions
	    hasManageWebPermissions: undefined._contextInfo.hasManageWebPermissions,

	    // Is Anonymous Guest User
	    isAnonymousGuestUser: undefined._contextInfo.isAnonymousGuestUser,

	    // Is App Web
	    isAppWeb: undefined._contextInfo.isAppWeb,

	    // Is Site Administrator
	    isSiteAdmin: undefined._contextInfo.isSiteAdmin,

	    // Layouts Url
	    layoutsUrl: undefined._contextInfo.layoutsUrl,

	    // Page Item Id
	    pageItemId: undefined._contextInfo.pageItemId,

	    // Page List Id
	    pageListId: undefined._contextInfo.pageListId,

	    // Page Personalization Scope
	    pagePersonalizationScope: undefined._contextInfo.pagePersonalizationScope,

	    // Profile Url
	    profileUrl: undefined._contextInfo.profileUrl,

	    // Server Request Path
	    serverRequestPath: undefined._contextInfo.serverRequestPath,

	    // Site Absolute Url
	    siteAbsoluteUrl: undefined._contextInfo.siteAbsoluteUrl,

	    // Site Client Tag
	    siteClientTag: undefined._contextInfo.siteClientTag,

	    // Site Server Relative Url
	    siteServerRelativeUrl: undefined._contextInfo.siteServerRelativeUrl,

	    // System User Key
	    systemUserKey: undefined._contextInfo.systemUserKey,

	    // Tenant App Version
	    tenantAppVersion: undefined._contextInfo.tenantAppVersion,

	    // Theme Cache Token
	    themeCacheToken: undefined._contextInfo.themeCacheToken,

	    // Update From Digest Page Loaded
	    updateFromDigestPageLoaded: undefined._contextInfo.updateFromDigestPageLoaded,

	    // User Id
	    userId: undefined._contextInfo.userId,

	    // User Login Name
	    userLoginName: undefined._contextInfo.userLoginName,

	    // Web Absolute Url
	    webAbsoluteUrl: undefined._contextInfo.webAbsoluteUrl,

	    // Web Language
	    webLanguage: undefined._contextInfo.webLanguage,

	    // Web Logo Url
	    webLogoUrl: undefined._contextInfo.webLogoUrl,

	    // Web Permissions Mask
	    webPermMask: undefined._contextInfo.webPermMask,

	    // Web Server Relative Url
	    webServerRelativeUrl: undefined._contextInfo.webServerRelativeUrl,

	    // Web Template
	    webTemplate: undefined._contextInfo.webTemplate,

	    // Web Title
	    webTitle: undefined._contextInfo.webTitle,

	    // Web UI Version
	    webUIVersion: undefined._contextInfo.webUIVersion
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Email = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(4);

	var _types = __webpack_require__(12);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************************************************************************************************************************/
	// Email
	// The SP.Utilities.Utility.SendEmail object.
	/*********************************************************************************************************************************/
	var _Email = function (_Base) {
	    _inherits(_Email, _Base);

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function _Email(targetInfo) {
	        _classCallCheck(this, _Email);

	        // Default the properties
	        var _this = _possibleConstructorReturn(this, (_Email.__proto__ || Object.getPrototypeOf(_Email)).call(this, targetInfo));
	        // Call the base constructor


	        _this.defaultToWebFl = true;
	        _this.responses = [];
	        _this.targetInfo.endpoint = "SP.Utilities.Utility.SendEmail";
	        return _this;
	    }

	    /*********************************************************************************************************************************/
	    // Methods
	    /*********************************************************************************************************************************/

	    // Method to send an email


	    _createClass(_Email, [{
	        key: "send",
	        value: function send(properties) {
	            // Parse the email properties
	            var _arr = ["To", "CC", "BCC"];
	            for (var _i = 0; _i < _arr.length; _i++) {
	                var propName = _arr[_i];
	                var propValue = properties[propName];

	                // Ensure the value exists
	                if (propValue) {
	                    // See if it's a string
	                    if (typeof propValue === "string") {
	                        // Add the results property
	                        properties[propName] = { 'results': [propValue] };
	                    }
	                    // Else, assume it's an array
	                    else {
	                            // Add the results property
	                            properties[propName] = { 'results': propValue };
	                        }
	                }
	            }

	            // Execute the method, and return the email object
	            return this.executeMethod("send", {
	                argNames: ["properties"],
	                name: "",
	                metadataType: "SP.Utilities.EmailProperties",
	                requestType: _types.RequestType.PostWithArgsInBody
	            }, [properties]);
	        }
	    }]);

	    return _Email;
	}(_utils.Base);

	var Email = exports.Email = new _Email();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _base = __webpack_require__(5);

	Object.keys(_base).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _base[key];
	    }
	  });
	});

	var _dependencies = __webpack_require__(6);

	Object.keys(_dependencies).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dependencies[key];
	    }
	  });
	});

	var _methodInfo = __webpack_require__(7);

	Object.keys(_methodInfo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _methodInfo[key];
	    }
	  });
	});

	var _oData = __webpack_require__(8);

	Object.keys(_oData).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _oData[key];
	    }
	  });
	});

	var _promise = __webpack_require__(9);

	Object.keys(_promise).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _promise[key];
	    }
	  });
	});

	var _request = __webpack_require__(10);

	Object.keys(_request).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _request[key];
	    }
	  });
	});

	var _targetInfo = __webpack_require__(11);

	Object.keys(_targetInfo).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _targetInfo[key];
	    }
	  });
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*********************************************************************************************************************************/
	// Base
	// This is the base class for all objects.
	/*********************************************************************************************************************************/
	var Base = exports.Base = function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Base(targetInfo) {
	        _classCallCheck(this, Base);

	        // Default the properties
	        this.targetInfo = targetInfo || {};
	        this.requestType = 0;
	        this.waitFlags = [];
	    }

	    /*********************************************************************************************************************************/
	    // Public Properties
	    /*********************************************************************************************************************************/

	    // Flag to determine if the requested object exists


	    // The parent


	    // The request type


	    _createClass(Base, [{
	        key: "done",


	        /*********************************************************************************************************************************/
	        // Public Methods
	        /*********************************************************************************************************************************/

	        // Method to wait for the requests to complete
	        value: function done(callback) {
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

	                // Execute the callback back
	                callback ? callback.apply(_this, responses) : null;
	            });
	        }

	        // Method to execute the request

	    }, {
	        key: "execute",
	        value: function execute() {
	            var _this2 = this;

	            var callback = null;
	            var waitFl = false;

	            // Set the callback and wait flag
	            switch (arguments.length) {
	                case 1:
	                    callback = typeof (arguments.length <= 0 ? undefined : arguments[0]) === "boolean" ? callback : arguments.length <= 0 ? undefined : arguments[0];
	                    waitFl = typeof (arguments.length <= 0 ? undefined : arguments[0]) === "boolean" ? arguments.length <= 0 ? undefined : arguments[0] : waitFl;
	                    break;
	                case 2:
	                    callback = arguments.length <= 0 ? undefined : arguments[0];
	                    waitFl = arguments.length <= 1 ? undefined : arguments[1];
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
	                    _this2.executeRequest(true, function () {
	                        // See if there is a callback
	                        if (callback) {
	                            // Set the base to this object, and clear requests
	                            // This will ensure requests from this object do not conflict w/ this request
	                            _this2.base = _this2;
	                            _this2.base.responses = [];

	                            // Execute the callback and see if it returns a promise
	                            var returnVal = callback(_this2);
	                            if (returnVal && typeof returnVal.done === "function") {
	                                // Wait for the promise to complete
	                                returnVal.done(function () {
	                                    // Reset the base
	                                    _this2.base = _this2.parent.base;

	                                    // Set the wait flag
	                                    _this2.base.waitFlags[_this2.responseIndex] = true;
	                                });

	                                // Wait for the promise to complete
	                                return;
	                            }

	                            // Reset the base
	                            _this2.base = _this2.parent.base;
	                        }

	                        // Set the wait flag
	                        _this2.base.waitFlags[_this2.responseIndex] = true;
	                    });
	                }, this.responseIndex);
	            } else {
	                // Execute this request
	                this.executeRequest(true, function () {
	                    // Execute the callback and see if it returns a promise
	                    var returnVal = callback ? callback(_this2) : null;
	                    if (returnVal && typeof returnVal.done === "function") {
	                        // Wait for the promise to complete
	                        returnVal.done(function () {
	                            // Set the wait flag
	                            _this2.base.waitFlags[_this2.responseIndex] = true;
	                        });
	                    } else {
	                        // Set the wait flag
	                        _this2.base.waitFlags[_this2.responseIndex] = true;
	                    }
	                });
	            }

	            // Return this object
	            return this;
	        }

	        // Method to execute the request synchronously.

	    }, {
	        key: "executeAndWait",
	        value: function executeAndWait() {
	            return this.executeRequest(false);
	        }

	        /*********************************************************************************************************************************/
	        // Private Variables
	        /*********************************************************************************************************************************/

	        // The base object


	        // Flag to default the url to the current web url, site otherwise


	        // Flag to get all items


	        // The promise


	        // The request


	        // The responses


	        // The index of this object in the responses array


	        // The base settings


	        // The wait flags

	    }, {
	        key: "addMethods",


	        /*********************************************************************************************************************************/
	        // Private Methods
	        /*********************************************************************************************************************************/

	        // Method to add the methods to this object
	        value: function addMethods(obj, data) {
	            var isCollection = data.results && data.results.length > 0;

	            // Determine the metadata
	            var metadata = isCollection ? data.results[0].__metadata : data.__metadata;

	            // Determine the object type
	            var objType = metadata && metadata.type ? metadata.type : this.targetInfo.endpoint;
	            objType = objType.split('/');
	            objType = objType[objType.length - 1];
	            objType = objType.split('.');
	            objType = objType[objType.length - 1].toLowerCase();
	            objType += isCollection && data.results.length > 1 ? "s" : "";

	            // See if this is a field
	            if ((/^field/.test(objType) || /field$/.test(objType)) && objType != "fieldlinks" && objType != "fields") {
	                // Update the type
	                objType = "field" + (isCollection ? "s" : "");
	            }
	            // Else, see if this is an item
	            else if (/item$/.test(objType)) {
	                    // Update the type
	                    objType = "listitem";
	                }
	                // Else, see if this is an item collection
	                else if (/items$/.test(objType)) {
	                        // Update the type
	                        objType = "items";
	                    }

	            // Get the methods for this object
	            var methods = Mapper[objType];
	            if (methods) {
	                // Parse the methods
	                for (var methodName in methods) {
	                    // Get the method information
	                    var methodInfo = methods[methodName] ? methods[methodName] : {};

	                    // See if this is the "Properties" definition for the object
	                    if (methodName == "properties") {
	                        // Parse the properties
	                        var _iteratorNormalCompletion = true;
	                        var _didIteratorError = false;
	                        var _iteratorError = undefined;

	                        try {
	                            for (var _iterator = methodInfo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                var property = _step.value;

	                                var propInfo = property.split("|");

	                                // Get the metadata type
	                                var propName = propInfo[0];
	                                var propType = propInfo.length > 1 ? propInfo[1] : null;
	                                var subPropName = propInfo.length > 2 ? propInfo[2] : null;
	                                var subPropType = propInfo.length > 3 ? propInfo[3] : null;

	                                // See if the property is null or is a collection
	                                if (obj[propName] == null || obj[propName].__deferred && obj[propName].__deferred.uri) {
	                                    // See if this property has a sub-property defined for it
	                                    if (propInfo.length == 4) {
	                                        // Update the ' char in the property name
	                                        subPropName = subPropName.replace(/'/g, "\\'");

	                                        // Add the property
	                                        obj[propName] = new Function("name", "name = name ? '" + propName + subPropName + "'.replace(/\\[Name\\]/g, name) : null;" + "return this.getProperty(name ? name : '" + propName + "', name ? '" + subPropType + "' : '" + propType + "');");
	                                    } else {
	                                        // Add the property
	                                        obj[propName] = new Function("return this.getProperty('" + propName + "', '" + propType + "');");
	                                    }
	                                }
	                            }

	                            // Continue the loop
	                        } catch (err) {
	                            _didIteratorError = true;
	                            _iteratorError = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion && _iterator.return) {
	                                    _iterator.return();
	                                }
	                            } finally {
	                                if (_didIteratorError) {
	                                    throw _iteratorError;
	                                }
	                            }
	                        }

	                        continue;
	                    }

	                    // See if this object has a dynamic metadata type
	                    if (typeof methodInfo.metadataType === "function") {
	                        // Clone the object properties
	                        methodInfo = JSON.parse(JSON.stringify(methodInfo));

	                        // Set the metadata type
	                        methodInfo.metadataType = methods[methodName].metadataType(obj);
	                    }

	                    // Add the method to the object
	                    obj[methodName] = new Function("return this.executeMethod('" + methodName + "', " + JSON.stringify(methodInfo) + ", arguments);");
	                }
	            }
	        }

	        // Method to add properties to this object

	    }, {
	        key: "addProperties",
	        value: function addProperties(obj, data) {
	            // Parse the data properties
	            for (var key in data) {
	                var value = data[key];

	                // Skip properties
	                if (key == "__metadata" || key == "results") {
	                    continue;
	                }

	                // See if this is a collection property
	                if (value && value.__deferred && value.__deferred.uri) {
	                    // Generate a method for this property
	                    obj["get_" + key] = obj["get_" + key] ? obj["get_" + key] : new Function("return this.getCollection('" + key + "', arguments);");
	                } else {
	                    switch (key) {
	                        case "ClientPeoplePickerResolveUser":
	                        case "ClientPeoplePickerSearchUser":
	                            obj[key] = JSON.parse(value);
	                            break;
	                        default:
	                            // Append the property to this object
	                            obj[key] = value;
	                            break;
	                    }
	                }
	            }
	        }

	        // Method to execute a method

	    }, {
	        key: "executeMethod",
	        value: function executeMethod(methodName, methodConfig, args) {
	            var targetInfo = null;

	            // See if the metadata is defined for this object
	            var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
	            if (metadata && metadata.uri) {
	                // Create the target information and use the url defined for this object
	                targetInfo = {
	                    url: metadata.uri
	                };

	                // See if we are inheriting the metadata type
	                if (methodConfig.inheritMetadataType) {
	                    // Copy the metadata type
	                    methodConfig.metadataType = metadata.type;
	                }

	                // Update the metadata uri
	                (this.updateMetadataUri ? this.updateMetadataUri : this.base.updateMetadataUri)(metadata, targetInfo);
	            } else {
	                // Copy the target information
	                targetInfo = Object.create(this.targetInfo);
	            }

	            // Get the method information
	            var methodInfo = new MethodInfo(methodName, methodConfig, args);

	            // Update the target information
	            targetInfo.bufferFl = methodConfig.requestType == RequestType.GetBuffer;
	            targetInfo.data = methodInfo.body;
	            targetInfo.method = methodInfo.requestMethod;

	            // See if we are replacing the endpoint
	            if (methodInfo.replaceEndpointFl) {
	                // Replace the endpoint
	                targetInfo.endpoint = methodInfo.url;
	            }
	            // Else, ensure the method url exists
	            else if (methodInfo.url && methodInfo.url.length > 0) {
	                    // Append the method to the endpoint
	                    targetInfo.endpoint = (targetInfo.endpoint ? targetInfo.endpoint + "/" : "") + methodInfo.url;
	                }

	            // Create a new object
	            var obj = new Base(targetInfo);

	            // Set the properties
	            obj.base = this.base ? this.base : this;
	            obj.getAllItemsFl = methodInfo.getAllItemsFl;
	            obj.parent = this;
	            obj.requestType = methodConfig.requestType;

	            // Add the methods
	            methodConfig.returnType ? obj.addMethods(obj, { __metadata: { type: methodConfig.returnType } }) : null;

	            // Return the object
	            return obj;
	        }

	        // Method to execute the request

	    }, {
	        key: "executeRequest",
	        value: function executeRequest(asyncFl, callback) {
	            var _this3 = this;

	            // See if this is an asynchronous request
	            if (asyncFl) {
	                // See if the request already exists
	                if (this.request) {
	                    // Execute the callback
	                    callback ? callback(this) : null;
	                } else {
	                    // Create the request
	                    this.request = new Request(asyncFl, new TargetInfo(this.targetInfo), function () {
	                        // Update this data object
	                        _this3.updateDataObject();

	                        // Validate the data collection
	                        _this3.validateDataCollectionResults(_this3.request).done(function () {
	                            // Execute the callback
	                            callback ? callback(_this3) : null;
	                        });
	                    });
	                }
	            }
	            // Else, see if we already executed this response
	            else if (this.request) {
	                    return this;
	                }
	                // Else, we haven't executed this request
	                else {
	                        // Create the request
	                        this.request = new Request(asyncFl, new TargetInfo(this.targetInfo));

	                        // Update this data object
	                        this.updateDataObject();

	                        // See if this is a collection and has more results
	                        if (this["d"] && this["d"].__next) {
	                            // Add the "next" method to get the next set of results
	                            this["next"] = new Function("return this.getNextSetOfResults();");
	                        }

	                        // Return this object
	                        return this;
	                    }
	        }

	        // Method to return a collection

	    }, {
	        key: "getCollection",
	        value: function getCollection(method, args) {
	            // Copy the target information
	            var targetInfo = Object.create(this.targetInfo);

	            // See if the metadata is defined for this object
	            var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
	            if (metadata && metadata.uri) {
	                // Update the url of the target information
	                targetInfo.url = metadata.uri;

	                // Update the metadata uri
	                this.updateMetadataUri(metadata, targetInfo);

	                // Set the endpoint
	                targetInfo.endpoint = method;
	            } else {
	                // Append the method to the endpoint
	                targetInfo.endpoint += "/" + method;
	            }

	            // Update the callback
	            targetInfo.callback = args && typeof args[0] === "function" ? args[0] : null;

	            // Create a new object
	            var obj = new Base(targetInfo);

	            // Set the properties
	            obj.base = this.base ? this.base : this;
	            obj.parent = this;

	            // Return the object
	            return obj;
	        }

	        // Method to return a property of this object

	    }, {
	        key: "getProperty",
	        value: function getProperty(propertyName, requestType) {
	            // Copy the target information
	            var targetInfo = Object.create(this.targetInfo);

	            // See if the metadata is defined for this object
	            var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
	            if (metadata && metadata.uri) {
	                // Update the url of the target information
	                targetInfo.url = metadata.uri;

	                // Update the metadata uri
	                this.updateMetadataUri(metadata, targetInfo);

	                // Set the endpoint
	                targetInfo.endpoint = propertyName;
	            } else {
	                // Append the property name to the endpoint
	                targetInfo.endpoint += "/" + propertyName;
	            }

	            // Create a new object
	            var obj = new Base(targetInfo);

	            // Set the properties
	            obj.base = this.base ? this.base : this;
	            obj.parent = this;

	            // Add the methods
	            requestType ? this.addMethods(obj, { __metadata: { type: requestType } }) : null;

	            // Return the object
	            return obj;
	        }

	        // Method to get the next set of results

	    }, {
	        key: "getNextSetOfResults",
	        value: function getNextSetOfResults() {
	            // Create the target information to query the next set of results
	            var targetInfo = Object.create(this.targetInfo);
	            targetInfo.endpoint = "";
	            targetInfo.url = this["d"].__next;

	            // Create a new object
	            var obj = new Base(targetInfo);

	            // Set the properties
	            obj.base = this.base ? this.base : this;
	            obj.parent = this;

	            // Return the object
	            return obj;
	        }

	        // Method to update a collection object

	    }, {
	        key: "updateDataCollection",
	        value: function updateDataCollection(results) {
	            var _this4 = this;

	            // Ensure this is a collection
	            if (results) {
	                // Save the results
	                this["results"] = this["results"] ? this["results"].concat(results) : results;

	                // Update the flag
	                this["existsFl"] = results.length > 0;

	                // See if only one object exists
	                if (this["results"].length == 1) {
	                    // Update the metadata
	                    this.updateMetadata(results[0]);

	                    // Apply the properties to the object
	                    this.addProperties(this, results[0]);

	                    // Add the methods
	                    this.addMethods(results[0], results[0]);

	                    // Add the references
	                    results[0]["base"] = this.base;
	                    results[0]["executeMethod"] = this.executeMethod;
	                    results[0]["parent"] = this;

	                    // Copy the metadata
	                    this["d"].__metadata = results[0].__metadata;
	                } else {
	                    // Apply the methods to the results asynchronously
	                    setTimeout(function () {
	                        var results = _this4["results"];

	                        // Parse the results
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;

	                        try {
	                            for (var _iterator2 = results[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                var result = _step2.value;

	                                // Add the references
	                                result["base"] = _this4.base;
	                                result["executeMethod"] = _this4.executeMethod;
	                                result["parent"] = _this4;

	                                // Update the metadata
	                                _this4.updateMetadata(result);

	                                // Add the methods
	                                _this4.addMethods(result, result);
	                            }
	                        } catch (err) {
	                            _didIteratorError2 = true;
	                            _iteratorError2 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                    _iterator2.return();
	                                }
	                            } finally {
	                                if (_didIteratorError2) {
	                                    throw _iteratorError2;
	                                }
	                            }
	                        }
	                    }, 10);
	                }
	            }
	        }

	        // Method to convert the input arguments into an object

	    }, {
	        key: "updateDataObject",
	        value: function updateDataObject() {
	            // Ensure the request doesn't have an error code
	            if (this.request.request.status < 400) {
	                // Return if we are expecting a buffer
	                if (this.requestType == RequestType.GetBuffer) {
	                    // Set the exists flag
	                    this["existsFl"] = this.request.response != null;
	                } else {
	                    // Get the response
	                    var response = this.request.response;
	                    response = response === "" ? "{}" : response;

	                    // Convert the response
	                    var data = JSON.parse(response);
	                    this["existsFl"] = typeof this["Exists"] === "boolean" ? this["Exists"] : data.error == null;

	                    // See if the data properties exists
	                    if (data.d) {
	                        // Save a reference to it
	                        this["d"] = data.d;

	                        // Update the metadata
	                        this.updateMetadata(data.d);

	                        // Update this object's properties
	                        this.addProperties(this, data.d);

	                        // Add the methods
	                        this.addMethods(this, data.d);

	                        // Update the data collection
	                        this.updateDataCollection(data.d.results);
	                    }
	                }
	            }
	        }

	        // Method to update the metadata

	    }, {
	        key: "updateMetadata",
	        value: function updateMetadata(data) {
	            // Ensure this is the app web
	            if (!ContextInfo.isAppWeb) {
	                return;
	            }

	            // Get the url information
	            var hostUrl = ContextInfo.webAbsoluteUrl.toLowerCase();
	            var requestUrl = data && data.__metadata && data.__metadata.uri ? data.__metadata.uri.toLowerCase() : null;
	            var targetUrl = this.targetInfo && this.targetInfo.url ? this.targetInfo.url.toLowerCase() : null;

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
	        }

	        // Method to update the metadata uri

	    }, {
	        key: "updateMetadataUri",
	        value: function updateMetadataUri(metadata, targetInfo) {
	            // See if this is a field
	            if (/^SP.Field/.test(metadata.type) || /^SP\..*Field$/.test(metadata.type)) {
	                // Fix the uri reference
	                targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
	            }
	            // Else, see if this is an event receiver
	            else if (/SP.EventReceiverDefinition/.test(metadata.type)) {
	                    // Fix the uri reference
	                    targetInfo.url = targetInfo.url.replace(/\/EventReceiver\//, "/EventReceivers/");
	                }
	        }

	        // Method to validate the data collection results

	    }, {
	        key: "validateDataCollectionResults",
	        value: function validateDataCollectionResults(request, promise) {
	            var _this5 = this;

	            promise = promise || new Promise();

	            // Validate the response
	            if (request && request.request.status < 400 && typeof request.response === "string" && request.response.length > 0) {
	                // Convert the response and ensure the data property exists
	                var data = JSON.parse(request.response);

	                // See if there are more items to get
	                if (data.d && data.d.__next) {
	                    // See if we are getting all items in this request
	                    if (this.getAllItemsFl) {
	                        // Create the target information to query the next set of results
	                        var targetInfo = Object.create(this.targetInfo);
	                        targetInfo.endpoint = "";
	                        targetInfo.url = data.d.__next;

	                        // Create a new object
	                        new Request(true, new TargetInfo(targetInfo), function (request) {
	                            // Convert the response and ensure the data property exists
	                            var data = JSON.parse(request.response);
	                            if (data.d) {
	                                // Update the data collection
	                                _this5.updateDataCollection(data.d.results);

	                                // Validate the data collection
	                                return _this5.validateDataCollectionResults(request, promise);
	                            }

	                            // Resolve the promise
	                            promise.resolve();
	                        });
	                    } else {
	                        // Add a method to get the next set of results
	                        this["next"] = new Function("return this.getNextSetOfResults();");

	                        // Resolve the promise
	                        promise.resolve();
	                    }
	                } else {
	                    // Resolve the promise
	                    promise.resolve();
	                }
	            } else {
	                // Resolve the promise
	                promise.resolve();
	            }

	            // Return the promise
	            return promise;
	        }

	        // Method to wait for the parent requests to complete

	    }, {
	        key: "waitForRequestsToComplete",
	        value: function waitForRequestsToComplete(callback, requestIdx) {
	            var _this6 = this;

	            // Loop until the requests have completed
	            var intervalId = window.setInterval(function () {
	                var counter = 0;

	                // Parse the responses to the requests
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;

	                try {
	                    for (var _iterator3 = _this6.base.responses[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                        var response = _step3.value;

	                        // See if we are waiting until a specified index
	                        if (requestIdx == counter++) {
	                            break;
	                        }

	                        // Return if the request hasn't completed
	                        if (response.request == null || !response.request.completedFl) {
	                            return;
	                        }

	                        // Ensure the wait flag is set for the previous request
	                        if (counter > 0 && _this6.base.waitFlags[counter - 1] != true) {
	                            return;
	                        }
	                    }

	                    // Clear the interval
	                } catch (err) {
	                    _didIteratorError3 = true;
	                    _iteratorError3 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                            _iterator3.return();
	                        }
	                    } finally {
	                        if (_didIteratorError3) {
	                            throw _iteratorError3;
	                        }
	                    }
	                }

	                window.clearInterval(intervalId);

	                // Execute the callback
	                callback();
	            }, 10);
	        }
	    }, {
	        key: "response",


	        // Method to return the xml http request's response
	        get: function get() {
	            return this.request ? this.request.response : null;
	        }
	    }]);

	    return Base;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*********************************************************************************************************************************/
	// Dependencies
	// This class will ensure the core SP scripts are loaded on the page.
	/*********************************************************************************************************************************/
	var Dependencies = exports.Dependencies = function () {
	    _createClass(Dependencies, [{
	        key: "MAX_WAIT",


	        /*********************************************************************************************************************************/
	        // Constants
	        /*********************************************************************************************************************************/
	        get: function get() {
	            return 5;
	        }
	    }, {
	        key: "SCRIPTS",
	        get: function get() {
	            return ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"];
	        }

	        /*********************************************************************************************************************************/
	        // Constructor
	        /*********************************************************************************************************************************/

	    }]);

	    function Dependencies(callback) {
	        _classCallCheck(this, Dependencies);

	        // Default the properties
	        this.promise = new Promise(callback);

	        // Load the dependencies
	        this.loadDependencies();
	    }

	    /*********************************************************************************************************************************/
	    // Private Variables
	    /*********************************************************************************************************************************/

	    // The promise


	    _createClass(Dependencies, [{
	        key: "loadDependencies",


	        /*********************************************************************************************************************************/
	        // Private Methods
	        /*********************************************************************************************************************************/

	        // Method to ensure the SP classes are loaded
	        value: function loadDependencies() {
	            // See if the page context exists
	            if (this.pageContextExistsFl) {
	                // Resolve the promise
	                this.promise.resolve();
	            } else {
	                // Load the required scripts
	                for (var fileName in this.SCRIPTS) {
	                    // Create the script element
	                    var elScript = document.createElement("script");

	                    // Set the properties
	                    elScript.setAttribute("src", "/_layouts/15/" + fileName);
	                    elScript.setAttribute("type", "text/javascript");

	                    // Add the script element to the head
	                    document.head.appendChild(elScript);
	                }

	                // Wait for the page context to exist
	                this.waitForPageContext();
	            }
	        }

	        // Method to wait for the page context to be loaded

	    }, {
	        key: "waitForPageContext",
	        value: function waitForPageContext() {
	            var counter = 0;

	            // Check every 10ms
	            var intervalId = window.setInterval(function () {
	                // See if the page context exists, and ensure we haven't hit the max attempts
	                if (this.pageContextExists() || ++counter >= this.MAX_WAIT) {
	                    // Clear the interval
	                    window.clearInterval(intervalId);

	                    // Resolve the promise
	                    this.promise.resolve();
	                }
	            }, 10);
	        }
	    }, {
	        key: "pageContextExistsFl",


	        // Flag to determine if the page context information exists
	        get: function get() {
	            return ContextInfo.webAbsoluteUrl != "";
	        }
	    }]);

	    return Dependencies;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*********************************************************************************************************************************/
	// Method Information
	// This class will create the method information for the request.
	/*********************************************************************************************************************************/
	var MethodInfo = exports.MethodInfo = function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function MethodInfo(methodName, methodInfo, args) {
	        _classCallCheck(this, MethodInfo);

	        // Default the properties
	        this.methodInfo = methodInfo;
	        this.methodInfo.argValues = args;
	        this.methodInfo.name = typeof this.methodInfo.name === "string" ? this.methodInfo.name : methodName;

	        // Generate the parameters
	        this.generateParams();

	        // Generate the url
	        this.methodUrl = this.generateUrl();
	    }

	    /*********************************************************************************************************************************/
	    // Public Properties
	    /*********************************************************************************************************************************/

	    // The data passed through the body of the request


	    _createClass(MethodInfo, [{
	        key: "generateParams",


	        /*********************************************************************************************************************************/
	        // Private Methods
	        /*********************************************************************************************************************************/

	        // Method to generate the method input parameters
	        value: function generateParams() {
	            var params = {};

	            // Ensure values exist
	            if (this.methodInfo.argValues == null) {
	                return;
	            }

	            // See if the argument names exist
	            if (this.methodInfo.argNames) {
	                // Parse the argument names
	                for (var i = 0; i < this.methodInfo.argNames.length && i < this.methodInfo.argValues.length; i++) {
	                    var name = this.methodInfo.argNames[i];
	                    var value = this.methodInfo.argValues[i];

	                    // Copy the parameter value
	                    switch (_typeof(this.methodInfo.argValues[i])) {
	                        case "boolean":
	                            params[name] = this.methodInfo.argValues[i] ? "true" : "false";
	                            break;
	                        case "number":
	                            params[name] = this.methodInfo.argValues[i];
	                            break;
	                        //case "string":
	                        //params[name] = this.isTemplate || this.replace ? value : "'" + value + "'";
	                        //break;
	                        default:
	                            params[name] = value;
	                            break;
	                    }
	                }
	            }

	            // See if the method has parameters
	            var isEmpty = true;
	            for (var k in params) {
	                isEmpty = false;break;
	            }
	            this.methodParams = isEmpty ? null : params;

	            // See if method parameters exist
	            if (this.methodParams) {
	                // See if a template is defined for the method data
	                if (this.isTemplate) {
	                    // Ensure the object is a string
	                    if (typeof this.methodInfo.data !== "string") {
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
	                // Else, see if we are passing arguments outside of the parameters
	                else if (this.methodInfo.argValues.length > this.methodInfo.argNames.length) {
	                        // Set the method data to the next available argument value
	                        this.methodData = this.methodInfo.argValues[this.methodInfo.argNames.length];
	                    }
	            }

	            // See if the metadata type exists
	            if (this.methodInfo.metadataType) {
	                // See if parameters exist
	                if (this.methodInfo.argNames) {
	                    // Append the metadata to the first parameter
	                    (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] = { "type": this.methodInfo.metadataType };
	                } else {
	                    // Append the metadata to the parameters
	                    (this.methodData || this.methodParams)["__metadata"] = { "type": this.methodInfo.metadataType };
	                }
	            }
	        }

	        // Method to generate the method and parameters as a url

	    }, {
	        key: "generateUrl",
	        value: function generateUrl() {
	            var url = this.methodInfo.name;

	            // See if we are deleting the object
	            if (this.methodInfo.requestType == RequestType.Delete) {
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
	                var _data = this.methodParams || this.methodData;

	                // Append the parameters in the query string
	                url += "(@v)?@v=" + (typeof _data === "string" ? "'" + encodeURIComponent(_data) + "'" : JSON.stringify(_data));
	            }

	            // See if we are replacing the arguments
	            if (this.replace) {
	                // Parse the arguments
	                for (var key in this.methodParams) {
	                    // Replace the argument in the url
	                    url = url.replace("[[" + key + "]]", encodeURIComponent(this.methodParams[key]));
	                }
	            }
	            // Else, see if this is an odata request
	            else if (this.methodInfo.requestType == RequestType.OData) {
	                    var oData = new OData(this.methodParams["oData"]);

	                    // Update the url
	                    url = "?" + oData.QueryString;

	                    // Set the get all items Flag
	                    this.methodInfo.getAllItemsFl = oData.GetAllItems;
	                }
	                // Else, see if we are not passing the data in the body or query string
	                else if (!this.passDataInBody && !this.passDataInQS) {
	                        var params = "";

	                        // Ensure data exists
	                        var _data2 = this.methodParams || this.methodData;
	                        if (_data2) {
	                            // Ensure the data is an object
	                            _data2 = _data2 && (typeof _data2 === "undefined" ? "undefined" : _typeof(_data2)) === "object" ? _data2 : { value: _data2 };

	                            // Parse the parameters
	                            for (var name in _data2) {
	                                var value = _data2[name];
	                                value = typeof value === "string" ? "'" + value + "'" : value;

	                                switch (this.methodInfo.requestType) {
	                                    // Append the value only
	                                    case RequestType.GetWithArgsValueOnly:
	                                    case RequestType.PostWithArgsValueOnly:
	                                        params += value + ", ";
	                                        break;
	                                    // Append the parameter and value
	                                    default:
	                                        params += name + "=" + value + ", ";
	                                        break;
	                                }
	                            }
	                        }

	                        // Set the url
	                        url += params.length > 0 ? "(" + params.replace(/, $/, "") + ")" : "";
	                    }

	            // Return the url
	            return url;
	        }
	    }, {
	        key: "body",
	        get: function get() {
	            return this.methodData;
	        }

	        // Flag to determine if we are getting all items

	    }, {
	        key: "getAllItemsFl",
	        get: function get() {
	            return this.methodInfo.getAllItemsFl;
	        }

	        // Flag to determine if this method replaces the endpoint

	    }, {
	        key: "replaceEndpointFl",
	        get: function get() {
	            return this.methodInfo.replaceEndpointFl ? true : false;
	        }

	        // The request method

	    }, {
	        key: "requestMethod",
	        get: function get() {
	            // Return the request method if it exists
	            if (typeof this.methodInfo.requestMethod === "string") {
	                return this.methodInfo.requestMethod;
	            }

	            // Determine the request method, based on the request type
	            switch (this.methodInfo.requestType) {
	                case RequestType.Delete:
	                case RequestType.Post:
	                case RequestType.PostWithArgs:
	                case RequestType.PostWithArgsInBody:
	                case RequestType.PostWithArgsInQS:
	                case RequestType.PostWithArgsValueOnly:
	                case RequestType.PostReplace:
	                    return "POST";
	                default:
	                    return "GET";
	            }
	        }

	        // The url of the method and parameters

	    }, {
	        key: "url",
	        get: function get() {
	            return this.methodUrl;
	        }

	        /*********************************************************************************************************************************/
	        // Private Variables
	        /*********************************************************************************************************************************/

	    }, {
	        key: "passDataInBody",
	        get: function get() {
	            return this.methodInfo.requestType == RequestType.GetWithArgsInBody || this.methodInfo.requestType == RequestType.PostWithArgsInBody;
	        }
	    }, {
	        key: "passDataInQS",
	        get: function get() {
	            return this.methodInfo.requestType == RequestType.GetWithArgsInQS || this.methodInfo.requestType == RequestType.PostWithArgsInQS;
	        }
	    }, {
	        key: "isTemplate",
	        get: function get() {
	            return this.methodInfo.data ? true : false;
	        }
	    }, {
	        key: "replace",
	        get: function get() {
	            return this.methodInfo.requestType == RequestType.GetReplace || this.methodInfo.requestType == RequestType.PostReplace;
	        }
	    }]);

	    return MethodInfo;
	}();

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*********************************************************************************************************************************/
	// OData
	// Class for generating the OData query string.
	/*********************************************************************************************************************************/
	var OData = exports.OData = function () {

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/

	    // The class constructor
	    function OData(oData) {
	        _classCallCheck(this, OData);

	        this._expand = null;
	        this._filter = null;
	        this._getAllItems = null;
	        this._orderBy = null;
	        this._select = null;
	        this._skip = null;
	        this._top = null;

	        // Default the Variables
	        this._expand = oData && oData.Expand ? oData.Expand : [];
	        this._filter = oData && oData.Filter ? oData.Filter : null;
	        this._getAllItems = oData && oData.GetAllItems ? oData.GetAllItems : false;
	        this._orderBy = oData && oData.OrderBy ? oData.OrderBy : [];
	        this._select = oData && oData.Select ? oData.Select : [];
	        this._skip = oData && oData.Skip ? oData.Skip : null;
	        this._top = oData && oData.Top ? oData.Top : null;
	    }

	    /*********************************************************************************************************************************/
	    // Properties
	    /*********************************************************************************************************************************/

	    // Expand

	    /*********************************************************************************************************************************/
	    // Global Variables
	    /*********************************************************************************************************************************/


	    _createClass(OData, [{
	        key: "getQSValue",


	        /*********************************************************************************************************************************/
	        // Methods
	        /*********************************************************************************************************************************/

	        // Method to convert the array of strings to a query string value.
	        value: function getQSValue(qsKey, keys) {
	            // Return the query string
	            return keys.length > 0 ? qsKey + "=" + keys.join(",") : "";
	        }
	    }, {
	        key: "Expand",
	        get: function get() {
	            return this._expand;
	        },
	        set: function set(value) {
	            this._expand = value;
	        }

	        // Filter

	    }, {
	        key: "Filter",
	        get: function get() {
	            return this._filter;
	        },
	        set: function set(value) {
	            this._filter = value;
	        }

	        // Flag to get all items

	    }, {
	        key: "GetAllItems",
	        get: function get() {
	            return this._getAllItems;
	        },
	        set: function set(value) {
	            this._getAllItems = value;
	        }

	        // Order By

	    }, {
	        key: "OrderBy",
	        get: function get() {
	            return this._orderBy;
	        },
	        set: function set(value) {
	            this._orderBy = value;
	        }

	        // Query String

	    }, {
	        key: "QueryString",
	        get: function get() {
	            var qs = "";
	            var values = [];

	            // Get the query string values for the properties
	            values.push(this.getQSValue("$select", this._select));
	            values.push(this.getQSValue("$orderby", this._orderBy));
	            this._top ? values.push("$top=" + this._top) : null;
	            this._skip ? values.push("$skip=" + this._skip) : null;
	            this._filter ? values.push("$filter=" + this._filter) : null;
	            values.push(this.getQSValue("$expand", this._expand));

	            // Parse the values
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var value = _step.value;

	                    // Ensure a value exists
	                    if (value && value != "") {
	                        // Append the query string value
	                        qs += (qs == "" ? "" : "&") + value;
	                    }
	                }

	                // Return the query string
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return qs;
	        }

	        // Select

	    }, {
	        key: "Select",
	        get: function get() {
	            return this._select;
	        },
	        set: function set(value) {
	            this._select = value;
	        }

	        // Skip

	    }, {
	        key: "Skip",
	        get: function get() {
	            return this._skip;
	        },
	        set: function set(value) {
	            this._skip = value;
	        }

	        // Top

	    }, {
	        key: "Top",
	        get: function get() {
	            return this._top;
	        },
	        set: function set(value) {
	            this._top = value;
	        }
	    }]);

	    return OData;
	}();

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*********************************************************************************************************************************/
	// Promise
	// This is a lightweight promise library.
	/*********************************************************************************************************************************/
	var Promise = exports.Promise = function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Promise(callback) {
	        _classCallCheck(this, Promise);

	        // Default the properties
	        this.callback = callback;
	        this.resolvedFl = false;
	    }

	    /******************************************************************************************************************************** */
	    // Public Methods
	    /******************************************************************************************************************************** */

	    // Method to execute after the promise is resolved


	    _createClass(Promise, [{
	        key: "done",
	        value: function done(callback) {
	            // Set the callback
	            this.callback = callback || this.callback;

	            // See if the promise is resolved
	            if (this.resolvedFl) {
	                // Execute the callback
	                this.executeMethod();
	            }
	        }

	        // Method to resolve the promise

	    }, {
	        key: "resolve",
	        value: function resolve() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            // Set the properties
	            this.args = args;
	            this.resolvedFl = true;

	            // Execute the callback
	            this.executeMethod();
	        }

	        /*********************************************************************************************************************************/
	        // Private Variables
	        /*********************************************************************************************************************************/

	        // The arguments to pass back


	        // The callback


	        // Flag to determine if the promise is resolved

	    }, {
	        key: "executeMethod",


	        /*********************************************************************************************************************************/
	        // Private Methods
	        /*********************************************************************************************************************************/

	        // Method to execute the callback method
	        value: function executeMethod() {
	            // See if callback function exists
	            if (this.callback && typeof this.callback == "function") {
	                // Execute the callback method
	                this.callback.apply(this, this.args);
	            }
	        }
	    }]);

	    return Promise;
	}();

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*********************************************************************************************************************************/
	// Request
	// This class will execute the xml http request.
	/*********************************************************************************************************************************/
	var Request = exports.Request = function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Request(asyncFl, targetInfo, callback) {
	        _classCallCheck(this, Request);

	        // Default the properties
	        this.asyncFl = asyncFl;
	        this.promise = new Promise(callback || targetInfo.callback);
	        this.targetInfo = targetInfo;
	        this.xhr = this.createXHR();

	        // Execute the request
	        this.execute();
	    }

	    /*********************************************************************************************************************************/
	    // Public Properties
	    /*********************************************************************************************************************************/

	    // Flag indicating the request has completed


	    _createClass(Request, [{
	        key: "createXHR",


	        /*********************************************************************************************************************************/
	        // Private Methods
	        /*********************************************************************************************************************************/

	        // Method to create the xml http request
	        value: function createXHR() {
	            // See if the generic object doesn't exist
	            if (typeof XMLHttpRequest !== "undefined") {
	                // Create an instance of the xml http request object
	                return new XMLHttpRequest();
	            }

	            // Try to create the request
	            try {
	                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
	            } catch (e) {}

	            // Try to create the request
	            try {
	                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
	            } catch (e) {}

	            // Try to create the request
	            try {
	                return new ActiveXObject("Microsoft.XMLHTTP");
	            } catch (e) {}

	            // Throw an error
	            throw new Error("This browser does not support xml http requests.");
	        }

	        // Method to default the request headers

	    }, {
	        key: "defaultHeaders",
	        value: function defaultHeaders() {
	            // Get the request digest
	            var requestDigest = document.querySelector("#__REQUESTDIGEST");
	            requestDigest = requestDigest ? requestDigest.value : "";

	            // Set the default headers
	            this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
	            this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
	            this.xhr.setRequestHeader("X-HTTP-Method", this.targetInfo.requestMethod);
	            this.xhr.setRequestHeader("X-RequestDigest", requestDigest);

	            // See if we are deleting or updating the data
	            if (this.targetInfo.requestMethod == "DELETE" || this.targetInfo.requestMethod == "MERGE") {
	                // Append the header for deleting/updating
	                this.xhr.setRequestHeader("IF-MATCH", "*");
	            }

	            // See if the custom headers exist
	            if (this.targetInfo.requestHeaders) {
	                // Parse the custom headers
	                for (var header in this.targetInfo.requestHeaders) {
	                    // Add the header
	                    this.xhr.setRequestHeader(header, this.targetInfo.requestHeaders[header]);
	                }
	            }
	        }

	        // Method to execute the xml http request

	    }, {
	        key: "execute",
	        value: function execute() {
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
	                        // Resolve the promise
	                        _this.promise.resolve(_this);
	                    }
	                };
	            }

	            // See if we the response type is an array buffer
	            // Note - Updating the response type is only allow for asynchronous requests. Any error will be thrown otherwise.
	            if (this.targetInfo.bufferFl && this.asyncFl) {
	                // Set the response type
	                this.xhr.responseType = "arraybuffer";
	            } else {
	                // Default the headers
	                this.defaultHeaders();

	                // Ensure the arguments passed is defaulted as a string, unless it's an array buffer
	                if (this.targetInfo.requestData && typeof this.targetInfo.requestData !== "string") {
	                    // Stringify the data object, if it's not an array buffer
	                    this.targetInfo.requestData = this.targetInfo.requestData.byteLength ? this.targetInfo.requestData : JSON.stringify(this.targetInfo.requestData);
	                }
	            }

	            // Execute the request
	            this.targetInfo.bufferFl || this.targetInfo.requestData == null ? this.xhr.send() : this.xhr.send(this.targetInfo.requestData);
	        }
	    }, {
	        key: "completedFl",
	        get: function get() {
	            return this.xhr ? this.xhr.readyState == 4 : false;
	        }

	        // The response

	    }, {
	        key: "response",
	        get: function get() {
	            return this.xhr ? this.xhr.response : null;
	        }

	        // The xml http request

	    }, {
	        key: "request",
	        get: function get() {
	            return this.xhr ? this.xhr : null;
	        }

	        // The data send in the body of the request

	    }, {
	        key: "requestData",
	        get: function get() {
	            return this.targetInfo.requestData;
	        }

	        // The reqest url

	    }, {
	        key: "requestUrl",
	        get: function get() {
	            return this.xhr ? this.xhr.responseURL : null;
	        }

	        /*********************************************************************************************************************************/
	        // Private Variables
	        /*********************************************************************************************************************************/

	        // The flag to determine if the request is executed asynchronously or synchronously


	        // The target information


	        // The promise


	        // The xml http request object

	    }]);

	    return Request;
	}();

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*********************************************************************************************************************************/
	// Target Information
	// This class will take the target information and create the request url.
	/*********************************************************************************************************************************/
	var TargetInfo = exports.TargetInfo = function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function TargetInfo(targetInfo) {
	        _classCallCheck(this, TargetInfo);

	        // Default the properties
	        this.targetInfo = targetInfo || {};
	        this.requestData = this.targetInfo.data;
	        this.requestMethod = this.targetInfo.method ? this.targetInfo.method : "GET";

	        // Set the request url
	        this.setRequestUrl();
	    }

	    /*********************************************************************************************************************************/
	    // Public Properties
	    /*********************************************************************************************************************************/

	    // Flag to determine if the request returns an array buffer


	    _createClass(TargetInfo, [{
	        key: "getDomainUrl",


	        /*********************************************************************************************************************************/
	        // Methods
	        /*********************************************************************************************************************************/

	        // Method to get the domain url
	        value: function getDomainUrl() {
	            var url = document.location.href;

	            // See if this is an app web
	            if (ContextInfo.isAppWeb) {
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
	        }

	        // Method to get a query string value

	    }, {
	        key: "setRequestUrl",


	        // Method to set the request url
	        value: function setRequestUrl() {
	            var hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
	            var template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";

	            // See if we are defaulting the url for the app web
	            if (window["$REST"].DefaultRequestToHostFl && ContextInfo.isAppWeb && this.targetInfo.url == null) {
	                // Default the url to the host web
	                this.targetInfo.url = hostUrl;
	            }

	            // Ensure the url exists
	            if (this.targetInfo.url == null) {
	                // Default the url to the current site/web url
	                this.targetInfo.url = this.targetInfo.defaultToWebFl == false ? ContextInfo.siteAbsoluteUrl : ContextInfo.webAbsoluteUrl;
	            }
	            // Else, see if the url already contains the full request
	            else if (/\/_api\//.test(this.targetInfo.url)) {
	                    // Get the url
	                    var url = this.targetInfo.url.toLowerCase().split("/_api/");

	                    // See if this is the app web and we are executing against a different web
	                    if (ContextInfo.isAppWeb && url[0] != ContextInfo.webAbsoluteUrl.toLowerCase()) {
	                        // Set the request url
	                        this.requestUrl = ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" + url[1] + (this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "") + "?@target='" + url[0] + "'";
	                    } else {
	                        // Set the request url
	                        this.requestUrl = this.targetInfo.url + (this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "");
	                    }
	                    return;
	                }

	            // See if this is a relative url
	            if (this.targetInfo.url.indexOf("http") != 0) {
	                // Add the domain
	                this.targetInfo.url = this.getDomainUrl() + this.targetInfo.url;
	            }

	            // See if this is the app web, and we are executing against a different web
	            if (ContextInfo.isAppWeb && this.targetInfo.url != ContextInfo.webAbsoluteUrl) {
	                // Append the start character for the query string
	                var endpoint = this.targetInfo.endpoint + (this.targetInfo.endpoint.indexOf("?") > 0 ? "&" : "?");

	                // Set the request url
	                this.requestUrl = template.replace(/{{Url}}/g, ContextInfo.webAbsoluteUrl).replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)/" + endpoint).replace(/{{TargetUrl}}/g, "@target='" + this.targetInfo.url + "'");
	            } else {
	                // Set the request url
	                this.requestUrl = template.replace(/{{Url}}/g, this.targetInfo.url).replace(/{{EndPoint}}/g, this.targetInfo.endpoint).replace(/{{TargetUrl}}/g, "");
	            }
	        }
	    }, {
	        key: "bufferFl",
	        get: function get() {
	            return this.targetInfo.bufferFl;
	        }

	        // The callback method to execute after the asynchronous request completes

	    }, {
	        key: "callback",
	        get: function get() {
	            return this.targetInfo.callback;
	        }

	        // The request data


	        // The request header


	        // The request method


	        // The request url


	        /*********************************************************************************************************************************/
	        // Private Variables
	        /*********************************************************************************************************************************/

	        // The target information

	    }], [{
	        key: "getQueryStringValue",
	        value: function getQueryStringValue(key) {
	            // Get the query string
	            var queryString = document.location.href.split('?');
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
	        }
	    }]);

	    return TargetInfo;
	}();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _requestType = __webpack_require__(13);

	Object.keys(_requestType).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _requestType[key];
	    }
	  });
	});

	var _sptypes = __webpack_require__(14);

	Object.keys(_sptypes).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _sptypes[key];
	    }
	  });
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// Request Type
	var RequestType = exports.RequestType = {
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

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Check Out Types
	 */
	var CheckOutType = exports.CheckOutType = {
	    /** Online */
	    Online: 0,

	    /** Offline */
	    Offline: 1,

	    /** None */
	    None: 2
	};

	/**
	 * Control Modes
	 */
	var ControlMode = exports.ControlMode = {
	    /** A placeholder value in the export consteration indicating that it has no valid display mode from one of the other export consteration values. */
	    Invalid: 0,

	    /** Specifies that the control is in display mode. */
	    Display: 1,

	    /** Specifies that the control is in edit mode. */
	    Edit: 2,

	    /** Specifies that the control is in New mode. */
	    New: 3
	};

	/**
	 * Draft Visibility Types
	 */
	var DraftVisibilityType = exports.DraftVisibilityType = {
	    /** export consteration whose values specify that the minimum permission is approver. */
	    Approver: 2,

	    /** export consteration whose values specify that the minimum permission is author. */
	    Author: 1,

	    /** export consteration whose values specify that the minimum permission is reader. */
	    Reader: 0
	};

	/**
	 * Event Receiver Types
	 */
	var EventReceiverType = exports.EventReceiverType = {
	    /** Event that occurs before an item has been added. */
	    ItemAdding: 1,

	    /** Event that occurs before an item is updated. */
	    ItemUpdating: 2,

	    /** Event that occurs before an item is deleted. */
	    ItemDeleting: 3,

	    /** Event that occurs before an item has been checked in. */
	    ItemCheckingIn: 4,

	    /** Event that occurs before an item is checked out. */
	    ItemCheckingOut: 5,

	    /** Event that occurs before an item is unchecked out. */
	    ItemUncheckingOut: 6,

	    /** Event that occurs before an attachment has been added to an item. */
	    ItemAttachmentAdding: 7,

	    /** Event that occurs before an attachment has been removed from the item. */
	    ItemAttachmentDeleting: 8,

	    /** Event that occurs before a file is moved. */
	    ItemFileMoving: 9,

	    /** Event that occurs before a document version is deleted. */
	    ItemVersionDeleting: 11,

	    /** Event that occurs before a field is added to a list. */
	    FieldAdding: 101,

	    /** Event that occurs before a field is updated. */
	    FieldUpdating: 102,

	    /** Event that occurs before a field is removed from a list. */
	    FieldDeleting: 103,

	    /** Event that occurs before a list is created. */
	    ListAdding: 104,

	    /** Event that occurs before a list is deleted. */
	    ListDeleting: 105,

	    /** Event that occurs before a site collection is deleted. */
	    SiteDeleting: 201,

	    /** Event that occurs before a site is deleted. */
	    WebDeleting: 202,

	    /** Event that occurs before a site URL has been changed. */
	    WebMoving: 203,

	    /** Event that occurs before a new site is created. */
	    WebAdding: 204,

	    /** Event that occurs before a security group is added. */
	    GroupAdding: 301,

	    /** Event that occurs before a security group is updated. */
	    GroupUpdating: 302,

	    /** Event that occurs before a security group is deleted. */
	    GroupDeleting: 303,

	    /** Event that occurs before a user is added to a security group. */
	    GroupUserAdding: 304,

	    /** Event that occurs before a user is deleted from a security group. */
	    GroupUserDeleting: 305,

	    /** Event that occurs before a role definition is added. */
	    RoleDefinitionAdding: 306,

	    /** Event that occurs before a role definition is updated. */
	    RoleDefinitionUpdating: 307,

	    /** Event that occurs before a role definition is deleted. */
	    RoleDefinitionDeleting: 308,

	    /** Event that occurs before a role assignment is added. */
	    RoleAssignmentAdding: 309,

	    /** Event that occurs before a role assignment is deleted. */
	    RoleAssignmentDeleting: 310,

	    /** Event that occurs before an inheritance is broken. */
	    InheritanceBreaking: 311,

	    /** Event that occurs before an inheritance is restored. */
	    InheritanceResetting: 312,

	    /** Event that occurs before a workflow starts running. */
	    WorkflowStarting: 501,

	    /** Event that occurs after an item has been added. */
	    ItemAdded: 10001,

	    /** Event that occurs after an item has been updated. */
	    ItemUpdated: 10002,

	    /** Event that occurs after an item has been deleted. */
	    ItemDeleted: 10003,

	    /** Event that occurs after an item has been checked in. */
	    ItemCheckedIn: 10004,

	    /** Event that occurs after an item has been checked out. */
	    ItemCheckedOut: 10005,

	    /** Event that occurs after an item has been unchecked out. */
	    ItemUncheckedOut: 10006,

	    /** Event that occurs after an attachment has been added to the item. */
	    ItemAttachmentAdded: 10007,

	    /** Event that occurs after an attachment has been removed from the item. */
	    ItemAttachmentDeleted: 10008,

	    /** Event that occurs after a file has been moved. */
	    ItemFileMoved: 10009,

	    /** Event that occurs after a file is transformed from one type to another. */
	    ItemFileConverted: 10010,

	    /** Event that occurs after a document version is deleted. */
	    ItemVersionDeleted: 10011,

	    /** Event that occurs after a field has been added. */
	    FieldAdded: 10101,

	    /** Event that occurs after a field has been updated. */
	    FieldUpdated: 10102,

	    /** Event that occurs after a field has been removed. */
	    FieldDeleted: 10103,

	    /** Event that occurs after a list has been created. */
	    ListAdded: 10104,

	    /** Event that occurs after a list has been deleted. */
	    ListDeleted: 10105,

	    /** Event that occurs after a site collection has been deleted. */
	    SiteDeleted: 10201,

	    /** Event that occurs after a site has been deleted. */
	    WebDeleted: 10202,

	    /** Event that occurs after a site URL has been changed. */
	    WebMoved: 10203,

	    /** Event that occurs after a new site has been created, but before that new site is provisioned. */
	    WebProvisioned: 10204,

	    /** Event that occurs happens after a security group is added. */
	    GroupAdded: 10301,

	    /** Event that occurs after a security group is updated. */
	    GroupUpdated: 10302,

	    /** Event that occurs after a security group is deleted. */
	    GroupDeleted: 10303,

	    /** Event that occurs after a user is added to a security group. */
	    GroupUserAdded: 10304,

	    /** Event that occurs after a user is deleted from a security group. */
	    GroupUserDeleted: 10305,

	    /** Event that occurs after a role definition is added. */
	    RoleDefinitionAdded: 10306,

	    /** Event that occurs after a role definition is updated. */
	    RoleDefinitionUpdated: 10307,

	    /** Event that occurs after a role definition is deleted. */
	    RoleDefinitionDeleted: 10308,

	    /** Event that occurs after a role assignment is added. */
	    RoleAssignmentAdded: 10309,

	    /** Event that occurs after a role definition is deleted. */
	    RoleAssignmentDeleted: 10310,

	    /** Event that occurs after an inheritance is broken. */
	    InheritanceBroken: 10311,

	    /** Event that occurs after an inheritance is restored. */
	    InheritanceReset: 10312,

	    /** Event that occurs after a workflow has started running. */
	    WorkflowStarted: 10501,

	    /** Event that occurs after a workflow has been postponed. */
	    WorkflowPostponed: 10502,

	    /** Event that occurs after a workflow has completed running. */
	    WorkflowCompleted: 10503,

	    /** Event that occurs when an instance of an external content type has been added. */
	    EntityInstanceAdded: 10601,

	    /** Event that occurs when an instance of an external content type has been updated. */
	    EntityInstanceUpdated: 10602,

	    /** Event that occurs when an instance of an external content type has been deleted. */
	    EntityInstanceDeleted: 10603,

	    /** Event that occurs after an app is installed. */
	    AppInstalled: 10701,

	    /** Event that occurs after an app is upgraded. */
	    AppUpgraded: 10702,

	    /** Event that occurs before an app is uninstalled. */
	    AppUninstalling: 10703,

	    /** Event that occurs after a list receives an e-mail message. */
	    EmailReceived: 20000,

	    /** Identifies workflow event receivers, and is therefore not a true event type. */
	    ContextEvent: 32766
	};

	/**
	 * Event Receiver Synchronization Types
	 */
	var EventReceiverSynchronizationType = exports.EventReceiverSynchronizationType = {
	    /** Event to be triggered asynchronously. */
	    Asynchronous: 2,

	    /** Event to be triggered synchronously. */
	    Synchronization: 1
	};

	/**
	 * Field Types
	 */
	var FieldType = exports.FieldType = {
	    /** Specifies that the field indicates whether a meeting in a calendar list is an all-day event. */
	    AllDayEvent: 29,

	    /** Specifies that the field indicates whether the list item has attachments. */
	    Attachments: 19,

	    /** Specifies that the field contains a Boolean value. */
	    Boolean: 8,

	    /** Specifies that the field is a calculated field. */
	    Calculated: 17,

	    /** Specifies that the field contains a single value from a set of specified values. */
	    Choice: 6,

	    /** Specifies that the field is a computed field. */
	    Computed: 12,

	    /** Specifies that the field contains a content type identifier as a value. */
	    ContentTypeId: 25,

	    /** Specifies that the field contains a monotonically increasing integer. */
	    Counter: 5,

	    /** Specifies that the field contains a link between projects in a Meeting Workspace site. */
	    CrossProjectLink: 22,

	    /** Specifies that the field contains a currency value. */
	    Currency: 10,

	    /** Specifies that the field contains a date and time value or a date-only value. */
	    DateTime: 4,

	    /** Specifies that the type of the field was set to an invalid value. */
	    Error: 24,

	    /** Specifies that the field contains the leaf name of a document as a value. */
	    File: 18,

	    /** Specifies that the field contains geographical location values. */
	    Geolocation: 31,

	    /** Specifies that the field contains rating scale values for a survey list. */
	    GridChoice: 16,

	    /** Specifies that the field contains a GUID value. */
	    Guid: 14,

	    /** Specifies that the field contains an integer value. */
	    Integer: 1,

	    /** Must not be used. */
	    Invalid: 0,

	    /** Specifies that the field is a lookup field. */
	    Lookup: 7,

	    /** Must not be used. */
	    MaxItems: 31,

	    /** Specifies that the field indicates moderation status. */
	    ModStat: 23,
	    /** Specifies that the field contains one or more values from a set of specified values. */

	    MultiChoice: 15,
	    /** Specifies that the field contains multiple lines of text. */
	    Note: 3,

	    /** Specifies that the field contains a floating-point number value. */
	    Number: 9,

	    /** Specifies that the field separates questions in a survey list onto multiple pages. */
	    PageSeparator: 26,

	    /** Specifies that the field indicates whether a meeting in a calendar list recurs. */
	    Recurrence: 21,

	    /** Specifies that the field contains a single line of text. */
	    Text: 2,

	    /** Specifies that the field indicates the position of a discussion item in a threaded view of a discussion board. */
	    ThreadIndex: 27,

	    /** Specifies that the field indicates the thread for a discussion item in a threaded view of a discussion board. */
	    Threading: 13,

	    /** Specifies that the field contains a URI and an optional description of the URI. */
	    URL: 11,

	    /** Specifies that the field contains one or more users and groups as values. */
	    User: 20,

	    /** Specifies that the field contains the most recent event in a workflow instance. */
	    WorkflowEventType: 30,

	    /** Specifies that the field indicates the status of a workflow instance on a list item. */
	    WorkflowStatus: 28
	};

	/**
	 * File Template Types
	*/
	var FileTemplateType = exports.FileTemplateType = {
	    /** export consteration whose value specifies default form template. */
	    FormPage: 2,

	    /** export consteration whose value specifies default view template. */
	    StandardPage: 0,

	    /** export consteration whose value specifies default wiki template. */
	    WikiPage: 1
	};

	/**
	 * List Template Types
	*/
	var ListTemplateType = exports.ListTemplateType = {
	    /** Access Request List */
	    AccessRequest: 160,

	    /** Administrator Tasks */
	    AdminTasks: 1200,

	    /** Agenda (Meeting) */
	    Agenda: 201,

	    /** App Data Catalog */
	    AppDataCatalog: 125,

	    /** Announcements */
	    Announcements: 104,

	    /** Call Track */
	    CallTrack: 404,

	    /** Categories (Blog) */
	    Categories: 303,

	    /** Circulation */
	    Circulation: 405,

	    /** Comments (Blog) */
	    Comments: 302,

	    /** Contacts */
	    Contacts: 105,

	    /** Custom grid for a list */
	    CustomGrid: 120,

	    /** Data connection library for sharing information about external data connections */
	    DataConnectionLibrary: 130,

	    /** Data sources for a site */
	    DataSources: 110,

	    /** Decisions (Meeting) */
	    Decision: 204,

	    /** Design Catalog */
	    DesignCatalog: 124,

	    /** Draft Apps library in Developer Site */
	    DeveloperSiteDraftApps: 1230,

	    /** Discussion board */
	    DiscussionBoard: 108,

	    /** Document library */
	    DocumentLibrary: 101,

	    /** Calendar */
	    Events: 106,

	    /** External */
	    ExternalList: 600,

	    /** Facility */
	    Facility: 402,

	    /** Project Tasks */
	    GanttTasks: 150,

	    /** Custom list */
	    GenericList: 100,

	    /** Health Reports */
	    HealthReports: 1221,

	    /** Health Rules */
	    HealthRules: 1220,

	    /** Help Library */
	    HelpLibrary: 151,

	    /** Holidays */
	    Holidays: 421,

	    /** Workspace Pages (Meeting) */
	    HomePageLibrary: 212,

	    /** IME (Input Method Editor) Dictionary */
	    IMEDic: 499,

	    /** Issue tracking */
	    IssueTracking: 1100,

	    /** Links */
	    Links: 103,

	    /** List Template gallery */
	    ListTemplateCatalog: 114,

	    /** Master Page gallery */
	    MasterPageCatalog: 116,

	    /** Maintenance Logs Library */
	    MaintenanceLogs: 175,

	    /** Objectives (Meeting) */
	    MeetingObjective: 207,

	    /** Meeting Series (Meeting) */
	    Meetings: 200,

	    /** Attendees (Meeting) */
	    MeetingUser: 202,

	    /** My Site Document Library */
	    MySiteDocumentLibrary: 700,

	    /** Posts (Blog) */
	    Posts: 301,

	    /** No Code Public Workflow */
	    NoCodePublic: 122,

	    /** No Code Workflows */
	    NoCodeWorkflows: 117,

	    /** Picture library */
	    PictureLibrary: 109,

	    /** Solutions */
	    SolutionCatalog: 121,

	    /** Survey */
	    Survey: 102,

	    /** Tasks */
	    Tasks: 107,

	    /** Tasks with Timeline and Hierarchy */
	    TasksWithTimelineAndHierarchy: 171,

	    /** Text Box (Meeting) */
	    TextBox: 210,

	    /** Themes */
	    ThemeCatalog: 123,

	    /** Things To Bring (Meeting) */
	    ThingsToBring: 211,

	    /** Timecard */
	    Timecard: 420,

	    /** User Information */
	    UserInformation: 112,

	    /** Wiki Page Library */
	    WebPageLibrary: 119,

	    /** Web Part gallery */
	    WebPartCatalog: 113,

	    /** Site template gallery */
	    WebTemplateCatalog: 111,

	    /** Whereabouts */
	    Whereabouts: 403,

	    /** Workflow History */
	    WorkflowHistory: 140,

	    /** Custom Workflow Process */
	    WorkflowProcess: 118,

	    /** XML Form library */
	    XMLForm: 115
	};

	/**
	 * Page Types
	 */
	var PageType = exports.PageType = {
	    /** export consteration whose values specify a page that is the default view for a list. */
	    DefaultView: 0,

	    /** export consteration whose values specify a page suitable for display within a dialog box on a client computer. */
	    DialogView: 2,

	    /** export consteration whose values specify a list form for displaying a list item. */
	    DisplayForm: 4,

	    /** export consteration whose values specify a list form for displaying a list item, suitable for display within a dialog box on a client computer. */
	    DisplayFormDialog: 5,

	    /** export consteration whose values specify a list form for editing a list item. */
	    EditForm: 6,

	    /** export consteration whose values specify a list form for editing a list item, suitable for display within a dialog box on a client computer. */
	    EditFormDialog: 7,

	    /** export consteration whose values specify a page that does not correspond to a list view or a list form. */
	    Invalid: -1,

	    /** export consteration whose values specify a list form for creating a new list item. */
	    NewForm: 8,

	    /** export consteration whose values specify a list form for creating a new list item, suitable for display within a dialog box on a client computer. */
	    NewFormDialog: 9,

	    /** export consteration whose values specify a page that is a list view and is not the default view for a list. */
	    NormalView: 1,

	    /** export consteration whose values specify the total number of valid page types. */
	    Page_MAXITEMS: 11,

	    /** export consteration whose values specify a list form for displaying or editing a list item and represented by a form template (.xsn) file. */
	    SolutionForm: 10,

	    /** export consteration whose values specify a page that is a list view. */
	    View: 3
	};

	/**
	 * Master Page Gallery Types
	 */
	/*
	MasterPageGalleryType = {
	    DisplayTemplateControl:  <any>"0x0101002039C03B61C64EC4A04F5361F385106601",
	    DisplayTemplateItem:  <any>"0x0101002039C03B61C64EC4A04F5361F385106603",
	    MasterPage:  <any>"0x01010500A8B69F8A072C384090BB2F363986E5EA",
	    PageLayout:  <any>"0x01010007FF3E057FA8AB4AA42FCB67B453FFC100E214EEE741181F4E9F7ACC43278EE811",
	};
	*/

	/**
	 * Page Layout Types
	 */
	/*
	PageLayoutType = {
	    Article:  <any>";#Article Page;#0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF3900242457EFB8B24247815D688C526CD44D;#"
	};
	*/

	/**
	 * Personal Site Capabilities
	 */
	var PersonalSiteCapabilities = exports.PersonalSiteCapabilities = {
	    Education: 16,
	    Guest: 32,
	    MyTasksDashboard: 8,
	    None: 0,
	    Profile: 1,
	    Social: 2,
	    Storage: 4
	};

	/**
	 * Reordering Rule Match Types
	 */
	var ReordingRuleMatchType = exports.ReordingRuleMatchType = {
	    ResultContainsKeyword: ResultContainsKeyword,
	    TitleContainsKeyword: TitleContainsKeyword,
	    TitleMatchesKeyword: TitleMatchesKeyword,
	    UrlStartsWith: UrlStartsWith,
	    UrlExactlyMatches: UrlExactlyMatches,
	    ContentTypeIs: ContentTypeIs,
	    FileExtensionMatches: FileExtensionMatches,
	    ResultHasTag: ResultHasTag,
	    ManualCondition: ManualCondition
	};

	/**
	 * Role Types
	 */
	var RoleType = exports.RoleType = {
	    /** Has all rights from other roles, plus rights to manage roles and view usage analysis data. Includes all rights in the WebDesigner role, plus the following: ManageListPermissions, ManageRoles, ManageSubwebs, ViewUsageData. The Administrator role cannot be customized or deleted, and must always contain at least one member. Members of the Administrator role always have access to, or can grant themselves access to, any item in the Web site. */
	    Administrator: 5,

	    /** Has Reader rights, plus rights to add items, edit items, delete items, manage list permissions, manage personal views, personalize Web Part Pages, and browse directories. Includes all rights in the Reader role, plus the following: AddDelPrivateWebParts, AddListItems, BrowseDirectories, CreatePersonalGroups, DeleteListItems, EditListItems, ManagePersonalViews, UpdatePersonalWebParts. Contributors cannot create new lists or document libraries, but they can add content to existing lists and document libraries. */
	    Contributor: 3,

	    /** Has Contributor rights, plus rights to manage lists. Includes all rights in the Contributor role. Editors can create new lists or document libraries. */
	    Editor: 6,

	    /** Has limited rights to view pages and specific page elements. This role is used to give users access to a particular page, list, or item in a list, without granting rights to view the entire site. Users cannot be added explicitly to the Guest role; users who are given access to lists or document libraries by way of per-list permissions are added automatically to the Guest role. The Guest role cannot be customized or deleted. */
	    Guest: 1,

	    /** export consteration whose values specify that there are no rights on the Web site. */
	    None: 0,

	    /** Has rights to view items, personalize Web parts, use alerts, and create a top-level Web site using Self-Service Site Creation. A reader can only read a site; the reader cannot add content. When a reader creates a site using Self-Service Site Creation, the reader becomes the site owner and a member of the Administrator role for the new site. This does not affect the user's role membership for any other site. Rights included: CreateSSCSite, ViewListItems, ViewPages. */
	    Reader: 2,

	    /** Has Contributor rights, plus rights to cancel check out, delete items, manage lists, add and customize pages, define and apply themes and borders, and link style sheets. Includes all rights in the Contributor role, plus the following: AddAndCustomizePages, ApplyStyleSheets, ApplyThemeAndBorder, CancelCheckout, ManageLists.WebDesigners can modify the structure of the site and create new lists or document libraries. */
	    WebDesigner: 4
	};

	/**
	 * User Custom Action Registration Types
	 */
	var UserCustomActionRegistrationType = exports.UserCustomActionRegistrationType = {
	    /** export consteration whose values specify that the object association is not specified. */
	    None: 0,

	    /** export consteration whose values specify that the custom action is associated with a list. */
	    List: 1,

	    /** export consteration whose values specify that the custom action is associated with a content type. */
	    ContentType: 2,

	    /** export consteration whose values specify that the custom action is associated with a ProgID. */
	    ProgId: 3,

	    /** export consteration whose values specify that the custom action is associated with a file extension. */
	    FileType: 4
	};

	/**
	 * View Types
	 */
	var ViewType = exports.ViewType = {
	    /** export consteration whose values specify a calendar list view type. */
	    Calendar: 524288,

	    /** export consteration whose values specify a chart list view type. */
	    Chart: 131072,

	    /** export consteration whose values specify a Gantt chart list view type. */
	    Gantt: 67108864,

	    /** export consteration whose values specify a datasheet list view type. */
	    Grid: 2048,

	    /** export consteration whose values specify an HTML list view type. */
	    Html: 1,

	    /** export consteration whose values specify a list view type that displays recurring events. */
	    Recurrence: 8193
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*********************************************************************************************************************************/
	// Helper Methods
	/*********************************************************************************************************************************/
	var Helper = exports.Helper = {
	    // Method to copy a file in this app web to the host web
	    copyFileToHostWeb: function copyFileToHostWeb(fileUrl, dstFolder, overwriteFl, rootWebFl) {
	        var srcFile = null;
	        var promise = new Promise();
	        var origVal = window["$REST"].DefaultRequestToHostFl;

	        // Ensure the current web is an app web
	        if (!ContextInfo.isAppWeb) {
	            // Error
	            console.error("[gd-sprest] The current web is not an app web.");
	            return;
	        }

	        // Get the host web
	        window["$REST"].DefaultRequestToHostFl = true;
	        var web = new Web(rootWebFl ? ContextInfo.siteServerRelativeUrl : null);

	        // See if the folder url was given
	        if (typeof dstFolder === "string") {
	            // Get the folder
	            undefined.getFolder(web, dstFolder, true).done(function (folder) {
	                // Copy the file to the host web
	                undefined.copyFileToHostWeb(fileUrl, folder, overwriteFl)
	                // Wait for the request to complete, and resolve the promise
	                .done(function (file, folder) {
	                    promise.resolve(file, folder);
	                });
	            });
	        } else {
	            (function () {
	                // Get the file name
	                var fileName = fileUrl.split("/");
	                fileName = fileName[fileName.length - 1];

	                // Set the file urls
	                var dstFileUrl = window["SP"].Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
	                var srcFileUrl = window["SP"].Utilities.UrlBuilder.urlCombine(ContextInfo.webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));

	                // Get the destination file
	                web.getFileByServerRelativeUrl(dstFileUrl)
	                // Execute the request
	                .execute(function (file) {
	                    var promise = new Promise();

	                    // See if the file exists
	                    if (file.Exists) {
	                        // Check out the file, and resolve the promise
	                        file.checkout().execute(function () {
	                            promise.resolve();
	                        });
	                    } else {
	                        // Resolve the promise
	                        promise.resolve();
	                    }

	                    // Return the promiser
	                    return promise;
	                });

	                // Target the current web
	                window["$REST"].DefaultRequestToHostFl = false;

	                // Get the current web
	                new Web().getFileByServerRelativeUrl(srcFileUrl)
	                // Get the content
	                .content()
	                // Execute the request
	                .execute(function (content) {
	                    var promise = new Promise();

	                    // Get the file name
	                    var fileName = srcFileUrl.split("/");
	                    fileName = fileName[fileName.length - 1];

	                    // Target the host web
	                    window["$REST"].DefaultRequestToHostFl = true;

	                    // Add the file to the folder
	                    dstFolder.Files().add(true, fileName, content.response)
	                    // Execute the request
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
	                            promise.resolve();
	                        });
	                    });

	                    // Return the promise
	                    return promise;
	                }, true);

	                // Wait for the requests to complete, and resolve the promise
	                web.done(function () {
	                    promise.resolve(srcFile, dstFolder);
	                });
	            })();
	        }

	        // Return the promise
	        return promise;
	    },

	    // Method to copy a file in this app web to the host web
	    copyFilesToHostWeb: function copyFilesToHostWeb(fileUrls, folderUrls, overwriteFl, rootWebFl, idx, promise, files, folders) {
	        files = files ? files : [];
	        folders = folders ? folders : [];
	        idx = idx ? idx : 0;
	        promise = promise ? promise : new Promise();

	        // Ensure the array is not empty
	        if (fileUrls.length == idx || folderUrls.length == idx) {
	            // Resolve the promise and return it
	            promise.resolve(files, folders);
	            return promise;
	        }

	        // Copy the file
	        undefined.copyFileToHostWeb(fileUrls[idx], folderUrls[idx], overwriteFl, rootWebFl)
	        // Wait for it to complete
	        .done(function (file, folder) {
	            // Save a reference to the file and folder
	            files.push(file);
	            folders.push(folder);

	            // Copy the files
	            undefined.copyFilesToHostWeb(fileUrls, folderUrls, overwriteFl, rootWebFl, ++idx, promise, files, folders);
	        });

	        // Return the promise
	        return promise;
	    },

	    // Method to create sub-folders
	    createSubFolders: function createSubFolders(folder, subFolderUrl, promise) {
	        // Ensure the promise exists
	        promise = promise ? promise : new Promise();

	        // Get the sub-folder name
	        var subFolderName = subFolderUrl.split("/")[0];

	        // Update the sub folder url
	        subFolderUrl = subFolderUrl.substr(subFolderName.length + 1);

	        // Get the sub-folder
	        var subFolder = folder.Folders(subFolderName).execute(function (subFolder) {
	            // Method to add additional sub folders
	            var addSubFolders = function addSubFolders(subFolder) {
	                // See if we are done
	                if (subFolderUrl.length == 0) {
	                    // Resolve the promise
	                    promise.resolve(subFolder);
	                } else {
	                    // Create the sub folder
	                    undefined.createSubFolders(subFolder, subFolderUrl, promise);
	                }
	            };

	            // Ensure the sub-folder exists
	            if (subFolder.Exists) {
	                // Add the rest of the sub folders
	                addSubFolders(subFolder);
	            } else {
	                // Create the sub folder
	                folder.Folders().add(subFolderName).execute(addSubFolders);
	            }
	        });

	        // Return a promise
	        return promise;
	    },

	    // Method to get a folder
	    getFolder: function getFolder(web, folderUrl, createFl) {
	        var dstFolder = null;
	        var promise = new Promise();

	        // Ensure the web exists
	        if (!web.existsFl) {
	            // Get the web
	            web.execute();
	        }

	        // Wait for the requests to complete
	        web.done(function () {
	            // Set the destination folder url
	            var dstFolderUrl = window["SP"].Utilities.UrlBuilder.urlCombine(web.ServerRelativeUrl, folderUrl.substr(folderUrl[0] == "/" ? 1 : 0));

	            // Get the folder
	            web.getFolderByServerRelativeUrl(folderUrl)
	            // Execute the request
	            .execute(function (folder) {
	                var promise = new Promise();

	                // Ensure the folder exists
	                if (folder.Exists) {
	                    // Save a reference to the folder
	                    dstFolder = folder;

	                    // Resolve the promise
	                    promise.resolve();
	                } else {
	                    // Create the folder
	                    undefined.createSubFolders(web.RootFolder(), folderUrl).done(function (folder) {
	                        // Save a reference to the folder
	                        dstFolder = folder;

	                        // Resolve the promise
	                        promise.resolve();
	                    });
	                }

	                // Return the promise
	                return promise;
	            }, true);

	            // Wait for the request to complete
	            web.done(function () {
	                // Resolve the promise
	                promise.resolve(dstFolder);
	            });
	        });

	        // Return the promise
	        return promise;
	    },

	    // Method to remove empty folders
	    removeEmptyFolders: function removeEmptyFolders(web, folderUrls) {
	        var promise = new Promise();

	        // Ensure folder urls exist
	        if (folderUrls.length == 0) {
	            // Resolve the promise and return it
	            promise.resolve();
	        } else {
	            var prevFolderUrl = null;

	            // Sort the urls alphabetically, then from longest to shortest
	            folderUrls.sort().sort(function (a, b) {
	                return a.length > b.length ? -1 : 1;
	            });

	            // Parse the folders
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = folderUrls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var folderUrl = _step.value;

	                    var folder = null;

	                    // See if we already removed this folder
	                    if (folderUrl == prevFolderUrl) {
	                        continue;
	                    } else {
	                        prevFolderUrl = folderUrl;
	                    }

	                    // Parse the folder names
	                    var folderNames = folderUrl.split('/');
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = folderNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var folderName = _step2.value;

	                            // Get the sub-folder
	                            folder = folder ? folder.Folders(folderName) : web.Folders(folderName);
	                        }

	                        // Execute the request
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }

	                    folder.execute(function (folder) {
	                        var promise = new Promise();

	                        // See if the folder is empty
	                        if (folder.ItemCount == 0) {
	                            // Delete the folder, and resolve the promise
	                            folder.delete().execute(function () {
	                                promise.resolve();
	                            });
	                        } else {
	                            // Resolve the proise
	                            promise.resolve();
	                        }

	                        // Return the promise
	                        return promise;
	                    }, true);
	                }

	                // Wait for the requests to complete, and resolve the promise
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            web.done(function () {
	                promise.resolve();
	            });
	        }

	        // Return the promise
	        return promise;
	    },

	    // Method to remove a file
	    removeFile: function removeFile(web, fileUrl) {
	        var promise = new Promise();
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
	                file.delete().execute(function () {
	                    promise.resolve();
	                });
	            } else {
	                // Resolve the promises
	                promise.resolve();
	            }
	        }, true);

	        // Return the promise
	        return promise;
	    },

	    // Method to remove files
	    removeFiles: function removeFiles(web, fileUrls, idx, promise) {
	        idx = idx ? idx : 0;
	        promise = promise ? promise : new Promise();

	        // See if we have removed all files
	        if (fileUrls.length == idx) {
	            // Resolve the promise and return it
	            promise.resolve();
	        } else {
	            // Remove the file
	            undefined.removeFile(web, fileUrls[idx]).done(function () {
	                // Remove the files
	                undefined.removeFiles(web, fileUrls, ++idx, promise);
	            });
	        }

	        // Return the promise
	        return promise;
	    }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.List = undefined;

	var _utils = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************************************************************************************************************************/
	// List
	// The SPList object.
	/*********************************************************************************************************************************/
	var List = exports.List = function (_Base) {
	    _inherits(List, _Base);

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function List(listName, targetInfo) {
	        _classCallCheck(this, List);

	        // Default the properties
	        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, targetInfo));
	        // Call the base constructor


	        _this.defaultToWebFl = true;
	        _this.responses = [];
	        _this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";

	        // Add the methods
	        _this.addMethods(_this, { __metadata: { type: "list" } });
	        return _this;
	    }

	    return List;
	}(_utils.Base);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PeopleManager = undefined;

	var _utils = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************************************************************************************************************************/
	// People Manager
	/*********************************************************************************************************************************/
	var PeopleManager = exports.PeopleManager = function (_Base) {
	    _inherits(PeopleManager, _Base);

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function PeopleManager(targetInfo) {
	        _classCallCheck(this, PeopleManager);

	        // Default the properties
	        var _this = _possibleConstructorReturn(this, (PeopleManager.__proto__ || Object.getPrototypeOf(PeopleManager)).call(this, targetInfo));
	        // Call the base constructor


	        _this.defaultToWebFl = true;
	        _this.responses = [];
	        _this.targetInfo.endpoint = "sp.userprofiles.peoplemanager";

	        // Add the methods
	        _this.addMethods(_this, { __metadata: { type: "peoplemanager" } });
	        return _this;
	    }

	    return PeopleManager;
	}(_utils.Base);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PeoplePicker = undefined;

	var _utils = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************************************************************************************************************************/
	// People Picker
	/*********************************************************************************************************************************/
	var PeoplePicker = exports.PeoplePicker = function (_Base) {
	    _inherits(PeoplePicker, _Base);

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function PeoplePicker(targetInfo) {
	        _classCallCheck(this, PeoplePicker);

	        // Default the properties
	        var _this = _possibleConstructorReturn(this, (PeoplePicker.__proto__ || Object.getPrototypeOf(PeoplePicker)).call(this, targetInfo));
	        // Call the base constructor


	        _this.defaultToWebFl = true;
	        _this.responses = [];
	        _this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";

	        // Add the methods
	        _this.addMethods(_this, { __metadata: { type: "peoplepicker" } });
	        return _this;
	    }

	    return PeoplePicker;
	}(_utils.Base);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ProfileLoader = undefined;

	var _utils = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************************************************************************************************************************/
	// Profile Loader
	/*********************************************************************************************************************************/
	var ProfileLoader = exports.ProfileLoader = function (_Base) {
	    _inherits(ProfileLoader, _Base);

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function ProfileLoader(targetInfo) {
	        _classCallCheck(this, ProfileLoader);

	        // Default the properties
	        var _this = _possibleConstructorReturn(this, (ProfileLoader.__proto__ || Object.getPrototypeOf(ProfileLoader)).call(this, targetInfo));
	        // Call the base constructor


	        _this.defaultToWebFl = true;
	        _this.responses = [];
	        _this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
	        _this.targetInfo.method = "POST";

	        // Add the methods
	        _this.addMethods(_this, { __metadata: { type: "profileloader" } });
	        return _this;
	    }

	    return ProfileLoader;
	}(_utils.Base);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Search = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************************************************************************************************************************/
	// Search
	/*********************************************************************************************************************************/
	var Search = exports.Search = function (_Base) {
	    _inherits(Search, _Base);

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Search(url, targetInfo) {
	        _classCallCheck(this, Search);

	        // Default the properties
	        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, targetInfo));
	        // Call the base constructor


	        _this.defaultToWebFl = true;
	        _this.responses = [];
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

	    // Method to compute the argument names


	    _createClass(Search, [{
	        key: "getArgNames",
	        value: function getArgNames(parameters) {
	            var argNames = [];

	            // Parse the arguments
	            for (var key in parameters) {
	                // Append the argument to the array
	                argNames.push(key);
	            }

	            // Return the argument names
	            return argNames;
	        }

	        /** The query method */

	    }, {
	        key: "query",
	        value: function query(settings) {
	            // Execute the request
	            return this.executeMethod("query", {
	                argNames: this.getArgNames(settings),
	                name: "query",
	                requestType: RequestType.GetWithArgs
	            }, settings);
	        }

	        /** The suggest method */

	    }, {
	        key: "suggest",
	        value: function suggest(settings) {
	            // Execute the request
	            return this.executeMethod("suggest", {
	                argNames: this.getArgNames(settings),
	                name: "suggest",
	                requestType: RequestType.GetWithArgs
	            }, settings);
	        }
	    }]);

	    return Search;
	}(_utils.Base);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Site = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(4);

	var _ = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************************************************************************************************************************/
	// Site
	// The SPSite object.
	/*********************************************************************************************************************************/
	var Site = exports.Site = function (_Base) {
	    _inherits(Site, _Base);

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Site(url, targetInfo) {
	        _classCallCheck(this, Site);

	        // Default the properties
	        var _this = _possibleConstructorReturn(this, (Site.__proto__ || Object.getPrototypeOf(Site)).call(this, targetInfo));
	        // Call the base constructor


	        _this.defaultToWebFl = true;
	        _this.responses = [];
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


	    _createClass(Site, [{
	        key: "getRootWeb",
	        value: function getRootWeb() {
	            return new _.Web(null, this.targetInfo);
	        }

	        // Method to determine if the current user has access, based on the permissions.

	    }, {
	        key: "hasAccess",
	        value: function hasAccess(permissions) {
	            // TO DO
	            return true;
	        }
	    }]);

	    return Site;
	}(_utils.Base);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SocialFeed = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************************************************************************************************************************/
	// Social Feed
	/*********************************************************************************************************************************/
	var _SocialFeed = function (_Base) {
	    _inherits(_SocialFeed, _Base);

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function _SocialFeed(targetInfo) {
	        _classCallCheck(this, _SocialFeed);

	        // Default the properties
	        var _this = _possibleConstructorReturn(this, (_SocialFeed.__proto__ || Object.getPrototypeOf(_SocialFeed)).call(this, targetInfo));
	        // Call the base constructor


	        _this.defaultToWebFl = true;
	        _this.responses = [];
	        _this.targetInfo.endpoint = "social.feed";

	        // Add the methods
	        _this.addMethods(_this, { __metadata: { type: "socialfeed" } });
	        return _this;
	    }

	    /*********************************************************************************************************************************/
	    // Methods
	    /*********************************************************************************************************************************/

	    // Method to post to another user's feed


	    _createClass(_SocialFeed, [{
	        key: "postToFeed",
	        value: function postToFeed(accountName, creationData) {
	            var postInfo = { ID: null, creationData: creationData };

	            // Set the post metadata
	            postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
	            postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };

	            return this.executeMethod("postToMyFeed", {
	                argNames: ["restCreationData"],
	                name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
	                requestType: RequestType.PostWithArgsInBody
	            }, [postInfo]);
	        }

	        // Method to post to the current user's feed

	    }, {
	        key: "postToMyFeed",
	        value: function postToMyFeed(creationData) {
	            var postInfo = { ID: null, creationData: creationData };

	            // Set the post metadata
	            postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
	            postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };

	            return this.executeMethod("postToMyFeed", {
	                argNames: ["restCreationData"],
	                name: "my/feed/post",
	                requestType: RequestType.PostWithArgsInBody
	            }, [postInfo]);
	        }
	    }]);

	    return _SocialFeed;
	}(_utils.Base);

	var SocialFeed = exports.SocialFeed = new _SocialFeed();

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UserProfile = undefined;

	var _utils = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************************************************************************************************************************/
	// User Profile
	/*********************************************************************************************************************************/
	var UserProfile = exports.UserProfile = function (_Base) {
	    _inherits(UserProfile, _Base);

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function UserProfile(targetInfo) {
	        _classCallCheck(this, UserProfile);

	        // Default the properties
	        var _this = _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).call(this, targetInfo));
	        // Call the base constructor


	        _this.defaultToWebFl = true;
	        _this.responses = [];
	        _this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
	        _this.targetInfo.method = "POST";

	        // Add the methods
	        _this.addMethods(_this, { __metadata: { type: "userprofile" } });
	        return _this;
	    }

	    return UserProfile;
	}(_utils.Base);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Web = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*********************************************************************************************************************************/
	// Web
	/*********************************************************************************************************************************/
	var Web = exports.Web = function (_Base) {
	    _inherits(Web, _Base);

	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Web(url, targetInfo) {
	        _classCallCheck(this, Web);

	        // Default the properties
	        var _this = _possibleConstructorReturn(this, (Web.__proto__ || Object.getPrototypeOf(Web)).call(this, targetInfo));
	        // Call the base constructor


	        _this.defaultToWebFl = true;
	        _this.responses = [];
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

	    // Method to determine if the current user has access, based on the permissions.


	    _createClass(Web, [{
	        key: "hasAccess",
	        value: function hasAccess(permissions) {
	            // TO DO
	            return true;
	        }
	    }]);

	    return Web;
	}(_utils.Base);

/***/ }
/******/ ]);