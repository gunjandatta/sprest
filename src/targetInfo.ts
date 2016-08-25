/// <reference path="targetInfo.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // The target information class.
    /*********************************************************************************************************************************/
    export class TargetInfo implements ITargetInfo {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(url:string, endPoint:string, defaultToCurrentWeb:boolean) {
            // Default the properties
            this.endPoint = endPoint;
            this.url = url ? url : this.context[defaultToCurrentWeb ? "webAbsoluteUrl" : "siteAbsoluteUrl"];

            // Set the domain
            if(this.url.indexOf("http") != 0) {
                this.url = this.getDomainUrl() + this.url;
            }

            // See if this is the app web
            if(this.isAppWeb) {
                // Set the request url template
                this.template = this.context.webAbsoluteUrl + "/_api/" + "SP.AppContextSite(@target)/{{EndPoint}}" +
                (this.endPoint.indexOf('?') > 0 ? "&" : "?") + "@target='{{Url}}'";
            }
            else {
                // Set the request url template
                this.template = this.url + "/_api/{{EndPoint}}";
            }
        }

        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/

        // The request url
        public get requestUrl():string {
            return this.template
            .replace("{{EndPoint}}", this.endPoint)
            .replace("{{Url}}", this.url);
        }

        /*********************************************************************************************************************************/
        // Private Properties
        /*********************************************************************************************************************************/

        // Reference to the page context information
        private get context():any { return window["_spPageContextInfo"]; }

        // The target endpoint of the api
        private endPoint:string;

        // Flag to determine if we are currently in an app web
        private get isAppWeb():boolean { return this.context.isAppWeb; }

        // The target url
        private url:string;

        // The template for the url
        private template:string;

        /*********************************************************************************************************************************/
        // Private Methods
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
    }
}