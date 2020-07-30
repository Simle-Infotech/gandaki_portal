(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/user/changePassword/userchangePassword.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/user/changePassword/userchangePassword.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 20px;\">\n  <div class=\"mb-3 card\">\n    <div class=\"card-header-tab card-header\">\n      <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n        <i class=\"header-icon lnr-charts icon-gradient bg-happy-green\"> </i>\n        Profile\n      </div>\n      <div class=\"btn-actions-pane-right text-capitalize\">\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"navigateToUpdateProfile()\" >Update Profile</button>\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"navigateToProfile()\" >Profile</button>\n      </div>\n    </div>\n    <div class=\"no-gutters row\">\n    <div class=\"col-sm-12 col-md-12\">\n      Updating the profile\n    </div>\n  </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/user/profile/user.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/user/profile/user.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 20px;\">\n  <div class=\"mb-3 card\">\n    <div class=\"card-header-tab card-header\">\n      <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n        <i class=\"header-icon lnr-charts icon-gradient bg-happy-green\"> </i>\n        Profile\n      </div>\n      <!--<div class=\"btn-actions-pane-right text-capitalize\">\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"navigateToUpdateProfile()\" >Update Profile</button>\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"navigateToChangePassword()\" >Change Password</button>\n      </div>-->\n    </div>\n    <div class=\"no-gutters row\">\n    <div class=\"col-sm-12 col-md-12\">\n      <ngb-tabset>\n        <ngb-tab>\n        <ng-template ngbTabTitle><span>Profile</span></ng-template>\n        <ng-template ngbTabContent>\n          <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n              <div class=\"main-card mb-3 card\">\n                <div class=\"card-body\">\n                  <form>\n                    <div>\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                        </div>\n                        <input placeholder=\"username\" type=\"text\" class=\"form-control\">\n                      </div>\n                      <br>\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                          <i class=\"fa fa-envelope\"></i>\n                        </span>\n                        </div>\n                        <input placeholder=\"Email\" type=\"email\" class=\"form-control\">\n                      </div>\n                      <br>\n                      <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" >Update Profile</button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n      </ngb-tab>\n        <ngb-tab>\n          <ng-template ngbTabTitle><span>Change Password</span></ng-template>\n          <ng-template ngbTabContent>\n            <div class=\"row\">\n              <div class=\"col-md-3\"></div>\n              <div class=\"col-md-6\">\n                <div class=\"main-card mb-3 card\">\n                  <div class=\"card-body\">\n                    <form>\n                      <div>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"fa fa-lock\"></i></span>\n                          </div>\n                          <input placeholder=\"old password\" type=\"password\" class=\"form-control\">\n                        </div>\n                        <br>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                          <i class=\"fa fa-lock\"></i>\n                        </span>\n                          </div>\n                          <input placeholder=\"New Password\" type=\"password\" class=\"form-control\">\n                        </div>\n                        <br>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                          <i class=\"fa fa-lock\"></i>\n                        </span>\n                          </div>\n                          <input placeholder=\"Confirm Password\" type=\"password\" class=\"form-control\">\n                        </div>\n                        <br>\n                        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" >Update Password</button>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/user/updateProfile/userProfile.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/user/updateProfile/userProfile.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 20px;\">\n  <div class=\"mb-3 card\">\n    <div class=\"card-header-tab card-header\">\n      <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n        <i class=\"header-icon lnr-charts icon-gradient bg-happy-green\"> </i>\n        Profile\n      </div>\n      <div class=\"btn-actions-pane-right text-capitalize\">\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"navigateToProfile()\" >Profile</button>\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"navigateToChangePassword()\" >Change Password</button>\n      </div>\n    </div>\n    <div class=\"no-gutters row\">\n    <div class=\"col-sm-12 col-md-12\">\n      Updating the profile\n    </div>\n  </div>\n  </div>\n</div>\n");

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

