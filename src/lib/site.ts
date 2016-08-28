                post: ["createPreviewSPSite", "extendUpgradeReminderDate", "getCatalog", "getCustomListTemplates", "getWebTemplates",

                    "invalidate", "needsUpgradeByType", "openWeb", "openWebById", "runHealthCheck", "runUpgradeSiteSession",

                    "updateClientObjectModelUseRemoteAPIsPermissionSetting"],

                postDataInBodyNoArgs: ["getChanges"],

                custom: [

                    { name: "addCustomAction", "function": function (data) { return this.executePost("usercustomactions", null, data, true, "SP.UserCustomAction"); } },

                    { name: "getCustomAction", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("usercustomactions?$filter=Name eq '" + title + "' or Title eq '" + title + "'"); } },

                    { name: "getRootWeb", "function": function () { this._rootWeb = this._rootWeb || new BRAVO.Core.Web(this.ServerRelativeUrl, this.asyncFl); return this._rootWeb; } },

                    { name: "hasAccess", "function": function (permissions) { return hasAccess(this, permissions); } },

                    { name: "sendEmail", "function": function (data) { data = { properties: data }; data.properties.__metadata = { type: "SP.Utilities.EmailProperties" }; return this.executePost("_api/SP.Utilities.Utility.SendEmail", null, data, true); } },

                    { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.Site", "MERGE"); } }

                ]
