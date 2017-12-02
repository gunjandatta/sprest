import { SPTypes } from "../types";
import { ContextInfo } from ".";

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
    new(cfg?: IJSLinkCfg): IJSLink;

    /** Method to get the template configuration. */
    getTemplate(): IJSLinkCfg;

    /** Method to register the JSLink template override. */
    register(): void;
}

/**
 * JS Link
 */
class _JSLink {
    /**
     * Constructor
     */
    constructor(cfg?: IJSLinkCfg) {
        // See if the configuration exists
        if (cfg) {
            // Set the properties
            this._baseViewID = cfg.BaseViewID;
            this._listTemplateType = cfg.ListTemplateType;
            this._onPostRender = cfg.OnPostRender;
            this._onPreRender = cfg.OnPreRender;
            this._templates = cfg.Templates;
        }
    }

    /**
     * Properties
     */

    // Base View ID
    private _baseViewID: number | string;
    set BaseViewID(value: number | string) { this._baseViewID = value; }

    // List Template Type
    private _listTemplateType: number;
    set ListTemplateType(value: number) { this._listTemplateType = value; }

    // On Post-Render
    private _onPostRender: any;
    set OnPostRender(value: any) { this._onPostRender = value; }

    // On Pre-Render
    private _onPreRender: any;
    set OnPreRender(value: any) { this._onPreRender = value; }

    // Templates
    private _templates: ITemplates;
    set Templates(value: ITemplates) { this._templates = value; }

    /**
     * Methods
     */

    /**
     * Returns the CSR template.
     */
    getTemplate(): IJSLinkCfg {
        let template: IJSLinkCfg = {};

        // Add the properties
        if (this._baseViewID) { template.BaseViewID = this._baseViewID; }
        if (this._listTemplateType) { template.ListTemplateType = this._listTemplateType; }
        if (this._onPostRender) { template.OnPostRender = this._onPostRender; }
        if (this._onPreRender) { template.OnPreRender = this._onPreRender; }
        if (this._templates) { template.Templates = this._templates; }

        // See if there are fields
        if (template.Templates && template.Templates.Fields) {
            let fields = {};

            // Parse the fields
            for (let field of template.Templates.Fields) {
                // Add the field
                fields[field.Name] = {};

                // Add the field properties
                if (field.DisplayForm) { fields[field.Name].DisplayForm = field.DisplayForm; }
                if (field.EditForm) { fields[field.Name].EditForm = field.EditForm; }
                if (field.NewForm) { fields[field.Name].NewForm = field.NewForm; }
                if (field.View) { fields[field.Name].View = field.View; }
            }

            // Update the fields
            template.Templates.Fields = <any>fields;
        }

        // Return the template
        return template;
    }

    /**
     * Method to register the CSR override.
     */
    register() {
        // Get the template manager
        let templateManager = ContextInfo.window.SPClientTemplates;
        templateManager = templateManager ? templateManager.TemplateManager : null;

        // Ensure it exists
        if (templateManager) {
            // Apply the customization
            templateManager.RegisterTemplateOverrides(this.getTemplate());
        }
    }
}
export const JSLink: IJSLink = _JSLink as any;