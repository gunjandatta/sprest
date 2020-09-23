/**
 * Determines if the user has permissions, based on the permission kind value
 * @category Helper
 */
export const hasPermissions: IhasPermissions;
export interface IhasPermissions {
    (permissionMask: any, permissions: Array<number> | number): PromiseLike<boolean>;
}