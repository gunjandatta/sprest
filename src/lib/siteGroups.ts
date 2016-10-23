/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Site Groups
    // The SPSiteGroupCollection object.
    /*********************************************************************************************************************************/
    export class SiteGroups extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(...args) {
            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/sitegroups";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "sitegroups" } } );
            }
        }
    }

    export class SiteGroups_Async extends SiteGroups {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName?:string, ...args) {
            // Call the base constructor
            super(listName, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.siteGroups = {
        // Returns a group from the collection based on the member ID of the group.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns a cross-site group from the collection based on the name of the group.
        getByName: {
            argNames: ["name"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: RequestType.OData
        },

        // Removes the group with the specified member ID from the collection.
        removeById: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Removes the cross-site group with the specified name from the collection.
        removeByLoginName: {
            argNames: ["name"],
            requestType: RequestType.PostWithArgsValueOnly
        },
    }
}
