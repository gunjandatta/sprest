                getDataAsParameter: ["getUserEffectivePermissions"],

                post: ["breakRoleInheritance", "deleteObject", "recycle", "resetRoleInheritance"],

                postDataInBodyNoArgs: ["validateUpdateListItem"],

                custom: [

                    { name: "addAttachment", "function": function (fileName, content) { return this.executePost("attachmentfiles/add", { FileName: fileName }, content, true); } },

                    { name: "addAttachmentFile", "function": function (file) { var thisObj = this; var promise = new BRAVO.Core.Promise(); getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.addAttachment(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },

                    { name: "update", "function": function (data) { return this.executePost(null, null, data, true, this.__metadata.type, "MERGE"); } }

                ]
