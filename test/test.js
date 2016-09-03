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
    writeToLog("Testing Content Type");
}

function testFile(runAllFl) {
    // Clear the log
    runAllFl ? null : log.innerHTML = "";

    // Log
    writeToLog("Testing File");
}

function testList(runAllFl) {
    // Clear the log
    runAllFl ? null : log.innerHTML = "";

    // Log
    writeToLog("Testing List", LogType.Header);

    // Log
    writeToLog("Creating the list", LogType.SubHeader);

    // See if the list already exists
    var list = new $REST.List("SPRest Test");
    if(list.existsFl) {
        // Skip this test
        writeToLog("Skip: List already exists.", LogType.Warning);
    }
    else {
        // Create the list
        var web = new $REST.Web(null, false);
        list = web.addList({
            BaseTemplate: 100,
            Description: "This is a test list.",
            Title: "SPRest Test"
        });
    }

    // Test
    assert(list, "create", "existsFl", true);

    if(list.existsFl) {
        writeToLog("Success: List created successfully.");

        // Log
        writeToLog("Creating the list item", LogType.SubHeader);

        // Log
        writeToLog("Read the list item", LogType.SubHeader);

        // Log
        writeToLog("Update the list item", LogType.SubHeader);

        // Log
        writeToLog("Deleting the list item", LogType.SubHeader);

        // Log
        writeToLog("Updating the list", LogType.SubHeader);

        // Log
        writeToLog("Deleting the list", LogType.SubHeader);

        // Delete the list
        list = list.delete();

        // Test
        assert(list, "delete", list.d.DeleteObject, null);
    }
    else {
        // Log
        writeToLog("Error: List was not created.", LogType.Error);
        writeToLog(list.response, LogType.Error);
    }
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
