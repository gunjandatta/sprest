"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
/**
 * Event Receiver
 */
exports.eventreceiver = {
    // Deletes the object
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestMethod: "MERGE",
        requestType: types_1.RequestType.PostWithArgsInBody
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
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Gets an event receiver by it's id.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "eventreceiver"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
//# sourceMappingURL=mapper.js.map