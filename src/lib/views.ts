module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.views = {
        // Adds a view to the view collection.
        add: {
            metadataType: "SP.View",
            requestType: Types.RequestType.PostWithArgs
        },

        // Gets the list view with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets the list view with the specified title.
        getByTitle: {
            argNames: ["title"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
