import {
    ComplexTypes,
    IBase,
    ODataQuery
} from ".";
/**
 * Property Values
 */
export interface IPropertyValues extends IBase, ComplexTypes.KeyValue {
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(oData:ODataQuery): IPropertyValues;
}