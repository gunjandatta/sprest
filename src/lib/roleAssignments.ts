/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Role Assignments
    // The SPRoleAssignmentCollection object.
    /*********************************************************************************************************************************/
    export class RoleAssignments extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName?:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Call the base constructor
            super(settings, executeRequestFl);

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/" : "") + "roleassignments";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "roleassignments" } } );
            }
        }
    }

    export class RoleAssignments_Async extends RoleAssignments {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName?:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
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
    Library.roleAssignments = {
        // Adds a new role assignment with the specified principal and role definitions to the collection.
        addRoleAssignment: {
            argNames: ["principalid", "roledefid"],
            requestType: RequestType.PostWithArgs
        },

        // Gets the role assignment associated with the specified principal ID from the collection.
        getByPrincipalId: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the role definition with the specified role type.
        removeRoleAssignment: {
            argNames: ["principalid", "roledefid"],
            requestType: RequestType.PostWithArgs
        }
    };
}
