(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/forms/forms.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/forms/forms.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 20px;\">\n  <div class=\"mb-3 card\">\n    <div class=\"card-header-tab card-header\">\n      <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n        <i class=\"header-icon lnr-charts icon-gradient bg-happy-green\"> </i>\n        Forms\n      </div>\n      <div class=\"btn-actions-pane-right text-capitalize\">\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"addNewRow()\" >Add new row</button>\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"onBtStopEditing()\">Save data</button>\n      </div>\n    </div>\n    <div class=\"no-gutters row\">\n    <div class=\"col-sm-12 col-md-12\">\n      <ag-grid-angular\n        #agGrid\n        id=\"myGrid\"\n        style=\"width: auto; height: 600px;\"\n        class=\"ag-theme-alpine\"\n        [rowData]=\"rowData\"\n        [autoGroupColumnDef]=\"autoGroupColumnDef\"\n        [columnDefs]=\"colData\"\n        [defaultColDef]=\"defaultColDef\"\n        [animateRows]=\"true\"\n        [sideBar]=\"sideBar\"\n        [statusBar]=\"statusBar\"\n        [enableRangeSelection]=\"true\"\n        (cellClicked)=\"onCellClicked($event)\"\n        (cellEditingStopped)=\"onCellEditingStopped($event)\"\n        (rowEditingStopped)=\"onRowEditingStopped($event)\"\n        (gridReady)=\"onGridReady($event)\"\n        [enterMovesDown]=\"true\"\n        [enterMovesDownAfterEdit]=\"true\"\n        [editType]=\"editType\"\n        [enableCharts]=\"enableCharts\"\n\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Guest/forms/forms.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Guest/forms/forms.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">घर</a></li>\n    <li class=\"breadcrumb-item active\">खण्डहरू</li>\n  </ol>\n</nav>\n\n<div style=\"margin-top: 20px;\">\n  <div class=\"mb-3 card\">\n    <div class=\"card-header-tab card-header\">\n      <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n        <i class=\"header-icon lnr-charts icon-gradient bg-happy-green\"> </i>\n        खण्डहरू\n      </div>\n    </div>\n    <div class=\"no-gutters row\">\n    <div class=\"col-sm-12 col-md-12\">\n      <div class=\"table-responsive\">\n        <table class=\"align-middle mb-0 table table-borderless table-striped table-hover\">\n          <thead>\n          <tr>\n            <th class=\"text-center\">#</th>\n            <th class=\"text-center\">खण्ड</th>\n            <th class=\"text-center\">कार्यहरू</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let menuTable of menuItems; index as i\">\n            <td class=\"text-center text-muted\" style=\"font-family: 'Fontasy Himali'\">{{ i + 1 }}</td>\n            <td class=\"text-center\">{{ menuTable.title }}</td>\n            <td class=\"text-center\">\n              <button (click)=\"navigateToTable(menuTable.id)\" type=\"button\" class=\"btn btn-primary btn-sm\">विवरण</button>\n            </td>\n          </tr>\n\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/DemoPages/Admin/forms/forms-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/DemoPages/Admin/forms/forms-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.component */ "./src/app/DemoPages/Admin/forms/forms.component.ts");




var routes = [
    {
        path: '',
        component: _forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"],
        data: {
            title: 'Forms'
        }
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/forms/forms.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/DemoPages/Admin/forms/forms.component.ts ***!
  \**********************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/form.service */ "./src/app/services/form.service.ts");





var FormsComponent = /** @class */ (function () {
    function FormsComponent(formBuilder, formService, router) {
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.columnDefs = [];
        this.colData = [];
        this.rowDefs = [];
        this.rowData = [];
        this.fields = [];
        this.title = 'app';
        this.autoGroupColumnDef = { minWidth: 200 };
        this.defaultColDef = {
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            sortable: true,
            resizable: true,
            filter: true,
        };
        this.sideBar = {
            toolPanels: [
                'filters',
                {
                    id: 'columns',
                    labelDefault: 'Columns',
                    labelKey: 'columns',
                    iconKey: 'columns',
                    toolPanel: 'agColumnsToolPanel',
                    toolPanelParams: { suppressSyncLayoutWithGrid: true },
                },
            ],
        };
        this.statusBar = {
            statusPanels: [
                {
                    statusPanel: 'agTotalRowCountComponent',
                    align: 'left',
                    key: 'totalRowComponent',
                },
                {
                    statusPanel: 'agFilteredRowCountComponent',
                    align: 'left',
                },
                {
                    statusPanel: 'agSelectedRowCountComponent',
                    align: 'center',
                },
                {
                    statusPanel: 'agAggregationComponent',
                    align: 'right',
                },
            ],
        };
        this.ColumnAddForm = this.formBuilder.group({
            newcolumn: ''
        });
        this.editType = 'fullRow';
        this.enableCharts = true;
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent.prototype.renderTable = function (isOnInit) {
        var _this = this;
        this.formService.getFormValues().subscribe(function (response) {
            _this.fields = response.fields;
            _this.rowDefs = response.data;
            if (isOnInit == true) {
                _this.columnDefs = response.columns;
                // this.colData = [];
                _this.columnDefs.forEach(function (value) {
                    console.log(value);
                    if (value == 'sub_forms') {
                        return;
                    }
                    _this.colData.push({ headerName: value, field: value, sortable: true, filter: true, editable: true });
                });
                _this.colData.push({
                    headerName: 'sub_forms',
                    field: 'id',
                    cellRenderer: function (invNum) {
                        // console.log(params);
                        return "<a href=\"/#/admin/sub_forms/" + invNum.value + "\" class=\"btn btn-sm\"> view</a>";
                    }
                });
                _this.colData.push({
                    headerName: 'tables',
                    field: 'id',
                    cellRenderer: function (invNum) {
                        return "<a href=\"/#/admin/tables/" + invNum.value + "\" class=\"btn btn-sm\">view</a>";
                    }
                });
            }
            _this.rowData = [];
            _this.gridApi.setRowData(_this.rowData);
            _this.rowDefs.forEach(function (value) {
                _this.rowData.push(value);
            });
            _this.gridApi.setColumnDefs(_this.colData);
            _this.gridApi.setRowData(_this.rowData);
        });
    };
    FormsComponent.prototype.addNewColumn = function (newColumnValue) {
        var columnName = newColumnValue.newcolumn;
        if (columnName == '') {
            return;
        }
        this.colData.push({ headerName: columnName, field: columnName, sortable: true, filter: true, editable: true, rowGroup: true });
        this.gridApi.setColumnDefs(this.colData);
    };
    FormsComponent.prototype.addNewRow = function () {
        this.rowData.push({});
        this.gridApi.setRowData(this.rowData);
    };
    FormsComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.renderTable(true);
        this.gridApi.setColumnDefs(this.colData);
    };
    FormsComponent.prototype.onBtStopEditing = function () {
        this.gridApi.stopEditing();
    };
    FormsComponent.prototype.onCellClicked = function ($event) {
        // check whether the current row is already opened in edit or not
        if (this.editingRowIndex != $event.rowIndex) {
            // console.log($event);
            $event.api.startEditingCell({
                rowIndex: $event.rowIndex,
                colKey: $event.column.colId
            });
            this.editingRowIndex = $event.rowIndex;
        }
    };
    FormsComponent.prototype.onCellEditingStopped = function ($event) {
        var editedRowIndex = $event.rowIndex;
        this.updatedData = $event.data;
    };
    FormsComponent.prototype.onRowEditingStopped = function ($event) {
        var _this = this;
        var currentData = {
            'data': $event.data
        };
        console.log(currentData);
        this.formService.saveFormValues(currentData).subscribe(function (response) {
            // console.log(response);
            _this.renderTable(false);
        });
    };
    FormsComponent.prototype.viewSubForms = function () {
        console.log('Viewing forms');
    };
    FormsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-forms',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/forms/forms.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/forms/forms.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/DemoPages/Admin/forms/forms.module.ts ***!
  \*******************************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Layout/Components/page-title/page-title.module */ "./src/app/Layout/Components/page-title/page-title.module.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/fesm5/ag-grid-angular.js");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-enterprise */ "./node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.cjs.js");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms.component */ "./src/app/DemoPages/Admin/forms/forms.component.ts");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/DemoPages/Admin/forms/forms-routing.module.ts");













var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_11__["FormsRoutingModule"], _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([])
            ],
            declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_10__["FormsComponent"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                    // DROPZONE_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }
            ],
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Guest/forms/forms-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/DemoPages/Guest/forms/forms-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.component */ "./src/app/DemoPages/Guest/forms/forms.component.ts");




