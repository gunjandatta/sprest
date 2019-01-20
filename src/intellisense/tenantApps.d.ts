import { IBaseExecution, IBaseCollection } from "../utils/types/base";
import { ITenantApp } from ".";

/**
 * Methods
 */
export interface ITenantAppsMethods {
    /**
     * Details on individual solution package from tenant app catalog
     * REST API for getting details on individual SharePoint Framework solution or add-in available in the tenant app catalog.
     * @param guid - The app id.
     */
    getById(guid: string): IBaseExecution<ITenantApp>;
}

/**
 * Tenant Apps
 */
export interface ITenantApps extends ITenantAppsMethods, IBaseCollection<ITenantApp> { }