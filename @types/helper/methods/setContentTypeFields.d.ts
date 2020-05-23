/**
 * Sets the field links associated with a content type.
 * @param ctInfo The content type information
 * @category Helper
 */
export const setContentTypeFields: IsetContentTypeFields;
export interface IsetContentTypeFields {
    (ctInfo: { id: string, fields: Array<string>, listName?: string, webUrl?: string }): PromiseLike<void>;
}