/***/ "./src/app/DemoPages/Admin/user/changePassword/userchangePassword.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/DemoPages/Admin/user/changePassword/userchangePassword.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserchangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserchangePasswordComponent", function() { return UserchangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserchangePasswordComponent = /** @class */ (function () {
    function UserchangePasswordComponent(router) {
        this.router = router;
    }
    UserchangePasswordComponent.prototype.ngOnInit = function () {
    };
    UserchangePasswordComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/admin/user/profile']);
    };
    UserchangePasswordComponent.prototype.navigateToUpdateProfile = function () {
        this.router.navigate(['/admin/user/update']);
    };
    UserchangePasswordComponent.prototype.navigateToChangePassword = function () {
        this.router.navigate(['/admin/user/updatePassword']);
    };
    UserchangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    UserchangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-user-change-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userchangePassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/user/changePassword/userchangePassword.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserchangePasswordComponent);
    return UserchangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/user/profile/user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/DemoPages/Admin/user/profile/user.component.ts ***!
  \****************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");




var UserComponent = /** @class */ (function () {
    function UserComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.userProfile = this.authenticationService.CurrentUserValue;
        console.log(this.userProfile);
    };
    UserComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/admin/user/profile']);
    };
    UserComponent.prototype.navigateToUpdateProfile = function () {
        this.router.navigate(['/admin/user/update']);
    };
    UserComponent.prototype.navigateToChangePassword = function () {
        this.router.navigate(['/admin/user/updatePassword']);
    };
    UserComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/user/profile/user.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/user/updateProfile/userProfile.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/DemoPages/Admin/user/updateProfile/userProfile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router) {
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.navigateToProfile = function () {
        this.router.navigate(['/admin/user/profile']);
    };
    UserProfileComponent.prototype.navigateToUpdateProfile = function () {
        this.router.navigate(['/admin/user/update']);
    };
    UserProfileComponent.prototype.navigateToChangePassword = function () {
        this.router.navigate(['/admin/user/updatePassword']);
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-user-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userProfile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/user/updateProfile/userProfile.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/user/user-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/DemoPages/Admin/user/user-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/user.component */ "./src/app/DemoPages/Admin/user/profile/user.component.ts");
/* harmony import */ var _updateProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateProfile/userProfile.component */ "./src/app/DemoPages/Admin/user/updateProfile/userProfile.component.ts");
/* harmony import */ var _changePassword_userchangePassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changePassword/userchangePassword.component */ "./src/app/DemoPages/Admin/user/changePassword/userchangePassword.component.ts");






var routes = [
    {
        path: 'profile',
        component: _profile_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        data: {
            title: 'User'
        }
    },
    {
        path: 'update',
        component: _updateProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"],
        data: {
            title: 'User'
        }
    },
    {
        path: 'updatePassword',
        component: _changePassword_userchangePassword_component__WEBPACK_IMPORTED_MODULE_5__["UserchangePasswordComponent"],
        data: {
            title: 'User'
        }
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/user/user.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/DemoPages/Admin/user/user.module.ts ***!
  \*****************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Layout/Components/page-title/page-title.module */ "./src/app/Layout/Components/page-title/page-title.module.ts");
/* harmony import */ var _profile_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/user.component */ "./src/app/DemoPages/Admin/user/profile/user.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/DemoPages/Admin/user/user-routing.module.ts");
/* harmony import */ var _updateProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./updateProfile/userProfile.component */ "./src/app/DemoPages/Admin/user/updateProfile/userProfile.component.ts");
/* harmony import */ var _changePassword_userchangePassword_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./changePassword/userchangePassword.component */ "./src/app/DemoPages/Admin/user/changePassword/userchangePassword.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");














var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_9__["UserRoutingModule"], _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]
            ],
            declarations: [_profile_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], _updateProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"], _changePassword_userchangePassword_component__WEBPACK_IMPORTED_MODULE_11__["UserchangePasswordComponent"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                    // DROPZONE_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }
            ],
        })
    ], UserModule);
    return UserModule;
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
//# sourceMappingURL=user-user-module.js.map