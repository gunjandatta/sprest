                custom: [

                    { name: "delete", "function": function (id) { return this.executePost("delete", null, { ID: id || this.ID }, true); } },

                    { name: "like", "function": function (id) { return this.executePost("like", null, { ID: id || this.ID }, true); } },

                    { name: "lock", "function": function (id) { return this.executePost("lock", null, { ID: id || this.ID }, true); } },

                    { name: "reply", "function": function (data, id) { data = { restCreationData: { __metadata: { type: "SP.Social.SocialRestPostCreationData" }, ID: id || this.ID, creationData: data } }; data.restCreationData.creationData.__metadata = { type: "SP.Social.SocialPostCreationData" }; return this.executePost("reply", null, data, true); } },

                    { name: "unlike", "function": function (id) { return this.executePost("unlike", null, { ID: id || this.ID }, true); } },

                    { name: "unlock", "function": function (id) { return this.executePost("unlock", null, { ID: id || this.ID }, true); } },

                ]
