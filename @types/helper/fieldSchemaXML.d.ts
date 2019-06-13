/**
 * Field Schema XML
 */
import { IFieldInfo } from ".";

/**
 * Field Schema XML
 */
export const FieldSchemaXML: (fieldInfo: IFieldInfo) => PromiseLike<string>;

/**
 * Field Schema XML
 */
export interface IFieldSchemaXML {
    /** Creates the suitebar link */
    new(fieldInfo: IFieldInfo): PromiseLike<string>;
}