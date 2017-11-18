System.register(["../utils/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, _PeoplePicker, PeoplePicker;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // People Picker
            /*********************************************************************************************************************************/
            _PeoplePicker = class _PeoplePicker extends index_1.Base {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(targetInfo) {
                    // Call the base constructor
                    super(targetInfo);
                    // Default the properties
                    this.defaultToWebFl = true;
                    this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
                    this.targetInfo.overrideDefaultRequestToHostFl = true;
                    // Add the methods
                    this.addMethods(this, { __metadata: { type: "peoplepicker" } });
                }
            };
            exports_1("PeoplePicker", PeoplePicker = _PeoplePicker);
        }
    };
});
//# sourceMappingURL=peoplePicker.js.map