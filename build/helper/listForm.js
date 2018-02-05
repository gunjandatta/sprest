"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var parse_1 = require("./parse");
var _ListForm = (function () {
    function _ListForm(props) {
        var _this = this;
        this._cacheData = null;
        this._info = null;
        this._props = null;
        this._resolve = null;
        this.load = function () {
            _this._info = {
                item: _this._props.item,
                query: _this._props.query || {}
            };
            _this.loadFromCache();
            _this.loadListData().then(function () {
                if (_this._props.fields) {
                    _this.processFields();
                    _this.loadItem();
                }
                else {
                    _this.loadDefaultContentType();
                }
            });
        };
        this.loadDefaultContentType = function () {
            if (_this._cacheData && _this._cacheData.ct) {
                try {
                    var ct = parse_1.parse(_this._cacheData.ct);
                    _this.loadDefaultFields(ct.results[0]);
                    return;
                }
                catch (_a) {
                    sessionStorage.removeItem(_this._props.cacheKey);
                }
            }
            _this._info.list.ContentTypes()
                .query({
                Expand: ["FieldLinks"],
                Top: 1
            })
                .execute(function (ct) {
                if (_this._props.cacheKey) {
                    _this._cacheData = _this._cacheData || {};
                    _this._cacheData.ct = ct.stringify();
                    sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                }
                _this.loadDefaultFields(ct.results[0]);
            });
        };
        this.loadDefaultFields = function (ct) {
            var fields = ct ? ct.FieldLinks.results : [];
            var formFields = {};
            for (var i = 0; i < fields.length; i++) {
                var fieldLink = fields[i];
                var field = _this._info.fields[fieldLink.Name];
                if (field) {
                    if (field.InternalName == "ContentType") {
                        continue;
                    }
                    if (field.Hidden || fieldLink.Hidden) {
                        continue;
                    }
                    formFields[field.InternalName] = field;
                }
            }
            _this._info.fields = formFields;
            _this.loadItem();
        };
        this.loadFieldData = function (fields) {
            _this._info.fields = {};
            for (var i = 0; i < fields.results.length; i++) {
                var field = fields.results[i];
                _this._info.fields[field.InternalName] = field;
            }
        };
        this.loadFromCache = function () {
            if (_this._props.cacheKey) {
                var data = sessionStorage.getItem(_this._props.cacheKey);
                if (data) {
                    try {
                        _this._cacheData = JSON.parse(data);
                        _this._info = _this._info || {};
                        _this._info.list = parse_1.parse(_this._cacheData.list);
                        _this.loadFieldData(parse_1.parse(_this._cacheData.fields));
                    }
                    catch (_a) {
                        sessionStorage.removeItem(_this._props.cacheKey);
                    }
                }
            }
        };
        this.loadItem = function () {
            if (_this._info.item) {
                _this._resolve(_this._info);
            }
            else if (_this._props.itemId > 0) {
                _this._info.query = _this._props.query || {};
                _this._info.query.Select = _this._info.query.Select || ["*"];
                if (_this._props.loadAttachments) {
                    _this._info.query.Expand = _this._info.query.Expand || [];
                    _this._info.query.Expand.push("AttachmentFiles");
                    _this._info.query.Select.push("Attachments");
                    _this._info.query.Select.push("AttachmentFiles");
                }
                _this._info.list.Items(_this._props.itemId)
                    .query(_this._info.query)
                    .execute(function (item) {
                    _this._info.attachments = item.AttachmentFiles.results;
                    _this._info.item = item;
                    _this._resolve(_this._info);
                });
            }
            else {
                _this._resolve(_this._info);
            }
        };
        this.loadListData = function () {
            return new Promise(function (resolve, reject) {
                if (_this._info.list && _this._info.fields) {
                    resolve();
                    return;
                }
                var list = (new lib_1.Web(_this._props.webUrl))
                    .Lists(_this._props.listName)
                    .execute(function (list) {
                    _this._info.list = list;
                });
                list.Fields()
                    .execute(function (fields) {
                    if (_this._props.cacheKey) {
                        _this._cacheData = _this._cacheData || {};
                        _this._cacheData.fields = fields.stringify();
                        _this._cacheData.list = _this._info.list.stringify();
                        sessionStorage.setItem(_this._props.cacheKey, JSON.stringify(_this._cacheData));
                    }
                    _this.loadFieldData(fields);
                    resolve();
                });
            });
        };
        this.processFields = function () {
            var formFields = {};
            for (var i = 0; i < _this._props.fields.length; i++) {
                var field = _this._info.fields[_this._props.fields[i]];
                if (field) {
                    formFields[field.InternalName] = field;
                }
            }
            _this._info.fields = formFields;
        };
        this._props = props || {};
        this._props.fields = this._props.fields;
        return new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this.load();
        });
    }
    _ListForm.loadAttachments = function (info) {
        return new Promise(function (resolve, reject) {
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Items(itemId)
                    .AttachmentFiles()
                    .execute(function (attachments) {
                    resolve(attachments.results || []);
                });
            }
            else {
                resolve([]);
            }
        });
    };
    _ListForm.refreshItem = function (info) {
        return new Promise(function (resolve, reject) {
            info.list.Items(info.item.Id).query(info.query).execute(function (item) {
                info.item = item;
                resolve(info);
            });
        });
    };
    _ListForm.prototype.removeAttachments = function (info, attachments) {
        return new Promise(function (resolve, reject) {
            var web = new lib_1.Web(info.webUrl);
            for (var i = 0; i < attachments.length; i++) {
                var attachment = attachments[i];
                web.getFileByServerRelativeUrl(attachment.ServerRelativeUrl)
                    .delete()
                    .execute(true);
            }
            web.done(function () {
                resolve();
            });
        });
    };
    _ListForm.saveAttachments = function (info, attachmentInfo) {
        return new Promise(function (resolve, reject) {
            var itemId = info.item ? info.item.Id : info.itemId;
            if (itemId > 0) {
                var attachments = (new lib_1.Web(info.webUrl))
                    .Lists(info.listName)
                    .Items(itemId)
                    .AttachmentFiles();
                for (var i = 0; i < attachmentInfo.length; i++) {
                    var attachment = attachmentInfo[i];
                    attachments.add(attachment.name, attachment.data).execute(true);
                }
                attachments.done(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    resolve(args);
                });
            }
            else {
                resolve();
            }
        });
    };
    _ListForm.saveItem = function (info, formValues) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (info.item && info.item.update) {
                info.item.update(formValues).execute(function (response) {
                    _this.refreshItem(info).then(function (info) {
                        resolve(info);
                    });
                });
            }
            else {
                formValues["__metadata"] = { type: info.list.ListItemEntityTypeFullName };
                info.list.Items().add(formValues)
                    .execute(function (item) {
                    info.item = item;
                    _this.refreshItem(info).then(function (info) {
                        resolve(info);
                    });
                });
            }
        });
    };
    return _ListForm;
}());
exports.ListForm = _ListForm;
//# sourceMappingURL=listForm.js.map