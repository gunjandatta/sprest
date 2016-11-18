module $REST {
    /*********************************************************************************************************************************/
    // Global Variables
    /*********************************************************************************************************************************/
    export var DefaultRequestToHostWebFl:boolean = false;
    export var Library:any = {};
    var SP:any;

    /*********************************************************************************************************************************/
    // Base
    // This is the base class for all objects.
    /*********************************************************************************************************************************/
    export class Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo:Settings.TargetInfoSettings) {
            // Default the properties
            this.targetInfo = targetInfo || {};
            this.requestType = 0;
            this.waitFlags = [];
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // Flag to determine if the requested object exists
        public existsFl:boolean;
        
        // The parent
        public parent:Base;

        // The request type
        public requestType:Types.RequestType;

        // Method to return the xml http request's response
        public get response():any { return this.request ? this.request.response : null; }

        /*********************************************************************************************************************************/
        // Public Methods
        /*********************************************************************************************************************************/

        // Method to wait for the requests to complete
        public done(callback:(...args) => any) {
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
        public execute(...args) {
            let callback = null;
            let waitFl = false;

            // Set the callback and wait flag
            switch(args.length) {
                case 1:
                    callback = typeof(args[0]) === "boolean" ? callback : args[0];
                    waitFl = typeof(args[0]) === "boolean" ? args[0] : waitFl;
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
            if(waitFl) {
                // Wait for the responses to execute
                this.waitForRequestsToComplete(() => {
                    // Execute this request
                    this.executeRequest(true, () => {
                        // See if there is a callback
                        if(callback) {
                            // Set the base to this object, and clear requests
                            // This will ensure requests from this object do not conflict w/ this request
                            this.base = this;
                            this.base.responses = [];

                            // Execute the callback and see if it returns a promise
                            let returnVal = callback(this);
                            if(returnVal && typeof(returnVal.done) === "function") {
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
                    // Set the wait flag
                    this.base.waitFlags[this.responseIndex] = true;

                    // Execute the callback
                    callback ? callback(this) : null;
                });
            }

            // Return the base object
            return this.base;
        }

        // Method to execute the request synchronously.
        public executeAndWait() { return this.executeRequest(false); }

        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        // The base object
        private base:Base;

        // Flag to default the url to the current web url, site otherwise
        protected defaultToWebFl:boolean;

        // The index of this object in the responses array
        private responseIndex:number;

        // The promise
        private promise:Utils.Promise;

        // The request
        protected request:Utils.Request;

        // The responses
        protected responses:Array<Base>;

        // The base settings
        protected targetInfo:Settings.TargetInfoSettings;

        // The wait flags
        private waitFlags:Array<boolean>;

        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/

        // Method to add the methods to this object
        protected addMethods(obj:any, data:any) {
            let isCollection = data.results && data.results.length > 0;

            // Determine the metadata
            let metadata = isCollection ? data.results[0].__metadata : data.__metadata;

            // Determine the object type
            let objType = metadata && metadata.type ? metadata.type : this.targetInfo.endpoint;
            objType = objType.split('/');
            objType = (objType[objType.length - 1]);
            objType = objType.split('.');
            objType = (objType[objType.length - 1]).toLowerCase();
            objType += isCollection && data.results.length > 1 ? "s" : "";

            // See if this is a field
            if((/^field/.test(objType) || /field$/.test(objType)) && objType != "fieldlinks" && objType != "fields") {
                // Update the type
                objType = "field" + (isCollection ? "s" : "");
            }
            // Else, see if this is an item
            else if(/item$/.test(objType)) {
                // Update the type
                objType = "listitem";
            }
            // Else, see if this is an item collection
            else if(/items$/.test(objType)) {
                // Update the type
                objType = "items";
            }

            // Get the methods for this object
            var methods = Library[objType];
            if(methods) {
                // Parse the methods
                for(let methodName in methods) {
                    // Get the method information
                    let methodInfo = methods[methodName] ? methods[methodName] : {};

                    // See if this is the "Properties" definition for the object
                    if(methodName == "properties") {
                        // Parse the properties
                        for(let property of methodInfo) {
                            let propInfo = property.split("|");

                            // Get the metadata type
                            let propName = propInfo[0];
                            let propType = propInfo.length > 1 ? propInfo[1] : null;
                            let subPropName = propInfo.length > 2 ? propInfo[2] : null;
                            let subPropType = propInfo.length > 3 ? propInfo[3] : null;

                            // See if the property is null or is a collection
                            if(obj[propName] == null || (obj[propName].__deferred && obj[propName].__deferred.uri)) {
                                // See if this property has a sub-property defined for it
                                if(propInfo.length == 4) {
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
                    if(typeof(methodInfo.metadataType) === "function") {
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
        private addProperties(obj:any, data:any) {
            // Parse the data properties
            for(var key in data) {
                let value = data[key];

                // Skip properties
                if(key == "__metadata" || key == "results") { continue; }

                // See if this is a collection property
                if(value && value.__deferred && value.__deferred.uri) {
                    // Generate a method for this property
                    obj["get_" + key] = obj["get_" + key] ? obj["get_" + key] : new Function("return this.getCollection('" + key + "', arguments);");
                }
                else {
                    // Append the property to this object
                    obj[key] = value;
                }
            }
        }

        // Method to execute a method
        protected executeMethod(methodName:string, methodConfig:Settings.MethodInfoSettings, args?:any) {
            let targetInfo:Settings.TargetInfoSettings = null;

            // See if the metadata is defined for this object
            let metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
            if(metadata && metadata.uri) {
                // Create the target information and use the url defined for this object
                targetInfo = {
                    url: metadata.uri
                };

                // See if we are inheriting the metadata type
                if(methodConfig.inheritMetadataType) {
                    // Copy the metadata type
                    methodConfig.metadataType = metadata.type;
                }

                // Update the metadata uri
                this.base.updateMetadataUri(metadata, targetInfo);
            }
            else {
                // Copy the target information
                targetInfo = Object.create(this.targetInfo);
            }

            // Get the method information
            var methodInfo = new Utils.MethodInfo(methodName, methodConfig, args);

            // Update the target information
            targetInfo.bufferFl = methodConfig.requestType == Types.RequestType.GetBuffer;
            targetInfo.data = methodInfo.body;
            targetInfo.method = methodInfo.requestMethod;

            // See if we are replacing the endpoint
            if(methodInfo.replaceEndpointFl) {
                // Replace the endpoint
                targetInfo.endpoint = methodInfo.url;
            }
            // Else, ensure the method url exists
            else if(methodInfo.url && methodInfo.url.length > 0) {
                // Append the method to the endpoint
                targetInfo.endpoint = (targetInfo.endpoint ? targetInfo.endpoint + "/" : "") + methodInfo.url;
            }

            // Create a new object
            let obj = new Base(targetInfo);

            // Set the properties
            obj.base = this.base ? this.base : this;
            obj.parent = this;
            obj.requestType = methodConfig.requestType;

            // Add the methods
            methodConfig.returnType ? obj.addMethods(obj, { __metadata: { type: methodConfig.returnType } }) : null;

            // Return the object
            return obj;
        }

        // Method to execute the request
        protected executeRequest(asyncFl: boolean, callback?:(...args) => void) {
            // See if this is an asynchronous request
            if(asyncFl) {
                // See if the request already exists
                if(this.request) {
                    // Execute the callback
                    callback ? callback(this) : null;
                } else {
                    // Create the request
                    this.request = new Utils.Request(asyncFl, new Utils.TargetInfo(this.targetInfo), () => {
                        // Update this data object
                        this.updateDataObject();

                        // Execute the callback
                        callback ? callback(this) : null;
                    });
                }
            }
            // Else, see if we already executed this response
            else if(this.request) { return this; }
            // Else, we haven't executed this request
            else {
                // Create the request
                this.request = new Utils.Request(asyncFl, new Utils.TargetInfo(this.targetInfo));

                // Update this data object and return it
                return this.updateDataObject() || this;
            }
        }

        // Method to return a collection
        private getCollection(method:string, args?:any) {
            // Copy the target information
            let targetInfo = Object.create(this.targetInfo);

            // See if the metadata is defined for this object
            let metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
            if(metadata && metadata.uri) {
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
            targetInfo.callback = args && typeof(args[0]) === "function" ? args[0] : null;

            // Create a new object
            let obj = new Base(targetInfo);

            // Set the properties
            obj.base = this.base ? this.base : this;
            obj.parent = this;

            // Return the object
            return obj;
        }

        // Method to return a property of this object
        protected getProperty(propertyName:string, requestType?:string) {
            // Copy the target information
            let targetInfo = Object.create(this.targetInfo);

            // See if the metadata is defined for this object
            let metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
            if(metadata && metadata.uri) {
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

        // Method to update a collection object
        private updateDataCollection(results:any) {
            // Ensure this is a collection
            if(results) {
                // Save the property
                this["results"] = results;

                // Update the flag
                this["existsFl"] = results.length > 0;

                // See if only one object exists
                if(results.length == 1) {
                    // Update the metadata
                    this.updateMetadata(results[0]);

                    // Apply the properties to the object
                    this.addProperties(this, results[0]);

                    // Add the methods
                    this.addMethods(results[0], results[0])

                    // Add the references
                    results[0]["base"] = this.base;
                    results[0]["executeMethod"] = this.executeMethod;
                    results[0]["parent"] = this;

                    // Copy the metadata
                    this["d"].__metadata = results[0].__metadata;
                } else {
                    // Apply the methods to the results asynchronously
                    setTimeout(() => {
                        let results = this["results"];
                        
                        // Parse the results
                        for(let result of results) {
                            // Add the references
                            result["base"] = this.base;
                            result["executeMethod"] = this.executeMethod;
                            result["parent"] = this;

                            // Update the metadata
                            this.updateMetadata(result);

                            // Add the methods
                            this.addMethods(result, result);
                        }
                    }, 10);
                }
            }            
        }

        // Method to convert the input arguments into an object
        protected updateDataObject() {
            // Ensure the request doesn't have an error code
            if(this.request.request.status < 400) {
                // Return if we are expecting a buffer
                if(this.requestType == Types.RequestType.GetBuffer) {
                    // Set the exists flag
                    this["existsFl"] = this.request.response != null;
                }
                else {
                    // Get the response
                    let response = this.request.response;
                    response = response === "" ? "{}" : response;

                    // Convert the response
                    let data = JSON.parse(response);
                    this["existsFl"] = typeof(this["Exists"]) === "boolean" ? this["Exists"] : data.error == null;

                    // See if the data properties exists
                    if(data.d) {
                        // Save a reference to it
                        this["d"] = data.d;

                        // Update the metadata
                        this.updateMetadata(data.d);

                        // Update this object's properties
                        this.addProperties(this, data.d);

                        // Add the methods
                        this.addMethods(this, data.d);

                        // Update the data collection
                        this.updateDataCollection(data.d.results);
                    }
                }
            }
        }

        // Method to update the metadata
        private updateMetadata(data:any) {
            // Ensure this is the app web
            if(!window["_spPageContextInfo"].isAppWeb) { return; }

            // Get the url information
            let hostUrl = window["_spPageContextInfo"].webAbsoluteUrl.toLowerCase();
            let requestUrl = data && data.__metadata && data.__metadata.uri ? data.__metadata.uri.toLowerCase() : null;
            let targetUrl = this.targetInfo && this.targetInfo.url ? this.targetInfo.url.toLowerCase() : null;

            // Ensure the urls exist
            if(hostUrl == null || requestUrl == null || targetUrl == null) { return; }

            // See if we need to make an update
            if(targetUrl.indexOf(hostUrl) == 0) { return; }

            // Update the metadata uri
            data.__metadata.uri = requestUrl.replace(hostUrl, targetUrl);
        }

        // Method to update the metadata uri
        private updateMetadataUri(metadata:any, targetInfo:Settings.TargetInfoSettings) {
            // See if this is a field
            if(/^SP.Field/.test(metadata.type) || /^SP\..*Field$/.test(metadata.type)) {
                // Fix the uri reference
                targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
            }
            // Else, see if this is an event receiver
            else if(/SP.EventReceiverDefinition/.test(metadata.type)) {
                // Fix the uri reference
                targetInfo.url = targetInfo.url.replace(/\/EventReceiver\//, "/EventReceivers/");
            }
        }

        // Method to wait for the parent requests to complete
        private waitForRequestsToComplete(callback:() => void, requestIdx?:number) {
            // Loop until the requests have completed
            let intervalId = window.setInterval(() => {
                let counter = 0;

                // Parse the responses to the requests
                for(let response of this.base.responses) {
                    // See if we are waiting until a specified index
                    if(requestIdx == counter++) { break; }

                    // Return if the request hasn't completed
                    if(response.request == null || !response.request.completedFl) { return; }
                }

                // Ensure this isn't the first request
                // If so, then ensure the previous request has completed
                if(this.responseIndex == 0 || this.base.waitFlags[this.responseIndex - 1]) {
                    // Clear the interval
                    window.clearInterval(intervalId);

                    // Execute the callback
                    callback();
                }
            }, 10);
        }
    }
}
