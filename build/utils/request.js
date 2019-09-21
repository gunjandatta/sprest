"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var batch_1 = require("./batch");
var lib_1 = require("../lib");
var helper_1 = require("./helper");
var mapper_1 = require("../mapper");
var requestType_1 = require("./requestType");
var targetInfo_1 = require("./targetInfo");
var xhrRequest_1 = require("./xhrRequest");
/**
 * Request
 */
exports.Request = {
    // Method to add the methods to base object
    addMethods: function (base, data, graphType) {
        var obj = base;
        var isCollection = data.results && data.results.length > 0;
        var methods = null;
        // Determine the metadata
        var metadata = isCollection ? data.results[0].__metadata : data.__metadata;
        // Get the object type
        var objType = metadata && metadata.type ? metadata.type : obj.targetInfo.endpoint;
        // See if the new mapper has the type
        if ((methods = mapper_1.Mapper[objType + (isCollection ? ".Collection" : "")]) == null) {
            // Determine the object type
            objType = objType.split('/');
            objType = (objType[objType.length - 1]);
            objType = objType.split('.');
            objType = (objType[objType.length - 1]).toLowerCase();
            objType += isCollection ? "s" : "";
            // See if this is a graph request
            if (/^graph/.test(objType)) {
                // Do nothing
            }
            // Else, see if the base is a field
            else if ((/^field/.test(objType) || /fields?$/.test(objType)) && objType != "fieldlinks" && objType != "fields") {
                // Update the type
                objType = "field" + (isCollection ? "s" : "");
            }
            // Else, see if the base is an item
            else if (/item$/.test(objType)) {
                // Update the type
                objType = "listitem";
            }
            // Else, see if the base is an item collection
            else if (/items$/.test(objType)) {
                // Update the type
                objType = "items";
            }
            // Else, see if this is a tenant app
            else if (/corporatecatalogappmetadata/.test(objType)) {
                // Update the type
                objType = "tenantapp";
            }
            // Else, see if this is a tenant app collection
            else if (/corporatecatalogappmetadatas/.test(objType)) {
                // Update the type
                objType = "tenantapps";
            }
            // Get the methods for the base object
            methods = mapper_1.Mapper_Old[objType];
        }
        // Ensure methods exist
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
                        if (obj[propName] == null || (obj[propName].__deferred && obj[propName].__deferred.uri)) {
                            // See if the base property has a sub-property defined for it
                            if (propInfo.length == 4) {
                                // Update the ' char in the property name
                                subPropName = subPropName.replace(/'/g, "\\'");
                                // Add the property
                                obj[propName] = new Function("name", "name = name ? '" + propName + subPropName + "'.replace(/\\[Name\\]/g, name.toString().replace(/\'/g, \"''\")) : null;" +
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
                // See if the base object has a dynamic metadata type
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
    },
    // Method to add properties to the base object
    addProperties: function (base, data) {
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
                        var objCollection = new base_1.Base(base.targetInfo);
                        objCollection["results"] = base[key].results;
                        // See no results exist
                        if (objCollection["results"].length == 0) {
                            // Set the metadata type to the key
                            objCollection["__metadata"] = { type: key };
                        }
                        // Update the endpoint for the base request to point to the base property
                        objCollection.targetInfo.endpoint = (objCollection.targetInfo.endpoint.split("?")[0] + "/" + key).replace(/\//g, "/");
                        // Add the methods
                        exports.Request.addMethods(objCollection, objCollection);
                        // Update the data collection
                        helper_1.Helper.updateDataCollection(base, objCollection["results"]);
                        // Update the expanded properties
                        helper_1.Helper.updateExpandedProperties(base);
                        // Update the property
                        base[key] = objCollection;
                    }
                }
            }
        }
    },
    // Method to execute the request
    execute: function (base, args) {
        var reject = null;
        var resolve = null;
        var waitFl = false;
        // Parse the arguments
        for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            // Check the type
            switch (typeof (arg)) {
                case "boolean":
                    // Set the wait flag
                    waitFl = arg;
                    break;
                case "function":
                    // See if the resolve method exists
                    if (resolve) {
                        // Set the reject method
                        reject = arg;
                    }
                    else {
                        // Set the resolve method
                        resolve = arg;
                    }
                    break;
            }
        }
        // Set the base
        base.base = base.base || base;
        // Set the base responses
        base.base.responses = base.base.responses || [];
        // Set the base wait flags
        base.base.waitFlags = base.base.waitFlags || [];
        // Set the response index
        base.responseIndex = base.base.responses.length;
        // Add this object to the responses
        base.base.responses.push(base);
        // See if we are waiting for the responses to complete
        if (waitFl) {
            // Wait for the responses to execute
            exports.Request.waitForRequestsToComplete(base, function () {
                // Execute this request
                exports.Request.executeRequest(base, true, function (response, errorFl) {
                    // See if there was an error
                    if (errorFl) {
                        // Reject the request
                        reject ? reject(response) : null;
                    }
                    // Else, see if there is a resolve method
                    else if (resolve) {
                        // Set the base to this object, and clear requests
                        // This will ensure requests from this object do not conflict w/ this request
                        base.base = base;
                        base.base.responses = [];
                        // Execute the callback and see if it returns a promise
                        var returnVal = resolve(response);
                        var waitFunc = returnVal ? returnVal.done || returnVal.then : null;
                        if (waitFunc && typeof (waitFunc) === "function") {
                            // Wait for the promise to complete
                            waitFunc(function () {
                                // Reset the base
                                base.base = base.parent.base || base.base;
                                // Set the wait flag
                                base.base.waitFlags[base.responseIndex] = true;
                            });
                            // Wait for the promise to complete
                            return;
                        }
                        // Reset the base
                        base.base = base.parent.base || base.base;
                    }
                    // Set the wait flag
                    base.base.waitFlags[base.responseIndex] = true;
                });
            }, base.responseIndex);
        }
        else {
            // Execute this request
            exports.Request.executeRequest(base, true, function (response, errorFl) {
                // See if there was an error
                if (errorFl) {
                    // Reject the request
                    reject ? reject(response) : null;
                }
                else {
                    // Execute the resolve and see if it returns a promise
                    var returnVal = resolve ? resolve(response) : null;
                    if (returnVal && typeof (returnVal.done) === "function") {
                        // Wait for the promise to complete
                        returnVal.done(function () {
                            // Set the wait flag
                            base.base.waitFlags[base.responseIndex] = true;
                        });
                    }
                    else {
                        // Set the wait flag
                        base.base.waitFlags[base.responseIndex] = true;
                    }
                }
            });
        }
        // See if this is a query request
        if (base.targetInfo.requestType == requestType_1.RequestType.OData) {
            // Return the parent for chaining purposes
            return base.parent;
        }
        // Return this object
        return base;
    },
    // Method to execute the request
    executeRequest: function (base, asyncFl, callback) {
        var isBatchRequest = base.base && base.base.batchRequests && base.base.batchRequests.length > 0;
        var targetInfo = isBatchRequest ? batch_1.Batch.getTargetInfo(base.base.batchRequests) : new targetInfo_1.TargetInfo(base.targetInfo);
        // See if this is an asynchronous request
        if (asyncFl) {
            // See if the not a batch request, and it already exists
            if (base.xhr && !isBatchRequest) {
                // Execute the callback
                callback ? callback(base, false) : null;
            }
            else {
                // Create the request
                base.xhr = new xhrRequest_1.XHRRequest(asyncFl, targetInfo, function () {
                    // Update the response and status
                    base.response = base.xhr.response;
                    base.status = base.xhr.status;
                    var errorFl = !(base.status >= 200 && base.status < 300);
                    // See if we are returning a file buffer
                    if (base.requestType == requestType_1.RequestType.GetBuffer) {
                        // Execute the callback
                        callback ? callback(base.response, errorFl) : null;
                    }
                    else {
                        // Update the data object
                        exports.Request.updateDataObject(base, isBatchRequest);
                        // Ensure this isn't a batch request
                        if (!isBatchRequest) {
                            // See if this is an xml response
                            if (base.xml) {
                                // Execute the callback
                                callback ? callback(base, errorFl) : null;
                            }
                            else {
                                // Validate the data collection
                                exports.Request.validateDataCollectionResults(base).then(function () {
                                    // Execute the callback
                                    callback ? callback(base, errorFl) : null;
                                });
                            }
                        }
                    }
                });
            }
        }
        // Else, see if we already executed this request
        else if (base.xhr) {
            return base;
        }
        // Else, we haven't executed this request
        else {
            // Create the request
            base.xhr = new xhrRequest_1.XHRRequest(asyncFl, targetInfo);
            // Update the response and status
            base.response = base.xhr.response;
            base.status = base.xhr.status;
            // See if we are returning a file buffer
            if (base.requestType == requestType_1.RequestType.GetBuffer) {
                // Return the response
                return base.response;
            }
            // Update the base object
            exports.Request.updateDataObject(base, isBatchRequest);
            // See if the base is a collection and has more results
            if (base["d"] && base["d"].__next) {
                // Add the "next" method to get the next set of results
                base["next"] = new Function("return this.getNextSetOfResults();");
            }
            // Return the base object
            return base;
        }
    },
    // Method to parse the xml
    parseXML: function (xml) {
        var objData = {};
        // Parse the properties
        do {
            // Get the index of the property
            var idxStart = xml.indexOf("<d:");
            var idxEnd = xml.indexOf(">", idxStart);
            if (idxEnd > idxStart && idxStart > -1) {
                // Get the property
                var propName = xml.substr(idxStart + 3, idxEnd - idxStart - 3);
                propName = propName.split(' ')[0];
                // Skip the "element" property
                if (propName == "element") {
                    // Skip this element
                    idxEnd = xml.indexOf("</d:" + propName, idxStart);
                    xml = xml.substr(idxEnd + propName.length + 4);
                    continue;
                }
                // See if this is a null value
                if (xml[idxEnd - 1] == "/") {
                    // Set the value
                    objData[propName] = null;
                    // Clear this property
                    xml = xml.substr(idxEnd + 1);
                }
                else {
                    // Get the value
                    idxStart = idxEnd;
                    idxEnd = xml.indexOf("</d:" + propName, idxStart);
                    // Set the value
                    var value = xml.substr(idxStart + 1, idxEnd - idxStart - 1);
                    if (value.indexOf("<d:") == 0 && idxEnd > idxStart) {
                        // Set the value
                        objData[propName] = exports.Request.parseXML(value);
                    }
                    else {
                        // Set the value
                        objData[propName] = value;
                    }
                    // Clear this property
                    idxEnd = xml.indexOf(">", idxStart + 1);
                    xml = xml.substr(idxEnd + 1);
                }
            }
            // Else, break from the loop
            else {
                break;
            }
        } while (xml.length > 0);
        // Return the base object
        return objData;
    },
    // Method to convert the input arguments into an object
    updateDataObject: function (base, isBatchRequest) {
        if (isBatchRequest === void 0) { isBatchRequest = false; }
        // Ensure the request was successful
        if (base.status >= 200 && base.status < 300) {
            // Return if we are expecting a buffer
            if (base.requestType == requestType_1.RequestType.GetBuffer) {
                return;
            }
            // Parse the responses
            var batchIdx = 0;
            var batchRequestIdx = 0;
            var responses = isBatchRequest ? base.response.split("\n") : [base.response];
            for (var i = 0; i < responses.length; i++) {
                var data = null;
                // Set the response
                var response = responses[i];
                response = response === "" && !isBatchRequest ? "{}" : response;
                // Set the xml flag
                var isXML = response.indexOf("<?xml") == 0;
                if (isXML) {
                    // Append the response while data exists
                    while (responses[i + 1] && responses[i + 1].indexOf("--batchresponse") != 0) {
                        // Append the response
                        response += responses[++i];
                    }
                }
                // Try to convert the response
                try {
                    data = isXML ? response : JSON.parse(response);
                }
                catch (ex) {
                    continue;
                }
                // Set the object based on the request type
                var obj = isBatchRequest ? Object.create(base) : base;
                // Set the exists flag
                obj["existsFl"] = typeof (obj["Exists"]) === "boolean" ? obj["Exists"] : data.error == null;
                // See if this is xml
                if (isXML) {
                    var objData = void 0;
                    // Get the response properties
                    var idxStart = data.indexOf("<m:properties>");
                    var idxEnd = data.indexOf("</m:properties");
                    var properties = idxEnd > idxStart ? data.substr(idxStart, idxEnd) : null;
                    if (properties) {
                        // Set the data object
                        objData = exports.Request.parseXML(properties);
                        // Update the metadata
                        helper_1.Helper.updateMetadata(obj, objData);
                        // Update the base object's properties
                        exports.Request.addProperties(obj, objData);
                        // Add the methods
                        exports.Request.addMethods(obj, objData, objData["@odata.context"]);
                        // Update the data collection
                        helper_1.Helper.updateDataCollection(obj, objData["results"]);
                        // Update the expanded properties
                        helper_1.Helper.updateExpandedProperties(obj);
                    }
                    else {
                        // Update the object to the raw data
                        obj = data;
                    }
                }
                // Else, see if the data properties exists
                else if (data.d) {
                    // Save a reference to it
                    obj["d"] = data.d;
                    // Update the metadata
                    helper_1.Helper.updateMetadata(obj, data.d);
                    // Update the base object's properties
                    exports.Request.addProperties(obj, data.d);
                    // Add the methods
                    exports.Request.addMethods(obj, data.d, data["@odata.context"]);
                    // Update the data collection
                    helper_1.Helper.updateDataCollection(obj, data.d.results);
                    // Update the expanded properties
                    helper_1.Helper.updateExpandedProperties(obj);
                }
                else {
                    // Update the base object's properties
                    exports.Request.addProperties(obj, data);
                }
                // See if the batch request exists
                if (isBatchRequest) {
                    // Get the batch request
                    var batchRequest = base.base.batchRequests[batchIdx][batchRequestIdx++];
                    if (batchRequest == null) {
                        // Update the batch indexes
                        batchIdx++;
                        batchRequestIdx = 0;
                        // Update the batch request
                        batchRequest = base.base.batchRequests[batchIdx][batchRequestIdx++];
                    }
                    // Ensure the batch request exists
                    if (batchRequest) {
                        // Set the response object
                        batchRequest.response = obj;
                        // Execute the callback if it exists
                        batchRequest.callback ? batchRequest.callback(batchRequest.response) : null;
                    }
                }
            }
            // Clear the batch requests
            if (isBatchRequest) {
                base.base.batchRequests = null;
            }
        }
    },
    // Method to validate the data collection results
    validateDataCollectionResults: function (base) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Method to validate the request
            var request = function (xhr, resolve) {
                // Validate the response
                if (xhr && xhr.status < 400 && typeof (xhr.response) === "string" && xhr.response.length > 0) {
                    // Convert the response and ensure the data property exists
                    var data = JSON.parse(xhr.response);
                    // Set the next item flag
                    base.nextFl = data.d && data.d.__next;
                    // See if there are more items to get
                    if (base.nextFl) {
                        // See if we are getting all items in the base request
                        if (base.getAllItemsFl) {
                            // Create the target information to query the next set of results
                            var targetInfo = Object.create(base.targetInfo);
                            targetInfo.endpoint = "";
                            targetInfo.url = data.d.__next;
                            // Create a new object
                            new xhrRequest_1.XHRRequest(true, new targetInfo_1.TargetInfo(targetInfo), function (xhr) {
                                // Convert the response and ensure the data property exists
                                var data = JSON.parse(xhr.response);
                                if (data.d) {
                                    // Update the data collection
                                    helper_1.Helper.updateDataCollection(base, data.d.results);
                                    // Update the expanded properties
                                    helper_1.Helper.updateExpandedProperties(base);
                                    // Append the raw data results
                                    base["d"].results = base["d"].results.concat(data.d.results);
                                    // Validate the data collection
                                    request(xhr, resolve);
                                }
                                else {
                                    // Resolve the promise
                                    resolve();
                                }
                            });
                        }
                        else {
                            // Add a method to get the next set of results
                            base["next"] = new Function("return this.getNextSetOfResults();");
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
            request(base.xhr, resolve);
        });
    },
    // Method to wait for the parent requests to complete
    waitForRequestsToComplete: function (base, callback, requestIdx) {
        // Ensure a callback exists and is a function
        if (typeof (callback) === "function") {
            // Loop until the requests have completed
            var intervalId_1 = lib_1.ContextInfo.window.setInterval(function () {
                var counter = 0;
                // Parse the responses to the requests
                for (var i = 0; i < base.base.responses.length; i++) {
                    var response = base.base.responses[i];
                    // See if we are waiting until a specified index
                    if (requestIdx == counter++) {
                        break;
                    }
                    // Return if the request hasn't completed
                    if (response.xhr == null || !response.xhr.completedFl) {
                        return;
                    }
                    // Ensure the wait flag is set for the previous request
                    if (counter > 0 && base.base.waitFlags[counter - 1] != true) {
                        return;
                    }
                }
                // Clear the interval
                lib_1.ContextInfo.window.clearInterval(intervalId_1);
                // Execute the callback
                callback();
            }, 10);
        }
    }
};
