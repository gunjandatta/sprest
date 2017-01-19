"use strict";
var types_1 = require("../../types");
/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
exports.peoplepicker = {
    clientPeoplePickerResolveUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser",
        replaceEndpointFl: true,
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    clientPeoplePickerSearchUser: {
        argNames: ["queryParams"],
        metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
        name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser",
        replaceEndpointFl: true,
        requestType: types_1.RequestType.PostWithArgsInBody
    }
};
//# sourceMappingURL=peoplePicker.js.map