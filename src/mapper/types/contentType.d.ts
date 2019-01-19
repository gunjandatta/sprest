import { SP } from "gd-sprest-def";
import * as Types from "../../mapper/types";
import { IBaseLib } from "../../utils/types/base";
import { IFieldResult, IFields, IFieldLinks, IListResult } from ".";

/**
 * Content Type Methods
 */
export interface IContentTypeMethods {
    /**
     * Deletes the content type.
     */
    delete(): IBaseLib;

    /**
     * Updates it's properties.
     * @param data - The content type properties to update.
     */
    update(data): IBaseLib;
}

/**
 * Content Type Query Properties
 */
export interface IContentTypeQueryProps {
    DescriptionResource(): IBaseLib;

    /**
     * Gets the column (also known as field) references in the content type.
     */
    FieldLinks(): IFieldLinks;

    /**
     * Gets the column (also known as field) reference in the content type.
     * @param guid - The guid of the field link.
     */
    FieldLinks(guid: string): IBaseLib<SP.FieldLink>;

    /**
     * Gets the fields for the content type.
     */
    Fields(): IFields;

    /**
     * Gets the field for the content type.
     * @param internalNameOrTitle - The internal name or title of the field.
     */
    Fields(internalNameOrTitle: string): IFields;

    NameResource(): IBaseLib;

    /** Gets the parent content type of the content type. */
    Parent(): IContentTypeMethods;

    /**
     * Gets a value that specifies the collection of workflow associations for the content type.
     */
    WorkflowAssociations(): IBaseLib;
}

/**
 * Content Type Query Result
 */
export interface IContentTypeQueryResult extends IContentTypeMethods, SP.ContentType {
    DescriptionResource: SP.ResourcePath;

    /**
     * Gets the column (also known as field) references in the content type.
     */
    FieldLinks: Types.Results.IResults<SP.FieldLink>;

    /**
     * Gets the fields for the content type.
     */
    Fields: Types.Results.IResults<IFieldResult>;

    NameResource: SP.ResourcePath;

    /** Gets the parent content type of the content type. */
    Parent: IListResult | Types.IWebResult;

    /**
     * Gets a value that specifies the collection of workflow associations for the content type.
     */
    WorkflowAssociations: Types.Results.IResults<any>;
}

/**
 * Content Type Result
 */
export interface IContentTypeResult extends IContentTypeMethods, SP.ContentType, IContentTypeQueryProps, IBaseLib<IContentType, IContentTypeResult, IContentTypeQueryResult> { }

/**
 * Content Type
 */
export interface IContentType extends IContentTypeMethods, IContentTypeQueryProps, IBaseLib<IContentType, IContentTypeResult, IContentTypeQueryResult> { }