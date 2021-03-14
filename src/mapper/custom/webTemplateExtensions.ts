import { RequestType } from "../../utils";

/**
 * Web Template Extensions
 * https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-design-rest-api
 */
export const webtemplateextensions = {
    applySiteDesign: {
        argNames: ["siteDesignId", "webUrl"],
        appendEndpointFl: true,
        name: "ApplySiteDesign",
        requestType: RequestType.PostWithArgsInBody
    },
    addSiteDesignTaskToCurrentWeb: {
        argNames: ["siteDesignId"],
        appendEndpointFl: true,
        name: "AddSiteDesignTaskToCurrentWeb",
        requestType: RequestType.PostWithArgsInBody
    },
    createSiteDesign: {
        argNames: ["info"],
        appendEndpointFl: true,
        name: "CreateSiteDesign",
        requestType: RequestType.PostWithArgsInBody
    },
    createSiteScript: {
        argNames: ["title", "content"],
        appendEndpointFl: true,
        name: "CreateSiteScript(@title)?@title='[[title]]",
        requestType: RequestType.PostReplaceWithData
    },
    deleteSiteDesign: {
        argNames: ["id"],
        appendEndpointFl: true,
        name: "DeleteSiteDesign",
        requestType: RequestType.PostWithArgsInBody
    },
    deleteSiteScript: {
        argNames: ["id"],
        appendEndpointFl: true,
        name: "DeleteSiteScript",
        requestType: RequestType.PostWithArgsInBody
    },
    getSiteDesigns: {
        argNames: [],
        appendEndpointFl: true,
        name: "GetSiteDesigns",
        requestType: RequestType.Post
    },
    getSiteDesignMetadata: {
        argNames: ["id"],
        appendEndpointFl: true,
        name: "GetSiteDesignMetadata",
        requestType: RequestType.PostWithArgsInBody
    },
    getSiteScripts: {
        argNames: [],
        appendEndpointFl: true,
        name: "GetSiteScripts",
        requestType: RequestType.Post
    },
    getSiteScriptFromWeb: {
        argNames: ["webUrl", "info"],
        appendEndpointFl: true,
        name: "GetSiteScriptFromWeb",
        requestType: RequestType.PostWithArgsInBody
    },
    getSiteScriptFromList: {
        argNames: ["listUrl"],
        appendEndpointFl: true,
        name: "GetSiteScriptFromList",
        requestType: RequestType.PostWithArgsInBody
    },
    getSiteScriptMetadata: {
        argNames: ["id"],
        appendEndpointFl: true,
        name: "GetSiteScriptMetadata",
        requestType: RequestType.PostWithArgsInBody
    },
    getSiteDesignRights: {
        argNames: ["id"],
        appendEndpointFl: true,
        name: "GetSiteDesignRights",
        requestType: RequestType.PostWithArgsInBody
    },
    grantSiteDesignRights: {
        argNames: ["id", "principalNames", "grantedRights"],
        appendEndpointFl: true,
        name: "GrantSiteDesignRights",
        requestType: RequestType.PostWithArgsInBody
    },
    revokeSiteDesignRights: {
        argNames: ["id", "principalNames"],
        appendEndpointFl: true,
        name: "RevokeSiteDesignRights",
        requestType: RequestType.PostWithArgsInBody
    },
    updateSiteDesign: {
        argNames: ["updateInfo"],
        appendEndpointFl: true,
        name: "UpdateSiteDesign",
        requestType: RequestType.PostWithArgsInBody
    },
    updateSiteScript: {
        argNames: ["updateInfo"],
        appendEndpointFl: true,
        name: "UpdateSiteScript",
        requestType: RequestType.PostWithArgsInBody
    }
}