import {RequestType} from "../../types/index";

/*********************************************************************************************************************************/
// Methods
/*********************************************************************************************************************************/
export const fields = {
    // Adds a field to the field collection.
    add: {
        metadataType: "SP.Field",
        name: "",
        requestType: RequestType.PostWithArgsInBody
    },

    // Adds a field to the field collection.
    addField: {
        argNames: ["parameters"],
        metadataType: "SP.FieldCreationInformation",
        name: "addField",
        requestType: RequestType.PostWithArgsInBody
    },

    // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
    addDependentLookupField: {
        argNames: ["displayname", "primarylookupfieldid", "showfield"],
        requestType: RequestType.PostWithArgs
    },

    // Creates a field based on the specified schema, Boolean value, and field options.
    // Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
    createFieldAsXml: {
        argNames: ["schemaXml"],
        requestType: RequestType.PostWithArgsInBody,
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
        requestType: RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },

    // Returns the first Field object with the specified internal name or title from the collection.
    getByInternalNameOrTitle: {
        argNames: ["internalNameOrTitle"],
        requestType: RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },

    // Returns the first field object in the collection based on the title of the specified field.
    getByTitle: {
        argNames: ["title"],
        requestType: RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },

    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: RequestType.OData
    }
};