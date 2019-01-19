import * as Types from "../mapper/types";
import { Base, Request, RequestType } from "../utils";
import { IUtility } from "./types";

/**
 * Utility
 */
export const Utility: IUtility = ((url?, targetInfo?) => {
    let utility = new Base(targetInfo) as any as Types.IUtility;

    // Default the properties
    utility.targetInfo.defaultToWebFl = true;
    utility.targetInfo.endpoint = "SP.Utilities.Utility";

    // See if the web url exists
    if (url) {
        // Set the settings
        utility.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(utility as any, { __metadata: { type: "utility" } });

    // Method to create a wiki page
    utility.createWikiPage = (listUrl: string, content: string = "") => {
        let parameters = {
            ServerRelativeUrl: listUrl,
            WikiHtmlContent: content
        };

        // Execute the method
        return utility.executeMethod("createWikiPage", {
            argNames: ["parameters"],
            name: "SP.Utilities.Utility.CreateWikiPageInContextWeb",
            replaceEndpointFl: true,
            requestType: RequestType.PostWithArgsInBody
        }, [parameters]);
    }

    // Method to send an email
    utility.sendEmail = (properties) => {
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
        return utility.executeMethod("sendEmail", {
            argNames: ["properties"],
            metadataType: "SP.Utilities.EmailProperties",
            name: "SP.Utilities.Utility.sendEmail",
            replaceEndpointFl: true,
            requestType: RequestType.PostWithArgsInBody
        }, [properties]);
    }

    // Return the utility
    return utility;
}) as any as IUtility;