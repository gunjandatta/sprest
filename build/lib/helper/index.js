System.register(["./app", "./jslink", "./loader", "./spCfg"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_1, jslink_1, loader_1, spCfg_1, Helper;
    return {
        setters: [
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (jslink_1_1) {
                jslink_1 = jslink_1_1;
            },
            function (loader_1_1) {
                loader_1 = loader_1_1;
            },
            function (spCfg_1_1) {
                spCfg_1 = spCfg_1_1;
            }
        ],
        execute: function () {
            /**
             * Helper Methods
             */
            exports_1("Helper", Helper = {
                App: app_1.AppHelper,
                JSLink: jslink_1.JSLinkHelper,
                Loader: loader_1.Loader,
                SPConfig: spCfg_1.SPConfig
            });
        }
    };
});
//# sourceMappingURL=index.js.map