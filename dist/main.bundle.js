/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/light.svg */ "./src/assets/light.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/dark.svg */ "./src/assets/dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n  font-family: \"Domine\", serif;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --bg-color: #222020;\n  --project-bg-color: #2e2b2b;\n  --head-color: #ffffff;\n  --text-color: #dedede;\n  --toggle-link: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n}\n\n:root.light {\n  --bg-color: #ffffff;\n  --project-bg-color: #f2f2f2;\n  --head-color: #000000;\n  --text-color: #000;\n  --toggle-link: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  background-color: var(--bg-color);\n}\n\nbody {\n  margin: 0 15vw;\n  text-align: center;\n}\n\nnav {\n  /* position: sticky; */\n  top: 0;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  height: 7vh;\n  width: 100%;\n  background-color: var(--bg-color);\n  font-weight: bolder;\n}\n\na {\n  color: var(--text-color);\n  text-decoration: none;\n}\n\na:visited {\n  color: var(--text-color);\n  /* text-decoration-color: var(--text-color); */\n}\n\nnav button {\n  margin-left: auto;\n  background: var(--toggle-link);\n  border: none;\n  height: 20px;\n  width: 20px;\n}\n\nh1,\nh2,\np {\n  color: var(--text-color);\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.section-container {\n  scroll-margin-top: 9vh;\n  min-height: 80vh;\n}\n\n.section-container > h1 {\n  font-size: 3rem;\n}\n\n#home {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#home > h2 {\n  padding-left: 10vw;\n  margin-bottom: 5px;\n  text-align: start;\n}\n\n.highlight-container,\n.highlight {\n  position: relative;\n}\n\n.highlight-container {\n  display: inline-block;\n}\n\n.highlight-container:before {\n  content: \" \";\n  display: block;\n  height: 90%;\n  width: 100%;\n  margin-left: -3px;\n  margin-right: -3px;\n  position: absolute;\n  top: -1px;\n  left: 4px;\n  border-radius: 20% 25% 20% 24%;\n  padding: 10px 3px 3px 10px;\n}\n\n.highlight-about:before {\n  background: #1f62c097;\n  transform: rotate(3deg);\n}\n\n.highlight-work:before {\n  background: #c13636a7;\n  transform: rotate(-3deg);\n}\n\n#projects {\n  margin-bottom: 15vh;\n}\n\n#projects-container {\n  width: 100%;\n  display: grid;\n  resize: both;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n}\n\n.project-card {\n  padding: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid rgb(25, 25, 25);\n  border-radius: 10px;\n  background-color: var(--project-bg-color);\n}\n\n.project-card > * {\n  text-align: center;\n  margin: 0;\n}\n.project-thumbnail {\n  /* aspect-ratio: 16/9; */\n  aspect-ratio: 4/3;\n  width: 100%;\n  height: 150px;\n  margin-bottom: 10px;\n}\n\n.thumbnail-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.project-description {\n  margin: 10px 0;\n}\n.icon-wrapper {\n  margin-top: auto;\n  display: flex;\n  gap: 10px;\n}\n.git-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\nsvg {\n  fill: var(--text-color);\n}\n\n.live-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\n.skills-container {\n  margin-top: 10vh;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.skill-logo {\n  height: 120px;\n  width: 120px;\n}\n\n.about-me-text {\n  font-size: 1.3rem;\n  margin-bottom: 2vh;\n}\n\n#go-to-top {\n  bottom: 0;\n  right: 0;\n  margin-right: 2vw;\n  margin-bottom: 2vw;\n  position: fixed;\n  height: 4vh;\n  width: 4vh;\n  opacity: 0.2;\n  border: 1px solid var(--text-color);\n  border-radius: 10px;\n}\n\nfooter {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(30px, 50px));\n  height: 5vh;\n\n  padding-top: 5vw;\n  box-sizing: unset;\n  gap: 20px;\n  justify-content: center;\n}\n\n.footer-links {\n  height: 50px;\n  width: auto;\n  display: inline;\n}\n\n@media (min-width: 750px) {\n  .project-thumbnail {\n    height: 250px;\n  }\n\n  footer {\n    padding: 3vw 0 1vw 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n  font-family: \"Domine\", serif;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --bg-color: #222020;\n  --project-bg-color: #2e2b2b;\n  --head-color: #ffffff;\n  --text-color: #dedede;\n  --toggle-link: url(./assets/light.svg) no-repeat;\n}\n\n:root.light {\n  --bg-color: #ffffff;\n  --project-bg-color: #f2f2f2;\n  --head-color: #000000;\n  --text-color: #000;\n  --toggle-link: url(./assets/dark.svg) no-repeat;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  background-color: var(--bg-color);\n}\n\nbody {\n  margin: 0 15vw;\n  text-align: center;\n}\n\nnav {\n  /* position: sticky; */\n  top: 0;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  height: 7vh;\n  width: 100%;\n  background-color: var(--bg-color);\n  font-weight: bolder;\n}\n\na {\n  color: var(--text-color);\n  text-decoration: none;\n}\n\na:visited {\n  color: var(--text-color);\n  /* text-decoration-color: var(--text-color); */\n}\n\nnav button {\n  margin-left: auto;\n  background: var(--toggle-link);\n  border: none;\n  height: 20px;\n  width: 20px;\n}\n\nh1,\nh2,\np {\n  color: var(--text-color);\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.section-container {\n  scroll-margin-top: 9vh;\n  min-height: 80vh;\n}\n\n.section-container > h1 {\n  font-size: 3rem;\n}\n\n#home {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#home > h2 {\n  padding-left: 10vw;\n  margin-bottom: 5px;\n  text-align: start;\n}\n\n.highlight-container,\n.highlight {\n  position: relative;\n}\n\n.highlight-container {\n  display: inline-block;\n}\n\n.highlight-container:before {\n  content: \" \";\n  display: block;\n  height: 90%;\n  width: 100%;\n  margin-left: -3px;\n  margin-right: -3px;\n  position: absolute;\n  top: -1px;\n  left: 4px;\n  border-radius: 20% 25% 20% 24%;\n  padding: 10px 3px 3px 10px;\n}\n\n.highlight-about:before {\n  background: #1f62c097;\n  transform: rotate(3deg);\n}\n\n.highlight-work:before {\n  background: #c13636a7;\n  transform: rotate(-3deg);\n}\n\n#projects {\n  margin-bottom: 15vh;\n}\n\n#projects-container {\n  width: 100%;\n  display: grid;\n  resize: both;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n}\n\n.project-card {\n  padding: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid rgb(25, 25, 25);\n  border-radius: 10px;\n  background-color: var(--project-bg-color);\n}\n\n.project-card > * {\n  text-align: center;\n  margin: 0;\n}\n.project-thumbnail {\n  /* aspect-ratio: 16/9; */\n  aspect-ratio: 4/3;\n  width: 100%;\n  height: 150px;\n  margin-bottom: 10px;\n}\n\n.thumbnail-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.project-description {\n  margin: 10px 0;\n}\n.icon-wrapper {\n  margin-top: auto;\n  display: flex;\n  gap: 10px;\n}\n.git-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\nsvg {\n  fill: var(--text-color);\n}\n\n.live-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\n.skills-container {\n  margin-top: 10vh;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.skill-logo {\n  height: 120px;\n  width: 120px;\n}\n\n.about-me-text {\n  font-size: 1.3rem;\n  margin-bottom: 2vh;\n}\n\n#go-to-top {\n  bottom: 0;\n  right: 0;\n  margin-right: 2vw;\n  margin-bottom: 2vw;\n  position: fixed;\n  height: 4vh;\n  width: 4vh;\n  opacity: 0.2;\n  border: 1px solid var(--text-color);\n  border-radius: 10px;\n}\n\nfooter {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(30px, 50px));\n  height: 5vh;\n\n  padding-top: 5vw;\n  box-sizing: unset;\n  gap: 20px;\n  justify-content: center;\n}\n\n.footer-links {\n  height: 50px;\n  width: auto;\n  display: inline;\n}\n\n@media (min-width: 750px) {\n  .project-thumbnail {\n    height: 250px;\n  }\n\n  footer {\n    padding: 3vw 0 1vw 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**************************************************************!*\
  !*** ./src/assets/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./calculator.png": "./src/assets/calculator.png",
	"./dark.svg": "./src/assets/dark.svg",
	"./github.svg": "./src/assets/github.svg",
	"./library.png": "./src/assets/library.png",
	"./light.svg": "./src/assets/light.svg",
	"./restaurant.png": "./src/assets/restaurant.png",
	"./thumbnail.png": "./src/assets/thumbnail.png",
	"./tictactoe.png": "./src/assets/tictactoe.png",
	"./todo.png": "./src/assets/todo.png",
	"./weather.png": "./src/assets/weather.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/modules/darkmode.js":
