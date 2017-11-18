System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, contenttypes;
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
            exports_1("contenttypes", contenttypes = {
                // Adds a content type to the collection.
                add: {
                    metadataType: "SP.ContentType",
                    name: "",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Adds an existing content type to this collection.
                addAvailableContentType: {
                    argNames: ["contentTypeId"],
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Gets a content type by id.
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "contenttype"
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
//# sourceMappingURL=contentTypes.js.map