import { IFieldInfo } from ".";

/**
 * Field Schema XML
 */
export interface IFieldSchemaXML {
    /** Method to generate the field schema xml. */
    generate: (fieldInfo: IFieldInfo) => PromiseLike<string>;
}