"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
/*********************************************************************************************************************************/
// Target Information
// This class will take the target information and create the request url.
/*********************************************************************************************************************************/
var TargetInfo = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function TargetInfo(targetInfo) {
        // Default the properties
        this.targetInfo = targetInfo || {};
        this.requestData = this.targetInfo.data;
        this.requestMethod = this.targetInfo.method ? this.targetInfo.method : "GET";
        // Set the request url
        this.setRequestUrl();
    }
    Object.defineProperty(TargetInfo.prototype, "bufferFl", {
        /*********************************************************************************************************************************/
        // Public Properties
        /*********************************************************************************************************************************/
        // Flag to determine if the request returns an array buffer
        get: function () { return this.targetInfo.bufferFl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetInfo.prototype, "callback", {
        // The callback method to execute after the asynchronous request completes
        get: function () { return this.targetInfo.callback; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetInfo.prototype, "requestDigest", {
        // The form digest
        get: function () { return this.targetInfo.requestDigest; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetInfo.prototype, "requestInfo", {
        // The request information
        get: function () {
            // Return the request information
            return {
                data: this.requestData,
                method: this.requestMethod,
                url: this.requestUrl
            };
        },
        enumerable: true,
        configurable: true
    });
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to get the domain url
    TargetInfo.prototype.getDomainUrl = function () {
        var url = lib_1.ContextInfo.document.location.href;
        // See if this is an app web
        if (lib_1.ContextInfo.isAppWeb) {
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
    };
    // Method to get a query string value
    TargetInfo.getQueryStringValue = function (key) {
        // Get the query string
        var queryString = lib_1.ContextInfo.existsFl ? lib_1.ContextInfo.document.location.href.split('?') : [""];
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
    };
    // Method to set the request url
    TargetInfo.prototype.setRequestUrl = function () {
        var hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        var template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";
        // See if we are defaulting the url for the app web
        if (lib_1.ContextInfo.existsFl && lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl && lib_1.ContextInfo.isAppWeb && this.targetInfo.url == null) {
            // Default the url to the host web
            this.targetInfo.url = hostUrl;
        }
        // Ensure the url exists
        if (this.targetInfo.url == null) {
            // Default the url to the current site/web url
            this.targetInfo.url = this.targetInfo.defaultToWebFl == false ? lib_1.ContextInfo.siteAbsoluteUrl : lib_1.ContextInfo.webAbsoluteUrl;
        }
        else if (/\/_api\//.test(this.targetInfo.url)) {
            // Get the url
            var url = this.targetInfo.url.toLowerCase().split("/_api/");
            // See if this is the app web and we are executing against a different web
            if (lib_1.ContextInfo.isAppWeb && url[0] != lib_1.ContextInfo.webAbsoluteUrl.toLowerCase()) {
                // Set the request url
                this.requestUrl = lib_1.ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" + url[1] +
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
        if (this.targetInfo.url.indexOf("http") != 0) {
            // Add the domain
            this.targetInfo.url = this.getDomainUrl() + this.targetInfo.url;
        }
        // See if this is the app web, and we are executing against a different web
        if (lib_1.ContextInfo.isAppWeb && this.targetInfo.url != lib_1.ContextInfo.webAbsoluteUrl) {
            // Append the start character for the query string
            var endpoint = this.targetInfo.endpoint +
                (this.targetInfo.endpoint.indexOf("?") > 0 ? "&" : "?");
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, lib_1.ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)/" + endpoint)
                .replace(/{{TargetUrl}}/g, "@target='" + this.targetInfo.url + "'");
        }
        else {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, this.targetInfo.url)
                .replace(/{{EndPoint}}/g, this.targetInfo.endpoint)
                .replace(/{{TargetUrl}}/g, "");
        }
    };
    return TargetInfo;
}());
exports.TargetInfo = TargetInfo;
//# sourceMappingURL=targetInfo.js.map