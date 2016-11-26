declare module $REST.Types {

    /**
     * Search
     */
    interface ISearch extends IBase {
        /**
         * Constructor
         * @param url - The optional url to execute the search against.
         * @param settings - The search settings.
         */
        new(url?:string, settings?:ComplexTypes.TargetInfoSettings): ISearch;

        /**
         * Methods
         */

        /** Method to execute a search query.
         * @param settings - The search request settings.
        */
        postquery(settings:ComplexTypes.SearchRequest) : ComplexTypes.SearchResult;

        /** Method to execute a search query.
         * @param settings - The search request settings.
        */
        query(settings:ComplexTypes.SearchRequest) : ComplexTypes.SearchResult;

        /** Method to execute a search suggestion.
         * @param settings - The search suggest settings.
        */
        suggest(settings:ComplexTypes.SearchSuggest) : ComplexTypes.QuerySuggestionResults;
    }
}