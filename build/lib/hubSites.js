"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Hub Sites
 */
exports.HubSites = (function (targetInfo) {
    var hubs = new utils_1.Base(targetInfo);
    // Default the properties
    hubs.targetInfo.defaultToWebFl = true;
    hubs.targetInfo.endpoint = "hubsites";
    // Add the methods
    utils_1.Request.addMethods(hubs, { __metadata: { type: "SP.HubSite.Collection" } });
    // Return the hub sites
    return hubs;
});
// Static method to see if the current user can create hub sites
exports.HubSites.canCreate = (function () {
    // Return the base object
    return new utils_1.Base({
        endpoint: "SP.HubSites.CanCreate"
    });
});
