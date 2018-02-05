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
var _1 = require(".");
var _Site = (function (_super) {
    __extends(_Site, _super);
    function _Site(url, targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "site";
        if (url) {
            _this.targetInfo.url = url;
        }
        _this.addMethods(_this, { __metadata: { type: "site" } });
        return _this;
    }
    _Site.prototype.getRootWeb = function () { return new _1.Web(null, this.targetInfo); };
    _Site.prototype.hasAccess = function (permissions) {
        return true;
    };
    ;
    return _Site;
}(utils_1.Base));
exports.Site = _Site;
//# sourceMappingURL=site.js.map