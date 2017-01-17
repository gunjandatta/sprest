import {Base} from "../utils";
/*********************************************************************************************************************************/
// People Manager
/*********************************************************************************************************************************/
export class PeopleManager extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "sp.userprofiles.peoplemanager";

        // Add the methods
        this.addMethods(this, { __metadata: { type: "peoplemanager" } } );
    }
}
