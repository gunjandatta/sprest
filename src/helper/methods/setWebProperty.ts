import { IsetWebProperty } from "../../../@types/helper/methods";
declare var SP;

/**
 * Adds or updates a key/value pair for a web's property bag
 * This uses JSOM to set a web's property. The REST API doesn't support this at the moment.
 */
export const setWebProperty: IsetWebProperty = (key: string, value: string, siteUrl?: string): PromiseLike<void> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the site groups
        let context = siteUrl ? new SP.ClientContext(siteUrl) : SP.ClientContext.get_current();
        let web = context.get_web();
        let allProps = web.get_allProperties();

        // Set the property
        allProps.set_item(key, value);

        // Save the changes
        context.load(web);
        web.update();

        // Execute the request
        context.executeQueryAsync(resolve, reject);
    });
}
