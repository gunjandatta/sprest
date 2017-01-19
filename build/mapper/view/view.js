"use strict";
var types_1 = require("../../types");
exports.view = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "ViewFields|viewfieldcollection"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Returns the list view as HTML.
    renderAsHtml: {
        requestType: types_1.RequestType.Get
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.View",
        name: "",
        requestMethod: "MERGE",
        requestType: types_1.RequestType.PostWithArgsInBody
    }
};
//# sourceMappingURL=view.js.map