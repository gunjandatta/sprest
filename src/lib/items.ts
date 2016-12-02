module GD {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.items = {
        // Adds an item to the list item collection.
        add: {
            metadataType: function(obj) { return obj.Parent && obj.Parent["ListItemEntityTypeFullName"] ? obj.Parent["ListItemEntityTypeFullName"] : "SP.ListItem" },
            name: "",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Gets an item by its id.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "listitem"
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
