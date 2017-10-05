import { ISearch } from "../definitions";
import { RequestType } from "../types";
import { Base } from "../utils";

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

    // Method to compute the argument names
    getArguments(parameters) {
        let names = [];
        let values = [];

        // Parse the arguments
        for (let key in parameters) {
            // Append the argument to the array
            names.push(key);
            values.push(parameters[key]);
        }

        // Return the argument names
        return { names, values };
    }

    /** The search query method */
    searchquery(settings) {
        let args = this.getArguments(settings);

        // Execute the request
        return this.executeMethod("query", {
            argNames: args.names,
            name: "query",
            requestType: RequestType.GetWithArgs
        }, args.values);
    }

    /** The suggest method */
    suggest(settings) {
        let args = this.getArguments(settings);

        // Execute the request
        return this.executeMethod("suggest", {
            argNames: args.names,
            name: "suggest",
            requestType: RequestType.GetWithArgs
        }, args.values);
    }
}
export const Search: ISearch = <any>_Search;