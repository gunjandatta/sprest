/// <reference path="../definitions/search.d.ts" />
import {Base} from "../utils";
import {RequestType} from ".";
import {
    ComplexTypes,
    ISearch,
    TargetInfoSettings
} from "../definitions";

/*********************************************************************************************************************************/
// Search
/*********************************************************************************************************************************/
class _Search extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(url?:string, targetInfo?:TargetInfoSettings) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "search";

        // See if the web url exists
        if(url) {
            // Set the settings
            this.targetInfo.url = url;
        }

        // Add the methods
        this.addMethods(this, { __metadata: { type: "search" } } );
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Method to compute the argument names
    private getArgNames(parameters) {
        let argNames = [];

        // Parse the arguments
        for(let key in parameters) {
            // Append the argument to the array
            argNames.push(key);
        }

        // Return the argument names
        return argNames;
    }

    /** The query method */
    query(settings:ComplexTypes.SearchRequest) {
        // Execute the request
        return this.executeMethod("query", {
            argNames: this.getArgNames(settings),
            name: "query",
            requestType: RequestType.GetWithArgs
        }, settings);
    }

    /** The suggest method */
    suggest(settings:ComplexTypes.SearchSuggestion) {
        // Execute the request
        return this.executeMethod("suggest", {
            argNames: this.getArgNames(settings),
            name: "suggest",
            requestType: RequestType.GetWithArgs
        }, settings);
    }
}
export const Search:ISearch = <any>_Search;

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
    postquery: {
        argNames: ["request"],
        metadataType: "Microsoft.Office.Server.Search.REST.SearchRequest",
        requestType: RequestType.PostWithArgsInBody
    }
}
export default Library;