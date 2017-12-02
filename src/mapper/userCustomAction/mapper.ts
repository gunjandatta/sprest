import { RequestType } from "../../types";

/**
 * User Custom Action
 */
export const usercustomaction = {
    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};

/**
 * User Custom Actions
 */
export const usercustomactions = {
    // Adds a user custom action to the collection.
    add: {
        metadataType: "SP.UserCustomAction",
        name: "",
        requestType: RequestType.PostWithArgsInBody
    },

    // Deletes all custom actions in the collection.
    clear: {
        requestType: RequestType.Post
    },

    // Returns the custom action with the specified identifier.
    getById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "usercustomaction"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};