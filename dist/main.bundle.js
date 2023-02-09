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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n  font-family: \"Domine\", serif;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --bg-color: #222020;\n  --project-bg-color: #2e2b2b;\n  --head-color: #ffffff;\n  --text-color: #dedede;\n  --toggle-link: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n}\n\n:root.light {\n  --bg-color: #ffffff;\n  --project-bg-color: #f2f2f2;\n  --head-color: #000000;\n  --text-color: #000;\n  --toggle-link: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  background-color: var(--bg-color);\n}\n\nbody {\n  margin: 0 15vw;\n  text-align: center;\n}\n\nnav {\n  /* position: sticky; */\n  top: 0;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  height: 7vh;\n  width: 100%;\n  background-color: var(--bg-color);\n  font-weight: bolder;\n}\n\na {\n  color: var(--text-color);\n  text-decoration: none;\n}\n\na:visited {\n  color: var(--text-color);\n  /* text-decoration-color: var(--text-color); */\n}\n\nnav button {\n  margin-left: auto;\n  background: var(--toggle-link);\n  border: none;\n  height: 20px;\n  width: 20px;\n}\n\nh1,\nh2,\np {\n  color: var(--text-color);\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.section-container {\n  scroll-margin-top: 9vh;\n  min-height: 80vh;\n}\n\n.section-container > h1 {\n  font-size: 3rem;\n}\n\n#home {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#home > h2 {\n  padding-left: 10vw;\n  margin-bottom: 5px;\n  text-align: start;\n}\n\n.highlight-container,\n.highlight {\n  position: relative;\n}\n\n.highlight-container {\n  display: inline-block;\n}\n\n.highlight-container:before {\n  content: \" \";\n  display: block;\n  height: 90%;\n  width: 100%;\n  margin-left: -3px;\n  margin-right: -3px;\n  position: absolute;\n  top: -1px;\n  left: 4px;\n  border-radius: 20% 25% 20% 24%;\n  padding: 10px 3px 3px 10px;\n}\n\n.highlight-about:before {\n  background: #1f62c097;\n  transform: rotate(3deg);\n}\n\n.highlight-work:before {\n  background: #c13636a7;\n  transform: rotate(-3deg);\n}\n\n#projects {\n  margin-bottom: 15vh;\n}\n\n#projects-container {\n  width: 100%;\n  display: grid;\n  resize: both;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n}\n\n.project-card {\n  padding: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid rgb(25, 25, 25);\n  border-radius: 10px;\n  background-color: var(--project-bg-color);\n}\n\n.project-card > * {\n  text-align: center;\n  margin: 0;\n}\n.project-thumbnail {\n  /* aspect-ratio: 16/9; */\n  aspect-ratio: 4/3;\n  width: 100%;\n  height: 150px;\n  margin-bottom: 10px;\n}\n\n.thumbnail-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.project-description {\n  margin: 10px 0;\n}\n.icon-wrapper {\n  margin-top: auto;\n  display: flex;\n  gap: 10px;\n}\n.git-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\nsvg {\n  fill: var(--text-color);\n}\n\n.live-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\n.skills-container {\n  margin-top: 10vh;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\n.skill-logo {\n  height: 10vh;\n  width: 10vh;\n  margin: 10px 15px;\n}\n\n.about-me-text {\n  font-size: 1.3rem;\n  margin-bottom: 2vh;\n}\n\n#go-to-top {\n  bottom: 0;\n  right: 0;\n  margin-right: 2vw;\n  margin-bottom: 2vw;\n  position: fixed;\n  height: 4vh;\n  width: 4vh;\n  opacity: 0.2;\n  border: 1px solid var(--text-color);\n  border-radius: 10px;\n}\n\nfooter {\n  height: 5vh;\n  padding-top: 5vw;\n  box-sizing: unset;\n  gap: 20px;\n  justify-content: center;\n}\n\n.footer-links {\n  height: 40px;\n  width: auto;\n  display: inline;\n  margin: 0 15px;\n}\n\n@media (min-width: 750px) {\n  .project-thumbnail {\n    height: 250px;\n  }\n\n  .skill-logo {\n    height: 15vh;\n    width: 15vh;\n  }\n  footer {\n    padding: 3vw 0 1vw 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n  font-family: \"Domine\", serif;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --bg-color: #222020;\n  --project-bg-color: #2e2b2b;\n  --head-color: #ffffff;\n  --text-color: #dedede;\n  --toggle-link: url(./assets/light.svg) no-repeat;\n}\n\n:root.light {\n  --bg-color: #ffffff;\n  --project-bg-color: #f2f2f2;\n  --head-color: #000000;\n  --text-color: #000;\n  --toggle-link: url(./assets/dark.svg) no-repeat;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  background-color: var(--bg-color);\n}\n\nbody {\n  margin: 0 15vw;\n  text-align: center;\n}\n\nnav {\n  /* position: sticky; */\n  top: 0;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  height: 7vh;\n  width: 100%;\n  background-color: var(--bg-color);\n  font-weight: bolder;\n}\n\na {\n  color: var(--text-color);\n  text-decoration: none;\n}\n\na:visited {\n  color: var(--text-color);\n  /* text-decoration-color: var(--text-color); */\n}\n\nnav button {\n  margin-left: auto;\n  background: var(--toggle-link);\n  border: none;\n  height: 20px;\n  width: 20px;\n}\n\nh1,\nh2,\np {\n  color: var(--text-color);\n}\n\nh1,\nh2 {\n  text-align: center;\n}\n\n.section-container {\n  scroll-margin-top: 9vh;\n  min-height: 80vh;\n}\n\n.section-container > h1 {\n  font-size: 3rem;\n}\n\n#home {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#home > h2 {\n  padding-left: 10vw;\n  margin-bottom: 5px;\n  text-align: start;\n}\n\n.highlight-container,\n.highlight {\n  position: relative;\n}\n\n.highlight-container {\n  display: inline-block;\n}\n\n.highlight-container:before {\n  content: \" \";\n  display: block;\n  height: 90%;\n  width: 100%;\n  margin-left: -3px;\n  margin-right: -3px;\n  position: absolute;\n  top: -1px;\n  left: 4px;\n  border-radius: 20% 25% 20% 24%;\n  padding: 10px 3px 3px 10px;\n}\n\n.highlight-about:before {\n  background: #1f62c097;\n  transform: rotate(3deg);\n}\n\n.highlight-work:before {\n  background: #c13636a7;\n  transform: rotate(-3deg);\n}\n\n#projects {\n  margin-bottom: 15vh;\n}\n\n#projects-container {\n  width: 100%;\n  display: grid;\n  resize: both;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n}\n\n.project-card {\n  padding: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid rgb(25, 25, 25);\n  border-radius: 10px;\n  background-color: var(--project-bg-color);\n}\n\n.project-card > * {\n  text-align: center;\n  margin: 0;\n}\n.project-thumbnail {\n  /* aspect-ratio: 16/9; */\n  aspect-ratio: 4/3;\n  width: 100%;\n  height: 150px;\n  margin-bottom: 10px;\n}\n\n.thumbnail-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.project-description {\n  margin: 10px 0;\n}\n.icon-wrapper {\n  margin-top: auto;\n  display: flex;\n  gap: 10px;\n}\n.git-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\nsvg {\n  fill: var(--text-color);\n}\n\n.live-wrapper {\n  height: 3vh;\n  width: 3vh;\n}\n\n.skills-container {\n  margin-top: 10vh;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n\n.skill-logo {\n  height: 10vh;\n  width: 10vh;\n  margin: 10px 15px;\n}\n\n.about-me-text {\n  font-size: 1.3rem;\n  margin-bottom: 2vh;\n}\n\n#go-to-top {\n  bottom: 0;\n  right: 0;\n  margin-right: 2vw;\n  margin-bottom: 2vw;\n  position: fixed;\n  height: 4vh;\n  width: 4vh;\n  opacity: 0.2;\n  border: 1px solid var(--text-color);\n  border-radius: 10px;\n}\n\nfooter {\n  height: 5vh;\n  padding-top: 5vw;\n  box-sizing: unset;\n  gap: 20px;\n  justify-content: center;\n}\n\n.footer-links {\n  height: 40px;\n  width: auto;\n  display: inline;\n  margin: 0 15px;\n}\n\n@media (min-width: 750px) {\n  .project-thumbnail {\n    height: 250px;\n  }\n\n  .skill-logo {\n    height: 15vh;\n    width: 15vh;\n  }\n  footer {\n    padding: 3vw 0 1vw 0;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxTQUFTLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxRQUFRLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZ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V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRTRDOztBQUVZOztBQUU3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHlFQUFzQjtBQUN4QixFQUFFLGtFQUFlO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9zcmMvYXNzZXRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vLi9zcmMvbW9kdWxlcy9kYXJrbW9kZS5qcyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NhbXNvbl9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2Ftc29uX3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zYW1zb25fcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9saWdodC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9kYXJrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi8qXFxuICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4qL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEb21pbmVcXFwiLCBzZXJpZjtcXG59XFxuLypcXG4gIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXG4qL1xcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi8qXFxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxuICA0LiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcbiovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbi8qXFxuICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxuKi9cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4vKlxcbiAgNy4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4qL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuLypcXG4gIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxuKi9cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi8qXFxuICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXG4qL1xcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjMjIyMDIwO1xcbiAgLS1wcm9qZWN0LWJnLWNvbG9yOiAjMmUyYjJiO1xcbiAgLS1oZWFkLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS10ZXh0LWNvbG9yOiAjZGVkZWRlO1xcbiAgLS10b2dnbGUtbGluazogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxufVxcblxcbjpyb290LmxpZ2h0IHtcXG4gIC0tYmctY29sb3I6ICNmZmZmZmY7XFxuICAtLXByb2plY3QtYmctY29sb3I6ICNmMmYyZjI7XFxuICAtLWhlYWQtY29sb3I6ICMwMDAwMDA7XFxuICAtLXRleHQtY29sb3I6ICMwMDA7XFxuICAtLXRvZ2dsZS1saW5rOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdDtcXG59XFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAgMTV2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubmF2IHtcXG4gIC8qIHBvc2l0aW9uOiBzdGlja3k7ICovXFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIC8qIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7ICovXFxufVxcblxcbm5hdiBidXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10b2dnbGUtbGluayk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuaDEsXFxuaDIsXFxucCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24tY29udGFpbmVyIHtcXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiA5dmg7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4uc2VjdGlvbi1jb250YWluZXIgPiBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNob21lIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jaG9tZSA+IGgyIHtcXG4gIHBhZGRpbmctbGVmdDogMTB2dztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWNvbnRhaW5lcixcXG4uaGlnaGxpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhpZ2hsaWdodC1jb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uaGlnaGxpZ2h0LWNvbnRhaW5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICBtYXJnaW4tcmlnaHQ6IC0zcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xcHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMCUgMjUlIDIwJSAyNCU7XFxuICBwYWRkaW5nOiAxMHB4IDNweCAzcHggMTBweDtcXG59XFxuXFxuLmhpZ2hsaWdodC1hYm91dDpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzFmNjJjMDk3O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XFxufVxcblxcbi5oaWdobGlnaHQtd29yazpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogI2MxMzYzNmE3O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTV2aDtcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICByZXNpemU6IGJvdGg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1LCAyNSwgMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtYmctY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkID4gKiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcbi5wcm9qZWN0LXRodW1ibmFpbCB7XFxuICAvKiBhc3BlY3QtcmF0aW86IDE2Lzk7ICovXFxuICBhc3BlY3QtcmF0aW86IDQvMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50aHVtYm5haWwtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbi5pY29uLXdyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5naXQtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIHdpZHRoOiAzdmg7XFxufVxcblxcbnN2ZyB7XFxuICBmaWxsOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxpdmUtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIHdpZHRoOiAzdmg7XFxufVxcblxcbi5za2lsbHMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5za2lsbC1sb2dvIHtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMHZoO1xcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XFxufVxcblxcbi5hYm91dC1tZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4jZ28tdG8tdG9wIHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XFxuICBtYXJnaW4tYm90dG9tOiAydnc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDR2aDtcXG4gIHdpZHRoOiA0dmg7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIHBhZGRpbmctdG9wOiA1dnc7XFxuICBib3gtc2l6aW5nOiB1bnNldDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyLWxpbmtzIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWFyZ2luOiAwIDE1cHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xcbiAgLnByb2plY3QtdGh1bWJuYWlsIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gIC5za2lsbC1sb2dvIHtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICB3aWR0aDogMTV2aDtcXG4gIH1cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDN2dyAwIDF2dyAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDO0FBQ0Q7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUNBOztDQUVDO0FBQ0Q7RUFDRSxTQUFTO0VBQ1QsNEJBQTRCO0FBQzlCO0FBQ0E7O0NBRUM7QUFDRDs7RUFFRSxZQUFZO0FB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Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi8qXFxuICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4qL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEb21pbmVcXFwiLCBzZXJpZjtcXG59XFxuLypcXG4gIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXG4qL1xcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi8qXFxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxuICA0LiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcbiovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbi8qXFxuICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxuKi9cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4vKlxcbiAgNy4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4qL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuLypcXG4gIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxuKi9cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi8qXFxuICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXG4qL1xcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjMjIyMDIwO1xcbiAgLS1wcm9qZWN0LWJnLWNvbG9yOiAjMmUyYjJiO1xcbiAgLS1oZWFkLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS10ZXh0LWNvbG9yOiAjZGVkZWRlO1xcbiAgLS10b2dnbGUtbGluazogdXJsKC4vYXNzZXRzL2xpZ2h0LnN2Zykgbm8tcmVwZWF0O1xcbn1cXG5cXG46cm9vdC5saWdodCB7XFxuICAtLWJnLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1wcm9qZWN0LWJnLWNvbG9yOiAjZjJmMmYyO1xcbiAgLS1oZWFkLWNvbG9yOiAjMDAwMDAwO1xcbiAgLS10ZXh0LWNvbG9yOiAjMDAwO1xcbiAgLS10b2dnbGUtbGluazogdXJsKC4vYXNzZXRzL2Rhcmsuc3ZnKSBuby1yZXBlYXQ7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwIDE1dnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm5hdiB7XFxuICAvKiBwb3NpdGlvbjogc3RpY2t5OyAqL1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAvKiB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLXRleHQtY29sb3IpOyAqL1xcbn1cXG5cXG5uYXYgYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdG9nZ2xlLWxpbmspO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbmgxLFxcbmgyLFxcbnAge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZWN0aW9uLWNvbnRhaW5lciB7XFxuICBzY3JvbGwtbWFyZ2luLXRvcDogOXZoO1xcbiAgbWluLWhlaWdodDogODB2aDtcXG59XFxuXFxuLnNlY3Rpb24tY29udGFpbmVyID4gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jaG9tZSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUgPiBoMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwdnc7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmhpZ2hsaWdodC1jb250YWluZXIsXFxuLmhpZ2hsaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaWdobGlnaHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmhpZ2hsaWdodC1jb250YWluZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMXB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjAlIDI1JSAyMCUgMjQlO1xcbiAgcGFkZGluZzogMTBweCAzcHggM3B4IDEwcHg7XFxufVxcblxcbi5oaWdobGlnaHQtYWJvdXQ6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICMxZjYyYzA5NztcXG4gIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xcbn1cXG5cXG4uaGlnaGxpZ2h0LXdvcms6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICNjMTM2MzZhNztcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1dmg7XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcmVzaXplOiBib3RoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNSwgMjUsIDI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWJnLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCA+ICoge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ucHJvamVjdC10aHVtYm5haWwge1xcbiAgLyogYXNwZWN0LXJhdGlvOiAxNi85OyAqL1xcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udGh1bWJuYWlsLWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG4uaWNvbi13cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZ2l0LXdyYXBwZXIge1xcbiAgaGVpZ2h0OiAzdmg7XFxuICB3aWR0aDogM3ZoO1xcbn1cXG5cXG5zdmcge1xcbiAgZmlsbDogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5saXZlLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiAzdmg7XFxuICB3aWR0aDogM3ZoO1xcbn1cXG5cXG4uc2tpbGxzLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uc2tpbGwtbG9nbyB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICB3aWR0aDogMTB2aDtcXG4gIG1hcmdpbjogMTBweCAxNXB4O1xcbn1cXG5cXG4uYWJvdXQtbWUtdGV4dCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcXG59XFxuXFxuI2dvLXRvLXRvcCB7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbi1yaWdodDogMnZ3O1xcbiAgbWFyZ2luLWJvdHRvbTogMnZ3O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiA0dmg7XFxuICB3aWR0aDogNHZoO1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBwYWRkaW5nLXRvcDogNXZ3O1xcbiAgYm94LXNpemluZzogdW5zZXQ7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1saW5rcyB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIG1hcmdpbjogMCAxNXB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcXG4gIC5wcm9qZWN0LXRodW1ibmFpbCB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICB9XFxuXFxuICAuc2tpbGwtbG9nbyB7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgd2lkdGg6IDE1dmg7XFxuICB9XFxuICBmb290ZXIge1xcbiAgICBwYWRkaW5nOiAzdncgMCAxdncgMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jYWxjdWxhdG9yLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9jYWxjdWxhdG9yLnBuZ1wiLFxuXHRcIi4vZGFyay5zdmdcIjogXCIuL3NyYy9hc3NldHMvZGFyay5zdmdcIixcblx0XCIuL2dpdGh1Yi5zdmdcIjogXCIuL3NyYy9hc3NldHMvZ2l0aHViLnN2Z1wiLFxuXHRcIi4vbGlicmFyeS5wbmdcIjogXCIuL3NyYy9hc3NldHMvbGlicmFyeS5wbmdcIixcblx0XCIuL2xpZ2h0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9saWdodC5zdmdcIixcblx0XCIuL3Jlc3RhdXJhbnQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3Jlc3RhdXJhbnQucG5nXCIsXG5cdFwiLi90aHVtYm5haWwucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3RodW1ibmFpbC5wbmdcIixcblx0XCIuL3RpY3RhY3RvZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGljdGFjdG9lLnBuZ1wiLFxuXHRcIi4vdG9kby5wbmdcIjogXCIuL3NyYy9hc3NldHMvdG9kby5wbmdcIixcblx0XCIuL3dlYXRoZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCJmdW5jdGlvbiBpc0RhcmsoKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhcmstbW9kZVwiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGFya0NsYXNzKCkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpO1xuICByb290LmNsYXNzTGlzdC50b2dnbGUoXCJsaWdodFwiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTG9jYWxTdG9yYWdlSXRlbSgpIHtcbiAgaWYgKGlzRGFyaygpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJkYXJrLW1vZGVcIik7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXJrLW1vZGVcIiwgXCJzZXRcIik7XG4gIH1cbn1cblxuZXhwb3J0IHsgdG9nZ2xlTG9jYWxTdG9yYWdlSXRlbSwgdG9nZ2xlRGFya0NsYXNzIH07XG4iLCJpbXBvcnQgRGF0YSBmcm9tIFwiLi9wcm9qZWN0cy5qc29uXCI7XG5cbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIGxldCBhc3NldHMgPSB7fTtcbiAgci5rZXlzKCkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGFzc2V0c1tpdGVtLnJlcGxhY2UoXCIuL1wiLCBcIlwiKV0gPSByKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGFzc2V0cztcbn1cblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKFxuICByZXF1aXJlLmNvbnRleHQoXCIuLi9hc3NldHNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLylcbik7XG5cbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1jb250YWluZXJcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkXCIpO1xuXG4gIGNvbnN0IHByb2plY3RUaHVtYm5haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0VGh1bWJuYWlsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRodW1ibmFpbFwiKTtcblxuICBjb25zdCB0aHVtYm5haWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHRodW1ibmFpbEltYWdlLmNsYXNzTGlzdC5hZGQoXCJ0aHVtYm5haWwtaW1hZ2VcIik7XG4gIHRodW1ibmFpbEltYWdlLnNyYyA9IGltYWdlc1twcm9qZWN0LnRodW1ibmFpbF07XG5cbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBpY29uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJpY29uLXdyYXBwZXJcIik7XG5cbiAgY29uc3QgZ2l0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdpdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImdpdC13cmFwcGVyXCIpO1xuICBjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdExpbmsuaHJlZiA9IHByb2plY3QuY29kZTtcbiAgZ2l0TGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gIGNvbnN0IGdpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgZ2l0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZ2l0LWljb25cIiwgXCJpY29uXCIpO1xuICBnaXRJY29uLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMTAwIDEwMFwiKTtcbiAgZ2l0SWNvbi5pbm5lckhUTUwgPVxuICAgICc8cGF0aCBkPVwiTTQ4Ljg1NCAwQzIxLjgzOSAwIDAgMjIgMCA0OS4yMTdjMCAyMS43NTYgMTMuOTkzIDQwLjE3MiAzMy40MDUgNDYuNjkgMi40MjcuNDkgMy4zMTYtMS4wNTkgMy4zMTYtMi4zNjIgMC0xLjE0MS0uMDgtNS4wNTItLjA4LTkuMTI3LTEzLjU5IDIuOTM0LTE2LjQyLTUuODY3LTE2LjQyLTUuODY3LTIuMTg0LTUuNzA0LTUuNDItNy4xNy01LjQyLTcuMTctNC40NDgtMy4wMTUuMzI0LTMuMDE1LjMyNC0zLjAxNSA0LjkzNC4zMjYgNy41MjMgNS4wNTIgNy41MjMgNS4wNTIgNC4zNjcgNy40OTYgMTEuNDA0IDUuMzc4IDE0LjIzNSA0LjA3NC40MDQtMy4xNzggMS42OTktNS4zNzggMy4wNzQtNi42LTEwLjgzOS0xLjE0MS0yMi4yNDMtNS4zNzgtMjIuMjQzLTI0LjI4MyAwLTUuMzc4IDEuOTQtOS43NzggNS4wMTQtMTMuMi0uNDg1LTEuMjIyLTIuMTg0LTYuMjc1LjQ4Ni0xMy4wMzggMCAwIDQuMTI1LTEuMzA0IDEzLjQyNiA1LjA1MmE0Ni45NyA0Ni45NyAwIDAgMSAxMi4yMTQtMS42M2M0LjEyNSAwIDguMzMuNTcxIDEyLjIxMyAxLjYzIDkuMzAyLTYuMzU2IDEzLjQyNy01LjA1MiAxMy40MjctNS4wNTIgMi42NyA2Ljc2My45NyAxMS44MTYuNDg1IDEzLjAzOCAzLjE1NSAzLjQyMiA1LjAxNSA3LjgyMiA1LjAxNSAxMy4yIDAgMTguOTA1LTExLjQwNCAyMy4wNi0yMi4zMjQgMjQuMjgzIDEuNzggMS41NDggMy4zMTYgNC40ODEgMy4zMTYgOS4xMjYgMCA2LjYtLjA4IDExLjg5Ny0uMDggMTMuNTI2IDAgMS4zMDQuODkgMi44NTMgMy4zMTYgMi4zNjQgMTkuNDEyLTYuNTIgMzMuNDA1LTI0LjkzNSAzMy40MDUtNDYuNjkxQzk3LjcwNyAyMiA3NS43ODggMCA0OC44NTQgMHpcIi8+JztcblxuICBjb25zdCBsaXZlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpdmVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJsaXZlLXdyYXBwZXJcIik7XG4gIGNvbnN0IGxpdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpdmVMaW5rLmhyZWYgPSBwcm9qZWN0LmxpdmU7XG4gIGxpdmVMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgY29uc3QgbGl2ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIFwic3ZnXCJcbiAgKTtcbiAgbGl2ZUljb24uY2xhc3NMaXN0LmFkZChcImxpdmUtaWNvblwiLCBcImljb25cIik7XG4gIGxpdmVJY29uLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjEgMjFcIik7XG4gIGxpdmVJY29uLmlubmVySFRNTCA9IGA8cGF0aCBkPVwiTTE0LDNWNUgxNy41OUw3Ljc2LDE0LjgzTDkuMTcsMTYuMjRMMTksNi40MVYxMEgyMVYzTTE5LDE5SDVWNUgxMlYzSDVDMy44OSwzIDMsMy45IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWMTJIMTlWMTlaXCIgLz5cbiAgYDtcblxuICBnaXRMaW5rLmFwcGVuZENoaWxkKGdpdEljb24pO1xuICBsaXZlTGluay5hcHBlbmRDaGlsZChsaXZlSWNvbik7XG5cbiAgZ2l0V3JhcHBlci5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgbGl2ZVdyYXBwZXIuYXBwZW5kQ2hpbGQobGl2ZUxpbmspO1xuXG4gIGljb25XcmFwcGVyLmFwcGVuZENoaWxkKGdpdFdyYXBwZXIpO1xuICBpY29uV3JhcHBlci5hcHBlbmRDaGlsZChsaXZlV3JhcHBlcik7XG5cbiAgcHJvamVjdFRodW1ibmFpbC5hcHBlbmRDaGlsZCh0aHVtYm5haWxJbWFnZSk7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RUaHVtYm5haWwpO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChpY29uV3JhcHBlcik7XG5cbiAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xufVxuXG5EYXRhLmZvckVhY2goKHByb2plY3QpID0+IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpKTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdENhcmQgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RzXCI7XG5cbmltcG9ydCB7IHRvZ2dsZUxvY2FsU3RvcmFnZUl0ZW0sIHRvZ2dsZURhcmtDbGFzcyB9IGZyb20gXCIuL21vZHVsZXMvZGFya21vZGVcIjtcblxuY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtYnRuXCIpO1xuY29uc3Qgc2Nyb2xsVG9Ub3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dvLXRvLXRvcFwiKTtcblxudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZ2dsZUxvY2FsU3RvcmFnZUl0ZW0oKTtcbiAgdG9nZ2xlRGFya0NsYXNzKCk7XG59KTtcblxuc2Nyb2xsVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=