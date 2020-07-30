(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Guest/analytics/analytics.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Guest/analytics/analytics.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-page-title\">\n  <div class=\"page-title-wrapper\">\n    <div class=\"page-title-heading\">\n      <div>\n        गण्डकी प्रदेशको तथ्याङ्क पोर्टल\n        <div class=\"page-title-subheading\">\n          <!-- प्रदेश सरकारो नीति तथा योजना आयोगद्वारा निर्माणमा ल्याइएको यस प्रणालीमा विभिन्न विकस क्षेत्रहरुको आर्थिक, राजनैनितक, भोगोलिक, र अन्न सुचनाहरु समावेश गरिएको छ । -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"main-card mb-3 card\">\n      <div class=\"card-body\">\n        <h5>खण्डहरु</h5>\n        <ng-container *ngFor=\"let menuItem of menuItems\">\n          <div class=\"font-icon-wrapper float-left mr-3 mb-3\">\n            <div class=\"loader-wrapper d-flex justify-content-center align-items-center\">\n              <div class=\"loader\"><a href=\"/#/guest/tables/{{menuItem.id}}\">\n                <img src=\"{{menuItem.icon_path}}\" alt=\"\" width=\"80\"></a>\n              </div>\n            </div>\n            <p>{{menuItem.nepali_name}}</p>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6 col-xl-4\">\n    <div class=\"card mb-3 widget-chart\">\n      <div class=\"widget-chart-content\">\n        <div class=\"icon-wrapper rounded\">\n          <div class=\"icon-wrapper-bg bg-warning\"></div>\n          <i class=\"lnr-database\"></i>\n        </div>\n        <div class=\"widget-numbers\">\n          <span>१</span>\n        </div>\n        <div class=\"widget-subheading fsize-1 pt-2 opacity-10 text-warning font-weight-bold\">जम्मा खण्डहरु</div>\n      </div>\n      <div class=\"widget-chart-wrapper\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6 col-xl-4\">\n    <div class=\"card mb-3 widget-chart\">\n      <div class=\"widget-chart-content\">\n        <div class=\"icon-wrapper rounded\">\n          <div class=\"icon-wrapper-bg bg-danger\"></div>\n          <i class=\"lnr-list text-danger\"></i>\n        </div>\n        <div class=\"widget-numbers\"><span>२</span></div>\n        <div class=\"widget-subheading fsize-1 pt-2 opacity-10 text-danger font-weight-bold\">\n          जम्मा तालिकाहरु\n        </div>\n      </div>\n      <div class=\"widget-chart-wrapper\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-12 col-xl-4\">\n    <div class=\"card mb-3 widget-chart\">\n      <div class=\"widget-chart-content\">\n        <div class=\"icon-wrapper rounded\">\n          <div class=\"icon-wrapper-bg bg-info\"></div>\n          <i class=\"lnr-database\"></i>\n        </div>\n        <div class=\"widget-numbers text-danger\"><span>४०</span></div>\n        <div class=\"widget-subheading fsize-1 pt-2 opacity-10 text-info font-weight-bold\">सुचकहरुको संख्या</div>\n      </div>\n      <div class=\"widget-chart-wrapper\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div>\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <div class=\"mb-3 card\" style=\"height: 300px;\">\n        <div class=\"card-header-tab card-header\">\n          <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n            तालिका\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"align-middle mb-0 table table-borderless table-striped table-hover\">\n            <thead>\n            <tr>\n              <th class=\"text-center\">#</th>\n              <th class=\"text-center\">तालिका सूची</th>\n              <th class=\"text-center\">कार्यहरू</th>\n            </tr>\n            </thead>\n            <tbody>\n            <ng-container *ngFor=\"let menuItem of menuItems\">\n              <ng-container *ngFor=\"let subMenuItem of menuItem.subForms\">\n\n              </ng-container>\n\n              <tr *ngFor=\"let menuTable of menuItem.tables; index as i\">\n                <td class=\"text-center text-muted\" style=\"font-family: 'Fontasy Himali'\">{{i+1}}</td>\n                <td class=\"text-center\">{{ menuTable.nepali_name }}</td>\n\n                <td class=\"text-center\">\n                  <button (click)=\"navigateToTable(menuTable.id)\" type=\"button\" class=\"btn btn-primary btn-sm\">विवरण</button>\n                </td>\n              </tr>\n            </ng-container>\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6\" mx-auto>\n      <div class=\"mb-3 card\" style=\"height: 300px;\" >\n        <div class=\"card-header-tab card-header\">\n          <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n            खण्ड सुची\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"align-middle mb-0 table table-borderless table-striped table-hover\">\n            <thead>\n            <tr>\n              <th class=\"text-center\">#</th>\n              <th class=\"text-center\">खण्ड</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let menuTable of menuItems; index as i\">\n              <td class=\"text-center text-muted\" style=\"font-family: 'Fontasy Himali'\">{{ i + 1 }}</td>\n              <td class=\"text-center\">{{ menuTable.title }}</td>\n            </tr>\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6\">\n      <div class=\"mb-3 card\">\n        <div class=\"card-header-tab card-header\">\n          <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">शैक्षिक कक्षा वितरण</div>\n          <div class=\"btn-actions-pane-right text-capitalize\">\n            <button class=\"btn-wide btn-outline-2x btn btn-outline-focus btn-sm\">View All</button>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <apx-chart [labels]=\"['Team A', 'Team B', 'Team C', 'Team D', 'Team E']\" [dataLabels]=\"{\n            enabled: false\n          }\" [colors]=\"['#16aaff', '#d92550']\" [stroke]=\"{\n            show: true,\n            width: 1,\n            colors: ['#fff']\n          }\" [grid]=\"{\n            xaxis: {\n              showLines: false\n            }\n          }\" [xaxis]=\" {\n                  categories: ['१-५', '६-८', '९-१०', '११-१२'],\n                  title: {\n                      text: 'Percent'\n                  }\n                }\" [plotOptions]=\"{\n            bar: {\n              horizontal: true,\n              barHeight: '80%'\n            }\n          }\" [chart]=\"{\n            height: 300,\n            type: 'bar',\n            stacked: true,\n            sparkline: {\n                enabled: true\n            }\n          }\" [series]=\"[\n          {\n            name: 'छात्र',\n                    data: [162757, 97408, 54058, 35234]\n            },\n            {\n              name: 'छात्रा',\n                        data: [168294, 98714, 57435, 41177 ]\n            }\n\n          ]\"></apx-chart>\n        </div>\n        <div class=\"p-0 d-block card-footer\">\n          <div class=\"grid-menu grid-menu-2col\">\n            <div class=\"no-gutters row\">\n              <div class=\"p-2 col-sm-6\">\n                <button\n                  class=\"btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark\">\n                  <i class=\"lnr-apartment text-dark opacity-7 btn-icon-wrapper mb-2\"> </i>\n                  विस्तृत सर्वेक्षण\n                </button>\n              </div>\n              <div class=\"p-2 col-sm-6\">\n                <button\n                  class=\"btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark\">\n                  <i class=\"lnr-database text-dark opacity-7 btn-icon-wrapper mb-2\"> </i>\n                  दलित विद्यार्थी\n                </button>\n              </div>\n              <div class=\"p-2 col-sm-6\">\n                <button\n                  class=\"btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark\">\n                  <i class=\"lnr-printer text-dark opacity-7 btn-icon-wrapper mb-2\"> </i>\n                  अन्य\n                </button>\n              </div>\n              <div class=\"p-2 col-sm-6\">\n                <button\n                  class=\"btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark\">\n                  <i class=\"lnr-store text-dark opacity-7 btn-icon-wrapper mb-2\"> </i>\n                  विद्यालय भर्ना\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-12 col-lg-6\">\n      <div class=\"mb-3 card\">\n      <div class=\"card-header-tab card-header\">\n        <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">क्षेत्रफल</div>\n        <div class=\"btn-actions-pane-right text-capitalize actions-icon-btn\">\n          <button class=\"btn btn-focus\">View More</button>\n        </div>\n      </div>\n      <div class=\"p-0 card-body\">\n        <apx-chart [series]=\"[3646, 1662, 1572, 1037, 2084, 2321, 3563, 2285, 542, 1836, 1426]\" [legend]=false\n          [labels]=\"['गोरखा', 'लमजुङ', 'तनहुँ', 'स्याङजा', 'कास्की', 'मनाङ', 'म्याग्दी', 'पर्वत', 'बाग्लुङ', 'नवलपुर']\" [chart]=\"{\n                  width: 450,\n                  height: '450',\n                  type: 'pie'\n                }\"></apx-chart>\n      </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <div class=\"main-card mb-3 card\" style=\"height: 300px;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">About us</h5>\n          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean\n            massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean\n            massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean\n            massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean\n            massa.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6\" mx-auto>\n      <div class=\"mb-3 card\" style=\"height: 300px;\" >\n        <div class=\"card-header-tab card-header\">\n          <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n            प्रकाशनहरू\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"align-middle mb-0 table table-borderless table-striped table-hover\">\n            <thead>\n            <tr>\n              <th class=\"text-center\">#</th>\n              <th class=\"text-center\">प्रकाशन सूची</th>\n              <th class=\"text-center\">कार्यहरू</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr >\n              <td class=\"text-center text-muted\">1</td>\n              <td class=\"text-center\">Data publication policy</td>\n              <td class=\"text-center\"><button type=\"button\" class=\"btn btn-primary btn-sm\">विवरण</button></td>\n            </tr>\n            <tr >\n              <td class=\"text-center text-muted\">2</td>\n              <td class=\"text-center\">Data request policy</td>\n              <td class=\"text-center\"><button type=\"button\" class=\"btn btn-primary btn-sm\">विवरण</button></td>\n            </tr>\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Tables/dynamic/dynamic.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Tables/dynamic/dynamic.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-3\">\n  <div class=\"card-header-tab card-header\">\n    <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n      <i class=\"header-icon lnr-laptop-phone mr-3 text-muted opacity-6\"> </i>\n      Dynamic Tables\n    </div>\n    <div class=\"btn-actions-pane-right\">\n      <div role=\"group\" class=\"btn-group-sm btn-group\">\n        <button class=\"btn-shadow btn btn-dark\">Refresh</button>\n        <button type=\"button\" class=\"btn-shadow btn btn-dark\">Remove</button>\n      </div>\n    </div>\n  </div>\n  <form>\n    <div class=\"p-2\">\n      <div class=\"form-group form-inline mb-0\">\n        Full text search:\n        <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"service.searchTerm\" />\n        <span class=\"ml-3\" *ngIf=\"service.loading$ | async\">Loading...</span>\n      </div>\n    </div>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\">#</th>\n          <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Country</th>\n          <th scope=\"col\" sortable=\"area\" (sort)=\"onSort($event)\">Area</th>\n          <th scope=\"col\" sortable=\"population\" (sort)=\"onSort($event)\">Population</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let country of countries$ | async\">\n          <th scope=\"row\" class=\"text-center\">{{ country.id }}</th>\n          <td>\n            <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/' + country.flag\" class=\"mr-2\"\n              style=\"width: 20px\">\n            <ngb-highlight [result]=\"country.name\" [term]=\"service.searchTerm\"></ngb-highlight>\n          </td>\n          <td>\n            <ngb-highlight [result]=\"country.area | number\" [term]=\"service.searchTerm\"></ngb-highlight>\n          </td>\n          <td>\n            <ngb-highlight [result]=\"country.population | number\" [term]=\"service.searchTerm\"></ngb-highlight>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"card-footer pb-0\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <ngb-pagination [collectionSize]=\"total$ | async\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\">\n        </ngb-pagination>\n        <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"service.pageSize\">\n          <option [ngValue]=\"2\">2 items per page</option>\n          <option [ngValue]=\"4\">4 items per page</option>\n          <option [ngValue]=\"6\">6 items per page</option>\n        </select>\n      </div>\n    </div>\n  </form>\n</div>");

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

