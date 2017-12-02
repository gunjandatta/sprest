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
/**
 * JS Link
 */
export declare class JSLink {
    /**
     * Template Properties
     */
    private _baseViewID;
    BaseViewID: number | string;
    private _listTemplateType;
    ListTemplateType: number;
    private _onPostRender;
    OnPostRender: any;
    private _onPreRender;
    OnPreRender: any;
    private _templates;
    Templates: ITemplates;
    /**
     * Methods
     */
    /**
     * Returns the CSR template.
     */
    getTemplate(): IJSLink;
    /**
     * Method to register the CSR override.
     */
    register(): void;
}
