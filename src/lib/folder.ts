/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Folder
    // The SPFolder object.
    /*********************************************************************************************************************************/
    export class Folder extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(serverRelativeUrl:string, listName?:string, ...args) {
            var endpoint = "";
            var getRootFolder = serverRelativeUrl == null || serverRelativeUrl == "" ? true : false;

            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // See if the list name exists
            if(listName) {
                // Update the endpoint
                endpoint = "/lists/getByTitle('" + listName + "')";
            }

            // See if we are getting the root folder
            if(getRootFolder || listName) {
                // Update the endpoint
                endpoint += "/rootfolder";
            }

            // See if the list name exists
            if(listName) {
                // Split the url
                var url = serverRelativeUrl ? serverRelativeUrl.split("/") : [];

                // Parse the url
                for(var i=0; i < url.length; i++) {
                    // Update the endpoint
                    endpoint += "/folders/getByUrl('" + url[i] + "')";
                }
            }
            else {
                // Update the endpoint
                endpoint += getRootFolder ? "" : "/getFolderByServerRelativeUrl('" + serverRelativeUrl + "')";
            }

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web" + endpoint;

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "folder" } } );
            }
        }
    }

    export class Folder_Async extends Folder {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(serverRelativeUrl:string, listName?:string, ...args) {
            // Call the base constructor
            super(serverRelativeUrl, listName, Base.getAsyncInputParmeters.apply(null, args));
        }
    }

    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    Library.folder = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/

        properties: [
            "Files", "Folders", "ListItemAllFields", "ParentFolder", "Properties", "StorageMetrics"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Adds a file to this folder.
        addFile: {
            argNames: ["url", "overwrite"],
            name: "files/add",
            requestType: RequestType.PostWithArgs
        },

        // Adds a ghosted file to this list or document library.
        // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
        addTemplateFile: {
            argNames: ["urlOfFile", "templateFileType"],
            name: "files/addtemplatefile",
            requestType: RequestType.PostWithArgs
        },

        // Adds the sub-folder that is located at the specified URL to the collection.
        addSubFolder: {
            argNames: ["url"],
            name: "folders/add",
            requestType: RequestType.PostWithArgs
        },

        // Deletes the object
        delete: {
            requestType: RequestType.Delete
        },

        // Gets the file for the specified name
        getFile: {
            argNames: ["name"],
            name: "files?$filter=Name eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Gets the folder for the specified name
        getSubFolder: {
            argNames: ["name"],
            name: "folders?$filter=Name eq '[[name]]'",
            requestType: RequestType.GetReplace
        },

        // Get the file at the specified URL.
        getByUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: RequestType.GetWithArgsValueOnly
        },

        // Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: RequestType.Post
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.Folder",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}
