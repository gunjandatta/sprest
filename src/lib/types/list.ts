import { Types } from "../../mapper";
import { IBase, ITargetInfo } from "../../utils/types";

/**
 * List
 */
export interface IList {
    /**
     * Creates an instance of the library.
     * @param listName - The name of the list.
     * @param targetInfo - (Optional) The target information.
     */
    (listName: string, targetInfo?: ITargetInfo): Types.IList;

    /**
     * A static method to get the list by the entity name.
     * @param entityTypeName - The entity type name of the list.
     * @param callback - The method to be executed after the request completes.
     */
    getByEntityName(entityTypeName: string, callback: (IList) => void, targetInfo?): IBase<Types.IList, Types.IListResult, Types.IListQueryResult>;

    /**
     * A static method to get the list data from the SP.List.GetListAsDataStream endpoint.
     * @param listFullUrl - The absolute url of the list.
     * @param parameters - The optional list data parameters.
     */
    getDataAsStream(listFullUrl: string, parameters?: any): IBase<Types.IListDataStream>;
}