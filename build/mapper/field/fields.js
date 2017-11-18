System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, fields;
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
            exports_1("fields", fields = {
                // Adds a field to the field collection.
                add: {
                    metadataType: "SP.Field",
                    name: "",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Adds a field to the field collection.
                addField: {
                    argNames: ["parameters"],
                    metadataType: "SP.FieldCreationInformation",
                    name: "addField",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
                addDependentLookupField: {
                    argNames: ["displayname", "primarylookupfieldid", "showfield"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Creates a field based on the specified schema, Boolean value, and field options.
                // Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
                createFieldAsXml: {
                    argNames: ["schemaXml"],
                    requestType: index_1.RequestType.PostWithArgsInBody,
                    data: {
                        parameters: {
                            __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                            Options: 8,
                            SchemaXml: "[[schemaXml]]"
                        }
                    }
                },
                // Gets the field with the specified ID.
                getById: {
                    argNames: ["id"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly,
                    returnType: "field"
                },
                // Returns the first Field object with the specified internal name or title from the collection.
                getByInternalNameOrTitle: {
                    argNames: ["internalNameOrTitle"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly,
                    returnType: "field"
                },
                // Returns the first field object in the collection based on the title of the specified field.
                getByTitle: {
                    argNames: ["title"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly,
                    returnType: "field"
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                }
            });
        }
    };
});
//# sourceMappingURL=fields.js.map