import {Promise} from "../../utils";
import {SPConfigTypes} from "../../types";
import {
    ComplexTypes,
    IContentType, IContentTypes,
    IField, IFields,
    IFile, IFolder,
    IList, ILists,
    IListItems,
    ISite,
    ISPCfgContentTypeInfo, ISPConfigProps, ISPCfgFieldInfo, ISPCfgListInfo, ISPCfgViewInfo, ISPCfgWebPartInfo,
    IUserCustomAction, IUserCustomActions,
    IView,
    IWeb
} from "../../definitions";
import {
    ContextInfo,
    List,
    Site,
    Web
} from "..";

/*********************************************************************************************************************************/
// SharePoint Configuration
/*********************************************************************************************************************************/
export class SPConfig {
    /**
     * Global Properties
     */

    // The SharePoint Configuration
    private _configuration:ISPConfigProps

    // The target web url
    private _webUrl:string;

     /**
      * Constructor
      */
    constructor(cfg:ISPConfigProps, webUrl?:string) {
        // Save the configuration
        this._configuration = cfg;

        // Save the target web url
        this._webUrl = webUrl;
    }

    /**
     * Public Methods
     */

    // Method to install the configuration
    install(callback?:any, cfgType?:number) {
        // Default the index
        cfgType = typeof(cfgType) === "number" ? cfgType : 0;

        // Uninstall by the type
        let target = this.installByType(cfgType);

        // Ensure the target exists
        if(target) {
            // Wait for the target requests to complete
            target.done(() => {
                // Execute the next method
                this.install(callback, cfgType+1);
            });
        } else {
            // Log
            console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");

            // See if the callback exists
            if(callback && typeof(callback) === "function") {
                // Execute the callback
                callback();
            }
        }
    }

    // Method to install by configuration type
    installByType = (cfgType:number, callback?:any, targetName?:string) => {
        let target:IContentTypes | IFields | IFolder | ILists | IUserCustomActions = null;

        // Update the target name
        targetName = targetName ? targetName.toLowerCase() : targetName;

        // Execute the method based on the index
        switch(cfgType) {
            // Content Types
            case SPConfigTypes.ContentTypes:
                // Set the target
                target = (new Web(this._webUrl)).ContentTypes();

                // Log
                console.log("[gd-sprest][ContentType] Creating the content types.");

                // Create the content types
                this.createContentTypes(target, this._configuration.ContentTypes);
                break;

            // Fields
            case SPConfigTypes.Fields:
                // Set the target
                target = (new Web(this._webUrl)).Fields();

                // Log
                console.log("[gd-sprest][Field] Creating the site columns.");

                // Create the fields
                this.createFields(target, this._configuration.Fields);
                break;

            // Lists
            case SPConfigTypes.Lists:
                // Set the target
                target = (new Web(this._webUrl)).Lists();

                // Log
                console.log("[gd-sprest][List] Creating the lists.");

                // Create the lists
                this.createLists(target, this._configuration.ListCfg, targetName);
                break;

            // Site User Custom Actions
            case SPConfigTypes.SiteUserCustomActions:
                // Set the target
                target = (new Site()).UserCustomActions();

                // Log
                console.log("[gd-sprest][CustomAction] Creating the site user custom actions.");

                // Create the user custom actions
                this.createUserCustomActions(target, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Site : null, targetName);
                break;

            // Web Parts
            case SPConfigTypes.WebParts:
                // Set the target to the root web
                target = (new Web(ContextInfo.siteServerRelativeUrl))
                    // Get the web part gallery
                    .Lists("Web Part Gallery")
                    // Get the root folder
                    .RootFolder();

                // Log
                console.log("[gd-sprest][WebPart] Creating the web parts.");

                // Create the web parts
                this.createWebParts(target, this._configuration.WebPartCfg ? this._configuration.WebPartCfg : null);
                break;

            // Site User Custom Actions
            case SPConfigTypes.WebUserCustomActions:
                // Set the target
                target = (new Web(this._webUrl)).UserCustomActions();

                // Log
                console.log("[gd-sprest][CustomAction] Creating the web user custom actions.");

                // Create the user custom actions
                this.createUserCustomActions(target, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Web : null, targetName);
                break;
        }

        // Ensure the callback and target objects exist
        if(callback && target) {
            // Wait for the target requests to complete
            target.done(() => {
                // Execute the callback
                callback();
            });
        }

        // Return the target object
        return target;
    }

