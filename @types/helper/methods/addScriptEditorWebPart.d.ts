import { IScriptEditorWebPart } from "../webpart";

/**
 * Adds a script editor webpart to a page.
 * @category Helper
 * @param url - The relative url of the page.
 * @param wpProps - The webpart properties.
 */
export const addScriptEditorWebPart: IaddScriptEditorWebPart;
export interface IaddScriptEditorWebPart {
    (url: string, wpProps: IScriptEditorWebPart): PromiseLike<void>;
}
