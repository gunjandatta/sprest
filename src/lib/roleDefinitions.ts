module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.roledefinitions = {
        // Gets the role definition with the specified ID from the collection.
        getById: {
            argNames: ["roleDefId"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets the role definition with the specified name.
        getByName: {
            argNames: ["name"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets the role definition with the specified role type.
        getByType: {
            argNames: ["roleType"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
