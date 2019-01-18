import { Base } from "./base";
import { Batch } from "./batch";
import { Helper } from "./helper";
import { MethodInfo } from "./methodInfo";
import { RequestType } from "./requestType";
import { TargetInfo } from "./targetInfo";
import { XHRRequest } from "./xhrRequest";

import { IBaseRequest } from "./types/baseRequest";
import { IMethodInfo } from "./types/methodInfo";
import { ITargetInfoProps } from "./types/targetInfo";

/**
 * Base Request
 */
export class BaseRequest implements IBaseRequest {
    base: Base;
    getAllItemsFl: boolean;
    nextFl: boolean;
    requestType: number;
    response: string;
    status: number;
    targetInfo: ITargetInfoProps;
    xml: string | XMLDocument;
    xhr: XHRRequest;

    // Method to execute a method
    executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any) {
        let targetInfo: ITargetInfoProps = null;

        // See if the metadata is defined for the base object
        let metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
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
            this.updateMetadataUri(metadata, targetInfo);
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
        targetInfo.defaultToWebFl = typeof (targetInfo.defaultToWebFl) === "undefined" && this.base ? this.base.targetInfo.defaultToWebFl : targetInfo.defaultToWebFl;
        targetInfo.method = methodInfo.requestMethod;
        targetInfo.requestDigest = typeof (targetInfo.requestDigest) === "undefined" && this.base && this.base.targetInfo.requestDigest ? this.base.targetInfo.requestDigest : targetInfo.requestDigest;
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
        let obj = new Base(targetInfo);

        // Set the properties
        obj.base = this.base ? this.base : this as any;
        obj.getAllItemsFl = methodInfo.getAllItemsFl;
        obj.parent = this as any;
        obj.requestType = methodConfig.requestType;

        // Ensure the return type exists
        if (methodConfig.returnType) {
            // Add the methods
            Helper.addMethods(obj, { __metadata: { type: methodConfig.returnType } });
        }

        // Return the object
        return obj;
    }

    // Method to execute the request
    executeRequest(asyncFl: boolean, callback?: (response: any, errorFl: boolean) => void) {
        let isBatchRequest = this.base && this.base.batchRequests && this.base.batchRequests.length > 0;
        let targetInfo = isBatchRequest ? Batch.getTargetInfo(this.base.batchRequests) : new TargetInfo(this.targetInfo);

        // See if this is an asynchronous request
        if (asyncFl) {
            // See if the not a batch request, and it already exists
            if (this.xhr && !isBatchRequest) {
                // Execute the callback
                callback ? callback(this, false) : null;
            } else {
                // Create the request
                this.xhr = new XHRRequest(asyncFl, targetInfo, () => {
                    // Update the response and status
                    this.response = this.xhr.response;
                    this.status = this.xhr.status;
                    let errorFl = !(this.status >= 200 && this.status < 300);

                    // See if we are returning a file buffer
                    if (this.requestType == RequestType.GetBuffer) {
                        // Execute the callback
                        callback ? callback(this.response, errorFl) : null;
                    } else {
                        // Update the data object
                        this.updateDataObject(isBatchRequest);

                        // Ensure this isn't a batch request
                        if (!isBatchRequest) {
                            // See if this is an xml response
                            if (this.xml) {
                                // Execute the callback
                                callback ? callback(this, errorFl) : null;
                            } else {
                                // Validate the data collection
                                this.validateDataCollectionResults().then(() => {
                                    // Execute the callback
                                    callback ? callback(this, errorFl) : null;
                                });
                            }
                        }
                    }
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
                return this.response;
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
    }

    // Method to return a collection
    getCollection(method: string, args?: any) {
        // Copy the target information
        let targetInfo: ITargetInfoProps = Object.create(this.targetInfo);

        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;

        // See if the metadata is defined for the base object
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
        obj.base = this.base ? this.base : this as any;
        obj.parent = this as any;

        // Return the object
        return obj;
    }

    // Method to get the next set of results
    getNextSetOfResults() {
        // Create the target information to query the next set of results
        let targetInfo: ITargetInfoProps = Object.create(this.targetInfo);
        targetInfo.endpoint = "";
        targetInfo.url = this["d"].__next;

        // Create a new object
        let obj = new Base(targetInfo);

        // Set the properties
        obj.base = this.base ? this.base : this as any;
        obj.parent = this as any;

        // Return the object
        return obj;
    }

    // Method to return a property of the base object
    getProperty(propertyName: string, requestType?: string) {
        // Copy the target information
        let targetInfo: ITargetInfoProps = Object.create(this.targetInfo);

        // See if this is a graph request
        if (requestType.startsWith("graph")) {
            // Default the request type
            targetInfo.requestType = RequestType.GraphGet;
        }

        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;

        // See if the metadata is defined for the base object
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
        obj.base = this.base ? this.base : this as any;
        obj.parent = this as any;

        // Add the methods
        requestType ? Helper.addMethods(obj, { __metadata: { type: requestType } }) : null;

        // Return the object
        return obj;
    }

    // Method to update the metadata uri
    updateMetadataUri(metadata, targetInfo: ITargetInfoProps) {
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
            targetInfo.url = targetInfo.url.split("Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata")[0] + "web/tenantappcatalog/availableapps/getbyid('" + this["ID"] + "')";
        }
    }

    // Method to convert the input arguments into an object
    updateDataObject(isBatchRequest: boolean = false) {
        // Ensure the request was successful
        if (this.status >= 200 && this.status < 300) {
            // Return if we are expecting a buffer
            if (this.requestType == RequestType.GetBuffer) { return; }

            // Parse the responses
            let batchIdx = 0;
            let batchRequestIdx = 0;
            let responses = isBatchRequest ? this.response.split("\n") : [this.response];
            for (let i = 0; i < responses.length; i++) {
                let data = null;

                // Set the response
                let response = responses[i];
                response = response === "" && !isBatchRequest ? "{}" : response;

                // Set the xml flag
                let isXML = response.indexOf("<?xml") == 0;
                if (isXML) {
                    // Append the response while data exists
                    while (responses[i + 1] && responses[i + 1].indexOf("--batchresponse") != 0) {
                        // Append the response
                        response += responses[++i];
                    }
                }

                // Try to convert the response
                try { data = isXML ? response : JSON.parse(response); }
                catch (ex) { continue; }

                // Set the object based on the request type
                let obj = isBatchRequest ? Object.create(this) : this;

                // Set the exists flag
                obj["existsFl"] = typeof (obj["Exists"]) === "boolean" ? obj["Exists"] : data.error == null;

                // See if this is xml
                if (isXML) {
                    let objData;

                    // Get the response properties
                    let idxStart = data.indexOf("<m:properties>");
                    let idxEnd = data.indexOf("</m:properties");
                    let properties = idxEnd > idxStart ? data.substr(idxStart, idxEnd) : null;
                    if (properties) {
                        // Set the data object
                        objData = Helper.parseXML(properties);

                        // Update the metadata
                        Helper.updateMetadata(obj, objData);

                        // Update the base object's properties
                        Helper.addProperties(obj, objData);

                        // Add the methods
                        Helper.addMethods(obj, objData, objData["@odata.context"]);

                        // Update the data collection
                        Helper.updateDataCollection(obj, objData["results"]);
                    } else {
                        // Update the object to the raw data
                        obj = data;
                    }
                }
                // Else, see if the data properties exists
                else if (data.d) {
                    // Save a reference to it
                    obj["d"] = data.d;

                    // Update the metadata
                    Helper.updateMetadata(obj, data.d);

                    // Update the base object's properties
                    Helper.addProperties(obj, data.d);

                    // Add the methods
                    Helper.addMethods(obj, data.d, data["@odata.context"]);

                    // Update the data collection
                    Helper.updateDataCollection(obj, data.d.results);
                } else {
                    // Update the base object's properties
                    Helper.addProperties(obj, data);
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
                        batchRequest.response = obj;

                        // Execute the callback if it exists
                        batchRequest.callback ? batchRequest.callback(batchRequest.response) : null;
                    }
                }
            }

            // Clear the batch requests
            if (isBatchRequest) { this.base.batchRequests = null; }
        }
    }

    // Method to validate the data collection results
    validateDataCollectionResults(): PromiseLike<void> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Method to validate the request
            let request = (xhr, resolve) => {
                // Validate the response
                if (xhr && xhr.status < 400 && typeof (xhr.response) === "string" && xhr.response.length > 0) {
                    // Convert the response and ensure the data property exists
                    let data = JSON.parse(xhr.response);

                    // Set the next item flag
                    this.nextFl = data.d && data.d.__next;

                    // See if there are more items to get
                    if (this.nextFl) {
                        // See if we are getting all items in the base request
                        if (this.getAllItemsFl) {
                            // Create the target information to query the next set of results
                            let targetInfo = Object.create(this.targetInfo);
                            targetInfo.endpoint = "";
                            targetInfo.url = data.d.__next;

                            // Create a new object
                            new XHRRequest(true, new TargetInfo(targetInfo), (xhr) => {
                                // Convert the response and ensure the data property exists
                                let data = JSON.parse(xhr.response);
                                if (data.d) {
                                    // Update the data collection
                                    Helper.updateDataCollection(this as any, data.d.results);

                                    // Append the raw data results
                                    this["d"].results = this["d"].results.concat(data.d.results);

                                    // Validate the data collection
                                    request(xhr, resolve);
                                } else {
                                    // Resolve the promise
                                    resolve();
                                }
                            });
                        } else {
                            // Add a method to get the next set of results
                            this["next"] = new Function("return this.getNextSetOfResults();");

                            // Resolve the promise
                            resolve();
                        }
                    } else {
                        // Resolve the promise
                        resolve();
                    }
                } else {
                    // Resolve the promise
                    resolve();
                }
            }

            // Execute the request
            request(this.xhr, resolve);
        });
    }
}