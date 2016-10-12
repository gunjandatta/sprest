/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Email
    // The SP.Utilities.Utility.SendEmail object.
    /*********************************************************************************************************************************/
    export class Email extends Base {

        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "SP.Utilities.Utility.SendEmail";

            // Add the methods
            this.addMethods(this, { __metadata: { type: "email" } } );
        }
    }

    export class Email_Async extends Email {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(...args) {
            // Call the base constructor
            super(Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.email = {
        // Method to send an email.
        send: {
            argNames: ["properties"],
            name: "",
            metadataType: "SP.Utilities.EmailProperties",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}