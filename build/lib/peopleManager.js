System.register(["../utils/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, _PeopleManager, PeopleManager;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // People Manager
            /*********************************************************************************************************************************/
            _PeopleManager = class _PeopleManager extends index_1.Base {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(targetInfo) {
                    // Call the base constructor
                    super(targetInfo);
                    // Default the properties
                    this.defaultToWebFl = true;
                    this.targetInfo.endpoint = "sp.userprofiles.peoplemanager";
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "peoplemanager" } });
                }
            };
            exports_1("PeopleManager", PeopleManager = _PeopleManager);
        }
    };
});
//# sourceMappingURL=peopleManager.js.map