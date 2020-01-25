"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _1 = require(".");
var xhrRequest_1 = require("./xhrRequest");
/**
 * Request Helper
 */
exports.Helper = {
    // Method to add the base references
    addBaseMethods: function (base, obj) {
        // Add the base references
        obj["addMethods"] = base.addMethods;
        obj["base"] = base.base;
        obj["done"] = base.done;
        obj["execute"] = base.execute;
        obj["executeAndWait"] = base.executeAndWait;
        obj["executeMethod"] = base.executeMethod;
        obj["existsFl"] = true;
        obj["getCollection"] = base.getCollection;
        obj["getProperty"] = base.getProperty;
        obj["parent"] = base;
        obj["targetInfo"] = base.targetInfo;
        obj["updateMetadataUri"] = base.updateMetadataUri;
        obj["waitForRequestsToComplete"] = base.waitForRequestsToComplete;
    },
    // Method to wait for all requests to complete, before resolving the request
    done: function (base, resolve) {
        // Ensure the base is set
        base.base = base.base ? base.base : base;
        // Ensure the response index is set
        base.responseIndex = base.responseIndex >= 0 ? base.responseIndex : 0;
        // Wait for the responses to execute
        _1.Request.waitForRequestsToComplete(base, function () {
            var responses = base.base.responses;
            // Clear the responses
            base.base.responses = [];
            // Clear the wait flags
            base.base.waitFlags = [];
            // Resolve the request
            resolve ? resolve.apply(base, responses) : null;
        });
    },
    // Method to execute a method
    executeMethod: function (base, methodName, methodConfig, args) {
        var targetInfo = null;
        // See if the metadata is defined for the base object
        var metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
        if (metadata && metadata.uri) {
            // Create the target information and use the url defined for the base object
            targetInfo = {
                url: metadata.uri
            };
            // See if we are inheriting the metadata type
            if (methodConfig.inheritMetadataType && metadata.type) {
                // Copy the metadata type
                methodConfig.metadataType = metadata.type;
            }
            // Update the metadata uri
            exports.Helper.updateMetadataUri(base, metadata, targetInfo);
        }
        else {
            // Copy the target information
            targetInfo = Object.create(base.targetInfo);
        }
        // Get the method information
        var methodInfo = new _1.MethodInfo(methodName, methodConfig, args);
        // Update the target information
        targetInfo.bufferFl = methodConfig.requestType == _1.RequestType.GetBuffer;
        targetInfo.data = methodInfo.body;
        targetInfo.defaultToWebFl = typeof (targetInfo.defaultToWebFl) === "undefined" && base.base ? base.base.targetInfo.defaultToWebFl : targetInfo.defaultToWebFl;
        targetInfo.method = methodInfo.requestMethod;
        targetInfo.requestDigest = typeof (targetInfo.requestDigest) === "undefined" && base.base && base.base.targetInfo.requestDigest ? base.base.targetInfo.requestDigest : targetInfo.requestDigest;
        targetInfo.requestType = methodConfig.requestType;
        // See if we are replacing the endpoint
        if (methodInfo.replaceEndpointFl) {
            // Replace the endpoint
            targetInfo.endpoint = methodInfo.url;
        }
        // Else, ensure the method url exists
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
            _1.Request.addMethods(obj, { __metadata: { type: methodConfig.returnType } });
        }
        // Return the object
        return obj;
    },
    // Method to return a collection
    getCollection: function (base, method, args) {
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
            exports.Helper.updateMetadataUri(base, metadata, targetInfo);
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
    },
    // Method to get the next set of results
    getNextSetOfResults: function (base) {
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
    },
    // Method to return a property of the base object
    getProperty: function (base, propertyName, requestType) {
        // Copy the target information
        var targetInfo = Object.create(base.targetInfo);
        // See if this is a graph request
        if (requestType.indexOf("graph") == 0) {
            // Default the request type
            targetInfo.requestType = _1.RequestType.GraphGet;
        }
        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;
        // See if the metadata is defined for the base object
        var metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
        if (metadata && metadata.uri) {
            // Update the url of the target information
            targetInfo.url = metadata.uri;
            // Update the metadata uri
            exports.Helper.updateMetadataUri(base, metadata, targetInfo);
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
        requestType ? _1.Request.addMethods(obj, { __metadata: { type: requestType } }) : null;
        // Return the object
        return obj;
    },
    // Method to get the request information
    getRequestInfo: function (base) {
        // Create the request, but don't execute it
        var xhr = new xhrRequest_1.XHRRequest(true, new _1.TargetInfo(base.targetInfo), null, false);
        // Return the request information
        return xhr.requestInfo;
    },
    // Method to stringify the object
    stringify: function (base) {
        // Stringify the object
        return JSON.stringify({
            response: base.response,
            status: base.status,
            targetInfo: {
                accessToken: base.targetInfo.accessToken,
                bufferFl: base.targetInfo.bufferFl,
                defaultToWebFl: base.targetInfo.defaultToWebFl,
                endpoint: base.targetInfo.endpoint,
                method: base.targetInfo.method,
                overrideDefaultRequestToHostFl: base.targetInfo.overrideDefaultRequestToHostFl,
                requestDigest: base.targetInfo.requestDigest,
                requestHeader: base.targetInfo.requestHeader,
                requestInfo: base.targetInfo.requestInfo,
                requestType: base.targetInfo.requestType,
                url: base.targetInfo.url
            }
        });
    },
    // Method to update a collection object
    updateDataCollection: function (obj, results) {
        // Ensure the base is a collection
        if (results) {
            // Save the results
            obj["results"] = obj["results"] ? obj["results"].concat(results) : results;
            // See if only one object exists
            if (obj["results"].length > 0) {
                var results_2 = obj["results"];
                // Parse the results
                for (var _i = 0, results_1 = results_2; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    // Add the base methods
                    exports.Helper.addBaseMethods(obj, result);
                    // Update the metadata
                    exports.Helper.updateMetadata(obj, result);
                    // Add the methods
                    _1.Request.addMethods(result, result);
                }
            }
        }
    },
    // Method to update the expanded properties
    updateExpandedProperties: function (base) {
        // Ensure this is an OData request
        if (base["results"] == null || base.requestType != _1.RequestType.OData) {
            return;
        }
        // Parse the results
        for (var i = 0; i < base["results"].length; i++) {
            var result = base["results"][i];
            // Parse the properties
            for (var key in result) {
                var prop = result[key];
                // See if this property was expanded
                if (prop && prop["__metadata"]) {
                    // Add the base methods
                    exports.Helper.addBaseMethods(result, prop);
                    // Update the metadata
                    exports.Helper.updateMetadata(result, prop);
                    // Add the methods
                    _1.Request.addMethods(prop, prop);
                }
            }
        }
    },
    // Method to update the metadata
    updateMetadata: function (base, data) {
        // See if this is the app web
        if (lib_1.ContextInfo.isAppWeb) {
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
        }
        // See if this is a webpart definition
        if (data.__metadata && /SP.WebParts.WebPartDefinition/.test(data.__metadata.type)) {
            // Update the metadata uri
            data.__metadata.uri = data.__metadata.uri.replace(/SP.WebParts.WebPartDefinition/, base.targetInfo.endpoint + "/getById('") + "')";
        }
    },
    // Method to update the metadata uri
    updateMetadataUri: function (base, metadata, targetInfo) {
        // See if this is a field
        if (/^SP.Field/.test(metadata.type) || /^SP\..*Field$/.test(metadata.type)) {
            // Fix the url reference
            targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
        }
        // Else, see if this is an event receiver
        else if (/SP.EventReceiverDefinition/.test(metadata.type)) {
            // Fix the url reference
            targetInfo.url = targetInfo.url.replace(/\/EventReceiver\//, "/EventReceivers/");
        }
        // Else, see if this is a tenant app
        else if (/Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata/.test(targetInfo.url)) {
            // Fix the url reference
            targetInfo.url = targetInfo.url.split("Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata")[0] + "web/tenantappcatalog/availableapps/getbyid('" + base["ID"] + "')";
        }
    }
};
