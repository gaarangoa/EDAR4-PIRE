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

module.exports = "<h1 class=\"text-center\">\n    PIRE: Metagenomics Analysis Update\n</h1>\n<h4 class=\"text-center\"><strong>Gustavo Arango</strong> - Virginia Tech</h4>\n\n<div class=\"col-md-12\">\n    <div class=\"box box-solid\">\n        <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/page1/1.svg\"></object>\n    </div>\n</div>\n\n<div class=\"col-md-12\">\n    <div class=\"box box-solid box-primary\">\n        <div class=\"box-header text-center\">\n            <h2>MetaStorm</h2>\n        </div>\n        <div class=\"box-body\">\n            <!--Metastorm  -->\n            <div class=\"col-md-12\">\n                <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/metastorm/ms.svg\"></object>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<div class=\"col-md-12\">\n    <div class=\"box box-solid box-success\">\n        <div class=\"box-header text-center\">\n            <h2>DeepARG</h2>\n        </div>\n        <div class=\"box-body\">\n\n            <div class=\"col-md-12\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <strong><h3 class=\"text-center\">Best Hit Approach</h3></strong>\n                        <strong>Pros:</strong>\n                        <ul>\n                            <li>Works well for identifying high conserved genes (16S rRNA).</li>\n                            <li>Its widely used for functional metagenomics annotation.</li>\n                            <li>Low false positive rate (nonARGs as ARGs). But, as consecuence only a small number of alignments survive the cutoffs</li>\n                        </ul>\n                        <strong>Cons:</strong>\n                        <ul>\n                            <li>It depends on strict alignment cutoffs (80% to 90% identity,`\n                                <1e-5 evalues, 75% coverage).</li>\n                                    <li>High false negative rate (ARGs as nonARGs).</li>\n                        </ul>\n                    </div>\n                </div>\n                <!-- <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/deeparg/dr.svg\"></object> -->\n            </div>\n\n            <!--Metastorm  -->\n            <div class=\"col-md-12\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <strong><h3 class=\"text-center\">Effect of high identity cutoff</h3></strong>\n                        <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/deeparg/dr1.svg\"></object>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <strong><h3 class=\"text-center\">Extending the ARGs database</h3></strong>\n                        <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/deeparg/dr2.svg\"></object>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <strong><h3 class=\"text-center\">Deep learning model</h3></strong>\n                        <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/deeparg/dr3.svg\"></object>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <strong><h3 class=\"text-center\">Results</h3></strong>\n                        <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/deeparg/dr4.svg\"></object>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"col-md-12\">\n    <div class=\"box box-solid box-warning\">\n        <div class=\"box-header text-center\">\n            <h2>ARG - Nanopore</h2>\n        </div>\n        <div class=\"box-body\">\n            <div class=\"col-md-5\">\n                <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/nanopore/fig1.svg\"></object>\n            </div>\n            <div class=\"col-md-7\">\n                <div class=\"box box-solid\">\n                    <div class=\"box-body\">\n                        <h4>\n                            <ul>\n                                <li>\n                                    <strong>Develop</strong> a web platform for the analysis of antibiotic resistance genes obtained from metagenomics samples (100%).\n                                    <ul>\n                                        <li>Environmental metagenomes don't have enough deep coverage (read correction). Therefore, we need to use a method to identify potental ARGs with low percentage of identity.</li>\n                                        <li>Annotation is done using Hidden Markov Models (resfams database) <span class=\"label bg-red\">too slow!</span>.</li>\n                                        <li>Alternatives: annotation using the <strong>deepARG-LS</strong> model.</li>\n                                    </ul>\n                                </li>\n                                <li>\n                                    <strong>Integrate:</strong>\n                                    <ul>\n                                        <li>Identify metal and biocides resistance genes.</li>\n                                        <li>Determine if reads have evidence to being present in: Integrons, Plasmids, Transposons, Viruses.</li>\n                                        <li>Determine the structure of the long reads e.g., co-occurrence of genes. It can help to the discovery of novel ARG arrangements.</li>\n                                    </ul>\n                                </li>\n\n                                <li>\n                                    Web platform is developed using good software engineering practices (design patterns) which makes it modular (plug/unplug new features).\n                                </li>\n\n                            </ul>\n                        </h4>\n                    </div>\n                    <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/nanopore/fig2.svg\"></object>\n                    <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/nanopore/fig3.svg\"></object>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"col-md-12\">\n    <div class=\"box box-solid box-primary\">\n        <div class=\"box-header text-center\">\n            <h2>ARGFast</h2>\n        </div>\n        <div class=\"box-body\">\n            <div class=\"col-md-6\">\n                <h4>\n                    <ul>\n                        <li>\n                            We have observed several studies where the sequence alignments are done by looking at <strong>high identity cutoffs</strong> (identity>80%-90%) and coverage (~25aa 75nt 75%). These studies focus the analysis on the quantification\n                            of known ARGs rather than in the detection or identification of novel ARGs.\n                        </li>\n                        <li>\n                            Sequence alignment is a <strong>costly process</strong> (global or local - dynamic programing) O(mn). If there are two sequences of the same length, the processing time is quadratic!\n                        </li>\n                        <li>\n                            Short sequence reads have a small sequencing error rate of around 0.1%.\n                        </li>\n                        <li>\n                            We developed an alignment free method for DNA to Nucleotide sequences comparison by using:\n                            <ul>\n                                <li>\n                                    Natual Language Processing Techniques <span class=\"badge bg-blue\">Facebook</span>.\n                                </li>\n                                <li>\n                                    Fast hashing strategies <span class=\"badge bg-red\">Google</span>.\n                                </li>\n                                <li>\n                                    Fast amino acid/nucleotide sequence manipulation <span class=\"badge bg-green\">SeqAnn</span>.\n                                </li>\n                                <li>\n                                    Reduced amino acid alphabet.\n                                </li>\n                            </ul>\n                        </li>\n                        <li>\n                            Predict the label of short sequence reads by looking at the kmers distribution by projecting the kmer space into a smaller set (neural network - embedings). For example: Antibiotic resistance categories.\n                        </li>\n                        <li>\n                            Sequence comparison is made at the <strong>protein</strong> (not nucleotide) level. This implies that the algorithm transforms the nucleotide sequence into an amino acid sequence. Pretty much what <strong>BlastX</strong> does.\n                            Nucleotide homology is only detectable at high sequence similarity.\n                        </li>\n                        <li>\n                            Developed in <strong>C++</strong> and <span class=\"badge bg-blue\">open source</span>. But, not released yet!\n                        </li>\n                    </ul>\n                    <hr>\n                    <strong>Preliminary data analysis - dataset:</strong>\n                    <hr>\n                    <p>Full dataset: 2,060,064</p>\n                    <p>Positive: 1,568,950</p>\n                    <p>Negative: 491,114</p>\n                    <hr>\n                    <div class=\"col-md-6\">\n                        <strong>Diamond (best hit) prediction</strong>\n                        <hr>\n                        <p>ARG-like sequences: 1,169,375 (74%)</p>\n                        <p>False positives: 3078</p>\n                        <p>Precision: 0.99</p>\n                        <p>Recall: 1.00</p>\n                        <strong><p>Time: 8min 38sec</p></strong>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <strong>ARG-fast prediction</strong>\n                        <hr>\n                        <p>ARG-like sequences: 1,095,033 (70%)</p>\n                        <p>False positives: 4642</p>\n                        <p>Precision: 0.98</p>\n                        <p>Recall: 0.98</p>\n                        <strong><p>Time: 15 sec</p></strong>\n                    </div>\n                </h4>\n            </div>\n            <div class=\"col-md-6\">\n                <object id=\"page1\" type=\"image/svg+xml\" data=\"assets/predx/img1.svg\"></object>\n            </div>\n        </div>\n    </div>\n</div>"

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