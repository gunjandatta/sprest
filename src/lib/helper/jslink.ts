import {IHelperJSLink} from "../../definitions";
import {SPTypes} from "../../types";
/**
 * JSLink Helper Methods
 */
class _JSLinkHelper {
    /**
     * Global Variables
     */
    private static hideEventFl:boolean = false;

    /**
     * Field to Method Mapper
     */
    private static _fieldToMethodMapper = {
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

    /**
     * Methods
     */

    /**
     * Disables edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     * @param requireValueFl - Flag to only disable the field, if a value exists.
     */
    static disableEdit(ctx:any, field:any, requireValueFl?:boolean):string {
        let fieldValue = ctx.CurrentFieldValue;

        // Ensure a value exists
        if (fieldValue) {
            // Update the context, based on the field type
            switch (ctx.CurrentFieldSchema.Type) {
                case "MultiChoice":
                    let regExp = new RegExp(SPTypes.ClientTemplatesUtility.UserLookupDelimitString, "g");

                    // Update the field value
                    fieldValue = ctx.CurrentFieldValue
                        // Replace the delimiter
                        .replace(regExp, "; ")
                        // Trim the delimiter from the beginning
                        .replace(/^; /g, "")
                        // Trim the delimiter from the end
                        .replace(/; $/g, "");
                    break;
                case "Note":
                    // Replace the return characters
                    fieldValue = "<div>" + ctx.CurrentFieldValue.replace(/\n/g, "<br />") + "</div>";
                    break;
                case "User":
                case "UserMulti":
                    for (let i = 0; i < ctx.CurrentFieldValue.length; i++) {
                        let userValue = ctx.CurrentFieldValue[i];

                        // Add the user value
                        fieldValue +=
                            // User Lookup ID
                            userValue.EntityData.SPUserID +
                            // Delimiter
                            SPTypes.ClientTemplatesUtility.UserLookupDelimitString +
                            // User Lookup Value
                            userValue.DisplayText +
                            // Optional Delimiter
                            ((i == ctx.CurrentFieldValue.length - 1 ? "" : SPTypes.ClientTemplatesUtility.UserLookupDelimitString));
                    }
                    break;
            };

            // Update the current field value
            ctx.CurrentFieldValue = fieldValue;
        }

        // Determine the control mode
        let controlMode = SPTypes.ControlMode.Display;
        if(requireValueFl && (fieldValue == null || fieldValue == "")) {
            // Inherit the control mode
            controlMode = ctx.ControlMode;
        }

        // Return the display value of the field
        return _JSLinkHelper.renderField(ctx, field, controlMode);
    }

    /**
     * Disable quick edit for the specified field.
     * @param ctx - The client context.
     * @param field - The field to disable edit.
     */
    static disableQuickEdit(ctx:any, field:any) {
        // Ensure we are in grid edit mode
        if (ctx.inGridMode) {
            // Disable editing for this field
            field.AllowGridEditing = false;
            return "";
        }

        // Return the default field value html
        return _JSLinkHelper.renderField(ctx, field);
    }

    /**
     * Returns the list view.
     * @param ctx - The client context.
     */
    static getListView(ctx:any) {
        // Get the webpart
        let wp = _JSLinkHelper.getWebPart(ctx);
        if(wp) {
            // Find the list form table
            wp = wp.querySelector(".ms-formtable");
        }

        // Return the list view
        return wp;
    }

    /**
     * Returns the list view items.
     * @param ctx - The client context.
     */
    static getListViewItems(ctx:any) {
        // Return the list view items
        return ctx.ListData ? ctx.ListData.Row : [];
    }

    /**
     * Returns the selected list view items
     */
    static getListViewSelectedItems() {
        // Return the selected items
        return window["SP"].ListOperation.Selection.getSelectedItems();
    }

    /**
     * Returns the webpart containing the JSLink field/form/view.
     * @param ctx - The client context.
     */
    static getWebPart(ctx) {
        // Return the webpart
        return document.querySelector("#WebPart" + (ctx.FormUniqueId || ctx.wpq));
    }

    /**
     * Hides the specified field.
     * @param ctx - The client context.
     * @param field - The field to hide.
     */
    static hideField(ctx:any, field:any) {
        // Ensure the hide event has been created
        if(!this.hideEventFl) {
            // Set the flag
            this.hideEventFl = true;

            // Create the event
            window.addEventListener("load", () => {
                // Query for the elements to hide
                let fieldElements:any = document.querySelectorAll(".hide-field");
                for(let fieldElement of fieldElements) {
                    // Get the parent row
                    let parentRow = fieldElement.parentNode && fieldElement.parentNode.parentNode ? fieldElement.parentNode.parentNode : null;
                    if(parentRow) {
                        // Ensure the parent row exists
                        if(fieldElement.parentNode.getAttribute("data-field-name") != parentRow.getAttribute("data-field-name")) {
                            // Find the parent row
                            while(parentRow && parentRow.nodeName.toLowerCase() != "tr") {
                                // Update the parent node
                                parentRow = parentRow.parentNode;
                            }
                        }

                        // Hide the parent row
                        if(parentRow) {
                            parentRow.style.display = "none";
                        }
                    }
                }
            });
        }
    }

    /**
     * Removes the field and html from the page.
     * @param ctx - The client context.
     * @param field - The field to remove.
     */
    static removeField(ctx:any, field:any) {
        // Hide the field
        _JSLinkHelper.hideField(ctx, field);

        // Return an empty element
        return "<div class='hide-field'></div>";
    }

    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    static renderField(ctx, field, formType?:number) {
        // Determine the field type
        var fieldType = field ? field.Type : (ctx.CurrentFieldSchema ? ctx.CurrentFieldSchema.Type : null);

        // Ensure the form type is set
        formType = formType ? formType : ctx.ControlMode;

        // Ensure a field to method mapper exists
        if (this._fieldToMethodMapper[fieldType] && this._fieldToMethodMapper[fieldType][formType]) {
            // Return the default html for this field
            var defaultHtml = this._fieldToMethodMapper[fieldType][formType](ctx);
            if (defaultHtml) { return defaultHtml; }
        }

        // Set the field renderer based on the field type
        var field = ctx.CurrentFieldSchema;
        var fieldRenderer = null;
        switch (field.Type) {
            case "AllDayEvent": fieldRenderer = new window["AllDayEventFieldRenderer"](field.Name); break;
            case "Attachments": fieldRenderer = new window["AttachmentFieldRenderer"](field.Name); break;
            case "BusinessData": fieldRenderer = new window["BusinessDataFieldRenderer"](field.Name); break;
            case "Computed": fieldRenderer = new window["ComputedFieldRenderer"](field.Name); break;
            case "CrossProjectLink": fieldRenderer = new window["ProjectLinkFieldRenderer"](field.Name); break;
            case "Currency": fieldRenderer = new window["NumberFieldRenderer"](field.Name); break;
            case "DateTime": fieldRenderer = new window["DateTimeFieldRenderer"](field.Name); break;
            case "Lookup": fieldRenderer = new window["LookupFieldRenderer"](field.Name); break;
            case "LookupMulti": fieldRenderer = new window["LookupFieldRenderer"](field.Name); break;
            case "Note": fieldRenderer = new window["NoteFieldRenderer"](field.Name); break;
            case "Number": fieldRenderer = new window["NumberFieldRenderer"](field.Name); break;
            case "Recurrence": fieldRenderer = new window["RecurrenceFieldRenderer"](field.Name); break;
            case "Text": fieldRenderer = new window["TextFieldRenderer"](field.Name); break;
            case "URL": fieldRenderer = new window["UrlFieldRenderer"](field.Name); break;
            case "User": fieldRenderer = new window["UserFieldRenderer"](field.Name); break;
            case "UserMulti": fieldRenderer = new window["UserFieldRenderer"](field.Name); break;
            case "WorkflowStatus": fieldRenderer = new window["RawFieldRenderer"](field.Name); break;
        };

        // Get the current item
        var currentItem = ctx.CurrentItem || ctx.ListData.Items[0];

        // Return the item's field value html
        return fieldRenderer ? fieldRenderer.RenderField(ctx, field, currentItem, ctx.ListSchema) : currentItem[field.Name];
    }
}
export const JSLinkHelper:IHelperJSLink = <any>(new _JSLinkHelper());