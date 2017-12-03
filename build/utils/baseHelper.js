"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var mapper_1 = require("../mapper");
var types_1 = require("../types");
var _1 = require(".");
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
                                    "return this.request.getProperty(this, name ? name : '" + propName + "', name ? '" + subPropType + "' : '" + propType + "');");
                            }
                            else {
                                // Add the property
                                base[propName] = new Function("return this.request.getProperty(this, '" + propName + "', '" + propType + "');");
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
                base[methodName] = new Function("return this.request.executeMethod(this, '" + methodName + "', " + JSON.stringify(methodInfo) + ", arguments);");
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
                base["get_" + key] = base["get_" + key] ? base["get_" + key] : new Function("return this.request.getCollection(this, '" + key + "', arguments);");
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
            if (this.requestType == types_1.RequestType.GetBuffer) {
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