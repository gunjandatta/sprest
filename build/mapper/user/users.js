"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
exports.users = {
    // Adds a user to the user collection.
    add: {
        metadataType: "SP.User",
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Gets the user with the specified email address.
    getByEmail: {
        argNames: ["email"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    // Gets the user with the specified member identifier (ID).
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "user"
    },
    // Gets the user with the specified login name.
    getByLoginName: {
        argNames: ["loginName"],
        name: "getByLoginName(@v)?@v='[[loginName]]'",
        requestType: types_1.RequestType.GetReplace,
        returnType: "user"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    },
    // Removes the user with the specified ID.
    removeById: {
        argNames: ["id"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
    // Removes the user with the specified login name.
    removeByLoginName: {
        argNames: ["loginName"],
        name: "removeByLoginName(@v)?@v='[[loginName]]'",
        requestType: types_1.RequestType.PostReplace
    }
};
//# sourceMappingURL=users.js.map