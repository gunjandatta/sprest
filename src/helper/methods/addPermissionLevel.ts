import { RoleDefinition } from "gd-sprest-def/lib/SP";
import { IaddPermissionLevel, IaddPermissionLevelProps } from "../../../@types/helper/methods";
import { Site } from "../../lib";
declare var SP;

/**
 * Adds a permission level to the current or specified web.
 */
export const addPermissionLevel: IaddPermissionLevel = (props: IaddPermissionLevelProps): PromiseLike<RoleDefinition> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Ensure the base permissions exist
        if (SP && SP.BasePermissions) {
            // Set the context and get the role definitions
            let ctx = props.WebUrl ? new SP.ClientContext(props.WebUrl) : SP.ClientContext.get_current();

            // Set the base permissions
            let basePermissions = new SP.BasePermissions();
            let permissions = props.Permissions || [];
            for (let i = 0; i < permissions.length; i++) {
                // Set the flag
                basePermissions.set(permissions[i]);
            }

            // Create the role definition
            let roleDefInfo = new SP.RoleDefinitionCreationInformation();
            roleDefInfo.set_basePermissions(basePermissions);
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
        } else {
            // Reject the request
            reject("The 'SP' core library is not available.");
        }
    });
}