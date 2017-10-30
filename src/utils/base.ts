import { Promise as P } from "es6-promise";
import { IMethodInfo, IRequestInfo, ITargetInfo } from "../definitions";
import { ContextInfo } from "../lib";
import { Mapper } from "../mapper";
import { RequestType } from "../types";
import {
    Batch,
    MethodInfo,
    Promise,
    TargetInfo,
    XHRRequest
} from ".";

/*********************************************************************************************************************************/
// Base
// This is the base class for all objects.
/*********************************************************************************************************************************/
export class Base<Type = any, Result = Type, QueryResult = Result> {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo: ITargetInfo) {
        // Default the properties
        this.targetInfo = Object.create(targetInfo || {});
        this.responses = [];
        this.requestType = 0;
        this.waitFlags = [];
    }

    /*********************************************************************************************************************************/
    // Public Properties
    /*********************************************************************************************************************************/

    // Flag to determine if the requested object exists
    existsFl;

    // The parent
    parent: Base;

    // The request type
    requestType;

    // Method to return the xml http request's response
    get response() { return this.request ? this.request.response : null; }

    /*********************************************************************************************************************************/
    // Public Methods
    /*********************************************************************************************************************************/

    // Method to execute this request as a batch request
    batch(arg?) {
        let callback = null;
        let appendFl = false;

        // See if the input is a boolean
        if (typeof (arg) === "boolean") {
            // Set the flag
            appendFl = arg;
        } else {
            // Set the callback
            callback = arg;
        }

        // Set the base
        this.base = this.base ? this.base : this;

        // See if we are appending this request
        if (appendFl && this.base.batchRequests) {
            // Append the request
            this.base.batchRequests[this.base.batchRequests.length - 1].push({
                targetInfo: new TargetInfo(this.targetInfo)
            });
        } else {
            // Ensure the batch requests exist
            this.base.batchRequests = this.base.batchRequests || [];

            // Create the request
            this.base.batchRequests.push([{
                callback,
                targetInfo: new TargetInfo(this.targetInfo)
            }]);
        }

        // Return this object
        return this;
    }

    // Method to wait for the requests to complete
    done(callback: (...args) => any) {
        // Ensure the base is set
        this.base = this.base ? this.base : this;

        // Ensure the response index is set
        this.responseIndex = this.responseIndex >= 0 ? this.responseIndex : 0;

        // Wait for the responses to execute
        this.waitForRequestsToComplete(() => {
            let responses = this.base.responses;

            // Clear the responses
            this.base.responses = [];

            // Clear the wait flags
            this.base.waitFlags = [];

            // Execute the callback back
            callback ? callback.apply(this, responses) : null;
        });
    }

    // Method to execute the request
    execute(...args) {
        let callback = null;
        let waitFl = false;

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
            this.waitForRequestsToComplete(() => {
                // Execute this request
                this.executeRequest(true, () => {
                    // See if there is a callback
                    if (callback) {
                        // Set the base to this object, and clear requests
                        // This will ensure requests from this object do not conflict w/ this request
                        this.base = this;
                        this.base.responses = [];

                        // Execute the callback and see if it returns a promise
                        let returnVal = callback(this);
                        if (returnVal && typeof (returnVal.done) === "function") {
                            // Wait for the promise to complete
                            returnVal.done(() => {
                                // Reset the base
                                this.base = this.parent.base;

                                // Set the wait flag
                                this.base.waitFlags[this.responseIndex] = true;
                            });

                            // Wait for the promise to complete
                            return;
                        }

                        // Reset the base
                        this.base = this.parent.base;
                    }

                    // Set the wait flag
                    this.base.waitFlags[this.responseIndex] = true;
                });
            }, this.responseIndex);
        } else {
            // Execute this request
            this.executeRequest(true, () => {
                // Execute the callback and see if it returns a promise
                let returnVal = callback ? callback(this) : null;
                if (returnVal && typeof (returnVal.done) === "function") {
                    // Wait for the promise to complete
                    returnVal.done(() => {
                        // Set the wait flag
                        this.base.waitFlags[this.responseIndex] = true;
                    });
                } else {
                    // Set the wait flag
                    this.base.waitFlags[this.responseIndex] = true;
                }
            });
        }

        // Return this object
        return this;
    }

    // Method to execute the request synchronously
    executeAndWait() { return this.executeRequest(false); }

    // Method to get the request information
    getInfo(): IRequestInfo { return (new TargetInfo(this.targetInfo)).requestInfo; }

    // Method to execute the request asynchronously
    then(resolve, reject): PromiseLike<Base> {
        // Return a promise
        return new P(() => {
            // Execute this request
            this.execute((request: Base) => {
                // Ensure the request was successful
                if (request && request.existsFl) {
                    // Resolve the request
                    resolve ? resolve.apply(this, request) : null;
                } else {
                    // Reject the request
                    reject ? reject.apply(this, request) : null;
                }
            });
        });
    }

    /*********************************************************************************************************************************/
    // Private Variables
    /*********************************************************************************************************************************/

    // The base object
    private base: Base;

    // The batch requests
    private batchRequests: Array<Array<{ callback?: any, response?: Base, targetInfo: TargetInfo }>>;

    // Flag to default the url to the current web url, site otherwise
    protected defaultToWebFl: boolean;

    // Flag to get all items
    protected getAllItemsFl: boolean;

    // The promise
    private promise: Promise;

    // The request
    protected request: XHRRequest;

    // The responses
    protected responses: Array<Base>;

    // The index of this object in the responses array
    private responseIndex: number;

    // The base settings
    protected targetInfo: ITargetInfo;

    // The wait flags
    private waitFlags: Array<boolean>;

    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/

    // Method to add the methods to this object
    protected addMethods(obj, data) {
        let isCollection = data.results && data.results.length > 0;

        // Determine the metadata
        let metadata = isCollection ? data.results[0].__metadata : data.__metadata;

        // Determine the object type
        let objType = metadata && metadata.type ? metadata.type : obj.targetInfo.endpoint;
        objType = objType.split('/');
        objType = (objType[objType.length - 1]);
        objType = objType.split('.');
        objType = (objType[objType.length - 1]).toLowerCase();
        objType += isCollection ? "s" : "";

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
            for (let methodName in methods) {
                // Get the method information
                let methodInfo = methods[methodName] ? methods[methodName] : {};

                // See if this is the "Properties" definition for the object
                if (methodName == "properties") {
                    // Parse the properties
                    for (let property of methodInfo) {
                        let propInfo = property.split("|");

                        // Get the metadata type
                        let propName = propInfo[0];
                        let propType = propInfo.length > 1 ? propInfo[1] : null;
                        let subPropName = propInfo.length > 2 ? propInfo[2] : null;
                        let subPropType = propInfo.length > 3 ? propInfo[3] : null;

                        // See if the property is null or is a collection
                        if (obj[propName] == null || (obj[propName].__deferred && obj[propName].__deferred.uri)) {
                            // See if this property has a sub-property defined for it
                            if (propInfo.length == 4) {
                                // Update the ' char in the property name
                                subPropName = subPropName.replace(/'/g, "\\'");

                                // Add the property
                                obj[propName] = new Function("name",
                                    "name = name ? '" + propName + subPropName + "'.replace(/\\[Name\\]/g, name) : null;" +
                                    "return this.getProperty(name ? name : '" + propName + "', name ? '" + subPropType + "' : '" + propType + "');");
                            } else {
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
    }

    // Method to add properties to this object
    private addProperties(obj, data) {
        // Parse the data properties
        for (var key in data) {
            let value = data[key];

            // Skip properties
            if (key == "__metadata" || key == "results") { continue; }

            // See if this is a collection property
            if (value && value.__deferred && value.__deferred.uri) {
                // Generate a method for this property
                obj["get_" + key] = obj["get_" + key] ? obj["get_" + key] : new Function("return this.getCollection('" + key + "', arguments);");
            }
            else {
                // Set the property, based on the property name
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

                // See if this is a collection
                if (obj[key] && obj[key].results) {
                    // Ensure the collection is an object
                    if (obj[key].results.length == 0 || typeof (obj[key].results[0]) === "object") {
                        // Create this property as a new request
                        let objCollection = new Base(obj.targetInfo);
                        objCollection["results"] = obj[key].results;

                        // See no results exist
                        if (objCollection["results"].length == 0) {
                            // Set the metadata type to the key
                            objCollection["__metadata"] = { type: key };
                        }

                        // Update the endpoint for this request to point to this property
                        objCollection.targetInfo.endpoint = (objCollection.targetInfo.endpoint.split("?")[0] + "/" + key).replace(/\//g, "/");

                        // Add the methods
                        obj.addMethods(objCollection, objCollection);

                        // Update the data collection
                        obj.updateDataCollection(obj, objCollection["results"]);

                        // Update the property
                        obj[key] = objCollection;
                    }
                }
            }
        }
    }

    // Method to execute a method
    protected executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any) {
        let targetInfo: ITargetInfo = null;

        // See if the metadata is defined for this object
        let metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
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
        let obj = new Base(targetInfo);

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
    protected executeRequest(asyncFl: boolean, callback?: (...args) => void) {
        let isBatchRequest = this.base && this.base.batchRequests && this.base.batchRequests.length > 0;
        let targetInfo = isBatchRequest ? Batch.getTargetInfo(this.base.batchRequests) : new TargetInfo(this.targetInfo);

        // See if this is an asynchronous request
        if (asyncFl) {
            // See if this not a batch request, and it already exists
            if (this.request && !isBatchRequest) {
                // Execute the callback
                callback ? callback(this) : null;
            } else {
                // Create the request
                this.request = new XHRRequest(asyncFl, targetInfo, () => {
                    // Update this data object
                    this.updateDataObject(isBatchRequest);

                    // Validate the data collection
                    isBatchRequest ? null : this.validateDataCollectionResults(this.request).done(() => {
                        // Execute the callback
                        callback ? callback(this) : null;
                    });
                });
            }
        }
        // Else, see if we already executed this response
        else if (this.request) { return this; }
        // Else, we haven't executed this request
        else {
            // Create the request
            this.request = new XHRRequest(asyncFl, targetInfo);

            // Update this data object
            this.updateDataObject(isBatchRequest);

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
    private getCollection(method: string, args?: any) {
        // Copy the target information
        let targetInfo = Object.create(this.targetInfo);

        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;

        // See if the metadata is defined for this object
        let metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
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
        let obj = new Base(targetInfo);

        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.parent = this;

        // Return the object
        return obj;
    }

    // Method to return a property of this object
    protected getProperty(propertyName: string, requestType?: string) {
        // Copy the target information
        let targetInfo = Object.create(this.targetInfo);

        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;

        // See if the metadata is defined for this object
        let metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
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
        let obj = new Base(targetInfo);

        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.parent = this;

        // Add the methods
        requestType ? this.addMethods(obj, { __metadata: { type: requestType } }) : null;

        // Return the object
        return obj;
    }

    // Method to get the next set of results
    protected getNextSetOfResults() {
        // Create the target information to query the next set of results
        let targetInfo = Object.create(this.targetInfo);
        targetInfo.endpoint = "";
        targetInfo.url = this["d"].__next;

        // Create a new object
        let obj = new Base(targetInfo);

        // Set the properties
        obj.base = this.base ? this.base : this;
        obj.parent = this;

        // Return the object
        return obj;
    }

    // Method to update a collection object
    private updateDataCollection(obj, results) {
        // Ensure this is a collection
        if (results) {
            // Save the results
            obj["results"] = obj["results"] ? obj["results"].concat(results) : results;

            // See if only one object exists
            if (obj["results"].length > 0) {
                let results = obj["results"];

                // Parse the results
                for (let result of results) {
                    // Add the base references
                    result["addMethods"] = obj.addMethods;
                    result["base"] = obj.base;
                    result["done"] = obj.done;
                    result["execute"] = obj.execute;
                    result["executeAndWait"] = obj.executeAndWait
                    result["executeMethod"] = obj.executeMethod;
                    result["existsFl"] = true;
                    result["getProperty"] = obj.getProperty;
                    result["parent"] = obj;
                    result["targetInfo"] = obj.targetInfo;
                    result["updateMetadataUri"] = obj.updateMetadataUri;
                    result["waitForRequestsToComplete"] = obj.waitForRequestsToComplete;

                    // Update the metadata
                    obj.updateMetadata(obj, result);

                    // Add the methods
                    obj.addMethods(result, result);
                }
            }
        }
    }

    // Method to convert the input arguments into an object
    protected updateDataObject(isBatchRequest: boolean) {
        // Ensure the request was successful
        if (this.request.request.status >= 200 && this.request.request.status < 300) {
            // Return if we are expecting a buffer
            if (this.requestType == RequestType.GetBuffer) {
                // Set the exists flag
                this["existsFl"] = this.request.response != null;
            }
            else {
                let batchIdx = 0;
                let batchRequestIdx = 0;
                let responses = isBatchRequest ? this.request.response.split("\n") : [this.request.response];

                // Parse the responses
                for (let i = 0; i < responses.length; i++) {
                    let data = null;

                    // Try to convert the response
                    let response = responses[i];
                    response = response === "" && !isBatchRequest ? "{}" : response;
                    try { data = isBatchRequest && response.indexOf("<?xml") == 0 ? response : JSON.parse(response); }
                    catch (ex) { continue; }

                    // Set the object based on the request type
                    let obj = isBatchRequest ? Object.create(this) : this;

                    // Set the exists flag
                    obj["existsFl"] = typeof (obj["Exists"]) === "boolean" ? obj["Exists"] : data.error == null;

                    // See if the data properties exists
                    if (data.d) {
                        // Save a reference to it
                        obj["d"] = data.d;

                        // Update the metadata
                        obj.updateMetadata(obj, data.d);

                        // Update this object's properties
                        obj.addProperties(obj, data.d);

                        // Add the methods
                        obj.addMethods(obj, data.d);

                        // Update the data collection
                        obj.updateDataCollection(obj, data.d.results);
                    }

                    // See if the batch request exists
                    if (isBatchRequest) {
                        // Get the batch request
                        let batchRequest = this.base.batchRequests[batchIdx][batchRequestIdx++];
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
                this.base.batchRequests = null;
            }
        }
    }

    // Method to update the metadata
    private updateMetadata(obj, data) {
        // Ensure this is the app web
        if (!ContextInfo.isAppWeb) { return; }

        // Get the url information
        let hostUrl = ContextInfo.webAbsoluteUrl.toLowerCase();
        let requestUrl = data && data.__metadata && data.__metadata.uri ? data.__metadata.uri.toLowerCase() : null;
        let targetUrl = obj.targetInfo && obj.targetInfo.url ? obj.targetInfo.url.toLowerCase() : null;

        // Ensure the urls exist
        if (hostUrl == null || requestUrl == null || targetUrl == null) { return; }

        // See if we need to make an update
        if (targetUrl.indexOf(hostUrl) == 0) { return; }

        // Update the metadata uri
        data.__metadata.uri = requestUrl.replace(hostUrl, targetUrl);
    }

    // Method to update the metadata uri
    private updateMetadataUri(metadata, targetInfo: ITargetInfo) {
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
    private validateDataCollectionResults(request: XHRRequest, promise?: Promise) {
        promise = promise || new Promise();

        // Validate the response
        if (request && request.request.status < 400 && typeof (request.response) === "string" && request.response.length > 0) {
            // Convert the response and ensure the data property exists
            let data = JSON.parse(request.response);

            // See if there are more items to get
            if (data.d && data.d.__next) {
                // See if we are getting all items in this request
                if (this.getAllItemsFl) {
                    // Create the target information to query the next set of results
                    let targetInfo = Object.create(this.targetInfo);
                    targetInfo.endpoint = "";
                    targetInfo.url = data.d.__next;

                    // Create a new object
                    new XHRRequest(true, new TargetInfo(targetInfo), (request) => {
                        // Convert the response and ensure the data property exists
                        let data = JSON.parse(request.response);
                        if (data.d) {
                            // Update the data collection
                            this.updateDataCollection(this, data.d.results);

                            // Append the raw data results
                            this["d"].results = this["d"].results.concat(data.d.results);

                            // Validate the data collection
                            return this.validateDataCollectionResults(request, promise);
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
    private waitForRequestsToComplete(callback: () => void, requestIdx?: number) {
        // Loop until the requests have completed
        let intervalId = ContextInfo.window.setInterval(() => {
            let counter = 0;

            // Parse the responses to the requests
            for (let response of this.base.responses) {
                // See if we are waiting until a specified index
                if (requestIdx == counter++) { break; }

                // Return if the request hasn't completed
                if (response.request == null || !response.request.completedFl) { return; }

                // Ensure the wait flag is set for the previous request
                if (counter > 0 && this.base.waitFlags[counter - 1] != true) { return; }
            }

            // Clear the interval
            ContextInfo.window.clearInterval(intervalId);

            // Execute the callback
            callback();
        }, 10);
    }
}