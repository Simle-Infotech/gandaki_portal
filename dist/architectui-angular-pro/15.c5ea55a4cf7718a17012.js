(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{JbRS:function(t,l,e){"use strict";e.r(l);var n=e("CcnG"),o=(e("WZ4y"),{suppressScrollX:!0}),a=function(){return function(){}}(),i=e("pMnS"),r=e("lQre"),u=e("86hh"),d=e("md+p"),s=function(){function t(t,l,e,n){this.activatedRoute=t,this.formBuilder=l,this.formService=e,this.router=n,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowData=[],this.fields=[],this.title="app",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow"}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe((function(l){t.id=l.id}))},t.prototype.renderTable=function(t){var l=this;this.formService.getTableGroupValues().subscribe((function(e){l.columnDefs=e.columns,1==t&&(l.columnDefs.forEach((function(t){"belongs_to"!=t&&l.colData.push({headerName:t,field:t,sortable:!0,filter:!0,editable:!0})})),l.colData.push({headerName:"Actions",field:"id",cellRenderer:function(t){return'<a href="/#/admin/tables/details/'+t.value+'" class="btn btn-sm">Details</a>'}}))})),this.formService.getFormDetails(this.id).subscribe((function(t){l.rowDefs=t.data,l.rowData=[],l.gridApi.setRowData(l.rowData),l.parentObject=l.rowDefs,l.tables=l.parentObject.tables,l.tables.forEach((function(t){l.rowData.push(t)})),l.gridApi.setColumnDefs(l.colData),l.gridApi.setRowData(l.rowData)}))},t.prototype.addNewRow=function(){this.rowData.push({}),this.gridApi.setRowData(this.rowData)},t.prototype.onGridReady=function(t){this.gridApi=t.api,this.gridColumnApi=t.columnApi,this.renderTable(!0),this.gridApi.setColumnDefs(this.colData)},t.prototype.onBtStopEditing=function(){this.gridApi.stopEditing()},t.prototype.onCellClicked=function(t){this.editingRowIndex!=t.rowIndex&&(t.api.startEditingCell({rowIndex:t.rowIndex,colKey:t.column.colId}),this.editingRowIndex=t.rowIndex)},t.prototype.onCellEditingStopped=function(t){this.updatedData=t.data},t.prototype.onRowEditingStopped=function(t){var l=this,e={data:t.data};e.data.belongs_to=this.id,this.formService.saveTableValues(e).subscribe((function(t){l.renderTable(!1)}))},t}(),c=e("ZYCi"),p=e("gIcY"),f=n["ɵcrt"]({encapsulation:2,styles:[],data:{}});function h(t){return n["ɵvid"](0,[(t()(),n["ɵeld"](0,0,null,null,17,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(t()(),n["ɵeld"](1,0,null,null,16,"div",[["class","mb-3 card"]],null,null,null,null,null)),(t()(),n["ɵeld"](2,0,null,null,8,"div",[["class","card-header-tab card-header"]],null,null,null,null,null)),(t()(),n["ɵeld"](3,0,null,null,2,"div",[["class","card-header-title font-size-lg text-capitalize font-weight-normal"]],null,null,null,null,null)),(t()(),n["ɵeld"](4,0,null,null,0,"i",[["class","header-icon lnr-charts icon-gradient bg-happy-green"]],null,null,null,null,null)),(t()(),n["ɵted"](-1,null,[" Forms "])),(t()(),n["ɵeld"](6,0,null,null,4,"div",[["class","btn-actions-pane-right text-capitalize"]],null,null,null,null,null)),(t()(),n["ɵeld"](7,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(t,l,e){var n=!0;return"click"===l&&(n=!1!==t.component.addNewRow()&&n),n}),null,null)),(t()(),n["ɵted"](-1,null,["Add new row"])),(t()(),n["ɵeld"](9,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(t,l,e){var n=!0;return"click"===l&&(n=!1!==t.component.onBtStopEditing()&&n),n}),null,null)),(t()(),n["ɵted"](-1,null,["Save data"])),(t()(),n["ɵeld"](11,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(t()(),n["ɵeld"](12,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(t()(),n["ɵeld"](13,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["id","SubFormGrid"],["style","width: 100%; height: 600px;"]],null,[[null,"cellClicked"],[null,"cellEditingStopped"],[null,"rowEditingStopped"],[null,"gridReady"]],(function(t,l,e){var n=!0,o=t.component;return"cellClicked"===l&&(n=!1!==o.onCellClicked(e)&&n),"cellEditingStopped"===l&&(n=!1!==o.onCellEditingStopped(e)&&n),"rowEditingStopped"===l&&(n=!1!==o.onRowEditingStopped(e)&&n),"gridReady"===l&&(n=!1!==o.onGridReady(e)&&n),n}),r.b,r.a)),n["ɵprd"](512,null,u.d,u.d,[n.NgZone]),n["ɵprd"](512,null,u.e,u.e,[]),n["ɵdid"](16,4898816,[["agGrid",4]],1,u.a,[n.ElementRef,n.ViewContainerRef,u.d,u.e,n.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],statusBar:[4,"statusBar"],sideBar:[5,"sideBar"],editType:[6,"editType"],enableRangeSelection:[7,"enableRangeSelection"],animateRows:[8,"animateRows"],enterMovesDownAfterEdit:[9,"enterMovesDownAfterEdit"],enterMovesDown:[10,"enterMovesDown"],enableCharts:[11,"enableCharts"]},{cellClicked:"cellClicked",gridReady:"gridReady",rowEditingStopped:"rowEditingStopped",cellEditingStopped:"cellEditingStopped"}),n["ɵqud"](603979776,1,{columns:1})],(function(t,l){var e=l.component;t(l,16,1,[e.rowData,e.colData,e.autoGroupColumnDef,e.defaultColDef,e.statusBar,e.sideBar,e.editType,!0,!0,!0,!0,!0])}),null)}function g(t){return n["ɵvid"](0,[(t()(),n["ɵeld"](0,0,null,null,1,"app-admin-tables",[],null,null,null,h,f)),n["ɵdid"](1,114688,null,0,s,[c.a,p.FormBuilder,d.a,c.o],null,null)],(function(t,l){t(l,1,0)}),null)}var m=n["ɵccf"]("app-admin-tables",s,g,{},{},[]),b=e("FQVY"),w=function(){function t(t,l,e,n,o){this.activatedRoute=t,this.formBuilder=l,this.formService=e,this.router=n,this.generalService=o,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowData=[],this.fields=[],this.title="app",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow"}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe((function(l){t.id=l.id})),this.generalService.getTableDetails(this.id).subscribe((function(l){t.pageTitle=l.data.nepali_name,console.log(t.pageTitle)})),this.renderTable(!0)},t.prototype.renderTable=function(t){var l=this;this.formService.getQuestionColumns(this.id).subscribe((function(e){console.log(e),l.fields=e.fields,l.rowDefs=e.data,console.log(e),1==t&&(l.columnDefs=e.columns,l.columnDefs.forEach((function(t){"table"!=t&&l.colData.push({headerName:t,field:t,sortable:!0,filter:!0,editable:!0})}))),l.rowData=[],l.gridApi.setRowData(l.rowData),l.rowDefs.forEach((function(t){l.rowData.push(t)})),l.gridApi.setColumnDefs(l.colData),l.gridApi.setRowData(l.rowData)}))},t.prototype.addNewRow=function(){this.rowData.push({}),this.gridApi.setRowData(this.rowData)},t.prototype.onGridReady=function(t){this.gridApi=t.api,this.gridColumnApi=t.columnApi,this.gridApi.setColumnDefs(this.colData)},t.prototype.onBtStopEditing=function(){this.gridApi.stopEditing()},t.prototype.onCellClicked=function(t){this.editingRowIndex!=t.rowIndex&&(t.api.startEditingCell({rowIndex:t.rowIndex,colKey:t.column.colId}),this.editingRowIndex=t.rowIndex)},t.prototype.onCellEditingStopped=function(t){this.updatedData=t.data},t.prototype.onRowEditingStopped=function(t){var l=this,e={data:t.data};e.data.table=this.id,this.formService.saveQuestionColumns(e).subscribe((function(t){l.renderTable(!1)}))},t}(),v=n["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function D(t){return n["ɵvid"](0,[(t()(),n["ɵeld"](0,0,null,null,17,"div",[["class","card main-card mb-3"]],null,null,null,null,null)),(t()(),n["ɵeld"](1,0,null,null,6,"div",[["class","card-header"]],null,null,null,null,null)),(t()(),n["ɵted"](2,null,[" "," "])),(t()(),n["ɵeld"](3,0,null,null,4,"div",[["class","btn-actions-pane-right text-capitalize"]],null,null,null,null,null)),(t()(),n["ɵeld"](4,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(t,l,e){var n=!0;return"click"===l&&(n=!1!==t.component.addNewRow()&&n),n}),null,null)),(t()(),n["ɵted"](-1,null,["Add new row"])),(t()(),n["ɵeld"](6,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(t,l,e){var n=!0;return"click"===l&&(n=!1!==t.component.onBtStopEditing()&&n),n}),null,null)),(t()(),n["ɵted"](-1,null,["Save data"])),(t()(),n["ɵeld"](8,0,null,null,9,"div",[["class","card-body"]],null,null,null,null,null)),(t()(),n["ɵeld"](9,0,null,null,8,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(t()(),n["ɵeld"](10,0,null,null,7,"div",[["class","mb-3 card"]],null,null,null,null,null)),(t()(),n["ɵeld"](11,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(t()(),n["ɵeld"](12,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(t()(),n["ɵeld"](13,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["id","tableDesignerGrid"],["style","width: auto; height: 600px;"]],null,[[null,"cellClicked"],[null,"cellEditingStopped"],[null,"rowEditingStopped"],[null,"gridReady"]],(function(t,l,e){var n=!0,o=t.component;return"cellClicked"===l&&(n=!1!==o.onCellClicked(e)&&n),"cellEditingStopped"===l&&(n=!1!==o.onCellEditingStopped(e)&&n),"rowEditingStopped"===l&&(n=!1!==o.onRowEditingStopped(e)&&n),"gridReady"===l&&(n=!1!==o.onGridReady(e)&&n),n}),r.b,r.a)),n["ɵprd"](512,null,u.d,u.d,[n.NgZone]),n["ɵprd"](512,null,u.e,u.e,[]),n["ɵdid"](16,4898816,[["agGrid",4]],1,u.a,[n.ElementRef,n.ViewContainerRef,u.d,u.e,n.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],statusBar:[4,"statusBar"],sideBar:[5,"sideBar"],editType:[6,"editType"],enableRangeSelection:[7,"enableRangeSelection"],animateRows:[8,"animateRows"],enterMovesDownAfterEdit:[9,"enterMovesDownAfterEdit"],enterMovesDown:[10,"enterMovesDown"],enableCharts:[11,"enableCharts"]},{cellClicked:"cellClicked",gridReady:"gridReady",rowEditingStopped:"rowEditingStopped",cellEditingStopped:"cellEditingStopped"}),n["ɵqud"](603979776,1,{columns:1})],(function(t,l){var e=l.component;t(l,16,1,[e.rowData,e.colData,e.autoGroupColumnDef,e.defaultColDef,e.statusBar,e.sideBar,e.editType,!0,!0,!0,!0,!0])}),(function(t,l){t(l,2,0,l.component.pageTitle)}))}function C(t){return n["ɵvid"](0,[(t()(),n["ɵeld"](0,0,null,null,1,"app-table-designer",[],null,null,null,D,v)),n["ɵdid"](1,114688,null,0,w,[c.a,p.FormBuilder,d.a,c.o,b.a],null,null)],(function(t,l){t(l,1,0)}),null)}var S=n["ɵccf"]("app-table-designer",w,C,{},{},[]),E=(e("2hxB"),function(){function t(t,l,e,n,o){this.activatedRoute=t,this.formBuilder=l,this.formService=e,this.router=n,this.generalService=o,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowData=[],this.fields=[],this.title="app",this.buttonText="Save Data",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow",this.colIds=[],this.indexIds=[],this.tableState={},this.rowClassRules={"sick-days-warning":function(t){return t.node.rowIndex%2==0}}}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe((function(l){t.id=l.id,t.gridId="#agGridTable"+t.id,t.generalService.getTableDetails(t.id).subscribe((function(l){t.pageTitle=l.data.nepali_name})),t.renderTable(!0),t.restoreState()}))},t.prototype.renderTable=function(t){var l=this;this.formService.getDataHeaders(this.id).subscribe((function(e){l.row_headers=e.rows_headers,l.col_headers=e.col_headers,l.index_cols=e.index_cols,l.empty_table=e.empty_table,l.rowData=[],l.gridApi.setRowData([]),1==t&&(l.colData=[],l.gridApi.setColumnDefs(l.colData),l.colData.push({headerName:"_id",value:"_id",hide:!0,suppressToolPanel:!0,field:"_id"}),l.colIds.push("_id"),l.colData.push({headerName:"",field:"group",pinned:"left",cellStyle:{color:"white","background-color":"#1c77b9"}}),l.colIds.push("group"),l.colData.push({headerName:l.row_headers.title,field:"row",pinned:"left",cellStyle:{color:"white","background-color":"#1c77b9"}}),l.colIds.push(l.row_headers.title),l.indexIds.push("row"),l.index_cols.forEach((function(t){if(t.options.length>0){var e=[];t.options.forEach((function(t){e.push(t.nepali_name)})),l.colData.push({headerName:t.title,field:t.col_id,sortable:!0,filter:!0,cellEditor:"agSelectCellEditor",cellEditorParams:{values:e},type:"Select",options:t.options})}else l.colData.push({headerName:t.title,field:t.col_id,sortable:!0,filter:!0});l.colIds.push(t.col_id),l.indexIds.push(t.col_id)})),l.col_headers.forEach((function(t){l.modifyColumnHeaders(t),l.colData.push(t)})),l.gridApi.setColumnDefs(l.colData),l.gridApi.setHeaderHeight(50)),l.empty_table.forEach((function(t){var e={},n="",o="";l.row_headers.indicators.forEach((function(l){l.id==t.row&&(n=l.title,o=l.group[0])})),e.group=o,e.row=n;var a=[];a.push("group"),a.push("row");var i=Object.keys(t);i.forEach((function(n){if("row"!=n&&"group"!=n){var o="";l.index_cols.forEach((function(l){l.col_id==n&&l.options.forEach((function(l){l.id==t[n]&&(o=l.nepali_name,a.push(n))}))})),e[n]=o}})),i.forEach((function(l){var n=!1;a.forEach((function(t){t!=l||(n=!0)})),1!=n&&(e[l]=t[l])})),l.rowData.push(e)})),l.formService.getData(l.id).subscribe((function(t){l.apiData=t.data,l.rowData.forEach((function(t){var e="";l.row_headers.indicators.forEach((function(l){l.title==t.row&&(e=l.id)})),t.row=e;var n=[];n.push("row"),Object.keys(t).forEach((function(e){if("row"!=e){var o="";l.index_cols.forEach((function(l){l.col_id==e&&l.options.forEach((function(l){l.nepali_name==t[e]&&(o=l.id,n.push(e))}))})),t[e]=o}})),l.apiData.forEach((function(e){var n=!0;l.indexIds.forEach((function(l){0!=n&&(n=t[l]==e[l])})),1==n&&Object.keys(e).forEach((function(n){var o=!1;l.indexIds.forEach((function(t){t!=n||(o=!0)})),1!=o&&(t[n]=e[n])}))})),e="";var o="";l.row_headers.indicators.forEach((function(l){l.id==t.row&&(e=l.title,o=l.group[0])})),t.group=o,t.row=e,(n=[]).push("_id"),n.push("group"),n.push("row"),l.indexIds.forEach((function(e){if("row"!=e&&"group"!=e){var o="";l.index_cols.forEach((function(l){l.col_id==e&&l.options.forEach((function(l){l.id==t[e]&&(o=l.nepali_name,n.push(e))}))})),t[e]=o}})),l.gridColumnApi.getAllColumns().forEach((function(e){var n=e.getUserProvidedColDef();if(-1!==l.indexIds.indexOf(n.field));else{if("_id"==n.field||"group"==n.field)return;"Select"==n.type&&n.options.forEach((function(l){l.id==t[n.field]&&(t[n.field]=l.nepali_name)}))}}))})),l.gridApi.setRowData([]),l.gridApi.setRowData(l.rowData);var e=[];l.gridColumnApi.getAllColumns().forEach((function(t){e.push(t.colId)})),l.gridColumnApi.autoSizeColumns(e,!1)}))}))},t.prototype.addNewRow=function(){this.rowData.push({}),this.gridApi.setRowData(this.rowData)},t.prototype.onGridReady=function(t){this.gridApi=t.api,this.gridColumnApi=t.columnApi,this.gridApi.setColumnDefs([]),this.renderTable(!1)},t.prototype.onBtStopEditing=function(){this.gridApi.stopEditing()},t.prototype.navigateToDesignTables=function(){this.router.navigate(["admin/tables/design/"+this.id])},t.prototype.onCellClicked=function(t){this.editingRowIndex!=t.rowIndex&&(t.api.startEditingCell({rowIndex:t.rowIndex,colKey:t.column.colId}),this.editingRowIndex=t.rowIndex),this.buttonText="Save Data",this.btnClass=""},t.prototype.onCellEditingStopped=function(t){this.updatedData=t.data},t.prototype.onRowEditingStopped=function(t){t.data._id=this.saveRowData(t.data)},t.prototype.onPasteEnd=function(t){var l=this;this.gridApi.forEachNode((function(t){t.data._id=l.saveRowData(t.data)}))},t.prototype.onColumnResized=function(t){},t.prototype.modifyColumnHeaders=function(t){var l=this;return t.hasOwnProperty("children")&&t.children.forEach((function(t){if("Select"==t.type){var e=[];t.options.forEach((function(t){e.push(t.nepali_name)})),t.cellEditor="agSelectCellEditor",t.cellEditorParams={values:e}}else"Number"==t.type&&(t.cellStyle={"text-align":"right","font-family":"PCS Nepali"});l.modifyColumnHeaders(t)})),null},t.prototype.curencyNepaliRupeesFormtter=function(t){return"रू"+this.formatNumber(t.value)},t.prototype.currencyDollarFormatter=function(t){console.log(t)},t.prototype.formatNumber=function(t){return Math.floor(t).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},t.prototype.saveRowData=function(t){var l=this,e={};this.gridColumnApi.getAllColumns().forEach((function(l){var n=l.getUserProvidedColDef();"Select"==n.type?n.options.forEach((function(l){l.nepali_name==t[n.field]&&(e[n.field]=l.id)})):t[n.field]?e[n.field]=t[n.field]:"_id"!=n.field&&(e[n.field]="")})),this.row_headers.indicators.forEach((function(t){t.title==e.row&&(e.row=t.id)}));var n="";this.formService.saveData(this.id,{data:e}).subscribe((function(t){return n=t.data[0]._id,l.buttonText="Saved",l.btnClass="btn-success",n}))},t.prototype.saveTableConfiguration=function(){var t=this;this.tableState.tableID=this.id,this.tableState.colState=this.gridColumnApi.getColumnState(),this.tableState.groupState=this.gridColumnApi.getColumnGroupState(),this.tableState.sortState=this.gridApi.getSortModel(),this.tableState.filterState=this.gridApi.getFilterModel();var l={data:this.tableState};console.log(l),this.generalService.saveTableState(l).subscribe((function(l){t.tableState._id=l.data[0]._id}))},t.prototype.restoreState=function(){var t=this;this.generalService.getTableState(this.id).subscribe((function(l){console.log(l),l.data[0]?(t.tableState._id=l.data[0]._id,t.tableState.tableID=l.data[0].tableID,t.tableState.colState=l.data[0].colState,t.tableState.groupState=l.data[0].groupState,t.tableState.sortState=l.data[0].sortState,t.tableState.filterState=l.data[0].filterState,t.gridColumnApi.setColumnState(t.tableState.colState),t.gridColumnApi.setColumnGroupState(t.tableState.groupState),t.gridApi.setSortModel(t.tableState.sortState),t.gridApi.setFilterModel(t.tableState.filterState)):(t.tableState.tableID=t.id,t.tableState.colState=t.gridColumnApi.getColumnState(),t.tableState.groupState=t.gridColumnApi.getColumnGroupState(),t.tableState.sortState=t.gridApi.getSortModel(),t.tableState.filterState=t.gridApi.getFilterModel())}))},t}()),y=n["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function R(t){return n["ɵvid"](0,[(t()(),n["ɵeld"](0,0,null,null,19,"div",[["class","card main-card mb-3"]],null,null,null,null,null)),(t()(),n["ɵeld"](1,0,null,null,8,"div",[["class","card-header"]],null,null,null,null,null)),(t()(),n["ɵted"](2,null,[" "," "])),(t()(),n["ɵeld"](3,0,null,null,6,"div",[["class","btn-actions-pane-right text-capitalize"]],null,null,null,null,null)),(t()(),n["ɵeld"](4,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(t,l,e){var n=!0;return"click"===l&&(n=!1!==t.component.navigateToDesignTables()&&n),n}),null,null)),(t()(),n["ɵted"](-1,null,["Design Tables"])),(t()(),n["ɵeld"](6,0,null,null,1,"button",[],[[8,"className",0]],[[null,"click"]],(function(t,l,e){var n=!0;return"click"===l&&(n=!1!==t.component.onBtStopEditing()&&n),n}),null,null)),(t()(),n["ɵted"](7,null,["",""])),(t()(),n["ɵeld"](8,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(t,l,e){var n=!0;return"click"===l&&(n=!1!==t.component.saveTableConfiguration()&&n),n}),null,null)),(t()(),n["ɵted"](-1,null,["Save Table Configuration"])),(t()(),n["ɵeld"](10,0,null,null,9,"div",[["class","card-body"]],null,null,null,null,null)),(t()(),n["ɵeld"](11,0,null,null,8,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(t()(),n["ɵeld"](12,0,null,null,7,"div",[["class","mb-3 card"]],null,null,null,null,null)),(t()(),n["ɵeld"](13,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(t()(),n["ɵeld"](14,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(t()(),n["ɵeld"](15,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["style","width: auto; height: 600px;"]],[[8,"id",0]],[[null,"cellClicked"],[null,"cellEditingStopped"],[null,"rowEditingStopped"],[null,"gridReady"],[null,"columnResized"],[null,"pasteEnd"]],(function(t,l,e){var n=!0,o=t.component;return"cellClicked"===l&&(n=!1!==o.onCellClicked(e)&&n),"cellEditingStopped"===l&&(n=!1!==o.onCellEditingStopped(e)&&n),"rowEditingStopped"===l&&(n=!1!==o.onRowEditingStopped(e)&&n),"gridReady"===l&&(n=!1!==o.onGridReady(e)&&n),"columnResized"===l&&(n=!1!==o.onColumnResized(e)&&n),"pasteEnd"===l&&(n=!1!==o.onPasteEnd(e)&&n),n}),r.b,r.a)),n["ɵprd"](512,null,u.d,u.d,[n.NgZone]),n["ɵprd"](512,null,u.e,u.e,[]),n["ɵdid"](18,4898816,[["agGrid",4]],1,u.a,[n.ElementRef,n.ViewContainerRef,u.d,u.e,n.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],rowClassRules:[4,"rowClassRules"],statusBar:[5,"statusBar"],sideBar:[6,"sideBar"],editType:[7,"editType"],enableRangeSelection:[8,"enableRangeSelection"],animateRows:[9,"animateRows"],enterMovesDownAfterEdit:[10,"enterMovesDownAfterEdit"],enterMovesDown:[11,"enterMovesDown"],enableCharts:[12,"enableCharts"]},{columnResized:"columnResized",pasteEnd:"pasteEnd",cellClicked:"cellClicked",gridReady:"gridReady",rowEditingStopped:"rowEditingStopped",cellEditingStopped:"cellEditingStopped"}),n["ɵqud"](603979776,1,{columns:1})],(function(t,l){var e=l.component;t(l,18,1,[e.rowData,e.colData,e.autoGroupColumnDef,e.defaultColDef,e.rowClassRules,e.statusBar,e.sideBar,e.editType,!0,!0,!0,!0,!0])}),(function(t,l){var e=l.component;t(l,2,0,e.pageTitle),t(l,6,0,n["ɵinlineInterpolate"](1,"btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm ",e.btnClass,"")),t(l,7,0,e.buttonText),t(l,15,0,n["ɵinlineInterpolate"](1,"",e.gridId,""))}))}function _(t){return n["ɵvid"](0,[(t()(),n["ɵeld"](0,0,null,null,1,"app-table-details",[],null,null,null,R,y)),n["ɵdid"](1,114688,null,0,E,[c.a,p.FormBuilder,d.a,c.o,b.a],null,null)],(function(t,l){t(l,1,0)}),null)}var x=n["ɵccf"]("app-table-details",E,_,{},{},[]),A=function(){function t(t,l,e,n){this.activatedRoute=t,this.formBuilder=l,this.formService=e,this.router=n,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowData=[],this.fields=[],this.title="app",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow",this.colIds=[],this.indexIds=[]}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe((function(l){t.id=l.id}))},t.prototype.renderTable=function(t){var l=this;this.formService.getDataHeaders(this.id).subscribe((function(e){console.log(e),l.row_headers=e.rows_headers,l.col_headers=e.col_headers,l.index_cols=e.index_cols,l.empty_table=e.empty_table,l.rowData=[],l.gridApi.setRowData([]),1==t&&(l.colData.push({headerName:"_id",value:"_id",hide:!0,suppressToolPanel:!0}),l.colIds.push("_id"),l.colData.push({headerName:"group",field:"group",pinned:"left"}),l.colIds.push("group"),l.colData.push({headerName:l.row_headers.title,field:"row",pinned:"left"}),l.colIds.push(l.row_headers.title),l.indexIds.push("row"),l.index_cols.forEach((function(t){if(t.options.length>0){var e=[];t.options.forEach((function(t){e.push(t.nepali_name)})),l.colData.push({headerName:t.title,field:t.col_id,sortable:!0,filter:!0,cellEditor:"agSelectCellEditor",cellEditorParams:{values:e}})}else l.colData.push({headerName:t.title,field:t.col_id,sortable:!0,filter:!0});l.colIds.push(t.col_id),l.indexIds.push(t.col_id)})),l.col_headers.forEach((function(t){var e={headerName:"",children:[]},n={headerName:"",children:[]};console.log(t),console.log(t.group.length),t.group.reverse().forEach((function(t){""==e.headerName?e.headerName=t:""==n.headerName&&(n.headerName=t)})),n.children.push({headerName:t.title,field:t.id,sortable:!0,filter:!0,editable:!0}),e.children.push(n),l.colData.push(e),l.colIds.push(t.id)}))),l.gridApi.setColumnDefs(l.colData),l.empty_table.forEach((function(t){var e={},n="",o="";l.row_headers.indicators.forEach((function(l){l.id==t.row&&(n=l.title,o=l.group[0])})),e.group=o,e.row=n;var a=[];a.push("group"),a.push("row");var i=Object.keys(t);i.forEach((function(n){if("row"!=n&&"group"!=n){var o="";l.index_cols.forEach((function(l){l.col_id==n&&l.options.forEach((function(l){l.id==t[n]&&(o=l.nepali_name,a.push(n))}))})),e[n]=o}})),i.forEach((function(l){var n=!1;a.forEach((function(t){t!=l||(n=!0)})),1!=n&&(e[l]=t[l])})),l.rowData.push(e)})),console.log("Row data"),console.log(l.rowData),l.formService.getData(l.id).subscribe((function(t){l.apiData=t.data,l.rowData.forEach((function(t){var e="";l.row_headers.indicators.forEach((function(l){l.title==t.row&&(e=l.id)})),t.row=e;var n=[];n.push("row"),Object.keys(t).forEach((function(e){if("row"!=e){var o="";l.index_cols.forEach((function(l){l.col_id==e&&l.options.forEach((function(l){l.nepali_name==t[e]&&(o=l.id,n.push(e))}))})),t[e]=o}})),l.apiData.forEach((function(e){var n=!0;l.indexIds.forEach((function(l){0!=n&&(n=t[l]==e[l])})),1==n&&(Object.keys(e).forEach((function(n){var o=!1;l.indexIds.forEach((function(t){t!=n||(o=!0)})),1!=o&&(t[n]=e[n])})),console.log(t))})),e="";var o="";l.row_headers.indicators.forEach((function(l){l.id==t.row&&(e=l.title,o=l.group[0])})),t.group=o,t.row=e,(n=[]).push("group"),n.push("row"),l.indexIds.forEach((function(e){if("row"!=e&&"group"!=e){var o="";l.index_cols.forEach((function(l){l.col_id==e&&l.options.forEach((function(l){l.id==t[e]&&(o=l.nepali_name,n.push(e))}))})),t[e]=o}}))})),l.gridApi.setRowData([]),l.gridApi.setRowData(l.rowData)}))}))},t.prototype.addNewRow=function(){this.rowData.push({}),this.gridApi.setRowData(this.rowData)},t.prototype.onGridReady=function(t){this.gridApi=t.api,this.gridColumnApi=t.columnApi,this.renderTable(!0)},t.prototype.onBtStopEditing=function(){this.gridApi.stopEditing()},t.prototype.onCellClicked=function(t){this.editingRowIndex!=t.rowIndex&&(t.api.startEditingCell({rowIndex:t.rowIndex,colKey:t.column.colId}),this.editingRowIndex=t.rowIndex)},t.prototype.onCellEditingStopped=function(t){this.updatedData=t.data},t.prototype.onRowEditingStopped=function(t){var l=this,e=t.data;console.log("On sop"),console.log(e);var n={},o="";this.row_headers.indicators.forEach((function(t){t.title==e.row&&(o=t.id)})),n.row=o;var a=[];a.push("row");var i=Object.keys(e);i.forEach((function(t){if("row"!=t){var o="";l.index_cols.forEach((function(l){l.col_id==t&&l.options.forEach((function(l){l.nepali_name==e[t]&&(o=l.id,a.push(t))}))})),n[t]=o}})),i.forEach((function(t){var l=!1;a.forEach((function(e){e!=t||(l=!0)})),1!=l&&(n[t]=e[t])}));var r={data:n};console.log(r),this.formService.saveData(this.id,r).subscribe((function(t){l.renderTable(!1)}))},t}(),I=n["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function T(t){return n["ɵvid"](0,[(t()(),n["ɵeld"](0,0,null,null,15,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(t()(),n["ɵeld"](1,0,null,null,14,"div",[["class","mb-3 card"]],null,null,null,null,null)),(t()(),n["ɵeld"](2,0,null,null,6,"div",[["class","card-header-tab card-header"]],null,null,null,null,null)),(t()(),n["ɵeld"](3,0,null,null,2,"div",[["class","card-header-title font-size-lg text-capitalize font-weight-normal"]],null,null,null,null,null)),(t()(),n["ɵeld"](4,0,null,null,0,"i",[["class","header-icon lnr-charts icon-gradient bg-happy-green"]],null,null,null,null,null)),(t()(),n["ɵted"](-1,null,[" Enter data in tables from here "])),(t()(),n["ɵeld"](6,0,null,null,2,"div",[["class","btn-actions-pane-right text-capitalize"]],null,null,null,null,null)),(t()(),n["ɵeld"](7,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(t,l,e){var n=!0;return"click"===l&&(n=!1!==t.component.onBtStopEditing()&&n),n}),null,null)),(t()(),n["ɵted"](-1,null,["Save data"])),(t()(),n["ɵeld"](9,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(t()(),n["ɵeld"](10,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(t()(),n["ɵeld"](11,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["id","tableDataEntryGrid"],["style","width: auto; height: 600px;"]],null,[[null,"cellClicked"],[null,"cellEditingStopped"],[null,"rowEditingStopped"],[null,"gridReady"]],(function(t,l,e){var n=!0,o=t.component;return"cellClicked"===l&&(n=!1!==o.onCellClicked(e)&&n),"cellEditingStopped"===l&&(n=!1!==o.onCellEditingStopped(e)&&n),"rowEditingStopped"===l&&(n=!1!==o.onRowEditingStopped(e)&&n),"gridReady"===l&&(n=!1!==o.onGridReady(e)&&n),n}),r.b,r.a)),n["ɵprd"](512,null,u.d,u.d,[n.NgZone]),n["ɵprd"](512,null,u.e,u.e,[]),n["ɵdid"](14,4898816,[["agGrid",4]],1,u.a,[n.ElementRef,n.ViewContainerRef,u.d,u.e,n.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],statusBar:[4,"statusBar"],sideBar:[5,"sideBar"],editType:[6,"editType"],enableRangeSelection:[7,"enableRangeSelection"],animateRows:[8,"animateRows"],enterMovesDownAfterEdit:[9,"enterMovesDownAfterEdit"],enterMovesDown:[10,"enterMovesDown"],enableCharts:[11,"enableCharts"]},{cellClicked:"cellClicked",gridReady:"gridReady",rowEditingStopped:"rowEditingStopped",cellEditingStopped:"cellEditingStopped"}),n["ɵqud"](603979776,1,{columns:1})],(function(t,l){var e=l.component;t(l,14,1,[e.rowData,e.colData,e.autoGroupColumnDef,e.defaultColDef,e.statusBar,e.sideBar,e.editType,!0,!0,!0,!0,!0])}),null)}function P(t){return n["ɵvid"](0,[(t()(),n["ɵeld"](0,0,null,null,1,"app-table-data-entry",[],null,null,null,T,I)),n["ɵdid"](1,114688,null,0,A,[c.a,p.FormBuilder,d.a,c.o],null,null)],(function(t,l){t(l,1,0)}),null)}var k=n["ɵccf"]("app-table-data-entry",A,P,{},{},[]),B=e("ZSaW"),G=e("Ip0R"),N=e("mEXF"),F=e("M2Lx"),M=e("Zseb"),z=e("bse0"),O={title:"Tables"},L={title:"Tables"},K={title:"Tables"},V={title:"Tables"},W=function(){return function(){}}(),j=e("6I2X"),Z=e("Pc/E"),H=e("dFiH"),X=e("Fzqc"),q=e("Wf4p"),Y=e("ZYjt"),Q=function(){return function(){}}(),J=e("4c35"),U=e("dWZg"),$=e("lLAP"),tt=e("La40");e("t/Na"),e("F/XL"),e("XlPw"),e("VNr4"),e("xMyE"),e("67Y/"),e("9Z1F"),e("2WpN"),e("S1nX"),e("t9fZ"),e("mrSG"),e("n6gG");var lt=function(){return function(){}}(),et=e("NVKa");e.d(l,"TablesModuleNgFactory",(function(){return nt}));var nt=n["ɵcmf"](a,[],(function(t){return n["ɵmod"]([n["ɵmpd"](512,n.ComponentFactoryResolver,n["ɵCodegenComponentFactoryResolver"],[[8,[i.a,m,S,x,k,B.a]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n["ɵmpd"](4608,G.NgLocalization,G.NgLocaleLocalization,[n.LOCALE_ID,[2,G["ɵangular_packages_common_common_a"]]]),n["ɵmpd"](4608,N.c,N.c,[]),n["ɵmpd"](4608,F.c,F.c,[]),n["ɵmpd"](1073742336,G.CommonModule,G.CommonModule,[]),n["ɵmpd"](1073742336,N.b,N.b,[]),n["ɵmpd"](1073742336,M.b,M.b,[]),n["ɵmpd"](1073742336,z.d,z.d,[]),n["ɵmpd"](1073742336,c.s,c.s,[[2,c.x],[2,c.o]]),n["ɵmpd"](1073742336,W,W,[]),n["ɵmpd"](1073742336,j.a,j.a,[]),n["ɵmpd"](1073742336,Z.a,Z.a,[]),n["ɵmpd"](1073742336,H.b,H.b,[]),n["ɵmpd"](1073742336,u.c,u.c,[]),n["ɵmpd"](1073742336,X.a,X.a,[]),n["ɵmpd"](1073742336,q.c,q.c,[[2,q.a],[2,Y.HAMMER_LOADER]]),n["ɵmpd"](1073742336,Q,Q,[]),n["ɵmpd"](1073742336,J.c,J.c,[]),n["ɵmpd"](1073742336,U.b,U.b,[]),n["ɵmpd"](1073742336,q.e,q.e,[]),n["ɵmpd"](1073742336,F.d,F.d,[]),n["ɵmpd"](1073742336,$.a,$.a,[]),n["ɵmpd"](1073742336,tt.j,tt.j,[]),n["ɵmpd"](1073742336,lt,lt,[]),n["ɵmpd"](1073742336,a,a,[]),n["ɵmpd"](1024,c.m,(function(){return[[{path:":id",component:s,data:O},{path:"design/:id",component:w,data:L},{path:"details/:id",component:E,data:K},{path:"data/:id",component:A,data:V}],[{path:"",component:et.a,data:j.b}]]}),[]),n["ɵmpd"](256,z.a,o,[])])}))}}]);