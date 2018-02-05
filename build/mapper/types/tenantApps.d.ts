import { IBase, IBaseCollection } from "../../utils/types";
import { ITenantApp } from ".";
export interface ITenantAppsMethods {
    getById(guid: string): IBase<ITenantApp>;
}
export interface ITenantApps extends ITenantAppsMethods, IBaseCollection<ITenantApp> {
}
