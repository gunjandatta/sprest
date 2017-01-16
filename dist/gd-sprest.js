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
	// Project: https://github.com/gunjandatta/sprest
	// Definitions by: Gunjan Datta <https://github.com/gunjandatta/>
	// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
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
	var lib_1 = __webpack_require__(1);
	exports.Email = lib_1.Email;
	exports.List = lib_1.List;
	exports.PeopleManager = lib_1.PeopleManager;
	exports.PeoplePicker = lib_1.PeoplePicker;
	exports.ProfileLoader = lib_1.ProfileLoader;
	exports.Search = lib_1.Search;
	exports.Site = lib_1.Site;
	exports.SocialFeed = lib_1.SocialFeed;
	exports.UserProfile = lib_1.UserProfile;
	exports.Web = lib_1.Web;
	var utils_1 = __webpack_require__(8);
	exports.ContextInfo = utils_1.ContextInfo;
	exports.Helper = utils_1.Helper;
	/**
	 * SharePoint REST Library
	 */
	exports.$REST = {
	    ContextInfo: utils_1.ContextInfo,
	    Email: lib_1.Email,
	    Helper: utils_1.Helper,
	    List: lib_1.List,
	    PeopleManager: lib_1.PeopleManager,
	    PeoplePicker: lib_1.PeoplePicker,
	    ProfileLoader: lib_1.ProfileLoader,
	    Search: lib_1.Search,
	    Site: lib_1.Site,
	    SocialFeed: lib_1.SocialFeed,
	    UserProfile: lib_1.UserProfile,
	    Web: lib_1.Web
	};
	// Make the library globally available
	window["$REST"] = exports.$REST;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(2));
	__export(__webpack_require__(3));
	__export(__webpack_require__(4));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));
	__export(__webpack_require__(23));
	__export(__webpack_require__(24));
	__export(__webpack_require__(25));
	__export(__webpack_require__(26));
	__export(__webpack_require__(27));
	__export(__webpack_require__(28));
	__export(__webpack_require__(29));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));
	__export(__webpack_require__(33));
	__export(__webpack_require__(34));
	__export(__webpack_require__(59));
	__export(__webpack_require__(35));
	__export(__webpack_require__(36));
	__export(__webpack_require__(37));
	__export(__webpack_require__(38));
	__export(__webpack_require__(39));
	__export(__webpack_require__(40));
	__export(__webpack_require__(41));
	__export(__webpack_require__(42));
	__export(__webpack_require__(43));
	__export(__webpack_require__(44));
	__export(__webpack_require__(45));
	__export(__webpack_require__(46));
	__export(__webpack_require__(47));
	__export(__webpack_require__(48));
	__export(__webpack_require__(49));
	__export(__webpack_require__(50));
	__export(__webpack_require__(51));
	__export(__webpack_require__(52));
	__export(__webpack_require__(53));


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Library
	/*********************************************************************************************************************************/
	var Library = {
	    /**
	     * Adds the attachment that is represented by the specified file name and byte array to the list item.
	     * @param name - The name of the file to add.
	     * @param contents - The file contents as an array buffer.
	    **/
	    add: {
	        argNames: ["fileName"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Library
	/*********************************************************************************************************************************/
	var Library = {
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	var Library = {
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
	        requestType: _1.RequestType.Delete
	    },
	    // Updates it's properties.
	    update: {
	        metadataType: "SP.ContentType",
	        name: "",
	        requestMethod: "MERGE",
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds a content type to the collection.
	    add: {
	        metadataType: "SP.ContentType",
	        name: "",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Adds an existing content type to this collection.
	    addAvailableContentType: {
	        argNames: ["contentTypeId"],
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Gets a content type by id.
	    getById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "contenttype"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../definitions/email.d.ts" />
	var utils_1 = __webpack_require__(8);
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// EMail
	// The SP.Utilities.Utility.SendEmail object.
	/*********************************************************************************************************************************/
	var EMail = (function (_super) {
	    __extends(EMail, _super);
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function EMail(targetInfo) {
	        // Call the base constructor
	        _super.call(this, targetInfo);
	        // Default the properties
	        this.defaultToWebFl = true;
	        this.responses = [];
	        this.targetInfo.endpoint = "SP.Utilities.Utility.SendEmail";
	    }
	    /*********************************************************************************************************************************/
	    // Methods
	    /*********************************************************************************************************************************/
	    // Method to send an email
	    EMail.prototype.send = function (properties) {
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
	        // Execute the method, and return the email object
	        return this.executeMethod("send", {
	            argNames: ["properties"],
	            name: "",
	            metadataType: "SP.Utilities.EmailProperties",
	            requestType: _1.RequestType.PostWithArgsInBody
	        }, [properties]);
	    };
	    return EMail;
	}(utils_1.Base));
	exports.Email = new EMail();


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	__export(__webpack_require__(54));
	__export(__webpack_require__(55));
	__export(__webpack_require__(56));
	__export(__webpack_require__(57));
	__export(__webpack_require__(58));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../definitions/methodInfo.d.ts" />
	var lib_1 = __webpack_require__(1);
	var _1 = __webpack_require__(8);
	/*********************************************************************************************************************************/
	// Base
	// This is the base class for all objects.
	/*********************************************************************************************************************************/
	var Base = (function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Base(targetInfo) {
	        // Default the properties
	        this.targetInfo = targetInfo || {};
	        this.requestType = 0;
	        this.waitFlags = [];
	    }
	    Object.defineProperty(Base.prototype, "response", {
	        // Method to return the xml http request's response
	        get: function () { return this.request ? this.request.response : null; },
	        enumerable: true,
	        configurable: true
	    });
	    /*********************************************************************************************************************************/
	    // Public Methods
	    /*********************************************************************************************************************************/
	    // Method to wait for the requests to complete
	    Base.prototype.done = function (callback) {
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
	    };
	    // Method to execute the request
	    Base.prototype.execute = function () {
	        var _this = this;
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
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
	                _this.executeRequest(true, function () {
	                    // See if there is a callback
	                    if (callback) {
	                        // Set the base to this object, and clear requests
	                        // This will ensure requests from this object do not conflict w/ this request
	                        _this.base = _this;
	                        _this.base.responses = [];
	                        // Execute the callback and see if it returns a promise
	                        var returnVal = callback(_this);
	                        if (returnVal && typeof (returnVal.done) === "function") {
	                            // Wait for the promise to complete
	                            returnVal.done(function () {
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
	            this.executeRequest(true, function () {
	                // Execute the callback and see if it returns a promise
	                var returnVal = callback ? callback(_this) : null;
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
	    // Method to execute the request synchronously.
	    Base.prototype.executeAndWait = function () { return this.executeRequest(false); };
	    /*********************************************************************************************************************************/
	    // Private Methods
	    /*********************************************************************************************************************************/
	    // Method to add the methods to this object
	    Base.prototype.addMethods = function (obj, data) {
	        var isCollection = data.results && data.results.length > 0;
	        // Determine the metadata
	        var metadata = isCollection ? data.results[0].__metadata : data.__metadata;
	        // Determine the object type
	        var objType = metadata && metadata.type ? metadata.type : this.targetInfo.endpoint;
	        objType = objType.split('/');
	        objType = (objType[objType.length - 1]);
	        objType = objType.split('.');
	        objType = (objType[objType.length - 1]).toLowerCase();
	        objType += isCollection && data.results.length > 1 ? "s" : "";
	        // See if this is a field
	        if ((/^field/.test(objType) || /field$/.test(objType)) && objType != "fieldlinks" && objType != "fields") {
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
	        // Get the methods for this object
	        var methods = _1.Mapper[objType];
	        if (methods) {
	            // Parse the methods
	            for (var methodName in methods) {
	                // Get the method information
	                var methodInfo = methods[methodName] ? methods[methodName] : {};
	                // See if this is the "Properties" definition for the object
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
	                        if (obj[propName] == null || (obj[propName].__deferred && obj[propName].__deferred.uri)) {
	                            // See if this property has a sub-property defined for it
	                            if (propInfo.length == 4) {
	                                // Update the ' char in the property name
	                                subPropName = subPropName.replace(/'/g, "\\'");
	                                // Add the property
	                                obj[propName] = new Function("name", "name = name ? '" + propName + subPropName + "'.replace(/\\[Name\\]/g, name) : null;" +
	                                    "return this.getProperty(name ? name : '" + propName + "', name ? '" + subPropType + "' : '" + propType + "');");
	                            }
	                            else {
	                                // Add the property
	                                obj[propName] = new Function("return this.getProperty('" + propName + "', '" + propType + "');");
	                            }
	                        }
	                    }
	                    // Continue the loop
	                    continue;
	                }
	                // See if this object has a dynamic metadata type
	                if (typeof (methodInfo.metadataType) === "function") {
	                    // Clone the object properties
	                    methodInfo = JSON.parse(JSON.stringify(methodInfo));
	                    // Set the metadata type
	                    methodInfo.metadataType = methods[methodName].metadataType(obj);
	                }
	                // Add the method to the object
	                obj[methodName] = new Function("return this.executeMethod('" + methodName + "', " + JSON.stringify(methodInfo) + ", arguments);");
	            }
	        }
	    };
	    // Method to add properties to this object
	    Base.prototype.addProperties = function (obj, data) {
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
	            }
	            else {
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
	    };
	    // Method to execute a method
	    Base.prototype.executeMethod = function (methodName, methodConfig, args) {
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
	        }
	        else {
	            // Copy the target information
	            targetInfo = Object.create(this.targetInfo);
	        }
	        // Get the method information
	        var methodInfo = new _1.MethodInfo(methodName, methodConfig, args);
	        // Update the target information
	        targetInfo.bufferFl = methodConfig.requestType == lib_1.RequestType.GetBuffer;
	        targetInfo.data = methodInfo.body;
	        targetInfo.method = methodInfo.requestMethod;
	        // See if we are replacing the endpoint
	        if (methodInfo.replaceEndpointFl) {
	            // Replace the endpoint
	            targetInfo.endpoint = methodInfo.url;
	        }
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
	    };
	    // Method to execute the request
	    Base.prototype.executeRequest = function (asyncFl, callback) {
	        var _this = this;
	        // See if this is an asynchronous request
	        if (asyncFl) {
	            // See if the request already exists
	            if (this.request) {
	                // Execute the callback
	                callback ? callback(this) : null;
	            }
	            else {
	                // Create the request
	                this.request = new _1.Request(asyncFl, new _1.TargetInfo(this.targetInfo), function () {
	                    // Update this data object
	                    _this.updateDataObject();
	                    // Validate the data collection
	                    _this.validateDataCollectionResults(_this.request).done(function () {
	                        // Execute the callback
	                        callback ? callback(_this) : null;
	                    });
	                });
	            }
	        }
	        else if (this.request) {
	            return this;
	        }
	        else {
	            // Create the request
	            this.request = new _1.Request(asyncFl, new _1.TargetInfo(this.targetInfo));
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
	    };
	    // Method to return a collection
	    Base.prototype.getCollection = function (method, args) {
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
	        }
	        else {
	            // Append the method to the endpoint
	            targetInfo.endpoint += "/" + method;
	        }
	        // Update the callback
	        targetInfo.callback = args && typeof (args[0]) === "function" ? args[0] : null;
	        // Create a new object
	        var obj = new Base(targetInfo);
	        // Set the properties
	        obj.base = this.base ? this.base : this;
	        obj.parent = this;
	        // Return the object
	        return obj;
	    };
	    // Method to return a property of this object
	    Base.prototype.getProperty = function (propertyName, requestType) {
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
	        }
	        else {
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
	    };
	    // Method to get the next set of results
	    Base.prototype.getNextSetOfResults = function () {
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
	    };
	    // Method to update a collection object
	    Base.prototype.updateDataCollection = function (results) {
	        var _this = this;
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
	            }
	            else {
	                // Apply the methods to the results asynchronously
	                setTimeout(function () {
	                    var results = _this["results"];
	                    // Parse the results
	                    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
	                        var result = results_1[_i];
	                        // Add the references
	                        result["base"] = _this.base;
	                        result["executeMethod"] = _this.executeMethod;
	                        result["parent"] = _this;
	                        // Update the metadata
	                        _this.updateMetadata(result);
	                        // Add the methods
	                        _this.addMethods(result, result);
	                    }
	                }, 10);
	            }
	        }
	    };
	    // Method to convert the input arguments into an object
	    Base.prototype.updateDataObject = function () {
	        // Ensure the request doesn't have an error code
	        if (this.request.request.status < 400) {
	            // Return if we are expecting a buffer
	            if (this.requestType == lib_1.RequestType.GetBuffer) {
	                // Set the exists flag
	                this["existsFl"] = this.request.response != null;
	            }
	            else {
	                // Get the response
	                var response = this.request.response;
	                response = response === "" ? "{}" : response;
	                // Convert the response
	                var data = JSON.parse(response);
	                this["existsFl"] = typeof (this["Exists"]) === "boolean" ? this["Exists"] : data.error == null;
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
	    };
	    // Method to update the metadata
	    Base.prototype.updateMetadata = function (data) {
	        // Ensure this is the app web
	        if (!_1.ContextInfo.isAppWeb) {
	            return;
	        }
	        // Get the url information
	        var hostUrl = _1.ContextInfo.webAbsoluteUrl.toLowerCase();
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
	    };
	    // Method to update the metadata uri
	    Base.prototype.updateMetadataUri = function (metadata, targetInfo) {
	        // See if this is a field
	        if (/^SP.Field/.test(metadata.type) || /^SP\..*Field$/.test(metadata.type)) {
	            // Fix the uri reference
	            targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
	        }
	        else if (/SP.EventReceiverDefinition/.test(metadata.type)) {
	            // Fix the uri reference
	            targetInfo.url = targetInfo.url.replace(/\/EventReceiver\//, "/EventReceivers/");
	        }
	    };
	    // Method to validate the data collection results
	    Base.prototype.validateDataCollectionResults = function (request, promise) {
	        var _this = this;
	        promise = promise || new _1.Promise();
	        // Validate the response
	        if (request && request.request.status < 400 && typeof (request.response) === "string" && request.response.length > 0) {
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
	                    new _1.Request(true, new _1.TargetInfo(targetInfo), function (request) {
	                        // Convert the response and ensure the data property exists
	                        var data = JSON.parse(request.response);
	                        if (data.d) {
	                            // Update the data collection
	                            _this.updateDataCollection(data.d.results);
	                            // Validate the data collection
	                            return _this.validateDataCollectionResults(request, promise);
	                        }
	                        // Resolve the promise
	                        promise.resolve();
	                    });
	                }
	                else {
	                    // Add a method to get the next set of results
	                    this["next"] = new Function("return this.getNextSetOfResults();");
	                    // Resolve the promise
	                    promise.resolve();
	                }
	            }
	            else {
	                // Resolve the promise
	                promise.resolve();
	            }
	        }
	        else {
	            // Resolve the promise
	            promise.resolve();
	        }
	        // Return the promise
	        return promise;
	    };
	    // Method to wait for the parent requests to complete
	    Base.prototype.waitForRequestsToComplete = function (callback, requestIdx) {
	        var _this = this;
	        // Loop until the requests have completed
	        var intervalId = window.setInterval(function () {
	            var counter = 0;
	            // Parse the responses to the requests
	            for (var _i = 0, _a = _this.base.responses; _i < _a.length; _i++) {
	                var response = _a[_i];
	                // See if we are waiting until a specified index
	                if (requestIdx == counter++) {
	                    break;
	                }
	                // Return if the request hasn't completed
	                if (response.request == null || !response.request.completedFl) {
	                    return;
	                }
	                // Ensure the wait flag is set for the previous request
	                if (counter > 0 && _this.base.waitFlags[counter - 1] != true) {
	                    return;
	                }
	            }
	            // Clear the interval
	            window.clearInterval(intervalId);
	            // Execute the callback
	            callback();
	        }, 10);
	    };
	    return Base;
	}());
	exports.Base = Base;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	/*********************************************************************************************************************************/
	// Context Information
	// This class will return the _spPageContextInfo.
	/*********************************************************************************************************************************/
	exports.ContextInfo = {
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
	    alertsEnabled: this._contextInfo.alertsEnabled,
	    // Allow Silverlight Prompt
	    allowSilverlightPrompt: this._contextInfo.allowSilverlightPrompt == "True" ? true : false,
	    // Client Server Time Delta
	    clientServerTimeDelta: this._contextInfo.clientServerTimeDelta,
	    // Cross Domain Photos Enabled
	    crossDomainPhotosEnabled: this._contextInfo.crossDomainPhotosEnabled,
	    // Current Culture Name
	    currentCultureName: this._contextInfo.currentCultureName,
	    // Current Language
	    currentLanguage: this._contextInfo.currentLanguage,
	    // Current UI Culture Name
	    currentUICultureName: this._contextInfo.currentUICultureName,
	    // Environment
	    env: this._contextInfo.env,
	    // Exists Flag
	    existsFl: this._contextInfo.existsFl == null,
	    // Has Manage Web Permissions
	    hasManageWebPermissions: this._contextInfo.hasManageWebPermissions,
	    // Is Anonymous Guest User
	    isAnonymousGuestUser: this._contextInfo.isAnonymousGuestUser,
	    // Is App Web
	    isAppWeb: this._contextInfo.isAppWeb,
	    // Is Site Administrator
	    isSiteAdmin: this._contextInfo.isSiteAdmin,
	    // Layouts Url
	    layoutsUrl: this._contextInfo.layoutsUrl,
	    // Page Item Id
	    pageItemId: this._contextInfo.pageItemId,
	    // Page List Id
	    pageListId: this._contextInfo.pageListId,
	    // Page Personalization Scope
	    pagePersonalizationScope: this._contextInfo.pagePersonalizationScope,
	    // Profile Url
	    profileUrl: this._contextInfo.profileUrl,
	    // Server Request Path
	    serverRequestPath: this._contextInfo.serverRequestPath,
	    // Site Absolute Url
	    siteAbsoluteUrl: this._contextInfo.siteAbsoluteUrl,
	    // Site Client Tag
	    siteClientTag: this._contextInfo.siteClientTag,
	    // Site Server Relative Url
	    siteServerRelativeUrl: this._contextInfo.siteServerRelativeUrl,
	    // System User Key
	    systemUserKey: this._contextInfo.systemUserKey,
	    // Tenant App Version
	    tenantAppVersion: this._contextInfo.tenantAppVersion,
	    // Theme Cache Token
	    themeCacheToken: this._contextInfo.themeCacheToken,
	    // Update From Digest Page Loaded
	    updateFromDigestPageLoaded: this._contextInfo.updateFromDigestPageLoaded,
	    // User Id
	    userId: this._contextInfo.userId,
	    // User Login Name
	    userLoginName: this._contextInfo.userLoginName,
	    // Web Absolute Url
	    webAbsoluteUrl: this._contextInfo.webAbsoluteUrl,
	    // Web Language
	    webLanguage: this._contextInfo.webLanguage,
	    // Web Logo Url
	    webLogoUrl: this._contextInfo.webLogoUrl,
	    // Web Permissions Mask
	    webPermMask: this._contextInfo.webPermMask,
	    // Web Server Relative Url
	    webServerRelativeUrl: this._contextInfo.webServerRelativeUrl,
	    // Web Template
	    webTemplate: this._contextInfo.webTemplate,
	    // Web Title
	    webTitle: this._contextInfo.webTitle,
	    // Web UI Version
	    webUIVersion: this._contextInfo.webUIVersion,
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(8);
	/*********************************************************************************************************************************/
	// Dependencies
	// This class will ensure the core SP scripts are loaded on the page.
	/*********************************************************************************************************************************/
	var Dependencies = (function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Dependencies(callback) {
	        // Default the properties
	        this.promise = new _1.Promise(callback);
	        // Load the dependencies
	        this.loadDependencies();
	    }
	    Object.defineProperty(Dependencies.prototype, "MAX_WAIT", {
	        /*********************************************************************************************************************************/
	        // Constants
	        /*********************************************************************************************************************************/
	        get: function () { return 5; },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(Dependencies.prototype, "SCRIPTS", {
	        get: function () { return ["MicrosoftAjax.js", "init.js", "sp.runtime.js", "sp.js", "sp.core.js", "core.js"]; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Dependencies.prototype, "pageContextExistsFl", {
	        // Flag to determine if the page context information exists
	        get: function () { return _1.ContextInfo.webAbsoluteUrl != ""; },
	        enumerable: true,
	        configurable: true
	    });
	    /*********************************************************************************************************************************/
	    // Private Methods
	    /*********************************************************************************************************************************/
	    // Method to ensure the SP classes are loaded
	    Dependencies.prototype.loadDependencies = function () {
	        // See if the page context exists
	        if (this.pageContextExistsFl) {
	            // Resolve the promise
	            this.promise.resolve();
	        }
	        else {
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
	    };
	    // Method to wait for the page context to be loaded
	    Dependencies.prototype.waitForPageContext = function () {
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
	    };
	    return Dependencies;
	}());
	exports.Dependencies = Dependencies;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lib_1 = __webpack_require__(1);
	var _1 = __webpack_require__(8);
	/*********************************************************************************************************************************/
	// Helper Methods
	/*********************************************************************************************************************************/
	var Helper = (function () {
	    function Helper() {
	    }
	    // Method to copy a file in this app web to the host web
	    Helper.copyFileToHostWeb = function (fileUrl, dstFolder, overwriteFl, rootWebFl) {
	        var _this = this;
	        var srcFile = null;
	        var promise = new _1.Promise();
	        var origVal = window["$REST"].DefaultRequestToHostFl;
	        // Ensure the current web is an app web
	        if (!_1.ContextInfo.isAppWeb) {
	            // Error
	            console.error("[gd-sprest] The current web is not an app web.");
	            return;
	        }
	        // Get the host web
	        window["$REST"].DefaultRequestToHostFl = true;
	        var web = (new lib_1.Web(rootWebFl ? _1.ContextInfo.siteServerRelativeUrl : null));
	        // See if the folder url was given
	        if (typeof (dstFolder) === "string") {
	            // Get the folder
	            this.getFolder(web, dstFolder, true)
	                .done(function (folder) {
	                // Copy the file to the host web
	                _this.copyFileToHostWeb(fileUrl, folder, overwriteFl)
	                    .done(function (file, folder) { promise.resolve(file, folder); });
	            });
	        }
	        else {
	            // Get the file name
	            var fileName = fileUrl.split("/");
	            fileName = fileName[fileName.length - 1];
	            // Set the file urls
	            var dstFileUrl = window["SP"].Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
	            var srcFileUrl_1 = window["SP"].Utilities.UrlBuilder.urlCombine(_1.ContextInfo.webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));
	            // Get the destination file
	            web.getFileByServerRelativeUrl(dstFileUrl)
	                .execute(function (file) {
	                var promise = new _1.Promise();
	                // See if the file exists
	                if (file.Exists) {
	                    // Check out the file, and resolve the promise
	                    file.checkout().execute(function () { promise.resolve(); });
	                }
	                else {
	                    // Resolve the promise
	                    promise.resolve();
	                }
	                // Return the promiser
	                return promise;
	            });
	            // Target the current web
	            window["$REST"].DefaultRequestToHostFl = false;
	            // Get the current web
	            (new lib_1.Web())
	                .getFileByServerRelativeUrl(srcFileUrl_1)
	                .content()
	                .execute(function (content) {
	                var promise = new _1.Promise();
	                // Get the file name
	                var fileName = srcFileUrl_1.split("/");
	                fileName = fileName[fileName.length - 1];
	                // Target the host web
	                window["$REST"].DefaultRequestToHostFl = true;
	                // Add the file to the folder
	                dstFolder.Files().add(true, fileName, content.response)
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
	            web.done(function () { promise.resolve(srcFile, dstFolder); });
	        }
	        // Return the promise
	        return promise;
	    };
	    // Method to copy a file in this app web to the host web
	    Helper.copyFilesToHostWeb = function (fileUrls, folderUrls, overwriteFl, rootWebFl, idx, promise, files, folders) {
	        var _this = this;
	        files = files ? files : [];
	        folders = folders ? folders : [];
	        idx = idx ? idx : 0;
	        promise = promise ? promise : new _1.Promise();
	        // Ensure the array is not empty
	        if (fileUrls.length == idx || folderUrls.length == idx) {
	            // Resolve the promise and return it
	            promise.resolve(files, folders);
	            return promise;
	        }
	        // Copy the file
	        this.copyFileToHostWeb(fileUrls[idx], folderUrls[idx], overwriteFl, rootWebFl)
	            .done(function (file, folder) {
	            // Save a reference to the file and folder
	            files.push(file);
	            folders.push(folder);
	            // Copy the files
	            _this.copyFilesToHostWeb(fileUrls, folderUrls, overwriteFl, rootWebFl, ++idx, promise, files, folders);
	        });
	        // Return the promise
	        return promise;
	    };
	    // Method to create sub-folders
	    Helper.createSubFolders = function (folder, subFolderUrl, promise) {
	        var _this = this;
	        // Ensure the promise exists
	        promise = promise ? promise : new _1.Promise();
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
	                    promise.resolve(subFolder);
	                }
	                else {
	                    // Create the sub folder
	                    _this.createSubFolders(subFolder, subFolderUrl, promise);
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
	        // Return a promise
	        return promise;
	    };
	    // Method to get a folder
	    Helper.getFolder = function (web, folderUrl, createFl) {
	        var _this = this;
	        var dstFolder = null;
	        var promise = new _1.Promise();
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
	                .execute(function (folder) {
	                var promise = new _1.Promise();
	                // Ensure the folder exists
	                if (folder.Exists) {
	                    // Save a reference to the folder
	                    dstFolder = folder;
	                    // Resolve the promise
	                    promise.resolve();
	                }
	                else {
	                    // Create the folder
	                    _this.createSubFolders(web.RootFolder(), folderUrl).done(function (folder) {
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
	    };
	    // Method to remove empty folders
	    Helper.removeEmptyFolders = function (web, folderUrls) {
	        var promise = new _1.Promise();
	        // Ensure folder urls exist
	        if (folderUrls.length == 0) {
	            // Resolve the promise and return it
	            promise.resolve();
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
	                    var promise = new _1.Promise();
	                    // See if the folder is empty
	                    if (folder.ItemCount == 0) {
	                        // Delete the folder, and resolve the promise
	                        folder.delete().execute(function () { promise.resolve(); });
	                    }
	                    else {
	                        // Resolve the proise
	                        promise.resolve();
	                    }
	                    // Return the promise
	                    return promise;
	                }, true);
	            }
	            // Wait for the requests to complete, and resolve the promise
	            web.done(function () { promise.resolve(); });
	        }
	        // Return the promise
	        return promise;
	    };
	    // Method to remove a file
	    Helper.removeFile = function (web, fileUrl) {
	        var promise = new _1.Promise();
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
	                file.delete().execute(function () { promise.resolve(); });
	            }
	            else {
	                // Resolve the promises
	                promise.resolve();
	            }
	        }, true);
	        // Return the promise
	        return promise;
	    };
	    // Method to remove files
	    Helper.removeFiles = function (web, fileUrls, idx, promise) {
	        var _this = this;
	        idx = idx ? idx : 0;
	        promise = promise ? promise : new _1.Promise();
	        // See if we have removed all files
	        if (fileUrls.length == idx) {
	            // Resolve the promise and return it
	            promise.resolve();
	        }
	        else {
	            // Remove the file
	            this.removeFile(web, fileUrls[idx]).done(function () {
	                // Remove the files
	                _this.removeFiles(web, fileUrls, ++idx, promise);
	            });
	        }
	        // Return the promise
	        return promise;
	    };
	    return Helper;
	}());
	exports.Helper = Helper;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var attachment = __webpack_require__(2);
	var attachmentFiles = __webpack_require__(3);
	var audit = __webpack_require__(4);
	var contentType = __webpack_require__(5);
	var contentTypes = __webpack_require__(6);
	var eventReceiver = __webpack_require__(14);
	var eventReceivers = __webpack_require__(15);
	var field = __webpack_require__(16);
	var fieldLinks = __webpack_require__(17);
	var fields = __webpack_require__(18);
	var file = __webpack_require__(19);
	var files = __webpack_require__(20);
	var fileVersion = __webpack_require__(21);
	var fileVersions = __webpack_require__(22);
	var folder = __webpack_require__(23);
	var folders = __webpack_require__(24);
	var group = __webpack_require__(25);
	var items = __webpack_require__(26);
	var limitedWebPartManager = __webpack_require__(27);
	var list = __webpack_require__(28);
	var listItem = __webpack_require__(29);
	var lists = __webpack_require__(30);
	var peopleManager = __webpack_require__(31);
	var peoplePicker = __webpack_require__(32);
	var profileLoader = __webpack_require__(33);
	var propertyValues = __webpack_require__(34);
	var roleAssignment = __webpack_require__(35);
	var roleAssignments = __webpack_require__(36);
	var roleDefinition = __webpack_require__(37);
	var roleDefinitions = __webpack_require__(38);
	var search = __webpack_require__(39);
	var site = __webpack_require__(40);
	var siteGroups = __webpack_require__(41);
	var socialFeed = __webpack_require__(42);
	var user = __webpack_require__(43);
	var userCustomAction = __webpack_require__(44);
	var userCustomActions = __webpack_require__(45);
	var userProfile = __webpack_require__(46);
	var users = __webpack_require__(47);
	var versions = __webpack_require__(48);
	var view = __webpack_require__(49);
	var viewFieldCollection = __webpack_require__(50);
	var views = __webpack_require__(51);
	var web = __webpack_require__(52);
	var webs = __webpack_require__(53);
	/**
	 * Mapper
	 */
	exports.Mapper = {
	    attachment: attachment.default,
	    attachmentFiles: attachmentFiles.default,
	    audit: audit.default,
	    contentType: contentType.default,
	    contentTypes: contentTypes.default,
	    eventReceiver: eventReceiver.default,
	    eventReceivers: eventReceivers.default,
	    field: field.default,
	    fieldLinks: fieldLinks.default,
	    fields: fields.default,
	    file: file.default,
	    files: files.default,
	    fileVersion: fileVersion.default,
	    fileVersions: fileVersions.default,
	    folder: folder.default,
	    folders: folders.default,
	    group: group.default,
	    items: items.default,
	    limitedWebPartManager: limitedWebPartManager.default,
	    list: list.default,
	    listItem: listItem.default,
	    lists: lists.default,
	    peopleManager: peopleManager.default,
	    peoplePicker: peoplePicker.default,
	    profileLoader: profileLoader.default,
	    propertyValues: propertyValues.default,
	    roleAssignment: roleAssignment.default,
	    roleAssignments: roleAssignments.default,
	    roleDefinition: roleDefinition.default,
	    roleDefinitions: roleDefinitions.default,
	    search: search.default,
	    site: site.default,
	    siteGroups: siteGroups.default,
	    socialFeed: socialFeed.default,
	    user: user.default,
	    userCustomAction: userCustomAction.default,
	    userCustomActions: userCustomActions.default,
	    userProfile: userProfile.default,
	    users: users.default,
	    versions: versions.default,
	    view: view.default,
	    viewFieldCollection: viewFieldCollection.default,
	    views: views.default,
	    web: web.default,
	    webs: webs.default
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Deletes the object
	    delete: {
	        requestType: _1.RequestType.Delete
	    },
	    // Updates it's properties.
	    update: {
	        metadataType: "SP.EventReceiverDefinition",
	        name: "",
	        requestMethod: "MERGE",
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds an event receiver to the collection.
	    add: {
	        metadataType: "SP.EventReceiverDefinition",
	        name: "",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Gets an event receiver by it's id.
	    getById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "eventreceiver"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Deletes the object
	    delete: {
	        requestType: _1.RequestType.Delete
	    },
	    // Sets the value of the ShowInDisplayForm property for this field.
	    setShowInDisplayForm: {
	        argNames: ["showInForm"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Sets the value of the ShowInEditForm property for this field.
	    setShowInEditForm: {
	        argNames: ["showInForm"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Sets the value of the ShowInNewForm property for this field.
	    setShowInNewForm: {
	        argNames: ["showInForm"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Updates it's properties.
	    update: {
	        inheritMetadataType: true,
	        name: "",
	        requestMethod: "MERGE",
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds a field link to the collection.
	    add: {
	        argNames: ["data"],
	        metadataType: "SP.FieldLink",
	        name: "",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Gets a field link by it's id.
	    getById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "fieldlink"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds a field to the field collection.
	    add: {
	        metadataType: "SP.Field",
	        name: "",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Adds a field to the field collection.
	    addField: {
	        argNames: ["parameters"],
	        metadataType: "SP.FieldCreationInformation",
	        name: "addField",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
	    addDependentLookupField: {
	        argNames: ["displayname", "primarylookupfieldid", "showfield"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Creates a field based on the specified schema, Boolean value, and field options.
	    // Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
	    createFieldAsXml: {
	        argNames: ["schemaXml"],
	        requestType: _1.RequestType.PostWithArgsInBody,
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
	        requestType: _1.RequestType.PostWithArgsValueOnly,
	        returnType: "field"
	    },
	    // Returns the first Field object with the specified internal name or title from the collection.
	    getByInternalNameOrTitle: {
	        argNames: ["internalNameOrTitle"],
	        requestType: _1.RequestType.PostWithArgsValueOnly,
	        returnType: "field"
	    },
	    // Returns the first field object in the collection based on the title of the specified field.
	    getByTitle: {
	        argNames: ["title"],
	        requestType: _1.RequestType.PostWithArgsValueOnly,
	        returnType: "field"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Library
	/*********************************************************************************************************************************/
	var Library = {
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
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
	    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
	    // This method is currently available only on Office 365.
	    cancelupload: {
	        argNames: ["uploadId"],
	        name: "cancelupload(guid'[[uploadId]]')",
	        requestType: _1.RequestType.PostReplace
	    },
	    // Checks the file in to a document library based on the check-in type.
	    // Check-In Types: MinorCheckIn = 0; MajorCheckIn = 1; OverwriteCheckIn = 2
	    checkin: {
	        argNames: ["comment", "checkInType"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Checks out the file from a document library based on the check-out type.
	    checkout: {
	        requestType: _1.RequestType.Post
	    },
	    // Returns the file content.
	    content: {
	        name: "$value",
	        requestType: _1.RequestType.GetBuffer
	    },
	    // Continues the chunk upload session with an additional fragment. The current file content is not changed.
	    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
	    // This method is currently available only on Office 365.
	    continueUpload: {
	        argNames: ["uploadId", "fileOffset"],
	        name: "continueUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
	        requestType: _1.RequestType.PostReplace
	    },
	    // Copies the file to the destination URL.
	    copyTo: {
	        argNames: ["strNewUrl", "bOverWrite"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Deletes the object
	    delete: {
	        requestType: _1.RequestType.Delete
	    },
	    // Denies approval for a file that was submitted for content approval.
	    // Only documents in lists that are enabled for content approval can be denied.
	    deny: {
	        argNames: ["comment"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
	    // Use the uploadId value that was passed to the StartUpload method that started the upload session.
	    // This method is currently available only on Office 365.
	    finishUpload: {
	        argNames: ["uploadId", "fileOffset"],
	        name: "finishUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
	        requestType: _1.RequestType.PostReplace
	    },
	    // Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
	    // An exception is thrown if the file is not an ASPX page.
	    // Type of scopes: 
	    getlimitedwebpartmanager: {
	        argNames: ["scope"],
	        name: "getLimitedWebPartManager(scope=[[scope]])",
	        requestType: _1.RequestType.GetReplace
	    },
	    // Moves the file to the specified destination URL.
	    // Types of move operations: Overwrite = 1; AllowBrokenThickets (move even if supporting files are separated from the file) = 8.
	    moveTo: {
	        argNames: ["newUrl", "flags"],
	        name: "moveTo(newUrl='[[newUrl]]', flags=[[flags]])",
	        requestType: _1.RequestType.PostReplace
	    },
	    // Opens the file as a stream.
	    openBinaryStream: {
	        requestType: _1.RequestType.GetBuffer
	    },
	    // Submits the file for content approval with the specified comment.
	    publish: {
	        argNames: ["comment"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	    recycle: {
	        requestType: _1.RequestType.Get
	    },
	    // Saves the file as a stream.
	    saveBinaryStream: {
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
	    // The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
	    // The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
	    startUpload: {
	        argNames: ["uploadId"],
	        name: "startupload(uploadId=guid'[[uploadId]]')",
	        requestType: _1.RequestType.PostReplace
	    },
	    // Reverts an existing checkout for the file.
	    undoCheckOut: {
	        requestType: _1.RequestType.Post
	    },
	    // Removes the file from content approval or unpublish a major version.
	    unpublish: {
	        argNames: ["comment"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Updates it's properties.
	    update: {
	        metadataType: "SP.File",
	        name: "",
	        requestMethod: "MERGE",
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds a file to this collection.
	    add: {
	        argNames: ["overwrite", "url"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Adds a ghosted file to an existing list or document library.
	    // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
	    addTemplateFile: {
	        argNames: ["urlOfFile", "templateFileType"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Get the file at the specified URL.
	    getByUrl: {
	        argNames: ["serverRelativeUrl"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "file"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	var Library = {
	    /*********************************************************************************************************************************/
	    // Properties
	    /*********************************************************************************************************************************/
	    properties: [],
	    /*********************************************************************************************************************************/
	    // Methods
	    /*********************************************************************************************************************************/
	    // Deletes the object
	    delete: {
	        requestType: _1.RequestType.Delete
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Deletes the object
	    delete: {
	        requestType: _1.RequestType.Delete
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	var Library = {
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
	        requestType: _1.RequestType.Delete
	    },
	    // Get the file at the specified URL.
	    getByUrl: {
	        argNames: ["serverRelativeUrl"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "folder"
	    },
	    // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	    recycle: {
	        requestType: _1.RequestType.Post
	    },
	    // Updates it's properties.
	    update: {
	        metadataType: "SP.Folder",
	        name: "",
	        requestMethod: "MERGE",
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Library
	/*********************************************************************************************************************************/
	var Library = {
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
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Get the file at the specified URL.
	    getbyurl: {
	        argNames: ["serverRelativeUrl"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "folder"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	var Library = {
	    /*********************************************************************************************************************************/
	    // Properties
	    /*********************************************************************************************************************************/
	    properties: [
	        "Users|users|/getById([Name])|user"
	    ],
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds an item to the list item collection.
	    add: {
	        metadataType: function (obj) { return obj.Parent && obj.Parent["ListItemEntityTypeFullName"] ? obj.Parent["ListItemEntityTypeFullName"] : "SP.ListItem"; },
	        name: "",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Gets an item by its id.
	    getById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "listitem"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Gets a webpart by its id.
	    get_WebParts: {
	        argNames: ["id"],
	        name: "webparts?expand=WebPart",
	        requestType: _1.RequestType.GetReplace
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../definitions/targetInfo.d.ts" />
	var utils_1 = __webpack_require__(8);
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// List
	// The SPList object.
	/*********************************************************************************************************************************/
	var List = (function (_super) {
	    __extends(List, _super);
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function List(listName, targetInfo) {
	        // Call the base constructor
	        _super.call(this, targetInfo);
	        // Default the properties
	        this.defaultToWebFl = true;
	        this.responses = [];
	        this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";
	        // Add the methods
	        this.addMethods(this, { __metadata: { type: "list" } });
	    }
	    return List;
	}(utils_1.Base));
	exports.List = List;
	/*********************************************************************************************************************************/
	// Library
	/*********************************************************************************************************************************/
	//{ name: "hasAccess", "function": function (userName, permissions) { return hasAccess(this, permissions, userName); } },
	var Library = {
	    /*********************************************************************************************************************************/
	    // Properties
	    /*********************************************************************************************************************************/
	    properties: [
	        "BrowserFileHandling", "ContentTypes|contenttypes|([Name])|contenttype", "CreatablesInfo", "DefaultView|view",
	        "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field",
	        "FirstUniqueAncestorSecurableObject", "Forms|forms|('[Name]')|form", "InformationRightsManagementSettings",
	        "Items|items|([Name])|item", "ParentWeb", "RoleAssignments|roleassignments|([Name])|roleassignment",
	        "RootFolder|folder|/getByUrl('[Name]')|file", "Subscriptions", "TitleResource",
	        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "Views|views||('[Name]')|view", "WorkflowAssociations"
	    ],
	    /*********************************************************************************************************************************/
	    // Methods
	    /*********************************************************************************************************************************/
	    // Creates unique role assignments for the securable object.
	    breakRoleInheritance: {
	        argNames: ["copyroleassignments", "clearsubscopes"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Deletes the object
	    delete: {
	        requestType: _1.RequestType.Delete
	    },
	    // Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
	    getChanges: {
	        argNames: ["query"],
	        metadataType: "SP.ChangeQuery",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Returns an item based on the id.
	    getItemById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "item"
	    },
	    // Returns a collection of items from the list based on the view xml.
	    getItems: {
	        argNames: ["viewXml"],
	        requestType: _1.RequestType.PostWithArgsInBody,
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
	        requestType: _1.RequestType.PostWithArgsInBody,
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
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
	    getRelatedFields: {
	        requestType: _1.RequestType.Get
	    },
	    // Gets the effective user permissions for the current user.
	    getUserEffectivePermissions: {
	        argNames: ["loginName"],
	        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
	        requestType: _1.RequestType.GetReplace
	    },
	    // Returns the list view with the specified view identifier.
	    getViewById: {
	        argNames: ["viewId"],
	        name: "getView",
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "view"
	    },
	    // Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	    recycle: {
	        requestType: _1.RequestType.Post
	    },
	    // Renders the list data.
	    renderListData: {
	        argNames: ["viewXml"],
	        name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
	        requestType: _1.RequestType.PostReplace
	    },
	    // Renders the list form data.
	    // Types of modes: 1 - Display, 2 - Edit, 3 - New
	    renderListFormData: {
	        argNames: ["itemid", "formid", "mode"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Reserves a list item ID for idempotent list item creation.
	    reserveListItemId: {
	        requestType: _1.RequestType.Post
	    },
	    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
	    resetRoleInheritance: {
	        requestType: _1.RequestType.Post
	    },
	    // Updates it's properties.
	    update: {
	        metadataType: "SP.List",
	        name: "",
	        requestMethod: "MERGE",
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	var Library = {
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
	    // Adds the attachment that is represented by the specified file name and byte array to the list item.
	    //{ name: "addAttachmentFile", "function": function (file) { var thisObj = this; var promise = new Promise(); getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.addAttachment(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },
	    // Creates unique role assignments for the securable object.
	    breakRoleInheritance: {
	        argNames: ["copyroleassignments", "clearsubscopes"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Deletes the object
	    delete: {
	        requestType: _1.RequestType.Delete
	    },
	    // Gets the effective permissions that a specified user has on the list item.
	    getUserEffectivePermissions: {
	        argNames: ["loginName"],
	        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
	        requestType: _1.RequestType.GetReplace
	    },
	    // Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	    recycle: {
	        requestType: _1.RequestType.Post
	    },
	    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
	    resetRoleInheritance: {
	        requestType: _1.RequestType.Post
	    },
	    // Updates it's properties.
	    update: {
	        inheritMetadataType: true,
	        name: "",
	        requestMethod: "MERGE",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Validates and sets the values of the specified collection of fields for the list item.
	    validateUpdateListItem: {
	        argNames: ["formValues", "bNewDocumentUpdate"],
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds a list to the list collection.
	    add: {
	        metadataType: "SP.List",
	        name: "",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
	    ensureSiteAssetsLibrary: {
	        requestType: _1.RequestType.Post
	    },
	    // Gets a list that is the default location for wiki pages.
	    ensureSitePagesLibrary: {
	        requestType: _1.RequestType.Post
	    },
	    // Returns the list with the specified list identifier.
	    getById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "list"
	    },
	    // Returns the list with the specified title from the collection.
	    getByTitle: {
	        argNames: ["title"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "list"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../definitions/peopleManager.d.ts" />
	var utils_1 = __webpack_require__(8);
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// People Manager
	/*********************************************************************************************************************************/
	var PeopleManager = (function (_super) {
	    __extends(PeopleManager, _super);
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function PeopleManager(targetInfo) {
	        // Call the base constructor
	        _super.call(this, targetInfo);
	        // Default the properties
	        this.defaultToWebFl = true;
	        this.responses = [];
	        this.targetInfo.endpoint = "sp.userprofiles.peoplemanager";
	        // Add the methods
	        this.addMethods(this, { __metadata: { type: "peoplemanager" } });
	    }
	    return PeopleManager;
	}(utils_1.Base));
	exports.PeopleManager = PeopleManager;
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    amIFollowedBy: {
	        argNames: ["accountName"],
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    amIFollowing: {
	        argNames: ["accountName"],
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    follow: {
	        argNames: ["accountName"],
	        requestType: _1.RequestType.PostWithArgsInQS
	    },
	    followTag: {
	        argNames: ["id"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    getFollowedTags: {
	        argNames: ["maxCount"],
	        requestType: _1.RequestType.GetWithArgsValueOnly
	    },
	    getFollowersFor: {
	        argNames: ["accountName"],
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    getMyFollowers: {
	        requestType: _1.RequestType.Get
	    },
	    getMyProperties: {
	        requestType: _1.RequestType.Get
	    },
	    getMySuggestions: {
	        requestType: _1.RequestType.Get
	    },
	    getPeopleFollowedBy: {
	        argNames: ["accountName"],
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    getPeopleFollowedByMe: {
	        requestType: _1.RequestType.Get
	    },
	    getPropertiesFor: {
	        argNames: ["accountName"],
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    getTrendingTags: {
	        name: "sp.userprofiles.peoplemanager.gettrendingtags",
	        replaceEndpointFl: true,
	        requestType: _1.RequestType.Get
	    },
	    getUserProfilePropertyFor: {
	        argNames: ["accountName", "propertyName"],
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    hideSuggestion: {
	        argNames: ["accountName"],
	        requestType: _1.RequestType.PostWithArgsInQS
	    },
	    isFollowing: {
	        argNames: ["possibleFollowerAccountName", "possibleFolloweeAccountName"],
	        name: "sp.userprofiles.peoplemanager.isfollowing",
	        replaceEndpointFl: true,
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    setMyProfilePicture: {
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    stopFollowing: {
	        argNames: ["accountName"],
	        requestType: _1.RequestType.PostWithArgsInQS
	    },
	    stopFollowingTag: {
	        argNames: ["id"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../definitions/peoplePicker.d.ts" />
	var utils_1 = __webpack_require__(8);
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// People Picker
	/*********************************************************************************************************************************/
	var PeoplePicker = (function (_super) {
	    __extends(PeoplePicker, _super);
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function PeoplePicker(targetInfo) {
	        // Call the base constructor
	        _super.call(this, targetInfo);
	        // Default the properties
	        this.defaultToWebFl = true;
	        this.responses = [];
	        this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
	        // Add the methods
	        this.addMethods(this, { __metadata: { type: "peoplepicker" } });
	    }
	    return PeoplePicker;
	}(utils_1.Base));
	exports.PeoplePicker = PeoplePicker;
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    clientPeoplePickerResolveUser: {
	        argNames: ["queryParams"],
	        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
	        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser",
	        replaceEndpointFl: true,
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    clientPeoplePickerSearchUser: {
	        argNames: ["queryParams"],
	        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
	        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser",
	        replaceEndpointFl: true,
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var utils_1 = __webpack_require__(8);
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Profile Loader
	/*********************************************************************************************************************************/
	var ProfileLoader = (function (_super) {
	    __extends(ProfileLoader, _super);
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function ProfileLoader(targetInfo) {
	        // Call the base constructor
	        _super.call(this, targetInfo);
	        // Default the properties
	        this.defaultToWebFl = true;
	        this.responses = [];
	        this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
	        this.targetInfo.method = "POST";
	        // Add the methods
	        this.addMethods(this, { __metadata: { type: "profileloader" } });
	    }
	    return ProfileLoader;
	}(utils_1.Base));
	exports.ProfileLoader = ProfileLoader;
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    createPersonalSiteEnqueueBulk: {
	        argNames: ["emailIDs"],
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    getOwnerUserProfile: {
	        name: "sp.userprofiles.profileloader.getowneruserprofile",
	        replaceEndpointFl: true,
	        requestType: _1.RequestType.Post,
	        returnType: "userprofile"
	    },
	    getUserProfile: {
	        requestType: _1.RequestType.Post,
	        returnType: "userprofile"
	    },
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Library
	/*********************************************************************************************************************************/
	var Library = {
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	var Library = {
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
	        requestType: _1.RequestType.Delete
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds a new role assignment with the specified principal and role definitions to the collection.
	    addRoleAssignment: {
	        argNames: ["principalId", "roleDefId"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Gets the role assignment associated with the specified principal ID from the collection.
	    getByPrincipalId: {
	        argNames: ["principalId"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "roleassignment"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    },
	    // Gets the role definition with the specified role type.
	    removeRoleAssignment: {
	        argNames: ["principalId", "roleDefId"],
	        requestType: _1.RequestType.PostWithArgs
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Deletes the object
	    delete: {
	        requestType: _1.RequestType.Delete
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Gets the role definition with the specified ID from the collection.
	    getById: {
	        argNames: ["roleDefId"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "roledefinition"
	    },
	    // Gets the role definition with the specified name.
	    getByName: {
	        argNames: ["name"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "roledefinition"
	    },
	    // Gets the role definitions with the specified role type.
	    getByType: {
	        argNames: ["roleType"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "roledefinitions"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../definitions/search.d.ts" />
	var utils_1 = __webpack_require__(8);
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Search
	/*********************************************************************************************************************************/
	var Search = (function (_super) {
	    __extends(Search, _super);
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Search(url, targetInfo) {
	        // Call the base constructor
	        _super.call(this, targetInfo);
	        // Default the properties
	        this.defaultToWebFl = true;
	        this.responses = [];
	        this.targetInfo.endpoint = "search";
	        // See if the web url exists
	        if (url) {
	            // Set the settings
	            this.targetInfo.url = url;
	        }
	        // Add the methods
	        this.addMethods(this, { __metadata: { type: "search" } });
	    }
	    /*********************************************************************************************************************************/
	    // Methods
	    /*********************************************************************************************************************************/
	    // Method to compute the argument names
	    Search.prototype.getArgNames = function (parameters) {
	        var argNames = [];
	        // Parse the arguments
	        for (var key in parameters) {
	            // Append the argument to the array
	            argNames.push(key);
	        }
	        // Return the argument names
	        return argNames;
	    };
	    /** The query method */
	    Search.prototype.query = function (settings) {
	        // Execute the request
	        return this.executeMethod("query", {
	            argNames: this.getArgNames(settings),
	            name: "query",
	            requestType: _1.RequestType.GetWithArgs
	        }, settings);
	    };
	    /** The suggest method */
	    Search.prototype.suggest = function (settings) {
	        // Execute the request
	        return this.executeMethod("suggest", {
	            argNames: this.getArgNames(settings),
	            name: "suggest",
	            requestType: _1.RequestType.GetWithArgs
	        }, settings);
	    };
	    return Search;
	}(utils_1.Base));
	exports.Search = Search;
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    postquery: {
	        argNames: ["request"],
	        metadataType: "Microsoft.Office.Server.Search.REST.SearchRequest",
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../definitions/audit.d.ts" />
	/// <reference path="../definitions/site.d.ts" />
	var utils_1 = __webpack_require__(8);
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Site
	// The SPSite object.
	/*********************************************************************************************************************************/
	var Site = (function (_super) {
	    __extends(Site, _super);
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Site(url, targetInfo) {
	        // Call the base constructor
	        _super.call(this, targetInfo);
	        // Default the properties
	        this.defaultToWebFl = true;
	        this.responses = [];
	        this.targetInfo.endpoint = "site";
	        // See if the web url exists
	        if (url) {
	            // Set the settings
	            this.targetInfo.url = url;
	        }
	        // Add the methods
	        this.addMethods(this, { __metadata: { type: "site" } });
	    }
	    // Method to get the root web
	    Site.prototype.getRootWeb = function () { return new _1.Web(null, this.targetInfo); };
	    // Method to determine if the current user has access, based on the permissions.
	    Site.prototype.hasAccess = function (permissions) {
	        // TO DO
	        return true;
	    };
	    ;
	    return Site;
	}(utils_1.Base));
	exports.Site = Site;
	/*********************************************************************************************************************************/
	// Library
	/*********************************************************************************************************************************/
	var Library = {
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
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
	    extendUpgradeReminderDate: {
	        requestType: _1.RequestType.Post
	    },
	    // Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
	    getCatalog: {
	        argNames: ["typeCatalog"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
	    getChanges: {
	        argNames: ["query"],
	        metadataType: "SP.ChangeQuery",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Specifies the collection of custom list templates for a given site.
	    getCustomListTemplates: {
	        argNames: ["web"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Returns the collection of site definitions that are available for creating Web sites within the site collection.
	    getWebTemplates: {
	        argNames: ["LCID", "overrideCompatLevel"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
	    invalidate: {
	        requestType: _1.RequestType.Post
	    },
	    // Returns true if the object needs to be upgraded; otherwise, false.
	    needsUpgradeByType: {
	        argNames: ["versionUpgrade", "recursive"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Returns the site at the specified URL.
	    openWeb: {
	        argNames: ["strUrl"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Returns the site with the specified GUID.
	    openWebById: {
	        argNames: ["gWebId"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
	    runHealthCheck: {
	        argNames: ["ruleId", "bRepair", "bRunAlways"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
	    runUpgradeSiteSession: {
	        argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Updates it's properties.
	    update: {
	        metadataType: "SP.Site",
	        name: "",
	        requestMethod: "MERGE",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
	    updateClientObjectModelUseRemoteAPIsPermissionSetting: {
	        argNames: ["requireUseRemoteAPIs"],
	        requestType: _1.RequestType.PostWithArgs
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds a group to the group collection.
	    add: {
	        metadataType: "SP.Group",
	        name: "",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Returns a group from the collection based on the member ID of the group.
	    getById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "group"
	    },
	    // Returns a cross-site group from the collection based on the name of the group.
	    getByName: {
	        argNames: ["name"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "group"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    },
	    // Removes the group with the specified member ID from the collection.
	    removeById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Removes the cross-site group with the specified name from the collection.
	    removeByLoginName: {
	        argNames: ["name"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../definitions/socialFeed.d.ts" />
	var utils_1 = __webpack_require__(8);
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Social Feed
	/*********************************************************************************************************************************/
	var _SocialFeed = (function (_super) {
	    __extends(_SocialFeed, _super);
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function _SocialFeed(targetInfo) {
	        // Call the base constructor
	        _super.call(this, targetInfo);
	        // Default the properties
	        this.defaultToWebFl = true;
	        this.responses = [];
	        this.targetInfo.endpoint = "social.feed";
	        // Add the methods
	        this.addMethods(this, { __metadata: { type: "socialfeed" } });
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
	            requestType: _1.RequestType.PostWithArgsInBody
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
	            requestType: _1.RequestType.PostWithArgsInBody
	        }, [postInfo]);
	    };
	    return _SocialFeed;
	}(utils_1.Base));
	/*********************************************************************************************************************************/
	// Libraries
	/*********************************************************************************************************************************/
	var Library = {
	    actor: {
	        argNames: ["accountName"],
	        name: "actor(item=@v)?@v='[[accountName]]'",
	        requestType: _1.RequestType.GetReplace
	    },
	    actorFeed: {
	        argNames: ["accountName"],
	        name: "actor(item=@v)/feed?@v='[[accountName]]'",
	        requestType: _1.RequestType.GetReplace
	    },
	    clearMyUnreadMentionCount: {
	        name: "my/mentionfeed/clearMyUnreadMentionCount",
	        requestType: _1.RequestType.Post
	    },
	    my: {
	        name: "my",
	        requestType: _1.RequestType.Get
	    },
	    myFeed: {
	        name: "my/feed",
	        requestType: _1.RequestType.Get
	    },
	    myLikes: {
	        name: "my/likes",
	        requestType: _1.RequestType.Get
	    },
	    myMentionFeed: {
	        name: "my/mentionfeed",
	        requestType: _1.RequestType.Get
	    },
	    myNews: {
	        name: "my/news",
	        requestType: _1.RequestType.Get
	    },
	    myTimelineFeed: {
	        name: "my/timelinefeed",
	        requestType: _1.RequestType.Get
	    },
	    myUnreadMentionCount: {
	        name: "my/unreadmentioncount",
	        requestType: _1.RequestType.Get
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;
	/*********************************************************************************************************************************/
	// Social Feed
	/*********************************************************************************************************************************/
	exports.SocialFeed = new _SocialFeed();


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	var Library = {
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
	        requestType: _1.RequestType.Delete
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Deletes the object
	    delete: {
	        requestType: _1.RequestType.Delete
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds a user custom action to the collection.
	    add: {
	        metadataType: "SP.UserCustomAction",
	        name: "",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Deletes all custom actions in the collection.
	    clear: {
	        requestType: _1.RequestType.Post
	    },
	    // Returns the custom action with the specified identifier.
	    getById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "usercustomaction"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../definitions/userProfile.d.ts" />
	var utils_1 = __webpack_require__(8);
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// User Profile
	/*********************************************************************************************************************************/
	var UserProfile = (function (_super) {
	    __extends(UserProfile, _super);
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function UserProfile(targetInfo) {
	        // Call the base constructor
	        _super.call(this, targetInfo);
	        // Default the properties
	        this.defaultToWebFl = true;
	        this.responses = [];
	        this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
	        this.targetInfo.method = "POST";
	        // Add the methods
	        this.addMethods(this, { __metadata: { type: "userprofile" } });
	    }
	    return UserProfile;
	}(utils_1.Base));
	exports.UserProfile = UserProfile;
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
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
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    shareAllSocialData: {
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds a user to the user collection.
	    add: {
	        metadataType: "SP.User",
	        name: "",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Gets the user with the specified email address.
	    getByEmail: {
	        argNames: ["email"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "user"
	    },
	    // Gets the user with the specified member identifier (ID).
	    getById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "user"
	    },
	    // Gets the user with the specified login name.
	    getByLoginName: {
	        argNames: ["loginName"],
	        name: "getByLoginName(@v)?@v='[[loginName]]'",
	        requestType: _1.RequestType.GetReplace,
	        returnType: "user"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    },
	    // Removes the user with the specified ID.
	    removeById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Removes the user with the specified login name.
	    removeByLoginName: {
	        argNames: ["loginName"],
	        name: "removeByLoginName(@v)?@v='[[loginName]]'",
	        requestType: _1.RequestType.PostReplace
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Gets the version with the specified ID.
	    getById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "version"
	    },
	    // Deletes all versions in the collection.
	    deleteAll: {
	        requestType: _1.RequestType.Post
	    },
	    // Deletes a version, by the specified id.
	    deleteById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Deletes a version, by the specified label.
	    deleteByLabel: {
	        argNames: ["label"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Restores a version, by the specified label.
	    restoreByLabel: {
	        argNames: ["label"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	var Library = {
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
	        requestType: _1.RequestType.Delete
	    },
	    // Returns the list view as HTML.
	    renderAsHtml: {
	        requestType: _1.RequestType.Get
	    },
	    // Updates it's properties.
	    update: {
	        metadataType: "SP.View",
	        name: "",
	        requestMethod: "MERGE",
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds the field with the specified field internal name or display name to the collection.
	    addViewField: {
	        argNames: ["fieldName"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Moves the field with the specified field internal name to the specified position in the collection.
	    moveViewFieldTo: {
	        argNames: ["field", "index"],
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    },
	    // Removes all the fields from the collection.
	    removeAllViewFields: {
	        requestType: _1.RequestType.Post
	    },
	    // Removes the field with the specified field internal name from the collection.
	    removeViewField: {
	        argNames: ["fieldName"],
	        requestType: _1.RequestType.GetWithArgsValueOnly
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    // Adds a view to the view collection.
	    add: {
	        metadataType: "SP.View",
	        name: "",
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Gets the list view with the specified ID.
	    getById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "view"
	    },
	    // Gets the list view with the specified title.
	    getByTitle: {
	        argNames: ["title"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "view"
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../definitions/web.d.ts" />
	var utils_1 = __webpack_require__(8);
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Web
	/*********************************************************************************************************************************/
	var Web = (function (_super) {
	    __extends(Web, _super);
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Web(url, targetInfo) {
	        // Call the base constructor
	        _super.call(this, targetInfo);
	        // Default the properties
	        this.defaultToWebFl = true;
	        this.responses = [];
	        this.targetInfo.endpoint = "web";
	        // See if the web url exists
	        if (url) {
	            // Set the settings
	            this.targetInfo.url = url;
	        }
	        // Add the methods
	        this.addMethods(this, { __metadata: { type: "web" } });
	    }
	    // Method to determine if the current user has access, based on the permissions.
	    Web.prototype.hasAccess = function (permissions) {
	        // TO DO
	        return true;
	    };
	    ;
	    return Web;
	}(utils_1.Base));
	exports.Web = Web;
	/*********************************************************************************************************************************/
	// Library
	/*********************************************************************************************************************************/
	var Library = {
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
	        "SiteGroups|sitegroups|/getByName('[Name]')|group", "SiteUserInfoList", "SiteUsers|users|/getById([Name])|user", "ThemeInfo", "TitleResource",
	        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "WebInfos", "Webs|webs", "WorkflowAssociations", "WorkflowTemplates"
	    ],
	    /*********************************************************************************************************************************/
	    // Methods
	    /*********************************************************************************************************************************/
	    // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
	    applyTheme: {
	        argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Applies the specified site definition or site template to the Web site that has no template applied to it.
	    applyWebTemplate: {
	        argName: ["name"],
	        requestType: _1.RequestType.PostWithArgsInQS
	    },
	    // Creates unique role assignments for the securable object.
	    breakRoleInheritance: {
	        argNames: ["copyroleassignments", "clearsubscopes"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Deletes the object
	    delete: {
	        requestType: _1.RequestType.Delete
	    },
	    // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
	    doesPushNotificationSubscriberExist: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly
	    },
	    // Returns whether the current user has the given set of permissions.
	    doesUserHavePermissions: {
	        argNames: ["High", "Low"],
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
	    ensureUser: {
	        argNames: ["logonName"],
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Sends data to an OData service.
	    executeRemoteLOB: {
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Gets the app BDC catalog.
	    getAppBdcCatalog: {
	        requestType: _1.RequestType.Post
	    },
	    // Gets the app BDC catalog for the specified app instance.
	    getAppBdcCatalogForAppInstance: {
	        argNames: ["id"],
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Retrieves an AppInstance installed on this Site.
	    getAppInstanceById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly
	    },
	    // Retrieves all AppInstances installed on this site that are instances of the specified App.
	    getAppInstancesByProductId: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly
	    },
	    // Returns a collection of site templates available for the site.
	    getAvailableWebTemplates: {
	        argNames: ["lcid", "doincludecrosslanguage"],
	        requestType: _1.RequestType.GetWithArgs
	    },
	    // Returns the list gallery on the site.
	    getCatalog: {
	        argNames: ["galleryType"],
	        requestType: _1.RequestType.GetWithArgsValueOnly
	    },
	    // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
	    getChanges: {
	        argNames: ["query"],
	        metadataType: "SP.ChangeQuery",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Gets the context information for the site. Static method.
	    getContextWebInformation: {
	        name: "contextInfo",
	        replaceEndpointFl: true,
	        requestType: _1.RequestType.Post
	    },
	    // Gets the custom list templates for the site.
	    getCustomListTemplates: {
	        requestType: _1.RequestType.Get
	    },
	    // Gets the document libraries on a site. Static method. (SharePoint Online only)
	    getDocumentLibraries: {
	        argNames: ["url"],
	        name: "sp.web.getDocumentLibraries",
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    // Gets the specified external content type in a line-of-business (LOB) system application.
	    getEntity: {
	        argNames: ["namespace", "name"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Returns the file object located at the specified server-relative URL.
	    getFileByServerRelativeUrl: {
	        argNames: ["url"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "file"
	    },
	    // Returns the folder object located at the specified server-relative URL.
	    getFolderByServerRelativeUrl: {
	        argNames: ["url"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "folder"
	    },
	    // Gets the list at the specified site-relative URL. (SharePoint Online only)
	    getList: {
	        argNames: ["url"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "list"
	    },
	    // Gets the push notification subscriber over the site for the specified device application instance ID.
	    getPushNotificationSubscriber: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly
	    },
	    // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
	    getPushNotificationSubscribersByArgs: {
	        argNames: ["args"],
	        requestType: _1.RequestType.GetWithArgsValueOnly
	    },
	    // Queries for the push notification subscribers over the site for the specified user.
	    getPushNotificationSubscribersByUser: {
	        argNames: ["loginName"],
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
	    getSubwebsFilteredForCurrentUser: {
	        argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
	        requestType: _1.RequestType.GetWithArgs
	    },
	    // Returns the user corresponding to the specified member identifier for the current site.
	    getUserById: {
	        argNames: ["id"],
	        requestType: _1.RequestType.GetWithArgsValueOnly,
	        returnType: "user"
	    },
	    // Gets the effective permissions that the specified user has within the current application scope.
	    getUserEffectivePermissions: {
	        argNames: ["loginName"],
	        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
	        requestType: _1.RequestType.GetReplace
	    },
	    // Gets the site URL from a page URL. Static method.
	    getWebUrlFromPageUrl: {
	        name: "sp.web.getWebUrlFromPageUrl",
	        requestType: _1.RequestType.GetWithArgsInQS
	    },
	    // Uploads and installs an app package to this site.
	    loadAndInstallApp: {
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Uploads and installs an App package on the site in a specified locale.
	    loadAndInstallAppInSpecifiedLocale: {
	        argNames: ["appPackageStream", "installationLocaleLCID"],
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Uploads an App package and creates an instance from it.
	    loadApp: {
	        argNames: ["appPackageStream", "installationLocaleLCID"],
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Returns the name of the image file for the icon that is used to represent the specified file.
	    mapToIcon: {
	        argNames: ["filename", "progid", "size"],
	        requestType: _1.RequestType.GetWithArgs
	    },
	    // Processes a notification from an external system.
	    processExternalNotification: {
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
	    registerPushNotificationSubscriber: {
	        argNames: ["deviceappinstanceid", "servicetoken"],
	        requestType: _1.RequestType.PostWithArgs
	    },
	    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
	    resetRoleInheritance: {
	        requestType: _1.RequestType.Post
	    },
	    // Unregisters the subscriber for push notifications from the site.
	    unregisterPushNotificationSubscriber: {
	        requestType: _1.RequestType.PostWithArgsValueOnly
	    },
	    // Updates it's properties.
	    update: {
	        metadataType: "SP.Web",
	        name: "",
	        requestMethod: "MERGE",
	        requestType: _1.RequestType.PostWithArgsInBody
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Methods
	/*********************************************************************************************************************************/
	var Library = {
	    add: {
	        argNames: ["parameters"],
	        metadataType: "SP.WebCreationInformation",
	        requestType: _1.RequestType.PostWithArgsInBody
	    },
	    // Queries the collection
	    query: {
	        argNames: ["oData"],
	        requestType: _1.RequestType.OData
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Library;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../definitions/methodInfo.d.ts" />
	var _1 = __webpack_require__(8);
	var lib_1 = __webpack_require__(1);
	/*********************************************************************************************************************************/
	// Method Information
	// This class will create the method information for the request.
	/*********************************************************************************************************************************/
	var MethodInfo = (function () {
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
	                case lib_1.RequestType.Delete:
	                case lib_1.RequestType.Post:
	                case lib_1.RequestType.PostWithArgs:
	                case lib_1.RequestType.PostWithArgsInBody:
	                case lib_1.RequestType.PostWithArgsInQS:
	                case lib_1.RequestType.PostWithArgsValueOnly:
	                case lib_1.RequestType.PostReplace:
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
	        get: function () { return this.methodInfo.requestType == lib_1.RequestType.GetWithArgsInBody || this.methodInfo.requestType == lib_1.RequestType.PostWithArgsInBody; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MethodInfo.prototype, "passDataInQS", {
	        get: function () { return this.methodInfo.requestType == lib_1.RequestType.GetWithArgsInQS || this.methodInfo.requestType == lib_1.RequestType.PostWithArgsInQS; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MethodInfo.prototype, "isTemplate", {
	        get: function () { return this.methodInfo.data ? true : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MethodInfo.prototype, "replace", {
	        get: function () { return this.methodInfo.requestType == lib_1.RequestType.GetReplace || this.methodInfo.requestType == lib_1.RequestType.PostReplace; },
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
	                // Append the metadata to the first parameter
	                (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] = { "type": this.methodInfo.metadataType };
	            }
	            else {
	                // Append the metadata to the parameters
	                (this.methodData || this.methodParams)["__metadata"] = { "type": this.methodInfo.metadataType };
	            }
	        }
	    };
	    // Method to generate the method and parameters as a url
	    MethodInfo.prototype.generateUrl = function () {
	        var url = this.methodInfo.name;
	        // See if we are deleting the object
	        if (this.methodInfo.requestType == lib_1.RequestType.Delete) {
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
	        else if (this.methodInfo.requestType == lib_1.RequestType.OData) {
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
	                        case lib_1.RequestType.GetWithArgsValueOnly:
	                        case lib_1.RequestType.PostWithArgsValueOnly:
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


/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	/*********************************************************************************************************************************/
	// OData
	// Class for generating the OData query string.
	/*********************************************************************************************************************************/
	var OData = (function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    // The class constructor
	    function OData(oData) {
	        // Default the Variables
	        this._expand = oData && oData.Expand ? oData.Expand : [];
	        this._filter = oData && oData.Filter ? oData.Filter : null;
	        this._getAllItems = oData && oData.GetAllItems ? oData.GetAllItems : false;
	        this._orderBy = oData && oData.OrderBy ? oData.OrderBy : [];
	        this._select = oData && oData.Select ? oData.Select : [];
	        this._skip = oData && oData.Skip ? oData.Skip : null;
	        this._top = oData && oData.Top ? oData.Top : null;
	    }
	    Object.defineProperty(OData.prototype, "Expand", {
	        /*********************************************************************************************************************************/
	        // Properties
	        /*********************************************************************************************************************************/
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


/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	/*********************************************************************************************************************************/
	// Promise
	// This is a lightweight promise library.
	/*********************************************************************************************************************************/
	var Promise = (function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Promise(callback) {
	        // Default the properties
	        this.callback = callback;
	        this.resolvedFl = false;
	    }
	    /******************************************************************************************************************************** */
	    // Public Methods
	    /******************************************************************************************************************************** */
	    // Method to execute after the promise is resolved
	    Promise.prototype.done = function (callback) {
	        // Set the callback
	        this.callback = callback || this.callback;
	        // See if the promise is resolved
	        if (this.resolvedFl) {
	            // Execute the callback
	            this.executeMethod();
	        }
	    };
	    // Method to resolve the promise
	    Promise.prototype.resolve = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        // Set the properties
	        this.args = args;
	        this.resolvedFl = true;
	        // Execute the callback
	        this.executeMethod();
	    };
	    /*********************************************************************************************************************************/
	    // Private Methods
	    /*********************************************************************************************************************************/
	    // Method to execute the callback method
	    Promise.prototype.executeMethod = function () {
	        // See if callback function exists
	        if (this.callback && typeof (this.callback) == "function") {
	            // Execute the callback method
	            this.callback.apply(this, this.args);
	        }
	    };
	    return Promise;
	}());
	exports.Promise = Promise;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(8);
	/*********************************************************************************************************************************/
	// Request
	// This class will execute the xml http request.
	/*********************************************************************************************************************************/
	var Request = (function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function Request(asyncFl, targetInfo, callback) {
	        // Default the properties
	        this.asyncFl = asyncFl;
	        this.promise = new _1.Promise(callback || targetInfo.callback);
	        this.targetInfo = targetInfo;
	        this.xhr = this.createXHR();
	        // Execute the request
	        this.execute();
	    }
	    Object.defineProperty(Request.prototype, "completedFl", {
	        /*********************************************************************************************************************************/
	        // Public Properties
	        /*********************************************************************************************************************************/
	        // Flag indicating the request has completed
	        get: function () { return this.xhr ? this.xhr.readyState == 4 : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Request.prototype, "response", {
	        // The response
	        get: function () { return this.xhr ? this.xhr.response : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Request.prototype, "request", {
	        // The xml http request
	        get: function () { return this.xhr ? this.xhr : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Request.prototype, "requestData", {
	        // The data send in the body of the request
	        get: function () { return this.targetInfo.requestData; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Request.prototype, "requestUrl", {
	        // The reqest url
	        get: function () { return this.xhr ? this.xhr.responseURL : null; },
	        enumerable: true,
	        configurable: true
	    });
	    /*********************************************************************************************************************************/
	    // Private Methods
	    /*********************************************************************************************************************************/
	    // Method to create the xml http request
	    Request.prototype.createXHR = function () {
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
	    Request.prototype.defaultHeaders = function () {
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
	    };
	    // Method to execute the xml http request
	    Request.prototype.execute = function () {
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
	        this.targetInfo.bufferFl || this.targetInfo.requestData == null ? this.xhr.send() : this.xhr.send(this.targetInfo.requestData);
	    };
	    return Request;
	}());
	exports.Request = Request;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(8);
	/*********************************************************************************************************************************/
	// Target Information
	// This class will take the target information and create the request url.
	/*********************************************************************************************************************************/
	var TargetInfo = (function () {
	    /*********************************************************************************************************************************/
	    // Constructor
	    /*********************************************************************************************************************************/
	    function TargetInfo(targetInfo) {
	        // Default the properties
	        this.targetInfo = targetInfo || {};
	        this.requestData = this.targetInfo.data;
	        this.requestMethod = this.targetInfo.method ? this.targetInfo.method : "GET";
	        // Set the request url
	        this.setRequestUrl();
	    }
	    Object.defineProperty(TargetInfo.prototype, "bufferFl", {
	        /*********************************************************************************************************************************/
	        // Public Properties
	        /*********************************************************************************************************************************/
	        // Flag to determine if the request returns an array buffer
	        get: function () { return this.targetInfo.bufferFl; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TargetInfo.prototype, "callback", {
	        // The callback method to execute after the asynchronous request completes
	        get: function () { return this.targetInfo.callback; },
	        enumerable: true,
	        configurable: true
	    });
	    /*********************************************************************************************************************************/
	    // Methods
	    /*********************************************************************************************************************************/
	    // Method to get the domain url
	    TargetInfo.prototype.getDomainUrl = function () {
	        var url = document.location.href;
	        // See if this is an app web
	        if (_1.ContextInfo.isAppWeb) {
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
	    };
	    // Method to set the request url
	    TargetInfo.prototype.setRequestUrl = function () {
	        var hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
	        var template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";
	        // See if we are defaulting the url for the app web
	        if (window["$REST"].DefaultRequestToHostFl && _1.ContextInfo.isAppWeb && this.targetInfo.url == null) {
	            // Default the url to the host web
	            this.targetInfo.url = hostUrl;
	        }
	        // Ensure the url exists
	        if (this.targetInfo.url == null) {
	            // Default the url to the current site/web url
	            this.targetInfo.url = this.targetInfo.defaultToWebFl == false ? _1.ContextInfo.siteAbsoluteUrl : _1.ContextInfo.webAbsoluteUrl;
	        }
	        else if (/\/_api\//.test(this.targetInfo.url)) {
	            // Get the url
	            var url = this.targetInfo.url.toLowerCase().split("/_api/");
	            // See if this is the app web and we are executing against a different web
	            if (_1.ContextInfo.isAppWeb && url[0] != _1.ContextInfo.webAbsoluteUrl.toLowerCase()) {
	                // Set the request url
	                this.requestUrl = _1.ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" + url[1] +
	                    (this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "") +
	                    "?@target='" + url[0] + "'";
	            }
	            else {
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
	        if (_1.ContextInfo.isAppWeb && this.targetInfo.url != _1.ContextInfo.webAbsoluteUrl) {
	            // Append the start character for the query string
	            var endpoint = this.targetInfo.endpoint +
	                (this.targetInfo.endpoint.indexOf("?") > 0 ? "&" : "?");
	            // Set the request url
	            this.requestUrl = template
	                .replace(/{{Url}}/g, _1.ContextInfo.webAbsoluteUrl)
	                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)/" + endpoint)
	                .replace(/{{TargetUrl}}/g, "@target='" + this.targetInfo.url + "'");
	        }
	        else {
	            // Set the request url
	            this.requestUrl = template
	                .replace(/{{Url}}/g, this.targetInfo.url)
	                .replace(/{{EndPoint}}/g, this.targetInfo.endpoint)
	                .replace(/{{TargetUrl}}/g, "");
	        }
	    };
	    return TargetInfo;
	}());
	exports.TargetInfo = TargetInfo;


/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	// Request Type
	(function (RequestType) {
	    // Requests
	    RequestType[RequestType["Custom"] = 0] = "Custom";
	    RequestType[RequestType["Delete"] = 1] = "Delete";
	    RequestType[RequestType["Merge"] = 2] = "Merge";
	    RequestType[RequestType["OData"] = 3] = "OData";
	    // Get Requests
	    RequestType[RequestType["Get"] = 10] = "Get";
	    RequestType[RequestType["GetBuffer"] = 11] = "GetBuffer";
	    RequestType[RequestType["GetWithArgs"] = 12] = "GetWithArgs";
	    RequestType[RequestType["GetWithArgsInBody"] = 13] = "GetWithArgsInBody";
	    RequestType[RequestType["GetWithArgsInQS"] = 14] = "GetWithArgsInQS";
	    RequestType[RequestType["GetWithArgsValueOnly"] = 15] = "GetWithArgsValueOnly";
	    RequestType[RequestType["GetReplace"] = 16] = "GetReplace";
	    // Post Requests
	    RequestType[RequestType["Post"] = 20] = "Post";
	    RequestType[RequestType["PostWithArgs"] = 21] = "PostWithArgs";
	    RequestType[RequestType["PostWithArgsInBody"] = 22] = "PostWithArgsInBody";
	    RequestType[RequestType["PostWithArgsInQS"] = 23] = "PostWithArgsInQS";
	    RequestType[RequestType["PostWithArgsValueOnly"] = 24] = "PostWithArgsValueOnly";
	    RequestType[RequestType["PostReplace"] = 25] = "PostReplace";
	})(exports.RequestType || (exports.RequestType = {}));
	var RequestType = exports.RequestType;


/***/ }
/******/ ]);