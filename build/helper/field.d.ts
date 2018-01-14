import { Types } from "../mapper";
/**
 * Field Schema XML
 */
export interface IFieldSchemaXML {
    /** Method to generate the field schema xml. */
    generate: (fieldInfo: Types.Helper.SPConfig.IFieldInfo) => PromiseLike<string>;
}
export declare const FieldSchemaXML: IFieldSchemaXML;
