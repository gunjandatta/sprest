"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("../utils");
/*********************************************************************************************************************************/
// List
// The SPList object.
/*********************************************************************************************************************************/
var _List = (function (_super) {
    __extends(_List, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _List(listName, targetInfo) {
        // Call the base constructor
        _super.call(this, targetInfo);
        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";
        // Add the methods
        this.addMethods(this, { __metadata: { type: "list" } });
    }
    return _List;
}(utils_1.Base));
exports.List = _List;
//# sourceMappingURL=list.js.map