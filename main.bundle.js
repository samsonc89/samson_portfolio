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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n  font-family: \"Domine\", serif;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --bg-color: #222020;\n  --project-bg-color: #2e2b2b;\n  --head-color: #ffffff;\n  --text-color: #dedede;\n  --toggle-link: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n}\n\n:root.light {\n  --bg-color: #ffffff;\n  --project-bg-color: #f2f2f2;\n  --head-color: #000000;\n  --text-color: #000;\n  --toggle-link: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  background-color: var(--bg-color);\n}\n\nbody {\n  margin: 0 15vw;\n  text-align: center;\n}\n\nnav {\n  /* position: sticky; */\n  top: 0;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  height: 7vh;\n  width: 100%;\n  background-color: var(--bg-color);\n}\n\na {\n  color: var(--text-color);\n  text-decoration: none;\n}\n\na:visited {\n  color: var(--text-color);\n  /* text-decoration-color: var(--text-color); */\n}\n\nnav button {\n  margin-left: auto;\n  background: var(--toggle-link);\n  border: none;\n  height: 20px;\n  width: 20px;\n}\n\nh1,\nh2,\np {\n  color: var(--text-color);\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.section-container {\n  scroll-margin-top: 9vh;\n  min-height: 80vh;\n}\n\n.section-container > h1 {\n  font-size: 3rem;\n}\n\n#home {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#home > h2 {\n  padding-left: 10vw;\n  margin-bottom: 5px;\n  text-align: start;\n}\n\n.highlight-container,\n.highlight {\n  position: relative;\n}\n\n.highlight-container {\n  display: inline-block;\n}\n\n.highlight-container:before {\n  content: \" \";\n  display: block;\n  height: 90%;\n  width: 100%;\n  margin-left: -3px;\n  margin-right: -3px;\n  position: absolute;\n  top: -1px;\n  left: 4px;\n  border-radius: 20% 25% 20% 24%;\n  padding: 10px 3px 3px 10px;\n}\n\n.highlight-about:before {\n  background: #1f62c097;\n  transform: rotate(3deg);\n}\n\n.highlight-work:before {\n  background: #c13636a7;\n  transform: rotate(-3deg);\n}\n\n#projects {\n  margin-bottom: 15vh;\n}\n\n#projects-container {\n  width: 100%;\n  display: grid;\n  resize: both;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n}\n\n.project-card {\n  padding: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid rgb(25, 25, 25);\n  border-radius: 10px;\n  background-color: var(--project-bg-color);\n}\n\n.project-card > * {\n  text-align: center;\n  margin: 0;\n}\n.project-thumbnail {\n  /* aspect-ratio: 16/9; */\n  aspect-ratio: 4/3;\n  width: 100%;\n  height: 150px;\n  margin-bottom: 10px;\n}\n\n.thumbnail-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.project-description {\n  margin: 10px 0;\n}\n.icon-wrapper {\n  margin-top: auto;\n  display: flex;\n  gap: 10px;\n}\n.git-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\nsvg {\n  fill: var(--text-color);\n}\n\n.live-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\n.skills-container {\n  margin-top: 10vh;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.skill-logo {\n  height: 120px;\n  width: 120px;\n}\n\n.about-me-text {\n  font-size: 1.3rem;\n  margin-bottom: 2vh;\n}\n\n#go-to-top {\n  bottom: 0;\n  right: 0;\n  margin-right: 2vw;\n  margin-bottom: 2vw;\n  position: fixed;\n  height: 4vh;\n  width: 4vh;\n  opacity: 0.2;\n  border: 1px solid var(--text-color);\n  border-radius: 10px;\n}\n\nfooter {\n  display: flex;\n  height: 5vh;\n  /* background-color: green; */\n  padding-top: 5vw;\n  box-sizing: unset;\n  gap: 20px;\n  justify-content: center;\n  /* padding-bottom: 5vh; */\n}\n\n.footer-links {\n  height: 100%;\n  width: auto;\n  display: inline;\n}\n\n@media (min-width: 750px) {\n  .project-thumbnail {\n    height: 250px;\n  }\n\n  footer {\n    height: 5vh;\n    padding: 3vw 0 1vw 0;\n  }\n  .footer-links {\n    height: 100%;\n    width: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n  font-family: \"Domine\", serif;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --bg-color: #222020;\n  --project-bg-color: #2e2b2b;\n  --head-color: #ffffff;\n  --text-color: #dedede;\n  --toggle-link: url(./assets/light.svg) no-repeat;\n}\n\n:root.light {\n  --bg-color: #ffffff;\n  --project-bg-color: #f2f2f2;\n  --head-color: #000000;\n  --text-color: #000;\n  --toggle-link: url(./assets/dark.svg) no-repeat;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  background-color: var(--bg-color);\n}\n\nbody {\n  margin: 0 15vw;\n  text-align: center;\n}\n\nnav {\n  /* position: sticky; */\n  top: 0;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  height: 7vh;\n  width: 100%;\n  background-color: var(--bg-color);\n}\n\na {\n  color: var(--text-color);\n  text-decoration: none;\n}\n\na:visited {\n  color: var(--text-color);\n  /* text-decoration-color: var(--text-color); */\n}\n\nnav button {\n  margin-left: auto;\n  background: var(--toggle-link);\n  border: none;\n  height: 20px;\n  width: 20px;\n}\n\nh1,\nh2,\np {\n  color: var(--text-color);\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.section-container {\n  scroll-margin-top: 9vh;\n  min-height: 80vh;\n}\n\n.section-container > h1 {\n  font-size: 3rem;\n}\n\n#home {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#home > h2 {\n  padding-left: 10vw;\n  margin-bottom: 5px;\n  text-align: start;\n}\n\n.highlight-container,\n.highlight {\n  position: relative;\n}\n\n.highlight-container {\n  display: inline-block;\n}\n\n.highlight-container:before {\n  content: \" \";\n  display: block;\n  height: 90%;\n  width: 100%;\n  margin-left: -3px;\n  margin-right: -3px;\n  position: absolute;\n  top: -1px;\n  left: 4px;\n  border-radius: 20% 25% 20% 24%;\n  padding: 10px 3px 3px 10px;\n}\n\n.highlight-about:before {\n  background: #1f62c097;\n  transform: rotate(3deg);\n}\n\n.highlight-work:before {\n  background: #c13636a7;\n  transform: rotate(-3deg);\n}\n\n#projects {\n  margin-bottom: 15vh;\n}\n\n#projects-container {\n  width: 100%;\n  display: grid;\n  resize: both;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n}\n\n.project-card {\n  padding: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid rgb(25, 25, 25);\n  border-radius: 10px;\n  background-color: var(--project-bg-color);\n}\n\n.project-card > * {\n  text-align: center;\n  margin: 0;\n}\n.project-thumbnail {\n  /* aspect-ratio: 16/9; */\n  aspect-ratio: 4/3;\n  width: 100%;\n  height: 150px;\n  margin-bottom: 10px;\n}\n\n.thumbnail-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.project-description {\n  margin: 10px 0;\n}\n.icon-wrapper {\n  margin-top: auto;\n  display: flex;\n  gap: 10px;\n}\n.git-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\nsvg {\n  fill: var(--text-color);\n}\n\n.live-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\n.skills-container {\n  margin-top: 10vh;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.skill-logo {\n  height: 120px;\n  width: 120px;\n}\n\n.about-me-text {\n  font-size: 1.3rem;\n  margin-bottom: 2vh;\n}\n\n#go-to-top {\n  bottom: 0;\n  right: 0;\n  margin-right: 2vw;\n  margin-bottom: 2vw;\n  position: fixed;\n  height: 4vh;\n  width: 4vh;\n  opacity: 0.2;\n  border: 1px solid var(--text-color);\n  border-radius: 10px;\n}\n\nfooter {\n  display: flex;\n  height: 5vh;\n  /* background-color: green; */\n  padding-top: 5vw;\n  box-sizing: unset;\n  gap: 20px;\n  justify-content: center;\n  /* padding-bottom: 5vh; */\n}\n\n.footer-links {\n  height: 100%;\n  width: auto;\n  display: inline;\n}\n\n@media (min-width: 750px) {\n  .project-thumbnail {\n    height: 250px;\n  }\n\n  footer {\n    height: 5vh;\n    padding: 3vw 0 1vw 0;\n  }\n  .footer-links {\n    height: 100%;\n    width: auto;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssU0FBUyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssUUFBUSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZ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Q0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRTRDOztBQUVZOztBQUU3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHlFQUFzQjtBQUN4QixFQUFFLGtFQUFlO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9zcmMvbW9kdWxlcy9kYXJrbW9kZS5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9saWdodC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9kYXJrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi8qXFxuICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4qL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEb21pbmVcXFwiLCBzZXJpZjtcXG59XFxuLypcXG4gIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXG4qL1xcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi8qXFxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxuICA0LiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcbiovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbi8qXFxuICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxuKi9cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4vKlxcbiAgNy4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4qL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuLypcXG4gIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxuKi9cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi8qXFxuICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXG4qL1xcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjMjIyMDIwO1xcbiAgLS1wcm9qZWN0LWJnLWNvbG9yOiAjMmUyYjJiO1xcbiAgLS1oZWFkLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS10ZXh0LWNvbG9yOiAjZGVkZWRlO1xcbiAgLS10b2dnbGUtbGluazogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxufVxcblxcbjpyb290LmxpZ2h0IHtcXG4gIC0tYmctY29sb3I6ICNmZmZmZmY7XFxuICAtLXByb2plY3QtYmctY29sb3I6ICNmMmYyZjI7XFxuICAtLWhlYWQtY29sb3I6ICMwMDAwMDA7XFxuICAtLXRleHQtY29sb3I6ICMwMDA7XFxuICAtLXRvZ2dsZS1saW5rOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdDtcXG59XFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAgMTV2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubmF2IHtcXG4gIC8qIHBvc2l0aW9uOiBzdGlja3k7ICovXFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgLyogdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTsgKi9cXG59XFxuXFxubmF2IGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRvZ2dsZS1saW5rKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5wIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2VjdGlvbi1jb250YWluZXIge1xcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDl2aDtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5zZWN0aW9uLWNvbnRhaW5lciA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2hvbWUge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNob21lID4gaDIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5oaWdobGlnaHQtY29udGFpbmVyLFxcbi5oaWdobGlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5oaWdobGlnaHQtY29udGFpbmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogLTNweDtcXG4gIG1hcmdpbi1yaWdodDogLTNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTFweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJSAyNSUgMjAlIDI0JTtcXG4gIHBhZGRpbmc6IDEwcHggM3B4IDNweCAxMHB4O1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWFib3V0OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjMWY2MmMwOTc7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcXG59XFxuXFxuLmhpZ2hsaWdodC13b3JrOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjYzEzNjM2YTc7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXZoO1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJlc2l6ZTogYm90aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcbiAgcGFkZGluZzogNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUsIDI1LCAyNSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQgPiAqIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gIC8qIGFzcGVjdC1yYXRpbzogMTYvOTsgKi9cXG4gIGFzcGVjdC1yYXRpbzogNC8zO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRodW1ibmFpbC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLmljb24td3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmdpdC13cmFwcGVyIHtcXG4gIGhlaWdodDogM3ZoO1xcbiAgd2lkdGg6IDN2aDtcXG59XFxuXFxuc3ZnIHtcXG4gIGZpbGw6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4ubGl2ZS13cmFwcGVyIHtcXG4gIGhlaWdodDogM3ZoO1xcbiAgd2lkdGg6IDN2aDtcXG59XFxuXFxuLnNraWxscy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnNraWxsLWxvZ28ge1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLmFib3V0LW1lLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxufVxcblxcbiNnby10by10b3Age1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDJ2dztcXG4gIG1hcmdpbi1ib3R0b206IDJ2dztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogNHZoO1xcbiAgd2lkdGg6IDR2aDtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xcbiAgcGFkZGluZy10b3A6IDV2dztcXG4gIGJveC1zaXppbmc6IHVuc2V0O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBwYWRkaW5nLWJvdHRvbTogNXZoOyAqL1xcbn1cXG5cXG4uZm9vdGVyLWxpbmtzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcXG4gIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgcGFkZGluZzogM3Z3IDAgMXZ3IDA7XFxuICB9XFxuICAuZm9vdGVyLWxpbmtzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FFQztBQUNEOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTs7Q0FFQztBQUNEO0VBQ0UsU0FBUztFQUNULDRCQUE0QjtBQUM5QjtBQUNBOztDQUVDO0FBQ0Q7O0VBRUUs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O0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUztFQUNULHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi8qXFxuICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4qL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEb21pbmVcXFwiLCBzZXJpZjtcXG59XFxuLypcXG4gIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXG4qL1xcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi8qXFxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxuICA0LiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcbiovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbi8qXFxuICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxuKi9cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4vKlxcbiAgNy4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4qL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuLypcXG4gIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxuKi9cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi8qXFxuICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXG4qL1xcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjMjIyMDIwO1xcbiAgLS1wcm9qZWN0LWJnLWNvbG9yOiAjMmUyYjJiO1xcbiAgLS1oZWFkLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS10ZXh0LWNvbG9yOiAjZGVkZWRlO1xcbiAgLS10b2dnbGUtbGluazogdXJsKC4vYXNzZXRzL2xpZ2h0LnN2Zykgbm8tcmVwZWF0O1xcbn1cXG5cXG46cm9vdC5saWdodCB7XFxuICAtLWJnLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1wcm9qZWN0LWJnLWNvbG9yOiAjZjJmMmYyO1xcbiAgLS1oZWFkLWNvbG9yOiAjMDAwMDAwO1xcbiAgLS10ZXh0LWNvbG9yOiAjMDAwO1xcbiAgLS10b2dnbGUtbGluazogdXJsKC4vYXNzZXRzL2Rhcmsuc3ZnKSBuby1yZXBlYXQ7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwIDE1dnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm5hdiB7XFxuICAvKiBwb3NpdGlvbjogc3RpY2t5OyAqL1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIC8qIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7ICovXFxufVxcblxcbm5hdiBidXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10b2dnbGUtbGluayk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuaDEsXFxuaDIsXFxucCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24tY29udGFpbmVyIHtcXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA5dmg7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4uc2VjdGlvbi1jb250YWluZXIgPiBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNob21lIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jaG9tZSA+IGgyIHtcXG4gIHBhZGRpbmctbGVmdDogMTB2dztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWNvbnRhaW5lcixcXG4uaGlnaGxpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhpZ2hsaWdodC1jb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWNvbnRhaW5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICBtYXJnaW4tcmlnaHQ6IC0zcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xcHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMCUgMjUlIDIwJSAyNCU7XFxuICBwYWRkaW5nOiAxMHB4IDNweCAzcHggMTBweDtcXG59XFxuXFxuLmhpZ2hsaWdodC1hYm91dDpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzFmNjJjMDk3O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XFxufVxcblxcbi5oaWdobGlnaHQtd29yazpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogI2MxMzYzNmE3O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTV2aDtcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICByZXNpemU6IGJvdGg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1LCAyNSwgMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtYmctY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkID4gKiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcbi5wcm9qZWN0LXRodW1ibmFpbCB7XFxuICAvKiBhc3BlY3QtcmF0aW86IDE2Lzk7ICovXFxuICBhc3BlY3QtcmF0aW86IDQvMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50aHVtYm5haWwtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbi5pY29uLXdyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5naXQtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIHdpZHRoOiAzdmg7XFxufVxcblxcbnN2ZyB7XFxuICBmaWxsOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxpdmUtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIHdpZHRoOiAzdmg7XFxufVxcblxcbi5za2lsbHMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5za2lsbC1sb2dvIHtcXG4gIGhlaWdodDogMTIwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcblxcbi5hYm91dC1tZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4jZ28tdG8tdG9wIHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XFxuICBtYXJnaW4tYm90dG9tOiAydnc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDR2aDtcXG4gIHdpZHRoOiA0dmg7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA1dmg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cXG4gIHBhZGRpbmctdG9wOiA1dnc7XFxuICBib3gtc2l6aW5nOiB1bnNldDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLyogcGFkZGluZy1ib3R0b206IDV2aDsgKi9cXG59XFxuXFxuLmZvb3Rlci1saW5rcyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogYXV0bztcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XFxuICAucHJvamVjdC10aHVtYm5haWwge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHBhZGRpbmc6IDN2dyAwIDF2dyAwO1xcbiAgfVxcbiAgLmZvb3Rlci1saW5rcyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2FsY3VsYXRvci5wbmdcIjogXCIuL3NyYy9hc3NldHMvY2FsY3VsYXRvci5wbmdcIixcblx0XCIuL2Rhcmsuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2Rhcmsuc3ZnXCIsXG5cdFwiLi9naXRodWIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2dpdGh1Yi5zdmdcIixcblx0XCIuL2xpYnJhcnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2xpYnJhcnkucG5nXCIsXG5cdFwiLi9saWdodC5zdmdcIjogXCIuL3NyYy9hc3NldHMvbGlnaHQuc3ZnXCIsXG5cdFwiLi9yZXN0YXVyYW50LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9yZXN0YXVyYW50LnBuZ1wiLFxuXHRcIi4vdGh1bWJuYWlsLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy90aHVtYm5haWwucG5nXCIsXG5cdFwiLi90aWN0YWN0b2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3RpY3RhY3RvZS5wbmdcIixcblx0XCIuL3RvZG8ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3RvZG8ucG5nXCIsXG5cdFwiLi93ZWF0aGVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiZnVuY3Rpb24gaXNEYXJrKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXJrLW1vZGVcIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURhcmtDbGFzcygpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6cm9vdFwiKTtcbiAgcm9vdC5jbGFzc0xpc3QudG9nZ2xlKFwibGlnaHRcIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUxvY2FsU3RvcmFnZUl0ZW0oKSB7XG4gIGlmIChpc0RhcmsoKSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGFyay1tb2RlXCIpO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFyay1tb2RlXCIsIFwic2V0XCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHRvZ2dsZUxvY2FsU3RvcmFnZUl0ZW0sIHRvZ2dsZURhcmtDbGFzcyB9O1xuIiwiaW1wb3J0IERhdGEgZnJvbSBcIi4vcHJvamVjdHMuanNvblwiO1xuXG5jb25zb2xlLmxvZyhEYXRhKTtcblxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgbGV0IGFzc2V0cyA9IHt9O1xuICByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgYXNzZXRzW2l0ZW0ucmVwbGFjZShcIi4vXCIsIFwiXCIpXSA9IHIoaXRlbSk7XG4gIH0pO1xuICByZXR1cm4gYXNzZXRzO1xufVxuXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwoXG4gIHJlcXVpcmUuY29udGV4dChcIi4uL2Fzc2V0c1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKVxuKTtcblxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIik7XG5cbiAgY29uc3QgcHJvamVjdFRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RUaHVtYm5haWwuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGh1bWJuYWlsXCIpO1xuXG4gIGNvbnN0IHRodW1ibmFpbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdGh1bWJuYWlsSW1hZ2UuY2xhc3NMaXN0LmFkZChcInRodW1ibmFpbC1pbWFnZVwiKTtcbiAgdGh1bWJuYWlsSW1hZ2Uuc3JjID0gaW1hZ2VzW3Byb2plY3QudGh1bWJuYWlsXTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpO1xuICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGljb25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImljb24td3JhcHBlclwiKTtcblxuICBjb25zdCBnaXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2l0V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZ2l0LXdyYXBwZXJcIik7XG4gIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0TGluay5ocmVmID0gcHJvamVjdC5jb2RlO1xuICBnaXRMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgY29uc3QgZ2l0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICBnaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJnaXQtaWNvblwiLCBcImljb25cIik7XG4gIGdpdEljb24uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAxMDAgMTAwXCIpO1xuICBnaXRJY29uLmlubmVySFRNTCA9XG4gICAgJzxwYXRoIGQ9XCJNNDguODU0IDBDMjEuODM5IDAgMCAyMiAwIDQ5LjIxN2MwIDIxLjc1NiAxMy45OTMgNDAuMTcyIDMzLjQwNSA0Ni42OSAyLjQyNy40OSAzLjMxNi0xLjA1OSAzLjMxNi0yLjM2MiAwLTEuMTQxLS4wOC01LjA1Mi0uMDgtOS4xMjctMTMuNTkgMi45MzQtMTYuNDItNS44NjctMTYuNDItNS44NjctMi4xODQtNS43MDQtNS40Mi03LjE3LTUuNDItNy4xNy00LjQ0OC0zLjAxNS4zMjQtMy4wMTUuMzI0LTMuMDE1IDQuOTM0LjMyNiA3LjUyMyA1LjA1MiA3LjUyMyA1LjA1MiA0LjM2NyA3LjQ5NiAxMS40MDQgNS4zNzggMTQuMjM1IDQuMDc0LjQwNC0zLjE3OCAxLjY5OS01LjM3OCAzLjA3NC02LjYtMTAuODM5LTEuMTQxLTIyLjI0My01LjM3OC0yMi4yNDMtMjQuMjgzIDAtNS4zNzggMS45NC05Ljc3OCA1LjAxNC0xMy4yLS40ODUtMS4yMjItMi4xODQtNi4yNzUuNDg2LTEzLjAzOCAwIDAgNC4xMjUtMS4zMDQgMTMuNDI2IDUuMDUyYTQ2Ljk3IDQ2Ljk3IDAgMCAxIDEyLjIxNC0xLjYzYzQuMTI1IDAgOC4zMy41NzEgMTIuMjEzIDEuNjMgOS4zMDItNi4zNTYgMTMuNDI3LTUuMDUyIDEzLjQyNy01LjA1MiAyLjY3IDYuNzYzLjk3IDExLjgxNi40ODUgMTMuMDM4IDMuMTU1IDMuNDIyIDUuMDE1IDcuODIyIDUuMDE1IDEzLjIgMCAxOC45MDUtMTEuNDA0IDIzLjA2LTIyLjMyNCAyNC4yODMgMS43OCAxLjU0OCAzLjMxNiA0LjQ4MSAzLjMxNiA5LjEyNiAwIDYuNi0uMDggMTEuODk3LS4wOCAxMy41MjYgMCAxLjMwNC44OSAyLjg1MyAzLjMxNiAyLjM2NCAxOS40MTItNi41MiAzMy40MDUtMjQuOTM1IDMzLjQwNS00Ni42OTFDOTcuNzA3IDIyIDc1Ljc4OCAwIDQ4Ljg1NCAwelwiLz4nO1xuXG4gIGNvbnN0IGxpdmVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGl2ZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImxpdmUtd3JhcHBlclwiKTtcbiAgY29uc3QgbGl2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGl2ZUxpbmsuaHJlZiA9IHByb2plY3QubGl2ZTtcbiAgbGl2ZUxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBjb25zdCBsaXZlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgXCJzdmdcIlxuICApO1xuICBsaXZlSWNvbi5jbGFzc0xpc3QuYWRkKFwibGl2ZS1pY29uXCIsIFwiaWNvblwiKTtcbiAgbGl2ZUljb24uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyMSAyMVwiKTtcbiAgbGl2ZUljb24uaW5uZXJIVE1MID0gYDxwYXRoIGQ9XCJNMTQsM1Y1SDE3LjU5TDcuNzYsMTQuODNMOS4xNywxNi4yNEwxOSw2LjQxVjEwSDIxVjNNMTksMTlINVY1SDEyVjNINUMzLjg5LDMgMywzLjkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVYxMkgxOVYxOVpcIiAvPlxuICBgO1xuXG4gIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0SWNvbik7XG4gIGxpdmVMaW5rLmFwcGVuZENoaWxkKGxpdmVJY29uKTtcblxuICBnaXRXcmFwcGVyLmFwcGVuZENoaWxkKGdpdExpbmspO1xuICBsaXZlV3JhcHBlci5hcHBlbmRDaGlsZChsaXZlTGluayk7XG5cbiAgaWNvbldyYXBwZXIuYXBwZW5kQ2hpbGQoZ2l0V3JhcHBlcik7XG4gIGljb25XcmFwcGVyLmFwcGVuZENoaWxkKGxpdmVXcmFwcGVyKTtcblxuICBwcm9qZWN0VGh1bWJuYWlsLmFwcGVuZENoaWxkKHRodW1ibmFpbEltYWdlKTtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRodW1ibmFpbCk7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGljb25XcmFwcGVyKTtcblxuICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG59XG5cbkRhdGEuZm9yRWFjaCgocHJvamVjdCkgPT4gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkpO1xuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCB7IHByb2plY3RzLCBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdHNcIjtcblxuaW1wb3J0IHsgdG9nZ2xlTG9jYWxTdG9yYWdlSXRlbSwgdG9nZ2xlRGFya0NsYXNzIH0gZnJvbSBcIi4vbW9kdWxlcy9kYXJrbW9kZVwiO1xuXG5jb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1idG5cIik7XG5jb25zdCBzY3JvbGxUb1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ28tdG8tdG9wXCIpO1xuXG50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdG9nZ2xlTG9jYWxTdG9yYWdlSXRlbSgpO1xuICB0b2dnbGVEYXJrQ2xhc3MoKTtcbn0pO1xuXG5zY3JvbGxUb1RvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==