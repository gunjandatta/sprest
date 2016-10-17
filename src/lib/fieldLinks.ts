/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Field Link Collection
    // The SPFieldLinkCollection object.
    /*********************************************************************************************************************************/
    //export class FieldLinks extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.fieldlinks = {
        // Adds a field link to the collection.
        add: {
            argNames: ["data"],
            metadataType: "SP.FieldLink",
            requestType: RequestType.PostWithArgsInBody
        },

        // Gets a field link by it's id.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Gets a field by it's internal name.
        getFieldLinkByName: {
            argNames: ["name"],
            name: "fields?$filter=Name eq '[[name]]'",
            requestType: RequestType.GetReplace
        },
    };
}
