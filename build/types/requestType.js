System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RequestType;
    return {
        setters: [],
        execute: function () {
            // Request Type
            exports_1("RequestType", RequestType = {
                // Requests
                Custom: 0,
                Delete: 1,
                Merge: 2,
                OData: 3,
                // Get Requests
                Get: 10,
                GetBuffer: 11,
                GetWithArgs: 12,
                GetWithArgsInBody: 13,
                GetWithArgsInQS: 14,
                GetWithArgsValueOnly: 15,
                GetReplace: 16,
                // Post Requests
                Post: 20,
                PostWithArgs: 21,
                PostWithArgsInBody: 22,
                PostWithArgsInQS: 23,
                PostWithArgsValueOnly: 24,
                PostReplace: 25
            });
        }
    };
});
//# sourceMappingURL=requestType.js.map