/*!*********************************!*\
  !*** ./src/modules/darkmode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleDarkClass": () => (/* binding */ toggleDarkClass),
/* harmony export */   "toggleLocalStorageItem": () => (/* binding */ toggleLocalStorageItem)
/* harmony export */ });
function isDark() {
  return localStorage.getItem("dark-mode");
}

function toggleDarkClass() {
  const root = document.querySelector(":root");
  root.classList.toggle("light");
}

function toggleLocalStorageItem() {
  if (isDark()) {
    localStorage.removeItem("dark-mode");
  } else {
    localStorage.setItem("dark-mode", "set");
  }
}




/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard)
/* harmony export */ });
/* harmony import */ var _projects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.json */ "./src/modules/projects.json");


console.log(_projects_json__WEBPACK_IMPORTED_MODULE_0__);

function importAll(r) {
  let assets = {};
  r.keys().map((item, index) => {
    assets[item.replace("./", "")] = r(item);
  });
  return assets;
}

const images = importAll(
  __webpack_require__("./src/assets sync \\.(png%7Cjpe?g%7Csvg)$")
);

const projectsContainer = document.querySelector("#projects-container");

function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const projectThumbnail = document.createElement("div");
  projectThumbnail.classList.add("project-thumbnail");

  const thumbnailImage = document.createElement("img");
  thumbnailImage.classList.add("thumbnail-image");
  thumbnailImage.src = images[project.thumbnail];

  const projectTitle = document.createElement("h2");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = project.title;

  const projectDescription = document.createElement("p");
  projectDescription.classList.add("project-description");
  projectDescription.textContent = project.description;

  const iconWrapper = document.createElement("div");
  iconWrapper.classList.add("icon-wrapper");

  const gitWrapper = document.createElement("div");
  gitWrapper.classList.add("git-wrapper");
  const gitLink = document.createElement("a");
  gitLink.href = project.code;
  gitLink.setAttribute("target", "_blank");
  const gitIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  gitIcon.classList.add("git-icon", "icon");
  gitIcon.setAttribute("viewBox", "0 0 100 100");
  gitIcon.innerHTML =
    '<path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>';

  const liveWrapper = document.createElement("div");
  liveWrapper.classList.add("live-wrapper");
  const liveLink = document.createElement("a");
  liveLink.href = project.live;
  liveLink.setAttribute("target", "_blank");
  const liveIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  liveIcon.classList.add("live-icon", "icon");
  liveIcon.setAttribute("viewBox", "0 0 21 21");
  liveIcon.innerHTML = `<path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
  `;

  gitLink.appendChild(gitIcon);
  liveLink.appendChild(liveIcon);

  gitWrapper.appendChild(gitLink);
  liveWrapper.appendChild(liveLink);

  iconWrapper.appendChild(gitWrapper);
  iconWrapper.appendChild(liveWrapper);

  projectThumbnail.appendChild(thumbnailImage);
  projectCard.appendChild(projectThumbnail);
  projectCard.appendChild(projectTitle);
  projectCard.appendChild(projectDescription);
  projectCard.appendChild(iconWrapper);

  projectsContainer.appendChild(projectCard);
}

