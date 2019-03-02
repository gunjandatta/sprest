import { IMethodInfo, IRequestInfo } from "gd-sprest-def/base";
import { ContextInfo } from "../lib";
import { IBase } from "./types/base";
import { IBaseHelper } from "./types/helper";
import { ITargetInfoProps } from "./types/targetInfo";
import { Base, MethodInfo, Request, RequestType, TargetInfo } from ".";
import { XHRRequest } from "./xhrRequest";

/**
 * Request Helper
 */
export const Helper: IBaseHelper = {
    // Method to add the base references
    addBaseMethods: (base: IBase, obj: any) => {
        // Add the base references
        obj["addMethods"] = base.addMethods;
        obj["base"] = base.base;
        obj["done"] = base.done;
        obj["execute"] = base.execute;
        obj["executeAndWait"] = base.executeAndWait
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
    done: (base: IBase, resolve: (value?: any) => void) => {
        // Ensure the base is set
        base.base = base.base ? base.base : base;

        // Ensure the response index is set
        base.responseIndex = base.responseIndex >= 0 ? base.responseIndex : 0;

        // Wait for the responses to execute
        Request.waitForRequestsToComplete(base, () => {
            let responses = base.base.responses;

            // Clear the responses
            base.base.responses = [];

            // Clear the wait flags
            base.base.waitFlags = [];

            // Resolve the request
            resolve ? resolve.apply(base, responses) : null;
        });
    },

    // Method to execute a method
    executeMethod: (base: IBase, methodName: string, methodConfig: IMethodInfo, args?: any) => {
        let targetInfo: ITargetInfoProps = null;

        // See if the metadata is defined for the base object
        let metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
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
            Helper.updateMetadataUri(base, metadata, targetInfo);
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
        let obj = new Base(targetInfo);

        // Set the properties
        obj.base = base.base ? base.base : base;
        obj.getAllItemsFl = methodInfo.getAllItemsFl;
        obj.parent = base;
        obj.requestType = methodConfig.requestType;

        // Ensure the return type exists
        if (methodConfig.returnType) {
            // Add the methods
            Request.addMethods(obj, { __metadata: { type: methodConfig.returnType } });
        }

        // Return the object
        return obj;
    },

    // Method to return a collection
    getCollection: (base: IBase, method: string, args?: any) => {
        // Copy the target information
        let targetInfo: ITargetInfoProps = Object.create(base.targetInfo);

        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;

        // See if the metadata is defined for the base object
        let metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
        if (metadata && metadata.uri) {
            // Update the url of the target information
            targetInfo.url = metadata.uri;

            // Update the metadata uri
            Helper.updateMetadataUri(base, metadata, targetInfo);

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
    },

    // Method to get the next set of results
    getNextSetOfResults: (base: IBase) => {
        // Create the target information to query the next set of results
        let targetInfo: ITargetInfoProps = Object.create(base.targetInfo);
        targetInfo.endpoint = "";
        targetInfo.url = base["d"].__next;

        // Create a new object
        let obj = new Base(targetInfo);

        // Set the properties
        obj.base = base.base ? base.base : base;
        obj.parent = base;

        // Return the object
        return obj;
    },

    // Method to return a property of the base object
    getProperty: (base: IBase, propertyName: string, requestType?: string) => {
        // Copy the target information
        let targetInfo: ITargetInfoProps = Object.create(base.targetInfo);

        // See if this is a graph request
        if (requestType.startsWith("graph")) {
            // Default the request type
            targetInfo.requestType = RequestType.GraphGet;
        }

        // Clear the target information properties from any previous requests
        targetInfo.data = null;
        targetInfo.method = null;

        // See if the metadata is defined for the base object
        let metadata = base["d"] ? base["d"].__metadata : base["__metadata"];
        if (metadata && metadata.uri) {
            // Update the url of the target information
            targetInfo.url = metadata.uri;

            // Update the metadata uri
            Helper.updateMetadataUri(base, metadata, targetInfo);

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
        requestType ? Request.addMethods(obj, { __metadata: { type: requestType } }) : null;

        // Return the object
        return obj;
    },

    // Method to get the request information
    getRequestInfo: (base: IBase): IRequestInfo => {
        // Create the request, but don't execute it
        let xhr = new XHRRequest(true, new TargetInfo(base.targetInfo), null, false);

        // Return the request information
        return xhr.requestInfo;
    },

    // Method to stringify the object
    stringify: (base: IBase): string => {
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
    updateDataCollection: (obj, results) => {
        // Ensure the base is a collection
        if (results) {
            // Save the results
            obj["results"] = obj["results"] ? obj["results"].concat(results) : results;

            // See if only one object exists
            if (obj["results"].length > 0) {
                let results = obj["results"];

                // Parse the results
                for (let result of results) {
                    // Add the base methods
                    Helper.addBaseMethods(obj, result);

                    // Update the metadata
                    Helper.updateMetadata(obj, result);

                    // Add the methods
                    Request.addMethods(result, result);
                }
            }
        }
    },

    // Method to update the metadata
    updateMetadata: (base, data) => {
        // Ensure the base is the app web
        if (!ContextInfo.isAppWeb) { return; }

        // Get the url information
        let hostUrl = ContextInfo.webAbsoluteUrl.toLowerCase();
        let requestUrl = data && data.__metadata && data.__metadata.uri ? data.__metadata.uri.toLowerCase() : null;
        let targetUrl = base.targetInfo && base.targetInfo.url ? base.targetInfo.url.toLowerCase() : null;

        // Ensure the urls exist
        if (hostUrl == null || requestUrl == null || targetUrl == null) { return; }

        // See if we need to make an update
        if (targetUrl.indexOf(hostUrl) == 0) { return; }

        // Update the metadata uri
        data.__metadata.uri = requestUrl.replace(hostUrl, targetUrl);
    },

    // Method to update the metadata uri
    updateMetadataUri: (base: IBase, metadata, targetInfo: ITargetInfoProps) => {
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
}