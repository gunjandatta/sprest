import { Base } from "../../../../../";
import { Microsoft } from "../../../../../";

/*********************************************
* ISearchService
**********************************************/
export interface ISearchService extends SearchServiceCollections, SearchServiceMethods, Base.IBaseExecution<ISearchService> {

}

/*********************************************
* ISearchServiceCollection
**********************************************/
export interface ISearchServiceCollection extends Base.IBaseResults<SearchService> {
	done?: (resolve: (value?: Array<SearchService>) => void) => void;
}

/*********************************************
* ISearchServiceQueryCollection
**********************************************/
export interface ISearchServiceQueryCollection extends Base.IBaseResults<SearchServiceOData> {
	done?: (resolve: (value?: Array<SearchServiceOData>) => void) => void;
}

/*********************************************
* ISearchServiceQuery
**********************************************/
export interface ISearchServiceQuery extends SearchServiceOData, SearchServiceMethods {

}

/*********************************************
* SearchService
**********************************************/
export interface SearchService extends Base.IBaseResult, SearchServiceProps, SearchServiceCollections, SearchServiceMethods {

}

/*********************************************
* SearchServiceProps
**********************************************/
export interface SearchServiceProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SearchServicePropMethods
**********************************************/
export interface SearchServicePropMethods {

}

/*********************************************
* SearchServiceCollections
**********************************************/
export interface SearchServiceCollections extends SearchServicePropMethods {

}

/*********************************************
* SearchServiceOData
**********************************************/
export interface SearchServiceOData extends Base.IBaseResult, SearchServiceProps, SearchServiceMethods {

}

/*********************************************
* SearchServiceMethods
**********************************************/
export interface SearchServiceMethods {
	autocompletions(querytext?: string, sources?: string, numberOfCompletions?: number, cursorPosition?: number): Base.IBaseExecution<Microsoft.SharePoint.Client.Search.Query.QueryAutoCompletionResults>;
	export(userName?: string, startTime?: any): Base.IBaseExecution<string>;
	exportmanualsuggestions(): Base.IBaseExecution<Microsoft.SharePoint.Client.Search.Query.TenantCustomQuerySuggestions>;
	exportpopulartenantqueries(count?: number): Base.IBaseCollection<Microsoft.SharePoint.Client.Search.Query.PopularTenantQuery>;
	postquery(request?: Microsoft.Office.Server.Search.REST.SearchRequest): Base.IBaseExecution<Microsoft.Office.Server.Search.REST.SearchResult>;
	query(querytext?: string, queryTemplate?: string, enableInterleaving?: boolean, sourceId?: any, rankingModelId?: string, startRow?: number, rowLimit?: number, rowsPerPage?: number, selectProperties?: string, culture?: number, refinementFilters?: string, refiners?: string, hiddenConstraints?: string, sortList?: string, enableStemming?: boolean, trimDuplicates?: boolean, timeout?: number, enableNicknames?: boolean, enablePhonetic?: boolean, enableFQL?: boolean, hitHighlightedProperties?: string, propertiesToGenerateAcronyms?: string, bypassResultTypes?: boolean, processBestBets?: boolean, clientType?: string, personalizationData?: any, resultsUrl?: string, queryTag?: string, trimDuplicatesIncludeId?: number, totalRowsExactMinimum?: number, impressionId?: string, properties?: string, enableQueryRules?: boolean, summaryLength?: number, maxSnippetLength?: number, desiredSnippetLength?: number, uiLanguage?: number, blockDedupeMode?: number, generateBlockRankLog?: boolean, enableSorting?: boolean, collapseSpecification?: string, processPersonalFavorites?: boolean, enableOrderingHitHighlightedProperty?: boolean, hitHighlightedMultivaluePropertyLimit?: number, queryTemplatePropertiesUrl?: string, timeZoneId?: number, useOLSQuery?: number, OLSQuerySession?: string): Base.IBaseExecution<Microsoft.Office.Server.Search.REST.SearchResult>;
	recordPageClick(pageInfo?: string, clickType?: string, blockType?: number, clickedResultId?: string, subResultIndex?: number, immediacySourceId?: string, immediacyQueryString?: string, immediacyTitle?: string, immediacyUrl?: string): Base.IBaseExecution<any>;
	resultspageaddress(): Base.IBaseExecution<string>;
	searchcenterurl(): Base.IBaseExecution<string>;
	suggest(querytext?: string, iNumberOfQuerySuggestions?: number, iNumberOfResultSuggestions?: number, iNumberOfPopularResultSuggestions?: number, fPreQuerySuggestions?: boolean, fHitHighlighting?: boolean, fCapitalizeFirstLetters?: boolean, culture?: number, enableStemming?: boolean, showPeopleNameSuggestions?: boolean, enableQueryRules?: boolean, fPrefixMatchAllTerms?: boolean, sourceId?: string, clientType?: string, useOLSQuery?: number, OLSQuerySession?: string, zeroTermSuggestions?: boolean): Base.IBaseExecution<Microsoft.SharePoint.Client.Search.Query.QuerySuggestionResults>;
	searchquery(request?: Microsoft.Office.Server.Search.REST.SearchRequest): Base.IBaseExecution<Microsoft.Office.Server.Search.REST.SearchResult>;
}

/*********************************************
* ISearchSetting
**********************************************/
export interface ISearchSetting extends SearchSettingCollections, SearchSettingMethods, Base.IBaseQuery<SearchSetting, ISearchSettingQuery> {

}

/*********************************************
* ISearchSettingCollection
**********************************************/
export interface ISearchSettingCollection extends Base.IBaseResults<SearchSetting> {
	done?: (resolve: (value?: Array<SearchSetting>) => void) => void;
}

/*********************************************
* ISearchSettingQueryCollection
**********************************************/
export interface ISearchSettingQueryCollection extends Base.IBaseResults<SearchSettingOData> {
	done?: (resolve: (value?: Array<SearchSettingOData>) => void) => void;
}

/*********************************************
* ISearchSettingQuery
**********************************************/
export interface ISearchSettingQuery extends SearchSettingOData, SearchSettingMethods {

}

/*********************************************
* SearchSetting
**********************************************/
export interface SearchSetting extends Base.IBaseResult, SearchSettingProps, SearchSettingCollections, SearchSettingMethods {

}

/*********************************************
* SearchSettingProps
**********************************************/
export interface SearchSettingProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SearchSettingPropMethods
**********************************************/
export interface SearchSettingPropMethods {

}

/*********************************************
* SearchSettingCollections
**********************************************/
export interface SearchSettingCollections extends SearchSettingPropMethods {

}

/*********************************************
* SearchSettingOData
**********************************************/
export interface SearchSettingOData extends Base.IBaseResult, SearchSettingProps, SearchSettingMethods {

}

/*********************************************
* SearchSettingMethods
**********************************************/
export interface SearchSettingMethods {
	getpromotedresultqueryrules(siteCollectionLevel?: boolean, offset?: number, numberOfRules?: number): Base.IBaseExecution<Microsoft.Office.Server.Search.REST.PromotedResultsOperationsResult>;
	getqueryconfiguration(callLocalSearchFarmsOnly?: boolean, skipGroupObjectIdLookup?: boolean): Base.IBaseExecution<Microsoft.Office.Server.Search.REST.QueryConfiguration>;
	getxssearchpolicy(): Base.IBaseExecution<Microsoft.Office.Server.Search.REST.XSSearchPolicy>;
	pingadminendpoint(): Base.IBaseExecution<boolean>;
	setxssearchpolicy(policy?: string): Base.IBaseExecution<Microsoft.Office.Server.Search.REST.XSSearchPolicy>;
}
