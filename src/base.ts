/// <reference path="base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Library
    // The base library containing the method information for each object
    /*********************************************************************************************************************************/
    export var Library:any = {};

    /*********************************************************************************************************************************/
    // Base
    // This is the base class for all objects.
    /*********************************************************************************************************************************/
    export class Base implements IBase {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo:ITargetInfoType, executeRequestFl?:boolean) {
            // Default the properties
            this.targetInfo = targetInfo || {};

            // Default the flag, if it's not defined
            this.executeRequestFl = typeof(executeRequestFl) === "boolean" ? executeRequestFl : true;
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // Flag to determine if the request should be asynchronous
        public get asyncFl():boolean { return this.request ? this.request.asyncFl : false; }
        public set asyncFl(value) { this.targetInfo.asyncFl = value; }

        // The parent
        public get parent():Base { return this.oParent; }

        // Method to return the xml http request's response
        public get response():any { return this.request ? this.request.response : null; }

        /*********************************************************************************************************************************/
        // Public Methods
        /*********************************************************************************************************************************/

        // Method to execute a child request
        public execute() {
            // See if this is an asynchronous request
            if(this.targetInfo.asyncFl || this.targetInfo.bufferFl) {
                // Create a promise
                this.promise = new Promise(this.targetInfo.callback);

                // Create the request
                this.request = new Request(new TargetInfo(this.targetInfo), this.updateDataObject);
            }
            else {
                // Create the request
                this.request = new Request(new TargetInfo(this.targetInfo));

                // Update the data object
                this.updateDataObject(this.request.response);
            }
        }

        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        // Flag to determine if we should execute the request on creation
        protected executeRequestFl:boolean;

        // Flag to default the url to the current web url, site otherwise
        protected defaultToWebFl:boolean;
        
        // The parent
        private oParent:Base;

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
        private addMethods(obj:any, data:any) {
            // Determine the object type
            let type = (data.__metadata && data.__metadata.type ? data.__metadata.type : this.targetInfo.endpoint).split('.');
            type = (type[type.length - 1]).toLowerCase();

            // Get the methods for this object
            var methods = Library[type];
            if(methods) {
                debugger;
                // Parse the request types
                for(let requestType in methods) {
                    // Determine the function type to generate
                    switch(requestType) {
                        // Custom function
                        case RequestType.Custom.toString():
                            // Parse the custom methods
                            for(let i=0; i<methods[requestType].length; i++) {
                                let method = methods[requestType][i];

                                // Add the custom method to this object
                                obj[method.name] = method["function"];
                            }
                        break;
                        default:
                            // Parse the methods
                            for(let i=0; i<methods[requestType].length; i++) {
                                let methodName = methods[requestType][i];

                                // Add the custom method to this object
                                obj[methodName] = new Function("return true;");
                            }
                        break;
                    }
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

        // Method to return a collection
        private getCollection(method:string, args?:any) {
            // Copy the target information
            let targetInfo = Object.create(this.targetInfo);

            // Append the method to the endpoint
            targetInfo.endpoint += "/" + method;

            // Update the callback
            targetInfo.callback = args && typeof(args[0]) === "function" ? args[0] : null;

            // Create a new object
            let obj = new Base(targetInfo, true);

            // Set the parent
            obj.oParent = this;

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
                    // Apply the properties to the object
                    this.addProperties(this, results[0]);
                } else {
                    // Apply the methods to the results asynchronously
                    setTimeout(() => {
                        // Parse the results
                        for(let i=0; i<results.length; i++) {
                            // Add the methods
                            this.addMethods(results[i], results[i])
                        }
                    }, 10);
                }
            }            
        }

        // Method to convert the input arguments into an object
        protected updateDataObject(...args) {
            let response = args && args.length > 0 ? args[0] : "{}";

            // Convert the response
            let data = JSON.parse(response);
            this["existsFl"] = data.error == null;

            // See if the data properties exists
            if(data.d) {
                // Save a reference to it
                this["d"] = data.d;

                // Update this object's properties
                this.addProperties(this, data.d);

                // Add the methods
                this.addMethods(this, data.d);

                // Update the data collection
                this.updateDataCollection(data.d.results);
            }

            // Resolve the promise
            this.promise ? this.promise.resolve() : null;
        }
    }
}
    