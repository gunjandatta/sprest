import { IScriptEditorWebPart } from "../../../@types/helper";
import { WebPart } from "../webpart";
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
        let wp = wpMgr.importWebPart(WebPart.generateScriptEditorXML(wpProps)).get_webPart();

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