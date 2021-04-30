import { BasePermissions } from "gd-sprest-def/lib/SP/complextypes";
import { IhasPermissions } from "../../../@types/helper/methods";
declare var SP;

/**
 * Determines if the user has permissions, based on the permission kind value
 */
export const hasPermissions: IhasPermissions = (permissionMask: BasePermissions, permissions: Array<number> | number = []): boolean => {
    // Set the permissions
    let requestedPermissions = typeof (permissions) === "number" ? [permissions] : permissions;

    // Default the permission flag
    let hasPermissions = true;

    // Parse the requested permissions
    for (let i = 0; i < requestedPermissions.length; i++) {
        let permission = requestedPermissions[i];

        // Determine the value to use
        let sequence = permissionMask.Low;
        if (permission >= 32) {
            // Update the sequence
            sequence = permissionMask.High;
            permission -= 32;
        }

        // See if the user doesn't have permission
        if (!(((2 ^ (permission - 1)) | sequence) == sequence)) {
            // Set the flag and break from the loop
            hasPermissions = false;
            break;
        }
    }

    // Return the result
    return hasPermissions;
}