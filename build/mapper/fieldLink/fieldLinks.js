"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
exports.fieldlinks = {
    // Adds a field link to the collection.
    add: {
        argNames: ["data"],
        metadataType: "SP.FieldLink",
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Gets a field link by it's id.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "fieldlink"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
//# sourceMappingURL=fieldLinks.js.map