/**
 * Version
 */
export interface IVersion {
    /** The check-in comment. */
    CheckInComment: string;
    /** The created date. */
    Created: string;
    /** The version id. */
    ID: number;
    /** Flag determining if this is the current version. */
    IsCurrentVersion: boolean;
    /** The file length. */
    Length: number;
    /** The file size. */
    Size: number;
    /** The file url. */
    Url: string;
    /** The version label. */
    VersionLabel: string;
}
