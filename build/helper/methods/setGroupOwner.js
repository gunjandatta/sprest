"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets the group owner
 * This uses JSOM to set a site group owner's property to another group. You can only set the owner to a user, using the REST API.
 */
exports.setGroupOwner = function (groupName, ownerName) {
    // Return a promise
    return new Promise(function (resolve, reject) {
        // Get the site groups
        var context = new SP.ClientContext();
        var siteGroups = context.get_web().get_siteGroups();
        // Get the groups
        var group = siteGroups.getByName(groupName);
        var owner = siteGroups.getByName(ownerName);
        // Set the owner
        group.set_owner(owner);
        // Save the changes
        group.update();
        // Execute the request
        group.executeQueryAsync(resolve, reject);
    });
};
