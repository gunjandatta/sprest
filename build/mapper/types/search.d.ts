import { IBase, ITargetInfo } from "../../utils/types";
import { ComplexTypes } from ".";
export interface ISearch extends IBase<ISearch, ComplexTypes.SearchResult> {
    new (url?: string, settings?: ITargetInfo): ISearch;
    postquery(settings: ComplexTypes.SearchRequest): IBase<ComplexTypes.SearchResult>;
    searchquery(settings: ComplexTypes.SearchRequest): IBase<ComplexTypes.SearchResult>;
    suggest(settings: ComplexTypes.SearchSuggestion): IBase<ComplexTypes.QuerySuggestionResults>;
}