/***/ "./src/app/DemoPages/Guest/analytics/analytics-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/DemoPages/Guest/analytics/analytics-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsRoutingModule", function() { return AnalyticsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics.component */ "./src/app/DemoPages/Guest/analytics/analytics.component.ts");




var routes = [
    {
        path: '',
        component: _analytics_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsComponent"],
        data: {
            title: 'Analytics'
        }
    }
];
var AnalyticsRoutingModule = /** @class */ (function () {
    function AnalyticsRoutingModule() {
    }
    AnalyticsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AnalyticsRoutingModule);
    return AnalyticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Guest/analytics/analytics.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/DemoPages/Guest/analytics/analytics.component.ts ***!
  \******************************************************************/
/*! exports provided: ROUTES, AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ROUTES = [];
var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent(generalService, router) {
        this.generalService = generalService;
        this.router = router;
        this.images = [];
        this.menuItems = [];
        this.forms_count = [];
        this.tables_count = [];
        this.forms_length = 0;
        this.tables_length = 0;
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images.push("http://202.45.146.221/media/1/6gandaki.jpg");
        this.generalService.getSidebar().subscribe(function (response) {
            _this.responseData = response.data;
            _this.forms_length += 1;
            _this.responseData.forEach(function (value) {
                value.tables.forEach(function (table) {
                    table.url = '/guest/tables/details/' + table.id;
                    _this.tables_length += 1;
                });
                _this.menuItems.push({
                    path: '/admin/',
                    title: value.nepali_name,
                    icon: 'list',
                    class: '',
                    subForms: value.sub_forms,
                    tables: value.tables,
                    icon_path: value.icon_path,
                    id: value.id,
                    nepali_name: value.nepali_name,
                });
            });
        });
    };
    AnalyticsComponent.prototype.navigateToTable = function (tableId) {
        this.router.navigate(['/guest/tables/details/' + tableId]);
    };
    AnalyticsComponent.ctorParameters = function () { return [
        { type: _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analytics',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Guest/analytics/analytics.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Guest/analytics/analytics.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/DemoPages/Guest/analytics/analytics.module.ts ***!
  \***************************************************************/
/*! exports provided: AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_trend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-trend */ "./node_modules/ngx-trend/fesm5/ngx-trend.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./analytics.component */ "./src/app/DemoPages/Guest/analytics/analytics.component.ts");
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./analytics-routing.module */ "./src/app/DemoPages/Guest/analytics/analytics-routing.module.ts");
/* harmony import */ var _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Layout/Components/page-title/page-title.module */ "./src/app/Layout/Components/page-title/page-title.module.ts");
/* harmony import */ var _Tables_dynamic_dynamic_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Tables/dynamic/dynamic.module */ "./src/app/DemoPages/Tables/dynamic/dynamic.module.ts");















