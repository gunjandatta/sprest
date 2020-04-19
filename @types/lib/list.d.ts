import { IBaseExecution } from "gd-sprest-def/base";
import { RenderListDataParameters } from "gd-sprest-def/lib/SP/complextypes";
import { IList as IListDef, ListItem } from "gd-sprest-def/lib/SP/entitytypes";
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
    (listName: string, targetInfo?: ITargetInfoProps): IListDef;

    /**
     * @category List
     * A static method to get the list by the entity name.
     * @param props - The list entity request properties.
     */
    getByEntityName(props: IListEntityProps): IListDef;

    /**
     * A static method to get the list data from the SP.List.GetListAsDataStream endpoint.
     * @category List
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    getDataAsStream(listFullUrl: string, parameters?: RenderListDataParameters): IBaseExecution<IListDataStream>;
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
    callback?: (list: IListDef) => void;

    /** The list entity name. */
    name: string;

    /** The target information to pass to the web request. */
    targetInfo?: ITargetInfoProps;

    /** The relative url of the web containing the list. */
    url?: string;
}