import { IBase } from "../utils";
import { Types } from ".";

/**
 * Property Values
 */
export interface IPropertyValues extends IBase, Types.ComplexTypes.KeyValue {
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: Types.ODataQuery): IPropertyValues;
}