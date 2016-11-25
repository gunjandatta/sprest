declare module $REST.Types {

    /**
     * Data Table
     */
    interface IDataTable {
        /** The rows. */
        Rows: Array<IDataTableRow>;
    }

    /**
     * Data Table Row
     */
    interface IDataTableRow {
        /** The cells. */
        Cells: Array<Settings.KeyValuePair>
    }

    /**
     * Search
     */
    interface ISearch extends IBase {
        /**
         * Constructor
         * @param url - The optional url to execute the search against.
         * @param settings - The search settings.
         */
        new(url?:string, settings?:Settings.TargetInfoSettings): ISearch;

        /**
         * Methods
         */

        /** Method to execute a search query.
         * @param settings - The query settings.
        */
        postquery(settings:Settings.SearchQueryCreationInformation) : IQuery;

        /** Method to execute a search query.
         * @param settings - The query settings.
        */
        query(settings:Settings.SearchQueryCreationInformation) : IQuery;

        /** Method to execute a search suggestion.
         * @param settings - The suggestion settings.
        */
        suggest(settings:Settings.SearchSuggestionCreationInformation) : ISuggestion;
    }

    /**
     * Query
     */
    interface IQuery {
        /** The primary query results. */
        PrimaryQueryResult: IQueryResult;

        /** The properties. */
        Properties: Array<Settings.KeyValuePair>;

        /** The secondary query results. */
        SecondaryQueryResults: Array<IQueryResult>;

        /** The spelling suggestions. */
        SpellingSuggestions: any;

        /** The trigger rules. */
        TriggeredRules: Array<string>;
    }

    /**
     * Query Result
     */
    interface IQueryResult {
        /** The custom results. */
        CustomResults: Array<any>;

        /** The query id. */
        QueryId: string;

        /** The query rule id. */
        QueryRuleId: string;

        /** The refinement results. */
        RefinementResults: any;

        /** The relevant results. */
        RelevantResults: IRelevantResults;

        /** The special term results. */
        SpecialTermResults: any;
    }

    /**
     * Relevant Results
     */
    interface IRelevantResults {
        /** The group template id. */
        GroupTemplateId: string;

        /** The item template id. */
        ItemTemplateId: string;

        /** The properties. */
        Properties: Array<Settings.KeyValuePair>;

        /** The result title. */
        ResultTitle: string;

        /** The result title url. */
        ResultTitleUrl: string;

        /** The row count. */
        RowCount: number;

        /** The table. */
        Table: IDataTable;

        /** The total rows. */
        TotalRows: number;

        /** The total rows including duplicates. */
        TotalRowsIncludingDuplicates: number;
    }

    /**
     * Suggestion
     */
    interface ISuggestion {
        /** The people names. */
        PeopleNames: Array<string>;

        /** The personal results. */
        PersonalResults: Array<any>;

        /** The queries. */
        Queries: Array<any>;
    }
}