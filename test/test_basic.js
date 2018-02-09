var log = document.querySelector("#log");
var LogType = {
    Error: 0,
    Header: 1,
    Info: 2,
    SubHeader: 3,
    Pass: 4,
    Text: 5,
    Warning: 6
}

function assert(obj, action, property, value) {
    // Test success
    if (obj) {
        // Success
        if (obj.hasOwnProperty(property) && obj[property] == value) {
            writeToLog("Method '" + action + "' passed the test.", LogType.Pass);
        }
        // Error
        else {
            writeToLog("Method '" + action + "' failed the test.", LogType.Error);
            writeToLog(obj.response, LogType.Error);
        }
    }
    else {
        writeToLog("Error: Object does not exist.", LogType.Error);
    }
}

function cbAll_Click(cb) {
    var isChecked = cb.checked;

    // Parse the check boxes
    var checkboxes = document.querySelectorAll("input[name='test']");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = isChecked;
    }
}

function runTests() {
    // Clear the log
    document.querySelector("#log").innerHTML = "";

    // Parse the check boxes
    var checkboxes = document.querySelectorAll("input[name='test']");
    for (var i = 0; i < checkboxes.length; i++) {
        // Ensure it's checked
        if (checkboxes[i].checked) {
            // Run the selected test
            switch (checkboxes[i].value) {
                case "alm":
                    testALM();
                    break;
                case "file":
                    testFile();
                    break;
                case "list":
                    testList();
                    break;
                case "listAsync":
                    testListAsync();
                    break;
                case "security":
                    testSecurity();
                    break;
            }
        }
    }
}

function testALM() {
    // Log
    writeToLog("ALM", LogType.Header);

    // Log
    writeToLog("Getting the solution package.", LogType.SubHeader);

    // Get this file
    var file = $REST.Web().getFileByServerRelativeUrl("/sites/dev/siteassets/sprest/hello-world-web-part.sppkg").executeAndWait();

    // Test
    assert(file, "read file", "Exists", true);

    // Log
    writeToLog("Adding the Solution Package", LogType.SubHeader)

    // Read the content types of this file
    file.content().execute(function (content) {
        // Add the app file
        var appFile = $REST.Web().TenantAppCatalog().add(true, "hw-webpart.sppkg", content).executeAndWait();

        // Get the app
        $REST.Web().TenantAppCatalog().AvailableApps().query({ Filter: "Title eq 'hello-world-web-part-client-side-solution'" }).execute(function (apps) {
            var app = apps.results[0];

            // Ensure the app exists
            assert(app, "query app", "existsFl", true);

            // Ensure it's deployed
            if (app.Deployed) {
                // Log
                writeToLog("App is already deployed.", LogType.Info);
            } else {
                // Deploy the app
                app.deploy().execute(function (response) {
                    // Ensure it was deployed
                    assert(response, "deploy app", "Deploy", null);
                }, true)
            }

            // Retract the app
            app.retract().execute(function (response) {
                // Ensure it was retracted
                assert(response, "retract app", "Retract", null);

                // Remove the app
                app.remove().execute(function (response) {
                    // Ensure it was removed
                    assert(response, "remove app", "Remove", null);
                });
            })
        });
    });
}

