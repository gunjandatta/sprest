import { SP } from "gd-sprest-def";
import { IBaseLib, IBaseCollection } from "../../utils/types/base";
import { IGroup, IGroupQueryResult, IGroupResult } from ".";

/**
 * Methods
 */
export interface ISiteGroupsMethods {
    /**
     * Adds a site to the site collection.
     * @param groupInfo - The group creation information.
     */
    add(groupInfo: SP.GroupCreationInformation): IBaseLib<IGroup, IGroupResult>;

    /**
     * Returns a group from the collection based on the member ID of the group.
     * @param id - The site group id.
     */
    getById(id): IGroup & IBaseLib<IGroup, IGroupResult, IGroupQueryResult>;

    /**
     * Returns a cross-site group from the collection based on the name of the group.
     * @param name - The name of the group. The group name is specified in its LoginName property.
     */
    getByName(name): IGroup & IBaseLib<IGroup, IGroupResult, IGroupQueryResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBaseLib<ISiteGroups, ISiteGroupResults>;

    /**
     * Removes the group with the specified member ID from the collection.
     * @param id - The ID of the group to remove.
     */
    removeById(id): IBaseLib;

    /**
     * Removes the cross-site group with the specified name from the collection.
     * @param name - The name of the group to remove. The group name is specified in its LoginName property.
     */
    removeByLoginName(name): IBaseLib;
}

/**
 * Site Groups
 */
export interface ISiteGroups extends ISiteGroupsMethods, IBaseCollection<IGroup, IGroupResult, IGroupQueryResult> { }

/**
 * Site Group Results
 */
export interface ISiteGroupResults extends ISiteGroupsMethods, IBaseCollection<IGroupResult, IGroupResult, IGroupQueryResult> { }