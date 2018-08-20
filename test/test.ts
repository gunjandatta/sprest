import {
    $REST,
    Helper,
    List
} from "../build";

$REST.Web().Features().getById("").execute(f => { f.})

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