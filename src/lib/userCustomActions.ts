/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // User Custom Actions
    // The SPUserCustomActionCollection object.
    /*********************************************************************************************************************************/
    export class UserCustomActions extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(webFl?:boolean, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = typeof(webFl) === "boolean" ? webFl : false;
            this.targetInfo.endpoint = (this.defaultToWebFl ? "web" : "site") + "/usercustomactions";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "usercustomactions" } } );
            }
        }
    }

    export class UserCustomActions_Async extends UserCustomActions {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(webFl?:boolean, ...args) {
            // Call the base constructor
            super(webFl, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.usercustomactions = {
        // Deletes all custom actions in the collection.
        clear: {
            requestType: RequestType.Post
        },

        // Returns the custom action with the specified identifier.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns the user custom action based on the name of the specified user custom action.
        getByName: {
            argNames: ["name"],
            name: "?filter=Name eq '[[name]]'",
            requestType: RequestType.PostReplace
        },

        // Returns the user custom action based on the title of the specified user custom action.
        getByTitle: {
            argNames: ["title"],
            name: "?filter=Title eq '[[title]]'",
            requestType: RequestType.PostReplace
        }
    };
}
