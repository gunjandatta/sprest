import { IBaseExecution } from "gd-sprest-def/lib/base";
import { SearchRequest, SearchResult } from "gd-sprest-def/lib/Microsoft/Office/Server/Search/REST";
import { ISearchService } from "gd-sprest-def/lib/Microsoft/Office/Server/Search/REST/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/search
 */
export const Search: ISearch;

/**
 * Search Post Query
 */
export interface ISearchPostQuery {
    onQueryCompleted?: (results: SearchResult) => void;
    query: SearchRequest
    targetInfo?: ITargetInfoProps;
    url?: string;
    useBatch?: boolean;
}

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
    getQuery(parameters: SearchRequest): Array<string>;

    /**
     * Method to get the url of a site, by its id.
     * @param id - The site id.
     */
    getUrlById(id: string): IBaseExecution<{ GetUrlById: string }>;

    /**
     * Method to execute a post query
     * @param 
     */
    postQuery(props: ISearchPostQuery): PromiseLike<SearchResult>;
}