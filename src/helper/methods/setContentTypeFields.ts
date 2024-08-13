import { ContextWebInformation, IContentType, FieldLink, FieldLinkProps } from "gd-sprest-def/lib/SP";
import { IsetContentTypeFields } from "../../../@types/helper/methods";
import { ContextInfo, Web } from "../../lib";
declare var SP;

/**
 * Sets the field links associated with a content type.
 * @param ctInfo - The content type information
 */
export const setContentTypeFields: IsetContentTypeFields = (ctInfo: { id: string, fields: Array<string | FieldLinkProps>, listName?: string, webUrl?: string }): PromiseLike<void> => {
    // Clears the content type field links
    let clearLinks = (): PromiseLike<Array<FieldLink>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the links
            getLinks().then(fieldLinks => {
                let skipFields: Array<FieldLink> = [];
                let ct = Web(webContext.WebFullUrl).Lists(ctInfo.listName).ContentTypes(ctInfo.id);

                // See if we need to remove any fields
                if (fieldLinks.length > 0) {
                    let updateFl = false;

                    // Parse the content type field links
                    for (let i = 0; i < fieldLinks.length; i++) {
                        let fieldLink = fieldLinks[i];
                        let removeFl = true;

                        // Parse the fields to add
                        for (let j = 0; j < ctInfo.fields.length; j++) {
                            let field = ctInfo.fields[j];
                            let fieldName = typeof (field) === "string" ? field : field.Name || field.FieldInternalName;

                            // See if we are keeping this field
                            if (fieldName == fieldLink.Name) {
                                let propUpdateFl = false;

                                // Checks if an update is needed
                                let updateField = (oldValue, newValue) => {
                                    // Ensure a value exists
                                    if (newValue == null) { return; }

                                    // See if an update is needed
                                    if (oldValue == newValue) { return; }

                                    // Set the flag
                                    propUpdateFl = true;
                                }

                                // Update the properties
                                updateField(fieldLink.DisplayName, (field as FieldLinkProps).DisplayName);
                                updateField(fieldLink.Hidden, (field as FieldLinkProps).Hidden);
                                updateField(fieldLink.ReadOnly, (field as FieldLinkProps).ReadOnly);
                                updateField(fieldLink.Required, (field as FieldLinkProps).Required);
                                updateField(fieldLink.ShowInDisplayForm, (field as FieldLinkProps).ShowInDisplayForm);

                                // See if an update to the property is needed
                                if (!propUpdateFl) {
                                    // Set the flag to not remove this field reference
                                    removeFl = false;

                                    // Add the field to skip
                                    skipFields.push(fieldLink);
                                }

                                // Break from the loop
                                break;
                            }
                        }

                        // See if we are removing the field
                        if (removeFl) {
                            // Log
                            console.log("[gd-sprest][Set Content Type Fields] Removing the field link: " + fieldLink.Name);

                            // Remove the field link
                            ct.Fields().getById(fieldLink.Id).delete().execute(
                                // Success
                                () => {
                                    // Log
                                    console.log("[gd-sprest][Set Content Type Fields] Field link '" + fieldLink.Name + "' was removed successfully.");
                                },
                                // Error
                                () => {
                                    // Log
                                    console.log("[gd-sprest][Set Content Type Fields] Error removing the field link: " + fieldLink.Name);
                                }, true);

                            // Set the flag
                            updateFl = true;
                        }
                    }

                    // See if we are updating the content type
                    if (updateFl) {
                        // Wait for the requests to complete
                        ct.done(
                            // Success
                            () => {
                                // Log
                                console.log("[gd-sprest][Set Content Type Fields] Removed the field links successfully.");

                                // Resolve the request
                                resolve(skipFields);
                            }
                        );
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
    let createLinks = (skipFields: Array<FieldLink>): PromiseLike<void> => {
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

                        /**
                         * The field link set_[property] methods don't seem to work. Setting the field information seems to be the only way.
                         * The read only property is the only one that doesn't seem to work.
                         */

                        // See if the field ref has properties to update
                        if (typeof (field.info) !== "string") {
                            // Update the field properties
                            field.info.DisplayName != null ? field.ref.set_title(field.info.DisplayName) : null;
                            field.info.Hidden != null ? field.ref.set_hidden(field.info.Hidden) : null;
                            field.info.ReadOnly != null ? field.ref.set_readOnlyField(field.info.ReadOnly) : null;
                            field.info.Required != null ? field.ref.set_required(field.info.Required) : null;
                            field.info.ShowInDisplayForm != null ? field.ref.setShowInDisplayForm(field.info.ShowInDisplayForm) : null;
                        }

                        // Create the field link
                        let fieldLink = new SP.FieldLinkCreationInformation();
                        fieldLink.set_field(field.ref);

                        // Add the field link to the content type
                        contentType.get_fieldLinks().add(fieldLink);
                    }

                    // Update the content type
                    contentType.update(false);

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
            let ct: IContentType = null;

            // See if list name exists
            if (ctInfo.listName) {
                // Get the list content type
                ct = Web(ctInfo.webUrl).Lists(ctInfo.listName).ContentTypes(ctInfo.id);
            } else {
                // Get the content type
                ct = Web(ctInfo.webUrl).ContentTypes(ctInfo.id);
            }

            // Query the field links
            ct.FieldLinks().query({
                Select: ["DisplayName", "Id", "Name", "Required", "ReadOnly", "ShowInDisplayForm"]
            }).execute(fieldLinks => {
                // Resolve the request
                resolve(fieldLinks.results);
            }, reject);
        });
    }

    // Sets the context for the target site
    let webContext: ContextWebInformation = null;
    let setContext = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the context information of the target web
            ContextInfo.getWeb(ctInfo.webUrl || ContextInfo.webServerRelativeUrl).execute(context => {
                // Set the web context info
                webContext = context.GetContextWebInformation;

                // Resolve the request
                resolve();
            }, reject);
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

            // Parse the fields to add
            let fieldNames = [];
            for (let i = 0; i < ctInfo.fields.length; i++) {
                let fieldInfo = ctInfo.fields[i];
                let fieldName = typeof (fieldInfo) === "string" ? fieldInfo : fieldInfo.Name || fieldInfo.FieldInternalName;

                // Add the field name
                fieldNames.push(fieldName);
            }

            // Reorder the content type
            contentType.get_fieldLinks().reorder(fieldNames);

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
        // Ensure the SP object exists
        if (window["SP"]) {
            // Ensure fields exist
            if (ctInfo.fields) {
                // Set the context
                setContext().then(() => {
                    // Clear the links
                    clearLinks().then(skipFields => {
                        // Create the links
                        createLinks(skipFields).then(() => {
                            // Set the field order
                            setOrder().then(resolve, reject);
                        }, reject);
                    }, reject);
                }, reject);
            } else {
                // Resolve the promise
                resolve();
            }
        } else {
            // Resolve the request
            // This will cause issues in the SPConfig class
            resolve();
        }
    });
}