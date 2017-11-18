System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, search;
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
            exports_1("search", search = {
                postquery: {
                    argNames: ["request"],
                    metadataType: "Microsoft.Office.Server.Search.REST.SearchRequest",
                    requestType: index_1.RequestType.PostWithArgsInBody
                }
            });
        }
    };
});
//# sourceMappingURL=search.js.map