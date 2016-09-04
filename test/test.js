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

function cbAll_Click(cb) {
    var isChecked = cb.checked;

    // Parse the check boxes
    var checkboxes = document.querySelectorAll("input[name='test']");
    for(var i=0; i<checkboxes.length; i++) {
        checkboxes[i].checked = isChecked;
    }
}

function runTests() {
    // Clear the log
    document.querySelector("#log").innerHTML = "";

    // Parse the check boxes
    var checkboxes = document.querySelectorAll("input[name='test']");
    for(var i=0; i<checkboxes.length; i++) {
        // Ensure it's checked
        if(checkboxes[i].checked) {
            // Run the selected test
            switch(checkboxes[i].value) {
                case "contenttype":
                    testContentType();
                break;
                case "file":
                    testFile();
                break;
                case "list":
                    testList();
                break;
            }
        }
    }
}

function testContentType() {
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

        // Test the field
        testField(ct);

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

function testField(ct) {
    // Log
    writeToLog("Field", LogType.Header);

    // Log
    writeToLog("Creating the field", LogType.SubHeader);

    // Create a field
    var web = new $REST.Web(null, false);
    var field = web.addFieldAsXml('<Field ID="{AA3AF8EA-2D8D-4345-8BD9-6017205F2212}" Name="SPRestText" StaticName="SPRestText" DisplayName="SPREST Test Text" Type="Text" />');

    // Test
    assert(field, "create field", "existsFl", true);

    // Log
    writeToLog("Deleting the field", LogType.SubHeader);

    // Delete the content type
    field = field.delete();

    // Test
    assert(field.d, "delete", "DeleteObject", null);
}

function testFile() {
    // Log
    writeToLog("File", LogType.Header);

    // Log
    writeToLog("Getting this file.", LogType.SubHeader);

    // Get this file
    var file = new $REST.File(_spPageContextInfo.serverRequestPath);

    // Test
    assert(file, "read file", "Exists", true);

    // Log
    writeToLog("Getting the parent folder", LogType.SubHeader);

    // Get the parent folder
    var folder = new $REST.Folder(file.ServerRelativeUrl.substr(0, file.ServerRelativeUrl.length - file.Name.length - 1));

    // Test
    assert(folder, "read folder", "Exists", true);

    // Log
    writeToLog("Create a folder", LogType.SubHeader);

    // Create a sub-folder
    var subFolder = folder.addSubFolder("Test");

    // Test
    assert(subFolder, "create folder", "Exists", true);

    // Log
    writeToLog("Copy a file", LogType.SubHeader);

    // Read the content types of this file
    var fileContent = file.content();

    // Test
    assert(fileContent, "read file buffer", "existsFl", true);

    // Note - The content will be a string, since I'm executing this synchronously.
    // We will need to convert the content to a buffer
    var buffer = new ArrayBuffer(fileContent.length * 2);
    var bufferView = new Uint16Array(buffer);
    for(var i=0; i<fileContent.length; i++) {
        bufView[i] = fileContent.charCodeAt(i);
    }

    // Copy the file
    file = subFolder.addFile("test.aspx", true, buffer);

    // Test
    assert(file, "copy file", "Exists", true);

    // Log
    writeToLog("Delete the file", LogType.SubHeader);

    // Delete the file
    file = file.delete();

    // Test
    assert(file.d, "delete file", "DeleteObject", null);

    // Log
    writeToLog("Delete the folder", LogType.SubHeader);

    // Delete the sub-folder
    subFolder = subFolder.delete();

    // Test
    assert(subFolder.d, "delete folder", "DeleteObject", null);
}

function testList() {
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

        // Test the list items
        testListItems(list);

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

function testListItems(list) {
    var items = [];
    var maxNumber = 5;

    // Log
    writeToLog("List Items", LogType.Header);

    // Log
    writeToLog("Creating the list items", LogType.SubHeader);

    // Create the items
    for(var i=1; i<=maxNumber; i++) {
        var title = "New Item " + i;

        // Create the item
        var item = list.addItem({
            Title: title
        });

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
        .replace(/{{Max}}/g, template.replace(/{{Type}}/g, "Leq").replace(/{{Value}}/g, items[items.length-1].ID));

    // Get the items
    items = new $REST.ListItems(list.Title, caml);

    // Test
    assert(items.results, "query list items", "length", maxNumber);
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
