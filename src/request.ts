/// <reference path="./request.d.ts" />
/// <reference path="./targetInfo.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // The request class.
    /*********************************************************************************************************************************/
    export class Request implements IRequest {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(settings:IRequestType) {
            console.log("[Dev] Request constructor called...");
            // Default the properties
            this.asyncFl = typeof(settings.asyncFl) === "boolean" ? settings.asyncFl : true;
            this.bufferFl = typeof(settings.bufferFl) === "boolean" ? settings.bufferFl : false;
            this.callback = settings.callback ? settings.callback : null;
            this.requestType = settings.requestType ? settings.requestType : 0;
            this.requestUrl = settings.url ? settings.url : "";

            // Initialize this class
            this.init(settings);
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // Flag to determine if the request should be asynchronous
        public asyncFl:boolean;

        // Method to return the xml http request's response
        public get response():any { return this.xhr ? this.xhr.response : null; }

        // Method to return the xml http request
        public get request():any { return this.xhr ? this.xhr : null; }

        // The request url
        public get url():string { return this.requestUrl; }

        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        // Flag to determine if the request returns an array buffer
        private bufferFl:boolean;

        // The callback method
        private callback:any;

        // Flag to determine if the request is asynchronous
        private get isAsynchronous():boolean { return this.asyncFl || this.bufferFl; }

        // Flag to determine if this is a GET or POST request
        private get isGetMethod():boolean { return this.requestType < 6 }

        // The request type
        private requestType:number;

        // The request url
        private requestUrl:string;

        // The xml http request object
        private xhr:any;

        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/

        // Method to default the request headers
        private defaultHeaders(settings:IRequestType) {
            // Get the request digest
            let requestDigest:any = document.querySelector("#__REQUESTDIGEST");
            requestDigest = requestDigest ? requestDigest.value : "";

            // Set the default headers
            this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
            this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
            this.xhr.setRequestHeader("X-HTTP-Method", settings.method);
            this.xhr.setRequestHeader("X-RequestDigest", requestDigest);

            // See if the custom headers exist
            if (settings.headers) {
                // Parse the custom headers
                for (var header in settings.headers) {
                    // Add the header
                    this.xhr.setRequestHeader(header, settings.headers[header]);
                }
            }
        }

        // Method to execute the callback function
        private executeCallback() {
            // See if the callback exists
            if(this.callback && typeof(this.callback) == "function") {
                // Execute the callback function
                this.callback.apply(this.response);
            }
        }

        // Method to execute the xml http request
        private executeSubRequest(request:Request) {
        }

        // Method to execute the xml http request
        private executeRequest(settings:IRequestType) {
            // Open the request
            this.xhr.open(this.isGetMethod ? "GET" : "POST", this.url, this.isAsynchronous);

            // See if we are making an asynchronous request
            if(this.isAsynchronous) {
                // Set the state change event
                this.xhr.onreadystatechange = () => {
                    // See if the request has finished
                    if(this.xhr.readyState == 4) {
                        // Execute the callback function
                        this.executeCallback();
                    }
                }
            }

            // See if we the response type is an array buffer
            if(this.bufferFl) {
                // Set the response type
                this.xhr.responseType = "arraybuffer";
            }
            else {
                // Default the headers
                this.defaultHeaders(settings);

                // See if arguments are being passed
                if(settings.data) {
                    // Stringify the data object
                    settings.data = settings.data.byteLength ? settings.data : JSON.stringify(settings.data);
                }
            }

            // Execute the request
            this.bufferFl ? this.xhr.send() : this.xhr.send(settings.data);

            // Return the request
            return this.request;
        }

        // Method to initialize this class
        private init(settings:IRequestType) {
            // See if the generic object doesn't exist
            if (typeof(XMLHttpRequest) === "undefined") {
                // Try to create the request
                try { this.xhr = new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
                catch (e) { }

                // Try to create the request
                try { this.xhr = new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
                catch (e) { }

                // Try to create the request
                try { this.xhr = new ActiveXObject("Microsoft.XMLHTTP"); }
                catch (e) { }

                // Throw an error
                throw new Error("This browser does not support xml http requests.");
            }
            else {
                // Create an instance of the xml http request object
                this.xhr = new XMLHttpRequest();
            }

            // See if the request exists
            if(this.xhr) {
                debugger;
                // Execute the request
                this.executeRequest(settings);
            }
        }
    }
}
