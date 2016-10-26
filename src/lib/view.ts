module $REST {
    Library.view = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "ViewFields|viewfieldcollection"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Deletes the object
        delete: {
            requestType: Types.RequestType.Delete
        },

        // Returns the list view as HTML.
        renderAsHtml: {
            requestType: Types.RequestType.Get
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.View",
            name: "",
            requestMethod: "MERGE",
            requestType: Types.RequestType.PostWithArgsInBody
        }
    };
}
