/// <reference path="../dist/sprest.d.ts" />

module GD {
    export class Test {
    }
}

var web = new GD.Web();

// Get the source folder
var srcFile = web.getFileByServerRelativeUrl("/sites/dev/siteassets/sprest/test.aspx").execute();

// Get the master page gallery root folder
var mpgFolder = web.Lists("Master Page Gallery").RootFolder().execute();

// Get the dev folder
var devFolder = mpgFolder.Folders("Dev").execute((folder) => {
    var promise = new GD.Utils.Promise();

    // Ensure it exists
    if(folder.Exists) {
        // Resolve the promise
        promise.resolve();
    } else {
        // Create the folder, and resolve the promise
        mpgFolder.Folders().add("Dev").execute((folder) => { devFolder = folder; promise.resolve(); });
    }

    // Return the promise
    return promise;
}, true);

// Wait for the requests to complete
web.done(() => {
    let fileUrl = devFolder.ServerRelativeUrl + "/" + srcFile.Name;

    // Copy the file
    srcFile.copyTo(fileUrl, true).execute();

    // Get the assoicated list item for this file
    web.Lists("Master Page Gallery").getItems("<View Scope='RecursiveAll'><Query><Where><Eq><FieldRef Name='FileRef' /><Value>" + fileUrl + "</Value></Eq></Where></Query></View>").execute(true);

    // Wait for the requests to complete
    web.done((dstFile, dstItem) => {
        debugger;
        // Update the item
        // PublishingAssociatedContentType: ";#Article Page;#0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF3900242457EFB8B24247815D688C526CD44D;#",
        dstItem.update({
            ContentTypeId: "0x01010007FF3E057FA8AB4AA42FCB67B453FFC100E214EEE741181F4E9F7ACC43278EE811",
            UIVersion: {
                __metadata: { type: "Collection(Edm.String)"},
                results: ["15"]
            }
        }).execute(() => {
            debugger;
        });
    });
});
