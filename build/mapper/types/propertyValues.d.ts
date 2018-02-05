import { IBase } from "../../utils/types";
import { ComplexTypes, ODataQuery } from ".";
export interface IPropertyValues extends IBase, ComplexTypes.KeyValue {
    query(query: ODataQuery): IPropertyValues;
}
