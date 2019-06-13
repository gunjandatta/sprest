import { Microsoft } from "gd-sprest-def";
import { ISearch } from "../../@types/lib";
import { Base, Request, RequestType } from "../utils";

/**
 * Search
 */
export const Search: ISearch = ((url?, targetInfo?) => {
    let base = new Base(targetInfo);
    let search = base as any as Microsoft.Office.Server.Search.REST.ISearchService;

    // Default the properties
    base.targetInfo.defaultToWebFl = true;
    base.targetInfo.endpoint = "search";

    // See if the web url exists
    if (url) {
        // Set the settings
        base.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(search as any, { __metadata: { type: "Microsoft.Office.Server.Search.REST.SearchService" } });

    /** The search query method */
    search.searchquery = (settings: Microsoft.Office.Server.Search.REST.SearchRequest) => {
        // Execute the request
        return search.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: RequestType.GetReplace
        }, Search.getQuery(settings));
    }

    // Return the search
    return search;
}) as any;

// Static method to compute the query
Search.getQuery = (parameters: Microsoft.Office.Server.Search.REST.SearchRequest) => {
    let query = "";

    // Parse the parameters
    for (let key in parameters) {
        // Append the parameter to the query
        query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
    }

    // Return the query
    return [query];
}
