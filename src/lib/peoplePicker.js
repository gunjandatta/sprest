import {Base} from "../utils";
/*********************************************************************************************************************************/
// People Picker
/*********************************************************************************************************************************/
export class PeoplePicker extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo) {
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
