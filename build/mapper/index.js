"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mapper
 */
var mapper_1 = require("./audit/mapper");
var mapper_2 = require("./eventReceiver/mapper");
var mapper_3 = require("./file/mapper");
var mapper_4 = require("./list/mapper");
var mapper_5 = require("./propertyValues/mapper");
var mapper_6 = require("./search/mapper");
var mapper_7 = require("./security/mapper");
var mapper_8 = require("./site/mapper");
var mapper_9 = require("./social/mapper");
var mapper_10 = require("./user/mapper");
var mapper_11 = require("./userCustomAction/mapper");
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
    group: mapper_10.group, sitegroups: mapper_10.sitegroups,
    limitedwebpartmanager: mapper_3.limitedwebpartmanager,
    list: mapper_4.list, lists: mapper_4.lists,
    listitem: mapper_4.listitem, items: mapper_4.items,
    peoplemanager: mapper_9.peoplemanager,
    peoplepicker: mapper_10.peoplepicker,
    profileloader: mapper_9.profileloader,
    propertyvalues: mapper_5.propertyvalues,
    roleassignment: mapper_7.roleassignment, roleassignments: mapper_7.roleassignments,
    roledefinition: mapper_7.roledefinition, roledefinitions: mapper_7.roledefinitions,
    search: mapper_6.search,
    site: mapper_8.site,
    socialfeed: mapper_9.socialfeed,
    tenantapp: mapper_8.tenantapp, tenantappcatalog: mapper_8.tenantappcatalog, tenantapps: mapper_8.tenantapps,
    user: mapper_10.user, users: mapper_10.users,
    usercustomaction: mapper_11.usercustomaction, usercustomactions: mapper_11.usercustomactions,
    userprofile: mapper_9.userprofile,
    utility: mapper_8.utility,
    version: mapper_4.version,
    view: mapper_4.view, views: mapper_4.views,
    viewfieldcollection: mapper_4.viewfieldcollection,
    web: mapper_8.web, webinfos: mapper_8.webinfos, webs: mapper_8.webs
};
/**
 * Types
 */
var Types = require("./types");
exports.Types = Types;
//# sourceMappingURL=index.js.map