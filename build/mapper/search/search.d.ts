import { IBase, ITargetInfo } from "../../utils/index.def";
import { Types } from "../..";
/**
 * Search
 */
export interface ISearch extends IBase<ISearch, Types.ComplexTypes.SearchResult> {
    /**
     * Constructor
     * @param url - The optional url to execute the search against.
     * @param settings - The search settings.
     */
    new (url?: string, settings?: ITargetInfo): ISearch;
    /** Method to execute a search query.
     * @param settings - The search request settings.
    */
    postquery(settings: Types.ComplexTypes.SearchRequest): IBase<Types.ComplexTypes.SearchResult>;
    /** Method to execute a search query.
     * @param settings - The search request settings.
    */
    searchquery(settings: Types.ComplexTypes.SearchRequest): IBase<Types.ComplexTypes.SearchResult>;
    /** Method to execute a search suggestion.
     * @param settings - The search suggest settings.
    */
    suggest(settings: Types.ComplexTypes.SearchSuggestion): IBase<Types.ComplexTypes.QuerySuggestionResults>;
}
