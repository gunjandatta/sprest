# SharePoint 2013/Online REST Library
An easy way to develop against the SharePoint REST api.

*Please report issues. I am constantly updating/fixing/testing to make this library better.*

## Benefits:
* Generates the REST api url and formats it for app webs automatically.
* Global flag to execute requests on creation, to reduce the number of calls to the server.
* Parent property for easier development.
* PowerShell-Like experience in the browser console. (Synchronous Requests)
* Switch between asynchronous and synchronous requests by the object's property.
* Written in TypeScript with definition file for intellisense.

## Get Started:
### Node Package Manager (NPM)
```
npm install gd-sprest --save-dev
```

## TypeScript Definition (Intellisense)
I was finally able to put the definition file together, to ensure intellisense is available.
![Intellisense](https://raw.githubusercontent.com/gunjandatta/sprest/master/images/intellisense.png)

### Example Projects
[Bootstrap List](https://github.com/gunjandatta/sprest-list)
_Note - This is still in dev_

## Documentation:
### Executing Requests from the App Web
A global flag is used to determine if an app web request should execute requests against the host web. The host web will default to the SPHostUrl query string value.
*Note - This value is false by default*
```
$REST.DefaultRequestToHostWebFl = true;
```

### Execute on Creation
A global flag is used to determine if the request should be executed on creation. This option can save a request to the server.
*Note - This value is false by default.*
```
$REST.ExecuteOnCreationFl = true;
```

### Asynchronous/Synchronous requests
All objects have the following constructors [Object] and [Object]_Async.

#### Examples
_**Asynchronous Request**_
```
(new Web_Async(function(web) { ... }))
    .execute(function(obj) {
        // Code to execute after the request completes
    });
```

_**Synchronous Request**_
```
$REST.ExecuteOnCreationFl = true;
var web = new Web();
```

### Fewer Requests to the Server
Having the execute on creation boolean option, if set to false will construct the url of the base object without making a request to the server.

#### Example - Creating a List
##### Synchronously
```
// This will create the web object, but not execute the request.
var list = (new $REST.Web())
    // Create a list
    .web.addList({
        BaseTemplate: 100,
        Description: "This is a test list.",
        Title: "Test"
    })
    // Execute the request
    .execute();
```

##### Asynchronously
```
// This will create the web object, set the asynchronous flag and not execute a request to the server
(new $REST.Web_Async())
    // Create the list
    .addList({
        BaseTemplate: 100,
        Description: "This is a test list.",
        Title: "Test"
    })
    // This will execute after the list is created
    .execute(function(list) {
        // Additional code goes here
    });
```

#### Example - Query a List
```
// This will execute one request to the server to get list items
var items = (new $REST.List("[List Name]"))
    .query({
        // OData properties - Refer to the OData section for additional details
    })
    .execute();

// Example of getting items by a CAML Query
(new $REST.List("Site Assets"))
    .getItemsByQuery("<Query><Where><Gt><FieldRef Name='ID' /><Value Type='Integer'>0</Value></Gt></Where></Query>")
    .execute();

// Example of getting items by a CAML View Query
(new $REST.List("Site Assets"))
    .getItems("<View Scope='RecursiveAll'><Query><Where><Eq><FieldRef Name='FileLeafRef' /><Value Type='File'>sprest.js</Value></Eq></Where></Query></View>")
    .execute();
```

### Optional Input
All constructors take have the following optional parameters:
```
// The target information and execute request flags are optional
new Object([Object Specific Input Parameters], executeRequestFl);
new Object([Object Specific Input Parameters], targetInfo);
new Object([Object Specific Input Parameters], executeRequestFl, targetInfo);

// Asynchronous methods can take either a target information object, or the callback function
new Object_Async([Object Specific Input Parameters], executeRequestFl, targetInfo);
new Object_Async([Object Specific Input Parameters], function(obj) { ... }, executeRequestFl);
```

#### Target Information
The target information consists of the following properties:
* asyncFl - Flag to determine if the request should executes asynchronously or synchronously.
* bufferFl - Flag to determine if the output of the request is a file stream.
* callback - Required for asynchronous request. Executed after execution.
* data - Template used for passing the method parameters in the body of the request.
* defaultToWebFl - Flag to determine if the url should default to the current web url, site url otherwise.
* method - The request method type.
* endpoint - The api endpoint.
* url - The server relative site/web url to execute the request against.

#### Execute Request Flag
The executeRequestFl parameter will default to the global $REST.ExecuteOnCreationFl value.

### PowerShell-Like Experience
Since the library can be executed synchronously, the user can execute commands in the browser's console window and interact with the SharePoint site in a command-line interface.

*Note - The commands will execute under the security of the current user.*
*Note - SharePoint online may reject synchronous requests. It's better to use asynchronous requests.*

### OData Queries
Each collection will have a generic "query" method with the input of the OData query operations. The oData object consists of the following properties:
* Expand - A collection of strings representing the field names to expand.
* Filter - A collection of strings representing the filters to apply.
* OrderBy - A collection of strings representing the fields to order by.
* QueryString - A read-only property representing the query string value of the oData object.
* Select - A collection of strings representing the field names to select.
* Skip - The number of objects to skip.
* Top - The maximum number of objects to return.

#### Query List Collection
```
// Get the lists for the current web, but don't execute a request to the server
var list = new $REST.Lists(false)
    // Query for the 'Dev' list
    .query({
        Filter: ["Title eq 'Dev'"]
    });
```

#### Query List Item Collection
```
// Get the 'Dev' list, but don't execute a request to the server
(new $REST.ListItems_Async("Dev", false))
    // Query for my items, expanding the created by information
    .query({
        Select: ["Title", "Author/Id", "Author/Title"],
        Expand: ["Author"],
        Filter: ["AuthorId eq 11"]
    })
    // Execute code after the request is complete
    .execute(function(items:$REST.ListItems) {
        // Code goes here
    });
```

## Test:
I wrote a sample test file. To run it, upload the [test folder](https://github.com/gunjandatta/sprest/tree/master/test) contents to a SharePoint library and access to the "test.aspx" page. This will test the basic functionality of the library.

Refer to the [test script](https://github.com/gunjandatta/sprest/blob/master/test/test.js) file for detailed examples of using the library.

### File/Folder
![File/Folder Test](https://raw.githubusercontent.com/gunjandatta/sprest/master/images/test-file.png)

### List/Item
![List/Item Test](https://raw.githubusercontent.com/gunjandatta/sprest/master/images/test-list.png)

### Content Type/Field
![Content Type/Field Test](https://raw.githubusercontent.com/gunjandatta/sprest/master/images/test-field.png)

## Examples:
*Note - The examples below will execute one request to the server.*

### Content Type
_**List**_
```
// Get the 'Document' content type in the 'Documents' library
var ct = (new $REST.List("Document"))
    .ContentTypes()
    .getByName("Documents")
    .execute();
```

_**Web**_
```
// Get the 'Item' content type in the current web
var ct = (new $REST.Web())
    .ContentTypes()
    .getByName("Item")
    .execute();
```

### Content Types
_**List**_
```
// Get the content types in the 'Documents' library
var cts = (new $REST.List("documents"))
    .ContentTypes()
    .execute();
```

_**Web**_
```
// Get the content types in the current web
(new $REST.Web_Async())
    .ContentTypes()
    .execute(function(cts) {
        // Additional code goes here
    })
```

### Field
_**List**_
```
var field = (new $REST.List("documents"))
    .Fields()
    .query({
        Filter: ["InternalName eq 'Title'"]
    })
    .execute();
```

_**Web**_
```
(new $REST.Web())
    .Fields()
    .query({
        Filter: ["InternalName eq 'Title'"]
    })
    .execute(function(field) {
        // Additional code goes here
    });
```

### Fields
_**List**_
```
var fields = (new $REST.List("documents"))
    .Fields()
    .execute();
```

_**Web**_
```
(new $REST.Web())
    .Fields()
    .execute(function(fields) {
        // Additional code goes here
    });
```

### File
_**List**_
#### Asynchronously
```
(new $REST.List_Async("Documents"))
    .RootFolder()
    .getByUrl("Forms/EditForm.aspx")
    .execute(function(folder) {
        folder.Files()
            .getByUrl('EditForm.aspx')
            .execute(function(file) {
                // Additional code goes here
            });
    })
```

#### Synchronously
```
var file = (new $REST.List("Documents"))
    .RootFolder()
    .getByUrl("Forms/EditForm.aspx")
    .execute()
    .Files()
    .getByUrl('EditForm.aspx')
    .execute();
```

_**Web**_
```
var file = (new $REST.Web())
    .getFileByServerRelativeUrl("/sites/dev/shared documents/forms/EditForm.aspx")
    .execute();
```

### Files
_**List**_
```
var files = (new $REST.List("documents"))
    .RootFolder()
    .Files()
    .execute();
```

_**Web**_
```
(new $REST.Web())
    .Files()
    .execute();
```

### Folder
_**List**_
```
var folder = (new $REST.List("Documents"))
    .RootFolder()
    .getByUrl("Forms")
    .execute()
```

_**Web**_
```
var folder = (new $REST.Web())
    .getFolderByServerRelativeUrl("/sites/dev/shared documents/forms")
    .execute();
```

### Folders
_**List**_
```
var folders = (new $REST.List("documents"))
    .Folders()
    .execute();
```

_**Web**_
```
var folders = (new $REST.Web())
    .Folders()
    .execute();
```

### List
```
var list = (new $REST.List("documents"))
    .execute();
```

### Lists
```
var lists = (new $REST.Web())
    .Lists()
    .execute();
```

### List Item
```
var item = (new $REST.List("documents"))
    .Items()
    .getById(1)
    .execute();
```

### List Items
_**All Items**_
```
var items = (new $REST.List("documents"))
    .Items()
    .execute();
```

_**CAML Query**_
```
(new $REST.List("documents"))
    // Get the items
    .getItemsByQuery("<Query><Where><Gt><FieldRef Name='ID' /><Value Type='Integer'>0</Value></Gt></Where></Query>")
    // Execute after the request completes
    .execute(function(items)) {
        // Code goes here
    }
```

### Role Assignments
_**List**_
```
var roleAssignments = (new $REST.List("documents"))
    .RoleAssignments()
    .execute();
```

_**Web**_
```
var roleAssignments = (new $REST.Web())
    .RoleAssignments()
    .execute();
```

### Role Definitions
```
var roleDefinitions = (new $REST.List("documents"))
    .RoleDefinitions()
    .execute();
```

### Site
```
var site = (new $REST.Site()).execute();
```

### Site Groups
```
var siteGroups = (new $REST.Web())
    .SiteGroups()
    .execute();
```

### User Custom Actions
_**Site**_
```
var customActions = (new $REST.Site())
    .UserCustomActions()
    .execute();
```

_**Web**_
```
var customActions = (new $REST.Web())
    .UserCustomActions()
    .execute();
```

### Users
```
var users = (new $REST.Web())
    .Users()
    .execute();
```

### View
```
var view = (new $REST.List("dev"))
    .Views()
    .query({
        Filter: ["Name eq 'All Items']
    })
    .execute();
```

### Views
```
var views = (new $REST.List("documents"))
    .Lists()
    .execute();
```

### Web
```
var web = (new $REST.Web()).execute();
```
