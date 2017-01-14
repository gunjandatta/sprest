import {RequestType} from "../types";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
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
export default Library;