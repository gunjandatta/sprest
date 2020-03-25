import { IRequest } from "../../@types/helper";
import { ContentType, ContentTypeCreationInformation, FieldLink, FieldLinkProps, ListItem } from "gd-sprest-def/lib/SP";
import { ContextInfo, Web } from "../lib";
import { Base, Request } from "../utils";
import { fieldlinks } from "../mapper/custom";
declare var SP;

/**
 * Creates a content type in a web or specified list.
 * @param ctInfo - The content type information.
 * @param parentInfo - The parent content type id and url containing it.
 * @param webUrl - The relative url to create the content type in.
 * @param listName - The list name to add the content type to.
 */
export const createContentType = (ctInfo: ContentTypeCreationInformation, parentInfo: { Id: string, Url?: string }, webUrl?: string, listName?: string): PromiseLike<ContentType> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Set the context
        let ctx = webUrl ? new SP.ClientContext(webUrl) : SP.ClientContext.get_current();

        // Get the parent content type
        let parentContentType = (parentInfo.Url ? ctx.get_site().openWeb(parentInfo.Url) : ctx.get_web()).get_contentTypes().getById(parentInfo.Id);

        // Create the content type
        let ct = new SP.ContentTypeCreationInformation();
        ctInfo.Description != null ? ct.set_description(ctInfo.Description) : null;
        ctInfo.Group != null ? ct.set_group(ctInfo.Group) : null;
        ct.set_name(ctInfo.Name);
        ct.set_parentContentType(parentContentType)

        // Add the content type
        let src = listName ? ctx.get_web().get_lists().getByTitle(listName) : ctx.get_web();
        let contentTypes = src.get_contentTypes();
        contentTypes.add(ct);
        ctx.load(contentTypes);

        // Execute the request
        ctx.executeQueryAsync(
            // Success
            () => {
                // Set the content type collection
                let cts = (listName ? Web().Lists(listName) : Web()).ContentTypes();

                // Find the content type
                cts.query({ Filter: "Name eq '" + ctInfo.Name + "'" }).execute(cts => {
                    // Resolve the request
                    resolve(cts.results[0] as any);
                });
            },

            // Error
            (sender, args) => {
                // Log
                console.log("[gd-sprest][Create Content Type] Error adding the content type.", ctInfo.Name);

                // Reject the request
                reject(args.get_message());
            });
    });
}

/**
 * Creates a document set item.
 * @param name - The name of the document set folder to create.
 * @param listName - The name of the document set library.
 * @param webUrl - The url of the web containing the document set library.
 */
export const createDocSet = (name: string, listName: string, webUrl?: string): PromiseLike<ListItem> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the document set's root folder
        Web(webUrl).Lists(listName).query({ Expand: ["ContentTypes", "ParentWeb", "RootFolder"] }).execute(list => {
            // Parse the content types
            let ctId = "0x0120D520";
            for (let i = 0; i < list.ContentTypes.results.length; i++) {
                // See if this is the document set content type
                if (list.ContentTypes.results[i].StringId.indexOf(ctId) == 0) {
                    // Set the content type id
                    ctId = list.ContentTypes.results[i].StringId;
                    break;
                }
            }

            // Create the document set item
            request({
                method: "POST",
                url: list.ParentWebUrl + "/_vti_bin/listdata.svc/" + list.Title.replace(/ /g, ""),
                headers: {
                    Accept: "application/json;odata=verbose",
                    "Content-Type": "application/json;odata=verbose",
                    Slug: list.RootFolder.ServerRelativeUrl + "/" + name + "|" + ctId,
                    "X-Requested-With": "XMLHttpRequest"
                },
                data: {
                    Title: name,
                    Path: list.RootFolder.ServerRelativeUrl
                }
            }).then(response => {
                // See if the request was successful
                if (response.d && response.d.Id > 0) {
                    // Get the document set item and resolve the promise
                    Web(webUrl).Lists(listName).Items(response.d.Id).execute(resolve);
                } else {
                    // Reject the promise
                    reject(response["response"])
                }
            });
        }, reject);
    });
}

/**
 * Determines if the user has permissions, based on the permission kind value
 */
export const hasPermissions = (permissionMask: any, permissions: Array<number> | number = []): boolean => {
    let hasPermissions = false;

    // Set the permissions
    let requestedPermissions = typeof (permissions) === "number" ? [permissions] : permissions;

    // Ensure the base permissions exist
    if (SP && SP.BasePermissions) {
        // Initialize the base permissions from the value
        let basePermissions = new SP.BasePermissions();
        basePermissions.initPropertiesFromJson(permissionMask);

        // Default the permission flag
        hasPermissions = true;

        // Parse the requested permissions
        for (let i = 0; i < requestedPermissions.length; i++) {
            // See if the user has permissions
            if (!basePermissions.has(requestedPermissions[i])) {
                // Set the flag and break from the loop
                hasPermissions = false;
                break;
            }
        }
    } else {
        // Log
        console.info("[gd-sprest] The 'SP' core library is not available.");
    }

    // Return the value
    return hasPermissions;
}

