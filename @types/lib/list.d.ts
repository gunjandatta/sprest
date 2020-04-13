import { Base, SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../utils";

/**
 * #### Get list from the current web
 * ```typescript
 * import { List } from "gd-sprest";
 * 
 * List("Site Assets").execute(list => {
 *   ...
 * });
 * ```
 * 
 *
 * #### Query a list to include various collections
 * ```typescript
 * import { List } from "gd-sprest";
 * 
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
    (listName: string, targetInfo?: ITargetInfoProps): SP.IList;

    /**
     * @category List
     * A static method to get the list by the entity name.
     * @param props - The list entity request properties.
     */
    getByEntityName(props: IListEntityProps): SP.IList;

    /**
     * A static method to get the list data from the SP.List.GetListAsDataStream endpoint.
     * @category List
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    getDataAsStream(listFullUrl: string, parameters?: SP.RenderListDataParameters): Base.IBaseExecution<IListDataStream>;
}

/**
 * List Data Stream
 * @category List
 */
export interface IListDataStream<RowProps = SP.ListItem> {
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
    callback?: (list: SP.List) => void;

    /** The list entity name. */
    name: string;

    /** The target information to pass to the web request. */
    targetInfo?: ITargetInfoProps;

    /** The relative url of the web containing the list. */
    url?: string;
}