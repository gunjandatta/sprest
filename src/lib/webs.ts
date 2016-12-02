module GD {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.webs = {
        add: {
            argNames: ["parameters"],
            metadataType: "SP.WebCreationInformation",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
