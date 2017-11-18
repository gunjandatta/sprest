System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, roledefinitions;
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
            exports_1("roledefinitions", roledefinitions = {
                // Gets the role definition with the specified ID from the collection.
                getById: {
                    argNames: ["roleDefId"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "roledefinition"
                },
                // Gets the role definition with the specified name.
                getByName: {
                    argNames: ["name"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "roledefinition"
                },
                // Gets the role definitions with the specified role type.
                getByType: {
                    argNames: ["roleType"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "roledefinitions"
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
//# sourceMappingURL=roleDefinitions.js.map