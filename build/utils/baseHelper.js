"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var mapper_1 = require("../mapper");
var _1 = require(".");
var BaseHelper = (function () {
    function BaseHelper() {
    }
    BaseHelper.prototype.addMethods = function (base, data) {
        var isCollection = data.results && data.results.length > 0;
        var metadata = isCollection ? data.results[0].__metadata : data.__metadata;
        var objType = metadata && metadata.type ? metadata.type : base.targetInfo.endpoint;
        objType = objType.split('/');
        objType = (objType[objType.length - 1]);
        objType = objType.split('.');
        objType = (objType[objType.length - 1]).toLowerCase();
        objType += isCollection ? "s" : "";
        if ((/^field/.test(objType) || /fields?$/.test(objType)) && objType != "fieldlinks" && objType != "fields") {
            objType = "field" + (isCollection ? "s" : "");
        }
        else if (/item$/.test(objType)) {
            objType = "listitem";
        }
        else if (/items$/.test(objType)) {
            objType = "items";
        }
        else if (/corporatecatalogappmetadata/.test(objType)) {
            objType = "tenantapp";
        }
        else if (/corporatecatalogappmetadatas/.test(objType)) {
            objType = "tenantapps";
        }
        var methods = mapper_1.Mapper[objType];
        if (methods) {
            for (var methodName in methods) {
                var methodInfo = methods[methodName] ? methods[methodName] : {};
                if (methodName == "properties") {
                    for (var _i = 0, methodInfo_1 = methodInfo; _i < methodInfo_1.length; _i++) {
                        var property = methodInfo_1[_i];
                        var propInfo = property.split("|");
                        var propName = propInfo[0];
                        var propType = propInfo.length > 1 ? propInfo[1] : null;
                        var subPropName = propInfo.length > 2 ? propInfo[2] : null;
                        var subPropType = propInfo.length > 3 ? propInfo[3] : null;
                        if (base[propName] == null || (base[propName].__deferred && base[propName].__deferred.uri)) {
                            if (propInfo.length == 4) {
                                subPropName = subPropName.replace(/'/g, "\\'");
                                base[propName] = new Function("name", "name = name ? '" + propName + subPropName + "'.replace(/\\[Name\\]/g, name) : null;" +
                                    "return this.getProperty(name ? name : '" + propName + "', name ? '" + subPropType + "' : '" + propType + "');");
                            }
                            else {
                                base[propName] = new Function("return this.getProperty('" + propName + "', '" + propType + "');");
                            }
                        }
                    }
                    continue;
                }
                if (typeof (methodInfo.metadataType) === "function") {
                    methodInfo = JSON.parse(JSON.stringify(methodInfo));
                    methodInfo.metadataType = methods[methodName].metadataType(base);
                }
                base[methodName] = new Function("return this.executeMethod('" + methodName + "', " + JSON.stringify(methodInfo) + ", arguments);");
            }
        }
    };
    BaseHelper.prototype.addProperties = function (base, data) {
        for (var key in data) {
            var value = data[key];
            if (key == "__metadata" || key == "results") {
                continue;
            }
            if (value && value.__deferred && value.__deferred.uri) {
                base["get_" + key] = base["get_" + key] ? base["get_" + key] : new Function("return this.getCollection('" + key + "', arguments);");
            }
            else {
                switch (key) {
                    case "ClientPeoplePickerResolveUser":
                    case "ClientPeoplePickerSearchUser":
                        base[key] = JSON.parse(value);
                        break;
                    default:
                        base[key] = value;
                        break;
                }
                if (base[key] && base[key].results) {
                    if (base[key].results.length == 0 || typeof (base[key].results[0]) === "object") {
                        var objCollection = new _1.Base(base.targetInfo);
                        objCollection["results"] = base[key].results;
                        if (objCollection["results"].length == 0) {
                            objCollection["__metadata"] = { type: key };
                        }
                        objCollection.targetInfo.endpoint = (objCollection.targetInfo.endpoint.split("?")[0] + "/" + key).replace(/\//g, "/");
                        base.addMethods(objCollection, objCollection);
                        base.updateDataCollection(base, objCollection["results"]);
                        base[key] = objCollection;
                    }
                }
            }
        }
    };
    BaseHelper.prototype.updateDataCollection = function (obj, results) {
        if (results) {
            obj["results"] = obj["results"] ? obj["results"].concat(results) : results;
            if (obj["results"].length > 0) {
                var results_1 = obj["results"];
                for (var _i = 0, results_2 = results_1; _i < results_2.length; _i++) {
                    var result = results_2[_i];
                    result["addMethods"] = obj.addMethods;
                    result["base"] = obj.base;
                    result["done"] = obj.done;
                    result["execute"] = obj.execute;
                    result["executeAndWait"] = obj.executeAndWait;
                    result["executeMethod"] = obj.executeMethod;
                    result["existsFl"] = true;
                    result["getProperty"] = obj.getProperty;
                    result["parent"] = obj;
                    result["targetInfo"] = obj.targetInfo;
                    result["updateMetadataUri"] = obj.updateMetadataUri;
                    result["waitForRequestsToComplete"] = obj.waitForRequestsToComplete;
                    this.updateMetadata(obj, result);
                    this.addMethods(result, result);
                }
            }
        }
    };
    BaseHelper.prototype.updateDataObject = function (isBatchRequest) {
        if (this.status >= 200 && this.status < 300) {
            if (this.requestType == _1.RequestType.GetBuffer) {
                return;
            }
            var batchIdx = 0;
            var batchRequestIdx = 0;
            var responses = isBatchRequest ? this.response.split("\n") : [this.response];
            for (var i = 0; i < responses.length; i++) {
                var data = null;
                var response = responses[i];
                response = response === "" && !isBatchRequest ? "{}" : response;
                try {
                    data = isBatchRequest && response.indexOf("<?xml") == 0 ? response : JSON.parse(response);
                }
                catch (ex) {
                    continue;
                }
                var obj = isBatchRequest ? Object.create(this) : this;
                obj["existsFl"] = typeof (obj["Exists"]) === "boolean" ? obj["Exists"] : data.error == null;
                if (data.d) {
                    obj["d"] = data.d;
                    this.updateMetadata(obj, data.d);
                    this.addProperties(obj, data.d);
                    this.addMethods(obj, data.d);
                    this.updateDataCollection(obj, data.d.results);
                }
                if (isBatchRequest) {
                    var batchRequest = this.base.batchRequests[batchIdx][batchRequestIdx++];
                    if (batchRequest == null) {
                        batchIdx++;
                        batchRequestIdx = 0;
                        batchRequest = this.base.batchRequests[batchIdx][batchRequestIdx++];
                    }
                    if (batchRequest) {
                        batchRequest.response = typeof (data) === "string" ? data : obj;
                        batchRequest.callback ? batchRequest.callback(batchRequest.response) : null;
                    }
                }
            }
            if (isBatchRequest) {
                this.base.batchRequests = null;
            }
        }
    };
    BaseHelper.prototype.updateMetadata = function (base, data) {
        if (!lib_1.ContextInfo.isAppWeb) {
            return;
        }
        var hostUrl = lib_1.ContextInfo.webAbsoluteUrl.toLowerCase();
        var requestUrl = data && data.__metadata && data.__metadata.uri ? data.__metadata.uri.toLowerCase() : null;
        var targetUrl = base.targetInfo && base.targetInfo.url ? base.targetInfo.url.toLowerCase() : null;
        if (hostUrl == null || requestUrl == null || targetUrl == null) {
            return;
        }
        if (targetUrl.indexOf(hostUrl) == 0) {
            return;
        }
        data.__metadata.uri = requestUrl.replace(hostUrl, targetUrl);
    };
    return BaseHelper;
}());
exports.BaseHelper = BaseHelper;
//# sourceMappingURL=baseHelper.js.map