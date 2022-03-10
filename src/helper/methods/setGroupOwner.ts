import { IsetGroupOwner } from "../../../@types/helper/methods";
declare var SP;

/**
 * Sets the group owner
 * This uses JSOM to set a site group owner's property to another group. You can only set the owner to a user, using the REST API.
 */
export const setGroupOwner: IsetGroupOwner = (groupName: string, ownerName: string, siteUrl?: string): PromiseLike<void> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the site groups
        let context = siteUrl ? new SP.ClientContext(siteUrl) : SP.ClientContext.get_current();
        let siteGroups = context.get_web().get_siteGroups();

        // Get the groups
        let group = siteGroups.getByName(groupName);
        let owner = siteGroups.getByName(ownerName);

        // Set the owner
        group.set_owner(owner);

        // Save the changes
        group.update();

        // Execute the request
        context.executeQueryAsync(resolve, reject);
    });
}
