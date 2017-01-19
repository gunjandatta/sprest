"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("../utils");
/*********************************************************************************************************************************/
// User Profile
/*********************************************************************************************************************************/
var _UserProfile = (function (_super) {
    __extends(_UserProfile, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _UserProfile(targetInfo) {
        // Call the base constructor
        _super.call(this, targetInfo);
        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
        this.targetInfo.method = "POST";
        // Add the methods
        this.addMethods(this, { __metadata: { type: "userprofile" } });
    }
    return _UserProfile;
}(utils_1.Base));
exports.UserProfile = _UserProfile;
//# sourceMappingURL=userProfile.js.map