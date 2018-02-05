import { IBase, IBaseCollection } from "../../utils/types";
import { Types } from "../..";
import { ITenantApp, ITenantApps } from ".";
export interface ITenantAppCatalogMethods {
    add(overwrite?: boolean, url?: string): IBase<Types.SP.IFile, Types.SP.IFileResult>;
    getById(guid: string): ITenantApp;
}
export interface ITenantAppCatalogProps {
    AvailableApps(): ITenantApps;
    SiteCollectionAppCatalogsSites(): IBaseCollection;
}
export interface ITenantAppCatalogQueryProps {
    AvailableApps(): ITenantApps;
}
export interface ITenantAppCatalogQueryResult extends ITenantAppCatalogMethods, ITenantAppCatalogProps {
}
export interface ITenantAppCatalogResult extends ITenantAppCatalogMethods, ITenantAppCatalogProps, ITenantAppCatalogQueryProps, IBase<ITenantAppCatalog, ITenantAppCatalogResult, ITenantAppCatalogQueryResult> {
}
export interface ITenantAppCatalog extends ITenantAppCatalogMethods, ITenantAppCatalogQueryProps, IBase<ITenantAppCatalog, ITenantAppCatalogResult, ITenantAppCatalogQueryResult> {
}
