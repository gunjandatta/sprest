System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, usercustomactions;
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
            exports_1("usercustomactions", usercustomactions = {
                // Adds a user custom action to the collection.
                add: {
                    metadataType: "SP.UserCustomAction",
                    name: "",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Deletes all custom actions in the collection.
                clear: {
                    requestType: index_1.RequestType.Post
                },
                // Returns the custom action with the specified identifier.
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "usercustomaction"
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
//# sourceMappingURL=userCustomActions.js.map