import { RequestType, IRequestType } from "../types";
import {
    Base, BaseHelper, IBaseHelper,
    Batch, MethodInfo, Promise, TargetInfo, XHRRequest,
    IMethodInfo, ITargetInfo
} from ".";

/**
 * Base Request
 */
export interface IBaseRequest extends IBaseHelper {
    /** The target information. */
    targetInfo: ITargetInfo;

    /** The request. */
    xhr: XHRRequest;

    /** Method to execute the request. */
    executeMethod(base: Base, methodName: string, methodConfig: IMethodInfo, args?: any);

    /** Method to execute the request. */
    executeRequest(asyncFl: boolean, callback?: (...args) => void);

    /** Gets the property as a collection. */
    getCollection(base: Base, method: string, args?: any);

    /** Gets the next set of results. */
    getNextSetOfResults(base: Base);

    /** Gets the property. */
    getProperty(base: Base, propertyName: string, requestType?: string);

    /** Updates the metdata uri. */
    updateMetadataUri(metadata, targetInfo: ITargetInfo);

    /** Validates the data collection results. */
    validateDataCollectionResults(base: Base, request: XHRRequest, promise?: Promise);
}

/**
 * Base Request
 */
export class BaseRequest extends BaseHelper implements IBaseRequest {
    requestType: number;
    targetInfo: ITargetInfo;
    xhr: XHRRequest;

    // Method to execute a method
    executeMethod(base: Base, methodName: string, methodConfig: IMethodInfo, args?: any) {
        let targetInfo: ITargetInfo = null;

        // See if the metadata is defined for the base object
        let metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
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
    }

    // Method to execute the request
    executeRequest(asyncFl: boolean, callback?: (...args) => void) {
        let isBatchRequest = this.base && this.base.batchRequests && this.base.batchRequests.length > 0;
        let targetInfo = isBatchRequest ? Batch.getTargetInfo(this.base.batchRequests) : new TargetInfo(this.targetInfo);

        // See if this is an asynchronous request
        if (asyncFl) {
            // See if the not a batch request, and it already exists
            if (this.xhr && !isBatchRequest) {
                // Execute the callback
                callback ? callback(this) : null;
            } else {
                // Create the request
                this.xhr = new XHRRequest(asyncFl, targetInfo, () => {
                    // Update the response and status
                    this.response = this.xhr.response;
                    this.status = this.xhr.status;

                    // See if we are returning a file buffer
                    if (this.requestType == RequestType.GetBuffer) {
                        // Execute the callback
                        callback ? callback(this.xhr.response) : null;
                    }

                    // Update the data object
                    this.updateDataObject(isBatchRequest);

                    // Validate the data collection
                    isBatchRequest ? null : this.validateDataCollectionResults(this as any, this.xhr).done(() => {
                        // Execute the callback
                        callback ? callback(this) : null;
                    });
                });
            }
        }
        // Else, see if we already executed this request
        else if (this.xhr) { return this; }
        // Else, we haven't executed this request
        else {
            // Create the request
            this.xhr = new XHRRequest(asyncFl, targetInfo);

            // Update the response and status
            this.response = this.xhr.response;
            this.status = this.xhr.status;

            // See if we are returning a file buffer
            if (this.requestType == RequestType.GetBuffer) {
                // Return the response
                return this.xhr.response;
            }

            // Update the base object
            this.updateDataObject(isBatchRequest);

            // See if the base is a collection and has more results
            if (this["d"] && this["d"].__next) {
                // Add the "next" method to get the next set of results
                this["next"] = new Function("return this.request.getNextSetOfResults();");
            }

            // Return the base object
            return this;
        }
    }

    // Method to return a collection
    getCollection(base: Base, method: string, args?: any) {
        // Copy the target information
        let targetInfo = Object.create(base.targetInfo);

        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;

        // See if the metadata is defined for the base object
        let metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
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
        obj.base = base.base ? base.base : base;
        obj.parent = base;

        // Return the object
        return obj;
    }

    // Method to get the next set of results
    getNextSetOfResults(base: Base) {
        // Create the target information to query the next set of results
        let targetInfo = Object.create(base.targetInfo);
        targetInfo.endpoint = "";
        targetInfo.url = base["d"].__next;

        // Create a new object
        let obj = new Base(targetInfo);

        // Set the properties
        obj.base = base.base ? base.base : base;
        obj.parent = base;

        // Return the object
        return obj;
    }

    // Method to return a property of the base object
    getProperty(base: Base, propertyName: string, requestType?: string) {
        // Copy the target information
        let targetInfo = Object.create(base.targetInfo);

        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;

        // See if the metadata is defined for the base object
        let metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
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
        obj.base = base.base ? base.base : base;
        obj.parent = base;

        // Add the methods
        requestType ? this.addMethods(obj, { __metadata: { type: requestType } }) : null;

        // Return the object
        return obj;
    }

    // Method to update the metadata uri
    updateMetadataUri(metadata, targetInfo: ITargetInfo) {
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
    validateDataCollectionResults(base: Base, request: XHRRequest, promise?: Promise) {
        promise = promise || new Promise();

        // Validate the response
        if (request && request.status < 400 && typeof (request.response) === "string" && request.response.length > 0) {
            // Convert the response and ensure the data property exists
            let data = JSON.parse(request.response);

            // See if there are more items to get
            if (data.d && data.d.__next) {
                // See if we are getting all items in the base request
                if (base.getAllItemsFl) {
                    // Create the target information to query the next set of results
                    let targetInfo = Object.create(base.targetInfo);
                    targetInfo.endpoint = "";
                    targetInfo.url = data.d.__next;

                    // Create a new object
                    new XHRRequest(true, new TargetInfo(targetInfo), (request) => {
                        // Convert the response and ensure the data property exists
                        let data = JSON.parse(request.response);
                        if (data.d) {
                            // Update the data collection
                            this.updateDataCollection(base, data.d.results);

                            // Append the raw data results
                            base["d"].results = base["d"].results.concat(data.d.results);

                            // Validate the data collection
                            return this.validateDataCollectionResults(base, request, promise);
                        }

                        // Resolve the promise
                        promise.resolve();
                    });
                } else {
                    // Add a method to get the next set of results
                    this["next"] = new Function("return this.request.getNextSetOfResults();");

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
}