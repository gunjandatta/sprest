import { Base, SP } from "gd-sprest-def";
import { ITargetInfoProps } from "../../utils/types/targetInfo";

/**
 * List
 */
export const List: IList;

/**
 * List
 */
export interface IList {
    /**
     * Creates an instance of the library.
     * @param listName - The name of the list.
     * @param targetInfo - (Optional) The target information.
     */
    (listName: string, targetInfo?: ITargetInfoProps): SP.IList;

    /**
     * A static method to get the list by the entity name.
     * @param props - The list entity request properties.
     */
    getByEntityName(props: IListEntityProps): SP.IList;

    /**
     * A static method to get the list data from the SP.List.GetListAsDataStream endpoint.
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    getDataAsStream(listFullUrl: string, parameters?: any): Base.IBaseExecution<IListDataStream>;
}

/**
 * List Data Stream
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