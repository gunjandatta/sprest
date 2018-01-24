import { Types } from "../mapper";
import { Base, IBase, RequestType } from "../utils";

/**
 * Utility
 */
class _Utility extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(url?, targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.targetInfo.endpoint = "SP.Utilities.Utility";

        // See if the web url exists
        if (url) {
            // Set the settings
            this.targetInfo.url = url;
        }

        // Add the methods
        this.addMethods(this, { __metadata: { type: "utility" } });
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to create a wiki page
    createWikiPage(listUrl: string, content: string = "") {
        let parameters = {
            ServerRelativeUrl: listUrl,
            WikiHtmlContent: content
        };

        // Execute the method
        return this.executeMethod("createWikiPage", {
            argNames: ["parameters"],
            name: "SP.Utilities.Utility.CreateWikiPageInContextWeb",
            replaceEndpointFl: true,
            requestType: RequestType.PostWithArgsInBody
        }, [parameters]);
    }

    // Method to send an email
    sendEmail(properties) {
        // Parse the email properties
        for (let propName of ["To", "CC", "BCC"]) {
            let propValue = properties[propName];

            // Ensure the value exists
            if (propValue) {
                // See if it's a string
                if (typeof (propValue) === "string") {
                    // Add the results property
                    properties[propName] = { 'results': [propValue] };
                }
                // Else, assume it's an array
                else {
                    // Add the results property
                    properties[propName] = { 'results': propValue };
                }
            }
        }

        // Execute the method
        return this.executeMethod("sendEmail", {
            argNames: ["properties"],
            metadataType: "SP.Utilities.EmailProperties",
            name: "SP.Utilities.Utility.sendEmail",
            replaceEndpointFl: true,
            requestType: RequestType.PostWithArgsInBody
        }, [properties]);
    }
}
export const Utility: Types.IUtility = _Utility as any;