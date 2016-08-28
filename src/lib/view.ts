                get: ["renderAsHtml"],

                post: ["deleteObject"],

                custom: [

                    { name: "update", "function": function (data) { return this.executePost(null, null, data, true, "SP.View", "MERGE"); } }

                ]
