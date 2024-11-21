import { BasePermissions } from "gd-sprest-def/lib/SP/complextypes";
import { IhasPermissions } from "../../../@types/helper/methods";
declare var SP;

/**
 * Determines if the user has permissions, based on the permission kind value
 */
export const hasPermissions: IhasPermissions = (permissionMask: BasePermissions, permissions: Array<number> | number = []): boolean => {
    let hasPermissions = true;

    // Set the permissions
    let requestedPermissions = typeof (permissions) === "number" ? [permissions] : permissions;

    // Parse the requested permissions
    for (let i = 0; i < requestedPermissions.length; i++) {
        let permission = requestedPermissions[i];
        let hasPermission = false;

        // Use the logic from SP.js
        if (permission === 65) {
            hasPermission = (permissionMask.High & 32767) === 32767 && permissionMask.Low === 65535;
        } else {
            let a = permission - 1;
            let b = 1;
            if (a >= 0 && a < 32) {
                hasPermission = 0 !== (permissionMask.Low & b);
            } else if (a >= 32 && a < 64) {
                b = b << a - 32;
                hasPermission = 0 !== (permissionMask.High & b);
            }
        }

        // See if they don't have permission
        if (!hasPermission) {
            // Update the flag
            hasPermissions = false;
            break;
        }
    }

    // Return the result
    return hasPermissions;
}