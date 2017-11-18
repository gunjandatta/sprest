import {RequestType} from "../../types/index";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const roledefinition = {
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