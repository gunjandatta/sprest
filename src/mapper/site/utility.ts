import { KeyValue } from "../complexTypes";
import { IBase, ITargetInfo } from "../../utils";

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
 * Utility Methods
 */
export interface IUtilityMethods {
    createEmailBodyForInvitation(url: string): IBase;

    createNewDiscussion(url: string): IBase;

    createNewDiscussionReply(url: string): IBase;

    createWikiPageInContextWeb(url: string): IBase;

    formatDateTime(dt: string): IBase;

    getAppLicenseDeploymentId(id: string): IBase;

    getAppLicenseInformation(url: string): IBase;

    getCurrentUserEmailAddresses(): IBase;

    getImageUrl(imageName: string): IBase;

    getLayoutsPageUrl(fileName: string): IBase;

    getLocalizedString(value: string): IBase;

    getLowerCaseString(value: string): IBase;

    getPeoplePickerURL(): IBase;

    importAppLicense(url: string): IBase;

    isUserLicensedForEntityInContext(url: string): IBase;

    localizeWebPartGallery(url: string): IBase;

    markDiscussionAsFeatured(url: string): IBase;

    resolvePrincipal(principal: string): IBase;

    searchPrincipals(principals: Array<string>): IBase;

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
    new(url?: string, targetInfo?: ITargetInfo): IUtility;

    /**
     * Method to send an email.
     * @param email - The email properties.
     */
    sendEmail(email: IEmail): IBase;
}