/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // File
    // The SPFile object.
    /*********************************************************************************************************************************/
    export class File extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(serverRelativeUrl:string, listName?:string, ...args) {
            var endpoint = "";

            // Call the base constructor
            super(Base.getInputParmeters.apply(null, args));

            // See if the list name exists
            if(listName) {
                // Update the endpoint
                endpoint = "/lists/getByTitle('" + listName + "')/rootfolder";

                // Split the url
                var url = serverRelativeUrl ? serverRelativeUrl.split("/") : [];

                // Parse the folders
                for(var i=0; i < url.length - 1; i++) {
                    // Update the endpoint
                    endpoint += "/folders/getByUrl('" + url[i] + "')";
                }

                // Add the file
                endpoint += "/files/getByUrl('" + url[url.length-1] + "')";
            }
            else {
                // Update the endpoint
                endpoint += "/getFileByServerRelativeUrl('" + serverRelativeUrl + "')";
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
                this.addMethods(this, { __metadata: { type: "file" } } );
            }
        }
    }

    export class File_Async extends File {
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
    Library.file = {

        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/

        properties: [
            "Author", "CheckedOutByUser", "EffectiveInformationRightsManagementSettings", "InformationRightsManagementSettings",
            "ListItemAllFields", "LockedByUser", "ModifiedBy", "Properties", "VersionEvents", "Versions"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Approves the file submitted for content approval with the specified comment.
        approve: {
            argNames: ["comment"],
            requestType: RequestType.PostWithArgs
        },

        // Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
        // Use the uploadId value that was passed to the StartUpload method that started the upload session.
        // This method is currently available only on Office 365.
        cancelupload: {
            argNames: ["uploadId"],
            name: "cancelupload(guid'[[uploadId]]')",
            requestType: RequestType.PostReplace
        },

        // Checks the file in to a document library based on the check-in type.
        // Check-In Types: MinorCheckIn = 0; MajorCheckIn = 1; OverwriteCheckIn = 2
        checkin: {
            argNames: ["comment", "checkInType"],
            requestType: RequestType.PostWithArgs
        },

        // Checks out the file from a document library based on the check-out type.
        checkout: {
            requestType: RequestType.Post
        },

        // Returns the file content.
        content: {
            name: "$value",
            requestType: RequestType.GetBuffer
        },

        // Continues the chunk upload session with an additional fragment. The current file content is not changed.
        // Use the uploadId value that was passed to the StartUpload method that started the upload session.
        // This method is currently available only on Office 365.
        continueUpload: {
            argNames: ["uploadId", "fileOffset"],
            name: "cancelupload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
            requestType: RequestType.PostReplace
        },

        // Copies the file to the destination URL.
        copyTo: {
            argNames: ["strNewUrl", "bOverWrite"],
            requestType: RequestType.PostWithArgs
        },

        // Deletes the object
        delete: {
            requestType: RequestType.Delete
        },

        // Denies approval for a file that was submitted for content approval.
        // Only documents in lists that are enabled for content approval can be denied.
        deny: {
            argNames: ["comment"],
            requestType: RequestType.PostWithArgs
        },

        // Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
        // Use the uploadId value that was passed to the StartUpload method that started the upload session.
        // This method is currently available only on Office 365.
        finishUpload: {
            argNames: ["uploadId", "fileOffset"],
            name: "cancelupload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])",
            requestType: RequestType.PostReplace
        },

        // Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
        // An exception is thrown if the file is not an ASPX page.
        // Type of scopes: 
        getlimitedwebpartmanager: {
            argNames: ["scope"],
            name: "getLimitedWebPartManager(scope=[[scope]])",
            requestType: RequestType.GetReplace
        },

        // Moves the file to the specified destination URL.
        // Types of move operations: Overwrite = 1; AllowBrokenThickets (move even if supporting files are separated from the file) = 8.
        moveTo: {
            argNames: ["newUrl", "flags"],
            name: "moveTo(newUrl='[[newUrl]]', flags=[[flags]])",
            requestType: RequestType.PostReplace
        },

        // Opens the file as a stream.
        openBinaryStream: {
            requestType: RequestType.GetBuffer
        },

        // Submits the file for content approval with the specified comment.
        publish: {
            argNames: ["comment"],
            requestType: RequestType.PostWithArgs
        },

        // Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
        recycle: {
            requestType: RequestType.Get
        },

        // Saves the file as a stream.
        saveBinaryStream: {
            requestType: RequestType.PostWithArgsInBody
        },

        // Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
        // The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
        // The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
        startUpload: {
            argNames: ["uploadId"],
            name: "startupload(uploadId=guid'[[uploadId]]')",
            requestType: RequestType.PostReplace
        },

        // Reverts an existing checkout for the file.
        undoCheckOut: {
            requestType: RequestType.Post
        },

        // Removes the file from content approval or unpublish a major version.
        unpublish: {
            argNames: ["comment"],
            requestType: RequestType.PostWithArgs
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.File",
            name: "",
            requestMethod: "MERGE",
            requestType: RequestType.PostWithArgsInBody
        }
    };
}
