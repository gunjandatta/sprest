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
        constructor(...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

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

    export class RoleDefinitions_Async extends RoleDefinitions {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(...args) {
            // Call the base constructor
            super(Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.roledefinitions = {
        // Gets the role definition with the specified ID from the collection.
        getById: {
            argNames: ["roleDefId"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the role definition with the specified name.
        getByName: {
            argNames: ["name"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets the role definition with the specified role type.
        getByType: {
            argNames: ["roleType"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: RequestType.OData
        }
    };
}
