import { IFieldInfo } from ".";
export interface IFieldSchemaXML {
    generate: (fieldInfo: IFieldInfo) => PromiseLike<string>;
}
