declare module "gd-sprest" {
    export namespace Types {
        /**
         * Site
         */
        export interface ISite extends Types.IBase {
            /**
             * Constructor
             * @param url - (Optional) The site url.
             * @param targetInfo - (Optional) The target information.
             */
            new(url?:string, targetInfo?:Types.ITargetInfo): ISite;

            /**
             * Properties
             */

            /** A value that specifies whether creation of declarative workflows can be used on this site collection. */
            AllowCreationDeclarativeWorkflow: boolean;

            /** Gets or sets a value that specifies whether a designer can be used on this site collection. */
            AllowDesigner: boolean;

            /** Gets or sets a value that specifies whether master page editing is allowed on this site collection. */
            AllowMasterPageEditing: boolean;

            /** Gets or sets a value that specifies whether this site collection can be reverted to its base template. */
            AllowRevertFromTemplate: boolean;

            AllowSaveDeclarativeWorkflowAsTemplate: boolean;

            AllowSavePublishDeclarativeWorkflow: boolean;

            /** Whether version to version upgrade is allowed on this site. */
            AllowSelfServiceUpgrade: boolean;

            /** Whether upgrade evaluation site collection is allowed. */
            AllowSelfServiceUpgradeEvaluation: boolean;

            Audit(): IAudit;

            AuditLogTrimmingRetention: number;

            /** Property indicating whether or not this object can be upgraded. */
            CanUpgrade: boolean;

            Classification: string;

            /** Gets the major version of this site collection for purposes of major version-level compatibility checks. */
            CompatibilityLevel: string;

            CurrentChangeToken: string;

            DisableAppViews: boolean;

            DisableCompanyWideSharingLinks: boolean;

            DisableFlows: boolean;

            /**
             * Gets the event receivers associated with the site.
            */
            EventReceivers(): IEventReceivers;

            /**
             * Gets the event receiver associated with the site.
             * @param id - The id of the event receiver.
            */
            EventReceivers(id:string): IEventReceiver;

            ExternalSharingTipsEnabled: boolean;

            /**
             * Gets a value that specifies the collection of the site collection features for the site collection that contains the site.
             */
            Features(): Types.IBase;

            GroupId: string;

            /** Gets the GUID that identifies the site collection. */
            Id: string;

            /** Gets or sets the comment that is used in locking a site collection. */
            LockIssue: string;

            /** Gets a value that specifies the maximum number of list items allowed per operation before throttling will occur. */
            MaxItemsPerThrottledOperation: number;

            NeedsB2BUpgrade: boolean;

            /**
             * Gets or sets the owner of the site collection. (Read-only in sandboxed solutions.)
             */
            Owner(): IUser;

            /** Specifies the primary URI of this site collection, including the host name, port number, and path. */
            PrimaryUri: string;

            /** Gets or sets a Boolean value that specifies whether the site collection is read-only, locked, and unavailable for write access. */
            ReadOnly: boolean;

            /** Gets a value that specifies the collection of recycle bin items for the site collection. */
            RecycleBin(): Types.IBase;

            RequiredDesignerVersion: string;

            /**
             * Gets a value that returns the top-level site of the site collection.
             */
            RootWeb(): IWeb;

            SandboxedCodeActivationCapability: number;

            SecondaryContact(): Types.IBase;

            ServerRelativePath: ComplexTypes.ResourcePath;

            /** Gets the server-relative URL of the root Web site in the site collection. */
            ServerRelativeUrl: string;

            ShareByEmailEnabled: boolean;

            ShowPeoplePickerSuggestionsForGuestUsers: boolean;

            /** Property that indicates whether users will be able to share links to documents that can be accessed without logging in. */
            ShareByLinkEnabled: boolean;

            /** Gets or sets a value that specifies whether the URL structure of this site collection is viewable. */
            ShowUrlStructure: boolean;

            StatusBarLink: string;

            StatusBarText: string;

            TrimAuditLog: boolean;

            /** Gets or sets a value that specifies whether the Visual Upgrade UI of this site collection is displayed. */
            UIVersionConfigurationEnabled: boolean;

            /** Specifies the upgrade information of this site collection. */
            UpgradeInfo: ComplexTypes.UpgradeInfo;

            /** Specifies a date, after which site collection administrators will be reminded to upgrade the site collection. */
            UpgradeReminderDate: string;

            UpgradeScheduled: boolean;

            UpgradeScheduledDate: string;

            /** Specifies whether the site is currently upgrading. */
            Upgrading: boolean;

            /** Gets the full URL to the root Web site of the site collection, including host name, port number, and path. */
            Url: string;