_projects_json__WEBPACK_IMPORTED_MODULE_0__.forEach((project) => createProjectCard(project));




/***/ }),

/***/ "./src/assets/calculator.png":
/*!***********************************!*\
  !*** ./src/assets/calculator.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eb268038ca922a8fa7e2.png";

/***/ }),

/***/ "./src/assets/dark.svg":
/*!*****************************!*\
  !*** ./src/assets/dark.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a99159b3a6770ec3ac29.svg";

/***/ }),

/***/ "./src/assets/github.svg":
/*!*******************************!*\
  !*** ./src/assets/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dbce52cb82c46fc75ed9.svg";

/***/ }),

/***/ "./src/assets/library.png":
/*!********************************!*\
  !*** ./src/assets/library.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60de200af0f7a894e738.png";

/***/ }),

/***/ "./src/assets/light.svg":
/*!******************************!*\
  !*** ./src/assets/light.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "42aaff4eeac784af3bb2.svg";

/***/ }),

/***/ "./src/assets/restaurant.png":
/*!***********************************!*\
  !*** ./src/assets/restaurant.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5dfd9adf22558441ea69.png";

/***/ }),

/***/ "./src/assets/thumbnail.png":
/*!**********************************!*\
  !*** ./src/assets/thumbnail.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f424f3d38f0b290736d1.png";

/***/ }),

