(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UAcs:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),o=(e("WZ4y"),{suppressScrollX:!0}),a=function(){return function(){}}(),i=e("pMnS"),u=e("lQre"),r=e("86hh"),d=e("md+p"),s=function(){function l(l,n,e){this.formBuilder=l,this.formService=n,this.router=e,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowDefs=[],this.rowData=[],this.fields=[],this.title="app",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow",this.enableCharts=!0}return l.prototype.ngOnInit=function(){},l.prototype.renderTable=function(l){var n=this;this.formService.getFormValues().subscribe((function(e){n.fields=e.fields,n.rowDefs=e.data,1==l&&(n.columnDefs=e.columns,n.columnDefs.forEach((function(l){console.log(l),"sub_forms"!=l&&n.colData.push({headerName:l,field:l,sortable:!0,filter:!0,editable:!0})})),n.colData.push({headerName:"sub_forms",field:"id",cellRenderer:function(l){return'<a href="/admin/sub_forms/'+l.value+'" class="btn btn-sm"> view</a>'}}),n.colData.push({headerName:"tables",field:"id",cellRenderer:function(l){return'<a href="/admin/tables/'+l.value+'" class="btn btn-sm">view</a>'}})),n.rowData=[],n.gridApi.setRowData(n.rowData),n.rowDefs.forEach((function(l){n.rowData.push(l)})),n.gridApi.setColumnDefs(n.colData),n.gridApi.setRowData(n.rowData)}))},l.prototype.addNewColumn=function(l){var n=l.newcolumn;""!=n&&(this.colData.push({headerName:n,field:n,sortable:!0,filter:!0,editable:!0,rowGroup:!0}),this.gridApi.setColumnDefs(this.colData))},l.prototype.addNewRow=function(){this.rowData.push({}),this.gridApi.setRowData(this.rowData)},l.prototype.onGridReady=function(l){this.gridApi=l.api,this.gridColumnApi=l.columnApi,this.renderTable(!0),this.gridApi.setColumnDefs(this.colData)},l.prototype.onBtStopEditing=function(){this.gridApi.stopEditing()},l.prototype.onCellClicked=function(l){this.editingRowIndex!=l.rowIndex&&(l.api.startEditingCell({rowIndex:l.rowIndex,colKey:l.column.colId}),this.editingRowIndex=l.rowIndex)},l.prototype.onCellEditingStopped=function(l){this.updatedData=l.data},l.prototype.onRowEditingStopped=function(l){var n=this,e={data:l.data};console.log(e),this.formService.saveFormValues(e).subscribe((function(l){n.renderTable(!1)}))},l.prototype.viewSubForms=function(){console.log("Viewing forms")},l}(),c=e("gIcY"),p=e("ZYCi"),m=t["ɵcrt"]({encapsulation:2,styles:[],data:{}});function f(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,17,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(l()(),t["ɵeld"](1,0,null,null,16,"div",[["class","mb-3 card"]],null,null,null,null,null)),(l()(),t["ɵeld"](2,0,null,null,8,"div",[["class","card-header-tab card-header"]],null,null,null,null,null)),(l()(),t["ɵeld"](3,0,null,null,2,"div",[["class","card-header-title font-size-lg text-capitalize font-weight-normal"]],null,null,null,null,null)),(l()(),t["ɵeld"](4,0,null,null,0,"i",[["class","header-icon lnr-charts icon-gradient bg-happy-green"]],null,null,null,null,null)),(l()(),t["ɵted"](-1,null,[" Forms "])),(l()(),t["ɵeld"](6,0,null,null,4,"div",[["class","btn-actions-pane-right text-capitalize"]],null,null,null,null,null)),(l()(),t["ɵeld"](7,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addNewRow()&&t),t}),null,null)),(l()(),t["ɵted"](-1,null,["Add new row"])),(l()(),t["ɵeld"](9,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onBtStopEditing()&&t),t}),null,null)),(l()(),t["ɵted"](-1,null,["Save data"])),(l()(),t["ɵeld"](11,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(l()(),t["ɵeld"](12,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(l()(),t["ɵeld"](13,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["id","myGrid"],["style","width: auto; height: 600px;"]],null,[[null,"cellClicked"],[null,"cellEditingStopped"],[null,"rowEditingStopped"],[null,"gridReady"]],(function(l,n,e){var t=!0,o=l.component;return"cellClicked"===n&&(t=!1!==o.onCellClicked(e)&&t),"cellEditingStopped"===n&&(t=!1!==o.onCellEditingStopped(e)&&t),"rowEditingStopped"===n&&(t=!1!==o.onRowEditingStopped(e)&&t),"gridReady"===n&&(t=!1!==o.onGridReady(e)&&t),t}),u.b,u.a)),t["ɵprd"](512,null,r.d,r.d,[t.NgZone]),t["ɵprd"](512,null,r.e,r.e,[]),t["ɵdid"](16,4898816,[["agGrid",4]],1,r.a,[t.ElementRef,t.ViewContainerRef,r.d,r.e,t.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],statusBar:[4,"statusBar"],sideBar:[5,"sideBar"],editType:[6,"editType"],enableRangeSelection:[7,"enableRangeSelection"],animateRows:[8,"animateRows"],enterMovesDownAfterEdit:[9,"enterMovesDownAfterEdit"],enterMovesDown:[10,"enterMovesDown"],enableCharts:[11,"enableCharts"]},{cellClicked:"cellClicked",gridReady:"gridReady",rowEditingStopped:"rowEditingStopped",cellEditingStopped:"cellEditingStopped"}),t["ɵqud"](603979776,1,{columns:1})],(function(l,n){var e=n.component;l(n,16,1,[e.rowData,e.colData,e.autoGroupColumnDef,e.defaultColDef,e.statusBar,e.sideBar,e.editType,!0,!0,!0,!0,e.enableCharts])}),null)}function g(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"app-admin-forms",[],null,null,null,f,m)),t["ɵdid"](1,114688,null,0,s,[c.FormBuilder,d.a,p.o],null,null)],(function(l,n){l(n,1,0)}),null)}var h=t["ɵccf"]("app-admin-forms",s,g,{},{},[]),w=e("ZSaW"),b=e("Ip0R"),C=e("mEXF"),D=e("Zseb"),v=e("bse0"),y={title:"Forms"},R=function(){return function(){}}(),S=e("6I2X"),E=e("Pc/E"),A=e("dFiH"),F=e("NVKa");e.d(n,"FormsModuleNgFactory",(function(){return k}));var k=t["ɵcmf"](a,[],(function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[i.a,h,w.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[t.LOCALE_ID,[2,b["ɵangular_packages_common_common_a"]]]),t["ɵmpd"](4608,C.c,C.c,[]),t["ɵmpd"](1073742336,b.CommonModule,b.CommonModule,[]),t["ɵmpd"](1073742336,C.b,C.b,[]),t["ɵmpd"](1073742336,D.b,D.b,[]),t["ɵmpd"](1073742336,v.d,v.d,[]),t["ɵmpd"](1073742336,p.s,p.s,[[2,p.x],[2,p.o]]),t["ɵmpd"](1073742336,R,R,[]),t["ɵmpd"](1073742336,S.a,S.a,[]),t["ɵmpd"](1073742336,E.a,E.a,[]),t["ɵmpd"](1073742336,A.b,A.b,[]),t["ɵmpd"](1073742336,r.c,r.c,[]),t["ɵmpd"](1073742336,a,a,[]),t["ɵmpd"](1024,p.m,(function(){return[[{path:"",component:s,data:y}],[{path:"",component:F.a,data:S.b}]]}),[]),t["ɵmpd"](256,v.a,o,[])])}))}}]);