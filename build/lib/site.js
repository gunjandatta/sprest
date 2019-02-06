"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Site
 */
exports.Site = (function (url, targetInfo) {
    var site = new utils_1.Base(targetInfo);
    // Default the properties
    site.targetInfo.defaultToWebFl = true;
    site.targetInfo.endpoint = "site";
    // See if the web url exists
    if (url) {
        // Set the settings
        site.targetInfo.url = url;
    }
    // Add the methods
    utils_1.Request.addMethods(site, { __metadata: { type: "SP.Site" } });
    // Return the site
    return site;
});
// Static method to see if a site exists
exports.Site.exists = (function (url) {
    // Return the base object
    return new utils_1.Base({
        data: { url: url },
        defaultToWebFl: true,
        endpoint: "SP.Site.Exists",
        method: "POST"
    });
});
// Static method to get the app context
exports.Site.getAppContext = (function (siteUrl) {
    // Return the base object
    return new utils_1.Base({
        data: { siteUrl: siteUrl },
        defaultToWebFl: true,
        endpoint: "SP.AppContextSite",
        method: "POST"
    });
});
// Method to get the url by id
exports.Site.getUrlById = (function (id) {
    // Return the base object
    return new utils_1.Base({
        data: { id: id },
        defaultToWebFl: true,
        endpoint: "SP.Site.GetUrlById",
        method: "POST"
    });
});
