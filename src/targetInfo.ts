/// <reference path="targetInfo.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Target Information
    // This class will take the target information and create the request url.
    /*********************************************************************************************************************************/
    export class TargetInfo implements ITargetInfo {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo:ITargetInfoType) {
            // Default the properties
            this.requestMethod = "GET";
            this.targetInfo = targetInfo || {};
            this.targetInfo.asyncFl = this.targetInfo.asyncFl ? true : false;

            // Set the request url
            this.setRequestUrl()
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // Flag to determine if the request should be asynchronous or synchronous
        public get asyncFl():boolean { return this.targetInfo.asyncFl; }

        // Flag to determine if the request returns an array buffer
        public get bufferFl():boolean { return this.targetInfo.bufferFl; }

        // The callback method to execute after the asynchronous request completes
        public get callback():() => void { return this.targetInfo.callback; }

        // The request data
        public requestData:any;

        // The request header
        public requestHeaders:string[];

        // The request method
        public requestMethod:string;

        // The request url
        public requestUrl:string;

        /*********************************************************************************************************************************/
        // Private Variables
        /*********************************************************************************************************************************/

        // The target information
        private targetInfo:ITargetInfoType;

        // Reference to the page context information
        private get context():any { return window["_spPageContextInfo"]; }

        // Flag to determine if we are currently in an app web
        private get isAppWeb():boolean { return this.context.isAppWeb; }

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Method to get the domain url
        private getDomainUrl():string {
            let url:any = document.location.href;

            // See if this is an app web
            if (this.isAppWeb) {
                // Set the url to the host url
                url = this.getQueryStringValue("SPHostUrl") + "";
            }

            // Split the url and validate it
            url = url.split('/');
            if (url && url.length >= 2) {
                // Set the url
                url = url[0] + "//" + url[2];
            }

            // Return the url
            return url;
        }

        // Method to get a query string value
        private getQueryStringValue(key:string) {
            // Get the query string
            var queryString:any = document.location.href.split('?');
            queryString = queryString.length > 1 ? queryString[1] : queryString[0];

            // Parse the values
            var values:any = queryString.split('&');
            for (var i = 0; i < values.length; i++) {
                var keyValue = values[i].split('=');

                // Ensure a value exists
                if (keyValue.length == 1) { continue; }

                // See if this is the key we are looking for
                if (decodeURIComponent(keyValue[0]) == key) {
                    return decodeURIComponent(keyValue[1]);
                }
            }

            // Key was not found
            return null;
        }

        // Method to set the request url
        private setRequestUrl() {
            let template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";

            // Ensure the url exists
            if(this.targetInfo.url == null) {
                // Default the url to the current site/web url
                this.targetInfo.url = this.context[this.targetInfo.defaultToWebFl ? "webAbsoluteUrl" : "siteAbsoluteUrl"];
            }

            // See if this is a relative url
            if(this.targetInfo.url.indexOf("http") != 0) {
                // Add the domain
                this.targetInfo.url = this.getDomainUrl() + this.targetInfo.url;
            }

            // See if this is the app web
            if(this.isAppWeb) {
                // Append the start character for the query string
                let endpoint = this.targetInfo.endpoint.indexOf("?") > 0 ? "&" : "?";

                // Set the request url
                this.requestUrl = template
                    .replace("{{Url}}", this.context["webAbsoluteUrl"])
                    .replace("{{EndPoint}}", endpoint)
                    .replace("{{TargetUrl}}", "@target='" + this.targetInfo.url + "'");
            } else {
                // Set the request url
                this.requestUrl = template
                    .replace("{{Url}}", this.targetInfo.url)
                    .replace("{{EndPoint}}", this.targetInfo.endpoint)
                    .replace("{{TargetUrl}}", "");
            }
        }
    }
}