import { Types } from "..";
import { Base, RequestType } from "../utils";

/*********************************************************************************************************************************/
// Search
/*********************************************************************************************************************************/
class _Search extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(url?, targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.targetInfo.endpoint = "search";

        // See if the web url exists
        if (url) {
            // Set the settings
            this.targetInfo.url = url;
        }

        // Add the methods
        this.addMethods(this, { __metadata: { type: "search" } });
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to compute the query
    getQuery(parameters) {
        let query = "";

        // Parse the parameters
        for (let key in parameters) {
            // Append the parameter to the query
            query += (query == "" ? "" : "&") + key + "='" + parameters[key] + "'";
        }

        // Return the query
        return [query];
    }

    /** The search query method */
    searchquery(settings) {
        // Execute the request
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "query?[[query]]",
            requestType: RequestType.GetReplace
        }, this.getQuery(settings));
    }

    /** The suggest method */
    suggest(settings) {
        // Execute the request
        return this.executeMethod("query", {
            argNames: ["query"],
            name: "suggest?[[query]]",
            requestType: RequestType.GetReplace
        }, this.getQuery(settings));
    }
}
export const Search: Types.ISearch = <any>_Search;