var routes = [
    {
        path: '',
        component: _forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"],
        data: {
            title: 'Forms'
        }
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Guest/forms/forms.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/DemoPages/Guest/forms/forms.component.ts ***!
  \**********************************************************/
/*! exports provided: ROUTES, FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/general.service */ "./src/app/services/general.service.ts");




var ROUTES = [];
var FormsComponent = /** @class */ (function () {
    function FormsComponent(generalService, router) {
        this.generalService = generalService;
        this.router = router;
        this.images = [];
        this.menuItems = [];
        this.forms_count = [];
        this.tables_count = [];
        this.forms_length = 0;
        this.tables_length = 0;
    }
    FormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generalService.getSidebar().subscribe(function (response) {
            _this.responseData = response.data;
            _this.forms_length += 1;
            _this.responseData.forEach(function (value) {
                value.tables.forEach(function (table) {
                    table.url = '/guest/tables/' + table.id;
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
    FormsComponent.prototype.navigateToTable = function (tableId) {
        this.router.navigate(['/guest/tables/' + tableId]);
    };
    FormsComponent.ctorParameters = function () { return [
        { type: _services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-forms',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Guest/forms/forms.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Guest/forms/forms.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/DemoPages/Guest/forms/forms.module.ts ***!
  \*******************************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm5/ng2-charts.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Layout/Components/page-title/page-title.module */ "./src/app/Layout/Components/page-title/page-title.module.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/fesm5/ag-grid-angular.js");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-enterprise */ "./node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.cjs.js");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms.component */ "./src/app/DemoPages/Guest/forms/forms.component.ts");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/DemoPages/Guest/forms/forms-routing.module.ts");













var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_11__["FormsRoutingModule"], _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([])
            ],
            declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_10__["FormsComponent"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                    // DROPZONE_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }
            ],
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map