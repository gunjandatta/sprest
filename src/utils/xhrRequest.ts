import { Base } from "gd-sprest-def";
import { ContextInfo } from "../lib";
import { TargetInfo } from ".";
declare var ActiveXObject;

/**
 * XML HTTP Request Class
 */
export class XHRRequest {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(asyncFl: boolean, targetInfo: TargetInfo, callback?: (...args) => void, executeFl: boolean = true) {
        // Default the properties
        this.asyncFl = asyncFl;
        this.executeFl = executeFl;
        this.headers = {};
        this.onRequestCompleted = callback || targetInfo.props.callback;
        this.targetInfo = targetInfo;
        this.xhr = this.createXHR();

        // Execute the request
        this.execute();
    }

    /*********************************************************************************************************************************/
    // Public Properties
    /*********************************************************************************************************************************/

    // Flag indicating the request has completed
    get completedFl(): boolean { return this.xhr ? this.xhr.readyState == 4 : false; }

    // The response
    get response() { return this.xhr ? this.xhr.response : null; }

    // The xml http request
    get request() { return this.xhr ? this.xhr : null; }

    // The data send in the body of the request
    get requestData() { return this.targetInfo.requestData; }

    // The request headers
    get requestHeaders() { return this.headers; }

    // The request information
    get requestInfo(): Base.IRequestInfo {
        // Return the request information
        return {
            data: this.targetInfo.requestData,
            headers: this.headers,
            method: this.targetInfo.requestMethod,
            url: this.targetInfo.requestUrl
        };
    }

    // The request url
    get requestUrl(): string { return this.xhr ? this.xhr.responseURL : null; }

    // The request status
    get status(): number { return this.xhr ? this.xhr.status : null }

    /*********************************************************************************************************************************/
    // Private Variables
    /*********************************************************************************************************************************/

    // The flag to determine if the request is executed asynchronously or synchronously
    private asyncFl: boolean;

    // The flag to determine if the request should be executed
    private executeFl: boolean;

    // The request headers used for this request
    private headers: { [key: string]: string };

    // The target information
    private targetInfo: TargetInfo;

    // The method to execute after the request completes
    private onRequestCompleted: (xhr: XHRRequest) => any;

    // The xml http request object
    private xhr: XMLHttpRequest;

    /*********************************************************************************************************************************/
    // Private Methods
    /*********************************************************************************************************************************/

    // Method to create the xml http request
    private createXHR() {
        // See if the generic object doesn't exist
        if (typeof (XMLHttpRequest) !== "undefined") {
            // Create an instance of the xml http request object
            return new XMLHttpRequest();
        }

        // Try to create the request
        try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
        catch (e) { }

        // Try to create the request
        try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
        catch (e) { }

        // Try to create the request
        try { return new ActiveXObject("Microsoft.XMLHTTP"); }
        catch (e) { }

        // Throw an error
        throw new Error("This browser does not support xml http requests.");
    }

    // Method to default the request headers
    private defaultHeaders(requestDigest) {
        let ifMatchExists = false;

        // See if the custom headers exist
        if (this.targetInfo.requestHeaders) {
            // Parse the custom headers
            for (var header in this.targetInfo.requestHeaders) {
                // Add the header
                this.xhr.setRequestHeader(header, this.targetInfo.requestHeaders[header]);
                this.headers[header] = this.targetInfo.requestHeaders[header];

                // See if this is the "IF-MATCH" header
                ifMatchExists = ifMatchExists || header.toUpperCase() == "IF-MATCH";
            }
        } else {
            // See if this is a graph request
            if (this.targetInfo.isGraph) {
                // Set the default headers
                this.xhr.setRequestHeader("Accept", "application/json");
                this.xhr.setRequestHeader("Content-Type", "application/json");
                this.headers["Accept"] = "application/json";
                this.headers["Content-Type"] = "application/json";
            } else {
                // Set the default headers
                this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
                this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
                this.headers["Accept"] = "application/json;odata=verbose";
                this.headers["Content-Type"] = "application/json;odata=verbose";
            }
        }

        // See if this is a graph request
        if (this.targetInfo.isGraph) {
            // Set the authorization
            this.xhr.setRequestHeader("Authorization", "Bearer " + this.targetInfo.props.accessToken);
            this.headers["Authorization"] = "Bearer " + this.targetInfo.props.accessToken;
        } else {
            // See if custom headers were not defined
            if (this.targetInfo.requestHeaders == null) {
                // Set the method by default
                this.xhr.setRequestHeader("X-HTTP-Method", this.targetInfo.requestMethod);
                this.headers["X-HTTP-Method"] = this.targetInfo.requestMethod;
            }

            // Set the request digest
            this.xhr.setRequestHeader("X-RequestDigest", requestDigest);
            this.headers["X-RequestDigest"] = requestDigest;

            // See if we are deleting or updating the data
            if (this.targetInfo.requestMethod == "DELETE" || this.targetInfo.requestMethod == "MERGE" && !ifMatchExists) {
                // Append the header for deleting/updating
                this.xhr.setRequestHeader("IF-MATCH", "*");
                this.headers["IF-MATCH"] = "*";
            }
        }
    }

