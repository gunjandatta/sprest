import {
    IAudit,
    IBase,
    IEventReceiver,
    IFeature,
    IRecycleBinItem,
    IResourcePath,
    IResults,
    ISiteMethods,
    ITargetInfo,
    IUpgradeInfo, IUsageInfo,
    IUser,
    IUserCustomAction,
    IWeb,
    ODataQuery
} from "..";

/**
 * Site Query Results
 */
export interface ISiteQueryResults extends ISiteMethods {
    /** A value that specifies whether creation of declarative workflows can be used on this site collection. */
    AllowCreationDeclarativeWorkflow: boolean;

    /** Gets or sets a value that specifies whether a designer can be used on this site collection. */
    AllowDesigner: boolean;

    /** Gets or sets a value that specifies whether master page editing is allowed on this site collection. */
    AllowMasterPageEditing: boolean;

    /** Gets or sets a value that specifies whether this site collection can be reverted to its base template. */
    AllowRevertFromTemplate: boolean;

    AllowSaveDeclarativeWorkflowAsTemplate: boolean;

    AllowSavePublishDeclarativeWorkflow: boolean;

    /** Whether version to version upgrade is allowed on this site. */
    AllowSelfServiceUpgrade: boolean;

    /** Whether upgrade evaluation site collection is allowed. */
    AllowSelfServiceUpgradeEvaluation: boolean;

    Audit: IAudit;

    AuditLogTrimmingRetention: number;

    /** Property indicating whether or not this object can be upgraded. */
    CanUpgrade: boolean;

    Classification: string;

    /** Gets the major version of this site collection for purposes of major version-level compatibility checks. */
    CompatibilityLevel: string;

    CurrentChangeToken: string;

    DisableAppViews: boolean;

    DisableCompanyWideSharingLinks: boolean;

    DisableFlows: boolean;

    /**
     * Gets the event receivers associated with the site.
    */
    EventReceivers: IResults<IEventReceiver>;

    ExternalSharingTipsEnabled: boolean;

    /**
     * Gets a value that specifies the collection of the site collection features for the site collection that contains the site.
     */
    Features: IResults<IFeature>;

    GroupId: string;

    /** Gets the GUID that identifies the site collection. */
    Id: string;

    /** Gets or sets the comment that is used in locking a site collection. */
    LockIssue: string;

    /** Gets a value that specifies the maximum number of list items allowed per operation before throttling will occur. */
    MaxItemsPerThrottledOperation: number;

    NeedsB2BUpgrade: boolean;

    /**
     * Gets or sets the owner of the site collection. (Read-only in sandboxed solutions.)
     */
    Owner: IUser;

    /** Specifies the primary URI of this site collection, including the host name, port number, and path. */
    PrimaryUri: string;

    /** Gets or sets a Boolean value that specifies whether the site collection is read-only, locked, and unavailable for write access. */
    ReadOnly: boolean;

    /** Gets a value that specifies the collection of recycle bin items for the site collection. */
    RecycleBin: IResults<IRecycleBinItem>;

    RequiredDesignerVersion: string;

    /**
     * Gets a value that returns the top-level site of the site collection.
     */
    RootWeb: IWeb;

    SandboxedCodeActivationCapability: number;

    SecondaryContact: IUser;

    ServerRelativePath: IResourcePath;

    /** Gets the server-relative URL of the root Web site in the site collection. */
    ServerRelativeUrl: string;

    ShareByEmailEnabled: boolean;

    ShowPeoplePickerSuggestionsForGuestUsers: boolean;

    /** Property that indicates whether users will be able to share links to documents that can be accessed without logging in. */
    ShareByLinkEnabled: boolean;

    /** Gets or sets a value that specifies whether the URL structure of this site collection is viewable. */
    ShowUrlStructure: boolean;

    StatusBarLink: string;

    StatusBarText: string;

    TrimAuditLog: boolean;

    /** Gets or sets a value that specifies whether the Visual Upgrade UI of this site collection is displayed. */
    UIVersionConfigurationEnabled: boolean;

    /** Specifies the upgrade information of this site collection. */
    UpgradeInfo: IUpgradeInfo;

    /** Specifies a date, after which site collection administrators will be reminded to upgrade the site collection. */
    UpgradeReminderDate: string;

    UpgradeScheduled: boolean;

    UpgradeScheduledDate: string;

    /** Specifies whether the site is currently upgrading. */
    Upgrading: boolean;

    /** Gets the full URL to the root Web site of the site collection, including host name, port number, and path. */
    Url: string;

    /** Gets a value that specifies usage information about the site, including bandwidth, storage, and the number of visits to the site collection. */
    Usage: IUsageInfo;

    /**
     * Gets the user custom action for the list.
     */
    UserCustomActions: IResults<IUserCustomAction>;
}