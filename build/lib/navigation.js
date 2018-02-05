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
var _Navigation = (function (_super) {
    __extends(_Navigation, _super);
    function _Navigation(url, targetInfo) {
        var _this = _super.call(this, targetInfo) || this;
        _this.targetInfo.defaultToWebFl = true;
        _this.targetInfo.endpoint = "navigation";
        if (url) {
            _this.targetInfo.url = url;
        }
        _this.addMethods(_this, { __metadata: { type: "navigationservicerest" } });
        return _this;
    }
    return _Navigation;
}(utils_1.Base));
exports.Navigation = _Navigation;
//# sourceMappingURL=navigation.js.map