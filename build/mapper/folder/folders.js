System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, folders;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Library
            /*********************************************************************************************************************************/
            exports_1("folders", folders = {
                /*********************************************************************************************************************************/
                // Properties
                /*********************************************************************************************************************************/
                properties: [
                    "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
                    "ParentFolder", "StorageMetrics"
                ],
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                // Adds the folder that is located at the specified URL to the collection.
                add: {
                    argNames: ["url"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Get the file at the specified URL.
                getbyurl: {
                    argNames: ["serverRelativeUrl"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "folder"
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                }
            });
        }
    };
});
//# sourceMappingURL=folders.js.map