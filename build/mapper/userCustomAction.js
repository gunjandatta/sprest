"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * User Custom Action
 */
exports.usercustomaction = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
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
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Deletes all custom actions in the collection.
    clear: {
        requestType: utils_1.RequestType.Post
    },
    // Returns the custom action with the specified identifier.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "usercustomaction"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
