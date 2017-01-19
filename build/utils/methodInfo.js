"use strict";
var types_1 = require("../types");
var _1 = require(".");
/*********************************************************************************************************************************/
// Method Information
// This class will create the method information for the request.
/*********************************************************************************************************************************/
var MethodInfo = (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function MethodInfo(methodName, methodInfo, args) {
        // Default the properties
        this.methodInfo = methodInfo;
        this.methodInfo.argValues = args;
        this.methodInfo.name = typeof (this.methodInfo.name) === "string" ? this.methodInfo.name : methodName;
        // Generate the parameters
        this.generateParams();
        // Generate the url
        this.methodUrl = this.generateUrl();
    }
    Object.defineProperty(MethodInfo.prototype, "body", {
        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/
        // The data passed through the body of the request
        get: function () { return this.methodData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "getAllItemsFl", {
        // Flag to determine if we are getting all items
        get: function () { return this.methodInfo.getAllItemsFl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "replaceEndpointFl", {
        // Flag to determine if this method replaces the endpoint
        get: function () { return this.methodInfo.replaceEndpointFl ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "requestMethod", {
        // The request method
        get: function () {
            // Return the request method if it exists
            if (typeof (this.methodInfo.requestMethod) === "string") {
                return this.methodInfo.requestMethod;
            }
            // Determine the request method, based on the request type
            switch (this.methodInfo.requestType) {
                case types_1.RequestType.Delete:
                case types_1.RequestType.Post:
                case types_1.RequestType.PostWithArgs:
                case types_1.RequestType.PostWithArgsInBody:
                case types_1.RequestType.PostWithArgsInQS:
                case types_1.RequestType.PostWithArgsValueOnly:
                case types_1.RequestType.PostReplace:
                    return "POST";
                default:
                    return "GET";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "url", {
        // The url of the method and parameters
        get: function () { return this.methodUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "passDataInBody", {
        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/
        get: function () { return this.methodInfo.requestType == types_1.RequestType.GetWithArgsInBody || this.methodInfo.requestType == types_1.RequestType.PostWithArgsInBody; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "passDataInQS", {
        get: function () { return this.methodInfo.requestType == types_1.RequestType.GetWithArgsInQS || this.methodInfo.requestType == types_1.RequestType.PostWithArgsInQS; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "isTemplate", {
        get: function () { return this.methodInfo.data ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "replace", {
        get: function () { return this.methodInfo.requestType == types_1.RequestType.GetReplace || this.methodInfo.requestType == types_1.RequestType.PostReplace; },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/
    // Method to generate the method input parameters
    MethodInfo.prototype.generateParams = function () {
        var params = {};
        // Ensure values exist
        if (this.methodInfo.argValues == null) {
            return;
        }
        // See if the argument names exist
        if (this.methodInfo.argNames) {
            // Parse the argument names
            for (var i = 0; i < this.methodInfo.argNames.length && i < this.methodInfo.argValues.length; i++) {
                var name_1 = this.methodInfo.argNames[i];
                var value = this.methodInfo.argValues[i];
                // Copy the parameter value
                switch (typeof (this.methodInfo.argValues[i])) {
                    case "boolean":
                        params[name_1] = this.methodInfo.argValues[i] ? "true" : "false";
                        break;
                    case "number":
                        params[name_1] = this.methodInfo.argValues[i];
                        break;
                    //case "string":
                    //params[name] = this.isTemplate || this.replace ? value : "'" + value + "'";
                    //break;
                    default:
                        params[name_1] = value;
                        break;
                }
            }
        }
        // See if the method has parameters
        var isEmpty = true;
        for (var k in params) {
            isEmpty = false;
            break;
        }
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
                for (var key in this.methodParams) {
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
            if (this.methodInfo.argNames == null) {
                // Set the method data to first argument value
                this.methodData = this.methodInfo.argValues[0];
            }
            else if (this.methodInfo.argValues.length > this.methodInfo.argNames.length) {
                // Set the method data to the next available argument value
                this.methodData = this.methodInfo.argValues[this.methodInfo.argNames.length];
            }
        }
        // See if the metadata type exists
        if (this.methodInfo.metadataType) {
            // See if parameters exist
            if (this.methodInfo.argNames) {
                // Append the metadata to the first parameter
                (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] = { "type": this.methodInfo.metadataType };
            }
            else {
                // Append the metadata to the parameters
                (this.methodData || this.methodParams)["__metadata"] = { "type": this.methodInfo.metadataType };
            }
        }
    };
    // Method to generate the method and parameters as a url
    MethodInfo.prototype.generateUrl = function () {
        var url = this.methodInfo.name;
        // See if we are deleting the object
        if (this.methodInfo.requestType == types_1.RequestType.Delete) {
            // Update the url
            url = "deleteObject";
        }
        // See if we are passing the data in the body
        if (this.passDataInBody) {
            var data = this.methodData || this.methodParams;
            // Stringify the data to be passed in the body
            this.methodData = JSON.stringify(data);
        }
        // See if we are passing the data in the query string
        if (this.passDataInQS) {
            var data = this.methodParams || this.methodData;
            // Append the parameters in the query string
            url += "(@v)?@v=" + (typeof (data) === "string" ? "'" + encodeURIComponent(data) + "'" : JSON.stringify(data));
        }
        // See if we are replacing the arguments
        if (this.replace) {
            // Parse the arguments
            for (var key in this.methodParams) {
                // Replace the argument in the url
                url = url.replace("[[" + key + "]]", encodeURIComponent(this.methodParams[key]));
            }
        }
        else if (this.methodInfo.requestType == types_1.RequestType.OData) {
            var oData = new _1.OData(this.methodParams["oData"]);
            // Update the url
            url = "?" + oData.QueryString;
            // Set the get all items Flag
            this.methodInfo.getAllItemsFl = oData.GetAllItems;
        }
        else if (!this.passDataInBody && !this.passDataInQS) {
            var params = "";
            // Ensure data exists
            var data = this.methodParams || this.methodData;
            if (data) {
                // Ensure the data is an object
                data = data && typeof (data) === "object" ? data : { value: data };
                // Parse the parameters
                for (var name_2 in data) {
                    var value = data[name_2];
                    value = typeof (value) === "string" ? "'" + value + "'" : value;
                    switch (this.methodInfo.requestType) {
                        // Append the value only
                        case types_1.RequestType.GetWithArgsValueOnly:
                        case types_1.RequestType.PostWithArgsValueOnly:
                            params += value + ", ";
                            break;
                        // Append the parameter and value
                        default:
                            params += name_2 + "=" + value + ", ";
                            break;
                    }
                }
            }
            // Set the url
            url += params.length > 0 ? "(" + params.replace(/, $/, "") + ")" : "";
        }
        // Return the url
        return url;
    };
    return MethodInfo;
}());
exports.MethodInfo = MethodInfo;
//# sourceMappingURL=methodInfo.js.map