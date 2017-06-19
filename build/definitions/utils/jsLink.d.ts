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
 * JS Link Template
 */
export interface IJSLink {
    BaseViewID?: number | string;
    ListTemplateType?: number;
    OnPostRender?: any;
    OnPreRender?: any;
    Templates?: ITemplates;
}
