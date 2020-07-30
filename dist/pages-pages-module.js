(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/pages/pages.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/pages/pages.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 20px;\">\n  <div class=\"mb-3 card\">\n    <div class=\"card-header-tab card-header\">\n      <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n        <i class=\"header-icon lnr-charts icon-gradient bg-happy-green\"> </i>\n        पृष्ठ\n      </div>\n      <!--<div class=\"btn-actions-pane-right text-capitalize\">\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" >Add new row</button>\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\">Save data</button>\n      </div>-->\n    </div>\n    <div class=\"no-gutters row\">\n    <div class=\"col-sm-12 col-md-12\">\n      <br>\n      <mat-form-field style=\"padding: 15px;\">\n        <mat-select  placeholder=\"Select a Page\" [(value)]=\"selectedPage\" (selectionChange)=\"changePage()\">\n          <mat-option value=\"data\" selected=\"true\">Data</mat-option>\n          <mat-option value=\"insights\">Insights</mat-option>\n          <mat-option value=\"organization-structure\">Organization Structure</mat-option>\n          <mat-option value=\"publications\">Publications</mat-option>\n          <mat-option value=\"recent-publications\">Recent Publications</mat-option>\n          <mat-option value=\"news\">News</mat-option>\n          <mat-option value=\"recent-news\">Recent News</mat-option>\n          <mat-option value=\"introduction\">Introduction</mat-option>\n          <mat-option value=\"about-us\">About us</mat-option>\n          <mat-option value=\"others\">Others</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <br>\n      <angular-editor [(ngModel)]=\"selectedPageContent\" [config]=\"editorConfig\"></angular-editor>\n      <br>\n      <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"saveData()\" >Save</button>\n    </div>\n  </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Guest/pages/pages.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Guest/pages/pages.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 20px;\">\n  <div class=\"mb-3 card\">\n    <!--<div class=\"card-header-tab card-header\">\n      <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n        <i class=\"header-icon lnr-charts icon-gradient bg-happy-green\"> </i>\n        पृष्ठ\n      </div>\n    </div>-->\n    <div class=\"no-gutters row card-body\">\n      <div class=\"col-sm-12 col-md-12\" [innerHTML]=\"selectedContent\">\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Layout/Components/page-title/page-title.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Layout/Components/page-title/page-title.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-page-title\">\n  <div class=\"page-title-wrapper\">\n    <div class=\"page-title-heading\">\n      <div class=\"page-title-icon\">\n<!--        <i class=\"icon {{icon}}\"></i>-->\n      </div>\n      <div>\n<!--        {{heading}}-->\n        <div class=\"page-title-subheading\">\n<!--          {{subheading}}-->\n        </div>\n      </div>\n    </div>\n    <!--<div class=\"page-title-actions\">\n      <button type=\"button\" class=\"btn-shadow mr-3 btn btn-dark\">\n        <fa name=\"star\"></fa>\n      </button>\n      <button type=\"button\" class=\"btn-shadow d-inline-flex align-items-center btn btn-success\">\n        <fa class=\"mr-2\" name=\"plus\"></fa>\n        Create New\n      </button>\n    </div>-->\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/DemoPages/Admin/pages/pages-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/DemoPages/Admin/pages/pages-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/DemoPages/Admin/pages/pages.component.ts");




var routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
        data: {
            title: 'Pages'
        }
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/pages/pages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/DemoPages/Admin/pages/pages.component.ts ***!
  \**********************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var PagesComponent = /** @class */ (function () {
    function PagesComponent(router, generalService) {
        this.router = router;
        this.generalService = generalService;
        this.selectedPage = 'data';
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: '400px',
            minHeight: '0',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            uploadUrl: 'v1/image',
        };
    }
    PagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("On init");
        this.generalService.getPage(this.selectedPage).subscribe(function (response) {
            _this.selectedPageId = response.data._id;
            _this.selectedPageContent = response.data.content;
        });
    };
    PagesComponent.prototype.changePage = function () {
        var _this = this;
        this.generalService.getPage(this.selectedPage).subscribe(function (response) {
            _this.selectedPageId = response.data._id;
            _this.selectedPageContent = response.data.content;
        });
    };
    PagesComponent.prototype.saveData = function () {
        var _this = this;
        console.log("save data");
        console.log(this.selectedPage);
        console.log(this.selectedPageContent);
        var data = {
            _id: this.selectedPageId,
            slug: this.selectedPage,
            content: this.selectedPageContent
        };
        var currentData = {
            data: data
        };
        console.log(currentData);
        this.generalService.savePage(currentData).subscribe(function (response) {
            _this.selectedPageId = response.data[0]._id;
            _this.showAlert("Page saved successfully");
        });
    };
    PagesComponent.prototype.showAlert = function (message) {
        this.swalSuccess(message);
    };
    PagesComponent.prototype.swalSuccess = function (message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    };
    PagesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"] }
    ]; };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-pages',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/pages/pages.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/pages/pages.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/DemoPages/Admin/pages/pages.module.ts ***!
  \*******************************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Layout/Components/page-title/page-title.module */ "./src/app/Layout/Components/page-title/page-title.module.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/DemoPages/Admin/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages.component */ "./src/app/DemoPages/Admin/pages/pages.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");













