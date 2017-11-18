System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, roleassignments;
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
            exports_1("roleassignments", roleassignments = {
                // Adds a new role assignment with the specified principal and role definitions to the collection.
                addRoleAssignment: {
                    argNames: ["principalId", "roleDefId"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Gets the role assignment associated with the specified principal ID from the collection.
                getByPrincipalId: {
                    argNames: ["principalId"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "roleassignment"
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Gets the role definition with the specified role type.
                removeRoleAssignment: {
                    argNames: ["principalId", "roleDefId"],
                    requestType: index_1.RequestType.PostWithArgs
                }
            });
        }
    };
});
//# sourceMappingURL=roleAssignments.js.map