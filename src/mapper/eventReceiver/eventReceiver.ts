import {RequestType} from "../../types";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const eventreceiver = {
    // Deletes the object
    delete: {
        requestType: RequestType.Delete
    },

    // Updates it's properties.
    update: {
        metadataType: "SP.EventReceiverDefinition",
        name: "",
        requestMethod: "MERGE",
        requestType: RequestType.PostWithArgsInBody
    }
};