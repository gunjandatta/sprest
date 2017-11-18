System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, field;
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
            exports_1("field", field = {
                // Deletes the object
                delete: {
                    requestType: index_1.RequestType.Delete
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Sets the value of the ShowInDisplayForm property for this field.
                setShowInDisplayForm: {
                    argNames: ["showInForm"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Sets the value of the ShowInEditForm property for this field.
                setShowInEditForm: {
                    argNames: ["showInForm"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Sets the value of the ShowInNewForm property for this field.
                setShowInNewForm: {
                    argNames: ["showInForm"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Updates it's properties.
                update: {
                    inheritMetadataType: true,
                    name: "",
                    requestMethod: "MERGE",
                    requestType: index_1.RequestType.PostWithArgsInBody
                }
            });
        }
    };
});
//# sourceMappingURL=field.js.map