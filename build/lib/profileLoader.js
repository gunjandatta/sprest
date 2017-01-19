"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("../utils");
/*********************************************************************************************************************************/
// Profile Loader
/*********************************************************************************************************************************/
var _ProfileLoader = (function (_super) {
    __extends(_ProfileLoader, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _ProfileLoader(targetInfo) {
        // Call the base constructor
        _super.call(this, targetInfo);
        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader";
        this.targetInfo.method = "POST";
        // Add the methods
        this.addMethods(this, { __metadata: { type: "profileloader" } });
    }
    return _ProfileLoader;
}(utils_1.Base));
exports.ProfileLoader = _ProfileLoader;
//# sourceMappingURL=profileLoader.js.map