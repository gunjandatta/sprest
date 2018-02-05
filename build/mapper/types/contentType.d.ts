import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IFieldResult, IFields, IFieldLink, IFieldLinks, IListResult } from ".";
export interface IContentTypeCreationInformation {
    Description?: string;
    Group?: string;
    Id?: string;
    Name: string;
}
export interface IContentTypeMethods {
    delete(): IBase;
    update(data: any): IBase;
}
export interface IContentTypeProps {
    Description: string;
    DisplayFormTemplateName: string;
    DisplayFormUrl: string;
    DocumentTemplate: string;
    DocumentTemplateUrl: string;
    EditFormTemplateName: string;
    EditFormUrl: string;
    Group: string;
    Hidden: boolean;
    Id: Types.SP.IStringValue;
    JSlink: string;
    MobileDisplayFormUrl: string;
    MobileEditFormUrl: string;
    MobileNewFormUrl: string;
    Name: string;
    NewFormTemplateName: string;
    NewFormUrl: string;
    Readonly: boolean;
    SchemaXml: string;
    SchemaXmlWithResourceTokens: string;
    Scope: string;
    Sealed: boolean;
    StringId: string;
}
export interface IContentTypeQueryProps {
    DescriptionResource(): IBase;
    FieldLinks(): IFieldLinks;
    FieldLinks(guid: string): IBase<IFieldLink>;
    Fields(): IFields;
    Fields(internalNameOrTitle: string): IFields;
    NameResource(): IBase;
    Parent(): IContentTypeMethods;
    WorkflowAssociations(): IBase;
}
export interface IContentTypeQueryResult extends IContentTypeMethods, IContentTypeProps {
    DescriptionResource: Types.SP.IResourcePath;
    FieldLinks: Types.SP.IResults<IFieldLink>;
    Fields: Types.SP.IResults<IFieldResult>;
    NameResource: Types.SP.IResourcePath;
    Parent: IListResult | Types.SP.IWebResult;
    WorkflowAssociations: Types.SP.IResults<any>;
}
export interface IContentTypeResult extends IContentTypeMethods, IContentTypeProps, IContentTypeQueryProps, IBase<IContentType, IContentTypeResult, IContentTypeQueryResult> {
}
export interface IContentType extends IContentTypeMethods, IContentTypeQueryProps, IBase<IContentType, IContentTypeResult, IContentTypeQueryResult> {
}
