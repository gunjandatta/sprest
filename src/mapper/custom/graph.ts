import { RequestType } from "../../utils";

/**
 * Graph
 */
export const graph = {
    // Me
    me: {
        requestType: RequestType.GraphGet
    },

    // Group
    group: {
        argNames: ["id"],
        name: "groups/[[id]]",
        requestType: RequestType.GraphGetReplace
    },

    // Groups
    groups: {
        name: "groups",
        requestType: RequestType.GraphGet
    },

    // List
    list: {
        argNames: ["siteId", "id"],
        name: "sites/[[siteId]]/lists/[[id]]",
        requestType: RequestType.GraphGetReplace
    },

    // Lists
    lists: {
        argNames: ["siteId"],
        name: "sites/[[siteId]]/lists",
        requestType: RequestType.GraphGetReplace
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Root Site
    root: {
        requestType: RequestType.GraphGet
    },

    // Site
    site: {
        argNames: ["id"],
        name: "sites/[[id]]",
        requestType: RequestType.GraphGetReplace
    },

    // Sites
    sites: {
        name: "sites",
        requestType: RequestType.GraphGet
    },

    // User
    user: {
        argNames: ["id"],
        name: "users/[[id]]",
        requestType: RequestType.GraphGetReplace
    },

    // Users
    users: {
        requestType: RequestType.GraphGet
    },
};