/// <reference path="methodInfo.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Method Information
    // This class will create the method information for the request.
    // name - The method name.
    // requestType - The request type.
    // argNames - The method input parameter names.
    // argValues - The data passed with the method.
    /*********************************************************************************************************************************/
    export class MethodInfo implements IMethodInfo {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(methodName:string, methodInfo:IMethodInfoType, args:any) {
            // Default the properties
            this.methodInfo = methodInfo;
            this.methodInfo.argValues = args;
            this.methodInfo.name = this.methodInfo.name ? this.methodInfo.name : methodName;

            // Generate the parameters
            this.generateParams();

            // Generate the url
            this.methodUrl = this.generateUrl();
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // The data passed through the body of the request
        public get body():string { return this.methodData; }

        // Flag to determine if this method replaces the endpoint
        public get replaceEndpointFl():boolean { return this.methodInfo.replaceEndpointFl ? true : false; }

        // The request method
        public get requestMethod():string {
            // Determine the request method, based on the request type
            switch(this.methodInfo.requestType) {
                case RequestType.Delete:
                case RequestType.Post:
                case RequestType.PostWithArgs:
                case RequestType.PostWithArgsAsQS:
                case RequestType.PostWithArgsInBody:
                case RequestType.PostWithArgsValueOnly:
                    return "POST";
                default:
                    return "GET";
            }
        }

        // The url of the method and parameters
        public get url():string { return this.methodUrl; }

        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        private get passDataInBody():boolean { return this.methodInfo.requestType == RequestType.GetWithArgsInBody || this.methodInfo.requestType == RequestType.PostWithArgsInBody; }
        private get passDataInQS():boolean { return this.methodInfo.requestType == RequestType.GetWithArgsAsQS || this.methodInfo.requestType == RequestType.PostWithArgsAsQS; }
        private methodData:any;
        private methodInfo:IMethodInfoType;
        private methodParams:any;
        private methodUrl:string;
 
        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/

        // Method to generate the method input parameters
        private generateParams():string {
            let params = {};

            // Ensure values exist
            if(this.methodInfo.argValues == null) { return; }

            // See if the argument names exist
            if(this.methodInfo.argNames) {
                // Parse the argument names
                for(let i=0; i<this.methodInfo.argNames.length && i<this.methodInfo.argValues.length; i++) {
                    let name = this.methodInfo.argNames[i];
                    let value = this.methodInfo.argValues[i];

                    // Copy the parameter value
                    switch(typeof(this.methodInfo.argValues[i])) {
                        case "boolean":
                            params[name] = this.methodInfo.argValues[i] ? "true" : "false";
                        break;
                        case "number":
                            params[name] = this.methodInfo.argValues[i];
                        break;
                        default:
                            params[name] = this.passDataInBody || this.passDataInQS ? value : "'" + value + "'";
                        break;
                    }
                }
            }

            // See if the method has parameters
            let isEmpty = true;
            for(let k in params) { isEmpty = false; break; }
            this.methodParams = isEmpty ? null : params;

            // See if method parameters exist
            if(this.methodParams) {
                // See if a template is defined for the method data
                if(this.methodInfo.data) {
                    // Set the params to the template
                    this.methodParams = JSON.parse(
                        this.methodInfo.data.replace("{{data}}", JSON.stringify(this.methodParams))
                    );
                }            
                // Else, see if the metadata type exists
                else if(this.methodInfo.metadataType) {
                    // See if parameters exist
                    if(this.methodInfo.argNames) {
                        // Append the metadata to the first parameter
                        params[this.methodInfo.argNames[0]]["__metadata"] = { "type": this.methodInfo.metadataType };
                    }
                    else {
                        // Append the metadata to the parameters
                        params["__metadata"] = { "type": this.methodInfo.metadataType };
                    }
                }
            }

            // See if the argument values exist
            if(this.methodInfo.argValues && (this.methodInfo.argNames == null || this.methodInfo.argValues.length > this.methodInfo.argNames.length)) {
                // Set the method data to be passed in the body of the request
                this.methodData = this.methodInfo.argValues[(this.methodInfo.argNames ? this.methodInfo.argNames.length : -1) + 1];
            }
        }

        // Method to generate the method and parameters as a url
        private generateUrl():string {
            let url = this.methodInfo.name;

            // See if we are passing the data in the body
            if(this.passDataInBody) {
                let data = this.methodData || this.methodParams;

                // Stringify the data to be passed in the body
                this.methodData = JSON.stringify(data);
            }

            // See if we are passing the data in the query string
            if(this.passDataInQS) {
                let data = this.methodParams || this.methodData;

                // Append the parameters in the query string
                url += "(@v)?@v=" + (typeof(data) === "string" ? "'" + encodeURIComponent(data) + "'" : JSON.stringify(data));
            }

            // See if we are filtering data
            if(this.methodInfo.requestType == RequestType.Filter) {
                // Parse the arguments
                for(let key in this.methodParams) {
                    // Replace the argument in the url
                    url = url.replace("[[" + key + "]]", encodeURIComponent(this.methodParams[key]));
                }
            }
            // Else, see if we are not passing the data in the body or query string
            else if(!this.passDataInBody && !this.passDataInQS) {
                let params = "";

                // Ensure data exists
                let data = this.methodParams || this.methodData;
                if(data) {
                    // Ensure the data is an object
                    data = data && typeof(data) === "object" ? data : { value: data };

                    // Parse the parameters
                    for(let name in data) {
                        switch(this.methodInfo.requestType) {
                            // Append the value only
                            case RequestType.GetWithArgsValueOnly:
                            case RequestType.PostWithArgsValueOnly:
                                params += data[name] + ", ";
                            break;
                            // Append the parameter and value
                            default:
                                params += name + "=" + data[name] + ", ";
                            break;
                        }
                    }
                }

                // Set the url
                url += params.length > 0 ? "(" + params.replace(/, $/, "") + ")" : "";
            }

            // Return the url
            return url;
        }
    }
}