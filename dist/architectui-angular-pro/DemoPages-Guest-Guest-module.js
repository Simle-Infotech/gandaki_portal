(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DemoPages-Guest-Guest-module"],{

/***/ "./src/app/DemoPages/Guest/Guest-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/DemoPages/Guest/Guest-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GuestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestRoutingModule", function() { return GuestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            title: 'Application',
            status: false
        },
        children: [
            {
                path: 'analytics',
                loadChildren: function () { return __webpack_require__.e(/*! import() | analytics-analytics-module */ "analytics-analytics-module").then(__webpack_require__.bind(null, /*! ./analytics/analytics.module */ "./src/app/DemoPages/Guest/analytics/analytics.module.ts")).then(function (m) { return m.AnalyticsModule; }); }
            },
            {
                path: 'tables',
                loadChildren: function () { return Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("default~forms-forms-module~subForms-subForms-module~tables-tables-module"), __webpack_require__.e("default~pages-pages-module~tables-tables-module"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ./tables/tables.module */ "./src/app/DemoPages/Guest/tables/tables.module.ts")).then(function (m) { return m.TablesModule; }); }
            },
            {
                path: 'forms',
                loadChildren: function () { return Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~forms-forms-module~subForms-subForms-module~tables-tables-module"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "./src/app/DemoPages/Guest/forms/forms.module.ts")).then(function (m) { return m.FormsModule; }); }
            },
            {
                path: 'pages',
                loadChildren: function () { return Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~pages-pages-module~tables-tables-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/DemoPages/Guest/pages/pages.module.ts")).then(function (m) { return m.PagesModule; }); }
            },
            {
                path: 'search',
                loadChildren: function () { return __webpack_require__.e(/*! import() | search-search-module */ "search-search-module").then(__webpack_require__.bind(null, /*! ./search/search.module */ "./src/app/DemoPages/Guest/search/search.module.ts")).then(function (m) { return m.SearchModule; }); }
            },
        ]
    }
];
var GuestRoutingModule = /** @class */ (function () {
    function GuestRoutingModule() {
    }
    GuestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GuestRoutingModule);
    return GuestRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Guest/Guest.module.ts":
/*!*************************************************!*\
  !*** ./src/app/DemoPages/Guest/Guest.module.ts ***!
  \*************************************************/
/*! exports provided: GuestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestModule", function() { return GuestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Guest_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Guest-routing.module */ "./src/app/DemoPages/Guest/Guest-routing.module.ts");




var GuestModule = /** @class */ (function () {
    function GuestModule() {
    }
    GuestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _Guest_routing_module__WEBPACK_IMPORTED_MODULE_3__["GuestRoutingModule"],
            ],
            declarations: []
        })
    ], GuestModule);
    return GuestModule;
}());



/***/ })

}]);
//# sourceMappingURL=DemoPages-Guest-Guest-module.js.map