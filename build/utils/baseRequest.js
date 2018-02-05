"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var BaseRequest = (function (_super) {
    __extends(BaseRequest, _super);
    function BaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseRequest.prototype.executeMethod = function (methodName, methodConfig, args) {
        var targetInfo = null;
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            targetInfo = {
                url: metadata.uri
            };
            if (methodConfig.inheritMetadataType) {
                methodConfig.metadataType = metadata.type;
            }
            this.updateMetadataUri(metadata, targetInfo);
        }
        else {
            targetInfo = Object.create(this.targetInfo);
        }
        var methodInfo = new _1.MethodInfo(methodName, methodConfig, args);
        targetInfo.bufferFl = methodConfig.requestType == _1.RequestType.GetBuffer;
        targetInfo.data = methodInfo.body;
        targetInfo.defaultToWebFl = this.base.targetInfo.defaultToWebFl;
        targetInfo.method = methodInfo.requestMethod;
        if (methodInfo.replaceEndpointFl) {
            targetInfo.endpoint = methodInfo.url;
        }
        else if (methodInfo.url && methodInfo.url.length > 0) {
            targetInfo.endpoint = targetInfo.endpoint ? targetInfo.endpoint : "";
            if (targetInfo.endpoint && methodInfo.url && methodInfo.url.indexOf("?") != 0) {
                targetInfo.endpoint += "/";
            }
            targetInfo.endpoint += methodInfo.url;
        }
        var obj = new _1.Base(targetInfo);
        obj.base = this.base ? this.base : this;
        obj.getAllItemsFl = methodInfo.getAllItemsFl;
        obj.parent = this;
        obj.requestType = methodConfig.requestType;
        if (methodConfig.returnType) {
            this.addMethods(obj, { __metadata: { type: methodConfig.returnType } });
        }
        return obj;
    };
    BaseRequest.prototype.executeRequest = function (asyncFl, callback) {
        var _this = this;
        var isBatchRequest = this.base && this.base.batchRequests && this.base.batchRequests.length > 0;
        var targetInfo = isBatchRequest ? _1.Batch.getTargetInfo(this.base.batchRequests) : new _1.TargetInfo(this.targetInfo);
        if (asyncFl) {
            if (this.xhr && !isBatchRequest) {
                callback ? callback(this) : null;
            }
            else {
                this.xhr = new _1.XHRRequest(asyncFl, targetInfo, function () {
                    _this.response = _this.xhr.response;
                    _this.status = _this.xhr.status;
                    if (_this.requestType == _1.RequestType.GetBuffer) {
                        callback ? callback(_this.response) : null;
                    }
                    else {
                        _this.updateDataObject(isBatchRequest);
                        isBatchRequest ? null : _this.validateDataCollectionResults().then(function () {
                            callback ? callback(_this) : null;
                        });
                    }
                });
            }
        }
        else if (this.xhr) {
            return this;
        }
        else {
            this.xhr = new _1.XHRRequest(asyncFl, targetInfo);
            this.response = this.xhr.response;
            this.status = this.xhr.status;
            if (this.requestType == _1.RequestType.GetBuffer) {
                return this.response;
            }
            this.updateDataObject(isBatchRequest);
            if (this["d"] && this["d"].__next) {
                this["next"] = new Function("return this.getNextSetOfResults();");
            }
            return this;
        }
    };
    BaseRequest.prototype.getCollection = function (method, args) {
        var targetInfo = Object.create(this.targetInfo);
        targetInfo.data = null;
        targetInfo.method = null;
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            targetInfo.url = metadata.uri;
            this.updateMetadataUri(metadata, targetInfo);
            targetInfo.endpoint = method;
        }
        else {
            targetInfo.endpoint += "/" + method;
        }
        targetInfo.callback = args && typeof (args[0]) === "function" ? args[0] : null;
        var obj = new _1.Base(targetInfo);
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        return obj;
    };
    BaseRequest.prototype.getNextSetOfResults = function () {
        var targetInfo = Object.create(this.targetInfo);
        targetInfo.endpoint = "";
        targetInfo.url = this["d"].__next;
        var obj = new _1.Base(targetInfo);
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        return obj;
    };
    BaseRequest.prototype.getProperty = function (propertyName, requestType) {
        var targetInfo = Object.create(this.targetInfo);
        targetInfo.data = null;
        targetInfo.method = null;
        var metadata = this["d"] ? this["d"].__metadata : this["__metadata"];
        if (metadata && metadata.uri) {
            targetInfo.url = metadata.uri;
            this.updateMetadataUri(metadata, targetInfo);
            targetInfo.endpoint = propertyName;
        }
        else {
            targetInfo.endpoint += "/" + propertyName;
        }
        var obj = new _1.Base(targetInfo);
        obj.base = this.base ? this.base : this;
        obj.parent = this;
        requestType ? this.addMethods(obj, { __metadata: { type: requestType } }) : null;
        return obj;
    };
    BaseRequest.prototype.updateMetadataUri = function (metadata, targetInfo) {
        if (/^SP.Field/.test(metadata.type) || /^SP\..*Field$/.test(metadata.type)) {
            targetInfo.url = targetInfo.url.replace(/AvailableFields/, "fields");
        }
        else if (/SP.EventReceiverDefinition/.test(metadata.type)) {
            targetInfo.url = targetInfo.url.replace(/\/EventReceiver\//, "/EventReceivers/");
        }
        else if (/Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata/.test(targetInfo.url)) {
            targetInfo.url = targetInfo.url.split("Microsoft.SharePoint.Marketplace.CorporateCuratedGallery.CorporateCatalogAppMetadata")[0] + "web/tenantappcatalog/availableapps/getbyid('" + this["ID"] + "')";
        }
    };
    BaseRequest.prototype.validateDataCollectionResults = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = function (xhr, resolve) {
                if (xhr && xhr.status < 400 && typeof (xhr.response) === "string" && xhr.response.length > 0) {
                    var data = JSON.parse(xhr.response);
                    if (data.d && data.d.__next) {
                        if (_this.getAllItemsFl) {
                            var targetInfo = Object.create(_this.targetInfo);
                            targetInfo.endpoint = "";
                            targetInfo.url = data.d.__next;
                            new _1.XHRRequest(true, new _1.TargetInfo(targetInfo), function (xhr) {
                                var data = JSON.parse(xhr.response);
                                if (data.d) {
                                    _this.updateDataCollection(_this, data.d.results);
                                    _this["d"].results = _this["d"].results.concat(data.d.results);
                                    request(xhr, resolve);
                                }
                                resolve();
                            });
                        }
                        else {
                            _this["next"] = new Function("return this.getNextSetOfResults();");
                            resolve();
                        }
                    }
                    else {
                        resolve();
                    }
                }
                else {
                    resolve();
                }
            };
            request(_this.xhr, resolve);
        });
    };
    return BaseRequest;
}(_1.BaseHelper));
exports.BaseRequest = BaseRequest;
//# sourceMappingURL=baseRequest.js.map