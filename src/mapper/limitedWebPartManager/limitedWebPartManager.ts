import {RequestType} from "../../types";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const limitedwebpartmanager = {
    // Gets a webpart by its id.
    get_WebParts: {
        argNames: ["id"],
        name: "webparts?expand=WebPart",
        requestType: RequestType.GetReplace
    }
};