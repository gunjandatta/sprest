module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.folders = {
        // Adds the folder that is located at the specified URL to the collection.
        add: {
            argNames: ["url"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Get the file at the specified URL.
        getbyurl: {
            argNames: ["serverRelativeUrl"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
