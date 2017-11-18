System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, user;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("user", user = {
                /*********************************************************************************************************************************/
                // Properties
                /*********************************************************************************************************************************/
                properties: [
                    "Groups|sitegroups|([Name])|group"
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
                }
            });
        }
    };
});
//# sourceMappingURL=user.js.map