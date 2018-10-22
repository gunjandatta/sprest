import { ContextInfo } from "../lib";
import { Mapper } from "../mapper";
import { IBaseHelper } from "./types/baseHelper";
import { Base, RequestType } from ".";

/**
 * Request Helper
 */
export class BaseHelper implements IBaseHelper {
    base: Base;
    requestType: number;
    response: string;
    status: number;
    xml: string | XMLDocument;

    // Method to add the base references
    addBaseReferences(base: Base, obj: any) {
        // Add the base references
        obj["addMethods"] = base.addMethods;
        obj["base"] = base.base;
        obj["done"] = base.done;
        obj["execute"] = base.execute;
        obj["executeAndWait"] = base.executeAndWait
        obj["executeMethod"] = base.executeMethod;
        obj["existsFl"] = true;
        obj["getProperty"] = base.getProperty;
        obj["parent"] = base;
        obj["targetInfo"] = base.targetInfo;
        obj["updateMetadataUri"] = base.updateMetadataUri;
        obj["waitForRequestsToComplete"] = base.waitForRequestsToComplete;
    }

    // Method to add the methods to base object
    addMethods(base: Base, data, graphType?: string) {
        let obj = base;
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
        var methods = Mapper[objType];
        if (methods) {
            // Parse the methods
            for (let methodName in methods) {
                // Get the method information
                let methodInfo = methods[methodName] ? methods[methodName] : {};

                // See if the base is the "Properties" definition for the object
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
                            // See if the base property has a sub-property defined for it
                            if (propInfo.length == 4) {
                                // Update the ' char in the property name
                                subPropName = subPropName.replace(/'/g, "\\'");

                                // Add the property
                                obj[propName] = new Function("name",
                                    "name = name ? '" + propName + subPropName + "'.replace(/\\[Name\\]/g, name.toString().replace(/\'/g, \"''\")) : null;" +
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
    }

    // Method to add properties to the base object
    addProperties(base, data) {
        // Parse the data properties
        for (var key in data) {
            let value = data[key];

            // Skip properties
            if (key == "__metadata" || key == "results") { continue; }

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
                        let objCollection = new Base(base.targetInfo);
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
    }

    // Method to update a collection object
    updateDataCollection(obj, results) {
        // Ensure the base is a collection
        if (results) {
            // Save the results
            obj["results"] = obj["results"] ? obj["results"].concat(results) : results;

            // See if only one object exists
            if (obj["results"].length > 0) {
                let results = obj["results"];

                // Parse the results
                for (let result of results) {
                    // Add the base references
                    this.addBaseReferences(obj, result);

                    // Update the metadata
                    this.updateMetadata(obj, result);

                    // Add the methods
                    this.addMethods(result, result);
                }
            }
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

                // Try to convert the response
                try { data = isXML ? response : JSON.parse(response); }
                catch (ex) { continue; }

                // Set the object based on the request type
                let obj = isBatchRequest ? Object.create(this) : this;

                // Set the exists flag
                obj["existsFl"] = typeof (obj["Exists"]) === "boolean" ? obj["Exists"] : data.error == null;

                // See if this is xml
                if (isXML) {
                    // Create an XML object
                    let parser = DOMParser ? new DOMParser() : null;

                    // Set the xml
                    this.xml = parser ? parser.parseFromString(data, "text/xml") : data;
                }
                // Else, see if the data properties exists
                else if (data.d) {
                    // Save a reference to it
                    obj["d"] = data.d;

                    // Update the metadata
                    this.updateMetadata(obj, data.d);

                    // Update the base object's properties
                    this.addProperties(obj, data.d);

                    // Add the methods
                    this.addMethods(obj, data.d, data["@odata.context"]);

                    // Update the data collection
                    this.updateDataCollection(obj, data.d.results);
                } else {
                    // Update the base object's properties
                    this.addProperties(obj, data);
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
            if (isBatchRequest) { this.base.batchRequests = null; }
        }
    }

    // Method to update the metadata
    updateMetadata(base, data) {
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
    }
}