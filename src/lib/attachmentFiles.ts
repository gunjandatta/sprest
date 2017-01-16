import {RequestType} from ".";

/*********************************************************************************************************************************/
// Library
/*********************************************************************************************************************************/
const Library = {
    /**
     * Adds the attachment that is represented by the specified file name and byte array to the list item.
     * @param name - The name of the file to add.
     * @param contents - The file contents as an array buffer.
    **/
    add: {
        argNames: ["fileName"],
        requestType: RequestType.PostWithArgs
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};
export default Library;