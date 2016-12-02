module GD {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.eventreceiverdefinitions = {
        // Adds an event receiver to the collection.
        add: {
            metadataType: "SP.EventReceiverDefinition",
            name: "",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Gets an event receiver by it's id.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "eventreceiver"
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
