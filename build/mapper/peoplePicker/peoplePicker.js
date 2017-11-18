System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, peoplepicker;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Methods
            /*********************************************************************************************************************************/
            exports_1("peoplepicker", peoplepicker = {
                clientPeoplePickerResolveUser: {
                    argNames: ["queryParams"],
                    metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
                    name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerResolveUser",
                    replaceEndpointFl: true,
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                clientPeoplePickerSearchUser: {
                    argNames: ["queryParams"],
                    metadataType: "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters",
                    name: "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser",
                    replaceEndpointFl: true,
                    requestType: index_1.RequestType.PostWithArgsInBody
                }
            });
        }
    };
});
//# sourceMappingURL=peoplePicker.js.map