    // Method to execute the xml http request
    private execute() {
        // Set the request digest
        let requestDigest: any | string = this.targetInfo.props.requestDigest || "";
        if (requestDigest == "") {
            // Get the request digest
            requestDigest = ContextInfo.document ? ContextInfo.document.querySelector("#__REQUESTDIGEST") : "";
            requestDigest = requestDigest ? requestDigest.value : "";
        }

        // See if we are targeting the context endpoint
        if (this.targetInfo.props.endpoint == "contextinfo") {
            // Execute the request
            this.executeRequest(requestDigest);
        }
        // See if this is a post request and the request digest does not exist
        else if (this.targetInfo.requestMethod != "GET" && requestDigest == "") {
            // See if this is a synchronous request
            if (!this.asyncFl) {
                // Log
                console.info("[gd-sprest] POST requests must include the request digest information for synchronous requests. This is due to the modern page not including this information on the page.");
            } else {
                // Get the context information
                ContextInfo.getWeb(this.targetInfo.props.url || document.location.pathname.substr(0, document.location.pathname.lastIndexOf('/'))).execute(contextInfo => {
                    // Execute the request
                    this.executeRequest(contextInfo.GetContextWebInformation.FormDigestValue);
                });
            }
        } else {
            // Execute the request
            this.executeRequest(requestDigest);
        }
    }

    // Method to execute the xml http request
    private executeRequest(requestDigest: string) {
        // Ensure the xml http request exists
        if (this.xhr == null) { return null; }

        // Open the request
        this.xhr.open(this.targetInfo.requestMethod == "GET" ? "GET" : "POST", this.targetInfo.requestUrl, this.asyncFl);

        // See if we are making an asynchronous request
        if (this.asyncFl) {
            // Set the state change event
            this.xhr.onreadystatechange = () => {
                // See if the request has finished
                if (this.xhr.readyState == 4) {
                    // Execute the request completed event
                    this.onRequestCompleted ? this.onRequestCompleted(this) : null;
                }
            }
        }

        // See if we the response type is an array buffer
        // Note - Updating the response type is only allow for asynchronous requests. Any error will be thrown otherwise.
        if (this.targetInfo.props.bufferFl && this.asyncFl) {
            // Set the response type
            this.xhr.responseType = "arraybuffer";
        }
        else {
            // Default the headers
            this.defaultHeaders(requestDigest);

            // Ensure the arguments passed is defaulted as a string, unless it's an array buffer
            if (this.targetInfo.requestData && typeof (this.targetInfo.requestData) !== "string") {
                // Stringify the data object, if it's not an array buffer
                this.targetInfo.requestData = this.targetInfo.requestData.byteLength ? this.targetInfo.requestData : JSON.stringify(this.targetInfo.requestData);
            }
        }

        // See if we are executing the request
        if (this.executeFl) {
            // Execute the request
            this.targetInfo.props.bufferFl || this.targetInfo.requestData == null ? this.xhr.send() : this.xhr.send(this.targetInfo.requestData);
        }
    }
}