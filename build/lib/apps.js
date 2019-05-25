"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Apps
 */
exports.Apps = (function (targetInfo) {
    var apps = new utils_1.Base(targetInfo);
    // Default the properties
    apps.targetInfo.defaultToWebFl = true;
    apps.targetInfo.endpoint = "apps";
    // Add the methods
    utils_1.Request.addMethods(apps, { __metadata: { type: "Microsoft.AppServices.AppCollection" } });
    // Return the apps
    return apps;
});
