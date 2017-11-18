System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, eventreceiver;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Methods
            /*********************************************************************************************************************************/
            exports_1("eventreceiver", eventreceiver = {
                // Deletes the object
                delete: {
                    requestType: index_1.RequestType.Delete
                },
                // Updates it's properties.
                update: {
                    metadataType: "SP.EventReceiverDefinition",
                    name: "",
                    requestMethod: "MERGE",
                    requestType: index_1.RequestType.PostWithArgsInBody
                }
            });
        }
    };
});
//# sourceMappingURL=eventReceiver.js.map