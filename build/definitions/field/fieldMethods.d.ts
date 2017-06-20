import { IBase, IField, IFieldQueryResults } from "..";
/**
 * Field Methods
 */
export interface IFieldMethods extends IBase<IField, IFieldQueryResults> {
    /**
     * Deletes the field.
     */
    delete(): IBase;
    /**
     * Sets the value of the ShowInDisplayForm property for this field.
     * @param showInForm - Flag to show the field in the display form.
     */
    setShowInDisplayForm(showInForm: any): IBase;
    /**
     * Sets the value of the ShowInEditForm property for this field.
     * @param showInForm - Flag to show the field in the display form.
     */
    setShowInEditForm(showInForm: any): IBase;
    /**
     * Sets the value of the ShowInNewForm property for this field.
     * @param showInForm - Flag to show the field in the display form.
     */
    setShowInNewForm(showInForm: any): IBase;
    /**
     * Updates it's properties.
     * @param data - The field properties to update.
     */
    update(data: any): IBase;
}
