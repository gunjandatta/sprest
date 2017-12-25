"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mapper
 */
var mapper_1 = require("./audit/mapper");
var mapper_2 = require("./eventReceiver/mapper");
var mapper_3 = require("./file/mapper");
var mapper_4 = require("./list/mapper");
var mapper_5 = require("./navigation/mapper");
var mapper_6 = require("./propertyValues/mapper");
var mapper_7 = require("./search/mapper");
var mapper_8 = require("./security/mapper");
var mapper_9 = require("./site/mapper");
var mapper_10 = require("./social/mapper");
var mapper_11 = require("./user/mapper");
var mapper_12 = require("./userCustomAction/mapper");
exports.Mapper = {
    attachment: mapper_3.attachment, attachmentfiles: mapper_3.attachmentfiles,
    audit: mapper_1.audit,
    contenttype: mapper_4.contenttype, contenttypes: mapper_4.contenttypes,
    eventreceiver: mapper_2.eventreceiver, eventreceivers: mapper_2.eventreceivers,
    field: mapper_4.field, fields: mapper_4.fields,
    fieldlinks: mapper_4.fieldlinks,
    file: mapper_3.file, files: mapper_3.files,
    fileversion: mapper_3.fileversion, fileversions: mapper_3.fileversions,
    folder: mapper_3.folder, folders: mapper_3.folders,
    group: mapper_11.group, sitegroups: mapper_11.sitegroups,
    limitedwebpartmanager: mapper_3.limitedwebpartmanager,
    list: mapper_4.list, lists: mapper_4.lists,
    listitem: mapper_4.listitem, items: mapper_4.items,
    navigationservicerest: mapper_5.navigationservicerest,
    peoplemanager: mapper_10.peoplemanager,
    peoplepicker: mapper_11.peoplepicker,
    profileloader: mapper_10.profileloader,
    propertyvalues: mapper_6.propertyvalues,
    roleassignment: mapper_8.roleassignment, roleassignments: mapper_8.roleassignments,
    roledefinition: mapper_8.roledefinition, roledefinitions: mapper_8.roledefinitions,
    search: mapper_7.search,
    site: mapper_9.site,
    socialfeed: mapper_10.socialfeed,
    tenantapp: mapper_9.tenantapp, tenantappcatalog: mapper_9.tenantappcatalog, tenantapps: mapper_9.tenantapps,
    user: mapper_11.user, users: mapper_11.users,
    usercustomaction: mapper_12.usercustomaction, usercustomactions: mapper_12.usercustomactions,
    userprofile: mapper_10.userprofile,
    utility: mapper_9.utility,
    version: mapper_4.version,
    view: mapper_4.view, views: mapper_4.views,
    viewfieldcollection: mapper_4.viewfieldcollection,
    web: mapper_9.web, webinfos: mapper_9.webinfos, webs: mapper_9.webs
};
/**
 * Types
 */
var Types = require("./types");
exports.Types = Types;
//# sourceMappingURL=index.js.map