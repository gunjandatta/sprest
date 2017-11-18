System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, attachmentfiles;
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
            exports_1("attachmentfiles", attachmentfiles = {
                /**
                 * Adds the attachment that is represented by the specified file name and byte array to the list item.
                 * @param name - The name of the file to add.
                 * @param contents - The file contents as an array buffer.
                **/
                add: {
                    argNames: ["fileName"],
                    requestType: index_1.RequestType.PostWithArgs
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
//# sourceMappingURL=attachmentFiles.js.map