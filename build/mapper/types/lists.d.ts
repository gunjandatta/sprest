import { IBase, IBaseCollection } from "../../utils/types";
import { IList, IListCreationInformation, IListQueryResult, IListResult } from ".";
export interface IListsMethods {
    add(parameters: IListCreationInformation): IBase<IList, IListResult>;
    ensureSiteAssetsLibrary(): IBase<IList, IListResult, IListQueryResult>;
    ensureSitePagesLibrary(): IBase<IList, IListResult, IListQueryResult>;
    getById(id: any): IList & IBase<IList, IListResult, IListQueryResult>;
    getByTitle(title: any): IList & IBase<IList, IListResult, IListQueryResult>;
    next(): IBase<ILists, IListResults>;
}
export interface ILists extends IListsMethods, IBaseCollection<IList, IListResult, IListQueryResult> {
}
export interface IListResults extends IListsMethods, IBaseCollection<IListResult, IListResult, IListQueryResult> {
}
