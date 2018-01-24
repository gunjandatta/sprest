import { ContextInfo } from "../lib";
import { IRequestInfo, ITargetInfo } from ".";

/**
 * Target Information
 */
export class TargetInfo {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo: ITargetInfo) {
        // Default the properties
        this.request = targetInfo || {};
        this.requestData = this.request.data;
        this.requestHeaders = this.request.requestHeader;
        this.requestMethod = this.request.method ? this.request.method : "GET";

        // Set the request url
        this.setRequestUrl()
    }

    /*********************************************************************************************************************************/
    // Public Properties
    /*********************************************************************************************************************************/

    // The target information
    request: ITargetInfo;

    // Flag to determine if this is a batch request
    get isBatchRequest(): boolean { return this.request.endpoint == "$batch"; }

    // The request data
    requestData: any;

    // The request information
    get requestInfo(): IRequestInfo {
        // Return the request information
        return {
            data: this.requestData,
            method: this.requestMethod,
            url: this.requestUrl
        };
    }

    // The request header
    requestHeaders: object;

    // The request method
    requestMethod: string;

    // The request url
    requestUrl: string;

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to get the domain url
    private getDomainUrl(): string {
        let url: any = ContextInfo.document.location.href;

        // See if this is an app web
        if (ContextInfo.isAppWeb) {
            // Set the url to the host url
            url = TargetInfo.getQueryStringValue("SPHostUrl") + "";
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
    private static getQueryStringValue(key: string) {
        // Get the query string
        var queryString: any = ContextInfo.existsFl ? ContextInfo.document.location.href.split('?') : [""];
        queryString = queryString.length > 1 ? queryString[1] : queryString[0];

        // Parse the values
        var values = queryString.split('&');
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
        let endpoint = this.request.endpoint ? "/" + this.request.endpoint : "";
        let hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        let qs = (endpoint.indexOf("?") === -1 ? "?" : "&") + "@target='{{Target}}'";
        let template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";

        // See if we are defaulting the url for the app web
        if (ContextInfo.existsFl && ContextInfo.window.$REST.DefaultRequestToHostFl && ContextInfo.isAppWeb && !this.request.overrideDefaultRequestToHostFl && this.request.url == null) {
            // Default the url to the host web
            this.request.url = hostUrl;
        }

        // Ensure the url exists
        if (this.request.url == null) {
            // Default the url to the current site/web url
            this.request.url = this.request.defaultToWebFl == false ? ContextInfo.siteAbsoluteUrl : ContextInfo.webAbsoluteUrl;
        }
        // Else, see if the url already contains the full request
        else if (/\/_api\//.test(this.request.url)) {
            // Get the url
            var url = this.request.url.toLowerCase().split("/_api/");

            // See if this is the app web and we are executing against a different web
            if (ContextInfo.isAppWeb && url[0] != ContextInfo.webAbsoluteUrl.toLowerCase()) {
                // Set the request url
                this.requestUrl = ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" +
                    url[1] + endpoint + qs.replace(/{{Target}}/g, url[0]);
            }
            else {
                // Set the request url
                this.requestUrl = this.request.url + (this.request.endpoint ? "/" + this.request.endpoint : "");
            }
            return;
        }

        // See if this is a relative url
        if (this.request.url.indexOf("http") != 0) {
            // Add the domain
            this.request.url = this.getDomainUrl() + this.request.url;
        }

        // See if this is the app web, and we are executing against a different web
        if (ContextInfo.isAppWeb && this.request.url != ContextInfo.webAbsoluteUrl) {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)" + endpoint)
                .replace(/{{TargetUrl}}/g, qs.replace(/{{Target}}/g, this.request.url));
        } else {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, this.request.url)
                .replace(/{{EndPoint}}/g, this.request.endpoint)
                .replace(/{{TargetUrl}}/g, "");
        }
    }
}