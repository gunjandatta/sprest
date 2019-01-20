import {
    $REST, Helper
} from "../src";

$REST.List("").execute(l => {
    l.getItemById(3).execute(item => {
        let file = item.File;
    });
})

$REST.Web().getUserEffectivePermissions("").execute(r => {
    let h = r.GetUserEffectivePermissions.High;
});

$REST.Search().postquery({
    Querytext: "*",
    Properties: [
        {
            Name: "GraphQuery",
            Value: { StrVal: "ACTOR(ME,action:1013)" }
        }
    ]
});

$REST.Helper.SPConfig({
    ListCfg: [{
        CustomFields: [
            { name: "Location", title: "Location", type: $REST.Helper.SPCfgFieldType.Geolocation },
        ],
        ListInformation: {
            BaseTemplate: 100,
            Title: "Map"
        }
    }]
}).install();