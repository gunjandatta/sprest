module $REST {
    /*********************************************************************************************************************************/
    // Email
    // The SP.Utilities.Utility.SendEmail object.
    /*********************************************************************************************************************************/
    export class Email extends Base {

        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo?:Settings.TargetInfoSettings) {
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
        send(properties:any) {
            // Ensure the "To" property exists, and is formatted correctly
            if(properties.To) {
                // See if it's a string
                if(typeof(properties.To) === "string") {
                    properties.To = { 'results': [properties.To] };
                }
                // Else, assume it's an array
                else {
                    properties.To = { 'results': properties.To };
                }
            }

            // Execute the method, and return the email object
            return this.executeMethod("send", {
                argNames: ["properties"],
                name: "",
                metadataType: "SP.Utilities.EmailProperties",
                requestType: Types.RequestType.PostWithArgsInBody
            }, [properties]);
        }
    }
}