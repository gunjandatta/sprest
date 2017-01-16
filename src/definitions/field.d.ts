declare module "gd-sprest" {
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
        FieldTypeKind: SPTypes.FieldType;

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
        execute(callback?:(...args) => any): IField;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IField;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IField;

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
}