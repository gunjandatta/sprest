System.register(["../lib/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, TargetInfo;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Target Information
            // This class will take the target information and create the request url.
            /*********************************************************************************************************************************/
            TargetInfo = class TargetInfo {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(targetInfo) {
                    // Default the properties
                    this.targetInfo = targetInfo || {};
                    this.requestData = this.targetInfo.data;
                    this.requestHeaders = this.targetInfo.requestHeader;
                    this.requestMethod = this.targetInfo.method ? this.targetInfo.method : "GET";
                    // Set the request url
                    this.setRequestUrl();
                }
                /*********************************************************************************************************************************/
                // Public Properties
                /*********************************************************************************************************************************/
                // Flag to determine if the request returns an array buffer
                get bufferFl() { return this.targetInfo.bufferFl; }
                // The callback method to execute after the asynchronous request completes
                get callback() { return this.targetInfo.callback; }
                // Flag to determine if this is a batch request
                get isBatchRequest() { return this.targetInfo.endpoint == "$batch"; }
                // The form digest
                get requestDigest() { return this.targetInfo.requestDigest; }
                // The request information
                get requestInfo() {
                    // Return the request information
                    return {
                        data: this.requestData,
                        method: this.requestMethod,
                        url: this.requestUrl
                    };
                }
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                // Method to get the domain url
                getDomainUrl() {
                    let url = index_1.ContextInfo.document.location.href;
                    // See if this is an app web
                    if (index_1.ContextInfo.isAppWeb) {
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
                static getQueryStringValue(key) {
                    // Get the query string
                    var queryString = index_1.ContextInfo.existsFl ? index_1.ContextInfo.document.location.href.split('?') : [""];
                    queryString = queryString.length > 1 ? queryString[1] : queryString[0];
                    // Parse the values
                    var values = queryString.split('&');
                    for (var i = 0; i < values.length; i++) {
                        var keyValue = values[i].split('=');
                        // Ensure a value exists
                        if (keyValue.length == 1) {
                            continue;
                        }
                        // See if this is the key we are looking for
                        if (decodeURIComponent(keyValue[0]) == key) {
                            return decodeURIComponent(keyValue[1]);
                        }
                    }
                    // Key was not found
                    return null;
                }
                // Method to set the request url
                setRequestUrl() {
                    let endpoint = this.targetInfo.endpoint ? "/" + this.targetInfo.endpoint : "";
                    let hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
                    let qs = (endpoint.indexOf("?") === -1 ? "?" : "&") + "@target='{{Target}}'";
                    let template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";
                    // See if we are defaulting the url for the app web
                    if (index_1.ContextInfo.existsFl && index_1.ContextInfo.window.$REST.DefaultRequestToHostFl && index_1.ContextInfo.isAppWeb && !this.targetInfo.overrideDefaultRequestToHostFl && this.targetInfo.url == null) {
                        // Default the url to the host web
                        this.targetInfo.url = hostUrl;
                    }
                    // Ensure the url exists
                    if (this.targetInfo.url == null) {
                        // Default the url to the current site/web url
                        this.targetInfo.url = this.targetInfo.defaultToWebFl == false ? index_1.ContextInfo.siteAbsoluteUrl : index_1.ContextInfo.webAbsoluteUrl;
                    }
                    else if (/\/_api\//.test(this.targetInfo.url)) {
                        // Get the url
                        var url = this.targetInfo.url.toLowerCase().split("/_api/");
                        // See if this is the app web and we are executing against a different web
                        if (index_1.ContextInfo.isAppWeb && url[0] != index_1.ContextInfo.webAbsoluteUrl.toLowerCase()) {
                            // Set the request url
                            this.requestUrl = index_1.ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" +
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
                    if (index_1.ContextInfo.isAppWeb && this.targetInfo.url != index_1.ContextInfo.webAbsoluteUrl) {
                        // Set the request url
                        this.requestUrl = template
                            .replace(/{{Url}}/g, index_1.ContextInfo.webAbsoluteUrl)
                            .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)" + endpoint)
                            .replace(/{{TargetUrl}}/g, qs.replace(/{{Target}}/g, this.targetInfo.url));
                    }
                    else {
                        // Set the request url
                        this.requestUrl = template
                            .replace(/{{Url}}/g, this.targetInfo.url)
                            .replace(/{{EndPoint}}/g, this.targetInfo.endpoint)
                            .replace(/{{TargetUrl}}/g, "");
                    }
                }
            };
            exports_1("TargetInfo", TargetInfo);
        }
    };
});
//# sourceMappingURL=targetInfo.js.map