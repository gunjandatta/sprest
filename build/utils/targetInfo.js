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
    function TargetInfo(props) {
        // Default the properties
        this.props = props || {};
        this.requestData = this.props.data;
        this.requestHeaders = this.props.requestHeader;
        this.requestMethod = this.props.method ? this.props.method : "GET";
        // Set the request url
        this.isGraph ? this.setGraphRequestUrl() : this.setRESTRequestUrl();
    }
    Object.defineProperty(TargetInfo.prototype, "isBatchRequest", {
        // Flag to determine if this is a batch request
        get: function () { return this.props.endpoint == "$batch"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetInfo.prototype, "isGraph", {
        // Flag to determine if this is a graph request
        get: function () { return this.props.requestType == _1.RequestType.GraphGet || this.props.requestType == _1.RequestType.GraphPost; },
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
        this.requestUrl = "https://graph.microsoft.com/" + this.props.endpoint;
    };
    // Method to set the request url for the REST API
    TargetInfo.prototype.setRESTRequestUrl = function () {
        var endpoint = this.props.endpoint ? "/" + this.props.endpoint : "";
        var hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        var qs = (endpoint.indexOf("?") === -1 ? "?" : "&") + "@target='{{Target}}'";
        var template = "{{Url}}" + (this.props.endpoint ? "/_api/{{EndPoint}}{{TargetUrl}}" : "");
        // See if we are defaulting the url for the app web
        if (lib_1.ContextInfo.existsFl && lib_1.ContextInfo.window.$REST && lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl && lib_1.ContextInfo.isAppWeb && !this.props.overrideDefaultRequestToHostFl && this.props.url == null) {
            // Default the url to the host web
            this.props.url = hostUrl;
        }
        // Ensure the url exists
        if (this.props.url == null) {
            // Default the url to the current site/web url
            this.props.url = this.props.defaultToWebFl == false ? lib_1.ContextInfo.siteAbsoluteUrl : lib_1.ContextInfo.webAbsoluteUrl;
        }
        // Else, see if the url already contains the full request
        else if (/\/_api\//.test(this.props.url)) {
            // Get the url
            var url = this.props.url.toLowerCase().split("/_api/");
            // See if this is the app web and we are executing against a different web
            if (lib_1.ContextInfo.isAppWeb && url[0] != lib_1.ContextInfo.webAbsoluteUrl.toLowerCase()) {
                // Set the request url
                this.requestUrl = lib_1.ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" +
                    url[1] + endpoint + qs.replace(/{{Target}}/g, url[0]);
            }
            else {
                // Set the request url
                this.requestUrl = this.props.url + (this.props.endpoint ? "/" + this.props.endpoint : "");
            }
            return;
        }
        // See if this is a relative url
        if (this.props.url.indexOf("http") != 0) {
            // Add the domain
            this.props.url = this.getDomainUrl() + this.props.url;
        }
        // See if this is the app web, and we are executing against a different web
        if (lib_1.ContextInfo.isAppWeb && this.props.url != lib_1.ContextInfo.webAbsoluteUrl) {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, lib_1.ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)" + endpoint)
                .replace(/{{TargetUrl}}/g, qs.replace(/{{Target}}/g, this.props.url));
        }
        else {
            // Set the request url
            this.requestUrl = template
                .replace(/{{Url}}/g, this.props.url)
                .replace(/{{EndPoint}}/g, this.props.endpoint)
                .replace(/{{TargetUrl}}/g, "");
        }
    };
    return TargetInfo;
}());
exports.TargetInfo = TargetInfo;
