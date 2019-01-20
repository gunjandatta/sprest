import * as Types from "../../intellisense";
import { IBaseExecution } from "../../utils/types/base";
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
    (listName: string, targetInfo?: ITargetInfoProps): Types.IList;

    /**
     * A static method to get the list by the entity name.
     * @param props - The list entity request properties.
     */
    getByEntityName(props: IListEntityProps): IBaseExecution<Types.IList, Types.IListResult, Types.IListQueryResult>;

    /**
     * A static method to get the list data from the SP.List.GetListAsDataStream endpoint.
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    getDataAsStream(listFullUrl: string, parameters?: any): IBaseExecution<Types.IListDataStream>;
}

/**
 * List Entity Properties
 */
export interface IListEntityProps {
    /** The callback method. */
    callback?: (list: Types.IListResult) => void;

    /** The list entity name. */
    name: string;

    /** The target information to pass to the web request. */
    targetInfo?: ITargetInfoProps;

    /** The relative url of the web containing the list. */
    url?: string;
}