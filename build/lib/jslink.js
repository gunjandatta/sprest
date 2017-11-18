System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, JSLink;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /**
             * JS Link
             */
            JSLink = class JSLink {
                set BaseViewID(value) { this._baseViewID = value; }
                set ListTemplateType(value) { this._listTemplateType = value; }
                set OnPostRender(value) { this._onPostRender = value; }
                set OnPreRender(value) { this._onPreRender = value; }
                set Templates(value) { this._templates = value; }
                /**
                 * Methods
                 */
                /**
                 * Returns the CSR template.
                 */
                getTemplate() {
                    let template = {};
                    // Add the properties
                    if (this._baseViewID) {
                        template.BaseViewID = this._baseViewID;
                    }
                    if (this._listTemplateType) {
                        template.ListTemplateType = this._listTemplateType;
                    }
                    if (this._onPostRender) {
                        template.OnPostRender = this._onPostRender;
                    }
                    if (this._onPreRender) {
                        template.OnPreRender = this._onPreRender;
                    }
                    if (this._templates) {
                        template.Templates = this._templates;
                    }
                    // See if there are fields
                    if (template.Templates && template.Templates.Fields) {
                        let fields = {};
                        // Parse the fields
                        for (let field of template.Templates.Fields) {
                            // Add the field
                            fields[field.Name] = {};
                            // Add the field properties
                            if (field.DisplayForm) {
                                fields[field.Name].DisplayForm = field.DisplayForm;
                            }
                            if (field.EditForm) {
                                fields[field.Name].EditForm = field.EditForm;
                            }
                            if (field.NewForm) {
                                fields[field.Name].NewForm = field.NewForm;
                            }
                            if (field.View) {
                                fields[field.Name].View = field.View;
                            }
                        }
                        // Update the fields
                        template.Templates.Fields = fields;
                    }
                    // Return the template
                    return template;
                }
                /**
                 * Method to register the CSR override.
                 */
                register() {
                    // Get the template manager
                    let templateManager = index_1.ContextInfo.window.SPClientTemplates;
                    templateManager = templateManager ? templateManager.TemplateManager : null;
                    // Ensure it exists
                    if (templateManager) {
                        // Apply the customization
                        templateManager.RegisterTemplateOverrides(this.getTemplate());
                    }
                }
            };
            exports_1("JSLink", JSLink);
        }
    };
});
//# sourceMappingURL=jslink.js.map