    // Method to install a specific list
    installList(listName:string, callback?:any) { this.installByType(SPConfigTypes.Lists, callback, listName); }

    // Method to install a specific site custom action
    installSiteCustomAction(caName:string, callback?:any) { this.installByType(SPConfigTypes.SiteUserCustomActions, callback, caName); }

    // Method to install a specific web custom action
    installWebCustomAction(caName:string, callback?:any) { this.installByType(SPConfigTypes.WebUserCustomActions, callback, caName); }

    // Method to uninstall the configuration
    uninstall(callback?:any, cfgType?:number) {
        // Default the index
        cfgType = typeof(cfgType) === "number" ? cfgType : 5;

        // Uninstall by the type
        let target = this.uninstallByType(cfgType);

        // Ensure the target exists
        if(target) {
            // Wait for the target requests to complete
            target.done(() => {
                // Execute the next method
                this.uninstall(callback, cfgType-1);
            });
        } else {
            // Log
            console.log("[gd-sprest] The configuration script completed.");

            // See if the callback exists
            if(callback && typeof(callback) === "function") {
                // Execute the callback
                callback();
            }
        }
    }

    // Method to uninstall by the configuration type
    uninstallByType = (cfgType:number, callback?:any, targetName?:string) => {
        let target:IContentTypes | IFields | IFolder | ILists | IUserCustomActions = null;

        // Update the target name
        targetName = targetName ? targetName.toLowerCase() : targetName;

        // Execute the method based on the index
        switch(cfgType) {
            // Content Types
            case SPConfigTypes.ContentTypes:
                // Set the target
                target = (new Web(this._webUrl)).ContentTypes();

                // Log
                console.log("[gd-sprest][Content Type] Removing the content types.");

                // Create the content types
                this.removeContentTypes(target, this._configuration.ContentTypes);
                break;

            // Fields
            case SPConfigTypes.Fields:
                // Set the target
                target = (new Web(this._webUrl)).Fields();

                // Log
                console.log("[gd-sprest][Field] Removing the site columns.");

                // Remove the fields
                this.removeFields(target, this._configuration.Fields);
                break;

            // Lists
            case SPConfigTypes.Lists:
                // Set the target
                target = (new Web(this._webUrl)).Lists();

                // Log
                console.log("[gd-sprest][List] Removing the lists.");

                // Remove the lists
                this.removeLists(target, this._configuration.ListCfg, targetName);
                break;

            // Site User Custom Actions
            case SPConfigTypes.SiteUserCustomActions:
                // Set the target
                target = (new Site()).UserCustomActions();

                // Log
                console.log("[gd-sprest][CustomAction] Removing the site user custom actions.");

                // Remove the site user custom actions
                this.removeUserCustomActions(target, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Site : null, targetName);
                break;

            // Web Parts
            case SPConfigTypes.WebParts:
                // Set the target to the root web
                target = (new Web(ContextInfo.siteServerRelativeUrl))
                    // Get the web part gallery
                    .Lists("Web Part Gallery")
                    // Get the root folder
                    .RootFolder();

                // Log
                console.log("[gd-sprest][WebPart] Removing the web parts.");

                // Create the web parts
                this.removeWebParts(target, this._configuration.WebPartCfg ? this._configuration.WebPartCfg : null);
                break;

            // Site User Custom Actions
            case SPConfigTypes.WebUserCustomActions:
                // Set the target
                target = (new Web(this._webUrl)).UserCustomActions();

                // Log
                console.log("[gd-sprest][CustomAction] Removing the web user custom actions.");

                // Remove the web user custom actions
                this.removeUserCustomActions(target, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Web : null, targetName);
                break;
        }

        // Ensure the callback and target objects exist
        if(callback && target) {
            // Wait for the target requests to complete
            target.done(() => {
                // Execute the callback
                callback();
            });
        }

        // Return the target object
        return target;
    }

