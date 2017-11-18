System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, files;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Methods
            /*********************************************************************************************************************************/
            exports_1("files", files = {
                // Adds a file to this collection.
                add: {
                    argNames: ["overwrite", "url"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Adds a ghosted file to an existing list or document library.
                // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
                addTemplateFile: {
                    argNames: ["urlOfFile", "templateFileType"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Get the file at the specified URL.
                getByUrl: {
                    argNames: ["serverRelativeUrl"],
                    requestType: index_1.RequestType.GetWithArgsValueOnly,
                    returnType: "file"
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
//# sourceMappingURL=files.js.map