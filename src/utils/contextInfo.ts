module GD.Utils {
    /*********************************************************************************************************************************/
    // Context Information
    // This class will return the _spPageContextInfo.
    /*********************************************************************************************************************************/
    export class ContextInfo {
        // The current context information
        private static get _contextInfo() { return window["_spPageContextInfo"] || {
            isAppWeb: false,
            siteAbsoluteUrl: "",
            siteServerRelativeUrl: "",
            userId: 0,
            webAbsoluteUrl: "",
            webServerRelativeUrl: ""
        }};

        // Is App Web
        static get isAppWeb():boolean { return this._contextInfo.isAppWeb; }

        // Site Absolute Url
        static get siteAbsoluteUrl():string { return this._contextInfo.siteAbsoluteUrl; }

        // Site Server Relative Url
        static get siteServerRelativeUrl():string { return this._contextInfo.siteAbsoluteUrl; }

        // Web Absolute Url
        static get webAbsoluteUrl():string { return this._contextInfo.webAbsoluteUrl; }

        // Web Server Relative Url
        static get webServerRelativeUrl():string { return this._contextInfo.webServerRelativeUrl; }
    }
}