import { ComplexTypes, ITargetInfo } from "..";
import { IBase } from "../../utils";
/**
 * Search
 */
export interface ISearch extends IBase<ISearch, ComplexTypes.SearchResult> {
    /**
     * Constructor
     * @param url - The optional url to execute the search against.
     * @param settings - The search settings.
     */
    new (url?: string, settings?: ITargetInfo): ISearch;
    /** Method to execute a search query.
     * @param settings - The search request settings.
    */
    postquery(settings: ComplexTypes.SearchRequest): IBase<ComplexTypes.SearchResult>;
    /** Method to execute a search query.
     * @param settings - The search request settings.
    */
    searchquery(settings: ComplexTypes.SearchRequest): IBase<ComplexTypes.SearchResult>;
    /** Method to execute a search suggestion.
     * @param settings - The search suggest settings.
    */
    suggest(settings: ComplexTypes.SearchSuggestion): IBase<ComplexTypes.QuerySuggestionResults>;
}
