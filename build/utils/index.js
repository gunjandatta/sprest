System.register(["./base", "./batch", "./dependencies", "./methodInfo", "./oData", "./promise", "./targetInfo", "./xhrRequest"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (base_1_1) {
                exportStar_1(base_1_1);
            },
            function (batch_1_1) {
                exportStar_1(batch_1_1);
            },
            function (dependencies_1_1) {
                exportStar_1(dependencies_1_1);
            },
            function (methodInfo_1_1) {
                exportStar_1(methodInfo_1_1);
            },
            function (oData_1_1) {
                exportStar_1(oData_1_1);
            },
            function (promise_1_1) {
                exportStar_1(promise_1_1);
            },
            function (targetInfo_1_1) {
                exportStar_1(targetInfo_1_1);
            },
            function (xhrRequest_1_1) {
                exportStar_1(xhrRequest_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map