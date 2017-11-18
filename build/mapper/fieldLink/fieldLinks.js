System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, fieldlinks;
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
            exports_1("fieldlinks", fieldlinks = {
                // Adds a field link to the collection.
                add: {
                    argNames: ["data"],
                    metadataType: "SP.FieldLink",
                    name: "",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Gets a field link by it's id.
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "fieldlink"
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
//# sourceMappingURL=fieldLinks.js.map