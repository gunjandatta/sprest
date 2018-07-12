import { IBase } from "../../utils/types";
import { IBasePermissions, IUserCustomActionMethods } from ".";
/**
 * User Custom Action Information
 */
export interface IUserCustomActionCreationInformation {
    /** A value that specifies an implementation specific XML fragment that determines user export interface properties of the custom action. */
    CommandUIExtension?: string;
    /** The description of the custom action. */
    Description?: string;
    /** A value that specifies an implementation-specific value that determines the position of the custom action in the page. */
    Group?: string;
    /** The URL of the image associated with the custom action. */
    ImageUrl?: string;
    /** The location of the custom action. */
    Location?: string;
    /** The name of the custom action. */
    Name: string;
    /** The value that specifies the identifier of the object associated with the custom action. */
    RegistrationId?: string;
    /** The value that specifies the type of object associated with the custom action. Represents an SP.UserCustomActionRegistrationType value. */
    RegistrationType?: number;
    /** The value that specifies the permissions needed for the custom action. */
    Rights?: {
        High: string;
        Low: string;
    };
    /** The value that specifies the ECMAScript to be executed when the custom action is performed. */
    ScriptBlock?: string;
    /** A value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
    ScriptSrc?: string;
    /** The value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
    Sequence?: number;
    /** The display title of the custom action. */
    Title?: string;
    /** The URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
    Url?: string;
}
/**
 * User Custom Action Methods
 */
export interface IUserCustomActionMethods {
    /**
     * Deletes the user custom action.
     */
    delete(): IBase;
}
/**
 * User Custom Action Properties
 */
export interface IUserCustomActionProps {
    /** Gets or sets a value that specifies an implementation specific XML fragment that determines user export interface properties of the custom action. */
    CommandUIExtension: string;
    /** Gets or sets the description of the custom action. */
    Description: string;
    /** Gets or sets a value that specifies an implementation-specific value that determines the position of the custom action in the page. */
    Group: string;
    /** Gets a value that specifies the identifier of the custom action. */
    Id: string;
    /** Gets or sets the URL of the image associated with the custom action. */
    ImageUrl: string;
    /** Gets or sets the location of the custom action. */
    Location: string;
    /** Gets or sets the name of the custom action. */
    Name: string;
    /** Gets or sets the value that specifies the identifier of the object associated with the custom action. */
    RegistrationId: string;
    /** Gets or sets the value that specifies the type of object associated with the custom action. */
    RegistrationType: number;
    /** Gets or sets the value that specifies the permissions needed for the custom action. */
    Rights: IBasePermissions;
    /** Gets a value that specifies the scope of the custom action. */
    Scope: number;
    /** Gets or sets the value that specifies the ECMAScript to be executed when the custom action is performed. */
    ScriptBlock: string;
    /** Gets or sets a value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
    ScriptSrc: string;
    /** Gets or sets the value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
    Sequence: number;
    /** Gets or sets the display title of the custom action. */
    Title: string;
    /** Gets or sets the URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
    Url: string;
    /** Gets a value that specifies an implementation specific version identifier. */
    VersionOfUserCustomAction: string;
}
/**
 * User Custom Action Query Properties
 */
export interface IUserCustomActionQueryProps {
}
/**
 * User Custom Action Query Result
 */
export interface IUserCustomActionQueryResult extends IUserCustomActionMethods, IUserCustomActionProps {
}
/**
 * User Custom Action Result
 */
export interface IUserCustomActionResult extends IUserCustomActionMethods, IUserCustomActionProps, IUserCustomActionQueryProps, IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
}
/**
 * User Custom Action
 */
export interface IUserCustomAction extends IUserCustomActionMethods, IUserCustomActionQueryProps, IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
}
