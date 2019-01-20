import { SP } from "gd-sprest-def";
import { IBaseExecution, IBaseQueryExecution, IBaseResult } from "../../utils/types/base";
import { IUserCustomActionMethods, } from ".";

/**
 * User Custom Action Methods
 */
export interface IUserCustomActionMethods {
    /**
     * Deletes the user custom action.
     */
    delete(): IBaseExecution;
}

/**
 * User Custom Action Query Properties
 */
export interface IUserCustomActionQueryProps { }

/**
 * User Custom Action Query Result
 */
export interface IUserCustomActionQueryResult extends IUserCustomActionMethods, SP.UserCustomAction { }

/**
 * User Custom Action Result
 */
export interface IUserCustomActionResult extends IUserCustomActionMethods, SP.UserCustomAction, IUserCustomActionQueryProps, IBaseResult<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> { }

/**
 * User Custom Action
 */
export interface IUserCustomAction extends IUserCustomActionMethods, IUserCustomActionQueryProps, IBaseQueryExecution<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> { }