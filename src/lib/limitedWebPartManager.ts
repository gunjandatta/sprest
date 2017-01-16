import {RequestType} from ".";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
const Library = {
    // Gets a webpart by its id.
    get_WebParts: {
        argNames: ["id"],
        name: "webparts?expand=WebPart",
        requestType: RequestType.GetReplace
    }
};
export default Library;