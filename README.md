[![NuGet](https://img.shields.io/nuget/v/gd-sprest.svg)](https://www.nuget.org/packages/gd-sprest/)
[![Current Version](https://badge.fury.io/js/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Downloads](https://img.shields.io/npm/dm/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Total Downloads](https://img.shields.io/npm/dt/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/gd-sprest/Lobby)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/Dattabase)

The SharePoint REST Framework was designed for SharePoint 2013, but works in both SharePoint 2013/Online (Classic/Modern) pages. This framework is designed to remove the overhead required for SharePoint development, allowing the developer to focus on the client requirements.

<center><img alt="intellisense" src="https://gunjandatta.github.io/assets/images/intellisense.gif" style="max-height: 500px;" /></center>

### References

- [gd-sprest](https://gunjandatta.github.io/api) - An easy way to execute requests against the SharePoint 2013/Online REST api
- [gd-sprest-bs](https://gunjandatta.github.io/extras/bs) - Extends the [Bootstrap Framework](https://getbootstrap.com) with components designed for SharePoint 2013/Online.
- [gd-sprest-def](https://github.com/gunjandatta/sprest-def) - Generates TypeScript definition files from the $metadata SharePoint REST endpoint, for this library.
- [gd-sprest-react](https://gunjandatta.github.io/extras/react) - Extends the [Office Fabric React Framework](https://dev.office.com/fabric) with components designed for SharePoint 2013/Online.

### Core Library

The gd-sprest library is similar to the pnp-js-core, with the main difference being the ability to be used within the browser console window. This feature provides a "Powershell-Like" experience within the browser console window. This feature was designed for developers working in restricted SharePoint environments, or do not have access to the server or powershell access. Some additional benefits of the library are listed below:

- Designed to work in restricted SharePoint environments with limited access to the SharePoint Farm, Web App, Site Collection, Root Web, etc
- Helper functions designed to help create solutions in restricted SharePoint environments
- Ability to create reusable scripts/solutions
- Intellisense is available for JavaScript/TypeScript
- Ability to execute live requests from the browser console, helps to debug issues in production

### Bugs/Issues

[Click Here](https://github.com/gunjandatta/sprest/issues) to report any bugs, request any new features or if need help with code examples. Pull requests are welcomed for anyone interested in submitting them. Feel free to [email](mailto:github@dattabase.com) for other questions.

### Intellisense

The SharePoint REST API has a $metadata endpoint which contains the intellisense for its objects. This library's intellisense is generated from this data to ensure the latest functions/methods are made available for OnPremise and Online.

The intellisense for this library is included as part of the npm installation. It supports both JavaScript and TypeScript. The nuget installation includes the bundled definition file as part of the library.

### Modern Experience in SharePoint 2013

One of the key reasons of creating this library, was to give an easy way to develop using the modern web stack in SharePoint 2013 environments.

### User Adoption
Since these components are designed using same framework creating the new Office 365 modern experience, this gives the ability to introduce the new Office 365 experience within SharePoint 2013. This will be an important part for the SharePoint 2013 user adoption to the new modern experience. Most SharePoint 2010/2013 environments are undergoing upgrades to 2016, Hybrid 2016/O365, O365 and private O365-Gov environments.

### [Server-Side to Client-Side Conversion Guide](https://gunjandatta.github.io/dev/serverside-conversion-guide)

The execution method was designed to give a server-side like experience, similar to SharePoint 2010/2013 solutions. This will help convert existing server-side solutions to client-side solutions.

### Upgrade Path to SharePoint Framework [SPFx](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
The javascript, typescript, react/angular/react/etc solutions developed for SharePoint 2013 can easily be migrated/copied to a SharePoint Framework (SPFx) modern solution. A [blog series](http://dattabase.com/sharepoint-app-fabric-ui-react-part-3-3/) is available for creating an Add-In for SharePoint 2013/Online using the Office Fabric-UI React framework, including converting it to a SPFX WebPart.

#### SPFx Project
Refer to the [documentation](https://gunjandatta.github.io/dev/spfx) for steps on configuring this library in a SPFx project.

### Security
The REST api execute requests based on the user's permissions. There is no way to elevate privileges requests against the SharePoint REST.