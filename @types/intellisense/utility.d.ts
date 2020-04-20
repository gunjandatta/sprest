import { IBaseExecution } from "../../lib/base";
import { KeyValue } from "../../lib/SP/complextypes";
import { File } from "../../lib/SP/entitytypes";

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
export interface ICreateEmailBodyForInvitationResult extends IBaseExecution { CreateEmailBodyForInvitation: string; }
export interface IGetCurrentUserEmailAddressesResult extends IBaseExecution { GetCurrentUserEmailAddresses: string; }
export interface IGetAppLicenseDeploymentIdResult extends IBaseExecution { GetAppLicenseDeploymentId: string; }
export interface IGetAppLicenseInformationResult extends IBaseExecution { GetAppLicenseInformation: string; }
export interface IGetLowerCaseStringResult extends IBaseExecution { GetLowerCaseString: string; }
export interface IResolvePrincipalResult extends IBaseExecution { ResolvePrincipalInCurrentContext: IPrincipalResult; }
export interface ISearchPrincipalsResult extends IBaseExecution { results: Array<IPrincipalResult>; SearchPrincipalsUsingContextWeb: { results: Array<IPrincipalResult>; }; }
export interface ISendEmailResult extends IBaseExecution { SendEmail: string; }

/**
 * Utility Methods
 */
export interface IUtilityMethods {
    /**
     * Gets the external (outside the firewall) URL to a document or resource in a site.
     * pageAddress - The URL for the document or resource.
     */
    createEmailBodyForInvitation(pageAddress: string): IBaseExecution<IBaseExecution, ICreateEmailBodyForInvitationResult>;

    /**
     * Gets the app license deployment id.
     */
    getAppLicenseDeploymentId(): IBaseExecution<IBaseExecution, IGetAppLicenseDeploymentIdResult>;

    /**
     * Gets the app license information.
     */
    getAppLicenseInformation(): IBaseExecution<IBaseExecution, IGetAppLicenseInformationResult>;

    /**
     * Returns the current user's email address.
     */
    getCurrentUserEmailAddresses(): IBaseExecution<IBaseExecution, IGetCurrentUserEmailAddressesResult>;

    /**
     * Converts the text to a localized string.
     */
    getLocalizedString(sourceValue: string): IBaseExecution;

    /**
     * Converts the text to be lower case.
     */
    getLowerCaseString(sourceValue: string, lcid: number): IBaseExecution<IBaseExecution, IGetLowerCaseStringResult>;

    /**
     * Need to research
     */
    importAppLicense(url: string): IBaseExecution;

    /**
     * Need to research
     */
    isUserLicensedForEntityInContext(url: string): IBaseExecution;

    /**
     * Need to research
     */
    localizeWebPartGallery(url: string): IBaseExecution;

    /**
     * Need to research
     */
    markDiscussionAsFeatured(url: string): IBaseExecution;

    /**
     * Gets information about a principal that matches the specified Search criteria.
     */
    resolvePrincipal(principal: IResolvePrincipal): IBaseExecution<IBaseExecution, IResolvePrincipalResult>;

    /**
     * Gets information about the principals that match the specified Search criteria.
     */
    searchPrincipals(principal: ISearchPrincipal): IBaseExecution<IBaseExecution, ISearchPrincipalsResult>;

    /**
     * Need to research
     */
    unmarkDiscussionAsFeatured(url: string): IBaseExecution;
}

/**
 * Utility
 */
export interface IUtility extends IUtilityMethods, IBaseExecution<IUtility> {
    /**
     * Creates a wiki page.
     * @param listUrl - The relative url to the library.
     * @param content - The html content.
     */
    createWikiPage(pageUrl: string, content?: string): IBaseExecution<File>;

    /**
     * Method to send an email.
     * @param email - The email properties.
     */
    sendEmail(email: IEmail): IBaseExecution<IBaseExecution, ISendEmailResult>;
}