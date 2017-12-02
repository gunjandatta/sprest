import { ContextInfo } from "../lib";
import { Mapper, Types } from "../mapper";
import { RequestType, IRequestType } from "../types";
import {
    Batch,
    MethodInfo, IMethodInfo,
    Promise,
    Request,
    TargetInfo,
    XHRRequest,
    IRequestInfo, ITargetInfo
} from ".";

/**
 * Base
 */
export interface IBase<Type = any, Result = Type, QueryResult = Result> {
    /**
     * Properties
     */

    /** True, if the object exists, false otherwise. */
    existsFl: boolean;

    /** The parent object, which created this object. */
    parent: any;

    /** The response */
    response: string;

    /** The request type */
    requestType: IRequestType;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param callback - The method to be executed after the request completes.
     */
    batch(callback?: (value?: Result, ...args) => any): Type;

    /**
     * Method to execute the request as a batch.
     * Currently available in SharePoint Online only.
     * @param appendFl - Flag to execute the request as part of a change set.
     */
    batch(appendFl?: boolean): Type;

    /**
     * Method to wait for the requests to complete.
     * @param callback - The method to be executed after the request completes.
     */
    done(callback?: (...args) => any);

    /**
     * Method to wait for the requests to complete.
     * @param callback - The method to be executed after the request completes.
     */
    done(callback?: (value?: Result, ...args) => any);

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: Result, ...args) => any): Type;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): Type;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: Result, ...args) => any, waitFl: boolean): Type;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): Result;

    /**
     * Method to get the request information.
     */
    getInfo(): IRequestInfo;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query?(query: Types.ODataQuery): IBase<Result, QueryResult>;

    /**
     * Method to execute this request and previous ones to complete.
     * @param resolve - Method to execute for successful requests.
     * @param reject - Method to execute for unsuccessful requests.
     */
    then(resolve?: (value?: Result) => void, reject?: (value?: Result) => void): PromiseLike<Result>;
}

/**
 * Base Collection
 */
export interface IBaseCollection<Type = any, Result = Type, QueryResult = Result> extends Types.IResults<Type>, IBase<Types.IResults<Result>, Types.IResults<Result>, Types.IResults<QueryResult>> { }

/*********************************************************************************************************************************/
// Base
// This is the base class for all objects.
/*********************************************************************************************************************************/
export class Base<Type = any, Result = Type, QueryResult = Result> implements IBase {
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
    then(resolve, reject): PromiseLike<IBase> {
        // Return a promise
        return new Promise(() => {
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
    base: Base;

    // The batch requests
    batchRequests: Array<Array<{ callback?: any, response?: Base, targetInfo: TargetInfo }>>;

    // Flag to default the url to the current web url, site otherwise
    defaultToWebFl: boolean;

    // Flag to get all items
    getAllItemsFl: boolean;

    // The promise
    promise: Promise;

    // The request
    request: XHRRequest;

    // The responses
    responses: Array<Base>;

    // The index of this object in the responses array
    responseIndex: number;

    // The base settings
    targetInfo: ITargetInfo;

    // The wait flags
    waitFlags: Array<boolean>;

    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/

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

        // Ensure the return type exists
        if (methodConfig.returnType) {
            // Add the methods
            Request.addMethods(obj, { __metadata: { type: methodConfig.returnType } });
        }

        // Return the object
        return obj;
    }

    // Method to execute the request
    protected executeRequest(asyncFl: boolean, callback?: (...args) => void) {
        let isBatchRequest = this.base && this.base.batchRequests && this.base.batchRequests.length > 0;
        let targetInfo = isBatchRequest ? Batch.getTargetInfo(this.base.batchRequests) : new TargetInfo(this.targetInfo);

        // See if this is an asynchronous request
        if (asyncFl) {
            // See if the not a batch request, and it already exists
            if (this.request && !isBatchRequest) {
                // Execute the callback
                callback ? callback(this) : null;
            } else {
                // Create the request
                this.request = new XHRRequest(asyncFl, targetInfo, () => {
                    // Update this data object
                    Request.updateDataObject(this, isBatchRequest);

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

            // Update this object
            Request.updateDataObject(this, isBatchRequest);

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
        requestType ? Request.addMethods(obj, { __metadata: { type: requestType } }) : null;

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
                            Request.updateDataCollection(this, data.d.results);

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