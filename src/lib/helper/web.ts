import {Promise} from "../../utils";
import {
    ComplexTypes,
    IField, IFields,
    IList,
    IPromise,
    IUserCustomAction, IUserCustomActions,
    IWeb,
    ISPCfgFieldInfo, ISPConfig, ISPConfigProps
} from "../../definitions";
import {
    ContextInfo,
    List,
    Site,
    Web
} from "..";

/**
 * Next Code Update:
 * Update code to use web and lists object that are passed to each method.
 * Use the "done" to wait for all requests to complete, instead of using promises.
 * Test then release to npm.
 */


/*********************************************************************************************************************************/
// SharePoint Configuration
/*********************************************************************************************************************************/
export class SPConfig {
    /**
     * Global Properties
     */
    private _configuration:ISPConfigProps


     /**
      * Constructor
      */
    constructor(cfg:ISPConfigProps) {
        // Save the configuration
        this._configuration = cfg;
    }

    /**
     * Methods
     */

    // Method to create the content types
    createContentTypes = () => {
        let promise = new Promise();

        // Create the fields
        this.createFields(this._configuration.FieldCfg).done(() => {
            // TO DO
            promise.resolve();
        });

        // Return the promise
        return promise;
    }

    // Method to create the fields
    createFields = (customFields:Array<ISPCfgFieldInfo>, listName?:string, titleFieldName?:string) => {
        let promise = new Promise();
        let target:IList | IWeb = null;

        // Ensure lists exist
        if(customFields == null && titleFieldName == null) {
            // Resolve the promise
            promise.resolve();
        } else {
            // See if the list name exists
            if(listName) {
                // Get the list
                target = new List(listName);

                // Log
                console.log("[gd-sprest] Creating fields for the '" + listName + "' list.");
            } else {
                // Get the web
                target = new Web();

                // Log
                console.log("[gd-sprest] Creating fields for the current web.");
            }

            // Get the fields
            target.Fields().execute((fields:IFields) => {
                let counter = 0;
                let fldTitle:IField = null;

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
                                console.log("[gd-sprest] The title field was successfully updated to '" + titleFieldName + "' for the '" + listName + "' list.");
                            } else {
                                // Log
                                console.log("[gd-sprest] Error updating the title field '" + titleFieldName + "' for the '" + listName + "' list.");
                            }
                        });
                    }

