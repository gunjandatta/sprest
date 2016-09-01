/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // View Fields
    // The SPViewFieldCollection object.
    /*********************************************************************************************************************************/
    //export class ViewFieldCollection extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.viewfieldcollection = {
        // Adds the field with the specified field internal name or display name to the collection.
        addViewField: {
            argNames: ["fieldName"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Moves the field with the specified field internal name to the specified position in the collection.
        moveViewFieldTo: {
            argNames: ["field", "index"],
            requestType: RequestType.PostWithArgsInBody
        },

        // Removes all the fields from the collection.
        removeAllViewFields: {
            requestType: RequestType.Post
        },

        // Removes the field with the specified field internal name from the collection.
        removeViewField: {
            argNames: ["fieldName"],
            requestType: RequestType.GetWithArgsValueOnly
        }
    };
}
