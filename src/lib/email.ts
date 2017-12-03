import { Types } from "../mapper";
import { RequestType } from "../types";
import { Base, IBase } from "../utils";

/**
 * Email Properties
 */
export interface EmailProperties {
    /** A collection of additional email headers. */
    AdditionalHeaders?: Array<Types.ComplexTypes.KeyValue>;

    /** A string or collection of email addresses to blind carbon copy the email to. */
    BCC?: string | Array<string>;

    /** A value that specifies the body of the email. */
    Body: string;

    /** A string or collection of email addresses to carbon copy the email to. */
    CC?: string | Array<string>;

    /** A value that specifies the email address of the sender. */
    From: string;

    /** A string or collection of email addresses to send the email to. */
    To: string | Array<string>;

    /** A value that specifies the email subject. */
    Subject: string;
}

/**
 * Email
 */
export interface IEmail {
    /**
     * Properties
     */

    /**
     * Methods
     */

    /**
     * Method to send an email.
     * @param properties - The email information.
     */
    send(properties: EmailProperties): IBase;
}

/**
 * Email
 */
class _Email extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.targetInfo.endpoint = "SP.Utilities.Utility.SendEmail";
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to send an email
    send(properties) {
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

        // Execute the method, and return the email object
        return this.executeMethod("send", {
            argNames: ["properties"],
            name: "",
            metadataType: "SP.Utilities.EmailProperties",
            requestType: RequestType.PostWithArgsInBody
        }, [properties]);
    }
}
export const Email: IEmail = new _Email() as any;