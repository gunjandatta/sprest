module GD {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.users = {
        // Adds a user to the user collection.
        add: {
            metadataType: "SP.User",
            name: "",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Gets the user with the specified email address.
        getByEmail: {
            argNames: ["email"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "user"
        },

        // Gets the user with the specified member identifier (ID).
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "user"
        },

        // Gets the user with the specified login name.
        getByLoginName: {
            argNames: ["loginName"],
            name: "getByLoginName(@v)?@v='[[loginName]]'",
            requestType: Types.RequestType.GetReplace,
            returnType: "user"
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
            name: "removeByLoginName(@v)?@v='[[loginName]]'",
            requestType: Types.RequestType.PostReplace
        }
    }
}
