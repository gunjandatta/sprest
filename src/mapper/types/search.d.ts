import { Microsoft } from "gd-sprest-def";
import { IBaseLib } from "../../utils/types/base";

/**
 * Search
 */
export interface ISearch extends IBaseLib<ISearch, Microsoft.Office.Server.Search.REST.SearchResult> {
    /** Method to execute a search query.
     * @param settings - The search request settings.
    */
    postquery(settings: Microsoft.Office.Server.Search.REST.SearchRequest): IBaseLib<Microsoft.Office.Server.Search.REST.SearchResult>;

    /** Method to execute a search query.
     * @param settings - The search request settings.
    */
    searchquery(settings: Microsoft.Office.Server.Search.REST.SearchRequest): IBaseLib<Microsoft.Office.Server.Search.REST.SearchResult>;

    /** Method to execute a search suggestion.
     * @param settings - The search suggest settings.
    */
    //suggest(settings: Microsoft.Office.Server.Search.REST.SearchSuggestion): IBaseLib<Microsoft.Office.Server.Search.REST.QuerySuggestionResults>;
}