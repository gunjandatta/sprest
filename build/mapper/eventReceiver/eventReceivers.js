System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, eventreceivers;
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
            exports_1("eventreceivers", eventreceivers = {
                // Adds an event receiver to the collection.
                add: {
                    metadataType: "SP.EventReceiverDefinition",
                    name: "",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Gets an event receiver by it's id.
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "eventreceiver"
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                }
            });
        }
    };
});
//# sourceMappingURL=eventReceivers.js.map