// import { PageTitleComponent } from '../../../Layout/Components/page-title/page-title.component';
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _analytics_routing_module__WEBPACK_IMPORTED_MODULE_11__["AnalyticsRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], ngx_trend__WEBPACK_IMPORTED_MODULE_9__["TrendModule"], _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_12__["PageTitleModule"], _Tables_dynamic_dynamic_module__WEBPACK_IMPORTED_MODULE_13__["DynamicModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ],
            declarations: [_analytics_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsComponent"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
                    // DROPZONE_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }
            ],
            bootstrap: [_analytics_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsComponent"]]
        })
    ], AnalyticsModule);
    return AnalyticsModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Tables/dynamic/demo/countries.ts":
/*!************************************************************!*\
  !*** ./src/app/DemoPages/Tables/dynamic/demo/countries.ts ***!
  \************************************************************/
/*! exports provided: COUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return COUNTRIES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var COUNTRIES = [
    {
        id: 1,
        name: 'Russia',
        flag: 'f/f3/Flag_of_Russia.svg',
        area: 17075200,
        population: 146989754
    },
    {
        id: 2,
        name: 'France',
        flag: 'c/c3/Flag_of_France.svg',
        area: 640679,
        population: 64979548
    },
    {
        id: 3,
        name: 'Germany',
        flag: 'b/ba/Flag_of_Germany.svg',
        area: 357114,
        population: 82114224
    },
    {
        id: 4,
        name: 'Portugal',
        flag: '5/5c/Flag_of_Portugal.svg',
        area: 92090,
        population: 10329506
    },
    {
        id: 5,
        name: 'Canada',
        flag: 'c/cf/Flag_of_Canada.svg',
        area: 9976140,
        population: 36624199
    },
    {
        id: 6,
        name: 'Vietnam',
        flag: '2/21/Flag_of_Vietnam.svg',
        area: 331212,
        population: 95540800
    },
    {
        id: 7,
        name: 'Brazil',
        flag: '0/05/Flag_of_Brazil.svg',
        area: 8515767,
        population: 209288278
    },
    {
        id: 8,
        name: 'Mexico',
        flag: 'f/fc/Flag_of_Mexico.svg',
        area: 1964375,
        population: 129163276
    },
    {
        id: 9,
        name: 'United States',
        flag: 'a/a4/Flag_of_the_United_States.svg',
        area: 9629091,
        population: 324459463
    },
    {
        id: 10,
        name: 'India',
        flag: '4/41/Flag_of_India.svg',
        area: 3287263,
        population: 1324171354
    },
    {
        id: 11,
        name: 'Indonesia',
        flag: '9/9f/Flag_of_Indonesia.svg',
        area: 1910931,
        population: 263991379
    },
    {
        id: 12,
        name: 'Tuvalu',
        flag: '3/38/Flag_of_Tuvalu.svg',
        area: 26,
        population: 11097
    },
    {
        id: 13,
        name: 'China',
        flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        area: 9596960,
        population: 1409517397
    }
];


/***/ }),

