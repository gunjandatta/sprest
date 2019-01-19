"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * People Picker
 */
exports.PeoplePicker = (function (targetInfo) {
    var peoplePicker = new utils_1.Base(targetInfo);
    // Default the properties
    peoplePicker.targetInfo.defaultToWebFl = true;
    peoplePicker.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
    peoplePicker.targetInfo.overrideDefaultRequestToHostFl = true;
    // Add the methods
    utils_1.Request.addMethods(peoplePicker, { __metadata: { type: "peoplepicker" } });
    // Return the people picker
    return peoplePicker;
});
