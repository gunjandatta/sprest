"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
exports.limitedwebpartmanager = {
    // Gets a webpart by its id.
    get_WebParts: {
        argNames: ["id"],
        name: "webparts?expand=WebPart",
        requestType: types_1.RequestType.GetReplace
    }
};
//# sourceMappingURL=limitedWebPartManager.js.map