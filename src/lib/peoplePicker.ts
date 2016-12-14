module $REST {
    /*********************************************************************************************************************************/
    // People Picker
    /*********************************************************************************************************************************/
    export class PeoplePicker extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo?:ComplexTypes.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";

            // Add the methods
            this.addMethods(this, { __metadata: { type: "peoplepicker" } } );
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.peoplepicker = {
        clientPeoplePickerResolveUser: {
            argNames: ["queryParams"],
            metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        clientPeoplePickerSearchUser: {
            argNames: ["queryParams"],
            metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
            requestType: Types.RequestType.PostWithArgsInBody
        }
    }
}
