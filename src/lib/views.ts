/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Views
    // The SPViewCollection object.
    /*********************************************************************************************************************************/
    export class Views extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/views";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "views" } } );
            }
        }
    }

    export class Views_Async extends Views {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName:string, ...args) {
            // Call the base constructor
            super(listName, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.views = {
        // Adds a view to the view collection.
        add: {
            metadataType: "SP.View",
            requestType: RequestType.PostWithArgs
        },

        // Gets the list view with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the list view with the specified title.
        getByTitle: {
            argNames: ["title"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: RequestType.OData
        }
    };
}
