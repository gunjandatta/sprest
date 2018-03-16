export * from "./spCfgTypes";
import { ContextInfo, List, Site, Web } from "../lib";
import { Types } from "..";
import {
    FieldSchemaXML, SPCfgFieldType, SPCfgType,
    Types as SPCfgTypes
} from ".";

declare var SP;

/**
 * SharePoint Configuration
 */
class _SPConfig {
    /**
     * Global Properties
     */

    // The selected configuration type to install
    private _cfgType: number;

    // The SharePoint Configuration
    private _configuration: SPCfgTypes.ISPConfigProps

    // The target name to install/uninstall
    private _targetName: string;

    // The target web url
    private _webUrl: string;

    /**
     * Constructor
     */
    constructor(cfg: SPCfgTypes.ISPConfigProps, webUrl?: string) {
        // Save the configuration
        this._configuration = cfg;

        // Save the target web url
        this._webUrl = webUrl;
    }

    /**
     * Public Methods
     */

    // Method to install the configuration
    install(callback?: any, cfgType?: number, targetName?: string) {
        this.loadLocalizedGalleryName((galleryName: string) => {
            // Update the global variables
            this._cfgType = cfgType;
            this._targetName = targetName ? targetName.toLowerCase() : null;

            // Install the web components
            this.installWeb().then(() => {
                // Install the site components
                this.installSite().then(() => {
                    // Create the webparts
                    this.createWebParts(galleryName);

                    // Log
                    console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");

                    // See if the callback exists
                    if (callback && typeof (callback) === "function") {
                        // Execute the callback
                        callback();
                    }
                });
            });
        });
    }

    // Method to install by configuration type
    installByType = (cfgType: number, callback?: any, targetName?: string) => { return this.install(callback, cfgType, targetName); }

    // Method to uninstall the configuration
    uninstall(callback?: any, cfgType?: number, targetName?: string) {
        this.loadLocalizedGalleryName((galleryName: string) => {
            // Update the global variables
            this._cfgType = cfgType;
            this._targetName = targetName;

            // Uninstall the web components
            this.uninstallWeb().then(() => {
                // Uninstall the site components
                this.uninstallSite().then(() => {
                    // Remove the webparts
                    this.removeWebParts(galleryName).then(() => {
                        // Log
                        console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");

                        // See if the callback exists
                        if (callback && typeof (callback) === "function") {
                            // Execute the callback
                            callback();
                        }
                    });
                });
            });
        });
    }

    // Method to uninstall by the configuration type
    uninstallByType = (cfgType: number, callback?: any, targetName?: string) => { return this.uninstall(callback, cfgType, targetName); }

    /**
     * Methods
     */

     private loadLocalizedGalleryName(callback:(galleryName: string) => void) {
        SP.SOD.executeOrDelayUntilScriptLoaded(function () {
            var ctx = SP.ClientContext.get_current();
            var localizedName = SP.Utilities.Utility.getLocalizedString(ctx, "$Resources:webpartgalleryList", "core", SP.PageContextInfo.get_currentLanguage());
            ctx.executeQueryAsync(
                (sender, args) => {
                    callback(localizedName.get_value());
                }, 
                (sender, args) => {
                    console.log("[gd-sprest] Failed loading the localized web part gallery name - using default.");
                    callback("Web Part Gallery");
                });         
        }, "sp.js");         
     }

    // Method to create the content types
    private createContentTypes = (contentTypes: Types.SP.IContentTypeResults, cfgContentTypes: Array<SPCfgTypes.ISPCfgContentTypeInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure the content types exist
            if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                // Resolve the promise
                resolve();
                return;
            }

