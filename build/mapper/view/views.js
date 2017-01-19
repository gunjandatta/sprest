"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
exports.views = {
    // Adds a view to the view collection.
    add: {
        metadataType: "SP.View",
        name: "",
        requestType: types_1.RequestType.PostWithArgs
    },
    // Gets the list view with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Gets the list view with the specified title.
    getByTitle: {
        argNames: ["title"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
//# sourceMappingURL=views.js.map