import { SP } from "gd-sprest-def";
import * as Types from "../../types";
import { IBase } from "../../utils/types";
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
export interface IFileVersionQueryResult extends IFileVersionMethods, SP.FileVersion {
    /**
     * A value that specifies the user that represents the creator of the file version.
     */
    CreatedBy: Types.SP.IUserResult;
}

/**
 * File Version Result
 */
export interface IFileVersionResult extends IFileVersionMethods, SP.FileVersion, IFileVersionQueryProps, IBase<IFileVersion, IFileVersionResult, IFileVersionQueryResult> { }

/**
 * File Version
 */
export interface IFileVersion extends IFileVersionMethods, IFileVersionQueryProps, IBase<IFileVersion, IFileVersionResult, IFileVersionQueryResult> { }