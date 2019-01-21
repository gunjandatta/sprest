import { Microsoft } from "gd-sprest-def";
import * as Types from "../intellisense";
import { Base, Request, RequestType } from "../utils";
import { ISearch } from "./types/search";

/**
 * Search
 */
export const Search: ISearch = ((url?, targetInfo?) => {
    let base = new Base(targetInfo);
    let search = base as any as Types.ISearch;

    // Default the properties
    base.targetInfo.defaultToWebFl = true;
    base.targetInfo.endpoint = "search";

    // See if the web url exists
    if (url) {
        // Set the settings
        base.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(search as any, { __metadata: { type: "search" } });

    /** The search query method */
    search.searchquery = (settings: Microsoft.Office.Server.Search.REST.SearchRequest) => {
        // Execute the request
        return search.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: RequestType.GetReplace
        }, Search.getQuery(settings));
    }

    /** The search suggest method */
    search["suggest"] = (settings: Microsoft.Office.Server.Search.REST.SearchRequest/*SearchSuggestion*/) => {
        // Execute the request
        return search.executeMethod("query", {
            argNames: ["query"],
            name: "suggest?[[query]]",
            requestType: RequestType.GetReplace
        }, Search.getQuery(settings));
    }

    // Return the search
    return search;
}) as any;

// Static method to compute the query
Search.getQuery = (parameters: Microsoft.Office.Server.Search.REST.SearchRequest/* | Types.ComplexTypes.SearchSuggestion*/) => {
    let query = "";

    // Parse the parameters
    for (let key in parameters) {
        // Append the parameter to the query
        query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
    }

    // Return the query
    return [query];
}
