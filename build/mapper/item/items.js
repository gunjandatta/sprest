System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, items;
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
            exports_1("items", items = {
                // Adds an item to the list item collection.
                add: {
                    metadataType: function (obj) {
                        return (obj.parent && obj.parent["ListItemEntityTypeFullName"]) || "SP.ListItem";
                    },
                    name: "",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Gets an item by its id.
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "listitem"
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
//# sourceMappingURL=items.js.map