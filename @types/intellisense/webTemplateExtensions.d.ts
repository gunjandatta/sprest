import {

} from "gd-sprest-def/lib/Microsoft/SharePoint/Utilities/WebTemplateExtensions";
import { IBaseExecution } from "gd-sprest-def/lib/base";
import { WebTemplateExtensions } from "gd-sprest-def/lib/Microsoft/SharePoint/Utilities";

/**
 * Web Template Extensions Results
 */
export interface IResult extends IBaseExecution { }

/**
 * Web Template Extensions Methods
 */
export interface IWebTemplateExtensionsMethods {
    applySiteDesign(siteDesignId: string, webUrl: string): IBaseExecution;
    addSiteDesignTaskToCurrentWeb(siteDesignId: string): IBaseExecution;
    createSiteDesign(info: WebTemplateExtensions.SiteDesignCreationInfo)
    createSiteScript(title: string, content: any): IBaseExecution;
    deleteSiteDesign(id: string): IBaseExecution;
    deleteSiteScript(id: string): IBaseExecution;
    getSiteDesigns(): IBaseExecution;
    getSiteDesignMetadata(id: string): IBaseExecution;
    getSiteScripts(): IBaseExecution;
    getSiteScriptFromWeb(webUrl: string, info: WebTemplateExtensions.SiteScriptSerializationInfo): IBaseExecution;
    getSiteScriptFromList(listUrl: string): IBaseExecution;
    getSiteScriptMetadata(id: string): IBaseExecution;
    getSiteDesignRights(id: string): IBaseExecution;
    grantSiteDesignRights(id: string, principalNames: string[], grantedRights: number): IBaseExecution;
    revokeSiteDesignRights(id: string, principalNames: string[]): IBaseExecution;
    updateSiteDesign(updateInfo: WebTemplateExtensions.SiteDesignCreationInfo & WebTemplateExtensions.SiteDesignMetadata): IBaseExecution;
    updateSiteScript(updateInfo: WebTemplateExtensions.SiteScriptCreationInfo & WebTemplateExtensions.SiteScriptMetadata): IBaseExecution;
}

/**
 * Web Template Extensions
 */
export interface IWebTemplateExtensions extends IWebTemplateExtensionsMethods, IBaseExecution<IWebTemplateExtensions> { }