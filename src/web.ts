import {Core} from './core.ts';

// Web Class
export class Web extends Core {
    /******************************************************************************************************************************** */
    // Public Methods
    /******************************************************************************************************************************** */

    // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
    public applyTheme() {}

    // Applies the specified site definition or site template to the Web site that has no template applied to it.
    public applyWebTemplate() {}

    // Deletes the Web site.
    public deleteObject() {}

    // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
    public doesPushNotificationSubscriberExist() {}

    // Returns whether the current user has the given set of permissions.
    public doesUserHavePermissions() {}

    // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
    public ensureUser() {}

    //
    public getAppBdcCatalog() {}

    // 
    public getAppBdcCatalogForAppInstance() {}

    // Retrieves an AppInstance installed on this Site.
    public getAppInstanceById() {}

    // Retrieves all AppInstances installed on this site that are instances of the specified App.
    public getAppInstancesByProductId() {}

    // Returns a collection of site templates available for the site.
    public getAvailableWebTemplates() {}

    // Gets the list template gallery, site template gallery, or Web Part gallery for the Web site.
    public getCatalog() {}

    // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
    public getChanges() {}

    // Gets the specified external content type in a line-of-business (LOB) system application.
    public getEntity() {}

    // Returns the file object located at the specified server-relative URL.
    public getFileByServerRelativeUrl() {}

    // Returns the folder object located at the specified server-relative URL.
    public getFolderByServerRelativeUrl() {}

    // Gets the push notification subscriber over the site for the specified device application instance ID.
    public getPushNotificationSubscriber() {}

    // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
    public getPushNotificationSubscribersByArgs() {}

    // Queries for the push notification subscribers over the site for the specified user.
    public getPushNotificationSubscribersByUser() {}

    // Returns the collection of child sites of the current site based on the specified query.
    public getSubwebsForCurrentUser() {}

    // Returns the user corresponding to the specified member identifier for the current site.
    public getUserById() {}

    // Gets the effective permissions that the specified user has within the current application scope.
    public getUserEffectivePermissions() {}

    //
    public initPropertiesFromJson() {}

    // Uploads and installs an app package to this site.
    public loadAndInstallApp() {}

    // Uploads and installs an App package on the site in a specified locale.
    public loadAndInstallAppInSpecifiedLocale() {}

    // Uploads an App package and creates an instance from it.
    public loadApp() {}

    // Returns the name of the image file for the icon that is used to represent the specified file.
    public mapToIcon() {}

    // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
    public registerPushNotificationSubscriber() {}

    // Unregisters the subscriber for push notifications from the site.
    public unregisterPushNotificationSubscriber() {}

    // Updates the database with changes that are made to the Web site.
    public update() {}
}