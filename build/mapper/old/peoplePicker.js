"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
/**
 * People Picker
 */
exports.peoplepicker = {
    clientPeoplePickerResolveUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    },
    clientPeoplePickerSearchUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser",
        replaceEndpointFl: true,
        requestType: utils_1.RequestType.PostWithArgsInBody
    }
};
