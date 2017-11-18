System.register(["./requestType", "./spConfigTypes", "./sptypes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var requestType_1, spConfigTypes_1, SPTypes;
    return {
        setters: [
            function (requestType_1_1) {
                requestType_1 = requestType_1_1;
            },
            function (spConfigTypes_1_1) {
                spConfigTypes_1 = spConfigTypes_1_1;
            },
            function (SPTypes_1) {
                SPTypes = SPTypes_1;
            }
        ],
        execute: function () {
            exports_1("RequestType", requestType_1.RequestType);
            exports_1("SPConfigTypes", spConfigTypes_1.SPConfigTypes);
            exports_1("SPTypes", SPTypes);
        }
    };
});
//# sourceMappingURL=index.js.map