"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Utility
 */
var _Utility = /** @class */ (function (_super) {
    __extends(_Utility, _super);
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    function _Utility(url, targetInfo) {
        var _this = 
        // Call the base constructor
        _super.call(this, targetInfo) || this;
        // Default the properties
        _this.defaultToWebFl = true;
        _this.targetInfo.endpoint = "SP.Utilities.Utility";
        // See if the web url exists
        if (url) {
            // Set the settings
            _this.targetInfo.url = url;
        }
        // Add the methods
        _this.addMethods(_this, { __metadata: { type: "utility" } });
        return _this;
    }
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Method to create a wiki page
    _Utility.prototype.createWikiPage = function (listUrl, content) {
        if (content === void 0) { content = ""; }
        var parameters = {
            ServerRelativeUrl: listUrl,
            WikiHtmlContent: content
        };
        // Execute the method
        return this.executeMethod("createWikiPage", {
            argNames: ["parameters"],
            name: "SP.Utilities.Utility.CreateWikiPageInContextWeb",
            replaceEndpointFl: true,
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [parameters]);
    };
    // Method to send an email
    _Utility.prototype.sendEmail = function (properties) {
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
        // Execute the method
        return this.executeMethod("sendEmail", {
            argNames: ["properties"],
            metadataType: "SP.Utilities.EmailProperties",
            name: "SP.Utilities.Utility.sendEmail",
            replaceEndpointFl: true,
            requestType: utils_1.RequestType.PostWithArgsInBody
        }, [properties]);
    };
    return _Utility;
}(utils_1.Base));
exports.Utility = _Utility;
//# sourceMappingURL=utility.js.map