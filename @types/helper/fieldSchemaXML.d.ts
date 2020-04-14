import { IFieldInfo } from "./spCfg";

/**
 * Generates the Schema XML for a Field.
 * @category Field Schema XML
 */
export const FieldSchemaXML: IFieldSchemaXML;

/**
 * @category Field Schema XML
 */
export interface IFieldSchemaXML {
    /** Creates the suitebar link */
    (fieldInfo: IFieldInfo): PromiseLike<string>;
}