/***/ "./src/app/DemoPages/Tables/dynamic/demo/country.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/DemoPages/Tables/dynamic/demo/country.service.ts ***!
  \******************************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries */ "./src/app/DemoPages/Tables/dynamic/demo/countries.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(countries, column, direction) {
    if (direction === '') {
        return countries;
    }
    else {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](countries).sort(function (a, b) {
            var res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(country, term, pipe) {
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
}
var CountryService = /** @class */ (function () {
    function CountryService(pipe) {
        var _this = this;
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._countries$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 4,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._loading$.next(true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this._search(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._loading$.next(false); })).subscribe(function (result) {
            _this._countries$.next(result.countries);
            _this._total$.next(result.total);
        });
        this._search$.next();
    }
    Object.defineProperty(CountryService.prototype, "countries$", {
        get: function () { return this._countries$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryService.prototype, "total$", {
        get: function () { return this._total$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryService.prototype, "loading$", {
        get: function () { return this._loading$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryService.prototype, "page", {
        get: function () { return this._state.page; },
        set: function (page) { this._set({ page: page }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryService.prototype, "pageSize", {
        get: function () { return this._state.pageSize; },
        set: function (pageSize) { this._set({ pageSize: pageSize }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryService.prototype, "searchTerm", {
        get: function () { return this._state.searchTerm; },
        set: function (searchTerm) { this._set({ searchTerm: searchTerm }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryService.prototype, "sortColumn", {
        set: function (sortColumn) { this._set({ sortColumn: sortColumn }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryService.prototype, "sortDirection", {
        set: function (sortDirection) { this._set({ sortDirection: sortDirection }); },
        enumerable: true,
        configurable: true
    });
    CountryService.prototype._set = function (patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    };
    CountryService.prototype._search = function () {
        var _this = this;
        var _a = this._state, sortColumn = _a.sortColumn, sortDirection = _a.sortDirection, pageSize = _a.pageSize, page = _a.page, searchTerm = _a.searchTerm;
        // 1. sort
        var countries = sort(_countries__WEBPACK_IMPORTED_MODULE_3__["COUNTRIES"], sortColumn, sortDirection);
        // 2. filter
        countries = countries.filter(function (country) { return matches(country, searchTerm, _this.pipe); });
        var total = countries.length;
        // 3. paginate
        countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ countries: countries, total: total });
    };
    CountryService.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"] }
    ]; };
    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/DemoPages/Tables/dynamic/dynamic-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/DemoPages/Tables/dynamic/dynamic-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DynamicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicRoutingModule", function() { return DynamicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dynamic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic.component */ "./src/app/DemoPages/Tables/dynamic/dynamic.component.ts");




var routes = [
    {
        path: '',
        component: _dynamic_component__WEBPACK_IMPORTED_MODULE_3__["DynamicComponent"],
        data: {
            title: 'Dynamic'
        }
    }
];
var DynamicRoutingModule = /** @class */ (function () {
    function DynamicRoutingModule() {
    }
    DynamicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DynamicRoutingModule);
    return DynamicRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Tables/dynamic/dynamic.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/DemoPages/Tables/dynamic/dynamic.component.ts ***!
  \***************************************************************/
/*! exports provided: DynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponent", function() { return DynamicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/country.service */ "./src/app/DemoPages/Tables/dynamic/demo/country.service.ts");
/* harmony import */ var _demo_sortable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/sortable.directive */ "./src/app/DemoPages/Tables/dynamic/demo/sortable.directive.ts");





// @ts-ignore
var DynamicComponent = /** @class */ (function () {
    function DynamicComponent(service) {
        this.service = service;
        this.heading = 'Dynamic Tables';
        this.subheading = 'Basic example of Angular 7 table with sort, search and filter functionality.';
        this.icon = 'pe-7s-notebook icon-gradient bg-mixed-hopes';
        this.countries$ = service.countries$;
        this.total$ = service.total$;
    }
    DynamicComponent.prototype.onSort = function (_a) {
        var column = _a.column, direction = _a.direction;
        // resetting other headers
        this.headers.forEach(function (header) {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    };
    DynamicComponent.ctorParameters = function () { return [
        { type: _demo_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_demo_sortable_directive__WEBPACK_IMPORTED_MODULE_4__["NgbdSortableHeaderDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], DynamicComponent.prototype, "headers", void 0);
    DynamicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dynamic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Tables/dynamic/dynamic.component.html")).default,
            providers: [_demo_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_demo_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"]])
    ], DynamicComponent);
    return DynamicComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Tables/dynamic/dynamic.module.ts":
/*!************************************************************!*\
  !*** ./src/app/DemoPages/Tables/dynamic/dynamic.module.ts ***!
  \************************************************************/
/*! exports provided: DynamicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicModule", function() { return DynamicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dynamic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic.component */ "./src/app/DemoPages/Tables/dynamic/dynamic.component.ts");
/* harmony import */ var _dynamic_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-routing.module */ "./src/app/DemoPages/Tables/dynamic/dynamic-routing.module.ts");







var DynamicModule = /** @class */ (function () {
    function DynamicModule() {
    }
    DynamicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _dynamic_routing_module__WEBPACK_IMPORTED_MODULE_6__["DynamicRoutingModule"],
            ],
            declarations: [_dynamic_component__WEBPACK_IMPORTED_MODULE_5__["DynamicComponent"]],
            exports: [_dynamic_component__WEBPACK_IMPORTED_MODULE_5__["DynamicComponent"]]
        })
    ], DynamicModule);
    return DynamicModule;
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
//# sourceMappingURL=analytics-analytics-module.js.map