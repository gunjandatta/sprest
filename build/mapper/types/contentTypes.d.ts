import { IBase, IBaseCollection } from "../../utils/types";
import { IContentType, IContentTypeCreationInformation, IContentTypeQueryResult, IContentTypeResult } from ".";
export interface IContentTypesMethods {
    add(parameters: IContentTypeCreationInformation): IBase<IContentType, IContentTypeResult>;
    addAvailableContentType(contentTypeId: any): IBase<IContentType, IContentTypeResult>;
    getById(id: any): IContentType & IBase<IContentType, IContentTypeResult, IContentTypeQueryResult>;
    next(): IBase<IContentTypes, IContentTypeResults>;
}
export interface IContentTypes extends IContentTypesMethods, IBaseCollection<IContentType, IContentTypeResult, IContentTypeQueryResult> {
}
export interface IContentTypeResults extends IContentTypesMethods, IBaseCollection<IContentTypeResult, IContentTypeResult, IContentTypeQueryResult> {
}
