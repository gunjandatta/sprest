/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Lists
    // The SPListCollection object.
    /*********************************************************************************************************************************/
    export class Lists_Async extends Lists {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;

            // Call the base constructor
            super(settings, executeRequestFl);
        }
    }

    export class Lists extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Call the base constructor
            super(settings, executeRequestFl);

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/lists";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "lists" } } );
            }
        }
    }

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
