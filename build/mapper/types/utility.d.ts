import { IBase, ITargetInfo } from "../../utils/types";
import { Types } from "../..";
import { ComplexTypes } from ".";
export interface IEmail {
    AdditionalHeaders?: Array<ComplexTypes.KeyValue>;
    BCC?: Array<string>;
    Body: string;
    CC?: Array<string>;
    From?: string;
    To: Array<string>;
    Subject: string;
}
export interface IPrincipalResult {
    Department?: string;
    DisplayName?: string;
    Email?: string;
    JobTitle?: string;
    LoginName?: string;
    Mobile?: string;
    PrincipalId?: number;
    PrincipalType?: number;
    SIPAddress?: string;
}
export interface IResolvePrincipal {
    addToUserInfoList?: boolean;
    input: string;
    inputIsEmailOnly?: boolean;
    matchUserInfoList?: boolean;
    scopes: number;
    sources: number;
}
export interface ISearchPrincipal {
    groupName?: string;
    input: string;
    maxCount: number;
    scopes?: number;
    sources?: number;
}
export interface ICreateEmailBodyForInvitationResult extends IBase {
    CreateEmailBodyForInvitation: string;
}
export interface IGetCurrentUserEmailAddressesResult extends IBase {
    GetCurrentUserEmailAddresses: string;
}
export interface IGetAppLicenseDeploymentIdResult extends IBase {
    GetAppLicenseDeploymentId: string;
}
export interface IGetAppLicenseInformationResult extends IBase {
    GetAppLicenseInformation: string;
}
export interface IGetLowerCaseStringResult extends IBase {
    GetLowerCaseString: string;
}
export interface IResolvePrincipalResult extends IBase {
    ResolvePrincipalInCurrentContext: IPrincipalResult;
}
export interface ISearchPrincipalsResult extends IBase {
    results: Array<IPrincipalResult>;
    SearchPrincipalsUsingContextWeb: {
        results: Array<IPrincipalResult>;
    };
}
export interface ISendEmailResult extends IBase {
    SendEmail: string;
}
export interface IUtilityMethods {
    createEmailBodyForInvitation(pageAddress: string): IBase<IBase, ICreateEmailBodyForInvitationResult>;
    getAppLicenseDeploymentId(): IBase<IBase, IGetAppLicenseDeploymentIdResult>;
    getAppLicenseInformation(): IBase<IBase, IGetAppLicenseInformationResult>;
    getCurrentUserEmailAddresses(): IBase<IBase, IGetCurrentUserEmailAddressesResult>;
    getLocalizedString(sourceValue: string): IBase;
    getLowerCaseString(sourceValue: string, lcid: number): IBase<IBase, IGetLowerCaseStringResult>;
    importAppLicense(url: string): IBase;
    isUserLicensedForEntityInContext(url: string): IBase;
    localizeWebPartGallery(url: string): IBase;
    markDiscussionAsFeatured(url: string): IBase;
    resolvePrincipal(principal: IResolvePrincipal): IBase<IBase, IResolvePrincipalResult>;
    searchPrincipals(principal: ISearchPrincipal): IBase<IBase, ISearchPrincipalsResult>;
    unmarkDiscussionAsFeatured(url: string): IBase;
}
export interface IUtility extends IUtilityMethods, IBase<IUtility> {
    new (url?: string, targetInfo?: ITargetInfo): IUtility;
    createWikiPage(pageUrl: string, content?: string): IBase<Types.SP.IFile, Types.SP.IFileResult, Types.SP.IFileQueryResult>;
    sendEmail(email: IEmail): IBase<IBase, ISendEmailResult>;
}
