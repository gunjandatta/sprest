"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Hub Sites Utility
 */
exports.HubSitesUtility = (function (targetInfo) {
    var utility = new utils_1.Base(targetInfo);
    // Default the properties
    utility.targetInfo.defaultToWebFl = true;
    utility.targetInfo.endpoint = "hubsitesutility";
    // Add the methods
    utils_1.Request.addMethods(utility, { __metadata: { type: "Microsoft.SharePoint.Portal.SPHubSitesUtility" } });
    // Return the hub sites utility
    return utility;
});
