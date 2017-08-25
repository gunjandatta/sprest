"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var __1 = require("..");
/**
 * JSLink Helper Methods
 */
exports.JSLinkHelper = {
    /**
     * Global Variables
     */
    hideEventFl: false,
    /**
     * Field to Method Mapper
     * 1 - Display Form
     * 2 - Edit Form
     * 3 - New Form
     * 4 - View
     */
    _fieldToMethodMapper: {
        'Attachments': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPFieldAttachments_Default"],
            2: __1.ContextInfo.window["SPFieldAttachments_Default"],
            3: __1.ContextInfo.window["SPFieldAttachments_Default"]
        },
        'Boolean': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPField_FormDisplay_DefaultNoEncode"],
            2: __1.ContextInfo.window["SPFieldBoolean_Edit"],
            3: __1.ContextInfo.window["SPFieldBoolean_Edit"]
        },
        'Currency': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: __1.ContextInfo.window["SPFieldNumber_Edit"],
            3: __1.ContextInfo.window["SPFieldNumber_Edit"]
        },
        'Calculated': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: __1.ContextInfo.window["SPField_FormDisplay_Empty"],
            3: __1.ContextInfo.window["SPField_FormDisplay_Empty"]
        },
        'Choice': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: __1.ContextInfo.window["SPFieldChoice_Edit"],
            3: __1.ContextInfo.window["SPFieldChoice_Edit"]
        },
        'Computed': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: __1.ContextInfo.window["SPField_FormDisplay_Default"],
            3: __1.ContextInfo.window["SPField_FormDisplay_Default"]
        },
        'DateTime': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPFieldDateTime_Display"],
            2: __1.ContextInfo.window["SPFieldDateTime_Edit"],
            3: __1.ContextInfo.window["SPFieldDateTime_Edit"]
        },
        'File': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPFieldFile_Display"],
            2: __1.ContextInfo.window["SPFieldFile_Edit"],
            3: __1.ContextInfo.window["SPFieldFile_Edit"]
        },
        'Integer': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: __1.ContextInfo.window["SPFieldNumber_Edit"],
            3: __1.ContextInfo.window["SPFieldNumber_Edit"]
        },
        'Lookup': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPFieldLookup_Display"],
            2: __1.ContextInfo.window["SPFieldLookup_Edit"],
            3: __1.ContextInfo.window["SPFieldLookup_Edit"]
        },
        'LookupMulti': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPFieldLookup_Display"],
            2: __1.ContextInfo.window["SPFieldLookup_Edit"],
            3: __1.ContextInfo.window["SPFieldLookup_Edit"]
        },
        'MultiChoice': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: __1.ContextInfo.window["SPFieldMultiChoice_Edit"],
            3: __1.ContextInfo.window["SPFieldMultiChoice_Edit"]
        },
        'Note': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPFieldNote_Display"],
            2: __1.ContextInfo.window["SPFieldNote_Edit"],
            3: __1.ContextInfo.window["SPFieldNote_Edit"]
        },
        'Number': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: __1.ContextInfo.window["SPFieldNumber_Edit"],
            3: __1.ContextInfo.window["SPFieldNumber_Edit"]
        },
        'Text': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPField_FormDisplay_Default"],
            2: __1.ContextInfo.window["SPFieldText_Edit"],
            3: __1.ContextInfo.window["SPFieldText_Edit"]
        },
        'URL': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPFieldUrl_Display"],
            2: __1.ContextInfo.window["SPFieldUrl_Edit"],
            3: __1.ContextInfo.window["SPFieldUrl_Edit"]
        },
        'User': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPFieldUser_Display"],
            2: __1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"],
            3: __1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"]
        },
        'UserMulti': {
            4: __1.ContextInfo.window["RenderFieldValueDefault"],
            1: __1.ContextInfo.window["SPFieldUserMulti_Display"],
            2: __1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"],
            3: __1.ContextInfo.window["SPClientPeoplePickerCSRTemplate"]
        }
    },
    /**
     * Methods
     */
    /**
     * Disables edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     * @param requireValueFl - Flag to only disable the field, if a value exists.
     */
    disableEdit: function (ctx, field, requireValueFl) {
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
        return exports.JSLinkHelper.renderField(ctx, field, controlMode);
    },
    /**
     * Disable quick edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     */
    disableQuickEdit: function (ctx, field) {
        // Ensure we are in grid edit mode
        if (ctx.inGridMode) {
            // Disable editing for this field
            field.AllowGridEditing = false;
            return "";
        }
        // Return the default field value html
        return exports.JSLinkHelper.renderField(ctx, field);
    },
    /**
     * Returns the list view.
     * @param ctx - The client context.
     */
    getListView: function (ctx) {
        // Get the webpart
        var wp = exports.JSLinkHelper.getWebPart(ctx);
        if (wp) {
            // Find the list form table
            wp = wp.querySelector(".ms-formtable");
        }
        // Return the list view
        return wp;
    },
    /**
     * Returns the list view items.
     * @param ctx - The client context.
     */
    getListViewItems: function (ctx) {
        // Return the list view items
        return ctx.ListData ? ctx.ListData.Row : [];
    },
    /**
     * Returns the selected list view items
     */
    getListViewSelectedItems: function () {
        // Return the selected items
        return __1.ContextInfo.window["SP"].ListOperation.Selection.getSelectedItems();
    },
    /**
     * Returns the webpart containing the JSLink field/form/view.
     * @param ctx - The client context.
     */
    getWebPart: function (ctx) {
        // Return the webpart
        return document.querySelector("#WebPart" + (ctx.FormUniqueId || ctx.wpq));
    },
    /**
     * Hides the specified field.
     * @param ctx - The client context.
     * @param field - The field to hide.
     */
    hideField: function (ctx, field) {
        // Ensure the hide event has been created
        if (!exports.JSLinkHelper.hideEventFl) {
            // Set the flag
            exports.JSLinkHelper.hideEventFl = true;
            // Create the event
            __1.ContextInfo.window.addEventListener("load", function () {
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
    },
    /**
     * Removes the field and html from the page.
     * @param ctx - The client context.
     * @param field - The field to remove.
     */
    removeField: function (ctx, field) {
        // Hide the field
        exports.JSLinkHelper.hideField(ctx, field);
        // Return an empty element
        return "<div class='hide-field'></div>";
    },
    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    renderField: function (ctx, field, formType) {
        // Determine the field type
        var fieldType = field ? field.Type : (ctx.CurrentFieldSchema ? ctx.CurrentFieldSchema.Type : null);
        // Ensure the form type is set
        formType = formType ? formType : ctx.ControlMode;
        // Ensure a field to method mapper exists
        if (exports.JSLinkHelper._fieldToMethodMapper[fieldType] && exports.JSLinkHelper._fieldToMethodMapper[fieldType][formType]) {
            // Return the default html for this field
            var defaultHtml = exports.JSLinkHelper._fieldToMethodMapper[fieldType][formType](ctx);
            if (defaultHtml) {
                return defaultHtml;
            }
        }
        // Set the field renderer based on the field type
        var field = ctx.CurrentFieldSchema;
        var fieldRenderer = null;
        switch (field.Type) {
            case "AllDayEvent":
                fieldRenderer = new __1.ContextInfo.window["AllDayEventFieldRenderer"](field.Name);
                break;
            case "Attachments":
                fieldRenderer = new __1.ContextInfo.window["AttachmentFieldRenderer"](field.Name);
                break;
            case "BusinessData":
                fieldRenderer = new __1.ContextInfo.window["BusinessDataFieldRenderer"](field.Name);
                break;
            case "Computed":
                fieldRenderer = new __1.ContextInfo.window["ComputedFieldRenderer"](field.Name);
                break;
            case "CrossProjectLink":
                fieldRenderer = new __1.ContextInfo.window["ProjectLinkFieldRenderer"](field.Name);
                break;
            case "Currency":
                fieldRenderer = new __1.ContextInfo.window["NumberFieldRenderer"](field.Name);
                break;
            case "DateTime":
                fieldRenderer = new __1.ContextInfo.window["DateTimeFieldRenderer"](field.Name);
                break;
            case "Lookup":
                fieldRenderer = new __1.ContextInfo.window["LookupFieldRenderer"](field.Name);
                break;
            case "LookupMulti":
                fieldRenderer = new __1.ContextInfo.window["LookupFieldRenderer"](field.Name);
                break;
            case "Note":
                fieldRenderer = new __1.ContextInfo.window["NoteFieldRenderer"](field.Name);
                break;
            case "Number":
                fieldRenderer = new __1.ContextInfo.window["NumberFieldRenderer"](field.Name);
                break;
            case "Recurrence":
                fieldRenderer = new __1.ContextInfo.window["RecurrenceFieldRenderer"](field.Name);
                break;
            case "Text":
                fieldRenderer = new __1.ContextInfo.window["TextFieldRenderer"](field.Name);
                break;
            case "URL":
                fieldRenderer = new __1.ContextInfo.window["UrlFieldRenderer"](field.Name);
                break;
            case "User":
                fieldRenderer = new __1.ContextInfo.window["UserFieldRenderer"](field.Name);
                break;
            case "UserMulti":
                fieldRenderer = new __1.ContextInfo.window["UserFieldRenderer"](field.Name);
                break;
            case "WorkflowStatus":
                fieldRenderer = new __1.ContextInfo.window["RawFieldRenderer"](field.Name);
                break;
        }
        ;
        // Get the current item
        var currentItem = ctx.CurrentItem || ctx.ListData.Items[0];
        // Return the item's field value html
        return fieldRenderer ? fieldRenderer.RenderField(ctx, field, currentItem, ctx.ListSchema) : currentItem[field.Name];
    }
};
//# sourceMappingURL=jslink.js.map