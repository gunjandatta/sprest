import { IList, IListEntityProps } from "../../@types/lib";
import { ITargetInfoProps } from "../../@types/utils";
import { SP } from "gd-sprest-def";
import { Base, Request } from "../utils";
import { Web } from "./web";

/**
 * List
 */
export const List: IList = ((listName: string, targetInfo?: ITargetInfoProps) => {
    let list = new Base(targetInfo);

    // Default the properties
    list.targetInfo.defaultToWebFl = true;
    list.targetInfo.endpoint = "web/lists/getByTitle('" + listName.replace(/\'/g, "''") + "')";

    // Add the methods
    Request.addMethods(list, { __metadata: { type: "SP.List" } });

    // Return the list
    return list;
}) as any as IList;

// Static method to get the list by the entity name.
List.getByEntityName = ((props: IListEntityProps) => {
    // Query for the list
    let query = Web(props.url, props.targetInfo)
        // Get the lists
        .Lists()
        // Set the query
        .query({
            Filter: "EntityTypeName eq '" + props.name + "'",
            Top: 1
        });

    // See if the callback exists
    if (props.callback) {
        // Execute the request asynchronously
        query.execute((lists) => {
            // Execute the callback method
            props.callback(lists.results ? lists.results[0] : null as any);
        });
    } else {
        // Execute the request synchronously and return it
        let list = query.executeAndWait();
        return list.results ? list.results[0] : list;
    }
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
});