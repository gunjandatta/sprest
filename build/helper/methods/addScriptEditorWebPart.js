"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Method to add a script editor webpart to the page
exports.addScriptEditorWebPart = function (url, wpProps) {
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Get the current context
        var context = SP.ClientContext.get_current();
        // Get the webpart manager for the page
        var page = context.get_web().getFileByServerRelativeUrl(url);
        var wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
        // Create the webpart
        var wp = wpMgr.importWebPart("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<webParts>\n    <webPart xmlns=\"http://schemas.microsoft.com/WebPart/v3\">\n        <metaData>\n            <type name=\"Microsoft.SharePoint.WebPartPages.ScriptEditorWebPart, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c\" />\n            <importErrorMessage>$Resources:core,ImportantErrorMessage;</importErrorMessage>\n        </metaData>\n        <data>\n            <properties>\n            <property name=\"Title\" type=\"string\">[[Title]]</property>\n            <property name=\"Description\" type=\"string\">[[Description]]</property>\n            <property name=\"ChromeType\" type=\"chrometype\">[[ChromeType]]</property>\n            <property name=\"Content\" type=\"string\">[[Content]]</property>\n        </properties>\n        </data>\n    </webPart>\n</webParts>".replace(/\r?\n/g, '')
            .replace(/\[\[ChromeType\]\]/g, wpProps.chromeType || "TitleOnly")
            .replace(/\[\[Content\]\]/g, wpProps.content.replace(/\</g, '&lt;').replace(/\>/g, '&gt;'))
            .replace(/\[\[Description\]\]/g, wpProps.description || "")
            .replace(/\[\[Title\]\]/g, wpProps.title || "")).get_webPart();
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
