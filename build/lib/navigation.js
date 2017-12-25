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
/**
 * Navigation
 */
var _Navigation = /** @class */ (function (_super) {
    __extends(_Navigation, _super);
    /**
     * Constructor
     */
    function _Navigation(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.defaultToWebFl = true;
        _this.targetInfo.endpoint = "navigation";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "navigationservicerest" } });
        return _this;
    }
    return _Navigation;
}(utils_1.Base));
exports.Navigation = _Navigation;
//# sourceMappingURL=navigation.js.map