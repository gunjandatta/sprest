"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _App = (function () {
    function _App() {
    }
    _App.copyFileToHostWeb = function (fileUrl, dstFolder, overwriteFl, rootWebFl) {
        var srcFile = null;
        var origVal = lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl;
        return new Promise(function (resolve, reject) {
            if (!lib_1.ContextInfo.isAppWeb) {
                console.error("[gd-sprest] The current web is not an app web.");
                reject();
                return;
            }
            lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
            var web = (new lib_1.Web(rootWebFl ? lib_1.ContextInfo.siteServerRelativeUrl : null));
            if (typeof (dstFolder) === "string") {
                exports.App.getFolder(web, dstFolder, true)
                    .then(function (folder) {
                    exports.App.copyFileToHostWeb(fileUrl, folder, overwriteFl)
                        .then(function (_a) {
                        var file = _a.file, folder = _a.folder;
                        resolve({ file: file, folder: folder });
                    });
                });
            }
            else {
                var fileName = fileUrl.split("/");
                fileName = fileName[fileName.length - 1];
                var dstFileUrl = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(dstFolder.ServerRelativeUrl, fileName);
                var srcFileUrl_1 = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(lib_1.ContextInfo.webServerRelativeUrl, fileUrl.substr(fileUrl[0] == "/" ? 1 : 0));
                web.getFileByServerRelativeUrl(dstFileUrl)
                    .execute(function (file) {
                    return new Promise(function (resolve, reject) {
                        if (file.Exists) {
                            file.checkout().execute(resolve);
                        }
                        else {
                            resolve();
                        }
                    });
                });
                lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = false;
                (new lib_1.Web())
                    .getFileByServerRelativeUrl(srcFileUrl_1)
                    .content()
                    .execute(function (content) {
                    return new Promise(function (resolve, reject) {
                        var fileName = srcFileUrl_1.split("/");
                        fileName = fileName[fileName.length - 1];
                        lib_1.ContextInfo.window.$REST.DefaultRequestToHostFl = true;
                        (dstFolder).Files().add(true, fileName, content)
                            .execute(function (file) {
                            srcFile = file;
                            file.checkin("", 1).execute();
                            file.publish("").execute(true);
                            file.done(function () {
                                resolve();
                            });
                        });
                    });
                }, true);
                web.done(function () { resolve({ file: srcFile, folder: dstFolder }); });
            }
        });
    };
    _App.copyFilesToHostWeb = function (fileUrls, folderUrls, overwriteFl, rootWebFl) {
        return new Promise(function (resolve, reject) {
            var request = function (files, folders, idx) {
                if (fileUrls.length == idx || folderUrls.length == idx) {
                    resolve({ files: files, folders: folders });
                    return;
                }
                exports.App.copyFileToHostWeb(fileUrls[idx], folderUrls[idx], overwriteFl, rootWebFl)
                    .then(function (_a) {
                    var file = _a.file, folder = _a.folder;
                    files.push(file);
                    folders.push(folder);
                    request(files, folders, ++idx);
                });
            };
            request([], [], 0);
        });
    };
    _App.createSubFolders = function (folder, subFolderUrl) {
        return new Promise(function (resolve, reject) {
            var request = function (resolve) {
                var subFolderName = subFolderUrl.split("/")[0];
                subFolderUrl = subFolderUrl.substr(subFolderName.length + 1);
                var subFolder = folder.Folders(subFolderName).execute(function (subFolder) {
                    var addSubFolders = function (subFolder) {
                        if (subFolderUrl.length == 0) {
                            resolve(subFolder);
                        }
                        else {
                            request(resolve);
                        }
                    };
                    if (subFolder.Exists) {
                        addSubFolders(subFolder);
                    }
                    else {
                        folder.Folders().add(subFolderName).execute(addSubFolders);
                    }
                });
            };
            request(resolve);
        });
    };
    _App.getFolder = function (web, folderUrl, createFl) {
        return new Promise(function (resolve, reject) {
            var dstFolder = null;
            if (!web.existsFl) {
                web.execute();
            }
            web.done(function () {
                var dstFolderUrl = lib_1.ContextInfo.window.SP.Utilities.UrlBuilder.urlCombine(web.ServerRelativeUrl, folderUrl.substr(folderUrl[0] == "/" ? 1 : 0));
                web.getFolderByServerRelativeUrl(folderUrl)
                    .execute(function (folder) {
                    return new Promise(function (resolve, reject) {
                        if (folder.Exists) {
                            dstFolder = folder;
                            resolve();
                        }
                        else {
                            exports.App.createSubFolders(web.RootFolder(), folderUrl).then(function (folder) {
                                dstFolder = folder;
                                resolve();
                            });
                        }
                    });
                }, true);
                web.done(function () {
                    resolve(dstFolder);
                });
            });
        });
    };
    _App.removeEmptyFolders = function (web, folderUrls) {
        return new Promise(function (resolve, reject) {
            if (folderUrls.length == 0) {
                resolve();
            }
            else {
                var prevFolderUrl = null;
                folderUrls.sort().sort(function (a, b) { return a.length > b.length ? -1 : 1; });
                for (var _i = 0, folderUrls_1 = folderUrls; _i < folderUrls_1.length; _i++) {
                    var folderUrl = folderUrls_1[_i];
                    var folder = null;
                    if (folderUrl == prevFolderUrl) {
                        continue;
                    }
                    else {
                        prevFolderUrl = folderUrl;
                    }
                    var folderNames = folderUrl.split('/');
                    for (var _a = 0, folderNames_1 = folderNames; _a < folderNames_1.length; _a++) {
                        var folderName = folderNames_1[_a];
                        folder = folder ? folder.Folders(folderName) : web.Folders(folderName);
                    }
                    folder.execute(function (folder) {
                        return new Promise(function (resolve, reject) {
                            if (folder.ItemCount == 0) {
                                folder.delete().execute(resolve);
                            }
                            else {
                                resolve();
                            }
                        });
                    }, true);
                }
                web.done(function () { resolve(); });
            }
        });
    };
    _App.removeFile = function (web, fileUrl) {
        return new Promise(function (resolve, reject) {
            var folder = null;
            var folders = fileUrl.split('/');
            for (var i = 0; i < folders.length - 1; i++) {
                folder = folder ? folder.Folders(folders[i]) : web.Folders(folders[i]);
            }
            folder.Files(folders[folders.length - 1]).execute(function (file) {
                if (file.Exists) {
                    file.delete().execute(resolve);
                }
                else {
                    resolve();
                }
            }, true);
        });
    };
    _App.removeFiles = function (web, fileUrls, idx) {
        return new Promise(function (resolve, reject) {
            var request = function (idx, resolve) {
                if (fileUrls.length == idx) {
                    resolve();
                }
                else {
                    exports.App.removeFile(web, fileUrls[idx]).then(function () {
                        request(++idx, resolve);
                    });
                }
            };
            request(0, resolve);
        });
    };
    return _App;
}());
exports.App = new _App();
//# sourceMappingURL=app.js.map