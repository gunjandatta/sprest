import {RequestType} from "../types";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
    // Adds the field with the specified field internal name or display name to the collection.
    addViewField: {
        argNames: ["fieldName"],
        requestType: RequestType.PostWithArgsValueOnly
    },

    // Moves the field with the specified field internal name to the specified position in the collection.
    moveViewFieldTo: {
        argNames: ["field", "index"],
        requestType: RequestType.PostWithArgsInBody
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    },

    // Removes all the fields from the collection.
    removeAllViewFields: {
        requestType: RequestType.Post
    },

    // Removes the field with the specified field internal name from the collection.
    removeViewField: {
        argNames: ["fieldName"],
        requestType: RequestType.GetWithArgsValueOnly
    }
};
export default Library;