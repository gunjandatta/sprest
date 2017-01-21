import {IJSLink, ITemplates} from "../definitions";
/**
 * JS Link
 */
export class JSLink {
    /**
     * Template Properties
     */

    // Base View ID
    private _baseViewID:number | string;
    set BaseViewID(value:number | string) { this._baseViewID = value; }

    // List Template Type
    private _listTemplateType:number;
    set ListTemplateType(value:number) { this._listTemplateType = value; }

    // On Post-Render
    private _onPostRender:any;
    set OnPostRender(value:any) { this._onPostRender = value; }

    // On Pre-Render
    private _onPreRender:any;
    set OnPreRender(value:any) { this._onPreRender = value; }

    // Templates
    private _templates:ITemplates;
    set Templates(value:ITemplates) { this._templates = value; }

    /**
     * Method to return the template
     */
    getTemplate():IJSLink {
        let template:IJSLink = {};

        // Add the properties
        if(this._baseViewID) { template.BaseViewID = this._baseViewID; }
        if(this._listTemplateType) { template.ListTemplateType = this._listTemplateType; }
        if(this._onPostRender) { template.OnPostRender = this._onPostRender; }
        if(this._onPreRender) { template.OnPreRender = this._onPreRender; }
        if(this._templates) { template.Templates = this._templates; }

        // See if there are fields
        if(template.Templates && template.Templates.Fields) {
            let fields = {};

            // Parse the fields
            for(let field of template.Templates.Fields) {
                // Add the field
                fields[field.Name] = {};

                // Add the field properties
                if(field.DisplayForm) { fields[field.Name].DisplayForm = field.DisplayForm; }
                if(field.EditForm) { fields[field.Name].EditForm = field.EditForm; }
                if(field.NewForm) { fields[field.Name].NewForm = field.NewForm; }
                if(field.View) { fields[field.Name].View = field.View; }
            }

            // Update the fields
            template.Templates.Fields = <any>fields;
        }

        // Return the template
        return template;
    }
}