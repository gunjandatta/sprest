import {RequestType} from ".";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
    // Adds a field link to the collection.
    add: {
        argNames: ["data"],
        metadataType: "SP.FieldLink",
        name: "",
        requestType: RequestType.PostWithArgsInBody
    },

    // Gets a field link by it's id.
    getById: {
        argNames: ["id"],
        requestType: RequestType.GetWithArgsValueOnly,
        returnType: "fieldlink"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};
export default Library;