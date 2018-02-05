import { IBase, ITargetInfo } from "../../utils/types";
import { Types } from "../..";
import { ISiteMethods, IWeb, IWebQueryResult, IWebResult } from ".";
export interface ISiteMethods {
    createPreviewSPSite(upgrade: any, sendEmail: any): IBase;
    extendUpgradeReminderDate(): IBase;
    getCatalog(typeCatalog: any): IBase;
    getChanges(query: any): IBase;
    getCustomListTemplates(web: any): IBase;
    getWebTemplates(LCID: any, overrideCompatLevel: any): IBase;
    invalidate(): IBase;
    needsUpgradeByType(versionUpgrade: any, recursive: any): IBase;
    openWeb(strUrl: any): IBase<IWeb, IWebResult, IWebQueryResult>;
    openWebById(gWebId: any): IBase<IWeb, IWebResult, IWebQueryResult>;
    runHealthCheck(ruleId: any, bRepair: any, bRunAlways: any): IBase;
    runUpgradeSiteSession(versionUpgrade: any, queueOnly: any, sendEmail: any): IBase;
    update(data: any): IBase;
    updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs: any): IBase;
}
export interface ISiteProps {
    AllowCreationDeclarativeWorkflow: boolean;
    AllowDesigner: boolean;
    AllowMasterPageEditing: boolean;
    AllowRevertFromTemplate: boolean;
    AllowSaveDeclarativeWorkflowAsTemplate: boolean;
    AllowSavePublishDeclarativeWorkflow: boolean;
    AllowSelfServiceUpgrade: boolean;
    AllowSelfServiceUpgradeEvaluation: boolean;
    AuditLogTrimmingRetention: number;
    CanUpgrade: boolean;
    Classification: string;
    CompatibilityLevel: string;
    CurrentChangeToken: string;
    DisableAppViews: boolean;
    DisableCompanyWideSharingLinks: boolean;
    DisableFlows: boolean;
    ExternalSharingTipsEnabled: boolean;
    GroupId: string;
    Id: string;
    LockIssue: string;
    MaxItemsPerThrottledOperation: number;
    NeedsB2BUpgrade: boolean;
    PrimaryUri: string;
    ReadOnly: boolean;
    RequiredDesignerVersion: string;
    SandboxedCodeActivationCapability: number;
    ServerRelativePath: Types.SP.IResourcePath;
    ServerRelativeUrl: string;
    ShareByEmailEnabled: boolean;
    ShowPeoplePickerSuggestionsForGuestUsers: boolean;
    ShareByLinkEnabled: boolean;
    ShowUrlStructure: boolean;
    StatusBarLink: string;
    StatusBarText: string;
    TrimAuditLog: boolean;
    UIVersionConfigurationEnabled: boolean;
    UpgradeInfo: Types.SP.IUpgradeInfo;
    UpgradeReminderDate: string;
    UpgradeScheduled: boolean;
    UpgradeScheduledDate: string;
    Upgrading: boolean;
    Url: string;
    Usage: Types.SP.IUsageInfo;
}
export interface ISiteQueryProps {
    Audit(): IBase<Types.SP.IAudit>;
    EventReceivers(): Types.SP.IEventReceivers;
    EventReceivers(id: string): Types.SP.IEventReceiver;
    Features(): IBase;
    Owner(): Types.SP.IUser;
    RecycleBin(): IBase<Types.SP.IResults<Types.SP.IRecycleBinItem>>;
    RootWeb(): IWeb;
    SecondaryContact(): IBase;
    UserCustomActions(): Types.SP.IUserCustomActions;
    UserCustomActions(id: string): Types.SP.IUserCustomAction;
}
export interface ISiteQueryResult extends ISiteMethods, ISiteProps {
    Audit: Types.SP.IAudit;
    EventReceivers: Types.SP.IResults<Types.SP.IEventReceiverResult>;
    Features: Types.SP.IResults<Types.SP.IFeature>;
    Owner: Types.SP.IUserResult;
    RecycleBin: Types.SP.IResults<Types.SP.IRecycleBinItem>;
    RootWeb: IWebResult;
    SecondaryContact: Types.SP.IUserResult;
    UserCustomActions: Types.SP.IUserCustomActionResults;
}
export interface ISiteResult extends ISiteMethods, ISiteProps, ISiteQueryProps, IBase<ISite, ISiteResult, ISiteQueryResult> {
}
export interface ISite extends ISiteMethods, ISiteQueryProps, IBase<ISite, ISiteResult, ISiteQueryResult> {
    new (url?: string, targetInfo?: ITargetInfo): ISite;
}
