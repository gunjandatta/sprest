/**
 * Sets a site group owner.
 * This uses JSOM to set a site group owner's property to another group. You can only set the owner to a user, using the REST API.
 * @param groupName The group name to update.
 * @param ownerName The owner group name. 
 */
export const setGroupOwner: IsetGroupOwner;
export interface IsetGroupOwner {
    (groupName: string, ownerName: string): PromiseLike<void>;
}
