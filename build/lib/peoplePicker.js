"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("../utils");
/*********************************************************************************************************************************/
// People Picker
/*********************************************************************************************************************************/
var _PeoplePicker = (function (_super) {
    __extends(_PeoplePicker, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _PeoplePicker(targetInfo) {
        // Call the base constructor
        _super.call(this, targetInfo);
        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
        // Add the methods
        this.addMethods(this, { __metadata: { type: "peoplepicker" } });
    }
    return _PeoplePicker;
}(utils_1.Base));
exports.PeoplePicker = _PeoplePicker;
//# sourceMappingURL=peoplePicker.js.map