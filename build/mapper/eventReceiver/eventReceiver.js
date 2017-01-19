"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
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
//# sourceMappingURL=eventReceiver.js.map