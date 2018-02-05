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
var utils_1 = require("../utils");
var _Search = (function (_super) {
    __extends(_Search, _super);
    function _Search(url, targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "search";
        if (url) {
            _this.targetInfo.url = url;
        }
        _this.addMethods(_this, { __metadata: { type: "search" } });
        return _this;
    }
    _Search.prototype.getQuery = function (parameters) {
        var query = "";
        for (var key in parameters) {
            query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
        }
        return [query];
    };
    _Search.prototype.searchquery = function (settings) {
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: utils_1.RequestType.GetReplace
        }, this.getQuery(settings));
    };
    _Search.prototype.suggest = function (settings) {
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "suggest?[[query]]",
            requestType: utils_1.RequestType.GetReplace
        }, this.getQuery(settings));
    };
    return _Search;
}(utils_1.Base));
exports.Search = _Search;
//# sourceMappingURL=search.js.map