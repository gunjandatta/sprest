# SharePoint 2013/2016/Online REST Library
An easy way to develop against the SharePoint REST api.

*Note - This library is still in development.*

## Benefits:
* Constructors similar to the SSOM object model.
* Generates the REST api url and formats it for app webs automatically.
* Global flag to execute requests on creation, to reduce the number of calls to the server.
* Parent property for easier development.
* PowerShell-Like experience in the browser console.
* Switch between asynchronous and synchronous requests by the object's property.
* Written in **TypeScript** with definition files.

## Documentation:
### Asynchronous/Synchronous requests
All objects have the following constructors [Object] and [Object]_Async.

#### Examples
*Note - The examples below will execute one request to the server.*

_**Asynchronous Request**_
```
new Web_Async(
    {
        callback: function(web) { ... }
    }
);
```

_**Synchronous Request**_
```
var web = new Web();
```

### Execute on Creation
A global flag is used to determine if the request should be executed on creation. This option can save a request to the server.
*Note - This value is true by default.*
```
$REST.ExecuteOnCreationFl = false;
```

### Optional Input
All constructors take have the following optional parameters:
```
new Object([Object Specific Input Parameters], targetInfo, executeRequestFl)
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

## Examples:
### Content Types
_**List**_
```
new $REST.ContentTypes("documents");
```

_**Web**_
```
new $REST.ContentTypes();
```

### Fields
_**List**_
```
new $REST.Fields("documents");
```

_**Web**_
```
new $REST.Fields();
```

### File
_**List**_
```
new $REST.File("sprest.js", "documents");
```

_**Web**_
```
new $REST.File("/sites/dev/shared documents/sprest.js");
```

### Files
_**List**_
```
new $REST.Files("documents");
```

_**Web**_
```
new $REST.Files();
```

### Folder
_**List**_
```
new $REST.Folder("sprest.js", "documents");
```

_**Web**_
```
new $REST.Folder("/sites/dev/shared documents/sprest.js");
```

### Folders
_**List**_
```
new $REST.Folders("documents");
```

_**Web**_
```
new $REST.Folders();
```

### List
```
new $REST.List("documents");
```

### Lists
```
new $REST.Lists();
```

### List Item
```
new $REST.ListItems(1, "documents");
```

### List Items
_**All Items**_
```
new $REST.ListItems("documents");
```

_**CAML Query**_
```
new $REST.ListItems("documents", "<Query><Where><Gt><FieldRef Name='ID' /><Value Type='Integer'>0</Value></Gt></Where></Query>");
```

### Role Assignments
_**List**_
```
new $REST.RoleAssignments("documents");
```

_**Web**_
```
new $REST.RoleAssignments();
```

### Role Definitions
```
new $REST.RoleDefinitions();
```

### Site
```
new $REST.Site();
```

### Site Groups
```
new $REST.SiteGroups();
```

### User Custom Actions
_**Site**_
```
new $REST.UserCustomActions();
```

_**Web**_
```
new $REST.UserCustomActions(true);
```

### Users
```
new $REST.Users();
```

### View
```
new $REST.View("all items", "documents");
```

### Views
```
new $REST.Views("documents");
```

### Web
```
new $REST.Web();
```
