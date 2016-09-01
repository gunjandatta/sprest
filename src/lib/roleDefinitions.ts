/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Role Definitions
    // The SPRoleDefinitionCollection object.
    /*********************************************************************************************************************************/
    export class RoleDefinitions extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Call the base constructor
            super(settings, executeRequestFl);

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/roledefinitions";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "roledefinitions" } } );
            }
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.roledefinitions = {
        // Gets the role definition with the specified ID from the collection.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the role definition with the specified name.
        getByName: {
            argNames: ["name"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the role definition with the specified role type.
        getByType: {
            argNames: ["type"],
            requestType: RequestType.GetWithArgsValueOnly
        }
    };
}
