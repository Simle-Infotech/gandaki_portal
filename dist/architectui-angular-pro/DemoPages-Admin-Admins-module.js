(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DemoPages-Admin-Admins-module"],{

/***/ "./src/app/DemoPages/Admin/Admins-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/DemoPages/Admin/Admins-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AdminsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsRoutingModule", function() { return AdminsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        data: {
            title: 'Dashboards',
            status: false
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: function () { return __webpack_require__.e(/*! import() | statistics-statistics-module */ "statistics-statistics-module").then(__webpack_require__.bind(null, /*! ./statistics/statistics.module */ "./src/app/DemoPages/Admin/statistics/statistics.module.ts")).then(function (m) { return m.StatisticsModule; }); }
            },
            {
                path: 'statistics',
                loadChildren: function () { return __webpack_require__.e(/*! import() | statistics-statistics-module */ "statistics-statistics-module").then(__webpack_require__.bind(null, /*! ./statistics/statistics.module */ "./src/app/DemoPages/Admin/statistics/statistics.module.ts")).then(function (m) { return m.StatisticsModule; }); }
            },
            {
                path: 'tables',
                loadChildren: function () { return Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("default~forms-forms-module~subForms-subForms-module~tables-tables-module"), __webpack_require__.e("default~pages-pages-module~tables-tables-module"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ./tables/tables.module */ "./src/app/DemoPages/Admin/tables/tables.module.ts")).then(function (m) { return m.TablesModule; }); }
            },
            {
                path: 'forms',
                loadChildren: function () { return Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~forms-forms-module~subForms-subForms-module~tables-tables-module"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "./src/app/DemoPages/Admin/forms/forms.module.ts")).then(function (m) { return m.FormsModule; }); }
            },
            {
                path: 'sub_forms/:id',
                loadChildren: function () { return Promise.all(/*! import() | subForms-subForms-module */[__webpack_require__.e("default~forms-forms-module~subForms-subForms-module~tables-tables-module"), __webpack_require__.e("subForms-subForms-module")]).then(__webpack_require__.bind(null, /*! ./subForms/subForms.module */ "./src/app/DemoPages/Admin/subForms/subForms.module.ts")).then(function (m) { return m.SubFormsModule; }); }
            },
            {
                path: 'user',
                loadChildren: function () { return __webpack_require__.e(/*! import() | user-user-module */ "user-user-module").then(__webpack_require__.bind(null, /*! ./user/user.module */ "./src/app/DemoPages/Admin/user/user.module.ts")).then(function (m) { return m.UserModule; }); }
            },
            {
                path: 'pages',
                loadChildren: function () { return Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("default~pages-pages-module~tables-tables-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/DemoPages/Admin/pages/pages.module.ts")).then(function (m) { return m.PagesModule; }); }
            },
        ]
    }
];
var AdminsRoutingModule = /** @class */ (function () {
    function AdminsRoutingModule() {
    }
    AdminsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminsRoutingModule);
    return AdminsRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/Admins.module.ts":
/*!**************************************************!*\
  !*** ./src/app/DemoPages/Admin/Admins.module.ts ***!
  \**************************************************/
/*! exports provided: AdminsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsModule", function() { return AdminsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Admins_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Admins-routing.module */ "./src/app/DemoPages/Admin/Admins-routing.module.ts");




var AdminsModule = /** @class */ (function () {
    function AdminsModule() {
    }
    AdminsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _Admins_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminsRoutingModule"],
            ],
            declarations: []
        })
    ], AdminsModule);
    return AdminsModule;
}());



/***/ })

}]);
//# sourceMappingURL=DemoPages-Admin-Admins-module.js.map