(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{JbRS:function(l,e,n){"use strict";n.r(e);var t=n("CcnG"),o=(n("WZ4y"),{suppressScrollX:!0}),i=function(){return function(){}}(),a=n("pMnS"),u=n("lQre"),r=n("86hh"),d=n("md+p"),s=function(){function l(l,e,n,t){this.activatedRoute=l,this.formBuilder=e,this.formService=n,this.router=t,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowData=[],this.fields=[],this.title="app",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow"}return l.prototype.ngOnInit=function(){var l=this;this.activatedRoute.params.subscribe((function(e){l.id=e.id}))},l.prototype.renderTable=function(l){var e=this;this.formService.getTableGroupValues().subscribe((function(n){e.columnDefs=n.columns,1==l&&(e.columnDefs.forEach((function(l){"belongs_to"!=l&&e.colData.push({headerName:l,field:l,sortable:!0,filter:!0,editable:!0})})),e.colData.push({headerName:"Actions",field:"id",cellRenderer:function(l){return'<a href="/admin/tables/details/'+l.value+'" class="btn btn-sm">Details</a>'}}))})),this.formService.getFormDetails(this.id).subscribe((function(l){e.rowDefs=l.data,e.rowData=[],e.gridApi.setRowData(e.rowData),e.parentObject=e.rowDefs,e.tables=e.parentObject.tables,e.tables.forEach((function(l){e.rowData.push(l)})),e.gridApi.setColumnDefs(e.colData),e.gridApi.setRowData(e.rowData)}))},l.prototype.addNewRow=function(){this.rowData.push({}),this.gridApi.setRowData(this.rowData)},l.prototype.onGridReady=function(l){this.gridApi=l.api,this.gridColumnApi=l.columnApi,this.renderTable(!0),this.gridApi.setColumnDefs(this.colData)},l.prototype.onBtStopEditing=function(){this.gridApi.stopEditing()},l.prototype.onCellClicked=function(l){this.editingRowIndex!=l.rowIndex&&(l.api.startEditingCell({rowIndex:l.rowIndex,colKey:l.column.colId}),this.editingRowIndex=l.rowIndex)},l.prototype.onCellEditingStopped=function(l){this.updatedData=l.data},l.prototype.onRowEditingStopped=function(l){var e=this,n={data:l.data};n.data.belongs_to=this.id,this.formService.saveTableValues(n).subscribe((function(l){e.renderTable(!1)}))},l}(),c=n("ZYCi"),p=n("gIcY"),f=t["ɵcrt"]({encapsulation:2,styles:[],data:{}});function h(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,17,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(l()(),t["ɵeld"](1,0,null,null,16,"div",[["class","mb-3 card"]],null,null,null,null,null)),(l()(),t["ɵeld"](2,0,null,null,8,"div",[["class","card-header-tab card-header"]],null,null,null,null,null)),(l()(),t["ɵeld"](3,0,null,null,2,"div",[["class","card-header-title font-size-lg text-capitalize font-weight-normal"]],null,null,null,null,null)),(l()(),t["ɵeld"](4,0,null,null,0,"i",[["class","header-icon lnr-charts icon-gradient bg-happy-green"]],null,null,null,null,null)),(l()(),t["ɵted"](-1,null,[" Forms "])),(l()(),t["ɵeld"](6,0,null,null,4,"div",[["class","btn-actions-pane-right text-capitalize"]],null,null,null,null,null)),(l()(),t["ɵeld"](7,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.addNewRow()&&t),t}),null,null)),(l()(),t["ɵted"](-1,null,["Add new row"])),(l()(),t["ɵeld"](9,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.onBtStopEditing()&&t),t}),null,null)),(l()(),t["ɵted"](-1,null,["Save data"])),(l()(),t["ɵeld"](11,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(l()(),t["ɵeld"](12,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(l()(),t["ɵeld"](13,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["id","SubFormGrid"],["style","width: 100%; height: 600px;"]],null,[[null,"cellClicked"],[null,"cellEditingStopped"],[null,"rowEditingStopped"],[null,"gridReady"]],(function(l,e,n){var t=!0,o=l.component;return"cellClicked"===e&&(t=!1!==o.onCellClicked(n)&&t),"cellEditingStopped"===e&&(t=!1!==o.onCellEditingStopped(n)&&t),"rowEditingStopped"===e&&(t=!1!==o.onRowEditingStopped(n)&&t),"gridReady"===e&&(t=!1!==o.onGridReady(n)&&t),t}),u.b,u.a)),t["ɵprd"](512,null,r.d,r.d,[t.NgZone]),t["ɵprd"](512,null,r.e,r.e,[]),t["ɵdid"](16,4898816,[["agGrid",4]],1,r.a,[t.ElementRef,t.ViewContainerRef,r.d,r.e,t.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],statusBar:[4,"statusBar"],sideBar:[5,"sideBar"],editType:[6,"editType"],enableRangeSelection:[7,"enableRangeSelection"],animateRows:[8,"animateRows"],enterMovesDownAfterEdit:[9,"enterMovesDownAfterEdit"],enterMovesDown:[10,"enterMovesDown"],enableCharts:[11,"enableCharts"]},{cellClicked:"cellClicked",gridReady:"gridReady",rowEditingStopped:"rowEditingStopped",cellEditingStopped:"cellEditingStopped"}),t["ɵqud"](603979776,1,{columns:1})],(function(l,e){var n=e.component;l(e,16,1,[n.rowData,n.colData,n.autoGroupColumnDef,n.defaultColDef,n.statusBar,n.sideBar,n.editType,!0,!0,!0,!0,!0])}),null)}function m(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"app-admin-tables",[],null,null,null,h,f)),t["ɵdid"](1,114688,null,0,s,[c.a,p.FormBuilder,d.a,c.o],null,null)],(function(l,e){l(e,1,0)}),null)}var g=t["ɵccf"]("app-admin-tables",s,m,{},{},[]),w=n("FQVY"),b=function(){function l(l,e,n,t,o){this.activatedRoute=l,this.formBuilder=e,this.formService=n,this.router=t,this.generalService=o,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowData=[],this.fields=[],this.title="app",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow"}return l.prototype.ngOnInit=function(){var l=this;this.activatedRoute.params.subscribe((function(e){l.id=e.id})),this.generalService.getTableDetails(this.id).subscribe((function(e){l.pageTitle=e.data.nepali_name,console.log(l.pageTitle)})),this.renderTable(!0)},l.prototype.renderTable=function(l){var e=this;this.formService.getQuestionColumns(this.id).subscribe((function(n){console.log(n),e.fields=n.fields,e.rowDefs=n.data,console.log(n),1==l&&(e.columnDefs=n.columns,e.columnDefs.forEach((function(l){"table"!=l&&e.colData.push({headerName:l,field:l,sortable:!0,filter:!0,editable:!0})}))),e.rowData=[],e.gridApi.setRowData(e.rowData),e.rowDefs.forEach((function(l){e.rowData.push(l)})),e.gridApi.setColumnDefs(e.colData),e.gridApi.setRowData(e.rowData)}))},l.prototype.addNewRow=function(){this.rowData.push({}),this.gridApi.setRowData(this.rowData)},l.prototype.onGridReady=function(l){this.gridApi=l.api,this.gridColumnApi=l.columnApi,this.gridApi.setColumnDefs(this.colData)},l.prototype.onBtStopEditing=function(){this.gridApi.stopEditing()},l.prototype.onCellClicked=function(l){this.editingRowIndex!=l.rowIndex&&(l.api.startEditingCell({rowIndex:l.rowIndex,colKey:l.column.colId}),this.editingRowIndex=l.rowIndex)},l.prototype.onCellEditingStopped=function(l){this.updatedData=l.data},l.prototype.onRowEditingStopped=function(l){var e=this,n={data:l.data};n.data.table=this.id,this.formService.saveQuestionColumns(n).subscribe((function(l){e.renderTable(!1)}))},l}(),D=t["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function v(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,17,"div",[["class","card main-card mb-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](1,0,null,null,6,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t["ɵted"](2,null,[" "," "])),(l()(),t["ɵeld"](3,0,null,null,4,"div",[["class","btn-actions-pane-right text-capitalize"]],null,null,null,null,null)),(l()(),t["ɵeld"](4,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.addNewRow()&&t),t}),null,null)),(l()(),t["ɵted"](-1,null,["Add new row"])),(l()(),t["ɵeld"](6,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.onBtStopEditing()&&t),t}),null,null)),(l()(),t["ɵted"](-1,null,["Save data"])),(l()(),t["ɵeld"](8,0,null,null,9,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["ɵeld"](9,0,null,null,8,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(l()(),t["ɵeld"](10,0,null,null,7,"div",[["class","mb-3 card"]],null,null,null,null,null)),(l()(),t["ɵeld"](11,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(l()(),t["ɵeld"](12,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(l()(),t["ɵeld"](13,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["id","tableDesignerGrid"],["style","width: auto; height: 600px;"]],null,[[null,"cellClicked"],[null,"cellEditingStopped"],[null,"rowEditingStopped"],[null,"gridReady"]],(function(l,e,n){var t=!0,o=l.component;return"cellClicked"===e&&(t=!1!==o.onCellClicked(n)&&t),"cellEditingStopped"===e&&(t=!1!==o.onCellEditingStopped(n)&&t),"rowEditingStopped"===e&&(t=!1!==o.onRowEditingStopped(n)&&t),"gridReady"===e&&(t=!1!==o.onGridReady(n)&&t),t}),u.b,u.a)),t["ɵprd"](512,null,r.d,r.d,[t.NgZone]),t["ɵprd"](512,null,r.e,r.e,[]),t["ɵdid"](16,4898816,[["agGrid",4]],1,r.a,[t.ElementRef,t.ViewContainerRef,r.d,r.e,t.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],statusBar:[4,"statusBar"],sideBar:[5,"sideBar"],editType:[6,"editType"],enableRangeSelection:[7,"enableRangeSelection"],animateRows:[8,"animateRows"],enterMovesDownAfterEdit:[9,"enterMovesDownAfterEdit"],enterMovesDown:[10,"enterMovesDown"],enableCharts:[11,"enableCharts"]},{cellClicked:"cellClicked",gridReady:"gridReady",rowEditingStopped:"rowEditingStopped",cellEditingStopped:"cellEditingStopped"}),t["ɵqud"](603979776,1,{columns:1})],(function(l,e){var n=e.component;l(e,16,1,[n.rowData,n.colData,n.autoGroupColumnDef,n.defaultColDef,n.statusBar,n.sideBar,n.editType,!0,!0,!0,!0,!0])}),(function(l,e){l(e,2,0,e.component.pageTitle)}))}function C(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"app-table-designer",[],null,null,null,v,D)),t["ɵdid"](1,114688,null,0,b,[c.a,p.FormBuilder,d.a,c.o,w.a],null,null)],(function(l,e){l(e,1,0)}),null)}var E=t["ɵccf"]("app-table-designer",b,C,{},{},[]),y=(n("2hxB"),function(){function l(l,e,n,t,o){this.activatedRoute=l,this.formBuilder=e,this.formService=n,this.router=t,this.generalService=o,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowData=[],this.fields=[],this.title="app",this.buttonText="Save Data",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow",this.colIds=[],this.indexIds=[]}return l.prototype.ngOnInit=function(){var l=this;this.activatedRoute.params.subscribe((function(e){l.id=e.id,l.gridId="#agGridTable"+l.id,l.generalService.getTableDetails(l.id).subscribe((function(e){l.pageTitle=e.data.nepali_name})),l.renderTable(!0)}))},l.prototype.renderTable=function(l){var e=this;this.formService.getDataHeaders(this.id).subscribe((function(n){console.log(n),e.row_headers=n.rows_headers,e.col_headers=n.col_headers,e.index_cols=n.index_cols,e.empty_table=n.empty_table,e.rowData=[],e.gridApi.setRowData([]),1==l&&(e.colData=[],e.gridApi.setColumnDefs(e.colData),e.colData.push({headerName:"_id",value:"_id",hide:!0,suppressToolPanel:!0}),e.colIds.push("_id"),e.colData.push({headerName:"group",field:"group",pinned:"left"}),e.colIds.push("group"),e.colData.push({headerName:e.row_headers.title,field:"row",pinned:"left"}),e.colIds.push(e.row_headers.title),e.indexIds.push("row"),e.index_cols.forEach((function(l){if(l.options.length>0){var n=[];l.options.forEach((function(l){n.push(l.nepali_name)})),e.colData.push({headerName:l.title,field:l.col_id,sortable:!0,filter:!0,editable:!0,cellEditor:"agSelectCellEditor",cellEditorParams:{values:n}})}else e.colData.push({headerName:l.title,field:l.col_id,sortable:!0,filter:!0,editable:!0});e.colIds.push(l.col_id),e.indexIds.push(l.col_id)})),e.col_headers.forEach((function(l){e.modifyColumnHeaders(l),console.log("COlumn iems"),console.log(l),e.colData.push(l)})),e.gridApi.setColumnDefs(e.colData)),e.empty_table.forEach((function(l){var n={},t="",o="";e.row_headers.indicators.forEach((function(e){e.id==l.row&&(t=e.title,o=e.group[0])})),n.group=o,n.row=t;var i=[];i.push("group"),i.push("row");var a=Object.keys(l);a.forEach((function(t){if("row"!=t&&"group"!=t){var o="";e.index_cols.forEach((function(e){e.col_id==t&&e.options.forEach((function(e){e.id==l[t]&&(o=e.nepali_name,i.push(t))}))})),n[t]=o}})),a.forEach((function(e){var t=!1;i.forEach((function(l){l!=e||(t=!0)})),1!=t&&(n[e]=l[e])})),e.rowData.push(n)})),console.log("Row data"),console.log(e.rowData),e.formService.getData(e.id).subscribe((function(l){e.apiData=l.data,e.rowData.forEach((function(l){var n="";e.row_headers.indicators.forEach((function(e){e.title==l.row&&(n=e.id)})),l.row=n;var t=[];t.push("row"),Object.keys(l).forEach((function(n){if("row"!=n){var o="";e.index_cols.forEach((function(e){e.col_id==n&&e.options.forEach((function(e){e.nepali_name==l[n]&&(o=e.id,t.push(n))}))})),l[n]=o}})),e.apiData.forEach((function(n){var t=!0;e.indexIds.forEach((function(e){0!=t&&(t=l[e]==n[e])})),1==t&&(Object.keys(n).forEach((function(t){var o=!1;e.indexIds.forEach((function(l){l!=t||(o=!0)})),1!=o&&(l[t]=n[t])})),console.log(l))})),n="";var o="";e.row_headers.indicators.forEach((function(e){e.id==l.row&&(n=e.title,o=e.group[0])})),l.group=o,l.row=n,(t=[]).push("group"),t.push("row"),e.indexIds.forEach((function(n){if("row"!=n&&"group"!=n){var o="";e.index_cols.forEach((function(e){e.col_id==n&&e.options.forEach((function(e){e.id==l[n]&&(o=e.nepali_name,t.push(n))}))})),l[n]=o}}))})),e.gridApi.setRowData([]),e.gridApi.setRowData(e.rowData);var n=[];e.gridColumnApi.getAllColumns().forEach((function(l){n.push(l.colId)})),e.gridColumnApi.autoSizeColumns(n,!1)}))}))},l.prototype.addNewRow=function(){this.rowData.push({}),this.gridApi.setRowData(this.rowData)},l.prototype.onGridReady=function(l){this.gridApi=l.api,this.gridColumnApi=l.columnApi,this.gridApi.setColumnDefs([]),this.renderTable(!1)},l.prototype.onBtStopEditing=function(){this.gridApi.stopEditing()},l.prototype.navigateToDesignTables=function(){this.router.navigate(["admin/tables/design/"+this.id])},l.prototype.onCellClicked=function(l){this.editingRowIndex!=l.rowIndex&&(l.api.startEditingCell({rowIndex:l.rowIndex,colKey:l.column.colId}),this.editingRowIndex=l.rowIndex),this.buttonText="Save Data",this.btnClass=""},l.prototype.onCellEditingStopped=function(l){this.updatedData=l.data},l.prototype.onRowEditingStopped=function(l){var e=this,n=l.data;console.log("On sop"),console.log(n);var t={},o="";this.row_headers.indicators.forEach((function(l){l.title==n.row&&(o=l.id)})),t.row=o;var i=[];i.push("row");var a=Object.keys(n);a.forEach((function(l){if("row"!=l){var o="";e.index_cols.forEach((function(e){e.col_id==l&&e.options.forEach((function(e){e.nepali_name==n[l]&&(o=e.id,i.push(l))}))})),t[l]=o}})),a.forEach((function(l){var e=!1;i.forEach((function(n){n!=l||(e=!0)})),1!=e&&(t[l]=n[l])}));var u={data:t};console.log(u),this.formService.saveData(this.id,u).subscribe((function(n){l.data._id=n.data[0]._id,e.buttonText="Saved",e.btnClass="btn-success"}))},l.prototype.onColumnResized=function(l){},l.prototype.modifyColumnHeaders=function(l){var e=this;return l.hasOwnProperty("children")&&l.children.forEach((function(l){if("Select"==l.type){var n=[];l.options.forEach((function(l){n.push(l.nepali_name)})),l.cellEditor="agSelectCellEditor",l.cellEditorParams={values:n}}e.modifyColumnHeaders(l)})),null},l}()),R=t["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function S(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,17,"div",[["class","card main-card mb-3"]],null,null,null,null,null)),(l()(),t["ɵeld"](1,0,null,null,6,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t["ɵted"](2,null,[" "," "])),(l()(),t["ɵeld"](3,0,null,null,4,"div",[["class","btn-actions-pane-right text-capitalize"]],null,null,null,null,null)),(l()(),t["ɵeld"](4,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.navigateToDesignTables()&&t),t}),null,null)),(l()(),t["ɵted"](-1,null,["Design Tables"])),(l()(),t["ɵeld"](6,0,null,null,1,"button",[],[[8,"className",0]],[[null,"click"]],(function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.onBtStopEditing()&&t),t}),null,null)),(l()(),t["ɵted"](7,null,["",""])),(l()(),t["ɵeld"](8,0,null,null,9,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["ɵeld"](9,0,null,null,8,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(l()(),t["ɵeld"](10,0,null,null,7,"div",[["class","mb-3 card"]],null,null,null,null,null)),(l()(),t["ɵeld"](11,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(l()(),t["ɵeld"](12,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(l()(),t["ɵeld"](13,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["style","width: auto; height: 600px;"]],[[8,"id",0]],[[null,"cellClicked"],[null,"cellEditingStopped"],[null,"rowEditingStopped"],[null,"gridReady"],[null,"columnResized"]],(function(l,e,n){var t=!0,o=l.component;return"cellClicked"===e&&(t=!1!==o.onCellClicked(n)&&t),"cellEditingStopped"===e&&(t=!1!==o.onCellEditingStopped(n)&&t),"rowEditingStopped"===e&&(t=!1!==o.onRowEditingStopped(n)&&t),"gridReady"===e&&(t=!1!==o.onGridReady(n)&&t),"columnResized"===e&&(t=!1!==o.onColumnResized(n)&&t),t}),u.b,u.a)),t["ɵprd"](512,null,r.d,r.d,[t.NgZone]),t["ɵprd"](512,null,r.e,r.e,[]),t["ɵdid"](16,4898816,[["agGrid",4]],1,r.a,[t.ElementRef,t.ViewContainerRef,r.d,r.e,t.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],statusBar:[4,"statusBar"],sideBar:[5,"sideBar"],editType:[6,"editType"],enableRangeSelection:[7,"enableRangeSelection"],animateRows:[8,"animateRows"],enterMovesDownAfterEdit:[9,"enterMovesDownAfterEdit"],enterMovesDown:[10,"enterMovesDown"],enableCharts:[11,"enableCharts"]},{columnResized:"columnResized",cellClicked:"cellClicked",gridReady:"gridReady",rowEditingStopped:"rowEditingStopped",cellEditingStopped:"cellEditingStopped"}),t["ɵqud"](603979776,1,{columns:1})],(function(l,e){var n=e.component;l(e,16,1,[n.rowData,n.colData,n.autoGroupColumnDef,n.defaultColDef,n.statusBar,n.sideBar,n.editType,!0,!0,!0,!0,!0])}),(function(l,e){var n=e.component;l(e,2,0,n.pageTitle),l(e,6,0,t["ɵinlineInterpolate"](1,"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm ",n.btnClass,"")),l(e,7,0,n.buttonText),l(e,13,0,t["ɵinlineInterpolate"](1,"",n.gridId,""))}))}function _(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"app-table-details",[],null,null,null,S,R)),t["ɵdid"](1,114688,null,0,y,[c.a,p.FormBuilder,d.a,c.o,w.a],null,null)],(function(l,e){l(e,1,0)}),null)}var x=t["ɵccf"]("app-table-details",y,_,{},{},[]),A=function(){function l(l,e,n,t){this.activatedRoute=l,this.formBuilder=e,this.formService=n,this.router=t,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowData=[],this.fields=[],this.title="app",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow",this.colIds=[],this.indexIds=[]}return l.prototype.ngOnInit=function(){var l=this;this.activatedRoute.params.subscribe((function(e){l.id=e.id}))},l.prototype.renderTable=function(l){var e=this;this.formService.getDataHeaders(this.id).subscribe((function(n){console.log(n),e.row_headers=n.rows_headers,e.col_headers=n.col_headers,e.index_cols=n.index_cols,e.empty_table=n.empty_table,e.rowData=[],e.gridApi.setRowData([]),1==l&&(e.colData.push({headerName:"_id",value:"_id",hide:!0,suppressToolPanel:!0}),e.colIds.push("_id"),e.colData.push({headerName:"group",field:"group",pinned:"left"}),e.colIds.push("group"),e.colData.push({headerName:e.row_headers.title,field:"row",pinned:"left"}),e.colIds.push(e.row_headers.title),e.indexIds.push("row"),e.index_cols.forEach((function(l){if(l.options.length>0){var n=[];l.options.forEach((function(l){n.push(l.nepali_name)})),e.colData.push({headerName:l.title,field:l.col_id,sortable:!0,filter:!0,cellEditor:"agSelectCellEditor",cellEditorParams:{values:n}})}else e.colData.push({headerName:l.title,field:l.col_id,sortable:!0,filter:!0});e.colIds.push(l.col_id),e.indexIds.push(l.col_id)})),e.col_headers.forEach((function(l){var n={headerName:"",children:[]},t={headerName:"",children:[]};console.log(l),console.log(l.group.length),l.group.reverse().forEach((function(l){""==n.headerName?n.headerName=l:""==t.headerName&&(t.headerName=l)})),t.children.push({headerName:l.title,field:l.id,sortable:!0,filter:!0,editable:!0}),n.children.push(t),e.colData.push(n),e.colIds.push(l.id)}))),e.gridApi.setColumnDefs(e.colData),e.empty_table.forEach((function(l){var n={},t="",o="";e.row_headers.indicators.forEach((function(e){e.id==l.row&&(t=e.title,o=e.group[0])})),n.group=o,n.row=t;var i=[];i.push("group"),i.push("row");var a=Object.keys(l);a.forEach((function(t){if("row"!=t&&"group"!=t){var o="";e.index_cols.forEach((function(e){e.col_id==t&&e.options.forEach((function(e){e.id==l[t]&&(o=e.nepali_name,i.push(t))}))})),n[t]=o}})),a.forEach((function(e){var t=!1;i.forEach((function(l){l!=e||(t=!0)})),1!=t&&(n[e]=l[e])})),e.rowData.push(n)})),console.log("Row data"),console.log(e.rowData),e.formService.getData(e.id).subscribe((function(l){e.apiData=l.data,e.rowData.forEach((function(l){var n="";e.row_headers.indicators.forEach((function(e){e.title==l.row&&(n=e.id)})),l.row=n;var t=[];t.push("row"),Object.keys(l).forEach((function(n){if("row"!=n){var o="";e.index_cols.forEach((function(e){e.col_id==n&&e.options.forEach((function(e){e.nepali_name==l[n]&&(o=e.id,t.push(n))}))})),l[n]=o}})),e.apiData.forEach((function(n){var t=!0;e.indexIds.forEach((function(e){0!=t&&(t=l[e]==n[e])})),1==t&&(Object.keys(n).forEach((function(t){var o=!1;e.indexIds.forEach((function(l){l!=t||(o=!0)})),1!=o&&(l[t]=n[t])})),console.log(l))})),n="";var o="";e.row_headers.indicators.forEach((function(e){e.id==l.row&&(n=e.title,o=e.group[0])})),l.group=o,l.row=n,(t=[]).push("group"),t.push("row"),e.indexIds.forEach((function(n){if("row"!=n&&"group"!=n){var o="";e.index_cols.forEach((function(e){e.col_id==n&&e.options.forEach((function(e){e.id==l[n]&&(o=e.nepali_name,t.push(n))}))})),l[n]=o}}))})),e.gridApi.setRowData([]),e.gridApi.setRowData(e.rowData)}))}))},l.prototype.addNewRow=function(){this.rowData.push({}),this.gridApi.setRowData(this.rowData)},l.prototype.onGridReady=function(l){this.gridApi=l.api,this.gridColumnApi=l.columnApi,this.renderTable(!0)},l.prototype.onBtStopEditing=function(){this.gridApi.stopEditing()},l.prototype.onCellClicked=function(l){this.editingRowIndex!=l.rowIndex&&(l.api.startEditingCell({rowIndex:l.rowIndex,colKey:l.column.colId}),this.editingRowIndex=l.rowIndex)},l.prototype.onCellEditingStopped=function(l){this.updatedData=l.data},l.prototype.onRowEditingStopped=function(l){var e=this,n=l.data;console.log("On sop"),console.log(n);var t={},o="";this.row_headers.indicators.forEach((function(l){l.title==n.row&&(o=l.id)})),t.row=o;var i=[];i.push("row");var a=Object.keys(n);a.forEach((function(l){if("row"!=l){var o="";e.index_cols.forEach((function(e){e.col_id==l&&e.options.forEach((function(e){e.nepali_name==n[l]&&(o=e.id,i.push(l))}))})),t[l]=o}})),a.forEach((function(l){var e=!1;i.forEach((function(n){n!=l||(e=!0)})),1!=e&&(t[l]=n[l])}));var u={data:t};console.log(u),this.formService.saveData(this.id,u).subscribe((function(l){e.renderTable(!1)}))},l}(),I=t["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function T(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,15,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(l()(),t["ɵeld"](1,0,null,null,14,"div",[["class","mb-3 card"]],null,null,null,null,null)),(l()(),t["ɵeld"](2,0,null,null,6,"div",[["class","card-header-tab card-header"]],null,null,null,null,null)),(l()(),t["ɵeld"](3,0,null,null,2,"div",[["class","card-header-title font-size-lg text-capitalize font-weight-normal"]],null,null,null,null,null)),(l()(),t["ɵeld"](4,0,null,null,0,"i",[["class","header-icon lnr-charts icon-gradient bg-happy-green"]],null,null,null,null,null)),(l()(),t["ɵted"](-1,null,[" Enter data in tables from here "])),(l()(),t["ɵeld"](6,0,null,null,2,"div",[["class","btn-actions-pane-right text-capitalize"]],null,null,null,null,null)),(l()(),t["ɵeld"](7,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.onBtStopEditing()&&t),t}),null,null)),(l()(),t["ɵted"](-1,null,["Save data"])),(l()(),t["ɵeld"](9,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(l()(),t["ɵeld"](10,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(l()(),t["ɵeld"](11,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["id","tableDataEntryGrid"],["style","width: auto; height: 600px;"]],null,[[null,"cellClicked"],[null,"cellEditingStopped"],[null,"rowEditingStopped"],[null,"gridReady"]],(function(l,e,n){var t=!0,o=l.component;return"cellClicked"===e&&(t=!1!==o.onCellClicked(n)&&t),"cellEditingStopped"===e&&(t=!1!==o.onCellEditingStopped(n)&&t),"rowEditingStopped"===e&&(t=!1!==o.onRowEditingStopped(n)&&t),"gridReady"===e&&(t=!1!==o.onGridReady(n)&&t),t}),u.b,u.a)),t["ɵprd"](512,null,r.d,r.d,[t.NgZone]),t["ɵprd"](512,null,r.e,r.e,[]),t["ɵdid"](14,4898816,[["agGrid",4]],1,r.a,[t.ElementRef,t.ViewContainerRef,r.d,r.e,t.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],statusBar:[4,"statusBar"],sideBar:[5,"sideBar"],editType:[6,"editType"],enableRangeSelection:[7,"enableRangeSelection"],animateRows:[8,"animateRows"],enterMovesDownAfterEdit:[9,"enterMovesDownAfterEdit"],enterMovesDown:[10,"enterMovesDown"],enableCharts:[11,"enableCharts"]},{cellClicked:"cellClicked",gridReady:"gridReady",rowEditingStopped:"rowEditingStopped",cellEditingStopped:"cellEditingStopped"}),t["ɵqud"](603979776,1,{columns:1})],(function(l,e){var n=e.component;l(e,14,1,[n.rowData,n.colData,n.autoGroupColumnDef,n.defaultColDef,n.statusBar,n.sideBar,n.editType,!0,!0,!0,!0,!0])}),null)}function k(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"app-table-data-entry",[],null,null,null,T,I)),t["ɵdid"](1,114688,null,0,A,[c.a,p.FormBuilder,d.a,c.o],null,null)],(function(l,e){l(e,1,0)}),null)}var B=t["ɵccf"]("app-table-data-entry",A,k,{},{},[]),P=n("ZSaW"),G=n("Ip0R"),N=n("mEXF"),F=n("M2Lx"),M=n("Zseb"),z=n("bse0"),O={title:"Tables"},L={title:"Tables"},j={title:"Tables"},K={title:"Tables"},V=function(){return function(){}}(),W=n("6I2X"),Z=n("Pc/E"),H=n("dFiH"),X=n("Fzqc"),q=n("Wf4p"),Y=n("ZYjt"),Q=function(){return function(){}}(),J=n("4c35"),U=n("dWZg"),$=n("lLAP"),ll=n("La40");n("t/Na"),n("F/XL"),n("XlPw"),n("VNr4"),n("xMyE"),n("67Y/"),n("9Z1F"),n("2WpN"),n("S1nX"),n("t9fZ"),n("mrSG"),n("n6gG");var el=function(){return function(){}}(),nl=n("NVKa");n.d(e,"TablesModuleNgFactory",(function(){return tl}));var tl=t["ɵcmf"](i,[],(function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[a.a,g,E,x,B,P.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,G.NgLocalization,G.NgLocaleLocalization,[t.LOCALE_ID,[2,G["ɵangular_packages_common_common_a"]]]),t["ɵmpd"](4608,N.c,N.c,[]),t["ɵmpd"](4608,F.c,F.c,[]),t["ɵmpd"](1073742336,G.CommonModule,G.CommonModule,[]),t["ɵmpd"](1073742336,N.b,N.b,[]),t["ɵmpd"](1073742336,M.b,M.b,[]),t["ɵmpd"](1073742336,z.d,z.d,[]),t["ɵmpd"](1073742336,c.s,c.s,[[2,c.x],[2,c.o]]),t["ɵmpd"](1073742336,V,V,[]),t["ɵmpd"](1073742336,W.a,W.a,[]),t["ɵmpd"](1073742336,Z.a,Z.a,[]),t["ɵmpd"](1073742336,H.b,H.b,[]),t["ɵmpd"](1073742336,r.c,r.c,[]),t["ɵmpd"](1073742336,X.a,X.a,[]),t["ɵmpd"](1073742336,q.c,q.c,[[2,q.a],[2,Y.HAMMER_LOADER]]),t["ɵmpd"](1073742336,Q,Q,[]),t["ɵmpd"](1073742336,J.c,J.c,[]),t["ɵmpd"](1073742336,U.b,U.b,[]),t["ɵmpd"](1073742336,q.e,q.e,[]),t["ɵmpd"](1073742336,F.d,F.d,[]),t["ɵmpd"](1073742336,$.a,$.a,[]),t["ɵmpd"](1073742336,ll.j,ll.j,[]),t["ɵmpd"](1073742336,el,el,[]),t["ɵmpd"](1073742336,i,i,[]),t["ɵmpd"](1024,c.m,(function(){return[[{path:":id",component:s,data:O},{path:"design/:id",component:b,data:L},{path:"details/:id",component:y,data:j},{path:"data/:id",component:A,data:K}],[{path:"",component:nl.a,data:W.b}]]}),[]),t["ɵmpd"](256,z.a,o,[])])}))}}]);