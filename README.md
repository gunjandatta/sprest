# SharePoint 2013/Online REST Library
An easy way to develop against the SharePoint REST api.

*Please report issues. I am constantly updating/fixing/testing to make this library better.*

## Benefits:
* Generates the REST api url and formats it for app webs automatically.
* Chain property and methods for fewer requests to the server.
* Global flag for defaulting the execution against the host web, for easier development in an app web.
* PowerShell-Like experience in the browser console. (Synchronous Requests)
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
[Add/Remove Site Collection User Custom Actions](https://github.com/gunjandatta/sprest-sitecustomactions)

[Office Fabric UI Dashboard](https://github.com/gunjandatta/sprest-list)

## Documentation:
### Executing Requests from the App Web
A global flag is used to determine if an app web request should execute requests against the host web. The host web will default to the SPHostUrl query string value.
*Note - This value is false by default*
```
$REST.DefaultRequestToHostWebFl = true;
```

### Asynchronous/Synchronous requests
#### Execute Method
The 'execute' method determines if the request should be executed asynchronously or synchronously. The execute method takes the following input parameters:

* None - The request will be executed asynchronously.
* callback - The request will be executed asynchronously. The callback method will be executed after all requests have executed.
* syncFl - The request will be executed synchronously.

#### Next Method
The 'next' method allows you to create multiple requests against the base object. The next method takes the following input parameters:

* None - The request will be executed asynchronously.
* callback - The request will be executed asynchronously. The callback method will be executed after all requests have executed.
* waitFl - The request will wait for the previous requests to complete, befor executing the current request asynchronously.

To ensure intellisense for the 'next' method, you will need to specify the base object type:
```
// Get the current web
(new $REST.Web())
    // Get the root folders
    .Folders()
    // Execute the request
    .next<$REST.Types.IWeb>()
    // Get the 'Dev' list
    .Lists("Dev")
    // Get the list item collection
    .Items()
    // Execute the request
    .execute((folders:$REST.Types.IFolders, items:$REST.Types.IListItems) => {
        // Code executed after all requests have completed
    });
```

#### Examples
_**Asynchronous Request**_
```
// Get the current web
(new Web())
    // Execute the request
    .execute(function(web) {
        // Code to execute after the request completes
    });
```

_**Synchronous Request**_
```
var web = (new $REST.Web())
    // Set the flag to execute the request synchronously
    .execute(true);
```

_**Multiple Asynchronous Requests**_
```
// Get the current web
(new $REST.Web())
    // Get the Field Collection
    .Fields()
    // Query for all fields with the name of 'Title'
    .query({
        Filter: "Title eq 'Title'"
    })
    // Execute this request
    .next()
    // Get the 'Dev' List
    .Lists("Dev")
    // Get the items
    .Items()
    // Execute this request
    .next()
    // Get root folders
    .Folders()
    // Execute the request
    .execute(function(fields, items, folders) {
        // This code will execute after all requests have completed
    });
```

### Fewer Requests to the Server
Having the ability to chain the 'Properties', it allows for the developer to get the target object with one request to the server.

#### Example - Creating a List
##### Synchronously
```
// This will create the web object
var list = (new $REST.Web())
    // Get the list collection
    .Lists()
    // Create a list
    .add({
        BaseTemplate: 100,
        Description: "This is a test list.",
        Title: "Test"
    })
    // Execute the request
    .execute(true);
```

##### Asynchronously
```
// This will create the web object
(new $REST.Web())
    // Get the list collection
    .Lists()
    // Create the list
    .add({
        BaseTemplate: 100,
        Description: "This is a test list.",
        Title: "Test"
    })
    // Execute the request
    .execute(function(list) {
        // Additional code goes here
    });
```

#### Example - Query a List
```
// Get the list
var items = (new $REST.List("[List Name]"))
    // Query using OData
    .query({
        // OData properties - Refer to the OData section for additional details
    })
    // Execute the request
    .execute(true);

// Example of getting items by a CAML Query
(new $REST.List("Site Assets"))
    // Get the items by a CAML Query
    .getItemsByQuery("<Query><Where><Gt><FieldRef Name='ID' /><Value Type='Integer'>0</Value></Gt></Where></Query>")
    // Execute the request
    .execute(true);

// Example of getting items by a CAML View Query
(new $REST.List("Site Assets"))
    // Get the items by a CAML View Query
    .getItems("<View Scope='RecursiveAll'><Query><Where><Eq><FieldRef Name='FileLeafRef' /><Value Type='File'>sprest.js</Value></Eq></Where></Query></View>")
    // Execute the request
    .execute(true);
```

### Optional Input
All constructors take have the following optional parameters:
```
// The target information is optional
new Object([Object Specific Input Parameters], targetInfo);
```

#### Target Information
The target information consists of the following properties:
* bufferFl - Flag to determine if the output of the request is a file stream.
* callback - Required for asynchronous request. Executed after execution.
* data - Template used for passing the method parameters in the body of the request.
* defaultToWebFl - Flag to determine if the url should default to the current web url, site url otherwise.
* method - The request method type.
* endpoint - The api endpoint.
* url - The server relative site/web url to execute the request against.

### PowerShell-Like Experience
Since the library can be executed synchronously, the user can execute commands in the browser's console window and interact with the SharePoint site in a command-line interface.

*Note - The commands will execute under the security of the current user.*
*Note - SharePoint online may reject synchronous requests. It's better to use asynchronous requests.*

### OData Queries
Each collection will have a generic "query" method with the input of the OData query operations. The oData object consists of the following properties:
* Expand - A collection of strings representing the field names to expand.
* Filter - A string representing the filter to apply.
* OrderBy - A collection of strings representing the fields to order by.
* QueryString - A read-only property representing the query string value of the oData object.
* Select - A collection of strings representing the field names to select.
* Skip - The number of objects to skip.
* Top - The maximum number of objects to return.

#### Query List Collection
```
// Get the current web's list collection
var list = (new $REST.List())
    // Query for the 'Dev' list
    .query({
        Filter: ["Title eq 'Dev'"]
    })
    // Execute the request
    .execute(true);
```

#### Query List Item Collection
```
// Get the 'Dev' list
(new $REST.List("Dev"))
    // Get the item collection
    .Items()
    // Query for my items, expanding the created by information
    .query({
        Select: ["Title", "Author/Id", "Author/Title"],
        Expand: ["Author"],
        Filter: "AuthorId eq 11"
    })
    // Execute the request
    .execute(function(items) {
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
    .execute(true);
```

_**Web**_
```
// Get the 'Item' content type in the current web
var ct = (new $REST.Web())
    .ContentTypes()
    .getByName("Item")
    .execute(true);
```

### Content Types
_**List**_
```
// Get the content types in the 'Documents' library
var cts = (new $REST.List("documents"))
    .ContentTypes()
    .execute(true);
```

_**Web**_
```
// Get the content types in the current web
(new $REST.Web())
    .ContentTypes()
    .execute(function(cts) {
        // Additional code goes here
    })
```

### Field
_**List**_
```
var field = (new $REST.List("documents"))
    .Fields("Title")
    .execute(true);
```

_**Web**_
```
(new $REST.Web())
    .Fields("Title")
    .execute(function(field) {
        // Additional code goes here
    });
```

### Fields
_**List**_
```
var fields = (new $REST.List("documents"))
    .Fields()
    .execute(true);
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
(new $REST.List("Documents"))
    .RootFolder()
    .Folders("forms")
    .Files("EditForm.aspx")
    .execute(function(file) {
        // Additional code goes here
    })
```

#### Synchronously
```
var file = (new $REST.List("Documents"))
    .RootFolder()
    .Folders("forms")
    .Files("editform.aspx")
    execute(true);
```

_**Web**_
```
var file = (new $REST.Web())
    .getFileByServerRelativeUrl("/sites/dev/shared documents/forms/editform.aspx")
    .execute(true);
```

### Files
_**List**_
```
var files = (new $REST.List("documents"))
    .RootFolder()
    .Files()
    .execute(true);

// Get a specific folder's files
var folders = (new $REST.Web())
    .getFolderByServerRelativeUrl("/sites/dev/shared documents/forms")
    .Files()
    .execute(true);
```

_**Web**_
```
var files = (new $REST.Web())
    .Files()
    .execute(true);
```

### Folder
_**List**_
```
var folder = (new $REST.List("Documents"))
    .RootFolder("Forms")
    .execute(true)
```

_**Web**_
```
var folder = (new $REST.Web())
    .getFolderByServerRelativeUrl("/sites/dev/shared documents/forms")
    .execute(true);
```

### Folders
_**List**_
```
// Get the root folders of the library
var folders = (new $REST.List("documents"))
    .Folders()
    .execute(true);

// Get a specific folder's sub-folder
var folders = (new $REST.Web())
    .getFolderByServerRelativeUrl("/sites/dev/shared documents/forms")
    .Folders()
    .execute(true);
```

_**Web**_
```
var folders = (new $REST.Web())
    .Folders()
    .execute(true);
```

### List
```
var list = (new $REST.List("documents")).execute(true);
```

### Lists
```
var lists = (new $REST.Web())
    .Lists()
    .execute(true);
```

### List Item
```
var item = (new $REST.List("documents"))
    .Items(1)
    .execute(true);
```

### List Items
_**All Items**_
```
var items = (new $REST.List("documents"))
    .Items()
    .execute(true);
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
    .execute(true);
```

_**Web**_
```
var roleAssignments = (new $REST.Web())
    .RoleAssignments()
    .execute(true);
```

### Role Definitions
```
var roleDefinitions = (new $REST.List("documents"))
    .RoleDefinitions()
    .execute(true);
```

### Site
```
var site = (new $REST.Site()).execute();
```

### Site Groups
```
var siteGroups = (new $REST.Web())
    .SiteGroups()
    .execute(true);
```

### User Custom Actions
_**Site**_
```
var customActions = (new $REST.Site())
    .UserCustomActions()
    .execute(true);
```

_**Web**_
```
var customActions = (new $REST.Web())
    .UserCustomActions()
    .execute(true);
```

### Users
```
var users = (new $REST.Web())
    .Users()
    .execute(true);
```

### View
```
var view = (new $REST.List("dev"))
    .Views()
    .query({
        Filter: "Name eq 'All Items'"
    })
    .execute(true);
```

### Views
```
var views = (new $REST.List("documents"))
    .Lists()
    .execute(true);
```

### Web
```
var web = (new $REST.Web()).execute(true);
```
