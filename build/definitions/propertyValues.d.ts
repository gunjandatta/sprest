import { ComplexTypes, IBase, ODataQuery } from "./index";
/**
 * Property Values
 */
export interface IPropertyValues extends IBase, ComplexTypes.KeyValue {
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IPropertyValues;
}