            /** Gets a value that specifies usage information about the site, including bandwidth, storage, and the number of visits to the site collection. */
            Usage: ComplexTypes.UsageInfo;

            /**
             * Gets the user custom action for the list.
             */
            UserCustomActions(): IUserCustomActions;

            /**
             * Gets the user custom action(s) for the list.
             * @param id - The id of the user custom action.
             */
            UserCustomActions(id:string): IUserCustomAction;

            /**
             * Methods
             */

            /**
             * Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
             * @param upgrade - If true, the evaluation site collection MUST be upgraded when it is created. If false, the evaluation site collection MUST NOT be upgraded when it is created.
             * @param sendEmail - If true, a notification email MUST be sent to the requestor and the site collection administrators at the completion of the creation of the evaluation site collection. If false, such notification MUST NOT be sent.
             */
            createPreviewSPSite(upgrade, sendEmail): Types.IBase;
            
            /**
             * Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
             */
            extendUpgradeReminderDate(): Types.IBase;

            /**
             * Method to execute the request.
             * @param callback - The method to be executed after the request completes.
             */
            execute(callback?:(...args) => any): ISite;

            /**
             * Method to execute the request.
             * @param waitFl - Flag to execute the request, after the previous requests have completed.
             */
            execute(waitFl:boolean): ISite;

            /**
             * Method to execute the request.
             * @param callback - The method to be executed after the request completes.
             * @param waitFl - Flag to execute the request, after the previous requests have completed.
             */
            execute(callback:any, waitFl:boolean): ISite;

            /**
             * Method to execute the request synchronously.
             */
            executeAndWait(): ISite;
            
            /**
             * Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
             * @param typeCatalog - Specifies the list template type for the gallery.
             */
            getCatalog(typeCatalog): Types.IBase;
            
            /**
             * Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
             * @param query - The change query.
             */
            getChanges(query): Types.IBase;

            /**
             * Specifies the collection of custom list templates for a given site.
             * @param web - Specifies the site that contains the custom list templates to be returned.
             */
            getCustomListTemplates(web): Types.IBase;
            
            /**
             * Returns the collection of site definitions that are available for creating Web sites within the site collection.
             * @param LCID - A 32-bit unsigned integer that specifies the language of the site definitions that are returned from the site collection.
             * @param overrideCompatLevel - Specifies the compatibility level of the site to return from the site collection. If this value is 0, the compatibility level of the site is used.
             */
            getWebTemplates(LCID, overrideCompatLevel): Types.IBase;
            
            /**
             * Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
             */
            invalidate(): Types.IBase;
            
            /**
             * Returns true if the object needs to be upgraded; otherwise, false.
             * @param versionUpgrade - If true, version-to-version site collection upgrade is requested; otherwise false for build-to-build site collection upgrade.
             * @param recursive - If true, child upgradable objects will be inspected; otherwise false.
             */
            needsUpgradeByType(versionUpgrade, recursive): Types.IBase;
            
            /**
             * Returns the site at the specified URL.
             * @param strUrl - The server-relative URL or site-relative URL of the site to return. If strUrl is empty, the top-level site is returned.
             */
            openWeb(strUrl): IWeb;
            
            /**
             * Returns the site with the specified GUID.
             * @param gWebId - A GUID that specifies which site to return.
             */
            openWebById(gWebId): IWeb;
            
            /**
             * Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
             * @param ruleId - Specifies the rule or rules to be run. If the value is an empty GUID, all rules are run, otherwise only the specified rule is run.
             * @param bRepair - Specifies whether repairable rules are to be run in repair mode.
             * @param bRunAlays - Specifies whether the rules will be run as a result of this call or cached results from a previous run can be returned.
             */
            runHealthCheck(ruleId, bRepair, bRunAlways): Types.IBase;
            
            /**
             * Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
             * @param versionUpgrade - If true, specifies that a version-to-version upgrade will be performed. If false, specifies that a build-to-build upgrade will be performed.
             * @param queueOnly - If true, specifies that the upgrade will not be run immediately; it will be queued for a later run.
             * @param sendEmail - If true, a notification email will be sent to the requestor and the site collection administrators at the completion of the site collection upgrade. If false, such notification will not be sent.
             */
            runUpgradeSiteSession(versionUpgrade, queueOnly, sendEmail): Types.IBase;

            /**
             * Updates it's properties.
             * @param data - The list properties to update.
             */
            update(data): Types.IBase;
            
            /**
             * Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
             * @param requireUseRemoteAPIs - Specifies whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
             */
            updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs): Types.IBase;
        }
    }
}