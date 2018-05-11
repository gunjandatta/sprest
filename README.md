[![NuGet](https://img.shields.io/nuget/v/gd-sprest.svg)](https://www.nuget.org/packages/gd-sprest/)
[![Current Version](https://badge.fury.io/js/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Downloads](https://img.shields.io/npm/dm/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Total Downloads](https://img.shields.io/npm/dt/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/gd-sprest/Lobby)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/Dattabase)

## Overview:
The SharePoint REST Framework was designed for SharePoint 2013, but works in both SharePoint 2013/Online (Classic/Modern). This framework is designed to remove a lot of the overhead required for SharePoint development, allowing the developer to focus on the client requirements.

### References
- [SharePoint 2013 Modern WebPart](http://dattabase.com/sharepoint-2013-modern-webpart/) - A series of blog posts for creating SharePoint 2013 modern webparts using:
    - JavaScript (No Build)
    - TypeScript
    - React
    - VueJS
    - Angular
- [gd-sprest](https://github.com/gunjandatta/sprest) - An easy way to execute requests against the SharePoint 2013/Online REST api
- [gd-sprest-js](https://github.com/gunjandatta/sprest-js) - Extends the [Office Fabric JavaScript Framework](https://dev.office.com/fabric-js) with components designed for SharePoint 2013/Online.
- [gd-sprest-react](https://github.com/gunjandatta/sprest-react) - Extends the [Office Fabric React Framework](https://dev.office.com/fabric) with components designed for SharePoint 2013/Online.
- [gd-sprest-webparts](https://github.com/gunjandatta/sprest-webparts) - SharePoint 2013 modern react webpart examples.

### gd-sprest vs pnp-js-core
The gd-sprest library is similar to the pnp-js-core, with the main difference being the ability to be used within the browser console window. This feature provides a "Powershell-Like" experience within the browser console window. This feature was designed for developers working in restricted SharePoint environments, or do not have access to the server or powershell access. Some additional benefits of the library are listed below:
- Designed to work in restricted SharePoint environments with limited access to the SharePoint Farm, Web App, Site Collection, Root Web, etc.
- No powershell or admin access to the server
- Ability to create resusable scripts/solutions
- Intellisense has been designed to minimize the need to specify the variable types
- Ability to execute live requests from the browser console, helps to debug issues in production

### Bugs/Feature Requests/Help
[Click Here](https://github.com/gunjandatta/sprest/issues) to report any bugs, request any new features or if need help with code examples. Pull requests are welcomed for anyone interested in submitting them. Feel free to [email](mailto:github@dattabase.com) for other questions.

### Features
#### [Caching](/topics/caching)
The library has been designed to create the SharePoint object based on the response from the SharePoint REST API. This will allow us to easily stringify the request's target information and the SharePoint REST API's response to the local or storage session. A built-in stringify and parse method has been included in the library. Based on this design, SharePoint object will also contain all of its built-in methods.

#### Intellisense
One of the more important features of this framework is the intellisense. The classes have been setup to ensure the developer does not need to define the output type of the request. The "Types" and "SPTypes" classes can both be imported into the project. The "Types" class includes allows of the interfaces available in the library. The "SPTypes" class contains all of the enumerators in SharePoint. These interfaces can be used to provide intellisense for the custom variables.

#### [Server-Side to Client-Side Conversion Guide](serverside-conversion-guide)
The execution method was designed to give a server-side like experience, similar to SharePoint 2010/2013 solutions. This will help convert existing server-side solutions to client-side solutions.

#### [Helpers](/helpers)
The library contains various helpers to help with the various ways to develop against SharePoint 2013/Online

#### Modern Experience in SharePoint 2013
One of the key reasons of creating this libray, was to give an easy way to develop using the modern web stack in SharePoint 2013 environments.

##### [Office Fabric UI React Framework](https://developer.microsoft.com/en-us/fabric#/components)
The gd-sprest-react library contains various components utilizing the [Office Fabric UI](https://dev.office.com/fabric) [React Framework](https://reactjs.org/).

##### User Adoption
Since these components are designed using same framework creating the new Office 365 modern experience, this gives the ability to introduce the new Office 365 experience within SharePoint 2013. This will be an important part for the SharePoint 2013 user adoption to the new modern experience. Most SharePoint 2010/2013 environments are undergoing upgrades to 2016, Hybrid 2016/O365, O365 and private O365-Gov environments.

##### [Automation of SharePoint Assets](/topics/automation)
The SharePoint Configuration automation feature allows the develoepr to easily create built-in scripts to install/uninstall SharePoint assets. This feature is designed to work in both SharePoint 2013 and Online.

##### [SharePoint React Components](https://github.com/gunjandatta/sprest/wiki/React)
The [gd-sprest-react](https://github.com/gunjandatta/sprest-react) library contains various components designed to work in SharePoint 2013/Online.

##### Upgrade Path to SharePoint Framework [SPFx](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
The javascript, typescript, react/angular/react/etc solutions developed for SharePoint 2013 can easily be migrated/copied to a SharePoint Framework (SPFx) modern solution. A [blog series](http://dattabase.com/sharepoint-app-fabric-ui-react-part-3-3/) is available for creating an Add-In for SharePoint 2013/Online using the Office Fabric-UI React framework, including converting it to a SPFX WebPart.

##### SPFX Project
Refer to the [documentation](https://gunjandatta.github.io/development/spfx) for steps on configuring this library in a SPFX project.

#### Security
The REST api execute requests based on the user's permissions. There is no way to elevate priviledges requests against the SharePoint REST.
