"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var MethodInfo = (function () {
    function MethodInfo(methodName, methodInfo, args) {
        this.methodInfo = methodInfo;
        this.methodInfo.argValues = args;
        this.methodInfo.name = typeof (this.methodInfo.name) === "string" ? this.methodInfo.name : methodName;
        this.generateParams();
        this.methodUrl = this.generateUrl();
    }
    Object.defineProperty(MethodInfo.prototype, "body", {
        get: function () { return this.methodData; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "getAllItemsFl", {
        get: function () { return this.methodInfo.getAllItemsFl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "replaceEndpointFl", {
        get: function () { return this.methodInfo.replaceEndpointFl ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "requestMethod", {
        get: function () {
            if (typeof (this.methodInfo.requestMethod) === "string") {
                return this.methodInfo.requestMethod;
            }
            switch (this.methodInfo.requestType) {
                case _1.RequestType.Delete:
                case _1.RequestType.Post:
                case _1.RequestType.PostWithArgs:
                case _1.RequestType.PostWithArgsInBody:
                case _1.RequestType.PostWithArgsInQS:
                case _1.RequestType.PostWithArgsValueOnly:
                case _1.RequestType.PostReplace:
                    return "POST";
                default:
                    return "GET";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "url", {
        get: function () { return this.methodUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "passDataInBody", {
        get: function () { return this.methodInfo.requestType == _1.RequestType.GetWithArgsInBody || this.methodInfo.requestType == _1.RequestType.PostWithArgsInBody; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "passDataInQS", {
        get: function () { return this.methodInfo.requestType == _1.RequestType.GetWithArgsInQS || this.methodInfo.requestType == _1.RequestType.PostWithArgsInQS; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "isTemplate", {
        get: function () { return this.methodInfo.data ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MethodInfo.prototype, "replace", {
        get: function () { return this.methodInfo.requestType == _1.RequestType.GetReplace || this.methodInfo.requestType == _1.RequestType.PostReplace; },
        enumerable: true,
        configurable: true
    });
    MethodInfo.prototype.generateParams = function () {
        var params = {};
        if (this.methodInfo.argValues == null) {
            return;
        }
        if (this.methodInfo.argNames) {
            for (var i = 0; i < this.methodInfo.argNames.length && i < this.methodInfo.argValues.length; i++) {
                var name_1 = this.methodInfo.argNames[i];
                var value = this.methodInfo.argValues[i];
                switch (typeof (this.methodInfo.argValues[i])) {
                    case "boolean":
                        params[name_1] = this.methodInfo.argValues[i] ? "true" : "false";
                        break;
                    case "number":
                        params[name_1] = this.methodInfo.argValues[i];
                        break;
                    default:
                        params[name_1] = value;
                        break;
                }
            }
        }
        var isEmpty = true;
        for (var k in params) {
            isEmpty = false;
            break;
        }
        this.methodParams = isEmpty ? null : params;
        if (this.methodParams) {
            if (this.isTemplate) {
                if (typeof (this.methodInfo.data) !== "string") {
                    this.methodInfo.data = JSON.stringify(this.methodInfo.data);
                }
                for (var key in this.methodParams) {
                    this.methodInfo.data = this.methodInfo.data.replace("[[" + key + "]]", this.methodParams[key].replace(/"/g, '\\"').replace(/\n/g, ""));
                }
                this.methodData = JSON.parse(this.methodInfo.data);
            }
        }
        if (this.methodInfo.argValues && this.methodInfo.argValues.length > 0) {
            if (this.methodInfo.argNames == null) {
                this.methodData = this.methodInfo.argValues[0];
            }
            else if (this.methodInfo.argValues.length > this.methodInfo.argNames.length) {
                this.methodData = this.methodInfo.argValues[this.methodInfo.argNames.length];
            }
        }
        if (this.methodInfo.metadataType) {
            if (this.methodInfo.argNames) {
                (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] =
                    (this.methodData || this.methodParams)[this.methodInfo.argNames[0]]["__metadata"] || { "type": this.methodInfo.metadataType };
            }
            else {
                (this.methodData || this.methodParams)["__metadata"] =
                    (this.methodData || this.methodParams)["__metadata"] || { "type": this.methodInfo.metadataType };
            }
        }
    };
    MethodInfo.prototype.generateUrl = function () {
        var url = this.methodInfo.name;
        if (this.methodInfo.requestType == _1.RequestType.Delete) {
            url = "deleteObject";
        }
        if (this.passDataInBody) {
            var data = this.methodData || this.methodParams;
            this.methodData = JSON.stringify(data);
        }
        if (this.passDataInQS) {
            var data = this.methodParams || this.methodData;
            url += "(@v)?@v=" + (typeof (data) === "string" ? "'" + encodeURIComponent(data) + "'" : JSON.stringify(data));
        }
        if (this.replace) {
            for (var key in this.methodParams) {
                url = url.replace("[[" + key + "]]", encodeURIComponent(this.methodParams[key]));
            }
        }
        else if (this.methodInfo.requestType == _1.RequestType.OData) {
            var oData = new _1.OData(this.methodParams["oData"]);
            url = "?" + oData.QueryString;
            this.methodInfo.getAllItemsFl = oData.GetAllItems;
        }
        else if (!this.passDataInBody && !this.passDataInQS) {
            var params = "";
            var data = this.methodParams || this.methodData;
            if (data) {
                data = data && typeof (data) === "object" ? data : { value: data };
                for (var name_2 in data) {
                    var value = data[name_2];
                    value = typeof (value) === "string" ? "'" + value + "'" : value;
                    switch (this.methodInfo.requestType) {
                        case _1.RequestType.GetWithArgsValueOnly:
                        case _1.RequestType.PostWithArgsValueOnly:
                            params += value + ", ";
                            break;
                        default:
                            params += name_2 + "=" + value + ", ";
                            break;
                    }
                }
            }
            url += params.length > 0 ? "(" + params.replace(/, $/, "") + ")" : "";
        }
        return url;
    };
    return MethodInfo;
}());
exports.MethodInfo = MethodInfo;
//# sourceMappingURL=methodInfo.js.map