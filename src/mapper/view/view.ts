import {RequestType} from "../../types/index";

export const view = {
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

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
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