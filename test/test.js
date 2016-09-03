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
    if(obj) {
        // Success
        if(obj[property] == value) {
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

function testAll() {
    // Clear the log
    document.querySelector("#log").innerHTML = "";

    // Run all the tests
    testContentType(true);
    testFile(true);
    testList(true);
}

function testContentType(runAllFl) {
    // Clear the log
    runAllFl ? null : log.innerHTML = "";

    // Log
    writeToLog("Content Type", LogType.Header);

    // Log
    writeToLog("Creating the content type", LogType.SubHeader);

    // Create the content type
    var web = new $REST.Web(null, false);
    ct = web.addContentType({
        Name: "SPRest" + SP.Guid.newGuid().toString()
    });

    // Test
    assert(ct, "create", "existsFl", true);

    // See if the content type exists
    if(ct.existsFl) {
        // Log
        writeToLog("Updating the content type", LogType.SubHeader);

        // Update the content type
        ct.update({
            Group: "Dev"
        });

        // Read the content types
        var cts = new $REST.ContentTypes();
        ct = cts.getById(ct.Id.StringValue);

        // Test
        assert(ct, "update", "Group", "Dev");

        // Log
        writeToLog("Deleting the content type", LogType.SubHeader);

        // Delete the content type
        ct = ct.delete();

        // Test
        assert(ct.d, "delete", "DeleteObject", null);
    }
    else {
        // Log
        writeToLog("Content Type was not created.", LogType.Error);
        writeToLog(ct.response, LogType.Error);
    }
}

function testFile(runAllFl) {
    // Clear the log
    runAllFl ? null : log.innerHTML = "";

    // Log
    writeToLog("File", LogType.Header);
}

function testList(runAllFl) {
    // Clear the log
    runAllFl ? null : log.innerHTML = "";

    // Log
    writeToLog("List", LogType.Header);

    // Log
    writeToLog("Creating the list", LogType.SubHeader);

    // Create the list
    var web = new $REST.Web(null, false);
    list = web.addList({
        BaseTemplate: 100,
        Description: "This is a test list.",
        Title: "SPRest" + SP.Guid.newGuid().toString()
    });

    // Test
    assert(list, "create", "existsFl", true);

    // See if the list exists
    if(list.existsFl) {
        // Log
        writeToLog("Updating the list", LogType.SubHeader);

        // Update the list
        list.update({
            Description: "Updated description"
        });

        // Read the updated list
        list = new $REST.List(list.Title);

        // Test
        assert(list, "update", "Description", "Updated description");

        // Test the list item
        testListItem(list);

        // Log
        writeToLog("Deleting the list", LogType.SubHeader);

        // Delete the list
        list = list.delete();

        // Test
        assert(list.d, "delete", "DeleteObject", null);
    }
    else {
        // Log
        writeToLog("List was not created.", LogType.Error);
        writeToLog(list.response, LogType.Error);
    }
}

function testListItem(list) {
    // Log
    writeToLog("List Item", LogType.Header);

    // Log
    writeToLog("Creating the list item", LogType.SubHeader);

    // Create the item
    item = list.addItem({
        Title: "New Item"
    });
    assert(item, "create", "existsFl", true);

    // Log
    writeToLog("Update the list item", LogType.SubHeader);

    // Update the item
    item.update({
        Title: "Updated Item"
    });

    // Read the updated item
    item = new $REST.ListItem(item.ID, list.Title);

    // Test
    assert(item, "update", "Title", "Updated Item");

    // Log
    writeToLog("Deleting the list item", LogType.SubHeader);

    // Delete the item
    item = item.delete();

    // Test
    assert(item.d, "delete", "DeleteObject", null);
}

function writeToLog(text, logType) {
    var el = "";

    // Ensure text exists
    if(typeof(text) !== "string" || text == "") { return; }

    // Set the element tag
    switch(logType) {
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
    switch(logType) {
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
