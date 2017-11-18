import {RequestType} from "../../types/index";
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const contenttypes = {
    // Adds a content type to the collection.
    add: {
        metadataType: "SP.ContentType",
        name: "",
        requestType: RequestType.PostWithArgsInBody
    },

    // Adds an existing content type to this collection.
    addAvailableContentType: {
        argNames: ["contentTypeId"],
        requestType: RequestType.PostWithArgsInBody
    },

    // Gets a content type by id.
    getById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "contenttype"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};