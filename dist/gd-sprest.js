/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
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

	import * as Types from "./definitions";
	export { Types };
	import { ContextInfo, Email, Helper, List, PeopleManager, PeoplePicker, ProfileLoader, Search, Site, SocialFeed, UserProfile, Web } from "./lib";
	export { ContextInfo, Email, Helper, List, PeopleManager, PeoplePicker, ProfileLoader, Search, Site, SocialFeed, UserProfile, Web };

	/**
	 * SharePoint REST Library
	 */
	export const $REST = {
	    ContextInfo,
	    DefaultRequestToHostFl: false,
	    Email,
	    Helper,
	    List,
	    PeopleManager,
	    PeoplePicker,
	    ProfileLoader,
	    Search,
	    Site,
	    SocialFeed,
	    UserProfile,
	    Web
	};

	// Make the library globally available
	window["$REST"] = $REST;

/***/ }
/******/ ]);