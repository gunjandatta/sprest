/**
 * Mapper
 */
import { audit } from "./audit/mapper";
import { eventreceiver, eventreceivers } from "./eventReceiver/mapper";
import {
    attachment, attachmentfiles,
    file, files,
    fileversion, fileversions,
    folder, folders,
    limitedwebpartmanager
} from "./file/mapper";
import {
    contenttype, contenttypes,
    field, fieldlinks, fields,
    items, list, listitem, lists,
    version,
    view, viewfieldcollection, views
} from "./list/mapper";
import { navigationservicerest } from "./navigation/mapper";
import { propertyvalues } from "./propertyValues/mapper";
import { search } from "./search/mapper";
import {
    roleassignment, roleassignments,
    roledefinition, roledefinitions
} from "./security/mapper";
import {
    site,
    tenantapp, tenantappcatalog, tenantapps,
    utility,
    web, webinfos, webs
} from "./site/mapper";
import {
    peoplemanager,
    profileloader,
    socialfeed,
    userprofile
} from "./social/mapper";
import {
    group, sitegroups,
    peoplepicker,
    user, users
} from "./user/mapper";
import { usercustomaction, usercustomactions } from "./userCustomAction/mapper";
export const Mapper = {
    attachment, attachmentfiles,
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
    navigationservicerest,
    peoplemanager,
    peoplepicker,
    profileloader,
    propertyvalues,
    roleassignment, roleassignments,
    roledefinition, roledefinitions,
    search,
    site,
    socialfeed,
    tenantapp, tenantappcatalog, tenantapps,
    user, users,
    usercustomaction, usercustomactions,
    userprofile,
    utility,
    version,
    view, views,
    viewfieldcollection,
    web, webinfos, webs
};

/**
 * Types
 */
import * as Types from "./types";
export {
    Types
};