/***/ "./src/assets/tictactoe.png":
/*!**********************************!*\
  !*** ./src/assets/tictactoe.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d6c5ea4abbb5284405a7.png";

/***/ }),

/***/ "./src/assets/todo.png":
/*!*****************************!*\
  !*** ./src/assets/todo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "990a57c4b41d3cdf54be.png";

/***/ }),

/***/ "./src/assets/weather.png":
/*!********************************!*\
  !*** ./src/assets/weather.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1f716a48abf159dd2788.png";

/***/ }),

/***/ "./src/modules/projects.json":
/*!***********************************!*\
  !*** ./src/modules/projects.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"thumbnail":"weather.png","title":"Weather App","description":"This project was used to practice working with APIs, and async & await.","code":"https://github.com/samsonc89/weatherApp","live":"https://samsonc89.github.io/weatherApp/"},{"thumbnail":"todo.png","title":"To Do List","description":"This project was used to practice OOP principles.","code":"https://github.com/samsonc89/ToDo","live":"https://samsonc89.github.io/ToDo/"},{"thumbnail":"restaurant.png","title":"Restaurant Page","description":"This project was used to learn about webpack and the use of modules.","code":"https://github.com/samsonc89/restaurant-page/tree/main","live":"https://samsonc89.github.io/restaurant-page/"},{"thumbnail":"library.png","title":"Library","description":"This project was used to practice working with Javascript classes and factory functions.","code":"https://github.com/samsonc89/library","live":"https://samsonc89.github.io/library/"},{"thumbnail":"tictactoe.png","title":"Tic-Tac-Toe","description":"Simple Tic-Tac-Toe game.","code":"https://github.com/samsonc89/tic-tac-toe","live":"https://samsonc89.github.io/tic-tac-toe/"},{"thumbnail":"calculator.png","title":"Calculator","description":"A simple calculator webApp.","code":"https://github.com/samsonc89/calculator","live":"https://samsonc89.github.io/calculator/"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projects */ "./src/modules/projects.js");
/* harmony import */ var _modules_darkmode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/darkmode */ "./src/modules/darkmode.js");






