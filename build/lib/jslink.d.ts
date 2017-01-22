import { IJSLink, ITemplates } from "../definitions";
/**
 * JS Link
 */
export declare class JSLink {
    /**
     * Field to Method Mapper
     */
    private static _fieldToMethodMapper;
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
     * Method to get the form type
     * @param ctx - The client context.
     */
    private static getFormType(ctx);
    /**
     * Method to register the CSR override
     */
    register(): void;
    /**
     * Method to render the default html for a field.
     * @param ctx - The client context.
     * @param field - The form field.
     * @param formType - The form type. (Display, Edit, New or View)
     */
    static renderField(ctx: any, field: any, formType?: any): any;
}
