"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.Web = (function (url, targetInfo) {
    var web = new utils_1.Base(targetInfo);
    // Default the properties
    web.targetInfo.defaultToWebFl = true;
    web.targetInfo.endpoint = "web";
    // See if the web url exists
    if (url) {
        // Set the settings
        web.targetInfo.url = url;
    }
    // Add the methods
    utils_1.Request.addMethods(web, { __metadata: { type: "web" } });
    // Return the web
    return web;
});
// Static method to get a remote web
exports.Web.getRemoteWeb = (function (requestUrl) {
    // Return the remote web information
    return new utils_1.Base({
        data: { requestUrl: requestUrl },
        defaultToWebFl: true,
        endpoint: "SP.RemoteWeb?$expand=Web",
        method: "POST"
    });
});
