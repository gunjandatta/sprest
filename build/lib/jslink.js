"use strict";
var types_1 = require("../types");
/**
 * JS Link
 */
var JSLink = (function () {
    function JSLink() {
    }
    Object.defineProperty(JSLink.prototype, "BaseViewID", {
        set: function (value) { this._baseViewID = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JSLink.prototype, "ListTemplateType", {
        set: function (value) { this._listTemplateType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JSLink.prototype, "OnPostRender", {
        set: function (value) { this._onPostRender = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JSLink.prototype, "OnPreRender", {
        set: function (value) { this._onPreRender = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JSLink.prototype, "Templates", {
        set: function (value) { this._templates = value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Methods
     */
    /**
     * Returns the CSR template.
     */
    JSLink.prototype.getTemplate = function () {
        var template = {};
        // Add the properties
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
        // See if there are fields
        if (template.Templates && template.Templates.Fields) {
            var fields = {};
            // Parse the fields
            for (var _i = 0, _a = template.Templates.Fields; _i < _a.length; _i++) {
                var field = _a[_i];
                // Add the field
                fields[field.Name] = {};
                // Add the field properties
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
            // Update the fields
            template.Templates.Fields = fields;
        }
        // Return the template
        return template;
    };
    /**
     * Method to get the form type
     * @param ctx - The client context.
     */
    JSLink.getFormType = function (ctx) {
        var formType = null;
        // Determine the form type
        switch (ctx.ControlMode) {
            case types_1.SPTypes.ControlMode.Display:
                formType = "DisplayForm";
                break;
            case types_1.SPTypes.ControlMode.Edit:
                formType = "EditForm";
                break;
            case types_1.SPTypes.ControlMode.New:
                formType = "NewForm";
                break;
            case types_1.SPTypes.ControlMode.View:
                formType = "View";
                break;
        }
        // Return the form type
        return formType;
    };
    /**
     * Method to register the CSR override
     */
    JSLink.prototype.register = function () {
        // Get the template manager
        var templateManager = window["SPClientTemplates"];
        templateManager = templateManager ? templateManager.TemplateManager : null;
        // Ensure it exists
        if (templateManager) {
            // Apply the customization
            templateManager.RegisterTemplateOverrides(this.getTemplate());
        }
    };
    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    JSLink.renderField = function (ctx, field, formType) {
        // Determine the field type
        var fieldType = field ? field.Type : (ctx.CurrentFieldSchema ? ctx.CurrentFieldSchema.Type : null);
        // Ensure the form type is set
        formType = formType ? formType : this.getFormType(ctx);
        // Ensure a field to method mapper exists
        if (this._fieldToMethodMapper[fieldType] && this._fieldToMethodMapper[fieldType][formType]) {
            // Return the default html for this field
            var defaultHtml = this._fieldToMethodMapper[fieldType][formType](ctx);
            if (defaultHtml) {
                return defaultHtml;
            }
        }
        // Set the field renderer based on the field type
        var field = ctx.CurrentFieldSchema;
        var fieldRenderer = null;
        switch (field.Type) {
            case "AllDayEvent":
                fieldRenderer = new window["AllDayEventFieldRenderer"](field.Name);
                break;
            case "Attachments":
                fieldRenderer = new window["AttachmentFieldRenderer"](field.Name);
                break;
            case "BusinessData":
                fieldRenderer = new window["BusinessDataFieldRenderer"](field.Name);
                break;
            case "Computed":
                fieldRenderer = new window["ComputedFieldRenderer"](field.Name);
                break;
            case "CrossProjectLink":
                fieldRenderer = new window["ProjectLinkFieldRenderer"](field.Name);
                break;
            case "Currency":
                fieldRenderer = new window["NumberFieldRenderer"](field.Name);
                break;
            case "DateTime":
                fieldRenderer = new window["DateTimeFieldRenderer"](field.Name);
                break;
            case "Lookup":
                fieldRenderer = new window["LookupFieldRenderer"](field.Name);
                break;
            case "LookupMulti":
                fieldRenderer = new window["LookupFieldRenderer"](field.Name);
                break;
            case "Note":
                fieldRenderer = new window["NoteFieldRenderer"](field.Name);
                break;
            case "Number":
                fieldRenderer = new window["NumberFieldRenderer"](field.Name);
                break;
            case "Recurrence":
                fieldRenderer = new window["RecurrenceFieldRenderer"](field.Name);
                break;
            case "Text":
                fieldRenderer = new window["TextFieldRenderer"](field.Name);
                break;
            case "URL":
                fieldRenderer = new window["UrlFieldRenderer"](field.Name);
                break;
            case "User":
                fieldRenderer = new window["UserFieldRenderer"](field.Name);
                break;
            case "UserMulti":
                fieldRenderer = new window["UserFieldRenderer"](field.Name);
                break;
            case "WorkflowStatus":
                fieldRenderer = new window["RawFieldRenderer"](field.Name);
                break;
        }
        ;
        // Get the current item
        var currentItem = ctx.CurrentItem || ctx.ListData.Items[0];
        // Return the item's field value html
        return fieldRenderer ? fieldRenderer.RenderField(ctx, field, currentItem, ctx.ListSchema) : currentItem[field.Name];
    };
    /**
     * Field to Method Mapper
     */
    JSLink._fieldToMethodMapper = {
        'Attachments': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPFieldAttachments_Default"],
            'EditForm': window["SPFieldAttachments_Default"],
            'NewForm': window["SPFieldAttachments_Default"]
        },
        'Boolean': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPField_FormDisplay_DefaultNoEncode"],
            'EditForm': window["SPFieldBoolean_Edit"],
            'NewForm': window["SPFieldBoolean_Edit"]
        },
        'Currency': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPField_FormDisplay_Default"],
            'EditForm': window["SPFieldNumber_Edit"],
            'NewForm': window["SPFieldNumber_Edit"]
        },
        'Calculated': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPField_FormDisplay_Default"],
            'EditForm': window["SPField_FormDisplay_Empty"],
            'NewForm': window["SPField_FormDisplay_Empty"]
        },
        'Choice': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPField_FormDisplay_Default"],
            'EditForm': window["SPFieldChoice_Edit"],
            'NewForm': window["SPFieldChoice_Edit"]
        },
        'Computed': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPField_FormDisplay_Default"],
            'EditForm': window["SPField_FormDisplay_Default"],
            'NewForm': window["SPField_FormDisplay_Default"]
        },
        'DateTime': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPFieldDateTime_Display"],
            'EditForm': window["SPFieldDateTime_Edit"],
            'NewForm': window["SPFieldDateTime_Edit"]
        },
        'File': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPFieldFile_Display"],
            'EditForm': window["SPFieldFile_Edit"],
            'NewForm': window["SPFieldFile_Edit"]
        },
        'Integer': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPField_FormDisplay_Default"],
            'EditForm': window["SPFieldNumber_Edit"],
            'NewForm': window["SPFieldNumber_Edit"]
        },
        'Lookup': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPFieldLookup_Display"],
            'EditForm': window["SPFieldLookup_Edit"],
            'NewForm': window["SPFieldLookup_Edit"]
        },
        'LookupMulti': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPFieldLookup_Display"],
            'EditForm': window["SPFieldLookup_Edit"],
            'NewForm': window["SPFieldLookup_Edit"]
        },
        'MultiChoice': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPField_FormDisplay_Default"],
            'EditForm': window["SPFieldMultiChoice_Edit"],
            'NewForm': window["SPFieldMultiChoice_Edit"]
        },
        'Note': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPFieldNote_Display"],
            'EditForm': window["SPFieldNote_Edit"],
            'NewForm': window["SPFieldNote_Edit"]
        },
        'Number': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPField_FormDisplay_Default"],
            'EditForm': window["SPFieldNumber_Edit"],
            'NewForm': window["SPFieldNumber_Edit"]
        },
        'Text': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPField_FormDisplay_Default"],
            'EditForm': window["SPFieldText_Edit"],
            'NewForm': window["SPFieldText_Edit"]
        },
        'URL': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPFieldUrl_Display"],
            'EditForm': window["SPFieldUrl_Edit"],
            'NewForm': window["SPFieldUrl_Edit"]
        },
        'User': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPFieldUser_Display"],
            'EditForm': window["SPClientPeoplePickerCSRTemplate"],
            'NewForm': window["SPClientPeoplePickerCSRTemplate"]
        },
        'UserMulti': {
            'View': window["RenderFieldValueDefault"],
            'DisplayForm': window["SPFieldUserMulti_Display"],
            'EditForm': window["SPClientPeoplePickerCSRTemplate"],
            'NewForm': window["SPClientPeoplePickerCSRTemplate"]
        }
    };
    return JSLink;
}());
exports.JSLink = JSLink;
//# sourceMappingURL=jslink.js.map