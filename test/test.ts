import {
    $REST,
    Helper
} from "../build";

$REST.Search().postquery({
    Querytext: "*",
    Properties: {
        Key: "GraphQuery",
        Value: "ACTOR(ME,action:1013)",
        ValueType: "string"
    }
})

Helper.SPConfig({
    ListCfg: [{
        ContentTypes: [
            { Name: "My Item" },
            { Name: "My Document", ParentName: "Document" }
        ],
        ListInformation: {
            BaseTemplate: 100,
            Title: "CT Demo"
        }
    }]
}).install();