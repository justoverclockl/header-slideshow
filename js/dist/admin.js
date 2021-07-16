module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/*
 * This file is part of justoverclock/custom-header.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('justoverclock/header-slideshow', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionData["for"]('justoverclock-header-slideshow').registerSetting({
    setting: 'justoverclock-header-slideshow.TitleSlide1',
    name: 'TitleSlide1',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TitleSlide1'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TitleSlide1-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.TextSlide1',
    name: 'TextSlide1',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TextSlide1'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TextSlide1-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.BtnSlide1',
    name: 'BtnSlide1',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.BtnSlide1'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.BtnSlide1-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.LinkOne',
    name: 'LinkOne',
    type: 'URL',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.LinkOne'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.LinkOne-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.ImageOne',
    name: 'ImageOne',
    type: 'URL',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.ImageOne'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.ImageOne-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.TitleSlide2',
    name: 'TitleSlide2',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TitleSlide2'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TitleSlide2-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.TextSlide2',
    name: 'TextSlide2',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TextSlide2'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TextSlide2-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.BtnSlide2',
    name: 'BtnSlide2',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.BtnSlide2'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.BtnSlide2-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.LinkTwo',
    name: 'LinkTwo',
    type: 'URL',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.LinkTwo'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.LinkTwo-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.ImageTwo',
    name: 'ImageTwo',
    type: 'URL',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.ImageTwo'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.ImageTwo-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.TitleSlide3',
    name: 'TitleSlide3',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TitleSlide3'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TitleSlide3-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.TextSlide3',
    name: 'TextSlide3',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TextSlide3'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.TextSlide3-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.BtnSlide3',
    name: 'BtnSlide3',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.BtnSlide3'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.BtnSlide3-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.LinkThree',
    name: 'LinkThree',
    type: 'URL',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.LinkThree'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.LinkThree-help')
  }).registerSetting({
    setting: 'justoverclock-header-slideshow.ImageThree',
    name: 'ImageThree',
    type: 'URL',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.ImageThree'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('header-slideshow.admin.ImageThree-help')
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map