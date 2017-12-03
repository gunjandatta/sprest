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
var types_1 = require("../types");
var _1 = require(".");
/**
 * Base Request
 */
var BaseRequest = /** @class */ (function (_super) {
    __extends(BaseRequest, _super);
    function BaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BaseRequest.prototype, "response", {
        // Returns the request's raw response
        get: function () { return this.xhr ? this.xhr.response : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseRequest.prototype, "status", {
        // Returns the status of the request
        get: function () { return this.xhr ? this.xhr.status : null; },
        enumerable: true,
        configurable: true
    });
    // Method to execute a method
    BaseRequest.prototype.executeMethod = function (base, methodName, methodConfig, args) {
        var targetInfo = null;
        // See if the metadata is defined for the base object
        var metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
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
            targetInfo = Object.create(base.targetInfo);
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
        var obj = new _1.Base(targetInfo);
        // Set the properties
        obj.base = base.base ? base.base : base;
        obj.getAllItemsFl = methodInfo.getAllItemsFl;
        obj.parent = base;
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
                    // See if we are returning a file buffer
                    if (_this.requestType == types_1.RequestType.GetBuffer) {
                        // Execute the callback
                        callback ? callback(_this.xhr.response) : null;
                    }
                    // Update the data object
                    _this.updateDataObject(_this, isBatchRequest);
                    // Validate the data collection
                    isBatchRequest ? null : _this.validateDataCollectionResults(_this, _this.xhr).done(function () {
                        // Execute the callback
                        callback ? callback(_this) : null;
                    });
                });
            }
        }
        else if (this.xhr) {
            return this;
        }
        else {
            // Create the request
            this.xhr = new _1.XHRRequest(asyncFl, targetInfo);
            // See if we are returning a file buffer
            if (this.requestType == types_1.RequestType.GetBuffer) {
                // Return the response
                return this.xhr.response;
            }
            // Update the base object
            this.updateDataObject(this, isBatchRequest);
            // See if the base is a collection and has more results
            if (this["d"] && this["d"].__next) {
                // Add the "next" method to get the next set of results
                this["next"] = new Function("return this.request.getNextSetOfResults();");
            }
            // Return the base object
            return this;
        }
    };
    // Method to return a collection
    BaseRequest.prototype.getCollection = function (base, method, args) {
        // Copy the target information
        var targetInfo = Object.create(base.targetInfo);
        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;
        // See if the metadata is defined for the base object
        var metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
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
        obj.base = base.base ? base.base : base;
        obj.parent = base;
        // Return the object
        return obj;
    };
    // Method to get the next set of results
    BaseRequest.prototype.getNextSetOfResults = function (base) {
        // Create the target information to query the next set of results
        var targetInfo = Object.create(base.targetInfo);
        targetInfo.endpoint = "";
        targetInfo.url = base["d"].__next;
        // Create a new object
        var obj = new _1.Base(targetInfo);
        // Set the properties
        obj.base = base.base ? base.base : base;
        obj.parent = base;
        // Return the object
        return obj;
    };
    // Method to return a property of the base object
    BaseRequest.prototype.getProperty = function (base, propertyName, requestType) {
        // Copy the target information
        var targetInfo = Object.create(base.targetInfo);
        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;
        // See if the metadata is defined for the base object
        var metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
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
        obj.base = base.base ? base.base : base;
        obj.parent = base;
        // Add the methods
        requestType ? this.addMethods(obj, { __metadata: { type: requestType } }) : null;
        // Return the object
        return obj;
    };
    // Method to update the metadata uri
    BaseRequest.prototype.updateMetadataUri = function (metadata, targetInfo) {
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
    BaseRequest.prototype.validateDataCollectionResults = function (base, request, promise) {
        var _this = this;
        promise = promise || new _1.Promise();
        // Validate the response
        if (request && request.status < 400 && typeof (request.response) === "string" && request.response.length > 0) {
            // Convert the response and ensure the data property exists
            var data = JSON.parse(request.response);
            // See if there are more items to get
            if (data.d && data.d.__next) {
                // See if we are getting all items in the base request
                if (base.getAllItemsFl) {
                    // Create the target information to query the next set of results
                    var targetInfo = Object.create(base.targetInfo);
                    targetInfo.endpoint = "";
                    targetInfo.url = data.d.__next;
                    // Create a new object
                    new _1.XHRRequest(true, new _1.TargetInfo(targetInfo), function (request) {
                        // Convert the response and ensure the data property exists
                        var data = JSON.parse(request.response);
                        if (data.d) {
                            // Update the data collection
                            _this.updateDataCollection(base, data.d.results);
                            // Append the raw data results
                            base["d"].results = base["d"].results.concat(data.d.results);
                            // Validate the data collection
                            return _this.validateDataCollectionResults(base, request, promise);
                        }
                        // Resolve the promise
                        promise.resolve();
                    });
                }
                else {
                    // Add a method to get the next set of results
                    this["next"] = new Function("return this.request.getNextSetOfResults();");
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
    return BaseRequest;
}(_1.BaseHelper));
exports.BaseRequest = BaseRequest;
//# sourceMappingURL=baseRequest.js.map