import {Helper} from "../src/lib/helper";
import {SPTypes} from "../src/types";

// Create a SharePointn Configuration object
let spCfg = new Helper.SPConfig({
    // Test List
    ListCfg: [
        {
            CustomFields: [
                {
                    Name: "TestField",
                    SchemaXml: ""
                }
            ],
            ListInformation: {
                BaseTemplate: SPTypes.ListTemplateType.GenericList,
                Title: "Test List"
            },
            TitleFieldDisplayName: "Custom Title",
            ViewInformation: [
                {
                    ViewFields: ["LinkTitle", "TestField"],
                    ViewName: "All Items"
                }
            ]
        }
    ]
});