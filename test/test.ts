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

v2.sites.getCurrentWeb();
v2.sites.getList("Test").items().execute(items => {
    items.results[0].fields();
});

v2.sites().lists("").items();
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
Web(null, {requestDigest: ""}).getCatalog(SPTypes.ListTemplateType.WebPartCatalog).RootFolder();

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

let el = document.querySelector("#Element");
let a1 = Helper.SP.CalloutManager.createAction({ text: "", onClickCallback: () => { } });
let m = Helper.SP.CalloutManager.createMenuEntries([{ text: "", onClickCallback: () => { } }]);
let a2 = Helper.SP.CalloutManager.createAction({ text: "", menuEntries: m })
let c = Helper.SP.CalloutManager.createNewIfNecessary({ ID: "", launchPoint: el });
c.addAction(a1);
c.addAction(a2);

$REST.Web().getFileByServerRelativeUrl("").getLimitedWebPartManager().WebParts().execute(wpMgr => {
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

// Add attachments
let addAttachments = () => {
    const upInc = Number(100 / this.state.files.length).toFixed(2);
    this.setState({
        uploadInc: upInc,
        uploadCont: upInc
    });

    // Get the list item
    let item = List("TaskTracker").Items(this.state.newReqID);

    // Parse the files
    const currentFiles = this.state.files;
    for (let i = 0; i < currentFiles.length; i++) {
        let file = currentFiles[i];

        // Read the file
        const reader = new FileReader();
        reader.onloadend = () => {
            // Upload the file
            item.AttachmentFiles().add(file.name, reader.result).execute(info => {
                const uploadedFiles = this.state.fileCount + 1;
                this.setState({ fileCount: uploadedFiles }, () => {
                    // ...
                });
            }, true);
        }
        reader.onerror = () => console.error("file reading has failed");
        reader.readAsArrayBuffer(file);
    }

    // Wait for the files to be uploaded
    item.done(() => {
        // Do something
    });
}

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

$REST.List("").execute(l => {
    l.getItemById(3).execute(item => {
        let file = item.File;
    });
})

$REST.Web().getUserEffectivePermissions("").execute(r => {
    r.GetUserEffectivePermissions;
});

$REST.Search().postquery({
    Querytext: "*",
    Properties: [
        {
            Name: "GraphQuery",
            Value: { StrVal: "ACTOR(ME,action:1013)" }
        }
    ]
}).execute(results => {
    results.postquery.PrimaryQueryResult;
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