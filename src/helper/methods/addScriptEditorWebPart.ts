import { IScriptEditorWebPart } from "../../../@types/helper";
declare var SP;

// Method to add a script editor webpart to the page
export const addScriptEditorWebPart = (url: string, wpProps: IScriptEditorWebPart) => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the current context
        let context = SP.ClientContext.get_current();

        // Get the webpart manager for the page
        let page = context.get_web().getFileByServerRelativeUrl(url);
        let wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);

        // Create the webpart
        let wp = wpMgr.importWebPart(`<?xml version="1.0" encoding="utf-8"?>
<webParts>
    <webPart xmlns="http://schemas.microsoft.com/WebPart/v3">
        <metaData>
            <type name="Microsoft.SharePoint.WebPartPages.ScriptEditorWebPart, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" />
            <importErrorMessage>$Resources:core,ImportantErrorMessage;</importErrorMessage>
        </metaData>
        <data>
            <properties>
            <property name="Title" type="string">[[Title]]</property>
            <property name="Description" type="string">[[Description]]</property>
            <property name="ChromeType" type="chrometype">[[ChromeType]]</property>
            <property name="Content" type="string">[[Content]]</property>
        </properties>
        </data>
    </webPart>
</webParts>`.replace(/\r?\n/g, '')
            .replace(/\[\[ChromeType\]\]/g, wpProps.chromeType || "TitleOnly")
            .replace(/\[\[Content\]\]/g, wpProps.content.replace(/\</g, '&lt;').replace(/\>/g, '&gt;'))
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