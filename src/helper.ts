module $REST {
    /*********************************************************************************************************************************/
    // Helper Methods
    /*********************************************************************************************************************************/
    export class Helper {
        // Method to check-in and publish a file
        static checkInAndPublish(file:$REST.Types.IFile, checkInComment?:string, publishComment?:string): $REST.Utils.Promise {
            let promise = new $REST.Utils.Promise();

            // Ensure the file exists
            if(file && file.Exists) {
                // Check-in the file
                file.checkin(checkInComment ? checkInComment : "", 1).execute();

                // Publish the file
                file.publish(publishComment ? publishComment : "").execute(true)

                // Wait for the requests to complete, and resolve the promise
                file.done(() => { promise.resolve(); });
            } else {
                // Resolve the promise
                promise.resolve();
            }

            // Return the promise
            return promise;
        }

        // Method to check out a file
        static checkoutFiles(web:$REST.Types.IWeb, fileUrls:Array<string>): $REST.Utils.Promise {
            let files = [];
            let promise = new Utils.Promise;

            // Parse the files
            for(let fileUrl of fileUrls) {
                // Get the file
                web.getFileByServerRelativeUrl(fileUrl)
                    // Execute the request
                    .execute((file:$REST.Types.IFile) => {
                        let promise = new $REST.Utils.Promise();

                        // Save a reference to the file
                        files.push(file);

                        // See if the file exists
                        if(file.Exists) {
                            // Check the file out
                            file.checkout().execute(() => {
                                // Resolve the promise
                                promise.resolve(files);
                            });
                        } else {
                            // Resolve the promise
                            promise.resolve(files);
                        }

                        // Return the promise
                        return promise;
                    }, true);
            }

            // Wait for the requests to complete, and resolve the promise
            web.done(() => { promise.resolve(files); });

            // Return the promise
            return promise;
        }

        // Method to copy a file from the app web to the host web.
        static copyFile(appWebSrcFileUrl:string, dstFolder:Types.IFolder, overwriteFl?:boolean): $REST.Utils.Promise {
            let promise = new $REST.Utils.Promise();
            let origVal = $REST.DefaultRequestToHostWebFl;

            // Ensure the current web is an app web
            if(!window["_spPageContextInfo"].isAppWeb) { return; }

            // Target the host web
            $REST.DefaultRequestToHostWebFl = true;

            // Get the current Web
            let web = <$REST.Types.IWeb><any>(new $REST.Web());

            // Ensure the destination folder exists
            dstFolder.execute(() => {
                // Get the file name
                let fileName:any = appWebSrcFileUrl.split("/");
                fileName = fileName[fileName.length-1];

                // Set the file urls
                let dstUrl = window["SP"].Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
                let srcUrl = window["SP"].Utilities.UrlBuilder.urlCombine(window["_spPageContextInfo"].webServerRelativeUrl, appWebSrcFileUrl.substr(appWebSrcFileUrl[0] == "/" ? 1 : 0));

                // Check out the destination file
                this.checkoutFiles(web, [dstUrl]).done(() => {
                    // Target the app web
                    $REST.DefaultRequestToHostWebFl = false;

                    // Get the source file
                    web.getFileByServerRelativeUrl(srcUrl)
                        // Get the content
                        .content()
                        // Execute the request
                        .execute((content) => {
                            // Target the host web
                            $REST.DefaultRequestToHostWebFl = true;

                            // Copy the file
                            dstFolder.Files().add(typeof(overwriteFl) === "boolean" ? overwriteFl : false, fileName, content.response)
                                // Execute the request
                                .execute((file:$REST.Types.IFile) => {
                                    // Checkin and publish the file
                                    this.checkInAndPublish(file).done(() => {
                                        // Set the original value
                                        $REST.DefaultRequestToHostWebFl = origVal;

                                        // Resolve the promise
                                        promise.resolve(file);
                                    });
                                });
                        });
                });
            });

            // Return the promise
            return promise;
        }

        // Method to copy the files from the app web to the host web.
        static copyFiles(srcFileUrls:Array<string>, dstFolderUrls:Array<string>, overwriteFl?:boolean): $REST.Utils.Promise {
            let promise = new Utils.Promise();

            // Validate the input
            if(srcFileUrls == null || srcFileUrls.length == 0 || dstFolderUrls == null || dstFolderUrls.length == 0) {
                // Resolve the promise
                promise.resolve();

                // Return the promise
                return promise;
            }

            // Get the host web
            $REST.DefaultRequestToHostWebFl = true;
            let web = <Types.IWeb><any>new $REST.Web();

            // Create the destination folders
            this.createFolders(web, dstFolderUrls).done((folders) => {
                let dstFileUrls = [];
                let srcFileNames = [];

                // Parse the source files
                for(let i=0; i<srcFileUrls.length; i++) {
                    let dstFolder = folders[dstFolderUrls[i]];

                    // Get the file name
                    let fileName:any = srcFileUrls[i].split("/");
                    fileName = fileName[fileName.length-1];
                    srcFileNames.push(fileName);

                    // Save the destination and source file urls
                    dstFileUrls.push(window["SP"].Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName));
                    srcFileUrls[i] = window["SP"].Utilities.UrlBuilder.urlCombine(window["_spPageContextInfo"].webServerRelativeUrl, srcFileUrls[i].substr(srcFileUrls[i][0] == "/" ? 1 : 0));
                }

                // Check out the destination files
                this.checkoutFiles(web, dstFileUrls).done(() => {
                    // Target the app web
                    $REST.DefaultRequestToHostWebFl = false;

                    // Get the source file content
                    this.getFileContent(web, srcFileUrls).done((content) => {
                        let dstFiles = [];

                        // Target the host web
                        $REST.DefaultRequestToHostWebFl = true;

                        // Parse the source file names
                        for(let i=0; i<srcFileNames.length; i++) {
                            let dstFolder: $REST.Types.IFolder = folders[dstFolderUrls[i]];

                            // Copy the file
                            dstFolder.Files().add(overwriteFl == null ? false : overwriteFl, srcFileNames[i], content[i])
                                // Execute the request and wait for it to complete
                                .execute((file) => {
                                    let promise = new $REST.Utils.Promise();

                                    // Ensure the file exists
                                    if(file && file.Exists) {
                                        // Check-in the file
                                        file.checkin("", 1).execute();

                                        // Publish the file, after the check-in completes
                                        file.publish("").execute(() => {
                                            // Resolve the promise
                                            promise.resolve();
                                        }, true)
                                    } else {
                                        // Resolve the promise
                                        promise.resolve();
                                    }

                                    // Return the promise
                                    return promise;
                                }, true);

                            // Wait for the files to copy and resolve the promise
                            dstFolder.done(() => { promise.resolve(dstFiles); });
                        }
                    });
                });
            });

            // Return the promise
            return promise;
        }

        // Method to create folders
        static createFolders(web:Types.IWeb, folderUrls:Array<string>): $REST.Utils.Promise {
            let folders = [];
            let promise = new $REST.Utils.Promise();

            // Parse the destination folder urls
            for(let i=0; i<folderUrls.length; i++) {
                // Ensure the url is lower case
                folderUrls[i] = folderUrls[i].toLowerCase();
            }

            // Ensure the web exists
            web.execute(() => {
                // Parse the destination folder urls
                for (let dstFolderUrl of folderUrls) {
                    // See if we already requested this folder
                    if (folders[dstFolderUrl]) { continue; }

                    // Get the folder
                    let folderUrl = window["SP"].Utilities.UrlBuilder.urlCombine(web.ServerRelativeUrl, dstFolderUrl.substr(dstFolderUrl[0] == "/" ? 1 : 0));
                    folders[dstFolderUrl] = web.getFolderByServerRelativeUrl(folderUrl).execute((folder: $REST.Types.IFolder) => {
                        let promise = new $REST.Utils.Promise();

                        // See if the folder exists
                        if (folder.existsFl) {
                            // Save a reference to the folder
                            folders[dstFolderUrl] = folder;
                            folders.push(folder);

                            // Resolve the promise
                            promise.resolve();
                        } else {
                            // Create the folder
                            this.createSubFolders((<Types.IWeb><any>new $REST.Web()).RootFolder(), dstFolderUrl).done((folder) => {
                                // Save a reference to the folder
                                folders[dstFolderUrl] = folder;
                                folders.push(folder);

                                // Resolve the promise
                                promise.resolve();
                            });
                        }

                        // Return the promise
                        return promise;
                    }, true);
                }

                // Wait for the requests to complete, and resolve the promise
                web.done(() => { promise.resolve(folders); });
            });

            // Return the promise
            return promise;
        }

        // Method to create sub-folders
        static createSubFolders(folder:Types.IFolder, subFolderUrl:string, promise?:Utils.Promise): $REST.Utils.Promise {
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
                if(subFolder.existsFl) {
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

        // Method to get the file content
        static getFileContent(web:$REST.Types.IWeb, fileUrls:Array<string>): $REST.Utils.Promise {
            let content = [];
            let promise = new $REST.Utils.Promise();

            // Parse the files
            for(let fileUrl of fileUrls) {
                // Get the file
                web.getFileByServerRelativeUrl(fileUrl)
                    // Get the content
                    .content()
                    // Execute the request
                    .execute((fileContent) => {
                        // Save the content
                        content.push(fileContent.response);
                    }, true);
            }

            // Wait for the requests to complete, and resolve the promise
            web.done(() => { promise.resolve(content); });

            // Return the promise
            return promise;
        }
    }
}