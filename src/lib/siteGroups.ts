/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Site Groups
    // The SPSiteGroupCollection object.
    /*********************************************************************************************************************************/
    //export class SiteGroups extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

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

        // Removes the group with the specified member ID from the collection.
        removeById: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Removes the cross-site group with the specified name from the collection.
        removeByLoginName: {
            argNames: ["loginName"],
            requestType: RequestType.PostWithArgsValueOnly
        },
    }
}