function testContentType(list) {
    // Log
    writeToLog("Content Type", LogType.Header);

    // Log
    writeToLog("Creating the content type", LogType.SubHeader);

    // Create the content type
    var web = new $REST.Web();
    var ct = web.ContentTypes()
        .add({
            Name: "SPRest" + SP.Guid.newGuid().toString()
        })
        .executeAndWait();

    // Test
    assert(ct, "create", "existsFl", true);

    // See if the content type exists
    if (ct.existsFl) {
        // Log
        writeToLog("Updating the content type", LogType.SubHeader);

        // Update the content type
        ct.update({
            Group: "Dev"
        }).executeAndWait();

        // Read the content types
        ct = $REST.Web().ContentTypes(ct.Id.StringValue).executeAndWait();

        // Test
        assert(ct, "update", "Group", "Dev");

        // Log
        writeToLog("Creating a field", LogType.SubHeader);

        // Get the test field
        var field = $REST.Web().Fields("SPRestText").executeAndWait();
        if (!field.existsFl) {
            // Create the test field
            field = web.Fields().createFieldAsXml('<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2212}" Name="SPRestText" StaticName="SPRestText" DisplayName="SPREST Test Text" Type="Text" />').executeAndWait();
        }

        // Test
        assert(field, "create field", "existsFl", true);

        // Log
        writeToLog("Add List Field", LogType.SubHeader);

        // Add the field to the list
        var listField = list.Fields().createFieldAsXml('<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2212}" Name="SPRestText" StaticName="SPRestText" DisplayName="SPREST Test Text" Type="Text" />').executeAndWait();

        // Test
        assert(listField, "add list field", "existsFl", true);

        // Log
        writeToLog("Add Field Link", LogType.SubHeader);

        // Note - This is a bug with the REST api
        writeToLog("Note - Failure to add a field link is a known bug with the REST API.", LogType.Info);

        // Add the field to the content type
        var fieldLink = ct.FieldLinks().add({ FieldInternalName: field.InternalName }).executeAndWait();

        // Test
        assert(fieldLink, "add field link", "existsFl", true);

        // Log
        writeToLog("Add List Content Type", LogType.SubHeader);

        // Add the content type to the list
        var ctList = list.ContentTypes().addAvailableContentType(ct.Id.StringValue).executeAndWait();

        // Test
        assert(ctList, "add list content type", "existsFl", true);

        // Log
        writeToLog("Deleting the list content type", LogType.SubHeader);

        // Delete the content type from the list
        ctList = ctList.delete().executeAndWait();

        // Test
        assert(ctList.d, "delete", "DeleteObject", null);

        // Log
        writeToLog("Deleting the content type", LogType.SubHeader);

        // Delete the content type
        ct = ct.delete().executeAndWait();

        // Test
        assert(ct.d, "delete", "DeleteObject", null);

        // Log
        writeToLog("Deleting the field", LogType.SubHeader);

        // Delete the content type
        field = field.delete().executeAndWait();

        // Test
        assert(field.d, "delete", "DeleteObject", null);
    }
    else {
        // Log
        writeToLog("Content Type was not created.", LogType.Error);
        writeToLog(ct.response, LogType.Error);
    }
}

function testField() {
    // TO DO
}

function testFile() {
    // Log
    writeToLog("File", LogType.Header);

    // Log
    writeToLog("Getting this file.", LogType.SubHeader);

    // Get this file
    var file = $REST.Web().getFileByServerRelativeUrl(_spPageContextInfo.serverRequestPath).executeAndWait();

    // Test
    assert(file, "read file", "Exists", true);

    // Log
    writeToLog("Getting the parent folder", LogType.SubHeader);

    // Get the parent folder
    var folder = $REST.Web().getFolderByServerRelativeUrl(file.ServerRelativeUrl.substr(0, file.ServerRelativeUrl.length - file.Name.length - 1)).executeAndWait();

    // Test
    assert(folder, "read folder", "Exists", true);

    // Log
    writeToLog("Create a folder", LogType.SubHeader);

    // Create a sub-folder
    var subFolder = folder.Folders().add("Test").executeAndWait();

    // Test
    assert(subFolder, "create folder", "Exists", true);

    // Log
    writeToLog("Copy a file", LogType.SubHeader);

    // Read the content types of this file
    var fileContent = file.content().executeAndWait();

    // Test
    assert(fileContent, "read file buffer", "length", fileContent ? fileContent.length : 0);

    // Note - The content will be a string, since I'm executing this synchronously.
    // We will need to convert the content to a buffer
    var buffer = new ArrayBuffer(fileContent.length * 2);
    var bufferView = new Uint16Array(buffer);
    for (var i = 0; i < fileContent.length; i++) {
        bufferView[i] = fileContent.charCodeAt(i);
    }

    // Copy the file
    file = subFolder.Files().add(true, "test.aspx", buffer).executeAndWait();

    // Test
    assert(file, "copy file", "Exists", true);

    // Log
    writeToLog("Delete the file", LogType.SubHeader);

    // Delete the file
    file = file.delete().executeAndWait();

    // Test
    assert(file.d, "delete file", "DeleteObject", null);

    // Log
    writeToLog("Delete the folder", LogType.SubHeader);

    // Delete the sub-folder
    subFolder = subFolder.delete().executeAndWait();

    // Test
    assert(subFolder.d, "delete folder", "DeleteObject", null);
}

