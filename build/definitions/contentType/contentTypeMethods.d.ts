import { IBase, IContentType, IContentTypeQueryResults } from "..";
/**
 * Content Type Methods
 */
export interface IContentTypeMethods extends IBase<IContentType, IContentTypeQueryResults> {
    /**
     * Deletes the content type.
     */
    delete(): IBase;
    /**
     * Updates it's properties.
     * @param data - The content type properties to update.
     */
    update(data: any): IBase;
}