                    // Parse the custom fields
                    for(let j=0; j<customFields.length; j++) {
                        // See if this is a custom field
                        if(customFields[j].Name == field.InternalName) {
                            // Increment the counter
                            counter ++;

                            // Save a reference to the field and break from the loop
                            customFields[j].Field = field;
                            break;
                        }
                    }
                }

                // Parse the fields
                for(let i=0; i<customFields.length; i++) {
                    // See if we need to create the field
                    if(customFields[i].Field == null) {
                        // Create the field, but wait for the previous request to complete first
                        fields.createFieldAsXml(customFields[i].SchemaXml).execute(true);
                    }
                }

                // Wait for all requests to complete
                fields.done(() => {
                    // Log
                    console.log("[gd-sprest] All fields were successfully created.");
                });
            });
        }

        // Return a promise
        return promise;
    }

    // Method to create a list
    private createList = (index?:number, promise?:Promise) => {
        // Default the index
        index = typeof(index) === "number" ? index : 0;

        // See if we are done
        if(index >= this._configuration.ListCfg.length) {
            // Resolve the promise
            promise.resolve();
            return;
        }

        // Get the configuration
        let cfg = this._configuration.ListCfg[index];

        // Default the promise
        promise = promise ? promise : new Promise();

        // Get the list
        (new List(cfg.ListInformation.Title)).execute((list:IList) => {
            // See if the list exists
            if(list.existsFl) {
                // Create the next list
                this.createList(index + 1, promise);
            }

            // Remove spaces from the list name
            let listName = cfg.ListInformation.Title;
            cfg.ListInformation.Title = listName.replace(/ /g, "");

            // Get the web
            (new Web())
                // Get the lists
                .Lists()
                // Add the list
                .add(cfg.ListInformation)
                // Execute the request
                .execute((list:IList) => {
                    // Update the list configuration
                    cfg.ListInformation.Title = listName;

                    // See if we need to update the list
                    if(list.existsFl && list.Title != listName) {
                        // Update the list
                        list.update({ Title: listName }).execute();
                    }

                    // Wait for the requests to complete
                    list.done(() => {
                        // Create the next list
                        this.createList(index + 1, promise);
                    });
                });
        });

        // Return a promise
        return promise;
    }

    // Method to create the lists
    private createLists = () => {
        let promise = new Promise();

        // Create the content types
        this.createContentTypes().done(() => {
            // Ensure lists exist
            if(this._configuration.ListCfg == null || this._configuration.ListCfg.length == 0) {
                // Resolve the promise
                promise.resolve();
            } else {
                // Log
                console.log("[gd-sprest] Starting to create/update the lists.");

                // Create the list
                this.createList().done(() => {
                    // Resolve the promise
                    promise.resolve();
                })
            }
        });

        // Return a promise
        return promise;
    }

    // Method to create the user custom action
    private createUserCustomAction = (siteFl:boolean, index?:number, promise?:Promise) => {
        let cfgs = siteFl ? this._configuration.CustomActionCfg.Site : this._configuration.CustomActionCfg.Web;

        // Default the index
        index = typeof(index) === "number" ? index : 0;

        // See if we are done
        if(index >= cfgs.length) {
            // Resolve the promise
            promise.resolve();
            return;
        }

        // Get the configuration
        let cfg = cfgs[index];

        // Default the promise
        promise = promise ? promise : new Promise();

        // Get the user custom actions
        let customActions:IUserCustomActions = (siteFl ? new Site() : new Web()).UserCustomActions();

        // Query for this custom action
        customActions.query({
            Filter: "Name eq '" + cfg.Name + "'"
        }).execute((ca:IUserCustomAction) => {
            // See if this custom action exists
            if(ca.existsFl) {
                // Log
                console.log("[gd-sprest] The " + (siteFl ? "site" : "web") + " custom action '" + cfg.Name + "' already exists.");
            } else {
                // Create the custom action
                customActions.add(cfg).execute(true);
            }

            // Wait for the requests to complete
            customActions.done(() => {
                // Create the next user custom action
                this.createUserCustomAction(siteFl, index + 1, promise);
            });
        });

        // Return the promise
        return promise;
    }

    // Method to create the user custom actions
    private createUserCustomActions = () => {
        let counter = 0;
        let promise = new Promise();

        // Ensure custom actions exist
        if(this._configuration.CustomActionCfg == null) { return; }

        // See if we are creating site custom actions
        if(this._configuration.CustomActionCfg.Site && this._configuration.CustomActionCfg.Site.length > 0) {
            // Log
            console.log("[gd-sprest] Starting to create the site user custom actions.");

            // Increment the counter
            counter++;

            // Create the user custom action
            this.createUserCustomAction(true).done(() => {
                // See if we are done
                if(++counter)
                // Resolve the promise
                promise.resolve();
            });
        }

        // See if we are creating web custom actions
        if(this._configuration.CustomActionCfg.Web && this._configuration.CustomActionCfg.Web.length > 0) {
            // Log
            console.log("[gd-sprest] Starting to create the site user custom actions.");

            // Increment the counter
            counter++;

            // Create the user custom action
            this.createUserCustomAction(false).done(() => {
                // See if we are done
                if(++counter)
                // Resolve the promise
                promise.resolve();
            });
        }

        // Return a promise
        return promise;
    }

    // Method to execute the request
    execute(callback) {
        // Create the lists
        this.createLists().done(() => {
            // Log
            console.log("[gd-sprest] Execution has completed.")

            // See if the callback exists
            if(callback && typeof(callback) === "function") {
                // Execute the callback
                callback();
            }
        });
    }
};