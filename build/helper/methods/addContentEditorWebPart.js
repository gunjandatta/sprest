"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpart_1 = require("../webpart");
// Method to add a script editor webpart to the page
exports.addContentEditorWebPart = function (url, wpProps) {
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Get the current context
        var context = SP.ClientContext.get_current();
        // Get the webpart manager for the page
        var page = context.get_web().getFileByServerRelativeUrl(url);
        var wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
        // Create the webpart
        var wp = wpMgr.importWebPart(webpart_1.WebPart.generateContentEditorXML(wpProps)).get_webPart();
        // Add the webpart to the page
        wpMgr.addWebPart(wp, wpProps.zone || "", wpProps.index || 0);
        // Save the page
        context.load(wp);
        context.executeQueryAsync(
        // Success
        function () {
            // Resolve the promise
            resolve();
        }, 
        // Error
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // Reject the promise
            reject(args[1] ? args[1].get_message() : "");
        });
    });
};
