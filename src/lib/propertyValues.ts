module $REST {
    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    Library.propertyvalues = {
        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.PropertyValue",
            name: "",
            requestMethod: "MERGE",
            requestType: Types.RequestType.PostWithArgsInBody
        }
    }
}