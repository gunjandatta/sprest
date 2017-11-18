import { IJSLink, ITemplates } from "../definitions/index";
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
