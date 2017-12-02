"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
/**
 * User Custom Action
 */
exports.usercustomaction = {
    // Deletes the object
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
/**
 * User Custom Actions
 */
exports.usercustomactions = {
    // Adds a user custom action to the collection.
    add: {
        metadataType: "SP.UserCustomAction",
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Deletes all custom actions in the collection.
    clear: {
        requestType: types_1.RequestType.Post
    },
    // Returns the custom action with the specified identifier.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "usercustomaction"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
//# sourceMappingURL=mapper.js.map