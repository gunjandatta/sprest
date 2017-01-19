"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("../utils");
/*********************************************************************************************************************************/
// People Manager
/*********************************************************************************************************************************/
var _PeopleManager = (function (_super) {
    __extends(_PeopleManager, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _PeopleManager(targetInfo) {
        // Call the base constructor
        _super.call(this, targetInfo);
        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "sp.userprofiles.peoplemanager";
        // Add the methods
        this.addMethods(this, { __metadata: { type: "peoplemanager" } });
    }
    return _PeopleManager;
}(utils_1.Base));
exports.PeopleManager = _PeopleManager;
//# sourceMappingURL=peopleManager.js.map