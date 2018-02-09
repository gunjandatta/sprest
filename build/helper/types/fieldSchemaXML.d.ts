import { IFieldInfo } from ".";
/**
 * Field Schema XML
 */
export interface IFieldSchemaXML {
    /** Creates the suitebar link */
    new (fieldInfo: IFieldInfo): PromiseLike<string>;
}
