System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SPConfigTypes;
    return {
        setters: [],
        execute: function () {
            /**
             * SharePoint Configuration Types
             * The value determines the order to install the object type.
             */
            exports_1("SPConfigTypes", SPConfigTypes = {
                Fields: 0,
                ContentTypes: 1,
                Lists: 2,
                SiteUserCustomActions: 3,
                WebParts: 5,
                WebUserCustomActions: 4
            });
        }
    };
});
//# sourceMappingURL=spConfigTypes.js.map