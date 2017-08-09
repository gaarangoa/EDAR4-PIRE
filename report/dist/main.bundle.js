webpackJsonp([2,4],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">\n    PIRE: Metagenomics Analysis Update\n</h1>\n<h4 class=\"text-center\"><strong>Gustavo Arango</strong> - Virginia Tech</h4>\n\n<div class=\"col-md-12\">\n    <div class=\"box box-solid\">\n        <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/page1/1.svg\"></object>\n    </div>\n</div>\n\n<div class=\"col-md-12\">\n    <div class=\"box box-solid box-primary\">\n        <div class=\"box-header text-center\">\n            <!-- <h2>MetaStorm</h2> -->\n        </div>\n        <div class=\"box-body\">\n            <!--Metastorm  -->\n            <div class=\"col-md-12\">\n                <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/metastorm/ms.svg\"></object>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n<div class=\"col-md-12\">\n    <div class=\"box box-solid box-success\">\n        <div class=\"box-header text-center\">\n            <h2>DeepARG</h2>\n        </div>\n        <div class=\"box-body\">\n\n            <div class=\"col-md-12\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <strong><h3 class=\"text-center\">Best Hit Approach</h3></strong>\n                        <strong>Pros:</strong>\n                        <ul>\n                            <li>Works well for identifying high conserved genes (16S rRNA).</li>\n                            <li>Its widely used for functional metagenomics annotation.</li>\n                            <li>Low false positive rate (nonARGs as ARGs). But, as consecuence only a small number of alignments survive the cutoffs</li>\n                        </ul>\n                        <strong>Cons:</strong>\n                        <ul>\n                            <li>It depends on strict alignment cutoffs (80%-90% identity,\n                                <1e-5 evalues, 75% coverage).</li>\n                                    <li>High false negative rate (ARGs as nonARGs).</li>\n                        </ul>\n                    </div>\n                </div>\n                <!-- <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/deeparg/dr.svg\"></object> -->\n            </div>\n\n            <!--Metastorm  -->\n            <div class=\"col-md-12\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <strong><h3 class=\"text-center\">Effect of high identity cutoff</h3></strong>\n                        <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/deeparg/dr1.svg\"></object>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <strong><h3 class=\"text-center\">Extending the ARGs database</h3></strong>\n                        <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/deeparg/dr2.svg\"></object>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <strong><h3 class=\"text-center\">Deep learning model</h3></strong>\n                        <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/deeparg/dr3.svg\"></object>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <strong><h3 class=\"text-center\">Results</h3></strong>\n                        <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/deeparg/dr4.svg\"></object>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 73;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(143),
        styles: [__webpack_require__(141)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[170]);
//# sourceMappingURL=main.bundle.js.map