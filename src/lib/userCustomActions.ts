module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.usercustomactions = {
        // Adds a user custom action to the collection.
        add: {
            metadataType: "SP.UserCustomAction",
            name: "",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Deletes all custom actions in the collection.
        clear: {
            requestType: Types.RequestType.Post
        },

        // Returns the custom action with the specified identifier.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Returns the user custom action based on the name of the specified user custom action.
        getByName: {
            argNames: ["name"],
            name: "?filter=Name eq '[[name]]'",
            requestType: Types.RequestType.PostReplace
        },

        // Returns the user custom action based on the title of the specified user custom action.
        getByTitle: {
            argNames: ["title"],
            name: "?filter=Title eq '[[title]]'",
            requestType: Types.RequestType.PostReplace
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