var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagesRoutingModule"], _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_5__["PageTitleModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__["AngularEditorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ],
            declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_7__["PagesComponent"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
                    // DROPZONE_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }
            ],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Guest/pages/pages-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/DemoPages/Guest/pages/pages-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/DemoPages/Guest/pages/pages.component.ts");




var routes = [
    {
        path: ':slug',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
        data: {
            title: 'Pages'
        }
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Guest/pages/pages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/DemoPages/Guest/pages/pages.component.ts ***!
  \**********************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/general.service */ "./src/app/services/general.service.ts");




var PagesComponent = /** @class */ (function () {
    function PagesComponent(generalService, router, activatedRoute) {
        this.generalService = generalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.selectedPageSlug = paramsId.slug;
            _this.generalService.getPage(_this.selectedPageSlug).subscribe(function (response) {
                _this.selectedContent = response.data.content;
            });
        });
    };
    PagesComponent.prototype.navigateToTable = function (tableId) {
        this.router.navigate(['/guest/tables/' + tableId]);
    };
    PagesComponent.ctorParameters = function () { return [
        { type: _services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-guest-pages',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Guest/pages/pages.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Guest/pages/pages.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/DemoPages/Guest/pages/pages.module.ts ***!
  \*******************************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Layout/Components/page-title/page-title.module */ "./src/app/Layout/Components/page-title/page-title.module.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/DemoPages/Guest/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages.component */ "./src/app/DemoPages/Guest/pages/pages.component.ts");











var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_8__["PagesRoutingModule"], _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"]
            ],
            declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_9__["PagesComponent"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                    // DROPZONE_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }
            ],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/Layout/Components/page-title/page-title-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Layout/Components/page-title/page-title-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PageTitleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleRoutingModule", function() { return PageTitleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-title.component */ "./src/app/Layout/Components/page-title/page-title.component.ts");




var routes = [
    {
        path: '',
        component: _page_title_component__WEBPACK_IMPORTED_MODULE_3__["PageTitleComponent"],
        data: {
            title: 'PageTitle'
        }
    }
];
var PageTitleRoutingModule = /** @class */ (function () {
    function PageTitleRoutingModule() {
    }
    PageTitleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PageTitleRoutingModule);
    return PageTitleRoutingModule;
}());



/***/ }),

/***/ "./src/app/Layout/Components/page-title/page-title.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Layout/Components/page-title/page-title.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageTitleComponent = /** @class */ (function () {
    function PageTitleComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageTitleComponent.prototype, "heading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageTitleComponent.prototype, "subheading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageTitleComponent.prototype, "icon", void 0);
    PageTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-title',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-title.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Layout/Components/page-title/page-title.component.html")).default,
        })
    ], PageTitleComponent);
    return PageTitleComponent;
}());



/***/ }),

/***/ "./src/app/Layout/Components/page-title/page-title.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Layout/Components/page-title/page-title.module.ts ***!
  \*******************************************************************/
/*! exports provided: PageTitleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleModule", function() { return PageTitleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _page_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-title.component */ "./src/app/Layout/Components/page-title/page-title.component.ts");
/* harmony import */ var _page_title_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-title-routing.module */ "./src/app/Layout/Components/page-title/page-title-routing.module.ts");






var PageTitleModule = /** @class */ (function () {
    function PageTitleModule() {
    }
    PageTitleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                _page_title_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageTitleRoutingModule"],
            ],
            declarations: [_page_title_component__WEBPACK_IMPORTED_MODULE_4__["PageTitleComponent"]],
            exports: [_page_title_component__WEBPACK_IMPORTED_MODULE_4__["PageTitleComponent"]]
        })
    ], PageTitleModule);
    return PageTitleModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map