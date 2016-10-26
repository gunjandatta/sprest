module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.viewfieldcollection = {
        // Adds the field with the specified field internal name or display name to the collection.
        addViewField: {
            argNames: ["fieldName"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Moves the field with the specified field internal name to the specified position in the collection.
        moveViewFieldTo: {
            argNames: ["field", "index"],
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        },

        // Removes all the fields from the collection.
        removeAllViewFields: {
            requestType: Types.RequestType.Post
        },

        // Removes the field with the specified field internal name from the collection.
        removeViewField: {
            argNames: ["fieldName"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        }
    };
}
