"use strict";
var types_1 = require("../../types");
exports.folder = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder|folder", "Properties|propertyvalues", "StorageMetrics"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Get the file at the specified URL.
    getByUrl: {
        argNames: ["serverRelativeUrl"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "folder"
    },
    // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: types_1.RequestType.Post
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.Folder",
        name: "",
        requestMethod: "MERGE",
        requestType: types_1.RequestType.PostWithArgsInBody
    }
};
//# sourceMappingURL=folder.js.map