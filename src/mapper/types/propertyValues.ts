import { IBase } from "../../utils/types";
import { ComplexTypes, ODataQuery } from ".";

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