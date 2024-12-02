import { ITargetInfoProps } from "../../@types/utils";
import { Isites } from "../../@types/v2";
import { ContextInfo } from "../lib/contextInfo";
import { Base, Request, RequestType } from "../utils";

/**
 * Sites
 * The sites graph endpoint.
 */
export const sites: Isites = ((props: { siteId?: string, targetInfo?: ITargetInfoProps } = {}) => {
    let sites = new Base(props.targetInfo);

    // Default the properties
    sites.targetInfo.defaultToWebFl = true;
    sites.targetInfo.endpoint = "_api/v2.0/sites/" + (props.siteId || ContextInfo?.siteId?.replace(/[{}]/g, ''));
    sites.targetInfo.requestType = RequestType.GraphGet;

    // Add the methods
    Request.addMethods(sites, { __metadata: { type: "@odata.context/_api/v2.0/$metadata#sites" } });

    // Return the sites
    return sites;
}) as any as Isites;

/** Returns the current web. */
sites.getCurrentWeb = () => { return sites().sites(ContextInfo.webId.replace(/^\{|\}$/g, '')) as any }

/** Returns a list by its title from the current web. */
sites.getList = (props: { siteId?: string, title: string }) => { return sites({ siteId: props.siteId }).lists(props.title); }