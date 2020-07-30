(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subForms-subForms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/subForms/subForms.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/subForms/subForms.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div style=\"margin-top: 20px;\">\n  <div class=\"mb-3 card\">\n    <div class=\"card-header-tab card-header\">\n      <div class=\"card-header-title font-size-lg text-capitalize font-weight-normal\">\n        <i class=\"header-icon lnr-charts icon-gradient bg-happy-green\"> </i>\n        Forms\n      </div>\n      <div class=\"btn-actions-pane-right text-capitalize\">\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"addNewRow()\" >Add new row</button>\n        <button class=\"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm\" (click)=\"onBtStopEditing()\">Save data</button>\n      </div>\n    </div>\n    <div class=\"no-gutters row\">\n      <div class=\"col-sm-12 col-md-12\">\n        <ag-grid-angular\n          #agGrid\n          id=\"SubFormGrid\"\n          style=\"width: auto; height: 600px;\"\n          class=\"ag-theme-alpine\"\n          [rowData]=\"rowData\"\n          [autoGroupColumnDef]=\"autoGroupColumnDef\"\n          [columnDefs]=\"colData\"\n          [defaultColDef]=\"defaultColDef\"\n          [animateRows]=\"true\"\n          [sideBar]=\"sideBar\"\n          [statusBar]=\"statusBar\"\n          [enableRangeSelection]=\"true\"\n          (cellClicked)=\"onCellClicked($event)\"\n          (cellEditingStopped)=\"onCellEditingStopped($event)\"\n          (rowEditingStopped)=\"onRowEditingStopped($event)\"\n          (gridReady)=\"onGridReady($event)\"\n          [enterMovesDown]=\"true\"\n          [enterMovesDownAfterEdit]=\"true\"\n          [editType]=\"editType\"\n          [enableCharts]=\"true\"\n        >\n        </ag-grid-angular>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/DemoPages/Admin/subForms/subForms-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/DemoPages/Admin/subForms/subForms-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SubFormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFormsRoutingModule", function() { return SubFormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subForms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subForms.component */ "./src/app/DemoPages/Admin/subForms/subForms.component.ts");




var routes = [
    {
        path: '',
        component: _subForms_component__WEBPACK_IMPORTED_MODULE_3__["SubFormsComponent"],
        data: {
            title: 'Sub Forms'
        }
    }
];
var SubFormsRoutingModule = /** @class */ (function () {
    function SubFormsRoutingModule() {
    }
    SubFormsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SubFormsRoutingModule);
    return SubFormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/subForms/subForms.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/DemoPages/Admin/subForms/subForms.component.ts ***!
  \****************************************************************/
/*! exports provided: SubFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFormsComponent", function() { return SubFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/form.service */ "./src/app/services/form.service.ts");





var SubFormsComponent = /** @class */ (function () {
    function SubFormsComponent(activatedRoute, formBuilder, formService, router) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.formService = formService;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.columnDefs = [];
        this.colData = [];
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
    }
    SubFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.id = paramsId.id;
        });
    };
    SubFormsComponent.prototype.renderTable = function (isOnInit) {
        var _this = this;
        this.formService.getFormDetails(this.id).subscribe(function (response) {
            console.log(response);
            _this.fields = response.fields;
            _this.rowDefs = response.data;
            if (isOnInit == true) {
                _this.columnDefs = response.columns;
                console.log(_this.columnDefs);
                _this.columnDefs.forEach(function (value) {
                    if (value === 'sub_forms') {
                        _this.colData.push({ headerName: value, field: value });
                    }
                    else {
                        _this.colData.push({ headerName: value, field: value, sortable: true, filter: true, editable: true });
                    }
                });
                _this.colData.push({ headerName: 'tables', field: 'tables' });
            }
            _this.rowData = [];
            _this.gridApi.setRowData(_this.rowData);
            _this.parentObject = _this.rowDefs;
            _this.subFormObjects = _this.parentObject.sub_forms;
            _this.subFormObjects.forEach(function (value) {
                _this.rowData.push(value);
            });
            _this.gridApi.setColumnDefs(_this.colData);
            _this.gridApi.setRowData(_this.rowData);
        });
    };
    SubFormsComponent.prototype.addNewRow = function () {
        this.rowData.push({});
        this.gridApi.setRowData(this.rowData);
    };
    SubFormsComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.renderTable(true);
        this.gridApi.setColumnDefs(this.colData);
    };
    SubFormsComponent.prototype.onBtStopEditing = function () {
        this.gridApi.stopEditing();
    };
    SubFormsComponent.prototype.onCellClicked = function ($event) {
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
    SubFormsComponent.prototype.onCellEditingStopped = function ($event) {
        var editedRowIndex = $event.rowIndex;
        this.updatedData = $event.data;
    };
    SubFormsComponent.prototype.onRowEditingStopped = function ($event) {
        var _this = this;
        var currentData = {
            'data': $event.data
        };
        this.formService.saveFormValues(currentData).subscribe(function (response) {
            _this.parentObject.sub_forms.push(response.data.id);
            var FinalData = {
                'data': _this.parentObject
            };
            console.log(FinalData);
            _this.formService.saveFormValues(FinalData).subscribe(function (finalResponse) {
                _this.renderTable(false);
            });
        });
    };
    SubFormsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SubFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-sub-forms',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subForms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/DemoPages/Admin/subForms/subForms.component.html")).default
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_form_service__WEBPACK_IMPORTED_MODULE_4__["FormService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubFormsComponent);
    return SubFormsComponent;
}());



/***/ }),

/***/ "./src/app/DemoPages/Admin/subForms/subForms.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/DemoPages/Admin/subForms/subForms.module.ts ***!
  \*************************************************************/
/*! exports provided: SubFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFormsModule", function() { return SubFormsModule; });
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
/* harmony import */ var _subForms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subForms.component */ "./src/app/DemoPages/Admin/subForms/subForms.component.ts");
/* harmony import */ var _subForms_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subForms-routing.module */ "./src/app/DemoPages/Admin/subForms/subForms-routing.module.ts");













var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var SubFormsModule = /** @class */ (function () {
    function SubFormsModule() {
    }
    SubFormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _subForms_routing_module__WEBPACK_IMPORTED_MODULE_11__["SubFormsRoutingModule"], _Layout_Components_page_title_page_title_module__WEBPACK_IMPORTED_MODULE_7__["PageTitleModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["NgApexchartsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([])
            ],
            declarations: [_subForms_component__WEBPACK_IMPORTED_MODULE_10__["SubFormsComponent"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                    // DROPZONE_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }
            ],
        })
    ], SubFormsModule);
    return SubFormsModule;
}());



/***/ })

}]);
//# sourceMappingURL=subForms-subForms-module.js.map