System.register(["../utils/index", "../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, _Email, Email;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Email
            // The SP.Utilities.Utility.SendEmail object.
            /*********************************************************************************************************************************/
            _Email = class _Email extends index_1.Base {
                /*********************************************************************************************************************************/
                // Constructor
                /*********************************************************************************************************************************/
                constructor(targetInfo) {
                    // Call the base constructor
                    super(targetInfo);
                    // Default the properties
                    this.defaultToWebFl = true;
                    this.targetInfo.endpoint = "SP.Utilities.Utility.SendEmail";
                }
                /*********************************************************************************************************************************/
                // Methods
                /*********************************************************************************************************************************/
                // Method to send an email
                send(properties) {
                    // Parse the email properties
                    for (let propName of ["To", "CC", "BCC"]) {
                        let propValue = properties[propName];
                        // Ensure the value exists
                        if (propValue) {
                            // See if it's a string
                            if (typeof (propValue) === "string") {
                                // Add the results property
                                properties[propName] = { 'results': [propValue] };
                            }
                            else {
                                // Add the results property
                                properties[propName] = { 'results': propValue };
                            }
                        }
                    }
                    // Execute the method, and return the email object
                    return this.executeMethod("send", {
                        argNames: ["properties"],
                        name: "",
                        metadataType: "SP.Utilities.EmailProperties",
                        requestType: index_2.RequestType.PostWithArgsInBody
                    }, [properties]);
                }
            };
            exports_1("Email", Email = new _Email());
        }
    };
});
//# sourceMappingURL=email.js.map