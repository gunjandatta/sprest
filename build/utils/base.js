"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var types_1 = require("../types");
var _1 = require(".");
/*********************************************************************************************************************************/
// Base
// This is the base class for all objects.
/*********************************************************************************************************************************/
var Base = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function Base(targetInfo) {
        // Default the properties
        this.targetInfo = Object.create(targetInfo || {});
        this.responses = [];
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
    // Method to execute this request as a batch request
    Base.prototype.batch = function (arg) {
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
    // Method to execute the request synchronously
    Base.prototype.executeAndWait = function () { return this.executeRequest(false); };
    // Method to get the request information
    Base.prototype.getInfo = function () { return (new _1.TargetInfo(this.targetInfo)).requestInfo; };
    // Method to execute the request asynchronously
    Base.prototype.then = function (resolve, reject) {
        var _this = this;
        // Return a promise
        return new _1.Promise(function () {
            // Execute this request
            _this.execute(function (request) {
                // Ensure the request was successful
                if (request && request.existsFl) {
                    // Resolve the request
                    resolve ? resolve.apply(_this, request) : null;
                }
                else {
                    // Reject the request
                    reject ? reject.apply(_this, request) : null;
                }
            });
        });
    };
    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/
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
        targetInfo.bufferFl = methodConfig.requestType == types_1.RequestType.GetBuffer;
        targetInfo.data = methodInfo.body;
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
        var obj = new Base(targetInfo);
        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.getAllItemsFl = methodInfo.getAllItemsFl;
        obj.parent = this;
        obj.requestType = methodConfig.requestType;
        // Ensure the return type exists
        if (methodConfig.returnType) {
            // Add the methods
            _1.Request.addMethods(obj, { __metadata: { type: methodConfig.returnType } });
        }
        // Return the object
        return obj;
    };
    // Method to execute the request
    Base.prototype.executeRequest = function (asyncFl, callback) {
        var _this = this;
        var isBatchRequest = this.base && this.base.batchRequests && this.base.batchRequests.length > 0;
        var targetInfo = isBatchRequest ? _1.Batch.getTargetInfo(this.base.batchRequests) : new _1.TargetInfo(this.targetInfo);
        // See if this is an asynchronous request
        if (asyncFl) {
            // See if the not a batch request, and it already exists
            if (this.request && !isBatchRequest) {
                // Execute the callback
                callback ? callback(this) : null;
            }
            else {
                // Create the request
                this.request = new _1.XHRRequest(asyncFl, targetInfo, function () {
                    // Update this data object
                    _1.Request.updateDataObject(_this, isBatchRequest);
                    // Validate the data collection
                    isBatchRequest ? null : _this.validateDataCollectionResults(_this.request).done(function () {
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
            this.request = new _1.XHRRequest(asyncFl, targetInfo);
            // Update this object
            _1.Request.updateDataObject(this, isBatchRequest);
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
        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;
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
        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;
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
        requestType ? _1.Request.addMethods(obj, { __metadata: { type: requestType } }) : null;
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
                    new _1.XHRRequest(true, new _1.TargetInfo(targetInfo), function (request) {
                        // Convert the response and ensure the data property exists
                        var data = JSON.parse(request.response);
                        if (data.d) {
                            // Update the data collection
                            _1.Request.updateDataCollection(_this, data.d.results);
                            // Append the raw data results
                            _this["d"].results = _this["d"].results.concat(data.d.results);
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
        var intervalId = lib_1.ContextInfo.window.setInterval(function () {
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
            lib_1.ContextInfo.window.clearInterval(intervalId);
            // Execute the callback
            callback();
        }, 10);
    };
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=base.js.map