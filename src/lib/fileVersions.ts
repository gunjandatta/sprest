import {RequestType} from ".";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};
export default Library;