const toggleBtn = document.querySelector("#toggle-btn");
const scrollToTop = document.querySelector("#go-to-top");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  (0,_modules_darkmode__WEBPACK_IMPORTED_MODULE_2__.toggleLocalStorageItem)();
  (0,_modules_darkmode__WEBPACK_IMPORTED_MODULE_2__.toggleDarkClass)();
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsTUFBTSxNQUFNLEtBQUssUUFBUSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFN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Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjs7QUFFNEM7O0FBRVk7O0FBRTdFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUseUVBQXNCO0FBQ3hCLEVBQUUsa0VBQWU7QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby8uL3NyYy9hc3NldHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby8uL3NyYy9tb2R1bGVzL2Rhcmttb2RlLmpzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2xpZ2h0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2Rhcmsuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLypcXG4gIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpblxcbiovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIkRvbWluZVxcXCIsIHNlcmlmO1xcbn1cXG4vKlxcbiAgMy4gQWxsb3cgcGVyY2VudGFnZS1iYXNlZCBoZWlnaHRzIGluIHRoZSBhcHBsaWNhdGlvblxcbiovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLypcXG4gIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gIDQuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICA1LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuKi9cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLypcXG4gIDYuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4qL1xcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi8qXFxuICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG4vKlxcbiAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4qL1xcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuLypcXG4gIDkuIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxcbiovXFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3I6ICMyMjIwMjA7XFxuICAtLXByb2plY3QtYmctY29sb3I6ICMyZTJiMmI7XFxuICAtLWhlYWQtY29sb3I6ICNmZmZmZmY7XFxuICAtLXRleHQtY29sb3I6ICNkZWRlZGU7XFxuICAtLXRvZ2dsZS1saW5rOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXG59XFxuXFxuOnJvb3QubGlnaHQge1xcbiAgLS1iZy1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tcHJvamVjdC1iZy1jb2xvcjogI2YyZjJmMjtcXG4gIC0taGVhZC1jb2xvcjogIzAwMDAwMDtcXG4gIC0tdGV4dC1jb2xvcjogIzAwMDtcXG4gIC0tdG9nZ2xlLWxpbms6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0O1xcbn1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMCAxNXZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5uYXYge1xcbiAgLyogcG9zaXRpb246IHN0aWNreTsgKi9cXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgLyogdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTsgKi9cXG59XFxuXFxubmF2IGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRvZ2dsZS1saW5rKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5wIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2VjdGlvbi1jb250YWluZXIge1xcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDl2aDtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5zZWN0aW9uLWNvbnRhaW5lciA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2hvbWUge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNob21lID4gaDIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5oaWdobGlnaHQtY29udGFpbmVyLFxcbi5oaWdobGlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5oaWdobGlnaHQtY29udGFpbmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogLTNweDtcXG4gIG1hcmdpbi1yaWdodDogLTNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTFweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJSAyNSUgMjAlIDI0JTtcXG4gIHBhZGRpbmc6IDEwcHggM3B4IDNweCAxMHB4O1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWFib3V0OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjMWY2MmMwOTc7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcXG59XFxuXFxuLmhpZ2hsaWdodC13b3JrOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjYzEzNjM2YTc7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXZoO1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJlc2l6ZTogYm90aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcbiAgcGFkZGluZzogNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUsIDI1LCAyNSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgPiAqIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gIC8qIGFzcGVjdC1yYXRpbzogMTYvOTsgKi9cXG4gIGFzcGVjdC1yYXRpbzogNC8zO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRodW1ibmFpbC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLmljb24td3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmdpdC13cmFwcGVyIHtcXG4gIGhlaWdodDogM3ZoO1xcbiAgd2lkdGg6IDN2aDtcXG59XFxuXFxuc3ZnIHtcXG4gIGZpbGw6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4ubGl2ZS13cmFwcGVyIHtcXG4gIGhlaWdodDogM3ZoO1xcbiAgd2lkdGg6IDN2aDtcXG59XFxuXFxuLnNraWxscy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnNraWxsLWxvZ28ge1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLmFib3V0LW1lLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxufVxcblxcbiNnby10by10b3Age1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDJ2dztcXG4gIG1hcmdpbi1ib3R0b206IDJ2dztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogNHZoO1xcbiAgd2lkdGg6IDR2aDtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwcHgsIDUwcHgpKTtcXG4gIGhlaWdodDogNXZoO1xcblxcbiAgcGFkZGluZy10b3A6IDV2dztcXG4gIGJveC1zaXppbmc6IHVuc2V0O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItbGlua3Mge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xcbiAgLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDN2dyAwIDF2dyAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDO0FBQ0Q7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUNBOztDQUVDO0FBQ0Q7RUFDRSxTQUFTO0VBQ1QsNEJBQTRCO0FBQzlCO0FBQ0E7O0NBRUM7QUFDRDs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTs7OztDQUlDO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDO0FBQ0E7O0NBRUM7QUFDRDs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOztDQUVDO0FBQ0Q7Ozs7RUFJRSxhQUFhO0FBQ2Y7QUFDQTs7Q0FF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Z0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLypcXG4gIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpblxcbiovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIkRvbWluZVxcXCIsIHNlcmlmO1xcbn1cXG4vKlxcbiAgMy4gQWxsb3cgcGVyY2VudGFnZS1iYXNlZCBoZWlnaHRzIGluIHRoZSBhcHBsaWNhdGlvblxcbiovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLypcXG4gIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gIDQuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICA1LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuKi9cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLypcXG4gIDYuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4qL1xcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi8qXFxuICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG4vKlxcbiAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4qL1xcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuLypcXG4gIDkuIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxcbiovXFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3I6ICMyMjIwMjA7XFxuICAtLXByb2plY3QtYmctY29sb3I6ICMyZTJiMmI7XFxuICAtLWhlYWQtY29sb3I6ICNmZmZmZmY7XFxuICAtLXRleHQtY29sb3I6ICNkZWRlZGU7XFxuICAtLXRvZ2dsZS1saW5rOiB1cmwoLi9hc3NldHMvbGlnaHQuc3ZnKSBuby1yZXBlYXQ7XFxufVxcblxcbjpyb290LmxpZ2h0IHtcXG4gIC0tYmctY29sb3I6ICNmZmZmZmY7XFxuICAtLXByb2plY3QtYmctY29sb3I6ICNmMmYyZjI7XFxuICAtLWhlYWQtY29sb3I6ICMwMDAwMDA7XFxuICAtLXRleHQtY29sb3I6ICMwMDA7XFxuICAtLXRvZ2dsZS1saW5rOiB1cmwoLi9hc3NldHMvZGFyay5zdmcpIG5vLXJlcGVhdDtcXG59XFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAgMTV2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubmF2IHtcXG4gIC8qIHBvc2l0aW9uOiBzdGlja3k7ICovXFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIC8qIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7ICovXFxufVxcblxcbm5hdiBidXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10b2dnbGUtbGluayk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuaDEsXFxuaDIsXFxucCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24tY29udGFpbmVyIHtcXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA5dmg7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4uc2VjdGlvbi1jb250YWluZXIgPiBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNob21lIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jaG9tZSA+IGgyIHtcXG4gIHBhZGRpbmctbGVmdDogMTB2dztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWNvbnRhaW5lcixcXG4uaGlnaGxpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhpZ2hsaWdodC1jb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWNvbnRhaW5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICBtYXJnaW4tcmlnaHQ6IC0zcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xcHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMCUgMjUlIDIwJSAyNCU7XFxuICBwYWRkaW5nOiAxMHB4IDNweCAzcHggMTBweDtcXG59XFxuXFxuLmhpZ2hsaWdodC1hYm91dDpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzFmNjJjMDk3O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XFxufVxcblxcbi5oaWdobGlnaHQtd29yazpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogI2MxMzYzNmE3O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTV2aDtcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICByZXNpemU6IGJvdGg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1LCAyNSwgMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtYmctY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkID4gKiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcbi5wcm9qZWN0LXRodW1ibmFpbCB7XFxuICAvKiBhc3BlY3QtcmF0aW86IDE2Lzk7ICovXFxuICBhc3BlY3QtcmF0aW86IDQvMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50aHVtYm5haWwtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbi5pY29uLXdyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5naXQtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIHdpZHRoOiAzdmg7XFxufVxcblxcbnN2ZyB7XFxuICBmaWxsOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxpdmUtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIHdpZHRoOiAzdmg7XFxufVxcblxcbi5za2lsbHMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5za2lsbC1sb2dvIHtcXG4gIGhlaWdodDogMTIwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcblxcbi5hYm91dC1tZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4jZ28tdG8tdG9wIHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XFxuICBtYXJnaW4tYm90dG9tOiAydnc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDR2aDtcXG4gIHdpZHRoOiA0dmg7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHB4LCA1MHB4KSk7XFxuICBoZWlnaHQ6IDV2aDtcXG5cXG4gIHBhZGRpbmctdG9wOiA1dnc7XFxuICBib3gtc2l6aW5nOiB1bnNldDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWxpbmtzIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcXG4gIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBwYWRkaW5nOiAzdncgMCAxdncgMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jYWxjdWxhdG9yLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9jYWxjdWxhdG9yLnBuZ1wiLFxuXHRcIi4vZGFyay5zdmdcIjogXCIuL3NyYy9hc3NldHMvZGFyay5zdmdcIixcblx0XCIuL2dpdGh1Yi5zdmdcIjogXCIuL3NyYy9hc3NldHMvZ2l0aHViLnN2Z1wiLFxuXHRcIi4vbGlicmFyeS5wbmdcIjogXCIuL3NyYy9hc3NldHMvbGlicmFyeS5wbmdcIixcblx0XCIuL2xpZ2h0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9saWdodC5zdmdcIixcblx0XCIuL3Jlc3RhdXJhbnQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3Jlc3RhdXJhbnQucG5nXCIsXG5cdFwiLi90aHVtYm5haWwucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3RodW1ibmFpbC5wbmdcIixcblx0XCIuL3RpY3RhY3RvZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGljdGFjdG9lLnBuZ1wiLFxuXHRcIi4vdG9kby5wbmdcIjogXCIuL3NyYy9hc3NldHMvdG9kby5wbmdcIixcblx0XCIuL3dlYXRoZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJmdW5jdGlvbiBpc0RhcmsoKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhcmstbW9kZVwiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGFya0NsYXNzKCkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpO1xuICByb290LmNsYXNzTGlzdC50b2dnbGUoXCJsaWdodFwiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTG9jYWxTdG9yYWdlSXRlbSgpIHtcbiAgaWYgKGlzRGFyaygpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJkYXJrLW1vZGVcIik7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXJrLW1vZGVcIiwgXCJzZXRcIik7XG4gIH1cbn1cblxuZXhwb3J0IHsgdG9nZ2xlTG9jYWxTdG9yYWdlSXRlbSwgdG9nZ2xlRGFya0NsYXNzIH07XG4iLCJpbXBvcnQgRGF0YSBmcm9tIFwiLi9wcm9qZWN0cy5qc29uXCI7XG5cbmNvbnNvbGUubG9nKERhdGEpO1xuXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICBsZXQgYXNzZXRzID0ge307XG4gIHIua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBhc3NldHNbaXRlbS5yZXBsYWNlKFwiLi9cIiwgXCJcIildID0gcihpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBhc3NldHM7XG59XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChcbiAgcmVxdWlyZS5jb250ZXh0KFwiLi4vYXNzZXRzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pXG4pO1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZFwiKTtcblxuICBjb25zdCBwcm9qZWN0VGh1bWJuYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdFRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aHVtYm5haWxcIik7XG5cbiAgY29uc3QgdGh1bWJuYWlsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB0aHVtYm5haWxJbWFnZS5jbGFzc0xpc3QuYWRkKFwidGh1bWJuYWlsLWltYWdlXCIpO1xuICB0aHVtYm5haWxJbWFnZS5zcmMgPSBpbWFnZXNbcHJvamVjdC50aHVtYm5haWxdO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVzY3JpcHRpb25cIik7XG4gIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG5cbiAgY29uc3QgaWNvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpY29uV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaWNvbi13cmFwcGVyXCIpO1xuXG4gIGNvbnN0IGdpdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnaXRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJnaXQtd3JhcHBlclwiKTtcbiAgY29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRMaW5rLmhyZWYgPSBwcm9qZWN0LmNvZGU7XG4gIGdpdExpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBjb25zdCBnaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIGdpdEljb24uY2xhc3NMaXN0LmFkZChcImdpdC1pY29uXCIsIFwiaWNvblwiKTtcbiAgZ2l0SWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwMCAxMDBcIik7XG4gIGdpdEljb24uaW5uZXJIVE1MID1cbiAgICAnPHBhdGggZD1cIk00OC44NTQgMEMyMS44MzkgMCAwIDIyIDAgNDkuMjE3YzAgMjEuNzU2IDEzLjk5MyA0MC4xNzIgMzMuNDA1IDQ2LjY5IDIuNDI3LjQ5IDMuMzE2LTEuMDU5IDMuMzE2LTIuMzYyIDAtMS4xNDEtLjA4LTUuMDUyLS4wOC05LjEyNy0xMy41OSAyLjkzNC0xNi40Mi01Ljg2Ny0xNi40Mi01Ljg2Ny0yLjE4NC01LjcwNC01LjQyLTcuMTctNS40Mi03LjE3LTQuNDQ4LTMuMDE1LjMyNC0zLjAxNS4zMjQtMy4wMTUgNC45MzQuMzI2IDcuNTIzIDUuMDUyIDcuNTIzIDUuMDUyIDQuMzY3IDcuNDk2IDExLjQwNCA1LjM3OCAxNC4yMzUgNC4wNzQuNDA0LTMuMTc4IDEuNjk5LTUuMzc4IDMuMDc0LTYuNi0xMC44MzktMS4xNDEtMjIuMjQzLTUuMzc4LTIyLjI0My0yNC4yODMgMC01LjM3OCAxLjk0LTkuNzc4IDUuMDE0LTEzLjItLjQ4NS0xLjIyMi0yLjE4NC02LjI3NS40ODYtMTMuMDM4IDAgMCA0LjEyNS0xLjMwNCAxMy40MjYgNS4wNTJhNDYuOTcgNDYuOTcgMCAwIDEgMTIuMjE0LTEuNjNjNC4xMjUgMCA4LjMzLjU3MSAxMi4yMTMgMS42MyA5LjMwMi02LjM1NiAxMy40MjctNS4wNTIgMTMuNDI3LTUuMDUyIDIuNjcgNi43NjMuOTcgMTEuODE2LjQ4NSAxMy4wMzggMy4xNTUgMy40MjIgNS4wMTUgNy44MjIgNS4wMTUgMTMuMiAwIDE4LjkwNS0xMS40MDQgMjMuMDYtMjIuMzI0IDI0LjI4MyAxLjc4IDEuNTQ4IDMuMzE2IDQuNDgxIDMuMzE2IDkuMTI2IDAgNi42LS4wOCAxMS44OTctLjA4IDEzLjUyNiAwIDEuMzA0Ljg5IDIuODUzIDMuMzE2IDIuMzY0IDE5LjQxMi02LjUyIDMzLjQwNS0yNC45MzUgMzMuNDA1LTQ2LjY5MUM5Ny43MDcgMjIgNzUuNzg4IDAgNDguODU0IDB6XCIvPic7XG5cbiAgY29uc3QgbGl2ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaXZlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibGl2ZS13cmFwcGVyXCIpO1xuICBjb25zdCBsaXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsaXZlTGluay5ocmVmID0gcHJvamVjdC5saXZlO1xuICBsaXZlTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gIGNvbnN0IGxpdmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBcInN2Z1wiXG4gICk7XG4gIGxpdmVJY29uLmNsYXNzTGlzdC5hZGQoXCJsaXZlLWljb25cIiwgXCJpY29uXCIpO1xuICBsaXZlSWNvbi5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDIxIDIxXCIpO1xuICBsaXZlSWNvbi5pbm5lckhUTUwgPSBgPHBhdGggZD1cIk0xNCwzVjVIMTcuNTlMNy43NiwxNC44M0w5LjE3LDE2LjI0TDE5LDYuNDFWMTBIMjFWM00xOSwxOUg1VjVIMTJWM0g1QzMuODksMyAzLDMuOSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5WlwiIC8+XG4gIGA7XG5cbiAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJY29uKTtcbiAgbGl2ZUxpbmsuYXBwZW5kQ2hpbGQobGl2ZUljb24pO1xuXG4gIGdpdFdyYXBwZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gIGxpdmVXcmFwcGVyLmFwcGVuZENoaWxkKGxpdmVMaW5rKTtcblxuICBpY29uV3JhcHBlci5hcHBlbmRDaGlsZChnaXRXcmFwcGVyKTtcbiAgaWNvbldyYXBwZXIuYXBwZW5kQ2hpbGQobGl2ZVdyYXBwZXIpO1xuXG4gIHByb2plY3RUaHVtYm5haWwuYXBwZW5kQ2hpbGQodGh1bWJuYWlsSW1hZ2UpO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0VGh1bWJuYWlsKTtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoaWNvbldyYXBwZXIpO1xuXG4gIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbn1cblxuRGF0YS5mb3JFYWNoKChwcm9qZWN0KSA9PiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSk7XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgcHJvamVjdHMsIGNyZWF0ZVByb2plY3RDYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0c1wiO1xuXG5pbXBvcnQgeyB0b2dnbGVMb2NhbFN0b3JhZ2VJdGVtLCB0b2dnbGVEYXJrQ2xhc3MgfSBmcm9tIFwiLi9tb2R1bGVzL2Rhcmttb2RlXCI7XG5cbmNvbnN0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLWJ0blwiKTtcbmNvbnN0IHNjcm9sbFRvVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnby10by10b3BcIik7XG5cbnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2dnbGVMb2NhbFN0b3JhZ2VJdGVtKCk7XG4gIHRvZ2dsZURhcmtDbGFzcygpO1xufSk7XG5cbnNjcm9sbFRvVG9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9