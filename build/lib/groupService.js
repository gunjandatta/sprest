"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Group Service
 */
exports.GroupService = (function (targetInfo) {
    var svc = new utils_1.Base(targetInfo);
    // Default the properties
    svc.targetInfo.defaultToWebFl = true;
    svc.targetInfo.endpoint = "groupservice";
    // Add the methods
    utils_1.Request.addMethods(svc, { __metadata: { type: "Microsoft.SharePoint.Portal.GroupService" } });
    // Return the group service
    return svc;
});
