import {
    $REST, List, Helper, Types
} from "../src/index.d";

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
                const uploadedFiles = this.state.fileCount+1;
                this.setState({ fileCount: uploadFiles }, () => {
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