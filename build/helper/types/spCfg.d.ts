import { Types } from "../..";
export interface IFieldInfo {
    defaultValue?: string;
    name: string;
    required?: boolean;
    schemaXml?: string;
    title?: string;
    type?: number;
}
export interface IFieldInfoCalculated extends IFieldInfo {
    fieldRefs?: Array<string>;
    format?: number;
    formula?: string;
    resultType?: string;
}
export interface IFieldInfoChoice extends IFieldInfo {
    choices?: string[];
    multi?: boolean;
}
export interface IFieldInfoDate extends IFieldInfo {
    format?: number;
}
export interface IFieldInfoLookup extends IFieldInfo {
    fieldRef?: string;
    multi?: boolean;
    listId?: string;
    listName?: string;
    showField?: string;
    webUrl?: string;
}
export interface IFieldInfoMMS extends IFieldInfo {
    locale?: number;
}
export interface IFieldInfoNote extends IFieldInfo {
    appendFl?: boolean;
    noteType?: number;
    numberOfLines?: number;
}
export interface IFieldInfoNumber extends IFieldInfo {
    decimals?: number;
    max?: number;
    min?: number;
    numberType?: number;
}
export interface IFieldInfoUser extends IFieldInfo {
    multi?: boolean;
    selectionMode?: number;
    selectionScope?: number;
}
export interface ISPCfgContentTypeInfo extends Types.SP.IContentTypeCreationInformation {
    ContentType?: Types.SP.IContentTypeResult;
    FieldRefs?: Array<string>;
    JSLink?: string;
    ParentName?: string;
    ParentWebUrl?: string;
    onCreated?: (ct: Types.SP.IContentTypeResult) => void;
    onUpdated?: (ct: Types.SP.IContentTypeResult) => void;
}
export interface ISPCfgCustomActionInfo {
    Site?: Array<Types.SP.IUserCustomActionCreationInformation>;
    Web?: Array<Types.SP.IUserCustomActionCreationInformation>;
}
export interface ISPCfgFieldInfo extends IFieldInfo {
    onCreated?: (field: Types.SP.IFieldResult) => void;
    onUpdated?: (field: Types.SP.IFieldResult) => void;
}
export interface ISPCfgListInfo {
    ContentTypes?: Array<ISPCfgContentTypeInfo>;
    CustomFields?: Array<ISPCfgFieldInfo>;
    ListInformation: Types.SP.IListCreationInformation;
    TitleFieldDisplayName?: string;
    UserCustomActions?: Array<Types.SP.IUserCustomActionCreationInformation>;
    ViewInformation?: Array<ISPCfgViewInfo>;
    onCreated?: (list: Types.SP.IListResult) => void;
    onUpdated?: (list: Types.SP.IListQueryResult) => void;
}
export interface ISPCfgViewInfo {
    JSLink?: string;
    ViewFields?: Array<string>;
    ViewName: string;
    ViewQuery?: string;
    onCreated?: (view: Types.SP.IViewResult) => void;
    onUpdated?: (view: Types.SP.IView) => void;
}
export interface ISPCfgWebPartInfo {
    FileName: string;
    Group?: string;
    XML: string;
    onCreated?: (file: Types.SP.IFileResult) => void;
    onUpdated?: (file: Types.SP.IFileResult) => void;
}
export interface ISPConfig {
    new (cfg: ISPConfigProps, webUrl?: string): any;
    install(callback?: () => void): any;
    installByType(cfgType: number, callback?: any, targetName?: string): any;
    uninstall(callback?: () => void): any;
    uninstallByType(cfgType: number, callback?: any, targetName?: string): any;
}
export interface ISPConfigProps {
    ContentTypes?: Array<ISPCfgContentTypeInfo>;
    CustomActionCfg?: ISPCfgCustomActionInfo;
    Fields?: Array<ISPCfgFieldInfo>;
    ListCfg?: Array<ISPCfgListInfo>;
    WebPartCfg?: Array<ISPCfgWebPartInfo>;
}
export interface ISPConfigTypes {
    Fields: number;
    ContentTypes: number;
    Lists: number;
    SiteUserCustomActions: number;
    WebUserCustomActions: number;
}
