(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+cby":function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=(t("WZ4y"),{suppressScrollX:!0}),o=function(){return function(){}}(),a=t("pMnS"),i=t("lQre"),d=t("86hh"),r=t("md+p"),s=(t("2hxB"),function(){function l(l,n,t,e){this.activatedRoute=l,this.formBuilder=n,this.formService=t,this.router=e,this.loading=!1,this.submitted=!1,this.error="",this.columnDefs=[],this.colData=[],this.rowData=[],this.fields=[],this.title="app",this.autoGroupColumnDef={minWidth:200},this.defaultColDef={enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.sideBar={toolPanels:["filters",{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressSyncLayoutWithGrid:!0}}]},this.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left",key:"totalRowComponent"},{statusPanel:"agFilteredRowCountComponent",align:"left"},{statusPanel:"agSelectedRowCountComponent",align:"center"},{statusPanel:"agAggregationComponent",align:"right"}]},this.ColumnAddForm=this.formBuilder.group({newcolumn:""}),this.editType="fullRow"}return l.prototype.ngOnInit=function(){var l=this;this.activatedRoute.params.subscribe((function(n){l.id=n.id}))},l.prototype.renderTable=function(l){var n=this;this.formService.getFormDetails(this.id).subscribe((function(t){console.log(t),n.fields=t.fields,n.rowDefs=t.data,1==l&&(n.columnDefs=t.columns,console.log(n.columnDefs),n.columnDefs.forEach((function(l){n.colData.push("sub_forms"===l?{headerName:l,field:l}:{headerName:l,field:l,sortable:!0,filter:!0,editable:!0})})),n.colData.push({headerName:"tables",field:"tables"})),n.rowData=[],n.gridApi.setRowData(n.rowData),n.parentObject=n.rowDefs,n.subFormObjects=n.parentObject.sub_forms,n.subFormObjects.forEach((function(l){n.rowData.push(l)})),n.gridApi.setColumnDefs(n.colData),n.gridApi.setRowData(n.rowData)}))},l.prototype.addNewRow=function(){this.rowData.push({}),this.gridApi.setRowData(this.rowData)},l.prototype.onGridReady=function(l){this.gridApi=l.api,this.gridColumnApi=l.columnApi,this.renderTable(!0),this.gridApi.setColumnDefs(this.colData)},l.prototype.onBtStopEditing=function(){this.gridApi.stopEditing()},l.prototype.onCellClicked=function(l){this.editingRowIndex!=l.rowIndex&&(l.api.startEditingCell({rowIndex:l.rowIndex,colKey:l.column.colId}),this.editingRowIndex=l.rowIndex)},l.prototype.onCellEditingStopped=function(l){this.updatedData=l.data},l.prototype.onRowEditingStopped=function(l){var n=this;this.formService.saveFormValues({data:l.data}).subscribe((function(l){n.parentObject.sub_forms.push(l.data.id);var t={data:n.parentObject};console.log(t),n.formService.saveFormValues(t).subscribe((function(l){n.renderTable(!1)}))}))},l}()),c=t("ZYCi"),p=t("gIcY"),m=e["ɵcrt"]({encapsulation:2,styles:[],data:{}});function f(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,17,"div",[["style","margin-top: 20px;"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,16,"div",[["class","mb-3 card"]],null,null,null,null,null)),(l()(),e["ɵeld"](2,0,null,null,8,"div",[["class","card-header-tab card-header"]],null,null,null,null,null)),(l()(),e["ɵeld"](3,0,null,null,2,"div",[["class","card-header-title font-size-lg text-capitalize font-weight-normal"]],null,null,null,null,null)),(l()(),e["ɵeld"](4,0,null,null,0,"i",[["class","header-icon lnr-charts icon-gradient bg-happy-green"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,[" Forms "])),(l()(),e["ɵeld"](6,0,null,null,4,"div",[["class","btn-actions-pane-right text-capitalize"]],null,null,null,null,null)),(l()(),e["ɵeld"](7,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addNewRow()&&e),e}),null,null)),(l()(),e["ɵted"](-1,null,["Add new row"])),(l()(),e["ɵeld"](9,0,null,null,1,"button",[["class","btn-wide btn-outline-2x mr-md-2 btn btn-outline-focus btn-sm"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onBtStopEditing()&&e),e}),null,null)),(l()(),e["ɵted"](-1,null,["Save data"])),(l()(),e["ɵeld"](11,0,null,null,6,"div",[["class","no-gutters row"]],null,null,null,null,null)),(l()(),e["ɵeld"](12,0,null,null,5,"div",[["class","col-sm-12 col-md-12"]],null,null,null,null,null)),(l()(),e["ɵeld"](13,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-alpine"],["id","SubFormGrid"],["style","width: auto; height: 600px;"]],null,[[null,"cellClicked"],[null,"cellEditingStopped"],[null,"rowEditingStopped"],[null,"gridReady"]],(function(l,n,t){var e=!0,u=l.component;return"cellClicked"===n&&(e=!1!==u.onCellClicked(t)&&e),"cellEditingStopped"===n&&(e=!1!==u.onCellEditingStopped(t)&&e),"rowEditingStopped"===n&&(e=!1!==u.onRowEditingStopped(t)&&e),"gridReady"===n&&(e=!1!==u.onGridReady(t)&&e),e}),i.b,i.a)),e["ɵprd"](512,null,d.d,d.d,[e.NgZone]),e["ɵprd"](512,null,d.e,d.e,[]),e["ɵdid"](16,4898816,[["agGrid",4]],1,d.a,[e.ElementRef,e.ViewContainerRef,d.d,d.e,e.ComponentFactoryResolver],{rowData:[0,"rowData"],columnDefs:[1,"columnDefs"],autoGroupColumnDef:[2,"autoGroupColumnDef"],defaultColDef:[3,"defaultColDef"],statusBar:[4,"statusBar"],sideBar:[5,"sideBar"],editType:[6,"editType"],enableRangeSelection:[7,"enableRangeSelection"],animateRows:[8,"animateRows"],enterMovesDownAfterEdit:[9,"enterMovesDownAfterEdit"],enterMovesDown:[10,"enterMovesDown"],enableCharts:[11,"enableCharts"]},{cellClicked:"cellClicked",gridReady:"gridReady",rowEditingStopped:"rowEditingStopped",cellEditingStopped:"cellEditingStopped"}),e["ɵqud"](603979776,1,{columns:1})],(function(l,n){var t=n.component;l(n,16,1,[t.rowData,t.colData,t.autoGroupColumnDef,t.defaultColDef,t.statusBar,t.sideBar,t.editType,!0,!0,!0,!0,!0])}),null)}function g(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"app-admin-sub-forms",[],null,null,null,f,m)),e["ɵdid"](1,114688,null,0,s,[c.a,p.FormBuilder,r.a,c.o],null,null)],(function(l,n){l(n,1,0)}),null)}var b=e["ɵccf"]("app-admin-sub-forms",s,g,{},{},[]),h=t("ZSaW"),w=t("Ip0R"),v=t("mEXF"),C=t("Zseb"),D=t("bse0"),y={title:"Sub Forms"},R=function(){return function(){}}(),S=t("6I2X"),E=t("Pc/E"),F=t("dFiH"),N=t("NVKa");t.d(n,"SubFormsModuleNgFactory",(function(){return k}));var k=e["ɵcmf"](o,[],(function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[a.a,b,h.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[e.LOCALE_ID,[2,w["ɵangular_packages_common_common_a"]]]),e["ɵmpd"](4608,v.c,v.c,[]),e["ɵmpd"](1073742336,w.CommonModule,w.CommonModule,[]),e["ɵmpd"](1073742336,v.b,v.b,[]),e["ɵmpd"](1073742336,C.a,C.a,[]),e["ɵmpd"](1073742336,D.d,D.d,[]),e["ɵmpd"](1073742336,c.s,c.s,[[2,c.x],[2,c.o]]),e["ɵmpd"](1073742336,R,R,[]),e["ɵmpd"](1073742336,S.a,S.a,[]),e["ɵmpd"](1073742336,E.a,E.a,[]),e["ɵmpd"](1073742336,F.a,F.a,[]),e["ɵmpd"](1073742336,d.c,d.c,[]),e["ɵmpd"](1073742336,o,o,[]),e["ɵmpd"](1024,c.m,(function(){return[[{path:"",component:s,data:y}],[{path:"",component:N.a,data:S.b}]]}),[]),e["ɵmpd"](256,D.a,u,[])])}))},"6I2X":function(l,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return e})),t("NVKa");var e={title:"PageTitle"},u=function(){return function(){}}()},NVKa:function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));var e=function(){return function(){}}()},"Pc/E":function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));var e=function(){return function(){}}()},ZSaW:function(l,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return s}));var e=t("CcnG"),u=t("6Z5o"),o=t("mEXF"),a=t("NVKa"),i=e["ɵcrt"]({encapsulation:2,styles:[],data:{}});function d(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,16,"div",[["class","app-page-title"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,15,"div",[["class","page-title-wrapper"]],null,null,null,null,null)),(l()(),e["ɵeld"](2,0,null,null,6,"div",[["class","page-title-heading"]],null,null,null,null,null)),(l()(),e["ɵeld"](3,0,null,null,1,"div",[["class","page-title-icon"]],null,null,null,null,null)),(l()(),e["ɵeld"](4,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null)),(l()(),e["ɵeld"](5,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e["ɵted"](6,null,[" "," "])),(l()(),e["ɵeld"](7,0,null,null,1,"div",[["class","page-title-subheading"]],null,null,null,null,null)),(l()(),e["ɵted"](8,null,[" "," "])),(l()(),e["ɵeld"](9,0,null,null,7,"div",[["class","page-title-actions"]],null,null,null,null,null)),(l()(),e["ɵeld"](10,0,null,null,2,"button",[["class","btn-shadow mr-3 btn btn-dark"],["type","button"]],null,null,null,null,null)),(l()(),e["ɵeld"](11,0,null,null,1,"fa",[["name","star"]],null,null,null,u.b,u.a)),e["ɵdid"](12,114688,null,0,o.a,[],{name:[0,"name"]},null),(l()(),e["ɵeld"](13,0,null,null,3,"button",[["class","btn-shadow d-inline-flex align-items-center btn btn-success"],["type","button"]],null,null,null,null,null)),(l()(),e["ɵeld"](14,0,null,null,1,"fa",[["class","mr-2"],["name","plus"]],null,null,null,u.b,u.a)),e["ɵdid"](15,114688,null,0,o.a,[],{name:[0,"name"]},null),(l()(),e["ɵted"](-1,null,[" Create New "]))],(function(l,n){l(n,12,0,"star"),l(n,15,0,"plus")}),(function(l,n){var t=n.component;l(n,4,0,e["ɵinlineInterpolate"](1,"icon ",t.icon,"")),l(n,6,0,t.heading),l(n,8,0,t.subheading)}))}function r(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"app-page-title",[],null,null,null,d,i)),e["ɵdid"](1,49152,null,0,a.a,[],null,null)],null,null)}var s=e["ɵccf"]("app-page-title",a.a,r,{heading:"heading",subheading:"subheading",icon:"icon"},{},[])}}]);