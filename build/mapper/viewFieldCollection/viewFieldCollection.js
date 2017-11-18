System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, viewfieldcollection;
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
            exports_1("viewfieldcollection", viewfieldcollection = {
                // Adds the field with the specified field internal name or display name to the collection.
                addViewField: {
                    argNames: ["fieldName"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Moves the field with the specified field internal name to the specified position in the collection.
                moveViewFieldTo: {
                    argNames: ["field", "index"],
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Removes all the fields from the collection.
                removeAllViewFields: {
                    requestType: index_1.RequestType.Post
                },
                // Removes the field with the specified field internal name from the collection.
                removeViewField: {
                    argNames: ["fieldName"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly
                }
            });
        }
    };
});
//# sourceMappingURL=viewFieldCollection.js.map