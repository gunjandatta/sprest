                custom: [

                    { name: "createPost", "function": function (data) { data = { restCreationData: { __metadata: { type: "SP.Social.SocialRestPostCreationData" }, ID: null, creationData: data } }; data.restCreationData.creationData.__metadata = { type: "SP.Social.SocialPostCreationData" }; return this.executePost("feed/post", null, data, true); } },

                    { name: "getFeed", "function": function () { return this.executeGet("feed"); } },

                ]
