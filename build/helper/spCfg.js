"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./spCfgTypes"));
var lib_1 = require("../lib");
var _1 = require(".");
var _SPConfig = (function () {
    function _SPConfig(cfg, webUrl) {
        var _this = this;
        this.installByType = function (cfgType, callback, targetName) { return _this.install(callback, cfgType, targetName); };
        this.uninstallByType = function (cfgType, callback, targetName) { return _this.uninstall(callback, cfgType, targetName); };
        this.createContentTypes = function (contentTypes, cfgContentTypes) {
            return new Promise(function (resolve, reject) {
                if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                    resolve();
                    return;
                }
                var _loop_1 = function (i) {
                    var cfgContentType = cfgContentTypes[i];
                    var ct = _this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                    if (ct) {
                        console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' already exists.");
                        cfgContentType.ContentType = ct;
                    }
                    else {
                        console.log("[gd-sprest][Content Type] Creating the '" + cfgContentType.Name + "' content type.");
                        if (cfgContentType.ParentName) {
                            (new lib_1.Web(cfgContentType.ParentWebUrl || _this._webUrl))
                                .ContentTypes()
                                .query({
                                Filter: "Name eq '" + cfgContentType.ParentName + "'"
                            })
                                .execute(function (parent) {
                                if (parent.results[0]) {
                                    contentTypes.addAvailableContentType(parent.results[0].Id.StringValue).execute(function (ct) {
                                        if (ct.existsFl) {
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");
                                            cfgContentType.ContentType = ct;
                                            cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                        }
                                        else {
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                            console.error("[gd-sprest][Field] Error: " + ct.response);
                                        }
                                    }, true);
                                }
                                else {
                                    console.log("[gd-sprest][Content Type] The parent content type '" + cfgContentType.Name + "' was not found.");
                                }
                            });
                        }
                        else {
                            contentTypes.add({
                                Description: cfgContentType.Description,
                                Group: cfgContentType.Group,
                                Name: cfgContentType.Name
                            }).execute(function (ct) {
                                if (ct.existsFl) {
                                    console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");
                                    cfgContentType.ContentType = ct;
                                    cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                }
                                else {
                                    console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                    console.error("[gd-sprest][Field] Error: " + ct.response);
                                }
                            });
                        }
                    }
                };
                for (var i = 0; i < cfgContentTypes.length; i++) {
                    _loop_1(i);
                }
                contentTypes.done(function () {
                    var _loop_2 = function (i) {
                        var cfgContentType = cfgContentTypes[i];
                        var cfgUpdate = {};
                        var updateFl = false;
                        if (cfgContentType.ContentType == null) {
                            return "continue";
                        }
                        if (cfgContentType.ContentType.Description != cfgContentType.Description) {
                            cfgUpdate.Description = cfgContentType.Description;
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Description requires update.");
                            updateFl = true;
                        }
                        if (cfgContentType.ContentType.Group != cfgContentType.Group) {
                            cfgUpdate.Group = cfgContentType.Group;
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Group requires update.");
                            updateFl = true;
                        }
                        if (cfgContentType.ContentType.JSlink != cfgContentType.JSLink) {
                            cfgUpdate.JSLink = cfgContentType.JSLink;
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] JSLink requires update.");
                            updateFl = true;
                        }
                        if (cfgContentType.ContentType.Name != cfgContentType.Name) {
                            cfgUpdate.Name = cfgContentType.Name;
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Name requires update.");
                            updateFl = true;
                        }
                        if (updateFl) {
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Updating the webpart.");
                            cfgContentType.ContentType.update({ JSLink: cfgContentType.JSLink }).execute(function () {
                                console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Update request completed.");
                                cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                            });
                        }
                        else {
                            cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                        }
                    };
                    for (var i = 0; i < cfgContentTypes.length; i++) {
                        _loop_2(i);
                    }
                    contentTypes.done(function () {
                        resolve();
                    });
                });
            });
        };
        this.createFields = function (fields, cfgFields) {
            return new Promise(function (resolve, reject) {
                if (cfgFields == null || cfgFields.length == 0) {
                    resolve();
                    return;
                }
                var _loop_3 = function (i) {
                    var cfgField = cfgFields[i];
                    var field = _this.isInCollection("InternalName", cfgField.name, fields.results);
                    if (field) {
                        console.log("[gd-sprest][Field] The field '" + cfgField.name + "' already exists.");
                        cfgField.onUpdated ? cfgField.onUpdated(field) : null;
                    }
                    else {
                        console.log("[gd-sprest][Field] Creating the '" + cfgField.name + "' field.");
                        var onFieldCreated_1 = function (field) {
                            if (field.existsFl) {
                                console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was created successfully.");
                                cfgField.onCreated ? cfgField.onCreated(field) : null;
                            }
                            else {
                                console.log("[gd-sprest][Field] The field '" + cfgField.name + "' failed to be created.");
                                console.error("[gd-sprest][Field] Error: " + field.response);
                            }
                        };
                        _1.FieldSchemaXML.generate(cfgField).then(function (response) {
                            var schemas = typeof (response) === "string" ? [response] : response;
                            for (var i_1 = 0; i_1 < schemas.length; i_1++) {
                                fields.createFieldAsXml(schemas[i_1]).execute(onFieldCreated_1, true);
                            }
                        });
                    }
                };
                for (var i = 0; i < cfgFields.length; i++) {
                    _loop_3(i);
                }
                fields.done(function () {
                    resolve();
                });
            });
        };
        this.createLists = function (lists, cfgLists) {
            return new Promise(function (resolve, reject) {
                if (_this._cfgType) {
                    if (_this._cfgType != _1.SPCfgType.Lists) {
                        resolve();
                        return;
                    }
                }
                if (cfgLists == null || cfgLists.length == 0) {
                    resolve();
                    return;
                }
                var _loop_4 = function (i) {
                    var cfgList = cfgLists[i];
                    if (_this._cfgType && _this._targetName) {
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    var list = _this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                    if (list) {
                        console.log("[gd-sprest][List] The list '" + cfgList.ListInformation.Title + "' already exists.");
                    }
                    else {
                        console.log("[gd-sprest][List] Creating the '" + cfgList.ListInformation.Title + "' list.");
                        var listInfo_1 = cfgList.ListInformation;
                        var listName_1 = listInfo_1.Title;
                        listInfo_1.Title = listName_1.replace(/ /g, "");
                        lists.add(listInfo_1)
                            .execute(function (list) {
                            listInfo_1.Title = listName_1;
                            if (list.existsFl) {
                                if (list.existsFl && list.Title != listName_1) {
                                    list.update({ Title: listName_1 }).execute(function () {
                                        console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                    });
                                }
                                else {
                                    console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                }
                                cfgList.onCreated ? cfgList.onCreated(list) : null;
                            }
                            else {
                                console.log("[gd-sprest][List] The list '" + listInfo_1.Title + "' failed to be created.");
                                console.log("[gd-sprest][List] Error: '" + list.response);
                            }
                        });
                    }
                };
                for (var i = 0; i < cfgLists.length; i++) {
                    _loop_4(i);
                }
                lists.done(function () {
                    _this.updateLists(cfgLists).then(function () {
                        resolve();
                    });
                });
            });
        };
        this.createUserCustomActions = function (customActions, cfgCustomActions) {
            return new Promise(function (resolve, reject) {
                if (_this._cfgType) {
                    if (_this._cfgType != _1.SPCfgType.SiteUserCustomActions || _this._cfgType != _1.SPCfgType.WebUserCustomActions) {
                        resolve();
                        return;
                    }
                }
                if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                    resolve();
                    return;
                }
                for (var i = 0; i < cfgCustomActions.length; i++) {
                    var cfgCustomAction = cfgCustomActions[i];
                    if (_this._cfgType && _this._targetName) {
                        if (cfgCustomAction.Name.toLowerCase() != _this._targetName ||
                            cfgCustomAction.Title.toLowerCase() != _this._targetName) {
                            continue;
                        }
                    }
                    if (_this.isInCollection("Name", cfgCustomAction.Name, customActions.results)) {
                        console.log("[gd-sprest][Custom Action] The custom action '" + cfgCustomAction.Name + "' already exists.");
                    }
                    else {
                        customActions.add(cfgCustomAction).execute(function (ca) {
                            if (ca.existsFl) {
                                console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was created successfully.");
                            }
                            else {
                                console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' failed to be created.");
                                console.log("[gd-sprest][Custom Action] Error: " + ca.response);
                            }
                        }, true);
                    }
                }
                customActions.done(function () {
                    resolve();
                });
            });
        };
        this.createViews = function (views, cfgViews) {
            return new Promise(function (resolve, reject) {
                if (cfgViews == null || cfgViews.length == 0) {
                    resolve();
                    return;
                }
                var _loop_5 = function (i) {
                    var cfgView = cfgViews[i];
                    var view = _this.isInCollection("Title", cfgView.ViewName, views.results);
                    if (view) {
                        console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' already exists.");
                    }
                    else {
                        views.add({
                            Title: cfgView.ViewName,
                            ViewQuery: cfgView.ViewQuery
                        }).execute(function (view) {
                            if (view.existsFl) {
                                console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' was created successfully.");
                                cfgView.onCreated ? cfgView.onCreated(view) : null;
                            }
                            else {
                                console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' failed to be created.");
                                console.log("[gd-sprest][View] Error: " + view.response);
                            }
                        }, true);
                    }
                };
                for (var i = 0; i < cfgViews.length; i++) {
                    _loop_5(i);
                }
                views.done(function () {
                    _this.updateViews(views, cfgViews).then(function () {
                        resolve();
                    });
                });
            });
        };
        this.createWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            if (_this._cfgType) {
                if (_this._cfgType != _1.SPCfgType.WebParts) {
                    return;
                }
            }
            if (cfgWebParts == null || cfgWebParts.length == 0) {
                return;
            }
            console.log("[gd-sprest][WebPart] Creating the web parts.");
            (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                .Lists("Web Part Gallery")
                .RootFolder()
                .query({
                Expand: ["Files"]
            })
                .execute(function (folder) {
                var _loop_6 = function (i) {
                    var cfgWebPart = cfgWebParts[i];
                    if (_this._cfgType && _this._targetName) {
                        if (cfgWebPart.FileName.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    var file = _this.isInCollection("Name", cfgWebPart.FileName, folder.Files.results);
                    if (file.existsFl) {
                        console.log("[gd-sprest][WebPart] The webpart '" + cfgWebPart.FileName + "' already exists.");
                        cfgWebPart.onUpdated ? cfgWebPart.onUpdated(file) : null;
                    }
                    else {
                        var xml = cfgWebPart.XML.trim();
                        var buffer = new ArrayBuffer(xml.length * 2);
                        var bufferView = new Uint16Array(buffer);
                        for (var j = 0; j < xml.length; j++) {
                            bufferView[j] = xml.charCodeAt(j);
                        }
                        folder.Files.add(true, cfgWebPart.FileName, buffer).execute(function (file) {
                            if (cfgWebPart.Group) {
                                (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                                    .Lists("Web Part Gallery")
                                    .Items()
                                    .query({
                                    Filter: "FileLeafRef eq '" + cfgWebPart.FileName + "'"
                                })
                                    .execute(function (items) {
                                    items.results[0].update({
                                        Group: cfgWebPart.Group
                                    }).execute();
                                });
                            }
                            console.log("[gd-sprest][WebPart] The '" + file.Name + "' webpart file was uploaded successfully.");
                            cfgWebPart.onCreated ? cfgWebPart.onCreated(file) : null;
                        });
                    }
                };
                for (var i = 0; i < cfgWebParts.length; i++) {
                    _loop_6(i);
                }
            });
        };
        this.installSite = function () {
            return new Promise(function (resolve, reject) {
                if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site == null) {
                    resolve();
                    return;
                }
                console.log("[gd-sprest] Loading the site information...");
                (new lib_1.Site(_this._webUrl))
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    .execute(function (site) {
                    _this.createUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).then(function () {
                        resolve(site);
                    });
                });
            });
        };
        this.installWeb = function () {
            return new Promise(function (resolve, reject) {
                console.log("[gd-sprest] Loading the web information...");
                (new lib_1.Web(_this._webUrl))
                    .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                    .execute(function (web) {
                    _this.createFields(web.Fields, _this._configuration.Fields).then(function () {
                        _this.createContentTypes(web.ContentTypes, _this._configuration.ContentTypes).then(function () {
                            _this.createLists(web.Lists, _this._configuration.ListCfg).then(function () {
                                _this.createUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).then(function () {
                                    resolve();
                                });
                            });
                        });
                    });
                });
            });
        };
        this.isInCollection = function (key, value, collection) {
            var valueLower = value.toLowerCase();
            for (var i = 0; i < collection.length; i++) {
                var keyValue = collection[i][key];
                keyValue = keyValue ? keyValue.toLowerCase() : "";
                if (valueLower == keyValue) {
                    return collection[i];
                }
            }
            return false;
        };
        this.removeContentTypes = function (contentTypes, cfgContentTypes) {
            return new Promise(function (resolve, reject) {
                if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                    resolve();
                    return;
                }
                var _loop_7 = function (i) {
                    var cfgContentType = cfgContentTypes[i];
                    var ct = _this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                    if (ct) {
                        ct.delete().execute(function () {
                            console.log("[gd-sprest][Field] The content type '" + ct.Name + "' was removed.");
                        }, true);
                    }
                };
                for (var i = 0; i < cfgContentTypes.length; i++) {
                    _loop_7(i);
                }
                contentTypes.done(function () {
                    resolve();
                });
            });
        };
        this.removeFields = function (fields, cfgFields) {
            return new Promise(function (resolve, reject) {
                if (cfgFields == null || cfgFields.length == 0) {
                    resolve();
                    return;
                }
                var _loop_8 = function (i) {
                    var cfgField = cfgFields[i];
                    var field = _this.isInCollection("InternalName", cfgField.name, fields.results);
                    if (field) {
                        field.delete().execute(function () {
                            console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was removed.");
                        }, true);
                    }
                };
                for (var i = 0; i < cfgFields.length; i++) {
                    _loop_8(i);
                }
                fields.done(function () {
                    resolve();
                });
            });
        };
        this.removeLists = function (lists, cfgLists) {
            return new Promise(function (resolve, reject) {
                if (_this._cfgType) {
                    if (_this._cfgType != _1.SPCfgType.Lists) {
                        resolve();
                        return;
                    }
                }
                if (cfgLists == null || cfgLists.length == 0) {
                    resolve();
                    return;
                }
                var _loop_9 = function (i) {
                    var cfgList = cfgLists[i];
                    if (_this._cfgType && _this._targetName) {
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    var list = _this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                    if (list) {
                        list.delete().execute(function () {
                            console.log("[gd-sprest][List] The list '" + list.Title + "' was removed.");
                        }, true);
                    }
                };
                for (var i = 0; i < cfgLists.length; i++) {
                    _loop_9(i);
                }
                lists.done(function () {
                    resolve();
                });
            });
        };
        this.removeUserCustomActions = function (customActions, cfgCustomActions) {
            return new Promise(function (resolve, reject) {
                if (_this._cfgType) {
                    if (_this._cfgType != _1.SPCfgType.SiteUserCustomActions || _this._cfgType != _1.SPCfgType.WebUserCustomActions) {
                        resolve();
                        return;
                    }
                }
                if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                    resolve();
                    return;
                }
                var _loop_10 = function (i) {
                    var cfgCustomAction = cfgCustomActions[i];
                    if (_this._cfgType && _this._targetName) {
                        if (cfgCustomAction.Name.toLowerCase() != _this._targetName ||
                            cfgCustomAction.Title.toLowerCase() != _this._targetName) {
                            return "continue";
                        }
                    }
                    var ca = _this.isInCollection("Name", cfgCustomAction.Name, customActions.results);
                    if (ca) {
                        ca.delete().execute(function () {
                            console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was removed.");
                        }, true);
                    }
                };
                for (var i = 0; i < cfgCustomActions.length; i++) {
                    _loop_10(i);
                }
                customActions.done(function () {
                    resolve();
                });
            });
        };
        this.removeWebParts = function () {
            var cfgWebParts = _this._configuration.WebPartCfg;
            return new Promise(function (resolve, reject) {
                if (_this._cfgType) {
                    if (_this._cfgType != _1.SPCfgType.WebParts) {
                        resolve();
                        return;
                    }
                }
                if (cfgWebParts == null || cfgWebParts.length == 0) {
                    resolve();
                    return;
                }
                console.log("[gd-sprest][WebPart] Creating the web parts.");
                (new lib_1.Web(lib_1.ContextInfo.siteServerRelativeUrl))
                    .Lists("Web Part Gallery")
                    .RootFolder()
                    .Files()
                    .execute(function (files) {
                    var _loop_11 = function (i) {
                        var cfgWebPart = cfgWebParts[i];
                        if (_this._cfgType && _this._targetName) {
                            if (cfgWebPart.FileName.toLowerCase() != _this._targetName) {
                                return "continue";
                            }
                        }
                        var file = _this.isInCollection("Name", cfgWebPart.FileName, files.results);
                        if (file) {
                            file.delete().execute(function () {
                                console.log("[gd-sprest][WebPart] The webpart '" + file.Name + "' file was removed.");
                            }, true);
                        }
                    };
                    for (var i = 0; i < cfgWebParts.length; i++) {
                        _loop_11(i);
                    }
                    resolve();
                });
            });
        };
        this.updateLists = function (cfgLists) {
            return new Promise(function (resolve, reject) {
                var request = function (idx, resolve) {
                    var cfgList = cfgLists[idx];
                    if (_this._targetName) {
                        if (cfgList.ListInformation.Title.toLowerCase() != _this._targetName) {
                            request(idx + 1, resolve);
                            return;
                        }
                    }
                    if (cfgList) {
                        (new lib_1.Web(_this._webUrl))
                            .Lists(cfgList.ListInformation.Title)
                            .query({
                            Expand: ["ContentTypes", "Fields", "UserCustomActions", "Views"]
                        })
                            .execute(function (list) {
                            if (cfgList.TitleFieldDisplayName) {
                                for (var i = 0; i < list.Fields.results.length; i++) {
                                    var field = list.Fields.results[i];
                                    if (field.InternalName == "Title") {
                                        if (field.Title != cfgList.TitleFieldDisplayName) {
                                            field.update({ Title: cfgList.TitleFieldDisplayName }).execute(function () {
                                                console.log("[gd-sprest][List] The 'Title' field's display name was updated to '" + cfgList.TitleFieldDisplayName + "'.");
                                            });
                                        }
                                    }
                                }
                            }
                            _this.createFields(list.Fields, cfgList.CustomFields).then(function () {
                                _this.createContentTypes(list.ContentTypes, cfgList.ContentTypes).then(function () {
                                    _this.createViews(list.Views, cfgList.ViewInformation).then(function () {
                                        cfgList.onUpdated ? cfgList.onUpdated(list) : null;
                                        request(idx + 1, resolve);
                                    });
                                });
                            });
                            _this.createUserCustomActions(list.UserCustomActions, cfgList.UserCustomActions);
                        });
                    }
                    else {
                        resolve();
                    }
                };
                request(0, resolve);
            });
        };
        this.updateViews = function (views, cfgViews) {
            var counter = 0;
            return new Promise(function (resolve, reject) {
                var _loop_12 = function (i) {
                    var cfgView = cfgViews[i];
                    var view = views.getByTitle(cfgView.ViewName);
                    if (cfgView.ViewFields && cfgView.ViewFields.length > 0) {
                        console.log("[gd-sprest][View] Updating the view fields for the '" + cfgView.ViewName + "' view.");
                        view.ViewFields().removeAllViewFields().execute(true);
                        for (var i_2 = 0; i_2 < cfgView.ViewFields.length; i_2++) {
                            view.ViewFields().addViewField(cfgView.ViewFields[i_2]).execute(true);
                        }
                    }
                    if (cfgView.JSLink || cfgView.ViewQuery) {
                        var props = {};
                        console.log("[gd-sprest][View] Updating the view properties for the '" + cfgView.ViewName + "' view.");
                        cfgView.JSLink ? props["JSLink"] = cfgView.JSLink : null;
                        cfgView.ViewQuery ? props["ViewQuery"] = cfgView.ViewQuery : null;
                        view.update(props).execute(true);
                    }
                    view.done(function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        cfgView.onUpdated ? cfgView.onUpdated(view) : null;
                        if (++counter >= cfgViews.length) {
                            resolve();
                        }
                    });
                };
                for (var i = 0; i < cfgViews.length; i++) {
                    _loop_12(i);
                }
            });
        };
        this.uninstallSite = function () {
            return new Promise(function (resolve, reject) {
                console.log("[gd-sprest][uninstall] Loading the site information...");
                if (_this._configuration.CustomActionCfg == null || _this._configuration.CustomActionCfg.Site == null) {
                    resolve();
                    return;
                }
                (new lib_1.Site(_this._webUrl))
                    .query({
                    Expand: ["UserCustomActions"]
                })
                    .execute(function (site) {
                    _this.removeUserCustomActions(site.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Site : []).then(function () {
                        resolve(site);
                    });
                });
            });
        };
        this.uninstallWeb = function () {
            return new Promise(function (resolve, reject) {
                console.log("[gd-sprest][uninstall] Loading the web information...");
                (new lib_1.Web(_this._webUrl))
                    .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                    .execute(function (web) {
                    _this.removeFields(web.Fields, _this._configuration.Fields).then(function () {
                        _this.removeContentTypes(web.ContentTypes, _this._configuration.ContentTypes).then(function () {
                            _this.removeLists(web.Lists, _this._configuration.ListCfg).then(function () {
                                _this.removeUserCustomActions(web.UserCustomActions, _this._configuration.CustomActionCfg ? _this._configuration.CustomActionCfg.Web : null).then(function () {
                                    resolve();
                                });
                            });
                        });
                    });
                });
            });
        };
        this._configuration = cfg;
        this._webUrl = webUrl;
    }
    _SPConfig.prototype.install = function (callback, cfgType, targetName) {
        var _this = this;
        this._cfgType = cfgType;
        this._targetName = targetName ? targetName.toLowerCase() : null;
        this.installWeb().then(function () {
            _this.installSite().then(function () {
                _this.createWebParts();
                console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                if (callback && typeof (callback) === "function") {
                    callback();
                }
            });
        });
    };
    _SPConfig.prototype.uninstall = function (callback, cfgType, targetName) {
        var _this = this;
        this._cfgType = cfgType;
        this._targetName = targetName;
        this.uninstallWeb().then(function () {
            _this.uninstallSite().then(function () {
                _this.removeWebParts().then(function () {
                    console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");
                    if (callback && typeof (callback) === "function") {
                        callback();
                    }
                });
            });
        });
    };
    return _SPConfig;
}());
;
exports.SPConfig = _SPConfig;
//# sourceMappingURL=spCfg.js.map