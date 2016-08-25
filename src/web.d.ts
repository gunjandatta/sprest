// Type definitions for web.js
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta>

declare module $REST {
    /***********************************************************************/
    // The web class.
    /***********************************************************************/
    interface IWeb {
        /***********************************************************************/
        // Public Methods
        /***********************************************************************/
        applyTheme(colorPaletteUrl?:string, fontSchemeUrl?:string, backgroundImageUrl?:string, shareGenerated?:boolean):Object;
        applyWebTemplate():Object;
        deleteObject():Object;
        doesPushNotificationSubscriberExist():Object;
        doesUserHavePermissions():Object;
        ensureUser():Object;
        getAppBdcCatalog():Object;
        getAppBdcCatalogForAppInstance():Object;
        getAppInstanceById():Object;
        getAppInstancesByProductId():Object;
        getAvailableWebTemplates():Object;
        getCatalog():Object;
        getChanges():Object;
        getEntity():Object;
        getFileByServerRelativeUrl():Object;
        getFolderByServerRelativeUrl():Object;
        getPushNotificationSubscriber():Object;
        getPushNotificationSubscribersByArgs():Object;
        getPushNotificationSubscribersByUser():Object;
        getSubwebsForCurrentUser():Object;
        getUserById():Object;
        getUserEffectivePermissions():Object;
        initPropertiesFromJson():Object;
        loadAndInstallApp():Object;
        loadAndInstallAppInSpecifiedLocale():Object;
        loadApp():Object;
        mapToIcon():Object;
        registerPushNotificationSubscriber():Object;
        unregisterPushNotificationSubscriber():Object;
        update():Object;
    }
}