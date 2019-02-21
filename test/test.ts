import {
    $REST, List, Helper, Types
} from "../src/index.d";

$REST.Helper.SP.ModalDialog.showWaitScreenWithNoClose("");

$REST.ContextInfo.getWeb("/sites/appcatalog").execute(ctx => {
    $REST.Web("/sites/web", { requestDigest: ctx.GetContextWebInformation.FormDigestValue }).execute(w => {
    });
})


$REST.Helper.SP.SOD.registerSod("gd-sprest", $REST.ContextInfo.siteServerRelativeUrl + "/siteassets/gd-sprest");

$REST.Web().Lists().execute(r => {
    let title = r.results[0].Title;

    r.next().execute(n => {
        let title = n.results[0].Title;
        n.next().execute(n => {
            n.results[0].Items().execute(i => {
                i.results[0].File();
            });
        });
    });
})

$REST.List("").execute(l => {
    l.getItemById(3).execute(item => {
        let file = item.File;
    });
})

$REST.Web().getUserEffectivePermissions("").execute(r => {
    let h = r.High;
    let l = r.Low;
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