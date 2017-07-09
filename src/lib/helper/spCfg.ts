import { Promise } from "../../utils";
import { SPConfigTypes } from "../../types";
import {
    IContentTypeResult, IContentTypeResults,
    IFieldResult, IFieldResults,
    IFileResult, IFolderResult,
    IListResult, IListResults,
    IListItemResult, IListItemResults,
    ISPCfgContentTypeInfo, ISPCfgCustomActionInfo, ISPConfigProps, ISPCfgFieldInfo, ISPCfgListInfo, ISPCfgViewInfo, ISPCfgWebPartInfo,
    IUserCustomActionResult, IUserCustomActionResults, IUserCustomActionCreationInformation,
    IView, IViewResult, IViewResults
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

    // The selected configuration type to install
    private _cfgType: number;

    // The SharePoint Configuration
    private _configuration: ISPConfigProps

    // The target name to install/uninstall
    private _targetName: string;

    // The target web url
    private _webUrl: string;

    /**
     * Constructor
     */
    constructor(cfg: ISPConfigProps, webUrl?: string) {
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
        // Update the global variables
        this._cfgType = cfgType;
        this._targetName = targetName ? targetName.toLowerCase() : null;

        // Install the web components
        this.installWeb().done(() => {
            // Install the site components
            this.installSite().done(() => {
                // Create the webparts
                this.createWebParts();

                // Log
                console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");

                // See if the callback exists
                if (callback && typeof (callback) === "function") {
                    // Execute the callback
                    callback();
                }
            });
        });
    }

    // Method to install by configuration type
    installByType = (cfgType: number, callback?: any, targetName?: string) => { return this.install(callback, cfgType, targetName); }

    // Method to install a specific list
    installList(listName: string, callback?: any) { this.installByType(SPConfigTypes.Lists, callback, listName); }

    // Method to install a specific site custom action
    installSiteCustomAction(caName: string, callback?: any) { this.installByType(SPConfigTypes.SiteUserCustomActions, callback, caName); }

    // Method to install a specific web custom action
    installWebCustomAction(caName: string, callback?: any) { this.installByType(SPConfigTypes.WebUserCustomActions, callback, caName); }

    // Method to uninstall the configuration
    uninstall(callback?: any, cfgType?: number, targetName?: string) {
        // Update the global variables
        this._cfgType = cfgType;
        this._targetName = targetName;

        // Uninstall the web components
        this.uninstallWeb().done(() => {
            // Uninstall the site components
            this.uninstallSite().done(() => {
                // Remove the webparts
                this.removeWebParts().done(() => {
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

    // Method to uninstall by the configuration type
    uninstallByType = (cfgType: number, callback?: any, targetName?: string) => { return this.uninstall(callback, cfgType, targetName); }

    // Method to install a specific list
    uninstallList(listName: string, callback?: any) { this.uninstallByType(SPConfigTypes.Lists, callback, listName); }

    // Method to install a specific site custom action
    uninstallSiteCustomAction(caName: string, callback?: any) { this.uninstallByType(SPConfigTypes.SiteUserCustomActions, callback, caName); }

    // Method to install a specific web custom action
    uninstallWebCustomAction(caName: string, callback?: any) { this.uninstallByType(SPConfigTypes.WebUserCustomActions, callback, caName); }

    /**
     * Methods
     */

    // Method to create the content types
    private createContentTypes = (contentTypes: IContentTypeResults, cfgContentTypes: Array<ISPCfgContentTypeInfo>) => {
        let promise = new Promise();

        // Ensure the content types exist
        if (cfgContentTypes == null || cfgContentTypes.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
            return promise;
        }

        // Parse the configuration
        for (let i = 0; i < cfgContentTypes.length; i++) {
            let cfgContentType = cfgContentTypes[i];

            // See if this content type already exists
            if (this.isInCollection("Name", cfgContentType.Name, contentTypes.results)) {
                // Log
                console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' already exists.");
            } else {
                // Log
                console.log("[gd-sprest][Content Type] Creating the '" + cfgContentType.Name + "' content type.");

                // Get the content type from the current web
                (new Web(cfgContentType.ParentWebUrl || this._webUrl)).ContentTypes().query({ Filter: "Name eq '" + (cfgContentType.Name || cfgContentType.ParentName) + "'" }).execute(parent => {
                    // See if the parent exists
                    if (parent.results[0]) {
                        // Add the available content type
                        contentTypes.addAvailableContentType(parent.results[0].Id.StringValue).execute(ct => {
                            // Add the content type to the results
                            contentTypes.results.push(ct);
                        }, true);
                    } else {
                        // Log
                        console.log("[gd-sprest][Content Type] The parent content type '" + cfgContentType.Name + "' was not found.");
                    }
                });
            }
        }

        // Wait for the requests to complete
        contentTypes.done(() => {
            // Parse the configuration
            for (let i = 0; i < cfgContentTypes.length; i++) {
                let cfgContentType = cfgContentTypes[i];

                // See if we need to update the properties
                if (cfgContentType.JSLink) {
                    let ct: IContentTypeResult = this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
                    if (ct) {
                        // Update the content type
                        ct.update({ JSLink: cfgContentType.JSLink }).execute(() => {
                            // Log
                            console.log("[gd-sprest][Content Type] The '" + ct.Name + "' content type properties were updated successfully.");
                        });
                    }
                }
            }

            // Wait for the requests to complete
            contentTypes.done(() => {
                // Resolve the promise
                promise.resolve();
            })
        });

        // Return a promise
        return promise;
    }

    // Method to create the fields
    private createFields = (fields: IFieldResults, cfgFields: Array<ISPCfgFieldInfo>) => {
        let promise = new Promise();

        // Ensure the fields exist
        if (cfgFields == null || cfgFields.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
            return promise;
        }

        // Parse the fields
        for (let i = 0; i < cfgFields.length; i++) {
            let cfgField = cfgFields[i];

            // See if this field already exists
            if (this.isInCollection("InternalName", cfgField.Name, fields.results)) {
                // Log
                console.log("[gd-sprest][Field] The field '" + cfgField.Name + "' already exists.");
            } else {
                // Log
                console.log("[gd-sprest][Field] Creating the '" + cfgField.Name + "' field.");

                // Update the schema xml
                this.updateFieldSchemaXml(cfgField.SchemaXml).done((schemaXml) => {
                    // Add the field
                    fields.createFieldAsXml(schemaXml).execute((field) => {
                        // See if it was successful
                        if (field.existsFl) {
                            // Log
                            console.log("[gd-sprest][Field] The field '" + cfgField.Name + "' was created successfully.");
                        } else {
                            // Log
                            console.log("[gd-sprest][Field] The field '" + cfgField.Name + "' failed to be created.");
                            console.log("[gd-sprest][Field] Error: " + field.response);
                        }
                    }, true);
                });
            }
        }

        // Wait for the requests to complete
        fields.done(() => {
            // Resolve the promise
            promise.resolve();
        });

        // Return a promise
        return promise;
    }

    // Method to create the lists
    private createLists = (lists: IListResults, cfgLists: Array<ISPCfgListInfo>) => {
        let promise = new Promise();

        // See if the configuration type exists
        if (this._cfgType) {
            // Ensure it's for this type
            if (this._cfgType != SPConfigTypes.Lists) {
                // Resolve the promise
                promise.resolve();
                return promise;
            }
        }

        // Ensure the lists exist
        if (cfgLists == null || cfgLists.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
            return promise;
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
            if (this.isInCollection("Title", cfgList.ListInformation.Title, lists.results)) {
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
            this.updateLists(cfgLists).done(() => {
                // Resolve the promise
                promise.resolve();
            });
        });

        // Return a promise
        return promise;
    }

    // Method to create the user custom actions
    private createUserCustomActions = (customActions: IUserCustomActionResults, cfgCustomActions: Array<IUserCustomActionCreationInformation>) => {
        let promise = new Promise();

        // See if the configuration type exists
        if (this._cfgType) {
            // Ensure it's for this type
            if (this._cfgType != SPConfigTypes.SiteUserCustomActions || this._cfgType != SPConfigTypes.WebUserCustomActions) {
                // Resolve the promise
                promise.resolve();
                return promise;
            }
        }

        // Ensure the lists exist
        if (cfgCustomActions == null || cfgCustomActions.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
            return promise;
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
                customActions.add(cfgCustomAction).execute(true);
            }
        }

        // Wait for the requests to complete
        customActions.done(() => {
            // Resolve the promise
            promise.resolve();
        });

        // Return the promise
        return promise;
    }

    // Method to create the list views
    private createViews = (views: IViewResults, cfgViews: Array<ISPCfgViewInfo>) => {
        let promise = new Promise();

        // Ensure the list views exist
        if (cfgViews == null || cfgViews.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
            return promise;
        }

        // Parse the views
        for (let i = 0; i < cfgViews.length; i++) {
            let cfgView = cfgViews[i];

            // See if this view exists
            let view: IViewResult = this.isInCollection("Title", cfgView.ViewName, views.results);
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
            this.updateViews(views, cfgViews).done(() => {
                // Resolve the promise
                promise.resolve();
            });
        });

        // Return the promise
        return promise;
    }

    // Method to create the web parts
    private createWebParts = () => {
        let cfgWebParts = this._configuration.WebPartCfg;

        // See if the configuration type exists
        if (this._cfgType) {
            // Ensure it's for this type
            if (this._cfgType != SPConfigTypes.Lists) { return; }
        }

        // Ensure the configuration exists
        if (cfgWebParts == null || cfgWebParts.length == 0) { return; }

        // Log
        console.log("[gd-sprest][WebPart] Creating the web parts.");

        // Get the root web
        (new Web(ContextInfo.siteServerRelativeUrl))
            // Get the web part gallery
            .Lists("Web Part Gallery")
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
                    let file: IFileResult = this.isInCollection("Name", cfgWebPart.FileName, folder.Files.results);
                    if (file.existsFl) {
                        // Log
                        console.log("[gd-sprest][WebPart] The webpart '" + cfgWebPart.FileName + "' already exists.");
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
                                    .Lists("Web Part Gallery")
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
                        });
                    }
                }
            });
    }

    // Method to install the site components
    private installSite = () => {
        let promise = new Promise();

        // Ensure site actions exist
        if (this._configuration.CustomActionCfg == null || this._configuration.CustomActionCfg.Site) {
            // Resolve the promise
            promise.resolve();
            return promise;
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
                this.createUserCustomActions(site.UserCustomActions, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Site : []).done(() => {
                    // Resolve the promise
                    promise.resolve(site);
                });
            });

        // Return the promise
        return promise;
    }

    // Method to install the web components
    private installWeb = () => {
        let promise = new Promise();

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
                this.createFields(web.Fields, this._configuration.Fields).done(() => {
                    // Create the content types
                    this.createContentTypes(web.ContentTypes, this._configuration.ContentTypes).done(() => {
                        // Create the lists
                        this.createLists(web.Lists, this._configuration.ListCfg).done(() => {
                            // Create the web custom actions
                            this.createUserCustomActions(web.UserCustomActions, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Web : null).done(() => {
                                // Resolve the promise
                                promise.resolve();
                            });
                        })
                    })
                });
            });

        // Return the promise
        return promise;
    }

    // Method to see if an object exists in a collection
    private isInCollection = (key: string, value: string, collection: Array<any>) => {
        let valueLower = value.toLowerCase();

        // Parse the collection
        for (let i = 0; i < collection.length; i++) {
            // See if the item exists
            if (valueLower == collection[i][key].toLowerCase()) {
                // Return true
                return collection[i];
            }
        }

        // Not in the collection
        return false;
    }

    // Method to remove the content type
    private removeContentTypes = (contentTypes: IContentTypeResults, cfgContentTypes: Array<ISPCfgContentTypeInfo>) => {
        let promise = new Promise();

        // Ensure the content types exist
        if (cfgContentTypes == null || cfgContentTypes.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
            return promise;
        }

        // Parse the configuration
        for (let i = 0; i < cfgContentTypes.length; i++) {
            let cfgContentType = cfgContentTypes[i];

            // Get the field
            let ct: IContentTypeResult = this.isInCollection("Name", cfgContentType.Name, contentTypes.results);
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
            promise.resolve();
        });

        // Return a promise
        return promise;
    }

    // Method to remove the fields
    private removeFields = (fields: IFieldResults, cfgFields: Array<ISPCfgFieldInfo>) => {
        let promise = new Promise();

        // Ensure the fields exist
        if (cfgFields == null || cfgFields.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
            return promise;
        }

        // Parse the configuration
        for (let i = 0; i < cfgFields.length; i++) {
            let cfgField = cfgFields[i];

            // Get the field
            let field: IFieldResult = this.isInCollection("InternalName", cfgField.Name, fields.results);
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
            promise.resolve();
        });

        // Return a promise
        return promise;
    }

    // Method to remove the lists
    private removeLists = (lists: IListResults, cfgLists: Array<ISPCfgListInfo>) => {
        let promise = new Promise();

        // See if the configuration type exists
        if (this._cfgType) {
            // Ensure it's for this type
            if (this._cfgType != SPConfigTypes.Lists) {
                // Resolve the promise
                promise.resolve();
                return promise;
            }
        }

        // Ensure the lists exist
        if (cfgLists == null || cfgLists.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
            return promise;
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
            let list: IListResult = this.isInCollection("Title", cfgList.ListInformation.Title, lists.results);
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
            promise.resolve();
        });

        // Return a promise
        return promise;
    }
    // Method to remove the user custom actions
    private removeUserCustomActions = (customActions: IUserCustomActionResults, cfgCustomActions: Array<IUserCustomActionCreationInformation>) => {
        let promise = new Promise();

        // See if the configuration type exists
        if (this._cfgType) {
            // Ensure it's for this type
            if (this._cfgType != SPConfigTypes.SiteUserCustomActions || this._cfgType != SPConfigTypes.WebUserCustomActions) {
                // Resolve the promise
                promise.resolve();
                return promise;
            }
        }

        // Ensure the custom actions exist
        if (cfgCustomActions == null || cfgCustomActions.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
            return promise;
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
            let ca: IUserCustomActionResult = this.isInCollection("Title", cfgCustomAction.Name, customActions.results);
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
            promise.resolve();
        });

        // Return a promise
        return promise;
    }

    // Method to remove the web parts
    private removeWebParts = () => {
        let cfgWebParts = this._configuration.WebPartCfg;
        let promise = new Promise();

        // See if the configuration type exists
        if (this._cfgType) {
            // Ensure it's for this type
            if (this._cfgType != SPConfigTypes.WebParts) {
                // Resolve the promise
                promise.resolve();
                return promise;
            }
        }

        // Ensure the configuration exists
        if (cfgWebParts == null || cfgWebParts.length == 0) {
            // Resolve the promise and return it
            promise.resolve();
            return promise;
        }

        // Log
        console.log("[gd-sprest][WebPart] Creating the web parts.");

        // Get the root web
        (new Web(ContextInfo.siteServerRelativeUrl))
            // Get the web part gallery
            .Lists("Web Part Gallery")
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
                    let file: IFileResult = this.isInCollection("Name", cfgWebPart.FileName, files.results);
                    if (file) {
                        // Remove the file
                        file.delete().execute(() => {
                            // Log
                            console.log("[gd-sprest][WebPart] The webpart '" + file.Name + "' file was removed.");
                        }, true);
                    }
                }

                // Resolve the promise
                promise.resolve();
            });

        // Return a promise
        return promise;
    }

    // Method to update the schema xml
    private updateFieldSchemaXml = (schemaXml: string) => {
        let promise = new Promise();

        // Create the schema
        let fieldInfo: HTMLElement = document.createElement("field");
        fieldInfo.innerHTML = schemaXml;
        fieldInfo = fieldInfo.querySelector("field") as HTMLElement;

        // Get the field type
        switch (fieldInfo.getAttribute("Type")) {
            case "Lookup":
            case "LookupMulti":
                // Get the target list
                (new List(fieldInfo.getAttribute("List"))).execute((list) => {
                    // Ensure the list exists
                    if (list.existsFl) {
                        var startIdx = schemaXml.toLowerCase().indexOf("list=");
                        var endIdx = schemaXml.indexOf(" ", startIdx + 5 + list.Title.length);

                        // Replace the List property
                        schemaXml = schemaXml.substr(0, startIdx) + "List=\"" + list.Id + "\"" + schemaXml.substr(endIdx);
                    }

                    // Resolve the promise
                    promise.resolve(schemaXml);
                });
                break;
            default:
                // Resolve the promise
                promise.resolve(schemaXml);
                break;
        }

        // Return the promise
        return promise;
    }

    // Method to update the lists
    private updateLists = (cfgLists: Array<ISPCfgListInfo>, idx?: number, promise?: Promise) => {
        // Default the index and promise
        idx = idx ? idx : 0;
        promise = promise ? promise : new Promise();

        // Get the list configuration
        let cfgList = cfgLists[idx];

        // Ensure the configuration exists
        if (cfgList) {
            // Get the web
            (new Web(this._webUrl))
                // Get the list
                .Lists(cfgList.ListInformation.Title)
                // Expand the content types, fields and views
                .query({
                    Expand: ["ContentTypes", "Fields", "Views"]
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
                    this.createFields(list.Fields, cfgList.CustomFields).done(() => {
                        // Update the content types
                        this.createContentTypes(list.ContentTypes, cfgList.ContentTypes).done(() => {
                            // Update the views
                            this.createViews(list.Views, cfgList.ViewInformation).done(() => {
                                // Update the next list
                                this.updateLists(cfgLists, idx + 1, promise);
                            });
                        })
                    });
                });
        } else {
            // Resolve the promise
            promise.resolve();
        }

        // Return a promise
        return promise;
    }

    // Method to update the views
    private updateViews = (views: IViewResults, cfgViews: Array<ISPCfgViewInfo>) => {
        let counter = 0;
        let promise = new Promise();

        // Parse the views
        for (let i = 0; i < cfgViews.length; i++) {
            let cfgView = cfgViews[i];

            // Get the view
            let view: IView = views.getByTitle(cfgView.ViewName);

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
            view.done(() => {
                // See if we are done
                if (++counter >= cfgViews.length) {
                    // Resolve the promise
                    promise.resolve();
                }
            })
        }

        // Return the promise
        return promise;
    }

    // Method to uninstall the site components
    private uninstallSite = () => {
        let promise = new Promise();

        // Ensure site actions exist
        if (this._configuration.CustomActionCfg == null || this._configuration.CustomActionCfg.Site) {
            // Resolve the promise
            promise.resolve();
            return promise;
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
                this.removeUserCustomActions(site.UserCustomActions, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Site : []).done(() => {
                    // Resolve the promise
                    promise.resolve(site);
                });
            });

        // Return the promise
        return promise;
    }

    // Method to uninstall the web components
    private uninstallWeb = () => {
        let promise = new Promise();

        // Get the web
        (new Web(this._webUrl))
            // Expand the content types, fields, lists and user custom actions
            .query({
                Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
            })
            // Execute the request
            .execute(web => {
                // Remove the fields
                this.removeFields(web.Fields, this._configuration.Fields).done(() => {
                    // Remove the content types
                    this.removeContentTypes(web.ContentTypes, this._configuration.ContentTypes).done(() => {
                        // Remove the lists
                        this.removeLists(web.Lists, this._configuration.ListCfg).done(() => {
                            // Remove the web custom actions
                            this.removeUserCustomActions(web.UserCustomActions, this._configuration.CustomActionCfg ? this._configuration.CustomActionCfg.Web : null).done(() => {
                                // Resolve the promise
                                promise.resolve();
                            });
                        })
                    })
                });
            });

        // Return the promise
        return promise;
    }
};