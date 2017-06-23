import {
    IBase, IBaseCollection,
    IField, IFieldCreationInformation, IFieldQueryResult, IFieldResult
} from "..";

/**
 * Methods
 */
export interface IFieldsMethods {
    /**
     * Adds a field to the field collection.
     * @param parameters - The field properties.
     */
    add(parameters: IField): IBase<IField>;

    /**
     * Adds a field to the field collection.
     * @param parameters - The field creation information.
     */
    addField(parameters: IFieldCreationInformation): IBase<IField>;

    /**
     * Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
     * @param displayName - The title of the new field.
     * @param primaryLookupField - The ID of the lookup field to associate this dependent lookup field with.
     * @param showField - The name of the field from the target list to include data from.
     */
    addDependentLookupField(displayName, primaryLookupField, showField): IBase<IField>;

    /**
     * Creates a field based on the specified schema, Boolean value, and field options.
     * Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
     * @param schemaXml - The schema XML definition of the field.
     */
    createFieldAsXml(schemaXml): IBase<IField>;

    /**
     * Gets the field with the specified ID.
     * @param id - The field id.
     */
    getById(id): IField;

    /**
     * Returns the first Field object with the specified internal name or title from the collection.
     * @param internalNameOrTitle - The internal name or title of the field.
     */
    getByInternalNameOrTitle(internalNameOrTitle): IField;

    /**
     * Returns the first field object in the collection based on the title of the specified field.
     * @param title - The title of the field.
     */
    getByTitle(title): IField;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IFields>;
}

/**
 * Fields
 */
export interface IFields extends IFieldsMethods, IBaseCollection<IField, IFieldResult, IFieldQueryResult> { }

/**
 * Field Results
 */
export interface IFieldResults extends IFieldsMethods, IBaseCollection<IFieldResult, IFieldResult, IFieldQueryResult> { }