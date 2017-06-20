import { IBase, IGroup, IGroupCreationInformation, IGroupQueryResults, IResults } from "..";
/**
 * Site Groups
 */
export interface ISiteGroups extends IResults<IGroup>, IBase<IResults<IGroup>, IResults<IGroupQueryResults>> {
    /**
     * Adds a site to the site collection.
     * @param groupInfo - The group creation information.
     */
    add(groupInfo: IGroupCreationInformation): IBase<IGroup>;
    /**
     * Returns a group from the collection based on the member ID of the group.
     * @param id - The site group id.
     */
    getById(id: any): IBase<IGroup>;
    /**
     * Returns a cross-site group from the collection based on the name of the group.
     * @param name - The name of the group. The group name is specified in its LoginName property.
     */
    getByName(name: any): IBase<IGroup>;
    /**
     * Method to get the next set of results.
     */
    next(): IBase<ISiteGroups>;
    /**
     * Removes the group with the specified member ID from the collection.
     * @param id - The ID of the group to remove.
     */
    removeById(id: any): IBase;
    /**
     * Removes the cross-site group with the specified name from the collection.
     * @param name - The name of the group to remove. The group name is specified in its LoginName property.
     */
    removeByLoginName(name: any): IBase;
}