            // Parse the configuration
            for (let i = 0; i < cfgContentTypes.length; i++) {
                let cfgContentType = cfgContentTypes[i];

                // See if this content type already exists
                let ct = this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                if (ct) {
                    // Log
                    console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' already exists.");

                    // Update the configuration
                    cfgContentType.ContentType = ct;
                } else {
                    // Log
                    console.log("[gd-sprest][Content Type] Creating the '" + cfgContentType.Name + "' content type.");

                    // See if the parent name exists
                    if (cfgContentType.ParentName) {
                        // Get the web containing the parent content type
                        (new Web(cfgContentType.ParentWebUrl || this._webUrl))
                            // Get the content types
                            .ContentTypes()
                            // Filter for the parent name
                            .query({
                                Filter: "Name eq '" + cfgContentType.ParentName + "'"
                            })
                            .execute(parent => {
                                // See if the parent exists
                                if (parent.results[0]) {
                                    // Add the available content type
                                    contentTypes.addAvailableContentType(parent.results[0].Id.StringValue).execute(ct => {
                                        // See if it was successful
                                        if (ct.existsFl) {
                                            // Log
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");

                                            // Update the configuration
                                            cfgContentType.ContentType = ct;

                                            // Trigger the event
                                            cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                        } else {
                                            // Log
                                            console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                            console.error("[gd-sprest][Field] Error: " + ct.response);
                                        }
                                    }, true);
                                } else {
                                    // Log
                                    console.log("[gd-sprest][Content Type] The parent content type '" + cfgContentType.Name + "' was not found.");
                                }
                            });
                    } else {
                        // Create the content type
                        contentTypes.add({
                            Description: cfgContentType.Description,
                            Group: cfgContentType.Group,
                            Name: cfgContentType.Name
                        }).execute((ct) => {
                            // See if it was successful
                            if (ct.existsFl) {
                                // Log
                                console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");

                                // Update the configuration
                                cfgContentType.ContentType = ct;

                                // Trigger the event
                                cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                            } else {
                                // Log
                                console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' failed to be created.");
                                console.error("[gd-sprest][Field] Error: " + ct.response);
                            }
                        });
                    }
                }
            }

