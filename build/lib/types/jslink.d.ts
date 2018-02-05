export interface IFieldTemplate {
    DisplayForm?: any;
    EditForm?: any;
    Name: string;
    NewForm?: any;
    View?: any;
}
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
export interface IJSLinkCfg {
    BaseViewID?: number | string;
    ListTemplateType?: number;
    OnPostRender?: any;
    OnPreRender?: any;
    Templates?: ITemplates;
}
export interface IJSLink extends IJSLinkCfg {
    new (cfg?: IJSLinkCfg): IJSLink;
    getTemplate(): IJSLinkCfg;
    register(): void;
}
