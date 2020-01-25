import { RequestType } from "../../utils";

/**
 * Utility
 */
export const utility = {
    createEmailBodyForInvitation: {
        argNames: ["pageAddress"],
        name: "SP.Utilities.Utility.CreateEmailBodyForInvitation",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    },

    createWikiPage: {
        argNames: ["parameters"],
        name: "SP.Utilities.Utility.CreateWikiPageInContextWeb",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    },

    getAppLicenseDeploymentId: {
        name: "SP.Utilities.Utility.GetAppLicenseDeploymentId",
        replaceEndpointFl: true,
        requestType: RequestType.Get
    },

    getAppLicenseInformation: {
        name: "SP.Utilities.Utility.GetAppLicenseInformation",
        replaceEndpointFl: true,
        requestType: RequestType.Get
    },

    getCurrentUserEmailAddresses: {
        name: "SP.Utilities.Utility.GetCurrentUserEmailAddresses",
        replaceEndpointFl: true,
        requestType: RequestType.Get
    },

    getLocalizedString: {
        argNames: ["sourceValue"],
        name: "SP.Utilities.Utility.GetLocalizedString",
        replaceEndpointFl: true,
        requestType: RequestType.GetWithArgsValueOnly
    },

    getLowerCaseString: {
        argNames: ["sourceValue", "lcid"],
        name: "SP.Utilities.Utility.GetLowerCaseString",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    },

    importAppLicense: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.ImportAppLicense",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgs
    },

    isUserLicensedForEntityInContext: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.IsUserLicensedForEntityInContext",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgs
    },

    localizeWebPartGallery: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.LocalizeWebPartGallery",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgs
    },

    markDiscussionAsFeatured: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.MarkDiscussionAsFeatured",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgs
    },

    resolvePrincipal: {
        name: "SP.Utilities.Utility.ResolvePrincipalInCurrentContext",
        replaceEndpointFl: true,
        requestType: RequestType.Post
    },

    searchPrincipals: {
        name: "SP.Utilities.Utility.SearchPrincipalsUsingContextWeb",
        replaceEndpointFl: true,
        requestType: RequestType.Post
    },

    sendEmail: {
        argNames: ["properties"],
        metadataType: "SP.Utilities.EmailProperties",
        name: "SP.Utilities.Utility.sendEmail",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    },

    unmarkDiscussionAsFeatured: {
        argNames: ["url"],
        name: "SP.Utilities.Utility.UnmarkDiscussionAsFeatured",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    }
}
