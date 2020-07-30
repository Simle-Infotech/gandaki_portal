(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics-statistics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/statistics/statistics.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/statistics/statistics.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"app-inner-layout\">\n    <div class=\"row\">\n      <div class=\"col-md-12 mx-auto\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Dashboard\n          </div>\n          <div class=\"card-body\">\n            <!--<ngb-carousel *ngIf=\"images\">\n              <ng-template ngbSlide>\n                <img [src]=\"images[0]\" width=\"100%\" alt=\"Random first slide\">\n                &lt;!&ndash;<div class=\"carousel-caption\">\n                  <h3>Gandaki Province Data Admin Portal</h3>\n                  <p>Add/Edit tables as well as perform data entry for tables from here.</p>\n                </div>&ndash;&gt;\n              </ng-template>\n            </ngb-carousel>-->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-6 col-xl-6\">\n        <div class=\"mb-3 card\">\n          <div class=\"card-header-tab card-header\">\n            <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n              <i class=\"header-icon lnr-dice mr-3 text-muted opacity-6\"> </i>\n              तालिका\n            </div>\n<!--            <div class=\"btn-actions-pane-right actions-icon-btn\" ngbDropdown>\n              <button class=\"btn btn-icon btn-icon-only btn-link\" ngbDropdownToggle>\n                <fa name=\"th\"></fa>\n              </button>\n              <div ngbDropdownMenu>\n                <button type=\"button\" tabindex=\"0\" class=\"dropdown-item\"><i class=\"dropdown-icon lnr-inbox\">\n                </i><span>Menus</span>\n                </button>\n                <button type=\"button\" tabindex=\"0\" class=\"dropdown-item\"><i class=\"dropdown-icon lnr-file-empty\">\n                </i><span>Settings</span></button>\n                <button type=\"button\" tabindex=\"0\" class=\"dropdown-item\"><i class=\"dropdown-icon lnr-book\">\n                </i><span>Actions</span>\n                </button>\n                <div class=\"dropdown-divider\"></div>\n                <div class=\"p-1 text-right\">\n                  <button class=\"mr-2 btn-shadow btn-sm btn btn-link\">View Details</button>\n                  <button class=\"mr-2 btn-shadow btn-sm btn btn-primary\">Action</button>\n                </div>\n              </div>\n            </div>-->\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"align-middle mb-0 table table-borderless table-striped table-hover\">\n              <thead>\n              <tr>\n                <th class=\"text-center\">#</th>\n                <th class=\"text-center\">तालिका सूची</th>\n                <th class=\"text-center\">कार्यहरू</th>\n              </tr>\n              </thead>\n              <tbody>\n              <ng-container *ngFor=\"let menuItem of menuItems\">\n                <ng-container *ngFor=\"let subMenuItem of menuItem.subForms\">\n\n                </ng-container>\n\n                <tr *ngFor=\"let menuTable of menuItem.tables\">\n                  <td class=\"text-center text-muted\">{{ menuTable.id }}</td>\n                  <td class=\"text-center\">{{ menuTable.nepali_name }}</td>\n\n                  <td class=\"text-center\">\n                    <button (click)=\"navigateToTable(menuTable.id)\" type=\"button\" class=\"btn btn-primary btn-sm\">विवरण</button>\n                  </td>\n                </tr>\n              </ng-container>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12 col-lg-6 col-xl-6\">\n        <div class=\"mb-3 card\">\n          <div class=\"card-header-tab card-header\">\n            <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n              <i class=\"header-icon lnr-dice mr-3 text-muted opacity-6\"> </i>\n\n              फारामहरू\n            </div>\n            <!--            <div class=\"btn-actions-pane-right actions-icon-btn\" ngbDropdown>\n                          <button class=\"btn btn-icon btn-icon-only btn-link\" ngbDropdownToggle>\n                            <fa name=\"th\"></fa>\n                          </button>\n                          <div ngbDropdownMenu>\n                            <button type=\"button\" tabindex=\"0\" class=\"dropdown-item\"><i class=\"dropdown-icon lnr-inbox\">\n                            </i><span>Menus</span>\n                            </button>\n                            <button type=\"button\" tabindex=\"0\" class=\"dropdown-item\"><i class=\"dropdown-icon lnr-file-empty\">\n                            </i><span>Settings</span></button>\n                            <button type=\"button\" tabindex=\"0\" class=\"dropdown-item\"><i class=\"dropdown-icon lnr-book\">\n                            </i><span>Actions</span>\n                            </button>\n                            <div class=\"dropdown-divider\"></div>\n                            <div class=\"p-1 text-right\">\n                              <button class=\"mr-2 btn-shadow btn-sm btn btn-link\">View Details</button>\n                              <button class=\"mr-2 btn-shadow btn-sm btn btn-primary\">Action</button>\n                            </div>\n                          </div>\n                        </div>-->\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"align-middle mb-0 table table-borderless table-striped table-hover\">\n              <thead>\n              <tr>\n                <th class=\"text-center\">#</th>\n                <th class=\"text-center\">फाराम सूची</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let menuTable of menuItems\">\n                <td class=\"text-center text-muted\">{{ menuTable.id }}</td>\n                <td class=\"text-center\">{{ menuTable.title }}</td>\n              </tr>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

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

/***/ "./src/app/DemoPages/Admin/statistics/statistics-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/DemoPages/Admin/statistics/statistics-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: StatisticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsRoutingModule", function() { return StatisticsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics.component */ "./src/app/DemoPages/Admin/statistics/statistics.component.ts");




var routes = [
    {
        path: '',
        component: _statistics_component__WEBPACK_IMPORTED_MODULE_3__["StatisticsComponent"],
        data: {
            title: 'Statistics'
        }
    }
];
var StatisticsRoutingModule = /** @class */ (function () {
    function StatisticsRoutingModule() {
    }
    StatisticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StatisticsRoutingModule);
    return StatisticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/statistics/statistics.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/DemoPages/Admin/statistics/statistics.component.ts ***!
  \********************************************************************/
/*! exports provided: ROUTES, StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ROUTES = [];
var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(generalService, router) {
        this.generalService = generalService;
        this.router = router;
        this.images = [];
        this.menuItems = [];
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images.push("http://202.45.146.221/media/1/6gandaki.jpg");
        this.generalService.getSidebar().subscribe(function (response) {
            _this.responseData = response.data;
            _this.responseData.forEach(function (value) {
                value.tables.forEach(function (table) {
                    table.url = '/admin/tables/details/' + table.id;
                });
                _this.menuItems.push({
                    path: '/admin/',
                    title: value.nepali_name,
                    icon: 'list',
                    class: '',
                    subForms: value.sub_forms,
                    tables: value.tables,
                    id: value.id
                });
            });
        });
    };
    StatisticsComponent.prototype.navigateToTable = function (tableId) {
        this.router.navigate(['/admin/tables/details/' + tableId]);
    };
    StatisticsComponent.ctorParameters = function () { return [
        { type: _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/statistics/statistics.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/statistics/statistics.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/DemoPages/Admin/statistics/statistics.module.ts ***!
  \*****************************************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./statistics.component */ "./src/app/DemoPages/Admin/statistics/statistics.component.ts");
/* harmony import */ var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistics-routing.module */ "./src/app/DemoPages/Admin/statistics/statistics-routing.module.ts");
/* harmony import */ var _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Layout/Components/page-title/page-title.module */ "./src/app/Layout/Components/page-title/page-title.module.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");













var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _statistics_routing_module__WEBPACK_IMPORTED_MODULE_8__["StatisticsRoutingModule"], _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_9__["PageTitleModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_10__["SlickCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            ],
            declarations: [_statistics_component__WEBPACK_IMPORTED_MODULE_7__["StatisticsComponent"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                    // DROPZONE_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }
            ],
        })
    ], StatisticsModule);
    return StatisticsModule;
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
//# sourceMappingURL=statistics-statistics-module.js.map