"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Utility
 */
exports.Utility = (function (url, targetInfo) {
    var utility = new utils_1.Base(targetInfo);
    // Default the properties
    utility.targetInfo.defaultToWebFl = true;
    utility.targetInfo.endpoint = "SP.Utilities.Utility";
    // See if the web url exists
    if (url) {
        // Set the settings
        utility.targetInfo.url = url;
    }
    // Add the methods
    utility.addMethods(utility, { __metadata: { type: "utility" } });
    // Method to create a wiki page
    utility.createWikiPage = function (listUrl, content) {
        if (content === void 0) { content = ""; }
        var parameters = {
            ServerRelativeUrl: listUrl,
            WikiHtmlContent: content
        };
        // Execute the method
        return utility.executeMethod("createWikiPage", {
            argNames: ["parameters"],
            name: "SP.Utilities.Utility.CreateWikiPageInContextWeb",
            replaceEndpointFl: true,
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [parameters]);
    };
    // Method to send an email
    utility.sendEmail = function (properties) {
        // Parse the email properties
        for (var _i = 0, _a = ["To", "CC", "BCC"]; _i < _a.length; _i++) {
            var propName = _a[_i];
            var propValue = properties[propName];
            // Ensure the value exists
            if (propValue) {
                // See if it's a string
                if (typeof (propValue) === "string") {
                    // Add the results property
                    properties[propName] = { 'results': [propValue] };
                }
                else {
                    // Add the results property
                    properties[propName] = { 'results': propValue };
                }
            }
        }
        // Execute the method
        return utility.executeMethod("sendEmail", {
            argNames: ["properties"],
            metadataType: "SP.Utilities.EmailProperties",
            name: "SP.Utilities.Utility.sendEmail",
            replaceEndpointFl: true,
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [properties]);
    };
    // Return the utility
    return utility;
});
