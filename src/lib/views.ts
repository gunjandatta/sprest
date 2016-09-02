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
        constructor(listName:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Call the base constructor
            super(settings, executeRequestFl);

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
        constructor(listName:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;

            // Call the base constructor
            super(listName, settings, executeRequestFl);
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.views = {
        // Gets the list view with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the list view with the specified title.
        getByTitle: {
            argNames: ["title"],
            requestType: RequestType.GetWithArgsValueOnly
        }
    };
}
