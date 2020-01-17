"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Workflow Subscription Service
 */
exports.WorkflowSubscriptionService = (function (url, targetInfo) {
    var wfs = new utils_1.Base(targetInfo);
    // Default the properties
    wfs.targetInfo.defaultToWebFl = true;
    wfs.targetInfo.endpoint = "SP.WorkflowServices.WorkflowSubscriptionService.Current";
    // See if the web url exists
    if (url) {
        // Set the settings
        wfs.targetInfo.url = url;
    }
    // Add the methods
    utils_1.Request.addMethods(wfs, { __metadata: { type: "SP.WorkflowServices.WorkflowSubscriptionService" } });
    // Return the workflow service
    return wfs;
});
