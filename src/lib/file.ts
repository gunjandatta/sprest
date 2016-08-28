                get: ["getLimitedWebPartManager"],

                getBuffer: ["openBinaryStream"],

                post: ["approve", "cancelUpload", "checkIn", "checkOut", "copyTo", "deleteObject", "deny",

                    "moveTo", "publish", "recycle", "undoCheckOut", "unpublish"],

                postDataInBody: ["continueUpload", "finishUpload", "saveBinaryStream", "startUpload"],

                custom: [

                    { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.File", "MERGE"); } }

                ]
