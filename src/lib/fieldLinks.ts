module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.fieldlinks = {
        // Adds a field link to the collection.
        add: {
            argNames: ["data"],
            metadataType: "SP.FieldLink",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Gets a field link by it's id.
        getById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Gets a field by it's internal name.
        getFieldLinkByName: {
            argNames: ["name"],
            name: "fields?$filter=Name eq '[[name]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
