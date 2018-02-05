"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var _JSLink = (function () {
    function _JSLink(cfg) {
        if (cfg) {
            this._baseViewID = cfg.BaseViewID;
            this._listTemplateType = cfg.ListTemplateType;
            this._onPostRender = cfg.OnPostRender;
            this._onPreRender = cfg.OnPreRender;
            this._templates = cfg.Templates;
        }
    }
    Object.defineProperty(_JSLink.prototype, "BaseViewID", {
        set: function (value) { this._baseViewID = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "ListTemplateType", {
        set: function (value) { this._listTemplateType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "OnPostRender", {
        set: function (value) { this._onPostRender = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "OnPreRender", {
        set: function (value) { this._onPreRender = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_JSLink.prototype, "Templates", {
        set: function (value) { this._templates = value; },
        enumerable: true,
        configurable: true
    });
    _JSLink.prototype.getTemplate = function () {
        var template = {};
        if (this._baseViewID) {
            template.BaseViewID = this._baseViewID;
        }
        if (this._listTemplateType) {
            template.ListTemplateType = this._listTemplateType;
        }
        if (this._onPostRender) {
            template.OnPostRender = this._onPostRender;
        }
        if (this._onPreRender) {
            template.OnPreRender = this._onPreRender;
        }
        if (this._templates) {
            template.Templates = this._templates;
        }
        if (template.Templates && template.Templates.Fields) {
            var fields = {};
            for (var _i = 0, _a = template.Templates.Fields; _i < _a.length; _i++) {
                var field = _a[_i];
                fields[field.Name] = {};
                if (field.DisplayForm) {
                    fields[field.Name].DisplayForm = field.DisplayForm;
                }
                if (field.EditForm) {
                    fields[field.Name].EditForm = field.EditForm;
                }
                if (field.NewForm) {
                    fields[field.Name].NewForm = field.NewForm;
                }
                if (field.View) {
                    fields[field.Name].View = field.View;
                }
            }
            template.Templates.Fields = fields;
        }
        return template;
    };
    _JSLink.prototype.register = function () {
        var templateManager = lib_1.ContextInfo.window.SPClientTemplates;
        templateManager = templateManager ? templateManager.TemplateManager : null;
        if (templateManager) {
            templateManager.RegisterTemplateOverrides(this.getTemplate());
        }
    };
    return _JSLink;
}());
exports.JSLink = _JSLink;
//# sourceMappingURL=jslink.js.map