import { IContentEditorWebPart } from "../../../@types/helper";
declare var SP;

// Method to add a script editor webpart to the page
export const addContentEditorWebPart = (url: string, wpProps: IContentEditorWebPart) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the current context
        let context = SP.ClientContext.get_current();

        // Get the webpart manager for the page
        let page = context.get_web().getFileByServerRelativeUrl(url);
        let wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);

        // Create the webpart
        let wp = wpMgr.importWebPart(`<?xml version="1.0" encoding="utf-8"?>
<WebPart xmlns="http://schemas.microsoft.com/WebPart/v2">
    <Assembly>Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Assembly>
    <TypeName>Microsoft.SharePoint.WebPartPages.ContentEditorWebPart</TypeName>
    <Title>[[Title]]</Title>
    <Description>[[Description]]</Description>
    <FrameType>[[FrameType]]</FrameType>
    <ContentLink xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor">[[ContentLink]]</ContentLink>
    <Content xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor"><![CDATA[[[Content]]]]></Content>
</WebPart>`.replace(/\r?\n/g, '')
            .replace(/\[\[FrameType\]\]/g, wpProps.frameType || "Default")
            .replace(/\[\[Content\]\]/g, wpProps.content || "")
            .replace(/\[\[ContentLink\]\]/g, wpProps.contentLink || "")
            .replace(/\[\[Description\]\]/g, wpProps.description || "")
            .replace(/\[\[Title\]\]/g, wpProps.title || "")
        ).get_webPart();

        // Add the webpart to the page
        wpMgr.addWebPart(wp, wpProps.zone || "", wpProps.index || 0);

        // Save the page
        context.load(wp);
        context.executeQueryAsync(
            // Success
            () => {
                // Resolve the promise
                resolve();
            },
            // Error
            (...args) => {
                // Reject the promise
                reject(args[1] ? args[1].get_message() : "")
            }
        );
    });
}
