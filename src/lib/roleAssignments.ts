module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.roleAssignments = {
        // Adds a new role assignment with the specified principal and role definitions to the collection.
        addRoleAssignment: {
            argNames: ["principalId", "roleDefId"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Gets the role assignment associated with the specified principal ID from the collection.
        getByPrincipalId: {
            argNames: ["principalId"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        },

        // Gets the role definition with the specified role type.
        removeRoleAssignment: {
            argNames: ["principalId", "roleDefId"],
            requestType: Types.RequestType.PostWithArgs
        }
    };
}