function testList() {
    // Log
    writeToLog("List", LogType.Header);

    // Log
    writeToLog("Creating the list", LogType.SubHeader);

    // Create the list
    var web = new $REST.Web();
    var list = web.Lists()
        .add({
            BaseTemplate: 100,
            Description: "This is a test list.",
            Title: "SPRest" + SP.Guid.newGuid().toString()
        })
        .executeAndWait();

    // Test
    assert(list, "create", "existsFl", true);

    // See if the list exists
    if (list.existsFl) {
        // Log
        writeToLog("Updating the list", LogType.SubHeader);

        // Update the list
        list.update({
            Description: "Updated description"
        }).executeAndWait();

        // Read the updated list
        list = new $REST.List(list.Title).executeAndWait();

        // Test
        assert(list, "update", "Description", "Updated description");

        // Test the list item
        testListItem(list);

        // Test the list items
        testListItems(list);

        // Test the list view
        testListView(list);

        // Test the content type
        testContentType(list);

        // Log
        writeToLog("Deleting the list", LogType.SubHeader);

        // Delete the list
        list = list.delete().executeAndWait();

        // Test
        assert(list.d, "delete", "DeleteObject", null);
    }
    else {
        // Log
        writeToLog("List was not created.", LogType.Error);
        writeToLog(list.response, LogType.Error);
    }
}

function testListAsync() {
    // Log
    writeToLog("List", LogType.Header);

    // Log
    writeToLog("Creating the list", LogType.SubHeader);

    // Create a list
    $REST.Web().Lists().add({
        BaseTemplate: 100,
        Description: "This is a test list.",
        Title: "SPRest" + SP.Guid.newGuid().toString()
    }).execute(function (list) {
        // Test
        assert(list, "create", "existsFl", true);

        // Log
        writeToLog("Creating the list items", LogType.SubHeader);

        // Create a counter
        for (var i = 0; i < 5; i++) {
            // Get the item collection
            list.Items()
                // Add the item
                .add({ Title: "New Item " + i })
                // Execute and wait for the previous item
                .execute(true);
        }

        // Wait for the requests to complete
        list.done(function () {
            var idx = 0;

            // Assert the items
            for (var i = arguments.length - 5; i < arguments.length; i++) {
                // Test
                assert(arguments[i], "create item " + idx, "Title", "New Item " + idx++);
            }

            // Log
            writeToLog("Deleting the list", LogType.SubHeader);

            // Delete the list
            list.delete().execute(function (result) {
                // Test
                assert(result.d, "delete", "DeleteObject", null);
            });
        });
    });
}

function testListItem(list) {
    // Log
    writeToLog("List Item", LogType.Header);

    // Log
    writeToLog("Creating the list item", LogType.SubHeader);

    // Create the item
    var item = list.Items().add({
        Title: "New Item"
    }).executeAndWait();
    assert(item, "create", "existsFl", true);

    // Log
    writeToLog("Update the list item", LogType.SubHeader);

    // Update the item
    item.update({
        Title: "Updated Item"
    }).executeAndWait();

    // Read the updated item
    item = $REST.List(list.Title).Items(item.ID).executeAndWait();

    // Test
    assert(item, "update", "Title", "Updated Item");

    // Log
    writeToLog("Deleting the list item", LogType.SubHeader);

    // Delete the item
    item = item.delete().executeAndWait();

    // Test
    assert(item.d, "delete", "DeleteObject", null);
}

