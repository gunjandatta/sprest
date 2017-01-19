import {RequestType} from "../../types";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
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