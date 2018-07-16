"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * User Profile
 */
exports.UserProfile = (function (targetInfo) {
    var userProfile = new utils_1.Base(targetInfo);
    // Default the properties
    userProfile.targetInfo.defaultToWebFl = true;
    userProfile.targetInfo.endpoint = "sp.userprofiles.profileloader.getprofileloader/getUserProfile";
    userProfile.targetInfo.method = "POST";
    // Add the methods
    userProfile.addMethods(userProfile, { __metadata: { type: "userprofile" } });
    // Return the user profile
    return userProfile;
});
