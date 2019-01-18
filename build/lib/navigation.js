"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Navigation
 */
exports.Navigation = (function (url, targetInfo) {
    var navigation = new utils_1.Base(targetInfo);
    // Default the properties
    navigation.targetInfo.defaultToWebFl = true;
    navigation.targetInfo.endpoint = "navigation";
    // See if the web url exists
    if (url) {
        // Set the settings
        navigation.targetInfo.url = url;
    }
    // Add the methods
    utils_1.Helper.addMethods(navigation, { __metadata: { type: "navigationservicerest" } });
    // Return the navigation
    return navigation;
});