    // Method to install a specific list
    uninstallList(listName:string, callback?:any) { this.uninstallByType(SPConfigTypes.Lists, callback, listName); }

    // Method to install a specific site custom action
    uninstallSiteCustomAction(caName:string, callback?:any) { this.uninstallByType(SPConfigTypes.SiteUserCustomActions, callback, caName); }

    // Method to install a specific web custom action
    uninstallWebCustomAction(caName:string, callback?:any) { this.uninstallByType(SPConfigTypes.WebUserCustomActions, callback, caName); }

    /**
     * Methods
     */

    // Method to create the content type
    private createContentType = (cfgItem:ISPCfgContentTypeInfo, contentTypes:IContentTypes, web?:IWeb) => {
        // Create the web
        web = web ? web : new Web().execute();

        // Get the content types of the web
        web.ContentTypes()
            // Query for the parent content type
            .query({
                Filter: "Name eq '" + (cfgItem.Name || cfgItem.ParentName) + "'",
                Top: 1
            })
            // Execute the request
            .execute((parentContentTypes:IContentTypes) => {
                // See if the content type exists
                if(parentContentTypes.existsFl) {
                    // Add the content type
                    contentTypes.addAvailableContentType(parentContentTypes.results[0].Id.StringValue).execute((contentType) => {
                        let props = {};

                        // See if we need to update the content type
                        if(contentType.Name == cfgItem.Name && contentType.JSlink == cfgItem.JSLink) { return; }

                        // Log
                        console.log("[gd-sprest][Content Type] Updating the properties for the '" + cfgItem.Name + "' content type.");

                        // Set the properties
                        cfgItem.JSLink ? props["JSLink"] = cfgItem.JSLink : null;
                        cfgItem.Name ? props["Name"] = cfgItem.Name : null;

                        // Update the content type
                        contentType.update(props).execute(() => {
                            // Log
                            console.log("[gd-sprest][Content Type] The properties for the '" + cfgItem.Name + "' was updated successfully.");
                        });
                    }, true);
                } else {
                    // See if this is a sub-web
                    if(web.ServerRelativeUrl != ContextInfo.siteServerRelativeUrl) {
                        // Log
                        console.log("[gd-sprest][Content Type] The parent content type '" + cfgItem.ParentName + "' was not found in the current web.");

                        // Check the root web
                        this.createContentType(cfgItem, contentTypes, new Web(ContextInfo.siteServerRelativeUrl));
                    } else {
                        // Log
                        console.log("[gd-sprest][Content Type] The parent content type '" + cfgItem.ParentName + "' was not found in the root web.");
                    }
                }
            });
    }

    // Method to create the content types
    private createContentTypes = (contentTypes:IContentTypes, cfg:Array<ISPCfgContentTypeInfo>, listInfo?:ISPCfgListInfo) => {
        // Ensure configuration exist
        if(cfg == null || cfg.length == 0) { return; }

        // Clear the content types in the configuration
        for(let i=0; i<cfg.length; i++) { cfg[i].ContentType = null; }

        // Execute the request to get the content types
        contentTypes.execute(() => {
            let counter = 0;
            let listName = listInfo && listInfo.ListInformation ? listInfo.ListInformation.Title : null;

            // Parse the content types
            for(let i=0; i<contentTypes.results.length; i++) {
                let contentType = contentTypes.results[i];

                // See if the content type is in the configuration
                if(this.isInConfiguration(contentType, "Name", cfg, "Name", "ContentType")) {
                    // Increment the counter
                    counter ++;

                    // Log
                    console.log("[gd-sprest][Content Type] The content type '" + contentType.Name + "' already exists in the " + (listName ? "'" + listName + "' list" : "current web") + ".");
                }
            }

            // Parse the configuration
            for(let i=0; i<cfg.length; i++) {
                // See if the content type exists
                if(cfg[i].ContentType) { continue; }

                // Log
                console.log("[gd-sprest][Content Type] Creating the '" + cfg[i].Name + "' content type in the " + (listName ? "'" + listName + "' list" : "current web") + ".");

                // Create the content type
                this.createContentType(cfg[i], contentTypes);
            }
        });
    }

