import { Types } from "../../mapper";
import { Promise } from "../../utils";
/**
 * Field Schema XML
 */
export interface IFieldSchemaXML {
    /** Method to generate the field schema xml. */
    generate: (fieldInfo: Types.Helper.SPConfig.IFieldInfo) => Promise;
}
export declare const FieldSchemaXML: IFieldSchemaXML;
