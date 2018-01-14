"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
/*********************************************************************************************************************************/
// Request
// This class will execute the xml http request.
/*********************************************************************************************************************************/
var XHRRequest = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function XHRRequest(asyncFl, targetInfo, callback) {
        // Default the properties
        this.asyncFl = asyncFl;
        this.onRequestCompleted = callback || targetInfo.request.callback;
        this.targetInfo = targetInfo;
        this.xhr = this.createXHR();
        // Execute the request
        this.execute();
    }
    Object.defineProperty(XHRRequest.prototype, "completedFl", {
        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/
        // Flag indicating the request has completed
        get: function () { return this.xhr ? this.xhr.readyState == 4 : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "response", {
        // The response
        get: function () { return this.xhr ? this.xhr.response : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "request", {
        // The xml http request
        get: function () { return this.xhr ? this.xhr : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "requestData", {
        // The data send in the body of the request
        get: function () { return this.targetInfo.requestData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "requestUrl", {
        // The reqest url
        get: function () { return this.xhr ? this.xhr.responseURL : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "status", {
        // The request status
        get: function () { return this.xhr ? this.xhr.status : null; },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/
    // Method to create the xml http request
    XHRRequest.prototype.createXHR = function () {
        // See if the generic object doesn't exist
        if (typeof (XMLHttpRequest) !== "undefined") {
            // Create an instance of the xml http request object
            return new XMLHttpRequest();
        }
        // Try to create the request
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
        catch (e) { }
        // Try to create the request
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        }
        catch (e) { }
        // Try to create the request
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) { }
        // Throw an error
        throw new Error("This browser does not support xml http requests.");
    };
    // Method to default the request headers
    XHRRequest.prototype.defaultHeaders = function () {
        // See if the custom headers exist
        if (this.targetInfo.requestHeaders) {
            // Parse the custom headers
            for (var header in this.targetInfo.requestHeaders) {
                // Add the header
                this.xhr.setRequestHeader(header, this.targetInfo.requestHeaders[header]);
            }
        }
        else {
            // Set the default headers
            this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
            this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
        }
        // Set the method
        this.xhr.setRequestHeader("X-HTTP-Method", this.targetInfo.requestMethod);
        // See if the request digest has been defined
        if (this.targetInfo.request.requestDigest) {
            // Set the request digest
            this.xhr.setRequestHeader("X-RequestDigest", this.targetInfo.request.requestDigest);
        }
        else {
            // Get the request digest
            var requestDigest = lib_1.ContextInfo.document.querySelector("#__REQUESTDIGEST");
            requestDigest = requestDigest ? requestDigest.value : "";
            // Set the request digest
            this.xhr.setRequestHeader("X-RequestDigest", requestDigest);
        }
        // See if we are deleting or updating the data
        if (this.targetInfo.requestMethod == "DELETE" || this.targetInfo.requestMethod == "MERGE") {
            // Append the header for deleting/updating
            this.xhr.setRequestHeader("IF-MATCH", "*");
        }
    };
    // Method to execute the xml http request
    XHRRequest.prototype.execute = function () {
        var _this = this;
        // Ensure the xml http request exists
        if (this.xhr == null) {
            return null;
        }
        // Open the request
        this.xhr.open(this.targetInfo.requestMethod == "GET" ? "GET" : "POST", this.targetInfo.requestUrl, this.asyncFl);
        // See if we are making an asynchronous request
        if (this.asyncFl) {
            // Set the state change event
            this.xhr.onreadystatechange = function () {
                // See if the request has finished
                if (_this.xhr.readyState == 4) {
                    // Execute the request completed event
                    _this.onRequestCompleted ? _this.onRequestCompleted(_this) : null;
                }
            };
        }
        // See if we the response type is an array buffer
        // Note - Updating the response type is only allow for asynchronous requests. Any error will be thrown otherwise.
        if (this.targetInfo.request.bufferFl && this.asyncFl) {
            // Set the response type
            this.xhr.responseType = "arraybuffer";
        }
        else {
            // Default the headers
            this.defaultHeaders();
            // Ensure the arguments passed is defaulted as a string, unless it's an array buffer
            if (this.targetInfo.requestData && typeof (this.targetInfo.requestData) !== "string") {
                // Stringify the data object, if it's not an array buffer
                this.targetInfo.requestData = this.targetInfo.requestData.byteLength ? this.targetInfo.requestData : JSON.stringify(this.targetInfo.requestData);
            }
        }
        // Execute the request
        this.targetInfo.request.bufferFl || this.targetInfo.requestData == null ? this.xhr.send() : this.xhr.send(this.targetInfo.requestData);
    };
    return XHRRequest;
}());
exports.XHRRequest = XHRRequest;
//# sourceMappingURL=xhrRequest.js.map