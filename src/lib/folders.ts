import {RequestType} from ".";

/*********************************************************************************************************************************/
// Library
/*********************************************************************************************************************************/
const Library = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder", "StorageMetrics"
    ],

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/

    // Adds the folder that is located at the specified URL to the collection.
    add: {
        argNames: ["url"],
        requestType: RequestType.PostWithArgs
    },

    // Get the file at the specified URL.
    getbyurl: {
        argNames: ["serverRelativeUrl"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};
export default Library;