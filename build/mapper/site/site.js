System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, site;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Library
            /*********************************************************************************************************************************/
            exports_1("site", site = {
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
                // Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
                createPreviewSPSite: {
                    argNames: ["upgrade", "sendemail"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
                extendUpgradeReminderDate: {
                    requestType: index_1.RequestType.Post
                },
                // Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
                getCatalog: {
                    argNames: ["typeCatalog"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
                getChanges: {
                    argNames: ["query"],
                    metadataType: "SP.ChangeQuery",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Specifies the collection of custom list templates for a given site.
                getCustomListTemplates: {
                    argNames: ["web"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Returns the collection of site definitions that are available for creating Web sites within the site collection.
                getWebTemplates: {
                    argNames: ["LCID", "overrideCompatLevel"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
                invalidate: {
                    requestType: index_1.RequestType.Post
                },
                // Returns true if the object needs to be upgraded; otherwise, false.
                needsUpgradeByType: {
                    argNames: ["versionUpgrade", "recursive"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Returns the site at the specified URL.
                openWeb: {
                    argNames: ["strUrl"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Returns the site with the specified GUID.
                openWebById: {
                    argNames: ["gWebId"],
                    requestType: index_1.RequestType.PostWithArgsValueOnly
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                },
                // Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
                runHealthCheck: {
                    argNames: ["ruleId", "bRepair", "bRunAlways"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
                runUpgradeSiteSession: {
                    argNames: ["versionUpgrade", "queueOnly", "sendEmail"],
                    requestType: index_1.RequestType.PostWithArgs
                },
                // Updates it's properties.
                update: {
                    metadataType: "SP.Site",
                    name: "",
                    requestMethod: "MERGE",
                    requestType: index_1.RequestType.PostWithArgsInBody
                },
                // Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
                updateClientObjectModelUseRemoteAPIsPermissionSetting: {
                    argNames: ["requireUseRemoteAPIs"],
                    requestType: index_1.RequestType.PostWithArgs
                }
            });
        }
    };
});
//# sourceMappingURL=site.js.map