import {RequestType} from ".";

const Library = {
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
        requestType: RequestType.Delete
    },

    // Returns the list view as HTML.
    renderAsHtml: {
        requestType: RequestType.Get
    },

    // Updates it's properties.
    update: {
        metadataType: "SP.View",
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    }
};
export default Library;