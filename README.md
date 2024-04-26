[![NuGet](https://img.shields.io/nuget/v/gd-sprest.svg)](https://www.nuget.org/packages/gd-sprest/)
[![Current Version](https://badge.fury.io/js/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Downloads](https://img.shields.io/npm/dm/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Total Downloads](https://img.shields.io/npm/dt/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/gd-sprest/Lobby)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/Dattabase)

The SharePoint REST Framework was designed for SharePoint 2013, but works in both SharePoint 2013/Online (Classic/Modern) pages. This framework is designed to remove the overhead required for SharePoint development, allowing the developer to focus on the client requirements.

<center><img alt="intellisense" src="assets/images/intellisense.gif" style="max-height: 500px;" /></center>

### References

- [gd-sprest](api) - An easy way to execute requests against the SharePoint 2013/Online REST API
- [gd-sprest-def](https://github.com/gunjandatta/sprest-def) - Generates TypeScript definition files from the $metadata SharePoint REST endpoint, for this library.
- [gd-sprest-bs](bs) - Extends the [Bootstrap Framework](https://getbootstrap.com) with components designed for SharePoint 2013/Online.

### Core Library

The gd-sprest library is similar to the pnp-js, with the main difference being the ability to be used within the browser console window. This feature provides a "Powershell-Like" experience within the browser console window. This feature was designed for developers working in restricted SharePoint environments, or do not have access to the server or powershell access. Some additional benefits of the library are listed below:

- Designed to work in restricted SharePoint environments with limited access to the SharePoint Farm, Web App, Site Collection, Root Web, etc
- Helper functions designed to help create solutions in restricted SharePoint environments
- Ability to create reusable scripts/solutions
- Intellisense is available for JavaScript/TypeScript
- Ability to execute live requests from the browser console, helps to debug issues in production
- Ability to use pure JavaScript if NodeJS is not available to be installed for TypeScript/WebPack/Babel

### Bugs/Issues/Missing Functionality

[Click Here](https://github.com/gunjandatta/sprest/issues) to report any bugs, or requests any missing endpoints or function. You can also use create issues for requesting a code example. Pull requests are welcomed for anyone interested in submitting them.

### Intellisense

The SharePoint REST API has a $metadata endpoint which contains the intellisense for its objects. This library's intellisense is generated from this data to ensure the latest functions/methods are made available for OnPremise and Online.

The intellisense for this library is included as part of the npm installation. It supports both JavaScript and TypeScript. The nuget installation includes the bundled definition file as part of the library.

### Modern Experience in SharePoint 2013

One of the key reasons of creating this library, was to give an easy way to develop using the modern web stack in SharePoint 2013 environments.

### SPFx Support

Follow the [documentation](https://gunjandatta.github.io/dev/spfx) for steps on configuring this library with SPFx projects.

### Security

The REST api execute requests based on the user's permissions. There is no way to elevate privileges requests against the SharePoint REST.