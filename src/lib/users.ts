module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.users = {
        // Gets the user with the specified email address.
        getByEmail: {
            argNames: ["email"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets the user with the specified member identifier (ID).
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets the user with the specified login name.
        getByLoginName: {
            argNames: ["loginName"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        },

        // Removes the user with the specified ID.
        removeById: {
            argNames: ["id"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Removes the user with the specified login name.
        removeByLoginName: {
            argNames: ["loginName"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        }
    }
}
