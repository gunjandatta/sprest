import { IBase, IBaseCollection } from "../../utils/types";
import { IGroup, IGroupCreationInformation, IGroupQueryResult, IGroupResult } from ".";
export interface ISiteGroupsMethods {
    add(groupInfo: IGroupCreationInformation): IBase<IGroup, IGroupResult>;
    getById(id: any): IGroup & IBase<IGroup, IGroupResult, IGroupQueryResult>;
    getByName(name: any): IGroup & IBase<IGroup, IGroupResult, IGroupQueryResult>;
    next(): IBase<ISiteGroups, ISiteGroupResults>;
    removeById(id: any): IBase;
    removeByLoginName(name: any): IBase;
}
export interface ISiteGroups extends ISiteGroupsMethods, IBaseCollection<IGroup, IGroupResult, IGroupQueryResult> {
}
export interface ISiteGroupResults extends ISiteGroupsMethods, IBaseCollection<IGroupResult, IGroupResult, IGroupQueryResult> {
}
