"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
exports.fileversions = {
    // Deletes the object
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
//# sourceMappingURL=fileVersions.js.map