    // Method to create the fields
    private createFields = (fields:IFields, cfg:Array<ISPCfgFieldInfo>, listInfo?:ISPCfgListInfo) => {
        // Ensure configuration exist
        if(cfg == null || cfg.length == 0) { return; }

        // Clear the fields in the configuration
        for(let i=0; i<cfg.length; i++) { cfg[i].Field = null; }

        // Execute the request to get the fields
        fields.execute(() => {
            let counter = 0;
            let fldTitle:IField = null;
            let titleFieldName = listInfo ? listInfo.TitleFieldDisplayName : null;
            let listName = listInfo && listInfo.ListInformation ? listInfo.ListInformation.Title : null;

            // Parse the fields
            for(let i=0; i<fields.results.length; i++) {
                let field = fields.results[i];

                // See if this is the title field and we are updating it
                if(field.InternalName == "Title" && titleFieldName && titleFieldName != field.InternalName) {
                    // Update the field
                    field.update({ Title: titleFieldName }).execute((response) => {
                        // See if the response was successful
                        if(response.existsFl) {
                            // Log
                            console.log("[gd-sprest][Field] The title field was successfully updated to '" + titleFieldName + "' for the '" + listName + "' list.");
                        } else {
                            // Log
                            console.log("[gd-sprest][Field] Error updating the title field '" + titleFieldName + "' for the '" + listName + "' list.");
                        }
                    });

                    // Continue the loop
                    continue;
                }

                // See if the field is in the configuration
                if(this.isInConfiguration(field, "InternalName", cfg, "Name", "Field")) {
                    // Increment the counter
                    counter ++;

                    // Log
                    console.log("[gd-sprest][Field] The field '" + field.InternalName + "' already exists in the " + (listName ? "'" + listName + "' list" : "current web") + ".");
                }
            }

            // Parse the configuration
            for(let i=0; i<cfg.length; i++) {
                // See if the field exists
                if(cfg[i].Field) { continue; }

                // Log
                console.log("[gd-sprest][Field] Creating the field '" + cfg[i].Name + "' field in the " + (listName ? "'" + listName + "' list" : "current web") + ".");

                // Create the field, but wait for the previous request to complete first
                fields.createFieldAsXml(cfg[i].SchemaXml).execute(true);
            }
        });
    }

    // Method to create the lists
    private createLists = (lists:ILists, cfg:Array<ISPCfgListInfo>, listName?:string) => {
        // Ensure lists exist
        if(cfg == null || cfg.length == 0) { return; }

        // Parse the configuration
        for(let i=0; i<cfg.length; i++) {
            let listInfo = cfg[i].ListInformation;

            // See if we are creating a specific list
            if(listName && listInfo.Title.toLowerCase() != listName) { continue; }

            // Get the list
            lists.getByTitle(listInfo.Title).execute((list) => {
                // See if the list exists
                if(list.existsFl) {
                    // Log
                    console.log("[gd-sprest][List] The list '" + listInfo.Title + "' already exists.");

                    // Update the list
                    this.updateList(list.Title, list, cfg[i]);
                } else {
                    // Remove spaces from the list name
                    let listName = listInfo.Title;
                    listInfo.Title = listName.replace(/ /g, "");

                    // Add the list
                    lists.add(listInfo)
                    // Execute the request
                    .execute((list) => {
                        // Restore the list name in the configuration
                        listInfo.Title = listName;

                        // See if we need to update the list
                        if(list.existsFl && list.Title != listName) {
                            // Update the list
                            list.update({ Title: listName }).execute(() => {
                                // Update the list
                                list = lists.getByTitle(listName);
                                this.updateList(listName, list, cfg[i]);
                            });
                        } else {
                            // Update the list
                            this.updateList(list.Title, list, cfg[i]);
                        }
                    });
                }

                // Return the list
                return list;
            }, true);
        };
    }

