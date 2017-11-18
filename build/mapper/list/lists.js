System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, lists;
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
            exports_1("lists", lists = {
                // Adds a list to the list collection.
                add: {
                    metadataType: "SP.List",
                    name: "",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
                ensureSiteAssetsLibrary: {
                    requestType: index_1.RequestType.Post
                },
                // Gets a list that is the default location for wiki pages.
                ensureSitePagesLibrary: {
                    requestType: index_1.RequestType.Post
                },
                // Returns the list with the specified list identifier.
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "list"
                },
                // Returns the list with the specified title from the collection.
                getByTitle: {
                    argNames: ["title"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "list"
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
//# sourceMappingURL=lists.js.map