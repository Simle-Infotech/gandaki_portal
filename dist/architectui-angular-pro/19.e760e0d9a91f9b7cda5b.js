(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{cTsF:function(e,o,l){"use strict";l.r(o);var n=l("CcnG"),a=(l("WZ4y"),function(){return function(){}}()),t=l("9AJC"),i=l("pMnS"),r=l("lQre"),u=l("86hh"),d=l("md+p"),s=l("FQVY"),c=(l("2hxB"),function(){function e(e,o,l,n,a){this.activatedRoute=e,this.formBuilder=o,this.formService=l,this.router=n,this.generalService=a,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowData=[],this.fields=[],this.title="app",this.buttonText="Save Data",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow",this.colIds=[],this.indexIds=[]}return e.prototype.ngOnInit=function(){var e=this;this.activatedRoute.params.subscribe((function(o){e.id=o.id,e.gridId="#agGridTable"+e.id,e.generalService.getTableDetails(e.id).subscribe((function(o){e.pageTitle=o.data.nepali_name})),e.renderTable(!0)}))},e.prototype.renderTable=function(e){var o=this;this.formService.getDataHeaders(this.id).subscribe((function(l){console.log(l),o.row_headers=l.rows_headers,o.col_headers=l.col_headers,o.index_cols=l.index_cols,o.empty_table=l.empty_table,o.rowData=[],o.gridApi.setRowData([]),1==e&&(o.colData=[],o.gridApi.setColumnDefs(o.colData),o.colData.push({headerName:"_id",value:"_id",hide:!0,suppressToolPanel:!0}),o.colIds.push("_id"),o.colData.push({headerName:"group",field:"group",pinned:"left"}),o.colIds.push("group"),o.colData.push({headerName:o.row_headers.title,field:"row",pinned:"left"}),o.colIds.push(o.row_headers.title),o.indexIds.push("row"),o.index_cols.forEach((function(e){if(e.options.length>0){var l=[];e.options.forEach((function(e){l.push(e.nepali_name)})),o.colData.push({headerName:e.title,field:e.col_id,sortable:!0,filter:!0,cellEditor:"agSelectCellEditor",cellEditorParams:{values:l}})}else o.colData.push({headerName:e.title,field:e.col_id,sortable:!0,filter:!0});o.colIds.push(e.col_id),o.indexIds.push(e.col_id)})),o.col_headers.forEach((function(e){o.modifyColumnHeaders(e),console.log("COlumn iems"),console.log(e),o.colData.push(e)})),o.gridApi.setColumnDefs(o.colData)),o.empty_table.forEach((function(e){var l={},n="",a="";o.row_headers.indicators.forEach((function(o){o.id==e.row&&(n=o.title,a=o.group[0])})),l.group=a,l.row=n;var t=[];t.push("group"),t.push("row");var i=Object.keys(e);i.forEach((function(n){if("row"!=n&&"group"!=n){var a="";o.index_cols.forEach((function(o){o.col_id==n&&o.options.forEach((function(o){o.id==e[n]&&(a=o.nepali_name,t.push(n))}))})),l[n]=a}})),i.forEach((function(o){var n=!1;t.forEach((function(e){e!=o||(n=!0)})),1!=n&&(l[o]=e[o])})),o.rowData.push(l)})),console.log("Row data"),console.log(o.rowData),o.formService.getData(o.id).subscribe((function(e){o.apiData=e.data,o.rowData.forEach((function(e){var l="";o.row_headers.indicators.forEach((function(o){o.title==e.row&&(l=o.id)})),e.row=l;var n=[];n.push("row"),Object.keys(e).forEach((function(l){if("row"!=l){var a="";o.index_cols.forEach((function(o){o.col_id==l&&o.options.forEach((function(o){o.nepali_name==e[l]&&(a=o.id,n.push(l))}))})),e[l]=a}})),o.apiData.forEach((function(l){var n=!0;o.indexIds.forEach((function(o){0!=n&&(n=e[o]==l[o])})),1==n&&(Object.keys(l).forEach((function(n){var a=!1;o.indexIds.forEach((function(e){e!=n||(a=!0)})),1!=a&&(e[n]=l[n])})),console.log(e))})),l="";var a="";o.row_headers.indicators.forEach((function(o){o.id==e.row&&(l=o.title,a=o.group[0])})),e.group=a,e.row=l,(n=[]).push("group"),n.push("row"),o.indexIds.forEach((function(l){if("row"!=l&&"group"!=l){var a="";o.index_cols.forEach((function(o){o.col_id==l&&o.options.forEach((function(o){o.id==e[l]&&(a=o.nepali_name,n.push(l))}))})),e[l]=a}}))})),o.gridApi.setRowData([]),o.gridApi.setRowData(o.rowData);var l=[];o.gridColumnApi.getAllColumns().forEach((function(e){l.push(e.colId)})),o.gridColumnApi.autoSizeColumns(l,!1)}))}))},e.prototype.onGridReady=function(e){this.gridApi=e.api,this.gridColumnApi=e.columnApi,this.gridApi.setColumnDefs([]),this.renderTable(!1)},e.prototype.modifyColumnHeaders=function(e){var o=this;return e.editable=!1,e.hasOwnProperty("children")&&e.children.forEach((function(e){if("Select"==e.type){var l=[];e.options.forEach((function(e){l.push(e.nepali_name)})),e.editable=!1,e.cellEditor="agSelectCellEditor",e.cellEditorParams={values:l}}o.modifyColumnHeaders(e)})),null},e}()),p=l("ZYCi"),m=l("gIcY"),f=n["ɵcrt"]({encapsulation:2,styles:[],data:{}});function h(e){return n["ɵvid"](0,[(e()(),n["ɵeld"](0,0,null,null,12,"div",[["class","card main-card mb-3"]],null,null,null,null,null)),(e()(),n["ɵeld"](1,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(e()(),n["ɵted"](2,null,[" "," "])),(e()(),n["ɵeld"](3,0,null,null,9,"div",[["class","card-body"]],null,null,null,null,null)),(e()(),n["ɵeld"](4,0,null,null,8,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(e()(),n["ɵeld"](5,0,null,null,7,"div",[["class","mb-3 card"]],null,null,null,null,null)),(e()(),n["ɵeld"](6,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(e()(),n["ɵeld"](7,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(e()(),n["ɵeld"](8,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["style","width: auto; height: 600px;"]],[[8,"id",0]],[[null,"gridReady"]],(function(e,o,l){var n=!0;return"gridReady"===o&&(n=!1!==e.component.onGridReady(l)&&n),n}),r.b,r.a)),n["ɵprd"](512,null,u.d,u.d,[n.NgZone]),n["ɵprd"](512,null,u.e,u.e,[]),n["ɵdid"](11,4898816,[["agGrid",4]],1,u.a,[n.ElementRef,n.ViewContainerRef,u.d,u.e,n.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],statusBar:[4,"statusBar"],sideBar:[5,"sideBar"],editType:[6,"editType"],enableRangeSelection:[7,"enableRangeSelection"],animateRows:[8,"animateRows"],enterMovesDownAfterEdit:[9,"enterMovesDownAfterEdit"],enterMovesDown:[10,"enterMovesDown"],enableCharts:[11,"enableCharts"]},{gridReady:"gridReady"}),n["ɵqud"](603979776,1,{columns:1})],(function(e,o){var l=o.component;e(o,11,1,[l.rowData,l.colData,l.autoGroupColumnDef,l.defaultColDef,l.statusBar,l.sideBar,l.editType,!0,!0,!0,!0,!0])}),(function(e,o){var l=o.component;e(o,2,0,l.pageTitle),e(o,8,0,n["ɵinlineInterpolate"](1,"",l.gridId,""))}))}function g(e){return n["ɵvid"](0,[(e()(),n["ɵeld"](0,0,null,null,1,"app-tables",[],null,null,null,h,f)),n["ɵdid"](1,114688,null,0,c,[p.a,m.FormBuilder,d.a,p.o,s.a],null,null)],(function(e,o){e(o,1,0)}),null)}var b=n["ɵccf"]("app-tables",c,g,{},{},[]),w=l("Ip0R"),_=l("4GxJ"),v=l("mEXF"),D={title:"Tables"},C=function(){return function(){}}();l.d(o,"TablesModuleNgFactory",(function(){return y}));var y=n["ɵcmf"](a,[],(function(e){return n["ɵmod"]([n["ɵmpd"](512,n.ComponentFactoryResolver,n["ɵCodegenComponentFactoryResolver"],[[8,[t.a,t.b,t.n,t.o,t.k,t.l,t.m,i.a,b]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n["ɵmpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[n.LOCALE_ID,[2,w["ɵangular_packages_common_common_a"]]]),n["ɵmpd"](4608,m["ɵangular_packages_forms_forms_o"],m["ɵangular_packages_forms_forms_o"],[]),n["ɵmpd"](4608,_.B,_.B,[n.ComponentFactoryResolver,n.Injector,_.yb,_.C]),n["ɵmpd"](4608,v.c,v.c,[]),n["ɵmpd"](1073742336,w.CommonModule,w.CommonModule,[]),n["ɵmpd"](1073742336,_.c,_.c,[]),n["ɵmpd"](1073742336,_.f,_.f,[]),n["ɵmpd"](1073742336,_.h,_.h,[]),n["ɵmpd"](1073742336,_.l,_.l,[]),n["ɵmpd"](1073742336,_.n,_.n,[]),n["ɵmpd"](1073742336,m["ɵangular_packages_forms_forms_d"],m["ɵangular_packages_forms_forms_d"],[]),n["ɵmpd"](1073742336,m.FormsModule,m.FormsModule,[]),n["ɵmpd"](1073742336,_.t,_.t,[]),n["ɵmpd"](1073742336,_.y,_.y,[]),n["ɵmpd"](1073742336,_.D,_.D,[]),n["ɵmpd"](1073742336,_.F,_.F,[]),n["ɵmpd"](1073742336,_.K,_.K,[]),n["ɵmpd"](1073742336,_.R,_.R,[]),n["ɵmpd"](1073742336,_.U,_.U,[]),n["ɵmpd"](1073742336,_.Z,_.Z,[]),n["ɵmpd"](1073742336,_.db,_.db,[]),n["ɵmpd"](1073742336,_.ib,_.ib,[]),n["ɵmpd"](1073742336,_.lb,_.lb,[]),n["ɵmpd"](1073742336,_.mb,_.mb,[]),n["ɵmpd"](1073742336,_.nb,_.nb,[]),n["ɵmpd"](1073742336,_.E,_.E,[]),n["ɵmpd"](1073742336,p.s,p.s,[[2,p.x],[2,p.o]]),n["ɵmpd"](1073742336,C,C,[]),n["ɵmpd"](1073742336,v.b,v.b,[]),n["ɵmpd"](1073742336,u.c,u.c,[]),n["ɵmpd"](1073742336,a,a,[]),n["ɵmpd"](1024,p.m,(function(){return[[{path:"details/:id",component:c,data:D}]]}),[])])}))}}]);