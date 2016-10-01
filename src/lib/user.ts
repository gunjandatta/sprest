/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // User
    // The SPUser object.
    /*********************************************************************************************************************************/
    export class User extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(userId:number, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/getUserById(" + userId + ")";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "user" } } );
            }
        }
    }

    export class User_Async extends User {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(userId:number, ...args) {
            // Call the base constructor
            super(userId, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.user = {
        // Deletes the object
        delete: {
            requestType: RequestType.Delete
        }
    }
}
