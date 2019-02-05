import { IMethodInfo } from "gd-sprest-def";
import { OData, RequestType } from ".";

/*********************************************************************************************************************************/
// Method Information
// This class will create the method information for the request.
/*********************************************************************************************************************************/
export class MethodInfo implements IMethodInfo {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(methodName: string, methodInfo: IMethodInfo, args: any) {
        // Default the properties
        this.methodInfo = methodInfo;
        this.methodInfo.argValues = args;
        this.methodInfo.name = typeof (this.methodInfo.name) === "string" ? this.methodInfo.name : methodName;

        // Generate the parameters
        this.generateParams();

        // Generate the url
        this.methodUrl = this.generateUrl();
    }

    /*********************************************************************************************************************************/
    // Public Properties
    /*********************************************************************************************************************************/

    // The data passed through the body of the request
    get body(): string { return this.methodData; }

    // Flag to determine if we are getting all items
    get getAllItemsFl(): boolean { return this.methodInfo.getAllItemsFl; }

    // Flag to determine if this method replaces the endpoint
    get replaceEndpointFl(): boolean { return this.methodInfo.replaceEndpointFl ? true : false; }

    // The request method
    get requestMethod(): string {
        // Return the request method if it exists
        if (typeof (this.methodInfo.requestMethod) === "string") { return this.methodInfo.requestMethod; }

        // Determine the request method, based on the request type
        switch (this.methodInfo.requestType) {
            case RequestType.Delete:
            case RequestType.Post:
            case RequestType.PostBodyNoArgs:
            case RequestType.PostWithArgs:
            case RequestType.PostWithArgsAndData:
            case RequestType.PostWithArgsInBody:
            case RequestType.PostWithArgsInQS:
            case RequestType.PostWithArgsInQSAsVar:
            case RequestType.PostWithArgsValueOnly:
            case RequestType.PostReplace:
                return "POST";
            default:
                return "GET";
        }
    }

    // The url of the method and parameters
    get url(): string { return this.methodUrl; }

    /*********************************************************************************************************************************/
    // Private Variables
    /*********************************************************************************************************************************/

    private get passDataInBody(): boolean { return this.methodInfo.requestType == RequestType.GetWithArgsInBody || this.methodInfo.requestType == RequestType.PostBodyNoArgs || this.methodInfo.requestType == RequestType.PostWithArgsInBody; }
    private get passDataInQS(): boolean { return this.methodInfo.requestType == RequestType.GetWithArgsInQS || this.methodInfo.requestType == RequestType.PostWithArgsInQS; }
    private get passDataInQSAsVar(): boolean { return this.methodInfo.requestType == RequestType.GetWithArgsInQSAsVar || this.methodInfo.requestType == RequestType.PostWithArgsInQSAsVar; }
    private get isTemplate(): boolean { return this.methodInfo.data ? true : false; }
    private get replace(): boolean { return this.methodInfo.requestType == RequestType.GetReplace || this.methodInfo.requestType == RequestType.PostReplace; }
    private methodData: any;
    private methodInfo: IMethodInfo;
    private methodParams: any;
    private methodUrl: string;

    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/

