/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // View
    // The SPView object.
    /*********************************************************************************************************************************/
    export class View extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(viewName:string, listName:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')/views/getByTitle('" + viewName + "')";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "view" } } );
            }
        }
    }

    export class View_Async extends View {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(viewName:string, listName:string, ...args) {
            // Call the base constructor
            super(viewName, listName, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.view = {
        // Deletes the object
        delete: {
            requestType: RequestType.Delete
        },

        // Returns the list view as HTML.
        renderAsHtml: {
            requestType: RequestType.Get
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.View",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}
