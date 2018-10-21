import { SP } from "gd-sprest-def";
import { Base, Types } from "../utils";
import { IList } from "./types";
import { Web } from "./web";

/**
 * List
 */
export const List: IList = ((listName: string, targetInfo?: Types.ITargetInfo) => {
    let list = new Base(targetInfo);

    // Default the properties
    list.targetInfo.defaultToWebFl = true;
    list.targetInfo.endpoint = "web/lists/getByTitle('" + listName.replace(/\'/g, "''") + "')";

    // Add the methods
    list.addMethods(list, { __metadata: { type: "list" } });

    // Return the list
    return list;
}) as any;

// Static method to get the list by the entity name.
List.getByEntityName = ((entityTypeName, callback, targetInfo?) => {
    // Query for the list
    let query = Web(targetInfo)
        // Get the lists
        .Lists()
        // Set the query
        .query({
            Filter: "EntityTypeName eq '" + entityTypeName + "'",
            Top: 1
        });

    // See if the callback exists
    if (typeof (callback) != "function") {
        // Execute the request synchronously and return it
        let list = query.executeAndWait();
        return list.results ? list.results[0] : list;
    }

    // Execute the request asynchronously
    query.execute((lists) => {
        // Execute the callback method
        callback(lists.results ? lists.results[0] : lists);
    });
}) as any;

// Static method to get the list data from the SP.List.getListDataAsStream endpoint
List.getDataAsStream = ((listFullUrl: string, parameters: SP.RenderListDataParameters = {}) => {
    let params = "?listFullUrl='" + listFullUrl + "'";

    // Parse the parameters
    for (let key in parameters) {
        // Append the parameter
        params += "&" + key + "=" + parameters[key];
    }

    // Return the base object
    return new Base({
        endpoint: "SP.List.getListDataAsStream" + params
    });
}) as any;