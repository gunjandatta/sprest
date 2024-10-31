/**
 * Adds or updates a key/value pair for a web's property bag
 * This uses JSOM to set a web's property. The REST API doesn't support this at the moment.
 * @param key The property key.
 * @param value The property value.
 * @param siteUrl The site url to apply the property to. If blank, it will default to the current web.
 */
export const setWebProperty: IsetWebProperty;
export interface IsetWebProperty {
    (key: string, value: string, siteUrl?: string): PromiseLike<void>;
}
