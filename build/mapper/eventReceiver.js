"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Event Receiver
 */
exports.eventreceiver = {
    // Deletes the object
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Event Receivers
 */
exports.eventreceivers = {
    // Adds an event receiver to the collection.
    add: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    // Gets an event receiver by it's id.
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "eventreceiver"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
