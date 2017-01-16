import {
    ComplexTypes,
    IUser
} from ".";
/**
 * Recycle Bin Items
 */
export interface recycleBinItem {
    /**
     * Properties
     */

    Author(): IUser;

    AuthorEmail: string;

    AuthorName: string;

    DeletedBy(): IUser;

    DeletedByEmail: string;

    DeletedByName: string;

    DeletedDate: string;

    DeletedDateLocalFormatted: string;

    DirName: string;

    DirNamePath: ComplexTypes.ResourcePath;

    Id: string;

    ItemState: number;

    ItemType: string;

    LeafName: string;

    LeafNamePath: ComplexTypes.ResourcePath;

    Size: number;

    Title: string;
}