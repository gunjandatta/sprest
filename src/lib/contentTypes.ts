module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.contenttypes = {
        // Adds a content type to the collection.
        add: {
            argNames: ["parameters"],
            metadataType: "SP.ContentType",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds an existing content type to this collection.
        addAvailableContentType: {
            argNames: ["contentTypeId"],
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Gets a content type by id.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets a content type by name.
        getByName: {
            argNames: ["name"],
            name: "?$filter=Name eq '[[name]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
