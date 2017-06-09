import {
    ComplexTypes,
    IBase,
    SPTypes
} from ".";
/**
 * Field
 */
export interface IField extends IBase {
    /**
     * Properties
     */

    AutoIndexed: boolean;

    /** Gets a value that specifies whether the field can be deleted. */
    CanBeDeleted: boolean;

    /** Gets or sets a value that specifies the default value for the field. */
    DefaultValue: string;

    /** Gets or sets a value that specifies the description of the field. */
    Description: string;

    DescriptionResource(): ComplexTypes.ResourcePath;

    /** Gets or sets a value that specifies the reading order of the field. */
    Direction: string;

    /** Gets or sets a value that specifies whether to require unique field values in a list or library column. */
    EnforceUniqueValues: boolean;

    /** Gets the name of the entity property for the list item entity that uses this field. */
    EntityPropertyName: string;

    /** Gets or sets a value that specifies the type of the field. Represents a FieldType value. See FieldType in the .NET client object model reference for a list of field type values. */
    FieldTypeKind: SPTypes.FieldType | number;

    /** Gets a value that specifies whether list items in the list can be filtered by the field value. */
    Filterable: boolean;

    /** Gets a Boolean value that indicates whether the field derives from a base field type. */
    FromBaseType: boolean;

    /** Gets or sets a value that specifies the field group. */
    Group: string;

    /** Gets or sets a value that specifies whether the field is hidden in list views and list forms. */
    Hidden: boolean;

    /** Gets a value that specifies the field identifier. */
    Id: string;

    /** Gets or sets a Boolean value that specifies whether the field is indexed. */
    Indexed: boolean;

    /** Gets a value that specifies the field internal name. */
    InternalName: string;

    /** Gets or sets the name of an external JS file containing any client rendering logic for fields of this type. */
    JSLink: string;

    /** Gets or sets a value that specifies whether the value of the field is read-only. */
    ReadOnlyField: boolean;

    /** Gets or sets a value that specifies whether the field requires a value. */
    Required: boolean;

    /** Gets or sets a value that specifies the XML schema that defines the field. */
    Schemaxml: string;

    /** Gets a value that specifies the server-relative URL of the list or the site to which the field belongs. */
    Scope: string;

    /** Gets a value that specifies whether properties on the field cannot be changed and whether the field cannot be deleted. */
    Sealed: boolean;

    /** Gets a value that specifies whether list items in the list can be sorted by the field value. */
    Sortable: boolean;

    /** Gets or sets a value that specifies a customizable identifier of the field. */
    StaticName: string;

    /** Gets or sets value that specifies the display name of the field. */
    Title: string;

    TitleResource(): ComplexTypes.ResourcePath;

    /** Gets or sets a value that specifies the type of the field. */
    TypeAsString: string;

    /** Gets a value that specifies the display name for the type of the field. */
    TypeDisplayName: string;

    /** Gets a value that specifies the description for the type of the field. */
    TypeShortDescription: string;

    /** Gets or sets a value that specifies the data validation criteria for the value of the field. */
    ValidationFormula: string;

    /** Gets or sets a value that specifies the error message returned when data validation fails for the field. */
    ValidationMessage: string;

    /**
     * Methods
     */

    /**
     * Deletes the field.
     */
    delete(): IBase;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     */
    execute(callback?: (value?: IField, ...args) => any): IField;

    /**
     * Method to execute the request.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(waitFl: boolean): IField;

    /**
     * Method to execute the request.
     * @param callback - The method to be executed after the request completes.
     * @param waitFl - Flag to execute the request, after the previous requests have completed.
     */
    execute(callback: (value?: IField, ...args) => any, waitFl: boolean): IField;

    /**
     * Method to execute the request synchronously.
     */
    executeAndWait(): IField;

    /**
     * Sets the value of the ShowInDisplayForm property for this field.
     * @param showInForm - Flag to show the field in the display form.
     */
    setShowInDisplayForm(showInForm): IBase;

    /**
     * Sets the value of the ShowInEditForm property for this field.
     * @param showInForm - Flag to show the field in the display form.
     */
    setShowInEditForm(showInForm): IBase;

    /**
     * Sets the value of the ShowInNewForm property for this field.
     * @param showInForm - Flag to show the field in the display form.
     */
    setShowInNewForm(showInForm): IBase;

    /**
     * Updates it's properties.
     * @param data - The field properties to update.
     */
    update(data): IBase;
}

/**
 * Base Choice Field
 */
export interface IFieldBaseChoice extends IField {
    /** A value that specifies values that are available for selection in the field. */
    Choices: Array<string>

    /** A value that specifies whether the field can accept values other than those specified by the Choices property. */
    FillInChoice: boolean;

    /** A value that specifies the internal values corresponding to Choices. */
    Mappings: string;
}

/**
 * Calculated Field
 */
export interface IFieldCalculated extends IField {
    /** The date and time format that is displayed in the field. */
    DateFormat: SPTypes.DateFormat;

    /** A value that specifies the formula for the field. */
    Formula: string;