function testListItems(list) {
    var items = [];
    var maxNumber = 5;

    // Log
    writeToLog("List Items", LogType.Header);

    // Log
    writeToLog("Creating the list items", LogType.SubHeader);

    // Create the items
    for (var i = 1; i <= maxNumber; i++) {
        var title = "New Item " + i;

        // Create the item
        var item = list.Items().add({
            Title: title
        }).executeAndWait();

        // Test
        assert(item, "create item " + i, "Title", title);

        // Save a reference to the items
        items.push(item);
    }

    // Log
    writeToLog("Query the list items", LogType.SubHeader);

    // Generate the caml query
    var template = "<{{Type}}><FieldRef Name='ID' /><Value Type='Integer'>{{Value}}</Value></{{Type}}>";
    var caml = "<Query><Where><And>{{Min}}{{Max}}</And></Where></Query>"
        .replace(/{{Min}}/g, template.replace(/{{Type}}/g, "Geq").replace(/{{Value}}/g, items[0].ID))
        .replace(/{{Max}}/g, template.replace(/{{Type}}/g, "Leq").replace(/{{Value}}/g, items[items.length - 1].ID));

    // Get the items
    items = $REST.List(list.Title, false).getItemsByQuery(caml).executeAndWait();

    // Test
    assert(items.results, "query list items", "length", maxNumber);
}

function testListView(list) {
    // Log
    writeToLog("List View", LogType.Header);

    // Log
    writeToLog("Creating the list view", LogType.SubHeader);

    // Create the item
    view = list.Views().add({
        Title: "New View",
        ViewQuery: '<OrderBy><FieldRef Name="Title" /></OrderBy>'
    }).executeAndWait();
    assert(view, "create", "existsFl", true);

    // Log
    writeToLog("Deleting the list view", LogType.SubHeader);

    // Delete the item
    view = view.delete().executeAndWait();

    // Test
    assert(view.d, "delete", "DeleteObject", null);
}

function testSecurity() {
    // Log
    writeToLog("Security", LogType.Header);

    // Log
    writeToLog("Querying the permissions", LogType.SubHeader);

    // Get the web
    var web = new $REST.Web();

    // Get the 'View Only' permission
    var permission = web.RoleDefinitions().query({ Filter: "Name eq 'View Only'" }).executeAndWait();

    // Test
    assert(permission, "query", "existsFl", true);

    // Ensure the permission exists
    if (!permission.existsFl) { return; }

    // Log
    writeToLog("Creating the site group", LogType.SubHeader);

    // Get the test group
    var group = web.SiteGroups("Test Group").executeAndWait();
    if (!group.existsFl) {
        // Create a new group
        group = web.SiteGroups().add({ Title: "Test Group" }).executeAndWait();
    }

    // Test
    assert(group, "create group", "existsFl", true);

    // Log
    writeToLog("Adding user to site group", LogType.SubHeader);

    // Ensure the permission exists
    if (!group.existsFl) { return; }

    // Add the current user to the group
    var user = group.Users().add({ LoginName: web.CurrentUser().executeAndWait().LoginName }).executeAndWait();

    // Test
    assert(user, "create user", "existsFl", true);

    // Remove the user from the group
    user = group.Users().removeByLoginName(user.LoginName).executeAndWait();

    // Test
    assert(user.d, "delete user", "RemoveByLoginName", null);

    // Log
    writeToLog("Deleting the group", LogType.SubHeader);

    // Delete the group
    group = web.SiteGroups().removeById(group.Id).executeAndWait();

    // Test
    assert(group.d, "delete group", "RemoveById", null);
}

function writeToLog(text, logType) {
    var el = "";

    // Ensure text exists
    if (typeof (text) !== "string" || text == "") { return; }

    // Set the element tag
    switch (logType) {
        case LogType.Header:
            el = "h1";
            break;
        case LogType.SubHeader:
            el = "h3";
            break;
        default:
            el = "p";
            break;
    }

    // Set the style
    switch (logType) {
        case LogType.Error:
            text = "<span style='color:red'>" + text + "</span>";
            break;
        case LogType.Info:
            text = "<span style='color:blue'>" + text + "</span>";
            break;
        case LogType.Pass:
            text = "<span style='color:green'>" + text + "</span>";
            break;
        case LogType.Warning:
            text = "<span style='color:orange'>" + text + "</span>";
            break;
    }

    // Append the text to the log
    log.innerHTML += "<{{el}}>{{text}}</{{el}}>".replace("{{el}}", el).replace("{{text}}", text);
}
