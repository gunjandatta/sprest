                custom: [

                    { name: "containsUser", "function": function (user) { return this.executeGet("users?$filter=Id eq " + user.Id).exists; } }

                ]
