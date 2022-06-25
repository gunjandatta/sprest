import { RoleDefinition } from "gd-sprest-def/lib/SP";
import { IcopyPermissionLevel, IcopyPermissionLevelProps } from "../../../@types/helper/methods";
import { Site } from "../../lib";
import { SPTypes } from "../../sptypes";
declare var SP;

/**
 * Copies a permission level to the current or specified web.
 */
export const copyPermissionLevel: IcopyPermissionLevel = (props: IcopyPermissionLevelProps): PromiseLike<RoleDefinition> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Ensure the base permissions exist
        if (SP && SP.BasePermissions) {
            // Set the context and get the role definitions
            let ctx = props.WebUrl ? new SP.ClientContext(props.WebUrl) : SP.ClientContext.get_current();

            // Get the base permission
            var basePerm = ctx.get_site().get_rootWeb().get_roleDefinitions().getByName(props.BasePermission);
            ctx.load(basePerm);
            ctx.executeQueryAsync(
                // Success
                () => {
                    // Copy the base permissions
                    let basePermissions = basePerm.get_basePermissions();
                    let permissions = new SP.BasePermissions();
                    let removePermissions = props.RemovePermissions || [];
                    for (let key in SPTypes.BasePermissionTypes) {
                        let permission = SPTypes.BasePermissionTypes[key];

                        // See if the base permission has this
                        if (basePermissions.has(permission) && removePermissions.indexOf(permission) < 0) {
                            // Set the permission
                            permissions.set(permission);
                        }
                    }

                    // Parse the custom permissions to add
                    let newPermissions = props.AddPermissions || [];
                    for (let i = 0; i < newPermissions.length; i++) {
                        // Set the flag
                        permissions.set(newPermissions[i]);
                    }

                    // Create the role definition
                    let roleDefInfo = new SP.RoleDefinitionCreationInformation();
                    roleDefInfo.set_basePermissions(permissions);
                    roleDefInfo.set_description(props.Description);
                    roleDefInfo.set_name(props.Name);
                    roleDefInfo.set_order(props.Order);

                    // Add the role definition
                    let roleDef = ctx.get_site().get_rootWeb().get_roleDefinitions().add(roleDefInfo);
                    ctx.load(roleDef);

                    // Execute the request
                    ctx.executeQueryAsync(() => {
                        // Get the role definition
                        Site(props.WebUrl).RootWeb().RoleDefinitions().getById(roleDef.get_id()).execute(roleDef => {
                            // Resolve the request
                            resolve(roleDef);
                        }, reject);
                    }, reject);
                },

                // Error
                () => {
                    // Reject the request
                    reject("Permission not found in site: " + props.WebUrl);
                }
            );
        } else {
            // Reject the request
            reject("The 'SP' core library is not available.");
        }
    });
}