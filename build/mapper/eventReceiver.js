"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.eventreceiver = {
    delete: {
        requestType: utils_1.RequestType.Delete
    },
    update: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestMethod: "MERGE",
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
exports.eventreceivers = {
    add: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    getById: {
        argNames: ["id"],
        requestType: utils_1.RequestType.GetWithArgsValueOnly,
        returnType: "eventreceiver"
    },
    query: {
        argNames: ["oData"],
        requestType: utils_1.RequestType.OData
    }
};
//# sourceMappingURL=eventReceiver.js.map