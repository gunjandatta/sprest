module GD.Utils {
    /*********************************************************************************************************************************/
    // Request
    // This class will execute the xml http request.
    /*********************************************************************************************************************************/
    export class Request {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(asyncFl:boolean, targetInfo:TargetInfo, callback?:(...args) => void) {
            // Default the properties
            this.asyncFl = asyncFl;
            this.promise = new Promise(callback || targetInfo.callback);
            this.targetInfo = targetInfo;
            this.xhr = this.createXHR();

            // Execute the request
            this.execute();
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // Flag indicating the request has completed
        public get completedFl():boolean { return this.xhr ? this.xhr.readyState == 4 : false; }

        // The response
        public get response():any { return this.xhr ? this.xhr.response : null; }

        // The xml http request
        public get request():any { return this.xhr ? this.xhr : null; }

        // The data send in the body of the request
        public get requestData():any { return this.targetInfo.requestData; }

        // The reqest url
        public get requestUrl():string { return this.xhr ? this.xhr.responseURL : null; }

        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        // The flag to determine if the request is executed asynchronously or synchronously
        private asyncFl:boolean;

        // The target information
        private targetInfo:TargetInfo;

        // The promise
        private promise:Promise;

        // The xml http request object
        private xhr:any;

        /*********************************************************************************************************************************/
        // Private Methods
        /*********************************************************************************************************************************/

        // Method to create the xml http request
        private createXHR():any {
            // See if the generic object doesn't exist
            if (typeof(XMLHttpRequest) !== "undefined") {
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
        private defaultHeaders():void {
            // Get the request digest
            let requestDigest:any = document.querySelector("#__REQUESTDIGEST");
            requestDigest = requestDigest ? requestDigest.value : "";

            // Set the default headers
            this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
            this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
            this.xhr.setRequestHeader("X-HTTP-Method", this.targetInfo.requestMethod);
            this.xhr.setRequestHeader("X-RequestDigest", requestDigest);

            // See if we are deleting or updating the data
            if(this.targetInfo.requestMethod == "DELETE" || this.targetInfo.requestMethod == "MERGE") {
                // Append the header for deleting/updating
                this.xhr.setRequestHeader("IF-MATCH", "*");
            }

            // See if the custom headers exist
            if (this.targetInfo.requestHeaders) {
                // Parse the custom headers
                for (var header in this.targetInfo.requestHeaders) {
                    // Add the header
                    this.xhr.setRequestHeader(header, this.targetInfo.requestHeaders[header]);
                }
            }
        }

        // Method to execute the xml http request
        private execute():void {
            // Ensure the xml http request exists
            if(this.xhr == null) { return null; }

            // Open the request
            this.xhr.open(this.targetInfo.requestMethod == "GET" ? "GET" : "POST", this.targetInfo.requestUrl, this.asyncFl);

            // See if we are making an asynchronous request
            if(this.asyncFl) {
                // Set the state change event
                this.xhr.onreadystatechange = () => {
                    // See if the request has finished
                    if(this.xhr.readyState == 4) {
                        // Resolve the promise
                        this.promise.resolve(this);
                    }
                }
            }

            // See if we the response type is an array buffer
            // Note - Updating the response type is only allow for asynchronous requests. Any error will be thrown otherwise.
            if(this.targetInfo.bufferFl && this.asyncFl) {
                // Set the response type
                this.xhr.responseType = "arraybuffer";
            }
            else {
                // Default the headers
                this.defaultHeaders();

                // Ensure the arguments passed is defaulted as a string, unless it's an array buffer
                if(this.targetInfo.requestData && typeof(this.targetInfo.requestData) !== "string") {
                    // Stringify the data object, if it's not an array buffer
                    this.targetInfo.requestData = this.targetInfo.requestData.byteLength ? this.targetInfo.requestData : JSON.stringify(this.targetInfo.requestData);
                }
            }

            // Execute the request
            this.targetInfo.bufferFl || this.targetInfo.requestData == null ? this.xhr.send() : this.xhr.send(this.targetInfo.requestData);
        }
    }
}
