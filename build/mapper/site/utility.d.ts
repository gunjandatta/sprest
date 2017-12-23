import { KeyValue } from "../complexTypes";
import { IBase, ITargetInfo } from "../../utils";
import { Types } from "..";
/**
 * Email
 */
export interface IEmail {
    /** A collection of additional email headers. */
    AdditionalHeaders?: Array<KeyValue>;
    /** A string or collection of email addresses to blind carbon copy the email to. */
    BCC?: Array<string>;
    /** A value that specifies the body of the email. */
    Body: string;
    /** A string or collection of email addresses to carbon copy the email to. */
    CC?: Array<string>;
    /** A value that specifies the email address of the sender. */
    From?: string;
    /** A string or collection of email addresses to send the email to. */
    To: Array<string>;
    /** A value that specifies the email subject. */
    Subject: string;
}
/**
 * Resolve Principal
 */
export interface IResolvePrincipal {
    /** Specifies whether to add the user to the user information list. */
    addToUserInfoList?: boolean;
    /** The display name, email address, or login name of the principal scopes. */
    input: string;
    /** Specifies whether only the email address is used when searching for the principal. */
    inputIsEmailOnly?: boolean;
    /** Specifies whether the user information list is used. */
    matchUserInfoList?: boolean;
    /** The type of the principal. */
    scopes: Types.SPTypes.PrincipalTypes;
    /** The source of the principal. */
    sources: Types.SPTypes.PrincipalSources;
}
/**
 * Search Principal
 */
export interface ISearchPrincipal {
    /** The group name. */
    groupName?: string;
    /** The display name, email address, or login name of the principal scopes. */
    input: string;
    /** The maximum number of information entries about principals to return. */
    maxCount: number;
    /** The type of the principal. */
    scopes?: Types.SPTypes.PrincipalTypes;
    /** The source of the principal. */
    sources?: Types.SPTypes.PrincipalSources;
}
/**
 * Utility Results
 */
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
export interface IResolvePrincipalResult extends IBase {
    ResolvePrincipalInCurrentContext: string;
}
export interface ISearchPrincipalsResult extends IBase {
    SearchPrincipalsUsingContextWeb: string;
}
export interface ISendEmailResult extends IBase {
    SendEmail: string;
}
/**
 * Utility Methods
 */
export interface IUtilityMethods {
    /**
     * Gets the external (outside the firewall) URL to a document or resource in a site.
     * pageAddress - The URL for the document or resource.
     */
    createEmailBodyForInvitation(pageAddress: string): IBase<IBase, ICreateEmailBodyForInvitationResult>;
    /**
     * Gets the app license deployment id.
     */
    getAppLicenseDeploymentId(): IBase<IBase, IGetAppLicenseDeploymentIdResult>;
    /**
     * Gets the app license information.
     */
    getAppLicenseInformation(): IBase<IBase, IGetAppLicenseInformationResult>;
    /**
     * Returns the current user's email address.
     */
    getCurrentUserEmailAddresses(): IBase<IBase, IGetCurrentUserEmailAddressesResult>;
    /**
     * Converts the text to a localized string.
     */
    getLocalizedString(value: string): IBase;
    /**
     * Converts the text to be lower case.
     */
    getLowerCaseString(value: string): IBase;
    /**
     * Need to research
     */
    importAppLicense(url: string): IBase;
    /**
     * Need to research
     */
    isUserLicensedForEntityInContext(url: string): IBase;
    /**
     * Need to research
     */
    localizeWebPartGallery(url: string): IBase;
    /**
     * Need to research
     */
    markDiscussionAsFeatured(url: string): IBase;
    /**
     * Gets information about a principal that matches the specified Search criteria.
     */
    resolvePrincipal(principal: IResolvePrincipal): IBase<IBase, IResolvePrincipalResult>;
    /**
     * Gets information about the principals that match the specified Search criteria.
     */
    searchPrincipals(principal: ISearchPrincipal): IBase;
    /**
     * Need to research
     */
    unmarkDiscussionAsFeatured(url: string): IBase;
}
/**
 * Utility
 */
export interface IUtility extends IUtilityMethods, IBase<IUtility> {
    /**
     * Constructor
     * @param url - (Optional) The web url.
     * @param targetInfo - (Optional) The target information.
     */
    new (url?: string, targetInfo?: ITargetInfo): IUtility;
    /**
     * Creates a wiki page.
     * @param listUrl - The relative url to the library.
     * @param content - The html content.
     */
    createWikiPage(pageUrl: string, content?: string): IBase<Types.IFile, Types.IFileResult, Types.IFileQueryResult>;
    /**
     * Method to send an email.
     * @param email - The email properties.
     */
    sendEmail(email: IEmail): IBase<IBase, ISendEmailResult>;
}
