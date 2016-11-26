// Type definitions for gd-sprest
// Project: https://github.com/gunjandatta/sprest
// Definitions by: Gunjan Datta <https://github.com/gunjandatta/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/***************************************************************************************************
MIT License

Copyright (c) 2016 Dattabase, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************************************/

/***********************************************************************************************
 * REST
 **********************************************************************************************/
declare module $REST {
    /***********************************************************************************************
     * Global Variables
     **********************************************************************************************/

    /**
     * Flag to execute requests against the host web. This is relevent to the app web only, and defaults to the SPHostUrl querystring value.
     */
    let DefaultRequestToHostWebFl:boolean;

    /** Email */
    let Email:Types.IEmail;

    /** Helper Methods */
    let Helper:Types.IHelper;

    /** List */
    let List:Types.IList;

    /** People Manager */
    let PeopleManager:Types.IPeopleManager;

    /** Profile Loader */
    let ProfileLoader:Types.IProfileLoader;

    /** Search */
    let Search:Types.ISearch;
    
    /** Site */
    let Site:Types.ISite;

    /** User Profile */
    let UserProfile:Types.IBase;
    
    /** Web */
    let Web:Types.IWeb;
}
