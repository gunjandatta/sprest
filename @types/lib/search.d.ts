import { IBaseExecution } from "gd-sprest-def/base";
import { SearchRequest } from "gd-sprest-def/lib/Microsoft/Office/Server/Search/REST/complextypes";
import { ISearchService } from "gd-sprest-def/lib/Microsoft/Office/Server/Search/REST/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/search
 */
export const Search: ISearch;

/**
 * Search
 * @category Search
 */
export interface ISearch {
    /**
     * Creates an instance of the search library.
     * @param url - The optional url to execute the search against.
     * @param targetInfo - The target information.
     */
    (url?: string, targetInfo?: ITargetInfoProps): ISearchService;

    /**
     * Method to get the app context information.
     * @param siteUrl - The absolute url of the site.
     */
    getAppContext(siteUrl: string): IBaseExecution;

    /**
     * Method to get the query from the search parameters.
     * @param parameters - The search parameters.
     */
    getQuery: (parameters: SearchRequest /* | Microsoft.Office.Server.Search.REST.SearchSuggestion*/) => Array<string>;

    /**
     * Method to get the url of a site, by its id.
     * @param id - The site id.
     */
    getUrlById(id: string): IBaseExecution<{ GetUrlById: string }>;
}