import { Site, Web } from "../lib";
import { SPTypes, Types } from "..";
import { Taxonomy } from "./taxonomy";
import * as ListFormFieldTypes from "./types";
declare var SP;

/**
 * List Form Field
 */
class _ListFormField {
    private _fieldInfo: ListFormFieldTypes.IListFormFieldInfo = null;
    private _resolve: (info: ListFormFieldTypes.IListFormFieldInfo) => void = null;

    /**
     * Constructor
     */
    constructor(props: ListFormFieldTypes.IListFormFieldInfo) {
        // Save the properties and field information
        this._fieldInfo = props || {} as any;

        // Return a promise
        return new Promise((resolve, reject) => {
            // Save the resolve method
            this._resolve = resolve;

            // See if the field exists
            if (this._fieldInfo.field) {
                // Process the field
                this.processField();
            } else {
                // Load the field
                this.load();
            }
        }) as any;
    }

    /**
     * Methods
     */

    // Method to create an instance of the list form field
    static create(props: ListFormFieldTypes.IListFormFieldInfo) {
        // Return an instance of the list form field
        return new _ListFormField(props);
    }

    // Load the field
    private load = () => {
        // See if the field exists
        if (this._fieldInfo.field) {
            // Process the field
            this.processField();
        }
        // Else, load the field from the information provided
        else {
            // Get the web
            (new Web(this._fieldInfo.webUrl))
                // Get the list
                .Lists(this._fieldInfo.listName)
                // Get the fields
                .Fields()
                // Get the field by its internal name
                .getByInternalNameOrTitle(this._fieldInfo.name)
                // Execute the request
                .execute((field) => {
                    // Save the field
                    this._fieldInfo.field = field;

                    // Process the field
                    this.processField();
                });
        }
    }

