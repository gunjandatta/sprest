/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // User Custom Actions
    // The SPUserCustomActionCollection object.
    /*********************************************************************************************************************************/
    //export class UserCustomActions extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

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