    /** A value that specifies the output format for the field. */
    OutputType: SPTypes.FieldType;
}

/**
 * Choice Field
 */
export interface IFieldChoice extends IFieldBaseChoice {
    /** Determines whether to display the choice field as option buttons (also known as "radio buttons") or as a drop-down list. */
    EditFormat: SPTypes.ChoiceFormatType;
}

/**
 * Computed Field
 */
export interface IFieldComputed extends IField {
    /** A value that specifies whether a lookup field can reference the field. */
    EnableLookup: boolean;
}

/**
 * Currency Field
 */
export interface IFieldCurrency extends IFieldNumber {
    /** A value that specifies the language code identifier (LCID) used to format the value of the field. */
    CurrencyLocaleId: SPTypes.LocaleLCIDType;
}

/**
 * Date/Time Field
 */
export interface IFieldDateTime extends IField {
    /** A value that specifies the calendar type of the field. */
    DateTimeCalendarType: SPTypes.CalendarType;

    /** The format of the date and time that is displayed in the field. */
    DisplayFormat: SPTypes.DateFormat;

    /** Represents a date and time friendly format. */
    FriendlyDisplayFormat: SPTypes.FriendlyDateFormat;
}

/**
 * Lookup Field
 */
export interface IFieldLookup extends IField {
    /** A value that specifies whether the lookup field allows multiple values. You cannot set a deletion constraint on a lookup field that allows multiple values. */
    AllowMultipleValues: boolean;

    /** A value that specifies whether this lookup field is returned by SP.List.getRelatedFields from the list being looked up to. Always returns false if the field represents a secondary column in a multiple-column lookup. Secondary columns are not discoverable from the source list. */
    IsRelationship: boolean;

    /** A value that specifies the internal field name of the field used as the lookup values. */
    LookupField: string;

    /** A value that specifies the list identifier of the list that contains the field to use as the lookup values. */
    LookupList: string;

    /** The ID of the Web site that contains the list that is the source of this field's value. */
    LookupWebId: string;

    /** A value that specifies the primary lookup field identifier if this is a dependent lookup field. Otherwise, it is an empty string. */
    PrimaryFieldId: string;

    /** A value that specifies the delete behavior of the lookup field. */
    RelationshipDeleteBehavior: SPTypes.RelationshipDeleteBehaviorType;
}

/**
 * Multi-Choice Field
 */
export interface IFieldMultiChoice extends IFieldBaseChoice {
}

/**
 * Note Field
 */
export interface IFieldNote extends IField {
    /** A value that specifies whether a hyperlink is allowed as a value of the field. */
    AllowHyperlink: boolean;

    /** A value that specifies whether all changes to the value of the field are displayed in list forms. */
    AppendOnly: boolean;

    /** A value that specifies the number of lines of text to display for the field. */
    NumberOfLines: number;

    /** A value that specifies whether the field supports a subset of rich formatting. */
    RestrictedMode: boolean;

    /** A value that specifies whether the field supports rich formatting. */
    RichText: boolean;

    /** A value that specifies whether an implementation specific mechanism for linking wiki pages is supported. */
    WikiLinking: boolean;
}

/**
 * Number Field
 */
export interface IFieldNumber extends IField {
    /** A value that specifies the minimum allowed value for the field. */
    MaximumValue: number;

    /** A value that specifies the minimum allowed value for the field. */
    MinimumValue: number;
}

/**
 * Rating Scale Field
 */
export interface IFieldRatingScale extends IFieldBaseChoice {
    /** A value that specifies the end number for the rating scale. */
    GridEndNumber: number;

    /** A value that specifies the display text corresponding to the choice in the rating scale that indicates the non-applicable option. */
    GridNAOptionText: string;

    /** A value that specifies the start number for the rating scale. */
    GridStartNumber: number;

    /** A value that specifies the display text corresponding to the average of the rating scale. */
    GridTextRangeAverage: string;

    /** A value that specifies the display text corresponding to the maximum of the rating scale. */
    GridTextRangeHigh: string;

    /** A value that specifies the display text corresponding to the minimum of the rating scale. */
    GridTextRangeLow: string;

    /** A value that specifies the number of options in the rating scale. */
    RangeCount: number;
}

/**
 * Text Field
 */
export interface IFieldText extends IField {
    /** A value that specifies the maximum number of characters allowed in the value of the field. */
    MaxLength: number;
}

/**
 * URL Field
 */
export interface IFieldUrl extends IField {
    /** A value that specifies the display format for the value in the field. */
    DisplayFormat: SPTypes.UrlFormatType;
}

/**
 * User Field
 */
export interface IFieldUser extends IFieldLookup {
    /** A value that specifies whether to display the name of the user in a survey list. */
    AllowDisplay: boolean;

    /** A value that specifies whether presence is enabled on the field. */
    Presence: boolean;

    /** A value that specifies the identifier of the SharePoint group whose members can be selected as values of the field. */
    SelectionGroup: number;

    /** A value that specifies whether users and groups or only users can be selected. */
    SelectionMode: SPTypes.FieldUserSelectionType;
}