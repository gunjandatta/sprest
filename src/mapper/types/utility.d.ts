import { SP } from "gd-sprest-def";
import * as Types from "../../mapper/types";
import { IBaseLib } from "../../utils/types/base";

/**
 * Email
 */
export interface IEmail {
    /** A collection of additional email headers. */
    AdditionalHeaders?: Array<SP.KeyValue>;

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
 * Principal Result
 */
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
    scopes: number;

    /** The source of the principal. */
    sources: number;
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
    scopes?: number;

    /** The source of the principal. */
    sources?: number;
}

/**
 * Utility Results
 */
export interface ICreateEmailBodyForInvitationResult extends IBaseLib { CreateEmailBodyForInvitation: string; }
export interface IGetCurrentUserEmailAddressesResult extends IBaseLib { GetCurrentUserEmailAddresses: string; }
export interface IGetAppLicenseDeploymentIdResult extends IBaseLib { GetAppLicenseDeploymentId: string; }
export interface IGetAppLicenseInformationResult extends IBaseLib { GetAppLicenseInformation: string; }
export interface IGetLowerCaseStringResult extends IBaseLib { GetLowerCaseString: string; }
export interface IResolvePrincipalResult extends IBaseLib { ResolvePrincipalInCurrentContext: IPrincipalResult; }
export interface ISearchPrincipalsResult extends IBaseLib { results: Array<IPrincipalResult>; SearchPrincipalsUsingContextWeb: { results: Array<IPrincipalResult>; }; }
export interface ISendEmailResult extends IBaseLib { SendEmail: string; }

/**
 * Utility Methods
 */
export interface IUtilityMethods {
    /**
     * Gets the external (outside the firewall) URL to a document or resource in a site.
     * pageAddress - The URL for the document or resource.
     */
    createEmailBodyForInvitation(pageAddress: string): IBaseLib<IBaseLib, ICreateEmailBodyForInvitationResult>;

    /**
     * Gets the app license deployment id.
     */
    getAppLicenseDeploymentId(): IBaseLib<IBaseLib, IGetAppLicenseDeploymentIdResult>;

    /**
     * Gets the app license information.
     */
    getAppLicenseInformation(): IBaseLib<IBaseLib, IGetAppLicenseInformationResult>;

    /**
     * Returns the current user's email address.
     */
    getCurrentUserEmailAddresses(): IBaseLib<IBaseLib, IGetCurrentUserEmailAddressesResult>;

    /**
     * Converts the text to a localized string.
     */
    getLocalizedString(sourceValue: string): IBaseLib;

    /**
     * Converts the text to be lower case.
     */
    getLowerCaseString(sourceValue: string, lcid: number): IBaseLib<IBaseLib, IGetLowerCaseStringResult>;

    /**
     * Need to research
     */
    importAppLicense(url: string): IBaseLib;

    /**
     * Need to research
     */
    isUserLicensedForEntityInContext(url: string): IBaseLib;

    /**
     * Need to research
     */
    localizeWebPartGallery(url: string): IBaseLib;

    /**
     * Need to research
     */
    markDiscussionAsFeatured(url: string): IBaseLib;

    /**
     * Gets information about a principal that matches the specified Search criteria.
     */
    resolvePrincipal(principal: IResolvePrincipal): IBaseLib<IBaseLib, IResolvePrincipalResult>;

    /**
     * Gets information about the principals that match the specified Search criteria.
     */
    searchPrincipals(principal: ISearchPrincipal): IBaseLib<IBaseLib, ISearchPrincipalsResult>;

    /**
     * Need to research
     */
    unmarkDiscussionAsFeatured(url: string): IBaseLib;
}

/**
 * Utility
 */
export interface IUtility extends IUtilityMethods, IBaseLib<IUtility> {
    /**
     * Creates a wiki page.
     * @param listUrl - The relative url to the library.
     * @param content - The html content.
     */
    createWikiPage(pageUrl: string, content?: string): IBaseLib<Types.IFile, Types.IFileResult, Types.IFileQueryResult>;

    /**
     * Method to send an email.
     * @param email - The email properties.
     */
    sendEmail(email: IEmail): IBaseLib<IBaseLib, ISendEmailResult>;
}