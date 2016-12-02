module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.views = {
        // Adds a view to the view collection.
        add: {
            metadataType: "SP.View",
            name: "",
            requestType: Types.RequestType.PostWithArgs
        },

        // Gets the list view with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "view"
        },

        // Gets the list view with the specified title.
        getByTitle: {
            argNames: ["title"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "view"
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
