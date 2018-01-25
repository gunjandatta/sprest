import { IBase, IBaseCollection } from "../../utils/types";
import { Types } from "../..";
import { ITenantApp, ITenantApps } from ".";
/**
 * Tenant App Catalog Methods
 */
export interface ITenantAppCatalogMethods {
    /**
     * Add solution package to tenant app catalog
     * Adding solution to the tenant app catalog. This API is designed to be executed in the context of the tenant app catalog site.
     * @param overwrite - Flag to overwrite the solution.
     * @param url - The file name of the solution.
     */
    add(overwrite?: boolean, url?: string): IBase<Types.SP.IFile, Types.SP.IFileResult>;
    /**
     * Deploy solution package in tenant app catalog
     * Enable solution to be available to install to specific sites. This API is designed to be executed in the context of the tenant app catalog site.
     * @param guid - The app id.
     */
    getById(guid: string): ITenantApp;
}
/**
 * Tenant App Catalog Properties
 */
export interface ITenantAppCatalogProps {
    /**
     * List available packages from tenant app catalog
     * REST API for getting list of available SharePoint Framework solutions or add-ins in tenant app catalog.
     */
    AvailableApps(): ITenantApps;
    /**
     * No documentation available. Need to research this.
     */
    SiteCollectionAppCatalogsSites(): IBaseCollection;
}
/**
 * Tenant App Catalog Query Properties
 */
export interface ITenantAppCatalogQueryProps {
    /**
     * List available packages from tenant app catalog
     * REST API for getting list of available SharePoint Framework solutions or add-ins in tenant app catalog.
     */
    AvailableApps(): ITenantApps;
}
/**
 * Tenant App Catalog Query Result
 */
export interface ITenantAppCatalogQueryResult extends ITenantAppCatalogMethods, ITenantAppCatalogProps {
}
/**
 * Tenant App Catalog Result
 */
export interface ITenantAppCatalogResult extends ITenantAppCatalogMethods, ITenantAppCatalogProps, ITenantAppCatalogQueryProps, IBase<ITenantAppCatalog, ITenantAppCatalogResult, ITenantAppCatalogQueryResult> {
}
/**
 * Tenant App Catalog
 */
export interface ITenantAppCatalog extends ITenantAppCatalogMethods, ITenantAppCatalogQueryProps, IBase<ITenantAppCatalog, ITenantAppCatalogResult, ITenantAppCatalogQueryResult> {
}
