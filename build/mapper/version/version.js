System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, version;
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
            exports_1("version", version = {
                // Gets the version with the specified ID.
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "version"
                },
                // Deletes all versions in the collection.
                deleteAll: {
                    requestType: index_1.RequestType.Post
                },
                // Deletes a version, by the specified id.
                deleteById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Deletes a version, by the specified label.
                deleteByLabel: {
                    argNames: ["label"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Restores a version, by the specified label.
                restoreByLabel: {
                    argNames: ["label"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                }
            });
        }
    };
});
//# sourceMappingURL=version.js.map