System.register(["./complexTypes", "./lib/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComplexTypes;
    var exportedNames_1 = {
        "ComplexTypes": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (ComplexTypes_1) {
                ComplexTypes = ComplexTypes_1;
            },
            function (index_1_1) {
                exportStar_1(index_1_1);
            }
        ],
        execute: function () {
            exports_1("ComplexTypes", ComplexTypes);
        }
    };
});
//# sourceMappingURL=index.js.map