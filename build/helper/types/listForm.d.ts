import { Types } from "../..";
export interface IListForm {
    new (props: IListFormProps): PromiseLike<IListFormResult>;
    loadAttachments(listInfo: IListFormProps): PromiseLike<Array<Types.SP.IAttachment>>;
    refreshItem(listInfo: IListFormResult): PromiseLike<IListFormResult>;
    removeAttachments(listInfo: IListFormProps, attachmentInfo: Array<Types.SP.IAttachment>): PromiseLike<void>;
    saveAttachments(listInfo: IListFormProps, attachmentInfo: Array<IListFormAttachmentInfo>): PromiseLike<Array<Types.SP.IAttachment>>;
    saveItem(info: IListFormResult, formValues: any): PromiseLike<IListFormResult>;
}
export interface IListFormAttachmentInfo {
    data: any;
    name: string;
}
export interface IListFormCache {
    ct: string;
    fields: string;
    list: string;
}
export interface IListFormProps {
    cacheKey?: string;
    fields?: Array<string>;
    item?: Types.SP.IListItemQueryResult | Types.SP.IListItemResult;
    itemId?: number;
    listName: string;
    loadAttachments?: boolean;
    query?: Types.SP.ODataQuery;
    webUrl?: string;
}
export interface IListFormResult {
    attachments?: Array<Types.SP.IAttachment>;
    fields: {
        [key: string]: Types.SP.IFieldResult;
    };
    item?: Types.SP.IListItemQueryResult | Types.SP.IListItemResult;
    query?: Types.SP.ODataQuery;
    list: Types.SP.IListResult;
}
