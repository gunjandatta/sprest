"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var TargetInfo = (function () {
    function TargetInfo(targetInfo) {
        this.request = targetInfo || {};
        this.requestData = this.request.data;
        this.requestHeaders = this.request.requestHeader;
        this.requestMethod = this.request.method ? this.request.method : "GET";
        this.setRequestUrl();
    }
    Object.defineProperty(TargetInfo.prototype, "isBatchRequest", {
        get: function () { return this.request.endpoint == "$batch"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetInfo.prototype, "requestInfo", {
        get: function () {
            return {
                data: this.requestData,
                method: this.requestMethod,
                url: this.requestUrl
            };
        },
        enumerable: true,
        configurable: true
    });
    TargetInfo.prototype.getDomainUrl = function () {
        var url = lib_1.ContextInfo.document.location.href;
        if (lib_1.ContextInfo.isAppWeb) {
            url = TargetInfo.getQueryStringValue("SPHostUrl") + "";
        }
        url = url.split('/');
        if (url && url.length >= 2) {
            url = url[0] + "//" + url[2];
        }
        return url;
    };
    TargetInfo.getQueryStringValue = function (key) {
        var queryString = lib_1.ContextInfo.existsFl ? lib_1.ContextInfo.document.location.href.split('?') : [""];
        queryString = queryString.length > 1 ? queryString[1] : queryString[0];
        var values = queryString.split('&');
        for (var i = 0; i < values.length; i++) {
            var keyValue = values[i].split('=');
            if (keyValue.length == 1) {
                continue;
            }
            if (decodeURIComponent(keyValue[0]) == key) {
                return decodeURIComponent(keyValue[1]);
            }
        }
        return null;
    };
    TargetInfo.prototype.setRequestUrl = function () {
        var endpoint = this.request.endpoint ? "/" + this.request.endpoint : "";
        var hostUrl = TargetInfo.getQueryStringValue("SPHostUrl");
        var qs = (endpoint.indexOf("?") === -1 ? "?" : "&") + "@target='{{Target}}'";
        var template = "{{Url}}/_api/{{EndPoint}}{{TargetUrl}}";
        if (lib_1.ContextInfo.existsFl && lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl && lib_1.ContextInfo.isAppWeb && !this.request.overrideDefaultRequestToHostFl && this.request.url == null) {
            this.request.url = hostUrl;
        }
        if (this.request.url == null) {
            this.request.url = this.request.defaultToWebFl == false ? lib_1.ContextInfo.siteAbsoluteUrl : lib_1.ContextInfo.webAbsoluteUrl;
        }
        else if (/\/_api\//.test(this.request.url)) {
            var url = this.request.url.toLowerCase().split("/_api/");
            if (lib_1.ContextInfo.isAppWeb && url[0] != lib_1.ContextInfo.webAbsoluteUrl.toLowerCase()) {
                this.requestUrl = lib_1.ContextInfo.webAbsoluteUrl + "/_api/SP.AppContextSite(@target)/" +
                    url[1] + endpoint + qs.replace(/{{Target}}/g, url[0]);
            }
            else {
                this.requestUrl = this.request.url + (this.request.endpoint ? "/" + this.request.endpoint : "");
            }
            return;
        }
        if (this.request.url.indexOf("http") != 0) {
            this.request.url = this.getDomainUrl() + this.request.url;
        }
        if (lib_1.ContextInfo.isAppWeb && this.request.url != lib_1.ContextInfo.webAbsoluteUrl) {
            this.requestUrl = template
                .replace(/{{Url}}/g, lib_1.ContextInfo.webAbsoluteUrl)
                .replace(/{{EndPoint}}/g, "SP.AppContextSite(@target)" + endpoint)
                .replace(/{{TargetUrl}}/g, qs.replace(/{{Target}}/g, this.request.url));
        }
        else {
            this.requestUrl = template
                .replace(/{{Url}}/g, this.request.url)
                .replace(/{{EndPoint}}/g, this.request.endpoint)
                .replace(/{{TargetUrl}}/g, "");
        }
    };
    return TargetInfo;
}());
exports.TargetInfo = TargetInfo;
//# sourceMappingURL=targetInfo.js.map