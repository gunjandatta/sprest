import {
    $REST,
    Helper
} from "../dist/gd-sprest";

$REST.Search().postquery({
    Querytext: "*",
    Properties: [
        {
            Key: "GraphQuery",
            Value: "ACTOR(ME,action:1013)",
            ValueType: "string"
        }
    ]
});

$REST.Helper.SPConfig({
    ListCfg: [{
        CustomFields: [
            { name: "Location", title: "Location", type: $REST.Helper.SPCfgFieldType.Geolocation },
        ],
        ListInformation: {
            TemplateType: 100,
            Title: "Map"
        }
    }]
}).install();