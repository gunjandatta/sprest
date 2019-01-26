import {
    $REST, Helper
} from "../src";

Helper.SP.ModalDialog.showWaitScreenWithNoClose("Title", "Loading the Form");

$REST.Web().Lists().execute(r => {
    let title = r.results[0].Title;

    r.next().execute(n => {
        let title = n.results[0].Title;
        n.next().execute(n => {
            n.results[0].Items().execute(i => {
                i.results[0].File().execute(f => {
                    let name = f.Name;
                })
            })
        });
    });
})

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