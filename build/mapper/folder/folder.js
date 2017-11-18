System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, folder;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("folder", folder = {
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
                    requestType: index_1.RequestType.Delete
                },
                // Get the file at the specified URL.
                getByUrl: {
                    argNames: ["serverRelativeUrl"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "folder"
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
                recycle: {
                    requestType: index_1.RequestType.Post
                },
                // Updates it's properties.
                update: {
                    metadataType: "SP.Folder",
                    name: "",
                    requestMethod: "MERGE",
                    requestType: index_1.RequestType.PostWithArgsInBody
                }
            });
        }
    };
});
//# sourceMappingURL=folder.js.map