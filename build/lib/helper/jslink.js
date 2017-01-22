"use strict";
var types_1 = require("../../types");
/**
 * JSLink Helper Methods
 */
var _JSLinkHelper = (function () {
    function _JSLinkHelper() {
    }
    /**
     * Methods
     */
    /**
     * Disables edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     * @param requireValueFl - Flag to only disable the field, if a value exists.
     */
    _JSLinkHelper.disableEdit = function (ctx, field, requireValueFl) {
        var fieldValue = ctx.CurrentFieldValue;
        // Ensure a value exists
        if (fieldValue) {
            // Update the context, based on the field type
            switch (ctx.CurrentFieldSchema.Type) {
                case "MultiChoice":
                    var regExp = new RegExp(types_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString, "g");
                    // Update the field value
                    fieldValue = ctx.CurrentFieldValue
                        .replace(regExp, "; ")
                        .replace(/^; /g, "")
                        .replace(/; $/g, "");
                    break;
                case "Note":
                    // Replace the return characters
                    fieldValue = "<div>" + ctx.CurrentFieldValue.replace(/\n/g, "<br />") + "</div>";
                    break;
                case "User":
                case "UserMulti":
                    for (var i = 0; i < ctx.CurrentFieldValue.length; i++) {
                        var userValue = ctx.CurrentFieldValue[i];
                        // Add the user value
                        fieldValue +=
                            // User Lookup ID
                            userValue.EntityData.SPUserID +
                                // Delimiter
                                types_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString +
                                // User Lookup Value
                                userValue.DisplayText +
                                // Optional Delimiter
                                ((i == ctx.CurrentFieldValue.length - 1 ? "" : types_1.SPTypes.ClientTemplatesUtility.UserLookupDelimitString));
                    }
                    break;
            }
            ;
            // Update the current field value
            ctx.CurrentFieldValue = fieldValue;
        }
        // Determine the control mode
        var controlMode = types_1.SPTypes.ControlMode.Display;
        if (requireValueFl && (fieldValue == null || fieldValue == "")) {
            // Inherit the control mode
            controlMode = ctx.ControlMode;
        }
        // Return the display value of the field
        return _JSLinkHelper.renderField(ctx, field, controlMode);
    };
    /**
     * Disable quick edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     */
    _JSLinkHelper.disableQuickEdit = function (ctx, field) {
        // Ensure we are in grid edit mode
        if (ctx.inGridMode) {
            // Disable editing for this field
            field.AllowGridEditing = false;
            return "";
        }
        // Return the default field value html
        return _JSLinkHelper.renderField(ctx, field);
    };
    /**
     * Returns the list view.
     * @param ctx - The client context.
     */
    _JSLinkHelper.getListView = function (ctx) {
        // Get the webpart
        var wp = _JSLinkHelper.getWebPart(ctx);
        if (wp) {
            // Find the list form table
            wp = wp.querySelector(".ms-formtable");
        }
        // Return the list view
        return wp;
    };
    /**
     * Returns the list view items.
     * @param ctx - The client context.
     */
    _JSLinkHelper.getListViewItems = function (ctx) {
        // Return the list view items
        return ctx.ListData ? ctx.ListData.Row : [];
    };
    /**
     * Returns the selected list view items
     */
    _JSLinkHelper.getListViewSelectedItems = function () {
        // Return the selected items
        return window["SP"].ListOperation.Selection.getSelectedItems();
    };
    /**
     * Returns the webpart containing the JSLink field/form/view.
     * @param ctx - The client context.
     */
    _JSLinkHelper.getWebPart = function (ctx) {
        // Return the webpart
        return document.querySelector("#WebPart" + (ctx.FormUniqueId || ctx.wpq));
    };
    /**
     * Hides the specified field.
     * @param ctx - The client context.
     * @param field - The field to hide.
     */
    _JSLinkHelper.hideField = function (ctx, field) {
        // Ensure the hide event has been created
        if (!this.hideEventFl) {
            // Set the flag
            this.hideEventFl = true;
            // Create the event
            window.addEventListener("load", function () {
                // Query for the elements to hide
                var fieldElements = document.querySelectorAll(".hide-field");
                for (var _i = 0, fieldElements_1 = fieldElements; _i < fieldElements_1.length; _i++) {
                    var fieldElement = fieldElements_1[_i];
                    // Get the parent row
                    var parentRow = fieldElement.parentNode && fieldElement.parentNode.parentNode ? fieldElement.parentNode.parentNode : null;
                    if (parentRow) {
                        // Ensure the parent row exists
                        if (fieldElement.parentNode.getAttribute("data-field-name") != parentRow.getAttribute("data-field-name")) {
                            // Find the parent row
                            while (parentRow && parentRow.nodeName.toLowerCase() != "tr") {
                                // Update the parent node
                                parentRow = parentRow.parentNode;
                            }
                        }
                        // Hide the parent row
                        if (parentRow) {
                            parentRow.style.display = "none";
                        }
                    }
                }
            });
        }
    };
    /**
     * Removes the field and html from the page.
     * @param ctx - The client context.
     * @param field - The field to remove.
     */
    _JSLinkHelper.removeField = function (ctx, field) {
        // Hide the field
        _JSLinkHelper.hideField(ctx, field);
        // Return an empty element
        return "<div class='hide-field'></div>";
    };
    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    _JSLinkHelper.renderField = function (ctx, field, formType) {
        // Determine the field type
        var fieldType = field ? field.Type : (ctx.CurrentFieldSchema ? ctx.CurrentFieldSchema.Type : null);
        // Ensure the form type is set
        formType = formType ? formType : ctx.ControlMode;
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
     * Global Variables
     */
    _JSLinkHelper.hideEventFl = false;
    /**
     * Field to Method Mapper
     */
    _JSLinkHelper._fieldToMethodMapper = {
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
    return _JSLinkHelper;
}());
exports.JSLinkHelper = (new _JSLinkHelper());
//# sourceMappingURL=jslink.js.map