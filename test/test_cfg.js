// Create a SharePoint Configuration object
var spCfg = {
    ContentTypes: [
        {
            JSLink: "~site/siteassets/dev/test.js",
            Name: "Test CT",
            ParentName: "Item",
            FieldRefs: [
                "Title"
            ]
        }
    ],

    // Site Fields
    Fields: [
        {
            name: "TestField1",
            schemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2211}" Name="TestField1" StaticName="TestField1" DisplayName="Test Field 1" Type="Text" />'
        },
        {
            name: "TestField2",
            schemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2212}" Name="TestField2" StaticName="TestField2" DisplayName="Test Field 2" Type="Text" />'
        },
        {
            name: "TestField3",
            schemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2213}" Name="TestField3" StaticName="TestField3" DisplayName="Test Field 3" Type="Text" />'
        },
        {
            name: "TestField4",
            schemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2214}" Name="TestField4" StaticName="TestField4" DisplayName="Test Field 4" Type="Text" />'
        },
        {
            name: "TestField5",
            schemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2215}" Name="TestField5" StaticName="TestField5" DisplayName="Test Field 5" Type="Text" />'
        }
    ],

    // Test Lists
    ListCfg: [
        // Test creation of custom fields
        // Test update of default view
        // Test update of the 'Title' field
        {
            ContentTypes: [
                {
                    Name: "Item",
                    FieldRefs: [
                        "Title", "TestField1", "TestField2", "TestField3", "TestField4", "TestField5"
                    ]
                },
                {
                    Name: "Just Fields",
                    FieldRefs: [
                        "TestField1", "TestField2", "TestField3", "TestField4", "TestField5"
                    ]
                },
                {
                    Name: "Test",
                    ParentName: "Test CT",
                    FieldRefs: [
                        "Title"
                    ]
                }
            ],

            CustomFields: [
                {
                    name: "TestField1",
                    schemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2211}" Name="TestField1" StaticName="TestField1" DisplayName="Test Field 1" Type="Text" />'
                },
                {
                    name: "TestField2",
                    schemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2212}" Name="TestField2" StaticName="TestField2" DisplayName="Test Field 2" Type="Text" />'
                },
                {
                    name: "TestField3",
                    schemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2213}" Name="TestField3" StaticName="TestField3" DisplayName="Test Field 3" Type="Text" />'
                },
                {
                    name: "TestField4",
                    schemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2214}" Name="TestField4" StaticName="TestField4" DisplayName="Test Field 4" Type="Text" />'
                },
                {
                    name: "TestField5",
                    schemaXml: '<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2215}" Name="TestField5" StaticName="TestField5" DisplayName="Test Field 5" Type="Text" />'
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
        },
        // Test creation of a document library
        // Test adding of content type
        {
            ContentTypes: [
                {
                    JSLink: "~site/siteassets/dev/test.js",
                    Name: "Document Set",
                    ParentName: "Document Set"
                }
            ],
            ListInformation: {
                BaseTemplate: 101,
                Title: "Test Doc Set"
            }
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
};

