"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
/**
 * App Helper Methods
 * Helper methods designed to be run from the app web.
 */
var _App = /** @class */ (function () {
    function _App() {
    }
    // Method to copy a file in this app web to the host web
    _App.copyFileToHostWeb = function (fileUrl, dstFolder, overwriteFl, rootWebFl) {
        var srcFile = null;
        var origVal = lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the current web is an app web
            if (!lib_1.ContextInfo.isAppWeb) {
                // Error
                console.error("[gd-sprest] The current web is not an app web.");
                reject();
                return;
            }
            // Get the host web
            lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
            var web = (new lib_1.Web(rootWebFl ? lib_1.ContextInfo.siteServerRelativeUrl : null));
            // See if the folder url was given
            if (typeof (dstFolder) === "string") {
                // Get the folder
                exports.App.getFolder(web, dstFolder, true)
                    .then(function (folder) {
                    // Copy the file to the host web
                    exports.App.copyFileToHostWeb(fileUrl, folder, overwriteFl)
                        .then(function (_a) {
                        var file = _a.file, folder = _a.folder;
                        resolve({ file: file, folder: folder });
                    });
                });
            }
            else {
                // Get the file name
                var fileName = fileUrl.split("/");
                fileName = fileName[fileName.length - 1];
                // Set the file urls
                var dstFileUrl = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
                var srcFileUrl_1 = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(lib_1.ContextInfo.webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));
                // Get the destination file
                web.getFileByServerRelativeUrl(dstFileUrl)
                    .execute(function (file) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // See if the file exists
                        if (file.Exists) {
                            // Check out the file, and resolve the promise
                            file.checkout().execute(resolve);
                        }
                        else {
                            // Resolve the promise
                            resolve();
                        }
                    });
                });
                // Target the current web
                lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = false;
                // Get the current web
                (new lib_1.Web())
                    .getFileByServerRelativeUrl(srcFileUrl_1)
                    .content()
                    .execute(function (content) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // Get the file name
                        var fileName = srcFileUrl_1.split("/");
                        fileName = fileName[fileName.length - 1];
                        // Target the host web
                        lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
                        // Add the file to the folder
                        (dstFolder).Files().add(true, fileName, content)
                            .execute(function (file) {
                            // Save a reference to this file
                            srcFile = file;
                            // Check in the file
                            file.checkin("", 1).execute();
                            // Publish the file
                            file.publish("").execute(true);
                            // Wait for the requests to complete
                            file.done(function () {
                                // Resolve the promise
                                resolve();
                            });
                        });
                    });
                }, true);
                // Wait for the requests to complete, and resolve the promise
                web.done(function () { resolve({ file: srcFile, folder: dstFolder }); });
            }
        });
    };
    // Method to copy a file in this app web to the host web
    _App.copyFilesToHostWeb = function (fileUrls, folderUrls, overwriteFl, rootWebFl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (files, folders, idx) {
                // Ensure the array is not empty
                if (fileUrls.length == idx || folderUrls.length == idx) {
                    // Resolve the promise and return it
                    resolve({ files: files, folders: folders });
                    return;
                }
                // Copy the file
                exports.App.copyFileToHostWeb(fileUrls[idx], folderUrls[idx], overwriteFl, rootWebFl)
                    .then(function (_a) {
                    var file = _a.file, folder = _a.folder;
                    // Save a reference to the file and folder
                    files.push(file);
                    folders.push(folder);
                    // Copy the files
                    request(files, folders, ++idx);
                });
            };
            // Execute the request
            request([], [], 0);
        });
    };
    // Method to create sub-folders
    _App.createSubFolders = function (folder, subFolderUrl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (resolve) {
                // Get the sub-folder name
                var subFolderName = subFolderUrl.split("/")[0];
                // Update the sub folder url
                subFolderUrl = subFolderUrl.substr(subFolderName.length + 1);
                // Get the sub-folder
                var subFolder = folder.Folders(subFolderName).execute(function (subFolder) {
                    // Method to add additional sub folders
                    var addSubFolders = function (subFolder) {
                        // See if we are done
                        if (subFolderUrl.length == 0) {
                            // Resolve the promise
                            resolve(subFolder);
                        }
                        else {
                            // Create the sub folder
                            request(resolve);
                        }
                    };
                    // Ensure the sub-folder exists
                    if (subFolder.Exists) {
                        // Add the rest of the sub folders
                        addSubFolders(subFolder);
                    }
                    else {
                        // Create the sub folder
                        folder.Folders().add(subFolderName).execute(addSubFolders);
                    }
                });
            };
            // Execute the request
            request(resolve);
        });
    };
    // Method to get a folder
    _App.getFolder = function (web, folderUrl, createFl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var dstFolder = null;
            // Ensure the web exists
            if (!web.existsFl) {
                // Get the web
                web.execute();
            }
            // Wait for the requests to complete
            web.done(function () {
                // Set the destination folder url
                var dstFolderUrl = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(web.ServerRelativeUrl, folderUrl.substr(folderUrl[0] == "/" ? 1 : 0));
                // Get the folder
                web.getFolderByServerRelativeUrl(folderUrl)
                    .execute(function (folder) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // Ensure the folder exists
                        if (folder.Exists) {
                            // Save a reference to the folder
                            dstFolder = folder;
                            // Resolve the promise
                            resolve();
                        }
                        else {
                            // Create the folder
                            exports.App.createSubFolders(web.RootFolder(), folderUrl).then(function (folder) {
                                // Save a reference to the folder
                                dstFolder = folder;
                                // Resolve the promise
                                resolve();
                            });
                        }
                    });
                }, true);
                // Wait for the request to complete
                web.done(function () {
                    // Resolve the promise
                    resolve(dstFolder);
                });
            });
        });
    };
    // Method to remove empty folders
    _App.removeEmptyFolders = function (web, folderUrls) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure folder urls exist
            if (folderUrls.length == 0) {
                // Resolve the promise and return it
                resolve();
            }
            else {
                var prevFolderUrl = null;
                // Sort the urls alphabetically, then from longest to shortest
                folderUrls.sort().sort(function (a, b) { return a.length > b.length ? -1 : 1; });
                // Parse the folders
                for (var _i = 0, folderUrls_1 = folderUrls; _i < folderUrls_1.length; _i++) {
                    var folderUrl = folderUrls_1[_i];
                    var folder = null;
                    // See if we already removed this folder
                    if (folderUrl == prevFolderUrl) {
                        continue;
                    }
                    else {
                        prevFolderUrl = folderUrl;
                    }
                    // Parse the folder names
                    var folderNames = folderUrl.split('/');
                    for (var _a = 0, folderNames_1 = folderNames; _a < folderNames_1.length; _a++) {
                        var folderName = folderNames_1[_a];
                        // Get the sub-folder
                        folder = folder ? folder.Folders(folderName) : web.Folders(folderName);
                    }
                    // Execute the request
                    folder.execute(function (folder) {
                        // Return a promise
                        return new Promise(function (resolve, reject) {
                            // See if the folder is empty
                            if (folder.ItemCount == 0) {
                                // Delete the folder, and resolve the promise
                                folder.delete().execute(resolve);
                            }
                            else {
                                // Resolve the promise
                                resolve();
                            }
                        });
                    }, true);
                }
                // Wait for the requests to complete, and resolve the promise
                web.done(function () { resolve(); });
            }
        });
    };
    // Method to remove a file
    _App.removeFile = function (web, fileUrl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var folder = null;
            var folders = fileUrl.split('/');
            // Parse the folders
            for (var i = 0; i < folders.length - 1; i++) {
                // Get the folder
                folder = folder ? folder.Folders(folders[i]) : web.Folders(folders[i]);
            }
            // Get the file
            folder.Files(folders[folders.length - 1]).execute(function (file) {
                // See if it exists
                if (file.Exists) {
                    // Delete it and resolve the promise
                    file.delete().execute(resolve);
                }
                else {
                    // Resolve the promise
                    resolve();
                }
            }, true);
        });
    };
    // Method to remove files
    _App.removeFiles = function (web, fileUrls, idx) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            var request = function (idx, resolve) {
                // See if we have removed all files
                if (fileUrls.length == idx) {
                    // Resolve the promise and return it
                    resolve();
                }
                else {
                    // Remove the file
                    exports.App.removeFile(web, fileUrls[idx]).then(function () {
                        // Remove the files
                        request(++idx, resolve);
                    });
                }
            };
            // Execute the request
            request(0, resolve);
        });
    };
    return _App;
}());
exports.App = new _App();
//# sourceMappingURL=app.js.map