module GD {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.roledefinitions = {
        // Gets the role definition with the specified ID from the collection.
        getById: {
            argNames: ["roleDefId"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "roledefinition"
        },

        // Gets the role definition with the specified name.
        getByName: {
            argNames: ["name"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "roledefinition"
        },

        // Gets the role definitions with the specified role type.
        getByType: {
            argNames: ["roleType"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "roledefinitions"
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
