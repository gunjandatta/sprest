"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Theme Manager
 */
exports.ThemeManager = (function (targetInfo) {
    var mgr = new utils_1.Base(targetInfo);
    // Default the properties
    mgr.targetInfo.defaultToWebFl = true;
    mgr.targetInfo.endpoint = "thememanager";
    // Add the methods
    utils_1.Request.addMethods(mgr, { __metadata: { type: "SP.Utilities.ThemeManager" } });
    // Return the theme manager
    return mgr;
});
