import { SP } from "gd-sprest-def";
import { IBaseExecution, IBaseCollection, IBaseCollectionResult } from "../utils/types/base";
import { IGroup, IGroupQueryResult, IGroupResult } from ".";

/**
 * Methods
 */
export interface ISiteGroupsMethods {
    /**
     * Adds a site to the site collection.
     * @param groupInfo - The group creation information.
     */
    add(groupInfo: SP.GroupCreationInformation): IBaseExecution<IGroup, IGroupResult>;

    /**
     * Returns a group from the collection based on the member ID of the group.
     * @param id - The site group id.
     */
    getById(id): IGroup & IBaseExecution<IGroup, IGroupResult, IGroupQueryResult>;

    /**
     * Returns a cross-site group from the collection based on the name of the group.
     * @param name - The name of the group. The group name is specified in its LoginName property.
     */
    getByName(name): IGroup & IBaseExecution<IGroup, IGroupResult, IGroupQueryResult>;

    /**
     * Removes the group with the specified member ID from the collection.
     * @param id - The ID of the group to remove.
     */
    removeById(id): IBaseExecution;

    /**
     * Removes the cross-site group with the specified name from the collection.
     * @param name - The name of the group to remove. The group name is specified in its LoginName property.
     */
    removeByLoginName(name): IBaseExecution;
}

/**
 * Site Groups
 */
export interface ISiteGroups extends ISiteGroupsMethods, IBaseCollection<IGroup, IGroupResult, IGroupQueryResult> { }

/**
 * Site Group Query Results
 */
export interface ISiteGroupQueryResults extends ISiteGroupsMethods, IBaseCollectionResult<IGroupQueryResult> { }

/**
 * Site Group Results
 */
export interface ISiteGroupResults extends ISiteGroupsMethods, IBaseCollectionResult<IGroupResult> { }