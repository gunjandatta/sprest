import {RequestType} from "../../types/index";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const version = {
    // Gets the version with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "version"
    },

    // Deletes all versions in the collection.
    deleteAll: {
        requestType: RequestType.Post
    },

    // Deletes a version, by the specified id.
    deleteById: {
        argNames: ["id"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Deletes a version, by the specified label.
    deleteByLabel: {
        argNames: ["label"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Restores a version, by the specified label.
    restoreByLabel: {
        argNames: ["label"],
        requestType: RequestType.PostWithArgsValueOnly
    }
};