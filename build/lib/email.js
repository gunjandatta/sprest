"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require("../utils");
var types_1 = require("../types");
/*********************************************************************************************************************************/
// Email
// The SP.Utilities.Utility.SendEmail object.
/*********************************************************************************************************************************/
var _Email = (function (_super) {
    __extends(_Email, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Email(targetInfo) {
        // Call the base constructor
        _super.call(this, targetInfo);
        // Default the properties
        this.defaultToWebFl = true;
        this.responses = [];
        this.targetInfo.endpoint = "SP.Utilities.Utility.SendEmail";
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to send an email
    _Email.prototype.send = function (properties) {
        // Parse the email properties
        for (var _i = 0, _a = ["To", "CC", "BCC"]; _i < _a.length; _i++) {
            var propName = _a[_i];
            var propValue = properties[propName];
            // Ensure the value exists
            if (propValue) {
                // See if it's a string
                if (typeof (propValue) === "string") {
                    // Add the results property
                    properties[propName] = { 'results': [propValue] };
                }
                else {
                    // Add the results property
                    properties[propName] = { 'results': propValue };
                }
            }
        }
        // Execute the method, and return the email object
        return this.executeMethod("send", {
            argNames: ["properties"],
            name: "",
            metadataType: "SP.Utilities.EmailProperties",
            requestType: types_1.RequestType.PostWithArgsInBody
        }, [properties]);
    };
    return _Email;
}(utils_1.Base));
exports.Email = new _Email();
//# sourceMappingURL=email.js.map