System.register(["./attachment/attachment", "./attachmentFiles/attachmentFiles", "./audit/audit", "./contentType/contentType", "./contentType/contentTypes", "./eventReceiver/eventReceiver", "./eventReceiver/eventReceivers", "./field/field", "./field/fields", "./fieldLink/fieldLinks", "./file/file", "./file/files", "./fileVersion/fileVersion", "./fileVersion/fileVersions", "./folder/folder", "./folder/folders", "./group/group", "./group/siteGroups", "./item/items", "./limitedWebPartManager/limitedWebPartManager", "./list/list", "./item/listItem", "./list/lists", "./peopleManager/peopleManager", "./peoplePicker/peoplePicker", "./profileLoader/profileLoader", "./propertyValues/propertyValues", "./roleAssignment/roleAssignment", "./roleAssignment/roleAssignments", "./roleDefinition/roleDefinition", "./roleDefinition/roleDefinitions", "./search/search", "./site/site", "./socialFeed/socialFeed", "./user/user", "./user/users", "./userCustomAction/userCustomAction", "./userCustomAction/userCustomActions", "./userProfile/userProfile", "./version/version", "./view/view", "./view/views", "./viewFieldCollection/viewFieldCollection", "./web/web", "./web/webinfos", "./web/webs"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var attachment_1, attachmentFiles_1, audit_1, contentType_1, contentTypes_1, eventReceiver_1, eventReceivers_1, field_1, fields_1, fieldLinks_1, file_1, files_1, fileVersion_1, fileVersions_1, folder_1, folders_1, group_1, siteGroups_1, items_1, limitedWebPartManager_1, list_1, listItem_1, lists_1, peopleManager_1, peoplePicker_1, profileLoader_1, propertyValues_1, roleAssignment_1, roleAssignments_1, roleDefinition_1, roleDefinitions_1, search_1, site_1, socialFeed_1, user_1, users_1, userCustomAction_1, userCustomActions_1, userProfile_1, version_1, view_1, views_1, viewFieldCollection_1, web_1, webinfos_1, webs_1, Mapper;
    return {
        setters: [
            function (attachment_1_1) {
                attachment_1 = attachment_1_1;
            },
            function (attachmentFiles_1_1) {
                attachmentFiles_1 = attachmentFiles_1_1;
            },
            function (audit_1_1) {
                audit_1 = audit_1_1;
            },
            function (contentType_1_1) {
                contentType_1 = contentType_1_1;
            },
            function (contentTypes_1_1) {
                contentTypes_1 = contentTypes_1_1;
            },
            function (eventReceiver_1_1) {
                eventReceiver_1 = eventReceiver_1_1;
            },
            function (eventReceivers_1_1) {
                eventReceivers_1 = eventReceivers_1_1;
            },
            function (field_1_1) {
                field_1 = field_1_1;
            },
            function (fields_1_1) {
                fields_1 = fields_1_1;
            },
            function (fieldLinks_1_1) {
                fieldLinks_1 = fieldLinks_1_1;
            },
            function (file_1_1) {
                file_1 = file_1_1;
            },
            function (files_1_1) {
                files_1 = files_1_1;
            },
            function (fileVersion_1_1) {
                fileVersion_1 = fileVersion_1_1;
            },
            function (fileVersions_1_1) {
                fileVersions_1 = fileVersions_1_1;
            },
            function (folder_1_1) {
                folder_1 = folder_1_1;
            },
            function (folders_1_1) {
                folders_1 = folders_1_1;
            },
            function (group_1_1) {
                group_1 = group_1_1;
            },
            function (siteGroups_1_1) {
                siteGroups_1 = siteGroups_1_1;
            },
            function (items_1_1) {
                items_1 = items_1_1;
            },
            function (limitedWebPartManager_1_1) {
                limitedWebPartManager_1 = limitedWebPartManager_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (listItem_1_1) {
                listItem_1 = listItem_1_1;
            },
            function (lists_1_1) {
                lists_1 = lists_1_1;
            },
            function (peopleManager_1_1) {
                peopleManager_1 = peopleManager_1_1;
            },
            function (peoplePicker_1_1) {
                peoplePicker_1 = peoplePicker_1_1;
            },
            function (profileLoader_1_1) {
                profileLoader_1 = profileLoader_1_1;
            },
            function (propertyValues_1_1) {
                propertyValues_1 = propertyValues_1_1;
            },
            function (roleAssignment_1_1) {
                roleAssignment_1 = roleAssignment_1_1;
            },
            function (roleAssignments_1_1) {
                roleAssignments_1 = roleAssignments_1_1;
            },
            function (roleDefinition_1_1) {
                roleDefinition_1 = roleDefinition_1_1;
            },
            function (roleDefinitions_1_1) {
                roleDefinitions_1 = roleDefinitions_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            },
            function (site_1_1) {
                site_1 = site_1_1;
            },
            function (socialFeed_1_1) {
                socialFeed_1 = socialFeed_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (userCustomAction_1_1) {
                userCustomAction_1 = userCustomAction_1_1;
            },
            function (userCustomActions_1_1) {
                userCustomActions_1 = userCustomActions_1_1;
            },
            function (userProfile_1_1) {
                userProfile_1 = userProfile_1_1;
            },
            function (version_1_1) {
                version_1 = version_1_1;
            },
            function (view_1_1) {
                view_1 = view_1_1;
            },
            function (views_1_1) {
                views_1 = views_1_1;
            },
            function (viewFieldCollection_1_1) {
                viewFieldCollection_1 = viewFieldCollection_1_1;
            },
            function (web_1_1) {
                web_1 = web_1_1;
            },
            function (webinfos_1_1) {
                webinfos_1 = webinfos_1_1;
            },
            function (webs_1_1) {
                webs_1 = webs_1_1;
            }
        ],
        execute: function () {
            /**
             * Mapper
             */
            exports_1("Mapper", Mapper = {
                attachment,
                attachmentfiles,
                audit,
                contenttype, contenttypes,
                eventreceiver, eventreceivers,
                field, fields,
                fieldlinks,
                file, files,
                fileversion, fileversions,
                folder, folders,
                group, sitegroups,
                limitedwebpartmanager,
                list, lists,
                listitem, items,
                peoplemanager,
                peoplepicker,
                profileloader,
                propertyvalues,
                roleassignment, roleassignments,
                roledefinition, roledefinitions,
                search,
                site,
                socialfeed,
                user, users,
                usercustomaction, usercustomactions,
                userprofile,
                version,
                view, views,
                viewfieldcollection,
                web, webinfos, webs
            });
        }
    };
});
//# sourceMappingURL=index.js.map