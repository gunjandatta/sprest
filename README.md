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
* [gd-sprest-webpart](http://dattabase.com/sharepoint-2013-modern-webpart/) - A series of blog posts for creating a SharePoint 2013 modern webparts.
* [gd-sprest-webparts](https://github.com/gunjandatta/sprest-webparts) - SharePoint 2013 modern react webpart examples.
* [Wiki](https://github.com/gunjandatta/sprest/wiki) - Additional details of getting started with this framework.

### gd-sprest vs pnp-js-core
The gd-sprest library is similar to the pnp-js-core, with the main difference being the ability to be used within the browser console window. This feature provides a "Powershell-Like" experience within the browser console window. Some reasons to use this functionality:
* No powershell or admin access to the server farm
* Ability to create scripts which can be tested in staging before running aginst production
* The intellisense and ability to make live requests allows for easy debug issues in production
* Easy way to perform research and development by exploring the REST API with the available intellisense
* Designed to give work in very restricted SharePoint environments with limited access to the SharePoint Farm, Web App, Site Collection, Root Web, etc.

### Bugs/Feature Requests/Help
[Click Here](https://github.com/gunjandatta/sprest/issues) to report any bugs, request any new features or if need help with code examples. Pull requests are welcomed for anyone interested in submitting them. Feel free to [email](mailto:github@dattabase.com) for other questions.

### Features
The [Wiki](https://github.com/gunjandatta/sprest/wiki) gives a detailed overview of the framework.

#### [Caching](https://github.com/gunjandatta/sprest/wiki/Session-Storage)
The library has been designed to create the SharePoint object based on the response from the SharePoint REST API. This will allow us to easily stringify the request's target information and the SharePoint REST API's response to the local or storage session. A built-in stringify and parse method has been included in the library. Based on this design, SharePoint object will also contain all of its built-in methods.

#### Intellisense
One of the more important features of this framework is the intellisense. The classes have been setup to ensure the developer does not need to define the output type of the request. The "Types" and "SPTypes" classes can both be imported into the project. The "Types" class includes allows of the interfaces available in the library. The "SPTypes" class contains all of the enumerators in SharePoint. These interfaces can be used to provide intellisense for the custom variables.[Caching](https://github.com/gunjandatta/sprest/wiki/Session-Storage)

#### Helpers
The library contains various helpers to help with the various ways to develop against SharePoint 2013/Online
- [App/Add-In Web](https://github.com/gunjandatta/sprest/wiki/AddIn-Model) - Helper methods when developing within an app web
- Dependencies - Loads the required SharePoint scripts
- Field - Generates field schema xml
- [JSLink](https://github.com/gunjandatta/sprest/wiki/JSLink) - Helper class for creating JSLink solutions
- [ListForm](List-Form) - Helper class for creating custom list forms
- ListFormField - Helper class for custom list forms
- [Caching](https://github.com/gunjandatta/sprest/wiki/Session-Storage) - Based on the library's design to create the SharePoint object from the SharePoint REST API's response, the object can be recreated from data stored in the local/session storage.
- [Custom Fields](https://github.com/gunjandatta/sprest/wiki/Automation-Fields) - As part of the automation features for creating various SharePoint assets, there are helper classes for site and list fields. A helper for creating the Schema XML is available. The SharePoint Configuration intellisense has built in intellisense for creating fields, to handle advanced customizations.
- [[Taxonomy|Taxonomy]] - Helper class for getting terms from the managed metadata taxonomy term store
- [[WebPart|WebPart]] - Helper class for creating webpart solutions

#### Modern Experience in SharePoint 2013
One of the key reasons of creating this libray, was to give an easy way to develop using the modern web stack in SharePoint 2013 environments.

##### [Office Fabric UI React Framework](https://developer.microsoft.com/en-us/fabric#/components)
The gd-sprest-react library contains various components utilizing the [Office Fabric UI](https://dev.office.com/fabric) [React Framework](https://reactjs.org/).

##### User Adoption
Since these components are designed using same framework creating the new Office 365 modern experience, this gives the ability to introduce the new Office 365 experience within SharePoint 2013. This will be an important part for the SharePoint 2013 user adoption to the new modern experience. Most SharePoint 2010/2013 environments are undergoing upgrades to 2016, Hybrid 2016/O365, O365 and private O365-Gov environments.

##### [Automation of SharePoint Assets](https://github.com/gunjandatta/sprest/wiki/Automation)
The SharePoint Configuration automation feature allows the develoepr to easily create built-in scripts to install/uninstall SharePoint assets. This feature is designed to work in both SharePoint 2013 and Online.
- Content Types
   - JSLink
- Custom Actions
   - Web
   - Site
- Fields
   - JSLink
- Lists
   - Content Types
   - Fields
   - JSLink
   - Views
- WebParts

##### [SharePoint React Components](https://github.com/gunjandatta/sprest/wiki/React)
- [[Field|React-Field]]
- [[Item Form|React-Item-Form]]
- [[Panel|React-Panel]]
- [[People Picker|React-People-Picker]]
- [[WebPart|React-WebPart]]
    - [[Configuration|React-WebPart-Configuration]]
    - [[List |React-WebPart-List]]
    - [[Search |React-WebPart-Search]]
    - [[Tabs |React-WebPart-Tabs]]

##### Upgrade Path to SharePoint Framework [SPFx](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
The javascript, typescript, react/angular/react/etc solutions developed for SharePoint 2013 can easily be migrated/copied to a SharePoint Framework (SPFx) modern solution.

#### Security
The REST api execute requests based on the user's permissions. There is no way to elevate priviledges requests against the SharePoint REST.

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
