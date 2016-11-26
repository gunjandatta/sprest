declare module $REST.ComplexTypes {
    /**
     * App License
     */
    interface AppLicense {
        RawXMLLicenseToken: string;
    }

    /**
     * App License Collection
     */
    interface AppLicenseCollection {
        Items: Results.AppLicense;
    }

    /**
     * App Properties
     */
    interface AppProperties {
        AppSettingsEnabled: boolean;
        Description: string;
        EulaUrl: string;
        IsAnonymous: boolean;
        IsDisabled: boolean;
        ManagedDeploymentEnabled: boolean;
        ManagePermissionsEnabled: boolean;
        ManageSeatsEnabled: boolean;
        MonitoringEnabled: boolean;
        Publisher: string;
        RemoveEnabled: boolean;
        SideLoadEnabled: boolean;
        SupportUrl: string;
        ViewInMarketPlaceEnabled: boolean;
    }

    /**
     * App Site Context
     */
    interface AppSiteContext {
        SiteUrl: string;
    }

    /**
     * App View Creation Information
     */
    interface AppViewCreationInfo {
        AppId: string;
        Title: string;
    }

    /**
     * Attachment Creation Information
     */
    interface AttachmentCreationInformation {
        FileName: string;
    }

    /**
     * Base Permissions
     */
    interface BasePermissions {
        High: number;
        Low: number;
    }

    /**
     * Caml Query
     */
    interface CamlQuery {
        DatesInUtc: boolean;
        FolderServerRelativeUrl: string;
        ListItemCollectionPosition: ListItemCollectionPosition;
        ViewXml: string;
    }

    /**
     * Change Log Item Query
     */
    interface ChangeLogItemQuery {
        ChangeToken: string;
        Contains: string;
        Query: string;
        QueryOptions: string;
        RowLimit: string;
        ViewFields: string;
        ViewName: string;
    }

    /**
     * Change Query
     */
    interface ChangeQuery {
        Activity: boolean;
        Add: boolean;
        Alert: boolean;
        ChangeTokenEnd: ChangeToken;
        ChangeTokenStart: ChangeToken;
        ContentType: boolean
        DeleteObject: boolean
        FetchLimit: number;
        Field: boolean;
        File: boolean;
        Folder: boolean;
        Group: boolean;
        GroupMembershipAdd: boolean;
        GroupMembershipDelete: boolean;
        Item: boolean;
        LatestFirst: boolean;
        List: boolean;
        Move: boolean;
        Navigation: boolean;
        RecursiveAll: boolean;
        Rename: boolean;
        RequireSecurityTrim: boolean;
        Restore: boolean;
        RoleAssignmentAdd: boolean;
        RoleAssignmentDelete: boolean;
        RoleDefinitionAdd: boolean;
        RoleDefinitionDelete: boolean;
        RoleDefinitionUpdate: boolean;
        SecurityPolicy: boolean;
        Site: boolean;
        SystemUpdate: boolean;
        Update: boolean;
        User: boolean;
        View: boolean;
        Web: boolean;
    }

    /**
     * Change Token
     */
    interface ChangeToken {
        StringValue: string;
    }

    /**
     * Content Type Creation Information
     */
    interface ContentTypeCreationInformation {
        /** The content type description. */
        Description?: string;

        /** The content type group. */
        Group?: string;

        /** The content type id. */
        Id?: string;

        /** The content type name. */
        Name: string;
    }

    /**
     * Content Type Id
     */
    interface ContentTypeId {
        StringValue: string;
    }

    /**
     * Context Web Information
     */
    interface ContextWebInformation {
        FormDigestTimeoutSeconds: number;
        FormDigestValue: string;
        LibraryVersion: string;
        SiteFullUrl: string;
        SupportedSchemaVersions: Results.String;
        WebFullUrl: string;
    }

    /**
     * Copy Job Progress
     */
    interface CopyJobProgress {
        JobState: number;
        Logs: Results.String;
    }

    /**
     * Copy Migration Information
     */
    interface CopyMigrationInfo {
        EncryptionKey: any;
        JobId: string;
        JobQueueUri: string;
    }

    /**
     * Copy Migration Options
     */
    interface CopyMigrationOptions {
        IgnoreVersionHistory: boolean;
    }

    /**
     * Creatable Item Information
     */
    interface CreatableItemInfo {
        DocumentTemplate: number;
        FileExtension: string;
        ItemType: string;
    }

    /**
     * Creatable Item Information Collection
     */
    interface CreatableItemInfoCollection {
        Items: Results.CreatableItemInfo;
    }

    /**
     * Custom Action Element
     */
    interface CustomActionElement {
        CommandUIExtension: string;
        EnabledScript: string;
        ImageUrl: string;
        Location: string;
        RegistrationId: string;
        RegistrationType: number;
        RequireSiteAdministrator: boolean;
        Rights: BasePermissions;
        Title: string;
        UrlAction: string;
    }

    /**
     * Custom Action Element Collection
     */
    interface CustomActionElementCollection {
        Items: Results.CustomActionElement;
    }

    /**
     * Document Library Information
     */
    interface DocumentLibraryInformation {
        AbsoluteUrl: string;
        Modified: string;
        ModifiedFriendlyDisplay: string;
        ServerRelativeUrl: string;
        Title: string;
    }

    /**
     * Encryption Option
     */
    interface EncryptionOption {
        AES256CBCKey: any;
    }

    /**
     * Event Receiver Definition Creation Information
     */
    interface EventReceiverDefinitionCreationInformation {
        /** The event receiver type. */
        EventType: Types.EventReceiverType;

        /** The strong name of the assembly that is used for receiving events. */        
        ReceiverAssembly?: string;

        /** A string that represents the class that is used for receiving events. */
        ReceiverClass?: string;

        /** The name of the event receiver. */
        ReceiverName: string;

        /** The URL of a web service that is used for receiving events. */
        ReceiverUrl?: string;

        /** An integer that represents the relative sequence of the event. */        
        SequenceNumber?: number;
        
        /** The execution synchronization of the event receiver. */
        Synchronization?: number;
    }

    /**
     * Ingestion Task Key
     */
    interface IngestionTaskKey {
        IngestionTableAccountKey: string;
        IngestionTableAccountName: string;
        JobId: string;
        TaskId: string;
        TenantName: string;
    }

    /**
     * Field Calculation Error Value
     */
    interface FieldCalculationErrorValue {
        ErrorMessage: string;
    }

    /**
     * Field Creation Information 
     */
    interface FieldCreationInformation {
        /** The choices. */
        Choices: Results.String;

        /** The field type. */
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
     * Field Geolocation Value
     */
    interface FieldGeolocationValue {
        Altitude: number;
        Latitude: number;
        Longitude: number;
        Measure: number;
    }

    /**
     * Field Lookup Value
     */
    interface FieldLookupValue {
        LookupId: number;
        LookupValue: string;
    }

    /**
     * Field Rating Scale Question Answer
     */
    interface FieldRatingScaleQuestionAnswer {
        Answer: number;
        Question: string;
    }

    /**
     * Field Url Value
     */
    interface FieldUrlValue {
        Description: string;
        Url: string;
    }

    /**
     * Field User Value
     */
    interface FieldUserValue {
        Email: string;
    }

    /**
     * File Collection Add Parameters
     */
    interface FileCollectionAddParameters {
        Overwrite: boolean;
    }

    /**
     * File Creation Information
     */
    interface FileCreationInformation {
        Content: any;
        Overwrite: boolean;
        Url: string;
    }

    /**
     * Folder Collection Add Parameters
     */
    interface FolderCollectionAddParameters {
        Overwrite: boolean;
    }

    /**
     * Group Creation Information
     */
    interface GroupCreationInformation {
        /** The group description. */
        Description: string;

        /** The group name. */
        Title: string;
    }

    /**
     * Hashtag
     */
    interface Hashtag {
        Actor: string;
        Application: string;
        Label: string;
        Timestamp: string;
    }

    /**
     * Key Value
     */
    interface KeyValue {
        Key: string;
        Value: string;
        ValueType: string;
    }

    /**
     * Language
     */
    interface Language {
        DisplayName: string;
        LanguageTag: string;
        Lcid: number;
    }

    /**
     * List Creation Information
     */
    interface ListCreationInformation {
        CustomSchemaXml: string;
        DataSourceProperties: Results.KeyValue;
        Description: string;
        DocumentTemplateType: number;
        QuickLaunchOption: number;
        TemplateFeatureId: string;
        TemplateType: number;
        Title: string;
        Url: string;
    }

    /**
     * List Data Source
     */
    interface ListDataSource {
        Properties: Results.KeyValue;
    }

    /**
     * List Data Validation Exception Value
     */
    interface ListDataValidationExceptionValue {
        FieldFailures: Results.ListDataValidationFailure;
        ItemFailures: ListDataValidationFailure;
    }

    /**
     * List Data Validation Failure
     */
    interface ListDataValidationFailure {
        DisplayName: string;
        Message: string;
        Name: string;
        Reason: number;
        ValidationType: number;
    }

    /**
     * List Item Collection Position
     */
    interface ListItemCollectionPosition {
        PagingInfo: string;
    }

    /**
     * List Item Creation Information
     */
    interface ListItemCreationInformation {
        FolderUrl: string;
        LeafName: string;
        UnderlyingObjectType: number;
    }

    /**
     * List Item Form Update Value
     */
    interface ListItemFormUpdateValue {
        ErrorMessage: string;
        FieldName: string;
        FieldValue: string;
        HasException: boolean;
    }

    /**
     * Menu Node
     */
    interface MenuNode {
        CustomProperties: Results.KeyValue;
        FriendlyUrlSegment: string;
        IsDeleted: boolean;
        IsHidden: boolean;
        Key; string;
        Nodes: Results.MenuNode;
        NodeType: number;
        SimpleUrl: string;
        Title: string;
    }

    /**
     * Menu State
     */
    interface MenuState {
        FriendlyUrlPrefix: string;
        Nodes: Results.MenuNode;
        SimpleUrl: string;
        SPSitePrefix: string;
        SPWebPrefix: string;
        StartingNodeKey: string;
        StartingNodeTitle: string;
        Version: string;
    }

    /**
     * Method Information
     */
    interface MethodInformation {
        IsBeta: boolean;
        Name: string;
        Parameters: Results.ParameterInformation;
        ReturnTypeFullName: string;
    }

    /**
     * Navigation Node Creation Information
     */
    interface NavigationNodeCreationInformation {
        AsLastNode: boolean;
        IsExternal: boolean;
        Title: string;
        Url: string;
    }

    /**
     * Parameter Information
     */
    interface ParameterInformation {
        Name: string;
        ParameterTypeFullName: string;
    }

    /**
     * Property Information
     */
    interface PropertyInformation {
        ExcludeFromDefaultRetrieval: boolean;
        IsBeta: boolean;
        Name: string;
        PropertyTypeFullName: string;
        ReadOnly: boolean;
    }

    /**
     * Provisioned Migration Containers Information
     */
    interface ProvisionedMigrationContainersInfo {
        DataContainerUri: string;
        EncryptionKey: any;
        MetadataContainerUri: string;
    }

    /**
     * Provisioned Migration Queue Info
     */
    interface ProvisionedMigrationQueueInfo {
        JobQueueUri: string;
    }

    /**
     * Recycle Bin Queue Information
     */
    interface RecycleBinQueueInformation {
        IsAscending: boolean;
        ItemState: number;
        OrderBy: number;
        PagingInfo: string;
        RowLimit: number;
        ShowOnlyMyItems: boolean;
    }

    /**
     * Related Item
     */
    interface RelatedItem {
        IconUrl: string;
        ItemId: number;
        ListId: string;
        Title: string;
        Url: string;
        WebId: string;
    }

    /**
     * Render List Context Menu Data Parameters
     */
    interface RenderListContextMenuDataParameters {
        CascDelWarnMessage: string;
        CustomAction: string;
        Field: string;
        ID: string;
        InplaceFullListSearch: string;
        InplaceSearchQuery: string;
        IsCSR: string;
        IsXslView: string;
        ItemId: string;
        ListViewPageUrl: string;
        OverrideScope: string;
        RootFolder: string;
        View: string;
        ViewCount: string;
    }

    /**
     * Render List Data Override Parameters
     */
    interface RenderListDataOverrideParameters {
        CascDelWarnMessage: string;
        CustomAction: string;
        DrillDown: string;
        Field: string;
        FieldInternalName: string;
        Filter: string;
        FilterData: string;
        FilterData1: string;
        FilterData2: string;
        FilterData3: string;
        FilterData4: string;
        FilterData5: string;
        FilterData6: string;
        FilterData7: string;
        FilterData8: string;
        FilterData9: string;
        FilterData10: string;
        FilterField: string;
        FilterField1: string;
        FilterField2: string;
        FilterField3: string;
        FilterField4: string;
        FilterField5: string;
        FilterField6: string;
        FilterField7: string;
        FilterField8: string;
        FilterField9: string;
        FilterField10: string;
        FilterFields: string;
        FilterFields1: string;
        FilterFields2: string;
        FilterFields3: string;
        FilterFields4: string;
        FilterFields5: string;
        FilterFields6: string;
        FilterFields7: string;
        FilterFields8: string;
        FilterFields9: string;
        FilterFields10: string;
        FilterLookupId: string;
        FilterLookupId1: string;
        FilterLookupId2: string;
        FilterLookupId3: string;
        FilterLookupId4: string;
        FilterLookupId5: string;
        FilterLookupId6: string;
        FilterLookupId7: string;
        FilterLookupId8: string;
        FilterLookupId9: string;
        FilterLookupId10: string;
        FilterOp: string;
        FilterOp1: string;
        FilterOp2: string;
        FilterOp3: string;
        FilterOp4: string;
        FilterOp5: string;
        FilterOp6: string;
        FilterOp7: string;
        FilterOp8: string;
        FilterOp9: string;
        FilterOp10: string;
        FilterValue: string;
        FilterValue1: string;
        FilterValue2: string;
        FilterValue3: string;
        FilterValue4: string;
        FilterValue5: string;
        FilterValue6: string;
        FilterValue7: string;
        FilterValue8: string;
        FilterValue9: string;
        FilterValue10: string;
        FilterValues: string;
        FilterValues1: string;
        FilterValues2: string;
        FilterValues3: string;
        FilterValues4: string;
        FilterValues5: string;
        FilterValues6: string;
        FilterValues7: string;
        FilterValues8: string;
        FilterValues9: string;
        FilterValues10: string;
        GroupString: string;
        HasOverrideSelectCommand: string;
        ID: string;
        InplaceFullListSearch: string;
        InplaceSearchQuery: string;
        IsCSR: string;
        IsGroupRender: string;
        IsXslView: string;
        ListViewPageUrl: string;
        OverrideScope: string;
        OverrideSelectCommand: string;
        PageFirstRow: string;
        PageLastRow: string;
        RootFolder: string;
        SortDir: string;
        SortDir1: string;
        SortDir2: string;
        SortDir3: string;
        SortDir4: string;
        SortDir5: string;
        SortDir6: string;
        SortDir7: string;
        SortDir8: string;
        SortDir9: string;
        SortDir10: string;
        SortField: string;
        SortField1: string;
        SortField2: string;
        SortField3: string;
        SortField4: string;
        SortField5: string;
        SortField6: string;
        SortField7: string;
        SortField8: string;
        SortField9: string;
        SortField10: string;
        SortFields: string;
        SortFieldValues: string;
        View: string;
        ViewCount: string;
        ViewId: string;
        WebPartId: string;
    }

    /**
     * Render List Data Parameters
     */
    interface RenderListDataParameters {
        AllowMultipleValueFilterForTaxonomyFields: boolean;
        DatesInUtc: boolean;
        ExpandGroups: boolean;
        FirstGroupOnly: boolean;
        FolderServerRelativeUrl: string;
        OverrideViewXml: string;
        Paging: string;
        RenderingOptions: number;
        ViewXml: string;
    }

    /**
     * Render List Filter Data Parameters
     */
    interface RenderListFilterDataParameters {
        ExcludeFieldFilteringHtml: boolean;
        FieldInternalName: string;
        OverrideScope: string;
        ProcessQStringToCAML: string;
        ViewId: string;
    }

    /**
     * Resource Path
     */
    interface ResourcePath {
        DecodedUrl: string;
    }

    /**
     * Role Definition Creation Information
     */
    interface RoleDefinitionCreationInformation {
        BasePermissions: BasePermissions;
        Description: string;
        Name: string;
        Order: number;
    }

    /**
     * Shared User
     */
    interface SharedWithUser {
        Email: string;
        Name: string;
    }

    /**
     * Shared User Collection
     */
    interface SharedWithUserCollection {
        Items: Results.SharedWithUser;
    }

    /**
     * Sharing Link Information
     */
    interface SharingLinkInfo {
        Expiration: string;
        IsActive: boolean;
        LinkKind: number;
        Url: string;
    }

    /**
     * Simple Data Row
     */
    interface SimpleDataRow {
        Cells: Results.DataRow;
    }

    /**
     * Simple Data Table
     */
    interface SimpleDataTable {
        Rows: Results.KeyValue;
    }

    /**
     * SP Invitation Creation Result
     */
    interface SPInvitationCreationResult {
        Email: string;
        InvitationLink: string;
        Lcid: number;
    }

    /**
     * Subweb Query
     */
    interface SubwebQuery {
        ConfigurationFilter: number;
        WebTemplateFilter: number;
    }

    /**
     * Tenant App Information
     */
    interface TenantAppInformation {
        AppPrincipalId: string;
        AppWebFullUrl: string;
        CreationTime: string;
        IconAbsoluteUrl: string;
        IconFallbackAbsoluteUrl: string;
        Id: string;
        LaunchUrl: string;
        PackageFingerprint: any;
        ProductId: string;
        RemoteAppUrl: string;
        Status: number;
        Title: string;
    }

    /**
     * Time Zone Information
     */
    interface TimeZoneInformation {
        Bias: number;
        DaylightBias: number;
        StandardBias: number;
    }

    /**
     * Upgrade Info
     */
    interface UpgradeInfo {
        ErrorFile: string;
        Errors: number;
        LastUpdated: string;
        LogFile: string;
        RequestDate: string;
        RetryCount: number;
        StartTime: string;
        Status: number;
        UpgradeType: number;
        Warnings: number;
    }

    /**
     * Usage Information
     */
    interface UsageInfo {
        Bandwidth: number;
        DiscussionStorage: number;
        Hits: number;
        Storage: number;
        StoragePercentageUsed: number;
        Visits: number;
    }

    /**
     * User Creation Information
     */
    interface UserCreationInformation {
        Email: string;
        LoginName: string;
        Title: string;
    }

    /**
     * User Id Information
     */
    interface UserIdInfo {
        NameId: string;
        NameIdIssuer: string;
    }

    /**
     * View Creation Information
     */
    interface ViewCreationInformation {
        /** The new list view is a paged view. */
        Paged?: boolean;

        /** The new list view is a personal view. If the value is false, the new list view is a public view. */
        PersonalView?: boolean;

        /** The query for the new list view. */
        Query: string;

        /** The maximum number of list items that the new list view displays on a visual page of the list view. */
        RowLimit?: number;

        /** Option to set as default view. */
        SetAsDefaultView?: boolean;

        /** The name of the view. */
        Title: string;

        /** The view fields. */
        ViewFields: Results.String;

        /** The view type. */
        ViewTypeKind: Types.ViewType;
    }

    /**
     * Visualization
     */
    interface Visualization {
        DefaultScreen: VisualizationStyleSet;
        DetailView: VisualizationStyleSet;
        MediumScreen: VisualizationStyleSet;
        SmallScreen: VisualizationStyleSet;
        VisualizationAppInfo: VisualizationAppInfo;
        VisualizationType: number;
    }

    /**
     * Visualization App Information
     */
    interface VisualizationAppInfo {
        DesignUri: string;
        Id: string;
        RuntimeUri: string;
    }

    /**
     * Visualization Field
     */
    interface VisualizationField {
        InternalName: string;
        Style: string;
    }

    /**
     * Visualization Style Set
     */
    interface VisualizationStyleSet {
        AspectRatio: string;
        BackgroundColor: string;
        Fields: Results.VisualizationField;
        MinHeight: string;
    }

    /**
     * Web Creation Information
     */
    interface WebCreationInformation {
        Description?: string;
        Language?: number;
        Title: string;
        Url: string;
        UseSamePermissionsAsParentSite?: boolean;
        WebTemplate: string;
    }

    /**
     * Web Information Creation Information
     */
    interface WebInfoCreationInformation {
        Description?: string;
        Language?: number;
        Title: string;
        Url: string;
        UseUniquePermissions?: boolean;
        WebTemplate: string;
    }

    /**
     * Web Request Information
     */
    interface WebRequestInfo {
        Body: string;
        Headers: Results.KeyValue;
        StatusCode: number;
    }

    /**
     * Web Response Information
     */
    interface WebResponseInfo {
        Body: string;
        Headers: Results.KeyValue;
        StatusCode: number;
    }

    /**
     * Xml Schema Field Creation Information
     */
    interface XmlSchemaFieldCreationInformation {
        Options: number;
        SchemaXml: string;
    }
}