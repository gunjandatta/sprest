import {RequestType} from ".";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
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
export default Library;