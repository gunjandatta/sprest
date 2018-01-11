[![NuGet](https://img.shields.io/nuget/v/gd-sprest.svg)](https://www.nuget.org/packages/gd-sprest/)
[![Current Version](https://badge.fury.io/js/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Downloads](https://img.shields.io/npm/dm/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Total Downloads](https://img.shields.io/npm/dt/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/gd-sprest/Lobby)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/Dattabase)
# SharePoint Online/On-Premise REST Framework
## Overview:
The SharePoint REST Framework was designed for SharePoint 2013, but works in both SharePoint 2013/2016 and Office 365. This framework is designed to remove the overhead of SharePoint development, allowing the developer to focus on the client requirements. A reference to the associated github projects are listed below:

* [gd-sprest](https://github.com/gunjandatta/sprest) - An easy way to execute requests against the SharePoint 2013/Online REST api
* [gd-sprest-react](https://github.com/gunjandatta/sprest-react) - Extends the [Office Fabric React Framework](https://dev.office.com/fabric) with components designed for SharePoint 2013/Online.
* [gd-sprest-webpart](https://github.com/gunjandatta/sprest-webpart) - A basic example of creating a SharePoint 2013 modern webpart.
* [gd-sprest-webparts](https://github.com/gunjandatta/sprest-webparts) - SharePoint 2013 modern react webpart examples.
* [Wiki](https://github.com/gunjandatta/sprest/wiki) - Additional details of getting started with this framework.

### gd-sprest vs pnp-js-core
The gd-sprest library is similar to the pnp-js-core, with the main difference being the ability to be used within the browser console window. This feature provides a "Powershell-Like" experience within the browser console window. Some reasons to use this functionality:
* No access to the server farm
* Ability to create scripts which can be tested in staging before running aginst production
* For more efficient development of code, the developer has the ability to test code requests without having to deploy the solution
* Easy way to perform research and development by exploring the REST API with the available intellisense

### Bugs/Feature Requests/Help
[Click Here](https://github.com/gunjandatta/sprest/issues) to report any bugs, request any new features or if need help with code examples. Pull requests are welcomed for anyone interested in submitting them. Feel free to [email](mailto:github@dattabase.com) for other questions.

### Security
The REST api execute requests based on the user's permissions. There is no way to elevate priviledges requests against the SharePoint REST.

## Get Started
### Packages
#### NPM
Add the npm package to your project:
```
npm --save install gd-sprest
```
#### Yarn
Add the package from yarn:
```
yarn add gd-sprest
```
### Code Examples
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
request = $REST.Web("https://dev.sharepoint.com")
    .Lists().add({
        BaseTemplate: $REST.SPTypes.ListTemplateType.GenericList,
        Title: "New List"
    });

// Log the request information
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

## Development
### Add-In Model
The add-in model uses the app web for SharePoint Hosted Apps/Add-Ins. The provider hosted model would use CSOM, and not this library. This framework has built-in helper methods and a global flag for determining which web the request should execute against Host vs App/Add-In. The request will be automatically updated based on the target web, so there is no additional code required from the developer. This allows the developer to create a single source of code that works against both the SharePoint and App/Add-In webs.

### Available Libraries
```
import {
    $REST,
    ContextInfo,
    Helper,
    JSLink,
    List,
    Navigation,
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
    Utility,
    Web
} from "gd-sprest";
```

### Automation
The "SharePoint Configuration" class allows the developer to define configuration files for the SharePoint solution. This class contains built-in methods for execution (install, uninstall, etc), so there is no need to write additional code.

### Intellisense
One of the more important features of this framework is the intellisense. The classes have been setup to ensure the developer does not need to define the output type of the request. The "Types" and "SPTypes" classes can both be imported into the project. The "Types" class includes allows of the interfaces available in the library. The "SPTypes" class contains all of the enumerators in SharePoint. These interfaces can be used to provide intellisense for the custom variables.

### Modern Experience in SharePoint 2013
The gd-sprest-react library contains SharePoint components:
* Field
* Item Form
* Panel
* People Picker
* WebParts
These components use the office fabric ui, to provide an Office 365 experience within SharePoint 2013.
#### Upgrade Path to SharePoint Framework
The react components developed for SharePoint 2013 can be ported over to the SharePoint Framework's modern webpart.

### WebParts
The webpart component allows the developer to easialy assign react components to be rendered based on the page's state (Display/Edit). This component currently supports webpart, publishing and wiki pages. The following webpart components are available:

* Configuration - A react component to be used when the page is being edited, displaying an "Edit Configuration" button to render a panel for custom webpart properties.
    * List Configuration - Inherits the configuration webpart, displaying a web url and list dropdown.
    * Field Configuration - Inherits the list configuration webpart, adding a field picker.
    * Search Configuration - Inherits the field configuration webpart, filtering the field picker to field types supported by the search webpart.
* List - Allows the developer to define an OData or CAML query, and contains two methods:
    * onRenderContainer - Optional method with the query results passed as the input parameter.
    * onRenderItem - Requires method with the item result passed as the input parameter.
* Search - Inherits the list webpart, adding a search textbox. Based on the configuration fields, a mapper is created based on the item data. This feature will automatically filter the items displayed.
* Tabs - Displays all associated webparts within the same zone in tabs.

### Various Project Examples
_The [gd-sprest-webparts](https://github.com/gunjandatta/sprest-webparts) github project contains the latest code samples._
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
