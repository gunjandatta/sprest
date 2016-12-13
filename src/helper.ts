module $REST {
    /*********************************************************************************************************************************/
    // Helper Methods
    /*********************************************************************************************************************************/
    export class Helper {
        // Method to copy a file in this app web to the host web
        static copyFileToHostWeb(fileUrl:string, dstFolder:(string | $REST.Types.IFolder), overwriteFl?:boolean) {
            let srcFile = null;
            let promise = new $REST.Utils.Promise();
            let origVal = $REST.DefaultRequestToHostFl;

            // Ensure the current web is an app web
            if(!Utils.ContextInfo.isAppWeb) {
                // Error
                console.error("[gd-sprest] The current web is not an app web.");
                return;
            }

            //Get the host web
            $REST.DefaultRequestToHostFl = true;
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
                let srcFileUrl = window["SP"].Utilities.UrlBuilder.urlCombine(Utils.ContextInfo.webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));

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
                $REST.DefaultRequestToHostFl = false;

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
                        $REST.DefaultRequestToHostFl = true;

                        // Add the file to the folder
                        (<$REST.Types.IFolder>dstFolder).Files().add(true, fileName, content.response)
                            // Execute the request
                            .execute((file:$REST.Types.IFile) => {
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
        static copyFilesToHostWeb(fileUrls:Array<string>, folderUrls:Array<string>, overwriteFl?:boolean, idx?:number, promise?:Utils.Promise, files?:Array<$REST.Types.IFile>, folders?:Array<$REST.Types.IFolder>) {            
            files = files ? files : [];
            folders = folders ? folders : [];
            idx = idx ? idx : 0;
            promise = promise ? promise : new Utils.Promise();

            // Ensure the array is not empty
            if(fileUrls.length == idx || folderUrls.length == idx) {
                // Resolve the promise and return it
                promise.resolve(files, folders);
                return promise;
            }

            // Copy the file
            this.copyFileToHostWeb(fileUrls[idx], folderUrls[idx], overwriteFl)
                // Wait for it to complete
                .done((file, folder) => {
                    // Save a reference to the file and folder
                    files.push(file);
                    folders.push(folder);

                    // Copy the files
                    this.copyFilesToHostWeb(fileUrls, folderUrls, overwriteFl, ++idx, promise, files, folders);
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
                if(subFolder.Exists) {
                    // Add the rest of the sub folders
                    addSubFolders(subFolder);
                } else {
                    // Create the sub folder
                    folder.Folders().add(subFolderName).execute(addSubFolders);
                }
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
                        if(folder.Exists) {
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

        // Method to remove empty folders
        static removeEmptyFolders(web:$REST.Types.IWeb, folderUrls:Array<string>) {
            let promise = new Utils.Promise();

            // Ensure folder urls exist
            if(folderUrls.length == 0) {
                // Resolve the promise and return it
                promise.resolve();
            } else {
                let prevFolderUrl = null;

                // Sort the urls alphabetically, then from longest to shortest
                folderUrls.sort().sort(function(a, b) { return a.length > b.length ? -1 : 1; });

                // Parse the folders
                for(let folderUrl of folderUrls) {
                    let folder = null;

                    // See if we already removed this folder
                    if(folderUrl == prevFolderUrl) { continue; }
                    else { prevFolderUrl = folderUrl; }

                    // Parse the folder names
                    let folderNames = folderUrl.split('/');
                    for(let folderName of folderNames) {
                        // Get the sub-folder
                        folder = folder ? folder.Folders(folderName) : web.Folders(folderName);
                    }

                    // Execute the request
                    folder.execute((folder:$REST.Types.IFolder) => {
                        let promise = new Utils.Promise();

                        // See if the folder is empty
                        if(folder.ItemCount == 0) {
                            // Delete the folder, and resolve the promise
                            folder.delete().execute(() => { promise.resolve(); });
                        } else {
                            // Resolve the proise
                            promise.resolve();
                        }

                        // Return the promise
                        return promise;
                    }, true);
                }

                // Wait for the requests to complete, and resolve the promise
                web.done(() => { promise.resolve(); });
            }

            // Return the promise
            return promise;
        }

        // Method to remove a file
        static removeFile(web:$REST.Types.IWeb, fileUrl:string) {
            let promise = new Utils.Promise();
            let folder = null;
            let folders = fileUrl.split('/');

            // Parse the folders
            for(let i=0; i<folders.length-1; i++) {
                // Get the folder
                folder = folder ? folder.Folders(folders[i]) : web.Folders(folders[i]);
            }

            // Get the file
            folder.Files(folders[folders.length-1]).execute((file:$REST.Types.IFile) => {
                // See if it exists
                if(file.Exists) {
                    // Delete it and resolve the promise
                    file.delete().execute(() => { promise.resolve(); });
                } else {
                    // Resolve the promises
                    promise.resolve();
                }
            }, true);

            // Return the promise
            return promise;
        }

        // Method to remove files
        static removeFiles(web:$REST.Types.IWeb, fileUrls:Array<string>, idx?:number, promise?:Utils.Promise) {
            idx = idx ? idx : 0;
            promise = promise ? promise : new Utils.Promise();
            
            // See if we have removed all files
            if(fileUrls.length == idx) {
                // Resolve the promise and return it
                promise.resolve();
            } else {
                // Remove the file
                this.removeFile(web, fileUrls[idx]).done(() => {
                    // Remove the files
                    this.removeFiles(web, fileUrls, ++idx, promise);
                })
            }

            // Return the promise
            return promise;
        }
    }
}