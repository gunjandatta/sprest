import {IList, ILists} from "../definitions";
import {Base} from "../utils";
import {Web} from "./web";
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

    // Method to get the list by the entity name.
    static getByEntityName(listName, callback, targetInfo?) {
        // Query for the list
        let list = (new Web(targetInfo))
            // Get the lists
            .Lists()
            // Set the query
            .query({
                Filter: "EntityTypeName eq '" + listName + "'",
                Top: 1
            });

        // See if the callback exists
        if(typeof(callback) != "function") {
            // Execute the request synchronously
            return list.executeAndWait();
        }

        // Execute the request asynchronously
        list.execute((lists:ILists) => {
            // Execute the callback method
            callback(lists.existsFl ? lists.results[0] : lists);
        });
    }
}
export const List:IList = <any>_List;