/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Fields
    // The SPFieldCollection object.
    /*********************************************************************************************************************************/
    export class Fields extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName?:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/" : "") + "fields";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "fields" } } );
            }
        }
    }

    export class Fields_Async extends Fields {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName?:string, ...args) {
            // Call the base constructor
            super(listName, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.fields = {
        // Adds a field to the field collection.
        add: {
            argNames: ["parameters"],
            metadataType: "SP.FieldCreationInformation",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
        addDependentLookup: {
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
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Returns the first Field object with the specified internal name or title from the collection.
        getByInternalNameOrTitle: {
            argNames: ["internalNameOrTitle"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Returns the first field object in the collection based on the title of the specified field.
        getByTitle: {
            argNames: ["title"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: RequestType.OData
        }
    };
}
