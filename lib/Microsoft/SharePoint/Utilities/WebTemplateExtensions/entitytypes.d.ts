import { Base } from "../../../../";
import { Microsoft } from "../../../../";

/*********************************************
* DesignPackageMenuContents
**********************************************/
export interface DesignPackageMenuContents {
	HiddenDesignPackages?: number;
	SiteDesigns?: { results: Array<Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignMetadata> };
}

/*********************************************
* DesignPackageMenuContentsCollections
**********************************************/
export interface DesignPackageMenuContentsCollections {

}

/*********************************************
* SiteDesignPrincipal
**********************************************/
export interface SiteDesignPrincipal {
	DisplayName?: string;
	PrincipalName?: string;
	Rights?: number;
}

/*********************************************
* SiteDesignPrincipalCollections
**********************************************/
export interface SiteDesignPrincipalCollections {

}

/*********************************************
* SiteDesignRun
**********************************************/
export interface SiteDesignRun {
	ID?: any;
	SiteDesignID?: any;
	SiteDesignTitle?: string;
	SiteDesignVersion?: number;
	SiteID?: any;
	StartTime?: number;
	WebID?: any;
}

/*********************************************
* SiteDesignRunCollections
**********************************************/
export interface SiteDesignRunCollections {

}

/*********************************************
* SiteScriptUtility
**********************************************/
export interface SiteScriptUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SiteScriptUtilityCollections
**********************************************/
export interface SiteScriptUtilityCollections {

}
