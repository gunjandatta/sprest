import {IList} from "../definitions";
import {Base} from "../utils";
/*********************************************************************************************************************************/
// List
// The SPList object.
/*********************************************************************************************************************************/
class _List extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(listName, targetInfo?) {
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
export const List:IList = <any>_List;