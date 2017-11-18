System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, view;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("view", view = {
                /*********************************************************************************************************************************/
                // Properties
                /*********************************************************************************************************************************/
                properties: [
                    "ViewFields|viewfieldcollection"
                ],
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                // Deletes the object
                delete: {
                    requestType: index_1.RequestType.Delete
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Returns the list view as HTML.
                renderAsHtml: {
                    requestType: index_1.RequestType.Get
                },
                // Updates it's properties.
                update: {
                    metadataType: "SP.View",
                    name: "",
                    requestMethod: "MERGE",
                    requestType: index_1.RequestType.PostWithArgsInBody
                }
            });
        }
    };
});
//# sourceMappingURL=view.js.map