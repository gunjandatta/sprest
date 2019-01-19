import { SP } from "gd-sprest-def";
import { IBaseLib } from "../../utils/types/base";
import { ODataQuery } from ".";

/**
 * Property Values
 */
export interface IPropertyValues extends IBaseLib, SP.KeyValue {
    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IPropertyValues;
}