/**
 * Fields Template
 */
export interface IFieldTemplate {
    DisplayForm?: any;
    EditForm?: any;
    Name: string;
    NewForm?: any;
    View?: any;
}
/**
 * Templates
 */
export interface ITemplates {
    Body?: any;
    Footer?: any;
    Fields?: Array<IFieldTemplate>;
    Group?: any;
    Header?: any;
    Item?: any;
    OnPostRender?: any;
    OnPreRender?: any;
}
/**
 * JS Link Configuration
 */
export interface IJSLinkCfg {
    /** The base view id. */
    BaseViewID?: number | string;
    /** The list template type. */
    ListTemplateType?: number;
    /** The post render event. */
    OnPostRender?: any;
    /** The pre render event. */
    OnPreRender?: any;
    /** The JSLink template overrides. */
    Templates?: ITemplates;
}
/**
 * JS Link
 */
export interface IJSLink extends IJSLinkCfg {
    /** Constructor */
    new (cfg?: IJSLinkCfg): IJSLink;
    /** Method to get the template configuration. */
    getTemplate(): IJSLinkCfg;
    /** Method to register the JSLink template override. */
    register(): void;
}
export declare const JSLink: IJSLink;
