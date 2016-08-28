                custom: [

                    {

                        name: "get_WebParts", "function": function () {

                            return new BRAVO.Core.Object(this.TargetUrl, this.TargetEndPoint + "/WebParts?$expand=WebPart", this.asyncFl);

                        }

                    }

                ]
