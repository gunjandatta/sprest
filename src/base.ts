/// <reference path="base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Global Variables
    /*********************************************************************************************************************************/
    export var DefaultRequestToHostWebFl:boolean = false;
    export var ExecuteOnCreationFl:boolean = true;
    export var Library:any = {};
    var SP:any;

    /*********************************************************************************************************************************/
    // Base
    // This is the base class for all objects.
    /*********************************************************************************************************************************/
    export class Base implements IBase {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(params:IBaseType) {
            // Default the properties
            this.targetInfo = params.settings;
            this.requestType = 0;

            // Default the properties
            this.executeRequestFl = typeof(params.executeRequestFl) === "boolean" ? params.executeRequestFl : ExecuteOnCreationFl;
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // Flag to determine if the request should be asynchronous
        public get asyncFl():boolean { return this.request ? this.request.asyncFl : false; }
        public set asyncFl(value) { this.targetInfo.asyncFl = value; }
        
        // The parent
        public parent:Base;

        // The request type
        public requestType:RequestType;

        // Method to return the xml http request's response
        public get response():any { return this.request ? this.request.response : null; }

        /*********************************************************************************************************************************/
        // Public Methods
        /*********************************************************************************************************************************/

        // Method to execute after the asynchronous request completes
        public done(callback:() => void) {
            // Execute the promise callback, if it exists
            this.promise ? this.promise.done(callback) : null;
        }

        // Method to execute a child request
        public execute() {
            // See if this is an asynchronous request
            if(this.targetInfo.asyncFl) {
                // Create a promise
                this.promise = new Promise(this.targetInfo.callback);

                // Create the request
                this.request = new Request(new TargetInfo(this.targetInfo), () => {
                    // Update the data object
                    this.updateDataObject();
                });
            }
            else {
                // Create the request
                this.request = new Request(new TargetInfo(this.targetInfo));

                // Update the data object
                this.updateDataObject();
            }
        }

        // Method to get the input parameters for an asynchronous request
        public static getAsyncInputParmeters(...args):IBaseType {
            // Get the input parameters
            let params = Base.getInputParmeters.apply(null, args);

            // Set the asynchronous flag
            params.settings.asyncFl = true;

            // Return the parameters
            return params;
        }

        // Method to get the input parameters
        public static getInputParmeters(...args):IBaseType {
            let settings = null;
            let params:IBaseType = {
                executeRequestFl: null,
                settings: null
            };

            // Ensure arguments exist
            if(args && args.length > 0) {
                // Determine if this is an IBaseType
                if(args.length == 1 && args[0].hasOwnProperty("executeRequestFl") && args[0].hasOwnProperty("settings")) {
                    // Return it
                    return args[0];
                }

                // See if the first parameter is the flag
                if(typeof(args[0]) === "boolean") {
                    // Set the parameters
                    params.executeRequestFl = args[0];
                    settings = args[1];
                }
                else {
                    // Set the parameters
                    params.executeRequestFl = args[1];
                    settings = args[0];
                }
            }

            // See if settings exist
            if(settings) {
                params.settings = {};

                // See if it's a callback
                if(typeof(settings) === "function") {
                    // Set the callback
                    params.settings.callback = settings;
                }
                else {
                    // Set the settings
                    params.settings = settings;
                }
            }
            else {
                // Create them
                params.settings = {};
            }

            // Return the parameters
            return params;
        }

        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        // Flag to determine if we should execute the request on creation
        protected executeRequestFl:boolean;

        // Flag to default the url to the current web url, site otherwise
        protected defaultToWebFl:boolean;

        // The promise
        private promise:Promise;

        // The request
        protected request:Request;

        // The base settings
        protected targetInfo:ITargetInfoType;

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
            if(/^field/.test(objType) && objType != "fields") {
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
                    // Add the method to the object
                    obj[methodName] = new Function("return this.executeMethod('" + methodName + "', " + JSON.stringify(methods[methodName] ? methods[methodName] : {}) + ", arguments);");
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
                    obj["get_" + key] = new Function("return this.getCollection('" + key + "', arguments);");
                }
                else {
                    // Append the property to this object
                    obj[key] = value;
                }
            }
        }

        // Method to execute a method
        private executeMethod(methodName:string, methodConfig:IMethodInfoType, args:any) {
            let targetInfo:ITargetInfoType = null;

            // See if the metadata is defined for this object
            let metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
            if(metadata && metadata.uri) {
                // Create the target information and use the url defined for this object
                targetInfo = {
                    url: metadata.uri
                };

                // See if this is a field
                if(/^SP.Field/.test(metadata.type)) {
                    // Fix the uri reference
                    targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
                }

                // See if we are inheriting the metadata type
                if(methodConfig.inheritMetadataType) {
                    // Copy the metadata type
                    methodConfig.metadataType = metadata.type;
                }
            }
            else {
                // Copy the target information
                targetInfo = Object.create(this.targetInfo);
            }

            // Inherit the asynchronous flag
            targetInfo.asyncFl = this.targetInfo ? this.targetInfo.asyncFl : this.asyncFl;

            // Get the method information
            var methodInfo = new MethodInfo(methodName, methodConfig, args);

            // Update the target information
            targetInfo.bufferFl = methodConfig.requestType == RequestType.GetBuffer;
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
            let obj = new Base({ settings: targetInfo, executeRequestFl: true });

            // Set the and parent and request type
            obj.parent = this;
            obj.requestType = methodConfig.requestType;

            // Execute the request
            obj.execute();

            // Return the object
            return obj;
        }

        // Method to return a collection
        private getCollection(method:string, args?:any) {
            // Copy the target information
            let targetInfo = Object.create(this.targetInfo);

            // Append the method to the endpoint
            targetInfo.endpoint += "/" + method;

            // Update the callback
            targetInfo.callback = args && typeof(args[0]) === "function" ? args[0] : null;

            // Create a new object
            let obj = new Base({ settings: targetInfo, executeRequestFl: true });

            // Set the parent
            obj.parent = this;

            // Execute the request
            obj.execute();

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

                    // Copy the metadata
                    this["d"].__metadata = results[0].__metadata;
                } else {
                    // Apply the methods to the results asynchronously
                    setTimeout(() => {
                        // Parse the results
                        for(let i=0; i<results.length; i++) {
                            // Add the execute method and parent reference
                            results[i]["asyncFl"] = this.asyncFl;
                            results[i]["executeMethod"] = this.executeMethod;
                            results[i]["parent"] = this;

                            // Update the metadata
                            this.updateMetadata(results[i]);

                            // Add the methods
                            this.addMethods(results[i], results[i])
                        }
                    }, 10);
                }
            }            
        }

        // Method to convert the input arguments into an object
        protected updateDataObject() {
            // Return if we are expecting a buffer
            if(this.requestType == RequestType.GetBuffer) {
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

            // Resolve the promise
            this.promise ? this.promise.resolve(this) : null;
        }

        // Method to update the metadata
        private updateMetadata(data:any) {
            let hostUrl = window["_spPageContextInfo"].webAbsoluteUrl.toLowerCase();
            let requestUrl = data && data.__metadata && data.__metadata.uri ? data.__metadata.uri.toLowerCase() : null;
            let targetUrl = this.targetInfo && this.targetInfo.url ? this.targetInfo.url.toLowerCase() : null;
            
            // Ensure the urls exist
            if(hostUrl == null || requestUrl == null || targetUrl == null) { return; }

            // Update the metadata uri
            data.__metadata.uri = requestUrl.replace(hostUrl, targetUrl);
        }
    }
}
