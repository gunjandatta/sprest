declare module $REST.Settings {

    /**
     * CAML Query
     */
    interface CamlQuery {
        /** Gets or sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format. */
        DatesInUtc?: boolean;

        /** Gets or sets a value that specifies the server relative URL of a list folder from which results will be returned. */
        FolderServerRelativeUrl?: string;

        /** Gets or sets a value that specifies the information required to get the next page of data for the list view. */
        ListItemCollectionPosition?: any;

        /** Gets or sets value that specifies the XML schema that defines the list view. */
        ViewXml: string;
    }

    /**
     * Content Type Creation Information
     */
    interface ContentTypeCreationInformation {
        /** Gets or sets a value that specifies the description of the content type that will be constructed. */
        Description?: string;

        /** Gets or sets a value that specifies the content type group of the content type that will be constructed. */
        Group?: string;

        /** The content type id. */
        Id?: string;

        /** Gets or sets a value that specifies the name of the content type that will be constructed. */
        Name: string;
    }

    /**
     * Event Receiver Definition Creation Information
     */
    interface EventReceiverDefinitionCreationInformation {
        /** The type of event. See EventReceiverType in the .NET client object model reference for a list of values. */
        EventType: Types.EventReceiverType;

        /** Specifies the strong name of the assembly that is used for receiving events. */        
        ReceiverAssembly?: string;

        /** Specifies a string that represents the class that is used for receiving events. */
        ReceiverClass?: string;

        /** Specifies the name of the event receiver. */
        ReceiverName: string;

        /** Specifies the URL of a web service that is used for receiving events. */
        ReceiverUrl?: string;

        /** Specifies an integer that represents the relative sequence of the event. */        
        SequenceNumber?: number;
        
        /** Specifies the execution synchronization of the event receiver. */
        Synchronization?: number;
    }

    /**
     * Field Creation Information 
     */
    interface FieldCreationInformation {
        /** A value that specifies the type of the field. */
        FieldTypeKind: Types.FieldType;

        /** Indicates whether only the first eight characters are used for the field name. */
        IsCompactName?: boolean;

        /** The name of the source lookup field. */
        LookupFieldName?: string;
        
        /** The ID of the target list for the source lookup field. */
        LookupListId?: any;
        
        /** The ID of the site that contains the list that is the source for the lookup field value. */
        LookupWebId?: any;
        
        /** A value that specifies whether the field requires a value. */
        Required?: boolean;
        
        /** A value that specifies the display name of the field. */
        Title: string;
    }

    /**
     * Group Creation Information
     */
    interface GroupCreationInformation {
        /** The name of the group. */
        Title: string;
    }

    /**
     * Key-Value Pair
     */
    interface KeyValuePair {
        /** The key. */
        Key: string;

        /** The value. */
        Value: any;

        /** The value type. */
        ValueType: string;
    }

    /**
     * List Creation Information
     */
    interface ListCreationInformation {
        /** A value that specifies whether the list supports content types. */
        AllowContentTypes?: boolean;

        /** The list definition type on which the list is based. */
        BaseTemplate: Types.ListTemplateType;

        /** A value that specifies whether content types are enabled for the list. */        
        ContentTypesEnabled?: boolean;

        /** A value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow. */
        DefaultContentApprovalWorkflowId?: any;

        /** A value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL */
        DefaultDisplayFormUrl?: string;

        /** A value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL. */
        DefaultEditFormUrl?: string;

        /** A value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL. */
        DefaultNewFormUrl?: string;

        /** A value that specifies the description of the list. */
        Description?: string;

        /** A value that specifies the reading order of the list. Returns "NONE", "LTR", or "RTL". */
        Direction?: string;

        /** A value that specifies the server-relative URL of the document template for the list. */
        DocumentTemplateUrl?: string;

        /** A value that specifies the minimum permission required to view minor versions and drafts within the list. */
        DraftVersionVisibility?: Types.DraftVisibilityType;

        /** A value that specifies whether list item attachments are enabled for the list. */
        EnableAttachments?: boolean;

        /** A value that specifies whether new list folders can be added to the list. */
        EnableFolderCreation?: boolean;

        /** A value that specifies whether minor versions are enabled for the list. */
        EnableMinorVersions?: boolean;

        /** A value that specifies whether content approval is enabled for the list. */
        EnableModeration?: boolean;

        /** A value that specifies whether historical versions of list items and documents can be created in the list. */
        EnableVersioning?: boolean;

        /** A value that indicates whether forced checkout is enabled for the document library. */
        ForceCheckout?: boolean;

        /** A value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false. */
        Hidden?: boolean;

        /** */
        IrmEnabled?: boolean;

        /** */
        IrmExpire?: boolean;

        /** */
        IrmReject?: boolean;

        /** A value that specifies a flag that a client application can use to determine whether to display the list. */
        IsApplicationList?: boolean;

        /** A value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site. */
        MultipleDataList?: boolean;

        /** A value that specifies that the crawler must not crawl the list. */
        NoCrawl?: boolean;

        /** A value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false. */
        OnQuickLaunch?: boolean;

        /** The displayed title for the list. Its length must be <= 255 characters. */
        Title: string;

        /** A value that specifies the data validation criteria for a list item. Its length must be <= 1023. */
        ValidationFormula?: string;

        /** A value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023. */
        ValidationMessage?: string;
    }

    /**
     * Name-Value Pair
     */
    interface NameValuePair {
        /** The name */
        Name: string;

        /** The value */
        Value: any;
    }

    interface ReorderingRulesCreationInformation {
        Boost?: number;
        MatchType: Types.ReordingRuleMathType;
        MatchValue: string;
    }

    /**
     * Search Query Creation Information
     */
    interface SearchQueryCreationInformation {
        /** A Boolean value that specifies whether to perform result type processing for the query. */
        BypassResultTypes?: boolean;

        /** The type of the client that issued the query. */
        ClientType?: string;
        
        /** The managed properties that are used to determine how to collapse individual search results. Results are collapsed into one or a specified number of results if they match any of the individual collapse specifications. Within a single collapse specification, results are collapsed if their properties match all individual properties in the collapse specification. */
        CollapseSpecification?: string;

        /** The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft). */
        Culture?: number;

        /** The preferred number of characters to display in the hit-highlighted summary generated for a search result. */
        DesiredSnippetLength?: number;

        /** A Boolean value that specifies whether the query uses the FAST Query Language (FQL). */
        EnableFql?: boolean;

        /** A Boolean value that specifies whether the result tables that are returned for the result block are mixed with the result tables that are returned for the original query. */
        EnableInterleaving?: boolean;

        /** A Boolean value that specifies whether the exact terms in the search query are used to find matches, or if nicknames are used also. */
        EnableNicknames?: boolean;

        /** A Boolean value that specifies whether the phonetic forms of the query terms are used to find matches. */
        EnablePhonetic?: boolean;
 
        /** A Boolean value that specifies whether the hit highlighted properties can be ordered. */
        EnableOrderingHitHighlightedProperty?: boolean;

        /** A Boolean value that specifies whether to enable query rules for the query. */
        EnableQueryRules?: boolean;

        /** A Boolean value that specifies whether to sort search results. */
        EnableSorting?: boolean;

        /** A Boolean value that specifies whether stemming is enabled. */
        EnableStemming?: boolean;
        
        /** A Boolean value that specifies whether to return block rank log information in the BlockRankLog property of the interleaved result table. A block rank log contains the textual information on the block score and the documents that were de-duplicated. */
        GenerateBlockRankLog?: boolean;

        /** The additional query terms to append to the query. */
        HiddenConstraints?: string;

        /** The number of properties to show hit highlighting for in the search results. */
        HitHighlightedMultivaluePropertyLimit?: number;

        /** The properties to highlight in the search result summary when the property value matches the search terms entered by the user. */
        HithighlightedProperties?: Array<string>;

        /** The maximum number of characters to display in the hit-highlighted summary generated for a search result. */
        MaxSnippetLength?: number;

        /**A Boolean value that specifies whether to return best bet results for the query. */
        ProcessBestBets?: boolean;

        /** The GUID for the user who submitted the search query. */
        PersonalizationData?: string;

        /** A Boolean value that specifies whether to return personal favorites with the search results. */
        ProcessPersonalFavorites?: boolean;
        
        /** Additional properties for the query. */
        Properties?: Array<NameValuePair>;

        /** Custom tags that identify the query. You can specify multiple query tags, separated by semicolons. */
        QueryTag?: string;

        /** The location of the queryparametertemplate.xml file. This file is used to enable anonymous users to make Search REST queries. */
        QueryTemplatePropertiesUrl?: string;

        /** A string that contains the text that replaces the query text, as part of a query transform. */
        QueryTemplate?: string;

        /** A string that contains the text for the search query */
        Querytext: string;

        /** The ID of the ranking model to use for the query. */
        RankingModelId?: string;

        /** The set of refinement filters used when issuing a refinement query. For GET requests, the RefinementFilters parameter is specified as an FQL filter. For POST requests, the RefinementFilters parameter is specified as an array of FQL filters. */
        RefinementFilters?: Array<string>;

        /** The set of refiners to return in a search result. */
        Refiners?: Array<string>;

        /** Special rules for reordering search results. These rules can specify that documents matching certain conditions are ranked higher or lower in the results. */
        ReorderingRules?: Array<ReorderingRulesCreationInformation>

        /** The URL for the search results page. */
        ResultsURL?: string;

        /** The maximum number of rows overall that are returned in the search results. Compared to RowsPerPage, RowLimit is the maximum number of rows returned overall. */
        RowLimit?: number;

        /** The maximum number of rows to return per page. Compared to RowLimit, RowsPerPage refers to the maximum number of rows to return per page, and is used primarily when you want to implement paging for search results. */
        RowsPerPage?: number;

        /** The managed properties to return in the search results. To return a managed property, set the property's retrievable flag to true in the search schema. */
        SelectProperties?: Array<string>;

        /** The list of properties by which the search results are ordered. */
        SortList?: Array<any>;

        /** The result source ID to use for executing the search query. */
        SourceId?: string;

        /** The first row that is included in the search results that are returned. You use this parameter when you want to implement paging for search results. */
        StartRow?: number;

        /** The number of characters to display in the result summary for a search result. */
        SummaryLength?: number;

        /** The amount of time in milliseconds before the query request times out. The default value is 30000. */
        Timeout?: number;

        /** A Boolean value that specifies whether duplicate items are removed from the results. */
        TrimDuplicates?: boolean;

        /** The locale identifier (LCID) of the user interface (see Locale IDs Assigned by Microsoft). */
        UIlanguage?: number;
    }

    /**
     * Search Suggestion Creation Information
     */
    interface SearchSuggestionCreationInformation {
        /** The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft). */
        Culture?: number;

        /** A Boolean value that specifies whether stemming is enabled. */
        EnableStemming?: boolean;

        /** A Boolean value that specifies whether to turn on query rules for this query. */
        EnableQueryRules?: boolean;

        /** A Boolean value that specifies whether to capitalize the first letter in each term in the returned query suggestions. */
        fCapitalizeFirstLetters?: boolean;

        /** A Boolean value that specifies whether to hit-highlight or format in bold the query suggestions. */
        fHitHighlighting?: boolean;

        /** A Boolean value that specifies whether to return query suggestions for prefix matches. */
        fPrefixMatchAllTerms?: boolean;

        /** A Boolean value that specifies whether to retrieve pre-query or post-query suggestions. */
        fPreQuerySuggestions?: boolean;

        /** The number of query suggestions to retrieve. Must be greater than zero (0). The default value is 5. */
        iNumberOfQuerySuggestions?: number;

        /** The number of personal results to retrieve. Must be greater than zero (0). The default value is 5. */
        iNumberOfResultSuggestions?: number;

        /** A string that contains the text for the search query */
        Querytext: string;

        /** A Boolean value that specifies whether to include people names in the returned query suggestions. */
        ShowPeopleNameSuggestions?: boolean;
    }

    /**
     * User Custom Action Information
     */
    interface UserCreationInformation {
        /** The login name of the user. */
        LoginName: string;
    }

    /**
     * User Custom Action Information
     */
    interface UserCustomActionCreationInformation {
        /** A value that specifies an implementation specific XML fragment that determines user interface properties of the custom action. */
        CommandUIExtension?: string;

        /** The description of the custom action. */
        Description?: string;

        /** A value that specifies an implementation-specific value that determines the position of the custom action in the page. */
        Group?: string;

        /** The URL of the image associated with the custom action. */
        ImageUrl?: string;

        /** The location of the custom action. */
        Location?: string;

        /** The name of the custom action. */
        Name?: string;

        /** The value that specifies the identifier of the object associated with the custom action. */
        RegistrationId?: string;

        /** The value that specifies the type of object associated with the custom action. Represents an SP.UserCustomActionRegistrationType value. */
        RegistrationType?: Types.UserCustomActionRegistrationType;

        /** The value that specifies the permissions needed for the custom action. */
        Rights?: any;

        /** The value that specifies the ECMAScript to be executed when the custom action is performed. */
        ScriptBlock?: string;

        /** A value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
        ScriptSrc?: string;

        /** The value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
        Sequence?: number;

        /** The display title of the custom action. */
        Title?: string;

        /** The URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
        Url?: string;
    }

    /**
     * View Creation Information
     */
    interface ViewCreationInformation {
        /** A value that specifies whether the new list view is a paged view. */
        Paged?: boolean;

        /** A value that specifies whether the new list view is a personal view. If the value is false, the new list view is a public view. */
        PersonalView?: boolean;

        /** A value that specifies the query for the new list view. */
        Query?: string;

        /** A value that specifies the maximum number of list items that the new list view displays on a visual page of the list view. */
        RowLimit?: number;

        /** A value that specifies whether the new list view is the default list view. */
        SetAsDefaultView?: boolean;

        /** A value that specifies the display name of the new list view. */
        Title: string;

        /** A value that specifies the type of the new list view. */
        ViewTypeKind: Types.ViewType;
    }

    /**
     * Web Creation Information
     */
    interface WebCreationInformation {
        /** The description of the new site. */
        Description?: string;

        /** The locale ID that specifies the language of the new site. */
        Language?: number;

        /** A value that specifies the title of the new site. */
        Title: string;

        /** The URL leaf name of the new site. The URL must not contain the following:
            The characters ~, ", #, %, &, *, :, <, >, ?, \, {, |, or }
            The string \x7f
            Consecutive . or / characters
            Starting ., /, or _ characters
            Ending . or / characters
        */
        Url: string;

        /** A value that specifies whether the new site will inherit permissions from its parent site. */
        UseSamePermissionsAsParentSite?: boolean;

        /** A value that specifies the name of the site template to be used for creating the new site. Use the GetAvailableWebTemplates method to get the names of available web templates on the site. */
        WebTemplate: string;
    }
}