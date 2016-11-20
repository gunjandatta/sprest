module $REST {
    /*********************************************************************************************************************************/
    // Helper Methods
    /*********************************************************************************************************************************/
    export class Helper {
        // Method to copy a file in this app web to the host web
        static copyFileToHostWeb(fileUrl:string, dstFolder:(string | $REST.Types.IFolder), overwriteFl?:boolean) {
            let srcFile = null;
            let promise = new $REST.Utils.Promise();
            let origVal = $REST.DefaultRequestToHostWebFl;

            // Ensure the current web is an app web
            if(!window["_spPageContextInfo"].isAppWeb) {
                // Error
                console.error("[gd-sprest] The current web is not an app web.");
                return;
            }

            //Get the host web
            $REST.DefaultRequestToHostWebFl = true;
            let web = (<$REST.Types.IWeb><any>new $REST.Web());

            // See if the folder url was given
            if(typeof(dstFolder) === "string") {
                // Get the folder
                this.getFolder(web, dstFolder, true)
                    .done((folder) => {
                        // Copy the file to the host web
                        this.copyFileToHostWeb(fileUrl, folder, overwriteFl)
                            // Wait for the request to complete, and resolve the promise
                            .done((file, folder) => { promise.resolve(file, folder); });
                    });
            } else {
                // Get the file name
                let fileName:any = fileUrl.split("/");
                fileName = fileName[fileName.length-1];

                // Set the file urls
                let dstFileUrl = window["SP"].Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
                let srcFileUrl = window["SP"].Utilities.UrlBuilder.urlCombine(window["_spPageContextInfo"].webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));

                // Get the destination file
                web.getFileByServerRelativeUrl(dstFileUrl)
                    // Execute the request
                    .execute((file:$REST.Types.IFile) => {
                        let promise = new $REST.Utils.Promise();

                        // See if the file exists
                        if(file.Exists) {
                            // Check out the file, and resolve the promise
                            file.checkout().execute(() => { promise.resolve(); });
                        } else {
                            // Resolve the promise
                            promise.resolve();
                        }

                        // Return the promiser
                        return promise;
                    });

                // Target the current web
                $REST.DefaultRequestToHostWebFl = false;

                // Get the file
                web.getFileByServerRelativeUrl(srcFileUrl)
                    // Get the content
                    .content()
                    // Execute the request
                    .execute((content:$REST.Types.IBase) => {
                        let promise = new $REST.Utils.Promise();

                        // Get the file name
                        let fileName:any = srcFileUrl.split("/");
                        fileName = fileName[fileName.length-1];

                        // Target the host web
                        $REST.DefaultRequestToHostWebFl = true;

                        // Add the file to the folder
                        (<$REST.Types.IFolder>dstFolder).Files().add(true, fileName, content.response)
                            // Execute the request
                            .execute((file:$REST.Types.IFile) => {
                                let promise = new $REST.Utils.Promise();

                                // Save a reference to this file
                                srcFile = file;

                                // Check in the file
                                file.checkin("", 1).execute();

                                // Publish the file
                                file.publish("").execute(true);

                                // Wait for the requests to complete
                                file.done(() => {
                                    // Resolve the promise
                                    promise.resolve();
                                });

                                // Return the promise
                                return promise;
                            });

                        // Return the promise
                        return promise;
                    }, true);

                // Wait for the requests to complete, and resolve the promise
                web.done(() => { promise.resolve(srcFile, dstFolder); });
            }

            // Return the promise
            return promise;
        }

        // Method to copy a file in this app web to the host web
        static copyFilesToHostWeb(fileUrls:Array<string>, folderUrls:Array<string>, overwriteFl?:boolean, promise?:Utils.Promise, files?:Array<$REST.Types.IFile>, folders?:Array<$REST.Types.IFolder>) {
            // Ensure the files, folders and promise exist
            files = files ? files : [];
            folders = folders ? folders : [];
            promise = promise ? promise : new Utils.Promise();

            // Ensure the array is not empty
            if(fileUrls.length == 0 || folderUrls.length == 0) {
                // Resolve the promise
                promise.resolve(files, folders);
            }

            // Copy the file
            this.copyFileToHostWeb(fileUrls.pop(), folderUrls.pop(), overwriteFl)
                // Wait for it to complete
                .done((file, folder) => {
                    // Save a reference to the file and folder
                    files.push(file);
                    folders.push(folder);

                    // Copy the files
                    this.copyFilesToHostWeb(fileUrls, folderUrls, overwriteFl, promise, files, folders);
                })

            // Return the promise
            return promise;
        }

        // Method to create sub-folders
        static createSubFolders(folder:Types.IFolder, subFolderUrl:string, promise?:Utils.Promise): $REST.Utils.Promise {
            // Ensure the promise exists
            promise = promise ? promise : new Utils.Promise();

            // Get the sub-folder name
            let subFolderName = subFolderUrl.split("/")[0];

            // Update the sub folder url
            subFolderUrl = subFolderUrl.substr(subFolderName.length + 1);

            // Ensure the folder exists
            if(!folder.existsFl) {
                // Get the folder
                folder.execute();
            }

            // Wait for the request to complete
            folder.done(() => {
                // Get the sub-folder
                let subFolder = folder.Folders(subFolderName).execute((subFolder) => {
                    // Method to add additional sub folders
                    let addSubFolders = (subFolder) => {
                        // See if we are done
                        if(subFolderUrl.length == 0) {
                            // Resolve the promise
                            promise.resolve(subFolder);
                        } else {
                            // Create the sub folder
                            this.createSubFolders(subFolder, subFolderUrl, promise);
                        }
                    };

                    // Ensure the sub-folder exists
                    if(subFolder.existsFl) {
                        // Add the rest of the sub folders
                        addSubFolders(subFolder);
                    } else {
                        // Create the sub folder
                        folder.Folders().add(subFolderName).execute(addSubFolders);
                    }
                });
            });

            // Return a promise
            return promise;
        }

        // Method to get a folder
        static getFolder(web:$REST.Types.IWeb, folderUrl:string, createFl?:boolean) {
            let dstFolder = null;
            let promise = new $REST.Utils.Promise();

            // Ensure the web exists
            if(!web.existsFl) {
                // Get the web
                web.execute();
            }

            // Wait for the requests to complete
            web.done(() => {
                // Set the destination folder url
                let dstFolderUrl = window["SP"].Utilities.UrlBuilder.urlCombine(web.ServerRelativeUrl, folderUrl.substr(folderUrl[0] == "/" ? 1 : 0));

                // Get the folder
                web.getFolderByServerRelativeUrl(folderUrl)
                    // Execute the request
                    .execute((folder:$REST.Types.IFolder) => {
                        let promise = new $REST.Utils.Promise();

                        // Ensure the folder exists
                        if(folder.existsFl) {
                            // Save a reference to the folder
                            dstFolder = folder;
                            
                            // Resolve the promise
                            promise.resolve();
                        } else {
                            // Create the folder
                            this.createSubFolders(web.RootFolder(), folderUrl).done((folder) => {
                                // Save a reference to the folder
                                dstFolder = folder;

                                // Resolve the promise
                                promise.resolve();
                            });
                        }

                        // Return the promise
                        return promise;
                    }, true);

                // Wait for the request to complete
                web.done(() => {
                    // Resolve the promise
                    promise.resolve(dstFolder);
                });
            });

            // Return the promise
            return promise;
        }
    }
}