"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Group Site Manager
 */
exports.GroupSiteManager = (function (targetInfo) {
    var mgr = new utils_1.Base(targetInfo);
    // Default the properties
    mgr.targetInfo.defaultToWebFl = true;
    mgr.targetInfo.endpoint = "groupsitemanager";
    // Add the methods
    utils_1.Request.addMethods(mgr, { __metadata: { type: "Microsoft.SharePoint.Portal.GroupSiteManager" } });
    // Return the group site manager
    return mgr;
});
