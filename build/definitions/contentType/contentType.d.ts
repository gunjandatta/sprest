import { IContentTypeMethods } from "./contentTypeMethods";
import { IBase, IField, IFields, IFieldLink, IFieldLinks, IStringValue } from "..";
/**
 * Content Type
 */
export interface IContentType extends IContentTypeMethods {
    /** Gets or sets a description of the content type. */
    Description: string;
    DescriptionResource(): IBase;
    /** Gets or sets a value that specifies the name of a custom display form template to use for list items that have been assigned the content type. */
    DisplayFormTemplateName: string;
    /** Gets or sets a value that specifies the URL of a custom display form to use for list items that have been assigned the content type. */
    DisplayFormUrl: string;
    /** Gets or sets a value that specifies the file path to the document template used for a new list item that has been assigned the content type. */
    DocumentTemplate: string;
    /** Gets a value that specifies the URL of the document template assigned to the content type. */
    DocumentTemplateUrl: string;
    /** Gets or sets a value that specifies the name of a custom edit form template to use for list items that have been assigned the content type. */
    EditFormTemplateName: string;
    /** Gets or sets a value that specifies the URL of a custom edit form to use for list items that have been assigned the content type. */
    EditFormUrl: string;
    /**
     * Gets the column (also known as field) references in the content type.
     */
    FieldLinks(): IFieldLinks;
    /**
     * Gets the column (also known as field) reference in the content type.
     * @param guid - The guid of the field link.
     */
    FieldLinks(guid: string): IFieldLink;
    /**
     * Gets the fields for the content type.
     */
    Fields(): IFields;
    /**
     * Gets the field for the content type.
     * @param internalNameOrTitle - The internal name or title of the field.
     */
    Fields(internalNameOrTitle: string): IField;
    /** Gets or sets a value that specifies the content type group for the content type. */
    Group: string;
    /** Gets or sets a value that specifies whether the content type is unavailable for creation or usage directly from a user export interface. */
    Hidden: boolean;
    /** Gets a value that specifies an identifier for the content type. */
    Id: IStringValue;
    /** Gets or sets the JSLink for the content type custom form template. The JSLink property is not supported on Survey or Events lists. A SharePoint calendar is an Events list. */
    JSlink: string;
    MobileDisplayFormUrl: string;
    MobileEditFormUrl: string;
    MobileNewFormUrl: string;
    /** Gets or sets a value that specifies the name of the content type. */
    Name: string;
    NameResource(): IBase;
    /** Gets or sets a value that specifies the name of the content type. */
    NewFormTemplateName: string;
    /** Gets or sets a value that specifies the name of the content type. */
    NewFormUrl: string;
    /** Gets the parent content type of the content type. */
    Parent(): IContentType;
    /** Gets or sets a value that specifies whether changes to the content type properties are denied. */
    Readonly: boolean;
    /** Gets a value that specifies the XML Schema representing the content type. */
    SchemaXml: string;
    /** Gets a non-localized version of the XML schema that defines the content type. */
    SchemaXmlWithResourceTokens: string;
    /** Gets a value that specifies a server-relative path to the content type scope of the content type. */
    Scope: string;
    /** Gets or sets whether the content type can be modified. */
    Sealed: boolean;
    /** A string representation of the value of the Id. */
    StringId: string;
    /**
     * Gets a value that specifies the collection of workflow associations for the content type.
     */
    WorkflowAssociations(): IBase;
}
