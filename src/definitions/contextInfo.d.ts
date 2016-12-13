declare module $REST.Types {
    /**
     * Context Information
     */
    interface IContextInfo {
        /** True if the _spPageContextInfo object exists, flase otherwise. */
        existsFl:boolean;
        
        /** Is App Web */
        isAppWeb:boolean;

        /** Site Absolute Url */
        siteAbsoluteUrl:string;

        /** Site Server Relative Url */
        siteServerRelativeUrl:string;

        /** Web Absolute Url */
        webAbsoluteUrl:string;

        /** Web Server Relative Url */
        webServerRelativeUrl:string;
    }
}