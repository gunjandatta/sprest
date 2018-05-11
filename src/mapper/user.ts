import { RequestType } from "../utils";

/**
 * Group
 */
export const group = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Users|users|/getById([Name])|user"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Updates it's properties.
    update: {
        metadataType: "SP.Group",
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    }
};

/**
 * Site Groups
 */
export const sitegroups = {
    // Adds a group to the group collection.
    add: {
        metadataType: "SP.Group",
        name: "",
        requestType: RequestType.PostWithArgsInBody
    },

    // Returns a group from the collection based on the member ID of the group.
    getById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },

    // Returns a cross-site group from the collection based on the name of the group.
    getByName: {
        argNames: ["name"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "group"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Removes the group with the specified member ID from the collection.
    removeById: {
        argNames: ["id"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Removes the cross-site group with the specified name from the collection.
    removeByLoginName: {
        argNames: ["name"],
        requestType: RequestType.PostWithArgsValueOnly
    },
};

/**
 * People Picker
 */
export const peoplepicker = {
    clientPeoplePickerResolveUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    },

    clientPeoplePickerSearchUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser",
        replaceEndpointFl: true,
        requestType: RequestType.PostWithArgsInBody
    }
};

/**
 * User
 */
export const user = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Groups|sitegroups|([Name])|group"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Updates it's properties.
    update: {
        metadataType: "SP.User",
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    }
};

/**
 * Users
 */
export const users = {
    // Adds a user to the user collection.
    add: {
        metadataType: "SP.User",
        name: "",
        requestType: RequestType.PostWithArgsInBody
    },

    // Gets the user with the specified email address.
    getByEmail: {
        argNames: ["email"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },

    // Gets the user with the specified member identifier (ID).
    getById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },

    // Gets the user with the specified login name.
    getByLoginName: {
        argNames: ["loginName"],
        name: "getByLoginName(@v)?@v='[[loginName]]'",
        requestType: RequestType.GetReplace,
        returnType: "user"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Removes the user with the specified ID.
    removeById: {
        argNames: ["id"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Removes the user with the specified login name.
    removeByLoginName: {
        argNames: ["loginName"],
        name: "removeByLoginName(@v)?@v='[[loginName]]'",
        requestType: RequestType.PostReplace
    }
};