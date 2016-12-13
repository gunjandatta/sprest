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

        // Exists Flag
        static get existsFl():boolean { return this._contextInfo.existsFl == null; }

        // Is App Web
        static get isAppWeb():boolean { return this._contextInfo.isAppWeb; }

        // Site Absolute Url
        static get siteAbsoluteUrl():string { return this._contextInfo.siteAbsoluteUrl; }

        // Site Server Relative Url
        static get siteServerRelativeUrl():string { return this._contextInfo.siteServerRelativeUrl; }

        // Web Absolute Url
        static get webAbsoluteUrl():string { return this._contextInfo.webAbsoluteUrl; }

        // Web Server Relative Url
        static get webServerRelativeUrl():string { return this._contextInfo.webServerRelativeUrl; }
    }
}