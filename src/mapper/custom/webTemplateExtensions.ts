import { RequestType } from "../../utils";

/**
 * Web Template Extensions
 */
export const webtemplateextensions = {
    applySiteDesign: {
        argNames: ["siteDesignId", "webUrl"],
        appendEndpointFl: true,
        name: "CreateSiteScript",
        requestType: RequestType.PostWithArgsInQSAsVar // TODO
    },
    addSiteDesignTaskToCurrentWeb: {
        argNames: ["siteDesignId"],
        appendEndpointFl: true,
        name: "AddSiteDesignTaskToCurrentWeb",
        requestType: RequestType.PostBodyNoArgs
    },
    createSiteDesign: {
        argNames: ["info"],
        appendEndpointFl: true,
        name: "CreateSiteDesign",
        requestType: RequestType.PostBodyNoArgs
    },
    createSiteScript: {
        argNames: ["title", "content"],
        appendEndpointFl: true,
        name: "CreateSiteScript",
        requestType: RequestType.PostBodyNoArgs // TODO
    },
    deleteSiteDesign: {
        argNames: ["id"],
        appendEndpointFl: true,
        name: "DeleteSiteDesign",
        requestType: RequestType.PostBodyNoArgs
    },
    deleteSiteScript: {
        argNames: ["id"],
        appendEndpointFl: true,
        name: "DeleteSiteScript",
        requestType: RequestType.PostBodyNoArgs
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
        name: "",
        requestType: RequestType.PostBodyNoArgs
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
        requestType: RequestType.PostBodyNoArgs
    },
    getSiteScriptFromList: {
        argNames: ["listUrl"],
        appendEndpointFl: true,
        name: "GetSiteScriptFromList",
        requestType: RequestType.PostBodyNoArgs
    },
    getSiteScriptMetadata: {
        argNames: ["id"],
        appendEndpointFl: true,
        name: "GetSiteScriptMetadata",
        requestType: RequestType.PostBodyNoArgs
    },
    getSiteDesignRights: {
        argNames: ["id"],
        appendEndpointFl: true,
        name: "GetSiteDesignRights",
        requestType: RequestType.PostBodyNoArgs
    },
    grantSiteDesignRights: {
        argNames: ["id", "principalNames", "grantedRights"],
        appendEndpointFl: true,
        name: "GrantSiteDesignRights",
        requestType: RequestType.PostBodyNoArgs
    },
    revokeSiteDesignRights: {
        argNames: ["id", "principalNames"],
        appendEndpointFl: true,
        name: "RevokeSiteDesignRights",
        requestType: RequestType.PostBodyNoArgs
    },
    updateSiteDesign: {
        argNames: ["updateInfo"],
        appendEndpointFl: true,
        name: "UpdateSiteDesign",
        requestType: RequestType.PostBodyNoArgs
    },
    updateSiteScript: {
        argNames: ["updateInfo"],
        appendEndpointFl: true,
        name: "UpdateSiteScript",
        requestType: RequestType.PostBodyNoArgs
    }
}