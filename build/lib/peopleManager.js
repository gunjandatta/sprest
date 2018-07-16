"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * People Manager
 */
exports.PeopleManager = (function (targetInfo) {
    var peopleManager = new utils_1.Base(targetInfo);
    // Default the properties
    peopleManager.targetInfo.defaultToWebFl = true;
    peopleManager.targetInfo.endpoint = "sp.userprofiles.peoplemanager";
    // Add the methods
    peopleManager.addMethods(peopleManager, { __metadata: { type: "peoplemanager" } });
    // Return the people manager
    return peopleManager;
});