    // Method to create the list views
    private createListViews = (listName:string, list:IList, cfg:Array<ISPCfgViewInfo>) => {
        // Ensure view configurations exist
        if(cfg == null || cfg.length == 0) { return; }

        // Parse the view configurations
        for(let i=0; i<cfg.length; i++) {
            // Get the view
            list.Views().getByTitle(cfg[i].ViewName).execute((view) => {
                // Ensure the view exists
                if(view.existsFl) {
                    // Log
                    console.log("[gd-sprest][List] The '" + cfg[i].ViewName + "' view already exists for the '" + listName + "' list.");

                    // Update the view
                    this.updateListView(listName, view, cfg[i]);
                } else {
                    // Log
                    console.log("[gd-sprest][List] Creating the '" + cfg[i].ViewName + "' view for the '" + listName + "' list.");
                    
                    // Create the view
                    list.Views().add({
                        Title: cfg[i].ViewName
                    }).execute((view) => {
                        // Update the view
                        this.updateListView(listName, view, cfg[i]);
                    });
                }
            });
        }
    }

    // Method to create the user custom actions
    private createUserCustomActions = (customActions:IUserCustomActions, cfg:Array<ComplexTypes.UserCustomActionCreationInformation>, customActionName?:string) => {
        // Ensure custom actions exist
        if(cfg == null || cfg.length == 0) { return; }

        // Parse the configuration
        for(let i=0; i<cfg.length; i++) {
            // See if we are creating a specific custom action
            if(customActionName && cfg[i].Name.toLowerCase() != customActionName) { continue; }

            // Query for this custom action
            customActions.query({
                Filter: "Name eq '" + cfg[i].Name + "'"
            })
            // Execute the request, while waiting for the previous request to complete
            .execute((ca) => {
                // See if this custom action exists
                if(ca.existsFl) {
                    // Log
                    console.log("[gd-sprest][CustomAction] The custom action '" + cfg[i].Name + "' already exists.");
                } else {
                    // Log
                    console.log("[gd-sprest][CustomAction] Creating the '" + cfg[i].Name + "' custom action.");

                    // Create the custom action
                    customActions.add(cfg[i]).execute();
                }
            }, true);
        }
    }

    // Method to create the web parts
    private createWebParts = (folder:IFolder, cfg:Array<ISPCfgWebPartInfo>, listInfo?:ISPCfgListInfo) => {
        // Ensure the configuration exists
        if(cfg == null || cfg.length == 0) { return; }

        // Clear the web parts in the configuration
        for(let i=0; i<cfg.length; i++) { cfg[i].File = null; }

        // Get the webpart files
        folder.Files()
            // Set the query
            .query({
                GetAllItems: true,
                Top: 500
            })
            // Execute the request
            .execute((files) => {
                let counter = 0;

                // Parse the files
                for(let i=0; i<files.results.length; i++) {
                    let file = files.results[i];

                    // See if the webpart is in the configuration
                    if(this.isInConfiguration(file, "Name", cfg, "FileName", "File")) {
                        // Log
                        console.log("[gd-sprest][WebPart] The webpart '" + file.Name + "' already exists.");

                        // See if all the webparts have been removed
                        if(++counter == cfg.length) { break; }
                    }
                }

                // Parse the web parts
                for(let i=0; i<cfg.length; i++) {
                    let wpCfg = cfg[i];

                    // See if the web part exists
                    if(wpCfg.File) { continue; }

                    // Log
                    console.log("[gd-sprest][WebPart] Creating the '" + wpCfg.FileName + "' webpart.");

                    // Trim the xml
                    let xml = wpCfg.XML.trim();

                    // Convert the string to an array buffer
                    let buffer = new ArrayBuffer(xml.length * 2);
                    let bufferView = new Uint16Array(buffer);
                    for(let j=0; j<xml.length; j++) {
                        bufferView[j] = xml.charCodeAt(j);
                    }

                    // Create the webpart, but execute the requests one at a time
                    folder.Files().add(true, cfg[i].FileName, buffer).execute((file) => {
                        // See if group exists
                        if(wpCfg.Group) {
                            // Set the target to the root web
                            (new Web(ContextInfo.siteServerRelativeUrl))
                                // Get the web part gallery
                                .Lists("Web Part Gallery")
                                // Get the Items
                                .Items()
                                // Query for this webpart
                                .query({
                                    Filter: "FileLeafRef eq '" + cfg[i].FileName + "'"
                                })
                                // Execute the request
                                .execute((items) => {
                                    // Update the item
                                    items.results[0].update({
                                        Group: wpCfg.Group
                                    }).execute();
                                });
                        }

                        // Wait for the requests to complete
                        file.done(() => {
                            // Log
                            console.log("[gd-sprest][WebPart] The '" + file.Name + "' webpart file was uploaded successfully.");
                        });
                    });
                }
            });
    }