            // Wait for the requests to complete
            contentTypes.done(() => {
                // Parse the configuration
                for (let i = 0; i < cfgContentTypes.length; i++) {
                    let cfgContentType = cfgContentTypes[i];
                    let cfgUpdate: SPCfgTypes.ISPCfgContentTypeInfo = {} as any;
                    let updateFl = false;

                    // Ensure the content type exists
                    if (cfgContentType.ContentType == null) { continue; }

                    /**
                     * See if we need to update the properties
                     */

                    // Description
                    if (cfgContentType.ContentType.Description != cfgContentType.Description) {
                        // Update the configuration
                        cfgUpdate.Description = cfgContentType.Description;

                        // Log
                        console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Description requires update.");

                        // Set the flag
                        updateFl = true;
                    }

                    // Group
                    if (cfgContentType.ContentType.Group != cfgContentType.Group) {
                        // Update the configuration
                        cfgUpdate.Group = cfgContentType.Group;

                        // Log
                        console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Group requires update.");

                        // Set the flag
                        updateFl = true;
                    }

                    // JSLink
                    if (cfgContentType.ContentType.JSlink != cfgContentType.JSLink) {
                        // Update the configuration
                        cfgUpdate.JSLink = cfgContentType.JSLink;

                        // Log
                        console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] JSLink requires update.");

                        // Set the flag
                        updateFl = true;
                    }

                    // Name
                    if (cfgContentType.ContentType.Name != cfgContentType.Name) {
                        // Update the configuration
                        cfgUpdate.Name = cfgContentType.Name;

                        // Log
                        console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Name requires update.");

                        // Set the flag
                        updateFl = true;
                    }

                    // See if an update is needed
                    if (updateFl) {
                        // Log
                        console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Updating the webpart.");

                        // Update the content type
                        cfgContentType.ContentType.update({ JSLink: cfgContentType.JSLink }).execute(() => {
                            // Log
                            console.log("[gd-sprest][Content Type][" + cfgContentType.ContentType.Name + "] Update request completed.");

                            // Trigger the event
                            cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                        });
                    } else {
                        // Trigger the event
                        cfgContentType.onUpdated ? cfgContentType.onUpdated(cfgContentType.ContentType) : null;
                    }
                }

                // Wait for the requests to complete
                contentTypes.done(() => {
                    // Resolve the promise
                    resolve();
                })
            });
        });
    }

    // Method to create the fields
    private createFields = (fields: Types.SP.IFieldResults, cfgFields: Array<SPCfgTypes.ISPCfgFieldInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure the fields exist
            if (cfgFields == null || cfgFields.length == 0) {
                // Resolve the promise and return
                resolve();
                return;
            }

            // Parse the fields
            for (let i = 0; i < cfgFields.length; i++) {
                let cfgField = cfgFields[i];

                // See if this field already exists
                let field = this.isInCollection("InternalName", cfgField.name, fields.results);
                if (field) {
                    // Log
                    console.log("[gd-sprest][Field] The field '" + cfgField.name + "' already exists.");

                    // Trigger the event
                    cfgField.onUpdated ? cfgField.onUpdated(field) : null;
                } else {
                    // Log
                    console.log("[gd-sprest][Field] Creating the '" + cfgField.name + "' field.");

                    //
                    let onFieldCreated = (field: Types.SP.IFieldResult) => {
                        // See if it was successful
                        if (field.existsFl) {
                            // Log
                            console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was created successfully.");

                            // Trigger the event
                            cfgField.onCreated ? cfgField.onCreated(field) : null;
                        } else {
                            // Log
                            console.log("[gd-sprest][Field] The field '" + cfgField.name + "' failed to be created.");
                            console.error("[gd-sprest][Field] Error: " + field.response);
                        }
                    }

                    // Compute the schema xml
                    FieldSchemaXML(cfgField).then(response => {
                        let schemas: Array<string> = typeof (response) === "string" ? [response] : response as any;

                        // Parse the fields to add
                        for (let i = 0; i < schemas.length; i++) {
                            // Add the field
                            fields.createFieldAsXml(schemas[i]).execute(onFieldCreated, true);
                        }
                    });
                }
            }

            // Wait for the requests to complete
            fields.done(() => {
                // Resolve the promise
                resolve();
            });
        })
    }

    // Method to create the lists
    private createLists = (lists: Types.SP.IListResults, cfgLists: Array<SPCfgTypes.ISPCfgListInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the configuration type exists
            if (this._cfgType) {
                // Ensure it's for this type
                if (this._cfgType != SPCfgType.Lists) {
                    // Resolve the promise and return
                    resolve();
                    return;
                }
            }

            // Ensure the lists exist
            if (cfgLists == null || cfgLists.length == 0) {
                // Resolve the promise and return
                resolve();
                return;
            }

            // Parse the content types
            for (let i = 0; i < cfgLists.length; i++) {
                let cfgList = cfgLists[i];

                // See if the target name exists
                if (this._cfgType && this._targetName) {
                    // Ensure it's for this list
                    if (cfgList.ListInformation.Title.toLowerCase() != this._targetName) {
                        // Skip this list
                        continue;
                    }
                }

                // See if this content type already exists
                let list = this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                if (list) {
                    // Log
                    console.log("[gd-sprest][List] The list '" + cfgList.ListInformation.Title + "' already exists.");
                } else {
                    // Log
                    console.log("[gd-sprest][List] Creating the '" + cfgList.ListInformation.Title + "' list.");

                    // Update the list name and remove spaces
                    let listInfo = cfgList.ListInformation;
                    let listName = listInfo.Title;
                    listInfo.Title = listName.replace(/ /g, "");

                    // Add the list
                    lists.add(listInfo)
                        // Execute the request
                        .execute((list) => {
                            // Restore the list name in the configuration
                            listInfo.Title = listName;

                            // See if the request was successful
                            if (list.existsFl) {
                                // See if we need to update the list
                                if (list.existsFl && list.Title != listName) {
                                    // Update the list
                                    list.update({ Title: listName }).execute(() => {
                                        // Log
                                        console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                    });
                                } else {
                                    // Log
                                    console.log("[gd-sprest][List] The list '" + list.Title + "' was created successfully.");
                                }

                                // Trigger the event
                                cfgList.onCreated ? cfgList.onCreated(list) : null;
                            } else {
                                // Log
                                console.log("[gd-sprest][List] The list '" + listInfo.Title + "' failed to be created.");
                                console.log("[gd-sprest][List] Error: '" + list.response);
                            }
                        });
                }
            }

            // Wait for the requests to complete
            lists.done(() => {
                // Update the lists
                this.updateLists(cfgLists).then(() => {
                    // Resolve the promise
                    resolve();
                });
            });
        });
    }

    // Method to create the user custom actions
    private createUserCustomActions = (customActions: Types.SP.IUserCustomActionResults, cfgCustomActions: Array<Types.SP.IUserCustomActionCreationInformation>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the configuration type exists
            if (this._cfgType) {
                // Ensure it's for this type
                if (this._cfgType != SPCfgType.SiteUserCustomActions || this._cfgType != SPCfgType.WebUserCustomActions) {
                    // Resolve the promise
                    resolve();
                    return;
                }
            }

            // Ensure the lists exist
            if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }

            // Parse the custom actions
            for (let i = 0; i < cfgCustomActions.length; i++) {
                let cfgCustomAction = cfgCustomActions[i];

                // See if the target name exists
                if (this._cfgType && this._targetName) {
                    // Ensure it's for this custom action
                    if (cfgCustomAction.Name.toLowerCase() != this._targetName ||
                        cfgCustomAction.Title.toLowerCase() != this._targetName) {
                        // Skip this custom action
                        continue;
                    }
                }

                // See if this custom action already exists
                if (this.isInCollection("Name", cfgCustomAction.Name, customActions.results)) {
                    // Log
                    console.log("[gd-sprest][Custom Action] The custom action '" + cfgCustomAction.Name + "' already exists.");
                } else {
                    // Add the custom action
                    customActions.add(cfgCustomAction).execute((ca) => {
                        // Ensure it exists
                        if (ca.existsFl) {
                            // Log
                            console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was created successfully.");
                        } else {
                            // Log
                            console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' failed to be created.");
                            console.log("[gd-sprest][Custom Action] Error: " + ca.response);
                        }
                    }, true);
                }
            }

            // Wait for the requests to complete
            customActions.done(() => {
                // Resolve the promise
                resolve();
            });
        });
    }

    // Method to create the list views
    private createViews = (views: Types.SP.IViewResults, cfgViews: Array<SPCfgTypes.ISPCfgViewInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure the list views exist
            if (cfgViews == null || cfgViews.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }

            // Parse the views
            for (let i = 0; i < cfgViews.length; i++) {
                let cfgView = cfgViews[i];

                // See if this view exists
                let view: Types.SP.IViewResult = this.isInCollection("Title", cfgView.ViewName, views.results);
                if (view) {
                    // Log
                    console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' already exists.");
                } else {
                    // Add the view
                    views.add({
                        Title: cfgView.ViewName,
                        ViewQuery: cfgView.ViewQuery
                    }).execute((view) => {
                        // Ensure it exists
                        if (view.existsFl) {
                            // Log
                            console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' was created successfully.");

                            // Trigger the event
                            cfgView.onCreated ? cfgView.onCreated(view) : null;
                        } else {
                            // Log
                            console.log("[gd-sprest][View] The view '" + cfgView.ViewName + "' failed to be created.");
                            console.log("[gd-sprest][View] Error: " + view.response);
                        }
                    }, true);
                }
            }

            // Wait for the requests to complete
            views.done(() => {
                // Update the views
                this.updateViews(views, cfgViews).then(() => {
                    // Resolve the promise
                    resolve();
                });
            });
        });
    }

    // Method to create the web parts
    private createWebParts = (galleryName:string) => {
        let cfgWebParts = this._configuration.WebPartCfg;

        // See if the configuration type exists
        if (this._cfgType) {
            // Ensure it's for this type
            if (this._cfgType != SPCfgType.WebParts) { return; }
        }

        // Ensure the configuration exists
        if (cfgWebParts == null || cfgWebParts.length == 0) { return; }

        // Log
        console.log("[gd-sprest][WebPart] Creating the web parts.");

        // Get the root web
        (new Web(ContextInfo.siteServerRelativeUrl))
            // Get the web part gallery
            .Lists(galleryName)
            // Get the root folder
            .RootFolder()
            // Expand the files and items
            .query({
                Expand: ["Files"]
            })
            // Execute the request
            .execute(folder => {
                // Parse the configuration
                for (let i = 0; i < cfgWebParts.length; i++) {
                    let cfgWebPart = cfgWebParts[i];

                    // See if the target name exists
                    if (this._cfgType && this._targetName) {
                        // Ensure it's for this list
                        if (cfgWebPart.FileName.toLowerCase() != this._targetName) {
                            // Skip this list
                            continue;
                        }
                    }

                    // See if this webpart exists
                    let file: Types.SP.IFileResult = this.isInCollection("Name", cfgWebPart.FileName, folder.Files.results);
                    if (file.existsFl) {
                        // Log
                        console.log("[gd-sprest][WebPart] The webpart '" + cfgWebPart.FileName + "' already exists.");

                        // Trigger the event
                        cfgWebPart.onUpdated ? cfgWebPart.onUpdated(file) : null;
                    } else {
                        // Trim the xml
                        let xml = cfgWebPart.XML.trim();

                        // Convert the string to an array buffer
                        let buffer = new ArrayBuffer(xml.length * 2);
                        let bufferView = new Uint16Array(buffer);
                        for (let j = 0; j < xml.length; j++) {
                            bufferView[j] = xml.charCodeAt(j);
                        }

                        // Create the webpart, but execute the requests one at a time
                        folder.Files.add(true, cfgWebPart.FileName, buffer).execute((file) => {
                            // See if group exists
                            if (cfgWebPart.Group) {
                                // Set the target to the root web
                                (new Web(ContextInfo.siteServerRelativeUrl))
                                    // Get the web part gallery
                                    .Lists(galleryName)
                                    // Get the Items
                                    .Items()
                                    // Query for this webpart
                                    .query({
                                        Filter: "FileLeafRef eq '" + cfgWebPart.FileName + "'"
                                    })
                                    // Execute the request
                                    .execute((items) => {
                                        // Update the item
                                        items.results[0].update({
                                            Group: cfgWebPart.Group
                                        }).execute();
                                    });
                            }

                            // Log
                            console.log("[gd-sprest][WebPart] The '" + file.Name + "' webpart file was uploaded successfully.");

                            // Trigger the event
                            cfgWebPart.onCreated ? cfgWebPart.onCreated(file) : null;
                        });
                    }
                }
            });
    }

    // Method to install the site components
    private installSite = (): PromiseLike<Types.SP.ISiteQueryResult> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure site actions exist
            if (this._configuration.CustomActionCfg == null || this._configuration.CustomActionCfg.Site == null) {
                // Resolve the promise
                resolve();
                return;
            }

            // Log
            console.log("[gd-sprest] Loading the site information...");

            // Get the site
            (new Site(this._webUrl))
                // Expand the user custom actions
                .query({
                    Expand: ["UserCustomActions"]
                })
                // Execute the request
                .execute(site => {
                    // Install the user custom actions
                    this.createUserCustomActions(site.UserCustomActions, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Site : []).then(() => {
                        // Resolve the promise
                        resolve(site);
                    });
                });
        });
    }

    // Method to install the web components
    private installWeb = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Log
            console.log("[gd-sprest] Loading the web information...");

            // Get the web
            (new Web(this._webUrl))
                // Expand the content types, fields, lists and user custom actions
                .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                // Execute the request
                .execute(web => {
                    // Create the fields
                    this.createFields(web.Fields, this._configuration.Fields).then(() => {
                        // Create the content types
                        this.createContentTypes(web.ContentTypes, this._configuration.ContentTypes).then(() => {
                            // Create the lists
                            this.createLists(web.Lists, this._configuration.ListCfg).then(() => {
                                // Create the web custom actions
                                this.createUserCustomActions(web.UserCustomActions, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Web : null).then(() => {
                                    // Resolve the promise
                                    resolve();
                                });
                            })
                        })
                    });
                });
        });
    }

    // Method to see if an object exists in a collection
    private isInCollection = (key: string, value: string, collection: Array<any>) => {
        let valueLower = value.toLowerCase();

        // Parse the collection
        for (let i = 0; i < collection.length; i++) {
            let keyValue = collection[i][key];
            keyValue = keyValue ? keyValue.toLowerCase() : "";

            // See if the item exists
            if (valueLower == keyValue) {
                // Return true
                return collection[i];
            }
        }

        // Not in the collection
        return false;
    }

    // Method to remove the content type
    private removeContentTypes = (contentTypes: Types.SP.IContentTypeResults, cfgContentTypes: Array<SPCfgTypes.ISPCfgContentTypeInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure the content types exist
            if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }

            // Parse the configuration
            for (let i = 0; i < cfgContentTypes.length; i++) {
                let cfgContentType = cfgContentTypes[i];

                // Get the field
                let ct: Types.SP.IContentTypeResult = this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                if (ct) {
                    // Remove the field
                    ct.delete().execute(() => {
                        // Log
                        console.log("[gd-sprest][Field] The content type '" + ct.Name + "' was removed.");
                    }, true);
                }
            }

            // Wait for the requests to complete
            contentTypes.done(() => {
                // Resolve the promise
                resolve();
            });
        });
    }

    // Method to remove the fields
    private removeFields = (fields: Types.SP.IFieldResults, cfgFields: Array<SPCfgTypes.ISPCfgFieldInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure the fields exist
            if (cfgFields == null || cfgFields.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }

            // Parse the configuration
            for (let i = 0; i < cfgFields.length; i++) {
                let cfgField = cfgFields[i];

                // Get the field
                let field: Types.SP.IFieldResult = this.isInCollection("InternalName", cfgField.name, fields.results);
                if (field) {
                    // Remove the field
                    field.delete().execute(() => {
                        // Log
                        console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was removed.");
                    }, true);
                }
            }

            // Wait for the requests to complete
            fields.done(() => {
                // Resolve the promise
                resolve();
            });
        });
    }

    // Method to remove the lists
    private removeLists = (lists: Types.SP.IListResults, cfgLists: Array<SPCfgTypes.ISPCfgListInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the configuration type exists
            if (this._cfgType) {
                // Ensure it's for this type
                if (this._cfgType != SPCfgType.Lists) {
                    // Resolve the promise
                    resolve();
                    return;
                }
            }

            // Ensure the lists exist
            if (cfgLists == null || cfgLists.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }

            // Parse the configuration
            for (let i = 0; i < cfgLists.length; i++) {
                let cfgList = cfgLists[i];

                // See if the target name exists
                if (this._cfgType && this._targetName) {
                    // Ensure it's for this list
                    if (cfgList.ListInformation.Title.toLowerCase() != this._targetName) {
                        // Skip this list
                        continue;
                    }
                }

                // Get the list
                let list: Types.SP.IListResult = this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                if (list) {
                    // Remove the list
                    list.delete().execute(() => {
                        // Log
                        console.log("[gd-sprest][List] The list '" + list.Title + "' was removed.");
                    }, true);
                }
            }

            // Wait for the requests to complete
            lists.done(() => {
                // Resolve the promise
                resolve();
            });
        });
    }
    // Method to remove the user custom actions
    private removeUserCustomActions = (customActions: Types.SP.IUserCustomActionResults, cfgCustomActions: Array<Types.SP.IUserCustomActionCreationInformation>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the configuration type exists
            if (this._cfgType) {
                // Ensure it's for this type
                if (this._cfgType != SPCfgType.SiteUserCustomActions || this._cfgType != SPCfgType.WebUserCustomActions) {
                    // Resolve the promise
                    resolve();
                    return;
                }
            }

            // Ensure the custom actions exist
            if (cfgCustomActions == null || cfgCustomActions.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }

            // Parse the configuration
            for (let i = 0; i < cfgCustomActions.length; i++) {
                let cfgCustomAction = cfgCustomActions[i];

                // See if the target name exists
                if (this._cfgType && this._targetName) {
                    // Ensure it's for this custom action
                    if (cfgCustomAction.Name.toLowerCase() != this._targetName ||
                        cfgCustomAction.Title.toLowerCase() != this._targetName) {
                        // Skip this custom action
                        continue;
                    }
                }

                // Get the custom action
                let ca: Types.SP.IUserCustomActionResult = this.isInCollection("Name", cfgCustomAction.Name, customActions.results);
                if (ca) {
                    // Remove the custom action
                    ca.delete().execute(() => {
                        // Log
                        console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was removed.");
                    }, true);
                }
            }

            // Wait for the requests to complete
            customActions.done(() => {
                // Resolve the promise
                resolve();
            });
        });
    }

    // Method to remove the web parts
    private removeWebParts = (galleryName:string): PromiseLike<void> => {
        let cfgWebParts = this._configuration.WebPartCfg;

        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the configuration type exists
            if (this._cfgType) {
                // Ensure it's for this type
                if (this._cfgType != SPCfgType.WebParts) {
                    // Resolve the promise
                    resolve();
                    return;
                }
            }

            // Ensure the configuration exists
            if (cfgWebParts == null || cfgWebParts.length == 0) {
                // Resolve the promise and return it
                resolve();
                return;
            }

            // Log
            console.log("[gd-sprest][WebPart] Creating the web parts.");

            // Get the root web
            (new Web(ContextInfo.siteServerRelativeUrl))
                // Get the web part gallery
                .Lists(galleryName)
                // Get the root folder
                .RootFolder()
                // Get the webpart files
                .Files()
                // Execute the request
                .execute(files => {
                    // Parse the configuration
                    for (let i = 0; i < cfgWebParts.length; i++) {
                        let cfgWebPart = cfgWebParts[i];

                        // See if the target name exists
                        if (this._cfgType && this._targetName) {
                            // Ensure it's for this list
                            if (cfgWebPart.FileName.toLowerCase() != this._targetName) {
                                // Skip this list
                                continue;
                            }
                        }

                        // Get the file
                        let file: Types.SP.IFileResult = this.isInCollection("Name", cfgWebPart.FileName, files.results);
                        if (file) {
                            // Remove the file
                            file.delete().execute(() => {
                                // Log
                                console.log("[gd-sprest][WebPart] The webpart '" + file.Name + "' file was removed.");
                            }, true);
                        }
                    }

                    // Resolve the promise
                    resolve();
                });
        });
    }

    // Method to update the lists
    private updateLists = (cfgLists: Array<SPCfgTypes.ISPCfgListInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            let request = (idx: number, resolve) => {
                // Get the list configuration
                let cfgList = cfgLists[idx];

                // See if the target name exists
                if (this._targetName) {
                    // Ensure it's for this list
                    if (cfgList.ListInformation.Title.toLowerCase() != this._targetName) {
                        // Update the next list
                        request(idx + 1, resolve);
                        return;
                    }
                }

                // Ensure the configuration exists
                if (cfgList) {
                    // Get the web
                    (new Web(this._webUrl))
                        // Get the list
                        .Lists(cfgList.ListInformation.Title)
                        // Expand the content types, fields and views
                        .query({
                            Expand: ["ContentTypes", "Fields", "UserCustomActions", "Views"]
                        })
                        // Execute the request
                        .execute(list => {
                            // See if the title field is being updated
                            if (cfgList.TitleFieldDisplayName) {
                                // Parse the fields
                                for (let i = 0; i < list.Fields.results.length; i++) {
                                    let field = list.Fields.results[i];

                                    // See if this is the title field
                                    if (field.InternalName == "Title") {
                                        // See if an update is required
                                        if (field.Title != cfgList.TitleFieldDisplayName) {
                                            // Update the field name
                                            field.update({ Title: cfgList.TitleFieldDisplayName }).execute(() => {
                                                // Log
                                                console.log("[gd-sprest][List] The 'Title' field's display name was updated to '" + cfgList.TitleFieldDisplayName + "'.");
                                            });
                                        }
                                    }
                                }
                            }

                            // Update the list fields
                            this.createFields(list.Fields, cfgList.CustomFields).then(() => {
                                // Update the content types
                                this.createContentTypes(list.ContentTypes, cfgList.ContentTypes).then(() => {
                                    // Update the views
                                    this.createViews(list.Views, cfgList.ViewInformation).then(() => {
                                        // Trigger the event
                                        cfgList.onUpdated ? cfgList.onUpdated(list) : null;

                                        // Update the next list
                                        request(idx + 1, resolve);
                                    });
                                })
                            });

                            // Update the user custom actions
                            this.createUserCustomActions(list.UserCustomActions, cfgList.UserCustomActions);
                        });
                } else {
                    // Resolve the promise
                    resolve();
                }
            }

            // Execute the request
            request(0, resolve);
        });
    }

    // Method to update the views
    private updateViews = (views: Types.SP.IViewResults, cfgViews: Array<SPCfgTypes.ISPCfgViewInfo>): PromiseLike<void> => {
        let counter = 0;

        // Return a promise
        return new Promise((resolve, reject) => {
            // Parse the views
            for (let i = 0; i < cfgViews.length; i++) {
                let cfgView = cfgViews[i];

                // Get the view
                let view: Types.SP.IView = views.getByTitle(cfgView.ViewName);

                // See if the view fields are defined
                if (cfgView.ViewFields && cfgView.ViewFields.length > 0) {
                    // Log
                    console.log("[gd-sprest][View] Updating the view fields for the '" + cfgView.ViewName + "' view.");

                    // Clear the view fields
                    view.ViewFields().removeAllViewFields().execute(true);

                    // Parse the view fields
                    for (let i = 0; i < cfgView.ViewFields.length; i++) {
                        // Add the view field
                        view.ViewFields().addViewField(cfgView.ViewFields[i]).execute(true);
                    }
                }

                // See if we are updating the view properties
                if (cfgView.JSLink || cfgView.ViewQuery) {
                    let props = {};

                    // Log
                    console.log("[gd-sprest][View] Updating the view properties for the '" + cfgView.ViewName + "' view.");

                    // Set the properties
                    cfgView.JSLink ? props["JSLink"] = cfgView.JSLink : null;
                    cfgView.ViewQuery ? props["ViewQuery"] = cfgView.ViewQuery : null;

                    // Update the view
                    view.update(props).execute(true);
                }

                // Wait for the requests to complete
                view.done((...args) => {
                    // Trigger the event
                    cfgView.onUpdated ? cfgView.onUpdated(view) : null;

                    // See if we are done
                    if (++counter >= cfgViews.length) {
                        // Resolve the promise
                        resolve();
                    }
                })
            }
        });
    }

    // Method to uninstall the site components
    private uninstallSite = (): PromiseLike<Types.SP.ISiteQueryResult> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Log
            console.log("[gd-sprest][uninstall] Loading the site information...");

            // Ensure site actions exist
            if (this._configuration.CustomActionCfg == null || this._configuration.CustomActionCfg.Site == null) {
                // Resolve the promise
                resolve();
                return;
            }

            // Get the site
            (new Site(this._webUrl))
                // Expand the user custom actions
                .query({
                    Expand: ["UserCustomActions"]
                })
                // Execute the request
                .execute(site => {
                    // Remove the user custom actions
                    this.removeUserCustomActions(site.UserCustomActions, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Site : []).then(() => {
                        // Resolve the promise
                        resolve(site);
                    });
                });
        });
    }

    // Method to uninstall the web components
    private uninstallWeb = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Log
            console.log("[gd-sprest][uninstall] Loading the web information...");

            // Get the web
            (new Web(this._webUrl))
                // Expand the content types, fields, lists and user custom actions
                .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                // Execute the request
                .execute(web => {
                    // Remove the fields
                    this.removeFields(web.Fields, this._configuration.Fields).then(() => {
                        // Remove the content types
                        this.removeContentTypes(web.ContentTypes, this._configuration.ContentTypes).then(() => {
                            // Remove the lists
                            this.removeLists(web.Lists, this._configuration.ListCfg).then(() => {
                                // Remove the web custom actions
                                this.removeUserCustomActions(web.UserCustomActions, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Web : null).then(() => {
                                    // Resolve the promise
                                    resolve();
                                });
                            })
                        })
                    });
                });
        });
    }
};
export const SPConfig: SPCfgTypes.ISPConfig = _SPConfig as any;