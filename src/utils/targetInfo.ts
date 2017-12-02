import { ContextInfo } from "../lib";

/**
 * Request Information
 */
export interface IRequestInfo {
    /** The data being sent in the body of the request. */
    data?: object;

    /** The request method (GET/POST) */
    method: string;

    /** The url of the request. */
    url: string;
}

/**
 * Target Information
 */
export interface ITargetInfo {
    /** True if the expected request returns an array buffer. */
    bufferFl?: boolean;

    /** The method to execute after the asynchronous request executes. */
    callback?: () => void;

    /** The data to be passed in the body of the request. */
    data?: any;

    /** True to default the request to the web api, site api otherwise. */
    defaultToWebFl?: boolean;

    /** The endpoint of the request. */
    endpoint?: string;

    /** The method to execute. */
    method?: string;

    /** True to override the default request to host flag. */
    overrideDefaultRequestToHostFl?: boolean;

    /** The request digest to use for the request. */
    requestDigest?: string;

    /** The request header. */
    requestHeader?: object;

    /** The request information. */
    requestInfo?: object;

    /** The url of the site/web to execute the request against. */
    url?: string;
}

/**
 * Target Information
 */
export class TargetInfo {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo: ITargetInfo) {
        // Default the properties
        this.targetInfo = targetInfo || {};
        this.requestData = this.targetInfo.data;
        this.requestHeaders = this.targetInfo.requestHeader;
        this.requestMethod = this.targetInfo.method ? this.targetInfo.method : "GET";

        // Set the request url
        this.setRequestUrl()
    }

    /*********************************************************************************************************************************/
    // Public Properties
    /*********************************************************************************************************************************/

    // Flag to determine if the request returns an array buffer
    get bufferFl(): boolean { return this.targetInfo.bufferFl; }

    // The callback method to execute after the asynchronous request completes
    get callback(): (...args) => void { return this.targetInfo.callback; }

    // Flag to determine if this is a batch request
    get isBatchRequest(): boolean { return this.targetInfo.endpoint == "$batch"; }

    // The request data
    requestData: any;

    // The form digest
    get requestDigest(): string { return this.targetInfo.requestDigest; }

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
    // Private Variables
    /*********************************************************************************************************************************/

    // The target information
    private targetInfo: ITargetInfo;

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
        let endpoint = this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "";
        let hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        let qs = (endpoint.indexOf("?") === -1 ? "?" : "&") + "@target='{{Target}}'";
        let template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";

        // See if we are defaulting the url for the app web
        if (ContextInfo.existsFl && ContextInfo.window.$REST.DefaultRequestToHostFl && ContextInfo.isAppWeb && !this.targetInfo.overrideDefaultRequestToHostFl && this.targetInfo.url == null) {
            // Default the url to the host web
            this.targetInfo.url = hostUrl;
        }

        // Ensure the url exists
        if (this.targetInfo.url == null) {
            // Default the url to the current site/web url
            this.targetInfo.url = this.targetInfo.defaultToWebFl == false ? ContextInfo.siteAbsoluteUrl : ContextInfo.webAbsoluteUrl;
        }
        // Else, see if the url already contains the full request
        else if (/\/_api\//.test(this.targetInfo.url)) {
            // Get the url
            var url = this.targetInfo.url.toLowerCase().split("/_api/");

            // See if this is the app web and we are executing against a different web
            if (ContextInfo.isAppWeb && url[0] != ContextInfo.webAbsoluteUrl.toLowerCase()) {
                // Set the request url
                this.requestUrl = ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" +
                    url[1] + endpoint + qs.replace(/{{Target}}/g, url[0]);
            }
            else {
                // Set the request url
                this.requestUrl = this.targetInfo.url + (this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "");
            }
            return;
        }

        // See if this is a relative url
        if (this.targetInfo.url.indexOf("http") != 0) {
            // Add the domain
            this.targetInfo.url = this.getDomainUrl() + this.targetInfo.url;
        }

        // See if this is the app web, and we are executing against a different web
        if (ContextInfo.isAppWeb && this.targetInfo.url != ContextInfo.webAbsoluteUrl) {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)" + endpoint)
                .replace(/{{TargetUrl}}/g, qs.replace(/{{Target}}/g, this.targetInfo.url));
        } else {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, this.targetInfo.url)
                .replace(/{{EndPoint}}/g, this.targetInfo.endpoint)
                .replace(/{{TargetUrl}}/g, "");
        }
    }
}