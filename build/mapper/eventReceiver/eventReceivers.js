"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
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
//# sourceMappingURL=eventReceivers.js.map