import { SP } from "gd-sprest-def";
import { ContextInfo, Site, Web } from "../lib";
import { SPTypes } from "..";
import {
    ISPCfgFieldInfo, ISPCfgContentTypeInfo, ISPCfgListInfo, ISPCfgViewInfo,
    ISPConfig, ISPConfigProps
} from "./types";
import {
    FieldSchemaXML, SPCfgType
} from ".";
export * from "./spCfgTypes";

/**
 * SharePoint Configuration
 */
export const SPConfig = (cfg: ISPConfigProps, webUrl?: string): ISPConfig => {
    // The selected configuration type to install
    let _cfgType: number;

    // The target name to install/uninstall
    let _targetName: string;

    /**
     * Methods
     */

    // Method to create the content types
    let createContentTypes = (contentTypes: SP.IContentTypeCollection, cfgContentTypes: Array<ISPCfgContentTypeInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure fields exist
            if (cfgContentTypes == null || cfgContentTypes.length == 0) {
                // Resolve the promise
                resolve();
                return;
            }

            // Parse the configuration
            for (let i = 0; i < cfgContentTypes.length; i++) {
                let cfgContentType = cfgContentTypes[i];

                // See if this content type already exists
                let ct = isInCollection("Name", cfgContentType.Name, contentTypes.results);
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
                        Web(cfgContentType.ParentWebUrl || webUrl)
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
                                        if (ct.Name) {
                                            // Update the name
                                            (() => {
                                                return new Promise((resolve, reject) => {
                                                    // Ensure the name doesn't need to be updated
                                                    if (ct.Name != cfgContentType.Name) {
                                                        ct.update({ Name: cfgContentType.Name }).execute(() => {
                                                            // Resolve the promise
                                                            resolve();
                                                        });
                                                    } else {
                                                        // Resolve the promise
                                                        resolve();
                                                    }
                                                });
                                            })().then(() => {
                                                // Log
                                                console.log("[gd-sprest][Content Type] The content type '" + cfgContentType.Name + "' was created successfully.");

                                                // Update the configuration
                                                cfgContentType.ContentType = ct;

                                                // Trigger the event
                                                cfgContentType.onCreated ? cfgContentType.onCreated(ct) : null;
                                            })
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
                            }, reject);
                    } else {
                        // Create the content type
                        contentTypes.add({
                            Description: cfgContentType.Description,
                            Group: cfgContentType.Group,
                            /*
                            Id: {
                                __metadata: { type: "SP.ContentTypeId" },
                                StringValue: cfgContentType.Id ? cfgContentType.Id.StringValue : "0x0100" + ContextInfo.generateGUID().replace("{", "").replace("-", "").replace("}", "")
                            },
                            */
                            Id: cfgContentType.Id || "0x0100" + ContextInfo.generateGUID().replace("{", "").replace("-", "").replace("}", ""),
                            Name: cfgContentType.Name
                        }).execute((ct) => {
                            // See if it was successful
                            if (ct.Name) {
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
                        }, reject, true);
                    }
                }
            }

            // Wait for the requests to complete
            contentTypes.done(() => {
                // Parse the configuration
                for (let i = 0; i < cfgContentTypes.length; i++) {
                    let cfgContentType = cfgContentTypes[i];
                    let cfgUpdate: ISPCfgContentTypeInfo = {} as any;
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
                    if (cfgContentType.ContentType.JSLink != cfgContentType.JSLink) {
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

    // Method to create the fields`
    let createFields = (fields: SP.IFieldCollection, cfgFields: Array<ISPCfgFieldInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure fields exist
            if (cfgFields == null || cfgFields.length == 0) {
                // Resolve the promise
                resolve();
                return;
            }

            // Parse the fields
            for (let i = 0; i < cfgFields.length; i++) {
                let cfgField = cfgFields[i];

                // See if this field already exists
                let field = isInCollection("InternalName", cfgField.name, fields.results);
                if (field) {
                    // Log
                    console.log("[gd-sprest][Field] The field '" + cfgField.name + "' already exists.");

                    // Trigger the event
                    cfgField.onUpdated ? cfgField.onUpdated(field) : null;
                } else {
                    // Log
                    console.log("[gd-sprest][Field] Creating the '" + cfgField.name + "' field.");

                    // The field created event
                    let onFieldCreated = (field: SP.Field) => {
                        // See if it was successful
                        if (field.InternalName) {
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
    let createLists = (lists: SP.IListCollection, cfgLists: Array<ISPCfgListInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Parse the content types
            for (let i = 0; i < cfgLists.length; i++) {
                let cfgList = cfgLists[i];

                // See if the target name exists
                if (_cfgType && _targetName) {
                    // Ensure it's for this list
                    if (cfgList.ListInformation.Title.toLowerCase() != _targetName) {
                        // Skip this list
                        continue;
                    }
                }

                // See if this content type already exists
                let list = isInCollection("Title", cfgList.ListInformation.Title, lists.results);
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
                            if (list.Id) {
                                // See if we need to update the list
                                if (list.Title != listName) {
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
                        }, reject);
                }
            }

            // Wait for the requests to complete
            lists.done(() => {
                // Update the lists
                updateLists(cfgLists).then(() => {
                    // Resolve the promise
                    resolve();
                });
            });
        });
    }

    // Method to create the user custom actions
    let createUserCustomActions = (customActions: SP.IUserCustomActionCollection, cfgCustomActions: Array<SP.UserCustomActionProps>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the configuration type exists
            if (_cfgType) {
                // Ensure it's for this type
                if (_cfgType != SPCfgType.SiteUserCustomActions || _cfgType != SPCfgType.WebUserCustomActions) {
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
                if (_cfgType && _targetName) {
                    // Ensure it's for this custom action
                    if (cfgCustomAction.Name.toLowerCase() != _targetName ||
                        cfgCustomAction.Title.toLowerCase() != _targetName) {
                        // Skip this custom action
                        continue;
                    }
                }

                // See if this custom action already exists
                if (isInCollection("Name", cfgCustomAction.Name, customActions.results)) {
                    // Log
                    console.log("[gd-sprest][Custom Action] The custom action '" + cfgCustomAction.Name + "' already exists.");
                } else {
                    // See if rights exist
                    if (cfgCustomAction.Rights) {
                        // Update the value
                        cfgCustomAction.Rights = updateBasePermissions(cfgCustomAction.Rights) as any;
                    }

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
                    }, reject, true);
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
    let createViews = (views: SP.IViewCollection, cfgViews: Array<ISPCfgViewInfo>): PromiseLike<void> => {
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
                let view: SP.View = isInCollection("Title", cfgView.ViewName, views.results);
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
                    }, reject, true);
                }
            }

            // Wait for the requests to complete
            views.done(() => {
                // Update the views
                updateViews(views, cfgViews).then(() => {
                    // Resolve the promise
                    resolve();
                });
            });
        });
    }

    // Method to create the web parts
    let createWebParts = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            let cfgWebParts = cfg.WebPartCfg;

            // Log
            console.log("[gd-sprest][WebPart] Creating the web parts.");

            // Get the root web
            Web(ContextInfo.siteServerRelativeUrl)
                // Get the web part catalog
                .getCatalog(SPTypes.ListTemplateType.WebPartCatalog)
                // Get the root folder
                .RootFolder()
                // Expand the files and items
                .query({
                    Expand: ["Files"]
                })
                // Execute the request
                .execute(folder => {
                    let ctr = 0;

                    // Parse the configuration
                    for (let i = 0; i < cfgWebParts.length; i++) {
                        let cfgWebPart = cfgWebParts[i];

                        // See if the target name exists
                        if (_cfgType && _targetName) {
                            // Ensure it's for this list
                            if (cfgWebPart.FileName.toLowerCase() != _targetName) {
                                // Skip this list
                                continue;
                            }
                        }

                        // The post execute method
                        let postExecute = () => {
                            // Increment the counter
                            if (++ctr >= cfgWebParts.length) {
                                // Resolve the promise
                                resolve();
                            }
                        }

                        // See if this webpart exists
                        let file: SP.File = isInCollection("Name", cfgWebPart.FileName, folder.Files.results);
                        if (file.Name) {
                            // Log
                            console.log("[gd-sprest][WebPart] The webpart '" + cfgWebPart.FileName + "' already exists.");

                            // Trigger the event
                            cfgWebPart.onUpdated ? cfgWebPart.onUpdated(file) : null;

                            // Execute the post event
                            postExecute();
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
                            folder.Files.add(cfgWebPart.FileName, true, buffer).execute((file) => {
                                // See if group exists
                                if (cfgWebPart.Group) {
                                    // Set the target to the root web
                                    Web(ContextInfo.siteServerRelativeUrl)
                                        // Get the web part catalog
                                        .getCatalog(SPTypes.ListTemplateType.WebPartCatalog)
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
                                            }).execute(postExecute);
                                        });
                                }

                                // Log
                                console.log("[gd-sprest][WebPart] The '" + file.Name + "' webpart file was uploaded successfully.");

                                // Trigger the event
                                cfgWebPart.onCreated ? cfgWebPart.onCreated(file) : null;
                            });
                        }
                    }
                }, reject);
        });
    }

    // Method to see if an object exists in a collection
    let isInCollection = (key: string, value: string, collection: Array<any>) => {
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
    let removeContentTypes = (contentTypes: SP.IContentTypeCollection, cfgContentTypes: Array<ISPCfgContentTypeInfo>): PromiseLike<void> => {
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
                let ct: SP.ContentType = isInCollection("Name", cfgContentType.Name, contentTypes.results);
                if (ct) {
                    // Remove the field
                    ct.delete().execute(() => {
                        // Log
                        console.log("[gd-sprest][Field] The content type '" + ct.Name + "' was removed.");
                    }, reject, true);
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
    let removeFields = (fields: SP.IFieldCollection, cfgFields: Array<ISPCfgFieldInfo>): PromiseLike<void> => {
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
                let field: SP.Field = isInCollection("InternalName", cfgField.name, fields.results);
                if (field) {
                    // Remove the field
                    field.delete().execute(() => {
                        // Log
                        console.log("[gd-sprest][Field] The field '" + field.InternalName + "' was removed.");
                    }, reject, true);
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
    let removeLists = (lists: SP.IListCollection, cfgLists: Array<ISPCfgListInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the configuration type exists
            if (_cfgType) {
                // Ensure it's for this type
                if (_cfgType != SPCfgType.Lists) {
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
                if (_cfgType && _targetName) {
                    // Ensure it's for this list
                    if (cfgList.ListInformation.Title.toLowerCase() != _targetName) {
                        // Skip this list
                        continue;
                    }
                }

                // Get the list
                let list: SP.List = isInCollection("Title", cfgList.ListInformation.Title, lists.results);
                if (list) {
                    // Remove the list
                    list.delete().execute(() => {
                        // Log
                        console.log("[gd-sprest][List] The list '" + list.Title + "' was removed.");
                    }, reject, true);
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
    let removeUserCustomActions = (customActions: SP.IUserCustomActionCollection, cfgCustomActions: Array<SP.UserCustomActionProps>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the configuration type exists
            if (_cfgType) {
                // Ensure it's for this type
                if (_cfgType != SPCfgType.SiteUserCustomActions || _cfgType != SPCfgType.WebUserCustomActions) {
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
                if (_cfgType && _targetName) {
                    // Ensure it's for this custom action
                    if (cfgCustomAction.Name.toLowerCase() != _targetName ||
                        cfgCustomAction.Title.toLowerCase() != _targetName) {
                        // Skip this custom action
                        continue;
                    }
                }

                // Get the custom action
                let ca: SP.UserCustomAction = isInCollection("Name", cfgCustomAction.Name, customActions.results);
                if (ca) {
                    // Remove the custom action
                    ca.delete().execute(() => {
                        // Log
                        console.log("[gd-sprest][Custom Action] The custom action '" + ca.Name + "' was removed.");
                    }, reject, true);
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
    let removeWebParts = (): PromiseLike<void> => {
        let cfgWebParts = cfg.WebPartCfg;

        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the configuration type exists
            if (_cfgType) {
                // Ensure it's for this type
                if (_cfgType != SPCfgType.WebParts) {
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
            console.log("[gd-sprest][WebPart] Removing the web parts.");

            // Get the root web
            Web(ContextInfo.siteServerRelativeUrl)
                // Get the webpart gallery
                .getCatalog(SPTypes.ListTemplateType.WebPartCatalog)
                // Get the root folder
                .RootFolder()
                // Expand the files
                .Files()
                // Execute the request
                .execute(files => {
                    // Parse the configuration
                    for (let i = 0; i < cfgWebParts.length; i++) {
                        let cfgWebPart = cfgWebParts[i];

                        // See if the target name exists
                        if (_cfgType && _targetName) {
                            // Ensure it's for this webpart
                            if (cfgWebPart.FileName.toLowerCase() != _targetName) {
                                // Skip this webpart
                                continue;
                            }
                        }

                        // Get the file
                        let file: SP.File = isInCollection("Name", cfgWebPart.FileName, files.results)
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
                }, reject);
        });
    }

    // Method to update the base permissions
    let updateBasePermissions = (values: SP.BasePermissions) => {
        let high = values.High;
        let low = values.Low;

        // See if this is an array
        for (let i = 0; i < values["length"]; i++) {
            let value = values[i];

            // See if this is the full mask
            if (value == 65) {
                // Set the values
                low = 65535;
                high = 32767;

                // Break from the loop
                break;
            }
            // Else, see if it's empty
            else if (value == 0) {
                // Clear the values
                low = 0;
                high = 0;
            }
            // Else, update the base permission
            else {
                let bit = value - 1;
                let bitValue = 1;

                // Validate the bit
                if (bit < 0) { continue; }

                // See if it's a low permission
                if (bit < 32) {
                    // Compute the value
                    bitValue = bitValue << bit;

                    // Set the low value
                    low |= bitValue;
                }
                // Else, it's a high permission
                else {
                    // Compute the value
                    bitValue = bitValue << (bit - 32);

                    // Set the high value
                    high |= bitValue;
                }
            }
        }

        // Return the base permission
        return {
            Low: low.toString(),
            High: high.toString()
        };
    }

    // Method to update the lists
    let updateLists = (cfgLists: Array<ISPCfgListInfo>): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            let request = (idx: number, resolve) => {
                // Get the list configuration
                let cfgList = cfgLists[idx];

                // See if the target name exists
                if (_targetName) {
                    // Ensure it's for this list
                    if (cfgList.ListInformation.Title.toLowerCase() != _targetName) {
                        // Update the next list
                        request(idx + 1, resolve);
                        return;
                    }
                }

                // Ensure the configuration exists
                if (cfgList) {
                    // Get the web
                    Web(webUrl)
                        // Get the list
                        .Lists(cfgList.ListInformation.Title)
                        // Expand the content types, fields and views
                        .query({
                            Expand: ["ContentTypes", "Fields", "UserCustomActions", "Views"]
                        })
                        // Execute the request
                        .execute(list => {
                            // Update the title field
                            updateListTitleField(list, cfgList).then(() => {
                                // Create the fields
                                createFields(list.Fields, cfgList.CustomFields).then(() => {
                                    // Create the content types
                                    createContentTypes(list.ContentTypes, cfgList.ContentTypes).then(() => {
                                        // Update the views
                                        createViews(list.Views, cfgList.ViewInformation).then(() => {
                                            // Update the views
                                            createUserCustomActions(list.UserCustomActions, cfgList.UserCustomActions).then(() => {
                                                // Trigger the event
                                                cfgList.onUpdated ? cfgList.onUpdated(list as any) : null;

                                                // Update the next list
                                                request(idx + 1, resolve);
                                            }, reject);
                                        }, reject);
                                    }, reject);
                                }, reject);
                            }, reject);
                        }, reject);
                } else {
                    // Resolve the promise
                    resolve();
                }
            }

            // Execute the request
            request(0, resolve);
        });
    }

    // Method to update the list title field
    let updateListTitleField = (list: SP.IListQuery, cfgList: ISPCfgListInfo): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if the title field is being updated
            if (cfgList.TitleFieldDisplayName) {
                // Update the field name
                list.Fields.getByTitle("Title").update({ Title: cfgList.TitleFieldDisplayName }).execute(() => {
                    // Log
                    console.log("[gd-sprest][List] The 'Title' field's display name was updated to '" + cfgList.TitleFieldDisplayName + "'.");

                    // Resolve the promise
                    resolve();
                }, reject);
            } else {
                // Resolve the promise
                resolve();
            }
        });
    }

    // Method to update the views
    let updateViews = (views: SP.IViewCollection, cfgViews: Array<ISPCfgViewInfo>): PromiseLike<void> => {
        let counter = 0;

        // Return a promise
        return new Promise((resolve, reject) => {
            // Parse the views
            for (let i = 0; i < cfgViews.length; i++) {
                let cfgView = cfgViews[i];

                // Get the view
                let view = views.getByTitle(cfgView.ViewName);

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
                    // Log
                    console.log("[gd-sprest][View] The updates for the '" + cfgView.ViewName + "' view has completed.");

                    // Trigger the event
                    cfgView.onUpdated ? cfgView.onUpdated(view as any) : null;

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
    let uninstallSite = (): PromiseLike<SP.ISiteQuery> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Log
            console.log("[gd-sprest][uninstall] Loading the site information...");

            // Ensure site actions exist
            if (cfg.CustomActionCfg == null || cfg.CustomActionCfg.Site == null) {
                // Resolve the promise
                resolve();
                return;
            }

            // Get the site
            Site(webUrl)
                // Expand the user custom actions
                .query({
                    Expand: ["UserCustomActions"]
                })
                // Execute the request
                .execute(site => {
                    // Remove the user custom actions
                    removeUserCustomActions(site.UserCustomActions, cfg.CustomActionCfg ? cfg.CustomActionCfg.Site : []).then(() => {
                        // Resolve the promise
                        resolve(site);
                    });
                }, reject);
        });
    }

    // Method to uninstall the web components
    let uninstallWeb = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Log
            console.log("[gd-sprest][uninstall] Loading the web information...");

            // Get the web
            Web(webUrl)
                // Expand the content types, fields, lists and user custom actions
                .query({
                    Expand: ["ContentTypes", "Fields", "Lists", "UserCustomActions"]
                })
                // Execute the request
                .execute(web => {
                    // Remove the fields
                    removeFields(web.Fields, cfg.Fields).then(() => {
                        // Remove the content types
                        removeContentTypes(web.ContentTypes, cfg.ContentTypes).then(() => {
                            // Remove the lists
                            removeLists(web.Lists, cfg.ListCfg).then(() => {
                                // Remove the web custom actions
                                removeUserCustomActions(web.UserCustomActions, cfg.CustomActionCfg ? cfg.CustomActionCfg.Web : null).then(() => {
                                    // Resolve the promise
                                    resolve();
                                }, reject);
                            }, reject)
                        }, reject)
                    }, reject);
                }, reject);
        });
    }

    /**
     * Public Interface
     */
    return {
        // The configuration
        _configuration: cfg,

        // Method to install the configuration
        install: (): PromiseLike<void> => {
            // Return a promise
            return new Promise((resolve, reject) => {
                let ctr = 0;
                let ctrExecutions = 0;

                // Log
                console.log("[gd-sprest] Loading the web information...");

                // Get the web
                let web = Web(webUrl);

                // The post execution method
                let postExecute = () => {
                    // See if we have completed the executions
                    if (++ctr >= ctrExecutions) {
                        // Resolve the promise
                        resolve();
                    }
                }

                // See if we are creating fields
                if (cfg.Fields && cfg.Fields.length > 0) {
                    // Increment the counter
                    ctrExecutions++;

                    // Log
                    console.log("[gd-sprest][Fields] Starting the requests.");

                    // Get the fields
                    web.Fields().execute(fields => {
                        // Return a promise
                        return new Promise((resolve, reject) => {
                            // Create the fields
                            createFields(fields, cfg.Fields).then(() => {
                                // Log
                                console.log("[gd-sprest][Fields] Completed the requests.");

                                // Execute the post execute method
                                postExecute();

                                // Resolve the promise
                                resolve();
                            }, reject);
                        });
                    }, reject);
                }

                // See if we are creating the content types
                if (cfg.ContentTypes && cfg.ContentTypes.length > 0) {
                    // Increment the counter
                    ctrExecutions++;

                    // Log
                    console.log("[gd-sprest][Content Types] Starting the requests.");

                    // Get the content types
                    web.ContentTypes().execute(contentTypes => {
                        // Create the content types
                        createContentTypes(contentTypes, cfg.ContentTypes).then(() => {
                            // Log
                            console.log("[gd-sprest][Content Types] Completed the requests.");

                            // Execute the post execute method
                            postExecute();
                        });
                    }, reject, true);
                }

                // See if we are creating the lists
                if (cfg.ListCfg && cfg.ListCfg.length) {
                    // Increment the counter
                    ctrExecutions++;

                    // Log
                    console.log("[gd-sprest][Lists] Starting the requests.");

                    // Get the lists
                    web.Lists().execute(lists => {
                        // Create the lists
                        createLists(lists, cfg.ListCfg).then(() => {
                            // Log
                            console.log("[gd-sprest][Lists] Completed the requests.");

                            // Execute the post execute method
                            postExecute();
                        });
                    }, reject, true);
                }

                // See if we are creating the webparts
                if (cfg.WebPartCfg && cfg.WebPartCfg.length > 0) {
                    // Increment the counter
                    ctrExecutions++;

                    // Log
                    console.log("[gd-sprest][WebParts] Starting the requests.");

                    // Create the webparts
                    createWebParts().then(() => {
                        // Log
                        console.log("[gd-sprest][WebParts] Completed the requests.");

                        // Execute the post execute method
                        postExecute();
                    });
                }

                // See if we are creating custom actions
                if (cfg.CustomActionCfg) {
                    // See if we are targeting the site collection
                    if (cfg.CustomActionCfg.Site) {
                        // Increment the counter
                        ctrExecutions++;

                        // Log
                        console.log("[gd-sprest][Site Custom Actions] Starting the requests.");

                        // Get the site
                        Site(webUrl)
                            // Get the user custom actions
                            .UserCustomActions().execute(customActions => {
                                // Create the user custom actions
                                createUserCustomActions(customActions, cfg.CustomActionCfg.Site).then(() => {
                                    // Log
                                    console.log("[gd-sprest][Site Custom Actions] Completed the requests.");

                                    // Execute the post execute method
                                    postExecute();
                                });
                            });
                    }

                    // See if we are targeting the web
                    if (cfg.CustomActionCfg.Web) {
                        // Increment the counter
                        ctrExecutions++;

                        // Log
                        console.log("[gd-sprest][Web Custom Actions] Starting the requests.");

                        // Get the user custom actions
                        web.UserCustomActions().execute(customActions => {
                            // Create the user custom actions
                            createUserCustomActions(customActions, cfg.CustomActionCfg.Web).then(() => {
                                // Log
                                console.log("[gd-sprest][Web Custom Actions] Completed the requests.");

                                // Execute the post execute method
                                postExecute();
                            });
                        }, reject);
                    }
                }
            });
        },

        // Method to uninstall the configuration
        uninstall: (): PromiseLike<void> => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // Uninstall the web components
                uninstallWeb().then(() => {
                    // Uninstall the site components
                    uninstallSite().then(() => {
                        // Remove the webparts
                        removeWebParts().then(() => {
                            // Log
                            console.log("[gd-sprest] The configuration script completed, but some requests may still be running.");

                            // Resolve the promise
                            resolve();
                        }, reject);
                    }, reject);
                }, reject);
            });
        }
    };
}