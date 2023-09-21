import { IBaseExecution } from "gd-sprest-def/lib/base";
import { RenderListDataParameters } from "gd-sprest-def/lib/SP/complextypes";
import { IList as IListCore, ListItem } from "gd-sprest-def/lib/SP/entitytypes";
import { ITargetInfoProps } from "../utils";

/**
 * #### REST API
 * _api/web/lists/getByTitle('listName')
 *
 * #### Get list from the current web
 *
 * ```typescript
 * List("Site Assets").execute(list => {
 *   let title = list.Title;
 * });
 * ```
 * 
 *
 * #### Query a list to include various collections
 *
 * ```typescript
 * List("Site Assets").query({
 *  Expand: ["ContentTypes", "Fields", "Views"]
 * }).execute(list => {
 *   let contentTypes = list.ContentTypes.results;
 *   let fields = list.Fields.results;
 *   let views = list.Views.results;
 * });
 * ```
 */
export const List: IList;

/**
 * List
 * @category List
 */
export interface IList {
    /**
     * Creates an instance of the library.
     * @category List
     * @param listName - The name of the list.
     * @param targetInfo - (Optional) The target information.
     */
    (listName: string, targetInfo?: ITargetInfoProps): IListCore;

    /**
     * @category List
     * A static method to get the list by the entity name.
     * @param props - The list entity request properties.
     */
    getByEntityName(props: IListEntityProps): IListCore;

    /**
     * A static method to get the list data from the SP.List.GetListAsDataStream endpoint.
     * @category List
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    getDataAsStream(listFullUrl: string, parameters?: RenderListDataParameters): IBaseExecution<IListDataStream>;

    /**
     * Runs a flow against a list item.
     */
    runFlow(props: IRunFlow): PromiseLike<IRunFlowResult>;
}

/**
 * List Data Stream
 * @category List
 */
export interface IListDataStream<RowProps = ListItem> {
    FilterFields?: string;
    FilterLink: string;
    FirstRow: number;
    FolderPermissions: string;
    ForceNoHierarchy: string;
    HierarchyHasIndention: string;
    LastRow: number;
    Row: Array<RowProps>;
    RowLimit: number;
}

/**
 * List Entity Properties
 * @category List
 */
export interface IListEntityProps {
    /** The callback method. */
    callback?: (list: IListCore) => void;

    /** The list entity name. */
    name: string;

    /** The target information to pass to the web request. */
    targetInfo?: ITargetInfoProps;

    /** The relative url of the web containing the list. */
    url?: string;
}

/**
 * Properties for running a flow
 */
export interface IRunFlow {
    cloudEnv?: string;
    data: object;
    id?: string;
    list: string;
    token?: string;
    webUrl?: string;
}

/**
 * Flow execution result
 */
export interface IRunFlowResult {
    errorDetails?: object;
    errorMessage?: string;
    executed: boolean;
    flowToken?: string;
}