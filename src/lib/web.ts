/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Web
    // The SPWeb object.
    /*********************************************************************************************************************************/
    export class Web extends Base {

        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/

        constructor(settings:ITargetInfoType, executeRequestFl?:boolean) {
            // Call the base constructor
            super(settings, executeRequestFl);

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "web";

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
        }
    }

    /*********************************************************************************************************************************/
    // Library Methods
    /*********************************************************************************************************************************/
    Library.web = {};
    Library.web[RequestType.Get] = [
        "doesPushNotificationSubscriberExist", "getAppInstanceById", "getAppInstancesByProductId", "getAvailableWebTemplates",
        "getCatalog", "getContextWebInformation", "getCustomListTemplates", "getDocumentLibraries", "getFileByServerRelativeUrl",
        "getFolderByServerRelativeUrl", "getList", "getPushNotificationSubscriber", "getPushNotificationSubscribersByArgs",
        "getPushNotificationSubscribersByUser", "getSubwebsFilteredForCurrentUser", "getUserById", "getWebUrlFromPageUrl", "mapsToIcon"
    ];
    Library.web[RequestType.GetDataAsParameter] = ["doesUserHavePermissions", "getUserEffectivePermissions"];
    Library.web[RequestType.Post] = [
        "applyTheme", "applyWebTemplate", "breakRoleInheritance", "deleteObject", "getAppBdcCatalog", "getAppBdcCatalogForAppInstance", "getEntity",
        "registerPushNotificationSubscriber", "resetRoleInheritance", "unregisterPushNotificationSubscriber"
    ];
    Library.web[RequestType.PostDataAsParameter] = ["addCustomAction", "ensureUser"];
    Library.web[RequestType.PostDataInBodyNoArgs] = ["executeRemoteLOB", "getChanges", "loadAndInstallApp", "loadAndInstallAppInSpecifiedLocale", "loadApp", "processExternalNotification"];
    Library.web[RequestType.Custom] = [
        { name: "addContentType", "function": function (data) { return this.executePost("contenttypes", null, data, true, "SP.ContentType"); } },
        { name: "addCustomAction", "function": function (data) { return this.executePost("usercustomactions", null, data, true, "SP.UserCustomAction"); } },
        { name: "addExistingContentType", "function": function (data) { return this.executePost("contenttypes/addAvailableContentType", data); } },
        { name: "addField", "function": function (data) { return this.executePost("fields/add", null, data, true, "SP.Field"); } },
        { name: "addFieldAsXml", "function": function (data) { return this.executePost("fields/createFieldAsXml", null, { parameters: { __metadata: { type: "SP.XmlSchemaFieldCreationInformation" }, Options: window["SP"].AddFieldOptions.addFieldInternalNameHint, SchemaXml: data } }, true); } },
        { name: "addFile", "function": function (data, content) { return this.executePost("rootfolder/files/add", data, content, true); } },
        { name: "addList", "function": function (data) { return this.executePost("lists", null, data, true, "SP.List"); } },
        { name: "addPermission", "function": function (data) { data.__metadata = { type: "SP.RoleDefinition" }; return this.executePost("roledefinitions", null, data, true, "SP.RoleDefinition"); } },
        { name: "addSiteGroup", "function": function (name) { return this.executePost("sitegroups", null, { Title: name }, true, "SP.Group"); } },
        { name: "addSubFolder", "function": function (name) { return this.executePost("rootfolder/folders/add", name); } },
        { name: "addWeb", "function": function (data) { return this.get_Webs().add(data); } },
        { name: "getContentType", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("contenttypes?$filter=Name eq '" + title + "'"); } },
        { name: "getContentTypeById", "function": function (id) { return this.executeGet("contenttypes/getById", id); } },
        { name: "getCustomAction", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("usercustomactions?$filter=Name eq '" + title + "' or Title eq '" + title + "'"); } },
        { name: "getField", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "' or InternalName eq '" + title + "' or StaticName eq '" + title + "'"); } },
        { name: "getFieldById", "function": function (id) { return this.executeGet("fields/getById", id); } },
        { name: "getFieldByInternalName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=InternalName eq '" + name + "'"); } },
        { name: "getFieldByStaticName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=StaticName eq '" + name + "'"); } },
        { name: "getFieldByTitle", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "'"); } },
        { name: "getFile", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("rootfolder/files?$filter=Name eq '" + name + "'"); } },
        { name: "getListById", "function": function (id) { return this.executeGet("lists/getById", id); } },
        { name: "getListByTitle", "function": function (title) { return this.executeGet("lists/getByTitle", title); } },
        { name: "getSiteGroupById", "function": function (id) { return this.executeGet("sitegroups/getById", id); } },
        { name: "getSiteGroupByName", "function": function (name) { return this.executeGet("sitegroups/getByName", name); } },
        { name: "getSubFolder", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("rootfolder/folders?$filter=Name eq '" + name + "'"); } },
        { name: "getUserById", "function": function (id) { return this.executeGet("siteusers?$filter=Id eq " + id); } },
        { name: "getUserByLogin", "function": function (login) { return this.executeGet("siteusers/getByLoginName", null, login); } },
        { name: "hasAccess", "function": function (permissions) { return /*hasAccess(this, permissions);*/ } },
        { name: "sendEmail", "function": function (data) { data = { properties: data }; data.properties.__metadata = { type: "SP.Utilities.EmailProperties" }; return this.executePost("_api/SP.Utilities.Utility.SendEmail", null, data, true); } },
        { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.Web", "MERGE"); } }
    ];
}
