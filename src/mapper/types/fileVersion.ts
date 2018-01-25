import { IBase, IBaseCollection } from "../../utils/types";
import { Types } from "../..";
import {
    IFileVersion, IFileVersionQueryResult, IFileVersionResult
} from ".";

/**
 * File Version Methods
 */
export interface IFileVersionMethods {
    /**
     * Deletes the file version.
     */
    delete(): any;
}

/**
 * File Version Properties
 */
export interface IFileVersionProps {
    /** Gets a value that specifies the check-in comment. */
    CheckInComment: string;

    /** Gets a value that specifies the creation date and time for the file version. */
    Created: string;

    /** Gets the internal identifier for the file version. */
    ID: number;

    /** Gets a value that specifies whether the file version is the current version. */
    IsCurrentVersion: string;

    /**  */
    Size: number;

    /** Gets a value that specifies the relative URL of the file version based on the URL for the site or subsite. */
    Url: string;

    /** Gets a value that specifies the implementation specific identifier of the file. Uses the majorVersionNumber.minorVersionNumber format, for example: 1.2. */
    VersionLabel: string;
}

/**
 * File Version Query Properties
 */
export interface IFileVersionQueryProps {
    /**
     * Gets a value that specifies the user that represents the creator of the file version.
     */
    CreatedBy(): Types.SP.IUser;
}

/**
 * File Version Query Result
 */
export interface IFileVersionQueryResult extends IFileVersionMethods, IFileVersionProps {
    /**
     * A value that specifies the user that represents the creator of the file version.
     */
    CreatedBy: Types.SP.IUserResult;
}

/**
 * File Version Result
 */
export interface IFileVersionResult extends IFileVersionMethods, IFileVersionProps, IFileVersionQueryProps, IBase<IFileVersion, IFileVersionResult, IFileVersionQueryResult> { }

/**
 * File Version
 */
export interface IFileVersion extends IFileVersionMethods, IFileVersionQueryProps, IBase<IFileVersion, IFileVersionResult, IFileVersionQueryResult> { }