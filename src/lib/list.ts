                get: ["getRelatedFields", "getView"],

                getDataAsParameter: ["getUserEffectivePermissions"],

                post: ["addItem", "breakRoleInheritance", "deleteObject", "recycle", "renderListData", "renderListFormData",

                    "reserveListItemId", "resetRoleInheritance"],

                postDataInBodyNoArgs: ["getChanges", "getItems", "getListItemChangesSinceToken"],

                custom: [

                    { name: "addContentType", "function": function (data) { return this.executePost("contenttypes", null, data, true, "SP.ContentType"); } },

                    { name: "addExistingContentType", "function": function (data) { return this.executePost("contenttypes/addAvailableContentType", data); } },

                    { name: "addField", "function": function (data) { return this.executePost("fields/add", null, data, true, "SP.Field"); } },

                    { name: "addFieldAsXml", "function": function (data) { return this.executePost("fields/createFieldAsXml", null, { parameters: { __metadata: { type: "SP.XmlSchemaFieldCreationInformation" }, Options: SP.AddFieldOptions.addFieldInternalNameHint, SchemaXml: data } }, true); } },

                    { name: "addItem", "function": function (data) { return this.executePost("items", null, data, true, "SP.ListItem"); } },

                    { name: "addSiteGroup", "function": function (data) { return this.executePost("roleassignments/addroleassignment", data); } },

                    { name: "addSubFolder", "function": function (name) { return this.get_RootFolder().addSubFolder(name); } },

                    { name: "addView", "function": function (data) { return this.executePost("views", null, data, true, "SP.View"); } },

                    { name: "getContentType", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("contenttypes?$filter=Name eq '" + title + "'"); } },

                    { name: "getContentTypeById", "function": function (id) { return this.executeGet("contenttypes/getById", id); } },

                    { name: "getDefaultDisplayFormUrl", "function": function () { return this.executeGet("forms?$filter=FormType eq 4").ServerRelativeUrl; } },

                    { name: "getDefaultEditFormUrl", "function": function () { return this.executeGet("forms?$filter=FormType eq 6").ServerRelativeUrl; } },

                    { name: "getDefaultNewFormUrl", "function": function () { return this.executeGet("forms?$filter=FormType eq 8").ServerRelativeUrl; } },

                    { name: "getDefaultViewUrl", "function": function () { return this.get_DefaultView().ServerRelativeUrl; } },

                    { name: "getField", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "' or InternalName eq '" + title + "' or StaticName eq '" + title + "'"); } },

                    { name: "getFieldById", "function": function (id) { return this.executeGet("fields/getById", id); } },

                    { name: "getFieldByInternalName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=InternalName eq '" + name + "'"); } },

                    { name: "getFieldByStaticName", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("fields?$filter=StaticName eq '" + name + "'"); } },

                    { name: "getFieldByTitle", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("fields?$filter=Title eq '" + title + "'"); } },

                    { name: "getItemById", "function": function (id) { return this.executeGet("items(" + id + ")"); } },

                    { name: "getItemByTitle", "function": function (title) { title = encodeURIComponent(title); return this.getItemsByFilter("Title eq '" + title + "'"); } },

                    { name: "getItemsByFilter", "function": function (filter) { return this.executeGet("items?$filter=" + filter); } },

                    { name: "getSchemaXml", "function": function () { return this.executeGet("schemaxml"); } },

                    { name: "getSubFolder", "function": function (name) { name = encodeURIComponent(name); return this.executeGet("rootfolder/folders?$filter=Name eq '" + name + "'"); } },

                    { name: "getViewById", "function": function (id) { return this.executeGet("views/getById", id); } },

                    { name: "getViewByTitle", "function": function (title) { title = encodeURIComponent(title); return this.executeGet("views?$filter=Title eq '" + title + "'"); } },

                    { name: "hasAccess", "function": function (userName, permissions) { return hasAccess(this, permissions, userName); } },

                    { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.List", "MERGE"); } }

                ]
