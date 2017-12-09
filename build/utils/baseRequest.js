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
                    if (_this.requestType == types_1.RequestType.GetBuffer) {
                        // Execute the callback
                        callback ? callback(_this.xhr.response) : null;
                    }
                    else {
                        // Update the data object
                        _this.updateDataObject(isBatchRequest);
                        // Validate the data collection
                        isBatchRequest ? null : _this.validateDataCollectionResults().done(function () {
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
            if (this.requestType == types_1.RequestType.GetBuffer) {
                // Return the response
                return this.xhr.response;
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
    BaseRequest.prototype.validateDataCollectionResults = function (promise) {
        var _this = this;
        promise = promise || new _1.Promise();
        // Validate the response
        if (this.xhr && this.status < 400 && typeof (this.response) === "string" && this.response.length > 0) {
            // Convert the response and ensure the data property exists
            var data = JSON.parse(this.response);
            // See if there are more items to get
            if (data.d && data.d.__next) {
                // See if we are getting all items in the base request
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
                            _this.updateDataCollection(_this, data.d.results);
                            // Append the raw data results
                            _this["d"].results = _this["d"].results.concat(data.d.results);
                            // Validate the data collection
                            return _this.validateDataCollectionResults(promise);
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
    return BaseRequest;
}(_1.BaseHelper));
exports.BaseRequest = BaseRequest;
//# sourceMappingURL=baseRequest.js.map