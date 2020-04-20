import { Base } from "../../";
import { SP } from "../../";

/*********************************************
* MarketplaceUtilities
**********************************************/
export interface MarketplaceUtilities {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* MarketplaceUtilitiesCollections
**********************************************/
export interface MarketplaceUtilitiesCollections {

}

/*********************************************
* ShortcutLink
**********************************************/
export interface ShortcutLink {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ShortcutLinkCollections
**********************************************/
export interface ShortcutLinkCollections {

}

/*********************************************
* ShortcutTargetInfo
**********************************************/
export interface ShortcutTargetInfo {
	siteId?: any;
	uniqueId?: any;
	url?: string;
	webId?: any;
}

/*********************************************
* ShortcutTargetInfoCollections
**********************************************/
export interface ShortcutTargetInfoCollections {

}

/*********************************************
* FileHandlerWopiProperties
**********************************************/
export interface FileHandlerWopiProperties {
	FileGetUrl?: string;
	FileId?: string;
	FilePutUrl?: string;
	ResourceId?: string;
}

/*********************************************
* FileHandlerWopiPropertiesCollections
**********************************************/
export interface FileHandlerWopiPropertiesCollections {

}

/*********************************************
* NewsUtility
**********************************************/
export interface NewsUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* NewsUtilityCollections
**********************************************/
export interface NewsUtilityCollections {

}

/*********************************************
* SPSocialSwitch
**********************************************/
export interface SPSocialSwitch {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* SPSocialSwitchCollections
**********************************************/
export interface SPSocialSwitchCollections {

}

/*********************************************
* SpotlightResult
**********************************************/
export interface SpotlightResult {
	Order?: { results: Array<number> };
	ResultCode?: number;
}

/*********************************************
* SpotlightResultCollections
**********************************************/
export interface SpotlightResultCollections {

}

/*********************************************
* IThemeManager
**********************************************/
export interface IThemeManager extends ThemeManagerCollections, ThemeManagerMethods, Base.IBaseQuery<ThemeManager, IThemeManagerQuery> {

}

/*********************************************
* IThemeManagerCollection
**********************************************/
export interface IThemeManagerCollection extends Base.IBaseResults<ThemeManager> {
	done?: (resolve: (value?: Array<ThemeManager>) => void) => void;
}

/*********************************************
* IThemeManagerQueryCollection
**********************************************/
export interface IThemeManagerQueryCollection extends Base.IBaseResults<ThemeManagerOData> {
	done?: (resolve: (value?: Array<ThemeManagerOData>) => void) => void;
}

/*********************************************
* IThemeManagerQuery
**********************************************/
export interface IThemeManagerQuery extends ThemeManagerOData, ThemeManagerMethods {

}

/*********************************************
* ThemeManager
**********************************************/
export interface ThemeManager extends Base.IBaseResult, ThemeManagerProps, ThemeManagerCollections, ThemeManagerMethods {

}

/*********************************************
* ThemeManagerProps
**********************************************/
export interface ThemeManagerProps {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* ThemeManagerPropMethods
**********************************************/
export interface ThemeManagerPropMethods {
	ContextThemeManager(): Base.IBaseQuery<SP.Utilities.ThemeManager, SP.Utilities.ThemeManagerOData> & SP.Utilities.ThemeManagerCollections & SP.Utilities.ThemeManagerMethods;
}

/*********************************************
* ThemeManagerCollections
**********************************************/
export interface ThemeManagerCollections extends ThemeManagerPropMethods {

}

/*********************************************
* ThemeManagerOData
**********************************************/
export interface ThemeManagerOData extends Base.IBaseResult, ThemeManagerProps, ThemeManagerMethods {
	ContextThemeManager: SP.Utilities.ThemeManager & SP.Utilities.ThemeManagerCollections;
}

/*********************************************
* ThemeManagerMethods
**********************************************/
export interface ThemeManagerMethods {
	addTenantTheme(name?: string, themeJson?: string): Base.IBaseExecution<boolean>;
	applyTheme(name?: string, themeJson?: string): Base.IBaseExecution<string>;
	deleteTenantTheme(name?: string): Base.IBaseExecution<any>;
	getAvailableThemes(): Base.IBaseCollection<SP.Utilities.JsonTheme>;
	getHideDefaultThemes(): Base.IBaseExecution<boolean>;
	getTenantTheme(name?: string): Base.IBaseExecution<SP.Utilities.JsonTheme>;
	getTenantThemingOptions(): Base.IBaseExecution<SP.Utilities.ThemingOptions>;
	setHideDefaultThemes(hideDefaultThemes?: boolean): Base.IBaseExecution<boolean>;
	updateTenantTheme(name?: string, themeJson?: string): Base.IBaseExecution<boolean>;
}

/*********************************************
* Utility
**********************************************/
export interface Utility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* UtilityCollections
**********************************************/
export interface UtilityCollections {

}

/*********************************************
* WopiHostUtility
**********************************************/
export interface WopiHostUtility {
	Id4a81de82eeb94d6080ea5bf63e27023a?: string;
}

/*********************************************
* WopiHostUtilityCollections
**********************************************/
export interface WopiHostUtilityCollections {

}

/*********************************************
* WopiProperties
**********************************************/
export interface WopiProperties {
	AccessToken?: string;
	AccessTokenTtl?: number;
	AppIconUrl?: string;
	ErrorMessageToDisplay?: string;
	RedirectUrl?: string;
	WebApplicationUrl?: string;
}

/*********************************************
* WopiPropertiesCollections
**********************************************/
export interface WopiPropertiesCollections {

}

/*********************************************
* UploadStatus
**********************************************/
export interface UploadStatus {
	ExpectedContentRange?: string;
	ExpirationDateTime?: any;
	UploadId?: any;
}

/*********************************************
* UploadStatusCollections
**********************************************/
export interface UploadStatusCollections {

}
