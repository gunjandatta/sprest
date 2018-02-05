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
var web_1 = require("./web");
var _List = (function (_super) {
    __extends(_List, _super);
    function _List(listName, targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";
        _this.addMethods(_this, { __metadata: { type: "list" } });
        return _this;
    }
    _List.getByEntityName = function (entityTypeName, callback, targetInfo) {
        var query = (new web_1.Web(targetInfo))
            .Lists()
            .query({
            Filter: "EntityTypeName eq '" + entityTypeName + "'",
            Top: 1
        });
        if (typeof (callback) != "function") {
            var list = query.executeAndWait();
            return list.results ? list.results[0] : list;
        }
        query.execute(function (lists) {
            callback(lists.results ? lists.results[0] : lists);
        });
    };
    return _List;
}(utils_1.Base));
exports.List = _List;
//# sourceMappingURL=list.js.map