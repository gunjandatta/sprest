import { Site, Web } from "../lib";
import { Types } from "../mapper";
import { SPTypes } from "../types";
declare var SP;

/**
 * List Form Field
 */
class _ListFormField {
    private _fieldInfo: Types.Helper.ListForm.IListFormFieldInfo = null;
    private _resolve: (info: Types.Helper.ListForm.IListFormFieldInfo) => void = null;

    /**
     * Constructor
     */
    constructor(props: Types.Helper.ListForm.IListFormFieldInfo) {
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
    static loadLookupData = (info: Types.Helper.ListForm.IListFormLookupFieldInfo, queryTop?: number): PromiseLike<Array<Types.IListItemQueryResult>> => {
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
    static loadMMSData = (info: Types.Helper.ListForm.IListFormMMSFieldInfo): PromiseLike<Array<any>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure the utility class is loaded
            SP.SOD.executeFunc("sp.js", "SP.Utilities.Utility", () => {
                // Ensure the taxonomy script is loaded
                SP.SOD.registerSod("sp.taxonomy.js", SP.Utilities.Utility.getLayoutsPageUrl("sp.taxonomy.js"));
                SP.SOD.executeFunc("sp.taxonomy.js", "SP.Taxonomy.TaxonomySession", () => {
                    // Load the terms
                    let context = SP.ClientContext.get_current();
                    let session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
                    let termStore = session.get_termStores().getById(info.termStoreId);
                    let termSet = termStore.getTermSet(info.termSetId);
                    let terms = termSet.getAllTerms();
                    context.load(terms);

                    // Execute the request
                    context.executeQueryAsync(
                        // Success
                        () => {
                            let termSet = [];

                            // Parse the terms
                            let enumerator = terms.getEnumerator();
                            while (enumerator.moveNext()) {
                                let term = enumerator.get_current();

                                // Add the term information
                                termSet.push({
                                    id: term.get_id().toString(),
                                    name: term.get_name(),
                                    path: term.get_pathOfTerm().replace(/;/g, "/")
                                });
                            }

                            // Sort the terms
                            termSet.sort((a, b) => {
                                if (a.path < b.path) { return -1; }
                                if (a.path > b.path) { return 1; }
                                return 0;
                            });

                            // Resolve the request
                            resolve(termSet);
                        },
                        // Error
                        () => {
                            // Log
                            console.log("[gd-sprest] Error getting the term set terms.");

                            // Resolve the request
                            resolve(termSet);
                        }
                    );
                });
            });
        });
    }

    // Method to load the mms value field
    static loadMMSValueField = (info: Types.Helper.ListForm.IListFormMMSFieldInfo): PromiseLike<Types.IFieldResult> => {
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
                let choices = (this._fieldInfo.field as Types.IFieldChoice).Choices;
                (this._fieldInfo as Types.Helper.ListForm.IListFormChoiceFieldInfo).choices = (choices ? choices.results : null) || [];
                (this._fieldInfo as Types.Helper.ListForm.IListFormChoiceFieldInfo).multi = this._fieldInfo.type == SPTypes.FieldType.MultiChoice;
                break;

            // Date/Time
            case SPTypes.FieldType.DateTime:
                let fldDate = this._fieldInfo.field as Types.IFieldDateTime;
                (this._fieldInfo as Types.Helper.ListForm.IListFormDateFieldInfo).showTime = fldDate.DisplayFormat == SPTypes.DateFormat.DateTime;
                break;

            // Lookup
            case SPTypes.FieldType.Lookup:
                let fldLookup = this._fieldInfo.field as Types.IFieldLookup;
                (this._fieldInfo as Types.Helper.ListForm.IListFormLookupFieldInfo).lookupField = fldLookup.LookupField;
                (this._fieldInfo as Types.Helper.ListForm.IListFormLookupFieldInfo).lookupListId = fldLookup.LookupList;
                (this._fieldInfo as Types.Helper.ListForm.IListFormLookupFieldInfo).lookupWebId = fldLookup.LookupWebId;
                (this._fieldInfo as Types.Helper.ListForm.IListFormLookupFieldInfo).multi = fldLookup.AllowMultipleValues;
                break;

            // Number
            case SPTypes.FieldType.Number:
                let fldNumber = this._fieldInfo.field as Types.IFieldNumber;
                (this._fieldInfo as Types.Helper.ListForm.IListFormNumberFieldInfo).maxValue = fldNumber.MaximumValue;
                (this._fieldInfo as Types.Helper.ListForm.IListFormNumberFieldInfo).minValue = fldNumber.MinimumValue;
                if (fldNumber.ShowAsPercentage != undefined) {
                    (this._fieldInfo as Types.Helper.ListForm.IListFormNumberFieldInfo).showAsPercentage = fldNumber.ShowAsPercentage;
                } else {
                    (this._fieldInfo as Types.Helper.ListForm.IListFormNumberFieldInfo).showAsPercentage = fldNumber.SchemaXml.indexOf('Percentage="TRUE"') > 0;
                }
                break;

            // Note
            case SPTypes.FieldType.Note:
                let fldNote = this._fieldInfo.field as Types.IFieldNote;
                (this._fieldInfo as Types.Helper.ListForm.IListFormTextFieldInfo).multiline = true;
                (this._fieldInfo as Types.Helper.ListForm.IListFormTextFieldInfo).richText = fldNote.RichText;
                (this._fieldInfo as Types.Helper.ListForm.IListFormTextFieldInfo).rows = fldNote.NumberOfLines;
                break;

            // Text
            case SPTypes.FieldType.Text:
                (this._fieldInfo as Types.Helper.ListForm.IListFormTextFieldInfo).multiline = false;
                (this._fieldInfo as Types.Helper.ListForm.IListFormTextFieldInfo).richText = false;
                (this._fieldInfo as Types.Helper.ListForm.IListFormTextFieldInfo).rows = 1;
                break;

            // User
            case SPTypes.FieldType.User:
                let fldUser = this._fieldInfo.field as Types.IFieldUser;
                (this._fieldInfo as Types.Helper.ListForm.IListFormUserFieldInfo).allowGroups = fldUser.SelectionMode == SPTypes.FieldUserSelectionType.PeopleAndGroups;
                (this._fieldInfo as Types.Helper.ListForm.IListFormUserFieldInfo).multi = fldUser.AllowMultipleValues;
                break;

            // Default
            default:
                // See if this is an MMS field
                if (this._fieldInfo.typeAsString.startsWith("TaxonomyFieldType")) {
                    let fldMMS = this._fieldInfo.field as Types.IFieldManagedMetadata;
                    (this._fieldInfo as Types.Helper.ListForm.IListFormMMSFieldInfo).multi = fldMMS.AllowMultipleValues;
                    (this._fieldInfo as Types.Helper.ListForm.IListFormMMSFieldInfo).termSetId = fldMMS.TermSetId;
                    (this._fieldInfo as Types.Helper.ListForm.IListFormMMSFieldInfo).termStoreId = fldMMS.SspId;
                }
                break;
        }

        // Resolve the promise
        this._resolve(this._fieldInfo);
    }
}
export const ListFormField: Types.Helper.ListForm.IListFormField = _ListFormField as any;