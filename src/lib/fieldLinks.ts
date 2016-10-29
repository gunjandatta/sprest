module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.fieldlinks = {
        // Adds a field link to the collection.
        add: {
            argNames: ["data"],
            metadataType: "SP.FieldLink",
            name: "",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Gets a field link by it's id.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
