System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, views;
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
            exports_1("views", views = {
                // Adds a view to the view collection.
                add: {
                    metadataType: "SP.View",
                    name: "",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Gets the list view with the specified ID.
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "view"
                },
                // Gets the list view with the specified title.
                getByTitle: {
                    argNames: ["title"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "view"
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
//# sourceMappingURL=views.js.map