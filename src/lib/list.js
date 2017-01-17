import {Base} from "../utils";
/*********************************************************************************************************************************/
// List
// The SPList object.
/*********************************************************************************************************************************/
export class List extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(listName, targetInfo) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";

        // Add the methods
        this.addMethods(this, { __metadata: { type: "list" } } );
    }
}