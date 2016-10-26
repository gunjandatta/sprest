module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.lists = {
        // Adds a list to the list collection.
        add: {
            metadataType: "SP.List",
            requestType: Types.RequestType.PostWithArgs
        },

        // Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
        ensureSiteAssetsLibrary: {
            requestType: Types.RequestType.Post
        },

        // Gets a list that is the default location for wiki pages.
        ensureSitePagesLibrary: {
            requestType: Types.RequestType.Post
        },

        // Returns the list with the specified list identifier.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Returns the list with the specified title from the collection.
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
