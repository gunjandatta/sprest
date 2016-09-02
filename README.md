# SharePoint 2013/Online REST Library
An easy way to develop against the SharePoint REST api.

## Benefits
* Constructors similar to the SSOM object model.
* Generates the REST api url and formats it for app webs automatically.
* Global flag to execute requests on creation, to reduce the number of calls to the server.
* Parent property for easier development.
* Switch between asynchronous and synchronous requests by the object's property.
* Written in **TypeScript** with definition files.

## Documentation
### Asynchronous/Synchronous requests
All objects have the following constructors [Object] and [Object]_Async.

#### Examples
**Asynchronous Request**
```
new Web_Async(
    {
        callback: function(web) { ... }
    }
);
```

**Synchronous Request**
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

## Examples
### Content Types
**List**
```
new $REST.ContentTypes("documents");
```

**Web**
```
new $REST.ContentTypes();
```

### Fields
**List**
```
new $REST.Fields("documents");
```

**Web**
```
new $REST.Fields();
```

### File
**List**
```
new $REST.File("sprest.js", "documents");
```

**Web**
```
new $REST.File("/sites/dev/shared documents/sprest.js");
```

### Files
**List**
```
new $REST.Files("documents");
```

**Web**
```
new $REST.Files();
```

### Folder
**List**
```
new $REST.Folder("sprest.js", "documents");
```

**Web**
```
new $REST.Folder("/sites/dev/shared documents/sprest.js");
```

### Folders
**List**
```
new $REST.Folders("documents");
```

**Web**
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
```
new $REST.ListItems("documents");
```

### Role Assignments
**List**
```
new $REST.RoleAssignments("documents");
```

**Web**
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
**Site**
```
new $REST.UserCustomActions();
```

**Web**
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
