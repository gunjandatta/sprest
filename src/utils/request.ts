import { IBase } from "../../@types/utils";
import { Base } from "./base";
import { Batch } from "./batch";
import { ContextInfo } from "../lib";
import { Executor } from "../helper/executor";
import { Helper } from "./helper";
import { Mapper, MapperV2, Mapper_Custom } from "../mapper";
import { RequestType } from "./requestType";
import { TargetInfo } from "./targetInfo";
import { XHRRequest } from "./xhrRequest";

/**
 * Request
 */
export const Request = {
    // Method to add the methods to base object
    addMethods: (base: IBase, data, resultsObjType?: string) => {
        let obj = base;
        let isCollection = data.results && data.results.length > 0;
        let methods = null;

        // Determine the metadata
        let metadata = isCollection ? data.results[0].__metadata : data.__metadata;

        // Get the object type
        let objType = metadata && metadata.type ? metadata.type : obj.targetInfo.endpoint;
        let isV2 = obj?.parent?.targetInfo?.endpoint.startsWith("_api/v2.0/") ||
            obj["@odata.context"] || objType.startsWith("@odata.context") ? true : false;
        if (isV2) {
            // See if we are overriding the object type
            if (resultsObjType) {
                // Set the object type
                objType = resultsObjType;
            } else {
                // Get the object type from the context
                let metadataType = (obj["@odata.context"] || objType);
                let values = metadataType.split("_api/v2.0/$metadata#");
                if (values.length > 1) {
                    objType = values[1];
                } else {
                    values = metadataType.split("/");
                    objType = values[values.length - 1].split("?")[0];
                }
            }

            // Get the methods for this object type
            methods = MapperV2[objType];
            console.log("[gd-sprest] v2 response detected. Type is: " + objType, methods);
        }
        // Else, get the methods from the default mapper, otherwise get it from the custom mapper
        else if ((methods = Mapper[objType + (isCollection ? ".Collection" : "")]) == null) {
            // Determine the object type
            let values = objType.split('/');
            objType = values[values.length - 1];
            values = objType.split('.');
            objType = (values[values.length - 1]).toLowerCase();
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
            methods = Mapper_Custom[objType];
        }

        // Ensure methods exist
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
                obj[methodName] = obj[methodName] || new Function("return this.executeMethod('" + methodName + "', " + JSON.stringify(methodInfo) + ", arguments);");
            }
        }
    },

    // Method to add properties to the base object
    addProperties: (base, data) => {
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
                        Request.addMethods(objCollection, objCollection);

                        // Update the data collection
                        Helper.updateDataCollection(base, objCollection["results"]);

                        // Update the expanded properties
                        Helper.updateExpandedProperties(base);

                        // Update the property
                        base[key] = objCollection;
                    }
                }
            }
        }
    },

    // Method to execute the request
    execute: (base: IBase, args: Array<any>) => {
        let reject = null;
        let resolve = null;
        let waitFl = false;

        // Parse the arguments
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];

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
                    } else {
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
            Request.waitForRequestsToComplete(base, () => {
                // Execute this request
                Request.executeRequest(base, true, (response, errorFl) => {
                    // See if there was an error
                    if (errorFl) {
                        // Set the wait flag
                        base.base.waitFlags[base.responseIndex] = true;

                        // Reject the request
                        reject ? reject(response) : null;
                    }
                    // Else, see if there is a resolve method
                    else if (resolve) {
                        // Execute the callback and see if it returns a promise
                        let returnVal = resolve(response);
                        let waitFunc = returnVal ? returnVal.done || returnVal.then : null;
                        if (waitFunc && typeof (waitFunc) === "function") {
                            // Wait for the promise to complete
                            waitFunc(() => {
                                // Set the wait flag
                                base.base.waitFlags[base.responseIndex] = true;

                                // Set the base to this object, and clear requests
                                // This will ensure requests from this object do not conflict w/ this request
                                base.base = base as any;
                                base.base.responses = [];
                                base.base.waitFlags = [];

                                // Reset the base
                                base.base = (base.parent ? base.parent.base : null) || base.base;
                            });

                            // Do nothing
                            return;
                        }

                        // Set the wait flag
                        base.base.waitFlags[base.responseIndex] = true;

                        // Set the base to this object, and clear requests
                        // This will ensure requests from this object do not conflict w/ this request
                        base.base = base as any;
                        base.base.responses = [];
                        base.base.waitFlags = [];

                        // Reset the base
                        base.base = (base.parent ? base.parent.base : null) || base.base;
                    } else {
                        // Set the wait flag
                        base.base.waitFlags[base.responseIndex] = true;
                    }
                });
            }, base.responseIndex);
        } else {
            // Execute this request
            Request.executeRequest(base, true, (response, errorFl) => {
                // See if there was an error
                if (errorFl) {
                    // Set the wait flag
                    base.base.waitFlags[base.responseIndex] = true;

                    // Reject the request
                    reject ? reject(response) : null;
                } else {
                    // Execute the resolve and see if it returns a promise
                    let returnVal = resolve ? resolve(response) : null;
                    if (returnVal && typeof (returnVal.done) === "function") {
                        // Wait for the promise to complete
                        returnVal.done(() => {
                            // Set the wait flag
                            base.base.waitFlags[base.responseIndex] = true;
                        });
                    } else {
                        // Set the wait flag
                        base.base.waitFlags[base.responseIndex] = true;
                    }
                }
            });
        }

        // See if this is a query request
        if (base.targetInfo.requestType == RequestType.OData) {
            // Return the parent for chaining purposes
            return base.parent;
        }

        // Return this object
        return base;
    },

    // Method to execute the request
    executeRequest: (base: IBase, asyncFl: boolean, callback?: (response: any, errorFl: boolean) => void) => {
        // Execution method
        let execute = (targetInfo: TargetInfo, batchIdx?: number, onComplete?: () => void) => {
            // See if this is an asynchronous request
            if (asyncFl) {
                // See if the not a batch request, and it already exists
                if (base.xhr && !isBatchRequest) {
                    // Execute the callback
                    callback ? callback(base, false) : null;
                } else {
                    // Create the request
                    base.xhr = new XHRRequest(asyncFl, targetInfo, () => {
                        // Update the response and status
                        base.response = base.xhr.response;
                        base.status = base.xhr.status;
                        let errorFl = !(base.status >= 200 && base.status < 300);

                        // See if we are returning a file buffer
                        if (base.requestType == RequestType.GetBuffer) {
                            // Execute the callback
                            callback ? callback(base.response, errorFl) : null;
                        } else {
                            // Update the data object
                            Request.updateDataObject(base, isBatchRequest, batchIdx);

                            // Ensure this isn't a batch request
                            if (!isBatchRequest) {
                                // See if this is an xml response
                                if (base.xml) {
                                    // Execute the callback
                                    callback ? callback(base, errorFl) : null;
                                } else {
                                    // Validate the data collection
                                    Request.validateDataCollectionResults(base).then(
                                        // Success
                                        () => {
                                            // Execute the callback
                                            callback ? callback(base, errorFl) : null;
                                        },
                                        // Error
                                        () => {
                                            // Execute the callback and set the error flag
                                            callback ? callback(base, true) : null;
                                        }
                                    );
                                }
                            }
                        }

                        // Call the event
                        onComplete ? onComplete() : null;
                    });
                }
            }
            // Else, see if we already executed this request
            else if (base.xhr) { return base; }
            // Else, we haven't executed this request
            else {
                // Create the request
                base.xhr = new XHRRequest(asyncFl, targetInfo);

                // Update the response and status
                base.response = base.xhr.response;
                base.status = base.xhr.status;

                // See if we are returning a file buffer
                if (base.requestType == RequestType.GetBuffer) {
                    // Return the response
                    return base.response;
                }

                // Update the base object
                Request.updateDataObject(base, isBatchRequest, batchIdx);

                // See if the base is a collection and has more results
                if (base["d"] && base["d"].__next) {
                    // Add the "next" method to get the next set of results
                    base["next"] = new Function("return this.getNextSetOfResults();");
                }

                // Call the event
                onComplete ? onComplete() : null;

                // Return the base object
                return base;
            }
        }

        // See if this is a batch request
        let isBatchRequest = base.base && base.base.batchRequests && base.base.batchRequests.length > 0;
        if (isBatchRequest) {
            let batchIdx = 0;

            // Parse the requests
            Executor(base.base.batchRequests, batchRequest => {
                // Return a promise
                return new Promise(resolve => {
                    // Execute the request
                    execute(Batch.getTargetInfo(base.targetInfo.url, batchRequest), batchIdx++, () => {
                        // Resolve the request
                        resolve(null);
                    });
                });
            }).then(() => {
                // Execute the callback if it exists
                callback ? callback(base.base.batchRequests, false) : null;

                // Clear the batch requests
                base.base.batchRequests = null;
            });
        } else {
            // Execute the request
            return execute(new TargetInfo(base.targetInfo));
        }
    },

    // Method to parse the xml
    parseXML: (xml: Element, objData: object = {}): any => {
        let results = null;

        // See if the element has children
        if (xml.hasChildNodes()) {
            // Parse the child nodes
            for (let i = 0; i < xml.childNodes.length; i++) {
                let childNode = xml.childNodes[i] as Element;
                let childPropName = childNode.nodeName.replace("d:", "");

                // See if this is a text element
                if (childPropName == "#text") {
                    // Return the value
                    return childNode.nodeValue;
                }
                // Else, see if this is a collection
                else if (childPropName == "element") {
                    // Ensure the results exist
                    results = results || [];

                    // Append the object
                    results.push(Request.parseXML(childNode));
                }
                else {
                    // Read the value properties
                    let childType = childNode.getAttribute("m:type");

                    // Get the value
                    let value = Request.parseXML(childNode);
                    if (value) {
                        // Update the value based on the type
                        switch (childType) {
                            // Boolean
                            case "Edm.Boolean":
                                value = value ? true : false;
                                break;

                            // Float
                            case "Edm.Decimal":
                            case "Edm.Double":
                                value = parseFloat(value);
                                break;

                            // Integer
                            case "Edm.Int16":
                            case "Edm.Int32":
                            case "Edm.Int64":
                                value = parseInt(value);
                                break;
                        }
                    }

                    // Parse the node
                    objData[childPropName] = value;
                }
            }
        } else {
            // Return the property value
            return xml.nodeValue;
        }

        // Return the collection if it exists, otherwise the object
        return results ? { results } : objData;
    },

    // Method to convert the input arguments into an object
    updateDataObject: (base: IBase, isBatchRequest: boolean = false, batchIdx: number = 0) => {
        // Ensure the request was successful
        if (base.status >= 200 && base.status < 300) {
            // Return if we are expecting a buffer
            if (base.requestType == RequestType.GetBuffer) { return; }

            // Parse the responses
            let batchRequestIdx = 0;
            let responses = isBatchRequest ? base.response.split("\n") : [base.response];
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
                try { data = isXML ? response.replace(/\r/g, '') : JSON.parse(response); }
                catch (ex) { continue; }

                // Set the object based on the request type
                let obj = isBatchRequest ? Object.create(base) : base;

                // Set the exists flag
                obj["existsFl"] = typeof (obj["Exists"]) === "boolean" ? obj["Exists"] : data.error == null;

                // See if this is xml
                if (isXML) {
                    let objData: any = {};

                    // Convert the xml to an object
                    let parser = new DOMParser();
                    let xmlDoc = parser.parseFromString(data, "application/xml").firstChild as Element;
                    objData[xmlDoc.nodeName.replace("d:", "")] = Request.parseXML(xmlDoc);

                    // See if this is a REST request
                    if (objData.entry && objData.entry.content && objData.entry.content["m:properties"]) {
                        // Set the object to the properties
                        objData = objData.entry.content["m:properties"];

                        // Update the metadata
                        Helper.updateMetadata(obj, objData);

                        // Update the base object's properties
                        Request.addProperties(obj, objData);

                        // Add the methods
                        Request.addMethods(obj, objData, objData["@odata.context"]);

                        // Update the data collection
                        Helper.updateDataCollection(obj, objData["results"]);

                        // Update the expanded properties
                        Helper.updateExpandedProperties(obj);
                    } else {
                        // Update the object
                        obj = { ...obj, ...objData };
                    }
                }
                // Else, see if the data properties exists
                else if (data.d) {
                    // Save a reference to it
                    obj["d"] = data.d;

                    // Update the metadata
                    Helper.updateMetadata(obj, data.d);

                    // Update the base object's properties
                    Request.addProperties(obj, data.d);

                    // Add the methods
                    Request.addMethods(obj, data.d, data["@odata.context"]);

                    // Update the data collection
                    Helper.updateDataCollection(obj, data.d.results);

                    // Update the expanded properties
                    Helper.updateExpandedProperties(obj);
                }
                // Else, see if this is a graph request
                else if (data["@odata.context"]) {
                    // Save a reference to it
                    obj["d"] = data;

                    // Update the base object's properties
                    Request.addProperties(obj, data);

                    // Add the methods
                    Request.addMethods(obj, data, data["@odata.context"]);

                    // Update the data collection
                    Helper.updateDataCollection(obj, data.value);
                }
                else {
                    // Update the base object's properties
                    Request.addProperties(obj, data);
                }

                // See if the batch request exists
                if (isBatchRequest) {
                    // Get the batch request
                    let batchRequest = base.base.batchRequests[batchIdx][batchRequestIdx++];
                    if (batchRequest == null) {
                        // Update the batch indexes
                        batchIdx++;
                        batchRequestIdx = 0;

                        // Ensure the requests exist
                        if (base.base.batchRequests[batchIdx]) {
                            // Update the batch request
                            let batch = base.base.batchRequests[batchIdx];
                            batchRequest = batch ? batch[batchRequestIdx++] : null;
                        }
                        else { break; }
                    }

                    // Ensure the batch request exists
                    if (batchRequest) {
                        // Set the response object
                        batchRequest.response = obj;
                    }
                }
            }

            // See if this was a batch request
            if (isBatchRequest) {
                // Process the callbacks
                Batch.processCallbacks(base.base.batchRequests[batchIdx]);
            }
        }
    },

    // Method to validate the data collection results
    validateDataCollectionResults: (base: IBase): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Method to validate the request
            let request = (xhr, resolve) => {
                // Validate the response
                if (xhr && xhr.status < 400 && typeof (xhr.response) === "string" && xhr.response.length > 0) {
                    // Try to convert the response and ensure the data property exists
                    let data = null;
                    try { data = JSON.parse(xhr.response); }
                    // Reject the request
                    catch { reject(); return; }

                    // Set the next item flag
                    base.nextFl = data.d && data.d.__next;

                    // See if there are more items to get
                    if (base.nextFl) {
                        // See if we are getting all items in the base request
                        if (base.getAllItemsFl) {
                            // Create the target information to query the next set of results
                            let targetInfo = Object.create(base.targetInfo);
                            targetInfo.endpoint = "";
                            targetInfo.url = data.d.__next;

                            // Create a new object
                            new XHRRequest(true, new TargetInfo(targetInfo), (xhr) => {
                                // Convert the response and ensure the data property exists
                                let data = JSON.parse(xhr.response);
                                if (data.d) {
                                    // Update the data collection
                                    Helper.updateDataCollection(base as any, data.d.results);

                                    // Update the expanded properties
                                    Helper.updateExpandedProperties(base);

                                    // Append the raw data results
                                    base["d"].results = base["d"].results.concat(data.d.results);

                                    // Validate the data collection
                                    request(xhr, resolve);
                                } else {
                                    // Resolve the promise
                                    resolve();
                                }
                            });
                        } else {
                            // Add a method to get the next set of results
                            base["next"] = new Function("return this.getNextSetOfResults();");

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
            request(base.xhr, resolve);
        });
    },

    // Method to wait for the parent requests to complete
    waitForRequestsToComplete: (base: IBase, callback: () => void, requestIdx?: number) => {
        // Ensure a callback exists and is a function
        if (typeof (callback) === "function") {
            // Loop until the requests have completed
            let intervalId = ContextInfo.window.setInterval(() => {
                let counter = 0;

                // Parse the responses to the requests
                for (let i = 0; i < base.base.responses.length; i++) {
                    let response = base.base.responses[i];

                    // See if we are waiting until a specified index
                    if (requestIdx == counter++) { break; }

                    // Return if the request hasn't completed
                    if (response.xhr == null || !response.xhr.completedFl) { return; }

                    // Ensure the wait flag is set for the previous request
                    if (counter > 0 && base.base.waitFlags[counter - 1] != true) { return; }
                }

                // Clear the interval
                ContextInfo.window.clearInterval(intervalId);

                // Execute the callback
                callback();
            }, 10);
        }
    }
}