module $REST {
    /*********************************************************************************************************************************/
    // Site
    // The SPSite object.
    /*********************************************************************************************************************************/
    export class Site extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(url?:string, ...args) {
            // Call the base constructor
            super(Base.getInputParmeters(args));

            // Default the properties
            this.defaultToWebFl = true;
            this.targetInfo.endpoint = "site";

            // See if the web url exists
            if(url) {
                // Set the settings
                this.targetInfo.url = url;
            }

            // See if we are executing the request
            if(this.executeRequestFl) {
                // Execute the request
                this.execute();
            }
            else {
                // Add the methods
                this.addMethods(this, { __metadata: { type: "site" } } );
            }
        }

        // Method to get the root web
        public getRootWeb() { return new Web(null, this.targetInfo); }

        // Method to determine if the current user has access, based on the permissions.
        public hasAccess(permissions) {
            // TO DO
            return true;
        };
    }

    export class Site_Async extends Site {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(url?:string, ...args) {
            // Call the base constructor
            super(url, Base.getAsyncInputParmeters.apply(null, args));
        }
    }
    
    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    Library.site = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/
        properties: [
            "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features", "Owner|user", "RootWeb|web",
            "UserCustomActions|usercustomactions|('[Name]')|usercustomaction"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Adds a custom action to the user custom action collection.
        addCustomAction: {
            metadataType: "SP.UserCustomAction",
            name: "usercustomactions",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
        createPreviewSPSite: {
            argNames: ["upgrade", "sendemail"],
            requestType: Types.RequestType.PostWithArgs
        },
        
        // Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
        extendUpgradeReminderDate: {
            requestType: Types.RequestType.Post
        },
        
        // Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
        getCatalog: {
            argNames: ["typeCatalog"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },
        
        // Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Gets a custom action by it's name or title.
        getCustomAction: {
            argNames: ["title"],
            name: "usercustomactions?$filter=Name eq '[[title]]' or Title eq '[[title]]'",
            requestType: Types.RequestType.GetReplace
        },
        
        // Specifies the collection of custom list templates for a given site.
        getCustomListTemplates: {
            argNames: ["web"],
            requestType: Types.RequestType.PostWithArgs
        },
        
        // Returns the collection of site definitions that are available for creating Web sites within the site collection.
        getWebTemplates: {
            argNames: ["LCID", "overrideCompatLevel"],
            requestType: Types.RequestType.PostWithArgs
        },
        
        // Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
        invalidate: {
            requestType: Types.RequestType.Post
        },
        
        // Returns true if the object needs to be upgraded; otherwise, false.
        needsUpgradeByType: {
            argNames: ["versionUpgrade", "recursive"],
            requestType: Types.RequestType.PostWithArgs
        },
        
        // Returns the site at the specified URL.
        openWeb: {
            argNames: ["strUrl"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },
        
        // Returns the site with the specified GUID.
        openWebById: {
            argNames: ["gWebId"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },
        
        // Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
        runHealthCheck: {
            argNames: ["ruleId", "bRepair", "bRunAlways"],
            requestType: Types.RequestType.PostWithArgs
        },
        
        // Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
        runUpgradeSiteSession: {
            argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.Site",
            name: "",
            requestMethod: "MERGE",
            requestType: Types.RequestType.PostWithArgsInBody
        },
        
        // Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
        updateClientObjectModelUseRemoteAPIsPermissionSetting: {
            argNames: ["requireUseRemoteAPIs"],
            requestType: Types.RequestType.PostWithArgs
        }        
    };
}
