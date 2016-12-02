module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.eventreceiverdefinition = {
        // Deletes the object
        delete: {
            requestType: Types.RequestType.Delete
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.EventReceiverDefinition",
            name: "",
            requestMethod: "MERGE",
            requestType: Types.RequestType.PostWithArgsInBody
        }
    };
}
