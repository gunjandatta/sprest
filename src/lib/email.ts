/// <reference path="../definitions/email.d.ts" />
import {Base} from "../utils";
import {RequestType} from ".";
import {
    IEmail,
    TargetInfoSettings
} from "../definitions";

/*********************************************************************************************************************************/
// Email
// The SP.Utilities.Utility.SendEmail object.
/*********************************************************************************************************************************/
class _Email extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?:TargetInfoSettings) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "SP.Utilities.Utility.SendEmail";
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to send an email
    send(properties) {
        // Parse the email properties
        for(let propName of ["To", "CC", "BCC"]) {
            let propValue = properties[propName];

            // Ensure the value exists
            if(propValue) {
                // See if it's a string
                if(typeof(propValue) === "string") {
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

        // Execute the method, and return the email object
        return this.executeMethod("send", {
            argNames: ["properties"],
            name: "",
            metadataType: "SP.Utilities.EmailProperties",
            requestType: RequestType.PostWithArgsInBody
        }, [properties]);
    }
}
export const Email:IEmail = <any>(new _Email());