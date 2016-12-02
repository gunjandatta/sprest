module GD {
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
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "usercustomaction"
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
