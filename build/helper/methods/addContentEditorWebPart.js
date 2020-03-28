"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        var wp = wpMgr.importWebPart("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<WebPart xmlns=\"http://schemas.microsoft.com/WebPart/v2\">\n    <Assembly>Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Assembly>\n    <TypeName>Microsoft.SharePoint.WebPartPages.ContentEditorWebPart</TypeName>\n    <Title>[[Title]]</Title>\n    <Description>[[Description]]</Description>\n    <FrameType>[[FrameType]]</FrameType>\n    <ContentLink xmlns=\"http://schemas.microsoft.com/WebPart/v2/ContentEditor\">[[ContentLink]]</ContentLink>\n    <Content xmlns=\"http://schemas.microsoft.com/WebPart/v2/ContentEditor\"><![CDATA[[[Content]]]]></Content>\n</WebPart>".replace(/\r?\n/g, '')
            .replace(/\[\[FrameType\]\]/g, wpProps.frameType || "Default")
            .replace(/\[\[Content\]\]/g, wpProps.content || "")
            .replace(/\[\[ContentLink\]\]/g, wpProps.contentLink || "")
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
