"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var XHRRequest = (function () {
    function XHRRequest(asyncFl, targetInfo, callback) {
        this.asyncFl = asyncFl;
        this.onRequestCompleted = callback || targetInfo.request.callback;
        this.targetInfo = targetInfo;
        this.xhr = this.createXHR();
        this.execute();
    }
    Object.defineProperty(XHRRequest.prototype, "completedFl", {
        get: function () { return this.xhr ? this.xhr.readyState == 4 : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "response", {
        get: function () { return this.xhr ? this.xhr.response : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "request", {
        get: function () { return this.xhr ? this.xhr : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "requestData", {
        get: function () { return this.targetInfo.requestData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "requestUrl", {
        get: function () { return this.xhr ? this.xhr.responseURL : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XHRRequest.prototype, "status", {
        get: function () { return this.xhr ? this.xhr.status : null; },
        enumerable: true,
        configurable: true
    });
    XHRRequest.prototype.createXHR = function () {
        if (typeof (XMLHttpRequest) !== "undefined") {
            return new XMLHttpRequest();
        }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
        catch (e) { }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        }
        catch (e) { }
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) { }
        throw new Error("This browser does not support xml http requests.");
    };
    XHRRequest.prototype.defaultHeaders = function () {
        if (this.targetInfo.requestHeaders) {
            for (var header in this.targetInfo.requestHeaders) {
                this.xhr.setRequestHeader(header, this.targetInfo.requestHeaders[header]);
            }
        }
        else {
            this.xhr.setRequestHeader("Accept", "application/json;odata=verbose");
            this.xhr.setRequestHeader("Content-Type", "application/json;odata=verbose");
        }
        this.xhr.setRequestHeader("X-HTTP-Method", this.targetInfo.requestMethod);
        if (this.targetInfo.request.requestDigest) {
            this.xhr.setRequestHeader("X-RequestDigest", this.targetInfo.request.requestDigest);
        }
        else {
            var requestDigest = lib_1.ContextInfo.document.querySelector("#__REQUESTDIGEST");
            requestDigest = requestDigest ? requestDigest.value : "";
            this.xhr.setRequestHeader("X-RequestDigest", requestDigest);
        }
        if (this.targetInfo.requestMethod == "DELETE" || this.targetInfo.requestMethod == "MERGE") {
            this.xhr.setRequestHeader("IF-MATCH", "*");
        }
    };
    XHRRequest.prototype.execute = function () {
        var _this = this;
        if (this.xhr == null) {
            return null;
        }
        this.xhr.open(this.targetInfo.requestMethod == "GET" ? "GET" : "POST", this.targetInfo.requestUrl, this.asyncFl);
        if (this.asyncFl) {
            this.xhr.onreadystatechange = function () {
                if (_this.xhr.readyState == 4) {
                    _this.onRequestCompleted ? _this.onRequestCompleted(_this) : null;
                }
            };
        }
        if (this.targetInfo.request.bufferFl && this.asyncFl) {
            this.xhr.responseType = "arraybuffer";
        }
        else {
            this.defaultHeaders();
            if (this.targetInfo.requestData && typeof (this.targetInfo.requestData) !== "string") {
                this.targetInfo.requestData = this.targetInfo.requestData.byteLength ? this.targetInfo.requestData : JSON.stringify(this.targetInfo.requestData);
            }
        }
        this.targetInfo.request.bufferFl || this.targetInfo.requestData == null ? this.xhr.send() : this.xhr.send(this.targetInfo.requestData);
    };
    return XHRRequest;
}());
exports.XHRRequest = XHRRequest;
//# sourceMappingURL=xhrRequest.js.map