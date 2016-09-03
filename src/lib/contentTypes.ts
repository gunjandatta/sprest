/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Content Types
    // The SPContentTypeCollection object.
    /*********************************************************************************************************************************/
    export class ContentTypes extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName?:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Call the base constructor
            super(settings, executeRequestFl);

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/" : "") + "contenttypes";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "contenttypes" } } );
            }
        }
    }

    export class ContentTypes_Async extends ContentTypes {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Default the asynchronous flag
            settings = settings ? settings : {};
            settings.asyncFl = true;

            // Call the base constructor
            super(listName, settings, executeRequestFl);
        }
    }

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
            requestType: RequestType.GetWithArgsValueOnly
        }
    };
}
