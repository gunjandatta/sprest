"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
exports.contenttypes = {
    // Adds a content type to the collection.
    add: {
        metadataType: "SP.ContentType",
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Adds an existing content type to this collection.
    addAvailableContentType: {
        argNames: ["contentTypeId"],
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Gets a content type by id.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "contenttype"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
//# sourceMappingURL=contentTypes.js.map