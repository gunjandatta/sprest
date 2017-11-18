import { IPeoplePicker } from "../definitions/index";
import { Base } from "../utils/index";

/*********************************************************************************************************************************/
// People Picker
/*********************************************************************************************************************************/
class _PeoplePicker extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
        this.targetInfo.overrideDefaultRequestToHostFl = true;
        
        // Add the methods
        this.addMethods(this, { __metadata: { type: "peoplepicker" } });
    }
}
export const PeoplePicker: IPeoplePicker = <any>_PeoplePicker;