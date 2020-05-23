/**
 * Convert a JSON string to a base object
 * @category Helper
 */
export const parse: Iparse;
export interface Iparse {
    <T = any>(jsonString: string): T;
}