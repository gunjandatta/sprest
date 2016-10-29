module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.fields = {
        // Adds a field to the field collection.
        add: {
            metadataType: "SP.Field",
            name: "",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a field to the field collection.
        addField: {
            argNames: ["parameters"],
            metadataType: "SP.FieldCreationInformation",
            name: "addField",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
        addDependentLookupField: {
            argNames: ["displayname", "primarylookupfieldid", "showfield"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Creates a field based on the specified schema, Boolean value, and field options.
        // Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
        createFieldAsXml: {
            argNames: ["schemaXml"],
            requestType: Types.RequestType.PostWithArgsInBody,
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
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Returns the first Field object with the specified internal name or title from the collection.
        getByInternalNameOrTitle: {
            argNames: ["internalNameOrTitle"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Returns the first field object in the collection based on the title of the specified field.
        getByTitle: {
            argNames: ["title"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
