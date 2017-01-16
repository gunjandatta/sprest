import {RequestType} from ".";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
    add: {
        argNames: ["parameters"],
        metadataType: "SP.WebCreationInformation",
        requestType: RequestType.PostWithArgsInBody
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};
export default Library;