import { IhasPermissions } from "../../../@types/helper/methods";
declare var SP;

/**
 * Determines if the user has permissions, based on the permission kind value
 */
export const hasPermissions: IhasPermissions = (permissionMask: any, permissions: Array<number> | number = []): PromiseLike<boolean> => {
    // Method to ensure the core library is loaded
    let load = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the core lib is loaded
            if (window["SP"] && window["SP"].BasePermissions) { resolve(); }
            // Else, wait for the core script to be loaded
            else { window["SP"].SOD.executeFunc("sp.js", "SP.BasePermissions", () => { resolve(); }); }
        });
    };

    // Return a promise
    return new Promise(resolve => {
        // Ensure the core lib is loaded
        load().then(() => {
            let hasPermissions = false;

            // Set the permissions
            let requestedPermissions = typeof (permissions) === "number" ? [permissions] : permissions;

            // Initialize the base permissions from the value
            let basePermissions = new SP.BasePermissions();
            basePermissions.initPropertiesFromJson(permissionMask);

            // Default the permission flag
            hasPermissions = true;

            // Parse the requested permissions
            for (let i = 0; i < requestedPermissions.length; i++) {
                // See if the user has permissions
                if (!basePermissions.has(requestedPermissions[i])) {
                    // Set the flag and break from the loop
                    hasPermissions = false;
                    break;
                }
            }

            // Resolve the promise
            resolve(hasPermissions);
        });
    });
}