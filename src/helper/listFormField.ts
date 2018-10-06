import { Helper, Site, SPTypes, Types, Web } from "..";
import {
    IListFormField, IListFormFieldInfo, IListFormLookupFieldInfo,
    IListFormMMSFieldInfo, IListFormUrlFieldInfo, IListFormDateFieldInfo,
    IListFormTextFieldInfo, IListFormUserFieldInfo, IListFormChoiceFieldInfo,
    IListFormNumberFieldInfo
} from "./types";

/**
 * List Form Field
 */
export const ListFormField: IListFormField = {
    // Method to create an instance of the list form field
    create: (props: IListFormFieldInfo): PromiseLike<IListFormFieldInfo> => {
        let _fieldInfo: IListFormFieldInfo = props || {} as any;
        let _reject: (response: any) => void = null;
        let _resolve: (info: IListFormFieldInfo) => void = null;

        // Load the field
        let load = () => {
            // See if the field exists
            if (_fieldInfo.field) {
                // Process the field
                processField();
            }
            // Else, load the field from the information provided
            else {
                // Get the web
                Web(_fieldInfo.webUrl)
                    // Get the list
                    .Lists(_fieldInfo.listName)
                    // Get the fields
                    .Fields()
                    // Get the field by its internal name
                    .getByInternalNameOrTitle(_fieldInfo.name)
                    // Execute the request
                    .execute((field) => {
                        // Save the field
                        _fieldInfo.field = field;

                        // Process the field
                        processField();
                    }, _reject);
            }
        }

        // Method to proces the field and save its information
        let processField = () => {
            // Update the field information
            _fieldInfo.defaultValue = _fieldInfo.field.DefaultValue;
            _fieldInfo.readOnly = _fieldInfo.field.ReadOnlyField;
            _fieldInfo.required = _fieldInfo.field.Required ? true : false;
            _fieldInfo.title = _fieldInfo.field.Title;
            _fieldInfo.type = _fieldInfo.field.FieldTypeKind as number;
            _fieldInfo.typeAsString = _fieldInfo.field.TypeAsString;

            // Update the field info, based on the type
            switch (_fieldInfo.type) {
                // Choice
                case SPTypes.FieldType.Choice:
                case SPTypes.FieldType.MultiChoice:
                    let choices = (_fieldInfo.field as Types.SP.IFieldChoice).Choices;
                    (_fieldInfo as IListFormChoiceFieldInfo).choices = (choices ? choices.results : null) || [];
                    (_fieldInfo as IListFormChoiceFieldInfo).multi = _fieldInfo.type == SPTypes.FieldType.MultiChoice;
                    break;

                // Date/Time
                case SPTypes.FieldType.DateTime:
                    let fldDate = _fieldInfo.field as Types.SP.IFieldDateTime;
                    (_fieldInfo as IListFormDateFieldInfo).showTime = fldDate.DisplayFormat == SPTypes.DateFormat.DateTime;
                    break;

                // Lookup
                case SPTypes.FieldType.Lookup:
                    let fldLookup = _fieldInfo.field as Types.SP.IFieldLookup;
                    (_fieldInfo as IListFormLookupFieldInfo).lookupField = fldLookup.LookupField;
                    (_fieldInfo as IListFormLookupFieldInfo).lookupListId = fldLookup.LookupList;
                    (_fieldInfo as IListFormLookupFieldInfo).lookupWebId = fldLookup.LookupWebId;
                    (_fieldInfo as IListFormLookupFieldInfo).multi = fldLookup.AllowMultipleValues;
                    break;

                // Number
                case SPTypes.FieldType.Number:
                    let fldNumber = _fieldInfo.field as Types.SP.IFieldNumber;
                    let startIdx = fldNumber.SchemaXml.indexOf('Decimals="') + 10;
                    (_fieldInfo as IListFormNumberFieldInfo).decimals = startIdx > 10 ? parseInt(fldNumber.SchemaXml.substr(startIdx, fldNumber.SchemaXml.substr(startIdx).indexOf('"'))) : 0;
                    (_fieldInfo as IListFormNumberFieldInfo).maxValue = fldNumber.MaximumValue;
                    (_fieldInfo as IListFormNumberFieldInfo).minValue = fldNumber.MinimumValue;
                    (_fieldInfo as IListFormNumberFieldInfo).showAsPercentage = fldNumber.SchemaXml.indexOf('Percentage="TRUE"') > 0;
                    break;

                // Note
                case SPTypes.FieldType.Note:
                    let fldNote = _fieldInfo.field as Types.SP.IFieldNote;
                    (_fieldInfo as IListFormTextFieldInfo).multiline = true;
                    (_fieldInfo as IListFormTextFieldInfo).richText = fldNote.RichText;
                    (_fieldInfo as IListFormTextFieldInfo).rows = fldNote.NumberOfLines;
                    break;

                // Text
                case SPTypes.FieldType.Text:
                    (_fieldInfo as IListFormTextFieldInfo).multiline = false;
                    (_fieldInfo as IListFormTextFieldInfo).richText = false;
                    (_fieldInfo as IListFormTextFieldInfo).rows = 1;
                    break;

                // User
                case SPTypes.FieldType.User:
                    let fldUser = _fieldInfo.field as Types.SP.IFieldUser;
                    (_fieldInfo as IListFormUserFieldInfo).allowGroups = fldUser.SelectionMode == SPTypes.FieldUserSelectionType.PeopleAndGroups;
                    (_fieldInfo as IListFormUserFieldInfo).multi = fldUser.AllowMultipleValues;
                    break;

                // Default
                default:
                    // See if this is an MMS field
                    if (_fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                        let fldMMS = _fieldInfo.field as Types.SP.IFieldManagedMetadata;
                        (_fieldInfo as IListFormMMSFieldInfo).multi = fldMMS.AllowMultipleValues;
                        (_fieldInfo as IListFormMMSFieldInfo).termId = fldMMS.IsAnchorValid ? fldMMS.AnchorId : fldMMS.TermSetId;
                        (_fieldInfo as IListFormMMSFieldInfo).termSetId = fldMMS.TermSetId;
                        (_fieldInfo as IListFormMMSFieldInfo).termStoreId = fldMMS.SspId;
                    }
                    break;
            }

            // Resolve the promise
            _resolve(_fieldInfo);
        }

        // Return a promise
        return new Promise((resolve, reject) => {
            // Save the methods
            _resolve = resolve;
            _reject = reject;

            // See if the field exists
            if (_fieldInfo.field) {
                // Process the field
                processField();
            } else {
                // Load the field
                load();
            }
        });
    },

    // Method to load the lookup data
    loadLookupData: (info: IListFormLookupFieldInfo, queryTop?: number): PromiseLike<Array<Types.SP.IListItemQueryResult>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the current site collection
            Site()
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
                        }, reject);
                }, reject);
        });
    },

    // Method to load the mms data
    loadMMSData: (info: IListFormMMSFieldInfo): PromiseLike<Array<Helper.Types.ITermInfo>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the term set
            Helper.Taxonomy.getTermSetById(info.termStoreId, info.termSetId).then(termSet => {
                // Get the target root term
                let root = Helper.Taxonomy.findById(termSet, info.termId);

                // See if the root node doesn't exist
                if (root == null) {
                    // Set the root to the term set
                    root = Helper.Taxonomy.findById(termSet, info.termSetId);
                }

                // Resolve the request
                resolve(Helper.Taxonomy.toArray(root));
            }, reject);
        });
    },

    // Method to load the mms value field
    loadMMSValueField: (info: IListFormMMSFieldInfo): PromiseLike<Types.SP.IFieldNote> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the web
            Web(info.webUrl)
                // Get the list
                .Lists(info.listName)
                // Get the fields
                .Fields()
                // Get the hidden field
                .getByInternalNameOrTitle(info.name + "_0")
                // Execute the request
                .execute(
                    // Success
                    field => {
                        // Resolve the promise
                        resolve(field as any);
                    },
                    // Error
                    () => {
                        // Reject w/ a message
                        reject("Unable to find the hidden value field for '" + info.name + "'.");
                    }
                );
        });
    }
};