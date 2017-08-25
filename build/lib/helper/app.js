"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
var __1 = require("..");
/*********************************************************************************************************************************/
// App Helper Methods
/*********************************************************************************************************************************/
exports.AppHelper = {
    // Method to copy a file in this app web to the host web
    copyFileToHostWeb: function (fileUrl, dstFolder, overwriteFl, rootWebFl) {
        var srcFile = null;
        var promise = new utils_1.Promise();
        var origVal = __1.ContextInfo.window.$REST.DefaultRequestToHostFl;
        // Ensure the current web is an app web
        if (!__1.ContextInfo.isAppWeb) {
            // Error
            console.error("[gd-sprest] The current web is not an app web.");
            return;
        }
        // Get the host web
        __1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
        var web = (new __1.Web(rootWebFl ? __1.ContextInfo.siteServerRelativeUrl : null));
        // See if the folder url was given
        if (typeof (dstFolder) === "string") {
            // Get the folder
            _this.getFolder(web, dstFolder, true)
                .done(function (folder) {
                // Copy the file to the host web
                _this.copyFileToHostWeb(fileUrl, folder, overwriteFl)
                    .done(function (file, folder) { promise.resolve(file, folder); });
            });
        }
        else {
            // Get the file name
            var fileName = fileUrl.split("/");
            fileName = fileName[fileName.length - 1];
            // Set the file urls
            var dstFileUrl = __1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
            var srcFileUrl_1 = __1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(__1.ContextInfo.webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));
            // Get the destination file
            web.getFileByServerRelativeUrl(dstFileUrl)
                .execute(function (file) {
                var promise = new utils_1.Promise();
                // See if the file exists
                if (file.Exists) {
                    // Check out the file, and resolve the promise
                    file.checkout().execute(function () { promise.resolve(); });
                }
                else {
                    // Resolve the promise
                    promise.resolve();
                }
                // Return the promiser
                return promise;
            });
            // Target the current web
            __1.ContextInfo.window.$REST.DefaultRequestToHostFl = false;
            // Get the current web
            (new __1.Web())
                .getFileByServerRelativeUrl(srcFileUrl_1)
                .content()
                .execute(function (content) {
                var promise = new utils_1.Promise();
                // Get the file name
                var fileName = srcFileUrl_1.split("/");
                fileName = fileName[fileName.length - 1];
                // Target the host web
                __1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
                // Add the file to the folder
                (dstFolder).Files().add(true, fileName, content.response)
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
                        promise.resolve();
                    });
                });
                // Return the promise
                return promise;
            }, true);
            // Wait for the requests to complete, and resolve the promise
            web.done(function () { promise.resolve(srcFile, dstFolder); });
        }
        // Return the promise
        return promise;
    },
    // Method to copy a file in this app web to the host web
    copyFilesToHostWeb: function (fileUrls, folderUrls, overwriteFl, rootWebFl, idx, promise, files, folders) {
        files = files ? files : [];
        folders = folders ? folders : [];
        idx = idx ? idx : 0;
        promise = promise ? promise : new utils_1.Promise();
        // Ensure the array is not empty
        if (fileUrls.length == idx || folderUrls.length == idx) {
            // Resolve the promise and return it
            promise.resolve(files, folders);
            return promise;
        }
        // Copy the file
        _this.copyFileToHostWeb(fileUrls[idx], folderUrls[idx], overwriteFl, rootWebFl)
            .done(function (file, folder) {
            // Save a reference to the file and folder
            files.push(file);
            folders.push(folder);
            // Copy the files
            _this.copyFilesToHostWeb(fileUrls, folderUrls, overwriteFl, rootWebFl, ++idx, promise, files, folders);
        });
        // Return the promise
        return promise;
    },
    // Method to create sub-folders
    createSubFolders: function (folder, subFolderUrl, promise) {
        // Ensure the promise exists
        promise = promise ? promise : new utils_1.Promise();
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
                    promise.resolve(subFolder);
                }
                else {
                    // Create the sub folder
                    _this.createSubFolders(subFolder, subFolderUrl, promise);
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
        // Return a promise
        return promise;
    },
    // Method to get a folder
    getFolder: function (web, folderUrl, createFl) {
        var dstFolder = null;
        var promise = new utils_1.Promise();
        // Ensure the web exists
        if (!web.existsFl) {
            // Get the web
            web.execute();
        }
        // Wait for the requests to complete
        web.done(function () {
            // Set the destination folder url
            var dstFolderUrl = __1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(web.ServerRelativeUrl, folderUrl.substr(folderUrl[0] == "/" ? 1 : 0));
            // Get the folder
            web.getFolderByServerRelativeUrl(folderUrl)
                .execute(function (folder) {
                var promise = new utils_1.Promise();
                // Ensure the folder exists
                if (folder.Exists) {
                    // Save a reference to the folder
                    dstFolder = folder;
                    // Resolve the promise
                    promise.resolve();
                }
                else {
                    // Create the folder
                    _this.createSubFolders(web.RootFolder(), folderUrl).done(function (folder) {
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
            web.done(function () {
                // Resolve the promise
                promise.resolve(dstFolder);
            });
        });
        // Return the promise
        return promise;
    },
    // Method to remove empty folders
    removeEmptyFolders: function (web, folderUrls) {
        var promise = new utils_1.Promise();
        // Ensure folder urls exist
        if (folderUrls.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
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
                    var promise = new utils_1.Promise();
                    // See if the folder is empty
                    if (folder.ItemCount == 0) {
                        // Delete the folder, and resolve the promise
                        folder.delete().execute(function () { promise.resolve(); });
                    }
                    else {
                        // Resolve the proise
                        promise.resolve();
                    }
                    // Return the promise
                    return promise;
                }, true);
            }
            // Wait for the requests to complete, and resolve the promise
            web.done(function () { promise.resolve(); });
        }
        // Return the promise
        return promise;
    },
    // Method to remove a file
    removeFile: function (web, fileUrl) {
        var promise = new utils_1.Promise();
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
                file.delete().execute(function () { promise.resolve(); });
            }
            else {
                // Resolve the promises
                promise.resolve();
            }
        }, true);
        // Return the promise
        return promise;
    },
    // Method to remove files
    removeFiles: function (web, fileUrls, idx, promise) {
        idx = idx ? idx : 0;
        promise = promise ? promise : new utils_1.Promise();
        // See if we have removed all files
        if (fileUrls.length == idx) {
            // Resolve the promise and return it
            promise.resolve();
        }
        else {
            // Remove the file
            _this.removeFile(web, fileUrls[idx]).done(function () {
                // Remove the files
                _this.removeFiles(web, fileUrls, ++idx, promise);
            });
        }
        // Return the promise
        return promise;
    }
};
//# sourceMappingURL=app.js.map