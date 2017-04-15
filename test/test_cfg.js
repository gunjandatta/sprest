// Create a SharePointn Configuration object
var spCfg = new $REST.Helper.SPConfig({
    // Site Fields
    FieldCfg: [
        {
            Name: "TestField1",
            SchemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2211}" Name="TestField1" StaticName="TestField1" DisplayName="Test Field 1" Type="Text" />'
        },
        {
            Name: "TestField2",
            SchemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2212}" Name="TestField2" StaticName="TestField2" DisplayName="Test Field 2" Type="Text" />'
        },
        {
            Name: "TestField3",
            SchemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2213}" Name="TestField3" StaticName="TestField3" DisplayName="Test Field 3" Type="Text" />'
        },
        {
            Name: "TestField4",
            SchemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2214}" Name="TestField4" StaticName="TestField4" DisplayName="Test Field 4" Type="Text" />'
        },
        {
            Name: "TestField5",
            SchemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2215}" Name="TestField5" StaticName="TestField5" DisplayName="Test Field 5" Type="Text" />'
        }
    ],

    // Test List
    ListCfg: [
        {
            CustomFields: [
                {
                    Name: "TestField1",
                    SchemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2211}" Name="TestField1" StaticName="TestField1" DisplayName="Test Field 1" Type="Text" />'
                },
                {
                    Name: "TestField2",
                    SchemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2212}" Name="TestField2" StaticName="TestField2" DisplayName="Test Field 2" Type="Text" />'
                },
                {
                    Name: "TestField3",
                    SchemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2213}" Name="TestField3" StaticName="TestField3" DisplayName="Test Field 3" Type="Text" />'
                },
                {
                    Name: "TestField4",
                    SchemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2214}" Name="TestField4" StaticName="TestField4" DisplayName="Test Field 4" Type="Text" />'
                },
                {
                    Name: "TestField5",
                    SchemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2215}" Name="TestField5" StaticName="TestField5" DisplayName="Test Field 5" Type="Text" />'
                }
            ],
            ListInformation: {
                BaseTemplate: 100,
                Title: "Test List"
            },
            TitleFieldDisplayName: "Custom Title",
            ViewInformation: [
                {
                    ViewFields: ["LinkTitle", "TestField1", "TestField2", "TestField3", "TestField4", "TestField5"],
                    ViewName: "All Items"
                }
            ]
        }
    ],

    // User Custom Actions
    CustomActionCfg: {
        Site: [
            {
                Description: "Reference to the gd-sprest library.",
                Location: "ScriptLink",
                Name: "Site_gd-sprest",
                ScriptSrc: "~site/siteassets/sprest/gd-sprest.min.js",
                Title: "gd-sprest"
            }
        ],
        Web: [
            {
                Description: "Reference to the gd-sprest library.",
                Location: "ScriptLink",
                Name: "Web_gd-sprest",
                ScriptSrc: "~site/siteassets/sprest/gd-sprest.min.js",
                Title: "gd-sprest"
            }
        ]
    }
});