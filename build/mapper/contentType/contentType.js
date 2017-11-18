System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, contenttype;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("contenttype", contenttype = {
                /*********************************************************************************************************************************/
                // Properties
                /*********************************************************************************************************************************/
                properties: [
                    "FieldLinks|fieldlinks|('[Name]')|fieldlink", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "WorkflowAssociations"
                ],
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                // Deletes the content type.
                delete: {
                    requestType: index_1.RequestType.Delete
                },
                // Updates it's properties.
                update: {
                    metadataType: "SP.ContentType",
                    name: "",
                    requestMethod: "MERGE",
                    requestType: index_1.RequestType.PostWithArgsInBody
                }
            });
        }
    };
});
//# sourceMappingURL=contentType.js.map