"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _1 = require(".");
/**
 * Target Information
 */
var TargetInfo = /** @class */ (function () {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function TargetInfo(targetInfo) {
        // Default the properties
        this.request = targetInfo || {};
        this.requestData = this.request.data;
        this.requestHeaders = this.request.requestHeader;
        this.requestMethod = this.request.method ? this.request.method : "GET";
        // Set the request url
        this.isGraph ? this.setGraphRequestUrl() : this.setRESTRequestUrl();
    }
    Object.defineProperty(TargetInfo.prototype, "isBatchRequest", {
        // Flag to determine if this is a batch request
        get: function () { return this.request.endpoint == "$batch"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetInfo.prototype, "isGraph", {
        // Flag to determine if this is a graph request
        get: function () { return this.request.requestType == _1.RequestType.GraphGet || this.request.requestType == _1.RequestType.GraphPost; },
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
        var url = lib_1.ContextInfo.document ? lib_1.ContextInfo.document.location.href : "";
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
        var queryString = lib_1.ContextInfo.existsFl && lib_1.ContextInfo.document ? lib_1.ContextInfo.document.location.href.split('?') : [""];
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
    // Method to set the request url for the Graph API
    TargetInfo.prototype.setGraphRequestUrl = function () {
        // Return the request url
        this.requestUrl = "https://graph.microsoft.com/" + this.request.endpoint;
    };
    // Method to set the request url for the REST API
    TargetInfo.prototype.setRESTRequestUrl = function () {
        var endpoint = this.request.endpoint ? "/" + this.request.endpoint : "";
        var hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        var qs = (endpoint.indexOf("?") === -1 ? "?" : "&") + "@target='{{Target}}'";
        var template = "{{Url}}" + (this.request.endpoint ? "/_api/{{EndPoint}}{{TargetUrl}}" : "");
        // See if we are defaulting the url for the app web
        if (lib_1.ContextInfo.existsFl && lib_1.ContextInfo.window.$REST && lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl && lib_1.ContextInfo.isAppWeb && !this.request.overrideDefaultRequestToHostFl && this.request.url == null) {
            // Default the url to the host web
            this.request.url = hostUrl;
        }
        // Ensure the url exists
        if (this.request.url == null) {
            // Default the url to the current site/web url
            this.request.url = this.request.defaultToWebFl == false ? lib_1.ContextInfo.siteAbsoluteUrl : lib_1.ContextInfo.webAbsoluteUrl;
        }
        // Else, see if the url already contains the full request
        else if (/\/_api\//.test(this.request.url)) {
            // Get the url
            var url = this.request.url.toLowerCase().split("/_api/");
            // See if this is the app web and we are executing against a different web
            if (lib_1.ContextInfo.isAppWeb && url[0] != lib_1.ContextInfo.webAbsoluteUrl.toLowerCase()) {
                // Set the request url
                this.requestUrl = lib_1.ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" +
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
        if (lib_1.ContextInfo.isAppWeb && this.request.url != lib_1.ContextInfo.webAbsoluteUrl) {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, lib_1.ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)" + endpoint)
                .replace(/{{TargetUrl}}/g, qs.replace(/{{Target}}/g, this.request.url));
        }
        else {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, this.request.url)
                .replace(/{{EndPoint}}/g, this.request.endpoint)
                .replace(/{{TargetUrl}}/g, "");
        }
    };
    return TargetInfo;
}());
exports.TargetInfo = TargetInfo;
