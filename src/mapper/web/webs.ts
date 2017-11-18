import {RequestType} from "../../types/index";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const webs = {
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