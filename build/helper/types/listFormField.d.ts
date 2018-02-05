import { Types } from "../..";
import { ITermInfo } from ".";
export interface IListFormFieldInfo {
    defaultValue?: any;
    field?: Types.SP.IFieldResult | Types.SP.IFieldQueryResult;
    listName: string;
    name: string;
    readOnly?: boolean;
    required?: boolean;
    title?: string;
    type?: number;
    typeAsString?: string;
    webUrl?: string;
}
export interface IListFormChoiceFieldInfo extends IListFormFieldInfo {
    choices?: Array<string>;
    field?: Types.SP.IFieldChoice | Types.SP.IFieldMultiChoice;
    multi?: boolean;
}
export interface IListFormDateFieldInfo extends IListFormFieldInfo {
    field?: Types.SP.IFieldDateTime;
    showTime?: boolean;
}
export interface IListFormLookupFieldInfo extends IListFormFieldInfo {
    field?: Types.SP.IFieldLookup;
    lookupField?: string;
    lookupListId?: string;
    lookupWebId?: string;
    multi?: boolean;
}
export interface IListFormMMSFieldInfo extends IListFormFieldInfo {
    field?: Types.SP.IFieldManagedMetadata;
    multi?: boolean;
    termId?: string;
    termSetId?: string;
    termStoreId?: string;
}
export interface IListFormNumberFieldInfo extends IListFormFieldInfo {
    field?: Types.SP.IFieldNumber | Types.SP.IFieldCurrency;
    maxValue?: number;
    minValue?: number;
    showAsPercentage?: boolean;
}
export interface IListFormTextFieldInfo extends IListFormFieldInfo {
    field?: Types.SP.IFieldText | Types.SP.IFieldNote;
    multiline?: boolean;
    richText?: boolean;
    rows?: number;
}
export interface IListFormUrlFieldInfo extends IListFormFieldInfo {
    field?: Types.SP.IFieldUrl;
}
export interface IListFormUserFieldInfo extends IListFormFieldInfo {
    allowGroups?: boolean;
    field?: Types.SP.IFieldUser;
    multi?: boolean;
}
export interface IListFormField {
    new (props: IListFormFieldInfo): PromiseLike<IListFormFieldInfo>;
    loadLookupData(info: IListFormLookupFieldInfo, queryTop?: number): PromiseLike<Array<Types.SP.IListItemQueryResult>>;
    loadMMSData(info: IListFormMMSFieldInfo): PromiseLike<Array<ITermInfo>>;
    loadMMSValueField(info: IListFormMMSFieldInfo): PromiseLike<Types.SP.IFieldManagedMetadata>;
}
