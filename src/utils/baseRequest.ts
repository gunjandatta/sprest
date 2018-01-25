import {
    Base,
    BaseHelper,
    Batch,
    MethodInfo,
    RequestType,
    TargetInfo,
    Types,
    XHRRequest
} from ".";

/**
 * Base Request
 */
export class BaseRequest extends BaseHelper implements Types.IBaseRequest {
    getAllItemsFl: boolean;
    requestType: number;
    targetInfo: Types.ITargetInfo;
    xhr: XHRRequest;

    // Method to execute a method
    executeMethod(methodName: string, methodConfig: Types.IMethodInfo, args?: any) {
        let targetInfo: Types.ITargetInfo = null;

        // See if the metadata is defined for the base object
        let metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
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
        obj.base = this.base ? this.base : this as any;
        obj.getAllItemsFl = methodInfo.getAllItemsFl;
        obj.parent = this as any;
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
                    } else {
                        // Update the data object
                        this.updateDataObject(isBatchRequest);

                        // Validate the data collection
                        isBatchRequest ? null : this.validateDataCollectionResults().then(() => {
                            // Execute the callback
                            callback ? callback(this) : null;
                        });
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
    }

    // Method to return a collection
    getCollection(method: string, args?: any) {
        // Copy the target information
        let targetInfo = Object.create(this.targetInfo);

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
        let targetInfo = Object.create(this.targetInfo);
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
        let targetInfo = Object.create(this.targetInfo);

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
        requestType ? this.addMethods(obj, { __metadata: { type: requestType } }) : null;

        // Return the object
        return obj;
    }

    // Method to update the metadata uri
    updateMetadataUri(metadata, targetInfo: Types.ITargetInfo) {
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

    // Method to validate the data collection results
    validateDataCollectionResults(): PromiseLike<void> {
        // Return a promise
        return new Promise((resolve, reject) => {
            let request = (xhr, resolve) => {
                // Validate the response
                if (xhr && xhr.status < 400 && typeof (xhr.response) === "string" && xhr.response.length > 0) {
                    // Convert the response and ensure the data property exists
                    let data = JSON.parse(xhr.response);

                    // See if there are more items to get
                    if (data.d && data.d.__next) {
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
                                    this.updateDataCollection(this, data.d.results);

                                    // Append the raw data results
                                    this["d"].results = this["d"].results.concat(data.d.results);

                                    // Validate the data collection
                                    request(xhr, resolve);
                                }

                                // Resolve the promise
                                resolve();
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