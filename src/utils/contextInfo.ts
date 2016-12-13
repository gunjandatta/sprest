module $REST {
    /*********************************************************************************************************************************/
    // Context Information
    // This class will return the _spPageContextInfo.
    /*********************************************************************************************************************************/
    export class ContextInfo {
        // The current context information
        private static get _contextInfo() { return window["_spPageContextInfo"] || {
            existsFl: false,
            isAppWeb: false,
            siteAbsoluteUrl: "",
            siteServerRelativeUrl: "",
            userId: 0,
            webAbsoluteUrl: "",
            webServerRelativeUrl: ""
        }};

        // Alerts Enabled
        static get alertsEnabled():boolean { return this._contextInfo.alertsEnabled; }

        // Allow Silverlight Prompt
        static get allowSilverlightPrompt():boolean { return this._contextInfo.allowSilverlightPrompt == "True" ? true : false; }

        // Client Server Time Delta
        static get clientServerTimeDelta():number { return this._contextInfo.clientServerTimeDelta; }

        // Cross Domain Photos Enabled
        static get crossDomainPhotosEnabled():boolean { return this._contextInfo.crossDomainPhotosEnabled; }

        // Current Culture Name
        static get currentCultureName():string { return this._contextInfo.currentCultureName; }

        // Current Language
        static get currentLanguage():string { return this._contextInfo.currentLanguage; }

        // Current UI Culture Name
        static get currentUICultureName():string { return this._contextInfo.currentUICultureName; }

        // Environment
        static get env():string { return this._contextInfo.env; }

        // Exists Flag
        static get existsFl():boolean { return this._contextInfo.existsFl == null; }

        // Has Manage Web Permissions
        static get hasManageWebPermissions():boolean { return this._contextInfo.hasManageWebPermissions; }

        // Is Anonymous Guest User
        static get isAnonymousGuestUser():boolean { return this._contextInfo.isAnonymousGuestUser; }

        // Is App Web
        static get isAppWeb():boolean { return this._contextInfo.isAppWeb; }

        // Is Site Administrator
        static get isSiteAdmin():boolean { return this._contextInfo.isSiteAdmin; }

        // Layouts Url
        static get layoutsUrl():string { return this._contextInfo.layoutsUrl; }

        // Page Item Id
        static get pageItemId():number { return this._contextInfo.pageItemId; }

        // Page List Id
        static get pageListId():string { return this._contextInfo.pageListId; }

        // Page Personalization Scope
        static get pagePersonalizationScope():number { return this._contextInfo.pagePersonalizationScope; }

        // Profile Url
        static get profileUrl():string { return this._contextInfo.profileUrl; }

        // Server Request Path
        static get serverRequestPath():string { return this._contextInfo.serverRequestPath; }

        // Site Absolute Url
        static get siteAbsoluteUrl():string { return this._contextInfo.siteAbsoluteUrl; }

        // Site Client Tag
        static get siteClientTag():string { return this._contextInfo.siteClientTag; }

        // Site Server Relative Url
        static get siteServerRelativeUrl():string { return this._contextInfo.siteServerRelativeUrl; }

        // System User Key
        static get systemUserKey():string { return this._contextInfo.systemUserKey; }

        // Tenant App Version
        static get tenantAppVersion():string { return this._contextInfo.tenantAppVersion; }

        // Theme Cache Token
        static get themeCacheToken():string { return this._contextInfo.themeCacheToken; }

        // Update From Digest Page Loaded
        static get updateFromDigestPageLoaded():Date { return this._contextInfo.updateFromDigestPageLoaded; }

        // User Id
        static get userId():number { return this._contextInfo.userId; }

        // User Login Name
        static get userLoginName():string { return this._contextInfo.userLoginName; }

        // Web Absolute Url
        static get webAbsoluteUrl():string { return this._contextInfo.webAbsoluteUrl; }

        // Web Language
        static get webLanguage():number { return this._contextInfo.webLanguage; }

        // Web Logo Url
        static get webLogoUrl():string { return this._contextInfo.webLogoUrl; }

        // Web Permissions Mask
        static get webPermMask():$REST.ComplexTypes.BasePermissions { return this._contextInfo.webPermMask; }

        // Web Server Relative Url
        static get webServerRelativeUrl():string { return this._contextInfo.webServerRelativeUrl; }

        // Web Template
        static get webTemplate():string { return this._contextInfo.webTemplate; }

        // Web Title
        static get webTitle():string { return this._contextInfo.webTitle; }

        // Web UI Version
        static get webUIVersion():number { return this._contextInfo.webUIVersion; }
    }
}