/**
 * Convert a JSON string to a base object
 */
export const parse = <T = Base>(jsonString: string): T => {
    // Try to parse the string
    try {
        let obj = JSON.parse(jsonString);

        // Create a base object
        let base = new Base(obj.props);

        // Set the properties
        base.response = obj.response;
        base.status = obj.status;
        base.targetInfo = obj.targetInfo;

        // Update the object
        Request.updateDataObject(base, false);

        // Return the base object
        return base as any;
    } catch { }

    return null;
}

/**
 * XML HTTP Request
 */
export const request = (props: IRequest): PromiseLike<any> => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Execute the request and resolve the promise
        (new Base({
            method: props.method || "GET",
            url: props.url,
            requestHeader: props.headers,
            data: props.data
        })).execute(resolve, reject);
    });
}

/**
 * Sets the field links associated with a content type.
 * @param ctInfo - The content type information
 */
export const setContentTypeFields = (ctInfo: { id: string, fields: Array<string | FieldLinkProps>, listName?: string, webUrl?: string }): PromiseLike<void> => {
    // Clears the content type field links
    let clearLinks = (): PromiseLike<Array<FieldLink>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the links
            getLinks().then(fieldLinks => {
                let skipFields: Array<FieldLink> = [];

                // See if we need to remove any fields
                if (fieldLinks.length > 0) {
                    let updateFl = false;

                    // Set the context
                    let ctx = ctInfo.webUrl ? new SP.ClientContext(ctInfo.webUrl) : new SP.ClientContext(ContextInfo.webServerRelativeUrl);

                    // Get the source
                    let src = ctInfo.listName ? ctx.get_web().get_lists().getByTitle(ctInfo.listName) : ctx.get_web();

                    // Get the content type
                    let contentType = src.get_contentTypes().getById(ctInfo.id);

                    // Parse the content type field links
                    for (let i = 0; i < fieldLinks.length; i++) {
                        let fieldLink = fieldLinks[i];

                        // See if we are keeping this field
                        let removeFl = true;
                        for (let j = 0; j < ctInfo.fields.length; j++) {
                            let field = ctInfo.fields[j];
                            let fieldName = typeof (field) === "string" ? field : field.Name || field.FieldInternalName;

                            if (fieldName == fieldLink.Name) {
                                // Set the flag
                                removeFl = false;

                                // Add the field
                                skipFields.push(fieldLink);
                                break;
                            }
                        }

                        // See if we are removing the field
                        if (removeFl) {
                            // Remove the field link
                            contentType.get_fieldLinks().getById(fieldLink.Id).deleteObject();

                            // Set the flag
                            updateFl = true;

                            // Log
                            console.log("[gd-sprest][Set Content Type Fields] Removing the field link: " + fieldLink.Name);
                        }
                    }

                    // See if an update is required
                    if (updateFl) {
                        // Update the content type
                        contentType.update(false);

                        // Execute the request
                        ctx.executeQueryAsync(
                            // Success
                            () => {
                                // Log
                                console.log("[gd-sprest][Set Content Type Fields] Removed the field links successfully.");

                                // Resolve the request
                                resolve(skipFields);
                            },

                            // Error
                            (sender, args) => {
                                // Log
                                console.log("[gd-sprest][Set Content Type Fields] Error removing the field links.");

                                // Reject the request
                                reject();
                            });
                    } else {
                        // Log
                        console.log("[gd-sprest][Set Content Type Fields] No fields need to be removed.");

                        // Resolve the request
                        resolve(skipFields);
                    }
                } else {
                    // Resolve the request
                    resolve(skipFields);
                }
            }, reject);
        });
    }

    // Creates the field links
    let createLinks = (skipFields: Array<FieldLink>) => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Set the context
            let ctx = ctInfo.webUrl ? new SP.ClientContext(ctInfo.webUrl) : new SP.ClientContext(ContextInfo.webServerRelativeUrl);

            // Get the source
            let src = ctInfo.listName ? ctx.get_web().get_lists().getByTitle(ctInfo.listName) : ctx.get_web();

            let skipField = (fieldName: string, fields: Array<FieldLink>): boolean => {
                for (let i = 0; i < fields.length; i++) {
                    // See if we are skipping this field
                    if (fields[i].Name == fieldName) { return true; }
                }
            }

            // Parse the fields to add
            let fields: Array<{ ref: any, info: string | FieldLinkProps }> = [];
            for (let i = 0; i < ctInfo.fields.length; i++) {
                let fieldInfo = ctInfo.fields[i];
                let fieldName = typeof (fieldInfo) === "string" ? fieldInfo : fieldInfo.Name || fieldInfo.FieldInternalName;

                // See if we are skipping this field
                if (skipField(fieldName, skipFields)) { continue; }

                // Load the field
                let field = src.get_fields().getByInternalNameOrTitle(fieldName);
                ctx.load(field);

                // Log
                console.log("[gd-sprest][Set Content Type Fields] Adding the field link: " + fieldName);

                // Save a reference to this field
                fields.push({ ref: field, info: fieldInfo });
            }

            // See if an update is needed
            if (fields.length > 0) {
                // Execute the request
                ctx.executeQueryAsync(() => {
                    // Get the content type
                    let contentType = src.get_contentTypes().getById(ctInfo.id);
                    ctx.load(contentType);

                    // Parse the fields
                    for (let i = 0; i < fields.length; i++) {
                        let field = fields[i];

                        // Create the field link
                        let fieldLink = new SP.FieldLinkCreationInformation();
                        fieldLink.set_field(field.ref);

                        // See if field information exist
                        if (typeof (field.info) != "string") {
                            // Update the properties
                            field.info.DisplayName != null ? fieldLink.set_displayName(field.info.DisplayName) : null;
                            field.info.Hidden != null ? fieldLink.set_hidden(field.info.Hidden) : null;
                            field.info.ReadOnly != null ? fieldLink.set_readOnly(field.info.ReadOnly) : null;
                            field.info.Required != null ? fieldLink.set_required(field.info.Required) : null;
                            field.info.ShowInDisplayForm != null ? fieldLink.set_showInDisplayForm(field.info.ShowInDisplayForm) : null;
                        }

                        // Add the field link to the content type
                        contentType.get_fieldLinks().add(fieldLink);
                    }

                    // Update the content type
                    contentType.update(ctInfo.listName ? false : true);

                    // Execute the request
                    ctx.executeQueryAsync(
                        // Success
                        () => {
                            // Log
                            console.log("[gd-sprest][Set Content Type Fields] Added the field links successfully.");

                            // Resolve the request
                            resolve();
                        },

                        // Error
                        (sender, args) => {
                            // Log
                            console.log("[gd-sprest][Set Content Type Fields] Error adding field references.", args.get_message());

                            // Reject the request
                            reject();
                        });
                }, (sender, args) => {
                    // Log
                    console.log("[gd-sprest][Set Content Type Fields] Error getting field references.", args.get_message());

                    // Resolve the request
                    resolve();
                });
            } else {
                // Log
                console.log("[gd-sprest][Set Content Type Fields] No fields need to be added.");

                // Resolve the request
                resolve();
            }
        });
    }

    // Gets the content type field links
    let getLinks = (): PromiseLike<Array<FieldLink>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if list name exists
            if (ctInfo.listName) {
                // Get the list content type field links
                Web(ctInfo.webUrl).Lists(ctInfo.listName).ContentTypes(ctInfo.id).FieldLinks().execute(fieldLinks => {
                    // Resolve the request
                    resolve(fieldLinks.results);
                }, reject);
            } else {
                // Get the content type field links
                Web(ctInfo.webUrl).ContentTypes(ctInfo.id).FieldLinks().execute(fieldLinks => {
                    // Resolve the request
                    resolve(fieldLinks.results);
                }, reject);
            }
        });
    }

    // Set the order of the field references
    let setOrder = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Set the context
            let ctx = ctInfo.webUrl ? new SP.ClientContext(ctInfo.webUrl) : new SP.ClientContext(ContextInfo.webServerRelativeUrl);

            // Get the source
            let src = ctInfo.listName ? ctx.get_web().get_lists().getByTitle(ctInfo.listName) : ctx.get_web();

            // Get the content type
            let contentType = src.get_contentTypes().getById(ctInfo.id);

            // Reorder the content type
            contentType.get_fieldLinks().reorder(ctInfo.fields);

            // Update the content type
            contentType.update(ctInfo.listName ? false : true);

            // Execute the request
            ctx.executeQueryAsync(
                // Success
                () => {
                    // Log
                    console.log("[gd-sprest][Set Content Type Fields] Updated the field order successfully.");

                    // Resolve the request
                    resolve();
                },

                // Error
                (sender, args) => {
                    // Log
                    console.log("[gd-sprest][Set Content Type Fields] Error updating the field order.", args.get_message());

                    // Reject the request
                    reject();
                });
        });
    }

    // Return a promise
    return new Promise((resolve, reject) => {
        // Ensure fields exist
        if (ctInfo.fields) {
            // Clear the links
            clearLinks().then(skipFields => {
                // Create the links
                createLinks(skipFields).then(() => {
                    // Set the field order
                    setOrder().then(resolve, reject);
                }, reject);
            }, reject);
        } else {
            // Resolve the promise
            resolve();
        }
    });
}