import { IBase } from "../utils/index.def";
import { ComplexTypes, ODataQuery } from "./index.def";
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
