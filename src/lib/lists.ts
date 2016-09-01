/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Lists
    // The SPListCollection object.
    /*********************************************************************************************************************************/
    //export class Lists extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.lists = {
        add: {
            metadataType: "SP.List",
            requestType: RequestType.PostWithArgs
        },

        // Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
        ensureSiteAssetsLibrary: {
            requestType: RequestType.Post
        },

        // Gets a list that is the default location for wiki pages.
        ensureSitePagesLibrary: {
            requestType: RequestType.Post
        },

        // Returns the list with the specified list identifier.
        getById: {
            argNames: ["id"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Returns the list with the specified title from the collection.
        getByTitle: {
            argNames: ["title"],
            requestType: RequestType.GetWithArgsValueOnly
        },
    };
}
