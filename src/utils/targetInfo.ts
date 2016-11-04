module $REST.Utils {
    /*********************************************************************************************************************************/
    // Target Information
    // This class will take the target information and create the request url.
    /*********************************************************************************************************************************/
    export class TargetInfo {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo:Settings.TargetInfoSettings) {
            // Default the properties
            this.targetInfo = targetInfo || {};
            this.requestData = this.targetInfo.data;
            this.requestMethod = this.targetInfo.method ? this.targetInfo.method : "GET";

            // Set the request url
            this.setRequestUrl()
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

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
        private targetInfo:Settings.TargetInfoSettings;

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
            let hostUrl = this.getQueryStringValue("SPHostUrl");
            let template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";

            // See if we are defaulting the url for the app web
            if($REST.DefaultRequestToHostWebFl && this.isAppWeb && this.targetInfo.url == null) {
                // Default the url to the host web
                this.targetInfo.url = hostUrl;
            }

            // Ensure the url exists
            if(this.targetInfo.url == null) {
                // Default the url to the current site/web url
                this.targetInfo.url = this.context[this.targetInfo.defaultToWebFl == false ? "siteAbsoluteUrl" : "webAbsoluteUrl"];
            }
            // Else, see if the url already contains the full request
            else if(/\/_api\//.test(this.targetInfo.url)) {
                // Get the url
                var url = this.targetInfo.url.toLowerCase().split("/_api/");

                // See if this is the app web and we are executing against a different web
                if(this.isAppWeb && url[0] != this.context["webAbsoluteUrl"].toLowerCase()) {
                    // Set the request url
                    this.requestUrl = this.context["webAbsoluteUrl"] + "/_api/SP.AppContextSite(@target)/" + url[1] +
                        (this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "") +
                        "?@target='" + url[0] + "'";
                }
                else {
                    // Set the request url
                    this.requestUrl = this.targetInfo.url + (this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "");
                }
                return;
            }

            // See if this is a relative url
            if(this.targetInfo.url.indexOf("http") != 0) {
                // Add the domain
                this.targetInfo.url = this.getDomainUrl() + this.targetInfo.url;
            }

            // See if this is the app web, and we are executing against a different web
            if(this.isAppWeb && this.targetInfo.url != this.context["webAbsoluteUrl"]) {
                // Append the start character for the query string
                let endpoint = this.targetInfo.endpoint +
                    (this.targetInfo.endpoint.indexOf("?") > 0 ? "&" : "?");

                // Set the request url
                this.requestUrl = template
                    .replace(/{{Url}}/g, this.context["webAbsoluteUrl"])
                    .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)/" + endpoint)
                    .replace(/{{TargetUrl}}/g, "@target='" + this.targetInfo.url + "'");
            } else {
                // Set the request url
                this.requestUrl = template
                    .replace(/{{Url}}/g, this.targetInfo.url)
                    .replace(/{{EndPoint}}/g, this.targetInfo.endpoint)
                    .replace(/{{TargetUrl}}/g, "");
            }
        }
    }
}