    // Method to load the lookup data
    static loadLookupData(info: ListFormFieldTypes.IListFormLookupFieldInfo, queryTop?: number): PromiseLike<Array<Types.SP.IListItemQueryResult>> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the current site collection
            (new Site())
                // Get the web containing the lookup list
                .openWebById(info.lookupWebId)
                // Execute the request
                .execute((web) => {
                    // Get the list
                    web.Lists()
                        // Get the list by id
                        .getById(info.lookupListId)
                        // Get the items
                        .Items()
                        // Set the query
                        .query({
                            GetAllItems: true,
                            Select: ["ID", info.lookupField],
                            Top: queryTop > 0 && queryTop <= 5000 ? queryTop : 500
                        })
                        // Execute the request
                        .execute((items) => {
                            // Resolve the promise
                            resolve(items.results);
                        });
                });
        });
    }

    // Method to load the mms data
    static loadMMSData(info: ListFormFieldTypes.IListFormMMSFieldInfo): PromiseLike<Array<any>> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the term set
            Taxonomy.getTermSetById(info.termStoreId, info.termSetId).then(termSet => {
                // Get the target root term
                let root = Taxonomy.findById(termSet, info.termId);

                // See if the root node doesn't exist
                if (root == null) {
                    // Set the root to the term set
                    root = Taxonomy.findById(termSet, info.termSetId);
                }

                // Resolve the request
                resolve(Taxonomy.toArray(root));
            });
        });
    }

    // Method to load the mms value field
    static loadMMSValueField(info: ListFormFieldTypes.IListFormMMSFieldInfo): PromiseLike<Types.SP.IFieldResult> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if we are allowing multiple values
            if (info.multi) {
                // Get the web
                (new Web(info.webUrl))
                    // Get the list
                    .Lists(info.listName)
                    // Get the fields
                    .Fields()
                    // Get the hidden field
                    .getByInternalNameOrTitle(info.name + "_0")
                    // Execute the request
                    .execute(field => {
                        // See if the field exists
                        if (field.existsFl) {
                            // Resolve the promise
                            resolve(field);
                        } else {
                            // Log
                            console.log("[gd-sprest] Unable to find the hidden value field for '" + info.name + "'.");
                        }
                    });
            } else {
                // Resolve the promise
                resolve();
            }
        });
    }

    // Method to proces the field and save its information
    private processField = () => {
        // Update the field information
        this._fieldInfo.defaultValue = this._fieldInfo.field.DefaultValue;
        this._fieldInfo.readOnly = this._fieldInfo.field.ReadOnlyField;
        this._fieldInfo.required = this._fieldInfo.field.Required ? true : false;
        this._fieldInfo.title = this._fieldInfo.field.Title;
        this._fieldInfo.type = this._fieldInfo.field.FieldTypeKind as number;
        this._fieldInfo.typeAsString = this._fieldInfo.field.TypeAsString;

        // Update the field info, based on the type
        switch (this._fieldInfo.type) {
            // Choice
            case SPTypes.FieldType.Choice:
            case SPTypes.FieldType.MultiChoice:
                let choices = (this._fieldInfo.field as Types.SP.IFieldChoice).Choices;
                (this._fieldInfo as ListFormFieldTypes.IListFormChoiceFieldInfo).choices = (choices ? choices.results : null) || [];
                (this._fieldInfo as ListFormFieldTypes.IListFormChoiceFieldInfo).multi = this._fieldInfo.type == SPTypes.FieldType.MultiChoice;
                break;

            // Date/Time
            case SPTypes.FieldType.DateTime:
                let fldDate = this._fieldInfo.field as Types.SP.IFieldDateTime;
                (this._fieldInfo as ListFormFieldTypes.IListFormDateFieldInfo).showTime = fldDate.DisplayFormat == SPTypes.DateFormat.DateTime;
                break;

            // Lookup
            case SPTypes.FieldType.Lookup:
                let fldLookup = this._fieldInfo.field as Types.SP.IFieldLookup;
                (this._fieldInfo as ListFormFieldTypes.IListFormLookupFieldInfo).lookupField = fldLookup.LookupField;
                (this._fieldInfo as ListFormFieldTypes.IListFormLookupFieldInfo).lookupListId = fldLookup.LookupList;
                (this._fieldInfo as ListFormFieldTypes.IListFormLookupFieldInfo).lookupWebId = fldLookup.LookupWebId;
                (this._fieldInfo as ListFormFieldTypes.IListFormLookupFieldInfo).multi = fldLookup.AllowMultipleValues;
                break;

            // Number
            case SPTypes.FieldType.Number:
                let fldNumber = this._fieldInfo.field as Types.SP.IFieldNumber;
                (this._fieldInfo as ListFormFieldTypes.IListFormNumberFieldInfo).maxValue = fldNumber.MaximumValue;
                (this._fieldInfo as ListFormFieldTypes.IListFormNumberFieldInfo).minValue = fldNumber.MinimumValue;
                if (fldNumber.ShowAsPercentage != undefined) {
                    (this._fieldInfo as ListFormFieldTypes.IListFormNumberFieldInfo).showAsPercentage = fldNumber.ShowAsPercentage;
                } else {
                    (this._fieldInfo as ListFormFieldTypes.IListFormNumberFieldInfo).showAsPercentage = fldNumber.SchemaXml.indexOf('Percentage="TRUE"') > 0;
                }
                break;

            // Note
            case SPTypes.FieldType.Note:
                let fldNote = this._fieldInfo.field as Types.SP.IFieldNote;
                (this._fieldInfo as ListFormFieldTypes.IListFormTextFieldInfo).multiline = true;
                (this._fieldInfo as ListFormFieldTypes.IListFormTextFieldInfo).richText = fldNote.RichText;
                (this._fieldInfo as ListFormFieldTypes.IListFormTextFieldInfo).rows = fldNote.NumberOfLines;
                break;

            // Text
            case SPTypes.FieldType.Text:
                (this._fieldInfo as ListFormFieldTypes.IListFormTextFieldInfo).multiline = false;
                (this._fieldInfo as ListFormFieldTypes.IListFormTextFieldInfo).richText = false;
                (this._fieldInfo as ListFormFieldTypes.IListFormTextFieldInfo).rows = 1;
                break;

            // User
            case SPTypes.FieldType.User:
                let fldUser = this._fieldInfo.field as Types.SP.IFieldUser;
                (this._fieldInfo as ListFormFieldTypes.IListFormUserFieldInfo).allowGroups = fldUser.SelectionMode == SPTypes.FieldUserSelectionType.PeopleAndGroups;
                (this._fieldInfo as ListFormFieldTypes.IListFormUserFieldInfo).multi = fldUser.AllowMultipleValues;
                break;

            // Default
            default:
                // See if this is an MMS field
                if (this._fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                    let fldMMS = this._fieldInfo.field as Types.SP.IFieldManagedMetadata;
                    (this._fieldInfo as ListFormFieldTypes.IListFormMMSFieldInfo).multi = fldMMS.AllowMultipleValues;
                    (this._fieldInfo as ListFormFieldTypes.IListFormMMSFieldInfo).termId = fldMMS.IsAnchorValid ? fldMMS.AnchorId : fldMMS.TermSetId;
                    (this._fieldInfo as ListFormFieldTypes.IListFormMMSFieldInfo).termSetId = fldMMS.TermSetId;
                    (this._fieldInfo as ListFormFieldTypes.IListFormMMSFieldInfo).termStoreId = fldMMS.SspId;
                }
                break;
        }

        // Resolve the promise
        this._resolve(this._fieldInfo);
    }
}
export const ListFormField: ListFormFieldTypes.IListFormField = _ListFormField as any;