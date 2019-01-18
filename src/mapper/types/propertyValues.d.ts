import { SP } from "gd-sprest-def";
import { IBase } from "../../utils/base/types";
import { ODataQuery } from ".";

/**
 * Property Values
 */
export interface IPropertyValues extends IBase, SP.KeyValue {
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IPropertyValues;
}