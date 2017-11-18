import {RequestType} from "../../types";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const lists = {
    // Adds a list to the list collection.
    add: {
        metadataType: "SP.List",
        name: "",
        requestType: RequestType.PostWithArgsInBody
    },

    // Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
    ensureSiteAssetsLibrary: {
        requestType: RequestType.Post
    },

    // Gets a list that is the default location for wiki pages.
    ensureSitePagesLibrary: {
        requestType: RequestType.Post
    },

    // Returns the list with the specified list identifier.
    getById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },

    // Returns the list with the specified title from the collection.
    getByTitle: {
        argNames: ["title"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};