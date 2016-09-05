/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Field
    // The SPField object.
    /*********************************************************************************************************************************/
    export class Field extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(internalNameOrTitle:string, listName?:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Query for the field
            return (new Fields(listName, this.targetInfo, false))["getByInternalNameOrTitle"](internalNameOrTitle);
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.field = {
        // Deletes the object
        delete: {
            requestType: RequestType.Delete
        },

        // Sets the value of the ShowInDisplayForm property for this field.
        setShowInDisplayForm: {
            argNames: ["showInForm"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Sets the value of the ShowInEditForm property for this field.
        setShowInEditForm: {
            argNames: ["showInForm"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Sets the value of the ShowInNewForm property for this field.
        setShowInNewForm: {
            argNames: ["showInForm"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.Field",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}
