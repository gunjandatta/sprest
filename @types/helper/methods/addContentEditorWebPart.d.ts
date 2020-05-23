import { IContentEditorWebPart } from "../webpart";

/**
 * Adds a content editor webpart to a page.
 * @category Helper
 * @param url The relative url of the page.
 * @param wpProps The webpart properties.
 * @returns A promise is returned.
 */
export const addContentEditorWebPart: IaddContentEditorWebPart;
export interface IaddContentEditorWebPart {
    (url: string, wpProps: IContentEditorWebPart): PromiseLike<void>;
}
