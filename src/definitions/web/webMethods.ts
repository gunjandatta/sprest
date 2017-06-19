import { IWebQueryResult } from "./webResults";
import {
    IBase,
    IFile,
    IFolder,
    IList,
    IUser,
    IWeb,
    ODataQuery
} from "..";

/**
 * Web Methods
 */
export interface IWebMethods extends IBase<IWeb> {
    /**
     * Methods
     */

    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site.
     * @param colorpaletteurl - The server-relative URL of the color palette file.
     * @param fontschemeurl - The server-relative URL of the font scheme.
     * @param backgroundimageurl - The server-relative URL of the background image.
     * @param sharegenerated - True to store the generated theme files in the root site, or false to store them in this site.
     */
    applyTheme(colorpaletteurl, fontschemeurl, backgroundimageurl, sharegenerated): IBase;

    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it.
     * @param name - The site definition or web template name to apply.
     */
    applyWebTemplate(name): IBase;

    /**
     * Creates unique role assignments for the securable object.
     * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
     * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
     */
    breakRoleInheritance(copyRoleAssignments, clearSubScopes): IBase;

    /**
     * Deletes the web.
     */
    delete(): IBase;

    /**
     * Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
     * @param id - The ID of the device app instance.
     */
    doesPushNotificationSubscriberExist(id): IBase;

    /**
     * Returns whether the current user has the given set of permissions.
     * @param high - The highest permission range value.
     * @param low - The lowest permission range value.
     */
    doesUserHavePermissions(high, low): IBase;

    /**
     * Sends data to an OData service.
     * @param inputStream - The OData input object. Used for create or update operations only.
     */
    executeRemoteLOB(inputStream): IBase;

    /**
     * The app BDC catalog.
     */
    getAppBdcCatalog(): IBase;

    /**
     * The app BDC catalog for the specified app instance.
     * @param id - The ID of the app instance.
     */
    getAppBdcCatalogForAppInstance(id): IBase;

    /**
     * Retrieves an AppInstance installed on this Site.
     * @param id - The ID of the app instance.
     */
    getAppInstanceById(id): IBase;

    /**
     * Retrieves all AppInstances installed on this site that are instances of the specified App.
     * @param id - The product ID of the app.
     */
    getAppInstancesByProductId(id): IBase;

    /**
     * Returns a collection of site templates available for the site.
     * @param lcid - The LCID of the site templates to get.
     * @param doIncludeCrossLanguage - True to include language-neutral site templates; otherwise false.
     */
    getAvailableWebTemplates(lcid, doIncludeCrossLanguage): IBase;

    /**
     * Returns the list gallery on the site.
     * @param galleryType - The gallery type. Represents a ListTemplateType value such as WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114, MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125.
     */
    getCatalog(galleryType): IBase;

    /**
     * Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
     * @param query - The change query.
     */
    getChanges(query): IBase;

    /**
     * The context information for the site. Static method.
     */
    getContextWebInformation(): IBase;

    /**
     * The custom list templates for the site.
     */
    getCustomListTemplates(): IBase;

    /**
     * The document libraries on a site. Static method. (SharePoint Online only)
     * @param url - The full URL of the site.
     */
    getDocumentLibraries(url): IBase;

    /**
     * The specified external content type in a line-of-business (LOB) system application.
     * @param namespace - The namespace of the external content type.
     * @param name - The name of the external content type.
     */
    getEntity(namespace, name): IBase;

    /**
     * Returns the file object located at the specified server-relative URL.
     * @param url - The server relative url of the file.
     */
    getFileByServerRelativeUrl(url): IFile;

    /**
     * Returns the folder object located at the specified server-relative URL.
     * @param url - The server relative url of the folder.
     */
    getFolderByServerRelativeUrl(url): IFolder;

    /**
     * The list at the specified site-relative URL. (SharePoint Online only)
     * @param url - The server relative url of the list.
     */
    getList(url): IList;

    /**
     * The push notification subscriber over the site for the specified device application instance ID.
     * @param id - The ID of the device app instance.
     */
    getPushNotificationSubscriber(id): IBase;

    /**
     * Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
     * @param args - Arguments to filter the results. Passed arguments are compared to the subscribers' custom arguments in the store. Pass null or empty arguments to return unfiltered results.
     */
    getPushNotificationSubscribersByArgs(args): IBase;

    /**
     * Queries for the push notification subscribers over the site for the specified user.
     * @param loginName - The login name of the user.
     */
    getPushNotificationSubscribersByUser(loginName): IBase;

    /**
     * Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
     * @param nWebTemplateFilter - The ID of the template used in the site definition of the sites.
     * @param nConfigurationFilter - The ID of the site template used to provision the sites.
     */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter, nConfigurationFilter): IBase;

    /**
     * Returns the user corresponding to the specified member identifier for the current site.
     * @param id - The user id.
     */
    getUserById(id): IUser;

    /**
     * The effective permissions that the specified user has within the current application scope.
     * @param loginName - The user login name.
     */
    getUserEffectivePermissions(loginName): IBase;

    /**
     * The site URL from a page URL. Static method.
     * @param url - The full URL of the SharePoint page, with URL encoded characters as needed.
     */
    getWebUrlFromPageUrl(url);

    /**
     * Uploads and installs an app package to this site.
     * @param appPackageStream - The app package stream.
     */
    loadAndInstallApp(appPackageStream): IBase;

    /**
     * Uploads and installs an App package on the site in a specified locale.
     * @param appPackageStream - The app package stream.
     * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
     */
    loadAndInstallAppInSpecifiedLocale(appPackageStream, installationLocaleLCID): IBase;

    /**
     * Uploads an App package and creates an instance from it.
     * @param appPackageStream - The app package stream.
     * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
     */
    loadApp(appPackageStream, installationLocaleLCID): IBase;

    /**
     * Returns the name of the image file for the icon that is used to represent the specified file.
     * @param filename - The file name. If this parameter is empty, the server returns an empty string.
     * @param progid - The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName (for example, Excel.Sheet or PowerPoint.Slide). This is the ID used by the Windows registry to uniquely identify an object.
     * @param size - The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1.
     */
    mapToIcon(filename, progid, size): IBase;

    /**
     * Processes a notification from an external system.
     * @param stream - The notification message from the external system.
     */
    processExternalNotification(stream): IBase;

    /**
     * Queries the collection.
     * @param oData - The OData information.
     */
    query(query: ODataQuery): IBase<IWebQueryResult>;

    /**
     * Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
     * @param deviceAppInstanceId - The ID of the device app instance.
     * @param serviceToken - The token provided by the notification service to the device to receive notifications.
     */
    registerPushNotificationSubscriber(deviceAppInstanceId, serviceToken): IBase;

    /**
     * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
     */
    resetRoleInheritance(): IBase;

    /**
     * Unregisters the subscriber for push notifications from the site.
     * @param id - The ID of the device app instance.
     */
    unregisterPushNotificationSubscriber(id): IBase;

    /**
     * Updates it's properties.
     * @param data - The list properties to update.
     */
    update(data): IBase;
}