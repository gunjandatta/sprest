/**
 * Convert an object to a string
 * @category Helper
 */
export const stringify: IStringify;
export interface IStringify {
    (obj: any): string;
}