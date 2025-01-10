import {
    $REST, Graph, List, Helper, HubSites, HubSitesUtility, PeopleManager, Search, SitePages, SPTypes, Web
} from "../@types";

import { v2 } from "../@types";

v2.drive().execute(drive => {
    drive.id;
})

v2.drives().execute(drives => {
    drives.results[0].id;
})

v2.sites.getList({}).then(l => {
    l;
    l.items(3).setSensitivityLabel({}).execute();
})

v2.sites({ targetInfo: { url: "" } }).query({ Search: "*" }).execute(s => {
    s.siteCollection.root;
});
v2.sites.getRoot();
v2.sites.getCurrent().query({ Expand: ["permissions"] });
v2.sites.getList({ listName: "Test" }).then(list => {
    list.items().add({}).execute();
    list.items().execute(items => {
        items.results[0].fields();
    });
    list.items().query({}).execute(items => {
        items.results[0].fields.id;
    })
});

v2.sites().lists("").items();
v2.sites().lists("293874-239478-238479-32847987").execute(list => {
    list.items().execute(items => {
        items.results[0].update({});
    });
});
v2.sites().lists().execute(value => {
    value.results[0].items().execute(items => {
        items.results[0].id;
        items.add({}).execute();
    });
    value.results[0].contentTypes().execute(cts => {
        cts.add({}).execute();
    })
});

// Hub Sites
HubSites().execute(sites => {
    sites.results[0].ID;
})

HubSitesUtility().getHubSites().execute(sites => {
    sites.results[0].Description
})

Search().postquery({}).execute(results => {
    results.postquery.PrimaryQueryResult.RelevantResults.Table.Rows.results[0].Cells.results[0];
})

// Web
Web().getUserEffectivePermissions("").execute(perm => {
    // Save the permissions
    perm.GetUserEffectivePermissions;
});

SitePages().Pages().createAppPage({
    PageLayoutType: SPTypes.ClientSidePageLayout.Article,
    Title: "My Title",
    Description: "This is the description.",
    Url: "mydev.aspx"
}).execute()

// See if you can get the root folder of a catalog list/library
Web(null, { requestDigest: "" }).getCatalog(SPTypes.ListTemplateType.WebPartCatalog).RootFolder();

// People Manager - User Profile Properties
PeopleManager().getPropertiesFor("account.name").execute(profile => {
    profile.UserProfileProperties.results;
});
PeopleManager().getUserProfilePropertyFor("account.name", "FirstName").execute(profile => {
    profile.GetUserProfilePropertyFor;
});

// List
List("Site Assets").getUserEffectivePermissions("").execute(perm => {
    // Save the permissions
    perm.GetUserEffectivePermissions;
});

Web().Lists("").Items().query({});

// Graph
Graph.getAccessToken().execute(token => {
    token.access_token;
    token.expires_on;
});

Graph().me().execute(user => {
    user.givenName;
    user.drive().execute(drive => {
        drive.root;
    })
})

let el = document.querySelector("#Element") as HTMLElement;
let a1 = Helper.SP.CalloutManager.createAction({ text: "", onClickCallback: () => { } });
let m = Helper.SP.CalloutManager.createMenuEntries([{ text: "", onClickCallback: () => { } }]);
let a2 = Helper.SP.CalloutManager.createAction({ text: "", menuEntries: m })
let c = Helper.SP.CalloutManager.createNewIfNecessary({ ID: "", launchPoint: el });
c.addAction(a1);
c.addAction(a2);

$REST.Web().getFileByServerRelativeUrl("").getLimitedWebPartManager().WebParts().execute(wpMgr => {
});
$REST.Web().getFileByUrl("").ListItemAllFields().query({}).execute(item => {
    item.ParentList;
});
$REST.Web().CurrentUser().execute(user => {
    user.LoginName;
})
$REST.Web().CurrentUser().query({ Select: ["LoginName"] }).execute(user => {
    user.LoginName;
});

$REST.Web().query({}).execute(web => { });
$REST.Site().RootWeb().execute(web => { });

$REST.Web().RoleAssignments().getByPrincipalId(8).RoleDefinitionBindings().execute(d => {
    d.results[0].Name;
});

$REST.Web().Lists("Documents").RoleAssignments().execute(roles => {
    roles.results[0].PrincipalId;
});
$REST.Web().Lists("Documents").RoleAssignments().execute(roles => { });
$REST.Web().Lists().getById("").RoleAssignments();
$REST.Web().Lists().getByTitle("").RoleAssignments();
$REST.Web().Lists("").RoleAssignments();
$REST.Web().Lists().query({}).execute(lists => {
    lists.results[0].RoleAssignments.results[0].PrincipalId;
})

$REST.Web().SiteGroups().execute(groups => {
    groups.results[0].Id;
});
$REST.Web().SiteGroups("").RoleAssignments().execute(roles => {
    roles.results[0].PrincipalId;
})

$REST.HubSites().getById("").execute(h => { h.Title; });
$REST.GroupSiteManager().canUserCreateGroup().execute(value => {
    value
})

$REST.Helper.SP.ModalDialog.showWaitScreenWithNoClose("");

$REST.Helper.SP.SOD.registerSod("gd-sprest", "/siteassets/gd-sprest.min.js");

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

$REST.Web().SiteCollectionAppCatalog().add('App Catalog').execute();

$REST.List("").execute(l => {
    l.getItemById(3).execute(item => {
        let file = item.File;
    });
})

$REST.Web().getUserEffectivePermissions("").execute(r => {
    r.GetUserEffectivePermissions;
});

$REST.Search.postQuery<{
    Path: string;
    WebId: string;
}>({
    query: {
        Querytext: "contentClass:STS_Web",
        SelectProperties: { results: ["Path", "WebId"] }
    }
}).then(search => {
    search.results[0].Path;
})
$REST.Search().postquery({
    Querytext: "*",
    Properties: {
        results: [
            {
                Name: "GraphQuery",
                Value: { StrVal: "ACTOR(ME,action:1013)" }
            }
        ]
    }
}).execute(search => {
    search.postquery.PrimaryQueryResult.RelevantResults.Table.Rows.results[0].Cells.results[0].Key;
});

$REST.Helper.SPConfig({
    ListCfg: [{
        TitleFieldRequired: false,
        CustomFields: [
            { name: "TestField1", title: "Test Field 1", type: $REST.Helper.SPCfgFieldType.Text },
            { name: "TestField2", title: "Test Field 2", type: $REST.Helper.SPCfgFieldType.Text },
            { name: "TestField3", title: "Test Field 3", type: $REST.Helper.SPCfgFieldType.Text },
            {
                name: "",
                title: "",
                noteType: $REST.SPTypes.FieldNoteType.TextOnly,
            } as Helper.IFieldInfoNote,
            {
                name: "",
                title: "",
                type: $REST.Helper.SPCfgFieldType.Choice,
                format: $REST.SPTypes.ChoiceFormatType.RadioButtons
            } as Helper.IFieldInfoChoice,
            {
                name: "",
                title: "",
                type: $REST.Helper.SPCfgFieldType.Date,
                format: $REST.SPTypes.DateFormat.DateOnly
            } as Helper.IFieldInfoDate,
        ],
        ListInformation: {
            BaseTemplate: 100,
            Title: "Test List With Spaces"
        }
    }]
}).install();

Helper.Executor([""], s => {
})