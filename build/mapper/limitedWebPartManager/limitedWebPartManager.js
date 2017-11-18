System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, limitedwebpartmanager;
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
            exports_1("limitedwebpartmanager", limitedwebpartmanager = {
                // Gets a webpart by its id.
                get_WebParts: {
                    argNames: ["id"],
                    name: "webparts?expand=WebPart",
                    requestType: index_1.RequestType.GetReplace
                }
            });
        }
    };
});
//# sourceMappingURL=limitedWebPartManager.js.map