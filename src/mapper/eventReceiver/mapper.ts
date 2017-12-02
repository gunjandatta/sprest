import { RequestType } from "../../types";

/**
 * Event Receiver
 */
export const eventreceiver = {
    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Updates it's properties.
    update: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    }
};

/**
 * Event Receivers
 */
export const eventreceivers = {
    // Adds an event receiver to the collection.
    add: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestType: RequestType.PostWithArgsInBody
    },

    // Gets an event receiver by it's id.
    getById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "eventreceiver"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};