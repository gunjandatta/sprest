                custom: [

                    { name: "add", "function": function (data) { data = { parameters: data }; data.parameters.__metadata = { type: "SP.WebCreationInformation" }; return this.executePost("add", null, data, true); } },

                ]
