export * from "./app.def";
import { ContextInfo, Web } from "../lib";
import { Types } from "../mapper";
import { IApp } from ".";

/**
 * App Helper Methods
 * Helper methods designed to be run from the app web.
 */
class _App {
    // Method to copy a file in this app web to the host web
    static copyFileToHostWeb = (fileUrl, dstFolder, overwriteFl, rootWebFl): PromiseLike<{ file: Types.IFileResult, folder: Types.IFolderResult }> => {
        let srcFile = null;
        let origVal = ContextInfo.window.$REST.DefaultRequestToHostFl;

        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure the current web is an app web
            if (!ContextInfo.isAppWeb) {
                // Error
                console.error("[gd-sprest] The current web is not an app web.");
                reject();
                return;
            }

            // Get the host web
            ContextInfo.window.$REST.DefaultRequestToHostFl = true;
            let web = (new Web(rootWebFl ? ContextInfo.siteServerRelativeUrl : null));

            // See if the folder url was given
            if (typeof (dstFolder) === "string") {
                // Get the folder
                App.getFolder(web, dstFolder, true)
                    .then((folder) => {
                        // Copy the file to the host web
                        App.copyFileToHostWeb(fileUrl, folder, overwriteFl)
                            // Wait for the request to complete, and resolve the promise
                            .then(({ file, folder }) => { resolve({ file, folder }); });
                    });
            } else {
                // Get the file name
                let fileName = fileUrl.split("/");
                fileName = fileName[fileName.length - 1];

                // Set the file urls
                let dstFileUrl = ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
                let srcFileUrl = ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(ContextInfo.webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));

                // Get the destination file
                web.getFileByServerRelativeUrl(dstFileUrl)
                    // Execute the request
                    .execute((file) => {
                        // Return a promise
                        return new Promise((resolve, reject) => {
                            // See if the file exists
                            if (file.Exists) {
                                // Check out the file, and resolve the promise
                                file.checkout().execute(resolve);
                            } else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    });

                // Target the current web
                ContextInfo.window.$REST.DefaultRequestToHostFl = false;

                // Get the current web
                (new Web())
                    .getFileByServerRelativeUrl(srcFileUrl)
                    // Get the content
                    .content()
                    // Execute the request
                    .execute((content) => {
                        // Return a promise
                        return new Promise((resolve, reject) => {
                            // Get the file name
                            let fileName = srcFileUrl.split("/");
                            fileName = fileName[fileName.length - 1];

                            // Target the host web
                            ContextInfo.window.$REST.DefaultRequestToHostFl = true;

                            // Add the file to the folder
                            (dstFolder).Files().add(true, fileName, content)
                                // Execute the request
                                .execute((file) => {
                                    // Save a reference to this file
                                    srcFile = file;

                                    // Check in the file
                                    file.checkin("", 1).execute();

                                    // Publish the file
                                    file.publish("").execute(true);

                                    // Wait for the requests to complete
                                    file.done(() => {
                                        // Resolve the promise
                                        resolve();
                                    });
                                });
                        });
                    }, true);

                // Wait for the requests to complete, and resolve the promise
                web.done(() => { resolve({ file: srcFile, folder: dstFolder }); });
            }
        });
    }

    // Method to copy a file in this app web to the host web
    static copyFilesToHostWeb = (fileUrls, folderUrls, overwriteFl, rootWebFl): PromiseLike<{ files: Array<Types.IFileResult>, folders: Array<Types.IFolderResult> }> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            let request = (files, folders, idx) => {
                // Ensure the array is not empty
                if (fileUrls.length == idx || folderUrls.length == idx) {
                    // Resolve the promise and return it
                    resolve({ files, folders });
                    return;
                }

                // Copy the file
                App.copyFileToHostWeb(fileUrls[idx], folderUrls[idx], overwriteFl, rootWebFl)
                    // Wait for it to complete
                    .then(({ file, folder }) => {
                        // Save a reference to the file and folder
                        files.push(file);
                        folders.push(folder);

                        // Copy the files
                        request(files, folders, ++idx);
                    })
            };

            // Execute the request
            request([], [], 0);
        });
    }

    // Method to create sub-folders
    static createSubFolders = (folder, subFolderUrl): PromiseLike<Types.IFolderResult> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            let request = (resolve) => {
                // Get the sub-folder name
                let subFolderName = subFolderUrl.split("/")[0];

                // Update the sub folder url
                subFolderUrl = subFolderUrl.substr(subFolderName.length + 1);

                // Get the sub-folder
                let subFolder = folder.Folders(subFolderName).execute((subFolder) => {
                    // Method to add additional sub folders
                    let addSubFolders = (subFolder) => {
                        // See if we are done
                        if (subFolderUrl.length == 0) {
                            // Resolve the promise
                            resolve(subFolder);
                        } else {
                            // Create the sub folder
                            request(resolve);
                        }
                    };

                    // Ensure the sub-folder exists
                    if (subFolder.Exists) {
                        // Add the rest of the sub folders
                        addSubFolders(subFolder);
                    } else {
                        // Create the sub folder
                        folder.Folders().add(subFolderName).execute(addSubFolders);
                    }
                });
            };

            // Execute the request
            request(resolve);
        });
    }

    // Method to get a folder
    static getFolder = (web, folderUrl, createFl): PromiseLike<Types.IFolderResult> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            let dstFolder = null;

            // Ensure the web exists
            if (!web.existsFl) {
                // Get the web
                web.execute();
            }

            // Wait for the requests to complete
            web.done(() => {
                // Set the destination folder url
                let dstFolderUrl = ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(web.ServerRelativeUrl, folderUrl.substr(folderUrl[0] == "/" ? 1 : 0));

                // Get the folder
                web.getFolderByServerRelativeUrl(folderUrl)
                    // Execute the request
                    .execute((folder) => {
                        // Return a promise
                        return new Promise((resolve, reject) => {
                            // Ensure the folder exists
                            if (folder.Exists) {
                                // Save a reference to the folder
                                dstFolder = folder;

                                // Resolve the promise
                                resolve();
                            } else {
                                // Create the folder
                                App.createSubFolders(web.RootFolder(), folderUrl).then((folder) => {
                                    // Save a reference to the folder
                                    dstFolder = folder;

                                    // Resolve the promise
                                    resolve();
                                });
                            }
                        });
                    }, true);

                // Wait for the request to complete
                web.done(() => {
                    // Resolve the promise
                    resolve(dstFolder);
                });
            });
        });
    }

    // Method to remove empty folders
    static removeEmptyFolders = (web, folderUrls): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure folder urls exist
            if (folderUrls.length == 0) {
                // Resolve the promise and return it
                resolve();
            } else {
                let prevFolderUrl = null;

                // Sort the urls alphabetically, then from longest to shortest
                folderUrls.sort().sort(function (a, b) { return a.length > b.length ? -1 : 1; });

                // Parse the folders
                for (let folderUrl of folderUrls) {
                    let folder = null;

                    // See if we already removed this folder
                    if (folderUrl == prevFolderUrl) { continue; }
                    else { prevFolderUrl = folderUrl; }

                    // Parse the folder names
                    let folderNames = folderUrl.split('/');
                    for (let folderName of folderNames) {
                        // Get the sub-folder
                        folder = folder ? folder.Folders(folderName) : web.Folders(folderName);
                    }

                    // Execute the request
                    folder.execute((folder) => {
                        // Return a promise
                        return new Promise((resolve, reject) => {
                            // See if the folder is empty
                            if (folder.ItemCount == 0) {
                                // Delete the folder, and resolve the promise
                                folder.delete().execute(resolve);
                            } else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    }, true);
                }

                // Wait for the requests to complete, and resolve the promise
                web.done(() => { resolve(); });
            }
        });
    }

    // Method to remove a file
    static removeFile = (web, fileUrl): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            let folder = null;
            let folders = fileUrl.split('/');

            // Parse the folders
            for (let i = 0; i < folders.length - 1; i++) {
                // Get the folder
                folder = folder ? folder.Folders(folders[i]) : web.Folders(folders[i]);
            }

            // Get the file
            folder.Files(folders[folders.length - 1]).execute((file) => {
                // See if it exists
                if (file.Exists) {
                    // Delete it and resolve the promise
                    file.delete().execute(resolve);
                } else {
                    // Resolve the promise
                    resolve();
                }
            }, true);
        });
    }

    // Method to remove files
    static removeFiles = (web, fileUrls, idx): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            let request = (idx: number, resolve) => {
                // See if we have removed all files
                if (fileUrls.length == idx) {
                    // Resolve the promise and return it
                    resolve();
                } else {
                    // Remove the file
                    App.removeFile(web, fileUrls[idx]).then(() => {
                        // Remove the files
                        request(++idx, resolve);
                    });
                }
            };

            // Execute the request
            request(0, resolve);
        });
    }
}
export const App: IApp = new _App() as any;