    // Method to generate the method input parameters
    private generateParams(): string {
        let params = {};

        // Ensure values exist
        if (this.methodInfo.argValues == null) { return; }

        // See if the argument names exist
        if (this.methodInfo.argNames) {
            // Parse the argument names
            for (let i = 0; i < this.methodInfo.argNames.length - (this.methodInfo.requestType == RequestType.PostWithArgsAndData ? 1 : 0) && i < this.methodInfo.argValues.length; i++) {
                let name = this.methodInfo.argNames[i];
                let value = this.methodInfo.argValues[i];

                // Copy the parameter value
                switch (typeof (this.methodInfo.argValues[i])) {
                    case "boolean":
                        params[name] = this.methodInfo.argValues[i] ? "true" : "false";
                        break;
                    case "number":
                        params[name] = this.methodInfo.argValues[i];
                        break;
                    //case "string":
                    //params[name] = this.isTemplate || this.replace ? value : "'" + value + "'";
                    //break;
                    default:
                        params[name] = value;
                        break;
                }
            }
        }

        // See if the method has parameters
        let isEmpty = true;
        for (let k in params) { isEmpty = false; break; }
        this.methodParams = isEmpty ? null : params;

        // See if method parameters exist
        if (this.methodParams) {
            // See if a template is defined for the method data
            if (this.isTemplate) {
                // Ensure the object is a string
                if (typeof (this.methodInfo.data) !== "string") {
                    // Stringify the object
                    this.methodInfo.data = JSON.stringify(this.methodInfo.data);
                }

                // Parse the arguments
                for (let key in this.methodParams) {
                    // Replace the argument in the template
                    this.methodInfo.data = this.methodInfo.data.replace("[[" + key + "]]", this.methodParams[key].replace(/"/g, '\\"').replace(/\n/g, ""));
                }

                // Set the method data
                this.methodData = JSON.parse(this.methodInfo.data);
            }
        }

        // See if argument values exist
        if (this.methodInfo.argValues && this.methodInfo.argValues.length > 0) {
            // See if argument names exist
            if (this.methodInfo.argNames == null || this.methodInfo.requestType == RequestType.PostBodyNoArgs) {
                // Set the method data to first argument value
                this.methodData = this.methodInfo.argValues[0];
            }
            // Else, see if we are passing arguments outside of the parameters
            else if (this.methodInfo.argValues.length > this.methodInfo.argNames.length) {
                // Set the method data to the next available argument value
                this.methodData = this.methodInfo.argValues[this.methodInfo.argNames.length];
            }
        }

        // See if the metadata type exists
        if (this.methodInfo.metadataType) {
            // See if parameters exist
            if (this.methodInfo.argNames && this.methodInfo.requestType != RequestType.PostBodyNoArgs) {
                // Append the metadata to the first parameter, if it doesn't exist
                (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] =
                    (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] || { "type": this.methodInfo.metadataType };
            }
            else {
                // Append the metadata to the parameters, if it doesn't exist
                (this.methodData || this.methodParams)["__metadata"] =
                    (this.methodData || this.methodParams)["__metadata"] || { "type": this.methodInfo.metadataType };
            }
        }
    }

    // Method to generate the method and parameters as a url
    private generateUrl(): string {
        let url = this.methodInfo.name;

        // See if we are deleting the object
        if (this.methodInfo.requestType == RequestType.Delete) {
            // Update the url
            url = "deleteObject";
        }

        // See if we are passing the data in the body
        if (this.passDataInBody) {
            let data = this.methodData || this.methodParams;

            // Stringify the data to be passed in the body
            this.methodData = JSON.stringify(data);
        }

        // See if we are passing the data in the query string as a variable
        if (this.passDataInQSAsVar) {
            let data = this.methodParams || this.methodData;

            // Append the parameters in the query string
            url += "(@v)?@v=" + (typeof (data) === "string" ? "'" + encodeURIComponent(data) + "'" : JSON.stringify(data));
        }

        // See if we are replacing the arguments
        if (this.replace) {
            // Parse the arguments
            for (let key in this.methodParams) {
                // Replace the argument in the url
                url = url.replace("[[" + key + "]]", encodeURIComponent(this.methodParams[key]));
            }
        }
        // Else, see if this is an odata request
        else if (this.methodInfo.requestType == RequestType.OData) {
            let oData = new OData(this.methodParams["oData"]);

            // Update the url
            url = "?" + oData.QueryString;

            // Set the get all items Flag
            this.methodInfo.getAllItemsFl = oData.GetAllItems;
        }
        // Else, see if we are not passing the data in the body or query string as a variable
        else if (!this.passDataInBody && !this.passDataInQSAsVar) {
            let params = "";

            // Ensure data exists
            let data = this.methodParams || this.methodData;
            if (data) {
                // Ensure the data is an object
                data = data && typeof (data) === "object" ? data : { value: data };

                // Parse the parameters
                for (let name in data) {
                    let value = data[name];
                    value = typeof (value) === "string" ? "'" + value + "'" : value;

                    switch (this.methodInfo.requestType) {
                        // Append the value only
                        case RequestType.GetWithArgsValueOnly:
                        case RequestType.PostWithArgsValueOnly:
                            params += value + ", ";
                            break;
                        // Append the parameter and value
                        default:
                            params += name + "=" + value + ", ";
                            break;
                    }
                }
            }

            // See if we are passing data in the query string
            if (this.passDataInQS) {
                // Set the url
                url += params.length > 0 ? "?" + params.replace(/, $/, "&") : "";
            } else {
                // Set the url
                url += params.length > 0 ? "(" + params.replace(/, $/, "") + ")" : "";
            }
        }

        // Return the url
        return url;
    }
}