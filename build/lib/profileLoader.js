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
/*********************************************************************************************************************************/
// Profile Loader
/*********************************************************************************************************************************/
var _ProfileLoader = /** @class */ (function (_super) {
    __extends(_ProfileLoader, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _ProfileLoader(targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.defaultToWebFl = true;
        _this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
        _this.targetInfo.method = "POST";
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "profileloader" } });
        return _this;
    }
    return _ProfileLoader;
}(utils_1.Base));
exports.ProfileLoader = _ProfileLoader;
//# sourceMappingURL=profileLoader.js.map