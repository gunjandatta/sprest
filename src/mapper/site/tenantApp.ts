import { IBase } from "../../utils";

/**
 * Methods
 */
export interface ITenantAppMethods {
    /**
     * Deploy solution package in tenant app catalog
     * Enable solution to be available to install to specific sites. This API is designed to be executed in the context of the tenant app catalog site.
     */
    Deploy(): IBase;

    /**
     * Install solution package from tenant app catalog to SharePoint site
     * Install a solution package with specific identifier from tenant app catalog to the site based on URL context. This REST call can be executed in the context of the site where the install operation should happen.
     */
    Install(): IBase;

    /**
     * Remove solution package from tenant app catalog
     * Remove the solution package from the tenant app catalog. This API is designed to be executed in the context of the tenant app catalog site.
     */
    Remove(): IBase;

    /**
     * Retract solution package in the tenant app catalog
     * Retract solution to be available from the sites. This API is designed to be executed in the context of the tenant app catalog site.
     */
    Retract(): IBase;

    /**
     * Uninstall solution package from SharePoint site
     * Uninstall a solution package from the site. This REST call can be executed in the context of the site where the uninstall operation should happen.
     */
    Uninstall(): IBase;

    /**
     * Upgrade solution package in SharePoint site
     * Upgrade a solution package from the site to a newer version available in the tenant app catalog. This REST call can be executed in the context of the site where the upgrade operation should happen.
     */
    Upgrade(): IBase;
}

/**
 * Tenant App
 */
export interface ITenantApp extends ITenantAppMethods, IBase<ITenantApp> { }
