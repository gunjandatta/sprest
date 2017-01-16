import {RequestType} from ".";

const Library = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "FieldLinks|fieldlinks|('[Name]')|fieldlink", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "WorkflowAssociations"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Deletes the content type.
    delete: {
        requestType: RequestType.Delete
    },

    // Updates it's properties.
    update: {
        metadataType: "SP.ContentType",
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    }
};
export default Library;