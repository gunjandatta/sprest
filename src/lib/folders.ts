/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Folders
    // The SPFolderCollection object.
    /*********************************************************************************************************************************/
    export class Folders extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName?:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
            // Call the base constructor
            super(settings, executeRequestFl);

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web/" + (listName ? "lists/getByTitle('" + listName + "')/rootfolder/" : "") + "folders";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "folders" } } );
            }
        }
    }

    export class Folders_Async extends Folders {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(listName?:string, settings?:ITargetInfoType, executeRequestFl?:boolean) {
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
    Library.folders = {
        // Adds the folder that is located at the specified URL to the collection.
        add: {
            argNames: ["url"],
            requestType: RequestType.PostWithArgs
        },

        // Get the file at the specified URL.
        getbyurl: {
            argNames: ["serverRelativeUrl"],
            requestType: RequestType.GetWithArgsValueOnly
        }
    };
}
