# SharePoint Online/On-Premise REST Framework
An easy way to develop against the SharePoint 2013/Online REST API.
*Please report issues. I am constantly updating/fixing/testing to make this library better.*

[![Current Version](https://badge.fury.io/js/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Downloads](https://img.shields.io/npm/dm/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Total Downloads](https://img.shields.io/npm/dt/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)

## Benefits:
* Ability to control the order of asynchronous requests
* Ability to generate request urls for NodeJS applications
* Easy to execute requests to/from the App/Host web
* Full intellisense for the REST API
* PowerShell-Like experience in the browser console
* Create SharePoint solution assets through a configuration file
    * Content Types
    * Fields
    * Lists
    * User Custom Actions
    * WebParts

## Demos:
### VS Code - Intellisense
![VS Code](https://raw.githubusercontent.com/gunjandatta/sprest/master/images/demo-VSCode.gif)

### PowerShell-Like Experience in the Browser Console
![PowerShell](https://raw.githubusercontent.com/gunjandatta/sprest/master/images/demo-ConsoleWindow.gif)

### SharePoint Configuration - Easily create solution assets
![Automation](https://raw.githubusercontent.com/gunjandatta/sprest/master/images/demo-SPConfig.gif)

## Documentation:
[Click here](https://github.com/gunjandatta/sprest/wiki) to view the documentation for the framework.

### Example Projects
* [Add/Remove Site Collection User Custom Actions](https://github.com/gunjandatta/sprest-sitecustomactions)
* [Calendar Event Callout](https://github.com/gunjandatta/sp-event-callout)
* [Office Fabric BCS List](https://github.com/gunjandatta/sprest-bcs-list)
* [Office Fabric React](https://github.com/gunjandatta/sprest-fabric-react)
* [Office Fabric UI Dashboard](https://github.com/gunjandatta/sprest-list)
* [Query >5000 Items Example](https://github.com/gunjandatta/sprest-large-list)
* [SharePoint JS-Link Starter Project](https://github.com/gunjandatta/sp-jslink)
* [SharePoint React/Redux Starter Project](https://github.com/gunjandatta/sp-react-redux)
* [SharePoint Scripts Starter Project](https://github.com/gunjandatta/sp-scripts)
* [SharePoint React Components](https://github.com/gunjandatta/sprest-react)
* [WebPart Examples](https://github.com/gunjandatta/sprest-webparts)

## Get Started:
### Node Package Manager
```
npm install gd-sprest --save
```
#### JavaScript
```
var $REST = require("gd-sprest");

// Get the current web and lists
$REST.Web().query({
    Expand: ["Lists"]
}).execute(function(web) {
    // Parse the lists
    for(var i=0; i<web.Lists.results.length; i++) {
        var list = web.Lists.results[i];
    }
});
```
#### NodeJS
```
const $REST = require("gd-sprest);

// Create a new generic list.
request = $REST.Web("https://dev.sharepoint.com").Lists().add({ BaseTemplate: $REST.SPTypes.ListTemplateType.GenericList, Title: "New List" });
console.log(request.getInfo());

// Console Output:
// {
//     data: '{"BaseTemplate":100,"Title":"New List","__metadata":{"type":"SP.List"}}',
//     method: 'POST',
//     url: 'https://dev.sharepoint.com'
// }
```
#### TypeScript
```
import { List }

// Get the "Site Assets" library, fields and views
(new List("Site Assets"))
    // Query the list
    .query({
        Expand: ["Fields", "Views"]
    })
    // Execute the request
    .execute((list) => {
        // Parse the fields
        for(let i=0; i<list.Fields.results.length; i++) {
            let field = list.Fields.results[i];
        }

        // Parse the views
        for(let i=0; i<list.Views.results.length; i++) {
            let field = list.Views.results[i];
        }
    });
```
#### React
```
import {
    ContextInfo,
    Email,
    Helper,
    JSLink,
    List,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    RequestType,
    Search,
    Site,
    SocialFeed,
    SPTypes,
    Types,
    UserProfile,
    Web
} from "gd-sprest";
```

### In Browser Requests
1. Download the gd-sprest.min.js script from the "dist" folder
2. Upload the script file to a SharePoint document library
3. Reference the script in any page
4. Open the console window and use the $REST global variable