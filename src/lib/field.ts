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

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/" : "") + "fields/getByInternalNameOrTitle('" + internalNameOrTitle + "')";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "field" } } );
            }
        }
    }

    export class Field_Async extends Field {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(internalNameOrTitle:string, listName?:string, ...args) {
            // Call the base constructor
            super(internalNameOrTitle, listName, Base.getAsyncInputParmeters.apply(null, args));
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
            inheritMetadataType: true,
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}