    // Method to determine if the configuration contains the target
    private isInConfiguration = (target:IContentType | IField | IFile | ISPCfgFieldInfo, propName:string, cfg:Array<ISPCfgContentTypeInfo | ISPCfgFieldInfo | ISPCfgWebPartInfo>, cfgPropName:string, cfgRefName:string) => {
        // Parse the configuration
        for(let i=0; i<cfg.length; i++) {
            let cfgItem = cfg[i];

            // Compare the properties
            if((target[propName] + "").toLowerCase() == (cfgItem[cfgPropName] + "").toLowerCase()) {
                // Set the reference to the target
                cfgItem[cfgRefName] = target;

                // Is in the configuration
                return true;
            }
        }

        // Not in the configuration
        return false;
    }

    // Method to remove the content types
    private removeContentTypes = (contentTypes:IContentTypes, cfg:Array<ISPCfgContentTypeInfo>) => {
        // Ensure configuration exist
        if(cfg == null || cfg.length == 0) { return; }

        // Get the content types
        contentTypes.execute(() => {
            // Parse the content types
            for(let i=0; i<contentTypes.results.length; i++) {
                let contentType = contentTypes.results[i];

                // See if the content type is in the configuration
                if(this.isInConfiguration(contentType, "Name", cfg, "Name", "ContentType")) {
                    // Log
                    console.log("[gd-sprest][Content Type] Deleting the '" + contentType.Name + "' content type.");

                    // Delete it
                    contentType.delete().execute(true);
                }
            }
        });
    }

    // Method to remove the fields
    private removeFields(fields:IFields, cfg:Array<ISPCfgFieldInfo>, listInfo?:ISPCfgListInfo) {
        // Ensure configuration exist
        if(cfg == null || cfg.length == 0) { return; }

        // Get the fields
        fields.execute(() => {
            // Parse the fields
            for(let i=0; i<fields.results.length; i++) {
                let field = fields.results[i];

                // See if the field is in the configuration
                if(this.isInConfiguration(field, "InternalName", cfg, "Name", "Field")) {
                    // Log
                    console.log("[gd-sprest][Field] Deleting the '" + field.InternalName + "' field.");

                    // Delete it
                    field.delete().execute(true);
                }
            }
        });
    }

    // Method to remove the lists
    private removeLists(lists:ILists, cfg:Array<ISPCfgListInfo>, targetList?:string) {
        // Ensure configuration exist
        if(cfg == null || cfg.length == 0) { return; }

        // Get the lists
        lists.execute(() => {
            // Parse the configuration
            for(let i=0; i<cfg.length; i++) {
                let listName = cfg[i].ListInformation.Title.toLowerCase();

                // See if we are removing a specific list
                if(targetList && targetList != listName.toLowerCase()) { continue; }

                // Parse the lists
                for(let j=0; j<lists.results.length; j++) {
                    let list = lists.results[j];

                    // See if this is a custom list
                    if(list.Title.toLowerCase() == listName) {
                        // Log
                        console.log("[gd-sprest][List] Deleting the '" + list.Title + "' list.");

                        // Delete the list
                        list.delete().execute(true);

                        // Break from the loop
                        break;
                    }
                }
            }            
        });
    }

