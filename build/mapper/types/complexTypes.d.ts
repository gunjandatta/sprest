import { Types } from "../..";
export interface AppLicense {
    RawXMLLicenseToken: string;
}
export interface AppLicenseCollection {
    Items: AppLicense;
}
export interface AppProperties {
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
export interface AppSiteContext {
    SiteUrl: string;
}
export interface AppViewCreationInfo {
    AppId: string;
    Title: string;
}
export interface AttachmentCreationInformation {
    FileName: string;
}
export interface BasePermissions {
    High: number;
    Low: number;
}
export interface CamlQuery {
    DatesInUtc: boolean;
    FolderServerRelativeUrl: string;
    ListItemCollectionPosition: ListItemCollectionPosition;
    ViewXml: string;
}
export interface ChangeLogItemQuery {
    ChangeToken: string;
    Contains: string;
    Query: string;
    QueryOptions: string;
    RowLimit: string;
    ViewFields: string;
    ViewName: string;
}
export interface ChangeQuery {
    Activity: boolean;
    Add: boolean;
    Alert: boolean;
    ChangeTokenEnd: ChangeToken;
    ChangeTokenStart: ChangeToken;
    ContentType: boolean;
    DeleteObject: boolean;
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
export interface ChangeToken {
    StringValue: string;
}
export interface ContentTypeCreationInformation {
    Description?: string;
    Group?: string;
    Id?: string;
    Name: string;
}
export interface ContentTypeId {
    StringValue: string;
}
export interface ContextWebInformation {
    FormDigestTimeoutSeconds: number;
    FormDigestValue: string;
    LibraryVersion: string;
    SiteFullUrl: string;
    SupportedSchemaVersions: String;
    WebFullUrl: string;
}
export interface CopyJobProgress {
    JobState: number;
    Logs: String;
}
export interface CopyMigrationInfo {
    EncryptionKey: any;
    JobId: string;
    JobQueueUri: string;
}
export interface CopyMigrationOptions {
    IgnoreVersionHistory: boolean;
}
export interface CreatableItemInfo {
    DocumentTemplate: number;
    FileExtension: string;
    ItemType: string;
}
export interface CreatableItemInfoCollection {
    Items: CreatableItemInfo;
}
export interface CustomActionElement {
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
export interface CustomActionElementCollection {
    Items: CustomActionElement;
}
export interface CustomResult {
    GroupTemplateId: string;
    ItemTemplateId: string;
    Properties: KeyValue;
    ResultTitle: string;
    ResultTitleUrl: string;
    Table: SimpleDataTable;
    TableType: string;
}
export interface DocumentLibraryInformation {
    AbsoluteUrl: string;
    Modified: string;
    ModifiedFriendlyDisplay: string;
    ServerRelativeUrl: string;
    Title: string;
}
export interface EncryptionOption {
    AES256CBCKey: any;
}
export interface EventReceiverDefinitionCreationInformation {
    EventType: number;
    ReceiverAssembly?: string;
    ReceiverClass?: string;
    ReceiverName: string;
    ReceiverUrl?: string;
    SequenceNumber?: number;
    Synchronization?: number;
}
export interface FieldAttachmentFile {
    FileName: string;
    FileNameAsPath: ResourcePath;
    ServerRelativePath: ResourcePath;
    ServerRelativeUrl: string;
}
export interface FieldAttachmentFiles {
    results: Array<FieldAttachmentFile>;
}
export interface FieldCalculationErrorValue {
    ErrorMessage: string;
}
export interface FieldCreationInformation {
    Choices?: {
        results: Array<string>;
    };
    FieldTypeKind: number;
    IsCompactName?: boolean;
    LookupFieldName?: string;
    LookupListId?: any;
    LookupWebId?: any;
    Required?: boolean;
    Title: string;
}
export interface FieldGeolocationValue {
    __metadata?: {
        type: string;
    };
    Altitude: number;
    Latitude: number;
    Longitude: number;
    Measure: number;
}
export interface FieldLookupValue {
    __metadata?: {
        type: string;
    };
    LookupId: number;
    LookupValue: string;
}
export interface FieldManagedMetadataValue {
    __metadata?: {
        type: string;
    };
    Label: string;
    TermGuid: string;
    WssId: number;
}
export interface FieldMultiChoiceValue {
    __metadata?: {
        type: string;
    };
    results: Array<string>;
}
export interface FieldMultiLookupValue {
    __metadata?: {
        type: string;
    };
    results: Array<FieldLookupValue>;
}
export interface FieldMultiUserValue extends Types.SP.IResults<FieldUserValue> {
}
export interface FieldRatingScaleQuestionAnswer {
    __metadata?: {
        type: string;
    };
    Answer: number;
    Question: string;
}
export interface FieldUrlValue {
    __metadata?: {
        type: string;
    };
    Description: string;
    Url: string;
}
export interface FieldUserValue {
    __metadata?: {
        type: string;
    };
    ContentTypeDisp?: string;
    Created?: string;
    Department?: string;
    EMail?: string;
    FirstName?: string;
    ID?: number;
    ImnName?: string;
    JobTitle?: string;
    LastName?: string;
    MobilePhone?: string;
    Modified?: string;
    NameWithPicture?: string;
    NameWithPictureAndDetails?: string;
    Office?: string;
    SipAddress?: string;
    Title?: string;
    UserName?: string;
    WorkPhone?: string;
}
export interface FileCollectionAddParameters {
    Overwrite: boolean;
}
export interface FileCreationInformation {
    Content: any;
    Overwrite: boolean;
    Url: string;
}
export interface FolderCollectionAddParameters {
    Overwrite: boolean;
}
export interface GroupCreationInformation {
    Description?: string;
    Title: string;
}
export interface Hashtag {
    Actor: string;
    Application: string;
    Label: string;
    Timestamp: string;
}
export interface IngestionTaskKey {
    IngestionTableAccountKey: string;
    IngestionTableAccountName: string;
    JobId: string;
    TaskId: string;
    TenantName: string;
}
export interface KeyValue {
    Key: string;
    Value: string;
    ValueType: string;
}
export interface Language {
    DisplayName: string;
    LanguageTag: string;
    Lcid: number;
}
export interface ListCreationInformation {
    BaseTemplate: number;
    CustomSchemaXml?: string;
    DataSourceProperties?: KeyValue;
    Description?: string;
    DocumentTemplateType?: number;
    QuickLaunchOption?: number;
    TemplateFeatureId?: string;
    Title: string;
}
export interface ListDataSource {
    Properties: KeyValue;
}
export interface ListDataValidationExceptionValue {
    FieldFailures: ListDataValidationFailure;
    ItemFailures: ListDataValidationFailure;
}
export interface ListDataValidationFailure {
    DisplayName: string;
    Message: string;
    Name: string;
    Reason: number;
    ValidationType: number;
}
export interface ListItemCollectionPosition {
    PagingInfo: string;
}
export interface ListItemCreationInformation {
    FolderUrl: string;
    LeafName: string;
    UnderlyingObjectType: number;
}
export interface ListItemFormUpdateValue {
    ErrorMessage: string;
    FieldName: string;
    FieldValue: string;
    HasException: boolean;
}
export interface MenuNode {
    CustomProperties: KeyValue;
    FriendlyUrlSegment: string;
    IsDeleted: boolean;
    IsHidden: boolean;
    Key: any;
    string: any;
    Nodes: MenuNode;
    NodeType: number;
    SimpleUrl: string;
    Title: string;
}
export interface MenuState {
    FriendlyUrlPrefix: string;
    Nodes: MenuNode;
    SimpleUrl: string;
    SPSitePrefix: string;
    SPWebPrefix: string;
    StartingNodeKey: string;
    StartingNodeTitle: string;
    Version: string;
}
export interface MethodInformation {
    IsBeta: boolean;
    Name: string;
    Parameters: ParameterInformation;
    ReturnTypeFullName: string;
}
export interface NavigationNodeCreationInformation {
    AsLastNode: boolean;
    IsExternal: boolean;
    Title: string;
    Url: string;
}
export interface ParameterInformation {
    Name: string;
    ParameterTypeFullName: string;
}
export interface PersonalResultSuggestion {
    HighlightedTitle: string;
    IsBestBet?: boolean;
    Title: string;
    Url: string;
}
export interface PropertyInformation {
    ExcludeFromDefaultRetrieval: boolean;
    IsBeta: boolean;
    Name: string;
    PropertyTypeFullName: string;
    ReadOnly: boolean;
}
export interface ProvisionedMigrationContainersInfo {
    DataContainerUri: string;
    EncryptionKey: any;
    MetadataContainerUri: string;
}
export interface ProvisionedMigrationQueueInfo {
    JobQueueUri: string;
}
export interface QueryProperty {
    Name: string;
    Value: QueryPropertyValue;
}
export interface QueryPropertyValue {
    BoolVal?: boolean;
    IntVal?: number;
    QueryPropertyValueTypeIndex?: number;
    StrArray?: String;
    StrVal?: string;
}
export interface QueryResult {
    CustomResults: CustomResult;
    QueryId: string;
    QueryRuleId?: string;
    RefinementResults: RefinementResults;
    RelevantResults: RelevantResults;
    SpecialTermResults: SpecialTermResults;
}
export interface QuerySuggestionQuery {
    IsPersonal?: boolean;
    Query: string;
}
export interface QuerySuggestionRange {
    Length?: number;
    Start?: number;
}
export interface QuerySuggestionResults {
    PeopleNames: String;
    PersonalResults: PersonalResultSuggestion;
    Queries: QuerySuggestionQuery;
}
export interface RecycleBinQueueInformation {
    IsAscending: boolean;
    ItemState: number;
    OrderBy: number;
    PagingInfo: string;
    RowLimit: number;
    ShowOnlyMyItems: boolean;
}
export interface RefinementResults {
    GroupTemplateId: string;
    ItemTemplateId: string;
    Property: KeyValue;
    Refiners: Refiner;
    ResultTitle: string;
    ResultTitleUrl: string;
}
export interface Refiner {
    Entries: RefinerEntry;
    Name: string;
}
export interface RefinerEntry {
    RefinementCount?: number;
    RefinementName: string;
    RefinementToken: string;
    RefinementValue: string;
}
export interface RelevantResults {
    GroupTemplateId: string;
    ItemTemplateId: string;
    Properties: KeyValue;
    ResultTitle: string;
    ResultTitleUrl: string;
    RowCount: number;
    Table: SimpleDataTable;
    TotalRows: number;
    TotalRowsIncludingDuplicates: number;
}
export interface ReorderingRule {
    Boost?: number;
    MatchType?: number;
    MatchValue: string;
}
export interface ReorderingRulesCreationInformation {
    Boost?: number;
    MatchType?: number;
    MatchValue: string;
}
export interface RelatedItem {
    IconUrl: string;
    ItemId: number;
    ListId: string;
    Title: string;
    Url: string;
    WebId: string;
}
export interface RenderListContextMenuDataParameters {
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
export interface RenderListDataOverrideParameters {
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
export interface RenderListDataParameters {
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
export interface RenderListFilterDataParameters {
    ExcludeFieldFilteringHtml: boolean;
    FieldInternalName: string;
    OverrideScope: string;
    ProcessQStringToCAML: string;
    ViewId: string;
}
export interface ResourcePath {
    DecodedUrl: string;
}
export interface RoleDefinitionCreationInformation {
    BasePermissions: BasePermissions;
    Description: string;
    Name: string;
    Order: number;
}
export interface SearchRequest {
    BlockDedupeMode?: number;
    BypassResultTypes?: boolean;
    ClientType?: string;
    CollapseSpecification?: string;
    Culture?: number;
    DesiredSnippetLength?: number;
    EnableFql?: boolean;
    EnableInterleaving?: boolean;
    EnableNicknames?: boolean;
    EnablePhonetic?: boolean;
    EnableOrderingHitHighlightedProperty?: boolean;
    EnableQueryRules?: boolean;
    EnableSorting?: boolean;
    EnableStemming?: boolean;
    GenerateBlockRankLog?: boolean;
    HiddenConstraints?: string;
    HitHighlightedMultivaluePropertyLimit?: number;
    HithighlightedProperties?: Types.SP.Results.String;
    MaxSnippetLength?: number;
    QLSQuerySession?: string;
    PersonalizationData?: string;
    ProcessBestBets?: boolean;
    ProcessPersonalFavorites?: boolean;
    Properties?: KeyValue;
    QueryTag?: string;
    QueryTemplate?: string;
    QueryTemplatePropertiesUrl?: string;
    Querytext: string;
    RankingModelId?: string;
    RefinementFilters?: Types.SP.Results.String;
    Refiners?: string;
    ReorderingRules?: Array<ReorderingRulesCreationInformation>;
    ResultsUrl?: string;
    RowLimit?: number;
    RowsPerPage?: number;
    SelectProperties?: Types.SP.Results.String;
    SortList?: Types.SP.Results.Object;
    SourceId?: string;
    StartRow?: number;
    SummaryLength?: number;
    Timeout?: number;
    TimeZoneId?: number;
    TotalRowsExactMinimum?: number;
    TrimDuplicates?: boolean;
    TrimDuplicatesIncludeId?: boolean;
    UIlanguage?: number;
    UseOLSQuery?: number;
}
export interface SearchResult {
    ElapsedTime?: number;
    PrimaryQueryResult: QueryResult;
    Properties: KeyValue;
    SecondaryQueryResults: QueryResult;
    SpellingSuggestion: string;
    TriggeredRules?: String;
}
export interface SearchSuggestion {
    ClientType?: string;
    Culture?: number;
    EnableStemming?: boolean;
    EnableQueryRules?: boolean;
    fCapitalizeFirstLetters?: boolean;
    fHitHighlighting?: boolean;
    fPrefixMatchAllTerms?: boolean;
    fPreQuerySuggestions?: boolean;
    iNumberOfQuerySuggestions?: number;
    iNumberOfResultSuggestions?: number;
    OLSQuerySession?: string;
    Querytext: string;
    ShowPeopleNameSuggestions?: boolean;
    SourceId?: string;
    UseOLSQuery?: boolean;
}
export interface SharedWithUser {
    Email: string;
    Name: string;
}
export interface SharedWithUserCollection {
    Items: SharedWithUser;
}
export interface SharingLinkInfo {
    Expiration: string;
    IsActive: boolean;
    LinkKind: number;
    Url: string;
}
export interface SimpleDataRow {
    Cells: Types.SP.Results.DataRow;
}
export interface SimpleDataTable {
    Rows: KeyValue;
}
export interface SocialActor {
    AccountName: string;
    ActorType?: number;
    CanFollow?: boolean;
    ContentUri: string;
    EmailAddress: string;
    FollowedContentUri: string;
    Id: string;
    ImageUri: string;
    IsFollowed?: boolean;
    LibraryUri: string;
    Name: string;
    PersonSiteUri: string;
    Status?: number;
    StatusText: string;
    TagGuid?: string;
    Title: string;
    Uri: string;
}
export interface SocialAttachment {
    AttachmentKind?: number;
    ClickAction: SocialAttachmentAction;
    ContentUri: string;
    Description: string;
    Height?: number;
    Length?: number;
    Name: string;
    PreviewHeight?: number;
    PreviewUri: string;
    PreviewWidth?: number;
    Uri: string;
    Width?: number;
}
export interface SocialAttachmentAction {
    ActionKind?: number;
    ActionUri: string;
    Height?: number;
    Width?: number;
}
export interface SocialDataItem {
    AccountName?: string;
    ItemType?: string;
    Text: string;
    Uri: string;
}
export interface SocialDataOverlay {
    ActorIndexes?: Number;
    Index?: number;
    Length?: number;
    LinkUri: string;
    OverlayType?: number;
}
export interface SocialExceptionDetails {
    InternalErrorCode?: number;
    InternalMessage: string;
    InternalStackTrace: string;
    InternalTypeName: string;
    Status?: number;
}
export interface SocialFeedOptions {
    MaxThreadCount?: number;
    NewerThan?: string;
    OlderThan?: string;
    SortOrder?: number;
}
export interface SocialFeed {
    Attributes?: number;
    NewestProcessed?: string;
    OldestProcessed?: string;
    Threads: SocialThread;
    UnreadMentionCount?: number;
}
export interface SocialFeedManager {
    Owner: SocialActor;
    PersonalSitePortalUri?: string;
}
export interface SocialFollowingManager {
    FollowedDocumentsUri?: string;
    FollowedSitesUri: string;
}
export interface SocialLink {
    Text: string;
    Uri: string;
}
export interface SocialPost {
    Attachment: SocialAttachment;
    Attributes?: number;
    AuthorIndex?: number;
    CreatedTime?: string;
    Id?: string;
    LikerInfo?: SocialPostActorInfo;
    ModifiedTime?: string;
    Overlays: SocialDataOverlay;
    PostType?: number;
    PreferredImageUri: string;
    Source: SocialLink;
    Text: string;
}
export interface SocialPostActorInfo {
    IncludesCurrentUser?: boolean;
    Indexes?: Number;
    TotalCount?: number;
}
export interface SocialPostCreationData {
    Attachment?: SocialAttachment;
    ContentItems?: SocialDataItem;
    ContentText: string;
    DefinitionData?: SocialPostDefinitionData;
    SecurityUris?: String;
    Source?: SocialLink;
    UpdateStatusText?: boolean;
}
export interface SocialPostDefinitionData {
    Items: SocialPostDefinitionDataItem;
    Name: string;
}
export interface SocialPostDefinitionDataItem {
    AccountName: string;
    ItemType?: number;
    PlaceholderName: string;
    TagGuid?: string;
    Text: string;
    Uri: string;
}
export interface SocialPostReference {
    Digest: SocialThread;
    Post: SocialPost;
    ThreadId: string;
    ThreadOwnerIndex?: number;
}
export interface SocialRestFollowingManager {
    FollowedDocumentsUri?: string;
    FollowedSitesUri: string;
    MyFollowedDocumentsUri: string;
    MyFollowedSitesUri: string;
    SocialActor: SocialActor;
}
export interface SocialRestPostCreationData {
    ID: string;
    creationData: SocialPostCreationData;
}
export interface SocialThread {
    Actors: SocialActor;
    Attributes?: number;
    Id: string;
    OwnerIndex?: number;
    PermaLink: string;
    PostReference: SocialPostReference;
    Replies: SocialPost;
    RootPost: SocialPost;
    Status?: number;
    ThreadType?: number;
    TotalReplyCount?: number;
}
export interface Sort {
    Direction?: number;
    Property: string;
}
export interface SPInvitationCreationResult {
    Email: string;
    InvitationLink: string;
    Lcid: number;
}
export interface SpecialTermResult {
    Description: string;
    IsVisualBestBet?: boolean;
    PiSearchResultId: string;
    RenderTemplateId: string;
    Title: string;
    Url: string;
}
export interface SpecialTermResults {
    GroupTemplateId: string;
    ItemTemplateId: string;
    Properties: KeyValue;
    ResultTitle: string;
    ResultTitleUrl: string;
}
export interface StringCollection {
    Id4a81de82eeb94d6080ea5bf63e27023a?: string;
    Items: String;
}
export interface SubwebQuery {
    ConfigurationFilter: number;
    WebTemplateFilter: number;
}
export interface TenantAppInformation {
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
export interface TimeZoneInformation {
    Bias: number;
    DaylightBias: number;
    StandardBias: number;
}
export interface UpgradeInfo {
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
export interface UsageInfo {
    Bandwidth: number;
    DiscussionStorage: number;
    Hits: number;
    Storage: number;
    StoragePercentageUsed: number;
    Visits: number;
}
export interface UserCreationInformation {
    Email?: string;
    LoginName: string;
    Title?: string;
}
export interface UserCustomActionCreationInformation {
    CommandUIExtension?: string;
    Description?: string;
    Group?: string;
    ImageUrl?: string;
    Location?: string;
    Name: string;
    RegistrationId?: string;
    RegistrationType?: number;
    Rights?: any;
    ScriptBlock?: string;
    ScriptSrc?: string;
    Sequence?: number;
    Title?: string;
    Url?: string;
}
export interface UserIdInfo {
    NameId: string;
    NameIdIssuer: string;
}
export interface ViewCreationInformation {
    JSLink?: string;
    Paged?: boolean;
    PersonalView?: boolean;
    RowLimit?: number;
    SetAsDefaultView?: boolean;
    Title: string;
    ViewQuery?: string;
    ViewTypeKind?: number;
}
export interface Visualization {
    DefaultScreen: VisualizationStyleSet;
    DetailView: VisualizationStyleSet;
    MediumScreen: VisualizationStyleSet;
    SmallScreen: VisualizationStyleSet;
    VisualizationAppInfo: VisualizationAppInfo;
    VisualizationType: number;
}
export interface VisualizationAppInfo {
    DesignUri: string;
    Id: string;
    RuntimeUri: string;
}
export interface VisualizationField {
    InternalName: string;
    Style: string;
}
export interface VisualizationStyleSet {
    AspectRatio: string;
    BackgroundColor: string;
    Fields: VisualizationField;
    MinHeight: string;
}
export interface WebCreationInformation {
    Description?: string;
    Language?: number;
    Title: string;
    Url: string;
    UseSamePermissionsAsParentSite?: boolean;
    WebTemplate: string;
}
export interface WebInfoCreationInformation {
    Description?: string;
    Language?: number;
    Title: string;
    Url: string;
    UseUniquePermissions?: boolean;
    WebTemplate: string;
}
export interface WebRequestInfo {
    Body: string;
    Headers: KeyValue;
    StatusCode: number;
}
export interface WebResponseInfo {
    Body: string;
    Headers: KeyValue;
    StatusCode: number;
}
export interface XmlSchemaFieldCreationInformation {
    Options: number;
    SchemaXml: string;
}
