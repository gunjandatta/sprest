/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Content Types
    // The SPContentType object.
    /*********************************************************************************************************************************/
    //export class ContentType extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.contenttype = {
        // Adds a field link to the content type.
        addFieldLink: {
            argNames: ["data"],
            name: "fieldlinks",
            metadataType: "SP.FieldLink",
            requestType: RequestType.GetWithArgsInBody
        },

        // Deletes the content type.
        delete: {
            requestType: RequestType.Delete
        },

        // Gets a field by it's internal name.
        getFieldByInternalName: {
            argNames: ["name"],
            name: "fields?$filter=InternalName eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a field by it's static name.
        getFieldByStaticName: {
            argNames: ["name"],
            name: "fields?$filter=StaticName eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a field by it's title.
        getFieldByTitle: {
            argNames: ["title"],
            name: "fields?$filter=Title eq '[[title]]'",
            requestType: RequestType.GetReplace
        },

        // Gets a field by it's internal name.
        getFieldLinkByName: {
            argNames: ["name"],
            name: "fields?$filter=Name eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.ContentType",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}
