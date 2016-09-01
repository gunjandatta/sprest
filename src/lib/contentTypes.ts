/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Content Types
    // The SPContentTypeCollection object.
    /*********************************************************************************************************************************/
    //export class ContentTypes extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.contenttypes = {
        // Adds a content type to the collection.
        add: {
            argNames: ["data"],
            metadataType: "SP.ContentType",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds an existing content type to this collection.
        addAvailableContentType: {
            argNames: ["contentTypeId"],
            requestType: RequestType.PostWithArgsInBody
        },

        // Gets a content type by id.
        getById: {
            argNames: ["id"],
            name: "getById([[id]])",
            requestType: RequestType.GetReplace
        }
    };
}