    // Method to remove the user custom actions
    private removeUserCustomActions = (customActions:IUserCustomActions, cfg:Array<ComplexTypes.UserCustomActionCreationInformation>, customActionName?:string) => {
        // Ensure custom actions exist
        if(cfg == null || cfg.length == 0) { return; }

        // Get the custom actions
        customActions.execute(() => {
            // Parse the configuration
            for(let i=0; i<cfg.length; i++) {
                let caName = cfg[i].Name.toLowerCase();

                // See if we are removing a specific custom action
                if(customActionName && customActionName != caName.toLowerCase()) { continue; }

                // Parse the custom actions
                for(let j=0; j<customActions.results.length; j++) {
                    let ca = customActions.results[j];

                    // See if this is a custom action
                    if(ca.Name.toLowerCase() == caName) {
                        // Log
                        console.log("[gd-sprest][CustomAction] Deleting the '" + ca.Name + "' custom action.");

                        // Delete the custom action
                        ca.delete().execute(true);

                        // Break from the loop
                        break;
                    }
                }
            }
        });
    }

    // Method to remove the web parts
    private removeWebParts(folder:IFolder, cfg:Array<ISPCfgWebPartInfo>) {
        // Ensure the configuration exists
        if(cfg == null || cfg.length == 0) { return; }

        // Get the webpart files
        folder.Files()
            // Set the query
            .query({
                GetAllItems: true,
                Top: 500
            })
            // Execute the request
            .execute((files) => {
                let counter = 0;

                // Parse the files
                for(let i=0; i<files.results.length; i++) {
                    let file = files.results[i];

                    // See if this webpart is in the configuration
                    if(this.isInConfiguration(file, "Name", cfg, "FileName", "File")) {
                        // Log
                        console.log("[gd-sprest][WebPart] Deleting the '" + file.Name + "' webpart.");

                        // Delete it
                        file.delete().execute();

                        // See if all the webparts have been removed
                        if(++counter == cfg.length) { break; }
                    }
                }
            });
    }

    // Method to update the list
    private updateList = (listName:string, list:IList, cfg:ISPCfgListInfo) => {
        // Log
        console.log("[gd-sprest][List] Updating the fields and views of the '" + cfg.ListInformation.Title + "' list.")

        // Get the fields
        let fields = list.Fields();

        // Create the fields
        this.createFields(fields, cfg.CustomFields, cfg);

        // Wait for the requests to complete
        fields.done(() => {
            // Get the content types
            let contentTypes = list.ContentTypes();

            // Create the content types
            this.createContentTypes(contentTypes, cfg.ContentTypes, cfg);

            // Wait for the requests to complete
            contentTypes.done(() => {
                // Create the views
                this.createListViews(listName, list, cfg.ViewInformation);
            })
        });
    }

    // Method to update the view
    private updateListView = (listName:string, view:IView, viewCfg:ISPCfgViewInfo) => {
        // See if the view fields are defined
        if(viewCfg.ViewFields && viewCfg.ViewFields.length > 0) {
            // Log
            console.log("[gd-sprest][List] Updating the view fields for the '" + viewCfg.ViewName + "' view in the '" + listName + "' list.");

            // Clear the view fields
            view.ViewFields().removeAllViewFields().execute(true);

            // Parse the view fields
            for(let i=0; i<viewCfg.ViewFields.length; i++) {
                // Add the view field
                view.ViewFields().addViewField(viewCfg.ViewFields[i]).execute(true);
            }
        }

        // See if we are updating the view properties
        if(viewCfg.JSLink || viewCfg.ViewQuery) {
            let props = {};

            // Log
            console.log("[gd-sprest][List] Updating the view properties for the '" + viewCfg.ViewName + "' view in the '" + listName + "' list.");

            // Set the properties
            viewCfg.JSLink ? props["JSLink"] = viewCfg.JSLink : null;
            viewCfg.ViewQuery ? props["ViewQuery"] = viewCfg.ViewQuery : null;

            // Update the view
            view.update(props).execute(true);
        }

        // Wait for the view requests to complete
        view.done(() => {
            // Log
            console.log("[gd-sprest][List] The view '" + view.Title + "' was updated successfully in the '" + listName + "' list.");
        });
    }
};